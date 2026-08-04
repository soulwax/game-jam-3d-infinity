import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:math' as math;

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/audio.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/fps_motion.dart';
import 'package:quarantine/engine/hud.dart';
import 'package:quarantine/engine/input.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/renderer.dart';
import 'package:quarantine/game/ambient_audio.dart';
import 'package:quarantine/game/browser_save_store.dart';
import 'package:quarantine/game/ending.dart';
import 'package:quarantine/game/player_state.dart';
import 'package:quarantine/game/rupture_gate.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/emitter.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/interaction.dart';
import 'package:quarantine/house/room.dart';
import 'package:quarantine/journal/entry.dart' show Vocabulary;
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/time.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/story/schema.dart' show vocabularyFields;
import 'package:quarantine/story/text.dart';
import 'package:quarantine/story/unverifiable_notice.dart';
import 'package:quarantine/ui/ambient_notice.dart';
import 'package:quarantine/ui/broadcast.dart';
import 'package:quarantine/ui/door.dart';
import 'package:quarantine/ui/ending_panel.dart';
import 'package:quarantine/ui/help_panel.dart';
import 'package:quarantine/ui/journal_panel.dart';
import 'package:quarantine/ui/panel.dart';
import 'package:quarantine/ui/prompt.dart';
import 'package:quarantine/ui/sleep_panel.dart';
import 'package:quarantine/visitors/ambient.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/stand_ins.dart';
import 'package:quarantine/visitors/state.dart';
import 'package:web/web.dart' as web;

@JS('Object.keys')
external JSArray<JSString> _keysOf(JSObject o);

const double _fixedDt = 1 / 120;
const int _maxSteps = 10;
const double _maxFrameTime = 0.25;

const double _bgHue = 0.0;

bool get _legacyRenderProfile => Uri.base.queryParameters['render'] == 'legacy';

int _mintRunSeed() => 1 + math.Random().nextInt(0x7FFFFFFF);

late web.HTMLCanvasElement _canvas;
late Camera _camera;
late Input _input;
late Hud<Object> _hud;
Renderer? _renderer;
late House _house;
RoomEmitter? _emitter;
late GameTime _time;
late GameSession _session;
late BrowserSaveStore _saveStore;

web.Element? _fpsDiv;

Audio? _audio;
bool _audioArmed = false;

bool _paused = false;
bool _haveLastTime = false;
double _lastTime = 0;
double _accumulator = 0;
bool _shadersLive = false;
String _bootPhase = 'booting';

Vec3 _simEye = Vec3(0, 0, 0);
Vec3 _prevEye = Vec3(0, 0, 0);
Vec3 _viewEye = Vec3(0, 0, 0);
double _simYaw = 0;
double _simPitch = 0;

String _currentRoom = 'hall';
late Capsule _playerCapsule;
late ExamineState _examineState;
late RuptureState _rupture;
final FpsMotion _motion = FpsMotion();

Panel? _activePanel;
late JournalPanel _journal;
late InteractionEngine _interactionEngine;
late Prompt _prompt;
late Broadcast _broadcast;
late Door _door;
late SleepPanel _sleepPanel;
late HelpPanel _helpPanel;
late EndingPanel _endingPanel;
late VisitorDirector _visitorDirector;
late AmbientDirector _ambientDirector;
late AmbientNotice _ambientNotice;
final Set<int> _unverifiableDaysShown = {};

final List<String> _pendingSounds = [];
EndingState? _ending;
bool _runEnded = false;

Future<void> main() async {
  final canvas = web.document.getElementById('game') as web.HTMLCanvasElement?;
  if (canvas == null) return;
  _canvas = canvas;
  _fpsDiv = web.document.getElementById('fps');
  _installBootDiagnostics();
  final ctx = canvas.getContext('webgl2') as web.WebGL2RenderingContext?;
  if (ctx == null) {
    _setBootPhase('no-webgl2');
    web.document.getElementById('credits')?.textContent =
        'this browser has no webgl2.';
    return;
  }
  try {
    _setBootPhase('initializing');
    _camera = Camera();
    _camera.breathScale =
        web.window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 0.5
        : 1.0;
    _input = Input(web.window);
    _hud = Hud<Object>();

    _canvas.width = web.window.innerWidth > 0 ? web.window.innerWidth : 800;
    _canvas.height = web.window.innerHeight > 0 ? web.window.innerHeight : 600;
    _setBootPhase('renderer');
    _renderer = Renderer(ctx, _canvas.width, _canvas.height);
    _renderer!.configureImageEffects(
      affineTexture: _legacyRenderProfile,
      vertexSnapping: _legacyRenderProfile,
      colorQuantize: _legacyRenderProfile,
    );

    _setBootPhase('text');
    await textLibrary.load();
    final visitorStory = textLibrary.visitorStory();
    final visitorBuild = VisitorDirector.build(visitorStory);
    if (visitorBuild is! VisitorDirectorBuilt) {
      final issue = (visitorBuild as VisitorUnavailable).issue;
      throw 'Failed to build visitors: ${issue.message}';
    }
    _visitorDirector = visitorBuild.director;
    _ambientDirector = AmbientDirector.build(visitorStory);
    final vocabulary = Vocabulary({
      for (final field in vocabularyFields)
        field: textLibrary.getVocabulary(field),
    });
    _saveStore = BrowserSaveStore();
    final saved = _saveStore.read(
      isUsable: (snapshot) {
        try {
          GameSession.restore(vocabulary: vocabulary, snapshot: snapshot);
          return true;
        } on FormatException {
          return false;
        }
      },
    );
    _session = saved.snapshot == null
        ? GameSession.create(
            vocabulary: vocabulary,
            houseSeed: 42,
            runSeed: _mintRunSeed(),
            startHour: initialDayHour,
          )
        : GameSession.restore(
            vocabulary: vocabulary,
            snapshot: saved.snapshot!,
          );
    if (saved.recovery != null) _showSaveStatus(saved.recovery!);
    _visitorDirector.standIns = drawStandIns(
      _session.runSeed,
      eligibleStandIns(visitorStory.visitors),
    ).toSet();
    _setBootPhase('house');
    _house = _session.house;
    _time = _session.time;

    _simEye = Vec3(5.5, 1.65, 3.5);
    _prevEye = _simEye;
    _viewEye = _simEye;
    final initialCapsuleBase =
        _simEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
    _playerCapsule = Capsule(
      base: initialCapsuleBase,
      tip:
          initialCapsuleBase +
          Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
    );
    _examineState = ExamineState();
    _rupture = RuptureState();
    _currentRoom = 'hall';
    final savedPlayer = PlayerState.tryFromJson(saved.snapshot?.meta['player']);
    if (savedPlayer != null && savedPlayer.isCollisionSafe(_house)) {
      _simEye = savedPlayer.eye;
      _prevEye = _simEye;
      _viewEye = _simEye;
      _simYaw = savedPlayer.yaw;
      _simPitch = savedPlayer.pitch;
      _currentRoom = savedPlayer.roomId;
      final restoredBase =
          _simEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
      _playerCapsule
        ..base = restoredBase
        ..tip =
            restoredBase +
            Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0);

      _playerCapsule.restoreActiveStair(
        house: _house,
        stairId: savedPlayer.activeStairId,
        progress: savedPlayer.activeStairProgress,
        currentRoom: _currentRoom,
        eye: _simEye,
      );

      _showSaveStatus('restored position');
    }

    _interactionEngine = InteractionEngine(
      journal: _session.journal,
      time: _time,
      runSeed: _session.runSeed,
    );
    _journal = JournalPanel(
      web.document,
      _session.journal,
      _time,
      _interactionEngine,
    );
    _journal.onClose = () {
      _activePanel = null;
      _input.requestPointerLock(_canvas);
    };
    _prompt = Prompt(web.document);
    _broadcast = Broadcast(web.document);
    _ambientNotice = AmbientNotice(web.document);
    _door = Door(web.document)
      ..onChoice = _chooseDoorResponse
      ..onContinue = _continueDoorConversation
      ..onCite = _citeDuringVisit;
    final savedVisitors = VisitorDirectorState.tryFromJson(
      saved.snapshot?.meta['visitors'],
    );
    if (savedVisitors != null && _visitorDirector.restore(savedVisitors)) {
      _restoreVisitorDoor();
    }
    _ambientDirector.restoreDelivered(saved.snapshot?.meta['ambient']);
    final savedUnverifiables = saved.snapshot?.meta['unverifiables'];
    if (savedUnverifiables is List) {
      for (final day in savedUnverifiables) {
        if (day is int) _unverifiableDaysShown.add(day);
      }
    }
    _sleepPanel = SleepPanel(web.document)
      ..onSleep = (quality, location) {
        if (_session.snapshot.day == 21) {
          _resolveEnding();
          return;
        }
        final driftedBefore = _house.drift.landedCount;
        _session.sleep(quality, location, currentRoom: _currentRoom);
        final driftedAfter = _house.drift.landedCount;
        for (var i = driftedBefore; i < driftedAfter; i++) {
          _emitter?.rebuildRoom(_house.drift.schedule[i].roomId);
        }
        _saveSession('saved after sleep');
      }
      ..onClose = () {
        _activePanel = null;
        _input.requestPointerLock(_canvas);
      };
    _helpPanel = HelpPanel(web.document)
      ..onClose = () {
        _activePanel = null;
        _input.requestPointerLock(_canvas);
      };
    _endingPanel = EndingPanel(web.document)
      ..onClose = () {
        _activePanel = null;
      }
      ..onDismiss = () {
        _activePanel = null;
      };
    final savedEnding = EndingState.tryFromJson(saved.snapshot?.meta['ending']);
    if (savedEnding != null) _presentEnding(savedEnding);

    final renderer = _renderer;
    if (renderer != null) {
      _setBootPhase('world');
      _emitter = RoomEmitter(_house, renderer);
    }

    _shadersLive = web.window.location.search.contains('shaders=live');
    if (_shadersLive) {
      _renderer?.reloadShadersLive();
    }

    _resize();
    web.window.addEventListener('resize', ((web.Event _) => _resize()).toJS);
    web.window.addEventListener(
      'keydown',
      ((web.KeyboardEvent e) {
        if (e.code == 'KeyP' && !e.repeat) _paused = !_paused;
        if (e.code == 'KeyR' && !e.repeat && _shadersLive) {
          _renderer?.reloadShadersLive();
        }
        if (e.code == 'KeyJ' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _journal;
            _journal.open();
          } else if (_activePanel == _journal) {
            _journal.close();
          }
        }
        if (e.code == 'KeyL' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _sleepPanel;
            _sleepPanel.open();
          } else if (_activePanel == _sleepPanel) {
            _sleepPanel.close();
          }
        }
        if (e.code == 'KeyH' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _helpPanel;
            _helpPanel.open();
          } else if (_activePanel == _helpPanel) {
            _helpPanel.close();
          }
        }
        if (e.code == 'KeyK' && !e.repeat) _saveSession('saved');
      }).toJS,
    );
    web.window.addEventListener('keydown', ((web.Event _) => _armAudio()).toJS);
    web.window.addEventListener('click', ((web.Event _) => _armAudio()).toJS);
    _canvas.addEventListener(
      'click',
      ((web.Event _) => _input.requestPointerLock(_canvas)).toJS,
    );

    _loadManifest();
    _setBootPhase('raf');
    web.window.requestAnimationFrame(_raf.toJS);
  } catch (error, stack) {
    _reportBootError(error, stack);
  }
}

void _installBootDiagnostics() {
  web.window.addEventListener(
    'error',
    ((web.Event event) {
      final message = event is web.ErrorEvent ? event.message : event.type;
      _reportBootError(message);
    }).toJS,
  );
  web.window.addEventListener(
    'unhandledrejection',
    ((web.Event event) {
      final reason = event is web.PromiseRejectionEvent ? event.reason : null;
      _reportBootError('unhandled rejection: ${reason ?? event.type}');
    }).toJS,
  );
}

void _setBootPhase(String phase) {
  if (_bootPhase == phase) return;
  _bootPhase = phase;
  _canvas.setAttribute('data-boot-phase', phase);
}

void _saveSession(String status) {
  if (_rupture.isActive) {
    _showSaveStatus('save unavailable during rupture');
    return;
  }
  try {
    _saveStore.write(
      _session.toSaveSnapshot(
        meta: {
          'player': PlayerState(
            roomId: _currentRoom,
            eye: _simEye,
            yaw: _simYaw,
            pitch: _simPitch,
            activeStairId: _playerCapsule.activeStairId,
            activeStairProgress: _playerCapsule.activeStairProgress,
          ).toJson(),
          'visitors': _visitorDirector.snapshot.toJson(),
          'ambient': _ambientDirector.deliveredIds,
          'unverifiables': _unverifiableDaysShown.toList()..sort(),
          if (_ending != null) 'ending': _ending!.toJson(),
        },
      ),
    );
    _showSaveStatus(status);
  } catch (_) {
    _showSaveStatus('save failed');
  }
}

void _showSaveStatus(String message) {
  final status = web.document.getElementById('save-status');
  if (status == null) return;
  status.textContent = message;
  status.className = 'visible';
  web.window.setTimeout(
    ((JSAny? _) {
      status.className = '';
    }).toJS,
    2400.toJS,
  );
}

void _reportBootError(Object error, [StackTrace? stack]) {
  _setBootPhase('error');
  final message = '$error'.replaceAll('\n', ' ');
  _fpsDiv?.textContent = 'boot: $message';
  web.document.getElementById('credits')?.textContent = 'boot error: $message';
  final detail = stack == null ? '$error' : '$error\n$stack';
  _canvas.setAttribute('data-boot-error', detail);
  web.console.error(detail.toJS);
}

void _armAudio() {
  if (_audioArmed) return;
  _audioArmed = true;
  _audio?.resume();
  _pendingSounds.add('arm');
}

void _loadManifest() async {
  JSObject? data;
  try {
    final resp = await web.window.fetch('res/manifest.json'.toJS).toDart;
    data = await resp.json().toDart as JSObject;
  } catch (_) {}
  _applyCredits(data);

  await Future.wait([_loadTextures(data), _initAudio(data)]);
}

void _collectUrls(
  JSObject? group,
  Map<String, String> into, {
  String prefix = '',
}) {
  if (group == null) return;
  for (final k in _keysOf(group).toDart) {
    final key = k.toDart;
    final v = group[key];
    if (v.isA<JSString>()) {
      into['$prefix$key'] = 'res/${(v as JSString).toDart}';
    }
  }
}

Future<void> _initAudio(JSObject? data) async {
  final urls = <String, String>{};
  _collectUrls(data?['sfx'] as JSObject?, urls);

  _collectUrls(data?['ir'] as JSObject?, urls, prefix: 'ir-');
  final loop = (data?['music'] as JSObject?)?['loop'];
  if (loop.isA<JSString>()) urls['music'] = 'res/${(loop as JSString).toDart}';
  final audio = await Audio.load(urls, house: _house);
  _audio = audio;
  if (_audioArmed) audio.resume();
}

Future<void> _loadTextures(JSObject? data) async {
  final urls = <String, String>{};
  _collectUrls(data?['tex'] as JSObject?, urls);
  await _renderer?.loadTextures(urls);
}

void _applyCredits(JSObject? data) {
  final credits = data?['credits'];
  if (credits.isA<JSString>()) {
    web.document.getElementById('credits')?.textContent =
        (credits as JSString).toDart;
  }
}

void _resize() {
  final w = web.window.innerWidth;
  final h = web.window.innerHeight;
  _canvas.width = w > 0 ? w : 800;
  _canvas.height = h > 0 ? h : 600;
  _renderer?.resize(_canvas.width, _canvas.height);
}

void _raf(num ts) {
  try {
    final now = ts.toDouble();
    if (!_haveLastTime) {
      _lastTime = now;
      _haveLastTime = true;
    }
    var frameTime = (now - _lastTime) / 1000.0;
    _lastTime = now;
    if (frameTime < 0) frameTime = 0;
    if (frameTime > _maxFrameTime) frameTime = _maxFrameTime;

    _updateFps(frameTime);

    if (!_paused) {
      _accumulator += frameTime;
      var steps = 0;
      while (_accumulator >= _fixedDt && steps < _maxSteps) {
        _prevEye = _simEye;
        _session.advance(_fixedDt);
        _updateVisitorSchedule();
        _syncDifficultySeam();
        _updateAmbientEvents();
        _updateUnverifiableNotice();
        _updateMantles();
        _update(_fixedDt);
        _examineState.update(_fixedDt);
        final ruptureWasActive = _rupture.isActive;
        _rupture.advance(_fixedDt, _house);
        if (ruptureWasActive && _rupture.completed) {
          _resolveEnding(ruptureCompleted: true);
        }
        _accumulator -= _fixedDt;
        steps++;
      }
      final alpha = (_accumulator / _fixedDt).clamp(0.0, 1.0);
      _viewEye = Vec3.lerp(_prevEye, _simEye, alpha);

      final audio = _audio;
      if (audio != null) {
        for (final s in _pendingSounds) {
          _dispatchSound(audio, s);
        }
        _pendingSounds.clear();
      }
    }

    final renderer = _renderer;
    if (renderer != null) {
      _camera.lookFrom(_viewEye, _simYaw, _simPitch);
      renderer.depthOfFieldStrength = _activePanel == _journal
          ? depthOfFieldStrength
          : 0;
      _render(renderer, frameTime, _rupture);
    }

    _setBootPhase('running');
    _input.endFrame();
    web.window.requestAnimationFrame(_raf.toJS);
  } catch (error, stack) {
    _reportBootError(error, stack);
  }
}

void _dispatchSound(Audio audio, String name) {
  switch (name) {
    case 'arm':
      audio.play('confirm');
      break;
    case 'ambient-winnow':
      audio.play('winnow', gain: 0.28);
      break;
    case 'ambient-gate':
      audio.play('gate', gain: 0.22);
      break;
  }
}

void _updateFps(double frameTime) {
  final div = _fpsDiv;
  if (div == null) return;
  final fps = frameTime > 0 ? 1.0 / frameTime : 0.0;
  div.textContent = '${fps.round()} fps';
}

void _update(double dt) {
  if (_runEnded || _activePanel != null || _door.visitorPresent) {
    _motion.stop();
    return;
  }

  final moveDir = _input.moveVector;
  final mouseDx = _input.mouseDx;
  final mouseDy = _input.mouseDy;

  _simYaw += mouseDx * mouseSensitivity;
  _simPitch -= mouseDy * mouseSensitivity;
  _simPitch = _simPitch.clamp(-Camera.pitchLimit, Camera.pitchLimit);

  final desiredVelocity =
      Vec3(
        moveDir.x * math.cos(_simYaw) + moveDir.z * math.sin(_simYaw),
        0,
        moveDir.z * math.cos(_simYaw) - moveDir.x * math.sin(_simYaw),
      ).normalized *
      playerSpeed;
  final moveWorld = _motion.advance(
    desiredVelocity,
    dt,
    acceleration: playerAcceleration,
    drag: playerDrag,
  );

  final movement = _playerCapsule.move(
    _house,
    _currentRoom,
    _simEye,
    moveWorld * dt,
  );
  _simEye = movement.eye;
  if (_rupture.step != RuptureStep.portalFail &&
      _rupture.step != RuptureStep.lightsOut) {
    _currentRoom = movement.roomId;
  }

  _camera.lookFrom(_simEye, _simYaw, _simPitch);
  final mantle = raycastMantle(_camera, _house, _currentRoom);
  final portal = raycastPortal(_camera, _house, _currentRoom);
  final window = raycastWindow(_camera, _house, _currentRoom);
  final prompt = mantle != null && !mantle.broken
      ? mantle.name
      : portal != null
      ? (portal.passable ? 'close door' : 'open door')
      : window != null
      ? 'the shutter'
      : null;
  _prompt.show(prompt);
  _broadcast.update(
    textLibrary.getBroadcastPart(_session.snapshot.day, 'status'),
    _currentRoom == 'living-room',
  );

  if (_input.interactPressed) {
    if (_canBeginRupture(portal)) {
      _rupture.startRupture(_house);
      _pendingSounds.add('collapse');
      _showSaveStatus('the front door opens on itself');
    } else if (mantle != null && !mantle.broken) {
      if (mantle.lit) {
        mantle.lit = false;
      } else if (_session.spendHoursAndGas(1, 1)) {
        mantle.lit = true;
        _examineState.startExamine(mantle);
      }
    } else if (portal != null && !portal.sticks && !portal.locked) {
      portal.open = !portal.open;
      _audio?.onDoorStateChanged();
    } else if (window != null) {
      if (window.shutterOpen) {
        if (_session.spendHours(1)) {
          window.shutterOpen = false;
        }
      } else {
        window.shutterOpen = true;
      }
    }
  }

  if (_examineState.active) {
    final m = _examineState.current;
    if (m != null && raycastMantle(_camera, _house, _currentRoom) != m) {
      _examineState.breakExamine();
    }
  }
}

void _syncDifficultySeam() {
  _visitorDirector.exposureElevated = _session.isolationElevatesExposure;
  final facts = _visitorDirector.drainFacts();
  if (facts.isNotEmpty) _session.recordVisitorFacts(facts);
}

void _updateVisitorSchedule() {
  if (_door.visitorPresent ||
      _activePanel != null ||
      _visitorDirector.active != null) {
    return;
  }
  final snapshot = _session.snapshot;
  for (final arrival in _visitorDirector.arrivalsForDay(snapshot.day)) {
    if (_visitorDirector.isResolved(arrival) || snapshot.hour < arrival.hour) {
      continue;
    }
    final started = _visitorDirector.begin(arrival);
    if (started is! VisitStarted) return;
    final line = started.state.currentLine;
    if (line == null) return;
    web.document.callMethod<JSAny?>('exitPointerLock'.toJS);
    _motion.stop();
    _door.showArrival(arrival.visitor, line);
    return;
  }
}

void _restoreVisitorDoor() {
  final state = _visitorDirector.active;
  final line = state?.currentLine;
  if (state == null || line == null) return;
  _door.showArrival(state.arrival.visitor, line);
  if (state.phase != VisitPhase.waiting) {
    _door.showConversation(line);
    _showDoorCitationOptions();
  }
  _showSaveStatus('restored visitor');
}

void _updateAmbientEvents() {
  final snapshot = _session.snapshot;
  final due = _ambientDirector.due(snapshot.day, snapshot.hour);
  if (due.isEmpty) return;
  final event = due.first;
  _ambientDirector.markDelivered(event);
  final source = event.channel == 'letterbox'
      ? 'through the letterbox'
      : 'from the street';
  _ambientNotice.show(source, event.text);
  final sound = ambientSoundForChannel(event.channel);
  if (sound != null) _pendingSounds.add('ambient-$sound');
}

void _updateUnverifiableNotice() {
  final snapshot = _session.snapshot;
  if (snapshot.hour < unverifiableNoticeHour) return;
  if (!_unverifiableDaysShown.add(snapshot.day)) return;
  final line = pickUnverifiable(
    textLibrary.getUnverifiables(snapshot.day),
    _session.runSeed,
    snapshot.day,
  );
  if (line != null) _ambientNotice.show('noticed', line);
}

bool _canBeginRupture(Portal? portal) => RuptureGate.canBegin(
  day: _session.snapshot.day,
  atFrontDoor: portal?.id == 'front-door',
  finalArrivalResolved: _visitorDirector
      .arrivalsForDay(21)
      .every(_visitorDirector.isResolved),
);

void _resolveEnding({bool ruptureCompleted = false}) {
  if (_ending != null) return;
  final snapshot = _session.snapshot;
  final ending = EndingResolver.resolve(
    EndingInputs(
      day: snapshot.day,
      accuracy: _session.recordAccuracy,
      lockedEntries: _session.journal.entries
          .where((entry) => entry.locked)
          .length,
      complianceFloorTripped: _session.complianceFloorTripped,
      ruptureCompleted: ruptureCompleted,
    ),
  );
  if (ending == null) return;
  _presentEnding(ending);
  _saveSession('ending recorded');
}

void _presentEnding(EndingState ending) {
  _ending = ending;
  _runEnded = true;
  _motion.stop();
  _activePanel = _endingPanel;
  _endingPanel.showEnding(ending, textLibrary.getEnding(ending.kind.name));
}

void _chooseDoorResponse(String rawChoice) {
  final choice = switch (rawChoice) {
    'open' => DoorChoice.open,
    'chain' => DoorChoice.chain,
    'through-door' => DoorChoice.throughDoor,
    'letterbox' => DoorChoice.letterbox,
    _ => DoorChoice.ignore,
  };
  final response = _visitorDirector.choose(choice);
  if (choice == DoorChoice.open) {
    final portal = _house.portalById('front-door');
    if (portal != null) {
      portal.open = true;
      _audio?.onDoorStateChanged();
    }
  }
  if (response is! VisitChoiceResult || choice == DoorChoice.ignore) {
    _endVisitorDoor();
    return;
  }
  final line = response.state.currentLine;
  if (line == null) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  _door.showConversation(line);
  _showDoorCitationOptions();
}

void _continueDoorConversation() {
  final progress = _visitorDirector.advanceLine();
  if (progress is! VisitProgress || progress.resolved) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  final line = progress.state.currentLine;
  if (line == null) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  _door.showConversation(line);
  _showDoorCitationOptions();
}

void _endVisitorDoor() {
  _door.hide();
  _input.requestPointerLock(_canvas);
}

void _showDoorCitationOptions() {
  _door.showCitableEntries(web.document, [
    for (final entry in _interactionEngine.getSelectableEntries())
      (entry.ordinal, entry.current.toString()),
  ]);
}

void _citeDuringVisit(int ordinal) {
  final result = _visitorDirector.cite(ordinal, true, _interactionEngine);
  if (result == null) return;
  final event = _interactionEngine.createHumiliationEvent(
    result,
    InteractionType.visitor,
  );
  _door.showCiteResult(event?.contradictionText ?? 'Confirmed.');
}

void _closeFrontDoorIfOpen() {
  final portal = _house.portalById('front-door');
  if (portal != null && portal.open) {
    portal.open = false;
    _audio?.onDoorStateChanged();
  }
}

void _updateMantles() {
  for (final room in _house.rooms) {
    for (int i = 0; i < room.mantles.length; i++) {
      final mantle = room.mantles[i];
      if (mantle.broken) {
        mantle.lit = false;
        continue;
      }
      if (_rupture.isMantleExtinguished(room.id, i)) {
        mantle.lit = false;
        continue;
      }
    }
  }
}

bool roomIsLit(String roomId) {
  final room = _house.byId(roomId);
  if (room == null || _time.sunAngle == 0.0) return false;

  for (final w in room.windows) {
    if (!w.shutterOpen) continue;

    bool isLit = false;
    if (w.facing == Facing.north && _time.currentHour < 12) {
      isLit = true;
    } else if (w.facing == Facing.south && _time.currentHour > 12) {
      isLit = true;
    } else if (w.facing == Facing.east && _time.currentHour < 9) {
      isLit = true;
    } else if (w.facing == Facing.west && _time.currentHour > 15) {
      isLit = true;
    }

    if (isLit) return true;
  }
  return false;
}

void _updateLighting(Renderer renderer) {
  renderer.lightDir = sunDirection(_time.sunAngle);
  renderer.lightColor = sunColor(_time.sunAngle);
  renderer.ambient = math.max(ambientFloor, ambientPeak * _time.daylight);
}

void _render(Renderer renderer, double dt, RuptureState rupture) {
  _updateLighting(renderer);
  _camera.breathe(dt);
  renderer.begin(_camera, _bgHue);

  final emitter = _emitter;
  if (emitter != null) {
    emitter.draw(_currentRoom, _viewEye);
  }

  renderer.flush(dt, rupture);
  _hud.update(const Object(), dt);
}
