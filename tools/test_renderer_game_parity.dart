import 'dart:convert';
import 'dart:io';

import 'package:quarantine/game/save.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/game/ending.dart';
import 'package:quarantine/house/interaction.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/sim/day.dart';
import 'package:quarantine/story/schema.dart';
import 'package:quarantine/story/corpus.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/state.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

final class _RouteEvidence {
  final List<String> snapshots;
  final List<int> days;
  final List<String> events;
  final List<String> saves;
  final List<String> rooms;
  final List<String> visitorFacts;
  final List<String> endingOutcomes;
  final String lastFrame;
  final String lastInput;

  const _RouteEvidence({
    required this.snapshots,
    required this.days,
    required this.events,
    required this.saves,
    required this.rooms,
    required this.visitorFacts,
    required this.endingOutcomes,
    required this.lastFrame,
    required this.lastInput,
  });
}

void main() {
  final evidence = _runRoute();
  final left = evidence[0];
  final right = evidence[1];
  _expect(
    jsonEncode(left.snapshots) == jsonEncode(right.snapshots),
    'backends observed different presentation snapshots',
  );
  _expect(
    jsonEncode(left.days) == jsonEncode(right.days),
    'day progression diverged between backend runs',
  );
  _expect(
    left.days.toSet().containsAll(const [1, 2, 3]),
    'frozen route did not cover Days 1–3: ${left.days}',
  );
  _expect(
    jsonEncode(left.events) == jsonEncode(right.events),
    'route events diverged between backend runs',
  );
  _expect(
    jsonEncode(left.saves) == jsonEncode(right.saves),
    'canonical save bytes diverged between backend runs',
  );
  _expect(
    jsonEncode(left.rooms) == jsonEncode(right.rooms),
    'room traversal diverged between backend runs',
  );
  _expect(
    jsonEncode(left.visitorFacts) == jsonEncode(right.visitorFacts),
    'visitor facts diverged between backend runs',
  );
  _expect(
    jsonEncode(left.endingOutcomes) == jsonEncode(right.endingOutcomes),
    'ending outcomes diverged between backend runs',
  );
  _expect(
    _withoutBackend(left.lastFrame) == _withoutBackend(right.lastFrame),
    'last frame boundary encoding diverged',
  );
  _expect(
    _withoutBackend(left.lastInput) == _withoutBackend(right.lastInput),
    'last input edge encoding diverged',
  );
  print(
    'renderer game parity: ${left.snapshots.length} checkpoints, '
    'Days ${left.days.toSet().toList()..sort()}, '
    '${left.events.length} events, ${left.rooms.length} rooms, '
    '${left.visitorFacts.length} visitor facts, '
    '${left.endingOutcomes.length} ending outcomes, canonical '
    'snapshots/saves/input edges match',
  );
}

List<_RouteEvidence> _runRoute() {
  final backends = <RendererBackend>[LegacyBackend(), PixeldartBackend()];
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['yesterday'],
    'place': ['hall'],
    'time': ['dawn'],
  });
  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 42,
    runSeed: 7,
    daySeconds: 24,
  );
  final codec = const SaveCodec();
  final snapshots = <String>[];
  final days = <int>[];
  final events = <String>[];
  final saves = <String>[];
  final rooms = <String>[];
  final visitorFacts = <String>[];
  final endingOutcomes = [
    for (final inputs in const [
      EndingInputs(
        day: 21,
        accuracy: 0.0,
        lockedEntries: 0,
        complianceFloorTripped: true,
        ruptureCompleted: false,
      ),
      EndingInputs(
        day: 21,
        accuracy: 0.9,
        lockedEntries: 4,
        complianceFloorTripped: false,
        ruptureCompleted: false,
      ),
      EndingInputs(
        day: 21,
        accuracy: 0.0,
        lockedEntries: 0,
        complianceFloorTripped: false,
        ruptureCompleted: true,
      ),
    ])
      jsonEncode(EndingResolver.resolve(inputs)!.toJson()),
  ];
  final visitorDirector = _buildVisitorDirector();
  var currentRoom = 'hall';

  for (final backend in backends) {
    backend.initialize();
  }
  void checkpoint() {
    final snapshot = session.presentationSnapshot;
    final frame = RendererFrame(snapshot: snapshot, interpolation: 0.25);
    for (final backend in backends) {
      backend.submit(frame);
      _expect(
        identical(backend.lastFrame?.snapshot, snapshot),
        'backend did not retain the shared immutable presentation snapshot',
      );
    }
    snapshots.add(snapshot.encode());
    days.add(session.snapshot.day);
    rooms.add(currentRoom);
    events.addAll([
      for (final event in session.drainDomainEvents()) event.encode(),
    ]);
    saves.add(
      codec.encode(
        session.toSaveSnapshot(
          meta: {'visitor': visitorDirector.snapshot.toJson()},
        ),
      ),
    );
  }

  checkpoint();
  void input(RendererInputAction action) {
    for (final backend in backends) {
      backend.handleInput(action);
    }
  }

  input(const RendererInputAction(id: 'KeyW', pressed: true));
  input(const RendererInputAction(id: 'KeyW'));
  session.advance(2);
  checkpoint();

  final arrival = visitorDirector.arrivalsForDay(1).first;
  _expect(
    visitorDirector.begin(arrival) is VisitStarted,
    'authored visitor did not begin',
  );
  final choice = visitorDirector.choose(DoorChoice.chain);
  _expect(choice is VisitChoiceResult, 'visitor choice was rejected');
  final choiceFacts = visitorDirector.drainFacts();
  session.recordVisitorFacts(choiceFacts);
  for (final fact in choiceFacts) {
    visitorFacts.add(jsonEncode(fact.toJson()));
  }
  while (visitorDirector.active != null) {
    visitorDirector.advanceLine();
    final lineFacts = visitorDirector.drainFacts();
    session.recordVisitorFacts(lineFacts);
    for (final fact in lineFacts) {
      visitorFacts.add(jsonEncode(fact.toJson()));
    }
  }
  checkpoint();

  for (final room in const [
    'kitchen',
    'living-room',
    'hall',
    'landing',
    'bedroom',
  ]) {
    input(const RendererInputAction(id: 'KeyW', pressed: true));
    input(const RendererInputAction(id: 'KeyW'));
    currentRoom = room;
    checkpoint();
  }
  final kitchenDoor = session.house.portals.singleWhere(
    (portal) => portal.id == 'hall-kitchen',
  );
  kitchenDoor.open = false;
  checkpoint();
  kitchenDoor.open = true;
  final shutter = ShutterState();
  shutter.setShutterOpen(session.house, 'living-room', false);
  final mantle = session.house.byId('living-room')!.mantles.first;
  mantle.lit = true;
  mantle.examined = true;
  checkpoint();

  input(const RendererInputAction(id: 'KeyE', pressed: true));
  final entry = session.writeJournal(const {
    'who': 'warden',
    'verb': 'called',
    'object': 'yesterday',
    'place': 'hall',
    'time': 'dawn',
  }, 0.2);
  _expect(entry != null, 'authored journal action was rejected');
  checkpoint();
  input(const RendererInputAction(id: 'KeyL', pressed: true));
  session.sleep(
    SleepQuality.short,
    SleepLocation.bed,
    currentRoom: currentRoom,
  );
  checkpoint();
  input(const RendererInputAction(id: 'KeyW', pressed: true));
  input(const RendererInputAction(id: 'KeyW'));
  session.advance(2);
  checkpoint();
  input(const RendererInputAction(id: 'KeyL', pressed: true));
  session.sleep(SleepQuality.long, SleepLocation.bed, currentRoom: currentRoom);
  checkpoint();
  final saved = codec.encode(
    session.toSaveSnapshot(
      meta: {'visitor': visitorDirector.snapshot.toJson()},
    ),
  );
  final restored = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: codec.decode(saved),
    daySeconds: 24,
  );
  _expect(
    restored.presentationSnapshot.encode() ==
        session.presentationSnapshot.encode(),
    'save restore changed the route presentation snapshot',
  );
  final restoredVisitor = _buildVisitorDirector();
  final restoredState = VisitorDirectorState.tryFromJson(
    codec.decode(saved).meta['visitor'],
  );
  _expect(restoredState != null, 'visitor save state was malformed');
  _expect(
    restoredVisitor.restore(restoredState!),
    'visitor save state was not restorable',
  );
  _expect(
    jsonEncode(restoredVisitor.snapshot.toJson()) ==
        jsonEncode(visitorDirector.snapshot.toJson()),
    'visitor save restore changed authored visitor state',
  );
  input(const RendererInputAction(id: 'KeyK', pressed: true));
  final result = [
    for (final backend in backends)
      _RouteEvidence(
        snapshots: snapshots,
        days: days,
        events: events,
        saves: saves,
        rooms: rooms,
        visitorFacts: visitorFacts,
        endingOutcomes: endingOutcomes,
        lastFrame: backend.lastFrameEncoding ?? '',
        lastInput: backend.lastInputEncoding ?? '',
      ),
  ];
  for (final backend in backends) {
    backend.dispose();
  }
  return result;
}

VisitorDirector _buildVisitorDirector() {
  final corpus = decodeTextCorpus(File('web/res/text.json').readAsStringSync());
  final story = StoryText();
  for (final entry in corpus['visitors']!.entries) {
    if (entry.value is! Map) continue;
    final rawVisitor = entry.value as Map;
    final days = <int, Map<String, String>>{};
    for (final dayEntry in rawVisitor.entries) {
      final day = dayEntry.key is String
          ? int.tryParse(dayEntry.key as String)
          : null;
      if (day == null || dayEntry.value is! Map) continue;
      final lines = <String, String>{};
      for (final line in (dayEntry.value as Map).entries) {
        if (line.key is String && line.value is String) {
          lines[line.key as String] = line.value as String;
        }
      }
      if (lines.isNotEmpty) days[day] = lines;
    }
    if (days.isEmpty) continue;
    story.visitors[entry.key] = days;
    final arrivals = <int, VisitorArrivalMetadata>{};
    final rawArrivals = rawVisitor['_arrival'];
    if (rawArrivals is Map) {
      for (final day in days.keys) {
        final raw = rawArrivals[day.toString()];
        if (raw is! Map) continue;
        final hour = raw['hour'];
        final order = raw['order'];
        if (hour is num && order is num) {
          arrivals[day] = VisitorArrivalMetadata(
            hour: hour.toInt(),
            order: order.toInt(),
          );
        }
      }
    }
    if (arrivals.isNotEmpty) story.visitorArrivals[entry.key] = arrivals;
  }
  final built = VisitorDirector.build(story);
  if (built is! VisitorDirectorBuilt) {
    throw StateError('synthetic authored visitor corpus failed to build');
  }
  return built.director;
}

String _withoutBackend(String encoded) {
  final value = jsonDecode(encoded);
  if (value is! Map) return encoded;
  final result = <String, dynamic>{
    for (final entry in value.entries)
      if (entry.key != 'backend') entry.key as String: entry.value,
  };
  return jsonEncode(result);
}
