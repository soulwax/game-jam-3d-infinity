import 'package:quarantine/presentation/model_package_index.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

void main() {
  final index = PresentationModelPackageIndex.decode('''
{"schema":"quarantine-promoted-models-v1","entries":[
{"assetId":"living-room","licenseId":"licensed-room","manifestPath":"models/living/manifest.json","sourceFormat":"fbx"}]}
''');
  check(index.resolve('living-room').sourceFormat == 'fbx', 'index resolves stable ID');
  final roundTrip = PresentationModelPackageIndex.decode(index.canonicalJson());
  check(roundTrip.assetIds.length == 1, 'index canonical JSON round-trips');
  var rejected = false;
  try {
    PresentationModelPackageIndex.decode('''
{"schema":"quarantine-promoted-models-v1","entries":[
{"assetId":"x","licenseId":"rights","manifestPath":"../raw.obj","sourceFormat":"obj"}]}
''');
  } on FormatException {
    rejected = true;
  }
  check(rejected, 'unsafe source path is rejected');
  print('Presentation model package index tests passed.');
}
