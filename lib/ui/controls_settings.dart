const controlsActionLabels = <String, String>{
  'moveForward': 'Move forward',
  'moveBack': 'Move back',
  'moveLeft': 'Move left',
  'moveRight': 'Move right',
  'interact': 'Interact',
  'secondary': 'Secondary action',
  'run': 'Run',
  'crouch': 'Crouch',
  'rotate': 'Rotate object',
  'reach': 'Reach / pull',
  'journal': 'Journal',
  'sleep': 'Rest',
  'pause': 'Pause',
};

const _defaultActionBindings = <String, List<String>>{
  'moveForward': ['KeyW'],
  'moveBack': ['KeyS'],
  'moveLeft': ['KeyA'],
  'moveRight': ['KeyD'],
  'interact': ['KeyE'],
  'secondary': ['KeyQ'],
  'run': ['ShiftLeft'],
  'crouch': ['ControlLeft'],
  'rotate': ['KeyR'],
  'reach': ['KeyF'],
  'journal': ['KeyJ'],
  'sleep': ['KeyL'],
  'pause': ['Escape'],
};

/// Stable, browser-independent names for pointer bindings.
///
/// These values are persisted alongside keyboard `KeyboardEvent.code` values,
/// so the runtime can install the same profile without depending on localized
/// labels or browser event objects.
final class ControlsBindingToken {
  static const mouseButtons = <String>{
    'Mouse0',
    'Mouse1',
    'Mouse2',
    'Mouse3',
    'Mouse4',
  };
  static const wheelDirections = <String>{'WheelUp', 'WheelDown'};
  static const reserved = <String>{'Escape', 'Tab', 'F11'};

  static bool isValid(String token) =>
      token.isNotEmpty &&
      !reserved.contains(token) &&
      (mouseButtons.contains(token) ||
          wheelDirections.contains(token) ||
          !token.startsWith('Mouse'));

  static String label(String token) {
    if (token.startsWith('Mouse')) {
      final number = token.substring('Mouse'.length);
      return 'Mouse button $number';
    }
    return switch (token) {
      'WheelUp' => 'Mouse wheel up',
      'WheelDown' => 'Mouse wheel down',
      _ => token,
    };
  }
}

Map<String, List<String>> _copyBindings(Map<String, List<String>> source) => {
  for (final entry in source.entries)
    entry.key: List.unmodifiable(entry.value),
};

Map<String, List<String>> _legacyBindingLists(Map<String, String>? source) => {
  for (final entry in source?.entries ?? <MapEntry<String, String>>[])
    entry.key: [entry.value],
};

/// Browser-independent controls profile. Version 2 stores zero or more
/// bindings per action; [bindings] remains a primary-binding compatibility view
/// for runtime consumers that have not crossed the PF-03 adapter yet.
class ControlsSettingsProfile {
  final int version;
  final double horizontalSensitivity;
  final double verticalSensitivity;
  final bool invertX;
  final bool invertY;
  final bool holdToInteract;
  final Map<String, List<String>> bindingsByAction;

  Map<String, String> get bindings => {
    for (final entry in bindingsByAction.entries)
      entry.key: entry.value.isEmpty ? '' : entry.value.first,
  };

  ControlsSettingsProfile({
    this.version = 2,
    this.horizontalSensitivity = 1,
    this.verticalSensitivity = 1,
    this.invertX = false,
    this.invertY = false,
    this.holdToInteract = false,
    Map<String, String>? bindings,
    Map<String, List<String>>? bindingsByAction,
  }) : bindingsByAction = Map.unmodifiable(
         _copyBindings({
           ..._defaultActionBindings,
           ...?bindingsByAction,
           ..._legacyBindingLists(bindings),
         }),
       ) {
    validate();
  }

  ControlsSettingsProfile copyWith({
    double? horizontalSensitivity,
    double? verticalSensitivity,
    bool? invertX,
    bool? invertY,
    bool? holdToInteract,
    Map<String, String>? bindings,
    Map<String, List<String>>? bindingsByAction,
  }) {
    final common = {
      'version': version,
      'horizontalSensitivity':
          horizontalSensitivity ?? this.horizontalSensitivity,
      'verticalSensitivity': verticalSensitivity ?? this.verticalSensitivity,
      'invertX': invertX ?? this.invertX,
      'invertY': invertY ?? this.invertY,
      'holdToInteract': holdToInteract ?? this.holdToInteract,
    };
    if (bindingsByAction != null) {
      return ControlsSettingsProfile(
        version: common['version']! as int,
        horizontalSensitivity: common['horizontalSensitivity']! as double,
        verticalSensitivity: common['verticalSensitivity']! as double,
        invertX: common['invertX']! as bool,
        invertY: common['invertY']! as bool,
        holdToInteract: common['holdToInteract']! as bool,
        bindingsByAction: bindingsByAction,
      );
    }
    return ControlsSettingsProfile(
      version: common['version']! as int,
      horizontalSensitivity: common['horizontalSensitivity']! as double,
      verticalSensitivity: common['verticalSensitivity']! as double,
      invertX: common['invertX']! as bool,
      invertY: common['invertY']! as bool,
      holdToInteract: common['holdToInteract']! as bool,
      bindings: bindings ?? this.bindings,
    );
  }

  void validate() {
    if (horizontalSensitivity < 0.1 ||
        horizontalSensitivity > 3 ||
        verticalSensitivity < 0.1 ||
        verticalSensitivity > 3) {
      throw const FormatException('control sensitivity is outside 0.1–3.0');
    }
    const reserved = {'Escape'};
    if (bindingsByAction.entries.any(
      (entry) => entry.value.any(
        (value) =>
            value.isNotEmpty &&
            !(entry.key == 'pause' && value == 'Escape') &&
            !ControlsBindingToken.isValid(value),
      ),
    )) {
      throw const FormatException('invalid control binding token');
    }
    if (bindingsByAction.entries.any(
      (entry) => entry.key != 'pause' &&
          entry.value.any(reserved.contains),
    )) {
      throw const FormatException('Escape is reserved for pause navigation');
    }
    final assigned = bindingsByAction.values
        .expand((values) => values)
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
    'bindings': {
      for (final entry in bindingsByAction.entries)
        entry.key: List<String>.from(entry.value),
    },
  };

  factory ControlsSettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['bindings'] is! Map) {
      throw const FormatException('unsupported controls profile');
    }
    final version = raw['version'];
    if (version != 1 && version != 2) {
      throw const FormatException('unsupported controls profile');
    }
    final rawBindings = raw['bindings'] as Map;
    final migrated = <String, List<String>>{};
    for (final entry in rawBindings.entries) {
      final action = entry.key;
      final value = entry.value;
      if (action is! String) throw const FormatException('invalid action ID');
      if (value is String) {
        migrated[action] = [value];
      } else if (value is List && value.every((item) => item is String)) {
        migrated[action] = [for (final item in value) item as String];
      } else {
        throw const FormatException('invalid action bindings');
      }
    }
    return ControlsSettingsProfile(
      horizontalSensitivity: (raw['horizontalSensitivity'] as num).toDouble(),
      verticalSensitivity: (raw['verticalSensitivity'] as num).toDouble(),
      invertX: raw['invertX'] as bool,
      invertY: raw['invertY'] as bool,
      holdToInteract: raw['holdToInteract'] as bool,
      bindingsByAction: migrated,
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
    if (!profile.bindingsByAction.containsKey(action)) {
      return BindingCaptureResult(
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
    return captureToken(code);
  }

  /// Captures either a keyboard code or a [ControlsBindingToken] pointer name.
  /// The editor remains transactional: conflicts are staged until [resolve].
  BindingCaptureResult captureToken(String code) {
    final action = capturingAction;
    if (action == null) {
      return const BindingCaptureResult(BindingCaptureStatus.rejected);
    }
    if (!ControlsBindingToken.isValid(code)) {
      capturingAction = null;
      pendingAction = null;
      return BindingCaptureResult(
        BindingCaptureStatus.cancelled,
        message: ControlsBindingToken.reserved.contains(code)
            ? 'reserved browser or pause key'
            : 'unsupported input binding',
      );
    }
    String? conflict;
    for (final entry in profile.bindingsByAction.entries) {
      if (entry.key == action) continue;
      if (entry.value.contains(code)) {
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
        final bindings = _bindingLists(profile.bindingsByAction);
        bindings[action] = _promote(bindings[action]!, code);
        bindings[conflict] = _withoutCode(bindings[conflict]!, code);
        profile = profile.copyWith(bindingsByAction: bindings);
      case BindingConflictResolution.swap:
        final bindings = _bindingLists(profile.bindingsByAction);
        final old = bindings[action]!.isEmpty ? '' : bindings[action]!.first;
        bindings[action] = [
          code,
          for (final value in bindings[action]!.skip(1))
            if (value != code) value,
        ];
        bindings[conflict] = old.isEmpty
            ? _withoutCode(bindings[conflict]!, code)
            : _promote(_withoutCode(bindings[conflict]!, code), old);
        profile = profile.copyWith(bindingsByAction: bindings);
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
    final bindings = _bindingLists(profile.bindingsByAction);
    bindings[action] = _promote(bindings[action]!, code);
    profile = profile.copyWith(bindingsByAction: bindings);
    capturingAction = null;
    return const BindingCaptureResult(BindingCaptureStatus.applied);
  }
}

Map<String, List<String>> _bindingLists(Map<String, List<String>> source) => {
  for (final entry in source.entries) entry.key: [...entry.value],
};

List<String> _promote(List<String> values, String code) => [
  code,
  for (final value in values)
    if (value != code) value,
];

List<String> _withoutCode(List<String> values, String code) => [
  for (final value in values)
    if (value != code) value,
];
