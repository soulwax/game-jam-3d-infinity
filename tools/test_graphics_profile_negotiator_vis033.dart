import 'package:quarantine/presentation/graphics_profile_negotiator.dart';
import 'package:quarantine/ui/graphics_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final high = GraphicsSettingsProfile.forPreset(GraphicsPreset.high);

  // 1. Desktop negotiation: no downgrade
  final desktopResult = GraphicsProfileNegotiator.negotiate(
    requested: high,
    hardware: HardwareCapabilities.safeDesktop,
  );
  check(!desktopResult.isDowngraded, 'desktop has no downgrade');
  check(desktopResult.downgradeReasons.isEmpty, 'no downgrade reasons on desktop');
  check(desktopResult.effective.antialiasing == high.antialiasing, 'MSAA preserved on desktop');

  // 2. Mobile negotiation: MSAA downgraded to off
  final mobileResult = GraphicsProfileNegotiator.negotiate(
    requested: high,
    hardware: HardwareCapabilities.constrainedMobile, // max MSAA = 1
  );
  check(mobileResult.isDowngraded, 'mobile result is downgraded');
  check(mobileResult.downgradeReasons.isNotEmpty, 'downgrade reasons populated');
  check(mobileResult.effective.antialiasing == 'off', 'mobile MSAA capped to off');

  final json = mobileResult.toJson();
  check(json['isDowngraded'] == true, 'JSON captures isDowngraded');

  print('graphics profile negotiator VIS-033 / S-04: desktop pass-through, mobile capability downgrade, and diagnostic report pass');
}
