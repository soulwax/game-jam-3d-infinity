import 'dart:math' as math;

import 'package:quarantine/presentation/solar_daylight.dart';

Never _fail(String message) =>
    throw StateError('solar daylight test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  final shortDeclination = SolarDaylightModel.declinationForDaylightHours(9.8);
  final equinoxDeclination = SolarDaylightModel.declinationForDaylightHours(
    12.0,
  );
  final longDeclination = SolarDaylightModel.declinationForDaylightHours(14.0);
  _expect(
    shortDeclination < equinoxDeclination,
    'short days need negative declination',
  );
  _expect(
    longDeclination > equinoxDeclination,
    'long days need positive declination',
  );
  for (final hours in [9.8, 10.5, 12.0, 13.5, 14.0]) {
    final declination = SolarDaylightModel.declinationForDaylightHours(hours);
    final roundTrip = SolarDaylightModel.daylightHoursForDeclination(
      declination,
    );
    _expect((roundTrip - hours).abs() < 1e-8, 'day length round trip drifted');
  }
  _expect(
    (equinoxDeclination * 180.0 / math.pi).abs() < 2.0,
    '12-hour apparent day should remain near equinox',
  );
  print(
    'solar daylight adapter: seasonal declination and apparent horizon pass',
  );
}
