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
      AC: a => a.length,
      AD: (x0,x1) => { x0.fillStyle = x1 },
      AE: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      AF: (x0,x1,x2) => x0.setProperty(x1,x2),
      AG: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      AH: (x0,x1) => x0.getShaderInfoLog(x1),
      AI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AJ: () => globalThis.WebGL2RenderingContext.BLEND,
      AK: (x0,x1) => { x0.width = x1 },
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BD: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      BE: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      BF: x0 => x0.classList,
      BG: (x0,x1,x2) => new DataView(x0,x1,x2),
      BH: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      BI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BJ: () => globalThis.WebGL2RenderingContext.CCW,
      BK: x0 => x0.innerWidth,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: x0 => x0.createPanner(),
      CD: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      CE: (x0,x1) => { x0.display = x1 },
      CF: x0 => x0.documentElement,
      CG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      CH: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      CI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CJ: () => globalThis.WebGL2RenderingContext.BACK,
      CK: () => globalThis.window,
      D: Function.prototype.call.bind(String.prototype.indexOf),
      DB: o => o.length,
      DC: x0 => x0.positionZ,
      DD: (x0,x1,x2) => x0.scale(x1,x2),
      DE: x0 => x0.style,
      DF: (x0,x1) => { x0.checked = x1 },
      DG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      DH: x0 => x0.createFramebuffer(),
      DI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DJ: () => globalThis.WebGL2RenderingContext.FRONT,
      DK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
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
      EC: x0 => x0.positionY,
      ED: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      EE: (o, m, a) => o[m].apply(o, a),
      EF: (x0,x1) => { x0.value = x1 },
      EG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      EH: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      EI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EJ: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      EK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: x0 => x0.positionX,
      FD: x0 => x0.devicePixelRatio,
      FE: x0 => new Array(x0),
      FF: (x0,x1,x2) => x0.connect(x1,x2),
      FG: o => o instanceof Int16Array,
      FH: (x0,x1) => x0.drawBuffers(x1),
      FI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FJ: () => globalThis.WebGL2RenderingContext.NEVER,
      FK: x0 => x0.type,
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: (x0,x1) => { x0.coneInnerAngle = x1 },
      GD: x0 => x0.height,
      GE: o => [o],
      GF: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      GG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      GH: (x0,x1) => x0.readBuffer(x1),
      GI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GJ: () => globalThis.WebGL2RenderingContext.ALWAYS,
      GK: x0 => x0.reason,
      H: (s, p, i) => s.lastIndexOf(p, i),
      HB: (string, times) => string.repeat(times),
      HC: (x0,x1) => { x0.maxDistance = x1 },
      HD: x0 => x0.width,
      HE: (o0, o1) => [o0, o1],
      HF: () => new AudioContext(),
      HG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      HH: x0 => x0.createRenderbuffer(),
      HI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HJ: () => globalThis.WebGL2RenderingContext.LEQUAL,
      HK: x0 => x0.message,
      I: Function.prototype.call.bind(Number.prototype.toString),
      IB: x0 => x0.createBufferSource(),
      IC: (x0,x1) => { x0.rolloffFactor = x1 },
      ID: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      IE: (o0, o1, o2) => [o0, o1, o2],
      IF: (x0,x1) => { x0.buffer = x1 },
      IG: () => globalThis.WebGL2RenderingContext.REPEAT,
      IH: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      II: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      IJ: () => globalThis.WebGL2RenderingContext.LESS,
      IK: () => globalThis.document,
      J: Function.prototype.call.bind(BigInt.prototype.toString),
      JB: x0 => x0.createGain(),
      JC: (x0,x1) => { x0.refDistance = x1 },
      JD: (x0,x1) => x0.deleteBuffer(x1),
      JE: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      JF: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      JG: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      JH: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      JI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JJ: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => x0.createStereoPanner(),
      KC: (x0,x1) => { x0.distanceModel = x1 },
      KD: (x0,x1) => x0.deleteVertexArray(x1),
      KE: (x0,x1,x2) => { x0[x1] = x2 },
      KF: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      KG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      KH: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      KI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KJ: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      L: o => o === undefined,
      LB: (x0,x1) => x0.connect(x1),
      LC: (x0,x1) => { x0.panningModel = x1 },
      LD: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      LE: (x0,x1) => x0.contains(x1),
      LF: x0 => x0.sampleRate,
      LG: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      LH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      LI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LJ: x0 => x0.drawingBufferHeight,
      M: o => String(o),
      MB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MC: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      MD: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      ME: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      MF: (x0,x1) => x0.decodeAudioData(x1),
      MG: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      MH: (x0,x1) => x0.checkFramebufferStatus(x1),
      MI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MJ: x0 => x0.drawingBufferWidth,
      N: (x0,x1) => x0.getElementById(x1),
      NB: o => o,
      NC: (x0,x1,x2) => x0.setTimeout(x1,x2),
      ND: x0 => new Uint8Array(x0),
      NE: x0 => x0.focus(),
      NF: (x0,x1) => x0.warn(x1),
      NG: () => globalThis.WebGL2RenderingContext.LINEAR,
      NH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      NI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NJ: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: (x0,x1) => x0.start(x1),
      OC: (x0,x1) => { x0.className = x1 },
      OD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      OE: x0 => x0.className,
      OF: x0 => x0.createConvolver(),
      OG: () => globalThis.WebGL2RenderingContext.NEAREST,
      OH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      OI: x0 => x0.display,
      OJ: (x0,x1) => x0.clear(x1),
      P: (x0,x1) => x0.matchMedia(x1),
      PB: x0 => x0.currentTime,
      PC: s => s.trim(),
      PD: Function.prototype.call.bind(DataView.prototype.setInt32),
      PE: x0 => x0.activeElement,
      PF: (x0,x1) => x0.disconnect(x1),
      PG: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      PH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      PI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: (x0,x1) => { x0.onended = x1 },
      QC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QD: Function.prototype.call.bind(DataView.prototype.setUint32),
      QE: (x0,x1) => x0.querySelectorAll(x1),
      QF: (x0,x1) => x0.createChannelSplitter(x1),
      QG: () => globalThis.WebGL2RenderingContext.RGBA8,
      QH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      QI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: x0 => x0.disconnect(),
      RC: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      RD: Function.prototype.call.bind(DataView.prototype.setInt16),
      RE: (x0,x1) => x0.item(x1),
      RF: (x0,x1) => x0.createChannelMerger(x1),
      RG: o => o instanceof Uint8ClampedArray,
      RH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      RI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      RJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: x0 => x0.pan,
      SC: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      SD: Function.prototype.call.bind(DataView.prototype.setUint16),
      SE: x0 => x0.length,
      SF: x0 => x0.destination,
      SG: x0 => x0.data,
      SH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      SI: () => typeof dartUseDateNowForTicks !== "undefined",
      SJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: x0 => x0.gain,
      TC: x0 => x0.listener,
      TD: Function.prototype.call.bind(DataView.prototype.setUint8),
      TE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TF: (o, t) => typeof o === t,
      TG: x0 => x0.naturalHeight,
      TH: () => globalThis.WebGL2RenderingContext.NONE,
      TI: () => Date.now(),
      TJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      U: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UB: (x0,x1) => { x0.value = x1 },
      UC: (x0,x1) => x0.getItem(x1),
      UD: Function.prototype.call.bind(DataView.prototype.setInt8),
      UE: x0 => x0.preventDefault(),
      UF: x0 => globalThis.Object.keys(x0),
      UG: x0 => x0.naturalWidth,
      UH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      UI: () => 1000 * performance.now(),
      UJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: x0 => x0.playbackRate,
      VC: (x0,x1,x2) => x0.setItem(x1,x2),
      VD: (t, s) => t.set(s),
      VE: x0 => x0.shiftKey,
      VF: (o, p) => o[p],
      VG: (x0,x1) => x0.createElement(x1),
      VH: (x0,x1) => x0.deleteQuery(x1),
      VI: (x0,x1) => x0.endQuery(x1),
      VJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: (x0,x1) => { x0.buffer = x1 },
      WC: (x0,x1) => x0.removeItem(x1),
      WD: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      WE: x0 => x0.code,
      WF: x0 => x0.decode(),
      WG: (x0,x1) => { x0.src = x1 },
      WH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      WJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: (x0,x1) => x0.cancelScheduledValues(x1),
      XC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      XD: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      XE: x0 => x0.defaultPrevented,
      XF: (x0,x1) => x0.getContext(x1),
      XG: x0 => x0.deltaY,
      XH: x0 => x0.body,
      XI: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      XJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      YC: x0 => x0.localStorage,
      YD: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      YE: x0 => x0.getGamepads(),
      YF: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      YG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YH: (a, s) => a.join(s),
      YI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      YJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      ZC: (s) => +s,
      ZD: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      ZE: x0 => x0.value,
      ZF: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      ZG: (x0,x1) => x0.appendChild(x1),
      ZH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      ZJ: x0 => x0.createQuery(),
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: x0 => x0.frequency,
      aC: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      aD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      aE: x0 => x0.pressed,
      aF: (x0,x1) => x0.hasAttribute(x1),
      aG: x0 => x0.top,
      aH: (x0,x1) => { x0.disabled = x1 },
      aI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      aJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: x0 => x0.value,
      bC: x0 => x0.getBoundingClientRect(),
      bD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      bE: x0 => x0.buttons,
      bF: (x0,x1,x2) => x0.bindTexture(x1,x2),
      bG: x0 => x0.clientY,
      bH: (x0,x1) => { x0.type = x1 },
      bI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      bJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: x0 => x0.createBiquadFilter(),
      cC: x0 => x0.restore(),
      cD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      cE: x0 => x0.axes,
      cF: (x0,x1) => x0.generateMipmap(x1),
      cG: x0 => x0.left,
      cH: (x0,x1) => { x0.id = x1 },
      cI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      cJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      d: (x0,x1) => x0.error(x1),
      dB: x0 => x0.start(),
      dC: x0 => x0.save(),
      dD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      dE: x0 => x0.id,
      dF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      dG: x0 => x0.clientX,
      dH: (x0,x1) => x0.removeChild(x1),
      dI: (x0,x1,x2) => x0.uniform1i(x1,x2),
      dJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      e: () => globalThis.console,
      eB: (x0,x1) => { x0.type = x1 },
      eC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      eD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      eE: x0 => x0.mapping,
      eF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      eG: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      eH: x0 => x0.firstChild,
      eI: (x0,x1) => x0.activeTexture(x1),
      eJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      f: (x0,x1) => { x0.textContent = x1 },
      fB: b => !!b,
      fC: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      fD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      fE: x0 => x0.connected,
      fF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      fG: x0 => x0.repeat,
      fH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      fJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: (x0,x1) => { x0.loop = x1 },
      gC: x0 => x0.beginPath(),
      gD: (b, o) => new DataView(b, o),
      gE: x0 => x0.navigator,
      gF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      gG: (x0,x1) => x0.getAttribute(x1),
      gH: x0 => x0.checked,
      gI: (x0,x1) => x0.useProgram(x1),
      gJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      h: o => o,
      hB: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      hC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      hD: (b, o, l) => new DataView(b, o, l),
      hE: (x0,x1) => x0.fetch(x1),
      hF: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      hG: x0 => x0.visibilityState,
      hH: (x0,x1) => { x0.disabled = x1 },
      hI: (x0,x1) => x0.enable(x1),
      hJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: x0 => x0.stop(),
      iC: x0 => x0.clip(),
      iD: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      iE: x0 => x0.json(),
      iF: () => globalThis.WebGL2RenderingContext.RGBA,
      iG: (x0,x1) => x0.deleteFramebuffer(x1),
      iH: (x0,x1) => { x0.type = x1 },
      iI: (x0,x1) => x0.disable(x1),
      iJ: x0 => x0.button,
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: Function.prototype.call.bind(String.prototype.toLowerCase),
      jC: (x0,x1,x2) => x0.translate(x1,x2),
      jD: x0 => new Uint16Array(x0),
      jE: x0 => x0.text(),
      jF: x0 => x0.createTexture(),
      jG: (x0,x1) => x0.deleteTexture(x1),
      jH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jI: (x0,x1) => x0.depthFunc(x1),
      jJ: x0 => x0.document,
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: Object.is,
      kC: x0 => x0.fill(),
      kD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      kE: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      kF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      kG: (x0,x1) => x0.deleteRenderbuffer(x1),
      kH: x0 => x0.value,
      kI: (x0,x1) => x0.depthMask(x1),
      kJ: x0 => x0.matches,
      l: o => o,
      lB: x0 => x0.state,
      lC: x0 => x0.stroke(),
      lD: o => o instanceof Uint16Array,
      lE: o => o.byteOffset,
      lF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      lG: (x0,x1) => x0.deleteProgram(x1),
      lH: (x0,x1) => { x0.step = x1 },
      lI: (x0,x1) => x0.cullFace(x1),
      lJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: (d, digits) => d.toFixed(digits),
      mC: (x0,x1) => { x0.lineWidth = x1 },
      mD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      mE: o => o.buffer,
      mF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      mG: (x0,x1) => x0.deleteShader(x1),
      mH: (x0,x1) => { x0.max = x1 },
      mI: (x0,x1) => x0.frontFace(x1),
      mJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      n: f => f.dartFunction,
      nB: (x0,x1) => x0.exec(x1),
      nC: (x0,x1) => { x0.strokeStyle = x1 },
      nD: (x0,x1) => x0.enableVertexAttribArray(x1),
      nE: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      nF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      nG: x0 => x0.createProgram(),
      nH: (x0,x1) => { x0.min = x1 },
      nI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      nJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: x0 => x0.length,
      oC: (x0,x1,x2) => x0.moveTo(x1,x2),
      oD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      oE: (x0,x1) => x0.test(x1),
      oF: (x0,x1) => x0.getParameter(x1),
      oG: (x0,x1,x2) => x0.attachShader(x1,x2),
      oH: x0 => x0.ownerDocument,
      oI: (x0,x1) => x0.blendEquation(x1),
      oJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: (x0,x1) => { x0.lastIndex = x1 },
      pC: (x0,x1,x2) => x0.lineTo(x1,x2),
      pD: () => globalThis.WebGL2RenderingContext.FLOAT,
      pE: x0 => x0.index,
      pF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      pG: (x0,x1) => x0.linkProgram(x1),
      pH: (x0,x1) => { x0.value = x1 },
      pI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      pJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      qC: x0 => x0.closePath(),
      qD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      qE: (x0,x1) => x0[x1],
      qF: o => Object.keys(o),
      qG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      qH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      qJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: o => o instanceof RegExp,
      rC: (x0,x1) => x0.measureText(x1),
      rD: (x0,x1) => x0.bindVertexArray(x1),
      rE: x0 => x0.flags,
      rF: (o, p) => o[p],
      rG: (x0,x1) => x0.getProgramInfoLog(x1),
      rH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      rJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      s: (l, r) => l === r,
      sB: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      sC: x0 => x0.width,
      sD: x0 => x0.createVertexArray(),
      sE: x0 => x0.arrayBuffer(),
      sF: x0 => new Int8Array(x0),
      sG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      sH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      sJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: x0 => x0.dotAll,
      tC: s => s.toUpperCase(),
      tD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      tE: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      tF: x0 => new Uint8ClampedArray(x0),
      tG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      tJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: x0 => x0.unicode,
      uC: (x0,x1) => { x0.shadowBlur = x1 },
      uD: x0 => new Float32Array(x0),
      uE: x0 => x0.status,
      uF: x0 => new Int16Array(x0),
      uG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      uH: x0 => x0.value,
      uI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      uJ: x0 => x0.canvas,
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: x0 => x0.ignoreCase,
      vC: (x0,x1) => { x0.shadowColor = x1 },
      vD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      vE: x0 => x0.ok,
      vF: x0 => new Int32Array(x0),
      vG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      vH: (x0,x1) => { x0.value = x1 },
      vI: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      vJ: x0 => x0.getSupportedExtensions(),
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: x0 => x0.multiline,
      wC: (x0,x1) => { x0.textBaseline = x1 },
      wD: Function.prototype.call.bind(DataView.prototype.setFloat64),
      wE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wF: x0 => new Uint32Array(x0),
      wG: (x0,x1) => x0.createShader(x1),
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      wJ: x0 => x0.height,
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: (string, token) => string.split(token),
      xC: (x0,x1) => { x0.textAlign = x1 },
      xD: Function.prototype.call.bind(DataView.prototype.setFloat32),
      xE: x0 => x0.resume(),
      xF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      xG: (x0,x1,x2) => x0.shaderSource(x1,x2),
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      xJ: x0 => x0.width,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: o => o instanceof Array,
      yC: (x0,x1) => { x0.font = x1 },
      yD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      yE: (x0,x1,x2) => x0.toggle(x1,x2),
      yF: x0 => new Float64Array(x0),
      yG: (x0,x1) => x0.compileShader(x1),
      yH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yI: () => globalThis.WebGL2RenderingContext.ONE,
      yJ: (x0,x1) => { x0.height = x1 },
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: (a, i) => a[i],
      zC: (x0,x1) => x0.rotate(x1),
      zD: x0 => x0.createBuffer(),
      zE: (x0,x1) => x0.contains(x1),
      zF: x0 => new ArrayBuffer(x0),
      zG: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: () => globalThis.WebGL2RenderingContext.ZERO,
      zJ: x0 => x0.innerHeight,

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
