import 'package:quarantine/story/narrative_state.dart';
import 'screenplay.dart';

/// A physical aftermath object placed in the house environment as a consequence of an encounter.
class PhysicalAftermathItem {
  final String id;
  final String name;
  final String locationRoom;
  final String description;
  final String examineTag;

  const PhysicalAftermathItem({
    required this.id,
    required this.name,
    required this.locationRoom,
    required this.description,
    required this.examineTag,
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'locationRoom': locationRoom,
    'description': description,
    'examineTag': examineTag,
  };
}

/// Manages tangible environmental residues and items placed across the 21 days.
class PhysicalAftermathManager {
  final NarrativeState state;
  final List<PhysicalAftermathItem> _authoredItems;

  PhysicalAftermathManager({
    NarrativeState? state,
    Iterable<ScreenplayEvent> events = const [],
  }) : state = state ?? NarrativeState(),
       _authoredItems = [
         for (final event in events)
           if (event.kind == 'aftermath')
             PhysicalAftermathItem(
               id: 'residue-${event.id}',
               name: event.label,
               locationRoom: 'hall',
               description:
                   'A new consequence has settled into the house: ${event.label}',
               examineTag: 'examine-${event.id}',
             ),
       ];

  /// Returns all active physical aftermath items currently present in the house.
  List<PhysicalAftermathItem> getActiveResidues() {
    final items = <PhysicalAftermathItem>[];

    for (final item in _authoredItems) {
      final eventId = item.id.substring('residue-'.length);
      if (state.hasFlag('aftermath.$eventId', 'placed')) items.add(item);
    }

    // Day 1: Mutton broth jug
    if (state.hasFlag('ashworth.compact', 'accepted')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-broth',
          name: 'earthenware broth jug',
          locationRoom: 'hall',
          description:
              'A stone jug with grease-proof paper tied with string around the rim.',
          examineTag: 'examine-broth',
        ),
      );
    }

    // Day 2: Garden pears
    if (state.hasFlag('denise.pears', 'taken')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-pears-sideboard',
          name: 'four garden pears',
          locationRoom: 'living-room',
          description:
              'Four small brown pears resting on a porcelain saucer on the sideboard.',
          examineTag: 'examine-pears',
        ),
      );
    } else if (state.hasFlag('denise.pears', 'left')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-pears-step',
          name: 'pears on the front step',
          locationRoom: 'hall',
          description:
              'A paper cone of garden pears left in the frost outside the draft excluder.',
          examineTag: 'examine-pears-step',
        ),
      );
    }

    // Day 3: Exemption slip
    if (state.hasFlag('sylvia.certificate', 'granted')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-certificate',
          name: 'signed mill certificate carbon',
          locationRoom: 'living-room',
          description:
              'A purple carbon copy of Quarantine Exemption Form 14-B.',
          examineTag: 'examine-cert',
        ),
      );
    }

    // Day 5: Coal sacks
    if (state.hasFlag('residue.coal', 'cellar')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-coal-sacks',
          name: 'two sacks of anthracite',
          locationRoom: 'cellar',
          description:
              'Rough hessian bags of Welsh anthracite slumped beside the coal chute.',
          examineTag: 'examine-coal-sacks',
        ),
      );
    }

    // Day 8: Ministry telegram
    if (state.hasFlag('telegram.08', 'read')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-telegram',
          name: 'Ministry telegram',
          locationRoom: 'hall',
          description:
              'A buff envelope with gummed paper strips across the fold.',
          examineTag: 'examine-telegram',
        ),
      );
    }

    // Day 9: Mother's shawl
    if (state.hasFlag('truth.shawl', 'home')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-shawl',
          name: 'tartan wool shawl',
          locationRoom: 'bedroom',
          description:
              'A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.',
          examineTag: 'examine-shawl',
        ),
      );
    }

    // Day 13: Paraffin tin
    if (state.hasFlag('sowerby.paraffin', 'received')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-paraffin-tin',
          name: 'one-gallon paraffin tin',
          locationRoom: 'kitchen',
          description:
              'A red tin container with a stamped brass spout on the scullery stone.',
          examineTag: 'examine-paraffin',
        ),
      );
    }

    // Day 19: Proclamation notice
    if (state.hasFlag('inspector.proclamation', 'acknowledged')) {
      items.add(
        const PhysicalAftermathItem(
          id: 'residue-proclamation',
          name: 'fumigation order notice',
          locationRoom: 'hall',
          description:
              'An official Ministry notice tacked into the hall door frame.',
          examineTag: 'examine-proclamation',
        ),
      );
    }

    return items;
  }

  /// Returns active physical aftermath items in a specific room.
  List<PhysicalAftermathItem> getResiduesForRoom(String roomId) {
    return getActiveResidues()
        .where((item) => item.locationRoom == roomId)
        .toList();
  }
}
