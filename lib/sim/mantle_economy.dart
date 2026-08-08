enum MantleActionReason { lit, alreadyLit, insufficientHours, insufficientGas }

class MantleAction {
  final String mantleId;
  final MantleActionReason reason;
  final int hoursRemaining;
  final int gasRemaining;

  const MantleAction({
    required this.mantleId,
    required this.reason,
    required this.hoursRemaining,
    required this.gasRemaining,
  });

  bool get accepted => reason == MantleActionReason.lit;

  String get eventKind =>
      accepted ? 'mantle.lit' : 'mantle.refused.${reason.name}';
}

/// Atomic hour/gas/light transactions for authored mantle IDs.
class MantleEconomy {
  int _hours;
  int _gas;
  final Set<String> _lit = {};

  MantleEconomy({required int hours, required int gas})
    : _hours = hours,
      _gas = gas {
    if (hours < 0 || gas < 0) {
      throw ArgumentError('mantle resources must be non-negative');
    }
  }

  int get hours => _hours;
  int get gas => _gas;
  Set<String> get lit => Set.unmodifiable(_lit);

  MantleAction light(String mantleId, {int hourCost = 1, int gasCost = 1}) {
    if (mantleId.isEmpty || hourCost < 0 || gasCost < 0) {
      throw ArgumentError('mantle action arguments are invalid');
    }
    if (_lit.contains(mantleId)) {
      return _result(mantleId, MantleActionReason.alreadyLit);
    }
    if (_hours < hourCost) {
      return _result(mantleId, MantleActionReason.insufficientHours);
    }
    if (_gas < gasCost) {
      return _result(mantleId, MantleActionReason.insufficientGas);
    }
    _hours -= hourCost;
    _gas -= gasCost;
    _lit.add(mantleId);
    return _result(mantleId, MantleActionReason.lit);
  }

  MantleAction _result(String id, MantleActionReason reason) => MantleAction(
    mantleId: id,
    reason: reason,
    hoursRemaining: _hours,
    gasRemaining: _gas,
  );
}
