import '../config.dart';
import '../difficulty/rules.dart';
import '../difficulty/state.dart';
import '../house/house.dart';
import '../house/interaction.dart';
import '../house/state.dart';
import '../journal/entry.dart';
import '../journal/journal.dart';
import '../sim/day.dart';
import '../sim/time.dart';
import '../visitors/state.dart';
import 'save.dart';

enum GameSessionEventType {
  timeAdvanced,
  dayEndReached,
  journalWritten,
  journalRejected,
  slept,
  complianceFloorTripped,
}

class GameSessionEvent {
  final int sequence;
  final GameSessionEventType type;
  final int day;
  final double hour;
  final int? entryOrdinal;

  const GameSessionEvent({
    required this.sequence,
    required this.type,
    required this.day,
    required this.hour,
    this.entryOrdinal,
  });
}

/// Immutable data for renderers and UI adapters. It contains no mutable game
/// systems, so presentation cannot advance rules by retaining a reference.
class GameSessionSnapshot {
  final int day;
  final double hour;
  final int hoursRemaining;
  final int gasRemaining;
  final int rationCoupons;
  final bool rationCollectedToday;
  final int journalEntryCount;

  GameSessionSnapshot({
    required this.day,
    required this.hour,
    required this.hoursRemaining,
    required this.gasRemaining,
    required this.rationCoupons,
    required this.rationCollectedToday,
    required this.journalEntryCount,
  });
}

/// The pure runtime spine.
///
/// GameSession is the only owner of the mutable house, clock, journal, and day
/// loop. The browser integration layer should call [advance], read [snapshot],
/// and route explicit actions here; it must not mutate simulation objects itself.
class GameSession {
  final int _houseSeed;
  final int _runSeed;
  final House _house;
  final GameTime _time;
  final Journal _journal;
  final DayLoop _dayLoop;
  final DifficultyState _difficulty;
  final List<GameSessionEvent> _events = [];
  int _nextEventSequence = 1;

  GameSession._(
    this._houseSeed,
    this._runSeed,
    this._house,
    this._time,
    this._journal,
    this._dayLoop,
    this._difficulty,
  );

  factory GameSession.create({
    required Vocabulary vocabulary,
    int houseSeed = 1,
    int runSeed = 0,
    int startDay = 1,
    int startHour = sunriseHour,
    double daySeconds = dayLengthSeconds,
  }) {
    if (startDay < 1) {
      throw ArgumentError.value(startDay, 'startDay', 'must be at least 1');
    }
    if (startHour < 0 || startHour >= 24) {
      throw ArgumentError.value(startHour, 'startHour', 'must be 0 through 23');
    }
    if (!daySeconds.isFinite || daySeconds <= 0) {
      throw ArgumentError.value(
        daySeconds,
        'daySeconds',
        'must be finite and > 0',
      );
    }
    final time = GameTime(dayNumber: startDay, dayLengthSeconds: daySeconds);
    time.skipToHour(startHour);
    final journal = Journal(vocabulary);
    return GameSession._(
      houseSeed,
      runSeed,
      House(houseSeed),
      time,
      journal,
      DayLoop(journal: journal, time: time),
      DifficultyState(),
    );
  }

  factory GameSession.restore({
    required Vocabulary vocabulary,
    required SaveSnapshot snapshot,
    double daySeconds = dayLengthSeconds,
  }) {
    final run = snapshot.run;
    final seed = run['houseSeed'];
    final timeJson = run['time'];
    final dayLoopJson = run['dayLoop'];
    final journalJson = run['journal'];
    final houseJson = run['house'];
    final difficultyJson = run['difficulty'];
    if (seed is! int ||
        timeJson is! Map ||
        dayLoopJson is! Map ||
        journalJson is! Map ||
        houseJson is! Map ||
        difficultyJson is! Map) {
      throw const FormatException('saved session run is malformed');
    }
    final rawRunSeed = run['runSeed'];
    final runSeed = rawRunSeed is int ? rawRunSeed : 0;
    final day = timeJson['day'];
    final hour = timeJson['hour'];
    if (day is! int || day < 1 || hour is! num) {
      throw const FormatException('saved session clock is malformed');
    }
    if (!daySeconds.isFinite || daySeconds <= 0) {
      throw ArgumentError.value(
        daySeconds,
        'daySeconds',
        'must be finite and > 0',
      );
    }
    final time = GameTime(dayNumber: day, dayLengthSeconds: daySeconds);
    time.restoreHour(hour.toDouble());
    final journal = Journal.fromJson(
      vocabulary,
      Map<String, dynamic>.from(journalJson),
    );
    final dayLoop = DayLoop.fromJson(
      journal: journal,
      time: time,
      json: Map<String, dynamic>.from(dayLoopJson),
    );
    final house = House(seed);
    HouseState.fromJson(Map<String, dynamic>.from(houseJson)).applyTo(house);
    final difficulty = DifficultyState.fromJson(
      Map<String, dynamic>.from(difficultyJson),
    );
    return GameSession._(seed, runSeed, house, time, journal, dayLoop, difficulty);
  }

  /// Exists for future pure adapters (movement and audio), but callers receive
  /// it as read-only conventionally; session actions remain the rule authority.
  House get house => _house;
  GameTime get time => _time;
  Journal get journal => _journal;
  int get runSeed => _runSeed;
  double get recordAccuracy => _difficulty.accuracy;
  bool get complianceFloorTripped => _difficulty.complianceTriggered;

  GameSessionSnapshot get snapshot => GameSessionSnapshot(
    day: _time.dayNumber,
    hour: _time.currentHour,
    hoursRemaining: _dayLoop.hoursRemaining,
    gasRemaining: _dayLoop.gasRemaining,
    rationCoupons: _dayLoop.rationCoupons,
    rationCollectedToday: _dayLoop.rationCollectedToday,
    journalEntryCount: _journal.entries.length,
  );

  /// Serializes all current authoritative session state except mutable house
  /// geometry. The house is reconstructed from [houseSeed] on restore.
  SaveSnapshot toSaveSnapshot({Map<String, dynamic> meta = const {}}) =>
      SaveSnapshot(
        run: {
          'houseSeed': _houseSeed,
          'runSeed': _runSeed,
          'house': HouseState.capture(_house).toJson(),
          'time': {'day': _time.dayNumber, 'hour': _time.currentHour},
          'dayLoop': _dayLoop.toJson(),
          'journal': _journal.toJson(),
          'difficulty': _difficulty.toJson(),
        },
        meta: meta,
      );

  /// Advances the clock within its current day only.
  ///
  /// At the end of a day the clock stops just before midnight. Calling this again
  /// cannot roll over [GameTime.dayNumber]; [sleep] is the sole day transition.
  void advance(double elapsedSeconds) {
    if (!elapsedSeconds.isFinite || elapsedSeconds < 0) {
      throw ArgumentError.value(
        elapsedSeconds,
        'elapsedSeconds',
        'must be finite and non-negative',
      );
    }
    if (elapsedSeconds == 0) return;

    final secondsPerHour = _time.dayLengthSeconds / 24.0;
    final remainingSeconds = (24.0 - _time.currentHour) * secondsPerHour;
    const epsilonSeconds = 1e-6;
    final safeRemaining = remainingSeconds > epsilonSeconds
        ? remainingSeconds - epsilonSeconds
        : 0.0;
    final advanced = elapsedSeconds < safeRemaining
        ? elapsedSeconds
        : safeRemaining;

    if (advanced > 0) {
      _time.advance(advanced);
      _record(GameSessionEventType.timeAdvanced);
    }
    if (advanced < elapsedSeconds) _record(GameSessionEventType.dayEndReached);
  }

  Entry? writeJournal(
    Map<String, String> fields,
    double shakiness, {
    String? corroborator,
  }) {
    if (!shakiness.isFinite || shakiness < 0) {
      throw ArgumentError.value(
        shakiness,
        'shakiness',
        'must be finite and non-negative',
      );
    }
    final entry = _journal.write(
      _time.dayNumber,
      fields,
      shakiness + _difficulty.shakinessBonus,
      corroborator: corroborator,
    );
    _record(
      entry == null
          ? GameSessionEventType.journalRejected
          : GameSessionEventType.journalWritten,
      entryOrdinal: entry?.ordinal,
    );
    return entry;
  }

  bool spendHours(int cost) {
    _requireNonNegative(cost, 'cost');
    return _dayLoop.spendHours(cost);
  }

  bool spendGas(int cost) {
    _requireNonNegative(cost, 'cost');
    return _dayLoop.spendGas(cost);
  }

  bool spendHoursAndGas(int hours, int gas) {
    _requireNonNegative(hours, 'hours');
    _requireNonNegative(gas, 'gas');
    if (_dayLoop.hoursRemaining < hours || _dayLoop.gasRemaining < gas) {
      return false;
    }
    return _dayLoop.spendHours(hours) && _dayLoop.spendGas(gas);
  }

  bool collectRation() => _dayLoop.collectRation();

  void recordVisitorFacts(List<VisitorFact> facts) {
    for (final fact in facts) {
      if (fact.kind == VisitorFactKind.visitorIgnored) {
        _difficulty.addDeflectedVisitor();
      }
    }
  }

  bool get isolationElevatesExposure =>
      _difficulty.exposesVisitorsToCompression;

  /// The only GameSession API that may change its calendar day.
  void sleep(
    SleepQuality quality,
    SleepLocation location, {
    int extraDrifts = 0,
    String? currentRoom,
  }) {
    if (extraDrifts < 0) {
      throw ArgumentError.value(
        extraDrifts,
        'extraDrifts',
        'must not be negative',
      );
    }
    _difficulty.addVerifications(_journal.getVerifiedToday().length);
    if (quality == SleepQuality.short) _difficulty.addShortSleep();
    _difficulty.addShutRooms(
      _house.rooms
          .where(
            (room) =>
                room.windows.isNotEmpty &&
                !ShutterState().shutterOpen(_house, room.id),
          )
          .length,
    );
    if (_dayLoop.isRationDayToday && !_dayLoop.rationCollectedToday) {
      _difficulty.addSkippedRation();
    }
    final nightOfDay = _time.dayNumber;
    _dayLoop.sleep(
      quality,
      location,
      extraDrifts: extraDrifts + _difficulty.extraDriftsFromScrutiny,
      runSeed: _runSeed,
    );
    _house.drift.considerNight(nightOfDay, sleptInRoom: currentRoom);
    final hourCost = _difficulty.hoursLostToExhaustion;
    if (hourCost > 0) _dayLoop.spendHours(hourCost);
    if (!_difficulty.complianceTriggered &&
        _time.dayNumber >= 15 &&
        _difficulty.accuracy <= 0.0 &&
        !_journal.entries.any((entry) => entry.locked)) {
      _difficulty.complianceTriggered = true;
      _record(GameSessionEventType.complianceFloorTripped);
    }
    _difficulty.decayOvernight();
    _record(GameSessionEventType.slept);
  }

  List<GameSessionEvent> drainEvents() {
    final events = List<GameSessionEvent>.unmodifiable(_events);
    _events.clear();
    return events;
  }

  void _record(GameSessionEventType type, {int? entryOrdinal}) {
    _events.add(
      GameSessionEvent(
        sequence: _nextEventSequence++,
        type: type,
        day: _time.dayNumber,
        hour: _time.currentHour,
        entryOrdinal: entryOrdinal,
      ),
    );
  }

  void _requireNonNegative(int value, String name) {
    if (value < 0) {
      throw ArgumentError.value(value, name, 'must not be negative');
    }
  }
}
