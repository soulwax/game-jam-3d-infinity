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
      _308: x0 => globalThis.Object.keys(x0),
      _309: (x0,x1) => x0.getElementById(x1),
      _310: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _311: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._311(f,arguments.length,x0) }),
      _312: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _313: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._313(f,arguments.length,x0) }),
      _314: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._314(f,arguments.length,x0) }),
      _315: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._315(f,arguments.length,x0) }),
      _316: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._316(f,arguments.length,x0) }),
      _317: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._317(f,arguments.length,x0) }),
      _318: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._318(f,arguments.length,x0) }),
      _319: (x0,x1) => x0.requestAnimationFrame(x1),
      _320: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._320(f,arguments.length,x0) }),
      _321: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._321(f,arguments.length,x0) }),
      _322: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._322(f,arguments.length,x0) }),
      _323: (x0,x1,x2) => x0.setTimeout(x1,x2),
      _324: x0 => x0.json(),
      _325: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._325(f,arguments.length,x0) }),
      _326: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      _327: (x0,x1) => x0.clear(x1),
      _328: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      _329: (x0,x1) => x0.cullFace(x1),
      _330: (x0,x1) => x0.getExtension(x1),
      _331: (x0,x1) => x0.getParameter(x1),
      _332: x0 => x0.decode(),
      _333: x0 => x0.createTexture(),
      _334: (x0,x1,x2) => x0.pixelStorei(x1,x2),
      _335: (x0,x1,x2,x3,x4,x5,x6) => x0.texImage2D(x1,x2,x3,x4,x5,x6),
      _336: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      _337: (x0,x1) => x0.generateMipmap(x1),
      _338: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      _339: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      _340: x0 => x0.getError(),
      _341: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      _342: (x0,x1) => x0.deleteTexture(x1),
      _343: (x0,x1) => x0.createShader(x1),
      _344: (x0,x1,x2) => x0.shaderSource(x1,x2),
      _345: (x0,x1) => x0.compileShader(x1),
      _346: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      _347: (x0,x1) => x0.getShaderInfoLog(x1),
      _348: x0 => x0.createProgram(),
      _349: (x0,x1,x2) => x0.attachShader(x1,x2),
      _350: (x0,x1) => x0.linkProgram(x1),
      _351: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      _352: (x0,x1) => x0.getProgramInfoLog(x1),
      _353: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      _354: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _355: x0 => x0.createRenderbuffer(),
      _356: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      _357: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      _358: (x0,x1,x2,x3,x4) => x0.renderbufferStorage(x1,x2,x3,x4),
      _359: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      _360: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      _361: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      _362: x0 => x0.createFramebuffer(),
      _363: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      _364: (x0,x1) => x0.drawBuffers(x1),
      _365: (x0,x1) => x0.checkFramebufferStatus(x1),
      _366: (x0,x1) => x0.readBuffer(x1),
      _367: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      _368: (x0,x1) => x0.deleteFramebuffer(x1),
      _369: (x0,x1) => x0.deleteRenderbuffer(x1),
      _370: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      _371: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._371(f,arguments.length,x0) }),
      _372: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._372(f,arguments.length,x0) }),
      _373: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _374: (x0,x1) => x0.depthFunc(x1),
      _375: (x0,x1) => x0.frontFace(x1),
      _376: (x0,x1) => x0.blendEquation(x1),
      _377: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _378: (x0,x1) => x0.deleteShader(x1),
      _379: (x0,x1) => x0.deleteProgram(x1),
      _380: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._380(f,arguments.length,x0) }),
      _381: (x0,x1,x2) => x0.setProperty(x1,x2),
      _382: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._382(f,arguments.length,x0) }),
      _383: x0 => x0.focus(),
      _384: (x0,x1) => x0.querySelectorAll(x1),
      _385: (x0,x1) => x0.item(x1),
      _386: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._386(f,arguments.length,x0) }),
      _387: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._387(f,arguments.length,x0) }),
      _388: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._388(f,arguments.length,x0) }),
      _389: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._389(f,arguments.length,x0) }),
      _390: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._390(f,arguments.length,x0) }),
      _391: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._391(f,arguments.length,x0) }),
      _392: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._392(f,arguments.length,x0) }),
      _393: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._393(f,arguments.length,x0) }),
      _394: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._394(f,arguments.length,x0) }),
      _395: (x0,x1) => x0.removeItem(x1),
      _396: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._396(f,arguments.length,x0) }),
      _397: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._397(f,arguments.length,x0) }),
      _398: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._398(f,arguments.length,x0) }),
      _399: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._399(f,arguments.length,x0) }),
      _400: x0 => x0.createGain(),
      _401: x0 => x0.createConvolver(),
      _402: (x0,x1) => x0.connect(x1),
      _403: x0 => x0.createBiquadFilter(),
      _404: (x0,x1) => x0.disconnect(x1),
      _405: x0 => x0.resume(),
      _406: () => new AudioContext(),
      _407: x0 => x0.arrayBuffer(),
      _408: (x0,x1) => x0.decodeAudioData(x1),
      _409: (x0,x1) => x0.warn(x1),
      _410: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      _411: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      _412: x0 => x0.createBufferSource(),
      _413: x0 => x0.start(),
      _419: o => o instanceof Array,
      _428: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _429: a => a.length,
      _431: (a, i) => a[i],
      _432: (a, i, v) => a[i] = v,
      _437: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _438: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _439: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _440: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _441: o => o instanceof Uint8ClampedArray,
      _442: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _443: o => o instanceof Uint16Array,
      _444: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _445: o => o instanceof Int16Array,
      _446: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _447: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _448: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _449: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _450: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _453: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _454: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _455: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _456: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _458: (t, s) => t.set(s),
      _460: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _462: o => o.buffer,
      _463: o => o.byteOffset,
      _464: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _465: (b, o) => new DataView(b, o),
      _466: (b, o, l) => new DataView(b, o, l),
      _467: Function.prototype.call.bind(DataView.prototype.getUint8),
      _468: Function.prototype.call.bind(DataView.prototype.setUint8),
      _469: Function.prototype.call.bind(DataView.prototype.getInt8),
      _470: Function.prototype.call.bind(DataView.prototype.setInt8),
      _471: Function.prototype.call.bind(DataView.prototype.getUint16),
      _472: Function.prototype.call.bind(DataView.prototype.setUint16),
      _473: Function.prototype.call.bind(DataView.prototype.getInt16),
      _474: Function.prototype.call.bind(DataView.prototype.setInt16),
      _475: Function.prototype.call.bind(DataView.prototype.getUint32),
      _476: Function.prototype.call.bind(DataView.prototype.setUint32),
      _477: Function.prototype.call.bind(DataView.prototype.getInt32),
      _478: Function.prototype.call.bind(DataView.prototype.setInt32),
      _483: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _484: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _485: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _486: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _487: Function.prototype.call.bind(Number.prototype.toString),
      _488: Function.prototype.call.bind(BigInt.prototype.toString),
      _489: Function.prototype.call.bind(Number.prototype.toString),
      _490: (d, digits) => d.toFixed(digits),
      _606: x0 => x0.style,
      _1049: (x0,x1) => { x0.src = x1 },
      _1062: x0 => x0.width,
      _1064: x0 => x0.height,
      _1888: (x0,x1) => { x0.width = x1 },
      _1889: x0 => x0.width,
      _1890: (x0,x1) => { x0.height = x1 },
      _1891: x0 => x0.height,
      _2249: () => globalThis.window,
      _2285: x0 => x0.innerWidth,
      _2286: x0 => x0.innerHeight,
      _2301: x0 => x0.document,
      _2304: x0 => x0.location,
      _2582: x0 => x0.localStorage,
      _2604: x0 => x0.search,
      _2754: x0 => x0.message,
      _2772: x0 => x0.reason,
      _4080: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      _4082: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      _4087: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      _4090: () => globalThis.WebGL2RenderingContext.ZERO,
      _4091: () => globalThis.WebGL2RenderingContext.ONE,
      _4094: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      _4095: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      _4096: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      _4097: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      _4101: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      _4105: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      _4106: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      _4116: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      _4117: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      _4120: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      _4121: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      _4122: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      _4126: () => globalThis.WebGL2RenderingContext.FRONT,
      _4127: () => globalThis.WebGL2RenderingContext.BACK,
      _4129: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      _4130: () => globalThis.WebGL2RenderingContext.BLEND,
      _4133: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      _4134: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      _4138: () => globalThis.WebGL2RenderingContext.NO_ERROR,
      _4144: () => globalThis.WebGL2RenderingContext.CCW,
      _4175: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      _4197: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      _4199: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      _4202: () => globalThis.WebGL2RenderingContext.FLOAT,
      _4206: () => globalThis.WebGL2RenderingContext.RGBA,
      _4212: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      _4213: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      _4214: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      _4223: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      _4230: () => globalThis.WebGL2RenderingContext.NEVER,
      _4231: () => globalThis.WebGL2RenderingContext.LESS,
      _4233: () => globalThis.WebGL2RenderingContext.LEQUAL,
      _4237: () => globalThis.WebGL2RenderingContext.ALWAYS,
      _4245: () => globalThis.WebGL2RenderingContext.VENDOR,
      _4246: () => globalThis.WebGL2RenderingContext.RENDERER,
      _4248: () => globalThis.WebGL2RenderingContext.NEAREST,
      _4249: () => globalThis.WebGL2RenderingContext.LINEAR,
      _4253: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      _4254: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      _4255: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      _4256: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      _4257: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      _4258: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      _4269: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      _4270: () => globalThis.WebGL2RenderingContext.TEXTURE1,
      _4276: () => globalThis.WebGL2RenderingContext.TEXTURE7,
      _4277: () => globalThis.WebGL2RenderingContext.TEXTURE8,
      _4278: () => globalThis.WebGL2RenderingContext.TEXTURE9,
      _4279: () => globalThis.WebGL2RenderingContext.TEXTURE10,
      _4280: () => globalThis.WebGL2RenderingContext.TEXTURE11,
      _4302: () => globalThis.WebGL2RenderingContext.REPEAT,
      _4303: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      _4329: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      _4336: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      _4337: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      _4340: () => globalThis.WebGL2RenderingContext.RGBA8,
      _4358: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      _4359: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      _4362: () => globalThis.WebGL2RenderingContext.NONE,
      _4363: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      _4372: () => globalThis.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL,
      _4405: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      _4459: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      _4463: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      _4527: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      _4528: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      _4532: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      _4533: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      _4549: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      _4793: x0 => x0.canvas,
      _4794: x0 => x0.drawingBufferWidth,
      _4795: x0 => x0.drawingBufferHeight,
      _5403: x0 => x0.destination,
      _5404: x0 => x0.sampleRate,
      _5407: x0 => x0.state,
      _5524: (x0,x1) => { x0.value = x1 },
      _5560: (x0,x1) => { x0.buffer = x1 },
      _5562: x0 => x0.playbackRate,
      _5608: (x0,x1) => { x0.type = x1 },
      _5610: x0 => x0.frequency,
      _5639: (x0,x1) => { x0.buffer = x1 },
      _5674: x0 => x0.gain,
      _6903: x0 => x0.type,
      _6914: x0 => x0.defaultPrevented,
      _6954: x0 => x0.length,
      _7031: (x0,x1) => { x0.textContent = x1 },
      _7036: () => globalThis.document,
      _7099: x0 => x0.documentElement,
      _7113: x0 => x0.body,
      _7149: x0 => x0.activeElement,
      _7462: (x0,x1) => { x0.className = x1 },
      _7463: x0 => x0.className,
      _7779: x0 => x0.code,
      _7782: x0 => x0.shiftKey,
      _7785: x0 => x0.repeat,
      _8550: x0 => x0.status,
      _8551: x0 => x0.ok,
      _8803: x0 => x0.matches,
      _10495: (x0,x1) => { x0.display = x1 },
      _12766: () => globalThis.console,

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
