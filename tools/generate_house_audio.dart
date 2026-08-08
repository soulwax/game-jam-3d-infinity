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
