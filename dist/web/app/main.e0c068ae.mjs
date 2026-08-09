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
      _327: (x0,x1,x2) => x0.setProperty(x1,x2),
      _328: (x0,x1,x2) => x0.toggle(x1,x2),
      _329: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._329(f,arguments.length,x0) }),
      _330: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      _331: (x0,x1) => x0.clear(x1),
      _332: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      _333: (x0,x1) => x0.cullFace(x1),
      _334: (x0,x1) => x0.getExtension(x1),
      _335: (x0,x1) => x0.getParameter(x1),
      _336: x0 => x0.createTexture(),
      _337: (x0,x1,x2) => x0.pixelStorei(x1,x2),
      _338: (x0,x1,x2,x3,x4,x5,x6) => x0.texImage2D(x1,x2,x3,x4,x5,x6),
      _339: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      _340: (x0,x1) => x0.generateMipmap(x1),
      _341: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      _342: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      _343: x0 => x0.getError(),
      _344: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      _345: (x0,x1) => x0.deleteTexture(x1),
      _346: (x0,x1) => x0.createShader(x1),
      _347: (x0,x1,x2) => x0.shaderSource(x1,x2),
      _348: (x0,x1) => x0.compileShader(x1),
      _349: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      _350: (x0,x1) => x0.getShaderInfoLog(x1),
      _351: x0 => x0.createProgram(),
      _352: (x0,x1,x2) => x0.attachShader(x1,x2),
      _353: (x0,x1) => x0.linkProgram(x1),
      _354: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      _355: (x0,x1) => x0.getProgramInfoLog(x1),
      _356: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      _357: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _358: x0 => x0.createRenderbuffer(),
      _359: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      _360: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      _361: (x0,x1,x2,x3,x4) => x0.renderbufferStorage(x1,x2,x3,x4),
      _362: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      _363: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      _364: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      _365: x0 => x0.createFramebuffer(),
      _366: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      _367: (x0,x1) => x0.drawBuffers(x1),
      _368: (x0,x1) => x0.checkFramebufferStatus(x1),
      _369: (x0,x1) => x0.readBuffer(x1),
      _370: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      _371: (x0,x1) => x0.deleteFramebuffer(x1),
      _372: (x0,x1) => x0.deleteRenderbuffer(x1),
      _373: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      _374: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._374(f,arguments.length,x0) }),
      _375: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._375(f,arguments.length,x0) }),
      _376: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _377: (x0,x1) => x0.depthFunc(x1),
      _378: (x0,x1) => x0.frontFace(x1),
      _379: (x0,x1) => x0.blendEquation(x1),
      _380: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _381: (x0,x1) => x0.deleteShader(x1),
      _382: (x0,x1) => x0.deleteProgram(x1),
      _383: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._383(f,arguments.length,x0) }),
      _384: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._384(f,arguments.length,x0) }),
      _385: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._385(f,arguments.length,x0) }),
      _386: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._386(f,arguments.length,x0) }),
      _387: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._387(f,arguments.length,x0) }),
      _388: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._388(f,arguments.length,x0) }),
      _389: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._389(f,arguments.length,x0) }),
      _390: (x0,x1) => x0.removeAttribute(x1),
      _391: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._391(f,arguments.length,x0) }),
      _392: x0 => x0.focus(),
      _393: (x0,x1) => x0.querySelectorAll(x1),
      _394: (x0,x1) => x0.item(x1),
      _395: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._395(f,arguments.length,x0) }),
      _396: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._396(f,arguments.length,x0) }),
      _397: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._397(f,arguments.length,x0) }),
      _398: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._398(f,arguments.length,x0) }),
      _399: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._399(f,arguments.length,x0) }),
      _400: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._400(f,arguments.length,x0) }),
      _401: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._401(f,arguments.length,x0) }),
      _402: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._402(f,arguments.length,x0) }),
      _403: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._403(f,arguments.length,x0) }),
      _404: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._404(f,arguments.length,x0) }),
      _405: (x0,x1,x2) => x0.setTimeout(x1,x2),
      _406: (x0,x1) => x0.removeItem(x1),
      _407: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._407(f,arguments.length,x0) }),
      _408: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._408(f,arguments.length,x0) }),
      _409: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._409(f,arguments.length,x0) }),
      _410: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._410(f,arguments.length,x0) }),
      _411: x0 => x0.createGain(),
      _412: x0 => x0.createConvolver(),
      _413: (x0,x1) => x0.connect(x1),
      _414: x0 => x0.createBiquadFilter(),
      _415: (x0,x1) => x0.disconnect(x1),
      _416: (x0,x1) => x0.createChannelSplitter(x1),
      _417: (x0,x1) => x0.createChannelMerger(x1),
      _418: x0 => x0.disconnect(),
      _419: (x0,x1,x2) => x0.connect(x1,x2),
      _420: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      _421: x0 => x0.resume(),
      _422: () => new AudioContext(),
      _423: x0 => x0.arrayBuffer(),
      _424: (x0,x1) => x0.decodeAudioData(x1),
      _425: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      _426: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      _427: x0 => x0.createBufferSource(),
      _428: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._428(f,arguments.length,x0) }),
      _429: x0 => x0.start(),
      _430: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._430(f,arguments.length,x0) }),
      _431: x0 => x0.createPanner(),
      _432: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      _433: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      _434: (x0,x1) => x0.cancelScheduledValues(x1),
      _435: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      _436: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      _437: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._437(f,arguments.length,x0) }),
      _439: o => o instanceof Array,
      _448: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _449: a => a.length,
      _451: (a, i) => a[i],
      _452: (a, i, v) => a[i] = v,
      _457: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _458: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _459: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _460: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _461: o => o instanceof Uint8ClampedArray,
      _462: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _463: o => o instanceof Uint16Array,
      _464: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _465: o => o instanceof Int16Array,
      _466: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _467: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _468: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _469: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _470: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _473: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _474: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _475: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _476: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _478: (t, s) => t.set(s),
      _480: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _482: o => o.buffer,
      _483: o => o.byteOffset,
      _484: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _485: (b, o) => new DataView(b, o),
      _486: (b, o, l) => new DataView(b, o, l),
      _487: Function.prototype.call.bind(DataView.prototype.getUint8),
      _488: Function.prototype.call.bind(DataView.prototype.setUint8),
      _489: Function.prototype.call.bind(DataView.prototype.getInt8),
      _490: Function.prototype.call.bind(DataView.prototype.setInt8),
      _491: Function.prototype.call.bind(DataView.prototype.getUint16),
      _492: Function.prototype.call.bind(DataView.prototype.setUint16),
      _493: Function.prototype.call.bind(DataView.prototype.getInt16),
      _494: Function.prototype.call.bind(DataView.prototype.setInt16),
      _495: Function.prototype.call.bind(DataView.prototype.getUint32),
      _496: Function.prototype.call.bind(DataView.prototype.setUint32),
      _497: Function.prototype.call.bind(DataView.prototype.getInt32),
      _498: Function.prototype.call.bind(DataView.prototype.setInt32),
      _503: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _504: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _505: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _506: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _507: Function.prototype.call.bind(Number.prototype.toString),
      _508: Function.prototype.call.bind(BigInt.prototype.toString),
      _509: Function.prototype.call.bind(Number.prototype.toString),
      _510: (d, digits) => d.toFixed(digits),
      _626: x0 => x0.style,
      _1069: (x0,x1) => { x0.src = x1 },
      _1082: x0 => x0.width,
      _1084: x0 => x0.height,
      _1085: x0 => x0.naturalWidth,
      _1086: x0 => x0.naturalHeight,
      _1572: (x0,x1) => { x0.checked = x1 },
      _1573: x0 => x0.checked,
      _1596: (x0,x1) => { x0.max = x1 },
      _1600: (x0,x1) => { x0.min = x1 },
      _1620: (x0,x1) => { x0.step = x1 },
      _1622: (x0,x1) => { x0.type = x1 },
      _1626: (x0,x1) => { x0.value = x1 },
      _1627: x0 => x0.value,
      _1908: (x0,x1) => { x0.width = x1 },
      _1909: x0 => x0.width,
      _1910: (x0,x1) => { x0.height = x1 },
      _1911: x0 => x0.height,
      _2040: x0 => x0.data,
      _2269: () => globalThis.window,
      _2305: x0 => x0.innerWidth,
      _2306: x0 => x0.innerHeight,
      _2321: x0 => x0.document,
      _2324: x0 => x0.location,
      _2602: x0 => x0.localStorage,
      _2624: x0 => x0.search,
      _2774: x0 => x0.message,
      _2792: x0 => x0.reason,
      _4100: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      _4102: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      _4107: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      _4110: () => globalThis.WebGL2RenderingContext.ZERO,
      _4111: () => globalThis.WebGL2RenderingContext.ONE,
      _4114: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      _4115: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      _4116: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      _4117: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      _4121: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      _4125: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      _4126: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      _4136: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      _4137: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      _4140: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      _4141: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      _4142: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      _4146: () => globalThis.WebGL2RenderingContext.FRONT,
      _4147: () => globalThis.WebGL2RenderingContext.BACK,
      _4149: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      _4150: () => globalThis.WebGL2RenderingContext.BLEND,
      _4153: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      _4154: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      _4158: () => globalThis.WebGL2RenderingContext.NO_ERROR,
      _4164: () => globalThis.WebGL2RenderingContext.CCW,
      _4195: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      _4217: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      _4219: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      _4222: () => globalThis.WebGL2RenderingContext.FLOAT,
      _4226: () => globalThis.WebGL2RenderingContext.RGBA,
      _4232: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      _4233: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      _4234: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      _4243: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      _4250: () => globalThis.WebGL2RenderingContext.NEVER,
      _4251: () => globalThis.WebGL2RenderingContext.LESS,
      _4253: () => globalThis.WebGL2RenderingContext.LEQUAL,
      _4257: () => globalThis.WebGL2RenderingContext.ALWAYS,
      _4265: () => globalThis.WebGL2RenderingContext.VENDOR,
      _4266: () => globalThis.WebGL2RenderingContext.RENDERER,
      _4268: () => globalThis.WebGL2RenderingContext.NEAREST,
      _4269: () => globalThis.WebGL2RenderingContext.LINEAR,
      _4273: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      _4274: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      _4275: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      _4276: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      _4277: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      _4278: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      _4289: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      _4290: () => globalThis.WebGL2RenderingContext.TEXTURE1,
      _4296: () => globalThis.WebGL2RenderingContext.TEXTURE7,
      _4297: () => globalThis.WebGL2RenderingContext.TEXTURE8,
      _4298: () => globalThis.WebGL2RenderingContext.TEXTURE9,
      _4299: () => globalThis.WebGL2RenderingContext.TEXTURE10,
      _4300: () => globalThis.WebGL2RenderingContext.TEXTURE11,
      _4322: () => globalThis.WebGL2RenderingContext.REPEAT,
      _4323: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      _4349: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      _4356: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      _4357: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      _4360: () => globalThis.WebGL2RenderingContext.RGBA8,
      _4378: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      _4379: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      _4382: () => globalThis.WebGL2RenderingContext.NONE,
      _4383: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      _4392: () => globalThis.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL,
      _4425: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      _4479: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      _4483: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      _4547: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      _4548: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      _4552: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      _4553: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      _4569: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      _4813: x0 => x0.canvas,
      _4814: x0 => x0.drawingBufferWidth,
      _4815: x0 => x0.drawingBufferHeight,
      _5421: x0 => x0.destination,
      _5422: x0 => x0.sampleRate,
      _5423: x0 => x0.currentTime,
      _5424: x0 => x0.listener,
      _5425: x0 => x0.state,
      _5541: (x0,x1) => { x0.value = x1 },
      _5542: x0 => x0.value,
      _5550: (x0,x1) => { x0.onended = x1 },
      _5577: (x0,x1) => { x0.buffer = x1 },
      _5579: x0 => x0.playbackRate,
      _5581: (x0,x1) => { x0.loop = x1 },
      _5623: (x0,x1) => { x0.type = x1 },
      _5625: x0 => x0.frequency,
      _5654: (x0,x1) => { x0.buffer = x1 },
      _5689: x0 => x0.gain,
      _5734: (x0,x1) => { x0.panningModel = x1 },
      _5736: x0 => x0.positionX,
      _5737: x0 => x0.positionY,
      _5738: x0 => x0.positionZ,
      _5742: (x0,x1) => { x0.distanceModel = x1 },
      _5744: (x0,x1) => { x0.refDistance = x1 },
      _5746: (x0,x1) => { x0.maxDistance = x1 },
      _5748: (x0,x1) => { x0.rolloffFactor = x1 },
      _5750: (x0,x1) => { x0.coneInnerAngle = x1 },
      _6918: x0 => x0.type,
      _6929: x0 => x0.defaultPrevented,
      _6969: x0 => x0.length,
      _7046: (x0,x1) => { x0.textContent = x1 },
      _7051: () => globalThis.document,
      _7114: x0 => x0.documentElement,
      _7128: x0 => x0.body,
      _7164: x0 => x0.activeElement,
      _7474: (x0,x1) => { x0.id = x1 },
      _7476: (x0,x1) => { x0.className = x1 },
      _7477: x0 => x0.className,
      _7478: x0 => x0.classList,
      _7792: x0 => x0.code,
      _7795: x0 => x0.shiftKey,
      _7798: x0 => x0.repeat,
      _8563: x0 => x0.status,
      _8564: x0 => x0.ok,
      _8816: x0 => x0.matches,
      _10508: (x0,x1) => { x0.display = x1 },
      _10509: x0 => x0.display,
      _12779: () => globalThis.console,

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
