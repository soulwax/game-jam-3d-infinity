import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/motion_blur_velocity_field.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — MOTION BLUR & VELOCITY FIELD TEST SUITE');
  print('========================================================================');

  // 1. Test Camera Velocity Reconstruction
  print('Testing Camera Velocity Reconstruction from Projection Matrices...');
  final curProj = Mat4.identity();
  // Simulate camera translating right (X offset in previous matrix)
  final prevProj = Mat4.translation(0.15, 0.0, 0.0);

  final worldPos = Vec3(0.0, 0.0, 5.0);
  final vel = MotionBlurEngine.reconstructScreenVelocity(
    worldPosition: worldPos,
    currentViewProj: curProj,
    previousViewProj: prevProj,
  );

  if (vel.magnitude <= 0.01) {
    throw StateError('Expected non-zero screen velocity for moving camera: ${vel.magnitude}');
  }
  print('✓ Screen-space velocity reconstructed accurately (vx: ${vel.vx.toStringAsFixed(3)}, vy: ${vel.vy.toStringAsFixed(3)})');

  // 2. Test Directional Motion Blur Gathering & Depth Occlusion
  print('Testing Directional Motion Blur Accumulation...');
  final centerColor = Vec3(1.0, 0.2, 0.2); // Red object in motion
  final velocity = ScreenSpaceVelocity(0.08, 0.0); // Fast horizontal sweep

  final pathColors = [
    Vec3(1.0, 0.2, 0.2), // Foreground red
    Vec3(0.0, 0.8, 0.0), // Far background green
    Vec3(1.0, 0.3, 0.2), // Foreground red
  ];
  final pathDepths = [
    2.0,
    10.0, // Far background (must be rejected by depth check)
    2.1,
  ];

  final blurResult = MotionBlurEngine.gatherDirectionalMotionBlur(
    centerColor: centerColor,
    centerDepth: 2.0,
    velocity: velocity,
    pathColorSamples: pathColors,
    pathDepthSamples: pathDepths,
    maxBlurRadiusPixels: 24.0,
    shutterFraction: 0.5,
  );

  if (blurResult.blurLengthPixels <= 0.5) {
    throw StateError('Expected non-zero blur radius for moving object');
  }
  // Background green should not bleed onto foreground red
  if (blurResult.blurredColor.y > 0.5) {
    throw StateError('Background green incorrectly bled onto moving foreground object: ${blurResult.blurredColor}');
  }
  print('✓ Depth-aware directional motion blur convolution certified');

  // 3. Test Stationary Object Zero Blur
  print('Testing Stationary Object Rejection...');
  final zeroVel = ScreenSpaceVelocity(0.0, 0.0);
  final zeroBlur = MotionBlurEngine.gatherDirectionalMotionBlur(
    centerColor: centerColor,
    centerDepth: 2.0,
    velocity: zeroVel,
    pathColorSamples: pathColors,
    pathDepthSamples: pathDepths,
  );

  if (zeroBlur.blurLengthPixels != 0.0) {
    throw StateError('Stationary object must have 0 blur length: ${zeroBlur.blurLengthPixels}');
  }
  print('✓ Zero blur verified for stationary targets');

  print('========================================================================');
  print('✓ MOTION BLUR & VELOCITY FIELD CERTIFIED (3/3 SUB-SYSTEMS)');
  print('========================================================================');
}
