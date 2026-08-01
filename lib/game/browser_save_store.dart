import 'package:web/web.dart' as web;

import 'save.dart';
import 'save_store.dart';

/// Browser persistence adapter. The active/previous pair makes a completed
/// write recoverable if a later browser write is corrupted or incompatible.
class BrowserSaveStore {
  static const _activeKey = 'quarantine.save.active';
  static const _previousKey = 'quarantine.save.previous';

  BrowserSaveStore({SaveCodec? codec}) : _codec = codec ?? const SaveCodec();

  final SaveCodec _codec;

  void write(SaveSnapshot snapshot) {
    final candidate = _codec.encode(snapshot);
    _codec.decode(candidate);
    final storage = web.window.localStorage;
    final active = storage.getItem(_activeKey);
    if (active != null) storage.setItem(_previousKey, active);
    storage.setItem(_activeKey, candidate);
  }

  SaveRead read({bool Function(SaveSnapshot snapshot)? isUsable}) {
    try {
      final storage = web.window.localStorage;
      final active = storage.getItem(_activeKey);
      final previous = storage.getItem(_previousKey);
      final current = _decodeUsable(active, isUsable);
      if (current != null) return SaveRead(current);
      final fallback = _decodeUsable(previous, isUsable);
      if (fallback != null) {
        return SaveRead(fallback, recovery: 'recovered previous save');
      }
      if (active == null) return const SaveRead(null);
      return const SaveRead(null, recovery: 'save could not be recovered');
    } catch (_) {
      return const SaveRead(null, recovery: 'save storage unavailable');
    }
  }

  void clearRun() {
    final storage = web.window.localStorage;
    storage.removeItem(_activeKey);
    storage.removeItem(_previousKey);
  }

  SaveSnapshot? _decodeUsable(
    String? source,
    bool Function(SaveSnapshot snapshot)? isUsable,
  ) {
    if (source == null) return null;
    try {
      final snapshot = _codec.decode(source);
      return isUsable == null || isUsable(snapshot) ? snapshot : null;
    } on FormatException {
      return null;
    }
  }
}
