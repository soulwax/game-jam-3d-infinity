import 'dart:async';

/// Status of a setting apply transaction.
enum SettingsApplyStatus {
  applied,
  pendingConfirmation,
  reverted,
  failed,
}

/// Change risk classification for settings.
enum SettingsChangeType {
  live,            // Applies immediately (e.g. audio volume, reticle style)
  staged,          // Applies on modal exit / commit (e.g. gameplay pacing)
  displayRisk,     // Requires 15s confirmation & rollback (e.g. render scale, resolution)
  restartRequired, // Requires app restart indicator (e.g. backend selection)
}

/// Coordinator handling setting updates, confirmation timers, and last-known-good rollback.
class SettingsApplyCoordinator<T> {
  final T Function() getCurrentProfile;
  final Future<bool> Function(T profile) applyProfile;
  final void Function(T profile)? onReverted;

  T _lastKnownGood;
  T? _pendingProfile;
  SettingsApplyStatus _status = SettingsApplyStatus.applied;
  Timer? _confirmationTimer;
  int _remainingSeconds = 0;

  SettingsApplyCoordinator({
    required this.getCurrentProfile,
    required this.applyProfile,
    this.onReverted,
  }) : _lastKnownGood = getCurrentProfile();

  T get lastKnownGood => _lastKnownGood;
  T? get pendingProfile => _pendingProfile;
  SettingsApplyStatus get status => _status;
  bool get isConfirmationPending => _status == SettingsApplyStatus.pendingConfirmation;
  int get remainingSeconds => _remainingSeconds;

  /// Submits candidate changes for application.
  Future<SettingsApplyStatus> requestApply(
    T newProfile, {
    required SettingsChangeType changeType,
    int confirmationTimeoutSeconds = 15,
  }) async {
    _cancelTimer();
    final snapshotBefore = getCurrentProfile();

    try {
      final success = await applyProfile(newProfile);
      if (!success) {
        _status = SettingsApplyStatus.failed;
        await _restoreProfile(snapshotBefore);
        return SettingsApplyStatus.failed;
      }

      if (changeType == SettingsChangeType.displayRisk) {
        _pendingProfile = newProfile;
        _lastKnownGood = snapshotBefore;
        _status = SettingsApplyStatus.pendingConfirmation;
        _remainingSeconds = confirmationTimeoutSeconds;
        _startTimer(confirmationTimeoutSeconds);
        return SettingsApplyStatus.pendingConfirmation;
      } else {
        _lastKnownGood = newProfile;
        _pendingProfile = null;
        _status = SettingsApplyStatus.applied;
        return SettingsApplyStatus.applied;
      }
    } catch (e) {
      _status = SettingsApplyStatus.failed;
      await _restoreProfile(snapshotBefore);
      return SettingsApplyStatus.failed;
    }
  }

  /// User confirms the applied display-risk profile.
  void confirmPending() {
    final pending = _pendingProfile;
    if (!isConfirmationPending || pending == null) return;
    _cancelTimer();
    _lastKnownGood = pending;
    _pendingProfile = null;
    _status = SettingsApplyStatus.applied;
  }

  /// User or timer triggers revert to last-known-good profile.
  Future<void> revertToLastKnownGood() async {
    _cancelTimer();
    final target = _lastKnownGood;
    _pendingProfile = null;
    await _restoreProfile(target);
    _status = SettingsApplyStatus.reverted;
  }

  Future<void> tickConfirmationTimer() async {
    if (!isConfirmationPending) return;
    if (_remainingSeconds > 1) {
      _remainingSeconds--;
    } else {
      await revertToLastKnownGood();
    }
  }

  Future<void> _restoreProfile(T profile) async {
    try {
      await applyProfile(profile);
    } catch (_) {}
    onReverted?.call(profile);
  }

  void _startTimer(int seconds) {
    _confirmationTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      tickConfirmationTimer();
    });
  }

  void _cancelTimer() {
    _confirmationTimer?.cancel();
    _confirmationTimer = null;
  }

  void dispose() {
    _cancelTimer();
  }
}
