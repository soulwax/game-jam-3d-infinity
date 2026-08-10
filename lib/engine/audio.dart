import 'dart:async';
import 'dart:js_interop';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../config.dart';
import '../house/house.dart';
import '../house/room.dart';
import 'audio_planner.dart';
import '../ui/audio_settings.dart';
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
  'clock-tick': 'transient',
  'clock-chime': 'mid',
  'clock-cuckoo': 'mid',
  'clock-bell': 'mid',
  'door-knock': 'transient',
  'door-knock-soft': 'transient',
  'window-wind': 'air',
  'house-creak': 'transient',
  'timber-creak': 'transient',
  'pipe-tick': 'transient',
  'range-settle': 'transient',
  'cellar-drip': 'transient',
  'cistern-settle': 'transient',

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
  late final web.GainNode _ambience;
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
  AudioPlanner? _acousticPlanner;
  final Map<web.BiquadFilterNode, _SpatialChain> _filterChains = {};

  bool _musicStarted = false;
  web.AudioBufferSourceNode? _musicSrc;

  web.AudioBuffer? _fallbackIr;
  String? _roomIr;

  bool _silent = false;
  double _masterMix = 1.0;
  double _voiceMix = 1.0;
  double _effectsMix = 1.0;
  double _ambienceMix = 1.0;
  double _musicMix = 1.0;
  bool _muted = false;

  int get activeSpatialSources => _filterChains.length;
  double get maxActiveMuffle01 => _filterChains.values.fold(
    0.0,
    (maximum, chain) => math.max(maximum, chain.muffle01),
  );
  bool get musicStarted => _musicStarted;
  String get roomIr => _roomIr ?? 'ir-fallback';

  late final web.BiquadFilterNode _vhsHpFilter;
  late final web.BiquadFilterNode _vhsLpFilter;
  late final web.ChannelSplitterNode _outputSplitter;
  late final web.ChannelMergerNode _outputMerger;
  late final web.GainNode _monoGain;
  bool _mono = false;
  double _dynamicRangeScale = 1.0;
  double _reverbScale = 1.0;

  Audio._(this._ctx, this._house)
    : _master = _ctx.createGain(),
      _sub = _ctx.createGain(),
      _bed = _ctx.createGain(),
      _ambience = _ctx.createGain(),
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
    _ambience.gain.value = gainTransient;
    _mid.gain.value = gainMid;
    _transient.gain.value = gainTransient;
    _air.gain.value = gainAir;
    _vo.gain.value = 1.0;
    for (final s in [_sub, _bed, _ambience, _mid, _transient, _air, _vo]) {
      s.connect(_master);
    }
    _send.gain.value = 1;
    _wet.gain.value = reverbWet;
    _mid.connect(_send);
    _transient.connect(_send);
    _ambience.connect(_send);
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
    _vhsLpFilter.disconnect(_ctx.destination);
    _outputSplitter = _ctx.createChannelSplitter(2);
    _outputMerger = _ctx.createChannelMerger(2);
    _monoGain = _ctx.createGain()..gain.value = 0.5;
    _vhsLpFilter.connect(_outputSplitter);
    _outputMerger.connect(_ctx.destination);
    _applyOutputRouting();
  }

  void _applyOutputRouting() {
    _outputSplitter.disconnect();
    _monoGain.disconnect();
    if (_mono) {
      _outputSplitter.connect(_monoGain, 0);
      _outputSplitter.connect(_monoGain, 1);
      _monoGain.connect(_outputMerger, 0, 0);
      _monoGain.connect(_outputMerger, 0, 1);
    } else {
      _outputSplitter.connect(_outputMerger, 0, 0);
      _outputSplitter.connect(_outputMerger, 1, 1);
    }
  }

  void resume() {
    if (_ctx.state == 'suspended') _ctx.resume();
  }

  web.GainNode _slotForCue(String name) {
    // Voice clips must not feed the convolver (_send → _verb). Visitor audio
    // already has reverb baked in via --set during synthesis; the listener's
    // room reverb is ambient to the listener's space, not to the speaker at
    // the door. Double reverb (baked + convolved) places voice in the room
    // instead of at the source point the set defines.
    if (name.startsWith('vo-')) return _vo;
    if (name == 'clock-tick' ||
        name == 'clock-chime' ||
        name == 'clock-cuckoo' ||
        name == 'clock-bell' ||
        name == 'range-settle' ||
        name == 'cellar-drip' ||
        name == 'cistern-settle' ||
        name == 'window-wind' ||
        name == 'house-creak' ||
        name == 'timber-creak' ||
        name == 'pipe-tick') {
      return _ambience;
    }
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
    g.connect(_slotForCue(name));
    src.onended = ((web.Event _) {
      src.disconnect();
      g.disconnect();
    }).toJS;
    src.start();
  }

  void playAt(
    String name,
    Vec3 pos, {
    double rate = 1,
    double gain = 1,
    String? sourceRoom,
    double? transmissionGainDb,
    double? transmissionCutoffHz,
    double? transmissionMuffle01,
  }) {
    final buf = _buffers[name];
    if (buf == null) return;
    final src = _ctx.createBufferSource()..buffer = buf;
    src.playbackRate.value = rate * (0.94 + _rng.nextDouble() * 0.12);
    final g = _ctx.createGain()..gain.value = gain;
    final p = _panner(pos);
    final filter = _createOcclusionFilter();
    final attenuationGain = _ctx.createGain()..gain.value = 1.0;

    var muffle01 = transmissionMuffle01 ?? 0.0;
    if (transmissionGainDb != null && transmissionCutoffHz != null) {
      filter.frequency.value = transmissionCutoffHz;
      attenuationGain.gain.value = math
          .pow(10.0, transmissionGainDb / 20.0)
          .toDouble();
    } else if (sourceRoom != null && _listenerRoom != null && _house != null) {
      final path = _house.pathBetweenRooms(sourceRoom, _listenerRoom!);
      final (gainDb, freqHz, pathMuffle01) = _computeOcclusion(path);
      filter.frequency.value = freqHz;
      attenuationGain.gain.value = math.pow(10.0, gainDb / 20.0).toDouble();
      muffle01 = pathMuffle01;
    }
    final chain = _SpatialChain(
      source: src,
      sourceGain: g,
      attenuationGain: attenuationGain,
      filter: filter,
      panner: p,
      sourceRoom: sourceRoom,
      muffle01: muffle01.clamp(0.0, 1.0).toDouble(),
    );
    _filterChains[filter] = chain;
    src.onended = ((web.Event _) => _disposeSpatial(filter)).toJS;

    src.connect(g);
    g.connect(attenuationGain);
    attenuationGain.connect(filter);
    filter.connect(p);
    p.connect(_slotForCue(name));
    src.start();
  }

  void playPlanned(AudioPlan plan, {double rate = 1, double gain = 1}) {
    playAt(
      plan.cue,
      plan.position,
      rate: rate,
      gain: gain,
      sourceRoom: plan.sourceRoom,
      transmissionGainDb: plan.gainDb,
      transmissionCutoffHz: plan.lowPassHz,
      transmissionMuffle01: plan.muffle01,
    );
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

  (double, double, double) _computeOcclusion(List<Portal> path) {
    double totalGain = 0.0;
    double lowestFreq = 20000.0;
    double muffle01 = 0.0;

    for (final portal in path) {
      final isOpen = _isDoorOpen(portal);
      if (isOpen) {
        totalGain += occlusionGainOpenDoor;
        lowestFreq = math.min(lowestFreq, occlusionFreqOpenDoor);
        muffle01 = 1 - ((1 - muffle01) * (1 - 0.18));
      } else {
        totalGain += occlusionGainClosedDoor;
        lowestFreq = math.min(lowestFreq, occlusionFreqClosedDoor);
        muffle01 = 1 - ((1 - muffle01) * (1 - 0.55));
      }
    }

    if (path.isEmpty) {
      totalGain = 0.0;
      lowestFreq = 20000.0;
    }

    return (totalGain, lowestFreq, muffle01);
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
    // Firefox can expose the AudioParam listener fields as null until the
    // context is resumed. The legacy methods remain widely implemented and
    // update the same spatial listener state without a nullable bridge seam.
    l.setPosition(pos.x, pos.y, pos.z);
    l.setOrientation(fwd.x, fwd.y, fwd.z, up.x, up.y, up.z);
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
    _wet.gain.linearRampToValueAtTime(
      _silent ? 0 : reverbWet * _reverbScale,
      t + half * 2,
    );
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
    src.onended = ((web.Event _) {
      src.disconnect();
      g.disconnect();
      if (_musicSrc == src) {
        _musicSrc = null;
        _musicStarted = false;
      }
    }).toJS;
    src.start();
    _musicSrc = src;
  }

  void stopMusicLoop() {
    final src = _musicSrc;
    if (src != null) src.stop();
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
    _bed.gain.value = gainBed * _musicMix * gain01;
    _mid.gain.value = gainMid * _effectsMix * (0.5 + 0.5 * gain01);
    if (_silent) {
      _silent = false;
      final t = _ctx.currentTime.toDouble();
      _master.gain.cancelScheduledValues(t);
      _master.gain.setValueAtTime(_master.gain.value, t);
      _master.gain.linearRampToValueAtTime(_masterTarget, t + 0.2);
      _send.gain.cancelScheduledValues(t);
      _send.gain.setValueAtTime(0, t);
      _send.gain.linearRampToValueAtTime(1, t + 0.2);
      _wet.gain.cancelScheduledValues(t);
      _wet.gain.setValueAtTime(0, t);
      _wet.gain.linearRampToValueAtTime(reverbWet * _reverbScale, t + 0.2);
    }
  }

  double get _masterTarget => _muted ? 0.0 : _masterMix * _dynamicRangeScale;

  void setMono(bool mono) {
    if (_mono == mono) return;
    _mono = mono;
    _applyOutputRouting();
  }

  /// Applies the options this graph can honor without inventing spatial
  /// output behavior. Browser panners continue to own HRTF/stereo semantics.
  void setPresentationOptions(AudioSettingsProfile profile) {
    setMono(profile.output == AudioOutputMode.mono);
    _dynamicRangeScale = switch (profile.dynamicRange) {
      AudioDynamicRange.wide => 1.0,
      AudioDynamicRange.standard => 0.9,
      AudioDynamicRange.night => 0.72,
    };
    _reverbScale = profile.reverb == AudioReverbMode.full ? 1.0 : 0.55;
    if (!_silent) {
      _master.gain.value = _masterTarget;
      _wet.gain.value = reverbWet * _reverbScale;
    }
  }

  void setMix({
    double? master,
    double? voice,
    double? effects,
    double? ambience,
    double? music,
    bool? muted,
  }) {
    _masterMix = (master ?? _masterMix).clamp(0.0, 1.0).toDouble();
    _voiceMix = (voice ?? _voiceMix).clamp(0.0, 1.0).toDouble();
    _effectsMix = (effects ?? _effectsMix).clamp(0.0, 1.0).toDouble();
    _ambienceMix = (ambience ?? _ambienceMix).clamp(0.0, 1.0).toDouble();
    _musicMix = (music ?? _musicMix).clamp(0.0, 1.0).toDouble();
    if (muted != null) _muted = muted;
    _sub.gain.value = gainSub * _effectsMix;
    _mid.gain.value = gainMid * _effectsMix;
    _transient.gain.value = gainTransient * _effectsMix;
    _air.gain.value = gainAir * _effectsMix;
    _ambience.gain.value = gainTransient * _ambienceMix;
    _bed.gain.value = gainBed * _musicMix;
    _vo.gain.value = _voiceMix;
    if (!_silent) _master.gain.value = _masterTarget;
  }

  void setListenerRoom(String roomId) {
    if (_listenerRoom == roomId) return;
    _listenerRoom = roomId;
    _updateAllOcclusionFilters();
  }

  void setAcousticPlanner(AudioPlanner? planner) {
    _acousticPlanner = planner;
    _updateAllOcclusionFilters();
  }

  void _updateAllOcclusionFilters() {
    final house = _house;
    final listenerRoom = _listenerRoom;
    if (house == null || listenerRoom == null) return;

    for (final entry in _filterChains.entries) {
      final chain = entry.value;
      final sourceRoom = chain.sourceRoom;
      if (sourceRoom == null) continue;

      final transmission = _acousticPlanner?.transmission(
        sourceRoom,
        listenerRoom,
      );
      final (gainDb, freqHz, muffle01) = transmission == null
          ? _computeOcclusion(house.pathBetweenRooms(sourceRoom, listenerRoom))
          : (
              transmission.gainDb,
              transmission.lowPassHz,
              transmission.muffle01,
            );
      _rampTransmission(chain, gainDb, freqHz, muffle01);
    }
  }

  void _rampTransmission(
    _SpatialChain chain,
    double gainDb,
    double frequencyHz,
    double muffle01,
  ) {
    final now = _ctx.currentTime.toDouble();
    const seconds = 0.08;
    final gain = math.pow(10.0, gainDb / 20.0).toDouble();
    chain.filter.frequency.cancelScheduledValues(now);
    chain.filter.frequency.setValueAtTime(chain.filter.frequency.value, now);
    chain.filter.frequency.linearRampToValueAtTime(frequencyHz, now + seconds);
    chain.attenuationGain.gain.cancelScheduledValues(now);
    chain.attenuationGain.gain.setValueAtTime(
      chain.attenuationGain.gain.value,
      now,
    );
    chain.attenuationGain.gain.linearRampToValueAtTime(gain, now + seconds);
    chain.muffle01 = muffle01.clamp(0.0, 1.0).toDouble();
  }

  void _disposeSpatial(web.BiquadFilterNode filter) {
    final chain = _filterChains.remove(filter);
    chain?.dispose();
  }

  void onDoorStateChanged() {
    _updateAllOcclusionFilters();
  }
}

final class _SpatialChain {
  final web.AudioBufferSourceNode source;
  final web.GainNode sourceGain;
  final web.GainNode attenuationGain;
  final web.BiquadFilterNode filter;
  final web.PannerNode panner;
  final String? sourceRoom;
  double muffle01;

  _SpatialChain({
    required this.source,
    required this.sourceGain,
    required this.attenuationGain,
    required this.filter,
    required this.panner,
    required this.sourceRoom,
    required this.muffle01,
  });

  void dispose() {
    source.disconnect();
    sourceGain.disconnect();
    attenuationGain.disconnect();
    filter.disconnect();
    panner.disconnect();
  }
}
