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
      _275: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._275(f,arguments.length,x0) }),
      _276: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _277: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _278: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._278(f,arguments.length,x0) }),
      _279: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._279(f,arguments.length,x0) }),
      _280: x0 => x0.decode(),
      _281: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      _282: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      _283: (x0,x1) => x0.warn(x1),
      _284: (x0,x1) => x0.hasAttribute(x1),
      _285: x0 => globalThis.Object.keys(x0),
      _286: (x0,x1) => x0.getElementById(x1),
      _287: x0 => x0.focus(),
      _288: (x0,x1) => x0.contains(x1),
      _289: (x0,x1,x2) => x0.toggle(x1,x2),
      _290: (x0,x1,x2) => x0.setProperty(x1,x2),
      _291: (x0,x1) => x0.matchMedia(x1),
      _292: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._292(f,arguments.length,x0) }),
      _293: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._293(f,arguments.length,x0) }),
      _294: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._294(f,arguments.length,x0) }),
      _295: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._295(f,arguments.length,x0) }),
      _296: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._296(f,arguments.length,x0) }),
      _297: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._297(f,arguments.length,x0) }),
      _298: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._298(f,arguments.length,x0) }),
      _299: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._299(f,arguments.length,x0) }),
      _300: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._300(f,arguments.length,x0) }),
      _301: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._301(f,arguments.length,x0) }),
      _302: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._302(f,arguments.length,x0) }),
      _303: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._303(f,arguments.length,x0) }),
      _304: (x0,x1) => x0.requestAnimationFrame(x1),
      _305: x0 => x0.getBoundingClientRect(),
      _306: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._306(f,arguments.length,x0) }),
      _307: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._307(f,arguments.length,x0) }),
      _308: (x0,x1) => x0.getAttribute(x1),
      _309: (x0,x1) => x0.error(x1),
      _310: (x0,x1) => x0.fetch(x1),
      _311: x0 => x0.json(),
      _312: x0 => x0.text(),
      _313: (x0,x1) => x0.contains(x1),
      _314: (x0,x1) => x0.querySelectorAll(x1),
      _315: (x0,x1) => x0.item(x1),
      _316: (x0,x1) => x0.removeAttribute(x1),
      _317: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._317(f,arguments.length,x0) }),
      _318: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._318(f,arguments.length,x0) }),
      _319: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._319(f,arguments.length,x0) }),
      _320: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._320(f,arguments.length,x0) }),
      _321: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._321(f,arguments.length,x0) }),
      _322: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._322(f,arguments.length,x0) }),
      _323: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._323(f,arguments.length,x0) }),
      _324: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._324(f,arguments.length,x0) }),
      _325: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._325(f,arguments.length,x0) }),
      _326: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._326(f,arguments.length,x0) }),
      _327: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._327(f,arguments.length,x0) }),
      _328: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._328(f,arguments.length,x0) }),
      _329: (x0,x1) => x0.removeChild(x1),
      _330: x0 => x0.save(),
      _331: (x0,x1,x2) => x0.scale(x1,x2),
      _332: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      _333: x0 => x0.restore(),
      _334: (x0,x1,x2) => x0.translate(x1,x2),
      _335: x0 => x0.fill(),
      _336: x0 => x0.stroke(),
      _337: (x0,x1) => x0.rotate(x1),
      _338: x0 => x0.beginPath(),
      _339: (x0,x1,x2) => x0.moveTo(x1,x2),
      _340: (x0,x1,x2) => x0.lineTo(x1,x2),
      _341: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      _342: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      _343: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      _344: (x0,x1) => x0.measureText(x1),
      _345: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      _346: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      _347: x0 => x0.clip(),
      _349: x0 => x0.closePath(),
      _350: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._350(f,arguments.length,x0) }),
      _351: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._351(f,arguments.length,x0) }),
      _352: x0 => x0.getSupportedExtensions(),
      _353: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _354: (x0,x1) => x0.getParameter(x1),
      _355: x0 => x0.createQuery(),
      _356: (x0,x1,x2) => x0.beginQuery(x1,x2),
      _357: (x0,x1) => x0.endQuery(x1),
      _359: (x0,x1) => x0.deleteQuery(x1),
      _360: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      _361: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      _362: (x0,x1) => x0.drawBuffers(x1),
      _363: (x0,x1) => x0.readBuffer(x1),
      _364: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      _365: (x0,x1) => x0.activeTexture(x1),
      _366: (x0,x1,x2) => x0.bindTexture(x1,x2),
      _367: (x0,x1) => x0.enable(x1),
      _368: (x0,x1) => x0.disable(x1),
      _369: (x0,x1) => x0.depthFunc(x1),
      _370: (x0,x1) => x0.depthMask(x1),
      _371: (x0,x1) => x0.cullFace(x1),
      _372: (x0,x1) => x0.frontFace(x1),
      _373: (x0,x1,x2) => x0.blendFunc(x1,x2),
      _374: (x0,x1) => x0.blendEquation(x1),
      _375: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      _376: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      _377: (x0,x1) => x0.clear(x1),
      _378: (x0,x1) => x0.useProgram(x1),
      _379: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      _380: (x0,x1,x2) => x0.uniform1f(x1,x2),
      _381: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      _382: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      _383: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      _384: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      _385: (x0,x1,x2) => x0.uniform1i(x1,x2),
      _386: (x0,x1) => x0.bindVertexArray(x1),
      _387: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      _388: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      _389: (x0,x1) => x0.enableVertexAttribArray(x1),
      _390: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      _391: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      _392: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      _393: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      _394: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      _395: x0 => x0.createBuffer(),
      _396: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      _397: (x0,x1) => x0.deleteBuffer(x1),
      _398: x0 => x0.createTexture(),
      _399: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      _400: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      _401: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      _402: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      _403: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      _404: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _405: (x0,x1) => x0.generateMipmap(x1),
      _406: (x0,x1) => x0.deleteTexture(x1),
      _407: x0 => x0.createFramebuffer(),
      _408: x0 => x0.createRenderbuffer(),
      _409: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      _410: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      _411: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      _412: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      _413: (x0,x1) => x0.checkFramebufferStatus(x1),
      _414: (x0,x1) => x0.deleteFramebuffer(x1),
      _415: (x0,x1) => x0.deleteRenderbuffer(x1),
      _416: x0 => x0.createVertexArray(),
      _417: (x0,x1) => x0.deleteVertexArray(x1),
      _418: (x0,x1) => x0.createShader(x1),
      _419: (x0,x1,x2) => x0.shaderSource(x1,x2),
      _420: (x0,x1) => x0.compileShader(x1),
      _421: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      _422: (x0,x1) => x0.getShaderInfoLog(x1),
      _423: (x0,x1) => x0.deleteShader(x1),
      _424: x0 => x0.createProgram(),
      _425: (x0,x1,x2) => x0.attachShader(x1,x2),
      _426: (x0,x1) => x0.linkProgram(x1),
      _427: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      _428: (x0,x1) => x0.getProgramInfoLog(x1),
      _429: (x0,x1) => x0.deleteProgram(x1),
      _430: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      _431: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._431(f,arguments.length,x0) }),
      _432: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._432(f,arguments.length,x0) }),
      _433: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._433(f,arguments.length,x0) }),
      _434: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._434(f,arguments.length,x0) }),
      _435: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._435(f,arguments.length,x0) }),
      _436: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._436(f,arguments.length,x0) }),
      _437: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._437(f,arguments.length,x0) }),
      _438: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._438(f,arguments.length,x0) }),
      _439: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._439(f,arguments.length,x0) }),
      _440: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._440(f,arguments.length,x0) }),
      _441: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._441(f,arguments.length,x0) }),
      _442: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._442(f,arguments.length,x0) }),
      _443: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._443(f,arguments.length,x0) }),
      _444: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._444(f,arguments.length,x0) }),
      _445: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._445(f,arguments.length,x0) }),
      _446: (module,f) => finalizeWrapper(f, function() { return module.exports._446(f,arguments.length) }),
      _447: (x0,x1,x2) => x0.setTimeout(x1,x2),
      _448: (module,f) => finalizeWrapper(f, function() { return module.exports._448(f,arguments.length) }),
      _449: (x0,x1) => x0.removeItem(x1),
      _450: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._450(f,arguments.length,x0) }),
      _451: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._451(f,arguments.length,x0) }),
      _452: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._452(f,arguments.length,x0) }),
      _453: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._453(f,arguments.length,x0) }),
      _454: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._454(f,arguments.length,x0) }),
      _455: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._455(f,arguments.length,x0) }),
      _456: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._456(f,arguments.length,x0) }),
      _457: x0 => x0.getGamepads(),
      _458: x0 => x0.createGain(),
      _459: x0 => x0.createConvolver(),
      _460: (x0,x1) => x0.connect(x1),
      _461: x0 => x0.createBiquadFilter(),
      _462: (x0,x1) => x0.disconnect(x1),
      _463: (x0,x1) => x0.createChannelSplitter(x1),
      _464: (x0,x1) => x0.createChannelMerger(x1),
      _465: x0 => x0.disconnect(),
      _466: (x0,x1,x2) => x0.connect(x1,x2),
      _467: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      _468: x0 => x0.resume(),
      _469: () => new AudioContext(),
      _470: x0 => x0.arrayBuffer(),
      _471: (x0,x1) => x0.decodeAudioData(x1),
      _472: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      _473: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      _474: x0 => x0.createBufferSource(),
      _475: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._475(f,arguments.length,x0) }),
      _476: x0 => x0.start(),
      _479: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      _480: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      _484: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._484(f,arguments.length,x0) }),
      _486: o => o instanceof Array,
      _492: (a, s) => a.join(s),
      _495: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _496: a => a.length,
      _498: (a, i) => a[i],
      _499: (a, i, v) => a[i] = v,
      _504: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _505: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _506: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _507: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _508: o => o instanceof Uint8ClampedArray,
      _509: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _510: o => o instanceof Uint16Array,
      _511: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _512: o => o instanceof Int16Array,
      _513: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _514: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _515: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _516: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _517: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _520: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _521: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _522: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _523: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _525: (t, s) => t.set(s),
      _527: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _529: o => o.buffer,
      _530: o => o.byteOffset,
      _531: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _532: (b, o) => new DataView(b, o),
      _533: (b, o, l) => new DataView(b, o, l),
      _534: Function.prototype.call.bind(DataView.prototype.getUint8),
      _535: Function.prototype.call.bind(DataView.prototype.setUint8),
      _536: Function.prototype.call.bind(DataView.prototype.getInt8),
      _537: Function.prototype.call.bind(DataView.prototype.setInt8),
      _538: Function.prototype.call.bind(DataView.prototype.getUint16),
      _539: Function.prototype.call.bind(DataView.prototype.setUint16),
      _540: Function.prototype.call.bind(DataView.prototype.getInt16),
      _541: Function.prototype.call.bind(DataView.prototype.setInt16),
      _542: Function.prototype.call.bind(DataView.prototype.getUint32),
      _543: Function.prototype.call.bind(DataView.prototype.setUint32),
      _544: Function.prototype.call.bind(DataView.prototype.getInt32),
      _545: Function.prototype.call.bind(DataView.prototype.setInt32),
      _550: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _551: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _552: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _553: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _554: Function.prototype.call.bind(Number.prototype.toString),
      _555: Function.prototype.call.bind(BigInt.prototype.toString),
      _556: Function.prototype.call.bind(Number.prototype.toString),
      _557: (d, digits) => d.toFixed(digits),
      _673: x0 => x0.style,
      _1116: (x0,x1) => { x0.src = x1 },
      _1132: x0 => x0.naturalWidth,
      _1133: x0 => x0.naturalHeight,
      _1619: (x0,x1) => { x0.checked = x1 },
      _1620: x0 => x0.checked,
      _1623: (x0,x1) => { x0.disabled = x1 },
      _1643: (x0,x1) => { x0.max = x1 },
      _1647: (x0,x1) => { x0.min = x1 },
      _1667: (x0,x1) => { x0.step = x1 },
      _1669: (x0,x1) => { x0.type = x1 },
      _1673: (x0,x1) => { x0.value = x1 },
      _1674: x0 => x0.value,
      _1702: (x0,x1) => { x0.disabled = x1 },
      _1717: (x0,x1) => { x0.type = x1 },
      _1757: (x0,x1) => { x0.value = x1 },
      _1758: x0 => x0.value,
      _1777: (x0,x1) => { x0.value = x1 },
      _1955: (x0,x1) => { x0.width = x1 },
      _1956: x0 => x0.width,
      _1957: (x0,x1) => { x0.height = x1 },
      _1958: x0 => x0.height,
      _2008: (x0,x1) => { x0.strokeStyle = x1 },
      _2010: (x0,x1) => { x0.fillStyle = x1 },
      _2016: (x0,x1) => { x0.shadowBlur = x1 },
      _2018: (x0,x1) => { x0.shadowColor = x1 },
      _2022: (x0,x1) => { x0.lineWidth = x1 },
      _2032: (x0,x1) => { x0.font = x1 },
      _2034: (x0,x1) => { x0.textAlign = x1 },
      _2036: (x0,x1) => { x0.textBaseline = x1 },
      _2054: x0 => x0.width,
      _2072: x0 => x0.data,
      _2301: () => globalThis.window,
      _2337: x0 => x0.innerWidth,
      _2338: x0 => x0.innerHeight,
      _2349: x0 => x0.devicePixelRatio,
      _2353: x0 => x0.document,
      _2376: x0 => x0.navigator,
      _2634: x0 => x0.localStorage,
      _2806: x0 => x0.message,
      _2824: x0 => x0.reason,
      _4131: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      _4133: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      _4138: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      _4141: () => globalThis.WebGL2RenderingContext.ZERO,
      _4142: () => globalThis.WebGL2RenderingContext.ONE,
      _4145: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      _4146: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      _4147: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      _4148: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      _4152: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      _4156: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      _4157: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      _4167: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      _4168: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      _4171: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      _4172: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      _4173: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      _4177: () => globalThis.WebGL2RenderingContext.FRONT,
      _4178: () => globalThis.WebGL2RenderingContext.BACK,
      _4180: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      _4181: () => globalThis.WebGL2RenderingContext.BLEND,
      _4184: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      _4185: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      _4195: () => globalThis.WebGL2RenderingContext.CCW,
      _4226: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      _4248: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      _4250: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      _4252: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      _4253: () => globalThis.WebGL2RenderingContext.FLOAT,
      _4257: () => globalThis.WebGL2RenderingContext.RGBA,
      _4263: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      _4264: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      _4265: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      _4274: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      _4281: () => globalThis.WebGL2RenderingContext.NEVER,
      _4282: () => globalThis.WebGL2RenderingContext.LESS,
      _4284: () => globalThis.WebGL2RenderingContext.LEQUAL,
      _4288: () => globalThis.WebGL2RenderingContext.ALWAYS,
      _4296: () => globalThis.WebGL2RenderingContext.VENDOR,
      _4297: () => globalThis.WebGL2RenderingContext.RENDERER,
      _4299: () => globalThis.WebGL2RenderingContext.NEAREST,
      _4300: () => globalThis.WebGL2RenderingContext.LINEAR,
      _4304: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      _4305: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      _4306: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      _4307: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      _4308: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      _4309: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      _4320: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      _4353: () => globalThis.WebGL2RenderingContext.REPEAT,
      _4354: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      _4380: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      _4387: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      _4388: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      _4391: () => globalThis.WebGL2RenderingContext.RGBA8,
      _4409: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      _4410: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      _4413: () => globalThis.WebGL2RenderingContext.NONE,
      _4414: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      _4456: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      _4510: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      _4514: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      _4578: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      _4579: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      _4583: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      _4584: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      _4600: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      _4842: x0 => x0.canvas,
      _4843: x0 => x0.drawingBufferWidth,
      _4844: x0 => x0.drawingBufferHeight,
      _5450: x0 => x0.destination,
      _5451: x0 => x0.sampleRate,
      _5453: x0 => x0.listener,
      _5454: x0 => x0.state,
      _5570: (x0,x1) => { x0.value = x1 },
      _5579: (x0,x1) => { x0.onended = x1 },
      _5606: (x0,x1) => { x0.buffer = x1 },
      _5608: x0 => x0.playbackRate,
      _5610: (x0,x1) => { x0.loop = x1 },
      _5652: (x0,x1) => { x0.type = x1 },
      _5654: x0 => x0.frequency,
      _5683: (x0,x1) => { x0.buffer = x1 },
      _5718: x0 => x0.gain,
      _6947: x0 => x0.type,
      _6958: x0 => x0.defaultPrevented,
      _6998: x0 => x0.length,
      _7063: x0 => x0.ownerDocument,
      _7067: x0 => x0.firstChild,
      _7073: (x0,x1) => { x0.textContent = x1 },
      _7078: () => globalThis.document,
      _7141: x0 => x0.documentElement,
      _7155: x0 => x0.body,
      _7168: x0 => x0.visibilityState,
      _7191: x0 => x0.activeElement,
      _7498: (x0,x1) => { x0.id = x1 },
      _7500: (x0,x1) => { x0.className = x1 },
      _7501: x0 => x0.className,
      _7502: x0 => x0.classList,
      _7724: x0 => x0.clientX,
      _7725: x0 => x0.clientY,
      _7732: x0 => x0.button,
      _7784: x0 => x0.deltaY,
      _7815: x0 => x0.code,
      _7818: x0 => x0.shiftKey,
      _7821: x0 => x0.repeat,
      _8587: x0 => x0.ok,
      _8839: x0 => x0.matches,
      _9865: x0 => x0.id,
      _9867: x0 => x0.connected,
      _9869: x0 => x0.mapping,
      _9870: x0 => x0.axes,
      _9871: x0 => x0.buttons,
      _9873: x0 => x0.pressed,
      _9875: x0 => x0.value,
      _10531: (x0,x1) => { x0.display = x1 },
      _10532: x0 => x0.display,
      _12394: x0 => x0.top,
      _12397: x0 => x0.left,
      _12405: x0 => x0.width,
      _12407: x0 => x0.height,
      _12802: () => globalThis.console,

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
