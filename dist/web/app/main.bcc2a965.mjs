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
      AC: (x0,x1,x2) => x0.setTimeout(x1,x2),
      AD: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      AE: (o0, o1) => [o0, o1],
      AF: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      AG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      AH: (x0,x1) => x0.readBuffer(x1),
      AI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AJ: () => globalThis.WebGL2RenderingContext.NEVER,
      AK: x0 => x0.type,
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (x0,x1) => { x0.className = x1 },
      BD: (x0,x1) => x0.deleteBuffer(x1),
      BE: (o0, o1, o2) => [o0, o1, o2],
      BF: () => new AudioContext(),
      BG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      BH: x0 => x0.createRenderbuffer(),
      BI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BJ: () => globalThis.WebGL2RenderingContext.ALWAYS,
      BK: x0 => x0.reason,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: s => s.trim(),
      CD: (x0,x1) => x0.deleteVertexArray(x1),
      CE: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      CF: (x0,x1) => { x0.buffer = x1 },
      CG: () => globalThis.WebGL2RenderingContext.REPEAT,
      CH: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      CI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CJ: () => globalThis.WebGL2RenderingContext.LEQUAL,
      CK: x0 => x0.message,
      D: Function.prototype.call.bind(String.prototype.indexOf),
      DB: o => o.length,
      DC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DD: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      DE: (x0,x1,x2) => { x0[x1] = x2 },
      DF: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      DG: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      DH: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      DI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DJ: () => globalThis.WebGL2RenderingContext.LESS,
      DK: () => globalThis.document,
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
      EC: (x0,x1) => x0.cancelScheduledValues(x1),
      ED: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      EE: (x0,x1) => x0.contains(x1),
      EF: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      EG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      EH: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      EI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EJ: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      FD: x0 => new Uint8Array(x0),
      FE: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      FF: x0 => x0.sampleRate,
      FG: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      FH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      FI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FJ: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      GD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      GE: x0 => x0.focus(),
      GF: (x0,x1) => x0.decodeAudioData(x1),
      GG: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      GH: (x0,x1) => x0.checkFramebufferStatus(x1),
      GI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GJ: x0 => x0.drawingBufferHeight,
      H: (s, p, i) => s.lastIndexOf(p, i),
      HB: (string, times) => string.repeat(times),
      HC: x0 => x0.value,
      HD: Function.prototype.call.bind(DataView.prototype.setInt32),
      HE: x0 => x0.className,
      HF: (x0,x1) => x0.warn(x1),
      HG: () => globalThis.WebGL2RenderingContext.LINEAR,
      HH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      HI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HJ: x0 => x0.drawingBufferWidth,
      I: Function.prototype.call.bind(Number.prototype.toString),
      IB: Function.prototype.call.bind(String.prototype.toLowerCase),
      IC: x0 => x0.currentTime,
      ID: Function.prototype.call.bind(DataView.prototype.setUint32),
      IE: x0 => x0.activeElement,
      IF: x0 => x0.createConvolver(),
      IG: () => globalThis.WebGL2RenderingContext.NEAREST,
      IH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      II: x0 => x0.display,
      IJ: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      J: Function.prototype.call.bind(BigInt.prototype.toString),
      JB: Object.is,
      JC: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      JD: Function.prototype.call.bind(DataView.prototype.setInt16),
      JE: (x0,x1) => x0.querySelectorAll(x1),
      JF: (x0,x1) => x0.disconnect(x1),
      JG: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      JH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      JI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JJ: (x0,x1) => x0.clear(x1),
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => x0.state,
      KC: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      KD: Function.prototype.call.bind(DataView.prototype.setUint16),
      KE: (x0,x1) => x0.item(x1),
      KF: (x0,x1) => x0.createChannelSplitter(x1),
      KG: () => globalThis.WebGL2RenderingContext.RGBA8,
      KH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      KI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      L: o => o === undefined,
      LB: (d, digits) => d.toFixed(digits),
      LC: x0 => x0.listener,
      LD: Function.prototype.call.bind(DataView.prototype.setUint8),
      LE: x0 => x0.length,
      LF: (x0,x1) => x0.createChannelMerger(x1),
      LG: o => o instanceof Uint8ClampedArray,
      LH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      LI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      M: o => String(o),
      MB: (x0,x1) => x0.exec(x1),
      MC: (x0,x1) => x0.getItem(x1),
      MD: Function.prototype.call.bind(DataView.prototype.setInt8),
      ME: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MF: x0 => x0.destination,
      MG: x0 => x0.data,
      MH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      MI: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      MJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      N: (x0,x1) => x0.getElementById(x1),
      NB: x0 => x0.length,
      NC: (x0,x1,x2) => x0.setItem(x1,x2),
      ND: (t, s) => t.set(s),
      NE: x0 => x0.preventDefault(),
      NF: (o, t) => typeof o === t,
      NG: x0 => x0.naturalHeight,
      NH: () => globalThis.WebGL2RenderingContext.NONE,
      NI: () => typeof dartUseDateNowForTicks !== "undefined",
      NJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: (x0,x1) => { x0.lastIndex = x1 },
      OC: (x0,x1) => x0.removeItem(x1),
      OD: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      OE: x0 => x0.shiftKey,
      OF: x0 => globalThis.Object.keys(x0),
      OG: x0 => x0.naturalWidth,
      OH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      OI: () => Date.now(),
      OJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      P: (x0,x1) => x0.matchMedia(x1),
      PB: o => o,
      PC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      PD: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      PE: x0 => x0.code,
      PF: (o, p) => o[p],
      PG: (x0,x1) => x0.createElement(x1),
      PH: (x0,x1) => x0.deleteQuery(x1),
      PI: () => 1000 * performance.now(),
      PJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      QC: x0 => x0.localStorage,
      QD: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      QE: x0 => x0.defaultPrevented,
      QF: x0 => x0.decode(),
      QG: (x0,x1) => { x0.src = x1 },
      QH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QI: (x0,x1) => x0.endQuery(x1),
      QJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: o => o instanceof RegExp,
      RC: (s) => +s,
      RD: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      RE: x0 => x0.getGamepads(),
      RF: (x0,x1) => x0.getContext(x1),
      RG: x0 => x0.deltaY,
      RH: x0 => x0.body,
      RI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      RJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      SC: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      SD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      SE: x0 => x0.value,
      SF: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      SG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SH: (a, s) => a.join(s),
      SI: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      SJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: x0 => x0.dotAll,
      TC: x0 => x0.getBoundingClientRect(),
      TD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      TE: x0 => x0.pressed,
      TF: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      TG: (x0,x1) => x0.appendChild(x1),
      TH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      TJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      U: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UB: x0 => x0.unicode,
      UC: x0 => x0.restore(),
      UD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      UE: x0 => x0.buttons,
      UF: (x0,x1) => x0.hasAttribute(x1),
      UG: x0 => x0.top,
      UH: (x0,x1) => { x0.disabled = x1 },
      UI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      UJ: x0 => x0.createQuery(),
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: x0 => x0.ignoreCase,
      VC: x0 => x0.save(),
      VD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      VE: x0 => x0.axes,
      VF: (x0,x1,x2) => x0.bindTexture(x1,x2),
      VG: x0 => x0.clientY,
      VH: (x0,x1) => { x0.type = x1 },
      VI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      VJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: x0 => x0.multiline,
      WC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      WD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      WE: x0 => x0.id,
      WF: (x0,x1) => x0.generateMipmap(x1),
      WG: x0 => x0.left,
      WH: (x0,x1) => { x0.id = x1 },
      WI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      WJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: (string, token) => string.split(token),
      XC: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      XD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      XE: x0 => x0.mapping,
      XF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      XG: x0 => x0.clientX,
      XH: (x0,x1) => x0.removeChild(x1),
      XI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      XJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: o => o instanceof Array,
      YC: x0 => x0.beginPath(),
      YD: (b, o) => new DataView(b, o),
      YE: x0 => x0.connected,
      YF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      YG: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      YH: x0 => x0.firstChild,
      YI: (x0,x1,x2) => x0.uniform1i(x1,x2),
      YJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: (a, i) => a[i],
      ZC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      ZD: (b, o, l) => new DataView(b, o, l),
      ZE: x0 => x0.navigator,
      ZF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      ZG: x0 => x0.repeat,
      ZH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZI: (x0,x1) => x0.activeTexture(x1),
      ZJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: a => a.length,
      aC: x0 => x0.clip(),
      aD: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      aE: (x0,x1) => x0.fetch(x1),
      aF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      aG: (x0,x1) => x0.getAttribute(x1),
      aH: x0 => x0.checked,
      aI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      aJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: x0 => x0.createBufferSource(),
      bC: (x0,x1,x2) => x0.translate(x1,x2),
      bD: x0 => new Uint16Array(x0),
      bE: x0 => x0.json(),
      bF: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      bG: x0 => x0.visibilityState,
      bH: (x0,x1) => { x0.disabled = x1 },
      bI: (x0,x1) => x0.useProgram(x1),
      bJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: x0 => x0.createGain(),
      cC: x0 => x0.fill(),
      cD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      cE: x0 => x0.text(),
      cF: () => globalThis.WebGL2RenderingContext.RGBA,
      cG: (x0,x1) => x0.deleteFramebuffer(x1),
      cH: (x0,x1) => { x0.type = x1 },
      cI: (x0,x1) => x0.enable(x1),
      cJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      d: (x0,x1) => x0.error(x1),
      dB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      dC: x0 => x0.stroke(),
      dD: o => o instanceof Uint16Array,
      dE: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      dF: x0 => x0.createTexture(),
      dG: (x0,x1) => x0.deleteTexture(x1),
      dH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      dI: (x0,x1) => x0.disable(x1),
      dJ: x0 => x0.button,
      e: () => globalThis.console,
      eB: (x0,x1) => x0.connect(x1),
      eC: (x0,x1) => { x0.lineWidth = x1 },
      eD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      eE: o => o.byteOffset,
      eF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      eG: (x0,x1) => x0.deleteRenderbuffer(x1),
      eH: x0 => x0.value,
      eI: (x0,x1) => x0.depthFunc(x1),
      eJ: x0 => x0.document,
      f: (x0,x1) => { x0.textContent = x1 },
      fB: x0 => x0.start(),
      fC: (x0,x1) => { x0.strokeStyle = x1 },
      fD: (x0,x1) => x0.enableVertexAttribArray(x1),
      fE: o => o.buffer,
      fF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      fG: (x0,x1) => x0.deleteProgram(x1),
      fH: (x0,x1) => { x0.step = x1 },
      fI: (x0,x1) => x0.depthMask(x1),
      fJ: x0 => x0.matches,
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: (x0,x1) => { x0.onended = x1 },
      gC: (x0,x1,x2) => x0.moveTo(x1,x2),
      gD: b => !!b,
      gE: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      gF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      gG: (x0,x1) => x0.deleteShader(x1),
      gH: (x0,x1) => { x0.max = x1 },
      gI: (x0,x1) => x0.cullFace(x1),
      gJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      h: o => o,
      hB: x0 => x0.disconnect(),
      hC: (x0,x1,x2) => x0.lineTo(x1,x2),
      hD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      hE: (x0,x1) => x0.test(x1),
      hF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      hG: x0 => x0.createProgram(),
      hH: (x0,x1) => { x0.min = x1 },
      hI: (x0,x1) => x0.frontFace(x1),
      hJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: x0 => x0.frequency,
      iC: x0 => x0.closePath(),
      iD: () => globalThis.WebGL2RenderingContext.FLOAT,
      iE: x0 => x0.index,
      iF: (x0,x1) => x0.getParameter(x1),
      iG: (x0,x1,x2) => x0.attachShader(x1,x2),
      iH: x0 => x0.ownerDocument,
      iI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      iJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: x0 => x0.createBiquadFilter(),
      jC: (x0,x1) => x0.measureText(x1),
      jD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      jE: (x0,x1) => x0[x1],
      jF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      jG: (x0,x1) => x0.linkProgram(x1),
      jH: (x0,x1) => { x0.value = x1 },
      jI: (x0,x1) => x0.blendEquation(x1),
      jJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: (x0,x1) => { x0.type = x1 },
      kC: x0 => x0.width,
      kD: (x0,x1) => x0.bindVertexArray(x1),
      kE: x0 => x0.flags,
      kF: o => Object.keys(o),
      kG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      kH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      kJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      l: o => o,
      lB: x0 => x0.createPanner(),
      lC: s => s.toUpperCase(),
      lD: x0 => x0.createVertexArray(),
      lE: x0 => x0.arrayBuffer(),
      lF: (o, p) => o[p],
      lG: (x0,x1) => x0.getProgramInfoLog(x1),
      lH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      lJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: x0 => x0.positionZ,
      mC: (x0,x1) => { x0.shadowBlur = x1 },
      mD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      mE: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      mF: x0 => new Int8Array(x0),
      mG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      mH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      mJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      n: f => f.dartFunction,
      nB: x0 => x0.positionY,
      nC: (x0,x1) => { x0.shadowColor = x1 },
      nD: x0 => new Float32Array(x0),
      nE: x0 => x0.status,
      nF: x0 => new Uint8ClampedArray(x0),
      nG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      nH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      nI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      nJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: x0 => x0.positionX,
      oC: (x0,x1) => { x0.textBaseline = x1 },
      oD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      oE: x0 => x0.ok,
      oF: x0 => new Int16Array(x0),
      oG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      oH: x0 => x0.value,
      oI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      oJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: (x0,x1) => { x0.coneInnerAngle = x1 },
      pC: (x0,x1) => { x0.textAlign = x1 },
      pD: Function.prototype.call.bind(DataView.prototype.setFloat64),
      pE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pF: x0 => new Int32Array(x0),
      pG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      pH: (x0,x1) => { x0.value = x1 },
      pI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      pJ: x0 => x0.canvas,
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (x0,x1) => { x0.maxDistance = x1 },
      qC: (x0,x1) => { x0.font = x1 },
      qD: Function.prototype.call.bind(DataView.prototype.setFloat32),
      qE: (x0,x1) => { x0.loop = x1 },
      qF: x0 => new Uint32Array(x0),
      qG: (x0,x1) => x0.createShader(x1),
      qH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qI: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      qJ: x0 => x0.getSupportedExtensions(),
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: (x0,x1) => { x0.rolloffFactor = x1 },
      rC: (x0,x1) => x0.rotate(x1),
      rD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      rE: x0 => x0.resume(),
      rF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      rG: (x0,x1,x2) => x0.shaderSource(x1,x2),
      rH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      rJ: x0 => x0.height,
      s: (l, r) => l === r,
      sB: (x0,x1) => { x0.refDistance = x1 },
      sC: (x0,x1) => { x0.fillStyle = x1 },
      sD: x0 => x0.createBuffer(),
      sE: (x0,x1,x2) => x0.toggle(x1,x2),
      sF: x0 => new Float64Array(x0),
      sG: (x0,x1) => x0.compileShader(x1),
      sH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sI: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      sJ: x0 => x0.width,
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: (x0,x1) => { x0.distanceModel = x1 },
      tC: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      tD: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      tE: (x0,x1) => x0.contains(x1),
      tF: x0 => new ArrayBuffer(x0),
      tG: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: () => globalThis.WebGL2RenderingContext.ONE,
      tJ: (x0,x1) => { x0.height = x1 },
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: (x0,x1) => { x0.panningModel = x1 },
      uC: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      uD: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      uE: (x0,x1,x2) => x0.setProperty(x1,x2),
      uF: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      uG: (x0,x1) => x0.getShaderInfoLog(x1),
      uH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uI: () => globalThis.WebGL2RenderingContext.ZERO,
      uJ: x0 => x0.innerHeight,
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: x0 => x0.gain,
      vC: (x0,x1,x2) => x0.scale(x1,x2),
      vD: (x0,x1) => { x0.display = x1 },
      vE: x0 => x0.classList,
      vF: (x0,x1,x2) => new DataView(x0,x1,x2),
      vG: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      vH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vI: () => globalThis.WebGL2RenderingContext.BLEND,
      vJ: (x0,x1) => { x0.width = x1 },
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: (x0,x1) => { x0.value = x1 },
      wC: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      wD: x0 => x0.style,
      wE: x0 => x0.documentElement,
      wF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      wG: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: () => globalThis.WebGL2RenderingContext.CCW,
      wJ: x0 => x0.innerWidth,
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: x0 => x0.playbackRate,
      xC: x0 => x0.devicePixelRatio,
      xD: (o, m, a) => o[m].apply(o, a),
      xE: (x0,x1) => { x0.checked = x1 },
      xF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      xG: x0 => x0.createFramebuffer(),
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: () => globalThis.WebGL2RenderingContext.BACK,
      xJ: () => globalThis.window,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: (x0,x1) => { x0.buffer = x1 },
      yC: x0 => x0.height,
      yD: x0 => new Array(x0),
      yE: (x0,x1) => { x0.value = x1 },
      yF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      yG: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      yH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yI: () => globalThis.WebGL2RenderingContext.FRONT,
      yJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      zC: x0 => x0.width,
      zD: o => [o],
      zE: (x0,x1,x2) => x0.connect(x1,x2),
      zF: o => o instanceof Int16Array,
      zG: (x0,x1) => x0.drawBuffers(x1),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      zJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),

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
