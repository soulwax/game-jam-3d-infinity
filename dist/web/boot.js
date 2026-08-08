(async () => {
  const app = './app/';
  if ((WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))) {
    try {
      const m = await import(app + 'main.014f0eb1.mjs');
      const compiled = await m.compileStreaming(fetch(app + 'main.a83d271c.wasm'));
      (await compiled.instantiate({})).invokeMain();
      return;
    } catch (e) {
      console.warn('wasm boot failed, falling back to dart2js', e);
    }
  }
  const s = document.createElement('script');
  s.src = app + 'main.6825f40b.js';
  document.body.appendChild(s);
})();
