(async () => {
  const app = './app/';
  if ((WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))) {
    try {
      const m = await import(app + 'main.5cb98156.mjs');
      const compiled = await m.compileStreaming(fetch(app + 'main.aa9e54f1.wasm'));
      (await compiled.instantiate({})).invokeMain();
      return;
    } catch (e) {
      console.warn('wasm boot failed, falling back to dart2js', e);
    }
  }
  const s = document.createElement('script');
  s.src = app + 'main.443874d7.js';
  document.body.appendChild(s);
})();
