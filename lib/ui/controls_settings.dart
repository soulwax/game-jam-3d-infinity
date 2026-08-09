/// Browser-independent controls profile. The runtime input layer can adopt
/// these values later without changing the semantic page contract.
class ControlsSettingsProfile {
  final int version;
  final double horizontalSensitivity;
  final double verticalSensitivity;
  final bool invertX;
  final bool invertY;
  final bool holdToInteract;
  final Map<String, String> bindings;

  ControlsSettingsProfile({
    this.version = 1,
    this.horizontalSensitivity = 1,
    this.verticalSensitivity = 1,
    this.invertX = false,
    this.invertY = false,
    this.holdToInteract = false,
    Map<String, String>? bindings,
  }) : bindings = Map.unmodifiable({
         'moveForward': 'KeyW',
         'moveBack': 'KeyS',
         'moveLeft': 'KeyA',
         'moveRight': 'KeyD',
         'interact': 'KeyE',
         'journal': 'KeyJ',
         'sleep': 'KeyL',
         'pause': 'Escape',
         ...?bindings,
       }) {
    validate();
  }

  ControlsSettingsProfile copyWith({
    double? horizontalSensitivity,
    double? verticalSensitivity,
    bool? invertX,
    bool? invertY,
    bool? holdToInteract,
    Map<String, String>? bindings,
  }) => ControlsSettingsProfile(
    version: version,
    horizontalSensitivity: horizontalSensitivity ?? this.horizontalSensitivity,
    verticalSensitivity: verticalSensitivity ?? this.verticalSensitivity,
    invertX: invertX ?? this.invertX,
    invertY: invertY ?? this.invertY,
    holdToInteract: holdToInteract ?? this.holdToInteract,
    bindings: bindings ?? this.bindings,
  );

  void validate() {
    if (horizontalSensitivity < 0.1 ||
        horizontalSensitivity > 3 ||
        verticalSensitivity < 0.1 ||
        verticalSensitivity > 3) {
      throw const FormatException('control sensitivity is outside 0.1–3.0');
    }
    const reserved = {'Escape'};
    if (bindings.entries.any(
      (entry) => entry.key != 'pause' && reserved.contains(entry.value),
    )) {
      throw const FormatException('Escape is reserved for pause navigation');
    }
    final assigned = bindings.values
        .where((value) => value.isNotEmpty)
        .toList();
    if (assigned.toSet().length != assigned.length) {
      throw const FormatException('control bindings conflict');
    }
  }

  Map<String, Object> toJson() => {
    'version': version,
    'horizontalSensitivity': horizontalSensitivity,
    'verticalSensitivity': verticalSensitivity,
    'invertX': invertX,
    'invertY': invertY,
    'holdToInteract': holdToInteract,
    'bindings': bindings,
  };

  factory ControlsSettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1 || raw['bindings'] is! Map) {
      throw const FormatException('unsupported controls profile');
    }
    return ControlsSettingsProfile(
      horizontalSensitivity: (raw['horizontalSensitivity'] as num).toDouble(),
      verticalSensitivity: (raw['verticalSensitivity'] as num).toDouble(),
      invertX: raw['invertX'] as bool,
      invertY: raw['invertY'] as bool,
      holdToInteract: raw['holdToInteract'] as bool,
      bindings: Map<String, String>.from(raw['bindings'] as Map),
    );
  }
}

enum BindingCaptureStatus {
  idle,
  capturing,
  conflict,
  rejected,
  applied,
  cancelled,
}

enum BindingConflictResolution { swap, replace, cancel }

class BindingCaptureResult {
  final BindingCaptureStatus status;
  final String? conflictingAction;
  final String? message;

  const BindingCaptureResult(
    this.status, {
    this.conflictingAction,
    this.message,
  });
}

/// Transactional binding editor. It never mutates the supplied profile until
/// an unambiguous capture or explicit conflict resolution is completed.
class ControlsBindingEditor {
  ControlsSettingsProfile profile;
  String? capturingAction;
  String? pendingAction;
  String? pendingCode;
  String? pendingConflict;

  ControlsBindingEditor(this.profile);

  BindingCaptureStatus get status => capturingAction == null
      ? (pendingCode == null
            ? BindingCaptureStatus.idle
            : BindingCaptureStatus.conflict)
      : BindingCaptureStatus.capturing;

  BindingCaptureResult begin(String action) {
    if (!profile.bindings.containsKey(action)) {
      return const BindingCaptureResult(
        BindingCaptureStatus.rejected,
        message: 'unknown action',
      );
    }
    capturingAction = action;
    pendingAction = null;
    pendingCode = null;
    pendingConflict = null;
    return const BindingCaptureResult(BindingCaptureStatus.capturing);
  }

  BindingCaptureResult capture(String code) {
    final action = capturingAction;
    if (action == null) {
      return const BindingCaptureResult(BindingCaptureStatus.rejected);
    }
    if (code == 'Escape' || code == 'Tab' || code == 'F11') {
      capturingAction = null;
      pendingAction = null;
      return const BindingCaptureResult(
        BindingCaptureStatus.cancelled,
        message: 'reserved browser or pause key',
      );
    }
    String? conflict;
    for (final entry in profile.bindings.entries) {
      if (entry.key != action && entry.value == code) {
        conflict = entry.key;
        break;
      }
    }
    if (conflict != null) {
      pendingAction = action;
      pendingCode = code;
      pendingConflict = conflict;
      capturingAction = null;
      return BindingCaptureResult(
        BindingCaptureStatus.conflict,
        conflictingAction: conflict,
        message: '$code is already bound to $conflict',
      );
    }
    return _apply(code);
  }

  BindingCaptureResult resolve(BindingConflictResolution resolution) {
    final action = pendingAction;
    final code = pendingCode;
    final conflict = pendingConflict;
    if (action == null || code == null || conflict == null) {
      return const BindingCaptureResult(BindingCaptureStatus.rejected);
    }
    switch (resolution) {
      case BindingConflictResolution.cancel:
        pendingCode = null;
        pendingConflict = null;
        pendingAction = null;
        return const BindingCaptureResult(BindingCaptureStatus.cancelled);
      case BindingConflictResolution.replace:
        final bindings = {...profile.bindings, action: code, conflict: ''};
        profile = profile.copyWith(bindings: bindings);
      case BindingConflictResolution.swap:
        final old = profile.bindings[action] ?? '';
        profile = profile.copyWith(
          bindings: {...profile.bindings, action: code, conflict: old},
        );
    }
    pendingCode = null;
    pendingConflict = null;
    pendingAction = null;
    return const BindingCaptureResult(BindingCaptureStatus.applied);
  }

  BindingCaptureResult _apply(String code) {
    final action = capturingAction;
    if (action == null) {
      return const BindingCaptureResult(BindingCaptureStatus.rejected);
    }
    profile = profile.copyWith(bindings: {...profile.bindings, action: code});
    capturingAction = null;
    return const BindingCaptureResult(BindingCaptureStatus.applied);
  }
}
