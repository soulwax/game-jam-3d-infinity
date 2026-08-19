import 'package:quarantine/engine/gold_master_asset_auditor.dart';
import 'package:quarantine/engine/release_certification_badge.dart';

Never _fail(String message) =>
    throw StateError('Gold Master Certification test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('=====================================================');
  print(' RUNNING PRODUCTION CONTENT EVIDENCE AUDIT');
  print('=====================================================');

  // 1. Audit all assets and game systems
  print('\n[1/3] Running production content and capability audit...');
  final audit = ProductionAssetAuditor.runAudit();
  _expect(audit.allChecksPass, 'All asset manifests and systems must pass audit');
  _expect(audit.totalPropsAudited >= 40, 'Must audit 40+ 3D props across 8 rooms');
  _expect(audit.roomManifestsVerified, 'Room manifests must be 100% verified');
  _expect(audit.narrativeMatrixVerified, '21-day narrative matrix must be 100% verified');
  _expect(audit.audioMixdownVerified, 'Master audio mixdown must be 100% verified');
  print('  -> ${audit.diagnostic}');
  print('  -> Total 3D props audited: ${audit.totalPropsAudited}');

  // 2. Generate Release Certification Manifest
  print('\n[2/3] Generating deterministic evidence manifest...');
  final manifest = ReleaseEvidenceManifest.generateManifest();
  _expect(manifest['status'] == 'AUDIT_ONLY', 'Status must remain audit-only');
  _expect(manifest['evidenceGates'] == 10, 'Must report all 10 evidence gates');
  _expect(!manifest.containsKey('timestamp'), 'Evidence must not use timestamps');
  _expect(!manifest.containsKey('releaseChecksum'), 'Evidence must not use checksum theater');
  print('  -> Evidence schema: ${manifest['schema']}');

  // 3. Self-validation check
  print('\n[3/3] Verifying release validator badge integrity...');
  _expect(ProductionAssetAuditor.validate(), 'ProductionAssetAuditor validate failed');
  _expect(ReleaseEvidenceManifest.validate(), 'ReleaseEvidenceManifest validate failed');

  print('\n=====================================================');
  print(' PRODUCTION CONTENT EVIDENCE AUDIT: PASS');
  print('=====================================================\n');
}
