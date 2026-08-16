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
      AF: (o, t) => typeof o === t,
      AG: o => o instanceof Uint8ClampedArray,
      AH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      AI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AJ: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (x0,x1) => x0.cancelScheduledValues(x1),
      BD: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      BE: (x0,x1,x2) => { x0[x1] = x2 },
      BF: x0 => globalThis.Object.keys(x0),
      BG: x0 => x0.data,
      BH: (x0,x1) => x0.checkFramebufferStatus(x1),
      BI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BJ: x0 => x0.drawingBufferHeight,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      CD: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      CE: (x0,x1) => x0.contains(x1),
      CF: (o, p) => o[p],
      CG: x0 => x0.naturalHeight,
      CH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      CI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CJ: x0 => x0.drawingBufferWidth,
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: o => o.length,
      DC: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      DD: x0 => new Uint8Array(x0),
      DE: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      DF: x0 => x0.decode(),
      DG: x0 => x0.naturalWidth,
      DH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      DI: x0 => x0.display,
      DJ: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
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
      EF: (x0,x1) => x0.getContext(x1),
      EG: (x0,x1) => x0.createElement(x1),
      EH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      EI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EJ: (x0,x1) => x0.clear(x1),
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: x0 => x0.currentTime,
      FD: Function.prototype.call.bind(DataView.prototype.setInt32),
      FE: x0 => x0.className,
      FF: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      FG: (x0,x1) => { x0.src = x1 },
      FH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      FI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      GD: Function.prototype.call.bind(DataView.prototype.setUint32),
      GE: x0 => x0.activeElement,
      GF: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      GG: x0 => x0.text(),
      GH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      GI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (string, times) => string.repeat(times),
      HC: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      HD: Function.prototype.call.bind(DataView.prototype.setInt16),
      HE: (x0,x1) => x0.querySelectorAll(x1),
      HF: (x0,x1) => x0.hasAttribute(x1),
      HG: Function.prototype.call.bind(String.prototype.toLowerCase),
      HH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      HI: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      HJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: (d, digits) => d.toFixed(digits),
      IC: x0 => x0.listener,
      ID: Function.prototype.call.bind(DataView.prototype.setUint16),
      IE: (x0,x1) => x0.item(x1),
      IF: (x0,x1,x2) => x0.bindTexture(x1,x2),
      IG: (x0,x1) => x0.test(x1),
      IH: () => globalThis.WebGL2RenderingContext.NONE,
      II: () => typeof dartUseDateNowForTicks !== "undefined",
      IJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (x0,x1) => x0.exec(x1),
      JC: (x0,x1) => x0.getItem(x1),
      JD: Function.prototype.call.bind(DataView.prototype.setUint8),
      JE: x0 => x0.length,
      JF: (x0,x1) => x0.generateMipmap(x1),
      JG: x0 => x0.index,
      JH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      JI: () => Date.now(),
      JJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
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
      KF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      KG: (x0,x1) => x0[x1],
      KH: (x0,x1) => x0.deleteQuery(x1),
      KI: () => 1000 * performance.now(),
      KJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      L: o => o === undefined,
      LB: (x0,x1) => { x0.lastIndex = x1 },
      LC: (x0,x1) => x0.removeItem(x1),
      LD: (t, s) => t.set(s),
      LE: x0 => x0.preventDefault(),
      LF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      LG: x0 => x0.flags,
      LH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LI: (x0,x1) => x0.endQuery(x1),
      LJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      M: o => String(o),
      MB: o => o,
      MC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      MD: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      ME: x0 => x0.shiftKey,
      MF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      MG: x0 => x0.deltaY,
      MH: x0 => x0.body,
      MI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      MJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
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
      NF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      NG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NH: (a, s) => a.join(s),
      NI: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      NJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: o => o instanceof RegExp,
      OC: (s) => +s,
      OD: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      OE: x0 => x0.defaultPrevented,
      OF: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      OG: (x0,x1) => x0.appendChild(x1),
      OH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      OI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      OJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
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
      PF: () => globalThis.WebGL2RenderingContext.RGBA,
      PG: x0 => x0.top,
      PH: (x0,x1) => { x0.disabled = x1 },
      PI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      PJ: x0 => x0.createQuery(),
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: x0 => x0.dotAll,
      QC: x0 => x0.getBoundingClientRect(),
      QD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      QE: x0 => x0.value,
      QF: x0 => x0.createTexture(),
      QG: x0 => x0.clientY,
      QH: (x0,x1) => { x0.type = x1 },
      QI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      QJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: x0 => x0.unicode,
      RC: x0 => x0.restore(),
      RD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      RE: x0 => x0.pressed,
      RF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      RG: x0 => x0.left,
      RH: (x0,x1) => { x0.id = x1 },
      RI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      RJ: x0 => x0.ok,
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: x0 => x0.ignoreCase,
      SC: x0 => x0.save(),
      SD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      SE: x0 => x0.buttons,
      SF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      SG: x0 => x0.clientX,
      SH: (x0,x1) => x0.removeChild(x1),
      SI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      SJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: x0 => x0.multiline,
      TC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      TD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      TE: x0 => x0.axes,
      TF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      TG: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      TH: x0 => x0.firstChild,
      TI: (x0,x1,x2) => x0.uniform1i(x1,x2),
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
      UF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      UG: x0 => x0.repeat,
      UH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UI: (x0,x1) => x0.activeTexture(x1),
      UJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: o => o instanceof Array,
      VC: x0 => x0.beginPath(),
      VD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      VE: x0 => x0.mapping,
      VF: (x0,x1) => x0.getParameter(x1),
      VG: (x0,x1) => x0.getAttribute(x1),
      VH: x0 => x0.checked,
      VI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      VJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: (a, i) => a[i],
      WC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      WD: (b, o) => new DataView(b, o),
      WE: x0 => x0.connected,
      WF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      WG: x0 => x0.visibilityState,
      WH: (x0,x1) => { x0.disabled = x1 },
      WI: (x0,x1) => x0.useProgram(x1),
      WJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: a => a.length,
      XC: x0 => x0.clip(),
      XD: (b, o, l) => new DataView(b, o, l),
      XE: x0 => x0.navigator,
      XF: o => Object.keys(o),
      XG: (x0,x1) => x0.deleteFramebuffer(x1),
      XH: (x0,x1) => { x0.type = x1 },
      XI: (x0,x1) => x0.enable(x1),
      XJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: x0 => x0.createBufferSource(),
      YC: (x0,x1) => x0.measureText(x1),
      YD: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      YE: (x0,x1) => x0.fetch(x1),
      YF: (o, p) => o[p],
      YG: (x0,x1) => x0.deleteTexture(x1),
      YH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YI: (x0,x1) => x0.disable(x1),
      YJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: x0 => x0.createGain(),
      ZC: x0 => x0.width,
      ZD: x0 => new Uint16Array(x0),
      ZE: x0 => x0.json(),
      ZF: x0 => new Int8Array(x0),
      ZG: (x0,x1) => x0.deleteRenderbuffer(x1),
      ZH: x0 => x0.value,
      ZI: (x0,x1) => x0.depthFunc(x1),
      ZJ: x0 => x0.button,
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aC: (x0,x1,x2) => x0.translate(x1,x2),
      aD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      aE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aF: x0 => new Uint8ClampedArray(x0),
      aG: (x0,x1) => x0.deleteProgram(x1),
      aH: (x0,x1) => { x0.step = x1 },
      aI: (x0,x1) => x0.depthMask(x1),
      aJ: x0 => x0.document,
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: (x0,x1) => x0.connect(x1),
      bC: x0 => x0.fill(),
      bD: o => o instanceof Uint16Array,
      bE: (x0,x1) => { x0.loop = x1 },
      bF: x0 => new Int16Array(x0),
      bG: (x0,x1) => x0.deleteShader(x1),
      bH: (x0,x1) => { x0.max = x1 },
      bI: (x0,x1) => x0.cullFace(x1),
      bJ: x0 => x0.matches,
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: x0 => x0.start(),
      cC: x0 => x0.stroke(),
      cD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      cE: x0 => x0.resume(),
      cF: x0 => new Int32Array(x0),
      cG: x0 => x0.createProgram(),
      cH: (x0,x1) => { x0.min = x1 },
      cI: (x0,x1) => x0.frontFace(x1),
      cJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      d: (x0,x1) => x0.error(x1),
      dB: (x0,x1) => { x0.onended = x1 },
      dC: (x0,x1) => { x0.lineWidth = x1 },
      dD: (x0,x1) => x0.enableVertexAttribArray(x1),
      dE: x0 => x0.state,
      dF: x0 => new Uint32Array(x0),
      dG: (x0,x1,x2) => x0.attachShader(x1,x2),
      dH: x0 => x0.ownerDocument,
      dI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      dJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      e: () => globalThis.console,
      eB: x0 => x0.disconnect(),
      eC: (x0,x1) => { x0.strokeStyle = x1 },
      eD: b => !!b,
      eE: (x0,x1,x2) => x0.toggle(x1,x2),
      eF: x0 => new Float64Array(x0),
      eG: (x0,x1) => x0.linkProgram(x1),
      eH: (x0,x1) => { x0.value = x1 },
      eI: (x0,x1) => x0.blendEquation(x1),
      eJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      f: (x0,x1) => { x0.textContent = x1 },
      fB: x0 => x0.frequency,
      fC: (x0,x1,x2) => x0.moveTo(x1,x2),
      fD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      fE: (x0,x1) => x0.contains(x1),
      fF: x0 => new ArrayBuffer(x0),
      fG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      fH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      fJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: x0 => x0.createBiquadFilter(),
      gC: (x0,x1,x2) => x0.lineTo(x1,x2),
      gD: () => globalThis.WebGL2RenderingContext.FLOAT,
      gE: (x0,x1,x2) => x0.setProperty(x1,x2),
      gF: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      gG: (x0,x1) => x0.getProgramInfoLog(x1),
      gH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      gJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      h: o => o,
      hB: (x0,x1) => { x0.type = x1 },
      hC: x0 => x0.closePath(),
      hD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      hE: x0 => x0.classList,
      hF: (x0,x1,x2) => new DataView(x0,x1,x2),
      hG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      hH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      hJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: x0 => x0.createPanner(),
      iC: s => s.toUpperCase(),
      iD: (x0,x1) => x0.bindVertexArray(x1),
      iE: x0 => x0.documentElement,
      iF: o => o.byteOffset,
      iG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      iH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      iJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: x0 => x0.positionZ,
      jC: Object.is,
      jD: x0 => x0.createVertexArray(),
      jE: (x0,x1) => { x0.checked = x1 },
      jF: o => o.buffer,
      jG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      jH: x0 => x0.value,
      jI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      jJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: x0 => x0.positionY,
      kC: (x0,x1) => { x0.shadowBlur = x1 },
      kD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      kE: (x0,x1) => { x0.value = x1 },
      kF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      kG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      kH: (x0,x1) => { x0.value = x1 },
      kI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      kJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      l: o => o,
      lB: x0 => x0.positionX,
      lC: (x0,x1) => { x0.shadowColor = x1 },
      lD: x0 => new Float32Array(x0),
      lE: (x0,x1,x2) => x0.connect(x1,x2),
      lF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      lG: (x0,x1) => x0.createShader(x1),
      lH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lI: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      lJ: x0 => x0.canvas,
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: (x0,x1) => { x0.coneInnerAngle = x1 },
      mC: (x0,x1) => { x0.textBaseline = x1 },
      mD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      mE: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      mF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      mG: (x0,x1,x2) => x0.shaderSource(x1,x2),
      mH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      mJ: x0 => x0.getSupportedExtensions(),
      n: f => f.dartFunction,
      nB: (x0,x1) => { x0.maxDistance = x1 },
      nC: (x0,x1) => { x0.textAlign = x1 },
      nD: Function.prototype.call.bind(DataView.prototype.setFloat64),
      nE: () => new AudioContext(),
      nF: o => o instanceof Int16Array,
      nG: (x0,x1) => x0.compileShader(x1),
      nH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      nI: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      nJ: x0 => x0.height,
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: (x0,x1) => { x0.rolloffFactor = x1 },
      oC: (x0,x1) => { x0.font = x1 },
      oD: Function.prototype.call.bind(DataView.prototype.setFloat32),
      oE: (x0,x1) => { x0.buffer = x1 },
      oF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      oG: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      oH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oI: () => globalThis.WebGL2RenderingContext.ONE,
      oJ: x0 => x0.width,
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: (x0,x1) => { x0.refDistance = x1 },
      pC: (x0,x1) => x0.rotate(x1),
      pD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      pE: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      pF: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      pG: (x0,x1) => x0.getShaderInfoLog(x1),
      pH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pI: () => globalThis.WebGL2RenderingContext.ZERO,
      pJ: (x0,x1) => { x0.height = x1 },
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (x0,x1) => { x0.distanceModel = x1 },
      qC: (x0,x1) => { x0.fillStyle = x1 },
      qD: x0 => x0.createBuffer(),
      qE: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      qF: () => globalThis.WebGL2RenderingContext.REPEAT,
      qG: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      qH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qI: () => globalThis.WebGL2RenderingContext.BLEND,
      qJ: x0 => x0.innerHeight,
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: (x0,x1) => { x0.panningModel = x1 },
      rC: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      rD: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      rE: x0 => x0.sampleRate,
      rF: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      rG: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      rH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rI: () => globalThis.WebGL2RenderingContext.CCW,
      rJ: (x0,x1) => { x0.width = x1 },
      s: (l, r) => l === r,
      sB: x0 => x0.gain,
      sC: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      sD: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      sE: x0 => x0.arrayBuffer(),
      sF: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      sG: x0 => x0.createFramebuffer(),
      sH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sI: () => globalThis.WebGL2RenderingContext.BACK,
      sJ: x0 => x0.innerWidth,
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: (x0,x1) => { x0.value = x1 },
      tC: (x0,x1,x2) => x0.scale(x1,x2),
      tD: (x0,x1) => { x0.display = x1 },
      tE: (x0,x1) => x0.decodeAudioData(x1),
      tF: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      tG: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: () => globalThis.WebGL2RenderingContext.FRONT,
      tJ: () => globalThis.window,
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: x0 => x0.playbackRate,
      uC: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      uD: x0 => x0.style,
      uE: (x0,x1) => x0.warn(x1),
      uF: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      uG: (x0,x1) => x0.drawBuffers(x1),
      uH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uI: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      uJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: (x0,x1) => { x0.buffer = x1 },
      vC: x0 => x0.devicePixelRatio,
      vD: (o, m, a) => o[m].apply(o, a),
      vE: x0 => x0.createConvolver(),
      vF: () => globalThis.WebGL2RenderingContext.LINEAR,
      vG: (x0,x1) => x0.readBuffer(x1),
      vH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vI: () => globalThis.WebGL2RenderingContext.NEVER,
      vJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      wC: x0 => x0.height,
      wD: x0 => new Array(x0),
      wE: (x0,x1) => x0.disconnect(x1),
      wF: () => globalThis.WebGL2RenderingContext.NEAREST,
      wG: x0 => x0.createRenderbuffer(),
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: () => globalThis.WebGL2RenderingContext.ALWAYS,
      wJ: x0 => x0.type,
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: (x0,x1,x2) => x0.setTimeout(x1,x2),
      xC: x0 => x0.width,
      xD: o => [o],
      xE: (x0,x1) => x0.createChannelSplitter(x1),
      xF: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      xG: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: () => globalThis.WebGL2RenderingContext.LEQUAL,
      xJ: x0 => x0.reason,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: (x0,x1) => { x0.className = x1 },
      yC: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      yD: (o0, o1) => [o0, o1],
      yE: (x0,x1) => x0.createChannelMerger(x1),
      yF: () => globalThis.WebGL2RenderingContext.RGBA8,
      yG: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      yH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yI: () => globalThis.WebGL2RenderingContext.LESS,
      yJ: x0 => x0.message,
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: s => s.trim(),
      zC: (x0,x1) => x0.deleteBuffer(x1),
      zD: (o0, o1, o2) => [o0, o1, o2],
      zE: x0 => x0.destination,
      zF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      zG: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      zJ: () => globalThis.document,

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
