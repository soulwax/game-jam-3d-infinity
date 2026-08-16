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
      AC: (x0,x1,x2) => x0.setItem(x1,x2),
      AD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      AE: x0 => x0.buttons,
      AF: () => globalThis.WebGL2RenderingContext.RGBA,
      AG: x0 => x0.repeat,
      AH: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      AI: x0 => x0.button,
      AJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (x0,x1) => x0.removeItem(x1),
      BD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      BE: x0 => x0.axes,
      BF: x0 => x0.createTexture(),
      BG: (x0,x1) => x0.getAttribute(x1),
      BH: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      BI: x0 => x0.document,
      BJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      CD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      CE: x0 => x0.id,
      CF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      CG: x0 => x0.visibilityState,
      CH: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      CI: x0 => x0.matches,
      CJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: o => o.length,
      DC: x0 => x0.localStorage,
      DD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      DE: x0 => x0.mapping,
      DF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      DG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      DI: () => typeof dartUseDateNowForTicks !== "undefined",
      DJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
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
      EC: (s) => +s,
      ED: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      EE: x0 => x0.connected,
      EF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      EG: x0 => x0.body,
      EH: (x0,x1) => x0.checkFramebufferStatus(x1),
      EI: () => Date.now(),
      EJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      FD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      FE: x0 => x0.navigator,
      FF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      FG: x0 => x0.index,
      FH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      FI: () => 1000 * performance.now(),
      FJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: x0 => x0.getBoundingClientRect(),
      GD: (b, o) => new DataView(b, o),
      GE: (x0,x1) => x0.fetch(x1),
      GF: (x0,x1) => x0.getParameter(x1),
      GG: (x0,x1) => x0[x1],
      GH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      GI: (x0,x1) => x0.endQuery(x1),
      GJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      HC: x0 => x0.restore(),
      HD: (b, o, l) => new DataView(b, o, l),
      HE: x0 => x0.json(),
      HF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      HG: x0 => x0.flags,
      HH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      HI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      HJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      IC: x0 => x0.save(),
      ID: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      IE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      IF: o => Object.keys(o),
      IG: (a, s) => a.join(s),
      IH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      II: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      IJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: Function.prototype.call.bind(DataView.prototype.setInt32),
      JC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      JD: x0 => new Uint16Array(x0),
      JE: (x0,x1) => { x0.loop = x1 },
      JF: (o, p) => o[p],
      JG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      JI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      JJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: Function.prototype.call.bind(DataView.prototype.setUint32),
      KC: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      KD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      KE: x0 => x0.resume(),
      KF: x0 => new Int8Array(x0),
      KG: (x0,x1) => { x0.disabled = x1 },
      KH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      KI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      KJ: x0 => x0.createQuery(),
      L: o => o === undefined,
      LB: Function.prototype.call.bind(DataView.prototype.setInt16),
      LC: x0 => x0.beginPath(),
      LD: o => o instanceof Uint16Array,
      LE: x0 => x0.state,
      LF: x0 => new Uint8ClampedArray(x0),
      LG: (x0,x1) => { x0.type = x1 },
      LH: () => globalThis.WebGL2RenderingContext.NONE,
      LI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      LJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      M: o => String(o),
      MB: Function.prototype.call.bind(DataView.prototype.setUint16),
      MC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      MD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      ME: (x0,x1,x2) => x0.toggle(x1,x2),
      MF: x0 => new Int16Array(x0),
      MG: (x0,x1) => { x0.id = x1 },
      MH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      MI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      MJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      N: (x0,x1) => x0.getElementById(x1),
      NB: Function.prototype.call.bind(DataView.prototype.setUint8),
      NC: x0 => x0.clip(),
      ND: (x0,x1) => x0.enableVertexAttribArray(x1),
      NE: (x0,x1) => x0.contains(x1),
      NF: x0 => new Int32Array(x0),
      NG: (x0,x1) => x0.removeChild(x1),
      NH: (x0,x1) => x0.deleteQuery(x1),
      NI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      NJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: Function.prototype.call.bind(DataView.prototype.setInt8),
      OC: (x0,x1) => x0.measureText(x1),
      OD: b => !!b,
      OE: (x0,x1,x2) => x0.setProperty(x1,x2),
      OF: x0 => new Uint32Array(x0),
      OG: x0 => x0.firstChild,
      OH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      OI: (x0,x1,x2) => x0.uniform1i(x1,x2),
      OJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      P: (x0,x1) => x0.matchMedia(x1),
      PB: (d, digits) => d.toFixed(digits),
      PC: x0 => x0.width,
      PD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      PE: x0 => x0.classList,
      PF: x0 => new Float64Array(x0),
      PG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PI: (x0,x1) => x0.activeTexture(x1),
      PJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: (x0,x1) => x0.exec(x1),
      QC: (x0,x1,x2) => x0.translate(x1,x2),
      QD: () => globalThis.WebGL2RenderingContext.FLOAT,
      QE: x0 => x0.documentElement,
      QF: x0 => new ArrayBuffer(x0),
      QG: x0 => x0.checked,
      QH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      QJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: x0 => x0.length,
      RC: x0 => x0.fill(),
      RD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      RE: (x0,x1) => { x0.checked = x1 },
      RF: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      RG: (x0,x1) => { x0.disabled = x1 },
      RH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      RI: (x0,x1) => x0.useProgram(x1),
      RJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: (x0,x1) => { x0.lastIndex = x1 },
      SC: x0 => x0.stroke(),
      SD: (x0,x1) => x0.bindVertexArray(x1),
      SE: (x0,x1) => { x0.value = x1 },
      SF: (x0,x1,x2) => new DataView(x0,x1,x2),
      SG: (x0,x1) => { x0.type = x1 },
      SH: x0 => x0.value,
      SI: (x0,x1) => x0.enable(x1),
      SJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: o => o,
      TC: (x0,x1) => { x0.lineWidth = x1 },
      TD: x0 => x0.createVertexArray(),
      TE: (x0,x1,x2) => x0.connect(x1,x2),
      TF: o => o.byteOffset,
      TG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TH: (x0,x1) => { x0.value = x1 },
      TI: (x0,x1) => x0.disable(x1),
      TJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      U: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UB: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      UC: (x0,x1) => { x0.strokeStyle = x1 },
      UD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      UE: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      UF: o => o.buffer,
      UG: x0 => x0.value,
      UH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UI: (x0,x1) => x0.depthFunc(x1),
      UJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: o => o instanceof RegExp,
      VC: (x0,x1,x2) => x0.moveTo(x1,x2),
      VD: x0 => new Float32Array(x0),
      VE: () => new AudioContext(),
      VF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      VG: (x0,x1) => { x0.step = x1 },
      VH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VI: (x0,x1) => x0.depthMask(x1),
      VJ: x0 => x0.canvas,
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: (string, times) => string.repeat(times),
      WC: (x0,x1,x2) => x0.lineTo(x1,x2),
      WD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      WE: (x0,x1) => { x0.buffer = x1 },
      WF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      WG: (x0,x1) => { x0.max = x1 },
      WH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WI: (x0,x1) => x0.cullFace(x1),
      WJ: x0 => x0.getSupportedExtensions(),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      XC: x0 => x0.closePath(),
      XD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      XE: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      XF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      XG: (x0,x1) => { x0.min = x1 },
      XH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XI: (x0,x1) => x0.frontFace(x1),
      XJ: x0 => x0.height,
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: x0 => x0.dotAll,
      YC: s => s.toUpperCase(),
      YD: x0 => x0.createBuffer(),
      YE: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      YF: o => o instanceof Int16Array,
      YG: x0 => x0.ownerDocument,
      YH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      YJ: x0 => x0.width,
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: x0 => x0.unicode,
      ZC: Object.is,
      ZD: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      ZE: x0 => x0.sampleRate,
      ZF: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      ZG: (x0,x1) => { x0.value = x1 },
      ZH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZI: (x0,x1) => x0.blendEquation(x1),
      ZJ: (x0,x1) => { x0.height = x1 },
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: x0 => x0.ignoreCase,
      aC: (x0,x1) => { x0.shadowBlur = x1 },
      aD: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      aE: x0 => x0.arrayBuffer(),
      aF: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      aG: (x0,x1) => x0.deleteFramebuffer(x1),
      aH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      aJ: x0 => x0.innerHeight,
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: x0 => x0.multiline,
      bC: (x0,x1) => { x0.shadowColor = x1 },
      bD: (x0,x1) => { x0.display = x1 },
      bE: (x0,x1) => x0.decodeAudioData(x1),
      bF: () => globalThis.WebGL2RenderingContext.REPEAT,
      bG: (x0,x1) => x0.deleteTexture(x1),
      bH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      bI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      bJ: (x0,x1) => { x0.width = x1 },
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: (string, token) => string.split(token),
      cC: (x0,x1) => { x0.textBaseline = x1 },
      cD: x0 => x0.style,
      cE: (x0,x1) => x0.warn(x1),
      cF: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      cG: (x0,x1) => x0.deleteRenderbuffer(x1),
      cH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      cI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      cJ: x0 => x0.innerWidth,
      d: (x0,x1) => x0.error(x1),
      dB: o => o instanceof Array,
      dC: (x0,x1) => { x0.textAlign = x1 },
      dD: (o, m, a) => o[m].apply(o, a),
      dE: x0 => x0.createConvolver(),
      dF: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      dG: (x0,x1) => x0.deleteProgram(x1),
      dH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      dI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      dJ: () => globalThis.window,
      e: () => globalThis.console,
      eB: (a, i) => a[i],
      eC: (x0,x1) => { x0.font = x1 },
      eD: x0 => new Array(x0),
      eE: x0 => x0.createBiquadFilter(),
      eF: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      eG: (x0,x1) => x0.deleteShader(x1),
      eH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      eI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      eJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      f: (x0,x1) => { x0.textContent = x1 },
      fB: (a, i, v) => a[i] = v,
      fC: (x0,x1) => x0.rotate(x1),
      fD: o => [o],
      fE: (x0,x1) => x0.disconnect(x1),
      fF: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      fG: x0 => x0.createProgram(),
      fH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      fJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: a => a.length,
      gC: (x0,x1) => { x0.fillStyle = x1 },
      gD: (o0, o1) => [o0, o1],
      gE: (x0,x1) => x0.createChannelSplitter(x1),
      gF: () => globalThis.WebGL2RenderingContext.LINEAR,
      gG: (x0,x1,x2) => x0.attachShader(x1,x2),
      gH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gI: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      gJ: x0 => x0.type,
      h: o => o,
      hB: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      hC: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      hD: (o0, o1, o2) => [o0, o1, o2],
      hE: (x0,x1) => x0.createChannelMerger(x1),
      hF: () => globalThis.WebGL2RenderingContext.NEAREST,
      hG: (x0,x1) => x0.linkProgram(x1),
      hH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      hJ: x0 => x0.reason,
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: (x0,x1,x2) => x0.setTimeout(x1,x2),
      iC: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      iD: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      iE: x0 => x0.frequency,
      iF: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      iG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      iH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iI: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      iJ: x0 => x0.message,
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: (x0,x1) => { x0.className = x1 },
      jC: (x0,x1,x2) => x0.scale(x1,x2),
      jD: (x0,x1,x2) => { x0[x1] = x2 },
      jE: (x0,x1) => { x0.type = x1 },
      jF: () => globalThis.WebGL2RenderingContext.RGBA8,
      jG: (x0,x1) => x0.getProgramInfoLog(x1),
      jH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jI: () => globalThis.WebGL2RenderingContext.ONE,
      jJ: () => globalThis.document,
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: s => s.trim(),
      kC: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      kD: (x0,x1) => x0.contains(x1),
      kE: x0 => x0.destination,
      kF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      kG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      kH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kI: () => globalThis.WebGL2RenderingContext.ZERO,
      l: o => o,
      lB: x0 => x0.createBufferSource(),
      lC: x0 => x0.devicePixelRatio,
      lD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      lE: (o, t) => typeof o === t,
      lF: o => o instanceof Uint8ClampedArray,
      lG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      lH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lI: () => globalThis.WebGL2RenderingContext.BLEND,
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: x0 => x0.createGain(),
      mC: x0 => x0.height,
      mD: x0 => x0.focus(),
      mE: x0 => globalThis.Object.keys(x0),
      mF: x0 => x0.data,
      mG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      mH: x0 => x0.display,
      mI: () => globalThis.WebGL2RenderingContext.CCW,
      n: f => f.dartFunction,
      nB: (x0,x1) => x0.connect(x1),
      nC: x0 => x0.width,
      nD: x0 => x0.className,
      nE: (o, p) => o[p],
      nF: x0 => x0.naturalHeight,
      nG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      nH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      nI: () => globalThis.WebGL2RenderingContext.BACK,
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oC: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      oD: x0 => x0.activeElement,
      oE: x0 => x0.decode(),
      oF: x0 => x0.naturalWidth,
      oG: (x0,x1) => x0.createShader(x1),
      oH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oI: () => globalThis.WebGL2RenderingContext.FRONT,
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: x0 => x0.start(),
      pC: (x0,x1) => x0.deleteBuffer(x1),
      pD: (x0,x1) => x0.querySelectorAll(x1),
      pE: (x0,x1) => x0.getContext(x1),
      pF: (x0,x1) => x0.createElement(x1),
      pG: (x0,x1,x2) => x0.shaderSource(x1,x2),
      pH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pI: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (x0,x1) => { x0.onended = x1 },
      qC: (x0,x1) => x0.deleteVertexArray(x1),
      qD: (x0,x1) => x0.item(x1),
      qE: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      qF: (x0,x1) => { x0.src = x1 },
      qG: (x0,x1) => x0.compileShader(x1),
      qH: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      qI: () => globalThis.WebGL2RenderingContext.NEVER,
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: x0 => x0.disconnect(),
      rC: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      rD: x0 => x0.length,
      rE: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      rF: x0 => x0.deltaY,
      rG: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      rH: x0 => x0.text(),
      rI: () => globalThis.WebGL2RenderingContext.ALWAYS,
      s: (l, r) => l === r,
      sB: x0 => x0.gain,
      sC: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      sD: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sE: (x0,x1) => x0.hasAttribute(x1),
      sF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sG: (x0,x1) => x0.getShaderInfoLog(x1),
      sH: x0 => x0.ok,
      sI: () => globalThis.WebGL2RenderingContext.LEQUAL,
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: (x0,x1) => { x0.value = x1 },
      tC: x0 => new Uint8Array(x0),
      tD: x0 => x0.preventDefault(),
      tE: (x0,x1,x2) => x0.bindTexture(x1,x2),
      tF: (x0,x1) => x0.appendChild(x1),
      tG: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: () => globalThis.WebGL2RenderingContext.LESS,
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: x0 => x0.playbackRate,
      uC: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      uD: x0 => x0.shiftKey,
      uE: (x0,x1) => x0.generateMipmap(x1),
      uF: x0 => x0.top,
      uG: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      uH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uI: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: (x0,x1) => { x0.buffer = x1 },
      vC: (t, s) => t.set(s),
      vD: x0 => x0.code,
      vE: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      vF: x0 => x0.clientY,
      vG: x0 => x0.createFramebuffer(),
      vH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vI: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      wC: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      wD: x0 => x0.defaultPrevented,
      wE: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      wF: x0 => x0.left,
      wG: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: x0 => x0.drawingBufferHeight,
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      xC: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      xD: x0 => x0.getGamepads(),
      xE: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      xF: x0 => x0.clientX,
      xG: (x0,x1) => x0.drawBuffers(x1),
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: x0 => x0.drawingBufferWidth,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: x0 => x0.listener,
      yC: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      yD: x0 => x0.value,
      yE: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      yF: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      yG: (x0,x1) => x0.readBuffer(x1),
      yH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yI: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: (x0,x1) => x0.getItem(x1),
      zC: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      zD: x0 => x0.pressed,
      zE: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      zF: Function.prototype.call.bind(String.prototype.toLowerCase),
      zG: x0 => x0.createRenderbuffer(),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: (x0,x1) => x0.clear(x1),

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
