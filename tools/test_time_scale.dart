import 'package:quarantine/config.dart';
import 'package:quarantine/sim/time.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final time = GameTime(dayNumber: 1, dayLengthSeconds: dayLengthSeconds);
  check(time.currentHour == sunriseHour, 'new clock starts at sunrise');

  time.advance(60.0);
  check(
    (time.currentHour - (sunriseHour + 0.25)).abs() < 1e-9,
    'one real minute advances fifteen in-game minutes',
  );

  time.skipToHour(sunsetHour);
  check(time.sunAngle == 1.0, 'sun reaches horizon at sunset');
  time.skipToHour(sunsetHour + 0.01);
  check(time.sunAngle == 0.0, 'sun is below horizon after sunset');
  print('time scale: 1 real minute = 15 in-game minutes; 07:00 start pass');
}
