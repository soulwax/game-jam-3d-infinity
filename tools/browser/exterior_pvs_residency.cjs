'use strict';

function parseTextureBindings(raw, label) {
  if (!raw) throw new Error(`${label}: exterior texture bindings are missing`);
  const result = {};
  for (const entry of raw.split(',').filter(Boolean)) {
    const equals = entry.indexOf('=');
    if (equals <= 0) throw new Error(`${label}: invalid texture binding ${entry}`);
    const itemKey = entry.slice(0, equals);
    const payload = entry.slice(equals + 1);
    const separator = payload.lastIndexOf(':');
    if (separator <= 0) throw new Error(`${label}: invalid texture binding ${entry}`);
    const textureKey = payload.slice(0, separator);
    const handle = payload.slice(separator + 1);
    if (!textureKey || !/^\d+\.\d+$/.test(handle)) {
      throw new Error(`${label}: invalid texture handle ${entry}`);
    }
    if (result[itemKey]) throw new Error(`${label}: duplicate item ${itemKey}`);
    result[itemKey] = { textureKey, handle };
  }
  if (Object.keys(result).length === 0) {
    throw new Error(`${label}: no retained exterior draw bindings`);
  }
  return result;
}

function validateResidentTextureBindings(state, label) {
  const bindings = state.textureBindings || {};
  const itemKeys = Object.keys(bindings);
  const residentHandles = Object.fromEntries(
    String(state.textureResidencyHandles || '')
      .split(',')
      .filter(Boolean)
      .map((entry) => {
        const separator = entry.indexOf('=');
        return [entry.slice(0, separator), entry.slice(separator + 1)];
      }),
  );
  if (itemKeys.length !== state.items.submitted) {
    throw new Error(
      `${label}: binding count ${itemKeys.length} does not match submitted ` +
      `items ${state.items.submitted}`,
    );
  }
  for (const itemKey of itemKeys) {
    const binding = bindings[itemKey];
    if (state.textureResidency[binding.textureKey] !== 'resident') {
      throw new Error(
        `${label}: draw item ${itemKey} uses non-resident ` +
        `${binding.textureKey}: ${JSON.stringify(state)}`,
      );
    }
    if (residentHandles[binding.textureKey] !== binding.handle) {
      throw new Error(
        `${label}: draw item ${itemKey} handle ${binding.handle} does not ` +
        `match retained ${binding.textureKey} handle ` +
        `${residentHandles[binding.textureKey] || '<missing>'}`,
      );
    }
  }
  return true;
}

module.exports = { parseTextureBindings, validateResidentTextureBindings };
