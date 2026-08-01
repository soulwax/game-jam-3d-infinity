import 'package:quarantine/sim/time.dart';
import 'package:quarantine/sim/weather.dart';

void main() {
  final time = GameTime(dayNumber: 1, dayLengthSeconds: 480.0);

  print('=== Sun Angle Tests ===');
  for (int hour = 0; hour <= 24; hour++) {
    time.skipToHour(hour);
    final angle = time.sunAngle;
    final color = sunColor(angle);
    print('Hour $hour: sunAngle=$angle, color=0x${color.toRadixString(16).padLeft(6, '0').toUpperCase()}');
  }

  print('\n=== Key Hours ===');
  time.skipToHour(6);
  print('Hour 6 (dawn): sunAngle=${time.sunAngle} (expect 0.0)');
  print('Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0x4488CC)');

  time.skipToHour(12);
  print('Hour 12 (noon): sunAngle=${time.sunAngle} (expect 0.5)');
  print('Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0xFFFFFF)');

  time.skipToHour(18);
  print('Hour 18 (dusk): sunAngle=${time.sunAngle} (expect 1.0)');
  print('Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0xFFBB55)');

  time.skipToHour(22);
  print('Hour 22 (night): sunAngle=${time.sunAngle} (expect 0.0)');
  print('Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0x4488CC)');

  print('\n=== Time Advancement ===');
  time.skipToHour(6);
  print('Starting at hour 6');
  const stepCount = 120;
  for (int i = 0; i < stepCount; i++) {
    time.advance(1.0 / 120.0);
  }
  final expectedAdvance = 120.0 / 120.0 * (24.0 / 480.0);
  print('After 120 steps (1 second): hour=${time.currentHour} (expect ${6 + expectedAdvance})');

  print('\n=== Sun Direction ===');
  time.skipToHour(6);
  var dir = sunDirection(time.sunAngle);
  print('Hour 6: direction=$dir');

  time.skipToHour(12);
  dir = sunDirection(time.sunAngle);
  print('Hour 12: direction=$dir');

  time.skipToHour(18);
  dir = sunDirection(time.sunAngle);
  print('Hour 18: direction=$dir');

  print('\n✓ Test complete');
}
