import 'backend_selector.dart';
import 'renderer_backend.dart';

final class QuerySmokeResult {
  final String query;
  final BackendSelection selection;

  const QuerySmokeResult(this.query, this.selection);
}

List<QuerySmokeResult> rendererQuerySmoke() {
  const selector = BackendSelector();
  return [
    for (final query in ['', 'legacy', 'pixeldart', 'next', 'auto', 'unknown'])
      QuerySmokeResult(query, selector.select(query.isEmpty ? null : query)),
  ];
}

bool queryIsSafe(QuerySmokeResult result) =>
    !result.selection.rejected &&
    result.selection.kind == RendererBackendKind.pixeldart;
