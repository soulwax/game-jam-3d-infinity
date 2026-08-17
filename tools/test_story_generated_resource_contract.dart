import 'dart:convert';
import 'dart:io';

void main() {
  final raw = jsonDecode(File('web/res/story_script.json').readAsStringSync());
  if (raw is! Map || raw['version'] != 1 || raw['events'] is! List) {
    throw StateError('generated screenplay resource is invalid');
  }
  final events = raw['events'] as List;
  final days = <int>{};
  final ids = <String>{};
  for (final value in events) {
    if (value is! Map || value['id'] is! String || value['day'] is! num) {
      throw StateError('generated screenplay event is malformed');
    }
    if (!ids.add(value['id'] as String)) {
      throw StateError(
        'generated screenplay event is duplicated: ${value['id']}',
      );
    }
    final day = (value['day'] as num).toInt();
    if (day < 1 || day > 21) {
      throw StateError('generated event day is out of range');
    }
    days.add(day);
  }
  if (days.length != 21) {
    throw StateError('generated screenplay does not cover all 21 days');
  }
  stdout.writeln(
    'generated screenplay contract: ${events.length} events cover 21 days with unique IDs',
  );
}
