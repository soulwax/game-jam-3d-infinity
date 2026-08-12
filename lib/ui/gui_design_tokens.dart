/// Unified GUI & HUD Aesthetic Design Token Registry per MASTERPLAN §42.1 (GUI-01).
/// Centralizes all colors, fonts, angles, stroke widths, and timing constants.
abstract final class GuiDesignTokens {
  // Primary Palette
  static const int crimsonHex = 0xD32F2F;      // #D32F2F - Accent / Danger / Active Highlight
  static const int obsidianHex = 0x121212;     // #121212 - Background Panels / Skewed Cards
  static const int pureWhiteHex = 0xFFFFFF;    // #FFFFFF - Primary Text & Sharp Reticles
  static const int amberHex = 0xFFC107;        // #FFC107 - Warning / Secondary Highlights
  static const int brassHex = 0xC5A059;        // #C5A059 - Metallic Accent / Border Trims
  static const int charcoalHex = 0x1E1E1E;     // #1E1E1E - Card Background Neutral

  // CSS Color Strings
  static const String crimsonCss = '#D32F2F';
  static const String obsidianCss = '#121212';
  static const String pureWhiteCss = '#FFFFFF';
  static const String amberCss = '#FFC107';
  static const String brassCss = '#C5A059';
  static const String charcoalCss = '#1E1E1E';

  // Skew & Geometry Constants
  static const double skewAngleRad = -0.14;     // ~-8 degrees persona-5 style slant
  static const double borderStrokePx = 3.0;
  static const double activeStrokePx = 5.0;

  // Animation Timings (in milliseconds)
  static const double choiceStaggerDelayMs = 120.0;
  static const double slideInDurationMs = 250.0;
  static const double silenceRingMaxDurationMs = 8000.0;
}
