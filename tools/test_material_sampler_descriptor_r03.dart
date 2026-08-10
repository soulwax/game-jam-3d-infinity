import 'package:quarantine/engine/material_sampler_descriptor.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final d1 = MaterialSamplerDescriptor.create(
    requestedAnisotropy: 16.0,
    maxAnisotropySupported: 16.0,
  );
  check(d1.effectiveAnisotropy == 16.0, 'full anisotropy supported');

  final d2 = MaterialSamplerDescriptor.create(
    requestedAnisotropy: 16.0,
    maxAnisotropySupported: 4.0,
  );
  check(d2.requestedAnisotropy == 16.0, 'requested is 16.0');
  check(d2.effectiveAnisotropy == 4.0, 'effective is capped to 4.0');

  final json = d2.toJson();
  check(json['minFilter'] == 'linearMipmapLinear', 'minFilter serialized');
  check(json['effectiveAnisotropy'] == 4.0, 'effectiveAnisotropy serialized');

  print('material sampler descriptor VIS-015 / R-03: sampler parameters, anisotropy negotiation, and JSON pass');
}
