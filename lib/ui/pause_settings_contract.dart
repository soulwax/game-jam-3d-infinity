/// Browser-independent category contract for the settings index.
enum PauseSettingsCategory {
  visual,
  graphics,
  gameplay,
  controls,
  audio,
  accessibility,
}

class PauseSettingsContract {
  static const labels = <PauseSettingsCategory, String>{
    PauseSettingsCategory.visual: 'visual',
    PauseSettingsCategory.graphics: 'graphics',
    PauseSettingsCategory.gameplay: 'gameplay',
    PauseSettingsCategory.controls: 'controls',
    PauseSettingsCategory.audio: 'audio',
    PauseSettingsCategory.accessibility: 'accessibility',
  };

  static const ids = <PauseSettingsCategory, String>{
    PauseSettingsCategory.visual: 'settings.visual',
    PauseSettingsCategory.graphics: 'settings.graphics',
    PauseSettingsCategory.gameplay: 'settings.gameplay',
    PauseSettingsCategory.controls: 'settings.controls',
    PauseSettingsCategory.audio: 'settings.audio',
    PauseSettingsCategory.accessibility: 'settings.accessibility',
  };

  const PauseSettingsContract._();
}
