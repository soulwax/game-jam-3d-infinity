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
if(a[b]!==s){A.Ix(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.yU(b)
return new s(c,this)}:function(){if(s===null)s=A.yU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.yU(a).prototype
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
yZ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
wO(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.yX==null){A.Ic()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.a(A.Ai("Return interceptor for "+A.u(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.uF
if(o==null)o=$.uF=A.wN(n)
p=q[o]}if(p!=null)return p
p=A.Ii(a)
if(p!=null)return p
if(typeof a=="function")return B.j5
s=Object.getPrototypeOf(a)
if(s==null)return B.dx
if(s===Object.prototype)return B.dx
if(typeof q=="function"){o=$.uF
if(o==null)o=$.uF=A.wN(n)
Object.defineProperty(q,o,{value:B.bU,enumerable:false,writable:true,configurable:true})
return B.bU}return B.bU},
zH(a,b){if(a<0||a>4294967295)throw A.a(A.b_(a,0,4294967295,"length",null))
return J.zJ(new Array(a),b)},
zI(a,b){if(a<0)throw A.a(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
xJ(a,b){if(a<0)throw A.a(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
zJ(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
DV(a,b){var s=t.hO
return J.zf(s.a(a),s.a(b))},
zL(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
DW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.zL(r))break;++b}return b},
DX(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.zL(q))break}return b},
eC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.i1.prototype
return J.kF.prototype}if(typeof a=="string")return J.ef.prototype
if(a==null)return J.i2.prototype
if(typeof a=="boolean")return J.kE.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.fW.prototype
return a}if(a instanceof A.I)return a
return J.wO(a)},
aN(a){if(typeof a=="string")return J.ef.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.fW.prototype
return a}if(a instanceof A.I)return a
return J.wO(a)},
cK(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.fW.prototype
return a}if(a instanceof A.I)return a
return J.wO(a)},
BZ(a){if(typeof a=="number")return J.fV.prototype
if(typeof a=="string")return J.ef.prototype
if(a==null)return a
if(!(a instanceof A.I))return J.fb.prototype
return a},
C_(a){if(typeof a=="string")return J.ef.prototype
if(a==null)return a
if(!(a instanceof A.I))return J.fb.prototype
return a},
C0(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fX.prototype
if(typeof a=="bigint")return J.fW.prototype
return a}if(a instanceof A.I)return a
return J.wO(a)},
zd(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.BZ(a).a4(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eC(a).a7(a,b)},
aV(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Ih(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).h(a,b)},
bc(a,b,c){return J.cK(a).k(a,b,c)},
eG(a,b){return J.cK(a).l(a,b)},
CL(a,b){return J.C_(a).fZ(a,b)},
jH(a,b){return J.cK(a).L(a,b)},
ze(a,b,c){return J.C0(a).h0(a,b,c)},
CM(a,b,c){return J.C0(a).h1(a,b,c)},
CN(a,b){return J.cK(a).cI(a,b)},
zf(a,b){return J.BZ(a).G(a,b)},
zg(a,b){return J.aN(a).p(a,b)},
n3(a,b){return J.cK(a).a2(a,b)},
CO(a,b){return J.cK(a).a3(a,b)},
zh(a){return J.cK(a).gW(a)},
aE(a){return J.eC(a).gP(a)},
jI(a){return J.aN(a).gO(a)},
CP(a){return J.aN(a).gZ(a)},
P(a){return J.cK(a).gu(a)},
cN(a){return J.aN(a).gt(a)},
eH(a){return J.eC(a).ga5(a)},
zi(a,b){return J.cK(a).T(a,b)},
dU(a,b,c){return J.cK(a).bn(a,b,c)},
CQ(a,b){return J.aN(a).st(a,b)},
CR(a,b){return J.C_(a).aQ(a,b)},
bY(a){return J.eC(a).q(a)},
zj(a,b){return J.cK(a).en(a,b)},
kC:function kC(){},
kE:function kE(){},
i2:function i2(){},
i4:function i4(){},
eg:function eg(){},
l0:function l0(){},
fb:function fb(){},
du:function du(){},
fW:function fW(){},
fX:function fX(){},
r:function r(a){this.$ti=a},
kD:function kD(){},
pW:function pW(a){this.$ti=a},
eI:function eI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fV:function fV(){},
i1:function i1(){},
kF:function kF(){},
ef:function ef(){}},A={xK:function xK(){},
wH(){return $},
D3(a,b,c){if(t.he.b(a))return new A.iR(a,b.i("@<0>").K(c).i("iR<1,2>"))
return new A.eM(a,b.i("@<0>").K(c).i("eM<1,2>"))},
zP(a){return new A.fY("Field '"+a+"' has been assigned during initialization.")},
a7(a){return new A.fY("Field '"+a+"' has not been initialized.")},
DZ(a){return new A.fY("Field '"+a+"' has already been initialized.")},
wP(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b5(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lx(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fu(a,b,c){return a},
yY(a){var s,r
for(s=$.ce.length,r=0;r<s;++r)if(a===$.ce[r])return!0
return!1},
lv(a,b,c,d){A.lc(b,"start")
if(c!=null){A.lc(c,"end")
if(b>c)A.h(A.b_(b,0,c,"start",null))}return new A.iF(a,b,c,d.i("iF<0>"))},
kL(a,b,c,d){if(t.he.b(a))return new A.dk(a,b,c.i("@<0>").K(d).i("dk<1,2>"))
return new A.cD(a,b,c.i("@<0>").K(d).i("cD<1,2>"))},
cB(){return new A.he("No element")},
zG(){return new A.he("Too many elements")},
ep:function ep(){},
hL:function hL(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b){this.a=a
this.$ti=b},
iR:function iR(a,b){this.a=a
this.$ti=b},
iP:function iP(){},
b4:function b4(a,b){this.a=a
this.$ti=b},
fY:function fY(a){this.a=a},
dj:function dj(a){this.a=a},
rM:function rM(){},
S:function S(){},
X:function X(){},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
dk:function dk(a,b,c){this.a=a
this.b=b
this.$ti=c},
i8:function i8(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
hU:function hU(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hS:function hS(a){this.$ti=a},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
iL:function iL(a,b){this.a=a
this.$ti=b},
ay:function ay(){},
el:function el(){},
hh:function hh(){},
bF:function bF(a,b){this.a=a
this.$ti=b},
ji:function ji(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.az(a.gY(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.az(a.gaf(),!0,c)
m=new A.a2(q,n,b.i("@<0>").K(c).i("a2<1,2>"))
m.$keys=l
return m}return new A.hO(A.aZ(a,b,c),b.i("@<0>").K(c).i("hO<1,2>"))},
D9(){throw A.a(A.bk("Cannot modify unmodifiable Map"))},
Da(){throw A.a(A.bk("Cannot modify constant Set"))},
Cg(a){var s=A.Cf(a)
if(s!=null)return s
return"minified:"+a},
Ih(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
u(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bY(a)
return s},
ip(a){var s,r=$.A0
if(r==null)r=$.A0=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dz(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
f0(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.b7(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
l7(a){var s,r,q,p
if(a instanceof A.I)return A.bL(A.cf(a),null)
s=J.eC(a)
if(s===B.j4||s===B.j6||t.qF.b(a)){r=B.cg(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bL(A.cf(a),null)},
A3(a){var s,r,q
if(a==null||typeof a=="number"||A.bA(a))return J.bY(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.e6)return a.q(0)
if(a instanceof A.bK)return a.fR(!0)
s=$.CG()
for(r=0;r<1;++r){q=s[r].nV(a)
if(q!=null)return q}return"Instance of '"+A.l7(a)+"'"},
Eg(){return Date.now()},
En(){var s,r
if($.rj!==0)return
$.rj=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rj=1e6
$.rk=new A.ri(r)},
Ef(){if(!!self.location)return self.location.href
return null},
Eo(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
au(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dE(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.b_(a,0,1114111,null,null))},
h6(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Em(a){var s=A.h6(a).getUTCFullYear()+0
return s},
Ek(a){var s=A.h6(a).getUTCMonth()+1
return s},
A1(a){var s=A.h6(a).getUTCDate()+0
return s},
A2(a){var s=A.h6(a).getUTCHours()+0
return s},
Ej(a){var s=A.h6(a).getUTCMinutes()+0
return s},
El(a){var s=A.h6(a).getUTCSeconds()+0
return s},
Ei(a){var s=A.h6(a).getUTCMilliseconds()+0
return s},
Eh(a){var s=a.$thrownJsError
if(s==null)return null
return A.cL(s)},
A4(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aO(a,s)
a.$thrownJsError=s
s.stack=b.q(0)}},
wQ(a){throw A.a(A.wD(a))},
d(a,b){if(a==null)J.cN(a)
throw A.a(A.wK(a,b))},
wK(a,b){var s,r="index"
if(!A.aS(b))return new A.cw(!0,b,r,null)
s=A.f(J.cN(a))
if(b<0||b>=s)return A.pM(b,s,a,r)
return A.A6(b,r)},
I4(a,b,c){if(a>c)return A.b_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b_(b,a,c,"end",null)
return new A.cw(!0,b,"end",null)},
wD(a){return new A.cw(!0,a,null,null)},
a(a){return A.aO(a,new Error())},
aO(a,b){var s
if(a==null)a=new A.dG()
b.dartException=a
s=A.IA
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
IA(){return J.bY(this.dartException)},
h(a,b){throw A.aO(a,b==null?new Error():b)},
b2(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.Gg(a,b,c),s)},
Gg(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.iG("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.a(A.ax(a))},
dH(a){var s,r,q,p,o,n
a=A.Ca(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.tQ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
tR(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Ah(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
xL(a,b){var s=b==null,r=s?null:b.method
return new A.kG(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.qP(a)
if(a instanceof A.hT){s=a.a
return A.eD(a,s==null?A.fr(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eD(a,a.dartException)
return A.HA(a)},
eD(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
HA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dE(r,16)&8191)===10)switch(q){case 438:return A.eD(a,A.xL(A.u(s)+" (Error "+q+")",null))
case 445:case 5007:A.u(s)
return A.eD(a,new A.ih())}}if(a instanceof TypeError){p=$.Ck()
o=$.Cl()
n=$.Cm()
m=$.Cn()
l=$.Cq()
k=$.Cr()
j=$.Cp()
$.Co()
i=$.Ct()
h=$.Cs()
g=p.b2(s)
if(g!=null)return A.eD(a,A.xL(A.q(s),g))
else{g=o.b2(s)
if(g!=null){g.method="call"
return A.eD(a,A.xL(A.q(s),g))}else if(n.b2(s)!=null||m.b2(s)!=null||l.b2(s)!=null||k.b2(s)!=null||j.b2(s)!=null||m.b2(s)!=null||i.b2(s)!=null||h.b2(s)!=null){A.q(s)
return A.eD(a,new A.ih())}}return A.eD(a,new A.lB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iC()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eD(a,new A.cw(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iC()
return a},
cL(a){var s
if(a instanceof A.hT)return a.b
if(a==null)return new A.j6(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.j6(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
n1(a){if(a==null)return J.aE(a)
if(typeof a=="object")return A.ip(a)
return J.aE(a)},
HX(a){if(typeof a=="number")return B.c.gP(a)
if(a instanceof A.mA)return A.ip(a)
if(a instanceof A.bK)return a.gP(a)
return A.n1(a)},
BX(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
I9(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
GG(a,b,c,d,e,f){t.BO.a(a)
switch(A.f(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.uq("Unsupported number of arguments for wrapped closure"))},
hD(a,b){var s=a.$identity
if(!!s)return s
s=A.HZ(a,b)
a.$identity=s
return s},
HZ(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.GG)},
D8(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lu().constructor.prototype):Object.create(new A.fA(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.zq(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.D4(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.zq(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
D4(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.D_)}throw A.a("Error in functionType of tearoff")},
D5(a,b,c,d){var s=A.zp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
zq(a,b,c,d){if(c)return A.D7(a,b,d)
return A.D5(b.length,d,a,b)},
D6(a,b,c,d){var s=A.zp,r=A.D0
switch(b?-1:a){case 0:throw A.a(new A.lh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
D7(a,b,c){var s,r
if($.zn==null)$.zn=A.zm("interceptor")
if($.zo==null)$.zo=A.zm("receiver")
s=b.length
r=A.D6(s,c,a,b)
return r},
yU(a){return A.D8(a)},
D_(a,b){return A.ja(v.typeUniverse,A.cf(a.a),b)},
zp(a){return a.a},
D0(a){return a.b},
zm(a){var s,r,q,p=new A.fA("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.w("Field name "+a+" not found.",null))},
wN(a){return v.getIsolateTag(a)},
Ce(){return v.G},
Jt(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Ii(a){var s,r,q,p,o,n=A.q($.C1.$1(a)),m=$.wL[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.wU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ak($.BR.$2(a,n))
if(q!=null){m=$.wL[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.wU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.xn(s)
$.wL[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.wU[n]=s
return s}if(p==="-"){o=A.xn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.C8(a,s)
if(p==="*")throw A.a(A.Ai(n))
if(v.leafTags[n]===true){o=A.xn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.C8(a,s)},
C8(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.yZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
xn(a){return J.yZ(a,!1,null,!!a.$ic_)},
Ik(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.xn(s)
else return J.yZ(s,c,null,null)},
Ic(){if(!0===$.yX)return
$.yX=!0
A.Id()},
Id(){var s,r,q,p,o,n,m,l
$.wL=Object.create(null)
$.wU=Object.create(null)
A.Ib()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.C9.$1(o)
if(n!=null){m=A.Ik(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Ib(){var s,r,q,p,o,n,m=B.eR()
m=A.hC(B.eS,A.hC(B.eT,A.hC(B.ch,A.hC(B.ch,A.hC(B.eU,A.hC(B.eV,A.hC(B.eW(B.cg),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.C1=new A.wR(p)
$.BR=new A.wS(o)
$.C9=new A.wT(n)},
hC(a,b){return a(b)||b},
I0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
zM(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.O("Illegal RegExp pattern ("+String(o)+")",a,null))},
Iv(a,b,c){var s=a.indexOf(b,c)
return s>=0},
I7(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ca(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z0(a,b,c){var s=A.Iw(a,b,c)
return s},
Iw(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ca(b),"g"),A.I7(c))},
aB:function aB(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b){this.a=a
this.$ti=b},
fH:function fH(){},
od:function od(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fk:function fk(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cT:function cT(a,b){this.a=a
this.$ti=b},
fI:function fI(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b){this.a=a
this.$ti=b},
ri:function ri(a){this.a=a},
iw:function iw(){},
tQ:function tQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ih:function ih(){},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function lB(a){this.a=a},
qP:function qP(a){this.a=a},
hT:function hT(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a
this.b=null},
e6:function e6(){},
k_:function k_(){},
k0:function k0(){},
ly:function ly(){},
lu:function lu(){},
fA:function fA(a,b){this.a=a
this.b=b},
lh:function lh(a){this.a=a},
cl:function cl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
q4:function q4(a){this.a=a},
qe:function qe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
M:function M(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eV:function eV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
wR:function wR(a){this.a=a},
wS:function wS(a){this.a=a},
wT:function wT(a){this.a=a},
bK:function bK(){},
et:function et(){},
dM:function dM(){},
i3:function i3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mf:function mf(a){this.b=a},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iE:function iE(a,b){this.a=a
this.c=b},
mw:function mw(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Ix(a){throw A.aO(A.zP(a),new Error())},
p(){throw A.aO(A.a7(""),new Error())},
b8(){throw A.aO(A.DZ(""),new Error())},
z1(){throw A.aO(A.zP(""),new Error())},
ae(){var s=new A.up()
return s.b=s},
up:function up(){this.b=null},
vl(a,b,c){},
a0(a){return a},
E8(a,b,c){A.vl(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
E9(a){return new Int8Array(a)},
Ea(a){return new Uint8Array(a)},
kX(a){return new Uint8Array(A.a0(a))},
zZ(a,b,c){A.vl(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dR(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.wK(b,a))},
B8(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.I4(a,b,c))
return b},
eh:function eh(){},
h3:function h3(){},
ie:function ie(){},
v9:function v9(a){this.a=a},
kQ:function kQ(){},
bg:function bg(){},
ic:function ic(){},
id:function id(){},
ib:function ib(){},
kR:function kR(){},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
eZ:function eZ(){},
ig:function ig(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
xW(a,b){var s=b.c
return s==null?b.c=A.j8(a,"aP",[b.x]):s},
Ab(a){var s=a.w
if(s===6||s===7)return A.Ab(a.x)
return s===11||s===12},
Ex(a){return a.as},
Z(a){return A.v8(v.typeUniverse,a,!1)},
ft(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ft(a1,s,a3,a4)
if(r===s)return a2
return A.AG(a1,r,!0)
case 7:s=a2.x
r=A.ft(a1,s,a3,a4)
if(r===s)return a2
return A.AF(a1,r,!0)
case 8:q=a2.y
p=A.hA(a1,q,a3,a4)
if(p===q)return a2
return A.j8(a1,a2.x,p)
case 9:o=a2.x
n=A.ft(a1,o,a3,a4)
m=a2.y
l=A.hA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.y6(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hA(a1,j,a3,a4)
if(i===j)return a2
return A.AH(a1,k,i)
case 11:h=a2.x
g=A.ft(a1,h,a3,a4)
f=a2.y
e=A.Hw(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.AE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hA(a1,d,a3,a4)
o=a2.x
n=A.ft(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.y7(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.jP("Attempted to substitute unexpected RTI kind "+a0))}},
hA(a,b,c,d){var s,r,q,p,o=b.length,n=A.ve(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ft(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Hx(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ve(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ft(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Hw(a,b,c,d){var s,r=b.a,q=A.hA(a,r,c,d),p=b.b,o=A.hA(a,p,c,d),n=b.c,m=A.Hx(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.m8()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
yV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ia(s)
return a.$S()}return null},
Ie(a,b){var s
if(A.Ab(b))if(a instanceof A.e6){s=A.yV(a)
if(s!=null)return s}return A.cf(a)},
cf(a){if(a instanceof A.I)return A.o(a)
if(Array.isArray(a))return A.z(a)
return A.yt(J.eC(a))},
z(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.yt(a)},
yt(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.GD(a,s)},
GD(a,b){var s=a instanceof A.e6?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Fz(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ia(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.v8(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
yW(a){return A.de(A.o(a))},
yP(a){var s
if(a instanceof A.bK)return a.fh()
s=a instanceof A.e6?A.yV(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eH(a).a
if(Array.isArray(a))return A.z(a)
return A.cf(a)},
de(a){var s=a.r
return s==null?a.r=new A.mA(a):s},
I8(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.ja(v.typeUniverse,A.yP(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.AJ(v.typeUniverse,s,A.yP(q[r]))}return A.ja(v.typeUniverse,s,a)},
ct(a){return A.de(A.v8(v.typeUniverse,a,!1))},
GC(a){var s=this
s.b=A.Hr(s)
return s.b(a)},
Hr(a){var s,r,q,p,o
if(a===t.K)return A.GM
if(A.fv(a))return A.GS
s=a.w
if(s===6)return A.Gu
if(s===1)return A.Bn
if(s===7)return A.GH
r=A.Hp(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fv)){a.f="$i"+q
if(q==="K")return A.GK
if(a===t.m)return A.GJ
return A.GR}}else if(s===10){p=A.I0(a.x,a.y)
o=p==null?A.Bn:p
return o==null?A.fr(o):o}return A.Gs},
Hp(a){if(a.w===8){if(a===t.S)return A.aS
if(a===t.i||a===t.o)return A.GL
if(a===t.N)return A.GQ
if(a===t.y)return A.bA}return null},
GB(a){var s=this,r=A.Gr
if(A.fv(s))r=A.FX
else if(s===t.K)r=A.fr
else if(A.hF(s)){r=A.Gt
if(s===t.lo)r=A.ye
else if(s===t.dR)r=A.ak
else if(s===t.k7)r=A.B2
else if(s===t.s7)r=A.yf
else if(s===t.u6)r=A.B3
else if(s===t.gt)r=A.L}else if(s===t.S)r=A.f
else if(s===t.N)r=A.q
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.b7
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
Gs(a){var s=this
if(a==null)return A.hF(s)
return A.C4(v.typeUniverse,A.Ie(a,s),s)},
Gu(a){if(a==null)return!0
return this.x.b(a)},
GR(a){var s,r=this
if(a==null)return A.hF(r)
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.eC(a)[s]},
GK(a){var s,r=this
if(a==null)return A.hF(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.eC(a)[s]},
GJ(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.I)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Bm(a){if(typeof a=="object"){if(a instanceof A.I)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Gr(a){var s=this
if(a==null){if(A.hF(s))return a}else if(s.b(a))return a
throw A.aO(A.B9(a,s),new Error())},
Gt(a){var s=this
if(a==null||s.b(a))return a
throw A.aO(A.B9(a,s),new Error())},
B9(a,b){return new A.hn("TypeError: "+A.Ay(a,A.bL(b,null)))},
BU(a,b,c,d){if(A.C4(v.typeUniverse,a,b))return a
throw A.aO(A.Fr("The type argument '"+A.bL(a,null)+"' is not a subtype of the type variable bound '"+A.bL(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
Ay(a,b){return A.kg(a)+": type '"+A.bL(A.yP(a),null)+"' is not a subtype of type '"+b+"'"},
Fr(a){return new A.hn("TypeError: "+a)},
cq(a,b){return new A.hn("TypeError: "+A.Ay(a,b))},
GH(a){var s=this
return s.x.b(a)||A.xW(v.typeUniverse,s).b(a)},
GM(a){return a!=null},
fr(a){if(a!=null)return a
throw A.aO(A.cq(a,"Object"),new Error())},
GS(a){return!0},
FX(a){return a},
Bn(a){return!1},
bA(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aO(A.cq(a,"bool"),new Error())},
B2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aO(A.cq(a,"bool?"),new Error())},
b7(a){if(typeof a=="number")return a
throw A.aO(A.cq(a,"double"),new Error())},
B3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aO(A.cq(a,"double?"),new Error())},
aS(a){return typeof a=="number"&&Math.floor(a)===a},
f(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aO(A.cq(a,"int"),new Error())},
ye(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aO(A.cq(a,"int?"),new Error())},
GL(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aO(A.cq(a,"num"),new Error())},
yf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aO(A.cq(a,"num?"),new Error())},
GQ(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.aO(A.cq(a,"String"),new Error())},
ak(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aO(A.cq(a,"String?"),new Error())},
b(a){if(A.Bm(a))return a
throw A.aO(A.cq(a,"JSObject"),new Error())},
L(a){if(a==null)return a
if(A.Bm(a))return a
throw A.aO(A.cq(a,"JSObject?"),new Error())},
BG(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bL(a[q],b)
return s},
Hd(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.BG(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bL(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Bd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bL(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bL(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bL(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bL(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bL(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bL(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bL(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bL(a.x,b)+">"
if(l===8){p=A.Hz(a.x)
o=a.y
return o.length>0?p+("<"+A.BG(o,b)+">"):p}if(l===10)return A.Hd(a,b)
if(l===11)return A.Bd(a,b,null)
if(l===12)return A.Bd(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Hz(a){var s=A.Cf(a)
if(s!=null)return s
return"minified:"+a},
FA(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Fz(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.v8(a,b,!1)
else if(typeof m=="number"){s=m
r=A.j9(a,5,"#")
q=A.ve(s)
for(p=0;p<s;++p)q[p]=r
o=A.j8(a,b,q)
n[b]=o
return o}else return m},
Fy(a,b){return A.AR(a.tR,b)},
Fx(a,b){return A.AR(a.eT,b)},
v8(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.AI(a,null,b,!1)
r.set(b,s)
return s},
ja(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.AI(a,b,c,!0)
q.set(c,r)
return r},
AJ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.y6(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
AI(a,b,c,d){return A.Fo(A.Fi(a,b,c,d))},
ev(a,b){b.a=A.GB
b.b=A.GC
return b},
j9(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cG(null,null)
s.w=b
s.as=c
r=A.ev(a,s)
a.eC.set(c,r)
return r},
AG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Fv(a,b,r,c)
a.eC.set(r,s)
return s},
Fv(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fv(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hF(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cG(null,null)
q.w=6
q.x=b
q.as=c
return A.ev(a,q)},
AF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Ft(a,b,r,c)
a.eC.set(r,s)
return s},
Ft(a,b,c,d){var s,r
if(d){s=b.w
if(A.fv(b)||b===t.K)return b
else if(s===1)return A.j8(a,"aP",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cG(null,null)
r.w=7
r.x=b
r.as=c
return A.ev(a,r)},
Fw(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=13
s.x=b
s.as=q
r=A.ev(a,s)
a.eC.set(q,r)
return r},
j7(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Fs(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
j8(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.j7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cG(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ev(a,r)
a.eC.set(p,q)
return q},
y6(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.j7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cG(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ev(a,o)
a.eC.set(q,n)
return n},
AH(a,b,c){var s,r,q="+"+(b+"("+A.j7(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ev(a,s)
a.eC.set(q,r)
return r},
AE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.j7(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.j7(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Fs(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cG(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ev(a,p)
a.eC.set(r,o)
return o},
y7(a,b,c,d){var s,r=b.as+("<"+A.j7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Fu(a,b,c,r,d)
a.eC.set(r,s)
return s},
Fu(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ve(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ft(a,b,r,0)
m=A.hA(a,c,r,0)
return A.y7(a,n,m,c!==m)}}l=new A.cG(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ev(a,l)},
Fi(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Fo(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Fk(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.AB(a,r,l,k,!1)
else if(q===46)r=A.AB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fn(a.u,a.e,k.pop()))
break
case 94:k.push(A.Fw(a.u,k.pop()))
break
case 35:k.push(A.j9(a.u,5,"#"))
break
case 64:k.push(A.j9(a.u,2,"@"))
break
case 126:k.push(A.j9(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Fm(a,k)
break
case 38:A.Fl(a,k)
break
case 63:p=a.u
k.push(A.AG(p,A.fn(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.AF(p,A.fn(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Fj(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.AC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Fp(a.u,a.e,o)
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
return A.fn(a.u,a.e,m)},
Fk(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
AB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.FA(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.Ex(o)+'"')
d.push(A.ja(s,o,n))}else d.push(p)
return m},
Fm(a,b){var s,r=a.u,q=A.AA(a,b),p=b.pop()
if(typeof p=="string")b.push(A.j8(r,p,q))
else{s=A.fn(r,a.e,p)
switch(s.w){case 11:b.push(A.y7(r,s,q,a.n))
break
default:b.push(A.y6(r,s,q))
break}}},
Fj(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.AA(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fn(p,a.e,o)
q=new A.m8()
q.a=s
q.b=n
q.c=m
b.push(A.AE(p,r,q))
return
case-4:b.push(A.AH(p,b.pop(),s))
return
default:throw A.a(A.jP("Unexpected state under `()`: "+A.u(o)))}},
Fl(a,b){var s=b.pop()
if(0===s){b.push(A.j9(a.u,1,"0&"))
return}if(1===s){b.push(A.j9(a.u,4,"1&"))
return}throw A.a(A.jP("Unexpected extended operation "+A.u(s)))},
AA(a,b){var s=b.splice(a.p)
A.AC(a.u,a.e,s)
a.p=b.pop()
return s},
fn(a,b,c){if(typeof c=="string")return A.j8(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Fn(a,b,c)}else return c},
AC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fn(a,b,c[s])},
Fp(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fn(a,b,c[s])},
Fn(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.jP("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.jP("Bad index "+c+" for "+b.q(0)))},
C4(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b1(a,b,null,c,null)
r.set(c,s)}return s},
b1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fv(d))return!0
s=b.w
if(s===4)return!0
if(A.fv(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b1(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.b1(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.b1(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b1(a,b.x,c,d,e))return!1
return A.b1(a,A.xW(a,b),c,d,e)}if(s===6)return A.b1(a,p,c,d,e)&&A.b1(a,b.x,c,d,e)
if(q===7){if(A.b1(a,b,c,d.x,e))return!0
return A.b1(a,b,c,A.xW(a,d),e)}if(q===6)return A.b1(a,b,c,p,e)||A.b1(a,b,c,d.x,e)
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
if(!A.b1(a,j,c,i,e)||!A.b1(a,i,e,j,c))return!1}return A.Bl(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.Bl(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.GI(a,b,c,d,e)}if(o&&q===10)return A.GN(a,b,c,d,e)
return!1},
Bl(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b1(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b1(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b1(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b1(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b1(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
GI(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ja(a,b,r[o])
return A.B0(a,p,null,c,d.y,e)}return A.B0(a,b.y,null,c,d.y,e)},
B0(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b1(a,b[s],d,e[s],f))return!1
return!0},
GN(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b1(a,r[s],c,q[s],e))return!1
return!0},
hF(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fv(a))if(s!==6)r=s===7&&A.hF(a.x)
return r},
fv(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
AR(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ve(a){return a>0?new Array(a):v.typeUniverse.sEA},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
m8:function m8(){this.c=this.b=this.a=null},
mA:function mA(a){this.a=a},
m6:function m6(){},
hn:function hn(a){this.a=a},
Fa(){var s,r,q
if(self.scheduleImmediate!=null)return A.HN()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hD(new A.ul(s),1)).observe(r,{childList:true})
return new A.uk(s,r,q)}else if(self.setImmediate!=null)return A.HO()
return A.HP()},
Fb(a){self.scheduleImmediate(A.hD(new A.um(t.O.a(a)),0))},
Fc(a){self.setImmediate(A.hD(new A.un(t.O.a(a)),0))},
Fd(a){A.y_(B.fq,t.O.a(a))},
y_(a,b){return A.Fq(a.a/1000|0,b)},
Fq(a,b){var s=new A.v5()
s.j_(a,b)
return s},
aL(a){return new A.lX(new A.aq($.ap,a.i("aq<0>")),a.i("lX<0>"))},
aK(a,b){a.$2(0,null)
b.b=!0
return b.a},
a4(a,b){A.G_(a,b)},
aJ(a,b){b.dI(a)},
aI(a,b){b.dJ(A.ag(a),A.cL(a))},
G_(a,b){var s,r,q=new A.vi(b),p=new A.vj(b)
if(a instanceof A.aq)a.fP(q,p,t.z)
else{s=t.z
if(a instanceof A.aq)a.ei(q,p,s)
else{r=new A.aq($.ap,t.hR)
r.a=8
r.c=a
r.fP(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ap.hK(new A.wC(s),t.H,t.S,t.z)},
AD(a,b,c){return 0},
nk(a){var s
if(t.yt.b(a)){s=a.gbV()
if(s!=null)return s}return B.ax},
zz(a){var s
a.a(null)
s=new A.aq($.ap,a.i("aq<0>"))
s.de(null)
return s},
DD(a,b,c){var s=new A.aq($.ap,c.i("aq<0>"))
A.EM(a,new A.oU(b,s,c))
return s},
oV(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aq($.ap,b.i("aq<K<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oX(i,h,g,f)
try{for(n=J.P(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.ei(new A.oW(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cu(A.c([],b.i("r<0>")))
return n}i.a=A.cY(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.cL(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.yu(m,k)
m=new A.bd(m,k==null?A.nk(m):k)
n.cs(m)
return n}else{i.d=p
i.c=o}}return f},
yu(a,b){if($.ap===B.y)return null
return null},
GE(a,b){if($.ap!==B.y)A.yu(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbV()
if(b==null){A.A4(a,B.ax)
b=B.ax}}else b=B.ax
else if(t.yt.b(a))A.A4(a,b)
return new A.bd(a,b)},
Fe(a,b){var s=new A.aq($.ap,b.i("aq<0>"))
b.a(a)
s.a=8
s.c=a
return s},
uv(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.EH()
b.cs(new A.bd(new A.cw(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.ft(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c_()
b.ct(o.a)
A.fi(b,p)
return}b.a^=2
A.mU(null,null,b.b,t.O.a(new A.uw(o,b)))},
fi(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.yH(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fi(d.a,c)
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
A.yH(j.a,j.b)
return}g=$.ap
if(g!==h)$.ap=h
else g=null
c=c.c
if((c&15)===8)new A.uA(q,d,n).$0()
else if(o){if((c&1)!==0)new A.uz(q,j).$0()}else if((c&2)!==0)new A.uy(d,q).$0()
if(g!=null)$.ap=g
c=q.c
if(c instanceof A.aq){p=q.a.$ti
p=p.i("aP<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cD(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.uv(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cD(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
BA(a,b){var s
if(t.nW.b(a))return b.hK(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.a(A.al(a,"onError",u.c))},
H1(){var s,r
for(s=$.hx;s!=null;s=$.hx){$.jv=null
r=s.b
$.hx=r
if(r==null)$.ju=null
s.a.$0()}},
Hu(){$.yv=!0
try{A.H1()}finally{$.jv=null
$.yv=!1
if($.hx!=null)$.z8().$1(A.BS())}},
BK(a){var s=new A.lY(a),r=$.ju
if(r==null){$.hx=$.ju=s
if(!$.yv)$.z8().$1(A.BS())}else $.ju=r.b=s},
Hm(a){var s,r,q,p=$.hx
if(p==null){A.BK(a)
$.jv=$.ju
return}s=new A.lY(a)
r=$.jv
if(r==null){s.b=p
$.hx=$.jv=s}else{q=r.b
s.b=q
$.jv=r.b=s
if(q==null)$.ju=s}},
IQ(a,b){A.fu(a,"stream",t.K)
return new A.mv(b.i("mv<0>"))},
EM(a,b){var s=$.ap
if(s===B.y)return A.y_(a,t.O.a(b))
return A.y_(a,t.O.a(s.h3(b)))},
yH(a,b){A.Hm(new A.wp(a,b))},
BF(a,b,c,d,e){var s,r=$.ap
if(r===c)return d.$0()
$.ap=c
s=r
try{r=d.$0()
return r}finally{$.ap=s}},
Hj(a,b,c,d,e,f,g){var s,r=$.ap
if(r===c)return d.$1(e)
$.ap=c
s=r
try{r=d.$1(e)
return r}finally{$.ap=s}},
Hi(a,b,c,d,e,f,g,h,i){var s,r=$.ap
if(r===c)return d.$2(e,f)
$.ap=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ap=s}},
mU(a,b,c,d){t.O.a(d)
if(B.y!==c){d=c.h3(d)
d=d}A.BK(d)},
ul:function ul(a){this.a=a},
uk:function uk(a,b,c){this.a=a
this.b=b
this.c=c},
um:function um(a){this.a=a},
un:function un(a){this.a=a},
v5:function v5(){},
v6:function v6(a,b){this.a=a
this.b=b},
lX:function lX(a,b){this.a=a
this.b=!1
this.$ti=b},
vi:function vi(a){this.a=a},
vj:function vj(a){this.a=a},
wC:function wC(a){this.a=a},
cb:function cb(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bX:function bX(a,b){this.a=a
this.$ti=b},
bd:function bd(a,b){this.a=a
this.b=b},
oU:function oU(a,b,c){this.a=a
this.b=b
this.c=c},
oX:function oX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oW:function oW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
m0:function m0(){},
iN:function iN(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
us:function us(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uw:function uw(a,b){this.a=a
this.b=b},
uu:function uu(a,b){this.a=a
this.b=b},
ut:function ut(a,b){this.a=a
this.b=b},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a,b){this.a=a
this.b=b},
uC:function uC(a){this.a=a},
uz:function uz(a,b){this.a=a
this.b=b},
uy:function uy(a,b){this.a=a
this.b=b},
lY:function lY(a){this.a=a
this.b=null},
mv:function mv(a){this.$ti=a},
jh:function jh(){},
mo:function mo(){},
v3:function v3(a,b){this.a=a
this.b=b},
wp:function wp(a,b){this.a=a
this.b=b},
Az(a,b){var s=a[b]
return s===a?null:s},
y4(a,b,c){if(c==null)a[b]=a
else a[b]=c},
y3(){var s=Object.create(null)
A.y4(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
zR(a,b){return new A.cl(a.i("@<0>").K(b).i("cl<1,2>"))},
J(a,b,c){return b.i("@<0>").K(c).i("xM<1,2>").a(A.BX(a,new A.cl(b.i("@<0>").K(c).i("cl<1,2>"))))},
m(a,b){return new A.cl(a.i("@<0>").K(b).i("cl<1,2>"))},
xN(a){return new A.cp(a.i("cp<0>"))},
a1(a){return new A.cp(a.i("cp<0>"))},
aF(a,b){return b.i("zS<0>").a(A.I9(a,new A.cp(b.i("cp<0>"))))},
y5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fm(a,b,c){var s=new A.fl(a,b,c.i("fl<0>"))
s.c=a.e
return s},
bB(a,b){var s=J.P(a)
if(s.m())return s.gn()
return null},
aZ(a,b,c){var s=A.zR(b,c)
a.aD(0,new A.qf(s,b,c))
return s},
fZ(a,b,c){var s=A.zR(b,c)
s.I(0,a)
return s},
h_(a,b){var s,r=A.xN(b)
for(s=J.P(a);s.m();)r.l(0,b.a(s.gn()))
return r},
eW(a,b){var s=A.xN(b)
s.I(0,a)
return s},
xP(a){var s,r
if(A.yY(a))return"{...}"
s=new A.bw("")
try{r={}
B.a.l($.ce,a)
s.a+="{"
r.a=!0
a.aD(0,new A.qi(r,s))
s.a+="}"}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
FB(){throw A.a(A.bk("Cannot change an unmodifiable set"))},
iS:function iS(){},
uE:function uE(a){this.a=a},
iU:function iU(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fj:function fj(a,b){this.a=a
this.$ti=b},
iT:function iT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
me:function me(a){this.a=a
this.c=this.b=null},
fl:function fl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(){},
a9:function a9(){},
qh:function qh(a){this.a=a},
qi:function qi(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.$ti=b},
iW:function iW(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jb:function jb(){},
h0:function h0(){},
em:function em(a,b){this.a=a
this.$ti=b},
d3:function d3(){},
j5:function j5(){},
mB:function mB(){},
hi:function hi(a,b){this.a=a
this.$ti=b},
ho:function ho(){},
jc:function jc(){},
H6(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.O(String(s),null,null)
throw A.a(q)}q=A.vK(p)
return q},
vK(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.vK(a[s])
return a},
FS(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Cy()
else s=new Uint8Array(o)
for(r=J.aN(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
FR(a,b,c,d){var s=a?$.Cx():$.Cw()
if(s==null)return null
if(0===c&&d===b.length)return A.AQ(s,b)
return A.AQ(s,b.subarray(c,d))},
AQ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
zl(a,b,c,d,e,f){if(B.d.R(f,4)!==0)throw A.a(A.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.O("Invalid base64 padding, more than two '=' characters",a,b))},
zO(a,b,c){return new A.i5(a,b)},
Gf(a){return a.A()},
Ff(a,b){return new A.uH(a,[],A.I_())},
Fg(a,b,c){var s,r=new A.bw(""),q=A.Ff(r,b)
q.d2(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
FT(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mc:function mc(a,b){this.a=a
this.b=b
this.c=null},
uG:function uG(a){this.a=a},
md:function md(a){this.a=a},
vc:function vc(){},
vb:function vb(){},
jM:function jM(){},
v7:function v7(){},
jN:function jN(a,b){this.a=a
this.b=b},
jU:function jU(){},
nW:function nW(){},
e7:function e7(){},
k4:function k4(){},
kf:function kf(){},
i5:function i5(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=b},
kH:function kH(){},
q6:function q6(a){this.b=a},
q5:function q5(a){this.a=a},
uI:function uI(){},
uJ:function uJ(a,b){this.a=a
this.b=b},
uH:function uH(a,b,c){this.c=a
this.a=b
this.b=c},
lF:function lF(){},
tY:function tY(){},
vd:function vd(a){this.b=0
this.c=a},
tX:function tX(a){this.a=a},
va:function va(a){this.a=a
this.b=16
this.c=0},
C3(a){var s=A.dz(a,null)
if(s!=null)return s
throw A.a(A.O(a,null,null))},
BW(a){var s=A.f0(a)
if(s!=null)return s
throw A.a(A.O("Invalid double",a,null))},
Dy(a,b){a=A.aO(a,new Error())
if(a==null)a=A.fr(a)
a.stack=b.q(0)
throw a},
cY(a,b,c,d){var s,r=c?J.zI(a,d):J.zH(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
az(a,b,c){var s,r=A.c([],c.i("r<0>"))
for(s=J.P(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
H(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.P(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.az(a,!1,b)
s.$flags=3
return s},
xZ(a,b,c){var s,r
A.lc(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.a(A.b_(c,b,null,"end",null))
if(s===0)return""}r=A.EK(a,b,c)
return r},
EK(a,b,c){var s=a.length
if(b>=s)return""
return A.Eo(a,b,c==null||c>s?s:c)},
ir(a){return new A.i3(a,A.zM(a,!1,!0,!1,!1,""))},
xY(a,b,c){var s=J.P(b)
if(!s.m())return a
if(c.length===0){do a+=A.u(s.gn())
while(s.m())}else{a+=A.u(s.gn())
while(s.m())a=a+c+A.u(s.gn())}return a},
en(){var s,r,q=A.Ef()
if(q==null)throw A.a(A.bk("'Uri.base' is not supported"))
s=$.Al
if(s!=null&&q===$.Ak)return s
r=A.ER(q)
$.Al=r
$.Ak=q
return r},
EH(){return A.cL(new Error())},
De(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
zs(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
k6(a){if(a>=10)return""+a
return"0"+a},
Dx(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.a(A.al(b,"name","No enum value with that name"))},
kg(a){if(typeof a=="number"||A.bA(a)||a==null)return J.bY(a)
if(typeof a=="string")return JSON.stringify(a)
return A.A3(a)},
Dz(a,b){A.fu(a,"error",t.K)
A.fu(b,"stackTrace",t.l)
A.Dy(a,b)},
jP(a){return new A.jO(a)},
w(a,b){return new A.cw(!1,null,b,a)},
al(a,b,c){return new A.cw(!0,a,b,c)},
A5(a){var s=null
return new A.h7(s,s,!1,s,s,a)},
A6(a,b){return new A.h7(null,null,!0,a,b,"Value not in range")},
b_(a,b,c,d,e){return new A.h7(b,c,!0,a,d,"Invalid value")},
f2(a,b,c){if(0>a||a>c)throw A.a(A.b_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b_(b,a,c,"end",null))
return b}return c},
lc(a,b){if(a<0)throw A.a(A.b_(a,0,null,b,null))
return a},
pM(a,b,c,d){return new A.kz(b,!0,a,d,"Index out of range")},
bk(a){return new A.iG(a)},
Ai(a){return new A.lA(a)},
j(a){return new A.he(a)},
ax(a){return new A.k1(a)},
O(a,b,c){return new A.A(a,b,c)},
DU(a,b,c){var s,r
if(A.yY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.ce,a)
try{A.GT(a,s)}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}r=A.xY(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
xI(a,b,c){var s,r
if(A.yY(a))return b+"..."+c
s=new A.bw(b)
B.a.l($.ce,a)
try{r=s
r.a=A.xY(r.a,a,", ")}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
GT(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.u(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.u(p))
return}r=A.u(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.u(p)
r=A.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
xQ(a,b,c){var s=A.m(b,c)
s.kS(a)
return s},
d_(a,b,c,d,e,f){var s
if(B.h===c){s=J.aE(a)
b=J.aE(b)
return A.lx(A.b5(A.b5($.jG(),s),b))}if(B.h===d){s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
return A.lx(A.b5(A.b5(A.b5($.jG(),s),b),c))}if(B.h===e){s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
d=J.aE(d)
return A.lx(A.b5(A.b5(A.b5(A.b5($.jG(),s),b),c),d))}if(B.h===f){s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
d=J.aE(d)
e=J.aE(e)
return A.lx(A.b5(A.b5(A.b5(A.b5(A.b5($.jG(),s),b),c),d),e))}s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
d=J.aE(d)
e=J.aE(e)
f=J.aE(f)
f=A.lx(A.b5(A.b5(A.b5(A.b5(A.b5(A.b5($.jG(),s),b),c),d),e),f))
return f},
f7(a,b){return new A.hi(A.eW(a,b),b.i("hi<0>"))},
ER(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Aj(a4<a4?B.b.H(a5,0,a4):a5,5,a3).ghS()
else if(s===32)return A.Aj(B.b.H(a5,5,a4),0,a3).ghS()}r=A.cY(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.BJ(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.BJ(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ak(a5,"\\",n))if(p>0)h=B.b.ak(a5,"\\",p-1)||B.b.ak(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ak(a5,"..",n)))h=m>n+2&&B.b.ak(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ak(a5,"file",0)){if(p<=0){if(!B.b.ak(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.H(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bR(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ak(a5,"http",0)){if(i&&o+3===n&&B.b.ak(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bR(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ak(a5,"https",0)){if(i&&o+4===n&&B.b.ak(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bR(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ms(a4<a5.length?B.b.H(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.FL(a5,0,q)
else{if(q===0)A.hp(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.FM(a5,c,p-1):""
a=A.FH(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dz(B.b.H(a5,i,n),a3)
d=A.FJ(a0==null?A.h(A.O("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.FI(a5,n,m,a3,j,a!=null)
a2=m<l?A.FK(a5,m+1,l,a3):a3
return A.FC(j,b,a,d,a1,a2,l<a4?A.FG(a5,l+1,a4):a3)},
An(a){var s=t.N
return B.a.bl(A.c(a.split("&"),t.s),A.m(s,s),new A.tW(B.cj),t.G)},
lE(a,b,c){throw A.a(A.O("Illegal IPv4 address, "+a,b,c))},
EO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lE("each part must be in the range 0..255",a,r)}A.lE("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lE(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b2(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lE(j,a,q)
p=l}A.lE("IPv4 address should contain exactly 4 parts",a,q)},
EP(a,b,c){var s
if(b===c)throw A.a(A.O("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.EQ(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.Am(a,b,c)
return!0},
EQ(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.A(n,a,q)
r=q
break}return new A.A("Unexpected character",a,q-1)}if(r-1===b)return new A.A(n,a,r)
return new A.A("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.A("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.A("Invalid IPvFuture address character",a,r)}},
Am(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.tV(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.EO(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dE(l,8)
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
B.P.ig(s,a0,16,s,a)
B.P.mn(s,a,a0,0)}}return s},
FC(a,b,c,d,e,f,g){return new A.jd(a,b,c,d,e,f,g)},
AK(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hp(a,b,c){throw A.a(A.O(c,a,b))},
FJ(a,b){var s=A.AK(b)
if(a===s)return null
return a},
FH(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hp(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.FE(a,q,r)
if(o<r){n=o+1
p=A.AP(a,B.b.ak(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.EP(a,q,o)
l=B.b.H(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cL(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.AP(a,B.b.ak(a,"25",n)?o+3:n,c,"%25")}else p=""
A.Am(a,b,o)
return"["+B.b.H(a,b,o)+p+"]"}}return A.FO(a,b,c)},
FE(a,b,c){var s=B.b.cL(a,"%",b)
return s>=b&&s<c?s:c},
AP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bw(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.y9(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bw("")
l=h.a+=B.b.H(a,q,r)
if(m)n=B.b.H(a,r,r+3)
else if(n==="%")A.hp(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bw("")
if(q<r){h.a+=B.b.H(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.H(a,q,r)
if(h==null){h=new A.bw("")
m=h}else m=h
m.a+=i
l=A.y8(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.H(a,b,c)
if(q<c){i=B.b.H(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
FO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.y9(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bw("")
k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.H(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bw("")
if(q<r){p.a+=B.b.H(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hp(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bw("")
l=p}else l=p
l.a+=k
j=A.y8(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.H(a,b,c)
if(q<c){k=B.b.H(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
FL(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.AM(a.charCodeAt(b)))A.hp(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hp(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.H(a,b,c)
return A.FD(q?a.toLowerCase():a)},
FD(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
FM(a,b,c){return A.je(a,b,c,16,!1,!1)},
FI(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.je(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.S(q,"/"))q="/"+q
return A.FN(q,e,f)},
FN(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.S(a,"/")&&!B.b.S(a,"\\"))return A.FP(a,!s||c)
return A.FQ(a)},
FK(a,b,c,d){return A.je(a,b,c,256,!0,!1)},
FG(a,b,c){return A.je(a,b,c,256,!0,!1)},
y9(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.wP(r)
o=A.wP(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.au(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.H(a,b,b+3).toUpperCase()
return null},
y8(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.kz(a,6*p)&63|q
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
o+=3}}return A.xZ(s,0,null)},
je(a,b,c,d,e,f){var s=A.AO(a,b,c,d,e,f)
return s==null?B.b.H(a,b,c):s},
AO(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.y9(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hp(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.y8(n)}if(o==null){o=new A.bw("")
k=o}else k=o
k.a=(k.a+=B.b.H(a,p,q))+l
if(typeof m!=="number")return A.wQ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.H(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
AN(a){if(B.b.S(a,"."))return!0
return B.b.bx(a,"/.")!==-1},
FQ(a){var s,r,q,p,o,n,m
if(!A.AN(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.T(s,"/")},
FP(a,b){var s,r,q,p,o,n
if(!A.AN(a))return!b?A.AL(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga0(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.AL(s[0]))}return B.a.T(s,"/")},
AL(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.AM(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.H(a,0,s)+"%3A"+B.b.aQ(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
FF(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.w("Invalid URL encoding",null))}}return r},
ya(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cj===d)return B.b.H(a,b,c)
else p=new A.dj(B.b.H(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.a(A.w("Truncated URI",null))
B.a.l(p,A.FF(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.ne.bu(p)},
AM(a){var s=a|32
return 97<=s&&s<=122},
Aj(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.O(k,a,r))}}if(q<0&&r>b)throw A.a(A.O(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.ga0(j)
if(p!==44||r!==n+7||!B.b.ak(a,"base64",n+1))throw A.a(A.O("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eP.mV(a,m,s)
else{l=A.AO(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bR(a,m,s,l)}return new A.tU(a,j,c)},
BJ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a},
m5:function m5(){},
ar:function ar(){},
jO:function jO(a){this.a=a},
dG:function dG(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kz:function kz(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iG:function iG(a){this.a=a},
lA:function lA(a){this.a=a},
he:function he(a){this.a=a},
k1:function k1(a){this.a=a},
kY:function kY(){},
iC:function iC(){},
uq:function uq(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(){},
I:function I(){},
my:function my(){},
tB:function tB(){this.b=this.a=0},
bw:function bw(a){this.a=a},
tW:function tW(a){this.a=a},
tV:function tV(a){this.a=a},
jd:function jd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
tU:function tU(a,b,c){this.a=a
this.b=b
this.c=c},
ms:function ms(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
m1:function m1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
qO:function qO(a){this.a=a},
Be(a){var s
if(typeof a=="function")throw A.a(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.G2,a)
s[$.xz()]=a
return s},
W(a){var s
if(typeof a=="function")throw A.a(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.G3,a)
s[$.xz()]=a
return s},
G2(a){return t.BO.a(a).$0()},
G3(a,b,c){t.BO.a(a)
if(A.f(c)>=1)return a.$1(b)
return a.$0()},
mZ(a,b,c){return c.a(a[b])},
Bf(a,b){return a[b]},
aU(a,b,c,d){return d.a(a[b].apply(a,c))},
aD(a,b){var s=new A.aq($.ap,b.i("aq<0>")),r=new A.iN(s,b.i("iN<0>"))
a.then(A.hD(new A.xo(r,b),1),A.hD(new A.xp(r),1))
return s},
Bq(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hE(a){if(A.Bq(a))return a
return new A.wI(new A.iU(t.BT)).$1(a)},
xo:function xo(a,b){this.a=a
this.b=b},
xp:function xp(a){this.a=a},
wI:function wI(a){this.a=a},
Ep(a){var s
if(a==null)s=B.aW
else{s=new A.es()
s.bW(a)}return s},
mb:function mb(){},
es:function es(){this.b=this.a=0},
kb:function kb(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
EF(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.az(b3,!0,b1)
B.a.l(b2,128)
while(B.d.R(b2.length,64)!==56)B.a.l(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.l(b2,B.d.ir(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.cY(64,0,!1,b1)
for(g=0;g<16;++g){f=i+g*4
e=b2.length
if(!(f<e))return A.d(b2,f)
d=b2[f]
c=f+1
if(!(c<e))return A.d(b2,c)
c=b2[c]
b=f+2
if(!(b<e))return A.d(b2,b)
b=b2[b]
a=f+3
if(!(a<e))return A.d(b2,a)
B.a.k(h,g,(d<<24|c<<16|b<<8|b2[a])>>>0)}for(g=16;g<64;++g){e=h[g-15]
d=h[g-2]
B.a.k(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.jo[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.F(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.tn()),t.dH).mN(0)},
tn:function tn(){},
lG:function lG(a,b){this.a=a
this.b=b},
E3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.a(A.al(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.t)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.j("part "+r.a+" has no "+b+" payload")
throw A.a(h)}k=q
j=m.h(0,k)
p=j==null?A.h(A.j("model package payload is missing: "+k)):j
J.eG(s,a.lY(new Uint8Array(A.a0(p))))}return new A.qx(a,s)}catch(i){for(h=s,n=A.z(h).i("bF<1>"),h=new A.bF(h,n),h=new A.an(h,h.gt(0),n.i("an<X.E>")),n=n.i("X.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aG(o)}throw i}},
qx:function qx(a,b){this.a=a
this.b=b
this.c=!1},
kO:function kO(a){this.e=a},
qI:function qI(a,b){this.a=a
this.b=b},
qz:function qz(){},
qA:function qA(){},
qB:function qB(){},
E4(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.a8(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.a(B.hA)
s=a.h(0,"parts")
if(!t.j.b(s)||J.jI(s))throw A.a(B.hk)
r=A.wn(a,"assetId")
q=A.wn(a,"packageHash")
p=A.wn(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.P(s),m=t.P;n.m();)o.push(A.E5(m.a(n.gn())))
n=A.yO(a.h(0,"materials"))
m=A.yO(a.h(0,"textures"))
l=A.yO(a.h(0,"lods"))
k=A.Br(a.h(0,"combinedBounds"))
j=A.Hq(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bo(0,new A.qD(),h,h)
i=h}return new A.qC(r,q,p,o,n,m,l,k,j,i==null?B.aF:i)},
E5(a){var s,r,q=A.wn(a,"id"),p=A.ye(a.h(0,"materialSlot"))
if(p==null)p=A.h(B.fO)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bo(0,new A.qH(),r,r)
s=r}return new A.eY(q,p,s==null?B.aF:s)},
wn(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.a(A.O(b+" is required",null,null))
return s},
GO(a){if(a.length===0||B.b.S(a,"/")||B.b.p(a,"\\"))return!1
return B.a.a3(A.c(a.split("/"),t.s),new A.wd())},
yO(a){var s,r
if(a==null)return B.m
if(!t.j.b(a)||J.jH(a,new A.wv()))throw A.a(B.h_)
s=A.c([],t.s)
for(r=J.P(a);r.m();)s.push(A.q(r.gn()))
return s},
Br(a){var s,r
if(a==null)return B.bk
if(!t.j.b(a)||J.jH(a,new A.wg()))throw A.a(B.i0)
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a6(r.gn()))
return s},
Hq(a){var s,r,q,p
if(a==null)return B.kB
if(!t.f.b(a))throw A.a(B.hf)
if(a.gY().L(0,new A.wt()))throw A.a(B.hB)
s=A.m(t.N,t.dd)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p=="string")s.k(0,p,A.Br(q.b))}return s},
qC:function qC(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
qD:function qD(){},
qF:function qF(){},
qG:function qG(){},
qE:function qE(){},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(){},
wd:function wd(){},
wv:function wv(){},
wg:function wg(){},
wt:function wt(){},
Ch(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.xx(m)
for(s=a.C(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a1(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){o=s[q]
n=o.a
if(!p.l(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.N("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
IB(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.xy(n),l=A.a1(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)l.I(0,s[q].c.gaf())
for(s=A.fm(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.N(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bO(b,b.r,b.e,A.o(b).i("bO<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.b.bk(o,".fbx")||B.b.bk(o,".obj")||B.b.bk(o,".mtl")||B.b.bk(o,".gltf")||B.b.bk(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
xx:function xx(a){this.a=a},
xy:function xy(a){this.a=a},
ro:function ro(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
rp:function rp(){},
f1:function f1(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(a,b){this.a=a
this.b=b
this.c=null},
fG:function fG(a,b){this.a=a
this.b=b},
oa:function oa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oc:function oc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ob:function ob(){var _=this
_.c=_.b=_.a=null
_.d=0},
l3:function l3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
fD:function fD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
km:function km(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oQ:function oQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
ee(a,b){return new A.kw(a,b)},
dB:function dB(){},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a,b){this.a=a
this.b=b},
kw:function kw(a,b){this.a=a
this.b=b},
Ir(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.j2(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.U(f,new A.xq())
s=A.c([],t.cv)
for(r=A.lv(f,0,A.fu(b,"count",t.S),t.mn),q=r.$ti,r=new A.an(r,r.gt(0),q.i("an<X.E>")),q=q.i("X.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bI:function bI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
xq:function xq(){},
qk(a,b,c,d,e,f,g,h,i,j){return new A.dw(c,a,h,g,f,0,e,i,j,B.ef,b,!0)},
kM(a,b){if(!isFinite(b)||b<0||b>1)throw A.a(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.u(b),null))},
fz:function fz(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
E1(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.h(A.w("MeshData.indices must be Uint16List or Uint32List, got "+J.eH(a).q(0),null))}return s},
cH:function cH(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
tZ:function tZ(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qq:function qq(){},
qr:function qr(){},
qs:function qs(){},
k7:function k7(){},
ii(a){var s,r=t.N,q=A.aF(["sceneColor","present"],r),p=a.a.b
if(p.p(0,"shadows"))q.I(0,A.aF(["shadowMap","sceneDepth"],r))
if(p.p(0,"ssao"))q.I(0,A.aF(["ssaoRaw","ssaoBlurred"],r))
if(p.p(0,"bloom"))q.I(0,A.aF(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.p(0,"dof"))q.I(0,A.aF(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.p(0,"grade"))q.l(0,"gradeOutput")
if(p.p(0,"ps1"))q.l(0,"ps1Output")
s=p.p(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.qQ(A.f7(q,r),s)},
qQ:function qQ(a,b){this.a=a
this.b=b},
qR:function qR(){},
ha:function ha(a,b){this.a=a
this.b=b},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
lg:function lg(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fN:function fN(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c,d,e,f,g,h,i,j){var _=this
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
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
it:function it(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
f4:function f4(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.d=c},
oR:function oR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
E_(a){var s,r,q
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=B.bt;s.m();){switch(s.d.a){case 0:q=B.bt
break
case 1:q=B.dg
break
case 2:q=B.dh
break
case 3:q=B.di
break
default:q=null}if(A.zV(q)>A.zV(r))r=q}return r},
zV(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
BP(a){return new A.bX(A.Hy(a),t.EF)},
Hy(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$BP(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aB("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eX:function eX(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b){this.a=a
this.b=b},
qn:function qn(a){this.a=a},
qo:function qo(a){this.a=a},
ql:function ql(a){this.a=a},
qm:function qm(){},
E0(){return new A.kN(new A.d1(new A.qp(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kN:function kN(a){this.a=a},
qp:function qp(){},
BM(a){var s=4
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
case 3:s=A.h(A.bk("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
G9(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.BM(o.a)===b)q+=o.c}return q},
E2(a){return new A.qt(a,new A.d1(new A.qu(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
zW(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.h(A.w("MeshStore indices must be Uint16List or Uint32List",null))}return s},
lC:function lC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(){},
qv:function qv(){},
HY(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.b.bz(B.d.ej(r,16),8,"0")+B.b.bz(B.d.ej(q,16),8,"0")},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a,b){this.b=a
this.c=b},
qy:function qy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null
_.y=h
_.z=i
_.Q=!1},
dA(a,b){return new A.la(a,b)},
BV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.a(A.dA(B.lF,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.je[q])throw A.a(A.dA(B.lG,'expected "QMSH", got '+B.eO.lX(B.P.aI(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.f2(0,null,B.d.bB(a.byteLength,p))
n=J.ze(B.P.gdH(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.a(A.dA(B.lH,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.mw.p(0,k)))throw A.a(A.dA(B.dy,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.a(A.dA(B.lI,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.R(j,3)!==0)throw A.a(A.dA(B.lK,"vertexCount "+j+" is not a multiple of 3"))
h=J.xJ(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.L(h,new A.wJ()))throw A.a(A.dA(B.lJ,"bounds contain a non-finite value: "+A.u(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.a(A.dA(B.dz,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.a8
break A}if(18===k){d=B.nv
break A}if(20===k){d=B.nu
break A}d=A.h(A.dA(B.dy,"no vertex layout for stride "+k))}s=new A.bP(d,g,null,new A.fy(new A.C(h[0],h[1],h[2]),new A.C(h[3],h[4],h[5])))
try{s.C()}catch(e){r=A.ag(e)
d=A.dA(B.dz,"mesh validation failed: "+A.u(r))
throw A.a(d)}return s},
cF:function cF(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b},
wJ:function wJ(){},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
tL:function tL(a,b){this.a=a
this.b=b},
tM:function tM(a){this.a=a},
tJ:function tJ(a,b){this.a=a
this.b=b},
tK:function tK(){},
EL(a){var s=new A.lz(a,new A.d1(new A.tN(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aX($.z6())
s.e=s.aX($.z3())
s.f=s.aX($.z4())
s.r=s.aX($.z2())
s.w=s.aX($.z5())
return s},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
tN:function tN(){},
tP:function tP(){},
tO:function tO(){},
HR(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.gF().y
if(o==null){B.a.l(j,new A.dt(p,A.c([p],r)))
continue}n=""+p.gF().a.a+":"+p.gF().b.a+":"+A.u(o)
m=i.h(0,n)
if(m==null){i.k(0,n,j.length)
B.a.l(j,new A.dt(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.k(0,n,l)
B.a.l(j,new A.dt(p,A.c([p],r)))}else B.a.l(k,p)}}return j},
dt:function dt(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
oL:function oL(){},
oM:function oM(a){this.a=a},
oJ:function oJ(a){this.a=a},
oK:function oK(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
kn:function kn(a,b){this.a=a
this.b=b
this.c=0},
Fh(){return new A.hj()},
oP:function oP(a){this.a=a
this.b=null},
hj:function hj(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
xT(){return!0},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
qU:function qU(){},
qV:function qV(){},
ck:function ck(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h9:function h9(a,b){this.a=a
this.b=b},
R:function R(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
l8:function l8(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bv:function bv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rq:function rq(){},
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
rs:function rs(a,b){this.a=a
this.b=b},
rx:function rx(){},
rw:function rw(){},
rv:function rv(){},
ru:function ru(a){this.a=a},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
rr:function rr(a,b){this.a=a
this.b=b},
Ev(a){return new A.is(a,new A.d1(new A.ry(),A.c([],t.w_),A.c([],t.t),t.tc))},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b){this.a=a
this.b=b},
ry:function ry(){},
w2(a,b){return A.Gk(a,b)},
Gk(a,b){var s=0,r=A.aL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$w2=A.aM(function(c,a0){if(c===1)return A.aI(a0,r)
for(;;)switch(s){case 0:a.bY()
if(a.at!=null)throw A.a(A.j("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.c3(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.c4(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cT(b)
n=new A.l8(a.a,A.m(t.N,t.CH))
l=A.Ba(a,n,b,o.a.b.a)
m=l.a
i.c4(p)
h=a.x
g=o
if(h.e)A.h(A.j("GPU resource adapter is disposed"))
h.eV(g)
f=h.c
h.b.c4(g.a)
h.c=g
h.d=null
if(f!=null)h.dm(f.b)
g.c=B.ip
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bK()
h=j
if(h!=null)h.bK()}catch(d){if(p.c===B.aZ){h=t.AB.a(p)
i.f4(h)
i.a.fX(h.a)
i.b.eg(h.b)
h.c=B.fj
i.c=null}i=o
if((i==null?null:i.c)===B.ah){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.j("GPU resource adapter is disposed"))
i.eV(h)
i.dm(h.b)
i.b.eg(h.a)
h.c=B.iq
i.d=null}i=m
if(i!=null)i.bK()
i=n
if(i!=null)i.bK()
throw d}case 1:return A.aJ(q,r)}})
return A.aK($async$w2,r)},
Bb(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.Ba(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
Ba(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.w0(a),j=new A.w1(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.HW(b,h,d,i,s.gnA(),new A.vM(j),new A.vN(j),new A.vO(a),new A.vT(a),new A.vU(a),new A.vV(j),new A.vW(j),s.gnC(),new A.vX(a),s.gnH(),r.gnE(),k,s.gnJ(),s.gnL(),new A.vY(j,c),new A.vZ(j),new A.w_(j),new A.vP(j),new A.vQ(j),new A.vR(a),new A.vS(j),e,f,g,c.r)}else{p=new A.aR(l,B.q,g,f,e,0)
o=new A.aR(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.ia(h,p,o):null
k=A.c([new A.lS(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.il(b,u.l,u.p,h,i,d))
q=new A.kk(k)}a.r.toString
m=q.la(B.a5,new A.rq(),!1,new A.ml())
k=m.a.b
if(k.length!==0)throw A.a(A.j("safe renderer graph is invalid: "+A.u(k)))
return new A.v4(q,m)},
Gl(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.a(A.j("renderer graph is not initialized"))
s=A.H(b7.ghx(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.V(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a6()
p=p.gah()
n=A.z(p)
B.a.l(s,new A.mz(new A.cz((r|1073741824)>>>0,0,"transient"),q,A.aW(new A.F(p,n.i("C(1)").a(o.gaj()),n.i("F<1,C>")))))}p=b8.a
m=A.I1(A.zy(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.ee(B.aD,n))
j=j.b
g=j.$ti
j.V(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.aa(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.ee(B.aD,n))
j=j.b
g=j.$ti
j.V(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.aa(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.oP(n)
e.l6("cull")
j=l-f
d=e.b
if(d==null)A.h(A.j("cull recorded outside an active frame"))
if(j<0)A.h(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gF().e===B.aB)B.a.l(a,new A.b0(new A.bM(a0.hQ(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.l(b,new A.b0(new A.bQ(B.lB,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.m7(A.HR(A.It(b)),A.Is(a),p,b8.b,b8.c)
a4=new A.ka(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.h(A.al(g,"passId",null))
e.b=g
n.cV(g,A.BY())
a6=A.m(o,i)
for(g=a5.gF().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.h(A.j("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.h(A.j("resource is not in candidate: "+b1))
b3=new A.fB(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cV(b0,new A.w3(b3))}a5.aw(new A.jY(a6,a4,a3))}return new A.ur(e,m,j)},
Ad(a){return new A.rG(a,new A.o9(new A.ob(),new A.lg()),new A.kn(A.c([],t.h1),B.i8),A.c([],t.Ft),B.bE,A.c([],t.ow),null)},
lf:function lf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
ur:function ur(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c){this.a=a
this.b=b
this.c=c},
w0:function w0(a){this.a=a},
w1:function w1(a,b){this.a=a
this.b=b},
w_:function w_(a){this.a=a},
vT:function vT(a){this.a=a},
vU:function vU(a){this.a=a},
vZ:function vZ(a){this.a=a},
vO:function vO(a){this.a=a},
vQ:function vQ(a){this.a=a},
vP:function vP(a){this.a=a},
vY:function vY(a,b){this.a=a
this.b=b},
vM:function vM(a){this.a=a},
vN:function vN(a){this.a=a},
vV:function vV(a){this.a=a},
vW:function vW(a){this.a=a},
vX:function vX(a){this.a=a},
vS:function vS(a){this.a=a},
vR:function vR(a){this.a=a},
w3:function w3(a){this.a=a},
v4:function v4(a,b){this.a=a
this.b=b},
ml:function ml(){},
m7:function m7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rG:function rG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
rH:function rH(){},
rI:function rI(){},
rJ:function rJ(){},
mi:function mi(a){this.b=a},
uD:function uD(){},
mp:function mp(){},
iB:function iB(a,b){this.a=a
this.b=b},
It(a){var s,r,q=A.H(a,t.E0)
B.a.U(q,new A.xu())
s=A.z(q)
r=s.i("F<1,c5>")
s=A.H(new A.F(q,s.i("c5(1)").a(new A.xv()),r),r.i("X.E"))
s.$flags=1
return s},
Is(a){var s,r,q=A.H(a,t.EH)
B.a.U(q,new A.xs())
s=A.z(q)
r=s.i("F<1,c5>")
s=A.H(new A.F(q,s.i("c5(1)").a(new A.xt()),r),r.i("X.E"))
s.$flags=1
return s},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
xu:function xu(){},
xv:function xv(){},
xs:function xs(){},
xt:function xt(){},
I1(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.gep()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.a(A.w("cullItems: non-finite world bounds for instance "+o.gE().q(0),null))
if(a.hO(o.gep())===B.b_){++q
continue}B.a.l(l,o)}return new A.or(l,new A.os(q))},
os:function os(a){this.b=a},
or:function or(a,b){this.a=a
this.b=b},
aW(a){var s,r,q,p,o,n,m,l,k
for(s=J.P(a),r=B.ni,q=B.nk,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.C(m,k,Math.min(r.c,o))
q=new A.C(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.a(A.w("Aabb.fromPoints requires at least one point",null))
return new A.fy(r,q)},
fy:function fy(a,b){this.a=a
this.b=b},
zy(a){var s,r,q,p,o,n,m=a.a,l=new A.oT(),k=m.length
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
return new A.oS(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
f_:function f_(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
oS:function oS(a){this.a=a},
oT:function oT(){},
zT(a){if(a.length!==16)throw A.a(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dv(new Float32Array(A.a0(a)))},
xR(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dv(q)},
zU(a,b,c){var s=b.gaz(),r=c.bv(s).gaz(),q=s.bv(r),p=new Float32Array(16)
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
p[12]=-r.bL(a)
p[13]=-q.bL(a)
p[14]=s.bL(a)
p[15]=1
return new A.dv(p)},
dv:function dv(a){this.a=a},
qj:function qj(){},
rm(a,b){var s=a.gaz(),r=b/2,q=Math.sin(r)
return new A.lb(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b){this.a=a
this.b=b},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
nl:function nl(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.at=m
_.cy=n},
iO:function iO(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lZ:function lZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jX:function jX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
k9:function k9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
m2:function m2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iQ:function iQ(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
m3:function m3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kd:function kd(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
m4:function m4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kv:function kv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
m9:function m9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
mg:function mg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.b=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
bE(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aR(a.a,a.b,b,c,s,r)},
xU:function xU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mm:function mm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l9:function l9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mn:function mn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Af(a){var s=a.c,r=Math.abs(s.a)<0.99?B.e0:B.W,q=A.zU(a.b,s,r)
return new A.f9(A.xR(1,a.f,B.c.D(a.w*2,0.1,3),0.05).ac(0,q))},
f9:function f9(a){this.a=a},
lp:function lp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mq:function mq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
HW(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.p(0,"shadows"))throw A.a(A.al(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.p(0,"ssao")
r=b6.p(0,"bloom")
q=b6.p(0,"dof")
p=b6.p(0,"grade")
o=b6.p(0,"ps1")
n=b6.p(0,"vhs")
b6=B.d.aa(e5+1,2)
m=B.d.aa(e4+1,2)
l=A.bE(B.bH,e5,e4,e3,a8)
k=A.bE(B.bH.hz(),e5,e4,a8,a8)
A.bE(B.ml,e5,e4,a8,a8)
j=A.bE(B.mi,e5,e4,a8,a8)
i=A.bE(B.md,e6,e6,a8,a8)
h=A.bE(B.me,b6,m,a8,a8)
g=A.bE(B.mf,b6,m,a8,a8)
f=A.bE(B.mj,b6,m,a8,a8)
e=A.bE(B.mk,b6,m,a8,a8)
d=$.Ci()
c=e3>1
b=A.bE(d,e5,e4,a8,c?2:1)
d=A.bE(B.ma,b6,m,a8,a8)
a=A.bE(B.mb,b6,m,a8,a8)
a0=A.bE(B.mc,e5,e4,a8,a8)
a1=A.bE(B.mg,e5,e4,a8,a8)
a2=A.bE(B.mm,e5,e4,a8,a8)
a3=A.bE(B.mh,e5,e4,a8,a8)
a4=c?new A.ia(b8,l,k):a8
b5.a=null
a5=A.Af(B.mU)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.I(a7,A.c([new A.hJ(b7,a9,b0,b8,b1,b1,B.ed,!0,k,f,d6,b6,m),new A.hJ(b7,a9,b0,b8,b2,b2,B.nZ,!1,f,e,c2,b6,m),new A.jX(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.c([new A.hQ(b7,a9,b0,b8,b3,b3,B.ee,k,d,d6,b6,m),new A.hQ(b7,a9,b0,b8,b4,b4,B.o_,d,a,c7,b6,m),new A.kd(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.kv(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.l9(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.lH(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.k9(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.ls(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.lr(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.lp(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.wF(b5),i))
j.push(new A.lq(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.wG(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.il(b7,a9,u.p,b8,k,b9))
return new A.kk(j)},
wF:function wF(a){this.a=a},
wG:function wG(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
mr:function mr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ls:function ls(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mu:function mu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lr:function lr(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mt:function mt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lH:function lH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mC:function mC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lS:function lS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mF:function mF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o7:function o7(){},
ln(a,b){return new A.iz(a,b)},
ks:function ks(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eS:function eS(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hX:function hX(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pe:function pe(){},
pf:function pf(){},
hl:function hl(a,b){this.a=a
this.b=b},
eu:function eu(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
zv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fO(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jV:function jV(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
k8:function k8(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bi:function bi(a,b){this.a=a
this.b=b},
uh:function uh(){this.a=null},
EW(a){var s=new A.lQ(a,B.i,new A.uh(),A.F6(a))
s.iZ(a)
return s},
F6(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a1(t.N)
s=A.a1(t.N)
r=J.P(t.a.b(q)?q:new A.b4(q,A.z(q).i("b4<1,e>")))
while(r.m())s.l(0,r.gn())
return s},
bW(a,b){var s,r
if(a.b!==B.i)A.h(A.j(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.f(s.drawingBufferWidth),A.f(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
F1(a,b){var s
if(a.b!==B.i)A.h(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.f(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.a(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
F0(a,b,c){var s,r,q,p
if(a.b!==B.i)A.h(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.a(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
F_(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
EZ(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
Aq(a,b){var s
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
EX(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bm(a,b){var s,r,q,p
if(a.b!==B.i)A.h(A.j(u.k))
s=a.f
r=s.m3(b)
if(r.a===0)return
if(r.p(0,B.bL)){q=v.G
p=a.a
if(b.a)p.enable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bM))a.a.depthFunc(A.F_(a,b.b))
if(r.p(0,B.bN))a.a.depthMask(b.c)
if(r.p(0,B.bR)){q=v.G
p=a.a
if(b.w)p.enable(A.f(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.f(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.bS))a.a.cullFace(A.EZ(a,b.x))
if(r.p(0,B.dT)){q=v.G.WebGL2RenderingContext
q=A.f(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bO)){q=v.G
p=a.a
if(b.d)p.enable(A.f(q.WebGL2RenderingContext.BLEND))
else p.disable(A.f(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.bP))a.a.blendFunc(A.Aq(a,b.e),A.Aq(a,b.f))
if(r.p(0,B.bQ))a.a.blendEquation(A.EX(a,b.r))
if(r.p(0,B.dR))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.dS)){q=v.G.WebGL2RenderingContext
a.a.disable(A.f(q.SCISSOR_TEST))}s.a=b},
EY(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.f(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.f(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.f(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d9(a,b,c,d,e,f){var s
if(a.b!==B.i)A.h(A.j(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.EY(a,b))},
ca(a,b){var s
if(a.b!==B.i)A.h(A.j(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.i)A.h(A.j(u.k))
s=a.e
if(s==null)throw A.a(A.j("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.L(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.b7(c.b))
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
A.aU(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.f(c.b))
break}},
by(a,b){if(a.b!==B.i)A.h(A.j(u.k))
a.a.bindVertexArray(A.b(b.a))},
aG(a,b,c){var s,r,q,p,o,n
if(a.b!==B.i)A.h(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jg){p=s.d>1?A.f(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jf){o=s.b
if(o!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.a(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.a(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
F2(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.i)A.h(A.j(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.f(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.ze(B.P.gdH(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.b2(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.f(q.WebGL2RenderingContext.STATIC_DRAW))}},
F3(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
At(a,b){var s,r,q,p
if(a.b!==B.i)A.h(A.j(u.k))
s=a.a
r=A.L(s.createBuffer())
if(r==null)throw A.a(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cN?A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.f(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.F3(a,b.b))
return new A.dN(r)},
Ar(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
As(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
F4(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
y0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.i)A.h(A.j(u.k))
s=a.a
r=A.L(s.createTexture())
if(r==null)throw A.a(A.j("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.f(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.F4(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aU(s,"texStorage3D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aU(s,"texStorage2D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.Ar(a,b.e))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.Ar(a,b.f))
p=b.r
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.As(a,p))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.As(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.fq(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.al(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dN(new A.jg(r,j,i,q,m))},
y1(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.i)A.h(A.j(u.k))
s=t.h.a(b.a)
r=s.d
if(c>=r)throw A.a(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.a(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.f(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aU(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aU(l,"texSubImage2D",[m,0,0,0,q,p,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
Au(a,b){var s,r,q
if(a.b!==B.i)A.h(A.j(u.k))
s=t.h.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.f(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
lR(a,b){a.a.deleteTexture(t.h.a(b.a).a)},
Aw(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.i)A.h(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.a(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.L(r.createFramebuffer())
if(q==null)throw A.a(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b2
if(n&&!a1.e)throw A.a(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cP||o===B.is
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.f(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aU(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aU(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.L(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aU(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aU(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.L(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aU(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aU(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aU(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.L(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aU(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
A.aU(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.f(r.checkFramebufferStatus(A.f(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.f(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.y2(a0,q,l,k,f,e,j,i)
throw A.a(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dN(new A.jf(q,l,k,f,e,j,i,s,a1.b,a1.c))},
y2(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
da(a){var s
if(a.b!==B.i)A.h(A.j(u.k))
s=A.L(a.a.createVertexArray())
if(s==null)throw A.a(A.j("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dN(s)},
Av(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.L(p.createShader(b))
if(o==null)throw A.a(A.ln(b===A.mZ(A.Bf(A.Ce(),r),q,t.S)?B.dL:B.dM,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.hE(p.getShaderParameter(o,A.f(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.ak(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.a(A.ln(b===A.mZ(A.Bf(A.Ce(),r),q,t.S)?B.dL:B.dM,s))}return o},
F5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.i)A.h(A.j(u.k))
q=v.G
s=A.Av(a,A.f(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.Av(a,A.f(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.L(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.a(B.mM)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.hE(o.getProgramParameter(n,A.f(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.ak(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.ln(B.dN,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.f(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.ln(B.dO,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.L(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.ln(B.dO,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dN(n)},
dN:function dN(a){this.a=a},
jg:function jg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jf:function jf(a,b,c,d,e,f,g,h,i,j){var _=this
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
mE:function mE(a){this.a=a
this.b=!1},
lQ:function lQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
ue:function ue(a){this.a=a},
uf:function uf(a){this.a=a},
vf:function vf(){},
mD:function mD(){},
ud:function ud(a){this.a=a},
ug:function ug(){},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nA(a,a0){var s=0,r=A.aL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$nA=A.aM(function(a1,a2){if(a1===1)return A.aI(a2,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.m
n=A.m(t.N,o)
m=A.b(p.createGain())
l=A.b(p.createGain())
k=A.b(p.createGain())
j=A.b(p.createGain())
i=A.b(p.createGain())
h=A.b(p.createGain())
g=A.b(p.createGain())
f=A.b(p.createGain())
e=A.b(p.createGain())
d=A.b(p.createGain())
c=A.b(p.createConvolver())
b=new A.jR(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aW,A.m(o,t.jS))
b.iJ(p,a0)
p=A.o(a).i("M<1,2>")
s=3
return A.a4(A.oV(A.kL(new A.M(a,p),p.i("aP<at>(n.E)").a(new A.nB(b)),p.i("n.E"),t.ls),t.c),$async$nA)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.jJ():n
c.buffer=p
q=b
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$nA,r)},
jR:function jR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
nC:function nC(){},
nB:function nB(a){this.a=a},
nE:function nE(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
nF:function nF(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
CX(a,b,c,d,e,f,g){var s=new A.nr(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.iL(a,b,c,d,0,e,f,g)
return s},
CT(a,b){var s=new A.n7(b)
s.iI(a,b)
return s},
CW(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.az(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.nn(A.aX(n,r,t.a))
n.iK(a)
return n},
Ht(a,b){var s,r,q,p=b>>>0
for(s=new A.dj(a),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a_.E>")),r=r.i("a_.E");s.m();){q=s.d
p=A.C2(p,q==null?r.a(q):q)}return p&2147483647},
jS:function jS(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ns:function ns(){},
n7:function n7(a){this.a=a},
n8:function n8(){},
hH:function hH(){},
n9:function n9(){},
na:function na(){},
nn:function nn(a){this.a=a},
np:function np(){},
nq:function nq(){},
no:function no(){},
xF:function xF(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
nz:function nz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nt:function nt(a,b,c){this.a=a
this.b=b
this.c=c},
nu:function nu(a){this.a=a},
nv:function nv(){},
iM:function iM(a,b){this.a=a
this.b=b},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function o4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
oO:function oO(a){this.a=a},
kA:function kA(a,b,c,d,e,f,g,h,i,j){var _=this
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
pO:function pO(a){this.a=a},
DO(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.az(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pN(n)},
pN:function pN(a){this.a=a},
pR:function pR(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qa:function qa(a,b,c){this.a=a
this.c=b
this.e=c},
q7:function q7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(){},
ot:function ot(){this.b=this.a=0},
qg:function qg(a){this.a=a
this.b=0
this.e=!1},
iD(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b2(a)
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
d5:function d5(a){this.a=a
this.b=0},
iH(a,b,c){return new A.k(a,b,c)},
Ao(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
F7(a,b,c,d){return new A.lT(d,b,c,a)},
F9(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Cu()
s=a.d
r=A.uj(s,0)
q=A.uj(s,1)
p=A.uj(s,2)
o=A.uj(s,3)
s=t.N
n=A.a1(s)
m=a.e
if(A.bJ(m,0))n.l(0,"GamepadA")
if(A.bJ(m,1))n.l(0,"GamepadB")
if(A.bJ(m,2))n.l(0,"GamepadX")
if(A.bJ(m,3))n.l(0,"GamepadY")
if(A.bJ(m,4))n.l(0,"GamepadLB")
if(A.bJ(m,5))n.l(0,"GamepadRB")
if(A.bJ(m,6))n.l(0,"GamepadLT")
if(A.bJ(m,7))n.l(0,"GamepadRT")
if(A.bJ(m,8))n.l(0,"GamepadView")
if(A.bJ(m,9))n.l(0,"GamepadMenu")
if(A.bJ(m,10))n.l(0,"GamepadLStick")
if(A.bJ(m,11))n.l(0,"GamepadRStick")
if(A.bJ(m,12))n.l(0,h)
if(A.bJ(m,13))n.l(0,g)
if(A.bJ(m,14))n.l(0,f)
if(A.bJ(m,15))n.l(0,e)
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.k(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gaz():i
return new A.lT(m,p,o,A.f7(n,s))},
uj(a,b){return A.F8(b<a.length?a[b]:0)},
bJ(a,b){return b<a.length&&a[b]>=0.5},
F8(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gcd(a)?-s:s},
lt:function lt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lT:function lT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY:function nY(a){this.a=a},
Di(a,b,c){var s=new A.ke(a,c,null,b)
s.iP(a,null,null,b,c)
return s},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Dv(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bB(new A.G(B.kg,t.e2.a(new A.oG(a)),t.vL),t.yW)
return s==null?null:new A.fP(s)},
E6(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.xS(s,a,B.jK)
break
case 1:A.xS(s,a,B.jL)
break
case 2:A.xS(s,a,B.kj)
break}return s},
xS(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.N(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Du(a){if(a.a!==21)return null
if(a.e)return B.ft
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fu
return B.fs},
ci:function ci(a,b){this.a=a
this.b=b},
oD:function oD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a){this.a=a},
oG:function oG(a){this.a=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
Ec(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.q(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.l1(s,new A.k(o,n,m),q,p,l,j)
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
l1:function l1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Hv(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.a(B.fK)
p.k(0,q,r.b)}return p},
vk(a){var s,r,q,p,o,n=a.gY().bS(0)
B.a.X(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.B6(a.h(0,o)))}return A.aX(r,t.N,s)},
B6(a){var s
if(t.f.b(a))return A.vk(A.Hv(a))
if(t.j.b(a)){s=t.z
return A.ai(J.dU(a,A.Im(),s),s)}if(a==null||A.bA(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.hD)
return a}throw A.a(A.O("presentation snapshot contains unsupported value "+J.eH(a).q(0),null,null))},
rh:function rh(a){this.a=a},
Ac(a,b,c){var s=A.yk(b),r=A.yk(a)
if(c!==2)A.h(A.al(c,"version","unsupported save version"))
return new A.hb(c,s,r)},
yk(a){var s,r,q,p,o=A.o(a).i("aa<1>"),n=A.H(new A.aa(a,o),o.i("n.E"))
B.a.X(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.B5(a.h(0,p)))}return A.aX(s,t.N,o)},
B5(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.a(B.hn)
s.k(0,p,q.b)}return A.yk(s)}if(t.j.b(a)){r=t.z
return A.ai(J.dU(a,A.Iq(),r),r)}if(a==null||A.bA(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.hH)
return a}throw A.a(A.O("save contains unsupported value "+J.eH(a).q(0),null,null))},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(){},
f6:function f6(a,b){this.a=a
this.b=b},
zA(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.p0(a,b,c,d,e,f,g,s,r,h)},
zB(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aS(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.a(B.hm)
r=d.h(0,"runSeed")
q=A.aS(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aS(p)||p<1||typeof o!="number")throw A.a(B.hV)
if(!isFinite(5760))throw A.a(A.al(5760,"daySeconds","must be finite and > 0"))
n=new A.kq(p,7,5760)
n.hM(o)
s=t.N
m=t.z
l=A.DY(a5,A.aZ(a0,s,m))
k=A.Df(l,A.aZ(a,s,m),n)
j=A.BT(a3,c)
A.DN(A.aZ(a1,s,m)).l0(j)
s=A.aZ(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bA(f))A.h(B.fW)
e=A.E7(d.h(0,"narrative"))
if(e==null)e=A.qK(null,null,null)
return A.zA(c,q,j,n,l,k,new A.kc(i,h,g,f),e)},
Gj(a){var s
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
eR:function eR(a,b){this.a=a
this.b=b},
kp:function kp(a,b){this.c=a
this.d=b},
p1:function p1(a,b,c){this.a=a
this.b=b
this.r=c},
p0:function p0(a,b,c,d,e,f,g,h,i,j){var _=this
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
p2:function p2(a){this.a=a},
p3:function p3(){},
p4:function p4(){},
p5:function p5(a){this.a=a},
p6:function p6(){},
zk(a){var s,r,q,p,o,n,m,l="modelScale",k=A.jy(a,"house manifest"),j=typeof k.h(0,l)=="number"?A.a6(k.h(0,l)):1
if(!isFinite(j)||j<=0)throw A.a(B.ha)
s=A.cd(k,"houseId")
r=A.cd(k,"sourceRef")
q=J.dU(A.hu(k,"levels"),new A.nG(),t.mD)
q=A.H(q,q.$ti.i("X.E"))
q.$flags=1
p=J.dU(A.hu(k,"rooms"),new A.nH(j),t.bJ)
p=A.H(p,p.$ti.i("X.E"))
p.$flags=1
o=J.dU(A.hu(k,"portals"),new A.nI(j),t.lT)
o=A.H(o,o.$ti.i("X.E"))
o.$flags=1
n=J.dU(A.hu(k,"stairs"),new A.nJ(),t.gI)
n=A.H(n,n.$ti.i("X.E"))
n.$flags=1
m=J.dU(A.hu(k,"exteriorCells"),new A.nK(),t.N)
m=A.H(m,m.$ti.i("X.E"))
m.$flags=1
s=new A.jT(s,r,q,p,o,n)
s.em()
return s},
BT(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
a5.em()
s=A.zD(a6)
r=new A.wE()
for(q=a5.e,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.t)(q),++l){k=q[l]
j=k.a
r.$1(k.b)
i=k.c
h=i.length
if(0>=h)return A.d(i,0)
g=i[0]
if(1>=h)return A.d(i,1)
f=i[1]
if(2>=h)return A.d(i,2)
i=i[2]
h=k.d
e=h.length
if(0>=e)return A.d(h,0)
d=h[0]
if(1>=e)return A.d(h,1)
c=h[1]
if(2>=e)return A.d(h,2)
h=h[2]
e=A.c([],m)
for(b=k.e,a=b.length,a0=0;a0<b.length;b.length===a||(0,A.t)(b),++a0){a1=b[a0]
e.push(new A.ff(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.az(k.f,!1,o)
a2.$flags=3
B.a.l(n,new A.f5(j,new A.k(d,c,h),new A.k(g,f,i),e,A.FZ(j),k.r,k.w,k.x))}for(q=a5.f,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.t)(q),++l){a3=q[l]
B.a.l(o,new A.c4(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a5.r,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.t)(q),++l){a4=q[l]
a2=A.az(a4.c,!1,n)
a2.$flags=3
m=a4.d
j=m.length
if(0>=j)return A.d(m,0)
if(1>=j)return A.d(m,1)
if(2>=j)return A.d(m,2)
m=a4.e
j=m.length
if(0>=j)return A.d(m,0)
if(1>=j)return A.d(m,1)
if(2>=j)return A.d(m,2)
m=a4.f
j=m.length
if(0>=j)return A.d(m,0)
i=m[0]
if(1>=j)return A.d(m,1)
h=m[1]
if(2>=j)return A.d(m,2)
m=m[2]
j=a4.r
g=j.length
if(0>=g)return A.d(j,0)
f=j[0]
if(1>=g)return A.d(j,1)
e=j[1]
if(2>=g)return A.d(j,2)
B.a.l(o,new A.fa(a4.a,a4.b,new A.k(i,h,m),new A.k(f,e,j[2])))}s.mB()
return s},
FZ(a){var s
A:{if("living-room"===a){s=A.c([A.xO("mantle-living",!0,new A.k(3.7,1.45,0.8),"living-room gas mantle"),A.xO("mantle-living-second",!1,new A.k(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.xO("mantle-hall",!1,new A.k(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.jP
break A}return s},
CZ(a,b){var s,r=A.jy(a,"room"),q=A.cd(r,"id"),p=A.cd(r,"floor"),o=A.BI(r.h(0,"origin"),"origin",b),n=A.BI(r.h(0,"size"),"size",b),m=J.dU(A.hu(r,"windows"),new A.nT(b),t.ya)
m=A.H(m,m.$ti.i("X.E"))
m.$flags=1
s=J.dU(A.hu(r,"portalIds"),new A.nU(),t.N)
s=A.H(s,s.$ti.i("X.E"))
s.$flags=1
return new A.e_(q,p,o,n,m,s,A.yQ(r,"wall"),A.yQ(r,"floor"),A.yQ(r,"ceiling"))},
jy(a,b){return t.P.b(a)?a:A.dQ(b+" is not an object")},
hu(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.dQ(b+" is not a list")},
cd(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dQ(b+" is not a string")},
yQ(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.dQ("surface is not an object")
return A.cd(s,b)},
yp(a,b){var s,r=A.cd(a,b)
A:{if("north"===r){s=B.u
break A}if("east"===r){s=B.ae
break A}if("south"===r){s=B.p
break A}if("west"===r){s=B.af
break A}s=A.dQ(b+" has unknown facing "+r)}return s},
H4(a,b){var s,r
if(t.j.b(a)){s=J.aN(a)
s=s.gO(a)||s.L(a,new A.wh())}else s=!0
if(s)return A.dQ(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a6(r.gn()))
return s},
ez(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dQ(b+" is not finite")},
mX(a,b){var s,r
if(t.j.b(a)){s=J.aN(a)
s=s.gt(a)!==3||s.L(a,new A.wB())}else s=!0
if(s)return A.dQ(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a6(r.gn()))
return s},
BI(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.mX(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
jD(a,b){var s,r,q=A.a1(t.N)
for(s=J.P(a);s.m();){r=s.gn()
if(!q.l(0,r))throw A.a(A.O("duplicate "+b+" id "+r,null,null))}},
dQ(a){return A.h(A.O(a,null,null))},
jT:function jT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nG:function nG(){},
nH:function nH(a){this.a=a},
nI:function nI(a){this.a=a},
nJ:function nJ(){},
nK:function nK(){},
nM:function nM(){},
nN:function nN(){},
nO:function nO(){},
nP:function nP(){},
nQ:function nQ(){},
nR:function nR(){},
nS:function nS(){},
nL:function nL(a){this.a=a},
wE:function wE(){},
dY:function dY(a){this.a=a},
e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nT:function nT(a){this.a=a},
nU:function nU(){},
e1:function e1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
e0:function e0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wh:function wh(){},
wB:function wB(){},
jZ:function jZ(a,b){this.a=a
this.b=b
this.d=null},
o8:function o8(a){this.a=a},
kP:function kP(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
lU:function lU(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pv:function pv(){this.b=0},
a3:function a3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kh:function kh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oI:function oI(){},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(){},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
Iz(a){var s,r,q,p,o,n,m,l
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
return new A.bP(B.a8,p,new Uint16Array(A.a0(a.b)),new A.fy(new A.C(s.a,s.b,s.c),new A.C(s.d,s.e,s.f)))},
Iy(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Hs(a,new A.xw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.ki(o,p.c,p.e))}return n},
Hs(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.a(A.w("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.p(d,":")?B.b.H(d,0,B.b.bx(d,":")):null
l=new A.db(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.I(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("am<2>")
q=A.H(new A.am(s,q),q.i("n.E"))
B.a.U(q,new A.wu())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].o4(a))
return r},
G1(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kh(r,q,p,o,n,m)},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
xw:function xw(a){this.a=a},
wu:function wu(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eO:function eO(a,b){this.a=a
this.b=b},
kj:function kj(){},
HU(a){var s,r,q,p=new A.pw(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Gm(p,a,B.d8[s],15.75,15.75,12.044999999999998,0.63)
p.B(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.B(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.B(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.B(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.B(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.B(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.B(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.B(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a3(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a3(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.al(r,new A.a3(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.al(r,q,new A.a3(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a3(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a3(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.al(q,new A.a3(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.al(q,r,new A.a3(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.B(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.al(new A.a3(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a3(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a3(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.al(new A.a3(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a3(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a3(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a3(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a3(7.875,16.32,16.383,-1,0,0,1,1,0)
p.al(r,new A.a3(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.al(r,q,new A.a3(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a3(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a3(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.al(q,new A.a3(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.al(q,r,new A.a3(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.Hg(p,15.75,15.75,12.044999999999998,16.32)
A.G4(p,15.75,15.75,16.32)
A.Gi(p,15.75,15.75,12.044999999999998)
A.Gq(p,a,15.75)
A.Hn(p,15.75,15.75)
A.G0(p,15.75)
return p.l8()},
Gm(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ae!==b7,p=B.u!==b7,o=B.p===b7,n=B.af===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=b6.aK(k)
switch(m){case 0:i=k.d.c===0
break
case 2:i=Math.abs(k.d.c+j.c-b9)<0.001
break
case 3:i=k.d.a===0
break
case 1:i=Math.abs(k.d.a+j.a-b8)<0.001
break
default:i=null}if(!i)continue
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.t)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.er(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aO(i),b=J.P(h.a),h=new A.U(b,h.b,h.$ti.i("U<1>"));h.m();){a=b.gn()
if(!a.Q||a.b0(i)!==b7)continue
B:{if(!p||o){a0=g+a.aL(i)
break B}if(!q||n){a0=e+a.aL(i)
break B}a0=null}B.a.l(b4,new A.er(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.u||b7===B.p?b8:b9
r=t.i
a1=A.aF([0,s],r)
a2=A.aF([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.H(a1,a1.$ti.c)
B.a.X(a4)
a5=A.H(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.L(b4,new A.w5(b0,b1,b2,b3)))continue
switch(m){case 0:b5.B(0,b1,b3,0,b0,b2,r)
break
case 2:b5.B(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.B(0,0,b3,b1,r,b2,b0)
break
case 1:b5.B(0,s,b3,b1,b8,b2,b0)
break}}A.Gp(b5,b4,b7,b8,b9,c1)
A.Gn(b5,b4,b7,b8,b9,c1)
A.Go(b5,b4,b7,b8,b9,c0,c1)},
Go(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aF([0,a4===B.u||a4===B.p?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.H(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.L(a3,new A.w4(a,a0,g)))continue
switch(s){case 0:a2.B(1,a0,e,m,a,f,l)
break
case 2:a2.B(1,a0,e,k,a,f,j)
break
case 3:a2.B(1,m,e,a0,l,f,a)
break
case 1:a2.B(1,o,e,a0,n,f,a)
break}}}},
Gn(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.t)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.B(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.B(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.B(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.B(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.B(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.B(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.u)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.B(2,a+0.18,n,r,a,a1,p)}}},
Gp(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.t)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.B(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.B(e,a1,a,l,a0,b,m)
a2.B(e,a1,b,l,c,b-0.06,m)
a2.B(e,a1,a+0.06,l,c,a,m)
if(f)a2.B(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.B(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.B(e,a1,a,j,a0,b,k)
a2.B(e,a1,b,j,c,b-0.06,k)
a2.B(e,a1,a+0.06,j,c,a,k)
if(f)a2.B(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.B(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.B(e,l,a,a1,m,d,a0)
a2.B(e,l,d,a1,m,d-0.06,b)
a2.B(e,l,a+0.06,a1,m,a,b)
if(f)a2.B(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.B(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.B(e,o,a,a1,p,d,a0)
a2.B(e,o,d,a1,p,d-0.06,b)
a2.B(e,o,a+0.06,a1,p,a,b)
if(f)a2.B(3,p,a,c+0.07,n,d,c)
break}if(!f)A.Hl(a2,g,a4,a5,a6,a7,q)}},
Hl(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.B(3,o+0.025,m,r,o-0.025,n,s)
a.B(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.B(3,o+0.025,m,r,o-0.025,n,s)
a.B(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.B(3,r,m,o+0.025,s,n,o-0.025)
a.B(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.B(3,r,m,o+0.025,s,n,o-0.025)
a.B(3,r,l+0.025,p,s,l-0.025,q)
break}},
Hg(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.B(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.B(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.B(4,i,p,-0.38,j,q,-0.44)
a.B(4,i,p,s,j,q,o)}A.Hh(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.B(5,h+0.5,p,o,h-0.5,r,q)}},
Hh(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a3(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a3(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.al(n,new A.a3(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.al(n,m,new A.a3(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a3(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a3(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.al(m,new A.a3(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.al(m,n,new A.a3(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
G4(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.B(0,g+0.35,k,n,g-0.35,l,q)
a.B(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.B(5,d+0.1,o,m,d-0.1,r,p)}}},
Gi(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.B(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.B(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.B(6,j,b+0.06,d,k,b,e)}a.B(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Gq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aL("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.B(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.B(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.B(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.B(6,p,1.95,-0.58,q+0.16,1.55,-0.63)
a.B(3,q+0.32,1.5,-0.55,q+0.12,1.42,-0.69)
k=r-0.18
a.B(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.B(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
Hn(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.B(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.B(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.B(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.B(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.B(6,m,j+0.06,l,s,j,n)}a.B(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.B(6,i+0.34,0.22,s,i,0.1,h)}},
G0(a,b){var s,r
a.B(0,6.7,1,-4.05,-2.5,0,-4.4)
a.B(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.B(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.B(7,b+3,0,-4.55,-3,-0.08,-5.2)},
er:function er(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w5:function w5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w4:function w4(a,b,c){this.a=a
this.b=b
this.c=c},
Io(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.z_(b,d,c)
if(k!=null){s=k.b
return new A.eb(B.fB,k.a,s)}r=A.Cc(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.eb(B.fC,r.a,s)}if(A.Cd(b,d,c)!=null)return B.fG
q=A.In(a,b,c,d)
if(q!=null)return new A.eb(B.cw,q.a,"inspect the "+q.b)
p=A.Cb(b,c,d,e)
if(p!=null){o=e.c2(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eb(B.fE,l,m?"inspect the "+o.b:"inspect "+n)}return B.fH},
Cb(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mY(a5,s,4.5)
for(q=a6.nl(a4),p=J.P(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.c2(i.c)
g=i.f.a
f=i.hN(h,o)
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
if(!A.n_(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
In(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hZ(c)
if(s.length===0)return f
r=d.aK(e)
q=A.mY(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gaz()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.n_(d,c,b.a,new A.k(n,m,o)))return k}return f},
dl:function dl(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
HV(a,b){var s,r=new A.d5(new Float32Array(5376)),q=new A.d5(new Float32Array(5376)),p=new A.d5(new Float32Array(5376)),o=new A.d5(new Float32Array(5376)),n=b.d,m=a.aK(b),l=A.ky(b.y),k=A.ky(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cW(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cW(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.FV(p,a,b,m,B.d8[s])
for(j=a.aO(b.a),i=J.P(j.a),j=new A.U(i,j.b,j.$ti.i("U<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.AV(o,b,m,h,!0)}j=B.r.aI(r.a,0,r.b)
i=B.r.aI(q.a,0,q.b)
h=B.r.aI(p.a,0,p.b)
B.r.aI(o.a,0,o.b)
return new A.rC(j,i,h)},
HS(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d5(new Float32Array(5376))
r=a.aK(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.AW(s,b,r,c,q)
return B.r.aI(s.a,0,s.b)},
HT(a,b){var s,r,q,p=new A.d5(new Float32Array(5376)),o=a.aK(b)
for(s=a.aO(b.a),r=J.P(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.AV(p,b,o,q,!1)}return B.r.aI(p.a,0,p.b)},
FV(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.u||a4===B.p?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aO(s),q=J.P(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gn()
if(!p.as&&p.b0(s)===a4)a.push(new A.eq(p.aL(s),p.aL(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eq(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aF([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.I(0,A.c([m.a,m.b],p))}l=A.H(r,r.$ti.c)
B.a.X(l)
s=A.aF([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.I(0,A.c([m.c,m.d],p))}k=A.H(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.L(a,new A.vg(f,e,d,c)))continue
A.HJ(a0,a2,a3,a4,f,e,d,c)}A.FW(a0,a2,a3,a4,b,a)},
FW(a,b,c,d,e,f){return},
hB(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.as(a,new A.k(r+e,q+g,p),new A.k(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.as(a,new A.k(r+e,q+g,s-i),new A.k(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.as(a,new A.k(s-i,q+g,p+e),new A.k(s,q+h,p+f),j)
return
case 3:A.as(a,new A.k(r,q+g,p+e),new A.k(r+i,q+h,p+f),j)
return}},
as(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.k(o,n,m),k=c.a,j=new A.k(k,n,m),i=c.b,h=new A.k(k,i,m),g=new A.k(o,i,m)
m=c.c
s=new A.k(o,n,m)
r=new A.k(k,n,m)
q=new A.k(k,i,m)
p=new A.k(o,i,m)
a.aM(j,l,g,h,d)
a.aM(s,r,q,p,d)
a.aM(l,s,p,g,d)
a.aM(r,j,h,q,d)
a.aM(l,j,r,s,d)
a.aM(g,p,q,h,d)},
HJ(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.ky(n).e
a.cW(s.a4(0,o),r.a4(0,o),q.a4(0,o),p.a4(0,o),A.ky(n).c,(f-e)/m,(a1-a0)/m)
l=A.HK(b,d)
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
default:j=k}A.as(a,o,j,A.Ho(A.ky(n).c,0.68))},
Ho(a,b){var s,r=new A.wr(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.ik()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.ik()
r=r.$1(a&255)
if(typeof r!=="number")return A.wQ(r)
return(q<<16|s<<8|r)>>>0},
HK(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
AV(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b0(d),b=a3.aL(d),a=b+a3.w
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
A.as(a0,new A.k(r+l,s,d),new A.k(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.as(a0,new A.k(l,s,d),new A.k(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.as(a0,new A.k(r+n,s+m,d),new A.k(r+h,j,i),q)
A.as(a0,new A.k(k,s,d),new A.k(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.as(a0,new A.k(r+l,s,k),new A.k(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.as(a0,new A.k(l,s,k),new A.k(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.as(a0,new A.k(r+n,s+m,k),new A.k(r+h,i,d),q)
A.as(a0,new A.k(j,s,k),new A.k(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.as(a0,new A.k(n,s,d+k),new A.k(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.as(a0,new A.k(n,s,k),new A.k(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.as(a0,new A.k(n,s+e,d+m),new A.k(r,j,d+l),q)
A.as(a0,new A.k(n,s,i),new A.k(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.as(a0,new A.k(r,s,d+l),new A.k(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.as(a0,new A.k(r,s,l),new A.k(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.as(a0,new A.k(r,s+e,d+n),new A.k(k,j,d+m),q)
A.as(a0,new A.k(r,s,i),new A.k(k,s+0.05,l),q)
break}if(a4)A.AW(a0,a1,a2,a3,q)
A.FU(a0,a1,a2,a3)},
FU(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aL(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b0(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.u
q=!r||s===B.p?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.hB(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hB(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hB(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.p?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hB(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.p,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hB(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hB(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hB(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
AW(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b0(o),m=d.aL(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.as(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.as(a,new A.k(p,s,o-d.w),new A.k(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.as(a,new A.k(p-d.w,s,o),new A.k(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.as(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.as(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.as(a,new A.k(p,s,o-0.055),new A.k(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.as(a,new A.k(p-0.055,s,o),new A.k(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.as(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break}},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
vg:function vg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wr:function wr(a){this.a=a},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zD(a){var s=t.N
return new A.pt(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.W),new A.pv())},
pt:function pt(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pK:function pK(a){this.a=a},
mY(a,b,c){var s=a.aK(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
n_(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.GP(a,s,c,d)},
GP(a,b,c,d){var s,r,q,p,o=a.aK(b),n=d.ag(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.vm(a,b,o,B.u,r,q,p,c,n,m))return!0
if(A.vm(a,b,o,B.p,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.vm(a,b,o,B.af,s,r,q,c,n,m))return!0
if(A.vm(a,b,o,B.ae,s+o.a,r,q,c,n,m))return!0
return!1},
vm(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a4(0,a6.ac(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.u||a1===B.p
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aO(m),k=J.P(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.b0(m)===a1){g=q.aL(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
z_(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mY(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.k(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gaz()
f=a.b
if(Math.acos(B.c.D(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.n_(a0,a1,a.a,new A.k(h,g,i)))continue
m=d
l=j}}return l},
Cc(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mY(b,j,4.5):4.5
for(s=b.aO(c),r=J.P(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.no(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.Bk(l,k,a,i,0.5236)||k>=q)continue
if(!A.n_(b,c,a.a,n))continue
q=k
p=o}return p},
Cd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mY(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.HL(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.Bk(j,i,a,s,0.5236)||i>=p)continue
if(!A.n_(b,c,a.a,l))continue
p=i
o=m}return o},
Bk(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gaz().bL(c.b),-1,1))<=e},
HL(a,b,c){var s=a.aK(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
oH:function oH(){this.a=null
this.b=0},
tx:function tx(){},
ty:function ty(){},
DS(a){var s,r=A.jx(a,"inventory asset"),q=A.dT(r,"id"),p=A.dT(r,"kind")
A.dT(r,"source")
A.dT(r,"proxy")
A.dT(r,"pivot")
s=A.ak(r.h(0,"status"))
if(s==null)s="proxy"
r=A.jx(r.h(0,"bounds"),"inventory bounds")
return new A.cX(q,p,s,new A.pS(A.mW(r.h(0,"min"),"bounds.min"),A.mW(r.h(0,"max"),"bounds.max")))},
DT(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.jx(a,"inventory placement"),i=A.jx(j.h(0,"visibility"),"placement visibility"),h=A.jx(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dT(j,"id"),e=A.dT(j,"roomId"),d=A.dT(j,"assetId")
A.dT(j,"role")
s=typeof j.h(0,"socket")=="string"?A.q(j.h(0,"socket")):null
j=A.jx(j.h(0,"transform"),"inventory transform")
r=A.mW(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.h(B.hs)
q=A.mW(j.h(0,"position"),"transform.position")
p=A.mW(j.h(0,"rotation"),"transform.rotation")
o=A.dT(i,"layer")
if(typeof i.h(0,k)=="string")A.q(i.h(0,k))
n=J.a8(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.q(h.h(0,"focusId")):null
l=t.P.b(g)?A.H3(g,"radius"):0
return new A.cA(f,e,d,s,new A.pU(q,p,r),o,n,m,l)},
jx(a,b){return t.P.b(a)?a:A.dP(b+" is not an object")},
dT(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dP(b+" is not a string")},
H3(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dP(b+" is not finite")},
mW(a,b){var s
if(t.j.b(a)){s=J.aN(a)
s=s.gt(a)!==3||s.L(a,new A.wA())}else s=!0
if(s)return A.dP(b+" is not a finite vec3")
s=J.aN(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dP(a){return A.h(A.O(a,null,null))},
py:function py(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pB:function pB(a){this.a=a},
pz:function pz(a){this.a=a},
pA:function pA(a){this.a=a},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
wA:function wA(){},
pT:function pT(a){this.a=a},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pC:function pC(a){this.a=a},
pD:function pD(a){this.a=a},
xO(a,b,c,d){return new A.kK(a,d,c,b)},
ea:function ea(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=!0},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
f5:function f5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
DM(a){return A.DL(a)},
DL(a){var s,r,q,p,o,n,m=A.Bs(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.Bs(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.a(B.hl)
k.k(0,r.a,q)}s=A.yN(m,"id")
r=A.yN(m,"roomId")
p=A.yN(m,"placementId")
o=A.HI(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.ht("gain is not a number")
return new A.cW(s,r,p,o,n,A.aX(k,l,l))},
Bs(a,b){return t.P.b(a)?a:A.ht(b+" is not an object")},
yN(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ht(b+" is not a string")},
HI(a,b){var s
if(t.j.b(a)){s=J.aN(a)
s=s.gt(a)!==3||s.L(a,new A.wz())}else s=!0
if(s)throw A.a(A.O(b+" must be a numeric vec3",null,null))
s=J.aN(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
ht(a){return A.h(A.O(a,null,null))},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(a){this.a=a},
pH:function pH(a){this.a=a},
pI:function pI(){},
cW:function cW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pu:function pu(){this.b=this.a=null},
eU:function eU(a,b){this.a=a
this.b=b},
pE:function pE(){this.b=this.a=null},
cV:function cV(a,b){this.a=a
this.b=b},
wz:function wz(){},
zE(a,b,c,d,e,f){var s=t.N
return new A.pJ(e,f,c,a,A.aX(A.aZ(d,s,s),s,s),A.ai(b,s))},
zF(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.ik(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.i7(j.d,j.r))}return A.zE(a.r.b,B.m,i,B.aF,h,s)},
DN(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.kC
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bj
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aS(a2)||!q.b(s)||!t.j.b(r))throw A.a(B.hi)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cz)
l=A.aZ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bA(j)||!A.bA(i))A.h(B.cz)
o.k(0,k,new A.ik(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bA(l.b))throw A.a(B.he)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cx)
l=A.aZ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bA(f)||!A.bA(e))A.h(B.cx)
g.k(0,k,new A.i7(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.a(B.i6)
d.k(0,n,A.q(p.b))}c=A.c([],t.s)
for(q=J.P(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.a(B.fI)
B.a.l(c,b)}return A.zE(a2,c,g,d,o,h)},
yI(a,b){return a.a.a===b.a&&a.a3(0,b.gar(b))},
pJ:function pJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ik:function ik(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
ky(a){var s=B.bq.h(0,a)
if(s==null)throw A.a(A.j("Unknown house surface material: "+a))
return s},
bt:function bt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ds(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.h_(e,A.z(e).c)
q=new A.es()
q.bW((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hR(a,q,2,r,1+s,A.aF(["time"],t.N))
break
case 3:A.hR(a,q,3,r,1+s,A.aF(["place"],t.N))
break
case 4:A.hR(a,q,4,r,2+s,p)
A.Do(a,q,4)
break
case 5:A.hR(a,q,5,r,s,p)
A.Dm(a,q,5)
break
case 6:A.hR(a,q,6,r,s,p)
A.Dn(a,q)
A.Dr(a,q,6)
break
case 7:A.Dp(a,q,7)
break
default:if(s>0)A.hR(a,q,b,r,s,p)}},
Dl(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.Dq(a,b,c))return!1
return!0},
hR(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(A.Dl(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d7(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.zw(a,b,o[p],f)}},
zw(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aZ(B.a.ga0(o).a,n,n)
if(d==null)s=A.c(B.A.slice(0),t.s)
else{n=t.vY
s=A.H(new A.G(B.A,t.Ag.a(new A.oC(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aV(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eF(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aV(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dM(c.a,m,B.a.ga0(o).b)},
Do(a,b,c){var s=A.zx(a,b,c)
if(!a.c5(s))return
a.eR(c,t.G.a(s),0,B.b8,null)},
zx(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.A[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aV(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
Dm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d7(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aZ(B.a.ga0(i).a,s,s)
r=p.c
n=A.aZ(B.a.ga0(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.A[m]
k=o.h(0,l)
j=s.eF(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aV(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dM(q.a,o,B.a.ga0(i).b)
a.dM(p.a,n,B.a.ga0(r).b)},
Dn(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aV(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a1(0,q[r].a)},
Dr(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aV(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.zw(a,b,q[s],null)},
Dp(a,b,c){var s=c+1,r=A.zx(a,b,s)
if(!a.c5(r))return
a.eR(s,t.G.a(r),0,B.b8,null)},
Dq(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga0(b.c).c===B.aC}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga0(b.c).c===B.aC}if(c===21)return b.e
return!1},
oC:function oC(a){this.a=a},
EV(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.A[s]
q=a.h(0,r)
p=A.az(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.ub(n)},
qb(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.A[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kJ(A.aX(p,q,q),b,c)},
zQ(a){var s=t.N
return A.qb(t.P.a(a.h(0,"fields")).bo(0,new A.qc(),s,s),A.a6(a.h(0,"shakiness")),A.Dx(B.jI,A.q(a.h(0,"hand")),t.qX))},
Dw(a){var s,r,q,p,o=a.h(0,"margin"),n=A.f(a.h(0,"ordinal")),m=A.f(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.P(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.zQ(r.a(s.gn())))
s=A.ak(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.ye(a.h(0,"lastReadDay"))
return new A.bZ(n,m,l,s,q,p,o==null?null:A.zQ(r.a(o)))},
ed:function ed(a,b){this.a=a
this.b=b},
ub:function ub(a){this.a=a},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(){},
qd:function qd(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
zN(a){return new A.pX(a,A.m(t.S,t.g),A.a1(t.N),A.c([],t.t))},
DY(a,b){var s,r,q,p,o=A.zN(a)
o.e=A.f(b.h(0,"nextOrdinal"))
o.f=A.f(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.CN(s.a(b.h(0,"tags")),t.N))
for(s=J.P(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Dw(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pX:function pX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
q3:function q3(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nV:function nV(){},
Ed(a){var s,r,q,p,o,n,m,l,k=B.f.an(a,null),j=t.f
if(!j.b(k)||!J.a8(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.a(B.fN)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.a(B.hQ)
r=A.c([],t.d8)
for(q=J.P(s);q.m();){p=q.gn()
if(j.b(p)){o=A.ak(p.h(0,"assetId"))
if(o==null)o=""
n=A.ak(p.h(0,"licenseId"))
if(n==null)n=""
m=A.ak(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.ak(p.h(0,"sourceFormat"))
r.push(new A.im(o,n,m,l==null?"":l))}else r.push(A.h(B.hx))}return new A.ra(A.Ee(r))},
Ee(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=A.ir("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.O("promoted model index ID is invalid: "+o,n,n))
if(k.N(o))throw A.a(A.O("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.b.b7(p).length===0||p==="unknown"||p==="unlicensed")throw A.a(A.O("promoted model index rights are unknown: "+o,n,n))
if(!A.aF(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.a(A.O("promoted model index source format is invalid: "+o,n,n))
if(!A.Hk(q.c))throw A.a(A.O("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aX(k,m,l)},
Hk(a){if(a.length===0||B.b.S(a,"/")||B.b.p(a,"://"))return!1
if(B.b.bk(a.toLowerCase(),".obj")||B.b.bk(a.toLowerCase(),".mtl")||B.b.bk(a.toLowerCase(),".fbx"))return!1
return B.a.a3(A.c(a.split("/"),t.s),new A.wq())},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ra:function ra(a){this.a=a},
wq:function wq(){},
A_(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.m(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=A.ir("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.O("asset ID is not stable kebab-case: "+o,j,j))
if(g.N(o))throw A.a(A.O("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.a(A.O("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.b.b7(m).length===0||m==="unknown"||m==="unlicensed")throw A.a(A.O("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.a(A.O("package is not approved: "+o,j,j))
l=A.Ch(n)
if(l.length!==0)throw A.a(A.O("package manifest is invalid for "+o+": "+B.a.bn(l,new A.rc(),i).T(0,"; "),j,j))
p=p.b
k=A.IB(n,p)
if(k.length!==0)throw A.a(A.O("package payloads are invalid for "+o+": "+B.a.bn(k,new A.rd(),i).T(0,"; "),j,j))
if(A.zX(n,p)!==n.c)throw A.a(A.O("package hash mismatch: "+o,j,j))
g.k(0,o,q)}return A.aX(g,i,h)},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
l6:function l6(a){this.a=a},
rc:function rc(){},
rd:function rd(){},
r5:function r5(){},
r4:function r4(a,b,c){this.b=a
this.c=b
this.d=c},
r6:function r6(){},
Eb(a,b,c){return B.lC},
l_:function l_(a,b){this.a=a
this.b=b},
r7:function r7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
r8:function r8(){},
h5:function h5(){},
r9:function r9(a){this.a=a},
rb:function rb(){},
re:function re(a,b){this.a=a
this.b=b},
rf:function rf(){},
rg:function rg(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rn:function rn(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.x=_.w=0
_.y=b},
A9(a){if(!isFinite(0))A.h(A.al(0,"interpolation",null))
return new A.rA(a)},
ld:function ld(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
rA:function rA(a){this.a=a},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
A7(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.h_(c,A.z(c).c)
r=A.H(r,A.o(r).c)
B.a.X(r)
s=t.N
r=A.ai(r,s)
r=new A.rz(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.iU(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
A8(a,b,c,d){var s=A.mO("RENDERER_SHA"),r=A.mO("GAME_SHA"),q=A.mO("DART_SDK_VERSION")
return A.A7(a,"a9b92d99954c-09ae4cfb5753-dirty",b,!1,null,r,A.mO("LOCKFILE_SHA256"),d,A.mO("PROJECT_VERSION"),s,q,null)},
mO(a){var s=B.kt.h(0,a)
return s.length===0?null:s},
rz:function rz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
rB:function rB(a){var _=this
_.a=a
_.d=_.c=_.b=0},
to:function to(a){this.a=a},
tp:function tp(){},
a5(a,b,c,d,e,f,g,h,i,j){return new A.co(e,g,a,f,i,h,j,c,c,b,B.dP)},
lo:function lo(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ax=_.at=_.as=null},
tq:function tq(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
tv:function tv(a){this.a=a},
tr:function tr(){},
ts:function ts(){},
tw:function tw(){},
tu:function tu(a){this.a=a},
tt:function tt(a){this.a=a},
zt(a,b,c,d,e,f,g){var s=A.H(f,t.ho)
if(b<0||a<0||e<0)A.h(A.O("saved day-loop resources must not be negative",null,null))
return new A.ou(c,g,b,a,e,d===!0,s)},
Df(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.a(B.h3)
s=A.c([],t.El)
for(r=J.P(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.a(B.hj)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aS(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.a(B.fY)
f=A.bB(new A.G(B.d1,q.a(new A.ov(h)),p),o)
e=A.bB(new A.G(B.d7,n.a(new A.ow(g)),m),l)
if(f==null||e==null)throw A.a(B.hZ)
B.a.l(s,new A.hd(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aS(d)||!A.aS(c)||!A.aS(b)||!A.bA(a))throw A.a(B.hu)
return A.zt(c,d,a1,a,b,s,a3)},
bS:function bS(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function ou(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ov:function ov(a){this.a=a},
ow:function ow(a){this.a=a},
kB:function kB(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b},
ui:function ui(a,b){this.b=a
this.c=b},
fg:function fg(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
pL:function pL(a){this.c=a},
pP:function pP(a,b){this.a=a
this.b=b},
pQ:function pQ(){},
ys(a){var s,r,q,p=A.c([],t.s),o=A.a1(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.a(B.hW)
B.a.l(p,q)}return p},
cn:function cn(a,b){this.a=a
this.b=b},
rD:function rD(){},
d2:function d2(){},
rE:function rE(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
Gv(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.w6(s,a).$0())
return r},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uc:function uc(a){this.b=a},
w6:function w6(a,b){this.a=a
this.b=b},
HQ(a){var s
A:{if("broadcast"===a){s=B.er
break A}if("visitor"===a){s=B.es
break A}if("aftermath"===a){s=B.et
break A}if("ending"===a){s=B.eu
break A}s=A.h(A.O("screenplay event has no consumer: "+a,null,null))}return s},
DF(a){var s=A.H(a.c,t.z)
B.a.U(s,new A.p_())
s=new A.oZ(A.ai(s,t.Dm))
s.o0()
return s},
DE(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.ko(a,c,A.eW(B.m,t.N))
s=t.N
r=J.zj(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.ko(a,c,A.eW(new A.G(r,q.i("l(n.E)").a(new A.oY(a)),q.i("G<n.E>")),s))},
eJ:function eJ(a,b){this.a=a
this.b=b},
oZ:function oZ(a){this.a=a},
p_:function p_(){},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a){this.a=a},
qK(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.I(0,a)
s=A.m(r,r)
if(b!=null)s.I(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.qJ(q,s,r)},
E7(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aS(s)||s!==1)return l
r=A.zY(a.h(0,"choices"))
q=A.zY(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.DC(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.qK(r,q,p)},
zY(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.q(q.b))}return r},
DC(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aS(r)||r<1||!A.aS(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cQ(s,r,q,p)},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){},
qM:function qM(){},
qN:function qN(){},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r2:function r2(a){this.a=a},
r3:function r3(a){this.a=a},
hf(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.q(r.a),r.b)}return q},
tD:function tD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
tE:function tE(){},
tF:function tF(){},
fd:function fd(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b){this.a=a
this.b=b},
lP:function lP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
EI(a){var s,r,q,p,o,n,m=B.f.an(a,null)
if(!t.f.b(m))throw A.a(B.hN)
s=m.h(0,"sources")
r=m.h(0,"scenes")
q=m.h(0,"events")
if(q==null)q=B.bj
if(J.a8(m.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.a(B.hK)
p=A.c([],t.s)
for(o=J.P(s);o.m();){n=o.gn()
if(typeof n!="string"||n.length===0)A.h(A.O("source must be a non-empty string",null,null))
p.push(n)}p=A.c([],t.wM)
for(o=J.P(r);o.m();)p.push(A.EB(o.gn()))
p=A.c([],t.tS)
for(o=J.P(q);o.m();)p.push(A.EA(o.gn()))
return new A.tC(p)},
EA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.q(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.q(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.q(a.h(0,f)).length===0)throw A.a(B.hc)
s=a.h(0,"effects")
if(s==null)s=B.bj
if(!t.j.b(s)||J.jH(s,new A.rK()))throw A.a(B.hP)
r=B.c.aA(A.a6(a.h(0,"day")))
q=A.a6(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.a(B.hF)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.a(B.fQ)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.a(B.i4)
l=new A.rL(a)
m=A.q(a.h(0,"id"))
k=A.q(a.h(0,g))
j=A.q(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.P(s);h.m();)i.push(A.q(h.gn()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.ix(m,k,r,q,j,A.ai(i,t.N),n,h)},
EB(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.a(B.h1)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.aA(r)!==r)throw A.a(B.hq)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.a(A.O("screenplay scene "+s+" has invalid arrays",null,null))
m=B.c.aA(r)
l=A.c([],t.s)
for(k=J.P(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.h(B.hE)
l.push(j)}l=A.c([],t.rn)
for(k=J.P(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.h(B.i1)
A.q(j.h(0,"kind"))
A.q(j.h(0,"text"))
A.ak(j.h(0,"speaker"))
l.push(new A.li())}i=A.c([],t.gg)
for(l=J.P(n);l.m();)i.push(A.Ez(l.gn()))
return new A.ll(s,m)},
Ez(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.a(B.h7)
s=A.q(a.h(0,m))
A.q(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.P(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.h(B.hJ)
o=A.q(p.h(0,m))
n=A.q(p.h(0,"label"))
A.q(p.h(0,"next"))
r.push(new A.lk(o,n))}return new A.lj(s)},
tC:function tC(a){this.c=a},
ix:function ix(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
rK:function rK(){},
rL:function rL(a){this.a=a},
ll:function ll(a,b){this.a=a
this.b=b},
li:function li(){},
lj:function lj(a){this.a=a},
lk:function lk(a,b){this.a=a
this.b=b},
tG:function tG(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
tH:function tH(){},
tI:function tI(){},
jJ:function jJ(a){this.a=a},
xE:function xE(a,b,c){this.b=a
this.e=b
this.f=c},
CS(a){var s,r,q,p
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.a(B.fM)
s=new A.n6()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.yf(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dV(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b1(B.bn,new A.n4(a),new A.n5()))},
cO:function cO(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
n6:function n6(){},
n4:function n4(a){this.a=a},
n5:function n5(){},
nh:function nh(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nj:function nj(a){this.a=a},
ni:function ni(a,b){this.a=a
this.b=b},
CY(a){var s
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.a(B.hr)
s=new A.nw()
return new A.dX(s.$1$2(B.bl,a.h(0,"output"),t.xs),s.$1$2(B.bf,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.be,a.h(0,"reverb"),t.gc),s.$1$2(B.bc,a.h(0,"ducking"),t.ul))},
cx:function cx(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
nw:function nw(){},
nx:function nx(a,b){this.a=a
this.b=b},
ny:function ny(a){this.a=a},
nX:function nX(a){this.a=a
this.b=null},
o0(a,b,c){var s
b.C()
if(c<1||c>6)throw A.a(A.al(c,"level","must be between 1 and 6"))
s=A.E(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nZ(s,b)
return s},
e5(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.E(a,"button","brush-button brush-state-"+s.b,r)
A.nZ(q,b)
q.type="button"
q.disabled=s===B.aw
q.addEventListener("click",A.W(new A.o_(c)))
return q},
D2(a,b,c,d){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aw
A.nZ(s,b)
s.addEventListener("change",A.W(new A.o3(d,s)))
return s},
D1(a,b,c,d,e,f){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.u(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aw
A.nZ(s,b)
s.addEventListener("input",A.W(new A.o2(s,e)))
return s},
xG(a,b){var s=B.b.iB(A.q(a.className),A.ir("\\s+")),r=A.z(s),q=r.i("G<1>"),p=A.H(new A.G(s,r.i("l(1)").a(new A.o1()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.T(p," ")
a.setAttribute("data-brush-state",s)},
nZ(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gkR())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aw)a.setAttribute("aria-disabled","true")},
o_:function o_(a){this.a=a},
o3:function o3(a,b){this.a=a
this.b=b},
o2:function o2(a,b){this.a=a
this.b=b},
o1:function o1(){},
e3:function e3(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
be:function be(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o5:function o5(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
o6:function o6(a){this.a=a},
zr(a){var s=!1
if(a.length!==0)if(!B.dK.p(0,a))s=B.mz.p(0,a)||B.mq.p(0,a)||B.my.p(0,a)||!B.b.S(a,"Mouse")
return s},
Ge(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.az(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
GV(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.M(a,A.o(a).i("M<1,2>"))
p=J.P(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fK(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fZ(B.kq,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.GV(a))
s=new A.fJ(g,d,h,e,f,c,A.aX(A.Ge(q),s,r))
s.C()
return s},
Dc(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.a(B.cy)
s=a.h(0,"version")
r=J.eC(s)
if(!r.a7(s,1)&&!r.a7(s,2))throw A.a(B.cy)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.a(B.hd)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.CO(m,new A.oj())){o=A.c([],r)
for(l=J.P(m);l.m();)o.push(A.q(l.gn()))
q.k(0,n,o)}else throw A.a(B.fT)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fK(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
yi(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.H(r.b,p)
o.k(0,q,r)}return o},
yE(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
yT(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fJ:function fJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ol:function ol(){},
ok:function ok(a){this.a=a},
om:function om(){},
on:function on(){},
oo:function oo(){},
oj:function oj(){},
e2:function e2(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.c=b},
k3:function k3(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Db(a){var s=t.N,r=t.m
r=new A.hP(A.fK(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.b(a.createElement("div")))
r.aW(a)
r.iN(a)
return r},
hP:function hP(a,b,c,d,e,f){var _=this
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
oh:function oh(a,b){this.a=a
this.b=b},
oi:function oi(a){this.a=a},
og:function og(a,b){this.a=a
this.b=b},
oe:function oe(a,b){this.a=a
this.b=b},
of:function of(a,b){this.a=a
this.b=b},
Dd(a){var s=new A.op(a,A.b(a.createElement("div")))
s.aW(a)
s.iO(a)
return s},
op:function op(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
oq:function oq(a){this.a=a},
Dj(a){var s=new A.oy(A.E(a,"div","door",null))
s.iQ(a)
return s},
zu(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.T(s,"; ")+"."},
oy:function oy(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
oz:function oz(a){this.a=a},
oA:function oA(a,b){this.a=a
this.b=b},
oB:function oB(a,b){this.a=a
this.b=b},
Dt(a){var s=new A.oE(a,A.b(a.createElement("div")))
s.aW(a)
s.iR(a)
return s},
oE:function oE(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oF:function oF(a){this.a=a},
p7:function p7(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
p8:function p8(){},
DG(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.p9(a.b===B.cF,a.c===B.cJ,s,a.e===B.cG,a.f===B.cD,a.r===B.cL,a.w,a.x)},
p9:function p9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
xH(a,b,c,d,e,f,g,h,i,j,k){return new A.fR(e,g,k,f,b,h,d,c,a,i,j)},
DH(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.a(B.hG)
s=new A.pa(a)
r=a.h(0,"contextualReminders")
if(!A.bA(r))throw A.a(B.hX)
q=!A.bA(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bm,t.bK)
o=s.$1$2("promptDensity",B.bp,t.dn)
n=s.$1$2("textPacing",B.bo,t.j_)
m=s.$1$2("journalLayout",B.bg,t.gm)
l=s.$1$2("confirmations",B.ba,t.aJ)
k=s.$1$2("saveFeedback",B.bh,t.mx)
j=s.$1$2("focusLossBehavior",B.aE,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bd,t.vS):B.b0
return A.xH(s,l,r,j,p,m,o,k,q,A.bA(a.h(0,g))&&A.Q(a.h(0,g)),n)},
dp:function dp(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pa:function pa(a){this.a=a},
pb:function pb(a,b){this.a=a
this.b=b},
pc:function pc(a){this.a=a},
zC(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.a(B.ho)
s=B.a.b1(B.d3,new A.pn(a),new A.po())
r=A.q(a.h(0,"renderScale"))
q=A.Q(a.h(0,"dynamicResolution"))
p=A.q(a.h(0,"frameTarget"))
o=A.q(a.h(0,"antialiasing"))
n=A.q(a.h(0,"textureQuality"))
m=A.ak(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.ak(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.ak(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.B2(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.ec(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fU(a,b){var s=b==null?B.b7:b
return new A.pp(s,a==null?B.b7:a)},
C7(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dK(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dK("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.h8(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cU&&b.a<2){q=q.h9(B.b6)
B.a.l(s,"High preset was reduced to Standard")}return new A.ph(q,A.ai(s,t.N))},
cy:function cy(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pn:function pn(a){this.a=a},
po:function po(){},
pp:function pp(a,b){this.a=a
this.b=b},
pg:function pg(a,b){this.a=a
this.b=b},
ph:function ph(a,b){this.a=a
this.b=b},
DJ(a){var s=new A.i_(A.m(t.N,t.m),B.b7,a,A.b(a.createElement("div")))
s.aW(a)
s.iS(a)
return s},
i_:function i_(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
pk:function pk(a){this.a=a},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
pj:function pj(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(a){this.a=a},
jK:function jK(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(){this.c=0},
DK(a){var s=new A.pr(a,A.b(a.createElement("div")))
s.aW(a)
s.iT(a)
return s},
pr:function pr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ps:function ps(a){this.a=a},
pY:function pY(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pZ:function pZ(a){this.a=a},
q_:function q_(a){this.a=a},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(){},
q2:function q2(){},
d0:function d0(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qS:function qS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
E(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
Bc(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(p.length);++r){q=A.L(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
ij:function ij(){},
bu:function bu(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(){},
qZ:function qZ(){},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
qX:function qX(a){this.a=a},
r_:function r_(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
r0:function r0(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
r1:function r1(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
rl:function rl(a){this.a=a
this.b=null},
EC(a){var s=new A.rN(a,A.b(a.createElement("div")))
s.aW(a)
s.iV(a)
return s},
rN:function rN(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rO:function rO(a,b){this.a=a
this.b=b},
rP:function rP(a){this.a=a},
lm(a,b){var s=t.N,r=t.m
r=new A.hc(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.xA(),B.at,A.m(s,r),A.m(s,r),B.aT,A.m(s,r),a,A.b(a.createElement("div")))
r.aW(a)
r.iW(a,b)
return r},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
td:function td(a){this.a=a},
te:function te(a){this.a=a},
tf:function tf(a,b){this.a=a
this.b=b},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
t5:function t5(a,b){this.a=a
this.b=b},
t6:function t6(a,b){this.a=a
this.b=b},
t4:function t4(a){this.a=a},
t7:function t7(a){this.a=a},
rQ:function rQ(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a,b){this.a=a
this.b=b},
t9:function t9(a,b){this.a=a
this.b=b},
ta:function ta(a,b){this.a=a
this.b=b},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function rW(a){this.a=a},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
rZ:function rZ(a){this.a=a},
t_:function t_(a){this.a=a},
t0:function t0(a){this.a=a},
t1:function t1(a){this.a=a},
t2:function t2(a){this.a=a},
rV:function rV(a,b,c){this.a=a
this.b=b
this.c=c},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
rU:function rU(a){this.a=a},
tc:function tc(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tj(a){return B.a.b1(B.B,new A.tk(a),new A.tl(a))},
ED(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
q.k(0,r.a,r.e)}return q},
dD(a,b){var s=t.z
s=A.fZ(A.ED(),s,s)
if(a!=null)s.I(0,a)
s=new A.ti(b,A.aX(s,t.N,t.K))
s.iX(a,b)
return s},
Ae(a){var s,r=t.f
if(!r.b(a)||!J.a8(a.h(0,"version"),1))throw A.a(B.hU)
s=a.h(0,"values")
if(!r.b(s))throw A.a(B.h2)
return A.dD(A.aZ(s,t.N,t.K),A.f(a.h(0,"version")))},
bG:function bG(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tk:function tk(a){this.a=a},
tl:function tl(a){this.a=a},
ti:function ti(a,b){this.a=a
this.b=b},
xX(a,b){var s=b==null?A.dD(null,1):b
return new A.tm(s,a==null?A.dD(null,1):a)},
EE(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.B[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.f0(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.d_(r)
J.bc(l,s.a,r)}catch(n){if(!(A.ag(n) instanceof A.A))throw n}}m=A.dD(l,1)
return A.xX(m,m)},
tm:function tm(a,b){this.a=a
this.b=b},
EG(a){var s=new A.tz(a,A.b(a.createElement("div")))
s.aW(a)
s.iY(a)
return s},
tz:function tz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tA:function tA(a,b,c){this.a=a
this.b=b
this.c=c},
CV(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cv(p+m+":"+k,m,l.a,l.b,j))}}B.a.U(i,new A.nf())
return new A.ne(A.ai(i,t.bC),A.a1(t.N))},
cv:function cv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ne:function ne(a,b){this.a=a
this.b=b},
ng:function ng(){},
nf:function nf(){},
EU(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.nT
s=t.T
r=A.m(s,t.q1)
q=A.o(a).i("aa<1>")
p=A.H(new A.aa(a,q),q.i("n.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bl(new A.bx(B.nB,k+" has an out-of-range authored day "+h+"."))
g=A.ET(k,h,i.b,m)
if(g instanceof A.bl)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bV(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ac(o,o.r,o.e,A.o(o).i("ac<2>"));o.m();){n=o.d
J.eG(e.cV(n.b,new A.u5()),n)}o=A.aX(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.M(e,e.$ti.i("M<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.az(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lN(new A.lM(r,A.a1(a),A.a1(s),o,q,A.c([],t.Dc),B.a5,A.qK(b,b,b)))},
ET(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.d_[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.S(h,m))continue
g=A.dz(B.b.aQ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bl(new A.bx(B.nC,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.d6
B.a.l(l,new A.c9(g,i.b,f))}if(l.length===0)continue
B.a.U(l,new A.u2())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bl(new A.bx(B.ea,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bl(new A.bx(B.ea,a+" day "+s+" has no authored tiers."))
return new A.mh(c)},
lM:function lM(a,b,c,d,e,f,g,h){var _=this
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
u8:function u8(a){this.a=a},
u7:function u7(a){this.a=a},
u9:function u9(a){this.a=a},
u3:function u3(a){this.a=a},
u4:function u4(){},
u6:function u6(a){this.a=a},
u5:function u5(){},
u1:function u1(a){this.a=a},
u0:function u0(a){this.a=a},
u2:function u2(){},
lN:function lN(a){this.a=a},
mh:function mh(a){this.a=a},
I6(a){var s,r,q,p=A.a1(t.N)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaf(),q=q.gu(q);q.m();)if(q.gn().gY().L(0,new A.wM())){p.l(0,r.a)
break}}s=A.H(p,p.$ti.c)
B.a.X(s)
return s},
I5(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.az(b,!0,s)
B.a.X(r)
q=new A.es()
q.bW((a^913741)>>>0)
p=q.aV(4)
if(!(p>=0&&p<4))return A.d(B.cZ,p)
o=B.cZ[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.az(r,!0,s)
B.a.d7(m,q)
s=A.lv(m,0,A.fu(n,"count",t.S),A.z(m).c).bS(0)
B.a.X(s)
return s},
wM:function wM(){},
Ap(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aS(r)||!A.aS(q)||!A.aS(p)||r<1||q<0||q>23||p<0)return null
return new A.bV(s,r,q,p)},
ES(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a1(t.N)
for(s=t.j,q=J.P(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a1(t.T)
for(s=J.P(s.a(a.h(0,j)));s.m();){n=A.Ap(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.CU(m)
if(!s&&l==null)return i
return new A.lO(r,o,l)},
CU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.Ap(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aS(p))if(!(p<0))if(A.bA(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bB(new A.G(B.d_,t.qR.a(new A.nb(r)),t.cE),t.hF)
j=A.bB(new A.G(B.kk,t.da.a(new A.nc(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bB(new A.G(B.jk,t.kr.a(new A.nd(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jL(s,k,j,p,i,n,A.ak(m))},
bN:function bN(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d7:function d7(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(){},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nb:function nb(a){this.a=a},
nc:function nc(a){this.a=a},
nd:function nd(a){this.a=a},
lL:function lL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
ua:function ua(){},
bl:function bl(a){this.a=a},
lK:function lK(a){this.a=a},
lI:function lI(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
Ha(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jE())return f
n=A.en().gb4()
m=n.h(0,"captureSeed")
l=A.dz(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dz(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.f0(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.an(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.mr.p(0,o.b))return f
J.bc(p,A.q(o.a),A.q(o.b))}r=p}else return f}catch(g){if(A.ag(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.mx.p(0,i))return f
if(h!=null&&!B.mu.p(0,h))return f
return new A.uo(l,k,j,h,r)},
Hb(){var s,r,q,p=A.en().gb4().h(0,"cameraProfile")
A:{if("wide"===p){s=B.f6
break A}if("intimate"===p){s=B.f8
break A}s=B.f7
break A}r=A.en().gb4().h(0,"cameraFov")
q=A.f0(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fC(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jz(a){var s=$.bp
if(s===a&&B.b.p(A.q(a.b.className),"open"))return
if(s!=null)s.ab()
$.bp=a
if(a===$.cr.j())$.hG().hC("gameplay.viewport")
else $.hG().nk(A.Bt(a))
s=$.af.j()
s.ay=!1
s.be()
$.ey=0
a.bP()},
yy(a,b,c){var s,r,q
$.jA=!0
s=$.bp
if(s!=null)s.ab()
$.bp=a
s=$.hG()
if(s.a.a.length===0)s.hC(c)
r=A.H(s.a.a,t.oP)
r.push(new A.dx(b,B.a0,c))
q=s.a
s.a=new A.ei(r,q.b,q.c)
s.jt(b)
s=$.af.j()
s.ay=!1
s.be()
$.ey=0
a.bP()
$.jA=!1},
dS(a){var s,r,q,p,o,n,m,l=null
if($.jA)return
$.jA=!0
a.ab()
$.bp=null
s=$.hG().l2()
$.jA=!1
r=s.a
if(r===B.dw){$.ey=0
r=$.af.j()
r.be()
r.ay=!0
q=A.L(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dv)return
r=s.c.a
r=r.length===0?l:B.a.ga0(r)
p=r==null?l:r.a
A:{if(B.bv===p){r=$.cr.j()
break A}if(B.dk===p){r=$.hs.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bp=r
n=$.af.j()
n.ay=!1
n.be()
$.ey=0
r.bP()
m=o==null?l:A.L(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jC(a){if($.bp===a&&B.b.p(A.q(a.b.className),"open"))a.ab()
else A.jz(a)},
hy(a){var s
if($.jA)return
if($.bp===a)$.bp=null
if(a===$.cr.j())$.hG().cj()
else $.hG().m4(A.Bt(a))
$.ey=0
s=$.af.j()
s.be()
s.ay=!0},
Bt(a){if(a===$.cr.j())return B.dl
if(a===$.hs.j())return B.a0
if(a instanceof A.hc)return B.a0
if(a instanceof A.i_)return B.a0
if(a instanceof A.hP)return B.a0
if(a===$.jn.j())return B.lm
if(a===$.mJ.j())return B.ln
if(a===$.jm.j())return B.lo
if(a===$.mH.j())return B.a0
if(a===$.jk.j())return B.lq
return B.lp},
mN(a,b){var s
a.sn9(new A.vu())
a.snb(new A.vv())
a.sna(new A.vw())
a.sn5(new A.vC())
a.sn8(new A.vD())
a.snj(new A.vE())
a.sne(new A.vF())
a.snd(new A.vG())
a.sba(b?new A.vH(a):new A.vI(a))
a.sb3(b?new A.vJ(a):new A.vx(a))
s=a.f
if(s===B.G)a.smX(new A.vy())
if(s===B.a2)a.sn6(new A.vz())
if(s===B.H){a.smW(new A.vA())
a.snc(new A.vB())}},
Gb(){var s=$.ew.j()
s.se7(new A.vr())
s.sba(new A.vs())
s.sb3(new A.vt())},
mM(a,b,c){return A.G8(a,b,c)},
G8(a,b,c){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mM=A.aM(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.vn()
k=c.$ti
j=$.ap
i=new A.aq(j,k)
if(j!==B.y)l=A.BA(l,j)
c.cr(new A.dK(i,2,null,l,k.i("dK<1,1>")))
s=4
return A.a4(i,$async$mM)
case 4:case 3:o=$.jF().b
n=$.aT
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a4(n.cH(b.a),$async$mM)
case 11:case 10:k=b.a
$.js=A.fU(k,a)
$.ew.j().cp(a,k,b.b)
A.yA()
A.jB()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ag(g)
$.js=A.fU(o,o)
k=$.ew.j()
k.cp(o,o,A.c(["renderer transaction rejected: "+A.u(m)],t.s))
A.yA()
s=8
break
case 5:s=1
break
case 8:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$mM,r)},
H_(){var s,r,q,p,o,n=null
try{n=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.an(n,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.hI)
q=A.zC(r.h(0,"requested"))
$.js=A.fU(A.zC(r.h(0,"effective")),q)}catch(s){$.js=A.fU(null,null)}p=$.jF().a
o=A.C7(p,A.Bg())
r=o.a
$.js=A.fU(r,p)
$.ew.j().cp(p,r,o.b)
A.yA()
A.jB()},
Bg(){var s,r,q,p,o=$.fq.j().ghc().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.S(p,"max-samples-"))continue
r=A.dz(B.b.aQ(p,12),null)
if(r==null)r=1}return new A.pg(r,B.a.p(o,"disjoint-timer-query"))},
yA(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a8($.jF().A(),null))}catch(s){}},
Ga(){var s=$.jj.j()
s.se7(new A.vo())
s.sba(new A.vp())
s.sb3(new A.vq())},
GY(){var s,r,q,p,o,n=null
try{n=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.yn=A.Dc(B.f.an(n,null))}catch(s){$.yn=A.fK(null,null,!1,1,!1,!1,2,1)}r=$.jj.j()
q=r.w=$.fw()
r.x=new A.k3(q)
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
r.dD()
$.af.j().ey($.fw().r)
r=$.af.j()
q=$.fw()
p=r.ch
p.a=q.f
p.ed()
r.be()
A.Bv()},
Bv(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a8($.fw().A(),null))}catch(s){}},
GX(){var s,r=null
try{r=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jr=A.CY(B.f.an(r,null))}catch(s){$.jr=B.aT}$.hq.j().i4($.jr)
A.Bu()
A.yd()},
Bu(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a8($.jr.A(),null))}catch(s){}},
yd(){var s=$.bq
if(s==null)return
s.ie($.jr)},
GZ(){var s,r=null
try{r=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.yr=A.DH(B.f.an(r,null))}catch(s){$.yr=$.xA()}$.jl.j().i5($.cM())
A.Bw()
A.AZ()},
Bw(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a8($.cM().A(),null))}catch(s){}},
AZ(){var s,r="detailed",q=A.DG($.cM()),p=A.L(A.b(v.G.document).documentElement)
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
s=$.cM().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cM().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
GW(){var s,r=null
try{r=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ex=A.CS(B.f.an(r,null))}catch(s){$.ex=B.at}$.fp.j().ex($.ex)
A.yz()
A.mK()},
yz(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a8($.ex.A(),null))}catch(s){}},
mK(){var s,r,q,p,o,n,m=$.ex,l=$.ww,k=$.yR,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.fZ)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ab
$.yF=l
$.cJ.j()
r=A.L(A.b(v.G.document).documentElement)
q=r==null
p=q?null:A.Q(A.b(r.classList).contains("high-contrast"))
o=q?null:A.Q(A.b(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.Q(A.b(r.classList).toggle("reduced-motion",l))
if(!q)A.Q(A.b(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.Q(A.b(r.classList).toggle("captions-enabled",s))
if(!q)A.Q(A.b(r.classList).toggle("reduced-effects",o))
if(!q)A.Q(A.b(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.u(j*100)+"%")
q=$.x.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.u(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.AX){m=$.bn.j()
l=$.ex.f
m.e=new A.jJ(l==null?B.ab:l)
m=$.bn.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
By(a){var s,r,q
A.eB("renderer-unavailable")
s=$.x.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dO.j().b)
$.dO.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dO.j().d)
q.k(0,"aliasUsed",$.dO.j().f)
if($.dO.j().e!=null)q.k(0,"rejectionReason",$.dO.j().e)
if($.dO.j().r!=null)q.k(0,"aliasReason",$.dO.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a8(A.J(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
Gz(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.wa(r,q)
r.addEventListener("change",A.W(new A.w8(s)))
q.addEventListener("change",A.W(new A.w9(s)))},
n0(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8
var $async$n0=A.aM(function(f0,f1){if(f0===1){o.push(f1)
s=p}for(;;)switch(s){case 0:e6=v.G
e7=A.L(A.b(e6.document).getElementById("game"))
if(e7==null){s=1
break}$.x.b=e7
$.yq=A.L(A.b(e6.document).getElementById("fps"))
$.dO.b=$.Cz().cn(A.en().gb4().h(0,"renderer"))
A.GA()
c0=$.x.j()
c1=A.f(A.b(e6.window).innerWidth)>0?A.f(A.b(e6.window).innerWidth):800
c0.width=c1
c1=$.x.j()
c0=A.f(A.b(e6.window).innerHeight)>0?A.f(A.b(e6.window).innerHeight):600
c1.height=c0
c2=A.L(A.b(e6.document).getElementById("ui-canvas"))
if(c2!=null){$.AU.b=c2
c2.width=A.f($.x.j().width)
c2.height=A.f($.x.j().height)
c0=new A.o5(c2,A.c([],t.km))
c3=A.L(c2.getContext("2d"))
if(!t.m.b(c3))A.h(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.rB(c0)
$.eA=c0
c0.cZ(A.f($.x.j().width),A.f($.x.j().height))}n=B.f5.lV(e7)
if(n==null){A.By("webgl2 unavailable")
s=1
break}try{c0=A.f($.x.j().width)
c1=A.f($.x.j().height)
c4=t.d
c5=A.c([],c4)
c6=t.N
c7=A.c([],t.s3)
c8=t.iO
c9=t.m3
c4=A.c([],c4)
d0=t.S
d1=t.pw
d2=A.c([],t.j5)
m=new A.mk(n,c0,c1,c5,A.m(c6,t.qr),c7,A.m(c6,c8),A.m(c6,c9),A.m(c6,t.xp),A.m(c6,t.bE),A.m(c6,c8),A.m(c6,c9),c4,A.m(c6,c8),A.m(c6,c9),A.m(c6,c6),A.m(d0,d1),A.m(c6,t.qS),d2,B.jM,A.m(c6,t.Aj),A.m(c6,c6),A.m(c6,d1),A.m(c6,t.vD),A.m(c6,d1),new A.qw(A.m(c6,t.ml),A.m(c6,d0)),A.m(c6,t.mL),A.m(c6,t.w1),B.i7,B.lE)
$.aT=m
c0=$.dO.j()
c1=t.dM.a(m)
if(c0.a!==B.aJ)A.h(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.r4(c1,c0.A(),B.m5)
c1.mC()
c0.d=B.R
$.fq.b=c0}catch(e9){l=A.ag(e9)
k=A.cL(e9)
g=$.x.j()
g.setAttribute("data-renderer-error",A.u(l))
if($.jE())$.x.j().setAttribute("data-renderer-error-stack",A.u(k))
A.By("pixeldart initialization failed")
s=1
break}A.jB()
p=4
A.eB("initializing")
$.cJ.b=new A.o4(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.zc())
$.ww=A.Q(A.b(A.b(e6.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.yR=A.Q(A.b(A.b(e6.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.yF=$.ww
$.cJ.j()
c0=A.b(e6.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.DO(A.J(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.b(c0.document)
c4=new A.kA(c0,c6,A.a1(c1),A.a1(c1),A.a1(c1),A.a1(c1),A.a1(c1),new A.k(0,0,0),new A.pR(),c4)
c0.addEventListener("keydown",A.W(c4.gjW()))
c0.addEventListener("keyup",A.W(c4.gjY()))
c0.addEventListener("mousemove",A.W(c4.gk7()))
c0.addEventListener("mousedown",A.W(c4.gk5()))
c0.addEventListener("mouseup",A.W(c4.gk9()))
c0.addEventListener("wheel",A.W(c4.gkb()))
c6.addEventListener("pointerlockchange",A.W(c4.gk_()))
$.af.b=c4
c4=$.x.j()
c0=A.f(A.b(e6.window).innerWidth)>0?A.f(A.b(e6.window).innerWidth):800
c4.width=c0
c0=$.x.j()
c4=A.f(A.b(e6.window).innerHeight)>0?A.f(A.b(e6.window).innerHeight):600
c0.height=c4
A.eB("renderer")
A.eB("text")
c4=$.fx()
s=7
return A.a4(c4.by(),$async$n0)
case 7:j=c4.o3()
i=A.EU(j)
if(!(i instanceof A.lN)){h=t.bB.a(i).a
g=h.b
throw A.a("Failed to build visitors: "+g)}$.aH.b=i.a
$.mG.b=A.CV(j)
g=A.m(c1,c5)
for(c0=t.j,d4=0;d4<5;++d4){f=B.A[d4]
c5=A.q(f)
c6=c4.c
c6===$&&A.p()
d5=c6.h(0,c5)
c5=c0.b(d5)?A.az(d5,!0,c1):B.m
J.bc(g,f,c5)}e=A.EV(g)
s=8
return A.a4(A.mR(),$async$n0)
case 8:d=f1
$.yb.b=new A.nY(B.f4)
c=$.yb.j().nr(new A.wV(e,d))
d6=$.xB()
b=d6
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.aW.aV(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.c.aS(c6.c)
if(c6==null)c6=7
if(c5<1)A.h(A.al(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.h(A.al(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.al(5760,"daySeconds","must be finite and > 0"))
d7=new A.kq(c5,7,5760)
d7.eG(c6)
d8=A.zN(e)
d9=g==null?A.zD(42):A.BT(g,42)
g=A.zA(42,c1,d9,d7,d8,A.zt(6,16,d8,null,6,B.jN,d7),new A.kc(0,0,0,!1),A.qK(null,null,null))}else{g=c.a
g.toString
g=A.zB(d,g,e)}$.V.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.DE(a,g,$.V.j().b)}$.yh=g
$.aH.j().y=$.V.j().z
g=A.ai(A.Gv($.V.j().b),t.fu)
$.yc.b=new A.uc(g)
g=$.xC()
c1=c.a
g.ef(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fq.j().eK(A.A9($.V.j().ghI()))
if(c.b!=null){g=c.b
g.toString
A.hz(g)}g=$.aH.j()
c1=A.I5($.V.j().b,A.I6(j.b))
g.siC(A.h_(c1,A.z(c1).c))
A.eB("house")
$.Y.b=$.V.j().c
g=d6==null
a0=g?null:d6.e
a1=g?null:d6.f
if(a1!=null)for(g=$.Y.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a2=g[d4]
for(c4=a2.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.t)(c4),++e0){a3=c4[e0]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.a8(a0,"open")||J.a8(a0,"closed")){a5=J.a8(a0,"open")
for(g=$.Y.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a6=g[d4]
for(c4=a6.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.t)(c4),++e0){a7=c4[e0]
a7.sis(a5)}}}a8=$.za()
if(a8!=null&&a8.length!==0)for(g=$.Y.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a9=g[d4]
for(c4=a9.r,c5=c4.length,e0=0;e0<c5;++e0){b0=c4[e0]
if(b0.a===a8)b0.d=$.zb()}}g=$.aT
if(g!=null)g.l1($.Y.j())
$.bo.b=$.V.j().d
$.Y.j()
g=new A.k(12.9375,1.65,0.825)
$.yS=$.yD=$.yJ=g
b1=g.ag(0,new A.k(0,1.3499999999999999,0))
$.jo.b=new A.jZ(b1,J.zd(b1,new A.k(0,1.2000000000000002,0)))
$.hr.b=new A.oH()
g=A.ys(B.m)
c1=A.ys(B.m)
c4=new A.rE(B.D,g,c1)
if(!isFinite(0))A.h(B.fJ)
if(!B.a.a3(c1,B.a.gar(g)))A.h(B.hv)
if(c4.a===B.D&&c4.b!==0&&!c4.e)A.h(B.fR)
$.cc.b=c4
$.aw="hall"
g=c.a
b2=A.Ec(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.mI($.Y.j())){g=b2.b
$.yS=$.yD=$.yJ=g
$.cs=b2.c
$.fs=b2.d
$.aw=b2.a
b3=g.ag(0,new A.k(0,1.3499999999999999,0))
g=$.jo.j()
g.sl3(b3)
g.b=J.zd(b3,new A.k(0,1.2000000000000002,0))
g=$.jo.j()
c1=$.Y.j()
c4=b2.e
c5=b2.f
g.nN($.aw,$.eF(),c1,c5,c4)
A.hz("restored position")}g=A.EC(A.b(e6.document))
g.smY(new A.wW())
g.sba(new A.wX())
g.sb3(new A.x7())
$.hs.b=g
g=A.b(e6.document)
c1=A.b(g.createElement("div"))
c4=new A.r0(g,c1)
c4.aW(g)
c1.className=A.q(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.b(c1.appendChild(A.o0(g,B.eJ,1)))
A.b(c1.appendChild(A.E(g,"p","settings-copy","The house waits. Choose what to do next.")))
e1=A.E(g,"nav","pause-actions",null)
e1.setAttribute("aria-label","Pause actions")
c4.bq(g,e1,B.dm,"resume")
c4.bq(g,e1,B.dn,"settings")
c4.bq(g,e1,B.dp,"controls")
c4.bq(g,e1,B.dq,"save now")
c4.bq(g,e1,B.dr,"help")
c4.bq(g,e1,B.ds,"credits")
c4.bq(g,e1,B.dt,"back")
A.b(c1.appendChild(e1))
c4.snf(new A.xg())
c4.sba(new A.xh())
c4.snh(new A.xi())
c4.sn1(new A.xj())
c4.sng(new A.xk())
c4.sn7(new A.xl())
c4.sn2(new A.xm())
c4.sb3(new A.wY())
$.cr.b=c4
c4=$.V.j().e
c1=$.bo.j()
$.V.j()
$.mI.b=new A.pP(c4,c1)
c1=A.b(e6.document)
c4=$.V.j().e
g=$.bo.j()
c5=$.mI.j()
c6=A.b(c1.createElement("div"))
c5=new A.pY(c4,g,c5,c1,c6)
c5.aW(c1)
c6.setAttribute("aria-label","The Journal")
A.b(c6.appendChild(A.E(c1,"div","journal-title","The Journal")))
e2=A.E(c1,"div","journal-pages",null)
g=A.E(c1,"div","page page-left",null)
c5.y!==$&&A.b8()
c5.y=g
c4=A.E(c1,"div","page page-right",null)
c5.z!==$&&A.b8()
c5.z=c4
A.b(e2.appendChild(g))
A.b(e2.appendChild(c4))
A.b(c6.appendChild(e2))
A.b(c6.appendChild(c5.j8()))
e3=A.E(c1,"div","tape-roll",null)
A.b(e3.style).setProperty("width","8rem")
c4=A.E(c1,"div","tape-fill",null)
c5.as!==$&&A.b8()
c5.as=c4
A.b(e3.appendChild(c4))
A.b(c6.appendChild(e3))
e4=A.E(c1,"div","consult",null)
A.b(e4.appendChild(A.E(c1,"div","consult-label","Cite an entry")))
c4=A.E(c1,"div","entry-picker",null)
c5.at!==$&&A.b8()
c5.at=c4
g=A.E(c1,"div","consult-result",null)
c5.ax!==$&&A.b8()
c5.ax=g
A.b(e4.appendChild(c4))
A.b(e4.appendChild(g))
A.b(c6.appendChild(e4))
e5=A.L(c1.documentElement)
if(t.m.b(e5)){A.b(e5.style).setProperty("--shake-max-deg","3deg")
A.b(e5.style).setProperty("--shake-max-px","2px")}$.jn.b=c5
$.jn.j().sb3(new A.wZ())
g=A.b(e6.document)
c1=A.E(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.b(c1.style).setProperty("transition-duration","0.3s")
A.b(A.L(g.body).appendChild(c1))
$.AT.b=new A.rl(c1)
c1=A.b(e6.document)
g=A.E(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.L(c1.body).appendChild(g))
$.AS.b=new A.nX(g)
g=A.b(e6.document)
c1=A.E(g,"div","ambient-notice",null)
c4=A.E(g,"div","caption-cue",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.b(A.L(g.body).appendChild(c1))
A.b(A.L(g.body).appendChild(c4))
$.bn.b=new A.nh(c1,c4,B.K)
$.AX=!0
c4=A.Dj(A.b(e6.document))
c4.sn0(A.C5())
c4.sn_(A.Ij())
$.av.b=c4
c4=$.cu()
c4.smZ(new A.x_())
c4.sn3(A.C5())
c4=c.a
b4=A.ES(c4==null?null:c4.c.h(0,"visitors"))
if($.cM().Q&&b4!=null&&$.aH.j().ef(b4))A.Hf()
g=$.mG.j()
c1=c.a
g.nO(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.P(b5);g.m();){b6=g.gn()
if(A.aS(b6))$.wx.l(0,b6)}g=A.EG(A.b(e6.document))
g.sni(new A.x0())
g.sb3(new A.x1())
$.mJ.b=g
g=A.DK(A.b(e6.document))
g.sb3(new A.x2())
$.jm.b=g
g=A.Dd(A.b(e6.document))
g.sb3(new A.x3())
$.mH.b=g
$.jp.b=A.lm(A.b(e6.document),null)
$.jq.b=A.lm(A.b(e6.document),B.a1)
$.fp.b=A.lm(A.b(e6.document),B.H)
A.mN($.jp.j(),!1)
A.mN($.jq.j(),!0)
A.mN($.fp.j(),!0)
A.GW()
A.Gz()
$.ew.b=A.DJ(A.b(e6.document))
A.Gb()
A.H_()
$.hq.b=A.lm(A.b(e6.document),B.G)
A.mN($.hq.j(),!0)
A.GX()
$.jl.b=A.lm(A.b(e6.document),B.a2)
A.mN($.jl.j(),!0)
A.GZ()
$.jj.b=A.Db(A.b(e6.document))
A.Ga()
A.GY()
g=A.Dt(A.b(e6.document))
g.sb3(new A.x4())
g.sn4(new A.x5())
$.jk.b=g
g=c.a
b7=A.Dv(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.Bx(b7)
A.eB("world")
A.BB()
A.b(e6.window).addEventListener("resize",A.W(new A.x6()))
A.b(e6.document).addEventListener("visibilitychange",A.W(new A.x8()))
A.b(e6.window).addEventListener("keydown",A.W(new A.x9()))
A.b(e6.window).addEventListener("keyup",A.W(new A.xa()))
A.b(e6.window).addEventListener("keydown",A.W(new A.xb()))
A.b(e6.window).addEventListener("click",A.W(new A.xc()))
$.x.j().addEventListener("mousemove",A.W(new A.xd()))
$.x.j().addEventListener("click",A.W(new A.xe()))
$.x.j().addEventListener("wheel",A.W(new A.xf()))
A.hw()
A.eB("raf")
A.f(A.b(e6.window).requestAnimationFrame(A.W(A.C6())))
p=2
s=6
break
case 4:p=3
e8=o.pop()
b8=A.ag(e8)
b9=A.cL(e8)
A.wm(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$n0,r)},
Gy(a){var s,r,q,p=$.eA
if(!$.av.j().y||p==null)return
s=A.B7(a)
if(s==null)return
r=$.cu()
q=p.hu(s.a,s.b)
r.r=q==null?null:q.b},
Gx(a){var s,r=$.eA
if(!$.av.j().y||r==null)return!1
s=A.B7(a)
if(s==null)return!1
return $.cu().mx(r.hu(s.a,s.b))},
B7(a){var s=A.b($.x.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aB(A.f(a.clientX)-A.a6(s.left),A.f(a.clientY)-A.a6(s.top))},
GA(){var s=v.G
A.b(s.window).addEventListener("error",A.W(new A.wb()))
A.b(s.window).addEventListener("unhandledrejection",A.W(new A.wc()))},
eB(a){if($.yj===a)return
$.yj=a
$.x.j().setAttribute("data-boot-phase",a)},
jB(){var s,r,q,p,o,n=null,m=$.fq.j().ghc(),l=$.x.j(),k=A.en().gb4().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a8(m.A(),n))
k=$.aT
if(k==null)k="{}"
else{k=k.e
k===$&&A.p()
k=k.as
if(k==null)k=A.h(A.j("renderer is not initialized"))
s=k.a
s.C()
r=s.b
q=A.H(r,A.o(r).c)
B.a.X(q)
r=t.N
p=t.K
p=B.f.a8(A.J(["profile",A.J(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a8(B.ko,n))
l=$.aT
o=l==null?n:l.x
if(o!=null)$.x.j().setAttribute("data-renderer-profile-fallback",o)},
H7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jE())return
s=$.za()
if(s!=null&&s.length!==0){r=$.x.j()
q=$.zb()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.yc.j().hm($.V.j().gad().a)
r=$.x.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.xB()
o=q==null?c:q.e
if(o!=null)$.x.j().setAttribute("data-automation-capture-shutters",o)
$.x.j().setAttribute("data-automation-rain-window-visibility",B.c.ae(A.Bz($.aw),3))
r=$.x.j()
q=$.yj
n=$.aw
m=$.eF()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.f.a8(A.J(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.J(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cs,"pitch",$.fs,"modal",$.bp!=null,"dialogueOverlay",$.av.j().y,"inputEnabled",$.af.j().ay,"day",$.V.j().gad().a,"hour",$.V.j().gad().b],l,k),c))
$.x.j().setAttribute("data-story-journal-entry-count",""+$.V.j().gad().r)
j=A.m(l,t.X)
for(r=$.Y.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.J(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.x.j().setAttribute("data-automation-portals",B.f.a8(j,c))
e=$.mL
r=!1
if(e!=null)if($.Y.j().e.h(0,"cellar")!=null){r=$.Y.j()
q=$.aw
q=r.e.h(0,q)!=null
r=q}if(r){d=e.ck("cellar",$.aw)
$.x.j().setAttribute("data-audio-transmission-cellar",B.f.a8(A.J(["sourceRoom","cellar","listenerRoom",$.aw,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.x.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mV(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.cc.j().a!==B.D){A.hz("save unavailable during rupture")
return}try{r=$.yb.j()
q=$.V.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.aw
m=$.eF()
l=$.cs
k=$.fs
j=$.jo.j().d
j=j==null?null:j.a.a
i=$.jo.j().d
J.bc(s,"player",new A.l1(n,m,l,k,j,i==null?null:i.b).A())
n=$.aH.j()
m=A.f7(n.b,p)
l=A.f7(n.c,t.T)
n=n.r
J.bc(s,"visitors",new A.lO(m,l,n==null?null:new A.jL(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).A())
n=$.mG.j().b
n=A.H(n,A.o(n).c)
B.a.X(n)
J.bc(s,"ambient",n)
n=$.yh
if(n!=null)J.bc(s,"authoredEvents",A.J(["delivered",n.gm1()],p,o))
n=A.H($.wx,A.o($.wx).c)
B.a.X(n)
J.bc(s,"unverifiables",n)
J.bc(s,"inventoryInspections",$.xC().A())
n=$.yo
if(n!=null)J.bc(s,"ending",A.J(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.zF(q.c).A()
k=q.d
r.o5(A.Ac(s,A.J(["houseSeed",n,"runSeed",m,"house",l,"time",A.J(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.A(),"journal",q.e.A(),"difficulty",q.r.A(),"narrative",q.z.A()],p,o),2))
A.hz(a)}catch(h){A.hz("save failed")}},
H5(){var s=A.L(A.b(v.G.document).documentElement),r=s==null?null:A.ak(s.getAttribute("data-gameplay-focus-loss")),q=A.bB(new A.G(B.aE,t.rg.a(new A.wi(r)),t.vK),t.x)
switch((q==null?B.b1:q).a){case 0:$.mS=!0
s=$.bq
if(s!=null)s.eB(!0)
break
case 1:$.mS=!0
break
case 2:break}},
hz(a){var s=v.G,r=A.L(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.L(A.b(s.document).documentElement)
s=s==null?null:A.ak(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.DD(B.fr,new A.ws(r),t.H)},
wm(a,b){var s,r,q,p
A.eB("error")
s=A.u(a)
r=A.z0(s,"\n"," ")
s=$.yq
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.L(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.u(a):A.u(a)+"\n"+b.q(0)
$.x.j().setAttribute("data-boot-error",p)
if($.jE()&&!q)$.x.j().setAttribute("data-boot-stack",b.q(0))
A.b(s.console).error(p)},
B1(){var s,r
if($.yg)return
$.yg=!0
s=$.bq
r=s==null
if(!r)s.cj()
if(!r)s.eJ("music")
B.a.l($.dd,"arm")},
hw(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hw=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a4(A.hv(),$async$hw)
case 2:o=null
q=4
s=7
return A.a4(A.aD(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$hw)
case 7:n=b
i=A
s=8
return A.a4(A.aD(A.b(n.json()),t.X),$async$hw)
case 8:o=i.b(b)
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
if(k!=null&&typeof k==="string"){A.q(k)
l=A.L(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.mH.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.a4(A.oV(A.c([A.we(o),A.w7(o),A.jw()],t.iJ),t.H),$async$hw)
case 9:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hw,r)},
jw(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h
var $async$jw=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a4(A.aD(A.b(A.b(v.G.window).fetch("res/models/index.json")),t.m),$async$jw)
case 6:o=b
if(!A.Q(o.ok)){k=A.j("HTTP "+A.u(A.mZ(o,"status",t.S)))
throw A.a(k)}s=7
return A.a4(A.aD(A.b(o.text()),t.N),$async$jw)
case 7:n=b
m=A.Ed(n)
$.x.j().setAttribute("data-renderer-model-packages","validated")
$.x.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.x.j()
j=m.a.gY()
k.setAttribute("data-renderer-model-package-count",""+j.gt(j))
j=$.aT
k=j==null?null:j.cQ(m)
s=8
return A.a4(k instanceof A.aq?k:A.Fe(k,t.H),$async$jw)
case 8:q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
k=$.x.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.x.j().setAttribute("data-renderer-model-package-error",A.u(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$jw,r)},
hv(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hv=A.aM(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.d2[g]
q=6
s=9
return A.a4(A.aD(A.b(A.b(j.window).fetch(o)),i),$async$hv)
case 9:n=a0
s=10
return A.a4(A.aD(A.b(n.text()),h),$async$hv)
case 10:m=a0
l=A.zk(B.f.an(m,null))
f=$.Y.b
if(f===$.Y)A.h(A.a7(""))
l.el(f)
f=$.x.b
if(f===$.x)A.h(A.a7(""))
f.setAttribute("data-house-manifest","validated")
f=$.x.b
if(f===$.x)A.h(A.a7(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ag(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.x.j().setAttribute("data-house-manifest","unavailable")
A.b(j.console).warn("authored house manifest unavailable: "+A.u(d))}s=11
return A.a4(A.mP(),$async$hv)
case 11:s=12
return A.a4(A.mQ(),$async$hv)
case 12:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hv,r)},
mR(){var s=0,r=A.aL(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mR=A.aM(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.d2[f]
p=7
s=10
return A.a4(A.aD(A.b(A.b(i.window).fetch(n)),h),$async$mR)
case 10:m=a0
s=11
return A.a4(A.aD(A.b(m.text()),g),$async$mR)
case 11:l=a0
k=A.zk(B.f.an(l,null))
k.em()
e=$.x.b
if(e===$.x)A.h(A.a7(""))
e.setAttribute("data-house-blueprint","validated")
e=$.x.b
if(e===$.x)A.h(A.a7(""))
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
j=A.ag(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:throw A.a(A.j("authored house blueprint unavailable: "+A.u(c)))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$mR,r)},
mP(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mP=A.aM(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.jp[c]
p=7
s=10
return A.a4(A.aD(A.b(A.b(g.window).fetch(n)),f),$async$mP)
case 10:m=b1
s=11
return A.a4(A.aD(A.b(m.text()),e),$async$mP)
case 11:l=b1
b=B.f.an(l,null)
b=h.b(b)?b:A.dP("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dP("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aS(a)?a:A.dP("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dP("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.az(a,!0,d):A.dP("assets is not a list")
a4=A.z(a3)
a5=a4.i("F<1,cX>")
a3=A.H(new A.F(a3,a4.i("cX(1)").a(A.If()),a5),a5.i("X.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.az(a,!0,d):A.dP("placements is not a list")
a5=A.z(a4)
a6=a5.i("F<1,cA>")
a4=A.H(new A.F(a4,a5.i("cA(1)").a(A.Ig()),a6),a6.i("X.E"))
a4.$flags=1
k=new A.py(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.h(A.a7(""))
k.el(a1)
$.jt=k
a1=$.aT
if(a1!=null)a1.ez(k)
a1=$.x.b
if(a1===$.x)A.h(A.a7(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.x.b
if(a1===$.x)A.h(A.a7(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.x.b
if(a1===$.x)A.h(A.a7(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ag(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.x.j().setAttribute("data-house-inventory","unavailable")
$.x.j().setAttribute("data-house-inventory-error",A.u(a8))
A.b(g.console).warn("authored house inventory unavailable: "+A.u(a8))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$mP,r)},
mQ(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mQ=A.aM(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.jt
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.jY[a4]
p=7
s=10
return A.a4(A.aD(A.b(A.b(a1.window).fetch(m)),a2),$async$mQ)
case 10:l=b5
s=11
return A.a4(A.aD(A.b(l.text()),e),$async$mQ)
case 11:k=b5
a5=B.f.an(k,null)
a5=a0.b(a5)?a5:A.ht("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.az(a6,!0,a3):A.ht("emitters is not a list")
a8=A.z(a7)
a9=a8.i("F<1,cW>")
a7=A.H(new A.F(a7,a8.i("cW(1)").a(A.Iu()),a9),a9.i("X.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aS(a6)?a6:A.ht("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.ht("sourceRef is not a string")
j=new A.pF(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.h(A.a7(""))
j.o_(a7,b2)
$.Bj=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bc(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.h(A.a7(""))
a8=A.CW(i)
a9=new A.nt(a7,A.aX(B.df,e,d),a8)
a9.iM(a8,a7,B.df)
$.mL=a9
a7=$.bq
if(a7!=null){a7.ch=a9
a7.bF()}a7=$.x.b
if(a7===$.x)A.h(A.a7(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.x.b
if(a7===$.x)A.h(A.a7(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.x.b
if(a7===$.x)A.h(A.a7(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.x.b
if(a7===$.x)A.h(A.a7(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ag(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.mL=null
$.x.j().setAttribute("data-audio-planner","unavailable")
$.x.j().setAttribute("data-house-soundscape","unavailable")
$.x.j().setAttribute("data-house-soundscape-error",A.u(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.u(n))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$mQ,r)},
ym(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.P(t.a.b(s)?s:new A.b4(s,A.z(s).i("b4<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.q(q))}},
w7(a){var s=0,r=A.aL(t.H),q,p,o,n,m,l
var $async$w7=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.ym(A.L(n?null:a.sfx),m,"")
A.ym(A.L(n?null:a.ir),m,"ir-")
q=A.L(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.q(p))
l=$
s=2
return A.a4(A.nA(m,$.Y.j()),$async$w7)
case 2:o=l.bq=c
o.ch=$.mL
o.bF()
A.H0()
A.BD(o)
A.yd()
A.BE()
if($.yg){o.cj()
o.eJ("music")}return A.aJ(null,r)}})
return A.aK($async$w7,r)},
yM(a,b){var s
A.BQ(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Hc(a){var s,r
try{s=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
AY(a,b){var s
if(a!=="brightness")return
s=A.L(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.u(B.c.D(b,0.6,1.4))+")")},
vh(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.L(A.b(v.G.document).documentElement)
if(r!=null)A.Q(A.b(r.classList).toggle(s,b))
A.mK()},
BE(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.df().a.cl(o)),k=A.Q($.df().a.cl(n)),j=A.Q($.df().a.cl(m))
for(s=[$.jp.j(),$.jq.j(),$.fp.j(),$.hq.j(),$.jl.j()],r=0;r<5;++r)s[r].eA(o,l)
A.AY(o,l)
for(s=[$.jp.j(),$.jq.j(),$.fp.j(),$.hq.j(),$.jl.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.vh(n,k)
A.vh(m,j)},
yL(a,b){var s
A.BQ(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
H9(a){var s,r
try{s=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
BD(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.jF[s]
q=$.df().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.h(A.j("setting missing from profile: "+r)):q))}p=A.Q($.df().a.cl("muted"))
o=A.Q($.df().a.cl("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bp(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d5(o)
for(q=[$.jp.j(),$.jq.j(),$.fp.j(),$.hq.j()],n=j.$ti.i("cC<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cC(j,j.r,j.e,n);m.m();){k=m.d
l.eA(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
B_(){var s=$.bq
if(s!=null)A.BD(s)
A.BE()},
H0(){var s,r,q,p,o,n,m,l,k=null
try{k=A.ak(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.an(k,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.h0)
q=A.Ae(r.h(0,"requested"))
$.BL=A.xX(A.Ae(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.H9(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Hc(p))}}$.BL=A.EE(o,r)
A.wj()},
wj(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a8($.df().A(),null))}catch(s){}},
BQ(a,b){var s,r,q,p,o,n,m
switch(A.tj(a).d.a){case 0:r=A.f0(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.df()
q=s
A.tj(a).d_(q)
p=t.N
o=t.K
n=A.fZ(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dD(n,1)
n=s
A.tj(a).d_(n)
o=A.fZ(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dD(o,1)
A.wj()}catch(m){if(!(A.ag(m) instanceof A.A))throw m}},
we(a){var s=0,r=A.aL(t.H),q,p
var $async$we=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.ym(A.L(a==null?null:a.tex),p,"")
q=$.aT
q=q==null?null:q.cR(p)
s=2
return A.a4(A.oV(A.c([q==null?A.zz(t.H):q],t.iJ),t.H),$async$we)
case 2:return A.aJ(null,r)}})
return A.aK($async$we,r)},
BB(){var s,r,q=v.G,p=A.f(A.b(q.window).innerWidth),o=A.f(A.b(q.window).innerHeight),n=$.x.j(),m=p>0?p:800
n.width=m
m=$.x.j()
n=o>0?o:600
m.height=n
s=A.L(A.b(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.f($.x.j().width)
s.height=A.f($.x.j().height)}q=$.eA
if(q!=null)q.cZ(A.f($.x.j().width),A.f($.x.j().height))
q=$.fq.j()
n=A.f($.x.j().width)
m=A.f($.x.j().height)
if(q.d!==B.R)A.h(A.j("pixeldart backend is not ready"))
if(n<=0||m<=0)A.h(A.w("pixeldart surface size must be positive",null))
q.b.cZ(n,m)
q=$.aT
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.x.j().setAttribute("data-renderer-surface",r)},
Gw(){var s,r,q=$.bp
if(q!=null){s=$.af.j()
if(!s.CW.bi("pause",s.f)){s=$.af.j()
s=s.CW.bi("secondary",s.f)}else s=!0
if(s){A.Gd(q)
return}if($.af.j().f.a1(0,"GamepadDpadUp")){A.Bp(q,-1)
return}if($.af.j().f.a1(0,"GamepadDpadDown")){A.Bp(q,1)
return}s=$.af.j()
if(s.CW.bi("interact",s.f)){r=A.L(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pV(r,"click",t.X)}return}s=$.af.j()
if(s.CW.bi("pause",s.f)){A.jz($.cr.j())
return}if($.av.j().y)return
s=$.af.j()
if(s.CW.bi("journal",s.f))A.jC($.jn.j())
else{s=$.af.j()
if(s.CW.bi("sleep",s.f))A.jC($.mJ.j())}},
Gd(a){if(a===$.cr.j()){a.ab()
return}if(a===$.hs.j()||a instanceof A.hc||a instanceof A.i_||a instanceof A.hP){A.dS(a)
return}a.ab()},
Bp(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(l.length);++r){q=A.L(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.L(A.b(v.G.document).activeElement)
o=B.a.bx(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.R(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
H8(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.Bi){$.yx=s
$.Bi=!0}e=s
d=$.yx
if(typeof e!=="number")return e.ag()
r=(e-d)/1000
$.yx=s
e=r
if(typeof e!=="number")return e.d3()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.i2()
if(e>0.25)r=0.25
A.HE(r)
$.af.j().nn()
e=$.x.j()
d=$.af.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.af.j().z
if(q!=null)$.x.j().setAttribute("data-controller-id",q)
else $.x.j().removeAttribute("data-controller-id")
A.Gw()
if(!$.mS&&$.bp==null){e=$.ey
d=r
if(typeof d!=="number")return A.wQ(d)
d=$.ey=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.d3()
c=c<10}else c=!1
if(!c)break
$.yD=$.eF()
if(!$.z9()){d=$.V.b
if(d===$.V)A.h(A.a7(""))
d.kU(0.008333333333333333*($.cM().Q?1:20))
d=$.CC()
c=$.V.b
if(c===$.V)A.h(A.a7(""))
c=c.gad()
b=$.V.b
if(b===$.V)A.h(A.a7(""))
d=d.c1(c.a,b.gad().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){o=d[a]
B.a.l($.dd,"clock:"+o.a)}d=$.CD()
c=$.V.b
if(c===$.V)A.h(A.a7(""))
c=c.gad()
b=$.V.b
if(b===$.V)A.h(A.a7(""))
d=d.c1(c.a,b.gad().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){n=d[a]
B.a.l($.dd,"service:"+n.a+":"+n.b)}}A.HH()
A.HD()
d=$.aH.b
if(d===$.aH)A.h(A.a7(""))
c=$.V.b
if(c===$.V)A.h(A.a7(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.az(d,!1,e)
a0.$flags=3
a1=a0
B.a.M(d)
if(a1.length!==0){d=$.V.b
if(d===$.V)A.h(A.a7(""))
d.ns(a1)}A.HC()
A.HG()
A.HF()
A.HB(0.008333333333333333)
d=$.hr.b
if(d===$.hr)A.h(A.a7(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.cc.b
if(d===$.cc)A.h(A.a7(""))
m=d.a!==B.D
c=$.Y.b
if(c===$.Y)A.h(A.a7(""))
d.dG(0.008333333333333333,c)
if(m){d=$.cc.b
if(d===$.cc)A.h(A.a7(""))
d=d.e}else d=!1
if(d)A.BC(!0)
d=$.ey-0.008333333333333333
$.ey=d
c=p
if(typeof c!=="number")return c.a4()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.yS=A.Ao($.CF(),$.eF(),l)
k=$.bq
if(k!=null){d=k
c=Math.sin($.cs)
b=Math.cos($.cs)
a2=A.b(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aU(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.i7($.aw)
for(e=$.dd.length,a=0;a<$.dd.length;$.dd.length===e||(0,A.t)($.dd),++a){j=$.dd[a]
A.Gh(k,j)}B.a.M($.dd)
$.x.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.x.j().setAttribute("data-audio-muffle01",B.c.ae(k.gmT(),3))
e=$.x.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.x.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cJ.j().hy($.xD(),$.cs,$.fs)
e=$.aT
if(e!=null){d=$.cJ.j()
c=d.a
a3=new A.C(c.a,c.b,c.c)
c=d.b
a4=new A.C(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.zU(a3,a4,new A.C(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.xR(a5,b,d.a,c)
e.rx=new A.fD(a6,a7,a7.ac(0,a6),a3,a4,c,b,a5)}e=$.aT
if(e!=null)e.ij($.Y.j(),$.aw)
e=$.aT
if(e!=null)e.i6($.Y.j(),$.aw,$.xD(),$.bo.j().geL(),$.bo.j().glW(),$.yc.j().hm($.V.j().gad().a),A.Ip($.aw),$.bo.j().b)
if($.Bo!==$.cc.j().a){$.Bo=$.cc.j().a
$.yG=$.yG+1}e=$.aT
if(e!=null){if($.z9())d=0
else{d=s
if(typeof d!=="number")return d.o9()
d/=1000}c=$.yG
b=A.f(Math.max(0,$.V.j().b))
if(!isFinite(d)||d<0)A.h(A.al(d,"timeSeconds",null))
if(b<0)A.h(A.w("frame clock seeds must be non-negative",null))
e.e0=d
e.hg=c
e.hh=b}e=$.aT
if(e!=null){d=$.cc.j()
c=$.yF
b=A.Bz($.aw)
a8=d.a
a9=d.geH()
b0=a9>0?B.c.D(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.bJ
b3=$.eE()
b4=b3.a9("post_exposure")
b5=b3.a9("post_bloom")
b6=b3.a9("post_vignette")
b7=b3.a9("post_film_grain")
b8=b3.a9("post_dither")
b9=b3.a9("post_depth_of_field")
c0=b3.a9("post_color_grade")
c1=b3.a9("post_affine_warp")
c2=b3.a9("post_vertex_snap")
c3=B.c.aH(b3.a9("post_quantization_bits"))
c4=b3.a9("post_vhs_chroma")
c5=b3.a9("post_vhs_noise")
c6=b3.a9("shadow_ao_intensity")
c7=a8===B.a4?0.45:b4
b3=b3.er("shadow_ssdo_enable")?c6:0
c8=e.x1
c8=B.c.D(c8,0,1)
c9=e.dY
c9=B.c.D(c9,0,1)
if(d>=1)d0=a8===B.aK?b0:1
else d0=0
d0=Math.max(c0,d0)
if(d>=2)d=a8===B.bI?b0:1
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
e.to=new A.l3(c7,b5,b3,b9,b6,b7,c8,c9,b,b8,d0,d,d1,d2,d3,d4,d5,d6,d7,b2?b0:0,c)
e.x2=B.c.D(b,0,1)
e.kq()}$.fq.j().eK(A.A9($.V.j().ghI()))
i=$.aT
if(i!=null){h=i.gmt()
if(h!=null){$.x.j().setAttribute("data-renderer-frame-stats",h)
e=$.x.j()
d=i.gmr()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}$.x.j().setAttribute("data-renderer-rain-particles",""+i.y1)
$.x.j().setAttribute("data-renderer-rain-particles-requested",""+i.xr)
$.x.j().setAttribute("data-renderer-rain-particles-budget",""+i.y2)
$.x.j().setAttribute("data-renderer-rain-particles-capped",""+i.dU)
$.x.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+i.dS)
$.x.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+i.dT)}A.eB("running")
A.H7()
e=$.af.j()
e.as=e.Q=0
d=e.c
d.a1(0,"WheelUp")
d.a1(0,"WheelDown")
e.d.M(0)
e.f.M(0)
A.f(A.b(v.G.window).requestAnimationFrame(A.W(A.C6())))}catch(d8){g=A.ag(d8)
f=A.cL(d8)
A.wm(g,f)}},
Gh(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.hG("confirm")
$.bn.j().aP("interface confirmation")
break
case"ambient-winnow":a.cS("winnow",0.28)
$.bn.j().aP("wind moving through the house")
break
case"ambient-gate":a.cS("gate",0.22)
$.bn.j().aP("distant gate")
break
case"collapse":a.hG("collapse")
$.bn.j().aP("front door shudders and collapses")
break
case"clock:tick":A.mT(a,p,"tick")
break
case"clock:chime":A.mT(a,p,"chime")
break
case"clock:cuckoo":A.mT(a,p,"cuckoo")
break
case"clock:bell":A.mT(a,p,"bell")
break
default:if(B.b.S(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mT(a,q,s[2])}}}},
mT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.Bj,g=$.jt
if(h==null||g==null)return
s=h.mf(b)
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
break A}if(q!=null)$.bn.j().aP(q)
q=$.Y.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.h(A.j("sound room missing: "+o))
m=n.d.a4(0,s.d.ac(0,p))
l=$.mL
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.j("sound emitter "+s.a+" has no cue for "+c))
a.nm(q,m,s.e,o)
return}q=$.B4
$.B4=q+1
o=A.CX(B.ek,r,r+":"+q,m,A.FY(b,c),q,o)
q=$.aw
q=A.CT($.xD(),q)
t.gG.a(B.br)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.j("audio listener room missing: "+q))
j=l.hR(p,q,B.br)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.j("audio cue family missing: "+q))
k=J.aN(i)
k=k.h(i,B.d.R(A.Ht(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.hH(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
FY(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dj(a+":"+b),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a_.E>")),r=r.i("a_.E");s.m();){q=s.d
p=A.C2(p,q==null?r.a(q):q)}return p},
HE(a){var s=$.yq
if(s==null)return
s.textContent=""+B.c.aH(a>0?1/a:0)+" fps"},
HB(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.BH||$.bp!=null){$.n2().a=new A.k(0,0,0)
return}s=$.af.j()
r=s.cw("moveLeft")?-1:0
if(s.cw("moveRight"))++r
q=s.cw("moveForward")?1:0
if(s.cw("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).a4(0,s)
o=p.gt(0)>1?p.gaz():p
$.af.j().d9(b3)
n=$.af.j().Q
m=$.af.j().as
s=$.fw()
l=s.d?-1:1
k=s.e?-1:1
j=$.cs
i=$.af.j()
i=i.ay?i.x:0
h=$.fw()
g=h.d?-1:1
$.cs=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.fs
h=$.af.j()
l=h.ay?h.y:0
j=$.fw()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.fs=i
$.fs=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.k(i*Math.cos($.cs)+j*Math.sin($.cs),0,-i*Math.sin($.cs)+j*Math.cos($.cs)).gaz().ac(0,2)
j=$.n2()
if(!isFinite(b3)||b3<0)A.h(A.al(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.al(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a4(0,f.ag(0,l).ac(0,1-s))
j.a=s
d=$.jo.j().mU($.Y.j(),$.aw,$.eF(),s.ac(0,b3))
$.yJ=d.a
if($.cc.j().a!==B.bK&&$.cc.j().a!==B.a4)$.aw=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.CE()
$.yK=s.ix($.yK,$.eF().b,b3)
b=s.kV(b3,c)
s=$.eF()
l=$.yK
$.cJ.j().hy(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cs,$.fs)
s=$.V.j().z
a=new A.r2(s)
s=$.cJ.j()
l=$.Y.j()
a0=A.Io(a,s,$.aw,l,$.jt)
l=a0.c
$.AT.j().il(l)
a1=A.L(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.z_($.cJ.j(),$.Y.j(),$.aw)
break
case 1:a3=A.Cc($.cJ.j(),$.Y.j(),$.aw)
break
case 2:a4=A.Cd($.cJ.j(),$.Y.j(),$.aw)
break
case 3:l=$.cJ.j()
k=$.Y.j()
j=$.jt
a5=A.Cb(l,$.aw,k,j)
break
case 4:case 5:break}$.AS.j().nX($.fx().es($.V.j().gad().a,"status"),$.aw==="living-room")
l=$.af.j()
k=l.CW
if(k.bi(b2,l.d)||k.bi(b2,l.f)){l=$.V.j().gad()
k=a3==null
j=k?b1:a3.a
i=B.a.a3($.aH.j().h_(21),$.aH.j().gmJ())
if(l.a===21&&j==="front-door"&&i){s=$.cc.j()
$.Y.j()
s.iD(B.f3,A.ai(s.c,t.N))
B.a.l($.dd,"collapse")
A.hz("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bn.j().aP("mantle flame extinguished")}else if($.V.j().iA(1,1)){a2.d=!0
s=$.hr.j()
s.a=a2
s.b=2
$.bn.j().aP("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bn.j()
s.aP(a3.ax?"door opens":"door closes")
s=$.aT
if(s!=null)s.cX($.Y.j(),a3.b)
s=$.aT
if(s!=null)s.ea($.Y.j(),a3.a)
s=$.bq
if(s!=null)s.bF()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.d8(1)){a4.w=!1
$.bn.j().aP("shutter closes")}}else{a4.w=!0
$.bn.j().aP("shutter opens")}else if(s===B.cw){a6=a.eq()
s=A.z(a6)
l=t.E4
a7=A.bB(new A.G(a6,s.i("l(1)").a(new A.wy(a0)),s.i("G<1>")),l)
if(a7==null)a7=A.bB(a6,l)
if(a7!=null)$.bn.j().bU("noticed",a7.d)}else if(a5!=null){s=$.xC()
if(!a5.x)A.h(A.j("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.x.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.H2(a8)
s=$.bn.j()
s.bU("noticed",a9==null?"you inspect "+a8:a9)}}s=$.hr.j()
if(s.a!=null&&s.b>0){b0=$.hr.j().a
if(b0!=null&&A.z_($.cJ.j(),$.Y.j(),$.aw)!==b0){s=$.hr.j()
s.a=null
s.b=0}}A.He(b3,a0)},
He(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.eA
if(b9==null)return
s=A.b($.AU.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cu()
p.nW(c0)
o=$.CB()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hX(n,m,$.av.j().y)
o=$.eE()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.Y.j()
j=$.aw
h=k.e.h(0,j)
k=!$.av.j().y&&$.bp==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.V.j().gad()
b=$.bo.j().b
a=$.cM()
a0=a.y===B.cB
a1=h==null?null:h.a
if(a1==null)a1=$.aw
a=a.z?$.fx().es($.V.j().gad().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.M(a3)
a4=A.a6(A.b(v.G.window).devicePixelRatio)
a5=B.c.aA(r*a4)
a6=B.c.aA(q*a4)
a7=a2.a
if(A.f(a7.width)!==a5||A.f(a7.height)!==a6){a7.width=a5
a7.height=a6}a7=a2.b
a7===$&&A.p()
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
A.aU(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aU(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aU(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.ma(n,q,r)}a2.m9(q,r,new A.qS(j,i,g,f,e,d,p))
b0=r-80-24
a2.b_("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aS(b*60),0,1439)
b2=B.d.aa(b1,60)
b3=B.d.R(b1,60)
b4=a0?B.d.R(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.bz(B.d.q(b4),2,"0")+":"+B.b.bz(B.d.q(b3),2,"0")+b5,b0,42)
a7.restore()
a2.b_("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bt(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.b_("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bt(a,b6-28),b7,68)
a7.restore()}a2.m8(l,q,r)
a2.mb(q,r,o)
a7.restore();++b9.b
p=$.x.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ai(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
H2(a){var s,r,q,p,o=$.V.j().z.b,n=A.o(o).i("M<1,2>"),m=A.H(new A.M(o,n),n.i("n.E"))
B.a.U(m,new A.wf())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.fx().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
HH(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cM().Q)return
if($.av.j().y||$.bp!=null||$.aH.j().r!=null)return
s=$.V.j().gad()
for(r=$.aH.j().h_(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aH.b
if(m===$.aH)A.h(A.a7(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aH.b
if(r===$.aH)A.h(A.a7(""))
l=r.c3(n)
if(!(l instanceof A.lK))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.zK(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.n2().a=new A.k(0,0,0)
r=$.av.b
if(r===$.av)A.h(A.a7(""))
q=n.a
r.eC(q,k)
$.cu().bA(!0,B.bb,q,k)
A.yB()
A.BO(n)
return}},
HD(){var s,r,q,p,o,n,m=$.yh
if(m==null)return
s=$.V.j().gad()
for(r=m.c1(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
n=$.V.b
if(n===$.V)A.h(A.a7(""))
if(!n.kY(o))continue
n=$.x.b
if(n===$.x)A.h(A.a7(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
Hf(){var s,r,q=$.aH.j().r,p=q==null,o=p?null:q.gbj()
if(p||o==null)return
p=$.av.j()
s=q.a
r=s.a
p.eC(r,o)
$.cu().bA(!0,B.bb,r,o)
A.yB()
A.BO(s)
if(q.d!==B.a9)A.yC()
A.hz("restored visitor")},
BO(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().mu("stranger-17-eileen-case")
r=$.fx().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.az(q,!0,t.N):B.m
p=A.bB(r,t.N)
if(s==null||p==null)return
$.bn.j().bU("inside the case",p+" \u201c"+s.d+"\u201d")},
HC(){var s,r,q,p,o,n
if(!$.cM().Q)return
s=$.V.j().gad()
r=$.mG.j().md(s.a,s.b)
if(r.length===0)return
q=B.a.gW(r)
$.mG.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bn.j().bU(o,q.e)
n=A.HM(p)
if(n!=null)B.a.l($.dd,"ambient-"+n)},
HG(){var s,r,q,p,o=$.V.j().gad()
if(o.b<20)return
s=o.a
if(!$.wx.l(0,s))return
r=$.fx().f
r===$&&A.p()
q=r.h(0,B.d.q(s))
r=t.j.b(q)?A.az(q,!0,t.N):B.m
p=A.Il(r,$.V.j().b,s)
if(p!=null)$.bn.j().bU("noticed",p)},
BC(a){var s,r,q,p,o
if($.yo!=null)return
s=$.V.j().gad()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.o(q).i("am<2>")
o=A.Du(new A.oD(s.a,1-r,new A.G(new A.am(q,p),p.i("l(n.E)").a(new A.wo()),p.i("G<n.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.Bx(o)
A.mV("ending recorded")},
Bx(a){var s,r,q
$.yo=a
$.BH=!0
$.n2().a=new A.k(0,0,0)
A.jz($.jk.j())
s=a.a
r=$.fx().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.az(q,!0,t.N):B.m
r=A.H(r,t.N)
B.a.I(r,A.E6($.V.j().z,s))
$.jk.j().ip(a,r)},
G5(a){var s,r,q,p
A:{if("open"===a){s=B.aA
break A}if("chain"===a){s=B.cp
break A}if("through-door"===a){s=B.cq
break A}if("letterbox"===a){s=B.cr
break A}s=B.ad
break A}r=$.aH.j().lh(s)
if(s===B.aA){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aT
if(p!=null)p.cX($.Y.j(),q.b)
p=$.aT
if(p!=null)p.ea($.Y.j(),q.a)
p=$.bq
if(p!=null)p.bF()}}if(!(r instanceof A.lI)||s===B.ad){A.vL()
return}if(r.a.gbj()==null){A.yl()
A.vL()
return}A.yC()},
Gc(){var s=$.aH.j().kW()
if(!(s instanceof A.iJ)||s.b){A.yl()
A.vL()
return}if(s.a.gbj()==null){A.yl()
A.vL()
return}A.yC()},
yC(){var s,r,q,p,o,n,m,l,k,j=$.aH.j().r,i=j==null,h=i?null:j.gbj()
if(i||h==null)return
s=$.aH.j().gc7()
if(s==null){$.av.j().io(h)
$.cu().bA(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.av.j().eD(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.av.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aB(k.a,k.b))}m.iq(l,r)
o=$.cu()
m=j.a.a
o.bA(!0,i?q:B.m,m,h)
if(!i){i=A.z(p)
k=A.bB(new A.G(p,i.i("l(1)").a(new A.wk(r)),i.i("G<1>")),t.Y)
if(k!=null){i=$.av.j()
q=k.c
i.eE(h,q)
o.bA(!0,B.m,m,h+"\n\n"+q)}}}A.BN()
A.yB()},
yB(){var s,r=$.aH.j().r,q=r==null,p=q?null:r.gbj(),o=$.bq
if(q||p==null||o==null)return
q=r.a
s="vo-"+q.a+"-day"+B.b.bz(B.d.q(q.b),2,"0")+"-"+r.b.b+"-"+(r.f+1)
if($.yw===s)return
$.yw=s
o.cS(s,1)},
G6(a){var s,r,q,p,o,n=$.aH.j().li(a)
if(!(n instanceof A.lJ))return
s=n.c
if(!$.V.j().kZ(n.b,s))return
r=s.c
s=$.av.j()
q=n.a
p=q.gbj()
s.eE(p==null?"":p,r)
o=q.gbj()
if(o==null)o=""
$.cu().bA(!0,B.m,q.a.a,o+"\n\n"+r)
A.BN()
A.mV("saved after visitor answer")},
vL(){$.av.j().ht()
$.cu().M(0)
$.yw=null
$.af.j().cY($.x.j())},
BN(){var s,r,q,p,o=$.av.j(),n=A.b(v.G.document),m=A.c([],t.wt)
for(s=$.mI.j().eu(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.aB(p.a,B.a.ga0(p.c).q(0)))}o.im(n,m)},
G7(a){var s,r,q,p=$.aH.j().lj(a,!0,$.mI.j())
if(p==null)return
s=$.mI.j().lU(p,B.j3)
r=$.av.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bN("",!0,q)},
yl(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aT
if(s!=null)s.cX($.Y.j(),r.b)
s=$.aT
if(s!=null)s.ea($.Y.j(),r.a)
s=$.bq
if(s!=null)s.bF()}},
HF(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cc.b
if(k===$.cc)A.h(A.a7(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
Ip(a){var s,r,q,p,o,n,m,l=$.Y.j().e.h(0,a)
if(l==null||$.bo.j().geL()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.u){n=$.bo.b
if(n===$.bo)A.h(A.a7(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.p){n=$.bo.b
if(n===$.bo)A.h(A.a7(""))
n=n.b>12}else n=!1
if(!n){if(o===B.ae){n=$.bo.b
if(n===$.bo)A.h(A.a7(""))
n=n.b<9}else n=!1
if(!n)if(o===B.af){o=$.bo.b
if(o===$.bo)A.h(A.a7(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
Bz(a){var s,r=$.Y.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.jT
if(q.length===0)return 0.12
s=A.z(q)
return B.c.D(new A.G(q,s.i("l(1)").a(new A.wl()),s.i("G<1>")).gt(0)/q.length,0.12,1)},
hk:function hk(a,b){this.a=a
this.b=b},
mk:function mk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
_.p2=a7
_.p4=_.p3=null
_.R8=a8
_.rx=_.RG=null
_.ry=a9
_.to=b0
_.x1=0
_.x2=1
_.dT=_.dS=_.y2=_.y1=_.xr=0
_.dU=!1
_.dW=_.dV=null
_.he=7
_.dY=_.hf=_.dX=0
_.dZ=null
_.hi=_.ml=_.hh=_.hg=_.e0=_.e_=0
_.aC=!1
_.cK=null
_.c9=_.c8=0
_.cb=_.ca=null
_.mm=$
_.hj=null
_.hk=0},
uW:function uW(a){this.a=a},
uZ:function uZ(a,b){this.a=a
this.b=b},
v_:function v_(a){this.a=a},
uQ:function uQ(){},
uX:function uX(){},
uY:function uY(){},
v0:function v0(a){this.a=a},
v1:function v1(a){this.a=a},
uV:function uV(a,b,c){this.a=a
this.b=b
this.c=c},
uR:function uR(){},
uS:function uS(){},
uT:function uT(){},
uU:function uU(){},
uO:function uO(){},
uP:function uP(){},
uK:function uK(){},
uL:function uL(){},
uM:function uM(){},
uN:function uN(){},
mj:function mj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uo:function uo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vG:function vG(){},
vH:function vH(a){this.a=a},
vI:function vI(a){this.a=a},
vJ:function vJ(a){this.a=a},
vx:function vx(a){this.a=a},
vy:function vy(){},
vz:function vz(){},
vA:function vA(){},
vB:function vB(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vn:function vn(){},
vo:function vo(){},
vp:function vp(){},
vq:function vq(){},
wa:function wa(a,b){this.a=a
this.b=b},
w8:function w8(a){this.a=a},
w9:function w9(a){this.a=a},
wV:function wV(a,b){this.a=a
this.b=b},
wW:function wW(){},
wX:function wX(){},
x7:function x7(){},
xg:function xg(){},
xh:function xh(){},
xi:function xi(){},
xj:function xj(){},
xk:function xk(){},
xl:function xl(){},
xm:function xm(){},
wY:function wY(){},
wZ:function wZ(){},
x_:function x_(){},
x0:function x0(){},
x1:function x1(){},
x2:function x2(){},
x3:function x3(){},
x4:function x4(){},
x5:function x5(){},
x6:function x6(){},
x8:function x8(){},
x9:function x9(){},
xa:function xa(){},
xb:function xb(){},
xc:function xc(){},
xd:function xd(){},
xe:function xe(){},
xf:function xf(){},
wb:function wb(){},
wc:function wc(){},
wi:function wi(a){this.a=a},
ws:function ws(a){this.a=a},
wy:function wy(a){this.a=a},
wf:function wf(){},
wo:function wo(){},
wk:function wk(a){this.a=a},
wl:function wl(){},
Cf(a){return v.mangledGlobalNames[a]},
zK(a,b,c,d,e,f){var s=a[b]()
return s},
pV(a,b,c){var s=null
return c.a(A.zK(a,b,s,s,s,s))},
zX(a,b){var s,r,q,p=A.H(B.ck.bu(B.f.a8(a.hP(!1),null)),t.S),o=A.o(b).i("aa<1>"),n=A.H(new A.aa(b,o),o.i("n.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.t)(n),++s){r=n[s]
B.a.I(p,B.ck.bu(r))
B.a.l(p,0)
q=b.h(0,r)
q.toString
B.a.I(p,q)}return A.EF(p)},
I3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a.c!=null)return a
s=a.a
r=s.b
q=t.S
p=A.m(t.N,q)
o=A.c([],t.n)
n=a.b
m=n.length
l=B.d.bB(m,r)
k=A.cY(l,0,!1,q)
for(q=r*4,j=0;j<l;++j){i=j*r
h=B.P.T(J.CM(B.r.gdH(n),n.byteOffset+i*4,q),",")
g=p.h(0,h)
if(g!=null){B.a.k(k,j,g)
continue}f=p.a
p.k(0,h,f)
B.a.k(k,j,f)
for(e=0;e<r;++e){d=i+e
if(!(d<m))return A.d(n,d)
B.a.l(o,n[d])}}c=B.d.bB(o.length,r)>65536?new Uint32Array(A.a0(k)):new Uint16Array(A.a0(k))
return new A.bP(s,new Float32Array(A.a0(o)),c,a.d)},
xr(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.a(A.al(b.gmD(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.a6()
o=q*16
n=o+16
B.r.d6(s,o,n,p.a)
if(l)B.r.d6(r,o,n,p.e6().a)}m=a.a
A.v(m,"uInstanceModels",new A.y(B.dY,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.y(B.dY,r))
A.v(m,"uUseInstances",B.dZ)},
Dh(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Dg(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
C2(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
HM(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
ch(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bb(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
I2(a){var s,r,q,p,o,n,m,l=B.f.an(a,null),k=t.f
if(!k.b(l))throw A.a(B.hM)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.k_[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aZ(m,s,r))
else throw A.a(A.O('text.json section "'+n+'" must be an object',null,null))}return p},
Il(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbb(a)
s=new A.es()
s.bW((b^274953^c)>>>0)
r=s.aV(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.xK.prototype={}
J.kC.prototype={
a7(a,b){return a===b},
gP(a){return A.ip(a)},
q(a){return"Instance of '"+A.l7(a)+"'"},
ga5(a){return A.de(A.yt(this))}}
J.kE.prototype={
q(a){return String(a)},
gP(a){return a?519018:218159},
ga5(a){return A.de(t.y)},
$iaj:1,
$il:1}
J.i2.prototype={
a7(a,b){return null==b},
q(a){return"null"},
gP(a){return 0},
$iaj:1,
$iat:1}
J.i4.prototype={$iah:1}
J.eg.prototype={
gP(a){return 0},
ga5(a){return B.n3},
q(a){return String(a)}}
J.l0.prototype={}
J.fb.prototype={}
J.du.prototype={
q(a){var s=a[$.Cj()]
if(s==null)s=a[$.xz()]
if(s==null)return this.iG(a)
return"JavaScript function for "+J.bY(s)},
$ieQ:1}
J.fW.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.fX.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.r.prototype={
cI(a,b){return new A.b4(a,A.z(a).i("@<1>").K(b).i("b4<1,2>"))},
l(a,b){A.z(a).c.a(b)
a.$flags&1&&A.b2(a,29)
a.push(b)},
nv(a,b){var s
a.$flags&1&&A.b2(a,"removeAt",1)
s=a.length
if(b>=s)throw A.a(A.A6(b,null))
return a.splice(b,1)[0]},
a1(a,b){var s
a.$flags&1&&A.b2(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.z(a).i("n<1>").a(b)
a.$flags&1&&A.b2(a,"addAll",2)
if(Array.isArray(b)){this.j1(a,b)
return}for(s=J.P(b);s.m();)a.push(s.gn())},
j1(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.ax(a))
for(r=0;r<s;++r)a.push(b[r])},
M(a){a.$flags&1&&A.b2(a,"clear","clear")
a.length=0},
bn(a,b,c){var s=A.z(a)
return new A.F(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("F<1,2>"))},
T(a,b){var s,r=A.cY(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.u(a[s]))
return r.join(b)},
bl(a,b,c,d){var s,r,q
d.a(b)
A.z(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.ax(a))}return r},
b1(a,b,c){var s,r,q,p=A.z(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.a(A.ax(a))}if(c!=null)return c.$0()
throw A.a(A.cB())},
ao(a,b){return this.b1(a,b,null)},
a2(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aI(a,b,c){var s=a.length
if(b>s)throw A.a(A.b_(b,0,s,"start",null))
if(c<b||c>s)throw A.a(A.b_(c,b,s,"end",null))
if(b===c)return A.c([],A.z(a))
return A.c(a.slice(b,c),A.z(a))},
gW(a){if(a.length>0)return a[0]
throw A.a(A.cB())},
ga0(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.cB())},
gbb(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.a(A.cB())
throw A.a(A.zG())},
L(a,b){var s,r
A.z(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.ax(a))}return!1},
a3(a,b){var s,r
A.z(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.ax(a))}return!0},
U(a,b){var s,r,q,p,o,n=A.z(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.b2(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.GF()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.i2()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hD(b,2))
if(p>0)this.ko(a,p)},
X(a){return this.U(a,null)},
ko(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d7(a,b){var s,r,q,p
a.$flags&2&&A.b2(a,"shuffle")
s=a.length
while(s>1){r=b.aV(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bx(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a8(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gZ(a){return a.length!==0},
q(a){return A.xI(a,"[","]")},
gu(a){return new J.eI(a,a.length,A.z(a).i("eI<1>"))},
gP(a){return A.ip(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.b2(a,"set length","change the length of")
if(b<0)throw A.a(A.b_(b,0,null,"newLength",null))
if(b>a.length)A.z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.wK(a,b))
return a[b]},
k(a,b,c){A.z(a).c.a(c)
a.$flags&2&&A.b2(a)
if(!(b>=0&&b<a.length))throw A.a(A.wK(a,b))
a[b]=c},
en(a,b){return new A.dJ(a,b.i("dJ<0>"))},
e2(a,b){var s
A.z(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga5(a){return A.de(A.z(a))},
$iS:1,
$in:1,
$iK:1}
J.kD.prototype={
nV(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.l7(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pW.prototype={}
J.eI.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iab:1}
J.fV.prototype={
G(a,b){var s
A.a6(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcd(b)
if(this.gcd(a)===s)return 0
if(this.gcd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcd(a){return a===0?1/a<0:a<0},
aA(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.bk(""+a+".toInt()"))},
h4(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.bk(""+a+".ceil()"))},
aS(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.a(A.bk(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.bk(""+a+".round()"))},
D(a,b,c){if(this.G(b,c)>0)throw A.a(A.wD(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
ae(a,b){var s
if(b>20)throw A.a(A.b_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcd(a))return"-"+s
return s},
ej(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.b_(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.h(A.bk("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.ac("0",o)},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
R(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bB(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fL(a,b)},
aa(a,b){return(a|0)===a?a/b|0:this.fL(a,b)},
fL(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.bk("Result of truncating division is "+A.u(s)+": "+A.u(a)+" ~/ "+b))},
dE(a,b){var s
if(a>0)s=this.fJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
kz(a,b){if(0>b)throw A.a(A.wD(b))
return this.fJ(a,b)},
fJ(a,b){return b>31?0:a>>>b},
ir(a,b){if(b<0)throw A.a(A.wD(b))
return this.kA(a,b)},
kA(a,b){if(b>31)return 0
return a>>>b},
ga5(a){return A.de(t.o)},
$ibf:1,
$iD:1,
$ibr:1}
J.i1.prototype={
ga5(a){return A.de(t.S)},
$iaj:1,
$ii:1}
J.kF.prototype={
ga5(a){return A.de(t.i)},
$iaj:1}
J.ef.prototype={
fZ(a,b){return new A.mw(b,a,0)},
bk(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aQ(a,r-s)},
iB(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.i3){s=b.e
s=!(s==null?b.e=b.jl():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.ju(a,b)}},
bR(a,b,c,d){var s=A.f2(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
ju(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.CL(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.geI()
n=p.gdR()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.H(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aQ(a,r))
return m},
ak(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ak(a,b,0)},
H(a,b,c){return a.substring(b,A.f2(b,c,a.length))},
aQ(a,b){return this.H(a,b,null)},
b7(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.DW(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.DX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ac(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.eY)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bz(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ac(c,s)+a},
cL(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bx(a,b){return this.cL(a,b,0)},
p(a,b){return A.Iv(a,b,0)},
G(a,b){var s
A.q(b)
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
ga5(a){return A.de(t.N)},
gt(a){return a.length},
$iaj:1,
$ibf:1,
$iqW:1,
$ie:1}
A.ep.prototype={
gu(a){return new A.hL(J.P(this.gb8()),A.o(this).i("hL<1,2>"))},
gt(a){return J.cN(this.gb8())},
gO(a){return J.jI(this.gb8())},
gZ(a){return J.CP(this.gb8())},
a2(a,b){return A.o(this).y[1].a(J.n3(this.gb8(),b))},
gW(a){return A.o(this).y[1].a(J.zh(this.gb8()))},
p(a,b){return J.zg(this.gb8(),b)},
q(a){return J.bY(this.gb8())}}
A.hL.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.eM.prototype={
gb8(){return this.a}}
A.iR.prototype={$iS:1}
A.iP.prototype={
h(a,b){return this.$ti.y[1].a(J.aV(this.a,b))},
k(a,b,c){var s=this.$ti
J.bc(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.CQ(this.a,b)},
l(a,b){var s=this.$ti
J.eG(this.a,s.c.a(s.y[1].a(b)))},
$iS:1,
$iK:1}
A.b4.prototype={
cI(a,b){return new A.b4(this.a,this.$ti.i("@<1>").K(b).i("b4<1,2>"))},
gb8(){return this.a}}
A.fY.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.dj.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.rM.prototype={
gE(){return 0}}
A.S.prototype={}
A.X.prototype={
gu(a){var s=this
return new A.an(s,s.gt(s),A.o(s).i("an<X.E>"))},
gO(a){return this.gt(this)===0},
gW(a){if(this.gt(this)===0)throw A.a(A.cB())
return this.a2(0,0)},
p(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a8(r.a2(0,s),b))return!0
if(q!==r.gt(r))throw A.a(A.ax(r))}return!1},
a3(a,b){var s,r,q=this
A.o(q).i("l(X.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a2(0,r)))return!1
if(s!==q.gt(q))throw A.a(A.ax(q))}return!0},
L(a,b){var s,r,q=this
A.o(q).i("l(X.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a2(0,r)))return!0
if(s!==q.gt(q))throw A.a(A.ax(q))}return!1},
T(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.u(p.a2(0,0))
if(o!==p.gt(p))throw A.a(A.ax(p))
for(r=s,q=1;q<o;++q){r=r+b+A.u(p.a2(0,q))
if(o!==p.gt(p))throw A.a(A.ax(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.u(p.a2(0,q))
if(o!==p.gt(p))throw A.a(A.ax(p))}return r.charCodeAt(0)==0?r:r}},
mN(a){return this.T(0,"")},
d1(a,b){return this.iF(0,A.o(this).i("l(X.E)").a(b))},
bn(a,b,c){var s=A.o(this)
return new A.F(this,s.K(c).i("1(X.E)").a(b),s.i("@<X.E>").K(c).i("F<1,2>"))},
bT(a,b){var s=A.o(this).i("X.E")
if(b)s=A.H(this,s)
else{s=A.H(this,s)
s.$flags=1
s=s}return s},
bS(a){return this.bT(0,!0)},
b6(a){var s,r=this,q=A.xN(A.o(r).i("X.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a2(0,s))
return q}}
A.iF.prototype={
gjz(){var s=J.cN(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkB(){var s=J.cN(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cN(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a2(a,b){var s=this,r=s.gkB()+b
if(b<0||r>=s.gjz())throw A.a(A.pM(b,s.gt(0),s,"index"))
return J.n3(s.a,r)},
bT(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aN(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.zI(0,n):J.zH(0,n)}r=A.cY(s,m.a2(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a2(n,o+q))
if(m.gt(n)<l)throw A.a(A.ax(p))}return r},
bS(a){return this.bT(0,!0)}}
A.an.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aN(q),o=p.gt(q)
if(r.b!==o)throw A.a(A.ax(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a2(q,s);++r.c
return!0},
$iab:1}
A.cD.prototype={
gu(a){return new A.i8(J.P(this.a),this.b,A.o(this).i("i8<1,2>"))},
gt(a){return J.cN(this.a)},
gO(a){return J.jI(this.a)},
gW(a){return this.b.$1(J.zh(this.a))},
a2(a,b){return this.b.$1(J.n3(this.a,b))}}
A.dk.prototype={$iS:1}
A.i8.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.F.prototype={
gt(a){return J.cN(this.a)},
a2(a,b){return this.b.$1(J.n3(this.a,b))}}
A.G.prototype={
gu(a){return new A.U(J.P(this.a),this.b,this.$ti.i("U<1>"))}}
A.U.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hU.prototype={
gu(a){return new A.hV(J.P(this.a),this.b,B.eQ,this.$ti.i("hV<1,2>"))}}
A.hV.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.P(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iab:1}
A.hS.prototype={
m(){return!1},
gn(){throw A.a(A.cB())},
$iab:1}
A.dJ.prototype={
gu(a){return new A.iL(J.P(this.a),this.$ti.i("iL<1>"))}}
A.iL.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.ay.prototype={
st(a,b){throw A.a(A.bk("Cannot change the length of a fixed-length list"))},
l(a,b){A.cf(a).i("ay.E").a(b)
throw A.a(A.bk("Cannot add to a fixed-length list"))}}
A.el.prototype={
k(a,b,c){A.o(this).i("el.E").a(c)
throw A.a(A.bk("Cannot modify an unmodifiable list"))},
st(a,b){throw A.a(A.bk("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("el.E").a(b)
throw A.a(A.bk("Cannot add to an unmodifiable list"))}}
A.hh.prototype={}
A.bF.prototype={
gt(a){return J.cN(this.a)},
a2(a,b){var s=this.a,r=J.aN(s)
return r.a2(s,r.gt(s)-1-b)}}
A.ji.prototype={}
A.aB.prototype={$r:"+(1,2)",$s:1}
A.fo.prototype={$r:"+height,width(1,2)",$s:2}
A.j2.prototype={$r:"+influence,light(1,2)",$s:3}
A.aC.prototype={$r:"+(1,2,3)",$s:4}
A.bb.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.j3.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.j4.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:7}
A.hO.prototype={}
A.fH.prototype={
gO(a){return this.gt(this)===0},
gZ(a){return this.gt(this)!==0},
q(a){return A.xP(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.D9()},
gJ(){return new A.bX(this.mj(),A.o(this).i("bX<N<1,2>>"))},
mj(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gY(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("N<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.N(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bo(a,b,c,d){var s=A.m(c,d)
this.aD(0,new A.od(this,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),s))
return s},
$iT:1}
A.od.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a2.prototype={
gt(a){return this.b.length},
gfj(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
N(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.N(b))return null
return this.b[this.a[b]]},
aD(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfj()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gY(){return new A.fk(this.gfj(),this.$ti.i("fk<1>"))},
gaf(){return new A.fk(this.b,this.$ti.i("fk<2>"))}}
A.fk.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gZ(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dL(s,s.length,this.$ti.i("dL<1>"))}}
A.dL.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cT.prototype={
bf(){var s=this,r=s.$map
if(r==null){r=new A.eV(s.$ti.i("eV<1,2>"))
A.BX(s.a,r)
s.$map=r}return r},
N(a){return this.bf().N(a)},
h(a,b){return this.bf().h(0,b)},
aD(a,b){this.$ti.i("~(1,2)").a(b)
this.bf().aD(0,b)},
gY(){var s=this.bf()
return new A.aa(s,A.o(s).i("aa<1>"))},
gaf(){var s=this.bf()
return new A.am(s,A.o(s).i("am<2>"))},
gt(a){return this.bf().a}}
A.fI.prototype={
l(a,b){A.o(this).c.a(b)
A.Da()}}
A.aY.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gZ(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dL(s,s.length,r.$ti.i("dL<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b6(a){return A.eW(this,this.$ti.c)}}
A.fS.prototype={
gt(a){return this.a.length},
gO(a){return this.a.length===0},
gZ(a){return this.a.length!==0},
gu(a){var s=this.a
return new A.dL(s,s.length,this.$ti.i("dL<1>"))},
bf(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.eV(o.$ti.i("eV<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
n.k(0,p,p)}o.$map=n}return n},
p(a,b){return this.bf().N(b)},
b6(a){return A.eW(this,this.$ti.c)}}
A.ri.prototype={
$0(){return B.c.aS(1000*this.a.now())},
$S:31}
A.iw.prototype={}
A.tQ.prototype={
b2(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ih.prototype={
q(a){return"Null check operator used on a null value"}}
A.kG.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lB.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qP.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hT.prototype={}
A.j6.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id4:1}
A.e6.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Cg(r==null?"unknown":r)+"'"},
ga5(a){var s=A.yV(this)
return A.de(s==null?A.cf(this):s)},
$ieQ:1,
go8(){return this},
$C:"$1",
$R:1,
$D:null}
A.k_.prototype={$C:"$0",$R:0}
A.k0.prototype={$C:"$2",$R:2}
A.ly.prototype={}
A.lu.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Cg(s)+"'"}}
A.fA.prototype={
a7(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fA))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.n1(this.a)^A.ip(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.l7(this.a)+"'")}}
A.lh.prototype={
q(a){return"RuntimeError: "+this.a}}
A.cl.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gZ(a){return this.a!==0},
gY(){return new A.aa(this,A.o(this).i("aa<1>"))},
gaf(){return new A.am(this,A.o(this).i("am<2>"))},
gJ(){return new A.M(this,A.o(this).i("M<1,2>"))},
N(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mE(a)},
mE(a){var s=this.d
if(s==null)return!1
return this.cc(this.fg(s,a),a)>=0},
I(a,b){A.o(this).i("T<1,2>").a(b).aD(0,new A.q4(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mF(b)},
mF(a){var s,r,q=this.d
if(q==null)return null
s=this.fg(q,a)
r=this.cc(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eP(s==null?q.b=q.dA():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eP(r==null?q.c=q.dA():r,b,c)}else q.mH(b,c)},
mH(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dA()
r=o.cM(a)
q=s[r]
if(q==null)s[r]=[o.dB(a,b)]
else{p=o.cc(q,a)
if(p>=0)q[p].b=b
else q.push(o.dB(a,b))}},
cV(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.N(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a1(a,b){var s=this
if(typeof b=="string")return s.eM(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.eM(s.c,b)
else return s.mG(b)},
mG(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cM(a)
r=n[s]
q=o.cc(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eN(p)
if(r.length===0)delete n[s]
return p.b},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.da()}},
aD(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.ax(q))
s=s.c}},
eP(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dB(b,c)
else s.b=c},
eM(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eN(s)
delete a[b]
return s.b},
da(){this.r=this.r+1&1073741823},
dB(a,b){var s=this,r=A.o(s),q=new A.qe(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.da()
return q},
eN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.da()},
cM(a){return J.aE(a)&1073741823},
fg(a,b){return a[this.cM(b)]},
cc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
q(a){return A.xP(this)},
dA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ixM:1}
A.q4.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.qe.prototype={}
A.aa.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bO(s,s.r,s.e,this.$ti.i("bO<1>"))},
p(a,b){return this.a.N(b)}}
A.bO.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ax(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.am.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ac(s,s.r,s.e,this.$ti.i("ac<1>"))}}
A.ac.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ax(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.M.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cC(s,s.r,s.e,this.$ti.i("cC<1,2>"))}}
A.cC.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ax(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.N(s.a,s.b,r.$ti.i("N<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.eV.prototype={
cM(a){return A.HX(a)&1073741823},
cc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.wR.prototype={
$1(a){return this.a(a)},
$S:13}
A.wS.prototype={
$2(a,b){return this.a(a,b)},
$S:86}
A.wT.prototype={
$1(a){return this.a(A.q(a))},
$S:32}
A.bK.prototype={
ga5(a){return A.de(this.fh())},
fh(){return A.I8(this.$r,this.ds())},
q(a){return this.fR(!1)},
fR(a){var s,r,q,p,o,n=this.jD(),m=this.ds(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.A3(o):l+A.u(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jD(){var s,r=this.$s
while($.v2.length<=r)B.a.l($.v2,null)
s=$.v2[r]
if(s==null){s=this.jk()
B.a.k($.v2,r,s)}return s},
jk(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xJ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.et.prototype={
ds(){return[this.a,this.b]},
a7(a,b){if(b==null)return!1
return b instanceof A.et&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gP(a){return A.d_(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.dM.prototype={
ds(){return[this.a,this.b,this.c]},
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.dM&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gP(a){var s=this
return A.d_(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.i3.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjV(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.zM(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
jl(){var s,r=this.a
if(!B.b.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fZ(a,b){return new A.lV(this,b,0)},
jC(a,b){var s,r=this.gjV()
if(r==null)r=A.fr(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mf(s)},
$iqW:1,
$iEq:1}
A.mf.prototype={
geI(){return this.b.index},
gdR(){var s=this.b
return s.index+s[0].length},
$ih1:1,
$iiq:1}
A.lV.prototype={
gu(a){return new A.lW(this.a,this.b,this.c)}}
A.lW.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.jC(l,s)
if(p!=null){m.d=p
o=p.gdR()
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
$iab:1}
A.iE.prototype={
gdR(){return this.a+this.c.length},
$ih1:1,
geI(){return this.a}}
A.mw.prototype={
gu(a){return new A.mx(this.a,this.b,this.c)},
gW(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.iE(r,s)
throw A.a(A.cB())}}
A.mx.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.iE(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.up.prototype={
j(){var s=this.b
if(s===this)throw A.a(A.a7(""))
return s}}
A.eh.prototype={
ga5(a){return B.mX},
h1(a,b,c){A.vl(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
h0(a,b,c){A.vl(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iaj:1,
$ieh:1}
A.h3.prototype={$ih3:1}
A.ie.prototype={
gdH(a){if(((a.$flags|0)&2)!==0)return new A.v9(a.buffer)
else return a.buffer},
jO(a,b,c,d){var s=A.b_(b,0,c,d,null)
throw A.a(s)},
eW(a,b,c,d){if(b>>>0!==b||b>c)this.jO(a,b,c,d)}}
A.v9.prototype={
h1(a,b,c){var s=A.zZ(this.a,b,c)
s.$flags=3
return s},
h0(a,b,c){var s=A.E8(this.a,b,c)
s.$flags=3
return s}}
A.kQ.prototype={
ga5(a){return B.mY},
$iaj:1}
A.bg.prototype={
gt(a){return a.length},
fG(a,b,c,d,e){var s,r,q=a.length
this.eW(a,b,q,"start")
this.eW(a,c,q,"end")
if(b>c)throw A.a(A.b_(b,0,c,null,null))
s=c-b
if(e<0)throw A.a(A.w(e,null))
r=d.length
if(r-e<s)throw A.a(A.j("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic_:1}
A.ic.prototype={
h(a,b){A.dR(b,a,a.length)
return a[b]},
k(a,b,c){A.b7(c)
a.$flags&2&&A.b2(a)
A.dR(b,a,a.length)
a[b]=c},
d6(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.b2(a,5)
this.fG(a,b,c,d,0)
return},
$iS:1,
$in:1,
$iK:1}
A.id.prototype={
k(a,b,c){A.f(c)
a.$flags&2&&A.b2(a)
A.dR(b,a,a.length)
a[b]=c},
ig(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.b2(a,5)
this.fG(a,b,c,d,e)
return},
$iS:1,
$in:1,
$iK:1}
A.ib.prototype={
ga5(a){return B.mZ},
aI(a,b,c){return new Float32Array(a.subarray(b,A.B8(b,c,a.length)))},
$iaj:1,
$ioN:1}
A.kR.prototype={
ga5(a){return B.n_},
$iaj:1}
A.kS.prototype={
ga5(a){return B.n0},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1}
A.kT.prototype={
ga5(a){return B.n1},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1}
A.kU.prototype={
ga5(a){return B.n2},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1}
A.kV.prototype={
ga5(a){return B.n5},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1,
$itS:1}
A.kW.prototype={
ga5(a){return B.n6},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1,
$itT:1}
A.eZ.prototype={
ga5(a){return B.n7},
gt(a){return a.length},
h(a,b){A.dR(b,a,a.length)
return a[b]},
$iaj:1,
$ieZ:1}
A.ig.prototype={
ga5(a){return B.n8},
gt(a){return a.length},
h(a,b){A.dR(b,a,a.length)
return a[b]},
aI(a,b,c){return new Uint8Array(a.subarray(b,A.B8(b,c,a.length)))},
$iaj:1,
$ibU:1}
A.iY.prototype={}
A.iZ.prototype={}
A.j_.prototype={}
A.j0.prototype={}
A.cG.prototype={
i(a){return A.ja(v.typeUniverse,this,a)},
K(a){return A.AJ(v.typeUniverse,this,a)}}
A.m8.prototype={}
A.mA.prototype={
q(a){return A.bL(this.a,null)}}
A.m6.prototype={
q(a){return this.a}}
A.hn.prototype={$idG:1}
A.ul.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.uk.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:80}
A.um.prototype={
$0(){this.a.$0()},
$S:14}
A.un.prototype={
$0(){this.a.$0()},
$S:14}
A.v5.prototype={
j_(a,b){if(self.setTimeout!=null)self.setTimeout(A.hD(new A.v6(this,b),0),a)
else throw A.a(A.bk("`setTimeout()` not found."))}}
A.v6.prototype={
$0(){this.b.$0()},
$S:0}
A.lX.prototype={
dI(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.de(a)
else{s=r.a
if(q.i("aP<1>").b(a))s.eU(a)
else s.cu(a)}},
dJ(a,b){var s=this.a
if(this.b)s.br(new A.bd(a,b))
else s.cs(new A.bd(a,b))}}
A.vi.prototype={
$1(a){return this.a.$2(0,a)},
$S:21}
A.vj.prototype={
$2(a,b){this.a.$2(1,new A.hT(a,t.l.a(b)))},
$S:166}
A.wC.prototype={
$2(a,b){this.a(A.f(a),b)},
$S:66}
A.cb.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
ks(a,b){var s,r,q
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
o.d=null}q=o.ks(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.AD
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
o.a=A.AD
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.j("sync*"))}return!1},
ob(a){var s,r,q=this
if(a instanceof A.bX){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.P(a)
return 2}},
$iab:1}
A.bX.prototype={
gu(a){return new A.cb(this.a(),this.$ti.i("cb<1>"))}}
A.bd.prototype={
q(a){return A.u(this.a)},
$iar:1,
gbV(){return this.b}}
A.oU.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.f1(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.cL(p)
l=r
o=q
n=A.yu(l,o)
l=new A.bd(l,o)
m.b.br(l)
return}m.b.f1(s)}},
$S:0}
A.oX.prototype={
$2(a,b){var s,r,q=this
A.fr(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.br(new A.bd(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.br(new A.bd(r,s))}},
$S:68}
A.oW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bc(r,k.b,a)
if(J.a8(s,0)){q=A.c([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.eG(q,l)}k.c.cu(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.br(new A.bd(q,o))}},
$S(){return this.d.i("at(0)")}}
A.m0.prototype={
dJ(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.j("Future already completed"))
s.cs(A.GE(a,b))},
h5(a){return this.dJ(a,null)}}
A.iN.prototype={
dI(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.a(A.j("Future already completed"))
s.de(r.i("1/").a(a))}}
A.dK.prototype={
mS(a){if((this.c&15)!==6)return!0
return this.b.b.eh(t.bl.a(this.d),a.a,t.y,t.K)},
mv(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.nR(q,m,a.b,o,n,t.l)
else p=l.eh(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ag(s))){if((r.c&1)!==0)throw A.a(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aq.prototype={
ei(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ap
if(s===B.y){if(!t.nW.b(b)&&!t.h_.b(b))throw A.a(A.al(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.BA(b,s)}r=new A.aq(s,c.i("aq<0>"))
this.cr(new A.dK(r,3,a,b,q.i("@<1>").K(c).i("dK<1,2>")))
return r},
fP(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.aq($.ap,c.i("aq<0>"))
this.cr(new A.dK(s,19,a,b,r.i("@<1>").K(c).i("dK<1,2>")))
return s},
kw(a){this.a=this.a&1|16
this.c=a},
ct(a){this.a=a.a&30|this.a&1
this.c=a.c},
cr(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cr(a)
return}r.ct(s)}A.mU(null,null,r.b,t.O.a(new A.us(r,a)))}},
ft(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.ft(a)
return}m.ct(n)}l.a=m.cD(a)
A.mU(null,null,m.b,t.O.a(new A.ux(l,m)))}},
c_(){var s=t.F.a(this.c)
this.c=null
return this.cD(s)},
cD(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
f1(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aP<1>").b(a))A.uv(a,r,!0)
else{s=r.c_()
q.c.a(a)
r.a=8
r.c=a
A.fi(r,s)}},
cu(a){var s,r=this
r.$ti.c.a(a)
s=r.c_()
r.a=8
r.c=a
A.fi(r,s)},
jj(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c_()
q.ct(a)
A.fi(q,r)},
br(a){var s=this.c_()
this.kw(a)
A.fi(this,s)},
de(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aP<1>").b(a)){this.eU(a)
return}this.j3(a)},
j3(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mU(null,null,s.b,t.O.a(new A.uu(s,a)))},
eU(a){A.uv(this.$ti.i("aP<1>").a(a),this,!1)
return},
cs(a){this.a^=2
A.mU(null,null,this.b,t.O.a(new A.ut(this,a)))},
$iaP:1}
A.us.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.ux.prototype={
$0(){A.fi(this.b,this.a.a)},
$S:0}
A.uw.prototype={
$0(){A.uv(this.a.a,this.b,!0)},
$S:0}
A.uu.prototype={
$0(){this.a.cu(this.b)},
$S:0}
A.ut.prototype={
$0(){this.a.br(this.b)},
$S:0}
A.uA.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.nQ(t.pF.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.cL(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nk(q)
n=k.a
n.c=new A.bd(q,o)
q=n}q.b=!0
return}if(j instanceof A.aq&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aq){m=k.b.a
l=new A.aq(m.b,m.$ti)
j.ei(new A.uB(l,m),new A.uC(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uB.prototype={
$1(a){this.a.jj(this.b)},
$S:18}
A.uC.prototype={
$2(a,b){A.fr(a)
t.l.a(b)
this.a.br(new A.bd(a,b))},
$S:78}
A.uz.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eh(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.cL(l)
q=s
p=r
if(p==null)p=A.nk(q)
o=this.a
o.c=new A.bd(q,p)
o.b=!0}},
$S:0}
A.uy.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.mS(s)&&p.a.e!=null){p.c=p.a.mv(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.cL(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nk(p)
m=l.b
m.c=new A.bd(p,n)
p=m}p.b=!0}},
$S:0}
A.lY.prototype={}
A.mv.prototype={}
A.jh.prototype={$iAx:1}
A.mo.prototype={
nS(a){var s,r,q
t.O.a(a)
try{if(B.y===$.ap){a.$0()
return}A.BF(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.cL(q)
A.yH(A.fr(s),t.l.a(r))}},
h3(a){return new A.v3(this,t.O.a(a))},
nQ(a,b){b.i("0()").a(a)
if($.ap===B.y)return a.$0()
return A.BF(null,null,this,a,b)},
eh(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ap===B.y)return a.$1(b)
return A.Hj(null,null,this,a,b,c,d)},
nR(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ap===B.y)return a.$2(b,c)
return A.Hi(null,null,this,a,b,c,d,e,f)},
hK(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.v3.prototype={
$0(){return this.a.nS(this.b)},
$S:0}
A.wp.prototype={
$0(){A.Dz(this.a,this.b)},
$S:0}
A.iS.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gZ(a){return this.a!==0},
gY(){return new A.fj(this,this.$ti.i("fj<1>"))},
gaf(){var s=this.$ti
return A.kL(new A.fj(this,s.i("fj<1>")),new A.uE(this),s.c,s.y[1])},
N(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.jp(a)},
jp(a){var s=this.d
if(s==null)return!1
return this.bs(this.f0(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Az(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Az(q,b)
return r}else return this.jH(b)},
jH(a){var s,r,q=this.d
if(q==null)return null
s=this.f0(q,a)
r=this.bs(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eZ(s==null?m.b=A.y3():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eZ(r==null?m.c=A.y3():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.y3()
p=A.n1(b)&1073741823
o=q[p]
if(o==null){A.y4(q,p,[b,c]);++m.a
m.e=null}else{n=m.bs(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aD(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.f_()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.a(A.ax(m))}},
f_(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cY(i.a,null,!1,t.z)
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
eZ(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.y4(a,b,c)},
f0(a,b){return a[A.n1(b)&1073741823]}}
A.uE.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iU.prototype={
bs(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fj.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gZ(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iT(s,s.f_(),this.$ti.i("iT<1>"))},
p(a,b){return this.a.N(b)}}
A.iT.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.ax(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.cp.prototype={
fp(){return new A.cp(A.o(this).i("cp<1>"))},
gu(a){var s=this,r=new A.fl(s,s.r,A.o(s).i("fl<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gZ(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.jo(b)},
jo(a){var s=this.d
if(s==null)return!1
return this.bs(s[this.di(a)],a)>=0},
gW(a){var s=this.e
if(s==null)throw A.a(A.j("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eY(s==null?q.b=A.y5():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eY(r==null?q.c=A.y5():r,b)}else return q.j0(b)},
j0(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.y5()
r=p.di(a)
q=s[r]
if(q==null)s[r]=[p.dh(a)]
else{if(p.bs(q,a)>=0)return!1
q.push(p.dh(a))}return!0},
a1(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fw(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fw(s.c,b)
else return s.kn(b)},
kn(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.di(a)
r=n[s]
q=o.bs(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fT(p)
return!0},
jF(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.a(A.ax(n))
if(!0===o)n.a1(0,r)}},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dz()}},
eY(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dh(b)
return!0},
fw(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fT(s)
delete a[b]
return!0},
dz(){this.r=this.r+1&1073741823},
dh(a){var s,r=this,q=new A.me(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dz()
return q},
fT(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dz()},
di(a){return J.aE(a)&1073741823},
bs(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$izS:1}
A.me.prototype={}
A.fl.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.ax(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.qf.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:79}
A.a_.prototype={
gu(a){return new A.an(a,this.gt(a),A.cf(a).i("an<a_.E>"))},
a2(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gZ(a){return!this.gO(a)},
gW(a){if(this.gt(a)===0)throw A.a(A.cB())
return this.h(a,0)},
p(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a8(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.a(A.ax(a))}return!1},
a3(a,b){var s,r
A.cf(a).i("l(a_.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.a(A.ax(a))}return!0},
L(a,b){var s,r
A.cf(a).i("l(a_.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.a(A.ax(a))}return!1},
T(a,b){var s
if(this.gt(a)===0)return""
s=A.xY("",a,b)
return s.charCodeAt(0)==0?s:s},
en(a,b){return new A.dJ(a,b.i("dJ<0>"))},
bn(a,b,c){var s=A.cf(a)
return new A.F(a,s.K(c).i("1(a_.E)").a(b),s.i("@<a_.E>").K(c).i("F<1,2>"))},
l(a,b){var s
A.cf(a).i("a_.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cI(a,b){return new A.b4(a,A.cf(a).i("@<a_.E>").K(b).i("b4<1,2>"))},
mn(a,b,c,d){var s
A.cf(a).i("a_.E?").a(d)
A.f2(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
q(a){return A.xI(a,"[","]")},
$iS:1,
$in:1,
$iK:1}
A.a9.prototype={
aD(a,b){var s,r,q,p=A.o(this)
p.i("~(a9.K,a9.V)").a(b)
for(s=this.gY(),s=s.gu(s),p=p.i("a9.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.gY().bn(0,new A.qh(this),A.o(this).i("N<a9.K,a9.V>"))},
bo(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("N<1,2>(a9.K,a9.V)").a(b)
s=A.m(c,d)
for(r=this.gY(),r=r.gu(r),n=n.i("a9.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
kS(a){var s,r
for(s=J.P(A.o(this).i("n<N<a9.K,a9.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
N(a){return this.gY().p(0,a)},
gt(a){var s=this.gY()
return s.gt(s)},
gO(a){var s=this.gY()
return s.gO(s)},
gZ(a){var s=this.gY()
return s.gZ(s)},
gaf(){return new A.iV(this,A.o(this).i("iV<a9.K,a9.V>"))},
q(a){return A.xP(this)},
$iT:1}
A.qh.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a9.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a9.V").a(s)
return new A.N(a,s,r.i("N<a9.K,a9.V>"))},
$S(){return A.o(this.a).i("N<a9.K,a9.V>(a9.K)")}}
A.qi.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.u(a)
r.a=(r.a+=s)+": "
s=A.u(b)
r.a+=s},
$S:33}
A.iV.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gZ(a){var s=this.a
return s.gZ(s)},
gW(a){var s=this.a,r=s.gY()
r=s.h(0,r.gW(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.gY()
return new A.iW(r.gu(r),s,this.$ti.i("iW<1,2>"))}}
A.iW.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.jb.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.a(A.bk("Cannot modify unmodifiable map"))}}
A.h0.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
N(a){return this.a.N(a)},
aD(a,b){this.a.aD(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gZ(a){var s=this.a
return s.gZ(s)},
gt(a){var s=this.a
return s.gt(s)},
gY(){return this.a.gY()},
q(a){return this.a.q(0)},
gaf(){return this.a.gaf()},
gJ(){return this.a.gJ()},
bo(a,b,c,d){return this.a.bo(0,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),c,d)},
$iT:1}
A.em.prototype={}
A.d3.prototype={
gO(a){return this.gt(this)===0},
gZ(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.P(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bw(a){var s,r,q=this.b6(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.p(0,r))q.a1(0,r)}return q},
q(a){return A.xI(this,"{","}")},
a3(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
T(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.bY(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.u(q.gn())
while(q.m())}else{r=s
do r=r+b+A.u(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
L(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gW(a){var s=this.gu(this)
if(!s.m())throw A.a(A.cB())
return s.gn()},
a2(a,b){var s,r
A.lc(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.pM(b,b-r,this,"index"))},
$iS:1,
$in:1,
$idC:1}
A.j5.prototype={
bw(a){var s,r,q,p=this,o=p.fp()
for(s=A.fm(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.l(0,q)}return o},
b6(a){var s=this.fp()
s.I(0,this)
return s}}
A.mB.prototype={
l(a,b){this.$ti.c.a(b)
return A.FB()}}
A.hi.prototype={
p(a,b){return this.a.p(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fm(s,s.r,A.o(s).c)},
b6(a){return this.a.b6(0)}}
A.ho.prototype={}
A.jc.prototype={}
A.mc.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kh(b):s}},
gt(a){return this.b==null?this.c.a:this.bC().length},
gO(a){return this.gt(0)===0},
gZ(a){return this.gt(0)>0},
gY(){if(this.b==null){var s=this.c
return new A.aa(s,A.o(s).i("aa<1>"))}return new A.md(this)},
gaf(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.o(s).i("am<2>"))}return A.kL(r.bC(),new A.uG(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.q(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.N(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.kJ().k(0,b,c)},
N(a){if(this.b==null)return this.c.N(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aD(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aD(0,b)
s=o.bC()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.vK(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.ax(o))}},
bC(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
kJ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bC()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.M(r)
n.a=n.b=null
return n.c=s},
kh(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.vK(this.a[a])
return this.b[a]=s}}
A.uG.prototype={
$1(a){return this.a.h(0,A.q(a))},
$S:32}
A.md.prototype={
gt(a){return this.a.gt(0)},
a2(a,b){var s=this.a
if(s.b==null)s=s.gY().a2(0,b)
else{s=s.bC()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gY()
s=s.gu(s)}else{s=s.bC()
s=new J.eI(s,s.length,A.z(s).i("eI<1>"))}return s},
p(a,b){return this.a.N(b)}}
A.vc.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:29}
A.vb.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:29}
A.jM.prototype={
lX(a,b){t.L.a(a)
if(b===!0)return B.ei.bu(a)
else return B.eh.bu(a)}}
A.v7.prototype={
bu(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.f2(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.a(A.O("Invalid value in input: "+o,null,null))
return this.jr(a,0,r)}}return A.xZ(a,0,r)},
jr(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.au((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.jN.prototype={}
A.jU.prototype={
mV(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.f2(a4,a5,a2)
s=$.Cv()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.wP(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.wP(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bw("")
g=o}else g=o
g.a+=B.b.H(a3,p,q)
c=A.au(j)
g.a+=c
p=k
continue}}throw A.a(A.O("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.H(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.zl(a3,m,a5,n,l,r)
else{b=B.d.R(r-1,4)+1
if(b===1)throw A.a(A.O(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bR(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.zl(a3,m,a5,n,l,a)
else{b=B.d.R(a,4)
if(b===1)throw A.a(A.O(a1,a3,a5))
if(b>1)a3=B.b.bR(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nW.prototype={}
A.e7.prototype={}
A.k4.prototype={}
A.kf.prototype={}
A.i5.prototype={
q(a){var s=A.kg(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kI.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.kH.prototype={
an(a,b){var s=A.H6(a,this.gm_().a)
return s},
a8(a,b){var s=A.Fg(a,this.gmg().b,null)
return s},
gmg(){return B.j8},
gm_(){return B.j7}}
A.q6.prototype={}
A.q5.prototype={}
A.uI.prototype={
hV(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.au(92)
s.a+=o
o=A.au(117)
s.a+=o
o=A.au(100)
s.a+=o
o=p>>>8&15
o=A.au(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.au(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.au(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.au(92)
s.a+=o
switch(p){case 8:o=A.au(98)
s.a+=o
break
case 9:o=A.au(116)
s.a+=o
break
case 10:o=A.au(110)
s.a+=o
break
case 12:o=A.au(102)
s.a+=o
break
case 13:o=A.au(114)
s.a+=o
break
default:o=A.au(117)
s.a+=o
o=A.au(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.au(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.au(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.au(92)
s.a+=o
o=A.au(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.H(a,r,m)},
df(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.kI(a,null))}B.a.l(s,a)},
d2(a){var s,r,q,p,o=this
if(o.hU(a))return
o.df(a)
try{s=o.b.$1(a)
if(!o.hU(s)){q=A.zO(a,null,o.gfs())
throw A.a(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.zO(a,r,o.gfs())
throw A.a(q)}},
hU(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hV(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.df(a)
q.o6(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.df(a)
r=q.o7(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
o6(a){var s,r,q=this.c
q.a+="["
s=J.aN(a)
if(s.gZ(a)){this.d2(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.d2(s.h(a,r))}}q.a+="]"},
o7(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cY(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aD(0,new A.uJ(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hV(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.d2(r[n])}p.a+="}"
return!0}}
A.uJ.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:33}
A.uH.prototype={
gfs(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lF.prototype={}
A.tY.prototype={
bu(a){var s,r,q,p=a.length,o=A.f2(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.vd(s)
if(r.jE(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.dF()}return B.P.aI(s,0,r.b)}}
A.vd.prototype={
dF(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.b2(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
kQ(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.b2(r)
o=r.length
if(!(q<o))return A.d(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.d(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.d(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.d(r,p)
r[p]=s&63|128
return!0}else{n.dF()
return!1}},
jE(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.b2(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.kQ(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.dF()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.b2(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.b2(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.tX.prototype={
bu(a){return new A.va(this.a).jq(t.L.a(a),0,null,!0)}}
A.va.prototype={
jq(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.f2(b,c,J.cN(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.FS(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.FR(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dk(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.FT(o)
l.b=0
throw A.a(A.O(m,a,p+l.c))}return n},
dk(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.aa(b+c,2)
r=q.dk(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dk(a,s,c,d)}return q.lZ(a,b,c,d)},
lZ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bw(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.au(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.au(h)
e.a+=p
break
case 65:p=A.au(h)
e.a+=p;--d
break
default:p=A.au(h)
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
p=A.au(a[l])
e.a+=p}else{p=A.xZ(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.au(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eN.prototype={
gam(){return A.A1(this)},
gaU(){return A.A2(this)},
a7(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eN)if(this.a===b.a)s=this.b===b.b
return s},
gP(a){return A.d_(this.a,this.b,B.h,B.h,B.h,B.h)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
q(a){var s=this,r=A.De(A.Em(s)),q=A.k6(A.Ek(s)),p=A.k6(A.A1(s)),o=A.k6(A.A2(s)),n=A.k6(A.Ej(s)),m=A.k6(A.El(s)),l=A.zs(A.Ei(s)),k=s.b,j=k===0?"":A.zs(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibf:1}
A.e8.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.e8&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
q(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.aa(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.aa(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.bz(B.d.q(o%1e6),6,"0")},
$ibf:1}
A.m5.prototype={
q(a){return this.v()},
$iB:1}
A.ar.prototype={
gbV(){return A.Eh(this)}}
A.jO.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kg(s)
return"Assertion failed"}}
A.dG.prototype={}
A.cw.prototype={
gdq(){return"Invalid argument"+(!this.a?"(s)":"")},
gdn(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.u(p),n=s.gdq()+q+o
if(!s.a)return n
return n+s.gdn()+": "+A.kg(s.ge3())},
ge3(){return this.b}}
A.h7.prototype={
ge3(){return A.yf(this.b)},
gdq(){return"RangeError"},
gdn(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.u(q):""
else if(q==null)s=": Not greater than or equal to "+A.u(r)
else if(q>r)s=": Not in inclusive range "+A.u(r)+".."+A.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.u(r)
return s}}
A.kz.prototype={
ge3(){return A.f(this.b)},
gdq(){return"RangeError"},
gdn(){if(A.f(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.iG.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.lA.prototype={
q(a){return"UnimplementedError: "+this.a}}
A.he.prototype={
q(a){return"Bad state: "+this.a}}
A.k1.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kg(s)+"."}}
A.kY.prototype={
q(a){return"Out of Memory"},
gbV(){return null},
$iar:1}
A.iC.prototype={
q(a){return"Stack Overflow"},
gbV(){return null},
$iar:1}
A.uq.prototype={
q(a){return"Exception: "+this.a}}
A.A.prototype={
q(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.H(e,0,75)+"..."
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
k=""}return g+l+B.b.H(e,i,j)+k+"\n"+B.b.ac(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.u(f)+")"):g}}
A.n.prototype={
cI(a,b){return A.D3(this,A.o(this).i("n.E"),b)},
bn(a,b,c){var s=A.o(this)
return A.kL(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
d1(a,b){var s=A.o(this)
return new A.G(this,s.i("l(n.E)").a(b),s.i("G<n.E>"))},
en(a,b){return new A.dJ(this,b.i("dJ<0>"))},
p(a,b){var s
for(s=this.gu(this);s.m();)if(J.a8(s.gn(),b))return!0
return!1},
bl(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a3(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
T(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.bY(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.bY(q.gn())
while(q.m())}else{r=s
do r=r+A.u(b)+J.bY(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
L(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bT(a,b){var s=A.H(this,A.o(this).i("n.E"))
return s},
bS(a){return this.bT(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gZ(a){return!this.gO(this)},
gW(a){var s=this.gu(this)
if(!s.m())throw A.a(A.cB())
return s.gn()},
gbb(a){var s,r=this.gu(this)
if(!r.m())throw A.a(A.cB())
s=r.gn()
if(r.m())throw A.a(A.zG())
return s},
b1(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.a(A.cB())},
ao(a,b){return this.b1(0,b,null)},
a2(a,b){var s,r
A.lc(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.pM(b,b-r,this,"index"))},
q(a){return A.DU(this,"(",")")}}
A.N.prototype={
q(a){return"MapEntry("+A.u(this.a)+": "+A.u(this.b)+")"}}
A.at.prototype={
gP(a){return A.I.prototype.gP.call(this,0)},
q(a){return"null"}}
A.I.prototype={$iI:1,
a7(a,b){return this===b},
gP(a){return A.ip(this)},
q(a){return"Instance of '"+A.l7(this)+"'"},
ga5(a){return A.yW(this)},
toString(){return this.q(this)}}
A.my.prototype={
q(a){return""},
$id4:1}
A.tB.prototype={
gme(){var s,r=this.b
if(r==null)r=$.rk.$0()
s=r-this.a
if($.z7()===1e6)return s
return s*1000}}
A.bw.prototype={
gt(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iEJ:1}
A.tW.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.q(b)
s=B.b.bx(b,"=")
if(s===-1){if(b!=="")a.k(0,A.ya(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.H(b,0,s)
q=B.b.aQ(b,s+1)
p=this.a
a.k(0,A.ya(r,0,r.length,p,!0),A.ya(q,0,q.length,p,!0))}return a},
$S:88}
A.tV.prototype={
$2(a,b){throw A.a(A.O("Illegal IPv6 address, "+a,this.a,b))},
$S:98}
A.jd.prototype={
gfM(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.u(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gP(a){var s,r=this,q=r.y
if(q===$){s=B.b.gP(r.gfM())
r.y!==$&&A.z1()
r.y=s
q=s}return q},
gb4(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.An(s==null?"":s)
r.z!==$&&A.z1()
q=r.z=new A.em(s,t.hL)}return q},
ghT(){return this.b},
ge1(){var s=this.c
if(s==null)return""
if(B.b.S(s,"[")&&!B.b.ak(s,"v",1))return B.b.H(s,1,s.length-1)
return s},
ge8(){var s=this.d
return s==null?A.AK(this.a):s},
ge9(){var s=this.f
return s==null?"":s},
gho(){var s=this.r
return s==null?"":s},
ghq(){return this.c!=null},
ghs(){return this.f!=null},
ghr(){return this.r!=null},
q(a){return this.gfM()},
a7(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gew())if(p.c!=null===b.ghq())if(p.b===b.ghT())if(p.ge1()===b.ge1())if(p.ge8()===b.ge8())if(p.e===b.ghE()){r=p.f
q=r==null
if(!q===b.ghs()){if(q)r=""
if(r===b.ge9()){r=p.r
q=r==null
if(!q===b.ghr()){s=q?"":r
s=s===b.gho()}}}}return s},
$ilD:1,
gew(){return this.a},
ghE(){return this.e}}
A.tU.prototype={
ghS(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cL(s,"?",m)
q=s.length
if(r>=0){p=A.je(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.m1("data","",n,n,A.je(s,m,q,128,!1,!1),p,n)}return m},
q(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.ms.prototype={
ghq(){return this.c>0},
ghs(){return this.f<this.r},
ghr(){return this.r<this.a.length},
gew(){var s=this.w
return s==null?this.w=this.jm():s},
jm(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.S(r.a,"http"))return"http"
if(q===5&&B.b.S(r.a,"https"))return"https"
if(s&&B.b.S(r.a,"file"))return"file"
if(q===7&&B.b.S(r.a,"package"))return"package"
return B.b.H(r.a,0,q)},
ghT(){var s=this.c,r=this.b+3
return s>r?B.b.H(this.a,r,s-1):""},
ge1(){var s=this.c
return s>0?B.b.H(this.a,s,this.d):""},
ge8(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.C3(B.b.H(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.S(r.a,"http"))return 80
if(s===5&&B.b.S(r.a,"https"))return 443
return 0},
ghE(){return B.b.H(this.a,this.e,this.f)},
ge9(){var s=this.f,r=this.r
return s<r?B.b.H(this.a,s+1,r):""},
gho(){var s=this.r,r=this.a
return s<r.length?B.b.aQ(r,s+1):""},
gb4(){if(this.f>=this.r)return B.aF
return new A.em(A.An(this.ge9()),t.hL)},
gP(a){var s=this.x
return s==null?this.x=B.b.gP(this.a):s},
a7(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.q(0)},
q(a){return this.a},
$ilD:1}
A.m1.prototype={}
A.qO.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.xo.prototype={
$1(a){return this.a.dI(this.b.i("0/?").a(a))},
$S:21}
A.xp.prototype={
$1(a){if(a==null)return this.a.h5(new A.qO(a===undefined))
return this.a.h5(a)},
$S:21}
A.wI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.Bq(a))return a
s=this.a
a.toString
if(s.N(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.b_(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fu(!0,"isUtc",t.y)
return new A.eN(r,0,!0)}if(a instanceof RegExp)throw A.a(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aD(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cK(n),p=s.gu(n);p.m();)m.push(A.hE(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.f(a.length)
for(s=J.aN(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:125}
A.mb.prototype={
aV(a){if(a<=0||a>4294967296)throw A.a(A.A5(u.w+a))
return Math.random()*a>>>0},
ap(){return Math.random()},
$ixV:1}
A.es.prototype={
bW(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.aa(a-s,k)
r=a>>>0
a=B.d.aa(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.aa(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.aa(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.aa(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.aa(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.aa(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bg()
l.bg()
l.bg()
l.bg()},
bg(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.aa(o-n+(q-p)+(m-r),4294967296)>>>0},
aV(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.a(A.A5(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bg()
return(p.a&s)>>>0}do{p.bg()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
ap(){var s,r=this
r.bg()
s=r.a
r.bg()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ixV:1}
A.kb.prototype={
v(){return"DiagnosticSeverity."+this.b}}
A.dW.prototype={
A(){var s=this
return A.J(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.tn.prototype={
$1(a){return B.b.bz(B.d.ej(A.f(a),16),8,"0")},
$S:156}
A.lG.prototype={}
A.qx.prototype={
nt(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.z(s).i("bF<1>"),s=new A.bF(s,r),s=new A.an(s,s.gt(0),r.i("an<X.E>")),q=o.a,r=r.i("X.E");s.m();){p=s.d
q.aG(p==null?r.a(p):p)}}}
A.kO.prototype={}
A.qI.prototype={}
A.qz.prototype={
cO(a0,a1){var s=0,r=A.aL(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$cO=A.aM(function(a3,a4){if(a3===1)return A.aI(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.Ch(b)
if(a.length!==0)throw A.a(A.O(B.a.bn(a,new A.qA(),t.N).T(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.a(B.hw)
k=t.N
j=A.a1(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.t)(m),++i)j.I(0,m[i].c.gaf())
if(j.a>16384)throw A.a(B.hp)
p=A.m(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gaf(),g=g.gu(g)
case 6:if(!g.m()){s=7
break}o=g.gn()
if(p.N(o)){s=6
break}s=8
return A.a4(j.$1(o),$async$cO)
case 8:f=a4
e=f.length
if(e>67108864)throw A.a(A.O("model package payload exceeds limit: "+A.u(o),null,null))
d=p
if(new A.am(d,A.o(d).i("am<2>")).bl(0,0,new A.qB(),k)+e>268435456)throw A.a(B.hz)
J.bc(p,o,new Uint8Array(A.a0(f)))
if(l)try{e=J.aV(p,o)
e.toString
A.BV(e)}catch(a2){b=A.ag(a2)
if(b instanceof A.la){n=b
throw A.a(A.O("model package payload is not valid QMSH: "+A.u(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.t)(m),++i
s=3
break
case 5:if(A.zX(b,p)!==b.c)throw A.a(B.fL)
q=new A.lG(b,p)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cO,r)}}
A.qA.prototype={
$1(a){return t.zU.a(a).f},
$S:19}
A.qB.prototype={
$2(a,b){return A.f(a)+t.uo.a(b).length},
$S:192}
A.qC.prototype={
C(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.ir("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.l(l,"assetId must be kebab-case")
k=A.ir("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.l(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.l(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.l(l,"parts must be non-empty")
s=m.w
if(A.h_(s,A.z(s).c).a!==s.length)B.a.l(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.l(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.L(s,new A.qF())
else s=!1
if(s)B.a.l(l,"combinedBounds must contain six finite values")
for(s=m.y.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(q.length!==0){r=r.b
p=J.aN(r)
r=p.gt(r)!==16||p.L(r,new A.qG())}else r=!0
if(r)B.a.l(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.t)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.l(l,"part material slot is outside materials")
q=n.c
if(q.gO(q))B.a.l(l,"part "+n.a+" must declare payload files")
for(q=q.gaf(),q=q.gu(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.GO(q.gn()))B.a.l(l,p)}return l},
hP(a){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"schema","pixeldart-model-package-v1")
o.k(0,"assetId",p.b)
if(a)o.k(0,"packageHash",p.c)
o.k(0,"sourceFormat",p.d)
s=p.e
r=A.z(s)
q=r.i("F<1,T<e,@>>")
s=A.H(new A.F(s,r.i("T<e,@>(1)").a(new A.qE()),q),q.i("X.E"))
o.k(0,"parts",s)
o.k(0,"materials",p.f)
o.k(0,"textures",p.r)
o.k(0,"lods",p.w)
o.k(0,"combinedBounds",p.x)
o.k(0,"sockets",p.y)
o.k(0,"provenance",p.z)
return o},
A(){return this.hP(!0)}}
A.qD.prototype={
$2(a,b){return new A.N(J.bY(a),J.bY(b),t.q)},
$S:30}
A.qF.prototype={
$1(a){return!isFinite(A.b7(a))},
$S:4}
A.qG.prototype={
$1(a){return!isFinite(A.b7(a))},
$S:4}
A.qE.prototype={
$1(a){return t.aw.a(a).A()},
$S:74}
A.eY.prototype={
A(){return A.J(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.qH.prototype={
$2(a,b){return new A.N(J.bY(a),J.bY(b),t.q)},
$S:30}
A.wd.prototype={
$1(a){A.q(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.wv.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.wg.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.wt.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xx.prototype={
$2(a,b){B.a.l(this.a,new A.dW(a,B.co,"model-package",b,"rebuild the deterministic model package"))},
$S:34}
A.xy.prototype={
$2(a,b){B.a.l(this.a,new A.dW(a,B.co,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:34}
A.ro.prototype={
C(){var s,r=this
if(B.a.L(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.rp()))throw A.a(B.i5)
s=r.y
if(!isFinite(s)||s<1)throw A.a(B.h4)}}
A.rp.prototype={
$1(a){return A.f(a)<=0},
$S:39}
A.f1.prototype={
v(){return"QualityProfileKind."+this.b}}
A.ek.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bw(B.mA)
if(q.a!==0)throw A.a(A.al(q,s,"contains unknown pipeline features"))
if(this.a===B.by&&r.gZ(r))throw A.a(A.al(r,s,"safe profiles cannot install optional features"))}}
A.fL.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.l4.prototype={}
A.o9.prototype={
c3(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.a(A.j("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.h(A.j("configuration state is not initialized"))
if(p.c!=null)A.h(A.j("a configuration transition is already open"))
a2.C()
n=A.ii(a2)
m=p.d
l=p.b
if(l==null)A.h(A.j("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bw(h)
f=h.bw(j)
j=n.a
h=l.a
e=j.bw(h)
d=h.bw(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.oc(m,a2,n,new A.oa(A.f7(g,k),A.f7(f,k),A.f7(e,k),A.f7(d,k),c,b,o.z!==a2.z),B.cm)
p.c=a
s=a
try{r=a1.b.cT(s.c)
q=new A.l4(s,r,B.aZ)
a1.c=q
return q}catch(a0){p.fX(s)
throw a0}},
c4(a){var s,r,q,p=this
p.f4(a)
s=p.a
r=a.a
s.f5(r)
q=s.d
if(r.a!==q)A.h(A.j("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fa
s.c=null
p.b.c4(a.b)
a.c=B.fi
p.c=null},
f4(a){if(this.c!==a||a.c!==B.aZ)throw A.a(A.j("coordinated transition is not open"))}}
A.fG.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.oa.prototype={}
A.oc.prototype={}
A.ob.prototype={
fX(a){this.f5(a)
a.e=B.fb
this.c=null},
f5(a){if(this.c!==a||a.e!==B.cm)throw A.a(A.j("configuration transition is not open"))}}
A.l3.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
for(s=l.r,r=l.w,q=l.x,p=A.J(["exposure",l.a,"bloomStrength",l.b,"ssaoStrength",l.c,"depthOfFieldStrength",l.d,"vignette",l.e,"grain",l.f,"rainIntensity",s,"surfaceWetness",r,"rainWindowVisibility",q,"ditherStrength",l.y,"colorGradeStrength",l.z,"affineWarpStrength",l.Q,"vertexSnapGrid",l.as,"vhsChromaWeight",l.ax,"vhsTrackingWeight",l.ay,"vhsNoiseWeight",l.ch,"vhsHeadSwitchWeight",l.CW,"vhsDropoutWeight",l.cx,"vhsGhostWeight",l.cy],t.N,t.i),p=new A.M(p,A.o(p).i("M<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=o.b
if(!isFinite(m)||m<0)throw A.a(A.w("PostProcessState."+n+" must be >= 0: "+A.u(m),k))}p=l.at
if(p<1||p>8)throw A.a(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+p,k))
if(s>1)throw A.a(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.u(s),k))
if(r>1)throw A.a(A.w("PostProcessState.surfaceWetness must be in [0, 1]: "+A.u(r),k))
if(q>1)throw A.a(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.u(q),k))}}
A.fD.prototype={}
A.km.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gaE(0)||!k.b.gaE(0)||!k.r.gaE(0))throw A.a(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.a(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.u(s)+"/"+A.u(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.a(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.u(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gaE(0)||r.gce()<1e-12)A.h(A.w("DirectionalLight.direction must be finite and nonzero: "+r.q(0),j))
s=s.c
if(!isFinite(s)||s<0)A.h(A.w("DirectionalLight.intensity must be >= 0: "+A.u(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.h(A.w("PointLight.position must be finite: "+o.q(0),j))
o=p.d
if(!isFinite(o)||o<0)A.h(A.w("PointLight.intensity must be >= 0: "+A.u(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.h(A.w("PointLight.radius must be > 0: "+A.u(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
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
A.oQ.prototype={}
A.dB.prototype={
a7(a,b){if(b==null)return!1
return J.eH(b)===A.yW(this)&&b instanceof A.dB&&this.a===b.a&&this.b===b.b},
gP(a){return A.d_(A.yW(this),this.a,this.b,B.h,B.h,B.h)}}
A.bC.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bj.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c1.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kZ.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cz.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eT.prototype={
v(){return"HandleRejection."+this.b}}
A.kw.prototype={
q(a){return"HandleException("+this.a.b+", "+this.b.q(0)+")"}}
A.c0.prototype={
gaE(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a7(a,b){if(b==null)return!1
return b instanceof A.c0&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.d_(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"LinearColor("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.ox.prototype={}
A.l2.prototype={
gE(){return this.a}}
A.bI.prototype={
gE(){return this.a}}
A.xq.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:87}
A.fz.prototype={
v(){return"AlphaMode."+this.b}}
A.i9.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.dw.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.a(A.w("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.a(A.w("MaterialDefinition.emissiveStrength must be >= 0: "+A.u(s),k))
if(!isFinite(1))throw A.a(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.kM("roughness",l.at)
A.kM("metallic",0)
A.kM("occlusionStrength",1)
A.kM("clearcoatStrength",0)
A.kM("clearcoatRoughness",0.2)
if(!isFinite(0))throw A.a(A.w("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.aB("uvScaleU",s),new A.aB("uvScaleV",r),new A.aB("uvOffsetU",0),new A.aB("uvOffsetV",0),new A.aB("tintR",l.d),new A.aB("tintG",l.e),new A.aB("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.a(A.w("MaterialDefinition."+n+" must be finite: "+A.u(m),k))}if(s===0||r===0)throw A.a(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.a(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cH.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.b6.prototype={}
A.iI.prototype={
C(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.a(A.w("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.a(A.w(k+m.a+'": attribute '+p.a.q(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.a(A.w(k+m.a+'": attribute '+p.a.q(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.z(s)
r=j.i("l(1)").a(new A.tZ())
for(s=B.a.gu(s),j=new A.U(s,r,j.i("U<1>"));j.m();)if(s.gn().c!==4)throw A.a(A.w(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.tZ.prototype={
$1(a){return t.qY.a(a).a===B.bV},
$S:17}
A.bP.prototype={
C(){var s,r,q,p,o,n=this,m=n.a
m.C()
s=n.b.length
m=m.b
if(B.d.R(s,m)!==0)throw A.a(A.w("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.kL()
r=n.c
if(r!=null){q=B.d.bB(s,m)
for(m=A.E1(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.a(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gaE(0)&&m.b.gaE(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.a(A.w("MeshData.localBounds must be a valid AABB",null))},
kL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.z(a4),a6=a5.i("l(1)")
a5=a5.i("G<1>")
s=new A.G(a4,a6.a(new A.qq()),a5)
if(!s.gu(0).m())return
r=new A.G(a4,a6.a(new A.qr()),a5)
if(r.gt(0)!==1)throw A.a(A.w("surface-v2 tangent data requires one normal slot",a2))
q=s.gbb(0)
p=r.gbb(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.bB(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
j=k+n
if(!(j<a5))return A.d(a4,j)
i=a4[j]
h=j+1
if(!(h<a5))return A.d(a4,h)
g=a4[h]
j+=2
if(!(j<a5))return A.d(a4,j)
f=a4[j]
j=k+m
if(!(j<a5))return A.d(a4,j)
e=a4[j]
h=j+1
if(!(h<a5))return A.d(a4,h)
d=a4[h]
h=j+2
if(!(h<a5))return A.d(a4,h)
c=a4[h]
j+=3
if(!(j<a5))return A.d(a4,j)
b=a4[j]
a=i*i+g*g+f*f
a0=e*e+d*d+c*c
if(!B.a.a3(A.c([i,g,f,e,d,c,b],o),new A.qs()))throw A.a(A.w("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.a(A.w("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.a(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.u(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.a(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.u(b),a2))}}}
A.qq.prototype={
$1(a){return t.qY.a(a).a===B.bV},
$S:17}
A.qr.prototype={
$1(a){return t.qY.a(a).a===B.e1},
$S:17}
A.qs.prototype={
$1(a){return isFinite(A.b7(a))},
$S:4}
A.k7.prototype={$iEy:1}
A.qQ.prototype={
C(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.a(A.w("resource plan must contain sceneColor and present",null))
if(s.L(0,new A.qR()))throw A.a(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.a(A.w("resource history does not match vhsOutput ownership",null))}}
A.qR.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.ha.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.l5.prototype={}
A.lg.prototype={
hv(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a!=null)throw A.a(A.j("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cT(a){var s=this
if(s.d)A.h(A.j("resource assembler is disposed"))
if(s.a==null)throw A.a(A.j("resource assembler is not initialized"))
if(s.b!=null)throw A.a(A.j("resource assembly is already open"))
a.C()
return s.b=new A.l5(s.c,a,B.bG)},
c4(a){var s,r=this
if(r.d)A.h(A.j("resource assembler is disposed"))
r.fC(a)
s=r.c
if(a.a!==s)throw A.a(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.m8
r.b=null},
eg(a){if(this.d)A.h(A.j("resource assembler is disposed"))
this.fC(a)
a.c=B.m9
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.a(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
fC(a){if(this.b!==a||a.c!==B.bG)throw A.a(A.j("resource assembly is not prepared"))}}
A.fN.prototype={
v(){return"DrawMode."+this.b}}
A.jW.prototype={
v(){return"BlendMode."+this.b}}
A.b9.prototype={}
A.lw.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.a(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.a(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.a(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hM.prototype={
v(){return"ColorEncoding."+this.b}}
A.fM.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.it.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.a(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.a(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.a(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.a(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.f4.prototype={
v(){return"RendererState."+this.b}}
A.aQ.prototype={}
A.oR.prototype={
hD(a){var s=this.z.h(0,a)
return s==null?B.cA:s},
q(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eX.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cZ.prototype={}
A.c2.prototype={}
A.qn.prototype={
cv(a){var s=this.a,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.qo(a)),r.i("G<1>")).gt(0)}}
A.qo.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:92}
A.ql.prototype={
cU(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.t)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.h(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.N(l))throw A.a(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.BP(k),i=k.$ti,k=new A.cb(k.a(),i.i("cb<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bT(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cU(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.H(new A.am(r,o),o.i("n.E"))
B.a.U(a,new A.qm())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.t)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.kr(m,k,s))}return new A.qn(A.ai(o,t.wl))},
kr(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.M(b,A.o(b).i("M<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.E_(new A.am(q,q.$ti.i("am<2>")))
A.aX(q,s,r)
return new A.c2(a,p)}}
A.qm.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:198}
A.kN.prototype={
nF(a){return this.a.bJ(a)}}
A.qp.prototype={
$3(a,b,c){return new A.c1(A.f(a),A.f(b),A.ak(c))},
$S:110}
A.lC.prototype={}
A.qt.prototype={
b9(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.At(b,new A.kr(a.byteLength,B.cO,B.io))
if(b.b!==B.i)A.h(A.j(c))
s=A.b(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.da(b)
A.by(b,p)
if(b.b!==B.i)A.h(A.j(c))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a1(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.BM(h.a)
if(!l.l(0,g))continue
f=A.G9(o,g,h)
if(b.b!==B.i)A.h(A.j(c))
r.vertexAttribPointer.apply(r,[g,f,A.f(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.i)A.h(A.j(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.At(b,new A.kr(A.zW(e),B.cO,B.cN))
if(b.b!==B.i)A.h(A.j(c))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(d.a))
A.F2(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.lC(a0,d,p,b,B.d.bB(a.length,n),t.Dd.b(e))},
ee(a){var s=this.c.h(0,a.a)
if(s==null)throw A.a(A.ee(B.aD,a))
this.b.bJ(a)
return s},
aG(a){var s,r,q=this.c.a1(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.aG(a)},
ec(){var s,r,q,p
for(s=this.b.bO(),r=s.$ti,s=new A.cb(s.a(),r.i("cb<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.b9(p.b))}},
gcf(){return this.b.bO().bl(0,0,new A.qv(),t.S)}}
A.qu.prototype={
$3(a,b,c){return new A.bC(A.f(a),A.f(b),A.ak(c))},
$S:115}
A.qv.prototype={
$2(a,b){var s,r
A.f(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.zW(s)
return a+r+s},
$S:116}
A.hK.prototype={}
A.qw.prototype={
lY(a){var s,r,q,p,o=A.HY(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.h(A.j("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.k(0,s,q+1)
r.toString
return r}p=new A.hK(o,1,A.I3(A.BV(a)))
m.k(0,n,p)
this.c.k(0,n,1)
return p},
aG(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.a(A.j("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a1(0,p)
q.a1(0,p)}else s.k(0,p,r-1)}}
A.qy.prototype={
A(){var s=this
return A.J(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.h2.prototype={
ii(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.h(A.j("model package binding is disposed"))
if(a8.x==null)throw A.a(A.j("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.t)(s),++i){h=k.a(s[i])
q.V(h)
g=h.a
if(!(g>=0&&g<j.length))return A.d(j,g)
f=j[g].c
if(f==null)f=l.a(f)
e=f.c
e.C()
d=n.a(f.a)
p.V(d)
c=d.a
if(!(c>=0&&c<m.length))return A.d(m,c)
b=m[c].c
a=(b==null?o.a(b):b).d
a0=e.a6()
a=a.gah()
a1=A.z(a)
A.aW(new A.F(a,a1.i("C(1)").a(a0.gaj()),a1.i("F<1,C>")))
a1=f.b
a0=f.e
a=f.f
a2=f.r
a3=f.w
a4=f.x
a5=f.y
e.C()
p.V(d)
if(!(c<m.length))return A.d(m,c)
b=m[c].c
c=(b==null?o.a(b):b).d
a6=e.a6()
c=c.gah()
a7=A.z(c)
A.aW(new A.F(c,a7.i("C(1)").a(a6.gaj()),a7.i("F<1,C>")))
a5=l.a(new A.b9(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.V(h)
if(!(g<j.length))return A.d(j,g)
j[g].saZ(a5)}},
a_(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fm(s,r,q.x)
B.a.M(s)
B.a.M(r)
q.x=null},
j4(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.E3(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
try{s=0
a3=a3.a
o=a3.e
n=a2.d
m=a2.f
l=a2.r
k=n.a
j=k.$ti
i=j.c
h=k.b
g=a2.c
a3=a3.b+":"
f=a2.e
j=j.y[1]
for(;;){e=s
d=o.length
if(typeof e!=="number")return e.d3()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a3=A.j("invalid material for package slot "+r.b)
throw A.a(a3)}e=B.a.h(a4.b,s).c
d=r.a
if(g.x)A.h(A.j("resource library is disposed"))
c=g.a
e.C()
b=c.b.aB(e,a3+d+":"+a7)
c.c.k(0,b.a,c.b9(e))
g.f.l(0,b)
p=b
J.eG(a5,p)
e=p
m.C()
i.a(e)
k.V(e)
c=e.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a=h[c].c
d=(a==null?j.a(a):a).d
c=m.a6()
d=d.gah()
a0=A.z(d)
A.aW(new A.F(d,a0.i("C(1)").a(c.gaj()),a0.i("F<1,C>")))
J.eG(a6,n.b.bI(new A.b9(e,q,m,l,B.M,B.L,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a4()
s=e+1}return new A.j4(a4,a6,a5)}catch(a1){a2.fm(a6,a5,a4)
throw a1}},
fm(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.z(a).i("bF<1>"),r=new A.bF(a,s),r=new A.an(r,r.gt(0),s.i("an<X.E>")),q=this.d.b,s=s.i("X.E");r.m();){p=r.d
q.aG(p==null?s.a(p):p)}for(s=A.z(b).i("bF<1>"),r=new A.bF(b,s),r=new A.an(r,r.gt(0),s.i("an<X.E>")),q=this.c,s=s.i("X.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.h(A.j("resource library is disposed"))
q.a.aG(p)
q.f.a1(0,p)}if(c!=null)c.nt()}}
A.cF.prototype={
v(){return"QmeshRejection."+this.b}}
A.la.prototype={
q(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.wJ.prototype={
$1(a){return!isFinite(A.b7(a))},
$S:4}
A.bT.prototype={}
A.dF.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c6.prototype={}
A.tL.prototype={
cE(a){var s=this.a,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.tM(a)),r.i("G<1>")).gt(0)}}
A.tM.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:118}
A.tJ.prototype={
cU(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.h(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.h(A.al(n,"handle","must be valid"))
if(s.N(o))throw A.a(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("am<2>")
m=A.H(new A.am(s,r),r.i("n.E"))
B.a.U(m,new A.tK())
r=t.Aj
l=A.a1(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.kg(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c6(p,i))}r=l.a
return new A.tL(A.ai(j,t.e),r)},
kg(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.fO(a,r)===s.d)return B.dV
this.b.k(0,a,!0)
return B.dU}catch(q){if(A.ag(q) instanceof A.kw){s=this.b.h(0,a)===!0?B.dX:B.dW
return s}else throw q}}}
A.tK.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:121}
A.dc.prototype={}
A.lz.prototype={
aX(a){var s=this.a,r=A.y0(s,B.it)
A.y1(s,r,0,a)
return r},
nZ(a,b){var s,r,q,p=this,o=p.b,n=o.bJ(a),m=A.H(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.ek(a,new A.dc(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.y0(p.a,s)
o.k(0,r,q)}A.y1(p.a,q,0,b)},
mp(a){var s,r=this.b,q=r.bJ(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.a(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.q(0)))
A.Au(this.a,s)
r.ek(a,new A.dc(p,q.b,!0))},
fO(a,b){var s
this.b.bJ(a)
s=this.c.h(0,a.a)
return s==null?b:s},
nB(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.fO(a,s)},
nK(a){var s=this.e
s===$&&A.p()
return s},
nM(a){var s=this.f
s===$&&A.p()
return s},
nD(a){var s=this.r
s===$&&A.p()
return s},
nI(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>")),q=n.a,p=q.a,o=t.h;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.M(0)
s=n.d
s===$&&A.p()
A.lR(q,s)
s=n.e
s===$&&A.p()
A.lR(q,s)
s=n.f
s===$&&A.p()
A.lR(q,s)
s=n.r
s===$&&A.p()
A.lR(q,s)
s=n.w
s===$&&A.p()
A.lR(q,s)},
ec(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aX($.z6())
i.e=i.aX($.z3())
i.f=i.aX($.z4())
i.r=i.aX($.z2())
i.w=i.aX($.z5())
for(s=i.b.bO(),r=s.$ti,s=new A.cb(s.a(),r.i("cb<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a3(o,new A.tP()))continue
l=A.y0(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.y1(p,l,k,j)}if(m.c)A.Au(p,l)
q.k(0,n.a,l)}},
gcf(){return this.b.bO().bl(0,0,new A.tO(),t.S)}}
A.tN.prototype={
$3(a,b,c){return new A.bj(A.f(a),A.f(b),A.ak(c))},
$S:129}
A.tP.prototype={
$1(a){return t.Fx.a(a)==null},
$S:133}
A.tO.prototype={
$2(a,b){var s
A.f(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:136}
A.dt.prototype={
gmD(){return this.b.length}}
A.kk.prototype={
la(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.rs(A.c([],t.pq),A.a1(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].av(s,b)
o=s.l9(a,!1)
if(o.b.length!==0)return new A.kl(o,B.jW)
q=o.a
n=A.z(q)
m=new A.F(q,n.i("e(1)").a(new A.oL()),n.i("F<1,e>")).b6(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.au(d),j=0;j<1;++j){i=n[j]
if(!m.p(0,i.gF().a))throw A.a(A.j('RenderFeature "'+k.gE()+'" created a pass "'+i.gF().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.U(l,new A.oM(o))
return new A.kl(o,l)},
bK(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a_()}}
A.oL.prototype={
$1(a){return t.A.a(a).a},
$S:141}
A.oM.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.e2(s,new A.oJ(a)),B.a.e2(s,new A.oK(b)))},
$S:149}
A.oJ.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.oK.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.kl.prototype={}
A.eP.prototype={
v(){return"FrameQueueState."+this.b}}
A.kn.prototype={$iEr:1}
A.oP.prototype={
l6(a){if(a.length===0)throw A.a(A.al(a,"passId",null))
this.b=a
this.a.cV(a,A.BY())},
iy(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aQ(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bE(a,b){var s,r=this.b
if(r==null)throw A.a(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.a(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.aa(a,3)*b}}
A.hj.prototype={}
A.aA.prototype={
gbQ(){var s=this.c,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.qU()),r.i("G<1>"))},
gcm(){var s=this.c,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.qV()),r.i("G<1>"))},
q(a){return"PassDeclaration("+this.a+" @ "+this.b.q(0)+")"},
gE(){return this.a}}
A.qU.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.j||s===B.J},
$S:20}
A.qV.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:20}
A.ck.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bs.prototype={
q(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iv.prototype={
v(){return"ResourceFormat."+this.b}}
A.cU.prototype={
v(){return"GraphStage."+this.b}}
A.aR.prototype={
hz(){var s=this
return new A.aR(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.aR&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gP(a){var s=this
return A.d_(s.a,s.b,s.c,s.d,s.e,s.f)},
q(a){var s=this,r=s.b.q(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.h9.prototype={
v(){return"ResourceAccess."+this.b}}
A.R.prototype={}
A.hN.prototype={
gE(){return this.a}}
A.l8.prototype={
aF(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.F5(m.a,a.c,r.a(a.d.gY().bS(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.iz){++m.e
throw q}else throw q}r=a.a
p=new A.hN(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
bK(){var s=this.b
this.jv(new A.am(s,A.o(s).i("am<2>")))
s.M(0)},
jv(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bv.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.a(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a1(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.a(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.a(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a1(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.a(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.a(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.rq.prototype={}
A.bh.prototype={
ai(){var s=this
return A.zv(B.eC,s.f,B.au,B.ac,!0,!0,!0,!0,s.r,B.ay,B.az,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.rs.prototype={
l9(a,b){var s=this.kK(t.Q.a(a),!1),r=this.a,q=A.z(r)
return new A.rr(A.ai(new A.G(r,q.i("l(1)").a(new A.rx()),q.i("G<1>")),t.A),s)},
kK(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.z(r)
p=q.i("G<1>")
o=A.H(new A.G(r,q.i("l(1)").a(new A.rw()),p),p.i("n.E"))
m.ja(o,a,s)
m.je(o,s)
m.jg(o,s)
m.jd(o,!1,s)
n=m.ji(o,s)
m.jf(o,n,s)
m.jh(o,s)
m.jc(o,n,s)
m.jb(o,s)
return s},
ja(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.a5.bw(b)
if(p.a!==0)B.a.l(c,new A.bs(B.iE,q.a,"missing capabilities: "+p.T(0,", ")))}},
je(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbQ(),o=J.P(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bs(B.iz,n,"reads multisampled resource "+m.q(0)+" directly; resolve before sampling"))}}},
jg(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.z(a),r=s.i("l(1)").a(new A.rv()),q=B.a.gu(a),s=new A.U(q,r,s.i("U<1>"));s.m();){r=q.gn()
p=r.gbQ()
o=A.H(p,p.$ti.i("n.E"))
p=r.gcm()
n=A.H(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bs(B.b5,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbb(o).a
l=B.a.gbb(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bs(B.b5,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bs(B.b5,r.a,"resolve source and destination must match format and extent"))}},
jd(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bs(B.iC,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
ji(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gcm(),n=J.P(o.a),o=new A.U(n,o.b,o.$ti.i("U<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bs(B.iy,m,l.q(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
jf(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbQ(),p=J.P(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bs(B.cT,o,"reads "+n.q(0)+" but no pass writes that version"))
continue}if(B.a.bx(a,m)>s)B.a.l(c,new A.bs(B.cT,o,"reads "+n.q(0)+" before writer "+m.a+" runs"))}}},
jh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbQ(),o=J.P(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcm(),k=J.P(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bs(B.iB,n,"reads and writes "+m.q(0)+" at the same version; declare a ping-pong version bump"))}}}},
jc(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbQ(),o=J.P(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcm().ao(0,new A.ru(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bs(B.iA,n,"reads "+l.q(0)+" but writer "+k.a+" produced "+j.q(0)))}}},
jb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcm(),o=J.P(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xJ(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a1(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbQ(),p=J.P(s.a),s=new A.U(p,s.b,s.$ti.i("U<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.cY(s,!1,!1,p)
s=a.length
i=A.cY(s,!1,!1,p)
h=new A.rt(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bs(B.iD,a[q].a,"participates in a resource dependency cycle"))}}}}
A.rx.prototype={
$1(a){t.A.a(a)
return A.xT()},
$S:12}
A.rw.prototype={
$1(a){t.A.a(a)
return A.xT()},
$S:12}
A.rv.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.ru.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:20}
A.rt.prototype={
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
r=A.fm(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:39}
A.rr.prototype={}
A.ma.prototype={$ic5:1,
gE(){return this.a},
gF(){return this.b},
gep(){return this.c}}
A.is.prototype={
kO(a){var s,r,q,p=a.c
p.C()
s=this.a.bJ(a.a)
p=p.a6()
r=s.d.gah()
q=A.z(r)
return A.aW(new A.F(r,q.i("C(1)").a(p.gaj()),q.i("F<1,C>")))},
ghx(){return new A.bX(this.mM(),t.Br)},
mM(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$ghx(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bO(),n=o.$ti,o=new A.cb(o.a(),n.i("cb<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.V(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a6()
f=f.gah()
d=A.z(f)
r=5
return a.b=new A.ma(h,g,A.aW(new A.F(f,d.i("C(1)").a(i.gaj()),d.i("F<1,C>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iEu:1}
A.ry.prototype={
$3(a,b,c){return new A.cz(A.f(a),A.f(b),A.ak(c))},
$S:175}
A.lf.prototype={
gfN(){var s=this.d
return s===$?this.d=new A.tJ(this.c,A.m(t.Aj,t.y)):s},
hL(a,b){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
s=this.a
a.C()
r=s.b.aB(a,b)
s.c.k(0,r.a,s.b9(a))
this.f.l(0,r)
return r},
nu(a){if(this.x)A.h(A.j("resource library is disposed"))
this.a.aG(a)
this.f.a1(0,a)},
eb(a,b,c,d,e,f){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aB(new A.dc(new A.kt(f,d,1,!0,e,B.b3,B.cQ,a),A.cY(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.H(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.h
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a1(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aG(k)}r=i.r
q=A.H(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.aG(q[l])
q=i.f
o=A.H(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.aG(o[l])
s.M(0)
r.M(0)
q.M(0)
p.a_()
i.x=!0},
$iEw:1}
A.ur.prototype={}
A.mz.prototype={$ic5:1,
gE(){return this.a},
gF(){return this.b},
gep(){return this.c}}
A.w0.prototype={
$1(a){var s=this.a.w.a.ee(a),r=s.b!=null,q=r?s.d:s.e
return new A.iu(s.c,r,q,s.f)},
$S:179}
A.w1.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().hA(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().hA(b)
throw A.a(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:181}
A.w_.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.vT.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gW(r)},
$S:52}
A.vU.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bi
s=q.b.z
r=s.length===0?null:B.a.gW(s)
return A.Ir(s,3,q.a.d,r)},
$S:53}
A.vZ.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.vO.prototype={
$0(){return this.a.at.a},
$S:54}
A.vQ.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.vP.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.vY.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.vM.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.vN.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.vV.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.vW.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.vX.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:5}
A.vS.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.vR.prototype={
$0(){return this.a.at.w},
$S:55}
A.w3.prototype={
$0(){return this.a},
$S:56}
A.v4.prototype={}
A.ml.prototype={$iEt:1}
A.m7.prototype={$iDB:1}
A.rG.prototype={
gb5(){var s=this.w
return s==null?A.h(A.j("renderer is not initialized")):s},
hw(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bE)throw A.a(A.j("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.Y)throw A.a(A.j("renderer device is context lost"))
m.e=B.m7
try{m.r=s.hJ()
r=m.b
q=A.ii(a)
p=r.a
if(p.a!=null)A.h(A.j("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.ii(a)
p.d=1
r.b.hv(q)
r=A.E0()
m.w=new A.lf(A.E2(s),r,A.EL(s),A.a1(t.kc),A.a1(t.pw),A.a1(t.Aj))
r=new A.lg()
p=new A.pd(s,r)
q=A.ii(a)
o=p.dj(q,a)
r.hv(q)
p.c=new A.h4(new A.l5(0,q,B.bG),o,B.ah)
m.x=p
m.y=new A.l8(s,A.m(t.N,t.CH))
m.as=a
A.Bb(m)
m.e=B.bF}catch(n){s=m.y
if(s!=null)s.bK()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bE
throw n}return A.zz(t.H)},
l4(a,b){var s,r,q,p,o,n,m=this,l=null
m.kl()
m.bY()
r=B.a.p(m.d,a)
if(!r)throw A.a(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.a(A.j("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gaE(0))A.h(A.w("CameraView.eye must be finite: "+q.q(0),l))
q=r.e
if(!q.gaE(0)||q.gce()<1e-12)A.h(A.w("CameraView.forward must be finite and nonzero: "+q.q(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.h(A.w("CameraView requires 0 < near < far, got "+A.u(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.h(A.w("CameraView.aspect must be finite and > 0: "+A.u(q),l))
if(!r.a.gaE(0)||!r.b.gaE(0)||!r.c.gaE(0))A.h(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.h(A.w("FrameInput.timeSeconds must be finite: "+A.u(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ag)A.h(A.j("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ag
o.c=0
B.a.M(o.a)
s=o
try{r=m.r
if((r==null?A.h(A.j("renderer is not initialized")):r).z)m.b$=m.a.l5()
return s}catch(n){if(o.b!==B.ag)A.h(A.j("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.ia
m.eO()
m.ax=m.at=null
throw n}},
mh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bY()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.a(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ag)A.h(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.lv(l,0,A.fu(m.c,"count",t.S),A.z(l).c).bT(0,!1)
m.b=B.i9
q=k
try{p=A.Gl(a1,r,s,q)
o=p.a.iy()
m=o.gJ().d1(0,new A.rH())
l=m.$ti
n=new A.cD(m,l.i("aQ(1)").a(new A.rI()),l.i("cD<1,aQ>")).bl(0,B.cA,new A.rJ(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcf()
g=g.c.gcf()
e=a1.w
e.a.gcf()
e.c.gcf()
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
return new A.oR(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.jG(s.e)
a1.ax=a1.at=null}},
kl(){var s,r,q,p=this
if(p.e!==B.dG)return
if(p.a.b===B.Y)throw A.a(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.h(A.j("resource library is disposed"))
s.a.ec()
s.c.ec()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.h(A.j("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.h(A.j("GPU resource adapter is not initialized"))
s.c=new A.h4(q.a,s.dj(A.ii(r),r),B.ah)
s=p.y
s.c=null
s.b.M(0)
A.Bb(p)
p.e=B.bF},
bY(){var s=this,r=s.e
if(r!==B.bF)throw A.a(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.Y){s.jw()
s.e=B.dG
throw A.a(A.j("renderer context lost"))}}}
A.rH.prototype={
$1(a){return B.b.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:57}
A.rI.prototype={
$1(a){return t.h6.a(a).b},
$S:58}
A.rJ.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aQ(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:59}
A.mi.prototype={}
A.uD.prototype={
jG(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.i)A.h(A.j(u.k))
r=s.fQ(o)
if(r.b)A.h(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.mi(o))}catch(q){p.dl(o)}},
eO(){var s=this.b$
this.b$=null
if(s!=null)this.dl(s)},
jw(){var s,r,q
this.eO()
s=this.a$
r=J.zJ(s.slice(0),A.z(s).c)
B.a.M(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.dl(r[q].b)},
dl(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fQ(a).a)}catch(r){}}}
A.mp.prototype={}
A.iB.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bQ.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ibf:1}
A.bM.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ibf:1}
A.b0.prototype={}
A.xu.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:60}
A.xv.prototype={
$1(a){return t.E0.a(a).b},
$S:61}
A.xs.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:62}
A.xt.prototype={
$1(a){return t.EH.a(a).b},
$S:63}
A.os.prototype={}
A.or.prototype={}
A.fy.prototype={
gah(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.C(o,n,p),new A.C(r,n,p),new A.C(o,q,p),new A.C(r,q,p),new A.C(o,n,s),new A.C(r,n,s),new A.C(o,q,s),new A.C(r,q,s)],t.k)},
q(a){return"Aabb("+this.a.q(0)+", "+this.b.q(0)+")"}}
A.f_.prototype={}
A.fQ.prototype={
v(){return"FrustumTest."+this.b}}
A.oS.prototype={
hO(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b_
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ib:B.ic}}
A.oT.prototype={
$4(a,b,c,d){var s=new A.C(a,b,c),r=new A.f_(s,d),q=Math.sqrt(s.gce())
return q<1e-9?r:new A.f_(s.ac(0,1/q),d/q)},
$S:64}
A.dv.prototype={
ac(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dv(h)},
hQ(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.C(k,j,i):new A.C(k/h,j/h,i/h)},
e6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.h(A.j("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.u(k)+")"))
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
return new A.dv(h)},
gaE(a){return B.r.a3(this.a,new A.qj())},
q(a){return"Mat4("+A.u(this.a)+")"}}
A.qj.prototype={
$1(a){return isFinite(A.b7(a))},
$S:4}
A.lb.prototype={
q(a){var s=this
return"Quat("+A.u(s.a)+", "+A.u(s.b)+", "+A.u(s.c)+", "+A.u(s.d)+")"}}
A.hg.prototype={
C(){var s=this.a
if(!s.gaE(0))throw A.a(A.w("Transform.translation must be finite: "+s.q(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.a(A.w("Transform.rotation must be finite: "+s.q(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.a(A.w("Transform.scale must be finite and positive: "+A.u(s),null))},
a6(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.zT(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.zT(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
q(a){return"Transform("+this.a.q(0)+", "+this.b.q(0)+", scale="+A.u(this.c)+")"}}
A.C.prototype={
a4(a,b){return new A.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ag(a,b){return new A.C(this.a-b.a,this.b-b.b,this.c-b.c)},
ac(a,b){return new A.C(this.a*b,this.b*b,this.c*b)},
bL(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.C(s*r-q*p,q*o-n*r,n*p-s*o)},
gce(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gce())},
gaE(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaz(){var s=this,r=Math.sqrt(s.gce())
return r<1e-9?B.V:new A.C(s.a/r,s.b/r,s.c/r)},
a7(a,b){if(b==null)return!1
return b instanceof A.C&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.d_(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"Vec3("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.jQ.prototype={
v(){return"AtmosphericParticleAnchor."+this.b}}
A.nm.prototype={}
A.nl.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.a(A.w("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.aB("origin",l.d),new A.aB("halfExtents",s),new A.aB("initialVelocity",l.f),new A.aB("acceleration",l.r)],t.c2)
r.push(new A.aB("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.a(A.w("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.a(A.w("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.a(A.w("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.a(A.w("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.a(A.w("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.a(A.w("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
if(!isFinite(1))throw A.a(A.w("AtmosphericParticleField.particleScale must be finite and > 0",k))},
ev(a,b){var s,r,q,p,o,n,m,l=this
l.C()
s=l.z
if(b>=s)throw A.a(A.b_(b,0,s-1,"particleIndex",null))
r=l.y
q=B.c.R(a.w+l.cG(b,0)*r,r)
switch(l.c.a){case 0:s=B.V
break
case 1:s=a.a.d
break
default:s=null}p=l.e
o=s.a4(0,l.d).a4(0,new A.C((l.cG(b,1)*2-1)*p.a,(l.cG(b,2)*2-1)*p.b,(l.cG(b,3)*2-1)*p.c))
n=l.jx(q)
m=l.ku(l.kM(q))
return new A.hg(o.a4(0,n),m,1)},
iE(a,b){var s,r,q,p,o,n,m,l,k=this
k.C()
for(s=k.z,r=a.a,q=k.a,p=k.b,o=k.cy,n=0;n<s;++n){m=k.ev(b,n)
l=new A.b9(q,p,m,-1,B.aB,B.L,!1,!1,n,o)
if(a.b!==B.ag)A.h(A.j("FrameQueue.submit called outside an active frame"))
m.C()
m=a.c
if(m<r.length)B.a.k(r,m,l)
else B.a.l(r,l);++a.c}return s},
ms(a){var s,r,q,p,o,n,m,l
this.C()
s=A.zy(a.a.c)
for(r=this.z,q=0,p=0;p<r;++p){o=this.ev(a,p).a
n=o.a
m=o.b
l=o.c
if(s.hO(new A.fy(new A.C(n-0.5,m-0.5,l-0.5),new A.C(n+0.5,m+0.5,l+0.5)))!==B.b_)++q}n=r-q
if(r>=0)m=n<0
else m=!0
if(m)A.h(A.w("atmospheric visibility counts must be >= 0",null))
if(q+n!==r)A.h(A.j("atmospheric visibility counts do not reconcile: "+r+" != "+q+" + "+n))
return new A.nm(r,q,n)},
kM(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a4(0,this.f.ag(0,s).ac(0,r))},
jx(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.ac(0,a).a4(0,this.f.ag(0,s).ac(0,(1-q)/r))},
ku(a){var s,r=a.gaz()
if(r.a7(0,B.V))return B.bz
s=B.c.D(B.ap.bL(r),-1,1)
if(s>0.999999)return B.bz
if(s<-0.999999)return A.rm(B.e0,3.141592653589793)
return A.rm(B.ap.bv(r),Math.acos(s))},
cG(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.iO.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hJ.prototype={
gE(){return this.f},
av(a,b){B.a.l(a.a,new A.aA(this.f,B.N,A.c([new A.R(this.x,B.j),new A.R(this.y,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aF(new A.bv(s.e,s.b,s.c,B.z,B.dc,B.d9)),q=A.da(s.d),p=t.n,o=s.r===B.ed?new Float32Array(A.a0(A.c([1/s.Q,0],p))):new Float32Array(A.a0(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lZ(new A.bh(s.f,A.c([new A.R(s.x,B.j),new A.R(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iao:1}
A.lZ.prototype={
aw(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bW(r,a.aq(o.r).b)
A.bm(r,o.a.ai())
A.d9(r,B.X,1,0,0,0)
A.ca(r,o.b.b)
q=t._
p=o.d
if(o.e)A.F0(r,0,q.a(p.$0()))
else A.aG(r,0,q.a(p.$0()))
A.v(r,"uSource",B.x)
A.v(r,"uTexelStep",new A.y(B.an,o.f))
A.by(r,o.c)
s.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.jX.prototype={
gE(){return"bloomComposite"},
av(a,b){B.a.l(a.a,new A.aA("bloomComposite",B.N,A.c([new A.R(this.f,B.j),new A.R(this.r,B.j),new A.R(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="bloomComposite",q=s.a.aF(new A.bv(r,s.b,s.c,B.z,B.ky,B.ke)),p=A.da(s.d),o=s.w,n=A.c([new A.R(s.f,B.j),new A.R(s.r,B.j),new A.R(o,B.k)],t.C)
return A.c([new A.m_(new A.bh(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iao:1}
A.m_.prototype={
aw(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bW(r,a.d0(q.f).b)
A.F1(r,1)
A.bm(r,B.fn)
A.ca(r,q.b.b)
A.aG(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.x)
A.v(r,"uBloomStrength",new A.y(B.e,p))
A.by(r,q.c)
s.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.k9.prototype={
gE(){return"depthPrepass"},
av(a,b){B.a.l(a.a,new A.aA("depthPrepass",B.iv,A.c([new A.R(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="depthPrepass",q=s.a.aF(new A.bv(r,s.b,s.c,B.db,B.da,B.jB))
return A.c([new A.m2(new A.bh(r,A.c([new A.R(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iao:1}
A.m2.prototype={
aw(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bW(a1,a2.aq("sceneDepth").b)
A.bm(a1,d.a.ai())
A.d9(a1,B.aX,1,0,0,0)
A.ca(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.y(B.e,a0.as))
A.v(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.Q,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gF()
A.v(a1,"uViewProjection",new A.y(B.w,new Float32Array(A.a0(a))))
A.v(a1,"uModel",new A.y(B.w,new Float32Array(A.a0(i.c.a6().a))))
A.xr(b,k,!1)
d.kx(b,j.gF().b,p)
h=q.$1(j.gF().a)
i=h.a
if(a1.b!==B.i)A.h(A.j(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.i)A.h(A.j(c))
e=A.f(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.f(o.WebGL2RenderingContext.UNSIGNED_INT):A.f(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bE(g,f)}else{if(a1.b!==B.i)A.h(A.j(c))
m.drawArraysInstanced(A.f(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bE(g,f)}}},
kx(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aG(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aR?0.5:0))
A.v(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.ai()
A.bm(q,r.go?s.eo(!1):s)},
$iad:1,
gF(){return this.a}}
A.iQ.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hQ.prototype={
gE(){return this.f},
av(a,b){B.a.l(a.a,new A.aA(this.f,B.N,A.c([new A.R(this.w,B.j),new A.R(this.x,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aF(new A.bv(s.e,s.b,s.c,B.z,B.dc,B.d9)),q=A.da(s.d),p=t.n,o=s.r===B.ee?new Float32Array(A.a0(A.c([1/s.z,0],p))):new Float32Array(A.a0(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.m3(new A.bh(s.f,A.c([new A.R(s.w,B.j),new A.R(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iao:1}
A.m3.prototype={
aw(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bW(r,a.aq(q.f).b)
A.bm(r,q.a.ai())
A.d9(r,B.X,1,0,0,0)
A.ca(r,q.b.b)
A.aG(r,0,t._.a(q.d.$0()))
A.v(r,"uSource",B.x)
A.v(r,"uTexelStep",new A.y(B.an,q.e))
A.by(r,q.c)
s.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.kd.prototype={
gE(){return"dofComposite"},
av(a,b){var s=this
B.a.l(a.a,new A.aA("dofComposite",B.N,A.c([new A.R(s.z,B.j),new A.R(s.Q,B.j),new A.R(s.as,B.j),new A.R(s.at,B.k)],t.C),!1))},
au(a){var s=this,r="dofComposite",q=s.a.aF(new A.bv(r,s.b,s.c,B.z,B.kw,B.jq)),p=A.da(s.d)
return A.c([new A.m4(new A.bh(r,A.c([new A.R(s.z,B.j),new A.R(s.Q,B.j),new A.R(s.as,B.j),new A.R(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iao:1}
A.m4.prototype={
aw(a){var s,r=this,q=a.aq("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bW(n,q.b)
A.bm(n,r.a.ai())
A.ca(n,r.b.b)
s=t._
A.aG(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.x)
A.aG(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ao)
A.aG(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.e_)
A.v(n,"uNear",new A.y(B.e,o.f))
A.v(n,"uFar",new A.y(B.e,o.r))
A.v(n,"uFocusDistance",new A.y(B.e,r.w))
A.v(n,"uFocusRange",new A.y(B.e,r.x))
A.v(n,"uStrength",new A.y(B.e,a.c.e.d))
A.by(n,r.c)
p.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.kv.prototype={
gE(){return"grade"},
av(a,b){B.a.l(a.a,new A.aA("grade",B.N,A.c([new A.R(this.r,B.j),new A.R(this.w,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aF(new A.bv("grade",s.b,s.c,B.z,B.ku,B.kf)),q=A.da(s.d),p=s.r,o=s.w
return A.c([new A.m9(new A.bh("grade",A.c([new A.R(p,B.j),new A.R(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iao:1}
A.m9.prototype={
aw(a){var s=this,r=a.aq(s.f.a),q=a.b,p=q.a
A.bW(p,a.aq(s.r.a).b)
A.bm(p,s.a.ai())
A.ca(p,s.b.b)
A.aG(p,0,r.b)
A.v(p,"uScene",B.x)
A.aG(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ao)
A.v(p,"uLutSize",new A.y(B.e,s.e))
A.v(p,"uStrength",new A.y(B.e,a.c.e.z))
A.by(p,s.c)
q.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.ia.prototype={
gE(){return"msaaResolve"},
av(a,b){B.a.l(a.a,new A.aA("msaaResolve",B.iw,A.c([new A.R(this.b,B.j),new A.R(this.c,B.k)],t.C),!0))},
au(a){var s=this.b,r=this.c
return A.c([new A.mg(new A.bh("msaaResolve",A.c([new A.R(s,B.j),new A.R(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iao:1}
A.mg.prototype={
aw(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.d0(this.c),j=a.d0(this.d),i=this.b
if(i.b!==B.i)A.h(A.j(u.k))
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
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.NONE)],t.n))}A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.NONE),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.f(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iad:1,
gF(){return this.a}}
A.fB.prototype={}
A.jY.prototype={
aq(a){var s=this.a.h(0,a)
if(s==null)throw A.a(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
d0(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.aq(s)},
$iEs:1}
A.xU.prototype={}
A.il.prototype={
gE(){return"present"},
av(a,b){B.a.l(a.a,new A.aA("present",B.ix,A.c([new A.R(this.f,B.j)],t.C),!1))},
au(a){var s,r=this,q=r.a.aF(new A.bv("present",r.b,r.c,B.z,B.kG,B.jn)),p=A.da(r.d)
r.w=p
s=r.f
return A.c([new A.mm(new A.bh("present",A.c([new A.R(s,B.j)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.b(s.a))
this.w=null}},
$iao:1}
A.mm.prototype={
aw(a){var s,r=this,q=a.d0(r.d),p=a.b,o=p.a
A.bW(o,null)
A.bm(o,r.a.ai())
A.ca(o,r.b.b)
A.by(o,r.c)
A.aG(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.y(B.e,s.a))
A.v(o,"uVignette",new A.y(B.e,s.e))
A.v(o,"uGrain",new A.y(B.e,s.f))
A.v(o,"uOutputEncoding",new A.y(B.e,r.e===B.aY?1:0))
A.v(o,"uToneMap",B.dZ)
p.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.l9.prototype={
gE(){return"ps1Quantize"},
av(a,b){B.a.l(a.a,new A.aA("ps1Quantize",B.N,A.c([new A.R(this.e,B.j),new A.R(this.f,B.k)],t.C),!1))},
au(a){var s=this,r="ps1Quantize",q=s.a.aF(new A.bv(r,s.b,s.c,B.z,B.kA,B.jh)),p=A.da(s.d),o=s.e,n=s.f
return A.c([new A.mn(new A.bh(r,A.c([new A.R(o,B.j),new A.R(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iao:1}
A.mn.prototype={
aw(a){var s=this,r=a.aq(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bW(o,a.aq(s.e.a).b)
A.bm(o,s.a.ai())
A.ca(o,s.b.b)
A.aG(o,0,r.b)
A.v(o,"uScene",B.x)
A.v(o,"uQuantizationBits",new A.y(B.e,p.at))
A.v(o,"uDitherStrength",new A.y(B.e,p.y))
A.by(o,s.c)
q.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.f9.prototype={}
A.lp.prototype={
gE(){return"shadow"},
av(a,b){B.a.l(a.a,new A.aA("shadowCaster",B.iu,A.c([new A.R(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="shadowCaster",q=s.a.aF(new A.bv(r,s.b,s.c,B.db,B.da,B.kd))
return A.c([new A.mq(new A.bh(r,A.c([new A.R(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iao:1}
A.mq.prototype={
aw(a){var s,r,q,p,o=this,n=a.aq("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bW(s,n.b)
A.bm(s,o.a.ai())
A.d9(s,B.aX,1,0,0,0)
return}r=A.Af(l)
o.x.$1(r)
s=m.a
A.bW(s,n.b)
A.bm(s,o.a.ai())
A.d9(s,B.aX,1,0,0,0)
A.ca(s,o.b.b)
A.v(s,"uAlbedo",B.x)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.jy(m,s[p],l,r)},
fH(a,b){var s,r=this.d.$1(b),q=a.a
A.aG(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aR?0.5:0))
s=this.a.ai()
A.bm(q,r.go?s.eo(!1):s)},
jy(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.v(s,"uUseInstances",B.bT)
n.fE(a,b.gF().c,d)
n.fH(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.by(s,q.a)
s=q.b
r=q.c
if(s)a.dO(r,q.d,0)
else a.aJ(r,0)}else if(b instanceof A.dt){p=b.a
if(!p.gF().r)return
if(n.kH(b,c)===B.mP)return
n.fE(a,p.gF().c,d)
A.xr(a,b,!1)
n.fH(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.by(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dP(r,q.d,o,0)
else a.dN(r,0,o)}else throw A.a(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eH(b).q(0),null))},
kH(a,b){return B.mO},
fE(a,b,c){var s=a.a
A.v(s,"uModel",new A.y(B.w,new Float32Array(A.a0(b.a6().a))))
A.v(s,"uLightViewProjection",new A.y(B.w,new Float32Array(A.a0(c.a.a))))},
$iad:1,
gF(){return this.a}}
A.wF.prototype={
$1(a){return this.a.a=a},
$S:51}
A.wG.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:67}
A.lq.prototype={
gE(){return"shadowedWorld"},
av(a,b){var s=this,r=A.c([new A.R(s.db,B.j)],t.C)
if(s.ay)r.push(new A.R(s.dx,B.j))
r.push(new A.R(s.dy,B.k))
B.a.l(a.a,new A.aA("shadowedWorld",B.cS,r,!1))},
au(a){var s=this,r="shadowedWorld",q=s.a.aF(new A.bv(r,s.b,s.c,B.kD,B.kv,B.jb)),p=A.c([new A.R(s.db,B.j)],t.C)
if(s.ay)p.push(new A.R(s.dx,B.j))
p.push(new A.R(s.dy,B.k))
return A.c([new A.mr(new A.bh(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iao:1}
A.mr.prototype={
aw(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.aq("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bW(b1,a4.b)
A.bm(b1,a2.a.ai())
s=a8.a
A.d9(b1,B.cl,1,s.c,s.b,s.a)
A.ca(b1,a2.b.b)
A.v(b1,"uAlbedo",B.x)
A.v(b1,"uNormalMap",B.na)
A.v(b1,"uOrmMap",B.nb)
A.v(b1,"uEmissiveMap",B.nc)
A.v(b1,"uLightmap",B.nd)
s=t._
A.aG(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ao)
r=a7.d
q=t.n
A.v(b1,"uCameraPosition",new A.y(B.o,new Float32Array(A.a0(A.c([r.a,r.b,r.c],q)))))
A.v(b1,"uShadowMapTexelSize",new A.y(B.an,new Float32Array(A.a0(A.c([1/a2.ch,1/a2.CW],q)))))
A.aG(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.e_)
A.v(b1,"uVertexSnapGrid",new A.y(B.e,a9.as))
A.v(b1,"uSceneColorSize",new A.y(B.an,new Float32Array(A.a0(A.c([a2.ax,a2.ay],q)))))
A.v(b1,"uViewProjection",new A.y(B.w,new Float32Array(A.a0(a7.c.a))))
A.v(b1,"uView",new A.y(B.w,new Float32Array(A.a0(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.y(B.w,new Float32Array(A.a0(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.y(B.o,new Float32Array(A.a0(A.c([s.a,s.b,s.c],q)))))
A.v(b1,"uFogStart",new A.y(B.e,a8.c))
A.v(b1,"uFogEnd",new A.y(B.e,a8.d))
s=a8.e
A.v(b1,"uFogHeightFalloff",new A.y(B.e,s==null?0:s))
s=a8.f
A.v(b1,"uFogDensity",new A.y(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.P(r==null?B.bi:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.W
k=o?a3:p.c
if(k==null)k=B.ap
A.v(b1,"uLightPosition",new A.y(B.o,new Float32Array(A.a0(A.c([l.a,l.b,l.c],q)))))
A.v(b1,"uLightDirection",new A.y(B.o,new Float32Array(A.a0(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.Z
A.v(b1,"uLightColor",new A.y(B.o,new Float32Array(A.a0(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.v(b1,"uLightIntensity",new A.y(B.e,r==null?0:r))
A.v(b1,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.W
g=r?a3:i.b
if(g==null)g=B.Z
A.v(b1,"uDirectionalDirection",new A.y(B.o,new Float32Array(A.a0(A.c([h.a,h.b,h.c],q)))))
A.v(b1,"uDirectionalColor",new A.y(B.o,new Float32Array(A.a0(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.y(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.V
c=n?a3:e.c
if(c==null)c=B.Z
m=""+f
A.v(b1,"uPointPosition"+m,new A.y(B.o,new Float32Array(A.a0(A.c([d.a,d.b,d.c],q)))))
A.v(b1,"uPointColor"+m,new A.y(B.o,new Float32Array(A.a0(A.c([c.a,c.b,c.c],q)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a3
r=e==null
d=r?a3:e.b
if(d==null)d=B.V
a=r?a3:e.c
if(a==null)a=B.ap
c=r?a3:e.d
if(c==null)c=B.Z
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.y(B.o,new Float32Array(A.a0(A.c([d.a,d.b,d.c],q)))))
A.v(b1,"uDirectSpotDirection"+n,new A.y(B.o,new Float32Array(A.a0(A.c([a.a,a.b,a.c],q)))))
A.v(b1,"uDirectSpotColor"+n,new A.y(B.o,new Float32Array(A.a0(A.c([c.a,c.b,c.c],q)))))
m=r?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=r?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.y(B.e,m))
m=r?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=r?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
r=r?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.y(B.e,r))}s=o?a3:p.f
A.v(b1,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a3:p.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a3:p.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.y(B.o,new Float32Array(A.a0(A.c([a0.a,a0.b,a0.c],q)))))
A.v(b1,"uAmbientIntensity",new A.y(B.e,a8.w))
A.v(b1,"uRainWetness",new A.y(B.e,a9.w))
for(b1=a6.a,s=b1.length,r=a9.Q,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.fa(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.fa(a5,a6[a1],r)},
fa(a,b,c){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bT)
n.fF(a,b.gF().c)
n.fI(a,b.gF().b,b.gF().e,b.gF().f,c,b.gF().w)
r=n.c.$1(b.gF().a)
A.by(s,r.a)
s=r.b
q=r.c
if(s)a.dO(q,r.d,0)
else a.aJ(q,0)}else if(b instanceof A.dt){p=b.a
n.fF(a,p.gF().c)
A.xr(a,b,!0)
n.fI(a,p.gF().b,p.gF().e,p.gF().f,c,p.gF().w)
r=n.c.$1(p.gF().a)
A.by(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.dP(q,r.d,o,0)
else a.dN(q,0,o)}else throw A.a(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eH(b).q(0),null))},
fI(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aG(o,0,p.a(s.e.$1(q.b)))
A.aG(o,3,p.a(s.f.$1(r)))
A.aG(o,4,p.a(s.r.$1(r)))
A.aG(o,5,p.a(s.w.$1(r)))
A.aG(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.y(B.e,q.fx===B.aR?0.5:0))
A.v(o,"uOpaqueCoverage",new A.y(B.e,c===B.aB?0:1))
A.v(o,"uAffineWarpStrength",new A.y(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.y(B.o,new Float32Array(A.a0(A.c([q.d,q.e,q.f],p)))))
A.v(o,"uEmissiveStrength",new A.y(B.e,q.w))
A.v(o,"uUvScaleOffset",new A.y(B.n9,new Float32Array(A.a0(A.c([q.db,q.dx,0,0],p)))))
A.v(o,"uNormalStrength",new A.y(B.e,1))
A.v(o,"uRoughness",new A.y(B.e,q.at))
A.v(o,"uMetallic",new A.y(B.e,0))
A.v(o,"uClearcoatStrength",new A.y(B.e,0))
A.v(o,"uClearcoatRoughness",new A.y(B.e,0.2))
A.v(o,"uOcclusionStrength",new A.y(B.e,1))
A.v(o,"uLightmapIntensity",new A.y(B.e,0))
A.v(o,"uReceivesShadow",new A.y(B.e,q.id&&f?1:0))
A:{p=r
if(B.aB===c){switch(d.a){case 0:p=B.fp
break
case 1:p=B.fo
break}break A}if(B.M===c||B.fm===c){p=s.a.ai()
break A}}A.bm(o,q.go?p.eo(!1):p)},
fF(a,b){var s=b.a6(),r=a.a
A.v(r,"uModel",new A.y(B.w,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.w,new Float32Array(A.a0(s.e6().a))))},
$iad:1,
gF(){return this.a}}
A.ls.prototype={
gE(){return"ssaoOcclusion"},
av(a,b){B.a.l(a.a,new A.aA("ssaoOcclusion",B.cR,A.c([new A.R(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoOcclusion",q=s.a.aF(new A.bv(r,s.b,s.c,B.z,B.kz,B.jc)),p=A.da(s.d)
return A.c([new A.mu(new A.bh(r,A.c([new A.R(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iao:1}
A.mu.prototype={
aw(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bW(m,a.aq("ssaoRaw").b)
A.bm(m,p.a.ai())
if(n<=0){A.d9(m,B.X,1,1,1,1)
return}A.d9(m,B.X,1,0,0,0)
s=p.e.$0()
A.ca(m,p.b.b)
A.aG(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.x)
A.v(m,"uNear",new A.y(B.e,s.f))
A.v(m,"uFar",new A.y(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.v(m,"uProjScaleX",new A.y(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.v(m,"uProjScaleY",new A.y(B.e,r[5]))
A.v(m,"uRadius",new A.y(B.e,p.f))
A.v(m,"uStrength",new A.y(B.e,n))
A.by(m,p.c)
o.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.lr.prototype={
gE(){return"ssaoBlur"},
av(a,b){B.a.l(a.a,new A.aA("ssaoBlur",B.cR,A.c([new A.R(this.y,B.j),new A.R(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoBlur",q=s.a.aF(new A.bv(r,s.b,s.c,B.z,B.kp,B.kh)),p=A.da(s.d)
return A.c([new A.mt(new A.bh(r,A.c([new A.R(s.y,B.j),new A.R(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iao:1}
A.mt.prototype={
aw(a){var s,r,q=this,p=a.b,o=p.a
A.bW(o,a.aq("ssaoBlurred").b)
A.bm(o,q.a.ai())
if(a.c.e.c<=0){A.d9(o,B.X,1,1,1,1)
return}A.d9(o,B.X,1,0,0,0)
s=q.f.$0()
A.ca(o,q.b.b)
r=t._
A.aG(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.x)
A.aG(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ao)
A.v(o,"uTexelSize",new A.y(B.an,new Float32Array(A.a0(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.y(B.e,s.f))
A.v(o,"uFar",new A.y(B.e,s.r))
A.by(o,q.c)
p.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.lH.prototype={
gE(){return"vhs"},
av(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aA("vhs",B.N,A.c([new A.R(this.r,B.j),new A.R(s,B.J),new A.R(s,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aF(new A.bv("vhs",s.b,s.c,B.z,B.ks,B.jj)),q=A.da(s.d),p=s.r,o=s.w
return A.c([new A.mC(new A.bh("vhs",A.c([new A.R(p,B.j),new A.R(o,B.J),new A.R(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iao:1}
A.mC.prototype={
aw(a){var s,r=this,q=a.aq(r.f.a),p=a.aq(r.r.a),o=a.b,n=a.c.e,m=n.db,l=n.ay
if(m)l*=0.5
s=m?0:n.cy
m=o.a
A.bW(m,p.b)
A.bm(m,r.a.ai())
A.ca(m,r.b.b)
A.aG(m,0,q.b)
A.v(m,"uScene",B.x)
A.aG(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ao)
A.v(m,"uTime",new A.y(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.y(B.e,n.ax))
A.v(m,"uTrackingWeight",new A.y(B.e,l))
A.v(m,"uNoiseWeight",new A.y(B.e,n.ch))
A.v(m,"uHeadSwitchWeight",new A.y(B.e,n.CW))
A.v(m,"uDropoutWeight",new A.y(B.e,n.cx))
A.v(m,"uGhostWeight",new A.y(B.e,s))
A.by(m,r.c)
o.aJ(3,0)},
$iad:1,
gF(){return this.a}}
A.iu.prototype={}
A.lS.prototype={
gE(){return"world"},
av(a,b){B.a.l(a.a,new A.aA("worldOpaqueTransparent",B.cS,A.c([new A.R(this.e,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aF(new A.bv("safeWorld",s.b,s.c,B.kF,B.z,B.ja)),q=s.e
return A.c([new A.mF(new A.bh("worldOpaqueTransparent",A.c([new A.R(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iao:1}
A.mF.prototype={
aw(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bW(j,a.aq(n.d).b)
A.bm(j,n.a.ai())
s=k.a
A.d9(j,B.cl,1,s.c,s.b,s.a)
A.ca(j,n.b.b)
A.v(j,"uViewProjection",new A.y(B.w,new Float32Array(A.a0(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.W
s=t.n
A.v(j,"uLightDir",new A.y(B.o,new Float32Array(A.a0(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.y(B.o,new Float32Array(A.a0(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.fV(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.fV(m,l[o])},
fV(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dt){s=b.a
n.fW(a,s.gF().c)
A.xr(a,b,!0)
r=n.c.$1(s.gF().a)
A.by(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dP(p,r.d,o,0)
else a.dN(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bT)
n.fW(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.by(q,r.a)
q=r.b
p=r.c
if(q)a.dO(p,r.d,0)
else a.aJ(p,0)}else throw A.a(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eH(b).q(0),null))},
fW(a,b){var s=b.a6(),r=a.a
A.v(r,"uModel",new A.y(B.w,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.w,new Float32Array(A.a0(s.e6().a))))},
$iad:1,
gF(){return this.a}}
A.o7.prototype={
cn(a){var s,r,q
a.C()
s=A.a1(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.Q
else q=r===0?B.by:B.I
return new A.ek(q,s)},
i3(a){var s,r=this.cn(a).a
A:{if(B.Q===r){s=B.dB
break A}if(B.I===r){s=B.dA
break A}s=B.aj
break A}return s}}
A.ks.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hW.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hZ.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.ku.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.kr.prototype={}
A.kt.prototype={}
A.eS.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hY.prototype={}
A.hX.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.f8.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.iz.prototype={
q(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d6.prototype={
v(){return"UniformType."+this.b}}
A.y.prototype={}
A.fF.prototype={
v(){return"ClearMask."+this.b}}
A.ka.prototype={
aJ(a,b){var s=this.a
if(s.b!==B.i)A.h(A.j(u.k))
s.a.drawArrays(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bE(a,1)},
dN(a,b,c){var s=this.a
if(s.b!==B.i)A.h(A.j(u.k))
s.a.drawArraysInstanced(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bE(a,c)},
dO(a,b,c){var s,r,q=this.a
if(q.b!==B.i)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bE(a,1)},
dP(a,b,c,d){var s,r,q=this.a
if(q.b!==B.i)A.h(A.j(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aU(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bE(a,c)},
$iDk:1}
A.fT.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.h4.prototype={
hA(a){var s=this.b.h(0,a)
if(s==null)throw A.a(A.j("resource is not in candidate: "+a))
return s}}
A.pd.prototype={
gn(){var s=this.c
if(s==null)throw A.a(A.j("GPU resource adapter is not initialized"))
return s},
cT(a){var s,r,q,p,o,n=this
if(n.e)A.h(A.j("GPU resource adapter is disposed"))
if(n.c==null)throw A.a(A.j("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.a(A.j("GPU resource candidate is already open"))
s=A.ii(a)
p=n.b
r=p.cT(s)
try{q=new A.h4(r,n.dj(s,a),B.ah)
n.d=q
return q}catch(o){p.eg(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.a(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dm(s.b)
r.b.a_()
r.c=null
r.e=!0},
dj(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("G<1>")
s=new A.G(k,i.a(new A.pe()),j)
for(h=s,g=J.P(h.a),h=new A.U(g,h.b,h.$ti.i("U<1>")),f=a.a;h.m();){r=g.gn()
q=A.Aw(f,a.f8(r,a5))
J.eG(a3,q)
J.bc(a2,r,q)}e=A.H(new A.G(k,i.a(new A.pf()),j),j.i("n.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.C3(J.CR(o,11))
if(i){h=J.aV(a2,"sceneColor")
h.toString
J.bc(a2,o,h)}else{h=n
if(typeof h!=="number")return h.oa()
if(h>=2){h=J.aV(a2,"sceneColor#1")
h.toString
J.bc(a2,o,h)}else{m=A.Aw(f,a.f8(o,a5))
J.eG(a3,m)
J.bc(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.z(a0).i("bF<1>"),a0=new A.bF(a0,k),a0=new A.an(a0,a0.gt(0),k.i("an<X.E>")),j=a.a,i=t.V,k=k.i("X.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.y2(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
f8(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hY(s,s,1,B.b2,!0)}if(a==="sceneDepth")return new A.hY(n,m,1,B.b2,!0)
r=B.b.S(a,"ssao")||B.b.S(a,"bloomBlur")||B.b.S(a,"dofBlur")
q=r?B.d.aa(n+1,2):n
p=r?B.d.aa(m+1,2):m
s=a==="sceneColor"
o=s||B.b.S(a,"sceneColor#")
s=s?b.d:1
return new A.hY(q,p,s,o?B.cP:B.ir,o)},
dm(a){var s,r,q,p,o,n=A.eW(t.mf.a(a).gaf(),t._)
for(n=A.fm(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.y2(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
eV(a){if(this.d!==a||a.c!==B.ah)throw A.a(A.j("GPU resource candidate is not open"))}}
A.pe.prototype={
$1(a){return!B.b.S(A.q(a),"sceneColor#")},
$S:3}
A.pf.prototype={
$1(a){return B.b.S(A.q(a),"sceneColor#")},
$S:3}
A.hl.prototype={
v(){return"_SlotState."+this.b}}
A.eu.prototype={
saZ(a){this.c=this.$ti.i("1?").a(a)}}
A.d1.prototype={
aB(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eu(B.aP,n.i("eu<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.od
p.saZ(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bI(a){return this.aB(a,null)},
V(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.a(A.ee(B.cW,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.ee(B.cX,a))
s=q.b
if(s===B.aQ||s===B.aP)throw A.a(A.ee(B.aD,a))},
bJ(a){var s,r,q=this.$ti
q.c.a(a)
this.V(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
ek(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.V(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].saZ(b)},
aG(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.a(A.ee(B.cW,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.ee(B.cX,a))
r=q.b
if(r===B.aQ||r===B.aP)throw A.a(A.ee(B.iH,a))
q.b=B.aQ
q.saZ(null)
B.a.l(p.c,s);++p.e},
bO(){return new A.bX(this.mO(),this.$ti.i("bX<+(1,2)>"))},
mO(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aQ||j===B.aP){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aB(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jV.prototype={
v(){return"BlendEquation."+this.b}}
A.eL.prototype={
v(){return"BlendFactor."+this.b}}
A.k5.prototype={
v(){return"CullFace."+this.b}}
A.k8.prototype={
v(){return"DepthFunc."+this.b}}
A.fO.prototype={
eo(a){var s=this
return A.zv(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bi.prototype={
v(){return"StateField."+this.b}}
A.uh.prototype={
m3(a){var s,r=this.a
if(r==null)return A.h_(B.k3,t.qL)
s=A.a1(t.qL)
if(r.a!==a.a)s.l(0,B.bL)
if(r.b!==a.b)s.l(0,B.bM)
if(r.c!==a.c)s.l(0,B.bN)
if(r.d!==a.d)s.l(0,B.bO)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bP)
if(r.r!==a.r)s.l(0,B.bQ)
if(r.w!==a.w)s.l(0,B.bR)
if(r.x!==a.x)s.l(0,B.bS)
return s}}
A.dN.prototype={$ids:1}
A.jg.prototype={}
A.jf.prototype={}
A.mE.prototype={}
A.lQ.prototype={
iZ(a){var s=this,r=A.b(s.a.canvas)
s.c=A.W(new A.ue(s))
s.d=A.W(new A.uf(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hJ(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bZ(A.f(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bZ(A.f(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bZ(A.f(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bZ(A.f(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bZ(A.f(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fq(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.hE(e.getParameter(A.f(k.WebGL2RenderingContext.RENDERER)))
m=A.hE(e.getParameter(A.f(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.ro("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bZ(a){var s=A.hE(this.a.getParameter(a))
return typeof s=="number"?B.c.aA(s):0},
fq(a){var s=A.hE(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iDI:1}
A.ue.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.Y},
$S:1}
A.uf.prototype={
$1(a){this.a.b=B.i},
$S:1}
A.vf.prototype={
l5(){var s,r=this
if(r.b!==B.i)A.h(A.j(u.k))
s=r.w?A.L(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dN(new A.mE(s))},
fQ(a){var s=a.a
if(!(s instanceof A.mE))throw A.a(A.al(a,"query","is not a GPU timer query"))
return s}}
A.mD.prototype={}
A.ud.prototype={}
A.ug.prototype={
lV(a){var s=A.L(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.ud(A.EW(s))}}
A.kc.prototype={
A(){var s=this
return A.J(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jR.prototype={
gmT(){var s=this.CW
return new A.am(s,A.o(s).i("am<2>")).bl(0,0,new A.nC(),t.i)},
iJ(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.L(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.p()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.p()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.p()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.p()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.p()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.p()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.p()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.L(r[k].connect(i))
r=j.z
r===$&&A.p()
A.b(r.gain).value=1
q=j.Q
q===$&&A.p()
A.b(q.gain).value=0.35
A.L(o.connect(r))
A.L(n.connect(r))
A.L(p.connect(r))
p=j.as
p===$&&A.p()
A.L(r.connect(p))
A.L(p.connect(q))
A.L(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.b8()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.b8()
j.k3=p
A.L(q.connect(p))
A.L(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.L(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.b8()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.b8()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.b8()
j.p1=r
A.L(p.connect(q))
A.L(i.connect(A.b(s.destination)))
j.eS()},
eS(){var s,r=this,q=r.k4
q===$&&A.p()
q.disconnect()
s=r.p1
s===$&&A.p()
s.disconnect()
if(r.p2){A.L(q.connect(s,0))
A.L(q.connect(s,1))
q=r.ok
q===$&&A.p()
A.L(s.connect(q,0,0))
A.L(s.connect(q,0,1))}else{s=r.ok
s===$&&A.p()
A.L(q.connect(s,0,0))
A.L(q.connect(s,1,1))}},
cj(){var s=this.a
if(A.q(s.state)==="suspended")A.b(s.resume())},
fK(a){var s,r,q=this
if(B.b.S(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.kx.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.p()
break A}if("bed"===r){s=q.e
s===$&&A.p()
break A}if("mid"===r){s=q.r
s===$&&A.p()
break A}if("air"===r){s=q.x
s===$&&A.p()
break A}s=q.w
s===$&&A.p()
break A}return s},
jJ(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aH(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.ap()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cS(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.ap()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.L(r.connect(q))
A.L(q.connect(p.fK(a)))
r.onended=A.W(new A.nE(r,q))
r.start()},
hG(a){return this.cS(a,1)},
hH(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ax.ap()*0.12)
q=A.b(s.createGain())
A.b(q.gain).value=c
p=A.b(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.b(p.positionX).value=b.a
A.b(p.positionY).value=b.b
A.b(p.positionZ).value=b.c
o=A.b(s.createBiquadFilter())
o.type="lowpass"
A.b(o.frequency).value=2e4
n=A.b(s.createGain())
A.b(n.gain).value=1
m=h==null?0:h
if(g!=null&&f!=null){A.b(o.frequency).value=f
A.b(n.gain).value=Math.pow(10,g/20)}else{s=j.ay!=null
if(s){s=j.ay
s.toString
l=j.f2(j.b.hF(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.hm(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.W(new A.nD(j,o))
A.L(r.connect(q))
A.L(q.connect(n))
A.L(n.connect(o))
A.L(o.connect(p))
A.L(p.connect(j.fK(a)))
r.start()},
nm(a,b,c,d){return this.hH(a,b,c,1,d,null,null,null)},
f2(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aC(r,q,p)},
eJ(a){var s,r,q,p,o=this
if(o.cx)return
s=o.at.h(0,a)
if(s==null)return
o.cx=!0
r=o.a
q=A.b(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.b(r.createGain())
A.b(p.gain).value=0.6
A.L(q.connect(p))
r=o.e
r===$&&A.p()
A.L(p.connect(r))
q.onended=A.W(new A.nF(o,q,p))
q.start()
o.cy=q},
d5(a){if(this.p2===a)return
this.p2=a
this.eS()},
ie(a){var s,r,q=this
q.d5(a.b===B.c6)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aS?1:0.55
r=q.c
r===$&&A.p()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.b(s.gain).value=0.35*q.p4},
bp(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.D(c==null?q.fr:c,0,1)
q.fx=B.c.D(f==null?q.fx:f,0,1)
q.fy=B.c.D(b==null?q.fy:b,0,1)
q.go=B.c.D(a==null?q.go:a,0,1)
q.id=B.c.D(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.p()
A.b(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.p()
A.b(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.p()
A.b(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.p()
A.b(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.p()
A.b(s.gain).value=0.4*q.go
s=q.e
s===$&&A.p()
A.b(s.gain).value=0.12*q.id
s=q.y
s===$&&A.p()
A.b(s.gain).value=q.fx
s=q.c
s===$&&A.p()
s=A.b(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
eB(a){var s=null
return this.bp(s,s,s,s,a,s)},
ia(a){var s=null
return this.bp(s,s,a,s,s,s)},
ic(a){var s=null
return this.bp(s,s,s,s,s,a)},
i9(a){var s=null
return this.bp(s,a,s,s,s,s)},
i8(a){var s=null
return this.bp(a,s,s,s,s,s)},
ib(a){var s=null
return this.bp(s,s,s,a,s,s)},
i7(a){if(this.ay===a)return
this.ay=a
this.bF()},
bF(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.ck(p,g)
m=n==null?i.f2(h.hF(p,g)):new A.aC(n.c,n.d,n.e)
l=A.a6(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.a6(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.a6(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.D(m.c,0,1)}}}
A.nC.prototype={
$2(a,b){return Math.max(A.b7(a),t.jS.a(b).r)},
$S:69}
A.nB.prototype={
$1(a){return this.hW(t.q.a(a))},
hW(a){var s=0,r=A.aL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aM(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a4(A.aD(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a4(A.aD(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a4(A.aD(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.u(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$$1,r)},
$S:70}
A.nE.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.nD.prototype={
$1(a){var s=this.a.CW.a1(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.nF.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.hm.prototype={}
A.jS.prototype={
v(){return"AudioCategory."+this.b}}
A.nr.prototype={
iL(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.a(B.i3)
if(!B.a.a3(A.c([d.a,d.b,d.c],t.n),new A.ns()))throw A.a(B.h5)},
gE(){return this.a}}
A.ns.prototype={
$1(a){return isFinite(A.b7(a))},
$S:4}
A.n7.prototype={
iI(a,b){if(this.a.length===0)throw A.a(B.fU)
if(!B.a.a3(A.c([a.a,a.b,a.c],t.n),new A.n8()))throw A.a(B.hb)}}
A.n8.prototype={
$1(a){return isFinite(A.b7(a))},
$S:4}
A.hH.prototype={
C(){var s=t.n
if(B.a.L(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.n9()))throw A.a(B.hy)
s=B.a.L(A.c([0,0.55,1],s),new A.na())
if(s)throw A.a(B.hT)},
ck(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.aC(-1.5,2e4,0)
if(a.ay)return new A.aC(-28,320,1)
return new A.aC(-12,1100,0.55)},
nU(a){return this.ck(a,null)}}
A.n9.prototype={
$1(a){return!isFinite(A.b7(a))},
$S:4}
A.na.prototype={
$1(a){A.b7(a)
return a<0||a>1},
$S:4}
A.nn.prototype={
iK(a){var s=A.o(a)
if(new A.aa(a,s.i("aa<1>")).L(0,new A.np())||new A.am(a,s.i("am<2>")).L(0,new A.nq()))throw A.a(B.i_)}}
A.np.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.nq.prototype={
$1(a){var s
t.a.a(a)
s=J.aN(a)
return s.gO(a)||s.L(a,new A.no())},
$S:71}
A.no.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.xF.prototype={}
A.nz.prototype={}
A.nt.prototype={
iM(a,b,c){var s
for(s=this.b.gaf(),s=s.gu(s);s.m();)s.gn().C()},
hR(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.a(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.a(A.j("audio listener room missing: "+a0))
r=this.kv(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.ce
e=f.ck(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.t)(o),++i)s.push(o[i].a)
o=B.c.D(l,-60,0)
m=B.d.D(k,120,2e4)
g=B.c.D(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.T(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.h(B.hS)
return new A.nz(s,b,o,m,g,n,c)},
ck(a,b){return this.hR(a,b,B.br)},
kv(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.nY
s=t.N
r=A.J([a0,0],s,t.i)
q=A.J([a0,B.a_],s,t.Es)
p=A.aF([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.W,l=p.$ti.c;p.a!==0;){k=A.H(p,l)
B.a.U(k,new A.nu(r))
j=B.a.gW(k)
p.a1(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.iM(s,!0)}i=o.aO(j)
h=A.H(i,i.$ti.i("n.E"))
B.a.U(h,new A.nv())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.ci(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.ce:d).nU(f)
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
p.l(0,e)}}}return B.nX}}
A.nu.prototype={
$2(a,b){var s,r,q
A.q(a)
A.q(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:72}
A.nv.prototype={
$2(a,b){var s=t.W
return B.b.G(s.a(a).a,s.a(b).a)},
$S:73}
A.iM.prototype={}
A.fC.prototype={}
A.o4.prototype={
hy(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.CK().bv(q).gaz()
p.d=q
p.c=p.b.bv(q).gaz()
p.a=a}}
A.oO.prototype={}
A.kA.prototype={
cY(a){if(this.at)return
A.pV(a,"requestPointerLock",t.X)},
ey(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bO(r,r.r,r.e,A.o(r).i("bO<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a1(q)
for(m=J.P(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.nw(p,n)}this.be()},
d9(a){var s,r,q,p,o,n,m=this
if(m.ch.d9(a))for(s=m.CW.aN("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.l(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.l(0,n)
break}}},
nn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.P(t.ik.b(c)?c:new A.b4(c,A.z(c).i("b4<1,ah?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.q(r.mapping)!=="standard")break A
c=A.q(r.id)
q=A.q(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.P(t.dd.b(n)?n:new A.b4(n,A.z(n).i("b4<1,D>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.P(t.nx.b(d)?d:new A.b4(d,A.z(d).i("b4<1,ah>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a6(r.value))}s=new A.lt(!0,c,q,o,p)
break}}d=s==null
m=A.F9(d?B.mV:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.L(c.aN(e),q.gar(q))
q=f.r
q.jF(A.o(q).i("l(1)").a(new A.pO(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.m:g,h)){if(i.e4())n.l(0,h)}else n.l(0,h)}}f.e=A.h_(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.L(c.aN(e),l.gar(l))){d=r.a(f.c)
d=!B.a.L(c.aN(e),d.gar(d))}}if(d)i.e5()},
jX(a){var s=this
A.b(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.q(a.code)))if(B.a.p(s.CW.aN("interact"),A.q(a.code))){if(s.ch.e4())s.d.l(0,A.q(a.code))}else s.d.l(0,A.q(a.code))},
jZ(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a1(0,A.q(a.code))
r=this.CW
if(B.a.p(r.aN(q),A.q(a.code))){t.Q.a(s)
s=!B.a.L(r.aN(q),s.gar(s))}else s=!1
if(s)this.ch.e5()},
k6(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.f(a.button)
if(r.c.l(0,s))if(B.a.p(r.CW.aN("interact"),s)){if(r.ch.e4())r.d.l(0,s)}else r.d.l(0,s)},
ka(a){var s,r="interact",q="Mouse"+A.f(A.b(a).button),p=this.c
p.a1(0,q)
s=this.CW
if(B.a.p(s.aN(r),q)){t.Q.a(p)
p=!B.a.L(s.aN(r),p.gar(p))}else p=!1
if(p)this.ch.e5()},
kc(a){var s
A.b(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
k8(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fo(a,"movementX")
s.as=s.as+s.fo(a,"movementY")},
k0(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fo(a,b){var s=A.B3(a[b])
if(s==null)s=null
return s==null?0:s},
cw(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.eW(n.c,t.N)
for(r=n.e,r=A.fm(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.l(0,o)}t.Q.a(s)
return B.a.L(n.CW.aN(a),s.gar(s))},
be(){var s=this
s.c.M(0)
s.d.M(0)
s.f.M(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.ed()}}
A.pO.prototype={
$1(a){return!this.a.p(0,A.q(a))},
$S:3}
A.pN.prototype={
aN(a){var s=this.a.h(0,a)
return s==null?B.m:s},
nw(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.N(a))return
r=t.N
q=A.a1(r)
for(p=A.fm(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bi(a,b){var s,r,q
t.Q.a(b)
for(s=this.aN(a),r=s.length,q=0;q<r;++q)if(b.a1(0,s[q]))return!0
return!1}}
A.pR.prototype={
e4(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
e5(){this.c=this.b=!1
this.d=0},
d9(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
ed(){this.c=this.b=!1
this.d=0}}
A.b3.prototype={
gE(){return this.a}}
A.qa.prototype={}
A.q7.prototype={
nq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a1(h)
r=A.H(b,t.J)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.a(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.fe(n,i.d,a,b,i.a,j,m)
i.fe(l,i.e,a,c,i.b,j,k)
return new A.qa(n,l,j)},
fe(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.z(d)
s=k.i("F<1,+effectiveScore,light,score(D,b3,D)>")
r=A.H(new A.F(d,k.i("+effectiveScore,light,score(D,b3,D)(1)").a(new A.q8(this,c,b)),s),s.i("X.E"))
B.a.U(r,new A.q9())
q=A.a1(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.M(0)
b.I(0,q)}}
A.q8.prototype={
$1(a){var s,r
t.J.a(a)
s=a.c.ag(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.j3(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:75}
A.q9.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:76}
A.ot.prototype={
dG(a,b){var s,r,q,p,o,n,m,l=this
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
A.qg.prototype={
ix(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dG(b,c)},
kV(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.R(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d5.prototype={
cW(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.r.d6(s,0,m,l)
n.a=s}r=b.ag(0,a).bv(d.ag(0,a)).gaz()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.iD(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.iD(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.iD(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.iD(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.iD(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.iD(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aM(a,b,c,d,e){return this.cW(a,b,c,d,e,1,1)}}
A.k.prototype={
a4(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ag(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
ac(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
bL(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaz(){var s=this,r=s.gt(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.lt.prototype={
gE(){return this.b}}
A.lT.prototype={}
A.nY.prototype={
o5(a){var s,r,q,p,o,n=B.f.a8(a.A(),null)
this.a.hb(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.ak(s.getItem("quarantine.save.active"))
q=A.ak(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
nr(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.ak(s.getItem("quarantine.save.active"))
q=A.ak(s.getItem("quarantine.save.previous"))
p=this.f7(r,a)
if(p!=null)return new A.f6(p,null)
o=this.f7(q,a)
if(o!=null)return new A.f6(o,"recovered previous save")
if(r==null)return B.mp
return B.mo}catch(n){return B.mn}},
f7(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hb(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.A)return null
else throw q}}}
A.ke.prototype={
iP(a,b,c,d,e){if(this.a.length===0)throw A.a(B.hO)
if(this.b<0)throw A.a(B.h6)},
A(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.aX(A.J(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.ci.prototype={
v(){return"EndingKind."+this.b}}
A.oD.prototype={
gam(){return this.a}}
A.fP.prototype={
A(){var s=t.N
return A.J(["kind",this.a.b],s,s)}}
A.oG.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:77}
A.bz.prototype={}
A.l1.prototype={
A(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.J(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
mI(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ag(0,new A.k(0,1.3499999999999999,0))
return!new A.jZ(s,s.a4(0,new A.k(0,1.2000000000000002,0))).cN(a,r)}}
A.rh.prototype={
A(){return A.vk(this.a)}}
A.hb.prototype={
A(){return A.J(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.rF.prototype={
hb(a){var s,r,q,p,o,n,m,l=B.f.an(a,null),k=t.f
if(!k.b(l))throw A.a(B.i2)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=q.h(0,"version")
if(A.aS(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.O("unsupported save version "+A.u(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.hh)
k=A.aZ(n,s,r)
return A.Ac(A.aZ(m,s,r),k,2)}}
A.f6.prototype={}
A.eR.prototype={
v(){return"GameSessionEventType."+this.b}}
A.kp.prototype={
gam(){return this.c},
gaU(){return this.d}}
A.p1.prototype={
gam(){return this.a},
gaU(){return this.b}}
A.p0.prototype={
gad(){var s=this.d
return new A.p1(s.a,s.b,this.e.b.a)},
ghI(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.J(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.J(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.J(["entryCount",m.e.b.a],k,t.S)
p=A.zF(m.c).A()
o=m.r
n=o.c
return new A.rh(A.vk(A.J(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.J(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.A()],k,t.z)))},
kZ(a,b){if(!B.a.L(a.f,new A.p2(b)))return!1
this.z.kX(a,b)
return!0},
kY(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.my(n))return!1
m=m.b
m.k(0,n,"true")
m.k(0,n+".consumer",a.b)
m.k(0,"last-authored-event",o)
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.b.bx(q,"=")
if(p<=0||p===q.length-1)continue
m.k(0,B.b.H(q,0,p),B.b.aQ(q,p+1))}return!0},
mu(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("am<2>")
q=A.H(new A.am(s,r),r.i("n.E"))
B.a.U(q,new A.p3())
if(q.length===0)return null
s=A.z(q)
r=s.i("G<1>")
p=A.H(new A.G(q,s.i("l(1)").a(new A.p4()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dj(a),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a_.E>")),r=r.i("a_.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.R(n,o.length)]
s=l.c
k=new A.cQ(a,l.a,s.length-1,B.a.ga0(s).q(0))
j.k(0,a,k)
return k},
kU(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.a(A.al(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cC(B.id)}if(n<a)this.cC(B.ie)},
iA(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d8(a)&&s.iz(b)},
ns(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.e9){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
iw(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Dh(j,A.ai(i.d,h).length)
if(a===B.dQ)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.z(r)
A.Dg(j,new A.G(r,q.i("l(1)").a(new A.p5(k)),q.i("G<1>")).gt(0))
r=k.f
q=r.b
if(B.a.p(B.jg,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aH(j.a/1*3)
B.a.l(r.r,new A.hd(q.a,a,b))
m=r.a
A.Ds(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.eG(7)
r.c=16
r.d=6
r.f=!1
m.ih(B.jO)
s.r.ll(o,c)
l=B.c.aH(j.b/1*6)
if(l>0)r.d8(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.o(i).i("am<2>")).L(0,new A.p6())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cC(B.ih)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cC(B.ig)},
cC(a){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.kp(s.a,s.b))
B.a.l(r.x,A.Di(A.Gj(a),r.b,r.y-1))}}
A.p2.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:15}
A.p3.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.p4.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:22}
A.p5.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.tx().it(this.a.c,a.a)},
$S:81}
A.p6.prototype={
$1(a){return t.g.a(a).e},
$S:22}
A.jT.prototype={
em(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.z(c),a=b.i("e(1)")
b=b.i("F<1,e>")
A.jD(new A.F(c,a.a(new A.nM()),b),"level")
s=e.e
r=A.z(s)
q=r.i("e(1)")
r=r.i("F<1,e>")
A.jD(new A.F(s,q.a(new A.nN()),r),"room")
p=e.f
o=A.z(p)
A.jD(new A.F(p,o.i("e(1)").a(new A.nO()),o.i("F<1,e>")),"portal")
o=e.r
n=A.z(o)
A.jD(new A.F(o,n.i("e(1)").a(new A.nP()),n.i("F<1,e>")),"stair")
m=new A.F(c,a.a(new A.nQ()),b).b6(0)
l=new A.F(s,q.a(new A.nR()),r).b6(0)
r=A.m(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.t)(p),++k){j=p[k]
r.k(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.t)(s),++k){i=s[k]
b=i.b
if(!m.p(0,b))throw A.a(A.O("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.z(b)
q=i.a
A.jD(new A.F(b,a.i("e(1)").a(new A.nS()),a.i("F<1,e>")),"window in "+q)
a=i.f
A.jD(a,"portal reference in "+q)
for(b=a.length,h=0;h<a.length;a.length===b||(0,A.t)(a),++h){g=a[h]
j=r.h(0,g)
if(j==null)throw A.a(A.O("rooms."+q+".portalIds references unknown portal "+g,d,d))
if(!(j.b===q||j.c===q))throw A.a(A.O("rooms."+q+".portalIds references "+g+", which does not touch the room",d,d))}}for(c=p.length,k=0;k<p.length;p.length===c||(0,A.t)(p),++k){j=p[k]
b=j.b
if(b!=="outside"&&!l.p(0,b))throw A.a(A.O("portals."+j.a+".a references "+b,d,d))
a=j.c
if(a!=="outside"&&!l.p(0,a))throw A.a(A.O("portals."+j.a+".b references "+a,d,d))
if(b===a)throw A.a(A.O("portals."+j.a+" has identical endpoints",d,d))}for(c=o.length,k=0;k<o.length;o.length===c||(0,A.t)(o),++k){f=o[k]
b=f.b
j=r.h(0,b)
if(j==null)throw A.a(A.O("stairs."+f.a+".portalId references unknown portal "+b,d,d))
if(!j.z)throw A.a(A.O("stairs."+f.a+".portalId "+b+" is not marked stair",d,d))}},
el(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.a(A.j("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.a(A.j("authored house source changed: "+a1))
a1=b.e
s=a1.length
if(s!==a2.b.length||b.f.length!==a2.c.length)throw A.a(A.j("authored/runtime room or portal count mismatch"))
for(r=t.fW,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.a(A.j("authored room missing at runtime: "+n))
l=o.c
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.j(n+" origin.x mismatch: "+A.u(g)+" != "+A.u(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.j(n+" origin.y mismatch: "+A.u(j)+" != "+A.u(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.j(n+" origin.z mismatch: "+A.u(l)+" != "+A.u(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.j(n+" size.x mismatch: "+A.u(g)+" != "+A.u(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.j(n+" size.y mismatch: "+A.u(j)+" != "+A.u(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.j(n+" size.z mismatch: "+A.u(l)+" != "+A.u(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.a(A.j("window count mismatch for "+n))
for(n=A.z(j),i=n.i("l(1)"),n=n.i("G<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bB(new A.G(j,i.a(new A.nL(e)),n),r)
if(d==null)throw A.a(A.j("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.h(A.j(c+" offset mismatch: "+A.u(h)+" != "+A.u(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.h(A.j(c+a+A.u(h)+" != "+A.u(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.h(A.j(c+a0+A.u(h)+" != "+A.u(g)))}}for(a1=b.f,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.a(A.j("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.a(A.j("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.h(A.j(q+a+A.u(n)+" != "+A.u(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.h(A.j(q+a0+A.u(n)+" != "+A.u(l)))
if(o.y!=m.at)throw A.a(A.j("door model mismatch for "+q))}a1=b.r
s=a2.d
if(a1.length!==s.length||B.a.gbb(a1).b!==B.a.gbb(s).b)throw A.a(A.j("stair manifest mismatch"))}}
A.nG.prototype={
$1(a){var s=A.jy(a,"level"),r=A.cd(s,"id")
A.cd(s,"kind")
A.ez(s,"floorY")
return new A.dY(r)},
$S:82}
A.nH.prototype={
$1(a){return A.CZ(a,this.a)},
$S:83}
A.nI.prototype={
$1(a){var s=this.a,r=A.jy(a,"portal"),q=A.cd(r,"id"),p=A.cd(r,"a"),o=A.cd(r,"b"),n=A.yp(r,"facingA"),m=A.yp(r,"facingB"),l=A.ez(r,"offsetA"),k=A.ez(r,"offsetB"),j=A.ez(r,"width"),i=A.ez(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.q(r.h(0,"doorKit")):null
return new A.dZ(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.a8(r.h(0,"stair"),!0),J.a8(r.h(0,"exterior"),!0),!J.a8(r.h(0,"open"),!1),J.a8(r.h(0,"sticks"),!0))},
$S:84}
A.nJ.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.jy(a,"stair")
return new A.e0(A.cd(p,"id"),A.cd(p,"portalId"),A.H4(p.h(0,s),s),A.mX(p.h(0,"min"),"min"),A.mX(p.h(0,"max"),"max"),A.mX(p.h(0,r),r),A.mX(p.h(0,q),q))},
$S:85}
A.nK.prototype={
$1(a){return typeof a=="string"?a:A.dQ("exterior cell")},
$S:35}
A.nM.prototype={
$1(a){return t.mD.a(a).a},
$S:36}
A.nN.prototype={
$1(a){return t.bJ.a(a).a},
$S:37}
A.nO.prototype={
$1(a){return t.lT.a(a).a},
$S:89}
A.nP.prototype={
$1(a){return t.gI.a(a).a},
$S:90}
A.nQ.prototype={
$1(a){return t.mD.a(a).a},
$S:36}
A.nR.prototype={
$1(a){return t.bJ.a(a).a},
$S:37}
A.nS.prototype={
$1(a){return t.ya.a(a).a},
$S:91}
A.nL.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:23}
A.wE.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fy
break A}if("first"===a){s=B.fz
break A}s=B.fA
break A}return s},
$S:93}
A.dY.prototype={
gE(){return this.a}}
A.e_.prototype={
gE(){return this.a}}
A.nT.prototype={
$1(a){var s=this.a,r=A.jy(a,"window")
return new A.e1(A.cd(r,"id"),A.yp(r,"facing"),A.ez(r,"offset")*s,A.ez(r,"sill")*s,A.ez(r,"width")*s,A.ez(r,"height")*s,J.a8(r.h(0,"frosted"),!0))},
$S:94}
A.nU.prototype={
$1(a){return typeof a=="string"?a:A.dQ("portal id")},
$S:35}
A.e1.prototype={
gE(){return this.a}}
A.dZ.prototype={
gE(){return this.a}}
A.e0.prototype={
gE(){return this.a}}
A.wh.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.wB.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.jZ.prototype={
nN(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.z(s)
q=new A.G(s,r.i("l(1)").a(new A.o8(e)),r.i("G<1>"))
p=!q.gu(0).m()?null:q.gW(0)
if(p==null){n.d=null
return}if(!(n.cA(b,p.f)&&a==="hall"))o=n.cA(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lU(p,B.c.D(d,0,1))},
mU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fn(g,c,d)
s=h.jA(a,b,c,d)
if(s!=null){h.d=s
return h.fn(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.h4(Math.sqrt(r*r+q*q)/0.08))
o=d.ac(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.kG(a,n,m,o)
l=l||j.b
m=j.a
i=h.np(a,n)
n=i==null?n:i}h.bh(m)
return new A.kP(m,n)},
jA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cA(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cA(c,l)){l=j<0||o
h=l}if(i||h)return new A.lU(m,i?0:1)}return null},
fn(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ag(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.Ao(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bh(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kP(n,k)},
cA(a,b){var s=a.ag(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
kG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cI(c,!1)
s=h.cF(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cF(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cI(p.a,!1)
n=c.a4(0,new A.k(0,0.35,0))
h.bh(n)
if(!h.cN(a,b)){m=h.cF(a,b,n,new A.k(g,0,0))
l=h.cF(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bh(i)
if(h.cN(a,b))break}h.bh(k)
return new A.cI(k,!1)}}if(o)return new A.cI(r,!0)
if(!p.b)return new A.cI(p.a,!0)
h.bh(c)
return new A.cI(c,!0)},
cF(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cI(c,!1)
s=c.a4(0,d)
this.bh(s)
if(this.cN(a,b)){this.bh(c)
return new A.cI(c,!0)}return new A.cI(s,!1)},
bh(a){var s=a.ag(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a4(0,new A.k(0,1.2000000000000002,0))},
cN(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aK(m)
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
return!this.kD(a,m,s)},
np(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aK(k)
for(r=k.a,q=a.aO(r),p=J.P(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>"));q.m();){o=p.gn()
n=o.ci(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fU(k,o,s)&&this.js(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
kD(a,b,c){var s,r,q
for(s=a.aO(b.a),r=J.P(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fU(b,q,c))return!0}return!1},
fU(a,b,c){var s,r,q,p=a.a,o=b.b0(p),n=b.aL(p)
p=o===B.u||o===B.p
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
js(a,b,c){var s,r=this
switch(b.b0(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sl3(a){this.a=t.a7.a(a)}}
A.o8.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:95}
A.kP.prototype={}
A.cI.prototype={}
A.lU.prototype={}
A.i0.prototype={
gam(){return this.a}}
A.pv.prototype={
ll(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.O,r)
s=B.O[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
iu(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.O,q)
p=B.O[q]
if(p.b===a)r+=p.c}return r},
iv(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.O,q)
p=B.O[q]
if(p.b===a)r+=p.d}return r},
A(){return A.J(["landedCount",this.b],t.N,t.z)}}
A.a3.prototype={}
A.kh.prototype={
gmL(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a3(A.c([r,q,p,o,n,m],t.n),new A.oI())&&o>=r&&n>=q&&m>=p}}
A.oI.prototype={
$1(a){return isFinite(A.b7(a))},
$S:4}
A.kx.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.R(s,3)!==0}else s=!0
if(s)throw A.a(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.a(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gmL())throw A.a(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.L(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.px()))throw A.a(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.a(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.a(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.px.prototype={
$1(a){return!isFinite(A.b7(a))},
$S:4}
A.pw.prototype={
B(a,b,c,d,e,f,g){var s=this
s.bD(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bD(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bD(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bD(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bD(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bD(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a3(a,b,c,m,n,o,0,0,p),r=new A.a3(g,h,i,m,n,o,1,1,p)
this.al(s,new A.a3(d,e,f,m,n,o,1,0,p),r)
this.al(s,r,new A.a3(j,k,l,m,n,o,0,1,p))},
al(a,b,c){var s=this,r=s.b
B.a.l(r,s.du(a))
B.a.l(r,s.du(b))
B.a.l(r,s.du(c))},
du(a){var s,r,q=B.a.T(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.a(A.j("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
l8(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.a(A.j("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.kx(A.ai(g,t.hl),new Uint16Array(A.a0(this.b)),new A.kh(s,r,q,p,o,n))
h.C()
return h}}
A.ki.prototype={}
A.xw.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ak.p(0,s))A.h(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:96}
A.wu.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:97}
A.db.prototype={
o4(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iX(A.Iz(new A.kx(i,new Uint16Array(A.a0(s)),A.G1(i))),l.a,l.b,l.c,A.c([],k))}}
A.iX.prototype={}
A.eO.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.kj.prototype={
lf(a){var s
switch(a.a){case 0:s=A.aF(["front","street","opposite-house"],t.N)
break
case 1:s=A.aF(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aF(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aF(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aF(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
lg(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cv
break A}if("kitchen"===a||"cellar"===a){s=B.fv
break A}if("bathroom"===a){s=B.fw
break A}if("spare-room"===a){s=B.fx
break A}s=B.cv
break A}return this.lf(s)},
hl(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bX(this.mo(d.i("e(0)").a(a),b,c,d),d.i("bX<0>"))},
mo(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$hl(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a3(0,B.ak.gar(B.ak)))throw A.a(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bO(l,l.r,l.e,r.$ti.i("bO<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ak.p(0,j))throw A.a(A.j("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.er.prototype={
h7(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.w5.prototype={
$1(a){var s=this
return t.xT.a(a).h7(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:50}
A.w4.prototype={
$1(a){return t.xT.a(a).h7(0,(this.a+this.b)*0.5,this.c)},
$S:50}
A.dl.prototype={
v(){return"FocusKind."+this.b}}
A.eb.prototype={
gE(){return this.b}}
A.rC.prototype={}
A.vg.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:99}
A.wr.prototype={
$1(a){return B.d.D(B.c.aH(a*this.a),0,255)},
$S:100}
A.eq.prototype={}
A.pt.prototype={
mB(){var s,r,q,p,o,n,m=this
m.jI()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.a(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.a(A.j("authored portal endpoint missing: "+o.a))}},
jI(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.N(n))throw A.a(A.j("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.N(n))throw A.a(A.j("duplicate portal "+n))
q.k(0,n,m)}},
aK(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.iu(q),s.b+r.iv(q),s.c)},
aO(a){var s=this.c,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.pK(a)),r.i("G<1>"))},
no(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.a(A.al(a,"roomId","not a portal endpoint"))
r=this.aK(o)
q=b.aL(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b0(a).a){case 0:s=new A.k(s.a+q,p,s.c)
break
case 2:s=new A.k(s.a+q,p,s.c+r.c)
break
case 1:s=new A.k(s.a+r.a,p,s.c+q)
break
case 3:s=new A.k(s.a,p,s.c+q)
break
default:s=null}return s},
hF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a_
s=A.c([new A.aB(a,B.a_)],t.nR)
r=A.aF([a],t.N)
for(q=this.e,p=t.W;s.length!==0;){o=B.a.nv(s,0)
n=o.a
m=o.b
for(l=this.aO(n),k=J.P(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>"));l.m();){j=k.gn()
i=j.ci(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.H(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.H(m,p)
h.push(j)
B.a.l(s,new A.aB(i,h))}}}return B.a_}}
A.pK.prototype={
$1(a){var s
t.W.a(a)
s=this.a
return a.b===s||a.c===s},
$S:101}
A.oH.prototype={}
A.tx.prototype={
it(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a3(s,new A.ty())}else s=!1
return s}}
A.ty.prototype={
$1(a){return t.fW.a(a).w},
$S:23}
A.py.prototype={
nl(a){var s=this.e,r=A.z(s)
return new A.G(s,r.i("l(1)").a(new A.pB(a)),r.i("G<1>"))},
c2(a){return B.a.b1(this.d,new A.pz(a),new A.pA(a))},
el(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.a(A.j("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.a(A.j("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.a(A.j("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a1(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.a(A.j("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.a(A.j("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aF(["production","proxy","invisible-anchor"],s).p(0,l))throw A.a(A.j("invalid inventory asset status "+m+": "+l))}j=A.a1(s)
i=A.a1(s)
h=A.a1(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.a(A.j("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.a(A.j(a7+m+" references "+l))
n=a6.c2(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.CH()
if(!e.b.test(k))throw A.a(A.j("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.a(A.j("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.a(A.j("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.a(A.j("duplicate inventory socket "+l+":"+e))
l=g.f
e=l.a
d=e.a*a8
c=e.b*a8
e=e.c*a8
b=n.r
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
a4=g.hN(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.a(A.j(a7+m+" escapes "+f.a))}}}
A.pB.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:102}
A.pz.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:103}
A.pA.prototype={
$0(){return A.h(A.j("inventory asset missing: "+this.a))},
$S:7}
A.cX.prototype={
gE(){return this.a}}
A.cA.prototype={
hN(a,b){var s=this.f.c.b*b,r=a.r
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.pU.prototype={}
A.pS.prototype={}
A.wA.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.pT.prototype={
A(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("aa<1>")
n=A.H(new A.aa(o,n),n.i("n.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
ef(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.a(B.fP)
s=t.X
r=A.aZ(a,s,s)
s=this.a
s.M(0)
for(q=new A.M(r,A.o(r).i("M<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aS(o)||o<0)throw A.a(B.h8)
s.k(0,n,o)}}}
A.dy.prototype={}
A.pC.prototype={
o2(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fm(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.t)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aK(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.k(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.k(a*a3,a0*a3,a1*a3)}else a4=new A.k(0,-1,0)
B.a.l(s,new A.dy(new A.k(d,c,e),a4,16760952,3.8,2.1*this.kt(k)))}}B.a.U(s,new A.pD(a6))
return A.lv(s,0,A.fu(4,"count",t.S),t.A_).bS(0)},
kt(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.pD.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.ag(0,s).gt(0),b.a.ag(0,s).gt(0))},
$S:105}
A.ea.prototype={
v(){return"Floor."+this.b}}
A.e9.prototype={
v(){return"Facing."+this.b}}
A.ff.prototype={
sis(a){this.w=A.Q(a)},
gE(){return this.a}}
A.c4.prototype={
ci(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b0(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.a(A.al(a,"roomId","not an endpoint of "+s.a))},
aL(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.a(A.al(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.kK.prototype={
gE(){return this.a}}
A.fa.prototype={
gE(){return this.a}}
A.f5.prototype={
gE(){return this.a}}
A.pF.prototype={
mf(a){return B.a.b1(this.c,new A.pG(a),new A.pH(a))},
o_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.a(A.j("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.a(A.j("soundscape source changed: "+f))
f=t.N
s=A.a1(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.a(A.j("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.a(A.j("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.a(A.j("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.a(A.j("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaf().L(0,new A.pI()))throw A.a(A.j("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.a(A.j("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.a(A.j("sound emitter "+l+" escapes "+j.a))}}}
A.pG.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:106}
A.pH.prototype={
$0(){return A.h(A.j("sound emitter missing: "+this.a))},
$S:7}
A.pI.prototype={
$1(a){return B.b.b7(A.q(a)).length===0},
$S:3}
A.cW.prototype={
gE(){return this.a}}
A.pu.prototype={
c1(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.al(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.jV}q=A.c([],t.Fm)
p=B.c.aS(r)+1
o=B.c.aS(b)
for(n=p;n<=o;++n){m=B.d.R(n,24)
B.a.l(q,new A.eU("tick",m))
if(B.d.R(m,3)===0){B.a.l(q,new A.eU("cuckoo",m))
B.a.l(q,new A.eU("bell",m))}if(B.d.R(m,6)===0)B.a.l(q,new A.eU("chime",m))}l.b=b
return q}}
A.eU.prototype={
gaU(){return this.b}}
A.pE.prototype={
c1(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.al(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.jU}q=A.c([],t.op)
for(p=B.c.aS(r)+1;p<=B.c.aS(b);++p){o=B.d.R(p,24)
n=B.d.R(o,4)
if(n===2)B.a.l(q,B.iK)
if(B.d.R(o,3)===1)B.a.l(q,B.iM)
if(B.d.R(o,8)===5)B.a.l(q,B.iP)
if(B.d.R(o,5)===0)B.a.l(q,B.iL)
if(B.d.R(o,7)===3)B.a.l(q,B.iQ)
if(n===1)B.a.l(q,B.iN)
if(B.d.R(o,6)===4)B.a.l(q,B.iO)}m.b=b
return q}}
A.cV.prototype={}
A.wz.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.pJ.prototype={
A(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.J(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.J(["lit",o.a,"examined",o.b],m,r))}return A.J(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
l0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a1(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a1(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a1(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.yI(new A.aa(o,A.o(o).i("aa<1>")),d)){d=f.b
if(A.yI(new A.aa(d,A.o(d).i("aa<1>")),r)){d=f.c
e=!A.yI(new A.aa(d,A.o(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.a(B.hC)
e=f.d
if(e<0||e>2)A.h(B.fX)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.t)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.t)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.t)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.t)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.ik.prototype={
A(){return A.J(["open",this.a,"locked",this.b],t.N,t.y)}}
A.i7.prototype={
A(){return A.J(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bt.prototype={
gE(){return this.a}}
A.oC.prototype={
$1(a){return this.a.p(0,A.q(a))},
$S:3}
A.ed.prototype={
v(){return"Hand."+this.b}}
A.ub.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
eF(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kJ.prototype={
A(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.A[r]
o.k(0,q,s.h(0,q))}return A.J(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
q(a){return new A.F(B.A,t.oI.a(new A.qd(this)),t.jT).T(0," \xb7 ")}}
A.qc.prototype={
$2(a,b){return new A.N(A.q(a),A.q(b),t.q)},
$S:107}
A.qd.prototype={
$1(a){return this.a.a.h(0,A.q(a))},
$S:108}
A.bZ.prototype={
A(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].A())
s=p.r
s=s==null?null:s.A()
return A.J(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gam(){return this.b}}
A.pX.prototype={
c5(a){t.G.a(a)
return a.a===5&&B.a.a3(B.A,new A.q3(this,a))},
eR(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c5(b))return null
s=this.e++
r=new A.bZ(s,a,A.c([A.qb(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dM(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c5(b))return!1
B.a.l(s.c,A.qb(b,c,B.aC))
return!0},
kT(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c5(b))return!1
s.r=A.qb(b,0,B.cV)
return!0},
ih(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.M(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.N(p)&&!B.a.p(s,p))B.a.l(s,p)}},
o1(a){var s
if(!this.b.N(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.l(s,a)
return!0},
A(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.H(n,A.o(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ac(r,r.r,r.e,A.o(r).i("ac<2>"));r.m();)s.push(r.d.A())
return A.J(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.q3.prototype={
$1(a){var s
A.q(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.hI.prototype={
A(){var s,r=this,q=A.m(t.N,t.X)
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
A.nV.prototype={
cn(a){var s,r,q=a==null?null:B.b.b7(a).toLowerCase()
if(q==null||q.length===0)return B.ew
if(q==="pixeldart")return B.ev
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hI(B.aJ,!1,!0,r,s,s?r:null)}}
A.im.prototype={}
A.ra.prototype={
A(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gaf(),s=s.gu(s),r=t.N;s.m();){q=s.gn()
p.push(A.J(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.J(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.wq.prototype={
$1(a){A.q(a)
return a.length!==0&&a!==".."},
$S:3}
A.io.prototype={}
A.l6.prototype={}
A.rc.prototype={
$1(a){return t.zU.a(a).f},
$S:19}
A.rd.prototype={
$1(a){return t.zU.a(a).f},
$S:19}
A.r5.prototype={}
A.r4.prototype={
ghc(){var s,r,q="pixeldart",p=this.b,o=p.aC
if(o){s=p.w
s===$&&A.p()
s=s.a.b}else s="safe"
p=A.A8(q,o?p.glc():B.ki,!1,s)
r=p
if(r==null)r=A.A8(q,A.c([],t.s),!1,"safe")
p=A.A7(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
eK(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bD){if(k.aC){s=k.d
s===$&&A.p()
s=s.a.b===B.Y}else s=!1
s=!s
if(s){m.d=B.R;++k.hg
j=B.R}if(j===B.bD)return}if(j!==B.R)A.h(A.j(l))
B.f.a8(A.J(["backend","pixeldart","interpolation",0,"facts",A.vk(a.a.a)],t.N,t.X),null)
j=k.aC
if(j){s=k.d
s===$&&A.p()
s=s.a.b===B.Y}else s=!1
if(s){if(m.d!==B.R)A.h(A.j(l))
m.d=B.bD
return}if(!j)A.h(A.j("Pixeldart runtime is not initialized"))
j=k.rx
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dv(j)
j=$.zc()
s=j.b
q=j.c
p=A.xR(k.b/k.c,q,j.a,s)
q=new A.fD(r,p,p.ac(0,r),B.V,B.nf,s,q,k.b/k.c)
j=q}o=new A.oQ(j,k.ry,k.to,k.ml++,k.e0)
n=new A.tB()
$.z7()
j=$.rk.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.p()
s=k.f
s===$&&A.p()
k.kC(j.l4(s,o),o)
k.dZ=k.e.mh()
j=$.rk.$0()
n.b=j
k.e_=n.gme()/1000},
hp(a){if(this.d!==B.R)A.h(A.j("pixeldart backend is not ready"))
B.f.a8(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.r6.prototype={
ld(a,b){var s,r,q,p,o,n,m
a.C()
s=B.cf.cn(a)
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
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.l_.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.r7.prototype={
A(){var s=this
return A.J(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.r8.prototype={
h6(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.a(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.Q===s){r=new A.fo(1080,1920)
break A}if(B.I===s){r=new A.fo(720,1280)
break A}r=new A.fo(540,960)
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
r=this.eT(B.c.aH(p*m),320,a5)
q=this.eT(B.c.aH(q*m),180,a4)
l=s===B.Q
k=s===B.I
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
break E}g=a0==="linear"?B.f9:B.aY
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fk
break F}if("errors"===b){c=B.cn
break F}c=B.fl
break F}return new A.it(a1,r,q,h,g,i,p,f,e,d,c)},
eT(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.h5.prototype={}
A.r9.prototype={}
A.rb.prototype={
cP(a,b,c,d){return this.mP(a,t.zL.a(b),c,d)},
mP(a,b,c,d){var s=0,r=A.aL(t.c_),q,p,o,n,m
var $async$cP=A.aM(function(e,f){if(e===1)return A.aI(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a4(B.eX.cO(new A.qI(d,b),B.kI),$async$cP)
case 3:p=new o.io(n,m,f)
A.A_(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cP,r)}}
A.re.prototype={}
A.rf.prototype={
cg(a,b,c){return this.mQ(a,t.xJ.a(b),t.tX.a(c))},
mQ(a,b,c){var s=0,r=A.aL(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cg=A.aM(function(d,e){if(d===1)return A.aI(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.gY(),o=o.gu(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gn()
l=p.h(0,m)
if(l==null)l=A.h(A.j("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a4(b.$1(l.c),$async$cg)
case 5:k=i.E4(h.a(g.an(e,null)))
m=l.a
if(k.b!==m)throw A.a(A.O("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.a(A.O("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a4(B.f_.cP(m,new A.rg(c,l),l.b,k),$async$cg)
case 6:i.l(h,e)
s=3
break
case 4:q=new A.l6(A.A_(j))
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cg,r)}}
A.rg.prototype={
$1(a){return this.a.$2(this.b.a,A.q(a))},
$S:109}
A.i6.prototype={
gm6(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.rn.prototype={
nY(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.y=B.b9
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.y=B.b9
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.y=new A.i6(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.ap()*0.1,0.9+s.ap()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.ap()*0.15
p=(0.6+s.ap()*2.8)*1000
l.x=p
l.e=p/343
o=s.ap()*3.141592653589793*2
n=0.28+s.ap()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.y=new A.i6(!0,B.c.D(0.6+b*0.6,0,1),0.82+s.ap()*0.1,0.9+s.ap()*0.08,1,l.f,l.r,l.w,l.x)
l.b=16-b*11+s.ap()*6}}}
A.ld.prototype={
v(){return"RendererBackendKind."+this.b}}
A.h8.prototype={
v(){return"RendererBackendState."+this.b}}
A.rA.prototype={}
A.le.prototype={
gE(){return this.a}}
A.rz.prototype={
iU(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.a(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.a(A.w("renderer provenance values must be non-empty",null))}},
A(){var s,r,q,p=this,o=A.m(t.N,t.z)
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
A.rB.prototype={
cZ(a,b){if(a<=0||b<=0)throw A.a(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
hu(a,b){var s,r,q,p,o
for(s=A.ai(this.a.d,t.rO),r=A.z(s).i("bF<1>"),s=new A.bF(s,r),s=new A.an(s,s.gt(0),r.i("an<X.E>")),r=r.i("X.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.to.prototype={
l_(a){var s,r,q,p,o,n,m,l,k=this.a
k.M(0)
s=a.w
s===$&&A.p()
r=A.z(s)
q=r.i("l(1)").a(new A.tp())
s=B.a.gu(s)
r=new A.U(s,q,r.i("U<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gn()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.k(0,n,A.J(["requested",l,"effective",o],q,p))}}}
A.tp.prototype={
$1(a){return t.r.a(a).Q===B.t},
$S:8}
A.lo.prototype={
v(){return"ShaderDebugMode."+this.b},
gm5(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.iA.prototype={
v(){return"ShaderTuningAvailability."+this.b}}
A.dE.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.co.prototype={
gmq(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.ae(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.ae(r,2)
else return B.c.ae(r,3)}},
gdQ(){var s,r,q=this
if(q.Q!==B.t)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.c.ae(r,1)
if(s>=0.01)return B.c.ae(r,2)
return B.c.ae(r,3)},
gE(){return this.a}}
A.tq.prototype={
gbm(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.ai,p)
s=B.ai[p]
p=this.w
p===$&&A.p()
r=A.z(p)
q=r.i("G<1>")
p=A.H(new A.G(p,r.i("l(1)").a(new A.tv(s)),q),q.i("n.E"))
return p},
gbH(){var s,r=this.gbm(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mA(){var s,r
if(this.b===4)return
else{s=this.gbH()
r=s==null?null:s.Q===B.t
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.c.D(s.y+s.w,s.f,s.r)}},
m0(){var s,r
if(this.b===4)return
else{s=this.gbH()
r=s==null?null:s.Q===B.t
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.c.D(s.y-s.w,s.f,s.r)}},
nz(){var s,r,q,p,o
if(this.b===4)this.e=B.aM
else for(s=this.gbm(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
nx(){var s,r,q,p
this.e=B.aM
s=this.w
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
nG(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.a
o=d.p(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.t:B.dP
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aM},
m2(){var s,r,q,p=this.w
p===$&&A.p()
s=A.z(p)
s=new A.G(p,s.i("l(1)").a(new A.tr()),s.i("G<1>")).gt(0)
r=A.z(p)
r=new A.G(p,r.i("l(1)").a(new A.ts()),r.i("G<1>")).gt(0)
p=this.b
if(!(p>=0&&p<5))return A.d(B.ai,p)
p=B.ai[p]
q=this.gbH()
q=q==null?null:q.a
return A.J(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
nT(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.p()
j=A.H(j,t.r)
B.a.U(j,new A.tw())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.t)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.t)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.J(["id",m.a,"requested",k,"effective",l],p,o))}return A.J(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
a9(a){var s,r,q=this.w
q===$&&A.p()
s=A.z(q)
r=A.bB(new A.G(q,s.i("l(1)").a(new A.tu(a)),s.i("G<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
er(a){var s,r,q=this.w
q===$&&A.p()
s=A.z(q)
r=A.bB(new A.G(q,s.i("l(1)").a(new A.tt(a)),s.i("G<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.tv.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:8}
A.tr.prototype={
$1(a){return t.r.a(a).Q===B.t},
$S:8}
A.ts.prototype={
$1(a){return t.r.a(a).Q!==B.t},
$S:8}
A.tw.prototype={
$2(a,b){var s=t.r
return B.b.G(s.a(a).a,s.a(b).a)},
$S:111}
A.tu.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.tt.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.bS.prototype={
v(){return"SleepQuality."+this.b}}
A.bH.prototype={
v(){return"SleepLocation."+this.b}}
A.hd.prototype={
gam(){return this.a}}
A.ou.prototype={
d8(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
iz(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
A(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.J(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.J(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.ov.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:112}
A.ow.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:113}
A.kB.prototype={
v(){return"InteractionType."+this.b}}
A.fh.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.ui.prototype={}
A.fg.prototype={}
A.k2.prototype={}
A.pL.prototype={}
A.pP.prototype={
eu(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.U(p,new A.pQ())
return p},
lk(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.nW
s=t.N
r=A.a1(s)
q=A.a1(s)
for(s=n.gY(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.ga0(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.fg(B.aO,r)
s=r.a
o=B.a.ga0(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.ga0(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.fg(B.ec,r)
return new A.fg(B.c0,r)},
ki(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.k2(e,!1,B.nV,null)
s=p.d===c
r=this.lk(p,d)
q.o1(e)
return new A.k2(e,s,r,r.a===B.aO&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga0(p.c).q(0)+'".':null)},
lU(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aO)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.pL(B.a.ga0(s.c).q(0)+" but "+A.u(a.f))}}
A.pQ.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:16}
A.cn.prototype={
v(){return"RuptureStep."+this.b}}
A.rD.prototype={}
A.d2.prototype={}
A.rE.prototype={
geH(){var s=B.bs.h(0,this.a)
return s==null?0:s},
iD(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.d5
r=A.ys(b)
s=q.c
B.a.M(s)
B.a.I(s,r)
B.a.M(q.d)
q.a=B.aK
q.b=0
q.e=!1
return A.c([B.f2],t.xB)},
dG(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.a(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.d5
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.bs.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a4)l.kI(s)
p=l.b
o=B.bs.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d2())
if(q===B.a4){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.f1)}else{p=q.a+1
if(!(p<7))return A.d(B.d4,p)
l.a=B.d4[p]
l.b=0
B.a.l(s,new A.d2())}}}return A.ai(s,t.F3)},
A(){var s=this,r=t.N
return A.J(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
kI(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aS(l.b/l.geH()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.az(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.az(s,!1,r)
o.$flags=3
n=o
o=A.az(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.d2())}}}
A.kq.prototype={
geL(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
glW(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
eG(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.O("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
hM(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.O("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.fe.prototype={
A(){var s=this
return A.J(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)},
gam(){return this.a}}
A.uc.prototype={
hm(a){var s,r
if(a<1||a>this.b.length)throw A.a(A.b_(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.w6.prototype={
$0(){var s,r,q=this.a,p=q===2||q===5||q===8||q===11||q===14||q===16||q===18||q===19||q===20
if(p){s=(this.b^q*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
r=B.c.D(B.c.D(0.25+0.65*Math.pow(Math.sin(q*3.141592653589793/7),2)*(0.6+0.4*(q/21)),0.2,1)+(((s^s>>>16)&255)/255-0.5)*0.08,0.2,0.98)
if(q===20)r=0.98}else r=0
return new A.fe(q,p,A.BW(B.c.ae(r,2)),A.BW(B.c.ae(12-(q-1)*0.11000000000000001,2)))},
$S:114}
A.eJ.prototype={
v(){return"AuthoredEventConsumer."+this.b}}
A.oZ.prototype={
o0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.HQ(s[q].b)},
mz(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dj(a.a+":"+a.c),q=t.E,r=new A.an(r,r.gt(0),q.i("an<a_.E>")),q=q.i("a_.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.c.aH((l+(k-l)*(s/2147483647))*60)
n=B.c.h4(l*60)
m=B.c.aS(k*60)
return(n<=m?B.d.D(o,n,m):B.d.D(o,0,1439))/60},
mk(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
lb(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.p_.prototype={
$2(a,b){var s,r=B.d.G(a.gam(),b.gam())
if(r!==0)return r
s=B.c.G(a.gaU(),b.gaU())
return s!==0?s:J.zf(a.gE(),b.gE())},
$S:40}
A.ko.prototype={
c1(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.mk(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
if(s.mz(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
gm1(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.X(s)
return s},
A(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.X(s)
return A.J(["delivered",s],t.N,t.z)}}
A.oY.prototype={
$1(a){return this.a.lb(A.q(a))!=null},
$S:3}
A.qJ.prototype={
aT(a,b){var s=this.b
if(s.N(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
my(a){return this.aT(a,null)},
kX(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
A(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("M<1,2>")
k=A.H(new A.M(k,j),j.i("n.E"))
B.a.U(k,new A.qL())
j=t.N
k=A.xQ(k,j,j)
s=this.b
r=A.o(s).i("M<1,2>")
s=A.H(new A.M(s,r),r.i("n.E"))
B.a.U(s,new A.qM())
s=A.xQ(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("M<1,2>")
q=A.H(new A.M(q,p),p.i("n.E"))
B.a.U(q,new A.qN())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.J(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.J(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.qL.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:25}
A.qM.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:25}
A.qN.prototype={
$2(a,b){var s=t.gJ
return B.b.G(s.a(a).a,s.a(b).a)},
$S:117}
A.cQ.prototype={
A(){var s=this
return A.J(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bD.prototype={
A(){var s=this
return A.J(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.r2.prototype={
eq(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aT("ashworth.compact","accepted"))B.a.l(r,B.lw)
if(q.aT(s,"taken"))B.a.l(r,B.lA)
else if(q.aT(s,"left"))B.a.l(r,B.lx)
if(q.aT("sylvia.certificate","granted"))B.a.l(r,B.lz)
if(q.aT("residue.coal","cellar"))B.a.l(r,B.lv)
if(q.aT("telegram.08","read"))B.a.l(r,B.lu)
if(q.aT("truth.shawl","home"))B.a.l(r,B.lt)
if(q.aT("sowerby.paraffin","received"))B.a.l(r,B.ly)
if(q.aT("inspector.proclamation","acknowledged"))B.a.l(r,B.ls)
return r},
hZ(a){var s=this.eq(),r=A.z(s),q=r.i("G<1>")
s=A.H(new A.G(s,r.i("l(1)").a(new A.r3(a)),q),q.i("n.E"))
return s}}
A.r3.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:41}
A.tD.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hf(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.kN(q,r.b))}s=A.hf(e.r)
q=A.hf(e.w)
p=A.hf(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.M(n,A.o(n).i("M<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.P(l.b);i.m();){h=i.gn()
j.push(A.J(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.M(m,A.o(m).i("M<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.A())}b=A.m(c,b)
for(m=e.ax,m=new A.M(m,A.o(m).i("M<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.A())}return A.J(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
kN(a,b){var s,r=A.hf(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.hf(q.bo(0,new A.tE(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gZ(s))r.k(0,"_ambient",A.hf(s.bo(0,new A.tF(),t.S,t.z)))
return r}}
A.tE.prototype={
$2(a,b){return new A.N(A.f(a),t.BX.a(b).A(),t.pr)},
$S:119}
A.tF.prototype={
$2(a,b){return new A.N(A.f(a),t.vw.a(b).A(),t.pr)},
$S:120}
A.fd.prototype={
A(){return A.J(["hour",this.a,"order",this.b],t.N,t.S)},
gaU(){return this.a}}
A.fc.prototype={
A(){return A.J(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaU(){return this.a}}
A.iK.prototype={
A(){var s=t.N
return A.J(["field",this.a,"value",this.b],s,s)}}
A.lP.prototype={
A(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].A())
return A.J(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gam(){return this.c}}
A.f3.prototype={
A(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gZ(s))q.k(0,"effects",s)
return q},
gE(){return this.a}}
A.d8.prototype={
A(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gZ(s))q.k(0,"when",s)
return q},
gE(){return this.a}}
A.tC.prototype={}
A.ix.prototype={
gE(){return this.a},
gam(){return this.c},
gaU(){return this.d}}
A.rK.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.rL.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.O("screenplay event "+a+" is invalid",null,null))
return s},
$S:26}
A.ll.prototype={
gE(){return this.a},
gam(){return this.b}}
A.li.prototype={}
A.lj.prototype={
gE(){return this.a}}
A.lk.prototype={
gE(){return this.a}}
A.tG.prototype={
by(){var s=0,r=A.aL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$by=A.aM(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.a4(A.aD(A.b(A.b(i.window).fetch("res/text.json")),h),$async$by)
case 6:n=a1
g=t.N
s=7
return A.a4(A.aD(A.b(n.text()),g),$async$by)
case 7:m=a1
l=A.I2(m)
f=J.aV(l,"broadcasts")
f.toString
e=t.P
o.a=e.a(f)
f=J.aV(l,"visitors")
f.toString
o.b=e.a(f)
f=J.aV(l,"vocabulary")
f.toString
o.c=e.a(f)
f=J.aV(l,"documents")
f.toString
e.a(f)
f=J.aV(l,"street")
f.toString
e.a(f)
f=J.aV(l,"unverifiables")
f.toString
o.f=e.a(f)
f=J.aV(l,"nights")
f.toString
e.a(f)
f=J.aV(l,"endings")
f.toString
o.w=e.a(f)
f=J.aV(l,"records")
f.toString
o.x=e.a(f)
f=J.aV(l,"cues")
f.toString
e.a(f)
f=J.aV(l,"claims")
f.toString
o.z=e.a(f)
f=t.f
if(f.b(J.aV(l,"reactions"))){d=J.aV(l,"reactions")
if(d==null)d=f.a(d)
d=A.aZ(d,g,t.z)}else d=A.m(g,t.z)
o.Q=e.a(d)
if(f.b(J.aV(l,"variants"))){d=J.aV(l,"variants")
if(d==null)d=f.a(d)
d=A.aZ(d,g,t.z)}else d=A.m(g,t.z)
o.as=e.a(d)
if(f.b(J.aV(l,"residues"))){d=J.aV(l,"residues")
f=d==null?f.a(d):d
f=A.aZ(f,g,t.z)}else f=A.m(g,t.z)
o.at=e.a(f)
s=8
return A.a4(A.aD(A.b(A.b(i.window).fetch("res/story_script.json")),h),$async$by)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.a4(A.aD(A.b(k.text()),g),$async$by)
case 11:i=a.EI(a1)
o.ax=i
o.ay=A.DF(i)
case 10:q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
i=A.u(j)
throw A.a("Failed to load text.json: "+i)
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$by,r)},
hY(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.q(a))
if(t.f.b(s)){p=s.gJ().d1(0,new A.tH())
r=p.$ti
q=t.N
return A.xQ(new A.cD(p,r.i("N<e,e>(1)").a(new A.tI()),r.i("cD<1,N<e,e>>")),q,q)}return null},
es(a,b){var s=this.hY(a)
return s==null?null:s.h(0,b)},
i1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.p()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.P(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.m(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.q(i.b))}B.a.l(p,new A.f3(A.q(m.h(0,"id")),A.q(m.h(0,"label")),A.q(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.lP(r,a,b,c,d,A.ai(p,t.Y))},
i0(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.q(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aA(p)||o!==B.c.aA(o))return n
return new A.fd(B.c.aA(p),B.c.aA(o))},
i_(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.q(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aA(p)||typeof o!="string"||typeof n!="string")return m
return new A.fc(B.c.aA(p),o,n)},
o3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.M(b4,A.o(b4).i("M<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dz(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.q(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("bO<1>"),l=new A.bO(n,n.r,n.e,m);l.m();){i=l.d
g=a1.i0(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.bO(n,n.r,n.e,m);m.m();){l=m.d
e=a1.i_(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.ac(b4,b4.r,b4.e,A.o(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.i1(A.q(d.h(0,"visitor")),B.c.aA(A.a6(d.h(0,"day"))),A.q(d.h(0,"tier")),B.c.aA(A.a6(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.ac(b4,b4.r,b4.e,A.o(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.q(r.b))}s=A.q(d.h(0,"id"))
b2.k(0,s,new A.d8(s,A.q(d.h(0,"target")),A.q(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.M(b4,A.o(b4).i("M<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.M(b4,A.o(b4).i("M<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.P(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.iK(A.q(a0.h(0,"field")),A.q(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.tD(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.tH.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:122}
A.tI.prototype={
$1(a){t.AC.a(a)
return new A.N(A.q(a.a),A.q(a.b),t.q)},
$S:123}
A.jJ.prototype={
bN(a,b,c){var s=B.b.b7(a),r=B.b.b7(c)
if(r.length===0)return""
if(b||this.a===B.c2)return s.length===0?r:s+": "+r
if(this.a===B.c1)return r
return s.length===0?r:s+": "+r},
hn(a,b){return this.bN(a,!1,b)}}
A.xE.prototype={}
A.cO.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dV.prototype={
c6(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dV(q,p,o,n,m)},
lM(a){var s=null
return this.c6(s,s,s,a,s)},
lS(a){var s=null
return this.c6(s,s,s,s,a)},
lI(a){var s=null
return this.c6(s,s,a,s,s)},
lG(a){var s=null
return this.c6(s,a,s,s,s)},
ln(a){var s=null
return this.c6(a,s,s,s,s)},
A(){var s=this,r=s.f
r=r==null?null:r.b
return A.J(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.n6.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:124}
A.n4.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:42}
A.n5.prototype={
$0(){return A.h(B.hY)},
$S:7}
A.nh.prototype={
bU(a,b){var s,r=this,q=r.e.hn(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aP(q)
A.f(A.b(v.G.window).setTimeout(A.Be(new A.nj(r)),7000))},
aP(a){var s,r,q=this
if(!q.c||B.b.b7(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.f(A.b(v.G.window).setTimeout(A.Be(new A.ni(q,s)),4200))}}
A.nj.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:126}
A.ni.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.cx.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cP.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dh.prototype={
v(){return"AudioReverbMode."+this.b}}
A.dg.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dX.prototype={
cJ(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dX(r,q,p,a==null?s.e:a)},
lE(a){return this.cJ(null,null,a,null)},
lu(a){return this.cJ(null,a,null,null)},
lK(a){return this.cJ(null,null,null,a)},
lt(a){return this.cJ(a,null,null,null)},
A(){var s=this
return A.J(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.nw.prototype={
$1$2(a,b,c){return B.a.b1(c.i("n<0>").a(a),new A.nx(b,c),new A.ny(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:127}
A.nx.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.ny.prototype={
$0(){return A.h(A.O("unsupported audio option: "+A.u(this.a),null,null))},
$S:7}
A.nX.prototype={
nX(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.hn(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.o_.prototype={
$1(a){return this.a.$0()},
$S:2}
A.o3.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.o2.prototype={
$1(a){var s=A.f0(A.q(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.o1.prototype={
$1(a){A.q(a)
return a.length!==0&&!B.b.S(a,"brush-state-")},
$S:3}
A.e3.prototype={
v(){return"BrushComponentKind."+this.b}}
A.e4.prototype={
v(){return"BrushComponentState."+this.b}}
A.be.prototype={
gkR(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.b7(s.a).length===0||B.b.b7(s.c).length===0)throw A.a(B.hL)
if(s.e===B.cd&&s.b!==B.cc)throw A.a(B.h9)},
gE(){return this.a}}
A.o5.prototype={
mi(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
d4(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bM(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.d0(o+c,n)
l=new A.d0(s+p,n)
k=s-p
j=new A.d0(k,r-c)
i=new A.d0(k-c,r)
h=new A.d0(q-p,r)
g=new A.d0(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fc(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fc(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
b_(a,b,c,d,e,f,g,h,i){return this.bM(a,b,c,d,e,!0,f,g,h,i)},
m7(a,b,c,d,e,f,g,h,i){return this.bM(a,b,14,c,d,e,f,g,h,i)},
mc(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.es()
s.bW(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.ap()-0.5)*8
l=s.ap()
k=s.ap()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hd(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fb(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fb(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.u(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
ma(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a6(A.b(q.measureText(a.toUpperCase())).width)+70)
this.b_("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
m9(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.b_(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a6(A.b(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bM(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gnP()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.kP(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bl(i,0,new A.o6(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aS((a5+a2-a1)/a2))
d1=d4.f
c7.mi(d1==null?0:d1,c,a6)
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
B.a.l(f,new A.fE("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.b_(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hd(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bt(b1,g),c1+22,b3)
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
B.a.l(c7.d,new A.fE("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.b_("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
m8(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bM(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.p()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bt("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
mb(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
if(d2<=0.001)return
s=Math.sin(d2*3.141592653589793*0.5)
r=Math.min(d4*0.92,860)
q=Math.min(d3*0.88,620)
p=d4+r*0.6
o=p+(d4*0.5-p)*s
n=d3*0.5
d2=c3.b
d2===$&&A.p()
d2.save()
d2.fillStyle="rgba(10, 8, 12, "+A.u(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.b_(c5,3,18,c4,q,-0.025,r,o,n)
c3.mc(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.b_(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
d2.save()
d2.fillStyle="#f5f0e6"
d2.font='bold 16px "Cinzel", serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.shadowColor="rgba(0, 0, 0, 0.85)"
d2.shadowBlur=4
d2.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
d2.restore()
j=r-60
i=j/5
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.ai[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bM(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
default:c=null}d2.save()
a=e?d0:c6
d2.fillStyle=a
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c,d,h)
d2.restore()}a0=h+36
if(d5.b===4){a1=r-80
a2=a0+70+20
c3.b_(c7,2.5,10,c8,140,-0.02,a1,o,a2)
d2.save()
d2.fillStyle="#c49a45"
d2.font='bold 14px "Cinzel", serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a2-35)
d2.fillStyle="#f5f0e6"
d2.font='bold 22px "Cinzel", serif'
d2.shadowColor="rgba(0, 0, 0, 0.85)"
d2.shadowBlur=6
d2.fillText(d5.e.gm5().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bt(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbm()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.c.aS((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.D(c3.f,0,a7)
c3.f=l
a8=Math.min(a3.length,l+a6)
d2.save()
d2.beginPath()
l=r*0.5
d2.rect(o-l+24,a0,r-48,a5)
d2.clip()
for(g=c3.f,a9=r-80,j=a9*0.5;g<a8;++g){if(!(g>=0&&g<a3.length))return A.d(a3,g)
b0=a3[g]
e=d5.c===g
b1=b0.Q===B.t
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.bM(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hd(!0,g+1,20,b3-j+20,b2)
d2.save()
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 14px "Cinzel", serif'
d2.textAlign="left"
d2.textBaseline="middle"
b4=e?38:18
c=b0.e
b=c?250:340
d2.fillText(c3.bt(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
b5=b3+j-20
b=c?110:265
a=b1?d1:c9
d2.fillStyle=a
d2.font='bold 9px "Courier New", monospace'
d2.textAlign="center"
b6=b1?"LIVE":"N/A"
d2.fillText(b6,b5-b,b2)
if(c){if(b0.Q===B.t){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.m7(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.gdQ(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.c.D((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
if(b1)a=e?c7:c5
else a=c9
d2.fillStyle=a
b6=160*b9
d2.fillRect(c,b,b6,8)
if(b1){d2.fillStyle="#f5f0e6"
d2.fillRect(c+b6-3,b2-7,6,14)}d2.fillStyle="#8c887e"
d2.font='10px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(B.c.ae(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.c.ae(b0.r,1),b8+80+4,b2)
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 13px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(b0.gdQ(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbH()
if(d5.b===4)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.t)m="LIVE \u2022 REQUESTED "+c1.gmq()+" \u2022 EFFECTIVE "+c1.gdQ()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bt(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
fc(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fb(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
kP(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a6(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bt(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a6(A.b(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a6(A.b(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.H(r,0,s-1)}return q?"...":r+"..."}}
A.o6.prototype={
$2(a,b){var s
A.b7(a)
A.q(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a6(A.b(s.measureText(b)).width))},
$S:128}
A.fJ.prototype={
gl7(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aN(r)
o.k(0,q,p.gO(r)?"":p.gW(r))}return o},
bG(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.J(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.b7(r)
q=n.h(0,i)
q.toString
A.b7(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fK(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.b7(r)
q=n.h(0,i)
q.toString
A.b7(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gl7()
return A.fK(l,null,m,r,p,o,s,q)},
dL(a){var s=null
return this.bG(a,s,s,s,s,s)},
lA(a){var s=null
return this.bG(s,s,s,a,s,s)},
lB(a){var s=null
return this.bG(s,s,s,s,a,s)},
lx(a){var s=null
return this.bG(s,a,s,s,s,s)},
ly(a){var s=null
return this.bG(s,s,a,s,s,s)},
lT(a){var s=null
return this.bG(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.a(B.fS)
p=this.r
if(p.gJ().L(0,new A.ol()))throw A.a(B.hR)
if(p.gJ().L(0,new A.om()))throw A.a(B.ht)
p=p.gaf()
o=A.o(p)
s=o.i("hU<n.E,e>")
r=s.i("G<n.E>")
q=A.H(new A.G(new A.hU(p,o.i("n<e>(n.E)").a(new A.on()),s),s.i("l(n.E)").a(new A.oo()),r),r.i("n.E"))
if(A.h_(q,A.z(q).c).a!==q.length)throw A.a(B.fV)},
A(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.az(r.b,!0,p))}return A.J(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.ol.prototype={
$1(a){t.yx.a(a)
return J.jH(a.b,new A.ok(a))},
$S:43}
A.ok.prototype={
$1(a){var s
A.q(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.zr(a)
else s=!1
return s},
$S:3}
A.om.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.jH(a.b,B.dJ.gar(B.dJ))},
$S:43}
A.on.prototype={
$1(a){return t.a.a(a)},
$S:130}
A.oo.prototype={
$1(a){return A.q(a).length!==0},
$S:3}
A.oj.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.e2.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.eK.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.di.prototype={}
A.k3.prototype={
c3(a){var s=this
if(!s.a.r.N(a))return new A.di(B.c9,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.ex},
le(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aU
if(!A.zr(a)){p.c=p.b=null
return new A.di(B.cb,B.dK.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.zg(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.di(B.aV,a+" is already bound to "+s)}return p.j2(a)},
ee(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aU
switch(a.a){case 2:m.c=m.e=m.d=null
return B.ey
case 1:s=A.yi(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.yE(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.yT(r,k))
m.a=m.a.dL(s)
break
case 0:s=A.yi(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gW(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.lv(p,1,null,A.z(p).c)
o=p.$ti
p=new A.an(p,p.gt(0),o.i("an<X.E>"))
o=o.i("X.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.yT(r,k)}else{r=s.h(0,j)
r.toString
r=A.yE(A.yT(r,k),q)}s.k(0,j,r)
m.a=m.a.dL(s)
break}m.c=m.e=m.d=null
return B.c7},
j2(a){var s,r,q=this,p=q.b
if(p==null)return B.aU
s=A.yi(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.yE(r,a))
q.a=q.a.dL(s)
q.b=null
return B.c7}}
A.hP.prototype={
iN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.k3(f.w)
s=f.b
s.className=A.q(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.o0(a,B.eH,1)))
A.b(s.appendChild(A.E(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.E(a,"div",c,e)
f.eQ(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eQ(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dd(a,r,"invertX","Invert horizontal look")
f.dd(a,r,"invertY","Invert vertical look")
f.dd(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.E(a,"div",c,e)
for(p=B.kr.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fK(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.jI(l)?"unbound":J.zi(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.e5(a,new A.be("settings.controls.bind."+m,B.cc,n,h,B.n),new A.oh(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.k(0,m,g)}A.b(s.appendChild(q))
p=A.E(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.E(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.dD()
A.b(s.appendChild(A.e5(a,B.eI,new A.oi(f),e)))},
hB(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.ff(this.x.le(A.q(a.code)))},
ff(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aV?B.eM:B.n
p=o.Q.h(0,r)
if(p!=null)A.xG(p,q)}n=a.a
if(n===B.aV)o.ky()
else if(n===B.ca){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dD()}else{o.dg()
o.ax=null}},
ky(){var s,r,q,p,o
this.dg()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jf[r]
p=A.L(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.e5(p,new A.be("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.n),new A.og(this,q),null)))}},
dg(){var s,r=this.at
if(r==null)return
while(A.L(r.firstChild)!=null){s=A.L(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dD(){var s,r,q,p
for(s=this.Q,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.jI(p)?"unbound":J.zi(p," / ")
r.textContent=q
A.xG(r,B.n)}},
eQ(a,b,c,d,e,f){var s,r=A.E(a,"label","setting-row",null)
A.b(r.appendChild(A.E(a,"span",null,d)))
s=A.D1(a,new A.be("settings.controls."+c,B.eK,d,null,B.n),f,e,new A.oe(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
dd(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.D2(a,new A.be("settings.controls."+c,B.eL,d,null,B.n),!1,new A.of(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
fd(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
se7(a){this.f=t.pf.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.oh.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.c3(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c8){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.xG(q,B.cd)}p.dg()
return null},
$S:0}
A.oi.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.og.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.ff(r.ee(this.b))},
$S:0}
A.oe.prototype={
$1(a){var s=this.a,r=s.w
s.fd(this.b==="horizontalSensitivity"?r.ly(a):r.lT(a))},
$S:131}
A.of.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.lA(a)
break A}if("invertY"===q){s=r.w.lB(a)
break A}s=r.w.lx(a)
break A}r.fd(s)},
$S:10}
A.op.prototype={
iO(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.b(o.appendChild(A.E(s,"h1","journal-title","credits")))
r=A.E(s,"p","credits-body",null)
p.f!==$&&A.b8()
p.f=r
r.textContent="\u2014"
A.b(o.appendChild(r))
A.b(o.appendChild(A.E(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.E(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.W(new A.oq(p)))
A.b(o.appendChild(q))}}
A.oq.prototype={
$1(a){return this.a.ab()},
$S:2}
A.oy.prototype={
iQ(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.E(a,o,"door-speaker",p)
q.b!==$&&A.b8()
q.b=s
r=A.E(a,o,"door-line",p)
q.c!==$&&A.b8()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(s))
A.b(n.appendChild(r))
r=A.E(a,o,"door-choice-status",p)
q.d!==$&&A.b8()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(r))
r=A.E(a,o,"door-cite-list",p)
q.f!==$&&A.b8()
q.f=r
s=A.E(a,o,"door-cite-result",p)
q.r!==$&&A.b8()
q.r=s
A.b(n.appendChild(r))
A.b(n.appendChild(s))
s=A.E(a,"button","door-continue","continue")
q.e!==$&&A.b8()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.oz(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.W(new A.oA(q,a)))
A.b(A.L(a.body).appendChild(n))},
eC(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bN("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.zu(B.bb)
s=r.e
s===$&&A.p()
A.b(s.style).display="none"
s=r.f
s===$&&A.p()
s.textContent=""
s=r.r
s===$&&A.p()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
eD(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bN("",!0,a)
q=r.d
q===$&&A.p()
q.textContent=""
q=r.e
q===$&&A.p()
q=A.b(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.p()
s.textContent=""},
io(a){return this.eD(a,!1)},
iq(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.b(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.zu(r)},
eE(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bN("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.b(s.style).display=""},
im(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.t)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.b(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.W(new A.oB(p,this)))
A.b(s.appendChild(n))}},
ht(){var s,r=this
r.y=!1
s=r.d
s===$&&A.p()
s.textContent=""
s=r.f
s===$&&A.p()
s.textContent=""
s=r.r
s===$&&A.p()
s.textContent=""
s=r.a
s.className="door"
s.setAttribute("hidden","")},
sn0(a){this.w=t.Z.a(a)},
sn_(a){this.x=t.vR.a(a)}}
A.oz.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:44}
A.oA.prototype={
$1(a){var s,r,q,p,o,n,m
A.b(a)
s=this.a
if(!s.y||A.q(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.p()
if(A.q(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.p()
p=A.b(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.f(p.length);++o){n=A.L(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.L(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gW(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga0(r).focus()}}else if(m===B.a.ga0(r)||!B.a.p(r,m)){a.preventDefault()
B.a.gW(r).focus()}},
$S:134}
A.oB.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:44}
A.oE.prototype={
iR(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.E(s,"h1","journal-title",null)
o.f!==$&&A.b8()
o.f=r
q=A.E(s,"div","ending-copy",null)
o.r!==$&&A.b8()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.E(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.W(new A.oF(o)))
A.b(n.appendChild(p))},
ip(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bP()},
sn4(a){this.w=t.Z.a(a)}}
A.oF.prototype={
$1(a){var s=this.a
s.ab()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.p7.prototype={
bA(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.az(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
M(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
nW(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
mw(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fY()
return!0}return!1}if(a==="Space"){s=B.a.e2(l,new A.p8())
if(s!==-1){n.co(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.R(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.R(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.co(q)
return!0}}if(B.b.S(a,"Digit")){p=A.dz(B.b.aQ(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.S(a,"Numpad")){p=A.dz(B.b.aQ(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.co(o)
return!0}return!1},
co(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
fY(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
mx(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fY()
return!0}this.co(a.b)
return!0},
smZ(a){this.y=t.dt.a(a)},
sn3(a){this.z=t.Z.a(a)}}
A.p8.prototype={
$1(a){A.q(a)
return B.b.p(a.toLowerCase(),"silent")||B.b.p(a,"...")},
$S:3}
A.p9.prototype={}
A.dp.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cR.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cS.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dq.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dn.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dr.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cj.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dm.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fR.prototype={
aR(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.xH(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
lP(a){var s=null
return this.aR(s,s,s,s,s,s,s,s,s,a,s)},
lO(a){var s=null
return this.aR(s,s,s,s,s,s,s,s,a,s,s)},
lq(a){var s=null
return this.aR(s,s,a,s,s,s,s,s,s,s,s)},
lz(a){var s=null
return this.aR(s,s,s,s,a,s,s,s,s,s,s)},
lH(a){var s=null
return this.aR(s,s,s,s,s,s,a,s,s,s,s)},
lQ(a){var s=null
return this.aR(s,s,s,s,s,s,s,s,s,s,a)},
lC(a){var s=null
return this.aR(s,s,s,s,s,a,s,s,s,s,s)},
lp(a){var s=null
return this.aR(s,a,s,s,s,s,s,s,s,s,s)},
lL(a){var s=null
return this.aR(s,s,s,s,s,s,s,a,s,s,s)},
lo(a){var s=null
return this.aR(a,s,s,s,s,s,s,s,s,s,s)},
lv(a){var s=null
return this.aR(s,s,s,a,s,s,s,s,s,s,s)},
A(){var s=this
return A.J(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pa.prototype={
$1$2(a,b,c){var s
A.BU(c,t.D,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.a(A.O("invalid gameplay setting: "+a,null,null))
return B.a.b1(b,new A.pb(s,c),new A.pc(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:135}
A.pb.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pc.prototype={
$0(){return A.h(A.O("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cy.prototype={
v(){return"GraphicsPreset."+this.b}}
A.ec.prototype={
aY(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.ec(s.a,r,q,p,o,n,m,l,k,j,i)},
dK(a){var s=null
return this.aY(a,s,s,s,s,s,s,s,s,s)},
h8(a){var s=null
return this.aY(s,s,a,s,s,s,s,s,s,s)},
h9(a){var s=null
return this.aY(s,s,s,s,s,s,a,s,s,s)},
lD(a){var s=null
return this.aY(s,s,s,s,a,s,s,s,s,s)},
lJ(a){var s=null
return this.aY(s,s,s,s,s,s,s,a,s,s)},
lw(a){var s=null
return this.aY(s,s,s,a,s,s,s,s,s,s)},
lR(a){var s=null
return this.aY(s,s,s,s,s,s,s,s,s,a)},
lF(a){var s=null
return this.aY(s,s,s,s,s,a,s,s,s,s)},
ls(a){var s=null
return this.aY(s,a,s,s,s,s,s,s,s,s)},
lN(a){var s=null
return this.aY(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.p(B.k1,q))throw A.a(A.O("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.jm,q))throw A.a(A.O("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.k5,q))throw A.a(A.O("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.jZ,q))throw A.a(A.O("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.kc,q))throw A.a(A.O("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.k4,q))throw A.a(A.O("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.k6,q))throw A.a(A.O("unsupported graphics shadow quality: "+q,r,r))},
A(){var s=this
return A.J(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.pn.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:45}
A.po.prototype={
$0(){return A.h(B.hg)},
$S:7}
A.pp.prototype={
A(){return A.J(["version",1,"requested",this.a.A(),"effective",this.b.A()],t.N,t.K)}}
A.pg.prototype={}
A.ph.prototype={}
A.i_.prototype={
iS(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.b(j.appendChild(A.E(a,"h1","journal-title","Graphics")))
A.b(j.appendChild(A.E(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.E(a,"div","settings-grid",m)
r=t.N
n.bd(a,s,"preset","quality preset",A.J(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.bd(a,s,"renderScale","render scale",A.J(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.bd(a,s,"frameTarget","frame target",A.J(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.bd(a,s,"antialiasing","anti-aliasing",A.J(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.bd(a,s,"textureQuality","texture quality",A.J(["high","High","medium","Medium","low","Low"],r,r))
n.bd(a,s,"outputEncoding","output encoding",A.J(["srgb","sRGB display","linear","Linear light"],r,r))
n.bd(a,s,"diagnosticLevel","renderer diagnostics",A.J(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.bd(a,s,"shadowQuality","shadow allocation",A.J(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.E(a,"label",k,m)
r=A.b(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.W(new A.pk(n)))
r=n.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.E(a,"span",m,"Dynamic resolution")))
A.b(s.appendChild(q))
p=A.E(a,"label",k,m)
r=A.b(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.W(new A.pl(n)))
r=n.y
r.toString
A.b(p.appendChild(r))
A.b(p.appendChild(A.E(a,"span",m,"Model package diagnostics (debug)")))
A.b(s.appendChild(p))
A.b(j.appendChild(s))
r=A.E(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.b(j.appendChild(r))
o=A.E(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.W(new A.pm(n)))
A.b(j.appendChild(o))},
bd(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.b(s.appendChild(A.E(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.M(e,A.o(e).i("M<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.pj(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
dt(a){var s
a.C()
this.Q=a
s=this.f
if(s!=null)s.$1(a)},
cp(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.T(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
se7(a){this.f=t.CA.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.pk.prototype={
$1(a){var s=this.a
s.dt(s.Q.h8(A.Q(s.x.checked)))},
$S:1}
A.pl.prototype={
$1(a){var s=this.a
s.dt(s.Q.lD(A.Q(s.y.checked)))},
$S:1}
A.pm.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.ab()},
$S:1}
A.pj.prototype={
$1(a){var s,r=A.q(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.h9(B.a.ao(B.d3,new A.pi(r)))
break A}if("renderScale"===p){s=q.Q.lJ(r)
break A}if("frameTarget"===p){s=q.Q.lw(r)
break A}if("antialiasing"===p){s=q.Q.dK(r)
break A}if("textureQuality"===p){s=q.Q.lR(r)
break A}if("outputEncoding"===p){s=q.Q.lF(r)
break A}if("diagnosticLevel"===p){s=q.Q.ls(r)
break A}if("shadowQuality"===p){s=q.Q.lN(r)
break A}s=q.Q
break A}q.dt(s)},
$S:1}
A.pi.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:45}
A.jK.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.cg.prototype={}
A.pq.prototype={
hX(a,b,c){if(c)return B.jD
if(b&&a!=null)return A.c([new A.cg("E","Examine "+a,!0),new A.cg("TAB","Journal",!1),new A.cg("CAPS","Shader Lab",!1)],t.sa)
return B.km}}
A.pr.prototype={
iT(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.E(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.E(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.E(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.E(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.W(new A.ps(this)))
A.b(p.appendChild(r))}}
A.ps.prototype={
$1(a){return this.a.ab()},
$S:2}
A.pY.prototype={
bP(){var s,r=this
r.iH()
s=r.r.a-1
if(s<1)s=1
r.CW=r.eX(r.CW,s)
r.km()
r.fA()},
j8(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.W(new A.pZ(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.q_(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.b8()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
fS(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.eX(s.CW+a,r)
s.fA()},
eX(a,b){if(a<1)return 1
if(a>b)return b
return a},
km(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.p()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.p()
s.textContent=""
for(s=l.w.eu(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=B.a.ga0(o.c).q(0)
m=A.b(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.q0(l,o,m)))
A.b(k.appendChild(m))}},
fA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ac<2>"),n=new A.ac(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.U(r,new A.q1())
j.fz(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.ac(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.U(s,new A.q2())
j.fz(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.b(i.style).setProperty("width",B.c.ae(k*100,1)+"%")},
fz(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.b(a.appendChild(this.jB(b[r])))},
jB(a){var s,r,q,p,o,n=A.E(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.b(n.appendChild(this.fk(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fk(p,!1)
o.className=A.q(o.className)+" margin"
A.b(n.appendChild(o))}return n},
fk(a,b){var s=b?"hand-line struck":"hand-line",r=A.E(this.a,"div",s,a.q(0))
A.b(r.style).setProperty("--shake",B.c.q(a.b))
return r}}
A.pZ.prototype={
$1(a){return this.a.fS(-1)},
$S:2}
A.q_.prototype={
$1(a){return this.a.fS(1)},
$S:2}
A.q0.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.q1.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.q2.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.d0.prototype={}
A.fE.prototype={
gE(){return this.a}}
A.qS.prototype={
gnP(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.H(s,0,B.c.aA(B.c.D(r*q,0,r)))}}
A.ij.prototype={
aW(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.L(this.a.body).appendChild(s))},
bP(){var s,r,q,p,o=this,n=o.b
if(B.b.p(A.q(n.className),"open"))return
s=$.qT
if(s!=null&&s!==o)s.ab()
$.qT=o
r=o.a
o.d=A.L(r.activeElement)
A.pV(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.W(o.gkd())
o.e=q
r.addEventListener("keydown",q)
p=A.Bc(n)
if(p.length!==0)B.a.gW(p).focus()
else n.focus()},
ab(){var s,r,q=this,p=q.b
if(!B.b.p(A.q(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.qT===q)$.qT=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
hB(a){},
ke(a){A.b(a)
this.hB(a)
if(A.Q(a.defaultPrevented))return
if(A.q(a.code)==="Escape"){a.preventDefault()
this.ab()
return}if(A.q(a.code)==="Tab")this.kF(a)},
kF(a){var s,r=A.Bc(this.b)
if(r.length===0)return
s=A.L(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gW(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga0(r).focus()}}else if(s===B.a.ga0(r)||!B.a.p(r,s)){a.preventDefault()
B.a.gW(r).focus()}},
sb3(a){this.c=t.Z.a(a)}}
A.bu.prototype={
v(){return"PauseReason."+this.b}}
A.cm.prototype={
v(){return"PausePage."+this.b}}
A.ej.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dx.prototype={
A(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a7(a,b){if(b==null)return!1
return b instanceof A.dx&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.d_(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.ei.prototype={
gh2(){var s=this.a
return s.length===1&&B.a.gW(s).a===B.bv},
A(){var s=A.m(t.N,t.X),r=this.a,q=A.z(r),p=q.i("F<1,T<e,I?>>")
r=A.H(new A.F(r,q.i("T<e,I?>(1)").a(new A.qY()),p),p.i("X.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.z(r)
p=q.i("F<1,e>")
r=A.H(new A.F(r,q.i("e(1)").a(new A.qZ()),p),p.i("X.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.qY.prototype={
$1(a){return t.oP.a(a).A()},
$S:137}
A.qZ.prototype={
$1(a){return t.wJ.a(a).b},
$S:138}
A.c3.prototype={}
A.qX.prototype={
hC(a){var s,r=this
if(r.a.gh2())return new A.c3(B.a3,r.a,null)
s=r.a
s=new A.ei(B.k0,s.b,a)
r.a=s
return new A.c3(B.du,s,"pause.resume")},
l2(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga0(p)
q=r.a.a
q=B.a.aI(q,0,q.length-1)
p=r.a
p=new A.ei(q,p.b,p.c)
r.a=p
return new A.c3(B.dv,p,s.c)}if(q.gh2()&&r.a.b.length===0)return r.cj()
return new A.c3(B.a3,r.a,null)},
cj(){var s=this.a
if(s.a.length===0)return new A.c3(B.a3,s,null)
if(s.b.length!==0)return new A.c3(B.a3,s,null)
this.a=B.bu
return new A.c3(B.dw,B.bu,s.c)},
nk(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.c3(B.a3,q.a,null)
s=q.a
r=A.H(s.b,t.wJ)
r.push(a)
s=new A.ei(s.a,r,q.a.c)
q.a=s
return new A.c3(B.du,s,null)},
m4(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.c3(B.a3,o.a,null)
s=o.a
r=s.b
q=A.z(r)
p=q.i("G<1>")
r=A.H(new A.G(r,q.i("l(1)").a(new A.r_(a)),p),p.i("n.E"))
q=o.a.c
r=new A.ei(s.a,r,q)
o.a=r
return new A.c3(B.lr,r,q)},
jt(a){var s
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
A.r_.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:139}
A.cE.prototype={
v(){return"PauseRootAction."+this.b}}
A.r0.prototype={
bq(a,b,c,d){var s=B.kE.h(0,c)
s.toString
A.b(b.appendChild(A.e5(a,new A.be(s,B.F,d,null,B.n),new A.r1(this,c),null)))},
snf(a){this.f=t.Z.a(a)},
snh(a){this.r=t.Z.a(a)},
sn1(a){this.w=t.Z.a(a)},
sng(a){this.x=t.Z.a(a)},
sn7(a){this.y=t.Z.a(a)},
sn2(a){this.z=t.Z.a(a)},
sba(a){this.Q=t.Z.a(a)}}
A.r1.prototype={
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
A.bR.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.rl.prototype={
il(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bN("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.rN.prototype={
iV(a){var s,r,q,p,o,n=this.b
n.className=A.q(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.o0(a,B.eG,1)))
A.b(n.appendChild(A.E(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.E(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.jE[r]
p=B.de.h(0,q)
p.toString
o=B.dd.h(0,q)
o.toString
A.b(s.appendChild(A.e5(a,new A.be(o,B.F,p,p+" settings",B.n),new A.rO(this,q),null)))}A.b(s.appendChild(A.e5(a,B.eF,new A.rP(this),null)))
A.b(n.appendChild(s))},
smY(a){this.f=t.hQ.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.rO.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.rP.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hc.prototype={
iW(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.u(B.de.h(0,d))+" settings",a=h.b
a.className=A.q(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.o0(a0,new A.be("settings."+(s==null?f:s)+".heading",B.av,b,g,B.n),2)))
A.b(a.appendChild(A.E(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.E(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.td(h)),p=B.a.gu(B.B),o=t.xG,q=new A.U(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.jS(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.E(a0,"div",e,g)
for(s=s.a(new A.te(h)),q=B.a.gu(B.B),o=new A.U(q,s,o);o.m();)A.b(j.appendChild(h.kE(a0,q.gn())))
A.b(a.appendChild(j))
if(d===B.G)A.b(a.appendChild(h.j6(a0)))
if(d===B.H)A.b(a.appendChild(h.j5(a0)))
if(d===B.a2)A.b(a.appendChild(h.j7(a0)))
i=A.E(a0,"div",e,g)
for(s=t.pz.a(h.gjK()),q=B.a.gu(B.k2),s=new A.U(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.e5(a0,new A.be("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.tf(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.e5(a0,new A.be("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.eN),new A.tg(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.e5(a0,new A.be("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.n),new A.th(h),g)))},
j5(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.E(a,"div","settings-grid",j),f=k.dc(a,g,"reducedMotion","reduced motion (system default)"),e=k.dc(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dc(a,g,"captions","non-speech captions"),c=A.E(a,"label",h,j)
A.b(c.appendChild(A.E(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.W(new A.t5(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.E(a,"label",h,j)
A.b(r.appendChild(A.E(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bn[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.W(new A.t6(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.E(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.W(new A.t7(k)))
A.b(g.appendChild(l))
k.ok.I(0,A.J(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
dc(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.rQ(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
ex(a){var s,r
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
s.value=(r==null?B.ab:r).b}},
j7(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.E(a,"div","settings-grid",l)
m.bc(a,g,"interactionMode","interaction mode",B.bm,t.bK)
m.bc(a,g,"promptDensity","prompt density",B.bp,t.dn)
m.bc(a,g,"textPacing","text pacing",B.bo,t.j_)
m.bc(a,g,"journalLayout","journal layout",B.bg,t.gm)
m.bc(a,g,k,k,B.ba,t.aJ)
m.bc(a,g,"saveFeedback","save feedback",B.bh,t.mx)
m.bc(a,g,"focusLossBehavior","when the window loses focus",B.aE,t.x)
m.bc(a,g,"clockFormat","clock format",B.bd,t.vS)
s=A.E(a,j,i,l)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.W(new A.t8(m,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,h,l,"contextual reminders")))
A.b(g.appendChild(s))
m.id=r
q=A.E(a,j,i,l)
p=A.b(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.W(new A.t9(m,p)))
A.b(q.appendChild(p))
A.b(q.appendChild(A.E(a,h,l,"show daily objective")))
A.b(g.appendChild(q))
m.k1=p
o=A.E(a,j,i,l)
n=A.b(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.W(new A.ta(m,n)))
A.b(o.appendChild(n))
A.b(o.appendChild(A.E(a,h,l,"story mode (visitors and narrative time)")))
A.b(g.appendChild(o))
m.k2=n
return g},
bc(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.BU(f,t.D,"T","_addGameplaySelect")
f.i("K<0>").a(e)
s=A.E(a,"label","setting-row",null)
A.b(s.appendChild(A.E(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.W(new A.t3(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
i5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
j6(a){var s,r,q=this,p=A.E(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bl[s].b
n.k(0,r,r)}q.cq(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bf[s].b
n.k(0,r,r)}q.cq(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.be[s].b
n.k(0,r,r)}q.cq(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.bc[s].b
o.k(0,n,n)}q.cq(a,p,"ducking","voice intelligibility",o)
return p},
cq(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.b(s.appendChild(A.E(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.M(e,A.o(e).i("M<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.rV(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p3.k(0,c,r)},
i4(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fi(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a1===r){s=a.c===B.aL
break A}if(B.H===r){s=a.c===B.a6
break A}if(B.G===r){s=a.c===B.E
break A}s=!1
break A}return s},
jL(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a1===s){r=a===B.aL
break A}if(B.H===s){r=a===B.a6
break A}if(B.G===s){r=a===B.E
break A}r=!1
break A}return r},
kE(a,b){var s=this,r=A.E(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.W(new A.tc(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.E(a,"span",null,b.b)))
return r},
jS(a,b,c,d,e){var s,r,q=this,p=A.E(a,"label","setting-row",null),o=A.E(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.u(e)
n.max=A.u(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.E(a,"output",null,"100%")
n.addEventListener("input",A.W(new A.tb(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aB(e,d))
return p},
eA(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.lM
r=B.c.D(b,s.a,s.b)
q.value=B.c.q(r)
p.textContent=""+B.c.aH(r*100)+"%"},
sn9(a){this.r=t.DI.a(a)},
snb(a){this.w=t.xl.a(a)},
sna(a){this.x=t.xl.a(a)},
sn5(a){this.y=t.DI.a(a)},
sn8(a){this.z=t.xl.a(a)},
snj(a){this.Q=t.xl.a(a)},
sne(a){this.as=t.Ci.a(a)},
snd(a){this.at=t.Z.a(a)},
sba(a){this.ax=t.Z.a(a)},
smX(a){this.ay=t.kC.a(a)},
sn6(a){this.ch=t.hq.a(a)},
smW(a){this.CW=t.Cv.a(a)},
snc(a){this.cx=t.Z.a(a)}}
A.td.prototype={
$1(a){t.gl.a(a)
return a.d===B.S&&this.a.fi(a)},
$S:27}
A.te.prototype={
$1(a){t.gl.a(a)
return a.d===B.al&&this.a.fi(a)},
$S:27}
A.tf.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.tg.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.th.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ab()},
$S:0}
A.t5.prototype={
$1(a){var s=this.a,r=s.k4,q=A.f0(A.q(this.b.value))
r=r.lS(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.t6.prototype={
$1(a){var s=this.a,r=s.k4.lM(B.a.ao(B.bn,new A.t4(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.t4.prototype={
$1(a){return t.mq.a(a).b===A.q(this.a.value)},
$S:42}
A.t7.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.rQ.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.lI(r)
break A}if("photosensitivitySafe"===p){s=q.k4.lG(r)
break A}if("captions"===p){s=q.k4.ln(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.t8.prototype={
$1(a){var s=this.a,r=s.k3.lq(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.t9.prototype={
$1(a){var s=this.a,r=s.k3.lO(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.ta.prototype={
$1(a){var s=this.a,r=s.k3.lP(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.t3.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.lz(B.a.ao(B.bm,new A.rW(r.c)))
break A}if("promptDensity"===p){s=q.k3.lH(B.a.ao(B.bp,new A.rX(r.c)))
break A}if("textPacing"===p){s=q.k3.lQ(B.a.ao(B.bo,new A.rY(r.c)))
break A}if("journalLayout"===p){s=q.k3.lC(B.a.ao(B.bg,new A.rZ(r.c)))
break A}if("confirmations"===p){s=q.k3.lp(B.a.ao(B.ba,new A.t_(r.c)))
break A}if("saveFeedback"===p){s=q.k3.lL(B.a.ao(B.bh,new A.t0(r.c)))
break A}if("clockFormat"===p){s=q.k3.lo(B.a.ao(B.bd,new A.t1(r.c)))
break A}s=q.k3.lv(B.a.ao(B.aE,new A.t2(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.rW.prototype={
$1(a){return t.bK.a(a).b===A.q(this.a.value)},
$S:142}
A.rX.prototype={
$1(a){return t.dn.a(a).b===A.q(this.a.value)},
$S:143}
A.rY.prototype={
$1(a){return t.j_.a(a).b===A.q(this.a.value)},
$S:144}
A.rZ.prototype={
$1(a){return t.gm.a(a).b===A.q(this.a.value)},
$S:145}
A.t_.prototype={
$1(a){return t.aJ.a(a).b===A.q(this.a.value)},
$S:146}
A.t0.prototype={
$1(a){return t.mx.a(a).b===A.q(this.a.value)},
$S:147}
A.t1.prototype={
$1(a){return t.vS.a(a).b===A.q(this.a.value)},
$S:148}
A.t2.prototype={
$1(a){return t.x.a(a).b===A.q(this.a.value)},
$S:46}
A.rV.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.lE(B.a.ao(B.bl,new A.rR(r.c)))
break A}if("dynamicRange"===o){s=p.lu(B.a.ao(B.bf,new A.rS(r.c)))
break A}if("reverb"===o){s=p.lK(B.a.ao(B.be,new A.rT(r.c)))
break A}s=p.lt(B.a.ao(B.bc,new A.rU(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.rR.prototype={
$1(a){return t.xs.a(a).b===A.q(this.a.value)},
$S:150}
A.rS.prototype={
$1(a){return t.EL.a(a).b===A.q(this.a.value)},
$S:151}
A.rT.prototype={
$1(a){return t.gc.a(a).b===A.q(this.a.value)},
$S:152}
A.rU.prototype={
$1(a){return t.ul.a(a).b===A.q(this.a.value)},
$S:153}
A.tc.prototype={
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
A.tb.prototype={
$1(a){var s,r,q=this,p=A.f0(A.q(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aH(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bG.prototype={
v(){return"SettingCategory."+this.b}}
A.iy.prototype={
v(){return"SettingKind."+this.b}}
A.ba.prototype={
d_(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.a(A.O(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.a(A.O(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bA(a))throw A.a(A.O(r.a+" must be boolean",q,q))
break}}}
A.tk.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:27}
A.tl.prototype={
$0(){return A.h(A.j("unknown setting: "+this.a))},
$S:7}
A.ti.prototype={
iX(a,b){var s,r=this.a
if(r!==1)throw A.a(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.tj(s.a).d_(s.b)}},
cl(a){var s=this.b.h(0,a)
return s==null?A.h(A.j("setting missing from profile: "+a)):s},
A(){return A.J(["version",this.a,"values",this.b],t.N,t.K)}}
A.tm.prototype={
ny(a){var s,r,q=A.fZ(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dD(q,1)
this.kp(a)},
A(){return A.J(["version",1,"requested",this.a.A(),"effective",this.b.A()],t.N,t.K)},
kp(a){var s,r,q=A.fZ(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dD(q,1)}}
A.tz.prototype={
iY(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.b(l.appendChild(A.E(a,"h2","journal-title","Rest")))
A.b(l.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.d1[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.d7[o]
m=A.b(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.tA(this,q,n)))
A.b(s.appendChild(m))}}A.b(l.appendChild(s))},
sni(a){this.f=t.nf.a(a)}}
A.tA.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ab()},
$S:1}
A.cv.prototype={
gE(){return this.a},
gam(){return this.b},
gaU(){return this.c}}
A.ne.prototype={
nO(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.z(s)
q=new A.F(s,r.i("e(1)").a(new A.ng()),r.i("F<1,e>")).b6(0)
r=this.b
r.M(0)
s=J.zj(a,t.N)
p=s.$ti
r.I(0,new A.G(s,p.i("l(n.E)").a(q.gar(q)),p.i("G<n.E>")))},
md(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.ng.prototype={
$1(a){return t.bC.a(a).a},
$S:154}
A.nf.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:155}
A.lM.prototype={
gc7(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
mK(a){return this.c.p(0,t.T.a(a))},
ef(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a3(0,g.glm())||!a.a.a3(0,new A.u8(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fl(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aN){m=s.d
if(m<o.length){n=n===B.a9
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ad}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.L(l.f,new A.u9(s))
else k=!1
if(k)return!1
j=new A.lL(r,g,A.ai(o,t.AP),B.a9)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.M(0)
g.I(0,a.a)
g=i.c
g.M(0)
g.I(0,h)
i.r=j
return!0},
h_(a){var s=this.a,r=A.o(s).i("aa<1>"),q=r.i("G<n.E>")
s=A.H(new A.G(new A.aa(s,r),r.i("l(n.E)").a(new A.u3(a)),q),q.i("n.E"))
B.a.U(s,new A.u4())
return s},
c3(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.nQ
s=m.a.h(0,a)
if(s==null)return B.nR
r=B.d.aa(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.bZ:B.as
o=p===B.as&&m.x.p(0,q)&&s.N(B.c_)?B.c_:p
if(s.N(o))n=o
else n=s.N(B.as)?B.as:B.bZ
r=s.h(0,n)
r.toString
m.r=new A.lL(a,n,A.ai(m.fl(a,n,r),t.AP),B.a9)
m.gc7()
r=m.r
r.toString
return new A.lK(r)},
lh(a){var s,r,q,p,o,n=this.r
if(n==null)return B.eb
if(n.d!==B.a9)return B.nO
n.e=a
s=a===B.ad
n.d=s?B.aN:B.aq
r=this.f
q=s?B.e9:B.nw
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dI(q,o,p,a,null))
if(a===B.aA)B.a.l(r,new A.dI(B.nz,o,p,a,null))
if(s)this.fB(n)
return new A.lI(n)},
kW(){var s,r=this.r
if(r==null)return B.eb
s=r.d
if(s!==B.aq&&s!==B.ar)return B.nP
if(this.gc7()!=null&&r.w==null)return new A.bl(new A.bx(B.aa,"The visitor is waiting for an answer."))
r.d=B.ar
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aN
this.fB(r)
return new A.iJ(r,!0)}return new A.iJ(r,!1)},
li(a){var s,r,q=this.r,p=this.gc7(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aq&&o!==B.ar}if(o)return B.nN
o=p.f
s=A.z(o)
r=A.bB(new A.G(o,s.i("l(1)").a(new A.u6(a)),s.i("G<1>")),t.Y)
if(r==null)return B.nS
q.w=r.a
return new A.lJ(q,p,r)},
lj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aq&&s!==B.ar}else s=!0
if(s)return i
r=h.gbj()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.d6
p=J.P(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.ki(!0,!0,o,new A.ui(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aO){B.a.l(this.f,new A.dI(B.ny,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fZ(B.a.ga0(j.c).a,s,s)
s.I(0,q)
p.kT(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ec)if(k===B.c0){s=n.b
s=s.gZ(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dI(B.nx,o,p.b,i,l))}}return m},
fB(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fl(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.P(c);r.m();)s.push(this.jT(a,b,r.gn()))
return s},
jT(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.z(p)
s=A.bB(new A.G(p,r.i("l(1)").a(new A.u1(this)),r.i("G<1>")),t.aS)}return s==null?c:new A.c9(q,s.c,c.c)},
siC(a){this.x=t.Q.a(a)}}
A.u8.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.o(s).i("aa<1>")).L(0,new A.u7(A.q(a)))},
$S:3}
A.u7.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:28}
A.u9.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:15}
A.u3.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:28}
A.u4.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:157}
A.u6.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.u5.prototype={
$0(){return A.c([],t.jV)},
$S:158}
A.u1.prototype={
$1(a){return t.aS.a(a).d.gJ().a3(0,new A.u0(this.a))},
$S:159}
A.u0.prototype={
$1(a){t.q.a(a)
return this.a.y.aT(a.a,a.b)},
$S:160}
A.u2.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:161}
A.lN.prototype={}
A.mh.prototype={}
A.wM.prototype={
$1(a){return B.b.S(A.q(a),"off.")},
$S:3}
A.bN.prototype={
v(){return"DoorChoice."+this.b}}
A.c7.prototype={
v(){return"VisitPhase."+this.b}}
A.c8.prototype={
v(){return"VisitTier."+this.b}}
A.eo.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dI.prototype={
A(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gam(){return this.c}}
A.d7.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bx.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.bx&&b.a===this.a&&b.b===this.b},
gP(a){return A.d_(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c9.prototype={
a7(a,b){if(b==null)return!1
return b instanceof A.c9&&b.a===this.a&&b.b===this.b},
gP(a){return A.d_(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.bV.prototype={
a7(a,b){var s=this
if(b==null)return!1
return b instanceof A.bV&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gP(a){var s=this
return A.d_(s.a,s.b,s.c,s.d,B.h,B.h)},
A(){var s=this
return A.J(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gam(){return this.b},
gaU(){return this.c}}
A.lO.prototype={
A(){var s,r,q,p=this.a
p=A.H(p,A.o(p).c)
B.a.X(p)
s=this.b
r=A.o(s)
q=r.i("dk<1,T<e,@>>")
s=A.H(new A.dk(s,r.i("T<e,@>(1)").a(new A.u_()),q),q.i("n.E"))
r=this.c
return A.J(["contacted",p,"resolved",s,"active",r==null?null:r.A()],t.N,t.z)}}
A.u_.prototype={
$1(a){return t.T.a(a).A()},
$S:162}
A.jL.prototype={
A(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"arrival",r.a.A())
q.k(0,"tier",r.b.b)
q.k(0,"phase",r.c.b)
q.k(0,"lineIndex",r.d)
s=r.e
q.k(0,"choice",s==null?null:s.b)
q.k(0,"complianceMarked",r.f)
s=r.r
if(s!=null)q.k(0,"reactionChoiceId",s)
return q}}
A.nb.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:163}
A.nc.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:164}
A.nd.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:165}
A.lL.prototype={
gbj(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.ua.prototype={}
A.bl.prototype={}
A.lK.prototype={}
A.lI.prototype={}
A.iJ.prototype={}
A.lJ.prototype={}
A.hk.prototype={}
A.mk.prototype={
glc(){var s,r
if(!this.aC)return B.m
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.eZ.ld(s,r)},
gmt(){var s="shadowCaster",r=this.dZ
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.hD(s).a+";shadowTriangles="+r.hD(s).b+";frameMs="+B.c.ae(this.e_,3)},
gmr(){var s=this.dZ
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.e_<=100},
mC(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.hJ()
l.r=k
k=B.cf.i3(k)
l.w=k
q=l.b
p=l.c
s=new A.lw(q,p,q,p)
o=A.Ad(l.d.a)
l.e=o
try{o.hw(l.jn(k,q,p),s)}catch(n){r=A.ag(n)
k=l.w
if(k===B.aj)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.u(r)
l.w=B.aj
k=A.Ad(l.d.a)
k.hw(B.m6,s)
l.e=k}k=l.e
k.bY()
m=A.Ev(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c8=l.b
l.c9=l.c
l.f6()
l.mm=A.Eb(!0,!0,!0)
l.aC=!0},
cZ(a,b){var s,r=this
if(a<=0||b<=0)throw A.a(A.w("Pixeldart surface size must be positive",null))
if(!r.aC){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.ca!==a||r.cb!==b)r.cb=r.ca=null
s=r.e
s===$&&A.p()
s.bY()
new A.lw(a,b,a,b).C()
if(r.cK==null)r.cK=r.bX()},
bX(){var s=0,r=A.aL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bX=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.c8
h=n.b
if(!(i!==h||n.c9!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.f(m)
s=8
return A.a4(A.w2(i,B.ci.h6("auto","full","srgb",h,"auto","profile",A.f(l),g)),$async$bX)
case 8:n.c8=m
n.c9=l
n.cb=n.ca=null
A.jB()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ag(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.u(k)
n.ca=n.b
n.cb=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.cK=null
i=n.ca
h=n.b
j=i===h&&n.cb===n.c
if(!j)i=n.c8!==h||n.c9!==n.c
else i=!1
if(i)n.cK=n.bX()
s=o.pop()
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$bX,r)},
f3(a,b,c,d,e,f,g,h){return B.ci.h6(d,e,f,a,g,h,c,b)},
jn(a,b,c){return this.f3(a,b,c,"auto","full","srgb","auto","profile")},
f6(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.Q===s
if(p){r=7
break A}if(B.I===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.I===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.h(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.q7(r,p,A.a1(q),A.a1(q),A.m(q,t.i))},
cH(a){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cH=A.aM(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aC){s=1
break}switch(a.b.a){case 0:i=B.dB
break
case 2:i=B.aj
break
case 1:i=B.dA
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.f3(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.a4(A.w2(i,t.lg.a(k)),$async$cH)
case 7:n.w=t.xK.a(m)
n.f6()
n.c8=n.b
n.c9=n.c
n.x=null
A.jB()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ag(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.u(j)
A.jB()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cH,r)},
l1(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.aC||b4.Q.length!==0)return
b4.hj=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gb5().eb(8,"texture:wall-plaster",!0,256,B.b4,256))
s.k(0,b7,b4.e.gb5().eb(8,"texture:grime",!0,512,B.b4,512))
for(q=0;q<2;++q){p=B.kn[q]
r=b4.e.w
if(r==null)r=A.h(A.j(b8))
s.k(0,p,r.eb(8,"texture:"+p,!0,256,B.b4,256))}b4.dC()
b4.cB()
b4.RG=b4.fv(A.qk(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
b4.jM()
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.R8,j=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.J(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cC(g,g.r,g.e,A.o(g).i("cC<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bq.h(0,c)
if(b==null)A.h(A.j("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.qk(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.h(A.j(b8))
if(a0.x)A.h(A.j(b9))
c.C()
a1=a0.b.a.aB(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.jJ[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dv(a2)
j=b4.dv(a2)
l=A.qk(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dv(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.h(A.j(b8)):j
if(n.x)A.h(A.j(b9))
l.C()
a1=n.b.a.aB(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cB()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b4.jN(c0,r[q])
b4.kj(c0)
$.x.j().setAttribute("data-renderer-house-model-scale",B.c.ae(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.t)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.f9(c0,i,a4)
g=b4.e.w
if(g==null)g=A.h(A.j(b8))
f=a4.a
if(g.x)A.h(A.j(b9))
e=g.a
a5.C()
a1=e.b.aB(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.b9(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.RG
e.toString}a6=new A.b9(a1,e,B.v,0,B.M,B.L,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.v.C()
a=e.a
a0=a.$ti
a.V(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.v.a6()
c=c.gah()
a0=A.z(c)
A.aW(new A.F(c,a0.i("C(1)").a(a.gaj()),a0.i("F<1,C>")))
n.k(0,f,new A.j1(f,g,e.b.bI(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.t)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.kf(i,a4.b0(f),a4.aL(f),a4.aL(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.uW(a4))
a=b4.e.w
if(a==null)a=A.h(A.j(b8))
if(a.x)A.h(A.j(b9))
a0=a.a
e.C()
a1=a0.b.aB(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.b9(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.RG
e.toString}else e=a
a8=new A.b9(a1,e,B.v,0,B.M,B.L,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.v.C()
a=e.a
a0=a.$ti
a.V(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.v.a6()
a=a.gah()
a7=A.z(a)
A.aW(new A.F(a,a7.i("C(1)").a(a0.gaj()),a7.i("F<1,C>")))
B.a.l(o,new A.mj(f,e.b.bI(a8),a8,c))}for(r=A.Iy(A.HU(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.dr(e)
a0=b4.dr(e)
a=A.qk(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.dr(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.h(A.j(b8)):a0
if(c.x)A.h(A.j(b9))
a.C()
a1=c.b.a.aB(a,b5)
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
a1=a7.b.aB(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.b9(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ak.p(0,a0))A.h(A.w("unknown exterior cell: "+a0,b5))
b3=new A.b9(a1,b,B.v,-1,B.M,B.L,B.mv.p(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.p()
B.v.C()
c=e.a
a=c.$ti
c.V(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.v.a6()
c=c.gah()
a0=A.z(c)
A.aW(new A.F(c,a0.i("C(1)").a(a.gaj()),a0.i("F<1,C>")))
j.k(0,b2,e.b.bI(b3))}},
ez(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="renderer is not initialized",b6="resource library is disposed",b7="promoted model package is missing: "
b4.id=A.ai(b8.e,t.fl)
if(!b4.aC)return
for(s=b4.p2,r=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));r.m();)r.d.a_()
s.M(0)
r=b4.p3
if(r!=null)r.b.M(0)
r=b4.p4
b4.p3=r==null?null:new A.re(new A.r9(r),A.m(t.N,t.K))
for(r=b4.ch,q=new A.M(r,A.o(r).i("M<1,2>")).gu(0),p=b4.CW;q.m();){o=q.d
o.toString
n=b4.f
n===$&&A.p()
n.b.aG(o.b)
m=p.h(0,o.a)
if(m!=null){o=b4.e
o===$&&A.p()
o=o.w
if(o==null)o=A.h(A.j(b5))
n=m.a
if(o.x)A.h(A.j(b6))
o.a.aG(n)
o.f.a1(0,n)}}r.M(0)
p.M(0)
q=b4.cx
B.a.M(q)
for(o=b4.id,n=o.length,l=b8.c,k=b4.ok,j=t.fH,i=t.d,h=t.s3,g=b4.p1,f=0;f<n;++f){e=o[f]
d=e.c
c=B.b.p(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b4.hj
b=c==null?null:c.e.h(0,e.b)
if(b==null)continue
a=b8.c2(d)
if(b4.p3!=null&&b4.p4.a.N(a.a)){c=e.f
a0=c.a
a1=A.rm(B.W,c.b.b*3.141592653589793/180)
a2=a.a
a3=b4.p4.a.h(0,a2)
a2=a3==null?A.h(A.j(b7+a2)):a3
a3=b4.e
a3===$&&A.p()
a3=a3.w
if(a3==null)a3=A.h(A.j(b5))
a4=b4.f
a4===$&&A.p()
a5=b.d
a6=A.c([],i)
a7=A.c([],h)
a8=new A.h2(a2.c,g,a3,a4,new A.uZ(b4,a),new A.hg(new A.C(a5.a+a0.a*l,a5.b+a0.b*l,a5.c+a0.c*l),a1,c.c.a*l),-1,a6,a7)
a9=a8.j4("LOD0")
a8.x=a9.a
B.a.I(a6,a9.c)
B.a.I(a7,a9.b)
c=b4.p3
c.toString
a0=j.a(new A.v_(a8))
a2=c.b
a3=e.a
if(a2.N(a3))A.h(A.j("presentation placement is already bound: "+a3))
d=b8.c2(d).a
if(c.a.a.a.h(0,d)==null)A.h(A.j(b7+d))
a2.k(0,a3,a0.$1(new A.h5()))
s.k(0,a3,a8)
continue}d=b4.e
d===$&&A.p()
d=d.w
if(d==null)d=A.h(A.j(b5))
c=b4.jR(a,e,l)
a0=e.a
if(d.x)A.h(A.j(b6))
a2=d.a
c.C()
b0=a2.b.aB(c,"inventory:"+a0)
a3=b0.a
a2.c.k(0,a3,a2.b9(c))
d.f.l(0,b0)
d=e.f
c=d.a
a1=A.rm(B.W,d.b.b*3.141592653589793/180)
d=a.b
a2=k.h(0,d)
if(a2==null){a2=k.h(0,"furniture")
a2.toString}a4=b.d
c=new A.hg(new A.C(a4.a+c.a*l,a4.b+c.b*l,a4.c+c.c*l),a1,1)
m=new A.b9(b0,a2,c,-1,B.M,B.L,d!=="micro",!0,0,null)
B.a.l(q,b0)
p.k(0,a0,m)
d=b4.f
d===$&&A.p()
c.C()
a2=d.a
a4=a2.$ti
a2.V(a4.c.a(b0))
a2=a2.b
if(!(a3>=0&&a3<a2.length))return A.d(a2,a3)
b1=a2[a3].c
a2=(b1==null?a4.y[1].a(b1):b1).d
c=c.a6()
a2=a2.gah()
a3=A.z(a2)
A.aW(new A.F(a2,a3.i("C(1)").a(c.gaj()),a3.i("F<1,C>")))
r.k(0,a0,d.b.bI(m))}b2=s.a
b3=r.a
$.x.j().setAttribute("data-renderer-inventory-items",""+(b3+b2))
s=$.x.j()
r=b2===0?"proxy":"mixed"
s.setAttribute("data-renderer-inventory-resolution",r)
$.x.j().setAttribute("data-renderer-inventory-proxy-count",""+b3)
$.x.j().setAttribute("data-renderer-inventory-promoted-count",""+b2)
b4.kk()},
kk(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
for(s=this.p2,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.m(r,q)
o.k(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.I(0,new A.qy(n.a.a.b,"LOD0",!l,k,j,m).A())
i.push(o)}s=$.x.j()
o=i.length!==0
n=o&&B.a.a3(i,new A.uQ())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a8(A.J(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
cQ(a){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$cQ=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=2
return A.a4(B.f0.cg(a,new A.uX(),new A.uY()),$async$cQ)
case 2:n=c
q.p4=n
p=$.jt
if(p!=null)q.ez(p)
$.x.j().setAttribute("data-renderer-model-packages","validated")
$.x.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.x.j()
o=n.a.gY()
p.setAttribute("data-renderer-model-package-count",""+o.gt(o))
return A.aJ(null,r)}})
return A.aK($async$cQ,r)},
ij(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=c3.e,c2=c1.h(0,c4)
if(c2==null)return
s=c2.a
r=t.N
q=A.aF([s],r)
for(p=c3.aO(s),o=J.P(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gn()
m=n.ci(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c1.h(0,m)!=null)q.l(0,m)}for(c1=c0.ax,c1=new A.M(c1,A.o(c1).i("M<1,2>")).gu(0),s=c0.ay,p=t.h1,o=c0.at;c1.m();){l=c1.d
n=l.a
k=q.p(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aN(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=c0.c0(i[f],k)
d=c0.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.V(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a6()
a=a.gah()
a0=A.z(a)
A.aW(new A.F(a,a0.i("C(1)").a(b.gaj()),a0.i("F<1,C>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.V(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].saZ(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gW(h))}for(c1=c0.go,s=c1.length,a3=0;a3<c1.length;c1.length===s||(0,A.t)(c1),++a3){a4=c1[a3]
k=q.p(0,a4.a)&&a4.d.$0()?-1:0
p=c0.f
p===$&&A.p()
o=c0.c0(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.V(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a6()
i=i.gah()
g=A.z(i)
A.aW(new A.F(i,g.i("C(1)").a(n.gaj()),g.i("F<1,C>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.V(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].saZ(o)}c1=c0.fr
s=A.o(c1).i("aa<1>")
s=A.H(new A.aa(c1,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=c1.h(0,s[a3])
o=a5.e
e=c0.c0(o,q.p(0,a5.b)?-1:0)
o=c0.f
o===$&&A.p()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.V(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a6()
g=g.gah()
d=A.z(g)
A.aW(new A.F(g,d.i("C(1)").a(i.gaj()),d.i("F<1,C>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.V(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].saZ(e)
c1.k(0,a5.a,a5.lr(e))}for(c1=c0.id,s=c1.length,p=c0.ch,o=c0.CW,n=c0.p2,a3=0;a3<s;++a3){a6=c1[a3]
i=a6.a
a7=p.h(0,i)
a8=o.h(0,i)
a9=n.h(0,i)
b0=q.p(0,a6.b)
if(a9!=null){a9.ii(b0?-1:0)
continue}if(a7==null||a8==null)continue
i=c0.f
i===$&&A.p()
g=c0.c0(a8,b0?-1:0)
d=g.c
d.C()
c=i.a
b=c.$ti
a=b.c.a(g.a)
c.V(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
a2=c[a].c
c=(a2==null?b.y[1].a(a2):a2).d
d=d.a6()
c=c.gah()
b=A.z(c)
A.aW(new A.F(c,b.i("C(1)").a(d.gaj()),b.i("F<1,C>")))
i=i.b
b=i.$ti
b.c.a(a7)
b.y[1].a(g)
i.V(a7)
i=i.b
b=a7.a
if(!(b>=0&&b<i.length))return A.d(i,b)
i[b].saZ(g)}b1=new A.kj().lg(c4)
c1=$.x.j()
s=A.H(b1,A.o(b1).c)
B.a.X(s)
c1.setAttribute("data-renderer-exterior-cells",B.a.T(s,","))
c1=c0.dx
r=new A.kj().hl(new A.v0(c0),new A.aa(c1,A.o(c1).i("aa<1>")),b1,r)
b2=A.eW(r,r.$ti.i("n.E"))
c1=c0.db
s=A.o(c1).i("aa<1>")
s=A.H(new A.aa(c1,s),s.i("n.E"))
r=s.length
p=c0.cy
b3=0
b4=0
b5=0
a3=0
for(;a3<s.length;s.length===r||(0,A.t)(s),++a3){b6=s[a3]
b7=p.h(0,b6)
if(b7==null)continue
a8=c1.h(0,b6)
o=a8.r
if(o)++b5
b8=b2.p(0,b6)
if(b8)++b3
if(b8&&o)++b4
e=c0.c0(a8,b8?-1:0)
o=c0.f
o===$&&A.p()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.V(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a6()
i=i.gah()
g=A.z(i)
A.aW(new A.F(i,g.i("C(1)").a(n.gaj()),g.i("F<1,C>")))
o=o.b
g=o.$ti
g.c.a(b7)
g.y[1].a(e)
o.V(b7)
o=o.b
g=b7.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].saZ(e)
c1.k(0,b6,e)}$.x.j().setAttribute("data-renderer-exterior-items",""+b3+"/"+c1.a)
$.x.j().setAttribute("data-renderer-shadow-casters",""+b4+"/"+b5)
c1=A.o(b2)
s=c1.i("dk<1,e>")
b9=A.H(new A.dk(b2,c1.i("e(1)").a(new A.v1(c0)),s),s.i("n.E"))
B.a.X(b9)
$.x.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.T(b9,","))},
cX(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aC)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fD(b0,n)
l=J.aN(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.h(A.j(a8))
c=a7.dw(e.b)
b=g.b
if(d.x)A.h(A.j(a9))
a=d.a
c.C()
a0=a.b.aB(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.b9(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.b9(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a7.f
c===$&&A.p()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.V(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a6()
b=b.gah()
a3=A.z(b)
A.aW(new A.F(b,a3.i("C(1)").a(d.gaj()),a3.i("F<1,C>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.V(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].saZ(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a1(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.h(A.j(a8)):a
if(d.x)A.h(A.j(a9))
d.a.aG(a6)
d.f.a1(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gW(j))
$.x.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hk+1));++a7.hk},
ea(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aC)return
s=k.fr
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.p()
m=p.gb5().hL(k.f9(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.b9(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.kO(l)
p.b.ek(n,l)
s.k(0,b,r.ha(l,m))
s=k.y
n=r.d
B.a.a1(s,n)
B.a.l(s,m)
k.e.gb5().nu(n)},
i6(d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=this,d4="rain_override",d5="wetness_override",d6=A.aF([e0],t.N),d7=d9.e,d8=d7.h(0,e0)
if(d8!=null)for(s=d8.a,r=d9.aO(s),q=J.P(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gn()
o=p.ci(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d7.h(0,o)!=null)d6.l(0,o)}n=new A.pC(d9).o2(d6,e1)
d7=t.jC
m=A.c([],d7)
l=A.c([],d7)
for(k=0;k<n.length;++k){j=n[k]
d7=k===0
s=d7?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.h(A.al(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.h(A.al(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.h(A.al(p,"radius","must be finite and > 0"))
d7=d7?l:m
B.a.l(d7,new A.b3(k,s,j.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d7=d3.fx
d7===$&&A.p()
i=d7.nq(e1,m,l)
d7=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d7.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.t)(r),++h){g=r[h]
p=g.a
f=d7.h(0,p).a
e=g.d
s.push(new A.l2(p,new A.C(f.a,f.b,f.c),new A.c0(e.a,e.b,e.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.t)(q),++h){g=q[h]
f=g.a
e=d7.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bI(f,new A.C(d.a,d.b,d.c),new A.C(e.a,e.b,e.c),new A.c0(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}d3.j9(i,++d3.fy)
d7=$.eE()
b=d7.a9("time_override")
if(b>=0)a=B.c.D(b,0,23.999)
else a=e6
d3.he=a
a0=e4.c
a1=B.c.R(B.c.R(a,24)+24,24)
a2=B.c.D(a0,0,1)
a3=B.c.D(e4.d,6,16)/2
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
b1=A.ch(B.lR,B.bB,b0)
b2=A.ch(B.lT,B.bA,b0)
b3=A.ch(B.lN,B.bC,b0)
b4=0.3+0.5*b0
b5=0.25+0.2*b0}else if(q&&a1<14){b1=B.bB
b2=B.bA
b3=B.bC
b4=0.85
b5=0.45}else if(a1>=14&&a1<a5){b0=(a1-14)/(a5-14)
b1=A.ch(B.bB,B.dC,b0)
b2=A.ch(B.bA,B.dF,b0)
b3=A.ch(B.bC,B.dE,b0)
b4=0.85*(1-b0*0.35)
b5=0.45*(1-b0*0.25)}else if(a1>=a5&&a1<a5+1.5){b0=(a1-a5)/1.5
b1=A.ch(B.dC,B.aH,b0)
b2=A.ch(B.dF,B.aG,b0)
b3=A.ch(B.dE,B.aI,b0)
b4=0.55*(1-b0*0.8)
b5=0.34*(1-b0*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){b0=(a1-q)/1.5
b1=A.ch(B.aH,B.aH,b0)
b2=A.ch(B.aG,B.aG,b0)
b3=A.ch(B.aI,B.aI,b0)
b4=0.11*(1-b0*0.25)
b5=0.16*(1-b0*0.15)}else{b1=B.aH
b2=B.aG
b3=B.aI
b4=0.15
b5=0.18}}if(a2>0){b6=A.ch(b3,B.m0,a2*0.7)
b4*=1-a2*0.35
b5*=1-a2*0.15}else b6=b3
b7=e5?1:0.15
b8=B.c.D(0.3333333333333333,0,1)
b9=B.c.D(a2*0.75+b8*0.25,0,1)
if(d7.a9(d4)>=0)a0=d7.a9(d4)
d3.x1=B.c.D(a0,0,1)
d3.dY=B.c.D(d7.a9(d5)>=0?d7.a9(d5):b9,0,1)
q=$.CI()
q.nY(0.0166,a0)
c0=q.y
c1=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
c2=c1>0.001
c3=c2?new A.C(p,f,e):new A.C(-p,d,-e)
q=c0.a
p=!1
if(q){f=c0.f
if(isFinite(f)){e=c0.r
if(isFinite(e)){d=c0.w
if(isFinite(d)){p=c0.x
p=isFinite(p)&&p>=0&&f*f+e*e+d*d>1e-8}}}}c4=p?new A.C(c0.f,c0.r,c0.w):c3
c5=c2?new A.c0(b1.c,b1.b,b1.a):new A.c0(0.35,0.45,0.65)
if(q){p=c0.b
c6=new A.c0(c5.a+c0.c*p*2,c5.b+c0.d*p*2,c5.c+c0.e*p*2.5)}else c6=c5
c7=B.c.D(c0.gm6(),0.12,2)
b4*=b7
if(q)b4=b4*0.12+c0.b*4.5*c7
p=$.x.j()
p.setAttribute("data-renderer-lightning-active",String(q))
p.setAttribute("data-renderer-lightning-source-distance-m",B.c.ae(c0.x,1))
p.setAttribute("data-renderer-lightning-source-direction",B.c.ae(c0.f,3)+","+B.c.ae(c0.r,3)+","+B.c.ae(c0.w,3))
c8=d7.er("fog_enable")
c9=d7.a9("fog_density")
d0=d7.a9("fog_height_falloff")
d1=c8?(0.0015+a2*0.014+b8*0.003)*B.c.D(c9/0.012,0,8):0
d2=c8?(0.04+a2*0.08+b8*0.02)*B.c.D(d0/0.6,0,8):0
d3.dX=d1
d3.hf=d2
d3.ry=new A.km(B.j9,new A.c0(b6.c*0.08,b6.b*0.08,b6.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d2,d1,new A.c0(b2.c,b2.b,b2.a),Math.max(0.045,b5*(c2?c1:1)*b7),new A.ox(c4,c6,b4),s,r)},
kq(){var s,r,q,p,o,n,m,l=this,k="wetness_override",j="fog_height_falloff",i="post_affine_warp",h="post_vertex_snap",g=t.N,f=A.aF(["time_override","rain_override",k,"fog_enable","fog_density",j,"post_exposure","post_vignette","post_film_grain",i,h],g),e=A.m(g,g),d=$.eE().w
d===$&&A.p()
s=0
for(;s<43;++s)e.k(0,d[s].a,"No resolved Pixeldart frame mapping is installed")
d=new A.uV(l,f,e)
d.$2("ssao",B.jH)
d.$2("bloom",B.k7)
d.$2("dof",B.k9)
d.$2("grade",B.k8)
d.$2("ps1",B.kl)
d.$2("vhs",B.ka)
d=$.eE()
r=l.he
q=l.x1
p=l.dY
o=l.dX
n=l.hf
m=l.to
m=A.J(["time_override",r,"rain_override",q,k,p,"fog_density",o,j,n,"post_exposure",m.a,"post_bloom",m.b,"post_vignette",m.e,"post_film_grain",m.f,"post_dither",m.y,"post_depth_of_field",m.d,"post_color_grade",m.z,i,m.Q,h,m.as,"post_quantization_bits",m.at,"post_vhs_chroma",m.ax,"post_vhs_noise",m.ch],g,t.i)
d.nG("No resolved debug attachments are exposed by the active Pixeldart profile",A.J(["fog_enable",l.dX>0,"shadow_ssdo_enable",l.to.c>0],g,t.y),m,f,e)
e=$.CJ()
e.l_(d)
$.x.j().setAttribute("data-renderer-shader-overrides",B.f.a8(e.a,null))
$.x.j().setAttribute("data-renderer-shader-lab",B.f.a8(d.m2(),null))
$.x.j().setAttribute("data-renderer-shader-lab-document",B.f.a8(d.nT(),null))},
jM(){var s,r,q=this
if(q.dV!=null||q.dW!=null)return
s=new Float32Array(A.a0(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=q.e
r===$&&A.p()
q.dV=r.gb5().hL(q.dw(s),"weather:rain-particle")
q.dW=q.fv(B.kH)},
kC(a,b){var s,r,q,p,o,n,m,l,k=this
k.y1=k.xr=0
k.y2=k.gfu()
k.dT=k.dS=0
k.dU=!1
s=k.dV
r=k.dW
if(s==null||r==null||k.x1<=0.01||k.x2<=0.01)return
q=B.d.D(B.c.aH(8+k.x1*32*k.x2),0,40)
p=k.gfu()
if(q<0)A.h(A.w("atmospheric particle counts must be >= 0",null))
o=B.d.D(q,0,p)
k.xr=q
k.y2=p
k.dU=B.d.D(q,0,p)!==q
n=Math.sin(k.e0*0.7)*0.18
m=new A.nl(s,r,B.ej,B.ng,B.nj,new A.C(n,-2,0.12),B.nh,new A.C(n,-8.8,0.12),4.5,0.9,o,k.hh,!0,1918986606)
l=m.ms(b)
k.dS=l.b
k.dT=l.c
k.y1=m.iE(a,b)},
gfu(){var s,r=this.w
r===$&&A.p()
s=r.a
A:{if(B.Q===s){r=40
break A}if(B.I===s){r=24
break A}r=8
break A}return r},
fD(a,b){var s=A.HV(a,b),r=A.HT(a,b),q=A.H(s.c,t.i)
B.a.I(q,r)
return A.c([new A.hk("wall",new Float32Array(A.a0(q))),new A.hk("floor",s.a),new A.hk("ceiling",s.b)],t.pv)},
dw(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.C(q,p,a[o]))}if(n.length===0)throw A.a(A.j("house surface mesh cannot be empty"))
return new A.bP(B.a8,a,null,A.aW(n))},
jN(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fD(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.a(A.j("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.h(A.j("renderer is not initialized"))
j=b.dw(l.b)
i=l.a
if(k.x)A.h(A.j("resource library is disposed"))
h=k.a
j.C()
g=h.b.aB(j,n+i)
f=g.a
h.c.k(0,f,h.b9(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.b9(g,i,B.v,-1,B.M,B.L,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.v.C()
k=i.a
j=k.$ti
k.V(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.v.a6()
k=k.gah()
h=A.z(k)
A.aW(new A.F(k,h.i("C(1)").a(j.gaj()),h.i("F<1,C>")))
c=i.b.bI(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gW(r))
if(q.length!==0)b.at.k(0,a0,B.a.gW(q))},
kj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.J(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cC(l,l.r,l.e,A.o(l).i("cC<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bq.h(0,i)
if(h==null)A.h(A.j("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.x.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.T(e,","))
$.x.j().setAttribute("data-renderer-house-surface-bindings",B.a.T(d,","))},
jR(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d5(new Float32Array(5376))
g=this.jP(a0.b)
r=new A.k(d,b,f)
q=new A.k(e,b,f)
p=new A.k(e,c,f)
o=new A.k(d,c,f)
n=new A.k(d,b,a)
m=new A.k(e,b,a)
l=new A.k(e,c,a)
k=new A.k(d,c,a)
s.aM(q,r,o,p,g)
s.aM(n,m,l,k,g)
s.aM(r,n,k,o,g)
s.aM(m,q,p,l,g)
s.aM(r,q,m,n,g)
s.aM(o,k,l,p,g)
j=B.r.aI(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.C(e,d,j[c]))}return new A.bP(B.a8,j,null,A.aW(g))},
jP(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
jQ(a){var s=this.ok,r=s.h(0,a)
if(r==null){s=s.h(0,"furniture")
s.toString}else s=r
return s},
dr(a){var s
A:{if(0===a){s=B.lO
break A}if(1===a){s=B.lQ
break A}if(2===a){s=B.lW
break A}if(3===a){s=B.m3
break A}if(4===a){s=B.m4
break A}if(5===a){s=B.lU
break A}if(6===a){s=B.m2
break A}if(7===a){s=B.lZ
break A}s=B.m1
break A}return s},
dv(a){var s
A:{if("architecture"===a){s=B.lP
break A}if("furniture"===a){s=B.dD
break A}if("fixture"===a){s=B.lY
break A}if("service"===a){s=B.m_
break A}if("story"===a){s=B.lX
break A}if("decor"===a){s=B.lS
break A}if("micro"===a){s=B.lV
break A}s=B.dD
break A}return s},
cR(a){return this.mR(t.G.a(a))},
mR(a){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l
var $async$cR=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:if(!p.aC){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.jl[n]
l=a.h(0,m)
if(l!=null)o.push(p.cz(m,l))}s=3
return A.a4(A.oV(o,t.H),$async$cR)
case 3:case 1:return A.aJ(q,r)}})
return A.aK($async$cR,r)},
cz(a,b){return this.jU(a,b)},
jU(a,b){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cz=A.aM(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a4(A.aD(A.b(m.decode()),t.X),$async$cz)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.f(m.naturalWidth)
g.height=A.f(m.naturalHeight)
l=g
k=A.L(l.getContext("2d"))
if(!t.m.b(k)){h=A.j("2D canvas context unavailable for "+a)
throw A.a(h)}k.drawImage(m,0,0)
j=t.mV.a(A.b(k.getImageData(0,0,A.f(m.naturalWidth),A.f(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gb5()
f=new Uint8Array(A.a0(j))
if(h.x)A.h(A.j("resource library is disposed"))
h.c.nZ(d,f)
h=n.e.gb5()
if(h.x)A.h(A.j("resource library is disposed"))
h.c.mp(d)
$.x.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dC()
n.cB()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ag(c)
h=$.x.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dC()
n.cB()
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.u(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cz,r)},
dC(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aC||i.k1.a===0)return
s=i.k1
r=A.o(s).i("M<1,2>")
r=A.kL(new A.M(s,r),r.i("bT(n.E)").a(new A.uR()),r.i("n.E"),t.jP)
q=A.H(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gb5().gfN().cU(q)
s=p.a
o=A.c(s.slice(0),A.z(s))
B.a.U(o,new A.uS())
s=A.z(o)
r=s.i("e(1)")
s=s.i("F<1,e>")
n=new A.F(o,r.a(new A.uT()),s).T(0,",")
m=new A.F(o,r.a(new A.uU()),s).T(0,",")
s=p.cE(B.dU)
r=p.cE(B.dV)
l=p.cE(B.dW)
k=p.cE(B.dX);++i.hi
j=$.x.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hi)
if(!A.Q($.x.j().hasAttribute("data-renderer-texture-residency-initial")))$.x.j().setAttribute("data-renderer-texture-residency-initial",n)},
cB(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aC||j.R8.a===0)return
s=A.c([],t.a6)
for(r=j.R8,r=new A.M(r,A.o(r).i("M<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cZ(p,o,B.b.p(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gb5()
n=r.e
if(n===$){p=r.gfN()
r.e!==$&&A.z1()
n=r.e=new A.ql(p)}m=n.cU(s)
s=m.a
l=A.c(s.slice(0),A.z(s))
B.a.U(l,new A.uO())
s=A.z(l)
k=new A.F(l,s.i("e(1)").a(new A.uP()),s.i("F<1,e>")).T(0,",")
s=$.x.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cv(B.bt)+";pending="+m.cv(B.dg)+";missing="+m.cv(B.dh)+";evicted="+m.cv(B.di))},
c0(a,b){return new A.b9(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
f9(a,b,c){var s,r,q,p,o,n=A.HS(a,b,c),m=n.length
if(m===0)throw A.a(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.C(q,p,n[o]))}return new A.bP(B.a8,n,null,A.aW(s))},
kf(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().aK(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.k(k,s,r),new A.k(q,s,r),new A.k(q,p,r),new A.k(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.k(k,s,r),new A.k(q,s,r),new A.k(q,p,r),new A.k(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.k(k,s,r),new A.k(k,s,q),new A.k(k,p,q),new A.k(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.k(k,s,r),new A.k(k,s,q),new A.k(k,p,q),new A.k(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.d5(new Float32Array(5376))
o.aM(k[0],k[1],k[2],k[3],g)
n=B.r.aI(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.C(r,q,n[p]))}return new A.bP(B.a8,n,null,A.aW(k))},
j9(a,b){var s,r,q,p=a.e,o=A.o(p).i("M<1,2>"),n=A.H(new A.M(p,o),o.i("n.E"))
B.a.U(n,new A.uK())
p=$.x.j()
o=a.a
s=A.z(o)
r=a.c
q=A.z(r)
p.setAttribute("data-renderer-light-selection","points="+new A.F(o,s.i("i(1)").a(new A.uL()),s.i("F<1,i>")).T(0,":")+";spots="+new A.F(r,q.i("i(1)").a(new A.uM()),q.i("F<1,i>")).T(0,":"))
q=A.z(n)
p.setAttribute("data-renderer-light-rejections",new A.F(n,q.i("e(1)").a(new A.uN()),q.i("F<1,e>")).T(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
fv(a){var s,r=this.e
r===$&&A.p()
r=r.gb5()
if(r.x)A.h(A.j("resource library is disposed"))
a.C()
s=r.b.a.aB(a,null)
r.r.l(0,s)
this.R8.k(0,a.a,a)
return s},
$iAa:1}
A.uW.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:47}
A.uZ.prototype={
$1(a){A.f(a)
return this.a.jQ(this.b.b)},
$S:167}
A.v_.prototype={
$1(a){return this.a},
$S:168}
A.uQ.prototype={
$1(a){return J.a8(t.of.a(a).h(0,"attached"),!0)},
$S:169}
A.uX.prototype={
$1(a){var s=0,r=A.aL(t.N),q,p
var $async$$1=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=3
return A.a4(A.aD(A.b(A.b(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.Q(p.ok))throw A.a(A.j("package manifest HTTP "+A.u(A.mZ(p,"status",t.S))+": "+a))
s=4
return A.a4(A.aD(A.b(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$1,r)},
$S:170}
A.uY.prototype={
$2(a,b){var s=0,r=A.aL(t.uo),q,p,o
var $async$$2=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:s=3
return A.a4(A.aD(A.b(A.b(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.Q(p.ok))throw A.a(A.j("package payload HTTP "+A.u(A.mZ(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a4(A.aD(A.b(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.zZ(d,0,null)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$2,r)},
$S:171}
A.v0.prototype={
$1(a){var s=this.a.dx.h(0,A.q(a))
s.toString
return s},
$S:26}
A.v1.prototype={
$1(a){var s,r,q,p
A.q(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.a(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:26}
A.uV.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.p()
if(r.b.p(0,a)){this.b.I(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.k(0,b[o],p+s.w.a.b+" does not install it")},
$S:172}
A.uR.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bT(s,a.b,r)},
$S:173}
A.uS.prototype={
$2(a,b){var s=t.e
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:174}
A.uT.prototype={
$1(a){t.e.a(a)
return a.a.a+"="+a.b.b},
$S:48}
A.uU.prototype={
$1(a){var s=t.e.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:48}
A.uO.prototype={
$2(a,b){var s=t.wl
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:176}
A.uP.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:177}
A.uK.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:178}
A.uL.prototype={
$1(a){return t.J.a(a).a},
$S:49}
A.uM.prototype={
$1(a){return t.J.a(a).a},
$S:49}
A.uN.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:180}
A.mj.prototype={}
A.j1.prototype={
ha(a,b){var s=this,r=b==null?s.d:b
return new A.j1(s.a,s.b,s.c,r,a)},
lr(a){return this.ha(a,null)}}
A.uo.prototype={
gam(){return this.b},
gaU(){return this.c}}
A.vu.prototype={
$2(a,b){var s
A.yL(a,A.u(b))
switch(a){case"master":s=$.bq
if(s!=null)s.ia(b)
break
case"voice":s=$.bq
if(s!=null)s.ic(b)
break
case"effects":s=$.bq
if(s!=null)s.i9(b)
break
case"ambience":s=$.bq
if(s!=null)s.i8(b)
break
case"music":s=$.bq
if(s!=null)s.ib(b)
break}},
$S:38}
A.vv.prototype={
$1(a){var s
A.yL("muted",""+a)
s=$.bq
if(s!=null)s.eB(a)},
$S:10}
A.vw.prototype={
$1(a){var s
A.yL("mono",""+a)
s=$.bq
if(s!=null)s.d5(a)},
$S:10}
A.vC.prototype={
$2(a,b){A.yM(a,A.u(b))
A.AY(a,b)},
$S:38}
A.vD.prototype={
$1(a){var s="high-contrast"
A.yM(s,""+a)
A.vh(s,a)},
$S:10}
A.vE.prototype={
$1(a){var s="strong-highlights"
A.yM(s,""+a)
A.vh(s,a)},
$S:10}
A.vF.prototype={
$1(a){$.df().ny(a)
A.wj()
A.B_()},
$S:182}
A.vG.prototype={
$0(){var s=$.df()
s.a=A.dD(null,1)
s.b=A.dD(null,1)
A.wj()
A.B_()},
$S:0}
A.vH.prototype={
$0(){A.dS(this.a)},
$S:0}
A.vI.prototype={
$0(){this.a.ab()},
$S:0}
A.vJ.prototype={
$0(){A.dS(this.a)},
$S:0}
A.vx.prototype={
$0(){A.hy(this.a)},
$S:0}
A.vy.prototype={
$1(a){$.jr=a
A.Bu()
A.yd()},
$S:183}
A.vz.prototype={
$1(a){var s=$.cM()
$.yr=a
if(!s.Q&&a.Q){$.bo.j().a=1
$.bo.j().hM(7)
$.av.j().ht()
$.cu().M(0)}A.Bw()
A.AZ()},
$S:184}
A.vA.prototype={
$1(a){$.ex=a
A.yz()
A.mK()},
$S:185}
A.vB.prototype={
$0(){$.ex=B.at
$.fp.j().ex($.ex)
A.yz()
A.mK()},
$S:0}
A.vr.prototype={
$1(a){var s,r=A.C7(a,A.Bg())
$.js=A.fU($.jF().b,a)
s=r.b
$.ew.j().cp(a,$.jF().b,s)
$.x.j().setAttribute("data-graphics-fallback",B.a.T(s,"|"))
$.Bh=A.mM(a,r,$.Bh)},
$S:186}
A.vs.prototype={
$0(){A.dS($.ew.j())},
$S:0}
A.vt.prototype={
$0(){A.dS($.ew.j())},
$S:0}
A.vn.prototype={
$1(a){},
$S:18}
A.vo.prototype={
$1(a){var s,r
$.yn=a
$.af.j().ey(a.r)
s=$.af.j()
r=s.ch
r.a=a.f
r.ed()
s.be()
A.Bv()},
$S:187}
A.vp.prototype={
$0(){A.dS($.jj.j())},
$S:0}
A.vq.prototype={
$0(){A.dS($.jj.j())},
$S:0}
A.wa.prototype={
$0(){$.ww=A.Q(this.a.matches)
$.yR=A.Q(this.b.matches)
A.mK()},
$S:0}
A.w8.prototype={
$1(a){return this.a.$0()},
$S:2}
A.w9.prototype={
$1(a){return this.a.$0()},
$S:2}
A.wV.prototype={
$1(a){var s
try{A.zB(this.b,a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.A)return!1
else throw s}},
$S:188}
A.wW.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jq.j()
break
case 5:p=$.fp.j()
break
case 1:p=$.ew.j()
break
case 4:p=$.hq.j()
break
case 2:p=$.jl.j()
break
case 3:p=$.jj.j()
break}s=p
r=null
switch(o){case 0:r=B.lf
break
case 5:r=B.lk
break
case 1:r=B.lg
break
case 4:r=B.lj
break
case 2:r=B.lh
break
case 3:r=B.li
break}q=r
p=B.dd.h(0,a)
p.toString
A.yy(s,q,p)},
$S:189}
A.wX.prototype={
$0(){A.dS($.hs.j())},
$S:0}
A.x7.prototype={
$0(){return A.dS($.hs.j())},
$S:0}
A.xg.prototype={
$0(){$.cr.j().ab()},
$S:0}
A.xh.prototype={
$0(){$.cr.j().ab()},
$S:0}
A.xi.prototype={
$0(){A.yy($.hs.j(),B.dk,"pause.settings")},
$S:0}
A.xj.prototype={
$0(){$.cr.j().ab()
A.jz($.jm.j())},
$S:0}
A.xk.prototype={
$0(){A.mV("saved")},
$S:0}
A.xl.prototype={
$0(){$.cr.j().ab()
A.jz($.jm.j())},
$S:0}
A.xm.prototype={
$0(){A.yy($.mH.j(),B.ll,"pause.credits")},
$S:0}
A.wY.prototype={
$0(){return A.hy($.cr.j())},
$S:0}
A.wZ.prototype={
$0(){return A.hy($.jn.j())},
$S:0}
A.x_.prototype={
$2(a,b){var s,r
if($.av.j().y){s=$.aH.j().gc7()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.G6(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.d0,a)
A.G5(B.d0[a])}}},
$S:190}
A.x0.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gad().a===21){A.BC(!1)
return}s=$.Y.j().r.b
$.V.j().iw(a,b,$.aw)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d3()
if(typeof n!=="number")return A.wQ(n)
if(!(o<n))break
if($.Y.b===$.Y)A.h(A.a7(""))
p=B.a.h(B.O,q).b
o=$.aT
if(o!=null){n=$.Y.b
if(n===$.Y)A.h(A.a7(""))
o.cX(n,p)}o=q
if(typeof o!=="number")return o.a4()
q=o+1}A.mV("saved after sleep")},
$S:191}
A.x1.prototype={
$0(){return A.hy($.mJ.j())},
$S:0}
A.x2.prototype={
$0(){return A.hy($.jm.j())},
$S:0}
A.x3.prototype={
$0(){return A.dS($.mH.j())},
$S:0}
A.x4.prototype={
$0(){A.hy($.jk.j())},
$S:0}
A.x5.prototype={
$0(){A.hy($.jk.j())},
$S:0}
A.x6.prototype={
$1(a){return A.BB()},
$S:2}
A.x8.prototype={
$1(a){if(A.q(A.b(v.G.document).visibilityState)==="hidden")A.H5()},
$S:1}
A.x9.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b(a)
if(A.q(l.code)==="CapsLock"&&!A.Q(l.repeat)){l.preventDefault()
p=$.eE()
o=!p.a
p.a=o
if(o)A.pV(A.b(v.G.document),"exitPointerLock",t.X)
else $.af.j().cY($.x.j())
return}p=$.eE()
if(p.a&&!A.Q(l.repeat)){if(A.q(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.af.j().cY($.x.j())
return}if(A.q(l.code)==="ArrowUp"||A.q(l.code)==="KeyW"){l.preventDefault()
n=p.gbm().length
if(n>0)p.c=B.d.R(p.c-1+n,n)
o=$.eA
if(o!=null){p=p.gbm().length
o.a.d4(-1,p)}return}if(A.q(l.code)==="ArrowDown"||A.q(l.code)==="KeyS"){l.preventDefault()
n=p.gbm().length
if(n>0)p.c=B.d.R(p.c+1,n)
o=$.eA
if(o!=null){p=p.gbm().length
o.a.d4(1,p)}return}if(A.q(l.code)==="ArrowLeft"||A.q(l.code)==="KeyA"){l.preventDefault()
p.m0()
return}if(A.q(l.code)==="ArrowRight"||A.q(l.code)==="KeyD"){l.preventDefault()
p.mA()
return}if(A.q(l.code)==="KeyQ"){l.preventDefault()
m=p.gbH()
p=m==null?null:m.Q===B.t
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.c.D(m.y-m.w*0.2,m.f,m.r)
return}if(A.q(l.code)==="KeyE"){l.preventDefault()
m=p.gbH()
p=m==null?null:m.Q===B.t
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.c.D(m.y+m.w*0.2,m.f,m.r)
return}if(A.q(l.code)==="KeyR"){l.preventDefault()
if(A.Q(l.shiftKey))p.nx()
else p.nz()
return}if(B.b.S(A.q(l.code),"Digit")||B.b.S(A.q(l.code),"Numpad")){o=A.q(l.code)
o=A.z0(o,"Digit","")
s=A.z0(o,"Numpad","")
r=A.dz(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.av.j().y&&!A.Q(l.repeat))if($.cu().mw(A.q(l.code))){l.preventDefault()
return}if(A.q(l.code)==="Escape"&&!A.Q(l.repeat)){p=$.bp
if(p==null)A.jz($.cr.j())
else p.ab()
return}q=$.bp==null&&!p.a
if(!A.Q(l.repeat)&&q)$.fq.j().hp(new A.le(A.q(l.code),!0,1))
if(A.q(l.code)==="KeyP"&&!A.Q(l.repeat)&&$.CA())$.mS=!$.mS
if((A.q(l.code)==="KeyJ"||A.q(l.code)==="Tab")&&!A.Q(l.repeat)&&!$.av.j().y){l.preventDefault()
A.jC($.jn.j())}if(A.q(l.code)==="KeyL"&&!A.Q(l.repeat)&&!$.av.j().y)A.jC($.mJ.j())
if(A.q(l.code)==="KeyH"&&!A.Q(l.repeat)&&!$.av.j().y)A.jC($.jm.j())
if(A.q(l.code)==="KeyO"&&!A.Q(l.repeat)&&!$.av.j().y)A.jC($.jp.j())
if(A.q(l.code)==="KeyK"&&!A.Q(l.repeat)&&q)A.mV("saved")},
$S:1}
A.xa.prototype={
$1(a){var s=A.b(a)
if($.bp==null)$.fq.j().hp(new A.le(A.q(s.code),!1,0))},
$S:1}
A.xb.prototype={
$1(a){return A.B1()},
$S:2}
A.xc.prototype={
$1(a){return A.B1()},
$S:2}
A.xd.prototype={
$1(a){return A.Gy(A.b(a))},
$S:2}
A.xe.prototype={
$1(a){var s=A.b(a)
if($.av.j().y){s.preventDefault()
A.Gx(s)
return}$.af.j().cY($.x.j())},
$S:1}
A.xf.prototype={
$1(a){var s,r,q,p=A.b(a),o=$.eE()
if(!o.a||$.eA==null)return
p.preventDefault()
s=o.gbm()
r=A.a6(p.deltaY)>0?1:-1
o=$.eA
o.toString
q=J.cN(s)
o.a.d4(A.f(r),q)},
$S:1}
A.wb.prototype={
$1(a){var s=A.q(A.b(a).message)
A.wm(s,null)},
$S:1}
A.wc.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.wm("unhandled rejection: "+A.u(s==null?A.q(a.type):s),null)},
$S:1}
A.wi.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:46}
A.ws.prototype={
$0(){this.a.className=""},
$S:14}
A.wy.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:41}
A.wf.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:25}
A.wo.prototype={
$1(a){return t.g.a(a).e},
$S:22}
A.wk.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.wl.prototype={
$1(a){return t.fW.a(a).w},
$S:23};(function aliases(){var s=J.eg.prototype
s.iG=s.q
s=A.n.prototype
s.iF=s.d1
s=A.ij.prototype
s.iH=s.bP})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"GF","DV",40)
r(J.r.prototype,"gar","p",9)
q(A,"GU","Eg",31)
r(A.aY.prototype,"gar","p",9)
r(A.fS.prototype,"gar","p",9)
p(A.cl.prototype,"glm","N",9)
o(A,"HN","Fb",24)
o(A,"HO","Fc",24)
o(A,"HP","Fd",24)
q(A,"BS","Hu",0)
r(A.cp.prototype,"gar","p",9)
r(A.hi.prototype,"gar","p",9)
o(A,"I_","Gf",13)
p(A.kN.prototype,"gnE","nF",104)
var n
p(n=A.lz.prototype,"gnA","nB",11)
p(n,"gnJ","nK",11)
p(n,"gnL","nM",11)
p(n,"gnC","nD",11)
p(n,"gnH","nI",11)
q(A,"BY","Fh",193)
q(A,"Ju","xT",47)
p(A.dv.prototype,"gaj","hQ",65)
p(n=A.kA.prototype,"gjW","jX",2)
p(n,"gjY","jZ",2)
p(n,"gk5","k6",2)
p(n,"gk9","ka",2)
p(n,"gkb","kc",2)
p(n,"gk7","k8",2)
p(n,"gk_","k0",2)
o(A,"Im","B6",13)
o(A,"Iq","B5",13)
o(A,"If","DS",194)
o(A,"Ig","DT",195)
o(A,"Iu","DM",196)
p(A.ij.prototype,"gkd","ke",2)
p(A.hc.prototype,"gjK","jL",140)
p(A.lM.prototype,"gmJ","mK",28)
o(A,"C6","H8",197)
q(A,"C5","Gc",0)
o(A,"Ij","G7",132)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.I,null)
q(A.I,[A.xK,J.kC,A.iw,J.eI,A.n,A.hL,A.ar,A.a_,A.rM,A.an,A.i8,A.U,A.hV,A.hS,A.iL,A.ay,A.el,A.bK,A.h0,A.fH,A.e6,A.dL,A.d3,A.tQ,A.qP,A.hT,A.j6,A.a9,A.qe,A.bO,A.ac,A.cC,A.i3,A.mf,A.lW,A.iE,A.mx,A.up,A.v9,A.cG,A.m8,A.mA,A.v5,A.lX,A.cb,A.bd,A.m0,A.dK,A.aq,A.lY,A.mv,A.jh,A.iT,A.me,A.fl,A.iW,A.jb,A.mB,A.e7,A.k4,A.uI,A.vd,A.va,A.eN,A.e8,A.m5,A.kY,A.iC,A.uq,A.A,A.N,A.at,A.my,A.tB,A.bw,A.jd,A.tU,A.ms,A.qO,A.mb,A.es,A.dW,A.lG,A.qx,A.kO,A.qI,A.qz,A.qC,A.eY,A.ro,A.ek,A.l4,A.o9,A.oa,A.oc,A.ob,A.l3,A.fD,A.km,A.oQ,A.dB,A.kw,A.c0,A.ox,A.l2,A.bI,A.dw,A.b6,A.iI,A.bP,A.k7,A.qQ,A.l5,A.lg,A.b9,A.lw,A.it,A.aQ,A.oR,A.cZ,A.c2,A.qn,A.ql,A.kN,A.lC,A.qt,A.hK,A.qw,A.qy,A.h2,A.la,A.bT,A.c6,A.tL,A.tJ,A.dc,A.lz,A.dt,A.kk,A.kl,A.kn,A.oP,A.hj,A.aA,A.bs,A.aR,A.R,A.hN,A.l8,A.bv,A.rq,A.bh,A.rs,A.rr,A.ma,A.is,A.lf,A.ur,A.mz,A.v4,A.ml,A.m7,A.mp,A.mi,A.uD,A.bQ,A.bM,A.b0,A.os,A.or,A.fy,A.f_,A.oS,A.dv,A.lb,A.hg,A.C,A.nm,A.nl,A.hJ,A.lZ,A.jX,A.m_,A.k9,A.m2,A.hQ,A.m3,A.kd,A.m4,A.kv,A.m9,A.ia,A.mg,A.fB,A.jY,A.xU,A.il,A.mm,A.l9,A.mn,A.f9,A.lp,A.mq,A.lq,A.mr,A.ls,A.mu,A.lr,A.mt,A.lH,A.mC,A.iu,A.lS,A.mF,A.o7,A.kr,A.kt,A.hY,A.iz,A.y,A.ka,A.h4,A.pd,A.eu,A.d1,A.fO,A.uh,A.dN,A.jg,A.jf,A.mE,A.mD,A.vf,A.ud,A.ug,A.kc,A.jR,A.hm,A.nr,A.n7,A.hH,A.nn,A.xF,A.nz,A.nt,A.iM,A.fC,A.o4,A.oO,A.kA,A.pN,A.pR,A.b3,A.qa,A.q7,A.ot,A.qg,A.d5,A.k,A.lt,A.lT,A.nY,A.ke,A.oD,A.fP,A.bz,A.l1,A.rh,A.hb,A.rF,A.f6,A.kp,A.p1,A.p0,A.jT,A.dY,A.e_,A.e1,A.dZ,A.e0,A.jZ,A.kP,A.cI,A.lU,A.i0,A.pv,A.a3,A.kh,A.kx,A.pw,A.ki,A.db,A.kj,A.er,A.eb,A.rC,A.eq,A.pt,A.oH,A.tx,A.py,A.cX,A.cA,A.pU,A.pS,A.pT,A.dy,A.pC,A.ff,A.c4,A.kK,A.fa,A.f5,A.pF,A.cW,A.pu,A.eU,A.pE,A.cV,A.pJ,A.ik,A.i7,A.bt,A.ub,A.kJ,A.bZ,A.pX,A.hI,A.nV,A.im,A.ra,A.io,A.l6,A.r5,A.r4,A.r6,A.r7,A.r8,A.h5,A.r9,A.rb,A.re,A.rf,A.i6,A.rn,A.rA,A.le,A.rz,A.rB,A.to,A.co,A.tq,A.hd,A.ou,A.ui,A.fg,A.k2,A.pL,A.pP,A.rD,A.d2,A.rE,A.kq,A.fe,A.uc,A.oZ,A.ko,A.qJ,A.cQ,A.bD,A.r2,A.tD,A.fd,A.fc,A.iK,A.lP,A.f3,A.d8,A.tC,A.ix,A.ll,A.li,A.lj,A.lk,A.tG,A.jJ,A.xE,A.dV,A.nh,A.dX,A.nX,A.be,A.o5,A.fJ,A.di,A.k3,A.ij,A.oy,A.p7,A.p9,A.fR,A.ec,A.pp,A.pg,A.ph,A.cg,A.pq,A.d0,A.fE,A.qS,A.dx,A.ei,A.c3,A.qX,A.rl,A.ba,A.ti,A.tm,A.cv,A.ne,A.lM,A.ua,A.dI,A.bx,A.c9,A.bV,A.lO,A.jL,A.lL,A.hk,A.mk,A.mj,A.j1,A.uo])
q(J.kC,[J.kE,J.i2,J.i4,J.fW,J.fX,J.fV,J.ef])
q(J.i4,[J.eg,J.r,A.eh,A.ie])
q(J.eg,[J.l0,J.fb,J.du])
r(J.kD,A.iw)
r(J.pW,J.r)
q(J.fV,[J.i1,J.kF])
q(A.n,[A.ep,A.S,A.cD,A.G,A.hU,A.dJ,A.fk,A.lV,A.mw,A.bX])
q(A.ep,[A.eM,A.ji])
r(A.iR,A.eM)
r(A.iP,A.ji)
r(A.b4,A.iP)
q(A.ar,[A.fY,A.dG,A.kG,A.lB,A.lh,A.m6,A.i5,A.jO,A.cw,A.iG,A.lA,A.he,A.k1])
r(A.hh,A.a_)
r(A.dj,A.hh)
q(A.S,[A.X,A.aa,A.am,A.M,A.fj,A.iV])
q(A.X,[A.iF,A.F,A.bF,A.md])
r(A.dk,A.cD)
q(A.bK,[A.et,A.dM])
q(A.et,[A.aB,A.fo,A.j2])
q(A.dM,[A.aC,A.bb,A.j3,A.j4])
r(A.ho,A.h0)
r(A.em,A.ho)
r(A.hO,A.em)
q(A.e6,[A.k0,A.k_,A.ly,A.wR,A.wT,A.ul,A.uk,A.vi,A.oW,A.uB,A.uE,A.qh,A.uG,A.xo,A.xp,A.wI,A.tn,A.qA,A.qF,A.qG,A.qE,A.wd,A.wv,A.wg,A.wt,A.rp,A.tZ,A.qq,A.qr,A.qs,A.qR,A.qo,A.qp,A.qu,A.wJ,A.tM,A.tN,A.tP,A.oL,A.oJ,A.oK,A.qU,A.qV,A.rx,A.rw,A.rv,A.ru,A.rt,A.ry,A.w0,A.w1,A.rH,A.rI,A.xv,A.xt,A.oT,A.qj,A.wF,A.pe,A.pf,A.ue,A.uf,A.nB,A.nE,A.nD,A.nF,A.ns,A.n8,A.n9,A.na,A.np,A.nq,A.no,A.pO,A.q8,A.oG,A.p2,A.p4,A.p5,A.p6,A.nG,A.nH,A.nI,A.nJ,A.nK,A.nM,A.nN,A.nO,A.nP,A.nQ,A.nR,A.nS,A.nL,A.wE,A.nT,A.nU,A.wh,A.wB,A.o8,A.oI,A.px,A.xw,A.w5,A.w4,A.vg,A.wr,A.pK,A.ty,A.pB,A.pz,A.wA,A.pG,A.pI,A.wz,A.oC,A.qd,A.q3,A.wq,A.rc,A.rd,A.rg,A.tp,A.tv,A.tr,A.ts,A.tu,A.tt,A.ov,A.ow,A.oY,A.r3,A.rK,A.rL,A.tH,A.tI,A.n6,A.n4,A.nw,A.nx,A.o_,A.o3,A.o2,A.o1,A.ol,A.ok,A.om,A.on,A.oo,A.oj,A.oe,A.of,A.oq,A.oz,A.oA,A.oB,A.oF,A.p8,A.pa,A.pb,A.pn,A.pk,A.pl,A.pm,A.pj,A.pi,A.ps,A.pZ,A.q_,A.q0,A.qY,A.qZ,A.r_,A.td,A.te,A.t5,A.t6,A.t4,A.t7,A.rQ,A.t8,A.t9,A.ta,A.t3,A.rW,A.rX,A.rY,A.rZ,A.t_,A.t0,A.t1,A.t2,A.rV,A.rR,A.rS,A.rT,A.rU,A.tc,A.tb,A.tk,A.tA,A.ng,A.u8,A.u7,A.u9,A.u3,A.u6,A.u1,A.u0,A.wM,A.u_,A.nb,A.nc,A.nd,A.uZ,A.v_,A.uQ,A.uX,A.v0,A.v1,A.uR,A.uT,A.uU,A.uP,A.uL,A.uM,A.uN,A.vv,A.vw,A.vD,A.vE,A.vF,A.vy,A.vz,A.vA,A.vr,A.vn,A.vo,A.w8,A.w9,A.wV,A.wW,A.x6,A.x8,A.x9,A.xa,A.xb,A.xc,A.xd,A.xe,A.xf,A.wb,A.wc,A.wi,A.wy,A.wo,A.wk,A.wl])
q(A.k0,[A.od,A.q4,A.wS,A.vj,A.wC,A.oX,A.uC,A.qf,A.qi,A.uJ,A.tW,A.tV,A.qB,A.qD,A.qH,A.xx,A.xy,A.xq,A.qm,A.qv,A.tK,A.tO,A.oM,A.rJ,A.xu,A.xs,A.nC,A.nu,A.nv,A.q9,A.p3,A.wu,A.pD,A.qc,A.tw,A.pQ,A.p_,A.qL,A.qM,A.qN,A.tE,A.tF,A.o6,A.q1,A.q2,A.nf,A.u4,A.u2,A.uY,A.uV,A.uS,A.uO,A.uK,A.vu,A.vC,A.x_,A.x0,A.wf])
q(A.fH,[A.a2,A.cT])
q(A.d3,[A.fI,A.j5,A.jc])
q(A.fI,[A.aY,A.fS])
q(A.k_,[A.ri,A.um,A.un,A.v6,A.oU,A.us,A.ux,A.uw,A.uu,A.ut,A.uA,A.uz,A.uy,A.v3,A.wp,A.vc,A.vb,A.w_,A.vT,A.vU,A.vZ,A.vO,A.vQ,A.vP,A.vY,A.vM,A.vN,A.vV,A.vW,A.vX,A.vS,A.vR,A.w3,A.wG,A.pA,A.pH,A.w6,A.n5,A.nj,A.ni,A.ny,A.oh,A.oi,A.og,A.pc,A.po,A.r1,A.rO,A.rP,A.tf,A.tg,A.th,A.tl,A.u5,A.uW,A.vG,A.vH,A.vI,A.vJ,A.vx,A.vB,A.vs,A.vt,A.vp,A.vq,A.wa,A.wX,A.x7,A.xg,A.xh,A.xi,A.xj,A.xk,A.xl,A.xm,A.wY,A.wZ,A.x1,A.x2,A.x3,A.x4,A.x5,A.ws])
r(A.ih,A.dG)
q(A.ly,[A.lu,A.fA])
q(A.a9,[A.cl,A.iS,A.mc])
r(A.eV,A.cl)
r(A.h3,A.eh)
q(A.ie,[A.kQ,A.bg])
q(A.bg,[A.iY,A.j_])
r(A.iZ,A.iY)
r(A.ic,A.iZ)
r(A.j0,A.j_)
r(A.id,A.j0)
q(A.ic,[A.ib,A.kR])
q(A.id,[A.kS,A.kT,A.kU,A.kV,A.kW,A.eZ,A.ig])
r(A.hn,A.m6)
r(A.iN,A.m0)
r(A.mo,A.jh)
r(A.iU,A.iS)
r(A.cp,A.j5)
r(A.hi,A.jc)
q(A.e7,[A.kf,A.jU,A.kH])
q(A.kf,[A.jM,A.lF])
q(A.k4,[A.v7,A.nW,A.q6,A.q5,A.tY,A.tX])
r(A.jN,A.v7)
r(A.kI,A.i5)
r(A.uH,A.uI)
q(A.cw,[A.h7,A.kz])
r(A.m1,A.jd)
q(A.m5,[A.kb,A.f1,A.fL,A.fG,A.eT,A.fz,A.i9,A.cH,A.ha,A.fN,A.jW,A.hM,A.fM,A.f4,A.eX,A.cF,A.dF,A.eP,A.ck,A.iv,A.cU,A.h9,A.iB,A.fQ,A.jQ,A.iO,A.iQ,A.ks,A.hW,A.hZ,A.ku,A.eS,A.hX,A.f8,A.d6,A.fF,A.fT,A.hl,A.jV,A.eL,A.k5,A.k8,A.bi,A.jS,A.ci,A.eR,A.eO,A.dl,A.ea,A.e9,A.ed,A.l_,A.ld,A.h8,A.lo,A.iA,A.dE,A.bS,A.bH,A.kB,A.fh,A.cn,A.eJ,A.cO,A.cx,A.cP,A.dh,A.dg,A.e3,A.e4,A.e2,A.eK,A.dp,A.cR,A.cS,A.dq,A.dn,A.dr,A.cj,A.dm,A.cy,A.jK,A.bu,A.cm,A.ej,A.cE,A.bR,A.bG,A.iy,A.bN,A.c7,A.c8,A.eo,A.d7])
q(A.dB,[A.bC,A.bj,A.c1,A.kZ,A.cz])
r(A.rG,A.mp)
r(A.lQ,A.mD)
r(A.iX,A.db)
q(A.ij,[A.hP,A.op,A.oE,A.i_,A.pr,A.pY,A.r0,A.rN,A.hc,A.tz])
q(A.ua,[A.lN,A.mh,A.bl,A.lK,A.lI,A.iJ,A.lJ])
s(A.hh,A.el)
s(A.ji,A.a_)
s(A.iY,A.a_)
s(A.iZ,A.ay)
s(A.j_,A.a_)
s(A.j0,A.ay)
s(A.ho,A.jb)
s(A.jc,A.mB)
s(A.mp,A.uD)
s(A.mD,A.vf)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",D:"double",br:"num",e:"String",l:"bool",at:"Null",K:"List",I:"Object",T:"Map",ah:"JSObject"},mangledNames:{},types:["~()","at(I?)","~(I?)","l(e)","l(D)","ds()","l(@)","0&()","l(co)","l(I?)","~(l)","ds(bj?)","l(aA)","@(@)","at()","l(f3)","i(bZ,bZ)","l(b6)","at(@)","e(dW)","l(R)","~(@)","l(bZ)","l(ff)","~(~())","i(N<e,e>,N<e,e>)","e(e)","l(ba)","l(bV)","@()","N<e,e>(@,@)","i()","@(e)","~(I?,I?)","~(e,e)","e(I?)","e(dY)","e(e_)","~(e,D)","l(i)","i(@,@)","l(bD)","l(cO)","l(N<e,K<e>>)","~(ah)","l(cy)","l(cj)","l()","e(c6)","i(b3)","l(er)","~(f9)","bI?()","K<bI>()","fD()","D()","fB()","l(N<e,aQ>)","aQ(N<e,aQ>)","aQ(aQ,aQ)","i(b0<bQ>,b0<bQ>)","c5(b0<bQ>)","i(b0<bM>,b0<bM>)","c5(b0<bM>)","f_(D,D,D,D)","C(C)","~(i,@)","f9()","~(I,d4)","D(D,hm)","aP<at>(N<e,e>)","l(K<e>)","i(e,e)","i(c4,c4)","T<e,@>(eY)","+effectiveScore,light,score(D,b3,D)(b3)","i(+effectiveScore,light,score(D,b3,D),+effectiveScore,light,score(D,b3,D))","l(ci)","at(I,d4)","~(@,@)","at(~())","l(f5)","dY(I?)","e_(I?)","dZ(I?)","e0(I?)","@(@,e)","i(+influence,light(D,bI),+influence,light(D,bI))","T<e,e>(T<e,e>,e)","e(dZ)","e(e0)","e(e1)","l(c2)","ea(e)","e1(I?)","l(fa)","e(i,a3,a3,a3)","i(db,db)","0&(e,i?)","l(eq)","i(i)","l(c4)","l(cA)","l(cX)","dw(c1)","i(dy,dy)","l(cW)","N<e,e>(e,@)","e?(e)","aP<bU>(e)","c1(i,i,e?)","i(co,co)","l(bS)","l(bH)","fe()","bC(i,i,e?)","i(i,+(bC,bP))","i(N<e,cQ>,N<e,cQ>)","l(c6)","N<i,@>(i,fd)","N<i,@>(i,fc)","i(bT,bT)","l(N<@,@>)","N<e,e>(N<@,@>)","l?(I?)","I?(I?)","e()","0^(n<0^>,I?)<I?>","D(D,e)","bj(i,i,e?)","K<e>(K<e>)","~(D)","~(i)","l(bU?)","at(ah)","0^(e,n<0^>)<B>","i(i,+(bj,dc))","T<e,I?>(dx)","e(bu)","l(bu)","l(bG)","e(aA)","l(dp)","l(cR)","l(cS)","l(dq)","l(dn)","l(dr)","l(dm)","i(ad,ad)","l(cx)","l(cP)","l(dh)","l(dg)","e(cv)","i(cv,cv)","e(i)","i(bV,bV)","K<d8>()","l(d8)","l(N<e,e>)","i(c9,c9)","T<e,@>(bV)","l(c8)","l(c7)","l(bN)","at(@,d4)","c1(i)","h2(h5)","l(T<e,I>)","aP<e>(e)","aP<bU>(e,e)","~(e,n<e>)","bT(N<e,bj>)","i(c6,c6)","cz(i,i,e?)","i(c2,c2)","e(c2)","i(N<i,e>,N<i,e>)","iu(bC)","e(N<i,e>)","ds(e{fallback:e?})","~(bG)","~(dX)","~(fR)","~(dV)","~(ec)","~(fJ)","l(hb)","~(bR)","~(i,e)","~(bS,bH)","i(i,bU)","hj()","cX(I?)","cA(I?)","cW(I?)","~(br)","i(cZ,cZ)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aB&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fo&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.j2&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aC&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bb&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.j3&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.j4&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.Fy(v.typeUniverse,JSON.parse('{"du":"eg","l0":"eg","fb":"eg","IN":"eh","r":{"K":["1"],"S":["1"],"ah":[],"n":["1"]},"kE":{"l":[],"aj":[]},"i2":{"at":[],"aj":[]},"i4":{"ah":[]},"eg":{"ah":[]},"kD":{"iw":[]},"pW":{"r":["1"],"K":["1"],"S":["1"],"ah":[],"n":["1"]},"eI":{"ab":["1"]},"fV":{"D":[],"br":[],"bf":["br"]},"i1":{"D":[],"i":[],"br":[],"bf":["br"],"aj":[]},"kF":{"D":[],"br":[],"bf":["br"],"aj":[]},"ef":{"e":[],"bf":["e"],"qW":[],"aj":[]},"ep":{"n":["2"]},"hL":{"ab":["2"]},"eM":{"ep":["1","2"],"n":["2"],"n.E":"2"},"iR":{"eM":["1","2"],"ep":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"iP":{"a_":["2"],"K":["2"],"ep":["1","2"],"S":["2"],"n":["2"]},"b4":{"iP":["1","2"],"a_":["2"],"K":["2"],"ep":["1","2"],"S":["2"],"n":["2"],"n.E":"2","a_.E":"2"},"fY":{"ar":[]},"dj":{"a_":["i"],"el":["i"],"K":["i"],"S":["i"],"n":["i"],"a_.E":"i","el.E":"i"},"S":{"n":["1"]},"X":{"S":["1"],"n":["1"]},"iF":{"X":["1"],"S":["1"],"n":["1"],"n.E":"1","X.E":"1"},"an":{"ab":["1"]},"cD":{"n":["2"],"n.E":"2"},"dk":{"cD":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"i8":{"ab":["2"]},"F":{"X":["2"],"S":["2"],"n":["2"],"n.E":"2","X.E":"2"},"G":{"n":["1"],"n.E":"1"},"U":{"ab":["1"]},"hU":{"n":["2"],"n.E":"2"},"hV":{"ab":["2"]},"hS":{"ab":["1"]},"dJ":{"n":["1"],"n.E":"1"},"iL":{"ab":["1"]},"hh":{"a_":["1"],"el":["1"],"K":["1"],"S":["1"],"n":["1"]},"bF":{"X":["1"],"S":["1"],"n":["1"],"n.E":"1","X.E":"1"},"aB":{"et":[],"bK":[]},"fo":{"et":[],"bK":[]},"j2":{"et":[],"bK":[]},"aC":{"dM":[],"bK":[]},"bb":{"dM":[],"bK":[]},"j3":{"dM":[],"bK":[]},"j4":{"dM":[],"bK":[]},"hO":{"em":["1","2"],"ho":["1","2"],"h0":["1","2"],"jb":["1","2"],"T":["1","2"]},"fH":{"T":["1","2"]},"a2":{"fH":["1","2"],"T":["1","2"]},"fk":{"n":["1"],"n.E":"1"},"dL":{"ab":["1"]},"cT":{"fH":["1","2"],"T":["1","2"]},"fI":{"d3":["1"],"dC":["1"],"S":["1"],"n":["1"]},"aY":{"fI":["1"],"d3":["1"],"dC":["1"],"S":["1"],"n":["1"]},"fS":{"fI":["1"],"d3":["1"],"dC":["1"],"S":["1"],"n":["1"]},"ih":{"dG":[],"ar":[]},"kG":{"ar":[]},"lB":{"ar":[]},"j6":{"d4":[]},"e6":{"eQ":[]},"k_":{"eQ":[]},"k0":{"eQ":[]},"ly":{"eQ":[]},"lu":{"eQ":[]},"fA":{"eQ":[]},"lh":{"ar":[]},"cl":{"a9":["1","2"],"xM":["1","2"],"T":["1","2"],"a9.K":"1","a9.V":"2"},"aa":{"S":["1"],"n":["1"],"n.E":"1"},"bO":{"ab":["1"]},"am":{"S":["1"],"n":["1"],"n.E":"1"},"ac":{"ab":["1"]},"M":{"S":["N<1,2>"],"n":["N<1,2>"],"n.E":"N<1,2>"},"cC":{"ab":["N<1,2>"]},"eV":{"cl":["1","2"],"a9":["1","2"],"xM":["1","2"],"T":["1","2"],"a9.K":"1","a9.V":"2"},"et":{"bK":[]},"dM":{"bK":[]},"i3":{"Eq":[],"qW":[]},"mf":{"iq":[],"h1":[]},"lV":{"n":["iq"],"n.E":"iq"},"lW":{"ab":["iq"]},"iE":{"h1":[]},"mw":{"n":["h1"],"n.E":"h1"},"mx":{"ab":["h1"]},"h3":{"eh":[],"ah":[],"aj":[]},"eZ":{"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"eh":{"ah":[],"aj":[]},"ie":{"ah":[]},"kQ":{"ah":[],"aj":[]},"bg":{"c_":["1"],"ah":[]},"ic":{"a_":["D"],"bg":["D"],"K":["D"],"c_":["D"],"S":["D"],"ah":[],"n":["D"],"ay":["D"]},"id":{"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"]},"ib":{"oN":[],"a_":["D"],"bg":["D"],"K":["D"],"c_":["D"],"S":["D"],"ah":[],"n":["D"],"ay":["D"],"aj":[],"a_.E":"D","ay.E":"D"},"kR":{"a_":["D"],"bg":["D"],"K":["D"],"c_":["D"],"S":["D"],"ah":[],"n":["D"],"ay":["D"],"aj":[],"a_.E":"D","ay.E":"D"},"kS":{"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"kT":{"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"kU":{"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"kV":{"tS":[],"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"kW":{"tT":[],"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"ig":{"bU":[],"a_":["i"],"bg":["i"],"K":["i"],"c_":["i"],"S":["i"],"ah":[],"n":["i"],"ay":["i"],"aj":[],"a_.E":"i","ay.E":"i"},"m6":{"ar":[]},"hn":{"dG":[],"ar":[]},"cb":{"ab":["1"]},"bX":{"n":["1"],"n.E":"1"},"bd":{"ar":[]},"iN":{"m0":["1"]},"aq":{"aP":["1"]},"jh":{"Ax":[]},"mo":{"jh":[],"Ax":[]},"iS":{"a9":["1","2"],"T":["1","2"]},"iU":{"iS":["1","2"],"a9":["1","2"],"T":["1","2"],"a9.K":"1","a9.V":"2"},"fj":{"S":["1"],"n":["1"],"n.E":"1"},"iT":{"ab":["1"]},"cp":{"d3":["1"],"zS":["1"],"dC":["1"],"S":["1"],"n":["1"]},"fl":{"ab":["1"]},"a_":{"K":["1"],"S":["1"],"n":["1"]},"a9":{"T":["1","2"]},"iV":{"S":["2"],"n":["2"],"n.E":"2"},"iW":{"ab":["2"]},"h0":{"T":["1","2"]},"em":{"ho":["1","2"],"h0":["1","2"],"jb":["1","2"],"T":["1","2"]},"d3":{"dC":["1"],"S":["1"],"n":["1"]},"j5":{"d3":["1"],"dC":["1"],"S":["1"],"n":["1"]},"hi":{"d3":["1"],"mB":["1"],"dC":["1"],"S":["1"],"n":["1"]},"mc":{"a9":["e","@"],"T":["e","@"],"a9.K":"e","a9.V":"@"},"md":{"X":["e"],"S":["e"],"n":["e"],"n.E":"e","X.E":"e"},"jM":{"e7":["e","K<i>"]},"jU":{"e7":["K<i>","e"]},"kf":{"e7":["e","K<i>"]},"i5":{"ar":[]},"kI":{"ar":[]},"kH":{"e7":["I?","e"]},"lF":{"e7":["e","K<i>"]},"eN":{"bf":["eN"]},"D":{"br":[],"bf":["br"]},"e8":{"bf":["e8"]},"i":{"br":[],"bf":["br"]},"K":{"S":["1"],"n":["1"]},"br":{"bf":["br"]},"iq":{"h1":[]},"dC":{"S":["1"],"n":["1"]},"e":{"bf":["e"],"qW":[]},"m5":{"B":[]},"jO":{"ar":[]},"dG":{"ar":[]},"cw":{"ar":[]},"h7":{"ar":[]},"kz":{"ar":[]},"iG":{"ar":[]},"lA":{"ar":[]},"he":{"ar":[]},"k1":{"ar":[]},"kY":{"ar":[]},"iC":{"ar":[]},"my":{"d4":[]},"bw":{"EJ":[]},"jd":{"lD":[]},"ms":{"lD":[]},"m1":{"lD":[]},"mb":{"xV":[]},"es":{"xV":[]},"kb":{"B":[]},"f1":{"B":[]},"fL":{"B":[]},"fG":{"B":[]},"bC":{"dB":[]},"bj":{"dB":[]},"c1":{"dB":[]},"cz":{"dB":[]},"kZ":{"dB":[]},"eT":{"B":[]},"fz":{"B":[]},"i9":{"B":[]},"cH":{"B":[]},"k7":{"Ey":[]},"ha":{"B":[]},"fN":{"B":[]},"jW":{"B":[]},"hM":{"B":[]},"fM":{"B":[]},"f4":{"B":[]},"eX":{"B":[]},"cF":{"B":[]},"dF":{"B":[]},"eP":{"B":[]},"kn":{"Er":[]},"ck":{"B":[]},"iv":{"B":[]},"cU":{"B":[]},"h9":{"B":[]},"is":{"Eu":[]},"ma":{"c5":[]},"lf":{"Ew":[]},"mz":{"c5":[]},"ml":{"Et":[]},"m7":{"DB":[]},"iB":{"B":[]},"bQ":{"bf":["bQ"]},"bM":{"bf":["bM"]},"fQ":{"B":[]},"jQ":{"B":[]},"iO":{"B":[]},"hJ":{"ao":[]},"lZ":{"ad":[]},"jX":{"ao":[]},"m_":{"ad":[]},"k9":{"ao":[]},"m2":{"ad":[]},"iQ":{"B":[]},"hQ":{"ao":[]},"m3":{"ad":[]},"kd":{"ao":[]},"m4":{"ad":[]},"kv":{"ao":[]},"m9":{"ad":[]},"ia":{"ao":[]},"mg":{"ad":[]},"jY":{"Es":[]},"il":{"ao":[]},"mm":{"ad":[]},"l9":{"ao":[]},"mn":{"ad":[]},"lp":{"ao":[]},"mq":{"ad":[]},"lq":{"ao":[]},"mr":{"ad":[]},"ls":{"ao":[]},"mu":{"ad":[]},"lr":{"ao":[]},"mt":{"ad":[]},"lH":{"ao":[]},"mC":{"ad":[]},"lS":{"ao":[]},"mF":{"ad":[]},"ks":{"B":[]},"hW":{"B":[]},"hZ":{"B":[]},"ku":{"B":[]},"eS":{"B":[]},"hX":{"B":[]},"f8":{"B":[]},"d6":{"B":[]},"fF":{"B":[]},"ka":{"Dk":[]},"fT":{"B":[]},"hl":{"B":[]},"bi":{"B":[]},"jV":{"B":[]},"eL":{"B":[]},"k5":{"B":[]},"k8":{"B":[]},"dN":{"ds":[]},"lQ":{"DI":[]},"jS":{"B":[]},"ci":{"B":[]},"eR":{"B":[]},"iX":{"db":[]},"eO":{"B":[]},"dl":{"B":[]},"ea":{"B":[]},"e9":{"B":[]},"ed":{"B":[]},"l_":{"B":[]},"ld":{"B":[]},"h8":{"B":[]},"dE":{"B":[]},"lo":{"B":[]},"iA":{"B":[]},"bS":{"B":[]},"bH":{"B":[]},"kB":{"B":[]},"fh":{"B":[]},"cn":{"B":[]},"eJ":{"B":[]},"cO":{"B":[]},"cx":{"B":[]},"cP":{"B":[]},"dh":{"B":[]},"dg":{"B":[]},"e3":{"B":[]},"e4":{"B":[]},"eK":{"B":[]},"e2":{"B":[]},"dp":{"B":[]},"cR":{"B":[]},"cS":{"B":[]},"dq":{"B":[]},"dn":{"B":[]},"dr":{"B":[]},"cj":{"B":[]},"dm":{"B":[]},"cy":{"B":[]},"jK":{"B":[]},"bu":{"B":[]},"cm":{"B":[]},"ej":{"B":[]},"cE":{"B":[]},"bR":{"B":[]},"bG":{"B":[]},"iy":{"B":[]},"bN":{"B":[]},"c7":{"B":[]},"c8":{"B":[]},"eo":{"B":[]},"d7":{"B":[]},"mk":{"Aa":[]},"DR":{"K":["i"],"S":["i"],"n":["i"]},"bU":{"K":["i"],"S":["i"],"n":["i"]},"EN":{"K":["i"],"S":["i"],"n":["i"]},"DP":{"K":["i"],"S":["i"],"n":["i"]},"tS":{"K":["i"],"S":["i"],"n":["i"]},"DQ":{"K":["i"],"S":["i"],"n":["i"]},"tT":{"K":["i"],"S":["i"],"n":["i"]},"oN":{"K":["D"],"S":["D"],"n":["D"]},"DA":{"K":["D"],"S":["D"],"n":["D"]}}'))
A.Fx(v.typeUniverse,JSON.parse('{"hh":1,"ji":2,"bg":1,"j5":1,"jc":1,"k4":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",p:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Z
return{mq:s("cO"),dx:s("hH"),bC:s("cv"),zU:s("dW"),v:s("bd"),iF:s("jR"),ul:s("dg"),EL:s("cP"),xs:s("cx"),gc:s("dh"),t3:s("jT"),mD:s("dY"),lT:s("dZ"),bJ:s("e_"),gI:s("e0"),ya:s("e1"),z3:s("bM"),Bu:s("fB"),ml:s("hK"),J:s("b3"),rO:s("fE"),E:s("dj"),hO:s("bf<@>"),CH:s("hN"),p:s("a2<e,e>"),I:s("a2<e,i>"),M:s("aY<e>"),f7:s("eN"),fP:s("bN"),yb:s("e8"),he:s("S<@>"),yW:s("ci"),g:s("bZ"),D:s("B"),yt:s("ar"),hl:s("a3"),B:s("oN"),pH:s("aQ"),Fr:s("cQ"),BO:s("eQ"),ls:s("aP<at>"),xJ:s("aP<e>(e)"),zL:s("aP<bU>(e)"),tX:s("aP<bU>(e,e)"),vS:s("dm"),aJ:s("dn"),x:s("cj"),bK:s("dp"),gm:s("dq"),dn:s("cR"),mx:s("dr"),j_:s("cS"),EJ:s("cT<bR,e>"),_:s("ds"),Eb:s("cy"),qX:s("ed"),mF:s("cW"),iO:s("cz"),oW:s("cX"),fl:s("cA"),FA:s("n<hN>"),CB:s("n<cZ>"),yT:s("n<e>"),x6:s("n<bT>"),oJ:s("n<D>"),tY:s("n<@>"),uI:s("n<i>"),Fg:s("r<cv>"),t9:s("r<dW>"),AO:s("r<hK>"),jC:s("r<b3>"),km:s("r<fE>"),sa:s("r<cg>"),ns:s("r<ke>"),U:s("r<bZ>"),uH:s("r<ki>"),Dl:s("r<a3>"),iJ:s("r<aP<~>>"),pC:s("r<kp>"),C1:s("r<ds>"),ka:s("r<bs>"),Fm:s("r<eU>"),op:s("r<cV>"),hr:s("r<dt>"),s3:s("r<cz>"),sL:s("r<ah>"),Bv:s("r<kJ>"),yH:s("r<kK>"),Bq:s("r<N<e,e>>"),rq:s("r<T<e,I>>"),A7:s("r<T<e,e>>"),cs:s("r<T<e,@>>"),bk:s("r<T<e,I?>>"),a6:s("r<cZ>"),p0:s("r<c2>"),d:s("r<bC>"),w4:s("r<eY>"),pq:s("r<aA>"),bA:s("r<dx>"),xz:s("r<bD>"),s0:s("r<f_>"),hc:s("r<d0>"),ea:s("r<dy>"),Fk:s("r<l2>"),qP:s("r<c4>"),d8:s("r<im>"),Fa:s("r<io>"),kv:s("r<f3>"),nR:s("r<+(e,K<c4>)>"),kd:s("r<+(e,e)>"),c2:s("r<+(e,C)>"),rh:s("r<+influence,light(D,bI)>"),wt:s("r<+(i,e)>"),e_:s("r<ao>"),u:s("r<ad>"),Ft:s("r<is>"),C:s("r<R>"),h1:s("r<b9>"),s2:s("r<c5>"),eY:s("r<f5>"),xB:s("r<d2>"),rn:s("r<li>"),gg:s("r<lj>"),tS:s("r<ix>"),yv:s("r<lk>"),wM:s("r<ll>"),El:s("r<hd>"),AM:s("r<b0<bM>>"),fs:s("r<b0<bQ>>"),cv:s("r<bI>"),DZ:s("r<fa>"),s:s("r<e>"),r8:s("r<bT>"),fa:s("r<c6>"),k:s("r<C>"),fi:s("r<k>"),v5:s("r<b6>"),ld:s("r<iK>"),Dc:s("r<dI>"),Fi:s("r<c9>"),jV:s("r<d8>"),yo:s("r<fe>"),nm:s("r<ff>"),uk:s("r<bz>"),wf:s("r<iX>"),il:s("r<er>"),l5:s("r<eq>"),ow:s("r<mi>"),j5:s("r<mj>"),pv:s("r<hk>"),Fy:s("r<eu<dw>>"),EM:s("r<eu<bP>>"),w_:s("r<eu<b9>>"),f2:s("r<eu<dc>>"),n:s("r<D>"),zz:s("r<@>"),t:s("r<i>"),Cf:s("r<I?>"),AN:s("r<br>"),w:s("i2"),m:s("ah"),ud:s("du"),Eh:s("c_<@>"),AQ:s("K<b3>"),hk:s("K<bZ>"),b:s("K<bs>"),xp:s("K<cz>"),nx:s("K<ah>"),rW:s("K<T<e,e>>"),qr:s("K<bC>"),R:s("K<aA>"),fG:s("K<d0>"),Es:s("K<c4>"),DX:s("K<+(e,e)>"),pL:s("K<+(i,e)>"),bE:s("K<b9>"),fx:s("K<d2>"),a:s("K<e>"),uh:s("K<iK>"),D0:s("K<dI>"),cf:s("K<c9>"),p7:s("K<d8>"),dd:s("K<D>"),j:s("K<@>"),L:s("K<i>"),ik:s("K<ah?>"),vX:s("K<I?>"),m2:s("i7"),h6:s("N<e,aQ>"),gJ:s("N<e,cQ>"),q:s("N<e,e>"),no:s("N<e,bj>"),AC:s("N<@,@>"),ou:s("N<i,e>"),pr:s("N<i,@>"),yx:s("N<e,K<e>>"),mf:s("T<e,ds>"),vD:s("T<e,c1>"),of:s("T<e,I>"),ap:s("T<e,aA>"),G:s("T<e,e>"),qH:s("T<e,dF>"),m0:s("T<e,l>"),gG:s("T<e,D>"),P:s("T<e,@>"),f:s("T<@,@>"),eU:s("T<i,e>"),pG:s("T<i,fc>"),tQ:s("T<i,fd>"),Bx:s("T<e,K<e>>"),oZ:s("T<e,I?>"),q1:s("T<c8,K<c9>>"),ee:s("T<i,T<e,e>>"),dH:s("F<i,e>"),jT:s("F<e,e?>"),w1:s("dw"),pw:s("c1"),jt:s("cZ"),wl:s("c2"),kc:s("bC"),aw:s("eY"),mL:s("h2"),rV:s("h3"),mV:s("eZ"),c:s("at"),K:s("I"),fH:s("I(h5)"),BB:s("bQ"),A:s("aA"),oP:s("dx"),wJ:s("bu"),E4:s("bD"),A_:s("dy"),W:s("c4"),DL:s("ik"),AB:s("l4"),yi:s("h4"),rx:s("im"),c_:s("io"),zC:s("l6"),xK:s("ek"),Y:s("f3"),iM:s("IO"),ep:s("+()"),k0:s("+(bC,bP)"),ut:s("+(bj,dc)"),rf:s("+(D,D)"),mn:s("+influence,light(D,bI)"),tK:s("+effectiveScore,light,score(D,b3,D)"),ez:s("iq"),wZ:s("ad"),lg:s("it"),tc:s("d1<cz,b9>"),ja:s("d1<c1,dw>"),wm:s("d1<bC,bP>"),qq:s("d1<bj,dc>"),j2:s("R"),m3:s("b9"),yz:s("c5"),z_:s("f5"),F3:s("d2"),Dm:s("ix"),Q:s("dC<e>"),oG:s("dC<i>"),en:s("bG"),gl:s("ba"),r:s("co"),u5:s("bH"),bG:s("bS"),ho:s("hd"),EH:s("b0<bM>"),E0:s("b0<bQ>"),l:s("d4"),w8:s("fa"),qL:s("bi"),N:s("e"),dc:s("e(i)"),Aj:s("bj"),jP:s("bT"),e:s("c6"),bp:s("dF"),sg:s("aj"),bs:s("dG"),ys:s("tS"),Dd:s("tT"),uo:s("bU"),qF:s("fb"),hL:s("em<e,e>"),qt:s("lC"),eP:s("lD"),zo:s("lG"),cV:s("C"),a7:s("k"),qY:s("b6"),T:s("bV"),gM:s("c7"),hF:s("c8"),vw:s("fc"),BX:s("fd"),aA:s("dI"),AP:s("c9"),sy:s("lP"),bB:s("bl"),aS:s("d8"),fu:s("fe"),fw:s("G<bN>"),vL:s("G<ci>"),vK:s("G<cj>"),Fj:s("G<bH>"),rZ:s("G<bS>"),vY:s("G<e>"),g2:s("G<c7>"),cE:s("G<c8>"),rt:s("U<bG>"),xG:s("U<ba>"),fW:s("ff"),hR:s("aq<@>"),BT:s("iU<I?,I?>"),Ez:s("db"),rL:s("hj"),xT:s("er"),wU:s("eq"),la:s("mh"),qS:s("j1"),jS:s("hm"),EF:s("bX<+(e,bj)>"),Br:s("bX<c5>"),V:s("jf"),h:s("jg"),y:s("l"),Bs:s("l()"),kr:s("l(bN)"),e2:s("l(ci)"),rg:s("l(cj)"),bl:s("l(I)"),pz:s("l(bG)"),aV:s("l(ba)"),y2:s("l(bH)"),ty:s("l(bS)"),Ag:s("l(e)"),da:s("l(c7)"),qR:s("l(c8)"),i:s("D"),z:s("@"),pF:s("@()"),h_:s("@(I)"),nW:s("@(I,d4)"),S:s("i"),eZ:s("aP<at>?"),r9:s("r<I?>?"),gt:s("ah?"),rK:s("K<@>?"),yq:s("T<@,@>?"),jd:s("T<e,K<e>>?"),X:s("I?"),dM:s("Aa?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("bU?"),F:s("dK<@,@>?"),Af:s("me?"),k7:s("l?"),wK:s("l(hb)?"),u6:s("D?"),lo:s("i?"),s7:s("br?"),Z:s("~()?"),Cv:s("~(dV)?"),kC:s("~(dX)?"),pf:s("~(fJ)?"),hq:s("~(fR)?"),CA:s("~(ec)?"),hQ:s("~(bR)?"),Ci:s("~(bG)?"),nf:s("~(bS,bH)?"),DI:s("~(e,D)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),o:s("br"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.j4=J.kC.prototype
B.a=J.r.prototype
B.d=J.i1.prototype
B.c=J.fV.prototype
B.b=J.ef.prototype
B.j5=J.du.prototype
B.j6=J.i4.prototype
B.r=A.ib.prototype
B.P=A.ig.prototype
B.dx=J.l0.prototype
B.bU=J.fb.prototype
B.ab=new A.cO(1,"standard")
B.K=new A.jJ(B.ab)
B.c1=new A.cO(0,"concise")
B.c2=new A.cO(2,"verbose")
B.at=new A.dV(null,null,null,null,null)
B.oe=new A.jK(0,"none")
B.ef=new A.fz(0,"opaque")
B.aR=new A.fz(1,"masked")
B.eh=new A.jN(!1,127)
B.ei=new A.jN(!0,127)
B.ej=new A.jQ(1,"camera")
B.ek=new A.jS(4,"ambience")
B.c6=new A.cx(3,"mono")
B.aS=new A.dh(0,"full")
B.c5=new A.cx(0,"auto")
B.c4=new A.cP(1,"standard")
B.c3=new A.dg(0,"defaultMix")
B.aT=new A.dX(B.c5,B.c4,B.aS,B.c3)
B.er=new A.eJ(0,"broadcast")
B.es=new A.eJ(1,"visitor")
B.et=new A.eJ(2,"aftermath")
B.eu=new A.eJ(3,"ending")
B.aJ=new A.ld(0,"pixeldart")
B.ev=new A.hI(B.aJ,!0,!1,null,!1,null)
B.ew=new A.hI(B.aJ,!1,!1,null,!1,null)
B.c8=new A.e2(1,"capturing")
B.ex=new A.di(B.c8,null)
B.c9=new A.e2(3,"rejected")
B.aU=new A.di(B.c9,null)
B.ca=new A.e2(4,"applied")
B.c7=new A.di(B.ca,null)
B.cb=new A.e2(5,"cancelled")
B.ey=new A.di(B.cb,null)
B.aV=new A.e2(2,"conflict")
B.au=new A.jV(0,"add")
B.eC=new A.eL(0,"zero")
B.ac=new A.eL(1,"one")
B.L=new A.jW(0,"alpha")
B.F=new A.e3(1,"button")
B.n=new A.e4(0,"normal")
B.eF=new A.be("settings.back",B.F,"back","back to pause menu",B.n)
B.av=new A.e3(0,"heading")
B.eG=new A.be("settings.heading",B.av,"Settings",null,B.n)
B.eH=new A.be("settings.controls.heading",B.av,"Controls",null,B.n)
B.eI=new A.be("settings.controls.back",B.F,"back","back to settings categories",B.n)
B.eJ=new A.be("pause.heading",B.av,"Paused",null,B.n)
B.eK=new A.e3(3,"slider")
B.eL=new A.e3(4,"toggle")
B.cc=new A.e3(5,"keybind")
B.aw=new A.e4(5,"disabled")
B.eM=new A.e4(6,"error")
B.eN=new A.e4(7,"destructive")
B.cd=new A.e4(8,"remapping")
B.ce=new A.hH()
B.eO=new A.jM()
B.of=new A.nW()
B.eP=new A.jU()
B.cf=new A.o7()
B.eQ=new A.hS(A.Z("hS<0&>"))
B.cg=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eR=function() {
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
B.eW=function(getTagFallback) {
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
B.eS=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eV=function(hooks) {
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
B.eU=function(hooks) {
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
B.eT=function(hooks) {
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
B.ch=function(hooks) { return hooks; }

B.f=new A.kH()
B.eX=new A.qz()
B.eY=new A.kY()
B.oh=new A.r5()
B.eZ=new A.r6()
B.ci=new A.r8()
B.f_=new A.rb()
B.f0=new A.rf()
B.f1=new A.d2()
B.aK=new A.cn(1,"gradeLUT")
B.f2=new A.d2()
B.f3=new A.rD()
B.f4=new A.rF()
B.h=new A.rM()
B.cj=new A.lF()
B.ck=new A.tY()
B.og=new A.k7()
B.f5=new A.ug()
B.aW=new A.mb()
B.y=new A.mo()
B.ax=new A.my()
B.f6=new A.fC(1.3089969389957472,0.1,60)
B.f7=new A.fC(1.0471975511965976,0.1,60)
B.f8=new A.fC(0.8726646259971648,0.08,45)
B.X=new A.fF(0,"colorOnly")
B.cl=new A.fF(1,"colorAndDepth")
B.aX=new A.fF(2,"depthOnly")
B.f9=new A.hM(0,"linear")
B.aY=new A.hM(1,"srgb")
B.cm=new A.fG(0,"open")
B.fa=new A.fG(1,"committed")
B.fb=new A.fG(2,"aborted")
B.aZ=new A.fL(0,"open")
B.fi=new A.fL(1,"committed")
B.fj=new A.fL(2,"rolledBack")
B.ay=new A.k5(1,"back")
B.az=new A.k8(0,"less")
B.fk=new A.fM(0,"off")
B.cn=new A.fM(1,"errorsOnly")
B.fl=new A.fM(2,"full")
B.co=new A.kb(2,"error")
B.aA=new A.bN(0,"open")
B.cp=new A.bN(1,"chain")
B.cq=new A.bN(2,"throughDoor")
B.cr=new A.bN(3,"letterbox")
B.ad=new A.bN(4,"ignore")
B.M=new A.fN(0,"opaque")
B.fm=new A.fN(1,"masked")
B.aB=new A.fN(2,"blended")
B.fn=new A.fO(!1,B.az,!1,!0,B.ac,B.ac,B.au,!1,B.ay,!0,!1,!0,!0,!0,!0,!1)
B.fo=new A.fO(!0,B.az,!1,!0,B.ac,B.ac,B.au,!0,B.ay,!0,!1,!0,!0,!0,!0,!1)
B.eD=new A.eL(2,"srcAlpha")
B.eE=new A.eL(3,"oneMinusSrcAlpha")
B.fp=new A.fO(!0,B.az,!1,!0,B.eD,B.eE,B.au,!0,B.ay,!0,!1,!0,!0,!0,!0,!1)
B.fq=new A.e8(0)
B.fr=new A.e8(24e5)
B.cs=new A.ci(0,"compliance")
B.fs=new A.fP(B.cs)
B.ct=new A.ci(1,"rupture")
B.ft=new A.fP(B.ct)
B.cu=new A.ci(2,"synchronisation")
B.fu=new A.fP(B.cu)
B.cv=new A.eO(0,"front")
B.fv=new A.eO(1,"rearService")
B.fw=new A.eO(2,"sideBoundary")
B.fx=new A.eO(3,"roofline")
B.u=new A.e9(0,"north")
B.ae=new A.e9(1,"east")
B.p=new A.e9(2,"south")
B.af=new A.e9(3,"west")
B.fy=new A.ea(0,"ground")
B.fz=new A.ea(1,"first")
B.fA=new A.ea(2,"hidden")
B.fB=new A.dl(0,"mantle")
B.fC=new A.dl(1,"portal")
B.fE=new A.dl(3,"inventory")
B.cw=new A.dl(4,"aftermath")
B.fD=new A.dl(2,"window")
B.fG=new A.eb(B.fD,"shutter","the shutter")
B.fF=new A.dl(5,"none")
B.fH=new A.eb(B.fF,null,null)
B.fI=new A.A("saved mantle history is malformed",null,null)
B.fJ=new A.A("rupture elapsed time is malformed",null,null)
B.fK=new A.A("presentation keys must be strings",null,null)
B.fL=new A.A("model package payload hash mismatch",null,null)
B.fM=new A.A("unsupported accessibility profile",null,null)
B.fN=new A.A("unsupported promoted model index schema",null,null)
B.fO=new A.A("materialSlot is required",null,null)
B.fP=new A.A("inventory inspections must be an object",null,null)
B.fQ=new A.A("screenplay event random range is invalid",null,null)
B.cx=new A.A("saved mantle state is malformed",null,null)
B.fR=new A.A("inactive rupture has elapsed time",null,null)
B.fS=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.fT=new A.A("invalid action bindings",null,null)
B.fU=new A.A("listener room is empty",null,null)
B.fV=new A.A("control bindings conflict",null,null)
B.fW=new A.A("saved difficulty state is malformed",null,null)
B.fX=new A.A("saved house drift state is malformed",null,null)
B.fY=new A.A("saved sleep record is malformed",null,null)
B.fZ=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.h_=new A.A("manifest string array is malformed",null,null)
B.h0=new A.A("unsupported settings store",null,null)
B.h1=new A.A("screenplay scene must be an object",null,null)
B.h2=new A.A("settings values must be an object",null,null)
B.h3=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.h4=new A.A("invalid anisotropy limit",null,null)
B.h5=new A.A("audio event position is not finite",null,null)
B.h6=new A.A("event sequence must be non-negative",null,null)
B.h7=new A.A("screenplay branch is invalid",null,null)
B.h8=new A.A("inventory inspection counts are invalid",null,null)
B.h9=new A.A("only keybinds can be remapping",null,null)
B.ha=new A.A("modelScale must be positive and finite",null,null)
B.hb=new A.A("listener position is not finite",null,null)
B.hc=new A.A("screenplay event has invalid core fields",null,null)
B.hd=new A.A("invalid action ID",null,null)
B.he=new A.A("saved window state is malformed",null,null)
B.hf=new A.A("manifest socket map is malformed",null,null)
B.hg=new A.A("unsupported graphics preset",null,null)
B.hh=new A.A("save run and meta must be objects",null,null)
B.hi=new A.A("saved house state is malformed",null,null)
B.hj=new A.A("saved sleep record must be an object",null,null)
B.hk=new A.A("model package parts must be non-empty",null,null)
B.hl=new A.A("sound cue must be a non-empty string",null,null)
B.hm=new A.A("saved session run is malformed",null,null)
B.hn=new A.A("save map keys must be strings",null,null)
B.ho=new A.A("unsupported graphics profile",null,null)
B.hp=new A.A("model package exceeds payload count limit",null,null)
B.hq=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.hr=new A.A("unsupported audio options",null,null)
B.hs=new A.A("transform.scale must be positive",null,null)
B.ht=new A.A("Escape is reserved for pause navigation",null,null)
B.hu=new A.A("saved day-loop state is malformed",null,null)
B.hv=new A.A("rupture extinguished mantle is unknown",null,null)
B.hw=new A.A("model package exceeds part limit",null,null)
B.cy=new A.A("unsupported controls profile",null,null)
B.hx=new A.A("promoted model index entry is malformed",null,null)
B.cz=new A.A("saved portal state is malformed",null,null)
B.hy=new A.A("acoustic portal profile is not finite",null,null)
B.hz=new A.A("model package exceeds total byte limit",null,null)
B.hA=new A.A("unsupported model package schema",null,null)
B.hB=new A.A("manifest socket names are malformed",null,null)
B.hC=new A.A("saved house state does not match this house",null,null)
B.hD=new A.A("presentation snapshot contains a non-finite number",null,null)
B.hE=new A.A("screenplay array contains invalid text",null,null)
B.hF=new A.A("screenplay event day/hour is out of range",null,null)
B.hG=new A.A("unsupported gameplay settings profile",null,null)
B.hH=new A.A("save contains a non-finite number",null,null)
B.hI=new A.A("unsupported graphics store",null,null)
B.hJ=new A.A("screenplay option is invalid",null,null)
B.hK=new A.A("screenplay needs sources and scenes arrays",null,null)
B.hL=new A.A("brush component needs an id and label",null,null)
B.hM=new A.A("text.json root must be an object",null,null)
B.hN=new A.A("screenplay root must be an object",null,null)
B.hO=new A.A("event kind is empty",null,null)
B.hP=new A.A("screenplay event effects are invalid",null,null)
B.hQ=new A.A("promoted model index entries are required",null,null)
B.hR=new A.A("invalid control binding token",null,null)
B.hS=new A.A("audio transmission muffle is invalid",null,null)
B.hT=new A.A("acoustic portal muffle order is invalid",null,null)
B.hU=new A.A("unsupported settings profile",null,null)
B.hV=new A.A("saved session clock is malformed",null,null)
B.hW=new A.A("rupture mantle IDs are malformed",null,null)
B.hX=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.hY=new A.A("invalid screen-reader verbosity",null,null)
B.hZ=new A.A("saved sleep record has an unknown enum",null,null)
B.i_=new A.A("audio cue variants are empty",null,null)
B.i0=new A.A("manifest numeric array is malformed",null,null)
B.i1=new A.A("screenplay beat has invalid kind or text",null,null)
B.i2=new A.A("save root must be an object",null,null)
B.i3=new A.A("audio event identity is empty",null,null)
B.i4=new A.A("screenplay event random range is out of range",null,null)
B.i5=new A.A("render capabilities contain invalid limits",null,null)
B.i6=new A.A("saved house overrides are malformed",null,null)
B.Z=new A.c0(0,0,0)
B.cY=new A.c0(1,1,1)
B.jQ=s([],t.Fk)
B.bi=s([],t.cv)
B.i7=new A.km(B.Z,B.Z,0,1,null,null,B.cY,0,null,B.jQ,B.bi)
B.cA=new A.aQ(0,0,0)
B.i8=new A.eP(0,"idle")
B.ag=new A.eP(1,"active")
B.i9=new A.eP(2,"ended")
B.ia=new A.eP(3,"aborted")
B.b_=new A.fQ(0,"outside")
B.ib=new A.fQ(1,"intersects")
B.ic=new A.fQ(2,"inside")
B.id=new A.eR(0,"timeAdvanced")
B.ie=new A.eR(1,"dayEndReached")
B.ig=new A.eR(4,"slept")
B.ih=new A.eR(5,"complianceFloorTripped")
B.b0=new A.dm(0,"twentyFourHour")
B.cB=new A.dm(1,"twelveHour")
B.cC=new A.dn(0,"important")
B.cD=new A.dn(1,"always")
B.b1=new A.cj(0,"pauseAndMute")
B.cE=new A.dp(0,"press")
B.cF=new A.dp(1,"hold")
B.cG=new A.dq(0,"compact")
B.cH=new A.dq(1,"spacious")
B.cI=new A.cR(1,"standard")
B.cJ=new A.cR(2,"detailed")
B.cK=new A.dr(0,"toast")
B.cL=new A.dr(1,"detailed")
B.cM=new A.cS(1,"readable")
B.io=new A.hW(0,"vertex")
B.cN=new A.hW(1,"indices")
B.cO=new A.ks(0,"staticDraw")
B.i=new A.hX(0,"ready")
B.Y=new A.hX(1,"lost")
B.ah=new A.fT(0,"prepared")
B.ip=new A.fT(1,"committed")
B.iq=new A.fT(2,"rolledBack")
B.ir=new A.eS(0,"color")
B.cP=new A.eS(1,"colorAndGlow")
B.is=new A.eS(2,"colorDepthGlow")
B.b2=new A.eS(3,"depthOnly")
B.b3=new A.hZ(1,"linear")
B.cQ=new A.ku(0,"clampToEdge")
B.it=new A.kt(1,1,1,!1,B.b3,B.b3,B.cQ,1)
B.b4=new A.hZ(2,"linearMipmapLinear")
B.iu=new A.cU(0,"beforeShadow")
B.iv=new A.cU(2,"beforeDepth")
B.cR=new A.cU(3,"afterDepth")
B.cS=new A.cU(4,"beforeWorld")
B.iw=new A.cU(5,"afterWorld")
B.N=new A.cU(6,"afterResolve")
B.ix=new A.cU(9,"beforePresent")
B.cT=new A.ck(0,"readBeforeWrite")
B.iy=new A.ck(1,"duplicateWriter")
B.iz=new A.ck(2,"sampledMultisampledAttachment")
B.b5=new A.ck(3,"invalidResolve")
B.iA=new A.ck(4,"formatOrSizeMismatch")
B.iB=new A.ck(5,"unversionedReadWrite")
B.iC=new A.ck(6,"invalidHistoryRead")
B.iD=new A.ck(7,"dependencyCycle")
B.iE=new A.ck(8,"missingCapability")
B.cU=new A.cy(0,"high")
B.b6=new A.cy(1,"standard")
B.b7=new A.ec(1,B.b6,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.aC=new A.ed(0,"player")
B.b8=new A.ed(1,"inserted")
B.cV=new A.ed(2,"warden")
B.cW=new A.eT(0,"wrongKind")
B.cX=new A.eT(1,"staleGeneration")
B.iH=new A.eT(2,"doubleRelease")
B.aD=new A.eT(3,"releasedResource")
B.iK=new A.cV("kitchen-range","settle")
B.iL=new A.cV("front-door-knocker","knock")
B.iM=new A.cV("cellar-drain","drip")
B.iN=new A.cV("bedroom-timber","creak")
B.iO=new A.cV("kitchen-pipe","tick")
B.iP=new A.cV("bathroom-cistern","settle")
B.iQ=new A.cV("landing-window","wind")
B.j3=new A.kB(1,"visitor")
B.j7=new A.q5(null)
B.j8=new A.q6(null)
B.b9=new A.i6(!1,0,0.85,0.92,1,0,1,0,0)
B.j9=new A.c0(0.008,0.012,0.024)
B.cZ=s([0,2,2,3],t.t)
B.ja=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.ba=s([B.cC,B.cD],A.Z("r<dn>"))
B.jb=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.jc=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bb=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.E=new A.bG(0,"audio")
B.S=new A.iy(0,"level")
B.mG=new A.ba("master","Master",B.E,B.S,1,0,1,"audio")
B.mL=new A.ba("voice","Visitor voice",B.E,B.S,1,0,1,"audio")
B.mC=new A.ba("effects","Effects",B.E,B.S,1,0,1,"audio")
B.mD=new A.ba("ambience","House ambience",B.E,B.S,1,0,1,"audio")
B.mH=new A.ba("music","Music",B.E,B.S,1,0,1,"audio")
B.aL=new A.bG(1,"display")
B.mK=new A.ba("brightness","Display brightness",B.aL,B.S,1,0.6,1.4,"display")
B.al=new A.iy(1,"toggle")
B.mF=new A.ba("muted","Mute house audio",B.E,B.al,!1,null,null,"audio")
B.a6=new A.bG(2,"accessibility")
B.mI=new A.ba("mono","Mono-compatible mix",B.a6,B.al,!1,null,null,"audio")
B.mE=new A.ba("high-contrast","High-contrast interface",B.a6,B.al,!1,null,null,"display")
B.mJ=new A.ba("strong-highlights","Strong focus highlights",B.a6,B.al,!1,null,null,"display")
B.B=s([B.mG,B.mL,B.mC,B.mD,B.mH,B.mK,B.mF,B.mI,B.mE,B.mJ],A.Z("r<ba>"))
B.A=s(["who","verb","object","place","time"],t.s)
B.je=s([81,77,83,72],t.t)
B.el=new A.dg(1,"strong")
B.bc=s([B.c3,B.el],A.Z("r<dg>"))
B.ez=new A.eK(0,"swap")
B.eA=new A.eK(1,"replace")
B.eB=new A.eK(2,"cancel")
B.jf=s([B.ez,B.eA,B.eB],A.Z("r<eK>"))
B.jg=s([2,5,9,12,16,19],t.t)
B.ii=new A.cj(1,"pauseOnly")
B.ij=new A.cj(2,"continuePlayback")
B.aE=s([B.b1,B.ii,B.ij],A.Z("r<cj>"))
B.jh=s(["uQuantizationBits","uDitherStrength"],t.s)
B.jj=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.jk=s([B.aA,B.cp,B.cq,B.cr,B.ad],A.Z("r<bN>"))
B.jl=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.jm=s(["30","60","display"],t.s)
B.jn=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.jo=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.as=new A.c8(0,"full")
B.bZ=new A.c8(1,"compressed")
B.c_=new A.c8(2,"off")
B.d_=s([B.as,B.bZ,B.c_],A.Z("r<c8>"))
B.bd=s([B.b0,B.cB],A.Z("r<dm>"))
B.jp=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eq=new A.dh(1,"reduced")
B.be=s([B.aS,B.eq],A.Z("r<dh>"))
B.em=new A.cP(0,"wide")
B.en=new A.cP(2,"night")
B.bf=s([B.em,B.c4,B.en],A.Z("r<cP>"))
B.jq=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.jB=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.d0=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bg=s([B.cG,B.cH],A.Z("r<dq>"))
B.mT=new A.bS(0,"long")
B.dQ=new A.bS(1,"short")
B.d1=s([B.mT,B.dQ],A.Z("r<bS>"))
B.fg=new A.cg("1 - 9","Select Response",!0)
B.fc=new A.cg("SPACE","Silence Ring",!1)
B.jD=s([B.fg,B.fc],t.sa)
B.a1=new A.bR(0,"visual")
B.bw=new A.bR(1,"graphics")
B.a2=new A.bR(2,"gameplay")
B.bx=new A.bR(3,"controls")
B.G=new A.bR(4,"audio")
B.H=new A.bR(5,"accessibility")
B.jE=s([B.a1,B.bw,B.a2,B.bx,B.G,B.H],A.Z("r<bR>"))
B.jF=s(["master","voice","effects","ambience","music"],t.s)
B.bh=s([B.cK,B.cL],A.Z("r<dr>"))
B.d2=s(["res/house/house.json","assets/house/house.json"],t.s)
B.jH=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.iF=new A.cy(2,"safe")
B.iG=new A.cy(3,"custom")
B.d3=s([B.cU,B.b6,B.iF,B.iG],A.Z("r<cy>"))
B.D=new A.cn(0,"inactive")
B.bI=new A.cn(2,"affineWarp")
B.dI=new A.cn(3,"vertexSnap")
B.bJ=new A.cn(4,"tapeGiveup")
B.bK=new A.cn(5,"portalFail")
B.a4=new A.cn(6,"lightsOut")
B.d4=s([B.D,B.aK,B.bI,B.dI,B.bJ,B.bK,B.a4],A.Z("r<cn>"))
B.jI=s([B.aC,B.b8,B.cV],A.Z("r<ed>"))
B.jJ=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.o9=new A.bz("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.o8=new A.bz("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.o4=new A.bz("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.oc=new A.bz("ronnie.response","named","A route card has Ronnie written on its back.")
B.ob=new A.bz("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.jK=s([B.o9,B.o8,B.o4,B.oc,B.ob],t.uk)
B.oa=new A.bz("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.o7=new A.bz("ronnie.response","named","The name Ronnie holds when the room does not.")
B.o5=new A.bz("denise.revision","accepted","One correction remains yours to protect.")
B.o2=new A.bz("attercliffe.plate","kept","A second place survives the room changing around it.")
B.jL=s([B.oa,B.o7,B.o5,B.o2],t.uk)
B.jV=s([],t.Fm)
B.jU=s([],t.op)
B.jM=s([],A.Z("r<cA>"))
B.jP=s([],t.yH)
B.a_=s([],t.qP)
B.jW=s([],t.u)
B.d5=s([],t.xB)
B.jN=s([],t.El)
B.m=s([],t.s)
B.d6=s([],t.ld)
B.jT=s([],t.nm)
B.bk=s([],t.n)
B.jO=s([],t.t)
B.bj=s([],t.zz)
B.iJ=new A.i0(15,"kitchen",-0.3,0)
B.iI=new A.i0(19,"spare-room",0,0.3)
B.O=s([B.iJ,B.iI],A.Z("r<i0>"))
B.jY=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.mQ=new A.bH(0,"bed")
B.mR=new A.bH(1,"chair")
B.mS=new A.bH(2,"floor")
B.d7=s([B.mQ,B.mR,B.mS],A.Z("r<bH>"))
B.jZ=s(["high","medium","low"],t.s)
B.eo=new A.cx(1,"headphones")
B.ep=new A.cx(2,"speakers")
B.bl=s([B.c5,B.eo,B.ep,B.c6],A.Z("r<cx>"))
B.k_=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bm=s([B.cE,B.cF],A.Z("r<dp>"))
B.bv=new A.cm(0,"root")
B.dl=new A.bu(0,"pauseMenu")
B.le=new A.dx(B.bv,B.dl,null)
B.k0=s([B.le],t.bA)
B.bn=s([B.c1,B.ab,B.c2],A.Z("r<cO>"))
B.il=new A.cS(0,"instant")
B.im=new A.cS(2,"slow")
B.bo=s([B.il,B.cM,B.im],A.Z("r<cS>"))
B.k1=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.k2=s([B.E,B.aL,B.a6],A.Z("r<bG>"))
B.d8=s([B.u,B.ae,B.p,B.af],A.Z("r<e9>"))
B.T=new A.dE(0,"pbrMaterial")
B.a7=new A.dE(1,"shadowsAndOcclusion")
B.am=new A.dE(2,"surfaceWeathering")
B.l=new A.dE(3,"atmosphereAndPost")
B.mN=new A.dE(4,"debugView")
B.ai=s([B.T,B.a7,B.am,B.l,B.mN],A.Z("r<dE>"))
B.bL=new A.bi(0,"depthTest")
B.bM=new A.bi(1,"depthFunc")
B.bN=new A.bi(2,"depthWrite")
B.bO=new A.bi(3,"blendEnable")
B.bP=new A.bi(4,"blendFunc")
B.bQ=new A.bi(5,"blendEquation")
B.bR=new A.bi(6,"cullEnable")
B.bS=new A.bi(7,"cullFace")
B.dT=new A.bi(8,"frontFace")
B.mW=new A.bi(9,"stencilEnable")
B.dR=new A.bi(10,"colorMask")
B.dS=new A.bi(11,"scissorEnable")
B.k3=s([B.bL,B.bM,B.bN,B.bO,B.bP,B.bQ,B.bR,B.bS,B.dT,B.mW,B.dR,B.dS],A.Z("r<bi>"))
B.k4=s(["off","errors","full"],t.s)
B.k5=s(["off","fxaa","msaa2","msaa4"],t.s)
B.k6=s(["off","profile","standard","high"],t.s)
B.k7=s(["post_bloom"],t.s)
B.k8=s(["post_color_grade"],t.s)
B.k9=s(["post_depth_of_field"],t.s)
B.ka=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.kc=s(["srgb","linear"],t.s)
B.kd=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.ke=s(["uBloomStrength"],t.s)
B.kf=s(["uLutSize","uStrength"],t.s)
B.kg=s([B.cs,B.ct,B.cu],A.Z("r<ci>"))
B.kh=s(["uTexelSize","uNear","uFar"],t.s)
B.d9=s(["uTexelStep"],t.s)
B.ki=s(["uninitialized"],t.s)
B.ik=new A.cR(0,"minimal")
B.bp=s([B.ik,B.cI,B.cJ],A.Z("r<cR>"))
B.o6=new A.bz("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.o1=new A.bz("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.o0=new A.bz("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.o3=new A.bz("ronnie.response","named","The route card gives one name its own line.")
B.kj=s([B.o6,B.o1,B.o0,B.o3],t.uk)
B.a9=new A.c7(0,"waiting")
B.aq=new A.c7(1,"atDoor")
B.ar=new A.c7(2,"consulting")
B.aN=new A.c7(3,"resolved")
B.kk=s([B.a9,B.aq,B.ar,B.aN],A.Z("r<c7>"))
B.kl=s(["post_dither","post_quantization_bits"],t.s)
B.fh=new A.cg("W A S D","Move",!1)
B.ff=new A.cg("TAB","Journal",!1)
B.fe=new A.cg("CAPS","Shader Lab",!1)
B.fd=new A.cg("ESC","Pause",!1)
B.km=s([B.fh,B.ff,B.fe,B.fd],t.sa)
B.kn=s(["floor-linoleum","ceiling-stained"],t.s)
B.kT={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.ko=new A.a2(B.kT,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.Z("a2<e,I?>"))
B.l4={uAlbedo:0}
B.da=new A.a2(B.l4,[0],t.I)
B.lb={uSsaoRaw:0,uSceneDepth:1}
B.kp=new A.a2(B.lb,[0,1],t.I)
B.dj={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.jA=s(["KeyW","GamepadDpadUp"],t.s)
B.jz=s(["KeyS","GamepadDpadDown"],t.s)
B.jr=s(["KeyA","GamepadDpadLeft"],t.s)
B.js=s(["KeyD","GamepadDpadRight"],t.s)
B.jt=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.jx=s(["KeyQ","GamepadB"],t.s)
B.jC=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.jX=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.jy=s(["KeyR","GamepadX"],t.s)
B.ju=s(["KeyF","GamepadRB"],t.s)
B.jv=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.jw=s(["KeyL"],t.s)
B.ji=s(["Escape","GamepadMenu"],t.s)
B.kq=new A.a2(B.dj,[B.jA,B.jz,B.jr,B.js,B.jt,B.jx,B.jC,B.jX,B.jy,B.ju,B.jv,B.jw,B.ji],A.Z("a2<e,K<e>>"))
B.kr=new A.a2(B.dj,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.l8={uScene:0,uHistory:1}
B.ks=new A.a2(B.l8,[0,1],t.I)
B.kJ={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.kt=new A.a2(B.kJ,["09ae4cfb57536d27eb0e532f49e23bd8b184e2e4","a9b92d99954c209e5e86040af755f9919650a788","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.0"],t.p)
B.kW={aPosition:0,aUvMat:1}
B.db=new A.a2(B.kW,[0,4],t.I)
B.l9={uScene:0,uLut:1}
B.ku=new A.a2(B.l9,[0,1],t.I)
B.la={uSource:0}
B.dc=new A.a2(B.la,[0],t.I)
B.l2={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.kv=new A.a2(B.l2,[0,1,2,3,4,5,6],t.I)
B.dd=new A.cT([B.a1,"settings.visual",B.bw,"settings.graphics",B.a2,"settings.gameplay",B.bx,"settings.controls",B.G,"settings.audio",B.H,"settings.accessibility"],t.EJ)
B.de=new A.cT([B.a1,"visual",B.bw,"graphics",B.a2,"gameplay",B.bx,"controls",B.G,"audio",B.H,"accessibility"],t.EJ)
B.kR={uSharp:0,uBlurred:1,uSceneDepth:2}
B.kw=new A.a2(B.kR,[0,1,2],t.I)
B.ld={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.kx=new A.a2(B.ld,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.kY={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.j_=new A.bt("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.iV=new A.bt("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.iZ=new A.bt("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.j1=new A.bt("wallpaper-damp","grime",7106925,0.94,0.76)
B.iW=new A.bt("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.j0=new A.bt("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.j2=new A.bt("wallpaper-peeling","grime",9340536,0.91,0.68)
B.iX=new A.bt("floor-wood","wall-plaster",7755327,0.88,0.22)
B.iT=new A.bt("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.iU=new A.bt("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.iR=new A.bt("floor-concrete","grime",7828331,0.96,0.92)
B.iS=new A.bt("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.iY=new A.bt("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bq=new A.a2(B.kY,[B.j_,B.iV,B.iZ,B.j1,B.iW,B.j0,B.j2,B.iX,B.iT,B.iU,B.iR,B.iS,B.iY],A.Z("a2<e,bt>"))
B.l5={uBloom:0}
B.ky=new A.a2(B.l5,[0],t.I)
B.l6={uSceneDepth:0}
B.kz=new A.a2(B.l6,[0],t.I)
B.l7={uScene:0}
B.kA=new A.a2(B.l7,[0],t.I)
B.C={}
B.df=new A.a2(B.C,[],A.Z("a2<e,hH>"))
B.kB=new A.a2(B.C,[],A.Z("a2<e,K<D>>"))
B.aF=new A.a2(B.C,[],t.p)
B.oi=new A.a2(B.C,[],A.Z("a2<e,l>"))
B.br=new A.a2(B.C,[],A.Z("a2<e,D>"))
B.z=new A.a2(B.C,[],t.I)
B.oj=new A.a2(B.C,[],A.Z("a2<e,e?>"))
B.kC=new A.a2(B.C,[],A.Z("a2<@,@>"))
B.kM={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.kD=new A.a2(B.kM,[0,1,2,3,4,5,6],t.I)
B.dm=new A.cE(0,"resume")
B.dn=new A.cE(1,"settings")
B.dp=new A.cE(2,"controls")
B.dq=new A.cE(3,"save")
B.dr=new A.cE(4,"help")
B.ds=new A.cE(5,"credits")
B.dt=new A.cE(6,"back")
B.kE=new A.cT([B.dm,"pause.resume",B.dn,"pause.settings",B.dp,"pause.controls",B.dq,"pause.save",B.dr,"pause.help",B.ds,"pause.credits",B.dt,"pause.back"],A.Z("cT<cE,e>"))
B.l_={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.kF=new A.a2(B.l_,[0,1,2,3],t.I)
B.lc={uTex:0}
B.kG=new A.a2(B.lc,[0],t.I)
B.bs=new A.cT([B.aK,1,B.bI,1.5,B.dI,1.5,B.bJ,2,B.bK,2,B.a4,4],A.Z("cT<cn,D>"))
B.ok=new A.i9(0,"srgb")
B.ol=new A.i9(1,"linear")
B.eg=new A.fz(2,"blended")
B.kH=new A.dw("weather:rain-particle",null,0.55,0.68,0.82,0.08,0.18,1,1,B.eg,!1,!1)
B.bt=new A.eX(0,"resident")
B.dg=new A.eX(1,"pending")
B.dh=new A.eX(2,"missing")
B.di=new A.eX(3,"evicted")
B.om=new A.kO(!1)
B.kI=new A.kO(!0)
B.jR=s([],t.bA)
B.jS=s([],A.Z("r<bu>"))
B.bu=new A.ei(B.jR,B.jS,null)
B.dk=new A.cm(1,"settings")
B.lf=new A.cm(2,"visual")
B.lg=new A.cm(3,"graphics")
B.lh=new A.cm(4,"gameplay")
B.li=new A.cm(5,"controls")
B.lj=new A.cm(6,"audio")
B.lk=new A.cm(7,"accessibility")
B.ll=new A.cm(8,"credits")
B.a0=new A.bu(1,"settings")
B.lm=new A.bu(2,"journal")
B.ln=new A.bu(3,"sleep")
B.lo=new A.bu(4,"help")
B.lp=new A.bu(5,"visitor")
B.lq=new A.bu(6,"ending")
B.du=new A.ej(0,"opened")
B.dv=new A.ej(2,"backed")
B.dw=new A.ej(3,"resumed")
B.lr=new A.ej(4,"dismissed")
B.a3=new A.ej(5,"unchanged")
B.ls=new A.bD("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.lt=new A.bD("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.lu=new A.bD("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.lv=new A.bD("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.lw=new A.bD("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.lx=new A.bD("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.ly=new A.bD("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.lz=new A.bD("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.lA=new A.bD("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.lB=new A.kZ(0,1,null)
B.lD=new A.l_(1,"high")
B.lC=new A.r7(!1,!0,!0,!0,!1,B.lD,35,256)
B.lE=new A.l3(1,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.lF=new A.cF(0,"tooShortForHeader")
B.lG=new A.cF(1,"badMagic")
B.lH=new A.cF(2,"unsupportedVersion")
B.dy=new A.cF(3,"unsupportedStride")
B.lI=new A.cF(4,"truncatedVertexData")
B.lJ=new A.cF(5,"nonFiniteBounds")
B.dz=new A.cF(6,"nonFiniteVertex")
B.lK=new A.cF(7,"vertexCountNotMultipleOfThree")
B.by=new A.f1(0,"safe")
B.I=new A.f1(1,"standard")
B.Q=new A.f1(2,"high")
B.a5=new A.aY(B.C,0,t.M)
B.aj=new A.ek(B.by,B.a5)
B.l3={shadows:0}
B.mB=new A.aY(B.l3,1,t.M)
B.dA=new A.ek(B.I,B.mB)
B.kO={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.ms=new A.aY(B.kO,5,t.M)
B.dB=new A.ek(B.Q,B.ms)
B.lL=new A.f1(4,"shipping")
B.kQ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.mt=new A.aY(B.kQ,7,t.M)
B.on=new A.ek(B.lL,B.mt)
B.bz=new A.lb(0,0,0,1)
B.lM=new A.aB(0,1)
B.lN=new A.bb(0.35,0.52,0.88)
B.lO=new A.aC(0.46,0.25,0.2)
B.dC=new A.bb(0.22,0.45,0.92)
B.lP=new A.aC(0.48,0.4,0.34)
B.lQ=new A.aC(0.31,0.25,0.23)
B.bA=new A.bb(0.75,0.52,0.42)
B.lR=new A.bb(0.4,0.65,0.95)
B.bB=new A.bb(0.88,0.96,1)
B.lS=new A.aC(0.37,0.33,0.31)
B.lT=new A.bb(0.62,0.48,0.45)
B.lU=new A.aC(0.34,0.32,0.29)
B.dD=new A.aC(0.38,0.25,0.19)
B.bC=new A.bb(0.9,0.8,0.72)
B.aG=new A.bb(0.28,0.16,0.12)
B.lV=new A.aC(0.31,0.28,0.24)
B.aH=new A.bb(0.65,0.45,0.35)
B.lW=new A.aC(0.58,0.56,0.5)
B.dE=new A.bb(0.2,0.38,0.9)
B.lX=new A.aC(0.44,0.37,0.28)
B.lY=new A.aC(0.52,0.5,0.44)
B.lZ=new A.aC(0.24,0.25,0.27)
B.m_=new A.aC(0.28,0.27,0.25)
B.m0=new A.bb(0.35,0.28,0.25)
B.dF=new A.bb(0.52,0.32,0.38)
B.m1=new A.aC(0.42,0.4,0.38)
B.m2=new A.aC(0.18,0.2,0.21)
B.m3=new A.aC(0.2,0.12,0.1)
B.aI=new A.bb(0.35,0.2,0.15)
B.m4=new A.aC(0.12,0.15,0.2)
B.m5=new A.h8(0,"constructed")
B.R=new A.h8(1,"ready")
B.bD=new A.h8(2,"lost")
B.m6=new A.it(B.aj,384,216,1,B.aY,0,512,32,4,1,B.cn)
B.bE=new A.f4(0,"constructed")
B.m7=new A.f4(1,"initializing")
B.bF=new A.f4(2,"ready")
B.dG=new A.f4(3,"contextLost")
B.j=new A.h9(0,"read")
B.k=new A.h9(1,"write")
B.J=new A.h9(2,"historyRead")
B.bG=new A.ha(0,"prepared")
B.m8=new A.ha(1,"committed")
B.m9=new A.ha(2,"rolledBack")
B.q=new A.iv(0,"rgba8")
B.ma=new A.aR("dofBlurH",B.q,192,108,1,0)
B.mb=new A.aR("dofBlurV",B.q,192,108,1,0)
B.mc=new A.aR("dofOutput",B.q,384,216,1,0)
B.dH=new A.iv(2,"depth24")
B.md=new A.aR("shadowMap",B.dH,512,512,1,0)
B.me=new A.aR("ssaoRaw",B.q,192,108,1,0)
B.mf=new A.aR("ssaoBlurred",B.q,192,108,1,0)
B.mg=new A.aR("gradeOutput",B.q,384,216,1,0)
B.mh=new A.aR("vhsOutput",B.q,384,216,1,0)
B.mi=new A.aR("sceneDepth",B.dH,384,216,1,0)
B.mj=new A.aR("bloomBlurH",B.q,192,108,1,0)
B.mk=new A.aR("bloomBlurV",B.q,192,108,1,0)
B.ml=new A.aR("present",B.q,384,216,1,0)
B.bH=new A.aR("sceneColor",B.q,384,216,1,0)
B.mm=new A.aR("ps1Output",B.q,384,216,1,0)
B.mn=new A.f6(null,"save storage unavailable")
B.mo=new A.f6(null,"save could not be recovered")
B.mp=new A.f6(null,null)
B.kU={WheelUp:0,WheelDown:1}
B.mq=new A.aY(B.kU,2,t.M)
B.l0={open:0,closed:1}
B.mr=new A.aY(B.l0,2,t.M)
B.kN={Escape:0}
B.dJ=new A.aY(B.kN,1,t.M)
B.kL={open:0,closed:1,mixed:2}
B.mu=new A.aY(B.kL,3,t.M)
B.kZ={front:0,"rear-service":1}
B.mv=new A.aY(B.kZ,2,t.M)
B.mw=new A.fS([18,20],A.Z("fS<i>"))
B.l1={overcast:0,rain:1}
B.mx=new A.aY(B.l1,2,t.M)
B.kX={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.my=new A.aY(B.kX,16,t.M)
B.kV={Escape:0,Tab:1,F11:2}
B.dK=new A.aY(B.kV,3,t.M)
B.kS={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.mz=new A.aY(B.kS,5,t.M)
B.kP={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ak=new A.aY(B.kP,7,t.M)
B.kK={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.mA=new A.aY(B.kK,9,t.M)
B.dN=new A.f8(2,"link")
B.mM=new A.iz(B.dN,"gl.createProgram() returned null")
B.dL=new A.f8(0,"vertex")
B.dM=new A.f8(1,"fragment")
B.dO=new A.f8(3,"validation")
B.aM=new A.lo(0,"none")
B.t=new A.iA(0,"live")
B.dP=new A.iA(1,"unavailable")
B.mO=new A.iB(0,"full")
B.mP=new A.iB(2,"culled")
B.W=new A.C(0,1,0)
B.ap=new A.C(0,-1,0)
B.mU=new A.bI(-1,B.W,B.ap,B.cY,1,1,0.3,0.5)
B.mV=new A.lt(!1,"","",B.bk,B.bk)
B.dU=new A.dF(0,"resident")
B.dV=new A.dF(1,"pending")
B.dW=new A.dF(2,"missing")
B.dX=new A.dF(3,"evicted")
B.V=new A.C(0,0,0)
B.v=new A.hg(B.V,B.bz,1)
B.mX=A.ct("ID")
B.mY=A.ct("IE")
B.mZ=A.ct("oN")
B.n_=A.ct("DA")
B.n0=A.ct("DP")
B.n1=A.ct("DQ")
B.n2=A.ct("DR")
B.n3=A.ct("ah")
B.n4=A.ct("I")
B.n5=A.ct("tS")
B.n6=A.ct("tT")
B.n7=A.ct("EN")
B.n8=A.ct("bU")
B.e=new A.d6(0,"float1")
B.an=new A.d6(1,"float2")
B.o=new A.d6(2,"float3")
B.n9=new A.d6(3,"float4")
B.w=new A.d6(4,"mat4")
B.dY=new A.d6(5,"mat4Array")
B.bT=new A.y(B.e,0)
B.dZ=new A.y(B.e,1)
B.U=new A.d6(6,"sampler")
B.x=new A.y(B.U,0)
B.ao=new A.y(B.U,1)
B.e_=new A.y(B.U,2)
B.na=new A.y(B.U,3)
B.nb=new A.y(B.U,4)
B.nc=new A.y(B.U,5)
B.nd=new A.y(B.U,6)
B.ne=new A.tX(!1)
B.nf=new A.C(0,0,1)
B.ng=new A.C(0,3,0)
B.e0=new A.C(1,0,0)
B.nh=new A.C(0,-9.81,0)
B.ni=new A.C(1/0,1/0,1/0)
B.nj=new A.C(2.75,3,2.75)
B.nk=new A.C(-1/0,-1/0,-1/0)
B.e1=new A.cH(1,"normal")
B.bV=new A.cH(6,"tangent4")
B.nl=new A.cH(0,"position")
B.bX=new A.b6(B.nl,0,3)
B.bY=new A.b6(B.e1,3,3)
B.e8=new A.b6(B.bV,6,4)
B.e2=new A.cH(2,"color")
B.e5=new A.b6(B.e2,10,4)
B.e3=new A.cH(4,"alpha")
B.e6=new A.b6(B.e3,14,1)
B.e4=new A.cH(5,"uv0")
B.e7=new A.b6(B.e4,15,2)
B.nm=new A.cH(7,"uv1")
B.nq=new A.b6(B.nm,17,2)
B.bW=new A.cH(8,"legacyMaterialEffect")
B.nt=new A.b6(B.bW,19,1)
B.kb=s([B.bX,B.bY,B.e8,B.e5,B.e6,B.e7,B.nq,B.nt],t.v5)
B.nu=new A.iI("surfaceV2WithUv1",20,B.kb)
B.nn=new A.b6(B.e2,6,4)
B.no=new A.b6(B.e3,10,1)
B.np=new A.b6(B.e4,11,2)
B.nr=new A.b6(B.bW,13,1)
B.jG=s([B.bX,B.bY,B.nn,B.no,B.np,B.nr],t.v5)
B.a8=new A.iI("compatibility14",14,B.jG)
B.ns=new A.b6(B.bW,17,1)
B.jd=s([B.bX,B.bY,B.e8,B.e5,B.e6,B.e7,B.ns],t.v5)
B.nv=new A.iI("surfaceV2",18,B.jd)
B.nw=new A.eo(0,"visitorAnswered")
B.e9=new A.eo(1,"visitorIgnored")
B.nx=new A.eo(2,"entryVerified")
B.ny=new A.eo(3,"entryContradicted")
B.nz=new A.eo(4,"exposureAccepted")
B.nB=new A.d7(1,"malformedDay")
B.nC=new A.d7(2,"malformedTier")
B.ea=new A.d7(3,"missingTierLines")
B.aa=new A.d7(6,"invalidPhase")
B.nF=new A.bx(B.aa,"No reaction is due.")
B.nN=new A.bl(B.nF)
B.nK=new A.bx(B.aa,"The active visit cannot be chosen.")
B.nO=new A.bl(B.nK)
B.nG=new A.bx(B.aa,"The active visit has no line to advance.")
B.nP=new A.bl(B.nG)
B.nE=new A.d7(5,"noActiveVisit")
B.nH=new A.bx(B.nE,"There is no active visit.")
B.eb=new A.bl(B.nH)
B.nJ=new A.bx(B.aa,"A visit is already active.")
B.nQ=new A.bl(B.nJ)
B.nD=new A.d7(4,"noArrival")
B.nM=new A.bx(B.nD,"The authored arrival is missing.")
B.nR=new A.bl(B.nM)
B.nI=new A.bx(B.aa,"That answer is not offered.")
B.nS=new A.bl(B.nI)
B.nA=new A.d7(0,"missingCorpus")
B.nL=new A.bx(B.nA,"The authored visitor corpus is empty.")
B.nT=new A.bl(B.nL)
B.ec=new A.fh(1,"exact")
B.c0=new A.fh(2,"partial")
B.aO=new A.fh(3,"contradiction")
B.nU=new A.fh(0,"skipped")
B.nV=new A.fg(B.nU,B.a5)
B.nW=new A.fg(B.c0,B.a5)
B.nX=new A.iM(B.a_,!1)
B.nY=new A.iM(B.a_,!0)
B.ed=new A.iO(0,"horizontal")
B.nZ=new A.iO(1,"vertical")
B.ee=new A.iQ(0,"horizontal")
B.o_=new A.iQ(1,"vertical")
B.aP=new A.hl(0,"empty")
B.od=new A.hl(1,"cpuReady")
B.aQ=new A.hl(4,"released")})();(function staticFields(){$.uF=null
$.ce=A.c([],A.Z("r<I>"))
$.A0=null
$.rj=0
$.rk=A.GU()
$.zo=null
$.zn=null
$.C1=null
$.BR=null
$.C9=null
$.wL=null
$.wU=null
$.yX=null
$.v2=A.c([],A.Z("r<K<I>?>"))
$.hx=null
$.ju=null
$.jv=null
$.yv=!1
$.ap=B.y
$.Ak=""
$.Al=null
$.Ag=null
$.qT=null
$.dO=A.ae()
$.fq=A.ae()
$.aT=null
$.yc=A.ae()
$.Bh=null
$.x=A.ae()
$.AU=A.ae()
$.cJ=A.ae()
$.af=A.ae()
$.Y=A.ae()
$.bo=A.ae()
$.V=A.ae()
$.yb=A.ae()
$.yh=null
$.yq=null
$.bq=null
$.yg=!1
$.yF=!1
$.jr=B.aT
$.ex=B.at
$.ww=!1
$.yR=!1
$.Bj=null
$.jt=null
$.mL=null
$.B4=0
$.yw=null
$.mS=!1
$.Bi=!1
$.yx=0
$.ey=0
$.yj="booting"
$.cs=0
$.fs=0
$.aw="hall"
$.jo=A.ae()
$.hr=A.ae()
$.cc=A.ae()
$.Bo=null
$.yG=0
$.yK=1.65
$.eA=null
$.bp=null
$.jA=!1
$.cr=A.ae()
$.hs=A.ae()
$.jn=A.ae()
$.mI=A.ae()
$.AT=A.ae()
$.AS=A.ae()
$.av=A.ae()
$.mJ=A.ae()
$.jm=A.ae()
$.mH=A.ae()
$.jp=A.ae()
$.jq=A.ae()
$.fp=A.ae()
$.ew=A.ae()
$.hq=A.ae()
$.jl=A.ae()
$.jj=A.ae()
$.jk=A.ae()
$.aH=A.ae()
$.mG=A.ae()
$.bn=A.ae()
$.wx=A.a1(t.S)
$.dd=A.c([],t.s)
$.yo=null
$.BH=!1
$.AX=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"IG","Cj",()=>A.wN("_$dart_dartClosure"))
s($,"IF","xz",()=>A.wN("_$dart_dartClosure_dartJSInterop"))
s($,"Jn","CG",()=>A.c([new J.kD()],A.Z("r<iw>")))
s($,"IR","Ck",()=>A.dH(A.tR({
toString:function(){return"$receiver$"}})))
s($,"IS","Cl",()=>A.dH(A.tR({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"IT","Cm",()=>A.dH(A.tR(null)))
s($,"IU","Cn",()=>A.dH(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"IX","Cq",()=>A.dH(A.tR(void 0)))
s($,"IY","Cr",()=>A.dH(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"IW","Cp",()=>A.dH(A.Ah(null)))
s($,"IV","Co",()=>A.dH(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"J_","Ct",()=>A.dH(A.Ah(void 0)))
s($,"IZ","Cs",()=>A.dH(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"J1","z8",()=>A.Fa())
s($,"J5","Cy",()=>A.Ea(4096))
s($,"J3","Cw",()=>new A.vc().$0())
s($,"J4","Cx",()=>new A.vb().$0())
s($,"J2","Cv",()=>A.E9(A.a0(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Jg","jG",()=>A.n1(B.n4))
s($,"IP","z7",()=>{A.En()
return $.rj})
s($,"IC","Ci",()=>B.bH.hz())
s($,"IL","z6",()=>A.kX(A.c([255,255,255,255],t.t)))
s($,"II","z3",()=>A.kX(A.c([128,128,255,255],t.t)))
s($,"IH","z2",()=>A.kX(A.c([0,0,0,255],t.t)))
s($,"IJ","z4",()=>A.kX(A.c([255,255,0,255],t.t)))
s($,"IK","z5",()=>A.kX(A.c([255,255,255,255],t.t)))
s($,"Js","CK",()=>A.iH(0,1,0))
s($,"J0","Cu",()=>A.F7(A.a1(t.N),0,0,A.iH(0,0,0)))
s($,"Jp","CH",()=>A.ir("^[a-z0-9][a-z0-9._-]*$"))
s($,"Jv","fx",()=>{var q=$.Ag
if(q==null){A.wH()
A.wH()
A.wH()
A.wH()
q=$.Ag=new A.tG()}return q})
s($,"IM","xA",()=>A.xH(B.b0,B.cC,!0,B.b1,B.cE,B.cH,B.cI,B.cK,!0,!1,B.cM))
s($,"Jb","Cz",()=>new A.nV())
r($,"BL","df",()=>A.xX(null,null))
r($,"js","jF",()=>A.fU(null,null))
r($,"yn","fw",()=>A.fK(null,null,!1,1,!1,!1,2,1))
r($,"yr","cM",()=>$.xA())
s($,"Jh","CC",()=>new A.pu())
s($,"Ji","CD",()=>new A.pE())
s($,"Jj","xC",()=>new A.pT(A.m(t.N,t.S)))
s($,"Jd","CA",()=>A.en().gb4().h(0,"debugPause")==="1")
s($,"Ja","jE",()=>A.en().gb4().h(0,"automation")==="1")
s($,"J7","xB",()=>A.Ha())
s($,"J6","z9",()=>$.xB()!=null)
s($,"J8","za",()=>$.jE()?A.en().gb4().h(0,"captureMantleId"):null)
s($,"J9","zb",()=>A.en().gb4().h(0,"captureMantleLit")==="1")
r($,"yJ","eF",()=>A.iH(0,0,0))
r($,"yD","CF",()=>A.iH(0,0,0))
r($,"yS","xD",()=>A.iH(0,0,0))
s($,"Jc","zc",()=>A.Hb())
s($,"Jl","n2",()=>new A.oO(A.iH(0,0,0)))
s($,"Jk","CE",()=>new A.qg(new A.ot()))
s($,"Je","cu",()=>new A.p7(A.c([],t.s)))
s($,"Jo","eE",()=>{var q=new A.tq(B.aM)
q.w=A.Z("K<co>").a(A.c([A.a5(B.T,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a5(B.T,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a5(B.T,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a5(B.T,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a5(B.T,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a5(B.a7,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a5(B.a7,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a5(B.a7,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a5(B.a7,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a5(B.a7,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a5(B.am,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a5(B.am,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a5(B.am,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a5(B.am,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a5(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a5(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a5(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a5(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a5(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a5(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a5(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a5(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a5(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a5(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a5(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a5(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a5(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a5(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a5(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a5(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a5(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a5(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a5(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a5(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a5(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a5(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a5(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a5(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a5(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a5(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a5(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a5(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a5(B.T,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Z("r<co>")))
return q})
s($,"Jr","CJ",()=>new A.to(A.m(t.N,t.oZ)))
s($,"Jq","CI",()=>new A.rn(A.Ep(520588),B.b9))
s($,"Jf","CB",()=>new A.pq())
s($,"Jm","hG",()=>new A.qX(B.bu))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eh,ArrayBuffer:A.h3,ArrayBufferView:A.ie,DataView:A.kQ,Float32Array:A.ib,Float64Array:A.kR,Int16Array:A.kS,Int32Array:A.kT,Int8Array:A.kU,Uint16Array:A.kV,Uint32Array:A.kW,Uint8ClampedArray:A.eZ,CanvasPixelArray:A.eZ,Uint8Array:A.ig})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.iY.$nativeSuperclassTag="ArrayBufferView"
A.iZ.$nativeSuperclassTag="ArrayBufferView"
A.ic.$nativeSuperclassTag="ArrayBufferView"
A.j_.$nativeSuperclassTag="ArrayBufferView"
A.j0.$nativeSuperclassTag="ArrayBufferView"
A.id.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.n0
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
