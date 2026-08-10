import 'package:quarantine/presentation/tone_mapping_policy.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // ACES Filmic
  const aces = ToneMappingPolicy(operator: ToneMappingOperator.acesFilmic);
  final (ar, ag, ab) = aces.mapColor(2.0, 1.0, 0.5);
  check(ar >= 0.0 && ar <= 1.0, 'aces r is in [0, 1]');
  check(ag >= 0.0 && ag <= 1.0, 'aces g is in [0, 1]');
  check(ab >= 0.0 && ab <= 1.0, 'aces b is in [0, 1]');
  check(ar > ag && ag > ab, 'aces monotonicity preserved');

  // Reinhard
  const reinhard = ToneMappingPolicy(operator: ToneMappingOperator.reinhard);
  final (rr, rg, rb) = reinhard.mapColor(10.0, 1.0, 0.1);
  check(rr < 1.0, 'reinhard 10.0 is mapped < 1.0');
  check(rr > rg && rg > rb, 'reinhard monotonicity preserved');

  // LDR pass-through
  const ldr = ToneMappingPolicy(operator: ToneMappingOperator.ldrPassThrough);
  final (lr, lg, lb) = ldr.mapColor(1.5, 0.5, 0.2);
  check((lr - 1.0).abs() < 0.001, 'ldr 1.5 is clamped to 1.0 (with gamma)');

  print('tone mapping policy VIS-011 / R-02: ACES Filmic, Reinhard, LDR pass-through, and gamma correction pass');
}
