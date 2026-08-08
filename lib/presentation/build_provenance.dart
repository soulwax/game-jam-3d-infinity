import 'dart:convert';

final class BuildProvenance {
  final String gameSha;
  final String rendererSha;
  final String sdkVersion;
  final String lockfileDigest;
  final String buildId;

  const BuildProvenance({
    required this.gameSha,
    required this.rendererSha,
    required this.sdkVersion,
    required this.lockfileDigest,
    required this.buildId,
  });

  bool get pinned => [
    gameSha,
    rendererSha,
    sdkVersion,
    lockfileDigest,
    buildId,
  ].every((value) => value.isNotEmpty);

  Map<String, String> toJson() => {
    'gameSha': gameSha,
    'rendererSha': rendererSha,
    'sdkVersion': sdkVersion,
    'lockfileDigest': lockfileDigest,
    'buildId': buildId,
  };

  String encode() => jsonEncode(toJson());
}
