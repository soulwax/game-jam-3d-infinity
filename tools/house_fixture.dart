import 'dart:io';

import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/house.dart';

/// Loads the production house topology for command-line checks.
///
/// Tests must not construct the retired renderer showcase. Keeping this
/// helper in tools makes the source-of-truth file explicit without adding
/// dart:io to the browser/game libraries.
AuthoredHouseManifest loadAuthoredBlueprint() => AuthoredHouseManifest.decode(
      File('assets/house/house.json').readAsStringSync(),
    );

House loadAuthoredHouse({int seed = 42}) {
  return buildHouseFromBlueprint(loadAuthoredBlueprint(), seed);
}
