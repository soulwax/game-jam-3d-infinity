import '../config.dart';

class HouseDriftChange {
  final int day;
  final String roomId;
  final double sizeXDelta;
  final double sizeYDelta;

  const HouseDriftChange({
    required this.day,
    required this.roomId,
    this.sizeXDelta = 0.0,
    this.sizeYDelta = 0.0,
  }) : assert(
         sizeXDelta <= houseDriftMaxMagnitude &&
             sizeXDelta >= -houseDriftMaxMagnitude,
         'sizeXDelta exceeds houseDriftMaxMagnitude',
       ),
       assert(
         sizeYDelta <= houseDriftMaxMagnitude &&
             sizeYDelta >= -houseDriftMaxMagnitude,
         'sizeYDelta exceeds houseDriftMaxMagnitude',
       );
}

const List<HouseDriftChange> houseDriftSchedule = [
  HouseDriftChange(
    day: houseDriftKitchenWidthDay,
    roomId: houseDriftKitchenWidthRoom,
    sizeXDelta: houseDriftKitchenWidthDelta,
  ),
  HouseDriftChange(
    day: houseDriftSpareCeilingDay,
    roomId: houseDriftSpareCeilingRoom,
    sizeYDelta: houseDriftSpareCeilingDelta,
  ),
];

class HouseDrift {
  final List<HouseDriftChange> schedule;
  int _landedCount = 0;

  HouseDrift({this.schedule = houseDriftSchedule});

  int get landedCount => _landedCount;

  bool get isComplete => _landedCount >= schedule.length;

  void considerNight(int day, {String? sleptInRoom}) {
    if (isComplete) return;
    final next = schedule[_landedCount];
    if (day < next.day) return;
    if (sleptInRoom == next.roomId) return;
    _landedCount += 1;
  }

  double sizeXDelta(String roomId) {
    var total = 0.0;
    for (var i = 0; i < _landedCount; i++) {
      if (schedule[i].roomId == roomId) total += schedule[i].sizeXDelta;
    }
    return total;
  }

  double sizeYDelta(String roomId) {
    var total = 0.0;
    for (var i = 0; i < _landedCount; i++) {
      if (schedule[i].roomId == roomId) total += schedule[i].sizeYDelta;
    }
    return total;
  }

  Map<String, dynamic> toJson() => {'landedCount': _landedCount};

  void restoreLandedCount(int landedCount) {
    if (landedCount < 0 || landedCount > schedule.length) {
      throw const FormatException('saved house drift state is malformed');
    }
    _landedCount = landedCount;
  }
}
