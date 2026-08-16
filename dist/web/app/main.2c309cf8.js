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
if(a[b]!==s){A.H3(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xH(b)
return new s(c,this)}:function(){if(s===null)s=A.xH(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xH(a).prototype
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
xO(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xJ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.xM==null){A.GJ()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.z2("Return interceptor for "+A.v(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tM
if(o==null)o=$.tM=A.vE(n)
p=q[o]}if(p!=null)return p
p=A.GP(a)
if(p!=null)return p
if(typeof a=="function")return B.iq
s=Object.getPrototypeOf(a)
if(s==null)return B.dq
if(s===Object.prototype)return B.dq
if(typeof q=="function"){o=$.tM
if(o==null)o=$.tM=A.vE(n)
Object.defineProperty(q,o,{value:B.bN,enumerable:false,writable:true,configurable:true})
return B.bN}return B.bN},
yt(a,b){if(a<0||a>4294967295)throw A.b(A.aZ(a,0,4294967295,"length",null))
return J.yv(new Array(a),b)},
yu(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
ys(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
yv(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
CD(a,b){var s=t.hO
return J.y1(s.a(a),s.a(b))},
yx(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
CE(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yx(r))break;++b}return b},
CF(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.yx(q))break}return b},
et(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hJ.prototype
return J.kf.prototype}if(typeof a=="string")return J.e1.prototype
if(a==null)return J.hK.prototype
if(typeof a=="boolean")return J.ke.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xJ(a)},
aG(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xJ(a)},
cE(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e2.prototype
if(typeof a=="symbol")return J.hO.prototype
if(typeof a=="bigint")return J.hM.prototype
return a}if(a instanceof A.J)return a
return J.xJ(a)},
AH(a){if(typeof a=="number")return J.fF.prototype
if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eZ.prototype
return a},
AI(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eZ.prototype
return a},
y0(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.AH(a).aj(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.et(a).a6(a,b)},
aT(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).h(a,b)},
bk(a,b,c){return J.cE(a).k(a,b,c)},
jl(a,b){return J.cE(a).l(a,b)},
Bt(a,b){return J.AI(a).fw(a,b)},
ws(a,b){return J.cE(a).L(a,b)},
Bu(a,b){return J.cE(a).cC(a,b)},
y1(a,b){return J.AH(a).H(a,b)},
y2(a,b){return J.aG(a).p(a,b)},
mB(a,b){return J.cE(a).a2(a,b)},
Bv(a,b){return J.cE(a).a4(a,b)},
y3(a){return J.cE(a).gU(a)},
aB(a){return J.et(a).gP(a)},
mC(a){return J.aG(a).gO(a)},
Bw(a){return J.aG(a).gX(a)},
O(a){return J.cE(a).gu(a)},
cH(a){return J.aG(a).gt(a)},
fl(a){return J.et(a).ga3(a)},
y4(a,b){return J.cE(a).Y(a,b)},
dI(a,b,c){return J.cE(a).ca(a,b,c)},
Bx(a,b){return J.aG(a).st(a,b)},
By(a,b){return J.AI(a).aN(a,b)},
da(a){return J.et(a).q(a)},
y5(a,b){return J.cE(a).e1(a,b)},
kc:function kc(){},
ke:function ke(){},
hK:function hK(){},
hN:function hN(){},
e3:function e3(){},
kA:function kA(){},
eZ:function eZ(){},
e2:function e2(){},
hM:function hM(){},
hO:function hO(){},
r:function r(a){this.$ti=a},
kd:function kd(){},
pt:function pt(a){this.$ti=a},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fF:function fF(){},
hJ:function hJ(){},
kf:function kf(){},
e1:function e1(){}},A={wy:function wy(){},
vz(){return $},
BL(a,b,c){if(t.he.b(a))return new A.iy(a,b.i("@<0>").K(c).i("iy<1,2>"))
return new A.ez(a,b.i("@<0>").K(c).i("ez<1,2>"))},
yB(a){return new A.fG("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fG("Field '"+a+"' has not been initialized.")},
CH(a){return new A.fG("Field '"+a+"' has already been initialized.")},
vF(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aX(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l3(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fh(a,b,c){return a},
xN(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
l1(a,b,c,d){A.kK(b,"start")
if(c!=null){A.kK(c,"end")
if(b>c)A.h(A.aZ(b,0,c,"start",null))}return new A.il(a,b,c,d.i("il<0>"))},
kl(a,b,c,d){if(t.he.b(a))return new A.df(a,b,c.i("@<0>").K(d).i("df<1,2>"))
return new A.cy(a,b,c.i("@<0>").K(d).i("cy<1,2>"))},
cw(){return new A.fW("No element")},
yr(){return new A.fW("Too many elements")},
ef:function ef(){},
hr:function hr(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
aV:function aV(a,b){this.a=a
this.$ti=b},
fG:function fG(a){this.a=a},
de:function de(a){this.a=a},
r_:function r_(){},
R:function R(){},
a1:function a1(){},
il:function il(a,b,c,d){var _=this
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
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
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
is:function is(a,b){this.a=a
this.$ti=b},
av:function av(){},
eb:function eb(){},
fY:function fY(){},
eS:function eS(a,b){this.a=a
this.$ti=b},
iZ:function iZ(){},
aW(a,b,c){var s,r,q,p,o,n,m,l=A.aA(a.ga_(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aA(a.gaB(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hu(A.aN(a,b,c),b.i("@<0>").K(c).i("hu<1,2>"))},
BR(){throw A.b(A.bq("Cannot modify unmodifiable Map"))},
BS(){throw A.b(A.bq("Cannot modify constant Set"))},
AZ(a){var s=A.AY(a)
if(s!=null)return s
return"minified:"+a},
GO(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.da(a)
return s},
i6(a){var s,r=$.yK
if(r==null)r=$.yK=Symbol("identityHashCode")
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
if(isNaN(s)){r=B.b.ba(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kG(a){var s,r,q,p
if(a instanceof A.J)return A.bH(A.c9(a),null)
s=J.et(a)
if(s===B.ip||s===B.ir||t.qF.b(a)){r=B.c6(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.c9(a),null)},
yN(a){var s,r,q
if(a==null||typeof a=="number"||A.bv(a))return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dU)return a.q(0)
if(a instanceof A.bQ)return a.fn(!0)
s=$.Bo()
for(r=0;r<1;++r){q=s[r].mY(a)
if(q!=null)return q}return"Instance of '"+A.kG(a)+"'"},
CV(){return Date.now()},
D1(){var s,r
if($.qx!==0)return
$.qx=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qx=1e6
$.qy=new A.qw(r)},
CU(){if(!!self.location)return self.location.href
return null},
D2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dt(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aZ(a,0,1114111,null,null))},
fO(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
D0(a){var s=A.fO(a).getUTCFullYear()+0
return s},
CZ(a){var s=A.fO(a).getUTCMonth()+1
return s},
yL(a){var s=A.fO(a).getUTCDate()+0
return s},
yM(a){var s=A.fO(a).getUTCHours()+0
return s},
CY(a){var s=A.fO(a).getUTCMinutes()+0
return s},
D_(a){var s=A.fO(a).getUTCSeconds()+0
return s},
CX(a){var s=A.fO(a).getUTCMilliseconds()+0
return s},
CW(a){var s=a.$thrownJsError
if(s==null)return null
return A.cF(s)},
yO(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.q(0)}},
vG(a){throw A.b(A.xG(a))},
d(a,b){if(a==null)J.cH(a)
throw A.b(A.vB(a,b))},
vB(a,b){var s,r="index"
if(!A.aK(b))return new A.cr(!0,b,r,null)
s=A.f(J.cH(a))
if(b<0||b>=s)return A.pj(b,s,a,r)
return A.yQ(b,r)},
GB(a,b,c){if(a>c)return A.aZ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aZ(b,a,c,"end",null)
return new A.cr(!0,b,"end",null)},
xG(a){return new A.cr(!0,a,null,null)},
b(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.dw()
b.dartException=a
s=A.H6
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
H6(){return J.da(this.dartException)},
h(a,b){throw A.aF(a,b==null?new Error():b)},
bS(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.ES(a,b,c),s)},
ES(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.io("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.au(a))},
dx(a){var s,r,q,p,o,n
a=A.AS(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rZ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
t_(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
z1(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wz(a,b){var s=b==null,r=s?null:b.method
return new A.kg(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.q9(a)
if(a instanceof A.hA){s=a.a
return A.eu(a,s==null?A.fe(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eu(a,a.dartException)
return A.G9(a)},
eu(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
G9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dt(r,16)&8191)===10)switch(q){case 438:return A.eu(a,A.wz(A.v(s)+" (Error "+q+")",null))
case 445:case 5007:A.v(s)
return A.eu(a,new A.i0())}}if(a instanceof TypeError){p=$.B1()
o=$.B2()
n=$.B3()
m=$.B4()
l=$.B7()
k=$.B8()
j=$.B6()
$.B5()
i=$.Ba()
h=$.B9()
g=p.b0(s)
if(g!=null)return A.eu(a,A.wz(A.p(s),g))
else{g=o.b0(s)
if(g!=null){g.method="call"
return A.eu(a,A.wz(A.p(s),g))}else if(n.b0(s)!=null||m.b0(s)!=null||l.b0(s)!=null||k.b0(s)!=null||j.b0(s)!=null||m.b0(s)!=null||i.b0(s)!=null||h.b0(s)!=null){A.p(s)
return A.eu(a,new A.i0())}}return A.eu(a,new A.l8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ii()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eu(a,new A.cr(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ii()
return a},
cF(a){var s
if(a instanceof A.hA)return a.b
if(a==null)return new A.iN(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iN(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mz(a){if(a==null)return J.aB(a)
if(typeof a=="object")return A.i6(a)
return J.aB(a)},
Gv(a){if(typeof a=="number")return B.c.gP(a)
if(a instanceof A.m6)return A.i6(a)
if(a instanceof A.bQ)return a.gP(a)
return A.mz(a)},
AF(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
GG(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Fh(a,b,c,d,e,f){t.BO.a(a)
switch(A.f(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.tx("Unsupported number of arguments for wrapped closure"))},
hj(a,b){var s=a.$identity
if(!!s)return s
s=A.Gw(a,b)
a.$identity=s
return s},
Gw(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Fh)},
BQ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l0().constructor.prototype):Object.create(new A.fm(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.yc(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.BM(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.yc(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
BM(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.BH)}throw A.b("Error in functionType of tearoff")},
BN(a,b,c,d){var s=A.yb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
yc(a,b,c,d){if(c)return A.BP(a,b,d)
return A.BN(b.length,d,a,b)},
BO(a,b,c,d){var s=A.yb,r=A.BI
switch(b?-1:a){case 0:throw A.b(new A.kP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
BP(a,b,c){var s,r
if($.y9==null)$.y9=A.y8("interceptor")
if($.ya==null)$.ya=A.y8("receiver")
s=b.length
r=A.BO(s,c,a,b)
return r},
xH(a){return A.BQ(a)},
BH(a,b){return A.iR(v.typeUniverse,A.c9(a.a),b)},
yb(a){return a.a},
BI(a){return a.b},
y8(a){var s,r,q,p=new A.fm("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
vE(a){return v.getIsolateTag(a)},
AX(){return v.G},
I_(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
GP(a){var s,r,q,p,o,n=A.p($.AJ.$1(a)),m=$.vC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aj($.AA.$2(a,n))
if(q!=null){m=$.vC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.wd(s)
$.vC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vK[n]=s
return s}if(p==="-"){o=A.wd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.AQ(a,s)
if(p==="*")throw A.b(A.z2(n))
if(v.leafTags[n]===true){o=A.wd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.AQ(a,s)},
AQ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
wd(a){return J.xO(a,!1,null,!!a.$ibV)},
GR(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.wd(s)
else return J.xO(s,c,null,null)},
GJ(){if(!0===$.xM)return
$.xM=!0
A.GK()},
GK(){var s,r,q,p,o,n,m,l
$.vC=Object.create(null)
$.vK=Object.create(null)
A.GI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.AR.$1(o)
if(n!=null){m=A.GR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
GI(){var s,r,q,p,o,n,m=B.eq()
m=A.hi(B.er,A.hi(B.es,A.hi(B.c7,A.hi(B.c7,A.hi(B.et,A.hi(B.eu,A.hi(B.ev(B.c6),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.AJ=new A.vH(p)
$.AA=new A.vI(o)
$.AR=new A.vJ(n)},
hi(a,b){return a(b)||b},
Gy(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yy(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.S("Illegal RegExp pattern ("+String(o)+")",a,null))},
H1(a,b,c){var s=a.indexOf(b,c)
return s>=0},
GE(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
AS(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xP(a,b,c){var s=A.H2(a,b,c)
return s},
H2(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.AS(b),"g"),A.GE(c))},
aP:function aP(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){this.a=a
this.$ti=b},
ft:function ft(){},
nK:function nK(a,b,c){this.a=a
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
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
qw:function qw(a){this.a=a},
ic:function ic(){},
rZ:function rZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(){},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(a){this.a=a},
q9:function q9(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a
this.b=null},
dU:function dU(){},
jC:function jC(){},
jD:function jD(){},
l4:function l4(){},
l0:function l0(){},
fm:function fm(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pC:function pC(a){this.a=a},
pM:function pM(a,b){var _=this
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
vH:function vH(a){this.a=a},
vI:function vI(a){this.a=a},
vJ:function vJ(a){this.a=a},
bQ:function bQ(){},
ej:function ej(){},
ek:function ek(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lM:function lM(a){this.b=a},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ik:function ik(a,b){this.a=a
this.c=b},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
m3:function m3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
H3(a){throw A.aF(A.yB(a),new Error())},
q(){throw A.aF(A.a5(""),new Error())},
aY(){throw A.aF(A.CH(""),new Error())},
xQ(){throw A.aF(A.yB(""),new Error())},
ab(){var s=new A.tw()
return s.b=s},
tw:function tw(){this.b=null},
a2(a){return a},
CO(a){return new Int8Array(a)},
CP(a){return new Uint8Array(a)},
kw(a){return new Uint8Array(A.a2(a))},
dF(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.vB(b,a))},
EF(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.GB(a,b,c))
return b},
fM:function fM(){},
fL:function fL(){},
hZ:function hZ(){},
kp:function kp(){},
b5:function b5(){},
hX:function hX(){},
hY:function hY(){},
hW:function hW(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
eM:function eM(){},
i_:function i_(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
wK(a,b){var s=b.c
return s==null?b.c=A.iP(a,"bU",[b.x]):s},
yV(a){var s=a.w
if(s===6||s===7)return A.yV(a.x)
return s===11||s===12},
D9(a){return a.as},
X(a){return A.u8(v.typeUniverse,a,!1)},
fg(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zq(a1,r,!0)
case 7:s=a2.x
r=A.fg(a1,s,a3,a4)
if(r===s)return a2
return A.zp(a1,r,!0)
case 8:q=a2.y
p=A.hg(a1,q,a3,a4)
if(p===q)return a2
return A.iP(a1,a2.x,p)
case 9:o=a2.x
n=A.fg(a1,o,a3,a4)
m=a2.y
l=A.hg(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wV(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hg(a1,j,a3,a4)
if(i===j)return a2
return A.zr(a1,k,i)
case 11:h=a2.x
g=A.fg(a1,h,a3,a4)
f=a2.y
e=A.G5(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.zo(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hg(a1,d,a3,a4)
o=a2.x
n=A.fg(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wW(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.js("Attempted to substitute unexpected RTI kind "+a0))}},
hg(a,b,c,d){var s,r,q,p,o=b.length,n=A.uc(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fg(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
G6(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.uc(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fg(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
G5(a,b,c,d){var s,r=b.a,q=A.hg(a,r,c,d),p=b.b,o=A.hg(a,p,c,d),n=b.c,m=A.G6(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lF()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xI(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.GH(s)
return a.$S()}return null},
GL(a,b){var s
if(A.yV(b))if(a instanceof A.dU){s=A.xI(a)
if(s!=null)return s}return A.c9(a)},
c9(a){if(a instanceof A.J)return A.o(a)
if(Array.isArray(a))return A.C(a)
return A.xg(J.et(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.xg(a)},
xg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Fe(a,s)},
Fe(a,b){var s=a instanceof A.dU?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ea(v.typeUniverse,s.name)
b.$ccache=r
return r},
GH(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.u8(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xL(a){return A.d8(A.o(a))},
xB(a){var s
if(a instanceof A.bQ)return a.eU()
s=a instanceof A.dU?A.xI(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fl(a).a
if(Array.isArray(a))return A.C(a)
return A.c9(a)},
d8(a){var s=a.r
return s==null?a.r=new A.m6(a):s},
GF(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iR(v.typeUniverse,A.xB(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.zt(v.typeUniverse,s,A.xB(q[r]))}return A.iR(v.typeUniverse,s,a)},
co(a){return A.d8(A.u8(v.typeUniverse,a,!1))},
Fd(a){var s=this
s.b=A.G0(s)
return s.b(a)},
G0(a){var s,r,q,p,o
if(a===t.K)return A.Fn
if(A.fi(a))return A.Fs
s=a.w
if(s===6)return A.F5
if(s===1)return A.A7
if(s===7)return A.Fi
r=A.G_(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fi)){a.f="$i"+q
if(q==="F")return A.Fl
if(a===t.m)return A.Fk
return A.Fr}}else if(s===10){p=A.Gy(a.x,a.y)
o=p==null?A.A7:p
return o==null?A.fe(o):o}return A.F3},
G_(a){if(a.w===8){if(a===t.S)return A.aK
if(a===t.i||a===t.o)return A.Fm
if(a===t.N)return A.Fq
if(a===t.y)return A.bv}return null},
Fc(a){var s=this,r=A.F2
if(A.fi(s))r=A.Ey
else if(s===t.K)r=A.fe
else if(A.hl(s)){r=A.F4
if(s===t.lo)r=A.zP
else if(s===t.dR)r=A.aj
else if(s===t.k7)r=A.zN
else if(s===t.s7)r=A.x2
else if(s===t.u6)r=A.zO
else if(s===t.gt)r=A.E}else if(s===t.S)r=A.f
else if(s===t.N)r=A.p
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.bu
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
F3(a){var s=this
if(a==null)return A.hl(s)
return A.AM(v.typeUniverse,A.GL(a,s),s)},
F5(a){if(a==null)return!0
return this.x.b(a)},
Fr(a){var s,r=this
if(a==null)return A.hl(r)
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.et(a)[s]},
Fl(a){var s,r=this
if(a==null)return A.hl(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.et(a)[s]},
Fk(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.J)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
A6(a){if(typeof a=="object"){if(a instanceof A.J)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
F2(a){var s=this
if(a==null){if(A.hl(s))return a}else if(s.b(a))return a
throw A.aF(A.zU(a,s),new Error())},
F4(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.zU(a,s),new Error())},
zU(a,b){return new A.h4("TypeError: "+A.zi(a,A.bH(b,null)))},
AD(a,b,c,d){if(A.AM(v.typeUniverse,a,b))return a
throw A.aF(A.E2("The type argument '"+A.bH(a,null)+"' is not a subtype of the type variable bound '"+A.bH(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
zi(a,b){return A.jS(a)+": type '"+A.bH(A.xB(a),null)+"' is not a subtype of type '"+b+"'"},
E2(a){return new A.h4("TypeError: "+a)},
cl(a,b){return new A.h4("TypeError: "+A.zi(a,b))},
Fi(a){var s=this
return s.x.b(a)||A.wK(v.typeUniverse,s).b(a)},
Fn(a){return a!=null},
fe(a){if(a!=null)return a
throw A.aF(A.cl(a,"Object"),new Error())},
Fs(a){return!0},
Ey(a){return a},
A7(a){return!1},
bv(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.cl(a,"bool"),new Error())},
zN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.cl(a,"bool?"),new Error())},
bu(a){if(typeof a=="number")return a
throw A.aF(A.cl(a,"double"),new Error())},
zO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cl(a,"double?"),new Error())},
aK(a){return typeof a=="number"&&Math.floor(a)===a},
f(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.cl(a,"int"),new Error())},
zP(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.cl(a,"int?"),new Error())},
Fm(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aF(A.cl(a,"num"),new Error())},
x2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cl(a,"num?"),new Error())},
Fq(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.aF(A.cl(a,"String"),new Error())},
aj(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.cl(a,"String?"),new Error())},
a(a){if(A.A6(a))return a
throw A.aF(A.cl(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.A6(a))return a
throw A.aF(A.cl(a,"JSObject?"),new Error())},
Ap(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
FO(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Ap(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zY(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.G8(a.x)
o=a.y
return o.length>0?p+("<"+A.Ap(o,b)+">"):p}if(l===10)return A.FO(a,b)
if(l===11)return A.zY(a,b,null)
if(l===12)return A.zY(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
G8(a){var s=A.AY(a)
if(s!=null)return s
return"minified:"+a},
Eb(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ea(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.u8(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iQ(a,5,"#")
q=A.uc(s)
for(p=0;p<s;++p)q[p]=r
o=A.iP(a,b,q)
n[b]=o
return o}else return m},
E9(a,b){return A.zB(a.tR,b)},
E8(a,b){return A.zB(a.eT,b)},
u8(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.zs(a,null,b,!1)
r.set(b,s)
return s},
iR(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.zs(a,b,c,!0)
q.set(c,r)
return r},
zt(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wV(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
zs(a,b,c,d){return A.E_(A.DU(a,b,c,d))},
em(a,b){b.a=A.Fc
b.b=A.Fd
return b},
iQ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cB(null,null)
s.w=b
s.as=c
r=A.em(a,s)
a.eC.set(c,r)
return r},
zq(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.E6(a,b,r,c)
a.eC.set(r,s)
return s},
E6(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fi(b))if(!(b===t.c||b===t.T))if(s!==6)r=s===7&&A.hl(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cB(null,null)
q.w=6
q.x=b
q.as=c
return A.em(a,q)},
zp(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.E4(a,b,r,c)
a.eC.set(r,s)
return s},
E4(a,b,c,d){var s,r
if(d){s=b.w
if(A.fi(b)||b===t.K)return b
else if(s===1)return A.iP(a,"bU",[b])
else if(b===t.c||b===t.T)return t.eZ}r=new A.cB(null,null)
r.w=7
r.x=b
r.as=c
return A.em(a,r)},
E7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=13
s.x=b
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
iO(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
E3(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iP(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iO(c)+">"
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
wV(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iO(r)+">")
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
zr(a,b,c){var s,r,q="+"+(b+"("+A.iO(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cB(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.em(a,s)
a.eC.set(q,r)
return r},
zo(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iO(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iO(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.E3(i)+"}"}r=n+(g+")")
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
wW(a,b,c,d){var s,r=b.as+("<"+A.iO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.E5(a,b,c,r,d)
a.eC.set(r,s)
return s},
E5(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.uc(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fg(a,b,r,0)
m=A.hg(a,c,r,0)
return A.wW(a,n,m,c!==m)}}l=new A.cB(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.em(a,l)},
DU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
E_(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.DW(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.zl(a,r,l,k,!1)
else if(q===46)r=A.zl(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fa(a.u,a.e,k.pop()))
break
case 94:k.push(A.E7(a.u,k.pop()))
break
case 35:k.push(A.iQ(a.u,5,"#"))
break
case 64:k.push(A.iQ(a.u,2,"@"))
break
case 126:k.push(A.iQ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.DY(a,k)
break
case 38:A.DX(a,k)
break
case 63:p=a.u
k.push(A.zq(p,A.fa(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.zp(p,A.fa(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.DV(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.zm(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.E0(a.u,a.e,o)
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
DW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
zl(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Eb(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.D9(o)+'"')
d.push(A.iR(s,o,n))}else d.push(p)
return m},
DY(a,b){var s,r=a.u,q=A.zk(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iP(r,p,q))
else{s=A.fa(r,a.e,p)
switch(s.w){case 11:b.push(A.wW(r,s,q,a.n))
break
default:b.push(A.wV(r,s,q))
break}}},
DV(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.zk(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fa(p,a.e,o)
q=new A.lF()
q.a=s
q.b=n
q.c=m
b.push(A.zo(p,r,q))
return
case-4:b.push(A.zr(p,b.pop(),s))
return
default:throw A.b(A.js("Unexpected state under `()`: "+A.v(o)))}},
DX(a,b){var s=b.pop()
if(0===s){b.push(A.iQ(a.u,1,"0&"))
return}if(1===s){b.push(A.iQ(a.u,4,"1&"))
return}throw A.b(A.js("Unexpected extended operation "+A.v(s)))},
zk(a,b){var s=b.splice(a.p)
A.zm(a.u,a.e,s)
a.p=b.pop()
return s},
fa(a,b,c){if(typeof c=="string")return A.iP(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.DZ(a,b,c)}else return c},
zm(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fa(a,b,c[s])},
E0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fa(a,b,c[s])},
DZ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.js("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.js("Bad index "+c+" for "+b.q(0)))},
AM(a,b,c){var s,r=b.d
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
return A.aQ(a,A.wK(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.wK(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.A5(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.A5(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Fj(a,b,c,d,e)}if(o&&q===10)return A.Fo(a,b,c,d,e)
return!1},
A5(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Fj(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iR(a,b,r[o])
return A.zL(a,p,null,c,d.y,e)}return A.zL(a,b.y,null,c,d.y,e)},
zL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
Fo(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hl(a){var s=a.w,r=!0
if(!(a===t.c||a===t.T))if(!A.fi(a))if(s!==6)r=s===7&&A.hl(a.x)
return r},
fi(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zB(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
uc(a){return a>0?new Array(a):v.typeUniverse.sEA},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lF:function lF(){this.c=this.b=this.a=null},
m6:function m6(a){this.a=a},
lD:function lD(){},
h4:function h4(a){this.a=a},
DN(){var s,r,q
if(self.scheduleImmediate!=null)return A.Gm()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hj(new A.ts(s),1)).observe(r,{childList:true})
return new A.tr(s,r,q)}else if(self.setImmediate!=null)return A.Gn()
return A.Go()},
DO(a){self.scheduleImmediate(A.hj(new A.tt(t.O.a(a)),0))},
DP(a){self.setImmediate(A.hj(new A.tu(t.O.a(a)),0))},
DQ(a){A.wN(B.eX,t.O.a(a))},
wN(a,b){return A.E1(a.a/1000|0,b)},
E1(a,b){var s=new A.u6()
s.il(a,b)
return s},
bh(a){return new A.lt(new A.as($.ap,a.i("as<0>")),a.i("lt<0>"))},
bf(a,b){a.$2(0,null)
b.b=!0
return b.a},
ae(a,b){A.EA(a,b)},
be(a,b){b.dv(a)},
bd(a,b){b.dw(A.ak(a),A.cF(a))},
EA(a,b){var s,r,q=new A.uh(b),p=new A.ui(b)
if(a instanceof A.as)a.fl(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.dY(q,p,s)
else{r=new A.as($.ap,t.hR)
r.a=8
r.c=a
r.fl(q,p,s)}}},
bi(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ap.hd(new A.vv(s),t.H,t.S,t.z)},
zn(a,b,c){return 0},
mT(a){var s
if(t.yt.b(a)){s=a.gbN()
if(s!=null)return s}return B.at},
yk(a){var s
a.a(null)
s=new A.as($.ap,a.i("as<0>"))
s.d5(null)
return s},
Cl(a,b,c){var s=new A.as($.ap,c.i("as<0>"))
A.Dn(a,new A.or(b,s,c))
return s},
os(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ap,b.i("as<F<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.ou(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dY(new A.ot(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.co(A.c([],b.i("r<0>")))
return n}i.a=A.e4(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cF(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.xh(m,k)
m=new A.b2(m,k==null?A.mT(m):k)
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
xh(a,b){if($.ap===B.x)return null
return null},
Ff(a,b){if($.ap!==B.x)A.xh(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbN()
if(b==null){A.yO(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.yO(a,b)
return new A.b2(a,b)},
tC(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Di()
b.cm(new A.b2(new A.cr(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f4(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bT()
b.cn(o.a)
A.f5(b,p)
return}b.a^=2
A.ms(null,null,b.b,t.O.a(new A.tD(o,b)))},
f5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.xu(m.a,m.b)}return}q.a=b
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
A.xu(j.a,j.b)
return}g=$.ap
if(g!==h)$.ap=h
else g=null
c=c.c
if((c&15)===8)new A.tH(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tG(q,j).$0()}else if((c&2)!==0)new A.tF(d,q).$0()
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
continue}else A.tC(c,f,!0)
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
Aj(a,b){var s
if(t.nW.b(a))return b.hd(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.al(a,"onError",u.c))},
FC(){var s,r
for(s=$.hd;s!=null;s=$.hd){$.ja=null
r=s.b
$.hd=r
if(r==null)$.j9=null
s.a.$0()}},
G3(){$.xi=!0
try{A.FC()}finally{$.ja=null
$.xi=!1
if($.hd!=null)$.xX().$1(A.AB())}},
At(a){var s=new A.lu(a),r=$.j9
if(r==null){$.hd=$.j9=s
if(!$.xi)$.xX().$1(A.AB())}else $.j9=r.b=s},
FX(a){var s,r,q,p=$.hd
if(p==null){A.At(a)
$.ja=$.j9
return}s=new A.lu(a)
r=$.ja
if(r==null){s.b=p
$.hd=$.ja=s}else{q=r.b
s.b=q
$.ja=r.b=s
if(q==null)$.j9=s}},
Hm(a,b){A.fh(a,"stream",t.K)
return new A.m1(b.i("m1<0>"))},
Dn(a,b){var s=$.ap
if(s===B.x)return A.wN(a,t.O.a(b))
return A.wN(a,t.O.a(s.fB(b)))},
xu(a,b){A.FX(new A.vk(a,b))},
Ao(a,b,c,d,e){var s,r=$.ap
if(r===c)return d.$0()
$.ap=c
s=r
try{r=d.$0()
return r}finally{$.ap=s}},
FU(a,b,c,d,e,f,g){var s,r=$.ap
if(r===c)return d.$1(e)
$.ap=c
s=r
try{r=d.$1(e)
return r}finally{$.ap=s}},
FT(a,b,c,d,e,f,g,h,i){var s,r=$.ap
if(r===c)return d.$2(e,f)
$.ap=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ap=s}},
ms(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.fB(d)
d=d}A.At(d)},
ts:function ts(a){this.a=a},
tr:function tr(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a){this.a=a},
tu:function tu(a){this.a=a},
u6:function u6(){},
u7:function u7(a,b){this.a=a
this.b=b},
lt:function lt(a,b){this.a=a
this.b=!1
this.$ti=b},
uh:function uh(a){this.a=a},
ui:function ui(a){this.a=a},
vv:function vv(a){this.a=a},
c5:function c5(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
this.b=b},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function ou(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ot:function ot(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lx:function lx(){},
iu:function iu(a,b){this.a=a
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
tz:function tz(a,b){this.a=a
this.b=b},
tE:function tE(a,b){this.a=a
this.b=b},
tD:function tD(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
tA:function tA(a,b){this.a=a
this.b=b},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a,b){this.a=a
this.b=b},
tJ:function tJ(a){this.a=a},
tG:function tG(a,b){this.a=a
this.b=b},
tF:function tF(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a
this.b=null},
m1:function m1(a){this.$ti=a},
iY:function iY(){},
lV:function lV(){},
u4:function u4(a,b){this.a=a
this.b=b},
vk:function vk(a,b){this.a=a
this.b=b},
zj(a,b){var s=a[b]
return s===a?null:s},
wT(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wS(){var s=Object.create(null)
A.wT(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yD(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
L(a,b,c){return b.i("@<0>").K(c).i("wA<1,2>").a(A.AF(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
m(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
wB(a){return new A.ck(a.i("ck<0>"))},
a_(a){return new A.ck(a.i("ck<0>"))},
aI(a,b){return b.i("yE<0>").a(A.GG(a,new A.ck(b.i("ck<0>"))))},
wU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h_(a,b,c){var s=new A.f9(a,b,c.i("f9<0>"))
s.c=a.e
return s},
bw(a,b){var s=J.O(a)
if(s.m())return s.gn()
return null},
aN(a,b,c){var s=A.yD(b,c)
a.av(0,new A.pN(s,b,c))
return s},
fH(a,b,c){var s=A.yD(b,c)
s.M(0,a)
return s},
hR(a,b){var s,r=A.wB(b)
for(s=J.O(a);s.m();)r.l(0,b.a(s.gn()))
return r},
fI(a,b){var s=A.wB(b)
s.M(0,a)
return s},
wC(a){var s,r
if(A.xN(a))return"{...}"
s=new A.bp("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.av(0,new A.pQ(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Ec(){throw A.b(A.bq("Cannot change an unmodifiable set"))},
iz:function iz(){},
tL:function tL(a){this.a=a},
iB:function iB(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f6:function f6(a,b){this.a=a
this.$ti=b},
iA:function iA(a,b,c){var _=this
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
lL:function lL(a){this.a=a
this.c=this.b=null},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(){},
a7:function a7(){},
pP:function pP(a){this.a=a},
pQ:function pQ(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.$ti=b},
iD:function iD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iS:function iS(){},
fJ:function fJ(){},
ec:function ec(a,b){this.a=a
this.$ti=b},
ds:function ds(){},
iM:function iM(){},
m7:function m7(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
h5:function h5(){},
iT:function iT(){},
FH(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.S(String(s),null,null)
throw A.b(q)}q=A.uI(p)
return q},
uI(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uI(a[s])
return a},
Et(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Bf()
else s=new Uint8Array(o)
for(r=J.aG(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Es(a,b,c,d){var s=a?$.Be():$.Bd()
if(s==null)return null
if(0===c&&d===b.length)return A.zA(s,b)
return A.zA(s,b.subarray(c,d))},
zA(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
y7(a,b,c,d,e,f){if(B.d.T(f,4)!==0)throw A.b(A.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.S("Invalid base64 padding, more than two '=' characters",a,b))},
yA(a,b,c){return new A.hQ(a,b)},
ER(a){return a.B()},
DR(a,b){return new A.tO(a,[],A.Gx())},
DS(a,b,c){var s,r=new A.bp(""),q=A.DR(r,b)
q.cX(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Eu(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lJ:function lJ(a,b){this.a=a
this.b=b
this.c=null},
tN:function tN(a){this.a=a},
lK:function lK(a){this.a=a},
ub:function ub(){},
ua:function ua(){},
jw:function jw(){},
ns:function ns(){},
eA:function eA(){},
jH:function jH(){},
jR:function jR(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(){},
pE:function pE(a){this.b=a},
pD:function pD(a){this.a=a},
tP:function tP(){},
tQ:function tQ(a,b){this.a=a
this.b=b},
tO:function tO(a,b,c){this.c=a
this.a=b
this.b=c},
lc:function lc(){},
t3:function t3(a){this.a=a},
u9:function u9(a){this.a=a
this.b=16
this.c=0},
AL(a){var s=A.dq(a,null)
if(s!=null)return s
throw A.b(A.S(a,null,null))},
AE(a){var s=A.eO(a)
if(s!=null)return s
throw A.b(A.S("Invalid double",a,null))},
Cf(a,b){a=A.aF(a,new Error())
if(a==null)a=A.fe(a)
a.stack=b.q(0)
throw a},
e4(a,b,c,d){var s,r=c?J.yu(a,d):J.yt(a,d)
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
z_(a,b,c){var s,r
A.kK(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aZ(c,b,null,"end",null))
if(s===0)return""}r=A.Dl(a,b,c)
return r},
Dl(a,b,c){var s=a.length
if(b>=s)return""
return A.D2(a,b,c==null||c>s?s:c)},
wJ(a){return new A.hL(a,A.yy(a,!1,!0,!1,!1,""))},
wM(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.v(s.gn())
while(s.m())}else{a+=A.v(s.gn())
while(s.m())a=a+c+A.v(s.gn())}return a},
ed(){var s,r,q=A.CU()
if(q==null)throw A.b(A.bq("'Uri.base' is not supported"))
s=$.z5
if(s!=null&&q===$.z4)return s
r=A.Dt(q)
$.z5=r
$.z4=q
return r},
Di(){return A.cF(new Error())},
BW(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ye(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jJ(a){if(a>=10)return""+a
return"0"+a},
Ce(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.al(b,"name","No enum value with that name"))},
jS(a){if(typeof a=="number"||A.bv(a)||a==null)return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yN(a)},
Cg(a,b){A.fh(a,"error",t.K)
A.fh(b,"stackTrace",t.l)
A.Cf(a,b)},
js(a){return new A.jr(a)},
w(a,b){return new A.cr(!1,null,b,a)},
al(a,b,c){return new A.cr(!0,a,b,c)},
yP(a){var s=null
return new A.fP(s,s,!1,s,s,a)},
yQ(a,b){return new A.fP(null,null,!0,a,b,"Value not in range")},
aZ(a,b,c,d,e){return new A.fP(b,c,!0,a,d,"Invalid value")},
kL(a,b,c){if(0>a||a>c)throw A.b(A.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aZ(b,a,c,"end",null))
return b}return c},
kK(a,b){if(a<0)throw A.b(A.aZ(a,0,null,b,null))
return a},
pj(a,b,c,d){return new A.k9(b,!0,a,d,"Index out of range")},
bq(a){return new A.io(a)},
z2(a){return new A.l7(a)},
j(a){return new A.fW(a)},
au(a){return new A.jE(a)},
S(a,b,c){return new A.z(a,b,c)},
CC(a,b,c){var s,r
if(A.xN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.Ft(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wM(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wx(a,b,c){var s,r
if(A.xN(a))return b+"..."+c
s=new A.bp(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wM(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ft(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
wD(a,b,c){var s=A.m(b,c)
s.k0(a)
return s},
cT(a,b,c,d,e,f){var s
if(B.f===c){s=J.aB(a)
b=J.aB(b)
return A.l3(A.aX(A.aX($.jk(),s),b))}if(B.f===d){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
return A.l3(A.aX(A.aX(A.aX($.jk(),s),b),c))}if(B.f===e){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
return A.l3(A.aX(A.aX(A.aX(A.aX($.jk(),s),b),c),d))}if(B.f===f){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
return A.l3(A.aX(A.aX(A.aX(A.aX(A.aX($.jk(),s),b),c),d),e))}s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
f=J.aB(f)
f=A.l3(A.aX(A.aX(A.aX(A.aX(A.aX(A.aX($.jk(),s),b),c),d),e),f))
return f},
eV(a,b){return new A.fZ(A.fI(a,b),b.i("fZ<0>"))},
Dt(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.z3(a4<a4?B.b.I(a5,0,a4):a5,5,a3).ghi()
else if(s===32)return A.z3(B.b.I(a5,5,a4),0,a3).ghi()}r=A.e4(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.As(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.As(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.lZ(a4<a5.length?B.b.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Em(a5,0,q)
else{if(q===0)A.h6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.En(a5,c,p-1):""
a=A.Ei(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dq(B.b.I(a5,i,n),a3)
d=A.Ek(a0==null?A.h(A.S("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Ej(a5,n,m,a3,j,a!=null)
a2=m<l?A.El(a5,m+1,l,a3):a3
return A.Ed(j,b,a,d,a1,a2,l<a4?A.Eh(a5,l+1,a4):a3)},
z7(a){var s=t.N
return B.a.bq(A.c(a.split("&"),t.s),A.m(s,s),new A.t2(B.c9),t.G)},
lb(a,b,c){throw A.b(A.S("Illegal IPv4 address, "+a,b,c))},
Dq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lb("each part must be in the range 0..255",a,r)}A.lb("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lb(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bS(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lb(j,a,q)
p=l}A.lb("IPv4 address should contain exactly 4 parts",a,q)},
Dr(a,b,c){var s
if(b===c)throw A.b(A.S("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Ds(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.z6(a,b,c)
return!0},
Ds(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
z6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.t1(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Dq(a3,m,a5,s,p*2)
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
B.db.hG(s,a0,16,s,a)
B.db.lw(s,a,a0,0)}}return s},
Ed(a,b,c,d,e,f,g){return new A.iU(a,b,c,d,e,f,g)},
zu(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h6(a,b,c){throw A.b(A.S(c,a,b))},
Ek(a,b){var s=A.zu(b)
if(a===s)return null
return a},
Ei(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Ef(a,q,r)
if(o<r){n=o+1
p=A.zz(a,B.b.ae(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Dr(a,q,o)
l=B.b.I(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cG(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.zz(a,B.b.ae(a,"25",n)?o+3:n,c,"%25")}else p=""
A.z6(a,b,o)
return"["+B.b.I(a,b,o)+p+"]"}}return A.Ep(a,b,c)},
Ef(a,b,c){var s=B.b.cG(a,"%",b)
return s>=b&&s<c?s:c},
zz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bp(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wY(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bp("")
l=h.a+=B.b.I(a,q,r)
if(m)n=B.b.I(a,r,r+3)
else if(n==="%")A.h6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bp("")
if(q<r){h.a+=B.b.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.I(a,q,r)
if(h==null){h=new A.bp("")
m=h}else m=h
m.a+=i
l=A.wX(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.I(a,b,c)
if(q<c){i=B.b.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Ep(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wY(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bp("")
k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bp("")
if(q<r){p.a+=B.b.I(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bp("")
l=p}else l=p
l.a+=k
j=A.wX(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.I(a,b,c)
if(q<c){k=B.b.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Em(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.zw(a.charCodeAt(b)))A.h6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.I(a,b,c)
return A.Ee(q?a.toLowerCase():a)},
Ee(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
En(a,b,c){return A.iV(a,b,c,16,!1,!1)},
Ej(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iV(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.S(q,"/"))q="/"+q
return A.Eo(q,e,f)},
Eo(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.S(a,"/")&&!B.b.S(a,"\\"))return A.Eq(a,!s||c)
return A.Er(a)},
El(a,b,c,d){return A.iV(a,b,c,256,!0,!1)},
Eh(a,b,c){return A.iV(a,b,c,256,!0,!1)},
wY(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.vF(r)
o=A.vF(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.I(a,b,b+3).toUpperCase()
return null},
wX(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jL(a,6*p)&63|q
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
o+=3}}return A.z_(s,0,null)},
iV(a,b,c,d,e,f){var s=A.zy(a,b,c,d,e,f)
return s==null?B.b.I(a,b,c):s},
zy(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wY(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wX(n)}if(o==null){o=new A.bp("")
k=o}else k=o
k.a=(k.a+=B.b.I(a,p,q))+l
if(typeof m!=="number")return A.vG(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
zx(a){if(B.b.S(a,"."))return!0
return B.b.br(a,"/.")!==-1},
Er(a){var s,r,q,p,o,n,m
if(!A.zx(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Y(s,"/")},
Eq(a,b){var s,r,q,p,o,n
if(!A.zx(a))return!b?A.zv(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gZ(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.zv(s[0]))}return B.a.Y(s,"/")},
zv(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.zw(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.I(a,0,s)+"%3A"+B.b.aN(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Eg(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wZ(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
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
B.a.l(p,A.Eg(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.ml.kA(p)},
zw(a){var s=a|32
return 97<=s&&s<=122},
z3(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.S(k,a,r))}}if(q<0&&r>b)throw A.b(A.S(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gZ(j)
if(p!==44||r!==n+7||!B.b.ae(a,"base64",n+1))throw A.b(A.S("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eo.lZ(a,m,s)
else{l=A.zy(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bJ(a,m,s,l)}return new A.t0(a,j,c)},
As(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
lC:function lC(){},
ao:function ao(){},
jr:function jr(a){this.a=a},
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
k9:function k9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
l7:function l7(a){this.a=a},
fW:function fW(a){this.a=a},
jE:function jE(a){this.a=a},
kx:function kx(){},
ii:function ii(){},
tx:function tx(a){this.a=a},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(){},
J:function J(){},
m4:function m4(){},
rK:function rK(){this.b=this.a=0},
bp:function bp(a){this.a=a},
t2:function t2(a){this.a=a},
t1:function t1(a){this.a=a},
iU:function iU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
ly:function ly(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
q8:function q8(a){this.a=a},
zZ(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ED,a)
s[$.wn()]=a
return s},
V(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.EE,a)
s[$.wn()]=a
return s},
ED(a){return t.BO.a(a).$0()},
EE(a,b,c){t.BO.a(a)
if(A.f(c)>=1)return a.$1(b)
return a.$0()},
xK(a,b,c){return c.a(a[b])},
A_(a,b){return a[b]},
aL(a,b,c,d){return d.a(a[b].apply(a,c))},
aS(a,b){var s=new A.as($.ap,b.i("as<0>")),r=new A.iu(s,b.i("iu<0>"))
a.then(A.hj(new A.we(r,b),1),A.hj(new A.wf(r),1))
return s},
Aa(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hk(a){if(A.Aa(a))return a
return new A.vA(new A.iB(t.BT)).$1(a)},
we:function we(a,b){this.a=a
this.b=b},
wf:function wf(a){this.a=a},
vA:function vA(a){this.a=a},
D3(a){var s
if(a==null)s=B.aQ
else{s=new A.ei()
s.bO(a)}return s},
lI:function lI(){},
ei:function ei(){this.b=this.a=0},
qB:function qB(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qC:function qC(){},
eP:function eP(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b){this.a=a
this.b=b
this.c=null},
fs:function fs(a,b){this.a=a
this.b=b},
nH:function nH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nJ:function nJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nI:function nI(){var _=this
_.c=_.b=_.a=null
_.d=0},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
jY:function jY(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
om:function om(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
e0(a,b){return new A.k6(a,b)},
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
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
GY(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iK(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.V(f,new A.wg())
s=A.c([],t.cv)
for(r=A.l1(f,0,A.fh(b,"count",t.S),t.mn),q=r.$ti,r=new A.aC(r,r.gt(0),q.i("aC<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function o3(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a,b,c,d,e){var _=this
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
wg:function wg(){},
pS(a,b,c,d,e,f,g,h,i,j){return new A.e5(c,a,h,g,f,e,i,j,b,!0)},
km(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.v(b),null))},
jq:function jq(a,b){this.a=a
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
CK(a){A:{break A}return a},
d_:function d_(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
t4:function t4(){},
t5:function t5(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pY:function pY(){},
pZ:function pZ(){},
q_:function q_(){},
jK:function jK(){},
i1(a){var s,r=t.N,q=A.aI(["sceneColor","present"],r),p=a.a.b
if(p.p(0,"shadows"))q.M(0,A.aI(["shadowMap","sceneDepth"],r))
if(p.p(0,"ssao"))q.M(0,A.aI(["ssaoRaw","ssaoBlurred"],r))
if(p.p(0,"bloom"))q.M(0,A.aI(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.p(0,"dof"))q.M(0,A.aI(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.p(0,"grade"))q.l(0,"gradeOutput")
if(p.p(0,"ps1"))q.l(0,"ps1Output")
s=p.p(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.qa(A.eV(q,r),s)},
qa:function qa(a,b){this.a=a
this.b=b},
qb:function qb(){},
fS:function fS(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fy:function fy(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
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
l2:function l2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oo:function oo(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
CI(a){var s,r,q
for(s=a.a,s=new A.ag(s,s.r,s.e,a.$ti.i("ag<1>")),r=B.bn;s.m();){switch(s.d.a){case 0:q=B.bn
break
case 1:q=B.d8
break
case 2:q=B.d9
break
case 3:q=B.da
break
default:q=null}if(A.yH(q)>A.yH(r))r=q}return r},
yH(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Ay(a){return new A.bR(A.G7(a),t.EF)},
G7(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Ay(b,c,d){if(c===1){p.push(d)
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
pV:function pV(a){this.a=a},
pW:function pW(a){this.a=a},
pT:function pT(a){this.a=a},
pU:function pU(){},
CJ(){return new A.kn(new A.cV(new A.pX(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kn:function kn(a){this.a=a},
pX:function pX(){},
Av(a){var s=4
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
case 3:s=A.h(A.bq("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
EL(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.U[r]
if(A.Av(q.a)===b)s+=q.c}return s},
CL(a){return new A.q0(a,new A.cV(new A.q1(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
yI(a){var s
A:{s=a.byteLength
break A}return s},
l9:function l9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(){},
q2:function q2(){},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
rS:function rS(a,b){this.a=a
this.b=b},
rT:function rT(){},
Dm(a){var s=new A.l5(a,new A.cV(new A.rW(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aW($.xV())
s.e=s.aW($.xS())
s.f=s.aW($.xT())
s.r=s.aW($.xR())
s.w=s.aW($.xU())
return s},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rW:function rW(){},
rY:function rY(){},
rX:function rX(){},
Gp(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
p.gF()
B.a.l(o,new A.eK(p,A.c([p],r)))
continue}return o},
eK:function eK(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
oh:function oh(){},
oi:function oi(a){this.a=a},
of:function of(a){this.a=a},
og:function og(a){this.a=a},
jX:function jX(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
on:function on(a,b){this.a=a
this.b=b
this.c=0},
DT(){return new A.h0()},
ol:function ol(a){this.a=a
this.b=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wG(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
qe:function qe(){},
qf:function qf(){},
ce:function ce(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f){var _=this
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
kH:function kH(a,b){var _=this
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
qD:function qD(){},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qF:function qF(a,b){this.a=a
this.b=b},
qK:function qK(){},
qJ:function qJ(){},
qI:function qI(){},
qH:function qH(a){this.a=a},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qE:function qE(a,b){this.a=a
this.b=b},
D8(a){return new A.i8(a,new A.cV(new A.qL(),A.c([],t.w_),A.c([],t.t),t.tc))},
lH:function lH(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){this.a=a
this.b=b},
qL:function qL(){},
v0(a,b){return A.EW(a,b)},
EW(a,b){var s=0,r=A.bh(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$v0=A.bi(function(c,a0){if(c===1)return A.bd(a0,r)
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
n=new A.kH(a.a,A.m(t.N,t.CH))
l=A.zV(a,n,b,o.a.b.a)
m=l.a
i.bX(p)
h=a.x
g=o
if(h.e)A.h(A.j("GPU resource adapter is disposed"))
h.ex(g)
f=h.c
h.b.bX(g.a)
h.c=g
h.d=null
if(f!=null)h.de(f.b)
g.c=B.hI
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
i.eH(h)
i.a.fu(h.a)
i.b.dW(h.b)
h.c=B.eQ
i.c=null}i=o
if((i==null?null:i.c)===B.ae){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.j("GPU resource adapter is disposed"))
i.ex(h)
i.de(h.b)
i.b.dW(h.a)
h.c=B.hJ
i.d=null}i=m
if(i!=null)i.bC()
i=n
if(i!=null)i.bC()
throw d}case 1:return A.be(q,r)}})
return A.bf($async$v0,r)},
zW(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zV(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zV(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uZ(a),j=new A.v_(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Gu(b,h,d,i,s.gmE(),new A.uK(j),new A.uL(j),new A.uM(a),new A.uR(a),new A.uS(a),new A.uT(j),new A.uU(j),s.gmG(),new A.uV(a),s.gmK(),r.gmI(),k,s.gmM(),s.gmO(),new A.uW(j,c),new A.uX(j),new A.uY(j),new A.uN(j),new A.uO(j),new A.uP(a),new A.uQ(j),e,f,g,c.r)}else{p=new A.aJ(l,B.q,g,f,e,0)
o=new A.aJ(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hV(h,p,o):null
k=A.c([new A.lo(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i4(b,u.l,u.B,h,i,d))
q=new A.jW(k)}a.r.toString
m=q.kn(B.a1,new A.qD(),!1,new A.lS())
k=m.a.b
if(k.length!==0)throw A.b(A.j("safe renderer graph is invalid: "+A.v(k)))
return new A.u5(q,m)},
EX(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.j("renderer graph is not initialized"))
s=A.H(b7.gh0(),t.yz)
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
o=q.c.a9()
p=p.gar()
n=A.C(p)
B.a.l(s,new A.m5(new A.cu((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.I(p,n.i("M(1)").a(o.gaA()),n.i("I<1,M>")))))}p=b8.a
m=A.Gz(A.Ck(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e0(B.az,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a7(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.e0(B.az,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a7(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.ol(n)
e.ki("cull")
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
if(a2.gF().e===B.aU)B.a.l(a,new A.aO(new A.bI(a0.hg(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.l(b,new A.aO(new A.bK(B.kI,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.lE(A.Gp(A.H_(b)),A.GZ(a),p,b8.b,b8.c)
a4=new A.jN(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.h(A.al(g,"passId",null))
e.b=g
n.cP(g,A.AG())
a6=A.m(o,i)
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
a6.cP(b0,new A.v1(b3))}a5.an(new A.jA(a6,a4,a3))}return new A.ty(e,m,j)},
yX(a){return new A.qU(a,new A.nG(new A.nI(),new A.kO()),new A.on(A.c([],t.h1),B.ht),A.c([],t.Ft),B.bx,A.c([],t.ow),null)},
qP:function qP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
ty:function ty(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
uZ:function uZ(a){this.a=a},
v_:function v_(a,b){this.a=a
this.b=b},
uY:function uY(a){this.a=a},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
uX:function uX(a){this.a=a},
uM:function uM(a){this.a=a},
uO:function uO(a){this.a=a},
uN:function uN(a){this.a=a},
uW:function uW(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uL:function uL(a){this.a=a},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
uV:function uV(a){this.a=a},
uQ:function uQ(a){this.a=a},
uP:function uP(a){this.a=a},
v1:function v1(a){this.a=a},
u5:function u5(a,b){this.a=a
this.b=b},
lS:function lS(){},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qU:function qU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qV:function qV(){},
qW:function qW(){},
qX:function qX(){},
lP:function lP(a){this.b=a},
tK:function tK(){},
lW:function lW(){},
ih:function ih(a,b){this.a=a
this.b=b},
H_(a){var s,r,q=A.H(a,t.E0)
B.a.V(q,new A.wk())
s=A.C(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wl()),r),r.i("a1.E"))
s.$flags=1
return s},
GZ(a){var s,r,q=A.H(a,t.EH)
B.a.V(q,new A.wi())
s=A.C(q)
r=s.i("I<1,c_>")
s=A.H(new A.I(q,s.i("c_(1)").a(new A.wj()),r),r.i("a1.E"))
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
wk:function wk(){},
wl:function wl(){},
wi:function wi(){},
wj:function wj(){},
Gz(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.ge3()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.gE().q(0),null))
if(a.mW(o.ge3())===B.cp){++q
continue}B.a.l(l,o)}return new A.nY(l,new A.nZ(q))},
nZ:function nZ(a){this.b=a},
nY:function nY(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.mo,q=B.mp,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.M(m,k,Math.min(r.c,o))
q=new A.M(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jm(r,q)},
jm:function jm(a,b){this.a=a
this.b=b},
Ck(a){var s,r,q,p,o,n,m=a.a,l=new A.oq(),k=m.length
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
return new A.op(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eN:function eN(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
op:function op(a){this.a=a},
oq:function oq(){},
yF(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dm(new Float32Array(A.a2(a)))},
wE(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dm(q)},
yG(a,b,c){var s=b.gaw(),r=c.bA(s).gaw(),q=s.bA(r),p=new Float32Array(16)
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
pR:function pR(){},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l6:function l6(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
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
lv:function lv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lw:function lw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jM:function jM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lz:function lz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ix:function ix(a,b){this.a=a
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
lA:function lA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jP:function jP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lB:function lB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
k5:function k5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lG:function lG(a,b,c,d,e,f,g){var _=this
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
lN:function lN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.b=a},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
bz(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aJ(a.a,a.b,b,c,s,r)},
wH:function wH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
lT:function lT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kI:function kI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lU:function lU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yZ(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mn:B.a4,q=A.yG(a.b,s,r)
return new A.eX(A.wE(1,a.f,B.c.D(a.w*2,0.1,3),0.05).aC(0,q))},
eX:function eX(a){this.a=a},
kW:function kW(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lX:function lX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Gu(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.p(0,"shadows"))throw A.b(A.al(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.p(0,"ssao")
r=b6.p(0,"bloom")
q=b6.p(0,"dof")
p=b6.p(0,"grade")
o=b6.p(0,"ps1")
n=b6.p(0,"vhs")
b6=B.d.a7(e5+1,2)
m=B.d.a7(e4+1,2)
l=A.bz(B.bA,e5,e4,e3,a8)
k=A.bz(B.bA.h2(),e5,e4,a8,a8)
A.bz(B.ln,e5,e4,a8,a8)
j=A.bz(B.lk,e5,e4,a8,a8)
i=A.bz(B.lf,e6,e6,a8,a8)
h=A.bz(B.lg,b6,m,a8,a8)
g=A.bz(B.lh,b6,m,a8,a8)
f=A.bz(B.ll,b6,m,a8,a8)
e=A.bz(B.lm,b6,m,a8,a8)
d=$.B_()
c=e3>1
b=A.bz(d,e5,e4,a8,c?2:1)
d=A.bz(B.lc,b6,m,a8,a8)
a=A.bz(B.ld,b6,m,a8,a8)
a0=A.bz(B.le,e5,e4,a8,a8)
a1=A.bz(B.li,e5,e4,a8,a8)
a2=A.bz(B.lo,e5,e4,a8,a8)
a3=A.bz(B.lj,e5,e4,a8,a8)
a4=c?new A.hV(b8,l,k):a8
b5.a=null
a5=A.yZ(B.m0)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.M(a7,A.c([new A.hq(b7,a9,b0,b8,b1,b1,B.dX,!0,k,f,d6,b6,m),new A.hq(b7,a9,b0,b8,b2,b2,B.n3,!1,f,e,c2,b6,m),new A.jz(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.M(a7,A.c([new A.hx(b7,a9,b0,b8,b3,b3,B.dY,k,d,d6,b6,m),new A.hx(b7,a9,b0,b8,b4,b4,B.n4,d,a,c7,b6,m),new A.jP(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k5(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kI(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.ld(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jM(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kZ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kY(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kW(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vx(b5),i))
j.push(new A.kX(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vy(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.M(j,a7)
j.push(new A.i4(b7,a9,u.B,b8,k,b9))
return new A.jW(j)},
vx:function vx(a){this.a=a},
vy:function vy(a,b){this.a=a
this.b=b},
kX:function kX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lY:function lY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kZ:function kZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
m0:function m0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kY:function kY(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
m_:function m_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ld:function ld(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m8:function m8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lo:function lo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nE:function nE(){},
kV(a,b){return new A.ig(a,b)},
k2:function k2(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c,d,e,f,g,h){var _=this
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
ig:function ig(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
oM:function oM(){},
oN:function oN(){},
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
yh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fz(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jx:function jx(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
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
to:function to(){this.a=null},
Dy(a){var s=new A.lm(a,B.h,new A.to(),A.DJ(a))
s.ik(a)
return s},
DJ(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.aV(q,A.C(q).i("aV<1,e>")))
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
DE(a,b){var s
if(a.b!==B.h)A.h(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.f(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
DD(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
DC(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
DB(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
za(a,b){var s
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
Dz(a,b){var s
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
r=s.ld(b)
if(r.a===0)return
if(r.p(0,B.bE)){q=v.G
p=a.a
if(b.a)p.enable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bF))a.a.depthFunc(A.DC(a,b.b))
if(r.p(0,B.bG))a.a.depthMask(b.c)
if(r.p(0,B.bK)){q=v.G
p=a.a
if(b.w)p.enable(A.f(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.f(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.bL))a.a.cullFace(A.DB(a,b.x))
if(r.p(0,B.dJ)){q=v.G.WebGL2RenderingContext
q=A.f(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bH)){q=v.G
p=a.a
if(b.d)p.enable(A.f(q.WebGL2RenderingContext.BLEND))
else p.disable(A.f(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.bI))a.a.blendFunc(A.za(a,b.e),A.za(a,b.f))
if(r.p(0,B.bJ))a.a.blendEquation(A.Dz(a,b.r))
if(r.p(0,B.dH))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.dI)){q=v.G.WebGL2RenderingContext
a.a.disable(A.f(q.SCISSOR_TEST))}s.a=b},
DA(a,b){var s
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
s.clear(A.DA(a,b))},
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
switch(c.a.a){case 0:r.uniform1f(q,A.bu(c.b))
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
A.aL(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.f(c.b))
break}},
bs(a,b){if(a.b!==B.h)A.h(A.j(u.k))
a.a.bindVertexArray(A.a(b.a))},
aD(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.h(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iX){p=s.d>1?A.f(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iW){o=s.b
if(o!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
DF(a,b,c){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.f(p.ELEMENT_ARRAY_BUFFER),c,A.f(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
DG(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
zd(a,b){var s,r,q,p
if(a.b!==B.h)A.h(A.j(u.k))
s=a.a
r=A.E(s.createBuffer())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cC?A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.f(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.DG(a,b.b))
return new A.dB(r)},
zb(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
zc(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
DH(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
l=m?A.DH(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aL(s,"texStorage3D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aL(s,"texStorage2D",[n,l,A.f(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.zb(a,b.e))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.zb(a,b.f))
p=b.r
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.zc(a,p))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.zc(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.f2(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.al(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dB(new A.iX(r,j,i,q,m))},
wQ(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(r)A.aL(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aL(l,"texSubImage2D",[m,0,0,0,q,p,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
ze(a,b){var s,r,q
if(a.b!==B.h)A.h(A.j(u.k))
s=t.e.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.f(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
ln(a,b){a.a.deleteTexture(t.e.a(b.a).a)},
zg(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.h(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.E(r.createFramebuffer())
if(q==null)throw A.b(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aX
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cE||o===B.hL
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
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.E(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.f(r.checkFramebufferStatus(A.f(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.f(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wR(a0,q,l,k,f,e,j,i)
throw A.b(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dB(new A.iW(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wR(a,b,c,d,e,f,g,h){var s=a.a
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
return new A.dB(s)},
zf(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.E(p.createShader(b))
if(o==null)throw A.b(A.kV(b===A.xK(A.A_(A.AX(),r),q,t.S)?B.dC:B.dD,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.hk(p.getShaderParameter(o,A.f(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aj(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kV(b===A.xK(A.A_(A.AX(),r),q,t.S)?B.dC:B.dD,s))}return o},
DI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.h(A.j(u.k))
q=v.G
s=A.zf(a,A.f(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.zf(a,A.f(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.E(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lN)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.hk(o.getProgramParameter(n,A.f(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aj(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kV(B.dE,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.f(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kV(B.dF,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.E(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kV(B.dF,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dB(n)},
dB:function dB(a){this.a=a},
iX:function iX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iW:function iW(a,b,c,d,e,f,g,h,i,j){var _=this
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
ma:function ma(a){this.a=a
this.b=!1},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
tl:function tl(a){this.a=a},
tm:function tm(a){this.a=a},
ud:function ud(){},
m9:function m9(){},
tk:function tk(a){this.a=a},
tn:function tn(){},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n6(a,a0){var s=0,r=A.bh(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n6=A.bi(function(a1,a2){if(a1===1)return A.bd(a2,r)
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
b=new A.jt(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aQ,A.m(o,t.jS))
b.i2(p,a0)
p=A.o(a).i("K<1,2>")
s=3
return A.ae(A.os(A.kl(new A.K(a,p),p.i("bU<ar>(n.E)").a(new A.n7(b)),p.i("n.E"),t.ls),t.c),$async$n6)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.j2():n
c.buffer=p
q=b
s=1
break
case 1:return A.be(q,r)}})
return A.bf($async$n6,r)},
jt:function jt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
n8:function n8(){},
n7:function n7(a){this.a=a},
na:function na(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c){this.a=a
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
BE(a,b,c,d,e,f,g){var s=new A.mY(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.i4(a,b,c,d,0,e,f,g)
return s},
BA(a,b){var s=new A.mG(b)
s.i1(a,b)
return s},
BD(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aA(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mU(A.aW(n,r,t.a))
n.i3(a)
return n},
G2(a,b){var s,r,q,p=b>>>0
for(s=new A.de(a),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AK(p,q==null?r.a(q):q)}return p&2147483647},
ju:function ju(a,b){this.a=a
this.b=b},
mY:function mY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mZ:function mZ(){},
mG:function mG(a){this.a=a},
mH:function mH(){},
ho:function ho(){},
mI:function mI(){},
mJ:function mJ(){},
mU:function mU(a){this.a=a},
mW:function mW(){},
mX:function mX(){},
mV:function mV(){},
wu:function wu(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
n5:function n5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n_:function n_(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a){this.a=a},
n1:function n1(){},
it:function it(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
ok:function ok(a){this.a=a},
ka:function ka(a,b,c,d,e,f,g,h,i,j){var _=this
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
pl:function pl(a){this.a=a},
Cw(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pk(n)},
pk:function pk(a){this.a=a},
po:function po(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pI:function pI(a,b,c){this.a=a
this.c=b
this.e=c},
pF:function pF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(){},
o_:function o_(){this.b=this.a=0},
pO:function pO(a){this.a=a
this.b=0
this.e=!1},
ij(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
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
ip(a,b,c){return new A.k(a,b,c)},
z8(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
DK(a,b,c,d){return new A.lp(d,b,c,a)},
DM(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Bb()
s=a.d
r=A.tq(s,0)
q=A.tq(s,1)
p=A.tq(s,2)
o=A.tq(s,3)
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
m=i.gt(0)>1?i.gaw():i
return new A.lp(m,p,o,A.eV(n,s))},
tq(a,b){return A.DL(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
DL(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc7(a)?-s:s},
l_:function l_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nu:function nu(a){this.a=a},
C_(a,b,c){var s=new A.jQ(a,c,null,b)
s.i8(a,null,null,b,c)
return s},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Cc(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bw(new A.G(B.jr,t.e2.a(new A.oc(a)),t.vL),t.yW)
return s==null?null:new A.fA(s)},
CM(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wF(s,a,B.j_)
break
case 1:A.wF(s,a,B.j0)
break
case 2:A.wF(s,a,B.ju)
break}return s},
wF(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Cb(a){if(a.a!==21)return null
if(a.e)return B.f_
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f0
return B.eZ},
cc:function cc(a,b){this.a=a
this.b=b},
o9:function o9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fA:function fA(a){this.a=a},
oc:function oc(a){this.a=a},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
CR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kB(s,new A.k(o,n,m),q,p,l,j)
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
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
G4(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.ff)
p.k(0,q,r.b)}return p},
uj(a){var s,r,q,p,o,n=a.ga_().bK(0)
B.a.W(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.zS(a.h(0,o)))}return A.aW(r,t.N,s)},
zS(a){var s
if(t.f.b(a))return A.uj(A.G4(a))
if(t.j.b(a)){s=t.z
return A.ah(J.dI(a,A.GT(),s),s)}if(a==null||A.bv(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fZ)
return a}throw A.b(A.S("presentation snapshot contains unsupported value "+J.fl(a).q(0),null,null))},
qv:function qv(a){this.a=a},
yW(a,b,c){var s=A.x7(b),r=A.x7(a)
if(c!==2)A.h(A.al(c,"version","unsupported save version"))
return new A.fT(c,s,r)},
x7(a){var s,r,q,p,o=A.o(a).i("ac<1>"),n=A.H(new A.ac(a,o),o.i("n.E"))
B.a.W(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.zR(a.h(0,p)))}return A.aW(s,t.N,o)},
zR(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fO)
s.k(0,p,q.b)}return A.x7(s)}if(t.j.b(a)){r=t.z
return A.ah(J.dI(a,A.GX(),r),r)}if(a==null||A.bv(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.h2)
return a}throw A.b(A.S("save contains unsupported value "+J.fl(a).q(0),null,null))},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(){},
eU:function eU(a,b){this.a=a
this.b=b},
yl(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.oy(a,b,c,d,e,f,g,s,r,h)},
ym(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aK(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fN)
r=d.h(0,"runSeed")
q=A.aK(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aK(p)||p<1||typeof o!="number")throw A.b(B.hg)
if(!isFinite(5760))throw A.b(A.al(5760,"daySeconds","must be finite and > 0"))
n=new A.k0(p,7,5760)
n.he(o)
s=t.N
m=t.z
l=A.CG(a5,A.aN(a0,s,m))
k=A.BX(l,A.aN(a,s,m),n)
j=A.AC(a3,c)
A.Cv(A.aN(a1,s,m)).kc(j)
s=A.aN(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bv(f))A.h(B.fp)
e=A.CN(d.h(0,"narrative"))
if(e==null)e=A.q4(null,null,null)
return A.yl(c,q,j,n,l,k,new A.jO(i,h,g,f),e)},
EV(a){var s
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
k_:function k_(a,b){this.c=a
this.d=b},
oz:function oz(a,b){this.a=a
this.b=b},
oy:function oy(a,b,c,d,e,f,g,h,i,j){var _=this
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
oA:function oA(a){this.a=a},
oB:function oB(){},
oC:function oC(){},
oD:function oD(a){this.a=a},
oE:function oE(){},
y6(a){var s,r,q,p,o,n,m,l="modelScale",k=A.jc(a,"house manifest"),j=typeof k.h(0,l)=="number"?A.a6(k.h(0,l)):1
if(!isFinite(j)||j<=0)throw A.b(B.fD)
s=A.c7(k,"houseId")
r=A.c7(k,"sourceRef")
q=J.dI(A.ha(k,"levels"),new A.nc(),t.mD)
q=A.H(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.dI(A.ha(k,"rooms"),new A.nd(j),t.bJ)
p=A.H(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.dI(A.ha(k,"portals"),new A.ne(j),t.lT)
o=A.H(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.dI(A.ha(k,"stairs"),new A.nf(),t.gI)
n=A.H(n,n.$ti.i("a1.E"))
n.$flags=1
m=J.dI(A.ha(k,"exteriorCells"),new A.ng(),t.N)
m=A.H(m,m.$ti.i("a1.E"))
m.$flags=1
s=new A.jv(s,r,q,p,o,n)
s.e0()
return s},
AC(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
a4.e0()
s=A.yo(a5)
r=new A.vw()
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
B.a.l(n,new A.eT(k.a,new A.k(e,d,i),new A.k(h,g,j),f,B.j4,k.r,k.w,k.x))}for(q=a4.f,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a2=q[l]
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
B.a.l(o,new A.eY(a3.a,a3.b,new A.k(i,h,m),new A.k(f,e,j[2])))}s.lH()
return s},
BG(a,b){var s,r=A.jc(a,"room"),q=A.c7(r,"id"),p=A.c7(r,"floor"),o=A.Ar(r.h(0,"origin"),"origin",b),n=A.Ar(r.h(0,"size"),"size",b),m=J.dI(A.ha(r,"windows"),new A.np(b),t.ya)
m=A.H(m,m.$ti.i("a1.E"))
m.$flags=1
s=J.dI(A.ha(r,"portalIds"),new A.nq(),t.N)
s=A.H(s,s.$ti.i("a1.E"))
s.$flags=1
return new A.dN(q,p,o,n,m,s,A.xC(r,"wall"),A.xC(r,"floor"),A.xC(r,"ceiling"))},
jc(a,b){return t.P.b(a)?a:A.dE(b+" is not an object")},
ha(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.dE(b+" is not a list")},
c7(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dE(b+" is not a string")},
xC(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.dE("surface is not an object")
return A.c7(s,b)},
xc(a,b){var s,r=A.c7(a,b)
A:{if("north"===r){s=B.r
break A}if("east"===r){s=B.ac
break A}if("south"===r){s=B.p
break A}if("west"===r){s=B.ad
break A}s=A.dE(b+" has unknown facing "+r)}return s},
FF(a,b){var s,r
if(t.j.b(a)){s=J.aG(a)
s=s.gO(a)||s.L(a,new A.vd())}else s=!0
if(s)return A.dE(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
eq(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dE(b+" is not finite")},
mv(a,b){var s,r
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vu())}else s=!0
if(s)return A.dE(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a6(r.gn()))
return s},
Ar(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.mv(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
jh(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gn()
if(!q.l(0,r))throw A.b(A.S("duplicate "+b+" id "+r,null,null))}},
dE(a){return A.h(A.S(a,null,null))},
jv:function jv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nc:function nc(){},
nd:function nd(a){this.a=a},
ne:function ne(a){this.a=a},
nf:function nf(){},
ng:function ng(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
nl:function nl(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
nh:function nh(a){this.a=a},
vw:function vw(){},
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
np:function np(a){this.a=a},
nq:function nq(){},
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
vd:function vd(){},
vu:function vu(){},
jB:function jB(a,b){this.a=a
this.b=b
this.d=null},
nF:function nF(a){this.a=a},
ko:function ko(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
lq:function lq(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p2:function p2(){this.b=0},
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
jT:function jT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oe:function oe(){},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function p4(){},
p3:function p3(a,b,c){this.a=a
this.b=b
this.c=c},
H5(a){var s,r,q,p,o,n,m,l
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
return new A.ch(B.aa,p,new Uint16Array(A.a2(a.b)),new A.jm(new A.M(s.a,s.b,s.c),new A.M(s.d,s.e,s.f)))},
H4(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.G1(a,new A.wm(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jU(o,p.c,p.e))}return n},
G1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
B.a.V(q,new A.vo())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].n6(a))
return r},
EC(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jT(r,q,p,o,n,m)},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
wm:function wm(a){this.a=a},
vo:function vo(){},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eC:function eC(a,b){this.a=a
this.b=b},
jV:function jV(){},
Gs(a){var s,r,q,p=new A.p3(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.EY(p,a,B.cZ[s],15.75,15.75,12.044999999999998,0.63)
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
A.FR(p,15.75,15.75,12.044999999999998,16.32)
A.EG(p,15.75,15.75,16.32)
A.EU(p,15.75,15.75,12.044999999999998)
A.F1(p,a,15.75)
A.FY(p,15.75,15.75)
A.EB(p,15.75)
return p.kl()},
EY(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ac!==b7,p=B.r!==b7,o=B.p===b7,n=B.ad===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aF(k)
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
B.a.l(b4,new A.eh(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aL(i),b=J.O(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aZ(i)!==b7)continue
B:{if(!p||o){a0=g+a.aG(i)
break B}if(!q||n){a0=e+a.aG(i)
break B}a0=null}B.a.l(b4,new A.eh(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.r||b7===B.p?b8:b9
r=t.i
a1=A.aI([0,s],r)
a2=A.aI([0,c0],r)
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
if(B.a.L(b4,new A.v3(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.F0(b5,b4,b7,b8,b9,c1)
A.EZ(b5,b4,b7,b8,b9,c1)
A.F_(b5,b4,b7,b8,b9,c0,c1)},
F_(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aI([0,a4===B.r||a4===B.p?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.H(a1,a1.$ti.c)
B.a.W(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.L(a3,new A.v2(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
EZ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
F0(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.FW(a2,g,a4,a5,a6,a7,q)}},
FW(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
FR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.FS(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
FS(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
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
EG(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
EU(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
F1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aG("hall")
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
FY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
EB(a,b){var s,r
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
v3:function v3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v2:function v2(a,b,c){this.a=a
this.b=b
this.c=c},
GV(a,b,c,d,e){var s,r,q,p,o,n,m,l
A.AU(b,d,c)
s=A.AV(b,d,c)
if(s!=null){r=s.ax&&!s.ay&&!s.z?"close door":"open door"
return new A.eD(B.f7,s.a,r)}if(A.AW(b,d,c)!=null)return B.fb
q=A.GU(a,b,c,d)
if(q!=null)return new A.eD(B.ck,q.a,"inspect the "+q.b)
p=A.AT(b,c,d,e)
if(p!=null){o=e.cB(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eD(B.f9,l,m?"inspect the "+o.b:"inspect "+n)}return B.fc},
AT(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mw(a5,s,4.5)
for(q=a6.mp(a4),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cB(i.c)
g=i.f.a
f=i.hf(h,o)
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
if(!A.mx(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
GU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hp(c)
if(s.length===0)return f
r=d.aF(e)
q=A.mw(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gaw()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mx(d,c,b.a,new A.k(n,m,o)))return k}return f},
dY:function dY(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
Gt(a,b){var s,r=new A.cY(new Float32Array(5376)),q=new A.cY(new Float32Array(5376)),p=new A.cY(new Float32Array(5376)),o=new A.cY(new Float32Array(5376)),n=b.d,m=a.aF(b),l=A.k8(b.y),k=A.k8(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cQ(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cQ(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Ew(p,a,b,m,B.cZ[s])
for(j=a.aL(b.a),i=J.O(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zF(o,b,m,h,!0)}j=B.t.aU(r.a,0,r.b)
i=B.t.aU(q.a,0,q.b)
h=B.t.aU(p.a,0,p.b)
B.t.aU(o.a,0,o.b)
return new A.qQ(j,i,h)},
Gq(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cY(new Float32Array(5376))
r=a.aF(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.zG(s,b,r,c,q)
return B.t.aU(s.a,0,s.b)},
Gr(a,b){var s,r,q,p=new A.cY(new Float32Array(5376)),o=a.aF(b)
for(s=a.aL(b.a),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zF(p,b,o,q,!1)}return B.t.aU(p.a,0,p.b)},
Ew(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.r||a4===B.p?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aL(s),q=J.O(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aZ(s)===a4)a.push(new A.eg(p.aG(s),p.aG(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eg(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aI([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.u)(a),++o){m=a[o]
r.M(0,A.c([m.a,m.b],p))}l=A.H(r,r.$ti.c)
B.a.W(l)
s=A.aI([0,a3.b],s)
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
if(B.a.L(a,new A.uf(f,e,d,c)))continue
A.Gi(a0,a2,a3,a4,f,e,d,c)}A.Ex(a0,a2,a3,a4,b,a)},
Ex(a,b,c,d,e,f){return},
hh(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.aH(j,l,g,h,d)
a.aH(s,r,q,p,d)
a.aH(l,s,p,g,d)
a.aH(r,j,h,q,d)
a.aH(l,j,r,s,d)
a.aH(g,p,q,h,d)},
Gi(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.k8(n).e
a.cQ(s.aj(0,o),r.aj(0,o),q.aj(0,o),p.aj(0,o),A.k8(n).c,(f-e)/m,(a1-a0)/m)
l=A.Gj(b,d)
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
default:j=k}A.aq(a,o,j,A.FZ(A.k8(n).c,0.68))},
FZ(a,b){var s,r=new A.vm(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hJ()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hJ()
r=r.$1(a&255)
if(typeof r!=="number")return A.vG(r)
return(q<<16|s<<8|r)>>>0},
Gj(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zF(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aZ(d),b=a3.aG(d),a=b+a3.w
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
break}if(a4)A.zG(a0,a1,a2,a3,q)
A.Ev(a0,a1,a2,a3)},
Ev(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aG(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
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
zG(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aZ(o),m=d.aG(o)
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
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
uf:function uf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vm:function vm(a){this.a=a},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yo(a){var s=t.N
return new A.p0(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.U),new A.p2())},
p0:function p0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ph:function ph(a){this.a=a},
mw(a,b,c){var s=a.aF(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mx(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Fp(a,s,c,d)},
Fp(a,b,c,d){var s,r,q,p,o=a.aF(b),n=d.ap(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.uk(a,b,o,B.r,r,q,p,c,n,m))return!0
if(A.uk(a,b,o,B.p,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.uk(a,b,o,B.ad,s,r,q,c,n,m))return!0
if(A.uk(a,b,o,B.ac,s+o.a,r,q,c,n,m))return!0
return!1},
uk(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.aj(0,a6.aC(0,s))
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
if(q.aZ(m)===a1){g=q.aG(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
AU(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.e.h(0,a0)
if(c==null)return null
s=A.mw(b,c,4.5)
for(r=c.r,q=c.d,p=q.a,o=q.b,q=q.c,n=s,m=null,l=0;!1;++l){k=r[l]
j=k.glV()
i=p+j.a
h=o+j.b
j=q+j.c
g=a.a
f=new A.k(i-g.a,h-g.b,j-g.c)
e=f.gt(0)
if(e<0.01||e>s)continue
d=f.gaw()
g=a.b
if(Math.acos(B.c.D(d.a*g.a+d.b*g.b+d.c*g.c,-1,1))<=0.5236&&e<n){if(!A.mx(b,a0,a.a,new A.k(i,h,j)))continue
n=e
m=k}}return m},
AV(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mw(b,j,4.5):4.5
for(s=b.aL(c),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.ms(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.A4(l,k,a,i,0.5236)||k>=q)continue
if(!A.mx(b,c,a.a,n))continue
q=k
p=o}return p},
AW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mw(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.Gk(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.A4(j,i,a,s,0.5236)||i>=p)continue
if(!A.mx(b,c,a.a,l))continue
p=i
o=m}return o},
A4(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gaw().c1(c.b),-1,1))<=e},
Gk(a,b,c){var s=a.aF(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
od:function od(){this.a=null
this.b=0},
rG:function rG(){},
rH:function rH(){},
CA(a){var s=A.jb(a,"inventory asset"),r=A.dH(s,"id"),q=A.dH(s,"kind")
A.dH(s,"source")
A.dH(s,"proxy")
A.dH(s,"pivot")
s=A.jb(s.h(0,"bounds"),"inventory bounds")
return new A.cR(r,q,new A.pp(A.mu(s.h(0,"min"),"bounds.min"),A.mu(s.h(0,"max"),"bounds.max")))},
CB(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.jb(a,"inventory placement"),i=A.jb(j.h(0,"visibility"),"placement visibility"),h=A.jb(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dH(j,"id"),e=A.dH(j,"roomId"),d=A.dH(j,"assetId")
A.dH(j,"role")
s=typeof j.h(0,"socket")=="string"?A.p(j.h(0,"socket")):null
j=A.jb(j.h(0,"transform"),"inventory transform")
r=A.mu(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.h(B.fS)
q=A.mu(j.h(0,"position"),"transform.position")
p=A.mu(j.h(0,"rotation"),"transform.rotation")
o=A.dH(i,"layer")
if(typeof i.h(0,k)=="string")A.p(i.h(0,k))
n=J.a8(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.p(h.h(0,"focusId")):null
l=t.P.b(g)?A.FE(g,"radius"):0
return new A.cv(f,e,d,s,new A.pr(q,p,r),o,n,m,l)},
jb(a,b){return t.P.b(a)?a:A.dD(b+" is not an object")},
dH(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dD(b+" is not a string")},
FE(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dD(b+" is not finite")},
mu(a,b){var s
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vt())}else s=!0
if(s)return A.dD(b+" is not a finite vec3")
s=J.aG(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dD(a){return A.h(A.S(a,null,null))},
p5:function p5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p8:function p8(a){this.a=a},
p6:function p6(a){this.a=a},
p7:function p7(a){this.a=a},
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
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(a,b){this.a=a
this.b=b},
vt:function vt(){},
pq:function pq(a){this.a=a},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p9:function p9(a){this.a=a},
pa:function pa(a){this.a=a},
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
Cu(a){return A.Ct(a)},
Ct(a){var s,r,q,p,o,n,m=A.Ab(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.Ab(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fM)
k.k(0,r.a,q)}s=A.xA(m,"id")
r=A.xA(m,"roomId")
p=A.xA(m,"placementId")
o=A.Gh(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h9("gain is not a number")
return new A.cQ(s,r,p,o,n,A.aW(k,l,l))},
Ab(a,b){return t.P.b(a)?a:A.h9(b+" is not an object")},
xA(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h9(b+" is not a string")},
Gh(a,b){var s
if(t.j.b(a)){s=J.aG(a)
s=s.gt(a)!==3||s.L(a,new A.vs())}else s=!0
if(s)throw A.b(A.S(b+" must be a numeric vec3",null,null))
s=J.aG(a)
return new A.k(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
h9(a){return A.h(A.S(a,null,null))},
pc:function pc(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
pf:function pf(){},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p1:function p1(){this.b=this.a=null},
eJ:function eJ(a,b){this.a=a
this.b=b},
pb:function pb(){this.b=this.a=null},
cP:function cP(a,b){this.a=a
this.b=b},
vs:function vs(){},
yp(a,b,c,d,e,f){var s=t.N
return new A.pg(e,f,c,a,A.aW(A.aN(d,s,s),s,s),A.ah(b,s))},
yq(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.i3(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,l=0;!1;++l){j=o[l]
i.k(0,j.gE(),new A.hS(j.gcJ(),j.glu()))}return A.yp(a.r.b,B.m,i,B.d6,h,s)},
Cv(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jL
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bc
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aK(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fK)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cn)
l=A.aN(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bv(j)||!A.bv(i))A.h(B.cn)
o.k(0,k,new A.i3(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bv(l.b))throw A.b(B.fH)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cl)
l=A.aN(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bv(f)||!A.bv(e))A.h(B.cl)
g.k(0,k,new A.hS(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hr)
d.k(0,n,A.p(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fd)
B.a.l(c,b)}return A.yp(a2,c,g,d,o,h)},
xv(a,b){return a.a.a===b.a&&a.a4(0,b.gaq(b))},
pg:function pg(a,b,c,d,e,f){var _=this
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
k8(a){var s=B.bk.h(0,a)
if(s==null)throw A.b(A.j("Unknown house surface material: "+a))
return s},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
C9(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hR(e,A.C(e).c)
q=new A.ei()
q.bO((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hy(a,q,2,r,1+s,A.aI(["time"],t.N))
break
case 3:A.hy(a,q,3,r,1+s,A.aI(["place"],t.N))
break
case 4:A.hy(a,q,4,r,2+s,p)
A.C5(a,q,4)
break
case 5:A.hy(a,q,5,r,s,p)
A.C3(a,q,5)
break
case 6:A.hy(a,q,6,r,s,p)
A.C4(a,q)
A.C8(a,q,6)
break
case 7:A.C6(a,q,7)
break
default:if(s>0)A.hy(a,q,b,r,s,p)}},
C2(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.C7(a,b,c))return!1
return!0},
hy(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(A.C2(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d0(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.yi(a,b,o[p],f)}},
yi(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aN(B.a.gZ(o).a,n,n)
if(d==null)s=A.c(B.z.slice(0),t.s)
else{n=t.vY
s=A.H(new A.G(B.z,t.Ag.a(new A.o8(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aS(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eg(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aS(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dB(c.a,m,B.a.gZ(o).b)},
C5(a,b,c){var s=A.yj(a,b,c)
if(!a.bY(s))return
a.es(c,t.G.a(s),0,B.b2,null)},
yj(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.z[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aS(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
C3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d0(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aN(B.a.gZ(i).a,s,s)
r=p.c
n=A.aN(B.a.gZ(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.z[m]
k=o.h(0,l)
j=s.eg(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aS(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dB(q.a,o,B.a.gZ(i).b)
a.dB(p.a,n,B.a.gZ(r).b)},
C4(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aS(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
C8(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aS(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.yi(a,b,q[s],null)},
C6(a,b,c){var s=c+1,r=A.yj(a,b,s)
if(!a.bY(r))return
a.es(s,t.G.a(r),0,B.b2,null)},
C7(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gZ(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gZ(b.c).c===B.ay}if(c===21)return b.e
return!1},
o8:function o8(a){this.a=a},
Dx(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p=A.aA(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.ti(n)},
pJ(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kk(A.aW(p,q,q),b,c)},
yC(a){var s=t.N
return A.pJ(t.P.a(a.h(0,"fields")).bG(0,new A.pK(),s,s),A.a6(a.h(0,"shakiness")),A.Ce(B.iY,A.p(a.h(0,"hand")),t.qX))},
Cd(a){var s,r,q,p,o=a.h(0,"margin"),n=A.f(a.h(0,"ordinal")),m=A.f(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yC(r.a(s.gn())))
s=A.aj(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.zP(a.h(0,"lastReadDay"))
return new A.bT(n,m,l,s,q,p,o==null?null:A.yC(r.a(o)))},
e_:function e_(a,b){this.a=a
this.b=b},
ti:function ti(a){this.a=a},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
pK:function pK(){},
pL:function pL(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yz(a){return new A.pu(a,A.m(t.S,t.g),A.a_(t.N),A.c([],t.t))},
CG(a,b){var s,r,q,p,o=A.yz(a)
o.e=A.f(b.h(0,"nextOrdinal"))
o.f=A.f(b.h(0,"locksRemaining"))
s=t.j
o.c.M(0,J.Bu(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Cd(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pu:function pu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pB:function pB(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nr:function nr(){},
CS(a){var s,r,q,p,o,n,m,l,k=B.i.am(a,null),j=t.f
if(!j.b(k)||!J.a8(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.fh)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.hb)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gn()
if(j.b(p)){o=A.aj(p.h(0,"assetId"))
if(o==null)o=""
n=A.aj(p.h(0,"licenseId"))
if(n==null)n=""
m=A.aj(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.aj(p.h(0,"sourceFormat"))
r.push(new A.i5(o,n,m,l==null?"":l))}else r.push(A.h(B.fW))}return new A.qu(A.CT(r))},
CT(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.wJ("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.S("promoted model index ID is invalid: "+o,n,n))
if(k.R(o))throw A.b(A.S("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.b.ba(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.S("promoted model index rights are unknown: "+o,n,n))
if(!A.aI(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.b(A.S("promoted model index source format is invalid: "+o,n,n))
if(!A.FV(q.c))throw A.b(A.S("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aW(k,m,l)},
FV(a){if(a.length===0||B.b.S(a,"/")||B.b.p(a,"://"))return!1
if(B.b.dG(a.toLowerCase(),".obj")||B.b.dG(a.toLowerCase(),".mtl")||B.b.dG(a.toLowerCase(),".fbx"))return!1
return B.a.a4(A.c(a.split("/"),t.s),new A.vl())},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qu:function qu(a){this.a=a},
vl:function vl(){},
qq:function qq(){},
qp:function qp(a,b,c){this.b=a
this.c=b
this.d=c},
qr:function qr(){},
CQ(a,b,c){return B.kJ},
kz:function kz(a,b){this.a=a
this.b=b},
qs:function qs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qt:function qt(){},
kj:function kj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qA:function qA(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yT(a){if(!isFinite(0))A.h(A.al(0,"interpolation",null))
return new A.qN(a)},
kM:function kM(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
qN:function qN(a){this.a=a},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
yR(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hR(c,A.C(c).c)
r=A.H(r,A.o(r).c)
B.a.W(r)
s=t.N
r=A.ah(r,s)
r=new A.qM(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aW(l,s,t.X))
r.ie(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
yS(a,b,c,d){var s=A.mk("RENDERER_SHA"),r=A.mk("GAME_SHA"),q=A.mk("DART_SDK_VERSION")
return A.yR(a,"7a6a5cc291ff-93a7e35137dd-dirty",b,!1,null,r,A.mk("LOCKFILE_SHA256"),d,A.mk("PROJECT_VERSION"),s,q,null)},
mk(a){var s=B.jD.h(0,a)
return s.length===0?null:s},
qM:function qM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qO:function qO(a){var _=this
_.a=a
_.d=_.c=_.b=0},
rB:function rB(a){this.a=a},
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
rC:function rC(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rF:function rF(a){this.a=a},
rE:function rE(a){this.a=a},
rD:function rD(a){this.a=a},
yf(a,b,c,d,e,f,g){var s=A.H(f,t.ho)
if(b<0||a<0||e<0)A.h(A.S("saved day-loop resources must not be negative",null,null))
return new A.o0(c,g,b,a,e,d===!0,s)},
BX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fw)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fL)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aK(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fr)
f=A.bw(new A.G(B.cR,q.a(new A.o1(h)),p),o)
e=A.bw(new A.G(B.cY,n.a(new A.o2(g)),m),l)
if(f==null||e==null)throw A.b(B.hk)
B.a.l(s,new A.fV(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aK(d)||!A.aK(c)||!A.aK(b)||!A.bv(a))throw A.b(B.fU)
return A.yf(c,d,a1,a,b,s,a3)},
bM:function bM(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o1:function o1(a){this.a=a},
o2:function o2(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.b=a
this.c=b},
f3:function f3(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
pi:function pi(a){this.c=a},
pm:function pm(a,b){this.a=a
this.b=b},
pn:function pn(){},
xf(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.hh)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qR:function qR(){},
cW:function cW(){},
qS:function qS(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
F6(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.v4(s,a).$0())
return r},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tj:function tj(a){this.b=a},
v4:function v4(a,b){this.a=a
this.b=b},
Cn(a){var s=A.H(a.c,t.z)
B.a.V(s,new A.ox())
return new A.ow(A.ah(s,t.Dm))},
Cm(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.jZ(a,c,A.fI(B.m,t.N))
s=t.N
r=J.y5(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.jZ(a,c,A.fI(new A.G(r,q.i("l(n.E)").a(new A.ov(a)),q.i("G<n.E>")),s))},
ow:function ow(a){this.a=a},
ox:function ox(){},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
ov:function ov(a){this.a=a},
q4(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.M(0,a)
s=A.m(r,r)
if(b!=null)s.M(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.M(0,c)
return new A.q3(q,s,r)},
CN(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aK(s)||s!==1)return l
r=A.yJ(a.h(0,"choices"))
q=A.yJ(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.Cj(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.q4(r,q,p)},
yJ(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.p(q.b))}return r},
Cj(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aK(r)||r<1||!A.aK(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cK(s,r,q,p)},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(){},
q6:function q6(){},
q7:function q7(){},
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
qn:function qn(a){this.a=a},
qo:function qo(a){this.a=a},
fX(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.q(r.a),r.b)}return q},
rM:function rM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rN:function rN(){},
rO:function rO(){},
f0:function f0(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b){this.a=a
this.b=b},
ll:function ll(a,b,c,d,e,f){var _=this
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
Dj(a){var s,r,q,p,o,n,m=B.i.am(a,null)
if(!t.f.b(m))throw A.b(B.h8)
s=m.h(0,"sources")
r=m.h(0,"scenes")
q=m.h(0,"events")
if(q==null)q=B.bc
if(J.a8(m.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.h5)
p=A.c([],t.s)
for(o=J.O(s);o.m();){n=o.gn()
if(typeof n!="string"||n.length===0)A.h(A.S("source must be a non-empty string",null,null))
p.push(n)}p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.Dd(o.gn()))
p=A.c([],t.tS)
for(o=J.O(q);o.m();)p.push(A.Dc(o.gn()))
return new A.rL(p)},
Dc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.p(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.p(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.p(a.h(0,f)).length===0)throw A.b(B.fF)
s=a.h(0,"effects")
if(s==null)s=B.bc
if(!t.j.b(s)||J.ws(s,new A.qY()))throw A.b(B.ha)
r=B.c.ad(A.a6(a.h(0,"day")))
q=A.a6(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.h0)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.fj)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.hp)
l=new A.qZ(a)
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
return new A.id(m,k,r,q,j,A.ah(i,t.N),n,h)},
Dd(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.fu)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.ad(r)!==r)throw A.b(B.fQ)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.S("screenplay scene "+s+" has invalid arrays",null,null))
m=B.c.ad(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.h(B.h_)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.h(B.hm)
A.p(j.h(0,"kind"))
A.p(j.h(0,"text"))
A.aj(j.h(0,"speaker"))
l.push(new A.kQ())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.Db(l.gn()))
return new A.kT(s,m)},
Db(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.fA)
s=A.p(a.h(0,m))
A.p(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.h(B.h4)
o=A.p(p.h(0,m))
n=A.p(p.h(0,"label"))
A.p(p.h(0,"next"))
r.push(new A.kS(o,n))}return new A.kR(s)},
rL:function rL(a){this.c=a},
id:function id(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
qY:function qY(){},
qZ:function qZ(a){this.a=a},
kT:function kT(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b},
rP:function rP(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
rQ:function rQ(){},
rR:function rR(){},
jn:function jn(a){this.a=a},
wt:function wt(a,b,c){this.b=a
this.e=b
this.f=c},
Bz(a){var s,r,q,p
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fg)
s=new A.mF()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.x2(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dJ(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b_(B.bg,new A.mD(a),new A.mE()))},
cI:function cI(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mF:function mF(){},
mD:function mD(a){this.a=a},
mE:function mE(){},
mQ:function mQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mS:function mS(a){this.a=a},
mR:function mR(a,b){this.a=a
this.b=b},
BF(a){var s
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fR)
s=new A.n2()
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
n2:function n2(){},
n3:function n3(a,b){this.a=a
this.b=b},
n4:function n4(a){this.a=a},
nt:function nt(a){this.a=a
this.b=null},
nx(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.al(c,"level","must be between 1 and 6"))
s=A.A(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nv(s,b)
return s},
dT(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.A(a,"button","brush-button brush-state-"+s.b,r)
A.nv(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.V(new A.nw(c)))
return q},
BK(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.nv(s,b)
s.addEventListener("change",A.V(new A.nA(d,s)))
return s},
BJ(a,b,c,d,e,f){var s,r
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
A.nv(s,b)
s.addEventListener("input",A.V(new A.nz(s,e)))
return s},
wv(a,b){var s=B.b.hW(A.p(a.className),A.wJ("\\s+")),r=A.C(s),q=r.i("G<1>"),p=A.H(new A.G(s,r.i("l(1)").a(new A.ny()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Y(p," ")
a.setAttribute("data-brush-state",s)},
nv(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gk_())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
nw:function nw(a){this.a=a},
nA:function nA(a,b){this.a=a
this.b=b},
nz:function nz(a,b){this.a=a
this.b=b},
ny:function ny(){},
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
nC:function nC(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nD:function nD(a){this.a=a},
yd(a){var s=!1
if(a.length!==0)if(!B.dB.p(0,a))s=B.lA.p(0,a)||B.ls.p(0,a)||B.lz.p(0,a)||!B.b.S(a,"Mouse")
return s},
EQ(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Fv(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.K(a,A.o(a).i("K<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fv(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fH(B.jA,s,r)
if(b!=null)q.M(0,b)
q.M(0,A.Fv(a))
s=new A.fu(g,d,h,e,f,c,A.aW(A.EQ(q),s,r))
s.C()
return s},
BU(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cm)
s=a.h(0,"version")
r=J.et(s)
if(!r.a6(s,1)&&!r.a6(s,2))throw A.b(B.cm)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fG)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.Bv(m,new A.nQ())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.p(l.gn()))
q.k(0,n,o)}else throw A.b(B.fm)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fv(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
x5(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.H(r.b,p)
o.k(0,q,r)}return o},
xr(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xF(a,b){var s,r,q,p=A.c([],t.s)
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
nS:function nS(){},
nR:function nR(a){this.a=a},
nT:function nT(){},
nU:function nU(){},
nV:function nV(){},
nQ:function nQ(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.c=b},
jG:function jG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
BT(a){var s=t.N,r=t.m
r=new A.hw(A.fv(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.i6(a)
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
nO:function nO(a,b){this.a=a
this.b=b},
nP:function nP(a){this.a=a},
nN:function nN(a,b){this.a=a
this.b=b},
nL:function nL(a,b){this.a=a
this.b=b},
nM:function nM(a,b){this.a=a
this.b=b},
BV(a){var s=new A.nW(a,A.a(a.createElement("div")))
s.aV(a)
s.i7(a)
return s},
nW:function nW(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nX:function nX(a){this.a=a},
C0(a){var s=new A.o4(A.A(a,"div","door",null))
s.i9(a)
return s},
yg(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Y(s,"; ")+"."},
o4:function o4(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
o5:function o5(a){this.a=a},
o6:function o6(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
Ca(a){var s=new A.oa(a,A.a(a.createElement("div")))
s.aV(a)
s.ia(a)
return s},
oa:function oa(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ob:function ob(a){this.a=a},
oF:function oF(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oG:function oG(){},
Co(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oH(a.b===B.cu,a.c===B.cy,s,a.e===B.cv,a.f===B.cs,a.r===B.cA,a.w,a.x)},
oH:function oH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ww(a,b,c,d,e,f,g,h,i,j,k){return new A.fC(e,g,k,f,b,h,d,c,a,i,j)},
Cp(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.h1)
s=new A.oI(a)
r=a.h(0,"contextualReminders")
if(!A.bv(r))throw A.b(B.hi)
q=!A.bv(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bf,t.bK)
o=s.$1$2("promptDensity",B.bj,t.dn)
n=s.$1$2("textPacing",B.bh,t.j_)
m=s.$1$2("journalLayout",B.ba,t.gm)
l=s.$1$2("confirmations",B.b4,t.aJ)
k=s.$1$2("saveFeedback",B.bb,t.mx)
j=s.$1$2("focusLossBehavior",B.aA,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b7,t.vS):B.aV
return A.ww(s,l,r,j,p,m,o,k,q,A.bv(a.h(0,g))&&A.Q(a.h(0,g)),n)},
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
oI:function oI(a){this.a=a},
oJ:function oJ(a,b){this.a=a
this.b=b},
oK:function oK(a){this.a=a},
yn(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.fP)
s=B.a.b_(B.cT,new A.oV(a),new A.oW())
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
j=A.zN(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dZ(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fE(a,b){var s=b==null?B.b1:b
return new A.oX(s,a==null?B.b1:a)},
AP(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dz(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dz("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fG(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cJ&&b.a<2){q=q.fH(B.b0)
B.a.l(s,"High preset was reduced to Standard")}return new A.oP(q,A.ah(s,t.N))},
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
oV:function oV(a){this.a=a},
oW:function oW(){},
oX:function oX(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
oP:function oP(a,b){this.a=a
this.b=b},
Cr(a){var s=new A.hH(A.m(t.N,t.m),B.b1,a,A.a(a.createElement("div")))
s.aV(a)
s.ib(a)
return s},
hH:function hH(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oS:function oS(a){this.a=a},
oT:function oT(a){this.a=a},
oU:function oU(a){this.a=a},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oQ:function oQ(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(){this.c=0},
Cs(a){var s=new A.oZ(a,A.a(a.createElement("div")))
s.aV(a)
s.ic(a)
return s},
oZ:function oZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
p_:function p_(a){this.a=a},
pv:function pv(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pw:function pw(a){this.a=a},
px:function px(a){this.a=a},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(){},
pA:function pA(){},
cU:function cU(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qc:function qc(a,b,c,d,e,f,g){var _=this
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
zX(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(p.length);++r){q=A.E(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i2:function i2(){},
bn:function bn(a,b){this.a=a
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
qi:function qi(){},
qj:function qj(){},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
qh:function qh(a){this.a=a},
qk:function qk(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
ql:function ql(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qm:function qm(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
qz:function qz(a){this.a=a
this.b=null},
De(a){var s=new A.r0(a,A.a(a.createElement("div")))
s.aV(a)
s.ig(a)
return s},
r0:function r0(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a){this.a=a},
kU(a,b){var s=t.N,r=t.m
r=new A.fU(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.wo(),B.ap,A.m(s,r),A.m(s,r),B.aN,A.m(s,r),a,A.a(a.createElement("div")))
r.aV(a)
r.ih(a,b)
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
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
rv:function rv(a){this.a=a},
rj:function rj(a,b){this.a=a
this.b=b},
rk:function rk(a,b){this.a=a
this.b=b},
ri:function ri(a){this.a=a},
rl:function rl(a){this.a=a},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(a,b){this.a=a
this.b=b},
ro:function ro(a,b){this.a=a
this.b=b},
rh:function rh(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a){this.a=a},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rx(a){return B.a.b_(B.A,new A.ry(a),new A.rz(a))},
Df(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
q.k(0,r.a,r.e)}return q},
dt(a,b){var s=t.z
s=A.fH(A.Df(),s,s)
if(a!=null)s.M(0,a)
s=new A.rw(b,A.aW(s,t.N,t.K))
s.ii(a,b)
return s},
yY(a){var s,r=t.f
if(!r.b(a)||!J.a8(a.h(0,"version"),1))throw A.b(B.hf)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fv)
return A.dt(A.aN(s,t.N,t.K),A.f(a.h(0,"version")))},
bB:function bB(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
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
ry:function ry(a){this.a=a},
rz:function rz(a){this.a=a},
rw:function rw(a,b){this.a=a
this.b=b},
wL(a,b){var s=b==null?A.dt(null,1):b
return new A.rA(s,a==null?A.dt(null,1):a)},
Dg(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
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
J.bk(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.z))throw n}}m=A.dt(l,1)
return A.wL(m,m)},
rA:function rA(a,b){this.a=a
this.b=b},
Dh(a){var s=new A.rI(a,A.a(a.createElement("div")))
s.aV(a)
s.ij(a)
return s},
rI:function rI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
BC(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
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
B.a.l(i,new A.cq(p+m+":"+k,m,l.a,l.b,j))}}B.a.V(i,new A.mO())
return new A.mN(A.ah(i,t.bC),A.a_(t.N))},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mN:function mN(a,b){this.a=a
this.b=b},
mP:function mP(){},
mO:function mO(){},
Dw(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mY
s=t.L
r=A.m(s,t.q1)
q=A.o(a).i("ac<1>")
p=A.H(new A.ac(a,q),q.i("n.E"))
B.a.W(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.br(B.mG,k+" has an out-of-range authored day "+h+"."))
g=A.Dv(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ag(o,o.r,o.e,A.o(o).i("ag<2>"));o.m();){n=o.d
J.jl(e.cP(n.b,new A.tc()),n)}o=A.aW(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.K(e,e.$ti.i("K<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aA(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lj(new A.li(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a1,A.q4(b,b,b)))},
Dv(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cP[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.S(h,m))continue
g=A.dq(B.b.aN(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.br(B.mH,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cX
B.a.l(l,new A.c3(g,i.b,f))}if(l.length===0)continue
B.a.V(l,new A.t9())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.br(B.dU,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.br(B.dU,a+" day "+s+" has no authored tiers."))
return new A.lO(c)},
li:function li(a,b,c,d,e,f,g,h){var _=this
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
tf:function tf(a){this.a=a},
te:function te(a){this.a=a},
tg:function tg(a){this.a=a},
ta:function ta(a){this.a=a},
tb:function tb(){},
td:function td(a){this.a=a},
tc:function tc(){},
t8:function t8(a){this.a=a},
t7:function t7(a){this.a=a},
t9:function t9(){},
lj:function lj(a){this.a=a},
lO:function lO(a){this.a=a},
GD(a){var s,r,q,p=A.a_(t.N)
for(s=new A.K(a,A.o(a).i("K<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaB(),q=q.gu(q);q.m();)if(q.gn().ga_().L(0,new A.vD())){p.l(0,r.a)
break}}s=A.H(p,p.$ti.c)
B.a.W(s)
return s},
GC(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aA(b,!0,s)
B.a.W(r)
q=new A.ei()
q.bO((a^913741)>>>0)
p=q.aS(4)
if(!(p>=0&&p<4))return A.d(B.cO,p)
o=B.cO[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aA(r,!0,s)
B.a.d0(m,q)
s=A.l1(m,0,A.fh(n,"count",t.S),A.C(m).c).bK(0)
B.a.W(s)
return s},
vD:function vD(){},
z9(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aK(r)||!A.aK(q)||!A.aK(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
Du(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.z9(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.BB(m)
if(!s&&l==null)return i
return new A.lk(r,o,l)},
BB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.z9(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aK(p))if(!(p<0))if(A.bv(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bw(new A.G(B.cP,t.qR.a(new A.mK(r)),t.cE),t.hF)
j=A.bw(new A.G(B.jv,t.da.a(new A.mL(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bw(new A.G(B.iD,t.kr.a(new A.mM(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jp(s,k,j,p,i,n,A.aj(m))},
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
br:function br(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(){},
jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mK:function mK(a){this.a=a},
mL:function mL(a){this.a=a},
mM:function mM(a){this.a=a},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
th:function th(){},
b9:function b9(a){this.a=a},
lg:function lg(a){this.a=a},
le:function le(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
lf:function lf(a,b,c){this.a=a
this.b=b
this.c=c},
FL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.ji())return f
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
if(s!=null)try{q=B.i.am(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lt.p(0,o.b))return f
J.bk(p,A.p(o.a),A.p(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.z)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.ly.p(0,i))return f
if(h!=null&&!B.lw.p(0,h))return f
return new A.tv(l,k,j,h,r)},
FM(){var s,r,q,p=A.ed().gb2().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eD
break A}if("intimate"===p){s=B.eF
break A}s=B.eE
break A}r=A.ed().gb2().h(0,"cameraFov")
q=A.eO(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fo(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jd(a){var s=$.bc
if(s===a&&B.b.p(A.p(a.b.className),"open"))return
if(s!=null)s.a8()
$.bc=a
if(a===$.cm.j())$.hm().h5("gameplay.viewport")
else $.hm().mo(A.Ac(a))
s=$.ad.j()
s.ay=!1
s.be()
$.ep=0
a.bH()},
xl(a,b,c){var s,r,q
$.je=!0
s=$.bc
if(s!=null)s.a8()
$.bc=a
s=$.hm()
if(s.a.a.length===0)s.h5(c)
r=A.H(s.a.a,t.oP)
r.push(new A.dn(b,B.W,c))
q=s.a
s.a=new A.e6(r,q.b,q.c)
s.iP(b)
s=$.ad.j()
s.ay=!1
s.be()
$.ep=0
a.bH()
$.je=!1},
dG(a){var s,r,q,p,o,n,m,l=null
if($.je)return
$.je=!0
a.a8()
$.bc=null
s=$.hm().ke()
$.je=!1
r=s.a
if(r===B.dp){$.ep=0
r=$.ad.j()
r.be()
r.ay=!0
q=A.E(A.a(v.G.document).getElementById("game"))
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
n.be()
$.ep=0
r.bH()
m=o==null?l:A.E(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jg(a){if($.bc===a&&B.b.p(A.p(a.b.className),"open"))a.a8()
else A.jd(a)},
he(a){var s
if($.je)return
if($.bc===a)$.bc=null
if(a===$.cm.j())$.hm().cc()
else $.hm().le(A.Ac(a))
$.ep=0
s=$.ad.j()
s.be()
s.ay=!0},
Ac(a){if(a===$.cm.j())return B.de
if(a===$.h8.j())return B.W
if(a instanceof A.fU)return B.W
if(a instanceof A.hH)return B.W
if(a instanceof A.hw)return B.W
if(a===$.j3.j())return B.kt
if(a===$.mf.j())return B.ku
if(a===$.j2.j())return B.kv
if(a===$.md.j())return B.W
if(a===$.j0.j())return B.kx
return B.kw},
mj(a,b){var s
a.smd(new A.us())
a.smf(new A.ut())
a.sme(new A.uu())
a.sm9(new A.uA())
a.smc(new A.uB())
a.smn(new A.uC())
a.smi(new A.uD())
a.smh(new A.uE())
a.sb6(b?new A.uF(a):new A.uG(a))
a.sb1(b?new A.uH(a):new A.uv(a))
s=a.f
if(s===B.E)a.sm0(new A.uw())
if(s===B.Y)a.sma(new A.ux())
if(s===B.F){a.sm_(new A.uy())
a.smg(new A.uz())}},
EN(){var s=$.en.j()
s.sdN(new A.up())
s.sb6(new A.uq())
s.sb1(new A.ur())},
mi(a,b,c){return A.EK(a,b,c)},
EK(a,b,c){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mi=A.bi(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.ul()
k=c.$ti
j=$.ap
i=new A.as(j,k)
if(j!==B.x)l=A.Aj(l,j)
c.cl(new A.dA(i,2,null,l,k.i("dA<1,1>")))
s=4
return A.ae(i,$async$mi)
case 4:case 3:o=$.jj().b
n=$.aR
q=6
s=n!=null?9:10
break
case 9:s=11
return A.ae(n.cA(b.a),$async$mi)
case 11:case 10:k=b.a
$.j8=A.fE(k,a)
$.en.j().cj(a,k,b.b)
A.xn()
A.jf()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ak(g)
$.j8=A.fE(o,o)
k=$.en.j()
k.cj(o,o,A.c(["renderer transaction rejected: "+A.v(m)],t.s))
A.xn()
s=8
break
case 5:s=1
break
case 8:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$mi,r)},
FA(){var s,r,q,p,o,n=null
try{n=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.i.am(n,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.h3)
q=A.yn(r.h(0,"requested"))
$.j8=A.fE(A.yn(r.h(0,"effective")),q)}catch(s){$.j8=A.fE(null,null)}p=$.jj().a
o=A.AP(p,A.A0())
r=o.a
$.j8=A.fE(r,p)
$.en.j().cj(p,r,o.b)
A.xn()
A.jf()},
A0(){var s,r,q,p,o=$.fd.j().gfK().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.S(p,"max-samples-"))continue
r=A.dq(B.b.aN(p,12),null)
if(r==null)r=1}return new A.oO(r,B.a.p(o,"disjoint-timer-query"))},
xn(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.i.ab($.jj().B(),null))}catch(s){}},
EM(){var s=$.j_.j()
s.sdN(new A.um())
s.sb6(new A.un())
s.sb1(new A.uo())},
Fy(){var s,r,q,p,o,n=null
try{n=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.xa=A.BU(B.i.am(n,null))}catch(s){$.xa=A.fv(null,null,!1,1,!1,!1,2,1)}r=$.j_.j()
q=r.w=$.fj()
r.x=new A.jG(q)
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
r.ds()
$.ad.j().ea($.fj().r)
r=$.ad.j()
q=$.fj()
p=r.ch
p.a=q.f
p.dT()
r.be()
A.Ae()},
Ae(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.i.ab($.fj().B(),null))}catch(s){}},
Fx(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j7=A.BF(B.i.am(r,null))}catch(s){$.j7=B.aN}$.h7.j().hv($.j7)
A.Ad()
A.x1()},
Ad(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.i.ab($.j7.B(),null))}catch(s){}},
x1(){var s=$.bg
if(s==null)return
s.hF($.j7)},
Fz(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.xe=A.Cp(B.i.am(r,null))}catch(s){$.xe=$.wo()}$.j1.j().hw($.cG())
A.Af()
A.zJ()},
Af(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.i.ab($.cG().B(),null))}catch(s){}},
zJ(){var s,r="detailed",q=A.Co($.cG()),p=A.E(A.a(v.G.document).documentElement)
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
Fw(){var s,r=null
try{r=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eo=A.Bz(B.i.am(r,null))}catch(s){$.eo=B.ap}$.fc.j().e9($.eo)
A.xm()
A.mg()},
xm(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.i.ab($.eo.B(),null))}catch(s){}},
mg(){var s,r,q,p,o,n,m=$.eo,l=$.vp,k=$.xD,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.fs)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a7
$.xs=l
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
if($.zH){m=$.bG.j()
l=$.eo.f
m.e=new A.jn(l==null?B.a7:l)
m=$.bG.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Ah(a){var s,r,q
A.es("renderer-unavailable")
s=$.y.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dC.j().b)
$.dC.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dC.j().d)
q.k(0,"aliasUsed",$.dC.j().f)
if($.dC.j().e!=null)q.k(0,"rejectionReason",$.dC.j().e)
if($.dC.j().r!=null)q.k(0,"aliasReason",$.dC.j().r)
s.setAttribute("data-renderer-diagnostics",B.i.ab(A.L(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
Fa(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.v8(r,q)
r.addEventListener("change",A.V(new A.v6(s)))
q.addEventListener("change",A.V(new A.v7(s)))},
my(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$my=A.bi(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.E(A.a(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.y.b=e1
$.xd=A.E(A.a(e0.document).getElementById("fps"))
$.dC.b=$.Bh().cg(A.ed().gb2().h(0,"renderer"))
A.Fb()
c0=$.y.j()
c1=A.f(A.a(e0.window).innerWidth)>0?A.f(A.a(e0.window).innerWidth):800
c0.width=c1
c1=$.y.j()
c0=A.f(A.a(e0.window).innerHeight)>0?A.f(A.a(e0.window).innerHeight):600
c1.height=c0
c2=A.E(A.a(e0.document).getElementById("ui-canvas"))
if(c2!=null){$.zE.b=c2
c2.width=A.f($.y.j().width)
c2.height=A.f($.y.j().height)
c0=new A.nC(c2,A.c([],t.km))
c3=A.E(c2.getContext("2d"))
if(!t.m.b(c3))A.h(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.qO(c0)
$.er=c0
c0.cT(A.f($.y.j().width),A.f($.y.j().height))}n=B.eC.l8(e1)
if(n==null){A.Ah("webgl2 unavailable")
s=1
break}try{c0=t.s6
c1=t.N
c4=t.iO
c5=t.m3
c6=t.pw
m=new A.lR(n,A.f($.y.j().width),A.f($.y.j().height),A.c([],c0),A.m(c1,t.qr),A.c([],t.s3),A.m(c1,c4),A.m(c1,c5),A.m(c1,t.xp),A.m(c1,t.bE),A.m(c1,c4),A.m(c1,c5),A.c([],c0),A.m(c1,c4),A.m(c1,c5),A.m(c1,c1),A.m(t.S,c6),A.m(c1,t.qS),A.c([],t.j5),B.j1,A.m(c1,t.Aj),A.m(c1,c1),A.m(c1,c6),A.m(c1,t.vD),A.m(c1,c6),A.m(c1,t.w1),B.hs,B.kL)
$.aR=m
c1=$.dC.j()
c6=t.dM.a(m)
if(c1.a!==B.aE)A.h(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.qp(c6,c1.B(),B.l7)
c6.lI()
c0.d=B.M
$.fd.b=c0}catch(e3){l=A.ak(e3)
k=A.cF(e3)
g=$.y.j()
g.setAttribute("data-renderer-error",A.v(l))
if($.ji())$.y.j().setAttribute("data-renderer-error-stack",A.v(k))
A.Ah("pixeldart initialization failed")
s=1
break}A.jf()
p=4
A.es("initializing")
$.d6.b=new A.nB(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.y_())
$.vp=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xD=A.Q(A.a(A.a(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.xs=$.vp
$.d6.j()
c0=A.a(e0.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.Cw(A.L(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.a(c0.document)
c4=new A.ka(c0,c6,A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),A.a_(c1),new A.k(0,0,0),new A.po(),c4)
c0.addEventListener("keydown",A.V(c4.gjd()))
c0.addEventListener("keyup",A.V(c4.gjf()))
c0.addEventListener("mousemove",A.V(c4.gjl()))
c0.addEventListener("mousedown",A.V(c4.gjj()))
c0.addEventListener("mouseup",A.V(c4.gjn()))
c0.addEventListener("wheel",A.V(c4.gjp()))
c6.addEventListener("pointerlockchange",A.V(c4.gjh()))
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
return A.ae(c4.bs(),$async$my)
case 7:j=c4.n5()
i=A.Dw(j)
if(!(i instanceof A.lj)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aE.b=i.a
$.mc.b=A.BC(j)
g=A.m(c1,c5)
for(c0=t.j,c8=0;c8<5;++c8){f=B.z[c8]
c5=A.p(f)
c6=c4.c
c6===$&&A.q()
c9=c6.h(0,c5)
c5=c0.b(c9)?A.aA(c9,!0,c1):B.m
J.bk(g,f,c5)}e=A.Dx(g)
s=8
return A.ae(A.mo(),$async$my)
case 8:d=e5
$.x_.b=new A.nu(B.eB)
c=$.x_.j().mv(new A.vL(e,d))
d0=$.wp()
b=d0
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.aQ.aS(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.c.aP(c6.c)
if(c6==null)c6=7
if(c5<1)A.h(A.al(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.h(A.al(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.al(5760,"daySeconds","must be finite and > 0"))
d1=new A.k0(c5,7,5760)
d1.eh(c6)
d2=A.yz(e)
d3=g==null?A.yo(42):A.AC(g,42)
g=A.yl(42,c1,d3,d1,d2,A.yf(6,16,d2,null,6,B.j2,d1),new A.jO(0,0,0,!1),A.q4(null,null,null))}else{g=c.a
g.toString
g=A.ym(d,g,e)}$.U.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Cm(a,g,$.U.j().b)}$.x4=g
$.aE.j().y=$.U.j().z
g=A.ah(A.F6($.U.j().b),t.fu)
$.x0.b=new A.tj(g)
g=$.wq()
c1=c.a
g.dV(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fd.j().em(A.yT($.U.j().ghb()))
if(c.b!=null){g=c.b
g.toString
A.hf(g)}g=$.aE.j()
c1=A.GC($.U.j().b,A.GD(j.b))
g.shX(A.hR(c1,A.C(c1).c))
A.es("house")
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
a7.shP(a5)}}}a8=$.xZ()
if(a8!=null&&a8.length!==0)for(g=$.W.j().b,c1=g.length,c8=0;c8<g.length;g.length===c1||(0,A.u)(g),++c8){a9=g[c8]
for(c4=a9.r,d4=0;!1;++d4){b0=c4[d4]
b0.gE()}}g=$.aR
if(g!=null)g.kd($.W.j())
$.bb.b=$.U.j().d
$.W.j()
g=new A.k(12.9375,1.65,0.825)
$.xE=$.xq=$.xw=g
b1=g.ap(0,new A.k(0,1.3499999999999999,0))
$.j4.b=new A.jB(b1,J.y0(b1,new A.k(0,1.2000000000000002,0)))
$.ue.b=new A.od()
g=A.xf(B.m)
c1=A.xf(B.m)
c4=new A.qS(B.B,g,c1)
if(!isFinite(0))A.h(B.fe)
if(!B.a.a4(c1,B.a.gaq(g)))A.h(B.fV)
if(c4.a===B.B&&c4.b!==0&&!c4.e)A.h(B.fk)
$.c6.b=c4
$.az="hall"
g=c.a
b2=A.CR(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.lO($.W.j())){g=b2.b
$.xE=$.xq=$.xw=g
$.cn=b2.c
$.ff=b2.d
$.az=b2.a
b3=g.ap(0,new A.k(0,1.3499999999999999,0))
g=$.j4.j()
g.skf(b3)
g.b=J.y0(b3,new A.k(0,1.2000000000000002,0))
g=$.j4.j()
c1=$.W.j()
c4=b2.e
c5=b2.f
g.mQ($.az,$.ev(),c1,c5,c4)
A.hf("restored position")}g=A.De(A.a(e0.document))
g.sm1(new A.vM())
g.sb6(new A.vN())
g.sb1(new A.vY())
$.h8.b=g
g=A.a(e0.document)
c1=A.a(g.createElement("div"))
c4=new A.ql(g,c1)
c4.aV(g)
c1.className=A.p(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.a(c1.appendChild(A.nx(g,B.ej,1)))
A.a(c1.appendChild(A.A(g,"p","settings-copy","The house waits. Choose what to do next.")))
d5=A.A(g,"nav","pause-actions",null)
d5.setAttribute("aria-label","Pause actions")
c4.bm(g,d5,B.df,"resume")
c4.bm(g,d5,B.dg,"settings")
c4.bm(g,d5,B.dh,"controls")
c4.bm(g,d5,B.di,"save now")
c4.bm(g,d5,B.dj,"help")
c4.bm(g,d5,B.dk,"credits")
c4.bm(g,d5,B.dl,"back")
A.a(c1.appendChild(d5))
c4.smj(new A.w6())
c4.sb6(new A.w7())
c4.sml(new A.w8())
c4.sm5(new A.w9())
c4.smk(new A.wa())
c4.smb(new A.wb())
c4.sm6(new A.wc())
c4.sb1(new A.vO())
$.cm.b=c4
c4=$.U.j().e
c1=$.bb.j()
$.U.j()
$.me.b=new A.pm(c4,c1)
c1=A.a(e0.document)
c4=$.U.j().e
g=$.bb.j()
c5=$.me.j()
c6=A.a(c1.createElement("div"))
c5=new A.pv(c4,g,c5,c1,c6)
c5.aV(c1)
c6.setAttribute("aria-label","The Journal")
A.a(c6.appendChild(A.A(c1,"div","journal-title","The Journal")))
d6=A.A(c1,"div","journal-pages",null)
g=A.A(c1,"div","page page-left",null)
c5.y!==$&&A.aY()
c5.y=g
c4=A.A(c1,"div","page page-right",null)
c5.z!==$&&A.aY()
c5.z=c4
A.a(d6.appendChild(g))
A.a(d6.appendChild(c4))
A.a(c6.appendChild(d6))
A.a(c6.appendChild(c5.iv()))
d7=A.A(c1,"div","tape-roll",null)
A.a(d7.style).setProperty("width","8rem")
c4=A.A(c1,"div","tape-fill",null)
c5.as!==$&&A.aY()
c5.as=c4
A.a(d7.appendChild(c4))
A.a(c6.appendChild(d7))
d8=A.A(c1,"div","consult",null)
A.a(d8.appendChild(A.A(c1,"div","consult-label","Cite an entry")))
c4=A.A(c1,"div","entry-picker",null)
c5.at!==$&&A.aY()
c5.at=c4
g=A.A(c1,"div","consult-result",null)
c5.ax!==$&&A.aY()
c5.ax=g
A.a(d8.appendChild(c4))
A.a(d8.appendChild(g))
A.a(c6.appendChild(d8))
d9=A.E(c1.documentElement)
if(t.m.b(d9)){A.a(d9.style).setProperty("--shake-max-deg","3deg")
A.a(d9.style).setProperty("--shake-max-px","2px")}$.j3.b=c5
$.j3.j().sb1(new A.vP())
g=A.a(e0.document)
c1=A.A(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.a(c1.style).setProperty("transition-duration","0.3s")
A.a(A.E(g.body).appendChild(c1))
$.zD.b=new A.qz(c1)
c1=A.a(e0.document)
g=A.A(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.E(c1.body).appendChild(g))
$.zC.b=new A.nt(g)
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
$.bG.b=new A.mQ(c1,c4,B.H)
$.zH=!0
c4=A.C0(A.a(e0.document))
c4.sm4(A.AN())
c4.sm3(A.GQ())
$.at.b=c4
c4=$.cp()
c4.sm2(new A.vQ())
c4.sm7(A.AN())
c4=c.a
b4=A.Du(c4==null?null:c4.c.h(0,"visitors"))
if($.cG().Q&&b4!=null&&$.aE.j().dV(b4))A.FQ()
g=$.mc.j()
c1=c.a
g.mR(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.O(b5);g.m();){b6=g.gn()
if(A.aK(b6))$.vq.l(0,b6)}g=A.Dh(A.a(e0.document))
g.smm(new A.vR())
g.sb1(new A.vS())
$.mf.b=g
g=A.Cs(A.a(e0.document))
g.sb1(new A.vT())
$.j2.b=g
g=A.BV(A.a(e0.document))
g.sb1(new A.vU())
$.md.b=g
$.j5.b=A.kU(A.a(e0.document),null)
$.j6.b=A.kU(A.a(e0.document),B.X)
$.fc.b=A.kU(A.a(e0.document),B.F)
A.mj($.j5.j(),!1)
A.mj($.j6.j(),!0)
A.mj($.fc.j(),!0)
A.Fw()
A.Fa()
$.en.b=A.Cr(A.a(e0.document))
A.EN()
A.FA()
$.h7.b=A.kU(A.a(e0.document),B.E)
A.mj($.h7.j(),!0)
A.Fx()
$.j1.b=A.kU(A.a(e0.document),B.Y)
A.mj($.j1.j(),!0)
A.Fz()
$.j_.b=A.BT(A.a(e0.document))
A.EM()
A.Fy()
g=A.Ca(A.a(e0.document))
g.sb1(new A.vV())
g.sm8(new A.vW())
$.j0.b=g
g=c.a
b7=A.Cc(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.Ag(b7)
A.es("world")
A.Ak()
A.a(e0.window).addEventListener("resize",A.V(new A.vX()))
A.a(e0.document).addEventListener("visibilitychange",A.V(new A.vZ()))
A.a(e0.window).addEventListener("keydown",A.V(new A.w_()))
A.a(e0.window).addEventListener("keyup",A.V(new A.w0()))
A.a(e0.window).addEventListener("keydown",A.V(new A.w1()))
A.a(e0.window).addEventListener("click",A.V(new A.w2()))
$.y.j().addEventListener("mousemove",A.V(new A.w3()))
$.y.j().addEventListener("click",A.V(new A.w4()))
$.y.j().addEventListener("wheel",A.V(new A.w5()))
A.hc()
A.es("raf")
A.f(A.a(e0.window).requestAnimationFrame(A.V(A.AO())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b8=A.ak(e2)
b9=A.cF(e2)
A.vi(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$my,r)},
F9(a){var s,r,q,p=$.er
if(!$.at.j().y||p==null)return
s=A.zT(a)
if(s==null)return
r=$.cp()
q=p.fY(s.a,s.b)
r.r=q==null?null:q.b},
F8(a){var s,r=$.er
if(!$.at.j().y||r==null)return!1
s=A.zT(a)
if(s==null)return!1
return $.cp().lE(r.fY(s.a,s.b))},
zT(a){var s=A.a($.y.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aP(A.f(a.clientX)-A.a6(s.left),A.f(a.clientY)-A.a6(s.top))},
Fb(){var s=v.G
A.a(s.window).addEventListener("error",A.V(new A.v9()))
A.a(s.window).addEventListener("unhandledrejection",A.V(new A.va()))},
es(a){if($.x6===a)return
$.x6=a
$.y.j().setAttribute("data-boot-phase",a)},
jf(){var s,r,q,p,o,n=null,m=$.fd.j().gfK(),l=$.y.j(),k=A.ed().gb2().h(0,"renderer")
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
p=B.i.ab(A.L(["profile",A.L(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.i.ab(B.jy,n))
l=$.aR
o=l==null?n:l.x
if(o!=null)$.y.j().setAttribute("data-renderer-profile-fallback",o)},
FI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.ji())return
s=$.xZ()
if(s!=null&&s.length!==0){r=$.y.j()
q=$.Bg()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.x0.j().fP($.U.j().gaa().a)
r=$.y.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.wp()
o=q==null?c:q.e
if(o!=null)$.y.j().setAttribute("data-automation-capture-shutters",o)
$.y.j().setAttribute("data-automation-rain-window-visibility",B.c.aM(A.Ai($.az),3))
r=$.y.j()
q=$.x6
n=$.az
m=$.ev()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.i.ab(A.L(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.L(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cn,"pitch",$.ff,"modal",$.bc!=null,"dialogueOverlay",$.at.j().y,"inputEnabled",$.ad.j().ay,"day",$.U.j().gaa().a,"hour",$.U.j().gaa().b],l,k),c))
j=A.m(l,t.X)
for(r=$.W.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.u)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.L(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.y.j().setAttribute("data-automation-portals",B.i.ab(j,c))
e=$.mh
r=!1
if(e!=null)if($.W.j().e.h(0,"cellar")!=null){r=$.W.j()
q=$.az
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cd("cellar",$.az)
$.y.j().setAttribute("data-audio-transmission-cellar",B.i.ab(A.L(["sourceRoom","cellar","listenerRoom",$.az,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.y.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mt(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c6.j().a!==B.B){A.hf("save unavailable during rupture")
return}try{r=$.x_.j()
q=$.U.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.az
m=$.ev()
l=$.cn
k=$.ff
j=$.j4.j().d
j=j==null?null:j.a.a
i=$.j4.j().d
J.bk(s,"player",new A.kB(n,m,l,k,j,i==null?null:i.b).B())
n=$.aE.j()
m=A.eV(n.b,p)
l=A.eV(n.c,t.L)
n=n.r
J.bk(s,"visitors",new A.lk(m,l,n==null?null:new A.jp(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.mc.j().b
n=A.H(n,A.o(n).c)
B.a.W(n)
J.bk(s,"ambient",n)
n=$.x4
if(n!=null)J.bk(s,"authoredEvents",A.L(["delivered",n.glc()],p,o))
n=A.H($.vq,A.o($.vq).c)
B.a.W(n)
J.bk(s,"unverifiables",n)
J.bk(s,"inventoryInspections",$.wq().B())
n=$.xb
if(n!=null)J.bk(s,"ending",A.L(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.yq(q.c).B()
k=q.d
r.n7(A.yW(s,A.L(["houseSeed",n,"runSeed",m,"house",l,"time",A.L(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hf(a)}catch(h){A.hf("save failed")}},
FG(){var s=A.E(A.a(v.G.document).documentElement),r=s==null?null:A.aj(s.getAttribute("data-gameplay-focus-loss")),q=A.bw(new A.G(B.aA,t.rg.a(new A.ve(r)),t.vK),t.x)
switch((q==null?B.aW:q).a){case 0:$.mq=!0
s=$.bg
if(s!=null)s.ec(!0)
break
case 1:$.mq=!0
break
case 2:break}},
hf(a){var s=v.G,r=A.E(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.E(A.a(s.document).documentElement)
s=s==null?null:A.aj(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Cl(B.eY,new A.vn(r),t.H)},
vi(a,b){var s,r,q,p
A.es("error")
s=A.v(a)
r=A.xP(s,"\n"," ")
s=$.xd
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.E(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.v(a):A.v(a)+"\n"+b.q(0)
$.y.j().setAttribute("data-boot-error",p)
if($.ji()&&!q)$.y.j().setAttribute("data-boot-stack",b.q(0))
A.a(s.console).error(p)},
zM(){var s,r
if($.x3)return
$.x3=!0
s=$.bg
r=s==null
if(!r)s.cc()
if(!r)s.el("music")
B.a.l($.d7,"arm")},
hc(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hc=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ae(A.hb(),$async$hc)
case 2:o=null
q=4
s=7
return A.ae(A.aS(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hc)
case 7:n=b
i=A
s=8
return A.ae(A.aS(A.a(n.json()),t.X),$async$hc)
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
l=$.md.j().f
l===$&&A.q()
l.textContent=k}s=9
return A.ae(A.os(A.c([A.vb(o),A.v5(o),A.mp()],t.iJ),t.H),$async$hc)
case 9:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$hc,r)},
mp(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h
var $async$mp=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ae(A.aS(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$mp)
case 6:o=b
if(!A.Q(o.ok)){k=A.j("HTTP "+A.v(A.xK(o,"status",t.S)))
throw A.b(k)}s=7
return A.ae(A.aS(A.a(o.text()),t.N),$async$mp)
case 7:n=b
m=A.CS(n)
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
return A.bf($async$mp,r)},
hb(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hb=A.bi(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.cS[g]
q=6
s=9
return A.ae(A.aS(A.a(A.a(j.window).fetch(o)),i),$async$hb)
case 9:n=a0
s=10
return A.ae(A.aS(A.a(n.text()),h),$async$hb)
case 10:m=a0
l=A.y6(B.i.am(m,null))
f=$.W.b
if(f===$.W)A.h(A.a5(""))
l.e_(f)
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
return A.ae(A.mm(),$async$hb)
case 11:s=12
return A.ae(A.mn(),$async$hb)
case 12:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$hb,r)},
mo(){var s=0,r=A.bh(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mo=A.bi(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.cS[f]
p=7
s=10
return A.ae(A.aS(A.a(A.a(i.window).fetch(n)),h),$async$mo)
case 10:m=a0
s=11
return A.ae(A.aS(A.a(m.text()),g),$async$mo)
case 11:l=a0
k=A.y6(B.i.am(l,null))
k.e0()
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
return A.bf($async$mo,r)},
mm(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mm=A.bi(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iG[c]
p=7
s=10
return A.ae(A.aS(A.a(A.a(g.window).fetch(n)),f),$async$mm)
case 10:m=b1
s=11
return A.ae(A.aS(A.a(m.text()),e),$async$mm)
case 11:l=b1
b=B.i.am(l,null)
b=h.b(b)?b:A.dD("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dD("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aK(a)?a:A.dD("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dD("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aA(a,!0,d):A.dD("assets is not a list")
a4=A.C(a3)
a5=a4.i("I<1,cR>")
a3=A.H(new A.I(a3,a4.i("cR(1)").a(A.GM()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aA(a,!0,d):A.dD("placements is not a list")
a5=A.C(a4)
a6=a5.i("I<1,cv>")
a4=A.H(new A.I(a4,a5.i("cv(1)").a(A.GN()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.p5(a1,a2,a0,a3,a4)
a1=$.W.b
if(a1===$.W)A.h(A.a5(""))
k.e_(a1)
$.ml=k
a1=$.aR
if(a1!=null)a1.hx(k)
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
return A.bf($async$mm,r)},
mn(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mn=A.bi(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.ml
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.jd[a4]
p=7
s=10
return A.ae(A.aS(A.a(A.a(a1.window).fetch(m)),a2),$async$mn)
case 10:l=b5
s=11
return A.ae(A.aS(A.a(l.text()),e),$async$mn)
case 11:k=b5
a5=B.i.am(k,null)
a5=a0.b(a5)?a5:A.h9("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aA(a6,!0,a3):A.h9("emitters is not a list")
a8=A.C(a7)
a9=a8.i("I<1,cQ>")
a7=A.H(new A.I(a7,a8.i("cQ(1)").a(A.H0()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aK(a6)?a6:A.h9("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h9("sourceRef is not a string")
j=new A.pc(a8,a9,a7)
a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
j.n2(a7,b2)
$.A3=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bk(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.W.b
if(a7===$.W)A.h(A.a5(""))
a8=A.BD(i)
a9=new A.n_(a7,A.aW(B.d7,e,d),a8)
a9.i5(a8,a7,B.d7)
$.mh=a9
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
case 5:$.mh=null
$.y.j().setAttribute("data-audio-planner","unavailable")
$.y.j().setAttribute("data-house-soundscape","unavailable")
$.y.j().setAttribute("data-house-soundscape-error",A.v(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.v(n))
case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$mn,r)},
x9(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.aV(s,A.C(s).i("aV<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.p(q))}},
v5(a){var s=0,r=A.bh(t.H),q,p,o,n,m,l
var $async$v5=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.x9(A.E(n?null:a.sfx),m,"")
A.x9(A.E(n?null:a.ir),m,"ir-")
q=A.E(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.p(p))
l=$
s=2
return A.ae(A.n6(m,$.W.j()),$async$v5)
case 2:o=l.bg=c
o.ch=$.mh
o.by()
A.FB()
A.Am(o)
A.x1()
A.An()
if($.x3){o.cc()
o.el("music")}return A.be(null,r)}})
return A.bf($async$v5,r)},
xz(a,b){var s
A.Az(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
FN(a){var s,r
try{s=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zI(a,b){var s
if(a!=="brightness")return
s=A.E(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.v(B.c.D(b,0.6,1.4))+")")},
ug(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.E(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.mg()},
An(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.d9().a.ce(o)),k=A.Q($.d9().a.ce(n)),j=A.Q($.d9().a.ce(m))
for(s=[$.j5.j(),$.j6.j(),$.fc.j(),$.h7.j(),$.j1.j()],r=0;r<5;++r)s[r].eb(o,l)
A.zI(o,l)
for(s=[$.j5.j(),$.j6.j(),$.fc.j(),$.h7.j(),$.j1.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.ug(n,k)
A.ug(m,j)},
xy(a,b){var s
A.Az(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
FK(a){var s,r
try{s=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
Am(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.iW[s]
q=$.d9().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.h(A.j("setting missing from profile: "+r)):q))}p=A.Q($.d9().a.ce("muted"))
o=A.Q($.d9().a.ce("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bl(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cZ(o)
for(q=[$.j5.j(),$.j6.j(),$.fc.j(),$.h7.j()],n=j.$ti.i("cx<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cx(j,j.r,j.e,n);m.m();){k=m.d
l.eb(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zK(){var s=$.bg
if(s!=null)A.Am(s)
A.An()},
FB(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aj(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.i.am(k,null)
if(!t.f.b(r)||!J.a8(r.h(0,"version"),1))A.h(B.ft)
q=A.yY(r.h(0,"requested"))
$.Au=A.wL(A.yY(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.FK(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.A[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.FN(p))}}$.Au=A.Dg(o,r)
A.vf()},
vf(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.i.ab($.d9().B(),null))}catch(s){}},
Az(a,b){var s,r,q,p,o,n,m
switch(A.rx(a).d.a){case 0:r=A.eO(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d9()
q=s
A.rx(a).cU(q)
p=t.N
o=t.K
n=A.fH(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dt(n,1)
n=s
A.rx(a).cU(n)
o=A.fH(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dt(o,1)
A.vf()}catch(m){if(!(A.ak(m) instanceof A.z))throw m}},
vb(a){var s=0,r=A.bh(t.H),q,p
var $async$vb=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.x9(A.E(a==null?null:a.tex),p,"")
q=$.aR
q=q==null?null:q.cK(p)
s=2
return A.ae(A.os(A.c([q==null?A.yk(t.H):q],t.iJ),t.H),$async$vb)
case 2:return A.be(null,r)}})
return A.bf($async$vb,r)},
Ak(){var s,r,q=v.G,p=A.f(A.a(q.window).innerWidth),o=A.f(A.a(q.window).innerHeight),n=$.y.j(),m=p>0?p:800
n.width=m
m=$.y.j()
n=o>0?o:600
m.height=n
s=A.E(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.f($.y.j().width)
s.height=A.f($.y.j().height)}q=$.er
if(q!=null)q.cT(A.f($.y.j().width),A.f($.y.j().height))
q=$.fd.j()
n=A.f($.y.j().width)
m=A.f($.y.j().height)
if(q.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
if(n<=0||m<=0)A.h(A.w("pixeldart surface size must be positive",null))
q.b.cT(n,m)
q=$.aR
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.y.j().setAttribute("data-renderer-surface",r)},
F7(){var s,r,q=$.bc
if(q!=null){s=$.ad.j()
if(!s.CW.bi("pause",s.f)){s=$.ad.j()
s=s.CW.bi("secondary",s.f)}else s=!0
if(s){A.EP(q)
return}if($.ad.j().f.a5(0,"GamepadDpadUp")){A.A9(q,-1)
return}if($.ad.j().f.a5(0,"GamepadDpadDown")){A.A9(q,1)
return}s=$.ad.j()
if(s.CW.bi("interact",s.f)){r=A.E(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.ps(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.bi("pause",s.f)){A.jd($.cm.j())
return}if($.at.j().y)return
s=$.ad.j()
if(s.CW.bi("journal",s.f))A.jg($.j3.j())
else{s=$.ad.j()
if(s.CW.bi("sleep",s.f))A.jg($.mf.j())}},
EP(a){if(a===$.cm.j()){a.a8()
return}if(a===$.h8.j()||a instanceof A.fU||a instanceof A.hH||a instanceof A.hw){A.dG(a)
return}a.a8()},
A9(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.f(l.length);++r){q=A.E(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.E(A.a(v.G.document).activeElement)
o=B.a.br(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.T(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
FJ(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.A2){$.xk=s
$.A2=!0}e=s
d=$.xk
if(typeof e!=="number")return e.ap()
r=(e-d)/1000
$.xk=s
e=r
if(typeof e!=="number")return e.e7()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.ht()
if(e>0.25)r=0.25
A.Gd(r)
$.ad.j().mr()
e=$.y.j()
d=$.ad.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ad.j().z
if(q!=null)$.y.j().setAttribute("data-controller-id",q)
else $.y.j().removeAttribute("data-controller-id")
A.F7()
if(!$.mq&&$.bc==null){e=$.ep
d=r
if(typeof d!=="number")return A.vG(d)
d=$.ep=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e7()
c=c<10}else c=!1
if(!c)break
$.xq=$.ev()
if(!$.xY()){d=$.U.b
if(d===$.U)A.h(A.a5(""))
d.k6(0.008333333333333333*($.cG().Q?1:20))
d=$.Bk()
c=$.U.b
if(c===$.U)A.h(A.a5(""))
c=c.gaa()
b=$.U.b
if(b===$.U)A.h(A.a5(""))
d=d.bV(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){o=d[a]
B.a.l($.d7,"clock:"+o.a)}d=$.Bl()
c=$.U.b
if(c===$.U)A.h(A.a5(""))
c=c.gaa()
b=$.U.b
if(b===$.U)A.h(A.a5(""))
d=d.bV(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){n=d[a]
B.a.l($.d7,"service:"+n.a+":"+n.b)}}A.Gg()
A.Gc()
d=$.aE.b
if(d===$.aE)A.h(A.a5(""))
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
d.mw(a1)}A.Gb()
A.Gf()
A.Ge()
A.Ga(0.008333333333333333)
if($.ue.b===$.ue)A.h(A.a5(""))
d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
m=d.a!==B.B
c=$.W.b
if(c===$.W)A.h(A.a5(""))
d.du(0.008333333333333333,c)
if(m){d=$.c6.b
if(d===$.c6)A.h(A.a5(""))
d=d.e}else d=!1
if(d)A.Al(!0)
d=$.ep-0.008333333333333333
$.ep=d
c=p
if(typeof c!=="number")return c.aj()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.xE=A.z8($.Bn(),$.ev(),l)
k=$.bg
if(k!=null){d=k
c=Math.sin($.cn)
b=Math.cos($.cn)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aL(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hz($.az)
for(e=$.d7.length,a=0;a<$.d7.length;$.d7.length===e||(0,A.u)($.d7),++a){j=$.d7[a]
A.ET(k,j)}B.a.N($.d7)
$.y.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.y.j().setAttribute("data-audio-muffle01",B.c.aM(k.glX(),3))
e=$.y.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.y.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.d6.j().h1($.wr(),$.cn,$.ff)
e=$.aR
if(e!=null){d=$.d6.j()
c=d.a
a3=new A.M(c.a,c.b,c.c)
c=d.b
a4=new A.M(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.yG(a3,a4,new A.M(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wE(a5,b,d.a,c)
e.p3=new A.fp(a6,a7,a7.aC(0,a6),a3,a4,c,b,a5)}e=$.aR
if(e!=null)e.hI($.W.j(),$.az)
e=$.aR
if(e!=null)e.hy($.W.j(),$.az,$.wr(),$.bb.j().gen(),$.bb.j().gl9(),$.x0.j().fP($.U.j().gaa().a),A.GW($.az),$.bb.j().b)
if($.A8!==$.c6.j().a){$.A8=$.c6.j().a
$.xt=$.xt+1}e=$.aR
if(e!=null){if($.xY())d=0
else{d=s
if(typeof d!=="number")return d.nb()
d/=1000}c=$.xt
b=A.f(Math.max(0,$.U.j().b))
if(!isFinite(d)||d<0)A.h(A.al(d,"timeSeconds",null))
if(b<0)A.h(A.w("frame clock seeds must be non-negative",null))
e.x1=d
e.x2=c
e.xr=b}e=$.aR
if(e!=null){d=$.c6.j()
c=$.xs
b=A.Ai($.az)
a8=d.a
a9=d.gej()
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
c3=B.c.aI(b3.G("post_quantization_bits"))
c4=b3.G("post_vhs_chroma")
c5=b3.G("post_vhs_noise")
c6=b3.G("shadow_ao_intensity")
c7=a8===B.a0?0.45:b4
b3=b3.aT("shadow_ssdo_enable")?c6:0
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
e.R8=new A.kD(c7,b5,b3,b9,b6,b7,c8,c9,b,b8,d0,d,d1,d2,d3,d4,d5,d6,d7,b2?b0:0,c)}$.fd.j().em(A.yT($.U.j().ghb()))
i=$.aR
if(i!=null){h=i.glA()
if(h!=null){$.y.j().setAttribute("data-renderer-frame-stats",h)
e=$.y.j()
d=i.glz()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.es("running")
A.FI()
e=$.ad.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.N(0)
e.f.N(0)
A.f(A.a(v.G.window).requestAnimationFrame(A.V(A.AO())))}catch(d8){g=A.ak(d8)
f=A.cF(d8)
A.vi(g,f)}},
ET(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h9("confirm")
$.bG.j().b3("interface confirmation")
break
case"ambient-winnow":a.cM("winnow",0.28)
$.bG.j().b3("wind moving through the house")
break
case"ambient-gate":a.cM("gate",0.22)
$.bG.j().b3("distant gate")
break
case"collapse":a.h9("collapse")
$.bG.j().b3("front door shudders and collapses")
break
case"clock:tick":A.mr(a,p,"tick")
break
case"clock:chime":A.mr(a,p,"chime")
break
case"clock:cuckoo":A.mr(a,p,"cuckoo")
break
case"clock:bell":A.mr(a,p,"bell")
break
default:if(B.b.S(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mr(a,q,s[2])}}}},
mr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.A3,g=$.ml
if(h==null||g==null)return
s=h.lo(b)
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
m=n.d.aj(0,s.d.aC(0,p))
l=$.mh
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.j("sound emitter "+s.a+" has no cue for "+c))
a.mq(q,m,s.e,o)
return}q=$.zQ
$.zQ=q+1
o=A.BE(B.dZ,r,r+":"+q,m,A.Ez(b,c),q,o)
q=$.az
q=A.BA($.wr(),q)
t.gG.a(B.bl)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.j("audio listener room missing: "+q))
j=l.hh(p,q,B.bl)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.j("audio cue family missing: "+q))
k=J.aG(i)
k=k.h(i,B.d.T(A.G2(q,o.f),k.gt(i)))
o=o.e
A.ah(j.a,t.N)
a.ha(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Ez(a,b){var s,r,q,p=$.U.j().b
for(s=new A.de(a+":"+b),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
p=A.AK(p,q==null?r.a(q):q)}return p},
Gd(a){var s=$.xd
if(s==null)return
s.textContent=""+B.c.aI(a>0?1/a:0)+" fps"},
Ga(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="interact"
if($.Aq||$.bc!=null){$.mA().a=new A.k(0,0,0)
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
f=new A.k(i*Math.cos($.cn)+j*Math.sin($.cn),0,-i*Math.sin($.cn)+j*Math.cos($.cn)).gaw().aC(0,2)
j=$.mA()
if(!isFinite(b1)||b1<0)A.h(A.al(b1,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.al(e,"rate","must be finite and positive"))
s=Math.exp(-e*b1)
l=j.a
s=l.aj(0,f.ap(0,l).aC(0,1-s))
j.a=s
d=$.j4.j().lY($.W.j(),$.az,$.ev(),s.aC(0,b1))
$.xw=d.a
if($.c6.j().a!==B.bD&&$.c6.j().a!==B.a0)$.az=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.Bm()
$.xx=s.hU($.xx,$.ev().b,b1)
b=s.k7(b1,c)
s=$.ev()
l=$.xx
$.d6.j().h1(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cn,$.ff)
s=$.U.j().z
a=new A.qn(s)
s=$.d6.j()
l=$.W.j()
a0=A.GV(a,s,$.az,l,$.ml)
l=a0.c
$.zD.j().hK(l)
a1=A.E(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=a9
a3=a9
a4=a9
switch(s.a){case 0:A.AU($.d6.j(),$.W.j(),$.az)
break
case 1:a2=A.AV($.d6.j(),$.W.j(),$.az)
break
case 2:a3=A.AW($.d6.j(),$.W.j(),$.az)
break
case 3:l=$.d6.j()
k=$.W.j()
j=$.ml
a4=A.AT(l,$.az,k,j)
break
case 4:case 5:break}$.zC.j().n_($.fk().e5($.U.j().gaa().a,"status"),$.az==="living-room")
l=$.ad.j()
k=l.CW
if(k.bi(b0,l.d)||k.bi(b0,l.f)){l=$.U.j().gaa()
k=a2==null
j=k?a9:a2.a
i=B.a.a4($.aE.j().fz(21),$.aE.j().glP())
if(l.a===21&&j==="front-door"&&i){s=$.c6.j()
$.W.j()
s.hY(B.eA,A.ah(s.c,t.N))
B.a.l($.d7,"collapse")
A.hf("the front door opens on itself")}else if(!k&&!a2.z&&!a2.ay){a2.ax=!a2.ax
s=$.bG.j()
s.b3(a2.ax?"door opens":"door closes")
s=$.aR
if(s!=null)s.cR($.W.j(),a2.b)
s=$.aR
if(s!=null)s.dQ($.W.j(),a2.a)
s=$.bg
if(s!=null)s.by()}else if(a3!=null)if(a3.w){s=$.U.j()
if(s.f.ei(1)){a3.w=!1
$.bG.j().b3("shutter closes")}}else{a3.w=!0
$.bG.j().b3("shutter opens")}else if(s===B.ck){a5=a.e4()
s=A.C(a5)
l=t.E4
a6=A.bw(new A.G(a5,s.i("l(1)").a(new A.vr(a0)),s.i("G<1>")),l)
if(a6==null)a6=A.bw(a5,l)
if(a6!=null)$.bG.j().bM("noticed",a6.d)}else if(a4!=null){s=$.wq()
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
a8=A.FD(a7)
s=$.bG.j()
s.bM("noticed",a8==null?"you inspect "+a7:a8)}}$.ue.j()
A.FP(b1,a0)},
FP(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.er
if(b9==null)return
s=A.a($.zE.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cp()
p.mZ(c0)
o=$.Bj()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hn(n,m,$.at.j().y)
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
c=$.U.j().gaa()
b=$.bb.j().b
a=$.cG()
a0=a.y===B.cq
a1=h==null?null:h.a
if(a1==null)a1=$.az
a=a.z?$.fk().e5($.U.j().gaa().a,"status"):null
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
A.aL(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aL(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aL(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.lj(n,q,r)}a2.li(q,r,new A.qc(j,i,g,f,e,d,p))
b0=r-80-24
a2.aY("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aP(b*60),0,1439)
b2=B.d.a7(b1,60)
b3=B.d.T(b1,60)
b4=a0?B.d.T(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.cL(B.d.q(b4),2,"0")+":"+B.b.cL(B.d.q(b3),2,"0")+b5,b0,42)
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
a7.restore()}a2.lh(l,q,r)
a2.lk(q,r,o)
a7.restore();++b9.b
p=$.y.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ah(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
FD(a){var s,r,q,p,o=$.U.j().z.b,n=A.o(o).i("K<1,2>"),m=A.H(new A.K(o,n),n.i("n.E"))
B.a.V(m,new A.vc())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fk().at
n===$&&A.q()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Gg(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cG().Q)return
if($.at.j().y||$.bc!=null||$.aE.j().r!=null)return
s=$.U.j().gaa()
for(r=$.aE.j().fz(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aE.b
if(m===$.aE)A.h(A.a5(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aE.b
if(r===$.aE)A.h(A.a5(""))
l=r.bW(n)
if(!(l instanceof A.lg))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.yw(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mA().a=new A.k(0,0,0)
r=$.at.b
if(r===$.at)A.h(A.a5(""))
q=n.a
r.ed(q,k)
$.cp().bt(!0,B.b5,q,k)
A.xo()
A.Ax(n)
return}},
Gc(){var s,r,q,p,o,n,m=$.x4
if(m==null)return
s=$.U.j().gaa()
for(r=m.bV(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
n=$.U.b
if(n===$.U)A.h(A.a5(""))
if(!n.ka(o))continue
n=$.y.b
if(n===$.y)A.h(A.a5(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
FQ(){var s,r,q=$.aE.j().r,p=q==null,o=p?null:q.gbj()
if(p||o==null)return
p=$.at.j()
s=q.a
r=s.a
p.ed(r,o)
$.cp().bt(!0,B.b5,r,o)
A.xo()
A.Ax(s)
if(q.d!==B.a5)A.xp()
A.hf("restored visitor")},
Ax(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.U.j().lB("stranger-17-eileen-case")
r=$.fk().x
r===$&&A.q()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.bw(r,t.N)
if(s==null||p==null)return
$.bG.j().bM("inside the case",p+" \u201c"+s.d+"\u201d")},
Gb(){var s,r,q,p,o,n
if(!$.cG().Q)return
s=$.U.j().gaa()
r=$.mc.j().lm(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.mc.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bG.j().bM(o,q.e)
n=A.Gl(p)
if(n!=null)B.a.l($.d7,"ambient-"+n)},
Gf(){var s,r,q,p,o=$.U.j().gaa()
if(o.b<20)return
s=o.a
if(!$.vq.l(0,s))return
r=$.fk().f
r===$&&A.q()
q=r.h(0,B.d.q(s))
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.GS(r,$.U.j().b,s)
if(p!=null)$.bG.j().bM("noticed",p)},
Al(a){var s,r,q,p,o
if($.xb!=null)return
s=$.U.j().gaa()
r=$.U.j().r.c
q=$.U.j().e.b
p=A.o(q).i("am<2>")
o=A.Cb(new A.o9(s.a,1-r,new A.G(new A.am(q,p),p.i("l(n.E)").a(new A.vj()),p.i("G<n.E>")).gt(0),$.U.j().r.d,a))
if(o==null)return
A.Ag(o)
A.mt("ending recorded")},
Ag(a){var s,r,q
$.xb=a
$.Aq=!0
$.mA().a=new A.k(0,0,0)
A.jd($.j0.j())
s=a.a
r=$.fk().w
r===$&&A.q()
q=r.h(0,s.b)
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
r=A.H(r,t.N)
B.a.M(r,A.CM($.U.j().z,s))
$.j0.j().hN(a,r)},
EH(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cd
break A}if("through-door"===a){s=B.ce
break A}if("letterbox"===a){s=B.cf
break A}s=B.ab
break A}r=$.aE.j().ku(s)
if(s===B.aw){q=$.W.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aR
if(p!=null)p.cR($.W.j(),q.b)
p=$.aR
if(p!=null)p.dQ($.W.j(),q.a)
p=$.bg
if(p!=null)p.by()}}if(!(r instanceof A.le)||s===B.ab){A.uJ()
return}if(r.a.gbj()==null){A.x8()
A.uJ()
return}A.xp()},
EO(){var s=$.aE.j().k8()
if(!(s instanceof A.iq)||s.b){A.x8()
A.uJ()
return}if(s.a.gbj()==null){A.x8()
A.uJ()
return}A.xp()},
xp(){var s,r,q,p,o,n,m,l,k,j=$.aE.j().r,i=j==null,h=i?null:j.gbj()
if(i||h==null)return
s=$.aE.j().gc_()
if(s==null){$.at.j().hM(h)
$.cp().bt(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.at.j().ee(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.at.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aP(k.a,k.b))}m.hO(l,r)
o=$.cp()
m=j.a.a
o.bt(!0,i?q:B.m,m,h)
if(!i){i=A.C(p)
k=A.bw(new A.G(p,i.i("l(1)").a(new A.vg(r)),i.i("G<1>")),t.Y)
if(k!=null){i=$.at.j()
q=k.c
i.ef(h,q)
o.bt(!0,B.m,m,h+"\n\n"+q)}}}A.Aw()
A.xo()},
xo(){var s,r=$.aE.j().r,q=r==null,p=q?null:r.gbj(),o=$.bg
if(q||p==null||o==null)return
q=r.a
s="vo-"+q.a+"-day"+B.b.cL(B.d.q(q.b),2,"0")+"-"+r.b.b+"-"+(r.f+1)
if($.xj===s)return
$.xj=s
o.cM(s,1)},
EI(a){var s,r,q,p,o,n=$.aE.j().kv(a)
if(!(n instanceof A.lf))return
s=n.c
if(!$.U.j().kb(n.b,s))return
r=s.c
s=$.at.j()
q=n.a
p=q.gbj()
s.ef(p==null?"":p,r)
o=q.gbj()
if(o==null)o=""
$.cp().bt(!0,B.m,q.a.a,o+"\n\n"+r)
A.Aw()
A.mt("saved after visitor answer")},
uJ(){$.at.j().fX()
$.cp().N(0)
$.xj=null
$.ad.j().cS($.y.j())},
Aw(){var s,r,q,p,o=$.at.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.me.j().e6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aP(p.a,B.a.gZ(p.c).q(0)))}o.hL(n,m)},
EJ(a){var s,r,q,p=$.aE.j().kw(a,!0,$.me.j())
if(p==null)return
s=$.me.j().l7(p,B.io)
r=$.at.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.q()
r.textContent=B.H.bE("",!0,q)},
x8(){var s,r=$.W.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aR
if(s!=null)s.cR($.W.j(),r.b)
s=$.aR
if(s!=null)s.dQ($.W.j(),r.a)
s=$.bg
if(s!=null)s.by()}},
Ge(){var s,r,q,p,o,n,m,l,k
for(s=$.W.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.a+":",n=p.r,m=0;!1;++m){if(!(m<0))return A.d(n,m)
l=n[m]
if(l.gkk()){l.scJ(!1)
continue}k=$.c6.b
if(k===$.c6)A.h(A.a5(""))
if(B.a.p(k.d,o+m)){l.scJ(!1)
continue}}}},
GW(a){var s,r,q,p,o,n,m,l=$.W.j().e.h(0,a)
if(l==null||$.bb.j().gen()===0)return!1
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
Ai(a){var s,r=$.W.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.j8
if(q.length===0)return 0.12
s=A.C(q)
return B.c.D(new A.G(q,s.i("l(1)").a(new A.vh()),s.i("G<1>")).gt(0)/q.length,0.12,1)},
h1:function h1(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.lv=$
_.fM=null
_.fN=0},
u0:function u0(a){this.a=a},
u1:function u1(a){this.a=a},
u2:function u2(a){this.a=a},
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
tV:function tV(){},
tW:function tW(){},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tU:function tU(){},
lQ:function lQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tv:function tv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
us:function us(){},
ut:function ut(){},
uu:function uu(){},
uA:function uA(){},
uB:function uB(){},
uC:function uC(){},
uD:function uD(){},
uE:function uE(){},
uF:function uF(a){this.a=a},
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
uv:function uv(a){this.a=a},
uw:function uw(){},
ux:function ux(){},
uy:function uy(){},
uz:function uz(){},
up:function up(){},
uq:function uq(){},
ur:function ur(){},
ul:function ul(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
v8:function v8(a,b){this.a=a
this.b=b},
v6:function v6(a){this.a=a},
v7:function v7(a){this.a=a},
vL:function vL(a,b){this.a=a
this.b=b},
vM:function vM(){},
vN:function vN(){},
vY:function vY(){},
w6:function w6(){},
w7:function w7(){},
w8:function w8(){},
w9:function w9(){},
wa:function wa(){},
wb:function wb(){},
wc:function wc(){},
vO:function vO(){},
vP:function vP(){},
vQ:function vQ(){},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vU:function vU(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vZ:function vZ(){},
w_:function w_(){},
w0:function w0(){},
w1:function w1(){},
w2:function w2(){},
w3:function w3(){},
w4:function w4(){},
w5:function w5(){},
v9:function v9(){},
va:function va(){},
ve:function ve(a){this.a=a},
vn:function vn(a){this.a=a},
vr:function vr(a){this.a=a},
vc:function vc(){},
vj:function vj(){},
vg:function vg(a){this.a=a},
vh:function vh(){},
AY(a){return v.mangledGlobalNames[a]},
yw(a,b,c,d,e,f){var s=a[b]()
return s},
ps(a,b,c){var s=null
return c.a(A.yw(a,b,s,s,s,s))},
wh(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.al(b.glJ(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.a9()
o=q*16
n=o+16
B.t.d_(s,o,n,p.a)
if(l)B.t.d_(r,o,n,p.dM().a)}m=a.a
A.t(m,"uInstanceModels",new A.x(B.dO,s))
if(l)A.t(m,"uInstanceNormalMatrices",new A.x(B.dO,r))
A.t(m,"uUseInstances",B.dP)},
BZ(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
BY(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
AK(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Gl(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
GA(a){var s,r,q,p,o,n,m,l=B.i.am(a,null),k=t.f
if(!k.b(l))throw A.b(B.h7)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.jf[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aN(m,s,r))
else throw A.b(A.S('text.json section "'+n+'" must be an object',null,null))}return p},
GS(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbb(a)
s=new A.ei()
s.bO((b^274953^c)>>>0)
r=s.aS(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wy.prototype={}
J.kc.prototype={
a6(a,b){return a===b},
gP(a){return A.i6(a)},
q(a){return"Instance of '"+A.kG(a)+"'"},
ga3(a){return A.d8(A.xg(this))}}
J.ke.prototype={
q(a){return String(a)},
gP(a){return a?519018:218159},
ga3(a){return A.d8(t.y)},
$iai:1,
$il:1}
J.hK.prototype={
a6(a,b){return null==b},
q(a){return"null"},
gP(a){return 0},
$iai:1,
$iar:1}
J.hN.prototype={$iaf:1}
J.e3.prototype={
gP(a){return 0},
ga3(a){return B.ma},
q(a){return String(a)}}
J.kA.prototype={}
J.eZ.prototype={}
J.e2.prototype={
q(a){var s=a[$.B0()]
if(s==null)s=a[$.wn()]
if(s==null)return this.i_(a)
return"JavaScript function for "+J.da(s)},
$ieF:1}
J.hM.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.hO.prototype={
gP(a){return 0},
q(a){return String(a)}}
J.r.prototype={
cC(a,b){return new A.aV(a,A.C(a).i("@<1>").K(b).i("aV<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.bS(a,29)
a.push(b)},
mz(a,b){var s
a.$flags&1&&A.bS(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yQ(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bS(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
M(a,b){var s
A.C(a).i("n<1>").a(b)
a.$flags&1&&A.bS(a,"addAll",2)
if(Array.isArray(b)){this.ip(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gn())},
ip(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.au(a))
for(r=0;r<s;++r)a.push(b[r])},
N(a){a.$flags&1&&A.bS(a,"clear","clear")
a.length=0},
ca(a,b,c){var s=A.C(a)
return new A.I(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("I<1,2>"))},
Y(a,b){var s,r=A.e4(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.v(a[s]))
return r.join(b)},
bq(a,b,c,d){var s,r,q
d.a(b)
A.C(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.au(a))}return r},
b_(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.au(a))}if(c!=null)return c.$0()
throw A.b(A.cw())},
ah(a,b){return this.b_(a,b,null)},
a2(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aU(a,b,c){var s=a.length
if(b>s)throw A.b(A.aZ(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aZ(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cw())},
gZ(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cw())},
gbb(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cw())
throw A.b(A.yr())},
L(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.au(a))}return!1},
a4(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.au(a))}return!0},
V(a,b){var s,r,q,p,o,n=A.C(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bS(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Fg()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ht()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hj(b,2))
if(p>0)this.jC(a,p)},
W(a){return this.V(a,null)},
jC(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d0(a,b){var s,r,q,p
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
q(a){return A.wx(a,"[","]")},
gu(a){return new J.ew(a,a.length,A.C(a).i("ew<1>"))},
gP(a){return A.i6(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bS(a,"set length","change the length of")
if(b<0)throw A.b(A.aZ(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.vB(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.bS(a)
if(!(b>=0&&b<a.length))throw A.b(A.vB(a,b))
a[b]=c},
e1(a,b){return new A.dz(a,b.i("dz<0>"))},
dI(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.d8(A.C(a))},
$iR:1,
$in:1,
$iF:1}
J.kd.prototype={
mY(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pt.prototype={}
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
return s+0}throw A.b(A.bq(""+a+".toInt()"))},
fC(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bq(""+a+".ceil()"))},
aP(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bq(""+a+".floor()"))},
aI(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bq(""+a+".round()"))},
D(a,b,c){if(this.H(b,c)>0)throw A.b(A.xG(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
aM(a,b){var s
if(b>20)throw A.b(A.aZ(b,0,20,"fractionDigits",null))
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
T(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a7(a,b){return(a|0)===a?a/b|0:this.jN(a,b)},
jN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bq("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
dt(a,b){var s
if(a>0)s=this.fg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jL(a,b){if(0>b)throw A.b(A.xG(b))
return this.fg(a,b)},
fg(a,b){return b>31?0:a>>>b},
ga3(a){return A.d8(t.o)},
$ib4:1,
$iB:1,
$ibj:1}
J.hJ.prototype={
ga3(a){return A.d8(t.S)},
$iai:1,
$ii:1}
J.kf.prototype={
ga3(a){return A.d8(t.i)},
$iai:1}
J.e1.prototype={
fw(a,b){return new A.m2(b,a,0)},
dG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aN(a,r-s)},
hW(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hL){s=b.e
s=!(s==null?b.e=b.iI():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iQ(a,b)}},
bJ(a,b,c,d){var s=A.kL(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iQ(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Bt(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gek()
n=p.gdF()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.I(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aN(a,r))
return m},
ae(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ae(a,b,0)},
I(a,b,c){return a.substring(b,A.kL(b,c,a.length))},
aN(a,b){return this.I(a,b,null)},
ba(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.CE(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.CF(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aC(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ew)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cL(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aC(c,s)+a},
cG(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
br(a,b){return this.cG(a,b,0)},
p(a,b){return A.H1(a,b,0)},
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
$iqg:1,
$ie:1}
A.ef.prototype={
gu(a){return new A.hr(J.O(this.gb4()),A.o(this).i("hr<1,2>"))},
gt(a){return J.cH(this.gb4())},
gO(a){return J.mC(this.gb4())},
gX(a){return J.Bw(this.gb4())},
a2(a,b){return A.o(this).y[1].a(J.mB(this.gb4(),b))},
gU(a){return A.o(this).y[1].a(J.y3(this.gb4()))},
p(a,b){return J.y2(this.gb4(),b)},
q(a){return J.da(this.gb4())}}
A.hr.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia9:1}
A.ez.prototype={
gb4(){return this.a}}
A.iy.prototype={$iR:1}
A.iw.prototype={
h(a,b){return this.$ti.y[1].a(J.aT(this.a,b))},
k(a,b,c){var s=this.$ti
J.bk(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.Bx(this.a,b)},
l(a,b){var s=this.$ti
J.jl(this.a,s.c.a(s.y[1].a(b)))},
$iR:1,
$iF:1}
A.aV.prototype={
cC(a,b){return new A.aV(this.a,this.$ti.i("@<1>").K(b).i("aV<1,2>"))},
gb4(){return this.a}}
A.fG.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.de.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.r_.prototype={
gE(){return 0}}
A.R.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.aC(s,s.gt(s),A.o(s).i("aC<a1.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cw())
return this.a2(0,0)},
p(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a8(r.a2(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.au(r))}return!1},
a4(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a2(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.au(q))}return!0},
L(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
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
cW(a,b){return this.hZ(0,A.o(this).i("l(a1.E)").a(b))},
ca(a,b,c){var s=A.o(this)
return new A.I(this,s.K(c).i("1(a1.E)").a(b),s.i("@<a1.E>").K(c).i("I<1,2>"))},
bL(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.H(this,s)
else{s=A.H(this,s)
s.$flags=1
s=s}return s},
bK(a){return this.bL(0,!0)},
b9(a){var s,r=this,q=A.wB(A.o(r).i("a1.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a2(0,s))
return q}}
A.il.prototype={
giU(){var s=J.cH(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjM(){var s=J.cH(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cH(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a2(a,b){var s=this,r=s.gjM()+b
if(b<0||r>=s.giU())throw A.b(A.pj(b,s.gt(0),s,"index"))
return J.mB(s.a,r)},
bL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aG(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.yu(0,n):J.yt(0,n)}r=A.e4(s,m.a2(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a2(n,o+q))
if(m.gt(n)<l)throw A.b(A.au(p))}return r},
bK(a){return this.bL(0,!0)}}
A.aC.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aG(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a2(q,s);++r.c
return!0},
$ia9:1}
A.cy.prototype={
gu(a){return new A.hT(J.O(this.a),this.b,A.o(this).i("hT<1,2>"))},
gt(a){return J.cH(this.a)},
gO(a){return J.mC(this.a)},
gU(a){return this.b.$1(J.y3(this.a))},
a2(a,b){return this.b.$1(J.mB(this.a,b))}}
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
a2(a,b){return this.b.$1(J.mB(this.a,b))}}
A.G.prototype={
gu(a){return new A.T(J.O(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
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
gu(a){return new A.is(J.O(this.a),this.$ti.i("is<1>"))}}
A.is.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia9:1}
A.av.prototype={
st(a,b){throw A.b(A.bq("Cannot change the length of a fixed-length list"))},
l(a,b){A.c9(a).i("av.E").a(b)
throw A.b(A.bq("Cannot add to a fixed-length list"))}}
A.eb.prototype={
k(a,b,c){A.o(this).i("eb.E").a(c)
throw A.b(A.bq("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.bq("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("eb.E").a(b)
throw A.b(A.bq("Cannot add to an unmodifiable list"))}}
A.fY.prototype={}
A.eS.prototype={
gt(a){return J.cH(this.a)},
a2(a,b){var s=this.a,r=J.aG(s)
return r.a2(s,r.gt(s)-1-b)}}
A.iZ.prototype={}
A.aP.prototype={$r:"+(1,2)",$s:1}
A.fb.prototype={$r:"+height,width(1,2)",$s:2}
A.iK.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iL.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.hu.prototype={}
A.ft.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
q(a){return A.wC(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.BR()},
gJ(){return new A.bR(this.ls(),A.o(this).i("bR<N<1,2>>"))},
ls(){var s=this
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
this.av(0,new A.nK(this,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),s))
return s},
$iZ:1}
A.nK.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
geW(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
av(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geW()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga_(){return new A.f7(this.geW(),this.$ti.i("f7<1>"))},
gaB(){return new A.f7(this.b,this.$ti.i("f7<2>"))}}
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
A.AF(s.a,r)
s.$map=r}return r},
R(a){return this.bx().R(a)},
h(a,b){return this.bx().h(0,b)},
av(a,b){this.$ti.i("~(1,2)").a(b)
this.bx().av(0,b)},
ga_(){var s=this.bx()
return new A.ac(s,A.o(s).i("ac<1>"))},
gaB(){var s=this.bx()
return new A.am(s,A.o(s).i("am<2>"))},
gt(a){return this.bx().a}}
A.hv.prototype={
l(a,b){A.o(this).c.a(b)
A.BS()}}
A.aM.prototype={
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
b9(a){return A.fI(this,this.$ti.c)}}
A.qw.prototype={
$0(){return B.c.aP(1000*this.a.now())},
$S:29}
A.ic.prototype={}
A.rZ.prototype={
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
q(a){return"Null check operator used on a null value"}}
A.kg.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l8.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.q9.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hA.prototype={}
A.iN.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icX:1}
A.dU.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.AZ(r==null?"unknown":r)+"'"},
ga3(a){var s=A.xI(this)
return A.d8(s==null?A.c9(this):s)},
$ieF:1,
gna(){return this},
$C:"$1",
$R:1,
$D:null}
A.jC.prototype={$C:"$0",$R:0}
A.jD.prototype={$C:"$2",$R:2}
A.l4.prototype={}
A.l0.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.AZ(s)+"'"}}
A.fm.prototype={
a6(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fm))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.mz(this.a)^A.i6(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kG(this.a)+"'")}}
A.kP.prototype={
q(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.ac(this,A.o(this).i("ac<1>"))},
gaB(){return new A.am(this,A.o(this).i("am<2>"))},
gJ(){return new A.K(this,A.o(this).i("K<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lK(a)},
lK(a){var s=this.d
if(s==null)return!1
return this.c6(this.eT(s,a),a)>=0},
M(a,b){A.o(this).i("Z<1,2>").a(b).av(0,new A.pC(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lL(b)},
lL(a){var s,r,q=this.d
if(q==null)return null
s=this.eT(q,a)
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eq(s==null?q.b=q.dn():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eq(r==null?q.c=q.dn():r,b,c)}else q.lN(b,c)},
lN(a,b){var s,r,q,p,o=this,n=A.o(o)
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
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.im(this.c,b)
else return this.lM(b)},
lM(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cH(a)
r=n[s]
q=o.c6(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eo(p)
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
eq(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dq(b,c)
else s.b=c},
im(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eo(s)
delete a[b]
return s.b},
d2(){this.r=this.r+1&1073741823},
dq(a,b){var s=this,r=A.o(s),q=new A.pM(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d2()
return q},
eo(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d2()},
cH(a){return J.aB(a)&1073741823},
eT(a,b){return a[this.cH(b)]},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
q(a){return A.wC(this)},
dn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwA:1}
A.pC.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pM.prototype={}
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
cH(a){return A.Gv(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.vH.prototype={
$1(a){return this.a(a)},
$S:15}
A.vI.prototype={
$2(a,b){return this.a(a,b)},
$S:125}
A.vJ.prototype={
$1(a){return this.a(A.p(a))},
$S:38}
A.bQ.prototype={
ga3(a){return A.d8(this.eU())},
eU(){return A.GF(this.$r,this.di())},
q(a){return this.fn(!1)},
fn(a){var s,r,q,p,o,n=this.iY(),m=this.di(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.yN(o):l+A.v(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iY(){var s,r=this.$s
while($.u3.length<=r)B.a.l($.u3,null)
s=$.u3[r]
if(s==null){s=this.iH()
B.a.k($.u3,r,s)}return s},
iH(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ys(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ah(j,k)}}
A.ej.prototype={
di(){return[this.a,this.b]},
a6(a,b){if(b==null)return!1
return b instanceof A.ej&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gP(a){return A.cT(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ek.prototype={
di(){return[this.a,this.b,this.c]},
a6(a,b){var s=this
if(b==null)return!1
return b instanceof A.ek&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gP(a){var s=this
return A.cT(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.hL.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjc(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.yy(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iI(){var s,r=this.a
if(!B.b.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fw(a,b){return new A.lr(this,b,0)},
iX(a,b){var s,r=this.gjc()
if(r==null)r=A.fe(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lM(s)},
$iqg:1,
$iD4:1}
A.lM.prototype={
gek(){return this.b.index},
gdF(){var s=this.b
return s.index+s[0].length},
$ifK:1,
$ii7:1}
A.lr.prototype={
gu(a){return new A.ls(this.a,this.b,this.c)}}
A.ls.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iX(l,s)
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
A.ik.prototype={
gdF(){return this.a+this.c.length},
$ifK:1,
gek(){return this.a}}
A.m2.prototype={
gu(a){return new A.m3(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ik(r,s)
throw A.b(A.cw())}}
A.m3.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ik(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia9:1}
A.tw.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a5(""))
return s}}
A.fM.prototype={
ga3(a){return B.m3},
$iai:1}
A.fL.prototype={$ifL:1}
A.hZ.prototype={
j6(a,b,c,d){var s=A.aZ(b,0,c,d,null)
throw A.b(s)},
ey(a,b,c,d){if(b>>>0!==b||b>c)this.j6(a,b,c,d)}}
A.kp.prototype={
ga3(a){return B.m4},
$iai:1}
A.b5.prototype={
gt(a){return a.length},
fd(a,b,c,d,e){var s,r,q=a.length
this.ey(a,b,q,"start")
this.ey(a,c,q,"end")
if(b>c)throw A.b(A.aZ(b,0,c,null,null))
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
k(a,b,c){A.bu(c)
a.$flags&2&&A.bS(a)
A.dF(b,a,a.length)
a[b]=c},
d_(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bS(a,5)
this.fd(a,b,c,d,0)
return},
$iR:1,
$in:1,
$iF:1}
A.hY.prototype={
k(a,b,c){A.f(c)
a.$flags&2&&A.bS(a)
A.dF(b,a,a.length)
a[b]=c},
hG(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bS(a,5)
this.fd(a,b,c,d,e)
return},
$iR:1,
$in:1,
$iF:1}
A.hW.prototype={
ga3(a){return B.m5},
aU(a,b,c){return new Float32Array(a.subarray(b,A.EF(b,c,a.length)))},
$iai:1,
$ioj:1}
A.kq.prototype={
ga3(a){return B.m6},
$iai:1}
A.kr.prototype={
ga3(a){return B.m7},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1}
A.ks.prototype={
ga3(a){return B.m8},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1}
A.kt.prototype={
ga3(a){return B.m9},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1}
A.ku.prototype={
ga3(a){return B.mc},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1,
$iwO:1}
A.kv.prototype={
ga3(a){return B.md},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1}
A.eM.prototype={
ga3(a){return B.me},
gt(a){return a.length},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1,
$ieM:1}
A.i_.prototype={
ga3(a){return B.mf},
gt(a){return a.length},
h(a,b){A.dF(b,a,a.length)
return a[b]},
$iai:1,
$iim:1}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.cB.prototype={
i(a){return A.iR(v.typeUniverse,this,a)},
K(a){return A.zt(v.typeUniverse,this,a)}}
A.lF.prototype={}
A.m6.prototype={
q(a){return A.bH(this.a,null)}}
A.lD.prototype={
q(a){return this.a}}
A.h4.prototype={$idw:1}
A.ts.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.tr.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:108}
A.tt.prototype={
$0(){this.a.$0()},
$S:14}
A.tu.prototype={
$0(){this.a.$0()},
$S:14}
A.u6.prototype={
il(a,b){if(self.setTimeout!=null)self.setTimeout(A.hj(new A.u7(this,b),0),a)
else throw A.b(A.bq("`setTimeout()` not found."))}}
A.u7.prototype={
$0(){this.b.$0()},
$S:0}
A.lt.prototype={
dv(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d5(a)
else{s=r.a
if(q.i("bU<1>").b(a))s.ew(a)
else s.co(a)}},
dw(a,b){var s=this.a
if(this.b)s.bn(new A.b2(a,b))
else s.cm(new A.b2(a,b))}}
A.uh.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.ui.prototype={
$2(a,b){this.a.$2(1,new A.hA(a,t.l.a(b)))},
$S:62}
A.vv.prototype={
$2(a,b){this.a(A.f(a),b)},
$S:71}
A.c5.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jF(a,b){var s,r,q
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
o.d=null}q=o.jF(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.zn
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
o.a=A.zn
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.j("sync*"))}return!1},
nd(a){var s,r,q=this
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
A.or.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eE(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cF(p)
l=r
o=q
n=A.xh(l,o)
l=new A.b2(l,o)
m.b.bn(l)
return}m.b.eE(s)}},
$S:0}
A.ou.prototype={
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
A.ot.prototype={
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
J.jl(q,l)}k.c.co(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bn(new A.b2(q,o))}},
$S(){return this.d.i("ar(0)")}}
A.lx.prototype={
dw(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.cm(A.Ff(a,b))},
fD(a){return this.dw(a,null)}}
A.iu.prototype={
dv(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.d5(r.i("1/").a(a))}}
A.dA.prototype={
lW(a){if((this.c&15)!==6)return!0
return this.b.b.dX(t.bl.a(this.d),a.a,t.y,t.K)},
lC(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mU(q,m,a.b,o,n,t.l)
else p=l.dX(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
dY(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ap
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.al(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.Aj(b,s)}r=new A.as(s,c.i("as<0>"))
this.cl(new A.dA(r,3,a,b,q.i("@<1>").K(c).i("dA<1,2>")))
return r},
fl(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.as($.ap,c.i("as<0>"))
this.cl(new A.dA(s,19,a,b,r.i("@<1>").K(c).i("dA<1,2>")))
return s},
jI(a){this.a=this.a&1|16
this.c=a},
cn(a){this.a=a.a&30|this.a&1
this.c=a.c},
cl(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cl(a)
return}r.cn(s)}A.ms(null,null,r.b,t.O.a(new A.tz(r,a)))}},
f4(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f4(a)
return}m.cn(n)}l.a=m.cv(a)
A.ms(null,null,m.b,t.O.a(new A.tE(l,m)))}},
bT(){var s=t.F.a(this.c)
this.c=null
return this.cv(s)},
cv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eE(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bU<1>").b(a))A.tC(a,r,!0)
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
iG(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bT()
q.cn(a)
A.f5(q,r)},
bn(a){var s=this.bT()
this.jI(a)
A.f5(this,s)},
d5(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bU<1>").b(a)){this.ew(a)
return}this.ir(a)},
ir(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ms(null,null,s.b,t.O.a(new A.tB(s,a)))},
ew(a){A.tC(this.$ti.i("bU<1>").a(a),this,!1)
return},
cm(a){this.a^=2
A.ms(null,null,this.b,t.O.a(new A.tA(this,a)))},
$ibU:1}
A.tz.prototype={
$0(){A.f5(this.a,this.b)},
$S:0}
A.tE.prototype={
$0(){A.f5(this.b,this.a.a)},
$S:0}
A.tD.prototype={
$0(){A.tC(this.a.a,this.b,!0)},
$S:0}
A.tB.prototype={
$0(){this.a.co(this.b)},
$S:0}
A.tA.prototype={
$0(){this.a.bn(this.b)},
$S:0}
A.tH.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mT(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cF(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mT(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.dY(new A.tI(l,m),new A.tJ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tI.prototype={
$1(a){this.a.iG(this.b)},
$S:22}
A.tJ.prototype={
$2(a,b){A.fe(a)
t.l.a(b)
this.a.bn(new A.b2(a,b))},
$S:73}
A.tG.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dX(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cF(l)
q=s
p=r
if(p==null)p=A.mT(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.tF.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lW(s)&&p.a.e!=null){p.c=p.a.lC(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cF(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mT(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lu.prototype={}
A.m1.prototype={}
A.iY.prototype={$izh:1}
A.lV.prototype={
mV(a){var s,r,q
t.O.a(a)
try{if(B.x===$.ap){a.$0()
return}A.Ao(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cF(q)
A.xu(A.fe(s),t.l.a(r))}},
fB(a){return new A.u4(this,t.O.a(a))},
mT(a,b){b.i("0()").a(a)
if($.ap===B.x)return a.$0()
return A.Ao(null,null,this,a,b)},
dX(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ap===B.x)return a.$1(b)
return A.FU(null,null,this,a,b,c,d)},
mU(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ap===B.x)return a.$2(b,c)
return A.FT(null,null,this,a,b,c,d,e,f)},
hd(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.u4.prototype={
$0(){return this.a.mV(this.b)},
$S:0}
A.vk.prototype={
$0(){A.Cg(this.a,this.b)},
$S:0}
A.iz.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.f6(this,this.$ti.i("f6<1>"))},
gaB(){var s=this.$ti
return A.kl(new A.f6(this,s.i("f6<1>")),new A.tL(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iM(a)},
iM(a){var s=this.d
if(s==null)return!1
return this.bo(this.eD(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.zj(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.zj(q,b)
return r}else return this.j0(b)},
j0(a){var s,r,q=this.d
if(q==null)return null
s=this.eD(q,a)
r=this.bo(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eB(s==null?m.b=A.wS():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eB(r==null?m.c=A.wS():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wS()
p=A.mz(b)&1073741823
o=q[p]
if(o==null){A.wT(q,p,[b,c]);++m.a
m.e=null}else{n=m.bo(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
av(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eC()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.au(m))}},
eC(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
eB(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wT(a,b,c)},
eD(a,b){return a[A.mz(b)&1073741823]}}
A.tL.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iB.prototype={
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
return new A.iA(s,s.eC(),this.$ti.i("iA<1>"))},
p(a,b){return this.a.R(b)}}
A.iA.prototype={
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
f1(){return new A.ck(A.o(this).i("ck<1>"))},
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
return t.Af.a(r[b])!=null}else return this.iL(b)},
iL(a){var s=this.d
if(s==null)return!1
return this.bo(s[this.d9(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.j("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eA(s==null?q.b=A.wU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eA(r==null?q.c=A.wU():r,b)}else return q.io(b)},
io(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wU()
r=p.d9(a)
q=s[r]
if(q==null)s[r]=[p.d8(a)]
else{if(p.bo(q,a)>=0)return!1
q.push(p.d8(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f5(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f5(s.c,b)
else return s.jB(b)},
jB(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d9(a)
r=n[s]
q=o.bo(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fp(p)
return!0},
iZ(a,b){var s,r,q,p,o,n=this,m=A.o(n)
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
s.dm()}},
eA(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d8(b)
return!0},
f5(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fp(s)
delete a[b]
return!0},
dm(){this.r=this.r+1&1073741823},
d8(a){var s,r=this,q=new A.lL(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dm()
return q},
fp(a){var s=this,r=a.c,q=a.b
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
$iyE:1}
A.lL.prototype={}
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
A.pN.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:98}
A.Y.prototype={
gu(a){return new A.aC(a,this.gt(a),A.c9(a).i("aC<Y.E>"))},
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
s=A.wM("",a,b)
return s.charCodeAt(0)==0?s:s},
e1(a,b){return new A.dz(a,b.i("dz<0>"))},
ca(a,b,c){var s=A.c9(a)
return new A.I(a,s.K(c).i("1(Y.E)").a(b),s.i("@<Y.E>").K(c).i("I<1,2>"))},
l(a,b){var s
A.c9(a).i("Y.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cC(a,b){return new A.aV(a,A.c9(a).i("@<Y.E>").K(b).i("aV<1,2>"))},
lw(a,b,c,d){var s
A.c9(a).i("Y.E?").a(d)
A.kL(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
q(a){return A.wx(a,"[","]")},
$iR:1,
$in:1,
$iF:1}
A.a7.prototype={
av(a,b){var s,r,q,p=A.o(this)
p.i("~(a7.K,a7.V)").a(b)
for(s=this.ga_(),s=s.gu(s),p=p.i("a7.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga_().ca(0,new A.pP(this),A.o(this).i("N<a7.K,a7.V>"))},
bG(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("N<1,2>(a7.K,a7.V)").a(b)
s=A.m(c,d)
for(r=this.ga_(),r=r.gu(r),n=n.i("a7.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
k0(a){var s,r
for(s=J.O(A.o(this).i("n<N<a7.K,a7.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga_().p(0,a)},
gt(a){var s=this.ga_()
return s.gt(s)},
gO(a){var s=this.ga_()
return s.gO(s)},
gX(a){var s=this.ga_()
return s.gX(s)},
gaB(){return new A.iC(this,A.o(this).i("iC<a7.K,a7.V>"))},
q(a){return A.wC(this)},
$iZ:1}
A.pP.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a7.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a7.V").a(s)
return new A.N(a,s,r.i("N<a7.K,a7.V>"))},
$S(){return A.o(this.a).i("N<a7.K,a7.V>(a7.K)")}}
A.pQ.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.v(a)
r.a=(r.a+=s)+": "
s=A.v(b)
r.a+=s},
$S:47}
A.iC.prototype={
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
return new A.iD(r.gu(r),s,this.$ti.i("iD<1,2>"))}}
A.iD.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.iS.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bq("Cannot modify unmodifiable map"))}}
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
ga_(){return this.a.ga_()},
q(a){return this.a.q(0)},
gaB(){return this.a.gaB()},
gJ(){return this.a.gJ()},
bG(a,b,c,d){return this.a.bG(0,A.o(this).K(c).K(d).i("N<1,2>(3,4)").a(b),c,d)},
$iZ:1}
A.ec.prototype={}
A.ds.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
M(a,b){var s
for(s=J.O(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bp(a){var s,r,q=this.b9(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.p(0,r))q.a5(0,r)}return q},
q(a){return A.wx(this,"{","}")},
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
A.kK(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.pj(b,b-r,this,"index"))},
$iR:1,
$in:1,
$ie9:1}
A.iM.prototype={
bp(a){var s,r,q,p=this,o=p.f1()
for(s=A.h_(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.l(0,q)}return o},
b9(a){var s=this.f1()
s.M(0,this)
return s}}
A.m7.prototype={
l(a,b){this.$ti.c.a(b)
return A.Ec()}}
A.fZ.prototype={
p(a,b){return this.a.p(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.h_(s,s.r,A.o(s).c)},
b9(a){return this.a.b9(0)}}
A.h5.prototype={}
A.iT.prototype={}
A.lJ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jv(b):s}},
gt(a){return this.b==null?this.c.a:this.bu().length},
gO(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga_(){if(this.b==null){var s=this.c
return new A.ac(s,A.o(s).i("ac<1>"))}return new A.lK(this)},
gaB(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.o(s).i("am<2>"))}return A.kl(r.bu(),new A.tN(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.p(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jU().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
av(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.av(0,b)
s=o.bu()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uI(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.au(o))}},
bu(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jU(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bu()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.N(r)
n.a=n.b=null
return n.c=s},
jv(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uI(this.a[a])
return this.b[a]=s}}
A.tN.prototype={
$1(a){return this.a.h(0,A.p(a))},
$S:38}
A.lK.prototype={
gt(a){return this.a.gt(0)},
a2(a,b){var s=this.a
if(s.b==null)s=s.ga_().a2(0,b)
else{s=s.bu()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga_()
s=s.gu(s)}else{s=s.bu()
s=new J.ew(s,s.length,A.C(s).i("ew<1>"))}return s},
p(a,b){return this.a.R(b)}}
A.ub.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:43}
A.ua.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:43}
A.jw.prototype={
lZ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kL(a4,a5,a2)
s=$.Bc()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.vF(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.vF(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bp("")
g=o}else g=o
g.a+=B.b.I(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.S("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.y7(a3,m,a5,n,l,r)
else{b=B.d.T(r-1,4)+1
if(b===1)throw A.b(A.S(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bJ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.y7(a3,m,a5,n,l,a)
else{b=B.d.T(a,4)
if(b===1)throw A.b(A.S(a1,a3,a5))
if(b>1)a3=B.b.bJ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ns.prototype={}
A.eA.prototype={}
A.jH.prototype={}
A.jR.prototype={}
A.hQ.prototype={
q(a){var s=A.jS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ki.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.kh.prototype={
am(a,b){var s=A.FH(a,this.glb().a)
return s},
ab(a,b){var s=A.DS(a,this.glp().b,null)
return s},
glp(){return B.it},
glb(){return B.is}}
A.pE.prototype={}
A.pD.prototype={}
A.tP.prototype={
hl(a){var s,r,q,p,o,n,m=a.length
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
if(a==null?p==null:a===p)throw A.b(new A.ki(a,null))}B.a.l(s,a)},
cX(a){var s,r,q,p,o=this
if(o.hk(a))return
o.d6(a)
try{s=o.b.$1(a)
if(!o.hk(s)){q=A.yA(a,null,o.gf3())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.yA(a,r,o.gf3())
throw A.b(q)}},
hk(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hl(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d6(a)
q.n8(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d6(a)
r=q.n9(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
n8(a){var s,r,q=this.c
q.a+="["
s=J.aG(a)
if(s.gX(a)){this.cX(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cX(s.h(a,r))}}q.a+="]"},
n9(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e4(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.av(0,new A.tQ(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hl(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cX(r[n])}p.a+="}"
return!0}}
A.tQ.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:47}
A.tO.prototype={
gf3(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lc.prototype={}
A.t3.prototype={
kA(a){return new A.u9(this.a).iN(t.J.a(a),0,null,!0)}}
A.u9.prototype={
iN(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kL(b,c,J.cH(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Et(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Es(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dc(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Eu(o)
l.b=0
throw A.b(A.S(m,a,p+l.c))}return n},
dc(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a7(b+c,2)
r=q.dc(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dc(a,s,c,d)}return q.la(a,b,c,d)},
la(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bp(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.z_(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eB.prototype={
gag(){return A.yL(this)},
gaR(){return A.yM(this)},
a6(a,b){var s
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
q(a){var s=this,r=A.BW(A.D0(s)),q=A.jJ(A.CZ(s)),p=A.jJ(A.yL(s)),o=A.jJ(A.yM(s)),n=A.jJ(A.CY(s)),m=A.jJ(A.D_(s)),l=A.ye(A.CX(s)),k=s.b,j=k===0?"":A.ye(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dV.prototype={
a6(a,b){if(b==null)return!1
return b instanceof A.dV&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
H(a,b){return B.d.H(this.a,t.yb.a(b).a)},
q(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a7(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a7(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.cL(B.d.q(o%1e6),6,"0")},
$ib4:1}
A.lC.prototype={
q(a){return this.v()},
$iD:1}
A.ao.prototype={
gbN(){return A.CW(this)}}
A.jr.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jS(s)
return"Assertion failed"}}
A.dw.prototype={}
A.cr.prototype={
gdg(){return"Invalid argument"+(!this.a?"(s)":"")},
gdf(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.v(p),n=s.gdg()+q+o
if(!s.a)return n
return n+s.gdf()+": "+A.jS(s.gdJ())},
gdJ(){return this.b}}
A.fP.prototype={
gdJ(){return A.x2(this.b)},
gdg(){return"RangeError"},
gdf(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.v(q):""
else if(q==null)s=": Not greater than or equal to "+A.v(r)
else if(q>r)s=": Not in inclusive range "+A.v(r)+".."+A.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.v(r)
return s}}
A.k9.prototype={
gdJ(){return A.f(this.b)},
gdg(){return"RangeError"},
gdf(){if(A.f(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.io.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.l7.prototype={
q(a){return"UnimplementedError: "+this.a}}
A.fW.prototype={
q(a){return"Bad state: "+this.a}}
A.jE.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jS(s)+"."}}
A.kx.prototype={
q(a){return"Out of Memory"},
gbN(){return null},
$iao:1}
A.ii.prototype={
q(a){return"Stack Overflow"},
gbN(){return null},
$iao:1}
A.tx.prototype={
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
k=""}return g+l+B.b.I(e,i,j)+k+"\n"+B.b.aC(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.v(f)+")"):g}}
A.n.prototype={
cC(a,b){return A.BL(this,A.o(this).i("n.E"),b)},
ca(a,b,c){var s=A.o(this)
return A.kl(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cW(a,b){var s=A.o(this)
return new A.G(this,s.i("l(n.E)").a(b),s.i("G<n.E>"))},
e1(a,b){return new A.dz(this,b.i("dz<0>"))},
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
if(r.m())throw A.b(A.yr())
return s},
b_(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cw())},
ah(a,b){return this.b_(0,b,null)},
a2(a,b){var s,r
A.kK(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.pj(b,b-r,this,"index"))},
q(a){return A.CC(this,"(",")")}}
A.N.prototype={
q(a){return"MapEntry("+A.v(this.a)+": "+A.v(this.b)+")"}}
A.ar.prototype={
gP(a){return A.J.prototype.gP.call(this,0)},
q(a){return"null"}}
A.J.prototype={$iJ:1,
a6(a,b){return this===b},
gP(a){return A.i6(this)},
q(a){return"Instance of '"+A.kG(this)+"'"},
ga3(a){return A.xL(this)},
toString(){return this.q(this)}}
A.m4.prototype={
q(a){return""},
$icX:1}
A.rK.prototype={
gln(){var s,r=this.b
if(r==null)r=$.qy.$0()
s=r-this.a
if($.xW()===1e6)return s
return s*1000}}
A.bp.prototype={
gt(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iDk:1}
A.t2.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.p(b)
s=B.b.br(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wZ(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.I(b,0,s)
q=B.b.aN(b,s+1)
p=this.a
a.k(0,A.wZ(r,0,r.length,p,!0),A.wZ(q,0,q.length,p,!0))}return a},
$S:128}
A.t1.prototype={
$2(a,b){throw A.b(A.S("Illegal IPv6 address, "+a,this.a,b))},
$S:158}
A.iU.prototype={
gfi(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gP(r.gfi())
r.y!==$&&A.xQ()
r.y=s
q=s}return q},
gb2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.z7(s==null?"":s)
r.z!==$&&A.xQ()
q=r.z=new A.ec(s,t.hL)}return q},
ghj(){return this.b},
gdH(){var s=this.c
if(s==null)return""
if(B.b.S(s,"[")&&!B.b.ae(s,"v",1))return B.b.I(s,1,s.length-1)
return s},
gdO(){var s=this.d
return s==null?A.zu(this.a):s},
gdP(){var s=this.f
return s==null?"":s},
gfS(){var s=this.r
return s==null?"":s},
gfU(){return this.c!=null},
gfW(){return this.f!=null},
gfV(){return this.r!=null},
q(a){return this.gfi()},
a6(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge8())if(p.c!=null===b.gfU())if(p.b===b.ghj())if(p.gdH()===b.gdH())if(p.gdO()===b.gdO())if(p.e===b.gh7()){r=p.f
q=r==null
if(!q===b.gfW()){if(q)r=""
if(r===b.gdP()){r=p.r
q=r==null
if(!q===b.gfV()){s=q?"":r
s=s===b.gfS()}}}}return s},
$ila:1,
ge8(){return this.a},
gh7(){return this.e}}
A.t0.prototype={
ghi(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cG(s,"?",m)
q=s.length
if(r>=0){p=A.iV(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.ly("data","",n,n,A.iV(s,m,q,128,!1,!1),p,n)}return m},
q(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lZ.prototype={
gfU(){return this.c>0},
gfW(){return this.f<this.r},
gfV(){return this.r<this.a.length},
ge8(){var s=this.w
return s==null?this.w=this.iJ():s},
iJ(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.S(r.a,"http"))return"http"
if(q===5&&B.b.S(r.a,"https"))return"https"
if(s&&B.b.S(r.a,"file"))return"file"
if(q===7&&B.b.S(r.a,"package"))return"package"
return B.b.I(r.a,0,q)},
ghj(){var s=this.c,r=this.b+3
return s>r?B.b.I(this.a,r,s-1):""},
gdH(){var s=this.c
return s>0?B.b.I(this.a,s,this.d):""},
gdO(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.AL(B.b.I(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.S(r.a,"http"))return 80
if(s===5&&B.b.S(r.a,"https"))return 443
return 0},
gh7(){return B.b.I(this.a,this.e,this.f)},
gdP(){var s=this.f,r=this.r
return s<r?B.b.I(this.a,s+1,r):""},
gfS(){var s=this.r,r=this.a
return s<r.length?B.b.aN(r,s+1):""},
gb2(){if(this.f>=this.r)return B.d6
return new A.ec(A.z7(this.gdP()),t.hL)},
gP(a){var s=this.x
return s==null?this.x=B.b.gP(this.a):s},
a6(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.q(0)},
q(a){return this.a},
$ila:1}
A.ly.prototype={}
A.q8.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.we.prototype={
$1(a){return this.a.dv(this.b.i("0/?").a(a))},
$S:19}
A.wf.prototype={
$1(a){if(a==null)return this.a.fD(new A.q8(a===undefined))
return this.a.fD(a)},
$S:19}
A.vA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.Aa(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.aZ(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fh(!0,"isUtc",t.y)
return new A.eB(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aS(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
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
A.lI.prototype={
aS(a){if(a<=0||a>4294967296)throw A.b(A.yP(u.w+a))
return Math.random()*a>>>0},
aK(){return Math.random()},
$iwI:1}
A.ei.prototype={
bO(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a7(a-s,k)
r=a>>>0
a=B.d.a7(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a7(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a7(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a7(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a7(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a7(q-n,k)>>>0
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
s.b=B.d.a7(o-n+(q-p)+(m-r),4294967296)>>>0},
aS(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.yP(u.w+a))
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
$iwI:1}
A.qB.prototype={
C(){var s,r=this
if(B.a.L(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qC()))throw A.b(B.hq)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fx)}}
A.qC.prototype={
$1(a){return A.f(a)<=0},
$S:46}
A.eP.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e8.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bp(B.lB)
if(q.a!==0)throw A.b(A.al(q,s,"contains unknown pipeline features"))
if(this.a===B.bs&&r.gX(r))throw A.b(A.al(r,s,"safe profiles cannot install optional features"))}}
A.fw.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kE.prototype={}
A.nG.prototype={
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
a=new A.nJ(m,a2,n,new A.nH(A.eV(g,k),A.eV(f,k),A.eV(e,k),A.eV(d,k),c,b,o.z!==a2.z),B.cb)
p.c=a
s=a
try{r=a1.b.cN(s.c)
q=new A.kE(s,r,B.aT)
a1.c=q
return q}catch(a0){p.fu(s)
throw a0}},
bX(a){var s,r,q,p=this
p.eH(a)
s=p.a
r=a.a
s.eI(r)
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
eH(a){if(this.c!==a||a.c!==B.aT)throw A.b(A.j("coordinated transition is not open"))}}
A.fs.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nH.prototype={}
A.nJ.prototype={}
A.nI.prototype={
fu(a){this.eI(a)
a.e=B.eI
this.c=null},
eI(a){if(this.c!==a||a.e!==B.cb)throw A.b(A.j("configuration transition is not open"))}}
A.kD.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
for(s=l.r,r=l.w,q=l.x,p=A.L(["exposure",l.a,"bloomStrength",l.b,"ssaoStrength",l.c,"depthOfFieldStrength",l.d,"vignette",l.e,"grain",l.f,"rainIntensity",s,"surfaceWetness",r,"rainWindowVisibility",q,"ditherStrength",l.y,"colorGradeStrength",l.z,"affineWarpStrength",l.Q,"vertexSnapGrid",l.as,"vhsChromaWeight",l.ax,"vhsTrackingWeight",l.ay,"vhsNoiseWeight",l.ch,"vhsHeadSwitchWeight",l.CW,"vhsDropoutWeight",l.cx,"vhsGhostWeight",l.cy],t.N,t.i),p=new A.K(p,A.o(p).i("K<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=o.b
if(!isFinite(m)||m<0)throw A.b(A.w("PostProcessState."+n+" must be >= 0: "+A.v(m),k))}p=l.at
if(p<1||p>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+p,k))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.v(s),k))
if(r>1)throw A.b(A.w("PostProcessState.surfaceWetness must be in [0, 1]: "+A.v(r),k))
if(q>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.v(q),k))}}
A.fp.prototype={}
A.jY.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gao(0)||!k.b.gao(0)||!k.r.gao(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.v(s)+"/"+A.v(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.v(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gao(0)||r.gc8()<1e-12)A.h(A.w("DirectionalLight.direction must be finite and nonzero: "+r.q(0),j))
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
A.om.prototype={}
A.dr.prototype={
a6(a,b){if(b==null)return!1
return J.fl(b)===A.xL(this)&&b instanceof A.dr&&this.a===b.a&&this.b===b.b},
gP(a){return A.cT(A.xL(this),this.a,this.b,B.f,B.f,B.f)}}
A.bx.prototype={
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
A.ky.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eI.prototype={
v(){return"HandleRejection."+this.b}}
A.k6.prototype={
q(a){return"HandleException("+this.a.b+", "+this.b.q(0)+")"}}
A.bW.prototype={
gao(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a6(a,b){if(b==null)return!1
return b instanceof A.bW&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
q(a){return"LinearColor("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.o3.prototype={}
A.kC.prototype={
gE(){return this.a}}
A.bD.prototype={
gE(){return this.a}}
A.wg.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:67}
A.jq.prototype={
v(){return"AlphaMode."+this.b}}
A.hU.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.e5.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.km("roughness",l.at)
A.km("metallic",0)
A.km("occlusionStrength",1)
A.km("clearcoatStrength",0)
A.km("clearcoatRoughness",0.2)
for(s=l.db,r=l.dx,q=[new A.aP("uvScaleU",s),new A.aP("uvScaleV",r),new A.aP("uvOffsetU",0),new A.aP("uvOffsetV",0),new A.aP("tintR",l.d),new A.aP("tintG",l.e),new A.aP("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.v(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d_.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bE.prototype={}
A.t4.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.U[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.q(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.q(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.t5())
for(p=B.a.gu(B.U),q=new A.T(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.t5.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:26}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.T(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jW()
r=n.c
if(r!=null){q=s/14|0
for(s=A.CK(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gao(0)&&s.b.gao(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.G(B.U,a2.a(new A.pY()),a3)
if(!a4.gu(0).m())return
s=new A.G(B.U,a2.a(new A.pZ()),a3)
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
if(!B.a.a4(A.c([j,h,g,f,e,d,c],p),new A.q_()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.v(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.v(c),a1))}}}
A.pY.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:26}
A.pZ.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:26}
A.q_.prototype={
$1(a){return isFinite(A.bu(a))},
$S:5}
A.jK.prototype={$iDa:1}
A.qa.prototype={
C(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.L(0,new A.qb()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.qb.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.fS.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kF.prototype={}
A.kO.prototype={
fZ(a){var s=this
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
return s.b=new A.kF(s.c,a,B.bz)},
bX(a){var s,r=this
if(r.d)A.h(A.j("resource assembler is disposed"))
r.f9(a)
s=r.c
if(a.a!==s)throw A.b(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.la
r.b=null},
dW(a){if(this.d)A.h(A.j("resource assembler is disposed"))
this.f9(a)
a.c=B.lb
this.b=null},
a1(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f9(a){if(this.b!==a||a.c!==B.bz)throw A.b(A.j("resource assembly is not prepared"))}}
A.fy.prototype={
v(){return"DrawMode."+this.b}}
A.jy.prototype={
v(){return"BlendMode."+this.b}}
A.bA.prototype={}
A.l2.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hs.prototype={
v(){return"ColorEncoding."+this.b}}
A.fx.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i9.prototype={
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
A.oo.prototype={
h6(a){var s=this.z.h(0,a)
return s==null?B.co:s},
q(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eL.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cS.prototype={}
A.bX.prototype={}
A.pV.prototype={
cp(a){var s=this.a,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.pW(a)),r.i("G<1>")).gt(0)}}
A.pW.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:79}
A.pT.prototype={
cO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(k=A.Ay(k),i=k.$ti,k=new A.c5(k.a(),i.i("c5<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bN(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cO(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.H(new A.am(r,o),o.i("n.E"))
B.a.V(a,new A.pU())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jE(m,k,s))}return new A.pV(A.ah(o,t.wl))},
jE(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.K(b,A.o(b).i("K<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.CI(new A.am(q,q.$ti.i("am<2>")))
A.aW(q,s,r)
return new A.bX(a,p)}}
A.pU.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:80}
A.kn.prototype={
mJ(a){return this.a.bB(a)}}
A.pX.prototype={
$3(a,b,c){return new A.cz(A.f(a),A.f(b),A.aj(c))},
$S:85}
A.l9.prototype={}
A.q0.prototype={
bh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.zd(f,new A.k1(e.byteLength,B.cD,B.hH))
if(f.b!==B.h)A.h(A.j(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d3(f)
A.bs(f,p)
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.U[m]
k=A.Av(l.a)
if(!o.l(0,k))continue
j=A.EL(n,k,l)
if(f.b!==B.h)A.h(A.j(g))
r.vertexAttribPointer.apply(r,[k,j,A.f(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.h(A.j(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.zd(f,new A.k1(A.yI(i),B.cD,B.cC))
if(f.b!==B.h)A.h(A.j(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.DF(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l9(d,h,p,f,e.length/14|0,!1)},
dU(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.e0(B.az,a))
this.b.bB(a)
return s},
b7(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b7(a)},
dS(){var s,r,q,p
for(s=this.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bh(p.b))}},
gc9(){return this.b.bF().bq(0,0,new A.q2(),t.S)}}
A.q1.prototype={
$3(a,b,c){return new A.bx(A.f(a),A.f(b),A.aj(c))},
$S:88}
A.q2.prototype={
$2(a,b){var s,r
A.f(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yI(s)
return a+r+s},
$S:92}
A.bN.prototype={}
A.dv.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c0.prototype={}
A.rU.prototype={
cw(a){var s=this.a,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.rV(a)),r.i("G<1>")).gt(0)}}
A.rV.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:103}
A.rS.prototype={
cO(a){var s,r,q,p,o,n,m,l,k,j,i
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
B.a.V(m,new A.rT())
r=t.Aj
l=A.a_(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.ju(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c0(p,i))}r=l.a
return new A.rU(A.ah(j,t.d),r)},
ju(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.q()
if(s.fk(a,r)===s.d)return B.dL
this.b.k(0,a,!0)
return B.dK}catch(q){if(A.ak(q) instanceof A.k6){s=this.b.h(0,a)===!0?B.dN:B.dM
return s}else throw q}}}
A.rT.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:107}
A.d5.prototype={}
A.l5.prototype={
aW(a){var s=this.a,r=A.wP(s,B.hM)
A.wQ(s,r,0,a)
return r},
n1(a,b){var s,r,q,p=this,o=p.b,n=o.bB(a),m=A.H(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.dZ(a,new A.d5(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wP(p.a,s)
o.k(0,r,q)}A.wQ(p.a,q,0,b)},
ly(a){var s,r=this.b,q=r.bB(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.q(0)))
A.ze(this.a,s)
r.dZ(a,new A.d5(p,q.b,!0))},
fk(a,b){var s
this.b.bB(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mF(a){var s
if(a==null){s=this.d
s===$&&A.q()
return s}s=this.d
s===$&&A.q()
return this.fk(a,s)},
mN(a){var s=this.e
s===$&&A.q()
return s},
mP(a){var s=this.f
s===$&&A.q()
return s},
mH(a){var s=this.r
s===$&&A.q()
return s},
mL(a){var s=this.w
s===$&&A.q()
return s},
a1(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>")),q=n.a,p=q.a,o=t.e;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.N(0)
s=n.d
s===$&&A.q()
A.ln(q,s)
s=n.e
s===$&&A.q()
A.ln(q,s)
s=n.f
s===$&&A.q()
A.ln(q,s)
s=n.r
s===$&&A.q()
A.ln(q,s)
s=n.w
s===$&&A.q()
A.ln(q,s)},
dS(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aW($.xV())
i.e=i.aW($.xS())
i.f=i.aW($.xT())
i.r=i.aW($.xR())
i.w=i.aW($.xU())
for(s=i.b.bF(),r=s.$ti,s=new A.c5(s.a(),r.i("c5<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a4(o,new A.rY()))continue
l=A.wP(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wQ(p,l,k,j)}if(m.c)A.ze(p,l)
q.k(0,n.a,l)}},
gc9(){return this.b.bF().bq(0,0,new A.rX(),t.S)}}
A.rW.prototype={
$3(a,b,c){return new A.b8(A.f(a),A.f(b),A.aj(c))},
$S:110}
A.rY.prototype={
$1(a){return t.Fx.a(a)==null},
$S:113}
A.rX.prototype={
$2(a,b){var s
A.f(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:117}
A.eK.prototype={
glJ(){return this.b.length}}
A.jW.prototype={
kn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qF(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].al(s,b)
o=s.km(a,!1)
if(o.b.length!==0)return new A.jX(o,B.jb)
q=o.a
n=A.C(q)
m=new A.I(q,n.i("e(1)").a(new A.oh()),n.i("I<1,e>")).b9(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.ak(d),j=0;j<1;++j){i=n[j]
if(!m.p(0,i.gF().a))throw A.b(A.j('RenderFeature "'+k.gE()+'" created a pass "'+i.gF().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.V(l,new A.oi(o))
return new A.jX(o,l)},
bC(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a1()}}
A.oh.prototype={
$1(a){return t.A.a(a).a},
$S:121}
A.oi.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.dI(s,new A.of(a)),B.a.dI(s,new A.og(b)))},
$S:124}
A.of.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.og.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:10}
A.jX.prototype={}
A.eE.prototype={
v(){return"FrameQueueState."+this.b}}
A.on.prototype={}
A.ol.prototype={
ki(a){if(a.length===0)throw A.b(A.al(a,"passId",null))
this.b=a
this.a.cP(a,A.AG())},
hV(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aH(p.a,p.b,p.d))}return A.aW(o,t.N,t.pH)},
bw(a,b){var s,r=this.b
if(r==null)throw A.b(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a7(a,3)*b}}
A.h0.prototype={}
A.aw.prototype={
gbI(){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.qe()),r.i("G<1>"))},
gcf(){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.qf()),r.i("G<1>"))},
q(a){return"PassDeclaration("+this.a+" @ "+this.b.q(0)+")"},
gE(){return this.a}}
A.qe.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.j||s===B.G},
$S:17}
A.qf.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:17}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bl.prototype={
q(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ib.prototype={
v(){return"ResourceFormat."+this.b}}
A.cO.prototype={
v(){return"GraphStage."+this.b}}
A.aJ.prototype={
h2(){var s=this
return new A.aJ(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a6(a,b){var s=this
if(b==null)return!1
return b instanceof A.aJ&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,s.e,s.f)},
q(a){var s=this,r=s.b.q(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fR.prototype={
v(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.ht.prototype={
gE(){return this.a}}
A.kH.prototype={
az(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.DI(m.a,a.c,r.a(a.d.ga_().bK(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.ig){++m.e
throw q}else throw q}r=a.a
p=new A.ht(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bC(){var s=this.b
this.iR(new A.am(s,A.o(s).i("am<2>")))
s.N(0)},
iR(a){var s,r
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
A.qD.prototype={}
A.b6.prototype={
ac(){var s=this
return A.yh(B.ec,s.f,B.aq,B.a8,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.qF.prototype={
km(a,b){var s=this.jV(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.qE(A.ah(new A.G(r,q.i("l(1)").a(new A.qK()),q.i("G<1>")),t.A),s)},
jV(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.C(r)
p=q.i("G<1>")
o=A.H(new A.G(r,q.i("l(1)").a(new A.qJ()),p),p.i("n.E"))
m.ix(o,a,s)
m.iB(o,s)
m.iD(o,s)
m.iA(o,!1,s)
n=m.iF(o,s)
m.iC(o,n,s)
m.iE(o,s)
m.iz(o,n,s)
m.iy(o,s)
return s},
ix(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.a1.bp(b)
if(p.a!==0)B.a.l(c,new A.bl(B.hX,q.a,"missing capabilities: "+p.Y(0,", ")))}},
iB(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bl(B.hS,n,"reads multisampled resource "+m.q(0)+" directly; resolve before sampling"))}}},
iD(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.qI()),q=B.a.gu(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbI()
o=A.H(p,p.$ti.i("n.E"))
p=r.gcf()
n=A.H(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bl(B.b_,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbb(o).a
l=B.a.gbb(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bl(B.b_,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bl(B.b_,r.a,"resolve source and destination must match format and extent"))}},
iA(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.bl(B.hV,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iF(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcf(),n=J.O(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bl(B.hR,m,l.q(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iC(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbI(),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bl(B.cI,o,"reads "+n.q(0)+" but no pass writes that version"))
continue}if(B.a.br(a,m)>s)B.a.l(c,new A.bl(B.cI,o,"reads "+n.q(0)+" before writer "+m.a+" runs"))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
for(l=q.gcf(),k=J.O(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bl(B.hU,n,"reads and writes "+m.q(0)+" at the same version; declare a ping-pong version bump"))}}}},
iz(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcf().ah(0,new A.qH(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bl(B.hT,n,"reads "+l.q(0)+" but writer "+k.a+" produced "+j.q(0)))}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcf(),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.ys(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbI(),p=J.O(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e4(s,!1,!1,p)
s=a.length
i=A.e4(s,!1,!1,p)
h=new A.qG(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bl(B.hW,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qK.prototype={
$1(a){t.A.a(a)
return A.wG()},
$S:10}
A.qJ.prototype={
$1(a){t.A.a(a)
return A.wG()},
$S:10}
A.qI.prototype={
$1(a){return t.A.a(a).f},
$S:10}
A.qH.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:17}
A.qG.prototype={
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
A.qE.prototype={}
A.lH.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge3(){return this.c}}
A.i8.prototype={
jY(a){var s,r,q=a.c,p=q.a
if(!p.gao(0))A.h(A.w("Transform.translation must be finite: "+p.q(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.h(A.w("Transform.rotation must be finite: "+p.q(0),null))
if(!isFinite(1))A.h(A.w(u.u,null))
s=this.a.bB(a.a)
q=q.a9()
p=s.d.gar()
r=A.C(p)
return A.b1(new A.I(p,r.i("M(1)").a(q.gaA()),r.i("I<1,M>")))},
gh0(){return new A.bR(this.lS(),t.Br)},
lS(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gh0(a,b,c){if(b===1){p.push(c)
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
i=i.a9()
f=f.gar()
d=A.C(f)
r=5
return a.b=new A.lH(h,g,A.b1(new A.I(f,d.i("M(1)").a(i.gaA()),d.i("I<1,M>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iD7:1}
A.qL.prototype={
$3(a,b,c){return new A.cu(A.f(a),A.f(b),A.aj(c))},
$S:133}
A.qP.prototype={
gfj(){var s=this.d
return s===$?this.d=new A.rS(this.c,A.m(t.Aj,t.y)):s},
mx(a,b){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
s=this.a
a.C()
r=s.b.aD(a,b)
s.c.k(0,r.a,s.bh(a))
this.f.l(0,r)
return r},
my(a){if(this.x)A.h(A.j("resource library is disposed"))
this.a.b7(a)
this.f.a5(0,a)},
dR(a,b,c,d,e,f){var s,r
if(this.x)A.h(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aD(new A.d5(new A.k3(f,d,1,!0,e,B.aY,B.cF,a),A.e4(1,null,!1,t.Fx),!1),b)
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
p.a1()
i.x=!0}}
A.ty.prototype={}
A.m5.prototype={$ic_:1,
gE(){return this.a},
gF(){return this.b},
ge3(){return this.c}}
A.uZ.prototype={
$1(a){var s=this.a.w.a.dU(a),r=s.b!=null,q=r?s.d:s.e
return new A.ia(s.c,r,q,s.f)},
$S:141}
A.v_.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().h3(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().h3(b)
throw A.b(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:148}
A.uY.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uR.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:161}
A.uS.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bd
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.GY(s,3,q.a.d,r)},
$S:165}
A.uX.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uM.prototype={
$0(){return this.a.at.a},
$S:167}
A.uO.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uN.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uW.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uK.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uL.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uT.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uU.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uV.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.q()
return s},
$S:4}
A.uQ.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uP.prototype={
$0(){return this.a.at.w},
$S:178}
A.v1.prototype={
$0(){return this.a},
$S:49}
A.u5.prototype={}
A.lS.prototype={$iD6:1}
A.lE.prototype={$iCi:1}
A.qU.prototype={
gb8(){var s=this.w
return s==null?A.h(A.j("renderer is not initialized")):s},
h_(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bx)throw A.b(A.j("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.S)throw A.b(A.j("renderer device is context lost"))
m.e=B.l9
try{m.r=s.hc()
r=m.b
q=A.i1(a)
p=r.a
if(p.a!=null)A.h(A.j("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i1(a)
p.d=1
r.b.fZ(q)
r=A.CJ()
m.w=new A.qP(A.CL(s),r,A.Dm(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kO()
p=new A.oL(s,r)
q=A.i1(a)
o=p.da(q,a)
r.fZ(q)
p.c=new A.fN(new A.kF(0,q,B.bz),o,B.ae)
m.x=p
m.y=new A.kH(s,A.m(t.N,t.CH))
m.as=a
A.zW(m)
m.e=B.by}catch(n){s=m.y
if(s!=null)s.bC()
s=m.x
if(s!=null)s.a1()
s=m.w
if(s!=null)s.a1()
m.w=null
m.e=B.bx
throw n}return A.yk(t.H)},
kg(a,b){var s,r,q,p,o,n,m=this,l=null
m.jy()
m.bQ()
r=B.a.p(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.j("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gao(0))A.h(A.w("CameraView.eye must be finite: "+q.q(0),l))
q=r.e
if(!q.gao(0)||q.gc8()<1e-12)A.h(A.w("CameraView.forward must be finite and nonzero: "+q.q(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.h(A.w("CameraView requires 0 < near < far, got "+A.v(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.h(A.w("CameraView.aspect must be finite and > 0: "+A.v(q),l))
if(!r.a.gao(0)||!r.b.gao(0)||!r.c.gao(0))A.h(A.w("CameraView matrices must be finite",l))
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
if((r==null?A.h(A.j("renderer is not initialized")):r).z)m.b$=m.a.kh()
return s}catch(n){if(o.b!==B.ax)A.h(A.j("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hv
m.ep()
m.ax=m.at=null
throw n}},
lq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.h(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.l1(l,0,A.fh(m.c,"count",t.S),A.C(l).c).bL(0,!1)
m.b=B.hu
q=k
try{p=A.EX(a1,r,s,q)
o=p.a.hV()
m=o.gJ().cW(0,new A.qV())
l=m.$ti
n=new A.cy(m,l.i("aH(1)").a(new A.qW()),l.i("cy<1,aH>")).bq(0,B.co,new A.qX(),t.pH)
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
return new A.oo(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.j_(s.e)
a1.ax=a1.at=null}},
jy(){var s,r,q,p=this
if(p.e!==B.dx)return
if(p.a.b===B.S)throw A.b(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.h(A.j("resource library is disposed"))
s.a.dS()
s.c.dS()
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
A.zW(p)
p.e=B.by},
bQ(){var s=this,r=s.e
if(r!==B.by)throw A.b(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.S){s.iS()
s.e=B.dx
throw A.b(A.j("renderer context lost"))}}}
A.qV.prototype={
$1(a){return B.b.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qW.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qX.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aH(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lP.prototype={}
A.tK.prototype={
j_(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.h(A.j(u.k))
r=s.fm(o)
if(r.b)A.h(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lP(o))}catch(q){p.dd(o)}},
ep(){var s=this.b$
this.b$=null
if(s!=null)this.dd(s)},
iS(){var s,r,q
this.ep()
s=this.a$
r=J.yv(s.slice(0),A.C(s).c)
B.a.N(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.dd(r[q].b)},
dd(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fm(a).a)}catch(r){}}}
A.lW.prototype={}
A.ih.prototype={
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
A.wk.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:53}
A.wl.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.wi.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:55}
A.wj.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.nZ.prototype={}
A.nY.prototype={}
A.jm.prototype={
gar(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.M(o,n,p),new A.M(r,n,p),new A.M(o,q,p),new A.M(r,q,p),new A.M(o,n,s),new A.M(r,n,s),new A.M(o,q,s),new A.M(r,q,s)],t.k)},
q(a){return"Aabb("+this.a.q(0)+", "+this.b.q(0)+")"}}
A.eN.prototype={}
A.fB.prototype={
v(){return"FrustumTest."+this.b}}
A.op.prototype={
mW(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hw:B.hx}}
A.oq.prototype={
$4(a,b,c,d){var s=new A.M(a,b,c),r=new A.eN(s,d),q=Math.sqrt(s.gc8())
if(q<1e-9)s=r
else{s=1/q
s=new A.eN(new A.M(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dm.prototype={
aC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dm(h)},
hg(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.M(k,j,i):new A.M(k/h,j/h,i/h)},
dM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
gao(a){return B.t.a4(this.a,new A.pR())},
q(a){return"Mat4("+A.v(this.a)+")"}}
A.pR.prototype={
$1(a){return isFinite(A.bu(a))},
$S:5}
A.kJ.prototype={
q(a){var s=this
return"Quat("+A.v(s.a)+", "+A.v(s.b)+", "+A.v(s.c)+", "+A.v(s.d)+")"}}
A.l6.prototype={
C(){var s=this.a
if(!s.gao(0))throw A.b(A.w("Transform.translation must be finite: "+s.q(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.q(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yF(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.yF(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
q(a){return"Transform("+this.a.q(0)+", "+this.b.q(0)+", scale=1)"}}
A.M.prototype={
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.M(s*r-q*p,q*o-n*r,n*p-s*o)},
gc8(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc8())},
gao(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaw(){var s=this,r=Math.sqrt(s.gc8())
return r<1e-9?B.al:new A.M(s.a/r,s.b/r,s.c/r)},
a6(a,b){if(b==null)return!1
return b instanceof A.M&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)},
q(a){return"Vec3("+A.v(this.a)+", "+A.v(this.b)+", "+A.v(this.c)+")"}}
A.iv.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hq.prototype={
gE(){return this.f},
al(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.x,B.j),new A.P(this.y,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bo(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d3(s.d),p=t.n,o=s.r===B.dX?new Float32Array(A.a2(A.c([1/s.Q,0],p))):new Float32Array(A.a2(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lv(new A.b6(s.f,A.c([new A.P(s.x,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a1(){},
$ian:1}
A.lv.prototype={
an(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bP(r,a.ai(o.r).b)
A.ba(r,o.a.ac())
A.d2(r,B.Q,1,0,0,0)
A.c4(r,o.b.b)
q=t._
p=o.d
if(o.e)A.DD(r,0,q.a(p.$0()))
else A.aD(r,0,q.a(p.$0()))
A.t(r,"uSource",B.w)
A.t(r,"uTexelStep",new A.x(B.aj,o.f))
A.bs(r,o.c)
s.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.jz.prototype={
gE(){return"bloomComposite"},
al(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.I,A.c([new A.P(this.f,B.j),new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="bloomComposite",q=s.a.az(new A.bo(r,s.b,s.c,B.y,B.jI,B.jp)),p=A.d3(s.d),o=s.w,n=A.c([new A.P(s.f,B.j),new A.P(s.r,B.j),new A.P(o,B.k)],t.C)
return A.c([new A.lw(new A.b6(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a1(){},
$ian:1}
A.lw.prototype={
an(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bP(r,a.cV(q.f).b)
A.DE(r,1)
A.ba(r,B.eU)
A.c4(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.t(r,"uBloom",B.w)
A.t(r,"uBloomStrength",new A.x(B.e,p))
A.bs(r,q.c)
s.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.jM.prototype={
gE(){return"depthPrepass"},
al(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hO,A.c([new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="depthPrepass",q=s.a.az(new A.bo(r,s.b,s.c,B.d2,B.d1,B.iS))
return A.c([new A.lz(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a1(){},
$ian:1}
A.lz.prototype={
an(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
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
A.wh(b,k,!1)
d.jJ(b,j.gF().b,p)
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
jJ(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,0))
A.t(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e2(!1):s)},
$iaa:1,
gF(){return this.a}}
A.ix.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hx.prototype={
gE(){return this.f},
al(a,b){B.a.l(a.a,new A.aw(this.f,B.I,A.c([new A.P(this.w,B.j),new A.P(this.x,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bo(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d3(s.d),p=t.n,o=s.r===B.dY?new Float32Array(A.a2(A.c([1/s.z,0],p))):new Float32Array(A.a2(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.lA(new A.b6(s.f,A.c([new A.P(s.w,B.j),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a1(){},
$ian:1}
A.lA.prototype={
an(a){var s,r,q=this
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
A.bs(r,q.c)
s.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.jP.prototype={
gE(){return"dofComposite"},
al(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.I,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1))},
ak(a){var s=this,r="dofComposite",q=s.a.az(new A.bo(r,s.b,s.c,B.y,B.jG,B.iH)),p=A.d3(s.d)
return A.c([new A.lB(new A.b6(r,A.c([new A.P(s.z,B.j),new A.P(s.Q,B.j),new A.P(s.as,B.j),new A.P(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a1(){},
$ian:1}
A.lB.prototype={
an(a){var s,r=this,q=a.ai("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
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
A.bs(n,r.c)
p.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.k5.prototype={
gE(){return"grade"},
al(a,b){B.a.l(a.a,new A.aw("grade",B.I,A.c([new A.P(this.r,B.j),new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bo("grade",s.b,s.c,B.y,B.jE,B.jq)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.lG(new A.b6("grade",A.c([new A.P(p,B.j),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a1(){},
$ian:1}
A.lG.prototype={
an(a){var s=this,r=a.ai(s.f.a),q=a.b,p=q.a
A.bP(p,a.ai(s.r.a).b)
A.ba(p,s.a.ac())
A.c4(p,s.b.b)
A.aD(p,0,r.b)
A.t(p,"uScene",B.w)
A.aD(p,1,t._.a(s.d.$0()))
A.t(p,"uLut",B.ak)
A.t(p,"uLutSize",new A.x(B.e,s.e))
A.t(p,"uStrength",new A.x(B.e,a.c.e.z))
A.bs(p,s.c)
q.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.hV.prototype={
gE(){return"msaaResolve"},
al(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hP,A.c([new A.P(this.b,B.j),new A.P(this.c,B.k)],t.C),!0))},
ak(a){var s=this.b,r=this.c
return A.c([new A.lN(new A.b6("msaaResolve",A.c([new A.P(s,B.j),new A.P(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a1(){},
$ian:1}
A.lN.prototype={
an(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cV(this.c),j=a.cV(this.d),i=this.b
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
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.NONE)],t.n))}A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.NONE),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.f(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iaa:1,
gF(){return this.a}}
A.fn.prototype={}
A.jA.prototype={
ai(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cV(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ai(s)},
$iD5:1}
A.wH.prototype={}
A.i4.prototype={
gE(){return"present"},
al(a,b){B.a.l(a.a,new A.aw("present",B.hQ,A.c([new A.P(this.f,B.j)],t.C),!1))},
ak(a){var s,r=this,q=r.a.az(new A.bo("present",r.b,r.c,B.y,B.jP,B.iX)),p=A.d3(r.d)
r.w=p
s=r.f
return A.c([new A.lT(new A.b6("present",A.c([new A.P(s,B.j)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a1(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$ian:1}
A.lT.prototype={
an(a){var s,r=this,q=a.cV(r.d),p=a.b,o=p.a
A.bP(o,null)
A.ba(o,r.a.ac())
A.c4(o,r.b.b)
A.bs(o,r.c)
A.aD(o,0,q.b)
s=a.c.e
A.t(o,"uExposure",new A.x(B.e,s.a))
A.t(o,"uVignette",new A.x(B.e,s.e))
A.t(o,"uGrain",new A.x(B.e,s.f))
A.t(o,"uRainIntensity",new A.x(B.e,s.r))
A.t(o,"uRainWindowVisibility",new A.x(B.e,s.x))
A.t(o,"uOutputEncoding",new A.x(B.e,r.e===B.aS?1:0))
A.t(o,"uToneMap",B.dP)
p.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.kI.prototype={
gE(){return"ps1Quantize"},
al(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.I,A.c([new A.P(this.e,B.j),new A.P(this.f,B.k)],t.C),!1))},
ak(a){var s=this,r="ps1Quantize",q=s.a.az(new A.bo(r,s.b,s.c,B.y,B.jK,B.iA)),p=A.d3(s.d),o=s.e,n=s.f
return A.c([new A.lU(new A.b6(r,A.c([new A.P(o,B.j),new A.P(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a1(){},
$ian:1}
A.lU.prototype={
an(a){var s=this,r=a.ai(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bP(o,a.ai(s.e.a).b)
A.ba(o,s.a.ac())
A.c4(o,s.b.b)
A.aD(o,0,r.b)
A.t(o,"uScene",B.w)
A.t(o,"uQuantizationBits",new A.x(B.e,p.at))
A.t(o,"uDitherStrength",new A.x(B.e,p.y))
A.bs(o,s.c)
q.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.eX.prototype={}
A.kW.prototype={
gE(){return"shadow"},
al(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hN,A.c([new A.P(this.z,B.k)],t.C),!1))},
ak(a){var s=this,r="shadowCaster",q=s.a.az(new A.bo(r,s.b,s.c,B.d2,B.d1,B.jo))
return A.c([new A.lX(new A.b6(r,A.c([new A.P(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a1(){},
$ian:1}
A.lX.prototype={
an(a){var s,r,q,p,o=this,n=a.ai("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ac())
A.d2(s,B.aR,1,0,0,0)
return}r=A.yZ(l)
o.x.$1(r)
s=m.a
A.bP(s,n.b)
A.ba(s,o.a.ac())
A.d2(s,B.aR,1,0,0,0)
A.c4(s,o.b.b)
A.t(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.iT(m,s[p],l,r)},
fe(a,b){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e2(!1):s)},
iT(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.t(s,"uUseInstances",B.bM)
n.fb(a,b.gF().c,d)
n.fe(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.bs(s,q.a)
s=q.b
r=q.c
if(s)a.dD(r,q.d,0)
else a.aE(r,0)}else if(b instanceof A.eK){p=b.a
if(!p.gF().r)return
if(n.jS(b,c)===B.lW)return
n.fb(a,p.gF().c,d)
A.wh(a,b,!1)
n.fe(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.bs(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dE(r,q.d,o,0)
else a.dC(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
jS(a,b){return B.lV},
fb(a,b,c){var s=a.a
A.t(s,"uModel",new A.x(B.v,new Float32Array(A.a2(b.a9().a))))
A.t(s,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a2(c.a.a))))},
$iaa:1,
gF(){return this.a}}
A.vx.prototype={
$1(a){return this.a.a=a},
$S:59}
A.vy.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.kX.prototype={
gE(){return"shadowedWorld"},
al(a,b){var s=this,r=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)r.push(new A.P(s.dx,B.j))
r.push(new A.P(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cH,r,!1))},
ak(a){var s=this,r="shadowedWorld",q=s.a.az(new A.bo(r,s.b,s.c,B.jM,B.jF,B.iw)),p=A.c([new A.P(s.db,B.j)],t.C)
if(s.ay)p.push(new A.P(s.dx,B.j))
p.push(new A.P(s.dy,B.k))
return A.c([new A.lY(new A.b6(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a1(){},
$ian:1}
A.lY.prototype={
an(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ai("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bP(b1,a4.b)
A.ba(b1,a2.a.ac())
s=a8.a
A.d2(b1,B.ca,1,s.c,s.b,s.a)
A.c4(b1,a2.b.b)
A.t(b1,"uAlbedo",B.w)
A.t(b1,"uNormalMap",B.mh)
A.t(b1,"uOrmMap",B.mi)
A.t(b1,"uEmissiveMap",B.mj)
A.t(b1,"uLightmap",B.mk)
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
for(b1=a6.a,s=b1.length,r=a9.Q,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.eN(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.eN(a5,a6[a1],r)},
eN(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.t(s,"uUseInstances",B.bM)
m.fc(a,b.gF().c)
r=b.gF()
q=b.gF()
p=b.gF()
b.gF()
m.ff(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gF().a)
A.bs(s,o.a)
s=o.b
r=o.c
if(s)a.dD(r,o.d,0)
else a.aE(r,0)}else if(b instanceof A.eK){n=b.a
m.fc(a,n.gF().c)
A.wh(a,b,!0)
s=n.gF()
r=n.gF()
q=n.gF()
n.gF()
m.ff(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gF().a)
A.bs(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dE(r,o.d,q,0)
else a.dC(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
ff(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
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
A.t(o,"uUvScaleOffset",new A.x(B.mg,new Float32Array(A.a2(A.c([q.db,q.dx,0,0],p)))))
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
break A}}A.ba(o,q.go?p.e2(!1):p)},
fc(a,b){var s=b.a9(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a2(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a2(s.dM().a))))},
$iaa:1,
gF(){return this.a}}
A.kZ.prototype={
gE(){return"ssaoOcclusion"},
al(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cG,A.c([new A.P(this.w,B.k)],t.C),!1))},
ak(a){var s=this,r="ssaoOcclusion",q=s.a.az(new A.bo(r,s.b,s.c,B.y,B.jJ,B.ix)),p=A.d3(s.d)
return A.c([new A.m0(new A.b6(r,A.c([new A.P(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a1(){},
$ian:1}
A.m0.prototype={
an(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
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
A.bs(m,p.c)
o.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.kY.prototype={
gE(){return"ssaoBlur"},
al(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cG,A.c([new A.P(this.y,B.j),new A.P(this.z,B.k)],t.C),!1))},
ak(a){var s=this,r="ssaoBlur",q=s.a.az(new A.bo(r,s.b,s.c,B.y,B.jz,B.js)),p=A.d3(s.d)
return A.c([new A.m_(new A.b6(r,A.c([new A.P(s.y,B.j),new A.P(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a1(){},
$ian:1}
A.m_.prototype={
an(a){var s,r,q=this,p=a.b,o=p.a
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
A.bs(o,q.c)
p.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.ld.prototype={
gE(){return"vhs"},
al(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.I,A.c([new A.P(this.r,B.j),new A.P(s,B.G),new A.P(s,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bo("vhs",s.b,s.c,B.y,B.jC,B.iC)),q=A.d3(s.d),p=s.r,o=s.w
return A.c([new A.m8(new A.b6("vhs",A.c([new A.P(p,B.j),new A.P(o,B.G),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a1(){},
$ian:1}
A.m8.prototype={
an(a){var s,r=this,q=a.ai(r.f.a),p=a.ai(r.r.a),o=a.b,n=a.c.e,m=n.db,l=n.ay
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
A.bs(m,r.c)
o.aE(3,0)},
$iaa:1,
gF(){return this.a}}
A.ia.prototype={}
A.lo.prototype={
gE(){return"world"},
al(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cH,A.c([new A.P(this.e,B.k)],t.C),!1))},
ak(a){var s=this,r=s.a.az(new A.bo("safeWorld",s.b,s.c,B.jO,B.y,B.iv)),q=s.e
return A.c([new A.mb(new A.b6("worldOpaqueTransparent",A.c([new A.P(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a1(){},
$ian:1}
A.mb.prototype={
an(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
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
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fs(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fs(m,l[o])},
fs(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eK){s=b.a
n.ft(a,s.gF().c)
A.wh(a,b,!0)
r=n.c.$1(s.gF().a)
A.bs(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dE(p,r.d,o,0)
else a.dC(p,0,o)}else if(t.yz.b(b)){q=a.a
A.t(q,"uUseInstances",B.bM)
n.ft(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.bs(q,r.a)
q=r.b
p=r.c
if(q)a.dD(p,r.d,0)
else a.aE(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fl(b).q(0),null))},
ft(a,b){var s=b.a9(),r=a.a
A.t(r,"uModel",new A.x(B.v,new Float32Array(A.a2(s.a))))
A.t(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a2(s.dM().a))))},
$iaa:1,
gF(){return this.a}}
A.nE.prototype={
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
hu(a){var s,r=this.cg(a).a
A:{if(B.a_===r){s=B.ds
break A}if(B.L===r){s=B.dr
break A}s=B.af
break A}return s}}
A.k2.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hD.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hG.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.k4.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.k1.prototype={}
A.k3.prototype={}
A.eH.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hF.prototype={}
A.hE.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eW.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ig.prototype={
q(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cZ.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fr.prototype={
v(){return"ClearMask."+this.b}}
A.jN.prototype={
aE(a,b){var s=this.a
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
A.aL(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bw(a,c)},
$iC1:1}
A.fD.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fN.prototype={
h3(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.j("resource is not in candidate: "+a))
return s}}
A.oL.prototype={
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
return q}catch(o){p.dW(r)
throw o}},
a1(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.de(s.b)
r.b.a1()
r.c=null
r.e=!0},
da(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("G<1>")
s=new A.G(k,i.a(new A.oM()),j)
for(h=s,g=J.O(h.a),h=new A.T(g,h.b,h.$ti.i("T<1>")),f=a.a;h.m();){r=g.gn()
q=A.zg(f,a.eL(r,a5))
J.jl(a3,q)
J.bk(a2,r,q)}e=A.H(new A.G(k,i.a(new A.oN()),j),j.i("n.E"))
B.a.W(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.AL(J.By(o,11))
if(i){h=J.aT(a2,"sceneColor")
h.toString
J.bk(a2,o,h)}else{h=n
if(typeof h!=="number")return h.nc()
if(h>=2){h=J.aT(a2,"sceneColor#1")
h.toString
J.bk(a2,o,h)}else{m=A.zg(f,a.eL(o,a5))
J.jl(a3,m)
J.bk(a2,o,m)}}}a0=A.aW(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("eS<1>"),a0=new A.eS(a0,k),a0=new A.aC(a0,a0.gt(0),k.i("aC<a1.E>")),j=a.a,i=t.V,k=k.i("a1.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wR(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eL(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hF(s,s,1,B.aX,!0)}if(a==="sceneDepth")return new A.hF(n,m,1,B.aX,!0)
r=B.b.S(a,"ssao")||B.b.S(a,"bloomBlur")||B.b.S(a,"dofBlur")
q=r?B.d.a7(n+1,2):n
p=r?B.d.a7(m+1,2):m
s=a==="sceneColor"
o=s||B.b.S(a,"sceneColor#")
s=s?b.d:1
return new A.hF(q,p,s,o?B.cE:B.hK,o)},
de(a){var s,r,q,p,o,n=A.fI(t.mf.a(a).gaB(),t._)
for(n=A.h_(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wR(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ex(a){if(this.d!==a||a.c!==B.ae)throw A.b(A.j("GPU resource candidate is not open"))}}
A.oM.prototype={
$1(a){return!B.b.S(A.p(a),"sceneColor#")},
$S:3}
A.oN.prototype={
$1(a){return B.b.S(A.p(a),"sceneColor#")},
$S:3}
A.h2.prototype={
v(){return"_SlotState."+this.b}}
A.el.prototype={
sb5(a){this.c=this.$ti.i("1?").a(a)}}
A.cV.prototype={
aD(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.el(B.aK,n.i("el<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.ni
p.sb5(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c0(a){return this.aD(a,null)},
a0(a){var s,r,q
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
this.a0(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dZ(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a0(a)
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
if(r===B.aL||r===B.aK)throw A.b(A.e0(B.i_,a))
q.b=B.aL
q.sb5(null)
B.a.l(p.c,s);++p.e},
bF(){return new A.bR(this.lT(),this.$ti.i("bR<+(1,2)>"))},
lT(){var s=this
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
A.jx.prototype={
v(){return"BlendEquation."+this.b}}
A.ey.prototype={
v(){return"BlendFactor."+this.b}}
A.jI.prototype={
v(){return"CullFace."+this.b}}
A.jL.prototype={
v(){return"DepthFunc."+this.b}}
A.fz.prototype={
e2(a){var s=this
return A.yh(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b7.prototype={
v(){return"StateField."+this.b}}
A.to.prototype={
ld(a){var s,r=this.a
if(r==null)return A.hR(B.jj,t.qL)
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
A.iX.prototype={}
A.iW.prototype={}
A.ma.prototype={}
A.lm.prototype={
ik(a){var s=this,r=A.a(s.a.canvas)
s.c=A.V(new A.tl(s))
s.d=A.V(new A.tm(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hc(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bS(A.f(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bS(A.f(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bS(A.f(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bS(A.f(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bS(A.f(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.f2(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.hk(e.getParameter(A.f(k.WebGL2RenderingContext.RENDERER)))
m=A.hk(e.getParameter(A.f(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qB("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bS(a){var s=A.hk(this.a.getParameter(a))
return typeof s=="number"?B.c.ad(s):0},
f2(a){var s=A.hk(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iCq:1}
A.tl.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.S},
$S:1}
A.tm.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.ud.prototype={
kh(){var s,r=this
if(r.b!==B.h)A.h(A.j(u.k))
s=r.w?A.E(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dB(new A.ma(s))},
fm(a){var s=a.a
if(!(s instanceof A.ma))throw A.b(A.al(a,"query","is not a GPU timer query"))
return s}}
A.m9.prototype={}
A.tk.prototype={}
A.tn.prototype={
l8(a){var s=A.E(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.tk(A.Dy(s))}}
A.jO.prototype={
B(){var s=this
return A.L(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jt.prototype={
glX(){var s=this.CW
return new A.am(s,A.o(s).i("am<2>")).bq(0,0,new A.n8(),t.i)},
i2(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.k2!==$&&A.aY()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aY()
j.k3=p
A.E(q.connect(p))
A.E(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.E(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aY()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aY()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aY()
j.p1=r
A.E(p.connect(q))
A.E(i.connect(A.a(s.destination)))
j.eu()},
eu(){var s,r=this,q=r.k4
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
fh(a){var s,r,q=this
if(B.b.S(a,"vo-")){s=q.y
s===$&&A.q()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.q()
return s}r=B.jH.h(0,a)
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
j2(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aI(k*2),i=A.a(l.createBuffer(2,j,k))
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
A.E(r.connect(q))
A.E(q.connect(p.fh(a)))
r.onended=A.V(new A.na(r,q))
r.start()},
h9(a){return this.cM(a,1)},
ha(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
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
l=j.eF(j.b.h8(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h3(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.V(new A.n9(j,o))
A.E(r.connect(q))
A.E(q.connect(n))
A.E(n.connect(o))
A.E(o.connect(p))
A.E(p.connect(j.fh(a)))
r.start()},
mq(a,b,c,d){return this.ha(a,b,c,1,d,null,null,null)},
eF(a){var s,r,q,p,o,n,m,l
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
el(a){var s,r,q,p,o=this
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
q.onended=A.V(new A.nb(o,q,p))
q.start()
o.cy=q},
cZ(a){if(this.p2===a)return
this.p2=a
this.eu()},
hF(a){var s,r,q=this
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
ec(a){var s=null
return this.bl(s,s,s,s,a,s)},
hC(a){var s=null
return this.bl(s,s,a,s,s,s)},
hE(a){var s=null
return this.bl(s,s,s,s,s,a)},
hB(a){var s=null
return this.bl(s,a,s,s,s,s)},
hA(a){var s=null
return this.bl(a,s,s,s,s,s)},
hD(a){var s=null
return this.bl(s,s,s,a,s,s)},
hz(a){if(this.ay===a)return
this.ay=a
this.by()},
by(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cd(p,g)
m=n==null?i.eF(h.h8(p,g)):new A.ay(n.c,n.d,n.e)
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
A.n8.prototype={
$2(a,b){return Math.max(A.bu(a),t.jS.a(b).r)},
$S:48}
A.n7.prototype={
$1(a){return this.hm(t.q.a(a))},
hm(a){var s=0,r=A.bh(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
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
A.na.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n9.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.nb.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h3.prototype={}
A.ju.prototype={
v(){return"AudioCategory."+this.b}}
A.mY.prototype={
i4(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.ho)
if(!B.a.a4(A.c([d.a,d.b,d.c],t.n),new A.mZ()))throw A.b(B.fy)},
gE(){return this.a}}
A.mZ.prototype={
$1(a){return isFinite(A.bu(a))},
$S:5}
A.mG.prototype={
i1(a,b){if(this.a.length===0)throw A.b(B.fn)
if(!B.a.a4(A.c([a.a,a.b,a.c],t.n),new A.mH()))throw A.b(B.fE)}}
A.mH.prototype={
$1(a){return isFinite(A.bu(a))},
$S:5}
A.ho.prototype={
C(){var s=t.n
if(B.a.L(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mI()))throw A.b(B.fX)
s=B.a.L(A.c([0,0.55,1],s),new A.mJ())
if(s)throw A.b(B.he)},
cd(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
mX(a){return this.cd(a,null)}}
A.mI.prototype={
$1(a){return!isFinite(A.bu(a))},
$S:5}
A.mJ.prototype={
$1(a){A.bu(a)
return a<0||a>1},
$S:5}
A.mU.prototype={
i3(a){var s=A.o(a)
if(new A.ac(a,s.i("ac<1>")).L(0,new A.mW())||new A.am(a,s.i("am<2>")).L(0,new A.mX()))throw A.b(B.hl)}}
A.mW.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.mX.prototype={
$1(a){var s
t.a.a(a)
s=J.aG(a)
return s.gO(a)||s.L(a,new A.mV())},
$S:64}
A.mV.prototype={
$1(a){return A.p(a).length===0},
$S:3}
A.wu.prototype={}
A.n5.prototype={}
A.n_.prototype={
i5(a,b,c){var s
for(s=this.b.gaB(),s=s.gu(s);s.m();)s.gn().C()},
hh(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.j("audio listener room missing: "+a0))
r=this.jH(a,a0)
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
if(!isFinite(g)||g<0||g>1)A.h(B.hd)
return new A.n5(s,b,o,m,g,n,c)},
cd(a,b){return this.hh(a,b,B.bl)},
jH(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.n2
s=t.N
r=A.L([a0,0],s,t.i)
q=A.L([a0,B.V],s,t.Es)
p=A.aI([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.U,l=p.$ti.c;p.a!==0;){k=A.H(p,l)
B.a.V(k,new A.n0(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.it(s,!0)}i=o.aL(j)
h=A.H(i,i.$ti.i("n.E"))
B.a.V(h,new A.n1())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cb(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c4:d).mX(f)
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
p.l(0,e)}}}return B.n1}}
A.n0.prototype={
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
A.n1.prototype={
$2(a,b){var s=t.U
return B.b.H(s.a(a).a,s.a(b).a)},
$S:66}
A.it.prototype={}
A.fo.prototype={}
A.nB.prototype={
h1(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Bs().bA(q).gaw()
p.d=q
p.c=p.b.bA(q).gaw()
p.a=a}}
A.ok.prototype={}
A.ka.prototype={
cS(a){if(this.at)return
A.ps(a,"requestPointerLock",t.X)},
ea(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mA(p,n)}this.be()},
d1(a){var s,r,q,p,o,n,m=this
if(m.ch.d1(a))for(s=m.CW.aJ("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.l(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.l(0,n)
break}}},
mr(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.aV(c,A.C(c).i("aV<1,af?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.p(r.mapping)!=="standard")break A
c=A.p(r.id)
q=A.p(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.aV(n,A.C(n).i("aV<1,B>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.aV(d,A.C(d).i("aV<1,af>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a6(r.value))}s=new A.l_(!0,c,q,o,p)
break}}d=s==null
m=A.DM(d?B.m1:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.L(c.aJ(e),q.gaq(q))
q=f.r
q.iZ(A.o(q).i("l(1)").a(new A.pl(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.m:g,h)){if(i.dK())n.l(0,h)}else n.l(0,h)}}f.e=A.hR(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.L(c.aJ(e),l.gaq(l))){d=r.a(f.c)
d=!B.a.L(c.aJ(e),d.gaq(d))}}if(d)i.dL()},
je(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.p(a.code)))if(B.a.p(s.CW.aJ("interact"),A.p(a.code))){if(s.ch.dK())s.d.l(0,A.p(a.code))}else s.d.l(0,A.p(a.code))},
jg(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.p(a.code))
r=this.CW
if(B.a.p(r.aJ(q),A.p(a.code))){t.Q.a(s)
s=!B.a.L(r.aJ(q),s.gaq(s))}else s=!1
if(s)this.ch.dL()},
jk(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.f(a.button)
if(r.c.l(0,s))if(B.a.p(r.CW.aJ("interact"),s)){if(r.ch.dK())r.d.l(0,s)}else r.d.l(0,s)},
jo(a){var s,r="interact",q="Mouse"+A.f(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.p(s.aJ(r),q)){t.Q.a(p)
p=!B.a.L(s.aJ(r),p.gaq(p))}else p=!1
if(p)this.ch.dL()},
jq(a){var s
A.a(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jm(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.f0(a,"movementX")
s.as=s.as+s.f0(a,"movementY")},
ji(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
f0(a,b){var s=A.zO(a[b])
if(s==null)s=null
return s==null?0:s},
cq(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fI(n.c,t.N)
for(r=n.e,r=A.h_(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.l(0,o)}t.Q.a(s)
return B.a.L(n.CW.aJ(a),s.gaq(s))},
be(){var s=this
s.c.N(0)
s.d.N(0)
s.f.N(0)
s.r.M(0,s.e)
s.as=s.Q=0
s.ch.dT()}}
A.pl.prototype={
$1(a){return!this.a.p(0,A.p(a))},
$S:3}
A.pk.prototype={
aJ(a){var s=this.a.h(0,a)
return s==null?B.m:s},
mA(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.h_(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ah(q,r))},
bi(a,b){var s,r,q
t.Q.a(b)
for(s=this.aJ(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.po.prototype={
dK(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dL(){this.c=this.b=!1
this.d=0},
d1(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dT(){this.c=this.b=!1
this.d=0}}
A.aU.prototype={
gE(){return this.a}}
A.pI.prototype={}
A.pF.prototype={
mu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
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
i.eR(n,i.d,a,b,i.a,j,m)
i.eR(l,i.e,a,c,i.b,j,k)
return new A.pI(n,l,j)},
eR(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("I<1,+effectiveScore,light,score(B,aU,B)>")
r=A.H(new A.I(d,k.i("+effectiveScore,light,score(B,aU,B)(1)").a(new A.pG(this,c,b)),s),s.i("a1.E"))
B.a.V(r,new A.pH())
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
A.pG.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ap(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iL(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pH.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:69}
A.o_.prototype={
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
A.pO.prototype={
hU(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.du(b,c)},
k7(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.T(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cY.prototype={
cQ(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.d_(s,0,m,l)
n.a=s}r=b.ap(0,a).bA(d.ap(0,a)).gaw()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ij(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ij(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ij(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ij(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ij(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ij(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aH(a,b,c,d,e){return this.cQ(a,b,c,d,e,1,1)}}
A.k.prototype={
aj(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ap(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
aC(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bA(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaw(){var s=this,r=s.gt(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.l_.prototype={
gE(){return this.b}}
A.lp.prototype={}
A.nu.prototype={
n7(a){var s,r,q,p,o,n=B.i.ab(a.B(),null)
this.a.fJ(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aj(s.getItem("quarantine.save.active"))
q=A.aj(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mv(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aj(s.getItem("quarantine.save.active"))
q=A.aj(s.getItem("quarantine.save.previous"))
p=this.eK(r,a)
if(p!=null)return new A.eU(p,null)
o=this.eK(q,a)
if(o!=null)return new A.eU(o,"recovered previous save")
if(r==null)return B.lr
return B.lq}catch(n){return B.lp}},
eK(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fJ(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.z)return null
else throw q}}}
A.jQ.prototype={
i8(a,b,c,d,e){if(this.a.length===0)throw A.b(B.h9)
if(this.b<0)throw A.b(B.fz)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ah(q,t.i)
s=t.z
return A.aW(A.L(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.o9.prototype={
gag(){return this.a}}
A.fA.prototype={
B(){var s=t.N
return A.L(["kind",this.a.b],s,s)}}
A.oc.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bt.prototype={}
A.kB.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.L(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lO(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ap(0,new A.k(0,1.3499999999999999,0))
return!new A.jB(s,s.aj(0,new A.k(0,1.2000000000000002,0))).cI(a,r)}}
A.qv.prototype={
B(){return A.uj(this.a)}}
A.fT.prototype={
B(){return A.L(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qT.prototype={
fJ(a){var s,r,q,p,o,n,m,l=B.i.am(a,null),k=t.f
if(!k.b(l))throw A.b(B.hn)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=q.h(0,"version")
if(A.aK(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.S("unsupported save version "+A.v(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.fJ)
k=A.aN(n,s,r)
return A.yW(A.aN(m,s,r),k,2)}}
A.eU.prototype={}
A.eG.prototype={
v(){return"GameSessionEventType."+this.b}}
A.k_.prototype={
gag(){return this.c},
gaR(){return this.d}}
A.oz.prototype={
gag(){return this.a},
gaR(){return this.b}}
A.oy.prototype={
gaa(){var s=this.d
return new A.oz(s.a,s.b)},
ghb(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.L(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.L(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.L(["entryCount",m.e.b.a],k,t.S)
p=A.yq(m.c).B()
o=m.r
n=o.c
return new A.qv(A.uj(A.L(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.L(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
kb(a,b){if(!B.a.L(a.f,new A.oA(b)))return!1
this.z.k9(a,b)
return!0},
ka(a){var s,r,q,p,o,n="event."+a.a,m=this.z
if(m.lF(n))return!1
m=m.b
m.k(0,n,"true")
for(s=a.x,r=s.length,q=0;q<r;++q){p=s[q]
o=B.b.br(p,"=")
if(o<=0||o===p.length-1)continue
m.k(0,B.b.I(p,0,o),B.b.aN(p,o+1))}return!0},
lB(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("am<2>")
q=A.H(new A.am(s,r),r.i("n.E"))
B.a.V(q,new A.oB())
if(q.length===0)return null
s=A.C(q)
r=s.i("G<1>")
p=A.H(new A.G(q,s.i("l(1)").a(new A.oC()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.de(a),r=t.E,s=new A.aC(s,s.gt(0),r.i("aC<Y.E>")),r=r.i("Y.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.T(n,o.length)]
s=l.c
k=new A.cK(a,l.a,s.length-1,B.a.gZ(s).q(0))
j.k(0,a,k)
return k},
k6(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.al(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cu(B.hy)}if(n<a)this.cu(B.hz)},
mw(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dT){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hT(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.BZ(j,A.ah(i.d,h).length)
if(a===B.dG)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.BY(j,new A.G(r,q.i("l(1)").a(new A.oD(k)),q.i("G<1>")).gt(0))
r=k.f
q=r.b
if(B.a.p(B.iz,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aI(j.a/1*3)
B.a.l(r.r,new A.fV(q.a,a,b))
m=r.a
A.C9(m,q.a,n,k.b,A.ah(m.d,h));++q.a
q.eh(7)
r.c=16
r.d=6
r.f=!1
m.hH(B.j3)
s.r.ky(o,c)
l=B.c.aI(j.b/1*6)
if(l>0)r.ei(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.o(i).i("am<2>")).L(0,new A.oE())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cu(B.hB)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cu(B.hA)},
cu(a){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.k_(s.a,s.b))
B.a.l(r.x,A.C_(A.EV(a),r.b,r.y-1))}}
A.oA.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.oB.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.oC.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:18}
A.oD.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.rG().hQ(this.a.c,a.a)},
$S:74}
A.oE.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.jv.prototype={
e0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.C(c),a=b.i("e(1)")
b=b.i("I<1,e>")
A.jh(new A.I(c,a.a(new A.ni()),b),"level")
s=e.e
r=A.C(s)
q=r.i("e(1)")
r=r.i("I<1,e>")
A.jh(new A.I(s,q.a(new A.nj()),r),"room")
p=e.f
o=A.C(p)
A.jh(new A.I(p,o.i("e(1)").a(new A.nk()),o.i("I<1,e>")),"portal")
o=e.r
n=A.C(o)
A.jh(new A.I(o,n.i("e(1)").a(new A.nl()),n.i("I<1,e>")),"stair")
m=new A.I(c,a.a(new A.nm()),b).b9(0)
l=new A.I(s,q.a(new A.nn()),r).b9(0)
r=A.m(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.u)(p),++k){j=p[k]
r.k(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.u)(s),++k){i=s[k]
b=i.b
if(!m.p(0,b))throw A.b(A.S("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.C(b)
q=i.a
A.jh(new A.I(b,a.i("e(1)").a(new A.no()),a.i("I<1,e>")),"window in "+q)
a=i.f
A.jh(a,"portal reference in "+q)
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
e_(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.C(j),i=n.i("l(1)"),n=n.i("G<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bw(new A.G(j,i.a(new A.nh(e)),n),r)
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
A.nc.prototype={
$1(a){var s=A.jc(a,"level"),r=A.c7(s,"id")
A.c7(s,"kind")
A.eq(s,"floorY")
return new A.dL(r)},
$S:75}
A.nd.prototype={
$1(a){return A.BG(a,this.a)},
$S:76}
A.ne.prototype={
$1(a){var s=this.a,r=A.jc(a,"portal"),q=A.c7(r,"id"),p=A.c7(r,"a"),o=A.c7(r,"b"),n=A.xc(r,"facingA"),m=A.xc(r,"facingB"),l=A.eq(r,"offsetA"),k=A.eq(r,"offsetB"),j=A.eq(r,"width"),i=A.eq(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.p(r.h(0,"doorKit")):null
return new A.dM(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.a8(r.h(0,"stair"),!0),J.a8(r.h(0,"exterior"),!0),!J.a8(r.h(0,"open"),!1),J.a8(r.h(0,"sticks"),!0))},
$S:77}
A.nf.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.jc(a,"stair")
return new A.dO(A.c7(p,"id"),A.c7(p,"portalId"),A.FF(p.h(0,s),s),A.mv(p.h(0,"min"),"min"),A.mv(p.h(0,"max"),"max"),A.mv(p.h(0,r),r),A.mv(p.h(0,q),q))},
$S:78}
A.ng.prototype={
$1(a){return typeof a=="string"?a:A.dE("exterior cell")},
$S:33}
A.ni.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nj.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.nk.prototype={
$1(a){return t.lT.a(a).a},
$S:82}
A.nl.prototype={
$1(a){return t.gI.a(a).a},
$S:83}
A.nm.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.nn.prototype={
$1(a){return t.bJ.a(a).a},
$S:28}
A.no.prototype={
$1(a){return t.ya.a(a).a},
$S:84}
A.nh.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:27}
A.vw.prototype={
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
A.np.prototype={
$1(a){var s=this.a,r=A.jc(a,"window")
return new A.dP(A.c7(r,"id"),A.xc(r,"facing"),A.eq(r,"offset")*s,A.eq(r,"sill")*s,A.eq(r,"width")*s,A.eq(r,"height")*s,J.a8(r.h(0,"frosted"),!0))},
$S:87}
A.nq.prototype={
$1(a){return typeof a=="string"?a:A.dE("portal id")},
$S:33}
A.dP.prototype={
gE(){return this.a}}
A.dM.prototype={
gE(){return this.a}}
A.dO.prototype={
gE(){return this.a}}
A.vd.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.vu.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.jB.prototype={
mQ(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.C(s)
q=new A.G(s,r.i("l(1)").a(new A.nF(e)),r.i("G<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cs(b,p.f)&&a==="hall"))o=n.cs(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lq(p,B.c.D(d,0,1))},
lY(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.f_(g,c,d)
s=h.iV(a,b,c,d)
if(s!=null){h.d=s
return h.f_(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.fC(Math.sqrt(r*r+q*q)/0.08))
o=d.aC(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jR(a,n,m,o)
l=l||j.b
m=j.a
i=h.mt(a,n)
n=i==null?n:i}h.bg(m)
return new A.ko(m,n)},
iV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cs(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cs(c,l)){l=j<0||o
h=l}if(i||h)return new A.lq(m,i?0:1)}return null},
f_(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ap(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.z8(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bg(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ko(n,k)},
cs(a,b){var s=a.ap(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cD(c,!1)
s=h.cz(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cz(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cD(p.a,!1)
n=c.aj(0,new A.k(0,0.35,0))
h.bg(n)
if(!h.cI(a,b)){m=h.cz(a,b,n,new A.k(g,0,0))
l=h.cz(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bg(i)
if(h.cI(a,b))break}h.bg(k)
return new A.cD(k,!1)}}if(o)return new A.cD(r,!0)
if(!p.b)return new A.cD(p.a,!0)
h.bg(c)
return new A.cD(c,!0)},
cz(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cD(c,!1)
s=c.aj(0,d)
this.bg(s)
if(this.cI(a,b)){this.bg(c)
return new A.cD(c,!0)}return new A.cD(s,!1)},
bg(a){var s=a.ap(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.aj(0,new A.k(0,1.2000000000000002,0))},
cI(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aF(m)
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
return!this.jO(a,m,s)},
mt(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aF(k)
for(r=k.a,q=a.aL(r),p=J.O(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.cb(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fq(k,o,s)&&this.iO(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jO(a,b,c){var s,r,q
for(s=a.aL(b.a),r=J.O(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fq(b,q,c))return!0}return!1},
fq(a,b,c){var s,r,q,p=a.a,o=b.aZ(p),n=b.aG(p)
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
iO(a,b,c){var s,r=this
switch(b.aZ(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skf(a){this.a=t.a7.a(a)}}
A.nF.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:89}
A.ko.prototype={}
A.cD.prototype={}
A.lq.prototype={}
A.hI.prototype={
gag(){return this.a}}
A.p2.prototype={
ky(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.J,r)
s=B.J[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hR(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.c}return r},
hS(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.d}return r},
B(){return A.L(["landedCount",this.b],t.N,t.z)}}
A.a0.prototype={}
A.jT.prototype={
glR(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a4(A.c([r,q,p,o,n,m],t.n),new A.oe())&&o>=r&&n>=q&&m>=p}}
A.oe.prototype={
$1(a){return isFinite(A.bu(a))},
$S:5}
A.k7.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.T(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glR())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.L(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.p4()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.p4.prototype={
$1(a){return!isFinite(A.bu(a))},
$S:5}
A.p3.prototype={
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
kl(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.k7(A.ah(g,t.hl),new Uint16Array(A.a2(this.b)),new A.jT(s,r,q,p,o,n))
h.C()
return h}}
A.jU.prototype={}
A.wm.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ag.p(0,s))A.h(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:90}
A.vo.prototype={
$2(a,b){var s=t.Ez
return B.b.H(s.a(a).a,s.a(b).a)},
$S:91}
A.d4.prototype={
n6(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iE(A.H5(new A.k7(i,new Uint16Array(A.a2(s)),A.EC(i))),l.a,l.b,l.c,A.c([],k))}}
A.iE.prototype={}
A.eC.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jV.prototype={
ks(a){var s
switch(a.a){case 0:s=A.aI(["front","street","opposite-house"],t.N)
break
case 1:s=A.aI(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aI(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aI(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aI(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kt(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cj
break A}if("kitchen"===a||"cellar"===a){s=B.f1
break A}if("bathroom"===a){s=B.f2
break A}if("spare-room"===a){s=B.f3
break A}s=B.cj
break A}return this.ks(s)},
fO(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bR(this.lx(d.i("e(0)").a(a),b,c,d),d.i("bR<0>"))},
lx(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fO(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a4(0,B.ag.gaq(B.ag)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ag.p(0,j))throw A.b(A.j("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eh.prototype={
fF(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.v3.prototype={
$1(a){var s=this
return t.xT.a(a).fF(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:35}
A.v2.prototype={
$1(a){return t.xT.a(a).fF(0,(this.a+this.b)*0.5,this.c)},
$S:35}
A.dY.prototype={
v(){return"FocusKind."+this.b}}
A.eD.prototype={
gE(){return this.b}}
A.qQ.prototype={}
A.uf.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:93}
A.vm.prototype={
$1(a){return B.d.D(B.c.aI(a*this.a),0,255)},
$S:94}
A.eg.prototype={}
A.p0.prototype={
lH(){var s,r,q,p,o,n,m=this
m.j1()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.j("authored portal endpoint missing: "+o.a))}},
j1(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.j("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.j("duplicate portal "+n))
q.k(0,n,m)}},
aF(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.hR(q),s.b+r.hS(q),s.c)},
aL(a){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.ph(a)),r.i("G<1>"))},
ms(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.al(a,"roomId","not a portal endpoint"))
r=this.aF(o)
q=b.aG(a)+b.w*0.5
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
h8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.V
s=A.c([new A.aP(a,B.V)],t.nR)
r=A.aI([a],t.N)
for(q=this.e,p=t.U;s.length!==0;){o=B.a.mz(s,0)
n=o.a
m=o.b
for(l=this.aL(n),k=J.O(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.cb(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.H(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.H(m,p)
h.push(j)
B.a.l(s,new A.aP(i,h))}}}return B.V}}
A.ph.prototype={
$1(a){var s
t.U.a(a)
s=this.a
return a.b===s||a.c===s},
$S:95}
A.od.prototype={}
A.rG.prototype={
hQ(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a4(s,new A.rH())}else s=!1
return s}}
A.rH.prototype={
$1(a){return t.fW.a(a).w},
$S:27}
A.p5.prototype={
mp(a){var s=this.e,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.p8(a)),r.i("G<1>"))},
cB(a){return B.a.b_(this.d,new A.p6(a),new A.p7(a))},
e_(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
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
e=$.Bp()
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
a4=g.hf(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.j(a7+m+" escapes "+f.a))}}}
A.p8.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:96}
A.p6.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:97}
A.p7.prototype={
$0(){return A.h(A.j("inventory asset missing: "+this.a))},
$S:6}
A.cR.prototype={
gE(){return this.a}}
A.cv.prototype={
hf(a,b){var s=this.f.c.b*b,r=a.f
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.pr.prototype={}
A.pp.prototype={}
A.vt.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:7}
A.pq.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("ac<1>")
n=A.H(new A.ac(o,n),n.i("n.E"))
B.a.W(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dV(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fi)
s=t.X
r=A.aN(a,s,s)
s=this.a
s.N(0)
for(q=new A.K(r,A.o(r).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aK(o)||o<0)throw A.b(B.fB)
s.k(0,n,o)}}}
A.dp.prototype={}
A.p9.prototype={
n4(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t.Q.a(a4)
s=A.c([],t.ea)
for(r=A.h_(a4,a4.r,A.o(a4).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=m.a,k=m.d,j=k.a,i=k.b,k=k.c,h=0;!1;++h){g=n[h]
if(!g.gcJ()||g.gkk())continue
f=g.glV()
e=j+f.a
d=i+f.b
f=k+f.c
c=q.aF(m)
b=j+c.a*0.5-e
a=i+c.b*0.55-d
a0=k+c.c*0.5-f
a1=new A.k(b,a,a0).gt(0)
if(a1>0.0001){a2=1/a1
a3=new A.k(b*a2,a*a2,a0*a2)}else a3=new A.k(0,-1,0)
B.a.l(s,new A.dp(new A.k(e,d,f),a3,16760952,3.8,2.1*this.jG(l)))}}B.a.V(s,new A.pa(a5))
return A.l1(s,0,A.fh(4,"count",t.S),t.A_).bK(0)},
jG(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.pa.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.H(a.a.ap(0,s).gt(0),b.a.ap(0,s).gt(0))},
$S:99}
A.dX.prototype={
v(){return"Floor."+this.b}}
A.dW.prototype={
v(){return"Facing."+this.b}}
A.f2.prototype={
shP(a){this.w=A.Q(a)},
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
aG(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.al(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.eY.prototype={
gE(){return this.a}}
A.eT.prototype={
gE(){return this.a}}
A.pc.prototype={
lo(a){return B.a.b_(this.c,new A.pd(a),new A.pe(a))},
n2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
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
if(k.gO(k)||k.gaB().L(0,new A.pf()))throw A.b(A.j("sound emitter "+l+" has no usable cues"))
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
A.pd.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:100}
A.pe.prototype={
$0(){return A.h(A.j("sound emitter missing: "+this.a))},
$S:6}
A.pf.prototype={
$1(a){return B.b.ba(A.p(a)).length===0},
$S:3}
A.cQ.prototype={
gE(){return this.a}}
A.p1.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.al(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ja}q=A.c([],t.Fm)
p=B.c.aP(r)+1
o=B.c.aP(b)
for(n=p;n<=o;++n){m=B.d.T(n,24)
B.a.l(q,new A.eJ("tick",m))
if(B.d.T(m,3)===0){B.a.l(q,new A.eJ("cuckoo",m))
B.a.l(q,new A.eJ("bell",m))}if(B.d.T(m,6)===0)B.a.l(q,new A.eJ("chime",m))}l.b=b
return q}}
A.eJ.prototype={
gaR(){return this.b}}
A.pb.prototype={
bV(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.al(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.j9}q=A.c([],t.op)
for(p=B.c.aP(r)+1;p<=B.c.aP(b);++p){o=B.d.T(p,24)
n=B.d.T(o,4)
if(n===2)B.a.l(q,B.i2)
if(B.d.T(o,3)===1)B.a.l(q,B.i4)
if(B.d.T(o,8)===5)B.a.l(q,B.i7)
if(B.d.T(o,5)===0)B.a.l(q,B.i3)
if(B.d.T(o,7)===3)B.a.l(q,B.i8)
if(n===1)B.a.l(q,B.i5)
if(B.d.T(o,6)===4)B.a.l(q,B.i6)}m.b=b
return q}}
A.cP.prototype={}
A.vs.prototype={
$1(a){return typeof a!="number"},
$S:7}
A.pg.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.L(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.L(["lit",o.a,"examined",o.b],m,r))}return A.L(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,l=0;!1;++l)e.l(0,o[l].gE())
o=f.a
n=!0
if(A.xv(new A.ac(o,A.o(o).i("ac<1>")),d)){d=f.b
if(A.xv(new A.ac(d,A.o(d).i("ac<1>")),r)){d=f.c
e=!A.xv(new A.ac(d,A.o(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fY)
e=f.d
if(e<0||e>2)A.h(B.fq)
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
g.slu(j.b)}}}}
A.i3.prototype={
B(){return A.L(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hS.prototype={
B(){return A.L(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bm.prototype={
gE(){return this.a}}
A.o8.prototype={
$1(a){return this.a.p(0,A.p(a))},
$S:3}
A.e_.prototype={
v(){return"Hand."+this.b}}
A.ti.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
eg(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kk.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.z[r]
o.k(0,q,s.h(0,q))}return A.L(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
q(a){return new A.I(B.z,t.oI.a(new A.pL(this)),t.jT).Y(0," \xb7 ")}}
A.pK.prototype={
$2(a,b){return new A.N(A.p(a),A.p(b),t.q)},
$S:101}
A.pL.prototype={
$1(a){return this.a.a.h(0,A.p(a))},
$S:102}
A.bT.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.L(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gag(){return this.b}}
A.pu.prototype={
bY(a){t.G.a(a)
return a.a===5&&B.a.a4(B.z,new A.pB(this,a))},
es(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bY(b))return null
s=this.e++
r=new A.bT(s,a,A.c([A.pJ(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dB(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bY(b))return!1
B.a.l(s.c,A.pJ(b,c,B.ay))
return!0},
k5(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bY(b))return!1
s.r=A.pJ(b,0,B.cK)
return!0},
hH(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.N(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.p(s,p))B.a.l(s,p)}},
n3(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.H(n,A.o(n).c)
B.a.W(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ag(r,r.r,r.e,A.o(r).i("ag<2>"));r.m();)s.push(r.d.B())
return A.L(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pB.prototype={
$1(a){var s
A.p(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.hp.prototype={
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
A.nr.prototype={
cg(a){var s,r,q=a==null?null:B.b.ba(a).toLowerCase()
if(q==null||q.length===0)return B.e6
if(q==="pixeldart")return B.e5
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hp(B.aE,!1,!0,r,s,s?r:null)}}
A.i5.prototype={}
A.qu.prototype={
B(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gaB(),s=s.gu(s),r=t.N;s.m();){q=s.gn()
p.push(A.L(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.L(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.vl.prototype={
$1(a){A.p(a)
return a.length!==0&&a!==".."},
$S:3}
A.qq.prototype={}
A.qp.prototype={
gfK(){var s,r,q="pixeldart",p=this.b,o=p.au
if(o){s=p.w
s===$&&A.q()
s=s.a.b}else s="safe"
p=A.yS(q,o?p.gkp():B.jt,!1,s)
r=p
if(r==null)r=A.yS(q,A.c([],t.s),!1,"safe")
p=A.yR(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
em(a){var s,r,q,p,o,n,m,l,k,j=this,i="pixeldart backend is not ready",h=j.b,g=j.d
if(g===B.bw){if(h.au){s=h.d
s===$&&A.q()
s=s.a.b===B.S}else s=!1
s=!s
if(s){j.d=B.M;++h.x2
g=B.M}if(g===B.bw)return}if(g!==B.M)A.h(A.j(i))
B.i.ab(A.L(["backend","pixeldart","interpolation",0,"facts",A.uj(a.a.a)],t.N,t.X),null)
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
g=$.y_()
s=g.b
q=g.c
p=A.wE(h.b/h.c,q,g.a,s)
q=new A.fp(r,p,p.aC(0,r),B.al,B.mm,s,q,h.b/h.c)
g=q}s=h.p4
q=h.R8
o=h.y1++
n=h.x1
m=new A.rK()
$.xW()
l=$.qy.$0()
m.a=l
m.b=null
l=h.e
l===$&&A.q()
k=h.f
k===$&&A.q()
l.kg(k,new A.om(g,s,q,o,n))
h.ry=h.e.lq()
g=$.qy.$0()
m.b=g
h.to=m.gln()/1000},
fT(a){if(this.d!==B.M)A.h(A.j("pixeldart backend is not ready"))
B.i.ab(A.L(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qr.prototype={
kq(a,b){var s,r,q,p,o,n,m
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
A.kz.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qs.prototype={
B(){var s=this
return A.L(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qt.prototype={
fE(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
break B}p=B.c.aI(r.b*q)
q=B.c.aI(r.a*q)
o=B.c.D(a5/p,0,1)
n=B.c.D(a4/q,0,1)
m=o<n?o:n
r=this.ev(B.c.aI(p*m),320,a5)
q=this.ev(B.c.aI(q*m),180,a4)
l=s===B.a_
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
break F}return new A.i9(a1,r,q,h,g,i,p,f,e,d,c)},
ev(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.kj.prototype={}
A.qA.prototype={
n0(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b3
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b3
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.kj(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aK()*0.1,0.9+s.aK()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aK()*0.15
p.e=(0.6+s.aK()*2.8)/0.343
p.b=16-b*11+s.aK()*6}}}
A.kM.prototype={
v(){return"RendererBackendKind."+this.b}}
A.fQ.prototype={
v(){return"RendererBackendState."+this.b}}
A.qN.prototype={}
A.kN.prototype={
gE(){return this.a}}
A.qM.prototype={
ie(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
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
A.qO.prototype={
cT(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fY(a,b){var s,r,q,p,o
for(s=A.ah(this.a.d,t.rO),r=A.C(s).i("eS<1>"),s=new A.eS(s,r),s=new A.aC(s,s.gt(0),r.i("aC<a1.E>")),r=r.i("a1.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.rB.prototype={}
A.cC.prototype={
v(){return"ShaderDebugMode."+this.b},
glf(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
gfR(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aM(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aM(r,2)
else return B.c.aM(r,3)}},
gE(){return this.a}}
A.rC.prototype={
gbk(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bi,p)
s=B.bi[p]
p=this.f
p===$&&A.q()
r=A.C(p)
q=r.i("G<1>")
p=A.H(new A.G(p,r.i("l(1)").a(new A.rF(s)),q),q.i("n.E"))
return p},
gcE(){var s,r=this.gbk(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mD(){var s,r,q,p,o
if(this.b===4)this.e=B.aH
else for(s=this.gbk(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mB(){var s,r,q,p
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
s=A.C(q)
r=A.bw(new A.G(q,s.i("l(1)").a(new A.rE(a)),s.i("G<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aT(a){var s,r,q=this.f
q===$&&A.q()
s=A.C(q)
r=A.bw(new A.G(q,s.i("l(1)").a(new A.rD(a)),s.i("G<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rF.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:21}
A.rE.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.rD.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:21}
A.bM.prototype={
v(){return"SleepQuality."+this.b}}
A.bC.prototype={
v(){return"SleepLocation."+this.b}}
A.fV.prototype={
gag(){return this.a}}
A.o0.prototype={
ei(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.L(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.L(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.o1.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:104}
A.o2.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:105}
A.kb.prototype={
v(){return"InteractionType."+this.b}}
A.f4.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.tp.prototype={}
A.f3.prototype={}
A.jF.prototype={}
A.pi.prototype={}
A.pm.prototype={
e6(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.ag(s,s.r,s.e,A.o(s).i("ag<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.V(p,new A.pn())
return p},
kx(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.n0
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga_(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
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
jw(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jF(e,!1,B.n_,null)
s=p.d===c
r=this.kx(p,d)
q.n3(e)
return new A.jF(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gZ(p.c).q(0)+'".':null)},
l7(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.pi(B.a.gZ(s.c).q(0)+" but "+A.v(a.f))}}
A.pn.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:12}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qR.prototype={}
A.cW.prototype={}
A.qS.prototype={
gej(){var s=B.bm.h(0,this.a)
return s==null?0:s},
hY(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.B)s=q.e
else s=!0
if(s)return B.cW
r=A.xf(b)
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
if(l.a===B.a0)l.jT(s)
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
B.a.l(s,new A.cW())}}}return A.ah(s,t.F3)},
B(){var s=this,r=t.N
return A.L(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ah(s.c,r),"extinguishedMantles",A.ah(s.d,r),"completed",s.e],r,t.z)},
jT(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aP(l.b/l.gej()*A.ah(s,r).length),0,A.ah(s,r).length)
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
A.k0.prototype={
gen(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gl9(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
eh(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.S("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
he(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.S("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.f1.prototype={
B(){var s=this
return A.L(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)},
gag(){return this.a}}
A.tj.prototype={
fP(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aZ(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.v4.prototype={
$0(){var s,r,q=this.a,p=q===2||q===5||q===8||q===11||q===14||q===16||q===18||q===19||q===20
if(p){s=(this.b^q*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
r=B.c.D(B.c.D(0.25+0.65*Math.pow(Math.sin(q*3.141592653589793/7),2)*(0.6+0.4*(q/21)),0.2,1)+(((s^s>>>16)&255)/255-0.5)*0.08,0.2,0.98)
if(q===20)r=0.98}else r=0
return new A.f1(q,p,A.AE(B.c.aM(r,2)),A.AE(B.c.aM(12-(q-1)*0.11000000000000001,2)))},
$S:106}
A.ow.prototype={
lG(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.de(a.a+":"+a.c),q=t.E,r=new A.aC(r,r.gt(0),q.i("aC<Y.E>")),q=q.i("Y.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.c.aI((l+(k-l)*(s/2147483647))*60)
n=B.c.fC(l*60)
m=B.c.aP(k*60)
return(n<=m?B.d.D(o,n,m):B.d.D(o,0,1439))/60},
lt(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
ko(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.ox.prototype={
$2(a,b){var s,r=B.d.H(a.gag(),b.gag())
if(r!==0)return r
s=B.c.H(a.gaR(),b.gaR())
return s!==0?s:J.y1(a.gE(),b.gE())},
$S:32}
A.jZ.prototype={
bV(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.lt(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
if(s.lG(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
glc(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return s},
B(){var s=this.c
s=A.H(s,A.o(s).c)
B.a.W(s)
return A.L(["delivered",s],t.N,t.z)}}
A.ov.prototype={
$1(a){return this.a.ko(A.p(a))!=null},
$S:3}
A.q3.prototype={
aQ(a,b){var s=this.b
if(s.R(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
lF(a){return this.aQ(a,null)},
k9(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("K<1,2>")
k=A.H(new A.K(k,j),j.i("n.E"))
B.a.V(k,new A.q5())
j=t.N
k=A.wD(k,j,j)
s=this.b
r=A.o(s).i("K<1,2>")
s=A.H(new A.K(s,r),r.i("n.E"))
B.a.V(s,new A.q6())
s=A.wD(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("K<1,2>")
q=A.H(new A.K(q,p),p.i("n.E"))
B.a.V(q,new A.q7())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.L(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.L(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.q5.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q6.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.q7.prototype={
$2(a,b){var s=t.gJ
return B.b.H(s.a(a).a,s.a(b).a)},
$S:109}
A.cK.prototype={
B(){var s=this
return A.L(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.by.prototype={
B(){var s=this
return A.L(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.qn.prototype={
e4(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aQ("ashworth.compact","accepted"))B.a.l(r,B.kD)
if(q.aQ(s,"taken"))B.a.l(r,B.kH)
else if(q.aQ(s,"left"))B.a.l(r,B.kE)
if(q.aQ("sylvia.certificate","granted"))B.a.l(r,B.kG)
if(q.aQ("residue.coal","cellar"))B.a.l(r,B.kC)
if(q.aQ("telegram.08","read"))B.a.l(r,B.kB)
if(q.aQ("truth.shawl","home"))B.a.l(r,B.kA)
if(q.aQ("sowerby.paraffin","received"))B.a.l(r,B.kF)
if(q.aQ("inspector.proclamation","acknowledged"))B.a.l(r,B.kz)
return r},
hp(a){var s=this.e4(),r=A.C(s),q=r.i("G<1>")
s=A.H(new A.G(s,r.i("l(1)").a(new A.qo(a)),q),q.i("n.E"))
return s}}
A.qo.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:41}
A.rM.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fX(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jX(q,r.b))}s=A.fX(e.r)
q=A.fX(e.w)
p=A.fX(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.K(n,A.o(n).i("K<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gn()
j.push(A.L(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.K(m,A.o(m).i("K<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.K(m,A.o(m).i("K<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.L(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jX(a,b){var s,r=A.fX(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fX(q.bG(0,new A.rN(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fX(s.bG(0,new A.rO(),t.S,t.z)))
return r}}
A.rN.prototype={
$2(a,b){return new A.N(A.f(a),t.BX.a(b).B(),t.pr)},
$S:111}
A.rO.prototype={
$2(a,b){return new A.N(A.f(a),t.vw.a(b).B(),t.pr)},
$S:112}
A.f0.prototype={
B(){return A.L(["hour",this.a,"order",this.b],t.N,t.S)},
gaR(){return this.a}}
A.f_.prototype={
B(){return A.L(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaR(){return this.a}}
A.ir.prototype={
B(){var s=t.N
return A.L(["field",this.a,"value",this.b],s,s)}}
A.ll.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.L(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gag(){return this.c}}
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
A.rL.prototype={}
A.id.prototype={
gE(){return this.a},
gag(){return this.c},
gaR(){return this.d}}
A.qY.prototype={
$1(a){return typeof a!="string"},
$S:7}
A.qZ.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.S("screenplay event "+a+" is invalid",null,null))
return s},
$S:24}
A.kT.prototype={
gE(){return this.a},
gag(){return this.b}}
A.kQ.prototype={}
A.kR.prototype={
gE(){return this.a}}
A.kS.prototype={
gE(){return this.a}}
A.rP.prototype={
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
l=A.GA(m)
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
d=A.aN(d,g,t.z)}else d=A.m(g,t.z)
o.Q=e.a(d)
if(f.b(J.aT(l,"variants"))){d=J.aT(l,"variants")
if(d==null)d=f.a(d)
d=A.aN(d,g,t.z)}else d=A.m(g,t.z)
o.as=e.a(d)
if(f.b(J.aT(l,"residues"))){d=J.aT(l,"residues")
f=d==null?f.a(d):d
f=A.aN(f,g,t.z)}else f=A.m(g,t.z)
o.at=e.a(f)
s=8
return A.ae(A.aS(A.a(A.a(i.window).fetch("res/story_script.json")),h),$async$bs)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.ae(A.aS(A.a(k.text()),g),$async$bs)
case 11:i=a.Dj(a1)
o.ax=i
o.ay=A.Cn(i)
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
ho(a){var s,r,q,p=this.a
p===$&&A.q()
s=p.h(0,B.d.q(a))
if(t.f.b(s)){p=s.gJ().cW(0,new A.rQ())
r=p.$ti
q=t.N
return A.wD(new A.cy(p,r.i("N<e,e>(1)").a(new A.rR()),r.i("cy<1,N<e,e>>")),q,q)}return null},
e5(a,b){var s=this.ho(a)
return s==null?null:s.h(0,b)},
hs(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
return new A.ll(r,a,b,c,d,A.ah(p,t.Y))},
hr(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.q()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.q(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.ad(p)||o!==B.c.ad(o))return n
return new A.f0(B.c.ad(p),B.c.ad(o))},
hq(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.q()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.q(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.ad(p)||typeof o!="string"||typeof n!="string")return m
return new A.f_(B.c.ad(p),o,n)},
n5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.q()
b4=new A.K(b4,A.o(b4).i("K<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dq(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.p(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hr(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hq(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.q()
b4=new A.ag(b4,b4.r,b4.e,A.o(b4).i("ag<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hs(A.p(d.h(0,"visitor")),B.c.ad(A.a6(d.h(0,"day"))),A.p(d.h(0,"tier")),B.c.ad(A.a6(d.h(0,"ordinal"))))
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
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ir(A.p(a0.h(0,"field")),A.p(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rM(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.rQ.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:114}
A.rR.prototype={
$1(a){t.AC.a(a)
return new A.N(A.p(a.a),A.p(a.b),t.q)},
$S:115}
A.jn.prototype={
bE(a,b,c){var s=B.b.ba(a),r=B.b.ba(c)
if(r.length===0)return""
if(b||this.a===B.bT)return s.length===0?r:s+": "+r
if(this.a===B.bS)return r
return s.length===0?r:s+": "+r},
fQ(a,b){return this.bE(a,!1,b)}}
A.wt.prototype={}
A.cI.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dJ.prototype={
bZ(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dJ(q,p,o,n,m)},
l_(a){var s=null
return this.bZ(s,s,s,a,s)},
l5(a){var s=null
return this.bZ(s,s,s,s,a)},
kW(a){var s=null
return this.bZ(s,s,a,s,s)},
kU(a){var s=null
return this.bZ(s,a,s,s,s)},
kB(a){var s=null
return this.bZ(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.L(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mF.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:116}
A.mD.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:36}
A.mE.prototype={
$0(){return A.h(B.hj)},
$S:6}
A.mQ.prototype={
bM(a,b){var s,r=this,q=r.e.fQ(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.b3(q)
A.f(A.a(v.G.window).setTimeout(A.zZ(new A.mS(r)),7000))},
b3(a){var s,r,q=this
if(!q.c||B.b.ba(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.f(A.a(v.G.window).setTimeout(A.zZ(new A.mR(q,s)),4200))}}
A.mS.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:118}
A.mR.prototype={
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
kS(a){return this.cD(null,null,a,null)},
kI(a){return this.cD(null,a,null,null)},
kY(a){return this.cD(null,null,null,a)},
kH(a){return this.cD(a,null,null,null)},
B(){var s=this
return A.L(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.n2.prototype={
$1$2(a,b,c){return B.a.b_(c.i("n<0>").a(a),new A.n3(b,c),new A.n4(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:119}
A.n3.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.n4.prototype={
$0(){return A.h(A.S("unsupported audio option: "+A.v(this.a),null,null))},
$S:6}
A.nt.prototype={
n_(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.H.fQ(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nw.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nA.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nz.prototype={
$1(a){var s=A.eO(A.p(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.ny.prototype={
$1(a){A.p(a)
return a.length!==0&&!B.b.S(a,"brush-state-")},
$S:3}
A.dR.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dS.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gk_(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.ba(s.a).length===0||B.b.ba(s.c).length===0)throw A.b(B.h6)
if(s.e===B.c3&&s.b!==B.c2)throw A.b(B.fC)},
gE(){return this.a}}
A.nC.prototype={
lr(a,b,c){var s,r,q=this
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
this.eP(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eP(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aY(a,b,c,d,e,f,g,h,i){return this.bD(a,b,c,d,e,!0,f,g,h,i)},
lg(a,b,c,d,e,f,g,h,i){return this.bD(a,b,14,c,d,e,f,g,h,i)},
ll(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
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
fL(a,b,c,d,e){var s,r,q=this.b
q===$&&A.q()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eO(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eO(0,0,c)
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
lj(a,b,c){var s,r,q,p
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
li(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
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
d=d4.gmS()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.jZ(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bq(i,0,new A.nD(c7),t.i)
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
c7.lr(d1==null?0:d1,c,a6)
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
c7.fL(!b6||b4,b2,24,c1,b3)
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
lh(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
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
lk(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
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
c0.ll(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
c7.fillText(d0.e.glf().toUpperCase(),o,a1+5)
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
if(e)c0.fL(!0,g+1,20,b1-j+20,b0)
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
c0.lg(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfR(),c,b0)}else{b5=b3-80-80
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
c7.fillText(a9.gfR(),b3,b0)}c7.restore()}c7.restore()
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
eP(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.q()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eO(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.q()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jZ(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
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
A.nD.prototype={
$2(a,b){var s
A.bu(a)
A.p(b)
s=this.a.b
s===$&&A.q()
return Math.max(a,A.a6(A.a(s.measureText(b)).width))},
$S:120}
A.fu.prototype={
gkj(){var s,r,q,p,o=t.N
o=A.m(o,o)
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
n=A.L(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.bu(r)
q=n.h(0,i)
q.toString
A.bu(q)
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
A.bu(r)
q=n.h(0,i)
q.toString
A.bu(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gkj()
return A.fv(l,null,m,r,p,o,s,q)},
dA(a){var s=null
return this.bz(a,s,s,s,s,s)},
kO(a){var s=null
return this.bz(s,s,s,a,s,s)},
kP(a){var s=null
return this.bz(s,s,s,s,a,s)},
kL(a){var s=null
return this.bz(s,a,s,s,s,s)},
kM(a){var s=null
return this.bz(s,s,a,s,s,s)},
l6(a){var s=null
return this.bz(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fl)
p=this.r
if(p.gJ().L(0,new A.nS()))throw A.b(B.hc)
if(p.gJ().L(0,new A.nT()))throw A.b(B.fT)
p=p.gaB()
o=A.o(p)
s=o.i("hB<n.E,e>")
r=s.i("G<n.E>")
q=A.H(new A.G(new A.hB(p,o.i("n<e>(n.E)").a(new A.nU()),s),s.i("l(n.E)").a(new A.nV()),r),r.i("n.E"))
if(A.hR(q,A.C(q).c).a!==q.length)throw A.b(B.fo)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aA(r.b,!0,p))}return A.L(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nS.prototype={
$1(a){t.yx.a(a)
return J.ws(a.b,new A.nR(a))},
$S:37}
A.nR.prototype={
$1(a){var s
A.p(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.yd(a)
else s=!1
return s},
$S:3}
A.nT.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.ws(a.b,B.dA.gaq(B.dA))},
$S:37}
A.nU.prototype={
$1(a){return t.a.a(a)},
$S:184}
A.nV.prototype={
$1(a){return A.p(a).length!==0},
$S:3}
A.nQ.prototype={
$1(a){return typeof a=="string"},
$S:7}
A.dQ.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ex.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dd.prototype={}
A.jG.prototype={
bW(a){var s=this
if(!s.a.r.R(a))return new A.dd(B.c_,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e7},
kr(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.yd(a)){p.c=p.b=null
return new A.dd(B.c1,B.dB.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.y2(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dd(B.aP,a+" is already bound to "+s)}return p.iq(a)},
dU(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e8
case 1:s=A.x5(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.xr(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xF(r,k))
m.a=m.a.dA(s)
break
case 0:s=A.x5(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.l1(p,1,null,A.C(p).c)
o=p.$ti
p=new A.aC(p,p.gt(0),o.i("aC<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xF(r,k)}else{r=s.h(0,j)
r.toString
r=A.xr(A.xF(r,k),q)}s.k(0,j,r)
m.a=m.a.dA(s)
break}m.c=m.e=m.d=null
return B.bY},
iq(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.x5(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.xr(r,a))
q.a=q.a.dA(s)
q.b=null
return B.bY}}
A.hw.prototype={
i6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jG(f.w)
s=f.b
s.className=A.p(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.nx(a,B.eh,1)))
A.a(s.appendChild(A.A(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.A(a,"div",c,e)
f.er(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.er(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d4(a,r,"invertX","Invert horizontal look")
f.d4(a,r,"invertY","Invert vertical look")
f.d4(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.A(a,"div",c,e)
for(p=B.jB.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fv(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mC(l)?"unbound":J.y4(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dT(a,new A.b3("settings.controls.bind."+m,B.c2,n,h,B.n),new A.nO(f,m),k)
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
f.ds()
A.a(s.appendChild(A.dT(a,B.ei,new A.nP(f),e)))},
h4(a){var s=this.x
s===$&&A.q()
if(s.b==null)return
a.preventDefault()
this.eS(this.x.kr(A.p(a.code)))},
eS(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.em:B.n
p=o.Q.h(0,r)
if(p!=null)A.wv(p,q)}n=a.a
if(n===B.aP)o.jK()
else if(n===B.c0){n=o.x
n===$&&A.q()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.ds()}else{o.d7()
o.ax=null}},
jK(){var s,r,q,p,o
this.d7()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.iy[r]
p=A.E(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dT(p,new A.b3("settings.controls.resolve."+o,B.D,o,"resolve key binding conflict",B.n),new A.nN(this,q),null)))}},
d7(){var s,r=this.at
if(r==null)return
while(A.E(r.firstChild)!=null){s=A.E(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
ds(){var s,r,q,p
for(s=this.Q,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.q()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mC(p)?"unbound":J.y4(p," / ")
r.textContent=q
A.wv(r,B.n)}},
er(a,b,c,d,e,f){var s,r=A.A(a,"label","setting-row",null)
A.a(r.appendChild(A.A(a,"span",null,d)))
s=A.BJ(a,new A.b3("settings.controls."+c,B.ek,d,null,B.n),f,e,new A.nL(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d4(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.BK(a,new A.b3("settings.controls."+c,B.el,d,null,B.n),!1,new A.nM(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eQ(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdN(a){this.f=t.pf.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.nO.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.q()
s=n.bW(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bZ){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wv(q,B.c3)}p.d7()
return null},
$S:0}
A.nP.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nN.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.q()
return s.eS(r.dU(this.b))},
$S:0}
A.nL.prototype={
$1(a){var s=this.a,r=s.w
s.eQ(this.b==="horizontalSensitivity"?r.kM(a):r.l6(a))},
$S:123}
A.nM.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kO(a)
break A}if("invertY"===q){s=r.w.kP(a)
break A}s=r.w.kL(a)
break A}r.eQ(s)},
$S:8}
A.nW.prototype={
i7(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.A(s,"h1","journal-title","credits")))
r=A.A(s,"p","credits-body",null)
p.f!==$&&A.aY()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.A(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.A(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.V(new A.nX(p)))
A.a(o.appendChild(q))}}
A.nX.prototype={
$1(a){return this.a.a8()},
$S:2}
A.o4.prototype={
i9(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.A(a,o,"door-speaker",p)
q.b!==$&&A.aY()
q.b=s
r=A.A(a,o,"door-line",p)
q.c!==$&&A.aY()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.A(a,o,"door-choice-status",p)
q.d!==$&&A.aY()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.A(a,o,"door-cite-list",p)
q.f!==$&&A.aY()
q.f=r
s=A.A(a,o,"door-cite-result",p)
q.r!==$&&A.aY()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.A(a,"button","door-continue","continue")
q.e!==$&&A.aY()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.V(new A.o5(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.V(new A.o6(q,a)))
A.a(A.E(a.body).appendChild(n))},
ed(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.q()
s.textContent=a
s=r.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,b)
s=r.d
s===$&&A.q()
s.textContent=A.yg(B.b5)
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
ee(a,b){var s,r=this,q=r.c
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
hM(a){return this.ee(a,!1)},
hO(a,b){var s,r,q,p,o
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
s.textContent=A.yg(r)},
ef(a,b){var s=this.c
s===$&&A.q()
s.textContent=B.H.bE("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.q()
s.textContent=""
s=this.e
s===$&&A.q()
A.a(s.style).display=""},
hL(a,b){var s,r,q,p,o,n
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
n.addEventListener("click",A.V(new A.o7(p,this)))
A.a(s.appendChild(n))}},
fX(){var s,r=this
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
sm4(a){this.w=t.Z.a(a)},
sm3(a){this.x=t.vR.a(a)}}
A.o5.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:39}
A.o6.prototype={
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
A.o7.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:39}
A.oa.prototype={
ia(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.A(s,"h1","journal-title",null)
o.f!==$&&A.aY()
o.f=r
q=A.A(s,"div","ending-copy",null)
o.r!==$&&A.aY()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.A(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.V(new A.ob(o)))
A.a(n.appendChild(p))},
hN(a,b){var s,r,q,p,o,n,m=this
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
sm8(a){this.w=t.Z.a(a)}}
A.ob.prototype={
$1(a){var s=this.a
s.a8()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.oF.prototype={
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
mZ(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lD(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fv()
return!0}return!1}if(a==="Space"){s=B.a.dI(l,new A.oG())
if(s!==-1){n.ci(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.T(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.T(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.ci(q)
return!0}}if(B.b.S(a,"Digit")){p=A.dq(B.b.aN(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.S(a,"Numpad")){p=A.dq(B.b.aN(a,6),m)
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
fv(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lE(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fv()
return!0}this.ci(a.b)
return!0},
sm2(a){this.y=t.dt.a(a)},
sm7(a){this.z=t.Z.a(a)}}
A.oG.prototype={
$1(a){A.p(a)
return B.b.p(a.toLowerCase(),"silent")||B.b.p(a,"...")},
$S:3}
A.oH.prototype={}
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
aO(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.ww(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
l2(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,a,s)},
l1(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,a,s,s)},
kE(a){var s=null
return this.aO(s,s,a,s,s,s,s,s,s,s,s)},
kN(a){var s=null
return this.aO(s,s,s,s,a,s,s,s,s,s,s)},
kV(a){var s=null
return this.aO(s,s,s,s,s,s,a,s,s,s,s)},
l3(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,s,a)},
kQ(a){var s=null
return this.aO(s,s,s,s,s,a,s,s,s,s,s)},
kD(a){var s=null
return this.aO(s,a,s,s,s,s,s,s,s,s,s)},
kZ(a){var s=null
return this.aO(s,s,s,s,s,s,s,a,s,s,s)},
kC(a){var s=null
return this.aO(a,s,s,s,s,s,s,s,s,s,s)},
kJ(a){var s=null
return this.aO(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.L(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.oI.prototype={
$1$2(a,b,c){var s
A.AD(c,t.D,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.S("invalid gameplay setting: "+a,null,null))
return B.a.b_(b,new A.oJ(s,c),new A.oK(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:127}
A.oJ.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oK.prototype={
$0(){return A.h(A.S("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.ct.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dZ.prototype={
aX(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dZ(s.a,r,q,p,o,n,m,l,k,j,i)},
dz(a){var s=null
return this.aX(a,s,s,s,s,s,s,s,s,s)},
fG(a){var s=null
return this.aX(s,s,a,s,s,s,s,s,s,s)},
fH(a){var s=null
return this.aX(s,s,s,s,s,s,a,s,s,s)},
kR(a){var s=null
return this.aX(s,s,s,s,a,s,s,s,s,s)},
kX(a){var s=null
return this.aX(s,s,s,s,s,s,s,a,s,s)},
kK(a){var s=null
return this.aX(s,s,s,a,s,s,s,s,s,s)},
l4(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,s,a)},
kT(a){var s=null
return this.aX(s,s,s,s,s,a,s,s,s,s)},
kG(a){var s=null
return this.aX(s,a,s,s,s,s,s,s,s,s)},
l0(a){var s=null
return this.aX(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.p(B.jh,q))throw A.b(A.S("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.iF,q))throw A.b(A.S("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.jl,q))throw A.b(A.S("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.je,q))throw A.b(A.S("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.jn,q))throw A.b(A.S("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.jk,q))throw A.b(A.S("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.jm,q))throw A.b(A.S("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.L(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.oV.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:40}
A.oW.prototype={
$0(){return A.h(B.fI)},
$S:6}
A.oX.prototype={
B(){return A.L(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oO.prototype={}
A.oP.prototype={}
A.hH.prototype={
ib(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.A(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.A(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.A(a,"div","settings-grid",m)
r=t.N
n.bd(a,s,"preset","quality preset",A.L(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.bd(a,s,"renderScale","render scale",A.L(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.bd(a,s,"frameTarget","frame target",A.L(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.bd(a,s,"antialiasing","anti-aliasing",A.L(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.bd(a,s,"textureQuality","texture quality",A.L(["high","High","medium","Medium","low","Low"],r,r))
n.bd(a,s,"outputEncoding","output encoding",A.L(["srgb","sRGB display","linear","Linear light"],r,r))
n.bd(a,s,"diagnosticLevel","renderer diagnostics",A.L(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.bd(a,s,"shadowQuality","shadow allocation",A.L(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.A(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.V(new A.oS(n)))
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
r.addEventListener("change",A.V(new A.oT(n)))
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
o.addEventListener("click",A.V(new A.oU(n)))
A.a(j.appendChild(o))},
bd(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.K(e,A.o(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.V(new A.oR(this,r,c)))
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
sdN(a){this.f=t.CA.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.oS.prototype={
$1(a){var s=this.a
s.dj(s.Q.fG(A.Q(s.x.checked)))},
$S:1}
A.oT.prototype={
$1(a){var s=this.a
s.dj(s.Q.kR(A.Q(s.y.checked)))},
$S:1}
A.oU.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a8()},
$S:1}
A.oR.prototype={
$1(a){var s,r=A.p(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.fH(B.a.ah(B.cT,new A.oQ(r)))
break A}if("renderScale"===p){s=q.Q.kX(r)
break A}if("frameTarget"===p){s=q.Q.kK(r)
break A}if("antialiasing"===p){s=q.Q.dz(r)
break A}if("textureQuality"===p){s=q.Q.l4(r)
break A}if("outputEncoding"===p){s=q.Q.kT(r)
break A}if("diagnosticLevel"===p){s=q.Q.kG(r)
break A}if("shadowQuality"===p){s=q.Q.l0(r)
break A}s=q.Q
break A}q.dj(s)},
$S:1}
A.oQ.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:40}
A.jo.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.oY.prototype={
hn(a,b,c){if(c)return B.iU
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jw}}
A.oZ.prototype={
ic(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.A(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.A(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.A(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.A(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.V(new A.p_(this)))
A.a(p.appendChild(r))}}
A.p_.prototype={
$1(a){return this.a.a8()},
$S:2}
A.pv.prototype={
bH(){var s,r=this
r.i0()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ez(r.CW,s)
r.jz()
r.f7()},
iv(){var s,r=this,q=r.a,p=A.A(q,"div","page-turn",null),o=A.A(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.V(new A.pw(r)))
s=A.A(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.V(new A.px(r)))
q=A.A(q,"span","right-day-label",null)
r.Q!==$&&A.aY()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fo(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ez(s.CW+a,r)
s.f7()},
ez(a,b){if(a<1)return 1
if(a>b)return b
return a},
jz(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.q()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.q()
s.textContent=""
for(s=l.w.e6(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=B.a.gZ(o.c).q(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.V(new A.py(l,o,m)))
A.a(k.appendChild(m))}},
f7(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.q()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ag<2>"),n=new A.ag(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.V(r,new A.pz())
j.f6(i,r)
i=j.Q
i===$&&A.q()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.q()
s=A.c([],s)
for(r=new A.ag(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.V(s,new A.pA())
j.f6(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.q()
A.a(i.style).setProperty("width",B.c.aM(k*100,1)+"%")},
f6(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.iW(b[r])))},
iW(a){var s,r,q,p,o,n=A.A(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.eX(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.eX(p,!1)
o.className=A.p(o.className)+" margin"
A.a(n.appendChild(o))}return n},
eX(a,b){var s=b?"hand-line struck":"hand-line",r=A.A(this.a,"div",s,a.q(0))
A.a(r.style).setProperty("--shake",B.c.q(a.b))
return r}}
A.pw.prototype={
$1(a){return this.a.fo(-1)},
$S:2}
A.px.prototype={
$1(a){return this.a.fo(1)},
$S:2}
A.py.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pz.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.pA.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:12}
A.cU.prototype={}
A.fq.prototype={
gE(){return this.a}}
A.qc.prototype={
gmS(){var s,r,q=this.c
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
A.a(A.E(this.a.body).appendChild(s))},
bH(){var s,r,q,p,o=this,n=o.b
if(B.b.p(A.p(n.className),"open"))return
s=$.qd
if(s!=null&&s!==o)s.a8()
$.qd=o
r=o.a
o.d=A.E(r.activeElement)
A.ps(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.V(o.gjr())
o.e=q
r.addEventListener("keydown",q)
p=A.zX(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a8(){var s,r,q=this,p=q.b
if(!B.b.p(A.p(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.qd===q)$.qd=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
h4(a){},
js(a){A.a(a)
this.h4(a)
if(A.Q(a.defaultPrevented))return
if(A.p(a.code)==="Escape"){a.preventDefault()
this.a8()
return}if(A.p(a.code)==="Tab")this.jQ(a)},
jQ(a){var s,r=A.zX(this.b)
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
A.e7.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dn.prototype={
B(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a6(a,b){if(b==null)return!1
return b instanceof A.dn&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.cT(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e6.prototype={
gfA(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bp},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.C(r),p=q.i("I<1,Z<e,J?>>")
r=A.H(new A.I(r,q.i("Z<e,J?>(1)").a(new A.qi()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("I<1,e>")
r=A.H(new A.I(r,q.i("e(1)").a(new A.qj()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.qi.prototype={
$1(a){return t.oP.a(a).B()},
$S:129}
A.qj.prototype={
$1(a){return t.wJ.a(a).b},
$S:130}
A.bY.prototype={}
A.qh.prototype={
h5(a){var s,r=this
if(r.a.gfA())return new A.bY(B.Z,r.a,null)
s=r.a
s=new A.e6(B.jg,s.b,a)
r.a=s
return new A.bY(B.dm,s,"pause.resume")},
ke(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gZ(p)
q=r.a.a
q=B.a.aU(q,0,q.length-1)
p=r.a
p=new A.e6(q,p.b,p.c)
r.a=p
return new A.bY(B.dn,p,s.c)}if(q.gfA()&&r.a.b.length===0)return r.cc()
return new A.bY(B.Z,r.a,null)},
cc(){var s=this.a
if(s.a.length===0)return new A.bY(B.Z,s,null)
if(s.b.length!==0)return new A.bY(B.Z,s,null)
this.a=B.bo
return new A.bY(B.dp,B.bo,s.c)},
mo(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.bY(B.Z,q.a,null)
s=q.a
r=A.H(s.b,t.wJ)
r.push(a)
s=new A.e6(s.a,r,q.a.c)
q.a=s
return new A.bY(B.dm,s,null)},
le(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.bY(B.Z,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("G<1>")
r=A.H(new A.G(r,q.i("l(1)").a(new A.qk(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e6(s.a,r,q)
o.a=r
return new A.bY(B.ky,r,q)},
iP(a){var s
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
A.qk.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:131}
A.cA.prototype={
v(){return"PauseRootAction."+this.b}}
A.ql.prototype={
bm(a,b,c,d){var s=B.jN.h(0,c)
s.toString
A.a(b.appendChild(A.dT(a,new A.b3(s,B.D,d,null,B.n),new A.qm(this,c),null)))},
smj(a){this.f=t.Z.a(a)},
sml(a){this.r=t.Z.a(a)},
sm5(a){this.w=t.Z.a(a)},
smk(a){this.x=t.Z.a(a)},
smb(a){this.y=t.Z.a(a)},
sm6(a){this.z=t.Z.a(a)},
sb6(a){this.Q=t.Z.a(a)}}
A.qm.prototype={
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
A.qz.prototype={
hK(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.H.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.r0.prototype={
ig(a){var s,r,q,p,o,n=this.b
n.className=A.p(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.nx(a,B.eg,1)))
A.a(n.appendChild(A.A(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.A(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iV[r]
p=B.d5.h(0,q)
p.toString
o=B.d4.h(0,q)
o.toString
A.a(s.appendChild(A.dT(a,new A.b3(o,B.D,p,p+" settings",B.n),new A.r1(this,q),null)))}A.a(s.appendChild(A.dT(a,B.ef,new A.r2(this),null)))
A.a(n.appendChild(s))},
sm1(a){this.f=t.hQ.a(a)},
sb6(a){this.r=t.Z.a(a)}}
A.r1.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.r2.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fU.prototype={
ih(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.v(B.d5.h(0,d))+" settings",a=h.b
a.className=A.p(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.nx(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.n),2)))
A.a(a.appendChild(A.A(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.A(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.rr(h)),p=B.a.gu(B.A),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j9(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.A(a0,"div",e,g)
for(s=s.a(new A.rs(h)),q=B.a.gu(B.A),o=new A.T(q,s,o);o.m();)A.a(j.appendChild(h.jP(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.E)A.a(a.appendChild(h.it(a0)))
if(d===B.F)A.a(a.appendChild(h.is(a0)))
if(d===B.Y)A.a(a.appendChild(h.iu(a0)))
i=A.A(a0,"div",e,g)
for(s=t.pz.a(h.gj3()),q=B.a.gu(B.ji),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dT(a0,new A.b3("settings."+o+".reset."+n,B.D,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.rt(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dT(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.D,"reset all settings","restore all settings to defaults",B.en),new A.ru(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dT(a0,new A.b3("settings."+(d==null?f:d)+".back",B.D,"return","return to settings categories",B.n),new A.rv(h),g)))},
is(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.A(a,"div","settings-grid",j),f=k.d3(a,g,"reducedMotion","reduced motion (system default)"),e=k.d3(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d3(a,g,"captions","non-speech captions"),c=A.A(a,"label",h,j)
A.a(c.appendChild(A.A(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.V(new A.rj(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.A(a,"label",h,j)
A.a(r.appendChild(A.A(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bg[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.V(new A.rk(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.A(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.V(new A.rl(k)))
A.a(g.appendChild(l))
k.ok.M(0,A.L(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d3(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.V(new A.r3(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
e9(a){var s,r
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
s.value=(r==null?B.a7:r).b}},
iu(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.A(a,"div","settings-grid",l)
m.bc(a,g,"interactionMode","interaction mode",B.bf,t.bK)
m.bc(a,g,"promptDensity","prompt density",B.bj,t.dn)
m.bc(a,g,"textPacing","text pacing",B.bh,t.j_)
m.bc(a,g,"journalLayout","journal layout",B.ba,t.gm)
m.bc(a,g,k,k,B.b4,t.aJ)
m.bc(a,g,"saveFeedback","save feedback",B.bb,t.mx)
m.bc(a,g,"focusLossBehavior","when the window loses focus",B.aA,t.x)
m.bc(a,g,"clockFormat","clock format",B.b7,t.vS)
s=A.A(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.V(new A.rm(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.A(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.V(new A.rn(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.A(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.A(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.V(new A.ro(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.A(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bc(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.AD(f,t.D,"T","_addGameplaySelect")
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
A.a(r.appendChild(n))}r.addEventListener("change",A.V(new A.rh(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
it(a){var s,r,q=this,p=A.A(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.be[s].b
n.k(0,r,r)}q.ck(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.b9[s].b
n.k(0,r,r)}q.ck(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.b8[s].b
n.k(0,r,r)}q.ck(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.b6[s].b
o.k(0,n,n)}q.ck(a,p,"ducking","voice intelligibility",o)
return p},
ck(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.K(e,A.o(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.V(new A.r8(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
hv(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.K(s,A.o(s).i("K<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eV(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.X===r){s=a.c===B.aG
break A}if(B.F===r){s=a.c===B.a2
break A}if(B.E===r){s=a.c===B.C
break A}s=!1
break A}return s},
j4(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.X===s){r=a===B.aG
break A}if(B.F===s){r=a===B.a2
break A}if(B.E===s){r=a===B.C
break A}r=!1
break A}return r},
jP(a,b){var s=this,r=A.A(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.V(new A.rq(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.A(a,"span",null,b.b)))
return r},
j9(a,b,c,d,e){var s,r,q=this,p=A.A(a,"label","setting-row",null),o=A.A(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.v(e)
n.max=A.v(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.A(a,"output",null,"100%")
n.addEventListener("input",A.V(new A.rp(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aP(e,d))
return p},
eb(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kO
r=B.c.D(b,s.a,s.b)
q.value=B.c.q(r)
p.textContent=""+B.c.aI(r*100)+"%"},
smd(a){this.r=t.DI.a(a)},
smf(a){this.w=t.xl.a(a)},
sme(a){this.x=t.xl.a(a)},
sm9(a){this.y=t.DI.a(a)},
smc(a){this.z=t.xl.a(a)},
smn(a){this.Q=t.xl.a(a)},
smi(a){this.as=t.Ci.a(a)},
smh(a){this.at=t.Z.a(a)},
sb6(a){this.ax=t.Z.a(a)},
sm0(a){this.ay=t.kC.a(a)},
sma(a){this.ch=t.hq.a(a)},
sm_(a){this.CW=t.Cv.a(a)},
smg(a){this.cx=t.Z.a(a)}}
A.rr.prototype={
$1(a){t.gl.a(a)
return a.d===B.N&&this.a.eV(a)},
$S:16}
A.rs.prototype={
$1(a){t.gl.a(a)
return a.d===B.ah&&this.a.eV(a)},
$S:16}
A.rt.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.ru.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rv.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a8()},
$S:0}
A.rj.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eO(A.p(this.b.value))
r=r.l5(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rk.prototype={
$1(a){var s=this.a,r=s.k4.l_(B.a.ah(B.bg,new A.ri(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.ri.prototype={
$1(a){return t.mq.a(a).b===A.p(this.a.value)},
$S:36}
A.rl.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.r3.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.kW(r)
break A}if("photosensitivitySafe"===p){s=q.k4.kU(r)
break A}if("captions"===p){s=q.k4.kB(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.rm.prototype={
$1(a){var s=this.a,r=s.k3.kE(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rn.prototype={
$1(a){var s=this.a,r=s.k3.l1(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.ro.prototype={
$1(a){var s=this.a,r=s.k3.l2(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rh.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kN(B.a.ah(B.bf,new A.r9(r.c)))
break A}if("promptDensity"===p){s=q.k3.kV(B.a.ah(B.bj,new A.ra(r.c)))
break A}if("textPacing"===p){s=q.k3.l3(B.a.ah(B.bh,new A.rb(r.c)))
break A}if("journalLayout"===p){s=q.k3.kQ(B.a.ah(B.ba,new A.rc(r.c)))
break A}if("confirmations"===p){s=q.k3.kD(B.a.ah(B.b4,new A.rd(r.c)))
break A}if("saveFeedback"===p){s=q.k3.kZ(B.a.ah(B.bb,new A.re(r.c)))
break A}if("clockFormat"===p){s=q.k3.kC(B.a.ah(B.b7,new A.rf(r.c)))
break A}s=q.k3.kJ(B.a.ah(B.aA,new A.rg(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.r9.prototype={
$1(a){return t.bK.a(a).b===A.p(this.a.value)},
$S:134}
A.ra.prototype={
$1(a){return t.dn.a(a).b===A.p(this.a.value)},
$S:135}
A.rb.prototype={
$1(a){return t.j_.a(a).b===A.p(this.a.value)},
$S:136}
A.rc.prototype={
$1(a){return t.gm.a(a).b===A.p(this.a.value)},
$S:137}
A.rd.prototype={
$1(a){return t.aJ.a(a).b===A.p(this.a.value)},
$S:138}
A.re.prototype={
$1(a){return t.mx.a(a).b===A.p(this.a.value)},
$S:139}
A.rf.prototype={
$1(a){return t.vS.a(a).b===A.p(this.a.value)},
$S:140}
A.rg.prototype={
$1(a){return t.x.a(a).b===A.p(this.a.value)},
$S:42}
A.r8.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.kS(B.a.ah(B.be,new A.r4(r.c)))
break A}if("dynamicRange"===o){s=p.kI(B.a.ah(B.b9,new A.r5(r.c)))
break A}if("reverb"===o){s=p.kY(B.a.ah(B.b8,new A.r6(r.c)))
break A}s=p.kH(B.a.ah(B.b6,new A.r7(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.r4.prototype={
$1(a){return t.xs.a(a).b===A.p(this.a.value)},
$S:142}
A.r5.prototype={
$1(a){return t.EL.a(a).b===A.p(this.a.value)},
$S:143}
A.r6.prototype={
$1(a){return t.gc.a(a).b===A.p(this.a.value)},
$S:144}
A.r7.prototype={
$1(a){return t.ul.a(a).b===A.p(this.a.value)},
$S:145}
A.rq.prototype={
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
A.rp.prototype={
$1(a){var s,r,q=this,p=A.eO(A.p(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aI(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bB.prototype={
v(){return"SettingCategory."+this.b}}
A.ie.prototype={
v(){return"SettingKind."+this.b}}
A.b_.prototype={
cU(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.S(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.S(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bv(a))throw A.b(A.S(r.a+" must be boolean",q,q))
break}}}
A.ry.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:16}
A.rz.prototype={
$0(){return A.h(A.j("unknown setting: "+this.a))},
$S:6}
A.rw.prototype={
ii(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rx(s.a).cU(s.b)}},
ce(a){var s=this.b.h(0,a)
return s==null?A.h(A.j("setting missing from profile: "+a)):s},
B(){return A.L(["version",this.a,"values",this.b],t.N,t.K)}}
A.rA.prototype={
mC(a){var s,r,q=A.fH(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dt(q,1)
this.jD(a)},
B(){return A.L(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jD(a){var s,r,q=A.fH(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.A[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dt(q,1)}}
A.rI.prototype={
ij(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.a(l.appendChild(A.A(a,"h2","journal-title","Rest")))
A.a(l.appendChild(A.A(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.A(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.cR[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.cY[o]
m=A.a(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.V(new A.rJ(this,q,n)))
A.a(s.appendChild(m))}}A.a(l.appendChild(s))},
smm(a){this.f=t.nf.a(a)}}
A.rJ.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a8()},
$S:1}
A.cq.prototype={
gE(){return this.a},
gag(){return this.b},
gaR(){return this.c}}
A.mN.prototype={
mR(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.I(s,r.i("e(1)").a(new A.mP()),r.i("I<1,e>")).b9(0)
r=this.b
r.N(0)
s=J.y5(a,t.N)
p=s.$ti
r.M(0,new A.G(s,p.i("l(n.E)").a(q.gaq(q)),p.i("G<n.E>")))},
lm(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.mP.prototype={
$1(a){return t.bC.a(a).a},
$S:146}
A.mO.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:147}
A.li.prototype={
gc_(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lQ(a){return this.c.p(0,t.L.a(a))},
dV(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a4(0,g.gkz())||!a.a.a4(0,new A.tf(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eY(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
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
if(m!=null)k=l==null||!B.a.L(l.f,new A.tg(s))
else k=!1
if(k)return!1
j=new A.lh(r,g,A.ah(o,t.AP),B.a5)
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
fz(a){var s=this.a,r=A.o(s).i("ac<1>"),q=r.i("G<n.E>")
s=A.H(new A.G(new A.ac(s,r),r.i("l(n.E)").a(new A.ta(a)),q),q.i("n.E"))
B.a.V(s,new A.tb())
return s},
bW(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mV
s=m.a.h(0,a)
if(s==null)return B.mW
r=B.d.a7(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.bP:B.ao
o=p===B.ao&&m.x.p(0,q)&&s.R(B.bQ)?B.bQ:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bP
r=s.h(0,n)
r.toString
m.r=new A.lh(a,n,A.ah(m.eY(a,n,r),t.AP),B.a5)
m.gc_()
r=m.r
r.toString
return new A.lg(r)},
ku(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dV
if(n.d!==B.a5)return B.mT
n.e=a
s=a===B.ab
n.d=s?B.aI:B.am
r=this.f
q=s?B.dT:B.mB
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dy(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dy(B.mE,o,p,a,null))
if(s)this.f8(n)
return new A.le(n)},
k8(){var s,r=this.r
if(r==null)return B.dV
s=r.d
if(s!==B.am&&s!==B.an)return B.mU
if(this.gc_()!=null&&r.w==null)return new A.b9(new A.br(B.a6,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.f8(r)
return new A.iq(r,!0)}return new A.iq(r,!1)},
kv(a){var s,r,q=this.r,p=this.gc_(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.mS
o=p.f
s=A.C(o)
r=A.bw(new A.G(o,s.i("l(1)").a(new A.td(a)),s.i("G<1>")),t.Y)
if(r==null)return B.mX
q.w=r.a
return new A.lf(q,p,r)},
kw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbj()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cX
p=J.O(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aW(q,s,s)
m=c.jw(!0,!0,o,new A.tp(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dy(B.mD,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fH(B.a.gZ(j.c).a,s,s)
s.M(0,q)
p.k5(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dW)if(k===B.bR){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dy(B.mC,o,p.b,i,l))}}return m},
f8(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eY(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.ja(a,b,r.gn()))
return s},
ja(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bw(new A.G(p,r.i("l(1)").a(new A.t8(this)),r.i("G<1>")),t.aS)}return s==null?c:new A.c3(q,s.c,c.c)},
shX(a){this.x=t.Q.a(a)}}
A.tf.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.o(s).i("ac<1>")).L(0,new A.te(A.p(a)))},
$S:3}
A.te.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:23}
A.tg.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.ta.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:23}
A.tb.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:149}
A.td.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.tc.prototype={
$0(){return A.c([],t.jV)},
$S:150}
A.t8.prototype={
$1(a){return t.aS.a(a).d.gJ().a4(0,new A.t7(this.a))},
$S:151}
A.t7.prototype={
$1(a){t.q.a(a)
return this.a.y.aQ(a.a,a.b)},
$S:152}
A.t9.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:153}
A.lj.prototype={}
A.lO.prototype={}
A.vD.prototype={
$1(a){return B.b.S(A.p(a),"off.")},
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
B(){var s,r=this,q=A.m(t.N,t.z)
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
A.br.prototype={
a6(a,b){if(b==null)return!1
return b instanceof A.br&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c3.prototype={
a6(a,b){if(b==null)return!1
return b instanceof A.c3&&b.a===this.a&&b.b===this.b},
gP(a){return A.cT(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a6(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gP(a){var s=this
return A.cT(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.L(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gag(){return this.b},
gaR(){return this.c}}
A.lk.prototype={
B(){var s,r,q,p=this.a
p=A.H(p,A.o(p).c)
B.a.W(p)
s=this.b
r=A.o(s)
q=r.i("df<1,Z<e,@>>")
s=A.H(new A.df(s,r.i("Z<e,@>(1)").a(new A.t6()),q),q.i("n.E"))
r=this.c
return A.L(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.t6.prototype={
$1(a){return t.L.a(a).B()},
$S:154}
A.jp.prototype={
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
A.mK.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:155}
A.mL.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:156}
A.mM.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:157}
A.lh.prototype={
gbj(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.th.prototype={}
A.b9.prototype={}
A.lg.prototype={}
A.le.prototype={}
A.iq.prototype={}
A.lf.prototype={}
A.h1.prototype={}
A.lR.prototype={
gkp(){var s,r
if(!this.au)return B.m
s=this.r
s===$&&A.q()
r=this.w
r===$&&A.q()
return B.ex.kq(s,r)},
glA(){var s="shadowCaster",r=this.ry
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.h6(s).a+";shadowTriangles="+r.h6(s).b+";frameMs="+B.c.aM(this.to,3)},
glz(){var s=this.ry
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.to<=100},
lI(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.hc()
l.r=k
k=B.c5.hu(k)
l.w=k
q=l.b
p=l.c
s=new A.l2(q,p,q,p)
o=A.yX(l.d.a)
l.e=o
try{o.h_(l.iK(k,q,p),s)}catch(n){r=A.ak(n)
k=l.w
if(k===B.af)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.v(r)
l.w=B.af
k=A.yX(l.d.a)
k.h_(B.l8,s)
l.e=k}k=l.e
k.bQ()
m=A.D8(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c2=l.b
l.c3=l.c
l.eJ()
l.lv=A.CQ(!0,!0,!0)
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
new A.l2(a,b,a,b).C()
if(r.cF==null)r.cF=r.bP()},
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
return A.ae(A.v0(i,B.c8.fE("auto","full","srgb",h,"auto","profile",A.f(l),g)),$async$bP)
case 8:n.c2=m
n.c3=l
n.c5=n.c4=null
A.jf()
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
case 5:return A.be(null,r)
case 1:return A.bd(p.at(-1),r)}})
return A.bf($async$bP,r)},
eG(a,b,c,d,e,f,g,h){return B.c8.fE(d,e,f,a,g,h,c,b)},
iK(a,b,c){return this.eG(a,b,c,"auto","full","srgb","auto","profile")},
eJ(){var s,r,q,p=this.w
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
this.fx=new A.pF(r,p,A.a_(q),A.a_(q),A.m(q,t.i))},
cA(a){var s=0,r=A.bh(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cA=A.bi(function(b,c){if(b===1){o.push(c)
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
k=n.eG(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.q()
s=7
return A.ae(A.v0(i,t.lg.a(k)),$async$cA)
case 7:n.w=t.xK.a(m)
n.eJ()
n.c2=n.b
n.c3=n.c
n.x=null
A.jf()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ak(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.v(j)
A.jf()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$cA,r)},
kd(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.au||b4.Q.length!==0)return
b4.fM=c0
s=b4.k1
r=b4.e
r===$&&A.q()
s.k(0,b6,r.gb8().dR(8,"texture:wall-plaster",!0,256,B.aZ,256))
s.k(0,b7,b4.e.gb8().dR(8,"texture:grime",!0,512,B.aZ,512))
for(q=0;q<2;++q){p=B.jx[q]
r=b4.e.w
if(r==null)r=A.h(A.j(b8))
s.k(0,p,r.dR(8,"texture:"+p,!0,256,B.aZ,256))}b4.dr()
b4.ct()
b4.p2=b4.jA(A.pS(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.L(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cx(g,g.r,g.e,A.o(g).i("cx<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bk.h(0,c)
if(b==null)A.h(A.j("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pS(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.h(A.j(b8))
if(a0.x)A.h(A.j(b9))
c.C()
a1=a0.b.a.aD(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iZ[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dl(a2)
j=b4.dl(a2)
l=A.pS(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dl(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.h(A.j(b8)):j
if(n.x)A.h(A.j(b9))
l.C()
a1=n.b.a.aD(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.ct()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b4.j5(c0,r[q])
b4.jx(c0)
$.y.j().setAttribute("data-renderer-house-model-scale",B.c.aM(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.u)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eM(c0,i,a4)
g=b4.e.w
if(g==null)g=A.h(A.j(b8))
f=a4.a
if(g.x)A.h(A.j(b9))
e=g.a
a5.C()
a1=e.b.aD(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bh(a5))
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
a.a0(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gar()
a0=A.C(c)
A.b1(new A.I(c,a0.i("M(1)").a(a.gaA()),a0.i("I<1,M>")))
n.k(0,f,new A.iJ(f,g,e.b.c0(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.u)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.jt(i,a4.aZ(f),a4.aG(f),a4.aG(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.u0(a4))
a=b4.e.w
if(a==null)a=A.h(A.j(b8))
if(a.x)A.h(A.j(b9))
a0=a.a
e.C()
a1=a0.b.aD(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bh(e))
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
a.a0(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.u.a9()
a=a.gar()
a7=A.C(a)
A.b1(new A.I(a,a7.i("M(1)").a(a0.gaA()),a7.i("I<1,M>")))
B.a.l(o,new A.lQ(f,e.b.c0(a8),a8,c))}for(r=A.H4(A.Gs(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.dh(e)
a0=b4.dh(e)
a=A.pS(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.dh(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.h(A.j(b8)):a0
if(c.x)A.h(A.j(b9))
a.C()
a1=c.b.a.aD(a,b5)
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
a1=a7.b.aD(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bh(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ag.p(0,a0))A.h(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bA(a1,b,B.u,-1,B.R,B.a9,B.lx.p(0,a0),!0,0,b5)
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
a=B.u.a9()
c=c.gar()
a0=A.C(c)
A.b1(new A.I(c,a0.i("M(1)").a(a.gaA()),a0.i("I<1,M>")))
j.k(0,b2,e.b.c0(b3))}},
hx(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ah(a8.e,t.fl)
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
h=a5.fM
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cB(i)
i=a5.e
i===$&&A.q()
i=i.w
if(i==null)i=A.h(A.j(a6))
h=a5.j8(f,j,m)
e=j.a
if(i.x)A.h(A.j(a7))
d=i.a
h.C()
c=d.b.aD(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bh(h))
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
i=new A.l6(new A.M(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kJ(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bA(c,a2,i,-1,B.R,B.a9,d!=="micro",!0,0,null)
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
i=i.a9()
h=h.gar()
b=A.C(h)
A.b1(new A.I(h,b.i("M(1)").a(i.gaA()),b.i("I<1,M>")))
s.k(0,e,d.b.c0(n))}$.y.j().setAttribute("data-renderer-inventory-items",""+s.a)
$.y.j().setAttribute("data-renderer-inventory-resolution","proxy")
$.y.j().setAttribute("data-renderer-inventory-proxy-count",""+s.a)},
hI(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aI([s],r)
for(p=c1.aL(s),o=J.O(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.cb(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.K(b9,A.o(b9).i("K<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.p(0,n)?-1:0
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
a.a0(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gar()
a0=A.C(a)
A.b1(new A.I(a,a0.i("M(1)").a(b.gaA()),a0.i("I<1,M>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a0(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb5(e)
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
n=n.a9()
i=i.gar()
g=A.C(i)
A.b1(new A.I(i,g.i("M(1)").a(n.gaA()),g.i("I<1,M>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb5(o)}b9=b8.fr
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
i=i.a9()
g=g.gar()
d=A.C(g)
A.b1(new A.I(g,d.i("M(1)").a(i.gaA()),d.i("I<1,M>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a0(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb5(e)
b9.k(0,a5.a,a5.kF(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
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
g=g.a9()
d=d.gar()
c=A.C(d)
A.b1(new A.I(d,c.i("M(1)").a(g.gaA()),c.i("I<1,M>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a0(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb5(i)}a9=new A.jV().kt(c2)
b9=$.y.j()
s=A.H(a9,A.o(a9).c)
B.a.W(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Y(s,","))
b9=b8.dx
r=new A.jV().fO(new A.u1(b8),new A.ac(b9,A.o(b9).i("ac<1>")),a9,r)
b0=A.fI(r,r.$ti.i("n.E"))
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
n=n.a9()
i=i.gar()
g=A.C(i)
A.b1(new A.I(i,g.i("M(1)").a(n.gaA()),g.i("I<1,M>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a0(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb5(e)
b9.k(0,b4,e)}$.y.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.y.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("df<1,e>")
b7=A.H(new A.df(b0,b9.i("e(1)").a(new A.u2(b8)),s),s.i("n.E"))
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
m=a7.fa(b0,n)
l=J.aG(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.q()
d=d.w
if(d==null)d=A.h(A.j(a8))
c=a7.eZ(e.b)
b=g.b
if(d.x)A.h(A.j(a9))
a=d.a
c.C()
a0=a.b.aD(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bh(c))
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
a3.a0(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gar()
a3=A.C(b)
A.b1(new A.I(b,a3.i("M(1)").a(d.gaA()),a3.i("I<1,M>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a0(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb5(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.h(A.j(a8)):a
if(d.x)A.h(A.j(a9))
d.a.b7(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.y.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fN+1));++a7.fN},
dQ(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gb8().mx(k.eM(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bA(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.q()
n=r.c
p.jY(l)
p.b.dZ(n,l)
s.k(0,b,r.fI(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gb8().my(n)},
hy(d7,d8,d9,e0,e1,e2,e3,e4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9="time_override",d0="wetness_override",d1="fog_density",d2="fog_height_falloff",d3="rain_override",d4=A.aI([d8],t.N),d5=d7.e,d6=d5.h(0,d8)
if(d6!=null)for(s=d6.a,r=d7.aL(s),q=J.O(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.cb(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d5.h(0,o)!=null)d4.l(0,o)}n=new A.p9(d7).n4(d4,d9)
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
i=d5.mu(d9,m,l)
d5=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d5.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.u)(r),++h){g=r[h]
p=g.a
f=d5.h(0,p).a
e=g.d
s.push(new A.kC(p,new A.M(f.a,f.b,f.c),new A.bW(e.a,e.b,e.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.u)(q),++h){g=q[h]
f=g.a
e=d5.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bD(f,new A.M(d.a,d.b,d.c),new A.M(e.a,e.b,e.c),new A.bW(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c8.iw(i,++c8.fy)
d5=$.hn()
b=d5.G(c9)
if(b>=0)a=B.c.D(b,0,23.999)
else a=e4
a0=e2.c
a1=B.c.T(B.c.T(a,24)+24,24)
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
b1=A.cb(B.kT,B.bu,b0)
b2=A.cb(B.kV,B.bt,b0)
b3=A.cb(B.kP,B.bv,b0)
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
b5=0.18}}if(a2>0){b6=A.cb(b3,B.l2,a2*0.7)
b4*=1-a2*0.35
b5*=1-a2*0.15}else b6=b3
b7=e3?1:0.15
b8=B.c.D(0.3333333333333333,0,1)
b9=B.c.D(a2*0.75+b8*0.25,0,1)
q=$.Br().a
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
q.k(0,"tonemapMode",B.c.ad(d5.G("tonemap_mode")))
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
q.k(0,"postQuantizationBits",B.c.ad(d5.G("post_quantization_bits")))
q.k(0,"postVhsChroma",d5.G("post_vhs_chroma"))
q.k(0,"postVhsNoise",d5.G("post_vhs_noise"))
q.k(0,"contactLightBoost",d5.G("light_contact_boost"))
q.k(0,"debugViewMode",d5.e.b)
$.y.j().setAttribute("data-renderer-shader-overrides",B.i.ab(q,null))
if(d5.G(d3)>=0)a0=d5.G(d3)
c8.RG=B.c.D(a0,0,1)
c8.rx=B.c.D(d5.G(d0)>=0?d5.G(d0):b9,0,1)
q=$.Bq()
q.n0(0.0166,a0)
c0=q.f
c1=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
c2=c1>0.001
c3=c2?new A.M(p,f,e):new A.M(-p,d,-e)
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
c8.p4=new A.jY(B.iu,new A.bW(b6.c*0.08,b6.b*0.08,b6.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),(0.04+a2*0.08+b8*0.02)*q,(0.0015+a2*0.014+b8*0.003)*d5,new A.bW(b2.c,b2.b,b2.a),Math.max(0.045,b5*(c2?c1:1)*b7),new A.o3(c3,c5,b4),s,r)},
fa(a,b){var s=A.Gt(a,b),r=A.Gr(a,b),q=A.H(s.c,t.i)
B.a.M(q,r)
return A.c([new A.h1("wall",new Float32Array(A.a2(q))),new A.h1("floor",s.a),new A.h1("ceiling",s.b)],t.pv)},
eZ(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.M(q,p,a[o]))}if(n.length===0)throw A.b(A.j("house surface mesh cannot be empty"))
return new A.ch(B.aa,a,null,A.b1(n))},
j5(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fa(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.j("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.q()
k=k.w
if(k==null)k=A.h(A.j("renderer is not initialized"))
j=b.eZ(l.b)
i=l.a
if(k.x)A.h(A.j("resource library is disposed"))
h=k.a
j.C()
g=h.b.aD(j,n+i)
f=g.a
h.c.k(0,f,h.bh(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bA(g,i,B.u,-1,B.R,B.a9,!0,!0,0,null)
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
j=B.u.a9()
k=k.gar()
h=A.C(k)
A.b1(new A.I(k,h.i("M(1)").a(j.gaA()),h.i("I<1,M>")))
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
jx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.L(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cx(l,l.r,l.e,A.o(l).i("cx<1,2>")),k=n+":",n+=".";l.m();){j=l.d
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
j8(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cY(new Float32Array(5376))
g=this.j7(a0.b)
r=new A.k(d,b,f)
q=new A.k(e,b,f)
p=new A.k(e,c,f)
o=new A.k(d,c,f)
n=new A.k(d,b,a)
m=new A.k(e,b,a)
l=new A.k(e,c,a)
k=new A.k(d,c,a)
s.aH(q,r,o,p,g)
s.aH(n,m,l,k,g)
s.aH(r,n,k,o,g)
s.aH(m,q,p,l,g)
s.aH(r,q,m,n,g)
s.aH(o,k,l,p,g)
j=B.t.aU(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.M(e,d,j[c]))}return new A.ch(B.aa,j,null,A.b1(g))},
j7(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dh(a){var s
A:{if(0===a){s=B.kQ
break A}if(1===a){s=B.kS
break A}if(2===a){s=B.kY
break A}if(3===a){s=B.l5
break A}if(4===a){s=B.l6
break A}if(5===a){s=B.kW
break A}if(6===a){s=B.l4
break A}if(7===a){s=B.l0
break A}s=B.l3
break A}return s},
dl(a){var s
A:{if("architecture"===a){s=B.kR
break A}if("furniture"===a){s=B.du
break A}if("fixture"===a){s=B.l_
break A}if("service"===a){s=B.l1
break A}if("story"===a){s=B.kZ
break A}if("decor"===a){s=B.kU
break A}if("micro"===a){s=B.kX
break A}s=B.du
break A}return s},
cK(a){return this.lU(t.G.a(a))},
lU(a){var s=0,r=A.bh(t.H),q,p=this,o,n,m,l
var $async$cK=A.bi(function(b,c){if(b===1)return A.bd(c,r)
for(;;)switch(s){case 0:if(!p.au){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.iE[n]
l=a.h(0,m)
if(l!=null)o.push(p.cr(m,l))}s=3
return A.ae(A.os(o,t.H),$async$cK)
case 3:case 1:return A.be(q,r)}})
return A.bf($async$cK,r)},
cr(a,b){return this.jb(a,b)},
jb(a,b){var s=0,r=A.bh(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
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
h=h.gb8()
f=new Uint8Array(A.a2(j))
if(h.x)A.h(A.j("resource library is disposed"))
h.c.n1(d,f)
h=n.e.gb8()
if(h.x)A.h(A.j("resource library is disposed"))
h.c.ly(d)
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
case 6:case 1:return A.be(q,r)
case 2:return A.bd(o.at(-1),r)}})
return A.bf($async$cr,r)},
dr(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.au||i.k1.a===0)return
s=i.k1
r=A.o(s).i("K<1,2>")
r=A.kl(new A.K(s,r),r.i("bN(n.E)").a(new A.tX()),r.i("n.E"),t.jP)
q=A.H(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.q()
p=s.gb8().gfj().cO(q)
s=p.a
o=A.c(s.slice(0),A.C(s))
B.a.V(o,new A.tY())
s=A.C(o)
r=s.i("e(1)")
s=s.i("I<1,e>")
n=new A.I(o,r.a(new A.tZ()),s).Y(0,",")
m=new A.I(o,r.a(new A.u_()),s).Y(0,",")
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
s.push(new A.cS(p,o,B.b.p(p,"wall")?2:1))}r=j.e
r===$&&A.q()
r=r.gb8()
n=r.e
if(n===$){p=r.gfj()
r.e!==$&&A.xQ()
n=r.e=new A.pT(p)}m=n.cO(s)
s=m.a
l=A.c(s.slice(0),A.C(s))
B.a.V(l,new A.tV())
s=A.C(l)
k=new A.I(l,s.i("e(1)").a(new A.tW()),s.i("I<1,e>")).Y(0,",")
s=$.y.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cp(B.bn)+";pending="+m.cp(B.d8)+";missing="+m.cp(B.d9)+";evicted="+m.cp(B.da))},
bU(a,b){return new A.bA(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eM(a,b,c){var s,r,q,p,o,n=A.Gq(a,b,c),m=n.length
if(m===0)throw A.b(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.M(q,p,n[o]))}return new A.ch(B.aa,n,null,A.b1(s))},
jt(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.W.j().aF(a),k=a.d,j=k.a,i=k.b,h=k.c
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
o.aH(k[0],k[1],k[2],k[3],g)
n=B.t.aU(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.M(r,q,n[p]))}return new A.ch(B.aa,n,null,A.b1(k))},
iw(a,b){var s,r,q,p=a.e,o=A.o(p).i("K<1,2>"),n=A.H(new A.K(p,o),o.i("n.E"))
B.a.V(n,new A.tR())
p=$.y.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.I(o,s.i("i(1)").a(new A.tS()),s.i("I<1,i>")).Y(0,":")+";spots="+new A.I(r,q.i("i(1)").a(new A.tT()),q.i("I<1,i>")).Y(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.I(n,q.i("e(1)").a(new A.tU()),q.i("I<1,e>")).Y(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
jA(a){var s,r=this.e
r===$&&A.q()
r=r.gb8()
if(r.x)A.h(A.j("resource library is disposed"))
a.C()
s=r.b.a.aD(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iyU:1}
A.u0.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:44}
A.u1.prototype={
$1(a){var s=this.a.dx.h(0,A.p(a))
s.toString
return s},
$S:24}
A.u2.prototype={
$1(a){var s,r,q,p
A.p(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:24}
A.tX.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bN(s,a.b,r)},
$S:159}
A.tY.prototype={
$2(a,b){var s=t.d
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:160}
A.tZ.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:45}
A.u_.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:45}
A.tV.prototype={
$2(a,b){var s=t.wl
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:162}
A.tW.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:163}
A.tR.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:164}
A.tS.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tT.prototype={
$1(a){return t.p.a(a).a},
$S:34}
A.tU.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:166}
A.lQ.prototype={}
A.iJ.prototype={
fI(a,b){var s=this,r=b==null?s.d:b
return new A.iJ(s.a,s.b,s.c,r,a)},
kF(a){return this.fI(a,null)}}
A.tv.prototype={
gag(){return this.b},
gaR(){return this.c}}
A.us.prototype={
$2(a,b){var s
A.xy(a,A.v(b))
switch(a){case"master":s=$.bg
if(s!=null)s.hC(b)
break
case"voice":s=$.bg
if(s!=null)s.hE(b)
break
case"effects":s=$.bg
if(s!=null)s.hB(b)
break
case"ambience":s=$.bg
if(s!=null)s.hA(b)
break
case"music":s=$.bg
if(s!=null)s.hD(b)
break}},
$S:31}
A.ut.prototype={
$1(a){var s
A.xy("muted",""+a)
s=$.bg
if(s!=null)s.ec(a)},
$S:8}
A.uu.prototype={
$1(a){var s
A.xy("mono",""+a)
s=$.bg
if(s!=null)s.cZ(a)},
$S:8}
A.uA.prototype={
$2(a,b){A.xz(a,A.v(b))
A.zI(a,b)},
$S:31}
A.uB.prototype={
$1(a){var s="high-contrast"
A.xz(s,""+a)
A.ug(s,a)},
$S:8}
A.uC.prototype={
$1(a){var s="strong-highlights"
A.xz(s,""+a)
A.ug(s,a)},
$S:8}
A.uD.prototype={
$1(a){$.d9().mC(a)
A.vf()
A.zK()},
$S:168}
A.uE.prototype={
$0(){var s=$.d9()
s.a=A.dt(null,1)
s.b=A.dt(null,1)
A.vf()
A.zK()},
$S:0}
A.uF.prototype={
$0(){A.dG(this.a)},
$S:0}
A.uG.prototype={
$0(){this.a.a8()},
$S:0}
A.uH.prototype={
$0(){A.dG(this.a)},
$S:0}
A.uv.prototype={
$0(){A.he(this.a)},
$S:0}
A.uw.prototype={
$1(a){$.j7=a
A.Ad()
A.x1()},
$S:169}
A.ux.prototype={
$1(a){var s=$.cG()
$.xe=a
if(!s.Q&&a.Q){$.bb.j().a=1
$.bb.j().he(7)
$.at.j().fX()
$.cp().N(0)}A.Af()
A.zJ()},
$S:170}
A.uy.prototype={
$1(a){$.eo=a
A.xm()
A.mg()},
$S:171}
A.uz.prototype={
$0(){$.eo=B.ap
$.fc.j().e9($.eo)
A.xm()
A.mg()},
$S:0}
A.up.prototype={
$1(a){var s,r=A.AP(a,A.A0())
$.j8=A.fE($.jj().b,a)
s=r.b
$.en.j().cj(a,$.jj().b,s)
$.y.j().setAttribute("data-graphics-fallback",B.a.Y(s,"|"))
$.A1=A.mi(a,r,$.A1)},
$S:172}
A.uq.prototype={
$0(){A.dG($.en.j())},
$S:0}
A.ur.prototype={
$0(){A.dG($.en.j())},
$S:0}
A.ul.prototype={
$1(a){},
$S:22}
A.um.prototype={
$1(a){var s,r
$.xa=a
$.ad.j().ea(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.dT()
s.be()
A.Ae()},
$S:173}
A.un.prototype={
$0(){A.dG($.j_.j())},
$S:0}
A.uo.prototype={
$0(){A.dG($.j_.j())},
$S:0}
A.v8.prototype={
$0(){$.vp=A.Q(this.a.matches)
$.xD=A.Q(this.b.matches)
A.mg()},
$S:0}
A.v6.prototype={
$1(a){return this.a.$0()},
$S:2}
A.v7.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vL.prototype={
$1(a){var s
try{A.ym(this.b,a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.z)return!1
else throw s}},
$S:174}
A.vM.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j6.j()
break
case 5:p=$.fc.j()
break
case 1:p=$.en.j()
break
case 4:p=$.h7.j()
break
case 2:p=$.j1.j()
break
case 3:p=$.j_.j()
break}s=p
r=null
switch(o){case 0:r=B.km
break
case 5:r=B.kr
break
case 1:r=B.kn
break
case 4:r=B.kq
break
case 2:r=B.ko
break
case 3:r=B.kp
break}q=r
p=B.d4.h(0,a)
p.toString
A.xl(s,q,p)},
$S:175}
A.vN.prototype={
$0(){A.dG($.h8.j())},
$S:0}
A.vY.prototype={
$0(){return A.dG($.h8.j())},
$S:0}
A.w6.prototype={
$0(){$.cm.j().a8()},
$S:0}
A.w7.prototype={
$0(){$.cm.j().a8()},
$S:0}
A.w8.prototype={
$0(){A.xl($.h8.j(),B.dd,"pause.settings")},
$S:0}
A.w9.prototype={
$0(){$.cm.j().a8()
A.jd($.j2.j())},
$S:0}
A.wa.prototype={
$0(){A.mt("saved")},
$S:0}
A.wb.prototype={
$0(){$.cm.j().a8()
A.jd($.j2.j())},
$S:0}
A.wc.prototype={
$0(){A.xl($.md.j(),B.ks,"pause.credits")},
$S:0}
A.vO.prototype={
$0(){return A.he($.cm.j())},
$S:0}
A.vP.prototype={
$0(){return A.he($.j3.j())},
$S:0}
A.vQ.prototype={
$2(a,b){var s,r
if($.at.j().y){s=$.aE.j().gc_()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.EI(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cQ,a)
A.EH(B.cQ[a])}}},
$S:176}
A.vR.prototype={
$2(a,b){var s,r,q,p,o,n
if($.U.j().gaa().a===21){A.Al(!1)
return}s=$.W.j().r.b
$.U.j().hT(a,b,$.az)
r=$.W.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e7()
if(typeof n!=="number")return A.vG(n)
if(!(o<n))break
if($.W.b===$.W)A.h(A.a5(""))
p=B.a.h(B.J,q).b
o=$.aR
if(o!=null){n=$.W.b
if(n===$.W)A.h(A.a5(""))
o.cR(n,p)}o=q
if(typeof o!=="number")return o.aj()
q=o+1}A.mt("saved after sleep")},
$S:177}
A.vS.prototype={
$0(){return A.he($.mf.j())},
$S:0}
A.vT.prototype={
$0(){return A.he($.j2.j())},
$S:0}
A.vU.prototype={
$0(){return A.dG($.md.j())},
$S:0}
A.vV.prototype={
$0(){A.he($.j0.j())},
$S:0}
A.vW.prototype={
$0(){A.he($.j0.j())},
$S:0}
A.vX.prototype={
$1(a){return A.Ak()},
$S:2}
A.vZ.prototype={
$1(a){if(A.p(A.a(v.G.document).visibilityState)==="hidden")A.FG()},
$S:1}
A.w_.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.p(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.hn()
o=!p.a
p.a=o
if(o)A.ps(A.a(v.G.document),"exitPointerLock",t.X)
else $.ad.j().cS($.y.j())
return}p=$.hn()
if(p.a&&!A.Q(m.repeat)){if(A.p(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ad.j().cS($.y.j())
return}if(A.p(m.code)==="ArrowUp"||A.p(m.code)==="KeyW"){m.preventDefault()
n=p.gbk().length
if(n>0)p.c=B.d.T(p.c-1+n,n)
o=$.er
if(o!=null){p=p.gbk().length
o.a.cY(-1,p)}return}if(A.p(m.code)==="ArrowDown"||A.p(m.code)==="KeyS"){m.preventDefault()
n=p.gbk().length
if(n>0)p.c=B.d.T(p.c+1,n)
o=$.er
if(o!=null){p=p.gbk().length
o.a.cY(1,p)}return}if(A.p(m.code)==="ArrowLeft"||A.p(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d_[B.d.T(p.e.a-1+7,7)]
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
if(A.Q(m.shiftKey))p.mB()
else p.mD()
return}if(B.b.S(A.p(m.code),"Digit")||B.b.S(A.p(m.code),"Numpad")){o=A.p(m.code)
o=A.xP(o,"Digit","")
s=A.xP(o,"Numpad","")
r=A.dq(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.at.j().y&&!A.Q(m.repeat))if($.cp().lD(A.p(m.code))){m.preventDefault()
return}if(A.p(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.bc
if(p==null)A.jd($.cm.j())
else p.a8()
return}q=$.bc==null&&!p.a
if(!A.Q(m.repeat)&&q)$.fd.j().fT(new A.kN(A.p(m.code),!0,1))
if(A.p(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.Bi())$.mq=!$.mq
if((A.p(m.code)==="KeyJ"||A.p(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.at.j().y){m.preventDefault()
A.jg($.j3.j())}if(A.p(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.at.j().y)A.jg($.mf.j())
if(A.p(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.at.j().y)A.jg($.j2.j())
if(A.p(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.at.j().y)A.jg($.j5.j())
if(A.p(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mt("saved")},
$S:1}
A.w0.prototype={
$1(a){var s=A.a(a)
if($.bc==null)$.fd.j().fT(new A.kN(A.p(s.code),!1,0))},
$S:1}
A.w1.prototype={
$1(a){return A.zM()},
$S:2}
A.w2.prototype={
$1(a){return A.zM()},
$S:2}
A.w3.prototype={
$1(a){return A.F9(A.a(a))},
$S:2}
A.w4.prototype={
$1(a){var s=A.a(a)
if($.at.j().y){s.preventDefault()
A.F8(s)
return}$.ad.j().cS($.y.j())},
$S:1}
A.w5.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hn()
if(!o.a||$.er==null)return
p.preventDefault()
s=o.gbk()
r=A.a6(p.deltaY)>0?1:-1
o=$.er
o.toString
q=J.cH(s)
o.a.cY(A.f(r),q)},
$S:1}
A.v9.prototype={
$1(a){var s=A.p(A.a(a).message)
A.vi(s,null)},
$S:1}
A.va.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.vi("unhandled rejection: "+A.v(s==null?A.p(a.type):s),null)},
$S:1}
A.ve.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:42}
A.vn.prototype={
$0(){this.a.className=""},
$S:14}
A.vr.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:41}
A.vc.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:25}
A.vj.prototype={
$1(a){return t.g.a(a).e},
$S:18}
A.vg.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.vh.prototype={
$1(a){return t.fW.a(a).w},
$S:27};(function aliases(){var s=J.e3.prototype
s.i_=s.q
s=A.n.prototype
s.hZ=s.cW
s=A.i2.prototype
s.i0=s.bH})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Fg","CD",32)
r(J.r.prototype,"gaq","p",11)
q(A,"Fu","CV",29)
r(A.aM.prototype,"gaq","p",11)
p(A.cf.prototype,"gkz","R",11)
o(A,"Gm","DO",20)
o(A,"Gn","DP",20)
o(A,"Go","DQ",20)
q(A,"AB","G3",0)
r(A.ck.prototype,"gaq","p",11)
r(A.fZ.prototype,"gaq","p",11)
o(A,"Gx","ER",15)
p(A.kn.prototype,"gmI","mJ",81)
var n
p(n=A.l5.prototype,"gmE","mF",9)
p(n,"gmM","mN",9)
p(n,"gmO","mP",9)
p(n,"gmG","mH",9)
p(n,"gmK","mL",9)
q(A,"AG","DT",179)
q(A,"I0","wG",44)
p(A.dm.prototype,"gaA","hg",58)
p(n=A.ka.prototype,"gjd","je",2)
p(n,"gjf","jg",2)
p(n,"gjj","jk",2)
p(n,"gjn","jo",2)
p(n,"gjp","jq",2)
p(n,"gjl","jm",2)
p(n,"gjh","ji",2)
o(A,"GT","zS",15)
o(A,"GX","zR",15)
o(A,"GM","CA",180)
o(A,"GN","CB",181)
o(A,"H0","Cu",182)
p(A.i2.prototype,"gjr","js",2)
p(A.fU.prototype,"gj3","j4",132)
p(A.li.prototype,"glP","lQ",23)
o(A,"AO","FJ",183)
q(A,"AN","EO",0)
o(A,"GQ","EJ",122)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.J,null)
q(A.J,[A.wy,J.kc,A.ic,J.ew,A.n,A.hr,A.ao,A.Y,A.r_,A.aC,A.hT,A.T,A.hC,A.hz,A.is,A.av,A.eb,A.bQ,A.fJ,A.ft,A.dU,A.f8,A.ds,A.rZ,A.q9,A.hA,A.iN,A.a7,A.pM,A.cg,A.ag,A.cx,A.hL,A.lM,A.ls,A.ik,A.m3,A.tw,A.cB,A.lF,A.m6,A.u6,A.lt,A.c5,A.b2,A.lx,A.dA,A.as,A.lu,A.m1,A.iY,A.iA,A.lL,A.f9,A.iD,A.iS,A.m7,A.eA,A.jH,A.tP,A.u9,A.eB,A.dV,A.lC,A.kx,A.ii,A.tx,A.z,A.N,A.ar,A.m4,A.rK,A.bp,A.iU,A.t0,A.lZ,A.q8,A.lI,A.ei,A.qB,A.e8,A.kE,A.nG,A.nH,A.nJ,A.nI,A.kD,A.fp,A.jY,A.om,A.dr,A.k6,A.bW,A.o3,A.kC,A.bD,A.e5,A.bE,A.t4,A.ch,A.jK,A.qa,A.kF,A.kO,A.bA,A.l2,A.i9,A.aH,A.oo,A.cS,A.bX,A.pV,A.pT,A.kn,A.l9,A.q0,A.bN,A.c0,A.rU,A.rS,A.d5,A.l5,A.eK,A.jW,A.jX,A.on,A.ol,A.h0,A.aw,A.bl,A.aJ,A.P,A.ht,A.kH,A.bo,A.qD,A.b6,A.qF,A.qE,A.lH,A.i8,A.qP,A.ty,A.m5,A.u5,A.lS,A.lE,A.lW,A.lP,A.tK,A.bK,A.bI,A.aO,A.nZ,A.nY,A.jm,A.eN,A.op,A.dm,A.kJ,A.l6,A.M,A.hq,A.lv,A.jz,A.lw,A.jM,A.lz,A.hx,A.lA,A.jP,A.lB,A.k5,A.lG,A.hV,A.lN,A.fn,A.jA,A.wH,A.i4,A.lT,A.kI,A.lU,A.eX,A.kW,A.lX,A.kX,A.lY,A.kZ,A.m0,A.kY,A.m_,A.ld,A.m8,A.ia,A.lo,A.mb,A.nE,A.k1,A.k3,A.hF,A.ig,A.x,A.jN,A.fN,A.oL,A.el,A.cV,A.fz,A.to,A.dB,A.iX,A.iW,A.ma,A.m9,A.ud,A.tk,A.tn,A.jO,A.jt,A.h3,A.mY,A.mG,A.ho,A.mU,A.wu,A.n5,A.n_,A.it,A.fo,A.nB,A.ok,A.ka,A.pk,A.po,A.aU,A.pI,A.pF,A.o_,A.pO,A.cY,A.k,A.l_,A.lp,A.nu,A.jQ,A.o9,A.fA,A.bt,A.kB,A.qv,A.fT,A.qT,A.eU,A.k_,A.oz,A.oy,A.jv,A.dL,A.dN,A.dP,A.dM,A.dO,A.jB,A.ko,A.cD,A.lq,A.hI,A.p2,A.a0,A.jT,A.k7,A.p3,A.jU,A.d4,A.jV,A.eh,A.eD,A.qQ,A.eg,A.p0,A.od,A.rG,A.p5,A.cR,A.cv,A.pr,A.pp,A.pq,A.dp,A.p9,A.f2,A.bZ,A.eY,A.eT,A.pc,A.cQ,A.p1,A.eJ,A.pb,A.cP,A.pg,A.i3,A.hS,A.bm,A.ti,A.kk,A.bT,A.pu,A.hp,A.nr,A.i5,A.qu,A.qq,A.qp,A.qr,A.qs,A.qt,A.kj,A.qA,A.qN,A.kN,A.qM,A.qO,A.rB,A.ea,A.rC,A.fV,A.o0,A.tp,A.f3,A.jF,A.pi,A.pm,A.qR,A.cW,A.qS,A.k0,A.f1,A.tj,A.ow,A.jZ,A.q3,A.cK,A.by,A.qn,A.rM,A.f0,A.f_,A.ir,A.ll,A.eQ,A.d1,A.rL,A.id,A.kT,A.kQ,A.kR,A.kS,A.rP,A.jn,A.wt,A.dJ,A.mQ,A.dK,A.nt,A.b3,A.nC,A.fu,A.dd,A.jG,A.i2,A.o4,A.oF,A.oH,A.fC,A.dZ,A.oX,A.oO,A.oP,A.ca,A.oY,A.cU,A.fq,A.qc,A.dn,A.e6,A.bY,A.qh,A.qz,A.b_,A.rw,A.rA,A.cq,A.mN,A.li,A.th,A.dy,A.br,A.c3,A.bO,A.lk,A.jp,A.lh,A.h1,A.lR,A.lQ,A.iJ,A.tv])
q(J.kc,[J.ke,J.hK,J.hN,J.hM,J.hO,J.fF,J.e1])
q(J.hN,[J.e3,J.r,A.fM,A.hZ])
q(J.e3,[J.kA,J.eZ,J.e2])
r(J.kd,A.ic)
r(J.pt,J.r)
q(J.fF,[J.hJ,J.kf])
q(A.n,[A.ef,A.R,A.cy,A.G,A.hB,A.dz,A.f7,A.lr,A.m2,A.bR])
q(A.ef,[A.ez,A.iZ])
r(A.iy,A.ez)
r(A.iw,A.iZ)
r(A.aV,A.iw)
q(A.ao,[A.fG,A.dw,A.kg,A.l8,A.kP,A.lD,A.hQ,A.jr,A.cr,A.io,A.l7,A.fW,A.jE])
r(A.fY,A.Y)
r(A.de,A.fY)
q(A.R,[A.a1,A.ac,A.am,A.K,A.f6,A.iC])
q(A.a1,[A.il,A.I,A.eS,A.lK])
r(A.df,A.cy)
q(A.bQ,[A.ej,A.ek])
q(A.ej,[A.aP,A.fb,A.iK])
q(A.ek,[A.ay,A.b0,A.iL])
r(A.h5,A.fJ)
r(A.ec,A.h5)
r(A.hu,A.ec)
q(A.dU,[A.jD,A.jC,A.l4,A.vH,A.vJ,A.ts,A.tr,A.uh,A.ot,A.tI,A.tL,A.pP,A.tN,A.we,A.wf,A.vA,A.qC,A.t5,A.pY,A.pZ,A.q_,A.qb,A.pW,A.pX,A.q1,A.rV,A.rW,A.rY,A.oh,A.of,A.og,A.qe,A.qf,A.qK,A.qJ,A.qI,A.qH,A.qG,A.qL,A.uZ,A.v_,A.qV,A.qW,A.wl,A.wj,A.oq,A.pR,A.vx,A.oM,A.oN,A.tl,A.tm,A.n7,A.na,A.n9,A.nb,A.mZ,A.mH,A.mI,A.mJ,A.mW,A.mX,A.mV,A.pl,A.pG,A.oc,A.oA,A.oC,A.oD,A.oE,A.nc,A.nd,A.ne,A.nf,A.ng,A.ni,A.nj,A.nk,A.nl,A.nm,A.nn,A.no,A.nh,A.vw,A.np,A.nq,A.vd,A.vu,A.nF,A.oe,A.p4,A.wm,A.v3,A.v2,A.uf,A.vm,A.ph,A.rH,A.p8,A.p6,A.vt,A.pd,A.pf,A.vs,A.o8,A.pL,A.pB,A.vl,A.rF,A.rE,A.rD,A.o1,A.o2,A.ov,A.qo,A.qY,A.qZ,A.rQ,A.rR,A.mF,A.mD,A.n2,A.n3,A.nw,A.nA,A.nz,A.ny,A.nS,A.nR,A.nT,A.nU,A.nV,A.nQ,A.nL,A.nM,A.nX,A.o5,A.o6,A.o7,A.ob,A.oG,A.oI,A.oJ,A.oV,A.oS,A.oT,A.oU,A.oR,A.oQ,A.p_,A.pw,A.px,A.py,A.qi,A.qj,A.qk,A.rr,A.rs,A.rj,A.rk,A.ri,A.rl,A.r3,A.rm,A.rn,A.ro,A.rh,A.r9,A.ra,A.rb,A.rc,A.rd,A.re,A.rf,A.rg,A.r8,A.r4,A.r5,A.r6,A.r7,A.rq,A.rp,A.ry,A.rJ,A.mP,A.tf,A.te,A.tg,A.ta,A.td,A.t8,A.t7,A.vD,A.t6,A.mK,A.mL,A.mM,A.u1,A.u2,A.tX,A.tZ,A.u_,A.tW,A.tS,A.tT,A.tU,A.ut,A.uu,A.uB,A.uC,A.uD,A.uw,A.ux,A.uy,A.up,A.ul,A.um,A.v6,A.v7,A.vL,A.vM,A.vX,A.vZ,A.w_,A.w0,A.w1,A.w2,A.w3,A.w4,A.w5,A.v9,A.va,A.ve,A.vr,A.vj,A.vg,A.vh])
q(A.jD,[A.nK,A.pC,A.vI,A.ui,A.vv,A.ou,A.tJ,A.pN,A.pQ,A.tQ,A.t2,A.t1,A.wg,A.pU,A.q2,A.rT,A.rX,A.oi,A.qX,A.wk,A.wi,A.n8,A.n0,A.n1,A.pH,A.oB,A.vo,A.pa,A.pK,A.pn,A.ox,A.q5,A.q6,A.q7,A.rN,A.rO,A.nD,A.pz,A.pA,A.mO,A.tb,A.t9,A.tY,A.tV,A.tR,A.us,A.uA,A.vQ,A.vR,A.vc])
q(A.ft,[A.a4,A.cN])
q(A.ds,[A.hv,A.iM,A.iT])
r(A.aM,A.hv)
q(A.jC,[A.qw,A.tt,A.tu,A.u7,A.or,A.tz,A.tE,A.tD,A.tB,A.tA,A.tH,A.tG,A.tF,A.u4,A.vk,A.ub,A.ua,A.uY,A.uR,A.uS,A.uX,A.uM,A.uO,A.uN,A.uW,A.uK,A.uL,A.uT,A.uU,A.uV,A.uQ,A.uP,A.v1,A.vy,A.p7,A.pe,A.v4,A.mE,A.mS,A.mR,A.n4,A.nO,A.nP,A.nN,A.oK,A.oW,A.qm,A.r1,A.r2,A.rt,A.ru,A.rv,A.rz,A.tc,A.u0,A.uE,A.uF,A.uG,A.uH,A.uv,A.uz,A.uq,A.ur,A.un,A.uo,A.v8,A.vN,A.vY,A.w6,A.w7,A.w8,A.w9,A.wa,A.wb,A.wc,A.vO,A.vP,A.vS,A.vT,A.vU,A.vV,A.vW,A.vn])
r(A.i0,A.dw)
q(A.l4,[A.l0,A.fm])
q(A.a7,[A.cf,A.iz,A.lJ])
r(A.hP,A.cf)
r(A.fL,A.fM)
q(A.hZ,[A.kp,A.b5])
q(A.b5,[A.iF,A.iH])
r(A.iG,A.iF)
r(A.hX,A.iG)
r(A.iI,A.iH)
r(A.hY,A.iI)
q(A.hX,[A.hW,A.kq])
q(A.hY,[A.kr,A.ks,A.kt,A.ku,A.kv,A.eM,A.i_])
r(A.h4,A.lD)
r(A.iu,A.lx)
r(A.lV,A.iY)
r(A.iB,A.iz)
r(A.ck,A.iM)
r(A.fZ,A.iT)
q(A.eA,[A.jw,A.jR,A.kh])
q(A.jH,[A.ns,A.pE,A.pD,A.t3])
r(A.ki,A.hQ)
r(A.tO,A.tP)
r(A.lc,A.jR)
q(A.cr,[A.fP,A.k9])
r(A.ly,A.iU)
q(A.lC,[A.eP,A.fw,A.fs,A.eI,A.jq,A.hU,A.d_,A.fS,A.fy,A.jy,A.hs,A.fx,A.eR,A.eL,A.dv,A.eE,A.ce,A.ib,A.cO,A.fR,A.ih,A.fB,A.iv,A.ix,A.k2,A.hD,A.hG,A.k4,A.eH,A.hE,A.eW,A.cZ,A.fr,A.fD,A.h2,A.jx,A.ey,A.jI,A.jL,A.b7,A.ju,A.cc,A.eG,A.eC,A.dY,A.dX,A.dW,A.e_,A.kz,A.kM,A.fQ,A.cC,A.du,A.bM,A.bC,A.kb,A.f4,A.cj,A.cI,A.cs,A.cJ,A.dc,A.db,A.dR,A.dS,A.dQ,A.ex,A.di,A.cL,A.cM,A.dj,A.dh,A.dk,A.cd,A.dg,A.ct,A.jo,A.bn,A.ci,A.e7,A.cA,A.bL,A.bB,A.ie,A.bJ,A.c1,A.c2,A.ee,A.d0])
q(A.dr,[A.bx,A.b8,A.cz,A.ky,A.cu])
r(A.qU,A.lW)
r(A.lm,A.m9)
r(A.iE,A.d4)
q(A.i2,[A.hw,A.nW,A.oa,A.hH,A.oZ,A.pv,A.ql,A.r0,A.fU,A.rI])
q(A.th,[A.lj,A.lO,A.b9,A.lg,A.le,A.iq,A.lf])
s(A.fY,A.eb)
s(A.iZ,A.Y)
s(A.iF,A.Y)
s(A.iG,A.av)
s(A.iH,A.Y)
s(A.iI,A.av)
s(A.h5,A.iS)
s(A.iT,A.m7)
s(A.lW,A.tK)
s(A.m9,A.ud)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",B:"double",bj:"num",e:"String",l:"bool",ar:"Null",F:"List",J:"Object",Z:"Map",af:"JSObject"},mangledNames:{},types:["~()","ar(J?)","~(J?)","l(e)","dl()","l(B)","0&()","l(@)","~(l)","dl(b8?)","l(aw)","l(J?)","i(bT,bT)","l(eQ)","ar()","@(@)","l(b_)","l(P)","l(bT)","~(@)","~(~())","l(ea)","ar(@)","l(bO)","e(e)","i(N<e,e>,N<e,e>)","l(bE)","l(f2)","e(dN)","i()","e(dL)","~(e,B)","i(@,@)","e(J?)","i(aU)","l(eh)","l(cI)","l(N<e,F<e>>)","@(e)","~(af)","l(ct)","l(by)","l(cd)","@()","l()","e(c0)","l(i)","~(J?,J?)","B(B,h3)","fn()","l(N<e,aH>)","aH(N<e,aH>)","aH(aH,aH)","i(aO<bK>,aO<bK>)","c_(aO<bK>)","i(aO<bI>,aO<bI>)","c_(aO<bI>)","eN(B,B,B,B)","M(M)","~(eX)","eX()","J?(J?)","ar(@,cX)","bU<ar>(N<e,e>)","l(F<e>)","i(e,e)","i(bZ,bZ)","i(+influence,light(B,bD),+influence,light(B,bD))","+effectiveScore,light,score(B,aU,B)(aU)","i(+effectiveScore,light,score(B,aU,B),+effectiveScore,light,score(B,aU,B))","l(cc)","~(i,@)","~(J,cX)","ar(J,cX)","l(eT)","dL(J?)","dN(J?)","dM(J?)","dO(J?)","l(bX)","i(cS,cS)","e5(cz)","e(dM)","e(dO)","e(dP)","cz(i,i,e?)","dX(e)","dP(J?)","bx(i,i,e?)","l(eY)","e(i,a0,a0,a0)","i(d4,d4)","i(i,+(bx,ch))","l(eg)","i(i)","l(bZ)","l(cv)","l(cR)","~(@,@)","i(dp,dp)","l(cQ)","N<e,e>(e,@)","e?(e)","l(c0)","l(bM)","l(bC)","f1()","i(bN,bN)","ar(~())","i(N<e,cK>,N<e,cK>)","b8(i,i,e?)","N<i,@>(i,f0)","N<i,@>(i,f_)","l(im?)","l(N<@,@>)","N<e,e>(N<@,@>)","l?(J?)","i(i,+(b8,d5))","e()","0^(n<0^>,J?)<J?>","B(B,e)","e(aw)","~(i)","~(B)","i(aa,aa)","@(@,e)","ar(af)","0^(e,n<0^>)<D>","Z<e,e>(Z<e,e>,e)","Z<e,J?>(dn)","e(bn)","l(bn)","l(bB)","cu(i,i,e?)","l(di)","l(cL)","l(cM)","l(dj)","l(dh)","l(dk)","l(dg)","ia(bx)","l(cs)","l(cJ)","l(dc)","l(db)","e(cq)","i(cq,cq)","dl(e{fallback:e?})","i(bO,bO)","F<d1>()","l(d1)","l(N<e,e>)","i(c3,c3)","Z<e,@>(bO)","l(c2)","l(c1)","l(bJ)","0&(e,i?)","bN(N<e,b8>)","i(c0,c0)","bD?()","i(bX,bX)","e(bX)","i(N<i,e>,N<i,e>)","F<bD>()","e(N<i,e>)","fp()","~(bB)","~(dK)","~(fC)","~(dJ)","~(dZ)","~(fu)","l(fT)","~(bL)","~(i,e)","~(bM,bC)","B()","h0()","cR(J?)","cv(J?)","cQ(J?)","~(bj)","F<e>(F<e>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aP&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fb&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iK&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iL&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.E9(v.typeUniverse,JSON.parse('{"e2":"e3","kA":"e3","eZ":"e3","Hj":"fM","r":{"F":["1"],"R":["1"],"af":[],"n":["1"]},"ke":{"l":[],"ai":[]},"hK":{"ar":[],"ai":[]},"hN":{"af":[]},"e3":{"af":[]},"kd":{"ic":[]},"pt":{"r":["1"],"F":["1"],"R":["1"],"af":[],"n":["1"]},"ew":{"a9":["1"]},"fF":{"B":[],"bj":[],"b4":["bj"]},"hJ":{"B":[],"i":[],"bj":[],"b4":["bj"],"ai":[]},"kf":{"B":[],"bj":[],"b4":["bj"],"ai":[]},"e1":{"e":[],"b4":["e"],"qg":[],"ai":[]},"ef":{"n":["2"]},"hr":{"a9":["2"]},"ez":{"ef":["1","2"],"n":["2"],"n.E":"2"},"iy":{"ez":["1","2"],"ef":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"iw":{"Y":["2"],"F":["2"],"ef":["1","2"],"R":["2"],"n":["2"]},"aV":{"iw":["1","2"],"Y":["2"],"F":["2"],"ef":["1","2"],"R":["2"],"n":["2"],"n.E":"2","Y.E":"2"},"fG":{"ao":[]},"de":{"Y":["i"],"eb":["i"],"F":["i"],"R":["i"],"n":["i"],"Y.E":"i","eb.E":"i"},"R":{"n":["1"]},"a1":{"R":["1"],"n":["1"]},"il":{"a1":["1"],"R":["1"],"n":["1"],"n.E":"1","a1.E":"1"},"aC":{"a9":["1"]},"cy":{"n":["2"],"n.E":"2"},"df":{"cy":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"hT":{"a9":["2"]},"I":{"a1":["2"],"R":["2"],"n":["2"],"n.E":"2","a1.E":"2"},"G":{"n":["1"],"n.E":"1"},"T":{"a9":["1"]},"hB":{"n":["2"],"n.E":"2"},"hC":{"a9":["2"]},"hz":{"a9":["1"]},"dz":{"n":["1"],"n.E":"1"},"is":{"a9":["1"]},"fY":{"Y":["1"],"eb":["1"],"F":["1"],"R":["1"],"n":["1"]},"eS":{"a1":["1"],"R":["1"],"n":["1"],"n.E":"1","a1.E":"1"},"aP":{"ej":[],"bQ":[]},"fb":{"ej":[],"bQ":[]},"iK":{"ej":[],"bQ":[]},"ay":{"ek":[],"bQ":[]},"b0":{"ek":[],"bQ":[]},"iL":{"ek":[],"bQ":[]},"hu":{"ec":["1","2"],"h5":["1","2"],"fJ":["1","2"],"iS":["1","2"],"Z":["1","2"]},"ft":{"Z":["1","2"]},"a4":{"ft":["1","2"],"Z":["1","2"]},"f7":{"n":["1"],"n.E":"1"},"f8":{"a9":["1"]},"cN":{"ft":["1","2"],"Z":["1","2"]},"hv":{"ds":["1"],"e9":["1"],"R":["1"],"n":["1"]},"aM":{"hv":["1"],"ds":["1"],"e9":["1"],"R":["1"],"n":["1"]},"i0":{"dw":[],"ao":[]},"kg":{"ao":[]},"l8":{"ao":[]},"iN":{"cX":[]},"dU":{"eF":[]},"jC":{"eF":[]},"jD":{"eF":[]},"l4":{"eF":[]},"l0":{"eF":[]},"fm":{"eF":[]},"kP":{"ao":[]},"cf":{"a7":["1","2"],"wA":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ac":{"R":["1"],"n":["1"],"n.E":"1"},"cg":{"a9":["1"]},"am":{"R":["1"],"n":["1"],"n.E":"1"},"ag":{"a9":["1"]},"K":{"R":["N<1,2>"],"n":["N<1,2>"],"n.E":"N<1,2>"},"cx":{"a9":["N<1,2>"]},"hP":{"cf":["1","2"],"a7":["1","2"],"wA":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"ej":{"bQ":[]},"ek":{"bQ":[]},"hL":{"D4":[],"qg":[]},"lM":{"i7":[],"fK":[]},"lr":{"n":["i7"],"n.E":"i7"},"ls":{"a9":["i7"]},"ik":{"fK":[]},"m2":{"n":["fK"],"n.E":"fK"},"m3":{"a9":["fK"]},"fL":{"af":[],"ai":[]},"eM":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"fM":{"af":[],"ai":[]},"hZ":{"af":[]},"kp":{"af":[],"ai":[]},"b5":{"bV":["1"],"af":[]},"hX":{"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"]},"hY":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"]},"hW":{"oj":[],"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"],"ai":[],"Y.E":"B","av.E":"B"},"kq":{"Y":["B"],"b5":["B"],"F":["B"],"bV":["B"],"R":["B"],"af":[],"n":["B"],"av":["B"],"ai":[],"Y.E":"B","av.E":"B"},"kr":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"ks":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"kt":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"ku":{"wO":[],"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"kv":{"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"i_":{"im":[],"Y":["i"],"b5":["i"],"F":["i"],"bV":["i"],"R":["i"],"af":[],"n":["i"],"av":["i"],"ai":[],"Y.E":"i","av.E":"i"},"lD":{"ao":[]},"h4":{"dw":[],"ao":[]},"c5":{"a9":["1"]},"bR":{"n":["1"],"n.E":"1"},"b2":{"ao":[]},"iu":{"lx":["1"]},"as":{"bU":["1"]},"iY":{"zh":[]},"lV":{"iY":[],"zh":[]},"iz":{"a7":["1","2"],"Z":["1","2"]},"iB":{"iz":["1","2"],"a7":["1","2"],"Z":["1","2"],"a7.K":"1","a7.V":"2"},"f6":{"R":["1"],"n":["1"],"n.E":"1"},"iA":{"a9":["1"]},"ck":{"ds":["1"],"yE":["1"],"e9":["1"],"R":["1"],"n":["1"]},"f9":{"a9":["1"]},"Y":{"F":["1"],"R":["1"],"n":["1"]},"a7":{"Z":["1","2"]},"iC":{"R":["2"],"n":["2"],"n.E":"2"},"iD":{"a9":["2"]},"fJ":{"Z":["1","2"]},"ec":{"h5":["1","2"],"fJ":["1","2"],"iS":["1","2"],"Z":["1","2"]},"ds":{"e9":["1"],"R":["1"],"n":["1"]},"iM":{"ds":["1"],"e9":["1"],"R":["1"],"n":["1"]},"fZ":{"ds":["1"],"m7":["1"],"e9":["1"],"R":["1"],"n":["1"]},"lJ":{"a7":["e","@"],"Z":["e","@"],"a7.K":"e","a7.V":"@"},"lK":{"a1":["e"],"R":["e"],"n":["e"],"n.E":"e","a1.E":"e"},"jw":{"eA":["F<i>","e"]},"jR":{"eA":["e","F<i>"]},"hQ":{"ao":[]},"ki":{"ao":[]},"kh":{"eA":["J?","e"]},"lc":{"eA":["e","F<i>"]},"eB":{"b4":["eB"]},"B":{"bj":[],"b4":["bj"]},"dV":{"b4":["dV"]},"i":{"bj":[],"b4":["bj"]},"F":{"R":["1"],"n":["1"]},"bj":{"b4":["bj"]},"i7":{"fK":[]},"e9":{"R":["1"],"n":["1"]},"e":{"b4":["e"],"qg":[]},"lC":{"D":[]},"jr":{"ao":[]},"dw":{"ao":[]},"cr":{"ao":[]},"fP":{"ao":[]},"k9":{"ao":[]},"io":{"ao":[]},"l7":{"ao":[]},"fW":{"ao":[]},"jE":{"ao":[]},"kx":{"ao":[]},"ii":{"ao":[]},"m4":{"cX":[]},"bp":{"Dk":[]},"iU":{"la":[]},"lZ":{"la":[]},"ly":{"la":[]},"lI":{"wI":[]},"ei":{"wI":[]},"eP":{"D":[]},"fw":{"D":[]},"fs":{"D":[]},"bx":{"dr":[]},"b8":{"dr":[]},"cz":{"dr":[]},"cu":{"dr":[]},"ky":{"dr":[]},"eI":{"D":[]},"jq":{"D":[]},"hU":{"D":[]},"d_":{"D":[]},"jK":{"Da":[]},"fS":{"D":[]},"fy":{"D":[]},"jy":{"D":[]},"hs":{"D":[]},"fx":{"D":[]},"eR":{"D":[]},"eL":{"D":[]},"dv":{"D":[]},"eE":{"D":[]},"ce":{"D":[]},"ib":{"D":[]},"cO":{"D":[]},"fR":{"D":[]},"i8":{"D7":[]},"lH":{"c_":[]},"m5":{"c_":[]},"lS":{"D6":[]},"lE":{"Ci":[]},"ih":{"D":[]},"bK":{"b4":["bK"]},"bI":{"b4":["bI"]},"fB":{"D":[]},"iv":{"D":[]},"hq":{"an":[]},"lv":{"aa":[]},"jz":{"an":[]},"lw":{"aa":[]},"jM":{"an":[]},"lz":{"aa":[]},"ix":{"D":[]},"hx":{"an":[]},"lA":{"aa":[]},"jP":{"an":[]},"lB":{"aa":[]},"k5":{"an":[]},"lG":{"aa":[]},"hV":{"an":[]},"lN":{"aa":[]},"jA":{"D5":[]},"i4":{"an":[]},"lT":{"aa":[]},"kI":{"an":[]},"lU":{"aa":[]},"kW":{"an":[]},"lX":{"aa":[]},"kX":{"an":[]},"lY":{"aa":[]},"kZ":{"an":[]},"m0":{"aa":[]},"kY":{"an":[]},"m_":{"aa":[]},"ld":{"an":[]},"m8":{"aa":[]},"lo":{"an":[]},"mb":{"aa":[]},"k2":{"D":[]},"hD":{"D":[]},"hG":{"D":[]},"k4":{"D":[]},"eH":{"D":[]},"hE":{"D":[]},"eW":{"D":[]},"cZ":{"D":[]},"fr":{"D":[]},"jN":{"C1":[]},"fD":{"D":[]},"h2":{"D":[]},"b7":{"D":[]},"jx":{"D":[]},"ey":{"D":[]},"jI":{"D":[]},"jL":{"D":[]},"dB":{"dl":[]},"lm":{"Cq":[]},"ju":{"D":[]},"cc":{"D":[]},"eG":{"D":[]},"iE":{"d4":[]},"eC":{"D":[]},"dY":{"D":[]},"dX":{"D":[]},"dW":{"D":[]},"e_":{"D":[]},"kz":{"D":[]},"kM":{"D":[]},"fQ":{"D":[]},"cC":{"D":[]},"du":{"D":[]},"bM":{"D":[]},"bC":{"D":[]},"kb":{"D":[]},"f4":{"D":[]},"cj":{"D":[]},"cI":{"D":[]},"cs":{"D":[]},"cJ":{"D":[]},"dc":{"D":[]},"db":{"D":[]},"dR":{"D":[]},"dS":{"D":[]},"ex":{"D":[]},"dQ":{"D":[]},"di":{"D":[]},"cL":{"D":[]},"cM":{"D":[]},"dj":{"D":[]},"dh":{"D":[]},"dk":{"D":[]},"cd":{"D":[]},"dg":{"D":[]},"ct":{"D":[]},"jo":{"D":[]},"bn":{"D":[]},"ci":{"D":[]},"e7":{"D":[]},"cA":{"D":[]},"bL":{"D":[]},"bB":{"D":[]},"ie":{"D":[]},"bJ":{"D":[]},"c1":{"D":[]},"c2":{"D":[]},"ee":{"D":[]},"d0":{"D":[]},"lR":{"yU":[]},"Cz":{"F":["i"],"R":["i"],"n":["i"]},"im":{"F":["i"],"R":["i"],"n":["i"]},"Dp":{"F":["i"],"R":["i"],"n":["i"]},"Cx":{"F":["i"],"R":["i"],"n":["i"]},"wO":{"F":["i"],"R":["i"],"n":["i"]},"Cy":{"F":["i"],"R":["i"],"n":["i"]},"Do":{"F":["i"],"R":["i"],"n":["i"]},"oj":{"F":["B"],"R":["B"],"n":["B"]},"Ch":{"F":["B"],"R":["B"],"n":["B"]}}'))
A.E8(v.typeUniverse,JSON.parse('{"fY":1,"iZ":2,"b5":1,"iM":1,"iT":1,"jH":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.X
return{mq:s("cI"),dx:s("ho"),bC:s("cq"),v:s("b2"),iF:s("jt"),ul:s("db"),EL:s("cJ"),xs:s("cs"),gc:s("dc"),t3:s("jv"),mD:s("dL"),lT:s("dM"),bJ:s("dN"),gI:s("dO"),ya:s("dP"),z3:s("bI"),Bu:s("fn"),p:s("aU"),rO:s("fq"),E:s("de"),hO:s("b4<@>"),CH:s("ht"),w:s("a4<e,e>"),I:s("a4<e,i>"),M:s("aM<e>"),f7:s("eB"),fP:s("bJ"),yb:s("dV"),he:s("R<@>"),yW:s("cc"),g:s("bT"),D:s("D"),yt:s("ao"),hl:s("a0"),B:s("oj"),pH:s("aH"),Fr:s("cK"),BO:s("eF"),ls:s("bU<ar>"),vS:s("dg"),aJ:s("dh"),x:s("cd"),bK:s("di"),gm:s("dj"),dn:s("cL"),mx:s("dk"),j_:s("cM"),EJ:s("cN<bL,e>"),_:s("dl"),Eb:s("ct"),qX:s("e_"),mF:s("cQ"),iO:s("cu"),oW:s("cR"),fl:s("cv"),FA:s("n<ht>"),CB:s("n<cS>"),yT:s("n<e>"),x6:s("n<bN>"),oJ:s("n<B>"),tY:s("n<@>"),uI:s("n<i>"),Fg:s("r<cq>"),jC:s("r<aU>"),km:s("r<fq>"),sa:s("r<ca>"),ns:s("r<jQ>"),r:s("r<bT>"),uH:s("r<jU>"),Dl:s("r<a0>"),iJ:s("r<bU<~>>"),pC:s("r<k_>"),C1:s("r<dl>"),ka:s("r<bl>"),Fm:s("r<eJ>"),op:s("r<cP>"),hr:s("r<eK>"),s3:s("r<cu>"),sL:s("r<af>"),Bv:s("r<kk>"),Bq:s("r<N<e,e>>"),rq:s("r<Z<e,J>>"),A7:s("r<Z<e,e>>"),cs:s("r<Z<e,@>>"),a6:s("r<cS>"),p0:s("r<bX>"),s6:s("r<bx>"),pq:s("r<aw>"),bA:s("r<dn>"),xz:s("r<by>"),s0:s("r<eN>"),hc:s("r<cU>"),ea:s("r<dp>"),Fk:s("r<kC>"),qP:s("r<bZ>"),d8:s("r<i5>"),kv:s("r<eQ>"),nR:s("r<+(e,F<bZ>)>"),kd:s("r<+(e,e)>"),rh:s("r<+influence,light(B,bD)>"),wt:s("r<+(i,e)>"),e_:s("r<an>"),u:s("r<aa>"),Ft:s("r<i8>"),C:s("r<P>"),h1:s("r<bA>"),s2:s("r<c_>"),eY:s("r<eT>"),xB:s("r<cW>"),rn:s("r<kQ>"),gg:s("r<kR>"),tS:s("r<id>"),yv:s("r<kS>"),wM:s("r<kT>"),El:s("r<fV>"),AM:s("r<aO<bI>>"),fs:s("r<aO<bK>>"),cv:s("r<bD>"),DZ:s("r<eY>"),s:s("r<e>"),r8:s("r<bN>"),fa:s("r<c0>"),k:s("r<M>"),h:s("r<k>"),ld:s("r<ir>"),Dc:s("r<dy>"),Fi:s("r<c3>"),jV:s("r<d1>"),yo:s("r<f1>"),nm:s("r<f2>"),uk:s("r<bt>"),wf:s("r<iE>"),il:s("r<eh>"),l5:s("r<eg>"),ow:s("r<lP>"),j5:s("r<lQ>"),pv:s("r<h1>"),Fy:s("r<el<e5>>"),EM:s("r<el<ch>>"),w_:s("r<el<bA>>"),f2:s("r<el<d5>>"),n:s("r<B>"),zz:s("r<@>"),t:s("r<i>"),Cf:s("r<J?>"),AN:s("r<bj>"),T:s("hK"),m:s("af"),ud:s("e2"),Eh:s("bV<@>"),AQ:s("F<aU>"),hk:s("F<bT>"),b:s("F<bl>"),xp:s("F<cu>"),nx:s("F<af>"),rW:s("F<Z<e,e>>"),qr:s("F<bx>"),R:s("F<aw>"),fG:s("F<cU>"),Es:s("F<bZ>"),DX:s("F<+(e,e)>"),pL:s("F<+(i,e)>"),bE:s("F<bA>"),fx:s("F<cW>"),a:s("F<e>"),uh:s("F<ir>"),D0:s("F<dy>"),cf:s("F<c3>"),p7:s("F<d1>"),dd:s("F<B>"),j:s("F<@>"),J:s("F<i>"),ik:s("F<af?>"),vX:s("F<J?>"),m2:s("hS"),h6:s("N<e,aH>"),gJ:s("N<e,cK>"),q:s("N<e,e>"),no:s("N<e,b8>"),AC:s("N<@,@>"),ou:s("N<i,e>"),pr:s("N<i,@>"),yx:s("N<e,F<e>>"),mf:s("Z<e,dl>"),vD:s("Z<e,cz>"),ap:s("Z<e,aw>"),G:s("Z<e,e>"),qH:s("Z<e,dv>"),m0:s("Z<e,l>"),gG:s("Z<e,B>"),P:s("Z<e,@>"),f:s("Z<@,@>"),eU:s("Z<i,e>"),pG:s("Z<i,f_>"),tQ:s("Z<i,f0>"),Bx:s("Z<e,F<e>>"),oZ:s("Z<e,J?>"),q1:s("Z<c2,F<c3>>"),ee:s("Z<i,Z<e,e>>"),jT:s("I<e,e?>"),w1:s("e5"),pw:s("cz"),jt:s("cS"),wl:s("bX"),kc:s("bx"),rV:s("fL"),mV:s("eM"),c:s("ar"),K:s("J"),BB:s("bK"),A:s("aw"),oP:s("dn"),wJ:s("bn"),E4:s("by"),A_:s("dp"),U:s("bZ"),DL:s("i3"),AB:s("kE"),yi:s("fN"),rx:s("i5"),xK:s("e8"),Y:s("eQ"),iM:s("Hk"),ep:s("+()"),k0:s("+(bx,ch)"),ut:s("+(b8,d5)"),rf:s("+(B,B)"),mn:s("+influence,light(B,bD)"),tK:s("+effectiveScore,light,score(B,aU,B)"),ez:s("i7"),wZ:s("aa"),lg:s("i9"),tc:s("cV<cu,bA>"),ja:s("cV<cz,e5>"),wm:s("cV<bx,ch>"),qq:s("cV<b8,d5>"),j2:s("P"),m3:s("bA"),yz:s("c_"),z_:s("eT"),F3:s("cW"),Dm:s("id"),Q:s("e9<e>"),oG:s("e9<i>"),en:s("bB"),gl:s("b_"),W:s("ea"),u5:s("bC"),bG:s("bM"),ho:s("fV"),EH:s("aO<bI>"),E0:s("aO<bK>"),l:s("cX"),w8:s("eY"),qL:s("b7"),N:s("e"),Aj:s("b8"),jP:s("bN"),d:s("c0"),bp:s("dv"),sg:s("ai"),bs:s("dw"),qF:s("eZ"),hL:s("ec<e,e>"),qt:s("l9"),eP:s("la"),cV:s("M"),a7:s("k"),qY:s("bE"),L:s("bO"),gM:s("c1"),hF:s("c2"),vw:s("f_"),BX:s("f0"),aA:s("dy"),AP:s("c3"),sy:s("ll"),bB:s("b9"),aS:s("d1"),fu:s("f1"),fw:s("G<bJ>"),vL:s("G<cc>"),vK:s("G<cd>"),Fj:s("G<bC>"),rZ:s("G<bM>"),vY:s("G<e>"),r4:s("G<bE>"),g2:s("G<c1>"),cE:s("G<c2>"),rt:s("T<bB>"),xG:s("T<b_>"),fh:s("T<bE>"),fW:s("f2"),hR:s("as<@>"),BT:s("iB<J?,J?>"),Ez:s("d4"),rL:s("h0"),xT:s("eh"),wU:s("eg"),la:s("lO"),qS:s("iJ"),jS:s("h3"),EF:s("bR<+(e,b8)>"),Br:s("bR<c_>"),V:s("iW"),e:s("iX"),y:s("l"),Bs:s("l()"),kr:s("l(bJ)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(J)"),pz:s("l(bB)"),aV:s("l(b_)"),y2:s("l(bC)"),ty:s("l(bM)"),Ag:s("l(e)"),rd:s("l(bE)"),da:s("l(c1)"),qR:s("l(c2)"),i:s("B"),z:s("@"),pF:s("@()"),h_:s("@(J)"),nW:s("@(J,cX)"),S:s("i"),eZ:s("bU<ar>?"),r9:s("r<J?>?"),gt:s("af?"),rK:s("F<@>?"),jd:s("Z<e,F<e>>?"),X:s("J?"),dM:s("yU?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("im?"),F:s("dA<@,@>?"),Af:s("lL?"),k7:s("l?"),wK:s("l(fT)?"),u6:s("B?"),lo:s("i?"),s7:s("bj?"),Z:s("~()?"),Cv:s("~(dJ)?"),kC:s("~(dK)?"),pf:s("~(fu)?"),hq:s("~(fC)?"),CA:s("~(dZ)?"),hQ:s("~(bL)?"),Ci:s("~(bB)?"),nf:s("~(bM,bC)?"),DI:s("~(e,B)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),o:s("bj"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ip=J.kc.prototype
B.a=J.r.prototype
B.d=J.hJ.prototype
B.c=J.fF.prototype
B.b=J.e1.prototype
B.iq=J.e2.prototype
B.ir=J.hN.prototype
B.t=A.hW.prototype
B.db=A.i_.prototype
B.dq=J.kA.prototype
B.bN=J.eZ.prototype
B.a7=new A.cI(1,"standard")
B.H=new A.jn(B.a7)
B.bS=new A.cI(0,"concise")
B.bT=new A.cI(2,"verbose")
B.ap=new A.dJ(null,null,null,null,null)
B.nj=new A.jo(0,"none")
B.nk=new A.jq(0,"opaque")
B.dZ=new A.ju(4,"ambience")
B.bX=new A.cs(3,"mono")
B.aM=new A.dc(0,"full")
B.bW=new A.cs(0,"auto")
B.bV=new A.cJ(1,"standard")
B.bU=new A.db(0,"defaultMix")
B.aN=new A.dK(B.bW,B.bV,B.aM,B.bU)
B.aE=new A.kM(0,"pixeldart")
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
B.aq=new A.jx(0,"add")
B.ec=new A.ey(0,"zero")
B.a8=new A.ey(1,"one")
B.a9=new A.jy(0,"alpha")
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
B.nl=new A.ns()
B.eo=new A.jw()
B.c5=new A.nE()
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

B.i=new A.kh()
B.ew=new A.kx()
B.nn=new A.qq()
B.ex=new A.qr()
B.c8=new A.qt()
B.ey=new A.cW()
B.aF=new A.cj(1,"gradeLUT")
B.ez=new A.cW()
B.eA=new A.qR()
B.eB=new A.qT()
B.f=new A.r_()
B.c9=new A.lc()
B.mq=new A.d_(0,"position")
B.mv=new A.bE(B.mq,0,3)
B.dR=new A.d_(1,"normal")
B.mw=new A.bE(B.dR,3,3)
B.mr=new A.d_(2,"color")
B.mx=new A.bE(B.mr,6,4)
B.ms=new A.d_(4,"alpha")
B.my=new A.bE(B.ms,10,1)
B.mt=new A.d_(5,"uv0")
B.mz=new A.bE(B.mt,11,2)
B.mu=new A.d_(8,"legacyMaterialEffect")
B.mA=new A.bE(B.mu,13,1)
B.U=s([B.mv,B.mw,B.mx,B.my,B.mz,B.mA],A.X("r<bE>"))
B.aa=new A.t4()
B.nm=new A.jK()
B.eC=new A.tn()
B.aQ=new A.lI()
B.x=new A.lV()
B.at=new A.m4()
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
B.au=new A.jI(1,"back")
B.av=new A.jL(0,"less")
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
B.fd=new A.z("saved mantle history is malformed",null,null)
B.fe=new A.z("rupture elapsed time is malformed",null,null)
B.ff=new A.z("presentation keys must be strings",null,null)
B.fg=new A.z("unsupported accessibility profile",null,null)
B.fh=new A.z("unsupported promoted model index schema",null,null)
B.fi=new A.z("inventory inspections must be an object",null,null)
B.fj=new A.z("screenplay event random range is invalid",null,null)
B.cl=new A.z("saved mantle state is malformed",null,null)
B.fk=new A.z("inactive rupture has elapsed time",null,null)
B.fl=new A.z("control sensitivity is outside 0.1\u20133.0",null,null)
B.fm=new A.z("invalid action bindings",null,null)
B.fn=new A.z("listener room is empty",null,null)
B.fo=new A.z("control bindings conflict",null,null)
B.fp=new A.z("saved difficulty state is malformed",null,null)
B.fq=new A.z("saved house drift state is malformed",null,null)
B.fr=new A.z("saved sleep record is malformed",null,null)
B.fs=new A.z("UI scale must be between 0.8 and 2.0",null,null)
B.ft=new A.z("unsupported settings store",null,null)
B.fu=new A.z("screenplay scene must be an object",null,null)
B.fv=new A.z("settings values must be an object",null,null)
B.fw=new A.z("saved day-loop sleepHistory must be a list",null,null)
B.fx=new A.z("invalid anisotropy limit",null,null)
B.fy=new A.z("audio event position is not finite",null,null)
B.fz=new A.z("event sequence must be non-negative",null,null)
B.fA=new A.z("screenplay branch is invalid",null,null)
B.fB=new A.z("inventory inspection counts are invalid",null,null)
B.fC=new A.z("only keybinds can be remapping",null,null)
B.fD=new A.z("modelScale must be positive and finite",null,null)
B.fE=new A.z("listener position is not finite",null,null)
B.fF=new A.z("screenplay event has invalid core fields",null,null)
B.fG=new A.z("invalid action ID",null,null)
B.fH=new A.z("saved window state is malformed",null,null)
B.fI=new A.z("unsupported graphics preset",null,null)
B.fJ=new A.z("save run and meta must be objects",null,null)
B.fK=new A.z("saved house state is malformed",null,null)
B.fL=new A.z("saved sleep record must be an object",null,null)
B.fM=new A.z("sound cue must be a non-empty string",null,null)
B.fN=new A.z("saved session run is malformed",null,null)
B.fO=new A.z("save map keys must be strings",null,null)
B.fP=new A.z("unsupported graphics profile",null,null)
B.fQ=new A.z("screenplay scene has invalid id, day, or title",null,null)
B.fR=new A.z("unsupported audio options",null,null)
B.fS=new A.z("transform.scale must be positive",null,null)
B.fT=new A.z("Escape is reserved for pause navigation",null,null)
B.fU=new A.z("saved day-loop state is malformed",null,null)
B.fV=new A.z("rupture extinguished mantle is unknown",null,null)
B.cm=new A.z("unsupported controls profile",null,null)
B.fW=new A.z("promoted model index entry is malformed",null,null)
B.cn=new A.z("saved portal state is malformed",null,null)
B.fX=new A.z("acoustic portal profile is not finite",null,null)
B.fY=new A.z("saved house state does not match this house",null,null)
B.fZ=new A.z("presentation snapshot contains a non-finite number",null,null)
B.h_=new A.z("screenplay array contains invalid text",null,null)
B.h0=new A.z("screenplay event day/hour is out of range",null,null)
B.h1=new A.z("unsupported gameplay settings profile",null,null)
B.h2=new A.z("save contains a non-finite number",null,null)
B.h3=new A.z("unsupported graphics store",null,null)
B.h4=new A.z("screenplay option is invalid",null,null)
B.h5=new A.z("screenplay needs sources and scenes arrays",null,null)
B.h6=new A.z("brush component needs an id and label",null,null)
B.h7=new A.z("text.json root must be an object",null,null)
B.h8=new A.z("screenplay root must be an object",null,null)
B.h9=new A.z("event kind is empty",null,null)
B.ha=new A.z("screenplay event effects are invalid",null,null)
B.hb=new A.z("promoted model index entries are required",null,null)
B.hc=new A.z("invalid control binding token",null,null)
B.hd=new A.z("audio transmission muffle is invalid",null,null)
B.he=new A.z("acoustic portal muffle order is invalid",null,null)
B.hf=new A.z("unsupported settings profile",null,null)
B.hg=new A.z("saved session clock is malformed",null,null)
B.hh=new A.z("rupture mantle IDs are malformed",null,null)
B.hi=new A.z("invalid gameplay setting: contextualReminders",null,null)
B.hj=new A.z("invalid screen-reader verbosity",null,null)
B.hk=new A.z("saved sleep record has an unknown enum",null,null)
B.hl=new A.z("audio cue variants are empty",null,null)
B.hm=new A.z("screenplay beat has invalid kind or text",null,null)
B.hn=new A.z("save root must be an object",null,null)
B.ho=new A.z("audio event identity is empty",null,null)
B.hp=new A.z("screenplay event random range is out of range",null,null)
B.hq=new A.z("render capabilities contain invalid limits",null,null)
B.hr=new A.z("saved house overrides are malformed",null,null)
B.T=new A.bW(0,0,0)
B.cN=new A.bW(1,1,1)
B.j5=s([],t.Fk)
B.bd=s([],t.cv)
B.hs=new A.jY(B.T,B.T,0,1,null,null,B.cN,0,null,B.j5,B.bd)
B.co=new A.aH(0,0,0)
B.ht=new A.eE(0,"idle")
B.ax=new A.eE(1,"active")
B.hu=new A.eE(2,"ended")
B.hv=new A.eE(3,"aborted")
B.cp=new A.fB(0,"outside")
B.hw=new A.fB(1,"intersects")
B.hx=new A.fB(2,"inside")
B.hy=new A.eG(0,"timeAdvanced")
B.hz=new A.eG(1,"dayEndReached")
B.hA=new A.eG(4,"slept")
B.hB=new A.eG(5,"complianceFloorTripped")
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
B.hH=new A.hD(0,"vertex")
B.cC=new A.hD(1,"indices")
B.cD=new A.k2(0,"staticDraw")
B.h=new A.hE(0,"ready")
B.S=new A.hE(1,"lost")
B.ae=new A.fD(0,"prepared")
B.hI=new A.fD(1,"committed")
B.hJ=new A.fD(2,"rolledBack")
B.hK=new A.eH(0,"color")
B.cE=new A.eH(1,"colorAndGlow")
B.hL=new A.eH(2,"colorDepthGlow")
B.aX=new A.eH(3,"depthOnly")
B.aY=new A.hG(1,"linear")
B.cF=new A.k4(0,"clampToEdge")
B.hM=new A.k3(1,1,1,!1,B.aY,B.aY,B.cF,1)
B.aZ=new A.hG(2,"linearMipmapLinear")
B.hN=new A.cO(0,"beforeShadow")
B.hO=new A.cO(2,"beforeDepth")
B.cG=new A.cO(3,"afterDepth")
B.cH=new A.cO(4,"beforeWorld")
B.hP=new A.cO(5,"afterWorld")
B.I=new A.cO(6,"afterResolve")
B.hQ=new A.cO(9,"beforePresent")
B.cI=new A.ce(0,"readBeforeWrite")
B.hR=new A.ce(1,"duplicateWriter")
B.hS=new A.ce(2,"sampledMultisampledAttachment")
B.b_=new A.ce(3,"invalidResolve")
B.hT=new A.ce(4,"formatOrSizeMismatch")
B.hU=new A.ce(5,"unversionedReadWrite")
B.hV=new A.ce(6,"invalidHistoryRead")
B.hW=new A.ce(7,"dependencyCycle")
B.hX=new A.ce(8,"missingCapability")
B.cJ=new A.ct(0,"high")
B.b0=new A.ct(1,"standard")
B.b1=new A.dZ(1,B.b0,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.ay=new A.e_(0,"player")
B.b2=new A.e_(1,"inserted")
B.cK=new A.e_(2,"warden")
B.cL=new A.eI(0,"wrongKind")
B.cM=new A.eI(1,"staleGeneration")
B.i_=new A.eI(2,"doubleRelease")
B.az=new A.eI(3,"releasedResource")
B.i2=new A.cP("kitchen-range","settle")
B.i3=new A.cP("front-door-knocker","knock")
B.i4=new A.cP("cellar-drain","drip")
B.i5=new A.cP("bedroom-timber","creak")
B.i6=new A.cP("kitchen-pipe","tick")
B.i7=new A.cP("bathroom-cistern","settle")
B.i8=new A.cP("landing-window","wind")
B.io=new A.kb(1,"visitor")
B.is=new A.pD(null)
B.it=new A.pE(null)
B.b3=new A.kj(!1,0,0.85,0.92,1)
B.iu=new A.bW(0.008,0.012,0.024)
B.cO=s([0,2,2,3],t.t)
B.iv=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b4=s([B.cr,B.cs],A.X("r<dh>"))
B.iw=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.ix=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b5=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.C=new A.bB(0,"audio")
B.N=new A.ie(0,"level")
B.lH=new A.b_("master","Master",B.C,B.N,1,0,1,"audio")
B.lM=new A.b_("voice","Visitor voice",B.C,B.N,1,0,1,"audio")
B.lD=new A.b_("effects","Effects",B.C,B.N,1,0,1,"audio")
B.lE=new A.b_("ambience","House ambience",B.C,B.N,1,0,1,"audio")
B.lI=new A.b_("music","Music",B.C,B.N,1,0,1,"audio")
B.aG=new A.bB(1,"display")
B.lL=new A.b_("brightness","Display brightness",B.aG,B.N,1,0.6,1.4,"display")
B.ah=new A.ie(1,"toggle")
B.lG=new A.b_("muted","Mute house audio",B.C,B.ah,!1,null,null,"audio")
B.a2=new A.bB(2,"accessibility")
B.lJ=new A.b_("mono","Mono-compatible mix",B.a2,B.ah,!1,null,null,"audio")
B.lF=new A.b_("high-contrast","High-contrast interface",B.a2,B.ah,!1,null,null,"display")
B.lK=new A.b_("strong-highlights","Strong focus highlights",B.a2,B.ah,!1,null,null,"display")
B.A=s([B.lH,B.lM,B.lD,B.lE,B.lI,B.lL,B.lG,B.lJ,B.lF,B.lK],A.X("r<b_>"))
B.z=s(["who","verb","object","place","time"],t.s)
B.e_=new A.db(1,"strong")
B.b6=s([B.bU,B.e_],A.X("r<db>"))
B.e9=new A.ex(0,"swap")
B.ea=new A.ex(1,"replace")
B.eb=new A.ex(2,"cancel")
B.iy=s([B.e9,B.ea,B.eb],A.X("r<ex>"))
B.iz=s([2,5,9,12,16,19],t.t)
B.hC=new A.cd(1,"pauseOnly")
B.hD=new A.cd(2,"continuePlayback")
B.aA=s([B.aW,B.hC,B.hD],A.X("r<cd>"))
B.iA=s(["uQuantizationBits","uDitherStrength"],t.s)
B.iC=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.iD=s([B.aw,B.cd,B.ce,B.cf,B.ab],A.X("r<bJ>"))
B.iE=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iF=s(["30","60","display"],t.s)
B.ao=new A.c2(0,"full")
B.bP=new A.c2(1,"compressed")
B.bQ=new A.c2(2,"off")
B.cP=s([B.ao,B.bP,B.bQ],A.X("r<c2>"))
B.b7=s([B.aV,B.cq],A.X("r<dg>"))
B.iG=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e4=new A.dc(1,"reduced")
B.b8=s([B.aM,B.e4],A.X("r<dc>"))
B.e0=new A.cJ(0,"wide")
B.e1=new A.cJ(2,"night")
B.b9=s([B.e0,B.bV,B.e1],A.X("r<cJ>"))
B.iH=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iS=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cQ=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.ba=s([B.cv,B.cw],A.X("r<dj>"))
B.m_=new A.bM(0,"long")
B.dG=new A.bM(1,"short")
B.cR=s([B.m_,B.dG],A.X("r<bM>"))
B.eN=new A.ca("1 - 9","Select Response",!0)
B.eJ=new A.ca("SPACE","Silence Ring",!1)
B.iU=s([B.eN,B.eJ],t.sa)
B.X=new A.bL(0,"visual")
B.bq=new A.bL(1,"graphics")
B.Y=new A.bL(2,"gameplay")
B.br=new A.bL(3,"controls")
B.E=new A.bL(4,"audio")
B.F=new A.bL(5,"accessibility")
B.iV=s([B.X,B.bq,B.Y,B.br,B.E,B.F],A.X("r<bL>"))
B.iW=s(["master","voice","effects","ambience","music"],t.s)
B.bb=s([B.cz,B.cA],A.X("r<dk>"))
B.cS=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hY=new A.ct(2,"safe")
B.hZ=new A.ct(3,"custom")
B.cT=s([B.cJ,B.b0,B.hY,B.hZ],A.X("r<ct>"))
B.B=new A.cj(0,"inactive")
B.bB=new A.cj(2,"affineWarp")
B.dz=new A.cj(3,"vertexSnap")
B.bC=new A.cj(4,"tapeGiveup")
B.bD=new A.cj(5,"portalFail")
B.a0=new A.cj(6,"lightsOut")
B.cU=s([B.B,B.aF,B.bB,B.dz,B.bC,B.bD,B.a0],A.X("r<cj>"))
B.iX=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iY=s([B.ay,B.b2,B.cK],A.X("r<e_>"))
B.iZ=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.ne=new A.bt("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.nd=new A.bt("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.n9=new A.bt("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.nh=new A.bt("ronnie.response","named","A route card has Ronnie written on its back.")
B.ng=new A.bt("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.j_=s([B.ne,B.nd,B.n9,B.nh,B.ng],t.uk)
B.nf=new A.bt("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.nc=new A.bt("ronnie.response","named","The name Ronnie holds when the room does not.")
B.na=new A.bt("denise.revision","accepted","One correction remains yours to protect.")
B.n7=new A.bt("attercliffe.plate","kept","A second place survives the room changing around it.")
B.j0=s([B.nf,B.nc,B.na,B.n7],t.uk)
B.ja=s([],t.Fm)
B.j9=s([],t.op)
B.j1=s([],A.X("r<cv>"))
B.j4=s([],A.X("r<Hi>"))
B.V=s([],t.qP)
B.jb=s([],t.u)
B.cW=s([],t.xB)
B.j2=s([],t.El)
B.m=s([],t.s)
B.cX=s([],t.ld)
B.j8=s([],t.nm)
B.j3=s([],t.t)
B.bc=s([],t.zz)
B.i1=new A.hI(15,"kitchen",-0.3,0)
B.i0=new A.hI(19,"spare-room",0,0.3)
B.J=s([B.i1,B.i0],A.X("r<hI>"))
B.jd=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lX=new A.bC(0,"bed")
B.lY=new A.bC(1,"chair")
B.lZ=new A.bC(2,"floor")
B.cY=s([B.lX,B.lY,B.lZ],A.X("r<bC>"))
B.je=s(["high","medium","low"],t.s)
B.e2=new A.cs(1,"headphones")
B.e3=new A.cs(2,"speakers")
B.be=s([B.bW,B.e2,B.e3,B.bX],A.X("r<cs>"))
B.jf=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bf=s([B.ct,B.cu],A.X("r<di>"))
B.bp=new A.ci(0,"root")
B.de=new A.bn(0,"pauseMenu")
B.kl=new A.dn(B.bp,B.de,null)
B.jg=s([B.kl],t.bA)
B.bg=s([B.bS,B.a7,B.bT],A.X("r<cI>"))
B.hF=new A.cM(0,"instant")
B.hG=new A.cM(2,"slow")
B.bh=s([B.hF,B.cB,B.hG],A.X("r<cM>"))
B.jh=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.ji=s([B.C,B.aG,B.a2],A.X("r<bB>"))
B.cZ=s([B.r,B.ac,B.p,B.ad],A.X("r<dW>"))
B.O=new A.du(0,"pbrMaterial")
B.a3=new A.du(1,"shadowsAndOcclusion")
B.ai=new A.du(2,"surfaceWeathering")
B.l=new A.du(3,"atmosphereAndPost")
B.lU=new A.du(4,"debugView")
B.bi=s([B.O,B.a3,B.ai,B.l,B.lU],A.X("r<du>"))
B.bE=new A.b7(0,"depthTest")
B.bF=new A.b7(1,"depthFunc")
B.bG=new A.b7(2,"depthWrite")
B.bH=new A.b7(3,"blendEnable")
B.bI=new A.b7(4,"blendFunc")
B.bJ=new A.b7(5,"blendEquation")
B.bK=new A.b7(6,"cullEnable")
B.bL=new A.b7(7,"cullFace")
B.dJ=new A.b7(8,"frontFace")
B.m2=new A.b7(9,"stencilEnable")
B.dH=new A.b7(10,"colorMask")
B.dI=new A.b7(11,"scissorEnable")
B.jj=s([B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.bL,B.dJ,B.m2,B.dH,B.dI],A.X("r<b7>"))
B.aH=new A.cC(0,"none")
B.lO=new A.cC(1,"albedoOnly")
B.lP=new A.cC(2,"normalsOnly")
B.lQ=new A.cC(3,"roughnessOnly")
B.lR=new A.cC(4,"metallicOnly")
B.lS=new A.cC(5,"aoOnly")
B.lT=new A.cC(6,"wireframeOnly")
B.d_=s([B.aH,B.lO,B.lP,B.lQ,B.lR,B.lS,B.lT],A.X("r<cC>"))
B.jk=s(["off","errors","full"],t.s)
B.jl=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jm=s(["off","profile","standard","high"],t.s)
B.jn=s(["srgb","linear"],t.s)
B.jo=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jp=s(["uBloomStrength"],t.s)
B.jq=s(["uLutSize","uStrength"],t.s)
B.jr=s([B.cg,B.ch,B.ci],A.X("r<cc>"))
B.js=s(["uTexelSize","uNear","uFar"],t.s)
B.d0=s(["uTexelStep"],t.s)
B.jt=s(["uninitialized"],t.s)
B.hE=new A.cL(0,"minimal")
B.bj=s([B.hE,B.cx,B.cy],A.X("r<cL>"))
B.nb=new A.bt("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.n6=new A.bt("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.n5=new A.bt("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.n8=new A.bt("ronnie.response","named","The route card gives one name its own line.")
B.ju=s([B.nb,B.n6,B.n5,B.n8],t.uk)
B.a5=new A.c1(0,"waiting")
B.am=new A.c1(1,"atDoor")
B.an=new A.c1(2,"consulting")
B.aI=new A.c1(3,"resolved")
B.jv=s([B.a5,B.am,B.an,B.aI],A.X("r<c1>"))
B.eO=new A.ca("W A S D","Move",!1)
B.eM=new A.ca("TAB","Journal",!1)
B.eL=new A.ca("CAPS","Shader Lab",!1)
B.eK=new A.ca("ESC","Pause",!1)
B.jw=s([B.eO,B.eM,B.eL,B.eK],t.sa)
B.jx=s(["floor-linoleum","ceiling-stained"],t.s)
B.k_={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.jy=new A.a4(B.k_,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.X("a4<e,J?>"))
B.kb={uAlbedo:0}
B.d1=new A.a4(B.kb,[0],t.I)
B.ki={uSsaoRaw:0,uSceneDepth:1}
B.jz=new A.a4(B.ki,[0,1],t.I)
B.dc={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iR=s(["KeyW","GamepadDpadUp"],t.s)
B.iQ=s(["KeyS","GamepadDpadDown"],t.s)
B.iI=s(["KeyA","GamepadDpadLeft"],t.s)
B.iJ=s(["KeyD","GamepadDpadRight"],t.s)
B.iK=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iO=s(["KeyQ","GamepadB"],t.s)
B.iT=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.jc=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iP=s(["KeyR","GamepadX"],t.s)
B.iL=s(["KeyF","GamepadRB"],t.s)
B.iM=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iN=s(["KeyL"],t.s)
B.iB=s(["Escape","GamepadMenu"],t.s)
B.jA=new A.a4(B.dc,[B.iR,B.iQ,B.iI,B.iJ,B.iK,B.iO,B.iT,B.jc,B.iP,B.iL,B.iM,B.iN,B.iB],A.X("a4<e,F<e>>"))
B.jB=new A.a4(B.dc,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.kf={uScene:0,uHistory:1}
B.jC=new A.a4(B.kf,[0,1],t.I)
B.jQ={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jD=new A.a4(B.jQ,["93a7e35137dd4ffbb46188b1a69d5f63b1baa889","7a6a5cc291ff4f41859e2f51a9c1f02a04cb9197","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.1.2.0"],t.w)
B.k2={aPosition:0,aUvMat:1}
B.d2=new A.a4(B.k2,[0,4],t.I)
B.kg={uScene:0,uLut:1}
B.jE=new A.a4(B.kg,[0,1],t.I)
B.kh={uSource:0}
B.d3=new A.a4(B.kh,[0],t.I)
B.k9={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jF=new A.a4(B.k9,[0,1,2,3,4,5,6],t.I)
B.d4=new A.cN([B.X,"settings.visual",B.bq,"settings.graphics",B.Y,"settings.gameplay",B.br,"settings.controls",B.E,"settings.audio",B.F,"settings.accessibility"],t.EJ)
B.d5=new A.cN([B.X,"visual",B.bq,"graphics",B.Y,"gameplay",B.br,"controls",B.E,"audio",B.F,"accessibility"],t.EJ)
B.jY={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jG=new A.a4(B.jY,[0,1,2],t.I)
B.kk={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jH=new A.a4(B.kk,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.w)
B.k4={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.ij=new A.bm("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.id=new A.bm("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.ii=new A.bm("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.il=new A.bm("wallpaper-damp","grime",7106925,0.94,0.76)
B.ie=new A.bm("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.ik=new A.bm("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.im=new A.bm("wallpaper-peeling","grime",9340536,0.91,0.68)
B.ig=new A.bm("floor-wood","wall-plaster",7755327,0.88,0.22)
B.ib=new A.bm("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.ic=new A.bm("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.i9=new A.bm("floor-concrete","grime",7828331,0.96,0.92)
B.ia=new A.bm("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.ih=new A.bm("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bk=new A.a4(B.k4,[B.ij,B.id,B.ii,B.il,B.ie,B.ik,B.im,B.ig,B.ib,B.ic,B.i9,B.ia,B.ih],A.X("a4<e,bm>"))
B.kc={uBloom:0}
B.jI=new A.a4(B.kc,[0],t.I)
B.kd={uSceneDepth:0}
B.jJ=new A.a4(B.kd,[0],t.I)
B.ke={uScene:0}
B.jK=new A.a4(B.ke,[0],t.I)
B.K={}
B.d7=new A.a4(B.K,[],A.X("a4<e,ho>"))
B.d6=new A.a4(B.K,[],t.w)
B.bl=new A.a4(B.K,[],A.X("a4<e,B>"))
B.y=new A.a4(B.K,[],t.I)
B.no=new A.a4(B.K,[],A.X("a4<e,e?>"))
B.jL=new A.a4(B.K,[],A.X("a4<@,@>"))
B.jT={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jM=new A.a4(B.jT,[0,1,2,3,4,5,6],t.I)
B.df=new A.cA(0,"resume")
B.dg=new A.cA(1,"settings")
B.dh=new A.cA(2,"controls")
B.di=new A.cA(3,"save")
B.dj=new A.cA(4,"help")
B.dk=new A.cA(5,"credits")
B.dl=new A.cA(6,"back")
B.jN=new A.cN([B.df,"pause.resume",B.dg,"pause.settings",B.dh,"pause.controls",B.di,"pause.save",B.dj,"pause.help",B.dk,"pause.credits",B.dl,"pause.back"],A.X("cN<cA,e>"))
B.k6={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jO=new A.a4(B.k6,[0,1,2,3],t.I)
B.kj={uTex:0}
B.jP=new A.a4(B.kj,[0],t.I)
B.bm=new A.cN([B.aF,1,B.bB,1.5,B.dz,1.5,B.bC,2,B.bD,2,B.a0,4],A.X("cN<cj,B>"))
B.np=new A.hU(0,"srgb")
B.nq=new A.hU(1,"linear")
B.bn=new A.eL(0,"resident")
B.d8=new A.eL(1,"pending")
B.d9=new A.eL(2,"missing")
B.da=new A.eL(3,"evicted")
B.j6=s([],t.bA)
B.j7=s([],A.X("r<bn>"))
B.bo=new A.e6(B.j6,B.j7,null)
B.dd=new A.ci(1,"settings")
B.km=new A.ci(2,"visual")
B.kn=new A.ci(3,"graphics")
B.ko=new A.ci(4,"gameplay")
B.kp=new A.ci(5,"controls")
B.kq=new A.ci(6,"audio")
B.kr=new A.ci(7,"accessibility")
B.ks=new A.ci(8,"credits")
B.W=new A.bn(1,"settings")
B.kt=new A.bn(2,"journal")
B.ku=new A.bn(3,"sleep")
B.kv=new A.bn(4,"help")
B.kw=new A.bn(5,"visitor")
B.kx=new A.bn(6,"ending")
B.dm=new A.e7(0,"opened")
B.dn=new A.e7(2,"backed")
B.dp=new A.e7(3,"resumed")
B.ky=new A.e7(4,"dismissed")
B.Z=new A.e7(5,"unchanged")
B.kz=new A.by("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kA=new A.by("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kB=new A.by("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kC=new A.by("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kD=new A.by("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kE=new A.by("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kF=new A.by("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kG=new A.by("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kH=new A.by("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kI=new A.ky(0,1,null)
B.kK=new A.kz(1,"high")
B.kJ=new A.qs(!1,!0,!0,!0,!1,B.kK,35,256)
B.kL=new A.kD(1,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bs=new A.eP(0,"safe")
B.L=new A.eP(1,"standard")
B.a_=new A.eP(2,"high")
B.a1=new A.aM(B.K,0,t.M)
B.af=new A.e8(B.bs,B.a1)
B.ka={shadows:0}
B.lC=new A.aM(B.ka,1,t.M)
B.dr=new A.e8(B.L,B.lC)
B.jV={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lu=new A.aM(B.jV,5,t.M)
B.ds=new A.e8(B.a_,B.lu)
B.kM=new A.eP(4,"shipping")
B.jX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lv=new A.aM(B.jX,7,t.M)
B.nr=new A.e8(B.kM,B.lv)
B.kO=new A.aP(0,1)
B.kP=new A.b0(0.35,0.52,0.88)
B.kQ=new A.ay(0.46,0.25,0.2)
B.dt=new A.b0(0.22,0.45,0.92)
B.kR=new A.ay(0.48,0.4,0.34)
B.kS=new A.ay(0.31,0.25,0.23)
B.bt=new A.b0(0.75,0.52,0.42)
B.kT=new A.b0(0.4,0.65,0.95)
B.bu=new A.b0(0.88,0.96,1)
B.kU=new A.ay(0.37,0.33,0.31)
B.kV=new A.b0(0.62,0.48,0.45)
B.kW=new A.ay(0.34,0.32,0.29)
B.du=new A.ay(0.38,0.25,0.19)
B.bv=new A.b0(0.9,0.8,0.72)
B.aB=new A.b0(0.28,0.16,0.12)
B.kX=new A.ay(0.31,0.28,0.24)
B.aC=new A.b0(0.65,0.45,0.35)
B.kY=new A.ay(0.58,0.56,0.5)
B.dv=new A.b0(0.2,0.38,0.9)
B.kZ=new A.ay(0.44,0.37,0.28)
B.l_=new A.ay(0.52,0.5,0.44)
B.l0=new A.ay(0.24,0.25,0.27)
B.l1=new A.ay(0.28,0.27,0.25)
B.l2=new A.b0(0.35,0.28,0.25)
B.dw=new A.b0(0.52,0.32,0.38)
B.l3=new A.ay(0.42,0.4,0.38)
B.l4=new A.ay(0.18,0.2,0.21)
B.l5=new A.ay(0.2,0.12,0.1)
B.aD=new A.b0(0.35,0.2,0.15)
B.l6=new A.ay(0.12,0.15,0.2)
B.l7=new A.fQ(0,"constructed")
B.M=new A.fQ(1,"ready")
B.bw=new A.fQ(2,"lost")
B.l8=new A.i9(B.af,384,216,1,B.aS,0,512,32,4,1,B.cc)
B.bx=new A.eR(0,"constructed")
B.l9=new A.eR(1,"initializing")
B.by=new A.eR(2,"ready")
B.dx=new A.eR(3,"contextLost")
B.j=new A.fR(0,"read")
B.k=new A.fR(1,"write")
B.G=new A.fR(2,"historyRead")
B.bz=new A.fS(0,"prepared")
B.la=new A.fS(1,"committed")
B.lb=new A.fS(2,"rolledBack")
B.q=new A.ib(0,"rgba8")
B.lc=new A.aJ("dofBlurH",B.q,192,108,1,0)
B.ld=new A.aJ("dofBlurV",B.q,192,108,1,0)
B.le=new A.aJ("dofOutput",B.q,384,216,1,0)
B.dy=new A.ib(2,"depth24")
B.lf=new A.aJ("shadowMap",B.dy,512,512,1,0)
B.lg=new A.aJ("ssaoRaw",B.q,192,108,1,0)
B.lh=new A.aJ("ssaoBlurred",B.q,192,108,1,0)
B.li=new A.aJ("gradeOutput",B.q,384,216,1,0)
B.lj=new A.aJ("vhsOutput",B.q,384,216,1,0)
B.lk=new A.aJ("sceneDepth",B.dy,384,216,1,0)
B.ll=new A.aJ("bloomBlurH",B.q,192,108,1,0)
B.lm=new A.aJ("bloomBlurV",B.q,192,108,1,0)
B.ln=new A.aJ("present",B.q,384,216,1,0)
B.bA=new A.aJ("sceneColor",B.q,384,216,1,0)
B.lo=new A.aJ("ps1Output",B.q,384,216,1,0)
B.lp=new A.eU(null,"save storage unavailable")
B.lq=new A.eU(null,"save could not be recovered")
B.lr=new A.eU(null,null)
B.k0={WheelUp:0,WheelDown:1}
B.ls=new A.aM(B.k0,2,t.M)
B.k7={open:0,closed:1}
B.lt=new A.aM(B.k7,2,t.M)
B.jU={Escape:0}
B.dA=new A.aM(B.jU,1,t.M)
B.jS={open:0,closed:1,mixed:2}
B.lw=new A.aM(B.jS,3,t.M)
B.k5={front:0,"rear-service":1}
B.lx=new A.aM(B.k5,2,t.M)
B.k8={overcast:0,rain:1}
B.ly=new A.aM(B.k8,2,t.M)
B.k3={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lz=new A.aM(B.k3,16,t.M)
B.k1={Escape:0,Tab:1,F11:2}
B.dB=new A.aM(B.k1,3,t.M)
B.jZ={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lA=new A.aM(B.jZ,5,t.M)
B.jW={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ag=new A.aM(B.jW,7,t.M)
B.jR={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lB=new A.aM(B.jR,9,t.M)
B.dE=new A.eW(2,"link")
B.lN=new A.ig(B.dE,"gl.createProgram() returned null")
B.dC=new A.eW(0,"vertex")
B.dD=new A.eW(1,"fragment")
B.dF=new A.eW(3,"validation")
B.lV=new A.ih(0,"full")
B.lW=new A.ih(2,"culled")
B.a4=new A.M(0,1,0)
B.bO=new A.M(0,-1,0)
B.m0=new A.bD(-1,B.a4,B.bO,B.cN,1,1,0.3,0.5)
B.cV=s([],t.n)
B.m1=new A.l_(!1,"","",B.cV,B.cV)
B.dK=new A.dv(0,"resident")
B.dL=new A.dv(1,"pending")
B.dM=new A.dv(2,"missing")
B.dN=new A.dv(3,"evicted")
B.al=new A.M(0,0,0)
B.kN=new A.kJ(0,0,0,1)
B.u=new A.l6(B.al,B.kN)
B.m3=A.co("H8")
B.m4=A.co("H9")
B.m5=A.co("oj")
B.m6=A.co("Ch")
B.m7=A.co("Cx")
B.m8=A.co("Cy")
B.m9=A.co("Cz")
B.ma=A.co("af")
B.mb=A.co("J")
B.mc=A.co("wO")
B.md=A.co("Do")
B.me=A.co("Dp")
B.mf=A.co("im")
B.e=new A.cZ(0,"float1")
B.aj=new A.cZ(1,"float2")
B.o=new A.cZ(2,"float3")
B.mg=new A.cZ(3,"float4")
B.v=new A.cZ(4,"mat4")
B.dO=new A.cZ(5,"mat4Array")
B.bM=new A.x(B.e,0)
B.dP=new A.x(B.e,1)
B.P=new A.cZ(6,"sampler")
B.w=new A.x(B.P,0)
B.ak=new A.x(B.P,1)
B.dQ=new A.x(B.P,2)
B.mh=new A.x(B.P,3)
B.mi=new A.x(B.P,4)
B.mj=new A.x(B.P,5)
B.mk=new A.x(B.P,6)
B.ml=new A.t3(!1)
B.mm=new A.M(0,0,1)
B.mn=new A.M(1,0,0)
B.mo=new A.M(1/0,1/0,1/0)
B.mp=new A.M(-1/0,-1/0,-1/0)
B.dS=new A.d_(6,"tangent4")
B.mB=new A.ee(0,"visitorAnswered")
B.dT=new A.ee(1,"visitorIgnored")
B.mC=new A.ee(2,"entryVerified")
B.mD=new A.ee(3,"entryContradicted")
B.mE=new A.ee(4,"exposureAccepted")
B.mG=new A.d0(1,"malformedDay")
B.mH=new A.d0(2,"malformedTier")
B.dU=new A.d0(3,"missingTierLines")
B.a6=new A.d0(6,"invalidPhase")
B.mK=new A.br(B.a6,"No reaction is due.")
B.mS=new A.b9(B.mK)
B.mP=new A.br(B.a6,"The active visit cannot be chosen.")
B.mT=new A.b9(B.mP)
B.mL=new A.br(B.a6,"The active visit has no line to advance.")
B.mU=new A.b9(B.mL)
B.mJ=new A.d0(5,"noActiveVisit")
B.mM=new A.br(B.mJ,"There is no active visit.")
B.dV=new A.b9(B.mM)
B.mO=new A.br(B.a6,"A visit is already active.")
B.mV=new A.b9(B.mO)
B.mI=new A.d0(4,"noArrival")
B.mR=new A.br(B.mI,"The authored arrival is missing.")
B.mW=new A.b9(B.mR)
B.mN=new A.br(B.a6,"That answer is not offered.")
B.mX=new A.b9(B.mN)
B.mF=new A.d0(0,"missingCorpus")
B.mQ=new A.br(B.mF,"The authored visitor corpus is empty.")
B.mY=new A.b9(B.mQ)
B.dW=new A.f4(1,"exact")
B.bR=new A.f4(2,"partial")
B.aJ=new A.f4(3,"contradiction")
B.mZ=new A.f4(0,"skipped")
B.n_=new A.f3(B.mZ,B.a1)
B.n0=new A.f3(B.bR,B.a1)
B.n1=new A.it(B.V,!1)
B.n2=new A.it(B.V,!0)
B.dX=new A.iv(0,"horizontal")
B.n3=new A.iv(1,"vertical")
B.dY=new A.ix(0,"horizontal")
B.n4=new A.ix(1,"vertical")
B.aK=new A.h2(0,"empty")
B.ni=new A.h2(1,"cpuReady")
B.aL=new A.h2(4,"released")})();(function staticFields(){$.tM=null
$.c8=A.c([],A.X("r<J>"))
$.yK=null
$.qx=0
$.qy=A.Fu()
$.ya=null
$.y9=null
$.AJ=null
$.AA=null
$.AR=null
$.vC=null
$.vK=null
$.xM=null
$.u3=A.c([],A.X("r<F<J>?>"))
$.hd=null
$.j9=null
$.ja=null
$.xi=!1
$.ap=B.x
$.z4=""
$.z5=null
$.z0=null
$.qd=null
$.dC=A.ab()
$.fd=A.ab()
$.aR=null
$.x0=A.ab()
$.A1=null
$.y=A.ab()
$.zE=A.ab()
$.d6=A.ab()
$.ad=A.ab()
$.W=A.ab()
$.bb=A.ab()
$.U=A.ab()
$.x_=A.ab()
$.x4=null
$.xd=null
$.bg=null
$.x3=!1
$.xs=!1
$.j7=B.aN
$.eo=B.ap
$.vp=!1
$.xD=!1
$.A3=null
$.ml=null
$.mh=null
$.zQ=0
$.xj=null
$.mq=!1
$.A2=!1
$.xk=0
$.ep=0
$.x6="booting"
$.cn=0
$.ff=0
$.az="hall"
$.j4=A.ab()
$.ue=A.ab()
$.c6=A.ab()
$.A8=null
$.xt=0
$.xx=1.65
$.er=null
$.bc=null
$.je=!1
$.cm=A.ab()
$.h8=A.ab()
$.j3=A.ab()
$.me=A.ab()
$.zD=A.ab()
$.zC=A.ab()
$.at=A.ab()
$.mf=A.ab()
$.j2=A.ab()
$.md=A.ab()
$.j5=A.ab()
$.j6=A.ab()
$.fc=A.ab()
$.en=A.ab()
$.h7=A.ab()
$.j1=A.ab()
$.j_=A.ab()
$.j0=A.ab()
$.aE=A.ab()
$.mc=A.ab()
$.bG=A.ab()
$.vq=A.a_(t.S)
$.d7=A.c([],t.s)
$.xb=null
$.Aq=!1
$.zH=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Hb","B0",()=>A.vE("_$dart_dartClosure"))
s($,"Ha","wn",()=>A.vE("_$dart_dartClosure_dartJSInterop"))
s($,"HU","Bo",()=>A.c([new J.kd()],A.X("r<ic>")))
s($,"Hn","B1",()=>A.dx(A.t_({
toString:function(){return"$receiver$"}})))
s($,"Ho","B2",()=>A.dx(A.t_({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Hp","B3",()=>A.dx(A.t_(null)))
s($,"Hq","B4",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ht","B7",()=>A.dx(A.t_(void 0)))
s($,"Hu","B8",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hs","B6",()=>A.dx(A.z1(null)))
s($,"Hr","B5",()=>A.dx(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Hw","Ba",()=>A.dx(A.z1(void 0)))
s($,"Hv","B9",()=>A.dx(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Hy","xX",()=>A.DN())
s($,"HC","Bf",()=>A.CP(4096))
s($,"HA","Bd",()=>new A.ub().$0())
s($,"HB","Be",()=>new A.ua().$0())
s($,"Hz","Bc",()=>A.CO(A.a2(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"HN","jk",()=>A.mz(B.mb))
s($,"Hl","xW",()=>{A.D1()
return $.qx})
s($,"H7","B_",()=>B.bA.h2())
s($,"Hg","xV",()=>A.kw(A.c([255,255,255,255],t.t)))
s($,"Hd","xS",()=>A.kw(A.c([128,128,255,255],t.t)))
s($,"Hc","xR",()=>A.kw(A.c([0,0,0,255],t.t)))
s($,"He","xT",()=>A.kw(A.c([255,255,0,255],t.t)))
s($,"Hf","xU",()=>A.kw(A.c([255,255,255,255],t.t)))
s($,"HZ","Bs",()=>A.ip(0,1,0))
s($,"Hx","Bb",()=>A.DK(A.a_(t.N),0,0,A.ip(0,0,0)))
s($,"HW","Bp",()=>A.wJ("^[a-z0-9][a-z0-9._-]*$"))
s($,"I1","fk",()=>{var q=$.z0
if(q==null){A.vz()
A.vz()
A.vz()
A.vz()
q=$.z0=new A.rP()}return q})
s($,"Hh","wo",()=>A.ww(B.aV,B.cr,!0,B.aW,B.ct,B.cw,B.cx,B.cz,!0,!1,B.cB))
s($,"HI","Bh",()=>new A.nr())
r($,"Au","d9",()=>A.wL(null,null))
r($,"j8","jj",()=>A.fE(null,null))
r($,"xa","fj",()=>A.fv(null,null,!1,1,!1,!1,2,1))
r($,"xe","cG",()=>$.wo())
s($,"HO","Bk",()=>new A.p1())
s($,"HP","Bl",()=>new A.pb())
s($,"HQ","wq",()=>new A.pq(A.m(t.N,t.S)))
s($,"HK","Bi",()=>A.ed().gb2().h(0,"debugPause")==="1")
s($,"HH","ji",()=>A.ed().gb2().h(0,"automation")==="1")
s($,"HE","wp",()=>A.FL())
s($,"HD","xY",()=>$.wp()!=null)
s($,"HF","xZ",()=>$.ji()?A.ed().gb2().h(0,"captureMantleId"):null)
s($,"HG","Bg",()=>A.ed().gb2().h(0,"captureMantleLit")==="1")
r($,"xw","ev",()=>A.ip(0,0,0))
r($,"xq","Bn",()=>A.ip(0,0,0))
r($,"xE","wr",()=>A.ip(0,0,0))
s($,"HJ","y_",()=>A.FM())
s($,"HS","mA",()=>new A.ok(A.ip(0,0,0)))
s($,"HR","Bm",()=>new A.pO(new A.o_()))
s($,"HL","cp",()=>new A.oF(A.c([],t.s)))
s($,"HV","hn",()=>{var q=new A.rC(B.aH)
q.f=A.X("F<ea>").a(A.c([A.a3(B.O,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a3(B.O,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a3(B.O,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a3(B.O,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a3(B.O,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a3(B.a3,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a3(B.a3,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a3(B.a3,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a3(B.a3,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a3(B.a3,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a3(B.ai,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a3(B.ai,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a3(B.ai,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a3(B.ai,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a3(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a3(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a3(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a3(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a3(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a3(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a3(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a3(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a3(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a3(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a3(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a3(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a3(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a3(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a3(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a3(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a3(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a3(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a3(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a3(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a3(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a3(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a3(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a3(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a3(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a3(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a3(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a3(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a3(B.O,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.X("r<ea>")))
return q})
s($,"HY","Br",()=>new A.rB(A.m(t.N,t.z)))
s($,"HX","Bq",()=>new A.qA(A.D3(520588),B.b3))
s($,"HM","Bj",()=>new A.oY())
s($,"HT","hm",()=>new A.qh(B.bo))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fM,ArrayBuffer:A.fL,ArrayBufferView:A.hZ,DataView:A.kp,Float32Array:A.hW,Float64Array:A.kq,Int16Array:A.kr,Int32Array:A.ks,Int8Array:A.kt,Uint16Array:A.ku,Uint32Array:A.kv,Uint8ClampedArray:A.eM,CanvasPixelArray:A.eM,Uint8Array:A.i_})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"
A.hX.$nativeSuperclassTag="ArrayBufferView"
A.iH.$nativeSuperclassTag="ArrayBufferView"
A.iI.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.my
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()