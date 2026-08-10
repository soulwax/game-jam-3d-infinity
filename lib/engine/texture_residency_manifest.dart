/// Enum of supported GPU texture compression formats for A-05.
enum TextureCompressionFormat {
  astc,
  etc2,
  bc3,
  rgba8,
}

/// Representation of a single texture residency entry in A-05.
class TextureResidencyItem {
  final String textureId;
  final int lodLevel; // 0=High (full resolution), 1=Medium, 2=Low
  final int width;
  final int height;
  final TextureCompressionFormat format;
  final int byteSize;
  bool isResident;

  TextureResidencyItem({
    required this.textureId,
    required this.lodLevel,
    required this.width,
    required this.height,
    required this.format,
    required this.byteSize,
    this.isResident = false,
  });

  Map<String, dynamic> toJson() => {
        'textureId': textureId,
        'lodLevel': lodLevel,
        'width': width,
        'height': height,
        'format': format.name,
        'byteSize': byteSize,
        'isResident': isResident,
      };
}

/// A-05 Texture Residency & Compression Manifest Manager.
class TextureResidencyManifest {
  final int maxVramBudgetBytes;
  final Map<String, TextureResidencyItem> _items = {};

  TextureResidencyManifest({
    this.maxVramBudgetBytes = 64 * 1024 * 1024, // 64 MB VRAM budget limit
  });

  int get totalRegisteredCount => _items.length;

  int get currentResidentBytes {
    var sum = 0;
    for (final item in _items.values) {
      if (item.isResident) {
        sum += item.byteSize;
      }
    }
    return sum;
  }

  void registerTexture(TextureResidencyItem item) {
    _items[item.textureId] = item;
  }

  TextureResidencyItem? getItem(String textureId) => _items[textureId];

  /// Loads textures into VRAM residency while maintaining total byte budget under [maxVramBudgetBytes].
  bool makeResident(String textureId) {
    final item = _items[textureId];
    if (item == null) return false;
    if (item.isResident) return true;

    // Check if adding item exceeds budget; evict lowest priority if needed
    if (currentResidentBytes + item.byteSize > maxVramBudgetBytes) {
      _evictToFit(item.byteSize);
    }

    item.isResident = true;
    return true;
  }

  /// Evicts a texture from VRAM residency.
  void evict(String textureId) {
    final item = _items[textureId];
    if (item != null) {
      item.isResident = false;
    }
  }

  void _evictToFit(int requiredBytes) {
    final residentItems = _items.values.where((i) => i.isResident).toList()
      ..sort((a, b) => b.lodLevel.compareTo(a.lodLevel)); // Evict lower LOD levels first

    for (final item in residentItems) {
      item.isResident = false;
      if (currentResidentBytes + requiredBytes <= maxVramBudgetBytes) {
        break;
      }
    }
  }

  void clear() {
    _items.clear();
  }
}
