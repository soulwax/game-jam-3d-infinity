import 'dart:async';
import 'dart:js_interop';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../config.dart';
import '../house/house.dart';
import '../house/room.dart';
import 'math3.dart';

const Map<String, String> sfxSlot = {
  'pickup': 'transient',
  'gate': 'transient',
  'explosion': 'transient',
  'blip': 'transient',
  'milestone': 'mid',
  'confirm': 'mid',
  'crossing': 'mid',
  'whoosh': 'air',
  'glitch': 'air',
  'toll': 'sub',
  'collapse': 'sub',
  'votive': 'mid',
  'rood': 'transient',
  'winnow': 'transient',

  'step-above-0': 'sub',
  'step-above-1': 'sub',
  'step-above-2': 'sub',
  'step-above-3': 'sub',
};

class Audio {
  final web.AudioContext _ctx;
  final House? _house;
  late final web.GainNode _master;
  late final web.GainNode _sub;
  late final web.GainNode _bed;
  late final web.GainNode _mid;
  late final web.GainNode _transient;
  late final web.GainNode _air;
  late final web.GainNode _vo;
  late final web.GainNode _send;
  late final web.GainNode _wet;
  late final web.ConvolverNode _verb;
  final Map<String, web.AudioBuffer> _buffers = {};
  final math.Random _rng = math.Random();

  String? _listenerRoom;
  final Map<web.BiquadFilterNode, (String, web.GainNode)> _filterChains = {};

  bool _musicStarted = false;
  web.AudioBufferSourceNode? _musicSrc;

  web.AudioBuffer? _fallbackIr;
  String? _roomIr;

  bool _silent = false;

  late final web.BiquadFilterNode _vhsHpFilter;
  late final web.BiquadFilterNode _vhsLpFilter;

  Audio._(this._ctx, this._house)
    : _master = _ctx.createGain(),
      _sub = _ctx.createGain(),
      _bed = _ctx.createGain(),
      _mid = _ctx.createGain(),
      _transient = _ctx.createGain(),
      _air = _ctx.createGain(),
      _vo = _ctx.createGain(),
      _send = _ctx.createGain(),
      _wet = _ctx.createGain(),
      _verb = _ctx.createConvolver() {
    _master.connect(_ctx.destination);
    _sub.gain.value = gainSub;
    _bed.gain.value = gainBed;
    _mid.gain.value = gainMid;
    _transient.gain.value = gainTransient;
    _air.gain.value = gainAir;
    _vo.gain.value = 1.0;
    for (final s in [_sub, _bed, _mid, _transient, _air, _vo]) {
      s.connect(_master);
    }
    _send.gain.value = 1;
    _wet.gain.value = reverbWet;
    _mid.connect(_send);
    _transient.connect(_send);
    _send.connect(_verb);
    _verb.connect(_wet);
    _wet.connect(_master);
    _initializeVHSAudio();
  }

  void _initializeVHSAudio() {
    _vhsHpFilter = _ctx.createBiquadFilter()
      ..type = 'highpass'
      ..frequency.value = vhsAudioHpFreq;
    _vhsLpFilter = _ctx.createBiquadFilter()
      ..type = 'lowpass'
      ..frequency.value = vhsAudioLpFreq;
    _vhsHpFilter.connect(_vhsLpFilter);
    _vhsLpFilter.connect(_ctx.destination);
    _master.disconnect(_ctx.destination);
    _master.connect(_vhsHpFilter);
  }

  void resume() {
    if (_ctx.state == 'suspended') _ctx.resume();
  }

  web.GainNode _slot(String name) {
    // Voice clips must not feed the convolver (_send → _verb). Visitor audio
    // already has reverb baked in via --set during synthesis; the listener's
    // room reverb is ambient to the listener's space, not to the speaker at
    // the door. Double reverb (baked + convolved) places voice in the room
    // instead of at the source point the set defines.
    if (name.startsWith('vo-')) return _vo;
    return switch (sfxSlot[name]) {
      'sub' => _sub,
      'bed' => _bed,
      'mid' => _mid,
      'air' => _air,
      _ => _transient,
    };
  }

  static Future<Audio> load(
    Map<String, String> nameToUrl, {
    House? house,
  }) async {
    final a = Audio._(web.AudioContext(), house);
    await Future.wait(
      nameToUrl.entries.map((e) async {
        try {
          final resp = await web.window.fetch(e.value.toJS).toDart;
          final ab = await resp.arrayBuffer().toDart;
          a._buffers[e.key] = await a._ctx.decodeAudioData(ab).toDart;
        } catch (err) {
          web.console.warn('audio: ${e.key} <- ${e.value} failed: $err'.toJS);
        }
      }),
    );
    a._roomIr = 'ir-stone';
    a._verb.buffer = a._buffers['ir-stone'] ?? (a._fallbackIr = a._impulse());
    return a;
  }

  web.AudioBuffer _impulse() {
    final sr = _ctx.sampleRate;
    final n = (sr * reverbSeconds).round();
    final buf = _ctx.createBuffer(2, n, sr);
    for (var c = 0; c < 2; c++) {
      final d = Float32List(n);
      var lp = 0.0;
      for (var i = 0; i < n; i++) {
        final t = i / n;
        lp += ((_rng.nextDouble() * 2 - 1) - lp) * 0.28;
        d[i] = lp * math.pow(1 - t, 2.2).toDouble() * math.exp(-3.0 * t);
      }
      buf.copyToChannel(d.toJS, c);
    }
    return buf;
  }

  void play(String name, {double rate = 1, double gain = 1}) {
    final buf = _buffers[name];
    if (buf == null) return;
    final src = _ctx.createBufferSource()..buffer = buf;
    src.playbackRate.value = rate * (0.94 + _rng.nextDouble() * 0.12);
    final g = _ctx.createGain()..gain.value = gain;
    src.connect(g);
    g.connect(_slot(sfxSlot[name] ?? 'transient'));
    src.start();
  }

  void playAt(
    String name,
    Vec3 pos, {
    double rate = 1,
    double gain = 1,
    String? sourceRoom,
  }) {
    final buf = _buffers[name];
    if (buf == null) return;
    final src = _ctx.createBufferSource()..buffer = buf;
    src.playbackRate.value = rate * (0.94 + _rng.nextDouble() * 0.12);
    final g = _ctx.createGain()..gain.value = gain;
    final p = _panner(pos);
    final filter = _createOcclusionFilter();
    final attenuationGain = _ctx.createGain()..gain.value = 1.0;

    if (sourceRoom != null && _listenerRoom != null && _house != null) {
      final path = _house.pathBetweenRooms(sourceRoom, _listenerRoom!);
      final (gainDb, freqHz) = _computeOcclusion(path);
      filter.frequency.value = freqHz;
      attenuationGain.gain.value = math.pow(10.0, gainDb / 20.0).toDouble();
      _filterChains[filter] = (sourceRoom, attenuationGain);
    }

    src.connect(g);
    g.connect(attenuationGain);
    attenuationGain.connect(filter);
    filter.connect(p);
    p.connect(_slot(sfxSlot[name] ?? 'transient'));
    src.start();
  }

  bool _isDoorOpen(Portal portal) {
    return portal.passable;
  }

  web.BiquadFilterNode _createOcclusionFilter() {
    final f = _ctx.createBiquadFilter()
      ..type = 'lowpass'
      ..frequency.value = 20000.0;
    return f;
  }

  (double, double) _computeOcclusion(List<Portal> path) {
    double totalGain = 0.0;
    double lowestFreq = 20000.0;

    for (final portal in path) {
      final isOpen = _isDoorOpen(portal);
      if (isOpen) {
        totalGain += occlusionGainOpenDoor;
        lowestFreq = math.min(lowestFreq, occlusionFreqOpenDoor);
      } else {
        totalGain += occlusionGainClosedDoor;
        lowestFreq = math.min(lowestFreq, occlusionFreqClosedDoor);
      }
    }

    if (path.isEmpty) {
      totalGain = 0.0;
      lowestFreq = 20000.0;
    }

    return (totalGain, lowestFreq);
  }

  web.PannerNode _panner(Vec3 pos) {
    final p = _ctx.createPanner()
      ..panningModel = 'HRTF'
      ..distanceModel = 'inverse'
      ..refDistance = pannerRefDistance
      ..rolloffFactor = pannerRolloff
      ..maxDistance = pannerMaxDistance
      ..coneInnerAngle = pannerConeInner;
    p.positionX.value = pos.x;
    p.positionY.value = pos.y;
    p.positionZ.value = pos.z;
    return p;
  }

  void setListener(Vec3 pos, Vec3 fwd, Vec3 up) {
    final l = _ctx.listener;
    l.positionX.value = pos.x;
    l.positionY.value = pos.y;
    l.positionZ.value = pos.z;
    l.forwardX.value = fwd.x;
    l.forwardY.value = fwd.y;
    l.forwardZ.value = fwd.z;
    l.upX.value = up.x;
    l.upY.value = up.y;
    l.upZ.value = up.z;
  }

  void setRoomIr(String irName) {
    if (irName == _roomIr) return;
    _roomIr = irName;
    final buf = _buffers[irName] ?? (_fallbackIr ??= _impulse());
    final half = roomIrCrossfadeSeconds / 2;
    final t = _ctx.currentTime.toDouble();
    _wet.gain.cancelScheduledValues(t);
    _wet.gain.setValueAtTime(_wet.gain.value, t);
    _wet.gain.linearRampToValueAtTime(0, t + half);
    _wet.gain.linearRampToValueAtTime(_silent ? 0 : reverbWet, t + half * 2);
    Timer(Duration(microseconds: (half * 1e6).round()), () {
      if (_roomIr == irName) _verb.buffer = buf;
    });
  }

  void startMusicLoop(String name) {
    if (_musicStarted) return;
    final buf = _buffers[name];
    if (buf == null) return;
    _musicStarted = true;
    final src = _ctx.createBufferSource()
      ..buffer = buf
      ..loop = true;
    final g = _ctx.createGain()..gain.value = 0.6;
    src.connect(g);
    g.connect(_bed);
    src.start();
    _musicSrc = src;
  }

  void stopMusicLoop() {
    _musicSrc?.stop();
    _musicSrc = null;
    _musicStarted = false;
  }

  void silence({double delay = 0.25}) {
    _silent = true;
    final t = _ctx.currentTime.toDouble() + delay;
    _send.gain.cancelScheduledValues(t);
    _send.gain.setValueAtTime(_send.gain.value, t);
    _send.gain.linearRampToValueAtTime(0, t + 0.12);
    _wet.gain.cancelScheduledValues(t);
    _wet.gain.setValueAtTime(_wet.gain.value, t);
    _wet.gain.linearRampToValueAtTime(0, t + 0.12);
    _master.gain.cancelScheduledValues(t);
    _master.gain.setValueAtTime(_master.gain.value, t);
    _master.gain.linearRampToValueAtTime(0, t + 0.15);
  }

  void duck(double gain01) {
    _bed.gain.value = gainBed * gain01;
    _mid.gain.value = gainMid * (0.5 + 0.5 * gain01);
    if (_silent) {
      _silent = false;
      final t = _ctx.currentTime.toDouble();
      _master.gain.cancelScheduledValues(t);
      _master.gain.setValueAtTime(_master.gain.value, t);
      _master.gain.linearRampToValueAtTime(1, t + 0.2);
      _send.gain.cancelScheduledValues(t);
      _send.gain.setValueAtTime(0, t);
      _send.gain.linearRampToValueAtTime(1, t + 0.2);
      _wet.gain.cancelScheduledValues(t);
      _wet.gain.setValueAtTime(0, t);
      _wet.gain.linearRampToValueAtTime(reverbWet, t + 0.2);
    }
  }

  void setListenerRoom(String roomId) {
    if (_listenerRoom == roomId) return;
    _listenerRoom = roomId;
    _updateAllOcclusionFilters();
  }

  void _updateAllOcclusionFilters() {
    final house = _house;
    final listenerRoom = _listenerRoom;
    if (house == null || listenerRoom == null) return;

    for (final entry in _filterChains.entries) {
      final filter = entry.key;
      final (sourceRoom, gain) = entry.value;

      final path = house.pathBetweenRooms(sourceRoom, listenerRoom);
      final (gainDb, freqHz) = _computeOcclusion(path);

      filter.frequency.value = freqHz;
      gain.gain.value = math.pow(10.0, gainDb / 20.0).toDouble();
    }
  }

  void onDoorStateChanged() {
    _updateAllOcclusionFilters();
  }
}
