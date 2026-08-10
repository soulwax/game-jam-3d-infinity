import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

const _sampleRate = 44100;

void main() {
  final directory = Directory('web/res/sfx')..createSync(recursive: true);
  _write(directory, 'clock-tick.wav', 0.085, (t) {
    final decay = math.exp(-42 * t);
    return decay *
        (0.62 * math.sin(2 * math.pi * 1750 * t) +
            0.24 * math.sin(2 * math.pi * 2640 * t));
  });
  _write(directory, 'clock-chime.wav', 1.15, (t) {
    final first =
        math.exp(-3.8 * t) *
        (0.46 * math.sin(2 * math.pi * 660 * t) +
            0.24 * math.sin(2 * math.pi * 990 * t) +
            0.12 * math.sin(2 * math.pi * 1320 * t));
    final secondT = t - 0.18;
    final second = secondT > 0
        ? math.exp(-4.8 * secondT) *
              (0.30 * math.sin(2 * math.pi * 880 * secondT) +
                  0.16 * math.sin(2 * math.pi * 1320 * secondT))
        : 0.0;
    return first + second;
  });
  _write(directory, 'clock-cuckoo.wav', 0.72, (t) {
    final first = _chirp(t, 520, 760, 0.0, 0.26);
    final second = _chirp(t, 410, 610, 0.30, 0.26);
    return first + second;
  });
  _write(directory, 'clock-bell.wav', 0.95, (t) {
    final decay = math.exp(-4.8 * t);
    return decay *
        (0.42 * math.sin(2 * math.pi * 392 * t) +
            0.24 * math.sin(2 * math.pi * 784 * t) +
            0.12 * math.sin(2 * math.pi * 1176 * t));
  });
  _write(directory, 'door-knock.wav', 0.32, (t) {
    final first = _knock(t, 0.02);
    final second = _knock(t, 0.16);
    return first + second;
  });
  _write(directory, 'door-knock-soft.wav', 0.32, (t) {
    return 0.55 * (_knock(t, 0.02) + _knock(t, 0.16));
  });
  _write(directory, 'window-wind.wav', 1.4, (t) {
    final swell = 0.12 + 0.10 * math.sin(2 * math.pi * 0.7 * t);
    return swell *
        (math.sin(2 * math.pi * 88 * t) +
            0.35 * math.sin(2 * math.pi * 173 * t) +
            0.15 * math.sin(2 * math.pi * 311 * t));
  });
  _write(directory, 'house-creak.wav', 0.58, (t) {
    final decay = math.exp(-5.5 * t);
    return decay *
        (0.32 * math.sin(2 * math.pi * (170 - 70 * t) * t) +
            0.08 * math.sin(2 * math.pi * 940 * t));
  });
  _write(directory, 'timber-creak.wav', 0.48, (t) {
    final decay = math.exp(-7 * t);
    return decay * 0.34 * math.sin(2 * math.pi * (130 + 50 * t) * t);
  });
  _write(directory, 'pipe-tick.wav', 0.24, (t) {
    final decay = math.exp(-20 * t);
    return decay *
        (0.32 * math.sin(2 * math.pi * 760 * t) +
            0.12 * math.sin(2 * math.pi * 1520 * t));
  });
  _write(directory, 'range-settle.wav', 0.22, (t) {
    final decay = math.exp(-22 * t);
    return decay *
        (0.42 * math.sin(2 * math.pi * 118 * t) +
            0.18 * math.sin(2 * math.pi * 237 * t) +
            0.05 * math.sin(2 * math.pi * 3100 * t));
  });
  _write(directory, 'cellar-drip.wav', 0.62, (t) {
    final impact = math.exp(-18 * t) * math.sin(2 * math.pi * 1080 * t);
    final body = math.exp(-5.5 * t) * 0.24 * math.sin(2 * math.pi * 186 * t);
    return 0.72 * impact + body;
  });
  _write(directory, 'cistern-settle.wav', 0.48, (t) {
    final decay = math.exp(-9 * t);
    final descending = math.sin(2 * math.pi * (420 - 210 * t) * t);
    return decay * (0.28 * descending + 0.12 * math.sin(2 * math.pi * 860 * t));
  });
}

double _chirp(double t, double start, double end, double delay, double length) {
  final local = t - delay;
  if (local < 0 || local > length) return 0;
  final progress = local / length;
  final frequency = start + (end - start) * progress;
  return 0.34 *
      math.exp(-7 * local) *
      math.sin(2 * math.pi * frequency * local);
}

double _knock(double t, double delay) {
  final local = t - delay;
  if (local < 0) return 0;
  return 0.46 *
      math.exp(-32 * local) *
      (math.sin(2 * math.pi * 180 * local) +
          0.22 * math.sin(2 * math.pi * 920 * local));
}

void _write(
  Directory directory,
  String name,
  double seconds,
  double Function(double time) sample,
) {
  final count = (seconds * _sampleRate).round();
  final pcm = BytesBuilder(copy: false);
  for (var i = 0; i < count; i++) {
    final value = sample(i / _sampleRate).clamp(-1.0, 1.0);
    final signed = (value * 32767).round();
    pcm.add(_u16(signed));
  }
  final data = pcm.takeBytes();
  final bytes = BytesBuilder(copy: false)
    ..add('RIFF'.codeUnits)
    ..add(_u32(36 + data.length))
    ..add('WAVE'.codeUnits)
    ..add('fmt '.codeUnits)
    ..add(_u32(16))
    ..add(_u16(1))
    ..add(_u16(1))
    ..add(_u32(_sampleRate))
    ..add(_u32(_sampleRate * 2))
    ..add(_u16(2))
    ..add(_u16(16))
    ..add('data'.codeUnits)
    ..add(_u32(data.length))
    ..add(data);
  File('${directory.path}/$name').writeAsBytesSync(bytes.takeBytes());
}

List<int> _u16(int value) => [value & 0xff, (value >>> 8) & 0xff];

List<int> _u32(int value) => [
  value & 0xff,
  (value >>> 8) & 0xff,
  (value >>> 16) & 0xff,
  (value >>> 24) & 0xff,
];
