import 'package:quarantine/presentation/render_scale_coordinator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final coordinator = RenderScaleCoordinator(
    initialWidth: 1280,
    initialHeight: 720,
    initialScale: '1.00',
    maxDevicePixelRatio: 2.0,
  );

  check(coordinator.currentProfile.renderWidth == 1280, 'initial width 1280');
  check(coordinator.currentProfile.renderHeight == 720, 'initial height 720');

  // Surface resize to 1920x1080 at 0.50 scale (DPR 1.0)
  final tx = coordinator.updateSurface(
    displayWidth: 1920,
    displayHeight: 1080,
    scaleOption: '0.50',
    devicePixelRatio: 1.0,
  );

  check(tx.isResized, 'surface resize transaction detected change');
  check(coordinator.currentProfile.renderWidth == 960, '1920 * 0.50 = 960 render width');
  check(coordinator.currentProfile.renderHeight == 540, '1080 * 0.50 = 540 render height');

  // High DPR capping (e.g. 3.0 capped to 2.0)
  final txDpr = coordinator.updateSurface(
    displayWidth: 1280,
    displayHeight: 720,
    scaleOption: '1.00',
    devicePixelRatio: 3.0, // Should be capped to 2.0
  );
  check(txDpr.devicePixelRatio == 2.0, 'DPR 3.0 capped to max 2.0');
  check(coordinator.currentProfile.renderWidth == 2560, '1280 * 2.0 = 2560 render width');

  print('render scale coordinator VIS-013 / R-01: surface resize, DPR capping, extent calculation pass');
}
