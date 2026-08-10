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
      _106: x0 => x0.length,
      _108: (x0,x1) => x0[x1],
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
      _181: (x0,x1) => x0.exec(x1),
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
      _235: x0 => x0.index,
      _237: x0 => x0.flags,
      _238: x0 => x0.multiline,
      _239: x0 => x0.ignoreCase,
      _240: x0 => x0.unicode,
      _241: x0 => x0.dotAll,
      _242: (x0,x1) => { x0.lastIndex = x1 },
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
      _313: (x0,x1) => x0.hasAttribute(x1),
      _314: x0 => globalThis.Object.keys(x0),
      _315: (x0,x1) => x0.getElementById(x1),
      _316: x0 => x0.focus(),
      _317: (x0,x1,x2) => x0.toggle(x1,x2),
      _318: (x0,x1,x2) => x0.setProperty(x1,x2),
      _319: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._319(f,arguments.length,x0) }),
      _320: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _321: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._321(f,arguments.length,x0) }),
      _322: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._322(f,arguments.length,x0) }),
      _323: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._323(f,arguments.length,x0) }),
      _324: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._324(f,arguments.length,x0) }),
      _325: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._325(f,arguments.length,x0) }),
      _326: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._326(f,arguments.length,x0) }),
      _327: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._327(f,arguments.length,x0) }),
      _328: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._328(f,arguments.length,x0) }),
      _329: (x0,x1) => x0.requestAnimationFrame(x1),
      _330: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._330(f,arguments.length,x0) }),
      _331: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._331(f,arguments.length,x0) }),
      _332: x0 => x0.json(),
      _333: (x0,x1) => x0.contains(x1),
      _334: (x0,x1) => x0.querySelectorAll(x1),
      _335: (x0,x1) => x0.item(x1),
      _336: (x0,x1) => x0.removeAttribute(x1),
      _337: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._337(f,arguments.length,x0) }),
      _338: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      _339: (x0,x1) => x0.clear(x1),
      _340: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      _341: (x0,x1) => x0.cullFace(x1),
      _342: (x0,x1) => x0.getExtension(x1),
      _343: (x0,x1) => x0.getParameter(x1),
      _344: x0 => x0.createTexture(),
      _345: (x0,x1,x2) => x0.pixelStorei(x1,x2),
      _346: (x0,x1,x2,x3,x4,x5,x6) => x0.texImage2D(x1,x2,x3,x4,x5,x6),
      _347: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      _348: (x0,x1) => x0.generateMipmap(x1),
      _349: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      _350: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      _351: x0 => x0.getError(),
      _352: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      _353: (x0,x1) => x0.deleteTexture(x1),
      _354: (x0,x1) => x0.createShader(x1),
      _355: (x0,x1,x2) => x0.shaderSource(x1,x2),
      _356: (x0,x1) => x0.compileShader(x1),
      _357: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      _358: (x0,x1) => x0.getShaderInfoLog(x1),
      _359: x0 => x0.createProgram(),
      _360: (x0,x1,x2) => x0.attachShader(x1,x2),
      _361: (x0,x1) => x0.linkProgram(x1),
      _362: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      _363: (x0,x1) => x0.getProgramInfoLog(x1),
      _364: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      _365: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _366: x0 => x0.createRenderbuffer(),
      _367: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      _368: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      _369: (x0,x1,x2,x3,x4) => x0.renderbufferStorage(x1,x2,x3,x4),
      _370: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      _371: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      _372: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      _373: x0 => x0.createFramebuffer(),
      _374: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      _375: (x0,x1) => x0.drawBuffers(x1),
      _376: (x0,x1) => x0.checkFramebufferStatus(x1),
      _377: (x0,x1) => x0.readBuffer(x1),
      _378: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      _379: (x0,x1) => x0.deleteFramebuffer(x1),
      _380: (x0,x1) => x0.deleteRenderbuffer(x1),
      _381: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      _382: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._382(f,arguments.length,x0) }),
      _383: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._383(f,arguments.length,x0) }),
      _384: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._384(f,arguments.length,x0) }),
      _385: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._385(f,arguments.length,x0) }),
      _386: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._386(f,arguments.length,x0) }),
      _387: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._387(f,arguments.length,x0) }),
      _388: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._388(f,arguments.length,x0) }),
      _389: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._389(f,arguments.length,x0) }),
      _390: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._390(f,arguments.length,x0) }),
      _391: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._391(f,arguments.length,x0) }),
      _392: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._392(f,arguments.length,x0) }),
      _393: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._393(f,arguments.length,x0) }),
      _394: (x0,x1) => x0.removeChild(x1),
      _395: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._395(f,arguments.length,x0) }),
      _396: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._396(f,arguments.length,x0) }),
      _397: x0 => x0.getSupportedExtensions(),
      _398: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _399: x0 => x0.createQuery(),
      _400: (x0,x1,x2) => x0.beginQuery(x1,x2),
      _401: (x0,x1) => x0.endQuery(x1),
      _403: (x0,x1) => x0.deleteQuery(x1),
      _404: (x0,x1) => x0.depthFunc(x1),
      _405: (x0,x1) => x0.frontFace(x1),
      _406: (x0,x1) => x0.blendEquation(x1),
      _407: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      _408: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _409: (x0,x1) => x0.deleteShader(x1),
      _410: (x0,x1) => x0.deleteProgram(x1),
      _411: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._411(f,arguments.length,x0) }),
      _412: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._412(f,arguments.length,x0) }),
      _413: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._413(f,arguments.length,x0) }),
      _414: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._414(f,arguments.length,x0) }),
      _415: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._415(f,arguments.length,x0) }),
      _416: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._416(f,arguments.length,x0) }),
      _417: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._417(f,arguments.length,x0) }),
      _418: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._418(f,arguments.length,x0) }),
      _419: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._419(f,arguments.length,x0) }),
      _420: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._420(f,arguments.length,x0) }),
      _421: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._421(f,arguments.length,x0) }),
      _422: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._422(f,arguments.length,x0) }),
      _423: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._423(f,arguments.length,x0) }),
      _424: x0 => x0.remove(),
      _425: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._425(f,arguments.length,x0) }),
      _426: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._426(f,arguments.length,x0) }),
      _427: (module,f) => finalizeWrapper(f, function() { return module.exports._427(f,arguments.length) }),
      _428: (x0,x1,x2) => x0.setTimeout(x1,x2),
      _429: (module,f) => finalizeWrapper(f, function() { return module.exports._429(f,arguments.length) }),
      _430: (x0,x1) => x0.removeItem(x1),
      _431: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._431(f,arguments.length,x0) }),
      _432: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._432(f,arguments.length,x0) }),
      _433: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._433(f,arguments.length,x0) }),
      _434: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._434(f,arguments.length,x0) }),
      _435: x0 => x0.getGamepads(),
      _436: x0 => x0.createGain(),
      _437: x0 => x0.createConvolver(),
      _438: (x0,x1) => x0.connect(x1),
      _439: x0 => x0.createBiquadFilter(),
      _440: (x0,x1) => x0.disconnect(x1),
      _441: (x0,x1) => x0.createChannelSplitter(x1),
      _442: (x0,x1) => x0.createChannelMerger(x1),
      _443: x0 => x0.disconnect(),
      _444: (x0,x1,x2) => x0.connect(x1,x2),
      _445: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      _446: x0 => x0.resume(),
      _447: () => new AudioContext(),
      _448: x0 => x0.arrayBuffer(),
      _449: (x0,x1) => x0.decodeAudioData(x1),
      _450: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      _451: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      _452: x0 => x0.createBufferSource(),
      _453: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._453(f,arguments.length,x0) }),
      _454: x0 => x0.start(),
      _455: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._455(f,arguments.length,x0) }),
      _456: x0 => x0.createPanner(),
      _457: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      _458: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      _459: (x0,x1) => x0.cancelScheduledValues(x1),
      _460: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      _461: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      _462: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._462(f,arguments.length,x0) }),
      _464: o => o instanceof Array,
      _470: (a, s) => a.join(s),
      _473: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _474: a => a.length,
      _476: (a, i) => a[i],
      _477: (a, i, v) => a[i] = v,
      _482: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _483: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _484: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _485: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _486: o => o instanceof Uint8ClampedArray,
      _487: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _488: o => o instanceof Uint16Array,
      _489: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _490: o => o instanceof Int16Array,
      _491: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _492: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _493: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _494: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _495: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _498: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _499: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _500: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _501: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _503: (t, s) => t.set(s),
      _505: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _507: o => o.buffer,
      _508: o => o.byteOffset,
      _509: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _510: (b, o) => new DataView(b, o),
      _511: (b, o, l) => new DataView(b, o, l),
      _512: Function.prototype.call.bind(DataView.prototype.getUint8),
      _513: Function.prototype.call.bind(DataView.prototype.setUint8),
      _514: Function.prototype.call.bind(DataView.prototype.getInt8),
      _515: Function.prototype.call.bind(DataView.prototype.setInt8),
      _516: Function.prototype.call.bind(DataView.prototype.getUint16),
      _517: Function.prototype.call.bind(DataView.prototype.setUint16),
      _518: Function.prototype.call.bind(DataView.prototype.getInt16),
      _519: Function.prototype.call.bind(DataView.prototype.setInt16),
      _520: Function.prototype.call.bind(DataView.prototype.getUint32),
      _521: Function.prototype.call.bind(DataView.prototype.setUint32),
      _522: Function.prototype.call.bind(DataView.prototype.getInt32),
      _523: Function.prototype.call.bind(DataView.prototype.setInt32),
      _528: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _529: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _530: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _531: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _532: Function.prototype.call.bind(Number.prototype.toString),
      _533: Function.prototype.call.bind(BigInt.prototype.toString),
      _534: Function.prototype.call.bind(Number.prototype.toString),
      _535: (d, digits) => d.toFixed(digits),
      _651: x0 => x0.style,
      _1094: (x0,x1) => { x0.src = x1 },
      _1107: x0 => x0.width,
      _1109: x0 => x0.height,
      _1110: x0 => x0.naturalWidth,
      _1111: x0 => x0.naturalHeight,
      _1597: (x0,x1) => { x0.checked = x1 },
      _1598: x0 => x0.checked,
      _1601: (x0,x1) => { x0.disabled = x1 },
      _1621: (x0,x1) => { x0.max = x1 },
      _1625: (x0,x1) => { x0.min = x1 },
      _1645: (x0,x1) => { x0.step = x1 },
      _1647: (x0,x1) => { x0.type = x1 },
      _1651: (x0,x1) => { x0.value = x1 },
      _1652: x0 => x0.value,
      _1680: (x0,x1) => { x0.disabled = x1 },
      _1695: (x0,x1) => { x0.type = x1 },
      _1735: (x0,x1) => { x0.value = x1 },
      _1736: x0 => x0.value,
      _1755: (x0,x1) => { x0.value = x1 },
      _1933: (x0,x1) => { x0.width = x1 },
      _1934: x0 => x0.width,
      _1935: (x0,x1) => { x0.height = x1 },
      _1936: x0 => x0.height,
      _2065: x0 => x0.data,
      _2294: () => globalThis.window,
      _2330: x0 => x0.innerWidth,
      _2331: x0 => x0.innerHeight,
      _2346: x0 => x0.document,
      _2349: x0 => x0.location,
      _2369: x0 => x0.navigator,
      _2627: x0 => x0.localStorage,
      _2649: x0 => x0.search,
      _2799: x0 => x0.message,
      _2817: x0 => x0.reason,
      _4124: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      _4126: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      _4131: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      _4134: () => globalThis.WebGL2RenderingContext.ZERO,
      _4135: () => globalThis.WebGL2RenderingContext.ONE,
      _4138: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      _4139: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      _4140: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      _4141: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      _4145: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      _4149: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      _4150: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      _4160: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      _4161: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      _4164: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      _4165: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      _4166: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      _4170: () => globalThis.WebGL2RenderingContext.FRONT,
      _4171: () => globalThis.WebGL2RenderingContext.BACK,
      _4173: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      _4174: () => globalThis.WebGL2RenderingContext.BLEND,
      _4177: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      _4178: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      _4182: () => globalThis.WebGL2RenderingContext.NO_ERROR,
      _4188: () => globalThis.WebGL2RenderingContext.CCW,
      _4219: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      _4241: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      _4243: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      _4245: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      _4246: () => globalThis.WebGL2RenderingContext.FLOAT,
      _4250: () => globalThis.WebGL2RenderingContext.RGBA,
      _4256: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      _4257: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      _4258: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      _4267: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      _4274: () => globalThis.WebGL2RenderingContext.NEVER,
      _4275: () => globalThis.WebGL2RenderingContext.LESS,
      _4277: () => globalThis.WebGL2RenderingContext.LEQUAL,
      _4281: () => globalThis.WebGL2RenderingContext.ALWAYS,
      _4289: () => globalThis.WebGL2RenderingContext.VENDOR,
      _4290: () => globalThis.WebGL2RenderingContext.RENDERER,
      _4292: () => globalThis.WebGL2RenderingContext.NEAREST,
      _4293: () => globalThis.WebGL2RenderingContext.LINEAR,
      _4297: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      _4298: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      _4299: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      _4300: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      _4301: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      _4302: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      _4313: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      _4314: () => globalThis.WebGL2RenderingContext.TEXTURE1,
      _4320: () => globalThis.WebGL2RenderingContext.TEXTURE7,
      _4321: () => globalThis.WebGL2RenderingContext.TEXTURE8,
      _4322: () => globalThis.WebGL2RenderingContext.TEXTURE9,
      _4323: () => globalThis.WebGL2RenderingContext.TEXTURE10,
      _4324: () => globalThis.WebGL2RenderingContext.TEXTURE11,
      _4346: () => globalThis.WebGL2RenderingContext.REPEAT,
      _4347: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      _4373: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      _4380: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      _4381: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      _4384: () => globalThis.WebGL2RenderingContext.RGBA8,
      _4402: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      _4403: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      _4406: () => globalThis.WebGL2RenderingContext.NONE,
      _4407: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      _4416: () => globalThis.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL,
      _4449: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      _4503: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      _4507: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      _4571: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      _4572: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      _4576: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      _4577: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      _4593: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      _4830: x0 => x0.canvas,
      _4831: x0 => x0.drawingBufferWidth,
      _4832: x0 => x0.drawingBufferHeight,
      _5438: x0 => x0.destination,
      _5439: x0 => x0.sampleRate,
      _5440: x0 => x0.currentTime,
      _5441: x0 => x0.listener,
      _5442: x0 => x0.state,
      _5558: (x0,x1) => { x0.value = x1 },
      _5559: x0 => x0.value,
      _5567: (x0,x1) => { x0.onended = x1 },
      _5594: (x0,x1) => { x0.buffer = x1 },
      _5596: x0 => x0.playbackRate,
      _5598: (x0,x1) => { x0.loop = x1 },
      _5640: (x0,x1) => { x0.type = x1 },
      _5642: x0 => x0.frequency,
      _5671: (x0,x1) => { x0.buffer = x1 },
      _5706: x0 => x0.gain,
      _5751: (x0,x1) => { x0.panningModel = x1 },
      _5753: x0 => x0.positionX,
      _5754: x0 => x0.positionY,
      _5755: x0 => x0.positionZ,
      _5759: (x0,x1) => { x0.distanceModel = x1 },
      _5761: (x0,x1) => { x0.refDistance = x1 },
      _5763: (x0,x1) => { x0.maxDistance = x1 },
      _5765: (x0,x1) => { x0.rolloffFactor = x1 },
      _5767: (x0,x1) => { x0.coneInnerAngle = x1 },
      _6935: x0 => x0.type,
      _6946: x0 => x0.defaultPrevented,
      _6986: x0 => x0.length,
      _7051: x0 => x0.ownerDocument,
      _7055: x0 => x0.firstChild,
      _7061: (x0,x1) => { x0.textContent = x1 },
      _7066: () => globalThis.document,
      _7129: x0 => x0.documentElement,
      _7143: x0 => x0.body,
      _7179: x0 => x0.activeElement,
      _7487: (x0,x1) => { x0.id = x1 },
      _7489: (x0,x1) => { x0.className = x1 },
      _7490: x0 => x0.className,
      _7491: x0 => x0.classList,
      _7805: x0 => x0.code,
      _7808: x0 => x0.shiftKey,
      _7811: x0 => x0.repeat,
      _8576: x0 => x0.status,
      _8577: x0 => x0.ok,
      _8829: x0 => x0.matches,
      _9855: x0 => x0.id,
      _9857: x0 => x0.connected,
      _9859: x0 => x0.mapping,
      _9860: x0 => x0.axes,
      _9861: x0 => x0.buttons,
      _9863: x0 => x0.pressed,
      _9865: x0 => x0.value,
      _10521: (x0,x1) => { x0.display = x1 },
      _10522: x0 => x0.display,
      _12792: () => globalThis.console,

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
