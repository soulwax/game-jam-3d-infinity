(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.H6(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xJ(b)
return new s(c,this)}:function(){if(s===null)s=A.xJ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xJ(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
xQ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xL(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.xO==null){A.GM()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.z4("Return interceptor for "+A.v(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tO
if(o==null)o=$.tO=A.vG(n)
p=q[o]}if(p!=null)return p
p=A.GS(a)
if(p!=null)return p
if(typeof a=="function")return B.iv
s=Object.getPrototypeOf(a)
if(s==null)return B.dr
if(s===Object.prototype)return B.dr
if(typeof q=="function"){o=$.tO
if(o==null)o=$.tO=A.vG(n)
Object.defineProperty(q,o,{value:B.bO,enumerable:false,writable:true,configurable:true})
return B.bO}return B.bO},
yv(a,b){if(a<0||a>4294967295)throw A.b(A.aX(a,0,4294967295,"length",null))
return J.yx(new Array(a),b)},
yw(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
yu(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
yx(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
CF(a,b){var s=t.hO
return J.y3(s.a(a),s.a(b))},
yz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
CG(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yz(r))break;++b}return b},
CH(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.yz(q))break}return b},
eu(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hK.prototype
return J.ki.prototype}if(typeof a=="string")return J.e3.prototype
if(a==null)return J.hL.prototype
if(typeof a=="boolean")return J.kh.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e4.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.K)return a
return J.xL(a)},
aH(a){if(typeof a=="string")return J.e3.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e4.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.K)return a
return J.xL(a)},
cE(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e4.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.K)return a
return J.xL(a)},
AJ(a){if(typeof a=="number")return J.fG.prototype
if(typeof a=="string")return J.e3.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.eZ.prototype
return a},
AK(a){if(typeof a=="string")return J.e3.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.eZ.prototype
return a},
y2(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.AJ(a).a6(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eu(a).a7(a,b)},
aT(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).h(a,b)},
bk(a,b,c){return J.cE(a).k(a,b,c)},
jn(a,b){return J.cE(a).l(a,b)},
Bv(a,b){return J.AK(a).fA(a,b)},
wu(a,b){return J.cE(a).L(a,b)},
Bw(a,b){return J.cE(a).cD(a,b)},
y3(a,b){return J.AJ(a).H(a,b)},
y4(a,b){return J.aH(a).p(a,b)},
mD(a,b){return J.cE(a).a2(a,b)},
Bx(a,b){return J.cE(a).a4(a,b)},
y5(a){return J.cE(a).gU(a)},
aC(a){return J.eu(a).gP(a)},
mE(a){return J.aH(a).gO(a)},
By(a){return J.aH(a).gX(a)},
O(a){return J.cE(a).gu(a)},
cH(a){return J.aH(a).gt(a)},
fl(a){return J.eu(a).ga3(a)},
y6(a,b){return J.cE(a).Y(a,b)},
dK(a,b,c){return J.cE(a).ca(a,b,c)},
Bz(a,b){return J.aH(a).st(a,b)},
BA(a,b){return J.AK(a).aN(a,b)},
da(a){return J.eu(a).q(a)},
y7(a,b){return J.cE(a).e3(a,b)},
kf:function kf(){},
kh:function kh(){},
hL:function hL(){},
hO:function hO(){},
e5:function e5(){},
kD:function kD(){},
eZ:function eZ(){},
e4:function e4(){},
hN:function hN(){},
hP:function hP(){},
r:function r(a){this.$ti=a},
kg:function kg(){},
pv:function pv(a){this.$ti=a},
ex:function ex(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fG:function fG(){},
hK:function hK(){},
ki:function ki(){},
e3:function e3(){}},A={wA:function wA(){},
vB(){return $},
BN(a,b,c){if(t.he.b(a))return new A.iA(a,b.i("@<0>").K(c).i("iA<1,2>"))
return new A.eA(a,b.i("@<0>").K(c).i("eA<1,2>"))},
yD(a){return new A.fH("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fH("Field '"+a+"' has not been initialized.")},
CJ(a){return new A.fH("Field '"+a+"' has already been initialized.")},
vH(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aY(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l6(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fh(a,b,c){return a},
xP(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
l4(a,b,c,d){A.kN(b,"start")
if(c!=null){A.kN(c,"end")
if(b>c)A.h(A.aX(b,0,c,"start",null))}return new A.im(a,b,c,d.i("im<0>"))},
ko(a,b,c,d){if(t.he.b(a))return new A.df(a,b,c.i("@<0>").K(d).i("df<1,2>"))
return new A.cy(a,b,c.i("@<0>").K(d).i("cy<1,2>"))},
cw(){return new A.fX("No element")},
yt(){return new A.fX("Too many elements")},
eg:function eg(){},
hs:function hs(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b){this.a=a
this.$ti=b},
iA:function iA(a,b){this.a=a
this.$ti=b},
iy:function iy(){},
aV:function aV(a,b){this.a=a
this.$ti=b},
fH:function fH(a){this.a=a},
de:function de(a){this.a=a},
r1:function r1(){},
R:function R(){},
a2:function a2(){},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
hU:function hU(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hA:function hA(a){this.$ti=a},
dB:function dB(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b){this.a=a
this.$ti=b},
av:function av(){},
ec:function ec(){},
fZ:function fZ(){},
eS:function eS(a,b){this.a=a
this.$ti=b},
j0:function j0(){},
aW(a,b,c){var s,r,q,p,o,n,m,l=A.aA(a.ga_(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aA(a.gaD(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hv(A.aO(a,b,c),b.i("@<0>").K(c).i("hv<1,2>"))},
BT(){throw A.b(A.br("Cannot modify unmodifiable Map"))},
BU(){throw A.b(A.br("Cannot modify constant Set"))},
B0(a){var s=A.B_(a)
if(s!=null)return s
return"minified:"+a},
GR(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.da(a)
return s},
i7(a){var s,r=$.yM
if(r==null)r=$.yM=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ds(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eO(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.ba(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kJ(a){var s,r,q,p
if(a instanceof A.K)return A.bH(A.c9(a),null)
s=J.eu(a)
if(s===B.iu||s===B.iw||t.qF.b(a)){r=B.c7(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.c9(a),null)},
yP(a){var s,r,q
if(a==null||typeof a=="number"||A.bw(a))return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dW)return a.q(0)
if(a instanceof A.bQ)return a.fp(!0)
s=$.Bq()
for(r=0;r<1;++r){q=s[r].n6(a)
if(q!=null)return q}return"Instance of '"+A.kJ(a)+"'"},
CX(){return Date.now()},
D3(){var s,r
if($.qz!==0)return
$.qz=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qz=1e6
$.qA=new A.qy(r)},
CW(){if(!!self.location)return self.location.href
return null},
D4(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dv(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aX(a,0,1114111,null,null))},
fP(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
D2(a){var s=A.fP(a).getUTCFullYear()+0
return s},
D0(a){var s=A.fP(a).getUTCMonth()+1
return s},
yN(a){var s=A.fP(a).getUTCDate()+0
return s},
yO(a){var s=A.fP(a).getUTCHours()+0
return s},
D_(a){var s=A.fP(a).getUTCMinutes()+0
return s},
D1(a){var s=A.fP(a).getUTCSeconds()+0
return s},
CZ(a){var s=A.fP(a).getUTCMilliseconds()+0
return s},
CY(a){var s=a.$thrownJsError
if(s==null)return null
return A.cF(s)},
yQ(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aG(a,s)
a.$thrownJsError=s
s.stack=b.q(0)}},
vI(a){throw A.b(A.xI(a))},
d(a,b){if(a==null)J.cH(a)
throw A.b(A.vD(a,b))},
vD(a,b){var s,r="index"
if(!A.aL(b))return new A.cr(!0,b,r,null)
s=A.f(J.cH(a))
if(b<0||b>=s)return A.pl(b,s,a,r)
return A.yS(b,r)},
GE(a,b,c){if(a>c)return A.aX(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aX(b,a,c,"end",null)
return new A.cr(!0,b,"end",null)},
xI(a){return new A.cr(!0,a,null,null)},
b(a){return A.aG(a,new Error())},
aG(a,b){var s
if(a==null)a=new A.dy()
b.dartException=a
s=A.H9
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
H9(){return J.da(this.dartException)},
h(a,b){throw A.aG(a,b==null?new Error():b)},
bS(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.EV(a,b,c),s)},
EV(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.iq("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.au(a))},
dz(a){var s,r,q,p,o,n
a=A.AU(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.t0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
t1(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
z3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wB(a,b){var s=b==null,r=s?null:b.method
return new A.kj(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.qb(a)
if(a instanceof A.hB){s=a.a
return A.ev(a,s==null?A.fe(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ev(a,a.dartException)
return A.Gc(a)},
ev(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Gc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dv(r,16)&8191)===10)switch(q){case 438:return A.ev(a,A.wB(A.v(s)+" (Error "+q+")",null))
case 445:case 5007:A.v(s)
return A.ev(a,new A.i1())}}if(a instanceof TypeError){p=$.B3()
o=$.B4()
n=$.B5()
m=$.B6()
l=$.B9()
k=$.Ba()
j=$.B8()
$.B7()
i=$.Bc()
h=$.Bb()
g=p.b0(s)
if(g!=null)return A.ev(a,A.wB(A.p(s),g))
else{g=o.b0(s)
if(g!=null){g.method="call"
return A.ev(a,A.wB(A.p(s),g))}else if(n.b0(s)!=null||m.b0(s)!=null||l.b0(s)!=null||k.b0(s)!=null||j.b0(s)!=null||m.b0(s)!=null||i.b0(s)!=null||h.b0(s)!=null){A.p(s)
return A.ev(a,new A.i1())}}return A.ev(a,new A.la(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ij()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ev(a,new A.cr(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ij()
return a},
cF(a){var s
if(a instanceof A.hB)return a.b
if(a==null)return new A.iP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mB(a){if(a==null)return J.aC(a)
if(typeof a=="object")return A.i7(a)
return J.aC(a)},
Gy(a){if(typeof a=="number")return B.c.gP(a)
if(a instanceof A.m8)return A.i7(a)
if(a instanceof A.bQ)return a.gP(a)
return A.mB(a)},
AH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
GJ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Fk(a,b,c,d,e,f){t.BO.a(a)
switch(A.f(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.tz("Unsupported number of arguments for wrapped closure"))},
hk(a,b){var s=a.$identity
if(!!s)return s
s=A.Gz(a,b)
a.$identity=s
return s},
Gz(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Fk)},
BS(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l3().constructor.prototype):Object.create(new A.fn(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ye(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.BO(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ye(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
BO(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.BJ)}throw A.b("Error in functionType of tearoff")},
BP(a,b,c,d){var s=A.yd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ye(a,b,c,d){if(c)return A.BR(a,b,d)
return A.BP(b.length,d,a,b)},
BQ(a,b,c,d){var s=A.yd,r=A.BK
switch(b?-1:a){case 0:throw A.b(new A.kS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
BR(a,b,c){var s,r
if($.yb==null)$.yb=A.ya("interceptor")
if($.yc==null)$.yc=A.ya("receiver")
s=b.length
r=A.BQ(s,c,a,b)
return r},
xJ(a){return A.BS(a)},
BJ(a,b){return A.iT(v.typeUniverse,A.c9(a.a),b)},
yd(a){return a.a},
BK(a){return a.b},
ya(a){var s,r,q,p=new A.fn("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
vG(a){return v.getIsolateTag(a)},
AZ(){return v.G},
I2(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
GS(a){var s,r,q,p,o,n=A.p($.AL.$1(a)),m=$.vE[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vM[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aj($.AC.$2(a,n))
if(q!=null){m=$.vE[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vM[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.wf(s)
$.vE[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vM[n]=s
return s}if(p==="-"){o=A.wf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.AS(a,s)
if(p==="*")throw A.b(A.z4(n))
if(v.leafTags[n]===true){o=A.wf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.AS(a,s)},
AS(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xQ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
wf(a){return J.xQ(a,!1,null,!!a.$ibV)},
GU(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.wf(s)
else return J.xQ(s,c,null,null)},
GM(){if(!0===$.xO)return
$.xO=!0
A.GN()},
GN(){var s,r,q,p,o,n,m,l
$.vE=Object.create(null)
$.vM=Object.create(null)
A.GL()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.AT.$1(o)
if(n!=null){m=A.GU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
GL(){var s,r,q,p,o,n,m=B.ev()
m=A.hj(B.ew,A.hj(B.ex,A.hj(B.c8,A.hj(B.c8,A.hj(B.ey,A.hj(B.ez,A.hj(B.eA(B.c7),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.AL=new A.vJ(p)
$.AC=new A.vK(o)
$.AT=new A.vL(n)},
hj(a,b){return a(b)||b},
GB(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yA(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.S("Illegal RegExp pattern ("+String(o)+")",a,null))},
H4(a,b,c){var s=a.indexOf(b,c)
return s>=0},
GH(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
AU(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xR(a,b,c){var s=A.H5(a,b,c)
return s},
H5(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.AU(b),"g"),A.GH(c))},
aB:function aB(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b){this.a=a
this.$ti=b},
fu:function fu(){},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cN:function cN(a,b){this.a=a
this.$ti=b},
hw:function hw(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
qy:function qy(a){this.a=a},
id:function id(){},
t0:function t0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(){},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a){this.a=a},
qb:function qb(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a
this.b=null},
dW:function dW(){},
jE:function jE(){},
jF:function jF(){},
l7:function l7(){},
l3:function l3(){},
fn:function fn(a,b){this.a=a
this.b=b},
kS:function kS(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pE:function pE(a){this.a=a},
pO:function pO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
L:function L(a,b){this.a=a
this.$ti=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hQ:function hQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vJ:function vJ(a){this.a=a},
vK:function vK(a){this.a=a},
vL:function vL(a){this.a=a},
bQ:function bQ(){},
ek:function ek(){},
el:function el(){},
hM:function hM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lO:function lO(a){this.b=a},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
il:function il(a,b){this.a=a
this.c=b},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function m5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
H6(a){throw A.aG(A.yD(a),new Error())},
q(){throw A.aG(A.a5(""),new Error())},
aZ(){throw A.aG(A.CJ(""),new Error())},
xS(){throw A.aG(A.yD(""),new Error())},
ab(){var s=new A.ty()
return s.b=s},
ty:function ty(){this.b=null},
a1(a){return a},
CQ(a){return new Int8Array(a)},
CR(a){return new Uint8Array(a)},
kz(a){return new Uint8Array(A.a1(a))},
dH(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.vD(b,a))},
EI(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.GE(a,b,c))
return b},
fN:function fN(){},
fM:function fM(){},
i_:function i_(){},
ks:function ks(){},
b5:function b5(){},
hY:function hY(){},
hZ:function hZ(){},
hX:function hX(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
kw:function kw(){},
kx:function kx(){},
ky:function ky(){},
eM:function eM(){},
i0:function i0(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
wM(a,b){var s=b.c
return s==null?b.c=A.iR(a,"bU",[b.x]):s},
yX(a){var s=a.w
if(s===6||s===7)return A.yX(a.x)
return s===11||s===12},
Dc(a){return a.as},
X(a){return A.ua(v.typeUniverse,a,!1)},
fg(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zs(a1,r,!0)
case 7:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zr(a1,r,!0)
case 8:q=a2.y
p=A.hh(a1,q,a3,a4)
if(p===q)return a2
return A.iR(a1,a2.x,p)
case 9:o=a2.x
n=A.fg(a1,o,a3,a4)
m=a2.y
l=A.hh(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wX(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hh(a1,j,a3,a4)
if(i===j)return a2
return A.zt(a1,k,i)
case 11:h=a2.x
g=A.fg(a1,h,a3,a4)
f=a2.y
e=A.G8(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.zq(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hh(a1,d,a3,a4)
o=a2.x
n=A.fg(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wY(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jt("Attempted to substitute unexpected RTI kind "+a0))}},
hh(a,b,c,d){var s,r,q,p,o=b.length,n=A.ue(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fg(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
G9(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ue(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fg(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
G8(a,b,c,d){var s,r=b.a,q=A.hh(a,r,c,d),p=b.b,o=A.hh(a,p,c,d),n=b.c,m=A.G9(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lH()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.GK(s)
return a.$S()}return null},
GO(a,b){var s
if(A.yX(b))if(a instanceof A.dW){s=A.xK(a)
if(s!=null)return s}return A.c9(a)},
c9(a){if(a instanceof A.K)return A.o(a)
if(Array.isArray(a))return A.D(a)
return A.xi(J.eu(a))},
D(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.xi(a)},
xi(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Fh(a,s)},
Fh(a,b){var s=a instanceof A.dW?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ed(v.typeUniverse,s.name)
b.$ccache=r
return r},
GK(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ua(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xN(a){return A.d8(A.o(a))},
xD(a){var s
if(a instanceof A.bQ)return a.eW()
s=a instanceof A.dW?A.xK(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fl(a).a
if(Array.isArray(a))return A.D(a)
return A.c9(a)},
d8(a){var s=a.r
return s==null?a.r=new A.m8(a):s},
GI(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iT(v.typeUniverse,A.xD(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.zv(v.typeUniverse,s,A.xD(q[r]))}return A.iT(v.typeUniverse,s,a)},
co(a){return A.d8(A.ua(v.typeUniverse,a,!1))},
Fg(a){var s=this
s.b=A.G3(s)
return s.b(a)},
G3(a){var s,r,q,p,o
if(a===t.K)return A.Fq
if(A.fi(a))return A.Fv
s=a.w
if(s===6)return A.F8
if(s===1)return A.A9
if(s===7)return A.Fl
r=A.G2(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fi)){a.f="$i"+q
if(q==="F")return A.Fo
if(a===t.m)return A.Fn
return A.Fu}}else if(s===10){p=A.GB(a.x,a.y)
o=p==null?A.A9:p
return o==null?A.fe(o):o}return A.F6},
G2(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.Fp
if(a===t.N)return A.Ft
if(a===t.y)return A.bw}return null},
Ff(a){var s=this,r=A.F5
if(A.fi(s))r=A.EB
else if(s===t.K)r=A.fe
else if(A.hm(s)){r=A.F7
if(s===t.lo)r=A.zR
else if(s===t.dR)r=A.aj
else if(s===t.k7)r=A.zP
else if(s===t.s7)r=A.x4
else if(s===t.u6)r=A.zQ
else if(s===t.gt)r=A.E}else if(s===t.S)r=A.f
else if(s===t.N)r=A.p
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.bv
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
F6(a){var s=this
if(a==null)return A.hm(s)
return A.AO(v.typeUniverse,A.GO(a,s),s)},
F8(a){if(a==null)return!0
return this.x.b(a)},
Fu(a){var s,r=this
if(a==null)return A.hm(r)
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.eu(a)[s]},
Fo(a){var s,r=this
if(a==null)return A.hm(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.eu(a)[s]},
Fn(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.K)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
A8(a){if(typeof a=="object"){if(a instanceof A.K)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
F5(a){var s=this
if(a==null){if(A.hm(s))return a}else if(s.b(a))return a
throw A.aG(A.zW(a,s),new Error())},
F7(a){var s=this
if(a==null||s.b(a))return a
throw A.aG(A.zW(a,s),new Error())},
zW(a,b){return new A.h5("TypeError: "+A.zk(a,A.bH(b,null)))},
AF(a,b,c,d){if(A.AO(v.typeUniverse,a,b))return a
throw A.aG(A.E5("The type argument '"+A.bH(a,null)+"' is not a subtype of the type variable bound '"+A.bH(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
zk(a,b){return A.jU(a)+": type '"+A.bH(A.xD(a),null)+"' is not a subtype of type '"+b+"'"},
E5(a){return new A.h5("TypeError: "+a)},
cl(a,b){return new A.h5("TypeError: "+A.zk(a,b))},
Fl(a){var s=this
return s.x.b(a)||A.wM(v.typeUniverse,s).b(a)},
Fq(a){return a!=null},
fe(a){if(a!=null)return a
throw A.aG(A.cl(a,"Object"),new Error())},
Fv(a){return!0},
EB(a){return a},
A9(a){return!1},
bw(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aG(A.cl(a,"bool"),new Error())},
zP(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aG(A.cl(a,"bool?"),new Error())},
bv(a){if(typeof a=="number")return a
throw A.aG(A.cl(a,"double"),new Error())},
zQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aG(A.cl(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
f(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aG(A.cl(a,"int"),new Error())},
zR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aG(A.cl(a,"int?"),new Error())},
Fp(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aG(A.cl(a,"num"),new Error())},
x4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aG(A.cl(a,"num?"),new Error())},
Ft(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.aG(A.cl(a,"String"),new Error())},
aj(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aG(A.cl(a,"String?"),new Error())},
a(a){if(A.A8(a))return a
throw A.aG(A.cl(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.A8(a))return a
throw A.aG(A.cl(a,"JSObject?"),new Error())},
Ar(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
FR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Ar(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
A_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bH(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bH(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bH(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bH(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bH(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bH(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bH(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bH(a.x,b)+">"
if(l===8){p=A.Gb(a.x)
o=a.y
return o.length>0?p+("<"+A.Ar(o,b)+">"):p}if(l===10)return A.FR(a,b)
if(l===11)return A.A_(a,b,null)
if(l===12)return A.A_(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Gb(a){var s=A.B_(a)
if(s!=null)return s
return"minified:"+a},
Ee(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ed(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ua(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iS(a,5,"#")
q=A.ue(s)
for(p=0;p<s;++p)q[p]=r
o=A.iR(a,b,q)
n[b]=o
return o}else return m},
Ec(a,b){return A.zD(a.tR,b)},
Eb(a,b){return A.zD(a.eT,b)},
ua(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.zu(a,null,b,!1)
r.set(b,s)
return s},
iT(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.zu(a,b,c,!0)
q.set(c,r)
return r},
zv(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wX(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
zu(a,b,c,d){return A.E2(A.DX(a,b,c,d))},
en(a,b){b.a=A.Ff
b.b=A.Fg
return b},
iS(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cB(null,null)
s.w=b
s.as=c
r=A.en(a,s)
a.eC.set(c,r)
return r},
zs(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.E9(a,b,r,c)
a.eC.set(r,s)
return s},
E9(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fi(b))if(!(b===t.c||b===t.T))if(s!==6)r=s===7&&A.hm(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cB(null,null)
q.w=6
q.x=b
q.as=c
return A.en(a,q)},
zr(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.E7(a,b,r,c)
a.eC.set(r,s)
return s},
E7(a,b,c,d){var s,r
if(d){s=b.w
if(A.fi(b)||b===t.K)return b
else if(s===1)return A.iR(a,"bU",[b])
else if(b===t.c||b===t.T)return t.eZ}r=new A.cB(null,null)
r.w=7
r.x=b
r.as=c
return A.en(a,r)},
Ea(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=13
s.x=b
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
iQ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
E6(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iR(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iQ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cB(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.en(a,r)
a.eC.set(p,q)
return q},
wX(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iQ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cB(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.en(a,o)
a.eC.set(q,n)
return n},
zt(a,b,c){var s,r,q="+"+(b+"("+A.iQ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.en(a,s)
a.eC.set(q,r)
return r},
zq(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iQ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iQ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.E6(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cB(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.en(a,p)
a.eC.set(r,o)
return o},
wY(a,b,c,d){var s,r=b.as+("<"+A.iQ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.E8(a,b,c,r,d)
a.eC.set(r,s)
return s},
E8(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ue(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fg(a,b,r,0)
m=A.hh(a,c,r,0)
return A.wY(a,n,m,c!==m)}}l=new A.cB(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.en(a,l)},
DX(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
E2(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.DZ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.zn(a,r,l,k,!1)
else if(q===46)r=A.zn(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fa(a.u,a.e,k.pop()))
break
case 94:k.push(A.Ea(a.u,k.pop()))
break
case 35:k.push(A.iS(a.u,5,"#"))
break
case 64:k.push(A.iS(a.u,2,"@"))
break
case 126:k.push(A.iS(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.E0(a,k)
break
case 38:A.E_(a,k)
break
case 63:p=a.u
k.push(A.zs(p,A.fa(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.zr(p,A.fa(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.DY(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.zo(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.E3(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.fa(a.u,a.e,m)},
DZ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
zn(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ee(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.Dc(o)+'"')
d.push(A.iT(s,o,n))}else d.push(p)
return m},
E0(a,b){var s,r=a.u,q=A.zm(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iR(r,p,q))
else{s=A.fa(r,a.e,p)
switch(s.w){case 11:b.push(A.wY(r,s,q,a.n))
break
default:b.push(A.wX(r,s,q))
break}}},
DY(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.zm(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fa(p,a.e,o)
q=new A.lH()
q.a=s
q.b=n
q.c=m
b.push(A.zq(p,r,q))
return
case-4:b.push(A.zt(p,b.pop(),s))
return
default:throw A.b(A.jt("Unexpected state under `()`: "+A.v(o)))}},
E_(a,b){var s=b.pop()
if(0===s){b.push(A.iS(a.u,1,"0&"))
return}if(1===s){b.push(A.iS(a.u,4,"1&"))
return}throw A.b(A.jt("Unexpected extended operation "+A.v(s)))},
zm(a,b){var s=b.splice(a.p)
A.zo(a.u,a.e,s)
a.p=b.pop()
return s},
fa(a,b,c){if(typeof c=="string")return A.iR(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.E1(a,b,c)}else return c},
zo(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fa(a,b,c[s])},
E3(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fa(a,b,c[s])},
E1(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jt("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jt("Bad index "+c+" for "+b.q(0)))},
AO(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fi(d))return!0
s=b.w
if(s===4)return!0
if(A.fi(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.T){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.wM(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.wM(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.iM)return!0
if(q===12){if(b===t.ud)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.A7(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.A7(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Fm(a,b,c,d,e)}if(o&&q===10)return A.Fr(a,b,c,d,e)
return!1},
A7(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aQ(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aQ(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aQ(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aQ(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aQ(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Fm(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iT(a,b,r[o])
return A.zN(a,p,null,c,d.y,e)}return A.zN(a,b.y,null,c,d.y,e)},
zN(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
Fr(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hm(a){var s=a.w,r=!0
if(!(a===t.c||a===t.T))if(!A.fi(a))if(s!==6)r=s===7&&A.hm(a.x)
return r},
fi(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ue(a){return a>0?new Array(a):v.typeUniverse.sEA},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lH:function lH(){this.c=this.b=this.a=null},
m8:function m8(a){this.a=a},
lF:function lF(){},
h5:function h5(a){this.a=a},
DQ(){var s,r,q
if(self.scheduleImmediate!=null)return A.Gp()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hk(new A.tu(s),1)).observe(r,{childList:true})
return new A.tt(s,r,q)}else if(self.setImmediate!=null)return A.Gq()
return A.Gr()},
DR(a){self.scheduleImmediate(A.hk(new A.tv(t.O.a(a)),0))},
DS(a){self.setImmediate(A.hk(new A.tw(t.O.a(a)),0))},
DT(a){A.wP(B.f1,t.O.a(a))},
wP(a,b){return A.E4(a.a/1000|0,b)},
E4(a,b){var s=new A.u8()
s.iu(a,b)
return s},
bh(a){return new A.lv(new A.as($.ap,a.i("as<0>")),a.i("lv<0>"))},
bf(a,b){a.$2(0,null)
b.b=!0
return b.a},
ae(a,b){A.ED(a,b)},
be(a,b){b.dz(a)},
bd(a,b){b.dA(A.ak(a),A.cF(a))},
ED(a,b){var s,r,q=new A.uj(b),p=new A.uk(b)
if(a instanceof A.as)a.fn(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.e_(q,p,s)
else{r=new A.as($.ap,t.hR)
r.a=8
r.c=a
r.fn(q,p,s)}}},
bi(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ap.hi(new A.vx(s),t.H,t.S,t.z)},
zp(a,b,c){return 0},
mV(a){var s
if(t.yt.b(a)){s=a.gbN()
if(s!=null)return s}return B.au},
ym(a){var s
a.a(null)
s=new A.as($.ap,a.i("as<0>"))
s.d6(null)
return s},
Cn(a,b,c){var s=new A.as($.ap,c.i("as<0>"))
A.Dq(a,new A.ot(b,s,c))
return s},
ou(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ap,b.i("as<F<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.ow(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.e_(new A.ov(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.co(A.c([],b.i("r<0>")))
return n}i.a=A.e6(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cF(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.xj(m,k)
m=new A.b2(m,k==null?A.mV(m):k)
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
xj(a,b){if($.ap===B.x)return null
return null},
Fi(a,b){if($.ap!==B.x)A.xj(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbN()
if(b==null){A.yQ(a,B.au)
b=B.au}}else b=B.au
else if(t.yt.b(a))A.yQ(a,b)
return new A.b2(a,b)},
tE(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Dl()
b.cm(new A.b2(new A.cr(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f5(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bT()
b.cn(o.a)
A.f5(b,p)
return}b.a^=2
A.mu(null,null,b.b,t.O.a(new A.tF(o,b)))},
f5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.xw(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.f5(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.xw(j.a,j.b)
return}g=$.ap
if(g!==h)$.ap=h
else g=null
c=c.c
if((c&15)===8)new A.tJ(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tI(q,j).$0()}else if((c&2)!==0)new A.tH(d,q).$0()
if(g!=null)$.ap=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("bU<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cv(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.tE(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cv(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Al(a,b){var s
if(t.nW.b(a))return b.hi(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.al(a,"onError",u.c))},
FF(){var s,r
for(s=$.he;s!=null;s=$.he){$.jc=null
r=s.b
$.he=r
if(r==null)$.jb=null
s.a.$0()}},
G6(){$.xk=!0
try{A.FF()}finally{$.jc=null
$.xk=!1
if($.he!=null)$.xZ().$1(A.AD())}},
Av(a){var s=new A.lw(a),r=$.jb
if(r==null){$.he=$.jb=s
if(!$.xk)$.xZ().$1(A.AD())}else $.jb=r.b=s},
G_(a){var s,r,q,p=$.he
if(p==null){A.Av(a)
$.jc=$.jb
return}s=new A.lw(a)
r=$.jc
if(r==null){s.b=p
$.he=$.jc=s}else{q=r.b
s.b=q
$.jc=r.b=s
if(q==null)$.jb=s}},
Hp(a,b){A.fh(a,"stream",t.K)
return new A.m3(b.i("m3<0>"))},
Dq(a,b){var s=$.ap
if(s===B.x)return A.wP(a,t.O.a(b))
return A.wP(a,t.O.a(s.fD(b)))},
xw(a,b){A.G_(new A.vm(a,b))},
Aq(a,b,c,d,e){var s,r=$.ap
if(r===c)return d.$0()
$.ap=c
s=r
try{r=d.$0()
return r}finally{$.ap=s}},
FX(a,b,c,d,e,f,g){var s,r=$.ap
if(r===c)return d.$1(e)
$.ap=c
s=r
try{r=d.$1(e)
return r}finally{$.ap=s}},
FW(a,b,c,d,e,f,g,h,i){var s,r=$.ap
if(r===c)return d.$2(e,f)
$.ap=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ap=s}},
mu(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.fD(d)
d=d}A.Av(d)},
tu:function tu(a){this.a=a},
tt:function tt(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a){this.a=a},
tw:function tw(a){this.a=a},
u8:function u8(){},
u9:function u9(a,b){this.a=a
this.b=b},
lv:function lv(a,b){this.a=a
this.b=!1
this.$ti=b},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
vx:function vx(a){this.a=a},
c5:function c5(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
this.b=b},
ot:function ot(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function ow(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ov:function ov(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lz:function lz(){},
iw:function iw(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tB:function tB(a,b){this.a=a
this.b=b},
tG:function tG(a,b){this.a=a
this.b=b},
tF:function tF(a,b){this.a=a
this.b=b},
tD:function tD(a,b){this.a=a
this.b=b},
tC:function tC(a,b){this.a=a
this.b=b},
tJ:function tJ(a,b,c){this.a=a
this.b=b
this.c=c},
tK:function tK(a,b){this.a=a
this.b=b},
tL:function tL(a){this.a=a},
tI:function tI(a,b){this.a=a
this.b=b},
tH:function tH(a,b){this.a=a
this.b=b},
lw:function lw(a){this.a=a
this.b=null},
m3:function m3(a){this.$ti=a},
j_:function j_(){},
lX:function lX(){},
u6:function u6(a,b){this.a=a
this.b=b},
vm:function vm(a,b){this.a=a
this.b=b},
zl(a,b){var s=a[b]
return s===a?null:s},
wV(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wU(){var s=Object.create(null)
A.wV(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yF(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
M(a,b,c){return b.i("@<0>").K(c).i("wC<1,2>").a(A.AH(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
m(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
wD(a){return new A.ck(a.i("ck<0>"))},
a_(a){return new A.ck(a.i("ck<0>"))},
aJ(a,b){return b.i("yG<0>").a(A.GJ(a,new A.ck(b.i("ck<0>"))))},
wW(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h0(a,b,c){var s=new A.f9(a,b,c.i("f9<0>"))
s.c=a.e
return s},
bx(a,b){var s=J.O(a)
if(s.m())return s.gn()
return null},
aO(a,b,c){var s=A.yF(b,c)
a.av(0,new A.pP(s,b,c))
return s},
fI(a,b,c){var s=A.yF(b,c)
s.M(0,a)
return s},
hS(a,b){var s,r=A.wD(b)
for(s=J.O(a);s.m();)r.l(0,b.a(s.gn()))
return r},
fJ(a,b){var s=A.wD(b)
s.M(0,a)
return s},
wE(a){var s,r
if(A.xP(a))return"{...}"
s=new A.bq("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.av(0,new A.pS(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Ef(){throw A.b(A.br("Cannot change an unmodifiable set"))},
iB:function iB(){},
tN:function tN(a){this.a=a},
iD:function iD(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f6:function f6(a,b){this.a=a
this.$ti=b},
iC:function iC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lN:function lN(a){this.a=a
this.c=this.b=null},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(){},
a7:function a7(){},
pR:function pR(a){this.a=a},
pS:function pS(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.$ti=b},
iF:function iF(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iU:function iU(){},
fK:function fK(){},
ed:function ed(a,b){this.a=a
this.$ti=b},
du:function du(){},
iO:function iO(){},
m9:function m9(){},
h_:function h_(a,b){this.a=a
this.$ti=b},
h6:function h6(){},
iV:function iV(){},
FK(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.S(String(s),null,null)
throw A.b(q)}q=A.uK(p)
return q},
uK(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lL(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uK(a[s])
return a},
Ew(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Bh()
else s=new Uint8Array(o)
for(r=J.aH(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Ev(a,b,c,d){var s=a?$.Bg():$.Bf()
if(s==null)return null
if(0===c&&d===b.length)return A.zC(s,b)
return A.zC(s,b.subarray(c,d))},
zC(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
y9(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.S("Invalid base64 padding, more than two '=' characters",a,b))},
yC(a,b,c){return new A.hR(a,b)},
EU(a){return a.B()},
DU(a,b){return new A.tQ(a,[],A.GA())},
DV(a,b,c){var s,r=new A.bq(""),q=A.DU(r,b)
q.cY(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ex(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lL:function lL(a,b){this.a=a
this.b=b
this.c=null},
tP:function tP(a){this.a=a},
lM:function lM(a){this.a=a},
ud:function ud(){},
uc:function uc(){},
jy:function jy(){},
nv:function nv(){},
eB:function eB(){},
jJ:function jJ(){},
jT:function jT(){},
hR:function hR(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(){},
pG:function pG(a){this.b=a},
pF:function pF(a){this.a=a},
tR:function tR(){},
tS:function tS(a,b){this.a=a
this.b=b},
tQ:function tQ(a,b,c){this.c=a
this.a=b
this.b=c},
le:function le(){},
t5:function t5(a){this.a=a},
ub:function ub(a){this.a=a
this.b=16
this.c=0},
AN(a){var s=A.ds(a,null)
if(s!=null)return s
throw A.b(A.S(a,null,null))},
AG(a){var s=A.eO(a)
if(s!=null)return s
throw A.b(A.S("Invalid double",a,null))},
Ch(a,b){a=A.aG(a,new Error())
if(a==null)a=A.fe(a)
a.stack=b.q(0)
throw a},
e6(a,b,c,d){var s,r=c?J.yw(a,d):J.yv(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aA(a,b,c){var s,r=A.c([],c.i("r<0>"))
for(s=J.O(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
H(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.O(a);r.m();)B.a.l(s,r.gn())
return s},
ah(a,b){var s=A.aA(a,!1,b)
s.$flags=3
return s},
z1(a,b,c){var s,r
A.kN(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aX(c,b,null,"end",null))
if(s===0)return""}r=A.Do(a,b,c)
return r},
Do(a,b,c){var s=a.length
if(b>=s)return""
return A.D4(a,b,c==null||c>s?s:c)},
wL(a){return new A.hM(a,A.yA(a,!1,!0,!1,!1,""))},
wO(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.v(s.gn())
while(s.m())}else{a+=A.v(s.gn())
while(s.m())a=a+c+A.v(s.gn())}return a},
ee(){var s,r,q=A.CW()
if(q==null)throw A.b(A.br("'Uri.base' is not supported"))
s=$.z7
if(s!=null&&q===$.z6)return s
r=A.Dw(q)
$.z7=r
$.z6=q
return r},
Dl(){return A.cF(new Error())},
BY(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
yg(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jL(a){if(a>=10)return""+a
return"0"+a},
Cg(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.al(b,"name","No enum value with that name"))},
jU(a){if(typeof a=="number"||A.bw(a)||a==null)return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yP(a)},
Ci(a,b){A.fh(a,"error",t.K)
A.fh(b,"stackTrace",t.l)
A.Ch(a,b)},
jt(a){return new A.js(a)},
w(a,b){return new A.cr(!1,null,b,a)},
al(a,b,c){return new A.cr(!0,a,b,c)},
yR(a){var s=null
return new A.fQ(s,s,!1,s,s,a)},
yS(a,b){return new A.fQ(null,null,!0,a,b,"Value not in range")},
aX(a,b,c,d,e){return new A.fQ(b,c,!0,a,d,"Invalid value")},
kO(a,b,c){if(0>a||a>c)throw A.b(A.aX(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aX(b,a,c,"end",null))
return b}return c},
kN(a,b){if(a<0)throw A.b(A.aX(a,0,null,b,null))
return a},
pl(a,b,c,d){return new A.kc(b,!0,a,d,"Index out of range")},
br(a){return new A.iq(a)},
z4(a){return new A.l9(a)},
j(a){return new A.fX(a)},
au(a){return new A.jG(a)},
S(a,b,c){return new A.z(a,b,c)},
CE(a,b,c){var s,r
if(A.xP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.Fw(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wO(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wz(a,b,c){var s,r
if(A.xP(a))return b+"..."+c
s=new A.bq(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wO(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Fw(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.v(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.v(p))
return}r=A.v(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.v(p)
r=A.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wF(a,b,c){var s=A.m(b,c)
s.kd(a)
return s},
cT(a,b,c,d,e,f){var s
if(B.f===c){s=J.aC(a)
b=J.aC(b)
return A.l6(A.aY(A.aY($.jm(),s),b))}if(B.f===d){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
return A.l6(A.aY(A.aY(A.aY($.jm(),s),b),c))}if(B.f===e){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
return A.l6(A.aY(A.aY(A.aY(A.aY($.jm(),s),b),c),d))}if(B.f===f){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
return A.l6(A.aY(A.aY(A.aY(A.aY(A.aY($.jm(),s),b),c),d),e))}s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
f=J.aC(f)
f=A.l6(A.aY(A.aY(A.aY(A.aY(A.aY(A.aY($.jm(),s),b),c),d),e),f))
return f},
eV(a,b){return new A.h_(A.fJ(a,b),b.i("h_<0>"))},
Dw(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.z5(a4<a4?B.b.I(a5,0,a4):a5,5,a3).gho()
else if(s===32)return A.z5(B.b.I(a5,5,a4),0,a3).gho()}r=A.e6(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.Au(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.Au(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.b.ag(a5,"\\",n))if(p>0)h=B.b.ag(a5,"\\",p-1)||B.b.ag(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ag(a5,"..",n)))h=m>n+2&&B.b.ag(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ag(a5,"file",0)){if(p<=0){if(!B.b.ag(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.I(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bJ(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ag(a5,"http",0)){if(i&&o+3===n&&B.b.ag(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ag(a5,"https",0)){if(i&&o+4===n&&B.b.ag(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.m0(a4<a5.length?B.b.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Ep(a5,0,q)
else{if(q===0)A.h7(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Eq(a5,c,p-1):""
a=A.El(a5,p,o,!1)
i=o+1
if(i<n){a0=A.ds(B.b.I(a5,i,n),a3)
d=A.En(a0==null?A.h(A.S("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Em(a5,n,m,a3,j,a!=null)
a2=m<l?A.Eo(a5,m+1,l,a3):a3
return A.Eg(j,b,a,d,a1,a2,l<a4?A.Ek(a5,l+1,a4):a3)},
z9(a){var s=t.N
return B.a.bq(A.c(a.split("&"),t.s),A.m(s,s),new A.t4(B.ca),t.G)},
ld(a,b,c){throw A.b(A.S("Illegal IPv4 address, "+a,b,c))},
Dt(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ld("each part must be in the range 0..255",a,r)}A.ld("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ld(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bS(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ld(j,a,q)
p=l}A.ld("IPv4 address should contain exactly 4 parts",a,q)},
Du(a,b,c){var s
if(b===c)throw A.b(A.S("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Dv(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.z8(a,b,c)
return!0},
Dv(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.z(n,a,q)
r=q
break}return new A.z("Unexpected character",a,q-1)}if(r-1===b)return new A.z(n,a,r)
return new A.z("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.z("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.z("Invalid IPvFuture address character",a,r)}},
z8(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.t3(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.d(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.d(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.d(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Dt(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dv(l,8)
if(!(o<16))return A.d(s,o)
s[o]=e;++o
if(!(o<16))return A.d(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.dc.hN(s,a0,16,s,a)
B.dc.lG(s,a,a0,0)}}return s},
Eg(a,b,c,d,e,f,g){return new A.iW(a,b,c,d,e,f,g)},
zw(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h7(a,b,c){throw A.b(A.S(c,a,b))},
En(a,b){var s=A.zw(b)
if(a===s)return null
return a},
El(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h7(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Ei(a,q,r)
if(o<r){n=o+1
p=A.zB(a,B.b.ag(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Du(a,q,o)
l=B.b.I(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cH(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.zB(a,B.b.ag(a,"25",n)?o+3:n,c,"%25")}else p=""
A.z8(a,b,o)
return"["+B.b.I(a,b,o)+p+"]"}}return A.Es(a,b,c)},
Ei(a,b,c){var s=B.b.cH(a,"%",b)
return s>=b&&s<c?s:c},
zB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bq(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.x_(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bq("")
l=h.a+=B.b.I(a,q,r)
if(m)n=B.b.I(a,r,r+3)
else if(n==="%")A.h7(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bq("")
if(q<r){h.a+=B.b.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.I(a,q,r)
if(h==null){h=new A.bq("")
m=h}else m=h
m.a+=i
l=A.wZ(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.I(a,b,c)
if(q<c){i=B.b.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Es(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.x_(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bq("")
k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bq("")
if(q<r){p.a+=B.b.I(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h7(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bq("")
l=p}else l=p
l.a+=k
j=A.wZ(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.I(a,b,c)
if(q<c){k=B.b.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Ep(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.zy(a.charCodeAt(b)))A.h7(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h7(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.I(a,b,c)
return A.Eh(q?a.toLowerCase():a)},
Eh(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Eq(a,b,c){return A.iX(a,b,c,16,!1,!1)},
Em(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iX(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.Er(q,e,f)},
Er(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.Et(a,!s||c)
return A.Eu(a)},
Eo(a,b,c,d){return A.iX(a,b,c,256,!0,!1)},
Ek(a,b,c){return A.iX(a,b,c,256,!0,!1)},
x_(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.vH(r)
o=A.vH(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.I(a,b,b+3).toUpperCase()
return null},
wZ(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.d(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.jT(a,6*p)&63|q
if(!(o<r))return A.d(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.d(k,l)
if(!(m<r))return A.d(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.d(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.z1(s,0,null)},
iX(a,b,c,d,e,f){var s=A.zA(a,b,c,d,e,f)
return s==null?B.b.I(a,b,c):s},
zA(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.x_(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h7(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wZ(n)}if(o==null){o=new A.bq("")
k=o}else k=o
k.a=(k.a+=B.b.I(a,p,q))+l
if(typeof m!=="number")return A.vI(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
zz(a){if(B.b.T(a,"."))return!0
return B.b.br(a,"/.")!==-1},
Eu(a){var s,r,q,p,o,n,m
if(!A.zz(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Y(s,"/")},
Et(a,b){var s,r,q,p,o,n
if(!A.zz(a))return!b?A.zx(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gZ(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.zx(s[0]))}return B.a.Y(s,"/")},
zx(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.zy(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.I(a,0,s)+"%3A"+B.b.aN(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Ej(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
x0(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.ca===d)return B.b.I(a,b,c)
else p=new A.de(B.b.I(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.Ej(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.mq.kJ(p)},
zy(a){var s=a|32
return 97<=s&&s<=122},
z5(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.S(k,a,r))}}if(q<0&&r>b)throw A.b(A.S(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gZ(j)
if(p!==44||r!==n+7||!B.b.ag(a,"base64",n+1))throw A.b(A.S("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.et.m8(a,m,s)
else{l=A.zA(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bJ(a,m,s,l)}return new A.t2(a,j,c)},
Au(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a},
lE:function lE(){},
ao:function ao(){},
js:function js(a){this.a=a},
dy:function dy(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kc:function kc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(a){this.a=a},
l9:function l9(a){this.a=a},
fX:function fX(a){this.a=a},
jG:function jG(a){this.a=a},
kA:function kA(){},
ij:function ij(){},
tz:function tz(a){this.a=a},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(){},
K:function K(){},
m6:function m6(){},
rM:function rM(){this.b=this.a=0},
bq:function bq(a){this.a=a},
t4:function t4(a){this.a=a},
t3:function t3(a){this.a=a},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
t2:function t2(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lA:function lA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
qa:function qa(a){this.a=a},
A0(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.EG,a)
s[$.wp()]=a
return s},
V(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.EH,a)
s[$.wp()]=a
return s},
EG(a){return t.BO.a(a).$0()},
EH(a,b,c){t.BO.a(a)
if(A.f(c)>=1)return a.$1(b)
return a.$0()},
xM(a,b,c){return c.a(a[b])},
A1(a,b){return a[b]},
aM(a,b,c,d){return d.a(a[b].apply(a,c))},
aS(a,b){var s=new A.as($.ap,b.i("as<0>")),r=new A.iw(s,b.i("iw<0>"))
a.then(A.hk(new A.wg(r,b),1),A.hk(new A.wh(r),1))
return s},
Ac(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hl(a){if(A.Ac(a))return a
return new A.vC(new A.iD(t.BT)).$1(a)},
wg:function wg(a,b){this.a=a
this.b=b},
wh:function wh(a){this.a=a},
vC:function vC(a){this.a=a},
D5(a){var s
if(a==null)s=B.aS
else{s=new A.ej()
s.bO(a)}return s},
lK:function lK(){},
ej:function ej(){this.b=this.a=0},
qD:function qD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
qE:function qE(){},
eP:function eP(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(a,b){this.a=a
this.b=b
this.c=null},
ft:function ft(a,b){this.a=a
this.b=b},
nK:function nK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nM:function nM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nL:function nL(){var _=this
_.c=_.b=_.a=null
_.d=0},
kG:function kG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1},
fq:function fq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
k_:function k_(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
op:function op(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
e2(a,b){return new A.k9(a,b)},
dt:function dt(){},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b){this.a=a
this.b=b},
k9:function k9(a,b){this.a=a
this.b=b},
H0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iM(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.V(f,new A.wi())
s=A.c([],t.cv)
for(r=A.l4(f,0,A.fh(b,"count",t.S),t.mn),q=r.$ti,r=new A.aD(r,r.gt(0),q.i("aD<a2.E>")),q=q.i("a2.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function o6(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bD:function bD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wi:function wi(){},
pU(a,b,c,d,e,f,g,h,i,j){return new A.dp(c,a,h,g,f,0,e,i,j,B.e0,b,!0)},
kp(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.v(b),null))},
fm:function fm(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.w=f
_.at=g
_.db=h
_.dx=i
_.fx=j
_.go=k
_.id=l},
CM(a){A:{break A}return a},
d_:function d_(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(){},
t7:function t7(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q_:function q_(){},
q0:function q0(){},
q1:function q1(){},
jM:function jM(){},
i2(a){var s,r=t.N,q=A.aJ(["sceneColor","present"],r),p=a.a.b
if(p.p(0,"shadows"))q.M(0,A.aJ(["shadowMap","sceneDepth"],r))
if(p.p(0,"ssao"))q.M(0,A.aJ(["ssaoRaw","ssaoBlurred"],r))
if(p.p(0,"bloom"))q.M(0,A.aJ(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.p(0,"dof"))q.M(0,A.aJ(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.p(0,"grade"))q.l(0,"gradeOutput")
if(p.p(0,"ps1"))q.l(0,"ps1Output")
s=p.p(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.qc(A.eV(q,r),s)},
qc:function qc(a,b){this.a=a
this.b=b},
qd:function qd(){},
fT:function fT(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fz:function fz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
eR:function eR(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c){this.a=a
this.b=b
this.d=c},
oq:function oq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
CK(a){var s,r,q
for(s=a.a,s=new A.ag(s,s.r,s.e,a.$ti.i("ag<1>")),r=B.bo;s.m();){switch(s.d.a){case 0:q=B.bo
break
case 1:q=B.d9
break
case 2:q=B.da
break
case 3:q=B.db
break
default:q=null}if(A.yJ(q)>A.yJ(r))r=q}return r},
yJ(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
AA(a){return new A.bR(A.Ga(a),t.EF)},
Ga(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$AA(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aB("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eL:function eL(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a,b){this.a=a
this.b=b},
pX:function pX(a){this.a=a},
pY:function pY(a){this.a=a},
pV:function pV(a){this.a=a},
pW:function pW(){},
CL(){return new A.kq(new A.cV(new A.pZ(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kq:function kq(a){this.a=a},
pZ:function pZ(){},
Ax(a){var s=4
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 4:s=3
break
case 5:break
case 6:s=5
break
case 7:s=6
break
case 8:break
case 3:s=A.h(A.br("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
EO(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.V[r]
if(A.Ax(q.a)===b)s+=q.c}return s},
CN(a){return new A.q2(a,new A.cV(new A.q3(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
yK(a){var s
A:{s=a.byteLength
break A}return s},
lb:function lb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q2:function q2(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(){},
q4:function q4(){},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
rW:function rW(a,b){this.a=a
this.b=b},
rX:function rX(a){this.a=a},
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(){},
Dp(a){var s=new A.l8(a,new A.cV(new A.rY(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aW($.xX())
s.e=s.aW($.xU())
s.f=s.aW($.xV())
s.r=s.aW($.xT())
s.w=s.aW($.xW())
return s},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rY:function rY(){},
t_:function t_(){},
rZ:function rZ(){},
Gs(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.gF().y
if(o==null){B.a.l(j,new A.dm(p,A.c([p],r)))
continue}n=""+p.gF().a.a+":"+p.gF().b.a+":"+A.v(o)
m=i.h(0,n)
if(m==null){i.k(0,n,j.length)
B.a.l(j,new A.dm(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.k(0,n,l)
B.a.l(j,new A.dm(p,A.c([p],r)))}else B.a.l(k,p)}}return j},
dm:function dm(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
ok:function ok(){},
ol:function ol(a){this.a=a},
oi:function oi(a){this.a=a},
oj:function oj(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b
this.c=0},
DW(){return new A.h1()},
oo:function oo(a){this.a=a
this.b=null},
h1:function h1(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wI(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
qg:function qg(){},
qh:function qh(){},
ce:function ce(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fS:function fS(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
kK:function kK(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bo:function bo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qF:function qF(){},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qH:function qH(a,b){this.a=a
this.b=b},
qM:function qM(){},
qL:function qL(){},
qK:function qK(){},
qJ:function qJ(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(a,b){this.a=a
this.b=b},
Db(a){return new A.i9(a,new A.cV(new A.qN(),A.c([],t.w_),A.c([],t.t),t.tc))},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
this.b=b},
qN:function qN(){},
v2(a,b){return A.EZ(a,b)},
EZ(a,b){var s=0,r=A.bh(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$v2=A.bi(function(c,a0){if(c===1)return A.bd(a0,r)
for(;;)switch(s){case 0:a.bQ()
if(a.at!=null)throw A.b(A.j("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bW(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.bX(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cO(b)
n=new A.kK(a.a,A.m(t.N,t.CH))
l=A.zX(a,n,b,o.a.b.a)
m=l.a
i.bX(p)
h=a.x
g=o
if(h.e)A.h(A.j("GPU resource adapter is disposed"))
h.ez(g)
f=h.c
h.b.bX(g.a)
h.c=g
h.d=null
if(f!=null)h.df(f.b)
g.c=B.hN
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bC()
h=j
if(h!=null)h.bC()}catch(d){if(p.c===B.aV){h=t.AB.a(p)
i.eJ(h)
i.a.fw(h.a)
i.b.dY(h.b)
h.c=B.eV
i.c=null}i=o
if((i==null?null:i.c)===B.ag){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.j("GPU resource adapter is disposed"))
i.ez(h)
i.df(h.b)
i.b.dY(h.a)
h.c=B.hO
i.d=null}i=m
if(i!=null)i.bC()
i=n
if(i!=null)i.bC()
throw d}case 1:return A.be(q,r)}})
return A.bf($async$v2,r)},
zY(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zX(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zX(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.v0(a),j=new A.v1(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Gx(b,h,d,i,s.gmN(),new A.uM(j),new A.uN(j),new A.uO(a),new A.uT(a),new A.uU(a),new A.uV(j),new A.uW(j),s.gmP(),new A.uX(a),s.gmT(),r.gmR(),k,s.gmV(),s.gmX(),new A.uY(j,c),new A.uZ(j),new A.v_(j),new A.uP(j),new A.uQ(j),new A.uR(a),new A.uS(j),e,f,g,c.r)}else{p=new A.aK(l,B.q,g,f,e,0)
o=new A.aK(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hW(h,p,o):null
k=A.c([new A.lq(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i5(b,u.l,u.B,h,i,d))
q=new A.jY(k)}a.r.toString
m=q.kw(B.a2,new A.qF(),!1,new A.lU())
k=m.a.b
if(k.length!==0)throw A.b(A.j("safe renderer graph is invalid: "+A.v(k)))
return new A.u7(q,m)},
F_(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.j("renderer graph is not initialized"))
s=A.H(b7.gh5(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.aa()
p=p.gar()
n=A.D(p)
B.a.l(s,new A.m7(new A.cu((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.I(p,n.i("J(1)").a(o.gaC()),n.i("I<1,J>")))))}p=b8.a
m=A.GC(A.Cm(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e2(B.aA,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a8(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e2(B.aA,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a8(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.oo(n)
e.kr("cull")
j=l-f
d=e.b
if(d==null)A.h(A.j("cull recorded outside an active frame"))
if(j<0)A.h(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gF().e===B.ay)B.a.l(a,new A.aP(new A.bI(a0.hm(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.l(b,new A.aP(new A.bK(B.kO,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.lG(A.Gs(A.H2(b)),A.H1(a),p,b8.b,b8.c)
a4=new A.jP(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.h(A.al(g,"passId",null))
e.b=g
n.cQ(g,A.AI())
a6=A.m(o,i)
for(g=a5.gF().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.h(A.j("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.h(A.j("resource is not in candidate: "+b1))
b3=new A.fo(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cQ(b0,new A.v3(b3))}a5.ao(new A.jC(a6,a4,a3))}return new A.tA(e,m,j)},
yZ(a){return new A.qW(a,new A.nJ(new A.nL(),new A.kR()),new A.k0(A.c([],t.h1),B.hy),A.c([],t.Ft),B.by,A.c([],t.ow),null)},
qR:function qR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tA:function tA(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(a){this.a=a},
v1:function v1(a,b){this.a=a
this.b=b},
v_:function v_(a){this.a=a},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
uZ:function uZ(a){this.a=a},
uO:function uO(a){this.a=a},
uQ:function uQ(a){this.a=a},
uP:function uP(a){this.a=a},
uY:function uY(a,b){this.a=a
this.b=b},
uM:function uM(a){this.a=a},
uN:function uN(a){this.a=a},
uV:function uV(a){this.a=a},
uW:function uW(a){this.a=a},
uX:function uX(a){this.a=a},
uS:function uS(a){this.a=a},
uR:function uR(a){this.a=a},
v3:function v3(a){this.a=a},
u7:function u7(a,b){this.a=a
this.b=b},
lU:function lU(){},
lG:function lG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qW:function qW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qX:function qX(){},
qY:function qY(){},
qZ:function qZ(){},
lR:function lR(a){this.b=a},
tM:function tM(){},
lY:function lY(){},
ii:function ii(a,b){this.a=a
this.b=b},
H2(a){var s,r,q=A.H(a,t.E0)
B.a.V(q,new A.wm())
s=A.D(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wn()),r),r.i("a2.E"))
s.$flags=1
return s},
H1(a){var s,r,q=A.H(a,t.EH)
B.a.V(q,new A.wk())
s=A.D(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wl()),r),r.i("a2.E"))
s.$flags=1
return s},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
wm:function wm(){},
wn:function wn(){},
wk:function wk(){},
wl:function wl(){},
GC(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.ge5()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.gE().q(0),null))
if(a.n4(o.ge5())===B.cq){++q
continue}B.a.l(l,o)}return new A.o0(l,new A.o1(q))},
o1:function o1(a){this.b=a},
o0:function o0(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.mv,q=B.mx,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.J(m,k,Math.min(r.c,o))
q=new A.J(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jo(r,q)},
jo:function jo(a,b){this.a=a
this.b=b},
Cm(a){var s,r,q,p,o,n,m=a.a,l=new A.os(),k=m.length
if(3>=k)return A.d(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.d(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.d(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.d(m,15)
return new A.or(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eN:function eN(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
or:function or(a){this.a=a},
os:function os(){},
yH(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dn(new Float32Array(A.a1(a)))},
wG(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dn(q)},
yI(a,b,c){var s=b.gaz(),r=c.bA(s).gaz(),q=s.bA(r),p=new Float32Array(16)
p[0]=r.a
p[1]=q.a
p[2]=-s.a
p[3]=0
p[4]=r.b
p[5]=q.b
p[6]=-s.b
p[7]=0
p[8]=r.c
p[9]=q.c
p[10]=-s.c
p[11]=0
p[12]=-r.c1(a)
p[13]=-q.c1(a)
p[14]=s.c1(a)
p[15]=1
return new A.dn(p)},
dn:function dn(a){this.a=a},
pT:function pT(){},
kM:function kM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b){this.a=a
this.b=b},
mW:function mW(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.ch=k},
ix:function ix(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
lx:function lx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jB:function jB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jO:function jO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lB:function lB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iz:function iz(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
lC:function lC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jR:function jR(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i
_.Q=j
_.as=k
_.at=l},
lD:function lD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
k8:function k8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lI:function lI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a){this.b=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
bA(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aK(a.a,a.b,b,c,s,r)},
wJ:function wJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=a
_.d=b
_.r=c
_.w=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.CW=m
_.cx=n
_.cy=o
_.db=p
_.dx=q},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lV:function lV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kL:function kL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z0(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mt:B.a6,q=A.yI(a.b,s,r)
return new A.eX(A.wG(1,a.f,B.c.D(a.w*2,0.1,3),0.05).ac(0,q))},
eX:function eX(a){this.a=a},
kZ:function kZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
lZ:function lZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Gx(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.p(0,"shadows"))throw A.b(A.al(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.p(0,"ssao")
r=b6.p(0,"bloom")
q=b6.p(0,"dof")
p=b6.p(0,"grade")
o=b6.p(0,"ps1")
n=b6.p(0,"vhs")
b6=B.d.a8(e5+1,2)
m=B.d.a8(e4+1,2)
l=A.bA(B.bB,e5,e4,e3,a8)
k=A.bA(B.bB.h7(),e5,e4,a8,a8)
A.bA(B.ls,e5,e4,a8,a8)
j=A.bA(B.lp,e5,e4,a8,a8)
i=A.bA(B.lk,e6,e6,a8,a8)
h=A.bA(B.ll,b6,m,a8,a8)
g=A.bA(B.lm,b6,m,a8,a8)
f=A.bA(B.lq,b6,m,a8,a8)
e=A.bA(B.lr,b6,m,a8,a8)
d=$.B1()
c=e3>1
b=A.bA(d,e5,e4,a8,c?2:1)
d=A.bA(B.lh,b6,m,a8,a8)
a=A.bA(B.li,b6,m,a8,a8)
a0=A.bA(B.lj,e5,e4,a8,a8)
a1=A.bA(B.ln,e5,e4,a8,a8)
a2=A.bA(B.lt,e5,e4,a8,a8)
a3=A.bA(B.lo,e5,e4,a8,a8)
a4=c?new A.hW(b8,l,k):a8
b5.a=null
a5=A.z0(B.m5)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.M(a7,A.c([new A.hr(b7,a9,b0,b8,b1,b1,B.dZ,!0,k,f,d6,b6,m),new A.hr(b7,a9,b0,b8,b2,b2,B.nb,!1,f,e,c2,b6,m),new A.jB(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.M(a7,A.c([new A.hy(b7,a9,b0,b8,b3,b3,B.e_,k,d,d6,b6,m),new A.hy(b7,a9,b0,b8,b4,b4,B.nc,d,a,c7,b6,m),new A.jR(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k8(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kL(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.lf(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jO(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.l1(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.l0(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kZ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vz(b5),i))
j.push(new A.l_(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vA(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.M(j,a7)
j.push(new A.i5(b7,a9,u.B,b8,k,b9))
return new A.jY(j)},
vz:function vz(a){this.a=a},
vA:function vA(a,b){this.a=a
this.b=b},
l_:function l_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3},
m_:function m_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r},
l1:function l1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
m2:function m2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l0:function l0(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
m1:function m1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lf:function lf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ma:function ma(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lq:function lq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
md:function md(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nH:function nH(){},
kY(a,b){return new A.ih(a,b)},
k5:function k5(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eI:function eI(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hF:function hF(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
oO:function oO(){},
oP:function oP(){},
h3:function h3(a,b){this.a=a
this.b=b},
em:function em(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
yj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fA(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jz:function jz(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
b7:function b7(a,b){this.a=a
this.b=b},
tq:function tq(){this.a=null},
DB(a){var s=new A.lo(a,B.h,new A.tq(),A.DM(a))
s.it(a)
return s},
DM(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.aV(q,A.D(q).i("aV<1,e>")))
while(r.m())s.l(0,r.gn())
return s},
bP(a,b){var s,r
if(a.b!==B.h)A.h(A.j(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.f(s.drawingBufferWidth),A.f(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
DH(a,b){var s
if(a.b!==B.h)A.h(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.f(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
DG(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
DF(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
DE(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
zc(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.f(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.f(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
DC(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
ba(a,b){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=a.f
r=s.lm(b)
if(r.a===0)return
if(r.p(0,B.bF)){q=v.G
p=a.a
if(b.a)p.enable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bG))a.a.depthFunc(A.DF(a,b.b))
if(r.p(0,B.bH))a.a.depthMask(b.c)
if(r.p(0,B.bL)){q=v.G
p=a.a
if(b.w)p.enable(A.f(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.f(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.bM))a.a.cullFace(A.DE(a,b.x))
if(r.p(0,B.dL)){q=v.G.WebGL2RenderingContext
q=A.f(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bI)){q=v.G
p=a.a
if(b.d)p.enable(A.f(q.WebGL2RenderingContext.BLEND))
else p.disable(A.f(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.bJ))a.a.blendFunc(A.zc(a,b.e),A.zc(a,b.f))
if(r.p(0,B.bK))a.a.blendEquation(A.DC(a,b.r))
if(r.p(0,B.dJ))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.dK)){q=v.G.WebGL2RenderingContext
a.a.disable(A.f(q.SCISSOR_TEST))}s.a=b},
DD(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.f(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.f(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.f(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d2(a,b,c,d,e,f){var s
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.DD(a,b))},
c4(a,b){var s
if(a.b!==B.h)A.h(A.j(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
t(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.h(A.j(u.k))
s=a.e
if(s==null)throw A.b(A.j("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.E(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bv(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
l=p[2]
if(3>=o)return A.d(p,3)
A.aM(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.f(c.b))
break}},
bt(a,b){if(a.b!==B.h)A.h(A.j(u.k))
a.a.bindVertexArray(A.a(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.h(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iZ){p=s.d>1?A.f(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iY){o=s.b
if(o!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
DI(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.f(p.ELEMENT_ARRAY_BUFFER),c,A.f(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
DJ(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
zf(a,b){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
r=A.E(s.createBuffer())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cD?A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.f(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.DJ(a,b.b))
return new A.dD(r)},
zd(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
ze(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
DK(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
r=A.E(s.createTexture())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.f(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.DK(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aM(s,"texStorage3D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aM(s,"texStorage2D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.zd(a,b.e))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.zd(a,b.f))
p=b.r
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.ze(a,p))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.ze(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.f3(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.al(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dD(new A.iZ(r,j,i,q,m))},
wS(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.h(A.j(u.k))
s=t.e.a(b.a)
r=s.d
if(c>=r)throw A.b(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.f(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aM(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aM(l,"texSubImage2D",[m,0,0,0,q,p,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
zg(a,b){var s,r,q
if(a.b!==B.h)A.h(A.j(u.k))
s=t.e.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.f(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
lp(a,b){a.a.deleteTexture(t.e.a(b.a).a)},
zi(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.h(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.E(r.createFramebuffer())
if(q==null)throw A.b(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aY
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cF||o===B.hQ
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.f(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aM(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aM(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aM(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aM(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aM(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aM(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aM(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aM(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
A.aM(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.f(r.checkFramebufferStatus(A.f(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.f(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wT(a0,q,l,k,f,e,j,i)
throw A.b(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dD(new A.iY(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wT(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d3(a){var s
if(a.b!==B.h)A.h(A.j(u.k))
s=A.E(a.a.createVertexArray())
if(s==null)throw A.b(A.j("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dD(s)},
zh(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.E(p.createShader(b))
if(o==null)throw A.b(A.kY(b===A.xM(A.A1(A.AZ(),r),q,t.S)?B.dE:B.dF,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.hl(p.getShaderParameter(o,A.f(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aj(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kY(b===A.xM(A.A1(A.AZ(),r),q,t.S)?B.dE:B.dF,s))}return o},
DL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.h(A.j(u.k))
q=v.G
s=A.zh(a,A.f(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.zh(a,A.f(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.E(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lS)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.hl(o.getProgramParameter(n,A.f(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aj(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kY(B.dG,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.f(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kY(B.dH,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.E(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kY(B.dH,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dD(n)},
dD:function dD(a){this.a=a},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iY:function iY(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
mc:function mc(a){this.a=a
this.b=!1},
lo:function lo(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
uf:function uf(){},
mb:function mb(){},
tm:function tm(a){this.a=a},
tp:function tp(){},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n9(a,a0){var s=0,r=A.bh(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n9=A.bi(function(a1,a2){if(a1===1)return A.bd(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.m(t.N,o)
m=A.a(p.createGain())
l=A.a(p.createGain())
k=A.a(p.createGain())
j=A.a(p.createGain())
i=A.a(p.createGain())
h=A.a(p.createGain())
g=A.a(p.createGain())
f=A.a(p.createGain())
e=A.a(p.createGain())
d=A.a(p.createGain())
c=A.a(p.createConvolver())
b=new A.jv(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aS,A.m(o,t.jS))
b.ia(p,a0)
p=A.o(a).i("L<1,2>")
s=3
return A.ae(A.ou(A.ko(new A.L(a,p),p.i("bU<ar>(n.E)").a(new A.na(b)),p.i("n.E"),t.ls),t.c),$async$n9)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.ja():n
c.buffer=p
q=b
s=1
break
case 1:return A.be(q,r)}})
return A.bf($async$n9,r)},
jv:function jv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ch=_.ay=null
_.CW=p
_.cx=!1
_.dx=_.cy=null
_.id=_.go=_.fy=_.fx=_.fr=1
_.k1=!1
_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p2=!1
_.p4=_.p3=1},
nb:function nb(){},
na:function na(a){this.a=a},
nd:function nd(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
ne:function ne(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
BG(a,b,c,d,e,f,g){var s=new A.n0(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.ic(a,b,c,d,0,e,f,g)
return s},
BC(a,b){var s=new A.mI(b)
s.i9(a,b)
return s},
BF(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.L(a,A.o(a).i("L<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aA(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mX(A.aW(n,r,t.a))
n.ib(a)
return n},
G5(a,b){var s,r,q,p=b>>>0
for(s=new A.de(a),r=t.E,s=new A.aD(s,s.gt(0),r.i("aD<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AM(p,q==null?r.a(q):q)}return p&2147483647},
jw:function jw(a,b){this.a=a
this.b=b},
n0:function n0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n1:function n1(){},
mI:function mI(a){this.a=a},
mJ:function mJ(){},
hp:function hp(){},
mK:function mK(){},
mL:function mL(){},
mX:function mX(a){this.a=a},
mZ:function mZ(){},
n_:function n_(){},
mY:function mY(){},
ww:function ww(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
n8:function n8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n2:function n2(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(a){this.a=a},
n4:function n4(){},
iv:function iv(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
on:function on(a){this.a=a},
kd:function kd(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=0
_.z=null
_.as=_.Q=0
_.at=!1
_.ay=!0
_.ch=i
_.CW=j},
pn:function pn(a){this.a=a},
Cy(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.L(a,A.o(a).i("L<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pm(n)},
pm:function pm(a){this.a=a},
pq:function pq(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pK:function pK(a,b,c){this.a=a
this.c=b
this.e=c},
pH:function pH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(){},
o2:function o2(){this.b=this.a=0},
pQ:function pQ(a){this.a=a
this.b=0
this.e=!1},
ik(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bS(a)
s=a.length
if(!(b<s))return A.d(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.d(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.d(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.d(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.d(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.d(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.d(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.d(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.d(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.d(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.d(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.d(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.d(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.d(a,r)
a[r]=l
return b+14},
cY:function cY(a){this.a=a
this.b=0},
ir(a,b,c){return new A.k(a,b,c)},
za(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
DN(a,b,c,d){return new A.lr(d,b,c,a)},
DP(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Bd()
s=a.d
r=A.ts(s,0)
q=A.ts(s,1)
p=A.ts(s,2)
o=A.ts(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bF(m,0))n.l(0,"GamepadA")
if(A.bF(m,1))n.l(0,"GamepadB")
if(A.bF(m,2))n.l(0,"GamepadX")
if(A.bF(m,3))n.l(0,"GamepadY")
if(A.bF(m,4))n.l(0,"GamepadLB")
if(A.bF(m,5))n.l(0,"GamepadRB")
if(A.bF(m,6))n.l(0,"GamepadLT")
if(A.bF(m,7))n.l(0,"GamepadRT")
if(A.bF(m,8))n.l(0,"GamepadView")
if(A.bF(m,9))n.l(0,"GamepadMenu")
if(A.bF(m,10))n.l(0,"GamepadLStick")
if(A.bF(m,11))n.l(0,"GamepadRStick")
if(A.bF(m,12))n.l(0,h)
if(A.bF(m,13))n.l(0,g)
if(A.bF(m,14))n.l(0,f)
if(A.bF(m,15))n.l(0,e)
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.k(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gaz():i
return new A.lr(m,p,o,A.eV(n,s))},
ts(a,b){return A.DO(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
DO(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc7(a)?-s:s},
l2:function l2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nx:function nx(a){this.a=a},
C1(a,b,c){var s=new A.jS(a,c,null,b)
s.ii(a,null,null,b,c)
return s},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Ce(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bx(new A.G(B.jw,t.e2.a(new A.of(a)),t.vL),t.yW)
return s==null?null:new A.fB(s)},
CO(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wH(s,a,B.j4)
break
case 1:A.wH(s,a,B.j5)
break
case 2:A.wH(s,a,B.jz)
break}return s},
wH(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Cd(a){if(a.a!==21)return null
if(a.e)return B.f4
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f5
return B.f3},
cc:function cc(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fB:function fB(a){this.a=a},
of:function of(a){this.a=a},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
CT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
if(!e.b(a))return g
s=a.h(0,"roomId")
r=a.h(0,"eye")
q=a.h(0,"yaw")
p=a.h(0,"pitch")
if(typeof s!="string"||!e.b(r)||typeof q!="number"||typeof p!="number")return g
o=r.h(0,"x")
n=r.h(0,"y")
m=r.h(0,"z")
if(typeof o!="number"||typeof n!="number"||typeof m!="number")return g
l=typeof a.h(0,f)=="string"?A.p(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.kE(s,new A.k(o,n,m),q,p,l,j)
i=!1
if(isFinite(o))if(isFinite(n))if(isFinite(m))if(isFinite(q))if(isFinite(p))if(Math.abs(p)<=1.5707963267948966)if(e)e=isFinite(j)&&j>=0&&j<=1
else e=!0
else e=i
else e=i
else e=i
else e=i
else e=i
else e=i
return e?h:g},
kE:function kE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
G7(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fk)
p.k(0,q,r.b)}return p},
ul(a){var s,r,q,p,o,n=a.ga_().bK(0)
B.a.W(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.zU(a.h(0,o)))}return A.aW(r,t.N,s)},
zU(a){var s
if(t.f.b(a))return A.ul(A.G7(a))
if(t.j.b(a)){s=t.z
return A.ah(J.dK(a,A.GW(),s),s)}if(a==null||A.bw(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.h3)
return a}throw A.b(A.S("presentation snapshot contains unsupported value "+J.fl(a).q(0),null,null))},
qx:function qx(a){this.a=a},
yY(a,b,c){var s=A.x9(b),r=A.x9(a)
if(c!==2)A.h(A.al(c,"version","unsupported save version"))
return new A.fU(c,s,r)},
x9(a){var s,r,q,p,o=A.o(a).i("ac<1>"),n=A.H(new A.ac(a,o),o.i("n.E"))
B.a.W(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.zT(a.h(0,p)))}return A.aW(s,t.N,o)},
zT(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fT)
s.k(0,p,q.b)}return A.x9(s)}if(t.j.b(a)){r=t.z
return A.ah(J.dK(a,A.H_(),r),r)}if(a==null||A.bw(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.h7)
return a}throw A.b(A.S("save contains unsupported value "+J.fl(a).q(0),null,null))},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(){},
eU:function eU(a,b){this.a=a
this.b=b},
yn(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.oA(a,b,c,d,e,f,g,s,r,h)},
yo(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aL(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fS)
r=d.h(0,"runSeed")
q=A.aL(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.b(B.hl)
if(!isFinite(5760))throw A.b(A.al(5760,"daySeconds","must be finite and > 0"))
n=new A.k3(p,7,5760)
n.hk(o)
s=t.N
m=t.z
l=A.CI(a5,A.aO(a0,s,m))
k=A.BZ(l,A.aO(a,s,m),n)
j=A.AE(a3,c)
A.Cx(A.aO(a1,s,m)).kl(j)
s=A.aO(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bw(f))A.h(B.fu)
e=A.CP(d.h(0,"narrative"))
if(e==null)e=A.q6(null,null,null)
return A.yn(c,q,j,n,l,k,new A.jQ(i,h,g,f),e)},
EY(a){var s
switch(a.a){case 0:s="time.advanced"
break
case 1:s="day.end-reached"
break
case 2:s="journal.written"
break
case 3:s="journal.rejected"
break
case 4:s="sleep.completed"
break
case 5:s="compliance.floor-tripped"
break
default:s=null}return s},
eH:function eH(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.c=a
this.d=b},
oB:function oB(a,b){this.a=a
this.b=b},
oA:function oA(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=1
_.z=j},
oC:function oC(a){this.a=a},
oD:function oD(){},
oE:function oE(){},
oF:function oF(a){this.a=a},
oG:function oG(){},
y8(a){var s,r,q,p,o,n,m,l="modelScale",k=A.je(a,"house manifest"),j=typeof k.h(0,l)=="number"?A.a6(k.h(0,l)):1
if(!isFinite(j)||j<=0)throw A.b(B.fI)
s=A.c7(k,"houseId")
r=A.c7(k,"sourceRef")
q=J.dK(A.hb(k,"levels"),new A.nf(),t.mD)
q=A.H(q,q.$ti.i("a2.E"))
q.$flags=1
p=J.dK(A.hb(k,"rooms"),new A.ng(j),t.bJ)
p=A.H(p,p.$ti.i("a2.E"))
p.$flags=1
o=J.dK(A.hb(k,"portals"),new A.nh(j),t.lT)
o=A.H(o,o.$ti.i("a2.E"))
o.$flags=1
n=J.dK(A.hb(k,"stairs"),new A.ni(),t.gI)
n=A.H(n,n.$ti.i("a2.E"))
n.$flags=1
m=J.dK(A.hb(k,"exteriorCells"),new A.nj(),t.N)
m=A.H(m,m.$ti.i("a2.E"))
m.$flags=1
s=new A.jx(s,r,q,p,o,n)
s.e2()
return s},
AE(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
a4.e2()
s=A.yq(a5)
r=new A.vy()
for(q=a4.e,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){k=q[l]
r.$1(k.b)
j=k.c
i=j.length
if(0>=i)return A.d(j,0)
h=j[0]
if(1>=i)return A.d(j,1)
g=j[1]
if(2>=i)return A.d(j,2)
j=j[2]
i=k.d
f=i.length
if(0>=f)return A.d(i,0)
e=i[0]
if(1>=f)return A.d(i,1)
d=i[1]
if(2>=f)return A.d(i,2)
i=i[2]
f=A.c([],m)
for(c=k.e,b=c.length,a=0;a<c.length;c.length===b||(0,A.u)(c),++a){a0=c[a]
f.push(new A.f2(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f,a0.r))}a1=A.aA(k.f,!1,o)
a1.$flags=3
B.a.l(n,new A.eT(k.a,new A.k(e,d,i),new A.k(h,g,j),f,B.j9,k.r,k.w,k.x))}for(q=a4.f,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a2=q[l]
B.a.l(o,new A.bZ(a2.a,a2.b,a2.c,a2.d,a2.e,a2.f,a2.r,a2.w,a2.x,a2.at,a2.Q,a2.z,a2.y,a2.as))}for(q=a4.r,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a3=q[l]
a1=A.aA(a3.c,!1,n)
a1.$flags=3
m=a3.d
j=m.length
if(0>=j)return A.d(m,0)
if(1>=j)return A.d(m,1)
if(2>=j)return A.d(m,2)
m=a3.e
j=m.length
if(0>=j)return A.d(m,0)
if(1>=j)return A.d(m,1)
if(2>=j)return A.d(m,2)
m=a3.f
j=m.length
if(0>=j)return A.d(m,0)
i=m[0]
if(1>=j)return A.d(m,1)
h=m[1]
if(2>=j)return A.d(m,2)
m=m[2]
j=a3.r
g=j.length
if(0>=g)return A.d(j,0)
f=j[0]
if(1>=g)return A.d(j,1)
e=j[1]
if(2>=g)return A.d(j,2)
B.a.l(o,new A.eY(a3.a,a3.b,new A.k(i,h,m),new A.k(f,e,j[2])))}s.lR()
return s},
BI(a,b){var s,r=A.je(a,"room"),q=A.c7(r,"id"),p=A.c7(r,"floor"),o=A.At(r.h(0,"origin"),"origin",b),n=A.At(r.h(0,"size"),"size",b),m=J.dK(A.hb(r,"windows"),new A.ns(b),t.ya)
m=A.H(m,m.$ti.i("a2.E"))
m.$flags=1
s=J.dK(A.hb(r,"portalIds"),new A.nt(),t.N)
s=A.H(s,s.$ti.i("a2.E"))
s.$flags=1
return new A.dP(q,p,o,n,m,s,A.xE(r,"wall"),A.xE(r,"floor"),A.xE(r,"ceiling"))},
je(a,b){return t.P.b(a)?a:A.dG(b+" is not an object")},
hb(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.dG(b+" is not a list")},
c7(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dG(b+" is not a string")},
xE(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.dG("surface is not an object")
return A.c7(s,b)},
xe(a,b){var s,r=A.c7(a,b)
A:{if("north"===r){s=B.r
break A}if("east"===r){s=B.ad
break A}if("south"===r){s=B.p
break A}if("west"===r){s=B.ae
break A}s=A.dG(b+" has unknown facing "+r)}return s},
FI(a,b){var s,r
if(t.j.b(a)){s=J.aH(a)
s=s.gO(a)||s.L(a,new A.vf())}else s=!0
if(s)return A.dG(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
er(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dG(b+" is not finite")},
mx(a,b){var s,r
if(t.j.b(a)){s=J.aH(a)
s=s.gt(a)!==3||s.L(a,new A.vw())}else s=!0
if(s)return A.dG(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
At(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.mx(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
jj(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gn()
if(!q.l(0,r))throw A.b(A.S("duplicate "+b+" id "+r,null,null))}},
dG(a){return A.h(A.S(a,null,null))},
jx:function jx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nf:function nf(){},
ng:function ng(a){this.a=a},
nh:function nh(a){this.a=a},
ni:function ni(){},
nj:function nj(){},
nl:function nl(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
nk:function nk(a){this.a=a},
vy:function vy(){},
dN:function dN(a){this.a=a},
dP:function dP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ns:function ns(a){this.a=a},
nt:function nt(){},
dR:function dR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dO:function dO(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
dQ:function dQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vf:function vf(){},
vw:function vw(){},
jD:function jD(a,b){this.a=a
this.b=b
this.d=null},
nI:function nI(a){this.a=a},
kr:function kr(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
ls:function ls(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p4:function p4(){this.b=0},
a0:function a0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oh:function oh(){},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function p6(){},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
H8(a){var s,r,q,p,o,n,m,l
a.C()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.d(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.d(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.d(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.d(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.d(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.d(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.d(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.d(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.d(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.d(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.d(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.d(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.d(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.d(p,l)
p[l]=n.x}s=a.c
return new A.ch(B.ab,p,new Uint16Array(A.a1(a.b)),new A.jo(new A.J(s.a,s.b,s.c),new A.J(s.d,s.e,s.f)))},
H7(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.G4(a,new A.wo(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jW(o,p.c,p.e))}return n},
G4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.m(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.d(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.d(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.d(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.d(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.d(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.d(o,j)
throw A.b(A.w("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.p(d,":")?B.b.I(d,0,B.b.br(d,":")):null
l=new A.d4(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.M(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("am<2>")
q=A.H(new A.am(s,q),q.i("n.E"))
B.a.V(q,new A.vq())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].nf(a))
return r},
EF(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jV(r,q,p,o,n,m)},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
wo:function wo(a){this.a=a},
vq:function vq(){},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eD:function eD(a,b){this.a=a
this.b=b},
jX:function jX(){},
Gv(a){var s,r,q,p=new A.p5(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.F0(p,a,B.d_[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a0(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a0(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ah(r,new A.a0(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ah(r,q,new A.a0(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a0(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a0(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ah(q,new A.a0(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ah(q,r,new A.a0(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ah(new A.a0(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a0(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a0(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ah(new A.a0(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a0(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a0(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a0(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a0(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ah(r,new A.a0(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ah(r,q,new A.a0(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a0(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a0(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ah(q,new A.a0(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ah(q,r,new A.a0(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.FU(p,15.75,15.75,12.044999999999998,16.32)
A.EJ(p,15.75,15.75,16.32)
A.EX(p,15.75,15.75,12.044999999999998)
A.F4(p,a,15.75)
A.G0(p,15.75,15.75)
A.EE(p,15.75)
return p.ku()},
F0(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ad!==b7,p=B.r!==b7,o=B.p===b7,n=B.ae===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aG(k)
switch(m){case 0:i=k.d.c===0
break
case 2:i=Math.abs(k.d.c+j.c-b9)<0.001
break
case 3:i=k.d.a===0
break
case 1:i=Math.abs(k.d.a+j.a-b8)<0.001
break
default:i=null}if(!i)continue
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.u)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.ei(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aL(i),b=J.O(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aZ(i)!==b7)continue
B:{if(!p||o){a0=g+a.aH(i)
break B}if(!q||n){a0=e+a.aH(i)
break B}a0=null}B.a.l(b4,new A.ei(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.r||b7===B.p?b8:b9
r=t.i
a1=A.aJ([0,s],r)
a2=A.aJ([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.u)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.H(a1,a1.$ti.c)
B.a.W(a4)
a5=A.H(a2,a2.$ti.c)
B.a.W(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.L(b4,new A.v5(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.F3(b5,b4,b7,b8,b9,c1)
A.F1(b5,b4,b7,b8,b9,c1)
A.F2(b5,b4,b7,b8,b9,c0,c1)},
F2(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aJ([0,a4===B.r||a4===B.p?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.H(a1,a1.$ti.c)
B.a.W(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.L(a3,new A.v4(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
F1(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.u)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.A(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.A(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.A(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.A(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.A(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.A(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.r)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
F3(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.u)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.A(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.A(e,a1,a,l,a0,b,m)
a2.A(e,a1,b,l,c,b-0.06,m)
a2.A(e,a1,a+0.06,l,c,a,m)
if(f)a2.A(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.A(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.A(e,a1,a,j,a0,b,k)
a2.A(e,a1,b,j,c,b-0.06,k)
a2.A(e,a1,a+0.06,j,c,a,k)
if(f)a2.A(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.A(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.A(e,l,a,a1,m,d,a0)
a2.A(e,l,d,a1,m,d-0.06,b)
a2.A(e,l,a+0.06,a1,m,a,b)
if(f)a2.A(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.A(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.A(e,o,a,a1,p,d,a0)
a2.A(e,o,d,a1,p,d-0.06,b)
a2.A(e,o,a+0.06,a1,p,a,b)
if(f)a2.A(3,p,a,c+0.07,n,d,c)
break}if(!f)A.FZ(a2,g,a4,a5,a6,a7,q)}},
FZ(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.A(3,o+0.025,m,r,o-0.025,n,s)
a.A(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.A(3,o+0.025,m,r,o-0.025,n,s)
a.A(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.A(3,r,m,o+0.025,s,n,o-0.025)
a.A(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.A(3,r,m,o+0.025,s,n,o-0.025)
a.A(3,r,l+0.025,p,s,l-0.025,q)
break}},
FU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.FV(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
FV(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a0(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a0(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ah(n,new A.a0(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ah(n,m,new A.a0(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a0(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a0(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ah(m,new A.a0(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ah(m,n,new A.a0(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
EJ(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
EX(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
F4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aH("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.A(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.A(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.A(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.A(6,p,1.95,-0.58,q+0.16,1.55,-0.63)
a.A(3,q+0.32,1.5,-0.55,q+0.12,1.42,-0.69)
k=r-0.18
a.A(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.A(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
G0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.A(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.A(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.A(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.A(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.A(6,m,j+0.06,l,s,j,n)}a.A(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.A(6,i+0.34,0.22,s,i,0.1,h)}},
EE(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v5:function v5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v4:function v4(a,b,c){this.a=a
this.b=b
this.c=c},
GY(a,b,c,d,e){var s,r,q,p,o,n,m,l
A.AW(b,d,c)
s=A.AX(b,d,c)
if(s!=null){r=s.ax&&!s.ay&&!s.z?"close door":"open door"
return new A.eE(B.fc,s.a,r)}if(A.AY(b,d,c)!=null)return B.fg
q=A.GX(a,b,c,d)
if(q!=null)return new A.eE(B.cl,q.a,"inspect the "+q.b)
p=A.AV(b,c,d,e)
if(p!=null){o=e.cC(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eE(B.fe,l,m?"inspect the "+o.b:"inspect "+n)}return B.fh},
AV(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.my(a5,s,4.5)
for(q=a6.mz(a4),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cC(i.c)
g=i.f.a
f=i.hl(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.k(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gaz()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mz(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
GX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hv(c)
if(s.length===0)return f
r=d.aG(e)
q=A.my(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gaz()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mz(d,c,b.a,new A.k(n,m,o)))return k}return f},
e_:function e_(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
Gw(a,b){var s,r=new A.cY(new Float32Array(5376)),q=new A.cY(new Float32Array(5376)),p=new A.cY(new Float32Array(5376)),o=new A.cY(new Float32Array(5376)),n=b.d,m=a.aG(b),l=A.kb(b.y),k=A.kb(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cR(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cR(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Ez(p,a,b,m,B.d_[s])
for(j=a.aL(b.a),i=J.O(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zH(o,b,m,h,!0)}j=B.t.aU(r.a,0,r.b)
i=B.t.aU(q.a,0,q.b)
h=B.t.aU(p.a,0,p.b)
B.t.aU(o.a,0,o.b)
return new A.qS(j,i,h)},
Gt(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cY(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.zI(s,b,r,c,q)
return B.t.aU(s.a,0,s.b)},
Gu(a,b){var s,r,q,p=new A.cY(new Float32Array(5376)),o=a.aG(b)
for(s=a.aL(b.a),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zH(p,b,o,q,!1)}return B.t.aU(p.a,0,p.b)},
Ez(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.r||a4===B.p?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aL(s),q=J.O(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aZ(s)===a4)a.push(new A.eh(p.aH(s),p.aH(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eh(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aJ([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.u)(a),++o){m=a[o]
r.M(0,A.c([m.a,m.b],p))}l=A.H(r,r.$ti.c)
B.a.W(l)
s=A.aJ([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.u)(a),++o){m=a[o]
s.M(0,A.c([m.c,m.d],p))}k=A.H(s,s.$ti.c)
B.a.W(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.L(a,new A.uh(f,e,d,c)))continue
A.Gl(a0,a2,a3,a4,f,e,d,c)}A.EA(a0,a2,a3,a4,b,a)},
EA(a,b,c,d,e,f){return},
hi(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.aq(a,new A.k(r+e,q+g,p),new A.k(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.aq(a,new A.k(r+e,q+g,s-i),new A.k(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.aq(a,new A.k(s-i,q+g,p+e),new A.k(s,q+h,p+f),j)
return
case 3:A.aq(a,new A.k(r,q+g,p+e),new A.k(r+i,q+h,p+f),j)
return}},
aq(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.k(o,n,m),k=c.a,j=new A.k(k,n,m),i=c.b,h=new A.k(k,i,m),g=new A.k(o,i,m)
m=c.c
s=new A.k(o,n,m)
r=new A.k(k,n,m)
q=new A.k(k,i,m)
p=new A.k(o,i,m)
a.aI(j,l,g,h,d)
a.aI(s,r,q,p,d)
a.aI(l,s,p,g,d)
a.aI(r,j,h,q,d)
a.aI(l,j,r,s,d)
a.aI(g,p,q,h,d)},
Gl(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.k(i+e,h+a0,g)
break
case 2:s=new A.k(i+f,h+a0,g+c.c)
break
case 1:s=new A.k(i+c.a,h+a1,g+f)
break
case 3:s=new A.k(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.k(i+f,h+a0,g)
break
case 2:r=new A.k(i+e,h+a0,g+c.c)
break
case 1:r=new A.k(i+c.a,h+a1,g+e)
break
case 3:r=new A.k(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.k(i+f,h+a1,g)
break
case 2:q=new A.k(i+e,h+a1,g+c.c)
break
case 1:q=new A.k(i+c.a,h+a0,g+e)
break
case 3:q=new A.k(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.k(i+e,h+a1,g)
break
case 2:p=new A.k(i+f,h+a1,g+c.c)
break
case 1:p=new A.k(i+c.a,h+a0,g+f)
break
case 3:p=new A.k(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.k(0,0,0.003)
break
case 2:o=new A.k(0,0,-0.003)
break
case 1:o=new A.k(-0.003,0,0)
break
case 3:o=new A.k(0.003,0,0)
break
default:o=k}n=b.x
m=A.kb(n).e
a.cR(s.a6(0,o),r.a6(0,o),q.a6(0,o),p.a6(0,o),A.kb(n).c,(f-e)/m,(a1-a0)/m)
l=A.Gm(b,d)
switch(j){case 0:o=new A.k(s.a,s.b,s.c-l)
break
case 2:o=new A.k(r.a,s.b,s.c)
break
case 1:o=new A.k(s.a,s.b,p.c)
break
case 3:o=new A.k(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.k(r.a,q.b,s.c)
break
case 2:j=new A.k(s.a,q.b,s.c+l)
break
case 1:j=new A.k(s.a+l,q.b,r.c)
break
case 3:j=new A.k(p.a,q.b,r.c)
break
default:j=k}A.aq(a,o,j,A.G1(A.kb(n).c,0.68))},
G1(a,b){var s,r=new A.vo(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hQ()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hQ()
r=r.$1(a&255)
if(typeof r!=="number")return A.vI(r)
return(q<<16|s<<8|r)>>>0},
Gm(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zH(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aZ(d),b=a3.aH(d),a=b+a3.w
d=a1.d
s=d.b
r=a3.at
if(r==="kit-front-door-recessed")q=5058596
else q=r==="kit-cellar-door-grille"?5722954:6967617
p=a2.b
o=a3.x
p=p<o?p:o
switch(c.a){case 0:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c
k=r+b
j=s+p
i=d+0.12
A.aq(a0,new A.k(r+l,s,d),new A.k(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.aq(a0,new A.k(l,s,d),new A.k(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.aq(a0,new A.k(r+n,s+m,d),new A.k(r+h,j,i),q)
A.aq(a0,new A.k(k,s,d),new A.k(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.aq(a0,new A.k(r+l,s,k),new A.k(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.aq(a0,new A.k(l,s,k),new A.k(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.aq(a0,new A.k(r+n,s+m,k),new A.k(r+h,i,d),q)
A.aq(a0,new A.k(j,s,k),new A.k(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.aq(a0,new A.k(n,s,d+k),new A.k(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.aq(a0,new A.k(n,s,k),new A.k(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.aq(a0,new A.k(n,s+e,d+m),new A.k(r,j,d+l),q)
A.aq(a0,new A.k(n,s,i),new A.k(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.aq(a0,new A.k(r,s,d+l),new A.k(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.aq(a0,new A.k(r,s,l),new A.k(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.aq(a0,new A.k(r,s+e,d+n),new A.k(k,j,d+m),q)
A.aq(a0,new A.k(r,s,i),new A.k(k,s+0.05,l),q)
break}if(a4)A.zI(a0,a1,a2,a3,q)
A.Ey(a0,a1,a2,a3)},
Ey(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aH(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aZ(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.r
q=!r||s===B.p?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.hi(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hi(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hi(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.p?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hi(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.p,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hi(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hi(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hi(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
zI(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aZ(o),m=d.aH(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.aq(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.aq(a,new A.k(p,s,o-d.w),new A.k(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.aq(a,new A.k(p-d.w,s,o),new A.k(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.aq(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.aq(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.aq(a,new A.k(p,s,o-0.055),new A.k(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.aq(a,new A.k(p-0.055,s,o),new A.k(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.aq(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break}},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
uh:function uh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vo:function vo(a){this.a=a},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yq(a){var s=t.N
return new A.p2(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.U),new A.p4())},
p2:function p2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pj:function pj(a){this.a=a},
my(a,b,c){var s=a.aG(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mz(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Fs(a,s,c,d)},
Fs(a,b,c,d){var s,r,q,p,o=a.aG(b),n=d.ap(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.um(a,b,o,B.r,r,q,p,c,n,m))return!0
if(A.um(a,b,o,B.p,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.um(a,b,o,B.ae,s,r,q,c,n,m))return!0
if(A.um(a,b,o,B.ad,s+o.a,r,q,c,n,m))return!0
return!1},
um(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a6(0,a6.ac(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.r||a1===B.p
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aL(m),k=J.O(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aZ(m)===a1){g=q.aH(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
AW(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.e.h(0,a0)
if(c==null)return null
s=A.my(b,c,4.5)
for(r=c.r,q=c.d,p=q.a,o=q.b,q=q.c,n=s,m=null,l=0;!1;++l){k=r[l]
j=k.gm4()
i=p+j.a
h=o+j.b
j=q+j.c
g=a.a
f=new A.k(i-g.a,h-g.b,j-g.c)
e=f.gt(0)
if(e<0.01||e>s)continue
d=f.gaz()
g=a.b
if(Math.acos(B.c.D(d.a*g.a+d.b*g.b+d.c*g.c,-1,1))<=0.5236&&e<n){if(!A.mz(b,a0,a.a,new A.k(i,h,j)))continue
n=e
m=k}}return m},
AX(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.my(b,j,4.5):4.5
for(s=b.aL(c),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.mC(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.A6(l,k,a,i,0.5236)||k>=q)continue
if(!A.mz(b,c,a.a,n))continue
q=k
p=o}return p},
AY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.my(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.Gn(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.A6(j,i,a,s,0.5236)||i>=p)continue
if(!A.mz(b,c,a.a,l))continue
p=i
o=m}return o},
A6(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gaz().c1(c.b),-1,1))<=e},
Gn(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
og:function og(){this.a=null
this.b=0},
rI:function rI(){},
rJ:function rJ(){},
CC(a){var s=A.jd(a,"inventory asset"),r=A.dJ(s,"id"),q=A.dJ(s,"kind")
A.dJ(s,"source")
A.dJ(s,"proxy")
A.dJ(s,"pivot")
s=A.jd(s.h(0,"bounds"),"inventory bounds")
return new A.cR(r,q,new A.pr(A.mw(s.h(0,"min"),"bounds.min"),A.mw(s.h(0,"max"),"bounds.max")))},
CD(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.jd(a,"inventory placement"),i=A.jd(j.h(0,"visibility"),"placement visibility"),h=A.jd(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dJ(j,"id"),e=A.dJ(j,"roomId"),d=A.dJ(j,"assetId")
A.dJ(j,"role")
s=typeof j.h(0,"socket")=="string"?A.p(j.h(0,"socket")):null
j=A.jd(j.h(0,"transform"),"inventory transform")
r=A.mw(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.h(B.fX)
q=A.mw(j.h(0,"position"),"transform.position")
p=A.mw(j.h(0,"rotation"),"transform.rotation")
o=A.dJ(i,"layer")
if(typeof i.h(0,k)=="string")A.p(i.h(0,k))
n=J.a8(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.p(h.h(0,"focusId")):null
l=t.P.b(g)?A.FH(g,"radius"):0
return new A.cv(f,e,d,s,new A.pt(q,p,r),o,n,m,l)},
jd(a,b){return t.P.b(a)?a:A.dF(b+" is not an object")},
dJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dF(b+" is not a string")},
FH(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dF(b+" is not finite")},
mw(a,b){var s
if(t.j.b(a)){s=J.aH(a)
s=s.gt(a)!==3||s.L(a,new A.vv())}else s=!0
if(s)return A.dF(b+" is not a finite vec3")
s=J.aH(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dF(a){return A.h(A.S(a,null,null))},
p7:function p7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pa:function pa(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.b=b
this.f=c},
cv:function cv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
pr:function pr(a,b){this.a=a
this.b=b},
vv:function vv(){},
ps:function ps(a){this.a=a},
dr:function dr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
dZ:function dZ(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=!0},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=!1},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
eT:function eT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
Cw(a){return A.Cv(a)},
Cv(a){var s,r,q,p,o,n,m=A.Ad(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.Ad(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fR)
k.k(0,r.a,q)}s=A.xC(m,"id")
r=A.xC(m,"roomId")
p=A.xC(m,"placementId")
o=A.Gk(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.ha("gain is not a number")
return new A.cQ(s,r,p,o,n,A.aW(k,l,l))},
Ad(a,b){return t.P.b(a)?a:A.ha(b+" is not an object")},
xC(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ha(b+" is not a string")},
Gk(a,b){var s
if(t.j.b(a)){s=J.aH(a)
s=s.gt(a)!==3||s.L(a,new A.vu())}else s=!0
if(s)throw A.b(A.S(b+" must be a numeric vec3",null,null))
s=J.aH(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
ha(a){return A.h(A.S(a,null,null))},
pe:function pe(a,b,c){this.a=a
this.b=b
this.c=c},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
ph:function ph(){},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p3:function p3(){this.b=this.a=null},
eK:function eK(a,b){this.a=a
this.b=b},
pd:function pd(){this.b=this.a=null},
cP:function cP(a,b){this.a=a
this.b=b},
vu:function vu(){},
yr(a,b,c,d,e,f){var s=t.N
return new A.pi(e,f,c,a,A.aW(A.aO(d,s,s),s,s),A.ah(b,s))},
ys(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.i4(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,l=0;!1;++l){j=o[l]
i.k(0,j.gE(),new A.hT(j.gcK(),j.glD()))}return A.yr(a.r.b,B.m,i,B.d7,h,s)},
Cx(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jQ
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bd
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fP)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.co)
l=A.aO(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bw(j)||!A.bw(i))A.h(B.co)
o.k(0,k,new A.i4(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bw(l.b))throw A.b(B.fM)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cm)
l=A.aO(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bw(f)||!A.bw(e))A.h(B.cm)
g.k(0,k,new A.hT(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hw)
d.k(0,n,A.p(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fi)
B.a.l(c,b)}return A.yr(a2,c,g,d,o,h)},
xx(a,b){return a.a.a===b.a&&a.a4(0,b.gaq(b))},
pi:function pi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i4:function i4(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
kb(a){var s=B.bl.h(0,a)
if(s==null)throw A.b(A.j("Unknown house surface material: "+a))
return s},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Cb(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hS(e,A.D(e).c)
q=new A.ej()
q.bO((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hz(a,q,2,r,1+s,A.aJ(["time"],t.N))
break
case 3:A.hz(a,q,3,r,1+s,A.aJ(["place"],t.N))
break
case 4:A.hz(a,q,4,r,2+s,p)
A.C7(a,q,4)
break
case 5:A.hz(a,q,5,r,s,p)
A.C5(a,q,5)
break
case 6:A.hz(a,q,6,r,s,p)
A.C6(a,q)
A.Ca(a,q,6)
break
case 7:A.C8(a,q,7)
break
default:if(s>0)A.hz(a,q,b,r,s,p)}},
C4(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.C9(a,b,c))return!1
return!0},
hz(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(A.C4(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d1(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.yk(a,b,o[p],f)}},
yk(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aO(B.a.gZ(o).a,n,n)
if(d==null)s=A.c(B.z.slice(0),t.s)
else{n=t.vY
s=A.H(new A.G(B.z,t.Ag.a(new A.ob(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aS(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.ei(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aS(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dD(c.a,m,B.a.gZ(o).b)},
C7(a,b,c){var s=A.yl(a,b,c)
if(!a.bY(s))return
a.ev(c,t.G.a(s),0,B.b3,null)},
yl(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.z[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aS(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
C5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d1(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aO(B.a.gZ(i).a,s,s)
r=p.c
n=A.aO(B.a.gZ(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.z[m]
k=o.h(0,l)
j=s.ei(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aS(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dD(q.a,o,B.a.gZ(i).b)
a.dD(p.a,n,B.a.gZ(r).b)},
C6(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aS(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
Ca(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aS(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.yk(a,b,q[s],null)},
C8(a,b,c){var s=c+1,r=A.yl(a,b,s)
if(!a.bY(r))return
a.ev(s,t.G.a(r),0,B.b3,null)},
C9(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gZ(b.c).c===B.az}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gZ(b.c).c===B.az}if(c===21)return b.e
return!1},
ob:function ob(a){this.a=a},
DA(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p=A.aA(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.tk(n)},
pL(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kn(A.aW(p,q,q),b,c)},
yE(a){var s=t.N
return A.pL(t.P.a(a.h(0,"fields")).bG(0,new A.pM(),s,s),A.a6(a.h(0,"shakiness")),A.Cg(B.j2,A.p(a.h(0,"hand")),t.qX))},
Cf(a){var s,r,q,p,o=a.h(0,"margin"),n=A.f(a.h(0,"ordinal")),m=A.f(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yE(r.a(s.gn())))
s=A.aj(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.zR(a.h(0,"lastReadDay"))
return new A.bT(n,m,l,s,q,p,o==null?null:A.yE(r.a(o)))},
e1:function e1(a,b){this.a=a
this.b=b},
tk:function tk(a){this.a=a},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(){},
pN:function pN(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yB(a){return new A.pw(a,A.m(t.S,t.g),A.a_(t.N),A.c([],t.t))},
CI(a,b){var s,r,q,p,o=A.yB(a)
o.e=A.f(b.h(0,"nextOrdinal"))
o.f=A.f(b.h(0,"locksRemaining"))
s=t.j
o.c.M(0,J.Bw(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Cf(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pw:function pw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pD:function pD(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nu:function nu(){},
CU(a){var s,r,q,p,o,n,m,l,k=B.i.an(a,null),j=t.f
if(!j.b(k)||!J.a8(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.fm)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.hg)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gn()
if(j.b(p)){o=A.aj(p.h(0,"assetId"))
if(o==null)o=""
n=A.aj(p.h(0,"licenseId"))
if(n==null)n=""
m=A.aj(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.aj(p.h(0,"sourceFormat"))
r.push(new A.i6(o,n,m,l==null?"":l))}else r.push(A.h(B.h0))}return new A.qw(A.CV(r))},
CV(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.wL("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.S("promoted model index ID is invalid: "+o,n,n))
if(k.R(o))throw A.b(A.S("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.b.ba(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.S("promoted model index rights are unknown: "+o,n,n))
if(!A.aJ(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.b(A.S("promoted model index source format is invalid: "+o,n,n))
if(!A.FY(q.c))throw A.b(A.S("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aW(k,m,l)},
FY(a){if(a.length===0||B.b.T(a,"/")||B.b.p(a,"://"))return!1
if(B.b.dI(a.toLowerCase(),".obj")||B.b.dI(a.toLowerCase(),".mtl")||B.b.dI(a.toLowerCase(),".fbx"))return!1
return B.a.a4(A.c(a.split("/"),t.s),new A.vn())},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a){this.a=a},
vn:function vn(){},
qs:function qs(){},
qr:function qr(a,b,c){this.b=a
this.c=b
this.d=c},
qt:function qt(){},
CS(a,b,c){return B.kP},
kC:function kC(a,b){this.a=a
this.b=b},
qu:function qu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qv:function qv(){},
km:function km(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qC:function qC(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yV(a){if(!isFinite(0))A.h(A.al(0,"interpolation",null))
return new A.qP(a)},
kP:function kP(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
kQ:function kQ(a,b,c){this.a=a
this.b=b
this.c=c},
yT(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hS(c,A.D(c).c)
r=A.H(r,A.o(r).c)
B.a.W(r)
s=t.N
r=A.ah(r,s)
r=new A.qO(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aW(l,s,t.X))
r.io(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
yU(a,b,c,d){var s=A.mm("RENDERER_SHA"),r=A.mm("GAME_SHA"),q=A.mm("DART_SDK_VERSION")
return A.yT(a,"3662947235e8-93a7e35137dd-dirty",b,!1,null,r,A.mm("LOCKFILE_SHA256"),d,A.mm("PROJECT_VERSION"),s,q,null)},
mm(a){var s=B.jI.h(0,a)
return s.length===0?null:s},
qO:function qO(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
qQ:function qQ(a){var _=this
_.a=a
_.d=_.c=_.b=0},
rD:function rD(a){this.a=a},
a3(a,b,c,d,e,f,g,h,i,j){return new A.eb(e,g,a,f,i,h,j,c,c,b)},
cC:function cC(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
rE:function rE(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rH:function rH(a){this.a=a},
rG:function rG(a){this.a=a},
rF:function rF(a){this.a=a},
yh(a,b,c,d,e,f,g){var s=A.H(f,t.ho)
if(b<0||a<0||e<0)A.h(A.S("saved day-loop resources must not be negative",null,null))
return new A.o3(c,g,b,a,e,d===!0,s)},
BZ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fB)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fQ)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fw)
f=A.bx(new A.G(B.cS,q.a(new A.o4(h)),p),o)
e=A.bx(new A.G(B.cZ,n.a(new A.o5(g)),m),l)
if(f==null||e==null)throw A.b(B.hp)
B.a.l(s,new A.fW(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.bw(a))throw A.b(B.fZ)
return A.yh(c,d,a1,a,b,s,a3)},
bM:function bM(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function o3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o4:function o4(a){this.a=a},
o5:function o5(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.b=a
this.c=b},
f3:function f3(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
pk:function pk(a){this.c=a},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(){},
xh(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.hm)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qT:function qT(){},
cW:function cW(){},
qU:function qU(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
F9(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.v6(s,a).$0())
return r},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tl:function tl(a){this.b=a},
v6:function v6(a,b){this.a=a
this.b=b},
Cp(a){var s=A.H(a.c,t.z)
B.a.V(s,new A.oz())
return new A.oy(A.ah(s,t.Dm))},
Co(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.k1(a,c,A.fJ(B.m,t.N))
s=t.N
r=J.y7(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.k1(a,c,A.fJ(new A.G(r,q.i("l(n.E)").a(new A.ox(a)),q.i("G<n.E>")),s))},
oy:function oy(a){this.a=a},
oz:function oz(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a){this.a=a},
q6(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.M(0,a)
s=A.m(r,r)
if(b!=null)s.M(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.M(0,c)
return new A.q5(q,s,r)},
CP(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aL(s)||s!==1)return l
r=A.yL(a.h(0,"choices"))
q=A.yL(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.Cl(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.q6(r,q,p)},
yL(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.p(q.b))}return r},
Cl(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aL(r)||r<1||!A.aL(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cK(s,r,q,p)},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(){},
q8:function q8(){},
q9:function q9(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qp:function qp(a){this.a=a},
qq:function qq(a){this.a=a},
fY(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.q(r.a),r.b)}return q},
rO:function rO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
rP:function rP(){},
rQ:function rQ(){},
f0:function f0(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b){this.a=a
this.b=b},
ln:function ln(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Dm(a){var s,r,q,p,o,n,m=B.i.an(a,null)
if(!t.f.b(m))throw A.b(B.hd)
s=m.h(0,"sources")
r=m.h(0,"scenes")
q=m.h(0,"events")
if(q==null)q=B.bd
if(J.a8(m.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.ha)
p=A.c([],t.s)
for(o=J.O(s);o.m();){n=o.gn()
if(typeof n!="string"||n.length===0)A.h(A.S("source must be a non-empty string",null,null))
p.push(n)}p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.Dg(o.gn()))
p=A.c([],t.tS)
for(o=J.O(q);o.m();)p.push(A.Df(o.gn()))
return new A.rN(p)},
Df(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.p(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.p(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.p(a.h(0,f)).length===0)throw A.b(B.fK)
s=a.h(0,"effects")
if(s==null)s=B.bd
if(!t.j.b(s)||J.wu(s,new A.r_()))throw A.b(B.hf)
r=B.c.af(A.a6(a.h(0,"day")))
q=A.a6(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.h5)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.fo)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.hu)
l=new A.r0(a)
m=A.p(a.h(0,"id"))
k=A.p(a.h(0,g))
j=A.p(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.O(s);h.m();)i.push(A.p(h.gn()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.ie(m,k,r,q,j,A.ah(i,t.N),n,h)},
Dg(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.fz)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.af(r)!==r)throw A.b(B.fV)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.S("screenplay scene "+s+" has invalid arrays",null,null))
m=B.c.af(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.h(B.h4)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.h(B.hr)
A.p(j.h(0,"kind"))
A.p(j.h(0,"text"))
A.aj(j.h(0,"speaker"))
l.push(new A.kT())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.De(l.gn()))
return new A.kW(s,m)},
De(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.fF)
s=A.p(a.h(0,m))
A.p(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.h(B.h9)
o=A.p(p.h(0,m))
n=A.p(p.h(0,"label"))
A.p(p.h(0,"next"))
r.push(new A.kV(o,n))}return new A.kU(s)},
rN:function rN(a){this.c=a},
ie:function ie(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
r_:function r_(){},
r0:function r0(a){this.a=a},
kW:function kW(a,b){this.a=a
this.b=b},
kT:function kT(){},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b},
rR:function rR(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
rS:function rS(){},
rT:function rT(){},
jp:function jp(a){this.a=a},
wv:function wv(a,b,c){this.b=a
this.e=b
this.f=c},
BB(a){var s,r,q,p
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fl)
s=new A.mH()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.x4(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dL(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b_(B.bh,new A.mF(a),new A.mG()))},
cI:function cI(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mH:function mH(){},
mF:function mF(a){this.a=a},
mG:function mG(){},
mS:function mS(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mU:function mU(a){this.a=a},
mT:function mT(a,b){this.a=a
this.b=b},
BH(a){var s
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fW)
s=new A.n5()
return new A.dM(s.$1$2(B.bf,a.h(0,"output"),t.xs),s.$1$2(B.ba,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b9,a.h(0,"reverb"),t.gc),s.$1$2(B.b7,a.h(0,"ducking"),t.ul))},
cs:function cs(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
n5:function n5(){},
n6:function n6(a,b){this.a=a
this.b=b},
n7:function n7(a){this.a=a},
nw:function nw(a){this.a=a
this.b=null},
nA(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.al(c,"level","must be between 1 and 6"))
s=A.A(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.ny(s,b)
return s},
dV(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.A(a,"button","brush-button brush-state-"+s.b,r)
A.ny(q,b)
q.type="button"
q.disabled=s===B.at
q.addEventListener("click",A.V(new A.nz(c)))
return q},
BM(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.at
A.ny(s,b)
s.addEventListener("change",A.V(new A.nD(d,s)))
return s},
BL(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.v(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.at
A.ny(s,b)
s.addEventListener("input",A.V(new A.nC(s,e)))
return s},
wx(a,b){var s=B.b.i2(A.p(a.className),A.wL("\\s+")),r=A.D(s),q=r.i("G<1>"),p=A.H(new A.G(s,r.i("l(1)").a(new A.nB()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Y(p," ")
a.setAttribute("data-brush-state",s)},
ny(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gkc())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.at)a.setAttribute("aria-disabled","true")},
nz:function nz(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
nC:function nC(a,b){this.a=a
this.b=b},
nB:function nB(){},
dT:function dT(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nF:function nF(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nG:function nG(a){this.a=a},
yf(a){var s=!1
if(a.length!==0)if(!B.dD.p(0,a))s=B.lF.p(0,a)||B.lx.p(0,a)||B.lE.p(0,a)||!B.b.T(a,"Mouse")
return s},
ET(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.L(a,A.o(a).i("L<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Fy(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.L(a,A.o(a).i("L<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fw(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fI(B.jF,s,r)
if(b!=null)q.M(0,b)
q.M(0,A.Fy(a))
s=new A.fv(g,d,h,e,f,c,A.aW(A.ET(q),s,r))
s.C()
return s},
BW(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cn)
s=a.h(0,"version")
r=J.eu(s)
if(!r.a7(s,1)&&!r.a7(s,2))throw A.b(B.cn)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fL)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.Bx(m,new A.nT())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.p(l.gn()))
q.k(0,n,o)}else throw A.b(B.fr)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fw(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
x7(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.H(r.b,p)
o.k(0,q,r)}return o},
xt(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xH(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fv:function fv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nV:function nV(){},
nU:function nU(a){this.a=a},
nW:function nW(){},
nX:function nX(){},
nY:function nY(){},
nT:function nT(){},
dS:function dS(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.c=b},
jI:function jI(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
BV(a){var s=t.N,r=t.m
r=new A.hx(A.fw(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.ig(a)
return r},
hx:function hx(a,b,c,d,e,f){var _=this
_.r=_.f=null
_.w=a
_.x=$
_.y=b
_.z=c
_.Q=d
_.ax=_.at=_.as=null
_.a=e
_.b=f
_.e=_.d=_.c=null},
nR:function nR(a,b){this.a=a
this.b=b},
nS:function nS(a){this.a=a},
nQ:function nQ(a,b){this.a=a
this.b=b},
nO:function nO(a,b){this.a=a
this.b=b},
nP:function nP(a,b){this.a=a
this.b=b},
BX(a){var s=new A.nZ(a,A.a(a.createElement("div")))
s.aV(a)
s.ih(a)
return s},
nZ:function nZ(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
o_:function o_(a){this.a=a},
C2(a){var s=new A.o7(A.A(a,"div","door",null))
s.ij(a)
return s},
yi(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Y(s,"; ")+"."},
o7:function o7(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
o8:function o8(a){this.a=a},
o9:function o9(a,b){this.a=a
this.b=b},
oa:function oa(a,b){this.a=a
this.b=b},
Cc(a){var s=new A.od(a,A.a(a.createElement("div")))
s.aV(a)
s.ik(a)
return s},
od:function od(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oe:function oe(a){this.a=a},
oH:function oH(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oI:function oI(){},
Cq(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oJ(a.b===B.cv,a.c===B.cz,s,a.e===B.cw,a.f===B.ct,a.r===B.cB,a.w,a.x)},
oJ:function oJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wy(a,b,c,d,e,f,g,h,i,j,k){return new A.fD(e,g,k,f,b,h,d,c,a,i,j)},
Cr(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.h6)
s=new A.oK(a)
r=a.h(0,"contextualReminders")
if(!A.bw(r))throw A.b(B.hn)
q=!A.bw(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bg,t.bK)
o=s.$1$2("promptDensity",B.bk,t.dn)
n=s.$1$2("textPacing",B.bi,t.j_)
m=s.$1$2("journalLayout",B.bb,t.gm)
l=s.$1$2("confirmations",B.b5,t.aJ)
k=s.$1$2("saveFeedback",B.bc,t.mx)
j=s.$1$2("focusLossBehavior",B.aB,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b8,t.vS):B.aW
return A.wy(s,l,r,j,p,m,o,k,q,A.bw(a.h(0,g))&&A.Q(a.h(0,g)),n)},
di:function di(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k},
oK:function oK(a){this.a=a},
oL:function oL(a,b){this.a=a
this.b=b},
oM:function oM(a){this.a=a},
yp(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fU)
s=B.a.b_(B.cU,new A.oX(a),new A.oY())
r=A.p(a.h(0,"renderScale"))
q=A.Q(a.h(0,"dynamicResolution"))
p=A.p(a.h(0,"frameTarget"))
o=A.p(a.h(0,"antialiasing"))
n=A.p(a.h(0,"textureQuality"))
m=A.aj(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.aj(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.aj(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.zP(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.e0(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fF(a,b){var s=b==null?B.b2:b
return new A.oZ(s,a==null?B.b2:a)},
AR(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dB(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dB("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fI(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cK&&b.a<2){q=q.fJ(B.b1)
B.a.l(s,"High preset was reduced to Standard")}return new A.oR(q,A.ah(s,t.N))},
ct:function ct(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
oX:function oX(a){this.a=a},
oY:function oY(){},
oZ:function oZ(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
Ct(a){var s=new A.hI(A.m(t.N,t.m),B.b2,a,A.a(a.createElement("div")))
s.aV(a)
s.il(a)
return s},
hI:function hI(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
oW:function oW(a){this.a=a},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(){this.c=0},
Cu(a){var s=new A.p0(a,A.a(a.createElement("div")))
s.aV(a)
s.im(a)
return s},
p0:function p0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
p1:function p1(a){this.a=a},
px:function px(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
py:function py(a){this.a=a},
pz:function pz(a){this.a=a},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pB:function pB(){},
pC:function pC(){},
cU:function cU(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qe:function qe(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
A(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zZ(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(p.length);++r){q=A.E(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i3:function i3(){},
bn:function bn(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(){},
ql:function ql(){},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
qj:function qj(a){this.a=a},
qm:function qm(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
qn:function qn(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qo:function qo(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
qB:function qB(a){this.a=a
this.b=null},
Dh(a){var s=new A.r2(a,A.a(a.createElement("div")))
s.aV(a)
s.ip(a)
return s},
r2:function r2(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
r3:function r3(a,b){this.a=a
this.b=b},
r4:function r4(a){this.a=a},
kX(a,b){var s=t.N,r=t.m
r=new A.fV(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.wq(),B.aq,A.m(s,r),A.m(s,r),B.aP,A.m(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.iq(a,b)
return r},
fV:function fV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k2=_.k1=_.id=null
_.k3=f
_.k4=g
_.ok=h
_.p1=i
_.p2=j
_.p3=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
rv:function rv(a,b){this.a=a
this.b=b},
rw:function rw(a){this.a=a},
rx:function rx(a){this.a=a},
rl:function rl(a,b){this.a=a
this.b=b},
rm:function rm(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
rn:function rn(a){this.a=a},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(a,b){this.a=a
this.b=b},
rp:function rp(a,b){this.a=a
this.b=b},
rq:function rq(a,b){this.a=a
this.b=b},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rz(a){return B.a.b_(B.A,new A.rA(a),new A.rB(a))},
Di(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
q.k(0,r.a,r.e)}return q},
dv(a,b){var s=t.z
s=A.fI(A.Di(),s,s)
if(a!=null)s.M(0,a)
s=new A.ry(b,A.aW(s,t.N,t.K))
s.ir(a,b)
return s},
z_(a){var s,r=t.f
if(!r.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.hk)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fA)
return A.dv(A.aO(s,t.N,t.K),A.f(a.h(0,"version")))},
bB:function bB(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
wN(a,b){var s=b==null?A.dv(null,1):b
return new A.rC(s,a==null?A.dv(null,1):a)},
Dj(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.A[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eO(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cV(r)
J.bk(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.z))throw n}}m=A.dv(l,1)
return A.wN(m,m)},
rC:function rC(a,b){this.a=a
this.b=b},
Dk(a){var s=new A.rK(a,A.a(a.createElement("div")))
s.aV(a)
s.is(a)
return s},
rK:function rK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
BE(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cq(p+m+":"+k,m,l.a,l.b,j))}}B.a.V(i,new A.mQ())
return new A.mP(A.ah(i,t.bC),A.a_(t.N))},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mP:function mP(a,b){this.a=a
this.b=b},
mR:function mR(){},
mQ:function mQ(){},
Dz(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.n5
s=t.L
r=A.m(s,t.q1)
q=A.o(a).i("ac<1>")
p=A.H(new A.ac(a,q),q.i("n.E"))
B.a.W(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.bs(B.mO,k+" has an out-of-range authored day "+h+"."))
g=A.Dy(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ag(o,o.r,o.e,A.o(o).i("ag<2>"));o.m();){n=o.d
J.jn(e.cQ(n.b,new A.te()),n)}o=A.aW(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.L(e,e.$ti.i("L<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aA(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.ll(new A.lk(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a2,A.q6(b,b,b)))},
Dy(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cQ[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.ds(B.b.aN(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.bs(B.mP,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cY
B.a.l(l,new A.c3(g,i.b,f))}if(l.length===0)continue
B.a.V(l,new A.tb())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.bs(B.dW,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.bs(B.dW,a+" day "+s+" has no authored tiers."))
return new A.lQ(c)},
lk:function lk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=null
_.w=!1
_.x=g
_.y=h},
th:function th(a){this.a=a},
tg:function tg(a){this.a=a},
ti:function ti(a){this.a=a},
tc:function tc(a){this.a=a},
td:function td(){},
tf:function tf(a){this.a=a},
te:function te(){},
ta:function ta(a){this.a=a},
t9:function t9(a){this.a=a},
tb:function tb(){},
ll:function ll(a){this.a=a},
lQ:function lQ(a){this.a=a},
GG(a){var s,r,q,p=A.a_(t.N)
for(s=new A.L(a,A.o(a).i("L<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaD(),q=q.gu(q);q.m();)if(q.gn().ga_().L(0,new A.vF())){p.l(0,r.a)
break}}s=A.H(p,p.$ti.c)
B.a.W(s)
return s},
GF(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aA(b,!0,s)
B.a.W(r)
q=new A.ej()
q.bO((a^913741)>>>0)
p=q.aS(4)
if(!(p>=0&&p<4))return A.d(B.cP,p)
o=B.cP[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aA(r,!0,s)
B.a.d1(m,q)
s=A.l4(m,0,A.fh(n,"count",t.S),A.D(m).c).bK(0)
B.a.W(s)
return s},
vF:function vF(){},
zb(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
Dx(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.zb(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.BD(m)
if(!s&&l==null)return i
return new A.lm(r,o,l)},
BD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.zb(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.bw(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bx(new A.G(B.cQ,t.qR.a(new A.mM(r)),t.cE),t.hF)
j=A.bx(new A.G(B.jA,t.da.a(new A.mN(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bx(new A.G(B.iI,t.kr.a(new A.mO(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jr(s,k,j,p,i,n,A.aj(m))},
bJ:function bJ(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a,b){this.a=a
this.b=b},
bs:function bs(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lm:function lm(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(){},
jr:function jr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mM:function mM(a){this.a=a},
mN:function mN(a){this.a=a},
mO:function mO(a){this.a=a},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
tj:function tj(){},
b9:function b9(a){this.a=a},
li:function li(a){this.a=a},
lg:function lg(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
FO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jk())return f
n=A.ee().gb2()
m=n.h(0,"captureSeed")
l=A.ds(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.ds(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eO(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.i.an(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.ly.p(0,o.b))return f
J.bk(p,A.p(o.a),A.p(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.z)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lD.p(0,i))return f
if(h!=null&&!B.lB.p(0,h))return f
return new A.tx(l,k,j,h,r)},
FP(){var s,r,q,p=A.ee().gb2().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eI
break A}if("intimate"===p){s=B.eK
break A}s=B.eJ
break A}r=A.ee().gb2().h(0,"cameraFov")
q=A.eO(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fp(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jf(a){var s=$.bc
if(s===a&&B.b.p(A.p(a.b.className),"open"))return
if(s!=null)s.a9()
$.bc=a
if(a===$.cm.j())$.hn().ha("gameplay.viewport")
else $.hn().my(A.Ae(a))
s=$.ad.j()
s.ay=!1
s.be()
$.eq=0
a.bH()},
xn(a,b,c){var s,r,q
$.jg=!0
s=$.bc
if(s!=null)s.a9()
$.bc=a
s=$.hn()
if(s.a.a.length===0)s.ha(c)
r=A.H(s.a.a,t.oP)
r.push(new A.dq(b,B.X,c))
q=s.a
s.a=new A.e7(r,q.b,q.c)
s.iX(b)
s=$.ad.j()
s.ay=!1
s.be()
$.eq=0
a.bH()
$.jg=!1},
dI(a){var s,r,q,p,o,n,m,l=null
if($.jg)return
$.jg=!0
a.a9()
$.bc=null
s=$.hn().kn()
$.jg=!1
r=s.a
if(r===B.dq){$.eq=0
r=$.ad.j()
r.be()
r.ay=!0
q=A.E(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dp)return
r=s.c.a
r=r.length===0?l:B.a.gZ(r)
p=r==null?l:r.a
A:{if(B.bq===p){r=$.cm.j()
break A}if(B.de===p){r=$.h9.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bc=r
n=$.ad.j()
n.ay=!1
n.be()
$.eq=0
r.bH()
m=o==null?l:A.E(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
ji(a){if($.bc===a&&B.b.p(A.p(a.b.className),"open"))a.a9()
else A.jf(a)},
hf(a){var s
if($.jg)return
if($.bc===a)$.bc=null
if(a===$.cm.j())$.hn().cc()
else $.hn().ln(A.Ae(a))
$.eq=0
s=$.ad.j()
s.be()
s.ay=!0},
Ae(a){if(a===$.cm.j())return B.df
if(a===$.h9.j())return B.X
if(a instanceof A.fV)return B.X
if(a instanceof A.hI)return B.X
if(a instanceof A.hx)return B.X
if(a===$.j5.j())return B.kz
if(a===$.mh.j())return B.kA
if(a===$.j4.j())return B.kB
if(a===$.mf.j())return B.X
if(a===$.j2.j())return B.kD
return B.kC},
ml(a,b){var s
a.smn(new A.uu())
a.smp(new A.uv())
a.smo(new A.uw())
a.smj(new A.uC())
a.smm(new A.uD())
a.smx(new A.uE())
a.sms(new A.uF())
a.smr(new A.uG())
a.sb7(b?new A.uH(a):new A.uI(a))
a.sb1(b?new A.uJ(a):new A.ux(a))
s=a.f
if(s===B.E)a.sma(new A.uy())
if(s===B.Z)a.smk(new A.uz())
if(s===B.F){a.sm9(new A.uA())
a.smq(new A.uB())}},
EQ(){var s=$.eo.j()
s.sdP(new A.ur())
s.sb7(new A.us())
s.sb1(new A.ut())},
mk(a,b,c){return A.EN(a,b,c)},
EN(a,b,c){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mk=A.bi(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.un()
k=c.$ti
j=$.ap
i=new A.as(j,k)
if(j!==B.x)l=A.Al(l,j)
c.cl(new A.dC(i,2,null,l,k.i("dC<1,1>")))
s=4
return A.ae(i,$async$mk)
case 4:case 3:o=$.jl().b
n=$.aR
q=6
s=n!=null?9:10
break
case 9:s=11
return A.ae(n.cB(b.a),$async$mk)
case 11:case 10:k=b.a
$.ja=A.fF(k,a)
$.eo.j().cj(a,k,b.b)
A.xp()
A.jh()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ak(g)
$.ja=A.fF(o,o)
k=$.eo.j()
k.cj(o,o,A.c(["renderer transaction rejected: "+A.v(m)],t.s))
A.xp()
s=8
break
case 5:s=1
break
case 8:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$mk,r)},
FD(){var s,r,q,p,o,n=null
try{n=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.i.an(n,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.h8)
q=A.yp(r.h(0,"requested"))
$.ja=A.fF(A.yp(r.h(0,"effective")),q)}catch(s){$.ja=A.fF(null,null)}p=$.jl().a
o=A.AR(p,A.A2())
r=o.a
$.ja=A.fF(r,p)
$.eo.j().cj(p,r,o.b)
A.xp()
A.jh()},
A2(){var s,r,q,p,o=$.fd.j().gfM().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.ds(B.b.aN(p,12),null)
if(r==null)r=1}return new A.oQ(r,B.a.p(o,"disjoint-timer-query"))},
xp(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.i.ad($.jl().B(),null))}catch(s){}},
EP(){var s=$.j1.j()
s.sdP(new A.uo())
s.sb7(new A.up())
s.sb1(new A.uq())},
FB(){var s,r,q,p,o,n=null
try{n=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.xc=A.BW(B.i.an(n,null))}catch(s){$.xc=A.fw(null,null,!1,1,!1,!1,2,1)}r=$.j1.j()
q=r.w=$.fj()
r.x=new A.jI(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.c.q(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.c.q(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.du()
$.ad.j().ec($.fj().r)
r=$.ad.j()
q=$.fj()
p=r.ch
p.a=q.f
p.dV()
r.be()
A.Ag()},
Ag(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.i.ad($.fj().B(),null))}catch(s){}},
FA(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j9=A.BH(B.i.an(r,null))}catch(s){$.j9=B.aP}$.h8.j().hC($.j9)
A.Af()
A.x3()},
Af(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.i.ad($.j9.B(),null))}catch(s){}},
x3(){var s=$.bg
if(s==null)return
s.hM($.j9)},
FC(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.xg=A.Cr(B.i.an(r,null))}catch(s){$.xg=$.wq()}$.j3.j().hD($.cG())
A.Ah()
A.zL()},
Ah(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.i.ad($.cG().B(),null))}catch(s){}},
zL(){var s,r="detailed",q=A.Cq($.cG()),p=A.E(A.a(v.G.document).documentElement)
if(p==null)return
s=q.a?"hold":"press"
p.setAttribute("data-gameplay-interaction",s)
s=q.b?r:"standard"
p.setAttribute("data-gameplay-prompts",s)
s=q.c
if(s===0)s="instant"
else s=s>1?"slow":"readable"
p.setAttribute("data-gameplay-text-pacing",s)
s=q.d?"compact":"spacious"
p.setAttribute("data-gameplay-journal",s)
s=q.e?"always":"important"
p.setAttribute("data-gameplay-confirmations",s)
s=q.f?r:"toast"
p.setAttribute("data-gameplay-save-feedback",s)
p.setAttribute("data-gameplay-focus-loss",q.r.b)
s=q.w?"1":"0"
p.setAttribute("data-gameplay-reminders",s)
s=$.cG().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cG().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
Fz(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ep=A.BB(B.i.an(r,null))}catch(s){$.ep=B.aq}$.fc.j().eb($.ep)
A.xo()
A.mi()},
xo(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.i.ad($.ep.B(),null))}catch(s){}},
mi(){var s,r,q,p,o,n,m=$.ep,l=$.vr,k=$.xF,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.fx)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.xu=l
$.d6.j()
r=A.E(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.Q(A.a(r.classList).contains("high-contrast"))
o=q?null:A.Q(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.Q(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.Q(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.Q(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.Q(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.Q(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.v(j*100)+"%")
q=$.y.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.v(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.zJ){m=$.bG.j()
l=$.ep.f
m.e=new A.jp(l==null?B.a9:l)
m=$.bG.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Aj(a){var s,r,q
A.et("renderer-unavailable")
s=$.y.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dE.j().b)
$.dE.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dE.j().d)
q.k(0,"aliasUsed",$.dE.j().f)
if($.dE.j().e!=null)q.k(0,"rejectionReason",$.dE.j().e)
if($.dE.j().r!=null)q.k(0,"aliasReason",$.dE.j().r)
s.setAttribute("data-renderer-diagnostics",B.i.ad(A.M(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
Fd(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.va(r,q)
r.addEventListener("change",A.V(new A.v8(s)))
q.addEventListener("change",A.V(new A.v9(s)))},
mA(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$mA=A.bi(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.E(A.a(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.y.b=e1
$.xf=A.E(A.a(e0.document).getElementById("fps"))
$.dE.b=$.Bj().cg(A.ee().gb2().h(0,"renderer"))
A.Fe()
c0=$.y.j()
c1=A.f(A.a(e0.window).innerWidth)>0?A.f(A.a(e0.window).innerWidth):800
c0.width=c1
c1=$.y.j()
c0=A.f(A.a(e0.window).innerHeight)>0?A.f(A.a(e0.window).innerHeight):600
c1.height=c0
c2=A.E(A.a(e0.document).getElementById("ui-canvas"))
if(c2!=null){$.zG.b=c2
c2.width=A.f($.y.j().width)
c2.height=A.f($.y.j().height)
c0=new A.nF(c2,A.c([],t.km))
c3=A.E(c2.getContext("2d"))
if(!t.m.b(c3))A.h(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.qQ(c0)
$.es=c0
c0.cU(A.f($.y.j().width),A.f($.y.j().height))}n=B.eH.lh(e1)
if(n==null){A.Aj("webgl2 unavailable")
s=1
break}try{c0=t.s6
c1=t.N
c4=t.iO
c5=t.m3
c6=t.pw
m=new A.lT(n,A.f($.y.j().width),A.f($.y.j().height),A.c([],c0),A.m(c1,t.qr),A.c([],t.s3),A.m(c1,c4),A.m(c1,c5),A.m(c1,t.xp),A.m(c1,t.bE),A.m(c1,c4),A.m(c1,c5),A.c([],c0),A.m(c1,c4),A.m(c1,c5),A.m(c1,c1),A.m(t.S,c6),A.m(c1,t.qS),A.c([],t.j5),B.j6,A.m(c1,t.Aj),A.m(c1,c1),A.m(c1,c6),A.m(c1,t.vD),A.m(c1,c6),A.m(c1,t.w1),B.hx,B.kR)
$.aR=m
c1=$.dE.j()
c6=t.dM.a(m)
if(c1.a!==B.aF)A.h(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.qr(c6,c1.B(),B.lc)
c6.lS()
c0.d=B.M
$.fd.b=c0}catch(e3){l=A.ak(e3)
k=A.cF(e3)
g=$.y.j()
g.setAttribute("data-renderer-error",A.v(l))
if($.jk())$.y.j().setAttribute("data-renderer-error-stack",A.v(k))
A.Aj("pixeldart initialization failed")
s=1
break}A.jh()
p=4
A.et("initializing")
$.d6.b=new A.nE(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.y1())
$.vr=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xF=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.xu=$.vr
$.d6.j()
c0=A.a(e0.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.Cy(A.M(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.a(c0.document)
c4=new A.kd(c0,c6,A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),new A.k(0,0,0),new A.pq(),c4)
c0.addEventListener("keydown",A.V(c4.gjm()))
c0.addEventListener("keyup",A.V(c4.gjo()))
c0.addEventListener("mousemove",A.V(c4.gju()))
c0.addEventListener("mousedown",A.V(c4.gjs()))
c0.addEventListener("mouseup",A.V(c4.gjw()))
c0.addEventListener("wheel",A.V(c4.gjy()))
c6.addEventListener("pointerlockchange",A.V(c4.gjq()))
$.ad.b=c4
c4=$.y.j()
c0=A.f(A.a(e0.window).innerWidth)>0?A.f(A.a(e0.window).innerWidth):800
c4.width=c0
c0=$.y.j()
c4=A.f(A.a(e0.window).innerHeight)>0?A.f(A.a(e0.window).innerHeight):600
c0.height=c4
A.et("renderer")
A.et("text")
c4=$.fk()
s=7
return A.ae(c4.bs(),$async$mA)
case 7:j=c4.ne()
i=A.Dz(j)
if(!(i instanceof A.ll)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aF.b=i.a
$.me.b=A.BE(j)
g=A.m(c1,c5)
for(c0=t.j,c8=0;c8<5;++c8){f=B.z[c8]
c5=A.p(f)
c6=c4.c
c6===$&&A.q()
c9=c6.h(0,c5)
c5=c0.b(c9)?A.aA(c9,!0,c1):B.m
J.bk(g,f,c5)}e=A.DA(g)
s=8
return A.ae(A.mq(),$async$mA)
case 8:d=e5
$.x1.b=new A.nx(B.eG)
c=$.x1.j().mF(new A.vN(e,d))
d0=$.wr()
b=d0
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.aS.aS(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.c.aP(c6.c)
if(c6==null)c6=7
if(c5<1)A.h(A.al(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.h(A.al(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.al(5760,"daySeconds","must be finite and > 0"))
d1=new A.k3(c5,7,5760)
d1.ej(c6)
d2=A.yB(e)
d3=g==null?A.yq(42):A.AE(g,42)
g=A.yn(42,c1,d3,d1,d2,A.yh(6,16,d2,null,6,B.j7,d1),new A.jQ(0,0,0,!1),A.q6(null,null,null))}else{g=c.a
g.toString
g=A.yo(d,g,e)}$.U.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Co(a,g,$.U.j().b)}$.x6=g
$.aF.j().y=$.U.j().z
g=A.ah(A.F9($.U.j().b),t.fu)
$.x2.b=new A.tl(g)
g=$.ws()
c1=c.a
g.dX(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fd.j().eo(A.yV($.U.j().ghg()))
if(c.b!=null){g=c.b
g.toString
A.hg(g)}g=$.aF.j()
c1=A.GF($.U.j().b,A.GG(j.b))
g.si3(A.hS(c1,A.D(c1).c))
A.et("house")
$.W.b=$.U.j().c
g=d0==null
a0=g?null:d0.e
a1=g?null:d0.f
if(a1!=null)for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a2=g[c8]
for(c4=a2.e,c5=c4.length,d4=0;d4<c4.length;c4.length===c5||(0,A.u)(c4),++d4){a3=c4[d4]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.a8(a0,"open")||J.a8(a0,"closed")){a5=J.a8(a0,"open")
for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a6=g[c8]
for(c4=a6.e,c5=c4.length,d4=0;d4<c4.length;c4.length===c5||(0,A.u)(c4),++d4){a7=c4[d4]
a7.shW(a5)}}}a8=$.y0()
if(a8!=null&&a8.length!==0)for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a9=g[c8]
for(c4=a9.r,d4=0;!1;++d4){b0=c4[d4]
b0.gE()}}g=$.aR
if(g!=null)g.km($.W.j())
$.bb.b=$.U.j().d
$.W.j()
g=new A.k(12.9375,1.65,0.825)
$.xG=$.xs=$.xy=g
b1=g.ap(0,new A.k(0,1.3499999999999999,0))
$.j6.b=new A.jD(b1,J.y2(b1,new A.k(0,1.2000000000000002,0)))
$.ug.b=new A.og()
g=A.xh(B.m)
c1=A.xh(B.m)
c4=new A.qU(B.B,g,c1)
if(!isFinite(0))A.h(B.fj)
if(!B.a.a4(c1,B.a.gaq(g)))A.h(B.h_)
if(c4.a===B.B&&c4.b!==0&&!c4.e)A.h(B.fp)
$.c6.b=c4
$.az="hall"
g=c.a
b2=A.CT(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.lY($.W.j())){g=b2.b
$.xG=$.xs=$.xy=g
$.cn=b2.c
$.ff=b2.d
$.az=b2.a
b3=g.ap(0,new A.k(0,1.3499999999999999,0))
g=$.j6.j()
g.sko(b3)
g.b=J.y2(b3,new A.k(0,1.2000000000000002,0))
g=$.j6.j()
c1=$.W.j()
c4=b2.e
c5=b2.f
g.mZ($.az,$.ew(),c1,c5,c4)
A.hg("restored position")}g=A.Dh(A.a(e0.document))
g.smb(new A.vO())
g.sb7(new A.vP())
g.sb1(new A.w_())
$.h9.b=g
g=A.a(e0.document)
c1=A.a(g.createElement("div"))
c4=new A.qn(g,c1)
c4.aV(g)
c1.className=A.p(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.a(c1.appendChild(A.nA(g,B.eo,1)))
A.a(c1.appendChild(A.A(g,"p","settings-copy","The house waits. Choose what to do next.")))
d5=A.A(g,"nav","pause-actions",null)
d5.setAttribute("aria-label","Pause actions")
c4.bm(g,d5,B.dg,"resume")
c4.bm(g,d5,B.dh,"settings")
c4.bm(g,d5,B.di,"controls")
c4.bm(g,d5,B.dj,"save now")
c4.bm(g,d5,B.dk,"help")
c4.bm(g,d5,B.dl,"credits")
c4.bm(g,d5,B.dm,"back")
A.a(c1.appendChild(d5))
c4.smt(new A.w8())
c4.sb7(new A.w9())
c4.smv(new A.wa())
c4.smf(new A.wb())
c4.smu(new A.wc())
c4.sml(new A.wd())
c4.smg(new A.we())
c4.sb1(new A.vQ())
$.cm.b=c4
c4=$.U.j().e
c1=$.bb.j()
$.U.j()
$.mg.b=new A.po(c4,c1)
c1=A.a(e0.document)
c4=$.U.j().e
g=$.bb.j()
c5=$.mg.j()
c6=A.a(c1.createElement("div"))
c5=new A.px(c4,g,c5,c1,c6)
c5.aV(c1)
c6.setAttribute("aria-label","The Journal")
A.a(c6.appendChild(A.A(c1,"div","journal-title","The Journal")))
d6=A.A(c1,"div","journal-pages",null)
g=A.A(c1,"div","page page-left",null)
c5.y!==$&&A.aZ()
c5.y=g
c4=A.A(c1,"div","page page-right",null)
c5.z!==$&&A.aZ()
c5.z=c4
A.a(d6.appendChild(g))
A.a(d6.appendChild(c4))
A.a(c6.appendChild(d6))
A.a(c6.appendChild(c5.iD()))
d7=A.A(c1,"div","tape-roll",null)
A.a(d7.style).setProperty("width","8rem")
c4=A.A(c1,"div","tape-fill",null)
c5.as!==$&&A.aZ()
c5.as=c4
A.a(d7.appendChild(c4))
A.a(c6.appendChild(d7))
d8=A.A(c1,"div","consult",null)
A.a(d8.appendChild(A.A(c1,"div","consult-label","Cite an entry")))
c4=A.A(c1,"div","entry-picker",null)
c5.at!==$&&A.aZ()
c5.at=c4
g=A.A(c1,"div","consult-result",null)
c5.ax!==$&&A.aZ()
c5.ax=g
A.a(d8.appendChild(c4))
A.a(d8.appendChild(g))
A.a(c6.appendChild(d8))
d9=A.E(c1.documentElement)
if(t.m.b(d9)){A.a(d9.style).setProperty("--shake-max-deg","3deg")
A.a(d9.style).setProperty("--shake-max-px","2px")}$.j5.b=c5
$.j5.j().sb1(new A.vR())
g=A.a(e0.document)
c1=A.A(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.a(c1.style).setProperty("transition-duration","0.3s")
A.a(A.E(g.body).appendChild(c1))
$.zF.b=new A.qB(c1)
c1=A.a(e0.document)
g=A.A(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.E(c1.body).appendChild(g))
$.zE.b=new A.nw(g)
g=A.a(e0.document)
c1=A.A(g,"div","ambient-notice",null)
c4=A.A(g,"div","caption-cue",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.a(A.E(g.body).appendChild(c1))
A.a(A.E(g.body).appendChild(c4))
$.bG.b=new A.mS(c1,c4,B.H)
$.zJ=!0
c4=A.C2(A.a(e0.document))
c4.sme(A.AP())
c4.smd(A.GT())
$.at.b=c4
c4=$.cp()
c4.smc(new A.vS())
c4.smh(A.AP())
c4=c.a
b4=A.Dx(c4==null?null:c4.c.h(0,"visitors"))
if($.cG().Q&&b4!=null&&$.aF.j().dX(b4))A.FT()
g=$.me.j()
c1=c.a
g.n_(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.O(b5);g.m();){b6=g.gn()
if(A.aL(b6))$.vs.l(0,b6)}g=A.Dk(A.a(e0.document))
g.smw(new A.vT())
g.sb1(new A.vU())
$.mh.b=g
g=A.Cu(A.a(e0.document))
g.sb1(new A.vV())
$.j4.b=g
g=A.BX(A.a(e0.document))
g.sb1(new A.vW())
$.mf.b=g
$.j7.b=A.kX(A.a(e0.document),null)
$.j8.b=A.kX(A.a(e0.document),B.Y)
$.fc.b=A.kX(A.a(e0.document),B.F)
A.ml($.j7.j(),!1)
A.ml($.j8.j(),!0)
A.ml($.fc.j(),!0)
A.Fz()
A.Fd()
$.eo.b=A.Ct(A.a(e0.document))
A.EQ()
A.FD()
$.h8.b=A.kX(A.a(e0.document),B.E)
A.ml($.h8.j(),!0)
A.FA()
$.j3.b=A.kX(A.a(e0.document),B.Z)
A.ml($.j3.j(),!0)
A.FC()
$.j1.b=A.BV(A.a(e0.document))
A.EP()
A.FB()
g=A.Cc(A.a(e0.document))
g.sb1(new A.vX())
g.smi(new A.vY())
$.j2.b=g
g=c.a
b7=A.Ce(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.Ai(b7)
A.et("world")
A.Am()
A.a(e0.window).addEventListener("resize",A.V(new A.vZ()))
A.a(e0.document).addEventListener("visibilitychange",A.V(new A.w0()))
A.a(e0.window).addEventListener("keydown",A.V(new A.w1()))
A.a(e0.window).addEventListener("keyup",A.V(new A.w2()))
A.a(e0.window).addEventListener("keydown",A.V(new A.w3()))
A.a(e0.window).addEventListener("click",A.V(new A.w4()))
$.y.j().addEventListener("mousemove",A.V(new A.w5()))
$.y.j().addEventListener("click",A.V(new A.w6()))
$.y.j().addEventListener("wheel",A.V(new A.w7()))
A.hd()
A.et("raf")
A.f(A.a(e0.window).requestAnimationFrame(A.V(A.AQ())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b8=A.ak(e2)
b9=A.cF(e2)
A.vk(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$mA,r)},
Fc(a){var s,r,q,p=$.es
if(!$.at.j().y||p==null)return
s=A.zV(a)
if(s==null)return
r=$.cp()
q=p.h2(s.a,s.b)
r.r=q==null?null:q.b},
Fb(a){var s,r=$.es
if(!$.at.j().y||r==null)return!1
s=A.zV(a)
if(s==null)return!1
return $.cp().lO(r.h2(s.a,s.b))},
zV(a){var s=A.a($.y.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aB(A.f(a.clientX)-A.a6(s.left),A.f(a.clientY)-A.a6(s.top))},
Fe(){var s=v.G
A.a(s.window).addEventListener("error",A.V(new A.vb()))
A.a(s.window).addEventListener("unhandledrejection",A.V(new A.vc()))},
et(a){if($.x8===a)return
$.x8=a
$.y.j().setAttribute("data-boot-phase",a)},
jh(){var s,r,q,p,o,n=null,m=$.fd.j().gfM(),l=$.y.j(),k=A.ee().gb2().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.i.ad(m.B(),n))
k=$.aR
if(k==null)k="{}"
else{k=k.e
k===$&&A.q()
k=k.as
if(k==null)k=A.h(A.j("renderer is not initialized"))
s=k.a
s.C()
r=s.b
q=A.H(r,A.o(r).c)
B.a.W(q)
r=t.N
p=t.K
p=B.i.ad(A.M(["profile",A.M(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.i.ad(B.jD,n))
l=$.aR
o=l==null?n:l.x
if(o!=null)$.y.j().setAttribute("data-renderer-profile-fallback",o)},
FL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jk())return
s=$.y0()
if(s!=null&&s.length!==0){r=$.y.j()
q=$.Bi()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.x2.j().fU($.U.j().gab().a)
r=$.y.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.wr()
o=q==null?c:q.e
if(o!=null)$.y.j().setAttribute("data-automation-capture-shutters",o)
$.y.j().setAttribute("data-automation-rain-window-visibility",B.c.aM(A.Ak($.az),3))
r=$.y.j()
q=$.x8
n=$.az
m=$.ew()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.i.ad(A.M(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.M(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cn,"pitch",$.ff,"modal",$.bc!=null,"dialogueOverlay",$.at.j().y,"inputEnabled",$.ad.j().ay,"day",$.U.j().gab().a,"hour",$.U.j().gab().b],l,k),c))
j=A.m(l,t.X)
for(r=$.W.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.u)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.M(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.y.j().setAttribute("data-automation-portals",B.i.ad(j,c))
e=$.mj
r=!1
if(e!=null)if($.W.j().e.h(0,"cellar")!=null){r=$.W.j()
q=$.az
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cd("cellar",$.az)
$.y.j().setAttribute("data-audio-transmission-cellar",B.i.ad(A.M(["sourceRoom","cellar","listenerRoom",$.az,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.y.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mv(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c6.j().a!==B.B){A.hg("save unavailable during rupture")
return}try{r=$.x1.j()
q=$.U.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.az
m=$.ew()
l=$.cn
k=$.ff
j=$.j6.j().d
j=j==null?null:j.a.a
i=$.j6.j().d
J.bk(s,"player",new A.kE(n,m,l,k,j,i==null?null:i.b).B())
n=$.aF.j()
m=A.eV(n.b,p)
l=A.eV(n.c,t.L)
n=n.r
J.bk(s,"visitors",new A.lm(m,l,n==null?null:new A.jr(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.me.j().b
n=A.H(n,A.o(n).c)
B.a.W(n)
J.bk(s,"ambient",n)
n=$.x6
if(n!=null)J.bk(s,"authoredEvents",A.M(["delivered",n.gll()],p,o))
n=A.H($.vs,A.o($.vs).c)
B.a.W(n)
J.bk(s,"unverifiables",n)
J.bk(s,"inventoryInspections",$.ws().B())
n=$.xd
if(n!=null)J.bk(s,"ending",A.M(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.ys(q.c).B()
k=q.d
r.ng(A.yY(s,A.M(["houseSeed",n,"runSeed",m,"house",l,"time",A.M(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hg(a)}catch(h){A.hg("save failed")}},
FJ(){var s=A.E(A.a(v.G.document).documentElement),r=s==null?null:A.aj(s.getAttribute("data-gameplay-focus-loss")),q=A.bx(new A.G(B.aB,t.rg.a(new A.vg(r)),t.vK),t.x)
switch((q==null?B.aX:q).a){case 0:$.ms=!0
s=$.bg
if(s!=null)s.ee(!0)
break
case 1:$.ms=!0
break
case 2:break}},
hg(a){var s=v.G,r=A.E(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.E(A.a(s.document).documentElement)
s=s==null?null:A.aj(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Cn(B.f2,new A.vp(r),t.H)},
vk(a,b){var s,r,q,p
A.et("error")
s=A.v(a)
r=A.xR(s,"\n"," ")
s=$.xf
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.E(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.v(a):A.v(a)+"\n"+b.q(0)
$.y.j().setAttribute("data-boot-error",p)
if($.jk()&&!q)$.y.j().setAttribute("data-boot-stack",b.q(0))
A.a(s.console).error(p)},
zO(){var s,r
if($.x5)return
$.x5=!0
s=$.bg
r=s==null
if(!r)s.cc()
if(!r)s.en("music")
B.a.l($.d7,"arm")},
hd(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hd=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ae(A.hc(),$async$hd)
case 2:o=null
q=4
s=7
return A.ae(A.aS(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hd)
case 7:n=b
i=A
s=8
return A.ae(A.aS(A.a(n.json()),t.X),$async$hd)
case 8:o=i.a(b)
q=1
s=6
break
case 4:q=3
j=p.pop()
s=6
break
case 3:s=1
break
case 6:l=o
k=l==null?null:l.credits
if(k!=null&&typeof k==="string"){A.p(k)
l=A.E(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.mf.j().f
l===$&&A.q()
l.textContent=k}s=9
return A.ae(A.ou(A.c([A.vd(o),A.v7(o),A.mr()],t.iJ),t.H),$async$hd)
case 9:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$hd,r)},
mr(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h
var $async$mr=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ae(A.aS(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$mr)
case 6:o=b
if(!A.Q(o.ok)){k=A.j("HTTP "+A.v(A.xM(o,"status",t.S)))
throw A.b(k)}s=7
return A.ae(A.aS(A.a(o.text()),t.N),$async$mr)
case 7:n=b
m=A.CU(n)
$.y.j().setAttribute("data-renderer-model-packages","validated")
$.y.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.y.j()
j=m.a.ga_()
k.setAttribute("data-renderer-model-package-count",""+j.gt(j))
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ak(h)
k=$.y.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.y.j().setAttribute("data-renderer-model-package-error",A.v(l))
s=5
break
case 2:s=1
break
case 5:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$mr,r)},
hc(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hc=A.bi(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.cT[g]
q=6
s=9
return A.ae(A.aS(A.a(A.a(j.window).fetch(o)),i),$async$hc)
case 9:n=a0
s=10
return A.ae(A.aS(A.a(n.text()),h),$async$hc)
case 10:m=a0
l=A.y8(B.i.an(m,null))
f=$.W.b
if(f===$.W)A.h(A.a5(""))
l.e1(f)
f=$.y.b
if(f===$.y)A.h(A.a5(""))
f.setAttribute("data-house-manifest","validated")
f=$.y.b
if(f===$.y)A.h(A.a5(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ak(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.y.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.v(d))}s=11
return A.ae(A.mo(),$async$hc)
case 11:s=12
return A.ae(A.mp(),$async$hc)
case 12:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$hc,r)},
mq(){var s=0,r=A.bh(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mq=A.bi(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.cT[f]
p=7
s=10
return A.ae(A.aS(A.a(A.a(i.window).fetch(n)),h),$async$mq)
case 10:m=a0
s=11
return A.ae(A.aS(A.a(m.text()),g),$async$mq)
case 11:l=a0
k=A.y8(B.i.an(l,null))
k.e2()
e=$.y.b
if(e===$.y)A.h(A.a5(""))
e.setAttribute("data-house-blueprint","validated")
e=$.y.b
if(e===$.y)A.h(A.a5(""))
e.setAttribute("data-house-blueprint-source",n)
e=k
q=e
s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ak(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:throw A.b(A.j("authored house blueprint unavailable: "+A.v(c)))
case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$mq,r)},
mo(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mo=A.bi(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iL[c]
p=7
s=10
return A.ae(A.aS(A.a(A.a(g.window).fetch(n)),f),$async$mo)
case 10:m=b1
s=11
return A.ae(A.aS(A.a(m.text()),e),$async$mo)
case 11:l=b1
b=B.i.an(l,null)
b=h.b(b)?b:A.dF("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dF("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.dF("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dF("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aA(a,!0,d):A.dF("assets is not a list")
a4=A.D(a3)
a5=a4.i("I<1,cR>")
a3=A.H(new A.I(a3,a4.i("cR(1)").a(A.GP()),a5),a5.i("a2.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aA(a,!0,d):A.dF("placements is not a list")
a5=A.D(a4)
a6=a5.i("I<1,cv>")
a4=A.H(new A.I(a4,a5.i("cv(1)").a(A.GQ()),a6),a6.i("a2.E"))
a4.$flags=1
k=new A.p7(a1,a2,a0,a3,a4)
a1=$.W.b
if(a1===$.W)A.h(A.a5(""))
k.e1(a1)
$.mn=k
a1=$.aR
if(a1!=null)a1.hE(k)
a1=$.y.b
if(a1===$.y)A.h(A.a5(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.y.b
if(a1===$.y)A.h(A.a5(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.y.b
if(a1===$.y)A.h(A.a5(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ak(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.y.j().setAttribute("data-house-inventory","unavailable")
$.y.j().setAttribute("data-house-inventory-error",A.v(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.v(a8))
case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$mo,r)},
mp(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mp=A.bi(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.mn
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.ji[a4]
p=7
s=10
return A.ae(A.aS(A.a(A.a(a1.window).fetch(m)),a2),$async$mp)
case 10:l=b5
s=11
return A.ae(A.aS(A.a(l.text()),e),$async$mp)
case 11:k=b5
a5=B.i.an(k,null)
a5=a0.b(a5)?a5:A.ha("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aA(a6,!0,a3):A.ha("emitters is not a list")
a8=A.D(a7)
a9=a8.i("I<1,cQ>")
a7=A.H(new A.I(a7,a8.i("cQ(1)").a(A.H3()),a9),a9.i("a2.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.ha("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.ha("sourceRef is not a string")
j=new A.pe(a8,a9,a7)
a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
j.nb(a7,b2)
$.A5=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bk(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
a8=A.BF(i)
a9=new A.n2(a7,A.aW(B.d8,e,d),a8)
a9.ie(a8,a7,B.d8)
$.mj=a9
a7=$.bg
if(a7!=null){a7.ch=a9
a7.by()}a7=$.y.b
if(a7===$.y)A.h(A.a5(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.y.b
if(a7===$.y)A.h(A.a5(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.y.b
if(a7===$.y)A.h(A.a5(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.y.b
if(a7===$.y)A.h(A.a5(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ak(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.mj=null
$.y.j().setAttribute("data-audio-planner","unavailable")
$.y.j().setAttribute("data-house-soundscape","unavailable")
$.y.j().setAttribute("data-house-soundscape-error",A.v(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.v(n))
case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$mp,r)},
xb(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.aV(s,A.D(s).i("aV<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.p(q))}},
v7(a){var s=0,r=A.bh(t.H),q,p,o,n,m,l
var $async$v7=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.xb(A.E(n?null:a.sfx),m,"")
A.xb(A.E(n?null:a.ir),m,"ir-")
q=A.E(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.p(p))
l=$
s=2
return A.ae(A.n9(m,$.W.j()),$async$v7)
case 2:o=l.bg=c
o.ch=$.mj
o.by()
A.FE()
A.Ao(o)
A.x3()
A.Ap()
if($.x5){o.cc()
o.en("music")}return A.be(null,r)}})
return A.bf($async$v7,r)},
xB(a,b){var s
A.AB(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
FQ(a){var s,r
try{s=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zK(a,b){var s
if(a!=="brightness")return
s=A.E(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.v(B.c.D(b,0.6,1.4))+")")},
ui(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.E(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.mi()},
Ap(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.d9().a.ce(o)),k=A.Q($.d9().a.ce(n)),j=A.Q($.d9().a.ce(m))
for(s=[$.j7.j(),$.j8.j(),$.fc.j(),$.h8.j(),$.j3.j()],r=0;r<5;++r)s[r].ed(o,l)
A.zK(o,l)
for(s=[$.j7.j(),$.j8.j(),$.fc.j(),$.h8.j(),$.j3.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.ui(n,k)
A.ui(m,j)},
xA(a,b){var s
A.AB(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
FN(a){var s,r
try{s=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
Ao(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.j0[s]
q=$.d9().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.h(A.j("setting missing from profile: "+r)):q))}p=A.Q($.d9().a.ce("muted"))
o=A.Q($.d9().a.ce("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bl(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d_(o)
for(q=[$.j7.j(),$.j8.j(),$.fc.j(),$.h8.j()],n=j.$ti.i("cx<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cx(j,j.r,j.e,n);m.m();){k=m.d
l.ed(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zM(){var s=$.bg
if(s!=null)A.Ao(s)
A.Ap()},
FE(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.i.an(k,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.fy)
q=A.z_(r.h(0,"requested"))
$.Aw=A.wN(A.z_(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.FN(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.FQ(p))}}$.Aw=A.Dj(o,r)
A.vh()},
vh(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.i.ad($.d9().B(),null))}catch(s){}},
AB(a,b){var s,r,q,p,o,n,m
switch(A.rz(a).d.a){case 0:r=A.eO(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d9()
q=s
A.rz(a).cV(q)
p=t.N
o=t.K
n=A.fI(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dv(n,1)
n=s
A.rz(a).cV(n)
o=A.fI(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dv(o,1)
A.vh()}catch(m){if(!(A.ak(m) instanceof A.z))throw m}},
vd(a){var s=0,r=A.bh(t.H),q,p
var $async$vd=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.xb(A.E(a==null?null:a.tex),p,"")
q=$.aR
q=q==null?null:q.cL(p)
s=2
return A.ae(A.ou(A.c([q==null?A.ym(t.H):q],t.iJ),t.H),$async$vd)
case 2:return A.be(null,r)}})
return A.bf($async$vd,r)},
Am(){var s,r,q=v.G,p=A.f(A.a(q.window).innerWidth),o=A.f(A.a(q.window).innerHeight),n=$.y.j(),m=p>0?p:800
n.width=m
m=$.y.j()
n=o>0?o:600
m.height=n
s=A.E(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.f($.y.j().width)
s.height=A.f($.y.j().height)}q=$.es
if(q!=null)q.cU(A.f($.y.j().width),A.f($.y.j().height))
q=$.fd.j()
n=A.f($.y.j().width)
m=A.f($.y.j().height)
if(q.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
if(n<=0||m<=0)A.h(A.w("pixeldart surface size must be positive",null))
q.b.cU(n,m)
q=$.aR
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.y.j().setAttribute("data-renderer-surface",r)},
Fa(){var s,r,q=$.bc
if(q!=null){s=$.ad.j()
if(!s.CW.bi("pause",s.f)){s=$.ad.j()
s=s.CW.bi("secondary",s.f)}else s=!0
if(s){A.ES(q)
return}if($.ad.j().f.a5(0,"GamepadDpadUp")){A.Ab(q,-1)
return}if($.ad.j().f.a5(0,"GamepadDpadDown")){A.Ab(q,1)
return}s=$.ad.j()
if(s.CW.bi("interact",s.f)){r=A.E(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pu(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.bi("pause",s.f)){A.jf($.cm.j())
return}if($.at.j().y)return
s=$.ad.j()
if(s.CW.bi("journal",s.f))A.ji($.j5.j())
else{s=$.ad.j()
if(s.CW.bi("sleep",s.f))A.ji($.mh.j())}},
ES(a){if(a===$.cm.j()){a.a9()
return}if(a===$.h9.j()||a instanceof A.fV||a instanceof A.hI||a instanceof A.hx){A.dI(a)
return}a.a9()},
Ab(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(l.length);++r){q=A.E(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.E(A.a(v.G.document).activeElement)
o=B.a.br(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
FM(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.A4){$.xm=s
$.A4=!0}e=s
d=$.xm
if(typeof e!=="number")return e.ap()
r=(e-d)/1000
$.xm=s
e=r
if(typeof e!=="number")return e.e9()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.hz()
if(e>0.25)r=0.25
A.Gg(r)
$.ad.j().mB()
e=$.y.j()
d=$.ad.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ad.j().z
if(q!=null)$.y.j().setAttribute("data-controller-id",q)
else $.y.j().removeAttribute("data-controller-id")
A.Fa()
if(!$.ms&&$.bc==null){e=$.eq
d=r
if(typeof d!=="number")return A.vI(d)
d=$.eq=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e9()
c=c<10}else c=!1
if(!c)break
$.xs=$.ew()
if(!$.y_()){d=$.U.b
if(d===$.U)A.h(A.a5(""))
d.kf(0.008333333333333333*($.cG().Q?1:20))
d=$.Bm()
c=$.U.b
if(c===$.U)A.h(A.a5(""))
c=c.gab()
b=$.U.b
if(b===$.U)A.h(A.a5(""))
d=d.bV(c.a,b.gab().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){o=d[a]
B.a.l($.d7,"clock:"+o.a)}d=$.Bn()
c=$.U.b
if(c===$.U)A.h(A.a5(""))
c=c.gab()
b=$.U.b
if(b===$.U)A.h(A.a5(""))
d=d.bV(c.a,b.gab().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){n=d[a]
B.a.l($.d7,"service:"+n.a+":"+n.b)}}A.Gj()
A.Gf()
d=$.aF.b
if(d===$.aF)A.h(A.a5(""))
c=$.U.b
if(c===$.U)A.h(A.a5(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.aA(d,!1,e)
a0.$flags=3
a1=a0
B.a.N(d)
if(a1.length!==0){d=$.U.b
if(d===$.U)A.h(A.a5(""))
d.mG(a1)}A.Ge()
A.Gi()
A.Gh()
A.Gd(0.008333333333333333)
if($.ug.b===$.ug)A.h(A.a5(""))
d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
m=d.a!==B.B
c=$.W.b
if(c===$.W)A.h(A.a5(""))
d.dw(0.008333333333333333,c)
if(m){d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
d=d.e}else d=!1
if(d)A.An(!0)
d=$.eq-0.008333333333333333
$.eq=d
c=p
if(typeof c!=="number")return c.a6()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.xG=A.za($.Bp(),$.ew(),l)
k=$.bg
if(k!=null){d=k
c=Math.sin($.cn)
b=Math.cos($.cn)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aM(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hG($.az)
for(e=$.d7.length,a=0;a<$.d7.length;$.d7.length===e||(0,A.u)($.d7),++a){j=$.d7[a]
A.EW(k,j)}B.a.N($.d7)
$.y.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.y.j().setAttribute("data-audio-muffle01",B.c.aM(k.gm6(),3))
e=$.y.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.y.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.d6.j().h6($.wt(),$.cn,$.ff)
e=$.aR
if(e!=null){d=$.d6.j()
c=d.a
a3=new A.J(c.a,c.b,c.c)
c=d.b
a4=new A.J(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.yI(a3,a4,new A.J(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wG(a5,b,d.a,c)
e.p3=new A.fq(a6,a7,a7.ac(0,a6),a3,a4,c,b,a5)}e=$.aR
if(e!=null)e.hP($.W.j(),$.az)
e=$.aR
if(e!=null)e.hF($.W.j(),$.az,$.wt(),$.bb.j().gep(),$.bb.j().gli(),$.x2.j().fU($.U.j().gab().a),A.GZ($.az),$.bb.j().b)
if($.Aa!==$.c6.j().a){$.Aa=$.c6.j().a
$.xv=$.xv+1}e=$.aR
if(e!=null){if($.y_())d=0
else{d=s
if(typeof d!=="number")return d.nk()
d/=1000}c=$.xv
b=A.f(Math.max(0,$.U.j().b))
if(!isFinite(d)||d<0)A.h(A.al(d,"timeSeconds",null))
if(b<0)A.h(A.w("frame clock seeds must be non-negative",null))
e.y2=d
e.fO=c
e.fP=b}e=$.aR
if(e!=null){d=$.c6.j()
c=$.xu
b=A.Ak($.az)
a8=d.a
a9=d.gel()
b0=a9>0?B.c.D(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.bD
b3=$.ho()
b4=b3.G("post_exposure")
b5=b3.G("post_bloom")
b6=b3.G("post_vignette")
b7=b3.G("post_film_grain")
b8=b3.G("post_dither")
b9=b3.G("post_depth_of_field")
c0=b3.G("post_color_grade")
c1=b3.G("post_affine_warp")
c2=b3.G("post_vertex_snap")
c3=B.c.aB(b3.G("post_quantization_bits"))
c4=b3.G("post_vhs_chroma")
c5=b3.G("post_vhs_noise")
c6=b3.G("shadow_ao_intensity")
c7=a8===B.a1?0.45:b4
b3=b3.aT("shadow_ssdo_enable")?c6:0
c8=e.RG
c8=B.c.D(c8,0,1)
c9=e.x2
c9=B.c.D(c9,0,1)
if(d>=1)d0=a8===B.aG?b0:1
else d0=0
d0=Math.max(c0,d0)
if(d>=2)d=a8===B.bC?b0:1
else d=0
d=Math.max(c1,d)
d1=b1?320:0
d1=Math.max(c2,d1)
d2=b1?5:c3
d3=b2?1:0
d3=Math.max(c4,d3)
d4=b2?b0:0
d5=b2?b0:0
d5=Math.max(c5,d5)
d6=b2?b0:0
d7=b2?b0:0
e.R8=new A.kG(c7,b5,b3,b9,b6,b7,c8,c9,b,b8,d0,d,d1,d2,d3,d4,d5,d6,d7,b2?b0:0,c)
e.rx=B.c.D(b,0,1)}$.fd.j().eo(A.yV($.U.j().ghg()))
i=$.aR
if(i!=null){h=i.glK()
if(h!=null){$.y.j().setAttribute("data-renderer-frame-stats",h)
e=$.y.j()
d=i.glJ()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}$.y.j().setAttribute("data-renderer-rain-particles",""+i.ry)}A.et("running")
A.FL()
e=$.ad.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.N(0)
e.f.N(0)
A.f(A.a(v.G.window).requestAnimationFrame(A.V(A.AQ())))}catch(d8){g=A.ak(d8)
f=A.cF(d8)
A.vk(g,f)}},
EW(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.he("confirm")
$.bG.j().b4("interface confirmation")
break
case"ambient-winnow":a.cN("winnow",0.28)
$.bG.j().b4("wind moving through the house")
break
case"ambient-gate":a.cN("gate",0.22)
$.bG.j().b4("distant gate")
break
case"collapse":a.he("collapse")
$.bG.j().b4("front door shudders and collapses")
break
case"clock:tick":A.mt(a,p,"tick")
break
case"clock:chime":A.mt(a,p,"chime")
break
case"clock:cuckoo":A.mt(a,p,"cuckoo")
break
case"clock:bell":A.mt(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mt(a,q,s[2])}}}},
mt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.A5,g=$.mn
if(h==null||g==null)return
s=h.lx(b)
r=b+":"+c
A:{if("hall-clock:tick"===r){q="clock ticking"
break A}if("hall-clock:cuckoo"===r){q="clock cuckoo call"
break A}if("hall-clock:bell"===r){q="clock bell"
break A}if("hall-clock:chime"===r){q="clock chime"
break A}if("front-door-knocker:knock"===r){q="knock at the front door"
break A}if("landing-window:wind"===r){q="wind at the landing window"
break A}if("bedroom-timber:creak"===r){q="timber settling upstairs"
break A}if("kitchen-pipe:tick"===r){q="kitchen pipe ticking"
break A}if("kitchen-range:settle"===r){q="kitchen range settling"
break A}if("cellar-drain:drip"===r){q="water dripping in the cellar"
break A}if("bathroom-cistern:settle"===r){q="bathroom cistern settling"
break A}q=null
break A}if(q!=null)$.bG.j().b4(q)
q=$.W.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.h(A.j("sound room missing: "+o))
m=n.d.a6(0,s.d.ac(0,p))
l=$.mj
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.j("sound emitter "+s.a+" has no cue for "+c))
a.mA(q,m,s.e,o)
return}q=$.zS
$.zS=q+1
o=A.BG(B.e3,r,r+":"+q,m,A.EC(b,c),q,o)
q=$.az
q=A.BC($.wt(),q)
t.gG.a(B.bm)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.j("audio listener room missing: "+q))
j=l.hn(p,q,B.bm)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.j("audio cue family missing: "+q))
k=J.aH(i)
k=k.h(i,B.d.S(A.G5(q,o.f),k.gt(i)))
o=o.e
A.ah(j.a,t.N)
a.hf(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
EC(a,b){var s,r,q,p=$.U.j().b
for(s=new A.de(a+":"+b),r=t.E,s=new A.aD(s,s.gt(0),r.i("aD<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AM(p,q==null?r.a(q):q)}return p},
Gg(a){var s=$.xf
if(s==null)return
s.textContent=""+B.c.aB(a>0?1/a:0)+" fps"},
Gd(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="interact"
if($.As||$.bc!=null){$.mC().a=new A.k(0,0,0)
return}s=$.ad.j()
r=s.cq("moveLeft")?-1:0
if(s.cq("moveRight"))++r
q=s.cq("moveForward")?1:0
if(s.cq("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).a6(0,s)
o=p.gt(0)>1?p.gaz():p
$.ad.j().d2(b1)
n=$.ad.j().Q
m=$.ad.j().as
s=$.fj()
l=s.d?-1:1
k=s.e?-1:1
j=$.cn
i=$.ad.j()
i=i.ay?i.x:0
h=$.fj()
g=h.d?-1:1
$.cn=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b1)
g=$.ff
h=$.ad.j()
l=h.ay?h.y:0
j=$.fj()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b1)
$.ff=i
$.ff=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.k(i*Math.cos($.cn)+j*Math.sin($.cn),0,-i*Math.sin($.cn)+j*Math.cos($.cn)).gaz().ac(0,2)
j=$.mC()
if(!isFinite(b1)||b1<0)A.h(A.al(b1,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.al(e,"rate","must be finite and positive"))
s=Math.exp(-e*b1)
l=j.a
s=l.a6(0,f.ap(0,l).ac(0,1-s))
j.a=s
d=$.j6.j().m7($.W.j(),$.az,$.ew(),s.ac(0,b1))
$.xy=d.a
if($.c6.j().a!==B.bE&&$.c6.j().a!==B.a1)$.az=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.Bo()
$.xz=s.i0($.xz,$.ew().b,b1)
b=s.kg(b1,c)
s=$.ew()
l=$.xz
$.d6.j().h6(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cn,$.ff)
s=$.U.j().z
a=new A.qp(s)
s=$.d6.j()
l=$.W.j()
a0=A.GY(a,s,$.az,l,$.mn)
l=a0.c
$.zF.j().hR(l)
a1=A.E(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=a9
a3=a9
a4=a9
switch(s.a){case 0:A.AW($.d6.j(),$.W.j(),$.az)
break
case 1:a2=A.AX($.d6.j(),$.W.j(),$.az)
break
case 2:a3=A.AY($.d6.j(),$.W.j(),$.az)
break
case 3:l=$.d6.j()
k=$.W.j()
j=$.mn
a4=A.AV(l,$.az,k,j)
break
case 4:case 5:break}$.zE.j().n8($.fk().e7($.U.j().gab().a,"status"),$.az==="living-room")
l=$.ad.j()
k=l.CW
if(k.bi(b0,l.d)||k.bi(b0,l.f)){l=$.U.j().gab()
k=a2==null
j=k?a9:a2.a
i=B.a.a4($.aF.j().fB(21),$.aF.j().glZ())
if(l.a===21&&j==="front-door"&&i){s=$.c6.j()
$.W.j()
s.i4(B.eF,A.ah(s.c,t.N))
B.a.l($.d7,"collapse")
A.hg("the front door opens on itself")}else if(!k&&!a2.z&&!a2.ay){a2.ax=!a2.ax
s=$.bG.j()
s.b4(a2.ax?"door opens":"door closes")
s=$.aR
if(s!=null)s.cS($.W.j(),a2.b)
s=$.aR
if(s!=null)s.dS($.W.j(),a2.a)
s=$.bg
if(s!=null)s.by()}else if(a3!=null)if(a3.w){s=$.U.j()
if(s.f.ek(1)){a3.w=!1
$.bG.j().b4("shutter closes")}}else{a3.w=!0
$.bG.j().b4("shutter opens")}else if(s===B.cl){a5=a.e6()
s=A.D(a5)
l=t.E4
a6=A.bx(new A.G(a5,s.i("l(1)").a(new A.vt(a0)),s.i("G<1>")),l)
if(a6==null)a6=A.bx(a5,l)
if(a6!=null)$.bG.j().bM("noticed",a6.d)}else if(a4!=null){s=$.ws()
if(!a4.x)A.h(A.j("inventory placement is not pickable: "+a4.a))
a7=a4.y
if(a7==null)a7=a4.a
s=s.a
l=a4.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.y.j()
l.setAttribute("data-inventory-last-focus",a7)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a7)
s=A.aW(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a8=A.FG(a7)
s=$.bG.j()
s.bM("noticed",a8==null?"you inspect "+a7:a8)}}$.ug.j()
A.FS(b1,a0)},
FS(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.es
if(b9==null)return
s=A.a($.zG.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cp()
p.n7(c0)
o=$.Bl()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.ht(n,m,$.at.j().y)
o=$.ho()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.W.j()
j=$.az
h=k.e.h(0,j)
k=!$.at.j().y&&$.bc==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.U.j().gab()
b=$.bb.j().b
a=$.cG()
a0=a.y===B.cr
a1=h==null?null:h.a
if(a1==null)a1=$.az
a=a.z?$.fk().e7($.U.j().gab().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.N(a3)
a4=A.a6(A.a(v.G.window).devicePixelRatio)
a5=B.c.af(r*a4)
a6=B.c.af(q*a4)
a7=a2.a
if(A.f(a7.width)!==a5||A.f(a7.height)!==a6){a7.width=a5
a7.height=a6}a7=a2.b
a7===$&&A.q()
a7.save()
a7.scale(a4,a4)
a7.clearRect(0,0,r,q)
if(k){a7.save()
a7.translate(r*0.5,q*0.5)
k=t.H
if(m){m=Math.sin(a2.c*8)
a8=a2.c
a9=22*(1+m*0.08)
a7.strokeStyle="rgba(0, 0, 0, 0.85)"
a7.lineWidth=3.5
a7.save()
a8=a8*1.5+0.7853981633974483
a7.rotate(a8)
m=-a9*0.5
a7.strokeRect(m,m,a9,a9)
a7.restore()
a7.strokeStyle="#c49a45"
a7.lineWidth=2
a7.save()
a7.rotate(a8)
a7.strokeRect(m,m,a9,a9)
a7.restore()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aM(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aM(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aM(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.ls(n,q,r)}a2.lr(q,r,new A.qe(j,i,g,f,e,d,p))
b0=r-80-24
a2.aY("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aP(b*60),0,1439)
b2=B.d.a8(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.cM(B.d.q(b4),2,"0")+":"+B.b.cM(B.d.q(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aY("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.aY("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a,b6-28),b7,68)
a7.restore()}a2.lq(l,q,r)
a2.lt(q,r,o)
a7.restore();++b9.b
p=$.y.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ah(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
FG(a){var s,r,q,p,o=$.U.j().z.b,n=A.o(o).i("L<1,2>"),m=A.H(new A.L(o,n),n.i("n.E"))
B.a.V(m,new A.ve())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fk().at
n===$&&A.q()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Gj(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cG().Q)return
if($.at.j().y||$.bc!=null||$.aF.j().r!=null)return
s=$.U.j().gab()
for(r=$.aF.j().fB(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aF.b
if(m===$.aF)A.h(A.a5(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aF.b
if(r===$.aF)A.h(A.a5(""))
l=r.bW(n)
if(!(l instanceof A.li))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.yy(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mC().a=new A.k(0,0,0)
r=$.at.b
if(r===$.at)A.h(A.a5(""))
q=n.a
r.ef(q,k)
$.cp().bt(!0,B.b6,q,k)
A.xq()
A.Az(n)
return}},
Gf(){var s,r,q,p,o,n,m=$.x6
if(m==null)return
s=$.U.j().gab()
for(r=m.bV(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
n=$.U.b
if(n===$.U)A.h(A.a5(""))
if(!n.kj(o))continue
n=$.y.b
if(n===$.y)A.h(A.a5(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
FT(){var s,r,q=$.aF.j().r,p=q==null,o=p?null:q.gbj()
if(p||o==null)return
p=$.at.j()
s=q.a
r=s.a
p.ef(r,o)
$.cp().bt(!0,B.b6,r,o)
A.xq()
A.Az(s)
if(q.d!==B.a7)A.xr()
A.hg("restored visitor")},
Az(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.U.j().lL("stranger-17-eileen-case")
r=$.fk().x
r===$&&A.q()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.bx(r,t.N)
if(s==null||p==null)return
$.bG.j().bM("inside the case",p+" \u201c"+s.d+"\u201d")},
Ge(){var s,r,q,p,o,n
if(!$.cG().Q)return
s=$.U.j().gab()
r=$.me.j().lv(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.me.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bG.j().bM(o,q.e)
n=A.Go(p)
if(n!=null)B.a.l($.d7,"ambient-"+n)},
Gi(){var s,r,q,p,o=$.U.j().gab()
if(o.b<20)return
s=o.a
if(!$.vs.l(0,s))return
r=$.fk().f
r===$&&A.q()
q=r.h(0,B.d.q(s))
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.GV(r,$.U.j().b,s)
if(p!=null)$.bG.j().bM("noticed",p)},
An(a){var s,r,q,p,o
if($.xd!=null)return
s=$.U.j().gab()
r=$.U.j().r.c
q=$.U.j().e.b
p=A.o(q).i("am<2>")
o=A.Cd(new A.oc(s.a,1-r,new A.G(new A.am(q,p),p.i("l(n.E)").a(new A.vl()),p.i("G<n.E>")).gt(0),$.U.j().r.d,a))
if(o==null)return
A.Ai(o)
A.mv("ending recorded")},
Ai(a){var s,r,q
$.xd=a
$.As=!0
$.mC().a=new A.k(0,0,0)
A.jf($.j2.j())
s=a.a
r=$.fk().w
r===$&&A.q()
q=r.h(0,s.b)
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
r=A.H(r,t.N)
B.a.M(r,A.CO($.U.j().z,s))
$.j2.j().hU(a,r)},
EK(a){var s,r,q,p
A:{if("open"===a){s=B.ax
break A}if("chain"===a){s=B.ce
break A}if("through-door"===a){s=B.cf
break A}if("letterbox"===a){s=B.cg
break A}s=B.ac
break A}r=$.aF.j().kD(s)
if(s===B.ax){q=$.W.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aR
if(p!=null)p.cS($.W.j(),q.b)
p=$.aR
if(p!=null)p.dS($.W.j(),q.a)
p=$.bg
if(p!=null)p.by()}}if(!(r instanceof A.lg)||s===B.ac){A.uL()
return}if(r.a.gbj()==null){A.xa()
A.uL()
return}A.xr()},
ER(){var s=$.aF.j().kh()
if(!(s instanceof A.is)||s.b){A.xa()
A.uL()
return}if(s.a.gbj()==null){A.xa()
A.uL()
return}A.xr()},
xr(){var s,r,q,p,o,n,m,l,k,j=$.aF.j().r,i=j==null,h=i?null:j.gbj()
if(i||h==null)return
s=$.aF.j().gc_()
if(s==null){$.at.j().hT(h)
$.cp().bt(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.at.j().eg(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.at.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aB(k.a,k.b))}m.hV(l,r)
o=$.cp()
m=j.a.a
o.bt(!0,i?q:B.m,m,h)
if(!i){i=A.D(p)
k=A.bx(new A.G(p,i.i("l(1)").a(new A.vi(r)),i.i("G<1>")),t.Y)
if(k!=null){i=$.at.j()
q=k.c
i.eh(h,q)
o.bt(!0,B.m,m,h+"\n\n"+q)}}}A.Ay()
A.xq()},
xq(){var s,r=$.aF.j().r,q=r==null,p=q?null:r.gbj(),o=$.bg
if(q||p==null||o==null)return
q=r.a
s="vo-"+q.a+"-day"+B.b.cM(B.d.q(q.b),2,"0")+"-"+r.b.b+"-"+(r.f+1)
if($.xl===s)return
$.xl=s
o.cN(s,1)},
EL(a){var s,r,q,p,o,n=$.aF.j().kE(a)
if(!(n instanceof A.lh))return
s=n.c
if(!$.U.j().kk(n.b,s))return
r=s.c
s=$.at.j()
q=n.a
p=q.gbj()
s.eh(p==null?"":p,r)
o=q.gbj()
if(o==null)o=""
$.cp().bt(!0,B.m,q.a.a,o+"\n\n"+r)
A.Ay()
A.mv("saved after visitor answer")},
uL(){$.at.j().h1()
$.cp().N(0)
$.xl=null
$.ad.j().cT($.y.j())},
Ay(){var s,r,q,p,o=$.at.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.mg.j().e8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aB(p.a,B.a.gZ(p.c).q(0)))}o.hS(n,m)},
EM(a){var s,r,q,p=$.aF.j().kF(a,!0,$.mg.j())
if(p==null)return
s=$.mg.j().lg(p,B.it)
r=$.at.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.q()
r.textContent=B.H.bE("",!0,q)},
xa(){var s,r=$.W.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aR
if(s!=null)s.cS($.W.j(),r.b)
s=$.aR
if(s!=null)s.dS($.W.j(),r.a)
s=$.bg
if(s!=null)s.by()}},
Gh(){var s,r,q,p,o,n,m,l,k
for(s=$.W.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.a+":",n=p.r,m=0;!1;++m){if(!(m<0))return A.d(n,m)
l=n[m]
if(l.gkt()){l.scK(!1)
continue}k=$.c6.b
if(k===$.c6)A.h(A.a5(""))
if(B.a.p(k.d,o+m)){l.scK(!1)
continue}}}},
GZ(a){var s,r,q,p,o,n,m,l=$.W.j().e.h(0,a)
if(l==null||$.bb.j().gep()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.r){n=$.bb.b
if(n===$.bb)A.h(A.a5(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.p){n=$.bb.b
if(n===$.bb)A.h(A.a5(""))
n=n.b>12}else n=!1
if(!n){if(o===B.ad){n=$.bb.b
if(n===$.bb)A.h(A.a5(""))
n=n.b<9}else n=!1
if(!n)if(o===B.ae){o=$.bb.b
if(o===$.bb)A.h(A.a5(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
Ak(a){var s,r=$.W.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.jd
if(q.length===0)return 0.12
s=A.D(q)
return B.c.D(new A.G(q,s.i("l(1)").a(new A.vj()),s.i("G<1>")).gt(0)/q.length,0.12,1)},
h2:function h2(a,b){this.a=a
this.b=b},
lT:function lT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$
_.x=null
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=i
_.ay=j
_.ch=k
_.CW=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=$
_.fy=0
_.go=s
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.ok=a5
_.p1=a6
_.p3=_.p2=null
_.p4=a7
_.R8=a8
_.RG=0
_.rx=1
_.ry=0
_.x1=_.to=null
_.x2=0
_.xr=null
_.fQ=_.lE=_.fP=_.fO=_.y2=_.y1=0
_.au=!1
_.cG=null
_.c3=_.c2=0
_.c5=_.c4=null
_.lF=$
_.fR=null
_.fS=0},
u2:function u2(a){this.a=a},
u3:function u3(a){this.a=a},
u4:function u4(a){this.a=a},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
tX:function tX(){},
tY:function tY(){},
tT:function tT(){},
tU:function tU(){},
tV:function tV(){},
tW:function tW(){},
lS:function lS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tx:function tx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
uu:function uu(){},
uv:function uv(){},
uw:function uw(){},
uC:function uC(){},
uD:function uD(){},
uE:function uE(){},
uF:function uF(){},
uG:function uG(){},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
uJ:function uJ(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(){},
uz:function uz(){},
uA:function uA(){},
uB:function uB(){},
ur:function ur(){},
us:function us(){},
ut:function ut(){},
un:function un(){},
uo:function uo(){},
up:function up(){},
uq:function uq(){},
va:function va(a,b){this.a=a
this.b=b},
v8:function v8(a){this.a=a},
v9:function v9(a){this.a=a},
vN:function vN(a,b){this.a=a
this.b=b},
vO:function vO(){},
vP:function vP(){},
w_:function w_(){},
w8:function w8(){},
w9:function w9(){},
wa:function wa(){},
wb:function wb(){},
wc:function wc(){},
wd:function wd(){},
we:function we(){},
vQ:function vQ(){},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vU:function vU(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vY:function vY(){},
vZ:function vZ(){},
w0:function w0(){},
w1:function w1(){},
w2:function w2(){},
w3:function w3(){},
w4:function w4(){},
w5:function w5(){},
w6:function w6(){},
w7:function w7(){},
vb:function vb(){},
vc:function vc(){},
vg:function vg(a){this.a=a},
vp:function vp(a){this.a=a},
vt:function vt(a){this.a=a},
ve:function ve(){},
vl:function vl(){},
vi:function vi(a){this.a=a},
vj:function vj(){},
B_(a){return v.mangledGlobalNames[a]},
yy(a,b,c,d,e,f){var s=a[b]()
return s},
pu(a,b,c){var s=null
return c.a(A.yy(a,b,s,s,s,s))},
wj(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.al(b.glT(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.aa()
o=q*16
n=o+16
B.t.d0(s,o,n,p.a)
if(l)B.t.d0(r,o,n,p.dO().a)}m=a.a
A.t(m,"uInstanceModels",new A.x(B.dQ,s))
if(l)A.t(m,"uInstanceNormalMatrices",new A.x(B.dQ,r))
A.t(m,"uUseInstances",B.dR)},
C0(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
C_(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
AM(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Go(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
GD(a){var s,r,q,p,o,n,m,l=B.i.an(a,null),k=t.f
if(!k.b(l))throw A.b(B.hc)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.jk[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aO(m,s,r))
else throw A.b(A.S('text.json section "'+n+'" must be an object',null,null))}return p},
GV(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbb(a)
s=new A.ej()
s.bO((b^274953^c)>>>0)
r=s.aS(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wA.prototype={}
J.kf.prototype={
a7(a,b){return a===b},
gP(a){return A.i7(a)},
q(a){return"Instance of '"+A.kJ(a)+"'"},
ga3(a){return A.d8(A.xi(this))}}
J.kh.prototype={
q(a){return String(a)},
gP(a){return a?519018:218159},
ga3(a){return A.d8(t.y)},
$iai:1,
$il:1}
J.hL.prototype={
a7(a,b){return null==b},
q(a){return"null"},
gP(a){return 0},
$iai:1,
$iar:1}
J.hO.prototype={$iaf:1}
J.e5.prototype={
gP(a){return 0},
ga3(a){return B.mf},
q(a){return String(a)}}
J.kD.prototype={}
J.eZ.prototype={}
J.e4.prototype={
q(a){var s=a[$.B2()]
if(s==null)s=a[$.wp()]
if(s==null)return this.i7(a)
return"JavaScript function for "+J.da(s)},
$ieG:1}
J.hN.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.hP.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.r.prototype={
cD(a,b){return new A.aV(a,A.D(a).i("@<1>").K(b).i("aV<1,2>"))},
l(a,b){A.D(a).c.a(b)
a.$flags&1&&A.bS(a,29)
a.push(b)},
mI(a,b){var s
a.$flags&1&&A.bS(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yS(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bS(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
M(a,b){var s
A.D(a).i("n<1>").a(b)
a.$flags&1&&A.bS(a,"addAll",2)
if(Array.isArray(b)){this.ix(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gn())},
ix(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.au(a))
for(r=0;r<s;++r)a.push(b[r])},
N(a){a.$flags&1&&A.bS(a,"clear","clear")
a.length=0},
ca(a,b,c){var s=A.D(a)
return new A.I(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("I<1,2>"))},
Y(a,b){var s,r=A.e6(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.v(a[s]))
return r.join(b)},
bq(a,b,c,d){var s,r,q
d.a(b)
A.D(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.au(a))}return r},
b_(a,b,c){var s,r,q,p=A.D(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.au(a))}if(c!=null)return c.$0()
throw A.b(A.cw())},
aj(a,b){return this.b_(a,b,null)},
a2(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aU(a,b,c){var s=a.length
if(b>s)throw A.b(A.aX(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aX(c,b,s,"end",null))
if(b===c)return A.c([],A.D(a))
return A.c(a.slice(b,c),A.D(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cw())},
gZ(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cw())},
gbb(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cw())
throw A.b(A.yt())},
L(a,b){var s,r
A.D(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.au(a))}return!1},
a4(a,b){var s,r
A.D(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.au(a))}return!0},
V(a,b){var s,r,q,p,o,n=A.D(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bS(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Fj()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.hz()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hk(b,2))
if(p>0)this.jK(a,p)},
W(a){return this.V(a,null)},
jK(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d1(a,b){var s,r,q,p
a.$flags&2&&A.bS(a,"shuffle")
s=a.length
while(s>1){r=b.aS(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
br(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a8(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gX(a){return a.length!==0},
q(a){return A.wz(a,"[","]")},
gu(a){return new J.ex(a,a.length,A.D(a).i("ex<1>"))},
gP(a){return A.i7(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bS(a,"set length","change the length of")
if(b<0)throw A.b(A.aX(b,0,null,"newLength",null))
if(b>a.length)A.D(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.vD(a,b))
return a[b]},
k(a,b,c){A.D(a).c.a(c)
a.$flags&2&&A.bS(a)
if(!(b>=0&&b<a.length))throw A.b(A.vD(a,b))
a[b]=c},
e3(a,b){return new A.dB(a,b.i("dB<0>"))},
dK(a,b){var s
A.D(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.d8(A.D(a))},
$iR:1,
$in:1,
$iF:1}
J.kg.prototype={
n6(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kJ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pv.prototype={}
J.ex.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia9:1}
J.fG.prototype={
H(a,b){var s
A.a6(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc7(b)
if(this.gc7(a)===s)return 0
if(this.gc7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc7(a){return a===0?1/a<0:a<0},
af(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.br(""+a+".toInt()"))},
fE(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.br(""+a+".ceil()"))},
aP(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.br(""+a+".floor()"))},
aB(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.br(""+a+".round()"))},
D(a,b,c){if(this.H(b,c)>0)throw A.b(A.xI(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
aM(a,b){var s
if(b>20)throw A.b(A.aX(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc7(a))return"-"+s
return s},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
S(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a8(a,b){return(a|0)===a?a/b|0:this.jW(a,b)},
jW(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.br("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
dv(a,b){var s
if(a>0)s=this.fi(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jT(a,b){if(0>b)throw A.b(A.xI(b))
return this.fi(a,b)},
fi(a,b){return b>31?0:a>>>b},
ga3(a){return A.d8(t.o)},
$ib4:1,
$iB:1,
$ibj:1}
J.hK.prototype={
ga3(a){return A.d8(t.S)},
$iai:1,
$ii:1}
J.ki.prototype={
ga3(a){return A.d8(t.i)},
$iai:1}
J.e3.prototype={
fA(a,b){return new A.m4(b,a,0)},
dI(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aN(a,r-s)},
i2(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hM){s=b.e
s=!(s==null?b.e=b.iQ():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iY(a,b)}},
bJ(a,b,c,d){var s=A.kO(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iY(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Bv(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gem()
n=p.gdH()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.I(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aN(a,r))
return m},
ag(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aX(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ag(a,b,0)},
I(a,b,c){return a.substring(b,A.kO(b,c,a.length))},
aN(a,b){return this.I(a,b,null)},
ba(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.CG(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.CH(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ac(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.eB)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cM(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ac(c,s)+a},
cH(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aX(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
br(a,b){return this.cH(a,b,0)},
p(a,b){return A.H4(a,b,0)},
H(a,b){var s
A.p(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
q(a){return a},
gP(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.d8(t.N)},
gt(a){return a.length},
$iai:1,
$ib4:1,
$iqi:1,
$ie:1}
A.eg.prototype={
gu(a){return new A.hs(J.O(this.gb5()),A.o(this).i("hs<1,2>"))},
gt(a){return J.cH(this.gb5())},
gO(a){return J.mE(this.gb5())},
gX(a){return J.By(this.gb5())},
a2(a,b){return A.o(this).y[1].a(J.mD(this.gb5(),b))},
gU(a){return A.o(this).y[1].a(J.y5(this.gb5()))},
p(a,b){return J.y4(this.gb5(),b)},
q(a){return J.da(this.gb5())}}
A.hs.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia9:1}
A.eA.prototype={
gb5(){return this.a}}
A.iA.prototype={$iR:1}
A.iy.prototype={
h(a,b){return this.$ti.y[1].a(J.aT(this.a,b))},
k(a,b,c){var s=this.$ti
J.bk(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.Bz(this.a,b)},
l(a,b){var s=this.$ti
J.jn(this.a,s.c.a(s.y[1].a(b)))},
$iR:1,
$iF:1}
A.aV.prototype={
cD(a,b){return new A.aV(this.a,this.$ti.i("@<1>").K(b).i("aV<1,2>"))},
gb5(){return this.a}}
A.fH.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.de.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.r1.prototype={
gE(){return 0}}
A.R.prototype={}
A.a2.prototype={
gu(a){var s=this
return new A.aD(s,s.gt(s),A.o(s).i("aD<a2.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cw())
return this.a2(0,0)},
p(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a8(r.a2(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.au(r))}return!1},
a4(a,b){var s,r,q=this
A.o(q).i("l(a2.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a2(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.au(q))}return!0},
L(a,b){var s,r,q=this
A.o(q).i("l(a2.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a2(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.au(q))}return!1},
Y(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.v(p.a2(0,0))
if(o!==p.gt(p))throw A.b(A.au(p))
for(r=s,q=1;q<o;++q){r=r+b+A.v(p.a2(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.v(p.a2(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}},
cX(a,b){return this.i6(0,A.o(this).i("l(a2.E)").a(b))},
ca(a,b,c){var s=A.o(this)
return new A.I(this,s.K(c).i("1(a2.E)").a(b),s.i("@<a2.E>").K(c).i("I<1,2>"))},
bL(a,b){var s=A.o(this).i("a2.E")
if(b)s=A.H(this,s)
else{s=A.H(this,s)
s.$flags=1
s=s}return s},
bK(a){return this.bL(0,!0)},
b9(a){var s,r=this,q=A.wD(A.o(r).i("a2.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a2(0,s))
return q}}
A.im.prototype={
gj1(){var s=J.cH(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjU(){var s=J.cH(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cH(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a2(a,b){var s=this,r=s.gjU()+b
if(b<0||r>=s.gj1())throw A.b(A.pl(b,s.gt(0),s,"index"))
return J.mD(s.a,r)},
bL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aH(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.yw(0,n):J.yv(0,n)}r=A.e6(s,m.a2(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a2(n,o+q))
if(m.gt(n)<l)throw A.b(A.au(p))}return r},
bK(a){return this.bL(0,!0)}}
A.aD.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aH(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a2(q,s);++r.c
return!0},
$ia9:1}
A.cy.prototype={
gu(a){return new A.hU(J.O(this.a),this.b,A.o(this).i("hU<1,2>"))},
gt(a){return J.cH(this.a)},
gO(a){return J.mE(this.a)},
gU(a){return this.b.$1(J.y5(this.a))},
a2(a,b){return this.b.$1(J.mD(this.a,b))}}
A.df.prototype={$iR:1}
A.hU.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.I.prototype={
gt(a){return J.cH(this.a)},
a2(a,b){return this.b.$1(J.mD(this.a,b))}}
A.G.prototype={
gu(a){return new A.T(J.O(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia9:1}
A.hC.prototype={
gu(a){return new A.hD(J.O(this.a),this.b,B.eu,this.$ti.i("hD<1,2>"))}}
A.hD.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.O(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia9:1}
A.hA.prototype={
m(){return!1},
gn(){throw A.b(A.cw())},
$ia9:1}
A.dB.prototype={
gu(a){return new A.iu(J.O(this.a),this.$ti.i("iu<1>"))}}
A.iu.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia9:1}
A.av.prototype={
st(a,b){throw A.b(A.br("Cannot change the length of a fixed-length list"))},
l(a,b){A.c9(a).i("av.E").a(b)
throw A.b(A.br("Cannot add to a fixed-length list"))}}
A.ec.prototype={
k(a,b,c){A.o(this).i("ec.E").a(c)
throw A.b(A.br("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.br("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("ec.E").a(b)
throw A.b(A.br("Cannot add to an unmodifiable list"))}}
A.fZ.prototype={}
A.eS.prototype={
gt(a){return J.cH(this.a)},
a2(a,b){var s=this.a,r=J.aH(s)
return r.a2(s,r.gt(s)-1-b)}}
A.j0.prototype={}
A.aB.prototype={$r:"+(1,2)",$s:1}
A.fb.prototype={$r:"+height,width(1,2)",$s:2}
A.iM.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iN.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.hv.prototype={}
A.fu.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
q(a){return A.wE(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.BT()},
gJ(){return new A.bR(this.lB(),A.o(this).i("bR<N<1,2>>"))},
lB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga_(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("N<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.N(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bG(a,b,c,d){var s=A.m(c,d)
this.av(0,new A.nN(this,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),s))
return s},
$iZ:1}
A.nN.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
geY(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
av(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geY()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga_(){return new A.f7(this.geY(),this.$ti.i("f7<1>"))},
gaD(){return new A.f7(this.b,this.$ti.i("f7<2>"))}}
A.f7.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f8(s,s.length,this.$ti.i("f8<1>"))}}
A.f8.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia9:1}
A.cN.prototype={
bx(){var s=this,r=s.$map
if(r==null){r=new A.hQ(s.$ti.i("hQ<1,2>"))
A.AH(s.a,r)
s.$map=r}return r},
R(a){return this.bx().R(a)},
h(a,b){return this.bx().h(0,b)},
av(a,b){this.$ti.i("~(1,2)").a(b)
this.bx().av(0,b)},
ga_(){var s=this.bx()
return new A.ac(s,A.o(s).i("ac<1>"))},
gaD(){var s=this.bx()
return new A.am(s,A.o(s).i("am<2>"))},
gt(a){return this.bx().a}}
A.hw.prototype={
l(a,b){A.o(this).c.a(b)
A.BU()}}
A.aN.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f8(s,s.length,r.$ti.i("f8<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b9(a){return A.fJ(this,this.$ti.c)}}
A.qy.prototype={
$0(){return B.c.aP(1000*this.a.now())},
$S:29}
A.id.prototype={}
A.t0.prototype={
b0(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.i1.prototype={
q(a){return"Null check operator used on a null value"}}
A.kj.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.la.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qb.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hB.prototype={}
A.iP.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icX:1}
A.dW.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.B0(r==null?"unknown":r)+"'"},
ga3(a){var s=A.xK(this)
return A.d8(s==null?A.c9(this):s)},
$ieG:1,
gnj(){return this},
$C:"$1",
$R:1,
$D:null}
A.jE.prototype={$C:"$0",$R:0}
A.jF.prototype={$C:"$2",$R:2}
A.l7.prototype={}
A.l3.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.B0(s)+"'"}}
A.fn.prototype={
a7(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fn))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.mB(this.a)^A.i7(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kJ(this.a)+"'")}}
A.kS.prototype={
q(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.ac(this,A.o(this).i("ac<1>"))},
gaD(){return new A.am(this,A.o(this).i("am<2>"))},
gJ(){return new A.L(this,A.o(this).i("L<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lU(a)},
lU(a){var s=this.d
if(s==null)return!1
return this.c6(this.eV(s,a),a)>=0},
M(a,b){A.o(this).i("Z<1,2>").a(b).av(0,new A.pE(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lV(b)},
lV(a){var s,r,q=this.d
if(q==null)return null
s=this.eV(q,a)
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.es(s==null?q.b=q.dr():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.es(r==null?q.c=q.dr():r,b,c)}else q.lX(b,c)},
lX(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dr()
r=o.cI(a)
q=s[r]
if(q==null)s[r]=[o.ds(a,b)]
else{p=o.c6(q,a)
if(p>=0)q[p].b=b
else q.push(o.ds(a,b))}},
cQ(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.iv(this.c,b)
else return this.lW(b)},
lW(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cI(a)
r=n[s]
q=o.c6(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eq(p)
if(r.length===0)delete n[s]
return p.b},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d3()}},
av(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.au(q))
s=s.c}},
es(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ds(b,c)
else s.b=c},
iv(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eq(s)
delete a[b]
return s.b},
d3(){this.r=this.r+1&1073741823},
ds(a,b){var s=this,r=A.o(s),q=new A.pO(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d3()
return q},
eq(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d3()},
cI(a){return J.aC(a)&1073741823},
eV(a,b){return a[this.cI(b)]},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
q(a){return A.wE(this)},
dr(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwC:1}
A.pE.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pO.prototype={}
A.ac.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
p(a,b){return this.a.R(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia9:1}
A.am.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ag(s,s.r,s.e,this.$ti.i("ag<1>"))}}
A.ag.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia9:1}
A.L.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cx(s,s.r,s.e,this.$ti.i("cx<1,2>"))}}
A.cx.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.N(s.a,s.b,r.$ti.i("N<1,2>"))
r.c=s.c
return!0}},
$ia9:1}
A.hQ.prototype={
cI(a){return A.Gy(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.vJ.prototype={
$1(a){return this.a(a)},
$S:15}
A.vK.prototype={
$2(a,b){return this.a(a,b)},
$S:125}
A.vL.prototype={
$1(a){return this.a(A.p(a))},
$S:38}
A.bQ.prototype={
ga3(a){return A.d8(this.eW())},
eW(){return A.GI(this.$r,this.dj())},
q(a){return this.fp(!1)},
fp(a){var s,r,q,p,o,n=this.j5(),m=this.dj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.yP(o):l+A.v(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
j5(){var s,r=this.$s
while($.u5.length<=r)B.a.l($.u5,null)
s=$.u5[r]
if(s==null){s=this.iP()
B.a.k($.u5,r,s)}return s},
iP(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.yu(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ah(j,k)}}
A.ek.prototype={
dj(){return[this.a,this.b]},
a7(a,b){if(b==null)return!1
return b instanceof A.ek&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gP(a){return A.cT(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.el.prototype={
dj(){return[this.a,this.b,this.c]},
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.el&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gP(a){var s=this
return A.cT(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.hM.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjl(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.yA(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iQ(){var s,r=this.a
if(!B.b.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fA(a,b){return new A.lt(this,b,0)},
j4(a,b){var s,r=this.gjl()
if(r==null)r=A.fe(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lO(s)},
$iqi:1,
$iD6:1}
A.lO.prototype={
gem(){return this.b.index},
gdH(){var s=this.b
return s.index+s[0].length},
$ifL:1,
$ii8:1}
A.lt.prototype={
gu(a){return new A.lu(this.a,this.b,this.c)}}
A.lu.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.j4(l,s)
if(p!=null){m.d=p
o=p.gdH()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.d(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.d(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia9:1}
A.il.prototype={
gdH(){return this.a+this.c.length},
$ifL:1,
gem(){return this.a}}
A.m4.prototype={
gu(a){return new A.m5(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.il(r,s)
throw A.b(A.cw())}}
A.m5.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.il(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia9:1}
A.ty.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a5(""))
return s}}
A.fN.prototype={
ga3(a){return B.m8},
$iai:1}
A.fM.prototype={$ifM:1}
A.i_.prototype={
jf(a,b,c,d){var s=A.aX(b,0,c,d,null)
throw A.b(s)},
eA(a,b,c,d){if(b>>>0!==b||b>c)this.jf(a,b,c,d)}}
A.ks.prototype={
ga3(a){return B.m9},
$iai:1}
A.b5.prototype={
gt(a){return a.length},
ff(a,b,c,d,e){var s,r,q=a.length
this.eA(a,b,q,"start")
this.eA(a,c,q,"end")
if(b>c)throw A.b(A.aX(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.j("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibV:1}
A.hY.prototype={
h(a,b){A.dH(b,a,a.length)
return a[b]},
k(a,b,c){A.bv(c)
a.$flags&2&&A.bS(a)
A.dH(b,a,a.length)
a[b]=c},
d0(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bS(a,5)
this.ff(a,b,c,d,0)
return},
$iR:1,
$in:1,
$iF:1}
A.hZ.prototype={
k(a,b,c){A.f(c)
a.$flags&2&&A.bS(a)
A.dH(b,a,a.length)
a[b]=c},
hN(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bS(a,5)
this.ff(a,b,c,d,e)
return},
$iR:1,
$in:1,
$iF:1}
A.hX.prototype={
ga3(a){return B.ma},
aU(a,b,c){return new Float32Array(a.subarray(b,A.EI(b,c,a.length)))},
$iai:1,
$iom:1}
A.kt.prototype={
ga3(a){return B.mb},
$iai:1}
A.ku.prototype={
ga3(a){return B.mc},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1}
A.kv.prototype={
ga3(a){return B.md},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1}
A.kw.prototype={
ga3(a){return B.me},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1}
A.kx.prototype={
ga3(a){return B.mh},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1,
$iwQ:1}
A.ky.prototype={
ga3(a){return B.mi},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1}
A.eM.prototype={
ga3(a){return B.mj},
gt(a){return a.length},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1,
$ieM:1}
A.i0.prototype={
ga3(a){return B.mk},
gt(a){return a.length},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iai:1,
$iip:1}
A.iH.prototype={}
A.iI.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.cB.prototype={
i(a){return A.iT(v.typeUniverse,this,a)},
K(a){return A.zv(v.typeUniverse,this,a)}}
A.lH.prototype={}
A.m8.prototype={
q(a){return A.bH(this.a,null)}}
A.lF.prototype={
q(a){return this.a}}
A.h5.prototype={$idy:1}
A.tu.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.tt.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:108}
A.tv.prototype={
$0(){this.a.$0()},
$S:14}
A.tw.prototype={
$0(){this.a.$0()},
$S:14}
A.u8.prototype={
iu(a,b){if(self.setTimeout!=null)self.setTimeout(A.hk(new A.u9(this,b),0),a)
else throw A.b(A.br("`setTimeout()` not found."))}}
A.u9.prototype={
$0(){this.b.$0()},
$S:0}
A.lv.prototype={
dz(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d6(a)
else{s=r.a
if(q.i("bU<1>").b(a))s.ey(a)
else s.co(a)}},
dA(a,b){var s=this.a
if(this.b)s.bn(new A.b2(a,b))
else s.cm(new A.b2(a,b))}}
A.uj.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.uk.prototype={
$2(a,b){this.a.$2(1,new A.hB(a,t.l.a(b)))},
$S:62}
A.vx.prototype={
$2(a,b){this.a(A.f(a),b)},
$S:71}
A.c5.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jN(a,b){var s,r,q
a=A.f(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.jN(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.zp
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.zp
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.j("sync*"))}return!1},
nm(a){var s,r,q=this
if(a instanceof A.bR){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.O(a)
return 2}},
$ia9:1}
A.bR.prototype={
gu(a){return new A.c5(this.a(),this.$ti.i("c5<1>"))}}
A.b2.prototype={
q(a){return A.v(this.a)},
$iao:1,
gbN(){return this.b}}
A.ot.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eG(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cF(p)
l=r
o=q
n=A.xj(l,o)
l=new A.b2(l,o)
m.b.bn(l)
return}m.b.eG(s)}},
$S:0}
A.ow.prototype={
$2(a,b){var s,r,q=this
A.fe(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bn(new A.b2(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bn(new A.b2(r,s))}},
$S:72}
A.ov.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bk(r,k.b,a)
if(J.a8(s,0)){q=A.c([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.jn(q,l)}k.c.co(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bn(new A.b2(q,o))}},
$S(){return this.d.i("ar(0)")}}
A.lz.prototype={
dA(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.cm(A.Fi(a,b))},
fF(a){return this.dA(a,null)}}
A.iw.prototype={
dz(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.d6(r.i("1/").a(a))}}
A.dC.prototype={
m5(a){if((this.c&15)!==6)return!0
return this.b.b.dZ(t.bl.a(this.d),a.a,t.y,t.K)},
lM(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.n2(q,m,a.b,o,n,t.l)
else p=l.dZ(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
e_(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ap
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.al(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.Al(b,s)}r=new A.as(s,c.i("as<0>"))
this.cl(new A.dC(r,3,a,b,q.i("@<1>").K(c).i("dC<1,2>")))
return r},
fn(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.as($.ap,c.i("as<0>"))
this.cl(new A.dC(s,19,a,b,r.i("@<1>").K(c).i("dC<1,2>")))
return s},
jQ(a){this.a=this.a&1|16
this.c=a},
cn(a){this.a=a.a&30|this.a&1
this.c=a.c},
cl(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cl(a)
return}r.cn(s)}A.mu(null,null,r.b,t.O.a(new A.tB(r,a)))}},
f5(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f5(a)
return}m.cn(n)}l.a=m.cv(a)
A.mu(null,null,m.b,t.O.a(new A.tG(l,m)))}},
bT(){var s=t.F.a(this.c)
this.c=null
return this.cv(s)},
cv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eG(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bU<1>").b(a))A.tE(a,r,!0)
else{s=r.bT()
q.c.a(a)
r.a=8
r.c=a
A.f5(r,s)}},
co(a){var s,r=this
r.$ti.c.a(a)
s=r.bT()
r.a=8
r.c=a
A.f5(r,s)},
iO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bT()
q.cn(a)
A.f5(q,r)},
bn(a){var s=this.bT()
this.jQ(a)
A.f5(this,s)},
d6(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bU<1>").b(a)){this.ey(a)
return}this.iz(a)},
iz(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mu(null,null,s.b,t.O.a(new A.tD(s,a)))},
ey(a){A.tE(this.$ti.i("bU<1>").a(a),this,!1)
return},
cm(a){this.a^=2
A.mu(null,null,this.b,t.O.a(new A.tC(this,a)))},
$ibU:1}
A.tB.prototype={
$0(){A.f5(this.a,this.b)},
$S:0}
A.tG.prototype={
$0(){A.f5(this.b,this.a.a)},
$S:0}
A.tF.prototype={
$0(){A.tE(this.a.a,this.b,!0)},
$S:0}
A.tD.prototype={
$0(){this.a.co(this.b)},
$S:0}
A.tC.prototype={
$0(){this.a.bn(this.b)},
$S:0}
A.tJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.n1(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cF(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mV(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.e_(new A.tK(l,m),new A.tL(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tK.prototype={
$1(a){this.a.iO(this.b)},
$S:22}
A.tL.prototype={
$2(a,b){A.fe(a)
t.l.a(b)
this.a.bn(new A.b2(a,b))},
$S:73}
A.tI.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dZ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cF(l)
q=s
p=r
if(p==null)p=A.mV(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.tH.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.m5(s)&&p.a.e!=null){p.c=p.a.lM(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cF(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mV(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lw.prototype={}
A.m3.prototype={}
A.j_.prototype={$izj:1}
A.lX.prototype={
n3(a){var s,r,q
t.O.a(a)
try{if(B.x===$.ap){a.$0()
return}A.Aq(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cF(q)
A.xw(A.fe(s),t.l.a(r))}},
fD(a){return new A.u6(this,t.O.a(a))},
n1(a,b){b.i("0()").a(a)
if($.ap===B.x)return a.$0()
return A.Aq(null,null,this,a,b)},
dZ(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ap===B.x)return a.$1(b)
return A.FX(null,null,this,a,b,c,d)},
n2(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ap===B.x)return a.$2(b,c)
return A.FW(null,null,this,a,b,c,d,e,f)},
hi(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.u6.prototype={
$0(){return this.a.n3(this.b)},
$S:0}
A.vm.prototype={
$0(){A.Ci(this.a,this.b)},
$S:0}
A.iB.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.f6(this,this.$ti.i("f6<1>"))},
gaD(){var s=this.$ti
return A.ko(new A.f6(this,s.i("f6<1>")),new A.tN(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iU(a)},
iU(a){var s=this.d
if(s==null)return!1
return this.bo(this.eF(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.zl(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.zl(q,b)
return r}else return this.j8(b)},
j8(a){var s,r,q=this.d
if(q==null)return null
s=this.eF(q,a)
r=this.bo(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eD(s==null?m.b=A.wU():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eD(r==null?m.c=A.wU():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wU()
p=A.mB(b)&1073741823
o=q[p]
if(o==null){A.wV(q,p,[b,c]);++m.a
m.e=null}else{n=m.bo(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
av(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eE()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.au(m))}},
eE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e6(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
eD(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wV(a,b,c)},
eF(a,b){return a[A.mB(b)&1073741823]}}
A.tN.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iD.prototype={
bo(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.f6.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iC(s,s.eE(),this.$ti.i("iC<1>"))},
p(a,b){return this.a.R(b)}}
A.iC.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.au(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia9:1}
A.ck.prototype={
f2(){return new A.ck(A.o(this).i("ck<1>"))},
gu(a){var s=this,r=new A.f9(s,s.r,A.o(s).i("f9<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iT(b)},
iT(a){var s=this.d
if(s==null)return!1
return this.bo(s[this.da(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.j("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eC(s==null?q.b=A.wW():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eC(r==null?q.c=A.wW():r,b)}else return q.iw(b)},
iw(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wW()
r=p.da(a)
q=s[r]
if(q==null)s[r]=[p.d9(a)]
else{if(p.bo(q,a)>=0)return!1
q.push(p.d9(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f7(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f7(s.c,b)
else return s.jJ(b)},
jJ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.da(a)
r=n[s]
q=o.bo(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fs(p)
return!0},
j6(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.au(n))
if(!0===o)n.a5(0,r)}},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dq()}},
eC(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d9(b)
return!0},
f7(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fs(s)
delete a[b]
return!0},
dq(){this.r=this.r+1&1073741823},
d9(a){var s,r=this,q=new A.lN(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dq()
return q},
fs(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dq()},
da(a){return J.aC(a)&1073741823},
bo(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$iyG:1}
A.lN.prototype={}
A.f9.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.au(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia9:1}
A.pP.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:98}
A.Y.prototype={
gu(a){return new A.aD(a,this.gt(a),A.c9(a).i("aD<Y.E>"))},
a2(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gX(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cw())
return this.h(a,0)},
p(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a8(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.au(a))}return!1},
a4(a,b){var s,r
A.c9(a).i("l(Y.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.au(a))}return!0},
L(a,b){var s,r
A.c9(a).i("l(Y.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.au(a))}return!1},
Y(a,b){var s
if(this.gt(a)===0)return""
s=A.wO("",a,b)
return s.charCodeAt(0)==0?s:s},
e3(a,b){return new A.dB(a,b.i("dB<0>"))},
ca(a,b,c){var s=A.c9(a)
return new A.I(a,s.K(c).i("1(Y.E)").a(b),s.i("@<Y.E>").K(c).i("I<1,2>"))},
l(a,b){var s
A.c9(a).i("Y.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cD(a,b){return new A.aV(a,A.c9(a).i("@<Y.E>").K(b).i("aV<1,2>"))},
lG(a,b,c,d){var s
A.c9(a).i("Y.E?").a(d)
A.kO(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
q(a){return A.wz(a,"[","]")},
$iR:1,
$in:1,
$iF:1}
A.a7.prototype={
av(a,b){var s,r,q,p=A.o(this)
p.i("~(a7.K,a7.V)").a(b)
for(s=this.ga_(),s=s.gu(s),p=p.i("a7.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga_().ca(0,new A.pR(this),A.o(this).i("N<a7.K,a7.V>"))},
bG(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("N<1,2>(a7.K,a7.V)").a(b)
s=A.m(c,d)
for(r=this.ga_(),r=r.gu(r),n=n.i("a7.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
kd(a){var s,r
for(s=J.O(A.o(this).i("n<N<a7.K,a7.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga_().p(0,a)},
gt(a){var s=this.ga_()
return s.gt(s)},
gO(a){var s=this.ga_()
return s.gO(s)},
gX(a){var s=this.ga_()
return s.gX(s)},
gaD(){return new A.iE(this,A.o(this).i("iE<a7.K,a7.V>"))},
q(a){return A.wE(this)},
$iZ:1}
A.pR.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a7.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a7.V").a(s)
return new A.N(a,s,r.i("N<a7.K,a7.V>"))},
$S(){return A.o(this.a).i("N<a7.K,a7.V>(a7.K)")}}
A.pS.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.v(a)
r.a=(r.a+=s)+": "
s=A.v(b)
r.a+=s},
$S:47}
A.iE.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gX(a){var s=this.a
return s.gX(s)},
gU(a){var s=this.a,r=s.ga_()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga_()
return new A.iF(r.gu(r),s,this.$ti.i("iF<1,2>"))}}
A.iF.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.iU.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.br("Cannot modify unmodifiable map"))}}
A.fK.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
av(a,b){this.a.av(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gX(a){var s=this.a
return s.gX(s)},
gt(a){var s=this.a
return s.gt(s)},
ga_(){return this.a.ga_()},
q(a){return this.a.q(0)},
gaD(){return this.a.gaD()},
gJ(){return this.a.gJ()},
bG(a,b,c,d){return this.a.bG(0,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),c,d)},
$iZ:1}
A.ed.prototype={}
A.du.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
M(a,b){var s
for(s=J.O(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bp(a){var s,r,q=this.b9(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.p(0,r))q.a5(0,r)}return q},
q(a){return A.wz(this,"{","}")},
a4(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Y(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.da(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.v(q.gn())
while(q.m())}else{r=s
do r=r+b+A.v(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
L(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cw())
return s.gn()},
a2(a,b){var s,r
A.kN(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.pl(b,b-r,this,"index"))},
$iR:1,
$in:1,
$iea:1}
A.iO.prototype={
bp(a){var s,r,q,p=this,o=p.f2()
for(s=A.h0(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.l(0,q)}return o},
b9(a){var s=this.f2()
s.M(0,this)
return s}}
A.m9.prototype={
l(a,b){this.$ti.c.a(b)
return A.Ef()}}
A.h_.prototype={
p(a,b){return this.a.p(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.h0(s,s.r,A.o(s).c)},
b9(a){return this.a.b9(0)}}
A.h6.prototype={}
A.iV.prototype={}
A.lL.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jE(b):s}},
gt(a){return this.b==null?this.c.a:this.bu().length},
gO(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga_(){if(this.b==null){var s=this.c
return new A.ac(s,A.o(s).i("ac<1>"))}return new A.lM(this)},
gaD(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.o(s).i("am<2>"))}return A.ko(r.bu(),new A.tP(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.p(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.k6().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
av(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.av(0,b)
s=o.bu()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uK(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.au(o))}},
bu(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
k6(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bu()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.N(r)
n.a=n.b=null
return n.c=s},
jE(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uK(this.a[a])
return this.b[a]=s}}
A.tP.prototype={
$1(a){return this.a.h(0,A.p(a))},
$S:38}
A.lM.prototype={
gt(a){return this.a.gt(0)},
a2(a,b){var s=this.a
if(s.b==null)s=s.ga_().a2(0,b)
else{s=s.bu()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga_()
s=s.gu(s)}else{s=s.bu()
s=new J.ex(s,s.length,A.D(s).i("ex<1>"))}return s},
p(a,b){return this.a.R(b)}}
A.ud.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:43}
A.uc.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:43}
A.jy.prototype={
m8(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kO(a4,a5,a2)
s=$.Be()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.vH(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.vH(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.d(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.d(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bq("")
g=o}else g=o
g.a+=B.b.I(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.S("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.y9(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.S(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bJ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.y9(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.S(a1,a3,a5))
if(b>1)a3=B.b.bJ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nv.prototype={}
A.eB.prototype={}
A.jJ.prototype={}
A.jT.prototype={}
A.hR.prototype={
q(a){var s=A.jU(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kl.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.kk.prototype={
an(a,b){var s=A.FK(a,this.glk().a)
return s},
ad(a,b){var s=A.DV(a,this.gly().b,null)
return s},
gly(){return B.iy},
glk(){return B.ix}}
A.pG.prototype={}
A.pF.prototype={}
A.tR.prototype={
hr(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(117)
s.a+=o
o=A.ax(100)
s.a+=o
o=p>>>8&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ax(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
switch(p){case 8:o=A.ax(98)
s.a+=o
break
case 9:o=A.ax(116)
s.a+=o
break
case 10:o=A.ax(110)
s.a+=o
break
case 12:o=A.ax(102)
s.a+=o
break
case 13:o=A.ax(114)
s.a+=o
break
default:o=A.ax(117)
s.a+=o
o=A.ax(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.I(a,r,m)},
d7(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.kl(a,null))}B.a.l(s,a)},
cY(a){var s,r,q,p,o=this
if(o.hq(a))return
o.d7(a)
try{s=o.b.$1(a)
if(!o.hq(s)){q=A.yC(a,null,o.gf4())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.yC(a,r,o.gf4())
throw A.b(q)}},
hq(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hr(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d7(a)
q.nh(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d7(a)
r=q.ni(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
nh(a){var s,r,q=this.c
q.a+="["
s=J.aH(a)
if(s.gX(a)){this.cY(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cY(s.h(a,r))}}q.a+="]"},
ni(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e6(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.av(0,new A.tS(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hr(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cY(r[n])}p.a+="}"
return!0}}
A.tS.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:47}
A.tQ.prototype={
gf4(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.le.prototype={}
A.t5.prototype={
kJ(a){return new A.ub(this.a).iV(t.J.a(a),0,null,!0)}}
A.ub.prototype={
iV(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kO(b,c,J.cH(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Ew(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Ev(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dd(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Ex(o)
l.b=0
throw A.b(A.S(m,a,p+l.c))}return n},
dd(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a8(b+c,2)
r=q.dd(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dd(a,s,c,d)}return q.lj(a,b,c,d)},
lj(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bq(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ax(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ax(h)
e.a+=p
break
case 65:p=A.ax(h)
e.a+=p;--d
break
default:p=A.ax(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.d(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.d(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.d(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.d(a,l)
p=A.ax(a[l])
e.a+=p}else{p=A.z1(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eC.prototype={
gai(){return A.yN(this)},
gaR(){return A.yO(this)},
a7(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eC)if(this.a===b.a)s=this.b===b.b
return s},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)},
H(a,b){var s
t.f7.a(b)
s=B.d.H(this.a,b.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
q(a){var s=this,r=A.BY(A.D2(s)),q=A.jL(A.D0(s)),p=A.jL(A.yN(s)),o=A.jL(A.yO(s)),n=A.jL(A.D_(s)),m=A.jL(A.D1(s)),l=A.yg(A.CZ(s)),k=s.b,j=k===0?"":A.yg(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dX.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.dX&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
H(a,b){return B.d.H(this.a,t.yb.a(b).a)},
q(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a8(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a8(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.cM(B.d.q(o%1e6),6,"0")},
$ib4:1}
A.lE.prototype={
q(a){return this.v()},
$iC:1}
A.ao.prototype={
gbN(){return A.CY(this)}}
A.js.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jU(s)
return"Assertion failed"}}
A.dy.prototype={}
A.cr.prototype={
gdh(){return"Invalid argument"+(!this.a?"(s)":"")},
gdg(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.v(p),n=s.gdh()+q+o
if(!s.a)return n
return n+s.gdg()+": "+A.jU(s.gdL())},
gdL(){return this.b}}
A.fQ.prototype={
gdL(){return A.x4(this.b)},
gdh(){return"RangeError"},
gdg(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.v(q):""
else if(q==null)s=": Not greater than or equal to "+A.v(r)
else if(q>r)s=": Not in inclusive range "+A.v(r)+".."+A.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.v(r)
return s}}
A.kc.prototype={
gdL(){return A.f(this.b)},
gdh(){return"RangeError"},
gdg(){if(A.f(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.iq.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.l9.prototype={
q(a){return"UnimplementedError: "+this.a}}
A.fX.prototype={
q(a){return"Bad state: "+this.a}}
A.jG.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jU(s)+"."}}
A.kA.prototype={
q(a){return"Out of Memory"},
gbN(){return null},
$iao:1}
A.ij.prototype={
q(a){return"Stack Overflow"},
gbN(){return null},
$iao:1}
A.tz.prototype={
q(a){return"Exception: "+this.a}}
A.z.prototype={
q(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.I(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.d(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.d(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.b.I(e,i,j)+k+"\n"+B.b.ac(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.v(f)+")"):g}}
A.n.prototype={
cD(a,b){return A.BN(this,A.o(this).i("n.E"),b)},
ca(a,b,c){var s=A.o(this)
return A.ko(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cX(a,b){var s=A.o(this)
return new A.G(this,s.i("l(n.E)").a(b),s.i("G<n.E>"))},
e3(a,b){return new A.dB(this,b.i("dB<0>"))},
p(a,b){var s
for(s=this.gu(this);s.m();)if(J.a8(s.gn(),b))return!0
return!1},
bq(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a4(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Y(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.da(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.da(q.gn())
while(q.m())}else{r=s
do r=r+A.v(b)+J.da(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
L(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bL(a,b){var s=A.H(this,A.o(this).i("n.E"))
return s},
bK(a){return this.bL(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gX(a){return!this.gO(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cw())
return s.gn()},
gbb(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cw())
s=r.gn()
if(r.m())throw A.b(A.yt())
return s},
b_(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cw())},
aj(a,b){return this.b_(0,b,null)},
a2(a,b){var s,r
A.kN(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.pl(b,b-r,this,"index"))},
q(a){return A.CE(this,"(",")")}}
A.N.prototype={
q(a){return"MapEntry("+A.v(this.a)+": "+A.v(this.b)+")"}}
A.ar.prototype={
gP(a){return A.K.prototype.gP.call(this,0)},
q(a){return"null"}}
A.K.prototype={$iK:1,
a7(a,b){return this===b},
gP(a){return A.i7(this)},
q(a){return"Instance of '"+A.kJ(this)+"'"},
ga3(a){return A.xN(this)},
toString(){return this.q(this)}}
A.m6.prototype={
q(a){return""},
$icX:1}
A.rM.prototype={
glw(){var s,r=this.b
if(r==null)r=$.qA.$0()
s=r-this.a
if($.xY()===1e6)return s
return s*1000}}
A.bq.prototype={
gt(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iDn:1}
A.t4.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.p(b)
s=B.b.br(b,"=")
if(s===-1){if(b!=="")a.k(0,A.x0(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.I(b,0,s)
q=B.b.aN(b,s+1)
p=this.a
a.k(0,A.x0(r,0,r.length,p,!0),A.x0(q,0,q.length,p,!0))}return a},
$S:128}
A.t3.prototype={
$2(a,b){throw A.b(A.S("Illegal IPv6 address, "+a,this.a,b))},
$S:158}
A.iW.prototype={
gfk(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.v(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gP(a){var s,r=this,q=r.y
if(q===$){s=B.b.gP(r.gfk())
r.y!==$&&A.xS()
r.y=s
q=s}return q},
gb2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.z9(s==null?"":s)
r.z!==$&&A.xS()
q=r.z=new A.ed(s,t.hL)}return q},
ghp(){return this.b},
gdJ(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ag(s,"v",1))return B.b.I(s,1,s.length-1)
return s},
gdQ(){var s=this.d
return s==null?A.zw(this.a):s},
gdR(){var s=this.f
return s==null?"":s},
gfX(){var s=this.r
return s==null?"":s},
gfZ(){return this.c!=null},
gh0(){return this.f!=null},
gh_(){return this.r!=null},
q(a){return this.gfk()},
a7(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gea())if(p.c!=null===b.gfZ())if(p.b===b.ghp())if(p.gdJ()===b.gdJ())if(p.gdQ()===b.gdQ())if(p.e===b.ghc()){r=p.f
q=r==null
if(!q===b.gh0()){if(q)r=""
if(r===b.gdR()){r=p.r
q=r==null
if(!q===b.gh_()){s=q?"":r
s=s===b.gfX()}}}}return s},
$ilc:1,
gea(){return this.a},
ghc(){return this.e}}
A.t2.prototype={
gho(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cH(s,"?",m)
q=s.length
if(r>=0){p=A.iX(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lA("data","",n,n,A.iX(s,m,q,128,!1,!1),p,n)}return m},
q(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.m0.prototype={
gfZ(){return this.c>0},
gh0(){return this.f<this.r},
gh_(){return this.r<this.a.length},
gea(){var s=this.w
return s==null?this.w=this.iR():s},
iR(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.I(r.a,0,q)},
ghp(){var s=this.c,r=this.b+3
return s>r?B.b.I(this.a,r,s-1):""},
gdJ(){var s=this.c
return s>0?B.b.I(this.a,s,this.d):""},
gdQ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.AN(B.b.I(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
ghc(){return B.b.I(this.a,this.e,this.f)},
gdR(){var s=this.f,r=this.r
return s<r?B.b.I(this.a,s+1,r):""},
gfX(){var s=this.r,r=this.a
return s<r.length?B.b.aN(r,s+1):""},
gb2(){if(this.f>=this.r)return B.d7
return new A.ed(A.z9(this.gdR()),t.hL)},
gP(a){var s=this.x
return s==null?this.x=B.b.gP(this.a):s},
a7(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.q(0)},
q(a){return this.a},
$ilc:1}
A.lA.prototype={}
A.qa.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.wg.prototype={
$1(a){return this.a.dz(this.b.i("0/?").a(a))},
$S:19}
A.wh.prototype={
$1(a){if(a==null)return this.a.fF(new A.qa(a===undefined))
return this.a.fF(a)},
$S:19}
A.vC.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.Ac(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.aX(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fh(!0,"isUtc",t.y)
return new A.eC(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aS(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cE(n),p=s.gu(n);p.m();)m.push(A.hl(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.f(a.length)
for(s=J.aH(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:61}
A.lK.prototype={
aS(a){if(a<=0||a>4294967296)throw A.b(A.yR(u.w+a))
return Math.random()*a>>>0},
aK(){return Math.random()},
$iwK:1}
A.ej.prototype={
bO(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a8(a-s,k)
r=a>>>0
a=B.d.a8(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a8(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a8(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a8(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a8(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a8(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bf()
l.bf()
l.bf()
l.bf()},
bf(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a8(o-n+(q-p)+(m-r),4294967296)>>>0},
aS(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.yR(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bf()
return(p.a&s)>>>0}do{p.bf()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aK(){var s,r=this
r.bf()
s=r.a
r.bf()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwK:1}
A.qD.prototype={
C(){var s,r=this
if(B.a.L(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qE()))throw A.b(B.hv)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fC)}}
A.qE.prototype={
$1(a){return A.f(a)<=0},
$S:46}
A.eP.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e9.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bp(B.lG)
if(q.a!==0)throw A.b(A.al(q,s,"contains unknown pipeline features"))
if(this.a===B.bt&&r.gX(r))throw A.b(A.al(r,s,"safe profiles cannot install optional features"))}}
A.fx.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kH.prototype={}
A.nJ.prototype={
bW(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.j("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.h(A.j("configuration state is not initialized"))
if(p.c!=null)A.h(A.j("a configuration transition is already open"))
a2.C()
n=A.i2(a2)
m=p.d
l=p.b
if(l==null)A.h(A.j("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bp(h)
f=h.bp(j)
j=n.a
h=l.a
e=j.bp(h)
d=h.bp(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nM(m,a2,n,new A.nK(A.eV(g,k),A.eV(f,k),A.eV(e,k),A.eV(d,k),c,b,o.z!==a2.z),B.cc)
p.c=a
s=a
try{r=a1.b.cO(s.c)
q=new A.kH(s,r,B.aV)
a1.c=q
return q}catch(a0){p.fw(s)
throw a0}},
bX(a){var s,r,q,p=this
p.eJ(a)
s=p.a
r=a.a
s.eK(r)
q=s.d
if(r.a!==q)A.h(A.j("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eM
s.c=null
p.b.bX(a.b)
a.c=B.eU
p.c=null},
eJ(a){if(this.c!==a||a.c!==B.aV)throw A.b(A.j("coordinated transition is not open"))}}
A.ft.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nK.prototype={}
A.nM.prototype={}
A.nL.prototype={
fw(a){this.eK(a)
a.e=B.eN
this.c=null},
eK(a){if(this.c!==a||a.e!==B.cc)throw A.b(A.j("configuration transition is not open"))}}
A.kG.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
for(s=l.r,r=l.w,q=l.x,p=A.M(["exposure",l.a,"bloomStrength",l.b,"ssaoStrength",l.c,"depthOfFieldStrength",l.d,"vignette",l.e,"grain",l.f,"rainIntensity",s,"surfaceWetness",r,"rainWindowVisibility",q,"ditherStrength",l.y,"colorGradeStrength",l.z,"affineWarpStrength",l.Q,"vertexSnapGrid",l.as,"vhsChromaWeight",l.ax,"vhsTrackingWeight",l.ay,"vhsNoiseWeight",l.ch,"vhsHeadSwitchWeight",l.CW,"vhsDropoutWeight",l.cx,"vhsGhostWeight",l.cy],t.N,t.i),p=new A.L(p,A.o(p).i("L<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=o.b
if(!isFinite(m)||m<0)throw A.b(A.w("PostProcessState."+n+" must be >= 0: "+A.v(m),k))}p=l.at
if(p<1||p>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+p,k))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.v(s),k))
if(r>1)throw A.b(A.w("PostProcessState.surfaceWetness must be in [0, 1]: "+A.v(r),k))
if(q>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.v(q),k))}}
A.fq.prototype={}
A.k_.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gaw(0)||!k.b.gaw(0)||!k.r.gaw(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.v(s)+"/"+A.v(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.v(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gaw(0)||r.gc8()<1e-12)A.h(A.w("DirectionalLight.direction must be finite and nonzero: "+r.q(0),j))
s=s.c
if(!isFinite(s)||s<0)A.h(A.w("DirectionalLight.intensity must be >= 0: "+A.v(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.h(A.w("PointLight.position must be finite: "+o.q(0),j))
o=p.d
if(!isFinite(o)||o<0)A.h(A.w("PointLight.intensity must be >= 0: "+A.v(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.h(A.w("PointLight.radius must be > 0: "+A.v(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.h(A.w("SpotLight.position must be finite: "+o.q(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.h(A.w("SpotLight.direction must be finite and nonzero: "+o.q(0),j))
if(p.w<=p.r)A.h(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.op.prototype={}
A.dt.prototype={
a7(a,b){if(b==null)return!1
return J.fl(b)===A.xN(this)&&b instanceof A.dt&&this.a===b.a&&this.b===b.b},
gP(a){return A.cT(A.xN(this),this.a,this.b,B.f,B.f,B.f)}}
A.by.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b8.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cz.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kB.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eJ.prototype={
v(){return"HandleRejection."+this.b}}
A.k9.prototype={
q(a){return"HandleException("+this.a.b+", "+this.b.q(0)+")"}}
A.bW.prototype={
gaw(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a7(a,b){if(b==null)return!1
return b instanceof A.bW&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
q(a){return"LinearColor("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.o6.prototype={}
A.kF.prototype={
gE(){return this.a}}
A.bD.prototype={
gE(){return this.a}}
A.wi.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:67}
A.fm.prototype={
v(){return"AlphaMode."+this.b}}
A.hV.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.dp.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: "+A.v(s),k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.kp("roughness",l.at)
A.kp("metallic",0)
A.kp("occlusionStrength",1)
A.kp("clearcoatStrength",0)
A.kp("clearcoatRoughness",0.2)
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.aB("uvScaleU",s),new A.aB("uvScaleV",r),new A.aB("uvOffsetU",0),new A.aB("uvOffsetV",0),new A.aB("tintR",l.d),new A.aB("tintG",l.e),new A.aB("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.v(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d_.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bE.prototype={}
A.t6.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.V[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.q(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.q(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.t7())
for(p=B.a.gu(B.V),q=new A.T(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.t7.prototype={
$1(a){return t.qY.a(a).a===B.dU},
$S:26}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.k8()
r=n.c
if(r!=null){q=s/14|0
for(s=A.CM(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gaw(0)&&s.b.gaw(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
k8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.G(B.V,a2.a(new A.q_()),a3)
if(!a4.gu(0).m())return
s=new A.G(B.V,a2.a(new A.q0()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gbb(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gbb(0).b,n=r.b,m=0;m<q;++m){l=m*14
k=l+o
if(!(k<a3))return A.d(a2,k)
j=a2[k]
i=k+1
if(!(i<a3))return A.d(a2,i)
h=a2[i]
k+=2
if(!(k<a3))return A.d(a2,k)
g=a2[k]
k=l+n
if(!(k<a3))return A.d(a2,k)
f=a2[k]
i=k+1
if(!(i<a3))return A.d(a2,i)
e=a2[i]
i=k+2
if(!(i<a3))return A.d(a2,i)
d=a2[i]
k+=3
if(!(k<a3))return A.d(a2,k)
c=a2[k]
b=j*j+h*h+g*g
a=f*f+e*e+d*d
if(!B.a.a4(A.c([j,h,g,f,e,d,c],p),new A.q1()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.v(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.v(c),a1))}}}
A.q_.prototype={
$1(a){return t.qY.a(a).a===B.dU},
$S:26}
A.q0.prototype={
$1(a){return t.qY.a(a).a===B.dT},
$S:26}
A.q1.prototype={
$1(a){return isFinite(A.bv(a))},
$S:5}
A.jM.prototype={$iDd:1}
A.qc.prototype={
C(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.L(0,new A.qd()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.qd.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.fT.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kI.prototype={}
A.kR.prototype={
h3(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.j("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cO(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a==null)throw A.b(A.j("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.j("resource assembly is already open"))
a.C()
return s.b=new A.kI(s.c,a,B.bA)},
bX(a){var s,r=this
if(r.d)A.h(A.j("resource assembler is disposed"))
r.fb(a)
s=r.c
if(a.a!==s)throw A.b(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.lf
r.b=null},
dY(a){if(this.d)A.h(A.j("resource assembler is disposed"))
this.fb(a)
a.c=B.lg
this.b=null},
a1(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
fb(a){if(this.b!==a||a.c!==B.bA)throw A.b(A.j("resource assembly is not prepared"))}}
A.fz.prototype={
v(){return"DrawMode."+this.b}}
A.jA.prototype={
v(){return"BlendMode."+this.b}}
A.bp.prototype={}
A.l5.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.ht.prototype={
v(){return"ColorEncoding."+this.b}}
A.fy.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.ia.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eR.prototype={
v(){return"RendererState."+this.b}}
A.aI.prototype={}
A.oq.prototype={
hb(a){var s=this.z.h(0,a)
return s==null?B.cp:s},
q(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eL.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cS.prototype={}
A.bX.prototype={}
A.pX.prototype={
cp(a){var s=this.a,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.pY(a)),r.i("G<1>")).gt(0)}}
A.pY.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:79}
A.pV.prototype={
cP(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.u)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.h(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.R(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.AA(k),i=k.$ti,k=new A.c5(k.a(),i.i("c5<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bN(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cP(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.H(new A.am(r,o),o.i("n.E"))
B.a.V(a,new A.pW())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jM(m,k,s))}return new A.pX(A.ah(o,t.wl))},
jM(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.L(b,A.o(b).i("L<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.CK(new A.am(q,q.$ti.i("am<2>")))
A.aW(q,s,r)
return new A.bX(a,p)}}
A.pW.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:80}
A.kq.prototype={
mS(a){return this.a.bB(a)}}
A.pZ.prototype={
$3(a,b,c){return new A.cz(A.f(a),A.f(b),A.aj(c))},
$S:85}
A.lb.prototype={}
A.q2.prototype={
bh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.zf(f,new A.k4(e.byteLength,B.cE,B.hM))
if(f.b!==B.h)A.h(A.j(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d3(f)
A.bt(f,p)
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.V[m]
k=A.Ax(l.a)
if(!o.l(0,k))continue
j=A.EO(n,k,l)
if(f.b!==B.h)A.h(A.j(g))
r.vertexAttribPointer.apply(r,[k,j,A.f(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.h(A.j(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.zf(f,new A.k4(A.yK(i),B.cE,B.cD))
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.DI(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.lb(d,h,p,f,e.length/14|0,!1)},
dW(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.e2(B.aA,a))
this.b.bB(a)
return s},
b8(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b8(a)},
dU(){var s,r,q,p
for(s=this.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bh(p.b))}},
gc9(){return this.b.bF().bq(0,0,new A.q4(),t.S)}}
A.q3.prototype={
$3(a,b,c){return new A.by(A.f(a),A.f(b),A.aj(c))},
$S:88}
A.q4.prototype={
$2(a,b){var s,r
A.f(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yK(s)
return a+r+s},
$S:92}
A.bN.prototype={}
A.dx.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c0.prototype={}
A.rW.prototype={
cw(a){var s=this.a,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.rX(a)),r.i("G<1>")).gt(0)}}
A.rX.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:103}
A.rU.prototype={
cP(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.h(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.h(A.al(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("am<2>")
m=A.H(new A.am(s,r),r.i("n.E"))
B.a.V(m,new A.rV())
r=t.Aj
l=A.a_(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jD(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c0(p,i))}r=l.a
return new A.rW(A.ah(j,t.d),r)},
jD(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.q()
if(s.fm(a,r)===s.d)return B.dN
this.b.k(0,a,!0)
return B.dM}catch(q){if(A.ak(q) instanceof A.k9){s=this.b.h(0,a)===!0?B.dP:B.dO
return s}else throw q}}}
A.rV.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:107}
A.d5.prototype={}
A.l8.prototype={
aW(a){var s=this.a,r=A.wR(s,B.hR)
A.wS(s,r,0,a)
return r},
na(a,b){var s,r,q,p=this,o=p.b,n=o.bB(a),m=A.H(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.e0(a,new A.d5(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wR(p.a,s)
o.k(0,r,q)}A.wS(p.a,q,0,b)},
lI(a){var s,r=this.b,q=r.bB(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.q(0)))
A.zg(this.a,s)
r.e0(a,new A.d5(p,q.b,!0))},
fm(a,b){var s
this.b.bB(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mO(a){var s
if(a==null){s=this.d
s===$&&A.q()
return s}s=this.d
s===$&&A.q()
return this.fm(a,s)},
mW(a){var s=this.e
s===$&&A.q()
return s},
mY(a){var s=this.f
s===$&&A.q()
return s},
mQ(a){var s=this.r
s===$&&A.q()
return s},
mU(a){var s=this.w
s===$&&A.q()
return s},
a1(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>")),q=n.a,p=q.a,o=t.e;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.N(0)
s=n.d
s===$&&A.q()
A.lp(q,s)
s=n.e
s===$&&A.q()
A.lp(q,s)
s=n.f
s===$&&A.q()
A.lp(q,s)
s=n.r
s===$&&A.q()
A.lp(q,s)
s=n.w
s===$&&A.q()
A.lp(q,s)},
dU(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aW($.xX())
i.e=i.aW($.xU())
i.f=i.aW($.xV())
i.r=i.aW($.xT())
i.w=i.aW($.xW())
for(s=i.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a4(o,new A.t_()))continue
l=A.wR(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wS(p,l,k,j)}if(m.c)A.zg(p,l)
q.k(0,n.a,l)}},
gc9(){return this.b.bF().bq(0,0,new A.rZ(),t.S)}}
A.rY.prototype={
$3(a,b,c){return new A.b8(A.f(a),A.f(b),A.aj(c))},
$S:110}
A.t_.prototype={
$1(a){return t.Fx.a(a)==null},
$S:113}
A.rZ.prototype={
$2(a,b){var s
A.f(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:117}
A.dm.prototype={
glT(){return this.b.length}}
A.jY.prototype={
kw(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qH(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].am(s,b)
o=s.kv(a,!1)
if(o.b.length!==0)return new A.jZ(o,B.jg)
q=o.a
n=A.D(q)
m=new A.I(q,n.i("e(1)").a(new A.ok()),n.i("I<1,e>")).b9(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.al(d),j=0;j<1;++j){i=n[j]
if(!m.p(0,i.gF().a))throw A.b(A.j('RenderFeature "'+k.gE()+'" created a pass "'+i.gF().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.V(l,new A.ol(o))
return new A.jZ(o,l)},
bC(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a1()}}
A.ok.prototype={
$1(a){return t.A.a(a).a},
$S:121}
A.ol.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.dK(s,new A.oi(a)),B.a.dK(s,new A.oj(b)))},
$S:124}
A.oi.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.oj.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.jZ.prototype={}
A.eF.prototype={
v(){return"FrameQueueState."+this.b}}
A.k0.prototype={$iD7:1}
A.oo.prototype={
kr(a){if(a.length===0)throw A.b(A.al(a,"passId",null))
this.b=a
this.a.cQ(a,A.AI())},
i1(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aI(p.a,p.b,p.d))}return A.aW(o,t.N,t.pH)},
bw(a,b){var s,r=this.b
if(r==null)throw A.b(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a8(a,3)*b}}
A.h1.prototype={}
A.aw.prototype={
gbI(){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.qg()),r.i("G<1>"))},
gcf(){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.qh()),r.i("G<1>"))},
q(a){return"PassDeclaration("+this.a+" @ "+this.b.q(0)+")"},
gE(){return this.a}}
A.qg.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.j||s===B.G},
$S:17}
A.qh.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:17}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bl.prototype={
q(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ic.prototype={
v(){return"ResourceFormat."+this.b}}
A.cO.prototype={
v(){return"GraphStage."+this.b}}
A.aK.prototype={
h7(){var s=this
return new A.aK(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.aK&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,s.e,s.f)},
q(a){var s=this,r=s.b.q(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fS.prototype={
v(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.hu.prototype={
gE(){return this.a}}
A.kK.prototype={
aA(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.DL(m.a,a.c,r.a(a.d.ga_().bK(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.ih){++m.e
throw q}else throw q}r=a.a
p=new A.hu(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bC(){var s=this.b
this.iZ(new A.am(s,A.o(s).i("am<2>")))
s.N(0)},
iZ(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ag(s,s.r,s.e,a.$ti.i("ag<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bo.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.b(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.b(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.qF.prototype={}
A.b6.prototype={
ae(){var s=this
return A.yj(B.eh,s.f,B.ar,B.aa,!0,!0,!0,!0,s.r,B.av,B.aw,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.qH.prototype={
kv(a,b){var s=this.k7(t.Q.a(a),!1),r=this.a,q=A.D(r)
return new A.qG(A.ah(new A.G(r,q.i("l(1)").a(new A.qM()),q.i("G<1>")),t.A),s)},
k7(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.D(r)
p=q.i("G<1>")
o=A.H(new A.G(r,q.i("l(1)").a(new A.qL()),p),p.i("n.E"))
m.iF(o,a,s)
m.iJ(o,s)
m.iL(o,s)
m.iI(o,!1,s)
n=m.iN(o,s)
m.iK(o,n,s)
m.iM(o,s)
m.iH(o,n,s)
m.iG(o,s)
return s},
iF(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.a2.bp(b)
if(p.a!==0)B.a.l(c,new A.bl(B.i1,q.a,"missing capabilities: "+p.Y(0,", ")))}},
iJ(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bl(B.hX,n,"reads multisampled resource "+m.q(0)+" directly; resolve before sampling"))}}},
iL(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.D(a),r=s.i("l(1)").a(new A.qK()),q=B.a.gu(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbI()
o=A.H(p,p.$ti.i("n.E"))
p=r.gcf()
n=A.H(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bl(B.b0,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbb(o).a
l=B.a.gbb(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bl(B.b0,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bl(B.b0,r.a,"resolve source and destination must match format and extent"))}},
iI(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.bl(B.i_,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iN(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcf(),n=J.O(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bl(B.hW,m,l.q(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iK(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbI(),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bl(B.cJ,o,"reads "+n.q(0)+" but no pass writes that version"))
continue}if(B.a.br(a,m)>s)B.a.l(c,new A.bl(B.cJ,o,"reads "+n.q(0)+" before writer "+m.a+" runs"))}}},
iM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
for(l=q.gcf(),k=J.O(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bl(B.hZ,n,"reads and writes "+m.q(0)+" at the same version; declare a ping-pong version bump"))}}}},
iH(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcf().aj(0,new A.qJ(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bl(B.hY,n,"reads "+l.q(0)+" but writer "+k.a+" produced "+j.q(0)))}}},
iG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcf(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.yu(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbI(),p=J.O(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e6(s,!1,!1,p)
s=a.length
i=A.e6(s,!1,!1,p)
h=new A.qI(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bl(B.i0,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qM.prototype={
$1(a){t.A.a(a)
return A.wI()},
$S:10}
A.qL.prototype={
$1(a){t.A.a(a)
return A.wI()},
$S:10}
A.qK.prototype={
$1(a){return t.A.a(a).f},
$S:10}
A.qJ.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:17}
A.qI.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.d(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.d(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.d(r,a)
r=r[a]
r=A.h0(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:46}
A.qG.prototype={}
A.lJ.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge5(){return this.c}}
A.i9.prototype={
ka(a){var s,r,q,p=a.c
p.C()
s=this.a.bB(a.a)
p=p.aa()
r=s.d.gar()
q=A.D(r)
return A.b1(new A.I(r,q.i("J(1)").a(p.gaC()),q.i("I<1,J>")))},
gh5(){return new A.bR(this.m1(),t.Br)},
m1(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gh5(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bF(),n=o.$ti,o=new A.c5(o.a(),n.i("c5<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a0(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.aa()
f=f.gar()
d=A.D(f)
r=5
return a.b=new A.lJ(h,g,A.b1(new A.I(f,d.i("J(1)").a(i.gaC()),d.i("I<1,J>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iDa:1}
A.qN.prototype={
$3(a,b,c){return new A.cu(A.f(a),A.f(b),A.aj(c))},
$S:133}
A.qR.prototype={
gfl(){var s=this.d
return s===$?this.d=new A.rU(this.c,A.m(t.Aj,t.y)):s},
hj(a,b){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
s=this.a
a.C()
r=s.b.aE(a,b)
s.c.k(0,r.a,s.bh(a))
this.f.l(0,r)
return r},
mH(a){if(this.x)A.h(A.j("resource library is disposed"))
this.a.b8(a)
this.f.a5(0,a)},
dT(a,b,c,d,e,f){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aE(new A.d5(new A.k6(f,d,1,!0,e,B.aZ,B.cG,a),A.e6(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a1(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.H(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.e
l=0
for(;l<r.length;r.length===q||(0,A.u)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b8(k)}r=i.r
q=A.H(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.b8(q[l])
q=i.f
o=A.H(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.b8(o[l])
s.N(0)
r.N(0)
q.N(0)
p.a1()
i.x=!0}}
A.tA.prototype={}
A.m7.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge5(){return this.c}}
A.v0.prototype={
$1(a){var s=this.a.w.a.dW(a),r=s.b!=null,q=r?s.d:s.e
return new A.ib(s.c,r,q,s.f)},
$S:141}
A.v1.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().h8(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().h8(b)
throw A.b(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:148}
A.v_.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uT.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:161}
A.uU.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.be
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.H0(s,3,q.a.d,r)},
$S:165}
A.uZ.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uO.prototype={
$0(){return this.a.at.a},
$S:167}
A.uQ.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uP.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uY.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uM.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uN.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uV.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uW.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uX.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.q()
return s},
$S:4}
A.uS.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uR.prototype={
$0(){return this.a.at.w},
$S:178}
A.v3.prototype={
$0(){return this.a},
$S:49}
A.u7.prototype={}
A.lU.prototype={$iD9:1}
A.lG.prototype={$iCk:1}
A.qW.prototype={
gb3(){var s=this.w
return s==null?A.h(A.j("renderer is not initialized")):s},
h4(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.by)throw A.b(A.j("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.T)throw A.b(A.j("renderer device is context lost"))
m.e=B.le
try{m.r=s.hh()
r=m.b
q=A.i2(a)
p=r.a
if(p.a!=null)A.h(A.j("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i2(a)
p.d=1
r.b.h3(q)
r=A.CL()
m.w=new A.qR(A.CN(s),r,A.Dp(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kR()
p=new A.oN(s,r)
q=A.i2(a)
o=p.dc(q,a)
r.h3(q)
p.c=new A.fO(new A.kI(0,q,B.bA),o,B.ag)
m.x=p
m.y=new A.kK(s,A.m(t.N,t.CH))
m.as=a
A.zY(m)
m.e=B.bz}catch(n){s=m.y
if(s!=null)s.bC()
s=m.x
if(s!=null)s.a1()
s=m.w
if(s!=null)s.a1()
m.w=null
m.e=B.by
throw n}return A.ym(t.H)},
kp(a,b){var s,r,q,p,o,n,m=this,l=null
m.jH()
m.bQ()
r=B.a.p(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.j("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gaw(0))A.h(A.w("CameraView.eye must be finite: "+q.q(0),l))
q=r.e
if(!q.gaw(0)||q.gc8()<1e-12)A.h(A.w("CameraView.forward must be finite and nonzero: "+q.q(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.h(A.w("CameraView requires 0 < near < far, got "+A.v(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.h(A.w("CameraView.aspect must be finite and > 0: "+A.v(q),l))
if(!r.a.gaw(0)||!r.b.gaw(0)||!r.c.gaw(0))A.h(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.h(A.w("FrameInput.timeSeconds must be finite: "+A.v(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.af)A.h(A.j("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.af
o.c=0
B.a.N(o.a)
s=o
try{r=m.r
if((r==null?A.h(A.j("renderer is not initialized")):r).z)m.b$=m.a.kq()
return s}catch(n){if(o.b!==B.af)A.h(A.j("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hA
m.er()
m.ax=m.at=null
throw n}},
lz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.af)A.h(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.l4(l,0,A.fh(m.c,"count",t.S),A.D(l).c).bL(0,!1)
m.b=B.hz
q=k
try{p=A.F_(a1,r,s,q)
o=p.a.i1()
m=o.gJ().cX(0,new A.qX())
l=m.$ti
n=new A.cy(m,l.i("aI(1)").a(new A.qY()),l.i("cy<1,aI>")).bq(0,B.cp,new A.qZ(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gc9()
g=g.c.gc9()
e=a1.w
e.a.gc9()
e.c.gc9()
e=a1.w
d=e.a.b
c=d.d
b=e.b.a
a=b.d
e=e.c.b
a0=e.d
d=d.e
b=b.e
e=e.e
return new A.oq(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.j7(s.e)
a1.ax=a1.at=null}},
jH(){var s,r,q,p=this
if(p.e!==B.dz)return
if(p.a.b===B.T)throw A.b(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.h(A.j("resource library is disposed"))
s.a.dU()
s.c.dU()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.h(A.j("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.h(A.j("GPU resource adapter is not initialized"))
s.c=new A.fO(q.a,s.dc(A.i2(r),r),B.ag)
s=p.y
s.c=null
s.b.N(0)
A.zY(p)
p.e=B.bz},
bQ(){var s=this,r=s.e
if(r!==B.bz)throw A.b(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.T){s.j_()
s.e=B.dz
throw A.b(A.j("renderer context lost"))}}}
A.qX.prototype={
$1(a){return B.b.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qY.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qZ.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aI(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lR.prototype={}
A.tM.prototype={
j7(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.h(A.j(u.k))
r=s.fo(o)
if(r.b)A.h(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lR(o))}catch(q){p.de(o)}},
er(){var s=this.b$
this.b$=null
if(s!=null)this.de(s)},
j_(){var s,r,q
this.er()
s=this.a$
r=J.yx(s.slice(0),A.D(s).c)
B.a.N(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.de(r[q].b)},
de(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fo(a).a)}catch(r){}}}
A.lY.prototype={}
A.ii.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bK.prototype={
H(a,b){var s,r=this
t.BB.a(b)
s=B.d.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.H(r.c.a,b.c.a)
if(s!==0)return s
return B.d.H(r.d,b.d)},
$ib4:1}
A.bI.prototype={
H(a,b){var s
t.z3.a(b)
s=B.c.H(b.a,this.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
$ib4:1}
A.aP.prototype={}
A.wm.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:53}
A.wn.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.wk.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:55}
A.wl.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.o1.prototype={}
A.o0.prototype={}
A.jo.prototype={
gar(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.J(o,n,p),new A.J(r,n,p),new A.J(o,q,p),new A.J(r,q,p),new A.J(o,n,s),new A.J(r,n,s),new A.J(o,q,s),new A.J(r,q,s)],t.k)},
q(a){return"Aabb("+this.a.q(0)+", "+this.b.q(0)+")"}}
A.eN.prototype={}
A.fC.prototype={
v(){return"FrustumTest."+this.b}}
A.or.prototype={
n4(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a,r=a1.b,q=r.c,p=r.b,r=r.a,o=a1.a,n=o.c,m=o.b,o=o.a,l=!1,k=0;k<6;++k){j=s[k]
i=j.a
h=i.a
g=h>=0
f=g?r:o
e=i.b
d=e>=0
c=d?p:m
i=i.c
b=i>=0
a=b?q:n
a0=j.b
if(h*f+e*c+i*a+a0<0)return B.cq
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hB:B.hC}}
A.os.prototype={
$4(a,b,c,d){var s=new A.J(a,b,c),r=new A.eN(s,d),q=Math.sqrt(s.gc8())
return q<1e-9?r:new A.eN(s.ac(0,1/q),d/q)},
$S:57}
A.dn.prototype={
ac(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dn(h)},
hm(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.d(r,0)
p=r[0]
o=a.b
if(4>=q)return A.d(r,4)
n=r[4]
m=a.c
if(8>=q)return A.d(r,8)
l=r[8]
if(12>=q)return A.d(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.d(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.d(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.d(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.J(k,j,i):new A.J(k/h,j/h,i/h)},
dO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.d(e,0)
s=e[0]
if(5>=d)return A.d(e,5)
r=e[5]
if(10>=d)return A.d(e,10)
d=e[10]
q=e[9]
p=e[6]
o=r*d-q*p
n=e[4]
m=e[1]
l=e[2]
k=s*o-n*(m*d-q*l)+e[8]*(m*p-r*l)
if(!isFinite(k)||Math.abs(k)<1e-12)A.h(A.j("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.v(k)+")"))
j=1/k
i=new Float32Array(16)
i[0]=o*j
i[1]=(e[8]*e[6]-e[4]*e[10])*j
i[2]=(e[4]*e[9]-e[8]*e[5])*j
i[4]=(e[9]*e[2]-e[1]*e[10])*j
i[5]=(e[0]*e[10]-e[8]*e[2])*j
i[6]=(e[8]*e[1]-e[0]*e[9])*j
i[8]=(e[1]*e[6]-e[5]*e[2])*j
i[9]=(e[4]*e[2]-e[0]*e[6])*j
i[10]=(e[0]*e[5]-e[4]*e[1])*j
i[15]=1
h=new Float32Array(16)
for(g=0;g<3;++g)for(e=g*4,f=0;f<3;++f){d=e+f
s=f*4+g
if(!(s<16))return A.d(i,s)
s=i[s]
if(!(d<16))return A.d(h,d)
h[d]=s}if(15>=16)return A.d(h,15)
h[15]=1
return new A.dn(h)},
gaw(a){return B.t.a4(this.a,new A.pT())},
q(a){return"Mat4("+A.v(this.a)+")"}}
A.pT.prototype={
$1(a){return isFinite(A.bv(a))},
$S:5}
A.kM.prototype={
q(a){var s=this
return"Quat("+A.v(s.a)+", "+A.v(s.b)+", "+A.v(s.c)+", "+A.v(s.d)+")"}}
A.io.prototype={
C(){var s=this.a
if(!s.gaw(0))throw A.b(A.w("Transform.translation must be finite: "+s.q(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.q(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.w("Transform.scale must be finite and positive: "+s,null))},
aa(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.yH(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
e=h.length
if(0>=e)return A.d(h,0)
g=h[0]
p=this.c
if(1>=e)return A.d(h,1)
o=h[1]
if(2>=e)return A.d(h,2)
n=h[2]
if(4>=e)return A.d(h,4)
m=h[4]
if(5>=e)return A.d(h,5)
l=h[5]
if(6>=e)return A.d(h,6)
k=h[6]
if(8>=e)return A.d(h,8)
j=h[8]
if(9>=e)return A.d(h,9)
i=h[9]
if(10>=e)return A.d(h,10)
e=this.a
return A.yH(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
q(a){return"Transform("+this.a.q(0)+", "+this.b.q(0)+", scale="+this.c+")"}}
A.J.prototype={
a6(a,b){return new A.J(this.a+b.a,this.b+b.b,this.c+b.c)},
ac(a,b){return new A.J(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.J(s*r-q*p,q*o-n*r,n*p-s*o)},
gc8(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc8())},
gaw(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaz(){var s=this,r=Math.sqrt(s.gc8())
return r<1e-9?B.a5:new A.J(s.a/r,s.b/r,s.c/r)},
a7(a,b){if(b==null)return!1
return b instanceof A.J&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
q(a){return"Vec3("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.ju.prototype={
v(){return"AtmosphericParticleAnchor."+this.b}}
A.mW.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
if(m.a.a<0||m.b.a<0)throw A.b(A.w("AtmosphericParticleField requires live resources",l))
for(s=m.e,r=[new A.aB("origin",m.d),new A.aB("halfExtents",s),new A.aB("initialVelocity",m.f),new A.aB("acceleration",m.r)],q=0;q<4;++q){p=r[q]
o=p.a
n=p.b
if(!(isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)))throw A.b(A.w("AtmosphericParticleField."+o+" must be finite",l))}if(s.a<0||s.b<0||s.c<0)throw A.b(A.w("AtmosphericParticleField.halfExtents must be >= 0",l))
s=m.w
if(!isFinite(s)||s<=0)throw A.b(A.w("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",l))
if(m.x<0)throw A.b(A.w("AtmosphericParticleField.particleCount must be >= 0",l))
if(!isFinite(1))throw A.b(A.w("AtmosphericParticleField.particleScale must be finite and > 0",l))},
hA(a,b){var s,r,q,p,o=this
o.C()
s=o.x
if(b>=s)throw A.b(A.aX(b,0,s-1,"particleIndex",null))
r=o.w
q=B.c.S(a.w+o.cA(b,0)*r,r)
switch(o.c.a){case 0:s=B.a5
break
case 1:s=a.a.d
break
default:s=null}p=o.e
return new A.io(s.a6(0,o.d).a6(0,new A.J((o.cA(b,1)*2-1)*p.a,(o.cA(b,2)*2-1)*p.b,(o.cA(b,3)*2-1)*p.c)).a6(0,o.f.ac(0,q).a6(0,o.r.ac(0,0.5*q*q))),B.du,1)},
i5(a,b){var s,r,q,p,o,n,m,l,k=this
k.C()
for(s=k.x,r=a.a,q=k.a,p=k.b,o=k.ch,n=0;n<s;++n){m=k.hA(b,n)
l=new A.bp(q,p,m,-1,B.ay,B.Q,!1,!1,n,o)
if(a.b!==B.af)A.h(A.j("FrameQueue.submit called outside an active frame"))
m.C()
m=a.c
if(m<r.length)B.a.k(r,m,l)
else B.a.l(r,l);++a.c}return s},
cA(a,b){return(((this.y^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.ix.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hr.prototype={
gE(){return this.f},
am(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.x,B.j),new A.P(this.y,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aA(new A.bo(s.e,s.b,s.c,B.y,B.d4,B.d1)),q=A.d3(s.d),p=t.n,o=s.r===B.dZ?new Float32Array(A.a1(A.c([1/s.Q,0],p))):new Float32Array(A.a1(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lx(new A.b6(s.f,A.c([new A.P(s.x,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a1(){},
$ian:1}
A.lx.prototype={
ao(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bP(r,a.ak(o.r).b)
A.ba(r,o.a.ae())
A.d2(r,B.R,1,0,0,0)
A.c4(r,o.b.b)
q=t._
p=o.d
if(o.e)A.DG(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.t(r,"uSource",B.w)
A.t(r,"uTexelStep",new A.x(B.al,o.f))
A.bt(r,o.c)
s.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.jB.prototype={
gE(){return"bloomComposite"},
am(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.I,A.c([new A.P(this.f,B.j),new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="bloomComposite",q=s.a.aA(new A.bo(r,s.b,s.c,B.y,B.jN,B.ju)),p=A.d3(s.d),o=s.w,n=A.c([new A.P(s.f,B.j),new A.P(s.r,B.j),new A.P(o,B.k)],t.C)
return A.c([new A.ly(new A.b6(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a1(){},
$ian:1}
A.ly.prototype={
ao(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bP(r,a.cW(q.f).b)
A.DH(r,1)
A.ba(r,B.eZ)
A.c4(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.t(r,"uBloom",B.w)
A.t(r,"uBloomStrength",new A.x(B.e,p))
A.bt(r,q.c)
s.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.jO.prototype={
gE(){return"depthPrepass"},
am(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hT,A.c([new A.P(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="depthPrepass",q=s.a.aA(new A.bo(r,s.b,s.c,B.d3,B.d2,B.iX))
return A.c([new A.lB(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a1(){},
$ian:1}
A.lB.prototype={
ao(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bP(a1,a2.ak("sceneDepth").b)
A.ba(a1,d.a.ae())
A.d2(a1,B.aT,1,0,0,0)
A.c4(a1,d.b.b)
A.t(a1,"uVertexSnapGrid",new A.x(B.e,a0.as))
A.t(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.Q,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gF()
A.t(a1,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(a))))
A.t(a1,"uModel",new A.x(B.v,new Float32Array(A.a1(i.c.aa().a))))
A.wj(b,k,!1)
d.jR(b,j.gF().b,p)
h=q.$1(j.gF().a)
i=h.a
if(a1.b!==B.h)A.h(A.j(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.h(A.j(c))
e=A.f(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.f(o.WebGL2RenderingContext.UNSIGNED_INT):A.f(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bw(g,f)}else{if(a1.b!==B.h)A.h(A.j(c))
m.drawArraysInstanced(A.f(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bw(g,f)}}},
jR(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,r.fx===B.aN?0.5:0))
A.t(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ae()
A.ba(q,r.go?s.e4(!1):s)},
$iaa:1,
gF(){return this.a}}
A.iz.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hy.prototype={
gE(){return this.f},
am(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.w,B.j),new A.P(this.x,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aA(new A.bo(s.e,s.b,s.c,B.y,B.d4,B.d1)),q=A.d3(s.d),p=t.n,o=s.r===B.e_?new Float32Array(A.a1(A.c([1/s.z,0],p))):new Float32Array(A.a1(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.lC(new A.b6(s.f,A.c([new A.P(s.w,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a1(){},
$ian:1}
A.lC.prototype={
ao(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bP(r,a.ak(q.f).b)
A.ba(r,q.a.ae())
A.d2(r,B.R,1,0,0,0)
A.c4(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.t(r,"uSource",B.w)
A.t(r,"uTexelStep",new A.x(B.al,q.e))
A.bt(r,q.c)
s.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.jR.prototype={
gE(){return"dofComposite"},
am(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.I,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1))},
al(a){var s=this,r="dofComposite",q=s.a.aA(new A.bo(r,s.b,s.c,B.y,B.jL,B.iM)),p=A.d3(s.d)
return A.c([new A.lD(new A.b6(r,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a1(){},
$ian:1}
A.lD.prototype={
ao(a){var s,r=this,q=a.ak("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bP(n,q.b)
A.ba(n,r.a.ae())
A.c4(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.t(n,"uSharp",B.w)
A.aE(n,1,s.a(r.e.$0()))
A.t(n,"uBlurred",B.am)
A.aE(n,2,s.a(r.f.$0()))
A.t(n,"uSceneDepth",B.dS)
A.t(n,"uNear",new A.x(B.e,o.f))
A.t(n,"uFar",new A.x(B.e,o.r))
A.t(n,"uFocusDistance",new A.x(B.e,r.w))
A.t(n,"uFocusRange",new A.x(B.e,r.x))
A.t(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bt(n,r.c)
p.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.k8.prototype={
gE(){return"grade"},
am(a,b){B.a.l(a.a,new A.aw("grade",B.I,A.c([new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aA(new A.bo("grade",s.b,s.c,B.y,B.jJ,B.jv)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.lI(new A.b6("grade",A.c([new A.P(p,B.j),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a1(){},
$ian:1}
A.lI.prototype={
ao(a){var s=this,r=a.ak(s.f.a),q=a.b,p=q.a
A.bP(p,a.ak(s.r.a).b)
A.ba(p,s.a.ae())
A.c4(p,s.b.b)
A.aE(p,0,r.b)
A.t(p,"uScene",B.w)
A.aE(p,1,t._.a(s.d.$0()))
A.t(p,"uLut",B.am)
A.t(p,"uLutSize",new A.x(B.e,s.e))
A.t(p,"uStrength",new A.x(B.e,a.c.e.z))
A.bt(p,s.c)
q.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.hW.prototype={
gE(){return"msaaResolve"},
am(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hU,A.c([new A.P(this.b,B.j),new A.P(this.c,B.k)],t.C),!0))},
al(a){var s=this.b,r=this.c
return A.c([new A.lP(new A.b6("msaaResolve",A.c([new A.P(s,B.j),new A.P(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a1(){},
$ian:1}
A.lP.prototype={
ao(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cW(this.c),j=a.cW(this.d),i=this.b
if(i.b!==B.h)A.h(A.j(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.h(A.w("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.h(A.w("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.h(A.w("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.NONE)],t.n))}A.aM(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.NONE),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aM(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aM(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.f(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iaa:1,
gF(){return this.a}}
A.fo.prototype={}
A.jC.prototype={
ak(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cW(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ak(s)},
$iD8:1}
A.wJ.prototype={}
A.i5.prototype={
gE(){return"present"},
am(a,b){B.a.l(a.a,new A.aw("present",B.hV,A.c([new A.P(this.f,B.j)],t.C),!1))},
al(a){var s,r=this,q=r.a.aA(new A.bo("present",r.b,r.c,B.y,B.jU,B.j1)),p=A.d3(r.d)
r.w=p
s=r.f
return A.c([new A.lV(new A.b6("present",A.c([new A.P(s,B.j)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a1(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$ian:1}
A.lV.prototype={
ao(a){var s,r=this,q=a.cW(r.d),p=a.b,o=p.a
A.bP(o,null)
A.ba(o,r.a.ae())
A.c4(o,r.b.b)
A.bt(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.t(o,"uExposure",new A.x(B.e,s.a))
A.t(o,"uVignette",new A.x(B.e,s.e))
A.t(o,"uGrain",new A.x(B.e,s.f))
A.t(o,"uRainIntensity",new A.x(B.e,s.r))
A.t(o,"uRainWindowVisibility",new A.x(B.e,s.x))
A.t(o,"uOutputEncoding",new A.x(B.e,r.e===B.aU?1:0))
A.t(o,"uToneMap",B.dR)
p.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.kL.prototype={
gE(){return"ps1Quantize"},
am(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.I,A.c([new A.P(this.e,B.j),new A.P(this.f,B.k)],t.C),!1))},
al(a){var s=this,r="ps1Quantize",q=s.a.aA(new A.bo(r,s.b,s.c,B.y,B.jP,B.iF)),p=A.d3(s.d),o=s.e,n=s.f
return A.c([new A.lW(new A.b6(r,A.c([new A.P(o,B.j),new A.P(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a1(){},
$ian:1}
A.lW.prototype={
ao(a){var s=this,r=a.ak(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bP(o,a.ak(s.e.a).b)
A.ba(o,s.a.ae())
A.c4(o,s.b.b)
A.aE(o,0,r.b)
A.t(o,"uScene",B.w)
A.t(o,"uQuantizationBits",new A.x(B.e,p.at))
A.t(o,"uDitherStrength",new A.x(B.e,p.y))
A.bt(o,s.c)
q.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.eX.prototype={}
A.kZ.prototype={
gE(){return"shadow"},
am(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hS,A.c([new A.P(this.z,B.k)],t.C),!1))},
al(a){var s=this,r="shadowCaster",q=s.a.aA(new A.bo(r,s.b,s.c,B.d3,B.d2,B.jt))
return A.c([new A.lZ(new A.b6(r,A.c([new A.P(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a1(){},
$ian:1}
A.lZ.prototype={
ao(a){var s,r,q,p,o=this,n=a.ak("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ae())
A.d2(s,B.aT,1,0,0,0)
return}r=A.z0(l)
o.x.$1(r)
s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ae())
A.d2(s,B.aT,1,0,0,0)
A.c4(s,o.b.b)
A.t(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.j0(m,s[p],l,r)},
fg(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,r.fx===B.aN?0.5:0))
s=this.a.ae()
A.ba(q,r.go?s.e4(!1):s)},
j0(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.t(s,"uUseInstances",B.bN)
n.fd(a,b.gF().c,d)
n.fg(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.bt(s,q.a)
s=q.b
r=q.c
if(s)a.dF(r,q.d,0)
else a.aF(r,0)}else if(b instanceof A.dm){p=b.a
if(!p.gF().r)return
if(n.k0(b,c)===B.m0)return
n.fd(a,p.gF().c,d)
A.wj(a,b,!1)
n.fg(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.bt(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dG(r,q.d,o,0)
else a.dE(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
k0(a,b){return B.m_},
fd(a,b,c){var s=a.a
A.t(s,"uModel",new A.x(B.v,new Float32Array(A.a1(b.aa().a))))
A.t(s,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a1(c.a.a))))},
$iaa:1,
gF(){return this.a}}
A.vz.prototype={
$1(a){return this.a.a=a},
$S:59}
A.vA.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.l_.prototype={
gE(){return"shadowedWorld"},
am(a,b){var s=this,r=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)r.push(new A.P(s.dx,B.j))
r.push(new A.P(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cI,r,!1))},
al(a){var s=this,r="shadowedWorld",q=s.a.aA(new A.bo(r,s.b,s.c,B.jR,B.jK,B.iB)),p=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)p.push(new A.P(s.dx,B.j))
p.push(new A.P(s.dy,B.k))
return A.c([new A.m_(new A.b6(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a1(){},
$ian:1}
A.m_.prototype={
ao(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ak("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bP(b1,a4.b)
A.ba(b1,a2.a.ae())
s=a8.a
A.d2(b1,B.cb,1,s.c,s.b,s.a)
A.c4(b1,a2.b.b)
A.t(b1,"uAlbedo",B.w)
A.t(b1,"uNormalMap",B.mm)
A.t(b1,"uOrmMap",B.mn)
A.t(b1,"uEmissiveMap",B.mo)
A.t(b1,"uLightmap",B.mp)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.t(b1,"uShadowMap",B.am)
r=a7.d
q=t.n
A.t(b1,"uCameraPosition",new A.x(B.o,new Float32Array(A.a1(A.c([r.a,r.b,r.c],q)))))
A.t(b1,"uShadowMapTexelSize",new A.x(B.al,new Float32Array(A.a1(A.c([1/a2.ch,1/a2.CW],q)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.t(b1,"uSsao",B.dS)
A.t(b1,"uVertexSnapGrid",new A.x(B.e,a9.as))
A.t(b1,"uSceneColorSize",new A.x(B.al,new Float32Array(A.a1(A.c([a2.ax,a2.ay],q)))))
A.t(b1,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(a7.c.a))))
A.t(b1,"uView",new A.x(B.v,new Float32Array(A.a1(a7.a.a))))
A.t(b1,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.t(b1,"uFogColor",new A.x(B.o,new Float32Array(A.a1(A.c([s.a,s.b,s.c],q)))))
A.t(b1,"uFogStart",new A.x(B.e,a8.c))
A.t(b1,"uFogEnd",new A.x(B.e,a8.d))
s=a8.e
A.t(b1,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=a8.f
A.t(b1,"uFogDensity",new A.x(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.O(r==null?B.be:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.a6
k=o?a3:p.c
if(k==null)k=B.bP
A.t(b1,"uLightPosition",new A.x(B.o,new Float32Array(A.a1(A.c([l.a,l.b,l.c],q)))))
A.t(b1,"uLightDirection",new A.x(B.o,new Float32Array(A.a1(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.U
A.t(b1,"uLightColor",new A.x(B.o,new Float32Array(A.a1(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.t(b1,"uLightIntensity",new A.x(B.e,r==null?0:r))
A.t(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.a6
g=r?a3:i.b
if(g==null)g=B.U
A.t(b1,"uDirectionalDirection",new A.x(B.o,new Float32Array(A.a1(A.c([h.a,h.b,h.c],q)))))
A.t(b1,"uDirectionalColor",new A.x(B.o,new Float32Array(A.a1(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.t(b1,"uDirectionalIntensity",new A.x(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.a5
c=n?a3:e.c
if(c==null)c=B.U
m=""+f
A.t(b1,"uPointPosition"+m,new A.x(B.o,new Float32Array(A.a1(A.c([d.a,d.b,d.c],q)))))
A.t(b1,"uPointColor"+m,new A.x(B.o,new Float32Array(A.a1(A.c([c.a,c.b,c.c],q)))))
b=n?a3:e.d
if(b==null)b=0
A.t(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.t(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a3
r=e==null
d=r?a3:e.b
if(d==null)d=B.a5
a=r?a3:e.c
if(a==null)a=B.bP
c=r?a3:e.d
if(c==null)c=B.U
n=""+f
A.t(b1,"uDirectSpotPosition"+n,new A.x(B.o,new Float32Array(A.a1(A.c([d.a,d.b,d.c],q)))))
A.t(b1,"uDirectSpotDirection"+n,new A.x(B.o,new Float32Array(A.a1(A.c([a.a,a.b,a.c],q)))))
A.t(b1,"uDirectSpotColor"+n,new A.x(B.o,new Float32Array(A.a1(A.c([c.a,c.b,c.c],q)))))
m=r?a3:e.e
if(m==null)m=0
A.t(b1,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=r?a3:e.f
if(m==null)m=1
A.t(b1,"uDirectSpotRange"+n,new A.x(B.e,m))
m=r?a3:e.r
if(m==null)m=0.3
A.t(b1,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=r?a3:e.w
if(m==null)m=0.5
A.t(b1,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
r=r?0:1
A.t(b1,"uDirectSpotEnabled"+n,new A.x(B.e,r))}s=o?a3:p.f
A.t(b1,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a3:p.r
if(s==null)s=0.3
A.t(b1,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a3:p.w
if(s==null)s=0.5
A.t(b1,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=a8.r
A.t(b1,"uAmbientColor",new A.x(B.o,new Float32Array(A.a1(A.c([a0.a,a0.b,a0.c],q)))))
A.t(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
A.t(b1,"uRainWetness",new A.x(B.e,a9.w))
for(b1=a6.a,s=b1.length,r=a9.Q,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.eP(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.eP(a5,a6[a1],r)},
eP(a,b,c){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.t(s,"uUseInstances",B.bN)
n.fe(a,b.gF().c)
n.fh(a,b.gF().b,b.gF().e,b.gF().f,c,b.gF().w)
r=n.c.$1(b.gF().a)
A.bt(s,r.a)
s=r.b
q=r.c
if(s)a.dF(q,r.d,0)
else a.aF(q,0)}else if(b instanceof A.dm){p=b.a
n.fe(a,p.gF().c)
A.wj(a,b,!0)
n.fh(a,p.gF().b,p.gF().e,p.gF().f,c,p.gF().w)
r=n.c.$1(p.gF().a)
A.bt(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.dG(q,r.d,o,0)
else a.dE(q,0,o)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
fh(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aE(o,0,p.a(s.e.$1(q.b)))
A.aE(o,3,p.a(s.f.$1(r)))
A.aE(o,4,p.a(s.r.$1(r)))
A.aE(o,5,p.a(s.w.$1(r)))
A.aE(o,6,p.a(s.x.$1(r)))
A.t(o,"uAlphaCutoff",new A.x(B.e,q.fx===B.aN?0.5:0))
A.t(o,"uOpaqueCoverage",new A.x(B.e,c===B.ay?0:1))
A.t(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.t(o,"uMaterialTint",new A.x(B.o,new Float32Array(A.a1(A.c([q.d,q.e,q.f],p)))))
A.t(o,"uEmissiveStrength",new A.x(B.e,q.w))
A.t(o,"uUvScaleOffset",new A.x(B.ml,new Float32Array(A.a1(A.c([q.db,q.dx,0,0],p)))))
A.t(o,"uNormalStrength",new A.x(B.e,1))
A.t(o,"uRoughness",new A.x(B.e,q.at))
A.t(o,"uMetallic",new A.x(B.e,0))
A.t(o,"uClearcoatStrength",new A.x(B.e,0))
A.t(o,"uClearcoatRoughness",new A.x(B.e,0.2))
A.t(o,"uOcclusionStrength",new A.x(B.e,1))
A.t(o,"uLightmapIntensity",new A.x(B.e,0))
A.t(o,"uReceivesShadow",new A.x(B.e,q.id&&f?1:0))
A:{p=r
if(B.ay===c){switch(d.a){case 0:p=B.f0
break
case 1:p=B.f_
break}break A}if(B.S===c||B.eY===c){p=s.a.ae()
break A}}A.ba(o,q.go?p.e4(!1):p)},
fe(a,b){var s=b.aa(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a1(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a1(s.dO().a))))},
$iaa:1,
gF(){return this.a}}
A.l1.prototype={
gE(){return"ssaoOcclusion"},
am(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cH,A.c([new A.P(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="ssaoOcclusion",q=s.a.aA(new A.bo(r,s.b,s.c,B.y,B.jO,B.iC)),p=A.d3(s.d)
return A.c([new A.m2(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a1(){},
$ian:1}
A.m2.prototype={
ao(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bP(m,a.ak("ssaoRaw").b)
A.ba(m,p.a.ae())
if(n<=0){A.d2(m,B.R,1,1,1,1)
return}A.d2(m,B.R,1,0,0,0)
s=p.e.$0()
A.c4(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.t(m,"uSceneDepth",B.w)
A.t(m,"uNear",new A.x(B.e,s.f))
A.t(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.t(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.t(m,"uProjScaleY",new A.x(B.e,r[5]))
A.t(m,"uRadius",new A.x(B.e,p.f))
A.t(m,"uStrength",new A.x(B.e,n))
A.bt(m,p.c)
o.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.l0.prototype={
gE(){return"ssaoBlur"},
am(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cH,A.c([new A.P(this.y,B.j),new A.P(this.z,B.k)],t.C),!1))},
al(a){var s=this,r="ssaoBlur",q=s.a.aA(new A.bo(r,s.b,s.c,B.y,B.jE,B.jx)),p=A.d3(s.d)
return A.c([new A.m1(new A.b6(r,A.c([new A.P(s.y,B.j),new A.P(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a1(){},
$ian:1}
A.m1.prototype={
ao(a){var s,r,q=this,p=a.b,o=p.a
A.bP(o,a.ak("ssaoBlurred").b)
A.ba(o,q.a.ae())
if(a.c.e.c<=0){A.d2(o,B.R,1,1,1,1)
return}A.d2(o,B.R,1,0,0,0)
s=q.f.$0()
A.c4(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.t(o,"uSsaoRaw",B.w)
A.aE(o,1,r.a(q.e.$0()))
A.t(o,"uSceneDepth",B.am)
A.t(o,"uTexelSize",new A.x(B.al,new Float32Array(A.a1(A.c([1/q.r,1/q.w],t.n)))))
A.t(o,"uNear",new A.x(B.e,s.f))
A.t(o,"uFar",new A.x(B.e,s.r))
A.bt(o,q.c)
p.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.lf.prototype={
gE(){return"vhs"},
am(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.I,A.c([new A.P(this.r,B.j),new A.P(s,B.G),new A.P(s,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aA(new A.bo("vhs",s.b,s.c,B.y,B.jH,B.iH)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.ma(new A.b6("vhs",A.c([new A.P(p,B.j),new A.P(o,B.G),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a1(){},
$ian:1}
A.ma.prototype={
ao(a){var s,r=this,q=a.ak(r.f.a),p=a.ak(r.r.a),o=a.b,n=a.c.e,m=n.db,l=n.ay
if(m)l*=0.5
s=m?0:n.cy
m=o.a
A.bP(m,p.b)
A.ba(m,r.a.ae())
A.c4(m,r.b.b)
A.aE(m,0,q.b)
A.t(m,"uScene",B.w)
A.aE(m,1,t._.a(r.d.$0()))
A.t(m,"uHistory",B.am)
A.t(m,"uTime",new A.x(B.e,r.e.$0()))
A.t(m,"uChromaWeight",new A.x(B.e,n.ax))
A.t(m,"uTrackingWeight",new A.x(B.e,l))
A.t(m,"uNoiseWeight",new A.x(B.e,n.ch))
A.t(m,"uHeadSwitchWeight",new A.x(B.e,n.CW))
A.t(m,"uDropoutWeight",new A.x(B.e,n.cx))
A.t(m,"uGhostWeight",new A.x(B.e,s))
A.bt(m,r.c)
o.aF(3,0)},
$iaa:1,
gF(){return this.a}}
A.ib.prototype={}
A.lq.prototype={
gE(){return"world"},
am(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cI,A.c([new A.P(this.e,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aA(new A.bo("safeWorld",s.b,s.c,B.jT,B.y,B.iA)),q=s.e
return A.c([new A.md(new A.b6("worldOpaqueTransparent",A.c([new A.P(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a1(){},
$ian:1}
A.md.prototype={
ao(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bP(j,a.ak(n.d).b)
A.ba(j,n.a.ae())
s=k.a
A.d2(j,B.cb,1,s.c,s.b,s.a)
A.c4(j,n.b.b)
A.t(j,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.t(j,"uLightDir",new A.x(B.o,new Float32Array(A.a1(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.t(j,"uAmbientColor",new A.x(B.o,new Float32Array(A.a1(A.c([p.a,p.b,p.c],s)))))
A.t(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fu(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fu(m,l[o])},
fu(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dm){s=b.a
n.fv(a,s.gF().c)
A.wj(a,b,!0)
r=n.c.$1(s.gF().a)
A.bt(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dG(p,r.d,o,0)
else a.dE(p,0,o)}else if(t.yz.b(b)){q=a.a
A.t(q,"uUseInstances",B.bN)
n.fv(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.bt(q,r.a)
q=r.b
p=r.c
if(q)a.dF(p,r.d,0)
else a.aF(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
fv(a,b){var s=b.aa(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a1(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a1(s.dO().a))))},
$iaa:1,
gF(){return this.a}}
A.nH.prototype={
cg(a){var s,r,q
a.C()
s=A.a_(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a0
else q=r===0?B.bt:B.L
return new A.e9(q,s)},
hB(a){var s,r=this.cg(a).a
A:{if(B.a0===r){s=B.dt
break A}if(B.L===r){s=B.ds
break A}s=B.ah
break A}return s}}
A.k5.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hE.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hH.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.k7.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.k4.prototype={}
A.k6.prototype={}
A.eI.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hG.prototype={}
A.hF.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eW.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ih.prototype={
q(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cZ.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fs.prototype={
v(){return"ClearMask."+this.b}}
A.jP.prototype={
aF(a,b){var s=this.a
if(s.b!==B.h)A.h(A.j(u.k))
s.a.drawArrays(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bw(a,1)},
dE(a,b,c){var s=this.a
if(s.b!==B.h)A.h(A.j(u.k))
s.a.drawArraysInstanced(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bw(a,c)},
dF(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bw(a,1)},
dG(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aM(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bw(a,c)},
$iC3:1}
A.fE.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fO.prototype={
h8(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.j("resource is not in candidate: "+a))
return s}}
A.oN.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.j("GPU resource adapter is not initialized"))
return s},
cO(a){var s,r,q,p,o,n=this
if(n.e)A.h(A.j("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.j("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.j("GPU resource candidate is already open"))
s=A.i2(a)
p=n.b
r=p.cO(s)
try{q=new A.fO(r,n.dc(s,a),B.ag)
n.d=q
return q}catch(o){p.dY(r)
throw o}},
a1(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.df(s.b)
r.b.a1()
r.c=null
r.e=!0},
dc(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("G<1>")
s=new A.G(k,i.a(new A.oO()),j)
for(h=s,g=J.O(h.a),h=new A.T(g,h.b,h.$ti.i("T<1>")),f=a.a;h.m();){r=g.gn()
q=A.zi(f,a.eN(r,a5))
J.jn(a3,q)
J.bk(a2,r,q)}e=A.H(new A.G(k,i.a(new A.oP()),j),j.i("n.E"))
B.a.W(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.AN(J.BA(o,11))
if(i){h=J.aT(a2,"sceneColor")
h.toString
J.bk(a2,o,h)}else{h=n
if(typeof h!=="number")return h.nl()
if(h>=2){h=J.aT(a2,"sceneColor#1")
h.toString
J.bk(a2,o,h)}else{m=A.zi(f,a.eN(o,a5))
J.jn(a3,m)
J.bk(a2,o,m)}}}a0=A.aW(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.D(a0).i("eS<1>"),a0=new A.eS(a0,k),a0=new A.aD(a0,a0.gt(0),k.i("aD<a2.E>")),j=a.a,i=t.V,k=k.i("a2.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wT(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eN(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hG(s,s,1,B.aY,!0)}if(a==="sceneDepth")return new A.hG(n,m,1,B.aY,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a8(n+1,2):n
p=r?B.d.a8(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hG(q,p,s,o?B.cF:B.hP,o)},
df(a){var s,r,q,p,o,n=A.fJ(t.mf.a(a).gaD(),t._)
for(n=A.h0(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wT(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ez(a){if(this.d!==a||a.c!==B.ag)throw A.b(A.j("GPU resource candidate is not open"))}}
A.oO.prototype={
$1(a){return!B.b.T(A.p(a),"sceneColor#")},
$S:3}
A.oP.prototype={
$1(a){return B.b.T(A.p(a),"sceneColor#")},
$S:3}
A.h3.prototype={
v(){return"_SlotState."+this.b}}
A.em.prototype={
sb6(a){this.c=this.$ti.i("1?").a(a)}}
A.cV.prototype={
aE(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.em(B.aL,n.i("em<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.nq
p.sb6(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c0(a){return this.aE(a,null)},
a0(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.e2(B.cM,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.e2(B.cN,a))
s=q.b
if(s===B.aM||s===B.aL)throw A.b(A.e2(B.aA,a))},
bB(a){var s,r,q=this.$ti
q.c.a(a)
this.a0(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
e0(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a0(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb6(b)},
b8(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.e2(B.cM,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.e2(B.cN,a))
r=q.b
if(r===B.aM||r===B.aL)throw A.b(A.e2(B.i4,a))
q.b=B.aM
q.sb6(null)
B.a.l(p.c,s);++p.e},
bF(){return new A.bR(this.m2(),this.$ti.i("bR<+(1,2)>"))},
m2(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aM||j===B.aL){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aB(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jz.prototype={
v(){return"BlendEquation."+this.b}}
A.ez.prototype={
v(){return"BlendFactor."+this.b}}
A.jK.prototype={
v(){return"CullFace."+this.b}}
A.jN.prototype={
v(){return"DepthFunc."+this.b}}
A.fA.prototype={
e4(a){var s=this
return A.yj(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b7.prototype={
v(){return"StateField."+this.b}}
A.tq.prototype={
lm(a){var s,r=this.a
if(r==null)return A.hS(B.jo,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bF)
if(r.b!==a.b)s.l(0,B.bG)
if(r.c!==a.c)s.l(0,B.bH)
if(r.d!==a.d)s.l(0,B.bI)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bJ)
if(r.r!==a.r)s.l(0,B.bK)
if(r.w!==a.w)s.l(0,B.bL)
if(r.x!==a.x)s.l(0,B.bM)
return s}}
A.dD.prototype={$idl:1}
A.iZ.prototype={}
A.iY.prototype={}
A.mc.prototype={}
A.lo.prototype={
it(a){var s=this,r=A.a(s.a.canvas)
s.c=A.V(new A.tn(s))
s.d=A.V(new A.to(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hh(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bS(A.f(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bS(A.f(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bS(A.f(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bS(A.f(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bS(A.f(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.f3(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.hl(e.getParameter(A.f(k.WebGL2RenderingContext.RENDERER)))
m=A.hl(e.getParameter(A.f(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qD("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bS(a){var s=A.hl(this.a.getParameter(a))
return typeof s=="number"?B.c.af(s):0},
f3(a){var s=A.hl(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iCs:1}
A.tn.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.T},
$S:1}
A.to.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.uf.prototype={
kq(){var s,r=this
if(r.b!==B.h)A.h(A.j(u.k))
s=r.w?A.E(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dD(new A.mc(s))},
fo(a){var s=a.a
if(!(s instanceof A.mc))throw A.b(A.al(a,"query","is not a GPU timer query"))
return s}}
A.mb.prototype={}
A.tm.prototype={}
A.tp.prototype={
lh(a){var s=A.E(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.tm(A.DB(s))}}
A.jQ.prototype={
B(){var s=this
return A.M(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jv.prototype={
gm6(){var s=this.CW
return new A.am(s,A.o(s).i("am<2>")).bq(0,0,new A.nb(),t.i)},
ia(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.q()
s=j.a
A.E(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.q()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.q()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.q()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.q()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.q()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.q()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.q()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.E(r[k].connect(i))
r=j.z
r===$&&A.q()
A.a(r.gain).value=1
q=j.Q
q===$&&A.q()
A.a(q.gain).value=0.35
A.E(o.connect(r))
A.E(n.connect(r))
A.E(p.connect(r))
p=j.as
p===$&&A.q()
A.E(r.connect(p))
A.E(p.connect(q))
A.E(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aZ()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aZ()
j.k3=p
A.E(q.connect(p))
A.E(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.E(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aZ()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aZ()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aZ()
j.p1=r
A.E(p.connect(q))
A.E(i.connect(A.a(s.destination)))
j.ew()},
ew(){var s,r=this,q=r.k4
q===$&&A.q()
q.disconnect()
s=r.p1
s===$&&A.q()
s.disconnect()
if(r.p2){A.E(q.connect(s,0))
A.E(q.connect(s,1))
q=r.ok
q===$&&A.q()
A.E(s.connect(q,0,0))
A.E(s.connect(q,0,1))}else{s=r.ok
s===$&&A.q()
A.E(q.connect(s,0,0))
A.E(q.connect(s,1,1))}},
cc(){var s=this.a
if(A.p(s.state)==="suspended")A.a(s.resume())},
fj(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.q()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.q()
return s}r=B.jM.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.q()
break A}if("bed"===r){s=q.e
s===$&&A.q()
break A}if("mid"===r){s=q.r
s===$&&A.q()
break A}if("air"===r){s=q.x
s===$&&A.q()
break A}s=q.w
s===$&&A.q()
break A}return s},
ja(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aB(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aK()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cN(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aK()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.E(r.connect(q))
A.E(q.connect(p.fj(a)))
r.onended=A.V(new A.nd(r,q))
r.start()},
he(a){return this.cN(a,1)},
hf(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.aK()*0.12)
q=A.a(s.createGain())
A.a(q.gain).value=c
p=A.a(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.a(p.positionX).value=b.a
A.a(p.positionY).value=b.b
A.a(p.positionZ).value=b.c
o=A.a(s.createBiquadFilter())
o.type="lowpass"
A.a(o.frequency).value=2e4
n=A.a(s.createGain())
A.a(n.gain).value=1
m=h==null?0:h
if(g!=null&&f!=null){A.a(o.frequency).value=f
A.a(n.gain).value=Math.pow(10,g/20)}else{s=j.ay!=null
if(s){s=j.ay
s.toString
l=j.eH(j.b.hd(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h4(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.V(new A.nc(j,o))
A.E(r.connect(q))
A.E(q.connect(n))
A.E(n.connect(o))
A.E(o.connect(p))
A.E(p.connect(j.fj(a)))
r.start()},
mA(a,b,c,d){return this.hf(a,b,c,1,d,null,null,null)},
eH(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ay(r,q,p)},
en(a){var s,r,q,p,o=this
if(o.cx)return
s=o.at.h(0,a)
if(s==null)return
o.cx=!0
r=o.a
q=A.a(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.a(r.createGain())
A.a(p.gain).value=0.6
A.E(q.connect(p))
r=o.e
r===$&&A.q()
A.E(p.connect(r))
q.onended=A.V(new A.ne(o,q,p))
q.start()
o.cy=q},
d_(a){if(this.p2===a)return
this.p2=a
this.ew()},
hM(a){var s,r,q=this
q.d_(a.b===B.bY)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aO?1:0.55
r=q.c
r===$&&A.q()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.q()
A.a(s.gain).value=0.35*q.p4},
bl(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.D(c==null?q.fr:c,0,1)
q.fx=B.c.D(f==null?q.fx:f,0,1)
q.fy=B.c.D(b==null?q.fy:b,0,1)
q.go=B.c.D(a==null?q.go:a,0,1)
q.id=B.c.D(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.q()
A.a(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.q()
A.a(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.q()
A.a(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.q()
A.a(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.q()
A.a(s.gain).value=0.4*q.go
s=q.e
s===$&&A.q()
A.a(s.gain).value=0.12*q.id
s=q.y
s===$&&A.q()
A.a(s.gain).value=q.fx
s=q.c
s===$&&A.q()
s=A.a(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
ee(a){var s=null
return this.bl(s,s,s,s,a,s)},
hJ(a){var s=null
return this.bl(s,s,a,s,s,s)},
hL(a){var s=null
return this.bl(s,s,s,s,s,a)},
hI(a){var s=null
return this.bl(s,a,s,s,s,s)},
hH(a){var s=null
return this.bl(a,s,s,s,s,s)},
hK(a){var s=null
return this.bl(s,s,s,a,s,s)},
hG(a){if(this.ay===a)return
this.ay=a
this.by()},
by(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cd(p,g)
m=n==null?i.eH(h.hd(p,g)):new A.ay(n.c,n.d,n.e)
l=A.a6(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a6(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a6(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.D(m.c,0,1)}}}
A.nb.prototype={
$2(a,b){return Math.max(A.bv(a),t.jS.a(b).r)},
$S:48}
A.na.prototype={
$1(a){return this.hs(t.q.a(a))},
hs(a){var s=0,r=A.bh(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bi(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ae(A.aS(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ae(A.aS(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ae(A.aS(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ak(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.v(l))
s=5
break
case 2:s=1
break
case 5:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$$1,r)},
$S:63}
A.nd.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.nc.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.ne.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h4.prototype={}
A.jw.prototype={
v(){return"AudioCategory."+this.b}}
A.n0.prototype={
ic(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.ht)
if(!B.a.a4(A.c([d.a,d.b,d.c],t.n),new A.n1()))throw A.b(B.fD)},
gE(){return this.a}}
A.n1.prototype={
$1(a){return isFinite(A.bv(a))},
$S:5}
A.mI.prototype={
i9(a,b){if(this.a.length===0)throw A.b(B.fs)
if(!B.a.a4(A.c([a.a,a.b,a.c],t.n),new A.mJ()))throw A.b(B.fJ)}}
A.mJ.prototype={
$1(a){return isFinite(A.bv(a))},
$S:5}
A.hp.prototype={
C(){var s=t.n
if(B.a.L(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mK()))throw A.b(B.h1)
s=B.a.L(A.c([0,0.55,1],s),new A.mL())
if(s)throw A.b(B.hj)},
cd(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
n5(a){return this.cd(a,null)}}
A.mK.prototype={
$1(a){return!isFinite(A.bv(a))},
$S:5}
A.mL.prototype={
$1(a){A.bv(a)
return a<0||a>1},
$S:5}
A.mX.prototype={
ib(a){var s=A.o(a)
if(new A.ac(a,s.i("ac<1>")).L(0,new A.mZ())||new A.am(a,s.i("am<2>")).L(0,new A.n_()))throw A.b(B.hq)}}
A.mZ.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.n_.prototype={
$1(a){var s
t.a.a(a)
s=J.aH(a)
return s.gO(a)||s.L(a,new A.mY())},
$S:64}
A.mY.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.ww.prototype={}
A.n8.prototype={}
A.n2.prototype={
ie(a,b,c){var s
for(s=this.b.gaD(),s=s.gu(s);s.m();)s.gn().C()},
hn(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.j("audio listener room missing: "+a0))
r=this.jP(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c5
e=f.cd(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.p(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.c([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.u)(o),++i)s.push(o[i].a)
o=B.c.D(l,-60,0)
m=B.d.D(k,120,2e4)
g=B.c.D(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.Y(p,"; ")
b=t.N
s=A.ah(s,b)
b=A.ah(q,b)
if(!isFinite(g)||g<0||g>1)A.h(B.hi)
return new A.n8(s,b,o,m,g,n,c)},
cd(a,b){return this.hn(a,b,B.bm)},
jP(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.na
s=t.N
r=A.M([a0,0],s,t.i)
q=A.M([a0,B.W],s,t.Es)
p=A.aJ([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.U,l=p.$ti.c;p.a!==0;){k=A.H(p,l)
B.a.V(k,new A.n3(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.iv(s,!0)}i=o.aL(j)
h=A.H(i,i.$ti.i("n.E"))
B.a.V(h,new A.n4())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cb(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c5:d).n5(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.H(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.n9}}
A.n3.prototype={
$2(a,b){var s,r,q
A.p(a)
A.p(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.H(r,s)
return q===0?B.b.H(a,b):q},
$S:65}
A.n4.prototype={
$2(a,b){var s=t.U
return B.b.H(s.a(a).a,s.a(b).a)},
$S:66}
A.iv.prototype={}
A.fp.prototype={}
A.nE.prototype={
h6(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Bu().bA(q).gaz()
p.d=q
p.c=p.b.bA(q).gaz()
p.a=a}}
A.on.prototype={}
A.kd.prototype={
cT(a){if(this.at)return
A.pu(a,"requestPointerLock",t.X)},
ec(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mJ(p,n)}this.be()},
d2(a){var s,r,q,p,o,n,m=this
if(m.ch.d2(a))for(s=m.CW.aJ("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.l(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.l(0,n)
break}}},
mB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.aV(c,A.D(c).i("aV<1,af?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.p(r.mapping)!=="standard")break A
c=A.p(r.id)
q=A.p(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.aV(n,A.D(n).i("aV<1,B>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.aV(d,A.D(d).i("aV<1,af>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a6(r.value))}s=new A.l2(!0,c,q,o,p)
break}}d=s==null
m=A.DP(d?B.m6:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.L(c.aJ(e),q.gaq(q))
q=f.r
q.j6(A.o(q).i("l(1)").a(new A.pn(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.m:g,h)){if(i.dM())n.l(0,h)}else n.l(0,h)}}f.e=A.hS(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.L(c.aJ(e),l.gaq(l))){d=r.a(f.c)
d=!B.a.L(c.aJ(e),d.gaq(d))}}if(d)i.dN()},
jn(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.p(a.code)))if(B.a.p(s.CW.aJ("interact"),A.p(a.code))){if(s.ch.dM())s.d.l(0,A.p(a.code))}else s.d.l(0,A.p(a.code))},
jp(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.p(a.code))
r=this.CW
if(B.a.p(r.aJ(q),A.p(a.code))){t.Q.a(s)
s=!B.a.L(r.aJ(q),s.gaq(s))}else s=!1
if(s)this.ch.dN()},
jt(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.f(a.button)
if(r.c.l(0,s))if(B.a.p(r.CW.aJ("interact"),s)){if(r.ch.dM())r.d.l(0,s)}else r.d.l(0,s)},
jx(a){var s,r="interact",q="Mouse"+A.f(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.p(s.aJ(r),q)){t.Q.a(p)
p=!B.a.L(s.aJ(r),p.gaq(p))}else p=!1
if(p)this.ch.dN()},
jz(a){var s
A.a(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jv(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.f1(a,"movementX")
s.as=s.as+s.f1(a,"movementY")},
jr(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
f1(a,b){var s=A.zQ(a[b])
if(s==null)s=null
return s==null?0:s},
cq(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fJ(n.c,t.N)
for(r=n.e,r=A.h0(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.l(0,o)}t.Q.a(s)
return B.a.L(n.CW.aJ(a),s.gaq(s))},
be(){var s=this
s.c.N(0)
s.d.N(0)
s.f.N(0)
s.r.M(0,s.e)
s.as=s.Q=0
s.ch.dV()}}
A.pn.prototype={
$1(a){return!this.a.p(0,A.p(a))},
$S:3}
A.pm.prototype={
aJ(a){var s=this.a.h(0,a)
return s==null?B.m:s},
mJ(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.h0(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ah(q,r))},
bi(a,b){var s,r,q
t.Q.a(b)
for(s=this.aJ(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.pq.prototype={
dM(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dN(){this.c=this.b=!1
this.d=0},
d2(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dV(){this.c=this.b=!1
this.d=0}}
A.aU.prototype={
gE(){return this.a}}
A.pK.prototype={}
A.pH.prototype={
mE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.H(b,t.p)
B.a.M(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.eT(n,i.d,a,b,i.a,j,m)
i.eT(l,i.e,a,c,i.b,j,k)
return new A.pK(n,l,j)},
eT(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.D(d)
s=k.i("I<1,+effectiveScore,light,score(B,aU,B)>")
r=A.H(new A.I(d,k.i("+effectiveScore,light,score(B,aU,B)(1)").a(new A.pI(this,c,b)),s),s.i("a2.E"))
B.a.V(r,new A.pJ())
q=A.a_(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.N(0)
b.M(0,q)}}
A.pI.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ap(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iN(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pJ.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:69}
A.o2.prototype={
dw(a,b){var s,r,q,p,o,n,m,l=this
if(b<=0||!isFinite(b))return l.a
s=l.a
r=1+2*b*12.5
q=b*156.25
p=b*q
o=1/(r+p)
n=l.b
m=(r*s+b*n+p*a)*o
l.a=m
l.b=(n-q*(s-a))*o
return m}}
A.pQ.prototype={
i0(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dw(b,c)},
kg(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cY.prototype={
cR(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.d0(s,0,m,l)
n.a=s}r=b.ap(0,a).bA(d.ap(0,a)).gaz()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ik(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ik(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ik(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ik(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ik(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ik(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aI(a,b,c,d,e){return this.cR(a,b,c,d,e,1,1)}}
A.k.prototype={
a6(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ap(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
ac(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaz(){var s=this,r=s.gt(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.l2.prototype={
gE(){return this.b}}
A.lr.prototype={}
A.nx.prototype={
ng(a){var s,r,q,p,o,n=B.i.ad(a.B(),null)
this.a.fL(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aj(s.getItem("quarantine.save.active"))
q=A.aj(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mF(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aj(s.getItem("quarantine.save.active"))
q=A.aj(s.getItem("quarantine.save.previous"))
p=this.eM(r,a)
if(p!=null)return new A.eU(p,null)
o=this.eM(q,a)
if(o!=null)return new A.eU(o,"recovered previous save")
if(r==null)return B.lw
return B.lv}catch(n){return B.lu}},
eM(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fL(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.z)return null
else throw q}}}
A.jS.prototype={
ii(a,b,c,d,e){if(this.a.length===0)throw A.b(B.he)
if(this.b<0)throw A.b(B.fE)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ah(q,t.i)
s=t.z
return A.aW(A.M(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.oc.prototype={
gai(){return this.a}}
A.fB.prototype={
B(){var s=t.N
return A.M(["kind",this.a.b],s,s)}}
A.of.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bu.prototype={}
A.kE.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.M(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lY(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ap(0,new A.k(0,1.3499999999999999,0))
return!new A.jD(s,s.a6(0,new A.k(0,1.2000000000000002,0))).cJ(a,r)}}
A.qx.prototype={
B(){return A.ul(this.a)}}
A.fU.prototype={
B(){return A.M(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qV.prototype={
fL(a){var s,r,q,p,o,n,m,l=B.i.an(a,null),k=t.f
if(!k.b(l))throw A.b(B.hs)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.S("unsupported save version "+A.v(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.fO)
k=A.aO(n,s,r)
return A.yY(A.aO(m,s,r),k,2)}}
A.eU.prototype={}
A.eH.prototype={
v(){return"GameSessionEventType."+this.b}}
A.k2.prototype={
gai(){return this.c},
gaR(){return this.d}}
A.oB.prototype={
gai(){return this.a},
gaR(){return this.b}}
A.oA.prototype={
gab(){var s=this.d
return new A.oB(s.a,s.b)},
ghg(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.M(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.M(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.M(["entryCount",m.e.b.a],k,t.S)
p=A.ys(m.c).B()
o=m.r
n=o.c
return new A.qx(A.ul(A.M(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.M(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
kk(a,b){if(!B.a.L(a.f,new A.oC(b)))return!1
this.z.ki(a,b)
return!0},
kj(a){var s,r,q,p,o,n="event."+a.a,m=this.z
if(m.lP(n))return!1
m=m.b
m.k(0,n,"true")
for(s=a.x,r=s.length,q=0;q<r;++q){p=s[q]
o=B.b.br(p,"=")
if(o<=0||o===p.length-1)continue
m.k(0,B.b.I(p,0,o),B.b.aN(p,o+1))}return!0},
lL(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("am<2>")
q=A.H(new A.am(s,r),r.i("n.E"))
B.a.V(q,new A.oD())
if(q.length===0)return null
s=A.D(q)
r=s.i("G<1>")
p=A.H(new A.G(q,s.i("l(1)").a(new A.oE()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.de(a),r=t.E,s=new A.aD(s,s.gt(0),r.i("aD<Y.E>")),r=r.i("Y.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cK(a,l.a,s.length-1,B.a.gZ(s).q(0))
j.k(0,a,k)
return k},
kf(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.al(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cu(B.hD)}if(n<a)this.cu(B.hE)},
mG(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dV){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
i_(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.C0(j,A.ah(i.d,h).length)
if(a===B.dI)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.D(r)
A.C_(j,new A.G(r,q.i("l(1)").a(new A.oF(k)),q.i("G<1>")).gt(0))
r=k.f
q=r.b
if(B.a.p(B.iE,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aB(j.a/1*3)
B.a.l(r.r,new A.fW(q.a,a,b))
m=r.a
A.Cb(m,q.a,n,k.b,A.ah(m.d,h));++q.a
q.ej(7)
r.c=16
r.d=6
r.f=!1
m.hO(B.j8)
s.r.kH(o,c)
l=B.c.aB(j.b/1*6)
if(l>0)r.ek(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.o(i).i("am<2>")).L(0,new A.oG())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cu(B.hG)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cu(B.hF)},
cu(a){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.k2(s.a,s.b))
B.a.l(r.x,A.C1(A.EY(a),r.b,r.y-1))}}
A.oC.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.oD.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.oE.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:18}
A.oF.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.rI().hX(this.a.c,a.a)},
$S:74}
A.oG.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.jx.prototype={
e2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.D(c),a=b.i("e(1)")
b=b.i("I<1,e>")
A.jj(new A.I(c,a.a(new A.nl()),b),"level")
s=e.e
r=A.D(s)
q=r.i("e(1)")
r=r.i("I<1,e>")
A.jj(new A.I(s,q.a(new A.nm()),r),"room")
p=e.f
o=A.D(p)
A.jj(new A.I(p,o.i("e(1)").a(new A.nn()),o.i("I<1,e>")),"portal")
o=e.r
n=A.D(o)
A.jj(new A.I(o,n.i("e(1)").a(new A.no()),n.i("I<1,e>")),"stair")
m=new A.I(c,a.a(new A.np()),b).b9(0)
l=new A.I(s,q.a(new A.nq()),r).b9(0)
r=A.m(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.u)(p),++k){j=p[k]
r.k(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.u)(s),++k){i=s[k]
b=i.b
if(!m.p(0,b))throw A.b(A.S("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.D(b)
q=i.a
A.jj(new A.I(b,a.i("e(1)").a(new A.nr()),a.i("I<1,e>")),"window in "+q)
a=i.f
A.jj(a,"portal reference in "+q)
for(b=a.length,h=0;h<a.length;a.length===b||(0,A.u)(a),++h){g=a[h]
j=r.h(0,g)
if(j==null)throw A.b(A.S("rooms."+q+".portalIds references unknown portal "+g,d,d))
if(!(j.b===q||j.c===q))throw A.b(A.S("rooms."+q+".portalIds references "+g+", which does not touch the room",d,d))}}for(c=p.length,k=0;k<p.length;p.length===c||(0,A.u)(p),++k){j=p[k]
b=j.b
if(b!=="outside"&&!l.p(0,b))throw A.b(A.S("portals."+j.a+".a references "+b,d,d))
a=j.c
if(a!=="outside"&&!l.p(0,a))throw A.b(A.S("portals."+j.a+".b references "+a,d,d))
if(b===a)throw A.b(A.S("portals."+j.a+" has identical endpoints",d,d))}for(c=o.length,k=0;k<o.length;o.length===c||(0,A.u)(o),++k){f=o[k]
b=f.b
j=r.h(0,b)
if(j==null)throw A.b(A.S("stairs."+f.a+".portalId references unknown portal "+b,d,d))
if(!j.z)throw A.b(A.S("stairs."+f.a+".portalId "+b+" is not marked stair",d,d))}},
e1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.j("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.j("authored house source changed: "+a1))
a1=b.e
s=a1.length
if(s!==a2.b.length||b.f.length!==a2.c.length)throw A.b(A.j("authored/runtime room or portal count mismatch"))
for(r=t.fW,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.b(A.j("authored room missing at runtime: "+n))
l=o.c
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.j(n+" origin.x mismatch: "+A.v(g)+" != "+A.v(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.j(n+" origin.y mismatch: "+A.v(j)+" != "+A.v(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.j(n+" origin.z mismatch: "+A.v(l)+" != "+A.v(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.j(n+" size.x mismatch: "+A.v(g)+" != "+A.v(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.j(n+" size.y mismatch: "+A.v(j)+" != "+A.v(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.j(n+" size.z mismatch: "+A.v(l)+" != "+A.v(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.j("window count mismatch for "+n))
for(n=A.D(j),i=n.i("l(1)"),n=n.i("G<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bx(new A.G(j,i.a(new A.nk(e)),n),r)
if(d==null)throw A.b(A.j("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.h(A.j(c+" offset mismatch: "+A.v(h)+" != "+A.v(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.h(A.j(c+a+A.v(h)+" != "+A.v(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.h(A.j(c+a0+A.v(h)+" != "+A.v(g)))}}for(a1=b.f,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.b(A.j("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.j("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.h(A.j(q+a+A.v(n)+" != "+A.v(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.h(A.j(q+a0+A.v(n)+" != "+A.v(l)))
if(o.y!=m.at)throw A.b(A.j("door model mismatch for "+q))}a1=b.r
s=a2.d
if(a1.length!==s.length||B.a.gbb(a1).b!==B.a.gbb(s).b)throw A.b(A.j("stair manifest mismatch"))}}
A.nf.prototype={
$1(a){var s=A.je(a,"level"),r=A.c7(s,"id")
A.c7(s,"kind")
A.er(s,"floorY")
return new A.dN(r)},
$S:75}
A.ng.prototype={
$1(a){return A.BI(a,this.a)},
$S:76}
A.nh.prototype={
$1(a){var s=this.a,r=A.je(a,"portal"),q=A.c7(r,"id"),p=A.c7(r,"a"),o=A.c7(r,"b"),n=A.xe(r,"facingA"),m=A.xe(r,"facingB"),l=A.er(r,"offsetA"),k=A.er(r,"offsetB"),j=A.er(r,"width"),i=A.er(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.p(r.h(0,"doorKit")):null
return new A.dO(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.a8(r.h(0,"stair"),!0),J.a8(r.h(0,"exterior"),!0),!J.a8(r.h(0,"open"),!1),J.a8(r.h(0,"sticks"),!0))},
$S:77}
A.ni.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.je(a,"stair")
return new A.dQ(A.c7(p,"id"),A.c7(p,"portalId"),A.FI(p.h(0,s),s),A.mx(p.h(0,"min"),"min"),A.mx(p.h(0,"max"),"max"),A.mx(p.h(0,r),r),A.mx(p.h(0,q),q))},
$S:78}
A.nj.prototype={
$1(a){return typeof a=="string"?a:A.dG("exterior cell")},
$S:33}
A.nl.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nm.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.nn.prototype={
$1(a){return t.lT.a(a).a},
$S:82}
A.no.prototype={
$1(a){return t.gI.a(a).a},
$S:83}
A.np.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nq.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.nr.prototype={
$1(a){return t.ya.a(a).a},
$S:84}
A.nk.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:27}
A.vy.prototype={
$1(a){var s
A:{if("ground"===a){s=B.f9
break A}if("first"===a){s=B.fa
break A}s=B.fb
break A}return s},
$S:86}
A.dN.prototype={
gE(){return this.a}}
A.dP.prototype={
gE(){return this.a}}
A.ns.prototype={
$1(a){var s=this.a,r=A.je(a,"window")
return new A.dR(A.c7(r,"id"),A.xe(r,"facing"),A.er(r,"offset")*s,A.er(r,"sill")*s,A.er(r,"width")*s,A.er(r,"height")*s,J.a8(r.h(0,"frosted"),!0))},
$S:87}
A.nt.prototype={
$1(a){return typeof a=="string"?a:A.dG("portal id")},
$S:33}
A.dR.prototype={
gE(){return this.a}}
A.dO.prototype={
gE(){return this.a}}
A.dQ.prototype={
gE(){return this.a}}
A.vf.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.vw.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.jD.prototype={
mZ(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.D(s)
q=new A.G(s,r.i("l(1)").a(new A.nI(e)),r.i("G<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cs(b,p.f)&&a==="hall"))o=n.cs(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.ls(p,B.c.D(d,0,1))},
m7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.f0(g,c,d)
s=h.j2(a,b,c,d)
if(s!=null){h.d=s
return h.f0(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.fE(Math.sqrt(r*r+q*q)/0.08))
o=d.ac(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.k_(a,n,m,o)
l=l||j.b
m=j.a
i=h.mD(a,n)
n=i==null?n:i}h.bg(m)
return new A.kr(m,n)},
j2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cs(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cs(c,l)){l=j<0||o
h=l}if(i||h)return new A.ls(m,i?0:1)}return null},
f0(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ap(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.za(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bg(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kr(n,k)},
cs(a,b){var s=a.ap(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
k_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cD(c,!1)
s=h.cz(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cz(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cD(p.a,!1)
n=c.a6(0,new A.k(0,0.35,0))
h.bg(n)
if(!h.cJ(a,b)){m=h.cz(a,b,n,new A.k(g,0,0))
l=h.cz(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bg(i)
if(h.cJ(a,b))break}h.bg(k)
return new A.cD(k,!1)}}if(o)return new A.cD(r,!0)
if(!p.b)return new A.cD(p.a,!0)
h.bg(c)
return new A.cD(c,!0)},
cz(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cD(c,!1)
s=c.a6(0,d)
this.bg(s)
if(this.cJ(a,b)){this.bg(c)
return new A.cD(c,!0)}return new A.cD(s,!1)},
bg(a){var s=a.ap(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a6(0,new A.k(0,1.2000000000000002,0))},
cJ(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aG(m)
r=this.a
q=m.d
p=q.b
if(r.b-0.3<p||this.b.b+0.3>p+s.b)return!0
p=r.a
o=q.a
n=!1
if(p>=o+0.3)if(p<=o+s.a-0.3){r=r.c
q=q.c
r=r>=q+0.3&&r<=q+s.c-0.3}else r=n
else r=n
if(r)return!1
return!this.jX(a,m,s)},
mD(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.aL(r),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.cb(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.ft(k,o,s)&&this.iW(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jX(a,b,c){var s,r,q
for(s=a.aL(b.a),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.ft(b,q,c))return!0}return!1},
ft(a,b,c){var s,r,q,p=a.a,o=b.aZ(p),n=b.aH(p)
p=o===B.r||o===B.p
s=this.a
r=a.d
q=p?s.a-r.a:s.c-r.c
if(q<n+0.3||q>n+b.w-0.3)return!1
p=r.b
if(s.b-0.3<p||this.b.b+0.3>p+b.x)return!1
switch(o.a){case 0:p=s.c<=r.c+0.3
break
case 2:p=s.c>=r.c+c.c-0.3
break
case 1:p=s.a>=r.a+c.a-0.3
break
case 3:p=s.a<=r.a+0.3
break
default:p=null}return p},
iW(a,b,c){var s,r=this
switch(b.aZ(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sko(a){this.a=t.a7.a(a)}}
A.nI.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:89}
A.kr.prototype={}
A.cD.prototype={}
A.ls.prototype={}
A.hJ.prototype={
gai(){return this.a}}
A.p4.prototype={
kH(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.J,r)
s=B.J[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hY(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.c}return r},
hZ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.d}return r},
B(){return A.M(["landedCount",this.b],t.N,t.z)}}
A.a0.prototype={}
A.jV.prototype={
gm0(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a4(A.c([r,q,p,o,n,m],t.n),new A.oh())&&o>=r&&n>=q&&m>=p}}
A.oh.prototype={
$1(a){return isFinite(A.bv(a))},
$S:5}
A.ka.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gm0())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.L(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.p6()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.p6.prototype={
$1(a){return!isFinite(A.bv(a))},
$S:5}
A.p5.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bv(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bv(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bv(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bv(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bv(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bv(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a0(a,b,c,m,n,o,0,0,p),r=new A.a0(g,h,i,m,n,o,1,1,p)
this.ah(s,new A.a0(d,e,f,m,n,o,1,0,p),r)
this.ah(s,r,new A.a0(j,k,l,m,n,o,0,1,p))},
ah(a,b,c){var s=this,r=s.b
B.a.l(r,s.dl(a))
B.a.l(r,s.dl(b))
B.a.l(r,s.dl(c))},
dl(a){var s,r,q=B.a.Y(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.j("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
ku(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.j("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.ka(A.ah(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jV(s,r,q,p,o,n))
h.C()
return h}}
A.jW.prototype={}
A.wo.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ai.p(0,s))A.h(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:90}
A.vq.prototype={
$2(a,b){var s=t.Ez
return B.b.H(s.a(a).a,s.a(b).a)},
$S:91}
A.d4.prototype={
nf(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iG(A.H8(new A.ka(i,new Uint16Array(A.a1(s)),A.EF(i))),l.a,l.b,l.c,A.c([],k))}}
A.iG.prototype={}
A.eD.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jX.prototype={
kB(a){var s
switch(a.a){case 0:s=A.aJ(["front","street","opposite-house"],t.N)
break
case 1:s=A.aJ(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aJ(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aJ(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aJ(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kC(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ck
break A}if("kitchen"===a||"cellar"===a){s=B.f6
break A}if("bathroom"===a){s=B.f7
break A}if("spare-room"===a){s=B.f8
break A}s=B.ck
break A}return this.kB(s)},
fT(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bR(this.lH(d.i("e(0)").a(a),b,c,d),d.i("bR<0>"))},
lH(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fT(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a4(0,B.ai.gaq(B.ai)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ai.p(0,j))throw A.b(A.j("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ei.prototype={
fH(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.v5.prototype={
$1(a){var s=this
return t.xT.a(a).fH(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:35}
A.v4.prototype={
$1(a){return t.xT.a(a).fH(0,(this.a+this.b)*0.5,this.c)},
$S:35}
A.e_.prototype={
v(){return"FocusKind."+this.b}}
A.eE.prototype={
gE(){return this.b}}
A.qS.prototype={}
A.uh.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:93}
A.vo.prototype={
$1(a){return B.d.D(B.c.aB(a*this.a),0,255)},
$S:94}
A.eh.prototype={}
A.p2.prototype={
lR(){var s,r,q,p,o,n,m=this
m.j9()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.j("authored portal endpoint missing: "+o.a))}},
j9(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.j("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.j("duplicate portal "+n))
q.k(0,n,m)}},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.hY(q),s.b+r.hZ(q),s.c)},
aL(a){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.pj(a)),r.i("G<1>"))},
mC(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.al(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.aH(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aZ(a).a){case 0:s=new A.k(s.a+q,p,s.c)
break
case 2:s=new A.k(s.a+q,p,s.c+r.c)
break
case 1:s=new A.k(s.a+r.a,p,s.c+q)
break
case 3:s=new A.k(s.a,p,s.c+q)
break
default:s=null}return s},
hd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.W
s=A.c([new A.aB(a,B.W)],t.nR)
r=A.aJ([a],t.N)
for(q=this.e,p=t.U;s.length!==0;){o=B.a.mI(s,0)
n=o.a
m=o.b
for(l=this.aL(n),k=J.O(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.cb(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.H(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.H(m,p)
h.push(j)
B.a.l(s,new A.aB(i,h))}}}return B.W}}
A.pj.prototype={
$1(a){var s
t.U.a(a)
s=this.a
return a.b===s||a.c===s},
$S:95}
A.og.prototype={}
A.rI.prototype={
hX(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a4(s,new A.rJ())}else s=!1
return s}}
A.rJ.prototype={
$1(a){return t.fW.a(a).w},
$S:27}
A.p7.prototype={
mz(a){var s=this.e,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.pa(a)),r.i("G<1>"))},
cC(a){return B.a.b_(this.d,new A.p8(a),new A.p9(a))},
e1(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.j("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.j("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.j("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.j("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.j("invalid bounds for inventory asset "+m))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.u)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.b(A.j("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.j(a7+m+" references "+l))
n=a6.cC(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.Br()
if(!e.b.test(k))throw A.b(A.j("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.b(A.j("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.b(A.j("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.b(A.j("duplicate inventory socket "+l+":"+e))
l=g.f
e=l.a
d=e.a*a8
c=e.b*a8
e=e.c*a8
b=n.f
a=b.b
b=b.a
a0=l.c
a1=l.b.b*3.141592653589793/180
a2=Math.abs(Math.cos(a1))
a3=Math.abs(Math.sin(a1))
l=Math.abs(a.a-b.a)*0.5*(a0.a*a8)
a0=Math.abs(a.c-b.c)*0.5*(a0.c*a8)
b=l*a2+a0*a3
a0=l*a3+a0*a2
a4=g.hl(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.j(a7+m+" escapes "+f.a))}}}
A.pa.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:96}
A.p8.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:97}
A.p9.prototype={
$0(){return A.h(A.j("inventory asset missing: "+this.a))},
$S:6}
A.cR.prototype={
gE(){return this.a}}
A.cv.prototype={
hl(a,b){var s=this.f.c.b*b,r=a.f
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.pt.prototype={}
A.pr.prototype={}
A.vv.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.ps.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("ac<1>")
n=A.H(new A.ac(o,n),n.i("n.E"))
B.a.W(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dX(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fn)
s=t.X
r=A.aO(a,s,s)
s=this.a
s.N(0)
for(q=new A.L(r,A.o(r).i("L<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aL(o)||o<0)throw A.b(B.fG)
s.k(0,n,o)}}}
A.dr.prototype={}
A.pb.prototype={
nd(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t.Q.a(a4)
s=A.c([],t.ea)
for(r=A.h0(a4,a4.r,A.o(a4).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=m.a,k=m.d,j=k.a,i=k.b,k=k.c,h=0;!1;++h){g=n[h]
if(!g.gcK()||g.gkt())continue
f=g.gm4()
e=j+f.a
d=i+f.b
f=k+f.c
c=q.aG(m)
b=j+c.a*0.5-e
a=i+c.b*0.55-d
a0=k+c.c*0.5-f
a1=new A.k(b,a,a0).gt(0)
if(a1>0.0001){a2=1/a1
a3=new A.k(b*a2,a*a2,a0*a2)}else a3=new A.k(0,-1,0)
B.a.l(s,new A.dr(new A.k(e,d,f),a3,16760952,3.8,2.1*this.jO(l)))}}B.a.V(s,new A.pc(a5))
return A.l4(s,0,A.fh(4,"count",t.S),t.A_).bK(0)},
jO(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.pc.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.H(a.a.ap(0,s).gt(0),b.a.ap(0,s).gt(0))},
$S:99}
A.dZ.prototype={
v(){return"Floor."+this.b}}
A.dY.prototype={
v(){return"Facing."+this.b}}
A.f2.prototype={
shW(a){this.w=A.Q(a)},
gE(){return this.a}}
A.bZ.prototype={
cb(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aZ(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.al(a,"roomId","not an endpoint of "+s.a))},
aH(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.al(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.eY.prototype={
gE(){return this.a}}
A.eT.prototype={
gE(){return this.a}}
A.pe.prototype={
lx(a){return B.a.b_(this.c,new A.pf(a),new A.pg(a))},
nb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.j("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.j("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.b(A.j("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.j("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.j("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.j("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaD().L(0,new A.ph()))throw A.b(A.j("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.b(A.j("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.b(A.j("sound emitter "+l+" escapes "+j.a))}}}
A.pf.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:100}
A.pg.prototype={
$0(){return A.h(A.j("sound emitter missing: "+this.a))},
$S:6}
A.ph.prototype={
$1(a){return B.b.ba(A.p(a)).length===0},
$S:3}
A.cQ.prototype={
gE(){return this.a}}
A.p3.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.al(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.jf}q=A.c([],t.Fm)
p=B.c.aP(r)+1
o=B.c.aP(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eK("tick",m))
if(B.d.S(m,3)===0){B.a.l(q,new A.eK("cuckoo",m))
B.a.l(q,new A.eK("bell",m))}if(B.d.S(m,6)===0)B.a.l(q,new A.eK("chime",m))}l.b=b
return q}}
A.eK.prototype={
gaR(){return this.b}}
A.pd.prototype={
bV(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.al(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.je}q=A.c([],t.op)
for(p=B.c.aP(r)+1;p<=B.c.aP(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.i7)
if(B.d.S(o,3)===1)B.a.l(q,B.i9)
if(B.d.S(o,8)===5)B.a.l(q,B.ic)
if(B.d.S(o,5)===0)B.a.l(q,B.i8)
if(B.d.S(o,7)===3)B.a.l(q,B.id)
if(n===1)B.a.l(q,B.ia)
if(B.d.S(o,6)===4)B.a.l(q,B.ib)}m.b=b
return q}}
A.cP.prototype={}
A.vu.prototype={
$1(a){return typeof a!="number"},
$S:7}
A.pi.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.M(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.M(["lit",o.a,"examined",o.b],m,r))}return A.M(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,l=0;!1;++l)e.l(0,o[l].gE())
o=f.a
n=!0
if(A.xx(new A.ac(o,A.o(o).i("ac<1>")),d)){d=f.b
if(A.xx(new A.ac(d,A.o(d).i("ac<1>")),r)){d=f.c
e=!A.xx(new A.ac(d,A.o(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.h2)
e=f.d
if(e<0||e>2)A.h(B.fv)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.u)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.u)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.u)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,l=0;!1;++l){g=r[l]
j=d.h(0,g.gE())
g.scK(j.a)
g.slD(j.b)}}}}
A.i4.prototype={
B(){return A.M(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hT.prototype={
B(){return A.M(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bm.prototype={
gE(){return this.a}}
A.ob.prototype={
$1(a){return this.a.p(0,A.p(a))},
$S:3}
A.e1.prototype={
v(){return"Hand."+this.b}}
A.tk.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
ei(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kn.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.z[r]
o.k(0,q,s.h(0,q))}return A.M(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
q(a){return new A.I(B.z,t.oI.a(new A.pN(this)),t.jT).Y(0," \xb7 ")}}
A.pM.prototype={
$2(a,b){return new A.N(A.p(a),A.p(b),t.q)},
$S:101}
A.pN.prototype={
$1(a){return this.a.a.h(0,A.p(a))},
$S:102}
A.bT.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.M(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gai(){return this.b}}
A.pw.prototype={
bY(a){t.G.a(a)
return a.a===5&&B.a.a4(B.z,new A.pD(this,a))},
ev(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bY(b))return null
s=this.e++
r=new A.bT(s,a,A.c([A.pL(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dD(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bY(b))return!1
B.a.l(s.c,A.pL(b,c,B.az))
return!0},
ke(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bY(b))return!1
s.r=A.pL(b,0,B.cL)
return!0},
hO(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.N(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.p(s,p))B.a.l(s,p)}},
nc(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.H(n,A.o(n).c)
B.a.W(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ag(r,r.r,r.e,A.o(r).i("ag<2>"));r.m();)s.push(r.d.B())
return A.M(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pD.prototype={
$1(a){var s
A.p(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.hq.prototype={
B(){var s,r=this,q=A.m(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",!1)
q.k(0,"rejected",r.d)
q.k(0,"aliasUsed",r.f)
s=r.e
if(s!=null)q.k(0,"rejectionReason",s)
s=r.r
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.nu.prototype={
cg(a){var s,r,q=a==null?null:B.b.ba(a).toLowerCase()
if(q==null||q.length===0)return B.eb
if(q==="pixeldart")return B.ea
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hq(B.aF,!1,!0,r,s,s?r:null)}}
A.i6.prototype={}
A.qw.prototype={
B(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gaD(),s=s.gu(s),r=t.N;s.m();){q=s.gn()
p.push(A.M(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.M(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.vn.prototype={
$1(a){A.p(a)
return a.length!==0&&a!==".."},
$S:3}
A.qs.prototype={}
A.qr.prototype={
gfM(){var s,r,q="pixeldart",p=this.b,o=p.au
if(o){s=p.w
s===$&&A.q()
s=s.a.b}else s="safe"
p=A.yU(q,o?p.gky():B.jy,!1,s)
r=p
if(r==null)r=A.yU(q,A.c([],t.s),!1,"safe")
p=A.yT(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
eo(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bx){if(k.au){s=k.d
s===$&&A.q()
s=s.a.b===B.T}else s=!1
s=!s
if(s){m.d=B.M;++k.fO
j=B.M}if(j===B.bx)return}if(j!==B.M)A.h(A.j(l))
B.i.ad(A.M(["backend","pixeldart","interpolation",0,"facts",A.ul(a.a.a)],t.N,t.X),null)
j=k.au
if(j){s=k.d
s===$&&A.q()
s=s.a.b===B.T}else s=!1
if(s){if(m.d!==B.M)A.h(A.j(l))
m.d=B.bx
return}if(!j)A.h(A.j("Pixeldart runtime is not initialized"))
j=k.p3
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dn(j)
j=$.y1()
s=j.b
q=j.c
p=A.wG(k.b/k.c,q,j.a,s)
q=new A.fq(r,p,p.ac(0,r),B.a5,B.mr,s,q,k.b/k.c)
j=q}o=new A.op(j,k.p4,k.R8,k.lE++,k.y2)
n=new A.rM()
$.xY()
j=$.qA.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.q()
s=k.f
s===$&&A.q()
k.jV(j.kp(s,o),o)
k.xr=k.e.lz()
j=$.qA.$0()
n.b=j
k.y1=n.glw()/1000},
fY(a){if(this.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
B.i.ad(A.M(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qt.prototype={
kz(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c6.cg(a)
r=A.c([a.a,"webgl2"],t.s)
q=a.c
if(q!=null)r.push("vendor-"+q)
p=a.b
if(p!=null)r.push("renderer-"+p)
r.push("max-texture-"+a.d)
r.push("max-texture-array-layers-"+a.e)
r.push("max-samples-"+a.f)
r.push("max-vertex-attributes-"+a.r)
r.push("max-color-attachments-"+a.w)
r.push("negotiated-profile-"+s.a.b)
r.push("profile-"+b.a.b)
o=b.b
o=A.H(o,A.o(o).c)
B.a.W(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.u)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kC.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qu.prototype={
B(){var s=this
return A.M(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qv.prototype={
fG(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.a0===s){r=new A.fb(1080,1920)
break A}if(B.L===s){r=new A.fb(720,1280)
break A}r=new A.fb(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.c.aB(r.b*q)
q=B.c.aB(r.a*q)
o=B.c.D(a5/p,0,1)
n=B.c.D(a4/q,0,1)
m=o<n?o:n
r=this.ex(B.c.aB(p*m),320,a5)
q=this.ex(B.c.aB(q*m),180,a4)
l=s===B.a0
k=s===B.L
j=a1.b.p(0,"shadows")&&a3!=="off"
C:{p="high"===a3
i=0
if(p){i=j?3:0
break C}if("standard"===a3){i=j?2:0
break C}if("off"===a3)break C
if(j)if(l)i=3
else i=k?2:1
break C}D:{h=1024
if(p){p=h
break D}if("standard"===a3){p=768
break D}if(l)p=h
else p=k?768:512
break D}E:{if("msaa4"===a){h=4
break E}if("msaa2"===a||"auto"===a){h=2
break E}h=1
break E}g=a0==="linear"?B.eL:B.aU
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.eW
break F}if("errors"===b){c=B.cd
break F}c=B.eX
break F}return new A.ia(a1,r,q,h,g,i,p,f,e,d,c)},
ex(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.km.prototype={}
A.qC.prototype={
n9(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b4
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b4
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.km(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aK()*0.1,0.9+s.aK()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aK()*0.15
p.e=(0.6+s.aK()*2.8)/0.343
p.b=16-b*11+s.aK()*6}}}
A.kP.prototype={
v(){return"RendererBackendKind."+this.b}}
A.fR.prototype={
v(){return"RendererBackendState."+this.b}}
A.qP.prototype={}
A.kQ.prototype={
gE(){return this.a}}
A.qO.prototype={
io(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
B(){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"backend",p.a)
o.k(0,"profile",p.b)
o.k(0,"buildId",p.c)
o.k(0,"capabilities",p.d)
s=p.e
r=s!=null
o.k(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.k(0,"fallback",!1)
q=p.Q
if(q!=null)o.k(0,"selection",q)
if(r)o.k(0,"rendererSha",s)
s=p.f
if(s!=null)o.k(0,"gameSha",s)
s=p.r
if(s!=null)o.k(0,"sdkVersion",s)
s=p.w
if(s!=null)o.k(0,"lockfileDigest",s)
s=p.x
if(s!=null)o.k(0,"projectVersion",s)
return o}}
A.qQ.prototype={
cU(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
h2(a,b){var s,r,q,p,o
for(s=A.ah(this.a.d,t.rO),r=A.D(s).i("eS<1>"),s=new A.eS(s,r),s=new A.aD(s,s.gt(0),r.i("aD<a2.E>")),r=r.i("a2.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.rD.prototype={}
A.cC.prototype={
v(){return"ShaderDebugMode."+this.b},
glo(){switch(this.a){case 0:var s="Standard Shaded (Off)"
break
case 1:s="Base Albedo Only"
break
case 2:s="World Normal Vectors"
break
case 3:s="Roughness Channel"
break
case 4:s="Metallic Channel"
break
case 5:s="Ambient Occlusion Only"
break
case 6:s="Geometric Wireframe"
break
default:s=null}return s}}
A.dw.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.eb.prototype={
gfW(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aM(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aM(r,2)
else return B.c.aM(r,3)}},
gE(){return this.a}}
A.rE.prototype={
gbk(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bj,p)
s=B.bj[p]
p=this.f
p===$&&A.q()
r=A.D(p)
q=r.i("G<1>")
p=A.H(new A.G(p,r.i("l(1)").a(new A.rH(s)),q),q.i("n.E"))
return p},
gcF(){var s,r=this.gbk(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mM(){var s,r,q,p,o
if(this.b===4)this.e=B.aI
else for(s=this.gbk(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mK(){var s,r,q,p
this.e=B.aI
s=this.f
s===$&&A.q()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
G(a){var s,r,q=this.f
q===$&&A.q()
s=A.D(q)
r=A.bx(new A.G(q,s.i("l(1)").a(new A.rG(a)),s.i("G<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aT(a){var s,r,q=this.f
q===$&&A.q()
s=A.D(q)
r=A.bx(new A.G(q,s.i("l(1)").a(new A.rF(a)),s.i("G<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rH.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:21}
A.rG.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.rF.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.bM.prototype={
v(){return"SleepQuality."+this.b}}
A.bC.prototype={
v(){return"SleepLocation."+this.b}}
A.fW.prototype={
gai(){return this.a}}
A.o3.prototype={
ek(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.M(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.M(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.o4.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:104}
A.o5.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:105}
A.ke.prototype={
v(){return"InteractionType."+this.b}}
A.f4.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.tr.prototype={}
A.f3.prototype={}
A.jH.prototype={}
A.pk.prototype={}
A.po.prototype={
e8(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.V(p,new A.pp())
return p},
kG(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.n8
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga_(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gZ(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.f3(B.aK,r)
s=r.a
o=B.a.gZ(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gZ(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.f3(B.dY,r)
return new A.f3(B.bS,r)},
jF(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jH(e,!1,B.n7,null)
s=p.d===c
r=this.kG(p,d)
q.nc(e)
return new A.jH(e,s,r,r.a===B.aK&&s?'The world says "'+d.c+'". The entry says "'+B.a.gZ(p.c).q(0)+'".':null)},
lg(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aK)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.pk(B.a.gZ(s.c).q(0)+" but "+A.v(a.f))}}
A.pp.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:12}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qT.prototype={}
A.cW.prototype={}
A.qU.prototype={
gel(){var s=B.bn.h(0,this.a)
return s==null?0:s},
i4(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.B)s=q.e
else s=!0
if(s)return B.cX
r=A.xh(b)
s=q.c
B.a.N(s)
B.a.M(s,r)
B.a.N(q.d)
q.a=B.aG
q.b=0
q.e=!1
return A.c([B.eE],t.xB)},
dw(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.B||a===0)return B.cX
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.B))break
A:{q=l.a
p=B.bn.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a1)l.k5(s)
p=l.b
o=B.bn.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cW())
if(q===B.a1){l.a=B.B
l.b=0
l.e=!0
B.a.l(s,B.eD)}else{p=q.a+1
if(!(p<7))return A.d(B.cV,p)
l.a=B.cV[p]
l.b=0
B.a.l(s,new A.cW())}}}return A.ah(s,t.F3)},
B(){var s=this,r=t.N
return A.M(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ah(s.c,r),"extinguishedMantles",A.ah(s.d,r),"completed",s.e],r,t.z)},
k5(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aP(l.b/l.gel()*A.ah(s,r).length),0,A.ah(s,r).length)
p=l.d
for(;;){o=A.aA(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aA(s,!1,r)
o.$flags=3
n=o
o=A.aA(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cW())}}}
A.k3.prototype={
gep(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gli(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
ej(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.S("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
hk(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.S("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.f1.prototype={
B(){var s=this
return A.M(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)},
gai(){return this.a}}
A.tl.prototype={
fU(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aX(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.v6.prototype={
$0(){var s,r,q=this.a,p=q===2||q===5||q===8||q===11||q===14||q===16||q===18||q===19||q===20
if(p){s=(this.b^q*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
r=B.c.D(B.c.D(0.25+0.65*Math.pow(Math.sin(q*3.141592653589793/7),2)*(0.6+0.4*(q/21)),0.2,1)+(((s^s>>>16)&255)/255-0.5)*0.08,0.2,0.98)
if(q===20)r=0.98}else r=0
return new A.f1(q,p,A.AG(B.c.aM(r,2)),A.AG(B.c.aM(12-(q-1)*0.11000000000000001,2)))},
$S:106}
A.oy.prototype={
lQ(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.de(a.a+":"+a.c),q=t.E,r=new A.aD(r,r.gt(0),q.i("aD<Y.E>")),q=q.i("Y.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.c.aB((l+(k-l)*(s/2147483647))*60)
n=B.c.fE(l*60)
m=B.c.aP(k*60)
return(n<=m?B.d.D(o,n,m):B.d.D(o,0,1439))/60},
lC(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
kx(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.oz.prototype={
$2(a,b){var s,r=B.d.H(a.gai(),b.gai())
if(r!==0)return r
s=B.c.H(a.gaR(),b.gaR())
return s!==0?s:J.y3(a.gE(),b.gE())},
$S:32}
A.k1.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.lC(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
if(s.lQ(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
gll(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return s},
B(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return A.M(["delivered",s],t.N,t.z)}}
A.ox.prototype={
$1(a){return this.a.kx(A.p(a))!=null},
$S:3}
A.q5.prototype={
aQ(a,b){var s=this.b
if(s.R(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
lP(a){return this.aQ(a,null)},
ki(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("L<1,2>")
k=A.H(new A.L(k,j),j.i("n.E"))
B.a.V(k,new A.q7())
j=t.N
k=A.wF(k,j,j)
s=this.b
r=A.o(s).i("L<1,2>")
s=A.H(new A.L(s,r),r.i("n.E"))
B.a.V(s,new A.q8())
s=A.wF(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("L<1,2>")
q=A.H(new A.L(q,p),p.i("n.E"))
B.a.V(q,new A.q9())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.M(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.M(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.q7.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q8.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q9.prototype={
$2(a,b){var s=t.gJ
return B.b.H(s.a(a).a,s.a(b).a)},
$S:109}
A.cK.prototype={
B(){var s=this
return A.M(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bz.prototype={
B(){var s=this
return A.M(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.qp.prototype={
e6(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aQ("ashworth.compact","accepted"))B.a.l(r,B.kJ)
if(q.aQ(s,"taken"))B.a.l(r,B.kN)
else if(q.aQ(s,"left"))B.a.l(r,B.kK)
if(q.aQ("sylvia.certificate","granted"))B.a.l(r,B.kM)
if(q.aQ("residue.coal","cellar"))B.a.l(r,B.kI)
if(q.aQ("telegram.08","read"))B.a.l(r,B.kH)
if(q.aQ("truth.shawl","home"))B.a.l(r,B.kG)
if(q.aQ("sowerby.paraffin","received"))B.a.l(r,B.kL)
if(q.aQ("inspector.proclamation","acknowledged"))B.a.l(r,B.kF)
return r},
hv(a){var s=this.e6(),r=A.D(s),q=r.i("G<1>")
s=A.H(new A.G(s,r.i("l(1)").a(new A.qq(a)),q),q.i("n.E"))
return s}}
A.qq.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:41}
A.rO.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fY(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.k9(q,r.b))}s=A.fY(e.r)
q=A.fY(e.w)
p=A.fY(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.L(n,A.o(n).i("L<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gn()
j.push(A.M(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.L(m,A.o(m).i("L<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.L(m,A.o(m).i("L<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.M(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
k9(a,b){var s,r=A.fY(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fY(q.bG(0,new A.rP(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fY(s.bG(0,new A.rQ(),t.S,t.z)))
return r}}
A.rP.prototype={
$2(a,b){return new A.N(A.f(a),t.BX.a(b).B(),t.pr)},
$S:111}
A.rQ.prototype={
$2(a,b){return new A.N(A.f(a),t.vw.a(b).B(),t.pr)},
$S:112}
A.f0.prototype={
B(){return A.M(["hour",this.a,"order",this.b],t.N,t.S)},
gaR(){return this.a}}
A.f_.prototype={
B(){return A.M(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaR(){return this.a}}
A.it.prototype={
B(){var s=t.N
return A.M(["field",this.a,"value",this.b],s,s)}}
A.ln.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.M(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gai(){return this.c}}
A.eQ.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gX(s))q.k(0,"effects",s)
return q},
gE(){return this.a}}
A.d1.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gX(s))q.k(0,"when",s)
return q},
gE(){return this.a}}
A.rN.prototype={}
A.ie.prototype={
gE(){return this.a},
gai(){return this.c},
gaR(){return this.d}}
A.r_.prototype={
$1(a){return typeof a!="string"},
$S:7}
A.r0.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.S("screenplay event "+a+" is invalid",null,null))
return s},
$S:24}
A.kW.prototype={
gE(){return this.a},
gai(){return this.b}}
A.kT.prototype={}
A.kU.prototype={
gE(){return this.a}}
A.kV.prototype={
gE(){return this.a}}
A.rR.prototype={
bs(){var s=0,r=A.bh(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bs=A.bi(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.ae(A.aS(A.a(A.a(i.window).fetch("res/text.json")),h),$async$bs)
case 6:n=a1
g=t.N
s=7
return A.ae(A.aS(A.a(n.text()),g),$async$bs)
case 7:m=a1
l=A.GD(m)
f=J.aT(l,"broadcasts")
f.toString
e=t.P
o.a=e.a(f)
f=J.aT(l,"visitors")
f.toString
o.b=e.a(f)
f=J.aT(l,"vocabulary")
f.toString
o.c=e.a(f)
f=J.aT(l,"documents")
f.toString
e.a(f)
f=J.aT(l,"street")
f.toString
e.a(f)
f=J.aT(l,"unverifiables")
f.toString
o.f=e.a(f)
f=J.aT(l,"nights")
f.toString
e.a(f)
f=J.aT(l,"endings")
f.toString
o.w=e.a(f)
f=J.aT(l,"records")
f.toString
o.x=e.a(f)
f=J.aT(l,"cues")
f.toString
e.a(f)
f=J.aT(l,"claims")
f.toString
o.z=e.a(f)
f=t.f
if(f.b(J.aT(l,"reactions"))){d=J.aT(l,"reactions")
if(d==null)d=f.a(d)
d=A.aO(d,g,t.z)}else d=A.m(g,t.z)
o.Q=e.a(d)
if(f.b(J.aT(l,"variants"))){d=J.aT(l,"variants")
if(d==null)d=f.a(d)
d=A.aO(d,g,t.z)}else d=A.m(g,t.z)
o.as=e.a(d)
if(f.b(J.aT(l,"residues"))){d=J.aT(l,"residues")
f=d==null?f.a(d):d
f=A.aO(f,g,t.z)}else f=A.m(g,t.z)
o.at=e.a(f)
s=8
return A.ae(A.aS(A.a(A.a(i.window).fetch("res/story_script.json")),h),$async$bs)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.ae(A.aS(A.a(k.text()),g),$async$bs)
case 11:i=a.Dm(a1)
o.ax=i
o.ay=A.Cp(i)
case 10:q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ak(b)
i=A.v(j)
throw A.b("Failed to load text.json: "+i)
s=5
break
case 2:s=1
break
case 5:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$bs,r)},
hu(a){var s,r,q,p=this.a
p===$&&A.q()
s=p.h(0,B.d.q(a))
if(t.f.b(s)){p=s.gJ().cX(0,new A.rS())
r=p.$ti
q=t.N
return A.wF(new A.cy(p,r.i("N<e,e>(1)").a(new A.rT()),r.i("cy<1,N<e,e>>")),q,q)}return null},
e7(a,b){var s=this.hu(a)
return s==null?null:s.h(0,b)},
hy(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.q()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.O(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.m(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.p(i.b))}B.a.l(p,new A.eQ(A.p(m.h(0,"id")),A.p(m.h(0,"label")),A.p(m.h(0,"reply")),A.aW(k,n,n)))}if(p.length<2)return g
return new A.ln(r,a,b,c,d,A.ah(p,t.Y))},
hx(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.q()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.q(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.af(p)||o!==B.c.af(o))return n
return new A.f0(B.c.af(p),B.c.af(o))},
hw(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.q()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.q(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.af(p)||typeof o!="string"||typeof n!="string")return m
return new A.f_(B.c.af(p),o,n)},
ne(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.q()
b4=new A.L(b4,A.o(b4).i("L<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.ds(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.p(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hx(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hw(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.q()
b4=new A.ag(b4,b4.r,b4.e,A.o(b4).i("ag<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hy(A.p(d.h(0,"visitor")),B.c.af(A.a6(d.h(0,"day"))),A.p(d.h(0,"tier")),B.c.af(A.a6(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.q()
b4=new A.ag(b4,b4.r,b4.e,A.o(b4).i("ag<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.p(r.b))}s=A.p(d.h(0,"id"))
b2.k(0,s,new A.d1(s,A.p(d.h(0,"target")),A.p(d.h(0,a2)),A.aW(b,a5,a5)))}b4=a1.at
b4===$&&A.q()
b4=new A.L(b4,A.o(b4).i("L<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.q()
b4=new A.L(b4,A.o(b4).i("L<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.O(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.it(A.p(a0.h(0,"field")),A.p(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rO(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.rS.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:114}
A.rT.prototype={
$1(a){t.AC.a(a)
return new A.N(A.p(a.a),A.p(a.b),t.q)},
$S:115}
A.jp.prototype={
bE(a,b,c){var s=B.b.ba(a),r=B.b.ba(c)
if(r.length===0)return""
if(b||this.a===B.bU)return s.length===0?r:s+": "+r
if(this.a===B.bT)return r
return s.length===0?r:s+": "+r},
fV(a,b){return this.bE(a,!1,b)}}
A.wv.prototype={}
A.cI.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dL.prototype={
bZ(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dL(q,p,o,n,m)},
l8(a){var s=null
return this.bZ(s,s,s,a,s)},
le(a){var s=null
return this.bZ(s,s,s,s,a)},
l4(a){var s=null
return this.bZ(s,s,a,s,s)},
l2(a){var s=null
return this.bZ(s,a,s,s,s)},
kK(a){var s=null
return this.bZ(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.M(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mH.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:116}
A.mF.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:36}
A.mG.prototype={
$0(){return A.h(B.ho)},
$S:6}
A.mS.prototype={
bM(a,b){var s,r=this,q=r.e.fV(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.b4(q)
A.f(A.a(v.G.window).setTimeout(A.A0(new A.mU(r)),7000))},
b4(a){var s,r,q=this
if(!q.c||B.b.ba(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.f(A.a(v.G.window).setTimeout(A.A0(new A.mT(q,s)),4200))}}
A.mU.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:118}
A.mT.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.cs.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cJ.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dc.prototype={
v(){return"AudioReverbMode."+this.b}}
A.db.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dM.prototype={
cE(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dM(r,q,p,a==null?s.e:a)},
l0(a){return this.cE(null,null,a,null)},
kR(a){return this.cE(null,a,null,null)},
l6(a){return this.cE(null,null,null,a)},
kQ(a){return this.cE(a,null,null,null)},
B(){var s=this
return A.M(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.n5.prototype={
$1$2(a,b,c){return B.a.b_(c.i("n<0>").a(a),new A.n6(b,c),new A.n7(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:119}
A.n6.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.n7.prototype={
$0(){return A.h(A.S("unsupported audio option: "+A.v(this.a),null,null))},
$S:6}
A.nw.prototype={
n8(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.H.fV(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nz.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nD.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nC.prototype={
$1(a){var s=A.eO(A.p(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.nB.prototype={
$1(a){A.p(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dT.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dU.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gkc(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.ba(s.a).length===0||B.b.ba(s.c).length===0)throw A.b(B.hb)
if(s.e===B.c4&&s.b!==B.c3)throw A.b(B.fH)},
gE(){return this.a}}
A.nF.prototype={
lA(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cZ(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bD(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.q()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cU(o+c,n)
l=new A.cU(s+p,n)
k=s-p
j=new A.cU(k,r-c)
i=new A.cU(k-c,r)
h=new A.cU(q-p,r)
g=new A.cU(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.eR(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eR(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aY(a,b,c,d,e,f,g,h,i){return this.bD(a,b,c,d,e,!0,f,g,h,i)},
lp(a,b,c,d,e,f,g,h,i){return this.bD(a,b,14,c,d,e,f,g,h,i)},
lu(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.q()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ej()
s.bO(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aK()-0.5)*8
l=s.aK()
k=s.aK()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fN(a,b,c,d,e){var s,r,q=this.b
q===$&&A.q()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eQ(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eQ(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.v(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
ls(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.q()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a6(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aY("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
q.save()
q.translate(s-p*0.5+24,r)
q.rotate(-0.07)
q.fillStyle="#d32f2f"
q.fillRect(-12,-12,24,24)
q.fillStyle="#f5f0e6"
q.font='bold 11px "Cinzel", sans-serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText("E",0,1)
q.restore()
q.fillStyle="#f5f0e6"
q.font='bold 14px "Cinzel", serif'
q.textAlign="center"
q.textBaseline="middle"
q.shadowColor="rgba(0, 0, 0, 0.85)"
q.shadowBlur=4
q.fillText(a.toUpperCase(),s+12,r)
q.restore()},
lr(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aY(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.q()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a6(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bD(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gn0()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.kb(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bq(i,0,new A.nG(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aP((a5+a2-a1)/a2))
d1=d4.f
c7.lA(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.D(c7.e,0,a7)
c7.e=j
a8=Math.min(c,j+a6)
l.save()
l.beginPath()
j=a0*0.5
l.rect(p-j-12,a3-16,a0+24,Math.max(1,a5+20))
l.clip()
l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="bottom"
l.fillText("YOUR RESPONSE",p,a3-4)
l.restore()
for(a9=c7.e,g=a0-72,f=c7.d,c=a1*0.5,b0=d4.e;a9<a8;a9=b2){if(!(a9>=0&&a9<i.length))return A.d(i,a9)
b1=i[a9]
b2=a9+1
b3=a3+(a9-c7.e)*a2+c
b4=d1===a9
b5=b0===a9
b6=!b4
b7=p+(!b6||b5?18:0)
b8=b7-j
b9=Math.max(a1,40)
B.a.l(f,new A.fr("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aY(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fN(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bR(b1,g),c1+22,b3)
l.restore()}l.restore()
if(a7>0){l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="middle"
if(c7.e>0)l.fillText("\u25b2 MORE",p+j-28,a3-8)
if(c7.e<a7)l.fillText("\u25bc MORE",p+j-28,a4+8)
l.restore()}}else if(d1&&d4.b.length!==0){c3=s?104:118
c4=s?28:30
c5=p+j-c3*0.62
c6=o+g-c4*0.72
B.a.l(c7.d,new A.fr("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aY("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
lq(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bD(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.q()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bR("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
lt(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
if(c7<=0.001)return
s=Math.sin(c7*3.141592653589793*0.5)
r=Math.min(c9*0.92,860)
q=Math.min(c8*0.88,620)
p=c9+r*0.6
o=p+(c9*0.5-p)*s
n=c8*0.5
c7=c0.b
c7===$&&A.q()
c7.save()
c7.fillStyle="rgba(10, 8, 12, "+A.v(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aY(c2,3,18,c1,q,-0.025,r,o,n)
c0.lu(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c0.aY(c3,2,8,c2,42,-0.06,Math.min(r*0.85,560),o,k)
c7.save()
c7.fillStyle="#f5f0e6"
c7.font='bold 16px "Cinzel", serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.shadowColor="rgba(0, 0, 0, 0.85)"
c7.shadowBlur=4
c7.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
c7.restore()
j=r-60
i=j/5
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bj[g]
e=d0.b===g
d=l+i*(g+0.5)
c=e?c4:c5
b=e?c3:c6
c0.bD(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
switch(f.a){case 0:c="[1] PBR BRDF"
break
case 1:c="[2] SHADOWS"
break
case 2:c="[3] DETAIL"
break
case 3:c="[4] POST / FOG"
break
case 4:c="[5] PASSES"
break
default:c=null}c7.save()
a=e?"#0c0a0e":c3
c7.fillStyle=a
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(c,d,h)
c7.restore()}a0=h+36
if(d0.b===4){a1=a0+70+20
c0.aY(c4,2.5,10,c5,140,-0.02,r-80,o,a1)
c7.save()
c7.fillStyle="#c49a45"
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a1-35)
c7.fillStyle="#f5f0e6"
c7.font='bold 22px "Cinzel", serif'
c7.shadowColor="rgba(0, 0, 0, 0.85)"
c7.shadowBlur=6
c7.fillText(d0.e.glo().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbk()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aP((a4+52-44)/52))
a6=Math.max(0,a2.length-a5)
l=B.d.D(c0.f,0,a6)
c0.f=l
a7=Math.min(a2.length,l+a5)
c7.save()
c7.beginPath()
l=r*0.5
c7.rect(o-l+24,a0,r-48,a4)
c7.clip()
for(g=c0.f,a8=r-80,j=a8*0.5;g<a7;++g){if(!(g>=0&&g<a2.length))return A.d(a2,g)
a9=a2[g]
e=d0.c===g
b0=a0+(g-c0.f)*52+22
b1=o+(e?12:0)
c=e?c5:c1
b=e?c4:c6
c0.bD(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
if(e)c0.fN(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c=a9.e
b=c?122:250
c7.fillText(c0.bR(a9.b.toUpperCase(),a8-b),b1-j+b2,b0)
b3=b1+j-20
if(c){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.lp(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfW(),c,b0)}else{b5=b3-80-80
c7.fillStyle="#0c0a0e"
c=b5-80
b=b0-4
c7.fillRect(c,b,160,8)
b6=a9.f
b7=a9.r
b8=B.c.D((a9.y-b6)/(b7-b6),0,1)
a=e?c4:c2
c7.fillStyle=a
b9=160*b8
c7.fillRect(c,b,b9,8)
c7.fillStyle="#f5f0e6"
c7.fillRect(c+b9-3,b0-7,6,14)
c7.fillStyle="#8c887e"
c7.font='10px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(B.c.aM(b6,1)+" ",c-4,b0)
c7.textAlign="left"
c7.fillText(" "+B.c.aM(b7,1),b5+80+4,b0)
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 13px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(a9.gfW(),b3,b0)}c7.restore()}c7.restore()
if(a6>0){c7.save()
c7.fillStyle="#ffd54f"
c7.font='bold 10px "Cinzel", serif'
c7.textAlign="right"
c7.textBaseline="middle"
if(c0.f>0)c7.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c0.f<a6)c7.fillText("\u25bc SCROLL DOWN",o+l-28,a3+8)
c7.restore()}}c7.save()
c7.fillStyle="#8c887e"
c7.font='12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Coarse  \u2022  [Q / E] Fine (1/5)  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,n+m-24)
c7.restore()
c7.restore()},
eR(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.q()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eQ(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.q()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
kb(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a6(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bR(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.q()
s=A.a6(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.q()
p=A.a6(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.I(r,0,s-1)}return q?"...":r+"..."}}
A.nG.prototype={
$2(a,b){var s
A.bv(a)
A.p(b)
s=this.a.b
s===$&&A.q()
return Math.max(a,A.a6(A.a(s.measureText(b)).width))},
$S:120}
A.fv.prototype={
gks(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aH(r)
o.k(0,q,p.gO(r)?"":p.gU(r))}return o},
bz(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.M(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.bv(r)
q=n.h(0,i)
q.toString
A.bv(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fw(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.bv(r)
q=n.h(0,i)
q.toString
A.bv(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gks()
return A.fw(l,null,m,r,p,o,s,q)},
dC(a){var s=null
return this.bz(a,s,s,s,s,s)},
kX(a){var s=null
return this.bz(s,s,s,a,s,s)},
kY(a){var s=null
return this.bz(s,s,s,s,a,s)},
kU(a){var s=null
return this.bz(s,a,s,s,s,s)},
kV(a){var s=null
return this.bz(s,s,a,s,s,s)},
lf(a){var s=null
return this.bz(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fq)
p=this.r
if(p.gJ().L(0,new A.nV()))throw A.b(B.hh)
if(p.gJ().L(0,new A.nW()))throw A.b(B.fY)
p=p.gaD()
o=A.o(p)
s=o.i("hC<n.E,e>")
r=s.i("G<n.E>")
q=A.H(new A.G(new A.hC(p,o.i("n<e>(n.E)").a(new A.nX()),s),s.i("l(n.E)").a(new A.nY()),r),r.i("n.E"))
if(A.hS(q,A.D(q).c).a!==q.length)throw A.b(B.ft)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aA(r.b,!0,p))}return A.M(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nV.prototype={
$1(a){t.yx.a(a)
return J.wu(a.b,new A.nU(a))},
$S:37}
A.nU.prototype={
$1(a){var s
A.p(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.yf(a)
else s=!1
return s},
$S:3}
A.nW.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.wu(a.b,B.dC.gaq(B.dC))},
$S:37}
A.nX.prototype={
$1(a){return t.a.a(a)},
$S:184}
A.nY.prototype={
$1(a){return A.p(a).length!==0},
$S:3}
A.nT.prototype={
$1(a){return typeof a=="string"},
$S:7}
A.dS.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ey.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dd.prototype={}
A.jI.prototype={
bW(a){var s=this
if(!s.a.r.R(a))return new A.dd(B.c0,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.ec},
kA(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aQ
if(!A.yf(a)){p.c=p.b=null
return new A.dd(B.c2,B.dD.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.y4(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dd(B.aR,a+" is already bound to "+s)}return p.iy(a)},
dW(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aQ
switch(a.a){case 2:m.c=m.e=m.d=null
return B.ed
case 1:s=A.x7(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.xt(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xH(r,k))
m.a=m.a.dC(s)
break
case 0:s=A.x7(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.l4(p,1,null,A.D(p).c)
o=p.$ti
p=new A.aD(p,p.gt(0),o.i("aD<a2.E>"))
o=o.i("a2.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xH(r,k)}else{r=s.h(0,j)
r.toString
r=A.xt(A.xH(r,k),q)}s.k(0,j,r)
m.a=m.a.dC(s)
break}m.c=m.e=m.d=null
return B.bZ},
iy(a){var s,r,q=this,p=q.b
if(p==null)return B.aQ
s=A.x7(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.xt(r,a))
q.a=q.a.dC(s)
q.b=null
return B.bZ}}
A.hx.prototype={
ig(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jI(f.w)
s=f.b
s.className=A.p(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.nA(a,B.em,1)))
A.a(s.appendChild(A.A(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.A(a,"div",c,e)
f.eu(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eu(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d5(a,r,"invertX","Invert horizontal look")
f.d5(a,r,"invertY","Invert vertical look")
f.d5(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.A(a,"div",c,e)
for(p=B.jG.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fw(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mE(l)?"unbound":J.y6(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dV(a,new A.b3("settings.controls.bind."+m,B.c3,n,h,B.n),new A.nR(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.A(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.A(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.du()
A.a(s.appendChild(A.dV(a,B.en,new A.nS(f),e)))},
h9(a){var s=this.x
s===$&&A.q()
if(s.b==null)return
a.preventDefault()
this.eU(this.x.kA(A.p(a.code)))},
eU(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aR?B.er:B.n
p=o.Q.h(0,r)
if(p!=null)A.wx(p,q)}n=a.a
if(n===B.aR)o.jS()
else if(n===B.c1){n=o.x
n===$&&A.q()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.du()}else{o.d8()
o.ax=null}},
jS(){var s,r,q,p,o
this.d8()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.iD[r]
p=A.E(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dV(p,new A.b3("settings.controls.resolve."+o,B.D,o,"resolve key binding conflict",B.n),new A.nQ(this,q),null)))}},
d8(){var s,r=this.at
if(r==null)return
while(A.E(r.firstChild)!=null){s=A.E(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
du(){var s,r,q,p
for(s=this.Q,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.q()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mE(p)?"unbound":J.y6(p," / ")
r.textContent=q
A.wx(r,B.n)}},
eu(a,b,c,d,e,f){var s,r=A.A(a,"label","setting-row",null)
A.a(r.appendChild(A.A(a,"span",null,d)))
s=A.BL(a,new A.b3("settings.controls."+c,B.ep,d,null,B.n),f,e,new A.nO(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d5(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.BM(a,new A.b3("settings.controls."+c,B.eq,d,null,B.n),!1,new A.nP(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eS(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdP(a){this.f=t.pf.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.nR.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.q()
s=n.bW(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c_){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wx(q,B.c4)}p.d8()
return null},
$S:0}
A.nS.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nQ.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.q()
return s.eU(r.dW(this.b))},
$S:0}
A.nO.prototype={
$1(a){var s=this.a,r=s.w
s.eS(this.b==="horizontalSensitivity"?r.kV(a):r.lf(a))},
$S:123}
A.nP.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kX(a)
break A}if("invertY"===q){s=r.w.kY(a)
break A}s=r.w.kU(a)
break A}r.eS(s)},
$S:8}
A.nZ.prototype={
ih(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.A(s,"h1","journal-title","credits")))
r=A.A(s,"p","credits-body",null)
p.f!==$&&A.aZ()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.A(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.A(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.V(new A.o_(p)))
A.a(o.appendChild(q))}}
A.o_.prototype={
$1(a){return this.a.a9()},
$S:2}
A.o7.prototype={
ij(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.A(a,o,"door-speaker",p)
q.b!==$&&A.aZ()
q.b=s
r=A.A(a,o,"door-line",p)
q.c!==$&&A.aZ()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.A(a,o,"door-choice-status",p)
q.d!==$&&A.aZ()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.A(a,o,"door-cite-list",p)
q.f!==$&&A.aZ()
q.f=r
s=A.A(a,o,"door-cite-result",p)
q.r!==$&&A.aZ()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.A(a,"button","door-continue","continue")
q.e!==$&&A.aZ()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.V(new A.o8(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.V(new A.o9(q,a)))
A.a(A.E(a.body).appendChild(n))},
ef(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.q()
s.textContent=a
s=r.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,b)
s=r.d
s===$&&A.q()
s.textContent=A.yi(B.b6)
s=r.e
s===$&&A.q()
A.a(s.style).display="none"
s=r.f
s===$&&A.q()
s.textContent=""
s=r.r
s===$&&A.q()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
eg(a,b){var s,r=this,q=r.c
q===$&&A.q()
q.textContent=B.H.bE("",!0,a)
q=r.d
q===$&&A.q()
q.textContent=""
q=r.e
q===$&&A.q()
q=A.a(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.q()
s.textContent=""},
hT(a){return this.eg(a,!1)},
hV(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.q()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.q()
s.textContent=A.yi(r)},
eh(a,b){var s=this.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.q()
s.textContent=""
s=this.e
s===$&&A.q()
A.a(s.style).display=""},
hS(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.q()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.u)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.a(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.V(new A.oa(p,this)))
A.a(s.appendChild(n))}},
h1(){var s,r=this
r.y=!1
s=r.d
s===$&&A.q()
s.textContent=""
s=r.f
s===$&&A.q()
s.textContent=""
s=r.r
s===$&&A.q()
s.textContent=""
s=r.a
s.className="door"
s.setAttribute("hidden","")},
sme(a){this.w=t.Z.a(a)},
smd(a){this.x=t.vR.a(a)}}
A.o8.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:39}
A.o9.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.p(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.q()
if(A.p(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.q()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.f(p.length);++o){n=A.E(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.E(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gU(r)||!B.a.p(r,m)){a.preventDefault()
B.a.gZ(r).focus()}}else if(m===B.a.gZ(r)||!B.a.p(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:126}
A.oa.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:39}
A.od.prototype={
ik(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.A(s,"h1","journal-title",null)
o.f!==$&&A.aZ()
o.f=r
q=A.A(s,"div","ending-copy",null)
o.r!==$&&A.aZ()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.A(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.V(new A.oe(o)))
A.a(n.appendChild(p))},
hU(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.q()
s.textContent=a.a.b
s=m.r
s===$&&A.q()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bH()},
smi(a){this.w=t.Z.a(a)}}
A.oe.prototype={
$1(a){var s=this.a
s.a9()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.oH.prototype={
bt(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aA(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
N(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
n7(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lN(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fz()
return!0}return!1}if(a==="Space"){s=B.a.dK(l,new A.oI())
if(s!==-1){n.ci(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.S(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.S(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.ci(q)
return!0}}if(B.b.T(a,"Digit")){p=A.ds(B.b.aN(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.ds(B.b.aN(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.ci(o)
return!0}return!1},
ci(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
fz(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lO(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fz()
return!0}this.ci(a.b)
return!0},
smc(a){this.y=t.dt.a(a)},
smh(a){this.z=t.Z.a(a)}}
A.oI.prototype={
$1(a){A.p(a)
return B.b.p(a.toLowerCase(),"silent")||B.b.p(a,"...")},
$S:3}
A.oJ.prototype={}
A.di.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cL.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cM.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dj.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dh.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dk.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dg.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fD.prototype={
aO(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.wy(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
lb(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,a,s)},
la(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,a,s,s)},
kN(a){var s=null
return this.aO(s,s,a,s,s,s,s,s,s,s,s)},
kW(a){var s=null
return this.aO(s,s,s,s,a,s,s,s,s,s,s)},
l3(a){var s=null
return this.aO(s,s,s,s,s,s,a,s,s,s,s)},
lc(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,s,a)},
kZ(a){var s=null
return this.aO(s,s,s,s,s,a,s,s,s,s,s)},
kM(a){var s=null
return this.aO(s,a,s,s,s,s,s,s,s,s,s)},
l7(a){var s=null
return this.aO(s,s,s,s,s,s,s,a,s,s,s)},
kL(a){var s=null
return this.aO(a,s,s,s,s,s,s,s,s,s,s)},
kS(a){var s=null
return this.aO(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.M(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.oK.prototype={
$1$2(a,b,c){var s
A.AF(c,t.D,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.S("invalid gameplay setting: "+a,null,null))
return B.a.b_(b,new A.oL(s,c),new A.oM(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:127}
A.oL.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oM.prototype={
$0(){return A.h(A.S("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.ct.prototype={
v(){return"GraphicsPreset."+this.b}}
A.e0.prototype={
aX(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.e0(s.a,r,q,p,o,n,m,l,k,j,i)},
dB(a){var s=null
return this.aX(a,s,s,s,s,s,s,s,s,s)},
fI(a){var s=null
return this.aX(s,s,a,s,s,s,s,s,s,s)},
fJ(a){var s=null
return this.aX(s,s,s,s,s,s,a,s,s,s)},
l_(a){var s=null
return this.aX(s,s,s,s,a,s,s,s,s,s)},
l5(a){var s=null
return this.aX(s,s,s,s,s,s,s,a,s,s)},
kT(a){var s=null
return this.aX(s,s,s,a,s,s,s,s,s,s)},
ld(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,s,a)},
l1(a){var s=null
return this.aX(s,s,s,s,s,a,s,s,s,s)},
kP(a){var s=null
return this.aX(s,a,s,s,s,s,s,s,s,s)},
l9(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.p(B.jm,q))throw A.b(A.S("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.iK,q))throw A.b(A.S("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.jq,q))throw A.b(A.S("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.jj,q))throw A.b(A.S("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.js,q))throw A.b(A.S("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.jp,q))throw A.b(A.S("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.jr,q))throw A.b(A.S("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.M(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.oX.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:40}
A.oY.prototype={
$0(){return A.h(B.fN)},
$S:6}
A.oZ.prototype={
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oQ.prototype={}
A.oR.prototype={}
A.hI.prototype={
il(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.A(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.A(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.A(a,"div","settings-grid",m)
r=t.N
n.bd(a,s,"preset","quality preset",A.M(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.bd(a,s,"renderScale","render scale",A.M(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.bd(a,s,"frameTarget","frame target",A.M(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.bd(a,s,"antialiasing","anti-aliasing",A.M(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.bd(a,s,"textureQuality","texture quality",A.M(["high","High","medium","Medium","low","Low"],r,r))
n.bd(a,s,"outputEncoding","output encoding",A.M(["srgb","sRGB display","linear","Linear light"],r,r))
n.bd(a,s,"diagnosticLevel","renderer diagnostics",A.M(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.bd(a,s,"shadowQuality","shadow allocation",A.M(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.A(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.V(new A.oU(n)))
r=n.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.A(a,"span",m,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.A(a,"label",k,m)
r=A.a(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.V(new A.oV(n)))
r=n.y
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.A(a,"span",m,"Model package diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(j.appendChild(s))
r=A.A(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.a(j.appendChild(r))
o=A.A(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.V(new A.oW(n)))
A.a(j.appendChild(o))},
bd(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.L(e,A.o(e).i("L<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.V(new A.oT(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
dk(a){var s
a.C()
this.Q=a
s=this.f
if(s!=null)s.$1(a)},
cj(a,b,c){var s,r,q=this
t.a.a(c)
q.Q=a
s=q.w
r=s.h(0,"preset")
if(r!=null)r.value=a.b.b
r=s.h(0,"renderScale")
if(r!=null)r.value=a.c
r=s.h(0,"frameTarget")
if(r!=null)r.value=a.e
r=s.h(0,"antialiasing")
if(r!=null)r.value=a.f
r=s.h(0,"textureQuality")
if(r!=null)r.value=a.r
r=s.h(0,"outputEncoding")
if(r!=null)r.value=a.w
r=s.h(0,"diagnosticLevel")
if(r!=null)r.value=a.x
s=s.h(0,"shadowQuality")
if(s!=null)s.value=a.y
s=q.x
if(s!=null)s.checked=a.d
s=q.y
if(s!=null)s.checked=a.z
s=q.z
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.Y(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
sdP(a){this.f=t.CA.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.oU.prototype={
$1(a){var s=this.a
s.dk(s.Q.fI(A.Q(s.x.checked)))},
$S:1}
A.oV.prototype={
$1(a){var s=this.a
s.dk(s.Q.l_(A.Q(s.y.checked)))},
$S:1}
A.oW.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a9()},
$S:1}
A.oT.prototype={
$1(a){var s,r=A.p(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.fJ(B.a.aj(B.cU,new A.oS(r)))
break A}if("renderScale"===p){s=q.Q.l5(r)
break A}if("frameTarget"===p){s=q.Q.kT(r)
break A}if("antialiasing"===p){s=q.Q.dB(r)
break A}if("textureQuality"===p){s=q.Q.ld(r)
break A}if("outputEncoding"===p){s=q.Q.l1(r)
break A}if("diagnosticLevel"===p){s=q.Q.kP(r)
break A}if("shadowQuality"===p){s=q.Q.l9(r)
break A}s=q.Q
break A}q.dk(s)},
$S:1}
A.oS.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:40}
A.jq.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.p_.prototype={
ht(a,b,c){if(c)return B.iZ
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jB}}
A.p0.prototype={
im(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.A(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.A(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.A(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.A(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.V(new A.p1(this)))
A.a(p.appendChild(r))}}
A.p1.prototype={
$1(a){return this.a.a9()},
$S:2}
A.px.prototype={
bH(){var s,r=this
r.i8()
s=r.r.a-1
if(s<1)s=1
r.CW=r.eB(r.CW,s)
r.jI()
r.f9()},
iD(){var s,r=this,q=r.a,p=A.A(q,"div","page-turn",null),o=A.A(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.V(new A.py(r)))
s=A.A(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.V(new A.pz(r)))
q=A.A(q,"span","right-day-label",null)
r.Q!==$&&A.aZ()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fq(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.eB(s.CW+a,r)
s.f9()},
eB(a,b){if(a<1)return 1
if(a>b)return b
return a},
jI(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.q()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.q()
s.textContent=""
for(s=l.w.e8(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=B.a.gZ(o.c).q(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.V(new A.pA(l,o,m)))
A.a(k.appendChild(m))}},
f9(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.q()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ag<2>"),n=new A.ag(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.V(r,new A.pB())
j.f8(i,r)
i=j.Q
i===$&&A.q()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.q()
s=A.c([],s)
for(r=new A.ag(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.V(s,new A.pC())
j.f8(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.q()
A.a(i.style).setProperty("width",B.c.aM(k*100,1)+"%")},
f8(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.j3(b[r])))},
j3(a){var s,r,q,p,o,n=A.A(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.eZ(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.eZ(p,!1)
o.className=A.p(o.className)+" margin"
A.a(n.appendChild(o))}return n},
eZ(a,b){var s=b?"hand-line struck":"hand-line",r=A.A(this.a,"div",s,a.q(0))
A.a(r.style).setProperty("--shake",B.c.q(a.b))
return r}}
A.py.prototype={
$1(a){return this.a.fq(-1)},
$S:2}
A.pz.prototype={
$1(a){return this.a.fq(1)},
$S:2}
A.pA.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pB.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.pC.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.cU.prototype={}
A.fr.prototype={
gE(){return this.a}}
A.qe.prototype={
gn0(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.I(s,0,B.c.af(B.c.D(r*q,0,r)))}}
A.i3.prototype={
aV(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.E(this.a.body).appendChild(s))},
bH(){var s,r,q,p,o=this,n=o.b
if(B.b.p(A.p(n.className),"open"))return
s=$.qf
if(s!=null&&s!==o)s.a9()
$.qf=o
r=o.a
o.d=A.E(r.activeElement)
A.pu(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.V(o.gjA())
o.e=q
r.addEventListener("keydown",q)
p=A.zZ(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a9(){var s,r,q=this,p=q.b
if(!B.b.p(A.p(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.qf===q)$.qf=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
h9(a){},
jB(a){A.a(a)
this.h9(a)
if(A.Q(a.defaultPrevented))return
if(A.p(a.code)==="Escape"){a.preventDefault()
this.a9()
return}if(A.p(a.code)==="Tab")this.jZ(a)},
jZ(a){var s,r=A.zZ(this.b)
if(r.length===0)return
s=A.E(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gU(r)||!B.a.p(r,s)){a.preventDefault()
B.a.gZ(r).focus()}}else if(s===B.a.gZ(r)||!B.a.p(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb1(a){this.c=t.Z.a(a)}}
A.bn.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e8.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dq.prototype={
B(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a7(a,b){if(b==null)return!1
return b instanceof A.dq&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e7.prototype={
gfC(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bq},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.D(r),p=q.i("I<1,Z<e,K?>>")
r=A.H(new A.I(r,q.i("Z<e,K?>(1)").a(new A.qk()),p),p.i("a2.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.D(r)
p=q.i("I<1,e>")
r=A.H(new A.I(r,q.i("e(1)").a(new A.ql()),p),p.i("a2.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.qk.prototype={
$1(a){return t.oP.a(a).B()},
$S:129}
A.ql.prototype={
$1(a){return t.wJ.a(a).b},
$S:130}
A.bY.prototype={}
A.qj.prototype={
ha(a){var s,r=this
if(r.a.gfC())return new A.bY(B.a_,r.a,null)
s=r.a
s=new A.e7(B.jl,s.b,a)
r.a=s
return new A.bY(B.dn,s,"pause.resume")},
kn(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gZ(p)
q=r.a.a
q=B.a.aU(q,0,q.length-1)
p=r.a
p=new A.e7(q,p.b,p.c)
r.a=p
return new A.bY(B.dp,p,s.c)}if(q.gfC()&&r.a.b.length===0)return r.cc()
return new A.bY(B.a_,r.a,null)},
cc(){var s=this.a
if(s.a.length===0)return new A.bY(B.a_,s,null)
if(s.b.length!==0)return new A.bY(B.a_,s,null)
this.a=B.bp
return new A.bY(B.dq,B.bp,s.c)},
my(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.bY(B.a_,q.a,null)
s=q.a
r=A.H(s.b,t.wJ)
r.push(a)
s=new A.e7(s.a,r,q.a.c)
q.a=s
return new A.bY(B.dn,s,null)},
ln(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.bY(B.a_,o.a,null)
s=o.a
r=s.b
q=A.D(r)
p=q.i("G<1>")
r=A.H(new A.G(r,q.i("l(1)").a(new A.qm(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e7(s.a,r,q)
o.a=r
return new A.bY(B.kE,r,q)},
iX(a){var s
switch(a.a){case 0:s="pause.resume"
break
case 1:s="settings.visual"
break
case 2:s="settings.visual.first"
break
case 3:s="settings.graphics.first"
break
case 4:s="settings.gameplay.first"
break
case 5:s="settings.controls.first"
break
case 6:s="settings.audio.first"
break
case 7:s="settings.accessibility.first"
break
case 8:s="credits.close"
break
case 9:s="help.close"
break
default:s=null}return s}}
A.qm.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:131}
A.cA.prototype={
v(){return"PauseRootAction."+this.b}}
A.qn.prototype={
bm(a,b,c,d){var s=B.jS.h(0,c)
s.toString
A.a(b.appendChild(A.dV(a,new A.b3(s,B.D,d,null,B.n),new A.qo(this,c),null)))},
smt(a){this.f=t.Z.a(a)},
smv(a){this.r=t.Z.a(a)},
smf(a){this.w=t.Z.a(a)},
smu(a){this.x=t.Z.a(a)},
sml(a){this.y=t.Z.a(a)},
smg(a){this.z=t.Z.a(a)},
sb7(a){this.Q=t.Z.a(a)}}
A.qo.prototype={
$0(){var s,r=this
switch(r.b.a){case 0:s=r.a.f
if(s!=null)s.$0()
break
case 1:s=r.a.r
if(s!=null)s.$0()
break
case 2:s=r.a.w
if(s!=null)s.$0()
break
case 3:s=r.a.x
if(s!=null)s.$0()
break
case 4:s=r.a.y
if(s!=null)s.$0()
break
case 5:s=r.a.z
if(s!=null)s.$0()
break
case 6:s=r.a.Q
if(s!=null)s.$0()
break}},
$S:0}
A.bL.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qB.prototype={
hR(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.H.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.r2.prototype={
ip(a){var s,r,q,p,o,n=this.b
n.className=A.p(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.nA(a,B.el,1)))
A.a(n.appendChild(A.A(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.A(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.j_[r]
p=B.d6.h(0,q)
p.toString
o=B.d5.h(0,q)
o.toString
A.a(s.appendChild(A.dV(a,new A.b3(o,B.D,p,p+" settings",B.n),new A.r3(this,q),null)))}A.a(s.appendChild(A.dV(a,B.ek,new A.r4(this),null)))
A.a(n.appendChild(s))},
smb(a){this.f=t.hQ.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.r3.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.r4.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fV.prototype={
iq(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.v(B.d6.h(0,d))+" settings",a=h.b
a.className=A.p(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.nA(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.as,b,g,B.n),2)))
A.a(a.appendChild(A.A(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.A(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.rt(h)),p=B.a.gu(B.A),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.ji(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.A(a0,"div",e,g)
for(s=s.a(new A.ru(h)),q=B.a.gu(B.A),o=new A.T(q,s,o);o.m();)A.a(j.appendChild(h.jY(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.E)A.a(a.appendChild(h.iB(a0)))
if(d===B.F)A.a(a.appendChild(h.iA(a0)))
if(d===B.Z)A.a(a.appendChild(h.iC(a0)))
i=A.A(a0,"div",e,g)
for(s=t.pz.a(h.gjb()),q=B.a.gu(B.jn),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dV(a0,new A.b3("settings."+o+".reset."+n,B.D,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.rv(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dV(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.D,"reset all settings","restore all settings to defaults",B.es),new A.rw(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dV(a0,new A.b3("settings."+(d==null?f:d)+".back",B.D,"return","return to settings categories",B.n),new A.rx(h),g)))},
iA(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.A(a,"div","settings-grid",j),f=k.d4(a,g,"reducedMotion","reduced motion (system default)"),e=k.d4(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d4(a,g,"captions","non-speech captions"),c=A.A(a,"label",h,j)
A.a(c.appendChild(A.A(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.V(new A.rl(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.A(a,"label",h,j)
A.a(r.appendChild(A.A(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bh[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.V(new A.rm(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.A(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.V(new A.rn(k)))
A.a(g.appendChild(l))
k.ok.M(0,A.M(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d4(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.V(new A.r5(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eb(a){var s,r
this.k4=a
s=this.ok
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.c.q(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a9:r).b}},
iC(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.A(a,"div","settings-grid",l)
m.bc(a,g,"interactionMode","interaction mode",B.bg,t.bK)
m.bc(a,g,"promptDensity","prompt density",B.bk,t.dn)
m.bc(a,g,"textPacing","text pacing",B.bi,t.j_)
m.bc(a,g,"journalLayout","journal layout",B.bb,t.gm)
m.bc(a,g,k,k,B.b5,t.aJ)
m.bc(a,g,"saveFeedback","save feedback",B.bc,t.mx)
m.bc(a,g,"focusLossBehavior","when the window loses focus",B.aB,t.x)
m.bc(a,g,"clockFormat","clock format",B.b8,t.vS)
s=A.A(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.V(new A.ro(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.A(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.V(new A.rp(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.A(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.A(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.V(new A.rq(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.A(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bc(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.AF(f,t.D,"T","_addGameplaySelect")
f.i("F<0>").a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.V(new A.rj(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
i=j.b
h=j.a
A:{if("interactionMode"===h){g=k
break A}if("promptDensity"===h){g=l
break A}if("textPacing"===h){g=m
break A}if("journalLayout"===h){g=n
break A}if("confirmations"===h){g=o
break A}if("saveFeedback"===h){g=p
break A}if("focusLossBehavior"===h){g=q
break A}g=r
break A}i.value=g}s=f.id
if(s!=null)s.checked=a.x
s=f.k1
if(s!=null)s.checked=a.z
s=f.k2
if(s!=null)s.checked=a.Q},
iB(a){var s,r,q=this,p=A.A(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bf[s].b
n.k(0,r,r)}q.ck(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.ba[s].b
n.k(0,r,r)}q.ck(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.b9[s].b
n.k(0,r,r)}q.ck(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.b7[s].b
o.k(0,n,n)}q.ck(a,p,"ducking","voice intelligibility",o)
return p},
ck(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.L(e,A.o(e).i("L<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.V(new A.ra(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
hC(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.L(s,A.o(s).i("L<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eX(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Y===r){s=a.c===B.aH
break A}if(B.F===r){s=a.c===B.a3
break A}if(B.E===r){s=a.c===B.C
break A}s=!1
break A}return s},
jc(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Y===s){r=a===B.aH
break A}if(B.F===s){r=a===B.a3
break A}if(B.E===s){r=a===B.C
break A}r=!1
break A}return r},
jY(a,b){var s=this,r=A.A(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.V(new A.rs(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.A(a,"span",null,b.b)))
return r},
ji(a,b,c,d,e){var s,r,q=this,p=A.A(a,"label","setting-row",null),o=A.A(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.v(e)
n.max=A.v(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.A(a,"output",null,"100%")
n.addEventListener("input",A.V(new A.rr(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aB(e,d))
return p},
ed(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kT
r=B.c.D(b,s.a,s.b)
q.value=B.c.q(r)
p.textContent=""+B.c.aB(r*100)+"%"},
smn(a){this.r=t.DI.a(a)},
smp(a){this.w=t.xl.a(a)},
smo(a){this.x=t.xl.a(a)},
smj(a){this.y=t.DI.a(a)},
smm(a){this.z=t.xl.a(a)},
smx(a){this.Q=t.xl.a(a)},
sms(a){this.as=t.Ci.a(a)},
smr(a){this.at=t.Z.a(a)},
sb7(a){this.ax=t.Z.a(a)},
sma(a){this.ay=t.kC.a(a)},
smk(a){this.ch=t.hq.a(a)},
sm9(a){this.CW=t.Cv.a(a)},
smq(a){this.cx=t.Z.a(a)}}
A.rt.prototype={
$1(a){t.gl.a(a)
return a.d===B.N&&this.a.eX(a)},
$S:16}
A.ru.prototype={
$1(a){t.gl.a(a)
return a.d===B.aj&&this.a.eX(a)},
$S:16}
A.rv.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.rw.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rx.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a9()},
$S:0}
A.rl.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eO(A.p(this.b.value))
r=r.le(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rm.prototype={
$1(a){var s=this.a,r=s.k4.l8(B.a.aj(B.bh,new A.rk(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rk.prototype={
$1(a){return t.mq.a(a).b===A.p(this.a.value)},
$S:36}
A.rn.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.r5.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.l4(r)
break A}if("photosensitivitySafe"===p){s=q.k4.l2(r)
break A}if("captions"===p){s=q.k4.kK(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.ro.prototype={
$1(a){var s=this.a,r=s.k3.kN(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rp.prototype={
$1(a){var s=this.a,r=s.k3.la(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rq.prototype={
$1(a){var s=this.a,r=s.k3.lb(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rj.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kW(B.a.aj(B.bg,new A.rb(r.c)))
break A}if("promptDensity"===p){s=q.k3.l3(B.a.aj(B.bk,new A.rc(r.c)))
break A}if("textPacing"===p){s=q.k3.lc(B.a.aj(B.bi,new A.rd(r.c)))
break A}if("journalLayout"===p){s=q.k3.kZ(B.a.aj(B.bb,new A.re(r.c)))
break A}if("confirmations"===p){s=q.k3.kM(B.a.aj(B.b5,new A.rf(r.c)))
break A}if("saveFeedback"===p){s=q.k3.l7(B.a.aj(B.bc,new A.rg(r.c)))
break A}if("clockFormat"===p){s=q.k3.kL(B.a.aj(B.b8,new A.rh(r.c)))
break A}s=q.k3.kS(B.a.aj(B.aB,new A.ri(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.rb.prototype={
$1(a){return t.bK.a(a).b===A.p(this.a.value)},
$S:134}
A.rc.prototype={
$1(a){return t.dn.a(a).b===A.p(this.a.value)},
$S:135}
A.rd.prototype={
$1(a){return t.j_.a(a).b===A.p(this.a.value)},
$S:136}
A.re.prototype={
$1(a){return t.gm.a(a).b===A.p(this.a.value)},
$S:137}
A.rf.prototype={
$1(a){return t.aJ.a(a).b===A.p(this.a.value)},
$S:138}
A.rg.prototype={
$1(a){return t.mx.a(a).b===A.p(this.a.value)},
$S:139}
A.rh.prototype={
$1(a){return t.vS.a(a).b===A.p(this.a.value)},
$S:140}
A.ri.prototype={
$1(a){return t.x.a(a).b===A.p(this.a.value)},
$S:42}
A.ra.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.l0(B.a.aj(B.bf,new A.r6(r.c)))
break A}if("dynamicRange"===o){s=p.kR(B.a.aj(B.ba,new A.r7(r.c)))
break A}if("reverb"===o){s=p.l6(B.a.aj(B.b9,new A.r8(r.c)))
break A}s=p.kQ(B.a.aj(B.b7,new A.r9(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.r6.prototype={
$1(a){return t.xs.a(a).b===A.p(this.a.value)},
$S:142}
A.r7.prototype={
$1(a){return t.EL.a(a).b===A.p(this.a.value)},
$S:143}
A.r8.prototype={
$1(a){return t.gc.a(a).b===A.p(this.a.value)},
$S:144}
A.r9.prototype={
$1(a){return t.ul.a(a).b===A.p(this.a.value)},
$S:145}
A.rs.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.Q(r.c.checked))
break}},
$S:1}
A.rr.prototype={
$1(a){var s,r,q=this,p=A.eO(A.p(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aB(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bB.prototype={
v(){return"SettingCategory."+this.b}}
A.ig.prototype={
v(){return"SettingKind."+this.b}}
A.b_.prototype={
cV(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.S(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.S(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bw(a))throw A.b(A.S(r.a+" must be boolean",q,q))
break}}}
A.rA.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:16}
A.rB.prototype={
$0(){return A.h(A.j("unknown setting: "+this.a))},
$S:6}
A.ry.prototype={
ir(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rz(s.a).cV(s.b)}},
ce(a){var s=this.b.h(0,a)
return s==null?A.h(A.j("setting missing from profile: "+a)):s},
B(){return A.M(["version",this.a,"values",this.b],t.N,t.K)}}
A.rC.prototype={
mL(a){var s,r,q=A.fI(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dv(q,1)
this.jL(a)},
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jL(a){var s,r,q=A.fI(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dv(q,1)}}
A.rK.prototype={
is(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.a(l.appendChild(A.A(a,"h2","journal-title","Rest")))
A.a(l.appendChild(A.A(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.A(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.cS[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.cZ[o]
m=A.a(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.V(new A.rL(this,q,n)))
A.a(s.appendChild(m))}}A.a(l.appendChild(s))},
smw(a){this.f=t.nf.a(a)}}
A.rL.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a9()},
$S:1}
A.cq.prototype={
gE(){return this.a},
gai(){return this.b},
gaR(){return this.c}}
A.mP.prototype={
n_(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.D(s)
q=new A.I(s,r.i("e(1)").a(new A.mR()),r.i("I<1,e>")).b9(0)
r=this.b
r.N(0)
s=J.y7(a,t.N)
p=s.$ti
r.M(0,new A.G(s,p.i("l(n.E)").a(q.gaq(q)),p.i("G<n.E>")))},
lv(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.mR.prototype={
$1(a){return t.bC.a(a).a},
$S:146}
A.mQ.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:147}
A.lk.prototype={
gc_(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
m_(a){return this.c.p(0,t.L.a(a))},
dX(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a4(0,g.gkI())||!a.a.a4(0,new A.th(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.f_(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aJ){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ac}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.L(l.f,new A.ti(s))
else k=!1
if(k)return!1
j=new A.lj(r,g,A.ah(o,t.AP),B.a7)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.N(0)
g.M(0,a.a)
g=i.c
g.N(0)
g.M(0,h)
i.r=j
return!0},
fB(a){var s=this.a,r=A.o(s).i("ac<1>"),q=r.i("G<n.E>")
s=A.H(new A.G(new A.ac(s,r),r.i("l(n.E)").a(new A.tc(a)),q),q.i("n.E"))
B.a.V(s,new A.td())
return s},
bW(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.n2
s=m.a.h(0,a)
if(s==null)return B.n3
r=B.d.a8(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.bQ:B.ap
o=p===B.ap&&m.x.p(0,q)&&s.R(B.bR)?B.bR:p
if(s.R(o))n=o
else n=s.R(B.ap)?B.ap:B.bQ
r=s.h(0,n)
r.toString
m.r=new A.lj(a,n,A.ah(m.f_(a,n,r),t.AP),B.a7)
m.gc_()
r=m.r
r.toString
return new A.li(r)},
kD(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dX
if(n.d!==B.a7)return B.n0
n.e=a
s=a===B.ac
n.d=s?B.aJ:B.an
r=this.f
q=s?B.dV:B.mJ
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dA(q,o,p,a,null))
if(a===B.ax)B.a.l(r,new A.dA(B.mM,o,p,a,null))
if(s)this.fa(n)
return new A.lg(n)},
kh(){var s,r=this.r
if(r==null)return B.dX
s=r.d
if(s!==B.an&&s!==B.ao)return B.n1
if(this.gc_()!=null&&r.w==null)return new A.b9(new A.bs(B.a8,"The visitor is waiting for an answer."))
r.d=B.ao
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aJ
this.fa(r)
return new A.is(r,!0)}return new A.is(r,!1)},
kE(a){var s,r,q=this.r,p=this.gc_(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.an&&o!==B.ao}if(o)return B.n_
o=p.f
s=A.D(o)
r=A.bx(new A.G(o,s.i("l(1)").a(new A.tf(a)),s.i("G<1>")),t.Y)
if(r==null)return B.n4
q.w=r.a
return new A.lh(q,p,r)},
kF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.an&&s!==B.ao}else s=!0
if(s)return i
r=h.gbj()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cY
p=J.O(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aW(q,s,s)
m=c.jF(!0,!0,o,new A.tr(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aK){B.a.l(this.f,new A.dA(B.mL,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fI(B.a.gZ(j.c).a,s,s)
s.M(0,q)
p.ke(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dY)if(k===B.bS){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dA(B.mK,o,p.b,i,l))}}return m},
fa(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
f_(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.jj(a,b,r.gn()))
return s},
jj(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.D(p)
s=A.bx(new A.G(p,r.i("l(1)").a(new A.ta(this)),r.i("G<1>")),t.aS)}return s==null?c:new A.c3(q,s.c,c.c)},
si3(a){this.x=t.Q.a(a)}}
A.th.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.o(s).i("ac<1>")).L(0,new A.tg(A.p(a)))},
$S:3}
A.tg.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:23}
A.ti.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.tc.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:23}
A.td.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:149}
A.tf.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.te.prototype={
$0(){return A.c([],t.jV)},
$S:150}
A.ta.prototype={
$1(a){return t.aS.a(a).d.gJ().a4(0,new A.t9(this.a))},
$S:151}
A.t9.prototype={
$1(a){t.q.a(a)
return this.a.y.aQ(a.a,a.b)},
$S:152}
A.tb.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:153}
A.ll.prototype={}
A.lQ.prototype={}
A.vF.prototype={
$1(a){return B.b.T(A.p(a),"off.")},
$S:3}
A.bJ.prototype={
v(){return"DoorChoice."+this.b}}
A.c1.prototype={
v(){return"VisitPhase."+this.b}}
A.c2.prototype={
v(){return"VisitTier."+this.b}}
A.ef.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dA.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gai(){return this.c}}
A.d0.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bs.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.bs&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c3.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.c3&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.M(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gai(){return this.b},
gaR(){return this.c}}
A.lm.prototype={
B(){var s,r,q,p=this.a
p=A.H(p,A.o(p).c)
B.a.W(p)
s=this.b
r=A.o(s)
q=r.i("df<1,Z<e,@>>")
s=A.H(new A.df(s,r.i("Z<e,@>(1)").a(new A.t8()),q),q.i("n.E"))
r=this.c
return A.M(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.t8.prototype={
$1(a){return t.L.a(a).B()},
$S:154}
A.jr.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"arrival",r.a.B())
q.k(0,"tier",r.b.b)
q.k(0,"phase",r.c.b)
q.k(0,"lineIndex",r.d)
s=r.e
q.k(0,"choice",s==null?null:s.b)
q.k(0,"complianceMarked",r.f)
s=r.r
if(s!=null)q.k(0,"reactionChoiceId",s)
return q}}
A.mM.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:155}
A.mN.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:156}
A.mO.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:157}
A.lj.prototype={
gbj(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.tj.prototype={}
A.b9.prototype={}
A.li.prototype={}
A.lg.prototype={}
A.is.prototype={}
A.lh.prototype={}
A.h2.prototype={}
A.lT.prototype={
gky(){var s,r
if(!this.au)return B.m
s=this.r
s===$&&A.q()
r=this.w
r===$&&A.q()
return B.eC.kz(s,r)},
glK(){var s="shadowCaster",r=this.xr
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.hb(s).a+";shadowTriangles="+r.hb(s).b+";frameMs="+B.c.aM(this.y1,3)},
glJ(){var s=this.xr
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.y1<=100},
lS(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.hh()
l.r=k
k=B.c6.hB(k)
l.w=k
q=l.b
p=l.c
s=new A.l5(q,p,q,p)
o=A.yZ(l.d.a)
l.e=o
try{o.h4(l.iS(k,q,p),s)}catch(n){r=A.ak(n)
k=l.w
if(k===B.ah)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.v(r)
l.w=B.ah
k=A.yZ(l.d.a)
k.h4(B.ld,s)
l.e=k}k=l.e
k.bQ()
m=A.Db(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c2=l.b
l.c3=l.c
l.eL()
l.lF=A.CS(!0,!0,!0)
l.au=!0},
cU(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.au){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c4!==a||r.c5!==b)r.c5=r.c4=null
s=r.e
s===$&&A.q()
s.bQ()
new A.l5(a,b,a,b).C()
if(r.cG==null)r.cG=r.bP()},
bP(){var s=0,r=A.bh(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bP=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.c2
h=n.b
if(!(i!==h||n.c3!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.q()
h=n.w
h===$&&A.q()
g=A.f(m)
s=8
return A.ae(A.v2(i,B.c9.fG("auto","full","srgb",h,"auto","profile",A.f(l),g)),$async$bP)
case 8:n.c2=m
n.c3=l
n.c5=n.c4=null
A.jh()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ak(e)
i=n.w
i===$&&A.q()
n.x=i.a.b+" surface reconfigure failed: "+A.v(k)
n.c4=n.b
n.c5=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.cG=null
i=n.c4
h=n.b
j=i===h&&n.c5===n.c
if(!j)i=n.c2!==h||n.c3!==n.c
else i=!1
if(i)n.cG=n.bP()
s=o.pop()
break
case 5:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$bP,r)},
eI(a,b,c,d,e,f,g,h){return B.c9.fG(d,e,f,a,g,h,c,b)},
iS(a,b,c){return this.eI(a,b,c,"auto","full","srgb","auto","profile")},
eL(){var s,r,q,p=this.w
p===$&&A.q()
s=p.a
A:{p=B.a0===s
if(p){r=7
break A}if(B.L===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.L===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.h(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pH(r,p,A.a_(q),A.a_(q),A.m(q,t.i))},
cB(a){var s=0,r=A.bh(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cB=A.bi(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.au){s=1
break}switch(a.b.a){case 0:i=B.dt
break
case 2:i=B.ah
break
case 1:i=B.ds
break
case 3:i=n.w
i===$&&A.q()
break
default:i=null}m=i
i=n.w
i===$&&A.q()
l=i
k=n.eI(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.q()
s=7
return A.ae(A.v2(i,t.lg.a(k)),$async$cB)
case 7:n.w=t.xK.a(m)
n.eL()
n.c2=n.b
n.c3=n.c
n.x=null
A.jh()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ak(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.v(j)
A.jh()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$cB,r)},
km(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.au||b4.Q.length!==0)return
b4.fR=c0
s=b4.k1
r=b4.e
r===$&&A.q()
s.k(0,b6,r.gb3().dT(8,"texture:wall-plaster",!0,256,B.b_,256))
s.k(0,b7,b4.e.gb3().dT(8,"texture:grime",!0,512,B.b_,512))
for(q=0;q<2;++q){p=B.jC[q]
r=b4.e.w
if(r==null)r=A.h(A.j(b8))
s.k(0,p,r.dT(8,"texture:"+p,!0,256,B.b_,256))}b4.dt()
b4.ct()
b4.p2=b4.f6(A.pU(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
b4.jd()
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.M(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cx(g,g.r,g.e,A.o(g).i("cx<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bl.h(0,c)
if(b==null)A.h(A.j("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pU(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.h(A.j(b8))
if(a0.x)A.h(A.j(b9))
c.C()
a1=a0.b.a.aE(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.j3[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dm(a2)
j=b4.dm(a2)
l=A.pU(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dm(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.h(A.j(b8)):j
if(n.x)A.h(A.j(b9))
l.C()
a1=n.b.a.aE(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.ct()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b4.je(c0,r[q])
b4.jG(c0)
$.y.j().setAttribute("data-renderer-house-model-scale",B.c.aM(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.u)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eO(c0,i,a4)
g=b4.e.w
if(g==null)g=A.h(A.j(b8))
f=a4.a
if(g.x)A.h(A.j(b9))
e=g.a
a5.C()
a1=e.b.aE(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bh(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bp(a1,e,B.u,0,B.S,B.Q,!0,!0,0,b5)
e=b4.f
e===$&&A.q()
B.u.C()
a=e.a
a0=a.$ti
a.a0(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.u.aa()
c=c.gar()
a0=A.D(c)
A.b1(new A.I(c,a0.i("J(1)").a(a.gaC()),a0.i("I<1,J>")))
n.k(0,f,new A.iL(f,g,e.b.c0(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.u)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.jC(i,a4.aZ(f),a4.aH(f),a4.aH(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.u2(a4))
a=b4.e.w
if(a==null)a=A.h(A.j(b8))
if(a.x)A.h(A.j(b9))
a0=a.a
e.C()
a1=a0.b.aE(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bh(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bp(a1,e,B.u,0,B.S,B.Q,!0,!0,0,b5)
e=b4.f
e===$&&A.q()
B.u.C()
a=e.a
a0=a.$ti
a.a0(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.u.aa()
a=a.gar()
a7=A.D(a)
A.b1(new A.I(a,a7.i("J(1)").a(a0.gaC()),a7.i("I<1,J>")))
B.a.l(o,new A.lS(f,e.b.c0(a8),a8,c))}for(r=A.H7(A.Gv(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.di(e)
a0=b4.di(e)
a=A.pU(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.di(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.h(A.j(b8)):a0
if(c.x)A.h(A.j(b9))
a.C()
a1=c.b.a.aE(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.h(A.j(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.h(A.j(b9))
a7=c.a
a.C()
a1=a7.b.aE(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bh(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ai.p(0,a0))A.h(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bp(a1,b,B.u,-1,B.S,B.Q,B.lC.p(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.q()
B.u.C()
c=e.a
a=c.$ti
c.a0(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.u.aa()
c=c.gar()
a0=A.D(c)
A.b1(new A.I(c,a0.i("J(1)").a(a.gaC()),a0.i("I<1,J>")))
j.k(0,b2,e.b.c0(b3))}},
hE(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ah(a8.e,t.fl)
if(!a5.au)return
for(s=a5.ch,r=new A.L(s,A.o(s).i("L<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.q()
o.b.b8(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.q()
p=p.w
if(p==null)p=A.h(A.j(a6))
o=n.a
if(p.x)A.h(A.j(a7))
p.a.b8(o)
p.f.a5(0,o)}}s.N(0)
q.N(0)
r=a5.cx
B.a.N(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=j.c
h=B.b.p(i.toLowerCase(),"stair")
if(h)continue
h=j.r
h=h!=="story"&&h!=="architecture"
if(h)continue
h=a5.fR
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cC(i)
i=a5.e
i===$&&A.q()
i=i.w
if(i==null)i=A.h(A.j(a6))
h=a5.jh(f,j,m)
e=j.a
if(i.x)A.h(A.j(a7))
d=i.a
h.C()
c=d.b.aE(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bh(h))
i.f.l(0,c)
i=j.f
h=i.a
a=B.a6.gaz()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=f.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=g.d
i=new A.io(new A.J(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kM(a.a*a1,a.b*a1,a.c*a1,i),1)
n=new A.bp(c,a2,i,-1,B.S,B.Q,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.q()
i.C()
a2=d.a
h=a2.$ti
a2.a0(h.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.d(a2,b)
a4=a2[b].c
h=(a4==null?h.y[1].a(a4):a4).d
i=i.aa()
h=h.gar()
b=A.D(h)
A.b1(new A.I(h,b.i("J(1)").a(i.gaC()),b.i("I<1,J>")))
s.k(0,e,d.b.c0(n))}$.y.j().setAttribute("data-renderer-inventory-items",""+s.a)
$.y.j().setAttribute("data-renderer-inventory-resolution","proxy")
$.y.j().setAttribute("data-renderer-inventory-proxy-count",""+s.a)},
hP(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aJ([s],r)
for(p=c1.aL(s),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.cb(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.L(b9,A.o(b9).i("L<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.p(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aH(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bU(i[f],k)
d=b8.f
d===$&&A.q()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a0(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.aa()
a=a.gar()
a0=A.D(a)
A.b1(new A.I(a,a0.i("J(1)").a(b.gaC()),a0.i("I<1,J>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a0(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb6(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.u)(b9),++a3){a4=b9[a3]
k=q.p(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.q()
o=b8.bU(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a0(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.aa()
i=i.gar()
g=A.D(i)
A.b1(new A.I(i,g.i("J(1)").a(n.gaC()),g.i("I<1,J>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb6(o)}b9=b8.fr
s=A.o(b9).i("ac<1>")
s=A.H(new A.ac(b9,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.u)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bU(o,q.p(0,a5.b)?-1:0)
o=b8.f
o===$&&A.q()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a0(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.aa()
g=g.gar()
d=A.D(g)
A.b1(new A.I(g,d.i("J(1)").a(i.gaC()),d.i("I<1,J>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a0(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb6(e)
b9.k(0,a5.a,a5.kO(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.q()
i=b8.bU(a8,q.p(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a0(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.d(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.aa()
d=d.gar()
c=A.D(d)
A.b1(new A.I(d,c.i("J(1)").a(g.gaC()),c.i("I<1,J>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a0(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb6(i)}a9=new A.jX().kC(c2)
b9=$.y.j()
s=A.H(a9,A.o(a9).c)
B.a.W(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Y(s,","))
b9=b8.dx
r=new A.jX().fT(new A.u3(b8),new A.ac(b9,A.o(b9).i("ac<1>")),a9,r)
b0=A.fJ(r,r.$ti.i("n.E"))
b9=b8.db
s=A.o(b9).i("ac<1>")
s=A.H(new A.ac(b9,s),s.i("n.E"))
r=s.length
p=b8.cy
b1=0
b2=0
b3=0
a3=0
for(;a3<s.length;s.length===r||(0,A.u)(s),++a3){b4=s[a3]
b5=p.h(0,b4)
if(b5==null)continue
a8=b9.h(0,b4)
o=a8.r
if(o)++b3
b6=b0.p(0,b4)
if(b6)++b1
if(b6&&o)++b2
e=b8.bU(a8,b6?-1:0)
o=b8.f
o===$&&A.q()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a0(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.aa()
i=i.gar()
g=A.D(i)
A.b1(new A.I(i,g.i("J(1)").a(n.gaC()),g.i("I<1,J>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a0(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb6(e)
b9.k(0,b4,e)}$.y.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.y.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("df<1,e>")
b7=A.H(new A.df(b0,b9.i("e(1)").a(new A.u4(b8)),s),s.i("n.E"))
B.a.W(b7)
$.y.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.Y(b7,","))},
cS(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.au)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fc(b0,n)
l=J.aH(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.q()
d=d.w
if(d==null)d=A.h(A.j(a8))
c=a7.dn(e.b)
b=g.b
if(d.x)A.h(A.j(a9))
a=d.a
c.C()
a0=a.b.aE(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bh(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bp(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a7.f
c===$&&A.q()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a0(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.aa()
b=b.gar()
a3=A.D(b)
A.b1(new A.I(b,a3.i("J(1)").a(d.gaC()),a3.i("I<1,J>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a0(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb6(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.h(A.j(a8)):a
if(d.x)A.h(A.j(a9))
d.a.b8(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.y.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fS+1));++a7.fS},
dS(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.au)return
s=k.fr
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.q()
m=p.gb3().hj(k.eO(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bp(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.q()
n=r.c
p.ka(l)
p.b.e0(n,l)
s.k(0,b,r.fK(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gb3().mH(n)},
hF(d7,d8,d9,e0,e1,e2,e3,e4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9="time_override",d0="wetness_override",d1="fog_density",d2="fog_height_falloff",d3="rain_override",d4=A.aJ([d8],t.N),d5=d7.e,d6=d5.h(0,d8)
if(d6!=null)for(s=d6.a,r=d7.aL(s),q=J.O(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.cb(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d5.h(0,o)!=null)d4.l(0,o)}n=new A.pb(d7).nd(d4,d9)
d5=t.jC
m=A.c([],d5)
l=A.c([],d5)
for(k=0;k<n.length;++k){j=n[k]
d5=k===0
s=d5?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.h(A.al(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.h(A.al(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.h(A.al(p,"radius","must be finite and > 0"))
d5=d5?l:m
B.a.l(d5,new A.aU(k,s,j.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d5=c8.fx
d5===$&&A.q()
i=d5.mE(d9,m,l)
d5=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d5.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.u)(r),++h){g=r[h]
p=g.a
f=d5.h(0,p).a
e=g.d
s.push(new A.kF(p,new A.J(f.a,f.b,f.c),new A.bW(e.a,e.b,e.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.u)(q),++h){g=q[h]
f=g.a
e=d5.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bD(f,new A.J(d.a,d.b,d.c),new A.J(e.a,e.b,e.c),new A.bW(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c8.iE(i,++c8.fy)
d5=$.ho()
b=d5.G(c9)
if(b>=0)a=B.c.D(b,0,23.999)
else a=e4
a0=e2.c
a1=B.c.S(B.c.S(a,24)+24,24)
a2=B.c.D(a0,0,1)
a3=B.c.D(e2.d,6,16)/2
a4=13-a3
a5=13+a3
q=a1>=a4
a6=q&&a1<=a5?Math.sin(3.141592653589793*((a1-a4)/(a5-a4)))*65:-18
if(a1<=a4)a7=0
else a7=a1>=a5?1:(a1-a4)/(a5-a4)
a8=a6*3.141592653589793/180
a9=(90+a7*180)*3.141592653589793/180
p=Math.cos(a9)*Math.cos(a8)
f=B.c.D(Math.sin(a8),0,1)
e=Math.sin(a9)*Math.cos(a8)
d=B.c.D(1-f,0.1,0.9)
c=a4-1.5
if(a1>=c&&a1<a4){b0=(a1-c)/1.5
b1=A.cb(B.kY,B.bv,b0)
b2=A.cb(B.l_,B.bu,b0)
b3=A.cb(B.kU,B.bw,b0)
b4=0.3+0.5*b0
b5=0.25+0.2*b0}else if(q&&a1<14){b1=B.bv
b2=B.bu
b3=B.bw
b4=0.85
b5=0.45}else if(a1>=14&&a1<a5){b0=(a1-14)/(a5-14)
b1=A.cb(B.bv,B.dv,b0)
b2=A.cb(B.bu,B.dy,b0)
b3=A.cb(B.bw,B.dx,b0)
b4=0.85*(1-b0*0.35)
b5=0.45*(1-b0*0.25)}else if(a1>=a5&&a1<a5+1.5){b0=(a1-a5)/1.5
b1=A.cb(B.dv,B.aD,b0)
b2=A.cb(B.dy,B.aC,b0)
b3=A.cb(B.dx,B.aE,b0)
b4=0.55*(1-b0*0.8)
b5=0.34*(1-b0*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){b0=(a1-q)/1.5
b1=A.cb(B.aD,B.aD,b0)
b2=A.cb(B.aC,B.aC,b0)
b3=A.cb(B.aE,B.aE,b0)
b4=0.11*(1-b0*0.25)
b5=0.16*(1-b0*0.15)}else{b1=B.aD
b2=B.aC
b3=B.aE
b4=0.15
b5=0.18}}if(a2>0){b6=A.cb(b3,B.l7,a2*0.7)
b4*=1-a2*0.35
b5*=1-a2*0.15}else b6=b3
b7=e3?1:0.15
b8=B.c.D(0.3333333333333333,0,1)
b9=B.c.D(a2*0.75+b8*0.25,0,1)
q=$.Bt().a
q.k(0,"pbrRoughnessScale",d5.G("pbr_roughness"))
q.k(0,"pbrMetallicScale",d5.G("pbr_metallic"))
q.k(0,"pbrSpecularMult",d5.G("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d5.G("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d5.G("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d5.G("light_ambient_mult"))
q.k(0,"directLightScale",d5.G("light_direct_mult"))
q.k(0,"ssdoEnabled",d5.aT("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d5.G("shadow_ao_intensity"))
q.k(0,"csmEnabled",d5.aT("shadow_csm_enable"))
q.k(0,"csmHardness",d5.G("shadow_csm_hardness"))
q.k(0,"shadowBias",d5.G("shadow_bias"))
q.k(0,"weatheringEnabled",d5.aT("weathering_enable"))
q.k(0,"normalBumpStrength",d5.G("normal_bump_strength"))
q.k(0,"grimeAccumulation",d5.G("grime_accumulation"))
q.k(0,"wetnessOverride",d5.G(d0))
q.k(0,"fogEnabled",d5.aT("fog_enable"))
q.k(0,"fogDensity",d5.G(d1))
q.k(0,"fogHeightFalloff",d5.G(d2))
q.k(0,"volumetricEnabled",d5.aT("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d5.G("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d5.G("volumetric_scattering"))
q.k(0,"ssrEnabled",d5.aT("ssr_enable"))
q.k(0,"tonemapMode",B.c.af(d5.G("tonemap_mode")))
q.k(0,"ssssEnabled",d5.aT("ssss_enable"))
q.k(0,"taaEnabled",d5.aT("taa_enable"))
q.k(0,"lensFlareEnabled",d5.aT("lens_flare_enable"))
q.k(0,"timeOverride",d5.G(c9))
q.k(0,"rainOverride",d5.G(d3))
q.k(0,"postBloom",d5.G("post_bloom"))
q.k(0,"postVignette",d5.G("post_vignette"))
q.k(0,"postChromaticAberration",d5.G("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d5.G("post_film_grain"))
q.k(0,"postExposure",d5.G("post_exposure"))
q.k(0,"postSaturation",d5.G("post_saturation"))
q.k(0,"postBloomThreshold",d5.G("post_bloom_threshold"))
q.k(0,"postDither",d5.G("post_dither"))
q.k(0,"postDepthOfField",d5.G("post_depth_of_field"))
q.k(0,"postColorGrade",d5.G("post_color_grade"))
q.k(0,"postAffineWarp",d5.G("post_affine_warp"))
q.k(0,"postVertexSnap",d5.G("post_vertex_snap"))
q.k(0,"postQuantizationBits",B.c.af(d5.G("post_quantization_bits")))
q.k(0,"postVhsChroma",d5.G("post_vhs_chroma"))
q.k(0,"postVhsNoise",d5.G("post_vhs_noise"))
q.k(0,"contactLightBoost",d5.G("light_contact_boost"))
q.k(0,"debugViewMode",d5.e.b)
$.y.j().setAttribute("data-renderer-shader-overrides",B.i.ad(q,null))
if(d5.G(d3)>=0)a0=d5.G(d3)
c8.RG=B.c.D(a0,0,1)
c8.x2=B.c.D(d5.G(d0)>=0?d5.G(d0):b9,0,1)
q=$.Bs()
q.n9(0.0166,a0)
c0=q.f
c1=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
c2=c1>0.001
c3=c2?new A.J(p,f,e):new A.J(-p,d,-e)
c4=c2?new A.bW(b1.c,b1.b,b1.a):new A.bW(0.35,0.45,0.65)
q=c0.a
if(q){p=c0.b
c5=new A.bW(c4.a+c0.c*p*2,c4.b+c0.d*p*2,c4.c+c0.e*p*2.5)}else c5=c4
b4*=b7
if(q)b4+=c0.b*4.5
c6=d5.G(d1)
c7=d5.G(d2)
d5=B.c.D(c6/0.012,0,8)
q=B.c.D(c7/0.6,0,8)
c8.p4=new A.k_(B.iz,new A.bW(b6.c*0.08,b6.b*0.08,b6.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),(0.04+a2*0.08+b8*0.02)*q,(0.0015+a2*0.014+b8*0.003)*d5,new A.bW(b2.c,b2.b,b2.a),Math.max(0.045,b5*(c2?c1:1)*b7),new A.o6(c3,c5,b4),s,r)},
jd(){var s,r,q=this
if(q.to!=null||q.x1!=null)return
s=new Float32Array(A.a1(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=q.e
r===$&&A.q()
q.to=r.gb3().hj(q.dn(s),"weather:rain-particle")
q.x1=q.f6(B.jV)},
jV(a,b){var s,r,q,p=this
p.ry=0
s=p.to
r=p.x1
if(s==null||r==null||p.RG<=0.01||p.rx<=0.01)return
q=B.d.D(B.c.aB(8+p.RG*32*p.rx),0,40)
p.ry=new A.mW(s,r,B.e2,B.ms,B.mw,new A.J(Math.sin(p.y2*0.7)*0.18,-5.4,0.12),B.mu,0.9,q,p.fP,1918986606).i5(a,b)},
fc(a,b){var s=A.Gw(a,b),r=A.Gu(a,b),q=A.H(s.c,t.i)
B.a.M(q,r)
return A.c([new A.h2("wall",new Float32Array(A.a1(q))),new A.h2("floor",s.a),new A.h2("ceiling",s.b)],t.pv)},
dn(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.J(q,p,a[o]))}if(n.length===0)throw A.b(A.j("house surface mesh cannot be empty"))
return new A.ch(B.ab,a,null,A.b1(n))},
je(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fc(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.j("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.q()
k=k.w
if(k==null)k=A.h(A.j("renderer is not initialized"))
j=b.dn(l.b)
i=l.a
if(k.x)A.h(A.j("resource library is disposed"))
h=k.a
j.C()
g=h.b.aE(j,n+i)
f=g.a
h.c.k(0,f,h.bh(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bp(g,i,B.u,-1,B.S,B.Q,!0,!0,0,null)
i=b.f
i===$&&A.q()
B.u.C()
k=i.a
j=k.$ti
k.a0(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.u.aa()
k=k.gar()
h=A.D(k)
A.b1(new A.I(k,h.i("J(1)").a(j.gaC()),h.i("I<1,J>")))
c=i.b.c0(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gU(r))
if(q.length!==0)b.at.k(0,a0,B.a.gU(q))},
jG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.M(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cx(l,l.r,l.e,A.o(l).i("cx<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bl.h(0,i)
if(h==null)A.h(A.j("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.W(d)
f=$.y.j()
B.a.W(e)
f.setAttribute("data-renderer-house-materials",B.a.Y(e,","))
$.y.j().setAttribute("data-renderer-house-surface-bindings",B.a.Y(d,","))},
jh(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cY(new Float32Array(5376))
g=this.jg(a0.b)
r=new A.k(d,b,f)
q=new A.k(e,b,f)
p=new A.k(e,c,f)
o=new A.k(d,c,f)
n=new A.k(d,b,a)
m=new A.k(e,b,a)
l=new A.k(e,c,a)
k=new A.k(d,c,a)
s.aI(q,r,o,p,g)
s.aI(n,m,l,k,g)
s.aI(r,n,k,o,g)
s.aI(m,q,p,l,g)
s.aI(r,q,m,n,g)
s.aI(o,k,l,p,g)
j=B.t.aU(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.J(e,d,j[c]))}return new A.ch(B.ab,j,null,A.b1(g))},
jg(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
di(a){var s
A:{if(0===a){s=B.kV
break A}if(1===a){s=B.kX
break A}if(2===a){s=B.l2
break A}if(3===a){s=B.la
break A}if(4===a){s=B.lb
break A}if(5===a){s=B.l0
break A}if(6===a){s=B.l9
break A}if(7===a){s=B.l5
break A}s=B.l8
break A}return s},
dm(a){var s
A:{if("architecture"===a){s=B.kW
break A}if("furniture"===a){s=B.dw
break A}if("fixture"===a){s=B.l4
break A}if("service"===a){s=B.l6
break A}if("story"===a){s=B.l3
break A}if("decor"===a){s=B.kZ
break A}if("micro"===a){s=B.l1
break A}s=B.dw
break A}return s},
cL(a){return this.m3(t.G.a(a))},
m3(a){var s=0,r=A.bh(t.H),q,p=this,o,n,m,l
var $async$cL=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:if(!p.au){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.iJ[n]
l=a.h(0,m)
if(l!=null)o.push(p.cr(m,l))}s=3
return A.ae(A.ou(o,t.H),$async$cL)
case 3:case 1:return A.be(q,r)}})
return A.bf($async$cL,r)},
cr(a,b){return this.jk(a,b)},
jk(a,b){var s=0,r=A.bh(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cr=A.bi(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ae(A.aS(A.a(m.decode()),t.X),$async$cr)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.f(m.naturalWidth)
g.height=A.f(m.naturalHeight)
l=g
k=A.E(l.getContext("2d"))
if(!t.m.b(k)){h=A.j("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.f(m.naturalWidth),A.f(m.naturalHeight))).data)
h=n.e
h===$&&A.q()
h=h.gb3()
f=new Uint8Array(A.a1(j))
if(h.x)A.h(A.j("resource library is disposed"))
h.c.na(d,f)
h=n.e.gb3()
if(h.x)A.h(A.j("resource library is disposed"))
h.c.lI(d)
$.y.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dt()
n.ct()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ak(c)
h=$.y.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dt()
n.ct()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.v(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$cr,r)},
dt(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.au||i.k1.a===0)return
s=i.k1
r=A.o(s).i("L<1,2>")
r=A.ko(new A.L(s,r),r.i("bN(n.E)").a(new A.tZ()),r.i("n.E"),t.jP)
q=A.H(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.q()
p=s.gb3().gfl().cP(q)
s=p.a
o=A.c(s.slice(0),A.D(s))
B.a.V(o,new A.u_())
s=A.D(o)
r=s.i("e(1)")
s=s.i("I<1,e>")
n=new A.I(o,r.a(new A.u0()),s).Y(0,",")
m=new A.I(o,r.a(new A.u1()),s).Y(0,",")
s=p.cw(B.dM)
r=p.cw(B.dN)
l=p.cw(B.dO)
k=p.cw(B.dP);++i.fQ
j=$.y.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.fQ)
if(!A.Q($.y.j().hasAttribute("data-renderer-texture-residency-initial")))$.y.j().setAttribute("data-renderer-texture-residency-initial",n)},
ct(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.au||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.L(r,A.o(r).i("L<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cS(p,o,B.b.p(p,"wall")?2:1))}r=j.e
r===$&&A.q()
r=r.gb3()
n=r.e
if(n===$){p=r.gfl()
r.e!==$&&A.xS()
n=r.e=new A.pV(p)}m=n.cP(s)
s=m.a
l=A.c(s.slice(0),A.D(s))
B.a.V(l,new A.tX())
s=A.D(l)
k=new A.I(l,s.i("e(1)").a(new A.tY()),s.i("I<1,e>")).Y(0,",")
s=$.y.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cp(B.bo)+";pending="+m.cp(B.d9)+";missing="+m.cp(B.da)+";evicted="+m.cp(B.db))},
bU(a,b){return new A.bp(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
eO(a,b,c){var s,r,q,p,o,n=A.Gt(a,b,c),m=n.length
if(m===0)throw A.b(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.J(q,p,n[o]))}return new A.ch(B.ab,n,null,A.b1(s))},
jC(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.W.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.k(k,s,r),new A.k(q,s,r),new A.k(q,p,r),new A.k(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.k(k,s,r),new A.k(q,s,r),new A.k(q,p,r),new A.k(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.k(k,s,r),new A.k(k,s,q),new A.k(k,p,q),new A.k(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.k(k,s,r),new A.k(k,s,q),new A.k(k,p,q),new A.k(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.cY(new Float32Array(5376))
o.aI(k[0],k[1],k[2],k[3],g)
n=B.t.aU(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.J(r,q,n[p]))}return new A.ch(B.ab,n,null,A.b1(k))},
iE(a,b){var s,r,q,p=a.e,o=A.o(p).i("L<1,2>"),n=A.H(new A.L(p,o),o.i("n.E"))
B.a.V(n,new A.tT())
p=$.y.j()
o=a.a
s=A.D(o)
r=a.c
q=A.D(r)
p.setAttribute("data-renderer-light-selection","points="+new A.I(o,s.i("i(1)").a(new A.tU()),s.i("I<1,i>")).Y(0,":")+";spots="+new A.I(r,q.i("i(1)").a(new A.tV()),q.i("I<1,i>")).Y(0,":"))
q=A.D(n)
p.setAttribute("data-renderer-light-rejections",new A.I(n,q.i("e(1)").a(new A.tW()),q.i("I<1,e>")).Y(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
f6(a){var s,r=this.e
r===$&&A.q()
r=r.gb3()
if(r.x)A.h(A.j("resource library is disposed"))
a.C()
s=r.b.a.aE(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iyW:1}
A.u2.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:44}
A.u3.prototype={
$1(a){var s=this.a.dx.h(0,A.p(a))
s.toString
return s},
$S:24}
A.u4.prototype={
$1(a){var s,r,q,p
A.p(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:24}
A.tZ.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bN(s,a.b,r)},
$S:159}
A.u_.prototype={
$2(a,b){var s=t.d
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:160}
A.u0.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:45}
A.u1.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:45}
A.tX.prototype={
$2(a,b){var s=t.wl
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:162}
A.tY.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:163}
A.tT.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:164}
A.tU.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tV.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tW.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:166}
A.lS.prototype={}
A.iL.prototype={
fK(a,b){var s=this,r=b==null?s.d:b
return new A.iL(s.a,s.b,s.c,r,a)},
kO(a){return this.fK(a,null)}}
A.tx.prototype={
gai(){return this.b},
gaR(){return this.c}}
A.uu.prototype={
$2(a,b){var s
A.xA(a,A.v(b))
switch(a){case"master":s=$.bg
if(s!=null)s.hJ(b)
break
case"voice":s=$.bg
if(s!=null)s.hL(b)
break
case"effects":s=$.bg
if(s!=null)s.hI(b)
break
case"ambience":s=$.bg
if(s!=null)s.hH(b)
break
case"music":s=$.bg
if(s!=null)s.hK(b)
break}},
$S:31}
A.uv.prototype={
$1(a){var s
A.xA("muted",""+a)
s=$.bg
if(s!=null)s.ee(a)},
$S:8}
A.uw.prototype={
$1(a){var s
A.xA("mono",""+a)
s=$.bg
if(s!=null)s.d_(a)},
$S:8}
A.uC.prototype={
$2(a,b){A.xB(a,A.v(b))
A.zK(a,b)},
$S:31}
A.uD.prototype={
$1(a){var s="high-contrast"
A.xB(s,""+a)
A.ui(s,a)},
$S:8}
A.uE.prototype={
$1(a){var s="strong-highlights"
A.xB(s,""+a)
A.ui(s,a)},
$S:8}
A.uF.prototype={
$1(a){$.d9().mL(a)
A.vh()
A.zM()},
$S:168}
A.uG.prototype={
$0(){var s=$.d9()
s.a=A.dv(null,1)
s.b=A.dv(null,1)
A.vh()
A.zM()},
$S:0}
A.uH.prototype={
$0(){A.dI(this.a)},
$S:0}
A.uI.prototype={
$0(){this.a.a9()},
$S:0}
A.uJ.prototype={
$0(){A.dI(this.a)},
$S:0}
A.ux.prototype={
$0(){A.hf(this.a)},
$S:0}
A.uy.prototype={
$1(a){$.j9=a
A.Af()
A.x3()},
$S:169}
A.uz.prototype={
$1(a){var s=$.cG()
$.xg=a
if(!s.Q&&a.Q){$.bb.j().a=1
$.bb.j().hk(7)
$.at.j().h1()
$.cp().N(0)}A.Ah()
A.zL()},
$S:170}
A.uA.prototype={
$1(a){$.ep=a
A.xo()
A.mi()},
$S:171}
A.uB.prototype={
$0(){$.ep=B.aq
$.fc.j().eb($.ep)
A.xo()
A.mi()},
$S:0}
A.ur.prototype={
$1(a){var s,r=A.AR(a,A.A2())
$.ja=A.fF($.jl().b,a)
s=r.b
$.eo.j().cj(a,$.jl().b,s)
$.y.j().setAttribute("data-graphics-fallback",B.a.Y(s,"|"))
$.A3=A.mk(a,r,$.A3)},
$S:172}
A.us.prototype={
$0(){A.dI($.eo.j())},
$S:0}
A.ut.prototype={
$0(){A.dI($.eo.j())},
$S:0}
A.un.prototype={
$1(a){},
$S:22}
A.uo.prototype={
$1(a){var s,r
$.xc=a
$.ad.j().ec(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.dV()
s.be()
A.Ag()},
$S:173}
A.up.prototype={
$0(){A.dI($.j1.j())},
$S:0}
A.uq.prototype={
$0(){A.dI($.j1.j())},
$S:0}
A.va.prototype={
$0(){$.vr=A.Q(this.a.matches)
$.xF=A.Q(this.b.matches)
A.mi()},
$S:0}
A.v8.prototype={
$1(a){return this.a.$0()},
$S:2}
A.v9.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vN.prototype={
$1(a){var s
try{A.yo(this.b,a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.z)return!1
else throw s}},
$S:174}
A.vO.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j8.j()
break
case 5:p=$.fc.j()
break
case 1:p=$.eo.j()
break
case 4:p=$.h8.j()
break
case 2:p=$.j3.j()
break
case 3:p=$.j1.j()
break}s=p
r=null
switch(o){case 0:r=B.ks
break
case 5:r=B.kx
break
case 1:r=B.kt
break
case 4:r=B.kw
break
case 2:r=B.ku
break
case 3:r=B.kv
break}q=r
p=B.d5.h(0,a)
p.toString
A.xn(s,q,p)},
$S:175}
A.vP.prototype={
$0(){A.dI($.h9.j())},
$S:0}
A.w_.prototype={
$0(){return A.dI($.h9.j())},
$S:0}
A.w8.prototype={
$0(){$.cm.j().a9()},
$S:0}
A.w9.prototype={
$0(){$.cm.j().a9()},
$S:0}
A.wa.prototype={
$0(){A.xn($.h9.j(),B.de,"pause.settings")},
$S:0}
A.wb.prototype={
$0(){$.cm.j().a9()
A.jf($.j4.j())},
$S:0}
A.wc.prototype={
$0(){A.mv("saved")},
$S:0}
A.wd.prototype={
$0(){$.cm.j().a9()
A.jf($.j4.j())},
$S:0}
A.we.prototype={
$0(){A.xn($.mf.j(),B.ky,"pause.credits")},
$S:0}
A.vQ.prototype={
$0(){return A.hf($.cm.j())},
$S:0}
A.vR.prototype={
$0(){return A.hf($.j5.j())},
$S:0}
A.vS.prototype={
$2(a,b){var s,r
if($.at.j().y){s=$.aF.j().gc_()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.EL(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cR,a)
A.EK(B.cR[a])}}},
$S:176}
A.vT.prototype={
$2(a,b){var s,r,q,p,o,n
if($.U.j().gab().a===21){A.An(!1)
return}s=$.W.j().r.b
$.U.j().i_(a,b,$.az)
r=$.W.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e9()
if(typeof n!=="number")return A.vI(n)
if(!(o<n))break
if($.W.b===$.W)A.h(A.a5(""))
p=B.a.h(B.J,q).b
o=$.aR
if(o!=null){n=$.W.b
if(n===$.W)A.h(A.a5(""))
o.cS(n,p)}o=q
if(typeof o!=="number")return o.a6()
q=o+1}A.mv("saved after sleep")},
$S:177}
A.vU.prototype={
$0(){return A.hf($.mh.j())},
$S:0}
A.vV.prototype={
$0(){return A.hf($.j4.j())},
$S:0}
A.vW.prototype={
$0(){return A.dI($.mf.j())},
$S:0}
A.vX.prototype={
$0(){A.hf($.j2.j())},
$S:0}
A.vY.prototype={
$0(){A.hf($.j2.j())},
$S:0}
A.vZ.prototype={
$1(a){return A.Am()},
$S:2}
A.w0.prototype={
$1(a){if(A.p(A.a(v.G.document).visibilityState)==="hidden")A.FJ()},
$S:1}
A.w1.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.p(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.ho()
o=!p.a
p.a=o
if(o)A.pu(A.a(v.G.document),"exitPointerLock",t.X)
else $.ad.j().cT($.y.j())
return}p=$.ho()
if(p.a&&!A.Q(m.repeat)){if(A.p(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ad.j().cT($.y.j())
return}if(A.p(m.code)==="ArrowUp"||A.p(m.code)==="KeyW"){m.preventDefault()
n=p.gbk().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.es
if(o!=null){p=p.gbk().length
o.a.cZ(-1,p)}return}if(A.p(m.code)==="ArrowDown"||A.p(m.code)==="KeyS"){m.preventDefault()
n=p.gbk().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.es
if(o!=null){p=p.gbk().length
o.a.cZ(1,p)}return}if(A.p(m.code)==="ArrowLeft"||A.p(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d0[B.d.S(p.e.a-1+7,7)]
else{p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.p(m.code)==="ArrowRight"||A.p(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d0[(p.e.a+1)%7]
else{p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w,p.f,p.r)}return}if(A.p(m.code)==="KeyQ"){m.preventDefault()
p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w*0.2,p.f,p.r)
return}if(A.p(m.code)==="KeyE"){m.preventDefault()
p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w*0.2,p.f,p.r)
return}if(A.p(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.mK()
else p.mM()
return}if(B.b.T(A.p(m.code),"Digit")||B.b.T(A.p(m.code),"Numpad")){o=A.p(m.code)
o=A.xR(o,"Digit","")
s=A.xR(o,"Numpad","")
r=A.ds(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.at.j().y&&!A.Q(m.repeat))if($.cp().lN(A.p(m.code))){m.preventDefault()
return}if(A.p(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.bc
if(p==null)A.jf($.cm.j())
else p.a9()
return}q=$.bc==null&&!p.a
if(!A.Q(m.repeat)&&q)$.fd.j().fY(new A.kQ(A.p(m.code),!0,1))
if(A.p(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.Bk())$.ms=!$.ms
if((A.p(m.code)==="KeyJ"||A.p(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.at.j().y){m.preventDefault()
A.ji($.j5.j())}if(A.p(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.at.j().y)A.ji($.mh.j())
if(A.p(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.at.j().y)A.ji($.j4.j())
if(A.p(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.at.j().y)A.ji($.j7.j())
if(A.p(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mv("saved")},
$S:1}
A.w2.prototype={
$1(a){var s=A.a(a)
if($.bc==null)$.fd.j().fY(new A.kQ(A.p(s.code),!1,0))},
$S:1}
A.w3.prototype={
$1(a){return A.zO()},
$S:2}
A.w4.prototype={
$1(a){return A.zO()},
$S:2}
A.w5.prototype={
$1(a){return A.Fc(A.a(a))},
$S:2}
A.w6.prototype={
$1(a){var s=A.a(a)
if($.at.j().y){s.preventDefault()
A.Fb(s)
return}$.ad.j().cT($.y.j())},
$S:1}
A.w7.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.ho()
if(!o.a||$.es==null)return
p.preventDefault()
s=o.gbk()
r=A.a6(p.deltaY)>0?1:-1
o=$.es
o.toString
q=J.cH(s)
o.a.cZ(A.f(r),q)},
$S:1}
A.vb.prototype={
$1(a){var s=A.p(A.a(a).message)
A.vk(s,null)},
$S:1}
A.vc.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.vk("unhandled rejection: "+A.v(s==null?A.p(a.type):s),null)},
$S:1}
A.vg.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:42}
A.vp.prototype={
$0(){this.a.className=""},
$S:14}
A.vt.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:41}
A.ve.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.vl.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.vi.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.vj.prototype={
$1(a){return t.fW.a(a).w},
$S:27};(function aliases(){var s=J.e5.prototype
s.i7=s.q
s=A.n.prototype
s.i6=s.cX
s=A.i3.prototype
s.i8=s.bH})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Fj","CF",32)
r(J.r.prototype,"gaq","p",11)
q(A,"Fx","CX",29)
r(A.aN.prototype,"gaq","p",11)
p(A.cf.prototype,"gkI","R",11)
o(A,"Gp","DR",20)
o(A,"Gq","DS",20)
o(A,"Gr","DT",20)
q(A,"AD","G6",0)
r(A.ck.prototype,"gaq","p",11)
r(A.h_.prototype,"gaq","p",11)
o(A,"GA","EU",15)
p(A.kq.prototype,"gmR","mS",81)
var n
p(n=A.l8.prototype,"gmN","mO",9)
p(n,"gmV","mW",9)
p(n,"gmX","mY",9)
p(n,"gmP","mQ",9)
p(n,"gmT","mU",9)
q(A,"AI","DW",179)
q(A,"I3","wI",44)
p(A.dn.prototype,"gaC","hm",58)
p(n=A.kd.prototype,"gjm","jn",2)
p(n,"gjo","jp",2)
p(n,"gjs","jt",2)
p(n,"gjw","jx",2)
p(n,"gjy","jz",2)
p(n,"gju","jv",2)
p(n,"gjq","jr",2)
o(A,"GW","zU",15)
o(A,"H_","zT",15)
o(A,"GP","CC",180)
o(A,"GQ","CD",181)
o(A,"H3","Cw",182)
p(A.i3.prototype,"gjA","jB",2)
p(A.fV.prototype,"gjb","jc",132)
p(A.lk.prototype,"glZ","m_",23)
o(A,"AQ","FM",183)
q(A,"AP","ER",0)
o(A,"GT","EM",122)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.K,null)
q(A.K,[A.wA,J.kf,A.id,J.ex,A.n,A.hs,A.ao,A.Y,A.r1,A.aD,A.hU,A.T,A.hD,A.hA,A.iu,A.av,A.ec,A.bQ,A.fK,A.fu,A.dW,A.f8,A.du,A.t0,A.qb,A.hB,A.iP,A.a7,A.pO,A.cg,A.ag,A.cx,A.hM,A.lO,A.lu,A.il,A.m5,A.ty,A.cB,A.lH,A.m8,A.u8,A.lv,A.c5,A.b2,A.lz,A.dC,A.as,A.lw,A.m3,A.j_,A.iC,A.lN,A.f9,A.iF,A.iU,A.m9,A.eB,A.jJ,A.tR,A.ub,A.eC,A.dX,A.lE,A.kA,A.ij,A.tz,A.z,A.N,A.ar,A.m6,A.rM,A.bq,A.iW,A.t2,A.m0,A.qa,A.lK,A.ej,A.qD,A.e9,A.kH,A.nJ,A.nK,A.nM,A.nL,A.kG,A.fq,A.k_,A.op,A.dt,A.k9,A.bW,A.o6,A.kF,A.bD,A.dp,A.bE,A.t6,A.ch,A.jM,A.qc,A.kI,A.kR,A.bp,A.l5,A.ia,A.aI,A.oq,A.cS,A.bX,A.pX,A.pV,A.kq,A.lb,A.q2,A.bN,A.c0,A.rW,A.rU,A.d5,A.l8,A.dm,A.jY,A.jZ,A.k0,A.oo,A.h1,A.aw,A.bl,A.aK,A.P,A.hu,A.kK,A.bo,A.qF,A.b6,A.qH,A.qG,A.lJ,A.i9,A.qR,A.tA,A.m7,A.u7,A.lU,A.lG,A.lY,A.lR,A.tM,A.bK,A.bI,A.aP,A.o1,A.o0,A.jo,A.eN,A.or,A.dn,A.kM,A.io,A.J,A.mW,A.hr,A.lx,A.jB,A.ly,A.jO,A.lB,A.hy,A.lC,A.jR,A.lD,A.k8,A.lI,A.hW,A.lP,A.fo,A.jC,A.wJ,A.i5,A.lV,A.kL,A.lW,A.eX,A.kZ,A.lZ,A.l_,A.m_,A.l1,A.m2,A.l0,A.m1,A.lf,A.ma,A.ib,A.lq,A.md,A.nH,A.k4,A.k6,A.hG,A.ih,A.x,A.jP,A.fO,A.oN,A.em,A.cV,A.fA,A.tq,A.dD,A.iZ,A.iY,A.mc,A.mb,A.uf,A.tm,A.tp,A.jQ,A.jv,A.h4,A.n0,A.mI,A.hp,A.mX,A.ww,A.n8,A.n2,A.iv,A.fp,A.nE,A.on,A.kd,A.pm,A.pq,A.aU,A.pK,A.pH,A.o2,A.pQ,A.cY,A.k,A.l2,A.lr,A.nx,A.jS,A.oc,A.fB,A.bu,A.kE,A.qx,A.fU,A.qV,A.eU,A.k2,A.oB,A.oA,A.jx,A.dN,A.dP,A.dR,A.dO,A.dQ,A.jD,A.kr,A.cD,A.ls,A.hJ,A.p4,A.a0,A.jV,A.ka,A.p5,A.jW,A.d4,A.jX,A.ei,A.eE,A.qS,A.eh,A.p2,A.og,A.rI,A.p7,A.cR,A.cv,A.pt,A.pr,A.ps,A.dr,A.pb,A.f2,A.bZ,A.eY,A.eT,A.pe,A.cQ,A.p3,A.eK,A.pd,A.cP,A.pi,A.i4,A.hT,A.bm,A.tk,A.kn,A.bT,A.pw,A.hq,A.nu,A.i6,A.qw,A.qs,A.qr,A.qt,A.qu,A.qv,A.km,A.qC,A.qP,A.kQ,A.qO,A.qQ,A.rD,A.eb,A.rE,A.fW,A.o3,A.tr,A.f3,A.jH,A.pk,A.po,A.qT,A.cW,A.qU,A.k3,A.f1,A.tl,A.oy,A.k1,A.q5,A.cK,A.bz,A.qp,A.rO,A.f0,A.f_,A.it,A.ln,A.eQ,A.d1,A.rN,A.ie,A.kW,A.kT,A.kU,A.kV,A.rR,A.jp,A.wv,A.dL,A.mS,A.dM,A.nw,A.b3,A.nF,A.fv,A.dd,A.jI,A.i3,A.o7,A.oH,A.oJ,A.fD,A.e0,A.oZ,A.oQ,A.oR,A.ca,A.p_,A.cU,A.fr,A.qe,A.dq,A.e7,A.bY,A.qj,A.qB,A.b_,A.ry,A.rC,A.cq,A.mP,A.lk,A.tj,A.dA,A.bs,A.c3,A.bO,A.lm,A.jr,A.lj,A.h2,A.lT,A.lS,A.iL,A.tx])
q(J.kf,[J.kh,J.hL,J.hO,J.hN,J.hP,J.fG,J.e3])
q(J.hO,[J.e5,J.r,A.fN,A.i_])
q(J.e5,[J.kD,J.eZ,J.e4])
r(J.kg,A.id)
r(J.pv,J.r)
q(J.fG,[J.hK,J.ki])
q(A.n,[A.eg,A.R,A.cy,A.G,A.hC,A.dB,A.f7,A.lt,A.m4,A.bR])
q(A.eg,[A.eA,A.j0])
r(A.iA,A.eA)
r(A.iy,A.j0)
r(A.aV,A.iy)
q(A.ao,[A.fH,A.dy,A.kj,A.la,A.kS,A.lF,A.hR,A.js,A.cr,A.iq,A.l9,A.fX,A.jG])
r(A.fZ,A.Y)
r(A.de,A.fZ)
q(A.R,[A.a2,A.ac,A.am,A.L,A.f6,A.iE])
q(A.a2,[A.im,A.I,A.eS,A.lM])
r(A.df,A.cy)
q(A.bQ,[A.ek,A.el])
q(A.ek,[A.aB,A.fb,A.iM])
q(A.el,[A.ay,A.b0,A.iN])
r(A.h6,A.fK)
r(A.ed,A.h6)
r(A.hv,A.ed)
q(A.dW,[A.jF,A.jE,A.l7,A.vJ,A.vL,A.tu,A.tt,A.uj,A.ov,A.tK,A.tN,A.pR,A.tP,A.wg,A.wh,A.vC,A.qE,A.t7,A.q_,A.q0,A.q1,A.qd,A.pY,A.pZ,A.q3,A.rX,A.rY,A.t_,A.ok,A.oi,A.oj,A.qg,A.qh,A.qM,A.qL,A.qK,A.qJ,A.qI,A.qN,A.v0,A.v1,A.qX,A.qY,A.wn,A.wl,A.os,A.pT,A.vz,A.oO,A.oP,A.tn,A.to,A.na,A.nd,A.nc,A.ne,A.n1,A.mJ,A.mK,A.mL,A.mZ,A.n_,A.mY,A.pn,A.pI,A.of,A.oC,A.oE,A.oF,A.oG,A.nf,A.ng,A.nh,A.ni,A.nj,A.nl,A.nm,A.nn,A.no,A.np,A.nq,A.nr,A.nk,A.vy,A.ns,A.nt,A.vf,A.vw,A.nI,A.oh,A.p6,A.wo,A.v5,A.v4,A.uh,A.vo,A.pj,A.rJ,A.pa,A.p8,A.vv,A.pf,A.ph,A.vu,A.ob,A.pN,A.pD,A.vn,A.rH,A.rG,A.rF,A.o4,A.o5,A.ox,A.qq,A.r_,A.r0,A.rS,A.rT,A.mH,A.mF,A.n5,A.n6,A.nz,A.nD,A.nC,A.nB,A.nV,A.nU,A.nW,A.nX,A.nY,A.nT,A.nO,A.nP,A.o_,A.o8,A.o9,A.oa,A.oe,A.oI,A.oK,A.oL,A.oX,A.oU,A.oV,A.oW,A.oT,A.oS,A.p1,A.py,A.pz,A.pA,A.qk,A.ql,A.qm,A.rt,A.ru,A.rl,A.rm,A.rk,A.rn,A.r5,A.ro,A.rp,A.rq,A.rj,A.rb,A.rc,A.rd,A.re,A.rf,A.rg,A.rh,A.ri,A.ra,A.r6,A.r7,A.r8,A.r9,A.rs,A.rr,A.rA,A.rL,A.mR,A.th,A.tg,A.ti,A.tc,A.tf,A.ta,A.t9,A.vF,A.t8,A.mM,A.mN,A.mO,A.u3,A.u4,A.tZ,A.u0,A.u1,A.tY,A.tU,A.tV,A.tW,A.uv,A.uw,A.uD,A.uE,A.uF,A.uy,A.uz,A.uA,A.ur,A.un,A.uo,A.v8,A.v9,A.vN,A.vO,A.vZ,A.w0,A.w1,A.w2,A.w3,A.w4,A.w5,A.w6,A.w7,A.vb,A.vc,A.vg,A.vt,A.vl,A.vi,A.vj])
q(A.jF,[A.nN,A.pE,A.vK,A.uk,A.vx,A.ow,A.tL,A.pP,A.pS,A.tS,A.t4,A.t3,A.wi,A.pW,A.q4,A.rV,A.rZ,A.ol,A.qZ,A.wm,A.wk,A.nb,A.n3,A.n4,A.pJ,A.oD,A.vq,A.pc,A.pM,A.pp,A.oz,A.q7,A.q8,A.q9,A.rP,A.rQ,A.nG,A.pB,A.pC,A.mQ,A.td,A.tb,A.u_,A.tX,A.tT,A.uu,A.uC,A.vS,A.vT,A.ve])
q(A.fu,[A.a4,A.cN])
q(A.du,[A.hw,A.iO,A.iV])
r(A.aN,A.hw)
q(A.jE,[A.qy,A.tv,A.tw,A.u9,A.ot,A.tB,A.tG,A.tF,A.tD,A.tC,A.tJ,A.tI,A.tH,A.u6,A.vm,A.ud,A.uc,A.v_,A.uT,A.uU,A.uZ,A.uO,A.uQ,A.uP,A.uY,A.uM,A.uN,A.uV,A.uW,A.uX,A.uS,A.uR,A.v3,A.vA,A.p9,A.pg,A.v6,A.mG,A.mU,A.mT,A.n7,A.nR,A.nS,A.nQ,A.oM,A.oY,A.qo,A.r3,A.r4,A.rv,A.rw,A.rx,A.rB,A.te,A.u2,A.uG,A.uH,A.uI,A.uJ,A.ux,A.uB,A.us,A.ut,A.up,A.uq,A.va,A.vP,A.w_,A.w8,A.w9,A.wa,A.wb,A.wc,A.wd,A.we,A.vQ,A.vR,A.vU,A.vV,A.vW,A.vX,A.vY,A.vp])
r(A.i1,A.dy)
q(A.l7,[A.l3,A.fn])
q(A.a7,[A.cf,A.iB,A.lL])
r(A.hQ,A.cf)
r(A.fM,A.fN)
q(A.i_,[A.ks,A.b5])
q(A.b5,[A.iH,A.iJ])
r(A.iI,A.iH)
r(A.hY,A.iI)
r(A.iK,A.iJ)
r(A.hZ,A.iK)
q(A.hY,[A.hX,A.kt])
q(A.hZ,[A.ku,A.kv,A.kw,A.kx,A.ky,A.eM,A.i0])
r(A.h5,A.lF)
r(A.iw,A.lz)
r(A.lX,A.j_)
r(A.iD,A.iB)
r(A.ck,A.iO)
r(A.h_,A.iV)
q(A.eB,[A.jy,A.jT,A.kk])
q(A.jJ,[A.nv,A.pG,A.pF,A.t5])
r(A.kl,A.hR)
r(A.tQ,A.tR)
r(A.le,A.jT)
q(A.cr,[A.fQ,A.kc])
r(A.lA,A.iW)
q(A.lE,[A.eP,A.fx,A.ft,A.eJ,A.fm,A.hV,A.d_,A.fT,A.fz,A.jA,A.ht,A.fy,A.eR,A.eL,A.dx,A.eF,A.ce,A.ic,A.cO,A.fS,A.ii,A.fC,A.ju,A.ix,A.iz,A.k5,A.hE,A.hH,A.k7,A.eI,A.hF,A.eW,A.cZ,A.fs,A.fE,A.h3,A.jz,A.ez,A.jK,A.jN,A.b7,A.jw,A.cc,A.eH,A.eD,A.e_,A.dZ,A.dY,A.e1,A.kC,A.kP,A.fR,A.cC,A.dw,A.bM,A.bC,A.ke,A.f4,A.cj,A.cI,A.cs,A.cJ,A.dc,A.db,A.dT,A.dU,A.dS,A.ey,A.di,A.cL,A.cM,A.dj,A.dh,A.dk,A.cd,A.dg,A.ct,A.jq,A.bn,A.ci,A.e8,A.cA,A.bL,A.bB,A.ig,A.bJ,A.c1,A.c2,A.ef,A.d0])
q(A.dt,[A.by,A.b8,A.cz,A.kB,A.cu])
r(A.qW,A.lY)
r(A.lo,A.mb)
r(A.iG,A.d4)
q(A.i3,[A.hx,A.nZ,A.od,A.hI,A.p0,A.px,A.qn,A.r2,A.fV,A.rK])
q(A.tj,[A.ll,A.lQ,A.b9,A.li,A.lg,A.is,A.lh])
s(A.fZ,A.ec)
s(A.j0,A.Y)
s(A.iH,A.Y)
s(A.iI,A.av)
s(A.iJ,A.Y)
s(A.iK,A.av)
s(A.h6,A.iU)
s(A.iV,A.m9)
s(A.lY,A.tM)
s(A.mb,A.uf)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",B:"double",bj:"num",e:"String",l:"bool",ar:"Null",F:"List",K:"Object",Z:"Map",af:"JSObject"},mangledNames:{},types:["~()","ar(K?)","~(K?)","l(e)","dl()","l(B)","0&()","l(@)","~(l)","dl(b8?)","l(aw)","l(K?)","i(bT,bT)","l(eQ)","ar()","@(@)","l(b_)","l(P)","l(bT)","~(@)","~(~())","l(eb)","ar(@)","l(bO)","e(e)","i(N<e,e>,N<e,e>)","l(bE)","l(f2)","e(dP)","i()","e(dN)","~(e,B)","i(@,@)","e(K?)","i(aU)","l(ei)","l(cI)","l(N<e,F<e>>)","@(e)","~(af)","l(ct)","l(bz)","l(cd)","@()","l()","e(c0)","l(i)","~(K?,K?)","B(B,h4)","fo()","l(N<e,aI>)","aI(N<e,aI>)","aI(aI,aI)","i(aP<bK>,aP<bK>)","c_(aP<bK>)","i(aP<bI>,aP<bI>)","c_(aP<bI>)","eN(B,B,B,B)","J(J)","~(eX)","eX()","K?(K?)","ar(@,cX)","bU<ar>(N<e,e>)","l(F<e>)","i(e,e)","i(bZ,bZ)","i(+influence,light(B,bD),+influence,light(B,bD))","+effectiveScore,light,score(B,aU,B)(aU)","i(+effectiveScore,light,score(B,aU,B),+effectiveScore,light,score(B,aU,B))","l(cc)","~(i,@)","~(K,cX)","ar(K,cX)","l(eT)","dN(K?)","dP(K?)","dO(K?)","dQ(K?)","l(bX)","i(cS,cS)","dp(cz)","e(dO)","e(dQ)","e(dR)","cz(i,i,e?)","dZ(e)","dR(K?)","by(i,i,e?)","l(eY)","e(i,a0,a0,a0)","i(d4,d4)","i(i,+(by,ch))","l(eh)","i(i)","l(bZ)","l(cv)","l(cR)","~(@,@)","i(dr,dr)","l(cQ)","N<e,e>(e,@)","e?(e)","l(c0)","l(bM)","l(bC)","f1()","i(bN,bN)","ar(~())","i(N<e,cK>,N<e,cK>)","b8(i,i,e?)","N<i,@>(i,f0)","N<i,@>(i,f_)","l(ip?)","l(N<@,@>)","N<e,e>(N<@,@>)","l?(K?)","i(i,+(b8,d5))","e()","0^(n<0^>,K?)<K?>","B(B,e)","e(aw)","~(i)","~(B)","i(aa,aa)","@(@,e)","ar(af)","0^(e,n<0^>)<C>","Z<e,e>(Z<e,e>,e)","Z<e,K?>(dq)","e(bn)","l(bn)","l(bB)","cu(i,i,e?)","l(di)","l(cL)","l(cM)","l(dj)","l(dh)","l(dk)","l(dg)","ib(by)","l(cs)","l(cJ)","l(dc)","l(db)","e(cq)","i(cq,cq)","dl(e{fallback:e?})","i(bO,bO)","F<d1>()","l(d1)","l(N<e,e>)","i(c3,c3)","Z<e,@>(bO)","l(c2)","l(c1)","l(bJ)","0&(e,i?)","bN(N<e,b8>)","i(c0,c0)","bD?()","i(bX,bX)","e(bX)","i(N<i,e>,N<i,e>)","F<bD>()","e(N<i,e>)","fq()","~(bB)","~(dM)","~(fD)","~(dL)","~(e0)","~(fv)","l(fU)","~(bL)","~(i,e)","~(bM,bC)","B()","h1()","cR(K?)","cv(K?)","cQ(K?)","~(bj)","F<e>(F<e>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aB&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fb&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iM&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iN&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.Ec(v.typeUniverse,JSON.parse('{"e4":"e5","kD":"e5","eZ":"e5","Hm":"fN","r":{"F":["1"],"R":["1"],"af":[],"n":["1"]},"kh":{"l":[],"ai":[]},"hL":{"ar":[],"ai":[]},"hO":{"af":[]},"e5":{"af":[]},"kg":{"id":[]},"pv":{"r":["1"],"F":["1"],"R":["1"],"af":[],"n":["1"]},"ex":{"a9":["1"]},"fG":{"B":[],"bj":[],"b4":["bj"]},"hK":{"B":[],"i":[],"bj":[],"b4":["bj"],"ai":[]},"ki":{"B":[],"bj":[],"b4":["bj"],"ai":[]},"e3":{"e":[],"b4":["e"],"qi":[],"ai":[]},"eg":{"n":["2"]},"hs":{"a9":["2"]},"eA":{"eg":["1","2"],"n":["2"],"n.E":"2"},"iA":{"eA":["1","2"],"eg":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"iy":{"Y":["2"],"F":["2"],"eg":["1","2"],"R":["2"],"n":["2"]},"aV":{"iy":["1","2"],"Y":["2"],"F":["2"],"eg":["1","2"],"R":["2"],"n":["2"],"n.E":"2","Y.E":"2"},"fH":{"ao":[]},"de":{"Y":["i"],"ec":["i"],"F":["i"],"R":["i"],"n":["i"],"Y.E":"i","ec.E":"i"},"R":{"n":["1"]},"a2":{"R":["1"],"n":["1"]},"im":{"a2":["1"],"R":["1"],"n":["1"],"n.E":"1","a2.E":"1"},"aD":{"a9":["1"]},"cy":{"n":["2"],"n.E":"2"},"df":{"cy":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"hU":{"a9":["2"]},"I":{"a2":["2"],"R":["2"],"n":["2"],"n.E":"2","a2.E":"2"},"G":{"n":["1"],"n.E":"1"},"T":{"a9":["1"]},"hC":{"n":["2"],"n.E":"2"},"hD":{"a9":["2"]},"hA":{"a9":["1"]},"dB":{"n":["1"],"n.E":"1"},"iu":{"a9":["1"]},"fZ":{"Y":["1"],"ec":["1"],"F":["1"],"R":["1"],"n":["1"]},"eS":{"a2":["1"],"R":["1"],"n":["1"],"n.E":"1","a2.E":"1"},"aB":{"ek":[],"bQ":[]},"fb":{"ek":[],"bQ":[]},"iM":{"ek":[],"bQ":[]},"ay":{"el":[],"bQ":[]},"b0":{"el":[],"bQ":[]},"iN":{"el":[],"bQ":[]},"hv":{"ed":["1","2"],"h6":["1","2"],"fK":["1","2"],"iU":["1","2"],"Z":["1","2"]},"fu":{"Z":["1","2"]},"a4":{"fu":["1","2"],"Z":["1","2"]},"f7":{"n":["1"],"n.E":"1"},"f8":{"a9":["1"]},"cN":{"fu":["1","2"],"Z":["1","2"]},"hw":{"du":["1"],"ea":["1"],"R":["1"],"n":["1"]},"aN":{"hw":["1"],"du":["1"],"ea":["1"],"R":["1"],"n":["1"]},"i1":{"dy":[],"ao":[]},"kj":{"ao":[]},"la":{"ao":[]},"iP":{"cX":[]},"dW":{"eG":[]},"jE":{"eG":[]},"jF":{"eG":[]},"l7":{"eG":[]},"l3":{"eG":[]},"fn":{"eG":[]},"kS":{"ao":[]},"cf":{"a7":["1","2"],"wC":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ac":{"R":["1"],"n":["1"],"n.E":"1"},"cg":{"a9":["1"]},"am":{"R":["1"],"n":["1"],"n.E":"1"},"ag":{"a9":["1"]},"L":{"R":["N<1,2>"],"n":["N<1,2>"],"n.E":"N<1,2>"},"cx":{"a9":["N<1,2>"]},"hQ":{"cf":["1","2"],"a7":["1","2"],"wC":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ek":{"bQ":[]},"el":{"bQ":[]},"hM":{"D6":[],"qi":[]},"lO":{"i8":[],"fL":[]},"lt":{"n":["i8"],"n.E":"i8"},"lu":{"a9":["i8"]},"il":{"fL":[]},"m4":{"n":["fL"],"n.E":"fL"},"m5":{"a9":["fL"]},"fM":{"af":[],"ai":[]},"eM":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"fN":{"af":[],"ai":[]},"i_":{"af":[]},"ks":{"af":[],"ai":[]},"b5":{"bV":["1"],"af":[]},"hY":{"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"]},"hZ":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"]},"hX":{"om":[],"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"],"ai":[],"Y.E":"B","av.E":"B"},"kt":{"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"],"ai":[],"Y.E":"B","av.E":"B"},"ku":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"kv":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"kw":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"kx":{"wQ":[],"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"ky":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"i0":{"ip":[],"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"lF":{"ao":[]},"h5":{"dy":[],"ao":[]},"c5":{"a9":["1"]},"bR":{"n":["1"],"n.E":"1"},"b2":{"ao":[]},"iw":{"lz":["1"]},"as":{"bU":["1"]},"j_":{"zj":[]},"lX":{"j_":[],"zj":[]},"iB":{"a7":["1","2"],"Z":["1","2"]},"iD":{"iB":["1","2"],"a7":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"f6":{"R":["1"],"n":["1"],"n.E":"1"},"iC":{"a9":["1"]},"ck":{"du":["1"],"yG":["1"],"ea":["1"],"R":["1"],"n":["1"]},"f9":{"a9":["1"]},"Y":{"F":["1"],"R":["1"],"n":["1"]},"a7":{"Z":["1","2"]},"iE":{"R":["2"],"n":["2"],"n.E":"2"},"iF":{"a9":["2"]},"fK":{"Z":["1","2"]},"ed":{"h6":["1","2"],"fK":["1","2"],"iU":["1","2"],"Z":["1","2"]},"du":{"ea":["1"],"R":["1"],"n":["1"]},"iO":{"du":["1"],"ea":["1"],"R":["1"],"n":["1"]},"h_":{"du":["1"],"m9":["1"],"ea":["1"],"R":["1"],"n":["1"]},"lL":{"a7":["e","@"],"Z":["e","@"],"a7.K":"e","a7.V":"@"},"lM":{"a2":["e"],"R":["e"],"n":["e"],"n.E":"e","a2.E":"e"},"jy":{"eB":["F<i>","e"]},"jT":{"eB":["e","F<i>"]},"hR":{"ao":[]},"kl":{"ao":[]},"kk":{"eB":["K?","e"]},"le":{"eB":["e","F<i>"]},"eC":{"b4":["eC"]},"B":{"bj":[],"b4":["bj"]},"dX":{"b4":["dX"]},"i":{"bj":[],"b4":["bj"]},"F":{"R":["1"],"n":["1"]},"bj":{"b4":["bj"]},"i8":{"fL":[]},"ea":{"R":["1"],"n":["1"]},"e":{"b4":["e"],"qi":[]},"lE":{"C":[]},"js":{"ao":[]},"dy":{"ao":[]},"cr":{"ao":[]},"fQ":{"ao":[]},"kc":{"ao":[]},"iq":{"ao":[]},"l9":{"ao":[]},"fX":{"ao":[]},"jG":{"ao":[]},"kA":{"ao":[]},"ij":{"ao":[]},"m6":{"cX":[]},"bq":{"Dn":[]},"iW":{"lc":[]},"m0":{"lc":[]},"lA":{"lc":[]},"lK":{"wK":[]},"ej":{"wK":[]},"eP":{"C":[]},"fx":{"C":[]},"ft":{"C":[]},"by":{"dt":[]},"b8":{"dt":[]},"cz":{"dt":[]},"cu":{"dt":[]},"kB":{"dt":[]},"eJ":{"C":[]},"fm":{"C":[]},"hV":{"C":[]},"d_":{"C":[]},"jM":{"Dd":[]},"fT":{"C":[]},"fz":{"C":[]},"jA":{"C":[]},"ht":{"C":[]},"fy":{"C":[]},"eR":{"C":[]},"eL":{"C":[]},"dx":{"C":[]},"eF":{"C":[]},"k0":{"D7":[]},"ce":{"C":[]},"ic":{"C":[]},"cO":{"C":[]},"fS":{"C":[]},"i9":{"Da":[]},"lJ":{"c_":[]},"m7":{"c_":[]},"lU":{"D9":[]},"lG":{"Ck":[]},"ii":{"C":[]},"bK":{"b4":["bK"]},"bI":{"b4":["bI"]},"fC":{"C":[]},"ju":{"C":[]},"ix":{"C":[]},"hr":{"an":[]},"lx":{"aa":[]},"jB":{"an":[]},"ly":{"aa":[]},"jO":{"an":[]},"lB":{"aa":[]},"iz":{"C":[]},"hy":{"an":[]},"lC":{"aa":[]},"jR":{"an":[]},"lD":{"aa":[]},"k8":{"an":[]},"lI":{"aa":[]},"hW":{"an":[]},"lP":{"aa":[]},"jC":{"D8":[]},"i5":{"an":[]},"lV":{"aa":[]},"kL":{"an":[]},"lW":{"aa":[]},"kZ":{"an":[]},"lZ":{"aa":[]},"l_":{"an":[]},"m_":{"aa":[]},"l1":{"an":[]},"m2":{"aa":[]},"l0":{"an":[]},"m1":{"aa":[]},"lf":{"an":[]},"ma":{"aa":[]},"lq":{"an":[]},"md":{"aa":[]},"k5":{"C":[]},"hE":{"C":[]},"hH":{"C":[]},"k7":{"C":[]},"eI":{"C":[]},"hF":{"C":[]},"eW":{"C":[]},"cZ":{"C":[]},"fs":{"C":[]},"jP":{"C3":[]},"fE":{"C":[]},"h3":{"C":[]},"b7":{"C":[]},"jz":{"C":[]},"ez":{"C":[]},"jK":{"C":[]},"jN":{"C":[]},"dD":{"dl":[]},"lo":{"Cs":[]},"jw":{"C":[]},"cc":{"C":[]},"eH":{"C":[]},"iG":{"d4":[]},"eD":{"C":[]},"e_":{"C":[]},"dZ":{"C":[]},"dY":{"C":[]},"e1":{"C":[]},"kC":{"C":[]},"kP":{"C":[]},"fR":{"C":[]},"cC":{"C":[]},"dw":{"C":[]},"bM":{"C":[]},"bC":{"C":[]},"ke":{"C":[]},"f4":{"C":[]},"cj":{"C":[]},"cI":{"C":[]},"cs":{"C":[]},"cJ":{"C":[]},"dc":{"C":[]},"db":{"C":[]},"dT":{"C":[]},"dU":{"C":[]},"ey":{"C":[]},"dS":{"C":[]},"di":{"C":[]},"cL":{"C":[]},"cM":{"C":[]},"dj":{"C":[]},"dh":{"C":[]},"dk":{"C":[]},"cd":{"C":[]},"dg":{"C":[]},"ct":{"C":[]},"jq":{"C":[]},"bn":{"C":[]},"ci":{"C":[]},"e8":{"C":[]},"cA":{"C":[]},"bL":{"C":[]},"bB":{"C":[]},"ig":{"C":[]},"bJ":{"C":[]},"c1":{"C":[]},"c2":{"C":[]},"ef":{"C":[]},"d0":{"C":[]},"lT":{"yW":[]},"CB":{"F":["i"],"R":["i"],"n":["i"]},"ip":{"F":["i"],"R":["i"],"n":["i"]},"Ds":{"F":["i"],"R":["i"],"n":["i"]},"Cz":{"F":["i"],"R":["i"],"n":["i"]},"wQ":{"F":["i"],"R":["i"],"n":["i"]},"CA":{"F":["i"],"R":["i"],"n":["i"]},"Dr":{"F":["i"],"R":["i"],"n":["i"]},"om":{"F":["B"],"R":["B"],"n":["B"]},"Cj":{"F":["B"],"R":["B"],"n":["B"]}}'))
A.Eb(v.typeUniverse,JSON.parse('{"fZ":1,"j0":2,"b5":1,"iO":1,"iV":1,"jJ":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.X
return{mq:s("cI"),dx:s("hp"),bC:s("cq"),v:s("b2"),iF:s("jv"),ul:s("db"),EL:s("cJ"),xs:s("cs"),gc:s("dc"),t3:s("jx"),mD:s("dN"),lT:s("dO"),bJ:s("dP"),gI:s("dQ"),ya:s("dR"),z3:s("bI"),Bu:s("fo"),p:s("aU"),rO:s("fr"),E:s("de"),hO:s("b4<@>"),CH:s("hu"),w:s("a4<e,e>"),I:s("a4<e,i>"),M:s("aN<e>"),f7:s("eC"),fP:s("bJ"),yb:s("dX"),he:s("R<@>"),yW:s("cc"),g:s("bT"),D:s("C"),yt:s("ao"),hl:s("a0"),B:s("om"),pH:s("aI"),Fr:s("cK"),BO:s("eG"),ls:s("bU<ar>"),vS:s("dg"),aJ:s("dh"),x:s("cd"),bK:s("di"),gm:s("dj"),dn:s("cL"),mx:s("dk"),j_:s("cM"),EJ:s("cN<bL,e>"),_:s("dl"),Eb:s("ct"),qX:s("e1"),mF:s("cQ"),iO:s("cu"),oW:s("cR"),fl:s("cv"),FA:s("n<hu>"),CB:s("n<cS>"),yT:s("n<e>"),x6:s("n<bN>"),oJ:s("n<B>"),tY:s("n<@>"),uI:s("n<i>"),Fg:s("r<cq>"),jC:s("r<aU>"),km:s("r<fr>"),sa:s("r<ca>"),ns:s("r<jS>"),r:s("r<bT>"),uH:s("r<jW>"),Dl:s("r<a0>"),iJ:s("r<bU<~>>"),pC:s("r<k2>"),C1:s("r<dl>"),ka:s("r<bl>"),Fm:s("r<eK>"),op:s("r<cP>"),hr:s("r<dm>"),s3:s("r<cu>"),sL:s("r<af>"),Bv:s("r<kn>"),Bq:s("r<N<e,e>>"),rq:s("r<Z<e,K>>"),A7:s("r<Z<e,e>>"),cs:s("r<Z<e,@>>"),a6:s("r<cS>"),p0:s("r<bX>"),s6:s("r<by>"),pq:s("r<aw>"),bA:s("r<dq>"),xz:s("r<bz>"),s0:s("r<eN>"),hc:s("r<cU>"),ea:s("r<dr>"),Fk:s("r<kF>"),qP:s("r<bZ>"),d8:s("r<i6>"),kv:s("r<eQ>"),nR:s("r<+(e,F<bZ>)>"),kd:s("r<+(e,e)>"),rh:s("r<+influence,light(B,bD)>"),wt:s("r<+(i,e)>"),e_:s("r<an>"),u:s("r<aa>"),Ft:s("r<i9>"),C:s("r<P>"),h1:s("r<bp>"),s2:s("r<c_>"),eY:s("r<eT>"),xB:s("r<cW>"),rn:s("r<kT>"),gg:s("r<kU>"),tS:s("r<ie>"),yv:s("r<kV>"),wM:s("r<kW>"),El:s("r<fW>"),AM:s("r<aP<bI>>"),fs:s("r<aP<bK>>"),cv:s("r<bD>"),DZ:s("r<eY>"),s:s("r<e>"),r8:s("r<bN>"),fa:s("r<c0>"),k:s("r<J>"),h:s("r<k>"),ld:s("r<it>"),Dc:s("r<dA>"),Fi:s("r<c3>"),jV:s("r<d1>"),yo:s("r<f1>"),nm:s("r<f2>"),uk:s("r<bu>"),wf:s("r<iG>"),il:s("r<ei>"),l5:s("r<eh>"),ow:s("r<lR>"),j5:s("r<lS>"),pv:s("r<h2>"),Fy:s("r<em<dp>>"),EM:s("r<em<ch>>"),w_:s("r<em<bp>>"),f2:s("r<em<d5>>"),n:s("r<B>"),zz:s("r<@>"),t:s("r<i>"),Cf:s("r<K?>"),AN:s("r<bj>"),T:s("hL"),m:s("af"),ud:s("e4"),Eh:s("bV<@>"),AQ:s("F<aU>"),hk:s("F<bT>"),b:s("F<bl>"),xp:s("F<cu>"),nx:s("F<af>"),rW:s("F<Z<e,e>>"),qr:s("F<by>"),R:s("F<aw>"),fG:s("F<cU>"),Es:s("F<bZ>"),DX:s("F<+(e,e)>"),pL:s("F<+(i,e)>"),bE:s("F<bp>"),fx:s("F<cW>"),a:s("F<e>"),uh:s("F<it>"),D0:s("F<dA>"),cf:s("F<c3>"),p7:s("F<d1>"),dd:s("F<B>"),j:s("F<@>"),J:s("F<i>"),ik:s("F<af?>"),vX:s("F<K?>"),m2:s("hT"),h6:s("N<e,aI>"),gJ:s("N<e,cK>"),q:s("N<e,e>"),no:s("N<e,b8>"),AC:s("N<@,@>"),ou:s("N<i,e>"),pr:s("N<i,@>"),yx:s("N<e,F<e>>"),mf:s("Z<e,dl>"),vD:s("Z<e,cz>"),ap:s("Z<e,aw>"),G:s("Z<e,e>"),qH:s("Z<e,dx>"),m0:s("Z<e,l>"),gG:s("Z<e,B>"),P:s("Z<e,@>"),f:s("Z<@,@>"),eU:s("Z<i,e>"),pG:s("Z<i,f_>"),tQ:s("Z<i,f0>"),Bx:s("Z<e,F<e>>"),oZ:s("Z<e,K?>"),q1:s("Z<c2,F<c3>>"),ee:s("Z<i,Z<e,e>>"),jT:s("I<e,e?>"),w1:s("dp"),pw:s("cz"),jt:s("cS"),wl:s("bX"),kc:s("by"),rV:s("fM"),mV:s("eM"),c:s("ar"),K:s("K"),BB:s("bK"),A:s("aw"),oP:s("dq"),wJ:s("bn"),E4:s("bz"),A_:s("dr"),U:s("bZ"),DL:s("i4"),AB:s("kH"),yi:s("fO"),rx:s("i6"),xK:s("e9"),Y:s("eQ"),iM:s("Hn"),ep:s("+()"),k0:s("+(by,ch)"),ut:s("+(b8,d5)"),rf:s("+(B,B)"),mn:s("+influence,light(B,bD)"),tK:s("+effectiveScore,light,score(B,aU,B)"),ez:s("i8"),wZ:s("aa"),lg:s("ia"),tc:s("cV<cu,bp>"),ja:s("cV<cz,dp>"),wm:s("cV<by,ch>"),qq:s("cV<b8,d5>"),j2:s("P"),m3:s("bp"),yz:s("c_"),z_:s("eT"),F3:s("cW"),Dm:s("ie"),Q:s("ea<e>"),oG:s("ea<i>"),en:s("bB"),gl:s("b_"),W:s("eb"),u5:s("bC"),bG:s("bM"),ho:s("fW"),EH:s("aP<bI>"),E0:s("aP<bK>"),l:s("cX"),w8:s("eY"),qL:s("b7"),N:s("e"),Aj:s("b8"),jP:s("bN"),d:s("c0"),bp:s("dx"),sg:s("ai"),bs:s("dy"),qF:s("eZ"),hL:s("ed<e,e>"),qt:s("lb"),eP:s("lc"),cV:s("J"),a7:s("k"),qY:s("bE"),L:s("bO"),gM:s("c1"),hF:s("c2"),vw:s("f_"),BX:s("f0"),aA:s("dA"),AP:s("c3"),sy:s("ln"),bB:s("b9"),aS:s("d1"),fu:s("f1"),fw:s("G<bJ>"),vL:s("G<cc>"),vK:s("G<cd>"),Fj:s("G<bC>"),rZ:s("G<bM>"),vY:s("G<e>"),r4:s("G<bE>"),g2:s("G<c1>"),cE:s("G<c2>"),rt:s("T<bB>"),xG:s("T<b_>"),fh:s("T<bE>"),fW:s("f2"),hR:s("as<@>"),BT:s("iD<K?,K?>"),Ez:s("d4"),rL:s("h1"),xT:s("ei"),wU:s("eh"),la:s("lQ"),qS:s("iL"),jS:s("h4"),EF:s("bR<+(e,b8)>"),Br:s("bR<c_>"),V:s("iY"),e:s("iZ"),y:s("l"),Bs:s("l()"),kr:s("l(bJ)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(K)"),pz:s("l(bB)"),aV:s("l(b_)"),y2:s("l(bC)"),ty:s("l(bM)"),Ag:s("l(e)"),rd:s("l(bE)"),da:s("l(c1)"),qR:s("l(c2)"),i:s("B"),z:s("@"),pF:s("@()"),h_:s("@(K)"),nW:s("@(K,cX)"),S:s("i"),eZ:s("bU<ar>?"),r9:s("r<K?>?"),gt:s("af?"),rK:s("F<@>?"),jd:s("Z<e,F<e>>?"),X:s("K?"),dM:s("yW?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("ip?"),F:s("dC<@,@>?"),Af:s("lN?"),k7:s("l?"),wK:s("l(fU)?"),u6:s("B?"),lo:s("i?"),s7:s("bj?"),Z:s("~()?"),Cv:s("~(dL)?"),kC:s("~(dM)?"),pf:s("~(fv)?"),hq:s("~(fD)?"),CA:s("~(e0)?"),hQ:s("~(bL)?"),Ci:s("~(bB)?"),nf:s("~(bM,bC)?"),DI:s("~(e,B)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),o:s("bj"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.iu=J.kf.prototype
B.a=J.r.prototype
B.d=J.hK.prototype
B.c=J.fG.prototype
B.b=J.e3.prototype
B.iv=J.e4.prototype
B.iw=J.hO.prototype
B.t=A.hX.prototype
B.dc=A.i0.prototype
B.dr=J.kD.prototype
B.bO=J.eZ.prototype
B.a9=new A.cI(1,"standard")
B.H=new A.jp(B.a9)
B.bT=new A.cI(0,"concise")
B.bU=new A.cI(2,"verbose")
B.aq=new A.dL(null,null,null,null,null)
B.nr=new A.jq(0,"none")
B.e0=new A.fm(0,"opaque")
B.aN=new A.fm(1,"masked")
B.e2=new A.ju(1,"camera")
B.e3=new A.jw(4,"ambience")
B.bY=new A.cs(3,"mono")
B.aO=new A.dc(0,"full")
B.bX=new A.cs(0,"auto")
B.bW=new A.cJ(1,"standard")
B.bV=new A.db(0,"defaultMix")
B.aP=new A.dM(B.bX,B.bW,B.aO,B.bV)
B.aF=new A.kP(0,"pixeldart")
B.ea=new A.hq(B.aF,!0,!1,null,!1,null)
B.eb=new A.hq(B.aF,!1,!1,null,!1,null)
B.c_=new A.dS(1,"capturing")
B.ec=new A.dd(B.c_,null)
B.c0=new A.dS(3,"rejected")
B.aQ=new A.dd(B.c0,null)
B.c1=new A.dS(4,"applied")
B.bZ=new A.dd(B.c1,null)
B.c2=new A.dS(5,"cancelled")
B.ed=new A.dd(B.c2,null)
B.aR=new A.dS(2,"conflict")
B.ar=new A.jz(0,"add")
B.eh=new A.ez(0,"zero")
B.aa=new A.ez(1,"one")
B.Q=new A.jA(0,"alpha")
B.D=new A.dT(1,"button")
B.n=new A.dU(0,"normal")
B.ek=new A.b3("settings.back",B.D,"back","back to pause menu",B.n)
B.as=new A.dT(0,"heading")
B.el=new A.b3("settings.heading",B.as,"Settings",null,B.n)
B.em=new A.b3("settings.controls.heading",B.as,"Controls",null,B.n)
B.en=new A.b3("settings.controls.back",B.D,"back","back to settings categories",B.n)
B.eo=new A.b3("pause.heading",B.as,"Paused",null,B.n)
B.ep=new A.dT(3,"slider")
B.eq=new A.dT(4,"toggle")
B.c3=new A.dT(5,"keybind")
B.at=new A.dU(5,"disabled")
B.er=new A.dU(6,"error")
B.es=new A.dU(7,"destructive")
B.c4=new A.dU(8,"remapping")
B.c5=new A.hp()
B.ns=new A.nv()
B.et=new A.jy()
B.c6=new A.nH()
B.eu=new A.hA(A.X("hA<0&>"))
B.c7=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ev=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.eA=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.ew=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ez=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.ey=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.ex=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.c8=function(hooks) { return hooks; }

B.i=new A.kk()
B.eB=new A.kA()
B.nu=new A.qs()
B.eC=new A.qt()
B.c9=new A.qv()
B.eD=new A.cW()
B.aG=new A.cj(1,"gradeLUT")
B.eE=new A.cW()
B.eF=new A.qT()
B.eG=new A.qV()
B.f=new A.r1()
B.ca=new A.le()
B.my=new A.d_(0,"position")
B.mD=new A.bE(B.my,0,3)
B.dT=new A.d_(1,"normal")
B.mE=new A.bE(B.dT,3,3)
B.mz=new A.d_(2,"color")
B.mF=new A.bE(B.mz,6,4)
B.mA=new A.d_(4,"alpha")
B.mG=new A.bE(B.mA,10,1)
B.mB=new A.d_(5,"uv0")
B.mH=new A.bE(B.mB,11,2)
B.mC=new A.d_(8,"legacyMaterialEffect")
B.mI=new A.bE(B.mC,13,1)
B.V=s([B.mD,B.mE,B.mF,B.mG,B.mH,B.mI],A.X("r<bE>"))
B.ab=new A.t6()
B.nt=new A.jM()
B.eH=new A.tp()
B.aS=new A.lK()
B.x=new A.lX()
B.au=new A.m6()
B.eI=new A.fp(1.3089969389957472,0.1,60)
B.eJ=new A.fp(1.0471975511965976,0.1,60)
B.eK=new A.fp(0.8726646259971648,0.08,45)
B.R=new A.fs(0,"colorOnly")
B.cb=new A.fs(1,"colorAndDepth")
B.aT=new A.fs(2,"depthOnly")
B.eL=new A.ht(0,"linear")
B.aU=new A.ht(1,"srgb")
B.cc=new A.ft(0,"open")
B.eM=new A.ft(1,"committed")
B.eN=new A.ft(2,"aborted")
B.aV=new A.fx(0,"open")
B.eU=new A.fx(1,"committed")
B.eV=new A.fx(2,"rolledBack")
B.av=new A.jK(1,"back")
B.aw=new A.jN(0,"less")
B.eW=new A.fy(0,"off")
B.cd=new A.fy(1,"errorsOnly")
B.eX=new A.fy(2,"full")
B.ax=new A.bJ(0,"open")
B.ce=new A.bJ(1,"chain")
B.cf=new A.bJ(2,"throughDoor")
B.cg=new A.bJ(3,"letterbox")
B.ac=new A.bJ(4,"ignore")
B.S=new A.fz(0,"opaque")
B.eY=new A.fz(1,"masked")
B.ay=new A.fz(2,"blended")
B.eZ=new A.fA(!1,B.aw,!1,!0,B.aa,B.aa,B.ar,!1,B.av,!0,!1,!0,!0,!0,!0,!1)
B.f_=new A.fA(!0,B.aw,!1,!0,B.aa,B.aa,B.ar,!0,B.av,!0,!1,!0,!0,!0,!0,!1)
B.ei=new A.ez(2,"srcAlpha")
B.ej=new A.ez(3,"oneMinusSrcAlpha")
B.f0=new A.fA(!0,B.aw,!1,!0,B.ei,B.ej,B.ar,!0,B.av,!0,!1,!0,!0,!0,!0,!1)
B.f1=new A.dX(0)
B.f2=new A.dX(24e5)
B.ch=new A.cc(0,"compliance")
B.f3=new A.fB(B.ch)
B.ci=new A.cc(1,"rupture")
B.f4=new A.fB(B.ci)
B.cj=new A.cc(2,"synchronisation")
B.f5=new A.fB(B.cj)
B.ck=new A.eD(0,"front")
B.f6=new A.eD(1,"rearService")
B.f7=new A.eD(2,"sideBoundary")
B.f8=new A.eD(3,"roofline")
B.r=new A.dY(0,"north")
B.ad=new A.dY(1,"east")
B.p=new A.dY(2,"south")
B.ae=new A.dY(3,"west")
B.f9=new A.dZ(0,"ground")
B.fa=new A.dZ(1,"first")
B.fb=new A.dZ(2,"hidden")
B.fc=new A.e_(1,"portal")
B.fe=new A.e_(3,"inventory")
B.cl=new A.e_(4,"aftermath")
B.fd=new A.e_(2,"window")
B.fg=new A.eE(B.fd,"shutter","the shutter")
B.ff=new A.e_(5,"none")
B.fh=new A.eE(B.ff,null,null)
B.fi=new A.z("saved mantle history is malformed",null,null)
B.fj=new A.z("rupture elapsed time is malformed",null,null)
B.fk=new A.z("presentation keys must be strings",null,null)
B.fl=new A.z("unsupported accessibility profile",null,null)
B.fm=new A.z("unsupported promoted model index schema",null,null)
B.fn=new A.z("inventory inspections must be an object",null,null)
B.fo=new A.z("screenplay event random range is invalid",null,null)
B.cm=new A.z("saved mantle state is malformed",null,null)
B.fp=new A.z("inactive rupture has elapsed time",null,null)
B.fq=new A.z("control sensitivity is outside 0.1\u20133.0",null,null)
B.fr=new A.z("invalid action bindings",null,null)
B.fs=new A.z("listener room is empty",null,null)
B.ft=new A.z("control bindings conflict",null,null)
B.fu=new A.z("saved difficulty state is malformed",null,null)
B.fv=new A.z("saved house drift state is malformed",null,null)
B.fw=new A.z("saved sleep record is malformed",null,null)
B.fx=new A.z("UI scale must be between 0.8 and 2.0",null,null)
B.fy=new A.z("unsupported settings store",null,null)
B.fz=new A.z("screenplay scene must be an object",null,null)
B.fA=new A.z("settings values must be an object",null,null)
B.fB=new A.z("saved day-loop sleepHistory must be a list",null,null)
B.fC=new A.z("invalid anisotropy limit",null,null)
B.fD=new A.z("audio event position is not finite",null,null)
B.fE=new A.z("event sequence must be non-negative",null,null)
B.fF=new A.z("screenplay branch is invalid",null,null)
B.fG=new A.z("inventory inspection counts are invalid",null,null)
B.fH=new A.z("only keybinds can be remapping",null,null)
B.fI=new A.z("modelScale must be positive and finite",null,null)
B.fJ=new A.z("listener position is not finite",null,null)
B.fK=new A.z("screenplay event has invalid core fields",null,null)
B.fL=new A.z("invalid action ID",null,null)
B.fM=new A.z("saved window state is malformed",null,null)
B.fN=new A.z("unsupported graphics preset",null,null)
B.fO=new A.z("save run and meta must be objects",null,null)
B.fP=new A.z("saved house state is malformed",null,null)
B.fQ=new A.z("saved sleep record must be an object",null,null)
B.fR=new A.z("sound cue must be a non-empty string",null,null)
B.fS=new A.z("saved session run is malformed",null,null)
B.fT=new A.z("save map keys must be strings",null,null)
B.fU=new A.z("unsupported graphics profile",null,null)
B.fV=new A.z("screenplay scene has invalid id, day, or title",null,null)
B.fW=new A.z("unsupported audio options",null,null)
B.fX=new A.z("transform.scale must be positive",null,null)
B.fY=new A.z("Escape is reserved for pause navigation",null,null)
B.fZ=new A.z("saved day-loop state is malformed",null,null)
B.h_=new A.z("rupture extinguished mantle is unknown",null,null)
B.cn=new A.z("unsupported controls profile",null,null)
B.h0=new A.z("promoted model index entry is malformed",null,null)
B.co=new A.z("saved portal state is malformed",null,null)
B.h1=new A.z("acoustic portal profile is not finite",null,null)
B.h2=new A.z("saved house state does not match this house",null,null)
B.h3=new A.z("presentation snapshot contains a non-finite number",null,null)
B.h4=new A.z("screenplay array contains invalid text",null,null)
B.h5=new A.z("screenplay event day/hour is out of range",null,null)
B.h6=new A.z("unsupported gameplay settings profile",null,null)
B.h7=new A.z("save contains a non-finite number",null,null)
B.h8=new A.z("unsupported graphics store",null,null)
B.h9=new A.z("screenplay option is invalid",null,null)
B.ha=new A.z("screenplay needs sources and scenes arrays",null,null)
B.hb=new A.z("brush component needs an id and label",null,null)
B.hc=new A.z("text.json root must be an object",null,null)
B.hd=new A.z("screenplay root must be an object",null,null)
B.he=new A.z("event kind is empty",null,null)
B.hf=new A.z("screenplay event effects are invalid",null,null)
B.hg=new A.z("promoted model index entries are required",null,null)
B.hh=new A.z("invalid control binding token",null,null)
B.hi=new A.z("audio transmission muffle is invalid",null,null)
B.hj=new A.z("acoustic portal muffle order is invalid",null,null)
B.hk=new A.z("unsupported settings profile",null,null)
B.hl=new A.z("saved session clock is malformed",null,null)
B.hm=new A.z("rupture mantle IDs are malformed",null,null)
B.hn=new A.z("invalid gameplay setting: contextualReminders",null,null)
B.ho=new A.z("invalid screen-reader verbosity",null,null)
B.hp=new A.z("saved sleep record has an unknown enum",null,null)
B.hq=new A.z("audio cue variants are empty",null,null)
B.hr=new A.z("screenplay beat has invalid kind or text",null,null)
B.hs=new A.z("save root must be an object",null,null)
B.ht=new A.z("audio event identity is empty",null,null)
B.hu=new A.z("screenplay event random range is out of range",null,null)
B.hv=new A.z("render capabilities contain invalid limits",null,null)
B.hw=new A.z("saved house overrides are malformed",null,null)
B.U=new A.bW(0,0,0)
B.cO=new A.bW(1,1,1)
B.ja=s([],t.Fk)
B.be=s([],t.cv)
B.hx=new A.k_(B.U,B.U,0,1,null,null,B.cO,0,null,B.ja,B.be)
B.cp=new A.aI(0,0,0)
B.hy=new A.eF(0,"idle")
B.af=new A.eF(1,"active")
B.hz=new A.eF(2,"ended")
B.hA=new A.eF(3,"aborted")
B.cq=new A.fC(0,"outside")
B.hB=new A.fC(1,"intersects")
B.hC=new A.fC(2,"inside")
B.hD=new A.eH(0,"timeAdvanced")
B.hE=new A.eH(1,"dayEndReached")
B.hF=new A.eH(4,"slept")
B.hG=new A.eH(5,"complianceFloorTripped")
B.aW=new A.dg(0,"twentyFourHour")
B.cr=new A.dg(1,"twelveHour")
B.cs=new A.dh(0,"important")
B.ct=new A.dh(1,"always")
B.aX=new A.cd(0,"pauseAndMute")
B.cu=new A.di(0,"press")
B.cv=new A.di(1,"hold")
B.cw=new A.dj(0,"compact")
B.cx=new A.dj(1,"spacious")
B.cy=new A.cL(1,"standard")
B.cz=new A.cL(2,"detailed")
B.cA=new A.dk(0,"toast")
B.cB=new A.dk(1,"detailed")
B.cC=new A.cM(1,"readable")
B.hM=new A.hE(0,"vertex")
B.cD=new A.hE(1,"indices")
B.cE=new A.k5(0,"staticDraw")
B.h=new A.hF(0,"ready")
B.T=new A.hF(1,"lost")
B.ag=new A.fE(0,"prepared")
B.hN=new A.fE(1,"committed")
B.hO=new A.fE(2,"rolledBack")
B.hP=new A.eI(0,"color")
B.cF=new A.eI(1,"colorAndGlow")
B.hQ=new A.eI(2,"colorDepthGlow")
B.aY=new A.eI(3,"depthOnly")
B.aZ=new A.hH(1,"linear")
B.cG=new A.k7(0,"clampToEdge")
B.hR=new A.k6(1,1,1,!1,B.aZ,B.aZ,B.cG,1)
B.b_=new A.hH(2,"linearMipmapLinear")
B.hS=new A.cO(0,"beforeShadow")
B.hT=new A.cO(2,"beforeDepth")
B.cH=new A.cO(3,"afterDepth")
B.cI=new A.cO(4,"beforeWorld")
B.hU=new A.cO(5,"afterWorld")
B.I=new A.cO(6,"afterResolve")
B.hV=new A.cO(9,"beforePresent")
B.cJ=new A.ce(0,"readBeforeWrite")
B.hW=new A.ce(1,"duplicateWriter")
B.hX=new A.ce(2,"sampledMultisampledAttachment")
B.b0=new A.ce(3,"invalidResolve")
B.hY=new A.ce(4,"formatOrSizeMismatch")
B.hZ=new A.ce(5,"unversionedReadWrite")
B.i_=new A.ce(6,"invalidHistoryRead")
B.i0=new A.ce(7,"dependencyCycle")
B.i1=new A.ce(8,"missingCapability")
B.cK=new A.ct(0,"high")
B.b1=new A.ct(1,"standard")
B.b2=new A.e0(1,B.b1,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.az=new A.e1(0,"player")
B.b3=new A.e1(1,"inserted")
B.cL=new A.e1(2,"warden")
B.cM=new A.eJ(0,"wrongKind")
B.cN=new A.eJ(1,"staleGeneration")
B.i4=new A.eJ(2,"doubleRelease")
B.aA=new A.eJ(3,"releasedResource")
B.i7=new A.cP("kitchen-range","settle")
B.i8=new A.cP("front-door-knocker","knock")
B.i9=new A.cP("cellar-drain","drip")
B.ia=new A.cP("bedroom-timber","creak")
B.ib=new A.cP("kitchen-pipe","tick")
B.ic=new A.cP("bathroom-cistern","settle")
B.id=new A.cP("landing-window","wind")
B.it=new A.ke(1,"visitor")
B.ix=new A.pF(null)
B.iy=new A.pG(null)
B.b4=new A.km(!1,0,0.85,0.92,1)
B.iz=new A.bW(0.008,0.012,0.024)
B.cP=s([0,2,2,3],t.t)
B.iA=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b5=s([B.cs,B.ct],A.X("r<dh>"))
B.iB=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.iC=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b6=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.C=new A.bB(0,"audio")
B.N=new A.ig(0,"level")
B.lM=new A.b_("master","Master",B.C,B.N,1,0,1,"audio")
B.lR=new A.b_("voice","Visitor voice",B.C,B.N,1,0,1,"audio")
B.lI=new A.b_("effects","Effects",B.C,B.N,1,0,1,"audio")
B.lJ=new A.b_("ambience","House ambience",B.C,B.N,1,0,1,"audio")
B.lN=new A.b_("music","Music",B.C,B.N,1,0,1,"audio")
B.aH=new A.bB(1,"display")
B.lQ=new A.b_("brightness","Display brightness",B.aH,B.N,1,0.6,1.4,"display")
B.aj=new A.ig(1,"toggle")
B.lL=new A.b_("muted","Mute house audio",B.C,B.aj,!1,null,null,"audio")
B.a3=new A.bB(2,"accessibility")
B.lO=new A.b_("mono","Mono-compatible mix",B.a3,B.aj,!1,null,null,"audio")
B.lK=new A.b_("high-contrast","High-contrast interface",B.a3,B.aj,!1,null,null,"display")
B.lP=new A.b_("strong-highlights","Strong focus highlights",B.a3,B.aj,!1,null,null,"display")
B.A=s([B.lM,B.lR,B.lI,B.lJ,B.lN,B.lQ,B.lL,B.lO,B.lK,B.lP],A.X("r<b_>"))
B.z=s(["who","verb","object","place","time"],t.s)
B.e4=new A.db(1,"strong")
B.b7=s([B.bV,B.e4],A.X("r<db>"))
B.ee=new A.ey(0,"swap")
B.ef=new A.ey(1,"replace")
B.eg=new A.ey(2,"cancel")
B.iD=s([B.ee,B.ef,B.eg],A.X("r<ey>"))
B.iE=s([2,5,9,12,16,19],t.t)
B.hH=new A.cd(1,"pauseOnly")
B.hI=new A.cd(2,"continuePlayback")
B.aB=s([B.aX,B.hH,B.hI],A.X("r<cd>"))
B.iF=s(["uQuantizationBits","uDitherStrength"],t.s)
B.iH=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.iI=s([B.ax,B.ce,B.cf,B.cg,B.ac],A.X("r<bJ>"))
B.iJ=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iK=s(["30","60","display"],t.s)
B.ap=new A.c2(0,"full")
B.bQ=new A.c2(1,"compressed")
B.bR=new A.c2(2,"off")
B.cQ=s([B.ap,B.bQ,B.bR],A.X("r<c2>"))
B.b8=s([B.aW,B.cr],A.X("r<dg>"))
B.iL=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e9=new A.dc(1,"reduced")
B.b9=s([B.aO,B.e9],A.X("r<dc>"))
B.e5=new A.cJ(0,"wide")
B.e6=new A.cJ(2,"night")
B.ba=s([B.e5,B.bW,B.e6],A.X("r<cJ>"))
B.iM=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iX=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cR=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bb=s([B.cw,B.cx],A.X("r<dj>"))
B.m4=new A.bM(0,"long")
B.dI=new A.bM(1,"short")
B.cS=s([B.m4,B.dI],A.X("r<bM>"))
B.eS=new A.ca("1 - 9","Select Response",!0)
B.eO=new A.ca("SPACE","Silence Ring",!1)
B.iZ=s([B.eS,B.eO],t.sa)
B.Y=new A.bL(0,"visual")
B.br=new A.bL(1,"graphics")
B.Z=new A.bL(2,"gameplay")
B.bs=new A.bL(3,"controls")
B.E=new A.bL(4,"audio")
B.F=new A.bL(5,"accessibility")
B.j_=s([B.Y,B.br,B.Z,B.bs,B.E,B.F],A.X("r<bL>"))
B.j0=s(["master","voice","effects","ambience","music"],t.s)
B.bc=s([B.cA,B.cB],A.X("r<dk>"))
B.cT=s(["res/house/house.json","assets/house/house.json"],t.s)
B.i2=new A.ct(2,"safe")
B.i3=new A.ct(3,"custom")
B.cU=s([B.cK,B.b1,B.i2,B.i3],A.X("r<ct>"))
B.B=new A.cj(0,"inactive")
B.bC=new A.cj(2,"affineWarp")
B.dB=new A.cj(3,"vertexSnap")
B.bD=new A.cj(4,"tapeGiveup")
B.bE=new A.cj(5,"portalFail")
B.a1=new A.cj(6,"lightsOut")
B.cV=s([B.B,B.aG,B.bC,B.dB,B.bD,B.bE,B.a1],A.X("r<cj>"))
B.j1=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.j2=s([B.az,B.b3,B.cL],A.X("r<e1>"))
B.j3=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.nm=new A.bu("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.nl=new A.bu("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.nh=new A.bu("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.np=new A.bu("ronnie.response","named","A route card has Ronnie written on its back.")
B.no=new A.bu("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.j4=s([B.nm,B.nl,B.nh,B.np,B.no],t.uk)
B.nn=new A.bu("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.nk=new A.bu("ronnie.response","named","The name Ronnie holds when the room does not.")
B.ni=new A.bu("denise.revision","accepted","One correction remains yours to protect.")
B.nf=new A.bu("attercliffe.plate","kept","A second place survives the room changing around it.")
B.j5=s([B.nn,B.nk,B.ni,B.nf],t.uk)
B.jf=s([],t.Fm)
B.je=s([],t.op)
B.j6=s([],A.X("r<cv>"))
B.j9=s([],A.X("r<Hl>"))
B.W=s([],t.qP)
B.jg=s([],t.u)
B.cX=s([],t.xB)
B.j7=s([],t.El)
B.m=s([],t.s)
B.cY=s([],t.ld)
B.jd=s([],t.nm)
B.j8=s([],t.t)
B.bd=s([],t.zz)
B.i6=new A.hJ(15,"kitchen",-0.3,0)
B.i5=new A.hJ(19,"spare-room",0,0.3)
B.J=s([B.i6,B.i5],A.X("r<hJ>"))
B.ji=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.m1=new A.bC(0,"bed")
B.m2=new A.bC(1,"chair")
B.m3=new A.bC(2,"floor")
B.cZ=s([B.m1,B.m2,B.m3],A.X("r<bC>"))
B.jj=s(["high","medium","low"],t.s)
B.e7=new A.cs(1,"headphones")
B.e8=new A.cs(2,"speakers")
B.bf=s([B.bX,B.e7,B.e8,B.bY],A.X("r<cs>"))
B.jk=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bg=s([B.cu,B.cv],A.X("r<di>"))
B.bq=new A.ci(0,"root")
B.df=new A.bn(0,"pauseMenu")
B.kr=new A.dq(B.bq,B.df,null)
B.jl=s([B.kr],t.bA)
B.bh=s([B.bT,B.a9,B.bU],A.X("r<cI>"))
B.hK=new A.cM(0,"instant")
B.hL=new A.cM(2,"slow")
B.bi=s([B.hK,B.cC,B.hL],A.X("r<cM>"))
B.jm=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.jn=s([B.C,B.aH,B.a3],A.X("r<bB>"))
B.d_=s([B.r,B.ad,B.p,B.ae],A.X("r<dY>"))
B.O=new A.dw(0,"pbrMaterial")
B.a4=new A.dw(1,"shadowsAndOcclusion")
B.ak=new A.dw(2,"surfaceWeathering")
B.l=new A.dw(3,"atmosphereAndPost")
B.lZ=new A.dw(4,"debugView")
B.bj=s([B.O,B.a4,B.ak,B.l,B.lZ],A.X("r<dw>"))
B.bF=new A.b7(0,"depthTest")
B.bG=new A.b7(1,"depthFunc")
B.bH=new A.b7(2,"depthWrite")
B.bI=new A.b7(3,"blendEnable")
B.bJ=new A.b7(4,"blendFunc")
B.bK=new A.b7(5,"blendEquation")
B.bL=new A.b7(6,"cullEnable")
B.bM=new A.b7(7,"cullFace")
B.dL=new A.b7(8,"frontFace")
B.m7=new A.b7(9,"stencilEnable")
B.dJ=new A.b7(10,"colorMask")
B.dK=new A.b7(11,"scissorEnable")
B.jo=s([B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM,B.dL,B.m7,B.dJ,B.dK],A.X("r<b7>"))
B.aI=new A.cC(0,"none")
B.lT=new A.cC(1,"albedoOnly")
B.lU=new A.cC(2,"normalsOnly")
B.lV=new A.cC(3,"roughnessOnly")
B.lW=new A.cC(4,"metallicOnly")
B.lX=new A.cC(5,"aoOnly")
B.lY=new A.cC(6,"wireframeOnly")
B.d0=s([B.aI,B.lT,B.lU,B.lV,B.lW,B.lX,B.lY],A.X("r<cC>"))
B.jp=s(["off","errors","full"],t.s)
B.jq=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jr=s(["off","profile","standard","high"],t.s)
B.js=s(["srgb","linear"],t.s)
B.jt=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.ju=s(["uBloomStrength"],t.s)
B.jv=s(["uLutSize","uStrength"],t.s)
B.jw=s([B.ch,B.ci,B.cj],A.X("r<cc>"))
B.jx=s(["uTexelSize","uNear","uFar"],t.s)
B.d1=s(["uTexelStep"],t.s)
B.jy=s(["uninitialized"],t.s)
B.hJ=new A.cL(0,"minimal")
B.bk=s([B.hJ,B.cy,B.cz],A.X("r<cL>"))
B.nj=new A.bu("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.ne=new A.bu("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.nd=new A.bu("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.ng=new A.bu("ronnie.response","named","The route card gives one name its own line.")
B.jz=s([B.nj,B.ne,B.nd,B.ng],t.uk)
B.a7=new A.c1(0,"waiting")
B.an=new A.c1(1,"atDoor")
B.ao=new A.c1(2,"consulting")
B.aJ=new A.c1(3,"resolved")
B.jA=s([B.a7,B.an,B.ao,B.aJ],A.X("r<c1>"))
B.eT=new A.ca("W A S D","Move",!1)
B.eR=new A.ca("TAB","Journal",!1)
B.eQ=new A.ca("CAPS","Shader Lab",!1)
B.eP=new A.ca("ESC","Pause",!1)
B.jB=s([B.eT,B.eR,B.eQ,B.eP],t.sa)
B.jC=s(["floor-linoleum","ceiling-stained"],t.s)
B.k5={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.jD=new A.a4(B.k5,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.X("a4<e,K?>"))
B.kh={uAlbedo:0}
B.d2=new A.a4(B.kh,[0],t.I)
B.ko={uSsaoRaw:0,uSceneDepth:1}
B.jE=new A.a4(B.ko,[0,1],t.I)
B.dd={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iW=s(["KeyW","GamepadDpadUp"],t.s)
B.iV=s(["KeyS","GamepadDpadDown"],t.s)
B.iN=s(["KeyA","GamepadDpadLeft"],t.s)
B.iO=s(["KeyD","GamepadDpadRight"],t.s)
B.iP=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iT=s(["KeyQ","GamepadB"],t.s)
B.iY=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.jh=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iU=s(["KeyR","GamepadX"],t.s)
B.iQ=s(["KeyF","GamepadRB"],t.s)
B.iR=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iS=s(["KeyL"],t.s)
B.iG=s(["Escape","GamepadMenu"],t.s)
B.jF=new A.a4(B.dd,[B.iW,B.iV,B.iN,B.iO,B.iP,B.iT,B.iY,B.jh,B.iU,B.iQ,B.iR,B.iS,B.iG],A.X("a4<e,F<e>>"))
B.jG=new A.a4(B.dd,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.kl={uScene:0,uHistory:1}
B.jH=new A.a4(B.kl,[0,1],t.I)
B.jW={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jI=new A.a4(B.jW,["93a7e35137dd4ffbb46188b1a69d5f63b1baa889","3662947235e847a5925e66949e78a21bcb0284a8","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.1.2.0"],t.w)
B.k8={aPosition:0,aUvMat:1}
B.d3=new A.a4(B.k8,[0,4],t.I)
B.km={uScene:0,uLut:1}
B.jJ=new A.a4(B.km,[0,1],t.I)
B.kn={uSource:0}
B.d4=new A.a4(B.kn,[0],t.I)
B.kf={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jK=new A.a4(B.kf,[0,1,2,3,4,5,6],t.I)
B.d5=new A.cN([B.Y,"settings.visual",B.br,"settings.graphics",B.Z,"settings.gameplay",B.bs,"settings.controls",B.E,"settings.audio",B.F,"settings.accessibility"],t.EJ)
B.d6=new A.cN([B.Y,"visual",B.br,"graphics",B.Z,"gameplay",B.bs,"controls",B.E,"audio",B.F,"accessibility"],t.EJ)
B.k3={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jL=new A.a4(B.k3,[0,1,2],t.I)
B.kq={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jM=new A.a4(B.kq,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.w)
B.ka={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.ip=new A.bm("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.ij=new A.bm("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.io=new A.bm("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.ir=new A.bm("wallpaper-damp","grime",7106925,0.94,0.76)
B.ik=new A.bm("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.iq=new A.bm("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.is=new A.bm("wallpaper-peeling","grime",9340536,0.91,0.68)
B.il=new A.bm("floor-wood","wall-plaster",7755327,0.88,0.22)
B.ih=new A.bm("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.ii=new A.bm("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.ie=new A.bm("floor-concrete","grime",7828331,0.96,0.92)
B.ig=new A.bm("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.im=new A.bm("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bl=new A.a4(B.ka,[B.ip,B.ij,B.io,B.ir,B.ik,B.iq,B.is,B.il,B.ih,B.ii,B.ie,B.ig,B.im],A.X("a4<e,bm>"))
B.ki={uBloom:0}
B.jN=new A.a4(B.ki,[0],t.I)
B.kj={uSceneDepth:0}
B.jO=new A.a4(B.kj,[0],t.I)
B.kk={uScene:0}
B.jP=new A.a4(B.kk,[0],t.I)
B.K={}
B.d8=new A.a4(B.K,[],A.X("a4<e,hp>"))
B.d7=new A.a4(B.K,[],t.w)
B.bm=new A.a4(B.K,[],A.X("a4<e,B>"))
B.y=new A.a4(B.K,[],t.I)
B.nv=new A.a4(B.K,[],A.X("a4<e,e?>"))
B.jQ=new A.a4(B.K,[],A.X("a4<@,@>"))
B.jZ={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jR=new A.a4(B.jZ,[0,1,2,3,4,5,6],t.I)
B.dg=new A.cA(0,"resume")
B.dh=new A.cA(1,"settings")
B.di=new A.cA(2,"controls")
B.dj=new A.cA(3,"save")
B.dk=new A.cA(4,"help")
B.dl=new A.cA(5,"credits")
B.dm=new A.cA(6,"back")
B.jS=new A.cN([B.dg,"pause.resume",B.dh,"pause.settings",B.di,"pause.controls",B.dj,"pause.save",B.dk,"pause.help",B.dl,"pause.credits",B.dm,"pause.back"],A.X("cN<cA,e>"))
B.kc={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jT=new A.a4(B.kc,[0,1,2,3],t.I)
B.kp={uTex:0}
B.jU=new A.a4(B.kp,[0],t.I)
B.bn=new A.cN([B.aG,1,B.bC,1.5,B.dB,1.5,B.bD,2,B.bE,2,B.a1,4],A.X("cN<cj,B>"))
B.nw=new A.hV(0,"srgb")
B.nx=new A.hV(1,"linear")
B.e1=new A.fm(2,"blended")
B.jV=new A.dp("weather:rain-particle",null,0.55,0.68,0.82,0.08,0.18,1,1,B.e1,!1,!1)
B.bo=new A.eL(0,"resident")
B.d9=new A.eL(1,"pending")
B.da=new A.eL(2,"missing")
B.db=new A.eL(3,"evicted")
B.jb=s([],t.bA)
B.jc=s([],A.X("r<bn>"))
B.bp=new A.e7(B.jb,B.jc,null)
B.de=new A.ci(1,"settings")
B.ks=new A.ci(2,"visual")
B.kt=new A.ci(3,"graphics")
B.ku=new A.ci(4,"gameplay")
B.kv=new A.ci(5,"controls")
B.kw=new A.ci(6,"audio")
B.kx=new A.ci(7,"accessibility")
B.ky=new A.ci(8,"credits")
B.X=new A.bn(1,"settings")
B.kz=new A.bn(2,"journal")
B.kA=new A.bn(3,"sleep")
B.kB=new A.bn(4,"help")
B.kC=new A.bn(5,"visitor")
B.kD=new A.bn(6,"ending")
B.dn=new A.e8(0,"opened")
B.dp=new A.e8(2,"backed")
B.dq=new A.e8(3,"resumed")
B.kE=new A.e8(4,"dismissed")
B.a_=new A.e8(5,"unchanged")
B.kF=new A.bz("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kG=new A.bz("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kH=new A.bz("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kI=new A.bz("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kJ=new A.bz("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kK=new A.bz("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kL=new A.bz("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kM=new A.bz("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kN=new A.bz("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kO=new A.kB(0,1,null)
B.kQ=new A.kC(1,"high")
B.kP=new A.qu(!1,!0,!0,!0,!1,B.kQ,35,256)
B.kR=new A.kG(1,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bt=new A.eP(0,"safe")
B.L=new A.eP(1,"standard")
B.a0=new A.eP(2,"high")
B.a2=new A.aN(B.K,0,t.M)
B.ah=new A.e9(B.bt,B.a2)
B.kg={shadows:0}
B.lH=new A.aN(B.kg,1,t.M)
B.ds=new A.e9(B.L,B.lH)
B.k0={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lz=new A.aN(B.k0,5,t.M)
B.dt=new A.e9(B.a0,B.lz)
B.kS=new A.eP(4,"shipping")
B.k2={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lA=new A.aN(B.k2,7,t.M)
B.ny=new A.e9(B.kS,B.lA)
B.du=new A.kM(0,0,0,1)
B.kT=new A.aB(0,1)
B.kU=new A.b0(0.35,0.52,0.88)
B.kV=new A.ay(0.46,0.25,0.2)
B.dv=new A.b0(0.22,0.45,0.92)
B.kW=new A.ay(0.48,0.4,0.34)
B.kX=new A.ay(0.31,0.25,0.23)
B.bu=new A.b0(0.75,0.52,0.42)
B.kY=new A.b0(0.4,0.65,0.95)
B.bv=new A.b0(0.88,0.96,1)
B.kZ=new A.ay(0.37,0.33,0.31)
B.l_=new A.b0(0.62,0.48,0.45)
B.l0=new A.ay(0.34,0.32,0.29)
B.dw=new A.ay(0.38,0.25,0.19)
B.bw=new A.b0(0.9,0.8,0.72)
B.aC=new A.b0(0.28,0.16,0.12)
B.l1=new A.ay(0.31,0.28,0.24)
B.aD=new A.b0(0.65,0.45,0.35)
B.l2=new A.ay(0.58,0.56,0.5)
B.dx=new A.b0(0.2,0.38,0.9)
B.l3=new A.ay(0.44,0.37,0.28)
B.l4=new A.ay(0.52,0.5,0.44)
B.l5=new A.ay(0.24,0.25,0.27)
B.l6=new A.ay(0.28,0.27,0.25)
B.l7=new A.b0(0.35,0.28,0.25)
B.dy=new A.b0(0.52,0.32,0.38)
B.l8=new A.ay(0.42,0.4,0.38)
B.l9=new A.ay(0.18,0.2,0.21)
B.la=new A.ay(0.2,0.12,0.1)
B.aE=new A.b0(0.35,0.2,0.15)
B.lb=new A.ay(0.12,0.15,0.2)
B.lc=new A.fR(0,"constructed")
B.M=new A.fR(1,"ready")
B.bx=new A.fR(2,"lost")
B.ld=new A.ia(B.ah,384,216,1,B.aU,0,512,32,4,1,B.cd)
B.by=new A.eR(0,"constructed")
B.le=new A.eR(1,"initializing")
B.bz=new A.eR(2,"ready")
B.dz=new A.eR(3,"contextLost")
B.j=new A.fS(0,"read")
B.k=new A.fS(1,"write")
B.G=new A.fS(2,"historyRead")
B.bA=new A.fT(0,"prepared")
B.lf=new A.fT(1,"committed")
B.lg=new A.fT(2,"rolledBack")
B.q=new A.ic(0,"rgba8")
B.lh=new A.aK("dofBlurH",B.q,192,108,1,0)
B.li=new A.aK("dofBlurV",B.q,192,108,1,0)
B.lj=new A.aK("dofOutput",B.q,384,216,1,0)
B.dA=new A.ic(2,"depth24")
B.lk=new A.aK("shadowMap",B.dA,512,512,1,0)
B.ll=new A.aK("ssaoRaw",B.q,192,108,1,0)
B.lm=new A.aK("ssaoBlurred",B.q,192,108,1,0)
B.ln=new A.aK("gradeOutput",B.q,384,216,1,0)
B.lo=new A.aK("vhsOutput",B.q,384,216,1,0)
B.lp=new A.aK("sceneDepth",B.dA,384,216,1,0)
B.lq=new A.aK("bloomBlurH",B.q,192,108,1,0)
B.lr=new A.aK("bloomBlurV",B.q,192,108,1,0)
B.ls=new A.aK("present",B.q,384,216,1,0)
B.bB=new A.aK("sceneColor",B.q,384,216,1,0)
B.lt=new A.aK("ps1Output",B.q,384,216,1,0)
B.lu=new A.eU(null,"save storage unavailable")
B.lv=new A.eU(null,"save could not be recovered")
B.lw=new A.eU(null,null)
B.k6={WheelUp:0,WheelDown:1}
B.lx=new A.aN(B.k6,2,t.M)
B.kd={open:0,closed:1}
B.ly=new A.aN(B.kd,2,t.M)
B.k_={Escape:0}
B.dC=new A.aN(B.k_,1,t.M)
B.jY={open:0,closed:1,mixed:2}
B.lB=new A.aN(B.jY,3,t.M)
B.kb={front:0,"rear-service":1}
B.lC=new A.aN(B.kb,2,t.M)
B.ke={overcast:0,rain:1}
B.lD=new A.aN(B.ke,2,t.M)
B.k9={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lE=new A.aN(B.k9,16,t.M)
B.k7={Escape:0,Tab:1,F11:2}
B.dD=new A.aN(B.k7,3,t.M)
B.k4={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lF=new A.aN(B.k4,5,t.M)
B.k1={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ai=new A.aN(B.k1,7,t.M)
B.jX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lG=new A.aN(B.jX,9,t.M)
B.dG=new A.eW(2,"link")
B.lS=new A.ih(B.dG,"gl.createProgram() returned null")
B.dE=new A.eW(0,"vertex")
B.dF=new A.eW(1,"fragment")
B.dH=new A.eW(3,"validation")
B.m_=new A.ii(0,"full")
B.m0=new A.ii(2,"culled")
B.a6=new A.J(0,1,0)
B.bP=new A.J(0,-1,0)
B.m5=new A.bD(-1,B.a6,B.bP,B.cO,1,1,0.3,0.5)
B.cW=s([],t.n)
B.m6=new A.l2(!1,"","",B.cW,B.cW)
B.dM=new A.dx(0,"resident")
B.dN=new A.dx(1,"pending")
B.dO=new A.dx(2,"missing")
B.dP=new A.dx(3,"evicted")
B.a5=new A.J(0,0,0)
B.u=new A.io(B.a5,B.du,1)
B.m8=A.co("Hb")
B.m9=A.co("Hc")
B.ma=A.co("om")
B.mb=A.co("Cj")
B.mc=A.co("Cz")
B.md=A.co("CA")
B.me=A.co("CB")
B.mf=A.co("af")
B.mg=A.co("K")
B.mh=A.co("wQ")
B.mi=A.co("Dr")
B.mj=A.co("Ds")
B.mk=A.co("ip")
B.e=new A.cZ(0,"float1")
B.al=new A.cZ(1,"float2")
B.o=new A.cZ(2,"float3")
B.ml=new A.cZ(3,"float4")
B.v=new A.cZ(4,"mat4")
B.dQ=new A.cZ(5,"mat4Array")
B.bN=new A.x(B.e,0)
B.dR=new A.x(B.e,1)
B.P=new A.cZ(6,"sampler")
B.w=new A.x(B.P,0)
B.am=new A.x(B.P,1)
B.dS=new A.x(B.P,2)
B.mm=new A.x(B.P,3)
B.mn=new A.x(B.P,4)
B.mo=new A.x(B.P,5)
B.mp=new A.x(B.P,6)
B.mq=new A.t5(!1)
B.mr=new A.J(0,0,1)
B.ms=new A.J(0,3,0)
B.mt=new A.J(1,0,0)
B.mu=new A.J(0,-2.6,0)
B.mv=new A.J(1/0,1/0,1/0)
B.mw=new A.J(2.75,3,2.75)
B.mx=new A.J(-1/0,-1/0,-1/0)
B.dU=new A.d_(6,"tangent4")
B.mJ=new A.ef(0,"visitorAnswered")
B.dV=new A.ef(1,"visitorIgnored")
B.mK=new A.ef(2,"entryVerified")
B.mL=new A.ef(3,"entryContradicted")
B.mM=new A.ef(4,"exposureAccepted")
B.mO=new A.d0(1,"malformedDay")
B.mP=new A.d0(2,"malformedTier")
B.dW=new A.d0(3,"missingTierLines")
B.a8=new A.d0(6,"invalidPhase")
B.mS=new A.bs(B.a8,"No reaction is due.")
B.n_=new A.b9(B.mS)
B.mX=new A.bs(B.a8,"The active visit cannot be chosen.")
B.n0=new A.b9(B.mX)
B.mT=new A.bs(B.a8,"The active visit has no line to advance.")
B.n1=new A.b9(B.mT)
B.mR=new A.d0(5,"noActiveVisit")
B.mU=new A.bs(B.mR,"There is no active visit.")
B.dX=new A.b9(B.mU)
B.mW=new A.bs(B.a8,"A visit is already active.")
B.n2=new A.b9(B.mW)
B.mQ=new A.d0(4,"noArrival")
B.mZ=new A.bs(B.mQ,"The authored arrival is missing.")
B.n3=new A.b9(B.mZ)
B.mV=new A.bs(B.a8,"That answer is not offered.")
B.n4=new A.b9(B.mV)
B.mN=new A.d0(0,"missingCorpus")
B.mY=new A.bs(B.mN,"The authored visitor corpus is empty.")
B.n5=new A.b9(B.mY)
B.dY=new A.f4(1,"exact")
B.bS=new A.f4(2,"partial")
B.aK=new A.f4(3,"contradiction")
B.n6=new A.f4(0,"skipped")
B.n7=new A.f3(B.n6,B.a2)
B.n8=new A.f3(B.bS,B.a2)
B.n9=new A.iv(B.W,!1)
B.na=new A.iv(B.W,!0)
B.dZ=new A.ix(0,"horizontal")
B.nb=new A.ix(1,"vertical")
B.e_=new A.iz(0,"horizontal")
B.nc=new A.iz(1,"vertical")
B.aL=new A.h3(0,"empty")
B.nq=new A.h3(1,"cpuReady")
B.aM=new A.h3(4,"released")})();(function staticFields(){$.tO=null
$.c8=A.c([],A.X("r<K>"))
$.yM=null
$.qz=0
$.qA=A.Fx()
$.yc=null
$.yb=null
$.AL=null
$.AC=null
$.AT=null
$.vE=null
$.vM=null
$.xO=null
$.u5=A.c([],A.X("r<F<K>?>"))
$.he=null
$.jb=null
$.jc=null
$.xk=!1
$.ap=B.x
$.z6=""
$.z7=null
$.z2=null
$.qf=null
$.dE=A.ab()
$.fd=A.ab()
$.aR=null
$.x2=A.ab()
$.A3=null
$.y=A.ab()
$.zG=A.ab()
$.d6=A.ab()
$.ad=A.ab()
$.W=A.ab()
$.bb=A.ab()
$.U=A.ab()
$.x1=A.ab()
$.x6=null
$.xf=null
$.bg=null
$.x5=!1
$.xu=!1
$.j9=B.aP
$.ep=B.aq
$.vr=!1
$.xF=!1
$.A5=null
$.mn=null
$.mj=null
$.zS=0
$.xl=null
$.ms=!1
$.A4=!1
$.xm=0
$.eq=0
$.x8="booting"
$.cn=0
$.ff=0
$.az="hall"
$.j6=A.ab()
$.ug=A.ab()
$.c6=A.ab()
$.Aa=null
$.xv=0
$.xz=1.65
$.es=null
$.bc=null
$.jg=!1
$.cm=A.ab()
$.h9=A.ab()
$.j5=A.ab()
$.mg=A.ab()
$.zF=A.ab()
$.zE=A.ab()
$.at=A.ab()
$.mh=A.ab()
$.j4=A.ab()
$.mf=A.ab()
$.j7=A.ab()
$.j8=A.ab()
$.fc=A.ab()
$.eo=A.ab()
$.h8=A.ab()
$.j3=A.ab()
$.j1=A.ab()
$.j2=A.ab()
$.aF=A.ab()
$.me=A.ab()
$.bG=A.ab()
$.vs=A.a_(t.S)
$.d7=A.c([],t.s)
$.xd=null
$.As=!1
$.zJ=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"He","B2",()=>A.vG("_$dart_dartClosure"))
s($,"Hd","wp",()=>A.vG("_$dart_dartClosure_dartJSInterop"))
s($,"HX","Bq",()=>A.c([new J.kg()],A.X("r<id>")))
s($,"Hq","B3",()=>A.dz(A.t1({
toString:function(){return"$receiver$"}})))
s($,"Hr","B4",()=>A.dz(A.t1({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Hs","B5",()=>A.dz(A.t1(null)))
s($,"Ht","B6",()=>A.dz(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hw","B9",()=>A.dz(A.t1(void 0)))
s($,"Hx","Ba",()=>A.dz(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hv","B8",()=>A.dz(A.z3(null)))
s($,"Hu","B7",()=>A.dz(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Hz","Bc",()=>A.dz(A.z3(void 0)))
s($,"Hy","Bb",()=>A.dz(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"HB","xZ",()=>A.DQ())
s($,"HF","Bh",()=>A.CR(4096))
s($,"HD","Bf",()=>new A.ud().$0())
s($,"HE","Bg",()=>new A.uc().$0())
s($,"HC","Be",()=>A.CQ(A.a1(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"HQ","jm",()=>A.mB(B.mg))
s($,"Ho","xY",()=>{A.D3()
return $.qz})
s($,"Ha","B1",()=>B.bB.h7())
s($,"Hj","xX",()=>A.kz(A.c([255,255,255,255],t.t)))
s($,"Hg","xU",()=>A.kz(A.c([128,128,255,255],t.t)))
s($,"Hf","xT",()=>A.kz(A.c([0,0,0,255],t.t)))
s($,"Hh","xV",()=>A.kz(A.c([255,255,0,255],t.t)))
s($,"Hi","xW",()=>A.kz(A.c([255,255,255,255],t.t)))
s($,"I1","Bu",()=>A.ir(0,1,0))
s($,"HA","Bd",()=>A.DN(A.a_(t.N),0,0,A.ir(0,0,0)))
s($,"HZ","Br",()=>A.wL("^[a-z0-9][a-z0-9._-]*$"))
s($,"I4","fk",()=>{var q=$.z2
if(q==null){A.vB()
A.vB()
A.vB()
A.vB()
q=$.z2=new A.rR()}return q})
s($,"Hk","wq",()=>A.wy(B.aW,B.cs,!0,B.aX,B.cu,B.cx,B.cy,B.cA,!0,!1,B.cC))
s($,"HL","Bj",()=>new A.nu())
r($,"Aw","d9",()=>A.wN(null,null))
r($,"ja","jl",()=>A.fF(null,null))
r($,"xc","fj",()=>A.fw(null,null,!1,1,!1,!1,2,1))
r($,"xg","cG",()=>$.wq())
s($,"HR","Bm",()=>new A.p3())
s($,"HS","Bn",()=>new A.pd())
s($,"HT","ws",()=>new A.ps(A.m(t.N,t.S)))
s($,"HN","Bk",()=>A.ee().gb2().h(0,"debugPause")==="1")
s($,"HK","jk",()=>A.ee().gb2().h(0,"automation")==="1")
s($,"HH","wr",()=>A.FO())
s($,"HG","y_",()=>$.wr()!=null)
s($,"HI","y0",()=>$.jk()?A.ee().gb2().h(0,"captureMantleId"):null)
s($,"HJ","Bi",()=>A.ee().gb2().h(0,"captureMantleLit")==="1")
r($,"xy","ew",()=>A.ir(0,0,0))
r($,"xs","Bp",()=>A.ir(0,0,0))
r($,"xG","wt",()=>A.ir(0,0,0))
s($,"HM","y1",()=>A.FP())
s($,"HV","mC",()=>new A.on(A.ir(0,0,0)))
s($,"HU","Bo",()=>new A.pQ(new A.o2()))
s($,"HO","cp",()=>new A.oH(A.c([],t.s)))
s($,"HY","ho",()=>{var q=new A.rE(B.aI)
q.f=A.X("F<eb>").a(A.c([A.a3(B.O,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a3(B.O,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a3(B.O,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a3(B.O,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a3(B.O,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a3(B.a4,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a3(B.a4,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a3(B.a4,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a3(B.a4,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a3(B.a4,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a3(B.ak,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a3(B.ak,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a3(B.ak,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a3(B.ak,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a3(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a3(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a3(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a3(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a3(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a3(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a3(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a3(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a3(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a3(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a3(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a3(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a3(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a3(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a3(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a3(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a3(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a3(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a3(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a3(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a3(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a3(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a3(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a3(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a3(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a3(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a3(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a3(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a3(B.O,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.X("r<eb>")))
return q})
s($,"I0","Bt",()=>new A.rD(A.m(t.N,t.z)))
s($,"I_","Bs",()=>new A.qC(A.D5(520588),B.b4))
s($,"HP","Bl",()=>new A.p_())
s($,"HW","hn",()=>new A.qj(B.bp))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fN,ArrayBuffer:A.fM,ArrayBufferView:A.i_,DataView:A.ks,Float32Array:A.hX,Float64Array:A.kt,Int16Array:A.ku,Int32Array:A.kv,Int8Array:A.kw,Uint16Array:A.kx,Uint32Array:A.ky,Uint8ClampedArray:A.eM,CanvasPixelArray:A.eM,Uint8Array:A.i0})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.iH.$nativeSuperclassTag="ArrayBufferView"
A.iI.$nativeSuperclassTag="ArrayBufferView"
A.hY.$nativeSuperclassTag="ArrayBufferView"
A.iJ.$nativeSuperclassTag="ArrayBufferView"
A.iK.$nativeSuperclassTag="ArrayBufferView"
A.hZ.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.mA
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
