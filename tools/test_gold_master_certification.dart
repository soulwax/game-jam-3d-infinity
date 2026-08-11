import 'package:quarantine/engine/gold_master_asset_auditor.dart';
import 'package:quarantine/engine/release_certification_badge.dart';

Never _fail(String message) =>
    throw StateError('Gold Master Certification test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('=====================================================');
  print(' RUNNING GOLD MASTER SHIP CERTIFICATION TEST SUITE');
  print('=====================================================');

  // 1. Audit all assets and game systems
  print('\n[1/3] Running Gold Master Asset & System Audit...');
  final audit = GoldMasterAssetAuditor.runAudit();
  _expect(audit.isGoldMasterReady, 'All asset manifests and systems must pass audit');
  _expect(audit.totalPropsAudited >= 40, 'Must audit 40+ 3D props across 8 rooms');
  _expect(audit.roomManifestsVerified, 'Room manifests must be 100% verified');
  _expect(audit.narrativeMatrixVerified, '21-day narrative matrix must be 100% verified');
  _expect(audit.pbrShadingVerified, 'PBR material shading pipeline must be 100% verified');
  _expect(audit.audioMixdownVerified, 'Master audio mixdown must be 100% verified');
  print('  -> ${audit.diagnostic}');
  print('  -> Total 3D props audited: ${audit.totalPropsAudited}');

  // 2. Generate Release Certification Manifest
  print('\n[2/3] Generating Signed Gold Master Release Manifest...');
  final manifest = ReleaseCertificationBadge.generateManifest();
  _expect(manifest['status'] == 'GOLD_MASTER_CERTIFIED', 'Status must be GOLD_MASTER_CERTIFIED');
  _expect(manifest['certifiedGates'] == 10, 'Must certify all 10 release gates');
  _expect(manifest['releaseChecksum'] != null, 'Release checksum must be present');
  print('  -> Release Version: ${manifest['releaseVersion']}');
  print('  -> Release Checksum: ${manifest['releaseChecksum']}');
  print('  -> Timestamp: ${manifest['timestamp']}');

  // 3. Self-validation check
  print('\n[3/3] Verifying release validator badge integrity...');
  _expect(GoldMasterAssetAuditor.validate(), 'GoldMasterAssetAuditor validate failed');
  _expect(ReleaseCertificationBadge.validate(), 'ReleaseCertificationBadge validate failed');

  print('\n=====================================================');
  print(' GOLD MASTER SHIP CERTIFICATION: 100% PASS');
  print('=====================================================\n');
}
