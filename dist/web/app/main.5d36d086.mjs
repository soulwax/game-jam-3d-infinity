// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: Function.prototype.call.bind(DataView.prototype.getUint8),
      AC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AD: (x0,x1) => x0.deleteVertexArray(x1),
      AE: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      AF: x0 => x0.arrayBuffer(),
      AG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      AH: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      AI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AJ: () => globalThis.WebGL2RenderingContext.LESS,
      AK: () => globalThis.document,
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (x0,x1) => x0.cancelScheduledValues(x1),
      BD: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      BE: (x0,x1,x2) => { x0[x1] = x2 },
      BF: (x0,x1) => x0.decodeAudioData(x1),
      BG: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      BH: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      BI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BJ: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      CD: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      CE: (x0,x1) => x0.contains(x1),
      CF: (x0,x1) => x0.warn(x1),
      CG: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      CH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      CI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CJ: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: o => o.length,
      DC: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      DD: x0 => new Uint8Array(x0),
      DE: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      DF: x0 => x0.createConvolver(),
      DG: () => globalThis.WebGL2RenderingContext.LINEAR,
      DH: (x0,x1) => x0.checkFramebufferStatus(x1),
      DI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DJ: x0 => x0.drawingBufferHeight,
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      EC: x0 => x0.value,
      ED: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      EE: x0 => x0.focus(),
      EF: (x0,x1) => x0.disconnect(x1),
      EG: () => globalThis.WebGL2RenderingContext.NEAREST,
      EH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      EI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EJ: x0 => x0.drawingBufferWidth,
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: x0 => x0.currentTime,
      FD: Function.prototype.call.bind(DataView.prototype.setInt32),
      FE: x0 => x0.className,
      FF: (x0,x1) => x0.createChannelSplitter(x1),
      FG: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      FH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      FI: x0 => x0.display,
      FJ: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      GD: Function.prototype.call.bind(DataView.prototype.setUint32),
      GE: x0 => x0.activeElement,
      GF: (x0,x1) => x0.createChannelMerger(x1),
      GG: () => globalThis.WebGL2RenderingContext.RGBA8,
      GH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      GI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GJ: (x0,x1) => x0.clear(x1),
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (string, times) => string.repeat(times),
      HC: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      HD: Function.prototype.call.bind(DataView.prototype.setInt16),
      HE: (x0,x1) => x0.querySelectorAll(x1),
      HF: x0 => x0.destination,
      HG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      HH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      HI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: (d, digits) => d.toFixed(digits),
      IC: x0 => x0.listener,
      ID: Function.prototype.call.bind(DataView.prototype.setUint16),
      IE: (x0,x1) => x0.item(x1),
      IF: (o, t) => typeof o === t,
      IG: o => o instanceof Uint8ClampedArray,
      IH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      II: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      IJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (x0,x1) => x0.exec(x1),
      JC: (x0,x1) => x0.getItem(x1),
      JD: Function.prototype.call.bind(DataView.prototype.setUint8),
      JE: x0 => x0.length,
      JF: x0 => globalThis.Object.keys(x0),
      JG: x0 => x0.data,
      JH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      JI: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      JJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => x0.length,
      KC: (x0,x1,x2) => x0.setItem(x1,x2),
      KD: Function.prototype.call.bind(DataView.prototype.setInt8),
      KE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KF: (o, p) => o[p],
      KG: x0 => x0.naturalHeight,
      KH: () => globalThis.WebGL2RenderingContext.NONE,
      KI: () => typeof dartUseDateNowForTicks !== "undefined",
      KJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      L: o => o === undefined,
      LB: (x0,x1) => { x0.lastIndex = x1 },
      LC: (x0,x1) => x0.removeItem(x1),
      LD: (t, s) => t.set(s),
      LE: x0 => x0.preventDefault(),
      LF: x0 => x0.decode(),
      LG: x0 => x0.naturalWidth,
      LH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      LI: () => Date.now(),
      LJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      M: o => String(o),
      MB: o => o,
      MC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      MD: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      ME: x0 => x0.shiftKey,
      MF: (x0,x1) => x0.getContext(x1),
      MG: (x0,x1) => x0.createElement(x1),
      MH: (x0,x1) => x0.deleteQuery(x1),
      MI: () => 1000 * performance.now(),
      MJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      N: (x0,x1) => x0.getElementById(x1),
      NB: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      NC: x0 => x0.localStorage,
      ND: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      NE: x0 => x0.code,
      NF: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      NG: (x0,x1) => { x0.src = x1 },
      NH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NI: (x0,x1) => x0.endQuery(x1),
      NJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: o => o instanceof RegExp,
      OC: (s) => +s,
      OD: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      OE: x0 => x0.defaultPrevented,
      OF: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      OG: x0 => x0.deltaY,
      OH: x0 => x0.body,
      OI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      OJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      P: (x0,x1) => x0.matchMedia(x1),
      PB: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      PC: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      PD: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      PE: x0 => x0.getGamepads(),
      PF: (x0,x1) => x0.hasAttribute(x1),
      PG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PH: (a, s) => a.join(s),
      PI: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      PJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: x0 => x0.dotAll,
      QC: x0 => x0.getBoundingClientRect(),
      QD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      QE: x0 => x0.value,
      QF: (x0,x1,x2) => x0.bindTexture(x1,x2),
      QG: (x0,x1) => x0.appendChild(x1),
      QH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      QJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: x0 => x0.unicode,
      RC: x0 => x0.restore(),
      RD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      RE: x0 => x0.pressed,
      RF: (x0,x1) => x0.generateMipmap(x1),
      RG: x0 => x0.top,
      RH: (x0,x1) => { x0.disabled = x1 },
      RI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      RJ: x0 => x0.createQuery(),
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: x0 => x0.ignoreCase,
      SC: x0 => x0.save(),
      SD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      SE: x0 => x0.buttons,
      SF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      SG: x0 => x0.clientY,
      SH: (x0,x1) => { x0.type = x1 },
      SI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      SJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: x0 => x0.multiline,
      TC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      TD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      TE: x0 => x0.axes,
      TF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      TG: x0 => x0.left,
      TH: (x0,x1) => { x0.id = x1 },
      TI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      TJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      U: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UB: (string, token) => string.split(token),
      UC: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      UD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      UE: x0 => x0.id,
      UF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      UG: x0 => x0.clientX,
      UH: (x0,x1) => x0.removeChild(x1),
      UI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      UJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: o => o instanceof Array,
      VC: x0 => x0.beginPath(),
      VD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      VE: x0 => x0.mapping,
      VF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      VG: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      VH: x0 => x0.firstChild,
      VI: (x0,x1,x2) => x0.uniform1i(x1,x2),
      VJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: (a, i) => a[i],
      WC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      WD: (b, o) => new DataView(b, o),
      WE: x0 => x0.connected,
      WF: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      WG: x0 => x0.repeat,
      WH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WI: (x0,x1) => x0.activeTexture(x1),
      WJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: a => a.length,
      XC: x0 => x0.clip(),
      XD: (b, o, l) => new DataView(b, o, l),
      XE: x0 => x0.navigator,
      XF: () => globalThis.WebGL2RenderingContext.RGBA,
      XG: (x0,x1) => x0.getAttribute(x1),
      XH: x0 => x0.checked,
      XI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      XJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: x0 => x0.createBufferSource(),
      YC: (x0,x1) => x0.measureText(x1),
      YD: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      YE: (x0,x1) => x0.fetch(x1),
      YF: x0 => x0.createTexture(),
      YG: x0 => x0.visibilityState,
      YH: (x0,x1) => { x0.disabled = x1 },
      YI: (x0,x1) => x0.useProgram(x1),
      YJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: x0 => x0.createGain(),
      ZC: x0 => x0.width,
      ZD: x0 => new Uint16Array(x0),
      ZE: x0 => x0.json(),
      ZF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      ZG: (x0,x1) => x0.deleteFramebuffer(x1),
      ZH: (x0,x1) => { x0.type = x1 },
      ZI: (x0,x1) => x0.enable(x1),
      ZJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aC: (x0,x1,x2) => x0.translate(x1,x2),
      aD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      aE: x0 => x0.text(),
      aF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      aG: (x0,x1) => x0.deleteTexture(x1),
      aH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aI: (x0,x1) => x0.disable(x1),
      aJ: x0 => x0.button,
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: (x0,x1) => x0.connect(x1),
      bC: x0 => x0.fill(),
      bD: o => o instanceof Uint16Array,
      bE: Function.prototype.call.bind(String.prototype.toLowerCase),
      bF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      bG: (x0,x1) => x0.deleteRenderbuffer(x1),
      bH: x0 => x0.value,
      bI: (x0,x1) => x0.depthFunc(x1),
      bJ: x0 => x0.document,
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: x0 => x0.start(),
      cC: x0 => x0.stroke(),
      cD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      cE: (x0,x1) => x0.test(x1),
      cF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      cG: (x0,x1) => x0.deleteProgram(x1),
      cH: (x0,x1) => { x0.step = x1 },
      cI: (x0,x1) => x0.depthMask(x1),
      cJ: x0 => x0.matches,
      d: (x0,x1) => x0.error(x1),
      dB: (x0,x1) => { x0.onended = x1 },
      dC: (x0,x1) => { x0.lineWidth = x1 },
      dD: (x0,x1) => x0.enableVertexAttribArray(x1),
      dE: x0 => x0.index,
      dF: (x0,x1) => x0.getParameter(x1),
      dG: (x0,x1) => x0.deleteShader(x1),
      dH: (x0,x1) => { x0.max = x1 },
      dI: (x0,x1) => x0.cullFace(x1),
      dJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      e: () => globalThis.console,
      eB: x0 => x0.disconnect(),
      eC: (x0,x1) => { x0.strokeStyle = x1 },
      eD: b => !!b,
      eE: (x0,x1) => x0[x1],
      eF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      eG: x0 => x0.createProgram(),
      eH: (x0,x1) => { x0.min = x1 },
      eI: (x0,x1) => x0.frontFace(x1),
      eJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      f: (x0,x1) => { x0.textContent = x1 },
      fB: x0 => x0.frequency,
      fC: (x0,x1,x2) => x0.moveTo(x1,x2),
      fD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      fE: x0 => x0.flags,
      fF: o => Object.keys(o),
      fG: (x0,x1,x2) => x0.attachShader(x1,x2),
      fH: x0 => x0.ownerDocument,
      fI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      fJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: x0 => x0.createBiquadFilter(),
      gC: (x0,x1,x2) => x0.lineTo(x1,x2),
      gD: () => globalThis.WebGL2RenderingContext.FLOAT,
      gE: x0 => x0.status,
      gF: (o, p) => o[p],
      gG: (x0,x1) => x0.linkProgram(x1),
      gH: (x0,x1) => { x0.value = x1 },
      gI: (x0,x1) => x0.blendEquation(x1),
      gJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      h: o => o,
      hB: (x0,x1) => { x0.type = x1 },
      hC: x0 => x0.closePath(),
      hD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      hE: x0 => x0.ok,
      hF: x0 => new Int8Array(x0),
      hG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      hH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      hJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: x0 => x0.createPanner(),
      iC: s => s.toUpperCase(),
      iD: (x0,x1) => x0.bindVertexArray(x1),
      iE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iF: x0 => new Uint8ClampedArray(x0),
      iG: (x0,x1) => x0.getProgramInfoLog(x1),
      iH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      iJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: x0 => x0.positionZ,
      jC: Object.is,
      jD: x0 => x0.createVertexArray(),
      jE: (x0,x1) => { x0.loop = x1 },
      jF: x0 => new Int16Array(x0),
      jG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      jH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      jJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: x0 => x0.positionY,
      kC: (x0,x1) => { x0.shadowBlur = x1 },
      kD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      kE: x0 => x0.resume(),
      kF: x0 => new Int32Array(x0),
      kG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      kH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      kJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      l: o => o,
      lB: x0 => x0.positionX,
      lC: (x0,x1) => { x0.shadowColor = x1 },
      lD: x0 => new Float32Array(x0),
      lE: x0 => x0.state,
      lF: x0 => new Uint32Array(x0),
      lG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      lH: x0 => x0.value,
      lI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      lJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: (x0,x1) => { x0.coneInnerAngle = x1 },
      mC: (x0,x1) => { x0.textBaseline = x1 },
      mD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      mE: (x0,x1,x2) => x0.toggle(x1,x2),
      mF: x0 => new Float64Array(x0),
      mG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      mH: (x0,x1) => { x0.value = x1 },
      mI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      mJ: x0 => x0.canvas,
      n: f => f.dartFunction,
      nB: (x0,x1) => { x0.maxDistance = x1 },
      nC: (x0,x1) => { x0.textAlign = x1 },
      nD: Function.prototype.call.bind(DataView.prototype.setFloat64),
      nE: (x0,x1) => x0.contains(x1),
      nF: x0 => new ArrayBuffer(x0),
      nG: (x0,x1) => x0.createShader(x1),
      nH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      nI: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      nJ: x0 => x0.getSupportedExtensions(),
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: (x0,x1) => { x0.rolloffFactor = x1 },
      oC: (x0,x1) => { x0.font = x1 },
      oD: Function.prototype.call.bind(DataView.prototype.setFloat32),
      oE: (x0,x1,x2) => x0.setProperty(x1,x2),
      oF: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      oG: (x0,x1,x2) => x0.shaderSource(x1,x2),
      oH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      oJ: x0 => x0.height,
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: (x0,x1) => { x0.refDistance = x1 },
      pC: (x0,x1) => x0.rotate(x1),
      pD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      pE: x0 => x0.classList,
      pF: (x0,x1,x2) => new DataView(x0,x1,x2),
      pG: (x0,x1) => x0.compileShader(x1),
      pH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pI: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      pJ: x0 => x0.width,
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (x0,x1) => { x0.distanceModel = x1 },
      qC: (x0,x1) => { x0.fillStyle = x1 },
      qD: x0 => x0.createBuffer(),
      qE: x0 => x0.documentElement,
      qF: o => o.byteOffset,
      qG: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      qH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qI: () => globalThis.WebGL2RenderingContext.ONE,
      qJ: (x0,x1) => { x0.height = x1 },
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: (x0,x1) => { x0.panningModel = x1 },
      rC: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      rD: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      rE: (x0,x1) => { x0.checked = x1 },
      rF: o => o.buffer,
      rG: (x0,x1) => x0.getShaderInfoLog(x1),
      rH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rI: () => globalThis.WebGL2RenderingContext.ZERO,
      rJ: x0 => x0.innerHeight,
      s: (l, r) => l === r,
      sB: x0 => x0.gain,
      sC: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      sD: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      sE: (x0,x1) => { x0.value = x1 },
      sF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      sG: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      sH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sI: () => globalThis.WebGL2RenderingContext.BLEND,
      sJ: (x0,x1) => { x0.width = x1 },
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: (x0,x1) => { x0.value = x1 },
      tC: (x0,x1,x2) => x0.scale(x1,x2),
      tD: (x0,x1) => { x0.display = x1 },
      tE: (x0,x1,x2) => x0.connect(x1,x2),
      tF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      tG: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: () => globalThis.WebGL2RenderingContext.CCW,
      tJ: x0 => x0.innerWidth,
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: x0 => x0.playbackRate,
      uC: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      uD: x0 => x0.style,
      uE: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      uF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      uG: x0 => x0.createFramebuffer(),
      uH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uI: () => globalThis.WebGL2RenderingContext.BACK,
      uJ: () => globalThis.window,
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: (x0,x1) => { x0.buffer = x1 },
      vC: x0 => x0.devicePixelRatio,
      vD: (o, m, a) => o[m].apply(o, a),
      vE: () => new AudioContext(),
      vF: o => o instanceof Int16Array,
      vG: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      vH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vI: () => globalThis.WebGL2RenderingContext.FRONT,
      vJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      wC: x0 => x0.height,
      wD: x0 => new Array(x0),
      wE: (x0,x1) => { x0.buffer = x1 },
      wF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      wG: (x0,x1) => x0.drawBuffers(x1),
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      wJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: (x0,x1,x2) => x0.setTimeout(x1,x2),
      xC: x0 => x0.width,
      xD: o => [o],
      xE: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      xF: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      xG: (x0,x1) => x0.readBuffer(x1),
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: () => globalThis.WebGL2RenderingContext.NEVER,
      xJ: x0 => x0.type,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: (x0,x1) => { x0.className = x1 },
      yC: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      yD: (o0, o1) => [o0, o1],
      yE: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      yF: () => globalThis.WebGL2RenderingContext.REPEAT,
      yG: x0 => x0.createRenderbuffer(),
      yH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yI: () => globalThis.WebGL2RenderingContext.ALWAYS,
      yJ: x0 => x0.reason,
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: s => s.trim(),
      zC: (x0,x1) => x0.deleteBuffer(x1),
      zD: (o0, o1, o2) => [o0, o1, o2],
      zE: x0 => x0.sampleRate,
      zF: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      zG: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: () => globalThis.WebGL2RenderingContext.LEQUAL,
      zJ: x0 => x0.message,

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
