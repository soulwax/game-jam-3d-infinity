/// Static Shadow Tile Revision & Invalidation Manager per MASTERPLAN §37.3 and §39.3 (PD-05).
class ShadowTileCacheManager {
  final Map<int, String> _tileHashes = {};
  int _globalShadowRevision = 0;

  int get globalRevision => _globalShadowRevision;

  /// Increments revision counter when doors, shutters, or lights change state.
  void notifyPortalOrLightStateChanged() {
    _globalShadowRevision++;
  }

  /// Returns true if tile is dirty and must re-render its shadow depth map.
  bool isTileDirty(int tileIndex, String currentTileStateHash) {
    final cached = _tileHashes[tileIndex];
    final key = '$currentTileStateHash-rev:$_globalShadowRevision';
    if (cached != key) {
      _tileHashes[tileIndex] = key;
      return true; // Re-render shadow depth map
    }
    return false; // Skip render pass, reuse cached atlas tile
  }

  /// Clears cache.
  void reset() {
    _tileHashes.clear();
    _globalShadowRevision++;
  }
}
