import 'package:quarantine/house/inventory.dart';

import 'model_package_registry.dart';
import 'presentation_inventory_adapter.dart';

/// Host callback that creates the renderer-owned binding for one placement.
/// The game supplies authored placement facts; the callback owns GPU handles.
typedef PresentationBindingFactory = Object Function(
  PresentationInventoryResolution resolution,
);

final class PresentationPackageBindingAdapter {
  final PresentationInventoryAdapter inventoryAdapter;
  final Map<String, Object> _bindings = {};

  PresentationPackageBindingAdapter(PresentationModelPackageRegistry registry)
    : inventoryAdapter = PresentationInventoryAdapter(registry);

  int get count => _bindings.length;

  void attach(
    HouseInventory inventory,
    InventoryPlacement placement,
    PresentationBindingFactory create,
  ) {
    if (_bindings.containsKey(placement.id)) {
      throw StateError('presentation placement is already bound: ${placement.id}');
    }
    final resolution = inventoryAdapter.resolve(inventory, placement);
    _bindings[placement.id] = create(resolution);
  }

  Object bindingFor(String placementId) =>
      _bindings[placementId] ??
      (throw StateError('presentation placement is not bound: $placementId'));

  void detach(String placementId) {
    if (_bindings.remove(placementId) == null) {
      throw StateError('presentation placement is not bound: $placementId');
    }
  }

  void dispose() => _bindings.clear();
}
