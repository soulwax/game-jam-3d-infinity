import '../config.dart';
import '../journal/drift.dart';
import '../journal/journal.dart';
import 'time.dart';

enum SleepQuality { long, short }

enum SleepLocation { bed, chair, sofa, floor }

class SleepRecord {
  final int day;
  final SleepQuality quality;
  final SleepLocation location;
  const SleepRecord(this.day, this.quality, this.location);
}

class DayLoop {
  final Journal journal;
  final GameTime time;

  int _hoursRemaining;
  int _gasRemaining;
  int _rationCoupons;
  bool _rationCollectedToday;

  final List<SleepRecord> _sleepHistory;

  DayLoop({
    required this.journal,
    required this.time,
    int hoursRemaining = dailyHourBudget,
    int gasRemaining = dailyGasAllowance,
    int rationCoupons = startingRationCoupons,
    bool? rationCollectedToday,
    List<SleepRecord> sleepHistory = const [],
  }) : _hoursRemaining = hoursRemaining,
       _gasRemaining = gasRemaining,
       _rationCoupons = rationCoupons,
       _rationCollectedToday = rationCollectedToday ?? false,
       _sleepHistory = List.of(sleepHistory) {
    if (hoursRemaining < 0 || gasRemaining < 0 || rationCoupons < 0) {
      throw FormatException('saved day-loop resources must not be negative');
    }
  }

  int get hoursRemaining => _hoursRemaining;
  int get gasRemaining => _gasRemaining;
  int get rationCoupons => _rationCoupons;
  bool get rationCollectedToday => _rationCollectedToday;
  bool get isRationDayToday => rationRunDays.contains(time.dayNumber);
  List<SleepRecord> get sleepHistory => List.unmodifiable(_sleepHistory);

  bool spendHours(int cost) {
    if (cost > _hoursRemaining) return false;
    _hoursRemaining -= cost;
    return true;
  }

  bool spendGas(int cost) {
    if (cost > _gasRemaining) return false;
    _gasRemaining -= cost;
    return true;
  }

  bool collectRation() {
    if (!isRationDayToday || _rationCollectedToday) return false;
    _rationCoupons -= 1;
    _rationCollectedToday = true;
    return true;
  }

  void sleep(
    SleepQuality quality,
    SleepLocation location, {
    int extraDrifts = 0,
    int runSeed = 0,
  }) {
    _sleepHistory.add(SleepRecord(time.dayNumber, quality, location));

    journal.driftNight(
      time.dayNumber,
      verifiedToday: journal.getVerifiedToday(),
      extraDrifts: extraDrifts,
      runSeed: runSeed,
    );

    time.dayNumber += 1;
    time.skipToHour(sunriseHour);

    _hoursRemaining = dailyHourBudget;
    _gasRemaining = dailyGasAllowance;
    _rationCollectedToday = false;
    journal.setVerifiedToday(const []);
  }

  Map<String, dynamic> toJson() => {
    'hoursRemaining': _hoursRemaining,
    'gasRemaining': _gasRemaining,
    'rationCoupons': _rationCoupons,
    'rationCollectedToday': _rationCollectedToday,
    'sleepHistory': [
      for (final record in _sleepHistory)
        {
          'day': record.day,
          'quality': record.quality.name,
          'location': record.location.name,
        },
    ],
  };

  static DayLoop fromJson({
    required Journal journal,
    required GameTime time,
    required Map<String, dynamic> json,
  }) {
    final history = json['sleepHistory'];
    if (history is! List) {
      throw const FormatException('saved day-loop sleepHistory must be a list');
    }
    final records = <SleepRecord>[];
    for (final raw in history) {
      if (raw is! Map) {
        throw const FormatException('saved sleep record must be an object');
      }
      final day = raw['day'];
      final quality = raw['quality'];
      final location = raw['location'];
      if (day is! int || quality is! String || location is! String || day < 1) {
        throw const FormatException('saved sleep record is malformed');
      }
      final parsedQuality = SleepQuality.values
          .where((candidate) => candidate.name == quality)
          .firstOrNull;
      final parsedLocation = SleepLocation.values
          .where((candidate) => candidate.name == location)
          .firstOrNull;
      if (parsedQuality == null || parsedLocation == null) {
        throw const FormatException('saved sleep record has an unknown enum');
      }
      records.add(SleepRecord(day, parsedQuality, parsedLocation));
    }
    final hours = json['hoursRemaining'];
    final gas = json['gasRemaining'];
    final rations = json['rationCoupons'];
    final rationCollected = json['rationCollectedToday'];
    if (hours is! int ||
        gas is! int ||
        rations is! int ||
        rationCollected is! bool) {
      throw const FormatException('saved day-loop state is malformed');
    }
    return DayLoop(
      journal: journal,
      time: time,
      hoursRemaining: hours,
      gasRemaining: gas,
      rationCoupons: rations,
      rationCollectedToday: rationCollected,
      sleepHistory: records,
    );
  }
}
