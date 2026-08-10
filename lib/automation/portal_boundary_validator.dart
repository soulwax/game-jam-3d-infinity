import '../engine/vec3.dart';

final class BoundaryValidationResult {
  final bool isValid;
  final String? errorMessage;
  final double stepDistanceMetres;

  const BoundaryValidationResult({
    required this.isValid,
    this.errorMessage,
    required this.stepDistanceMetres,
  });

  Map<String, Object> toJson() => {
        'isValid': isValid,
        if (errorMessage != null) 'errorMessage': errorMessage!,
        'stepDistanceMetres': stepDistanceMetres,
      };
}

/// Portal boundary handoff & collision validator for VIS-036 / T-06.
/// Ensures smooth non-teleport movement through portals without coordinate jumps (> 0.5m/tick).
class PortalBoundaryValidator {
  final double maxStepDistanceMetres;

  PortalBoundaryValidator({this.maxStepDistanceMetres = 0.5}) {
    if (maxStepDistanceMetres <= 0) {
      throw ArgumentError('maxStepDistanceMetres must be positive');
    }
  }

  BoundaryValidationResult validateStep({
    required Vec3 previousPosition,
    required Vec3 currentPosition,
  }) {
    final dist = (currentPosition - previousPosition).length;
    if (dist > maxStepDistanceMetres) {
      return BoundaryValidationResult(
        isValid: false,
        errorMessage: 'Teleport detected: step distance ${dist.toStringAsFixed(3)}m exceeds max allowed ${maxStepDistanceMetres}m',
        stepDistanceMetres: dist,
      );
    }

    return BoundaryValidationResult(
      isValid: true,
      stepDistanceMetres: dist,
    );
  }
}
