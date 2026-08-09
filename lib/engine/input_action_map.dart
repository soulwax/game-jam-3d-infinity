/// Browser-independent action-to-binding lookup used by the live Input seam.
final class InputActionMap {
  final Map<String, List<String>> _bindings;

  InputActionMap(Map<String, List<String>> bindings)
    : _bindings = {
        for (final entry in bindings.entries)
          entry.key: List.unmodifiable(entry.value),
      };

  Iterable<String> get actions => _bindings.keys;

  List<String> codesFor(String action) => _bindings[action] ?? const [];

  void replace(String action, Iterable<String> codes) {
    if (!_bindings.containsKey(action)) return;
    final unique = <String>{
      for (final code in codes)
        if (code.isNotEmpty) code,
    };
    _bindings[action] = List.unmodifiable(unique);
  }

  bool anyDown(String action, Set<String> held) =>
      codesFor(action).any(held.contains);

  bool consumePressed(String action, Set<String> pressed) {
    for (final code in codesFor(action)) {
      if (pressed.remove(code)) return true;
    }
    return false;
  }
}
