import 'dart:convert';

class RendererDiagnostics {
  final String backend;
  final String profile;
  final String buildId;
  final List<String> capabilities;
  final String? rendererSha;
  final String? gameSha;
  final String? sdkVersion;
  final String? lockfileDigest;
  final String? projectVersion;
  final bool fallback;
  final String? fallbackReason;
  final Map<String, Object?>? selection;

  RendererDiagnostics({
    required this.backend,
    required this.profile,
    required this.buildId,
    required Iterable<String> capabilities,
    this.rendererSha,
    this.gameSha,
    this.sdkVersion,
    this.lockfileDigest,
    this.projectVersion,
    this.fallback = false,
    this.fallbackReason,
    Map<String, Object?>? selection,
  }) : capabilities = List.unmodifiable(capabilities.toSet().toList()..sort()),
       selection = selection == null ? null : Map.unmodifiable(selection) {
    if (backend.isEmpty || profile.isEmpty || buildId.isEmpty) {
      throw ArgumentError('renderer diagnostics identity must be non-empty');
    }
    for (final value in [
      rendererSha,
      gameSha,
      sdkVersion,
      lockfileDigest,
      projectVersion,
    ]) {
      if (value != null && value.isEmpty) {
        throw ArgumentError('renderer provenance values must be non-empty');
      }
    }
  }

  /// Uses compile-time defines supplied by a reproducible release build.
  /// Missing defines remain visible through [provenancePinned] instead of
  /// being replaced with invented identity values.
  factory RendererDiagnostics.fromEnvironment({
    required String backend,
    required String profile,
    required Iterable<String> capabilities,
    bool fallback = false,
    String? fallbackReason,
    Map<String, Object?>? selection,
  }) => RendererDiagnostics(
    backend: backend,
    profile: profile,
    buildId: const String.fromEnvironment(
      'RENDERER_BUILD_ID',
      defaultValue: 'boundary',
    ),
    capabilities: capabilities,
    rendererSha: _environmentValue('RENDERER_SHA'),
    gameSha: _environmentValue('GAME_SHA'),
    sdkVersion: _environmentValue('DART_SDK_VERSION'),
    lockfileDigest: _environmentValue('LOCKFILE_SHA256'),
    projectVersion: _environmentValue('PROJECT_VERSION'),
    fallback: fallback,
    fallbackReason: fallbackReason,
    selection: selection,
  );

  /// Adds bootstrap selection facts without changing the established backend,
  /// profile, capability, or provenance fields.
  RendererDiagnostics withSelection(Map<String, Object?> selection) =>
      RendererDiagnostics(
        backend: backend,
        profile: profile,
        buildId: buildId,
        capabilities: capabilities,
        rendererSha: rendererSha,
        gameSha: gameSha,
        sdkVersion: sdkVersion,
        lockfileDigest: lockfileDigest,
        projectVersion: projectVersion,
        fallback: fallback,
        fallbackReason: fallbackReason,
        selection: selection,
      );

  bool get provenancePinned =>
      rendererSha != null &&
      gameSha != null &&
      sdkVersion != null &&
      lockfileDigest != null &&
      projectVersion != null;

  Map<String, dynamic> toJson() => {
    'backend': backend,
    'profile': profile,
    'buildId': buildId,
    'capabilities': capabilities,
    'provenancePinned': provenancePinned,
    'fallback': fallback,
    if (fallbackReason != null) 'fallbackReason': fallbackReason,
    if (selection != null) 'selection': selection,
    if (rendererSha != null) 'rendererSha': rendererSha,
    if (gameSha != null) 'gameSha': gameSha,
    if (sdkVersion != null) 'sdkVersion': sdkVersion,
    if (lockfileDigest != null) 'lockfileDigest': lockfileDigest,
    if (projectVersion != null) 'projectVersion': projectVersion,
  };

  String encode() => jsonEncode(toJson());
}

String? _environmentValue(String name) {
  const values = <String, String>{
    'RENDERER_SHA': String.fromEnvironment('RENDERER_SHA'),
    'GAME_SHA': String.fromEnvironment('GAME_SHA'),
    'DART_SDK_VERSION': String.fromEnvironment('DART_SDK_VERSION'),
    'LOCKFILE_SHA256': String.fromEnvironment('LOCKFILE_SHA256'),
    'PROJECT_VERSION': String.fromEnvironment('PROJECT_VERSION'),
  };
  final value = values[name]!;
  return value.isEmpty ? null : value;
}
