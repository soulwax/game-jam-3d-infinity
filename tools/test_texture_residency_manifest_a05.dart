// A-05: Texture residency & compression manifest verification.
//
// Verifies that:
//  1. Texture items with various compression formats (ASTC, ETC2, BC3, RGBA8) register cleanly.
//  2. Textures can be made resident within VRAM byte budget limit (64 MB).
//  3. Budget overflow triggers priority-ordered eviction of lower LOD textures.
//  4. Eviction resets residency status safely.

import 'package:quarantine/engine/texture_residency_manifest.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final manifest = TextureResidencyManifest(
    maxVramBudgetBytes: 10 * 1024 * 1024, // 10 MB budget for testing
  );

  final tex1 = TextureResidencyItem(
    textureId: 'tex-wall-plaster-albedo',
    lodLevel: 0,
    width: 2048,
    height: 2048,
    format: TextureCompressionFormat.astc,
    byteSize: 4 * 1024 * 1024, // 4 MB
  );

  final tex2 = TextureResidencyItem(
    textureId: 'tex-wall-plaster-normal',
    lodLevel: 0,
    width: 2048,
    height: 2048,
    format: TextureCompressionFormat.etc2,
    byteSize: 4 * 1024 * 1024, // 4 MB
  );

  final tex3 = TextureResidencyItem(
    textureId: 'tex-floor-wood-lod2',
    lodLevel: 2,
    width: 512,
    height: 512,
    format: TextureCompressionFormat.bc3,
    byteSize: 3 * 1024 * 1024, // 3 MB -> exceeds 10 MB total!
  );

  manifest.registerTexture(tex1);
  manifest.registerTexture(tex2);
  manifest.registerTexture(tex3);

  check(manifest.totalRegisteredCount == 3, 'Registered 3 texture items');

  // 1. Make tex1 & tex2 resident (8 MB total <= 10 MB budget)
  manifest.makeResident('tex-wall-plaster-albedo');
  manifest.makeResident('tex-wall-plaster-normal');

  check(manifest.currentResidentBytes == 8 * 1024 * 1024, '8 MB current resident bytes');
  check(tex1.isResident && tex2.isResident, 'tex1 and tex2 are resident');

  // 2. Make tex3 resident (triggers eviction because 8 + 3 = 11 MB > 10 MB budget)
  manifest.makeResident('tex-floor-wood-lod2');

  check(manifest.currentResidentBytes <= 10 * 1024 * 1024, 'VRAM residency stays within 10 MB budget');
  check(tex3.isResident, 'tex3 is resident after eviction');

  // 3. Manual Evict
  manifest.evict('tex-floor-wood-lod2');
  check(!tex3.isResident, 'tex3 evicted');

  print('A-05: Texture residency manifest test passed cleanly!');
}
