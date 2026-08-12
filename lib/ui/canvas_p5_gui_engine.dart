import 'dart:js_interop';
import 'dart:math' as math;

import 'package:web/web.dart' as web;

import 'p5_gui_models.dart';
export 'p5_gui_models.dart';
import '../presentation/shader_tuning_state.dart';
export '../presentation/shader_tuning_state.dart';

/// Core Gameplay Canvas GUI Engine rendering Persona 5 Paintbrush & Comic-Cut Aesthetics.
class CanvasP5GuiEngine {
  final web.HTMLCanvasElement canvas;
  late final web.CanvasRenderingContext2D ctx;

  double _animationTime = 0.0;
  final List<CanvasHitBox> _currentChoiceHitBoxes = [];

  List<CanvasHitBox> get currentChoiceHitBoxes => List.unmodifiable(_currentChoiceHitBoxes);

  CanvasP5GuiEngine(this.canvas) {
    final context = canvas.getContext('2d');
    if (context is! web.CanvasRenderingContext2D) {
      throw StateError('Failed to get 2D context for CanvasP5GuiEngine');
    }
    ctx = context;
  }

  /// Clears and resizes the UI canvas to match the display size and pixel ratio.
  void beginFrame(double dt, double width, double height) {
    _animationTime += dt;
    _currentChoiceHitBoxes.clear();

    final dpr = web.window.devicePixelRatio.toDouble();
    final targetW = (width * dpr).toInt();
    final targetH = (height * dpr).toInt();

    if (canvas.width != targetW || canvas.height != targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);
  }

  /// Finishes the frame and restores canvas state.
  void endFrame() {
    ctx.restore();
  }

  // =========================================================================
  // 1. PERSONA 5 PAINTBRUSH & POLYGON GRAPHICS PRIMITIVES
  // =========================================================================

  /// Draws a skewed torn-paper / brush-cut polygon container.
  void drawBrushPanel({
    required double x,
    required double y,
    required double width,
    required double height,
    double skewAngleRad = -0.08, // ~ -4.5 degrees
    String fillColor = P5Palette.inkBlackTranslucent,
    String? borderColor = P5Palette.amberGold,
    double borderWidth = 2.0,
    bool shadow = true,
    double cutCornerSize = 14.0,
  }) {
    ctx.save();
    ctx.translate(x, y);

    final halfW = width * 0.5;
    final halfH = height * 0.5;

    // Calculate skewed polygon vertices
    final tanSkew = math.tan(skewAngleRad);
    final p0 = Point2D(-halfW + halfH * tanSkew + cutCornerSize, -halfH);
    final p1 = Point2D(halfW + halfH * tanSkew, -halfH);
    final p2 = Point2D(halfW - halfH * tanSkew, halfH - cutCornerSize);
    final p3 = Point2D(halfW - halfH * tanSkew - cutCornerSize, halfH);
    final p4 = Point2D(-halfW - halfH * tanSkew, halfH);
    final p5 = Point2D(-halfW + halfH * tanSkew, -halfH + cutCornerSize);

    if (shadow) {
      ctx.save();
      ctx.fillStyle = P5Palette.shadowBlack.toJS;
      ctx.translate(6.0, 8.0);
      _drawPolygonPath([p0, p1, p2, p3, p4, p5]);
      ctx.fill();
      ctx.restore();
    }

    // Fill polygon
    ctx.fillStyle = fillColor.toJS;
    _drawPolygonPath([p0, p1, p2, p3, p4, p5]);
    ctx.fill();

    // Border stroke
    if (borderColor != null && borderWidth > 0) {
      ctx.strokeStyle = borderColor.toJS;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }

    ctx.restore();
  }

  /// Draws high-energy comic speedlines radiating or streaking in a rect.
  void drawSpeedlines({
    required double x,
    required double y,
    required double width,
    required double height,
    double angleRad = -0.15,
    int lineCount = 8,
    String color = 'rgba(211, 47, 47, 0.25)',
  }) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angleRad);
    ctx.strokeStyle = color.toJS;
    ctx.lineWidth = 1.5;

    final random = math.Random(42);
    for (int i = 0; i < lineCount; i++) {
      final ly = -height * 0.5 + (height / lineCount) * i + (random.nextDouble() - 0.5) * 8.0;
      final lx1 = -width * 0.5 + (random.nextDouble() * 30.0);
      final lx2 = width * 0.5 - (random.nextDouble() * 30.0);
      ctx.beginPath();
      ctx.moveTo(lx1, ly);
      ctx.lineTo(lx2, ly);
      ctx.stroke();
    }
    ctx.restore();
  }

  /// Draws decorative ink splatter dots for an authentic paintbrush feel.
  void drawPaintSplatter({
    required double x,
    required double y,
    required double radius,
    required String color,
    int count = 6,
    int seed = 17,
  }) {
    ctx.save();
    ctx.fillStyle = color.toJS;
    final rand = math.Random(seed);
    for (int i = 0; i < count; i++) {
      final angle = rand.nextDouble() * math.pi * 2.0;
      final dist = rand.nextDouble() * radius;
      final dotR = 1.0 + rand.nextDouble() * 2.5;
      final dx = x + math.cos(angle) * dist;
      final dy = y + math.sin(angle) * dist;
      ctx.beginPath();
      ctx.arc(dx, dy, dotR, 0, math.pi * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  /// Draws a stylized tilted rhombus badge containing a number or icon.
  void drawNumberedBadge({
    required int number,
    required double x,
    required double y,
    required double size,
    bool isSelected = false,
  }) {
    ctx.save();
    ctx.translate(x, y);

    // Drop shadow
    ctx.fillStyle = P5Palette.shadowBlack.toJS;
    _drawDiamondPath(3.0, 3.0, size);
    ctx.fill();

    // Background
    ctx.fillStyle = (isSelected ? P5Palette.crimsonRed : P5Palette.inkBlack).toJS;
    _drawDiamondPath(0, 0, size);
    ctx.fill();

    // Border
    ctx.strokeStyle = (isSelected ? P5Palette.boneWhite : P5Palette.amberGold).toJS;
    ctx.lineWidth = isSelected ? 2.5 : 1.5;
    ctx.stroke();

    // Text label
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold ${size * 0.55}px "Cinzel", "Courier New", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('$number', 0, 1.0);

    ctx.restore();
  }

  // =========================================================================
  // 2. IN-GAME RETICLE & INTERACTION PROMPT
  // =========================================================================

  /// Draws dynamic in-game crosshair reticle with Persona 5 rotation and pulsing.
  void drawReticle({
    required double screenWidth,
    required double screenHeight,
    required bool isHoveringInteractable,
  }) {
    final cx = screenWidth * 0.5;
    final cy = screenHeight * 0.5;

    ctx.save();
    ctx.translate(cx, cy);

    if (isHoveringInteractable) {
      // Expanded rotating active reticle
      final pulse = 1.0 + math.sin(_animationTime * 8.0) * 0.08;
      final rot = _animationTime * 1.5;
      final size = 22.0 * pulse;

      // Shadow
      ctx.strokeStyle = P5Palette.shadowBlack.toJS;
      ctx.lineWidth = 3.5;
      ctx.save();
      ctx.rotate(rot + math.pi * 0.25);
      ctx.strokeRect(-size * 0.5, -size * 0.5, size, size);
      ctx.restore();

      // Active Diamond
      ctx.strokeStyle = P5Palette.amberGold.toJS;
      ctx.lineWidth = 2.0;
      ctx.save();
      ctx.rotate(rot + math.pi * 0.25);
      ctx.strokeRect(-size * 0.5, -size * 0.5, size, size);
      ctx.restore();

      // Center dot
      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, math.pi * 2);
      ctx.fill();
    } else {
      // Subtle glowing center dot with drop shadow
      ctx.fillStyle = P5Palette.shadowBlack.toJS;
      ctx.beginPath();
      ctx.arc(1.0, 1.0, 3.0, 0, math.pi * 2);
      ctx.fill();

      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, math.pi * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  /// Draws the in-game interaction prompt banner at the bottom center.
  void drawPromptBanner({
    required double screenWidth,
    required double screenHeight,
    required String? promptText,
  }) {
    if (promptText == null || promptText.isEmpty) return;

    final cx = screenWidth * 0.5;
    final cy = screenHeight * 0.86;

    ctx.save();

    // Measure text
    ctx.font = 'bold 15px "Cinzel", serif';
    final textWidth = ctx.measureText(promptText.toUpperCase()).width.toDouble();
    final panelW = math.max(220.0, textWidth + 70.0);
    final panelH = 38.0;

    // Draw comic-cut skewed banner
    drawBrushPanel(
      x: cx,
      y: cy,
      width: panelW,
      height: panelH,
      skewAngleRad: -0.07,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.amberGold,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    // Red action tag accent on the left
    ctx.save();
    ctx.translate(cx - panelW * 0.5 + 24.0, cy);
    ctx.rotate(-0.07);
    ctx.fillStyle = P5Palette.crimsonRed.toJS;
    ctx.fillRect(-12.0, -12.0, 24.0, 24.0);
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 11px "Cinzel", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('E', 0, 1.0);
    ctx.restore();

    // Text
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 14px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText(promptText.toUpperCase(), cx + 12.0, cy);

    ctx.restore();
  }

  // =========================================================================
  // 3. PERSONA 5 DIALOGUE & NUMBERED CHOICES (1-N)
  // =========================================================================

  /// Draws full gameplay-based Persona 5 dialogue box and numbered choice strips.
  void drawDialogueAndChoices({
    required double screenWidth,
    required double screenHeight,
    required P5DialogueState state,
  }) {
    if (!state.isVisitorPresent && state.fullText.isEmpty && state.choices.isEmpty) {
      return;
    }

    final boxW = math.min(screenWidth * 0.85, 780.0);
    final boxH = 140.0;
    final boxX = screenWidth * 0.5;
    final boxY = screenHeight * 0.72;

    // 1. Draw Main Speech Bubble / Dialogue Container
    drawBrushPanel(
      x: boxX,
      y: boxY,
      width: boxW,
      height: boxH,
      skewAngleRad: -0.05,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.5,
      cutCornerSize: 16.0,
    );

    // 2. Speaker Nameplate (Tilted Red Badge)
    final speaker = state.speakerName ?? 'VISITOR';
    final speakerBadgeW = 180.0;
    final speakerBadgeH = 34.0;
    final speakerX = boxX - boxW * 0.5 + speakerBadgeW * 0.45;
    final speakerY = boxY - boxH * 0.5 - 6.0;

    drawBrushPanel(
      x: speakerX,
      y: speakerY,
      width: speakerBadgeW,
      height: speakerBadgeH,
      skewAngleRad: -0.12,
      fillColor: P5Palette.crimsonRed,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.0,
      shadow: true,
      cutCornerSize: 6.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 15px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText(speaker.toUpperCase(), speakerX, speakerY);
    ctx.restore();

    // 3. Dialogue Text Body (Typewriter text)
    final revealed = state.revealedText;
    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = '16px "Georgia", serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    final textMarginLeft = boxX - boxW * 0.5 + 32.0;
    final textMarginTop = boxY - boxH * 0.5 + 32.0;
    final maxLineWidth = boxW - 64.0;

    _wrapText(ctx, revealed, textMarginLeft, textMarginTop, maxLineWidth, 24.0);
    ctx.restore();

    // 4. Numbered Choices [1]..[N] Rendered Above Dialogue Box
    if (state.choices.isNotEmpty) {
      final choiceCount = state.choices.length;
      final choiceStripW = math.min(screenWidth * 0.75, 480.0);
      final choiceStripH = 38.0;
      final spacing = 46.0;
      final totalChoicesH = choiceCount * spacing;
      final choicesStartY = boxY - boxH * 0.5 - totalChoicesH - 12.0;

      for (int i = 0; i < choiceCount; i++) {
        final choiceText = state.choices[i];
        final numKey = i + 1;
        final choiceY = choicesStartY + i * spacing + choiceStripH * 0.5;
        final isHovered = state.hoveredIndex == i;
        final isSelected = state.selectedIndex == i;

        // Slide out effect when hovered/selected
        final offsetX = (isHovered || isSelected) ? 18.0 : 0.0;
        final curX = boxX + offsetX;

        // Record hit box for mouse selection
        _currentChoiceHitBoxes.add(
          CanvasHitBox(
            id: 'choice-$numKey',
            index: i,
            left: curX - choiceStripW * 0.5,
            top: choiceY - choiceStripH * 0.5,
            width: choiceStripW,
            height: choiceStripH,
            text: choiceText,
          ),
        );

        // Choice strip
        drawBrushPanel(
          x: curX,
          y: choiceY,
          width: choiceStripW,
          height: choiceStripH,
          skewAngleRad: -0.06,
          fillColor: isSelected
              ? P5Palette.crimsonRed
              : (isHovered ? P5Palette.charcoalDark : P5Palette.inkBlackTranslucent),
          borderColor: (isHovered || isSelected) ? P5Palette.amberGold : P5Palette.boneWhite,
          borderWidth: (isHovered || isSelected) ? 2.5 : 1.5,
          cutCornerSize: 8.0,
        );

        // Number Badge [1]..[N]
        final badgeSize = 24.0;
        final badgeX = curX - choiceStripW * 0.5 + 24.0;
        drawNumberedBadge(
          number: numKey,
          x: badgeX,
          y: choiceY,
          size: badgeSize,
          isSelected: isSelected || isHovered,
        );

        // Choice text
        ctx.save();
        ctx.fillStyle = ((isSelected || isHovered) ? P5Palette.brightAmber : P5Palette.boneWhite).toJS;
        ctx.font = 'bold 15px "Cinzel", serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(choiceText, badgeX + 22.0, choiceY);
        ctx.restore();
      }
    }
  }

  // =========================================================================
  // 4. HUD ELEMENTS (CLOCK, OBJECTIVE TICKER, ROOM BADGE)
  // =========================================================================

  /// Draws in-game gameplay HUD elements with Persona 5 styling.
  void drawHUD({
    required double screenWidth,
    required double screenHeight,
    required int currentDay,
    required int currentHour,
    required String currentRoomName,
    required String? objectiveText,
  }) {
    // 1. Day / Clock Badge in Top-Right
    final clockW = 160.0;
    final clockH = 44.0;
    final clockX = screenWidth - clockW * 0.5 - 24.0;
    final clockY = clockH * 0.5 + 20.0;

    drawBrushPanel(
      x: clockX,
      y: clockY,
      width: clockW,
      height: clockH,
      skewAngleRad: -0.08,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.crimsonRed,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 14px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    final timeStr = 'DAY $currentDay  •  ${currentHour.toString().padLeft(2, '0')}:00';
    ctx.fillText(timeStr, clockX, clockY);
    ctx.restore();

    // 2. Room Name Badge in Top-Left
    final roomW = 170.0;
    final roomH = 34.0;
    final roomX = roomW * 0.5 + 24.0;
    final roomY = roomH * 0.5 + 20.0;

    drawBrushPanel(
      x: roomX,
      y: roomY,
      width: roomW,
      height: roomH,
      skewAngleRad: 0.08,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.amberGold,
      borderWidth: 1.8,
      cutCornerSize: 6.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.amberGold.toJS;
    ctx.font = 'bold 13px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(currentRoomName.toUpperCase(), roomX, roomY);
    ctx.restore();

    // 3. Objective Banner if present
    if (objectiveText != null && objectiveText.isNotEmpty) {
      final objW = math.min(screenWidth * 0.6, 420.0);
      final objH = 32.0;
      final objX = screenWidth * 0.5;
      final objY = objH * 0.5 + 20.0;

      drawBrushPanel(
        x: objX,
        y: objY,
        width: objW,
        height: objH,
        skewAngleRad: -0.04,
        fillColor: P5Palette.inkBlackTranslucent,
        borderColor: P5Palette.boneWhite,
        borderWidth: 1.5,
        cutCornerSize: 6.0,
      );

      ctx.save();
      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.font = '13px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(objectiveText, objX, objY);
      ctx.restore();
    }
  }

  // =========================================================================
  // 5. CAPSLOCK SHADER TUNING LAB & POST-PROCESSING MENU
  // =========================================================================

  /// Draws the CapsLock-activated special Shader Tuning Lab & Post-Processing Menu.
  void drawShaderTuningMenu({
    required double screenWidth,
    required double screenHeight,
    required ShaderTuningState state,
  }) {
    if (state.menuAnimProgress <= 0.001) return;

    final progress = state.menuAnimProgress;
    final easeProgress = math.sin(progress * math.pi * 0.5);

    final boxW = math.min(screenWidth * 0.92, 860.0);
    final boxH = math.min(screenHeight * 0.88, 620.0);
    final finalX = screenWidth * 0.5;
    final startX = screenWidth + boxW * 0.6;
    final curX = startX + (finalX - startX) * easeProgress;
    final curY = screenHeight * 0.5;

    ctx.save();

    // 1. Semi-transparent backdrop overlay
    ctx.fillStyle = 'rgba(10, 8, 12, ${0.75 * easeProgress})'.toJS;
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    // 2. Main Menu Container
    drawBrushPanel(
      x: curX,
      y: curY,
      width: boxW,
      height: boxH,
      skewAngleRad: -0.025,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.crimsonRed,
      borderWidth: 3.0,
      cutCornerSize: 18.0,
    );

    // Decorative Speedlines in background of menu
    drawSpeedlines(
      x: curX,
      y: curY,
      width: boxW - 40.0,
      height: boxH - 40.0,
      angleRad: -0.05,
      lineCount: 6,
      color: 'rgba(211, 47, 47, 0.15)',
    );

    // 3. Header Banner
    final headerW = math.min(boxW * 0.85, 560.0);
    final headerH = 42.0;
    final headerY = curY - boxH * 0.5 + 30.0;
    drawBrushPanel(
      x: curX,
      y: headerY,
      width: headerW,
      height: headerH,
      skewAngleRad: -0.06,
      fillColor: P5Palette.crimsonRed,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 16px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText('◆ SHADER LAB & POST-PROCESSING SUITE ◆', curX, headerY);
    ctx.restore();

    // 4. Category Tab Bar [1]..[5]
    final categories = ShaderTuningCategory.values;
    final tabCount = categories.length;
    final tabW = (boxW - 60.0) / tabCount;
    final tabH = 34.0;
    final tabY = curY - boxH * 0.5 + 75.0;

    for (int i = 0; i < tabCount; i++) {
      final cat = categories[i];
      final isSelected = state.selectedCategoryIndex == i;
      final tabX = curX - (boxW - 60.0) * 0.5 + tabW * (i + 0.5);

      drawBrushPanel(
        x: tabX,
        y: tabY,
        width: tabW - 8.0,
        height: tabH,
        skewAngleRad: -0.03,
        fillColor: isSelected ? P5Palette.amberGold : P5Palette.charcoalDark,
        borderColor: isSelected ? P5Palette.boneWhite : P5Palette.mutedGrey,
        borderWidth: isSelected ? 2.0 : 1.0,
        cutCornerSize: 6.0,
        shadow: false,
      );

      final label = switch (cat) {
        ShaderTuningCategory.pbrMaterial => '[1] PBR BRDF',
        ShaderTuningCategory.shadowsAndOcclusion => '[2] SHADOWS',
        ShaderTuningCategory.surfaceWeathering => '[3] DETAIL',
        ShaderTuningCategory.atmosphereAndPost => '[4] POST / FOG',
        ShaderTuningCategory.debugView => '[5] PASSES',
      };

      ctx.save();
      ctx.fillStyle = (isSelected ? P5Palette.inkBlack : P5Palette.boneWhite).toJS;
      ctx.font = 'bold 12px "Cinzel", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, tabX, tabY);
      ctx.restore();
    }

    // 5. Active Category Content Area
    final contentTopY = tabY + 36.0;

    if (state.selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      final diagCardW = boxW - 80.0;
      final diagCardH = 140.0;
      final diagCardY = contentTopY + diagCardH * 0.5 + 20.0;

      drawBrushPanel(
        x: curX,
        y: diagCardY,
        width: diagCardW,
        height: diagCardH,
        skewAngleRad: -0.02,
        fillColor: P5Palette.charcoalDark,
        borderColor: P5Palette.amberGold,
        borderWidth: 2.5,
        cutCornerSize: 10.0,
      );

      ctx.save();
      ctx.fillStyle = P5Palette.amberGold.toJS;
      ctx.font = 'bold 14px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [← / →] TO CYCLE):', curX, diagCardY - 35.0);

      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.font = 'bold 22px "Cinzel", serif';
      ctx.shadowColor = P5Palette.shadowBlack;
      ctx.shadowBlur = 6.0;
      ctx.fillText(state.debugMode.displayName.toUpperCase(), curX, diagCardY + 5.0);

      ctx.fillStyle = P5Palette.brightAmber.toJS;
      ctx.font = '13px "Georgia", serif';
      ctx.shadowBlur = 0.0;
      ctx.fillText('Press [A / ←] Prev Pass  •  [D / →] Next Pass  •  [R] Disable Diagnostics', curX, diagCardY + 42.0);
      ctx.restore();
    } else {
      final items = state.itemsInCurrentCategory;
      final itemH = 44.0;
      final spacing = 52.0;

      for (int i = 0; i < items.length; i++) {
        final item = items[i];
        final isSelected = state.selectedItemIndex == i;
        final itemY = contentTopY + i * spacing + itemH * 0.5;
        final itemW = boxW - 80.0;

        final itemX = curX + (isSelected ? 12.0 : 0.0);
        drawBrushPanel(
          x: itemX,
          y: itemY,
          width: itemW,
          height: itemH,
          skewAngleRad: -0.02,
          fillColor: isSelected ? P5Palette.charcoalDark : P5Palette.inkBlackTranslucent,
          borderColor: isSelected ? P5Palette.amberGold : P5Palette.mutedGrey,
          borderWidth: isSelected ? 2.2 : 1.0,
          cutCornerSize: 6.0,
          shadow: isSelected,
        );

        if (isSelected) {
          drawNumberedBadge(
            number: i + 1,
            x: itemX - itemW * 0.5 + 20.0,
            y: itemY,
            size: 20.0,
            isSelected: true,
          );
        }

        ctx.save();
        ctx.fillStyle = (isSelected ? P5Palette.brightAmber : P5Palette.boneWhite).toJS;
        ctx.font = 'bold 14px "Cinzel", serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        final labelOffset = isSelected ? 38.0 : 18.0;
        ctx.fillText(item.label.toUpperCase(), itemX - itemW * 0.5 + labelOffset, itemY);

        final controlRightX = itemX + itemW * 0.5 - 20.0;
        if (item.isToggle) {
          final isToggledOn = item.boolValue;
          final badgeW = 74.0;
          final badgeH = 24.0;
          drawBrushPanel(
            x: controlRightX - badgeW * 0.5,
            y: itemY,
            width: badgeW,
            height: badgeH,
            skewAngleRad: -0.04,
            fillColor: isToggledOn ? P5Palette.crimsonRed : P5Palette.inkBlack,
            borderColor: isToggledOn ? P5Palette.boneWhite : P5Palette.mutedGrey,
            borderWidth: 1.5,
            shadow: false,
          );

          ctx.fillStyle = P5Palette.boneWhite.toJS;
          ctx.font = 'bold 12px "Cinzel", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.formattedValue, controlRightX - badgeW * 0.5, itemY);
        } else {
          final sliderW = 160.0;
          final sliderH = 8.0;
          final sliderX = controlRightX - 80.0 - sliderW * 0.5;

          ctx.fillStyle = P5Palette.inkBlack.toJS;
          ctx.fillRect(sliderX - sliderW * 0.5, itemY - sliderH * 0.5, sliderW, sliderH);

          final frac = ((item.currentValue - item.min) / (item.max - item.min)).clamp(0.0, 1.0);
          ctx.fillStyle = (isSelected ? P5Palette.amberGold : P5Palette.crimsonRed).toJS;
          ctx.fillRect(sliderX - sliderW * 0.5, itemY - sliderH * 0.5, sliderW * frac, sliderH);

          ctx.fillStyle = P5Palette.boneWhite.toJS;
          ctx.fillRect(sliderX - sliderW * 0.5 + sliderW * frac - 3.0, itemY - 7.0, 6.0, 14.0);

          ctx.fillStyle = (isSelected ? P5Palette.brightAmber : P5Palette.boneWhite).toJS;
          ctx.font = 'bold 13px "Courier New", monospace';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.formattedValue, controlRightX, itemY);
        }
        ctx.restore();
      }
    }

    // 6. Footer Navigation Instructions
    final footerY = curY + boxH * 0.5 - 24.0;
    ctx.save();
    ctx.fillStyle = P5Palette.mutedGrey.toJS;
    ctx.font = '12px "Cinzel", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      '[W / S / ↑ / ↓] Navigate  •  [A / D / ← / →] Adjust / Toggle  •  [1 - 5] Tabs  •  [R] Reset  •  [CAPS LOCK / ESC] Close',
      curX,
      footerY,
    );
    ctx.restore();

    ctx.restore();
  }

  // =========================================================================
  // INTERNAL DRAWING HELPERS
  // =========================================================================

  void _drawPolygonPath(List<Point2D> points) {
    if (points.isEmpty) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (int i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
  }

  void _drawDiamondPath(double ox, double oy, double size) {
    final half = size * 0.5;
    ctx.beginPath();
    ctx.moveTo(ox, oy - half);
    ctx.lineTo(ox + half * 1.15, oy);
    ctx.lineTo(ox, oy + half);
    ctx.lineTo(ox - half * 1.15, oy);
    ctx.closePath();
  }

  void _wrapText(
    web.CanvasRenderingContext2D context,
    String text,
    double x,
    double y,
    double maxWidth,
    double lineHeight,
  ) {
    final words = text.split(' ');
    var line = '';
    var currentY = y;

    for (int n = 0; n < words.length; n++) {
      final testLine = line.isEmpty ? words[n] : '$line ${words[n]}';
      final metrics = context.measureText(testLine);
      final testWidth = metrics.width.toDouble();
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, currentY);
        line = words[n];
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, currentY);
  }
}
