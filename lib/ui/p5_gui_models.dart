/// Persona 5 High-Contrast Color Palette
class P5Palette {
  static const String inkBlack = '#0c0a0e';
  static const String inkBlackTranslucent = 'rgba(12, 10, 14, 0.92)';
  static const String crimsonRed = '#d32f2f';
  static const String vibrantRed = '#ff1744';
  static const String amberGold = '#c49a45';
  static const String brightAmber = '#ffd54f';
  static const String boneWhite = '#f5f0e6';
  static const String mutedGrey = '#8c887e';
  static const String charcoalDark = '#1a1820';
  static const String shadowBlack = 'rgba(0, 0, 0, 0.85)';
}

/// Returns the clamped position of a Celsius value on the temperature HUD
/// scale. Keeping this mapping pure makes the visual range testable without a
/// browser canvas and prevents out-of-range weather values from moving the
/// marker outside its track.
double temperatureGaugeFraction(
  double temperatureCelsius, {
  double minimumCelsius = -30.0,
  double maximumCelsius = 50.0,
}) {
  if (!minimumCelsius.isFinite ||
      !maximumCelsius.isFinite ||
      maximumCelsius <= minimumCelsius) {
    throw ArgumentError('temperature gauge range must be finite and ordered');
  }
  if (!temperatureCelsius.isFinite) return 0.5;
  return ((temperatureCelsius - minimumCelsius) /
          (maximumCelsius - minimumCelsius))
      .clamp(0.0, 1.0)
      .toDouble();
}

/// A 2D point for polygon operations.
class Point2D {
  final double x;
  final double y;
  const Point2D(this.x, this.y);
}

/// A bounding box for canvas hit-testing.
class CanvasHitBox {
  final String id;
  final int index;
  final double left;
  final double top;
  final double width;
  final double height;
  final String text;

  const CanvasHitBox({
    required this.id,
    required this.index,
    required this.left,
    required this.top,
    required this.width,
    required this.height,
    required this.text,
  });

  bool contains(double px, double py) {
    return px >= left && px <= left + width && py >= top && py <= top + height;
  }
}

/// Dialogue render state for Persona 5 canvas presentation.
class P5DialogueState {
  final String? speakerName;
  final String fullText;
  final double revealFraction; // 0.0 to 1.0 for typewriter
  final List<String> choices;
  final int? selectedIndex;
  final int? hoveredIndex;
  final bool isVisitorPresent;
  final double timeInState;

  const P5DialogueState({
    this.speakerName,
    this.fullText = '',
    this.revealFraction = 1.0,
    this.choices = const [],
    this.selectedIndex,
    this.hoveredIndex,
    this.isVisitorPresent = false,
    this.timeInState = 0.0,
  });

  String get revealedText {
    if (revealFraction >= 1.0) return fullText;
    final count = (fullText.length * revealFraction)
        .clamp(0, fullText.length)
        .toInt();
    return fullText.substring(0, count);
  }
}
