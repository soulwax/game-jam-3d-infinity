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
if(a[b]!==s){A.GW(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xC(b)
return new s(c,this)}:function(){if(s===null)s=A.xC(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xC(a).prototype
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
xI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xE(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.xG==null){A.GB()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.yY("Return interceptor for "+A.v(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tJ
if(o==null)o=$.tJ=A.vA(n)
p=q[o]}if(p!=null)return p
p=A.GH(a)
if(p!=null)return p
if(typeof a=="function")return B.im
s=Object.getPrototypeOf(a)
if(s==null)return B.dq
if(s===Object.prototype)return B.dq
if(typeof q=="function"){o=$.tJ
if(o==null)o=$.tJ=A.vA(n)
Object.defineProperty(q,o,{value:B.bN,enumerable:false,writable:true,configurable:true})
return B.bN}return B.bN},
yn(a,b){if(a<0||a>4294967295)throw A.b(A.aY(a,0,4294967295,"length",null))
return J.yp(new Array(a),b)},
yo(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
ym(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
yp(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
Cy(a,b){var s=t.hO
return J.xW(s.a(a),s.a(b))},
yr(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Cz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yr(r))break;++b}return b},
CA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.yr(q))break}return b},
et(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hJ.prototype
return J.ke.prototype}if(typeof a=="string")return J.e1.prototype
if(a==null)return J.hK.prototype
if(typeof a=="boolean")return J.kd.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xE(a)},
aG(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xE(a)},
cE(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xE(a)},
AB(a){if(typeof a=="number")return J.fF.prototype
if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eZ.prototype
return a},
AC(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eZ.prototype
return a},
xV(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.AB(a).aj(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.et(a).a5(a,b)},
aS(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).h(a,b)},
bf(a,b,c){return J.cE(a).k(a,b,c)},
jk(a,b){return J.cE(a).l(a,b)},
Bo(a,b){return J.AC(a).fv(a,b)},
wo(a,b){return J.cE(a).L(a,b)},
Bp(a,b){return J.cE(a).cC(a,b)},
xW(a,b){return J.AB(a).H(a,b)},
xX(a,b){return J.aG(a).q(a,b)},
mz(a,b){return J.cE(a).a1(a,b)},
Bq(a,b){return J.cE(a).a8(a,b)},
xY(a){return J.cE(a).gU(a)},
aB(a){return J.et(a).gP(a)},
mA(a){return J.aG(a).gO(a)},
Br(a){return J.aG(a).gX(a)},
O(a){return J.cE(a).gu(a)},
cH(a){return J.aG(a).gt(a)},
fl(a){return J.et(a).ga3(a)},
xZ(a,b){return J.cE(a).Y(a,b)},
dI(a,b,c){return J.cE(a).ca(a,b,c)},
Bs(a,b){return J.aG(a).st(a,b)},
Bt(a,b){return J.AC(a).aU(a,b)},
da(a){return J.et(a).p(a)},
y_(a,b){return J.cE(a).e0(a,b)},
kb:function kb(){},
kd:function kd(){},
hK:function hK(){},
hN:function hN(){},
e3:function e3(){},
kz:function kz(){},
eZ:function eZ(){},
e2:function e2(){},
hM:function hM(){},
hO:function hO(){},
r:function r(a){this.$ti=a},
kc:function kc(){},
pr:function pr(a){this.$ti=a},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fF:function fF(){},
hJ:function hJ(){},
ke:function ke(){},
e1:function e1(){}},A={wu:function wu(){},
vv(){return $},
BG(a,b,c){if(t.he.b(a))return new A.ix(a,b.i("@<0>").K(c).i("ix<1,2>"))
return new A.ez(a,b.i("@<0>").K(c).i("ez<1,2>"))},
yv(a){return new A.fG("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fG("Field '"+a+"' has not been initialized.")},
CC(a){return new A.fG("Field '"+a+"' has already been initialized.")},
vB(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aV(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l2(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fh(a,b,c){return a},
xH(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
l0(a,b,c,d){A.kJ(b,"start")
if(c!=null){A.kJ(c,"end")
if(b>c)A.h(A.aY(b,0,c,"start",null))}return new A.ik(a,b,c,d.i("ik<0>"))},
kk(a,b,c,d){if(t.he.b(a))return new A.df(a,b,c.i("@<0>").K(d).i("df<1,2>"))
return new A.cy(a,b,c.i("@<0>").K(d).i("cy<1,2>"))},
cw(){return new A.fW("No element")},
yl(){return new A.fW("Too many elements")},
ef:function ef(){},
hr:function hr(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){this.a=a
this.$ti=b},
ix:function ix(a,b){this.a=a
this.$ti=b},
iv:function iv(){},
aU:function aU(a,b){this.a=a
this.$ti=b},
fG:function fG(a){this.a=a},
de:function de(a){this.a=a},
qX:function qX(){},
R:function R(){},
a1:function a1(){},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aC:function aC(a,b,c){var _=this
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
hT:function hT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hz:function hz(a){this.$ti=a},
dz:function dz(a,b){this.a=a
this.$ti=b},
ir:function ir(a,b){this.a=a
this.$ti=b},
av:function av(){},
eb:function eb(){},
fY:function fY(){},
eS:function eS(a,b){this.a=a
this.$ti=b},
iY:function iY(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.aA(a.ga2(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aA(a.gaI(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hu(A.aM(a,b,c),b.i("@<0>").K(c).i("hu<1,2>"))},
BM(){throw A.b(A.bl("Cannot modify unmodifiable Map"))},
BN(){throw A.b(A.bl("Cannot modify constant Set"))},
AU(a){var s=A.AT(a)
if(s!=null)return s
return"minified:"+a},
GG(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.da(a)
return s},
i5(a){var s,r=$.yE
if(r==null)r=$.yE=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dq(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eO(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bk(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kF(a){var s,r,q,p
if(a instanceof A.J)return A.bH(A.c9(a),null)
s=J.et(a)
if(s===B.il||s===B.io||t.qF.b(a)){r=B.c6(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.c9(a),null)},
yH(a){var s,r,q
if(a==null||typeof a=="number"||A.bt(a))return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dU)return a.p(0)
if(a instanceof A.bQ)return a.fm(!0)
s=$.Bj()
for(r=0;r<1;++r){q=s[r].mX(a)
if(q!=null)return q}return"Instance of '"+A.kF(a)+"'"},
CO(){return Date.now()},
CV(){var s,r
if($.qu!==0)return
$.qu=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qu=1e6
$.qv=new A.qt(r)},
CN(){if(!!self.location)return self.location.href
return null},
CW(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dt(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aY(a,0,1114111,null,null))},
fO(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
CU(a){var s=A.fO(a).getUTCFullYear()+0
return s},
CS(a){var s=A.fO(a).getUTCMonth()+1
return s},
yF(a){var s=A.fO(a).getUTCDate()+0
return s},
yG(a){var s=A.fO(a).getUTCHours()+0
return s},
CR(a){var s=A.fO(a).getUTCMinutes()+0
return s},
CT(a){var s=A.fO(a).getUTCSeconds()+0
return s},
CQ(a){var s=A.fO(a).getUTCMilliseconds()+0
return s},
CP(a){var s=a.$thrownJsError
if(s==null)return null
return A.cF(s)},
yI(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
vC(a){throw A.b(A.xB(a))},
d(a,b){if(a==null)J.cH(a)
throw A.b(A.vx(a,b))},
vx(a,b){var s,r="index"
if(!A.aJ(b))return new A.cr(!0,b,r,null)
s=A.f(J.cH(a))
if(b<0||b>=s)return A.ph(b,s,a,r)
return A.yK(b,r)},
Gt(a,b,c){if(a>c)return A.aY(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aY(b,a,c,"end",null)
return new A.cr(!0,b,"end",null)},
xB(a){return new A.cr(!0,a,null,null)},
b(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.dw()
b.dartException=a
s=A.GZ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GZ(){return J.da(this.dartException)},
h(a,b){throw A.aF(a,b==null?new Error():b)},
bS(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.EL(a,b,c),s)},
EL(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.im("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.au(a))},
dx(a){var s,r,q,p,o,n
a=A.AN(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rW(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rX(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wv(a,b){var s=b==null,r=s?null:b.method
return new A.kf(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.q7(a)
if(a instanceof A.hA){s=a.a
return A.eu(a,s==null?A.fe(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eu(a,a.dartException)
return A.G1(a)},
eu(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
G1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dt(r,16)&8191)===10)switch(q){case 438:return A.eu(a,A.wv(A.v(s)+" (Error "+q+")",null))
case 445:case 5007:A.v(s)
return A.eu(a,new A.i0())}}if(a instanceof TypeError){p=$.AX()
o=$.AY()
n=$.AZ()
m=$.B_()
l=$.B2()
k=$.B3()
j=$.B1()
$.B0()
i=$.B5()
h=$.B4()
g=p.b0(s)
if(g!=null)return A.eu(a,A.wv(A.p(s),g))
else{g=o.b0(s)
if(g!=null){g.method="call"
return A.eu(a,A.wv(A.p(s),g))}else if(n.b0(s)!=null||m.b0(s)!=null||l.b0(s)!=null||k.b0(s)!=null||j.b0(s)!=null||m.b0(s)!=null||i.b0(s)!=null||h.b0(s)!=null){A.p(s)
return A.eu(a,new A.i0())}}return A.eu(a,new A.l7(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ih()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eu(a,new A.cr(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ih()
return a},
cF(a){var s
if(a instanceof A.hA)return a.b
if(a==null)return new A.iM(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iM(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mx(a){if(a==null)return J.aB(a)
if(typeof a=="object")return A.i5(a)
return J.aB(a)},
Gn(a){if(typeof a=="number")return B.c.gP(a)
if(a instanceof A.m5)return A.i5(a)
if(a instanceof A.bQ)return a.gP(a)
return A.mx(a)},
Az(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Gy(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Fa(a,b,c,d,e,f){t.BO.a(a)
switch(A.f(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.tu("Unsupported number of arguments for wrapped closure"))},
hj(a,b){var s=a.$identity
if(!!s)return s
s=A.Go(a,b)
a.$identity=s
return s},
Go(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Fa)},
BL(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l_().constructor.prototype):Object.create(new A.fm(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.y6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.BH(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.y6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
BH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.BC)}throw A.b("Error in functionType of tearoff")},
BI(a,b,c,d){var s=A.y5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
y6(a,b,c,d){if(c)return A.BK(a,b,d)
return A.BI(b.length,d,a,b)},
BJ(a,b,c,d){var s=A.y5,r=A.BD
switch(b?-1:a){case 0:throw A.b(new A.kO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
BK(a,b,c){var s,r
if($.y3==null)$.y3=A.y2("interceptor")
if($.y4==null)$.y4=A.y2("receiver")
s=b.length
r=A.BJ(s,c,a,b)
return r},
xC(a){return A.BL(a)},
BC(a,b){return A.iQ(v.typeUniverse,A.c9(a.a),b)},
y5(a){return a.a},
BD(a){return a.b},
y2(a){var s,r,q,p=new A.fm("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
vA(a){return v.getIsolateTag(a)},
AS(){return v.G},
HS(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
GH(a){var s,r,q,p,o,n=A.p($.AE.$1(a)),m=$.vy[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aq($.Au.$2(a,n))
if(q!=null){m=$.vy[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.w9(s)
$.vy[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vG[n]=s
return s}if(p==="-"){o=A.w9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.AL(a,s)
if(p==="*")throw A.b(A.yY(n))
if(v.leafTags[n]===true){o=A.w9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.AL(a,s)},
AL(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
w9(a){return J.xI(a,!1,null,!!a.$ibV)},
GJ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.w9(s)
else return J.xI(s,c,null,null)},
GB(){if(!0===$.xG)return
$.xG=!0
A.GC()},
GC(){var s,r,q,p,o,n,m,l
$.vy=Object.create(null)
$.vG=Object.create(null)
A.GA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.AM.$1(o)
if(n!=null){m=A.GJ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
GA(){var s,r,q,p,o,n,m=B.eq()
m=A.hi(B.er,A.hi(B.es,A.hi(B.c7,A.hi(B.c7,A.hi(B.et,A.hi(B.eu,A.hi(B.ev(B.c6),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.AE=new A.vD(p)
$.Au=new A.vE(o)
$.AM=new A.vF(n)},
hi(a,b){return a(b)||b},
Gq(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ys(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.V("Illegal RegExp pattern ("+String(o)+")",a,null))},
GU(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Gw(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
AN(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xJ(a,b,c){var s=A.GV(a,b,c)
return s},
GV(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.AN(b),"g"),A.Gw(c))},
aP:function aP(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){this.a=a
this.$ti=b},
ft:function ft(){},
nI:function nI(a,b,c){this.a=a
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
hv:function hv(){},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
qt:function qt(a){this.a=a},
ib:function ib(){},
rW:function rW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(){},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(a){this.a=a},
q7:function q7(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a
this.b=null},
dU:function dU(){},
jB:function jB(){},
jC:function jC(){},
l3:function l3(){},
l_:function l_(){},
fm:function fm(a,b){this.a=a
this.b=b},
kO:function kO(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pA:function pA(a){this.a=a},
pK:function pK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ab:function ab(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
al:function al(a,b){this.a=a
this.$ti=b},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
K:function K(a,b){this.a=a
this.$ti=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hP:function hP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vD:function vD(a){this.a=a},
vE:function vE(a){this.a=a},
vF:function vF(a){this.a=a},
bQ:function bQ(){},
ej:function ej(){},
ek:function ek(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lL:function lL(a){this.b=a},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
lr:function lr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ij:function ij(a,b){this.a=a
this.c=b},
m1:function m1(a,b,c){this.a=a
this.b=b
this.c=c},
m2:function m2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
GW(a){throw A.aF(A.yv(a),new Error())},
q(){throw A.aF(A.a5(""),new Error())},
aW(){throw A.aF(A.CC(""),new Error())},
xK(){throw A.aF(A.yv(""),new Error())},
ac(){var s=new A.tt()
return s.b=s},
tt:function tt(){this.b=null},
a2(a){return a},
CJ(a){return new Int8Array(a)},
CK(a){return new Uint8Array(a)},
kv(a){return new Uint8Array(A.a2(a))},
dF(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.vx(b,a))},
Ey(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Gt(a,b,c))
return b},
fM:function fM(){},
fL:function fL(){},
hZ:function hZ(){},
ko:function ko(){},
b5:function b5(){},
hX:function hX(){},
hY:function hY(){},
hW:function hW(){},
kp:function kp(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
eM:function eM(){},
i_:function i_(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
wF(a,b){var s=b.c
return s==null?b.c=A.iO(a,"bU",[b.x]):s},
yQ(a){var s=a.w
if(s===6||s===7)return A.yQ(a.x)
return s===11||s===12},
D2(a){return a.as},
X(a){return A.u5(v.typeUniverse,a,!1)},
fg(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zl(a1,r,!0)
case 7:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zk(a1,r,!0)
case 8:q=a2.y
p=A.hg(a1,q,a3,a4)
if(p===q)return a2
return A.iO(a1,a2.x,p)
case 9:o=a2.x
n=A.fg(a1,o,a3,a4)
m=a2.y
l=A.hg(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wQ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hg(a1,j,a3,a4)
if(i===j)return a2
return A.zm(a1,k,i)
case 11:h=a2.x
g=A.fg(a1,h,a3,a4)
f=a2.y
e=A.FY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.zj(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hg(a1,d,a3,a4)
o=a2.x
n=A.fg(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wR(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jr("Attempted to substitute unexpected RTI kind "+a0))}},
hg(a,b,c,d){var s,r,q,p,o=b.length,n=A.u9(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fg(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
FZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.u9(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fg(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
FY(a,b,c,d){var s,r=b.a,q=A.hg(a,r,c,d),p=b.b,o=A.hg(a,p,c,d),n=b.c,m=A.FZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lE()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xD(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Gz(s)
return a.$S()}return null},
GD(a,b){var s
if(A.yQ(b))if(a instanceof A.dU){s=A.xD(a)
if(s!=null)return s}return A.c9(a)},
c9(a){if(a instanceof A.J)return A.o(a)
if(Array.isArray(a))return A.B(a)
return A.xb(J.et(a))},
B(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.xb(a)},
xb(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.F7(a,s)},
F7(a,b){var s=a instanceof A.dU?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.E3(v.typeUniverse,s.name)
b.$ccache=r
return r},
Gz(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.u5(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xF(a){return A.d8(A.o(a))},
xw(a){var s
if(a instanceof A.bQ)return a.eT()
s=a instanceof A.dU?A.xD(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fl(a).a
if(Array.isArray(a))return A.B(a)
return A.c9(a)},
d8(a){var s=a.r
return s==null?a.r=new A.m5(a):s},
Gx(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iQ(v.typeUniverse,A.xw(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.zo(v.typeUniverse,s,A.xw(q[r]))}return A.iQ(v.typeUniverse,s,a)},
co(a){return A.d8(A.u5(v.typeUniverse,a,!1))},
F6(a){var s=this
s.b=A.FT(s)
return s.b(a)},
FT(a){var s,r,q,p,o
if(a===t.K)return A.Fg
if(A.fi(a))return A.Fl
s=a.w
if(s===6)return A.EZ
if(s===1)return A.A1
if(s===7)return A.Fb
r=A.FS(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fi)){a.f="$i"+q
if(q==="E")return A.Fe
if(a===t.m)return A.Fd
return A.Fk}}else if(s===10){p=A.Gq(a.x,a.y)
o=p==null?A.A1:p
return o==null?A.fe(o):o}return A.EX},
FS(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.Ff
if(a===t.N)return A.Fj
if(a===t.y)return A.bt}return null},
F5(a){var s=this,r=A.EW
if(A.fi(s))r=A.Er
else if(s===t.K)r=A.fe
else if(A.hl(s)){r=A.EY
if(s===t.lo)r=A.zJ
else if(s===t.dR)r=A.aq
else if(s===t.k7)r=A.zH
else if(s===t.s7)r=A.wY
else if(s===t.u6)r=A.zI
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.f
else if(s===t.N)r=A.p
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.bp
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
EX(a){var s=this
if(a==null)return A.hl(s)
return A.AH(v.typeUniverse,A.GD(a,s),s)},
EZ(a){if(a==null)return!0
return this.x.b(a)},
Fk(a){var s,r=this
if(a==null)return A.hl(r)
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.et(a)[s]},
Fe(a){var s,r=this
if(a==null)return A.hl(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.et(a)[s]},
Fd(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.J)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
A0(a){if(typeof a=="object"){if(a instanceof A.J)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
EW(a){var s=this
if(a==null){if(A.hl(s))return a}else if(s.b(a))return a
throw A.aF(A.zO(a,s),new Error())},
EY(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.zO(a,s),new Error())},
zO(a,b){return new A.h4("TypeError: "+A.zd(a,A.bH(b,null)))},
Ax(a,b,c,d){if(A.AH(v.typeUniverse,a,b))return a
throw A.aF(A.DW("The type argument '"+A.bH(a,null)+"' is not a subtype of the type variable bound '"+A.bH(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
zd(a,b){return A.jR(a)+": type '"+A.bH(A.xw(a),null)+"' is not a subtype of type '"+b+"'"},
DW(a){return new A.h4("TypeError: "+a)},
cl(a,b){return new A.h4("TypeError: "+A.zd(a,b))},
Fb(a){var s=this
return s.x.b(a)||A.wF(v.typeUniverse,s).b(a)},
Fg(a){return a!=null},
fe(a){if(a!=null)return a
throw A.aF(A.cl(a,"Object"),new Error())},
Fl(a){return!0},
Er(a){return a},
A1(a){return!1},
bt(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.cl(a,"bool"),new Error())},
zH(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.cl(a,"bool?"),new Error())},
bp(a){if(typeof a=="number")return a
throw A.aF(A.cl(a,"double"),new Error())},
zI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cl(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
f(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.cl(a,"int"),new Error())},
zJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.cl(a,"int?"),new Error())},
Ff(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aF(A.cl(a,"num"),new Error())},
wY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cl(a,"num?"),new Error())},
Fj(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.aF(A.cl(a,"String"),new Error())},
aq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.cl(a,"String?"),new Error())},
a(a){if(A.A0(a))return a
throw A.aF(A.cl(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.A0(a))return a
throw A.aF(A.cl(a,"JSObject?"),new Error())},
Aj(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
FH(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Aj(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zS(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.G0(a.x)
o=a.y
return o.length>0?p+("<"+A.Aj(o,b)+">"):p}if(l===10)return A.FH(a,b)
if(l===11)return A.zS(a,b,null)
if(l===12)return A.zS(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
G0(a){var s=A.AT(a)
if(s!=null)return s
return"minified:"+a},
E4(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
E3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.u5(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iP(a,5,"#")
q=A.u9(s)
for(p=0;p<s;++p)q[p]=r
o=A.iO(a,b,q)
n[b]=o
return o}else return m},
E2(a,b){return A.zw(a.tR,b)},
E1(a,b){return A.zw(a.eT,b)},
u5(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.zn(a,null,b,!1)
r.set(b,s)
return s},
iQ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.zn(a,b,c,!0)
q.set(c,r)
return r},
zo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wQ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
zn(a,b,c,d){return A.DT(A.DN(a,b,c,d))},
em(a,b){b.a=A.F5
b.b=A.F6
return b},
iP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cB(null,null)
s.w=b
s.as=c
r=A.em(a,s)
a.eC.set(c,r)
return r},
zl(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.E_(a,b,r,c)
a.eC.set(r,s)
return s},
E_(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fi(b))if(!(b===t.c||b===t.T))if(s!==6)r=s===7&&A.hl(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cB(null,null)
q.w=6
q.x=b
q.as=c
return A.em(a,q)},
zk(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.DY(a,b,r,c)
a.eC.set(r,s)
return s},
DY(a,b,c,d){var s,r
if(d){s=b.w
if(A.fi(b)||b===t.K)return b
else if(s===1)return A.iO(a,"bU",[b])
else if(b===t.c||b===t.T)return t.eZ}r=new A.cB(null,null)
r.w=7
r.x=b
r.as=c
return A.em(a,r)},
E0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=13
s.x=b
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
iN(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
DX(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cB(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.em(a,r)
a.eC.set(p,q)
return q},
wQ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cB(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.em(a,o)
a.eC.set(q,n)
return n},
zm(a,b,c){var s,r,q="+"+(b+"("+A.iN(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
zj(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iN(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iN(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.DX(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cB(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.em(a,p)
a.eC.set(r,o)
return o},
wR(a,b,c,d){var s,r=b.as+("<"+A.iN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.DZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
DZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.u9(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fg(a,b,r,0)
m=A.hg(a,c,r,0)
return A.wR(a,n,m,c!==m)}}l=new A.cB(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.em(a,l)},
DN(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
DT(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.DP(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.zg(a,r,l,k,!1)
else if(q===46)r=A.zg(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fa(a.u,a.e,k.pop()))
break
case 94:k.push(A.E0(a.u,k.pop()))
break
case 35:k.push(A.iP(a.u,5,"#"))
break
case 64:k.push(A.iP(a.u,2,"@"))
break
case 126:k.push(A.iP(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.DR(a,k)
break
case 38:A.DQ(a,k)
break
case 63:p=a.u
k.push(A.zl(p,A.fa(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.zk(p,A.fa(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.DO(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.zh(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.DU(a.u,a.e,o)
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
DP(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
zg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.E4(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.D2(o)+'"')
d.push(A.iQ(s,o,n))}else d.push(p)
return m},
DR(a,b){var s,r=a.u,q=A.zf(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iO(r,p,q))
else{s=A.fa(r,a.e,p)
switch(s.w){case 11:b.push(A.wR(r,s,q,a.n))
break
default:b.push(A.wQ(r,s,q))
break}}},
DO(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.zf(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fa(p,a.e,o)
q=new A.lE()
q.a=s
q.b=n
q.c=m
b.push(A.zj(p,r,q))
return
case-4:b.push(A.zm(p,b.pop(),s))
return
default:throw A.b(A.jr("Unexpected state under `()`: "+A.v(o)))}},
DQ(a,b){var s=b.pop()
if(0===s){b.push(A.iP(a.u,1,"0&"))
return}if(1===s){b.push(A.iP(a.u,4,"1&"))
return}throw A.b(A.jr("Unexpected extended operation "+A.v(s)))},
zf(a,b){var s=b.splice(a.p)
A.zh(a.u,a.e,s)
a.p=b.pop()
return s},
fa(a,b,c){if(typeof c=="string")return A.iO(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.DS(a,b,c)}else return c},
zh(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fa(a,b,c[s])},
DU(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fa(a,b,c[s])},
DS(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jr("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jr("Bad index "+c+" for "+b.p(0)))},
AH(a,b,c){var s,r=b.d
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
return A.aQ(a,A.wF(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.wF(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.A_(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.A_(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Fc(a,b,c,d,e)}if(o&&q===10)return A.Fh(a,b,c,d,e)
return!1},
A_(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Fc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iQ(a,b,r[o])
return A.zF(a,p,null,c,d.y,e)}return A.zF(a,b.y,null,c,d.y,e)},
zF(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
Fh(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hl(a){var s=a.w,r=!0
if(!(a===t.c||a===t.T))if(!A.fi(a))if(s!==6)r=s===7&&A.hl(a.x)
return r},
fi(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zw(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
u9(a){return a>0?new Array(a):v.typeUniverse.sEA},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lE:function lE(){this.c=this.b=this.a=null},
m5:function m5(a){this.a=a},
lC:function lC(){},
h4:function h4(a){this.a=a},
DG(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ge()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hj(new A.tp(s),1)).observe(r,{childList:true})
return new A.to(s,r,q)}else if(self.setImmediate!=null)return A.Gf()
return A.Gg()},
DH(a){self.scheduleImmediate(A.hj(new A.tq(t.O.a(a)),0))},
DI(a){self.setImmediate(A.hj(new A.tr(t.O.a(a)),0))},
DJ(a){A.wI(B.eX,t.O.a(a))},
wI(a,b){return A.DV(a.a/1000|0,b)},
DV(a,b){var s=new A.u3()
s.ik(a,b)
return s},
bu(a){return new A.ls(new A.as($.ao,a.i("as<0>")),a.i("ls<0>"))},
bs(a,b){a.$2(0,null)
b.b=!0
return b.a},
ai(a,b){A.Et(a,b)},
br(a,b){b.dv(a)},
bq(a,b){b.dw(A.ak(a),A.cF(a))},
Et(a,b){var s,r,q=new A.ue(b),p=new A.uf(b)
if(a instanceof A.as)a.fk(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.dX(q,p,s)
else{r=new A.as($.ao,t.hR)
r.a=8
r.c=a
r.fk(q,p,s)}}},
bv(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ao.hc(new A.vr(s),t.H,t.S,t.z)},
zi(a,b,c){return 0},
mR(a){var s
if(t.yt.b(a)){s=a.gbN()
if(s!=null)return s}return B.at},
ye(a){var s
a.a(null)
s=new A.as($.ao,a.i("as<0>"))
s.d5(null)
return s},
Cg(a,b,c){var s=new A.as($.ao,c.i("as<0>"))
A.Dg(a,new A.op(b,s,c))
return s},
oq(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ao,b.i("as<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.os(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dX(new A.or(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.co(A.c([],b.i("r<0>")))
return n}i.a=A.e4(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cF(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.xc(m,k)
m=new A.b2(m,k==null?A.mR(m):k)
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
xc(a,b){if($.ao===B.x)return null
return null},
F8(a,b){if($.ao!==B.x)A.xc(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbN()
if(b==null){A.yI(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.yI(a,b)
return new A.b2(a,b)},
tz(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Db()
b.cm(new A.b2(new A.cr(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f3(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bT()
b.cn(o.a)
A.f5(b,p)
return}b.a^=2
A.mq(null,null,b.b,t.O.a(new A.tA(o,b)))},
f5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.xp(m.a,m.b)}return}q.a=b
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
A.xp(j.a,j.b)
return}g=$.ao
if(g!==h)$.ao=h
else g=null
c=c.c
if((c&15)===8)new A.tE(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tD(q,j).$0()}else if((c&2)!==0)new A.tC(d,q).$0()
if(g!=null)$.ao=g
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
continue}else A.tz(c,f,!0)
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
Ad(a,b){var s
if(t.nW.b(a))return b.hc(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.aj(a,"onError",u.c))},
Fv(){var s,r
for(s=$.hd;s!=null;s=$.hd){$.j9=null
r=s.b
$.hd=r
if(r==null)$.j8=null
s.a.$0()}},
FW(){$.xd=!0
try{A.Fv()}finally{$.j9=null
$.xd=!1
if($.hd!=null)$.xR().$1(A.Av())}},
An(a){var s=new A.lt(a),r=$.j8
if(r==null){$.hd=$.j8=s
if(!$.xd)$.xR().$1(A.Av())}else $.j8=r.b=s},
FP(a){var s,r,q,p=$.hd
if(p==null){A.An(a)
$.j9=$.j8
return}s=new A.lt(a)
r=$.j9
if(r==null){s.b=p
$.hd=$.j9=s}else{q=r.b
s.b=q
$.j9=r.b=s
if(q==null)$.j8=s}},
He(a,b){A.fh(a,"stream",t.K)
return new A.m0(b.i("m0<0>"))},
Dg(a,b){var s=$.ao
if(s===B.x)return A.wI(a,t.O.a(b))
return A.wI(a,t.O.a(s.fA(b)))},
xp(a,b){A.FP(new A.vh(a,b))},
Ai(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
FN(a,b,c,d,e,f,g){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
FM(a,b,c,d,e,f,g,h,i){var s,r=$.ao
if(r===c)return d.$2(e,f)
$.ao=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ao=s}},
mq(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.fA(d)
d=d}A.An(d)},
tp:function tp(a){this.a=a},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
u3:function u3(){},
u4:function u4(a,b){this.a=a
this.b=b},
ls:function ls(a,b){this.a=a
this.b=!1
this.$ti=b},
ue:function ue(a){this.a=a},
uf:function uf(a){this.a=a},
vr:function vr(a){this.a=a},
c5:function c5(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
this.b=b},
op:function op(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lw:function lw(){},
it:function it(a,b){this.a=a
this.$ti=b},
dA:function dA(a,b,c,d,e){var _=this
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
tw:function tw(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
tA:function tA(a,b){this.a=a
this.b=b},
ty:function ty(a,b){this.a=a
this.b=b},
tx:function tx(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(a,b){this.a=a
this.b=b},
tG:function tG(a){this.a=a},
tD:function tD(a,b){this.a=a
this.b=b},
tC:function tC(a,b){this.a=a
this.b=b},
lt:function lt(a){this.a=a
this.b=null},
m0:function m0(a){this.$ti=a},
iX:function iX(){},
lU:function lU(){},
u1:function u1(a,b){this.a=a
this.b=b},
vh:function vh(a,b){this.a=a
this.b=b},
ze(a,b){var s=a[b]
return s===a?null:s},
wO(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wN(){var s=Object.create(null)
A.wO(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yx(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
M(a,b,c){return b.i("@<0>").K(c).i("ww<1,2>").a(A.Az(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
n(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
wx(a){return new A.ck(a.i("ck<0>"))},
a_(a){return new A.ck(a.i("ck<0>"))},
aN(a,b){return b.i("yy<0>").a(A.Gy(a,new A.ck(b.i("ck<0>"))))},
wP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h_(a,b,c){var s=new A.f9(a,b,c.i("f9<0>"))
s.c=a.e
return s},
bw(a,b){var s=J.O(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.yx(b,c)
a.av(0,new A.pL(s,b,c))
return s},
fH(a,b,c){var s=A.yx(b,c)
s.M(0,a)
return s},
hR(a,b){var s,r=A.wx(b)
for(s=J.O(a);s.m();)r.l(0,b.a(s.gn()))
return r},
fI(a,b){var s=A.wx(b)
s.M(0,a)
return s},
wy(a){var s,r
if(A.xH(a))return"{...}"
s=new A.bk("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.av(0,new A.pO(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
E5(){throw A.b(A.bl("Cannot change an unmodifiable set"))},
iy:function iy(){},
tI:function tI(a){this.a=a},
iA:function iA(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f6:function f6(a,b){this.a=a
this.$ti=b},
iz:function iz(a,b,c){var _=this
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
lK:function lK(a){this.a=a
this.c=this.b=null},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(){},
a7:function a7(){},
pN:function pN(a){this.a=a},
pO:function pO(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.$ti=b},
iC:function iC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iR:function iR(){},
fJ:function fJ(){},
ec:function ec(a,b){this.a=a
this.$ti=b},
ds:function ds(){},
iL:function iL(){},
m6:function m6(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
h5:function h5(){},
iS:function iS(){},
FA(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.V(String(s),null,null)
throw A.b(q)}q=A.uF(p)
return q},
uF(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lI(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uF(a[s])
return a},
Em(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Ba()
else s=new Uint8Array(o)
for(r=J.aG(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
El(a,b,c,d){var s=a?$.B9():$.B8()
if(s==null)return null
if(0===c&&d===b.length)return A.zv(s,b)
return A.zv(s,b.subarray(c,d))},
zv(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
y1(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.V("Invalid base64 padding, more than two '=' characters",a,b))},
yu(a,b,c){return new A.hQ(a,b)},
EK(a){return a.B()},
DK(a,b){return new A.tL(a,[],A.Gp())},
DL(a,b,c){var s,r=new A.bk(""),q=A.DK(r,b)
q.cX(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
En(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lI:function lI(a,b){this.a=a
this.b=b
this.c=null},
tK:function tK(a){this.a=a},
lJ:function lJ(a){this.a=a},
u8:function u8(){},
u7:function u7(){},
jv:function jv(){},
nq:function nq(){},
eA:function eA(){},
jG:function jG(){},
jQ:function jQ(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(){},
pC:function pC(a){this.b=a},
pB:function pB(a){this.a=a},
tM:function tM(){},
tN:function tN(a,b){this.a=a
this.b=b},
tL:function tL(a,b,c){this.c=a
this.a=b
this.b=c},
lb:function lb(){},
t0:function t0(a){this.a=a},
u6:function u6(a){this.a=a
this.b=16
this.c=0},
AG(a){var s=A.dq(a,null)
if(s!=null)return s
throw A.b(A.V(a,null,null))},
Ay(a){var s=A.eO(a)
if(s!=null)return s
throw A.b(A.V("Invalid double",a,null))},
Ca(a,b){a=A.aF(a,new Error())
if(a==null)a=A.fe(a)
a.stack=b.p(0)
throw a},
e4(a,b,c,d){var s,r=c?J.yo(a,d):J.yn(a,d)
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
ag(a,b){var s=A.aA(a,!1,b)
s.$flags=3
return s},
yV(a,b,c){var s,r
A.kJ(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aY(c,b,null,"end",null))
if(s===0)return""}r=A.De(a,b,c)
return r},
De(a,b,c){var s=a.length
if(b>=s)return""
return A.CW(a,b,c==null||c>s?s:c)},
yL(a){return new A.hL(a,A.ys(a,!1,!0,!1,!1,""))},
wH(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.v(s.gn())
while(s.m())}else{a+=A.v(s.gn())
while(s.m())a=a+c+A.v(s.gn())}return a},
ed(){var s,r,q=A.CN()
if(q==null)throw A.b(A.bl("'Uri.base' is not supported"))
s=$.z0
if(s!=null&&q===$.z_)return s
r=A.Dm(q)
$.z0=r
$.z_=q
return r},
Db(){return A.cF(new Error())},
BR(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
y8(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jI(a){if(a>=10)return""+a
return"0"+a},
C9(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.aj(b,"name","No enum value with that name"))},
jR(a){if(typeof a=="number"||A.bt(a)||a==null)return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yH(a)},
Cb(a,b){A.fh(a,"error",t.K)
A.fh(b,"stackTrace",t.l)
A.Ca(a,b)},
jr(a){return new A.jq(a)},
w(a,b){return new A.cr(!1,null,b,a)},
aj(a,b,c){return new A.cr(!0,a,b,c)},
yJ(a){var s=null
return new A.fP(s,s,!1,s,s,a)},
yK(a,b){return new A.fP(null,null,!0,a,b,"Value not in range")},
aY(a,b,c,d,e){return new A.fP(b,c,!0,a,d,"Invalid value")},
kK(a,b,c){if(0>a||a>c)throw A.b(A.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aY(b,a,c,"end",null))
return b}return c},
kJ(a,b){if(a<0)throw A.b(A.aY(a,0,null,b,null))
return a},
ph(a,b,c,d){return new A.k8(b,!0,a,d,"Index out of range")},
bl(a){return new A.im(a)},
yY(a){return new A.l6(a)},
j(a){return new A.fW(a)},
au(a){return new A.jD(a)},
V(a,b,c){return new A.D(a,b,c)},
Cx(a,b,c){var s,r
if(A.xH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.Fm(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wH(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wt(a,b,c){var s,r
if(A.xH(a))return b+"..."+c
s=new A.bk(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wH(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Fm(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
wz(a,b,c){var s=A.n(b,c)
s.k_(a)
return s},
cT(a,b,c,d,e,f){var s
if(B.f===c){s=J.aB(a)
b=J.aB(b)
return A.l2(A.aV(A.aV($.jj(),s),b))}if(B.f===d){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
return A.l2(A.aV(A.aV(A.aV($.jj(),s),b),c))}if(B.f===e){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
return A.l2(A.aV(A.aV(A.aV(A.aV($.jj(),s),b),c),d))}if(B.f===f){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
return A.l2(A.aV(A.aV(A.aV(A.aV(A.aV($.jj(),s),b),c),d),e))}s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
f=J.aB(f)
f=A.l2(A.aV(A.aV(A.aV(A.aV(A.aV(A.aV($.jj(),s),b),c),d),e),f))
return f},
eV(a,b){return new A.fZ(A.fI(a,b),b.i("fZ<0>"))},
Dm(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yZ(a4<a4?B.b.I(a5,0,a4):a5,5,a3).ghh()
else if(s===32)return A.yZ(B.b.I(a5,5,a4),0,a3).ghh()}r=A.e4(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.Am(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.Am(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ae(a5,"\\",n))if(p>0)h=B.b.ae(a5,"\\",p-1)||B.b.ae(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ae(a5,"..",n)))h=m>n+2&&B.b.ae(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ae(a5,"file",0)){if(p<=0){if(!B.b.ae(a5,"/",n)){g="file:///"
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
m=f}j="file"}else if(B.b.ae(a5,"http",0)){if(i&&o+3===n&&B.b.ae(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ae(a5,"https",0)){if(i&&o+4===n&&B.b.ae(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lY(a4<a5.length?B.b.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Ef(a5,0,q)
else{if(q===0)A.h6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Eg(a5,c,p-1):""
a=A.Eb(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dq(B.b.I(a5,i,n),a3)
d=A.Ed(a0==null?A.h(A.V("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Ec(a5,n,m,a3,j,a!=null)
a2=m<l?A.Ee(a5,m+1,l,a3):a3
return A.E6(j,b,a,d,a1,a2,l<a4?A.Ea(a5,l+1,a4):a3)},
z2(a){var s=t.N
return B.a.bq(A.c(a.split("&"),t.s),A.n(s,s),new A.t_(B.c9),t.G)},
la(a,b,c){throw A.b(A.V("Illegal IPv4 address, "+a,b,c))},
Dj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.la("each part must be in the range 0..255",a,r)}A.la("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.la(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bS(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.la(j,a,q)
p=l}A.la("IPv4 address should contain exactly 4 parts",a,q)},
Dk(a,b,c){var s
if(b===c)throw A.b(A.V("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Dl(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.z1(a,b,c)
return!0},
Dl(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.D(n,a,q)
r=q
break}return new A.D("Unexpected character",a,q-1)}if(r-1===b)return new A.D(n,a,r)
return new A.D("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.D("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.D("Invalid IPvFuture address character",a,r)}},
z1(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rZ(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Dj(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dt(l,8)
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
B.db.hF(s,a0,16,s,a)
B.db.lv(s,a,a0,0)}}return s},
E6(a,b,c,d,e,f,g){return new A.iT(a,b,c,d,e,f,g)},
zp(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h6(a,b,c){throw A.b(A.V(c,a,b))},
Ed(a,b){var s=A.zp(b)
if(a===s)return null
return a},
Eb(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.E8(a,q,r)
if(o<r){n=o+1
p=A.zu(a,B.b.ae(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Dk(a,q,o)
l=B.b.I(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cG(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.zu(a,B.b.ae(a,"25",n)?o+3:n,c,"%25")}else p=""
A.z1(a,b,o)
return"["+B.b.I(a,b,o)+p+"]"}}return A.Ei(a,b,c)},
E8(a,b,c){var s=B.b.cG(a,"%",b)
return s>=b&&s<c?s:c},
zu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bk(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wT(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bk("")
l=h.a+=B.b.I(a,q,r)
if(m)n=B.b.I(a,r,r+3)
else if(n==="%")A.h6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bk("")
if(q<r){h.a+=B.b.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.I(a,q,r)
if(h==null){h=new A.bk("")
m=h}else m=h
m.a+=i
l=A.wS(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.I(a,b,c)
if(q<c){i=B.b.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Ei(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wT(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bk("")
k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bk("")
if(q<r){p.a+=B.b.I(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bk("")
l=p}else l=p
l.a+=k
j=A.wS(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.I(a,b,c)
if(q<c){k=B.b.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Ef(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.zr(a.charCodeAt(b)))A.h6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.I(a,b,c)
return A.E7(q?a.toLowerCase():a)},
E7(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Eg(a,b,c){return A.iU(a,b,c,16,!1,!1)},
Ec(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iU(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.Eh(q,e,f)},
Eh(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.Ej(a,!s||c)
return A.Ek(a)},
Ee(a,b,c,d){return A.iU(a,b,c,256,!0,!1)},
Ea(a,b,c){return A.iU(a,b,c,256,!0,!1)},
wT(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.vB(r)
o=A.vB(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.I(a,b,b+3).toUpperCase()
return null},
wS(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jK(a,6*p)&63|q
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
o+=3}}return A.yV(s,0,null)},
iU(a,b,c,d,e,f){var s=A.zt(a,b,c,d,e,f)
return s==null?B.b.I(a,b,c):s},
zt(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wT(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wS(n)}if(o==null){o=new A.bk("")
k=o}else k=o
k.a=(k.a+=B.b.I(a,p,q))+l
if(typeof m!=="number")return A.vC(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
zs(a){if(B.b.T(a,"."))return!0
return B.b.br(a,"/.")!==-1},
Ek(a){var s,r,q,p,o,n,m
if(!A.zs(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Y(s,"/")},
Ej(a,b){var s,r,q,p,o,n
if(!A.zs(a))return!b?A.zq(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gZ(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.zq(s[0]))}return B.a.Y(s,"/")},
zq(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.zr(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.I(a,0,s)+"%3A"+B.b.aU(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
E9(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wU(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c9===d)return B.b.I(a,b,c)
else p=new A.de(B.b.I(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.E9(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.mi.kz(p)},
zr(a){var s=a|32
return 97<=s&&s<=122},
yZ(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.V(k,a,r))}}if(q<0&&r>b)throw A.b(A.V(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gZ(j)
if(p!==44||r!==n+7||!B.b.ae(a,"base64",n+1))throw A.b(A.V("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eo.lY(a,m,s)
else{l=A.zt(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bJ(a,m,s,l)}return new A.rY(a,j,c)},
Am(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a},
lB:function lB(){},
an:function an(){},
jq:function jq(a){this.a=a},
dw:function dw(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k8:function k8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
im:function im(a){this.a=a},
l6:function l6(a){this.a=a},
fW:function fW(a){this.a=a},
jD:function jD(a){this.a=a},
kw:function kw(){},
ih:function ih(){},
tu:function tu(a){this.a=a},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(){},
J:function J(){},
m3:function m3(){},
rH:function rH(){this.b=this.a=0},
bk:function bk(a){this.a=a},
t_:function t_(a){this.a=a},
rZ:function rZ(a){this.a=a},
iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rY:function rY(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lx:function lx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
q6:function q6(a){this.a=a},
zT(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Ew,a)
s[$.wj()]=a
return s},
U(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Ex,a)
s[$.wj()]=a
return s},
Ew(a){return t.BO.a(a).$0()},
Ex(a,b,c){t.BO.a(a)
if(A.f(c)>=1)return a.$1(b)
return a.$0()},
AD(a,b,c){return c.a(a[b])},
zU(a,b){return a[b]},
aK(a,b,c,d){return d.a(a[b].apply(a,c))},
b0(a,b){var s=new A.as($.ao,b.i("as<0>")),r=new A.it(s,b.i("it<0>"))
a.then(A.hj(new A.wa(r,b),1),A.hj(new A.wb(r),1))
return s},
A4(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hk(a){if(A.A4(a))return a
return new A.vw(new A.iA(t.BT)).$1(a)},
wa:function wa(a,b){this.a=a
this.b=b},
wb:function wb(a){this.a=a},
vw:function vw(a){this.a=a},
CX(a){var s
if(a==null)s=B.aQ
else{s=new A.ei()
s.bO(a)}return s},
lH:function lH(){},
ei:function ei(){this.b=this.a=0},
qy:function qy(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qz:function qz(){},
eP:function eP(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a,b){this.a=a
this.b=b
this.c=null},
fs:function fs(a,b){this.a=a
this.b=b},
nF:function nF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nH:function nH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nG:function nG(){var _=this
_.c=_.b=_.a=null
_.d=0},
kC:function kC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
fp:function fp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jX:function jX(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ok:function ok(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
e0(a,b){return new A.k5(a,b)},
dr:function dr(){},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
GQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iJ(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.V(f,new A.wc())
s=A.c([],t.cv)
for(r=A.l0(f,0,A.fh(b,"count",t.S),t.mn),q=r.$ti,r=new A.aC(r,r.gt(0),q.i("aC<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b,c,d,e){var _=this
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
wc:function wc(){},
pQ(a,b,c,d,e,f,g,h,i,j){return new A.e5(c,a,h,g,f,e,i,j,b,!0)},
kl(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.v(b),null))},
jp:function jp(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.at=f
_.db=g
_.dx=h
_.go=i
_.id=j},
CF(a){A:{break A}return a},
d_:function d_(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(){},
t2:function t2(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function pW(){},
pX:function pX(){},
pY:function pY(){},
jJ:function jJ(){},
i1(a){var s,r=t.N,q=A.aN(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.M(0,A.aN(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.M(0,A.aN(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.M(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.M(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.q8(A.eV(q,r),s)},
q8:function q8(a,b){this.a=a
this.b=b},
q9:function q9(){},
fS:function fS(a,b){this.a=a
this.b=b},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fy:function fy(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g,h,i,j){var _=this
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
l1:function l1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
aH:function aH(a,b,c){this.a=a
this.b=b
this.d=c},
om:function om(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
CD(a){var s,r,q
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=B.bn;s.m();){switch(s.d.a){case 0:q=B.bn
break
case 1:q=B.d8
break
case 2:q=B.d9
break
case 3:q=B.da
break
default:q=null}if(A.yB(q)>A.yB(r))r=q}return r},
yB(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
As(a){return new A.bR(A.G_(a),t.EF)},
G_(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$As(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aP("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eL:function eL(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a,b){this.a=a
this.b=b},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pR:function pR(a){this.a=a},
pS:function pS(){},
CE(){return new A.km(new A.cV(new A.pV(),A.c([],t.Fy),A.c([],t.t),t.ja))},
km:function km(a){this.a=a},
pV:function pV(){},
Ap(a){var s=4
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
case 3:s=A.h(A.bl("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
EE(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.U[r]
if(A.Ap(q.a)===b)s+=q.c}return s},
CG(a){return new A.pZ(a,new A.cV(new A.q_(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
yC(a){var s
A:{s=a.byteLength
break A}return s},
l8:function l8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pZ:function pZ(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(){},
q0:function q0(){},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
rR:function rR(a,b){this.a=a
this.b=b},
rS:function rS(a){this.a=a},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(){},
Df(a){var s=new A.l4(a,new A.cV(new A.rT(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.aW($.xP())
s.e=s.aW($.xM())
s.f=s.aW($.xN())
s.r=s.aW($.xL())
s.w=s.aW($.xO())
return s},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
l4:function l4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rT:function rT(){},
rV:function rV(){},
rU:function rU(){},
Gh(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
p.gF()
B.a.l(o,new A.eK(p,A.c([p],r)))
continue}return o},
eK:function eK(a,b){this.a=a
this.b=b},
jV:function jV(a){this.a=a},
of:function of(){},
og:function og(a){this.a=a},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
jW:function jW(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
ol:function ol(a,b){this.a=a
this.b=b
this.c=0},
DM(){return new A.h0()},
oj:function oj(a){this.a=a
this.b=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wC(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
qc:function qc(){},
qd:function qd(){},
ce:function ce(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR:function fR(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
kG:function kG(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qA:function qA(){},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qC:function qC(a,b){this.a=a
this.b=b},
qH:function qH(){},
qG:function qG(){},
qF:function qF(){},
qE:function qE(a){this.a=a},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a,b){this.a=a
this.b=b},
D1(a){return new A.i7(a,new A.cV(new A.qI(),A.c([],t.w_),A.c([],t.t),t.tc))},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.b=b},
qI:function qI(){},
uY(a,b){return A.EP(a,b)},
EP(a,b){var s=0,r=A.bu(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uY=A.bv(function(c,a0){if(c===1)return A.bq(a0,r)
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
try{o=a.x.cN(b)
n=new A.kG(a.a,A.n(t.N,t.CH))
l=A.zP(a,n,b,o.a.b.a)
m=l.a
i.bX(p)
h=a.x
g=o
if(h.e)A.h(A.j("GPU resource adapter is disposed"))
h.ew(g)
f=h.c
h.b.bX(g.a)
h.c=g
h.d=null
if(f!=null)h.de(f.b)
g.c=B.hF
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bC()
h=j
if(h!=null)h.bC()}catch(d){if(p.c===B.aT){h=t.AB.a(p)
i.eG(h)
i.a.ft(h.a)
i.b.dV(h.b)
h.c=B.eQ
i.c=null}i=o
if((i==null?null:i.c)===B.ae){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.j("GPU resource adapter is disposed"))
i.ew(h)
i.de(h.b)
i.b.dV(h.a)
h.c=B.hG
i.d=null}i=m
if(i!=null)i.bC()
i=n
if(i!=null)i.bC()
throw d}case 1:return A.br(q,r)}})
return A.bs($async$uY,r)},
zQ(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zP(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zP(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uW(a),j=new A.uX(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Gm(b,h,d,i,s.gmD(),new A.uH(j),new A.uI(j),new A.uJ(a),new A.uO(a),new A.uP(a),new A.uQ(j),new A.uR(j),s.gmF(),new A.uS(a),s.gmJ(),r.gmH(),k,s.gmL(),s.gmN(),new A.uT(j,c),new A.uU(j),new A.uV(j),new A.uK(j),new A.uL(j),new A.uM(a),new A.uN(j),e,f,g,c.r)}else{p=new A.aI(l,B.q,g,f,e,0)
o=new A.aI(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hV(h,p,o):null
k=A.c([new A.ln(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i4(b,u.l,u.B,h,i,d))
q=new A.jV(k)}a.r.toString
m=q.km(B.a1,new A.qA(),!1,new A.lR())
k=m.a.b
if(k.length!==0)throw A.b(A.j("safe renderer graph is invalid: "+A.v(k)))
return new A.u2(q,m)},
EQ(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.j("renderer graph is not initialized"))
s=A.H(b7.gh_(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a_(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a9()
p=p.gaq()
n=A.B(p)
B.a.l(s,new A.m4(new A.cu((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.I(p,n.i("L(1)").a(o.gaA()),n.i("I<1,L>")))))}p=b8.a
m=A.Gr(A.Cf(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e0(B.az,n))
j=j.b
g=j.$ti
j.a_(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a6(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e0(B.az,n))
j=j.b
g=j.$ti
j.a_(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a6(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.oj(n)
e.kh("cull")
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
if(a2.gF().e===B.aU)B.a.l(a,new A.aO(new A.bI(a0.hf(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.l(b,new A.aO(new A.bK(B.kF,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.lD(A.Gh(A.GS(b)),A.GR(a),p,b8.b,b8.c)
a4=new A.jM(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.h(A.aj(g,"passId",null))
e.b=g
n.cP(g,A.AA())
a6=A.n(o,i)
for(g=a5.gF().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.h(A.j("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.h(A.j("resource is not in candidate: "+b1))
b3=new A.fn(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cP(b0,new A.uZ(b3))}a5.am(new A.jz(a6,a4,a3))}return new A.tv(e,m,j)},
yS(a){return new A.qR(a,new A.nE(new A.nG(),new A.kN()),new A.ol(A.c([],t.h1),B.hq),A.c([],t.Ft),B.bx,A.c([],t.ow),null)},
qM:function qM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(a){this.a=a},
uX:function uX(a,b){this.a=a
this.b=b},
uV:function uV(a){this.a=a},
uO:function uO(a){this.a=a},
uP:function uP(a){this.a=a},
uU:function uU(a){this.a=a},
uJ:function uJ(a){this.a=a},
uL:function uL(a){this.a=a},
uK:function uK(a){this.a=a},
uT:function uT(a,b){this.a=a
this.b=b},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
uQ:function uQ(a){this.a=a},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
uN:function uN(a){this.a=a},
uM:function uM(a){this.a=a},
uZ:function uZ(a){this.a=a},
u2:function u2(a,b){this.a=a
this.b=b},
lR:function lR(){},
lD:function lD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qR:function qR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qS:function qS(){},
qT:function qT(){},
qU:function qU(){},
lO:function lO(a){this.b=a},
tH:function tH(){},
lV:function lV(){},
ig:function ig(a,b){this.a=a
this.b=b},
GS(a){var s,r,q=A.H(a,t.E0)
B.a.V(q,new A.wg())
s=A.B(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wh()),r),r.i("a1.E"))
s.$flags=1
return s},
GR(a){var s,r,q=A.H(a,t.EH)
B.a.V(q,new A.we())
s=A.B(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wf()),r),r.i("a1.E"))
s.$flags=1
return s},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
wg:function wg(){},
wh:function wh(){},
we:function we(){},
wf:function wf(){},
Gr(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.ge2()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.gE().p(0),null))
if(a.mV(o.ge2())===B.cp){++q
continue}B.a.l(l,o)}return new A.nW(l,new A.nX(q))},
nX:function nX(a){this.b=a},
nW:function nW(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.ml,q=B.mm,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.L(m,k,Math.min(r.c,o))
q=new A.L(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jl(r,q)},
jl:function jl(a,b){this.a=a
this.b=b},
Cf(a){var s,r,q,p,o,n,m=a.a,l=new A.oo(),k=m.length
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
return new A.on(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eN:function eN(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
on:function on(a){this.a=a},
oo:function oo(){},
yz(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dm(new Float32Array(A.a2(a)))},
wA(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dm(q)},
yA(a,b,c){var s=b.gaw(),r=c.bA(s).gaw(),q=s.bA(r),p=new Float32Array(16)
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
return new A.dm(p)},
dm:function dm(a){this.a=a},
pP:function pP(){},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l5:function l5(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lu:function lu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lv:function lv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iw:function iw(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lz:function lz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jO:function jO(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lA:function lA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
k4:function k4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lF:function lF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.b=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
bz(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aI(a.a,a.b,b,c,s,r)},
wD:function wD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lS:function lS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kH:function kH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lT:function lT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yU(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mk:B.a4,q=A.yA(a.b,s,r)
return new A.eX(A.wA(1,a.f,B.c.D(a.w*2,0.1,3),0.05).aB(0,q))},
eX:function eX(a){this.a=a},
kV:function kV(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lW:function lW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Gm(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.aj(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a6(e5+1,2)
m=B.d.a6(e4+1,2)
l=A.bz(B.bA,e5,e4,e3,a8)
k=A.bz(B.bA.h1(),e5,e4,a8,a8)
A.bz(B.lk,e5,e4,a8,a8)
j=A.bz(B.lh,e5,e4,a8,a8)
i=A.bz(B.lc,e6,e6,a8,a8)
h=A.bz(B.ld,b6,m,a8,a8)
g=A.bz(B.le,b6,m,a8,a8)
f=A.bz(B.li,b6,m,a8,a8)
e=A.bz(B.lj,b6,m,a8,a8)
d=$.AV()
c=e3>1
b=A.bz(d,e5,e4,a8,c?2:1)
d=A.bz(B.l9,b6,m,a8,a8)
a=A.bz(B.la,b6,m,a8,a8)
a0=A.bz(B.lb,e5,e4,a8,a8)
a1=A.bz(B.lf,e5,e4,a8,a8)
a2=A.bz(B.ll,e5,e4,a8,a8)
a3=A.bz(B.lg,e5,e4,a8,a8)
a4=c?new A.hV(b8,l,k):a8
b5.a=null
a5=A.yU(B.lY)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.M(a7,A.c([new A.hq(b7,a9,b0,b8,b1,b1,B.dX,!0,k,f,d6,b6,m),new A.hq(b7,a9,b0,b8,b2,b2,B.n0,!1,f,e,c2,b6,m),new A.jy(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.M(a7,A.c([new A.hx(b7,a9,b0,b8,b3,b3,B.dY,k,d,d6,b6,m),new A.hx(b7,a9,b0,b8,b4,b4,B.n1,d,a,c7,b6,m),new A.jO(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k4(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kH(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.lc(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jL(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kY(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kX(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kV(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vt(b5),i))
j.push(new A.kW(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vu(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.M(j,a7)
j.push(new A.i4(b7,a9,u.B,b8,k,b9))
return new A.jV(j)},
vt:function vt(a){this.a=a},
vu:function vu(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lX:function lX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kY:function kY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
m_:function m_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kX:function kX(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lZ:function lZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lc:function lc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m7:function m7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ln:function ln(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ma:function ma(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nC:function nC(){},
kU(a,b){return new A.ie(a,b)},
k1:function k1(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eH:function eH(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
oJ:function oJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
oK:function oK(){},
oL:function oL(){},
h2:function h2(a,b){this.a=a
this.b=b},
el:function el(a,b){var _=this
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
yb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fz(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jw:function jw(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
tl:function tl(){this.a=null},
Dr(a){var s=new A.ll(a,B.h,new A.tl(),A.DC(a))
s.ij(a)
return s},
DC(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.aU(q,A.B(q).i("aU<1,e>")))
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
Dx(a,b){var s
if(a.b!==B.h)A.h(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.f(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Dw(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Dv(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Du(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
z5(a,b){var s
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
Ds(a,b){var s
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
r=s.lc(b)
if(r.a===0)return
if(r.q(0,B.bE)){q=v.G
p=a.a
if(b.a)p.enable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bF))a.a.depthFunc(A.Dv(a,b.b))
if(r.q(0,B.bG))a.a.depthMask(b.c)
if(r.q(0,B.bK)){q=v.G
p=a.a
if(b.w)p.enable(A.f(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.f(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bL))a.a.cullFace(A.Du(a,b.x))
if(r.q(0,B.dJ)){q=v.G.WebGL2RenderingContext
q=A.f(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bH)){q=v.G
p=a.a
if(b.d)p.enable(A.f(q.WebGL2RenderingContext.BLEND))
else p.disable(A.f(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bI))a.a.blendFunc(A.z5(a,b.e),A.z5(a,b.f))
if(r.q(0,B.bJ))a.a.blendEquation(A.Ds(a,b.r))
if(r.q(0,B.dH))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dI)){q=v.G.WebGL2RenderingContext
a.a.disable(A.f(q.SCISSOR_TEST))}s.a=b},
Dt(a,b){var s
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
s.clear(A.Dt(a,b))},
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
q=A.G(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bp(c.b))
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
A.aK(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.f(c.b))
break}},
bn(a,b){if(a.b!==B.h)A.h(A.j(u.k))
a.a.bindVertexArray(A.a(b.a))},
aD(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.h(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iW){p=s.d>1?A.f(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iV){o=s.b
if(o!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Dy(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.f(p.ELEMENT_ARRAY_BUFFER),c,A.f(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
Dz(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
z8(a,b){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cC?A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.f(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Dz(a,b.b))
return new A.dB(r)},
z6(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
z7(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
DA(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
r=A.G(s.createTexture())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.f(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.DA(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aK(s,"texStorage3D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aK(s,"texStorage2D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.z6(a,b.e))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.z6(a,b.f))
p=b.r
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.z7(a,p))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.z7(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.f1(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.aj(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dB(new A.iW(r,j,i,q,m))},
wL(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(r)A.aK(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aK(l,"texSubImage2D",[m,0,0,0,q,p,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
z9(a,b){var s,r,q
if(a.b!==B.h)A.h(A.j(u.k))
s=t.e.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.f(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
lm(a,b){a.a.deleteTexture(t.e.a(b.a).a)},
zb(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.h(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.b(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aX
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cE||o===B.hI
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.f(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aK(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aK(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aK(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aK(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aK(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aK(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
A.aK(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.f(r.checkFramebufferStatus(A.f(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.f(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wM(a0,q,l,k,f,e,j,i)
throw A.b(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dB(new A.iV(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wM(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d3(a){var s
if(a.b!==B.h)A.h(A.j(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.b(A.j("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dB(s)},
za(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.b(A.kU(b===A.AD(A.zU(A.AS(),r),q,t.S)?B.dC:B.dD,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.hk(p.getShaderParameter(o,A.f(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aq(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kU(b===A.AD(A.zU(A.AS(),r),q,t.S)?B.dC:B.dD,s))}return o},
DB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.h(A.j(u.k))
q=v.G
s=A.za(a,A.f(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.za(a,A.f(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lK)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.hk(o.getProgramParameter(n,A.f(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aq(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kU(B.dE,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.f(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kU(B.dF,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kU(B.dF,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dB(n)},
dB:function dB(a){this.a=a},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iV:function iV(a,b,c,d,e,f,g,h,i,j){var _=this
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
m9:function m9(a){this.a=a
this.b=!1},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
ti:function ti(a){this.a=a},
tj:function tj(a){this.a=a},
ua:function ua(){},
m8:function m8(){},
th:function th(a){this.a=a},
tk:function tk(){},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4(a,a0){var s=0,r=A.bu(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n4=A.bv(function(a1,a2){if(a1===1)return A.bq(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.n(t.N,o)
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
b=new A.js(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aQ,A.n(o,t.jS))
b.i1(p,a0)
p=A.o(a).i("K<1,2>")
s=3
return A.ai(A.oq(A.kk(new A.K(a,p),p.i("bU<ar>(m.E)").a(new A.n5(b)),p.i("m.E"),t.ls),t.c),$async$n4)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.j1():n
c.buffer=p
q=b
s=1
break
case 1:return A.br(q,r)}})
return A.bs($async$n4,r)},
js:function js(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
n6:function n6(){},
n5:function n5(a){this.a=a},
n8:function n8(a,b){this.a=a
this.b=b},
n7:function n7(a,b){this.a=a
this.b=b},
n9:function n9(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Bz(a,b,c,d,e,f,g){var s=new A.mW(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.i3(a,b,c,d,0,e,f,g)
return s},
Bv(a,b){var s=new A.mE(b)
s.i0(a,b)
return s},
By(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aA(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mS(A.aX(n,r,t.a))
n.i2(a)
return n},
FV(a,b){var s,r,q,p=b>>>0
for(s=new A.de(a),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AF(p,q==null?r.a(q):q)}return p&2147483647},
jt:function jt(a,b){this.a=a
this.b=b},
mW:function mW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mX:function mX(){},
mE:function mE(a){this.a=a},
mF:function mF(){},
ho:function ho(){},
mG:function mG(){},
mH:function mH(){},
mS:function mS(a){this.a=a},
mU:function mU(){},
mV:function mV(){},
mT:function mT(){},
wq:function wq(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
n3:function n3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a){this.a=a},
n_:function n_(){},
is:function is(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
oi:function oi(a){this.a=a},
k9:function k9(a,b,c,d,e,f,g,h,i,j){var _=this
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
pj:function pj(a){this.a=a},
Cr(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pi(n)},
pi:function pi(a){this.a=a},
pm:function pm(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pG:function pG(a,b,c){this.a=a
this.c=b
this.e=c},
pD:function pD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(){},
nY:function nY(){this.b=this.a=0},
pM:function pM(a){this.a=a
this.b=0
this.e=!1},
ii(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
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
io(a,b,c){return new A.k(a,b,c)},
z3(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
DD(a,b,c,d){return new A.lo(d,b,c,a)},
DF(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.B6()
s=a.d
r=A.tn(s,0)
q=A.tn(s,1)
p=A.tn(s,2)
o=A.tn(s,3)
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
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.k(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gaw():i
return new A.lo(m,p,o,A.eV(n,s))},
tn(a,b){return A.DE(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
DE(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc7(a)?-s:s},
kZ:function kZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lo:function lo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ns:function ns(a){this.a=a},
BV(a,b,c){var s=new A.jP(a,c,null,b)
s.i7(a,null,null,b,c)
return s},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
C7(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bw(new A.F(B.jo,t.e2.a(new A.oa(a)),t.vL),t.yW)
return s==null?null:new A.fA(s)},
CH(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wB(s,a,B.iX)
break
case 1:A.wB(s,a,B.iY)
break
case 2:A.wB(s,a,B.jr)
break}return s},
wB(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
C6(a){if(a.a!==21)return null
if(a.e)return B.f_
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f0
return B.eZ},
cc:function cc(a,b){this.a=a
this.b=b},
o7:function o7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fA:function fA(a){this.a=a},
oa:function oa(a){this.a=a},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
CM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kA(s,new A.k(o,n,m),q,p,l,j)
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
kA:function kA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
FX(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.ff)
p.k(0,q,r.b)}return p},
ug(a){var s,r,q,p,o,n=a.ga2().bK(0)
B.a.W(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.zM(a.h(0,o)))}return A.aX(r,t.N,s)},
zM(a){var s
if(t.f.b(a))return A.ug(A.FX(a))
if(t.j.b(a)){s=t.z
return A.ag(J.dI(a,A.GL(),s),s)}if(a==null||A.bt(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fX)
return a}throw A.b(A.V("presentation snapshot contains unsupported value "+J.fl(a).p(0),null,null))},
qs:function qs(a){this.a=a},
yR(a,b,c){var s=A.x2(b),r=A.x2(a)
if(c!==2)A.h(A.aj(c,"version","unsupported save version"))
return new A.fT(c,s,r)},
x2(a){var s,r,q,p,o=A.o(a).i("ab<1>"),n=A.H(new A.ab(a,o),o.i("m.E"))
B.a.W(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.zL(a.h(0,p)))}return A.aX(s,t.N,o)},
zL(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fN)
s.k(0,p,q.b)}return A.x2(s)}if(t.j.b(a)){r=t.z
return A.ag(J.dI(a,A.GP(),r),r)}if(a==null||A.bt(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.h0)
return a}throw A.b(A.V("save contains unsupported value "+J.fl(a).p(0),null,null))},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(){},
eU:function eU(a,b){this.a=a
this.b=b},
yf(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.ow(a,b,c,d,e,f,g,s,r,h)},
yg(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aJ(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fM)
r=d.h(0,"runSeed")
q=A.aJ(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.b(B.hd)
if(!isFinite(5760))throw A.b(A.aj(5760,"daySeconds","must be finite and > 0"))
n=new A.k_(p,7,5760)
n.hd(o)
s=t.N
m=t.z
l=A.CB(a5,A.aM(a0,s,m))
k=A.BS(l,A.aM(a,s,m),n)
j=A.Aw(a3,c)
A.Cq(A.aM(a1,s,m)).kb(j)
s=A.aM(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bt(f))A.h(B.fo)
e=A.CI(d.h(0,"narrative"))
if(e==null)e=A.q2(null,null,null)
return A.yf(c,q,j,n,l,k,new A.jN(i,h,g,f),e)},
EO(a){var s
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
eG:function eG(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.c=a
this.d=b},
ox:function ox(a,b){this.a=a
this.b=b},
ow:function ow(a,b,c,d,e,f,g,h,i,j){var _=this
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
oy:function oy(a){this.a=a},
oz:function oz(){},
oA:function oA(){},
oB:function oB(a){this.a=a},
oC:function oC(){},
y0(a){var s,r,q,p,o,n,m,l="modelScale",k=A.jb(a,"house manifest"),j=typeof k.h(0,l)=="number"?A.a6(k.h(0,l)):1
if(!isFinite(j)||j<=0)throw A.b(B.fC)
s=A.c7(k,"houseId")
r=A.c7(k,"sourceRef")
q=J.dI(A.ha(k,"levels"),new A.na(),t.mD)
q=A.H(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.dI(A.ha(k,"rooms"),new A.nb(j),t.bJ)
p=A.H(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.dI(A.ha(k,"portals"),new A.nc(j),t.lT)
o=A.H(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.dI(A.ha(k,"stairs"),new A.nd(),t.gI)
n=A.H(n,n.$ti.i("a1.E"))
n.$flags=1
m=J.dI(A.ha(k,"exteriorCells"),new A.ne(),t.N)
m=A.H(m,m.$ti.i("a1.E"))
m.$flags=1
s=new A.ju(s,r,q,p,o,n)
s.e_()
return s},
Aw(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
a4.e_()
s=A.yi(a5)
r=new A.vs()
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
B.a.l(n,new A.eT(k.a,new A.k(e,d,i),new A.k(h,g,j),f,B.j1,k.r,k.w,k.x))}for(q=a4.f,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a2=q[l]
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
B.a.l(o,new A.eY(a3.a,a3.b,new A.k(i,h,m),new A.k(f,e,j[2])))}s.lG()
return s},
BB(a,b){var s,r=A.jb(a,"room"),q=A.c7(r,"id"),p=A.c7(r,"floor"),o=A.Al(r.h(0,"origin"),"origin",b),n=A.Al(r.h(0,"size"),"size",b),m=J.dI(A.ha(r,"windows"),new A.nn(b),t.ya)
m=A.H(m,m.$ti.i("a1.E"))
m.$flags=1
s=J.dI(A.ha(r,"portalIds"),new A.no(),t.N)
s=A.H(s,s.$ti.i("a1.E"))
s.$flags=1
return new A.dN(q,p,o,n,m,s,A.xx(r,"wall"),A.xx(r,"floor"),A.xx(r,"ceiling"))},
jb(a,b){return t.P.b(a)?a:A.dE(b+" is not an object")},
ha(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.dE(b+" is not a list")},
c7(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dE(b+" is not a string")},
xx(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.dE("surface is not an object")
return A.c7(s,b)},
x7(a,b){var s,r=A.c7(a,b)
A:{if("north"===r){s=B.r
break A}if("east"===r){s=B.ac
break A}if("south"===r){s=B.p
break A}if("west"===r){s=B.ad
break A}s=A.dE(b+" has unknown facing "+r)}return s},
Fy(a,b){var s,r
if(t.j.b(a)){s=J.aG(a)
s=s.gO(a)||s.L(a,new A.va())}else s=!0
if(s)return A.dE(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
eq(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dE(b+" is not finite")},
mt(a,b){var s,r
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vq())}else s=!0
if(s)return A.dE(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
Al(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.mt(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
jg(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gn()
if(!q.l(0,r))throw A.b(A.V("duplicate "+b+" id "+r,null,null))}},
dE(a){return A.h(A.V(a,null,null))},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
na:function na(){},
nb:function nb(a){this.a=a},
nc:function nc(a){this.a=a},
nd:function nd(){},
ne:function ne(){},
ng:function ng(){},
nh:function nh(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
nl:function nl(){},
nm:function nm(){},
nf:function nf(a){this.a=a},
vs:function vs(){},
dL:function dL(a){this.a=a},
dN:function dN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nn:function nn(a){this.a=a},
no:function no(){},
dP:function dP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dM:function dM(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dO:function dO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
va:function va(){},
vq:function vq(){},
jA:function jA(a,b){this.a=a
this.b=b
this.d=null},
nD:function nD(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
lp:function lp(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p0:function p0(){this.b=0},
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
jS:function jS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oc:function oc(){},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(){},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
GY(a){var s,r,q,p,o,n,m,l
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
return new A.ch(B.aa,p,new Uint16Array(A.a2(a.b)),new A.jl(new A.L(s.a,s.b,s.c),new A.L(s.d,s.e,s.f)))},
GX(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.FU(a,new A.wi(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jT(o,p.c,p.e))}return n},
FU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.n(t.N,t.Ez)
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
if(l==null){l=B.b.q(d,":")?B.b.I(d,0,B.b.br(d,":")):null
l=new A.d4(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.M(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("al<2>")
q=A.H(new A.al(s,q),q.i("m.E"))
B.a.V(q,new A.vk())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].n5(a))
return r},
Ev(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jS(r,q,p,o,n,m)},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
wi:function wi(a){this.a=a},
vk:function vk(){},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eC:function eC(a,b){this.a=a
this.b=b},
jU:function jU(){},
Gk(a){var s,r,q,p=new A.p1(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.ER(p,a,B.cZ[s],15.75,15.75,12.044999999999998,0.63)
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
p.af(r,new A.a0(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.af(r,q,new A.a0(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a0(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a0(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.af(q,new A.a0(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.af(q,r,new A.a0(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.af(new A.a0(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a0(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a0(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.af(new A.a0(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a0(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a0(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a0(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a0(7.875,16.32,16.383,-1,0,0,1,1,0)
p.af(r,new A.a0(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.af(r,q,new A.a0(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a0(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a0(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.af(q,new A.a0(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.af(q,r,new A.a0(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.FK(p,15.75,15.75,12.044999999999998,16.32)
A.Ez(p,15.75,15.75,16.32)
A.EN(p,15.75,15.75,12.044999999999998)
A.EV(p,a,15.75)
A.FQ(p,15.75,15.75)
A.Eu(p,15.75)
return p.kk()},
ER(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ac!==b7,p=B.r!==b7,o=B.p===b7,n=B.ad===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aE(k)
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
B.a.l(b4,new A.eh(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aL(i),b=J.O(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aZ(i)!==b7)continue
B:{if(!p||o){a0=g+a.aF(i)
break B}if(!q||n){a0=e+a.aF(i)
break B}a0=null}B.a.l(b4,new A.eh(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.r||b7===B.p?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
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
if(B.a.L(b4,new A.v0(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.EU(b5,b4,b7,b8,b9,c1)
A.ES(b5,b4,b7,b8,b9,c1)
A.ET(b5,b4,b7,b8,b9,c0,c1)},
ET(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.r||a4===B.p?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.H(a1,a1.$ti.c)
B.a.W(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.L(a3,new A.v_(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
ES(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
EU(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.FO(a2,g,a4,a5,a6,a7,q)}},
FO(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
FK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.FL(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
FL(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a0(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a0(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.af(n,new A.a0(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.af(n,m,new A.a0(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a0(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a0(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.af(m,new A.a0(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.af(m,n,new A.a0(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Ez(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
EN(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
EV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aF("hall")
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
FQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Eu(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v0:function v0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v_:function v_(a,b,c){this.a=a
this.b=b
this.c=c},
GN(a,b,c,d,e){var s,r,q,p,o,n,m,l
A.AP(b,d,c)
s=A.AQ(b,d,c)
if(s!=null){r=s.ax&&!s.ay&&!s.z?"close door":"open door"
return new A.eD(B.f7,s.a,r)}if(A.AR(b,d,c)!=null)return B.fb
q=A.GM(a,b,c,d)
if(q!=null)return new A.eD(B.ck,q.a,"inspect the "+q.b)
p=A.AO(b,c,d,e)
if(p!=null){o=e.cB(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eD(B.f9,l,m?"inspect the "+o.b:"inspect "+n)}return B.fc},
AO(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mu(a5,s,4.5)
for(q=a6.mo(a4),p=J.O(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cB(i.c)
g=i.f.a
f=i.he(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.k(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gaw()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mv(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
GM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.ho(c)
if(s.length===0)return f
r=d.aE(e)
q=A.mu(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gaw()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mv(d,c,b.a,new A.k(n,m,o)))return k}return f},
dY:function dY(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
Gl(a,b){var s,r=new A.cY(new Float32Array(5376)),q=new A.cY(new Float32Array(5376)),p=new A.cY(new Float32Array(5376)),o=new A.cY(new Float32Array(5376)),n=b.d,m=a.aE(b),l=A.k7(b.y),k=A.k7(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cQ(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cQ(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Ep(p,a,b,m,B.cZ[s])
for(j=a.aL(b.a),i=J.O(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zz(o,b,m,h,!0)}j=B.t.aT(r.a,0,r.b)
i=B.t.aT(q.a,0,q.b)
h=B.t.aT(p.a,0,p.b)
B.t.aT(o.a,0,o.b)
return new A.qN(j,i,h)},
Gi(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cY(new Float32Array(5376))
r=a.aE(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.zA(s,b,r,c,q)
return B.t.aT(s.a,0,s.b)},
Gj(a,b){var s,r,q,p=new A.cY(new Float32Array(5376)),o=a.aE(b)
for(s=a.aL(b.a),r=J.O(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zz(p,b,o,q,!1)}return B.t.aT(p.a,0,p.b)},
Ep(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.r||a4===B.p?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aL(s),q=J.O(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
if(!p.as&&p.aZ(s)===a4)a.push(new A.eg(p.aF(s),p.aF(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eg(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aN([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.u)(a),++o){m=a[o]
r.M(0,A.c([m.a,m.b],p))}l=A.H(r,r.$ti.c)
B.a.W(l)
s=A.aN([0,a3.b],s)
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
if(B.a.L(a,new A.uc(f,e,d,c)))continue
A.Ga(a0,a2,a3,a4,f,e,d,c)}A.Eq(a0,a2,a3,a4,b,a)},
Eq(a,b,c,d,e,f){return},
hh(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.ap(a,new A.k(r+e,q+g,p),new A.k(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.ap(a,new A.k(r+e,q+g,s-i),new A.k(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.ap(a,new A.k(s-i,q+g,p+e),new A.k(s,q+h,p+f),j)
return
case 3:A.ap(a,new A.k(r,q+g,p+e),new A.k(r+i,q+h,p+f),j)
return}},
ap(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.k(o,n,m),k=c.a,j=new A.k(k,n,m),i=c.b,h=new A.k(k,i,m),g=new A.k(o,i,m)
m=c.c
s=new A.k(o,n,m)
r=new A.k(k,n,m)
q=new A.k(k,i,m)
p=new A.k(o,i,m)
a.aG(j,l,g,h,d)
a.aG(s,r,q,p,d)
a.aG(l,s,p,g,d)
a.aG(r,j,h,q,d)
a.aG(l,j,r,s,d)
a.aG(g,p,q,h,d)},
Ga(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.k7(n).e
a.cQ(s.aj(0,o),r.aj(0,o),q.aj(0,o),p.aj(0,o),A.k7(n).c,(f-e)/m,(a1-a0)/m)
l=A.Gb(b,d)
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
default:j=k}A.ap(a,o,j,A.FR(A.k7(n).c,0.68))},
FR(a,b){var s,r=new A.vi(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hI()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hI()
r=r.$1(a&255)
if(typeof r!=="number")return A.vC(r)
return(q<<16|s<<8|r)>>>0},
Gb(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zz(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aZ(d),b=a3.aF(d),a=b+a3.w
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
A.ap(a0,new A.k(r+l,s,d),new A.k(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.ap(a0,new A.k(l,s,d),new A.k(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.ap(a0,new A.k(r+n,s+m,d),new A.k(r+h,j,i),q)
A.ap(a0,new A.k(k,s,d),new A.k(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.ap(a0,new A.k(r+l,s,k),new A.k(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.ap(a0,new A.k(l,s,k),new A.k(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.ap(a0,new A.k(r+n,s+m,k),new A.k(r+h,i,d),q)
A.ap(a0,new A.k(j,s,k),new A.k(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.ap(a0,new A.k(n,s,d+k),new A.k(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.ap(a0,new A.k(n,s,k),new A.k(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.ap(a0,new A.k(n,s+e,d+m),new A.k(r,j,d+l),q)
A.ap(a0,new A.k(n,s,i),new A.k(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.ap(a0,new A.k(r,s,d+l),new A.k(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.ap(a0,new A.k(r,s,l),new A.k(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.ap(a0,new A.k(r,s+e,d+n),new A.k(k,j,d+m),q)
A.ap(a0,new A.k(r,s,i),new A.k(k,s+0.05,l),q)
break}if(a4)A.zA(a0,a1,a2,a3,q)
A.Eo(a0,a1,a2,a3)},
Eo(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aF(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
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
A.hh(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hh(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hh(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.p?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hh(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.p,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hh(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hh(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hh(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
zA(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aZ(o),m=d.aF(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.ap(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.ap(a,new A.k(p,s,o-d.w),new A.k(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.ap(a,new A.k(p-d.w,s,o),new A.k(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.ap(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.ap(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.ap(a,new A.k(p,s,o-0.055),new A.k(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.ap(a,new A.k(p-0.055,s,o),new A.k(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.ap(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break}},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vi:function vi(a){this.a=a},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yi(a){var s=t.N
return new A.oZ(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.n(s,t.z_),A.n(s,t.U),new A.p0())},
oZ:function oZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pf:function pf(a){this.a=a},
mu(a,b,c){var s=a.aE(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mv(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Fi(a,s,c,d)},
Fi(a,b,c,d){var s,r,q,p,o=a.aE(b),n=d.ao(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.uh(a,b,o,B.r,r,q,p,c,n,m))return!0
if(A.uh(a,b,o,B.p,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.uh(a,b,o,B.ad,s,r,q,c,n,m))return!0
if(A.uh(a,b,o,B.ac,s+o.a,r,q,c,n,m))return!0
return!1},
uh(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.aj(0,a6.aB(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.r||a1===B.p
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aL(m),k=J.O(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aZ(m)===a1){g=q.aF(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
AP(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.e.h(0,a0)
if(c==null)return null
s=A.mu(b,c,4.5)
for(r=c.r,q=c.d,p=q.a,o=q.b,q=q.c,n=s,m=null,l=0;!1;++l){k=r[l]
j=k.glU()
i=p+j.a
h=o+j.b
j=q+j.c
g=a.a
f=new A.k(i-g.a,h-g.b,j-g.c)
e=f.gt(0)
if(e<0.01||e>s)continue
d=f.gaw()
g=a.b
if(Math.acos(B.c.D(d.a*g.a+d.b*g.b+d.c*g.c,-1,1))<=0.5236&&e<n){if(!A.mv(b,a0,a.a,new A.k(i,h,j)))continue
n=e
m=k}}return m},
AQ(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mu(b,j,4.5):4.5
for(s=b.aL(c),r=J.O(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.mr(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zZ(l,k,a,i,0.5236)||k>=q)continue
if(!A.mv(b,c,a.a,n))continue
q=k
p=o}return p},
AR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mu(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.Gc(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zZ(j,i,a,s,0.5236)||i>=p)continue
if(!A.mv(b,c,a.a,l))continue
p=i
o=m}return o},
zZ(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gaw().c1(c.b),-1,1))<=e},
Gc(a,b,c){var s=a.aE(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
ob:function ob(){this.a=null
this.b=0},
rD:function rD(){},
rE:function rE(){},
Cv(a){var s=A.ja(a,"inventory asset"),r=A.dH(s,"id"),q=A.dH(s,"kind")
A.dH(s,"source")
A.dH(s,"proxy")
A.dH(s,"pivot")
s=A.ja(s.h(0,"bounds"),"inventory bounds")
return new A.cR(r,q,new A.pn(A.ms(s.h(0,"min"),"bounds.min"),A.ms(s.h(0,"max"),"bounds.max")))},
Cw(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.ja(a,"inventory placement"),i=A.ja(j.h(0,"visibility"),"placement visibility"),h=A.ja(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dH(j,"id"),e=A.dH(j,"roomId"),d=A.dH(j,"assetId")
A.dH(j,"role")
s=typeof j.h(0,"socket")=="string"?A.p(j.h(0,"socket")):null
j=A.ja(j.h(0,"transform"),"inventory transform")
r=A.ms(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.h(B.fR)
q=A.ms(j.h(0,"position"),"transform.position")
p=A.ms(j.h(0,"rotation"),"transform.rotation")
o=A.dH(i,"layer")
if(typeof i.h(0,k)=="string")A.p(i.h(0,k))
n=J.a8(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.p(h.h(0,"focusId")):null
l=t.P.b(g)?A.Fx(g,"radius"):0
return new A.cv(f,e,d,s,new A.pp(q,p,r),o,n,m,l)},
ja(a,b){return t.P.b(a)?a:A.dD(b+" is not an object")},
dH(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dD(b+" is not a string")},
Fx(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dD(b+" is not finite")},
ms(a,b){var s
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vp())}else s=!0
if(s)return A.dD(b+" is not a finite vec3")
s=J.aG(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dD(a){return A.h(A.V(a,null,null))},
p3:function p3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p6:function p6(a){this.a=a},
p4:function p4(a){this.a=a},
p5:function p5(a){this.a=a},
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
pp:function pp(a,b,c){this.a=a
this.b=b
this.c=c},
pn:function pn(a,b){this.a=a
this.b=b},
vp:function vp(){},
po:function po(a){this.a=a},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
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
Cp(a){return A.Co(a)},
Co(a){var s,r,q,p,o,n,m=A.A5(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.A5(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fL)
k.k(0,r.a,q)}s=A.xv(m,"id")
r=A.xv(m,"roomId")
p=A.xv(m,"placementId")
o=A.G9(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h9("gain is not a number")
return new A.cQ(s,r,p,o,n,A.aX(k,l,l))},
A5(a,b){return t.P.b(a)?a:A.h9(b+" is not an object")},
xv(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h9(b+" is not a string")},
G9(a,b){var s
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vo())}else s=!0
if(s)throw A.b(A.V(b+" must be a numeric vec3",null,null))
s=J.aG(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
h9(a){return A.h(A.V(a,null,null))},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(){},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p_:function p_(){this.b=this.a=null},
eJ:function eJ(a,b){this.a=a
this.b=b},
p9:function p9(){this.b=this.a=null},
cP:function cP(a,b){this.a=a
this.b=b},
vo:function vo(){},
yj(a,b,c,d,e,f){var s=t.N
return new A.pe(e,f,c,a,A.aX(A.aM(d,s,s),s,s),A.ag(b,s))},
yk(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.i3(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,l=0;!1;++l){j=o[l]
i.k(0,j.gE(),new A.hS(j.gcJ(),j.glt()))}return A.yj(a.r.b,B.m,i,B.d6,h,s)},
Cq(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jI
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bc
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fJ)
p=t.N
o=A.n(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cn)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bt(j)||!A.bt(i))A.h(B.cn)
o.k(0,k,new A.i3(j,i))}h=A.n(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bt(l.b))throw A.b(B.fG)
h.k(0,k,A.Q(l.b))}g=A.n(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cl)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bt(f)||!A.bt(e))A.h(B.cl)
g.k(0,k,new A.hS(f,e))}d=A.n(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.ho)
d.k(0,n,A.p(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fd)
B.a.l(c,b)}return A.yj(a2,c,g,d,o,h)},
xq(a,b){return a.a.a===b.a&&a.a8(0,b.gap(b))},
pe:function pe(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i3:function i3(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
k7(a){var s=B.bk.h(0,a)
if(s==null)throw A.b(A.j("Unknown house surface material: "+a))
return s},
bh:function bh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
C4(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hR(e,A.B(e).c)
q=new A.ei()
q.bO((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hy(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.hy(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.hy(a,q,4,r,2+s,p)
A.C0(a,q,4)
break
case 5:A.hy(a,q,5,r,s,p)
A.BZ(a,q,5)
break
case 6:A.hy(a,q,6,r,s,p)
A.C_(a,q)
A.C3(a,q,6)
break
case 7:A.C1(a,q,7)
break
default:if(s>0)A.hy(a,q,b,r,s,p)}},
BY(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.C2(a,b,c))return!1
return!0},
hy(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(A.BY(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d0(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.yc(a,b,o[p],f)}},
yc(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gZ(o).a,n,n)
if(d==null)s=A.c(B.z.slice(0),t.s)
else{n=t.vY
s=A.H(new A.F(B.z,t.Ag.a(new A.o6(d)),n),n.i("m.E"))}n=s.length
if(n===0)return
n=b.aR(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.ef(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aR(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dB(c.a,m,B.a.gZ(o).b)},
C0(a,b,c){var s=A.yd(a,b,c)
if(!a.bY(s))return
a.er(c,t.G.a(s),0,B.b2,null)},
yd(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.z[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aR(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
BZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d0(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gZ(i).a,s,s)
r=p.c
n=A.aM(B.a.gZ(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.z[m]
k=o.h(0,l)
j=s.ef(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aR(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dB(q.a,o,B.a.gZ(i).b)
a.dB(p.a,n,B.a.gZ(r).b)},
C_(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aR(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a4(0,q[r].a)},
C3(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aR(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.yc(a,b,q[s],null)},
C1(a,b,c){var s=c+1,r=A.yd(a,b,s)
if(!a.bY(r))return
a.er(s,t.G.a(r),0,B.b2,null)},
C2(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gZ(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gZ(b.c).c===B.ay}if(c===21)return b.e
return!1},
o6:function o6(a){this.a=a},
Dq(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p=A.aA(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.tf(n)},
pH(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kj(A.aX(p,q,q),b,c)},
yw(a){var s=t.N
return A.pH(t.P.a(a.h(0,"fields")).bG(0,new A.pI(),s,s),A.a6(a.h(0,"shakiness")),A.C9(B.iV,A.p(a.h(0,"hand")),t.qX))},
C8(a){var s,r,q,p,o=a.h(0,"margin"),n=A.f(a.h(0,"ordinal")),m=A.f(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yw(r.a(s.gn())))
s=A.aq(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.zJ(a.h(0,"lastReadDay"))
return new A.bT(n,m,l,s,q,p,o==null?null:A.yw(r.a(o)))},
e_:function e_(a,b){this.a=a
this.b=b},
tf:function tf(a){this.a=a},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(){},
pJ:function pJ(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yt(a){return new A.ps(a,A.n(t.S,t.g),A.a_(t.N),A.c([],t.t))},
CB(a,b){var s,r,q,p,o=A.yt(a)
o.e=A.f(b.h(0,"nextOrdinal"))
o.f=A.f(b.h(0,"locksRemaining"))
s=t.j
o.c.M(0,J.Bp(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.C8(r.a(s.gn()))
q.k(0,p.a,p)}return o},
ps:function ps(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pz:function pz(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
np:function np(){},
qo:function qo(){},
qn:function qn(a,b,c){this.b=a
this.c=b
this.d=c},
qp:function qp(){},
CL(a,b,c){return B.kG},
ky:function ky(a,b){this.a=a
this.b=b},
qq:function qq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qr:function qr(){},
ki:function ki(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qx:function qx(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yO(a){if(!isFinite(0))A.h(A.aj(0,"interpolation",null))
return new A.qK(a)},
kL:function kL(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
qK:function qK(a){this.a=a},
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
yM(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hR(c,A.B(c).c)
r=A.H(r,A.o(r).c)
B.a.W(r)
s=t.N
r=A.ag(r,s)
r=new A.qJ(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.ic(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
yN(a,b,c,d){var s=A.mj("RENDERER_SHA"),r=A.mj("GAME_SHA"),q=A.mj("DART_SDK_VERSION")
return A.yM(a,"1f419bbd28fa-93a7e35137dd-dirty",b,!1,null,r,A.mj("LOCKFILE_SHA256"),d,A.mj("PROJECT_VERSION"),s,q,null)},
mj(a){var s=B.jA.h(0,a)
return s.length===0?null:s},
qJ:function qJ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qL:function qL(a){var _=this
_.a=a
_.d=_.c=_.b=0},
ry:function ry(a){this.a=a},
a3(a,b,c,d,e,f,g,h,i,j){return new A.ea(e,g,a,f,i,h,j,c,c,b)},
cC:function cC(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d,e,f,g,h,i,j){var _=this
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
rz:function rz(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rC:function rC(a){this.a=a},
rB:function rB(a){this.a=a},
rA:function rA(a){this.a=a},
y9(a,b,c,d,e,f,g){var s=A.H(f,t.ho)
if(b<0||a<0||e<0)A.h(A.V("saved day-loop resources must not be negative",null,null))
return new A.nZ(c,g,b,a,e,d===!0,s)},
BS(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fv)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fK)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fq)
f=A.bw(new A.F(B.cR,q.a(new A.o_(h)),p),o)
e=A.bw(new A.F(B.cY,n.a(new A.o0(g)),m),l)
if(f==null||e==null)throw A.b(B.hh)
B.a.l(s,new A.fV(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.bt(a))throw A.b(B.fT)
return A.y9(c,d,a1,a,b,s,a3)},
bM:function bM(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
nZ:function nZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o_:function o_(a){this.a=a},
o0:function o0(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.b=a
this.c=b},
f3:function f3(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
pg:function pg(a){this.c=a},
pk:function pk(a,b){this.a=a
this.b=b},
pl:function pl(){},
xa(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.he)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qO:function qO(){},
cW:function cW(){},
qP:function qP(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
F_(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.v1(s,a).$0())
return r},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tg:function tg(a){this.b=a},
v1:function v1(a,b){this.a=a
this.b=b},
Ci(a){var s=A.H(a.c,t.z)
B.a.V(s,new A.ov())
return new A.ou(A.ag(s,t.Dm))},
Ch(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.jY(a,c,A.fI(B.m,t.N))
s=t.N
r=J.y_(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.jY(a,c,A.fI(new A.F(r,q.i("l(m.E)").a(new A.ot(a)),q.i("F<m.E>")),s))},
ou:function ou(a){this.a=a},
ov:function ov(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(a){this.a=a},
q2(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.M(0,a)
s=A.n(r,r)
if(b!=null)s.M(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.M(0,c)
return new A.q1(q,s,r)},
CI(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.yD(a.h(0,"choices"))
q=A.yD(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.Ce(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.q2(r,q,p)},
yD(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.p(q.b))}return r},
Ce(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cK(s,r,q,p)},
q1:function q1(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(){},
q4:function q4(){},
q5:function q5(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
fX(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rJ:function rJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rK:function rK(){},
rL:function rL(){},
f0:function f0(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b){this.a=a
this.b=b},
lk:function lk(a,b,c,d,e,f){var _=this
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
Dc(a){var s,r,q,p,o,n,m=B.i.ar(a,null)
if(!t.f.b(m))throw A.b(B.h6)
s=m.h(0,"sources")
r=m.h(0,"scenes")
q=m.h(0,"events")
if(q==null)q=B.bc
if(J.a8(m.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.h3)
p=A.c([],t.s)
for(o=J.O(s);o.m();){n=o.gn()
if(typeof n!="string"||n.length===0)A.h(A.V("source must be a non-empty string",null,null))
p.push(n)}p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.D6(o.gn()))
p=A.c([],t.tS)
for(o=J.O(q);o.m();)p.push(A.D5(o.gn()))
return new A.rI(p)},
D5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.p(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.p(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.p(a.h(0,f)).length===0)throw A.b(B.fE)
s=a.h(0,"effects")
if(s==null)s=B.bc
if(!t.j.b(s)||J.wo(s,new A.qV()))throw A.b(B.h8)
r=B.c.ad(A.a6(a.h(0,"day")))
q=A.a6(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.fZ)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.fi)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.hm)
l=new A.qW(a)
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
return new A.ic(m,k,r,q,j,A.ag(i,t.N),n,h)},
D6(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.ft)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.ad(r)!==r)throw A.b(B.fP)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.V("screenplay scene "+s+" has invalid arrays",null,null))
m=B.c.ad(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.h(B.fY)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.h(B.hj)
A.p(j.h(0,"kind"))
A.p(j.h(0,"text"))
A.aq(j.h(0,"speaker"))
l.push(new A.kP())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.D4(l.gn()))
return new A.kS(s,m)},
D4(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.fz)
s=A.p(a.h(0,m))
A.p(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.h(B.h2)
o=A.p(p.h(0,m))
n=A.p(p.h(0,"label"))
A.p(p.h(0,"next"))
r.push(new A.kR(o,n))}return new A.kQ(s)},
rI:function rI(a){this.c=a},
ic:function ic(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
qV:function qV(){},
qW:function qW(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b},
kP:function kP(){},
kQ:function kQ(a){this.a=a},
kR:function kR(a,b){this.a=a
this.b=b},
rM:function rM(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
rN:function rN(){},
rO:function rO(){},
jm:function jm(a){this.a=a},
wp:function wp(a,b,c){this.b=a
this.e=b
this.f=c},
Bu(a){var s,r,q,p
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fg)
s=new A.mD()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wY(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dJ(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b_(B.bg,new A.mB(a),new A.mC()))},
cI:function cI(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mD:function mD(){},
mB:function mB(a){this.a=a},
mC:function mC(){},
mO:function mO(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mQ:function mQ(a){this.a=a},
mP:function mP(a,b){this.a=a
this.b=b},
BA(a){var s
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fQ)
s=new A.n0()
return new A.dK(s.$1$2(B.be,a.h(0,"output"),t.xs),s.$1$2(B.b9,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b8,a.h(0,"reverb"),t.gc),s.$1$2(B.b6,a.h(0,"ducking"),t.ul))},
cs:function cs(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
n0:function n0(){},
n1:function n1(a,b){this.a=a
this.b=b},
n2:function n2(a){this.a=a},
nr:function nr(a){this.a=a
this.b=null},
nv(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.aj(c,"level","must be between 1 and 6"))
s=A.z(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nt(s,b)
return s},
dT(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.z(a,"button","brush-button brush-state-"+s.b,r)
A.nt(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.U(new A.nu(c)))
return q},
BF(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.nt(s,b)
s.addEventListener("change",A.U(new A.ny(d,s)))
return s},
BE(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.v(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.as
A.nt(s,b)
s.addEventListener("input",A.U(new A.nx(s,e)))
return s},
wr(a,b){var s=B.b.hV(A.p(a.className),A.yL("\\s+")),r=A.B(s),q=r.i("F<1>"),p=A.H(new A.F(s,r.i("l(1)").a(new A.nw()),q),q.i("m.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Y(p," ")
a.setAttribute("data-brush-state",s)},
nt(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gjZ())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
nu:function nu(a){this.a=a},
ny:function ny(a,b){this.a=a
this.b=b},
nx:function nx(a,b){this.a=a
this.b=b},
nw:function nw(){},
dR:function dR(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nA:function nA(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nB:function nB(a){this.a=a},
y7(a){var s=!1
if(a.length!==0)if(!B.dB.q(0,a))s=B.lx.q(0,a)||B.lp.q(0,a)||B.lw.q(0,a)||!B.b.T(a,"Mouse")
return s},
EJ(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Fo(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.K(a,A.o(a).i("K<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fv(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fH(B.jx,s,r)
if(b!=null)q.M(0,b)
q.M(0,A.Fo(a))
s=new A.fu(g,d,h,e,f,c,A.aX(A.EJ(q),s,r))
s.C()
return s},
BP(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cm)
s=a.h(0,"version")
r=J.et(s)
if(!r.a5(s,1)&&!r.a5(s,2))throw A.b(B.cm)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fF)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.Bq(m,new A.nO())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.p(l.gn()))
q.k(0,n,o)}else throw A.b(B.fl)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fv(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
x0(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.H(r.b,p)
o.k(0,q,r)}return o},
xm(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xA(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fu:function fu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nQ:function nQ(){},
nP:function nP(a){this.a=a},
nR:function nR(){},
nS:function nS(){},
nT:function nT(){},
nO:function nO(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.c=b},
jF:function jF(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
BO(a){var s=t.N,r=t.m
r=new A.hw(A.fv(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.i5(a)
return r},
hw:function hw(a,b,c,d,e,f){var _=this
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
nM:function nM(a,b){this.a=a
this.b=b},
nN:function nN(a){this.a=a},
nL:function nL(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b){this.a=a
this.b=b},
nK:function nK(a,b){this.a=a
this.b=b},
BQ(a){var s=new A.nU(a,A.a(a.createElement("div")))
s.aV(a)
s.i6(a)
return s},
nU:function nU(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nV:function nV(a){this.a=a},
BW(a){var s=new A.o2(A.z(a,"div","door",null))
s.i8(a)
return s},
ya(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Y(s,"; ")+"."},
o2:function o2(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
o3:function o3(a){this.a=a},
o4:function o4(a,b){this.a=a
this.b=b},
o5:function o5(a,b){this.a=a
this.b=b},
C5(a){var s=new A.o8(a,A.a(a.createElement("div")))
s.aV(a)
s.i9(a)
return s},
o8:function o8(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
o9:function o9(a){this.a=a},
oD:function oD(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oE:function oE(){},
Cj(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oF(a.b===B.cu,a.c===B.cy,s,a.e===B.cv,a.f===B.cs,a.r===B.cA,a.w,a.x)},
oF:function oF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ws(a,b,c,d,e,f,g,h,i,j,k){return new A.fC(e,g,k,f,b,h,d,c,a,i,j)},
Ck(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.h_)
s=new A.oG(a)
r=a.h(0,"contextualReminders")
if(!A.bt(r))throw A.b(B.hf)
q=!A.bt(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bf,t.bK)
o=s.$1$2("promptDensity",B.bj,t.dn)
n=s.$1$2("textPacing",B.bh,t.j_)
m=s.$1$2("journalLayout",B.ba,t.gm)
l=s.$1$2("confirmations",B.b4,t.aJ)
k=s.$1$2("saveFeedback",B.bb,t.mx)
j=s.$1$2("focusLossBehavior",B.aA,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b7,t.vS):B.aV
return A.ws(s,l,r,j,p,m,o,k,q,A.bt(a.h(0,g))&&A.Q(a.h(0,g)),n)},
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
fC:function fC(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oG:function oG(a){this.a=a},
oH:function oH(a,b){this.a=a
this.b=b},
oI:function oI(a){this.a=a},
yh(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fO)
s=B.a.b_(B.cT,new A.oT(a),new A.oU())
r=A.p(a.h(0,"renderScale"))
q=A.Q(a.h(0,"dynamicResolution"))
p=A.p(a.h(0,"frameTarget"))
o=A.p(a.h(0,"antialiasing"))
n=A.p(a.h(0,"textureQuality"))
m=A.aq(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.aq(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.aq(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.zH(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dZ(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fE(a,b){var s=b==null?B.b1:b
return new A.oV(s,a==null?B.b1:a)},
AK(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dz(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dz("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fF(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cJ&&b.a<2){q=q.fG(B.b0)
B.a.l(s,"High preset was reduced to Standard")}return new A.oN(q,A.ag(s,t.N))},
ct:function ct(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oT:function oT(a){this.a=a},
oU:function oU(){},
oV:function oV(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
Cm(a){var s=new A.hH(A.n(t.N,t.m),B.b1,a,A.a(a.createElement("div")))
s.aV(a)
s.ia(a)
return s},
hH:function hH(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oQ:function oQ(a){this.a=a},
oR:function oR(a){this.a=a},
oS:function oS(a){this.a=a},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function oO(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function oW(){this.c=0},
Cn(a){var s=new A.oX(a,A.a(a.createElement("div")))
s.aV(a)
s.ib(a)
return s},
oX:function oX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oY:function oY(a){this.a=a},
pt:function pt(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(){},
py:function py(){},
cU:function cU(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qa:function qa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zR(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i2:function i2(){},
bi:function bi(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(){},
qh:function qh(){},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
qf:function qf(a){this.a=a},
qi:function qi(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
qj:function qj(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qk:function qk(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
qw:function qw(a){this.a=a
this.b=null},
D7(a){var s=new A.qY(a,A.a(a.createElement("div")))
s.aV(a)
s.ie(a)
return s},
qY:function qY(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qZ:function qZ(a,b){this.a=a
this.b=b},
r_:function r_(a){this.a=a},
kT(a,b){var s=t.N,r=t.m
r=new A.fU(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.wk(),B.ap,A.n(s,r),A.n(s,r),B.aN,A.n(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.ig(a,b)
return r},
fU:function fU(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ro:function ro(a){this.a=a},
rp:function rp(a){this.a=a},
rq:function rq(a,b){this.a=a
this.b=b},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rg:function rg(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
rf:function rf(a){this.a=a},
ri:function ri(a){this.a=a},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a,b){this.a=a
this.b=b},
rk:function rk(a,b){this.a=a
this.b=b},
rl:function rl(a,b){this.a=a
this.b=b},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
r1:function r1(a){this.a=a},
r2:function r2(a){this.a=a},
r3:function r3(a){this.a=a},
r4:function r4(a){this.a=a},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ru(a){return B.a.b_(B.A,new A.rv(a),new A.rw(a))},
D8(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
q.k(0,r.a,r.e)}return q},
dt(a,b){var s=t.z
s=A.fH(A.D8(),s,s)
if(a!=null)s.M(0,a)
s=new A.rt(b,A.aX(s,t.N,t.K))
s.ih(a,b)
return s},
yT(a){var s,r=t.f
if(!r.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.hc)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fu)
return A.dt(A.aM(s,t.N,t.K),A.f(a.h(0,"version")))},
bB:function bB(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rv:function rv(a){this.a=a},
rw:function rw(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
wG(a,b){var s=b==null?A.dt(null,1):b
return new A.rx(s,a==null?A.dt(null,1):a)},
D9(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.A[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eO(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cU(r)
J.bf(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.D))throw n}}m=A.dt(l,1)
return A.wG(m,m)},
rx:function rx(a,b){this.a=a
this.b=b},
Da(a){var s=new A.rF(a,A.a(a.createElement("div")))
s.aV(a)
s.ii(a)
return s},
rF:function rF(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
Bx(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cq(p+m+":"+k,m,l.a,l.b,j))}}B.a.V(i,new A.mM())
return new A.mL(A.ag(i,t.bC),A.a_(t.N))},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mL:function mL(a,b){this.a=a
this.b=b},
mN:function mN(){},
mM:function mM(){},
Dp(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mV
s=t.L
r=A.n(s,t.q1)
q=A.o(a).i("ab<1>")
p=A.H(new A.ab(a,q),q.i("m.E"))
B.a.W(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.bm(B.mD,k+" has an out-of-range authored day "+h+"."))
g=A.Do(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.af(o,o.r,o.e,A.o(o).i("af<2>"));o.m();){n=o.d
J.jk(e.cP(n.b,new A.t9()),n)}o=A.aX(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.K(e,e.$ti.i("K<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aA(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.li(new A.lh(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a1,A.q2(b,b,b)))},
Do(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cP[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.dq(B.b.aU(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.bm(B.mE,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cX
B.a.l(l,new A.c3(g,i.b,f))}if(l.length===0)continue
B.a.V(l,new A.t6())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.bm(B.dU,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.bm(B.dU,a+" day "+s+" has no authored tiers."))
return new A.lN(c)},
lh:function lh(a,b,c,d,e,f,g,h){var _=this
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
tc:function tc(a){this.a=a},
tb:function tb(a){this.a=a},
td:function td(a){this.a=a},
t7:function t7(a){this.a=a},
t8:function t8(){},
ta:function ta(a){this.a=a},
t9:function t9(){},
t5:function t5(a){this.a=a},
t4:function t4(a){this.a=a},
t6:function t6(){},
li:function li(a){this.a=a},
lN:function lN(a){this.a=a},
Gv(a){var s,r,q,p=A.a_(t.N)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaI(),q=q.gu(q);q.m();)if(q.gn().ga2().L(0,new A.vz())){p.l(0,r.a)
break}}s=A.H(p,p.$ti.c)
B.a.W(s)
return s},
Gu(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aA(b,!0,s)
B.a.W(r)
q=new A.ei()
q.bO((a^913741)>>>0)
p=q.aR(4)
if(!(p>=0&&p<4))return A.d(B.cO,p)
o=B.cO[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aA(r,!0,s)
B.a.d0(m,q)
s=A.l0(m,0,A.fh(n,"count",t.S),A.B(m).c).bK(0)
B.a.W(s)
return s},
vz:function vz(){},
z4(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
Dn(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.z4(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Bw(m)
if(!s&&l==null)return i
return new A.lj(r,o,l)},
Bw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.z4(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.bt(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bw(new A.F(B.cP,t.qR.a(new A.mI(r)),t.cE),t.hF)
j=A.bw(new A.F(B.js,t.da.a(new A.mJ(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bw(new A.F(B.iA,t.kr.a(new A.mK(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jo(s,k,j,p,i,n,A.aq(m))},
bJ:function bJ(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lj:function lj(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(){},
jo:function jo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mI:function mI(a){this.a=a},
mJ:function mJ(a){this.a=a},
mK:function mK(a){this.a=a},
lg:function lg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
te:function te(){},
b9:function b9(a){this.a=a},
lf:function lf(a){this.a=a},
ld:function ld(a){this.a=a},
ip:function ip(a,b){this.a=a
this.b=b},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
FE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jh())return f
n=A.ed().gb2()
m=n.h(0,"captureSeed")
l=A.dq(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dq(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eO(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.i.ar(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lq.q(0,o.b))return f
J.bf(p,A.p(o.a),A.p(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.D)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lv.q(0,i))return f
if(h!=null&&!B.lt.q(0,h))return f
return new A.ts(l,k,j,h,r)},
FF(){var s,r,q,p=A.ed().gb2().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eD
break A}if("intimate"===p){s=B.eF
break A}s=B.eE
break A}r=A.ed().gb2().h(0,"cameraFov")
q=A.eO(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fo(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jc(a){var s=$.bc
if(s===a&&B.b.q(A.p(a.b.className),"open"))return
if(s!=null)s.a7()
$.bc=a
if(a===$.cm.j())$.hm().h4("gameplay.viewport")
else $.hm().mn(A.A6(a))
s=$.ad.j()
s.ay=!1
s.bd()
$.ep=0
a.bH()},
xg(a,b,c){var s,r,q
$.jd=!0
s=$.bc
if(s!=null)s.a7()
$.bc=a
s=$.hm()
if(s.a.a.length===0)s.h4(c)
r=A.H(s.a.a,t.oP)
r.push(new A.dn(b,B.W,c))
q=s.a
s.a=new A.e6(r,q.b,q.c)
s.iO(b)
s=$.ad.j()
s.ay=!1
s.bd()
$.ep=0
a.bH()
$.jd=!1},
dG(a){var s,r,q,p,o,n,m,l=null
if($.jd)return
$.jd=!0
a.a7()
$.bc=null
s=$.hm().kd()
$.jd=!1
r=s.a
if(r===B.dp){$.ep=0
r=$.ad.j()
r.bd()
r.ay=!0
q=A.G(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dn)return
r=s.c.a
r=r.length===0?l:B.a.gZ(r)
p=r==null?l:r.a
A:{if(B.bp===p){r=$.cm.j()
break A}if(B.dd===p){r=$.h8.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bc=r
n=$.ad.j()
n.ay=!1
n.bd()
$.ep=0
r.bH()
m=o==null?l:A.G(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jf(a){if($.bc===a&&B.b.q(A.p(a.b.className),"open"))a.a7()
else A.jc(a)},
he(a){var s
if($.jd)return
if($.bc===a)$.bc=null
if(a===$.cm.j())$.hm().cc()
else $.hm().ld(A.A6(a))
$.ep=0
s=$.ad.j()
s.bd()
s.ay=!0},
A6(a){if(a===$.cm.j())return B.de
if(a===$.h8.j())return B.W
if(a instanceof A.fU)return B.W
if(a instanceof A.hH)return B.W
if(a instanceof A.hw)return B.W
if(a===$.j2.j())return B.kq
if(a===$.me.j())return B.kr
if(a===$.j1.j())return B.ks
if(a===$.mc.j())return B.W
if(a===$.j_.j())return B.ku
return B.kt},
mi(a,b){var s
a.smc(new A.up())
a.sme(new A.uq())
a.smd(new A.ur())
a.sm8(new A.ux())
a.smb(new A.uy())
a.smm(new A.uz())
a.smh(new A.uA())
a.smg(new A.uB())
a.sb6(b?new A.uC(a):new A.uD(a))
a.sb1(b?new A.uE(a):new A.us(a))
s=a.f
if(s===B.E)a.sm_(new A.ut())
if(s===B.Y)a.sm9(new A.uu())
if(s===B.F){a.slZ(new A.uv())
a.smf(new A.uw())}},
EG(){var s=$.en.j()
s.sdM(new A.um())
s.sb6(new A.un())
s.sb1(new A.uo())},
mh(a,b,c){return A.ED(a,b,c)},
ED(a,b,c){var s=0,r=A.bu(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mh=A.bv(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.ui()
k=c.$ti
j=$.ao
i=new A.as(j,k)
if(j!==B.x)l=A.Ad(l,j)
c.cl(new A.dA(i,2,null,l,k.i("dA<1,1>")))
s=4
return A.ai(i,$async$mh)
case 4:case 3:o=$.ji().b
n=$.aR
q=6
s=n!=null?9:10
break
case 9:s=11
return A.ai(n.cA(b.a),$async$mh)
case 11:case 10:k=b.a
$.j7=A.fE(k,a)
$.en.j().cj(a,k,b.b)
A.xi()
A.je()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ak(g)
$.j7=A.fE(o,o)
k=$.en.j()
k.cj(o,o,A.c(["renderer transaction rejected: "+A.v(m)],t.s))
A.xi()
s=8
break
case 5:s=1
break
case 8:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$mh,r)},
Ft(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.i.ar(n,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.h1)
q=A.yh(r.h(0,"requested"))
$.j7=A.fE(A.yh(r.h(0,"effective")),q)}catch(s){$.j7=A.fE(null,null)}p=$.ji().a
o=A.AK(p,A.zV())
r=o.a
$.j7=A.fE(r,p)
$.en.j().cj(p,r,o.b)
A.xi()
A.je()},
zV(){var s,r,q,p,o=$.fd.j().gfJ().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.dq(B.b.aU(p,12),null)
if(r==null)r=1}return new A.oM(r,B.a.q(o,"disjoint-timer-query"))},
xi(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.i.ab($.ji().B(),null))}catch(s){}},
EF(){var s=$.iZ.j()
s.sdM(new A.uj())
s.sb6(new A.uk())
s.sb1(new A.ul())},
Fr(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.x5=A.BP(B.i.ar(n,null))}catch(s){$.x5=A.fv(null,null,!1,1,!1,!1,2,1)}r=$.iZ.j()
q=r.w=$.fj()
r.x=new A.jF(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.c.p(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.c.p(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.ds()
$.ad.j().e9($.fj().r)
r=$.ad.j()
q=$.fj()
p=r.ch
p.a=q.f
p.dS()
r.bd()
A.A8()},
A8(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.i.ab($.fj().B(),null))}catch(s){}},
Fq(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j6=A.BA(B.i.ar(r,null))}catch(s){$.j6=B.aN}$.h7.j().hu($.j6)
A.A7()
A.wX()},
A7(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.i.ab($.j6.B(),null))}catch(s){}},
wX(){var s=$.bd
if(s==null)return
s.hE($.j6)},
Fs(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.x9=A.Ck(B.i.ar(r,null))}catch(s){$.x9=$.wk()}$.j0.j().hv($.cG())
A.A9()
A.zD()},
A9(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.i.ab($.cG().B(),null))}catch(s){}},
zD(){var s,r="detailed",q=A.Cj($.cG()),p=A.G(A.a(v.G.document).documentElement)
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
Fp(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eo=A.Bu(B.i.ar(r,null))}catch(s){$.eo=B.ap}$.fc.j().e8($.eo)
A.xh()
A.mf()},
xh(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.i.ab($.eo.B(),null))}catch(s){}},
mf(){var s,r,q,p,o,n,m=$.eo,l=$.vl,k=$.xy,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.fr)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a7
$.xn=l
$.d6.j()
r=A.G(A.a(v.G.document).documentElement)
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
if($.zB){m=$.bG.j()
l=$.eo.f
m.e=new A.jm(l==null?B.a7:l)
m=$.bG.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Ab(a){var s,r,q
A.es("renderer-unavailable")
s=$.y.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.n(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dC.j().b)
$.dC.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dC.j().d)
q.k(0,"aliasUsed",$.dC.j().f)
if($.dC.j().e!=null)q.k(0,"rejectionReason",$.dC.j().e)
if($.dC.j().r!=null)q.k(0,"aliasReason",$.dC.j().r)
s.setAttribute("data-renderer-diagnostics",B.i.ab(A.M(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
F3(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.v5(r,q)
r.addEventListener("change",A.U(new A.v3(s)))
q.addEventListener("change",A.U(new A.v4(s)))},
mw(){var s=0,r=A.bu(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$mw=A.bv(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.G(A.a(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.y.b=e1
$.x8=A.G(A.a(e0.document).getElementById("fps"))
$.dC.b=$.Bc().cg(A.ed().gb2().h(0,"renderer"))
A.F4()
c0=$.y.j()
c1=A.f(A.a(e0.window).innerWidth)>0?A.f(A.a(e0.window).innerWidth):800
c0.width=c1
c1=$.y.j()
c0=A.f(A.a(e0.window).innerHeight)>0?A.f(A.a(e0.window).innerHeight):600
c1.height=c0
c2=A.G(A.a(e0.document).getElementById("ui-canvas"))
if(c2!=null){c2.width=A.f($.y.j().width)
c2.height=A.f($.y.j().height)
c0=new A.nA(c2,A.c([],t.km))
c3=A.G(c2.getContext("2d"))
if(!t.m.b(c3))A.h(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.qL(c0)
$.er=c0
c0.cT(A.f($.y.j().width),A.f($.y.j().height))}n=B.eC.l7(e1)
if(n==null){A.Ab("webgl2 unavailable")
s=1
break}try{c0=t.s6
c1=t.N
c4=t.iO
c5=t.m3
c6=t.pw
m=new A.lQ(n,A.f($.y.j().width),A.f($.y.j().height),A.c([],c0),A.n(c1,t.qr),A.c([],t.s3),A.n(c1,c4),A.n(c1,c5),A.n(c1,t.xp),A.n(c1,t.bE),A.n(c1,c4),A.n(c1,c5),A.c([],c0),A.n(c1,c4),A.n(c1,c5),A.n(c1,c1),A.n(t.S,c6),A.n(c1,t.qS),A.c([],t.j5),B.iZ,A.n(c1,t.Aj),A.n(c1,c1),A.n(c1,c6),A.n(c1,t.vD),A.n(c1,c6),A.n(c1,t.w1),B.hp,B.kI)
$.aR=m
c1=$.dC.j()
c6=t.dM.a(m)
if(c1.a!==B.aE)A.h(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.qn(c6,c1.B(),B.l4)
c6.lH()
c0.d=B.M
$.fd.b=c0}catch(e3){l=A.ak(e3)
k=A.cF(e3)
g=$.y.j()
g.setAttribute("data-renderer-error",A.v(l))
if($.jh())$.y.j().setAttribute("data-renderer-error-stack",A.v(k))
A.Ab("pixeldart initialization failed")
s=1
break}A.je()
p=4
A.es("initializing")
$.d6.b=new A.nz(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.xU())
$.vl=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xy=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.xn=$.vl
$.d6.j()
c0=A.a(e0.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.Cr(A.M(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.a(c0.document)
c4=new A.k9(c0,c6,A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),new A.k(0,0,0),new A.pm(),c4)
c0.addEventListener("keydown",A.U(c4.gjc()))
c0.addEventListener("keyup",A.U(c4.gje()))
c0.addEventListener("mousemove",A.U(c4.gjk()))
c0.addEventListener("mousedown",A.U(c4.gji()))
c0.addEventListener("mouseup",A.U(c4.gjm()))
c0.addEventListener("wheel",A.U(c4.gjo()))
c6.addEventListener("pointerlockchange",A.U(c4.gjg()))
$.ad.b=c4
c4=$.y.j()
c0=A.f(A.a(e0.window).innerWidth)>0?A.f(A.a(e0.window).innerWidth):800
c4.width=c0
c0=$.y.j()
c4=A.f(A.a(e0.window).innerHeight)>0?A.f(A.a(e0.window).innerHeight):600
c0.height=c4
A.es("renderer")
A.es("text")
c4=$.fk()
s=7
return A.ai(c4.bs(),$async$mw)
case 7:j=c4.n4()
i=A.Dp(j)
if(!(i instanceof A.li)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aE.b=i.a
$.mb.b=A.Bx(j)
g=A.n(c1,c5)
for(c0=t.j,c8=0;c8<5;++c8){f=B.z[c8]
c5=A.p(f)
c6=c4.c
c6===$&&A.q()
c9=c6.h(0,c5)
c5=c0.b(c9)?A.aA(c9,!0,c1):B.m
J.bf(g,f,c5)}e=A.Dq(g)
s=8
return A.ai(A.mn(),$async$mw)
case 8:d=e5
$.wV.b=new A.ns(B.eB)
c=$.wV.j().mu(new A.vH(e,d))
d0=$.wl()
b=d0
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.aQ.aR(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.c.aO(c6.c)
if(c6==null)c6=7
if(c5<1)A.h(A.aj(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.h(A.aj(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.aj(5760,"daySeconds","must be finite and > 0"))
d1=new A.k_(c5,7,5760)
d1.eg(c6)
d2=A.yt(e)
d3=g==null?A.yi(42):A.Aw(g,42)
g=A.yf(42,c1,d3,d1,d2,A.y9(6,16,d2,null,6,B.j_,d1),new A.jN(0,0,0,!1),A.q2(null,null,null))}else{g=c.a
g.toString
g=A.yg(d,g,e)}$.T.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Ch(a,g,$.T.j().b)}$.x_=g
$.aE.j().y=$.T.j().z
g=A.ag(A.F_($.T.j().b),t.fu)
$.wW.b=new A.tg(g)
g=$.wm()
c1=c.a
g.dU(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fd.j().el(A.yO($.T.j().gha()))
if(c.b!=null){g=c.b
g.toString
A.hf(g)}g=$.aE.j()
c1=A.Gu($.T.j().b,A.Gv(j.b))
g.shW(A.hR(c1,A.B(c1).c))
A.es("house")
$.W.b=$.T.j().c
g=d0==null
a0=g?null:d0.e
a1=g?null:d0.f
if(a1!=null)for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a2=g[c8]
for(c4=a2.e,c5=c4.length,d4=0;d4<c4.length;c4.length===c5||(0,A.u)(c4),++d4){a3=c4[d4]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.a8(a0,"open")||J.a8(a0,"closed")){a5=J.a8(a0,"open")
for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a6=g[c8]
for(c4=a6.e,c5=c4.length,d4=0;d4<c4.length;c4.length===c5||(0,A.u)(c4),++d4){a7=c4[d4]
a7.shO(a5)}}}a8=$.xT()
if(a8!=null&&a8.length!==0)for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a9=g[c8]
for(c4=a9.r,d4=0;!1;++d4){b0=c4[d4]
b0.gE()}}g=$.aR
if(g!=null)g.kc($.W.j())
$.bb.b=$.T.j().d
$.W.j()
g=new A.k(12.9375,1.65,0.825)
$.xz=$.xl=$.xr=g
b1=g.ao(0,new A.k(0,1.3499999999999999,0))
$.j3.b=new A.jA(b1,J.xV(b1,new A.k(0,1.2000000000000002,0)))
$.ub.b=new A.ob()
g=A.xa(B.m)
c1=A.xa(B.m)
c4=new A.qP(B.B,g,c1)
if(!isFinite(0))A.h(B.fe)
if(!B.a.a8(c1,B.a.gap(g)))A.h(B.fU)
if(c4.a===B.B&&c4.b!==0&&!c4.e)A.h(B.fj)
$.c6.b=c4
$.az="hall"
g=c.a
b2=A.CM(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.lN($.W.j())){g=b2.b
$.xz=$.xl=$.xr=g
$.cn=b2.c
$.ff=b2.d
$.az=b2.a
b3=g.ao(0,new A.k(0,1.3499999999999999,0))
g=$.j3.j()
g.ske(b3)
g.b=J.xV(b3,new A.k(0,1.2000000000000002,0))
g=$.j3.j()
c1=$.W.j()
c4=b2.e
c5=b2.f
g.mP($.az,$.ev(),c1,c5,c4)
A.hf("restored position")}g=A.D7(A.a(e0.document))
g.sm0(new A.vI())
g.sb6(new A.vJ())
g.sb1(new A.vU())
$.h8.b=g
g=A.a(e0.document)
c1=A.a(g.createElement("div"))
c4=new A.qj(g,c1)
c4.aV(g)
c1.className=A.p(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.a(c1.appendChild(A.nv(g,B.ej,1)))
A.a(c1.appendChild(A.z(g,"p","settings-copy","The house waits. Choose what to do next.")))
d5=A.z(g,"nav","pause-actions",null)
d5.setAttribute("aria-label","Pause actions")
c4.bm(g,d5,B.df,"resume")
c4.bm(g,d5,B.dg,"settings")
c4.bm(g,d5,B.dh,"controls")
c4.bm(g,d5,B.di,"save now")
c4.bm(g,d5,B.dj,"help")
c4.bm(g,d5,B.dk,"credits")
c4.bm(g,d5,B.dl,"back")
A.a(c1.appendChild(d5))
c4.smi(new A.w2())
c4.sb6(new A.w3())
c4.smk(new A.w4())
c4.sm4(new A.w5())
c4.smj(new A.w6())
c4.sma(new A.w7())
c4.sm5(new A.w8())
c4.sb1(new A.vK())
$.cm.b=c4
c4=$.T.j().e
c1=$.bb.j()
$.T.j()
$.md.b=new A.pk(c4,c1)
c1=A.a(e0.document)
c4=$.T.j().e
g=$.bb.j()
c5=$.md.j()
c6=A.a(c1.createElement("div"))
c5=new A.pt(c4,g,c5,c1,c6)
c5.aV(c1)
c6.setAttribute("aria-label","The Journal")
A.a(c6.appendChild(A.z(c1,"div","journal-title","The Journal")))
d6=A.z(c1,"div","journal-pages",null)
g=A.z(c1,"div","page page-left",null)
c5.y!==$&&A.aW()
c5.y=g
c4=A.z(c1,"div","page page-right",null)
c5.z!==$&&A.aW()
c5.z=c4
A.a(d6.appendChild(g))
A.a(d6.appendChild(c4))
A.a(c6.appendChild(d6))
A.a(c6.appendChild(c5.iu()))
d7=A.z(c1,"div","tape-roll",null)
A.a(d7.style).setProperty("width","8rem")
c4=A.z(c1,"div","tape-fill",null)
c5.as!==$&&A.aW()
c5.as=c4
A.a(d7.appendChild(c4))
A.a(c6.appendChild(d7))
d8=A.z(c1,"div","consult",null)
A.a(d8.appendChild(A.z(c1,"div","consult-label","Cite an entry")))
c4=A.z(c1,"div","entry-picker",null)
c5.at!==$&&A.aW()
c5.at=c4
g=A.z(c1,"div","consult-result",null)
c5.ax!==$&&A.aW()
c5.ax=g
A.a(d8.appendChild(c4))
A.a(d8.appendChild(g))
A.a(c6.appendChild(d8))
d9=A.G(c1.documentElement)
if(t.m.b(d9)){A.a(d9.style).setProperty("--shake-max-deg","3deg")
A.a(d9.style).setProperty("--shake-max-px","2px")}$.j2.b=c5
$.j2.j().sb1(new A.vL())
g=A.a(e0.document)
c1=A.z(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.a(c1.style).setProperty("transition-duration","0.3s")
A.a(A.G(g.body).appendChild(c1))
$.zy.b=new A.qw(c1)
c1=A.a(e0.document)
g=A.z(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.G(c1.body).appendChild(g))
$.zx.b=new A.nr(g)
g=A.a(e0.document)
c1=A.z(g,"div","ambient-notice",null)
c4=A.z(g,"div","caption-cue",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.a(A.G(g.body).appendChild(c1))
A.a(A.G(g.body).appendChild(c4))
$.bG.b=new A.mO(c1,c4,B.H)
$.zB=!0
c4=A.BW(A.a(e0.document))
c4.sm3(A.AI())
c4.sm2(A.GI())
$.at.b=c4
c4=$.cp()
c4.sm1(new A.vM())
c4.sm6(A.AI())
c4=c.a
b4=A.Dn(c4==null?null:c4.c.h(0,"visitors"))
if($.cG().Q&&b4!=null&&$.aE.j().dU(b4))A.FJ()
g=$.mb.j()
c1=c.a
g.mQ(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.O(b5);g.m();){b6=g.gn()
if(A.aJ(b6))$.vm.l(0,b6)}g=A.Da(A.a(e0.document))
g.sml(new A.vN())
g.sb1(new A.vO())
$.me.b=g
g=A.Cn(A.a(e0.document))
g.sb1(new A.vP())
$.j1.b=g
g=A.BQ(A.a(e0.document))
g.sb1(new A.vQ())
$.mc.b=g
$.j4.b=A.kT(A.a(e0.document),null)
$.j5.b=A.kT(A.a(e0.document),B.X)
$.fc.b=A.kT(A.a(e0.document),B.F)
A.mi($.j4.j(),!1)
A.mi($.j5.j(),!0)
A.mi($.fc.j(),!0)
A.Fp()
A.F3()
$.en.b=A.Cm(A.a(e0.document))
A.EG()
A.Ft()
$.h7.b=A.kT(A.a(e0.document),B.E)
A.mi($.h7.j(),!0)
A.Fq()
$.j0.b=A.kT(A.a(e0.document),B.Y)
A.mi($.j0.j(),!0)
A.Fs()
$.iZ.b=A.BO(A.a(e0.document))
A.EF()
A.Fr()
g=A.C5(A.a(e0.document))
g.sb1(new A.vR())
g.sm7(new A.vS())
$.j_.b=g
g=c.a
b7=A.C7(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.Aa(b7)
A.es("world")
A.Ae()
A.a(e0.window).addEventListener("resize",A.U(new A.vT()))
A.a(e0.document).addEventListener("visibilitychange",A.U(new A.vV()))
A.a(e0.window).addEventListener("keydown",A.U(new A.vW()))
A.a(e0.window).addEventListener("keyup",A.U(new A.vX()))
A.a(e0.window).addEventListener("keydown",A.U(new A.vY()))
A.a(e0.window).addEventListener("click",A.U(new A.vZ()))
$.y.j().addEventListener("mousemove",A.U(new A.w_()))
$.y.j().addEventListener("click",A.U(new A.w0()))
$.y.j().addEventListener("wheel",A.U(new A.w1()))
A.hc()
A.es("raf")
A.f(A.a(e0.window).requestAnimationFrame(A.U(A.AJ())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b8=A.ak(e2)
b9=A.cF(e2)
A.vf(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$mw,r)},
F2(a){var s,r,q,p=$.er
if(!$.at.j().y||p==null)return
s=A.zN(a)
if(s==null)return
r=$.cp()
q=p.fX(s.a,s.b)
r.r=q==null?null:q.b},
F1(a){var s,r=$.er
if(!$.at.j().y||r==null)return!1
s=A.zN(a)
if(s==null)return!1
return $.cp().lD(r.fX(s.a,s.b))},
zN(a){var s=A.a($.y.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aP(A.f(a.clientX)-A.a6(s.left),A.f(a.clientY)-A.a6(s.top))},
F4(){var s=v.G
A.a(s.window).addEventListener("error",A.U(new A.v6()))
A.a(s.window).addEventListener("unhandledrejection",A.U(new A.v7()))},
es(a){if($.x1===a)return
$.x1=a
$.y.j().setAttribute("data-boot-phase",a)},
je(){var s,r,q,p,o,n=null,m=$.fd.j().gfJ(),l=$.y.j(),k=A.ed().gb2().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.i.ab(m.B(),n))
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
p=B.i.ab(A.M(["profile",A.M(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.i.ab(B.jv,n))
l=$.aR
o=l==null?n:l.x
if(o!=null)$.y.j().setAttribute("data-renderer-profile-fallback",o)},
FB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jh())return
s=$.xT()
if(s!=null&&s.length!==0){r=$.y.j()
q=$.Bb()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.wW.j().fO($.T.j().gaa().a)
r=$.y.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.wl()
o=q==null?c:q.e
if(o!=null)$.y.j().setAttribute("data-automation-capture-shutters",o)
$.y.j().setAttribute("data-automation-rain-window-visibility",B.c.aM(A.Ac($.az),3))
r=$.y.j()
q=$.x1
n=$.az
m=$.ev()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.i.ab(A.M(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.M(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cn,"pitch",$.ff,"modal",$.bc!=null,"dialogueOverlay",$.at.j().y,"inputEnabled",$.ad.j().ay,"day",$.T.j().gaa().a,"hour",$.T.j().gaa().b],l,k),c))
j=A.n(l,t.X)
for(r=$.W.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.u)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.M(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.y.j().setAttribute("data-automation-portals",B.i.ab(j,c))
e=$.mg
r=!1
if(e!=null)if($.W.j().e.h(0,"cellar")!=null){r=$.W.j()
q=$.az
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cd("cellar",$.az)
$.y.j().setAttribute("data-audio-transmission-cellar",B.i.ab(A.M(["sourceRoom","cellar","listenerRoom",$.az,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.y.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mr(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c6.j().a!==B.B){A.hf("save unavailable during rupture")
return}try{r=$.wV.j()
q=$.T.j()
p=t.N
o=t.z
s=A.n(p,o)
n=$.az
m=$.ev()
l=$.cn
k=$.ff
j=$.j3.j().d
j=j==null?null:j.a.a
i=$.j3.j().d
J.bf(s,"player",new A.kA(n,m,l,k,j,i==null?null:i.b).B())
n=$.aE.j()
m=A.eV(n.b,p)
l=A.eV(n.c,t.L)
n=n.r
J.bf(s,"visitors",new A.lj(m,l,n==null?null:new A.jo(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.mb.j().b
n=A.H(n,A.o(n).c)
B.a.W(n)
J.bf(s,"ambient",n)
n=$.x_
if(n!=null)J.bf(s,"authoredEvents",A.M(["delivered",n.glb()],p,o))
n=A.H($.vm,A.o($.vm).c)
B.a.W(n)
J.bf(s,"unverifiables",n)
J.bf(s,"inventoryInspections",$.wm().B())
n=$.x6
if(n!=null)J.bf(s,"ending",A.M(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.yk(q.c).B()
k=q.d
r.n6(A.yR(s,A.M(["houseSeed",n,"runSeed",m,"house",l,"time",A.M(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hf(a)}catch(h){A.hf("save failed")}},
Fz(){var s=A.G(A.a(v.G.document).documentElement),r=s==null?null:A.aq(s.getAttribute("data-gameplay-focus-loss")),q=A.bw(new A.F(B.aA,t.rg.a(new A.vb(r)),t.vK),t.x)
switch((q==null?B.aW:q).a){case 0:$.mo=!0
s=$.bd
if(s!=null)s.eb(!0)
break
case 1:$.mo=!0
break
case 2:break}},
hf(a){var s=v.G,r=A.G(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.a(s.document).documentElement)
s=s==null?null:A.aq(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Cg(B.eY,new A.vj(r),t.H)},
vf(a,b){var s,r,q,p
A.es("error")
s=A.v(a)
r=A.xJ(s,"\n"," ")
s=$.x8
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.v(a):A.v(a)+"\n"+b.p(0)
$.y.j().setAttribute("data-boot-error",p)
if($.jh()&&!q)$.y.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
zG(){var s,r
if($.wZ)return
$.wZ=!0
s=$.bd
r=s==null
if(!r)s.cc()
if(!r)s.ek("music")
B.a.l($.d7,"arm")},
hc(){var s=0,r=A.bu(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hc=A.bv(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ai(A.hb(),$async$hc)
case 2:o=null
q=4
s=7
return A.ai(A.b0(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hc)
case 7:n=b
i=A
s=8
return A.ai(A.b0(A.a(n.json()),t.X),$async$hc)
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
l=A.G(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.mc.j().f
l===$&&A.q()
l.textContent=k}s=9
return A.ai(A.oq(A.c([A.v8(o),A.v2(o)],t.iJ),t.H),$async$hc)
case 9:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$hc,r)},
hb(){var s=0,r=A.bu(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hb=A.bv(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.cS[g]
q=6
s=9
return A.ai(A.b0(A.a(A.a(j.window).fetch(o)),i),$async$hb)
case 9:n=a0
s=10
return A.ai(A.b0(A.a(n.text()),h),$async$hb)
case 10:m=a0
l=A.y0(B.i.ar(m,null))
f=$.W.b
if(f===$.W)A.h(A.a5(""))
l.dZ(f)
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
return A.ai(A.ml(),$async$hb)
case 11:s=12
return A.ai(A.mm(),$async$hb)
case 12:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$hb,r)},
mn(){var s=0,r=A.bu(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mn=A.bv(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.cS[f]
p=7
s=10
return A.ai(A.b0(A.a(A.a(i.window).fetch(n)),h),$async$mn)
case 10:m=a0
s=11
return A.ai(A.b0(A.a(m.text()),g),$async$mn)
case 11:l=a0
k=A.y0(B.i.ar(l,null))
k.e_()
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
case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$mn,r)},
ml(){var s=0,r=A.bu(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$ml=A.bv(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iD[c]
p=7
s=10
return A.ai(A.b0(A.a(A.a(g.window).fetch(n)),f),$async$ml)
case 10:m=b1
s=11
return A.ai(A.b0(A.a(m.text()),e),$async$ml)
case 11:l=b1
b=B.i.ar(l,null)
b=h.b(b)?b:A.dD("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dD("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dD("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dD("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aA(a,!0,d):A.dD("assets is not a list")
a4=A.B(a3)
a5=a4.i("I<1,cR>")
a3=A.H(new A.I(a3,a4.i("cR(1)").a(A.GE()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aA(a,!0,d):A.dD("placements is not a list")
a5=A.B(a4)
a6=a5.i("I<1,cv>")
a4=A.H(new A.I(a4,a5.i("cv(1)").a(A.GF()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.p3(a1,a2,a0,a3,a4)
a1=$.W.b
if(a1===$.W)A.h(A.a5(""))
k.dZ(a1)
$.mk=k
a1=$.aR
if(a1!=null)a1.hw(k)
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
case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$ml,r)},
mm(){var s=0,r=A.bu(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mm=A.bv(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.mk
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.ja[a4]
p=7
s=10
return A.ai(A.b0(A.a(A.a(a1.window).fetch(m)),a2),$async$mm)
case 10:l=b5
s=11
return A.ai(A.b0(A.a(l.text()),e),$async$mm)
case 11:k=b5
a5=B.i.ar(k,null)
a5=a0.b(a5)?a5:A.h9("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aA(a6,!0,a3):A.h9("emitters is not a list")
a8=A.B(a7)
a9=a8.i("I<1,cQ>")
a7=A.H(new A.I(a7,a8.i("cQ(1)").a(A.GT()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.h9("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h9("sourceRef is not a string")
j=new A.pa(a8,a9,a7)
a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
j.n1(a7,b2)
$.zY=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bf(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
a8=A.By(i)
a9=new A.mY(a7,A.aX(B.d7,e,d),a8)
a9.i4(a8,a7,B.d7)
$.mg=a9
a7=$.bd
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
case 5:$.mg=null
$.y.j().setAttribute("data-audio-planner","unavailable")
$.y.j().setAttribute("data-house-soundscape","unavailable")
$.y.j().setAttribute("data-house-soundscape-error",A.v(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.v(n))
case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$mm,r)},
x4(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.aU(s,A.B(s).i("aU<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.p(q))}},
v2(a){var s=0,r=A.bu(t.H),q,p,o,n,m,l
var $async$v2=A.bv(function(b,c){if(b===1)return A.bq(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.x4(A.G(n?null:a.sfx),m,"")
A.x4(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.p(p))
l=$
s=2
return A.ai(A.n4(m,$.W.j()),$async$v2)
case 2:o=l.bd=c
o.ch=$.mg
o.by()
A.Fu()
A.Ag(o)
A.wX()
A.Ah()
if($.wZ){o.cc()
o.ek("music")}return A.br(null,r)}})
return A.bs($async$v2,r)},
xu(a,b){var s
A.At(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
FG(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zC(a,b){var s
if(a!=="brightness")return
s=A.G(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.v(B.c.D(b,0.6,1.4))+")")},
ud(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.mf()},
Ah(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.d9().a.ce(o)),k=A.Q($.d9().a.ce(n)),j=A.Q($.d9().a.ce(m))
for(s=[$.j4.j(),$.j5.j(),$.fc.j(),$.h7.j(),$.j0.j()],r=0;r<5;++r)s[r].ea(o,l)
A.zC(o,l)
for(s=[$.j4.j(),$.j5.j(),$.fc.j(),$.h7.j(),$.j0.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.ud(n,k)
A.ud(m,j)},
xt(a,b){var s
A.At(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
FD(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
Ag(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.iT[s]
q=$.d9().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.h(A.j("setting missing from profile: "+r)):q))}p=A.Q($.d9().a.ce("muted"))
o=A.Q($.d9().a.ce("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bl(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cZ(o)
for(q=[$.j4.j(),$.j5.j(),$.fc.j(),$.h7.j()],n=j.$ti.i("cx<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cx(j,j.r,j.e,n);m.m();){k=m.d
l.ea(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zE(){var s=$.bd
if(s!=null)A.Ag(s)
A.Ah()},
Fu(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.i.ar(k,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.fs)
q=A.yT(r.h(0,"requested"))
$.Ao=A.wG(A.yT(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.FD(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.FG(p))}}$.Ao=A.D9(o,r)
A.vc()},
vc(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.i.ab($.d9().B(),null))}catch(s){}},
At(a,b){var s,r,q,p,o,n,m
switch(A.ru(a).d.a){case 0:r=A.eO(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d9()
q=s
A.ru(a).cU(q)
p=t.N
o=t.K
n=A.fH(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dt(n,1)
n=s
A.ru(a).cU(n)
o=A.fH(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dt(o,1)
A.vc()}catch(m){if(!(A.ak(m) instanceof A.D))throw m}},
v8(a){var s=0,r=A.bu(t.H),q,p
var $async$v8=A.bv(function(b,c){if(b===1)return A.bq(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.n(q,q)
A.x4(A.G(a==null?null:a.tex),p,"")
q=$.aR
q=q==null?null:q.cK(p)
s=2
return A.ai(A.oq(A.c([q==null?A.ye(t.H):q],t.iJ),t.H),$async$v8)
case 2:return A.br(null,r)}})
return A.bs($async$v8,r)},
Ae(){var s,r,q,p=v.G,o=A.f(A.a(p.window).innerWidth),n=A.f(A.a(p.window).innerHeight)
p=$.y.j()
s=o>0?o:800
p.width=s
s=$.y.j()
p=n>0?n:600
s.height=p
p=$.er
if(p!=null)p.cT(A.f($.y.j().width),A.f($.y.j().height))
p=$.fd.j()
s=A.f($.y.j().width)
r=A.f($.y.j().height)
if(p.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
if(s<=0||r<=0)A.h(A.w("pixeldart surface size must be positive",null))
p.b.cT(s,r)
p=$.aR
q=p==null?null:""+p.b+"x"+p.c
if(q!=null)$.y.j().setAttribute("data-renderer-surface",q)},
F0(){var s,r,q=$.bc
if(q!=null){s=$.ad.j()
if(!s.CW.bh("pause",s.f)){s=$.ad.j()
s=s.CW.bh("secondary",s.f)}else s=!0
if(s){A.EI(q)
return}if($.ad.j().f.a4(0,"GamepadDpadUp")){A.A3(q,-1)
return}if($.ad.j().f.a4(0,"GamepadDpadDown")){A.A3(q,1)
return}s=$.ad.j()
if(s.CW.bh("interact",s.f)){r=A.G(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pq(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.bh("pause",s.f)){A.jc($.cm.j())
return}if($.at.j().y)return
s=$.ad.j()
if(s.CW.bh("journal",s.f))A.jf($.j2.j())
else{s=$.ad.j()
if(s.CW.bh("sleep",s.f))A.jf($.me.j())}},
EI(a){if(a===$.cm.j()){a.a7()
return}if(a===$.h8.j()||a instanceof A.fU||a instanceof A.hH||a instanceof A.hw){A.dG(a)
return}a.a7()},
A3(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.a(v.G.document).activeElement)
o=B.a.br(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
FC(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.zX){$.xf=s
$.zX=!0}e=s
d=$.xf
if(typeof e!=="number")return e.ao()
r=(e-d)/1000
$.xf=s
e=r
if(typeof e!=="number")return e.e6()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.hs()
if(e>0.25)r=0.25
A.G5(r)
$.ad.j().mq()
e=$.y.j()
d=$.ad.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ad.j().z
if(q!=null)$.y.j().setAttribute("data-controller-id",q)
else $.y.j().removeAttribute("data-controller-id")
A.F0()
if(!$.mo&&$.bc==null){e=$.ep
d=r
if(typeof d!=="number")return A.vC(d)
d=$.ep=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e6()
c=c<10}else c=!1
if(!c)break
$.xl=$.ev()
if(!$.xS()){d=$.T.b
if(d===$.T)A.h(A.a5(""))
d.k5(0.008333333333333333*($.cG().Q?1:20))
d=$.Bf()
c=$.T.b
if(c===$.T)A.h(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.h(A.a5(""))
d=d.bV(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){o=d[a]
B.a.l($.d7,"clock:"+o.a)}d=$.Bg()
c=$.T.b
if(c===$.T)A.h(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.h(A.a5(""))
d=d.bV(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){n=d[a]
B.a.l($.d7,"service:"+n.a+":"+n.b)}}A.G8()
A.G4()
d=$.aE.b
if(d===$.aE)A.h(A.a5(""))
c=$.T.b
if(c===$.T)A.h(A.a5(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.aA(d,!1,e)
a0.$flags=3
a1=a0
B.a.N(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.h(A.a5(""))
d.mv(a1)}A.G3()
A.G7()
A.G6()
A.G2(0.008333333333333333)
if($.ub.b===$.ub)A.h(A.a5(""))
d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
m=d.a!==B.B
c=$.W.b
if(c===$.W)A.h(A.a5(""))
d.du(0.008333333333333333,c)
if(m){d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
d=d.e}else d=!1
if(d)A.Af(!0)
d=$.ep-0.008333333333333333
$.ep=d
c=p
if(typeof c!=="number")return c.aj()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.xz=A.z3($.Bi(),$.ev(),l)
k=$.bd
if(k!=null){d=k
c=Math.sin($.cn)
b=Math.cos($.cn)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aK(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hy($.az)
for(e=$.d7.length,a=0;a<$.d7.length;$.d7.length===e||(0,A.u)($.d7),++a){j=$.d7[a]
A.EM(k,j)}B.a.N($.d7)
$.y.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.y.j().setAttribute("data-audio-muffle01",B.c.aM(k.glW(),3))
e=$.y.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.y.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.d6.j().h0($.wn(),$.cn,$.ff)
e=$.aR
if(e!=null){d=$.d6.j()
c=d.a
a3=new A.L(c.a,c.b,c.c)
c=d.b
a4=new A.L(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.yA(a3,a4,new A.L(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wA(a5,b,d.a,c)
e.p3=new A.fp(a6,a7,a7.aB(0,a6),a3,a4,c,b,a5)}e=$.aR
if(e!=null)e.hH($.W.j(),$.az)
e=$.aR
if(e!=null)e.hx($.W.j(),$.az,$.wn(),$.bb.j().gem(),$.bb.j().gl8(),$.wW.j().fO($.T.j().gaa().a),A.GO($.az),$.bb.j().b)
if($.A2!==$.c6.j().a){$.A2=$.c6.j().a
$.xo=$.xo+1}e=$.aR
if(e!=null){if($.xS())d=0
else{d=s
if(typeof d!=="number")return d.na()
d/=1000}c=$.xo
b=A.f(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.h(A.aj(d,"timeSeconds",null))
if(b<0)A.h(A.w("frame clock seeds must be non-negative",null))
e.x1=d
e.x2=c
e.xr=b}e=$.aR
if(e!=null){d=$.c6.j()
c=$.xn
b=A.Ac($.az)
a8=d.a
a9=d.gei()
b0=a9>0?B.c.D(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.bC
b3=$.hn()
b4=b3.G("post_exposure")
b5=b3.G("post_bloom")
b6=b3.G("post_vignette")
b7=b3.G("post_film_grain")
b8=b3.G("post_dither")
b9=b3.G("post_depth_of_field")
c0=b3.G("post_color_grade")
c1=b3.G("post_affine_warp")
c2=b3.G("post_vertex_snap")
c3=B.c.aH(b3.G("post_quantization_bits"))
c4=b3.G("post_vhs_chroma")
c5=b3.G("post_vhs_noise")
c6=b3.G("shadow_ao_intensity")
c7=a8===B.a0?0.45:b4
b3=b3.aS("shadow_ssdo_enable")?c6:0
c8=e.RG
c8=B.c.D(c8,0,1)
c9=e.rx
c9=B.c.D(c9,0,1)
if(d>=1)d0=a8===B.aF?b0:1
else d0=0
d0=Math.max(c0,d0)
if(d>=2)d=a8===B.bB?b0:1
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
e.R8=new A.kC(c7,b5,b3,b9,b6,b7,c8,c9,b,b8,d0,d,d1,d2,d3,d4,d5,d6,d7,b2?b0:0,c)}$.fd.j().el(A.yO($.T.j().gha()))
i=$.aR
if(i!=null){h=i.glz()
if(h!=null){$.y.j().setAttribute("data-renderer-frame-stats",h)
e=$.y.j()
d=i.gly()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.es("running")
A.FB()
e=$.ad.j()
e.as=e.Q=0
d=e.c
d.a4(0,"WheelUp")
d.a4(0,"WheelDown")
e.d.N(0)
e.f.N(0)
A.f(A.a(v.G.window).requestAnimationFrame(A.U(A.AJ())))}catch(d8){g=A.ak(d8)
f=A.cF(d8)
A.vf(g,f)}},
EM(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h8("confirm")
$.bG.j().b3("interface confirmation")
break
case"ambient-winnow":a.cM("winnow",0.28)
$.bG.j().b3("wind moving through the house")
break
case"ambient-gate":a.cM("gate",0.22)
$.bG.j().b3("distant gate")
break
case"collapse":a.h8("collapse")
$.bG.j().b3("front door shudders and collapses")
break
case"clock:tick":A.mp(a,p,"tick")
break
case"clock:chime":A.mp(a,p,"chime")
break
case"clock:cuckoo":A.mp(a,p,"cuckoo")
break
case"clock:bell":A.mp(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mp(a,q,s[2])}}}},
mp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zY,g=$.mk
if(h==null||g==null)return
s=h.ln(b)
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
break A}if(q!=null)$.bG.j().b3(q)
q=$.W.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.h(A.j("sound room missing: "+o))
m=n.d.aj(0,s.d.aB(0,p))
l=$.mg
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.j("sound emitter "+s.a+" has no cue for "+c))
a.mp(q,m,s.e,o)
return}q=$.zK
$.zK=q+1
o=A.Bz(B.dZ,r,r+":"+q,m,A.Es(b,c),q,o)
q=$.az
q=A.Bv($.wn(),q)
t.gG.a(B.bl)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.j("audio listener room missing: "+q))
j=l.hg(p,q,B.bl)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.j("audio cue family missing: "+q))
k=J.aG(i)
k=k.h(i,B.d.S(A.FV(q,o.f),k.gt(i)))
o=o.e
A.ag(j.a,t.N)
a.h9(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Es(a,b){var s,r,q,p=$.T.j().b
for(s=new A.de(a+":"+b),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AF(p,q==null?r.a(q):q)}return p},
G5(a){var s=$.x8
if(s==null)return
s.textContent=""+B.c.aH(a>0?1/a:0)+" fps"},
G2(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="interact"
if($.Ak||$.bc!=null){$.my().a=new A.k(0,0,0)
return}s=$.ad.j()
r=s.cq("moveLeft")?-1:0
if(s.cq("moveRight"))++r
q=s.cq("moveForward")?1:0
if(s.cq("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).aj(0,s)
o=p.gt(0)>1?p.gaw():p
$.ad.j().d1(b1)
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
f=new A.k(i*Math.cos($.cn)+j*Math.sin($.cn),0,-i*Math.sin($.cn)+j*Math.cos($.cn)).gaw().aB(0,2)
j=$.my()
if(!isFinite(b1)||b1<0)A.h(A.aj(b1,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.aj(e,"rate","must be finite and positive"))
s=Math.exp(-e*b1)
l=j.a
s=l.aj(0,f.ao(0,l).aB(0,1-s))
j.a=s
d=$.j3.j().lX($.W.j(),$.az,$.ev(),s.aB(0,b1))
$.xr=d.a
if($.c6.j().a!==B.bD&&$.c6.j().a!==B.a0)$.az=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.Bh()
$.xs=s.hT($.xs,$.ev().b,b1)
b=s.k6(b1,c)
s=$.ev()
l=$.xs
$.d6.j().h0(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cn,$.ff)
s=$.T.j().z
a=new A.ql(s)
s=$.d6.j()
l=$.W.j()
a0=A.GN(a,s,$.az,l,$.mk)
l=a0.c
$.zy.j().hJ(l)
a1=A.G(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=a9
a3=a9
a4=a9
switch(s.a){case 0:A.AP($.d6.j(),$.W.j(),$.az)
break
case 1:a2=A.AQ($.d6.j(),$.W.j(),$.az)
break
case 2:a3=A.AR($.d6.j(),$.W.j(),$.az)
break
case 3:l=$.d6.j()
k=$.W.j()
j=$.mk
a4=A.AO(l,$.az,k,j)
break
case 4:case 5:break}$.zx.j().mZ($.fk().e4($.T.j().gaa().a,"status"),$.az==="living-room")
l=$.ad.j()
k=l.CW
if(k.bh(b0,l.d)||k.bh(b0,l.f)){l=$.T.j().gaa()
k=a2==null
j=k?a9:a2.a
i=B.a.a8($.aE.j().fw(21),$.aE.j().glO())
if(l.a===21&&j==="front-door"&&i){s=$.c6.j()
$.W.j()
s.hX(B.eA,A.ag(s.c,t.N))
B.a.l($.d7,"collapse")
A.hf("the front door opens on itself")}else if(!k&&!a2.z&&!a2.ay){a2.ax=!a2.ax
s=$.bG.j()
s.b3(a2.ax?"door opens":"door closes")
s=$.aR
if(s!=null)s.cR($.W.j(),a2.b)
s=$.aR
if(s!=null)s.dP($.W.j(),a2.a)
s=$.bd
if(s!=null)s.by()}else if(a3!=null)if(a3.w){s=$.T.j()
if(s.f.eh(1)){a3.w=!1
$.bG.j().b3("shutter closes")}}else{a3.w=!0
$.bG.j().b3("shutter opens")}else if(s===B.ck){a5=a.e3()
s=A.B(a5)
l=t.E4
a6=A.bw(new A.F(a5,s.i("l(1)").a(new A.vn(a0)),s.i("F<1>")),l)
if(a6==null)a6=A.bw(a5,l)
if(a6!=null)$.bG.j().bM("noticed",a6.d)}else if(a4!=null){s=$.wm()
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
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a8=A.Fw(a7)
s=$.bG.j()
s.bM("noticed",a8==null?"you inspect "+a7:a8)}}$.ub.j()
A.FI(b1,a0)},
FI(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.er
if(b9==null)return
s=A.a($.y.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cp()
p.mY(c0)
o=$.Be()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hm(n,m,$.at.j().y)
o=$.hn()
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
c=$.T.j().gaa()
b=$.bb.j().b
a=$.cG()
a0=a.y===B.cq
a1=h==null?null:h.a
if(a1==null)a1=$.az
a=a.z?$.fk().e4($.T.j().gaa().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.N(a3)
a4=A.a6(A.a(v.G.window).devicePixelRatio)
a5=B.c.ad(r*a4)
a6=B.c.ad(q*a4)
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
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aK(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.li(n,q,r)}a2.lh(q,r,new A.qa(j,i,g,f,e,d,p))
b0=r-80-24
a2.aY("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aO(b*60),0,1439)
b2=B.d.a6(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.cL(B.d.p(b4),2,"0")+":"+B.b.cL(B.d.p(b3),2,"0")+b5,b0,42)
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
a7.restore()}a2.lg(l,q,r)
a2.lj(q,r,o)
a7.restore();++b9.b
p=$.y.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ag(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
Fw(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("K<1,2>"),m=A.H(new A.K(o,n),n.i("m.E"))
B.a.V(m,new A.v9())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fk().at
n===$&&A.q()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
G8(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cG().Q)return
if($.at.j().y||$.bc!=null||$.aE.j().r!=null)return
s=$.T.j().gaa()
for(r=$.aE.j().fw(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aE.b
if(m===$.aE)A.h(A.a5(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aE.b
if(r===$.aE)A.h(A.a5(""))
l=r.bW(n)
if(!(l instanceof A.lf))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.yq(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.my().a=new A.k(0,0,0)
r=$.at.b
if(r===$.at)A.h(A.a5(""))
q=n.a
r.ec(q,k)
$.cp().bt(!0,B.b5,q,k)
A.xj()
A.Ar(n)
return}},
G4(){var s,r,q,p,o,n,m=$.x_
if(m==null)return
s=$.T.j().gaa()
for(r=m.bV(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
n=$.T.b
if(n===$.T)A.h(A.a5(""))
if(!n.k9(o))continue
n=$.y.b
if(n===$.y)A.h(A.a5(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
FJ(){var s,r,q=$.aE.j().r,p=q==null,o=p?null:q.gbi()
if(p||o==null)return
p=$.at.j()
s=q.a
r=s.a
p.ec(r,o)
$.cp().bt(!0,B.b5,r,o)
A.xj()
A.Ar(s)
if(q.d!==B.a5)A.xk()
A.hf("restored visitor")},
Ar(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().lA("stranger-17-eileen-case")
r=$.fk().x
r===$&&A.q()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.bw(r,t.N)
if(s==null||p==null)return
$.bG.j().bM("inside the case",p+" \u201c"+s.d+"\u201d")},
G3(){var s,r,q,p,o,n
if(!$.cG().Q)return
s=$.T.j().gaa()
r=$.mb.j().ll(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.mb.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bG.j().bM(o,q.e)
n=A.Gd(p)
if(n!=null)B.a.l($.d7,"ambient-"+n)},
G7(){var s,r,q,p,o=$.T.j().gaa()
if(o.b<20)return
s=o.a
if(!$.vm.l(0,s))return
r=$.fk().f
r===$&&A.q()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.GK(r,$.T.j().b,s)
if(p!=null)$.bG.j().bM("noticed",p)},
Af(a){var s,r,q,p,o
if($.x6!=null)return
s=$.T.j().gaa()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("al<2>")
o=A.C6(new A.o7(s.a,1-r,new A.F(new A.al(q,p),p.i("l(m.E)").a(new A.vg()),p.i("F<m.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.Aa(o)
A.mr("ending recorded")},
Aa(a){var s,r,q
$.x6=a
$.Ak=!0
$.my().a=new A.k(0,0,0)
A.jc($.j_.j())
s=a.a
r=$.fk().w
r===$&&A.q()
q=r.h(0,s.b)
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
r=A.H(r,t.N)
B.a.M(r,A.CH($.T.j().z,s))
$.j_.j().hM(a,r)},
EA(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cd
break A}if("through-door"===a){s=B.ce
break A}if("letterbox"===a){s=B.cf
break A}s=B.ab
break A}r=$.aE.j().kt(s)
if(s===B.aw){q=$.W.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aR
if(p!=null)p.cR($.W.j(),q.b)
p=$.aR
if(p!=null)p.dP($.W.j(),q.a)
p=$.bd
if(p!=null)p.by()}}if(!(r instanceof A.ld)||s===B.ab){A.uG()
return}if(r.a.gbi()==null){A.x3()
A.uG()
return}A.xk()},
EH(){var s=$.aE.j().k7()
if(!(s instanceof A.ip)||s.b){A.x3()
A.uG()
return}if(s.a.gbi()==null){A.x3()
A.uG()
return}A.xk()},
xk(){var s,r,q,p,o,n,m,l,k,j=$.aE.j().r,i=j==null,h=i?null:j.gbi()
if(i||h==null)return
s=$.aE.j().gc_()
if(s==null){$.at.j().hL(h)
$.cp().bt(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.at.j().ed(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.at.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aP(k.a,k.b))}m.hN(l,r)
o=$.cp()
m=j.a.a
o.bt(!0,i?q:B.m,m,h)
if(!i){i=A.B(p)
k=A.bw(new A.F(p,i.i("l(1)").a(new A.vd(r)),i.i("F<1>")),t.Y)
if(k!=null){i=$.at.j()
q=k.c
i.ee(h,q)
o.bt(!0,B.m,m,h+"\n\n"+q)}}}A.Aq()
A.xj()},
xj(){var s,r=$.aE.j().r,q=r==null,p=q?null:r.gbi(),o=$.bd
if(q||p==null||o==null)return
q=r.a
s="vo-"+q.a+"-day"+B.b.cL(B.d.p(q.b),2,"0")+"-"+r.b.b+"-"+(r.f+1)
if($.xe===s)return
$.xe=s
o.cM(s,1)},
EB(a){var s,r,q,p,o,n=$.aE.j().ku(a)
if(!(n instanceof A.le))return
s=n.c
if(!$.T.j().ka(n.b,s))return
r=s.c
s=$.at.j()
q=n.a
p=q.gbi()
s.ee(p==null?"":p,r)
o=q.gbi()
if(o==null)o=""
$.cp().bt(!0,B.m,q.a.a,o+"\n\n"+r)
A.Aq()
A.mr("saved after visitor answer")},
uG(){$.at.j().fW()
$.cp().N(0)
$.xe=null
$.ad.j().cS($.y.j())},
Aq(){var s,r,q,p,o=$.at.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.md.j().e5(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aP(p.a,B.a.gZ(p.c).p(0)))}o.hK(n,m)},
EC(a){var s,r,q,p=$.aE.j().kv(a,!0,$.md.j())
if(p==null)return
s=$.md.j().l6(p,B.ik)
r=$.at.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.q()
r.textContent=B.H.bE("",!0,q)},
x3(){var s,r=$.W.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aR
if(s!=null)s.cR($.W.j(),r.b)
s=$.aR
if(s!=null)s.dP($.W.j(),r.a)
s=$.bd
if(s!=null)s.by()}},
G6(){var s,r,q,p,o,n,m,l,k
for(s=$.W.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.a+":",n=p.r,m=0;!1;++m){if(!(m<0))return A.d(n,m)
l=n[m]
if(l.gkj()){l.scJ(!1)
continue}k=$.c6.b
if(k===$.c6)A.h(A.a5(""))
if(B.a.q(k.d,o+m)){l.scJ(!1)
continue}}}},
GO(a){var s,r,q,p,o,n,m,l=$.W.j().e.h(0,a)
if(l==null||$.bb.j().gem()===0)return!1
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
if(!n){if(o===B.ac){n=$.bb.b
if(n===$.bb)A.h(A.a5(""))
n=n.b<9}else n=!1
if(!n)if(o===B.ad){o=$.bb.b
if(o===$.bb)A.h(A.a5(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
Ac(a){var s,r=$.W.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.j5
if(q.length===0)return 0.12
s=A.B(q)
return B.c.D(new A.F(q,s.i("l(1)").a(new A.ve()),s.i("F<1>")).gt(0)/q.length,0.12,1)},
h1:function h1(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.rx=_.RG=0
_.ry=null
_.y2=_.y1=_.xr=_.x2=_.x1=_.to=0
_.au=!1
_.cF=null
_.c3=_.c2=0
_.c5=_.c4=null
_.lu=$
_.fL=null
_.fM=0},
tY:function tY(a){this.a=a},
tZ:function tZ(a){this.a=a},
u_:function u_(a){this.a=a},
tU:function tU(){},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tS:function tS(){},
tT:function tT(){},
tO:function tO(){},
tP:function tP(){},
tQ:function tQ(){},
tR:function tR(){},
lP:function lP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ts:function ts(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
up:function up(){},
uq:function uq(){},
ur:function ur(){},
ux:function ux(){},
uy:function uy(){},
uz:function uz(){},
uA:function uA(){},
uB:function uB(){},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
us:function us(a){this.a=a},
ut:function ut(){},
uu:function uu(){},
uv:function uv(){},
uw:function uw(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
ui:function ui(){},
uj:function uj(){},
uk:function uk(){},
ul:function ul(){},
v5:function v5(a,b){this.a=a
this.b=b},
v3:function v3(a){this.a=a},
v4:function v4(a){this.a=a},
vH:function vH(a,b){this.a=a
this.b=b},
vI:function vI(){},
vJ:function vJ(){},
vU:function vU(){},
w2:function w2(){},
w3:function w3(){},
w4:function w4(){},
w5:function w5(){},
w6:function w6(){},
w7:function w7(){},
w8:function w8(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
vP:function vP(){},
vQ:function vQ(){},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vY:function vY(){},
vZ:function vZ(){},
w_:function w_(){},
w0:function w0(){},
w1:function w1(){},
v6:function v6(){},
v7:function v7(){},
vb:function vb(a){this.a=a},
vj:function vj(a){this.a=a},
vn:function vn(a){this.a=a},
v9:function v9(){},
vg:function vg(){},
vd:function vd(a){this.a=a},
ve:function ve(){},
AT(a){return v.mangledGlobalNames[a]},
yq(a,b,c,d,e,f){var s=a[b]()
return s},
pq(a,b,c){var s=null
return c.a(A.yq(a,b,s,s,s,s))},
wd(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.aj(b.glI(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.a9()
o=q*16
n=o+16
B.t.d_(s,o,n,p.a)
if(l)B.t.d_(r,o,n,p.dL().a)}m=a.a
A.t(m,"uInstanceModels",new A.x(B.dO,s))
if(l)A.t(m,"uInstanceNormalMatrices",new A.x(B.dO,r))
A.t(m,"uUseInstances",B.dP)},
BU(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
BT(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
AF(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Gd(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b_(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
Gs(a){var s,r,q,p,o,n,m,l=B.i.ar(a,null),k=t.f
if(!k.b(l))throw A.b(B.h5)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.jc[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.n(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.b(A.V('text.json section "'+n+'" must be an object',null,null))}return p},
GK(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gba(a)
s=new A.ei()
s.bO((b^274953^c)>>>0)
r=s.aR(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wu.prototype={}
J.kb.prototype={
a5(a,b){return a===b},
gP(a){return A.i5(a)},
p(a){return"Instance of '"+A.kF(a)+"'"},
ga3(a){return A.d8(A.xb(this))}}
J.kd.prototype={
p(a){return String(a)},
gP(a){return a?519018:218159},
ga3(a){return A.d8(t.y)},
$iah:1,
$il:1}
J.hK.prototype={
a5(a,b){return null==b},
p(a){return"null"},
gP(a){return 0},
$iah:1,
$iar:1}
J.hN.prototype={$iae:1}
J.e3.prototype={
gP(a){return 0},
ga3(a){return B.m7},
p(a){return String(a)}}
J.kz.prototype={}
J.eZ.prototype={}
J.e2.prototype={
p(a){var s=a[$.AW()]
if(s==null)s=a[$.wj()]
if(s==null)return this.hZ(a)
return"JavaScript function for "+J.da(s)},
$ieF:1}
J.hM.prototype={
gP(a){return 0},
p(a){return String(a)}}
J.hO.prototype={
gP(a){return 0},
p(a){return String(a)}}
J.r.prototype={
cC(a,b){return new A.aU(a,A.B(a).i("@<1>").K(b).i("aU<1,2>"))},
l(a,b){A.B(a).c.a(b)
a.$flags&1&&A.bS(a,29)
a.push(b)},
my(a,b){var s
a.$flags&1&&A.bS(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yK(b,null))
return a.splice(b,1)[0]},
a4(a,b){var s
a.$flags&1&&A.bS(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
M(a,b){var s
A.B(a).i("m<1>").a(b)
a.$flags&1&&A.bS(a,"addAll",2)
if(Array.isArray(b)){this.io(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gn())},
io(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.au(a))
for(r=0;r<s;++r)a.push(b[r])},
N(a){a.$flags&1&&A.bS(a,"clear","clear")
a.length=0},
ca(a,b,c){var s=A.B(a)
return new A.I(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("I<1,2>"))},
Y(a,b){var s,r=A.e4(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.v(a[s]))
return r.join(b)},
bq(a,b,c,d){var s,r,q
d.a(b)
A.B(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.au(a))}return r},
b_(a,b,c){var s,r,q,p=A.B(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.au(a))}if(c!=null)return c.$0()
throw A.b(A.cw())},
ah(a,b){return this.b_(a,b,null)},
a1(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aT(a,b,c){var s=a.length
if(b>s)throw A.b(A.aY(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aY(c,b,s,"end",null))
if(b===c)return A.c([],A.B(a))
return A.c(a.slice(b,c),A.B(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cw())},
gZ(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cw())},
gba(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cw())
throw A.b(A.yl())},
L(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.au(a))}return!1},
a8(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.au(a))}return!0},
V(a,b){var s,r,q,p,o,n=A.B(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bS(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.F9()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.hs()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hj(b,2))
if(p>0)this.jB(a,p)},
W(a){return this.V(a,null)},
jB(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d0(a,b){var s,r,q,p
a.$flags&2&&A.bS(a,"shuffle")
s=a.length
while(s>1){r=b.aR(s);--s
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
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gX(a){return a.length!==0},
p(a){return A.wt(a,"[","]")},
gu(a){return new J.ew(a,a.length,A.B(a).i("ew<1>"))},
gP(a){return A.i5(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bS(a,"set length","change the length of")
if(b<0)throw A.b(A.aY(b,0,null,"newLength",null))
if(b>a.length)A.B(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.vx(a,b))
return a[b]},
k(a,b,c){A.B(a).c.a(c)
a.$flags&2&&A.bS(a)
if(!(b>=0&&b<a.length))throw A.b(A.vx(a,b))
a[b]=c},
e0(a,b){return new A.dz(a,b.i("dz<0>"))},
dH(a,b){var s
A.B(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.d8(A.B(a))},
$iR:1,
$im:1,
$iE:1}
J.kc.prototype={
mX(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kF(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pr.prototype={}
J.ew.prototype={
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
J.fF.prototype={
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
ad(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bl(""+a+".toInt()"))},
fB(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bl(""+a+".ceil()"))},
aO(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bl(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bl(""+a+".round()"))},
D(a,b,c){if(this.H(b,c)>0)throw A.b(A.xB(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
aM(a,b){var s
if(b>20)throw A.b(A.aY(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc7(a))return"-"+s
return s},
p(a){if(a===0&&1/a<0)return"-0.0"
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
a6(a,b){return(a|0)===a?a/b|0:this.jM(a,b)},
jM(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bl("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
dt(a,b){var s
if(a>0)s=this.ff(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jK(a,b){if(0>b)throw A.b(A.xB(b))
return this.ff(a,b)},
ff(a,b){return b>31?0:a>>>b},
ga3(a){return A.d8(t.o)},
$ib4:1,
$iA:1,
$ibe:1}
J.hJ.prototype={
ga3(a){return A.d8(t.S)},
$iah:1,
$ii:1}
J.ke.prototype={
ga3(a){return A.d8(t.i)},
$iah:1}
J.e1.prototype={
fv(a,b){return new A.m1(b,a,0)},
hV(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hL){s=b.e
s=!(s==null?b.e=b.iH():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iP(a,b)}},
bJ(a,b,c,d){var s=A.kK(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iP(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Bo(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gej()
n=p.gdF()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.I(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aU(a,r))
return m},
ae(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ae(a,b,0)},
I(a,b,c){return a.substring(b,A.kK(b,c,a.length))},
aU(a,b){return this.I(a,b,null)},
bk(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.Cz(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.CA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aB(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ew)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cL(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aB(c,s)+a},
cG(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
br(a,b){return this.cG(a,b,0)},
q(a,b){return A.GU(a,b,0)},
H(a,b){var s
A.p(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gP(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.d8(t.N)},
gt(a){return a.length},
$iah:1,
$ib4:1,
$iqe:1,
$ie:1}
A.ef.prototype={
gu(a){return new A.hr(J.O(this.gb4()),A.o(this).i("hr<1,2>"))},
gt(a){return J.cH(this.gb4())},
gO(a){return J.mA(this.gb4())},
gX(a){return J.Br(this.gb4())},
a1(a,b){return A.o(this).y[1].a(J.mz(this.gb4(),b))},
gU(a){return A.o(this).y[1].a(J.xY(this.gb4()))},
q(a,b){return J.xX(this.gb4(),b)},
p(a){return J.da(this.gb4())}}
A.hr.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia9:1}
A.ez.prototype={
gb4(){return this.a}}
A.ix.prototype={$iR:1}
A.iv.prototype={
h(a,b){return this.$ti.y[1].a(J.aS(this.a,b))},
k(a,b,c){var s=this.$ti
J.bf(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.Bs(this.a,b)},
l(a,b){var s=this.$ti
J.jk(this.a,s.c.a(s.y[1].a(b)))},
$iR:1,
$iE:1}
A.aU.prototype={
cC(a,b){return new A.aU(this.a,this.$ti.i("@<1>").K(b).i("aU<1,2>"))},
gb4(){return this.a}}
A.fG.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.de.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qX.prototype={
gE(){return 0}}
A.R.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.aC(s,s.gt(s),A.o(s).i("aC<a1.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cw())
return this.a1(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a8(r.a1(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.au(r))}return!1},
a8(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a1(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.au(q))}return!0},
L(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a1(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.au(q))}return!1},
Y(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.v(p.a1(0,0))
if(o!==p.gt(p))throw A.b(A.au(p))
for(r=s,q=1;q<o;++q){r=r+b+A.v(p.a1(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.v(p.a1(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}},
cW(a,b){return this.hY(0,A.o(this).i("l(a1.E)").a(b))},
ca(a,b,c){var s=A.o(this)
return new A.I(this,s.K(c).i("1(a1.E)").a(b),s.i("@<a1.E>").K(c).i("I<1,2>"))},
bL(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.H(this,s)
else{s=A.H(this,s)
s.$flags=1
s=s}return s},
bK(a){return this.bL(0,!0)},
b9(a){var s,r=this,q=A.wx(A.o(r).i("a1.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a1(0,s))
return q}}
A.ik.prototype={
giT(){var s=J.cH(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjL(){var s=J.cH(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cH(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a1(a,b){var s=this,r=s.gjL()+b
if(b<0||r>=s.giT())throw A.b(A.ph(b,s.gt(0),s,"index"))
return J.mz(s.a,r)},
bL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aG(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.yo(0,n):J.yn(0,n)}r=A.e4(s,m.a1(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a1(n,o+q))
if(m.gt(n)<l)throw A.b(A.au(p))}return r},
bK(a){return this.bL(0,!0)}}
A.aC.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aG(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a1(q,s);++r.c
return!0},
$ia9:1}
A.cy.prototype={
gu(a){return new A.hT(J.O(this.a),this.b,A.o(this).i("hT<1,2>"))},
gt(a){return J.cH(this.a)},
gO(a){return J.mA(this.a)},
gU(a){return this.b.$1(J.xY(this.a))},
a1(a,b){return this.b.$1(J.mz(this.a,b))}}
A.df.prototype={$iR:1}
A.hT.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.I.prototype={
gt(a){return J.cH(this.a)},
a1(a,b){return this.b.$1(J.mz(this.a,b))}}
A.F.prototype={
gu(a){return new A.S(J.O(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia9:1}
A.hB.prototype={
gu(a){return new A.hC(J.O(this.a),this.b,B.ep,this.$ti.i("hC<1,2>"))}}
A.hC.prototype={
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
A.hz.prototype={
m(){return!1},
gn(){throw A.b(A.cw())},
$ia9:1}
A.dz.prototype={
gu(a){return new A.ir(J.O(this.a),this.$ti.i("ir<1>"))}}
A.ir.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia9:1}
A.av.prototype={
st(a,b){throw A.b(A.bl("Cannot change the length of a fixed-length list"))},
l(a,b){A.c9(a).i("av.E").a(b)
throw A.b(A.bl("Cannot add to a fixed-length list"))}}
A.eb.prototype={
k(a,b,c){A.o(this).i("eb.E").a(c)
throw A.b(A.bl("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.bl("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("eb.E").a(b)
throw A.b(A.bl("Cannot add to an unmodifiable list"))}}
A.fY.prototype={}
A.eS.prototype={
gt(a){return J.cH(this.a)},
a1(a,b){var s=this.a,r=J.aG(s)
return r.a1(s,r.gt(s)-1-b)}}
A.iY.prototype={}
A.aP.prototype={$r:"+(1,2)",$s:1}
A.fb.prototype={$r:"+height,width(1,2)",$s:2}
A.iJ.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.b_.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iK.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.hu.prototype={}
A.ft.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
p(a){return A.wy(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.BM()},
gJ(){return new A.bR(this.lr(),A.o(this).i("bR<N<1,2>>"))},
lr(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga2(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("N<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.N(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bG(a,b,c,d){var s=A.n(c,d)
this.av(0,new A.nI(this,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),s))
return s},
$iZ:1}
A.nI.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
geV(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
av(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geV()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga2(){return new A.f7(this.geV(),this.$ti.i("f7<1>"))},
gaI(){return new A.f7(this.b,this.$ti.i("f7<2>"))}}
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
if(r==null){r=new A.hP(s.$ti.i("hP<1,2>"))
A.Az(s.a,r)
s.$map=r}return r},
R(a){return this.bx().R(a)},
h(a,b){return this.bx().h(0,b)},
av(a,b){this.$ti.i("~(1,2)").a(b)
this.bx().av(0,b)},
ga2(){var s=this.bx()
return new A.ab(s,A.o(s).i("ab<1>"))},
gaI(){var s=this.bx()
return new A.al(s,A.o(s).i("al<2>"))},
gt(a){return this.bx().a}}
A.hv.prototype={
l(a,b){A.o(this).c.a(b)
A.BN()}}
A.aL.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f8(s,s.length,r.$ti.i("f8<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b9(a){return A.fI(this,this.$ti.c)}}
A.qt.prototype={
$0(){return B.c.aO(1000*this.a.now())},
$S:29}
A.ib.prototype={}
A.rW.prototype={
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
A.i0.prototype={
p(a){return"Null check operator used on a null value"}}
A.kf.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l7.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.q7.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hA.prototype={}
A.iM.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icX:1}
A.dU.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.AU(r==null?"unknown":r)+"'"},
ga3(a){var s=A.xD(this)
return A.d8(s==null?A.c9(this):s)},
$ieF:1,
gn9(){return this},
$C:"$1",
$R:1,
$D:null}
A.jB.prototype={$C:"$0",$R:0}
A.jC.prototype={$C:"$2",$R:2}
A.l3.prototype={}
A.l_.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.AU(s)+"'"}}
A.fm.prototype={
a5(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fm))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.mx(this.a)^A.i5(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kF(this.a)+"'")}}
A.kO.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga2(){return new A.ab(this,A.o(this).i("ab<1>"))},
gaI(){return new A.al(this,A.o(this).i("al<2>"))},
gJ(){return new A.K(this,A.o(this).i("K<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lJ(a)},
lJ(a){var s=this.d
if(s==null)return!1
return this.c6(this.eS(s,a),a)>=0},
M(a,b){A.o(this).i("Z<1,2>").a(b).av(0,new A.pA(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lK(b)},
lK(a){var s,r,q=this.d
if(q==null)return null
s=this.eS(q,a)
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ep(s==null?q.b=q.dn():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ep(r==null?q.c=q.dn():r,b,c)}else q.lM(b,c)},
lM(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dn()
r=o.cH(a)
q=s[r]
if(q==null)s[r]=[o.dq(a,b)]
else{p=o.c6(q,a)
if(p>=0)q[p].b=b
else q.push(o.dq(a,b))}},
cP(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a4(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.il(this.c,b)
else return this.lL(b)},
lL(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cH(a)
r=n[s]
q=o.c6(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.en(p)
if(r.length===0)delete n[s]
return p.b},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d2()}},
av(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.au(q))
s=s.c}},
ep(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dq(b,c)
else s.b=c},
il(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.en(s)
delete a[b]
return s.b},
d2(){this.r=this.r+1&1073741823},
dq(a,b){var s=this,r=A.o(s),q=new A.pK(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d2()
return q},
en(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d2()},
cH(a){return J.aB(a)&1073741823},
eS(a,b){return a[this.cH(b)]},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
p(a){return A.wy(this)},
dn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iww:1}
A.pA.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pK.prototype={}
A.ab.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.R(b)}}
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
A.al.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.af(s,s.r,s.e,this.$ti.i("af<1>"))}}
A.af.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia9:1}
A.K.prototype={
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
A.hP.prototype={
cH(a){return A.Gn(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.vD.prototype={
$1(a){return this.a(a)},
$S:15}
A.vE.prototype={
$2(a,b){return this.a(a,b)},
$S:125}
A.vF.prototype={
$1(a){return this.a(A.p(a))},
$S:38}
A.bQ.prototype={
ga3(a){return A.d8(this.eT())},
eT(){return A.Gx(this.$r,this.di())},
p(a){return this.fm(!1)},
fm(a){var s,r,q,p,o,n=this.iX(),m=this.di(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.yH(o):l+A.v(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iX(){var s,r=this.$s
while($.u0.length<=r)B.a.l($.u0,null)
s=$.u0[r]
if(s==null){s=this.iG()
B.a.k($.u0,r,s)}return s},
iG(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ym(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ag(j,k)}}
A.ej.prototype={
di(){return[this.a,this.b]},
a5(a,b){if(b==null)return!1
return b instanceof A.ej&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gP(a){return A.cT(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ek.prototype={
di(){return[this.a,this.b,this.c]},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.ek&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gP(a){var s=this
return A.cT(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.hL.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjb(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.ys(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iH(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fv(a,b){return new A.lq(this,b,0)},
iW(a,b){var s,r=this.gjb()
if(r==null)r=A.fe(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lL(s)},
$iqe:1,
$iCY:1}
A.lL.prototype={
gej(){return this.b.index},
gdF(){var s=this.b
return s.index+s[0].length},
$ifK:1,
$ii6:1}
A.lq.prototype={
gu(a){return new A.lr(this.a,this.b,this.c)}}
A.lr.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iW(l,s)
if(p!=null){m.d=p
o=p.gdF()
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
A.ij.prototype={
gdF(){return this.a+this.c.length},
$ifK:1,
gej(){return this.a}}
A.m1.prototype={
gu(a){return new A.m2(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ij(r,s)
throw A.b(A.cw())}}
A.m2.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ij(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia9:1}
A.tt.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a5(""))
return s}}
A.fM.prototype={
ga3(a){return B.m0},
$iah:1}
A.fL.prototype={$ifL:1}
A.hZ.prototype={
j5(a,b,c,d){var s=A.aY(b,0,c,d,null)
throw A.b(s)},
ex(a,b,c,d){if(b>>>0!==b||b>c)this.j5(a,b,c,d)}}
A.ko.prototype={
ga3(a){return B.m1},
$iah:1}
A.b5.prototype={
gt(a){return a.length},
fc(a,b,c,d,e){var s,r,q=a.length
this.ex(a,b,q,"start")
this.ex(a,c,q,"end")
if(b>c)throw A.b(A.aY(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.j("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibV:1}
A.hX.prototype={
h(a,b){A.dF(b,a,a.length)
return a[b]},
k(a,b,c){A.bp(c)
a.$flags&2&&A.bS(a)
A.dF(b,a,a.length)
a[b]=c},
d_(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bS(a,5)
this.fc(a,b,c,d,0)
return},
$iR:1,
$im:1,
$iE:1}
A.hY.prototype={
k(a,b,c){A.f(c)
a.$flags&2&&A.bS(a)
A.dF(b,a,a.length)
a[b]=c},
hF(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bS(a,5)
this.fc(a,b,c,d,e)
return},
$iR:1,
$im:1,
$iE:1}
A.hW.prototype={
ga3(a){return B.m2},
aT(a,b,c){return new Float32Array(a.subarray(b,A.Ey(b,c,a.length)))},
$iah:1,
$ioh:1}
A.kp.prototype={
ga3(a){return B.m3},
$iah:1}
A.kq.prototype={
ga3(a){return B.m4},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1}
A.kr.prototype={
ga3(a){return B.m5},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1}
A.ks.prototype={
ga3(a){return B.m6},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1}
A.kt.prototype={
ga3(a){return B.m9},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1,
$iwJ:1}
A.ku.prototype={
ga3(a){return B.ma},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1}
A.eM.prototype={
ga3(a){return B.mb},
gt(a){return a.length},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1,
$ieM:1}
A.i_.prototype={
ga3(a){return B.mc},
gt(a){return a.length},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iah:1,
$iil:1}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.cB.prototype={
i(a){return A.iQ(v.typeUniverse,this,a)},
K(a){return A.zo(v.typeUniverse,this,a)}}
A.lE.prototype={}
A.m5.prototype={
p(a){return A.bH(this.a,null)}}
A.lC.prototype={
p(a){return this.a}}
A.h4.prototype={$idw:1}
A.tp.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.to.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:108}
A.tq.prototype={
$0(){this.a.$0()},
$S:14}
A.tr.prototype={
$0(){this.a.$0()},
$S:14}
A.u3.prototype={
ik(a,b){if(self.setTimeout!=null)self.setTimeout(A.hj(new A.u4(this,b),0),a)
else throw A.b(A.bl("`setTimeout()` not found."))}}
A.u4.prototype={
$0(){this.b.$0()},
$S:0}
A.ls.prototype={
dv(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d5(a)
else{s=r.a
if(q.i("bU<1>").b(a))s.ev(a)
else s.co(a)}},
dw(a,b){var s=this.a
if(this.b)s.bn(new A.b2(a,b))
else s.cm(new A.b2(a,b))}}
A.ue.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.uf.prototype={
$2(a,b){this.a.$2(1,new A.hA(a,t.l.a(b)))},
$S:62}
A.vr.prototype={
$2(a,b){this.a(A.f(a),b)},
$S:71}
A.c5.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jE(a,b){var s,r,q
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
o.d=null}q=o.jE(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.zi
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
o.a=A.zi
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.j("sync*"))}return!1},
nc(a){var s,r,q=this
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
p(a){return A.v(this.a)},
$ian:1,
gbN(){return this.b}}
A.op.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eD(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cF(p)
l=r
o=q
n=A.xc(l,o)
l=new A.b2(l,o)
m.b.bn(l)
return}m.b.eD(s)}},
$S:0}
A.os.prototype={
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
A.or.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bf(r,k.b,a)
if(J.a8(s,0)){q=A.c([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.jk(q,l)}k.c.co(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bn(new A.b2(q,o))}},
$S(){return this.d.i("ar(0)")}}
A.lw.prototype={
dw(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.cm(A.F8(a,b))},
fC(a){return this.dw(a,null)}}
A.it.prototype={
dv(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.d5(r.i("1/").a(a))}}
A.dA.prototype={
lV(a){if((this.c&15)!==6)return!0
return this.b.b.dW(t.bl.a(this.d),a.a,t.y,t.K)},
lB(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mT(q,m,a.b,o,n,t.l)
else p=l.dW(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
dX(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ao
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.aj(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.Ad(b,s)}r=new A.as(s,c.i("as<0>"))
this.cl(new A.dA(r,3,a,b,q.i("@<1>").K(c).i("dA<1,2>")))
return r},
fk(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.as($.ao,c.i("as<0>"))
this.cl(new A.dA(s,19,a,b,r.i("@<1>").K(c).i("dA<1,2>")))
return s},
jH(a){this.a=this.a&1|16
this.c=a},
cn(a){this.a=a.a&30|this.a&1
this.c=a.c},
cl(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cl(a)
return}r.cn(s)}A.mq(null,null,r.b,t.O.a(new A.tw(r,a)))}},
f3(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f3(a)
return}m.cn(n)}l.a=m.cv(a)
A.mq(null,null,m.b,t.O.a(new A.tB(l,m)))}},
bT(){var s=t.F.a(this.c)
this.c=null
return this.cv(s)},
cv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eD(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bU<1>").b(a))A.tz(a,r,!0)
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
iF(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bT()
q.cn(a)
A.f5(q,r)},
bn(a){var s=this.bT()
this.jH(a)
A.f5(this,s)},
d5(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bU<1>").b(a)){this.ev(a)
return}this.iq(a)},
iq(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mq(null,null,s.b,t.O.a(new A.ty(s,a)))},
ev(a){A.tz(this.$ti.i("bU<1>").a(a),this,!1)
return},
cm(a){this.a^=2
A.mq(null,null,this.b,t.O.a(new A.tx(this,a)))},
$ibU:1}
A.tw.prototype={
$0(){A.f5(this.a,this.b)},
$S:0}
A.tB.prototype={
$0(){A.f5(this.b,this.a.a)},
$S:0}
A.tA.prototype={
$0(){A.tz(this.a.a,this.b,!0)},
$S:0}
A.ty.prototype={
$0(){this.a.co(this.b)},
$S:0}
A.tx.prototype={
$0(){this.a.bn(this.b)},
$S:0}
A.tE.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mS(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cF(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mR(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.dX(new A.tF(l,m),new A.tG(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tF.prototype={
$1(a){this.a.iF(this.b)},
$S:22}
A.tG.prototype={
$2(a,b){A.fe(a)
t.l.a(b)
this.a.bn(new A.b2(a,b))},
$S:73}
A.tD.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dW(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cF(l)
q=s
p=r
if(p==null)p=A.mR(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.tC.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lV(s)&&p.a.e!=null){p.c=p.a.lB(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cF(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mR(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lt.prototype={}
A.m0.prototype={}
A.iX.prototype={$izc:1}
A.lU.prototype={
mU(a){var s,r,q
t.O.a(a)
try{if(B.x===$.ao){a.$0()
return}A.Ai(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cF(q)
A.xp(A.fe(s),t.l.a(r))}},
fA(a){return new A.u1(this,t.O.a(a))},
mS(a,b){b.i("0()").a(a)
if($.ao===B.x)return a.$0()
return A.Ai(null,null,this,a,b)},
dW(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ao===B.x)return a.$1(b)
return A.FN(null,null,this,a,b,c,d)},
mT(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ao===B.x)return a.$2(b,c)
return A.FM(null,null,this,a,b,c,d,e,f)},
hc(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.u1.prototype={
$0(){return this.a.mU(this.b)},
$S:0}
A.vh.prototype={
$0(){A.Cb(this.a,this.b)},
$S:0}
A.iy.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga2(){return new A.f6(this,this.$ti.i("f6<1>"))},
gaI(){var s=this.$ti
return A.kk(new A.f6(this,s.i("f6<1>")),new A.tI(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iL(a)},
iL(a){var s=this.d
if(s==null)return!1
return this.bo(this.eC(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ze(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ze(q,b)
return r}else return this.j_(b)},
j_(a){var s,r,q=this.d
if(q==null)return null
s=this.eC(q,a)
r=this.bo(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eA(s==null?m.b=A.wN():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eA(r==null?m.c=A.wN():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wN()
p=A.mx(b)&1073741823
o=q[p]
if(o==null){A.wO(q,p,[b,c]);++m.a
m.e=null}else{n=m.bo(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
av(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eB()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.au(m))}},
eB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e4(i.a,null,!1,t.z)
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
eA(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wO(a,b,c)},
eC(a,b){return a[A.mx(b)&1073741823]}}
A.tI.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iA.prototype={
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
return new A.iz(s,s.eB(),this.$ti.i("iz<1>"))},
q(a,b){return this.a.R(b)}}
A.iz.prototype={
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
f0(){return new A.ck(A.o(this).i("ck<1>"))},
gu(a){var s=this,r=new A.f9(s,s.r,A.o(s).i("f9<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iK(b)},
iK(a){var s=this.d
if(s==null)return!1
return this.bo(s[this.d9(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.j("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ez(s==null?q.b=A.wP():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ez(r==null?q.c=A.wP():r,b)}else return q.im(b)},
im(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wP()
r=p.d9(a)
q=s[r]
if(q==null)s[r]=[p.d8(a)]
else{if(p.bo(q,a)>=0)return!1
q.push(p.d8(a))}return!0},
a4(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f4(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f4(s.c,b)
else return s.jA(b)},
jA(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d9(a)
r=n[s]
q=o.bo(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fo(p)
return!0},
iY(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.au(n))
if(!0===o)n.a4(0,r)}},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dm()}},
ez(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d8(b)
return!0},
f4(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fo(s)
delete a[b]
return!0},
dm(){this.r=this.r+1&1073741823},
d8(a){var s,r=this,q=new A.lK(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dm()
return q},
fo(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dm()},
d9(a){return J.aB(a)&1073741823},
bo(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$iyy:1}
A.lK.prototype={}
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
A.pL.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:98}
A.Y.prototype={
gu(a){return new A.aC(a,this.gt(a),A.c9(a).i("aC<Y.E>"))},
a1(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gX(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cw())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a8(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.au(a))}return!1},
a8(a,b){var s,r
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
s=A.wH("",a,b)
return s.charCodeAt(0)==0?s:s},
e0(a,b){return new A.dz(a,b.i("dz<0>"))},
ca(a,b,c){var s=A.c9(a)
return new A.I(a,s.K(c).i("1(Y.E)").a(b),s.i("@<Y.E>").K(c).i("I<1,2>"))},
l(a,b){var s
A.c9(a).i("Y.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cC(a,b){return new A.aU(a,A.c9(a).i("@<Y.E>").K(b).i("aU<1,2>"))},
lv(a,b,c,d){var s
A.c9(a).i("Y.E?").a(d)
A.kK(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.wt(a,"[","]")},
$iR:1,
$im:1,
$iE:1}
A.a7.prototype={
av(a,b){var s,r,q,p=A.o(this)
p.i("~(a7.K,a7.V)").a(b)
for(s=this.ga2(),s=s.gu(s),p=p.i("a7.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga2().ca(0,new A.pN(this),A.o(this).i("N<a7.K,a7.V>"))},
bG(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("N<1,2>(a7.K,a7.V)").a(b)
s=A.n(c,d)
for(r=this.ga2(),r=r.gu(r),n=n.i("a7.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
k_(a){var s,r
for(s=J.O(A.o(this).i("m<N<a7.K,a7.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga2().q(0,a)},
gt(a){var s=this.ga2()
return s.gt(s)},
gO(a){var s=this.ga2()
return s.gO(s)},
gX(a){var s=this.ga2()
return s.gX(s)},
gaI(){return new A.iB(this,A.o(this).i("iB<a7.K,a7.V>"))},
p(a){return A.wy(this)},
$iZ:1}
A.pN.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a7.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a7.V").a(s)
return new A.N(a,s,r.i("N<a7.K,a7.V>"))},
$S(){return A.o(this.a).i("N<a7.K,a7.V>(a7.K)")}}
A.pO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.v(a)
r.a=(r.a+=s)+": "
s=A.v(b)
r.a+=s},
$S:47}
A.iB.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gX(a){var s=this.a
return s.gX(s)},
gU(a){var s=this.a,r=s.ga2()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga2()
return new A.iC(r.gu(r),s,this.$ti.i("iC<1,2>"))}}
A.iC.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.iR.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bl("Cannot modify unmodifiable map"))}}
A.fJ.prototype={
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
ga2(){return this.a.ga2()},
p(a){return this.a.p(0)},
gaI(){return this.a.gaI()},
gJ(){return this.a.gJ()},
bG(a,b,c,d){return this.a.bG(0,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),c,d)},
$iZ:1}
A.ec.prototype={}
A.ds.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
M(a,b){var s
for(s=J.O(A.o(this).i("m<1>").a(b));s.m();)this.l(0,s.gn())},
bp(a){var s,r,q=this.b9(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a4(0,r)}return q},
p(a){return A.wt(this,"{","}")},
a8(a,b){var s
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
a1(a,b){var s,r
A.kJ(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.ph(b,b-r,this,"index"))},
$iR:1,
$im:1,
$ie9:1}
A.iL.prototype={
bp(a){var s,r,q,p=this,o=p.f0()
for(s=A.h_(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
b9(a){var s=this.f0()
s.M(0,this)
return s}}
A.m6.prototype={
l(a,b){this.$ti.c.a(b)
return A.E5()}}
A.fZ.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.h_(s,s.r,A.o(s).c)},
b9(a){return this.a.b9(0)}}
A.h5.prototype={}
A.iS.prototype={}
A.lI.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ju(b):s}},
gt(a){return this.b==null?this.c.a:this.bu().length},
gO(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga2(){if(this.b==null){var s=this.c
return new A.ab(s,A.o(s).i("ab<1>"))}return new A.lJ(this)},
gaI(){var s,r=this
if(r.b==null){s=r.c
return new A.al(s,A.o(s).i("al<2>"))}return A.kk(r.bu(),new A.tK(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.p(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jT().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
av(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.av(0,b)
s=o.bu()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uF(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.au(o))}},
bu(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jT(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bu()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.N(r)
n.a=n.b=null
return n.c=s},
ju(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uF(this.a[a])
return this.b[a]=s}}
A.tK.prototype={
$1(a){return this.a.h(0,A.p(a))},
$S:38}
A.lJ.prototype={
gt(a){return this.a.gt(0)},
a1(a,b){var s=this.a
if(s.b==null)s=s.ga2().a1(0,b)
else{s=s.bu()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga2()
s=s.gu(s)}else{s=s.bu()
s=new J.ew(s,s.length,A.B(s).i("ew<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.u8.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:43}
A.u7.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:43}
A.jv.prototype={
lY(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kK(a4,a5,a2)
s=$.B7()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.vB(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.vB(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bk("")
g=o}else g=o
g.a+=B.b.I(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.V("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.y1(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.V(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bJ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.y1(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.V(a1,a3,a5))
if(b>1)a3=B.b.bJ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nq.prototype={}
A.eA.prototype={}
A.jG.prototype={}
A.jQ.prototype={}
A.hQ.prototype={
p(a){var s=A.jR(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kh.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kg.prototype={
ar(a,b){var s=A.FA(a,this.gla().a)
return s},
ab(a,b){var s=A.DL(a,this.glo().b,null)
return s},
glo(){return B.iq},
gla(){return B.ip}}
A.pC.prototype={}
A.pB.prototype={}
A.tM.prototype={
hk(a){var s,r,q,p,o,n,m=a.length
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
d6(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.kh(a,null))}B.a.l(s,a)},
cX(a){var s,r,q,p,o=this
if(o.hj(a))return
o.d6(a)
try{s=o.b.$1(a)
if(!o.hj(s)){q=A.yu(a,null,o.gf2())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.yu(a,r,o.gf2())
throw A.b(q)}},
hj(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hk(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d6(a)
q.n7(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d6(a)
r=q.n8(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
n7(a){var s,r,q=this.c
q.a+="["
s=J.aG(a)
if(s.gX(a)){this.cX(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cX(s.h(a,r))}}q.a+="]"},
n8(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e4(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.av(0,new A.tN(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hk(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cX(r[n])}p.a+="}"
return!0}}
A.tN.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:47}
A.tL.prototype={
gf2(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lb.prototype={}
A.t0.prototype={
kz(a){return new A.u6(this.a).iM(t.J.a(a),0,null,!0)}}
A.u6.prototype={
iM(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kK(b,c,J.cH(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Em(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.El(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dc(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.En(o)
l.b=0
throw A.b(A.V(m,a,p+l.c))}return n},
dc(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a6(b+c,2)
r=q.dc(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dc(a,s,c,d)}return q.l9(a,b,c,d)},
l9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bk(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.yV(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eB.prototype={
gag(){return A.yF(this)},
gaQ(){return A.yG(this)},
a5(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eB)if(this.a===b.a)s=this.b===b.b
return s},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)},
H(a,b){var s
t.f7.a(b)
s=B.d.H(this.a,b.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
p(a){var s=this,r=A.BR(A.CU(s)),q=A.jI(A.CS(s)),p=A.jI(A.yF(s)),o=A.jI(A.yG(s)),n=A.jI(A.CR(s)),m=A.jI(A.CT(s)),l=A.y8(A.CQ(s)),k=s.b,j=k===0?"":A.y8(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dV.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.dV&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
H(a,b){return B.d.H(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a6(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a6(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.cL(B.d.p(o%1e6),6,"0")},
$ib4:1}
A.lB.prototype={
p(a){return this.v()},
$iC:1}
A.an.prototype={
gbN(){return A.CP(this)}}
A.jq.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jR(s)
return"Assertion failed"}}
A.dw.prototype={}
A.cr.prototype={
gdg(){return"Invalid argument"+(!this.a?"(s)":"")},
gdf(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.v(p),n=s.gdg()+q+o
if(!s.a)return n
return n+s.gdf()+": "+A.jR(s.gdI())},
gdI(){return this.b}}
A.fP.prototype={
gdI(){return A.wY(this.b)},
gdg(){return"RangeError"},
gdf(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.v(q):""
else if(q==null)s=": Not greater than or equal to "+A.v(r)
else if(q>r)s=": Not in inclusive range "+A.v(r)+".."+A.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.v(r)
return s}}
A.k8.prototype={
gdI(){return A.f(this.b)},
gdg(){return"RangeError"},
gdf(){if(A.f(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.im.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.l6.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fW.prototype={
p(a){return"Bad state: "+this.a}}
A.jD.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jR(s)+"."}}
A.kw.prototype={
p(a){return"Out of Memory"},
gbN(){return null},
$ian:1}
A.ih.prototype={
p(a){return"Stack Overflow"},
gbN(){return null},
$ian:1}
A.tu.prototype={
p(a){return"Exception: "+this.a}}
A.D.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
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
k=""}return g+l+B.b.I(e,i,j)+k+"\n"+B.b.aB(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.v(f)+")"):g}}
A.m.prototype={
cC(a,b){return A.BG(this,A.o(this).i("m.E"),b)},
ca(a,b,c){var s=A.o(this)
return A.kk(this,s.K(c).i("1(m.E)").a(b),s.i("m.E"),c)},
cW(a,b){var s=A.o(this)
return new A.F(this,s.i("l(m.E)").a(b),s.i("F<m.E>"))},
e0(a,b){return new A.dz(this,b.i("dz<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a8(s.gn(),b))return!0
return!1},
bq(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,m.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a8(a,b){var s
A.o(this).i("l(m.E)").a(b)
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
A.o(this).i("l(m.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bL(a,b){var s=A.H(this,A.o(this).i("m.E"))
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
gba(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cw())
s=r.gn()
if(r.m())throw A.b(A.yl())
return s},
b_(a,b,c){var s,r=A.o(this)
r.i("l(m.E)").a(b)
r.i("m.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cw())},
ah(a,b){return this.b_(0,b,null)},
a1(a,b){var s,r
A.kJ(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.ph(b,b-r,this,"index"))},
p(a){return A.Cx(this,"(",")")}}
A.N.prototype={
p(a){return"MapEntry("+A.v(this.a)+": "+A.v(this.b)+")"}}
A.ar.prototype={
gP(a){return A.J.prototype.gP.call(this,0)},
p(a){return"null"}}
A.J.prototype={$iJ:1,
a5(a,b){return this===b},
gP(a){return A.i5(this)},
p(a){return"Instance of '"+A.kF(this)+"'"},
ga3(a){return A.xF(this)},
toString(){return this.p(this)}}
A.m3.prototype={
p(a){return""},
$icX:1}
A.rH.prototype={
glm(){var s,r=this.b
if(r==null)r=$.qv.$0()
s=r-this.a
if($.xQ()===1e6)return s
return s*1000}}
A.bk.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iDd:1}
A.t_.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.p(b)
s=B.b.br(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wU(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.I(b,0,s)
q=B.b.aU(b,s+1)
p=this.a
a.k(0,A.wU(r,0,r.length,p,!0),A.wU(q,0,q.length,p,!0))}return a},
$S:128}
A.rZ.prototype={
$2(a,b){throw A.b(A.V("Illegal IPv6 address, "+a,this.a,b))},
$S:158}
A.iT.prototype={
gfh(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gP(r.gfh())
r.y!==$&&A.xK()
r.y=s
q=s}return q},
gb2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.z2(s==null?"":s)
r.z!==$&&A.xK()
q=r.z=new A.ec(s,t.hL)}return q},
ghi(){return this.b},
gdG(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ae(s,"v",1))return B.b.I(s,1,s.length-1)
return s},
gdN(){var s=this.d
return s==null?A.zp(this.a):s},
gdO(){var s=this.f
return s==null?"":s},
gfR(){var s=this.r
return s==null?"":s},
gfT(){return this.c!=null},
gfV(){return this.f!=null},
gfU(){return this.r!=null},
p(a){return this.gfh()},
a5(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge7())if(p.c!=null===b.gfT())if(p.b===b.ghi())if(p.gdG()===b.gdG())if(p.gdN()===b.gdN())if(p.e===b.gh6()){r=p.f
q=r==null
if(!q===b.gfV()){if(q)r=""
if(r===b.gdO()){r=p.r
q=r==null
if(!q===b.gfU()){s=q?"":r
s=s===b.gfR()}}}}return s},
$il9:1,
ge7(){return this.a},
gh6(){return this.e}}
A.rY.prototype={
ghh(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cG(s,"?",m)
q=s.length
if(r>=0){p=A.iU(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lx("data","",n,n,A.iU(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lY.prototype={
gfT(){return this.c>0},
gfV(){return this.f<this.r},
gfU(){return this.r<this.a.length},
ge7(){var s=this.w
return s==null?this.w=this.iI():s},
iI(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.I(r.a,0,q)},
ghi(){var s=this.c,r=this.b+3
return s>r?B.b.I(this.a,r,s-1):""},
gdG(){var s=this.c
return s>0?B.b.I(this.a,s,this.d):""},
gdN(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.AG(B.b.I(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gh6(){return B.b.I(this.a,this.e,this.f)},
gdO(){var s=this.f,r=this.r
return s<r?B.b.I(this.a,s+1,r):""},
gfR(){var s=this.r,r=this.a
return s<r.length?B.b.aU(r,s+1):""},
gb2(){if(this.f>=this.r)return B.d6
return new A.ec(A.z2(this.gdO()),t.hL)},
gP(a){var s=this.x
return s==null?this.x=B.b.gP(this.a):s},
a5(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il9:1}
A.lx.prototype={}
A.q6.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.wa.prototype={
$1(a){return this.a.dv(this.b.i("0/?").a(a))},
$S:19}
A.wb.prototype={
$1(a){if(a==null)return this.a.fC(new A.q6(a===undefined))
return this.a.fC(a)},
$S:19}
A.vw.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.A4(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.aY(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fh(!0,"isUtc",t.y)
return new A.eB(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.b0(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cE(n),p=s.gu(n);p.m();)m.push(A.hk(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.f(a.length)
for(s=J.aG(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:61}
A.lH.prototype={
aR(a){if(a<=0||a>4294967296)throw A.b(A.yJ(u.w+a))
return Math.random()*a>>>0},
aK(){return Math.random()},
$iwE:1}
A.ei.prototype={
bO(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a6(a-s,k)
r=a>>>0
a=B.d.a6(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a6(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a6(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a6(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a6(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a6(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.be()
l.be()
l.be()
l.be()},
be(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a6(o-n+(q-p)+(m-r),4294967296)>>>0},
aR(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.yJ(u.w+a))
s=a-1
if((a&s)>>>0===0){p.be()
return(p.a&s)>>>0}do{p.be()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aK(){var s,r=this
r.be()
s=r.a
r.be()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwE:1}
A.qy.prototype={
C(){var s,r=this
if(B.a.L(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qz()))throw A.b(B.hn)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fw)}}
A.qz.prototype={
$1(a){return A.f(a)<=0},
$S:46}
A.eP.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e8.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bp(B.ly)
if(q.a!==0)throw A.b(A.aj(q,s,"contains unknown pipeline features"))
if(this.a===B.bs&&r.gX(r))throw A.b(A.aj(r,s,"safe profiles cannot install optional features"))}}
A.fw.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kD.prototype={}
A.nE.prototype={
bW(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.j("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.h(A.j("configuration state is not initialized"))
if(p.c!=null)A.h(A.j("a configuration transition is already open"))
a2.C()
n=A.i1(a2)
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
a=new A.nH(m,a2,n,new A.nF(A.eV(g,k),A.eV(f,k),A.eV(e,k),A.eV(d,k),c,b,o.z!==a2.z),B.cb)
p.c=a
s=a
try{r=a1.b.cN(s.c)
q=new A.kD(s,r,B.aT)
a1.c=q
return q}catch(a0){p.ft(s)
throw a0}},
bX(a){var s,r,q,p=this
p.eG(a)
s=p.a
r=a.a
s.eH(r)
q=s.d
if(r.a!==q)A.h(A.j("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eH
s.c=null
p.b.bX(a.b)
a.c=B.eP
p.c=null},
eG(a){if(this.c!==a||a.c!==B.aT)throw A.b(A.j("coordinated transition is not open"))}}
A.fs.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nF.prototype={}
A.nH.prototype={}
A.nG.prototype={
ft(a){this.eH(a)
a.e=B.eI
this.c=null},
eH(a){if(this.c!==a||a.e!==B.cb)throw A.b(A.j("configuration transition is not open"))}}
A.kC.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
for(s=l.r,r=l.w,q=l.x,p=A.M(["exposure",l.a,"bloomStrength",l.b,"ssaoStrength",l.c,"depthOfFieldStrength",l.d,"vignette",l.e,"grain",l.f,"rainIntensity",s,"surfaceWetness",r,"rainWindowVisibility",q,"ditherStrength",l.y,"colorGradeStrength",l.z,"affineWarpStrength",l.Q,"vertexSnapGrid",l.as,"vhsChromaWeight",l.ax,"vhsTrackingWeight",l.ay,"vhsNoiseWeight",l.ch,"vhsHeadSwitchWeight",l.CW,"vhsDropoutWeight",l.cx,"vhsGhostWeight",l.cy],t.N,t.i),p=new A.K(p,A.o(p).i("K<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=o.b
if(!isFinite(m)||m<0)throw A.b(A.w("PostProcessState."+n+" must be >= 0: "+A.v(m),k))}p=l.at
if(p<1||p>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+p,k))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.v(s),k))
if(r>1)throw A.b(A.w("PostProcessState.surfaceWetness must be in [0, 1]: "+A.v(r),k))
if(q>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.v(q),k))}}
A.fp.prototype={}
A.jX.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gan(0)||!k.b.gan(0)||!k.r.gan(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.v(s)+"/"+A.v(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.v(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gan(0)||r.gc8()<1e-12)A.h(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.h(A.w("DirectionalLight.intensity must be >= 0: "+A.v(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.h(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.h(A.w("PointLight.intensity must be >= 0: "+A.v(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.h(A.w("PointLight.radius must be > 0: "+A.v(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.h(A.w("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.h(A.w("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.h(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.ok.prototype={}
A.dr.prototype={
a5(a,b){if(b==null)return!1
return J.fl(b)===A.xF(this)&&b instanceof A.dr&&this.a===b.a&&this.b===b.b},
gP(a){return A.cT(A.xF(this),this.a,this.b,B.f,B.f,B.f)}}
A.bx.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b8.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cz.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kx.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eI.prototype={
v(){return"HandleRejection."+this.b}}
A.k5.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.bW.prototype={
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a5(a,b){if(b==null)return!1
return b instanceof A.bW&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.o1.prototype={}
A.kB.prototype={
gE(){return this.a}}
A.bD.prototype={
gE(){return this.a}}
A.wc.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:67}
A.jp.prototype={
v(){return"AlphaMode."+this.b}}
A.hU.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.e5.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.kl("roughness",l.at)
A.kl("metallic",0)
A.kl("occlusionStrength",1)
A.kl("clearcoatStrength",0)
A.kl("clearcoatRoughness",0.2)
for(s=l.db,r=l.dx,q=[new A.aP("uvScaleU",s),new A.aP("uvScaleV",r),new A.aP("uvOffsetU",0),new A.aP("uvOffsetV",0),new A.aP("tintR",l.d),new A.aP("tintG",l.e),new A.aP("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.v(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d_.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bE.prototype={}
A.t1.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.U[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.t2())
for(p=B.a.gu(B.U),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.t2.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:26}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jV()
r=n.c
if(r!=null){q=s/14|0
for(s=A.CF(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gan(0)&&s.b.gan(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.F(B.U,a2.a(new A.pW()),a3)
if(!a4.gu(0).m())return
s=new A.F(B.U,a2.a(new A.pX()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gba(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gba(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a8(A.c([j,h,g,f,e,d,c],p),new A.pY()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.v(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.v(c),a1))}}}
A.pW.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:26}
A.pX.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:26}
A.pY.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.jJ.prototype={$iD3:1}
A.q8.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.L(0,new A.q9()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.q9.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.fS.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kE.prototype={}
A.kN.prototype={
fY(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.j("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cN(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a==null)throw A.b(A.j("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.j("resource assembly is already open"))
a.C()
return s.b=new A.kE(s.c,a,B.bz)},
bX(a){var s,r=this
if(r.d)A.h(A.j("resource assembler is disposed"))
r.f8(a)
s=r.c
if(a.a!==s)throw A.b(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.l7
r.b=null},
dV(a){if(this.d)A.h(A.j("resource assembler is disposed"))
this.f8(a)
a.c=B.l8
this.b=null},
a0(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f8(a){if(this.b!==a||a.c!==B.bz)throw A.b(A.j("resource assembly is not prepared"))}}
A.fy.prototype={
v(){return"DrawMode."+this.b}}
A.jx.prototype={
v(){return"BlendMode."+this.b}}
A.bA.prototype={}
A.l1.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hs.prototype={
v(){return"ColorEncoding."+this.b}}
A.fx.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i8.prototype={
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
A.aH.prototype={}
A.om.prototype={
h5(a){var s=this.z.h(0,a)
return s==null?B.co:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eL.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cS.prototype={}
A.bX.prototype={}
A.pT.prototype={
cp(a){var s=this.a,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.pU(a)),r.i("F<1>")).gt(0)}}
A.pU.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:79}
A.pR.prototype={
cO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.n(s,t.jt)
q=A.c([],t.r8)
p=A.n(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.u)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.h(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.R(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.n(s,s)
for(k=A.As(k),i=k.$ti,k=new A.c5(k.a(),i.i("c5<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bN(c,d,g))}p.k(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.cO(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("al<2>")
a=A.H(new A.al(r,o),o.i("m.E"))
B.a.V(a,new A.pS())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jD(m,k,s))}return new A.pT(A.ag(o,t.wl))},
jD(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.K(b,A.o(b).i("K<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.CD(new A.al(q,q.$ti.i("al<2>")))
A.aX(q,s,r)
return new A.bX(a,p)}}
A.pS.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:80}
A.km.prototype={
mI(a){return this.a.bB(a)}}
A.pV.prototype={
$3(a,b,c){return new A.cz(A.f(a),A.f(b),A.aq(c))},
$S:85}
A.l8.prototype={}
A.pZ.prototype={
bg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.z8(f,new A.k0(e.byteLength,B.cD,B.hE))
if(f.b!==B.h)A.h(A.j(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d3(f)
A.bn(f,p)
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.U[m]
k=A.Ap(l.a)
if(!o.l(0,k))continue
j=A.EE(n,k,l)
if(f.b!==B.h)A.h(A.j(g))
r.vertexAttribPointer.apply(r,[k,j,A.f(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.h(A.j(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.z8(f,new A.k0(A.yC(i),B.cD,B.cC))
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.Dy(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l8(d,h,p,f,e.length/14|0,!1)},
dT(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.e0(B.az,a))
this.b.bB(a)
return s},
b7(a){var s,r,q=this.c.a4(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b7(a)},
dR(){var s,r,q,p
for(s=this.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bg(p.b))}},
gc9(){return this.b.bF().bq(0,0,new A.q0(),t.S)}}
A.q_.prototype={
$3(a,b,c){return new A.bx(A.f(a),A.f(b),A.aq(c))},
$S:88}
A.q0.prototype={
$2(a,b){var s,r
A.f(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yC(s)
return a+r+s},
$S:92}
A.bN.prototype={}
A.dv.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c0.prototype={}
A.rR.prototype={
cw(a){var s=this.a,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.rS(a)),r.i("F<1>")).gt(0)}}
A.rS.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:103}
A.rP.prototype={
cO(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.h(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.h(A.aj(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("al<2>")
m=A.H(new A.al(s,r),r.i("m.E"))
B.a.V(m,new A.rQ())
r=t.Aj
l=A.a_(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jt(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c0(p,i))}r=l.a
return new A.rR(A.ag(j,t.d),r)},
jt(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.q()
if(s.fj(a,r)===s.d)return B.dL
this.b.k(0,a,!0)
return B.dK}catch(q){if(A.ak(q) instanceof A.k5){s=this.b.h(0,a)===!0?B.dN:B.dM
return s}else throw q}}}
A.rQ.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:107}
A.d5.prototype={}
A.l4.prototype={
aW(a){var s=this.a,r=A.wK(s,B.hJ)
A.wL(s,r,0,a)
return r},
n0(a,b){var s,r,q,p=this,o=p.b,n=o.bB(a),m=A.H(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.dY(a,new A.d5(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wK(p.a,s)
o.k(0,r,q)}A.wL(p.a,q,0,b)},
lx(a){var s,r=this.b,q=r.bB(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.p(0)))
A.z9(this.a,s)
r.dY(a,new A.d5(p,q.b,!0))},
fj(a,b){var s
this.b.bB(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mE(a){var s
if(a==null){s=this.d
s===$&&A.q()
return s}s=this.d
s===$&&A.q()
return this.fj(a,s)},
mM(a){var s=this.e
s===$&&A.q()
return s},
mO(a){var s=this.f
s===$&&A.q()
return s},
mG(a){var s=this.r
s===$&&A.q()
return s},
mK(a){var s=this.w
s===$&&A.q()
return s},
a0(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),q=n.a,p=q.a,o=t.e;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.N(0)
s=n.d
s===$&&A.q()
A.lm(q,s)
s=n.e
s===$&&A.q()
A.lm(q,s)
s=n.f
s===$&&A.q()
A.lm(q,s)
s=n.r
s===$&&A.q()
A.lm(q,s)
s=n.w
s===$&&A.q()
A.lm(q,s)},
dR(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aW($.xP())
i.e=i.aW($.xM())
i.f=i.aW($.xN())
i.r=i.aW($.xL())
i.w=i.aW($.xO())
for(s=i.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a8(o,new A.rV()))continue
l=A.wK(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wL(p,l,k,j)}if(m.c)A.z9(p,l)
q.k(0,n.a,l)}},
gc9(){return this.b.bF().bq(0,0,new A.rU(),t.S)}}
A.rT.prototype={
$3(a,b,c){return new A.b8(A.f(a),A.f(b),A.aq(c))},
$S:110}
A.rV.prototype={
$1(a){return t.Fx.a(a)==null},
$S:113}
A.rU.prototype={
$2(a,b){var s
A.f(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:117}
A.eK.prototype={
glI(){return this.b.length}}
A.jV.prototype={
km(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qC(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].al(s,b)
o=s.kl(a,!1)
if(o.b.length!==0)return new A.jW(o,B.j8)
q=o.a
n=A.B(q)
m=new A.I(q,n.i("e(1)").a(new A.of()),n.i("I<1,e>")).b9(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.ak(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gF().a))throw A.b(A.j('RenderFeature "'+k.gE()+'" created a pass "'+i.gF().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.V(l,new A.og(o))
return new A.jW(o,l)},
bC(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a0()}}
A.of.prototype={
$1(a){return t.A.a(a).a},
$S:121}
A.og.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.dH(s,new A.od(a)),B.a.dH(s,new A.oe(b)))},
$S:124}
A.od.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.oe.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.jW.prototype={}
A.eE.prototype={
v(){return"FrameQueueState."+this.b}}
A.ol.prototype={}
A.oj.prototype={
kh(a){if(a.length===0)throw A.b(A.aj(a,"passId",null))
this.b=a
this.a.cP(a,A.AA())},
hU(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aH(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bw(a,b){var s,r=this.b
if(r==null)throw A.b(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a6(a,3)*b}}
A.h0.prototype={}
A.aw.prototype={
gbI(){var s=this.c,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.qc()),r.i("F<1>"))},
gcf(){var s=this.c,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.qd()),r.i("F<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"},
gE(){return this.a}}
A.qc.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.j||s===B.G},
$S:17}
A.qd.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:17}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bg.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ia.prototype={
v(){return"ResourceFormat."+this.b}}
A.cO.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
h1(){var s=this
return new A.aI(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.aI&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fR.prototype={
v(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.ht.prototype={
gE(){return this.a}}
A.kG.prototype={
az(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.DB(m.a,a.c,r.a(a.d.ga2().bK(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.ie){++m.e
throw q}else throw q}r=a.a
p=new A.ht(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bC(){var s=this.b
this.iQ(new A.al(s,A.o(s).i("al<2>")))
s.N(0)},
iQ(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bj.prototype={
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
A.qA.prototype={}
A.b6.prototype={
ac(){var s=this
return A.yb(B.ec,s.f,B.aq,B.a8,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.qC.prototype={
kl(a,b){var s=this.jU(t.Q.a(a),!1),r=this.a,q=A.B(r)
return new A.qB(A.ag(new A.F(r,q.i("l(1)").a(new A.qH()),q.i("F<1>")),t.A),s)},
jU(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.B(r)
p=q.i("F<1>")
o=A.H(new A.F(r,q.i("l(1)").a(new A.qG()),p),p.i("m.E"))
m.iw(o,a,s)
m.iA(o,s)
m.iC(o,s)
m.iz(o,!1,s)
n=m.iE(o,s)
m.iB(o,n,s)
m.iD(o,s)
m.iy(o,n,s)
m.ix(o,s)
return s},
iw(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.a1.bp(b)
if(p.a!==0)B.a.l(c,new A.bg(B.hU,q.a,"missing capabilities: "+p.Y(0,", ")))}},
iA(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbI(),o=J.O(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bg(B.hP,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
iC(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.B(a),r=s.i("l(1)").a(new A.qF()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbI()
o=A.H(p,p.$ti.i("m.E"))
p=r.gcf()
n=A.H(p,p.$ti.i("m.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bg(B.b_,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gba(o).a
l=B.a.gba(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bg(B.b_,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bg(B.b_,r.a,"resolve source and destination must match format and extent"))}},
iz(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.bg(B.hS,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcf(),n=J.O(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bg(B.hO,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iB(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbI(),p=J.O(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bg(B.cI,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.br(a,m)>s)B.a.l(c,new A.bg(B.cI,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
for(l=q.gcf(),k=J.O(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bg(B.hR,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
iy(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcf().ah(0,new A.qE(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bg(B.hQ,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
ix(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcf(),o=J.O(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.ym(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbI(),p=J.O(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e4(s,!1,!1,p)
s=a.length
i=A.e4(s,!1,!1,p)
h=new A.qD(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bg(B.hT,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qH.prototype={
$1(a){t.A.a(a)
return A.wC()},
$S:10}
A.qG.prototype={
$1(a){t.A.a(a)
return A.wC()},
$S:10}
A.qF.prototype={
$1(a){return t.A.a(a).f},
$S:10}
A.qE.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:17}
A.qD.prototype={
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
r=A.h_(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:46}
A.qB.prototype={}
A.lG.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge2(){return this.c}}
A.i7.prototype={
jX(a){var s,r,q=a.c,p=q.a
if(!p.gan(0))A.h(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.h(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.h(A.w(u.u,null))
s=this.a.bB(a.a)
q=q.a9()
p=s.d.gaq()
r=A.B(p)
return A.b1(new A.I(p,r.i("L(1)").a(q.gaA()),r.i("I<1,L>")))},
gh_(){return new A.bR(this.lR(),t.Br)},
lR(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gh_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bF(),n=o.$ti,o=new A.c5(o.a(),n.i("c5<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a_(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a9()
f=f.gaq()
d=A.B(f)
r=5
return a.b=new A.lG(h,g,A.b1(new A.I(f,d.i("L(1)").a(i.gaA()),d.i("I<1,L>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iD0:1}
A.qI.prototype={
$3(a,b,c){return new A.cu(A.f(a),A.f(b),A.aq(c))},
$S:133}
A.qM.prototype={
gfi(){var s=this.d
return s===$?this.d=new A.rP(this.c,A.n(t.Aj,t.y)):s},
mw(a,b){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
s=this.a
a.C()
r=s.b.aC(a,b)
s.c.k(0,r.a,s.bg(a))
this.f.l(0,r)
return r},
mx(a){if(this.x)A.h(A.j("resource library is disposed"))
this.a.b7(a)
this.f.a4(0,a)},
dQ(a,b,c,d,e,f){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aC(new A.d5(new A.k2(f,d,1,!0,e,B.aY,B.cF,a),A.e4(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a0(){var s,r,q,p,o,n,m,l,k,j,i=this
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
j=o.a4(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b7(k)}r=i.r
q=A.H(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.b7(q[l])
q=i.f
o=A.H(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.b7(o[l])
s.N(0)
r.N(0)
q.N(0)
p.a0()
i.x=!0}}
A.tv.prototype={}
A.m4.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge2(){return this.c}}
A.uW.prototype={
$1(a){var s=this.a.w.a.dT(a),r=s.b!=null,q=r?s.d:s.e
return new A.i9(s.c,r,q,s.f)},
$S:141}
A.uX.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().h2(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().h2(b)
throw A.b(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:148}
A.uV.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uO.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:161}
A.uP.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bd
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.GQ(s,3,q.a.d,r)},
$S:165}
A.uU.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uJ.prototype={
$0(){return this.a.at.a},
$S:167}
A.uL.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uK.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uT.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uH.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uI.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uQ.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uR.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uS.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.q()
return s},
$S:4}
A.uN.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uM.prototype={
$0(){return this.a.at.w},
$S:178}
A.uZ.prototype={
$0(){return this.a},
$S:49}
A.u2.prototype={}
A.lR.prototype={$iD_:1}
A.lD.prototype={$iCd:1}
A.qR.prototype={
gb8(){var s=this.w
return s==null?A.h(A.j("renderer is not initialized")):s},
fZ(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bx)throw A.b(A.j("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.S)throw A.b(A.j("renderer device is context lost"))
m.e=B.l6
try{m.r=s.hb()
r=m.b
q=A.i1(a)
p=r.a
if(p.a!=null)A.h(A.j("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i1(a)
p.d=1
r.b.fY(q)
r=A.CE()
m.w=new A.qM(A.CG(s),r,A.Df(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kN()
p=new A.oJ(s,r)
q=A.i1(a)
o=p.da(q,a)
r.fY(q)
p.c=new A.fN(new A.kE(0,q,B.bz),o,B.ae)
m.x=p
m.y=new A.kG(s,A.n(t.N,t.CH))
m.as=a
A.zQ(m)
m.e=B.by}catch(n){s=m.y
if(s!=null)s.bC()
s=m.x
if(s!=null)s.a0()
s=m.w
if(s!=null)s.a0()
m.w=null
m.e=B.bx
throw n}return A.ye(t.H)},
kf(a,b){var s,r,q,p,o,n,m=this,l=null
m.jx()
m.bQ()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.j("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gan(0))A.h(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gan(0)||q.gc8()<1e-12)A.h(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.h(A.w("CameraView requires 0 < near < far, got "+A.v(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.h(A.w("CameraView.aspect must be finite and > 0: "+A.v(q),l))
if(!r.a.gan(0)||!r.b.gan(0)||!r.c.gan(0))A.h(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.h(A.w("FrameInput.timeSeconds must be finite: "+A.v(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ax)A.h(A.j("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ax
o.c=0
B.a.N(o.a)
s=o
try{r=m.r
if((r==null?A.h(A.j("renderer is not initialized")):r).z)m.b$=m.a.kg()
return s}catch(n){if(o.b!==B.ax)A.h(A.j("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hs
m.eo()
m.ax=m.at=null
throw n}},
lp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.h(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.l0(l,0,A.fh(m.c,"count",t.S),A.B(l).c).bL(0,!1)
m.b=B.hr
q=k
try{p=A.EQ(a1,r,s,q)
o=p.a.hU()
m=o.gJ().cW(0,new A.qS())
l=m.$ti
n=new A.cy(m,l.i("aH(1)").a(new A.qT()),l.i("cy<1,aH>")).bq(0,B.co,new A.qU(),t.pH)
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
return new A.om(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iZ(s.e)
a1.ax=a1.at=null}},
jx(){var s,r,q,p=this
if(p.e!==B.dx)return
if(p.a.b===B.S)throw A.b(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.h(A.j("resource library is disposed"))
s.a.dR()
s.c.dR()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.h(A.j("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.h(A.j("GPU resource adapter is not initialized"))
s.c=new A.fN(q.a,s.da(A.i1(r),r),B.ae)
s=p.y
s.c=null
s.b.N(0)
A.zQ(p)
p.e=B.by},
bQ(){var s=this,r=s.e
if(r!==B.by)throw A.b(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.S){s.iR()
s.e=B.dx
throw A.b(A.j("renderer context lost"))}}}
A.qS.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qT.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qU.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aH(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lO.prototype={}
A.tH.prototype={
iZ(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.h(A.j(u.k))
r=s.fl(o)
if(r.b)A.h(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lO(o))}catch(q){p.dd(o)}},
eo(){var s=this.b$
this.b$=null
if(s!=null)this.dd(s)},
iR(){var s,r,q
this.eo()
s=this.a$
r=J.yp(s.slice(0),A.B(s).c)
B.a.N(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.dd(r[q].b)},
dd(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fl(a).a)}catch(r){}}}
A.lV.prototype={}
A.ig.prototype={
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
A.aO.prototype={}
A.wg.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:53}
A.wh.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.we.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:55}
A.wf.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.nX.prototype={}
A.nW.prototype={}
A.jl.prototype={
gaq(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.L(o,n,p),new A.L(r,n,p),new A.L(o,q,p),new A.L(r,q,p),new A.L(o,n,s),new A.L(r,n,s),new A.L(o,q,s),new A.L(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eN.prototype={}
A.fB.prototype={
v(){return"FrustumTest."+this.b}}
A.on.prototype={
mV(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cp
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ht:B.hu}}
A.oo.prototype={
$4(a,b,c,d){var s=new A.L(a,b,c),r=new A.eN(s,d),q=Math.sqrt(s.gc8())
if(q<1e-9)s=r
else{s=1/q
s=new A.eN(new A.L(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dm.prototype={
aB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dm(h)},
hf(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.L(k,j,i):new A.L(k/h,j/h,i/h)},
dL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.dm(h)},
gan(a){return B.t.a8(this.a,new A.pP())},
p(a){return"Mat4("+A.v(this.a)+")"}}
A.pP.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.kI.prototype={
p(a){var s=this
return"Quat("+A.v(s.a)+", "+A.v(s.b)+", "+A.v(s.c)+", "+A.v(s.d)+")"}}
A.l5.prototype={
C(){var s=this.a
if(!s.gan(0))throw A.b(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yz(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
f=i.length
if(0>=f)return A.d(i,0)
h=i[0]
if(1>=f)return A.d(i,1)
p=i[1]
if(2>=f)return A.d(i,2)
o=i[2]
if(4>=f)return A.d(i,4)
n=i[4]
if(5>=f)return A.d(i,5)
m=i[5]
if(6>=f)return A.d(i,6)
l=i[6]
if(8>=f)return A.d(i,8)
k=i[8]
if(9>=f)return A.d(i,9)
j=i[9]
if(10>=f)return A.d(i,10)
f=this.a
return A.yz(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.L.prototype={
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.L(s*r-q*p,q*o-n*r,n*p-s*o)},
gc8(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc8())},
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaw(){var s=this,r=Math.sqrt(s.gc8())
return r<1e-9?B.al:new A.L(s.a/r,s.b/r,s.c/r)},
a5(a,b){if(b==null)return!1
return b instanceof A.L&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.iu.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hq.prototype={
gE(){return this.f},
al(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.x,B.j),new A.P(this.y,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bj(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d3(s.d),p=t.n,o=s.r===B.dX?new Float32Array(A.a2(A.c([1/s.Q,0],p))):new Float32Array(A.a2(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lu(new A.b6(s.f,A.c([new A.P(s.x,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a0(){},
$iam:1}
A.lu.prototype={
am(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bP(r,a.ai(o.r).b)
A.ba(r,o.a.ac())
A.d2(r,B.Q,1,0,0,0)
A.c4(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Dw(r,0,q.a(p.$0()))
else A.aD(r,0,q.a(p.$0()))
A.t(r,"uSource",B.w)
A.t(r,"uTexelStep",new A.x(B.aj,o.f))
A.bn(r,o.c)
s.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.jy.prototype={
gE(){return"bloomComposite"},
al(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.I,A.c([new A.P(this.f,B.j),new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="bloomComposite",q=s.a.az(new A.bj(r,s.b,s.c,B.y,B.jF,B.jm)),p=A.d3(s.d),o=s.w,n=A.c([new A.P(s.f,B.j),new A.P(s.r,B.j),new A.P(o,B.k)],t.C)
return A.c([new A.lv(new A.b6(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a0(){},
$iam:1}
A.lv.prototype={
am(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bP(r,a.cV(q.f).b)
A.Dx(r,1)
A.ba(r,B.eU)
A.c4(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.t(r,"uBloom",B.w)
A.t(r,"uBloomStrength",new A.x(B.e,p))
A.bn(r,q.c)
s.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.jL.prototype={
gE(){return"depthPrepass"},
al(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hL,A.c([new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="depthPrepass",q=s.a.az(new A.bj(r,s.b,s.c,B.d2,B.d1,B.iP))
return A.c([new A.ly(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a0(){},
$iam:1}
A.ly.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bP(a1,a2.ai("sceneDepth").b)
A.ba(a1,d.a.ac())
A.d2(a1,B.aR,1,0,0,0)
A.c4(a1,d.b.b)
A.t(a1,"uVertexSnapGrid",new A.x(B.e,a0.as))
A.t(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.Q,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gF()
A.t(a1,"uViewProjection",new A.x(B.v,new Float32Array(A.a2(a))))
A.t(a1,"uModel",new A.x(B.v,new Float32Array(A.a2(i.c.a9().a))))
A.wd(b,k,!1)
d.jI(b,j.gF().b,p)
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
jI(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,0))
A.t(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e1(!1):s)},
$iaa:1,
gF(){return this.a}}
A.iw.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hx.prototype={
gE(){return this.f},
al(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.w,B.j),new A.P(this.x,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bj(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d3(s.d),p=t.n,o=s.r===B.dY?new Float32Array(A.a2(A.c([1/s.z,0],p))):new Float32Array(A.a2(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.lz(new A.b6(s.f,A.c([new A.P(s.w,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a0(){},
$iam:1}
A.lz.prototype={
am(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bP(r,a.ai(q.f).b)
A.ba(r,q.a.ac())
A.d2(r,B.Q,1,0,0,0)
A.c4(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.t(r,"uSource",B.w)
A.t(r,"uTexelStep",new A.x(B.aj,q.e))
A.bn(r,q.c)
s.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.jO.prototype={
gE(){return"dofComposite"},
al(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.I,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1))},
ak(a){var s=this,r="dofComposite",q=s.a.az(new A.bj(r,s.b,s.c,B.y,B.jD,B.iE)),p=A.d3(s.d)
return A.c([new A.lA(new A.b6(r,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a0(){},
$iam:1}
A.lA.prototype={
am(a){var s,r=this,q=a.ai("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bP(n,q.b)
A.ba(n,r.a.ac())
A.c4(n,r.b.b)
s=t._
A.aD(n,0,s.a(r.d.$0()))
A.t(n,"uSharp",B.w)
A.aD(n,1,s.a(r.e.$0()))
A.t(n,"uBlurred",B.ak)
A.aD(n,2,s.a(r.f.$0()))
A.t(n,"uSceneDepth",B.dQ)
A.t(n,"uNear",new A.x(B.e,o.f))
A.t(n,"uFar",new A.x(B.e,o.r))
A.t(n,"uFocusDistance",new A.x(B.e,r.w))
A.t(n,"uFocusRange",new A.x(B.e,r.x))
A.t(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bn(n,r.c)
p.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.k4.prototype={
gE(){return"grade"},
al(a,b){B.a.l(a.a,new A.aw("grade",B.I,A.c([new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bj("grade",s.b,s.c,B.y,B.jB,B.jn)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.lF(new A.b6("grade",A.c([new A.P(p,B.j),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a0(){},
$iam:1}
A.lF.prototype={
am(a){var s=this,r=a.ai(s.f.a),q=a.b,p=q.a
A.bP(p,a.ai(s.r.a).b)
A.ba(p,s.a.ac())
A.c4(p,s.b.b)
A.aD(p,0,r.b)
A.t(p,"uScene",B.w)
A.aD(p,1,t._.a(s.d.$0()))
A.t(p,"uLut",B.ak)
A.t(p,"uLutSize",new A.x(B.e,s.e))
A.t(p,"uStrength",new A.x(B.e,a.c.e.z))
A.bn(p,s.c)
q.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.hV.prototype={
gE(){return"msaaResolve"},
al(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hM,A.c([new A.P(this.b,B.j),new A.P(this.c,B.k)],t.C),!0))},
ak(a){var s=this.b,r=this.c
return A.c([new A.lM(new A.b6("msaaResolve",A.c([new A.P(s,B.j),new A.P(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a0(){},
$iam:1}
A.lM.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cV(this.c),j=a.cV(this.d),i=this.b
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
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.NONE)],t.n))}A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.NONE),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.f(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iaa:1,
gF(){return this.a}}
A.fn.prototype={}
A.jz.prototype={
ai(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cV(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ai(s)},
$iCZ:1}
A.wD.prototype={}
A.i4.prototype={
gE(){return"present"},
al(a,b){B.a.l(a.a,new A.aw("present",B.hN,A.c([new A.P(this.f,B.j)],t.C),!1))},
ak(a){var s,r=this,q=r.a.az(new A.bj("present",r.b,r.c,B.y,B.jM,B.iU)),p=A.d3(r.d)
r.w=p
s=r.f
return A.c([new A.lS(new A.b6("present",A.c([new A.P(s,B.j)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a0(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iam:1}
A.lS.prototype={
am(a){var s,r=this,q=a.cV(r.d),p=a.b,o=p.a
A.bP(o,null)
A.ba(o,r.a.ac())
A.c4(o,r.b.b)
A.bn(o,r.c)
A.aD(o,0,q.b)
s=a.c.e
A.t(o,"uExposure",new A.x(B.e,s.a))
A.t(o,"uVignette",new A.x(B.e,s.e))
A.t(o,"uGrain",new A.x(B.e,s.f))
A.t(o,"uRainIntensity",new A.x(B.e,s.r))
A.t(o,"uRainWindowVisibility",new A.x(B.e,s.x))
A.t(o,"uOutputEncoding",new A.x(B.e,r.e===B.aS?1:0))
A.t(o,"uToneMap",B.dP)
p.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.kH.prototype={
gE(){return"ps1Quantize"},
al(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.I,A.c([new A.P(this.e,B.j),new A.P(this.f,B.k)],t.C),!1))},
ak(a){var s=this,r="ps1Quantize",q=s.a.az(new A.bj(r,s.b,s.c,B.y,B.jH,B.ix)),p=A.d3(s.d),o=s.e,n=s.f
return A.c([new A.lT(new A.b6(r,A.c([new A.P(o,B.j),new A.P(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a0(){},
$iam:1}
A.lT.prototype={
am(a){var s=this,r=a.ai(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bP(o,a.ai(s.e.a).b)
A.ba(o,s.a.ac())
A.c4(o,s.b.b)
A.aD(o,0,r.b)
A.t(o,"uScene",B.w)
A.t(o,"uQuantizationBits",new A.x(B.e,p.at))
A.t(o,"uDitherStrength",new A.x(B.e,p.y))
A.bn(o,s.c)
q.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.eX.prototype={}
A.kV.prototype={
gE(){return"shadow"},
al(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hK,A.c([new A.P(this.z,B.k)],t.C),!1))},
ak(a){var s=this,r="shadowCaster",q=s.a.az(new A.bj(r,s.b,s.c,B.d2,B.d1,B.jl))
return A.c([new A.lW(new A.b6(r,A.c([new A.P(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a0(){},
$iam:1}
A.lW.prototype={
am(a){var s,r,q,p,o=this,n=a.ai("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ac())
A.d2(s,B.aR,1,0,0,0)
return}r=A.yU(l)
o.x.$1(r)
s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ac())
A.d2(s,B.aR,1,0,0,0)
A.c4(s,o.b.b)
A.t(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.iS(m,s[p],l,r)},
fd(a,b){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e1(!1):s)},
iS(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.t(s,"uUseInstances",B.bM)
n.fa(a,b.gF().c,d)
n.fd(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.bn(s,q.a)
s=q.b
r=q.c
if(s)a.dD(r,q.d,0)
else a.aD(r,0)}else if(b instanceof A.eK){p=b.a
if(!p.gF().r)return
if(n.jR(b,c)===B.lT)return
n.fa(a,p.gF().c,d)
A.wd(a,b,!1)
n.fd(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.bn(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dE(r,q.d,o,0)
else a.dC(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).p(0),null))},
jR(a,b){return B.lS},
fa(a,b,c){var s=a.a
A.t(s,"uModel",new A.x(B.v,new Float32Array(A.a2(b.a9().a))))
A.t(s,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a2(c.a.a))))},
$iaa:1,
gF(){return this.a}}
A.vt.prototype={
$1(a){return this.a.a=a},
$S:59}
A.vu.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.kW.prototype={
gE(){return"shadowedWorld"},
al(a,b){var s=this,r=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)r.push(new A.P(s.dx,B.j))
r.push(new A.P(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cH,r,!1))},
ak(a){var s=this,r="shadowedWorld",q=s.a.az(new A.bj(r,s.b,s.c,B.jJ,B.jC,B.it)),p=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)p.push(new A.P(s.dx,B.j))
p.push(new A.P(s.dy,B.k))
return A.c([new A.lX(new A.b6(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a0(){},
$iam:1}
A.lX.prototype={
am(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ai("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bP(b1,a4.b)
A.ba(b1,a2.a.ac())
s=a8.a
A.d2(b1,B.ca,1,s.c,s.b,s.a)
A.c4(b1,a2.b.b)
A.t(b1,"uAlbedo",B.w)
A.t(b1,"uNormalMap",B.me)
A.t(b1,"uOrmMap",B.mf)
A.t(b1,"uEmissiveMap",B.mg)
A.t(b1,"uLightmap",B.mh)
s=t._
A.aD(b1,1,s.a(a2.y.$0()))
A.t(b1,"uShadowMap",B.ak)
r=a7.d
q=t.n
A.t(b1,"uCameraPosition",new A.x(B.o,new Float32Array(A.a2(A.c([r.a,r.b,r.c],q)))))
A.t(b1,"uShadowMapTexelSize",new A.x(B.aj,new Float32Array(A.a2(A.c([1/a2.ch,1/a2.CW],q)))))
A.aD(b1,2,s.a(a2.at.$0()))
A.t(b1,"uSsao",B.dQ)
A.t(b1,"uVertexSnapGrid",new A.x(B.e,a9.as))
A.t(b1,"uSceneColorSize",new A.x(B.aj,new Float32Array(A.a2(A.c([a2.ax,a2.ay],q)))))
A.t(b1,"uViewProjection",new A.x(B.v,new Float32Array(A.a2(a7.c.a))))
A.t(b1,"uView",new A.x(B.v,new Float32Array(A.a2(a7.a.a))))
A.t(b1,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a2(b0.a.a))))
s=a8.b
A.t(b1,"uFogColor",new A.x(B.o,new Float32Array(A.a2(A.c([s.a,s.b,s.c],q)))))
A.t(b1,"uFogStart",new A.x(B.e,a8.c))
A.t(b1,"uFogEnd",new A.x(B.e,a8.d))
s=a8.e
A.t(b1,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=a8.f
A.t(b1,"uFogDensity",new A.x(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.O(r==null?B.bd:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.a4
k=o?a3:p.c
if(k==null)k=B.bO
A.t(b1,"uLightPosition",new A.x(B.o,new Float32Array(A.a2(A.c([l.a,l.b,l.c],q)))))
A.t(b1,"uLightDirection",new A.x(B.o,new Float32Array(A.a2(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.T
A.t(b1,"uLightColor",new A.x(B.o,new Float32Array(A.a2(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.t(b1,"uLightIntensity",new A.x(B.e,r==null?0:r))
A.t(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.a4
g=r?a3:i.b
if(g==null)g=B.T
A.t(b1,"uDirectionalDirection",new A.x(B.o,new Float32Array(A.a2(A.c([h.a,h.b,h.c],q)))))
A.t(b1,"uDirectionalColor",new A.x(B.o,new Float32Array(A.a2(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.t(b1,"uDirectionalIntensity",new A.x(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.al
c=n?a3:e.c
if(c==null)c=B.T
m=""+f
A.t(b1,"uPointPosition"+m,new A.x(B.o,new Float32Array(A.a2(A.c([d.a,d.b,d.c],q)))))
A.t(b1,"uPointColor"+m,new A.x(B.o,new Float32Array(A.a2(A.c([c.a,c.b,c.c],q)))))
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
if(d==null)d=B.al
a=r?a3:e.c
if(a==null)a=B.bO
c=r?a3:e.d
if(c==null)c=B.T
n=""+f
A.t(b1,"uDirectSpotPosition"+n,new A.x(B.o,new Float32Array(A.a2(A.c([d.a,d.b,d.c],q)))))
A.t(b1,"uDirectSpotDirection"+n,new A.x(B.o,new Float32Array(A.a2(A.c([a.a,a.b,a.c],q)))))
A.t(b1,"uDirectSpotColor"+n,new A.x(B.o,new Float32Array(A.a2(A.c([c.a,c.b,c.c],q)))))
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
A.t(b1,"uAmbientColor",new A.x(B.o,new Float32Array(A.a2(A.c([a0.a,a0.b,a0.c],q)))))
A.t(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
A.t(b1,"uRainWetness",new A.x(B.e,a9.w))
for(b1=a6.a,s=b1.length,r=a9.Q,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.eM(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.eM(a5,a6[a1],r)},
eM(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.t(s,"uUseInstances",B.bM)
m.fb(a,b.gF().c)
r=b.gF()
q=b.gF()
p=b.gF()
b.gF()
m.fe(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gF().a)
A.bn(s,o.a)
s=o.b
r=o.c
if(s)a.dD(r,o.d,0)
else a.aD(r,0)}else if(b instanceof A.eK){n=b.a
m.fb(a,n.gF().c)
A.wd(a,b,!0)
s=n.gF()
r=n.gF()
q=n.gF()
n.gF()
m.fe(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gF().a)
A.bn(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dE(r,o.d,q,0)
else a.dC(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).p(0),null))},
fe(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aD(o,0,p.a(s.e.$1(q.b)))
A.aD(o,3,p.a(s.f.$1(r)))
A.aD(o,4,p.a(s.r.$1(r)))
A.aD(o,5,p.a(s.w.$1(r)))
A.aD(o,6,p.a(s.x.$1(r)))
A.t(o,"uAlphaCutoff",new A.x(B.e,0))
A.t(o,"uOpaqueCoverage",new A.x(B.e,c===B.aU?0:1))
A.t(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.t(o,"uMaterialTint",new A.x(B.o,new Float32Array(A.a2(A.c([q.d,q.e,q.f],p)))))
A.t(o,"uEmissiveStrength",new A.x(B.e,0))
A.t(o,"uUvScaleOffset",new A.x(B.md,new Float32Array(A.a2(A.c([q.db,q.dx,0,0],p)))))
A.t(o,"uNormalStrength",new A.x(B.e,1))
A.t(o,"uRoughness",new A.x(B.e,q.at))
A.t(o,"uMetallic",new A.x(B.e,0))
A.t(o,"uClearcoatStrength",new A.x(B.e,0))
A.t(o,"uClearcoatRoughness",new A.x(B.e,0.2))
A.t(o,"uOcclusionStrength",new A.x(B.e,1))
A.t(o,"uLightmapIntensity",new A.x(B.e,0))
A.t(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aU===c){switch(d.a){case 0:p=B.eW
break
case 1:p=B.eV
break}break A}if(B.R===c||B.eT===c){p=s.a.ac()
break A}}A.ba(o,q.go?p.e1(!1):p)},
fb(a,b){var s=b.a9(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a2(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a2(s.dL().a))))},
$iaa:1,
gF(){return this.a}}
A.kY.prototype={
gE(){return"ssaoOcclusion"},
al(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cG,A.c([new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="ssaoOcclusion",q=s.a.az(new A.bj(r,s.b,s.c,B.y,B.jG,B.iu)),p=A.d3(s.d)
return A.c([new A.m_(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a0(){},
$iam:1}
A.m_.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bP(m,a.ai("ssaoRaw").b)
A.ba(m,p.a.ac())
if(n<=0){A.d2(m,B.Q,1,1,1,1)
return}A.d2(m,B.Q,1,0,0,0)
s=p.e.$0()
A.c4(m,p.b.b)
A.aD(m,0,t._.a(p.d.$0()))
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
A.bn(m,p.c)
o.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.kX.prototype={
gE(){return"ssaoBlur"},
al(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cG,A.c([new A.P(this.y,B.j),new A.P(this.z,B.k)],t.C),!1))},
ak(a){var s=this,r="ssaoBlur",q=s.a.az(new A.bj(r,s.b,s.c,B.y,B.jw,B.jp)),p=A.d3(s.d)
return A.c([new A.lZ(new A.b6(r,A.c([new A.P(s.y,B.j),new A.P(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a0(){},
$iam:1}
A.lZ.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bP(o,a.ai("ssaoBlurred").b)
A.ba(o,q.a.ac())
if(a.c.e.c<=0){A.d2(o,B.Q,1,1,1,1)
return}A.d2(o,B.Q,1,0,0,0)
s=q.f.$0()
A.c4(o,q.b.b)
r=t._
A.aD(o,0,r.a(q.d.$0()))
A.t(o,"uSsaoRaw",B.w)
A.aD(o,1,r.a(q.e.$0()))
A.t(o,"uSceneDepth",B.ak)
A.t(o,"uTexelSize",new A.x(B.aj,new Float32Array(A.a2(A.c([1/q.r,1/q.w],t.n)))))
A.t(o,"uNear",new A.x(B.e,s.f))
A.t(o,"uFar",new A.x(B.e,s.r))
A.bn(o,q.c)
p.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.lc.prototype={
gE(){return"vhs"},
al(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.I,A.c([new A.P(this.r,B.j),new A.P(s,B.G),new A.P(s,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bj("vhs",s.b,s.c,B.y,B.jz,B.iz)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.m7(new A.b6("vhs",A.c([new A.P(p,B.j),new A.P(o,B.G),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a0(){},
$iam:1}
A.m7.prototype={
am(a){var s,r=this,q=a.ai(r.f.a),p=a.ai(r.r.a),o=a.b,n=a.c.e,m=n.db,l=n.ay
if(m)l*=0.5
s=m?0:n.cy
m=o.a
A.bP(m,p.b)
A.ba(m,r.a.ac())
A.c4(m,r.b.b)
A.aD(m,0,q.b)
A.t(m,"uScene",B.w)
A.aD(m,1,t._.a(r.d.$0()))
A.t(m,"uHistory",B.ak)
A.t(m,"uTime",new A.x(B.e,r.e.$0()))
A.t(m,"uChromaWeight",new A.x(B.e,n.ax))
A.t(m,"uTrackingWeight",new A.x(B.e,l))
A.t(m,"uNoiseWeight",new A.x(B.e,n.ch))
A.t(m,"uHeadSwitchWeight",new A.x(B.e,n.CW))
A.t(m,"uDropoutWeight",new A.x(B.e,n.cx))
A.t(m,"uGhostWeight",new A.x(B.e,s))
A.bn(m,r.c)
o.aD(3,0)},
$iaa:1,
gF(){return this.a}}
A.i9.prototype={}
A.ln.prototype={
gE(){return"world"},
al(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cH,A.c([new A.P(this.e,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bj("safeWorld",s.b,s.c,B.jL,B.y,B.is)),q=s.e
return A.c([new A.ma(new A.b6("worldOpaqueTransparent",A.c([new A.P(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a0(){},
$iam:1}
A.ma.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bP(j,a.ai(n.d).b)
A.ba(j,n.a.ac())
s=k.a
A.d2(j,B.ca,1,s.c,s.b,s.a)
A.c4(j,n.b.b)
A.t(j,"uViewProjection",new A.x(B.v,new Float32Array(A.a2(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a4
s=t.n
A.t(j,"uLightDir",new A.x(B.o,new Float32Array(A.a2(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.t(j,"uAmbientColor",new A.x(B.o,new Float32Array(A.a2(A.c([p.a,p.b,p.c],s)))))
A.t(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fq(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fq(m,l[o])},
fq(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eK){s=b.a
n.fs(a,s.gF().c)
A.wd(a,b,!0)
r=n.c.$1(s.gF().a)
A.bn(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dE(p,r.d,o,0)
else a.dC(p,0,o)}else if(t.yz.b(b)){q=a.a
A.t(q,"uUseInstances",B.bM)
n.fs(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.bn(q,r.a)
q=r.b
p=r.c
if(q)a.dD(p,r.d,0)
else a.aD(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).p(0),null))},
fs(a,b){var s=b.a9(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a2(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a2(s.dL().a))))},
$iaa:1,
gF(){return this.a}}
A.nC.prototype={
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
if(r>=5)q=B.a_
else q=r===0?B.bs:B.L
return new A.e8(q,s)},
ht(a){var s,r=this.cg(a).a
A:{if(B.a_===r){s=B.ds
break A}if(B.L===r){s=B.dr
break A}s=B.af
break A}return s}}
A.k1.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hD.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hG.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.k3.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.k0.prototype={}
A.k2.prototype={}
A.eH.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hF.prototype={}
A.hE.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eW.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ie.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cZ.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fr.prototype={
v(){return"ClearMask."+this.b}}
A.jM.prototype={
aD(a,b){var s=this.a
if(s.b!==B.h)A.h(A.j(u.k))
s.a.drawArrays(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bw(a,1)},
dC(a,b,c){var s=this.a
if(s.b!==B.h)A.h(A.j(u.k))
s.a.drawArraysInstanced(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bw(a,c)},
dD(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bw(a,1)},
dE(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aK(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bw(a,c)},
$iBX:1}
A.fD.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fN.prototype={
h2(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.j("resource is not in candidate: "+a))
return s}}
A.oJ.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.j("GPU resource adapter is not initialized"))
return s},
cN(a){var s,r,q,p,o,n=this
if(n.e)A.h(A.j("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.j("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.j("GPU resource candidate is already open"))
s=A.i1(a)
p=n.b
r=p.cN(s)
try{q=new A.fN(r,n.da(s,a),B.ae)
n.d=q
return q}catch(o){p.dV(r)
throw o}},
a0(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.de(s.b)
r.b.a0()
r.c=null
r.e=!0},
da(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("F<1>")
s=new A.F(k,i.a(new A.oK()),j)
for(h=s,g=J.O(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.zb(f,a.eK(r,a5))
J.jk(a3,q)
J.bf(a2,r,q)}e=A.H(new A.F(k,i.a(new A.oL()),j),j.i("m.E"))
B.a.W(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.AG(J.Bt(o,11))
if(i){h=J.aS(a2,"sceneColor")
h.toString
J.bf(a2,o,h)}else{h=n
if(typeof h!=="number")return h.nb()
if(h>=2){h=J.aS(a2,"sceneColor#1")
h.toString
J.bf(a2,o,h)}else{m=A.zb(f,a.eK(o,a5))
J.jk(a3,m)
J.bf(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.B(a0).i("eS<1>"),a0=new A.eS(a0,k),a0=new A.aC(a0,a0.gt(0),k.i("aC<a1.E>")),j=a.a,i=t.V,k=k.i("a1.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wM(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eK(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hF(s,s,1,B.aX,!0)}if(a==="sceneDepth")return new A.hF(n,m,1,B.aX,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a6(n+1,2):n
p=r?B.d.a6(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hF(q,p,s,o?B.cE:B.hH,o)},
de(a){var s,r,q,p,o,n=A.fI(t.mf.a(a).gaI(),t._)
for(n=A.h_(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wM(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ew(a){if(this.d!==a||a.c!==B.ae)throw A.b(A.j("GPU resource candidate is not open"))}}
A.oK.prototype={
$1(a){return!B.b.T(A.p(a),"sceneColor#")},
$S:3}
A.oL.prototype={
$1(a){return B.b.T(A.p(a),"sceneColor#")},
$S:3}
A.h2.prototype={
v(){return"_SlotState."+this.b}}
A.el.prototype={
sb5(a){this.c=this.$ti.i("1?").a(a)}}
A.cV.prototype={
aC(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.el(B.aK,n.i("el<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.nf
p.sb5(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c0(a){return this.aC(a,null)},
a_(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.e0(B.cL,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.e0(B.cM,a))
s=q.b
if(s===B.aL||s===B.aK)throw A.b(A.e0(B.az,a))},
bB(a){var s,r,q=this.$ti
q.c.a(a)
this.a_(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dY(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a_(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb5(b)},
b7(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.e0(B.cL,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.e0(B.cM,a))
r=q.b
if(r===B.aL||r===B.aK)throw A.b(A.e0(B.hX,a))
q.b=B.aL
q.sb5(null)
B.a.l(p.c,s);++p.e},
bF(){return new A.bR(this.lS(),this.$ti.i("bR<+(1,2)>"))},
lS(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aL||j===B.aK){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aP(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jw.prototype={
v(){return"BlendEquation."+this.b}}
A.ey.prototype={
v(){return"BlendFactor."+this.b}}
A.jH.prototype={
v(){return"CullFace."+this.b}}
A.jK.prototype={
v(){return"DepthFunc."+this.b}}
A.fz.prototype={
e1(a){var s=this
return A.yb(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b7.prototype={
v(){return"StateField."+this.b}}
A.tl.prototype={
lc(a){var s,r=this.a
if(r==null)return A.hR(B.jg,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bE)
if(r.b!==a.b)s.l(0,B.bF)
if(r.c!==a.c)s.l(0,B.bG)
if(r.d!==a.d)s.l(0,B.bH)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bI)
if(r.r!==a.r)s.l(0,B.bJ)
if(r.w!==a.w)s.l(0,B.bK)
if(r.x!==a.x)s.l(0,B.bL)
return s}}
A.dB.prototype={$idl:1}
A.iW.prototype={}
A.iV.prototype={}
A.m9.prototype={}
A.ll.prototype={
ij(a){var s=this,r=A.a(s.a.canvas)
s.c=A.U(new A.ti(s))
s.d=A.U(new A.tj(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hb(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bS(A.f(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bS(A.f(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bS(A.f(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bS(A.f(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bS(A.f(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.f1(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hk(e.getParameter(A.f(k.WebGL2RenderingContext.RENDERER)))
m=A.hk(e.getParameter(A.f(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qy("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bS(a){var s=A.hk(this.a.getParameter(a))
return typeof s=="number"?B.c.ad(s):0},
f1(a){var s=A.hk(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iCl:1}
A.ti.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.S},
$S:1}
A.tj.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.ua.prototype={
kg(){var s,r=this
if(r.b!==B.h)A.h(A.j(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dB(new A.m9(s))},
fl(a){var s=a.a
if(!(s instanceof A.m9))throw A.b(A.aj(a,"query","is not a GPU timer query"))
return s}}
A.m8.prototype={}
A.th.prototype={}
A.tk.prototype={
l7(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.th(A.Dr(s))}}
A.jN.prototype={
B(){var s=this
return A.M(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.js.prototype={
glW(){var s=this.CW
return new A.al(s,A.o(s).i("al<2>")).bq(0,0,new A.n6(),t.i)},
i1(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.q()
s=j.a
A.G(i.connect(A.a(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.q()
A.a(r.gain).value=1
q=j.Q
q===$&&A.q()
A.a(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.q()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aW()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aW()
j.k3=p
A.G(q.connect(p))
A.G(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.G(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aW()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aW()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aW()
j.p1=r
A.G(p.connect(q))
A.G(i.connect(A.a(s.destination)))
j.es()},
es(){var s,r=this,q=r.k4
q===$&&A.q()
q.disconnect()
s=r.p1
s===$&&A.q()
s.disconnect()
if(r.p2){A.G(q.connect(s,0))
A.G(q.connect(s,1))
q=r.ok
q===$&&A.q()
A.G(s.connect(q,0,0))
A.G(s.connect(q,0,1))}else{s=r.ok
s===$&&A.q()
A.G(q.connect(s,0,0))
A.G(q.connect(s,1,1))}},
cc(){var s=this.a
if(A.p(s.state)==="suspended")A.a(s.resume())},
fg(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.q()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.q()
return s}r=B.jE.h(0,a)
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
j1(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aH(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aK()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cM(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aK()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.fg(a)))
r.onended=A.U(new A.n8(r,q))
r.start()},
h8(a){return this.cM(a,1)},
h9(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
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
l=j.eE(j.b.h7(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h3(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.U(new A.n7(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.fg(a)))
r.start()},
mp(a,b,c,d){return this.h9(a,b,c,1,d,null,null,null)},
eE(a){var s,r,q,p,o,n,m,l
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
ek(a){var s,r,q,p,o=this
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
A.G(q.connect(p))
r=o.e
r===$&&A.q()
A.G(p.connect(r))
q.onended=A.U(new A.n9(o,q,p))
q.start()
o.cy=q},
cZ(a){if(this.p2===a)return
this.p2=a
this.es()},
hE(a){var s,r,q=this
q.cZ(a.b===B.bX)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aM?1:0.55
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
eb(a){var s=null
return this.bl(s,s,s,s,a,s)},
hB(a){var s=null
return this.bl(s,s,a,s,s,s)},
hD(a){var s=null
return this.bl(s,s,s,s,s,a)},
hA(a){var s=null
return this.bl(s,a,s,s,s,s)},
hz(a){var s=null
return this.bl(a,s,s,s,s,s)},
hC(a){var s=null
return this.bl(s,s,s,a,s,s)},
hy(a){if(this.ay===a)return
this.ay=a
this.by()},
by(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cd(p,g)
m=n==null?i.eE(h.h7(p,g)):new A.ay(n.c,n.d,n.e)
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
A.n6.prototype={
$2(a,b){return Math.max(A.bp(a),t.jS.a(b).r)},
$S:48}
A.n5.prototype={
$1(a){return this.hl(t.q.a(a))},
hl(a){var s=0,r=A.bu(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bv(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ai(A.b0(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ai(A.b0(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ai(A.b0(A.a(j.a.decodeAudioData(m)),k),$async$$1)
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
case 5:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$$1,r)},
$S:63}
A.n8.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n7.prototype={
$1(a){var s=this.a.CW.a4(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.n9.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h3.prototype={}
A.jt.prototype={
v(){return"AudioCategory."+this.b}}
A.mW.prototype={
i3(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.hl)
if(!B.a.a8(A.c([d.a,d.b,d.c],t.n),new A.mX()))throw A.b(B.fx)},
gE(){return this.a}}
A.mX.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.mE.prototype={
i0(a,b){if(this.a.length===0)throw A.b(B.fm)
if(!B.a.a8(A.c([a.a,a.b,a.c],t.n),new A.mF()))throw A.b(B.fD)}}
A.mF.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.ho.prototype={
C(){var s=t.n
if(B.a.L(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mG()))throw A.b(B.fV)
s=B.a.L(A.c([0,0.55,1],s),new A.mH())
if(s)throw A.b(B.hb)},
cd(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
mW(a){return this.cd(a,null)}}
A.mG.prototype={
$1(a){return!isFinite(A.bp(a))},
$S:5}
A.mH.prototype={
$1(a){A.bp(a)
return a<0||a>1},
$S:5}
A.mS.prototype={
i2(a){var s=A.o(a)
if(new A.ab(a,s.i("ab<1>")).L(0,new A.mU())||new A.al(a,s.i("al<2>")).L(0,new A.mV()))throw A.b(B.hi)}}
A.mU.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.mV.prototype={
$1(a){var s
t.a.a(a)
s=J.aG(a)
return s.gO(a)||s.L(a,new A.mT())},
$S:64}
A.mT.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.wq.prototype={}
A.n3.prototype={}
A.mY.prototype={
i4(a,b,c){var s
for(s=this.b.gaI(),s=s.gu(s);s.m();)s.gn().C()},
hg(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.j("audio listener room missing: "+a0))
r=this.jG(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c4
e=f.cd(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
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
s=A.ag(s,b)
b=A.ag(q,b)
if(!isFinite(g)||g<0||g>1)A.h(B.ha)
return new A.n3(s,b,o,m,g,n,c)},
cd(a,b){return this.hg(a,b,B.bl)},
jG(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.n_
s=t.N
r=A.M([a0,0],s,t.i)
q=A.M([a0,B.V],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.U,l=p.$ti.c;p.a!==0;){k=A.H(p,l)
B.a.V(k,new A.mZ(r))
j=B.a.gU(k)
p.a4(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.is(s,!0)}i=o.aL(j)
h=A.H(i,i.$ti.i("m.E"))
B.a.V(h,new A.n_())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cb(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c4:d).mW(f)
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
p.l(0,e)}}}return B.mZ}}
A.mZ.prototype={
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
A.n_.prototype={
$2(a,b){var s=t.U
return B.b.H(s.a(a).a,s.a(b).a)},
$S:66}
A.is.prototype={}
A.fo.prototype={}
A.nz.prototype={
h0(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Bn().bA(q).gaw()
p.d=q
p.c=p.b.bA(q).gaw()
p.a=a}}
A.oi.prototype={}
A.k9.prototype={
cS(a){if(this.at)return
A.pq(a,"requestPointerLock",t.X)},
e9(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mz(p,n)}this.bd()},
d1(a){var s,r,q,p,o,n,m=this
if(m.ch.d1(a))for(s=m.CW.aJ("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
mq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.aU(c,A.B(c).i("aU<1,ae?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.p(r.mapping)!=="standard")break A
c=A.p(r.id)
q=A.p(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.aU(n,A.B(n).i("aU<1,A>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.aU(d,A.B(d).i("aU<1,ae>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a6(r.value))}s=new A.kZ(!0,c,q,o,p)
break}}d=s==null
m=A.DF(d?B.lZ:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.L(c.aJ(e),q.gap(q))
q=f.r
q.iY(A.o(q).i("l(1)").a(new A.pj(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.m:g,h)){if(i.dJ())n.l(0,h)}else n.l(0,h)}}f.e=A.hR(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.L(c.aJ(e),l.gap(l))){d=r.a(f.c)
d=!B.a.L(c.aJ(e),d.gap(d))}}if(d)i.dK()},
jd(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.p(a.code)))if(B.a.q(s.CW.aJ("interact"),A.p(a.code))){if(s.ch.dJ())s.d.l(0,A.p(a.code))}else s.d.l(0,A.p(a.code))},
jf(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a4(0,A.p(a.code))
r=this.CW
if(B.a.q(r.aJ(q),A.p(a.code))){t.Q.a(s)
s=!B.a.L(r.aJ(q),s.gap(s))}else s=!1
if(s)this.ch.dK()},
jj(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.f(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aJ("interact"),s)){if(r.ch.dJ())r.d.l(0,s)}else r.d.l(0,s)},
jn(a){var s,r="interact",q="Mouse"+A.f(A.a(a).button),p=this.c
p.a4(0,q)
s=this.CW
if(B.a.q(s.aJ(r),q)){t.Q.a(p)
p=!B.a.L(s.aJ(r),p.gap(p))}else p=!1
if(p)this.ch.dK()},
jp(a){var s
A.a(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jl(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.f_(a,"movementX")
s.as=s.as+s.f_(a,"movementY")},
jh(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
f_(a,b){var s=A.zI(a[b])
if(s==null)s=null
return s==null?0:s},
cq(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fI(n.c,t.N)
for(r=n.e,r=A.h_(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.L(n.CW.aJ(a),s.gap(s))},
bd(){var s=this
s.c.N(0)
s.d.N(0)
s.f.N(0)
s.r.M(0,s.e)
s.as=s.Q=0
s.ch.dS()}}
A.pj.prototype={
$1(a){return!this.a.q(0,A.p(a))},
$S:3}
A.pi.prototype={
aJ(a){var s=this.a.h(0,a)
return s==null?B.m:s},
mz(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.h_(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ag(q,r))},
bh(a,b){var s,r,q
t.Q.a(b)
for(s=this.aJ(a),r=s.length,q=0;q<r;++q)if(b.a4(0,s[q]))return!0
return!1}}
A.pm.prototype={
dJ(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dK(){this.c=this.b=!1
this.d=0},
d1(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dS(){this.c=this.b=!1
this.d=0}}
A.aT.prototype={
gE(){return this.a}}
A.pG.prototype={}
A.pD.prototype={
mt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
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
j=A.n(h,t.N)
i.eQ(n,i.d,a,b,i.a,j,m)
i.eQ(l,i.e,a,c,i.b,j,k)
return new A.pG(n,l,j)},
eQ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.B(d)
s=k.i("I<1,+effectiveScore,light,score(A,aT,A)>")
r=A.H(new A.I(d,k.i("+effectiveScore,light,score(A,aT,A)(1)").a(new A.pE(this,c,b)),s),s.i("a1.E"))
B.a.V(r,new A.pF())
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
A.pE.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ao(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iK(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pF.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:69}
A.nY.prototype={
du(a,b){var s,r,q,p,o,n,m,l=this
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
A.pM.prototype={
hT(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.du(b,c)},
k6(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cY.prototype={
cQ(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.d_(s,0,m,l)
n.a=s}r=b.ao(0,a).bA(d.ao(0,a)).gaw()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ii(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ii(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ii(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ii(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ii(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ii(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aG(a,b,c,d,e){return this.cQ(a,b,c,d,e,1,1)}}
A.k.prototype={
aj(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ao(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
aB(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaw(){var s=this,r=s.gt(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.kZ.prototype={
gE(){return this.b}}
A.lo.prototype={}
A.ns.prototype={
n6(a){var s,r,q,p,o,n=B.i.ab(a.B(),null)
this.a.fI(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mu(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
p=this.eJ(r,a)
if(p!=null)return new A.eU(p,null)
o=this.eJ(q,a)
if(o!=null)return new A.eU(o,"recovered previous save")
if(r==null)return B.lo
return B.ln}catch(n){return B.lm}},
eJ(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fI(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.D)return null
else throw q}}}
A.jP.prototype={
i7(a,b,c,d,e){if(this.a.length===0)throw A.b(B.h7)
if(this.b<0)throw A.b(B.fy)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ag(q,t.i)
s=t.z
return A.aX(A.M(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.o7.prototype={
gag(){return this.a}}
A.fA.prototype={
B(){var s=t.N
return A.M(["kind",this.a.b],s,s)}}
A.oa.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bo.prototype={}
A.kA.prototype={
B(){var s,r=this,q=t.N,p=A.n(q,t.z)
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
lN(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ao(0,new A.k(0,1.3499999999999999,0))
return!new A.jA(s,s.aj(0,new A.k(0,1.2000000000000002,0))).cI(a,r)}}
A.qs.prototype={
B(){return A.ug(this.a)}}
A.fT.prototype={
B(){return A.M(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qQ.prototype={
fI(a){var s,r,q,p,o,n,m,l=B.i.ar(a,null),k=t.f
if(!k.b(l))throw A.b(B.hk)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.V("unsupported save version "+A.v(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.fI)
k=A.aM(n,s,r)
return A.yR(A.aM(m,s,r),k,2)}}
A.eU.prototype={}
A.eG.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jZ.prototype={
gag(){return this.c},
gaQ(){return this.d}}
A.ox.prototype={
gag(){return this.a},
gaQ(){return this.b}}
A.ow.prototype={
gaa(){var s=this.d
return new A.ox(s.a,s.b)},
gha(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.M(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.M(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.M(["entryCount",m.e.b.a],k,t.S)
p=A.yk(m.c).B()
o=m.r
n=o.c
return new A.qs(A.ug(A.M(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.M(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
ka(a,b){if(!B.a.L(a.f,new A.oy(b)))return!1
this.z.k8(a,b)
return!0},
k9(a){var s,r,q,p,o,n="event."+a.a,m=this.z
if(m.lE(n))return!1
m=m.b
m.k(0,n,"true")
for(s=a.x,r=s.length,q=0;q<r;++q){p=s[q]
o=B.b.br(p,"=")
if(o<=0||o===p.length-1)continue
m.k(0,B.b.I(p,0,o),B.b.aU(p,o+1))}return!0},
lA(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("al<2>")
q=A.H(new A.al(s,r),r.i("m.E"))
B.a.V(q,new A.oz())
if(q.length===0)return null
s=A.B(q)
r=s.i("F<1>")
p=A.H(new A.F(q,s.i("l(1)").a(new A.oA()),r),r.i("m.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.de(a),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cK(a,l.a,s.length-1,B.a.gZ(s).p(0))
j.k(0,a,k)
return k},
k5(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.aj(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cu(B.hv)}if(n<a)this.cu(B.hw)},
mv(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dT){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hS(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.BU(j,A.ag(i.d,h).length)
if(a===B.dG)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.B(r)
A.BT(j,new A.F(r,q.i("l(1)").a(new A.oB(k)),q.i("F<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.iw,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aH(j.a/1*3)
B.a.l(r.r,new A.fV(q.a,a,b))
m=r.a
A.C4(m,q.a,n,k.b,A.ag(m.d,h));++q.a
q.eg(7)
r.c=16
r.d=6
r.f=!1
m.hG(B.j0)
s.r.kx(o,c)
l=B.c.aH(j.b/1*6)
if(l>0)r.eh(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.al(i,A.o(i).i("al<2>")).L(0,new A.oC())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cu(B.hy)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cu(B.hx)},
cu(a){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.jZ(s.a,s.b))
B.a.l(r.x,A.BV(A.EO(a),r.b,r.y-1))}}
A.oy.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.oz.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.oA.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:18}
A.oB.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.rD().hP(this.a.c,a.a)},
$S:74}
A.oC.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.ju.prototype={
e_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.B(c),a=b.i("e(1)")
b=b.i("I<1,e>")
A.jg(new A.I(c,a.a(new A.ng()),b),"level")
s=e.e
r=A.B(s)
q=r.i("e(1)")
r=r.i("I<1,e>")
A.jg(new A.I(s,q.a(new A.nh()),r),"room")
p=e.f
o=A.B(p)
A.jg(new A.I(p,o.i("e(1)").a(new A.ni()),o.i("I<1,e>")),"portal")
o=e.r
n=A.B(o)
A.jg(new A.I(o,n.i("e(1)").a(new A.nj()),n.i("I<1,e>")),"stair")
m=new A.I(c,a.a(new A.nk()),b).b9(0)
l=new A.I(s,q.a(new A.nl()),r).b9(0)
r=A.n(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.u)(p),++k){j=p[k]
r.k(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.u)(s),++k){i=s[k]
b=i.b
if(!m.q(0,b))throw A.b(A.V("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.B(b)
q=i.a
A.jg(new A.I(b,a.i("e(1)").a(new A.nm()),a.i("I<1,e>")),"window in "+q)
a=i.f
A.jg(a,"portal reference in "+q)
for(b=a.length,h=0;h<a.length;a.length===b||(0,A.u)(a),++h){g=a[h]
j=r.h(0,g)
if(j==null)throw A.b(A.V("rooms."+q+".portalIds references unknown portal "+g,d,d))
if(!(j.b===q||j.c===q))throw A.b(A.V("rooms."+q+".portalIds references "+g+", which does not touch the room",d,d))}}for(c=p.length,k=0;k<p.length;p.length===c||(0,A.u)(p),++k){j=p[k]
b=j.b
if(b!=="outside"&&!l.q(0,b))throw A.b(A.V("portals."+j.a+".a references "+b,d,d))
a=j.c
if(a!=="outside"&&!l.q(0,a))throw A.b(A.V("portals."+j.a+".b references "+a,d,d))
if(b===a)throw A.b(A.V("portals."+j.a+" has identical endpoints",d,d))}for(c=o.length,k=0;k<o.length;o.length===c||(0,A.u)(o),++k){f=o[k]
b=f.b
j=r.h(0,b)
if(j==null)throw A.b(A.V("stairs."+f.a+".portalId references unknown portal "+b,d,d))
if(!j.z)throw A.b(A.V("stairs."+f.a+".portalId "+b+" is not marked stair",d,d))}},
dZ(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.B(j),i=n.i("l(1)"),n=n.i("F<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bw(new A.F(j,i.a(new A.nf(e)),n),r)
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
if(a1.length!==s.length||B.a.gba(a1).b!==B.a.gba(s).b)throw A.b(A.j("stair manifest mismatch"))}}
A.na.prototype={
$1(a){var s=A.jb(a,"level"),r=A.c7(s,"id")
A.c7(s,"kind")
A.eq(s,"floorY")
return new A.dL(r)},
$S:75}
A.nb.prototype={
$1(a){return A.BB(a,this.a)},
$S:76}
A.nc.prototype={
$1(a){var s=this.a,r=A.jb(a,"portal"),q=A.c7(r,"id"),p=A.c7(r,"a"),o=A.c7(r,"b"),n=A.x7(r,"facingA"),m=A.x7(r,"facingB"),l=A.eq(r,"offsetA"),k=A.eq(r,"offsetB"),j=A.eq(r,"width"),i=A.eq(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.p(r.h(0,"doorKit")):null
return new A.dM(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.a8(r.h(0,"stair"),!0),J.a8(r.h(0,"exterior"),!0),!J.a8(r.h(0,"open"),!1),J.a8(r.h(0,"sticks"),!0))},
$S:77}
A.nd.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.jb(a,"stair")
return new A.dO(A.c7(p,"id"),A.c7(p,"portalId"),A.Fy(p.h(0,s),s),A.mt(p.h(0,"min"),"min"),A.mt(p.h(0,"max"),"max"),A.mt(p.h(0,r),r),A.mt(p.h(0,q),q))},
$S:78}
A.ne.prototype={
$1(a){return typeof a=="string"?a:A.dE("exterior cell")},
$S:33}
A.ng.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nh.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.ni.prototype={
$1(a){return t.lT.a(a).a},
$S:82}
A.nj.prototype={
$1(a){return t.gI.a(a).a},
$S:83}
A.nk.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nl.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.nm.prototype={
$1(a){return t.ya.a(a).a},
$S:84}
A.nf.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:27}
A.vs.prototype={
$1(a){var s
A:{if("ground"===a){s=B.f4
break A}if("first"===a){s=B.f5
break A}s=B.f6
break A}return s},
$S:86}
A.dL.prototype={
gE(){return this.a}}
A.dN.prototype={
gE(){return this.a}}
A.nn.prototype={
$1(a){var s=this.a,r=A.jb(a,"window")
return new A.dP(A.c7(r,"id"),A.x7(r,"facing"),A.eq(r,"offset")*s,A.eq(r,"sill")*s,A.eq(r,"width")*s,A.eq(r,"height")*s,J.a8(r.h(0,"frosted"),!0))},
$S:87}
A.no.prototype={
$1(a){return typeof a=="string"?a:A.dE("portal id")},
$S:33}
A.dP.prototype={
gE(){return this.a}}
A.dM.prototype={
gE(){return this.a}}
A.dO.prototype={
gE(){return this.a}}
A.va.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.vq.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.jA.prototype={
mP(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.B(s)
q=new A.F(s,r.i("l(1)").a(new A.nD(e)),r.i("F<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cs(b,p.f)&&a==="hall"))o=n.cs(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lp(p,B.c.D(d,0,1))},
lX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eZ(g,c,d)
s=h.iU(a,b,c,d)
if(s!=null){h.d=s
return h.eZ(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.fB(Math.sqrt(r*r+q*q)/0.08))
o=d.aB(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jQ(a,n,m,o)
l=l||j.b
m=j.a
i=h.ms(a,n)
n=i==null?n:i}h.bf(m)
return new A.kn(m,n)},
iU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cs(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cs(c,l)){l=j<0||o
h=l}if(i||h)return new A.lp(m,i?0:1)}return null},
eZ(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ao(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.z3(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bf(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kn(n,k)},
cs(a,b){var s=a.ao(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cD(c,!1)
s=h.cz(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cz(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cD(p.a,!1)
n=c.aj(0,new A.k(0,0.35,0))
h.bf(n)
if(!h.cI(a,b)){m=h.cz(a,b,n,new A.k(g,0,0))
l=h.cz(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bf(i)
if(h.cI(a,b))break}h.bf(k)
return new A.cD(k,!1)}}if(o)return new A.cD(r,!0)
if(!p.b)return new A.cD(p.a,!0)
h.bf(c)
return new A.cD(c,!0)},
cz(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cD(c,!1)
s=c.aj(0,d)
this.bf(s)
if(this.cI(a,b)){this.bf(c)
return new A.cD(c,!0)}return new A.cD(s,!1)},
bf(a){var s=a.ao(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.aj(0,new A.k(0,1.2000000000000002,0))},
cI(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aE(m)
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
return!this.jN(a,m,s)},
ms(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aE(k)
for(r=k.a,q=a.aL(r),p=J.O(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cb(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fp(k,o,s)&&this.iN(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jN(a,b,c){var s,r,q
for(s=a.aL(b.a),r=J.O(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fp(b,q,c))return!0}return!1},
fp(a,b,c){var s,r,q,p=a.a,o=b.aZ(p),n=b.aF(p)
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
iN(a,b,c){var s,r=this
switch(b.aZ(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
ske(a){this.a=t.a7.a(a)}}
A.nD.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:89}
A.kn.prototype={}
A.cD.prototype={}
A.lp.prototype={}
A.hI.prototype={
gag(){return this.a}}
A.p0.prototype={
kx(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.J,r)
s=B.J[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hQ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.c}return r},
hR(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.d}return r},
B(){return A.M(["landedCount",this.b],t.N,t.z)}}
A.a0.prototype={}
A.jS.prototype={
glQ(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a8(A.c([r,q,p,o,n,m],t.n),new A.oc())&&o>=r&&n>=q&&m>=p}}
A.oc.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.k6.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glQ())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.L(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.p2()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.p2.prototype={
$1(a){return!isFinite(A.bp(a))},
$S:5}
A.p1.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bv(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bv(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bv(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bv(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bv(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bv(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a0(a,b,c,m,n,o,0,0,p),r=new A.a0(g,h,i,m,n,o,1,1,p)
this.af(s,new A.a0(d,e,f,m,n,o,1,0,p),r)
this.af(s,r,new A.a0(j,k,l,m,n,o,0,1,p))},
af(a,b,c){var s=this,r=s.b
B.a.l(r,s.dk(a))
B.a.l(r,s.dk(b))
B.a.l(r,s.dk(c))},
dk(a){var s,r,q=B.a.Y(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.j("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
kk(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.k6(A.ag(g,t.hl),new Uint16Array(A.a2(this.b)),new A.jS(s,r,q,p,o,n))
h.C()
return h}}
A.jT.prototype={}
A.wi.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ag.q(0,s))A.h(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:90}
A.vk.prototype={
$2(a,b){var s=t.Ez
return B.b.H(s.a(a).a,s.a(b).a)},
$S:91}
A.d4.prototype={
n5(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iD(A.GY(new A.k6(i,new Uint16Array(A.a2(s)),A.Ev(i))),l.a,l.b,l.c,A.c([],k))}}
A.iD.prototype={}
A.eC.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jU.prototype={
kr(a){var s
switch(a.a){case 0:s=A.aN(["front","street","opposite-house"],t.N)
break
case 1:s=A.aN(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aN(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aN(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aN(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
ks(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cj
break A}if("kitchen"===a||"cellar"===a){s=B.f1
break A}if("bathroom"===a){s=B.f2
break A}if("spare-room"===a){s=B.f3
break A}s=B.cj
break A}return this.kr(s)},
fN(a,b,c,d){d.i("m<0>").a(b)
t.Q.a(c)
return new A.bR(this.lw(d.i("e(0)").a(a),b,c,d),d.i("bR<0>"))},
lw(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fN(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a8(0,B.ag.gap(B.ag)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ag.q(0,j))throw A.b(A.j("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eh.prototype={
fE(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.v0.prototype={
$1(a){var s=this
return t.xT.a(a).fE(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:35}
A.v_.prototype={
$1(a){return t.xT.a(a).fE(0,(this.a+this.b)*0.5,this.c)},
$S:35}
A.dY.prototype={
v(){return"FocusKind."+this.b}}
A.eD.prototype={
gE(){return this.b}}
A.qN.prototype={}
A.uc.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:93}
A.vi.prototype={
$1(a){return B.d.D(B.c.aH(a*this.a),0,255)},
$S:94}
A.eg.prototype={}
A.oZ.prototype={
lG(){var s,r,q,p,o,n,m=this
m.j0()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.j("authored portal endpoint missing: "+o.a))}},
j0(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.j("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.j("duplicate portal "+n))
q.k(0,n,m)}},
aE(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.hQ(q),s.b+r.hR(q),s.c)},
aL(a){var s=this.c,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.pf(a)),r.i("F<1>"))},
mr(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.aj(a,"roomId","not a portal endpoint"))
r=this.aE(o)
q=b.aF(a)+b.w*0.5
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
h7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.V
s=A.c([new A.aP(a,B.V)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.U;s.length!==0;){o=B.a.my(s,0)
n=o.a
m=o.b
for(l=this.aL(n),k=J.O(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cb(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.H(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.H(m,p)
h.push(j)
B.a.l(s,new A.aP(i,h))}}}return B.V}}
A.pf.prototype={
$1(a){var s
t.U.a(a)
s=this.a
return a.b===s||a.c===s},
$S:95}
A.ob.prototype={}
A.rD.prototype={
hP(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a8(s,new A.rE())}else s=!1
return s}}
A.rE.prototype={
$1(a){return t.fW.a(a).w},
$S:27}
A.p3.prototype={
mo(a){var s=this.e,r=A.B(s)
return new A.F(s,r.i("l(1)").a(new A.p6(a)),r.i("F<1>"))},
cB(a){return B.a.b_(this.d,new A.p4(a),new A.p5(a))},
dZ(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
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
n=a6.cB(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.Bk()
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
a4=g.he(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.j(a7+m+" escapes "+f.a))}}}
A.p6.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:96}
A.p4.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:97}
A.p5.prototype={
$0(){return A.h(A.j("inventory asset missing: "+this.a))},
$S:6}
A.cR.prototype={
gE(){return this.a}}
A.cv.prototype={
he(a,b){var s=this.f.c.b*b,r=a.f
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.pp.prototype={}
A.pn.prototype={}
A.vp.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.po.prototype={
B(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.o(o).i("ab<1>")
n=A.H(new A.ab(o,n),n.i("m.E"))
B.a.W(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dU(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fh)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.N(0)
for(q=new A.K(r,A.o(r).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.b(B.fA)
s.k(0,n,o)}}}
A.dp.prototype={}
A.p7.prototype={
n3(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t.Q.a(a4)
s=A.c([],t.ea)
for(r=A.h_(a4,a4.r,A.o(a4).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=m.a,k=m.d,j=k.a,i=k.b,k=k.c,h=0;!1;++h){g=n[h]
if(!g.gcJ()||g.gkj())continue
f=g.glU()
e=j+f.a
d=i+f.b
f=k+f.c
c=q.aE(m)
b=j+c.a*0.5-e
a=i+c.b*0.55-d
a0=k+c.c*0.5-f
a1=new A.k(b,a,a0).gt(0)
if(a1>0.0001){a2=1/a1
a3=new A.k(b*a2,a*a2,a0*a2)}else a3=new A.k(0,-1,0)
B.a.l(s,new A.dp(new A.k(e,d,f),a3,16760952,3.8,2.1*this.jF(l)))}}B.a.V(s,new A.p8(a5))
return A.l0(s,0,A.fh(4,"count",t.S),t.A_).bK(0)},
jF(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.p8.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.H(a.a.ao(0,s).gt(0),b.a.ao(0,s).gt(0))},
$S:99}
A.dX.prototype={
v(){return"Floor."+this.b}}
A.dW.prototype={
v(){return"Facing."+this.b}}
A.f2.prototype={
shO(a){this.w=A.Q(a)},
gE(){return this.a}}
A.bZ.prototype={
cb(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aZ(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.aj(a,"roomId","not an endpoint of "+s.a))},
aF(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.aj(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.eY.prototype={
gE(){return this.a}}
A.eT.prototype={
gE(){return this.a}}
A.pa.prototype={
ln(a){return B.a.b_(this.c,new A.pb(a),new A.pc(a))},
n1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.j("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.j("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.n(f,t.fl)
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
if(k.gO(k)||k.gaI().L(0,new A.pd()))throw A.b(A.j("sound emitter "+l+" has no usable cues"))
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
A.pb.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:100}
A.pc.prototype={
$0(){return A.h(A.j("sound emitter missing: "+this.a))},
$S:6}
A.pd.prototype={
$1(a){return B.b.bk(A.p(a)).length===0},
$S:3}
A.cQ.prototype={
gE(){return this.a}}
A.p_.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.aj(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.j7}q=A.c([],t.Fm)
p=B.c.aO(r)+1
o=B.c.aO(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eJ("tick",m))
if(B.d.S(m,3)===0){B.a.l(q,new A.eJ("cuckoo",m))
B.a.l(q,new A.eJ("bell",m))}if(B.d.S(m,6)===0)B.a.l(q,new A.eJ("chime",m))}l.b=b
return q}}
A.eJ.prototype={
gaQ(){return this.b}}
A.p9.prototype={
bV(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.aj(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.j6}q=A.c([],t.op)
for(p=B.c.aO(r)+1;p<=B.c.aO(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.i_)
if(B.d.S(o,3)===1)B.a.l(q,B.i1)
if(B.d.S(o,8)===5)B.a.l(q,B.i4)
if(B.d.S(o,5)===0)B.a.l(q,B.i0)
if(B.d.S(o,7)===3)B.a.l(q,B.i5)
if(n===1)B.a.l(q,B.i2)
if(B.d.S(o,6)===4)B.a.l(q,B.i3)}m.b=b
return q}}
A.cP.prototype={}
A.vo.prototype={
$1(a){return typeof a!="number"},
$S:7}
A.pe.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.M(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.M(["lit",o.a,"examined",o.b],m,r))}return A.M(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,l=0;!1;++l)e.l(0,o[l].gE())
o=f.a
n=!0
if(A.xq(new A.ab(o,A.o(o).i("ab<1>")),d)){d=f.b
if(A.xq(new A.ab(d,A.o(d).i("ab<1>")),r)){d=f.c
e=!A.xq(new A.ab(d,A.o(d).i("ab<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fW)
e=f.d
if(e<0||e>2)A.h(B.fp)
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
g.scJ(j.a)
g.slt(j.b)}}}}
A.i3.prototype={
B(){return A.M(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hS.prototype={
B(){return A.M(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bh.prototype={
gE(){return this.a}}
A.o6.prototype={
$1(a){return this.a.q(0,A.p(a))},
$S:3}
A.e_.prototype={
v(){return"Hand."+this.b}}
A.tf.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
ef(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kj.prototype={
B(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.z[r]
o.k(0,q,s.h(0,q))}return A.M(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.I(B.z,t.oI.a(new A.pJ(this)),t.jT).Y(0," \xb7 ")}}
A.pI.prototype={
$2(a,b){return new A.N(A.p(a),A.p(b),t.q)},
$S:101}
A.pJ.prototype={
$1(a){return this.a.a.h(0,A.p(a))},
$S:102}
A.bT.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.M(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gag(){return this.b}}
A.ps.prototype={
bY(a){t.G.a(a)
return a.a===5&&B.a.a8(B.z,new A.pz(this,a))},
er(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bY(b))return null
s=this.e++
r=new A.bT(s,a,A.c([A.pH(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dB(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bY(b))return!1
B.a.l(s.c,A.pH(b,c,B.ay))
return!0},
k0(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bY(b))return!1
s.r=A.pH(b,0,B.cK)
return!0},
hG(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.N(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
n2(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.H(n,A.o(n).c)
B.a.W(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.af(r,r.r,r.e,A.o(r).i("af<2>"));r.m();)s.push(r.d.B())
return A.M(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pz.prototype={
$1(a){var s
A.p(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.hp.prototype={
B(){var s,r=this,q=A.n(t.N,t.X)
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
A.np.prototype={
cg(a){var s,r,q=a==null?null:B.b.bk(a).toLowerCase()
if(q==null||q.length===0)return B.e6
if(q==="pixeldart")return B.e5
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hp(B.aE,!1,!0,r,s,s?r:null)}}
A.qo.prototype={}
A.qn.prototype={
gfJ(){var s,r,q="pixeldart",p=this.b,o=p.au
if(o){s=p.w
s===$&&A.q()
s=s.a.b}else s="safe"
p=A.yN(q,o?p.gko():B.jq,!1,s)
r=p
if(r==null)r=A.yN(q,A.c([],t.s),!1,"safe")
p=A.yM(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
el(a){var s,r,q,p,o,n,m,l,k,j=this,i="pixeldart backend is not ready",h=j.b,g=j.d
if(g===B.bw){if(h.au){s=h.d
s===$&&A.q()
s=s.a.b===B.S}else s=!1
s=!s
if(s){j.d=B.M;++h.x2
g=B.M}if(g===B.bw)return}if(g!==B.M)A.h(A.j(i))
B.i.ab(A.M(["backend","pixeldart","interpolation",0,"facts",A.ug(a.a.a)],t.N,t.X),null)
g=h.au
if(g){s=h.d
s===$&&A.q()
s=s.a.b===B.S}else s=!1
if(s){if(j.d!==B.M)A.h(A.j(i))
j.d=B.bw
return}if(!g)A.h(A.j("Pixeldart runtime is not initialized"))
g=h.p3
if(g==null){g=new Float32Array(16)
g[0]=1
g[5]=1
g[10]=1
g[15]=1
r=new A.dm(g)
g=$.xU()
s=g.b
q=g.c
p=A.wA(h.b/h.c,q,g.a,s)
q=new A.fp(r,p,p.aB(0,r),B.al,B.mj,s,q,h.b/h.c)
g=q}s=h.p4
q=h.R8
o=h.y1++
n=h.x1
m=new A.rH()
$.xQ()
l=$.qv.$0()
m.a=l
m.b=null
l=h.e
l===$&&A.q()
k=h.f
k===$&&A.q()
l.kf(k,new A.ok(g,s,q,o,n))
h.ry=h.e.lp()
g=$.qv.$0()
m.b=g
h.to=m.glm()/1000},
fS(a){if(this.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
B.i.ab(A.M(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qp.prototype={
kp(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c5.cg(a)
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
A.ky.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qq.prototype={
B(){var s=this
return A.M(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qr.prototype={
fD(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.a_===s){r=new A.fb(1080,1920)
break A}if(B.L===s){r=new A.fb(720,1280)
break A}r=new A.fb(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.c.aH(r.b*q)
q=B.c.aH(r.a*q)
o=B.c.D(a5/p,0,1)
n=B.c.D(a4/q,0,1)
m=o<n?o:n
r=this.eu(B.c.aH(p*m),320,a5)
q=this.eu(B.c.aH(q*m),180,a4)
l=s===B.a_
k=s===B.L
j=a1.b.q(0,"shadows")&&a3!=="off"
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
break E}g=a0==="linear"?B.eG:B.aS
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.eR
break F}if("errors"===b){c=B.cc
break F}c=B.eS
break F}return new A.i8(a1,r,q,h,g,i,p,f,e,d,c)},
eu(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.ki.prototype={}
A.qx.prototype={
n_(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b3
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b3
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.ki(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aK()*0.1,0.9+s.aK()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aK()*0.15
p.e=(0.6+s.aK()*2.8)/0.343
p.b=16-b*11+s.aK()*6}}}
A.kL.prototype={
v(){return"RendererBackendKind."+this.b}}
A.fQ.prototype={
v(){return"RendererBackendState."+this.b}}
A.qK.prototype={}
A.kM.prototype={
gE(){return this.a}}
A.qJ.prototype={
ic(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
B(){var s,r,q,p=this,o=A.n(t.N,t.z)
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
A.qL.prototype={
cT(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fX(a,b){var s,r,q,p,o
for(s=A.ag(this.a.d,t.rO),r=A.B(s).i("eS<1>"),s=new A.eS(s,r),s=new A.aC(s,s.gt(0),r.i("aC<a1.E>")),r=r.i("a1.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.ry.prototype={}
A.cC.prototype={
v(){return"ShaderDebugMode."+this.b},
gle(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.du.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.ea.prototype={
gfQ(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aM(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aM(r,2)
else return B.c.aM(r,3)}},
gE(){return this.a}}
A.rz.prototype={
gbj(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bi,p)
s=B.bi[p]
p=this.f
p===$&&A.q()
r=A.B(p)
q=r.i("F<1>")
p=A.H(new A.F(p,r.i("l(1)").a(new A.rC(s)),q),q.i("m.E"))
return p},
gcE(){var s,r=this.gbj(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mC(){var s,r,q,p,o
if(this.b===4)this.e=B.aH
else for(s=this.gbj(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mA(){var s,r,q,p
this.e=B.aH
s=this.f
s===$&&A.q()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
G(a){var s,r,q=this.f
q===$&&A.q()
s=A.B(q)
r=A.bw(new A.F(q,s.i("l(1)").a(new A.rB(a)),s.i("F<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aS(a){var s,r,q=this.f
q===$&&A.q()
s=A.B(q)
r=A.bw(new A.F(q,s.i("l(1)").a(new A.rA(a)),s.i("F<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rC.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:21}
A.rB.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.rA.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.bM.prototype={
v(){return"SleepQuality."+this.b}}
A.bC.prototype={
v(){return"SleepLocation."+this.b}}
A.fV.prototype={
gag(){return this.a}}
A.nZ.prototype={
eh(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.M(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.M(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.o_.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:104}
A.o0.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:105}
A.ka.prototype={
v(){return"InteractionType."+this.b}}
A.f4.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.tm.prototype={}
A.f3.prototype={}
A.jE.prototype={}
A.pg.prototype={}
A.pk.prototype={
e5(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.V(p,new A.pl())
return p},
kw(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mY
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga2(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gZ(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.f3(B.aJ,r)
s=r.a
o=B.a.gZ(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gZ(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.f3(B.dW,r)
return new A.f3(B.bR,r)},
jv(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jE(e,!1,B.mX,null)
s=p.d===c
r=this.kw(p,d)
q.n2(e)
return new A.jE(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gZ(p.c).p(0)+'".':null)},
l6(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.pg(B.a.gZ(s.c).p(0)+" but "+A.v(a.f))}}
A.pl.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:12}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qO.prototype={}
A.cW.prototype={}
A.qP.prototype={
gei(){var s=B.bm.h(0,this.a)
return s==null?0:s},
hX(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.B)s=q.e
else s=!0
if(s)return B.cW
r=A.xa(b)
s=q.c
B.a.N(s)
B.a.M(s,r)
B.a.N(q.d)
q.a=B.aF
q.b=0
q.e=!1
return A.c([B.ez],t.xB)},
du(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.B||a===0)return B.cW
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.B))break
A:{q=l.a
p=B.bm.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a0)l.jS(s)
p=l.b
o=B.bm.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cW())
if(q===B.a0){l.a=B.B
l.b=0
l.e=!0
B.a.l(s,B.ey)}else{p=q.a+1
if(!(p<7))return A.d(B.cU,p)
l.a=B.cU[p]
l.b=0
B.a.l(s,new A.cW())}}}return A.ag(s,t.F3)},
B(){var s=this,r=t.N
return A.M(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ag(s.c,r),"extinguishedMantles",A.ag(s.d,r),"completed",s.e],r,t.z)},
jS(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aO(l.b/l.gei()*A.ag(s,r).length),0,A.ag(s,r).length)
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
A.k_.prototype={
gem(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gl8(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
eg(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.V("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
hd(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.V("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.f1.prototype={
B(){var s=this
return A.M(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)},
gag(){return this.a}}
A.tg.prototype={
fO(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aY(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.v1.prototype={
$0(){var s,r,q=this.a,p=q===2||q===5||q===8||q===11||q===14||q===16||q===18||q===19||q===20
if(p){s=(this.b^q*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
r=B.c.D(B.c.D(0.25+0.65*Math.pow(Math.sin(q*3.141592653589793/7),2)*(0.6+0.4*(q/21)),0.2,1)+(((s^s>>>16)&255)/255-0.5)*0.08,0.2,0.98)
if(q===20)r=0.98}else r=0
return new A.f1(q,p,A.Ay(B.c.aM(r,2)),A.Ay(B.c.aM(12-(q-1)*0.11000000000000001,2)))},
$S:106}
A.ou.prototype={
lF(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.de(a.a+":"+a.c),q=t.E,r=new A.aC(r,r.gt(0),q.i("aC<Y.E>")),q=q.i("Y.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.c.aH((l+(k-l)*(s/2147483647))*60)
n=B.c.fB(l*60)
m=B.c.aO(k*60)
return(n<=m?B.d.D(o,n,m):B.d.D(o,0,1439))/60},
ls(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
kn(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.ov.prototype={
$2(a,b){var s,r=B.d.H(a.gag(),b.gag())
if(r!==0)return r
s=B.c.H(a.gaQ(),b.gaQ())
return s!==0?s:J.xW(a.gE(),b.gE())},
$S:32}
A.jY.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.ls(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
if(s.lF(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
glb(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return s},
B(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return A.M(["delivered",s],t.N,t.z)}}
A.ot.prototype={
$1(a){return this.a.kn(A.p(a))!=null},
$S:3}
A.q1.prototype={
aP(a,b){var s=this.b
if(s.R(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
lE(a){return this.aP(a,null)},
k8(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("K<1,2>")
k=A.H(new A.K(k,j),j.i("m.E"))
B.a.V(k,new A.q3())
j=t.N
k=A.wz(k,j,j)
s=this.b
r=A.o(s).i("K<1,2>")
s=A.H(new A.K(s,r),r.i("m.E"))
B.a.V(s,new A.q4())
s=A.wz(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.o(q).i("K<1,2>")
q=A.H(new A.K(q,p),p.i("m.E"))
B.a.V(q,new A.q5())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.M(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.M(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.q3.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q4.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q5.prototype={
$2(a,b){var s=t.gJ
return B.b.H(s.a(a).a,s.a(b).a)},
$S:109}
A.cK.prototype={
B(){var s=this
return A.M(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.by.prototype={
B(){var s=this
return A.M(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.ql.prototype={
e3(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aP("ashworth.compact","accepted"))B.a.l(r,B.kA)
if(q.aP(s,"taken"))B.a.l(r,B.kE)
else if(q.aP(s,"left"))B.a.l(r,B.kB)
if(q.aP("sylvia.certificate","granted"))B.a.l(r,B.kD)
if(q.aP("residue.coal","cellar"))B.a.l(r,B.kz)
if(q.aP("telegram.08","read"))B.a.l(r,B.ky)
if(q.aP("truth.shawl","home"))B.a.l(r,B.kx)
if(q.aP("sowerby.paraffin","received"))B.a.l(r,B.kC)
if(q.aP("inspector.proclamation","acknowledged"))B.a.l(r,B.kw)
return r},
ho(a){var s=this.e3(),r=A.B(s),q=r.i("F<1>")
s=A.H(new A.F(s,r.i("l(1)").a(new A.qm(a)),q),q.i("m.E"))
return s}}
A.qm.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:41}
A.rJ.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fX(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jW(q,r.b))}s=A.fX(e.r)
q=A.fX(e.w)
p=A.fX(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.K(n,A.o(n).i("K<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gn()
j.push(A.M(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.K(m,A.o(m).i("K<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.n(c,b)
for(m=e.ax,m=new A.K(m,A.o(m).i("K<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.M(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jW(a,b){var s,r=A.fX(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fX(q.bG(0,new A.rK(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fX(s.bG(0,new A.rL(),t.S,t.z)))
return r}}
A.rK.prototype={
$2(a,b){return new A.N(A.f(a),t.BX.a(b).B(),t.pr)},
$S:111}
A.rL.prototype={
$2(a,b){return new A.N(A.f(a),t.vw.a(b).B(),t.pr)},
$S:112}
A.f0.prototype={
B(){return A.M(["hour",this.a,"order",this.b],t.N,t.S)},
gaQ(){return this.a}}
A.f_.prototype={
B(){return A.M(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaQ(){return this.a}}
A.iq.prototype={
B(){var s=t.N
return A.M(["field",this.a,"value",this.b],s,s)}}
A.lk.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.M(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gag(){return this.c}}
A.eQ.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gX(s))q.k(0,"effects",s)
return q},
gE(){return this.a}}
A.d1.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gX(s))q.k(0,"when",s)
return q},
gE(){return this.a}}
A.rI.prototype={}
A.ic.prototype={
gE(){return this.a},
gag(){return this.c},
gaQ(){return this.d}}
A.qV.prototype={
$1(a){return typeof a!="string"},
$S:7}
A.qW.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.V("screenplay event "+a+" is invalid",null,null))
return s},
$S:24}
A.kS.prototype={
gE(){return this.a},
gag(){return this.b}}
A.kP.prototype={}
A.kQ.prototype={
gE(){return this.a}}
A.kR.prototype={
gE(){return this.a}}
A.rM.prototype={
bs(){var s=0,r=A.bu(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bs=A.bv(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.ai(A.b0(A.a(A.a(i.window).fetch("res/text.json")),h),$async$bs)
case 6:n=a1
g=t.N
s=7
return A.ai(A.b0(A.a(n.text()),g),$async$bs)
case 7:m=a1
l=A.Gs(m)
f=J.aS(l,"broadcasts")
f.toString
e=t.P
o.a=e.a(f)
f=J.aS(l,"visitors")
f.toString
o.b=e.a(f)
f=J.aS(l,"vocabulary")
f.toString
o.c=e.a(f)
f=J.aS(l,"documents")
f.toString
e.a(f)
f=J.aS(l,"street")
f.toString
e.a(f)
f=J.aS(l,"unverifiables")
f.toString
o.f=e.a(f)
f=J.aS(l,"nights")
f.toString
e.a(f)
f=J.aS(l,"endings")
f.toString
o.w=e.a(f)
f=J.aS(l,"records")
f.toString
o.x=e.a(f)
f=J.aS(l,"cues")
f.toString
e.a(f)
f=J.aS(l,"claims")
f.toString
o.z=e.a(f)
f=t.f
if(f.b(J.aS(l,"reactions"))){d=J.aS(l,"reactions")
if(d==null)d=f.a(d)
d=A.aM(d,g,t.z)}else d=A.n(g,t.z)
o.Q=e.a(d)
if(f.b(J.aS(l,"variants"))){d=J.aS(l,"variants")
if(d==null)d=f.a(d)
d=A.aM(d,g,t.z)}else d=A.n(g,t.z)
o.as=e.a(d)
if(f.b(J.aS(l,"residues"))){d=J.aS(l,"residues")
f=d==null?f.a(d):d
f=A.aM(f,g,t.z)}else f=A.n(g,t.z)
o.at=e.a(f)
s=8
return A.ai(A.b0(A.a(A.a(i.window).fetch("res/story_script.json")),h),$async$bs)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.ai(A.b0(A.a(k.text()),g),$async$bs)
case 11:i=a.Dc(a1)
o.ax=i
o.ay=A.Ci(i)
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
case 5:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$bs,r)},
hn(a){var s,r,q,p=this.a
p===$&&A.q()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cW(0,new A.rN())
r=p.$ti
q=t.N
return A.wz(new A.cy(p,r.i("N<e,e>(1)").a(new A.rO()),r.i("cy<1,N<e,e>>")),q,q)}return null},
e4(a,b){var s=this.hn(a)
return s==null?null:s.h(0,b)},
hr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
k=A.n(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.p(i.b))}B.a.l(p,new A.eQ(A.p(m.h(0,"id")),A.p(m.h(0,"label")),A.p(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.lk(r,a,b,c,d,A.ag(p,t.Y))},
hq(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.q()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.ad(p)||o!==B.c.ad(o))return n
return new A.f0(B.c.ad(p),B.c.ad(o))},
hp(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.q()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.ad(p)||typeof o!="string"||typeof n!="string")return m
return new A.f_(B.c.ad(p),o,n)},
n4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.q()
b4=new A.K(b4,A.o(b4).i("K<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dq(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.p(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hq(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.n(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hp(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.q()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hr(A.p(d.h(0,"visitor")),B.c.ad(A.a6(d.h(0,"day"))),A.p(d.h(0,"tier")),B.c.ad(A.a6(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.q()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.p(r.b))}s=A.p(d.h(0,"id"))
b2.k(0,s,new A.d1(s,A.p(d.h(0,"target")),A.p(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
b4===$&&A.q()
b4=new A.K(b4,A.o(b4).i("K<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.q()
b4=new A.K(b4,A.o(b4).i("K<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.O(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.iq(A.p(a0.h(0,"field")),A.p(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rJ(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.rN.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:114}
A.rO.prototype={
$1(a){t.AC.a(a)
return new A.N(A.p(a.a),A.p(a.b),t.q)},
$S:115}
A.jm.prototype={
bE(a,b,c){var s=B.b.bk(a),r=B.b.bk(c)
if(r.length===0)return""
if(b||this.a===B.bT)return s.length===0?r:s+": "+r
if(this.a===B.bS)return r
return s.length===0?r:s+": "+r},
fP(a,b){return this.bE(a,!1,b)}}
A.wp.prototype={}
A.cI.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dJ.prototype={
bZ(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dJ(q,p,o,n,m)},
kZ(a){var s=null
return this.bZ(s,s,s,a,s)},
l4(a){var s=null
return this.bZ(s,s,s,s,a)},
kV(a){var s=null
return this.bZ(s,s,a,s,s)},
kT(a){var s=null
return this.bZ(s,a,s,s,s)},
kA(a){var s=null
return this.bZ(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.M(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mD.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:116}
A.mB.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:36}
A.mC.prototype={
$0(){return A.h(B.hg)},
$S:6}
A.mO.prototype={
bM(a,b){var s,r=this,q=r.e.fP(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.b3(q)
A.f(A.a(v.G.window).setTimeout(A.zT(new A.mQ(r)),7000))},
b3(a){var s,r,q=this
if(!q.c||B.b.bk(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.f(A.a(v.G.window).setTimeout(A.zT(new A.mP(q,s)),4200))}}
A.mQ.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:118}
A.mP.prototype={
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
A.dK.prototype={
cD(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dK(r,q,p,a==null?s.e:a)},
kR(a){return this.cD(null,null,a,null)},
kH(a){return this.cD(null,a,null,null)},
kX(a){return this.cD(null,null,null,a)},
kG(a){return this.cD(a,null,null,null)},
B(){var s=this
return A.M(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.n0.prototype={
$1$2(a,b,c){return B.a.b_(c.i("m<0>").a(a),new A.n1(b,c),new A.n2(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:119}
A.n1.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.n2.prototype={
$0(){return A.h(A.V("unsupported audio option: "+A.v(this.a),null,null))},
$S:6}
A.nr.prototype={
mZ(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.H.fP(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nu.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ny.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nx.prototype={
$1(a){var s=A.eO(A.p(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.nw.prototype={
$1(a){A.p(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dR.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dS.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gjZ(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bk(s.a).length===0||B.b.bk(s.c).length===0)throw A.b(B.h4)
if(s.e===B.c3&&s.b!==B.c2)throw A.b(B.fB)},
gE(){return this.a}}
A.nA.prototype={
lq(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cY(a,b){if(b<=0){this.f=0
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
this.eO(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eO(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aY(a,b,c,d,e,f,g,h,i){return this.bD(a,b,c,d,e,!0,f,g,h,i)},
lf(a,b,c,d,e,f,g,h,i){return this.bD(a,b,14,c,d,e,f,g,h,i)},
lk(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.q()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ei()
s.bO(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aK()-0.5)*8
l=s.aK()
k=s.aK()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fK(a,b,c,d,e){var s,r,q=this.b
q===$&&A.q()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eN(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eN(0,0,c)
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
li(a,b,c){var s,r,q,p
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
lh(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
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
d=d4.gmR()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.jY(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bq(i,0,new A.nB(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aO((a5+a2-a1)/a2))
d1=d4.f
c7.lq(d1==null?0:d1,c,a6)
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
B.a.l(f,new A.fq("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aY(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fK(!b6||b4,b2,24,c1,b3)
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
B.a.l(c7.d,new A.fq("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aY("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
lg(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
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
lj(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
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
c0.lk(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bi[g]
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
c7.fillText(d0.e.gle().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbj()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aO((a4+52-44)/52))
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
if(e)c0.fK(!0,g+1,20,b1-j+20,b0)
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
c0.lf(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfQ(),c,b0)}else{b5=b3-80-80
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
c7.fillText(a9.gfQ(),b3,b0)}c7.restore()}c7.restore()
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
eO(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.q()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eN(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.q()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jY(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
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
A.nB.prototype={
$2(a,b){var s
A.bp(a)
A.p(b)
s=this.a.b
s===$&&A.q()
return Math.max(a,A.a6(A.a(s.measureText(b)).width))},
$S:120}
A.fu.prototype={
gki(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aG(r)
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
A.bp(r)
q=n.h(0,i)
q.toString
A.bp(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fv(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.bp(r)
q=n.h(0,i)
q.toString
A.bp(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gki()
return A.fv(l,null,m,r,p,o,s,q)},
dA(a){var s=null
return this.bz(a,s,s,s,s,s)},
kN(a){var s=null
return this.bz(s,s,s,a,s,s)},
kO(a){var s=null
return this.bz(s,s,s,s,a,s)},
kK(a){var s=null
return this.bz(s,a,s,s,s,s)},
kL(a){var s=null
return this.bz(s,s,a,s,s,s)},
l5(a){var s=null
return this.bz(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fk)
p=this.r
if(p.gJ().L(0,new A.nQ()))throw A.b(B.h9)
if(p.gJ().L(0,new A.nR()))throw A.b(B.fS)
p=p.gaI()
o=A.o(p)
s=o.i("hB<m.E,e>")
r=s.i("F<m.E>")
q=A.H(new A.F(new A.hB(p,o.i("m<e>(m.E)").a(new A.nS()),s),s.i("l(m.E)").a(new A.nT()),r),r.i("m.E"))
if(A.hR(q,A.B(q).c).a!==q.length)throw A.b(B.fn)},
B(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aA(r.b,!0,p))}return A.M(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nQ.prototype={
$1(a){t.yx.a(a)
return J.wo(a.b,new A.nP(a))},
$S:37}
A.nP.prototype={
$1(a){var s
A.p(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.y7(a)
else s=!1
return s},
$S:3}
A.nR.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.wo(a.b,B.dA.gap(B.dA))},
$S:37}
A.nS.prototype={
$1(a){return t.a.a(a)},
$S:184}
A.nT.prototype={
$1(a){return A.p(a).length!==0},
$S:3}
A.nO.prototype={
$1(a){return typeof a=="string"},
$S:7}
A.dQ.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ex.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dd.prototype={}
A.jF.prototype={
bW(a){var s=this
if(!s.a.r.R(a))return new A.dd(B.c_,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e7},
kq(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.y7(a)){p.c=p.b=null
return new A.dd(B.c1,B.dB.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xX(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dd(B.aP,a+" is already bound to "+s)}return p.ip(a)},
dT(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e8
case 1:s=A.x0(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.xm(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xA(r,k))
m.a=m.a.dA(s)
break
case 0:s=A.x0(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.l0(p,1,null,A.B(p).c)
o=p.$ti
p=new A.aC(p,p.gt(0),o.i("aC<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xA(r,k)}else{r=s.h(0,j)
r.toString
r=A.xm(A.xA(r,k),q)}s.k(0,j,r)
m.a=m.a.dA(s)
break}m.c=m.e=m.d=null
return B.bY},
ip(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.x0(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.xm(r,a))
q.a=q.a.dA(s)
q.b=null
return B.bY}}
A.hw.prototype={
i5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jF(f.w)
s=f.b
s.className=A.p(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.nv(a,B.eh,1)))
A.a(s.appendChild(A.z(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.z(a,"div",c,e)
f.eq(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eq(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d4(a,r,"invertX","Invert horizontal look")
f.d4(a,r,"invertY","Invert vertical look")
f.d4(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.z(a,"div",c,e)
for(p=B.jy.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fv(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mA(l)?"unbound":J.xZ(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dT(a,new A.b3("settings.controls.bind."+m,B.c2,n,h,B.n),new A.nM(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.z(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.z(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.ds()
A.a(s.appendChild(A.dT(a,B.ei,new A.nN(f),e)))},
h3(a){var s=this.x
s===$&&A.q()
if(s.b==null)return
a.preventDefault()
this.eR(this.x.kq(A.p(a.code)))},
eR(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.em:B.n
p=o.Q.h(0,r)
if(p!=null)A.wr(p,q)}n=a.a
if(n===B.aP)o.jJ()
else if(n===B.c0){n=o.x
n===$&&A.q()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.ds()}else{o.d7()
o.ax=null}},
jJ(){var s,r,q,p,o
this.d7()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.iv[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dT(p,new A.b3("settings.controls.resolve."+o,B.D,o,"resolve key binding conflict",B.n),new A.nL(this,q),null)))}},
d7(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
ds(){var s,r,q,p
for(s=this.Q,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.q()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mA(p)?"unbound":J.xZ(p," / ")
r.textContent=q
A.wr(r,B.n)}},
eq(a,b,c,d,e,f){var s,r=A.z(a,"label","setting-row",null)
A.a(r.appendChild(A.z(a,"span",null,d)))
s=A.BE(a,new A.b3("settings.controls."+c,B.ek,d,null,B.n),f,e,new A.nJ(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d4(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.BF(a,new A.b3("settings.controls."+c,B.el,d,null,B.n),!1,new A.nK(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eP(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdM(a){this.f=t.pf.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.nM.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.q()
s=n.bW(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bZ){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wr(q,B.c3)}p.d7()
return null},
$S:0}
A.nN.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nL.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.q()
return s.eR(r.dT(this.b))},
$S:0}
A.nJ.prototype={
$1(a){var s=this.a,r=s.w
s.eP(this.b==="horizontalSensitivity"?r.kL(a):r.l5(a))},
$S:123}
A.nK.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kN(a)
break A}if("invertY"===q){s=r.w.kO(a)
break A}s=r.w.kK(a)
break A}r.eP(s)},
$S:8}
A.nU.prototype={
i6(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.z(s,"h1","journal-title","credits")))
r=A.z(s,"p","credits-body",null)
p.f!==$&&A.aW()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.z(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.z(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.U(new A.nV(p)))
A.a(o.appendChild(q))}}
A.nV.prototype={
$1(a){return this.a.a7()},
$S:2}
A.o2.prototype={
i8(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.z(a,o,"door-speaker",p)
q.b!==$&&A.aW()
q.b=s
r=A.z(a,o,"door-line",p)
q.c!==$&&A.aW()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.z(a,o,"door-choice-status",p)
q.d!==$&&A.aW()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.z(a,o,"door-cite-list",p)
q.f!==$&&A.aW()
q.f=r
s=A.z(a,o,"door-cite-result",p)
q.r!==$&&A.aW()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.z(a,"button","door-continue","continue")
q.e!==$&&A.aW()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.o3(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.U(new A.o4(q,a)))
A.a(A.G(a.body).appendChild(n))},
ec(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.q()
s.textContent=a
s=r.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,b)
s=r.d
s===$&&A.q()
s.textContent=A.ya(B.b5)
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
ed(a,b){var s,r=this,q=r.c
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
hL(a){return this.ed(a,!1)},
hN(a,b){var s,r,q,p,o
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
s.textContent=A.ya(r)},
ee(a,b){var s=this.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.q()
s.textContent=""
s=this.e
s===$&&A.q()
A.a(s.style).display=""},
hK(a,b){var s,r,q,p,o,n
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
n.addEventListener("click",A.U(new A.o5(p,this)))
A.a(s.appendChild(n))}},
fW(){var s,r=this
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
sm3(a){this.w=t.Z.a(a)},
sm2(a){this.x=t.vR.a(a)}}
A.o3.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:39}
A.o4.prototype={
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
for(s=t.m,o=0;o<A.f(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gZ(r).focus()}}else if(m===B.a.gZ(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:126}
A.o5.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:39}
A.o8.prototype={
i9(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.z(s,"h1","journal-title",null)
o.f!==$&&A.aW()
o.f=r
q=A.z(s,"div","ending-copy",null)
o.r!==$&&A.aW()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.z(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.U(new A.o9(o)))
A.a(n.appendChild(p))},
hM(a,b){var s,r,q,p,o,n,m=this
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
sm7(a){this.w=t.Z.a(a)}}
A.o9.prototype={
$1(a){var s=this.a
s.a7()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.oD.prototype={
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
mY(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lC(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fu()
return!0}return!1}if(a==="Space"){s=B.a.dH(l,new A.oE())
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
return!0}}if(B.b.T(a,"Digit")){p=A.dq(B.b.aU(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.dq(B.b.aU(a,6),m)
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
fu(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lD(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fu()
return!0}this.ci(a.b)
return!0},
sm1(a){this.y=t.dt.a(a)},
sm6(a){this.z=t.Z.a(a)}}
A.oE.prototype={
$1(a){A.p(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.oF.prototype={}
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
A.fC.prototype={
aN(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.ws(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
l1(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,s,a,s)},
l0(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,a,s,s)},
kD(a){var s=null
return this.aN(s,s,a,s,s,s,s,s,s,s,s)},
kM(a){var s=null
return this.aN(s,s,s,s,a,s,s,s,s,s,s)},
kU(a){var s=null
return this.aN(s,s,s,s,s,s,a,s,s,s,s)},
l2(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,s,s,a)},
kP(a){var s=null
return this.aN(s,s,s,s,s,a,s,s,s,s,s)},
kC(a){var s=null
return this.aN(s,a,s,s,s,s,s,s,s,s,s)},
kY(a){var s=null
return this.aN(s,s,s,s,s,s,s,a,s,s,s)},
kB(a){var s=null
return this.aN(a,s,s,s,s,s,s,s,s,s,s)},
kI(a){var s=null
return this.aN(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.M(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.oG.prototype={
$1$2(a,b,c){var s
A.Ax(c,t.D,"T","call")
c.i("m<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.V("invalid gameplay setting: "+a,null,null))
return B.a.b_(b,new A.oH(s,c),new A.oI(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:127}
A.oH.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oI.prototype={
$0(){return A.h(A.V("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.ct.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dZ.prototype={
aX(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dZ(s.a,r,q,p,o,n,m,l,k,j,i)},
dz(a){var s=null
return this.aX(a,s,s,s,s,s,s,s,s,s)},
fF(a){var s=null
return this.aX(s,s,a,s,s,s,s,s,s,s)},
fG(a){var s=null
return this.aX(s,s,s,s,s,s,a,s,s,s)},
kQ(a){var s=null
return this.aX(s,s,s,s,a,s,s,s,s,s)},
kW(a){var s=null
return this.aX(s,s,s,s,s,s,s,a,s,s)},
kJ(a){var s=null
return this.aX(s,s,s,a,s,s,s,s,s,s)},
l3(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,s,a)},
kS(a){var s=null
return this.aX(s,s,s,s,s,a,s,s,s,s)},
kF(a){var s=null
return this.aX(s,a,s,s,s,s,s,s,s,s)},
l_(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.je,q))throw A.b(A.V("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.iC,q))throw A.b(A.V("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.ji,q))throw A.b(A.V("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.jb,q))throw A.b(A.V("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.jk,q))throw A.b(A.V("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.jh,q))throw A.b(A.V("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.jj,q))throw A.b(A.V("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.M(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.oT.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:40}
A.oU.prototype={
$0(){return A.h(B.fH)},
$S:6}
A.oV.prototype={
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oM.prototype={}
A.oN.prototype={}
A.hH.prototype={
ia(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.z(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.z(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.z(a,"div","settings-grid",m)
r=t.N
n.bc(a,s,"preset","quality preset",A.M(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.bc(a,s,"renderScale","render scale",A.M(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.bc(a,s,"frameTarget","frame target",A.M(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.bc(a,s,"antialiasing","anti-aliasing",A.M(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.bc(a,s,"textureQuality","texture quality",A.M(["high","High","medium","Medium","low","Low"],r,r))
n.bc(a,s,"outputEncoding","output encoding",A.M(["srgb","sRGB display","linear","Linear light"],r,r))
n.bc(a,s,"diagnosticLevel","renderer diagnostics",A.M(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.bc(a,s,"shadowQuality","shadow allocation",A.M(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.z(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.U(new A.oQ(n)))
r=n.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.z(a,"span",m,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.z(a,"label",k,m)
r=A.a(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.U(new A.oR(n)))
r=n.y
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.z(a,"span",m,"Model package diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(j.appendChild(s))
r=A.z(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.a(j.appendChild(r))
o=A.z(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.U(new A.oS(n)))
A.a(j.appendChild(o))},
bc(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.K(e,A.o(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.oP(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
dj(a){var s
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
sdM(a){this.f=t.CA.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.oQ.prototype={
$1(a){var s=this.a
s.dj(s.Q.fF(A.Q(s.x.checked)))},
$S:1}
A.oR.prototype={
$1(a){var s=this.a
s.dj(s.Q.kQ(A.Q(s.y.checked)))},
$S:1}
A.oS.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a7()},
$S:1}
A.oP.prototype={
$1(a){var s,r=A.p(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.fG(B.a.ah(B.cT,new A.oO(r)))
break A}if("renderScale"===p){s=q.Q.kW(r)
break A}if("frameTarget"===p){s=q.Q.kJ(r)
break A}if("antialiasing"===p){s=q.Q.dz(r)
break A}if("textureQuality"===p){s=q.Q.l3(r)
break A}if("outputEncoding"===p){s=q.Q.kS(r)
break A}if("diagnosticLevel"===p){s=q.Q.kF(r)
break A}if("shadowQuality"===p){s=q.Q.l_(r)
break A}s=q.Q
break A}q.dj(s)},
$S:1}
A.oO.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:40}
A.jn.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.oW.prototype={
hm(a,b,c){if(c)return B.iR
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jt}}
A.oX.prototype={
ib(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.z(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.z(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.z(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.z(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.U(new A.oY(this)))
A.a(p.appendChild(r))}}
A.oY.prototype={
$1(a){return this.a.a7()},
$S:2}
A.pt.prototype={
bH(){var s,r=this
r.i_()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ey(r.CW,s)
r.jy()
r.f6()},
iu(){var s,r=this,q=r.a,p=A.z(q,"div","page-turn",null),o=A.z(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.U(new A.pu(r)))
s=A.z(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.pv(r)))
q=A.z(q,"span","right-day-label",null)
r.Q!==$&&A.aW()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fn(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ey(s.CW+a,r)
s.f6()},
ey(a,b){if(a<1)return 1
if(a>b)return b
return a},
jy(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.q()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.q()
s.textContent=""
for(s=l.w.e5(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=B.a.gZ(o.c).p(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.U(new A.pw(l,o,m)))
A.a(k.appendChild(m))}},
f6(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.q()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("af<2>"),n=new A.af(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.V(r,new A.px())
j.f5(i,r)
i=j.Q
i===$&&A.q()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.q()
s=A.c([],s)
for(r=new A.af(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.V(s,new A.py())
j.f5(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.q()
A.a(i.style).setProperty("width",B.c.aM(k*100,1)+"%")},
f5(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.iV(b[r])))},
iV(a){var s,r,q,p,o,n=A.z(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.eW(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.eW(p,!1)
o.className=A.p(o.className)+" margin"
A.a(n.appendChild(o))}return n},
eW(a,b){var s=b?"hand-line struck":"hand-line",r=A.z(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pu.prototype={
$1(a){return this.a.fn(-1)},
$S:2}
A.pv.prototype={
$1(a){return this.a.fn(1)},
$S:2}
A.pw.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.px.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.py.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.cU.prototype={}
A.fq.prototype={
gE(){return this.a}}
A.qa.prototype={
gmR(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.I(s,0,B.c.ad(B.c.D(r*q,0,r)))}}
A.i2.prototype={
aV(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.G(this.a.body).appendChild(s))},
bH(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.p(n.className),"open"))return
s=$.qb
if(s!=null&&s!==o)s.a7()
$.qb=o
r=o.a
o.d=A.G(r.activeElement)
A.pq(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.U(o.gjq())
o.e=q
r.addEventListener("keydown",q)
p=A.zR(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a7(){var s,r,q=this,p=q.b
if(!B.b.q(A.p(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.qb===q)$.qb=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
h3(a){},
jr(a){A.a(a)
this.h3(a)
if(A.Q(a.defaultPrevented))return
if(A.p(a.code)==="Escape"){a.preventDefault()
this.a7()
return}if(A.p(a.code)==="Tab")this.jP(a)},
jP(a){var s,r=A.zR(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gZ(r).focus()}}else if(s===B.a.gZ(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb1(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e7.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dn.prototype={
B(){var s,r=A.n(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a5(a,b){if(b==null)return!1
return b instanceof A.dn&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e6.prototype={
gfz(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bp},
B(){var s=A.n(t.N,t.X),r=this.a,q=A.B(r),p=q.i("I<1,Z<e,J?>>")
r=A.H(new A.I(r,q.i("Z<e,J?>(1)").a(new A.qg()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.B(r)
p=q.i("I<1,e>")
r=A.H(new A.I(r,q.i("e(1)").a(new A.qh()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.qg.prototype={
$1(a){return t.oP.a(a).B()},
$S:129}
A.qh.prototype={
$1(a){return t.wJ.a(a).b},
$S:130}
A.bY.prototype={}
A.qf.prototype={
h4(a){var s,r=this
if(r.a.gfz())return new A.bY(B.Z,r.a,null)
s=r.a
s=new A.e6(B.jd,s.b,a)
r.a=s
return new A.bY(B.dm,s,"pause.resume")},
kd(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gZ(p)
q=r.a.a
q=B.a.aT(q,0,q.length-1)
p=r.a
p=new A.e6(q,p.b,p.c)
r.a=p
return new A.bY(B.dn,p,s.c)}if(q.gfz()&&r.a.b.length===0)return r.cc()
return new A.bY(B.Z,r.a,null)},
cc(){var s=this.a
if(s.a.length===0)return new A.bY(B.Z,s,null)
if(s.b.length!==0)return new A.bY(B.Z,s,null)
this.a=B.bo
return new A.bY(B.dp,B.bo,s.c)},
mn(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.bY(B.Z,q.a,null)
s=q.a
r=A.H(s.b,t.wJ)
r.push(a)
s=new A.e6(s.a,r,q.a.c)
q.a=s
return new A.bY(B.dm,s,null)},
ld(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.bY(B.Z,o.a,null)
s=o.a
r=s.b
q=A.B(r)
p=q.i("F<1>")
r=A.H(new A.F(r,q.i("l(1)").a(new A.qi(a)),p),p.i("m.E"))
q=o.a.c
r=new A.e6(s.a,r,q)
o.a=r
return new A.bY(B.kv,r,q)},
iO(a){var s
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
A.qi.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:131}
A.cA.prototype={
v(){return"PauseRootAction."+this.b}}
A.qj.prototype={
bm(a,b,c,d){var s=B.jK.h(0,c)
s.toString
A.a(b.appendChild(A.dT(a,new A.b3(s,B.D,d,null,B.n),new A.qk(this,c),null)))},
smi(a){this.f=t.Z.a(a)},
smk(a){this.r=t.Z.a(a)},
sm4(a){this.w=t.Z.a(a)},
smj(a){this.x=t.Z.a(a)},
sma(a){this.y=t.Z.a(a)},
sm5(a){this.z=t.Z.a(a)},
sb6(a){this.Q=t.Z.a(a)}}
A.qk.prototype={
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
A.qw.prototype={
hJ(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.H.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qY.prototype={
ie(a){var s,r,q,p,o,n=this.b
n.className=A.p(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.nv(a,B.eg,1)))
A.a(n.appendChild(A.z(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.z(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iS[r]
p=B.d5.h(0,q)
p.toString
o=B.d4.h(0,q)
o.toString
A.a(s.appendChild(A.dT(a,new A.b3(o,B.D,p,p+" settings",B.n),new A.qZ(this,q),null)))}A.a(s.appendChild(A.dT(a,B.ef,new A.r_(this),null)))
A.a(n.appendChild(s))},
sm0(a){this.f=t.hQ.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.qZ.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.r_.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fU.prototype={
ig(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.v(B.d5.h(0,d))+" settings",a=h.b
a.className=A.p(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.nv(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.n),2)))
A.a(a.appendChild(A.z(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.z(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.ro(h)),p=B.a.gu(B.A),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j8(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.z(a0,"div",e,g)
for(s=s.a(new A.rp(h)),q=B.a.gu(B.A),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jO(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.E)A.a(a.appendChild(h.is(a0)))
if(d===B.F)A.a(a.appendChild(h.ir(a0)))
if(d===B.Y)A.a(a.appendChild(h.it(a0)))
i=A.z(a0,"div",e,g)
for(s=t.pz.a(h.gj2()),q=B.a.gu(B.jf),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dT(a0,new A.b3("settings."+o+".reset."+n,B.D,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.rq(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dT(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.D,"reset all settings","restore all settings to defaults",B.en),new A.rr(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dT(a0,new A.b3("settings."+(d==null?f:d)+".back",B.D,"return","return to settings categories",B.n),new A.rs(h),g)))},
ir(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.z(a,"div","settings-grid",j),f=k.d3(a,g,"reducedMotion","reduced motion (system default)"),e=k.d3(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d3(a,g,"captions","non-speech captions"),c=A.z(a,"label",h,j)
A.a(c.appendChild(A.z(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.U(new A.rg(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.z(a,"label",h,j)
A.a(r.appendChild(A.z(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bg[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.U(new A.rh(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.z(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.U(new A.ri(k)))
A.a(g.appendChild(l))
k.ok.M(0,A.M(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d3(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.r0(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
e8(a){var s,r
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
s.value=B.c.p(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a7:r).b}},
it(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.z(a,"div","settings-grid",l)
m.bb(a,g,"interactionMode","interaction mode",B.bf,t.bK)
m.bb(a,g,"promptDensity","prompt density",B.bj,t.dn)
m.bb(a,g,"textPacing","text pacing",B.bh,t.j_)
m.bb(a,g,"journalLayout","journal layout",B.ba,t.gm)
m.bb(a,g,k,k,B.b4,t.aJ)
m.bb(a,g,"saveFeedback","save feedback",B.bb,t.mx)
m.bb(a,g,"focusLossBehavior","when the window loses focus",B.aA,t.x)
m.bb(a,g,"clockFormat","clock format",B.b7,t.vS)
s=A.z(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.U(new A.rj(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.z(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.U(new A.rk(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.z(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.z(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.U(new A.rl(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.z(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bb(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Ax(f,t.D,"T","_addGameplaySelect")
f.i("E<0>").a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.U(new A.re(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
is(a){var s,r,q=this,p=A.z(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.be[s].b
n.k(0,r,r)}q.ck(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.b9[s].b
n.k(0,r,r)}q.ck(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.b8[s].b
n.k(0,r,r)}q.ck(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.b6[s].b
o.k(0,n,n)}q.ck(a,p,"ducking","voice intelligibility",o)
return p},
ck(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.K(e,A.o(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.r5(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
hu(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eU(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.X===r){s=a.c===B.aG
break A}if(B.F===r){s=a.c===B.a2
break A}if(B.E===r){s=a.c===B.C
break A}s=!1
break A}return s},
j3(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.X===s){r=a===B.aG
break A}if(B.F===s){r=a===B.a2
break A}if(B.E===s){r=a===B.C
break A}r=!1
break A}return r},
jO(a,b){var s=this,r=A.z(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.U(new A.rn(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.z(a,"span",null,b.b)))
return r},
j8(a,b,c,d,e){var s,r,q=this,p=A.z(a,"label","setting-row",null),o=A.z(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.v(e)
n.max=A.v(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.z(a,"output",null,"100%")
n.addEventListener("input",A.U(new A.rm(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aP(e,d))
return p},
ea(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kL
r=B.c.D(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aH(r*100)+"%"},
smc(a){this.r=t.DI.a(a)},
sme(a){this.w=t.xl.a(a)},
smd(a){this.x=t.xl.a(a)},
sm8(a){this.y=t.DI.a(a)},
smb(a){this.z=t.xl.a(a)},
smm(a){this.Q=t.xl.a(a)},
smh(a){this.as=t.Ci.a(a)},
smg(a){this.at=t.Z.a(a)},
sb6(a){this.ax=t.Z.a(a)},
sm_(a){this.ay=t.kC.a(a)},
sm9(a){this.ch=t.hq.a(a)},
slZ(a){this.CW=t.Cv.a(a)},
smf(a){this.cx=t.Z.a(a)}}
A.ro.prototype={
$1(a){t.gl.a(a)
return a.d===B.N&&this.a.eU(a)},
$S:16}
A.rp.prototype={
$1(a){t.gl.a(a)
return a.d===B.ah&&this.a.eU(a)},
$S:16}
A.rq.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.rr.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rs.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a7()},
$S:0}
A.rg.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eO(A.p(this.b.value))
r=r.l4(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rh.prototype={
$1(a){var s=this.a,r=s.k4.kZ(B.a.ah(B.bg,new A.rf(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rf.prototype={
$1(a){return t.mq.a(a).b===A.p(this.a.value)},
$S:36}
A.ri.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.r0.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.kV(r)
break A}if("photosensitivitySafe"===p){s=q.k4.kT(r)
break A}if("captions"===p){s=q.k4.kA(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.rj.prototype={
$1(a){var s=this.a,r=s.k3.kD(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rk.prototype={
$1(a){var s=this.a,r=s.k3.l0(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rl.prototype={
$1(a){var s=this.a,r=s.k3.l1(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.re.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kM(B.a.ah(B.bf,new A.r6(r.c)))
break A}if("promptDensity"===p){s=q.k3.kU(B.a.ah(B.bj,new A.r7(r.c)))
break A}if("textPacing"===p){s=q.k3.l2(B.a.ah(B.bh,new A.r8(r.c)))
break A}if("journalLayout"===p){s=q.k3.kP(B.a.ah(B.ba,new A.r9(r.c)))
break A}if("confirmations"===p){s=q.k3.kC(B.a.ah(B.b4,new A.ra(r.c)))
break A}if("saveFeedback"===p){s=q.k3.kY(B.a.ah(B.bb,new A.rb(r.c)))
break A}if("clockFormat"===p){s=q.k3.kB(B.a.ah(B.b7,new A.rc(r.c)))
break A}s=q.k3.kI(B.a.ah(B.aA,new A.rd(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.r6.prototype={
$1(a){return t.bK.a(a).b===A.p(this.a.value)},
$S:134}
A.r7.prototype={
$1(a){return t.dn.a(a).b===A.p(this.a.value)},
$S:135}
A.r8.prototype={
$1(a){return t.j_.a(a).b===A.p(this.a.value)},
$S:136}
A.r9.prototype={
$1(a){return t.gm.a(a).b===A.p(this.a.value)},
$S:137}
A.ra.prototype={
$1(a){return t.aJ.a(a).b===A.p(this.a.value)},
$S:138}
A.rb.prototype={
$1(a){return t.mx.a(a).b===A.p(this.a.value)},
$S:139}
A.rc.prototype={
$1(a){return t.vS.a(a).b===A.p(this.a.value)},
$S:140}
A.rd.prototype={
$1(a){return t.x.a(a).b===A.p(this.a.value)},
$S:42}
A.r5.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.kR(B.a.ah(B.be,new A.r1(r.c)))
break A}if("dynamicRange"===o){s=p.kH(B.a.ah(B.b9,new A.r2(r.c)))
break A}if("reverb"===o){s=p.kX(B.a.ah(B.b8,new A.r3(r.c)))
break A}s=p.kG(B.a.ah(B.b6,new A.r4(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.r1.prototype={
$1(a){return t.xs.a(a).b===A.p(this.a.value)},
$S:142}
A.r2.prototype={
$1(a){return t.EL.a(a).b===A.p(this.a.value)},
$S:143}
A.r3.prototype={
$1(a){return t.gc.a(a).b===A.p(this.a.value)},
$S:144}
A.r4.prototype={
$1(a){return t.ul.a(a).b===A.p(this.a.value)},
$S:145}
A.rn.prototype={
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
A.rm.prototype={
$1(a){var s,r,q=this,p=A.eO(A.p(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aH(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bB.prototype={
v(){return"SettingCategory."+this.b}}
A.id.prototype={
v(){return"SettingKind."+this.b}}
A.aZ.prototype={
cU(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.V(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.V(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bt(a))throw A.b(A.V(r.a+" must be boolean",q,q))
break}}}
A.rv.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:16}
A.rw.prototype={
$0(){return A.h(A.j("unknown setting: "+this.a))},
$S:6}
A.rt.prototype={
ih(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.ru(s.a).cU(s.b)}},
ce(a){var s=this.b.h(0,a)
return s==null?A.h(A.j("setting missing from profile: "+a)):s},
B(){return A.M(["version",this.a,"values",this.b],t.N,t.K)}}
A.rx.prototype={
mB(a){var s,r,q=A.fH(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dt(q,1)
this.jC(a)},
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jC(a){var s,r,q=A.fH(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dt(q,1)}}
A.rF.prototype={
ii(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.a(l.appendChild(A.z(a,"h2","journal-title","Rest")))
A.a(l.appendChild(A.z(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.z(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.cR[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.cY[o]
m=A.a(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.U(new A.rG(this,q,n)))
A.a(s.appendChild(m))}}A.a(l.appendChild(s))},
sml(a){this.f=t.nf.a(a)}}
A.rG.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a7()},
$S:1}
A.cq.prototype={
gE(){return this.a},
gag(){return this.b},
gaQ(){return this.c}}
A.mL.prototype={
mQ(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.B(s)
q=new A.I(s,r.i("e(1)").a(new A.mN()),r.i("I<1,e>")).b9(0)
r=this.b
r.N(0)
s=J.y_(a,t.N)
p=s.$ti
r.M(0,new A.F(s,p.i("l(m.E)").a(q.gap(q)),p.i("F<m.E>")))},
ll(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mN.prototype={
$1(a){return t.bC.a(a).a},
$S:146}
A.mM.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:147}
A.lh.prototype={
gc_(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lP(a){return this.c.q(0,t.L.a(a))},
dU(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a8(0,g.gky())||!a.a.a8(0,new A.tc(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eX(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aI){m=s.d
if(m<o.length){n=n===B.a5
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ab}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.L(l.f,new A.td(s))
else k=!1
if(k)return!1
j=new A.lg(r,g,A.ag(o,t.AP),B.a5)
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
fw(a){var s=this.a,r=A.o(s).i("ab<1>"),q=r.i("F<m.E>")
s=A.H(new A.F(new A.ab(s,r),r.i("l(m.E)").a(new A.t7(a)),q),q.i("m.E"))
B.a.V(s,new A.t8())
return s},
bW(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mS
s=m.a.h(0,a)
if(s==null)return B.mT
r=B.d.a6(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bP:B.ao
o=p===B.ao&&m.x.q(0,q)&&s.R(B.bQ)?B.bQ:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bP
r=s.h(0,n)
r.toString
m.r=new A.lg(a,n,A.ag(m.eX(a,n,r),t.AP),B.a5)
m.gc_()
r=m.r
r.toString
return new A.lf(r)},
kt(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dV
if(n.d!==B.a5)return B.mQ
n.e=a
s=a===B.ab
n.d=s?B.aI:B.am
r=this.f
q=s?B.dT:B.my
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dy(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dy(B.mB,o,p,a,null))
if(s)this.f7(n)
return new A.ld(n)},
k7(){var s,r=this.r
if(r==null)return B.dV
s=r.d
if(s!==B.am&&s!==B.an)return B.mR
if(this.gc_()!=null&&r.w==null)return new A.b9(new A.bm(B.a6,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.f7(r)
return new A.ip(r,!0)}return new A.ip(r,!1)},
ku(a){var s,r,q=this.r,p=this.gc_(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.mP
o=p.f
s=A.B(o)
r=A.bw(new A.F(o,s.i("l(1)").a(new A.ta(a)),s.i("F<1>")),t.Y)
if(r==null)return B.mU
q.w=r.a
return new A.le(q,p,r)},
kv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbi()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cX
p=J.O(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.jv(!0,!0,o,new A.tm(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dy(B.mA,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fH(B.a.gZ(j.c).a,s,s)
s.M(0,q)
p.k0(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dW)if(k===B.bR){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dy(B.mz,o,p.b,i,l))}}return m},
f7(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eX(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.j9(a,b,r.gn()))
return s},
j9(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.B(p)
s=A.bw(new A.F(p,r.i("l(1)").a(new A.t5(this)),r.i("F<1>")),t.aS)}return s==null?c:new A.c3(q,s.c,c.c)},
shW(a){this.x=t.Q.a(a)}}
A.tc.prototype={
$1(a){var s=this.a.a
return new A.ab(s,A.o(s).i("ab<1>")).L(0,new A.tb(A.p(a)))},
$S:3}
A.tb.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:23}
A.td.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.t7.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:23}
A.t8.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:149}
A.ta.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.t9.prototype={
$0(){return A.c([],t.jV)},
$S:150}
A.t5.prototype={
$1(a){return t.aS.a(a).d.gJ().a8(0,new A.t4(this.a))},
$S:151}
A.t4.prototype={
$1(a){t.q.a(a)
return this.a.y.aP(a.a,a.b)},
$S:152}
A.t6.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:153}
A.li.prototype={}
A.lN.prototype={}
A.vz.prototype={
$1(a){return B.b.T(A.p(a),"off.")},
$S:3}
A.bJ.prototype={
v(){return"DoorChoice."+this.b}}
A.c1.prototype={
v(){return"VisitPhase."+this.b}}
A.c2.prototype={
v(){return"VisitTier."+this.b}}
A.ee.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dy.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gag(){return this.c}}
A.d0.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bm.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.bm&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c3.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.c3&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.M(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gag(){return this.b},
gaQ(){return this.c}}
A.lj.prototype={
B(){var s,r,q,p=this.a
p=A.H(p,A.o(p).c)
B.a.W(p)
s=this.b
r=A.o(s)
q=r.i("df<1,Z<e,@>>")
s=A.H(new A.df(s,r.i("Z<e,@>(1)").a(new A.t3()),q),q.i("m.E"))
r=this.c
return A.M(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.t3.prototype={
$1(a){return t.L.a(a).B()},
$S:154}
A.jo.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
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
A.mI.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:155}
A.mJ.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:156}
A.mK.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:157}
A.lg.prototype={
gbi(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.te.prototype={}
A.b9.prototype={}
A.lf.prototype={}
A.ld.prototype={}
A.ip.prototype={}
A.le.prototype={}
A.h1.prototype={}
A.lQ.prototype={
gko(){var s,r
if(!this.au)return B.m
s=this.r
s===$&&A.q()
r=this.w
r===$&&A.q()
return B.ex.kp(s,r)},
glz(){var s="shadowCaster",r=this.ry
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.h5(s).a+";shadowTriangles="+r.h5(s).b+";frameMs="+B.c.aM(this.to,3)},
gly(){var s=this.ry
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.to<=100},
lH(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.hb()
l.r=k
k=B.c5.ht(k)
l.w=k
q=l.b
p=l.c
s=new A.l1(q,p,q,p)
o=A.yS(l.d.a)
l.e=o
try{o.fZ(l.iJ(k,q,p),s)}catch(n){r=A.ak(n)
k=l.w
if(k===B.af)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.v(r)
l.w=B.af
k=A.yS(l.d.a)
k.fZ(B.l5,s)
l.e=k}k=l.e
k.bQ()
m=A.D1(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c2=l.b
l.c3=l.c
l.eI()
l.lu=A.CL(!0,!0,!0)
l.au=!0},
cT(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.au){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c4!==a||r.c5!==b)r.c5=r.c4=null
s=r.e
s===$&&A.q()
s.bQ()
new A.l1(a,b,a,b).C()
if(r.cF==null)r.cF=r.bP()},
bP(){var s=0,r=A.bu(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bP=A.bv(function(a,b){if(a===1){p.push(b)
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
return A.ai(A.uY(i,B.c8.fD("auto","full","srgb",h,"auto","profile",A.f(l),g)),$async$bP)
case 8:n.c2=m
n.c3=l
n.c5=n.c4=null
A.je()
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
n.cF=null
i=n.c4
h=n.b
j=i===h&&n.c5===n.c
if(!j)i=n.c2!==h||n.c3!==n.c
else i=!1
if(i)n.cF=n.bP()
s=o.pop()
break
case 5:return A.br(null,r)
case 1:return A.bq(p.at(-1),r)}})
return A.bs($async$bP,r)},
eF(a,b,c,d,e,f,g,h){return B.c8.fD(d,e,f,a,g,h,c,b)},
iJ(a,b,c){return this.eF(a,b,c,"auto","full","srgb","auto","profile")},
eI(){var s,r,q,p=this.w
p===$&&A.q()
s=p.a
A:{p=B.a_===s
if(p){r=7
break A}if(B.L===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.L===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.h(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pD(r,p,A.a_(q),A.a_(q),A.n(q,t.i))},
cA(a){var s=0,r=A.bu(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cA=A.bv(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.au){s=1
break}switch(a.b.a){case 0:i=B.ds
break
case 2:i=B.af
break
case 1:i=B.dr
break
case 3:i=n.w
i===$&&A.q()
break
default:i=null}m=i
i=n.w
i===$&&A.q()
l=i
k=n.eF(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.q()
s=7
return A.ai(A.uY(i,t.lg.a(k)),$async$cA)
case 7:n.w=t.xK.a(m)
n.eI()
n.c2=n.b
n.c3=n.c
n.x=null
A.je()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ak(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.v(j)
A.je()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$cA,r)},
kc(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.au||b4.Q.length!==0)return
b4.fL=c0
s=b4.k1
r=b4.e
r===$&&A.q()
s.k(0,b6,r.gb8().dQ(8,"texture:wall-plaster",!0,256,B.aZ,256))
s.k(0,b7,b4.e.gb8().dQ(8,"texture:grime",!0,512,B.aZ,512))
for(q=0;q<2;++q){p=B.ju[q]
r=b4.e.w
if(r==null)r=A.h(A.j(b8))
s.k(0,p,r.dQ(8,"texture:"+p,!0,256,B.aZ,256))}b4.dr()
b4.ct()
b4.p2=b4.jz(A.pQ(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){i=r[q]
h=A.n(l,j)
for(g=A.M(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cx(g,g.r,g.e,A.o(g).i("cx<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bk.h(0,c)
if(b==null)A.h(A.j("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pQ(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.h(A.j(b8))
if(a0.x)A.h(A.j(b9))
c.C()
a1=a0.b.a.aC(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iW[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dl(a2)
j=b4.dl(a2)
l=A.pQ(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dl(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.h(A.j(b8)):j
if(n.x)A.h(A.j(b9))
l.C()
a1=n.b.a.aC(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.ct()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b4.j4(c0,r[q])
b4.jw(c0)
$.y.j().setAttribute("data-renderer-house-model-scale",B.c.aM(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.u)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eL(c0,i,a4)
g=b4.e.w
if(g==null)g=A.h(A.j(b8))
f=a4.a
if(g.x)A.h(A.j(b9))
e=g.a
a5.C()
a1=e.b.aC(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bg(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bA(a1,e,B.u,0,B.R,B.a9,!0,!0,0,b5)
e=b4.f
e===$&&A.q()
B.u.C()
a=e.a
a0=a.$ti
a.a_(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gaq()
a0=A.B(c)
A.b1(new A.I(c,a0.i("L(1)").a(a.gaA()),a0.i("I<1,L>")))
n.k(0,f,new A.iI(f,g,e.b.c0(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.u)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.js(i,a4.aZ(f),a4.aF(f),a4.aF(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.tY(a4))
a=b4.e.w
if(a==null)a=A.h(A.j(b8))
if(a.x)A.h(A.j(b9))
a0=a.a
e.C()
a1=a0.b.aC(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bg(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bA(a1,e,B.u,0,B.R,B.a9,!0,!0,0,b5)
e=b4.f
e===$&&A.q()
B.u.C()
a=e.a
a0=a.$ti
a.a_(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.u.a9()
a=a.gaq()
a7=A.B(a)
A.b1(new A.I(a,a7.i("L(1)").a(a0.gaA()),a7.i("I<1,L>")))
B.a.l(o,new A.lP(f,e.b.c0(a8),a8,c))}for(r=A.GX(A.Gk(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.dh(e)
a0=b4.dh(e)
a=A.pQ(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.dh(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.h(A.j(b8)):a0
if(c.x)A.h(A.j(b9))
a.C()
a1=c.b.a.aC(a,b5)
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
a1=a7.b.aC(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bg(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ag.q(0,a0))A.h(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bA(a1,b,B.u,-1,B.R,B.a9,B.lu.q(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.q()
B.u.C()
c=e.a
a=c.$ti
c.a_(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gaq()
a0=A.B(c)
A.b1(new A.I(c,a0.i("L(1)").a(a.gaA()),a0.i("I<1,L>")))
j.k(0,b2,e.b.c0(b3))}},
hw(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ag(a8.e,t.fl)
if(!a5.au)return
for(s=a5.ch,r=new A.K(s,A.o(s).i("K<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.q()
o.b.b7(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.q()
p=p.w
if(p==null)p=A.h(A.j(a6))
o=n.a
if(p.x)A.h(A.j(a7))
p.a.b7(o)
p.f.a4(0,o)}}s.N(0)
q.N(0)
r=a5.cx
B.a.N(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=j.c
h=B.b.q(i.toLowerCase(),"stair")
if(h)continue
h=j.r
h=h!=="story"&&h!=="architecture"
if(h)continue
h=a5.fL
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cB(i)
i=a5.e
i===$&&A.q()
i=i.w
if(i==null)i=A.h(A.j(a6))
h=a5.j7(f,j,m)
e=j.a
if(i.x)A.h(A.j(a7))
d=i.a
h.C()
c=d.b.aC(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bg(h))
i.f.l(0,c)
i=j.f
h=i.a
a=B.a4.gaw()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=f.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=g.d
i=new A.l5(new A.L(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kI(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bA(c,a2,i,-1,B.R,B.a9,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.q()
i.C()
a2=d.a
h=a2.$ti
a2.a_(h.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.d(a2,b)
a4=a2[b].c
h=(a4==null?h.y[1].a(a4):a4).d
i=i.a9()
h=h.gaq()
b=A.B(h)
A.b1(new A.I(h,b.i("L(1)").a(i.gaA()),b.i("I<1,L>")))
s.k(0,e,d.b.c0(n))}$.y.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hH(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aN([s],r)
for(p=c1.aL(s),o=J.O(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cb(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.K(b9,A.o(b9).i("K<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aG(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bU(i[f],k)
d=b8.f
d===$&&A.q()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a_(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gaq()
a0=A.B(a)
A.b1(new A.I(a,a0.i("L(1)").a(b.gaA()),a0.i("I<1,L>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a_(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb5(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.u)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.q()
o=b8.bU(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a_(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaq()
g=A.B(i)
A.b1(new A.I(i,g.i("L(1)").a(n.gaA()),g.i("I<1,L>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a_(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb5(o)}b9=b8.fr
s=A.o(b9).i("ab<1>")
s=A.H(new A.ab(b9,s),s.i("m.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.u)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bU(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.q()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a_(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a9()
g=g.gaq()
d=A.B(g)
A.b1(new A.I(g,d.i("L(1)").a(i.gaA()),d.i("I<1,L>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a_(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb5(e)
b9.k(0,a5.a,a5.kE(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.q()
i=b8.bU(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a_(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.d(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.a9()
d=d.gaq()
c=A.B(d)
A.b1(new A.I(d,c.i("L(1)").a(g.gaA()),c.i("I<1,L>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a_(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb5(i)}a9=new A.jU().ks(c2)
b9=$.y.j()
s=A.H(a9,A.o(a9).c)
B.a.W(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Y(s,","))
b9=b8.dx
r=new A.jU().fN(new A.tZ(b8),new A.ab(b9,A.o(b9).i("ab<1>")),a9,r)
b0=A.fI(r,r.$ti.i("m.E"))
b9=b8.db
s=A.o(b9).i("ab<1>")
s=A.H(new A.ab(b9,s),s.i("m.E"))
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
b6=b0.q(0,b4)
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
i.a_(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaq()
g=A.B(i)
A.b1(new A.I(i,g.i("L(1)").a(n.gaA()),g.i("I<1,L>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a_(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb5(e)
b9.k(0,b4,e)}$.y.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.y.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("df<1,e>")
b7=A.H(new A.df(b0,b9.i("e(1)").a(new A.u_(b8)),s),s.i("m.E"))
B.a.W(b7)
$.y.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.Y(b7,","))},
cR(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.au)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f9(b0,n)
l=J.aG(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.q()
d=d.w
if(d==null)d=A.h(A.j(a8))
c=a7.eY(e.b)
b=g.b
if(d.x)A.h(A.j(a9))
a=d.a
c.C()
a0=a.b.aC(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bg(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bA(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.q()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a_(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gaq()
a3=A.B(b)
A.b1(new A.I(b,a3.i("L(1)").a(d.gaA()),a3.i("I<1,L>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a_(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb5(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a4(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.h(A.j(a8)):a
if(d.x)A.h(A.j(a9))
d.a.b7(a6)
d.f.a4(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.y.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fM+1));++a7.fM},
dP(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gb8().mw(k.eL(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bA(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.q()
n=r.c
p.jX(l)
p.b.dY(n,l)
s.k(0,b,r.fH(l,m))
s=k.y
n=r.d
B.a.a4(s,n)
B.a.l(s,m)
k.e.gb8().mx(n)},
hx(d7,d8,d9,e0,e1,e2,e3,e4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9="time_override",d0="wetness_override",d1="fog_density",d2="fog_height_falloff",d3="rain_override",d4=A.aN([d8],t.N),d5=d7.e,d6=d5.h(0,d8)
if(d6!=null)for(s=d6.a,r=d7.aL(s),q=J.O(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cb(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d5.h(0,o)!=null)d4.l(0,o)}n=new A.p7(d7).n3(d4,d9)
d5=t.jC
m=A.c([],d5)
l=A.c([],d5)
for(k=0;k<n.length;++k){j=n[k]
d5=k===0
s=d5?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.h(A.aj(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.h(A.aj(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.h(A.aj(p,"radius","must be finite and > 0"))
d5=d5?l:m
B.a.l(d5,new A.aT(k,s,j.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d5=c8.fx
d5===$&&A.q()
i=d5.mt(d9,m,l)
d5=A.n(t.S,t.A_)
for(k=0;k<n.length;++k)d5.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.u)(r),++h){g=r[h]
p=g.a
f=d5.h(0,p).a
e=g.d
s.push(new A.kB(p,new A.L(f.a,f.b,f.c),new A.bW(e.a,e.b,e.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.u)(q),++h){g=q[h]
f=g.a
e=d5.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bD(f,new A.L(d.a,d.b,d.c),new A.L(e.a,e.b,e.c),new A.bW(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c8.iv(i,++c8.fy)
d5=$.hn()
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
b1=A.cb(B.kQ,B.bu,b0)
b2=A.cb(B.kS,B.bt,b0)
b3=A.cb(B.kM,B.bv,b0)
b4=0.3+0.5*b0
b5=0.25+0.2*b0}else if(q&&a1<14){b1=B.bu
b2=B.bt
b3=B.bv
b4=0.85
b5=0.45}else if(a1>=14&&a1<a5){b0=(a1-14)/(a5-14)
b1=A.cb(B.bu,B.dt,b0)
b2=A.cb(B.bt,B.dw,b0)
b3=A.cb(B.bv,B.dv,b0)
b4=0.85*(1-b0*0.35)
b5=0.45*(1-b0*0.25)}else if(a1>=a5&&a1<a5+1.5){b0=(a1-a5)/1.5
b1=A.cb(B.dt,B.aC,b0)
b2=A.cb(B.dw,B.aB,b0)
b3=A.cb(B.dv,B.aD,b0)
b4=0.55*(1-b0*0.8)
b5=0.34*(1-b0*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){b0=(a1-q)/1.5
b1=A.cb(B.aC,B.aC,b0)
b2=A.cb(B.aB,B.aB,b0)
b3=A.cb(B.aD,B.aD,b0)
b4=0.11*(1-b0*0.25)
b5=0.16*(1-b0*0.15)}else{b1=B.aC
b2=B.aB
b3=B.aD
b4=0.15
b5=0.18}}if(a2>0){b6=A.cb(b3,B.l_,a2*0.7)
b4*=1-a2*0.35
b5*=1-a2*0.15}else b6=b3
b7=e3?1:0.15
b8=B.c.D(0.3333333333333333,0,1)
b9=B.c.D(a2*0.75+b8*0.25,0,1)
q=$.Bm().a
q.k(0,"pbrRoughnessScale",d5.G("pbr_roughness"))
q.k(0,"pbrMetallicScale",d5.G("pbr_metallic"))
q.k(0,"pbrSpecularMult",d5.G("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d5.G("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d5.G("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d5.G("light_ambient_mult"))
q.k(0,"directLightScale",d5.G("light_direct_mult"))
q.k(0,"ssdoEnabled",d5.aS("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d5.G("shadow_ao_intensity"))
q.k(0,"csmEnabled",d5.aS("shadow_csm_enable"))
q.k(0,"csmHardness",d5.G("shadow_csm_hardness"))
q.k(0,"shadowBias",d5.G("shadow_bias"))
q.k(0,"weatheringEnabled",d5.aS("weathering_enable"))
q.k(0,"normalBumpStrength",d5.G("normal_bump_strength"))
q.k(0,"grimeAccumulation",d5.G("grime_accumulation"))
q.k(0,"wetnessOverride",d5.G(d0))
q.k(0,"fogEnabled",d5.aS("fog_enable"))
q.k(0,"fogDensity",d5.G(d1))
q.k(0,"fogHeightFalloff",d5.G(d2))
q.k(0,"volumetricEnabled",d5.aS("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d5.G("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d5.G("volumetric_scattering"))
q.k(0,"ssrEnabled",d5.aS("ssr_enable"))
q.k(0,"tonemapMode",B.c.ad(d5.G("tonemap_mode")))
q.k(0,"ssssEnabled",d5.aS("ssss_enable"))
q.k(0,"taaEnabled",d5.aS("taa_enable"))
q.k(0,"lensFlareEnabled",d5.aS("lens_flare_enable"))
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
q.k(0,"postQuantizationBits",B.c.ad(d5.G("post_quantization_bits")))
q.k(0,"postVhsChroma",d5.G("post_vhs_chroma"))
q.k(0,"postVhsNoise",d5.G("post_vhs_noise"))
q.k(0,"contactLightBoost",d5.G("light_contact_boost"))
q.k(0,"debugViewMode",d5.e.b)
$.y.j().setAttribute("data-renderer-shader-overrides",B.i.ab(q,null))
if(d5.G(d3)>=0)a0=d5.G(d3)
c8.RG=B.c.D(a0,0,1)
c8.rx=B.c.D(d5.G(d0)>=0?d5.G(d0):b9,0,1)
q=$.Bl()
q.n_(0.0166,a0)
c0=q.f
c1=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
c2=c1>0.001
c3=c2?new A.L(p,f,e):new A.L(-p,d,-e)
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
c8.p4=new A.jX(B.ir,new A.bW(b6.c*0.08,b6.b*0.08,b6.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),(0.04+a2*0.08+b8*0.02)*q,(0.0015+a2*0.014+b8*0.003)*d5,new A.bW(b2.c,b2.b,b2.a),Math.max(0.045,b5*(c2?c1:1)*b7),new A.o1(c3,c5,b4),s,r)},
f9(a,b){var s=A.Gl(a,b),r=A.Gj(a,b),q=A.H(s.c,t.i)
B.a.M(q,r)
return A.c([new A.h1("wall",new Float32Array(A.a2(q))),new A.h1("floor",s.a),new A.h1("ceiling",s.b)],t.pv)},
eY(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.L(q,p,a[o]))}if(n.length===0)throw A.b(A.j("house surface mesh cannot be empty"))
return new A.ch(B.aa,a,null,A.b1(n))},
j4(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f9(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.j("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.q()
k=k.w
if(k==null)k=A.h(A.j("renderer is not initialized"))
j=b.eY(l.b)
i=l.a
if(k.x)A.h(A.j("resource library is disposed"))
h=k.a
j.C()
g=h.b.aC(j,n+i)
f=g.a
h.c.k(0,f,h.bg(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bA(g,i,B.u,-1,B.R,B.a9,!0,!0,0,null)
i=b.f
i===$&&A.q()
B.u.C()
k=i.a
j=k.$ti
k.a_(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.u.a9()
k=k.gaq()
h=A.B(k)
A.b1(new A.I(k,h.i("L(1)").a(j.gaA()),h.i("I<1,L>")))
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
jw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.M(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cx(l,l.r,l.e,A.o(l).i("cx<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bk.h(0,i)
if(h==null)A.h(A.j("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.W(d)
f=$.y.j()
B.a.W(e)
f.setAttribute("data-renderer-house-materials",B.a.Y(e,","))
$.y.j().setAttribute("data-renderer-house-surface-bindings",B.a.Y(d,","))},
j7(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cY(new Float32Array(5376))
g=this.j6(a0.b)
r=new A.k(d,b,f)
q=new A.k(e,b,f)
p=new A.k(e,c,f)
o=new A.k(d,c,f)
n=new A.k(d,b,a)
m=new A.k(e,b,a)
l=new A.k(e,c,a)
k=new A.k(d,c,a)
s.aG(q,r,o,p,g)
s.aG(n,m,l,k,g)
s.aG(r,n,k,o,g)
s.aG(m,q,p,l,g)
s.aG(r,q,m,n,g)
s.aG(o,k,l,p,g)
j=B.t.aT(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.L(e,d,j[c]))}return new A.ch(B.aa,j,null,A.b1(g))},
j6(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dh(a){var s
A:{if(0===a){s=B.kN
break A}if(1===a){s=B.kP
break A}if(2===a){s=B.kV
break A}if(3===a){s=B.l2
break A}if(4===a){s=B.l3
break A}if(5===a){s=B.kT
break A}if(6===a){s=B.l1
break A}if(7===a){s=B.kY
break A}s=B.l0
break A}return s},
dl(a){var s
A:{if("architecture"===a){s=B.kO
break A}if("furniture"===a){s=B.du
break A}if("fixture"===a){s=B.kX
break A}if("service"===a){s=B.kZ
break A}if("story"===a){s=B.kW
break A}if("decor"===a){s=B.kR
break A}if("micro"===a){s=B.kU
break A}s=B.du
break A}return s},
cK(a){return this.lT(t.G.a(a))},
lT(a){var s=0,r=A.bu(t.H),q,p=this,o,n,m,l
var $async$cK=A.bv(function(b,c){if(b===1)return A.bq(c,r)
for(;;)switch(s){case 0:if(!p.au){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.iB[n]
l=a.h(0,m)
if(l!=null)o.push(p.cr(m,l))}s=3
return A.ai(A.oq(o,t.H),$async$cK)
case 3:case 1:return A.br(q,r)}})
return A.bs($async$cK,r)},
cr(a,b){return this.ja(a,b)},
ja(a,b){var s=0,r=A.bu(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cr=A.bv(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ai(A.b0(A.a(m.decode()),t.X),$async$cr)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.f(m.naturalWidth)
g.height=A.f(m.naturalHeight)
l=g
k=A.G(l.getContext("2d"))
if(!t.m.b(k)){h=A.j("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.f(m.naturalWidth),A.f(m.naturalHeight))).data)
h=n.e
h===$&&A.q()
h=h.gb8()
f=new Uint8Array(A.a2(j))
if(h.x)A.h(A.j("resource library is disposed"))
h.c.n0(d,f)
h=n.e.gb8()
if(h.x)A.h(A.j("resource library is disposed"))
h.c.lx(d)
$.y.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dr()
n.ct()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ak(c)
h=$.y.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dr()
n.ct()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.v(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.br(q,r)
case 2:return A.bq(o.at(-1),r)}})
return A.bs($async$cr,r)},
dr(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.au||i.k1.a===0)return
s=i.k1
r=A.o(s).i("K<1,2>")
r=A.kk(new A.K(s,r),r.i("bN(m.E)").a(new A.tU()),r.i("m.E"),t.jP)
q=A.H(r,A.o(r).i("m.E"))
s=i.e
s===$&&A.q()
p=s.gb8().gfi().cO(q)
s=p.a
o=A.c(s.slice(0),A.B(s))
B.a.V(o,new A.tV())
s=A.B(o)
r=s.i("e(1)")
s=s.i("I<1,e>")
n=new A.I(o,r.a(new A.tW()),s).Y(0,",")
m=new A.I(o,r.a(new A.tX()),s).Y(0,",")
s=p.cw(B.dK)
r=p.cw(B.dL)
l=p.cw(B.dM)
k=p.cw(B.dN);++i.y2
j=$.y.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.y2)
if(!A.Q($.y.j().hasAttribute("data-renderer-texture-residency-initial")))$.y.j().setAttribute("data-renderer-texture-residency-initial",n)},
ct(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.au||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.K(r,A.o(r).i("K<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cS(p,o,B.b.q(p,"wall")?2:1))}r=j.e
r===$&&A.q()
r=r.gb8()
n=r.e
if(n===$){p=r.gfi()
r.e!==$&&A.xK()
n=r.e=new A.pR(p)}m=n.cO(s)
s=m.a
l=A.c(s.slice(0),A.B(s))
B.a.V(l,new A.tS())
s=A.B(l)
k=new A.I(l,s.i("e(1)").a(new A.tT()),s.i("I<1,e>")).Y(0,",")
s=$.y.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cp(B.bn)+";pending="+m.cp(B.d8)+";missing="+m.cp(B.d9)+";evicted="+m.cp(B.da))},
bU(a,b){return new A.bA(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eL(a,b,c){var s,r,q,p,o,n=A.Gi(a,b,c),m=n.length
if(m===0)throw A.b(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.L(q,p,n[o]))}return new A.ch(B.aa,n,null,A.b1(s))},
js(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.W.j().aE(a),k=a.d,j=k.a,i=k.b,h=k.c
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
o.aG(k[0],k[1],k[2],k[3],g)
n=B.t.aT(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.L(r,q,n[p]))}return new A.ch(B.aa,n,null,A.b1(k))},
iv(a,b){var s,r,q,p=a.e,o=A.o(p).i("K<1,2>"),n=A.H(new A.K(p,o),o.i("m.E"))
B.a.V(n,new A.tO())
p=$.y.j()
o=a.a
s=A.B(o)
r=a.c
q=A.B(r)
p.setAttribute("data-renderer-light-selection","points="+new A.I(o,s.i("i(1)").a(new A.tP()),s.i("I<1,i>")).Y(0,":")+";spots="+new A.I(r,q.i("i(1)").a(new A.tQ()),q.i("I<1,i>")).Y(0,":"))
q=A.B(n)
p.setAttribute("data-renderer-light-rejections",new A.I(n,q.i("e(1)").a(new A.tR()),q.i("I<1,e>")).Y(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
jz(a){var s,r=this.e
r===$&&A.q()
r=r.gb8()
if(r.x)A.h(A.j("resource library is disposed"))
a.C()
s=r.b.a.aC(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iyP:1}
A.tY.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:44}
A.tZ.prototype={
$1(a){var s=this.a.dx.h(0,A.p(a))
s.toString
return s},
$S:24}
A.u_.prototype={
$1(a){var s,r,q,p
A.p(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:24}
A.tU.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bN(s,a.b,r)},
$S:159}
A.tV.prototype={
$2(a,b){var s=t.d
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:160}
A.tW.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:45}
A.tX.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:45}
A.tS.prototype={
$2(a,b){var s=t.wl
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:162}
A.tT.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:163}
A.tO.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:164}
A.tP.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tQ.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tR.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:166}
A.lP.prototype={}
A.iI.prototype={
fH(a,b){var s=this,r=b==null?s.d:b
return new A.iI(s.a,s.b,s.c,r,a)},
kE(a){return this.fH(a,null)}}
A.ts.prototype={
gag(){return this.b},
gaQ(){return this.c}}
A.up.prototype={
$2(a,b){var s
A.xt(a,A.v(b))
switch(a){case"master":s=$.bd
if(s!=null)s.hB(b)
break
case"voice":s=$.bd
if(s!=null)s.hD(b)
break
case"effects":s=$.bd
if(s!=null)s.hA(b)
break
case"ambience":s=$.bd
if(s!=null)s.hz(b)
break
case"music":s=$.bd
if(s!=null)s.hC(b)
break}},
$S:31}
A.uq.prototype={
$1(a){var s
A.xt("muted",""+a)
s=$.bd
if(s!=null)s.eb(a)},
$S:8}
A.ur.prototype={
$1(a){var s
A.xt("mono",""+a)
s=$.bd
if(s!=null)s.cZ(a)},
$S:8}
A.ux.prototype={
$2(a,b){A.xu(a,A.v(b))
A.zC(a,b)},
$S:31}
A.uy.prototype={
$1(a){var s="high-contrast"
A.xu(s,""+a)
A.ud(s,a)},
$S:8}
A.uz.prototype={
$1(a){var s="strong-highlights"
A.xu(s,""+a)
A.ud(s,a)},
$S:8}
A.uA.prototype={
$1(a){$.d9().mB(a)
A.vc()
A.zE()},
$S:168}
A.uB.prototype={
$0(){var s=$.d9()
s.a=A.dt(null,1)
s.b=A.dt(null,1)
A.vc()
A.zE()},
$S:0}
A.uC.prototype={
$0(){A.dG(this.a)},
$S:0}
A.uD.prototype={
$0(){this.a.a7()},
$S:0}
A.uE.prototype={
$0(){A.dG(this.a)},
$S:0}
A.us.prototype={
$0(){A.he(this.a)},
$S:0}
A.ut.prototype={
$1(a){$.j6=a
A.A7()
A.wX()},
$S:169}
A.uu.prototype={
$1(a){var s=$.cG()
$.x9=a
if(!s.Q&&a.Q){$.bb.j().a=1
$.bb.j().hd(7)
$.at.j().fW()
$.cp().N(0)}A.A9()
A.zD()},
$S:170}
A.uv.prototype={
$1(a){$.eo=a
A.xh()
A.mf()},
$S:171}
A.uw.prototype={
$0(){$.eo=B.ap
$.fc.j().e8($.eo)
A.xh()
A.mf()},
$S:0}
A.um.prototype={
$1(a){var s,r=A.AK(a,A.zV())
$.j7=A.fE($.ji().b,a)
s=r.b
$.en.j().cj(a,$.ji().b,s)
$.y.j().setAttribute("data-graphics-fallback",B.a.Y(s,"|"))
$.zW=A.mh(a,r,$.zW)},
$S:172}
A.un.prototype={
$0(){A.dG($.en.j())},
$S:0}
A.uo.prototype={
$0(){A.dG($.en.j())},
$S:0}
A.ui.prototype={
$1(a){},
$S:22}
A.uj.prototype={
$1(a){var s,r
$.x5=a
$.ad.j().e9(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.dS()
s.bd()
A.A8()},
$S:173}
A.uk.prototype={
$0(){A.dG($.iZ.j())},
$S:0}
A.ul.prototype={
$0(){A.dG($.iZ.j())},
$S:0}
A.v5.prototype={
$0(){$.vl=A.Q(this.a.matches)
$.xy=A.Q(this.b.matches)
A.mf()},
$S:0}
A.v3.prototype={
$1(a){return this.a.$0()},
$S:2}
A.v4.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vH.prototype={
$1(a){var s
try{A.yg(this.b,a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.D)return!1
else throw s}},
$S:174}
A.vI.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j5.j()
break
case 5:p=$.fc.j()
break
case 1:p=$.en.j()
break
case 4:p=$.h7.j()
break
case 2:p=$.j0.j()
break
case 3:p=$.iZ.j()
break}s=p
r=null
switch(o){case 0:r=B.kj
break
case 5:r=B.ko
break
case 1:r=B.kk
break
case 4:r=B.kn
break
case 2:r=B.kl
break
case 3:r=B.km
break}q=r
p=B.d4.h(0,a)
p.toString
A.xg(s,q,p)},
$S:175}
A.vJ.prototype={
$0(){A.dG($.h8.j())},
$S:0}
A.vU.prototype={
$0(){return A.dG($.h8.j())},
$S:0}
A.w2.prototype={
$0(){$.cm.j().a7()},
$S:0}
A.w3.prototype={
$0(){$.cm.j().a7()},
$S:0}
A.w4.prototype={
$0(){A.xg($.h8.j(),B.dd,"pause.settings")},
$S:0}
A.w5.prototype={
$0(){$.cm.j().a7()
A.jc($.j1.j())},
$S:0}
A.w6.prototype={
$0(){A.mr("saved")},
$S:0}
A.w7.prototype={
$0(){$.cm.j().a7()
A.jc($.j1.j())},
$S:0}
A.w8.prototype={
$0(){A.xg($.mc.j(),B.kp,"pause.credits")},
$S:0}
A.vK.prototype={
$0(){return A.he($.cm.j())},
$S:0}
A.vL.prototype={
$0(){return A.he($.j2.j())},
$S:0}
A.vM.prototype={
$2(a,b){var s,r
if($.at.j().y){s=$.aE.j().gc_()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.EB(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cQ,a)
A.EA(B.cQ[a])}}},
$S:176}
A.vN.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gaa().a===21){A.Af(!1)
return}s=$.W.j().r.b
$.T.j().hS(a,b,$.az)
r=$.W.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e6()
if(typeof n!=="number")return A.vC(n)
if(!(o<n))break
if($.W.b===$.W)A.h(A.a5(""))
p=B.a.h(B.J,q).b
o=$.aR
if(o!=null){n=$.W.b
if(n===$.W)A.h(A.a5(""))
o.cR(n,p)}o=q
if(typeof o!=="number")return o.aj()
q=o+1}A.mr("saved after sleep")},
$S:177}
A.vO.prototype={
$0(){return A.he($.me.j())},
$S:0}
A.vP.prototype={
$0(){return A.he($.j1.j())},
$S:0}
A.vQ.prototype={
$0(){return A.dG($.mc.j())},
$S:0}
A.vR.prototype={
$0(){A.he($.j_.j())},
$S:0}
A.vS.prototype={
$0(){A.he($.j_.j())},
$S:0}
A.vT.prototype={
$1(a){return A.Ae()},
$S:2}
A.vV.prototype={
$1(a){if(A.p(A.a(v.G.document).visibilityState)==="hidden")A.Fz()},
$S:1}
A.vW.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.p(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.hn()
o=!p.a
p.a=o
if(o)A.pq(A.a(v.G.document),"exitPointerLock",t.X)
else $.ad.j().cS($.y.j())
return}p=$.hn()
if(p.a&&!A.Q(m.repeat)){if(A.p(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ad.j().cS($.y.j())
return}if(A.p(m.code)==="ArrowUp"||A.p(m.code)==="KeyW"){m.preventDefault()
n=p.gbj().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.er
if(o!=null){p=p.gbj().length
o.a.cY(-1,p)}return}if(A.p(m.code)==="ArrowDown"||A.p(m.code)==="KeyS"){m.preventDefault()
n=p.gbj().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.er
if(o!=null){p=p.gbj().length
o.a.cY(1,p)}return}if(A.p(m.code)==="ArrowLeft"||A.p(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d_[B.d.S(p.e.a-1+7,7)]
else{p=p.gcE()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.p(m.code)==="ArrowRight"||A.p(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d_[(p.e.a+1)%7]
else{p=p.gcE()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w,p.f,p.r)}return}if(A.p(m.code)==="KeyQ"){m.preventDefault()
p=p.gcE()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w*0.2,p.f,p.r)
return}if(A.p(m.code)==="KeyE"){m.preventDefault()
p=p.gcE()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w*0.2,p.f,p.r)
return}if(A.p(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.mA()
else p.mC()
return}if(B.b.T(A.p(m.code),"Digit")||B.b.T(A.p(m.code),"Numpad")){o=A.p(m.code)
o=A.xJ(o,"Digit","")
s=A.xJ(o,"Numpad","")
r=A.dq(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.at.j().y&&!A.Q(m.repeat))if($.cp().lC(A.p(m.code))){m.preventDefault()
return}if(A.p(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.bc
if(p==null)A.jc($.cm.j())
else p.a7()
return}q=$.bc==null&&!p.a
if(!A.Q(m.repeat)&&q)$.fd.j().fS(new A.kM(A.p(m.code),!0,1))
if(A.p(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.Bd())$.mo=!$.mo
if((A.p(m.code)==="KeyJ"||A.p(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.at.j().y){m.preventDefault()
A.jf($.j2.j())}if(A.p(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.at.j().y)A.jf($.me.j())
if(A.p(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.at.j().y)A.jf($.j1.j())
if(A.p(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.at.j().y)A.jf($.j4.j())
if(A.p(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mr("saved")},
$S:1}
A.vX.prototype={
$1(a){var s=A.a(a)
if($.bc==null)$.fd.j().fS(new A.kM(A.p(s.code),!1,0))},
$S:1}
A.vY.prototype={
$1(a){return A.zG()},
$S:2}
A.vZ.prototype={
$1(a){return A.zG()},
$S:2}
A.w_.prototype={
$1(a){return A.F2(A.a(a))},
$S:2}
A.w0.prototype={
$1(a){var s=A.a(a)
if($.at.j().y){s.preventDefault()
A.F1(s)
return}$.ad.j().cS($.y.j())},
$S:1}
A.w1.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hn()
if(!o.a||$.er==null)return
p.preventDefault()
s=o.gbj()
r=A.a6(p.deltaY)>0?1:-1
o=$.er
o.toString
q=J.cH(s)
o.a.cY(A.f(r),q)},
$S:1}
A.v6.prototype={
$1(a){var s=A.p(A.a(a).message)
A.vf(s,null)},
$S:1}
A.v7.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.vf("unhandled rejection: "+A.v(s==null?A.p(a.type):s),null)},
$S:1}
A.vb.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:42}
A.vj.prototype={
$0(){this.a.className=""},
$S:14}
A.vn.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:41}
A.v9.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.vg.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.vd.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.ve.prototype={
$1(a){return t.fW.a(a).w},
$S:27};(function aliases(){var s=J.e3.prototype
s.hZ=s.p
s=A.m.prototype
s.hY=s.cW
s=A.i2.prototype
s.i_=s.bH})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"F9","Cy",32)
r(J.r.prototype,"gap","q",11)
q(A,"Fn","CO",29)
r(A.aL.prototype,"gap","q",11)
p(A.cf.prototype,"gky","R",11)
o(A,"Ge","DH",20)
o(A,"Gf","DI",20)
o(A,"Gg","DJ",20)
q(A,"Av","FW",0)
r(A.ck.prototype,"gap","q",11)
r(A.fZ.prototype,"gap","q",11)
o(A,"Gp","EK",15)
p(A.km.prototype,"gmH","mI",81)
var n
p(n=A.l4.prototype,"gmD","mE",9)
p(n,"gmL","mM",9)
p(n,"gmN","mO",9)
p(n,"gmF","mG",9)
p(n,"gmJ","mK",9)
q(A,"AA","DM",179)
q(A,"HT","wC",44)
p(A.dm.prototype,"gaA","hf",58)
p(n=A.k9.prototype,"gjc","jd",2)
p(n,"gje","jf",2)
p(n,"gji","jj",2)
p(n,"gjm","jn",2)
p(n,"gjo","jp",2)
p(n,"gjk","jl",2)
p(n,"gjg","jh",2)
o(A,"GL","zM",15)
o(A,"GP","zL",15)
o(A,"GE","Cv",180)
o(A,"GF","Cw",181)
o(A,"GT","Cp",182)
p(A.i2.prototype,"gjq","jr",2)
p(A.fU.prototype,"gj2","j3",132)
p(A.lh.prototype,"glO","lP",23)
o(A,"AJ","FC",183)
q(A,"AI","EH",0)
o(A,"GI","EC",122)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.J,null)
q(A.J,[A.wu,J.kb,A.ib,J.ew,A.m,A.hr,A.an,A.Y,A.qX,A.aC,A.hT,A.S,A.hC,A.hz,A.ir,A.av,A.eb,A.bQ,A.fJ,A.ft,A.dU,A.f8,A.ds,A.rW,A.q7,A.hA,A.iM,A.a7,A.pK,A.cg,A.af,A.cx,A.hL,A.lL,A.lr,A.ij,A.m2,A.tt,A.cB,A.lE,A.m5,A.u3,A.ls,A.c5,A.b2,A.lw,A.dA,A.as,A.lt,A.m0,A.iX,A.iz,A.lK,A.f9,A.iC,A.iR,A.m6,A.eA,A.jG,A.tM,A.u6,A.eB,A.dV,A.lB,A.kw,A.ih,A.tu,A.D,A.N,A.ar,A.m3,A.rH,A.bk,A.iT,A.rY,A.lY,A.q6,A.lH,A.ei,A.qy,A.e8,A.kD,A.nE,A.nF,A.nH,A.nG,A.kC,A.fp,A.jX,A.ok,A.dr,A.k5,A.bW,A.o1,A.kB,A.bD,A.e5,A.bE,A.t1,A.ch,A.jJ,A.q8,A.kE,A.kN,A.bA,A.l1,A.i8,A.aH,A.om,A.cS,A.bX,A.pT,A.pR,A.km,A.l8,A.pZ,A.bN,A.c0,A.rR,A.rP,A.d5,A.l4,A.eK,A.jV,A.jW,A.ol,A.oj,A.h0,A.aw,A.bg,A.aI,A.P,A.ht,A.kG,A.bj,A.qA,A.b6,A.qC,A.qB,A.lG,A.i7,A.qM,A.tv,A.m4,A.u2,A.lR,A.lD,A.lV,A.lO,A.tH,A.bK,A.bI,A.aO,A.nX,A.nW,A.jl,A.eN,A.on,A.dm,A.kI,A.l5,A.L,A.hq,A.lu,A.jy,A.lv,A.jL,A.ly,A.hx,A.lz,A.jO,A.lA,A.k4,A.lF,A.hV,A.lM,A.fn,A.jz,A.wD,A.i4,A.lS,A.kH,A.lT,A.eX,A.kV,A.lW,A.kW,A.lX,A.kY,A.m_,A.kX,A.lZ,A.lc,A.m7,A.i9,A.ln,A.ma,A.nC,A.k0,A.k2,A.hF,A.ie,A.x,A.jM,A.fN,A.oJ,A.el,A.cV,A.fz,A.tl,A.dB,A.iW,A.iV,A.m9,A.m8,A.ua,A.th,A.tk,A.jN,A.js,A.h3,A.mW,A.mE,A.ho,A.mS,A.wq,A.n3,A.mY,A.is,A.fo,A.nz,A.oi,A.k9,A.pi,A.pm,A.aT,A.pG,A.pD,A.nY,A.pM,A.cY,A.k,A.kZ,A.lo,A.ns,A.jP,A.o7,A.fA,A.bo,A.kA,A.qs,A.fT,A.qQ,A.eU,A.jZ,A.ox,A.ow,A.ju,A.dL,A.dN,A.dP,A.dM,A.dO,A.jA,A.kn,A.cD,A.lp,A.hI,A.p0,A.a0,A.jS,A.k6,A.p1,A.jT,A.d4,A.jU,A.eh,A.eD,A.qN,A.eg,A.oZ,A.ob,A.rD,A.p3,A.cR,A.cv,A.pp,A.pn,A.po,A.dp,A.p7,A.f2,A.bZ,A.eY,A.eT,A.pa,A.cQ,A.p_,A.eJ,A.p9,A.cP,A.pe,A.i3,A.hS,A.bh,A.tf,A.kj,A.bT,A.ps,A.hp,A.np,A.qo,A.qn,A.qp,A.qq,A.qr,A.ki,A.qx,A.qK,A.kM,A.qJ,A.qL,A.ry,A.ea,A.rz,A.fV,A.nZ,A.tm,A.f3,A.jE,A.pg,A.pk,A.qO,A.cW,A.qP,A.k_,A.f1,A.tg,A.ou,A.jY,A.q1,A.cK,A.by,A.ql,A.rJ,A.f0,A.f_,A.iq,A.lk,A.eQ,A.d1,A.rI,A.ic,A.kS,A.kP,A.kQ,A.kR,A.rM,A.jm,A.wp,A.dJ,A.mO,A.dK,A.nr,A.b3,A.nA,A.fu,A.dd,A.jF,A.i2,A.o2,A.oD,A.oF,A.fC,A.dZ,A.oV,A.oM,A.oN,A.ca,A.oW,A.cU,A.fq,A.qa,A.dn,A.e6,A.bY,A.qf,A.qw,A.aZ,A.rt,A.rx,A.cq,A.mL,A.lh,A.te,A.dy,A.bm,A.c3,A.bO,A.lj,A.jo,A.lg,A.h1,A.lQ,A.lP,A.iI,A.ts])
q(J.kb,[J.kd,J.hK,J.hN,J.hM,J.hO,J.fF,J.e1])
q(J.hN,[J.e3,J.r,A.fM,A.hZ])
q(J.e3,[J.kz,J.eZ,J.e2])
r(J.kc,A.ib)
r(J.pr,J.r)
q(J.fF,[J.hJ,J.ke])
q(A.m,[A.ef,A.R,A.cy,A.F,A.hB,A.dz,A.f7,A.lq,A.m1,A.bR])
q(A.ef,[A.ez,A.iY])
r(A.ix,A.ez)
r(A.iv,A.iY)
r(A.aU,A.iv)
q(A.an,[A.fG,A.dw,A.kf,A.l7,A.kO,A.lC,A.hQ,A.jq,A.cr,A.im,A.l6,A.fW,A.jD])
r(A.fY,A.Y)
r(A.de,A.fY)
q(A.R,[A.a1,A.ab,A.al,A.K,A.f6,A.iB])
q(A.a1,[A.ik,A.I,A.eS,A.lJ])
r(A.df,A.cy)
q(A.bQ,[A.ej,A.ek])
q(A.ej,[A.aP,A.fb,A.iJ])
q(A.ek,[A.ay,A.b_,A.iK])
r(A.h5,A.fJ)
r(A.ec,A.h5)
r(A.hu,A.ec)
q(A.dU,[A.jC,A.jB,A.l3,A.vD,A.vF,A.tp,A.to,A.ue,A.or,A.tF,A.tI,A.pN,A.tK,A.wa,A.wb,A.vw,A.qz,A.t2,A.pW,A.pX,A.pY,A.q9,A.pU,A.pV,A.q_,A.rS,A.rT,A.rV,A.of,A.od,A.oe,A.qc,A.qd,A.qH,A.qG,A.qF,A.qE,A.qD,A.qI,A.uW,A.uX,A.qS,A.qT,A.wh,A.wf,A.oo,A.pP,A.vt,A.oK,A.oL,A.ti,A.tj,A.n5,A.n8,A.n7,A.n9,A.mX,A.mF,A.mG,A.mH,A.mU,A.mV,A.mT,A.pj,A.pE,A.oa,A.oy,A.oA,A.oB,A.oC,A.na,A.nb,A.nc,A.nd,A.ne,A.ng,A.nh,A.ni,A.nj,A.nk,A.nl,A.nm,A.nf,A.vs,A.nn,A.no,A.va,A.vq,A.nD,A.oc,A.p2,A.wi,A.v0,A.v_,A.uc,A.vi,A.pf,A.rE,A.p6,A.p4,A.vp,A.pb,A.pd,A.vo,A.o6,A.pJ,A.pz,A.rC,A.rB,A.rA,A.o_,A.o0,A.ot,A.qm,A.qV,A.qW,A.rN,A.rO,A.mD,A.mB,A.n0,A.n1,A.nu,A.ny,A.nx,A.nw,A.nQ,A.nP,A.nR,A.nS,A.nT,A.nO,A.nJ,A.nK,A.nV,A.o3,A.o4,A.o5,A.o9,A.oE,A.oG,A.oH,A.oT,A.oQ,A.oR,A.oS,A.oP,A.oO,A.oY,A.pu,A.pv,A.pw,A.qg,A.qh,A.qi,A.ro,A.rp,A.rg,A.rh,A.rf,A.ri,A.r0,A.rj,A.rk,A.rl,A.re,A.r6,A.r7,A.r8,A.r9,A.ra,A.rb,A.rc,A.rd,A.r5,A.r1,A.r2,A.r3,A.r4,A.rn,A.rm,A.rv,A.rG,A.mN,A.tc,A.tb,A.td,A.t7,A.ta,A.t5,A.t4,A.vz,A.t3,A.mI,A.mJ,A.mK,A.tZ,A.u_,A.tU,A.tW,A.tX,A.tT,A.tP,A.tQ,A.tR,A.uq,A.ur,A.uy,A.uz,A.uA,A.ut,A.uu,A.uv,A.um,A.ui,A.uj,A.v3,A.v4,A.vH,A.vI,A.vT,A.vV,A.vW,A.vX,A.vY,A.vZ,A.w_,A.w0,A.w1,A.v6,A.v7,A.vb,A.vn,A.vg,A.vd,A.ve])
q(A.jC,[A.nI,A.pA,A.vE,A.uf,A.vr,A.os,A.tG,A.pL,A.pO,A.tN,A.t_,A.rZ,A.wc,A.pS,A.q0,A.rQ,A.rU,A.og,A.qU,A.wg,A.we,A.n6,A.mZ,A.n_,A.pF,A.oz,A.vk,A.p8,A.pI,A.pl,A.ov,A.q3,A.q4,A.q5,A.rK,A.rL,A.nB,A.px,A.py,A.mM,A.t8,A.t6,A.tV,A.tS,A.tO,A.up,A.ux,A.vM,A.vN,A.v9])
q(A.ft,[A.a4,A.cN])
q(A.ds,[A.hv,A.iL,A.iS])
r(A.aL,A.hv)
q(A.jB,[A.qt,A.tq,A.tr,A.u4,A.op,A.tw,A.tB,A.tA,A.ty,A.tx,A.tE,A.tD,A.tC,A.u1,A.vh,A.u8,A.u7,A.uV,A.uO,A.uP,A.uU,A.uJ,A.uL,A.uK,A.uT,A.uH,A.uI,A.uQ,A.uR,A.uS,A.uN,A.uM,A.uZ,A.vu,A.p5,A.pc,A.v1,A.mC,A.mQ,A.mP,A.n2,A.nM,A.nN,A.nL,A.oI,A.oU,A.qk,A.qZ,A.r_,A.rq,A.rr,A.rs,A.rw,A.t9,A.tY,A.uB,A.uC,A.uD,A.uE,A.us,A.uw,A.un,A.uo,A.uk,A.ul,A.v5,A.vJ,A.vU,A.w2,A.w3,A.w4,A.w5,A.w6,A.w7,A.w8,A.vK,A.vL,A.vO,A.vP,A.vQ,A.vR,A.vS,A.vj])
r(A.i0,A.dw)
q(A.l3,[A.l_,A.fm])
q(A.a7,[A.cf,A.iy,A.lI])
r(A.hP,A.cf)
r(A.fL,A.fM)
q(A.hZ,[A.ko,A.b5])
q(A.b5,[A.iE,A.iG])
r(A.iF,A.iE)
r(A.hX,A.iF)
r(A.iH,A.iG)
r(A.hY,A.iH)
q(A.hX,[A.hW,A.kp])
q(A.hY,[A.kq,A.kr,A.ks,A.kt,A.ku,A.eM,A.i_])
r(A.h4,A.lC)
r(A.it,A.lw)
r(A.lU,A.iX)
r(A.iA,A.iy)
r(A.ck,A.iL)
r(A.fZ,A.iS)
q(A.eA,[A.jv,A.jQ,A.kg])
q(A.jG,[A.nq,A.pC,A.pB,A.t0])
r(A.kh,A.hQ)
r(A.tL,A.tM)
r(A.lb,A.jQ)
q(A.cr,[A.fP,A.k8])
r(A.lx,A.iT)
q(A.lB,[A.eP,A.fw,A.fs,A.eI,A.jp,A.hU,A.d_,A.fS,A.fy,A.jx,A.hs,A.fx,A.eR,A.eL,A.dv,A.eE,A.ce,A.ia,A.cO,A.fR,A.ig,A.fB,A.iu,A.iw,A.k1,A.hD,A.hG,A.k3,A.eH,A.hE,A.eW,A.cZ,A.fr,A.fD,A.h2,A.jw,A.ey,A.jH,A.jK,A.b7,A.jt,A.cc,A.eG,A.eC,A.dY,A.dX,A.dW,A.e_,A.ky,A.kL,A.fQ,A.cC,A.du,A.bM,A.bC,A.ka,A.f4,A.cj,A.cI,A.cs,A.cJ,A.dc,A.db,A.dR,A.dS,A.dQ,A.ex,A.di,A.cL,A.cM,A.dj,A.dh,A.dk,A.cd,A.dg,A.ct,A.jn,A.bi,A.ci,A.e7,A.cA,A.bL,A.bB,A.id,A.bJ,A.c1,A.c2,A.ee,A.d0])
q(A.dr,[A.bx,A.b8,A.cz,A.kx,A.cu])
r(A.qR,A.lV)
r(A.ll,A.m8)
r(A.iD,A.d4)
q(A.i2,[A.hw,A.nU,A.o8,A.hH,A.oX,A.pt,A.qj,A.qY,A.fU,A.rF])
q(A.te,[A.li,A.lN,A.b9,A.lf,A.ld,A.ip,A.le])
s(A.fY,A.eb)
s(A.iY,A.Y)
s(A.iE,A.Y)
s(A.iF,A.av)
s(A.iG,A.Y)
s(A.iH,A.av)
s(A.h5,A.iR)
s(A.iS,A.m6)
s(A.lV,A.tH)
s(A.m8,A.ua)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",A:"double",be:"num",e:"String",l:"bool",ar:"Null",E:"List",J:"Object",Z:"Map",ae:"JSObject"},mangledNames:{},types:["~()","ar(J?)","~(J?)","l(e)","dl()","l(A)","0&()","l(@)","~(l)","dl(b8?)","l(aw)","l(J?)","i(bT,bT)","l(eQ)","ar()","@(@)","l(aZ)","l(P)","l(bT)","~(@)","~(~())","l(ea)","ar(@)","l(bO)","e(e)","i(N<e,e>,N<e,e>)","l(bE)","l(f2)","e(dN)","i()","e(dL)","~(e,A)","i(@,@)","e(J?)","i(aT)","l(eh)","l(cI)","l(N<e,E<e>>)","@(e)","~(ae)","l(ct)","l(by)","l(cd)","@()","l()","e(c0)","l(i)","~(J?,J?)","A(A,h3)","fn()","l(N<e,aH>)","aH(N<e,aH>)","aH(aH,aH)","i(aO<bK>,aO<bK>)","c_(aO<bK>)","i(aO<bI>,aO<bI>)","c_(aO<bI>)","eN(A,A,A,A)","L(L)","~(eX)","eX()","J?(J?)","ar(@,cX)","bU<ar>(N<e,e>)","l(E<e>)","i(e,e)","i(bZ,bZ)","i(+influence,light(A,bD),+influence,light(A,bD))","+effectiveScore,light,score(A,aT,A)(aT)","i(+effectiveScore,light,score(A,aT,A),+effectiveScore,light,score(A,aT,A))","l(cc)","~(i,@)","~(J,cX)","ar(J,cX)","l(eT)","dL(J?)","dN(J?)","dM(J?)","dO(J?)","l(bX)","i(cS,cS)","e5(cz)","e(dM)","e(dO)","e(dP)","cz(i,i,e?)","dX(e)","dP(J?)","bx(i,i,e?)","l(eY)","e(i,a0,a0,a0)","i(d4,d4)","i(i,+(bx,ch))","l(eg)","i(i)","l(bZ)","l(cv)","l(cR)","~(@,@)","i(dp,dp)","l(cQ)","N<e,e>(e,@)","e?(e)","l(c0)","l(bM)","l(bC)","f1()","i(bN,bN)","ar(~())","i(N<e,cK>,N<e,cK>)","b8(i,i,e?)","N<i,@>(i,f0)","N<i,@>(i,f_)","l(il?)","l(N<@,@>)","N<e,e>(N<@,@>)","l?(J?)","i(i,+(b8,d5))","e()","0^(m<0^>,J?)<J?>","A(A,e)","e(aw)","~(i)","~(A)","i(aa,aa)","@(@,e)","ar(ae)","0^(e,m<0^>)<C>","Z<e,e>(Z<e,e>,e)","Z<e,J?>(dn)","e(bi)","l(bi)","l(bB)","cu(i,i,e?)","l(di)","l(cL)","l(cM)","l(dj)","l(dh)","l(dk)","l(dg)","i9(bx)","l(cs)","l(cJ)","l(dc)","l(db)","e(cq)","i(cq,cq)","dl(e{fallback:e?})","i(bO,bO)","E<d1>()","l(d1)","l(N<e,e>)","i(c3,c3)","Z<e,@>(bO)","l(c2)","l(c1)","l(bJ)","0&(e,i?)","bN(N<e,b8>)","i(c0,c0)","bD?()","i(bX,bX)","e(bX)","i(N<i,e>,N<i,e>)","E<bD>()","e(N<i,e>)","fp()","~(bB)","~(dK)","~(fC)","~(dJ)","~(dZ)","~(fu)","l(fT)","~(bL)","~(i,e)","~(bM,bC)","A()","h0()","cR(J?)","cv(J?)","cQ(J?)","~(be)","E<e>(E<e>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aP&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fb&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iJ&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iK&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.E2(v.typeUniverse,JSON.parse('{"e2":"e3","kz":"e3","eZ":"e3","Hb":"fM","r":{"E":["1"],"R":["1"],"ae":[],"m":["1"]},"kd":{"l":[],"ah":[]},"hK":{"ar":[],"ah":[]},"hN":{"ae":[]},"e3":{"ae":[]},"kc":{"ib":[]},"pr":{"r":["1"],"E":["1"],"R":["1"],"ae":[],"m":["1"]},"ew":{"a9":["1"]},"fF":{"A":[],"be":[],"b4":["be"]},"hJ":{"A":[],"i":[],"be":[],"b4":["be"],"ah":[]},"ke":{"A":[],"be":[],"b4":["be"],"ah":[]},"e1":{"e":[],"b4":["e"],"qe":[],"ah":[]},"ef":{"m":["2"]},"hr":{"a9":["2"]},"ez":{"ef":["1","2"],"m":["2"],"m.E":"2"},"ix":{"ez":["1","2"],"ef":["1","2"],"R":["2"],"m":["2"],"m.E":"2"},"iv":{"Y":["2"],"E":["2"],"ef":["1","2"],"R":["2"],"m":["2"]},"aU":{"iv":["1","2"],"Y":["2"],"E":["2"],"ef":["1","2"],"R":["2"],"m":["2"],"m.E":"2","Y.E":"2"},"fG":{"an":[]},"de":{"Y":["i"],"eb":["i"],"E":["i"],"R":["i"],"m":["i"],"Y.E":"i","eb.E":"i"},"R":{"m":["1"]},"a1":{"R":["1"],"m":["1"]},"ik":{"a1":["1"],"R":["1"],"m":["1"],"m.E":"1","a1.E":"1"},"aC":{"a9":["1"]},"cy":{"m":["2"],"m.E":"2"},"df":{"cy":["1","2"],"R":["2"],"m":["2"],"m.E":"2"},"hT":{"a9":["2"]},"I":{"a1":["2"],"R":["2"],"m":["2"],"m.E":"2","a1.E":"2"},"F":{"m":["1"],"m.E":"1"},"S":{"a9":["1"]},"hB":{"m":["2"],"m.E":"2"},"hC":{"a9":["2"]},"hz":{"a9":["1"]},"dz":{"m":["1"],"m.E":"1"},"ir":{"a9":["1"]},"fY":{"Y":["1"],"eb":["1"],"E":["1"],"R":["1"],"m":["1"]},"eS":{"a1":["1"],"R":["1"],"m":["1"],"m.E":"1","a1.E":"1"},"aP":{"ej":[],"bQ":[]},"fb":{"ej":[],"bQ":[]},"iJ":{"ej":[],"bQ":[]},"ay":{"ek":[],"bQ":[]},"b_":{"ek":[],"bQ":[]},"iK":{"ek":[],"bQ":[]},"hu":{"ec":["1","2"],"h5":["1","2"],"fJ":["1","2"],"iR":["1","2"],"Z":["1","2"]},"ft":{"Z":["1","2"]},"a4":{"ft":["1","2"],"Z":["1","2"]},"f7":{"m":["1"],"m.E":"1"},"f8":{"a9":["1"]},"cN":{"ft":["1","2"],"Z":["1","2"]},"hv":{"ds":["1"],"e9":["1"],"R":["1"],"m":["1"]},"aL":{"hv":["1"],"ds":["1"],"e9":["1"],"R":["1"],"m":["1"]},"i0":{"dw":[],"an":[]},"kf":{"an":[]},"l7":{"an":[]},"iM":{"cX":[]},"dU":{"eF":[]},"jB":{"eF":[]},"jC":{"eF":[]},"l3":{"eF":[]},"l_":{"eF":[]},"fm":{"eF":[]},"kO":{"an":[]},"cf":{"a7":["1","2"],"ww":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ab":{"R":["1"],"m":["1"],"m.E":"1"},"cg":{"a9":["1"]},"al":{"R":["1"],"m":["1"],"m.E":"1"},"af":{"a9":["1"]},"K":{"R":["N<1,2>"],"m":["N<1,2>"],"m.E":"N<1,2>"},"cx":{"a9":["N<1,2>"]},"hP":{"cf":["1","2"],"a7":["1","2"],"ww":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ej":{"bQ":[]},"ek":{"bQ":[]},"hL":{"CY":[],"qe":[]},"lL":{"i6":[],"fK":[]},"lq":{"m":["i6"],"m.E":"i6"},"lr":{"a9":["i6"]},"ij":{"fK":[]},"m1":{"m":["fK"],"m.E":"fK"},"m2":{"a9":["fK"]},"fL":{"ae":[],"ah":[]},"eM":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"fM":{"ae":[],"ah":[]},"hZ":{"ae":[]},"ko":{"ae":[],"ah":[]},"b5":{"bV":["1"],"ae":[]},"hX":{"Y":["A"],"b5":["A"],"E":["A"],"bV":["A"],"R":["A"],"ae":[],"m":["A"],"av":["A"]},"hY":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"]},"hW":{"oh":[],"Y":["A"],"b5":["A"],"E":["A"],"bV":["A"],"R":["A"],"ae":[],"m":["A"],"av":["A"],"ah":[],"Y.E":"A","av.E":"A"},"kp":{"Y":["A"],"b5":["A"],"E":["A"],"bV":["A"],"R":["A"],"ae":[],"m":["A"],"av":["A"],"ah":[],"Y.E":"A","av.E":"A"},"kq":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"kr":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"ks":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"kt":{"wJ":[],"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"ku":{"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"i_":{"il":[],"Y":["i"],"b5":["i"],"E":["i"],"bV":["i"],"R":["i"],"ae":[],"m":["i"],"av":["i"],"ah":[],"Y.E":"i","av.E":"i"},"lC":{"an":[]},"h4":{"dw":[],"an":[]},"c5":{"a9":["1"]},"bR":{"m":["1"],"m.E":"1"},"b2":{"an":[]},"it":{"lw":["1"]},"as":{"bU":["1"]},"iX":{"zc":[]},"lU":{"iX":[],"zc":[]},"iy":{"a7":["1","2"],"Z":["1","2"]},"iA":{"iy":["1","2"],"a7":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"f6":{"R":["1"],"m":["1"],"m.E":"1"},"iz":{"a9":["1"]},"ck":{"ds":["1"],"yy":["1"],"e9":["1"],"R":["1"],"m":["1"]},"f9":{"a9":["1"]},"Y":{"E":["1"],"R":["1"],"m":["1"]},"a7":{"Z":["1","2"]},"iB":{"R":["2"],"m":["2"],"m.E":"2"},"iC":{"a9":["2"]},"fJ":{"Z":["1","2"]},"ec":{"h5":["1","2"],"fJ":["1","2"],"iR":["1","2"],"Z":["1","2"]},"ds":{"e9":["1"],"R":["1"],"m":["1"]},"iL":{"ds":["1"],"e9":["1"],"R":["1"],"m":["1"]},"fZ":{"ds":["1"],"m6":["1"],"e9":["1"],"R":["1"],"m":["1"]},"lI":{"a7":["e","@"],"Z":["e","@"],"a7.K":"e","a7.V":"@"},"lJ":{"a1":["e"],"R":["e"],"m":["e"],"m.E":"e","a1.E":"e"},"jv":{"eA":["E<i>","e"]},"jQ":{"eA":["e","E<i>"]},"hQ":{"an":[]},"kh":{"an":[]},"kg":{"eA":["J?","e"]},"lb":{"eA":["e","E<i>"]},"eB":{"b4":["eB"]},"A":{"be":[],"b4":["be"]},"dV":{"b4":["dV"]},"i":{"be":[],"b4":["be"]},"E":{"R":["1"],"m":["1"]},"be":{"b4":["be"]},"i6":{"fK":[]},"e9":{"R":["1"],"m":["1"]},"e":{"b4":["e"],"qe":[]},"lB":{"C":[]},"jq":{"an":[]},"dw":{"an":[]},"cr":{"an":[]},"fP":{"an":[]},"k8":{"an":[]},"im":{"an":[]},"l6":{"an":[]},"fW":{"an":[]},"jD":{"an":[]},"kw":{"an":[]},"ih":{"an":[]},"m3":{"cX":[]},"bk":{"Dd":[]},"iT":{"l9":[]},"lY":{"l9":[]},"lx":{"l9":[]},"lH":{"wE":[]},"ei":{"wE":[]},"eP":{"C":[]},"fw":{"C":[]},"fs":{"C":[]},"bx":{"dr":[]},"b8":{"dr":[]},"cz":{"dr":[]},"cu":{"dr":[]},"kx":{"dr":[]},"eI":{"C":[]},"jp":{"C":[]},"hU":{"C":[]},"d_":{"C":[]},"jJ":{"D3":[]},"fS":{"C":[]},"fy":{"C":[]},"jx":{"C":[]},"hs":{"C":[]},"fx":{"C":[]},"eR":{"C":[]},"eL":{"C":[]},"dv":{"C":[]},"eE":{"C":[]},"ce":{"C":[]},"ia":{"C":[]},"cO":{"C":[]},"fR":{"C":[]},"i7":{"D0":[]},"lG":{"c_":[]},"m4":{"c_":[]},"lR":{"D_":[]},"lD":{"Cd":[]},"ig":{"C":[]},"bK":{"b4":["bK"]},"bI":{"b4":["bI"]},"fB":{"C":[]},"iu":{"C":[]},"hq":{"am":[]},"lu":{"aa":[]},"jy":{"am":[]},"lv":{"aa":[]},"jL":{"am":[]},"ly":{"aa":[]},"iw":{"C":[]},"hx":{"am":[]},"lz":{"aa":[]},"jO":{"am":[]},"lA":{"aa":[]},"k4":{"am":[]},"lF":{"aa":[]},"hV":{"am":[]},"lM":{"aa":[]},"jz":{"CZ":[]},"i4":{"am":[]},"lS":{"aa":[]},"kH":{"am":[]},"lT":{"aa":[]},"kV":{"am":[]},"lW":{"aa":[]},"kW":{"am":[]},"lX":{"aa":[]},"kY":{"am":[]},"m_":{"aa":[]},"kX":{"am":[]},"lZ":{"aa":[]},"lc":{"am":[]},"m7":{"aa":[]},"ln":{"am":[]},"ma":{"aa":[]},"k1":{"C":[]},"hD":{"C":[]},"hG":{"C":[]},"k3":{"C":[]},"eH":{"C":[]},"hE":{"C":[]},"eW":{"C":[]},"cZ":{"C":[]},"fr":{"C":[]},"jM":{"BX":[]},"fD":{"C":[]},"h2":{"C":[]},"b7":{"C":[]},"jw":{"C":[]},"ey":{"C":[]},"jH":{"C":[]},"jK":{"C":[]},"dB":{"dl":[]},"ll":{"Cl":[]},"jt":{"C":[]},"cc":{"C":[]},"eG":{"C":[]},"iD":{"d4":[]},"eC":{"C":[]},"dY":{"C":[]},"dX":{"C":[]},"dW":{"C":[]},"e_":{"C":[]},"ky":{"C":[]},"kL":{"C":[]},"fQ":{"C":[]},"cC":{"C":[]},"du":{"C":[]},"bM":{"C":[]},"bC":{"C":[]},"ka":{"C":[]},"f4":{"C":[]},"cj":{"C":[]},"cI":{"C":[]},"cs":{"C":[]},"cJ":{"C":[]},"dc":{"C":[]},"db":{"C":[]},"dR":{"C":[]},"dS":{"C":[]},"ex":{"C":[]},"dQ":{"C":[]},"di":{"C":[]},"cL":{"C":[]},"cM":{"C":[]},"dj":{"C":[]},"dh":{"C":[]},"dk":{"C":[]},"cd":{"C":[]},"dg":{"C":[]},"ct":{"C":[]},"jn":{"C":[]},"bi":{"C":[]},"ci":{"C":[]},"e7":{"C":[]},"cA":{"C":[]},"bL":{"C":[]},"bB":{"C":[]},"id":{"C":[]},"bJ":{"C":[]},"c1":{"C":[]},"c2":{"C":[]},"ee":{"C":[]},"d0":{"C":[]},"lQ":{"yP":[]},"Cu":{"E":["i"],"R":["i"],"m":["i"]},"il":{"E":["i"],"R":["i"],"m":["i"]},"Di":{"E":["i"],"R":["i"],"m":["i"]},"Cs":{"E":["i"],"R":["i"],"m":["i"]},"wJ":{"E":["i"],"R":["i"],"m":["i"]},"Ct":{"E":["i"],"R":["i"],"m":["i"]},"Dh":{"E":["i"],"R":["i"],"m":["i"]},"oh":{"E":["A"],"R":["A"],"m":["A"]},"Cc":{"E":["A"],"R":["A"],"m":["A"]}}'))
A.E1(v.typeUniverse,JSON.parse('{"fY":1,"iY":2,"b5":1,"iL":1,"iS":1,"jG":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.X
return{mq:s("cI"),dx:s("ho"),bC:s("cq"),v:s("b2"),iF:s("js"),ul:s("db"),EL:s("cJ"),xs:s("cs"),gc:s("dc"),t3:s("ju"),mD:s("dL"),lT:s("dM"),bJ:s("dN"),gI:s("dO"),ya:s("dP"),z3:s("bI"),Bu:s("fn"),p:s("aT"),rO:s("fq"),E:s("de"),hO:s("b4<@>"),CH:s("ht"),w:s("a4<e,e>"),I:s("a4<e,i>"),M:s("aL<e>"),f7:s("eB"),fP:s("bJ"),yb:s("dV"),he:s("R<@>"),yW:s("cc"),g:s("bT"),D:s("C"),yt:s("an"),hl:s("a0"),B:s("oh"),pH:s("aH"),Fr:s("cK"),BO:s("eF"),ls:s("bU<ar>"),vS:s("dg"),aJ:s("dh"),x:s("cd"),bK:s("di"),gm:s("dj"),dn:s("cL"),mx:s("dk"),j_:s("cM"),EJ:s("cN<bL,e>"),_:s("dl"),Eb:s("ct"),qX:s("e_"),mF:s("cQ"),iO:s("cu"),oW:s("cR"),fl:s("cv"),FA:s("m<ht>"),CB:s("m<cS>"),yT:s("m<e>"),x6:s("m<bN>"),oJ:s("m<A>"),tY:s("m<@>"),uI:s("m<i>"),Fg:s("r<cq>"),jC:s("r<aT>"),km:s("r<fq>"),sa:s("r<ca>"),ns:s("r<jP>"),r:s("r<bT>"),uH:s("r<jT>"),Dl:s("r<a0>"),iJ:s("r<bU<~>>"),pC:s("r<jZ>"),C1:s("r<dl>"),ka:s("r<bg>"),Fm:s("r<eJ>"),op:s("r<cP>"),hr:s("r<eK>"),s3:s("r<cu>"),sL:s("r<ae>"),Bv:s("r<kj>"),Bq:s("r<N<e,e>>"),rq:s("r<Z<e,J>>"),A7:s("r<Z<e,e>>"),cs:s("r<Z<e,@>>"),a6:s("r<cS>"),p0:s("r<bX>"),s6:s("r<bx>"),pq:s("r<aw>"),bA:s("r<dn>"),xz:s("r<by>"),s0:s("r<eN>"),hc:s("r<cU>"),ea:s("r<dp>"),Fk:s("r<kB>"),qP:s("r<bZ>"),kv:s("r<eQ>"),nR:s("r<+(e,E<bZ>)>"),kd:s("r<+(e,e)>"),rh:s("r<+influence,light(A,bD)>"),wt:s("r<+(i,e)>"),e_:s("r<am>"),u:s("r<aa>"),Ft:s("r<i7>"),C:s("r<P>"),h1:s("r<bA>"),s2:s("r<c_>"),eY:s("r<eT>"),xB:s("r<cW>"),rn:s("r<kP>"),gg:s("r<kQ>"),tS:s("r<ic>"),yv:s("r<kR>"),wM:s("r<kS>"),El:s("r<fV>"),AM:s("r<aO<bI>>"),fs:s("r<aO<bK>>"),cv:s("r<bD>"),DZ:s("r<eY>"),s:s("r<e>"),r8:s("r<bN>"),fa:s("r<c0>"),k:s("r<L>"),h:s("r<k>"),ld:s("r<iq>"),Dc:s("r<dy>"),Fi:s("r<c3>"),jV:s("r<d1>"),yo:s("r<f1>"),nm:s("r<f2>"),uk:s("r<bo>"),wf:s("r<iD>"),il:s("r<eh>"),l5:s("r<eg>"),ow:s("r<lO>"),j5:s("r<lP>"),pv:s("r<h1>"),Fy:s("r<el<e5>>"),EM:s("r<el<ch>>"),w_:s("r<el<bA>>"),f2:s("r<el<d5>>"),n:s("r<A>"),zz:s("r<@>"),t:s("r<i>"),Cf:s("r<J?>"),AN:s("r<be>"),T:s("hK"),m:s("ae"),ud:s("e2"),Eh:s("bV<@>"),AQ:s("E<aT>"),hk:s("E<bT>"),b:s("E<bg>"),xp:s("E<cu>"),nx:s("E<ae>"),rW:s("E<Z<e,e>>"),qr:s("E<bx>"),R:s("E<aw>"),fG:s("E<cU>"),Es:s("E<bZ>"),DX:s("E<+(e,e)>"),pL:s("E<+(i,e)>"),bE:s("E<bA>"),fx:s("E<cW>"),a:s("E<e>"),uh:s("E<iq>"),D0:s("E<dy>"),cf:s("E<c3>"),p7:s("E<d1>"),dd:s("E<A>"),j:s("E<@>"),J:s("E<i>"),ik:s("E<ae?>"),vX:s("E<J?>"),m2:s("hS"),h6:s("N<e,aH>"),gJ:s("N<e,cK>"),q:s("N<e,e>"),no:s("N<e,b8>"),AC:s("N<@,@>"),ou:s("N<i,e>"),pr:s("N<i,@>"),yx:s("N<e,E<e>>"),mf:s("Z<e,dl>"),vD:s("Z<e,cz>"),ap:s("Z<e,aw>"),G:s("Z<e,e>"),qH:s("Z<e,dv>"),m0:s("Z<e,l>"),gG:s("Z<e,A>"),P:s("Z<e,@>"),f:s("Z<@,@>"),eU:s("Z<i,e>"),pG:s("Z<i,f_>"),tQ:s("Z<i,f0>"),Bx:s("Z<e,E<e>>"),oZ:s("Z<e,J?>"),q1:s("Z<c2,E<c3>>"),ee:s("Z<i,Z<e,e>>"),jT:s("I<e,e?>"),w1:s("e5"),pw:s("cz"),jt:s("cS"),wl:s("bX"),kc:s("bx"),rV:s("fL"),mV:s("eM"),c:s("ar"),K:s("J"),BB:s("bK"),A:s("aw"),oP:s("dn"),wJ:s("bi"),E4:s("by"),A_:s("dp"),U:s("bZ"),DL:s("i3"),AB:s("kD"),yi:s("fN"),xK:s("e8"),Y:s("eQ"),iM:s("Hc"),ep:s("+()"),k0:s("+(bx,ch)"),ut:s("+(b8,d5)"),rf:s("+(A,A)"),mn:s("+influence,light(A,bD)"),tK:s("+effectiveScore,light,score(A,aT,A)"),ez:s("i6"),wZ:s("aa"),lg:s("i8"),tc:s("cV<cu,bA>"),ja:s("cV<cz,e5>"),wm:s("cV<bx,ch>"),qq:s("cV<b8,d5>"),j2:s("P"),m3:s("bA"),yz:s("c_"),z_:s("eT"),F3:s("cW"),Dm:s("ic"),Q:s("e9<e>"),oG:s("e9<i>"),en:s("bB"),gl:s("aZ"),W:s("ea"),u5:s("bC"),bG:s("bM"),ho:s("fV"),EH:s("aO<bI>"),E0:s("aO<bK>"),l:s("cX"),w8:s("eY"),qL:s("b7"),N:s("e"),Aj:s("b8"),jP:s("bN"),d:s("c0"),bp:s("dv"),sg:s("ah"),bs:s("dw"),qF:s("eZ"),hL:s("ec<e,e>"),qt:s("l8"),eP:s("l9"),cV:s("L"),a7:s("k"),qY:s("bE"),L:s("bO"),gM:s("c1"),hF:s("c2"),vw:s("f_"),BX:s("f0"),aA:s("dy"),AP:s("c3"),sy:s("lk"),bB:s("b9"),aS:s("d1"),fu:s("f1"),fw:s("F<bJ>"),vL:s("F<cc>"),vK:s("F<cd>"),Fj:s("F<bC>"),rZ:s("F<bM>"),vY:s("F<e>"),r4:s("F<bE>"),g2:s("F<c1>"),cE:s("F<c2>"),rt:s("S<bB>"),xG:s("S<aZ>"),fh:s("S<bE>"),fW:s("f2"),hR:s("as<@>"),BT:s("iA<J?,J?>"),Ez:s("d4"),rL:s("h0"),xT:s("eh"),wU:s("eg"),la:s("lN"),qS:s("iI"),jS:s("h3"),EF:s("bR<+(e,b8)>"),Br:s("bR<c_>"),V:s("iV"),e:s("iW"),y:s("l"),Bs:s("l()"),kr:s("l(bJ)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(J)"),pz:s("l(bB)"),aV:s("l(aZ)"),y2:s("l(bC)"),ty:s("l(bM)"),Ag:s("l(e)"),rd:s("l(bE)"),da:s("l(c1)"),qR:s("l(c2)"),i:s("A"),z:s("@"),pF:s("@()"),h_:s("@(J)"),nW:s("@(J,cX)"),S:s("i"),eZ:s("bU<ar>?"),r9:s("r<J?>?"),gt:s("ae?"),rK:s("E<@>?"),jd:s("Z<e,E<e>>?"),X:s("J?"),dM:s("yP?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("il?"),F:s("dA<@,@>?"),Af:s("lK?"),k7:s("l?"),wK:s("l(fT)?"),u6:s("A?"),lo:s("i?"),s7:s("be?"),Z:s("~()?"),Cv:s("~(dJ)?"),kC:s("~(dK)?"),pf:s("~(fu)?"),hq:s("~(fC)?"),CA:s("~(dZ)?"),hQ:s("~(bL)?"),Ci:s("~(bB)?"),nf:s("~(bM,bC)?"),DI:s("~(e,A)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),o:s("be"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.il=J.kb.prototype
B.a=J.r.prototype
B.d=J.hJ.prototype
B.c=J.fF.prototype
B.b=J.e1.prototype
B.im=J.e2.prototype
B.io=J.hN.prototype
B.t=A.hW.prototype
B.db=A.i_.prototype
B.dq=J.kz.prototype
B.bN=J.eZ.prototype
B.a7=new A.cI(1,"standard")
B.H=new A.jm(B.a7)
B.bS=new A.cI(0,"concise")
B.bT=new A.cI(2,"verbose")
B.ap=new A.dJ(null,null,null,null,null)
B.ng=new A.jn(0,"none")
B.nh=new A.jp(0,"opaque")
B.dZ=new A.jt(4,"ambience")
B.bX=new A.cs(3,"mono")
B.aM=new A.dc(0,"full")
B.bW=new A.cs(0,"auto")
B.bV=new A.cJ(1,"standard")
B.bU=new A.db(0,"defaultMix")
B.aN=new A.dK(B.bW,B.bV,B.aM,B.bU)
B.aE=new A.kL(0,"pixeldart")
B.e5=new A.hp(B.aE,!0,!1,null,!1,null)
B.e6=new A.hp(B.aE,!1,!1,null,!1,null)
B.bZ=new A.dQ(1,"capturing")
B.e7=new A.dd(B.bZ,null)
B.c_=new A.dQ(3,"rejected")
B.aO=new A.dd(B.c_,null)
B.c0=new A.dQ(4,"applied")
B.bY=new A.dd(B.c0,null)
B.c1=new A.dQ(5,"cancelled")
B.e8=new A.dd(B.c1,null)
B.aP=new A.dQ(2,"conflict")
B.aq=new A.jw(0,"add")
B.ec=new A.ey(0,"zero")
B.a8=new A.ey(1,"one")
B.a9=new A.jx(0,"alpha")
B.D=new A.dR(1,"button")
B.n=new A.dS(0,"normal")
B.ef=new A.b3("settings.back",B.D,"back","back to pause menu",B.n)
B.ar=new A.dR(0,"heading")
B.eg=new A.b3("settings.heading",B.ar,"Settings",null,B.n)
B.eh=new A.b3("settings.controls.heading",B.ar,"Controls",null,B.n)
B.ei=new A.b3("settings.controls.back",B.D,"back","back to settings categories",B.n)
B.ej=new A.b3("pause.heading",B.ar,"Paused",null,B.n)
B.ek=new A.dR(3,"slider")
B.el=new A.dR(4,"toggle")
B.c2=new A.dR(5,"keybind")
B.as=new A.dS(5,"disabled")
B.em=new A.dS(6,"error")
B.en=new A.dS(7,"destructive")
B.c3=new A.dS(8,"remapping")
B.c4=new A.ho()
B.ni=new A.nq()
B.eo=new A.jv()
B.c5=new A.nC()
B.ep=new A.hz(A.X("hz<0&>"))
B.c6=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eq=function() {
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
B.ev=function(getTagFallback) {
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
B.er=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eu=function(hooks) {
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
B.et=function(hooks) {
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
B.es=function(hooks) {
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
B.c7=function(hooks) { return hooks; }

B.i=new A.kg()
B.ew=new A.kw()
B.nk=new A.qo()
B.ex=new A.qp()
B.c8=new A.qr()
B.ey=new A.cW()
B.aF=new A.cj(1,"gradeLUT")
B.ez=new A.cW()
B.eA=new A.qO()
B.eB=new A.qQ()
B.f=new A.qX()
B.c9=new A.lb()
B.mn=new A.d_(0,"position")
B.ms=new A.bE(B.mn,0,3)
B.dR=new A.d_(1,"normal")
B.mt=new A.bE(B.dR,3,3)
B.mo=new A.d_(2,"color")
B.mu=new A.bE(B.mo,6,4)
B.mp=new A.d_(4,"alpha")
B.mv=new A.bE(B.mp,10,1)
B.mq=new A.d_(5,"uv0")
B.mw=new A.bE(B.mq,11,2)
B.mr=new A.d_(8,"legacyMaterialEffect")
B.mx=new A.bE(B.mr,13,1)
B.U=s([B.ms,B.mt,B.mu,B.mv,B.mw,B.mx],A.X("r<bE>"))
B.aa=new A.t1()
B.nj=new A.jJ()
B.eC=new A.tk()
B.aQ=new A.lH()
B.x=new A.lU()
B.at=new A.m3()
B.eD=new A.fo(1.3089969389957472,0.1,60)
B.eE=new A.fo(1.0471975511965976,0.1,60)
B.eF=new A.fo(0.8726646259971648,0.08,45)
B.Q=new A.fr(0,"colorOnly")
B.ca=new A.fr(1,"colorAndDepth")
B.aR=new A.fr(2,"depthOnly")
B.eG=new A.hs(0,"linear")
B.aS=new A.hs(1,"srgb")
B.cb=new A.fs(0,"open")
B.eH=new A.fs(1,"committed")
B.eI=new A.fs(2,"aborted")
B.aT=new A.fw(0,"open")
B.eP=new A.fw(1,"committed")
B.eQ=new A.fw(2,"rolledBack")
B.au=new A.jH(1,"back")
B.av=new A.jK(0,"less")
B.eR=new A.fx(0,"off")
B.cc=new A.fx(1,"errorsOnly")
B.eS=new A.fx(2,"full")
B.aw=new A.bJ(0,"open")
B.cd=new A.bJ(1,"chain")
B.ce=new A.bJ(2,"throughDoor")
B.cf=new A.bJ(3,"letterbox")
B.ab=new A.bJ(4,"ignore")
B.R=new A.fy(0,"opaque")
B.eT=new A.fy(1,"masked")
B.aU=new A.fy(2,"blended")
B.eU=new A.fz(!1,B.av,!1,!0,B.a8,B.a8,B.aq,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eV=new A.fz(!0,B.av,!1,!0,B.a8,B.a8,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.ed=new A.ey(2,"srcAlpha")
B.ee=new A.ey(3,"oneMinusSrcAlpha")
B.eW=new A.fz(!0,B.av,!1,!0,B.ed,B.ee,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eX=new A.dV(0)
B.eY=new A.dV(24e5)
B.cg=new A.cc(0,"compliance")
B.eZ=new A.fA(B.cg)
B.ch=new A.cc(1,"rupture")
B.f_=new A.fA(B.ch)
B.ci=new A.cc(2,"synchronisation")
B.f0=new A.fA(B.ci)
B.cj=new A.eC(0,"front")
B.f1=new A.eC(1,"rearService")
B.f2=new A.eC(2,"sideBoundary")
B.f3=new A.eC(3,"roofline")
B.r=new A.dW(0,"north")
B.ac=new A.dW(1,"east")
B.p=new A.dW(2,"south")
B.ad=new A.dW(3,"west")
B.f4=new A.dX(0,"ground")
B.f5=new A.dX(1,"first")
B.f6=new A.dX(2,"hidden")
B.f7=new A.dY(1,"portal")
B.f9=new A.dY(3,"inventory")
B.ck=new A.dY(4,"aftermath")
B.f8=new A.dY(2,"window")
B.fb=new A.eD(B.f8,"shutter","the shutter")
B.fa=new A.dY(5,"none")
B.fc=new A.eD(B.fa,null,null)
B.fd=new A.D("saved mantle history is malformed",null,null)
B.fe=new A.D("rupture elapsed time is malformed",null,null)
B.ff=new A.D("presentation keys must be strings",null,null)
B.fg=new A.D("unsupported accessibility profile",null,null)
B.fh=new A.D("inventory inspections must be an object",null,null)
B.fi=new A.D("screenplay event random range is invalid",null,null)
B.cl=new A.D("saved mantle state is malformed",null,null)
B.fj=new A.D("inactive rupture has elapsed time",null,null)
B.fk=new A.D("control sensitivity is outside 0.1\u20133.0",null,null)
B.fl=new A.D("invalid action bindings",null,null)
B.fm=new A.D("listener room is empty",null,null)
B.fn=new A.D("control bindings conflict",null,null)
B.fo=new A.D("saved difficulty state is malformed",null,null)
B.fp=new A.D("saved house drift state is malformed",null,null)
B.fq=new A.D("saved sleep record is malformed",null,null)
B.fr=new A.D("UI scale must be between 0.8 and 2.0",null,null)
B.fs=new A.D("unsupported settings store",null,null)
B.ft=new A.D("screenplay scene must be an object",null,null)
B.fu=new A.D("settings values must be an object",null,null)
B.fv=new A.D("saved day-loop sleepHistory must be a list",null,null)
B.fw=new A.D("invalid anisotropy limit",null,null)
B.fx=new A.D("audio event position is not finite",null,null)
B.fy=new A.D("event sequence must be non-negative",null,null)
B.fz=new A.D("screenplay branch is invalid",null,null)
B.fA=new A.D("inventory inspection counts are invalid",null,null)
B.fB=new A.D("only keybinds can be remapping",null,null)
B.fC=new A.D("modelScale must be positive and finite",null,null)
B.fD=new A.D("listener position is not finite",null,null)
B.fE=new A.D("screenplay event has invalid core fields",null,null)
B.fF=new A.D("invalid action ID",null,null)
B.fG=new A.D("saved window state is malformed",null,null)
B.fH=new A.D("unsupported graphics preset",null,null)
B.fI=new A.D("save run and meta must be objects",null,null)
B.fJ=new A.D("saved house state is malformed",null,null)
B.fK=new A.D("saved sleep record must be an object",null,null)
B.fL=new A.D("sound cue must be a non-empty string",null,null)
B.fM=new A.D("saved session run is malformed",null,null)
B.fN=new A.D("save map keys must be strings",null,null)
B.fO=new A.D("unsupported graphics profile",null,null)
B.fP=new A.D("screenplay scene has invalid id, day, or title",null,null)
B.fQ=new A.D("unsupported audio options",null,null)
B.fR=new A.D("transform.scale must be positive",null,null)
B.fS=new A.D("Escape is reserved for pause navigation",null,null)
B.fT=new A.D("saved day-loop state is malformed",null,null)
B.fU=new A.D("rupture extinguished mantle is unknown",null,null)
B.cm=new A.D("unsupported controls profile",null,null)
B.cn=new A.D("saved portal state is malformed",null,null)
B.fV=new A.D("acoustic portal profile is not finite",null,null)
B.fW=new A.D("saved house state does not match this house",null,null)
B.fX=new A.D("presentation snapshot contains a non-finite number",null,null)
B.fY=new A.D("screenplay array contains invalid text",null,null)
B.fZ=new A.D("screenplay event day/hour is out of range",null,null)
B.h_=new A.D("unsupported gameplay settings profile",null,null)
B.h0=new A.D("save contains a non-finite number",null,null)
B.h1=new A.D("unsupported graphics store",null,null)
B.h2=new A.D("screenplay option is invalid",null,null)
B.h3=new A.D("screenplay needs sources and scenes arrays",null,null)
B.h4=new A.D("brush component needs an id and label",null,null)
B.h5=new A.D("text.json root must be an object",null,null)
B.h6=new A.D("screenplay root must be an object",null,null)
B.h7=new A.D("event kind is empty",null,null)
B.h8=new A.D("screenplay event effects are invalid",null,null)
B.h9=new A.D("invalid control binding token",null,null)
B.ha=new A.D("audio transmission muffle is invalid",null,null)
B.hb=new A.D("acoustic portal muffle order is invalid",null,null)
B.hc=new A.D("unsupported settings profile",null,null)
B.hd=new A.D("saved session clock is malformed",null,null)
B.he=new A.D("rupture mantle IDs are malformed",null,null)
B.hf=new A.D("invalid gameplay setting: contextualReminders",null,null)
B.hg=new A.D("invalid screen-reader verbosity",null,null)
B.hh=new A.D("saved sleep record has an unknown enum",null,null)
B.hi=new A.D("audio cue variants are empty",null,null)
B.hj=new A.D("screenplay beat has invalid kind or text",null,null)
B.hk=new A.D("save root must be an object",null,null)
B.hl=new A.D("audio event identity is empty",null,null)
B.hm=new A.D("screenplay event random range is out of range",null,null)
B.hn=new A.D("render capabilities contain invalid limits",null,null)
B.ho=new A.D("saved house overrides are malformed",null,null)
B.T=new A.bW(0,0,0)
B.cN=new A.bW(1,1,1)
B.j2=s([],t.Fk)
B.bd=s([],t.cv)
B.hp=new A.jX(B.T,B.T,0,1,null,null,B.cN,0,null,B.j2,B.bd)
B.co=new A.aH(0,0,0)
B.hq=new A.eE(0,"idle")
B.ax=new A.eE(1,"active")
B.hr=new A.eE(2,"ended")
B.hs=new A.eE(3,"aborted")
B.cp=new A.fB(0,"outside")
B.ht=new A.fB(1,"intersects")
B.hu=new A.fB(2,"inside")
B.hv=new A.eG(0,"timeAdvanced")
B.hw=new A.eG(1,"dayEndReached")
B.hx=new A.eG(4,"slept")
B.hy=new A.eG(5,"complianceFloorTripped")
B.aV=new A.dg(0,"twentyFourHour")
B.cq=new A.dg(1,"twelveHour")
B.cr=new A.dh(0,"important")
B.cs=new A.dh(1,"always")
B.aW=new A.cd(0,"pauseAndMute")
B.ct=new A.di(0,"press")
B.cu=new A.di(1,"hold")
B.cv=new A.dj(0,"compact")
B.cw=new A.dj(1,"spacious")
B.cx=new A.cL(1,"standard")
B.cy=new A.cL(2,"detailed")
B.cz=new A.dk(0,"toast")
B.cA=new A.dk(1,"detailed")
B.cB=new A.cM(1,"readable")
B.hE=new A.hD(0,"vertex")
B.cC=new A.hD(1,"indices")
B.cD=new A.k1(0,"staticDraw")
B.h=new A.hE(0,"ready")
B.S=new A.hE(1,"lost")
B.ae=new A.fD(0,"prepared")
B.hF=new A.fD(1,"committed")
B.hG=new A.fD(2,"rolledBack")
B.hH=new A.eH(0,"color")
B.cE=new A.eH(1,"colorAndGlow")
B.hI=new A.eH(2,"colorDepthGlow")
B.aX=new A.eH(3,"depthOnly")
B.aY=new A.hG(1,"linear")
B.cF=new A.k3(0,"clampToEdge")
B.hJ=new A.k2(1,1,1,!1,B.aY,B.aY,B.cF,1)
B.aZ=new A.hG(2,"linearMipmapLinear")
B.hK=new A.cO(0,"beforeShadow")
B.hL=new A.cO(2,"beforeDepth")
B.cG=new A.cO(3,"afterDepth")
B.cH=new A.cO(4,"beforeWorld")
B.hM=new A.cO(5,"afterWorld")
B.I=new A.cO(6,"afterResolve")
B.hN=new A.cO(9,"beforePresent")
B.cI=new A.ce(0,"readBeforeWrite")
B.hO=new A.ce(1,"duplicateWriter")
B.hP=new A.ce(2,"sampledMultisampledAttachment")
B.b_=new A.ce(3,"invalidResolve")
B.hQ=new A.ce(4,"formatOrSizeMismatch")
B.hR=new A.ce(5,"unversionedReadWrite")
B.hS=new A.ce(6,"invalidHistoryRead")
B.hT=new A.ce(7,"dependencyCycle")
B.hU=new A.ce(8,"missingCapability")
B.cJ=new A.ct(0,"high")
B.b0=new A.ct(1,"standard")
B.b1=new A.dZ(1,B.b0,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.ay=new A.e_(0,"player")
B.b2=new A.e_(1,"inserted")
B.cK=new A.e_(2,"warden")
B.cL=new A.eI(0,"wrongKind")
B.cM=new A.eI(1,"staleGeneration")
B.hX=new A.eI(2,"doubleRelease")
B.az=new A.eI(3,"releasedResource")
B.i_=new A.cP("kitchen-range","settle")
B.i0=new A.cP("front-door-knocker","knock")
B.i1=new A.cP("cellar-drain","drip")
B.i2=new A.cP("bedroom-timber","creak")
B.i3=new A.cP("kitchen-pipe","tick")
B.i4=new A.cP("bathroom-cistern","settle")
B.i5=new A.cP("landing-window","wind")
B.ik=new A.ka(1,"visitor")
B.ip=new A.pB(null)
B.iq=new A.pC(null)
B.b3=new A.ki(!1,0,0.85,0.92,1)
B.ir=new A.bW(0.008,0.012,0.024)
B.cO=s([0,2,2,3],t.t)
B.is=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b4=s([B.cr,B.cs],A.X("r<dh>"))
B.it=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.iu=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b5=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.C=new A.bB(0,"audio")
B.N=new A.id(0,"level")
B.lE=new A.aZ("master","Master",B.C,B.N,1,0,1,"audio")
B.lJ=new A.aZ("voice","Visitor voice",B.C,B.N,1,0,1,"audio")
B.lA=new A.aZ("effects","Effects",B.C,B.N,1,0,1,"audio")
B.lB=new A.aZ("ambience","House ambience",B.C,B.N,1,0,1,"audio")
B.lF=new A.aZ("music","Music",B.C,B.N,1,0,1,"audio")
B.aG=new A.bB(1,"display")
B.lI=new A.aZ("brightness","Display brightness",B.aG,B.N,1,0.6,1.4,"display")
B.ah=new A.id(1,"toggle")
B.lD=new A.aZ("muted","Mute house audio",B.C,B.ah,!1,null,null,"audio")
B.a2=new A.bB(2,"accessibility")
B.lG=new A.aZ("mono","Mono-compatible mix",B.a2,B.ah,!1,null,null,"audio")
B.lC=new A.aZ("high-contrast","High-contrast interface",B.a2,B.ah,!1,null,null,"display")
B.lH=new A.aZ("strong-highlights","Strong focus highlights",B.a2,B.ah,!1,null,null,"display")
B.A=s([B.lE,B.lJ,B.lA,B.lB,B.lF,B.lI,B.lD,B.lG,B.lC,B.lH],A.X("r<aZ>"))
B.z=s(["who","verb","object","place","time"],t.s)
B.e_=new A.db(1,"strong")
B.b6=s([B.bU,B.e_],A.X("r<db>"))
B.e9=new A.ex(0,"swap")
B.ea=new A.ex(1,"replace")
B.eb=new A.ex(2,"cancel")
B.iv=s([B.e9,B.ea,B.eb],A.X("r<ex>"))
B.iw=s([2,5,9,12,16,19],t.t)
B.hz=new A.cd(1,"pauseOnly")
B.hA=new A.cd(2,"continuePlayback")
B.aA=s([B.aW,B.hz,B.hA],A.X("r<cd>"))
B.ix=s(["uQuantizationBits","uDitherStrength"],t.s)
B.iz=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.iA=s([B.aw,B.cd,B.ce,B.cf,B.ab],A.X("r<bJ>"))
B.iB=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iC=s(["30","60","display"],t.s)
B.ao=new A.c2(0,"full")
B.bP=new A.c2(1,"compressed")
B.bQ=new A.c2(2,"off")
B.cP=s([B.ao,B.bP,B.bQ],A.X("r<c2>"))
B.b7=s([B.aV,B.cq],A.X("r<dg>"))
B.iD=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e4=new A.dc(1,"reduced")
B.b8=s([B.aM,B.e4],A.X("r<dc>"))
B.e0=new A.cJ(0,"wide")
B.e1=new A.cJ(2,"night")
B.b9=s([B.e0,B.bV,B.e1],A.X("r<cJ>"))
B.iE=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iP=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cQ=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.ba=s([B.cv,B.cw],A.X("r<dj>"))
B.lX=new A.bM(0,"long")
B.dG=new A.bM(1,"short")
B.cR=s([B.lX,B.dG],A.X("r<bM>"))
B.eN=new A.ca("1 - 9","Select Response",!0)
B.eJ=new A.ca("SPACE","Silence Ring",!1)
B.iR=s([B.eN,B.eJ],t.sa)
B.X=new A.bL(0,"visual")
B.bq=new A.bL(1,"graphics")
B.Y=new A.bL(2,"gameplay")
B.br=new A.bL(3,"controls")
B.E=new A.bL(4,"audio")
B.F=new A.bL(5,"accessibility")
B.iS=s([B.X,B.bq,B.Y,B.br,B.E,B.F],A.X("r<bL>"))
B.iT=s(["master","voice","effects","ambience","music"],t.s)
B.bb=s([B.cz,B.cA],A.X("r<dk>"))
B.cS=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hV=new A.ct(2,"safe")
B.hW=new A.ct(3,"custom")
B.cT=s([B.cJ,B.b0,B.hV,B.hW],A.X("r<ct>"))
B.B=new A.cj(0,"inactive")
B.bB=new A.cj(2,"affineWarp")
B.dz=new A.cj(3,"vertexSnap")
B.bC=new A.cj(4,"tapeGiveup")
B.bD=new A.cj(5,"portalFail")
B.a0=new A.cj(6,"lightsOut")
B.cU=s([B.B,B.aF,B.bB,B.dz,B.bC,B.bD,B.a0],A.X("r<cj>"))
B.iU=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iV=s([B.ay,B.b2,B.cK],A.X("r<e_>"))
B.iW=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.nb=new A.bo("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.na=new A.bo("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.n6=new A.bo("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.ne=new A.bo("ronnie.response","named","A route card has Ronnie written on its back.")
B.nd=new A.bo("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iX=s([B.nb,B.na,B.n6,B.ne,B.nd],t.uk)
B.nc=new A.bo("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.n9=new A.bo("ronnie.response","named","The name Ronnie holds when the room does not.")
B.n7=new A.bo("denise.revision","accepted","One correction remains yours to protect.")
B.n4=new A.bo("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iY=s([B.nc,B.n9,B.n7,B.n4],t.uk)
B.j7=s([],t.Fm)
B.j6=s([],t.op)
B.iZ=s([],A.X("r<cv>"))
B.j1=s([],A.X("r<Ha>"))
B.V=s([],t.qP)
B.j8=s([],t.u)
B.cW=s([],t.xB)
B.j_=s([],t.El)
B.m=s([],t.s)
B.cX=s([],t.ld)
B.j5=s([],t.nm)
B.j0=s([],t.t)
B.bc=s([],t.zz)
B.hZ=new A.hI(15,"kitchen",-0.3,0)
B.hY=new A.hI(19,"spare-room",0,0.3)
B.J=s([B.hZ,B.hY],A.X("r<hI>"))
B.ja=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lU=new A.bC(0,"bed")
B.lV=new A.bC(1,"chair")
B.lW=new A.bC(2,"floor")
B.cY=s([B.lU,B.lV,B.lW],A.X("r<bC>"))
B.jb=s(["high","medium","low"],t.s)
B.e2=new A.cs(1,"headphones")
B.e3=new A.cs(2,"speakers")
B.be=s([B.bW,B.e2,B.e3,B.bX],A.X("r<cs>"))
B.jc=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bf=s([B.ct,B.cu],A.X("r<di>"))
B.bp=new A.ci(0,"root")
B.de=new A.bi(0,"pauseMenu")
B.ki=new A.dn(B.bp,B.de,null)
B.jd=s([B.ki],t.bA)
B.bg=s([B.bS,B.a7,B.bT],A.X("r<cI>"))
B.hC=new A.cM(0,"instant")
B.hD=new A.cM(2,"slow")
B.bh=s([B.hC,B.cB,B.hD],A.X("r<cM>"))
B.je=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.jf=s([B.C,B.aG,B.a2],A.X("r<bB>"))
B.cZ=s([B.r,B.ac,B.p,B.ad],A.X("r<dW>"))
B.O=new A.du(0,"pbrMaterial")
B.a3=new A.du(1,"shadowsAndOcclusion")
B.ai=new A.du(2,"surfaceWeathering")
B.l=new A.du(3,"atmosphereAndPost")
B.lR=new A.du(4,"debugView")
B.bi=s([B.O,B.a3,B.ai,B.l,B.lR],A.X("r<du>"))
B.bE=new A.b7(0,"depthTest")
B.bF=new A.b7(1,"depthFunc")
B.bG=new A.b7(2,"depthWrite")
B.bH=new A.b7(3,"blendEnable")
B.bI=new A.b7(4,"blendFunc")
B.bJ=new A.b7(5,"blendEquation")
B.bK=new A.b7(6,"cullEnable")
B.bL=new A.b7(7,"cullFace")
B.dJ=new A.b7(8,"frontFace")
B.m_=new A.b7(9,"stencilEnable")
B.dH=new A.b7(10,"colorMask")
B.dI=new A.b7(11,"scissorEnable")
B.jg=s([B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.bL,B.dJ,B.m_,B.dH,B.dI],A.X("r<b7>"))
B.aH=new A.cC(0,"none")
B.lL=new A.cC(1,"albedoOnly")
B.lM=new A.cC(2,"normalsOnly")
B.lN=new A.cC(3,"roughnessOnly")
B.lO=new A.cC(4,"metallicOnly")
B.lP=new A.cC(5,"aoOnly")
B.lQ=new A.cC(6,"wireframeOnly")
B.d_=s([B.aH,B.lL,B.lM,B.lN,B.lO,B.lP,B.lQ],A.X("r<cC>"))
B.jh=s(["off","errors","full"],t.s)
B.ji=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jj=s(["off","profile","standard","high"],t.s)
B.jk=s(["srgb","linear"],t.s)
B.jl=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jm=s(["uBloomStrength"],t.s)
B.jn=s(["uLutSize","uStrength"],t.s)
B.jo=s([B.cg,B.ch,B.ci],A.X("r<cc>"))
B.jp=s(["uTexelSize","uNear","uFar"],t.s)
B.d0=s(["uTexelStep"],t.s)
B.jq=s(["uninitialized"],t.s)
B.hB=new A.cL(0,"minimal")
B.bj=s([B.hB,B.cx,B.cy],A.X("r<cL>"))
B.n8=new A.bo("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.n3=new A.bo("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.n2=new A.bo("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.n5=new A.bo("ronnie.response","named","The route card gives one name its own line.")
B.jr=s([B.n8,B.n3,B.n2,B.n5],t.uk)
B.a5=new A.c1(0,"waiting")
B.am=new A.c1(1,"atDoor")
B.an=new A.c1(2,"consulting")
B.aI=new A.c1(3,"resolved")
B.js=s([B.a5,B.am,B.an,B.aI],A.X("r<c1>"))
B.eO=new A.ca("W A S D","Move",!1)
B.eM=new A.ca("TAB","Journal",!1)
B.eL=new A.ca("CAPS","Shader Lab",!1)
B.eK=new A.ca("ESC","Pause",!1)
B.jt=s([B.eO,B.eM,B.eL,B.eK],t.sa)
B.ju=s(["floor-linoleum","ceiling-stained"],t.s)
B.jX={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.jv=new A.a4(B.jX,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.X("a4<e,J?>"))
B.k8={uAlbedo:0}
B.d1=new A.a4(B.k8,[0],t.I)
B.kf={uSsaoRaw:0,uSceneDepth:1}
B.jw=new A.a4(B.kf,[0,1],t.I)
B.dc={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iO=s(["KeyW","GamepadDpadUp"],t.s)
B.iN=s(["KeyS","GamepadDpadDown"],t.s)
B.iF=s(["KeyA","GamepadDpadLeft"],t.s)
B.iG=s(["KeyD","GamepadDpadRight"],t.s)
B.iH=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iL=s(["KeyQ","GamepadB"],t.s)
B.iQ=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.j9=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iM=s(["KeyR","GamepadX"],t.s)
B.iI=s(["KeyF","GamepadRB"],t.s)
B.iJ=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iK=s(["KeyL"],t.s)
B.iy=s(["Escape","GamepadMenu"],t.s)
B.jx=new A.a4(B.dc,[B.iO,B.iN,B.iF,B.iG,B.iH,B.iL,B.iQ,B.j9,B.iM,B.iI,B.iJ,B.iK,B.iy],A.X("a4<e,E<e>>"))
B.jy=new A.a4(B.dc,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.kc={uScene:0,uHistory:1}
B.jz=new A.a4(B.kc,[0,1],t.I)
B.jN={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jA=new A.a4(B.jN,["93a7e35137dd4ffbb46188b1a69d5f63b1baa889","1f419bbd28fa7106d339f88ce329963330c6413e","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.1.2.0"],t.w)
B.k_={aPosition:0,aUvMat:1}
B.d2=new A.a4(B.k_,[0,4],t.I)
B.kd={uScene:0,uLut:1}
B.jB=new A.a4(B.kd,[0,1],t.I)
B.ke={uSource:0}
B.d3=new A.a4(B.ke,[0],t.I)
B.k6={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jC=new A.a4(B.k6,[0,1,2,3,4,5,6],t.I)
B.d4=new A.cN([B.X,"settings.visual",B.bq,"settings.graphics",B.Y,"settings.gameplay",B.br,"settings.controls",B.E,"settings.audio",B.F,"settings.accessibility"],t.EJ)
B.d5=new A.cN([B.X,"visual",B.bq,"graphics",B.Y,"gameplay",B.br,"controls",B.E,"audio",B.F,"accessibility"],t.EJ)
B.jV={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jD=new A.a4(B.jV,[0,1,2],t.I)
B.kh={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jE=new A.a4(B.kh,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.w)
B.k1={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.ig=new A.bh("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.ia=new A.bh("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.ie=new A.bh("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.ii=new A.bh("wallpaper-damp","grime",7106925,0.94,0.76)
B.ib=new A.bh("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.ih=new A.bh("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.ij=new A.bh("wallpaper-peeling","grime",9340536,0.91,0.68)
B.ic=new A.bh("floor-wood","wall-plaster",7755327,0.88,0.22)
B.i8=new A.bh("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.i9=new A.bh("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.i6=new A.bh("floor-concrete","grime",7828331,0.96,0.92)
B.i7=new A.bh("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.id=new A.bh("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bk=new A.a4(B.k1,[B.ig,B.ia,B.ie,B.ii,B.ib,B.ih,B.ij,B.ic,B.i8,B.i9,B.i6,B.i7,B.id],A.X("a4<e,bh>"))
B.k9={uBloom:0}
B.jF=new A.a4(B.k9,[0],t.I)
B.ka={uSceneDepth:0}
B.jG=new A.a4(B.ka,[0],t.I)
B.kb={uScene:0}
B.jH=new A.a4(B.kb,[0],t.I)
B.K={}
B.d7=new A.a4(B.K,[],A.X("a4<e,ho>"))
B.d6=new A.a4(B.K,[],t.w)
B.bl=new A.a4(B.K,[],A.X("a4<e,A>"))
B.y=new A.a4(B.K,[],t.I)
B.nl=new A.a4(B.K,[],A.X("a4<e,e?>"))
B.jI=new A.a4(B.K,[],A.X("a4<@,@>"))
B.jQ={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jJ=new A.a4(B.jQ,[0,1,2,3,4,5,6],t.I)
B.df=new A.cA(0,"resume")
B.dg=new A.cA(1,"settings")
B.dh=new A.cA(2,"controls")
B.di=new A.cA(3,"save")
B.dj=new A.cA(4,"help")
B.dk=new A.cA(5,"credits")
B.dl=new A.cA(6,"back")
B.jK=new A.cN([B.df,"pause.resume",B.dg,"pause.settings",B.dh,"pause.controls",B.di,"pause.save",B.dj,"pause.help",B.dk,"pause.credits",B.dl,"pause.back"],A.X("cN<cA,e>"))
B.k3={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jL=new A.a4(B.k3,[0,1,2,3],t.I)
B.kg={uTex:0}
B.jM=new A.a4(B.kg,[0],t.I)
B.bm=new A.cN([B.aF,1,B.bB,1.5,B.dz,1.5,B.bC,2,B.bD,2,B.a0,4],A.X("cN<cj,A>"))
B.nm=new A.hU(0,"srgb")
B.nn=new A.hU(1,"linear")
B.bn=new A.eL(0,"resident")
B.d8=new A.eL(1,"pending")
B.d9=new A.eL(2,"missing")
B.da=new A.eL(3,"evicted")
B.j3=s([],t.bA)
B.j4=s([],A.X("r<bi>"))
B.bo=new A.e6(B.j3,B.j4,null)
B.dd=new A.ci(1,"settings")
B.kj=new A.ci(2,"visual")
B.kk=new A.ci(3,"graphics")
B.kl=new A.ci(4,"gameplay")
B.km=new A.ci(5,"controls")
B.kn=new A.ci(6,"audio")
B.ko=new A.ci(7,"accessibility")
B.kp=new A.ci(8,"credits")
B.W=new A.bi(1,"settings")
B.kq=new A.bi(2,"journal")
B.kr=new A.bi(3,"sleep")
B.ks=new A.bi(4,"help")
B.kt=new A.bi(5,"visitor")
B.ku=new A.bi(6,"ending")
B.dm=new A.e7(0,"opened")
B.dn=new A.e7(2,"backed")
B.dp=new A.e7(3,"resumed")
B.kv=new A.e7(4,"dismissed")
B.Z=new A.e7(5,"unchanged")
B.kw=new A.by("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kx=new A.by("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ky=new A.by("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kz=new A.by("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kA=new A.by("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kB=new A.by("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kC=new A.by("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kD=new A.by("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kE=new A.by("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kF=new A.kx(0,1,null)
B.kH=new A.ky(1,"high")
B.kG=new A.qq(!1,!0,!0,!0,!1,B.kH,35,256)
B.kI=new A.kC(1,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bs=new A.eP(0,"safe")
B.L=new A.eP(1,"standard")
B.a_=new A.eP(2,"high")
B.a1=new A.aL(B.K,0,t.M)
B.af=new A.e8(B.bs,B.a1)
B.k7={shadows:0}
B.lz=new A.aL(B.k7,1,t.M)
B.dr=new A.e8(B.L,B.lz)
B.jS={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lr=new A.aL(B.jS,5,t.M)
B.ds=new A.e8(B.a_,B.lr)
B.kJ=new A.eP(4,"shipping")
B.jU={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.ls=new A.aL(B.jU,7,t.M)
B.no=new A.e8(B.kJ,B.ls)
B.kL=new A.aP(0,1)
B.kM=new A.b_(0.35,0.52,0.88)
B.kN=new A.ay(0.46,0.25,0.2)
B.dt=new A.b_(0.22,0.45,0.92)
B.kO=new A.ay(0.48,0.4,0.34)
B.kP=new A.ay(0.31,0.25,0.23)
B.bt=new A.b_(0.75,0.52,0.42)
B.kQ=new A.b_(0.4,0.65,0.95)
B.bu=new A.b_(0.88,0.96,1)
B.kR=new A.ay(0.37,0.33,0.31)
B.kS=new A.b_(0.62,0.48,0.45)
B.kT=new A.ay(0.34,0.32,0.29)
B.du=new A.ay(0.38,0.25,0.19)
B.bv=new A.b_(0.9,0.8,0.72)
B.aB=new A.b_(0.28,0.16,0.12)
B.kU=new A.ay(0.31,0.28,0.24)
B.aC=new A.b_(0.65,0.45,0.35)
B.kV=new A.ay(0.58,0.56,0.5)
B.dv=new A.b_(0.2,0.38,0.9)
B.kW=new A.ay(0.44,0.37,0.28)
B.kX=new A.ay(0.52,0.5,0.44)
B.kY=new A.ay(0.24,0.25,0.27)
B.kZ=new A.ay(0.28,0.27,0.25)
B.l_=new A.b_(0.35,0.28,0.25)
B.dw=new A.b_(0.52,0.32,0.38)
B.l0=new A.ay(0.42,0.4,0.38)
B.l1=new A.ay(0.18,0.2,0.21)
B.l2=new A.ay(0.2,0.12,0.1)
B.aD=new A.b_(0.35,0.2,0.15)
B.l3=new A.ay(0.12,0.15,0.2)
B.l4=new A.fQ(0,"constructed")
B.M=new A.fQ(1,"ready")
B.bw=new A.fQ(2,"lost")
B.l5=new A.i8(B.af,384,216,1,B.aS,0,512,32,4,1,B.cc)
B.bx=new A.eR(0,"constructed")
B.l6=new A.eR(1,"initializing")
B.by=new A.eR(2,"ready")
B.dx=new A.eR(3,"contextLost")
B.j=new A.fR(0,"read")
B.k=new A.fR(1,"write")
B.G=new A.fR(2,"historyRead")
B.bz=new A.fS(0,"prepared")
B.l7=new A.fS(1,"committed")
B.l8=new A.fS(2,"rolledBack")
B.q=new A.ia(0,"rgba8")
B.l9=new A.aI("dofBlurH",B.q,192,108,1,0)
B.la=new A.aI("dofBlurV",B.q,192,108,1,0)
B.lb=new A.aI("dofOutput",B.q,384,216,1,0)
B.dy=new A.ia(2,"depth24")
B.lc=new A.aI("shadowMap",B.dy,512,512,1,0)
B.ld=new A.aI("ssaoRaw",B.q,192,108,1,0)
B.le=new A.aI("ssaoBlurred",B.q,192,108,1,0)
B.lf=new A.aI("gradeOutput",B.q,384,216,1,0)
B.lg=new A.aI("vhsOutput",B.q,384,216,1,0)
B.lh=new A.aI("sceneDepth",B.dy,384,216,1,0)
B.li=new A.aI("bloomBlurH",B.q,192,108,1,0)
B.lj=new A.aI("bloomBlurV",B.q,192,108,1,0)
B.lk=new A.aI("present",B.q,384,216,1,0)
B.bA=new A.aI("sceneColor",B.q,384,216,1,0)
B.ll=new A.aI("ps1Output",B.q,384,216,1,0)
B.lm=new A.eU(null,"save storage unavailable")
B.ln=new A.eU(null,"save could not be recovered")
B.lo=new A.eU(null,null)
B.jY={WheelUp:0,WheelDown:1}
B.lp=new A.aL(B.jY,2,t.M)
B.k4={open:0,closed:1}
B.lq=new A.aL(B.k4,2,t.M)
B.jR={Escape:0}
B.dA=new A.aL(B.jR,1,t.M)
B.jP={open:0,closed:1,mixed:2}
B.lt=new A.aL(B.jP,3,t.M)
B.k2={front:0,"rear-service":1}
B.lu=new A.aL(B.k2,2,t.M)
B.k5={overcast:0,rain:1}
B.lv=new A.aL(B.k5,2,t.M)
B.k0={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lw=new A.aL(B.k0,16,t.M)
B.jZ={Escape:0,Tab:1,F11:2}
B.dB=new A.aL(B.jZ,3,t.M)
B.jW={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lx=new A.aL(B.jW,5,t.M)
B.jT={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ag=new A.aL(B.jT,7,t.M)
B.jO={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.ly=new A.aL(B.jO,9,t.M)
B.dE=new A.eW(2,"link")
B.lK=new A.ie(B.dE,"gl.createProgram() returned null")
B.dC=new A.eW(0,"vertex")
B.dD=new A.eW(1,"fragment")
B.dF=new A.eW(3,"validation")
B.lS=new A.ig(0,"full")
B.lT=new A.ig(2,"culled")
B.a4=new A.L(0,1,0)
B.bO=new A.L(0,-1,0)
B.lY=new A.bD(-1,B.a4,B.bO,B.cN,1,1,0.3,0.5)
B.cV=s([],t.n)
B.lZ=new A.kZ(!1,"","",B.cV,B.cV)
B.dK=new A.dv(0,"resident")
B.dL=new A.dv(1,"pending")
B.dM=new A.dv(2,"missing")
B.dN=new A.dv(3,"evicted")
B.al=new A.L(0,0,0)
B.kK=new A.kI(0,0,0,1)
B.u=new A.l5(B.al,B.kK)
B.m0=A.co("H0")
B.m1=A.co("H1")
B.m2=A.co("oh")
B.m3=A.co("Cc")
B.m4=A.co("Cs")
B.m5=A.co("Ct")
B.m6=A.co("Cu")
B.m7=A.co("ae")
B.m8=A.co("J")
B.m9=A.co("wJ")
B.ma=A.co("Dh")
B.mb=A.co("Di")
B.mc=A.co("il")
B.e=new A.cZ(0,"float1")
B.aj=new A.cZ(1,"float2")
B.o=new A.cZ(2,"float3")
B.md=new A.cZ(3,"float4")
B.v=new A.cZ(4,"mat4")
B.dO=new A.cZ(5,"mat4Array")
B.bM=new A.x(B.e,0)
B.dP=new A.x(B.e,1)
B.P=new A.cZ(6,"sampler")
B.w=new A.x(B.P,0)
B.ak=new A.x(B.P,1)
B.dQ=new A.x(B.P,2)
B.me=new A.x(B.P,3)
B.mf=new A.x(B.P,4)
B.mg=new A.x(B.P,5)
B.mh=new A.x(B.P,6)
B.mi=new A.t0(!1)
B.mj=new A.L(0,0,1)
B.mk=new A.L(1,0,0)
B.ml=new A.L(1/0,1/0,1/0)
B.mm=new A.L(-1/0,-1/0,-1/0)
B.dS=new A.d_(6,"tangent4")
B.my=new A.ee(0,"visitorAnswered")
B.dT=new A.ee(1,"visitorIgnored")
B.mz=new A.ee(2,"entryVerified")
B.mA=new A.ee(3,"entryContradicted")
B.mB=new A.ee(4,"exposureAccepted")
B.mD=new A.d0(1,"malformedDay")
B.mE=new A.d0(2,"malformedTier")
B.dU=new A.d0(3,"missingTierLines")
B.a6=new A.d0(6,"invalidPhase")
B.mH=new A.bm(B.a6,"No reaction is due.")
B.mP=new A.b9(B.mH)
B.mM=new A.bm(B.a6,"The active visit cannot be chosen.")
B.mQ=new A.b9(B.mM)
B.mI=new A.bm(B.a6,"The active visit has no line to advance.")
B.mR=new A.b9(B.mI)
B.mG=new A.d0(5,"noActiveVisit")
B.mJ=new A.bm(B.mG,"There is no active visit.")
B.dV=new A.b9(B.mJ)
B.mL=new A.bm(B.a6,"A visit is already active.")
B.mS=new A.b9(B.mL)
B.mF=new A.d0(4,"noArrival")
B.mO=new A.bm(B.mF,"The authored arrival is missing.")
B.mT=new A.b9(B.mO)
B.mK=new A.bm(B.a6,"That answer is not offered.")
B.mU=new A.b9(B.mK)
B.mC=new A.d0(0,"missingCorpus")
B.mN=new A.bm(B.mC,"The authored visitor corpus is empty.")
B.mV=new A.b9(B.mN)
B.dW=new A.f4(1,"exact")
B.bR=new A.f4(2,"partial")
B.aJ=new A.f4(3,"contradiction")
B.mW=new A.f4(0,"skipped")
B.mX=new A.f3(B.mW,B.a1)
B.mY=new A.f3(B.bR,B.a1)
B.mZ=new A.is(B.V,!1)
B.n_=new A.is(B.V,!0)
B.dX=new A.iu(0,"horizontal")
B.n0=new A.iu(1,"vertical")
B.dY=new A.iw(0,"horizontal")
B.n1=new A.iw(1,"vertical")
B.aK=new A.h2(0,"empty")
B.nf=new A.h2(1,"cpuReady")
B.aL=new A.h2(4,"released")})();(function staticFields(){$.tJ=null
$.c8=A.c([],A.X("r<J>"))
$.yE=null
$.qu=0
$.qv=A.Fn()
$.y4=null
$.y3=null
$.AE=null
$.Au=null
$.AM=null
$.vy=null
$.vG=null
$.xG=null
$.u0=A.c([],A.X("r<E<J>?>"))
$.hd=null
$.j8=null
$.j9=null
$.xd=!1
$.ao=B.x
$.z_=""
$.z0=null
$.yW=null
$.qb=null
$.dC=A.ac()
$.fd=A.ac()
$.aR=null
$.wW=A.ac()
$.zW=null
$.y=A.ac()
$.d6=A.ac()
$.ad=A.ac()
$.W=A.ac()
$.bb=A.ac()
$.T=A.ac()
$.wV=A.ac()
$.x_=null
$.x8=null
$.bd=null
$.wZ=!1
$.xn=!1
$.j6=B.aN
$.eo=B.ap
$.vl=!1
$.xy=!1
$.zY=null
$.mk=null
$.mg=null
$.zK=0
$.xe=null
$.mo=!1
$.zX=!1
$.xf=0
$.ep=0
$.x1="booting"
$.cn=0
$.ff=0
$.az="hall"
$.j3=A.ac()
$.ub=A.ac()
$.c6=A.ac()
$.A2=null
$.xo=0
$.xs=1.65
$.er=null
$.bc=null
$.jd=!1
$.cm=A.ac()
$.h8=A.ac()
$.j2=A.ac()
$.md=A.ac()
$.zy=A.ac()
$.zx=A.ac()
$.at=A.ac()
$.me=A.ac()
$.j1=A.ac()
$.mc=A.ac()
$.j4=A.ac()
$.j5=A.ac()
$.fc=A.ac()
$.en=A.ac()
$.h7=A.ac()
$.j0=A.ac()
$.iZ=A.ac()
$.j_=A.ac()
$.aE=A.ac()
$.mb=A.ac()
$.bG=A.ac()
$.vm=A.a_(t.S)
$.d7=A.c([],t.s)
$.x6=null
$.Ak=!1
$.zB=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"H3","AW",()=>A.vA("_$dart_dartClosure"))
s($,"H2","wj",()=>A.vA("_$dart_dartClosure_dartJSInterop"))
s($,"HM","Bj",()=>A.c([new J.kc()],A.X("r<ib>")))
s($,"Hf","AX",()=>A.dx(A.rX({
toString:function(){return"$receiver$"}})))
s($,"Hg","AY",()=>A.dx(A.rX({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Hh","AZ",()=>A.dx(A.rX(null)))
s($,"Hi","B_",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hl","B2",()=>A.dx(A.rX(void 0)))
s($,"Hm","B3",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hk","B1",()=>A.dx(A.yX(null)))
s($,"Hj","B0",()=>A.dx(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ho","B5",()=>A.dx(A.yX(void 0)))
s($,"Hn","B4",()=>A.dx(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Hq","xR",()=>A.DG())
s($,"Hu","Ba",()=>A.CK(4096))
s($,"Hs","B8",()=>new A.u8().$0())
s($,"Ht","B9",()=>new A.u7().$0())
s($,"Hr","B7",()=>A.CJ(A.a2(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"HF","jj",()=>A.mx(B.m8))
s($,"Hd","xQ",()=>{A.CV()
return $.qu})
s($,"H_","AV",()=>B.bA.h1())
s($,"H8","xP",()=>A.kv(A.c([255,255,255,255],t.t)))
s($,"H5","xM",()=>A.kv(A.c([128,128,255,255],t.t)))
s($,"H4","xL",()=>A.kv(A.c([0,0,0,255],t.t)))
s($,"H6","xN",()=>A.kv(A.c([255,255,0,255],t.t)))
s($,"H7","xO",()=>A.kv(A.c([255,255,255,255],t.t)))
s($,"HR","Bn",()=>A.io(0,1,0))
s($,"Hp","B6",()=>A.DD(A.a_(t.N),0,0,A.io(0,0,0)))
s($,"HO","Bk",()=>A.yL("^[a-z0-9][a-z0-9._-]*$"))
s($,"HU","fk",()=>{var q=$.yW
if(q==null){A.vv()
A.vv()
A.vv()
A.vv()
q=$.yW=new A.rM()}return q})
s($,"H9","wk",()=>A.ws(B.aV,B.cr,!0,B.aW,B.ct,B.cw,B.cx,B.cz,!0,!1,B.cB))
s($,"HA","Bc",()=>new A.np())
r($,"Ao","d9",()=>A.wG(null,null))
r($,"j7","ji",()=>A.fE(null,null))
r($,"x5","fj",()=>A.fv(null,null,!1,1,!1,!1,2,1))
r($,"x9","cG",()=>$.wk())
s($,"HG","Bf",()=>new A.p_())
s($,"HH","Bg",()=>new A.p9())
s($,"HI","wm",()=>new A.po(A.n(t.N,t.S)))
s($,"HC","Bd",()=>A.ed().gb2().h(0,"debugPause")==="1")
s($,"Hz","jh",()=>A.ed().gb2().h(0,"automation")==="1")
s($,"Hw","wl",()=>A.FE())
s($,"Hv","xS",()=>$.wl()!=null)
s($,"Hx","xT",()=>$.jh()?A.ed().gb2().h(0,"captureMantleId"):null)
s($,"Hy","Bb",()=>A.ed().gb2().h(0,"captureMantleLit")==="1")
r($,"xr","ev",()=>A.io(0,0,0))
r($,"xl","Bi",()=>A.io(0,0,0))
r($,"xz","wn",()=>A.io(0,0,0))
s($,"HB","xU",()=>A.FF())
s($,"HK","my",()=>new A.oi(A.io(0,0,0)))
s($,"HJ","Bh",()=>new A.pM(new A.nY()))
s($,"HD","cp",()=>new A.oD(A.c([],t.s)))
s($,"HN","hn",()=>{var q=new A.rz(B.aH)
q.f=A.X("E<ea>").a(A.c([A.a3(B.O,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a3(B.O,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a3(B.O,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a3(B.O,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a3(B.O,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a3(B.a3,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a3(B.a3,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a3(B.a3,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a3(B.a3,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a3(B.a3,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a3(B.ai,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a3(B.ai,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a3(B.ai,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a3(B.ai,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a3(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a3(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a3(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a3(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a3(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a3(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a3(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a3(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a3(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a3(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a3(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a3(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a3(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a3(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a3(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a3(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a3(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a3(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a3(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a3(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a3(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a3(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a3(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a3(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a3(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a3(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a3(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a3(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a3(B.O,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.X("r<ea>")))
return q})
s($,"HQ","Bm",()=>new A.ry(A.n(t.N,t.z)))
s($,"HP","Bl",()=>new A.qx(A.CX(520588),B.b3))
s($,"HE","Be",()=>new A.oW())
s($,"HL","hm",()=>new A.qf(B.bo))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fM,ArrayBuffer:A.fL,ArrayBufferView:A.hZ,DataView:A.ko,Float32Array:A.hW,Float64Array:A.kp,Int16Array:A.kq,Int32Array:A.kr,Int8Array:A.ks,Uint16Array:A.kt,Uint32Array:A.ku,Uint8ClampedArray:A.eM,CanvasPixelArray:A.eM,Uint8Array:A.i_})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.hX.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"
A.iH.$nativeSuperclassTag="ArrayBufferView"
A.hY.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.mw
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
