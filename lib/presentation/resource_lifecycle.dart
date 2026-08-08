final class ResourceLeaseTable {
  final Map<String, int> _owners = {};

  int owners(String id) => _owners[id] ?? 0;

  void retain(String id) {
    if (id.isEmpty) throw ArgumentError.value(id, 'id');
    _owners[id] = owners(id) + 1;
  }

  bool release(String id) {
    final count = owners(id);
    if (count == 0) throw StateError('resource is not retained: $id');
    if (count == 1) {
      _owners.remove(id);
      return true;
    }
    _owners[id] = count - 1;
    return false;
  }

  Map<String, int> snapshot() => Map.unmodifiable(_owners);
}
