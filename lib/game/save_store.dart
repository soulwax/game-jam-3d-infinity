import 'save.dart';

class SaveRead {
  final SaveSnapshot? snapshot;
  final String? recovery;

  const SaveRead(this.snapshot, {this.recovery});
}

class SaveStore {
  final SaveCodec _codec;
  String? _active;
  String? _previous;

  SaveStore({SaveCodec? codec}) : _codec = codec ?? const SaveCodec();

  void write(SaveSnapshot snapshot) {
    final candidate = _codec.encode(snapshot);
    _codec.decode(candidate);
    _previous = _active;
    _active = candidate;
  }

  SaveRead read() {
    final active = _active;
    if (active == null) return const SaveRead(null);
    try {
      return SaveRead(_codec.decode(active));
    } on FormatException {
      final previous = _previous;
      if (previous == null) {
        return const SaveRead(null, recovery: 'active save is invalid');
      }
      try {
        return SaveRead(
          _codec.decode(previous),
          recovery: 'recovered previous save',
        );
      } on FormatException {
        return const SaveRead(null, recovery: 'both saves are invalid');
      }
    }
  }

  void clearRun() {
    _active = null;
    _previous = null;
  }

  void replaceActiveForTest(String value) => _active = value;
}
