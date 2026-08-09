// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `load-ids` option is passed. Each load ID maps to one
  //   or more wasm files as specified in the emitted JSON file. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It also takes a callback that should be invoked with the
  //   loaded module in a format supported by `WebAssembly.compile` or
  //   `WebAssembly.compileStreaming` and the result of using the JS 'import'
  //   API on the js file path. It should return a Promise that resolves when
  //   all the modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports,
      {loadDeferredModules, loadDynamicModule, loadDeferredId} = {}) {
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
            _4: (s) => +s,
      _8: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _9: () => typeof dartUseDateNowForTicks !== "undefined",
      _10: () => 1000 * performance.now(),
      _11: () => Date.now(),
      _12: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _29: s => JSON.stringify(s),
      _30: s => printToConsole(s),
      _31: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      _32: (o, p, r) => o.replaceAll(p, () => r),
      _34: Function.prototype.call.bind(String.prototype.toLowerCase),
      _35: s => s.toUpperCase(),
      _36: s => s.trim(),
      _39: (string, times) => string.repeat(times),
      _40: Function.prototype.call.bind(String.prototype.indexOf),
      _41: (s, p, i) => s.lastIndexOf(p, i),
      _42: (string, token) => string.split(token),
      _43: Object.is,
      _47: (o, t) => typeof o === t,
      _49: o => Object.keys(o),
      _104: x0 => new Array(x0),
      _109: (x0,x1,x2) => { x0[x1] = x2 },
      _113: (x0,x1,x2) => new DataView(x0,x1,x2),
      _115: x0 => new Int8Array(x0),
      _116: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _117: x0 => new Uint8Array(x0),
      _119: x0 => new Uint8ClampedArray(x0),
      _121: x0 => new Int16Array(x0),
      _123: x0 => new Uint16Array(x0),
      _125: x0 => new Int32Array(x0),
      _127: x0 => new Uint32Array(x0),
      _129: x0 => new Float32Array(x0),
      _131: x0 => new Float64Array(x0),
      _156: x0 => x0.random(),
      _159: () => globalThis.Math,
      _172: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _176: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _178: () => new Error().stack,
      _179: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _180: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _182: (x0,x1) => x0.test(x1),
      _185: o => o === undefined,
      _187: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _189: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _190: o => o instanceof RegExp,
      _191: (l, r) => l === r,
      _192: o => o,
      _193: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      _194: o => o,
      _195: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      _196: o => o,
      _197: b => !!b,
      _198: o => o.length,
      _200: (o, i) => o[i],
      _201: f => f.dartFunction,
      _208: (o, p) => o[p],
      _210: (o, m, a) => o[m].apply(o, a),
      _212: o => String(o),
      _213: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      _214: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._214(f,arguments.length,x0) }),
      _215: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._215(f,arguments.length,x0,x1) }),
      _216: o => {
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
      _217: o => [o],
      _218: (o0, o1) => [o0, o1],
      _219: (o0, o1, o2) => [o0, o1, o2],
      _220: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _221: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      _222: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _223: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _224: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _228: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _232: x0 => new ArrayBuffer(x0),
      _237: x0 => x0.flags,
      _244: (o, p) => o[p],
      _253: (x0,x1) => x0.createElement(x1),
      _260: x0 => x0.preventDefault(),
      _266: (x0,x1) => x0.getContext(x1),
      _271: (x0,x1) => x0.appendChild(x1),
      _273: (x0,x1) => x0.getItem(x1),
      _274: (x0,x1,x2) => x0.setItem(x1,x2),
      _275: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      _276: x0 => x0.createVertexArray(),
      _277: (x0,x1) => x0.useProgram(x1),
      _278: (x0,x1) => x0.activeTexture(x1),
      _279: (x0,x1,x2) => x0.bindTexture(x1,x2),
      _280: (x0,x1,x2) => x0.uniform1i(x1,x2),
      _281: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      _282: (x0,x1,x2) => x0.uniform1f(x1,x2),
      _283: (x0,x1) => x0.bindVertexArray(x1),
      _284: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      _285: (x0,x1) => x0.matchMedia(x1),
      _286: (x0,x1) => x0.fetch(x1),
      _287: x0 => x0.text(),
      _288: (x0,x1) => x0.error(x1),
      _289: (x0,x1) => x0.log(x1),
      _290: x0 => x0.createBuffer(),
      _291: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      _292: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      _293: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      _294: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      _295: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      _296: (x0,x1) => x0.deleteBuffer(x1),
      _297: (x0,x1) => x0.deleteVertexArray(x1),
      _298: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      _299: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      _300: (x0,x1) => x0.enable(x1),
      _301: (x0,x1) => x0.depthMask(x1),
      _302: (x0,x1) => x0.disable(x1),
      _303: (x0,x1,x2) => x0.blendFunc(x1,x2),
      _304: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      _305: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      _306: (x0,x1) => x0.enableVertexAttribArray(x1),
      _308: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _309: x0 => x0.decode(),
      _310: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      _311: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      _312: (x0,x1) => x0.warn(x1),
      _313: x0 => globalThis.Object.keys(x0),
      _314: (x0,x1) => x0.getElementById(x1),
      _315: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._315(f,arguments.length,x0) }),
      _316: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _317: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._317(f,arguments.length,x0) }),
      _318: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._318(f,arguments.length,x0) }),
      _319: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._319(f,arguments.length,x0) }),
      _320: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._320(f,arguments.length,x0) }),
      _321: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._321(f,arguments.length,x0) }),
      _322: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._322(f,arguments.length,x0) }),
      _323: (x0,x1) => x0.requestAnimationFrame(x1),
      _324: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._324(f,arguments.length,x0) }),
      _325: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._325(f,arguments.length,x0) }),
      _326: x0 => x0.json(),
      _327: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._327(f,arguments.length,x0) }),
      _328: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      _329: (x0,x1) => x0.clear(x1),
      _330: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      _331: (x0,x1) => x0.cullFace(x1),
      _332: (x0,x1) => x0.getExtension(x1),
      _333: (x0,x1) => x0.getParameter(x1),
      _334: x0 => x0.createTexture(),
      _335: (x0,x1,x2) => x0.pixelStorei(x1,x2),
      _336: (x0,x1,x2,x3,x4,x5,x6) => x0.texImage2D(x1,x2,x3,x4,x5,x6),
      _337: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      _338: (x0,x1) => x0.generateMipmap(x1),
      _339: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      _340: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      _341: x0 => x0.getError(),
      _342: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      _343: (x0,x1) => x0.deleteTexture(x1),
      _344: (x0,x1) => x0.createShader(x1),
      _345: (x0,x1,x2) => x0.shaderSource(x1,x2),
      _346: (x0,x1) => x0.compileShader(x1),
      _347: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      _348: (x0,x1) => x0.getShaderInfoLog(x1),
      _349: x0 => x0.createProgram(),
      _350: (x0,x1,x2) => x0.attachShader(x1,x2),
      _351: (x0,x1) => x0.linkProgram(x1),
      _352: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      _353: (x0,x1) => x0.getProgramInfoLog(x1),
      _354: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      _355: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _356: x0 => x0.createRenderbuffer(),
      _357: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      _358: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      _359: (x0,x1,x2,x3,x4) => x0.renderbufferStorage(x1,x2,x3,x4),
      _360: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      _361: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      _362: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      _363: x0 => x0.createFramebuffer(),
      _364: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      _365: (x0,x1) => x0.drawBuffers(x1),
      _366: (x0,x1) => x0.checkFramebufferStatus(x1),
      _367: (x0,x1) => x0.readBuffer(x1),
      _368: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      _369: (x0,x1) => x0.deleteFramebuffer(x1),
      _370: (x0,x1) => x0.deleteRenderbuffer(x1),
      _371: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      _372: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._372(f,arguments.length,x0) }),
      _373: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._373(f,arguments.length,x0) }),
      _374: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _375: (x0,x1) => x0.depthFunc(x1),
      _376: (x0,x1) => x0.frontFace(x1),
      _377: (x0,x1) => x0.blendEquation(x1),
      _378: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _379: (x0,x1) => x0.deleteShader(x1),
      _380: (x0,x1) => x0.deleteProgram(x1),
      _381: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._381(f,arguments.length,x0) }),
      _382: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._382(f,arguments.length,x0) }),
      _383: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._383(f,arguments.length,x0) }),
      _384: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._384(f,arguments.length,x0) }),
      _385: (x0,x1,x2) => x0.setProperty(x1,x2),
      _386: (x0,x1) => x0.removeAttribute(x1),
      _387: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._387(f,arguments.length,x0) }),
      _388: x0 => x0.focus(),
      _389: (x0,x1) => x0.querySelectorAll(x1),
      _390: (x0,x1) => x0.item(x1),
      _391: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._391(f,arguments.length,x0) }),
      _392: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._392(f,arguments.length,x0) }),
      _393: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._393(f,arguments.length,x0) }),
      _394: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._394(f,arguments.length,x0) }),
      _395: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._395(f,arguments.length,x0) }),
      _396: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._396(f,arguments.length,x0) }),
      _397: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._397(f,arguments.length,x0) }),
      _398: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._398(f,arguments.length,x0) }),
      _399: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._399(f,arguments.length,x0) }),
      _400: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._400(f,arguments.length,x0) }),
      _401: (x0,x1,x2) => x0.setTimeout(x1,x2),
      _402: (x0,x1) => x0.removeItem(x1),
      _403: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._403(f,arguments.length,x0) }),
      _404: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._404(f,arguments.length,x0) }),
      _405: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._405(f,arguments.length,x0) }),
      _406: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._406(f,arguments.length,x0) }),
      _407: x0 => x0.createGain(),
      _408: x0 => x0.createConvolver(),
      _409: (x0,x1) => x0.connect(x1),
      _410: x0 => x0.createBiquadFilter(),
      _411: (x0,x1) => x0.disconnect(x1),
      _412: x0 => x0.resume(),
      _413: () => new AudioContext(),
      _414: x0 => x0.arrayBuffer(),
      _415: (x0,x1) => x0.decodeAudioData(x1),
      _416: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      _417: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      _418: x0 => x0.createBufferSource(),
      _419: x0 => x0.disconnect(),
      _420: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._420(f,arguments.length,x0) }),
      _421: x0 => x0.start(),
      _422: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._422(f,arguments.length,x0) }),
      _423: x0 => x0.createPanner(),
      _424: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      _425: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      _426: (x0,x1) => x0.cancelScheduledValues(x1),
      _427: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      _428: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      _430: o => o instanceof Array,
      _439: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _440: a => a.length,
      _442: (a, i) => a[i],
      _443: (a, i, v) => a[i] = v,
      _448: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _449: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _450: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _451: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _452: o => o instanceof Uint8ClampedArray,
      _453: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _454: o => o instanceof Uint16Array,
      _455: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _456: o => o instanceof Int16Array,
      _457: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _458: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _459: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _460: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _461: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _464: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _465: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _466: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _467: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _469: (t, s) => t.set(s),
      _471: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _473: o => o.buffer,
      _474: o => o.byteOffset,
      _475: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _476: (b, o) => new DataView(b, o),
      _477: (b, o, l) => new DataView(b, o, l),
      _478: Function.prototype.call.bind(DataView.prototype.getUint8),
      _479: Function.prototype.call.bind(DataView.prototype.setUint8),
      _480: Function.prototype.call.bind(DataView.prototype.getInt8),
      _481: Function.prototype.call.bind(DataView.prototype.setInt8),
      _482: Function.prototype.call.bind(DataView.prototype.getUint16),
      _483: Function.prototype.call.bind(DataView.prototype.setUint16),
      _484: Function.prototype.call.bind(DataView.prototype.getInt16),
      _485: Function.prototype.call.bind(DataView.prototype.setInt16),
      _486: Function.prototype.call.bind(DataView.prototype.getUint32),
      _487: Function.prototype.call.bind(DataView.prototype.setUint32),
      _488: Function.prototype.call.bind(DataView.prototype.getInt32),
      _489: Function.prototype.call.bind(DataView.prototype.setInt32),
      _494: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _495: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _496: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _497: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _498: Function.prototype.call.bind(Number.prototype.toString),
      _499: Function.prototype.call.bind(BigInt.prototype.toString),
      _500: Function.prototype.call.bind(Number.prototype.toString),
      _501: (d, digits) => d.toFixed(digits),
      _617: x0 => x0.style,
      _1060: (x0,x1) => { x0.src = x1 },
      _1073: x0 => x0.width,
      _1075: x0 => x0.height,
      _1076: x0 => x0.naturalWidth,
      _1077: x0 => x0.naturalHeight,
      _1564: x0 => x0.checked,
      _1587: (x0,x1) => { x0.max = x1 },
      _1591: (x0,x1) => { x0.min = x1 },
      _1611: (x0,x1) => { x0.step = x1 },
      _1613: (x0,x1) => { x0.type = x1 },
      _1617: (x0,x1) => { x0.value = x1 },
      _1618: x0 => x0.value,
      _1899: (x0,x1) => { x0.width = x1 },
      _1900: x0 => x0.width,
      _1901: (x0,x1) => { x0.height = x1 },
      _1902: x0 => x0.height,
      _2031: x0 => x0.data,
      _2260: () => globalThis.window,
      _2296: x0 => x0.innerWidth,
      _2297: x0 => x0.innerHeight,
      _2312: x0 => x0.document,
      _2315: x0 => x0.location,
      _2593: x0 => x0.localStorage,
      _2615: x0 => x0.search,
      _2765: x0 => x0.message,
      _2783: x0 => x0.reason,
      _4091: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      _4093: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      _4098: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      _4101: () => globalThis.WebGL2RenderingContext.ZERO,
      _4102: () => globalThis.WebGL2RenderingContext.ONE,
      _4105: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      _4106: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      _4107: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      _4108: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      _4112: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      _4116: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      _4117: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      _4127: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      _4128: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      _4131: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      _4132: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      _4133: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      _4137: () => globalThis.WebGL2RenderingContext.FRONT,
      _4138: () => globalThis.WebGL2RenderingContext.BACK,
      _4140: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      _4141: () => globalThis.WebGL2RenderingContext.BLEND,
      _4144: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      _4145: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      _4149: () => globalThis.WebGL2RenderingContext.NO_ERROR,
      _4155: () => globalThis.WebGL2RenderingContext.CCW,
      _4186: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      _4208: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      _4210: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      _4213: () => globalThis.WebGL2RenderingContext.FLOAT,
      _4217: () => globalThis.WebGL2RenderingContext.RGBA,
      _4223: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      _4224: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      _4225: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      _4234: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      _4241: () => globalThis.WebGL2RenderingContext.NEVER,
      _4242: () => globalThis.WebGL2RenderingContext.LESS,
      _4244: () => globalThis.WebGL2RenderingContext.LEQUAL,
      _4248: () => globalThis.WebGL2RenderingContext.ALWAYS,
      _4256: () => globalThis.WebGL2RenderingContext.VENDOR,
      _4257: () => globalThis.WebGL2RenderingContext.RENDERER,
      _4259: () => globalThis.WebGL2RenderingContext.NEAREST,
      _4260: () => globalThis.WebGL2RenderingContext.LINEAR,
      _4264: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      _4265: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      _4266: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      _4267: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      _4268: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      _4269: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      _4280: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      _4281: () => globalThis.WebGL2RenderingContext.TEXTURE1,
      _4287: () => globalThis.WebGL2RenderingContext.TEXTURE7,
      _4288: () => globalThis.WebGL2RenderingContext.TEXTURE8,
      _4289: () => globalThis.WebGL2RenderingContext.TEXTURE9,
      _4290: () => globalThis.WebGL2RenderingContext.TEXTURE10,
      _4291: () => globalThis.WebGL2RenderingContext.TEXTURE11,
      _4313: () => globalThis.WebGL2RenderingContext.REPEAT,
      _4314: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      _4340: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      _4347: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      _4348: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      _4351: () => globalThis.WebGL2RenderingContext.RGBA8,
      _4369: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      _4370: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      _4373: () => globalThis.WebGL2RenderingContext.NONE,
      _4374: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      _4383: () => globalThis.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL,
      _4416: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      _4470: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      _4474: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      _4538: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      _4539: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      _4543: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      _4544: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      _4560: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      _4804: x0 => x0.canvas,
      _4805: x0 => x0.drawingBufferWidth,
      _4806: x0 => x0.drawingBufferHeight,
      _5414: x0 => x0.destination,
      _5415: x0 => x0.sampleRate,
      _5416: x0 => x0.currentTime,
      _5417: x0 => x0.listener,
      _5418: x0 => x0.state,
      _5535: (x0,x1) => { x0.value = x1 },
      _5536: x0 => x0.value,
      _5544: (x0,x1) => { x0.onended = x1 },
      _5571: (x0,x1) => { x0.buffer = x1 },
      _5573: x0 => x0.playbackRate,
      _5617: (x0,x1) => { x0.type = x1 },
      _5619: x0 => x0.frequency,
      _5648: (x0,x1) => { x0.buffer = x1 },
      _5683: x0 => x0.gain,
      _5728: (x0,x1) => { x0.panningModel = x1 },
      _5730: x0 => x0.positionX,
      _5731: x0 => x0.positionY,
      _5732: x0 => x0.positionZ,
      _5736: (x0,x1) => { x0.distanceModel = x1 },
      _5738: (x0,x1) => { x0.refDistance = x1 },
      _5740: (x0,x1) => { x0.maxDistance = x1 },
      _5742: (x0,x1) => { x0.rolloffFactor = x1 },
      _5744: (x0,x1) => { x0.coneInnerAngle = x1 },
      _6912: x0 => x0.type,
      _6923: x0 => x0.defaultPrevented,
      _6963: x0 => x0.length,
      _7040: (x0,x1) => { x0.textContent = x1 },
      _7045: () => globalThis.document,
      _7108: x0 => x0.documentElement,
      _7122: x0 => x0.body,
      _7158: x0 => x0.activeElement,
      _7468: (x0,x1) => { x0.id = x1 },
      _7470: (x0,x1) => { x0.className = x1 },
      _7471: x0 => x0.className,
      _7787: x0 => x0.code,
      _7790: x0 => x0.shiftKey,
      _7793: x0 => x0.repeat,
      _8558: x0 => x0.status,
      _8559: x0 => x0.ok,
      _8811: x0 => x0.matches,
      _10503: (x0,x1) => { x0.display = x1 },
      _10504: x0 => x0.display,
      _12774: () => globalThis.console,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
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
    dartInstance.exports.$setThisModule(dartInstance);

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
