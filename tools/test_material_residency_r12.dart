import 'package:pixeldart/rendering/rendering.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  check(
    MaterialResidencyManager.aggregate(const []) ==
        MaterialResidencyStatus.resident,
    'materials without texture dependencies are resident',
  );
  check(
    MaterialResidencyManager.aggregate([
          TextureResidencyStatus.resident,
          TextureResidencyStatus.pending,
        ]) ==
        MaterialResidencyStatus.pending,
    'pending texture propagates',
  );
  check(
    MaterialResidencyManager.aggregate([
          TextureResidencyStatus.pending,
          TextureResidencyStatus.missing,
        ]) ==
        MaterialResidencyStatus.missing,
    'missing texture outranks pending',
  );
  check(
    MaterialResidencyManager.aggregate([
          TextureResidencyStatus.missing,
          TextureResidencyStatus.evicted,
        ]) ==
        MaterialResidencyStatus.evicted,
    'evicted texture outranks missing',
  );
  print('material residency R-12: aggregate readiness policy pass');
}
