/// Browser-independent semantic contract for the pause-root actions.
enum PauseRootAction { resume, settings, controls, save, help, back }

class PauseRootContract {
  static const actionIds = <PauseRootAction, String>{
    PauseRootAction.resume: 'pause.resume',
    PauseRootAction.settings: 'pause.settings',
    PauseRootAction.controls: 'pause.controls',
    PauseRootAction.save: 'pause.save',
    PauseRootAction.help: 'pause.help',
    PauseRootAction.back: 'pause.back',
  };

  const PauseRootContract._();
}
