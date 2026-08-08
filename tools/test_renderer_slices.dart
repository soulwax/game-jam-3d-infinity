import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/build_provenance.dart';
import 'package:quarantine/presentation/capability_policy.dart';
import 'package:quarantine/presentation/frame_coalescer.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/query_smoke.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/resource_lifecycle.dart';

Never _fail(String message) => throw StateError(message);
void _expect(bool ok, String message) {
  if (!ok) _fail(message);
}

void main() {
  const policy = CapabilityPolicy();
  _expect(
    policy.choose(available: const ['webgl2']).profile == 'safe',
    'safe profile',
  );
  _expect(
    policy
            .choose(available: const ['webgl2', 'msaa', 'float-textures'])
            .profile ==
        'standard',
    'standard profile',
  );
  _expect(
    policy.choose(available: const []).fallback,
    'missing WebGL falls back',
  );

  const provenance = BuildProvenance(
    gameSha: 'g',
    rendererSha: 'r',
    sdkVersion: 's',
    lockfileDigest: 'l',
    buildId: 'b',
  );
  _expect(
    provenance.pinned && provenance.encode().contains('buildId'),
    'provenance pins',
  );

  final queries = rendererQuerySmoke();
  _expect(
    queries.length == 4 && queries.every(queryIsSafe),
    'query matrix is safe',
  );
  _expect(queries.last.selection.fallback, 'unknown query is visible fallback');

  final leases = ResourceLeaseTable();
  leases.retain('mesh');
  leases.retain('mesh');
  _expect(
    !leases.release('mesh') && leases.release('mesh'),
    'lease release at zero owners',
  );

  final backend = LegacyBackend()..initialize();
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'day': 1}),
  );
  final coalescer = FrameCoalescer();
  _expect(coalescer.submitIfChanged(backend, frame), 'first frame submits');
  _expect(
    !coalescer.submitIfChanged(backend, frame),
    'identical frame coalesces',
  );
  print('renderer slices: capability/provenance/query/lease/coalescer pass');
}
