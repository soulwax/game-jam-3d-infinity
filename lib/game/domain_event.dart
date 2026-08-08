import 'dart:convert';

/// A renderer/audio-neutral fact emitted by the simulation.
class DomainEvent {
  static const _keys = {
    'kind',
    'sequence',
    'roomId',
    'position',
    'selectionSeed',
  };

  final String kind;
  final int sequence;
  final String? roomId;
  final List<double>? position;
  final int? selectionSeed;

  DomainEvent({
    required this.kind,
    required this.sequence,
    this.roomId,
    List<double>? position,
    this.selectionSeed,
  }) : position = position == null ? null : List.unmodifiable(position) {
    if (kind.isEmpty) throw const FormatException('event kind is empty');
    if (sequence < 0) {
      throw const FormatException('event sequence must be non-negative');
    }
    if (roomId != null && roomId!.isEmpty) {
      throw const FormatException('event room ID is empty');
    }
    if (position != null) {
      if (position.length != 3 || position.any((value) => !value.isFinite)) {
        throw const FormatException(
          'event position must be three finite values',
        );
      }
    }
  }

  factory DomainEvent.fromJson(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('event must be an object');
    }
    final input = <String, dynamic>{};
    for (final entry in raw.entries) {
      if (entry.key is! String) {
        throw const FormatException('event keys must be strings');
      }
      input[entry.key as String] = entry.value;
    }
    if (input.length != _keys.length ||
        !input.keys.toSet().containsAll(_keys)) {
      throw const FormatException('event fields are incomplete or unknown');
    }
    final kind = input['kind'];
    final sequence = input['sequence'];
    final roomId = input['roomId'];
    final position = input['position'];
    final selectionSeed = input['selectionSeed'];
    if (kind is! String || sequence is! int) {
      throw const FormatException('event kind or sequence is malformed');
    }
    if (roomId != null && roomId is! String) {
      throw const FormatException('event room ID is malformed');
    }
    List<double>? decodedPosition;
    if (position != null) {
      if (position is! List ||
          position.length != 3 ||
          position.any((value) => value is! num)) {
        throw const FormatException('event position is malformed');
      }
      decodedPosition = [
        for (final value in position) (value as num).toDouble(),
      ];
    }
    if (selectionSeed != null && selectionSeed is! int) {
      throw const FormatException('event selection seed is malformed');
    }
    return DomainEvent(
      kind: kind,
      sequence: sequence,
      roomId: roomId as String?,
      position: decodedPosition,
      selectionSeed: selectionSeed as int?,
    );
  }

  Map<String, dynamic> toJson() => Map.unmodifiable({
    'kind': kind,
    'sequence': sequence,
    'roomId': roomId,
    'position': position == null ? null : List<double>.unmodifiable(position!),
    'selectionSeed': selectionSeed,
  });

  String encode() => jsonEncode(toJson());
}
