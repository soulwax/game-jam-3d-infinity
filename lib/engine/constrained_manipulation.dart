import '../engine/math3.dart';

/// Interaction classification for PF-04 constrained direct manipulation.
enum ManipulableKind {
  hingedDoor,
  oneAxisLinear,
  portableProp,
}

/// Settled commit outcome for a manipulable object.
enum ManipulableCommitState {
  closed,
  open,
}

/// Authored metadata defining constraints, physics class, and audio family for a manipulable.
class ManipulableDescriptor {
  final String id;
  final ManipulableKind kind;
  final Vec3 axis;
  final double minTravel;
  final double maxTravel;
  final double motionScale;
  final double resistance;
  final String audioCueFamily;
  final double commitThreshold;
  final String savePolicy;

  const ManipulableDescriptor({
    required this.id,
    required this.kind,
    required this.axis,
    this.minTravel = 0.0,
    this.maxTravel = 1.0,
    this.motionScale = 1.0,
    this.resistance = 0.5,
    required this.audioCueFamily,
    this.commitThreshold = 0.5,
    this.savePolicy = 'settle',
  });

  /// Standard hero door descriptor.
  static final heroDoor = ManipulableDescriptor(
    id: 'door-hall-living',
    kind: ManipulableKind.hingedDoor,
    axis: Vec3(0.0, 1.0, 0.0),
    minTravel: 0.0,
    maxTravel: 1.5707963267948966, // 90 degrees in radians
    motionScale: 0.005,
    resistance: 0.2,
    audioCueFamily: 'door-wood-creak',
    commitThreshold: 0.5,
  );

  /// Standard hero drawer/lever descriptor.
  static final heroDrawer = ManipulableDescriptor(
    id: 'drawer-living-desk',
    kind: ManipulableKind.oneAxisLinear,
    axis: Vec3(0.0, 0.0, 1.0),
    minTravel: 0.0,
    maxTravel: 0.45, // meters
    motionScale: 0.003,
    resistance: 0.3,
    audioCueFamily: 'drawer-wood-slide',
    commitThreshold: 0.5,
  );

  /// Standard hero portable prop descriptor.
  static final heroProp = ManipulableDescriptor(
    id: 'prop-lantern',
    kind: ManipulableKind.portableProp,
    axis: Vec3(0.0, 1.0, 0.0),
    minTravel: 0.0,
    maxTravel: 1.0,
    motionScale: 0.01,
    resistance: 0.1,
    audioCueFamily: 'prop-metal-clink',
    commitThreshold: 0.5,
    savePolicy: 'reset',
  );
}

/// Active runtime state of a manipulable object.
class ManipulableState {
  final ManipulableDescriptor descriptor;
  double travel; // 0.0 to maxTravel
  double velocity;
  bool isHeld;

  ManipulableState({
    required this.descriptor,
    this.travel = 0.0,
    this.velocity = 0.0,
    this.isHeld = false,
  });

  /// Normalized opening/travel fraction (0.0 to 1.0).
  double get fraction {
    final range = descriptor.maxTravel - descriptor.minTravel;
    if (range <= 0) return 0.0;
    return ((travel - descriptor.minTravel) / range).clamp(0.0, 1.0);
  }

  /// Whether current fraction meets or exceeds the commit threshold.
  bool get isCommitted => fraction >= descriptor.commitThreshold;

  /// Settled semantic state.
  ManipulableCommitState get commitState =>
      isCommitted ? ManipulableCommitState.open : ManipulableCommitState.closed;

  /// Acoustic muffle opening factor (0.0 = fully closed/muffled, 1.0 = clear).
  double get acousticOpeningFraction => fraction;

  Map<String, Object?> toJson() => {
        'id': descriptor.id,
        'travel': travel,
        'fraction': fraction,
        'isHeld': isHeld,
        'commitState': commitState.name,
      };
}

/// Controller managing direct constrained direct manipulation for PF-04.
class ConstrainedManipulationController {
  final Map<String, ManipulableState> _states = {};

  ConstrainedManipulationController([
    List<ManipulableDescriptor>? descriptors,
  ]) {
    final list = descriptors ?? [
      ManipulableDescriptor.heroDoor,
      ManipulableDescriptor.heroDrawer,
      ManipulableDescriptor.heroProp,
    ];
    for (final desc in list) {
      _states[desc.id] = ManipulableState(descriptor: desc);
    }
  }

  /// Registered descriptors.
  Iterable<ManipulableDescriptor> get descriptors =>
      _states.values.map((s) => s.descriptor);

  /// Get state for a given ID.
  ManipulableState? getState(String id) => _states[id];

  /// Begin holding a manipulable object.
  bool beginHold(String id) {
    final state = _states[id];
    if (state == null) return false;
    state.isHeld = true;
    state.velocity = 0.0;
    return true;
  }

  /// Apply relative pointer drag delta under the object's authored motion scale and resistance.
  bool updateDrag(String id, double delta) {
    final state = _states[id];
    if (state == null || !state.isHeld) return false;
    final effectiveDelta = delta * state.descriptor.motionScale * (1.0 - state.descriptor.resistance * 0.5);
    state.travel = (state.travel + effectiveDelta).clamp(
      state.descriptor.minTravel,
      state.descriptor.maxTravel,
    );
    state.velocity = effectiveDelta;
    return true;
  }

  /// Release hold and deterministically settle to open (maxTravel) or closed (minTravel).
  ManipulableCommitState endHold(String id) {
    final state = _states[id];
    if (state == null) return ManipulableCommitState.closed;
    state.isHeld = false;
    state.velocity = 0.0;
    if (state.fraction >= state.descriptor.commitThreshold) {
      state.travel = state.descriptor.maxTravel;
    } else {
      state.travel = state.descriptor.minTravel;
    }
    return state.commitState;
  }

  /// Accessibility shortcut: directly toggle state with short deterministic commit.
  ManipulableCommitState toggleAccessibility(String id) {
    final state = _states[id];
    if (state == null) return ManipulableCommitState.closed;
    if (state.isCommitted) {
      state.travel = state.descriptor.minTravel;
    } else {
      state.travel = state.descriptor.maxTravel;
    }
    return state.commitState;
  }

  /// Reset all manipulables to default settled state for save restore.
  void resetAll() {
    for (final state in _states.values) {
      state.isHeld = false;
      state.travel = state.descriptor.minTravel;
      state.velocity = 0.0;
    }
  }

  Map<String, Object?> toJson() => {
        for (final entry in _states.entries) entry.key: entry.value.toJson(),
      };
}
