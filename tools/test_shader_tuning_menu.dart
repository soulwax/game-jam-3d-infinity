import 'package:quarantine/presentation/shader_tuning_state.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — CAPSLOCK SHADER TUNING & LAB MENU TEST SUITE');
  print('========================================================================');

  final state = ShaderTuningState();

  // 1. Verify Initial State & Category Items
  print('Testing ShaderTuningState initialization...');
  if (state.isOpen || state.menuAnimProgress != 0.0) {
    throw StateError('Shader menu must initially be closed with animProgress = 0.0');
  }
  if (state.items.length < 10) {
    throw StateError('Expected at least 10 tuning items across categories, got ${state.items.length}');
  }
  print('✓ State initialized with ${state.items.length} live-adjustable shader parameters');

  // 2. Test Open/Close & Animation Progress
  print('Testing Menu Toggle & Animation Progress...');
  state.toggle();
  if (!state.isOpen) {
    throw StateError('Menu must be open after toggle()');
  }
  state.update(0.1);
  if (state.menuAnimProgress <= 0.0 || state.menuAnimProgress > 1.0) {
    throw StateError('menuAnimProgress out of bounds after opening update: ${state.menuAnimProgress}');
  }
  state.update(2.0);
  if (state.menuAnimProgress != 1.0) {
    throw StateError('menuAnimProgress must clamp to 1.0');
  }

  // 3. Test Category Selection & Navigation
  print('Testing Category Navigation...');
  state.selectCategory(ShaderTuningCategory.pbrMaterial.index);
  if (state.selectedCategoryIndex != 0) {
    throw StateError('Expected category index 0 for PBR');
  }
  final pbrItems = state.itemsInCurrentCategory;
  if (pbrItems.isEmpty) {
    throw StateError('PBR category must not be empty');
  }

  state.nextCategory();
  if (state.selectedCategoryIndex != 1) {
    throw StateError('Expected category index 1 for Shadows');
  }
  state.previousCategory();
  if (state.selectedCategoryIndex != 0) {
    throw StateError('Expected category index 0 after previousCategory()');
  }

  // 4. Test Live Value Tuning & Clamping
  print('Testing Parameter Increments, Decrements, and Clamps...');
  state.selectCategory(ShaderTuningCategory.pbrMaterial.index);
  final roughnessItem = state.itemsInCurrentCategory.firstWhere((i) => i.id == 'pbr_roughness');
  final originalRoughness = roughnessItem.currentValue;

  state.selectedItemIndex = state.itemsInCurrentCategory.indexOf(roughnessItem);
  state.incrementCurrent();
  if (roughnessItem.currentValue <= originalRoughness) {
    throw StateError('Increment failed: value was $originalRoughness, now ${roughnessItem.currentValue}');
  }
  state.decrementCurrent();
  if ((roughnessItem.currentValue - originalRoughness).abs() > 1e-4) {
    throw StateError('Decrement failed to restore original value: ${roughnessItem.currentValue}');
  }

  // Test clamp at upper bound
  for (var i = 0; i < 50; i++) {
    state.incrementCurrent();
  }
  if (roughnessItem.currentValue > roughnessItem.max) {
    throw StateError('Value exceeded max bound (${roughnessItem.max}): ${roughnessItem.currentValue}');
  }

  // 5. Test Boolean Toggle Tuning
  print('Testing Boolean Toggle Parameters...');
  state.selectCategory(ShaderTuningCategory.shadowsAndOcclusion.index);
  final ssdoItem = state.itemsInCurrentCategory.firstWhere((i) => i.id == 'shadow_ssdo_enable');
  if (!ssdoItem.boolValue) {
    throw StateError('SSDO toggle default must be true');
  }
  state.selectedItemIndex = state.itemsInCurrentCategory.indexOf(ssdoItem);
  state.incrementCurrent(); // Should toggle to false
  if (ssdoItem.boolValue != false) {
    throw StateError('Toggle failed to flip boolean to false');
  }

  // 6. Test Category & Global Reset
  print('Testing Reset Actions...');
  state.resetCurrentCategory();
  if (!ssdoItem.boolValue) {
    throw StateError('resetCurrentCategory() failed to restore SSDO toggle to default');
  }

  // 7. Test Diagnostic Pass Cycling
  print('Testing Diagnostic Pass Cycling...');
  state.selectCategory(ShaderTuningCategory.debugView.index);
  if (state.debugMode != ShaderDebugMode.none) {
    throw StateError('Initial debug mode must be none');
  }
  state.incrementCurrent();
  if (state.debugMode != ShaderDebugMode.albedoOnly) {
    throw StateError('First diagnostic pass must be albedoOnly, got ${state.debugMode}');
  }
  state.incrementCurrent();
  if (state.debugMode != ShaderDebugMode.normalsOnly) {
    throw StateError('Second diagnostic pass must be normalsOnly, got ${state.debugMode}');
  }
  state.resetCurrentCategory();
  if (state.debugMode != ShaderDebugMode.none) {
    throw StateError('Reset must disable diagnostic debug mode');
  }

  print('========================================================================');
  print('✓ CAPSLOCK SHADER TUNING & LAB MENU CERTIFIED (7/7 SUB-SYSTEMS)');
  print('========================================================================');
}
