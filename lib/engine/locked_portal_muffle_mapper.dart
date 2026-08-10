import 'portal_state_mapper.dart';

/// Locked/stuck portal state & acoustic muffle mapper for VIS-038 / T-06.
/// Evaluates locked/stuck doors (e.g. hall-cellar door with sticks: true)
/// and enforces acoustic muffle attenuation when closed vs unlocked.
class LockedPortalState {
  final String portalId;
  final bool isLocked;
  final bool sticks;
  final double requestedOpenFraction;

  const LockedPortalState({
    required this.portalId,
    this.isLocked = false,
    this.sticks = false,
    this.requestedOpenFraction = 0.0,
  });

  double get effectiveOpenFraction => (isLocked || (sticks && isLocked)) ? 0.0 : requestedOpenFraction.clamp(0.0, 1.0);

  Map<String, Object> toJson() => {
        'portalId': portalId,
        'isLocked': isLocked,
        'sticks': sticks,
        'requestedOpenFraction': requestedOpenFraction,
        'effectiveOpenFraction': effectiveOpenFraction,
      };
}

class LockedPortalMuffleMapper {
  static PortalStateFacts evaluatePortal(LockedPortalState state) {
    final effFraction = state.effectiveOpenFraction;
    return PortalStateFacts.calculate(
      portalId: state.portalId,
      openFraction: effFraction,
    );
  }
}
