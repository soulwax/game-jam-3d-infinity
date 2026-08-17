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
if(a[b]!==s){A.Kq(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Ae(b)
return new s(c,this)}:function(){if(s===null)s=A.Ae(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Ae(a).prototype
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
Aj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
y9(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Ah==null){A.K2()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.BI("Return interceptor for "+A.y(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vM
if(o==null)o=$.vM=A.y8(n)
p=q[o]}if(p!=null)return p
p=A.K8(a)
if(p!=null)return p
if(typeof a=="function")return B.jL
s=Object.getPrototypeOf(a)
if(s==null)return B.dP
if(s===Object.prototype)return B.dP
if(typeof q=="function"){o=$.vM
if(o==null)o=$.vM=A.y8(n)
Object.defineProperty(q,o,{value:B.c6,enumerable:false,writable:true,configurable:true})
return B.c6}return B.c6},
B1(a,b){if(a<0||a>4294967295)throw A.b(A.b2(a,0,4294967295,"length",null))
return J.z6(new Array(a),b)},
B2(a,b){if(a<0)throw A.b(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
qD(a,b){if(a<0)throw A.b(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
z6(a,b){var s=A.c(a,b.i("x<0>"))
s.$flags=1
return s},
Fs(a,b){var s=t.hO
return J.Az(s.a(a),s.a(b))},
B4(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ft(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.B4(r))break;++b}return b},
Fu(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.B4(q))break}return b},
eW(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iu.prototype
return J.lc.prototype}if(typeof a=="string")return J.eu.prototype
if(a==null)return J.iv.prototype
if(typeof a=="boolean")return J.lb.prototype
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.he.prototype
if(typeof a=="bigint")return J.hd.prototype
return a}if(a instanceof A.L)return a
return J.y9(a)},
aQ(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.he.prototype
if(typeof a=="bigint")return J.hd.prototype
return a}if(a instanceof A.L)return a
return J.y9(a)},
cY(a){if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.he.prototype
if(typeof a=="bigint")return J.hd.prototype
return a}if(a instanceof A.L)return a
return J.y9(a)},
K_(a){if(typeof a=="number")return J.fa.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Dt(a){if(typeof a=="number")return J.fa.prototype
if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Du(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Dv(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.he.prototype
if(typeof a=="bigint")return J.hd.prototype
return a}if(a instanceof A.L)return a
return J.y9(a)},
Ax(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Dt(a).a4(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eW(a).aa(a,b)},
b0(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.K7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)},
b7(a,b,c){return J.cY(a).l(a,b,c)},
e9(a,b){return J.cY(a).k(a,b)},
Eh(a,b){return J.Du(a).hx(a,b)},
kb(a,b){return J.cY(a).M(a,b)},
Ay(a,b,c){return J.Dv(a).hz(a,b,c)},
Ei(a,b,c){return J.Dv(a).hA(a,b,c)},
Ej(a,b){return J.cY(a).cY(a,b)},
Ek(a,b,c){return J.K_(a).n(a,b,c)},
Az(a,b){return J.Dt(a).I(a,b)},
AA(a,b){return J.aQ(a).q(a,b)},
nE(a,b){return J.cY(a).ab(a,b)},
El(a,b){return J.cY(a).a2(a,b)},
AB(a){return J.cY(a).ga1(a)},
aN(a){return J.eW(a).gU(a)},
kc(a){return J.aQ(a).gR(a)},
Em(a){return J.aQ(a).ga5(a)},
O(a){return J.cY(a).gv(a)},
cD(a){return J.aQ(a).gu(a)},
eY(a){return J.eW(a).gad(a)},
AC(a,b){return J.cY(a).W(a,b)},
ea(a,b,c){return J.cY(a).bs(a,b,c)},
En(a,b){return J.aQ(a).su(a,b)},
Eo(a,b){return J.Du(a).aQ(a,b)},
c3(a){return J.eW(a).t(a)},
AD(a,b){return J.cY(a).eY(a,b)},
l8:function l8(){},
lb:function lb(){},
iv:function iv(){},
ix:function ix(){},
ev:function ev(){},
lz:function lz(){},
eA:function eA(){},
dJ:function dJ(){},
hd:function hd(){},
he:function he(){},
x:function x(a){this.$ti=a},
la:function la(){},
qF:function qF(a){this.$ti=a},
eZ:function eZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fa:function fa(){},
iu:function iu(){},
lc:function lc(){},
eu:function eu(){}},A={z7:function z7(){},
y2(){return $},
EB(a,b,c){if(t.he.b(a))return new A.jk(a,b.i("@<0>").S(c).i("jk<1,2>"))
return new A.f2(a,b.i("@<0>").S(c).i("f2<1,2>"))},
B8(a){return new A.hf("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.hf("Field '"+a+"' has not been initialized.")},
Fw(a){return new A.hf("Field '"+a+"' has already been initialized.")},
ya(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b4(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
j8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e7(a,b,c){return a},
Ai(a){var s,r
for(s=$.ci.length,r=0;r<s;++r)if(a===$.ci[r])return!0
return!1},
hy(a,b,c,d){A.lL(b,"start")
if(c!=null){A.lL(c,"end")
if(b>c)A.f(A.b2(b,0,c,"start",null))}return new A.j7(a,b,c,d.i("j7<0>"))},
li(a,b,c,d){if(t.he.b(a))return new A.dz(a,b,c.i("@<0>").S(d).i("dz<1,2>"))
return new A.cN(a,b,c.i("@<0>").S(d).i("cN<1,2>"))},
cL(){return new A.hw("No element")},
B0(){return new A.hw("Too many elements")},
eI:function eI(){},
ia:function ia(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b){this.a=a
this.$ti=b},
jk:function jk(a,b){this.a=a
this.$ti=b},
ji:function ji(){},
b9:function b9(a,b){this.a=a
this.$ti=b},
hf:function hf(a){this.a=a},
dx:function dx(a){this.a=a},
tx:function tx(){},
V:function V(){},
a0:function a0(){},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
iB:function iB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
ik:function ik(a,b,c){this.a=a
this.b=b
this.$ti=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ii:function ii(a){this.$ti=a},
dY:function dY(a,b){this.a=a
this.$ti=b},
je:function je(a,b){this.a=a
this.$ti=b},
aE:function aE(){},
eB:function eB(){},
hA:function hA(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
jP:function jP(){},
aW(a,b,c){var s,r,q,p,o,n,m,l=A.aG(a.ga3(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aG(a.gak(),!0,c)
m=new A.a4(q,n,b.i("@<0>").S(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.id(A.aZ(a,b,c),b.i("@<0>").S(c).i("id<1,2>"))},
EH(){throw A.b(A.bu("Cannot modify unmodifiable Map"))},
EI(){throw A.b(A.bu("Cannot modify constant Set"))},
DL(a){var s=A.DK(a)
if(s!=null)return s
return"minified:"+a},
K7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c3(a)
return s},
iQ(a){var s,r=$.Bl
if(r==null)r=$.Bl=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dM(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fh(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aP(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
lG(a){var s,r,q,p
if(a instanceof A.L)return A.bR(A.cj(a),null)
s=J.eW(a)
if(s===B.jJ||s===B.jM||t.qF.b(a)){r=B.cu(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bR(A.cj(a),null)},
Bo(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.en)return a.t(0)
if(a instanceof A.bk)return a.hm(!0)
s=$.Ec()
for(r=0;r<1;++r){q=s[r].p6(a)
if(q!=null)return q}return"Instance of '"+A.lG(a)+"'"},
FP(){return Date.now()},
FW(){var s,r
if($.t2!==0)return
$.t2=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.t2=1e6
$.t3=new A.t1(r)},
FO(){if(!!self.location)return self.location.href
return null},
FX(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.e9(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.b2(a,0,1114111,null,null))},
ho(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
FV(a){var s=A.ho(a).getUTCFullYear()+0
return s},
FT(a){var s=A.ho(a).getUTCMonth()+1
return s},
Bm(a){var s=A.ho(a).getUTCDate()+0
return s},
Bn(a){var s=A.ho(a).getUTCHours()+0
return s},
FS(a){var s=A.ho(a).getUTCMinutes()+0
return s},
FU(a){var s=A.ho(a).getUTCSeconds()+0
return s},
FR(a){var s=A.ho(a).getUTCMilliseconds()+0
return s},
FQ(a){var s=a.$thrownJsError
if(s==null)return null
return A.cZ(s)},
Bp(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
yb(a){throw A.b(A.xZ(a))},
d(a,b){if(a==null)J.cD(a)
throw A.b(A.y5(a,b))},
y5(a,b){var s,r="index"
if(!A.b_(b))return new A.cF(!0,b,r,null)
s=A.h(J.cD(a))
if(b<0||b>=s)return A.qu(b,s,a,r)
return A.Br(b,r)},
JU(a,b,c){if(a>c)return A.b2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b2(b,a,c,"end",null)
return new A.cF(!0,b,"end",null)},
xZ(a){return new A.cF(!0,a,null,null)},
b(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dU()
b.dartException=a
s=A.Kt
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Kt(){return J.c3(this.dartException)},
f(a,b){throw A.aR(a,b==null?new Error():b)},
aV(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.I0(a,b,c),s)},
I0(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.j9("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.aD(a))},
dV(a){var s,r,q,p,o,n
a=A.DF(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
BH(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
z8(a,b){var s=b==null,r=s?null:b.method
return new A.ld(a,r,s?null:b.receiver)},
ah(a){var s
if(a==null)return new A.rx(a)
if(a instanceof A.ij){s=a.a
return A.eX(a,s==null?A.fK(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eX(a,a.dartException)
return A.Jl(a)},
eX(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Jl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.e9(r,16)&8191)===10)switch(q){case 438:return A.eX(a,A.z8(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.eX(a,new A.iJ())}}if(a instanceof TypeError){p=$.DP()
o=$.DQ()
n=$.DR()
m=$.DS()
l=$.DV()
k=$.DW()
j=$.DU()
$.DT()
i=$.DY()
h=$.DX()
g=p.b7(s)
if(g!=null)return A.eX(a,A.z8(A.w(s),g))
else{g=o.b7(s)
if(g!=null){g.method="call"
return A.eX(a,A.z8(A.w(s),g))}else if(n.b7(s)!=null||m.b7(s)!=null||l.b7(s)!=null||k.b7(s)!=null||j.b7(s)!=null||m.b7(s)!=null||i.b7(s)!=null||h.b7(s)!=null){A.w(s)
return A.eX(a,new A.iJ())}}return A.eX(a,new A.m6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.j4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eX(a,new A.cF(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.j4()
return a},
cZ(a){var s
if(a instanceof A.ij)return a.b
if(a==null)return new A.jC(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jC(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nB(a){if(a==null)return J.aN(a)
if(typeof a=="object")return A.iQ(a)
return J.aN(a)},
JM(a){if(typeof a=="number")return B.b.gU(a)
if(a instanceof A.n7)return A.iQ(a)
if(a instanceof A.bk)return a.gU(a)
return A.nB(a)},
Dr(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
JZ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
Iq(a,b,c,d,e,f){t.BO.a(a)
switch(A.h(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.vx("Unsupported number of arguments for wrapped closure"))},
i0(a,b){var s=a.$identity
if(!!s)return s
s=A.JO(a,b)
a.$identity=s
return s},
JO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Iq)},
EG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.m1().constructor.prototype):Object.create(new A.fU(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.AL(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.EC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.AL(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
EC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ex)}throw A.b("Error in functionType of tearoff")},
ED(a,b,c,d){var s=A.AJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
AL(a,b,c,d){if(c)return A.EF(a,b,d)
return A.ED(b.length,d,a,b)},
EE(a,b,c,d){var s=A.AJ,r=A.Ey
switch(b?-1:a){case 0:throw A.b(new A.lQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
EF(a,b,c){var s,r
if($.AH==null)$.AH=A.AG("interceptor")
if($.AI==null)$.AI=A.AG("receiver")
s=b.length
r=A.EE(s,c,a,b)
return r},
Ae(a){return A.EG(a)},
Ex(a,b){return A.jG(v.typeUniverse,A.cj(a.a),b)},
AJ(a){return a.a},
Ey(a){return a.b},
AG(a){var s,r,q,p=new A.fU("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.o("Field name "+a+" not found.",null))},
y8(a){return v.getIsolateTag(a)},
DJ(){return v.G},
Lq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
K8(a){var s,r,q,p,o,n=A.w($.Dw.$1(a)),m=$.y6[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aq($.Dm.$2(a,n))
if(q!=null){m=$.y6[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.yK(s)
$.y6[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.yf[n]=s
return s}if(p==="-"){o=A.yK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.DD(a,s)
if(p==="*")throw A.b(A.BI(n))
if(v.leafTags[n]===true){o=A.yK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.DD(a,s)},
DD(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Aj(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
yK(a){return J.Aj(a,!1,null,!!a.$ic5)},
Ka(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.yK(s)
else return J.Aj(s,c,null,null)},
K2(){if(!0===$.Ah)return
$.Ah=!0
A.K3()},
K3(){var s,r,q,p,o,n,m,l
$.y6=Object.create(null)
$.yf=Object.create(null)
A.K1()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.DE.$1(o)
if(n!=null){m=A.Ka(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
K1(){var s,r,q,p,o,n,m=B.f7()
m=A.i_(B.f8,A.i_(B.f9,A.i_(B.cv,A.i_(B.cv,A.i_(B.fa,A.i_(B.fb,A.i_(B.fc(B.cu),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Dw=new A.yc(p)
$.Dm=new A.yd(o)
$.DE=new A.ye(n)},
i_(a,b){return a(b)||b},
H7(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
JQ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
B5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
Kn(a,b,c){var s=a.indexOf(b,c)
return s>=0},
JX(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
DF(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yU(a,b,c){var s=A.Ko(a,b,c)
return s},
Ko(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.DF(b),"g"),A.JX(c))},
a5:function a5(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
id:function id(a,b){this.a=a
this.$ti=b},
h_:function h_(){},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fC:function fC(a,b){this.a=a
this.$ti=b},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d4:function d4(a,b){this.a=a
this.$ti=b},
h0:function h0(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
ha:function ha(a,b){this.a=a
this.$ti=b},
t1:function t1(a){this.a=a},
j_:function j_(){},
uJ:function uJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iJ:function iJ(){},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
m6:function m6(a){this.a=a},
rx:function rx(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
jC:function jC(a){this.a=a
this.b=null},
en:function en(){},
ku:function ku(){},
kv:function kv(){},
m3:function m3(){},
m1:function m1(){},
fU:function fU(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qO:function qO(a){this.a=a},
qY:function qY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
N:function N(a,b){this.a=a
this.$ti=b},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fb:function fb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
yc:function yc(a){this.a=a},
yd:function yd(a){this.a=a},
ye:function ye(a){this.a=a},
bk:function bk(){},
e0:function e0(){},
e1:function e1(){},
hF:function hF(){},
iw:function iw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mN:function mN(a){this.b=a},
ms:function ms(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j6:function j6(a,b){this.a=a
this.c=b},
n3:function n3(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Kq(a){throw A.aR(A.B8(a),new Error())},
t(){throw A.aR(A.a9(""),new Error())},
b6(){throw A.aR(A.Fw(""),new Error())},
nC(){throw A.aR(A.B8(""),new Error())},
ak(){var s=new A.vw()
return s.b=s},
vw:function vw(){this.b=null},
wx(a,b,c){},
S(a){return a},
FF(a,b,c){A.wx(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
FG(a){return new Int8Array(a)},
FH(a){return new Uint8Array(a)},
lv(a){return new Uint8Array(A.S(a))},
Bj(a,b,c){A.wx(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e5(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.y5(b,a))},
zH(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.JU(a,b,c))
return b},
ew:function ew(){},
hl:function hl(){},
iH:function iH(){},
wj:function wj(a){this.a=a},
lo:function lo(){},
bq:function bq(){},
iF:function iF(){},
iG:function iG(){},
iE:function iE(){},
lp:function lp(){},
lq:function lq(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
ff:function ff(){},
iI:function iI(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
ju:function ju(){},
zj(a,b){var s=b.c
return s==null?b.c=A.jE(a,"aS",[b.x]):s},
Bw(a){var s=a.w
if(s===6||s===7)return A.Bw(a.x)
return s===11||s===12},
G6(a){return a.as},
Kb(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.wi(v.typeUniverse,a,!1)},
fN(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fN(a1,s,a3,a4)
if(r===s)return a2
return A.Cd(a1,r,!0)
case 7:s=a2.x
r=A.fN(a1,s,a3,a4)
if(r===s)return a2
return A.Cc(a1,r,!0)
case 8:q=a2.y
p=A.hY(a1,q,a3,a4)
if(p===q)return a2
return A.jE(a1,a2.x,p)
case 9:o=a2.x
n=A.fN(a1,o,a3,a4)
m=a2.y
l=A.hY(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zu(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hY(a1,j,a3,a4)
if(i===j)return a2
return A.Ce(a1,k,i)
case 11:h=a2.x
g=A.fN(a1,h,a3,a4)
f=a2.y
e=A.Jh(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Cb(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hY(a1,d,a3,a4)
o=a2.x
n=A.fN(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zv(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kj("Attempted to substitute unexpected RTI kind "+a0))}},
hY(a,b,c,d){var s,r,q,p,o=b.length,n=A.wo(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fN(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Ji(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.wo(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fN(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Jh(a,b,c,d){var s,r=b.a,q=A.hY(a,r,c,d),p=b.b,o=A.hY(a,p,c,d),n=b.c,m=A.Ji(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mG()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
Af(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.K0(s)
return a.$S()}return null},
K4(a,b){var s
if(A.Bw(b))if(a instanceof A.en){s=A.Af(a)
if(s!=null)return s}return A.cj(a)},
cj(a){if(a instanceof A.L)return A.v(a)
if(Array.isArray(a))return A.B(a)
return A.zP(J.eW(a))},
B(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
v(a){var s=a.$ti
return s!=null?s:A.zP(a)},
zP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.In(a,s)},
In(a,b){var s=a instanceof A.en?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Hh(v.typeUniverse,s.name)
b.$ccache=r
return r},
K0(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.wi(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Ag(a){return A.ds(A.v(a))},
Aa(a){var s
if(a instanceof A.bk)return a.fS()
s=a instanceof A.en?A.Af(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eY(a).a
if(Array.isArray(a))return A.B(a)
return A.cj(a)},
ds(a){var s=a.r
return s==null?a.r=new A.n7(a):s},
JY(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jG(v.typeUniverse,A.Aa(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.Cg(v.typeUniverse,s,A.Aa(q[r]))}return A.jG(v.typeUniverse,s,a)},
cA(a){return A.ds(A.wi(v.typeUniverse,a,!1))},
Im(a){var s=this
s.b=A.Jc(s)
return s.b(a)},
Jc(a){var s,r,q,p,o
if(a===t.K)return A.Iw
if(A.fO(a))return A.IC
s=a.w
if(s===6)return A.Ie
if(s===1)return A.CU
if(s===7)return A.Ir
r=A.Ja(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fO)){a.f="$i"+q
if(q==="J")return A.Iu
if(a===t.m)return A.It
return A.IB}}else if(s===10){p=A.JQ(a.x,a.y)
o=p==null?A.CU:p
return o==null?A.fK(o):o}return A.Ic},
Ja(a){if(a.w===8){if(a===t.S)return A.b_
if(a===t.i||a===t.J)return A.Iv
if(a===t.N)return A.IA
if(a===t.y)return A.bx}return null},
Il(a){var s=this,r=A.Ib
if(A.fO(s))r=A.HG
else if(s===t.K)r=A.fK
else if(A.i2(s)){r=A.Id
if(s===t.lo)r=A.zB
else if(s===t.dR)r=A.aq
else if(s===t.k7)r=A.CA
else if(s===t.s7)r=A.zC
else if(s===t.u6)r=A.CB
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.h
else if(s===t.N)r=A.w
else if(s===t.y)r=A.T
else if(s===t.J)r=A.a1
else if(s===t.i)r=A.ax
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Ic(a){var s=this
if(a==null)return A.i2(s)
return A.Dz(v.typeUniverse,A.K4(a,s),s)},
Ie(a){if(a==null)return!0
return this.x.b(a)},
IB(a){var s,r=this
if(a==null)return A.i2(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eW(a)[s]},
Iu(a){var s,r=this
if(a==null)return A.i2(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eW(a)[s]},
It(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
CT(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ib(a){var s=this
if(a==null){if(A.i2(s))return a}else if(s.b(a))return a
throw A.aR(A.CG(a,s),new Error())},
Id(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.CG(a,s),new Error())},
CG(a,b){return new A.hJ("TypeError: "+A.C5(a,A.bR(b,null)))},
Dp(a,b,c,d){if(A.Dz(v.typeUniverse,a,b))return a
throw A.aR(A.H9("The type argument '"+A.bR(a,null)+"' is not a subtype of the type variable bound '"+A.bR(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
C5(a,b){return A.kM(a)+": type '"+A.bR(A.Aa(a),null)+"' is not a subtype of type '"+b+"'"},
H9(a){return new A.hJ("TypeError: "+a)},
cy(a,b){return new A.hJ("TypeError: "+A.C5(a,b))},
Ir(a){var s=this
return s.x.b(a)||A.zj(v.typeUniverse,s).b(a)},
Iw(a){return a!=null},
fK(a){if(a!=null)return a
throw A.aR(A.cy(a,"Object"),new Error())},
IC(a){return!0},
HG(a){return a},
CU(a){return!1},
bx(a){return!0===a||!1===a},
T(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cy(a,"bool"),new Error())},
CA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cy(a,"bool?"),new Error())},
ax(a){if(typeof a=="number")return a
throw A.aR(A.cy(a,"double"),new Error())},
CB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cy(a,"double?"),new Error())},
b_(a){return typeof a=="number"&&Math.floor(a)===a},
h(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cy(a,"int"),new Error())},
zB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cy(a,"int?"),new Error())},
Iv(a){return typeof a=="number"},
a1(a){if(typeof a=="number")return a
throw A.aR(A.cy(a,"num"),new Error())},
zC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cy(a,"num?"),new Error())},
IA(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.aR(A.cy(a,"String"),new Error())},
aq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cy(a,"String?"),new Error())},
a(a){if(A.CT(a))return a
throw A.aR(A.cy(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.CT(a))return a
throw A.aR(A.cy(a,"JSObject?"),new Error())},
Db(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bR(a[q],b)
return s},
IY(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Db(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bR(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
CK(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bR(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bR(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bR(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bR(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bR(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bR(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bR(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bR(a.x,b)+">"
if(l===8){p=A.Jk(a.x)
o=a.y
return o.length>0?p+("<"+A.Db(o,b)+">"):p}if(l===10)return A.IY(a,b)
if(l===11)return A.CK(a,b,null)
if(l===12)return A.CK(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Jk(a){var s=A.DK(a)
if(s!=null)return s
return"minified:"+a},
Hi(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Hh(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.wi(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jF(a,5,"#")
q=A.wo(s)
for(p=0;p<s;++p)q[p]=r
o=A.jE(a,b,q)
n[b]=o
return o}else return m},
Hg(a,b){return A.Co(a.tR,b)},
Hf(a,b){return A.Co(a.eT,b)},
wi(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Cf(a,null,b,!1)
r.set(b,s)
return s},
jG(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Cf(a,b,c,!0)
q.set(c,r)
return r},
Cg(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zu(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Cf(a,b,c,d){return A.H5(A.H_(a,b,c,d))},
eN(a,b){b.a=A.Il
b.b=A.Im
return b},
jF(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cS(null,null)
s.w=b
s.as=c
r=A.eN(a,s)
a.eC.set(c,r)
return r},
Cd(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Hd(a,b,r,c)
a.eC.set(r,s)
return s},
Hd(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fO(b))if(!(b===t.c||b===t.E))if(s!==6)r=s===7&&A.i2(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cS(null,null)
q.w=6
q.x=b
q.as=c
return A.eN(a,q)},
Cc(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Hb(a,b,r,c)
a.eC.set(r,s)
return s},
Hb(a,b,c,d){var s,r
if(d){s=b.w
if(A.fO(b)||b===t.K)return b
else if(s===1)return A.jE(a,"aS",[b])
else if(b===t.c||b===t.E)return t.eZ}r=new A.cS(null,null)
r.w=7
r.x=b
r.as=c
return A.eN(a,r)},
He(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=13
s.x=b
s.as=q
r=A.eN(a,s)
a.eC.set(q,r)
return r},
jD(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ha(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jE(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jD(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cS(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eN(a,r)
a.eC.set(p,q)
return q},
zu(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jD(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cS(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eN(a,o)
a.eC.set(q,n)
return n},
Ce(a,b,c){var s,r,q="+"+(b+"("+A.jD(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eN(a,s)
a.eC.set(q,r)
return r},
Cb(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jD(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jD(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ha(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cS(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eN(a,p)
a.eC.set(r,o)
return o},
zv(a,b,c,d){var s,r=b.as+("<"+A.jD(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Hc(a,b,c,r,d)
a.eC.set(r,s)
return s},
Hc(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.wo(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fN(a,b,r,0)
m=A.hY(a,c,r,0)
return A.zv(a,n,m,c!==m)}}l=new A.cS(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eN(a,l)},
H_(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
H5(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.H1(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.C8(a,r,l,k,!1)
else if(q===46)r=A.C8(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fF(a.u,a.e,k.pop()))
break
case 94:k.push(A.He(a.u,k.pop()))
break
case 35:k.push(A.jF(a.u,5,"#"))
break
case 64:k.push(A.jF(a.u,2,"@"))
break
case 126:k.push(A.jF(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.H3(a,k)
break
case 38:A.H2(a,k)
break
case 63:p=a.u
k.push(A.Cd(p,A.fF(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Cc(p,A.fF(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.H0(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.C9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.H6(a.u,a.e,o)
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
return A.fF(a.u,a.e,m)},
H1(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
C8(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Hi(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.G6(o)+'"')
d.push(A.jG(s,o,n))}else d.push(p)
return m},
H3(a,b){var s,r=a.u,q=A.C7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jE(r,p,q))
else{s=A.fF(r,a.e,p)
switch(s.w){case 11:b.push(A.zv(r,s,q,a.n))
break
default:b.push(A.zu(r,s,q))
break}}},
H0(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.C7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fF(p,a.e,o)
q=new A.mG()
q.a=s
q.b=n
q.c=m
b.push(A.Cb(p,r,q))
return
case-4:b.push(A.Ce(p,b.pop(),s))
return
default:throw A.b(A.kj("Unexpected state under `()`: "+A.y(o)))}},
H2(a,b){var s=b.pop()
if(0===s){b.push(A.jF(a.u,1,"0&"))
return}if(1===s){b.push(A.jF(a.u,4,"1&"))
return}throw A.b(A.kj("Unexpected extended operation "+A.y(s)))},
C7(a,b){var s=b.splice(a.p)
A.C9(a.u,a.e,s)
a.p=b.pop()
return s},
fF(a,b,c){if(typeof c=="string")return A.jE(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.H4(a,b,c)}else return c},
C9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fF(a,b,c[s])},
H6(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fF(a,b,c[s])},
H4(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kj("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kj("Bad index "+c+" for "+b.t(0)))},
Dz(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b5(a,b,null,c,null)
r.set(c,s)}return s},
b5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fO(d))return!0
s=b.w
if(s===4)return!0
if(A.fO(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b5(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.E){if(q===7)return A.b5(a,b,c,d.x,e)
return d===p||d===t.E||q===6}if(d===t.K){if(s===7)return A.b5(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b5(a,b.x,c,d,e))return!1
return A.b5(a,A.zj(a,b),c,d,e)}if(s===6)return A.b5(a,p,c,d,e)&&A.b5(a,b.x,c,d,e)
if(q===7){if(A.b5(a,b,c,d.x,e))return!0
return A.b5(a,b,c,A.zj(a,d),e)}if(q===6)return A.b5(a,b,c,p,e)||A.b5(a,b,c,d.x,e)
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
if(!A.b5(a,j,c,i,e)||!A.b5(a,i,e,j,c))return!1}return A.CS(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.CS(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Is(a,b,c,d,e)}if(o&&q===10)return A.Ix(a,b,c,d,e)
return!1},
CS(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b5(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b5(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b5(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b5(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b5(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Is(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jG(a,b,r[o])
return A.Cy(a,p,null,c,d.y,e)}return A.Cy(a,b.y,null,c,d.y,e)},
Cy(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b5(a,b[s],d,e[s],f))return!1
return!0},
Ix(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b5(a,r[s],c,q[s],e))return!1
return!0},
i2(a){var s=a.w,r=!0
if(!(a===t.c||a===t.E))if(!A.fO(a))if(s!==6)r=s===7&&A.i2(a.x)
return r},
fO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Co(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
wo(a){return a>0?new Array(a):v.typeUniverse.sEA},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mG:function mG(){this.c=this.b=this.a=null},
n7:function n7(a){this.a=a},
mE:function mE(){},
hJ:function hJ(a){this.a=a},
GS(){var s,r,q
if(self.scheduleImmediate!=null)return A.JC()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.i0(new A.vs(s),1)).observe(r,{childList:true})
return new A.vr(s,r,q)}else if(self.setImmediate!=null)return A.JD()
return A.JE()},
GT(a){self.scheduleImmediate(A.i0(new A.vt(t.O.a(a)),0))},
GU(a){self.setImmediate(A.i0(new A.vu(t.O.a(a)),0))},
GV(a){A.zn(B.fG,t.O.a(a))},
zn(a,b){return A.H8(a.a/1000|0,b)},
H8(a,b){var s=new A.wf()
s.jU(a,b)
return s},
aL(a){return new A.mu(new A.as($.ar,a.i("as<0>")),a.i("mu<0>"))},
aK(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.HJ(a,b)},
aJ(a,b){b.ee(a)},
aI(a,b){b.ef(A.ah(a),A.cZ(a))},
HJ(a,b){var s,r,q=new A.wu(b),p=new A.wv(b)
if(a instanceof A.as)a.hk(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.eS(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.hk(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.ix(new A.xY(s),t.H,t.S,t.z)},
Ca(a,b,c){return 0},
nV(a){var s
if(t.yt.b(a)){s=a.gc1()
if(s!=null)return s}return B.aJ},
AU(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.dQ(null)
return s},
F9(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.BG(a,new A.pz(b,s,c))
return s},
pA(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<J<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pC(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.eS(new A.pB(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cJ(A.c([],b.i("x<0>")))
return n}i.a=A.d9(n,null,!1,b.i("0?"))}catch(l){p=A.ah(l)
o=A.cZ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.zQ(m,k)
m=new A.bn(m,k==null?A.nV(m):k)
n.cG(m)
return n}else{i.d=p
i.c=o}}return f},
zQ(a,b){if($.ar===B.C)return null
return null},
Io(a,b){if($.ar!==B.C)A.zQ(a,b)
if(b==null)if(t.yt.b(a)){b=a.gc1()
if(b==null){A.Bp(a,B.aJ)
b=B.aJ}}else b=B.aJ
else if(t.yt.b(a))A.Bp(a,b)
return new A.bn(a,b)},
GW(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
vC(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Gj()
b.cG(new A.bn(new A.cF(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.h2(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c9()
b.cI(o.a)
A.fA(b,p)
return}b.a^=2
A.ns(null,null,b.b,t.O.a(new A.vD(o,b)))},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.A2(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fA(d.a,c)
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
A.A2(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.vH(q,d,n).$0()
else if(o){if((c&1)!==0)new A.vG(q,j).$0()}else if((c&2)!==0)new A.vF(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("aS<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cR(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vC(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cR(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
D5(a,b){var s
if(t.nW.b(a))return b.ix(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.a7(a,"onError",u.c))},
IM(){var s,r
for(s=$.hU;s!=null;s=$.hU){$.k0=null
r=s.b
$.hU=r
if(r==null)$.k_=null
s.a.$0()}},
Jf(){$.zR=!0
try{A.IM()}finally{$.k0=null
$.zR=!1
if($.hU!=null)$.Ar().$1(A.Dn())}},
De(a){var s=new A.mv(a),r=$.k_
if(r==null){$.hU=$.k_=s
if(!$.zR)$.Ar().$1(A.Dn())}else $.k_=r.b=s},
J7(a){var s,r,q,p=$.hU
if(p==null){A.De(a)
$.k0=$.k_
return}s=new A.mv(a)
r=$.k0
if(r==null){s.b=p
$.hU=$.k0=s}else{q=r.b
s.b=q
$.k0=r.b=s
if(q==null)$.k_=s}},
KK(a,b){A.e7(a,"stream",t.K)
return new A.n2(b.i("n2<0>"))},
BG(a,b){var s=$.ar
if(s===B.C)return A.zn(a,t.O.a(b))
return A.zn(a,t.O.a(s.hC(b)))},
A2(a,b){A.J7(new A.xH(a,b))},
Da(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
J4(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
J3(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
ns(a,b,c,d){t.O.a(d)
if(B.C!==c){d=c.hC(d)
d=d}A.De(d)},
vs:function vs(a){this.a=a},
vr:function vr(a,b,c){this.a=a
this.b=b
this.c=c},
vt:function vt(a){this.a=a},
vu:function vu(a){this.a=a},
wf:function wf(){},
wg:function wg(a,b){this.a=a
this.b=b},
mu:function mu(a,b){this.a=a
this.b=!1
this.$ti=b},
wu:function wu(a){this.a=a},
wv:function wv(a){this.a=a},
xY:function xY(a){this.a=a},
cf:function cf(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bI:function bI(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.b=b},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pB:function pB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
my:function my(){},
jg:function jg(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c,d,e){var _=this
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
vz:function vz(a,b){this.a=a
this.b=b},
vE:function vE(a,b){this.a=a
this.b=b},
vD:function vD(a,b){this.a=a
this.b=b},
vB:function vB(a,b){this.a=a
this.b=b},
vA:function vA(a,b){this.a=a
this.b=b},
vH:function vH(a,b,c){this.a=a
this.b=b
this.c=c},
vI:function vI(a,b){this.a=a
this.b=b},
vJ:function vJ(a){this.a=a},
vG:function vG(a,b){this.a=a
this.b=b},
vF:function vF(a,b){this.a=a
this.b=b},
mv:function mv(a){this.a=a
this.b=null},
n2:function n2(a){this.$ti=a},
jO:function jO(){},
mW:function mW(){},
wd:function wd(a,b){this.a=a
this.b=b},
xH:function xH(a,b){this.a=a
this.b=b},
C6(a,b){var s=a[b]
return s===a?null:s},
zs(a,b,c){if(c==null)a[b]=a
else a[b]=c},
zr(){var s=Object.create(null)
A.zs(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ba(a,b){return new A.cp(a.i("@<0>").S(b).i("cp<1,2>"))},
E(a,b,c){return b.i("@<0>").S(c).i("z9<1,2>").a(A.Dr(a,new A.cp(b.i("@<0>").S(c).i("cp<1,2>"))))},
n(a,b){return new A.cp(a.i("@<0>").S(b).i("cp<1,2>"))},
za(a){return new A.cx(a.i("cx<0>"))},
a_(a){return new A.cx(a.i("cx<0>"))},
aF(a,b){return b.i("Bb<0>").a(A.JZ(a,new A.cx(b.i("cx<0>"))))},
zt(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fE(a,b,c){var s=new A.fD(a,b,c.i("fD<0>"))
s.c=a.e
return s},
bK(a,b){var s=J.O(a)
if(s.m())return s.gp()
return null},
aZ(a,b,c){var s=A.Ba(b,c)
a.aJ(0,new A.qZ(s,b,c))
return s},
hg(a,b,c){var s=A.Ba(b,c)
s.L(0,a)
return s},
hh(a,b){var s,r=A.za(b)
for(s=J.O(a);s.m();)r.k(0,b.a(s.gp()))
return r},
fc(a,b){var s=A.za(b)
s.L(0,a)
return s},
zc(a){var s,r
if(A.Ai(a))return"{...}"
s=new A.bE("")
try{r={}
B.a.k($.ci,a)
s.a+="{"
r.a=!0
a.aJ(0,new A.r1(r,s))
s.a+="}"}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Hj(){throw A.b(A.bu("Cannot change an unmodifiable set"))},
jl:function jl(){},
vL:function vL(a){this.a=a},
jn:function jn(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fB:function fB(a,b){this.a=a
this.$ti=b},
jm:function jm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cx:function cx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mM:function mM(a){this.a=a
this.c=this.b=null},
fD:function fD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qZ:function qZ(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
ag:function ag(){},
r0:function r0(a){this.a=a},
r1:function r1(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.$ti=b},
jp:function jp(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jH:function jH(){},
hi:function hi(){},
eC:function eC(a,b){this.a=a
this.$ti=b},
dg:function dg(){},
jB:function jB(){},
n8:function n8(){},
hB:function hB(a,b){this.a=a
this.$ti=b},
hK:function hK(){},
jI:function jI(){},
IR(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.M(String(s),null,null)
throw A.b(q)}q=A.wY(p)
return q},
wY(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mK(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.wY(a[s])
return a},
HA(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.E2()
else s=new Uint8Array(o)
for(r=J.aQ(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Hz(a,b,c,d){var s=a?$.E1():$.E0()
if(s==null)return null
if(0===c&&d===b.length)return A.Cn(s,b)
return A.Cn(s,b.subarray(c,d))},
Cn(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
AF(a,b,c,d,e,f){if(B.d.O(f,4)!==0)throw A.b(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
B7(a,b,c){return new A.iy(a,b)},
I_(a){return a.C()},
GX(a,b){return new A.vO(a,[],A.JP())},
GY(a,b,c){var s,r=new A.bE(""),q=A.GX(r,b)
q.dG(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
HB(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mK:function mK(a,b){this.a=a
this.b=b
this.c=null},
vN:function vN(a){this.a=a},
mL:function mL(a){this.a=a},
wm:function wm(){},
wl:function wl(){},
kg:function kg(){},
wh:function wh(){},
kh:function kh(a,b){this.a=a
this.b=b},
ko:function ko(){},
oB:function oB(){},
eo:function eo(){},
kz:function kz(){},
kL:function kL(){},
iy:function iy(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
le:function le(){},
qQ:function qQ(a){this.b=a},
qP:function qP(a){this.a=a},
vP:function vP(){},
vQ:function vQ(a,b){this.a=a
this.b=b},
vO:function vO(a,b,c){this.c=a
this.a=b
this.b=c},
ma:function ma(){},
uR:function uR(){},
wn:function wn(a){this.b=0
this.c=a},
uQ:function uQ(a){this.a=a},
wk:function wk(a){this.a=a
this.b=16
this.c=0},
Dy(a){var s=A.dM(a,null)
if(s!=null)return s
throw A.b(A.M(a,null,null))},
nw(a){var s=A.fh(a)
if(s!=null)return s
throw A.b(A.M("Invalid double",a,null))},
F5(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fK(a)
a.stack=b.t(0)
throw a},
d9(a,b,c,d){var s,r=c?J.B2(a,d):J.B1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aG(a,b,c){var s,r=A.c([],c.i("x<0>"))
for(s=J.O(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("x<0>"))
s=A.c([],b.i("x<0>"))
for(r=J.O(a);r.m();)B.a.k(s,r.gp())
return s},
ab(a,b){var s=A.aG(a,!1,b)
s.$flags=3
return s},
zm(a,b,c){var s,r
A.lL(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.b2(c,b,null,"end",null))
if(s===0)return""}r=A.Gm(a,b,c)
return r},
Gm(a,b,c){var s=a.length
if(b>=s)return""
return A.FX(a,b,c==null||c>s?s:c)},
iV(a){return new A.iw(a,A.B5(a,!1,!0,!1,!1,""))},
zl(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gp())
while(s.m())}else{a+=A.y(s.gp())
while(s.m())a=a+c+A.y(s.gp())}return a},
dW(){var s,r,q=A.FO()
if(q==null)throw A.b(A.bu("'Uri.base' is not supported"))
s=$.BL
if(s!=null&&q===$.BK)return s
r=A.Gs(q)
$.BL=r
$.BK=q
return r},
Gj(){return A.cZ(new Error())},
EM(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
AN(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
kB(a){if(a>=10)return""+a
return"0"+a},
F4(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.a7(b,"name","No enum value with that name"))},
kM(a){if(typeof a=="number"||A.bx(a)||a==null)return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Bo(a)},
F6(a,b){A.e7(a,"error",t.K)
A.e7(b,"stackTrace",t.l)
A.F5(a,b)},
kj(a){return new A.ki(a)},
o(a,b){return new A.cF(!1,null,b,a)},
a7(a,b,c){return new A.cF(!0,a,b,c)},
Bq(a){var s=null
return new A.hp(s,s,!1,s,s,a)},
Br(a,b){return new A.hp(null,null,!0,a,b,"Value not in range")},
b2(a,b,c,d,e){return new A.hp(b,c,!0,a,d,"Invalid value")},
fj(a,b,c){if(0>a||a>c)throw A.b(A.b2(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b2(b,a,c,"end",null))
return b}return c},
lL(a,b){if(a<0)throw A.b(A.b2(a,0,null,b,null))
return a},
qu(a,b,c,d){return new A.l5(b,!0,a,d,"Index out of range")},
bu(a){return new A.j9(a)},
BI(a){return new A.m5(a)},
i(a){return new A.hw(a)},
aD(a){return new A.kw(a)},
M(a,b,c){return new A.A(a,b,c)},
Fr(a,b,c){var s,r
if(A.Ai(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.ci,a)
try{A.ID(a,s)}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}r=A.zl(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
z5(a,b,c){var s,r
if(A.Ai(a))return b+"..."+c
s=new A.bE(b)
B.a.k($.ci,a)
try{r=s
r.a=A.zl(r.a,a,", ")}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ID(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
zd(a,b,c){var s=A.n(b,c)
s.lR(a)
return s},
cP(a,b,c,d,e,f){var s
if(B.h===c){s=J.aN(a)
b=J.aN(b)
return A.j8(A.b4(A.b4($.i3(),s),b))}if(B.h===d){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
return A.j8(A.b4(A.b4(A.b4($.i3(),s),b),c))}if(B.h===e){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
return A.j8(A.b4(A.b4(A.b4(A.b4($.i3(),s),b),c),d))}if(B.h===f){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
return A.j8(A.b4(A.b4(A.b4(A.b4(A.b4($.i3(),s),b),c),d),e))}s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
f=J.aN(f)
f=A.j8(A.b4(A.b4(A.b4(A.b4(A.b4(A.b4($.i3(),s),b),c),d),e),f))
return f},
FI(a){var s,r,q=$.i3()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r)q=A.b4(q,J.aN(a[r]))
return A.j8(q)},
fo(a,b){return new A.hB(A.fc(a,b),b.i("hB<0>"))},
Gs(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.BJ(a4<a4?B.c.J(a5,0,a4):a5,5,a3).giG()
else if(s===32)return A.BJ(B.c.J(a5,5,a4),0,a3).giG()}r=A.d9(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.Dd(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.Dd(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.ar(a5,"\\",n))if(p>0)h=B.c.ar(a5,"\\",p-1)||B.c.ar(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.ar(a5,"..",n)))h=m>n+2&&B.c.ar(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.ar(a5,"file",0)){if(p<=0){if(!B.c.ar(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.J(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.bX(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.ar(a5,"http",0)){if(i&&o+3===n&&B.c.ar(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.bX(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.ar(a5,"https",0)){if(i&&o+4===n&&B.c.ar(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.bX(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.n_(a4<a5.length?B.c.J(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Ht(a5,0,q)
else{if(q===0)A.hL(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Hu(a5,c,p-1):""
a=A.Hp(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dM(B.c.J(a5,i,n),a3)
d=A.Hr(a0==null?A.f(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Hq(a5,n,m,a3,j,a!=null)
a2=m<l?A.Hs(a5,m+1,l,a3):a3
return A.Hk(j,b,a,d,a1,a2,l<a4?A.Ho(a5,l+1,a4):a3)},
BN(a){var s=t.N
return B.a.b6(A.c(a.split("&"),t.s),A.n(s,s),new A.uP(B.cx),t.G)},
m9(a,b,c){throw A.b(A.M("Illegal IPv4 address, "+a,b,c))},
Gp(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.m9("each part must be in the range 0..255",a,r)}A.m9("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.m9(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aV(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.m9(j,a,q)
p=l}A.m9("IPv4 address should contain exactly 4 parts",a,q)},
Gq(a,b,c){var s
if(b===c)throw A.b(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Gr(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.BM(a,b,c)
return!0},
Gr(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
BM(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uO(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Gp(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.e9(l,8)
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
B.a3.j6(s,a0,16,s,a)
B.a3.nr(s,a,a0,0)}}return s},
Hk(a,b,c,d,e,f,g){return new A.jJ(a,b,c,d,e,f,g)},
Ch(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hL(a,b,c){throw A.b(A.M(c,a,b))},
Hr(a,b){var s=A.Ch(b)
if(a===s)return null
return a},
Hp(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hL(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Hm(a,q,r)
if(o<r){n=o+1
p=A.Cm(a,B.c.ar(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Gq(a,q,o)
l=B.c.J(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.dk(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Cm(a,B.c.ar(a,"25",n)?o+3:n,c,"%25")}else p=""
A.BM(a,b,o)
return"["+B.c.J(a,b,o)+p+"]"}}return A.Hw(a,b,c)},
Hm(a,b,c){var s=B.c.dk(a,"%",b)
return s>=b&&s<c?s:c},
Cm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bE(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.zx(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bE("")
l=h.a+=B.c.J(a,q,r)
if(m)n=B.c.J(a,r,r+3)
else if(n==="%")A.hL(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bE("")
if(q<r){h.a+=B.c.J(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.J(a,q,r)
if(h==null){h=new A.bE("")
m=h}else m=h
m.a+=i
l=A.zw(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.J(a,b,c)
if(q<c){i=B.c.J(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Hw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.zx(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bE("")
k=B.c.J(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.J(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bE("")
if(q<r){p.a+=B.c.J(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hL(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.J(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bE("")
l=p}else l=p
l.a+=k
j=A.zw(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.J(a,b,c)
if(q<c){k=B.c.J(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Ht(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.Cj(a.charCodeAt(b)))A.hL(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hL(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.J(a,b,c)
return A.Hl(q?a.toLowerCase():a)},
Hl(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Hu(a,b,c){return A.jK(a,b,c,16,!1,!1)},
Hq(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jK(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.V(q,"/"))q="/"+q
return A.Hv(q,e,f)},
Hv(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.V(a,"/")&&!B.c.V(a,"\\"))return A.Hx(a,!s||c)
return A.Hy(a)},
Hs(a,b,c,d){return A.jK(a,b,c,256,!0,!1)},
Ho(a,b,c){return A.jK(a,b,c,256,!0,!1)},
zx(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.ya(r)
o=A.ya(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aA(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.J(a,b,b+3).toUpperCase()
return null},
zw(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.lx(a,6*p)&63|q
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
o+=3}}return A.zm(s,0,null)},
jK(a,b,c,d,e,f){var s=A.Cl(a,b,c,d,e,f)
return s==null?B.c.J(a,b,c):s},
Cl(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.zx(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hL(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.zw(n)}if(o==null){o=new A.bE("")
k=o}else k=o
k.a=(k.a+=B.c.J(a,p,q))+l
if(typeof m!=="number")return A.yb(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.J(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Ck(a){if(B.c.V(a,"."))return!0
return B.c.bC(a,"/.")!==-1},
Hy(a){var s,r,q,p,o,n,m
if(!A.Ck(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.W(s,"/")},
Hx(a,b){var s,r,q,p,o,n
if(!A.Ck(a))return!b?A.Ci(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga6(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.Ci(s[0]))}return B.a.W(s,"/")},
Ci(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.Cj(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.J(a,0,s)+"%3A"+B.c.aQ(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Hn(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.o("Invalid URL encoding",null))}}return r},
zy(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cx===d)return B.c.J(a,b,c)
else p=new A.dx(B.c.J(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.o("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.o("Truncated URI",null))
B.a.k(p,A.Hn(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.oC.bz(p)},
Cj(a){var s=a|32
return 97<=s&&s<=122},
BJ(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.M(k,a,r))}}if(q<0&&r>b)throw A.b(A.M(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.ga6(j)
if(p!==44||r!==n+7||!B.c.ar(a,"base64",n+1))throw A.b(A.M("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.f5.o_(a,m,s)
else{l=A.Cl(a,m,s,256,!0,!1)
if(l!=null)a=B.c.bX(a,m,s,l)}return new A.uN(a,j,c)},
Dd(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a},
mD:function mD(){},
at:function at(){},
ki:function ki(a){this.a=a},
dU:function dU(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
l5:function l5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j9:function j9(a){this.a=a},
m5:function m5(a){this.a=a},
hw:function hw(a){this.a=a},
kw:function kw(a){this.a=a},
lw:function lw(){},
j4:function j4(){},
vx:function vx(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(){},
L:function L(){},
n5:function n5(){},
us:function us(){this.b=this.a=0},
bE:function bE(a){this.a=a},
uP:function uP(a){this.a=a},
uO:function uO(a){this.a=a},
jJ:function jJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
mz:function mz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rw:function rw(a){this.a=a},
CL(a){var s
if(typeof a=="function")throw A.b(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.HN,a)
s[$.yY()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.b(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.HO,a)
s[$.yY()]=a
return s},
HN(a){return t.BO.a(a).$0()},
HO(a,b,c){t.BO.a(a)
if(A.h(c)>=1)return a.$1(b)
return a.$0()},
ny(a,b,c){return c.a(a[b])},
CM(a,b){return a[b]},
aU(a,b,c,d){return d.a(a[b].apply(a,c))},
av(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.jg(s,b.i("jg<0>"))
a.then(A.i0(new A.yL(r,b),1),A.i0(new A.yM(r),1))
return s},
CX(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
i1(a){if(A.CX(a))return a
return new A.y3(new A.jn(t.BT)).$1(a)},
yL:function yL(a,b){this.a=a
this.b=b},
yM:function yM(a){this.a=a},
y3:function y3(a){this.a=a},
FZ(a){var s
if(a==null)s=B.b5
else{s=new A.eL()
s.c3(a)}return s},
mJ:function mJ(){},
eL:function eL(){this.b=this.a=0},
kG:function kG(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
Ge(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aG(b3,!0,b1)
B.a.k(b2,128)
while(B.d.O(b2.length,64)!==56)B.a.k(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.k(b2,B.d.jh(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.d9(64,0,!1,b1)
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
B.a.l(h,g,(d<<24|c<<16|b<<8|b2[a])>>>0)}for(g=16;g<64;++g){e=h[g-15]
d=h[g-2]
B.a.l(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.k3[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.H(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.u8()),t.dH).nR(0)},
u8:function u8(){},
mb:function mb(a,b){this.a=a
this.b=b},
FB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.q(h.w,b))throw A.b(A.a7(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.u)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.i("part "+r.a+" has no "+b+" payload")
throw A.b(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.i("model package payload is missing: "+k)):j
J.e9(s,a.mY(new Uint8Array(A.S(p))))}return new A.rf(a,s)}catch(i){for(h=s,n=A.B(h).i("bM<1>"),h=new A.bM(h,n),h=new A.al(h,h.gu(0),n.i("al<a0.E>")),n=n.i("a0.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aK(o)}throw i}},
rf:function rf(a,b){this.a=a
this.b=b
this.c=!1},
lm:function lm(a){this.e=a},
rq:function rq(a,b){this.a=a
this.b=b},
rh:function rh(){},
ri:function ri(){},
rj:function rj(){},
FC(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.b(B.i1)
s=a.h(0,"parts")
if(!t.j.b(s)||J.kc(s))throw A.b(B.hM)
r=A.xF(a,"assetId")
q=A.xF(a,"packageHash")
p=A.xF(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.O(s),m=t.P;n.m();)o.push(A.FD(m.a(n.gp())))
n=A.A9(a.h(0,"materials"))
m=A.A9(a.h(0,"textures"))
l=A.A9(a.h(0,"lods"))
k=A.CY(a.h(0,"combinedBounds"))
j=A.Jb(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bt(0,new A.rl(),h,h)
i=h}return new A.rk(r,q,p,o,n,m,l,k,j,i==null?B.aQ:i)},
FD(a){var s,r,q=A.xF(a,"id"),p=A.zB(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.h4)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bt(0,new A.rp(),r,r)
s=r}return new A.fe(q,p,s==null?B.aQ:s)},
xF(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.b(A.M(b+" is required",null,null))
return s},
Iy(a){if(a.length===0||B.c.V(a,"/")||B.c.q(a,"\\"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xu())},
A9(a){var s,r
if(a==null)return B.n
if(!t.j.b(a)||J.kb(a,new A.xO()))throw A.b(B.hl)
s=A.c([],t.s)
for(r=J.O(a);r.m();)s.push(A.w(r.gp()))
return s},
CY(a){var s,r
if(a==null)return B.bu
if(!t.j.b(a)||J.kb(a,new A.xx()))throw A.b(B.iC)
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gp()))
return s},
Jb(a){var s,r,q,p
if(a==null)return B.lr
if(!t.f.b(a))throw A.b(B.hH)
if(a.ga3().M(0,new A.xM()))throw A.b(B.i2)
s=A.n(t.N,t.dd)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gp()
p=q.a
if(typeof p=="string")s.l(0,p,A.CY(q.b))}return s},
rk:function rk(a,b,c,d,e,f,g,h,i,j){var _=this
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
rl:function rl(){},
rn:function rn(){},
ro:function ro(){},
rm:function rm(){},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(){},
xu:function xu(){},
xO:function xO(){},
xx:function xx(){},
xM:function xM(){},
DM(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.yW(m)
for(s=a.A(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){o=s[q]
n=o.a
if(!p.k(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.K("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
Ku(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.yX(n),l=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)l.L(0,s[q].c.gak())
for(s=A.fE(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.K(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bV(b,b.r,b.e,A.v(b).i("bV<1>"));s.m();){r=s.d
if(!l.q(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bf(o,".fbx")||B.c.bf(o,".obj")||B.c.bf(o,".mtl")||B.c.bf(o,".gltf")||B.c.bf(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
yW:function yW(a){this.a=a},
yX:function yX(a){this.a=a},
t9:function t9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ta:function ta(){},
fi:function fi(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
oP:function oP(a,b){this.a=a
this.b=b
this.c=null},
fZ:function fZ(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oS:function oS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oR:function oR(){var _=this
_.c=_.b=_.a=null
_.d=0},
lC:function lC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
AK(a,b,c,d,e,f,g,h){return new A.i9(g,f,h,b,d,e,c,a)},
i9:function i9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=$},
um:function um(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
_.db=p},
kT:function kT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6
_.go=a7
_.id=a8
_.k1=a9
_.k2=b0
_.k3=b1
_.k4=b2},
kU:function kU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
et(a,b){return new A.l2(a,b)},
dP:function dP(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a,b){this.a=a
this.b=b},
l2:function l2(a,b){this.a=a
this.b=b},
Ki(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.k(f,new A.jw(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.yN())
s=A.c([],t.cv)
for(r=A.hy(f,0,A.e7(b,"count",t.S),t.mn),q=r.$ti,r=new A.al(r,r.gu(0),q.i("al<a0.E>")),q=q.i("a0.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function lB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bO:function bO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yN:function yN(){},
lj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.cO(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lk(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.o("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
fS:function fS(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.w=f
_.x=g
_.z=h
_.at=i
_.ax=j
_.ch=k
_.CW=l
_.db=m
_.dx=n
_.fx=o
_.fy=p
_.go=q
_.id=r},
Fz(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.o("MeshData.indices must be Uint16List or Uint32List, got "+J.eY(a).t(0),null))}return s},
cT:function cT(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
uS:function uS(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r8:function r8(){},
r9:function r9(){},
ra:function ra(){},
kC:function kC(){},
iK(a){var s,r,q="volumetric",p=t.N,o=A.aF(["sceneColor","present"],p),n=a.a.b
if(n.q(0,"shadows"))o.L(0,A.aF(["shadowMap","sceneDepth"],p))
if(n.q(0,q)){o.k(0,"volumetricLight")
o.k(0,"sceneColor#"+(a.d>1?2:1))}if(n.q(0,"ssao"))o.L(0,A.aF(["ssaoRaw","ssaoBlurred"],p))
if(n.q(0,"bloom")){if(a.d>1)s=n.q(0,q)?3:2
else s=n.q(0,q)?2:1
o.L(0,A.aF(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.k(0,"sceneColor#1")
if(n.q(0,"dof"))o.L(0,A.aF(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.q(0,"grade"))o.k(0,"gradeOutput")
if(n.q(0,"ps1"))o.k(0,"ps1Output")
r=n.q(0,"vhs")
if(r)o.k(0,"vhsOutput")
return new A.ry(A.fo(o,p),r)},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(){},
hs:function hs(a,b){this.a=a
this.b=b},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
h5:function h5(a,b){this.a=a
this.b=b},
kq:function kq(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c,d,e,f,g,h,i,j){var _=this
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
m2:function m2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
fl:function fl(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c){this.a=a
this.b=b
this.d=c},
pw:function pw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Fx(a){var s,r,q
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=B.bF;s.m();){switch(s.d.a){case 0:q=B.bF
break
case 1:q=B.dz
break
case 2:q=B.dA
break
case 3:q=B.dB
break
default:q=null}if(A.Be(q)>A.Be(r))r=q}return r},
Be(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Dj(a){return new A.bI(A.Jj(a),t.EF)},
Jj(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Dj(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.a5("albedo",o),1
case 4:case 3:o=s.x
r=o!=null?5:6
break
case 5:r=7
return b.b=new A.a5("normal",o),1
case 7:case 6:return 0
case 1:return b.c=p.at(-1),3}}}},
fd:function fd(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r3:function r3(a){this.a=a},
r4:function r4(){},
Fy(){return new A.ll(new A.de(new A.r7(),A.c([],t.Fy),A.c([],t.t),t.ja))},
ll:function ll(a){this.a=a},
r7:function r7(){},
Dg(a){var s=4
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
case 3:s=A.f(A.bu("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
HU(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.Dg(o.a)===b)q+=o.c}return q},
FA(a){return new A.rb(a,new A.de(new A.rc(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
Bf(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.o("MeshStore indices must be Uint16List or Uint32List",null))}return s},
m7:function m7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(){},
rd:function rd(){},
JN(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bD(B.d.eU(r,16),8,"0")+B.c.bD(B.d.eU(q,16),8,"0")},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(a,b){this.b=a
this.c=b},
rg:function rg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a,b,c,d,e,f,g,h,i){var _=this
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
dN(a,b){return new A.lJ(a,b)},
Dq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.b(A.dN(B.mB,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jU[q])throw A.b(A.dN(B.mC,'expected "QMSH", got '+B.f4.mX(B.a3.aD(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.fj(0,null,B.d.ba(a.byteLength,p))
n=J.Ay(B.a3.ged(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.b(A.dN(B.mD,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.nA.q(0,k)))throw A.b(A.dN(B.dQ,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.b(A.dN(B.mE,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.O(j,3)!==0)throw A.b(A.dN(B.mG,"vertexCount "+j+" is not a multiple of 3"))
h=J.qD(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.M(h,new A.y4()))throw A.b(A.dN(B.mF,"bounds contain a non-finite value: "+A.y(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.b(A.dN(B.dR,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.ah
break A}if(18===k){d=B.oT
break A}if(20===k){d=B.oS
break A}d=A.f(A.dN(B.dQ,"no vertex layout for stride "+k))}s=new A.bW(d,g,null,new A.fR(new A.C(h[0],h[1],h[2]),new A.C(h[3],h[4],h[5])))
try{s.A()}catch(e){r=A.ah(e)
d=A.dN(B.dR,"mesh validation failed: "+A.y(r))
throw A.b(d)}return s},
cR:function cR(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){this.a=a
this.b=b},
y4:function y4(){},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
uD:function uD(a,b){this.a=a
this.b=b},
uE:function uE(a){this.a=a},
uB:function uB(a,b){this.a=a
this.b=b},
uC:function uC(){},
Gn(a){var s=new A.m4(a,new A.de(new A.uF(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.b1($.Ap())
s.e=s.b1($.Am())
s.f=s.b1($.An())
s.r=s.b1($.Al())
s.w=s.b1($.Ao())
return s},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
uF:function uF(){},
uG:function uG(){},
uI:function uI(){},
uH:function uH(){},
Gh(a,b,c,d,e){var s,r,q
if(c)return B.o9
if(d)return B.o3
s=A.BC(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.od
r=s<0
if(a>=0.2617993877991494)return r?B.e9:B.oe
if(a>=0.10471975511965977)return r?B.e9:B.of
if(a>=-0.014538592669112763)return r?B.oc:B.og
q=a*180/3.141592653589793
if(q>=-6)return r?B.ob:B.o5
if(q>=-12)return r?B.oa:B.o6
if(q>=-18)return r?B.o4:B.o7
return B.o8},
BD(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.n((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
BC(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bi:function bi(a,b){this.a=a
this.b=b},
uq:function uq(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Kj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gT(0)
if(!g)throw A.b(A.o("invalid volumetric source selection inputs",null))
s=A.a_(t.N)
r=A.c([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.u)(c),++n){m=c[n]
m.A()
l=m.a
if(!s.k(0,l))throw A.b(A.o("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.BQ(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.k(r,new A.jx(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Y(r,new A.yO())
g=A.c([],t.xL)
for(q=A.hy(r,0,A.e7(a,"count",t.S),t.bG),p=q.$ti,q=new A.al(q,q.gu(0),p.i("al<a0.E>")),p=p.i("a0.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
BQ(a,b,c){var s,r,q,p
for(s=[new A.a5("distance",b),new A.a5("referenceDistance",c),new A.a5("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.o(q.a+" must be finite: "+A.y(p),null))}if(b<0||c<=0||a<=0)throw A.b(A.o("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.n(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
Gx(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gT(0))A.f(A.o(c1+c5.t(0),c0))
if(!c3.gT(0))A.f(A.o(c2+c3.t(0),c0))
if(!isFinite(c4))A.f(A.o("rayLength must be finite: "+A.y(c4),c0))
if(!isFinite(c6))A.f(A.o("scatteringCoeff must be finite: "+A.y(c6),c0))
if(!isFinite(0.7))A.f(A.o("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.o("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbg()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.b(A.o("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.v,e=B.v,d=0,c=0;c<c7.length;c7.length===s||(0,A.u)(c7),++c){b=c7[c]
b.A()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.BQ(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.o(c1+c5.t(0),c0))
if(!(n&&m&&l))A.f(A.o(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.o("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.f(A.o("lightIntensity must be finite: "+A.y(a8),c0))
if(k)A.f(A.o("rayDirection must be nonzero",c0))
if(o)A.f(A.o("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.o("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.ga7()
a=a9.a
b0=a9.b
b1=a9.c
b2=a1*a+a3*b0+a5*b1
b3=B.b.n(b2,0,c4)
b4=a0-(r+a*b3)
b5=a2-(q+b0*b3)
b6=a4-(p+b1*b3)
b7=Math.sqrt(Math.max(0.0001,b4*b4+b5*b5+b6*b6))
b8=Math.atan(-b3/b7)
b9=Math.max(0,a8*c6/(12.566370614359172*b7)*(Math.atan((c4-b3)/b7)-b8)*(0.51/(12.566370614359172*Math.pow(1.49-1.4*(b2/Math.max(0.0001,Math.sqrt(a6))),1.5))))*a7
if(b9<=0)continue
a=b.c
f=new A.C(f.a+a.a*b9,f.b+a.b*b9,f.c+a.c*b9)
a6=b9/Math.max(1e-8,Math.sqrt(a6))
e=new A.C(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.v5(f,e.gbg()<1e-8?B.v:e.ga7(),d)},
cu:function cu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yO:function yO(){},
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
JG(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.n(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.gG().y
if(o==null){B.a.k(j,new A.dI(p,A.c([p],r)))
continue}n=""+p.gG().a.a+":"+p.gG().b.a+":"+A.y(o)
m=i.h(0,n)
if(m==null){i.l(0,n,j.length)
B.a.k(j,new A.dI(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.l(0,n,l)
B.a.k(j,new A.dI(p,A.c([p],r)))}else B.a.k(k,p)}}return j},
dI:function dI(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
pp:function pp(){},
pq:function pq(a){this.a=a},
pn:function pn(a){this.a=a},
po:function po(a){this.a=a},
kR:function kR(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b
this.c=0},
GZ(){return new A.hE()},
pv:function pv(a){this.a=a
this.b=null},
hE:function hE(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
zg(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
rC:function rC(){},
rD:function rD(){},
co:function co(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hr:function hr(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
lH:function lH(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bg:function bg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tb:function tb(){},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
td:function td(a,b){this.a=a
this.b=b},
ti:function ti(){},
th:function th(){},
tg:function tg(){},
tf:function tf(a){this.a=a},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a,b){this.a=a
this.b=b},
G4(a){return new A.iW(a,new A.de(new A.tj(),A.c([],t.w_),A.c([],t.t),t.tc))},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b){this.a=a
this.b=b},
tj:function tj(){},
xh(a,b){return A.I4(a,b)},
I4(a,b){var s=0,r=A.aL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xh=A.aM(function(c,a0){if(c===1)return A.aI(a0,r)
for(;;)switch(s){case 0:a.c5()
if(a.at!=null)throw A.b(A.i("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.cc(b)
h=p.a.d
if(!(h.a.gu(0)!==0||h.b.gu(0)!==0||h.c.gu(0)!==0||h.d.gu(0)!==0||h.e||h.f)&&!h.r){i.cd(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.du(b)
n=new A.lH(a.a,A.n(t.N,t.CH))
l=A.CH(a,n,b,o.a.b.a)
m=l.a
i.cd(p)
h=a.x
g=o
if(h.e)A.f(A.i("GPU resource adapter is disposed"))
h.ft(g)
f=h.c
h.b.cd(g.a)
h.c=g
h.d=null
if(f!=null)h.dY(f.b)
g.c=B.j1
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bP()
h=j
if(h!=null)h.bP()}catch(d){if(p.c===B.b8){h=t.AB.a(p)
i.fF(h)
i.a.hu(h.a)
i.b.eP(h.b)
h.c=B.fA
i.c=null}i=o
if((i==null?null:i.c)===B.as){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.i("GPU resource adapter is disposed"))
i.ft(h)
i.dY(h.b)
i.b.eP(h.a)
h.c=B.j2
i.d=null}i=m
if(i!=null)i.bP()
i=n
if(i!=null)i.bP()
throw d}case 1:return A.aJ(q,r)}})
return A.aK($async$xh,r)},
CI(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.CH(a,q,s,a.x.gp().a.b.a)
a.z=r.a
a.Q=r.b},
CH(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.xf(a),j=new A.xg(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.JL(b,h,d,i,s.goK(),new A.x0(j),new A.x1(j),new A.x2(a),new A.x7(a),new A.x8(a),new A.x9(j),new A.xa(j),s.goM(),new A.xb(a),s.goR(),r.goO(),k,s.goT(),s.goV(),new A.xc(j,c),new A.xd(j),new A.xe(j),new A.x3(j),new A.x4(j),new A.x5(a),new A.x6(j),e,f,g,c.r)}else{p=new A.aO(l,B.q,g,f,e,0)
o=new A.aO(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iD(h,p,o):null
k=A.c([new A.mp(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.iN(b,u.l,u.t,h,i,d))
q=new A.kQ(k)}a.r.toString
m=q.ma(B.ac,new A.tb(),!1,new A.mT())
k=m.a.b
if(k.length!==0)throw A.b(A.i("safe renderer graph is invalid: "+A.y(k)))
return new A.we(q,m)},
I5(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.i("renderer graph is not initialized"))
s=A.K(b7.gih(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ae()
p=p.gal()
n=A.B(p)
B.a.k(s,new A.n6(new A.cJ((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.H(p,n.i("C(1)").a(o.gap()),n.i("H<1,C>")))))}p=b8.a
m=A.JR(A.AT(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.et(B.aO,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.af(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.et(B.aO,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.af(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.pv(n)
e.m6("cull")
j=l-f
d=e.b
if(d==null)A.f(A.i("cull recorded outside an active frame"))
if(j<0)A.f(A.o("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gG().e===B.ao)B.a.k(a,new A.b3(new A.bT(a0.iE(a2.gG().c.a).c,a2.gF().a),a2,a1))
else B.a.k(b,new A.b3(new A.bX(B.mx,a2.gG().b,a2.gG().a,a2.gF().a),a2,g))}a3=new A.mF(A.JG(A.Kl(b)),A.Kk(a),p,b8.b,b8.c)
a4=new A.kF(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gG().a
if(g.length===0)A.f(A.a7(g,"passId",null))
e.b=g
n.bV(g,A.Ds())
a6=A.n(o,i)
for(g=a5.gG().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.i("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.i("resource is not in candidate: "+b1))
b3=new A.fV(b2)
a6.l(0,b0+"#"+a1,b3)
a6.bV(b0,new A.xi(b3))}a5.am(new A.ks(a6,a4,new A.xj(b8,b6).$0(),a3))}return new A.vy(e,m,j)},
By(a){return new A.tr(a,new A.oP(new A.oR(),new A.lP()),new A.kV(A.c([],t.h1),B.iL),A.c([],t.Ft),B.bP,A.c([],t.ow),null)},
lO:function lO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
vy:function vy(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a,b,c){this.a=a
this.b=b
this.c=c},
xf:function xf(a){this.a=a},
xg:function xg(a,b){this.a=a
this.b=b},
xe:function xe(a){this.a=a},
x7:function x7(a){this.a=a},
x8:function x8(a){this.a=a},
xd:function xd(a){this.a=a},
x2:function x2(a){this.a=a},
x4:function x4(a){this.a=a},
x3:function x3(a){this.a=a},
xc:function xc(a,b){this.a=a
this.b=b},
x0:function x0(a){this.a=a},
x1:function x1(a){this.a=a},
x9:function x9(a){this.a=a},
xa:function xa(a){this.a=a},
xb:function xb(a){this.a=a},
x6:function x6(a){this.a=a},
x5:function x5(a){this.a=a},
xi:function xi(a){this.a=a},
xj:function xj(a,b){this.a=a
this.b=b},
we:function we(a,b){this.a=a
this.b=b},
mT:function mT(){},
mF:function mF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
tr:function tr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
ts:function ts(){},
tt:function tt(){},
tu:function tu(){},
mQ:function mQ(a){this.b=a},
vK:function vK(){},
mX:function mX(){},
j3:function j3(a,b){this.a=a
this.b=b},
Kl(a){var s,r,q=A.K(a,t.E0)
B.a.Y(q,new A.yS())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.K(new A.H(q,s.i("ca(1)").a(new A.yT()),r),r.i("a0.E"))
s.$flags=1
return s},
Kk(a){var s,r,q=A.K(a,t.EH)
B.a.Y(q,new A.yQ())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.K(new A.H(q,s.i("ca(1)").a(new A.yR()),r),r.i("a0.E"))
s.$flags=1
return s},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
yS:function yS(){},
yT:function yT(){},
yQ:function yQ(){},
yR:function yR(){},
JR(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gG().d&c)>>>0===0){++q
continue}n=o.gf_()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.o("cullItems: non-finite world bounds for instance "+o.gF().t(0),null))
if(a.iC(o.gf_())===B.b9){++q
continue}B.a.k(l,o)}return new A.p6(l,new A.p7(q))},
p7:function p7(a){this.b=a},
p6:function p6(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.oG,q=B.oI,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.C(m,k,Math.min(r.c,o))
q=new A.C(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.o("Aabb.fromPoints requires at least one point",null))
return new A.fR(r,q)},
fR:function fR(a,b){this.a=a
this.b=b},
AT(a){var s,r,q,p,o,n,m=a.a,l=new A.py(),k=m.length
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
return new A.px(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fg:function fg(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
px:function px(a){this.a=a},
py:function py(){},
Bc(a){if(a.length!==16)throw A.b(A.o("Mat4.fromColumnMajor requires 16 values",null))
return new A.da(new Float32Array(A.S(a)))},
ze(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.da(q)},
Bd(a,b,c){var s=b.ga7(),r=c.bd(s).ga7(),q=s.bd(r),p=new Float32Array(16)
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
p[12]=-r.be(a)
p[13]=-q.be(a)
p[14]=s.be(a)
p[15]=1
return new A.da(p)},
da:function da(a){this.a=a},
r2:function r2(){},
iR(a,b){var s=a.ga7(),r=b/2,q=Math.sin(r)
return new A.lK(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lK:function lK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b){this.a=a
this.b=b},
nW:function nW(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function nX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY:function nY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.cy=o},
kS:function kS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pt:function pt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jh:function jh(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mw:function mw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kr:function kr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mx:function mx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
kE:function kE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jj:function jj(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mB:function mB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kJ:function kJ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mC:function mC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
l1:function l1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
mH:function mH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function mO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.b=a},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aO(a.a,a.b,b,c,s,r)},
zh:function zh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.dx=q
_.dy=r
_.fr=s},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mU:function mU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lI:function lI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mV:function mV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BB(a){var s=a.c,r=Math.abs(s.a)<0.99?B.aW:B.J,q=A.Bd(a.b,s,r)
return new A.fq(A.ze(1,a.f,B.b.n(a.w*2,0.1,3),0.05).a9(0,q))},
fq:function fq(a){this.a=a},
lX:function lX(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mY:function mY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
JL(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.q(0,"shadows"))throw A.b(A.a7(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.q(0,"ssao")
r=c0.q(0,"bloom")
q=c0.q(0,"dof")
p=c0.q(0,"grade")
o=c0.q(0,"ps1")
n=c0.q(0,"vhs")
m=c0.q(0,"volumetric")
c0=B.d.af(e9+1,2)
l=B.d.af(e8+1,2)
k=A.br(B.bS,e9,e8,e7,b2)
j=A.br(B.bS.ij(),e9,e8,b2,b2)
i=e7>1
h=A.br(B.ng,e9,e8,b2,i?2:1)
g=A.br(B.nf,c0,l,b2,b2)
A.br(B.no,e9,e8,b2,b2)
f=A.br(B.nl,e9,e8,b2,b2)
e=A.br(B.ne,f0,f0,b2,b2)
d=A.br(B.nh,c0,l,b2,b2)
c=A.br(B.ni,c0,l,b2,b2)
b=A.br(B.nm,c0,l,b2,b2)
a=A.br(B.nn,c0,l,b2,b2)
a0=$.DN()
a1=i?1:0
a2=A.br(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.br(B.nb,c0,l,b2,b2)
a1=A.br(B.nc,c0,l,b2,b2)
a3=A.br(B.nd,e9,e8,b2,b2)
a4=A.br(B.nj,e9,e8,b2,b2)
a5=A.br(B.np,e9,e8,b2,b2)
a6=A.br(B.nk,e9,e8,b2,b2)
a7=i?new A.iD(c2,k,j):b2
b9.a=null
a8=A.BB(B.oh)
if(m){a9=i?j:k
b0=new A.ml(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.c([],t.C1))}else b0=b2
g=t.e_
b1=A.c([],g)
if(!m)h=i?j:k
if(r){B.a.L(b1,A.c([new A.i7(c1,b3,b4,c2,b5,b5,B.ew,!0,h,b,e0,c0,l),new A.i7(c1,b3,b4,c2,b6,b6,B.pu,!1,b,a,c6,c0,l),new A.kr(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.L(b1,A.c([new A.ig(c1,b3,b4,c2,b7,b7,B.ex,h,a0,e0,c0,l),new A.ig(c1,b3,b4,c2,b8,b8,B.pv,a0,a1,d1,c0,l),new A.kJ(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.k(b1,new A.l1(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.k(b1,new A.lI(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.k(b1,new A.mc(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.c([new A.kE(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.m_(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.lZ(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.lX(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.y0(b9),e))
j.push(new A.lY(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  // A continuous water film forms a second dielectric lobe. It smooths the\n  // authored surface only as coverage rises, so damp cloth stays diffuse\n  // while puddled stone gains a tight grazing reflection.\n  float waterCoverage=smoothstep(0.20,0.88,wetness)*(1.0-0.35*rough);\n  specRough=mix(specRough,max(0.035,specRough*0.18),waterCoverage);\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coatStrength=max(clamp(uClearcoatStrength,0.0,1.0),waterCoverage*0.82);\n  float coat=coatStrength*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  float reflectionFresnel=0.04+0.96*pow(1.0-reflectionNdotV,5.0);\n  float reflectionSurface=clamp(wetness+0.18*dissolution,0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*reflectionFresnel*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  lit+=uReflectionColor*reflectionWeight;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.y1(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.L(j,b1)
j.push(new A.iN(c1,b3,u.t,c2,h,c3))
return new A.kQ(j)},
y0:function y0(a){this.a=a},
y1:function y1(a,b){this.a=a
this.b=b},
lY:function lY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
mZ:function mZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
m_:function m_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
n1:function n1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lZ:function lZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
n0:function n0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mc:function mc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
n9:function n9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ml:function ml(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
nb:function nb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
na:function na(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mp:function mp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ne:function ne(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oN:function oN(){},
lW(a,b){return new A.j1(a,b)},
l_:function l_(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
f7:function f7(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
io:function io(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pU:function pU(){},
pV:function pV(){},
hH:function hH(a,b){this.a=a
this.b=b},
eM:function eM(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
AQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.h6(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kp:function kp(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bs:function bs(a,b){this.a=a
this.b=b},
vo:function vo(){this.a=null},
GE(a){var s=new A.mn(a,B.j,new A.vo(),A.GO(a))
s.jT(a)
return s},
GO(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.b9(q,A.B(q).i("b9<1,e>")))
while(r.m())s.k(0,r.gp())
return s},
bG(a,b){var s,r
if(a.b!==B.j)A.f(A.i(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.h(s.drawingBufferWidth),A.h(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
BY(a,b){var s
if(a.b!==B.j)A.f(A.i(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.h(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.o("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
GJ(a,b,c){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.i("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
GI(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
GH(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
BX(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.h(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.h(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
GF(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bd(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=a.f
r=s.n4(b)
if(r.a===0)return
if(r.q(0,B.bX)){q=v.G
p=a.a
if(b.a)p.enable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bY))a.a.depthFunc(A.GI(a,b.b))
if(r.q(0,B.bZ))a.a.depthMask(b.c)
if(r.q(0,B.c2)){q=v.G
p=a.a
if(b.w)p.enable(A.h(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.h(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.c3))a.a.cullFace(A.GH(a,b.x))
if(r.q(0,B.ec)){q=v.G.WebGL2RenderingContext
q=A.h(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.c_)){q=v.G
p=a.a
if(b.d)p.enable(A.h(q.WebGL2RenderingContext.BLEND))
else p.disable(A.h(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.c0))a.a.blendFunc(A.BX(a,b.e),A.BX(a,b.f))
if(r.q(0,B.c1))a.a.blendEquation(A.GF(a,b.r))
if(r.q(0,B.ea))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.eb)){q=v.G.WebGL2RenderingContext
a.a.disable(A.h(q.SCISSOR_TEST))}s.a=b},
GG(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.h(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.h(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.h(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cU(a,b,c,d,e,f){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.GG(a,b))},
bP(a,b){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
m(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.f(A.i(u.k))
s=a.e
if(s==null)throw A.b(A.i("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.G(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.ax(c.b))
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
case 6:r.uniform1i(q,A.h(c.b))
break}},
bj(a,b){if(a.b!==B.j)A.f(A.i(u.k))
a.a.bindVertexArray(A.a(b.a))},
aB(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.f(A.i(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jN){p=s.d>1?A.h(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jM){o=s.b
if(o!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.i("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.i("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
GK(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.i(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.h(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.Ay(B.a3.ged(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aV(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.h(q.WebGL2RenderingContext.STATIC_DRAW))}},
GL(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
C0(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.d1?A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.h(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.GL(a,b.b))
return new A.e2(r)},
BZ(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
C_(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
GM(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
zo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
r=A.G(s.createTexture())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.h(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.GM(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aU(s,"texStorage3D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aU(s,"texStorage2D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.BZ(a,b.e))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.BZ(a,b.f))
p=b.r
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.C_(a,p))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.C_(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.h0(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a7(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.e2(new A.jN(r,j,i,q,m))},
zp(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
r=s.d
if(c>=r)throw A.b(A.o("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.o("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.h(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aU(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aU(l,"texSubImage2D",[m,0,0,0,q,p,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
C1(a,b){var s,r,q
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.h(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mo(a,b){a.a.deleteTexture(t.p.a(b.a).a)},
C3(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.f(A.i(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.o("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.b(A.i("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bc
if(n&&!a1.e)throw A.b(A.o("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.d3||o===B.j4
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.h(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aU(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aU(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aU(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aU(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aU(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
A.aU(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.h(r.checkFramebufferStatus(A.h(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.h(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.zq(a0,q,l,k,f,e,j,i)
throw A.b(A.i("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.e2(new A.jM(q,l,k,f,e,j,i,s,a1.b,a1.c))},
zq(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cw(a){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.b(A.i("WebGl2Device: gl.createVertexArray() returned null"))
return new A.e2(s)},
C2(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.b(A.lW(b===A.ny(A.CM(A.DJ(),r),q,t.S)?B.e3:B.e4,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.i1(p.getShaderParameter(o,A.h(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aq(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.lW(b===A.ny(A.CM(A.DJ(),r),q,t.S)?B.e3:B.e4,s))}return o},
GN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.i(u.k))
q=v.G
s=A.C2(a,A.h(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.C2(a,A.h(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.nQ)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.i1(o.getProgramParameter(n,A.h(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aq(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lW(B.e5,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.h(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lW(B.e6,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lW(B.e6,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.e2(n)},
e2:function e2(a){this.a=a},
jN:function jN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jM:function jM(a,b,c,d,e,f,g,h,i,j){var _=this
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
nd:function nd(a){this.a=a
this.b=!1},
mn:function mn(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
vl:function vl(a){this.a=a},
vm:function vm(a){this.a=a},
wp:function wp(){},
nc:function nc(){},
vk:function vk(a){this.a=a},
vn:function vn(){},
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
od(a0,a1){var s=0,r=A.aL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$od=A.aM(function(a2,a3){if(a2===1)return A.aI(a3,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.N
n=t.m
m=A.n(o,n)
l=A.a(p.createGain())
k=A.a(p.createGain())
j=A.a(p.createGain())
i=A.a(p.createGain())
h=A.a(p.createGain())
g=A.a(p.createGain())
f=A.a(p.createGain())
e=A.a(p.createGain())
d=A.a(p.createGain())
c=A.a(p.createGain())
b=A.a(p.createConvolver())
a=new A.kl(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.n(o,t.a_),B.b5,A.n(n,t.jS))
a.jC(p,a1)
p=A.v(a0).i("N<1,2>")
s=3
return A.a6(A.pA(A.li(new A.N(a0,p),p.i("aS<az>(r.E)").a(new A.oe(a)),p.i("r.E"),t.ls),t.c),$async$od)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.kH():m
b.buffer=p
q=a
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$od,r)},
kl:function kl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.CW=_.ch=null
_.cx=q
_.cy=!1
_.dy=_.db=null
_.k1=_.id=_.go=_.fy=_.fx=1
_.k2=!1
_.p2=_.p1=_.ok=_.k4=_.k3=$
_.p3=!1
_.R8=_.p4=1},
of:function of(){},
oe:function oe(a){this.a=a},
oi:function oi(a,b){this.a=a
this.b=b},
oh:function oh(a,b,c){this.a=a
this.b=b
this.c=c},
og:function og(a,b){this.a=a
this.b=b},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Eu(a,b,c,d,e,f,g){var s=new A.o4(c,f,b,g,new A.j(d.a,d.b,d.c),e,a)
s.jE(a,b,c,d,0,e,f,g)
return s},
Eq(a,b){var s=new A.nI(b)
s.jB(a,b)
return s},
Et(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aG(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.o0(A.aW(n,r,t.a))
n.jD(a)
return n},
Je(a,b){var s,r,q,p=b>>>0
for(s=new A.dx(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Dx(p,q==null?r.a(q):q)}return p&2147483647},
km:function km(a,b){this.a=a
this.b=b},
o4:function o4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o5:function o5(){},
nI:function nI(a){this.a=a},
nJ:function nJ(){},
i5:function i5(){},
nK:function nK(){},
nL:function nL(){},
o0:function o0(a){this.a=a},
o2:function o2(){},
o3:function o3(){},
o1:function o1(){},
z2:function z2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
oc:function oc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o6:function o6(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(a){this.a=a},
o8:function o8(){},
jf:function jf(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
oK:function oK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
pu:function pu(a){this.a=a},
l6:function l6(a,b,c,d,e,f,g,h,i,j){var _=this
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
qw:function qw(a){this.a=a},
Fk(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return new A.qv(n)},
qv:function qv(a){this.a=a},
qz:function qz(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qU:function qU(a,b,c){this.a=a
this.c=b
this.e=c},
qR:function qR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(){},
p8:function p8(){this.b=this.a=0},
r_:function r_(a){this.a=a
this.b=0
this.e=!1},
j5(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aV(a)
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
ct:function ct(a){this.a=a
this.b=0},
ja(a,b,c){return new A.j(a,b,c)},
BO(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
vb:function vb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.cx=s},
vc:function vc(){},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
vd:function vd(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v8:function v8(){},
v9:function v9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
va:function va(){},
v7:function v7(){this.b=this.a=-1},
GP(a,b,c,d){return new A.mq(d,b,c,a)},
GR(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.DZ()
s=a.d
r=A.vq(s,0)
q=A.vq(s,1)
p=A.vq(s,2)
o=A.vq(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bQ(m,0))n.k(0,"GamepadA")
if(A.bQ(m,1))n.k(0,"GamepadB")
if(A.bQ(m,2))n.k(0,"GamepadX")
if(A.bQ(m,3))n.k(0,"GamepadY")
if(A.bQ(m,4))n.k(0,"GamepadLB")
if(A.bQ(m,5))n.k(0,"GamepadRB")
if(A.bQ(m,6))n.k(0,"GamepadLT")
if(A.bQ(m,7))n.k(0,"GamepadRT")
if(A.bQ(m,8))n.k(0,"GamepadView")
if(A.bQ(m,9))n.k(0,"GamepadMenu")
if(A.bQ(m,10))n.k(0,"GamepadLStick")
if(A.bQ(m,11))n.k(0,"GamepadRStick")
if(A.bQ(m,12))n.k(0,h)
if(A.bQ(m,13))n.k(0,g)
if(A.bQ(m,14))n.k(0,f)
if(A.bQ(m,15))n.k(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.j(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.ga7():i
return new A.mq(m,p,o,A.fo(n,s))},
vq(a,b){return A.GQ(b<a.length?a[b]:0)},
bQ(a,b){return b<a.length&&a[b]>=0.5},
GQ(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.n((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gcp(a)?-s:s},
m0:function m0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mq:function mq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oD:function oD(a){this.a=a},
EQ(a,b,c){var s=new A.kK(a,c,null,b)
s.jI(a,null,null,b,c)
return s},
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
F2(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bK(new A.I(B.l5,t.e2.a(new A.pk(a)),t.vL),t.yW)
return s==null?null:new A.h7(s)},
Bh(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.zf(s,a,B.ks)
break
case 1:A.zf(s,a,B.kt)
break
case 2:A.zf(s,a,B.l9)
break}return s},
zf(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.K(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.k(a,p.c)
return}}},
F1(a){if(a.a!==21)return null
if(a.e)return B.fK
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fL
return B.fJ},
cm:function cm(a,b){this.a=a
this.b=b},
ph:function ph(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h7:function h7(a){this.a=a},
pk:function pk(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
FL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.w(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.lA(s,new A.j(o,n,m),q,p,l,j)
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
lA:function lA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Jg(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.b(B.h0)
p.l(0,q,r.b)}return p},
ww(a){var s,r,q,p,o,n=a.ga3().bE(0)
B.a.X(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.l(0,o,A.CE(a.h(0,o)))}return A.aW(r,t.N,s)},
CE(a){var s
if(t.f.b(a))return A.ww(A.Jg(a))
if(t.j.b(a)){s=t.z
return A.ab(J.ea(a,A.Kd(),s),s)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i4)
return a}throw A.b(A.M("presentation snapshot contains unsupported value "+J.eY(a).t(0),null,null))},
t0:function t0(a){this.a=a},
Bx(a,b,c){var s=A.zG(b),r=A.zG(a)
if(c!==2)A.f(A.a7(c,"version","unsupported save version"))
return new A.ht(c,s,r)},
zG(a){var s,r,q,p,o=A.v(a).i("ae<1>"),n=A.K(new A.ae(a,o),o.i("r.E"))
B.a.X(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.l(0,p,A.CD(a.h(0,p)))}return A.aW(s,t.N,o)},
CD(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.hP)
s.l(0,p,q.b)}return A.zG(s)}if(t.j.b(a)){r=t.z
return A.ab(J.ea(a,A.Kh(),r),r)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i9)
return a}throw A.b(A.M("save contains unsupported value "+J.eY(a).t(0),null,null))},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(){},
fn:function fn(a,b){this.a=a
this.b=b},
AV(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.pG(a,b,c,d,e,f,g,s,r,h)},
AW(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.b_(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.hO)
r=d.h(0,"runSeed")
q=A.b_(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.b_(p)||p<1||typeof o!="number")throw A.b(B.it)
if(!isFinite(5760))throw A.b(A.a7(5760,"daySeconds","must be finite and > 0"))
n=new A.kY(p,7,5760)
n.iA(o)
s=t.N
m=t.z
l=A.Fv(a5,A.aZ(a0,s,m))
k=A.EN(l,A.aZ(a,s,m),n)
j=A.Do(a3,c)
A.Fj(A.aZ(a1,s,m)).m_(j)
s=A.aZ(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bx(f))A.f(B.hf)
e=A.FE(d.h(0,"narrative"))
if(e==null)e=A.rs(null,null,null)
return A.AV(c,q,j,n,l,k,new A.kH(i,h,g,f),e)},
I3(a){var s
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
dB:function dB(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.c=a
this.d=b},
pH:function pH(a,b,c){this.a=a
this.b=b
this.r=c},
pG:function pG(a,b,c,d,e,f,g,h,i,j){var _=this
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
pI:function pI(a){this.a=a},
pJ:function pJ(){},
pK:function pK(){},
pL:function pL(a){this.a=a},
pM:function pM(){},
AE(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.hV(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a1(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.b(B.hz)
s=A.bJ(d,"houseId")
r=A.bJ(d,"sourceRef")
q=A.bJ(d,"presentationScope")
p=A.bJ(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.hV(d.h(0,g),g)
o=A.bJ(n,"roomId")
m=A.A4(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.w(n.h(0,f)):null
o=new A.ox(o,m,l,typeof n.h(0,e)=="string"?A.w(n.h(0,e)):null)}m=J.ea(A.hR(d,"levels"),new A.ok(),t.mD)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
l=J.ea(A.hR(d,"rooms"),new A.ol(c),t.bJ)
l=A.K(l,l.$ti.i("a0.E"))
l.$flags=1
k=J.ea(A.hR(d,"portals"),new A.om(c),t.lT)
k=A.K(k,k.$ti.i("a0.E"))
k.$flags=1
j=J.ea(A.hR(d,"stairs"),new A.on(),t.gI)
j=A.K(j,j.$ti.i("a0.E"))
j.$flags=1
i=J.ea(A.hR(d,"exteriorCells"),new A.oo(),t.N)
i=A.K(i,i.$ti.i("a0.E"))
i.$flags=1
s=new A.kn(s,r,q,p,o,m,l,k,j)
s.eX()
return s},
Do(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
a6.eX()
s=A.AY(a7)
r=new A.y_()
for(q=a6.w,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){k=q[l]
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
for(b=k.e,a=b.length,a0=0;a0<b.length;b.length===a||(0,A.u)(b),++a0){a1=b[a0]
e.push(new A.fx(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.aG(k.f,!1,o)
a2.$flags=3
B.a.k(n,new A.fm(j,new A.j(d,c,h),new A.j(g,f,i),e,A.HI(j),k.r,k.w,k.x))}for(q=a6.x,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a3=q[l]
B.a.k(o,new A.c9(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a6.y,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a4=q[l]
a2=A.aG(a4.c,!1,n)
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
B.a.k(o,new A.fr(a4.a,a4.b,new A.j(i,h,m),new A.j(f,e,j[2])))}a5=a6.f
if(a5!=null){s.r=a5.a
s.x=a5.c
q=a5.b
p=q.length
if(0>=p)return A.d(q,0)
o=q[0]
if(1>=p)return A.d(q,1)
n=q[1]
if(2>=p)return A.d(q,2)
s.w=new A.j(o,n,q[2])}s.nE()
return s},
HI(a){var s
A:{if("living-room"===a){s=A.c([A.zb("mantle-living",!0,new A.j(3.7,1.45,0.8),"living-room gas mantle"),A.zb("mantle-living-second",!1,new A.j(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.zb("mantle-hall",!1,new A.j(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.kz
break A}return s},
Ew(a,b){var s,r=A.hV(a,"room"),q=A.bJ(r,"id"),p=A.bJ(r,"floor"),o=A.A4(r.h(0,"origin"),"origin",b),n=A.A4(r.h(0,"size"),"size",b),m=J.ea(A.hR(r,"windows"),new A.oy(b),t.ya)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
s=J.ea(A.hR(r,"portalIds"),new A.oz(),t.N)
s=A.K(s,s.$ti.i("a0.E"))
s.$flags=1
return new A.eg(q,p,o,n,m,s,A.Ab(r,"wall"),A.Ab(r,"floor"),A.Ab(r,"ceiling"))},
hV(a,b){return t.P.b(a)?a:A.e4(b+" is not an object")},
hR(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.e4(b+" is not a list")},
bJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e4(b+" is not a string")},
Ab(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.e4("surface is not an object")
return A.bJ(s,b)},
zL(a,b){var s,r=A.bJ(a,b)
A:{if("north"===r){s=B.A
break A}if("east"===r){s=B.ap
break A}if("south"===r){s=B.r
break A}if("west"===r){s=B.aq
break A}s=A.e4(b+" has unknown facing "+r)}return s},
IP(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gR(a)||s.M(a,new A.xy())}else s=!0
if(s)return A.e4(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gp()))
return s},
eS(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e4(b+" is not finite")},
nu(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xV())}else s=!0
if(s)return A.e4(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gp()))
return s},
A4(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.nu(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
k7(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gp()
if(!q.k(0,r))throw A.b(A.M("duplicate "+b+" id "+r,null,null))}},
e4(a){return A.f(A.M(a,null,null))},
kn:function kn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
ok:function ok(){},
ol:function ol(a){this.a=a},
om:function om(a){this.a=a},
on:function on(){},
oo:function oo(){},
oq:function oq(){},
or:function or(){},
os:function os(){},
ot:function ot(){},
ou:function ou(){},
ov:function ov(){},
ow:function ow(){},
op:function op(a){this.a=a},
ox:function ox(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y_:function y_(){},
ee:function ee(a){this.a=a},
eg:function eg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
oy:function oy(a){this.a=a},
oz:function oz(){},
ei:function ei(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ef:function ef(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eh:function eh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xy:function xy(){},
xV:function xV(){},
kt:function kt(a,b){this.a=a
this.b=b
this.d=null},
oO:function oO(a){this.a=a},
ln:function ln(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
mr:function mr(a,b){this.a=a
this.b=b},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qb:function qb(){this.b=0},
a8:function a8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kN:function kN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pm:function pm(){},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(){},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
Ks(a){var s,r,q,p,o,n,m,l
a.A()
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
return new A.bW(B.ah,p,new Uint16Array(A.S(a.b)),new A.fR(new A.C(s.a,s.b,s.c),new A.C(s.d,s.e,s.f)))},
Kr(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Jd(a,new A.yV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kO(o,p.c,p.e))}return n},
Jd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.A()
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
throw A.b(A.o("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.q(d,":")?B.c.J(d,0,B.c.bC(d,":")):null
l=new A.dm(d,l,h,A.c([],p))
s.l(0,d,l)}B.a.L(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("ao<2>")
q=A.K(new A.ao(s,q),q.i("r.E"))
B.a.Y(q,new A.xN())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].ph(a))
return r},
HL(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kN(r,q,p,o,n,m)},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
yV:function yV(a){this.a=a},
xN:function xN(){},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jq:function jq(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
f4:function f4(a,b){this.a=a
this.b=b},
kP:function kP(){},
JJ(a){var s,r,q,p=new A.qc(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.I6(p,a,B.dn[s],15.75,15.75,12.044999999999998,0.63)
p.D(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.D(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.D(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.D(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.D(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.D(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.D(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.D(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a8(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a8(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.au(r,new A.a8(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.au(r,q,new A.a8(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a8(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a8(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.au(q,new A.a8(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.au(q,r,new A.a8(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.au(new A.a8(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a8(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a8(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.au(new A.a8(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a8(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a8(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a8(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a8(7.875,16.32,16.383,-1,0,0,1,1,0)
p.au(r,new A.a8(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.au(r,q,new A.a8(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a8(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a8(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.au(q,new A.a8(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.au(q,r,new A.a8(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.J1(p,15.75,15.75,12.044999999999998,16.32)
A.HP(p,15.75,15.75,16.32)
A.I2(p,15.75,15.75,12.044999999999998)
A.Ia(p,a,15.75)
A.J8(p,15.75,15.75)
A.HK(p,15.75)
return p.m8()},
I6(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ap!==b7,p=B.A!==b7,o=B.r===b7,n=B.aq===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aH(k)
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
B.a.k(b4,new A.eK(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aS(i),b=J.O(h.a),h=new A.U(b,h.b,h.$ti.i("U<1>"));h.m();){a=b.gp()
if(!a.Q||a.b4(i)!==b7)continue
B:{if(!p||o){a0=g+a.aM(i)
break B}if(!q||n){a0=e+a.aM(i)
break B}a0=null}B.a.k(b4,new A.eK(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.A||b7===B.r?b8:b9
r=t.i
a1=A.aF([0,s],r)
a2=A.aF([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.u)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.X(a4)
a5=A.K(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.xl(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.I9(b5,b4,b7,b8,b9,c1)
A.I7(b5,b4,b7,b8,b9,c1)
A.I8(b5,b4,b7,b8,b9,c0,c1)},
I8(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aF([0,a4===B.A||a4===B.r?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.k(0,q.a)
a1.k(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.xk(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
I7(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.u)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.D(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.D(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.D(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.D(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.D(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.D(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.A)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.D(2,a+0.18,n,r,a,a1,p)}}},
I9(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.u)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.D(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.D(e,a1,a,l,a0,b,m)
a2.D(e,a1,b,l,c,b-0.06,m)
a2.D(e,a1,a+0.06,l,c,a,m)
if(f)a2.D(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.D(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.D(e,a1,a,j,a0,b,k)
a2.D(e,a1,b,j,c,b-0.06,k)
a2.D(e,a1,a+0.06,j,c,a,k)
if(f)a2.D(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.D(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.D(e,l,a,a1,m,d,a0)
a2.D(e,l,d,a1,m,d-0.06,b)
a2.D(e,l,a+0.06,a1,m,a,b)
if(f)a2.D(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.D(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.D(e,o,a,a1,p,d,a0)
a2.D(e,o,d,a1,p,d-0.06,b)
a2.D(e,o,a+0.06,a1,p,a,b)
if(f)a2.D(3,p,a,c+0.07,n,d,c)
break}if(!f)A.J6(a2,g,a4,a5,a6,a7,q)}},
J6(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.D(3,o+0.025,m,r,o-0.025,n,s)
a.D(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.D(3,o+0.025,m,r,o-0.025,n,s)
a.D(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.D(3,r,m,o+0.025,s,n,o-0.025)
a.D(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.D(3,r,m,o+0.025,s,n,o-0.025)
a.D(3,r,l+0.025,p,s,l-0.025,q)
break}},
J1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.J2(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
J2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a8(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a8(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.au(n,new A.a8(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.au(n,m,new A.a8(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a8(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a8(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.au(m,new A.a8(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.au(m,n,new A.a8(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
HP(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
I2(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Ia(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aM("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.D(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.D(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.D(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.D(6,p,1.95,-0.58,q+0.16,1.55,-0.63)
a.D(3,q+0.32,1.5,-0.55,q+0.12,1.42,-0.69)
k=r-0.18
a.D(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.D(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
J8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.D(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.D(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.D(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.D(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.D(6,m,j+0.06,l,s,j,n)}a.D(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.D(6,i+0.34,0.22,s,i,0.1,h)}},
HK(a,b){var s,r
a.D(0,6.7,1,-4.05,-2.5,0,-4.4)
a.D(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.D(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.D(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xl:function xl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xk:function xk(a,b,c){this.a=a
this.b=b
this.c=c},
Kf(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.Ak(b,d,c)
if(k!=null){s=k.b
return new A.er(B.fS,k.a,s)}r=A.DH(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.er(B.fT,r.a,s)}if(A.DI(b,d,c)!=null)return B.fX
q=A.Ke(a,b,c,d)
if(q!=null)return new A.er(B.cL,q.a,"inspect the "+q.b)
p=A.DG(b,c,d,e)
if(p!=null){o=e.bL(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.er(B.fV,l,m?"inspect the "+o.b:"inspect "+n)}return B.fY},
DG(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.nx(a5,s,4.5)
for(q=a6.ir(a4),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gp()
if(!i.x)continue
h=a6.bL(i.c)
g=i.f.a
f=i.eR(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.j(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.ga7()
a0=a3.b
a1=Math.acos(B.b.n(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.nz(a5,a4,a3.a,new A.j(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Ke(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.iP(c)
if(s.length===0)return f
r=d.aH(e)
q=A.nx(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.j(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.ga7()
j=b.b
if(Math.acos(B.b.n(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.nz(d,c,b.a,new A.j(n,m,o)))return k}return f},
dA:function dA(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
JK(a,b){var s,r=new A.ct(new Float32Array(5376)),q=new A.ct(new Float32Array(5376)),p=new A.ct(new Float32Array(5376)),o=new A.ct(new Float32Array(5376)),n=b.d,m=a.aH(b),l=A.l4(b.y),k=A.l4(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.eH(new A.j(j,i,h),new A.j(j,i,f),new A.j(d,i,f),new A.j(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.eH(new A.j(j,i,h),new A.j(d,i,h),new A.j(d,i,f),new A.j(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.HD(p,a,b,m,B.dn[s])
for(j=a.aS(b.a),i=J.O(j.a),j=new A.U(i,j.b,j.$ti.i("U<1>"));j.m();){h=i.gp()
if(h.at==null||h.as)continue
A.Cs(o,b,m,h,!0)}j=B.t.aD(r.a,0,r.b)
i=B.t.aD(q.a,0,q.b)
h=B.t.aD(p.a,0,p.b)
B.t.aD(o.a,0,o.b)
return new A.tn(j,i,h)},
JH(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.ct(new Float32Array(5376))
r=a.aH(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.Ct(s,b,r,c,q)
return B.t.aD(s.a,0,s.b)},
JI(a,b){var s,r,q,p=new A.ct(new Float32Array(5376)),o=a.aH(b)
for(s=a.aS(b.a),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gp()
if(q.at==null||q.as)continue
A.Cs(p,b,o,q,!1)}return B.t.aD(p.a,0,p.b)},
HD(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.A||a4===B.r?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aS(s),q=J.O(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gp()
if(!p.as&&p.b4(s)===a4)a.push(new A.eJ(p.aM(s),p.aM(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eJ(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aF([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.u)(a),++o){m=a[o]
r.L(0,A.c([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.X(l)
s=A.aF([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.u)(a),++o){m=a[o]
s.L(0,A.c([m.c,m.d],p))}k=A.K(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.wr(f,e,d,c)))continue
A.Jw(a0,a2,a3,a4,f,e,d,c)}A.HE(a0,a2,a3,a4,b,a)},
HE(a,b,c,d,e,f){return},
hZ(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.au(a,new A.j(r+e,q+g,p),new A.j(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.au(a,new A.j(r+e,q+g,s-i),new A.j(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.au(a,new A.j(s-i,q+g,p+e),new A.j(s,q+h,p+f),j)
return
case 3:A.au(a,new A.j(r,q+g,p+e),new A.j(r+i,q+h,p+f),j)
return}},
au(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.j(o,n,m),k=c.a,j=new A.j(k,n,m),i=c.b,h=new A.j(k,i,m),g=new A.j(o,i,m)
m=c.c
s=new A.j(o,n,m)
r=new A.j(k,n,m)
q=new A.j(k,i,m)
p=new A.j(o,i,m)
a.aN(j,l,g,h,d)
a.aN(s,r,q,p,d)
a.aN(l,s,p,g,d)
a.aN(r,j,h,q,d)
a.aN(l,j,r,s,d)
a.aN(g,p,q,h,d)},
Jw(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.j(i+e,h+a0,g)
break
case 2:s=new A.j(i+f,h+a0,g+c.c)
break
case 1:s=new A.j(i+c.a,h+a1,g+f)
break
case 3:s=new A.j(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.j(i+f,h+a0,g)
break
case 2:r=new A.j(i+e,h+a0,g+c.c)
break
case 1:r=new A.j(i+c.a,h+a1,g+e)
break
case 3:r=new A.j(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.j(i+f,h+a1,g)
break
case 2:q=new A.j(i+e,h+a1,g+c.c)
break
case 1:q=new A.j(i+c.a,h+a0,g+e)
break
case 3:q=new A.j(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.j(i+e,h+a1,g)
break
case 2:p=new A.j(i+f,h+a1,g+c.c)
break
case 1:p=new A.j(i+c.a,h+a0,g+f)
break
case 3:p=new A.j(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.j(0,0,0.003)
break
case 2:o=new A.j(0,0,-0.003)
break
case 1:o=new A.j(-0.003,0,0)
break
case 3:o=new A.j(0.003,0,0)
break
default:o=k}n=b.x
m=A.l4(n).e
a.eH(s.a4(0,o),r.a4(0,o),q.a4(0,o),p.a4(0,o),A.l4(n).c,(f-e)/m,(a1-a0)/m)
l=A.Jx(b,d)
switch(j){case 0:o=new A.j(s.a,s.b,s.c-l)
break
case 2:o=new A.j(r.a,s.b,s.c)
break
case 1:o=new A.j(s.a,s.b,p.c)
break
case 3:o=new A.j(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.j(r.a,q.b,s.c)
break
case 2:j=new A.j(s.a,q.b,s.c+l)
break
case 1:j=new A.j(s.a+l,q.b,r.c)
break
case 3:j=new A.j(p.a,q.b,r.c)
break
default:j=k}A.au(a,o,j,A.J9(A.l4(n).c,0.68))},
J9(a,b){var s,r=new A.xJ(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.jb()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.jb()
r=r.$1(a&255)
if(typeof r!=="number")return A.yb(r)
return(q<<16|s<<8|r)>>>0},
Jx(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
Cs(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b4(d),b=a3.aM(d),a=b+a3.w
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
A.au(a0,new A.j(r+l,s,d),new A.j(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.j(l,s,d),new A.j(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.j(r+n,s+m,d),new A.j(r+h,j,i),q)
A.au(a0,new A.j(k,s,d),new A.j(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.au(a0,new A.j(r+l,s,k),new A.j(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.j(l,s,k),new A.j(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.j(r+n,s+m,k),new A.j(r+h,i,d),q)
A.au(a0,new A.j(j,s,k),new A.j(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.au(a0,new A.j(n,s,d+k),new A.j(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.j(n,s,k),new A.j(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.au(a0,new A.j(n,s+e,d+m),new A.j(r,j,d+l),q)
A.au(a0,new A.j(n,s,i),new A.j(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.au(a0,new A.j(r,s,d+l),new A.j(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.j(r,s,l),new A.j(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.au(a0,new A.j(r,s+e,d+n),new A.j(k,j,d+m),q)
A.au(a0,new A.j(r,s,i),new A.j(k,s+0.05,l),q)
break}if(a4)A.Ct(a0,a1,a2,a3,q)
A.HC(a0,a1,a2,a3)},
HC(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aM(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b4(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.A
q=!r||s===B.r?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.hZ(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.r?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hZ(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.r?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hZ(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.r?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hZ(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.r,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hZ(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hZ(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hZ(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
Ct(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b4(o),m=d.aM(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.j(p,s,o-d.w),new A.j(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.j(p-d.w,s,o),new A.j(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.j(p,s,o-0.055),new A.j(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.j(p-0.055,s,o),new A.j(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break}},
tn:function tn(a,b,c){this.a=a
this.b=b
this.c=c},
wr:function wr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xJ:function xJ(a){this.a=a},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AY(a){var s=t.N
return new A.q9(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.n(s,t.z_),A.n(s,t.e),new A.qb())},
q9:function q9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
qs:function qs(a){this.a=a},
nx(a,b,c){var s=a.aH(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
nz(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Iz(a,s,c,d)},
Iz(a,b,c,d){var s,r,q,p,o=a.aH(b),n=d.ac(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.wy(a,b,o,B.A,r,q,p,c,n,m))return!0
if(A.wy(a,b,o,B.r,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.wy(a,b,o,B.aq,s,r,q,c,n,m))return!0
if(A.wy(a,b,o,B.ap,s+o.a,r,q,c,n,m))return!0
return!1},
wy(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a4(0,a6.a9(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.A||a1===B.r
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aS(m),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gp()
if(q.b4(m)===a1){g=q.aM(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
Ak(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.nx(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.u)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.j(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.ga7()
f=a.b
if(Math.acos(B.b.n(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.nz(a0,a1,a.a,new A.j(h,g,i)))continue
m=d
l=j}}return l},
DH(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.nx(b,j,4.5):4.5
for(s=b.aS(c),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>")),q=i,p=null;s.m();){o=r.gp()
n=b.ox(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.CR(l,k,a,i,0.5236)||k>=q)continue
if(!A.nz(b,c,a.a,n))continue
q=k
p=o}return p},
DI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.nx(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.Jz(b,h,m)
k=a.a
j=new A.j(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.CR(j,i,a,s,0.5236)||i>=p)continue
if(!A.nz(b,c,a.a,l))continue
p=i
o=m}return o},
CR(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.n(a.ga7().be(c.b),-1,1))<=e},
Jz(a,b,c){var s=a.aH(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
pl:function pl(){this.a=null
this.b=0},
uk:function uk(){},
ul:function ul(){},
Fo(a){var s,r,q=A.k2(a,"inventory asset"),p=A.cX(q,"id"),o=A.cX(q,"kind")
A.cX(q,"source")
A.cX(q,"proxy")
A.cX(q,"pivot")
s=q.h(0,"status")
r=A.cX(q,"id")
if(s==null)s="proxy"
if(typeof s!="string"||!A.aF(["production","proxy","invisible-anchor"],t.N).q(0,s))A.f(A.M("invalid inventory asset status "+r+": "+A.y(s),null,null))
q=A.k2(q.h(0,"bounds"),"inventory bounds")
return new A.d8(p,o,s,new A.qA(A.nt(q.h(0,"min"),"bounds.min"),A.nt(q.h(0,"max"),"bounds.max")))},
Fq(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.k2(a6,"inventory placement"),g=A.k2(h.h(0,"visibility"),"placement visibility"),f=A.k2(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.dy,a=h.h(0,"physics"),a0=c.b(a)?a:B.dy,a1=A.cX(h,"id"),a2=A.cX(h,"roomId"),a3=A.cX(h,"assetId"),a4=A.cX(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.w(h.h(0,"socket")):null
h=A.k2(h.h(0,"transform"),"inventory transform")
s=A.nt(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hU)
r=A.nt(h.h(0,"position"),"transform.position")
q=A.nt(h.h(0,"rotation"),"transform.rotation")
p=A.cX(g,"layer")
if(typeof g.h(0,i)=="string")A.w(g.h(0,i))
o=J.aa(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.w(f.h(0,"focusId")):null
c=c.b(e)?A.eR(e,"radius"):0
m=b.gR(b)?0:A.eR(b,"heatOutputWatts")
l=b.gR(b)?0:A.eR(b,"surfaceTemperatureCelsius")
k=b.gR(b)?0:A.eR(b,"radiusM")
if(b.gR(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a1(b.h(0,"offsetY")):0
return new A.cK(a1,a2,a3,a4,a5,new A.qC(r,q,s),p,o,n,c,m,l,k,j,A.Fp(a0))},
Fp(a){if(a.gR(a))return B.jK
return new A.l9(A.cX(a,"bodyType"),A.eR(a,"massKg"),A.eR(a,"volumeM3"),A.eR(a,"densityKgM3"),A.eR(a,"friction"),A.eR(a,"restitution"),J.aa(a.h(0,"collision"),!0))},
k2(a,b){return t.P.b(a)?a:A.e3(b+" is not an object")},
cX(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e3(b+" is not a string")},
eR(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e3(b+" is not finite")},
nt(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xU())}else s=!0
if(s)return A.e3(b+" is not a finite vec3")
s=J.aQ(a)
return new A.j(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
e3(a){return A.f(A.M(a,null,null))},
qe:function qe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qi:function qi(a){this.a=a},
qh:function qh(){},
qf:function qf(a){this.a=a},
qg:function qg(a){this.a=a},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cK:function cK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o},
l9:function l9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(a,b){this.a=a
this.b=b},
xU:function xU(){},
qB:function qB(a){this.a=a},
dL:function dL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
qj:function qj(a){this.a=a},
qk:function qk(a){this.a=a},
zb(a,b,c,d){return new A.lh(a,d,c,b)},
eq:function eq(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=!0},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
Fi(a){return A.Fh(a)},
Fh(a){var s,r,q,p,o,n,m=A.CZ(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.CZ(m.h(0,"cues"),"sound emitter cues").gN(),s=s.gv(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.hN)
k.l(0,r.a,q)}s=A.A8(m,"id")
r=A.A8(m,"roomId")
p=A.A8(m,"placementId")
o=A.Ju(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hP("gain is not a number")
return new A.d7(s,r,p,o,n,A.aW(k,l,l))},
CZ(a,b){return t.P.b(a)?a:A.hP(b+" is not an object")},
A8(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hP(b+" is not a string")},
Ju(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xT())}else s=!0
if(s)throw A.b(A.M(b+" must be a numeric vec3",null,null))
s=J.aQ(a)
return new A.j(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
hP(a){return A.f(A.M(a,null,null))},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function qn(a){this.a=a},
qo:function qo(a){this.a=a},
qp:function qp(){},
qq:function qq(){},
d7:function d7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qa:function qa(){this.b=this.a=null},
f9:function f9(a,b){this.a=a
this.b=b},
ql:function ql(){this.b=this.a=null},
d6:function d6(a,b){this.a=a
this.b=b},
xT:function xT(){},
AZ(a,b,c,d,e,f){var s=t.N
return new A.qr(e,f,c,a,A.aW(A.aZ(d,s,s),s,s),A.ab(b,s))},
B_(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.l(0,p.a,new A.iM(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l){j=o[l]
i.l(0,j.a,new A.iA(j.d,j.r))}return A.AZ(a.y.b,B.n,i,B.aQ,h,s)},
Fj(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.ls
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bw
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.b_(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.hK)
p=t.N
o=A.n(p,t.DL)
for(n=a.gN(),n=n.gv(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cO)
l=A.aZ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bx(j)||!A.bx(i))A.f(B.cO)
o.l(0,k,new A.iM(j,i))}h=A.n(p,t.y)
for(n=a0.gN(),n=n.gv(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bx(l.b))throw A.b(B.hG)
h.l(0,k,A.T(l.b))}g=A.n(p,t.m2)
for(n=a1.gN(),n=n.gv(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cM)
l=A.aZ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bx(f)||!A.bx(e))A.f(B.cM)
g.l(0,k,new A.iA(f,e))}d=A.n(p,p)
for(q=s.gN(),q=q.gv(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.iJ)
d.l(0,n,A.w(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.b(B.fZ)
B.a.k(c,b)}return A.AZ(a2,c,g,d,o,h)},
A3(a,b){return a.a.a===b.a&&a.a2(0,b.gaE(b))},
qr:function qr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iM:function iM(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
l4(a){var s=B.bC.h(0,a)
if(s==null)throw A.b(A.i("Unknown house surface material: "+a))
return s},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
F_(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hh(e,A.B(e).c)
q=new A.eL()
q.c3((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ih(a,q,2,r,1+s,A.aF(["time"],t.N))
break
case 3:A.ih(a,q,3,r,1+s,A.aF(["place"],t.N))
break
case 4:A.ih(a,q,4,r,2+s,p)
A.EW(a,q,4)
break
case 5:A.ih(a,q,5,r,s,p)
A.EU(a,q,5)
break
case 6:A.ih(a,q,6,r,s,p)
A.EV(a,q)
A.EZ(a,q,6)
break
case 7:A.EX(a,q,7)
break
default:if(s>0)A.ih(a,q,b,r,s,p)}},
ET(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.EY(a,b,c))return!1
return!0},
ih(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(A.ET(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dK(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.AR(a,b,o[p],f)}},
AR(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aZ(B.a.ga6(o).a,n,n)
if(d==null)s=A.c(B.D.slice(0),t.s)
else{n=t.vY
s=A.K(new A.I(B.D,t.Ag.a(new A.pg(d)),n),n.i("r.E"))}n=s.length
if(n===0)return
n=b.aY(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fc(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.aY(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.ei(c.a,m,B.a.ga6(o).b)},
EW(a,b,c){var s=A.AS(a,b,c)
if(!a.ce(s))return
a.fn(c,t.G.a(s),0,B.bj,null)},
AS(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.D[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.aY(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
EU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dK(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aZ(B.a.ga6(i).a,s,s)
r=p.c
n=A.aZ(B.a.ga6(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.D[m]
k=o.h(0,l)
j=s.fc(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aY(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.ei(q.a,o,B.a.ga6(i).b)
a.ei(p.a,n,B.a.ga6(r).b)},
EV(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aY(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a8(0,q[r].a)},
EZ(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aY(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.AR(a,b,q[s],null)},
EX(a,b,c){var s=c+1,r=A.AS(a,b,s)
if(!a.ce(r))return
a.fn(s,t.G.a(r),0,B.bj,null)},
EY(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga6(b.c).c===B.aN}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga6(b.c).c===B.aN}if(c===21)return b.e
return!1},
pg:function pg(a){this.a=a},
Gw(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p=A.aG(q==null?B.n:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.v4(n)},
qV(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.lg(A.aW(p,q,q),b,c)},
B9(a){var s=t.N
return A.qV(t.P.a(a.h(0,"fields")).bt(0,new A.qW(),s,s),A.a1(a.h(0,"shakiness")),A.F4(B.kq,A.w(a.h(0,"hand")),t.qX))},
F3(a){var s,r,q,p,o=a.h(0,"margin"),n=A.h(a.h(0,"ordinal")),m=A.h(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.B9(r.a(s.gp())))
s=A.aq(a.h(0,"corroborator"))
q=A.T(a.h(0,"locked"))
p=A.zB(a.h(0,"lastReadDay"))
return new A.c4(n,m,l,s,q,p,o==null?null:A.B9(r.a(o)))},
es:function es(a,b){this.a=a
this.b=b},
v4:function v4(a){this.a=a},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(){},
qX:function qX(a){this.a=a},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B6(a){return new A.qG(a,A.n(t.S,t.g),A.a_(t.N),A.c([],t.t))},
Fv(a,b){var s,r,q,p,o=A.B6(a)
o.e=A.h(b.h(0,"nextOrdinal"))
o.f=A.h(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.Ej(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.F3(r.a(s.gp()))
q.l(0,p.a,p)}return o},
qG:function qG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qN:function qN(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
oA:function oA(){},
FM(a){var s,r,q,p,o,n,m,l,k=B.f.ai(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.h3)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.im)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gp()
if(j.b(p)){o=A.aq(p.h(0,"assetId"))
if(o==null)o=""
n=A.aq(p.h(0,"licenseId"))
if(n==null)n=""
m=A.aq(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.aq(p.h(0,"sourceFormat"))
r.push(new A.iO(o,n,m,l==null?"":l))}else r.push(A.f(B.hZ))}return new A.rU(A.FN(r))},
FN(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.n(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.iV("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.K(o))throw A.b(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aP(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aF(["obj","gltf","glb","fbx"],m).q(0,q.d))throw A.b(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.J5(q.c))throw A.b(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.l(0,o,q)}return A.aW(k,m,l)},
J5(a){if(a.length===0||B.c.V(a,"/")||B.c.q(a,"://"))return!1
if(B.c.bf(a.toLowerCase(),".obj")||B.c.bf(a.toLowerCase(),".mtl")||B.c.bf(a.toLowerCase(),".fbx"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xI())},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rU:function rU(a){this.a=a},
xI:function xI(){},
Bk(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.n(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.iV("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.K(o))throw A.b(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.b(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aP(m).length===0||m==="unknown"||m==="unlicensed")throw A.b(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.b(A.M("package is not approved: "+o,j,j))
l=A.DM(n)
if(l.length!==0)throw A.b(A.M("package manifest is invalid for "+o+": "+B.a.bs(l,new A.rW(),i).W(0,"; "),j,j))
p=p.b
k=A.Ku(n,p)
if(k.length!==0)throw A.b(A.M("package payloads are invalid for "+o+": "+B.a.bs(k,new A.rX(),i).W(0,"; "),j,j))
if(A.Bg(n,p)!==n.c)throw A.b(A.M("package hash mismatch: "+o,j,j))
g.l(0,o,q)}return A.aW(g,i,h)},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a){this.a=a},
rW:function rW(){},
rX:function rX(){},
rO:function rO(){},
rN:function rN(a,b,c){this.b=a
this.c=b
this.d=c},
rP:function rP(){},
FK(a,b,c){return B.my},
ly:function ly(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rR:function rR(){},
rS:function rS(a){this.d=a},
hn:function hn(){},
rT:function rT(a){this.a=a},
rV:function rV(){},
rY:function rY(a,b){this.a=a
this.b=b},
rZ:function rZ(){},
t_:function t_(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
t8:function t8(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Bu(a){if(!isFinite(0))A.f(A.a7(0,"interpolation",null))
return new A.tl(a)},
lM:function lM(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
tl:function tl(a){this.a=a},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
Bs(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hh(c,A.B(c).c)
r=A.K(r,A.v(r).c)
B.a.X(r)
s=t.N
r=A.ab(r,s)
r=new A.tk(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aW(l,s,t.X))
r.jO(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Bt(a,b,c,d){var s=A.nm("RENDERER_SHA"),r=A.nm("GAME_SHA"),q=A.nm("DART_SDK_VERSION")
return A.Bs(a,"c46f22949484-a5a2929e6a5c-dirty",b,!1,null,r,A.nm("LOCKFILE_SHA256"),d,A.nm("PROJECT_VERSION"),s,q,null)},
nm(a){var s=B.lj.h(0,a)
return s.length===0?null:s},
tk:function tk(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
tm:function tm(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
u9:function u9(a){this.a=a},
ua:function ua(){},
X(a,b,c,d,e,f,g,h,i,j){return new A.cs(e,g,a,f,i,h,j,c,c,b,B.e7)},
BA(){var s=new A.ub(B.az)
s.w=t.yu.a(A.c([A.X(B.Z,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.X(B.Z,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.X(B.Z,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.X(B.Z,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.X(B.Z,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.X(B.ae,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.X(B.ae,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.X(B.ae,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.X(B.ae,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.X(B.ae,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.X(B.aA,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.X(B.aA,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.X(B.aA,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.X(B.aA,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.X(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.X(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.X(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.X(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.X(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.X(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.X(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.X(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.X(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.X(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.X(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.X(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.X(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.X(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.X(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.X(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.X(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.X(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.X(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.X(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.X(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.X(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.X(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.X(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.X(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.X(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.X(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.X(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.X(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.X(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.X(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.X(B.Z,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.X(B.u,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.X(B.u,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.X(B.u,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.X(B.u,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.X(B.u,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.X(B.u,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.X(B.u,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05),A.X(B.u,!0,1,"Ray-marched cloud layer on clear skybox pixels","cloud_enable",!0,"Volumetric Cloud Shell",1,0,0.05),A.X(B.u,!0,-0.1,"Override weather cloud coverage (-0.1 = schedule driven)","cloud_coverage_override",!1,"Cloud Coverage Lock",1,-0.1,0.05),A.X(B.u,!0,0.72,"Extinction through the finite volumetric cloud shell","cloud_density",!1,"Cloud Optical Density",1,0,0.05),A.X(B.u,!0,0.55,"High-frequency erosion mixed into the cloud body noise","cloud_detail",!1,"Cloud Detail",1,0,0.05),A.X(B.u,!0,1,"Scale for authored wind transport through the cloud shell","cloud_speed",!1,"Cloud Advection Speed",2,0,0.05),A.X(B.u,!0,0.25,"Bounded forward-scattered edge response around cloud forms","cloud_silver_lining",!1,"Cloud Silver Lining",1,0,0.05),A.X(B.u,!0,12,"Sky cloud samples per pixel (4=preview, 24=clean)","cloud_samples",!1,"Cloud Raymarch Samples",24,4,1)],t.hT))
return s},
bZ:function bZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ub:function ub(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
ui:function ui(a){this.a=a},
uc:function uc(){},
ud:function ud(){},
uj:function uj(){},
ug:function ug(a){this.a=a},
uh:function uh(a){this.a=a},
uf:function uf(a){this.a=a},
ue:function ue(a){this.a=a},
Gi(a){var s,r,q,p,o,n=B.b.n(a,7,17),m=new A.ur()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cA()
if(o<n)s=p
else r=p}return(s+r)*0.5},
BE(a){var s
if(!isFinite(a))throw A.b(A.a7(a,"horizonVisibility01",null))
s=B.b.n(a,0,1)
return s*s*(3-2*s)},
ur:function ur(){},
AO(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.f(A.M("saved day-loop resources must not be negative",null,null))
return new A.p9(c,g,b,a,e,d===!0,s)},
EN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.hq)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.b(B.hL)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.b_(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.hj)
f=A.bK(new A.I(B.de,q.a(new A.pa(h)),p),o)
e=A.bK(new A.I(B.dc,n.a(new A.pb(g)),m),l)
if(f==null||e==null)throw A.b(B.iy)
B.a.k(s,new A.hv(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.b_(d)||!A.b_(c)||!A.b_(b)||!A.bx(a))throw A.b(B.hW)
return A.AO(c,d,a1,a,b,s,a3)},
c_:function c_(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
p9:function p9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
vp:function vp(a,b){this.b=a
this.c=b},
fy:function fy(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
qt:function qt(a){this.c=a},
qx:function qx(a,b,c){this.a=a
this.b=b
this.d=c},
qy:function qy(){},
FY(a,b){var s,r,q,p=A.ab(b,t.Dp),o=A.n(t.N,t.cw)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
o.l(0,q.a,q)}p=new A.t5(p,o)
p.jN(a,b)
return p},
iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t6:function t6(a){this.a=a},
t7:function t7(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
t5:function t5(a,b){this.a=a
this.b=b},
zO(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.b(B.iv)
B.a.k(p,q)}return p},
cr:function cr(a,b){this.a=a
this.b=b},
to:function to(){},
df:function df(){},
tp:function tp(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
If(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.xm(s,a).$0())
return r},
nq(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
ez:function ez(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vh:function vh(a){this.b=a},
xm:function xm(a,b){this.a=a
this.b=b},
jY(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
BU(a){var s
switch(a.a){case 0:s=B.pm
break
case 1:s=B.pl
break
case 2:s=B.po
break
case 3:s=B.pk
break
case 4:s=B.pn
break
default:s=null}return s},
BT(a,b){return new A.mm(!1,0,0)},
Gz(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.jY(f)||!A.jY(a)||!A.jY(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.b(A.o("weather impact inputs must be finite and valid",j))
if(b===B.w)return A.BT(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.A()
m=A.Gy(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.BT(a,g)
f.a4(0,a.ac(0,f).a9(0,p))
l=g.be(g)
A:{if(B.av===b||B.a8===b){s=B.pi
break A}if(B.a9===b){s=q.d>0.5?B.pj:B.cd
break A}if(B.W===b){s=l>1?B.eu:B.cd
break A}if(B.w===b){s=B.ph
break A}s=j}if(s===B.eu){k=q.e
g.ac(0,r.a9(0,2*g.be(r))).a9(0,k)}s=s===B.cd?d:0
return new A.mm(!0,0.5*d*l,s)},
Gy(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ac(0,new A.j(a2,a2,a2)),d=a1.c.a4(0,new A.j(a2,a2,a2)),c=a0.ac(0,a),b=new A.j(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.ve(a,o)
m=A.ve(c,o)
l=A.ve(e,o)
k=A.ve(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.BR(o,m>0)
if(j>i){h=A.BR(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.BS(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.BS(c)}if(r>1)return f
return new A.a5(r,b)},
ve(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
BR(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.j(r,0,0)
break A}if(1===a){s=new A.j(0,r,0)
break A}s=new A.j(0,0,r)
break A}return s},
BS(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.j(0,q>0?-1:1,0)
if(r>=n)return new A.j(s>0?-1:1,0,0)
return new A.j(0,0,o>0?-1:1)},
BV(a,b,c){var s=new A.hD(b,c,a)
s.hq()
return s},
BW(a,b,c){return A.BV(a,b,c)},
GD(a){var s,r,q
if(!t.f.b(a))throw A.b(B.io)
s=new A.vi(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.BV(s.$1("materialDissolution01"),r,q)},
vg(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
if(!isFinite(b0))A.f(A.a7(b0,"roomTemperatureCelsius",a2))
s=b1.c
if(!isFinite(s))A.f(A.a7(s,a3,a2))
r=b1.d
if(!isFinite(r))A.f(A.a7(r,a4,a2))
q=b1.e
if(!isFinite(q))A.f(A.a7(q,a5,a2))
p=b1.f
if(!isFinite(p))A.f(A.a7(p,"internalHeatWatts",a2))
o=b1.r
if(!isFinite(o))A.f(A.a7(o,a6,a2))
n=b1.w
if(!isFinite(n))A.f(A.a7(n,a7,a2))
m=b1.x
if(!isFinite(m))A.f(A.a7(m,"dtSeconds",a2))
if(s<0||s>1)A.f(A.a7(s,a3,a8))
if(r<0||r>1)A.f(A.a7(r,a4,a8))
if(q<=0)A.f(A.a7(q,a5,a9))
if(o<=0)A.f(A.a7(o,a6,a9))
if(n<=0)A.f(A.a7(n,a7,a9))
l=b1.a
k=1-r*0.85
j=l.e*(1-r*0.9)
r=l.f
i=Math.cos(r)
r=Math.sin(r)
h=l.w
if(h===B.w&&l.b)h=B.av
g=A.GA(h,B.b.n(l.c,0,1))*k
f=A.GB(h)
e=h===B.a9?g/120:0
d=h===B.w?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.n(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.vf(h,new A.j(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
GC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.jY(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.b(A.o("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.o("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.o("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.j(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.n((e-b)/Math.max(1,s),0,1)
return new A.v6(m,e,l,d,e>b)},
GA(a,b){var s
if(a===B.w)return 0
s=0.00005+b*0.00045
return a===B.W?s*0.75:s},
GB(a){var s
switch(a.a){case 0:s=0
break
case 1:s=8.8
break
case 2:s=5.5
break
case 3:s=0.9
break
case 4:s=18
break
default:s=null}return s},
hC:function hC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v6:function v6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vf:function vf(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fw:function fw(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eH:function eH(a,b){this.a=a
this.b=b},
mm:function mm(a,b,c){this.a=a
this.f=b
this.r=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
vi:function vi(a){this.a=a},
vj:function vj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
JF(a){var s
A:{if("broadcast"===a){s=B.eI
break A}if("visitor"===a){s=B.eJ
break A}if("aftermath"===a){s=B.eK
break A}if("ending"===a){s=B.eL
break A}s=A.f(A.M("screenplay event has no consumer: "+a,null,null))}return s},
Fb(a){var s=A.K(a.c,t.z)
B.a.Y(s,new A.pF())
s=new A.pE(A.ab(s,t.Dm))
s.pd()
return s},
Fa(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kW(a,c,A.fc(B.n,t.N))
s=t.N
r=J.AD(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kW(a,c,A.fc(new A.I(r,q.i("l(r.E)").a(new A.pD(a)),q.i("I<r.E>")),s))},
f_:function f_(a,b){this.a=a
this.b=b},
pE:function pE(a){this.a=a},
pF:function pF(){},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
pD:function pD(a){this.a=a},
rs(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.L(0,a)
s=A.n(r,r)
if(b!=null)s.L(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.rr(q,s,r)},
FE(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.b_(s)||s!==1)return l
r=A.Bi(a.h(0,"choices"))
q=A.Bi(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gN(),k=k.gv(k);k.m();){n=k.gp()
m=A.F8(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.l(0,n,m)}return A.rs(r,q,p)},
Bi(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gN(),s=s.gv(s);s.m();){q=s.gp()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.l(0,p,A.w(q.b))}return r},
F8(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.b_(r)||r<1||!A.b_(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.d1(s,r,q,p)},
rr:function rr(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(){},
ru:function ru(){},
rv:function rv(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FJ(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.O(a);s.m();){r=s.gp()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bC("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rL(b,p)},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rL:function rL(a,b){this.a=a
this.b=b},
rM:function rM(a){this.a=a},
hx(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gp()
q.l(0,B.d.t(r.a),r.b)}return q},
uv:function uv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
uw:function uw(){},
ux:function ux(){},
fu:function fu(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b){this.a=a
this.b=b},
mk:function mk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ai(a,g)
if(!t.f.b(f))throw A.b(B.ii)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bw
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.ie)
p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.Ga(o.gp()))
o=A.c([],t.D)
for(n=J.O(q);n.m();)o.push(A.G9(n.gp()))
n=t.N
m=A.a_(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.u)(p),++k){j=p[k].a
if(!m.k(0,j))throw A.b(A.M("duplicate screenplay scene: "+j,g,g))}i=A.a_(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.u)(o),++k){n=o[k].a
if(!i.k(0,n))throw A.b(A.M("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.O(s);n.m();){h=n.gp()
if(typeof h!="string"||h.length===0)A.f(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.ut(o)},
G9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.w(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.w(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.w(a.h(0,f)).length===0)throw A.b(B.hD)
s=a.h(0,"effects")
if(s==null)s=B.bw
if(!t.j.b(s)||J.kb(s,new A.tv()))throw A.b(B.il)
r=B.b.aC(A.a1(a.h(0,"day")))
q=A.a1(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.i7)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.h7)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.iH)
l=new A.tw(a)
m=A.w(a.h(0,"id"))
k=A.w(a.h(0,g))
j=A.w(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.O(s);h.m();)i.push(A.w(h.gp()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.dQ(m,k,r,q,j,A.ab(i,t.N),n,h)},
Ga(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.ho)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aC(r)!==r)throw A.b(B.hS)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.M("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aC(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gp()
if(typeof j!="string"||j.length===0)A.f(B.i5)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gp()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.iD)
A.w(j.h(0,"kind"))
A.w(j.h(0,"text"))
A.aq(j.h(0,"speaker"))
l.push(new A.lR())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.G8(l.gp()))
return new A.lU(s,m)},
G8(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.hw)
s=A.w(a.h(0,m))
A.w(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gp()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.ib)
o=A.w(p.h(0,m))
n=A.w(p.h(0,"label"))
A.w(p.h(0,"next"))
r.push(new A.lT(o,n))}return new A.lS(s)},
ut:function ut(a){this.c=a},
uu:function uu(){},
dQ:function dQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
tv:function tv(){},
tw:function tw(a){this.a=a},
lU:function lU(a,b){this.a=a
this.b=b},
lR:function lR(){},
lS:function lS(a){this.a=a},
lT:function lT(a,b){this.a=a
this.b=b},
uy:function uy(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
uz:function uz(){},
uA:function uA(){},
kd:function kd(a){this.a=a},
z1:function z1(a,b,c){this.b=a
this.e=b
this.f=c},
Ep(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.h2)
s=new A.nH()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.zC(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.eb(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b5(B.bz,new A.nF(a),new A.nG()))},
d_:function d_(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nH:function nH(){},
nF:function nF(a){this.a=a},
nG:function nG(){},
nS:function nS(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nU:function nU(a){this.a=a},
nT:function nT(a,b){this.a=a
this.b=b},
o_:function o_(a,b){this.a=a
this.b=b},
Ev(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hT)
s=new A.o9()
return new A.ed(s.$1$2(B.bx,a.h(0,"output"),t.xs),s.$1$2(B.br,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bq,a.h(0,"reverb"),t.gc),s.$1$2(B.bo,a.h(0,"ducking"),t.ul))},
cG:function cG(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
o9:function o9(){},
oa:function oa(a,b){this.a=a
this.b=b},
ob:function ob(a){this.a=a},
oC:function oC(a){this.a=a
this.b=null},
oG(a,b,c){var s
b.A()
if(c<1||c>6)throw A.b(A.a7(c,"level","must be between 1 and 6"))
s=A.F(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.oE(s,b)
return s},
em(a,b,c,d){var s,r,q
b.A()
s=b.e
r=d==null?b.c:d
q=A.F(a,"button","brush-button brush-state-"+s.b,r)
A.oE(q,b)
q.type="button"
q.disabled=s===B.aI
q.addEventListener("click",A.Z(new A.oF(c)))
return q},
EA(a,b,c,d){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aI
A.oE(s,b)
s.addEventListener("change",A.Z(new A.oJ(d,s)))
return s},
Ez(a,b,c,d,e,f){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aI
A.oE(s,b)
s.addEventListener("input",A.Z(new A.oI(s,e)))
return s},
z3(a,b){var s=B.c.jr(A.w(a.className),A.iV("\\s+")),r=A.B(s),q=r.i("I<1>"),p=A.K(new A.I(s,r.i("l(1)").a(new A.oH()),q),q.i("r.E"))
s=b.b
B.a.k(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
oE(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.glQ())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aI)a.setAttribute("aria-disabled","true")},
oF:function oF(a){this.a=a},
oJ:function oJ(a,b){this.a=a
this.b=b},
oI:function oI(a,b){this.a=a
this.b=b},
oH:function oH(){},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oL:function oL(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
oM:function oM(a){this.a=a},
AM(a){var s=!1
if(a.length!==0)if(!B.e2.q(0,a))s=B.nD.q(0,a)||B.nt.q(0,a)||B.nC.q(0,a)||!B.c.V(a,"Mouse")
return s},
HZ(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return n},
IF(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.N(a,A.v(a).i("N<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gp()
q.l(0,r.a,A.c([r.b],s))}return q},
h2(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hg(B.lg,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.IF(a))
s=new A.h1(g,d,h,e,f,c,A.aW(A.HZ(q),s,r))
s.A()
return s},
EK(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cN)
s=a.h(0,"version")
r=J.eW(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.b(B.cN)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gN(),j=j.gv(j),r=t.s,p=t.j;j.m();){o=j.gp()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.hE)
if(typeof m=="string")q.l(0,n,A.c([m],r))
else if(p.b(m)&&J.El(m,new A.oZ())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.w(l.gp()))
q.l(0,n,o)}else throw A.b(B.ha)}j=A.a1(a.h(0,"horizontalSensitivity"))
r=A.a1(a.h(0,"verticalSensitivity"))
p=A.T(a.h(0,"invertX"))
o=A.T(a.h(0,"invertY"))
return A.h2(null,q,A.T(a.h(0,"holdToInteract")),j,p,o,2,r)},
zE(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gp()
q=r.a
r=A.K(r.b,p)
o.l(0,q,r)}return o},
zZ(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
Ad(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
h1:function h1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p0:function p0(){},
p_:function p_(a){this.a=a},
p1:function p1(){},
p2:function p2(){},
p3:function p3(){},
oZ:function oZ(){},
ej:function ej(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.c=b},
ky:function ky(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
EJ(a){var s=t.N,r=t.m
r=new A.ie(A.h2(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.jG(a)
return r},
ie:function ie(a,b,c,d,e,f){var _=this
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
oX:function oX(a,b){this.a=a
this.b=b},
oY:function oY(a){this.a=a},
oW:function oW(a,b){this.a=a
this.b=b},
oU:function oU(a,b){this.a=a
this.b=b},
oV:function oV(a,b){this.a=a
this.b=b},
EL(a){var s=new A.p4(a,A.a(a.createElement("div")))
s.b_(a)
s.jH(a)
return s},
p4:function p4(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
p5:function p5(a){this.a=a},
ER(a){var s=new A.pc(A.F(a,"div","door",null))
s.jJ(a)
return s},
AP(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
pc:function pc(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
pd:function pd(a){this.a=a},
pe:function pe(a,b){this.a=a
this.b=b},
pf:function pf(a,b){this.a=a
this.b=b},
F0(a){var s=new A.pi(a,A.a(a.createElement("div")))
s.b_(a)
s.jK(a)
return s},
pi:function pi(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pj:function pj(a){this.a=a},
pN:function pN(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pO:function pO(){},
Fc(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.pP(a.b===B.cU,a.c===B.cY,s,a.e===B.cV,a.f===B.cS,a.r===B.d_,a.w,a.x)},
pP:function pP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
z4(a,b,c,d,e,f,g,h,i,j,k){return new A.h9(e,g,k,f,b,h,d,c,a,i,j)},
Fd(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.i8)
s=new A.pQ(a)
r=a.h(0,"contextualReminders")
if(!A.bx(r))throw A.b(B.iw)
q=!A.bx(a.h(0,i))||A.T(a.h(0,i))
p=s.$1$2("interactionMode",B.by,t.bK)
o=s.$1$2("promptDensity",B.bB,t.dn)
n=s.$1$2("textPacing",B.bA,t.j_)
m=s.$1$2("journalLayout",B.bs,t.gm)
l=s.$1$2("confirmations",B.bm,t.aJ)
k=s.$1$2("saveFeedback",B.bt,t.mx)
j=s.$1$2("focusLossBehavior",B.aP,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bp,t.vS):B.ba
return A.z4(s,l,r,j,p,m,o,k,q,A.bx(a.h(0,g))&&A.T(a.h(0,g)),n)},
dE:function dE(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pQ:function pQ(a){this.a=a},
pR:function pR(a,b){this.a=a
this.b=b},
pS:function pS(a){this.a=a},
AX(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hQ)
s=B.a.b5(B.dg,new A.q3(a),new A.q4())
r=A.w(a.h(0,"renderScale"))
q=A.T(a.h(0,"dynamicResolution"))
p=A.w(a.h(0,"frameTarget"))
o=A.w(a.h(0,"antialiasing"))
n=A.w(a.h(0,"textureQuality"))
m=A.aq(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.aq(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.aq(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.CA(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dH(1,s,r,q,p,o,n,m,l,k,j===!0)
i.A()
return i},
hc(a,b){var s=b==null?B.bi:b
return new A.q5(s,a==null?B.bi:a)},
DC(a,b){var s,r,q
a.A()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.eg(b.a>=2?"msaa2":"off")
B.a.k(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.eg("off")
B.a.k(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hH(!1)
B.a.k(s,"dynamic resolution timing is unavailable")}if(q.b===B.bg&&b.a<2){q=q.hI(B.bh)
B.a.k(s,"High preset was reduced to Standard")}return new A.pX(q,A.ab(s,t.N))},
cI:function cI(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
q3:function q3(a){this.a=a},
q4:function q4(){},
q5:function q5(a,b){this.a=a
this.b=b},
pW:function pW(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
Ff(a){var s=new A.is(A.n(t.N,t.m),B.bi,a,A.a(a.createElement("div")))
s.b_(a)
s.jL(a)
return s},
is:function is(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a){this.a=a},
pZ:function pZ(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(){this.c=0},
Fg(a){var s=new A.q7(a,A.a(a.createElement("div")))
s.b_(a)
s.jM(a)
return s},
q7:function q7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
q8:function q8(a){this.a=a},
qH:function qH(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){},
qM:function qM(){},
Kp(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.b(A.o("temperature gauge range must be finite and ordered",null))
if(!isFinite(a))return 0.5
return B.b.n((a-c)/(b-c),0,1)},
dc:function dc(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rA:function rA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
F(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
CJ(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.W)
for(s=t.m,r=0;r<A.h(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
iL:function iL(){},
bB:function bB(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(){},
rH:function rH(){},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
rF:function rF(a){this.a=a},
rI:function rI(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rK:function rK(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
t4:function t4(a){this.a=a
this.b=null},
Gb(a){var s=new A.ty(a,A.a(a.createElement("div")))
s.b_(a)
s.jP(a)
return s},
ty:function ty(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tz:function tz(a,b){this.a=a
this.b=b},
tA:function tA(a){this.a=a},
lV(a,b){var s=t.N,r=t.m
r=new A.hu(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.yZ(),B.aE,A.n(s,r),A.n(s,r),B.b2,A.n(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.jQ(a,b)
return r},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tZ:function tZ(a){this.a=a},
u_:function u_(a){this.a=a},
u0:function u0(a,b){this.a=a
this.b=b},
u1:function u1(a){this.a=a},
u2:function u2(a){this.a=a},
tR:function tR(a,b){this.a=a
this.b=b},
tS:function tS(a,b){this.a=a
this.b=b},
tQ:function tQ(a){this.a=a},
tT:function tT(a){this.a=a},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
tU:function tU(a,b){this.a=a
this.b=b},
tV:function tV(a,b){this.a=a
this.b=b},
tW:function tW(a,b){this.a=a
this.b=b},
tP:function tP(a,b,c){this.a=a
this.b=b
this.c=c},
tH:function tH(a){this.a=a},
tI:function tI(a){this.a=a},
tJ:function tJ(a){this.a=a},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
tF:function tF(a){this.a=a},
tY:function tY(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u4(a){return B.a.b5(B.F,new A.u5(a),new A.u6(a))},
Gc(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
q.l(0,r.a,r.e)}return q},
dS(a,b){var s=t.z
s=A.hg(A.Gc(),s,s)
if(a!=null)s.L(0,a)
s=new A.u3(b,A.aW(s,t.N,t.K))
s.jR(a,b)
return s},
Bz(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.is)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.hp)
return A.dS(A.aZ(s,t.N,t.K),A.h(a.h(0,"version")))},
bN:function bN(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
u5:function u5(a){this.a=a},
u6:function u6(a){this.a=a},
u3:function u3(a,b){this.a=a
this.b=b},
zk(a,b){var s=b==null?A.dS(null,1):b
return new A.u7(s,a==null?A.dS(null,1):a)},
Gd(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.F[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fh(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dD(r)
J.b7(l,s.a,r)}catch(n){if(!(A.ah(n) instanceof A.A))throw n}}m=A.dS(l,1)
return A.zk(m,m)},
u7:function u7(a,b){this.a=a
this.b=b},
Gg(a){var s=new A.un(A.n(t.u5,t.nx),a,A.a(a.createElement("div")))
s.b_(a)
s.jS(a)
return s},
un:function un(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
uo:function uo(){},
up:function up(a,b,c){this.a=a
this.b=b
this.c=c},
Es(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gN(),n=n.gv(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.cE(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.nQ())
return new A.nP(A.ab(i,t.bC),A.a_(t.N))},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nP:function nP(a,b){this.a=a
this.b=b},
nR:function nR(){},
nQ:function nQ(){},
Gv(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.pg
s=t.T
r=A.n(s,t.q1)
q=A.v(a).i("ae<1>")
p=A.K(new A.ae(a,q),q.i("r.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gN(),j=j.gv(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bv(new A.bF(B.oZ,k+" has an out-of-range authored day "+h+"."))
g=A.Gu(k,h,i.b,m)
if(g instanceof A.bv)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.l(0,new A.c2(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ac(o,o.r,o.e,A.v(o).i("ac<2>"));o.m();){n=o.d
J.e9(e.bV(n.b,new A.uZ()),n)}o=A.aW(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.N(e,e.$ti.i("N<1,2>")).gv(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aG(d.b,!1,m)
c.$flags=3
q.l(0,j,c)}return new A.mi(new A.mh(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.ac,A.rs(b,b,b)))},
Gu(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.db[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gN(),k=k.gv(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.c.V(h,m))continue
g=A.dM(B.c.aQ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bv(new A.bF(B.p_,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dk
B.a.k(l,new A.ce(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.uW())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bv(new A.bF(B.es,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bv(new A.bF(B.es,a+" day "+s+" has no authored tiers."))
return new A.mP(c)},
mh:function mh(a,b,c,d,e,f,g,h){var _=this
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
v1:function v1(a){this.a=a},
v0:function v0(a){this.a=a},
v2:function v2(a){this.a=a},
uX:function uX(a){this.a=a},
uY:function uY(){},
v_:function v_(a){this.a=a},
uZ:function uZ(){},
uV:function uV(a){this.a=a},
uU:function uU(a){this.a=a},
uW:function uW(){},
mi:function mi(a){this.a=a},
mP:function mP(a){this.a=a},
JW(a){var s,r,q,p=A.a_(t.N)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
for(q=r.b.gak(),q=q.gv(q);q.m();)if(q.gp().ga3().M(0,new A.y7())){p.k(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.X(s)
return s},
JV(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aG(b,!0,s)
B.a.X(r)
q=new A.eL()
q.c3((a^913741)>>>0)
p=q.aY(4)
if(!(p>=0&&p<4))return A.d(B.da,p)
o=B.da[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aG(r,!0,s)
B.a.dK(m,q)
s=A.hy(m,0,A.e7(n,"count",t.S),A.B(m).c).bE(0)
B.a.X(s)
return s},
y7:function y7(){},
BP(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.b_(r)||!A.b_(q)||!A.b_(p)||r<1||q<0||q>23||p<0)return null
return new A.c2(s,r,q,p)},
Gt(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a_(t.T)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.BP(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Er(m)
if(!s&&l==null)return i
return new A.mj(r,o,l)},
Er(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.BP(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.b_(p))if(!(p<0))if(A.bx(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bK(new A.I(B.db,t.u_.a(new A.nM(r)),t.ni),t.hF)
j=A.bK(new A.I(B.la,t.da.a(new A.nN(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bK(new A.I(B.k1,t.kr.a(new A.nO(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.kf(s,k,j,p,i,n,A.aq(m))},
bU:function bU(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dk:function dk(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mj:function mj(a,b,c){this.a=a
this.b=b
this.c=c},
uT:function uT(){},
kf:function kf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nM:function nM(a){this.a=a},
nN:function nN(a){this.a=a},
nO:function nO(a){this.a=a},
mg:function mg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
v3:function v3(){},
bv:function bv(a){this.a=a},
mf:function mf(a){this.a=a},
md:function md(a){this.a=a},
jc:function jc(a,b){this.a=a
this.b=b},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
wZ(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l
var $async$wZ=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).writeText(B.f.a0($.bS().eT(),null))),t.X),$async$wZ)
case 6:$.p.j().setAttribute("data-renderer-shader-lab-clipboard","copied")
$.p.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
l=p.pop()
o=A.ah(l)
m=$.p.j()
m.setAttribute("data-renderer-shader-lab-clipboard","copy-failed")
$.p.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(o))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$wZ,r)},
xn(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j
var $async$xn=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).readText()),t.N),$async$xn)
case 6:o=b
n=o
$.bS().nC(n)
$.p.j().setAttribute("data-renderer-shader-lab-clipboard","imported")
$.p.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
j=p.pop()
m=A.ah(j)
k=$.p.j()
k.setAttribute("data-renderer-shader-lab-clipboard","import-failed")
$.p.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(m))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$xn,r)},
IV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.k8())return f
n=A.dW().gaZ()
m=n.h(0,"captureSeed")
l=A.dM(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dM(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fh(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.ai(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gN(),m=m.gv(m);m.m();){o=m.gp()
if(typeof o.a!="string"||typeof o.b!="string"||!B.nu.q(0,o.b))return f
J.b7(p,A.w(o.a),A.w(o.b))}r=p}else return f}catch(g){if(A.ah(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.nB.q(0,i))return f
if(h!=null&&!B.ny.q(0,h))return f
return new A.vv(l,k,j,h,r)},
IW(){var s,r,q,p=A.dW().gaZ().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fn
break A}if("intimate"===p){s=B.fp
break A}s=B.fo
break A}r=A.dW().gaZ().h(0,"cameraFov")
q=A.fh(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fW(B.b.n(q,35,100)*3.141592653589793/180,s.b,s.c)},
hW(a){var s=$.bf
if(s===a&&B.c.q(A.w(a.b.className),"open"))return
if(s!=null)s.ah()
$.bf=a
if(a===$.fJ.j())$.fJ.j().iX($.af===$.R.j().r)
if(a===$.cz.j())$.i4().im("gameplay.viewport")
else $.i4().or(A.D_(a))
s=$.am.j()
s.ay=!1
s.b0()
$.eQ=0
a.bU()},
zU(a,b,c){var s,r,q
$.k3=!0
s=$.bf
if(s!=null)s.ah()
$.bf=a
s=$.i4()
if(s.a.a.length===0)s.im(c)
r=A.K(s.a.a,t.oP)
r.push(new A.dK(b,B.a4,c))
q=s.a
s.a=new A.ex(r,q.b,q.c)
s.kr(b)
s=$.am.j()
s.ay=!1
s.b0()
$.eQ=0
a.bU()
$.k3=!1},
e6(a){var s,r,q,p,o,n,m,l=null
if($.k3)return
$.k3=!0
a.ah()
$.bf=null
s=$.i4().m2()
$.k3=!1
r=s.a
if(r===B.dO){$.eQ=0
r=$.am.j()
r.b0()
r.ay=!0
q=A.G(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dN)return
r=s.c.a
r=r.length===0?l:B.a.ga6(r)
p=r==null?l:r.a
A:{if(B.bH===p){r=$.cz.j()
break A}if(B.dD===p){r=$.hO.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bf=r
n=$.am.j()
n.ay=!1
n.b0()
$.eQ=0
r.bU()
m=o==null?l:A.G(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
k6(a){if($.bf===a&&B.c.q(A.w(a.b.className),"open"))a.ah()
else A.hW(a)},
hX(a){var s
if($.k3)return
if($.bf===a)$.bf=null
if(a===$.cz.j())$.i4().cu()
else $.i4().n5(A.D_(a))
$.eQ=0
s=$.am.j()
s.b0()
s.ay=!0},
D_(a){if(a===$.cz.j())return B.dE
if(a===$.hO.j())return B.a4
if(a instanceof A.hu)return B.a4
if(a instanceof A.is)return B.a4
if(a instanceof A.ie)return B.a4
if(a===$.jU.j())return B.mi
if(a===$.fJ.j())return B.mj
if(a===$.jT.j())return B.mk
if(a===$.ng.j())return B.a4
if(a===$.jR.j())return B.mm
return B.ml},
nl(a,b){var s
a.soe(new A.wI())
a.soh(new A.wJ())
a.sog(new A.wK())
a.soa(new A.wQ())
a.sod(new A.wR())
a.soq(new A.wS())
a.sol(new A.wT())
a.soj(new A.wU())
a.sbi(b?new A.wV(a):new A.wW(a))
a.sb8(b?new A.wX(a):new A.wL(a))
s=a.f
if(s===B.O)a.so1(new A.wM())
if(s===B.a6)a.sob(new A.wN())
if(s===B.P){a.so0(new A.wO())
a.soi(new A.wP())}},
HW(){var s=new A.wE(),r=$.eO.j()
r.seF(s)
r.sof(new A.wF(s))
r.sbi(new A.wG())
r.sb8(new A.wH())},
nk(a,b,c){return A.HT(a,b,c)},
HT(a,b,c){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nk=A.aM(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.wA()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.C)l=A.D5(l,j)
c.cF(new A.dZ(i,2,null,l,k.i("dZ<1,1>")))
s=4
return A.a6(i,$async$nk)
case 4:case 3:o=$.k9().b
n=$.ay
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a6(n.cX(b.a),$async$nk)
case 11:case 10:k=b.a
$.jZ=A.hc(k,a)
$.eO.j().cD(a,k,b.b)
A.zW()
A.k4()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ah(g)
$.jZ=A.hc(o,o)
k=$.eO.j()
k.cD(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.zW()
s=8
break
case 5:s=1
break
case 8:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$nk,r)},
IK(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ai(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.ia)
q=A.AX(r.h(0,"requested"))
$.jZ=A.hc(A.AX(r.h(0,"effective")),q)}catch(s){$.jZ=A.hc(null,null)}p=$.k9().a
o=A.DC(p,A.CN())
r=o.a
$.jZ=A.hc(r,p)
$.eO.j().cD(p,r,o.b)
A.zW()
A.k4()},
CN(){var s,r,q,p,o=$.fI.j().ghL().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.V(p,"max-samples-"))continue
r=A.dM(B.c.aQ(p,12),null)
if(r==null)r=1}return new A.pW(r,B.a.q(o,"disjoint-timer-query"))},
zW(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a0($.k9().C(),null))}catch(s){}},
HV(){var s=$.jQ.j()
s.seF(new A.wB())
s.sbi(new A.wC())
s.sb8(new A.wD())},
II(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.zJ=A.EK(B.f.ai(n,null))}catch(s){$.zJ=A.h2(null,null,!1,1,!1,!1,2,1)}r=$.jQ.j()
q=r.w=$.fP()
r.x=new A.ky(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.b.t(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.b.t(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.e8()
$.am.j().f5($.fP().r)
r=$.am.j()
q=$.fP()
p=r.ch
p.a=q.f
p.eM()
r.b0()
A.D1()},
D1(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a0($.fP().C(),null))}catch(s){}},
IH(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jX=A.Ev(B.f.ai(r,null))}catch(s){$.jX=B.b2}$.hM.j().iV($.jX)
A.D0()
A.zA()},
D0(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a0($.jX.C(),null))}catch(s){}},
zA(){var s=$.bm
if(s==null)return
s.j4($.jX)},
IJ(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.zN=A.Fd(B.f.ai(r,null))}catch(s){$.zN=$.yZ()}$.jS.j().iW($.cC())
A.D2()
A.Cw()},
D2(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a0($.cC().C(),null))}catch(s){}},
Cw(){var s,r="detailed",q=A.Fc($.cC()),p=A.G(A.a(v.G.document).documentElement)
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
s=$.cC().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cC().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
IG(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dq=A.Ep(B.f.ai(r,null))}catch(s){$.dq=B.aE}$.fH.j().f4($.dq)
A.zV()
A.ni()},
zV(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a0($.dq.C(),null))}catch(s){}},
ni(){var s,r,q,p,o,n,m=$.dq,l=$.xP,k=$.Ac,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.hk)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ak
$.A0=l
$.cW.j()
r=A.G(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.T(A.a(r.classList).contains("high-contrast"))
o=q?null:A.T(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.T(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.T(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.T(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.T(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.T(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.p.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Cu){m=$.be.j()
l=$.dq.f
m.e=new A.kd(l==null?B.ak:l)
m=$.be.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
D4(a){var s,r,q
A.eU("renderer-unavailable")
s=$.p.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.n(r,t.X)
q.l(0,"kind","pixeldart")
q.l(0,"explicit",$.dp.j().b)
$.dp.j()
q.l(0,"automatic",!1)
q.l(0,"fallback",!1)
q.l(0,"rejected",$.dp.j().d)
q.l(0,"aliasUsed",$.dp.j().f)
if($.dp.j().e!=null)q.l(0,"rejectionReason",$.dp.j().e)
if($.dp.j().r!=null)q.l(0,"aliasReason",$.dp.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a0(A.E(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.n,"selection",q],r,t.K),null))},
Ij(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.xr(r,q)
r.addEventListener("change",A.Z(new A.xp(s)))
q.addEventListener("change",A.Z(new A.xq(s)))},
nA(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$nA=A.aM(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.G(A.a(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.p.b=e8
$.zM=A.G(A.a(e7.document).getElementById("fps"))
$.dp.b=$.E3().cB(A.dW().gaZ().h(0,"renderer"))
A.Ik()
c1=$.p.j()
c2=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c1.width=c2
c2=$.p.j()
c1=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c2.height=c1
c3=A.G(A.a(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.Cr.b=c3
c3.width=A.h($.p.j().width)
c3.height=A.h($.p.j().height)
c1=new A.oL(c3,A.c([],t.km))
c4=A.G(c3.getContext("2d"))
if(!t.m.b(c4))A.f(A.i("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.tm(c1)
$.eT=c1
c1.dC(A.h($.p.j().width),A.h($.p.j().height))}n=B.fm.mV(e8)
if(n==null){A.D4("webgl2 unavailable")
s=1
break}try{c1=A.h($.p.j().width)
c2=A.h($.p.j().height)
c5=t.d
c6=A.c([],c5)
c7=t.N
c8=A.c([],t.s3)
c9=t.iO
d0=t.m3
c5=A.c([],c5)
d1=t.S
d2=t.pw
d3=A.c([],t.j5)
m=new A.mS(n,c1,c2,c6,A.n(c7,t.qr),c8,A.n(c7,c9),A.n(c7,d0),A.n(c7,t.xp),A.n(c7,t.bE),A.n(c7,c9),A.n(c7,d0),c5,A.n(c7,c9),A.n(c7,d0),A.n(c7,c7),A.n(d1,d2),A.n(c7,t.qS),d3,B.ku,A.n(c7,t.Aj),A.n(c7,c7),A.n(c7,d2),A.n(c7,t.vD),A.n(c7,d2),A.n(c7,d2),new A.re(A.n(c7,t.ml),A.n(c7,d1)),A.n(c7,t.mL),A.n(c7,t.w1),B.iK,B.mA,B.di,B.dj,B.kB)
$.ay=m
c1=$.dp.j()
c2=t.dM.a(m)
if(c1.a!==B.aT)A.f(A.i("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.rN(c2,c1.C(),B.n6)
c2.nF()
c1.d=B.X
$.fI.b=c1}catch(f0){l=A.ah(f0)
k=A.cZ(f0)
g=$.p.j()
g.setAttribute("data-renderer-initialization-error",A.y(l))
g.setAttribute("data-renderer-error",A.y(l))
if($.k8())$.p.j().setAttribute("data-renderer-error-stack",A.y(k))
A.D4("pixeldart initialization failed")
s=1
break}A.k4()
p=4
A.eU("initializing")
$.cW.b=new A.oK(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),$.Av())
$.xP=A.T(A.a(A.a(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.Ac=A.T(A.a(A.a(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.A0=$.xP
$.cW.j()
c1=A.a(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.Fk(A.E(["moveForward",A.c(["KeyW"],c5),"moveBack",A.c(["KeyS"],c5),"moveLeft",A.c(["KeyA"],c5),"moveRight",A.c(["KeyD"],c5),"interact",A.c(["KeyE"],c5),"secondary",A.c(["KeyQ"],c5),"run",A.c(["ShiftLeft"],c5),"crouch",A.c(["ControlLeft"],c5),"rotate",A.c(["KeyR"],c5),"reach",A.c(["KeyF"],c5),"journal",A.c(["KeyJ"],c5),"sleep",A.c(["KeyL"],c5),"pause",A.c(["Escape"],c5)],c2,c6))
c7=A.a(c1.document)
c5=new A.l6(c1,c7,A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),new A.j(0,0,0),new A.qz(),c5)
c1.addEventListener("keydown",A.Z(c5.gkU()))
c1.addEventListener("keyup",A.Z(c5.gkW()))
c1.addEventListener("mousemove",A.Z(c5.gl1()))
c1.addEventListener("mousedown",A.Z(c5.gl_()))
c1.addEventListener("mouseup",A.Z(c5.gl3()))
c1.addEventListener("wheel",A.Z(c5.gl5()))
c1.addEventListener("blur",A.Z(c5.gl7()))
c7.addEventListener("pointerlockchange",A.Z(c5.gkY()))
$.am.b=c5
c5=$.p.j()
c1=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c5.width=c1
c1=$.p.j()
c5=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c1.height=c5
A.eU("renderer")
A.eU("text")
c5=$.fQ()
s=7
return A.a6(c5.bh(),$async$nA)
case 7:j=c5.pg()
i=A.Gv(j)
if(!(i instanceof A.mi)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aP.b=i.a
$.nf.b=A.Es(j)
g=A.n(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.D[d5]
c6=A.w(f)
c7=c5.c
c7===$&&A.t()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aG(d6,!0,c2):B.n
J.b7(g,f,c6)}e=A.Gw(g)
s=8
return A.a6(A.np(),$async$nA)
case 8:d=f2
$.zz.b=new A.oD(B.fl)
c=$.zz.j().oA(new A.yg(e,d))
d7=$.z_()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.b5.aY(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aV(c7.c)
if(c7==null)c7=7
if(c6<1)A.f(A.a7(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.f(A.a7(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a7(5760,"daySeconds","must be finite and > 0"))
d8=new A.kY(c6,7,5760)
d8.fd(c7)
d9=A.B6(e)
e0=g==null?A.AY(42):A.Do(g,42)
g=A.AV(42,c2,e0,d8,d9,A.AO(6,16,d9,null,6,B.kG,d8),new A.kH(0,0,0,!1),A.rs(null,null,null))}else{g=c.a
g.toString
g=A.AW(d,g,e)}$.W.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Fa(a,g,$.W.j().b)}$.wt=g
$.aP.j().y=$.W.j().z
g=A.ab(A.If($.W.j().b),t.fu)
$.wq.b=new A.vh(g)
g=$.z0()
c2=c.a
g.eO(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fI.j().c2(A.Bu($.W.j().giu()))
if(c.b!=null){g=c.b
g.toString
A.fM(g)}g=$.aP.j()
c2=A.JV($.W.j().b,A.JW(j.b))
g.sjs(A.hh(c2,A.B(c2).c))
A.eU("house")
$.R.b=$.W.j().c
$.nv.P(0)
c2=c.a
$.nv.L(0,A.J0(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.u)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.u)(c5),++e1){a7=c5[e1]
a7.sji(a5)}}}a8=$.At()
if(a8!=null&&a8.length!==0)for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Au()}}g=$.ay
if(g!=null)g.m1($.R.j())
$.bw.b=$.W.j().d
g=$.R.j().r
$.af=g==null?"hall":g
g=$.R.j().eN(1.65)
if(g==null){$.R.j()
g=new A.j(12.9375,1.65,0.825)}$.xL=g
$.ch=$.af===$.R.j().r?3.141592653589793:0
$.eV=0
g=$.e8()
$.xW=$.xC=g
b1=g.ac(0,new A.j(0,1.3499999999999999,0))
$.eP.b=new A.kt(b1,J.Ax(b1,new A.j(0,1.2000000000000002,0)))
$.hN.b=new A.pl()
g=A.zO(B.n)
c2=A.zO(B.n)
c5=new A.tp(B.H,g,c2)
if(!isFinite(0))A.f(B.h_)
if(!B.a.a2(c2,B.a.gaE(g)))A.f(B.hX)
if(c5.a===B.H&&c5.b!==0&&!c5.e)A.f(B.h8)
$.cg.b=c5
g=c.a
b2=A.FL(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nL($.R.j())){g=b2.b
$.xW=$.xC=$.xL=g
$.ch=b2.c
$.eV=b2.d
$.af=b2.a
b3=g.ac(0,new A.j(0,1.3499999999999999,0))
g=$.eP.j()
g.sm3(b3)
g.b=J.Ax(b3,new A.j(0,1.2000000000000002,0))
g=$.eP.j()
c2=$.R.j()
c5=b2.e
c6=b2.f
g.iz($.af,$.e8(),c2,c6,c5)
A.fM("restored position")}b4=$.R.j().eN(1.65)
g=$.p.j()
c2=$.R.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.E(b4.a,3)+","+B.b.E(b4.b,3)+","+B.b.E(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.Gb(A.a(e7.document))
c2.so2(new A.yh())
c2.sbi(new A.yi())
c2.sb8(new A.yt())
$.hO.b=c2
c2=A.a(e7.document)
g=A.a(c2.createElement("div"))
c5=new A.rJ(c2,g)
c5.b_(c2)
g.className=A.w(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.a(g.appendChild(A.oG(c2,B.f_,1)))
A.a(g.appendChild(A.F(c2,"p","settings-copy","The house waits. Choose what to do next.")))
e2=A.F(c2,"nav","pause-actions",null)
e2.setAttribute("aria-label","Pause actions")
c5.bv(c2,e2,B.dF,"resume")
c5.bv(c2,e2,B.dG,"settings")
c5.bv(c2,e2,B.dH,"controls")
c5.bv(c2,e2,B.dI,"save now")
c5.bv(c2,e2,B.dJ,"help")
c5.bv(c2,e2,B.dK,"credits")
c5.bv(c2,e2,B.dL,"back")
A.a(g.appendChild(e2))
c5.som(new A.yD())
c5.sbi(new A.yE())
c5.soo(new A.yF())
c5.so6(new A.yG())
c5.son(new A.yH())
c5.soc(new A.yI())
c5.so7(new A.yJ())
c5.sb8(new A.yj())
$.cz.b=c5
c5=$.W.j().e
g=$.bw.j()
$.W.j()
$.nh.b=new A.qx(c5,g,new A.yk())
g=A.a(e7.document)
c5=$.W.j().e
c2=$.bw.j()
c6=$.nh.j()
c7=A.a(g.createElement("div"))
c6=new A.qH(c5,c2,c6,g,c7)
c6.b_(g)
c7.setAttribute("aria-label","The Journal")
A.a(c7.appendChild(A.F(g,"div","journal-title","The Journal")))
e3=A.F(g,"div","journal-pages",null)
c2=A.F(g,"div","page page-left",null)
c6.y!==$&&A.b6()
c6.y=c2
c5=A.F(g,"div","page page-right",null)
c6.z!==$&&A.b6()
c6.z=c5
A.a(e3.appendChild(c2))
A.a(e3.appendChild(c5))
A.a(c7.appendChild(e3))
A.a(c7.appendChild(c6.k6()))
e4=A.F(g,"div","tape-roll",null)
A.a(e4.style).setProperty("width","8rem")
c5=A.F(g,"div","tape-fill",null)
c6.as!==$&&A.b6()
c6.as=c5
A.a(e4.appendChild(c5))
A.a(c7.appendChild(e4))
e5=A.F(g,"div","consult",null)
A.a(e5.appendChild(A.F(g,"div","consult-label","Cite an entry")))
c5=A.F(g,"div","entry-picker",null)
c6.at!==$&&A.b6()
c6.at=c5
c2=A.F(g,"div","consult-result",null)
c6.ax!==$&&A.b6()
c6.ax=c2
A.a(e5.appendChild(c5))
A.a(e5.appendChild(c2))
A.a(c7.appendChild(e5))
e6=A.G(g.documentElement)
if(t.m.b(e6)){A.a(e6.style).setProperty("--shake-max-deg","3deg")
A.a(e6.style).setProperty("--shake-max-px","2px")}$.jU.b=c6
$.jU.j().sb8(new A.yl())
g=A.a(e7.document)
c2=A.F(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.a(c2.style).setProperty("transition-duration","0.3s")
A.a(A.G(g.body).appendChild(c2))
$.Cq.b=new A.t4(c2)
c2=A.a(e7.document)
g=A.F(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.G(c2.body).appendChild(g))
$.Cp.b=new A.oC(g)
g=A.a(e7.document)
c2=A.F(g,"div","ambient-notice",null)
c5=A.F(g,"div","caption-cue",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
c5.setAttribute("aria-hidden","true")
c5.setAttribute("data-caption-kind","non-speech")
A.a(A.G(g.body).appendChild(c2))
A.a(A.G(g.body).appendChild(c5))
$.be.b=new A.nS(c2,c5,B.S)
$.Cu=!0
c5=A.ER(A.a(e7.document))
c5.so5(A.DA())
c5.so4(A.K9())
$.aC.b=c5
c5=$.cB()
c5.so3(new A.ym())
c5.so8(A.DA())
c5=c.a
b5=A.Gt(c5==null?null:c5.c.h(0,"visitors"))
if($.cC().Q&&b5!=null&&$.aP.j().eO(b5))A.J_()
g=$.nf.j()
c2=c.a
g.oX(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.O(b6);g.m();){b7=g.gp()
if(A.b_(b7))$.xQ.k(0,b7)}g=A.Gg(A.a(e7.document))
g.sop(new A.yn())
g.sb8(new A.yo())
$.fJ.b=g
g=A.Fg(A.a(e7.document))
g.sb8(new A.yp())
$.jT.b=g
g=A.EL(A.a(e7.document))
g.sb8(new A.yq())
$.ng.b=g
$.jV.b=A.lV(A.a(e7.document),null)
$.jW.b=A.lV(A.a(e7.document),B.a5)
$.fH.b=A.lV(A.a(e7.document),B.P)
A.nl($.jV.j(),!1)
A.nl($.jW.j(),!0)
A.nl($.fH.j(),!0)
A.IG()
A.Ij()
$.eO.b=A.Ff(A.a(e7.document))
A.HW()
A.IK()
$.hM.b=A.lV(A.a(e7.document),B.O)
A.nl($.hM.j(),!0)
A.IH()
$.jS.b=A.lV(A.a(e7.document),B.a6)
A.nl($.jS.j(),!0)
A.IJ()
$.jQ.b=A.EJ(A.a(e7.document))
A.HV()
A.II()
g=A.F0(A.a(e7.document))
g.sb8(new A.yr())
g.so9(new A.ys())
$.jR.b=g
g=c.a
b8=A.F2(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.D3(b8)
A.eU("world")
A.D6()
A.a(e7.window).addEventListener("resize",A.Z(new A.yu()))
A.a(e7.document).addEventListener("visibilitychange",A.Z(new A.yv()))
A.a(e7.window).addEventListener("keydown",A.Z(new A.yw()))
A.a(e7.window).addEventListener("keyup",A.Z(new A.yx()))
A.a(e7.window).addEventListener("keydown",A.Z(new A.yy()))
A.a(e7.window).addEventListener("click",A.Z(new A.yz()))
$.p.j().addEventListener("mousemove",A.Z(new A.yA()))
$.p.j().addEventListener("click",A.Z(new A.yB()))
$.p.j().addEventListener("wheel",A.Z(new A.yC()))
A.hT()
A.eU("raf")
A.h(A.a(e7.window).requestAnimationFrame(A.Z(A.DB())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.ah(e9)
c0=A.cZ(e9)
A.xE(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nA,r)},
Ii(a){var s,r,q,p=$.eT
if(!$.aC.j().y||p==null)return
s=A.CF(a)
if(s==null)return
r=$.cB()
q=p.ia(s.a,s.b)
r.r=q==null?null:q.b},
Ih(a){var s,r=$.eT
if(!$.aC.j().y||r==null)return!1
s=A.CF(a)
if(s==null)return!1
return $.cB().nz(r.ia(s.a,s.b))},
CF(a){var s=A.a($.p.j().getBoundingClientRect()),r=A.a1(s.width),q=A.a1(s.height)
if(r<=0||q<=0)return null
return new A.a5(A.h(a.clientX)-A.a1(s.left),A.h(a.clientY)-A.a1(s.top))},
Ik(){var s=v.G
A.a(s.window).addEventListener("error",A.Z(new A.xs()))
A.a(s.window).addEventListener("unhandledrejection",A.Z(new A.xt()))},
eU(a){if($.zF===a)return
$.zF=a
$.p.j().setAttribute("data-boot-phase",a)},
k4(){var s,r,q,p,o,n=null,m=$.fI.j().ghL(),l=$.p.j(),k=A.dW().gaZ().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a0(m.C(),n))
k=$.dp.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.bS().gnY().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.ay
if(k==null)k="{}"
else{k=k.e
k===$&&A.t()
k=k.as
if(k==null)k=A.f(A.i("renderer is not initialized"))
s=k.a
s.A()
r=s.b
q=A.K(r,A.v(r).c)
B.a.X(q)
r=t.N
p=t.K
p=B.f.a0(A.E(["profile",A.E(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(B.le,n))
l=$.ay
o=l==null?n:l.x
if(o!=null)$.p.j().setAttribute("data-renderer-profile-fallback",o)},
IS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.k8())return
s=$.At()
if(s!=null&&s.length!==0){r=$.p.j()
q=$.Au()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.wq.j().ey($.W.j().gag().a)
r=$.p.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.z_()
o=q==null?a1:q.e
if(o!=null)$.p.j().setAttribute("data-automation-capture-shutters",o)
$.p.j().setAttribute("data-automation-rain-window-visibility",B.b.E(A.A_($.af),3))
r=$.p.j()
q=$.zF
n=$.af
m=$.R.j().r
l=$.R.j().x
k=$.af
j=$.R.j().r
i=$.e8()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.eP.j().ghv()
f=$.eP.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a0(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.ch,"pitch",$.eV,"modal",$.bf!=null,"dialogueOverlay",$.aC.j().y,"inputEnabled",$.am.j().ay,"day",$.W.j().gag().a,"hour",$.W.j().gag().b],h,e),a1))
$.p.j().setAttribute("data-story-journal-entry-count",""+$.W.j().gag().r)
d=A.n(h,e)
for(r=$.R.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.u)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.l(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.p.j().setAttribute("data-automation-portals",B.f.a0(d,a1))
a=$.nj
r=!1
if(a!=null)if($.R.j().e.h(0,"cellar")!=null){r=$.R.j()
q=$.af
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cv("cellar",$.af)
$.p.j().setAttribute("data-audio-transmission-cellar",B.f.a0(A.E(["sourceRoom","cellar","listenerRoom",$.af,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.p.j().setAttribute("data-audio-transmission-cellar","unavailable")},
k5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.cg.j().a!==B.H){A.fM("save unavailable during rupture")
return}try{p=$.zz.j()
o=$.W.j()
n=t.N
m=t.z
s=A.n(n,m)
l=$.af
k=$.e8()
j=$.ch
i=$.eV
h=$.eP.j().ghv()
g=$.eP.j().d
J.b7(s,"player",new A.lA(l,k,j,i,h,g==null?null:g.b).C())
l=$.aP.j()
k=A.fo(l.b,n)
j=A.fo(l.c,t.T)
l=l.r
J.b7(s,"visitors",new A.mj(k,j,l==null?null:new A.kf(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).C())
l=$.nf.j().b
l=A.K(l,A.v(l).c)
B.a.X(l)
J.b7(s,"ambient",l)
l=$.wt
if(l!=null)J.b7(s,"authoredEvents",A.E(["delivered",l.gn1()],n,m))
l=A.K($.xQ,A.v($.xQ).c)
B.a.X(l)
J.b7(s,"unverifiables",l)
J.b7(s,"inventoryInspections",$.z0().C())
r=A.n(n,t.gG)
for(l=new A.N($.nv,A.v($.nv).i("N<1,2>")).gv(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.b7(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.b7(s,"weatherSurfaces",r)
r=$.zK
if(r!=null)J.b7(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.B_(o.c).C()
j=o.d
p.pi(A.Bx(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.J),"dayLoop",o.f.C(),"journal",o.e.C(),"difficulty",o.r.C(),"narrative",o.z.C()],n,m),2))
A.fM(a)}catch(f){A.fM("save failed")}},
IN(){var s,r,q=$.R.j().eN(1.65),p=$.R.j().r
if(q==null||p==null||$.R.j().e.h(0,p)==null)return
$.ka().a=new A.j(0,0,0)
$.af=p
$.xW=$.xC=$.xL=q
s=q.ac(0,new A.j(0,1.3499999999999999,0))
r=$.eP.j()
r.a=s
r.b=s.a4(0,new A.j(0,1.2000000000000002,0))
r.iz(p,q,$.R.j(),null,null)},
J0(a){var s,r,q,p
if(a==null)return A.n(t.N,t.xe)
if(!t.f.b(a))throw A.b(B.hg)
s=A.n(t.N,t.xe)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.iu)
s.l(0,p,A.GD(q.b))}return s},
IQ(){var s=A.G(A.a(v.G.document).documentElement),r=s==null?null:A.aq(s.getAttribute("data-gameplay-focus-loss")),q=A.bK(new A.I(B.aP,t.rg.a(new A.xz(r)),t.vK),t.x)
switch((q==null?B.bb:q).a){case 0:$.fL=!0
s=$.bm
if(s!=null)s.f8(!0)
break
case 1:$.fL=!0
break
case 2:break}},
fM(a){var s=v.G,r=A.G(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.a(s.document).documentElement)
s=s==null?null:A.aq(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.F9(B.fI,new A.xK(r),t.H)},
xE(a,b){var s,r,q,p
A.eU("error")
s=A.y(a)
r=A.yU(s,"\n"," ")
s=$.zM
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.t(0)
$.p.j().setAttribute("data-boot-error",p)
if($.k8()&&!q)$.p.j().setAttribute("data-boot-stack",b.t(0))
A.a(s.console).error(p)},
Cz(){var s,r
if($.zD)return
$.zD=!0
s=$.bm
r=s==null
if(!r)s.cu()
if(!r)s.fg("music")
B.a.k($.dr,"arm")},
hT(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hT=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a6(A.hS(),$async$hT)
case 2:o=null
q=4
s=7
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hT)
case 7:n=b
i=A
s=8
return A.a6(A.av(A.a(n.json()),t.X),$async$hT)
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
if(k!=null&&typeof k==="string"){A.w(k)
l=A.G(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.ng.j().f
l===$&&A.t()
l.textContent=k}s=9
return A.a6(A.pA(A.c([A.xv(o),A.xo(o),A.k1()],t.iJ),t.H),$async$hT)
case 9:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hT,r)},
k1(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$k1=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$k1)
case 6:o=b
if(!A.T(o.ok)){k=A.i("HTTP "+A.y(A.ny(o,"status",t.S)))
throw A.b(k)}s=7
return A.a6(A.av(A.a(o.text()),t.N),$async$k1)
case 7:n=b
m=A.FM(n)
$.p.j().setAttribute("data-renderer-model-packages","validated")
$.p.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.ay
k=k==null?null:k.dr(m)
s=8
return A.a6(k instanceof A.as?k:A.GW(k,t.H),$async$k1)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.ah(i)
k=$.p.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.p.j().setAttribute("data-renderer-model-package-error",A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$k1,r)},
hS(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hS=A.aM(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.df[g]
q=6
s=9
return A.a6(A.av(A.a(A.a(j.window).fetch(o)),i),$async$hS)
case 9:n=a0
s=10
return A.a6(A.av(A.a(n.text()),h),$async$hS)
case 10:m=a0
l=A.AE(B.f.ai(m,null))
f=$.R.b
if(f===$.R)A.f(A.a9(""))
l.eW(f)
f=$.p.b
if(f===$.p)A.f(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.p.b
if(f===$.p)A.f(A.a9(""))
f.setAttribute("data-house-manifest-source",o)
f=$.p.b
if(f===$.p)A.f(A.a9(""))
f.setAttribute("data-house-role",l.c)
f=$.p.b
if(f===$.p)A.f(A.a9(""))
f.setAttribute("data-house-story-authority",l.d)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ah(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.p.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.y(d))}s=11
return A.a6(A.nn(),$async$hS)
case 11:s=12
return A.a6(A.no(),$async$hS)
case 12:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hS,r)},
np(){var s=0,r=A.aL(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$np=A.aM(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.df[f]
p=7
s=10
return A.a6(A.av(A.a(A.a(i.window).fetch(n)),h),$async$np)
case 10:m=a0
s=11
return A.a6(A.av(A.a(m.text()),g),$async$np)
case 11:l=a0
k=A.AE(B.f.ai(l,null))
k.eX()
e=$.p.b
if(e===$.p)A.f(A.a9(""))
e.setAttribute("data-house-blueprint","validated")
e=$.p.b
if(e===$.p)A.f(A.a9(""))
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
j=A.ah(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:throw A.b(A.i("authored house blueprint unavailable: "+A.y(c)))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$np,r)},
nn(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$nn=A.aM(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.k5[c]
p=7
s=10
return A.a6(A.av(A.a(A.a(g.window).fetch(n)),f),$async$nn)
case 10:m=b1
s=11
return A.a6(A.av(A.a(m.text()),e),$async$nn)
case 11:l=b1
b=B.f.ai(l,null)
b=h.b(b)?b:A.e3("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.e3("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.b_(a)?a:A.e3("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.e3("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aG(a,!0,d):A.e3("assets is not a list")
a4=A.B(a3)
a5=a4.i("H<1,d8>")
a3=A.K(new A.H(a3,a4.i("d8(1)").a(A.K5()),a5),a5.i("a0.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aG(a,!0,d):A.e3("placements is not a list")
a5=A.B(a4)
a6=a5.i("H<1,cK>")
a4=A.K(new A.H(a4,a5.i("cK(1)").a(A.K6()),a6),a6.i("a0.E"))
a4.$flags=1
k=new A.qe(a1,a2,a0,a3,a4)
a1=$.R.b
if(a1===$.R)A.f(A.a9(""))
k.eW(a1)
$.hQ=k
a1=$.ay
if(a1!=null)a1.f6(k)
a1=$.p.b
if(a1===$.p)A.f(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.p.b
if(a1===$.p)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.p.b
if(a1===$.p)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.p.b
if(a1===$.p)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a0(k.gju(),null))
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ah(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.p.j().setAttribute("data-house-inventory","unavailable")
$.p.j().setAttribute("data-house-inventory-error",A.y(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nn,r)},
no(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$no=A.aM(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hQ
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.kK[a4]
p=7
s=10
return A.a6(A.av(A.a(A.a(a1.window).fetch(m)),a2),$async$no)
case 10:l=b5
s=11
return A.a6(A.av(A.a(l.text()),e),$async$no)
case 11:k=b5
a5=B.f.ai(k,null)
a5=a0.b(a5)?a5:A.hP("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aG(a6,!0,a3):A.hP("emitters is not a list")
a8=A.B(a7)
a9=a8.i("H<1,d7>")
a7=A.K(new A.H(a7,a8.i("d7(1)").a(A.Km()),a9),a9.i("a0.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.b_(a6)?a6:A.hP("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hP("sourceRef is not a string")
j=new A.qm(a8,a9,a7)
a7=$.R.b
if(a7===$.R)A.f(A.a9(""))
j.pb(a7,b2)
$.CQ=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gN(),a9=a9.gv(a9);a9.m();){g=a9.gp()
J.b7(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.R.b
if(a7===$.R)A.f(A.a9(""))
a8=A.Et(i)
a9=new A.o6(a7,A.aW(B.dx,e,d),a8)
a9.jF(a8,a7,B.dx)
$.nj=a9
a7=$.bm
if(a7!=null){a7.CW=a9
a7.bK()}a7=$.p.b
if(a7===$.p)A.f(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.p.b
if(a7===$.p)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.p.b
if(a7===$.p)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.p.b
if(a7===$.p)A.f(A.a9(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ah(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.nj=null
$.p.j().setAttribute("data-audio-planner","unavailable")
$.p.j().setAttribute("data-house-soundscape","unavailable")
$.p.j().setAttribute("data-house-soundscape-error",A.y(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$no,r)},
wz(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.b9(s,A.B(s).i("b9<1,e>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.w(q))}},
xo(a){var s=0,r=A.aL(t.H),q,p,o,n,m,l
var $async$xo=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.wz(A.G(n?null:a.sfx),m,"")
A.wz(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.w(p))
l=$
s=2
return A.a6(A.od(m,$.R.j()),$async$xo)
case 2:o=l.bm=c
o.CW=$.nj
o.bK()
A.IL()
A.D8(o)
A.zA()
A.D9()
if($.zD){o.cu()
o.fg("music")}return A.aJ(null,r)}})
return A.aK($async$xo,r)},
A7(a,b){var s
A.Dk(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
IX(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Cv(a,b){var s
if(a!=="brightness")return
s=A.G(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.y(B.b.n(b,0.6,1.4))+")")},
ws(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.a(v.G.document).documentElement)
if(r!=null)A.T(A.a(r.classList).toggle(s,b))
A.ni()},
D9(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a1($.dt().a.cw(o)),k=A.T($.dt().a.cw(n)),j=A.T($.dt().a.cw(m))
for(s=[$.jV.j(),$.jW.j(),$.fH.j(),$.hM.j(),$.jS.j()],r=0;r<5;++r)s[r].f7(o,l)
A.Cv(o,l)
for(s=[$.jV.j(),$.jW.j(),$.fH.j(),$.hM.j(),$.jS.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.ws(n,k)
A.ws(m,j)},
A6(a,b){var s
A.Dk(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
IU(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
D8(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.kl[s]
q=$.dt().a.b.h(0,r)
j.l(0,r,A.a1(q==null?A.f(A.i("setting missing from profile: "+r)):q))}p=A.T($.dt().a.cw("muted"))
o=A.T($.dt().a.cw("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bu(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dI(o)
for(q=[$.jV.j(),$.jW.j(),$.fH.j(),$.hM.j()],n=j.$ti.i("cM<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cM(j,j.r,j.e,n);m.m();){k=m.d
l.f7(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Cx(){var s=$.bm
if(s!=null)A.D8(s)
A.D9()},
IL(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ai(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.hn)
q=A.Bz(r.h(0,"requested"))
$.Df=A.zk(A.Bz(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="audio"){l=m.a
o.l(0,l,A.IU(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="display"){p=m.a
r.l(0,p,A.IX(p))}}$.Df=A.Gd(o,r)
A.xA()},
xA(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a0($.dt().C(),null))}catch(s){}},
Dk(a,b){var s,r,q,p,o,n,m
switch(A.u4(a).d.a){case 0:r=A.fh(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dt()
q=s
A.u4(a).dD(q)
p=t.N
o=t.K
n=A.hg(r.a.b,p,o)
n.l(0,a,q)
r.a=A.dS(n,1)
n=s
A.u4(a).dD(n)
o=A.hg(r.b.b,p,o)
o.l(0,a,n)
r.b=A.dS(o,1)
A.xA()}catch(m){if(!(A.ah(m) instanceof A.A))throw m}},
xv(a){var s=0,r=A.aL(t.H),q,p,o
var $async$xv=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.n(p,p)
p=a==null
A.wz(A.G(p?null:a.tex),o,"")
A.wz(A.G(p?null:a.skybox),o,"")
o.l(0,"skybox-main-atmosphere-v1","res/skybox/cannon_8k.jpg")
o.L(0,B.lt)
q=$.ay
p=q==null?null:q.ds(o)
s=2
return A.a6(A.pA(A.c([p==null?A.AU(t.H):p],t.iJ),t.H),$async$xv)
case 2:return A.aJ(null,r)}})
return A.aK($async$xv,r)},
D6(){var s,r,q=v.G,p=A.h(A.a(q.window).innerWidth),o=A.h(A.a(q.window).innerHeight),n=$.p.j(),m=p>0?p:800
n.width=m
m=$.p.j()
n=o>0?o:600
m.height=n
s=A.G(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.h($.p.j().width)
s.height=A.h($.p.j().height)}q=$.eT
if(q!=null)q.dC(A.h($.p.j().width),A.h($.p.j().height))
q=$.fI.j()
n=A.h($.p.j().width)
m=A.h($.p.j().height)
if(q.d!==B.X)A.f(A.i("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.o("pixeldart surface size must be positive",null))
q.b.dC(n,m)
q=$.ay
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.p.j().setAttribute("data-renderer-surface",r)},
Ig(){var s,r,q=$.bf
if(q!=null){s=$.am.j()
if(!s.CW.bp("pause",s.f)){s=$.am.j()
s=s.CW.bp("secondary",s.f)}else s=!0
if(s){A.HY(q)
return}if($.am.j().f.a8(0,"GamepadDpadUp")){A.CW(q,-1)
return}if($.am.j().f.a8(0,"GamepadDpadDown")){A.CW(q,1)
return}s=$.am.j()
if(s.CW.bp("interact",s.f)){r=A.G(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.T(q.b.contains(r)))A.qE(r,"click",t.X)}return}s=$.am.j()
if(s.CW.bp("pause",s.f)){A.hW($.cz.j())
return}if($.aC.j().y)return
s=$.am.j()
if(s.CW.bp("journal",s.f))A.k6($.jU.j())
else{s=$.am.j()
if(s.CW.bp("sleep",s.f))A.k6($.fJ.j())}},
HY(a){if(a===$.cz.j()){a.ah()
return}if(a===$.hO.j()||a instanceof A.hu||a instanceof A.is||a instanceof A.ie){A.e6(a)
return}a.ah()},
CW(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.W)
for(s=t.m,r=0;r<A.h(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.a(v.G.document).activeElement)
o=B.a.bC(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.O(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
IT(f8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6=null,f7="exceeded"
A.a1(f8)
try{s=f8
if(!$.CP){$.zT=s
$.CP=!0}a2=s
a3=$.zT
if(typeof a2!=="number")return a2.ac()
r=(a2-a3)/1000
$.zT=s
a2=r
if(typeof a2!=="number")return a2.cA()
if(a2<0)r=0
a2=r
if(typeof a2!=="number")return a2.iT()
if(a2>0.25)r=0.25
A.Jp(r)
$.am.j().ow()
a2=$.p.j()
a3=$.am.j().z!=null?"standard":"none"
a2.setAttribute("data-controller",a3)
q=$.am.j().z
if(q!=null)$.p.j().setAttribute("data-controller-id",q)
else $.p.j().removeAttribute("data-controller-id")
A.Ig()
if(!$.fL&&$.bf==null){a2=$.eQ
a3=r
if(typeof a3!=="number")return A.yb(a3)
a3=$.eQ=a2+a3
p=0
a2=t.aA
for(;;){if(a3>=0.008333333333333333){a4=p
if(typeof a4!=="number")return a4.cA()
a4=a4<10}else a4=!1
if(!a4)break
$.xC=$.e8()
if(!$.As()){a3=$.W.b
if(a3===$.W)A.f(A.a9(""))
a3.lT(0.008333333333333333*($.cC().Q?1:20))
a3=$.E6()
a4=$.W.b
if(a4===$.W)A.f(A.a9(""))
a4=a4.gag()
a5=$.W.b
if(a5===$.W)A.f(A.a9(""))
a3=a3.cb(a4.a,a5.gag().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.u)(a3),++a6){o=a3[a6]
B.a.k($.dr,"clock:"+o.a)}a3=$.E7()
a4=$.W.b
if(a4===$.W)A.f(A.a9(""))
a4=a4.gag()
a5=$.W.b
if(a5===$.W)A.f(A.a9(""))
a3=a3.cb(a4.a,a5.gag().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.u)(a3),++a6){n=a3[a6]
B.a.k($.dr,"service:"+n.a+":"+n.b)}}A.Js()
A.Jo()
a3=$.aP.b
if(a3===$.aP)A.f(A.a9(""))
a4=$.W.b
if(a4===$.W)A.f(A.a9(""))
a3.w=a4.r.c>=0.5
a3=a3.f
a7=A.aG(a3,!1,a2)
a7.$flags=3
a8=a7
B.a.P(a3)
if(a8.length!==0){a3=$.W.b
if(a3===$.W)A.f(A.a9(""))
a3.oB(a8)}A.Jn()
A.Jr()
A.Jq()
A.Jm(0.008333333333333333)
a3=$.hN.b
if(a3===$.hN)A.f(A.a9(""))
if(a3.a!=null)if((a3.b-=0.008333333333333333)<=0)a3.a=null
a3=$.cg.b
if(a3===$.cg)A.f(A.a9(""))
m=a3.a!==B.H
a4=$.R.b
if(a4===$.R)A.f(A.a9(""))
a3.ec(0.008333333333333333,a4)
if(m){a3=$.cg.b
if(a3===$.cg)A.f(A.a9(""))
a3=a3.e}else a3=!1
if(a3)A.D7(!0)
a3=$.eQ-0.008333333333333333
$.eQ=a3
a4=p
if(typeof a4!=="number")return a4.a4()
p=a4+1}l=B.b.n(a3/0.008333333333333333,0,1)
a2=$.xW=A.BO($.E9(),$.e8(),l)
k=$.bm
if(k!=null){a3=k
a4=Math.sin($.ch)
a5=Math.cos($.ch)
a9=A.a(a3.a.listener)
a9.setPosition(a2.a,a2.b,a2.c)
A.aU(a9,"setOrientation",[a4,0,a5,0,1,0],t.H)
a3.iZ($.af)
for(a2=$.dr.length,a6=0;a6<$.dr.length;$.dr.length===a2||(0,A.u)($.dr),++a6){j=$.dr[a6]
A.I1(k,j)}B.a.P($.dr)
$.p.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.p.j().setAttribute("data-audio-muffle01",B.b.E(k.gnX(),3))
a2=$.p.j()
a3=k.cy?"true":"false"
a2.setAttribute("data-audio-music-started",a3)
a3=$.p.j()
a2=k.dy
if(a2==null)a2="ir-fallback"
a3.setAttribute("data-audio-room-ir",a2)
a2=$.p.j()
a2.setAttribute("data-audio-context-suspended",""+(A.w(k.a.state)==="suspended"))
a2.setAttribute("data-audio-muted",""+k.k2)
a2.setAttribute("data-audio-master-mix",B.b.E(k.fx,3))
a2.setAttribute("data-audio-voice-mix",B.b.E(k.fy,3))
a3=$.dq
a2.setAttribute("data-audio-captions",""+(a3.e===!0))
a2.setAttribute("data-audio-paused",""+$.fL)}}$.cW.j().ii($.nD(),$.ch,$.eV)
a2=$.ay
if(a2!=null){a3=$.cW.j()
a4=a3.a
b0=new A.C(a4.a,a4.b,a4.c)
a4=a3.b
b1=new A.C(a4.a,a4.b,a4.c)
a4=a3.c
b2=a2.b/a2.c
b3=A.Bd(b0,b1,new A.C(a4.a,a4.b,a4.c))
a3=a3.f
a4=a3.b
a5=a3.c
b4=A.ze(b2,a5,a3.a,a4)
a2.to=A.AK(b2,b0,a5,b1,a4,b4,b3,b4.a9(0,b3))}a2=$.ay
if(a2!=null)a2.j9($.R.j(),$.af)
i=$.wq.j().ey($.W.j().gag().a)
h=B.b.n(1-A.A_($.af),0,1)
a2=$.ay
if(a2!=null)a2.iY($.R.j(),$.af,$.nD(),$.bw.j().gfh(),$.bw.j().gmW(),i,A.Kg($.af),$.bw.j().b)
a2=$.ay
if(a2!=null){a3=A.Jy($.R.j(),$.af,i.r,$.hQ)
a4=t.fu.a(i)
t.A1.a(a3)
a5=A.ax(h)
a2.d0=A.ab(a3,t.qR)
a3=a4.r
b5=A.vg(new A.hC(a4,a3,0.8,a5,1,0,1,1,0))
a2.y2=b5
a2.d_=A.GC(a3,b5.z,$.nD(),a2.ci)}g=A.vg(new A.hC(i,i.r,0.8,0,1,0,1,1,0))
a2=$.Ea()
a3=$.Eb()
f=null
e=g.a
A:{if(B.av===e||B.a8===e||B.W===e){f=g.e
break A}if(B.a9===e||B.w===e){f=0
break A}}f=f
d=a2.jv(!$.fL&&$.bf==null?J.Ek(r,0,0.5):0,f,a3)
f=$.ay
if(f!=null)f.j5(d.a,d.b,d.d,d.e)
f=A.JA($.af)
a2=r
a3=$.ay
a3=a3==null?f6:a3.ci
if(a3==null)a3=B.di
A.Jt(i,a2,a3,f)
if(!$.fL&&$.bf==null){f=r
a2=$.cC().Q?1:20
if(typeof f!=="number")return f.a9()
a2=B.b.n(f*a2,0,0.5)
f=a2}else f=0
c=A.HF(i,f,h)
f=$.ay
if(f!=null)f.ja(c)
if($.CV!==$.cg.j().a){$.CV=$.cg.j().a
$.A1=$.A1+1}f=$.ay
if(f!=null){if($.As())a2=0
else{a2=s
if(typeof a2!=="number")return a2.pm()
a2/=1000}a3=$.A1
a4=A.h(Math.max(0,$.W.j().b))
if(!isFinite(a2)||a2<0)A.f(A.a7(a2,"timeSeconds",f6))
if(a4<0)A.f(A.o("frame clock seeds must be non-negative",f6))
f.dh=a2
f.ew=a3
f.ex=a4}f=$.ay
if(f!=null){a2=$.cg.j()
a3=$.A0
a4=A.A_($.af)
b6=a2.a
b7=a2.gfe()
b8=b7>0?B.b.n(a2.b/b7,0,1):0
a2=b6.a
b9=a2>=3
c0=b6===B.bU
a5=$.bS()
c1=a5.H("post_exposure")
c2=a5.H("post_bloom")
c3=a5.H("post_vignette")
c4=a5.H("post_film_grain")
c5=a5.H("post_dither")
c6=a5.H("post_depth_of_field")
c7=a5.H("post_color_grade")
c8=a5.H("post_affine_warp")
c9=a5.H("post_vertex_snap")
d0=B.b.ao(a5.H("post_quantization_bits"))
d1=a5.H("post_vhs_chroma")
d2=a5.H("post_vhs_noise")
d3=a5.H("shadow_ao_intensity")
d4=b6===B.ab?0.45:c1
a5=a5.bF("shadow_ssdo_enable")?d3:0
d5=f.xr
d5=B.b.n(d5,0,1)
d6=f.cj
d6=B.b.n(d6,0,1)
d7=f.dd
d8=f.de
if(a2>=1)d9=b6===B.aU?b8:1
else d9=0
d9=Math.max(c7,d9)
if(a2>=2)a2=b6===B.bT?b8:1
else a2=0
a2=Math.max(c8,a2)
e0=b9?320:0
e0=Math.max(c9,e0)
e1=b9?5:d0
e2=c0?1:0
e2=Math.max(d1,e2)
e3=c0?b8:0
e4=c0?b8:0
e4=Math.max(d2,e4)
e5=c0?b8:0
e6=c0?b8:0
f.x2=new A.lC(d4,c2,a5,c6,c3,c4,d5,d6,d7,d8,a4,c5,d9,a2,e0,e1,e2,e3,e4,e5,e6,c0?b8:0,a3)
f.y1=B.b.n(a4,0,1)
f.lo()}$.fI.j().c2(A.Bu($.W.j().giu()))
b=$.ay
if(b!=null){f=$.p.j()
a2=b
e7=a2.df
a3=e7==null
a4=a3?f6:e7.b
if(a4==null)a4=0
a5=a3?f6:e7.c
if(a5==null)a5=0
d4=a3?f6:e7.e
if(d4==null)d4=0
d5=a2.dg
d6=a2.gi2()?"ok":f7
d7=t.N
d8=t.K
d6=A.E(["drawCalls",a4,"triangles",a5,"instances",d4,"frameMs",d5,"budget",d6],d7,d8)
a3=a3?f6:e7.r
if(a3==null)a3=0
a4=a2.hY
a4===$&&A.t()
a4=A.E(["gpuBytes",a3,"residentTextures",a4.d.a,"textureVramMb",0],d7,t.S)
a3=a2.d6
a5=a2.d5
d4=a2.d7
d5=a2.d8
d9=a2.d9
e0=a2.da
e1=a2.dc
e2=a2.d4
e3=a2.d3.length
e4=a2.ep
e5=a2.eq
e6=a2.er
e8=a2.bR
e9=a2.giJ()
f0=a2.hP
f0=f0==null?f6:f0.c
if(f0==null)f0=0
a2=a2.x1
f1=a2.k4
f2=f1==null
f3=f2?f6:f1.z
if(f3==null)f3=0
f4=f2?f6:f1.Q
if(f4==null)f4=0
f1=f2?f6:f1.db
if(f1==null)f1=0
f.setAttribute("data-renderer-diagnostic-groups",B.f.a0(A.E(["frame",d6,"resources",a4,"atmosphere",A.E(["rainSubmitted",a3,"rainRequested",a5,"rainBudget",d4,"rainFrustumVisible",d5,"rainFrustumCulled",d9,"rainAverageSpeedMps",e0,"rainCapped",e1,"rainFlowParticles",e2,"rainFlowPaths",e3,"rainFlowCapturedMassKg",e4,"rainFlowDrainedMassKg",e5,"rainFlowOverflowMassKg",e6,"rainFlowWetness",e8,"weatherPhase",e9,"volumetricSources",f0,"volumetricSampleCount",a2.as,"volumetricIntensity",a2.Q,"volumetricDustDensity",a2.x,"volumetricAnisotropy",a2.y,"cloudCoverage",f3,"cloudDensity",f4,"cloudSampleCount",f1,"reflectionIntensity",a2.dy,"reflectionConfidence",a2.fr],d7,d8)],d7,t.X),f6))
a=b.gnv()
if(a!=null){$.p.j().setAttribute("data-renderer-frame-stats",a)
f=$.p.j()
a2=b.gi2()?"ok":f7
f.setAttribute("data-renderer-budget",a2)}$.p.j().setAttribute("data-renderer-rain-particles",""+b.d6)
$.p.j().setAttribute("data-renderer-rain-particles-requested",""+b.d5)
$.p.j().setAttribute("data-renderer-rain-particles-budget",""+b.d7)
$.p.j().setAttribute("data-renderer-rain-particles-capped",""+b.dc)
$.p.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+b.d8)
$.p.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+b.d9)
$.p.j().setAttribute("data-renderer-rain-flow-particles",""+b.d4)
$.p.j().setAttribute("data-renderer-rain-flow-paths",""+b.d3.length)
$.p.j().setAttribute("data-renderer-rain-flow-captured-mass-kg",B.b.E(b.ep,8))
$.p.j().setAttribute("data-renderer-rain-flow-drained-mass-kg",B.b.E(b.eq,8))
$.p.j().setAttribute("data-renderer-rain-flow-overflow-mass-kg",B.b.E(b.er,8))
$.p.j().setAttribute("data-renderer-weather-rain-flow-wetness",B.b.E(b.bR,4))
$.p.j().setAttribute("data-renderer-rain-particles-average-speed-mps",B.b.E(b.da,4))
$.p.j().setAttribute("data-renderer-volumetric-sample-count",""+b.x1.as)
$.p.j().setAttribute("data-renderer-volumetric-intensity",B.b.E(b.x1.Q,4))
$.p.j().setAttribute("data-renderer-volumetric-dust-density",B.b.E(b.x1.x,4))
$.p.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.E(b.x1.y,4))
f=$.p.j()
a2=$.bS()
f.setAttribute("data-renderer-debug-attachments","unavailable")
$.p.j().setAttribute("data-renderer-debug-attachments-reason",a2.r)
$.p.j().setAttribute("data-renderer-weather-phase",b.giJ())
f=$.p.j()
a2=b.y2
a2=a2==null?f6:a2.c
f.setAttribute("data-renderer-weather-wind-mps",B.b.E(a2==null?0:a2,3))
f=$.p.j()
a2=b.y2
a2=a2==null?f6:a2.r
f.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.E(a2==null?0:a2,8))
f=$.p.j()
a2=b.y2
a2=a2==null?f6:a2.w
f.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.E(a2==null?0:a2,6))
f=$.p.j()
a2=b.d_
a2=a2==null?f6:a2.c
f.setAttribute("data-renderer-weather-warm-clearance-m",B.b.E(a2==null?0:a2,4))
$.p.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.E(b.gdE(),3))
$.p.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.E(b.giI(),4))
$.p.j().setAttribute("data-renderer-weather-impact-count",""+b.eo)
$.p.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.E(b.d1,8))
$.p.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.E(b.d2,8))
$.p.j().setAttribute("data-renderer-weather-obstacle-count",""+b.d0.length)}A.eU("running")
A.IS()
f=$.am.j()
f.as=f.Q=0
a2=f.c
a2.a8(0,"WheelUp")
a2.a8(0,"WheelDown")
f.d.P(0)
f.f.P(0)
A.h(A.a(v.G.window).requestAnimationFrame(A.Z(A.DB())))}catch(f5){a0=A.ah(f5)
a1=A.cZ(f5)
A.xE(a0,a1)}},
I1(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.is("confirm")
$.be.j().aL("interface confirmation")
break
case"ambient-winnow":a.dt("winnow",0.28)
$.be.j().aL("wind moving through the house")
break
case"ambient-gate":a.dt("gate",0.22)
$.be.j().aL("distant gate")
break
case"collapse":a.is("collapse")
$.be.j().aL("front door shudders and collapses")
break
case"clock:tick":A.nr(a,p,"tick")
break
case"clock:chime":A.nr(a,p,"chime")
break
case"clock:cuckoo":A.nr(a,p,"cuckoo")
break
case"clock:bell":A.nr(a,p,"bell")
break
default:if(B.c.V(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.nr(a,q,s[2])}}}},
nr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.CQ,g=$.hQ
if(h==null||g==null)return
s=h.nj(b)
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
break A}if(q!=null)$.be.j().aL(q)
q=$.R.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.f(A.i("sound room missing: "+o))
m=n.d.a4(0,s.d.a9(0,p))
l=$.nj
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.i("sound emitter "+s.a+" has no cue for "+c))
a.ou(q,m,s.e,o)
return}q=$.CC
$.CC=q+1
o=A.Eu(B.eB,r,r+":"+q,m,A.HH(b,c),q,o)
q=$.af
q=A.Eq($.nD(),q)
t.gG.a(B.bD)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.i("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.i("audio listener room missing: "+q))
j=l.iF(p,q,B.bD)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.i("audio cue family missing: "+q))
k=J.aQ(i)
k=k.h(i,B.d.O(A.Je(q,o.f),k.gu(i)))
o=o.e
A.ab(j.a,t.N)
a.it(k,new A.j(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
HH(a,b){var s,r,q,p=$.W.j().b
for(s=new A.dx(a+":"+b),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Dx(p,q==null?r.a(q):q)}return p},
Jp(a){var s=$.zM
if(s==null)return
s.textContent=""+B.b.ao(a>0?1/a:0)+" fps"},
Jm(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.Dc||$.bf!=null){$.ka().a=new A.j(0,0,0)
return}$.am.j().dM(b4)
s=$.am.j()
r=s.cM("moveLeft")?-1:0
if(s.cM("moveRight"))++r
q=s.cM("moveForward")?1:0
if(s.cM("moveBack"))--q
s=s.ay?s.w:new A.j(0,0,0)
p=new A.j(r,0,q).a4(0,s)
o=p.gu(0)>1?p.ga7():p
n=$.am.j().Q
m=$.am.j().as
s=$.fP()
l=s.d?-1:1
k=s.e?-1:1
j=$.ch
i=$.am.j()
i=i.ay?i.x:0
h=$.fP()
g=h.d?-1:1
$.ch=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
g=$.eV
h=$.am.j()
l=h.ay?h.y:0
j=$.fP()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b4)
$.eV=i
$.eV=B.b.n(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.j(i*Math.cos($.ch)+j*Math.sin($.ch),0,-i*Math.sin($.ch)+j*Math.cos($.ch)).ga7().a9(0,2)
j=$.ka()
if(!isFinite(b4)||b4<0)A.f(A.a7(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a7(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.a4(0,f.ac(0,l).a9(0,1-s))
j.a=s
d=$.eP.j().nZ($.R.j(),$.af,$.e8(),s.a9(0,b4))
$.xL=d.a
if($.cg.j().a!==B.bV&&$.cg.j().a!==B.ab)$.af=d.b
c=B.b.n(j.a.gu(0)/2,0,1)
s=$.E8()
$.A5=s.jn($.A5,$.e8().b,b4)
b=s.lU(b4,c)
s=$.e8()
l=$.A5
$.cW.j().ii(new A.j(s.a+b.a,l+b.b,s.c+b.c),$.ch,$.eV)
s=$.W.j().z
l=$.wt
l=l==null?b2:l.ghN()
a=A.FJ(l==null?B.kH:l,s)
s=$.cW.j()
l=$.R.j()
a0=A.Kf(a,s,$.af,l,$.hQ)
l=$.p.j()
s=a0.a
l.setAttribute("data-house-focus-kind",s.b)
k=a0.b
j=k==null?"":k
l.setAttribute("data-house-focus-id",j)
j=a0.c
i=j==null
h=i?"":j
l.setAttribute("data-house-focus-prompt",h)
k=k==="living-sofa"&&$.af===$.R.j().r?"available":"not-focused"
l.setAttribute("data-house-rest-target",k)
$.Cq.j().jc(j)
a1=A.G(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){l=!i?"crosshair-active":"crosshair-dot"
a1.className=l}a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.Ak($.cW.j(),$.R.j(),$.af)
break
case 1:a3=A.DH($.cW.j(),$.R.j(),$.af)
break
case 2:a4=A.DI($.cW.j(),$.R.j(),$.af)
break
case 3:l=$.cW.j()
k=$.R.j()
j=$.hQ
a5=A.DG(l,$.af,k,j)
break
case 4:case 5:break}$.Cp.j().p8($.fQ().f1($.W.j().gag().a,"status"),$.af==="living-room")
l=$.am.j()
k=l.CW
if(k.bp(b3,l.d)||k.bp(b3,l.f)){l=$.W.j().gag()
k=a3==null
j=k?b2:a3.a
i=B.a.a2($.aP.j().hy(21),$.aP.j().gnN())
if(l.a===21&&j==="front-door"&&i){s=$.cg.j()
$.R.j()
s.jt(B.fk,A.ab(s.c,t.N))
B.a.k($.dr,"collapse")
A.fM("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.be.j().aL("mantle flame extinguished")}else if($.W.j().jq(1,1)){a2.d=!0
s=$.hN.j()
s.a=a2
s.b=2
$.be.j().aL("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.be.j()
s.aL(a3.ax?"door opens":"door closes")
s=$.ay
if(s!=null)s.dw($.R.j(),a3.b)
s=$.ay
if(s!=null)s.eK($.R.j(),a3.a)
s=$.bm
if(s!=null)s.bK()}else if(a4!=null)if(a4.w){s=$.W.j()
if(s.f.dL(1)){a4.w=!1
$.be.j().aL("shutter closes")}}else{a4.w=!0
$.be.j().aL("shutter opens")}else if(s===B.cL){a6=a.f0()
s=A.B(a6)
l=t.E4
a7=A.bK(new A.I(a6,s.i("l(1)").a(new A.xS(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bK(a6,l)
if(a7!=null)$.be.j().c0("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.R.j().x){$.be.j().aL("the living-room sofa is ready for rest")
A.hW($.fJ.j())
return}s=$.z0()
if(!a5.x)A.f(A.i("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.l(0,a8,(l==null?0:l)+1)
l=$.p.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aW(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.IO(a9)
s=$.be.j()
s.c0("noticed",b0==null?"you inspect "+a9:b0)}}s=$.hN.j()
if(s.a!=null&&s.b>0){b1=$.hN.j().a
if(b1!=null&&A.Ak($.cW.j(),$.R.j(),$.af)!==b1){s=$.hN.j()
s.a=null
s.b=0}}A.IZ(b4,a0)},
IZ(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.eT
if(c2==null)return
s=A.a($.Cr.j().getBoundingClientRect())
r=A.a1(s.width)
q=A.a1(s.height)
if(r<=0||q<=0)return
p=$.cB()
p.p7(c3)
o=$.E5()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.iN(n,m,$.aC.j().y)
o=$.bS()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.R.j()
j=$.af
h=k.e.h(0,j)
g=$.wq.j().ey($.W.j().gag().a)
j=$.ay
f=j==null?null:j.gdE()
e=f!=null&&isFinite(f)?f:g.r
k=!$.aC.j().y&&$.bf==null
j=p.a
i=p.b
d=p.c
c=p.e
b=p.f
a=p.r
p=p.w
a0=$.W.j().gag()
a1=$.bw.j().b
a2=$.cC()
a3=a2.y===B.cQ
a4=h==null?null:h.a
if(a4==null)a4=$.af
a2=a2.z?$.fQ().f1($.W.j().gag().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.P(a6)
a7=A.a1(A.a(v.G.window).devicePixelRatio)
a8=B.b.aC(r*a7)
a9=B.b.aC(q*a7)
b0=a5.a
if(A.h(b0.width)!==a8||A.h(b0.height)!==a9){b0.width=a8
b0.height=a9}b0=a5.b
b0===$&&A.t()
b0.save()
b0.scale(a7,a7)
b0.clearRect(0,0,r,q)
if(k){b0.save()
b0.translate(r*0.5,q*0.5)
k=t.H
if(m){m=Math.sin(a5.c*8)
b1=a5.c
b2=22*(1+m*0.08)
b0.strokeStyle="rgba(0, 0, 0, 0.85)"
b0.lineWidth=3.5
b0.save()
b1=b1*1.5+0.7853981633974483
b0.rotate(b1)
m=-b2*0.5
b0.strokeRect(m,m,b2,b2)
b0.restore()
b0.strokeStyle="#c49a45"
b0.lineWidth=2
b0.save()
b0.rotate(b1)
b0.strokeRect(m,m,b2,b2)
b0.restore()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.aU(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}else{b0.fillStyle="rgba(0, 0, 0, 0.85)"
b0.beginPath()
A.aU(b0,"arc",[1,1,3,0,6.283185307179586],k)
b0.fill()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.aU(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}b0.restore()
a5.nc(n,q,r)}a5.nb(q,r,new A.rA(j,i,d,c,b,a,p))
b3=r-80-24
a5.aU("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.n(B.b.aV(a1*60),0,1439)
b5=B.d.af(b4,60)
b6=B.d.O(b4,60)
b7=a3?B.d.O(b5+11,12)+1:b5
if(a3)b8=b5<12?" AM":" PM"
else b8=""
b0.fillText("DAY "+a0.a+"  \u2022  "+B.c.bD(B.d.t(b7),2,"0")+":"+B.c.bD(B.d.t(b6),2,"0")+b8,b3,42)
b0.restore()
a5.aU("#c49a45",1.8,6,c1,34,0.08,170,109,37)
b0.save()
b0.fillStyle="#c49a45"
b0.font='bold 13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.by(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aU("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.by(a2,b9-28),c0,68)
b0.restore()}a5.nf(q,r,e)
a5.na(l,q,r)
a5.nd(q,r,o)
b0.restore();++c2.b
p=$.p.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ab(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.E(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
IO(a){var s,r,q,p,o=$.W.j().z.b,n=A.v(o).i("N<1,2>"),m=A.K(new A.N(o,n),n.i("r.E"))
B.a.Y(m,new A.xw())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fQ().at
n===$&&A.t()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Js(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cC().Q)return
if($.aC.j().y||$.bf!=null||$.aP.j().r!=null)return
s=$.W.j().gag()
for(r=$.aP.j().hy(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aP.b
if(m===$.aP)A.f(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aP.b
if(r===$.aP)A.f(A.a9(""))
l=r.cc(n)
if(!(l instanceof A.mf))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.B3(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.ka().a=new A.j(0,0,0)
r=$.aC.b
if(r===$.aC)A.f(A.a9(""))
q=n.a
r.f9(q,k)
$.cB().bG(!0,B.bn,q,k)
A.zX()
A.Di(n)
return}},
Jo(){var s,r,q,p,o,n,m=$.wt
if(m==null)return
s=$.W.j().gag()
for(r=m.cb(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
n=$.W.b
if(n===$.W)A.f(A.a9(""))
if(!n.lX(o))continue
n=$.p.b
if(n===$.p)A.f(A.a9(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
J_(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbq()
if(p||o==null)return
p=$.aC.j()
s=q.a
r=s.a
p.f9(r,o)
$.cB().bG(!0,B.bn,r,o)
A.zX()
A.Di(s)
if(q.d!==B.ai)A.zY()
A.fM("restored visitor")},
Di(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.W.j().nw("stranger-17-eileen-case")
r=$.fQ().x
r===$&&A.t()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.bK(r,t.N)
if(s==null||p==null)return
$.be.j().c0("inside the case",p+" \u201c"+s.d+"\u201d")},
Jn(){var s,r,q,p,o,n
if(!$.cC().Q)return
s=$.W.j().gag()
r=$.nf.j().ng(s.a,s.b)
if(r.length===0)return
q=B.a.ga1(r)
$.nf.j().b.k(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.be.j().c0(o,q.e)
n=A.JB(p)
if(n!=null)B.a.k($.dr,"ambient-"+n)},
Jr(){var s,r,q,p,o=$.W.j().gag()
if(o.b<20)return
s=o.a
if(!$.xQ.k(0,s))return
r=$.fQ().f
r===$&&A.t()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.Kc(r,$.W.j().b,s)
if(p!=null)$.be.j().c0("noticed",p)},
D7(a){var s,r,q,p,o
if($.zK!=null)return
s=$.W.j().gag()
r=$.W.j().r.c
q=$.W.j().e.b
p=A.v(q).i("ao<2>")
o=A.F1(new A.ph(s.a,1-r,new A.I(new A.ao(q,p),p.i("l(r.E)").a(new A.xG()),p.i("I<r.E>")).gu(0),$.W.j().r.d,a))
if(o==null)return
A.D3(o)
A.k5("ending recorded")},
D3(a){var s,r,q,p
$.zK=a
$.Dc=!0
s=$.p.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.Bh($.W.j().z,r).length)
$.ka().a=new A.j(0,0,0)
A.hW($.jR.j())
s=$.fQ().w
s===$&&A.t()
p=s.h(0,q)
s=t.j.b(p)?A.aG(p,!0,t.N):B.n
s=A.K(s,t.N)
B.a.L(s,A.Bh($.W.j().z,r))
$.jR.j().jf(a,s)},
HQ(a){var s,r,q,p
A:{if("open"===a){s=B.aM
break A}if("chain"===a){s=B.cD
break A}if("through-door"===a){s=B.cE
break A}if("letterbox"===a){s=B.cF
break A}s=B.an
break A}r=$.aP.j().mh(s)
if(s===B.aM){q=$.R.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.ay
if(p!=null)p.dw($.R.j(),q.b)
p=$.ay
if(p!=null)p.eK($.R.j(),q.a)
p=$.bm
if(p!=null)p.bK()}}if(!(r instanceof A.md)||s===B.an){A.x_()
return}if(r.a.gbq()==null){A.zI()
A.x_()
return}A.zY()},
HX(){var s=$.aP.j().lV()
if(!(s instanceof A.jc)||s.b){A.zI()
A.x_()
return}if(s.a.gbq()==null){A.zI()
A.x_()
return}A.zY()},
zY(){var s,r,q,p,o,n,m,l,k,j=$.aP.j().r,i=j==null,h=i?null:j.gbq()
if(i||h==null)return
s=$.aP.j().gcg()
if(s==null){$.aC.j().je(h)
$.cB().bG(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.aC.j().fa(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aC.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a5(k.a,k.b))}m.jg(l,r)
o=$.cB()
m=j.a.a
o.bG(!0,i?q:B.n,m,h)
if(!i){i=A.B(p)
k=A.bK(new A.I(p,i.i("l(1)").a(new A.xB(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.aC.j()
q=k.c
i.fb(h,q)
o.bG(!0,B.n,m,h+"\n\n"+q)}}}A.Dh()
A.zX()},
zX(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbq(),n=$.bm
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bD(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.zS===s)return
$.zS=s
r=n.dt(s,1)
p=$.dq
if(new A.o_(s,o).oJ(p.e===!0,r).length!==0)$.be.j().aL(o)},
HR(a){var s,r,q,p,o,n=$.aP.j().mi(a)
if(!(n instanceof A.me))return
s=n.c
if(!$.W.j().lY(n.b,s))return
r=s.c
s=$.aC.j()
q=n.a
p=q.gbq()
s.fb(p==null?"":p,r)
o=q.gbq()
if(o==null)o=""
$.cB().bG(!0,B.n,q.a.a,o+"\n\n"+r)
A.Dh()
A.k5("saved after visitor answer")},
x_(){$.aC.j().i9()
$.cB().P(0)
$.zS=null
$.am.j().dB($.p.j())},
Dh(){var s,r,q,p,o=$.aC.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.nh.j().f2(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.a5(p.a,B.a.ga6(p.c).t(0)))}o.jd(n,m)},
HS(a){var s,r,q,p=$.aP.j().mj(a,!0,$.nh.j())
if(p==null)return
s=$.nh.j().mU(p,B.jI)
r=$.aC.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.t()
r.textContent=B.S.bS("",!0,q)
A.k5("saved after visitor citation")},
zI(){var s,r=$.R.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.ay
if(s!=null)s.dw($.R.j(),r.b)
s=$.ay
if(s!=null)s.eK($.R.j(),r.a)
s=$.bm
if(s!=null)s.bK()}},
Jq(){var s,r,q,p,o,n,m,l,k
for(s=$.R.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cg.b
if(k===$.cg)A.f(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Kg(a){var s,r,q,p,o,n,m,l=$.R.j().e.h(0,a)
if(l==null||$.bw.j().gfh()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.A){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.r){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.ap){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.aq){o=$.bw.b
if(o===$.bw)A.f(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
A_(a){var s,r=$.R.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dl
if(q.length===0)return 0.12
s=A.B(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.xD()),s.i("I<1>")).gu(0)/q.length,0.12,1)},
JA(a){var s,r=$.R.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dl
if(q.length===0)return 0
s=A.B(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.xX()),s.i("I<1>")).gu(0)/q.length,0,1)},
Jt(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.w&&a1.b)a0=B.av
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.vg(new A.hC(a1,s,B.b.n(q,0.35,0.98),B.b.n(p,0,1),2.5,0,18e3,1,0))
n=$.Aw()
m=n.z
l=B.a.b6(a3,0,new A.xR(),t.i)
k=$.Ef()
q=B.b.n(q,0.35,0.98)
j=a0===B.w?0:r
n=n.y
i=B.b.n(l/900,0,1)
h=B.b.n(o.w/1000,0,1)
g=B.b.n(a2,0,0.5)
f=$.Dl
$.Dl=f+1
e=k.ct(new A.vb(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.W.j().b))
d=$.bm
s=d==null
if(!s){r=A.c([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jA([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.m0(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.ov(a.b,a.c,a.d,a.e,a.f)}s=$.p.j()
s.setAttribute("data-audio-weather-transmission",B.b.E(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.E(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.E(a4,3))},
HM(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.fH),f=A.c([],t.vN)
for(s=[-0.42,16.17],r=0,q=0;q<2;++q){p=s[q]
for(o=[0,15.75],n=p<0,m=0;m<2;++m){l=o[m]
k=""+r
j="roof-drain-"+k
i=new A.j(l,12.044999999999998,p)
B.a.k(g,new A.iS(j,i,new A.j(l,0.12,p),0.08))
h=n?0.42:-0.42
B.a.k(f,new A.iT("roof-catchment-"+k,new A.j(7.875,16.32,p+h),i,62.015625,0.96,0.16,j));++r}}return A.FY(g,f)},
HF(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.ay
if(a0!=null){s=$.R.j()
r=$.af
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.vg(new A.hC(a1,q,B.b.n(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.nv.bV($.af,A.Kv())
n=isFinite(a0.gdE())?a0.gdE():q
m=B.b.n(a0.giI(),0,1)
l=B.b.n((n-q)*8,0,400)
s=B.b.n(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.o("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.a9&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
g=Math.min(Math.max(0,0.5-j),h)
r=o.a=j+Math.max(0,g)
k=Math.max(0,l)
f=n>0.5
e=f?Math.min(r,k*a2/4008e4):0
o.a=r-e
o.b=i+e
d=f?B.b.n((n-0.5)*(1-s)*2e-8,0,0.000002):0
s=o.b
c=Math.min(s,d*a2)
o.b=s-c
s=f?B.b.n((n-0.5)/12,0,1):0
b=Math.max(m*0.8,Math.max(s,B.b.n(l/250,0,1)))
s=Math.exp(-a2/900)
r=o.c
s=r+(b-r)*(1-s)
o.c=s
a=Math.max(0,h-g)
o.hq()
r=o.a
return new A.vj(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
Jy(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.dj
s=a3.aH(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=p+s.a
m=q+s.c
l=o+s.b
k=A.c([new A.eG("floor:"+r,new A.j(p,o,q),new A.j(n,o+0.05,m),a5,0.12),new A.eG("roof-interior:"+r,new A.j(p,l-0.06,q),new A.j(n,l+0.03,m),a5,0.05)],t.uI)
if(a6==null)return k
for(r=a6.ir(r),n=J.O(r.a),r=new A.U(n,r.b,r.$ti.i("U<1>")),m=a6.c;r.m();){l=n.gp()
j=l.c
i=!0
if(!(l.d==="renderer-reference"&&!l.ay.r)){h=l.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.q(j.toLowerCase(),"stair")}if(i)continue
g=a6.bL(j)
j=l.f.a
f=l.iB(g,m)
e=l.eR(g,m)
i=e.a
h=e.b
d=p+j.a*m
c=o+(j.b*m+(i+h)*0.5)
j=q+j.c*m
b=f.a
i=Math.max(0.005,(h-i)*0.5)
h=f.c
a=l.Q>0?l.as:a5
a0=l.a
l=l.ay.f
if(!(l>0))l=g.b==="textile"?0.08:0.28
if(isFinite(d)&&isFinite(c)&&isFinite(j))a1=!(isFinite(b)&&isFinite(i)&&isFinite(h))||b<0||i<0||h<0
else a1=!0
if(a1)A.f(A.o("collision box centre/extents must be finite",null))
l=new A.eG("inventory:"+a0,new A.j(d-b,c-i,j-h),new A.j(d+b,c+i,j+h),a,l)
l.A()
B.a.k(k,l)}return A.ab(k,t.qR)},
hG:function hG(a,b){this.a=a
this.b=b},
mS:function mS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.cy=null
_.db=n
_.dx=o
_.dy=p
_.fr=q
_.fx=r
_.fy=$
_.go=0
_.id=s
_.k1=a0
_.k2=a1
_.k3=a2
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.p3=a7
_.p4=a8
_.RG=_.R8=null
_.rx=a9
_.to=_.ry=null
_.x1=b0
_.x2=b1
_.xr=0
_.y1=1
_.d_=_.y2=null
_.ci=b2
_.d0=b3
_.d2=_.d1=_.eo=0
_.d3=b4
_.bR=_.er=_.eq=_.ep=_.d4=0
_.hP=null
_.hQ=2.25
_.da=_.d9=_.d8=_.d7=_.d6=_.d5=0
_.dc=!1
_.hU=_.hT=_.hS=_.hR=_.eu=_.es=null
_.hV=7
_.de=_.dd=_.cj=_.hW=_.ev=0
_.df=null
_.hX=_.np=_.ex=_.ew=_.dh=_.dg=0
_.aI=!1
_.di=null
_.cl=_.ck=0
_.cn=_.cm=null
_.hY=_.nq=$
_.dj=null
_.hZ=0},
w3:function w3(a){this.a=a},
w6:function w6(a,b,c){this.a=a
this.b=b
this.c=c},
w7:function w7(a){this.a=a},
vX:function vX(){},
w4:function w4(){},
w5:function w5(){},
wa:function wa(a){this.a=a},
wb:function wb(a){this.a=a},
w8:function w8(a,b,c){this.a=a
this.b=b
this.c=c},
w1:function w1(a,b,c){this.a=a
this.b=b
this.c=c},
w9:function w9(){},
w2:function w2(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(){},
vZ:function vZ(){},
w_:function w_(){},
w0:function w0(){},
vV:function vV(){},
vW:function vW(){},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vU:function vU(){},
mR:function mR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jv:function jv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vv:function vv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wI:function wI(){},
wJ:function wJ(){},
wK:function wK(){},
wQ:function wQ(){},
wR:function wR(){},
wS:function wS(){},
wT:function wT(){},
wU:function wU(){},
wV:function wV(a){this.a=a},
wW:function wW(a){this.a=a},
wX:function wX(a){this.a=a},
wL:function wL(a){this.a=a},
wM:function wM(){},
wN:function wN(){},
wO:function wO(){},
wP:function wP(){},
wE:function wE(){},
wF:function wF(a){this.a=a},
wG:function wG(){},
wH:function wH(){},
wA:function wA(){},
wB:function wB(){},
wC:function wC(){},
wD:function wD(){},
xr:function xr(a,b){this.a=a
this.b=b},
xp:function xp(a){this.a=a},
xq:function xq(a){this.a=a},
yg:function yg(a,b){this.a=a
this.b=b},
yh:function yh(){},
yi:function yi(){},
yt:function yt(){},
yD:function yD(){},
yE:function yE(){},
yF:function yF(){},
yG:function yG(){},
yH:function yH(){},
yI:function yI(){},
yJ:function yJ(){},
yj:function yj(){},
yk:function yk(){},
yl:function yl(){},
ym:function ym(){},
yn:function yn(){},
yo:function yo(){},
yp:function yp(){},
yq:function yq(){},
yr:function yr(){},
ys:function ys(){},
yu:function yu(){},
yv:function yv(){},
yw:function yw(){},
yx:function yx(){},
yy:function yy(){},
yz:function yz(){},
yA:function yA(){},
yB:function yB(){},
yC:function yC(){},
xs:function xs(){},
xt:function xt(){},
xz:function xz(a){this.a=a},
xK:function xK(a){this.a=a},
xS:function xS(a){this.a=a},
xw:function xw(){},
xG:function xG(){},
xB:function xB(a){this.a=a},
xD:function xD(){},
xX:function xX(){},
xR:function xR(){},
DK(a){return v.mangledGlobalNames[a]},
B3(a,b,c,d,e,f){var s=a[b]()
return s},
qE(a,b,c){var s=null
return c.a(A.B3(a,b,s,s,s,s))},
Bg(a,b){var s,r,q,p=A.K(B.cy.bz(B.f.a0(a.iD(!1),null)),t.S),o=A.v(b).i("ae<1>"),n=A.K(new A.ae(b,o),o.i("r.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.u)(n),++s){r=n[s]
B.a.L(p,B.cy.bz(r))
B.a.k(p,0)
q=b.h(0,r)
q.toString
B.a.L(p,q)}return A.Ge(p)},
JT(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.Ei(B.t.ged(p),p.byteOffset,p.byteLength)
n=t.S
m=A.n(n,t.L)
l=t.t
k=A.c([],l)
j=A.c([],t.n)
i=p.length
h=B.d.ba(i,r)
g=A.d9(h,0,!1,n)
for(n=o.length,f=0;f<h;++f){e=f*r
d=f*q
c=A.Jv(o,d,q)
b=m.h(0,c)
if(b==null){b=A.c([],l)
m.l(0,c,b)}a0=b.length
a1=k.length
a2=0
for(;;){if(!(a2<a0)){a=-1
break}a3=b[a2]
a4=a3*q
a6=0
for(;;){if(!(a6<q)){a5=!0
break}a7=d+a6
if(!(a7<n))return A.d(o,a7)
a7=o[a7]
a8=a4+a6
if(!(a8>=0&&a8<a1))return A.d(k,a8)
if(a7!==k[a8]){a5=!1
break}++a6}if(a5){a=a3
break}++a2}if(a>=0)B.a.l(g,f,a)
else{a9=B.d.ba(j.length,r)
B.a.k(b,a9)
B.a.l(g,f,a9)
B.a.L(k,new Uint8Array(o.subarray(d,A.zH(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.d(p,a0)
B.a.k(j,p[a0])}}}b1=B.d.ba(j.length,r)>65536?new Uint32Array(A.S(g)):new Uint16Array(A.S(g))
return new A.bW(s,new Float32Array(A.S(j)),b1,b2.d)},
Jv(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.d(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
Gf(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.n(a*57.29577951308232,90,105)-90)/15*62},
yP(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.a7(b.gnG(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gG().c.ae()
o=q*16
n=o+16
B.t.dJ(s,o,n,p.a)
if(l)B.t.dJ(r,o,n,p.eE().a)}m=a.a
A.m(m,"uInstanceModels",new A.q(B.eh,s))
if(l)A.m(m,"uInstanceNormalMatrices",new A.q(B.eh,r))
A.m(m,"uUseInstances",B.c5)},
EP(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
EO(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Dx(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
JB(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cl(a,b,c){var s=B.b.n(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bl(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
JS(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.b(B.ih)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.kM[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.n(s,r))
else if(k.b(m))p.l(0,n,A.aZ(m,s,r))
else throw A.b(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
Kc(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbj(a)
s=new A.eL()
s.c3((b^274953^c)>>>0)
r=s.aY(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.z7.prototype={}
J.l8.prototype={
aa(a,b){return a===b},
gU(a){return A.iQ(a)},
t(a){return"Instance of '"+A.lG(a)+"'"},
gad(a){return A.ds(A.zP(this))}}
J.lb.prototype={
t(a){return String(a)},
gU(a){return a?519018:218159},
gad(a){return A.ds(t.y)},
$ian:1,
$il:1}
J.iv.prototype={
aa(a,b){return null==b},
t(a){return"null"},
gU(a){return 0},
$ian:1,
$iaz:1}
J.ix.prototype={$iaj:1}
J.ev.prototype={
gU(a){return 0},
gad(a){return B.or},
t(a){return String(a)}}
J.lz.prototype={}
J.eA.prototype={}
J.dJ.prototype={
t(a){var s=a[$.DO()]
if(s==null)s=a[$.yY()]
if(s==null)return this.jz(a)
return"JavaScript function for "+J.c3(s)},
$if6:1}
J.hd.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.he.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.x.prototype={
cY(a,b){return new A.b9(a,A.B(a).i("@<1>").S(b).i("b9<1,2>"))},
k(a,b){A.B(a).c.a(b)
a.$flags&1&&A.aV(a,29)
a.push(b)},
oE(a,b){var s
a.$flags&1&&A.aV(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.Br(b,null))
return a.splice(b,1)[0]},
a8(a,b){var s
a.$flags&1&&A.aV(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.B(a).i("r<1>").a(b)
a.$flags&1&&A.aV(a,"addAll",2)
if(Array.isArray(b)){this.jW(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gp())},
jW(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aD(a))
for(r=0;r<s;++r)a.push(b[r])},
P(a){a.$flags&1&&A.aV(a,"clear","clear")
a.length=0},
bs(a,b,c){var s=A.B(a)
return new A.H(a,s.S(c).i("1(2)").a(b),s.i("@<1>").S(c).i("H<1,2>"))},
W(a,b){var s,r=A.d9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.y(a[s]))
return r.join(b)},
b6(a,b,c,d){var s,r,q
d.a(b)
A.B(a).S(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.aD(a))}return r},
b5(a,b,c){var s,r,q,p=A.B(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.aD(a))}if(c!=null)return c.$0()
throw A.b(A.cL())},
an(a,b){return this.b5(a,b,null)},
ab(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aD(a,b,c){var s=a.length
if(b>s)throw A.b(A.b2(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.b2(c,b,s,"end",null))
if(b===c)return A.c([],A.B(a))
return A.c(a.slice(b,c),A.B(a))},
ga1(a){if(a.length>0)return a[0]
throw A.b(A.cL())},
ga6(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cL())},
gbj(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cL())
throw A.b(A.B0())},
M(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.aD(a))}return!1},
a2(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.aD(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.B(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.aV(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ip()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.iT()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.i0(b,2))
if(p>0)this.lm(a,p)},
X(a){return this.Y(a,null)},
lm(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dK(a,b){var s,r,q,p
a.$flags&2&&A.aV(a,"shuffle")
s=a.length
while(s>1){r=b.aY(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bC(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.aa(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gR(a){return a.length===0},
ga5(a){return a.length!==0},
t(a){return A.z5(a,"[","]")},
gv(a){return new J.eZ(a,a.length,A.B(a).i("eZ<1>"))},
gU(a){return A.iQ(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aV(a,"set length","change the length of")
if(b<0)throw A.b(A.b2(b,0,null,"newLength",null))
if(b>a.length)A.B(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.y5(a,b))
return a[b]},
l(a,b,c){A.B(a).c.a(c)
a.$flags&2&&A.aV(a)
if(!(b>=0&&b<a.length))throw A.b(A.y5(a,b))
a[b]=c},
eY(a,b){return new A.dY(a,b.i("dY<0>"))},
eA(a,b){var s
A.B(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gad(a){return A.ds(A.B(a))},
$iV:1,
$ir:1,
$iJ:1}
J.la.prototype={
p6(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qF.prototype={}
J.eZ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iai:1}
J.fa.prototype={
I(a,b){var s
A.a1(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcp(b)
if(this.gcp(a)===s)return 0
if(this.gcp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcp(a){return a===0?1/a<0:a<0},
aC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bu(""+a+".toInt()"))},
hD(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bu(""+a+".ceil()"))},
aV(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bu(""+a+".floor()"))},
ao(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bu(""+a+".round()"))},
n(a,b,c){if(this.I(b,c)>0)throw A.b(A.xZ(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
E(a,b){var s
if(b>20)throw A.b(A.b2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcp(a))return"-"+s
return s},
eU(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.b2(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.f(A.bu("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a9("0",o)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
O(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ba(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hh(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.hh(a,b)},
hh(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bu("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
e9(a,b){var s
if(a>0)s=this.hg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lx(a,b){if(0>b)throw A.b(A.xZ(b))
return this.hg(a,b)},
hg(a,b){return b>31?0:a>>>b},
jh(a,b){if(b<0)throw A.b(A.xZ(b))
return this.ly(a,b)},
ly(a,b){if(b>31)return 0
return a>>>b},
gad(a){return A.ds(t.J)},
$ibp:1,
$iz:1,
$iby:1}
J.iu.prototype={
gad(a){return A.ds(t.S)},
$ian:1,
$ik:1}
J.lc.prototype={
gad(a){return A.ds(t.i)},
$ian:1}
J.eu.prototype={
hx(a,b){return new A.n3(b,a,0)},
bf(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aQ(a,r-s)},
jr(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.iw){s=b.e
s=!(s==null?b.e=b.kj():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.ks(a,b)}},
bX(a,b,c,d){var s=A.fj(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
ks(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Eh(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gp()
o=p.gff()
n=p.gen()
q=n-o
if(q===0&&r===o)continue
B.a.k(m,this.J(a,r,o))
r=n}if(r<a.length||q>0)B.a.k(m,this.aQ(a,r))
return m},
ar(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.ar(a,b,0)},
J(a,b,c){return a.substring(b,A.fj(b,c,a.length))},
aQ(a,b){return this.J(a,b,null)},
aP(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.Ft(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.Fu(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a9(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.fe)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bD(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a9(c,s)+a},
dk(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bC(a,b){return this.dk(a,b,0)},
q(a,b){return A.Kn(a,b,0)},
I(a,b){var s
A.w(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gU(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gad(a){return A.ds(t.N)},
gu(a){return a.length},
$ian:1,
$ibp:1,
$irE:1,
$ie:1}
A.eI.prototype={
gv(a){return new A.ia(J.O(this.gbb()),A.v(this).i("ia<1,2>"))},
gu(a){return J.cD(this.gbb())},
gR(a){return J.kc(this.gbb())},
ga5(a){return J.Em(this.gbb())},
ab(a,b){return A.v(this).y[1].a(J.nE(this.gbb(),b))},
ga1(a){return A.v(this).y[1].a(J.AB(this.gbb()))},
q(a,b){return J.AA(this.gbb(),b)},
t(a){return J.c3(this.gbb())}}
A.ia.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iai:1}
A.f2.prototype={
gbb(){return this.a}}
A.jk.prototype={$iV:1}
A.ji.prototype={
h(a,b){return this.$ti.y[1].a(J.b0(this.a,b))},
l(a,b,c){var s=this.$ti
J.b7(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.En(this.a,b)},
k(a,b){var s=this.$ti
J.e9(this.a,s.c.a(s.y[1].a(b)))},
$iV:1,
$iJ:1}
A.b9.prototype={
cY(a,b){return new A.b9(this.a,this.$ti.i("@<1>").S(b).i("b9<1,2>"))},
gbb(){return this.a}}
A.hf.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dx.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.tx.prototype={
gF(){return 0}}
A.V.prototype={}
A.a0.prototype={
gv(a){var s=this
return new A.al(s,s.gu(s),A.v(s).i("al<a0.E>"))},
gR(a){return this.gu(this)===0},
ga1(a){if(this.gu(this)===0)throw A.b(A.cL())
return this.ab(0,0)},
q(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.ab(0,s),b))return!0
if(q!==r.gu(r))throw A.b(A.aD(r))}return!1},
a2(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.ab(0,r)))return!1
if(s!==q.gu(q))throw A.b(A.aD(q))}return!0},
M(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.ab(0,r)))return!0
if(s!==q.gu(q))throw A.b(A.aD(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.ab(0,0))
if(o!==p.gu(p))throw A.b(A.aD(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.ab(0,q))
if(o!==p.gu(p))throw A.b(A.aD(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.ab(0,q))
if(o!==p.gu(p))throw A.b(A.aD(p))}return r.charCodeAt(0)==0?r:r}},
nR(a){return this.W(0,"")},
dF(a,b){return this.jy(0,A.v(this).i("l(a0.E)").a(b))},
bs(a,b,c){var s=A.v(this)
return new A.H(this,s.S(c).i("1(a0.E)").a(b),s.i("@<a0.E>").S(c).i("H<1,2>"))},
bY(a,b){var s=A.v(this).i("a0.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bE(a){return this.bY(0,!0)},
b9(a){var s,r=this,q=A.za(A.v(r).i("a0.E"))
for(s=0;s<r.gu(r);++s)q.k(0,r.ab(0,s))
return q}}
A.j7.prototype={
gkx(){var s=J.cD(this.a),r=this.c
if(r==null||r>s)return s
return r},
glz(){var s=J.cD(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cD(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ab(a,b){var s=this,r=s.glz()+b
if(b<0||r>=s.gkx())throw A.b(A.qu(b,s.gu(0),s,"index"))
return J.nE(s.a,r)},
bY(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aQ(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.B2(0,n):J.B1(0,n)}r=A.d9(s,m.ab(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.ab(n,o+q))
if(m.gu(n)<l)throw A.b(A.aD(p))}return r},
bE(a){return this.bY(0,!0)}}
A.al.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aQ(q),o=p.gu(q)
if(r.b!==o)throw A.b(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ab(q,s);++r.c
return!0},
$iai:1}
A.cN.prototype={
gv(a){return new A.iB(J.O(this.a),this.b,A.v(this).i("iB<1,2>"))},
gu(a){return J.cD(this.a)},
gR(a){return J.kc(this.a)},
ga1(a){return this.b.$1(J.AB(this.a))},
ab(a,b){return this.b.$1(J.nE(this.a,b))}}
A.dz.prototype={$iV:1}
A.iB.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.H.prototype={
gu(a){return J.cD(this.a)},
ab(a,b){return this.b.$1(J.nE(this.a,b))}}
A.I.prototype={
gv(a){return new A.U(J.O(this.a),this.b,this.$ti.i("U<1>"))}}
A.U.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iai:1}
A.ik.prototype={
gv(a){return new A.il(J.O(this.a),this.b,B.f6,this.$ti.i("il<1,2>"))}}
A.il.prototype={
gp(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.O(r.$1(s.gp()))
q.c=p}else return!1}q.d=q.c.gp()
return!0},
$iai:1}
A.ii.prototype={
m(){return!1},
gp(){throw A.b(A.cL())},
$iai:1}
A.dY.prototype={
gv(a){return new A.je(J.O(this.a),this.$ti.i("je<1>"))}}
A.je.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iai:1}
A.aE.prototype={
su(a,b){throw A.b(A.bu("Cannot change the length of a fixed-length list"))},
k(a,b){A.cj(a).i("aE.E").a(b)
throw A.b(A.bu("Cannot add to a fixed-length list"))}}
A.eB.prototype={
l(a,b,c){A.v(this).i("eB.E").a(c)
throw A.b(A.bu("Cannot modify an unmodifiable list"))},
su(a,b){throw A.b(A.bu("Cannot change the length of an unmodifiable list"))},
k(a,b){A.v(this).i("eB.E").a(b)
throw A.b(A.bu("Cannot add to an unmodifiable list"))}}
A.hA.prototype={}
A.bM.prototype={
gu(a){return J.cD(this.a)},
ab(a,b){var s=this.a,r=J.aQ(s)
return r.ab(s,r.gu(s)-1-b)}}
A.jP.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.fG.prototype={$r:"+height,width(1,2)",$s:2}
A.jw.prototype={$r:"+influence,light(1,2)",$s:3}
A.jx.prototype={$r:"+influence,source(1,2)",$s:4}
A.aH.prototype={$r:"+(1,2,3)",$s:5}
A.bl.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jy.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jz.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.jA.prototype={
gF(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:10}
A.id.prototype={}
A.h_.prototype={
gR(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
t(a){return A.zc(this)},
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
A.EH()},
gN(){return new A.bI(this.nn(),A.v(this).i("bI<P<1,2>>"))},
nn(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga3(),o=o.gv(o),n=A.v(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bt(a,b,c,d){var s=A.n(c,d)
this.aJ(0,new A.oT(this,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.oT.prototype={
$2(a,b){var s=A.v(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.v(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gfU(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
K(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.K(b))return null
return this.b[this.a[b]]},
aJ(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfU()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga3(){return new A.fC(this.gfU(),this.$ti.i("fC<1>"))},
gak(){return new A.fC(this.b,this.$ti.i("fC<2>"))}}
A.fC.prototype={
gu(a){return this.a.length},
gR(a){return 0===this.a.length},
ga5(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.e_(s,s.length,this.$ti.i("e_<1>"))}}
A.e_.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iai:1}
A.d4.prototype={
bm(){var s=this,r=s.$map
if(r==null){r=new A.fb(s.$ti.i("fb<1,2>"))
A.Dr(s.a,r)
s.$map=r}return r},
K(a){return this.bm().K(a)},
h(a,b){return this.bm().h(0,b)},
aJ(a,b){this.$ti.i("~(1,2)").a(b)
this.bm().aJ(0,b)},
ga3(){var s=this.bm()
return new A.ae(s,A.v(s).i("ae<1>"))},
gak(){var s=this.bm()
return new A.ao(s,A.v(s).i("ao<2>"))},
gu(a){return this.bm().a}}
A.h0.prototype={
k(a,b){A.v(this).c.a(b)
A.EI()}}
A.aX.prototype={
gu(a){return this.b},
gR(a){return this.b===0},
ga5(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.e_(s,s.length,r.$ti.i("e_<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b9(a){return A.fc(this,this.$ti.c)}}
A.ha.prototype={
gu(a){return this.a.length},
gR(a){return this.a.length===0},
ga5(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.e_(s,s.length,this.$ti.i("e_<1>"))},
bm(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fb(o.$ti.i("fb<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
q(a,b){return this.bm().K(b)},
b9(a){return A.fc(this,this.$ti.c)}}
A.t1.prototype={
$0(){return B.b.aV(1000*this.a.now())},
$S:49}
A.j_.prototype={}
A.uJ.prototype={
b7(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.iJ.prototype={
t(a){return"Null check operator used on a null value"}}
A.ld.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.m6.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.rx.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ij.prototype={}
A.jC.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idi:1}
A.en.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.DL(r==null?"unknown":r)+"'"},
gad(a){var s=A.Af(this)
return A.ds(s==null?A.cj(this):s)},
$if6:1,
gpl(){return this},
$C:"$1",
$R:1,
$D:null}
A.ku.prototype={$C:"$0",$R:0}
A.kv.prototype={$C:"$2",$R:2}
A.m3.prototype={}
A.m1.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.DL(s)+"'"}}
A.fU.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fU))return!1
return this.$_target===b.$_target&&this.a===b.a},
gU(a){return(A.nB(this.a)^A.iQ(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lG(this.a)+"'")}}
A.lQ.prototype={
t(a){return"RuntimeError: "+this.a}}
A.cp.prototype={
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.ae(this,A.v(this).i("ae<1>"))},
gak(){return new A.ao(this,A.v(this).i("ao<2>"))},
gN(){return new A.N(this,A.v(this).i("N<1,2>"))},
K(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nH(a)},
nH(a){var s=this.d
if(s==null)return!1
return this.co(this.fR(s,a),a)>=0},
L(a,b){A.v(this).i("Y<1,2>").a(b).aJ(0,new A.qO(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nI(b)},
nI(a){var s,r,q=this.d
if(q==null)return null
s=this.fR(q,a)
r=this.co(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.v(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fl(s==null?q.b=q.e5():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fl(r==null?q.c=q.e5():r,b,c)}else q.nK(b,c)},
nK(a,b){var s,r,q,p,o=this,n=A.v(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.e5()
r=o.dl(a)
q=s[r]
if(q==null)s[r]=[o.e6(a,b)]
else{p=o.co(q,a)
if(p>=0)q[p].b=b
else q.push(o.e6(a,b))}},
bV(a,b){var s,r,q=this,p=A.v(q)
p.c.a(a)
p.i("2()").a(b)
if(q.K(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
a8(a,b){var s=this
if(typeof b=="string")return s.fi(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fi(s.c,b)
else return s.nJ(b)},
nJ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dl(a)
r=n[s]
q=o.co(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fj(p)
if(r.length===0)delete n[s]
return p.b},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dN()}},
aJ(a,b){var s,r,q=this
A.v(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aD(q))
s=s.c}},
fl(a,b,c){var s,r=A.v(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.e6(b,c)
else s.b=c},
fi(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fj(s)
delete a[b]
return s.b},
dN(){this.r=this.r+1&1073741823},
e6(a,b){var s=this,r=A.v(s),q=new A.qY(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dN()
return q},
fj(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dN()},
dl(a){return J.aN(a)&1073741823},
fR(a,b){return a[this.dl(b)]},
co(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
t(a){return A.zc(this)},
e5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iz9:1}
A.qO.prototype={
$2(a,b){var s=this.a,r=A.v(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.v(this.a).i("~(1,2)")}}
A.qY.prototype={}
A.ae.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bV(s,s.r,s.e,this.$ti.i("bV<1>"))},
q(a,b){return this.a.K(b)}}
A.bV.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iai:1}
A.ao.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
gv(a){var s=this.a
return new A.ac(s,s.r,s.e,this.$ti.i("ac<1>"))}}
A.ac.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iai:1}
A.N.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
gv(a){var s=this.a
return new A.cM(s,s.r,s.e,this.$ti.i("cM<1,2>"))}}
A.cM.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iai:1}
A.fb.prototype={
dl(a){return A.JM(a)&1073741823},
co(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.yc.prototype={
$1(a){return this.a(a)},
$S:15}
A.yd.prototype={
$2(a,b){return this.a(a,b)},
$S:88}
A.ye.prototype={
$1(a){return this.a(A.w(a))},
$S:47}
A.bk.prototype={
gad(a){return A.ds(this.fS())},
fS(){return A.JY(this.$r,this.cL())},
t(a){return this.hm(!1)},
hm(a){var s,r,q,p,o,n=this.kB(),m=this.cL(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.Bo(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kB(){var s,r=this.$s
while($.wc.length<=r)B.a.k($.wc,null)
s=$.wc[r]
if(s==null){s=this.ki()
B.a.l($.wc,r,s)}return s},
ki(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.qD(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ab(j,k)}}
A.e0.prototype={
cL(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.e0&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gU(a){return A.cP(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.e1.prototype={
cL(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.e1&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gU(a){var s=this
return A.cP(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.hF.prototype={
cL(){return this.a},
aa(a,b){if(b==null)return!1
return b instanceof A.hF&&this.$s===b.$s&&A.H7(this.a,b.a)},
gU(a){return A.cP(this.$s,A.FI(this.a),B.h,B.h,B.h,B.h)}}
A.iw.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkT(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.B5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kj(){var s,r=this.a
if(!B.c.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hx(a,b){return new A.ms(this,b,0)},
kA(a,b){var s,r=this.gkT()
if(r==null)r=A.fK(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mN(s)},
$irE:1,
$iG_:1}
A.mN.prototype={
gff(){return this.b.index},
gen(){var s=this.b
return s.index+s[0].length},
$ihj:1,
$iiU:1}
A.ms.prototype={
gv(a){return new A.mt(this.a,this.b,this.c)}}
A.mt.prototype={
gp(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kA(l,s)
if(p!=null){m.d=p
o=p.gen()
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
$iai:1}
A.j6.prototype={
gen(){return this.a+this.c.length},
$ihj:1,
gff(){return this.a}}
A.n3.prototype={
gv(a){return new A.n4(this.a,this.b,this.c)},
ga1(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.j6(r,s)
throw A.b(A.cL())}}
A.n4.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.j6(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iai:1}
A.vw.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a9(""))
return s}}
A.ew.prototype={
gad(a){return B.ok},
hA(a,b,c){A.wx(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hz(a,b,c){A.wx(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$ian:1,
$iew:1}
A.hl.prototype={$ihl:1}
A.iH.prototype={
ged(a){if(((a.$flags|0)&2)!==0)return new A.wj(a.buffer)
else return a.buffer},
kN(a,b,c,d){var s=A.b2(b,0,c,d,null)
throw A.b(s)},
fu(a,b,c,d){if(b>>>0!==b||b>c)this.kN(a,b,c,d)}}
A.wj.prototype={
hA(a,b,c){var s=A.Bj(this.a,b,c)
s.$flags=3
return s},
hz(a,b,c){var s=A.FF(this.a,b,c)
s.$flags=3
return s}}
A.lo.prototype={
gad(a){return B.ol},
$ian:1}
A.bq.prototype={
gu(a){return a.length},
hd(a,b,c,d,e){var s,r,q=a.length
this.fu(a,b,q,"start")
this.fu(a,c,q,"end")
if(b>c)throw A.b(A.b2(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.o(e,null))
r=d.length
if(r-e<s)throw A.b(A.i("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic5:1}
A.iF.prototype={
h(a,b){A.e5(b,a,a.length)
return a[b]},
l(a,b,c){A.ax(c)
a.$flags&2&&A.aV(a)
A.e5(b,a,a.length)
a[b]=c},
dJ(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aV(a,5)
this.hd(a,b,c,d,0)
return},
$iV:1,
$ir:1,
$iJ:1}
A.iG.prototype={
l(a,b,c){A.h(c)
a.$flags&2&&A.aV(a)
A.e5(b,a,a.length)
a[b]=c},
j6(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aV(a,5)
this.hd(a,b,c,d,e)
return},
$iV:1,
$ir:1,
$iJ:1}
A.iE.prototype={
gad(a){return B.om},
aD(a,b,c){return new Float32Array(a.subarray(b,A.zH(b,c,a.length)))},
$ian:1,
$ipr:1}
A.lp.prototype={
gad(a){return B.on},
$ian:1,
$ips:1}
A.lq.prototype={
gad(a){return B.oo},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.lr.prototype={
gad(a){return B.op},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.ls.prototype={
gad(a){return B.oq},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.lt.prototype={
gad(a){return B.ot},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iuL:1}
A.lu.prototype={
gad(a){return B.ou},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iuM:1}
A.ff.prototype={
gad(a){return B.ov},
gu(a){return a.length},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iff:1}
A.iI.prototype={
gad(a){return B.ow},
gu(a){return a.length},
h(a,b){A.e5(b,a,a.length)
return a[b]},
aD(a,b,c){return new Uint8Array(a.subarray(b,A.zH(b,c,a.length)))},
$ian:1,
$ic1:1}
A.jr.prototype={}
A.js.prototype={}
A.jt.prototype={}
A.ju.prototype={}
A.cS.prototype={
i(a){return A.jG(v.typeUniverse,this,a)},
S(a){return A.Cg(v.typeUniverse,this,a)}}
A.mG.prototype={}
A.n7.prototype={
t(a){return A.bR(this.a,null)}}
A.mE.prototype={
t(a){return this.a}}
A.hJ.prototype={$idU:1}
A.vs.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:20}
A.vr.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:82}
A.vt.prototype={
$0(){this.a.$0()},
$S:13}
A.vu.prototype={
$0(){this.a.$0()},
$S:13}
A.wf.prototype={
jU(a,b){if(self.setTimeout!=null)self.setTimeout(A.i0(new A.wg(this,b),0),a)
else throw A.b(A.bu("`setTimeout()` not found."))}}
A.wg.prototype={
$0(){this.b.$0()},
$S:0}
A.mu.prototype={
ee(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dQ(a)
else{s=r.a
if(q.i("aS<1>").b(a))s.fs(a)
else s.cJ(a)}},
ef(a,b){var s=this.a
if(this.b)s.bw(new A.bn(a,b))
else s.cG(new A.bn(a,b))}}
A.wu.prototype={
$1(a){return this.a.$2(0,a)},
$S:24}
A.wv.prototype={
$2(a,b){this.a.$2(1,new A.ij(a,t.l.a(b)))},
$S:147}
A.xY.prototype={
$2(a,b){this.a(A.h(a),b)},
$S:189}
A.cf.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lq(a,b){var s,r,q
a=A.h(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.lq(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Ca
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
o.a=A.Ca
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.i("sync*"))}return!1},
lP(a){var s,r,q=this
if(a instanceof A.bI){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.O(a)
return 2}},
$iai:1}
A.bI.prototype={
gv(a){return new A.cf(this.a(),this.$ti.i("cf<1>"))}}
A.bn.prototype={
t(a){return A.y(this.a)},
$iat:1,
gc1(){return this.b}}
A.pz.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fC(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ah(p)
q=A.cZ(p)
l=r
o=q
n=A.zQ(l,o)
l=new A.bn(l,o)
m.b.bw(l)
return}m.b.fC(s)}},
$S:0}
A.pC.prototype={
$2(a,b){var s,r,q=this
A.fK(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bw(new A.bn(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bw(new A.bn(r,s))}},
$S:70}
A.pB.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.b7(r,k.b,a)
if(J.aa(s,0)){q=A.c([],j.i("x<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.e9(q,l)}k.c.cJ(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bw(new A.bn(q,o))}},
$S(){return this.d.i("az(0)")}}
A.my.prototype={
ef(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.cG(A.Io(a,b))},
hE(a){return this.ef(a,null)}}
A.jg.prototype={
ee(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.dQ(r.i("1/").a(a))}}
A.dZ.prototype={
nW(a){if((this.c&15)!==6)return!0
return this.b.b.eQ(t.bl.a(this.d),a.a,t.y,t.K)},
nx(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.p_(q,m,a.b,o,n,t.l)
else p=l.eQ(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ah(s))){if((r.c&1)!==0)throw A.b(A.o("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.o("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
eS(a,b,c){var s,r,q=this.$ti
q.S(c).i("1/(2)").a(a)
s=$.ar
if(s===B.C){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.a7(b,"onError",u.c))}else{c.i("@<0/>").S(q.c).i("1(2)").a(a)
b=A.D5(b,s)}r=new A.as(s,c.i("as<0>"))
this.cF(new A.dZ(r,3,a,b,q.i("@<1>").S(c).i("dZ<1,2>")))
return r},
hk(a,b,c){var s,r=this.$ti
r.S(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.cF(new A.dZ(s,19,a,b,r.i("@<1>").S(c).i("dZ<1,2>")))
return s},
lu(a){this.a=this.a&1|16
this.c=a},
cI(a){this.a=a.a&30|this.a&1
this.c=a.c},
cF(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cF(a)
return}r.cI(s)}A.ns(null,null,r.b,t.O.a(new A.vz(r,a)))}},
h2(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.h2(a)
return}m.cI(n)}l.a=m.cR(a)
A.ns(null,null,m.b,t.O.a(new A.vE(l,m)))}},
c9(){var s=t.F.a(this.c)
this.c=null
return this.cR(s)},
cR(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fC(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aS<1>").b(a))A.vC(a,r,!0)
else{s=r.c9()
q.c.a(a)
r.a=8
r.c=a
A.fA(r,s)}},
cJ(a){var s,r=this
r.$ti.c.a(a)
s=r.c9()
r.a=8
r.c=a
A.fA(r,s)},
kh(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c9()
q.cI(a)
A.fA(q,r)},
bw(a){var s=this.c9()
this.lu(a)
A.fA(this,s)},
dQ(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aS<1>").b(a)){this.fs(a)
return}this.jY(a)},
jY(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ns(null,null,s.b,t.O.a(new A.vB(s,a)))},
fs(a){A.vC(this.$ti.i("aS<1>").a(a),this,!1)
return},
cG(a){this.a^=2
A.ns(null,null,this.b,t.O.a(new A.vA(this,a)))},
$iaS:1}
A.vz.prototype={
$0(){A.fA(this.a,this.b)},
$S:0}
A.vE.prototype={
$0(){A.fA(this.b,this.a.a)},
$S:0}
A.vD.prototype={
$0(){A.vC(this.a.a,this.b,!0)},
$S:0}
A.vB.prototype={
$0(){this.a.cJ(this.b)},
$S:0}
A.vA.prototype={
$0(){this.a.bw(this.b)},
$S:0}
A.vH.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oZ(t.pF.a(q.d),t.z)}catch(p){s=A.ah(p)
r=A.cZ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nV(q)
n=k.a
n.c=new A.bn(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.eS(new A.vI(l,m),new A.vJ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vI.prototype={
$1(a){this.a.kh(this.b)},
$S:20}
A.vJ.prototype={
$2(a,b){A.fK(a)
t.l.a(b)
this.a.bw(new A.bn(a,b))},
$S:80}
A.vG.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eQ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ah(l)
r=A.cZ(l)
q=s
p=r
if(p==null)p=A.nV(q)
o=this.a
o.c=new A.bn(q,p)
o.b=!0}},
$S:0}
A.vF.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nW(s)&&p.a.e!=null){p.c=p.a.nx(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.cZ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nV(p)
m=l.b
m.c=new A.bn(p,n)
p=m}p.b=!0}},
$S:0}
A.mv.prototype={}
A.n2.prototype={}
A.jO.prototype={$iC4:1}
A.mW.prototype={
p0(a){var s,r,q
t.O.a(a)
try{if(B.C===$.ar){a.$0()
return}A.Da(null,null,this,a,t.H)}catch(q){s=A.ah(q)
r=A.cZ(q)
A.A2(A.fK(s),t.l.a(r))}},
hC(a){return new A.wd(this,t.O.a(a))},
oZ(a,b){b.i("0()").a(a)
if($.ar===B.C)return a.$0()
return A.Da(null,null,this,a,b)},
eQ(a,b,c,d){c.i("@<0>").S(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.C)return a.$1(b)
return A.J4(null,null,this,a,b,c,d)},
p_(a,b,c,d,e,f){d.i("@<0>").S(e).S(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.C)return a.$2(b,c)
return A.J3(null,null,this,a,b,c,d,e,f)},
ix(a,b,c,d){return b.i("@<0>").S(c).S(d).i("1(2,3)").a(a)}}
A.wd.prototype={
$0(){return this.a.p0(this.b)},
$S:0}
A.xH.prototype={
$0(){A.F6(this.a,this.b)},
$S:0}
A.jl.prototype={
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.fB(this,this.$ti.i("fB<1>"))},
gak(){var s=this.$ti
return A.li(new A.fB(this,s.i("fB<1>")),new A.vL(this),s.c,s.y[1])},
K(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kn(a)},
kn(a){var s=this.d
if(s==null)return!1
return this.bx(this.fB(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.C6(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.C6(q,b)
return r}else return this.kF(b)},
kF(a){var s,r,q=this.d
if(q==null)return null
s=this.fB(q,a)
r=this.bx(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fz(s==null?m.b=A.zr():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fz(r==null?m.c=A.zr():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.zr()
p=A.nB(b)&1073741823
o=q[p]
if(o==null){A.zs(q,p,[b,c]);++m.a
m.e=null}else{n=m.bx(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aJ(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fA()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aD(m))}},
fA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.d9(i.a,null,!1,t.z)
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
fz(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.zs(a,b,c)},
fB(a,b){return a[A.nB(b)&1073741823]}}
A.vL.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jn.prototype={
bx(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fB.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
ga5(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.jm(s,s.fA(),this.$ti.i("jm<1>"))},
q(a,b){return this.a.K(b)}}
A.jm.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aD(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iai:1}
A.cx.prototype={
h_(){return new A.cx(A.v(this).i("cx<1>"))},
gv(a){var s=this,r=new A.fD(s,s.r,A.v(s).i("fD<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.km(b)},
km(a){var s=this.d
if(s==null)return!1
return this.bx(s[this.dU(a)],a)>=0},
ga1(a){var s=this.e
if(s==null)throw A.b(A.i("No elements"))
return A.v(this).c.a(s.a)},
k(a,b){var s,r,q=this
A.v(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fw(s==null?q.b=A.zt():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fw(r==null?q.c=A.zt():r,b)}else return q.jV(b)},
jV(a){var s,r,q,p=this
A.v(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.zt()
r=p.dU(a)
q=s[r]
if(q==null)s[r]=[p.dT(a)]
else{if(p.bx(q,a)>=0)return!1
q.push(p.dT(a))}return!0},
a8(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.h5(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.h5(s.c,b)
else return s.ll(b)},
ll(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dU(a)
r=n[s]
q=o.bx(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hp(p)
return!0},
kD(a,b){var s,r,q,p,o,n=this,m=A.v(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aD(n))
if(!0===o)n.a8(0,r)}},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.e4()}},
fw(a,b){A.v(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dT(b)
return!0},
h5(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hp(s)
delete a[b]
return!0},
e4(){this.r=this.r+1&1073741823},
dT(a){var s,r=this,q=new A.mM(A.v(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.e4()
return q},
hp(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.e4()},
dU(a){return J.aN(a)&1073741823},
bx(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iBb:1}
A.mM.prototype={}
A.fD.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aD(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iai:1}
A.qZ.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:81}
A.a3.prototype={
gv(a){return new A.al(a,this.gu(a),A.cj(a).i("al<a3.E>"))},
ab(a,b){return this.h(a,b)},
gR(a){return this.gu(a)===0},
ga5(a){return!this.gR(a)},
ga1(a){if(this.gu(a)===0)throw A.b(A.cL())
return this.h(a,0)},
q(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.b(A.aD(a))}return!1},
a2(a,b){var s,r
A.cj(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.b(A.aD(a))}return!0},
M(a,b){var s,r
A.cj(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.b(A.aD(a))}return!1},
W(a,b){var s
if(this.gu(a)===0)return""
s=A.zl("",a,b)
return s.charCodeAt(0)==0?s:s},
eY(a,b){return new A.dY(a,b.i("dY<0>"))},
bs(a,b,c){var s=A.cj(a)
return new A.H(a,s.S(c).i("1(a3.E)").a(b),s.i("@<a3.E>").S(c).i("H<1,2>"))},
k(a,b){var s
A.cj(a).i("a3.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.l(a,s,b)},
cY(a,b){return new A.b9(a,A.cj(a).i("@<a3.E>").S(b).i("b9<1,2>"))},
nr(a,b,c,d){var s
A.cj(a).i("a3.E?").a(d)
A.fj(b,c,this.gu(a))
for(s=b;s<c;++s)this.l(a,s,d)},
t(a){return A.z5(a,"[","]")},
$iV:1,
$ir:1,
$iJ:1}
A.ag.prototype={
aJ(a,b){var s,r,q,p=A.v(this)
p.i("~(ag.K,ag.V)").a(b)
for(s=this.ga3(),s=s.gv(s),p=p.i("ag.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gN(){return this.ga3().bs(0,new A.r0(this),A.v(this).i("P<ag.K,ag.V>"))},
bt(a,b,c,d){var s,r,q,p,o,n=A.v(this)
n.S(c).S(d).i("P<1,2>(ag.K,ag.V)").a(b)
s=A.n(c,d)
for(r=this.ga3(),r=r.gv(r),n=n.i("ag.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
lR(a){var s,r
for(s=J.O(A.v(this).i("r<P<ag.K,ag.V>>").a(a));s.m();){r=s.gp()
this.l(0,r.a,r.b)}},
K(a){return this.ga3().q(0,a)},
gu(a){var s=this.ga3()
return s.gu(s)},
gR(a){var s=this.ga3()
return s.gR(s)},
ga5(a){var s=this.ga3()
return s.ga5(s)},
gak(){return new A.jo(this,A.v(this).i("jo<ag.K,ag.V>"))},
t(a){return A.zc(this)},
$iY:1}
A.r0.prototype={
$1(a){var s=this.a,r=A.v(s)
r.i("ag.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("ag.V").a(s)
return new A.P(a,s,r.i("P<ag.K,ag.V>"))},
$S(){return A.v(this.a).i("P<ag.K,ag.V>(ag.K)")}}
A.r1.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:41}
A.jo.prototype={
gu(a){var s=this.a
return s.gu(s)},
gR(a){var s=this.a
return s.gR(s)},
ga5(a){var s=this.a
return s.ga5(s)},
ga1(a){var s=this.a,r=s.ga3()
r=s.h(0,r.ga1(r))
return r==null?this.$ti.y[1].a(r):r},
gv(a){var s=this.a,r=s.ga3()
return new A.jp(r.gv(r),s,this.$ti.i("jp<1,2>"))}}
A.jp.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.jH.prototype={
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bu("Cannot modify unmodifiable map"))}}
A.hi.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.v(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
K(a){return this.a.K(a)},
aJ(a,b){this.a.aJ(0,A.v(this).i("~(1,2)").a(b))},
gR(a){var s=this.a
return s.gR(s)},
ga5(a){var s=this.a
return s.ga5(s)},
gu(a){var s=this.a
return s.gu(s)},
ga3(){return this.a.ga3()},
t(a){return this.a.t(0)},
gak(){return this.a.gak()},
gN(){return this.a.gN()},
bt(a,b,c,d){return this.a.bt(0,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.eC.prototype={}
A.dg.prototype={
gR(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
L(a,b){var s
for(s=J.O(A.v(this).i("r<1>").a(b));s.m();)this.k(0,s.gp())},
bB(a){var s,r,q=this.b9(0)
for(s=this.gv(this);s.m();){r=s.gp()
if(a.q(0,r))q.a8(0,r)}return q},
t(a){return A.z5(this,"{","}")},
a2(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gp())
while(q.m())}else{r=s
do r=r+b+A.y(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cL())
return s.gp()},
ab(a,b){var s,r
A.lL(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.qu(b,b-r,this,"index"))},
$iV:1,
$ir:1,
$idR:1}
A.jB.prototype={
bB(a){var s,r,q,p=this,o=p.h_()
for(s=A.fE(p,p.r,A.v(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.k(0,q)}return o},
b9(a){var s=this.h_()
s.L(0,this)
return s}}
A.n8.prototype={
k(a,b){this.$ti.c.a(b)
return A.Hj()}}
A.hB.prototype={
q(a,b){return this.a.q(0,b)},
gu(a){return this.a.a},
gv(a){var s=this.a
return A.fE(s,s.r,A.v(s).c)},
b9(a){return this.a.b9(0)}}
A.hK.prototype={}
A.jI.prototype={}
A.mK.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ld(b):s}},
gu(a){return this.b==null?this.c.a:this.bH().length},
gR(a){return this.gu(0)===0},
ga5(a){return this.gu(0)>0},
ga3(){if(this.b==null){var s=this.c
return new A.ae(s,A.v(s).i("ae<1>"))}return new A.mL(this)},
gak(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.v(s).i("ao<2>"))}return A.li(r.bH(),new A.vN(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.w(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.K(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lH().l(0,b,c)},
K(a){if(this.b==null)return this.c.K(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aJ(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aJ(0,b)
s=o.bH()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.wY(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aD(o))}},
bH(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
lH(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bH()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.P(r)
n.a=n.b=null
return n.c=s},
ld(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.wY(this.a[a])
return this.b[a]=s}}
A.vN.prototype={
$1(a){return this.a.h(0,A.w(a))},
$S:47}
A.mL.prototype={
gu(a){return this.a.gu(0)},
ab(a,b){var s=this.a
if(s.b==null)s=s.ga3().ab(0,b)
else{s=s.bH()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.ga3()
s=s.gv(s)}else{s=s.bH()
s=new J.eZ(s,s.length,A.B(s).i("eZ<1>"))}return s},
q(a,b){return this.a.K(b)}}
A.wm.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:44}
A.wl.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:44}
A.kg.prototype={
mX(a,b){t.L.a(a)
if(b===!0)return B.ez.bz(a)
else return B.ey.bz(a)}}
A.wh.prototype={
bz(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.fj(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.b(A.M("Invalid value in input: "+o,null,null))
return this.kp(a,0,r)}}return A.zm(a,0,r)},
kp(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.aA((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kh.prototype={}
A.ko.prototype={
o_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fj(a4,a5,a2)
s=$.E_()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.ya(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.ya(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bE("")
g=o}else g=o
g.a+=B.c.J(a3,p,q)
c=A.aA(j)
g.a+=c
p=k
continue}}throw A.b(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.J(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.AF(a3,m,a5,n,l,r)
else{b=B.d.O(r-1,4)+1
if(b===1)throw A.b(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.bX(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.AF(a3,m,a5,n,l,a)
else{b=B.d.O(a,4)
if(b===1)throw A.b(A.M(a1,a3,a5))
if(b>1)a3=B.c.bX(a3,a5,a5,b===2?"==":"=")}return a3}}
A.oB.prototype={}
A.eo.prototype={}
A.kz.prototype={}
A.kL.prototype={}
A.iy.prototype={
t(a){var s=A.kM(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lf.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.le.prototype={
ai(a,b){var s=A.IR(a,this.gn_().a)
return s},
a0(a,b){var s=A.GY(a,this.gnk().b,null)
return s},
gnk(){return B.jO},
gn_(){return B.jN}}
A.qQ.prototype={}
A.qP.prototype={}
A.vP.prototype={
iL(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
o=A.aA(117)
s.a+=o
o=A.aA(100)
s.a+=o
o=p>>>8&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aA(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
switch(p){case 8:o=A.aA(98)
s.a+=o
break
case 9:o=A.aA(116)
s.a+=o
break
case 10:o=A.aA(110)
s.a+=o
break
case 12:o=A.aA(102)
s.a+=o
break
case 13:o=A.aA(114)
s.a+=o
break
default:o=A.aA(117)
s.a+=o
o=A.aA(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
o=A.aA(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.J(a,r,m)},
dR(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lf(a,null))}B.a.k(s,a)},
dG(a){var s,r,q,p,o=this
if(o.iK(a))return
o.dR(a)
try{s=o.b.$1(a)
if(!o.iK(s)){q=A.B7(a,null,o.gh1())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ah(p)
q=A.B7(a,r,o.gh1())
throw A.b(q)}},
iK(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.iL(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dR(a)
q.pj(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dR(a)
r=q.pk(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
pj(a){var s,r,q=this.c
q.a+="["
s=J.aQ(a)
if(s.ga5(a)){this.dG(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dG(s.h(a,r))}}q.a+="]"},
pk(a){var s,r,q,p,o,n,m=this,l={}
if(a.gR(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.d9(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aJ(0,new A.vQ(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iL(A.w(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dG(r[n])}p.a+="}"
return!0}}
A.vQ.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:41}
A.vO.prototype={
gh1(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ma.prototype={}
A.uR.prototype={
bz(a){var s,r,q,p=a.length,o=A.fj(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.wn(s)
if(r.kC(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.eb()}return B.a3.aD(s,0,r.b)}}
A.wn.prototype={
eb(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.aV(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
lO(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.aV(r)
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
return!0}else{n.eb()
return!1}},
kC(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.aV(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.lO(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eb()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.aV(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.aV(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.uQ.prototype={
bz(a){return new A.wk(this.a).ko(t.L.a(a),0,null,!0)}}
A.wk.prototype={
ko(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fj(b,c,J.cD(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.HA(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Hz(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dW(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.HB(o)
l.b=0
throw A.b(A.M(m,a,p+l.c))}return n},
dW(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.af(b+c,2)
r=q.dW(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dW(a,s,c,d)}return q.mZ(a,b,c,d)},
mZ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bE(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aA(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aA(h)
e.a+=p
break
case 65:p=A.aA(h)
e.a+=p;--d
break
default:p=A.aA(h)
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
p=A.aA(a[l])
e.a+=p}else{p=A.zm(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aA(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.f3.prototype={
gaw(){return A.Bm(this)},
gaX(){return A.Bn(this)},
aa(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.f3)if(this.a===b.a)s=this.b===b.b
return s},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)},
I(a,b){var s
t.f7.a(b)
s=B.d.I(this.a,b.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
t(a){var s=this,r=A.EM(A.FV(s)),q=A.kB(A.FT(s)),p=A.kB(A.Bm(s)),o=A.kB(A.Bn(s)),n=A.kB(A.FS(s)),m=A.kB(A.FU(s)),l=A.AN(A.FR(s)),k=s.b,j=k===0?"":A.AN(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibp:1}
A.dy.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.dy&&this.a===b.a},
gU(a){return B.d.gU(this.a)},
I(a,b){return B.d.I(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.af(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.af(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bD(B.d.t(o%1e6),6,"0")},
$ibp:1}
A.mD.prototype={
t(a){return this.B()},
$iD:1}
A.at.prototype={
gc1(){return A.FQ(this)}}
A.ki.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kM(s)
return"Assertion failed"}}
A.dU.prototype={}
A.cF.prototype={
ge_(){return"Invalid argument"+(!this.a?"(s)":"")},
gdZ(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.ge_()+q+o
if(!s.a)return n
return n+s.gdZ()+": "+A.kM(s.geB())},
geB(){return this.b}}
A.hp.prototype={
geB(){return A.zC(this.b)},
ge_(){return"RangeError"},
gdZ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.l5.prototype={
geB(){return A.h(this.b)},
ge_(){return"RangeError"},
gdZ(){if(A.h(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.j9.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.m5.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.hw.prototype={
t(a){return"Bad state: "+this.a}}
A.kw.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kM(s)+"."}}
A.lw.prototype={
t(a){return"Out of Memory"},
gc1(){return null},
$iat:1}
A.j4.prototype={
t(a){return"Stack Overflow"},
gc1(){return null},
$iat:1}
A.vx.prototype={
t(a){return"Exception: "+this.a}}
A.A.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.J(e,0,75)+"..."
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
k=""}return g+l+B.c.J(e,i,j)+k+"\n"+B.c.a9(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.r.prototype={
cY(a,b){return A.EB(this,A.v(this).i("r.E"),b)},
bs(a,b,c){var s=A.v(this)
return A.li(this,s.S(c).i("1(r.E)").a(b),s.i("r.E"),c)},
dF(a,b){var s=A.v(this)
return new A.I(this,s.i("l(r.E)").a(b),s.i("I<r.E>"))},
eY(a,b){return new A.dY(this,b.i("dY<0>"))},
q(a,b){var s
for(s=this.gv(this);s.m();)if(J.aa(s.gp(),b))return!0
return!1},
b6(a,b,c,d){var s,r
d.a(b)
A.v(this).S(d).i("1(1,r.E)").a(c)
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a2(a,b){var s
A.v(this).i("l(r.E)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gp())
if(!q.m())return s
r=b.gR(b)
if(r){r=s
do r+=J.c3(q.gp())
while(q.m())}else{r=s
do r=r+A.y(b)+J.c3(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.v(this).i("l(r.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bY(a,b){var s=A.K(this,A.v(this).i("r.E"))
return s},
bE(a){return this.bY(0,!0)},
gu(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gR(a){return!this.gv(this).m()},
ga5(a){return!this.gR(this)},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cL())
return s.gp()},
gbj(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.cL())
s=r.gp()
if(r.m())throw A.b(A.B0())
return s},
b5(a,b,c){var s,r=A.v(this)
r.i("l(r.E)").a(b)
r.i("r.E()?").a(c)
for(r=this.gv(this);r.m();){s=r.gp()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cL())},
an(a,b){return this.b5(0,b,null)},
ab(a,b){var s,r
A.lL(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.qu(b,b-r,this,"index"))},
t(a){return A.Fr(this,"(",")")}}
A.P.prototype={
t(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.az.prototype={
gU(a){return A.L.prototype.gU.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
aa(a,b){return this===b},
gU(a){return A.iQ(this)},
t(a){return"Instance of '"+A.lG(this)+"'"},
gad(a){return A.Ag(this)},
toString(){return this.t(this)}}
A.n5.prototype={
t(a){return""},
$idi:1}
A.us.prototype={
gni(){var s,r=this.b
if(r==null)r=$.t3.$0()
s=r-this.a
if($.Aq()===1e6)return s
return s*1000}}
A.bE.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iGl:1}
A.uP.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.w(b)
s=B.c.bC(b,"=")
if(s===-1){if(b!=="")a.l(0,A.zy(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.J(b,0,s)
q=B.c.aQ(b,s+1)
p=this.a
a.l(0,A.zy(r,0,r.length,p,!0),A.zy(q,0,q.length,p,!0))}return a},
$S:90}
A.uO.prototype={
$2(a,b){throw A.b(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:106}
A.jJ.prototype={
ghi(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.y(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gU(a){var s,r=this,q=r.y
if(q===$){s=B.c.gU(r.ghi())
r.y!==$&&A.nC()
r.y=s
q=s}return q},
gaZ(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.BN(s==null?"":s)
r.z!==$&&A.nC()
q=r.z=new A.eC(s,t.hL)}return q},
giH(){return this.b},
gez(){var s=this.c
if(s==null)return""
if(B.c.V(s,"[")&&!B.c.ar(s,"v",1))return B.c.J(s,1,s.length-1)
return s},
geG(){var s=this.d
return s==null?A.Ch(this.a):s},
geJ(){var s=this.f
return s==null?"":s},
gi1(){var s=this.r
return s==null?"":s},
gi5(){return this.c!=null},
gi7(){return this.f!=null},
gi6(){return this.r!=null},
t(a){return this.ghi()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gf3())if(p.c!=null===b.gi5())if(p.b===b.giH())if(p.gez()===b.gez())if(p.geG()===b.geG())if(p.e===b.gip()){r=p.f
q=r==null
if(!q===b.gi7()){if(q)r=""
if(r===b.geJ()){r=p.r
q=r==null
if(!q===b.gi6()){s=q?"":r
s=s===b.gi1()}}}}return s},
$im8:1,
gf3(){return this.a},
gip(){return this.e}}
A.uN.prototype={
giG(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.dk(s,"?",m)
q=s.length
if(r>=0){p=A.jK(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mz("data","",n,n,A.jK(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.n_.prototype={
gi5(){return this.c>0},
gi7(){return this.f<this.r},
gi6(){return this.r<this.a.length},
gf3(){var s=this.w
return s==null?this.w=this.kk():s},
kk(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.V(r.a,"http"))return"http"
if(q===5&&B.c.V(r.a,"https"))return"https"
if(s&&B.c.V(r.a,"file"))return"file"
if(q===7&&B.c.V(r.a,"package"))return"package"
return B.c.J(r.a,0,q)},
giH(){var s=this.c,r=this.b+3
return s>r?B.c.J(this.a,r,s-1):""},
gez(){var s=this.c
return s>0?B.c.J(this.a,s,this.d):""},
geG(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Dy(B.c.J(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.V(r.a,"http"))return 80
if(s===5&&B.c.V(r.a,"https"))return 443
return 0},
gip(){return B.c.J(this.a,this.e,this.f)},
geJ(){var s=this.f,r=this.r
return s<r?B.c.J(this.a,s+1,r):""},
gi1(){var s=this.r,r=this.a
return s<r.length?B.c.aQ(r,s+1):""},
gaZ(){if(this.f>=this.r)return B.aQ
return new A.eC(A.BN(this.geJ()),t.hL)},
gU(a){var s=this.x
return s==null?this.x=B.c.gU(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$im8:1}
A.mz.prototype={}
A.rw.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.yL.prototype={
$1(a){return this.a.ee(this.b.i("0/?").a(a))},
$S:24}
A.yM.prototype={
$1(a){if(a==null)return this.a.hE(new A.rw(a===undefined))
return this.a.hE(a)},
$S:24}
A.y3.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.CX(a))return a
s=this.a
a.toString
if(s.K(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b2(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e7(!0,"isUtc",t.y)
return new A.f3(r,0,!0)}if(a instanceof RegExp)throw A.b(A.o("structured clone of RegExp",null))
if(a instanceof Promise)return A.av(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cY(n),p=s.gv(n);p.m();)m.push(A.i1(p.gp()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.h(a.length)
for(s=J.aQ(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:123}
A.mJ.prototype={
aY(a){if(a<=0||a>4294967296)throw A.b(A.Bq(u.w+a))
return Math.random()*a>>>0},
aA(){return Math.random()},
$izi:1}
A.eL.prototype={
c3(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.af(a-s,k)
r=a>>>0
a=B.d.af(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.af(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.af(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.af(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.af(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.af(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bn()
l.bn()
l.bn()
l.bn()},
bn(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.af(o-n+(q-p)+(m-r),4294967296)>>>0},
aY(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.Bq(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bn()
return(p.a&s)>>>0}do{p.bn()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aA(){var s,r=this
r.bn()
s=r.a
r.bn()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$izi:1}
A.kG.prototype={
B(){return"DiagnosticSeverity."+this.b}}
A.ec.prototype={
C(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.u8.prototype={
$1(a){return B.c.bD(B.d.eU(A.h(a),16),8,"0")},
$S:131}
A.mb.prototype={}
A.rf.prototype={
oC(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),q=o.a,r=r.i("a0.E");s.m();){p=s.d
q.aK(p==null?r.a(p):p)}}}
A.lm.prototype={}
A.rq.prototype={}
A.rh.prototype={
dn(a0,a1){var s=0,r=A.aL(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dn=A.aM(function(a3,a4){if(a3===1)return A.aI(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.DM(b)
if(a.length!==0)throw A.b(A.M(B.a.bs(a,new A.ri(),t.N).W(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.b(B.hY)
k=t.N
j=A.a_(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.u)(m),++i)j.L(0,m[i].c.gak())
if(j.a>16384)throw A.b(B.hR)
p=A.n(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gak(),g=g.gv(g)
case 6:if(!g.m()){s=7
break}o=g.gp()
if(p.K(o)){s=6
break}s=8
return A.a6(j.$1(o),$async$dn)
case 8:f=a4
e=f.length
if(e>67108864)throw A.b(A.M("model package payload exceeds limit: "+A.y(o),null,null))
d=p
if(new A.ao(d,A.v(d).i("ao<2>")).b6(0,0,new A.rj(),k)+e>268435456)throw A.b(B.i0)
J.b7(p,o,new Uint8Array(A.S(f)))
if(l)try{e=J.b0(p,o)
e.toString
A.Dq(e)}catch(a2){b=A.ah(a2)
if(b instanceof A.lJ){n=b
throw A.b(A.M("model package payload is not valid QMSH: "+A.y(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.u)(m),++i
s=3
break
case 5:if(A.Bg(b,p)!==b.c)throw A.b(B.h1)
q=new A.mb(b,p)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dn,r)}}
A.ri.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.rj.prototype={
$2(a,b){return A.h(a)+t.uo.a(b).length},
$S:155}
A.rk.prototype={
A(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iV("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.k(l,"assetId must be kebab-case")
k=A.iV("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.k(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.k(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.k(l,"parts must be non-empty")
s=m.w
if(A.hh(s,A.B(s).c).a!==s.length)B.a.k(l,"lods must be unique")
if(!B.a.q(s,"LOD0"))B.a.k(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.M(s,new A.rn())
else s=!1
if(s)B.a.k(l,"combinedBounds must contain six finite values")
for(s=m.y.gN(),s=s.gv(s);s.m();){r=s.gp()
q=r.a
if(q.length!==0){r=r.b
p=J.aQ(r)
r=p.gu(r)!==16||p.M(r,new A.ro())}else r=!0
if(r)B.a.k(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.u)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.k(l,"part material slot is outside materials")
q=n.c
if(q.gR(q))B.a.k(l,"part "+n.a+" must declare payload files")
for(q=q.gak(),q=q.gv(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.Iy(q.gp()))B.a.k(l,p)}return l},
iD(a){var s,r,q,p=this,o=A.n(t.N,t.z)
o.l(0,"schema","pixeldart-model-package-v1")
o.l(0,"assetId",p.b)
if(a)o.l(0,"packageHash",p.c)
o.l(0,"sourceFormat",p.d)
s=p.e
r=A.B(s)
q=r.i("H<1,Y<e,@>>")
s=A.K(new A.H(s,r.i("Y<e,@>(1)").a(new A.rm()),q),q.i("a0.E"))
o.l(0,"parts",s)
o.l(0,"materials",p.f)
o.l(0,"textures",p.r)
o.l(0,"lods",p.w)
o.l(0,"combinedBounds",p.x)
o.l(0,"sockets",p.y)
o.l(0,"provenance",p.z)
return o},
C(){return this.iD(!0)}}
A.rl.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:39}
A.rn.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.ro.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.rm.prototype={
$1(a){return t.aw.a(a).C()},
$S:76}
A.fe.prototype={
C(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gF(){return this.a}}
A.rp.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:39}
A.xu.prototype={
$1(a){A.w(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.xO.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xx.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.xM.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yW.prototype={
$2(a,b){B.a.k(this.a,new A.ec(a,B.cC,"model-package",b,"rebuild the deterministic model package"))},
$S:36}
A.yX.prototype={
$2(a,b){B.a.k(this.a,new A.ec(a,B.cC,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:36}
A.t9.prototype={
A(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.ta()))throw A.b(B.iI)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.hr)}}
A.ta.prototype={
$1(a){return A.h(a)<=0},
$S:22}
A.fi.prototype={
B(){return"QualityProfileKind."+this.b}}
A.dO.prototype={
A(){var s="installedFeatures",r=this.b,q=r.bB(B.nw)
if(q.a!==0)throw A.b(A.a7(q,s,"contains unknown pipeline features"))
if(this.a===B.bK&&r.ga5(r))throw A.b(A.a7(r,s,"safe profiles cannot install optional features"))}}
A.h3.prototype={
B(){return"CoordinatedTransitionState."+this.b}}
A.lD.prototype={}
A.oP.prototype={
cc(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.i("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.i("configuration state is not initialized"))
if(p.c!=null)A.f(A.i("a configuration transition is already open"))
a2.A()
n=A.iK(a2)
m=p.d
l=p.b
if(l==null)A.f(A.i("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bB(h)
f=h.bB(j)
j=n.a
h=l.a
e=j.bB(h)
d=h.bB(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.oS(m,a2,n,new A.oQ(A.fo(g,k),A.fo(f,k),A.fo(e,k),A.fo(d,k),c,b,o.z!==a2.z),B.cA)
p.c=a
s=a
try{r=a1.b.du(s.c)
q=new A.lD(s,r,B.b8)
a1.c=q
return q}catch(a0){p.hu(s)
throw a0}},
cd(a){var s,r,q,p=this
p.fF(a)
s=p.a
r=a.a
s.fG(r)
q=s.d
if(r.a!==q)A.f(A.i("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fr
s.c=null
p.b.cd(a.b)
a.c=B.fz
p.c=null},
fF(a){if(this.c!==a||a.c!==B.b8)throw A.b(A.i("coordinated transition is not open"))}}
A.fZ.prototype={
B(){return"ConfigurationTransactionState."+this.b}}
A.oQ.prototype={}
A.oS.prototype={}
A.oR.prototype={
hu(a){this.fG(a)
a.e=B.fs
this.c=null},
fG(a){if(this.c!==a||a.e!==B.cA)throw A.b(A.i("configuration transition is not open"))}}
A.lC.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.N(n,A.v(n).i("N<1,2>")).gv(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.b(A.o("PostProcessState."+l+" must be >= 0: "+A.y(k),i))}n=j.ay
if(n<1||n>8)throw A.b(A.o("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.b(A.o("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),i))
if(r>1)throw A.b(A.o("PostProcessState.surfaceWetness must be in [0, 1]: "+A.y(r),i))
if(q>1)throw A.b(A.o("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.y(q),i))
if(p>1)throw A.b(A.o("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.y(p),i))
if(o>1)throw A.b(A.o("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(o),i))}}
A.i9.prototype={
gig(){var s,r=this,q=r.x
if(q===$){s=r.b.ie()
r.x!==$&&A.nC()
r.x=s
q=s}return q}}
A.um.prototype={}
A.kT.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gT(0)||!h.b.gT(0)||!h.fx.gT(0)||!h.r.gT(0)||!h.dx.gT(0))throw A.b(A.o("FrameEnvironment colors must be finite",g))
s=h.k4
if(s!=null){r=!0
if(B.c.aP(s.a).length!==0)if(s.c.gT(0))if(s.d.gT(0))if(s.e.gT(0))if(isFinite(0.08))if(isFinite(0.0025))if(isFinite(0))if(isFinite(1)){q=s.z
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.Q
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.as
if(q>0)if(q<=1e5)if(isFinite(q)){q=s.at
if(q>0)if(q<=1e5)if(isFinite(q)){q=s.ax
if(!(q<=0))if(!(q>1))if(isFinite(q)){q=s.ay
if(isFinite(q)){p=s.ch
if(isFinite(p))if(!(Math.abs(q)>1000))if(!(Math.abs(p)>1000))if(isFinite(s.CW)){q=s.cx
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.cy
if(!(q<0))if(!(q>1))if(isFinite(q)){s=s.db
s=s<4||s>24}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r
else s=r}else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
if(s)A.f(A.o("SkyboxDeclaration contains invalid values",g))}s=h.c
if(isFinite(s)){r=h.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.o("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.b(A.o("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),g))
s=h.go
if(s!=null)s.A()
for(s=h.id,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.f(A.o("PointLight.position must be finite: "+q.t(0),g))
q=n.d
if(!isFinite(q)||q<0)A.f(A.o("PointLight.intensity must be >= 0: "+A.y(q),g))
q=n.e
if(!isFinite(q)||q<=0)A.f(A.o("PointLight.radius must be > 0: "+A.y(q),g))}for(s=h.k1,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.f(A.o("SpotLight.position must be finite: "+q.t(0),g))
q=n.c
p=q.a
if(isFinite(p)&&isFinite(q.b)&&isFinite(q.c)){m=q.b
l=q.c
l=p*p+m*m+l*l<1e-12
p=l}else p=!0
if(p)A.f(A.o("SpotLight.direction must be finite and nonzero: "+q.t(0),g))
if(n.w<=n.r)A.f(A.o("SpotLight.outerConeRadians must exceed innerConeRadians",g))}s=t.N
k=A.a_(s)
for(r=h.k2,q=r.length,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){j=r[o]
j.A()
p=j.a
if(!k.k(0,p))throw A.b(A.o("FrameEnvironment.volumetricSources contains duplicate id: "+p,g))}r=h.w
q=!0
if(!(r<0))if(isFinite(r)){r=h.x
if(!(r<0))if(!(r>0.5))if(isFinite(r)){r=h.y
if(!(r<=-0.999))if(!(r>=0.999))if(isFinite(r)){r=h.z
if(!(r<0))if(!(r>0.5))if(isFinite(r)){r=h.Q
if(!(r<0))if(!(r>8))if(isFinite(r)){r=h.as
if(r>=4)if(r<=24){r=h.at
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ax
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ay
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ch
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.CW
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.cx
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.cy
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.db
if(!(r<0))if(!(r>0.01))if(isFinite(r)){r=h.dy
if(!(r<0))if(!(r>4))if(isFinite(r)){r=h.fr
r=r>1||!isFinite(r)}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
if(r)throw A.b(A.o("invalid volumetric medium controls",g))
i=A.a_(s)
for(s=h.k3,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){j=s[o]
q=j.a
p=!0
if(B.c.aP(q).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){p=j.d
p=!isFinite(p)||m<=0||p<0||p>1}}}if(p)A.f(A.o("thermal source is invalid",g))
if(!i.k(0,q))throw A.b(A.o("FrameEnvironment.thermalSources contains duplicate id: "+q,g))}}}
A.kU.prototype={}
A.dP.prototype={
aa(a,b){if(b==null)return!1
return J.eY(b)===A.Ag(this)&&b instanceof A.dP&&this.a===b.a&&this.b===b.b},
gU(a){return A.cP(A.Ag(this),this.a,this.b,B.h,B.h,B.h)}}
A.bL.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bt.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c6.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.lx.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cJ.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.f8.prototype={
B(){return"HandleRejection."+this.b}}
A.l2.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.aT.prototype={
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.aT&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kI.prototype={
A(){var s=this.a
if(!s.gT(0)||s.gbg()<1e-12)throw A.b(A.o("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.b(A.o("DirectionalLight.intensity must be >= 0: "+A.y(s),null))}}
A.lB.prototype={
gF(){return this.a}}
A.bO.prototype={
gF(){return this.a}}
A.yN.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:89}
A.fS.prototype={
B(){return"AlphaMode."+this.b}}
A.iC.prototype={
B(){return"MaterialMapColorSpace."+this.b}}
A.cO.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.o("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.o("MaterialDefinition.emissiveStrength must be >= 0: "+A.y(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.b(A.o("MaterialDefinition.normalStrength must be >= 0: "+A.y(s),k))
A.lk("roughness",l.at)
A.lk("metallic",l.ax)
A.lk("occlusionStrength",1)
A.lk("clearcoatStrength",l.ch)
A.lk("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.b(A.o("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a5("uvScaleU",s),new A.a5("uvScaleV",r),new A.a5("uvOffsetU",0),new A.a5("uvOffsetV",0),new A.a5("tintR",l.d),new A.a5("tintG",l.e),new A.a5("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.o("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.b(A.o("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.b(A.o("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.y(s),k))}}
A.cT.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.bc.prototype={}
A.jb.prototype={
A(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.b(A.o("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.b(A.o(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.b(A.o(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.B(s)
r=j.i("l(1)").a(new A.uS())
for(s=B.a.gv(s),j=new A.U(s,r,j.i("U<1>"));j.m();)if(s.gp().c!==4)throw A.b(A.o(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.uS.prototype={
$1(a){return t.qY.a(a).a===B.c7},
$S:29}
A.bW.prototype={
A(){var s,r,q,p,o,n=this,m=n.a
m.A()
s=n.b.length
m=m.b
if(B.d.O(s,m)!==0)throw A.b(A.o("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.lJ()
r=n.c
if(r!=null){q=B.d.ba(s,m)
for(m=A.Fz(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.b(A.o("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gT(0)&&m.b.gT(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.b(A.o("MeshData.localBounds must be a valid AABB",null))},
lJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.B(a4),a6=a5.i("l(1)")
a5=a5.i("I<1>")
s=new A.I(a4,a6.a(new A.r8()),a5)
if(!s.gv(0).m())return
r=new A.I(a4,a6.a(new A.r9()),a5)
if(r.gu(0)!==1)throw A.b(A.o("surface-v2 tangent data requires one normal slot",a2))
q=s.gbj(0)
p=r.gbj(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.ba(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
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
if(!B.a.a2(A.c([i,g,f,e,d,c,b],o),new A.ra()))throw A.b(A.o("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.b(A.o("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.b(A.o("surface-v2 tangent must be orthogonal to its normal: "+A.y(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.b(A.o("surface-v2 tangent handedness must be -1 or +1: "+A.y(b),a2))}}}
A.r8.prototype={
$1(a){return t.qY.a(a).a===B.c7},
$S:29}
A.r9.prototype={
$1(a){return t.qY.a(a).a===B.ej},
$S:29}
A.ra.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.kC.prototype={$iG7:1}
A.ry.prototype={
A(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.o("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.rz()))throw A.b(A.o("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.o("resource history does not match vhsOutput ownership",null))}}
A.rz.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.hs.prototype={
B(){return"ResourceAssemblyState."+this.b}}
A.lE.prototype={}
A.lP.prototype={
ib(a){var s=this
if(s.d)A.f(A.i("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.i("resource assembler is initialized"))
a.A()
s.a=a
s.c=1},
du(a){var s=this
if(s.d)A.f(A.i("resource assembler is disposed"))
if(s.a==null)throw A.b(A.i("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.i("resource assembly is already open"))
a.A()
return s.b=new A.lE(s.c,a,B.bR)},
cd(a){var s,r=this
if(r.d)A.f(A.i("resource assembler is disposed"))
r.h9(a)
s=r.c
if(a.a!==s)throw A.b(A.i("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.n9
r.b=null},
eP(a){if(this.d)A.f(A.i("resource assembler is disposed"))
this.h9(a)
a.c=B.na
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.i("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
h9(a){if(this.b!==a||a.c!==B.bR)throw A.b(A.i("resource assembly is not prepared"))}}
A.h5.prototype={
B(){return"DrawMode."+this.b}}
A.kq.prototype={
B(){return"BlendMode."+this.b}}
A.bb.prototype={}
A.m2.prototype={
A(){var s=this
if(s.a<0||s.b<0)throw A.b(A.o("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.o("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.o("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.ib.prototype={
B(){return"ColorEncoding."+this.b}}
A.h4.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.iX.prototype={
A(){var s,r=this,q=null
r.a.A()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.o("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.o("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.o("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.o("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fl.prototype={
B(){return"RendererState."+this.b}}
A.aY.prototype={}
A.pw.prototype={
io(a){var s=this.z.h(0,a)
return s==null?B.cP:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.fd.prototype={
B(){return"MaterialResidencyStatus."+this.b}}
A.db.prototype={}
A.c7.prototype={}
A.r5.prototype={
cK(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.r6(a)),r.i("I<1>")).gu(0)}}
A.r6.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:94}
A.r3.prototype={
dv(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.n(s,t.jt)
q=A.c([],t.r8)
p=A.n(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.u)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.f(A.o("material residency key is empty",null))
k=m.b
k.A()
if(r.K(l))throw A.b(A.o("material residency keys must be unique: "+l,null))
r.l(0,l,m)
j=A.n(s,s)
for(k=A.Dj(k),i=k.$ti,k=new A.cf(k.a(),i.i("cf<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.l(0,e,c)
B.a.k(q,new A.c0(c,d,g))}p.l(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.dv(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.l(0,b.a.a,b.b)}o=r.$ti.i("ao<2>")
a=A.K(new A.ao(r,o),o.i("r.E"))
B.a.Y(a,new A.r4())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.lp(m,k,s))}return new A.r5(A.ab(o,t.wl))},
lp(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.N(b,A.v(b).i("N<1,2>")).gv(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.l(0,n,m)}p=A.Fx(new A.ao(q,q.$ti.i("ao<2>")))
A.aW(q,s,r)
return new A.c7(a,p)}}
A.r4.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:100}
A.ll.prototype={
oP(a){return this.a.bA(a)}}
A.r7.prototype={
$3(a,b,c){return new A.c6(A.h(a),A.h(b),A.aq(c))},
$S:54}
A.m7.prototype={}
A.rb.prototype={
bc(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.C0(b,new A.kZ(a.byteLength,B.d2,B.j0))
if(b.b!==B.j)A.f(A.i(c))
s=A.a(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cw(b)
A.bj(b,p)
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a_(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.Dg(h.a)
if(!l.k(0,g))continue
f=A.HU(o,g,h)
if(b.b!==B.j)A.f(A.i(c))
r.vertexAttribPointer.apply(r,[g,f,A.h(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.f(A.i(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.C0(b,new A.kZ(A.Bf(e),B.d2,B.d1))
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(d.a))
A.GK(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.m7(a0,d,p,b,B.d.ba(a.length,n),t.Dd.b(e))},
ct(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.et(B.aO,a))
this.b.bA(a)
return s},
aK(a){var s,r,q=this.c.a8(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.aK(a)},
eL(){var s,r,q,p
for(s=this.b.bT(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bc(p.b))}},
gcq(){return this.b.bT().b6(0,0,new A.rd(),t.S)}}
A.rc.prototype={
$3(a,b,c){return new A.bL(A.h(a),A.h(b),A.aq(c))},
$S:112}
A.rd.prototype={
$2(a,b){var s,r
A.h(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.Bf(s)
return a+r+s},
$S:114}
A.i8.prototype={}
A.re.prototype={
mY(a){var s,r,q,p,o=A.JN(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.i("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.l(0,s,q+1)
r.toString
return r}p=new A.i8(o,1,A.JT(A.Dq(a)))
m.l(0,n,p)
this.c.l(0,n,1)
return p},
aK(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.b(A.i("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a8(0,p)
q.a8(0,p)}else s.l(0,p,r-1)}}
A.rg.prototype={
C(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hk.prototype={
j8(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.i("model package binding is disposed"))
if(a8.x==null)throw A.b(A.i("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.u)(s),++i){h=k.a(s[i])
q.Z(h)
g=h.a
if(!(g>=0&&g<j.length))return A.d(j,g)
f=j[g].c
if(f==null)f=l.a(f)
e=f.c
e.A()
d=n.a(f.a)
p.Z(d)
c=d.a
if(!(c>=0&&c<m.length))return A.d(m,c)
b=m[c].c
a=(b==null?o.a(b):b).d
a0=e.ae()
a=a.gal()
a1=A.B(a)
A.b1(new A.H(a,a1.i("C(1)").a(a0.gap()),a1.i("H<1,C>")))
a1=f.b
a0=f.e
a=f.f
a2=f.r
a3=f.w
a4=f.x
a5=f.y
e.A()
p.Z(d)
if(!(c<m.length))return A.d(m,c)
b=m[c].c
c=(b==null?o.a(b):b).d
a6=e.ae()
c=c.gal()
a7=A.B(c)
A.b1(new A.H(c,a7.i("C(1)").a(a6.gap()),a7.i("H<1,C>")))
a5=l.a(new A.bb(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.Z(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb3(a5)}},
a_(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fX(s,r,q.x)
B.a.P(s)
B.a.P(r)
q.x=null},
jZ(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.FB(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
if(typeof e!=="number")return e.cA()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a3=A.i("invalid material for package slot "+r.b)
throw A.b(a3)}e=B.a.h(a4.b,s).c
d=r.a
if(g.x)A.f(A.i("resource library is disposed"))
c=g.a
e.A()
b=c.b.aG(e,a3+d+":"+a7)
c.c.l(0,b.a,c.bc(e))
g.f.k(0,b)
p=b
J.e9(a5,p)
e=p
m.A()
i.a(e)
k.Z(e)
c=e.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a=h[c].c
d=(a==null?j.a(a):a).d
c=m.ae()
d=d.gal()
a0=A.B(d)
A.b1(new A.H(d,a0.i("C(1)").a(c.gap()),a0.i("H<1,C>")))
J.e9(a6,n.b.bO(new A.bb(e,q,m,l,B.U,B.K,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a4()
s=e+1}return new A.jz(a4,a6,a5)}catch(a1){a2.fX(a6,a5,a4)
throw a1}},
fX(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.B(a).i("bM<1>"),r=new A.bM(a,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.d.b,s=s.i("a0.E");r.m();){p=r.d
q.aK(p==null?s.a(p):p)}for(s=A.B(b).i("bM<1>"),r=new A.bM(b,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.c,s=s.i("a0.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.i("resource library is disposed"))
q.a.aK(p)
q.f.a8(0,p)}if(c!=null)c.oC()}}
A.cR.prototype={
B(){return"QmeshRejection."+this.b}}
A.lJ.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.y4.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.c0.prototype={}
A.dT.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.cb.prototype={}
A.uD.prototype={
cU(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.uE(a)),r.i("I<1>")).gu(0)}}
A.uE.prototype={
$1(a){return t.h.a(a).b===this.a},
$S:120}
A.uB.prototype={
dv(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.o("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a7(n,"handle","must be valid"))
if(s.K(o))throw A.b(A.o("TextureResidencyRequest keys must be unique: "+o,null))
s.l(0,o,p)}r=s.$ti.i("ao<2>")
m=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(m,new A.uC())
r=t.Aj
l=A.a_(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.k(0,o)){i=this.lc(o)
k.l(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.k(j,new A.cb(p,i))}r=l.a
return new A.uD(A.ab(j,t.h),r)},
lc(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.t()
if(s.cV(a,r)===s.d)return B.ee
this.b.l(0,a,!0)
return B.ed}catch(q){if(A.ah(q) instanceof A.l2){s=this.b.h(0,a)===!0?B.eg:B.ef
return s}else throw q}}}
A.uC.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:121}
A.dn.prototype={}
A.m4.prototype={
b1(a){var s=this.a,r=A.zo(s,B.j5)
A.zp(s,r,0,a)
return r},
pa(a,b){var s,r,q,p=this,o=p.b,n=o.bA(a),m=A.K(n.b,t.Fx)
B.a.l(m,0,b)
s=n.a
o.eV(a,new A.dn(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.zo(p.a,s)
o.l(0,r,q)}A.zp(p.a,q,0,b)},
nt(a){var s,r=this.b,q=r.bA(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.i("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.C1(this.a,s)
r.eV(a,new A.dn(p,q.b,!0))},
nM(a){return B.a.a2(this.b.bA(a).b,new A.uG())},
cV(a,b){var s
this.b.bA(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oL(a){var s
if(a==null){s=this.d
s===$&&A.t()
return s}s=this.d
s===$&&A.t()
return this.cV(a,s)},
oU(a){var s
if(a==null){s=this.e
s===$&&A.t()
return s}s=this.e
s===$&&A.t()
return this.cV(a,s)},
oW(a){var s=this.f
s===$&&A.t()
return s},
oN(a){var s=this.r
s===$&&A.t()
return s},
oS(a){var s=this.w
s===$&&A.t()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>")),q=n.a,p=q.a,o=t.p;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.P(0)
s=n.d
s===$&&A.t()
A.mo(q,s)
s=n.e
s===$&&A.t()
A.mo(q,s)
s=n.f
s===$&&A.t()
A.mo(q,s)
s=n.r
s===$&&A.t()
A.mo(q,s)
s=n.w
s===$&&A.t()
A.mo(q,s)},
eL(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b1($.Ap())
i.e=i.b1($.Am())
i.f=i.b1($.An())
i.r=i.b1($.Al())
i.w=i.b1($.Ao())
for(s=i.b.bT(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.uI()))continue
l=A.zo(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.zp(p,l,k,j)}if(m.c)A.C1(p,l)
q.l(0,n.a,l)}},
gcq(){return this.b.bT().b6(0,0,new A.uH(),t.S)}}
A.uF.prototype={
$3(a,b,c){return new A.bt(A.h(a),A.h(b),A.aq(c))},
$S:127}
A.uG.prototype={
$1(a){return t.Fx.a(a)!=null},
$S:32}
A.uI.prototype={
$1(a){return t.Fx.a(a)==null},
$S:32}
A.uH.prototype={
$2(a,b){var s
A.h(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:135}
A.bi.prototype={
B(){return"SolarPhase."+this.b}}
A.uq.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a5("timeHours",e.a),new A.a5("solarNoonHours",s),new A.a5("latitudeRadians",r),new A.a5("solarDeclinationRadians",q),new A.a5(d,p),new A.a5(c,o),new A.a5("aerosolTurbidity",n),new A.a5(b,m),new A.a5("solarIntensity",e.x),new A.a5("baseFogDensity",l),new A.a5("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.b(A.o(g+" must be finite",a))}if(s>=24)throw A.b(A.o("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.b(A.o("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.b(A.o("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a5(d,p),new A.a5(c,o),new A.a5(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.b(A.o(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.b(A.o("solar attenuation inputs are out of bounds",a))}}
A.hz.prototype={
gF(){return this.a}}
A.cu.prototype={
A(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gT(0)){s=p.c
if(s.gT(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.b(A.o("invalid volumetric source "+o,null))},
gF(){return this.a}}
A.yO.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.c.I(a.b.a,b.b.a):s},
$S:138}
A.v5.prototype={}
A.dI.prototype={
gnG(){return this.b.length}}
A.kQ.prototype={
ma(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.td(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].az(s,b)
o=s.m9(a,!1)
if(o.b.length!==0)return new A.kR(o,B.kx)
q=o.a
n=A.B(q)
m=new A.H(q,n.i("e(1)").a(new A.pp()),n.i("H<1,e>")).b9(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.av(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.u)(n),++i){h=n[i]
if(!m.q(0,h.gG().a))throw A.b(A.i('RenderFeature "'+k.gF()+'" created a pass "'+h.gG().a+'" that it never declared into the graph'))
B.a.k(l,h)}}B.a.Y(l,new A.pq(o))
return new A.kR(o,l)},
bP(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a_()}}
A.pp.prototype={
$1(a){return t.A.a(a).a},
$S:139}
A.pq.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.I(B.a.eA(s,new A.pn(a)),B.a.eA(s,new A.po(b)))},
$S:142}
A.pn.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.po.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.kR.prototype={}
A.f5.prototype={
B(){return"FrameQueueState."+this.b}}
A.kV.prototype={
c2(a){var s,r,q=this
if(q.b!==B.ar)throw A.b(A.i("FrameQueue.submit called outside an active frame"))
a.c.A()
s=q.c
r=q.a
if(s<r.length)B.a.l(r,s,a)
else B.a.k(r,a);++q.c},
$iG0:1}
A.pv.prototype={
m6(a){if(a.length===0)throw A.b(A.a7(a,"passId",null))
this.b=a
this.a.bV(a,A.Ds())},
jo(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=r.b
o.l(0,q,new A.aY(p.a,p.b,p.d))}return A.aW(o,t.N,t.pH)},
bJ(a,b){var s,r=this.b
if(r==null)throw A.b(A.i("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.o("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.af(a,3)*b}}
A.hE.prototype={}
A.aw.prototype={
gbW(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rC()),r.i("I<1>"))},
gcz(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rD()),r.i("I<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"},
gF(){return this.a}}
A.rC.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.R},
$S:25}
A.rD.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:25}
A.co.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.bz.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iZ.prototype={
B(){return"ResourceFormat."+this.b}}
A.d5.prototype={
B(){return"GraphStage."+this.b}}
A.aO.prototype={
ij(){var s=this
return new A.aO(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aO&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gU(a){var s=this
return A.cP(s.a,s.b,s.c,s.d,s.e,s.f)},
t(a){var s=this,r=s.b.t(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.hr.prototype={
B(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.ic.prototype={
gF(){return this.a}}
A.lH.prototype={
aB(a){var s,r,q,p,o,n,m=this
a.A()
s=null
try{r=t.a
s=A.GN(m.a,a.c,r.a(a.d.ga3().bE(0)),r.a(a.f),a.b)}catch(q){if(A.ah(q) instanceof A.j1){++m.e
throw q}else throw q}r=a.a
p=new A.ic(r,s)
o=m.b
n=o.h(0,r)
o.l(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bP(){var s=this.b
this.kt(new A.ao(s,A.v(s).i("ao<2>")))
s.P(0)},
kt(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bg.prototype={
A(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.o("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gN(),q=q.gv(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.b(A.o('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.b(A.o('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gN(),s=s.gv(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.b(A.o('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.b(A.o('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gF(){return this.a}}
A.tb.prototype={}
A.ba.prototype={
aj(){var s=this
return A.AQ(B.eT,s.f,B.aG,B.am,!0,!0,!0,!0,s.r,B.aK,B.aL,s.d,s.e,!0,!1,!1)},
gF(){return this.a}}
A.td.prototype={
m9(a,b){var s=this.lI(t.Q.a(a),!1),r=this.a,q=A.B(r)
return new A.tc(A.ab(new A.I(r,q.i("l(1)").a(new A.ti()),q.i("I<1>")),t.A),s)},
lI(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.B(r)
p=q.i("I<1>")
o=A.K(new A.I(r,q.i("l(1)").a(new A.th()),p),p.i("r.E"))
m.k8(o,a,s)
m.kc(o,s)
m.ke(o,s)
m.kb(o,!1,s)
n=m.kg(o,s)
m.kd(o,n,s)
m.kf(o,s)
m.ka(o,n,s)
m.k9(o,s)
return s},
k8(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.ac.bB(b)
if(p.a!==0)B.a.k(c,new A.bz(B.jh,q.a,"missing capabilities: "+p.W(0,", ")))}},
kc(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbW(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bz(B.jc,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
ke(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.B(a),r=s.i("l(1)").a(new A.tg()),q=B.a.gv(a),s=new A.U(q,r,s.i("U<1>"));s.m();){r=q.gp()
p=r.gbW()
o=A.K(p,p.$ti.i("r.E"))
p=r.gcz()
n=A.K(p,p.$ti.i("r.E"))
if(o.length!==1||n.length!==1){B.a.k(b,new A.bz(B.bf,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbj(o).a
l=B.a.gbj(n).a
if(m.e<=1||l.e>1)B.a.k(b,new A.bz(B.bf,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.k(b,new A.bz(B.bf,r.a,"resolve source and destination must match format and extent"))}},
kb(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.R)B.a.k(c,new A.bz(B.jf,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kg(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcz(),n=J.O(o.a),o=new A.U(n,o.b,o.$ti.i("U<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bz(B.jb,m,l.t(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
kd(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbW(),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.R)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bz(B.d6,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bC(a,m)>s)B.a.k(c,new A.bz(B.d6,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
kf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbW(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.R)continue
for(l=q.gcz(),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bz(B.je,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
ka(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbW(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.R)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcz().an(0,new A.tf(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bz(B.jd,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
k9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcz(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.qD(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbW(),p=J.O(s.a),s=new A.U(p,s.b,s.$ti.i("U<1>"));s.m();){o=p.gp()
if(o.b===B.R)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.d9(s,!1,!1,p)
s=a.length
i=A.d9(s,!1,!1,p)
h=new A.te(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bz(B.jg,a[q].a,"participates in a resource dependency cycle"))}}}}
A.ti.prototype={
$1(a){t.A.a(a)
return A.zg()},
$S:12}
A.th.prototype={
$1(a){t.A.a(a)
return A.zg()},
$S:12}
A.tg.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.tf.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:25}
A.te.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.d(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.d(s,a)
if(s[a])return!1
B.a.l(n,a,!0)
r=o.c
if(!(a<r.length))return A.d(r,a)
r=r[a]
r=A.fE(r,r.r,A.v(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:22}
A.tc.prototype={}
A.mI.prototype={$ica:1,
gF(){return this.a},
gG(){return this.b},
gf_(){return this.c}}
A.iW.prototype={
lM(a){var s,r,q,p=a.c
p.A()
s=this.a.bA(a.a)
p=p.ae()
r=s.d.gal()
q=A.B(r)
return A.b1(new A.H(r,q.i("C(1)").a(p.gap()),q.i("H<1,C>")))},
gih(){return new A.bI(this.nQ(),t.Br)},
nQ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gih(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bT(),n=o.$ti,o=new A.cf(o.a(),n.i("cf<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.A()
f=k.a(g.a)
m.Z(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ae()
f=f.gal()
d=A.B(f)
r=5
return a.b=new A.mI(h,g,A.b1(new A.H(f,d.i("C(1)").a(i.gap()),d.i("H<1,C>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iG3:1}
A.tj.prototype={
$3(a,b,c){return new A.cJ(A.h(a),A.h(b),A.aq(c))},
$S:163}
A.lO.prototype={
ghj(){var s=this.d
return s===$?this.d=new A.uB(this.c,A.n(t.Aj,t.y)):s},
dz(a,b){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
s=this.a
a.A()
r=s.b.aG(a,b)
s.c.l(0,r.a,s.bc(a))
this.f.k(0,r)
return r},
oD(a){if(this.x)A.f(A.i("resource library is disposed"))
this.a.aK(a)
this.f.a8(0,a)},
iy(a,b,c,d,e,f,g){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.o("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.o("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aG(new A.dn(new A.l0(f,d,1,!0,e,B.bd,g,a),A.d9(1,null,!1,t.Fx),!1),b)
this.w.k(0,r)
return r},
dA(a,b,c,d,e,f){return this.iy(a,b,c,d,e,f,B.d4)},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.K(s,A.v(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.p
l=0
for(;l<r.length;r.length===q||(0,A.u)(r),++l){k=r[l]
j=o.a8(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aK(k)}r=i.r
q=A.K(r,A.v(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.aK(q[l])
q=i.f
o=A.K(q,A.v(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.aK(o[l])
s.P(0)
r.P(0)
q.P(0)
p.a_()
i.x=!0},
$iG5:1}
A.vy.prototype={}
A.n6.prototype={$ica:1,
gF(){return this.a},
gG(){return this.b},
gf_(){return this.c}}
A.xf.prototype={
$1(a){var s=this.a.w.a.ct(a),r=s.b!=null,q=r?s.d:s.e
return new A.iY(s.c,r,q,s.f)},
$S:173}
A.xg.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gp().ik(a)
if(b!=null&&s.q(0,b))return this.b.x.gp().ik(b)
throw A.b(A.i("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:185}
A.xe.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.x7.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga1(r)},
$S:191}
A.x8.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bv
s=q.b.k1
r=s.length===0?null:B.a.ga1(s)
return A.Ki(s,3,q.a.d,r)},
$S:203}
A.xd.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.x2.prototype={
$0(){return this.a.at.a},
$S:55}
A.x4.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.x3.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.xc.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.x0.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.x1.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.x9.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.xa.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.xb.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.t()
return s},
$S:5}
A.x6.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.x5.prototype={
$0(){return this.a.at.w},
$S:56}
A.xi.prototype={
$0(){return this.a},
$S:57}
A.xj.prototype={
$0(){var s,r,q=this.a.b.k4,p=q==null?null:q.b
if(p==null||!this.b.w.c.nM(p))return null
s=this.b.w.c
r=s.d
r===$&&A.t()
return s.cV(p,r)},
$S:58}
A.we.prototype={}
A.mT.prototype={$iG2:1}
A.mF.prototype={$iF7:1}
A.tr.prototype={
gaO(){var s=this.w
return s==null?A.f(A.i("renderer is not initialized")):s},
ic(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bP)throw A.b(A.i("renderer can only be initialized once"))
a.A()
b.A()
s=m.a
if(s.b===B.a1)throw A.b(A.i("renderer device is context lost"))
m.e=B.n8
try{m.r=s.iw()
r=m.b
q=A.iK(a)
p=r.a
if(p.a!=null)A.f(A.i("configuration state is already initialized"))
a.A()
p.a=a
p.b=A.iK(a)
p.d=1
r.b.ib(q)
r=A.Fy()
m.w=new A.lO(A.FA(s),r,A.Gn(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.lP()
p=new A.pT(s,r)
q=A.iK(a)
o=p.dV(q,a)
r.ib(q)
p.c=new A.hm(new A.lE(0,q,B.bR),o,B.as)
m.x=p
m.y=new A.lH(s,A.n(t.N,t.CH))
m.as=a
A.CI(m)
m.e=B.bQ}catch(n){s=m.y
if(s!=null)s.bP()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bP
throw n}return A.AU(t.H)},
m4(a,b){var s,r,q,p,o,n,m=this,l=null
m.lj()
m.c5()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.o("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.i("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gT(0))A.f(A.o("CameraView.eye must be finite: "+q.t(0),l))
q=r.e
if(!q.gT(0)||q.gbg()<1e-12)A.f(A.o("CameraView.forward must be finite and nonzero: "+q.t(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.f(A.o("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.f(A.o("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gT(0)||!r.b.gT(0)||!r.c.gT(0))A.f(A.o("CameraView matrices must be finite",l))
b.b.A()
b.c.A()
r=b.w
if(!isFinite(r))A.f(A.o("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ar)A.f(A.i("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ar
o.c=0
B.a.P(o.a)
s=o
try{r=m.r
if((r==null?A.f(A.i("renderer is not initialized")):r).z)m.b$=m.a.m5()
return s}catch(n){if(o.b!==B.ar)A.f(A.i("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.iN
m.fk()
m.ax=m.at=null
throw n}},
nl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c5()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.i("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ar)A.f(A.i("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hy(l,0,A.e7(m.c,"count",t.S),A.B(l).c).bY(0,!1)
m.b=B.iM
q=k
try{p=A.I5(a1,r,s,q)
o=p.a.jo()
m=o.gN().dF(0,new A.ts())
l=m.$ti
n=new A.cN(m,l.i("aY(1)").a(new A.tt()),l.i("cN<1,aY>")).b6(0,B.cP,new A.tu(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcq()
g=g.c.gcq()
e=a1.w
e.a.gcq()
e.c.gcq()
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
return new A.pw(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kE(s.e)
a1.ax=a1.at=null}},
lj(){var s,r,q,p=this
if(p.e!==B.dZ)return
if(p.a.b===B.a1)throw A.b(A.i("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.i("resource library is disposed"))
s.a.eL()
s.c.eL()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.i("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.i("GPU resource adapter is not initialized"))
s.c=new A.hm(q.a,s.dV(A.iK(r),r),B.as)
s=p.y
s.c=null
s.b.P(0)
A.CI(p)
p.e=B.bQ},
c5(){var s=this,r=s.e
if(r!==B.bQ)throw A.b(A.i("renderer is not ready: "+r.b))
if(s.a.b===B.a1){s.ku()
s.e=B.dZ
throw A.b(A.i("renderer context lost"))}}}
A.ts.prototype={
$1(a){return B.c.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:59}
A.tt.prototype={
$1(a){return t.h6.a(a).b},
$S:60}
A.tu.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aY(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:61}
A.mQ.prototype={}
A.vK.prototype={
kE(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.f(A.i(u.k))
r=s.hl(o)
if(r.b)A.f(A.i("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.k(p.a$,new A.mQ(o))}catch(q){p.dX(o)}},
fk(){var s=this.b$
this.b$=null
if(s!=null)this.dX(s)},
ku(){var s,r,q
this.fk()
s=this.a$
r=J.z6(s.slice(0),A.B(s).c)
B.a.P(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.dX(r[q].b)},
dX(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hl(a).a)}catch(r){}}}
A.mX.prototype={}
A.j3.prototype={
B(){return"ShadowCasterLod."+this.b}}
A.bX.prototype={
I(a,b){var s,r=this
t.BB.a(b)
s=B.d.I(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.I(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.I(r.c.a,b.c.a)
if(s!==0)return s
return B.d.I(r.d,b.d)},
$ibp:1}
A.bT.prototype={
I(a,b){var s
t.z3.a(b)
s=B.b.I(b.a,this.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
$ibp:1}
A.b3.prototype={}
A.yS.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.I(0,s.a(b).a)},
$S:62}
A.yT.prototype={
$1(a){return t.E0.a(a).b},
$S:63}
A.yQ.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.I(0,s.a(b).a)},
$S:64}
A.yR.prototype={
$1(a){return t.EH.a(a).b},
$S:65}
A.p7.prototype={}
A.p6.prototype={}
A.fR.prototype={
gal(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.C(o,n,p),new A.C(r,n,p),new A.C(o,q,p),new A.C(r,q,p),new A.C(o,n,s),new A.C(r,n,s),new A.C(o,q,s),new A.C(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fg.prototype={}
A.h8.prototype={
B(){return"FrustumTest."+this.b}}
A.px.prototype={
iC(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b9
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.iO:B.iP}}
A.py.prototype={
$4(a,b,c,d){var s=new A.C(a,b,c),r=new A.fg(s,d),q=Math.sqrt(s.gbg())
return q<1e-9?r:new A.fg(s.a9(0,1/q),d/q)},
$S:66}
A.da.prototype={
a9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.da(h)},
iE(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
eE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.f(A.i("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.y(k)+")"))
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
return new A.da(h)},
ie(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.qD(4,t.cE)
for(s=t.n,r=this.a,q=r.length,p=0;p<4;++p){if(!(p<q))return A.d(r,p)
o=r[p]
n=4+p
if(!(n<q))return A.d(r,n)
n=r[n]
m=8+p
if(!(m<q))return A.d(r,m)
m=r[m]
l=12+p
if(!(l<q))return A.d(r,l)
l=r[l]
k=p===0?1:0
j=p===1?1:0
i=p===2?1:0
a1[p]=new Float64Array(A.S(A.c([o,n,m,l,k,j,i,p===3?1:0],s)))}for(h=0;h<4;h=p){s=a1[h]
if(!(h<s.length))return A.d(s,h)
g=Math.abs(s[h])
for(p=h+1,f=p,e=h;f<4;++f){r=a1[f]
if(!(h<r.length))return A.d(r,h)
d=Math.abs(r[h])
if(d>g){g=d
e=f}}if(!isFinite(g)||g<1e-12)throw A.b(A.i("Mat4.inverse: singular matrix"))
if(e!==h){if(!(e>=0&&e<4))return A.d(a1,e)
a1[h]=a1[e]
a1[e]=s}s=a1[h]
if(!(h<s.length))return A.d(s,h)
c=s[h]
for(b=0;b<8;++b){if(!(b<s.length))return A.d(s,b)
r=s[b]
s.$flags&2&&A.aV(s)
s[b]=r/c}for(f=0;f<4;++f){if(f===h)continue
s=a1[f]
if(!(h<s.length))return A.d(s,h)
a=s[h]
if(a===0)continue
for(b=0;b<8;++b){if(!(b<s.length))return A.d(s,b)
r=s[b]
q=a1[h]
if(!(b<q.length))return A.d(q,b)
q=q[b]
s.$flags&2&&A.aV(s)
s[b]=r-a*q}}}a0=new Float32Array(16)
for(p=0;p<4;++p)for(h=0;h<4;++h){s=h*4+p
r=a1[p]
q=4+h
if(!(q<r.length))return A.d(r,q)
q=r[q]
if(!(s<16))return A.d(a0,s)
a0[s]=q}return new A.da(a0)},
gT(a){return B.t.a2(this.a,new A.r2())},
t(a){return"Mat4("+A.y(this.a)+")"}}
A.r2.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.lK.prototype={
t(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.fs.prototype={
A(){var s=this.a
if(!s.gT(0))throw A.b(A.o("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.o("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.o("Transform.scale must be finite and positive: "+A.y(s),null))},
ae(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.Bc(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.Bc(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.y(this.c)+")"}}
A.C.prototype={
a4(a,b){return new A.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ac(a,b){return new A.C(this.a-b.a,this.b-b.b,this.c-b.c)},
a9(a,b){return new A.C(this.a*b,this.b*b,this.c*b)},
be(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.C(s*r-q*p,q*o-n*r,n*p-s*o)},
gbg(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbg())},
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga7(){var s=this,r=Math.sqrt(s.gbg())
return r<1e-9?B.v:new A.C(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.C&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kk.prototype={
B(){return"AtmosphericParticleAnchor."+this.b}}
A.nW.prototype={
A(){if(this.a<0)throw A.b(A.o("atmospheric particle counts must be >= 0",null))},
gnh(){return B.d.n(this.a,0,this.b)}}
A.nZ.prototype={}
A.nX.prototype={}
A.fT.prototype={}
A.nY.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.b(A.o("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.a5("origin",l.d),new A.a5("halfExtents",s),new A.a5("initialVelocity",l.f),new A.a5("acceleration",l.r)],t.c2)
r.push(new A.a5("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.b(A.o("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.b(A.o("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.b(A.o("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.b(A.o("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.b(A.o("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.b(A.o("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.b(A.o("AtmosphericParticleField.particleScale must be finite and > 0",k))},
c_(a,b){var s,r,q,p,o,n=this,m=null
n.A()
s=n.z
if(b>=s)throw A.b(A.b2(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.O(a.w+n.cH(b,0)*r,r)
switch(n.c.a){case 0:s=B.v
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a4(0,n.d).a4(0,new A.C((n.cH(b,1)*2-1)*p.a,(n.cH(b,2)*2-1)*p.b,(n.cH(b,3)*2-1)*p.c))
p=o.a4(0,n.kv(q))
s=n.lK(q)
if(!isFinite(q)||q<0)A.f(A.o("atmospheric particle age must be finite and >= 0",m))
if(!o.gT(0)||!p.gT(0)||!s.gT(0))A.f(A.o("atmospheric particle kinematics must be finite",m))
return new A.fT(q,o,p,s)},
jx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
t.C3.a(c)
i.A()
for(s=i.z,r=i.as,q=i.cy,p=i.at,o=i.a,n=i.b,m=0,l=0;l<s;++l){k=i.c_(b,l)
if(!c.$1(k))continue
j=p?i.fp(k.d):B.aa
a.c2(new A.bb(o,n,new A.fs(k.c,j,r),-1,B.ao,B.K,!1,!1,l,q));++m}return m},
i3(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.A()
s=A.AT(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.c_(a,n)
if(p)h.fp(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.iC(new A.fR(new A.C(k-q,j-q,i-q),new A.C(k+q,j+q,i+q)))!==B.b9)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.o("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.i("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.nZ(r,o,q)},
n3(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.A()
b.A()
s=i.z
r=b.a
q=b.b
if(s!==B.d.n(r,0,q))throw A.b(A.i("atmospheric field count "+s+" does not match budget effective count "+b.gnh()))
p=i.i3(a)
for(o=0,n=0;n<s;++n){m=i.c_(a,n).d
l=m.a
k=m.b
m=m.c
o+=Math.sqrt(l*l+k*k+m*m)}m=B.d.n(r,0,q)
q=B.d.n(r,0,q)!==r
l=p.b
k=p.c
j=s===0?0:o/s
if(r<0||m<0||m>r||s!==m||k<0||l+k!==s||!isFinite(j)||j<0)A.f(A.i("atmospheric diagnostics do not reconcile"))
if(q!==(m!==r))A.f(A.i("atmospheric budget cap state does not reconcile"))
return new A.nX(r,m,q,s,l,k,j)},
lK(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a4(0,this.f.ac(0,s).a9(0,r))},
kv(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a9(0,a).a4(0,this.f.ac(0,s).a9(0,(1-q)/r))},
fp(a){var s,r=a.ga7()
if(r.aa(0,B.v))return B.aa
s=B.b.n(B.a0.be(r),-1,1)
if(s>0.999999)return B.aa
if(s<-0.999999)return A.iR(B.aW,3.141592653589793)
return A.iR(B.a0.bd(r),Math.acos(s))},
cH(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.kS.prototype={}
A.pt.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=!0
if(j.a.a>=0)if(j.b.a>=0){s=j.d
if(isFinite(s))if(!(s<=0)){i=j.e
i=!isFinite(i)||i<=0}}if(i)throw A.b(A.o("invalid flow particle field",null))
for(i=j.c,s=i.length,r=0;r<i.length;i.length===s||(0,A.u)(i),++r){q=i[r]
p=q.a
o=p.a
n=!0
if(isFinite(o)&&isFinite(p.b)&&isFinite(p.c)){m=q.b
l=m.a
if(isFinite(l)&&isFinite(m.b)&&isFinite(m.c)){k=q.c
if(isFinite(k))if(!(k<=0)){k=q.d
if(isFinite(k))if(!(k<=0))if(q.e>=0){o=l-o
n=m.b-p.b
p=m.c-p.c
p=Math.sqrt(o*o+n*n+p*p)<0.00001}else p=n
else p=n
else p=n}else p=n
else p=n}else p=n}else p=n
if(p)A.f(A.o("invalid flow path",null))}},
jw(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
b4.A()
for(s=b4.c,r=b6.w,q=b4.d,p=b4.a,o=b4.b,n=b4.e,m=0,l=0;l<s.length;++l){k=s[l]
j=k.b
i=k.a
h=i.a
g=j.a-h
f=i.b
e=j.b-f
i=i.c
j=j.c-i
d=new A.C(g,e,j).ga7()
c=d.b
b=d.bd(Math.abs(c)>0.9?B.aW:B.J).ga7()
a=Math.sqrt(g*g+e*e+j*j)
for(a0=k.e,a1=k.f,a2=k.c,a3=a1^1327217884,a4=k.d,a5=b.a,a6=b.b,a7=b.c,a8=d.a*a2,c*=a2,a9=d.c*a2,b0=l*1e4,b1=0;b1<a0;++b1){b2=B.b.O(B.b.O(r+b4.ho(a1,b1),q)*a2,a)/a
b3=(b4.ho(a3,b1)*2-1)*a4
b5.c2(new A.bb(p,o,new A.fs(new A.C(h+g*b2+a5*b3,f+e*b2+a6*b3,i+j*b2+a7*b3),b4.ls(new A.C(a8,c,a9)),n),-1,B.ao,B.K,!1,!1,b0+b1,1718382455));++m}}return m},
ho(a,b){return(((a^b*73244475)&2147483647)*1103515245+12345&2147483647)/2147483647},
ls(a){var s,r=a.ga7()
if(r.aa(0,B.v))return B.aa
s=B.b.n(B.a0.be(r),-1,1)
if(s>0.999999)return B.aa
if(s<-0.999999)return A.iR(B.aW,3.141592653589793)
return A.iR(B.a0.bd(r),Math.acos(s))}}
A.jh.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.i7.prototype={
gF(){return this.f},
az(a,b){B.a.k(a.a,new A.aw(this.f,B.M,A.c([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
av(a){var s=this,r=s.a.aB(new A.bg(s.e,s.b,s.c,B.y,B.dt,B.dq)),q=A.cw(s.d),p=t.n,o=s.r===B.ew?new Float32Array(A.S(A.c([1/s.Q,0],p))):new Float32Array(A.S(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mw(new A.ba(s.f,A.c([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mw.prototype={
am(a){var s,r,q,p,o=this
if(a.d.f.b<=0)return
s=a.b
r=s.a
A.bG(r,a.aq(o.r).b)
A.bd(r,o.a.aj())
A.cU(r,B.T,1,0,0,0)
A.bP(r,o.b.b)
q=t._
p=o.d
if(o.e)A.GJ(r,0,q.a(p.$0()))
else A.aB(r,0,q.a(p.$0()))
A.m(r,"uSource",B.x)
A.m(r,"uTexelStep",new A.q(B.af,o.f))
A.bj(r,o.c)
s.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.kr.prototype={
gF(){return"bloomComposite"},
az(a,b){B.a.k(a.a,new A.aw("bloomComposite",B.M,A.c([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
av(a){var s=this,r="bloomComposite",q=s.a.aB(new A.bg(r,s.b,s.c,B.y,B.lp,B.l3)),p=A.cw(s.d),o=s.w,n=A.c([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.c([new A.mx(new A.ba(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iap:1}
A.mx.prototype={
am(a){var s,r,q=this,p=a.d.f.b
if(p<=0)return
s=a.b
r=s.a
A.bG(r,a.bZ(q.f).b)
A.BY(r,1)
A.bd(r,B.cG)
A.bP(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.m(r,"uBloom",B.x)
A.m(r,"uBloomStrength",new A.q(B.e,p))
A.bj(r,q.c)
s.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.kE.prototype={
gF(){return"depthPrepass"},
az(a,b){B.a.k(a.a,new A.aw("depthPrepass",B.j8,A.c([new A.Q(this.w,B.k)],t.C),!1))},
av(a){var s=this,r="depthPrepass",q=s.a.aB(new A.bg(r,s.b,s.c,B.ds,B.dr,B.kh))
return A.c([new A.mA(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iap:1}
A.mA.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.d,a0=a.f,a1=b.a
A.bG(a1,a2.aq("sceneDepth").b)
A.bd(a1,d.a.aj())
A.cU(a1,B.b6,1,0,0,0)
A.bP(a1,d.b.b)
A.m(a1,"uVertexSnapGrid",new A.q(B.e,a0.ax))
A.m(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gG()
A.m(a1,"uViewProjection",new A.q(B.o,new Float32Array(A.S(a))))
A.m(a1,"uModel",new A.q(B.o,new Float32Array(A.S(i.c.ae().a))))
A.yP(b,k,!1)
d.lv(b,j.gG().b,p)
h=q.$1(j.gG().a)
i=h.a
if(a1.b!==B.j)A.f(A.i(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.j)A.f(A.i(c))
e=A.h(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.h(o.WebGL2RenderingContext.UNSIGNED_INT):A.h(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bJ(g,f)}else{if(a1.b!==B.j)A.f(A.i(c))
m.drawArraysInstanced(A.h(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bJ(g,f)}}},
lv(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b0?r.fy:0))
A.m(q,"uAffineWarpStrength",new A.q(B.e,0))
s=this.a.aj()
A.bd(q,r.go?s.eZ(!1):s)},
$iad:1,
gG(){return this.a}}
A.jj.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.ig.prototype={
gF(){return this.f},
az(a,b){B.a.k(a.a,new A.aw(this.f,B.M,A.c([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
av(a){var s=this,r=s.a.aB(new A.bg(s.e,s.b,s.c,B.y,B.dt,B.dq)),q=A.cw(s.d),p=t.n,o=s.r===B.ex?new Float32Array(A.S(A.c([1/s.z,0],p))):new Float32Array(A.S(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mB(new A.ba(s.f,A.c([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mB.prototype={
am(a){var s,r,q=this
if(a.d.f.d<=0)return
s=a.b
r=s.a
A.bG(r,a.aq(q.f).b)
A.bd(r,q.a.aj())
A.cU(r,B.T,1,0,0,0)
A.bP(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.m(r,"uSource",B.x)
A.m(r,"uTexelStep",new A.q(B.af,q.e))
A.bj(r,q.c)
s.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.kJ.prototype={
gF(){return"dofComposite"},
az(a,b){var s=this
B.a.k(a.a,new A.aw("dofComposite",B.M,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
av(a){var s=this,r="dofComposite",q=s.a.aB(new A.bg(r,s.b,s.c,B.y,B.ln,B.k6)),p=A.cw(s.d)
return A.c([new A.mC(new A.ba(r,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iap:1}
A.mC.prototype={
am(a){var s,r=this,q=a.aq("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bG(n,q.b)
A.bd(n,r.a.aj())
A.bP(n,r.b.b)
s=t._
A.aB(n,0,s.a(r.d.$0()))
A.m(n,"uSharp",B.x)
A.aB(n,1,s.a(r.e.$0()))
A.m(n,"uBlurred",B.ag)
A.aB(n,2,s.a(r.f.$0()))
A.m(n,"uSceneDepth",B.ei)
A.m(n,"uNear",new A.q(B.e,o.f))
A.m(n,"uFar",new A.q(B.e,o.r))
A.m(n,"uFocusDistance",new A.q(B.e,r.w))
A.m(n,"uFocusRange",new A.q(B.e,r.x))
A.m(n,"uStrength",new A.q(B.e,a.d.f.d))
A.bj(n,r.c)
p.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.l1.prototype={
gF(){return"grade"},
az(a,b){B.a.k(a.a,new A.aw("grade",B.M,A.c([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
av(a){var s=this,r=s.a.aB(new A.bg("grade",s.b,s.c,B.y,B.ll,B.l4)),q=A.cw(s.d),p=s.r,o=s.w
return A.c([new A.mH(new A.ba("grade",A.c([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iap:1}
A.mH.prototype={
am(a){var s=this,r=a.aq(s.f.a),q=a.b,p=q.a
A.bG(p,a.aq(s.r.a).b)
A.bd(p,s.a.aj())
A.bP(p,s.b.b)
A.aB(p,0,r.b)
A.m(p,"uScene",B.x)
A.aB(p,1,t._.a(s.d.$0()))
A.m(p,"uLut",B.ag)
A.m(p,"uLutSize",new A.q(B.e,s.e))
A.m(p,"uStrength",new A.q(B.e,a.d.f.as))
A.bj(p,s.c)
q.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.iD.prototype={
gF(){return"msaaResolve"},
az(a,b){B.a.k(a.a,new A.aw("msaaResolve",B.j9,A.c([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
av(a){var s=this.b,r=this.c
return A.c([new A.mO(new A.ba("msaaResolve",A.c([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iap:1}
A.mO.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.bZ(this.c),j=a.bZ(this.d),i=this.b
if(i.b!==B.j)A.f(A.i(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.f(A.o("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.f(A.o("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.f(A.o("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.NONE)],t.n))}A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.NONE),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aU(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.h(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iad:1,
gG(){return this.a}}
A.fV.prototype={}
A.ks.prototype={
aq(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.i('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
bZ(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.aq(s)},
$iG1:1}
A.zh.prototype={}
A.iN.prototype={
gF(){return"present"},
az(a,b){B.a.k(a.a,new A.aw("present",B.ja,A.c([new A.Q(this.f,B.i)],t.C),!1))},
av(a){var s,r=this,q=r.a.aB(new A.bg("present",r.b,r.c,B.y,B.lo,B.kO)),p=A.cw(r.d)
r.w=p
s=r.f
return A.c([new A.mU(new A.ba("present",A.c([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iap:1}
A.mU.prototype={
am(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a4.bZ(a.d),a2=a4.b,a3=a2.a
A.bG(a3,a0)
A.bd(a3,a.a.aj())
A.bP(a3,a.b.b)
A.bj(a3,a.c)
A.aB(a3,0,a1.b)
s=a4.c
r=s!=null
if(r)A.aB(a3,1,s)
q=a4.d
p=q.f
o=q.d
n=q.c
A.m(a3,"uExposure",new A.q(B.e,p.a))
A.m(a3,"uVignette",new A.q(B.e,p.e))
A.m(a3,"uGrain",new A.q(B.e,p.f))
A.m(a3,"uOutputEncoding",new A.q(B.e,a.e===B.b7?1:0))
A.m(a3,"uToneMap",B.c5)
m=o.a
l=o.k4
q=l==null
k=q?a0:l.c
if(k==null)k=o.fx
j=q?a0:l.d.a
if(j==null)j=m.a*0.72+k.a*0.28
i=q?a0:l.d.b
if(i==null)i=m.b*0.72+k.b*0.28
h=q?a0:l.d.c
if(h==null)h=m.c*0.72+k.c*0.28
g=q?a0:l.e.a
if(g==null)g=m.a*0.9
f=q?a0:l.e.b
if(f==null)f=m.b*0.9
e=q?a0:l.e.c
if(e==null)e=m.c*0.9
d=t.n
A.m(a3,"uClearColor",new A.q(B.m,new Float32Array(A.S(A.c([m.a,m.b,m.c],d)))))
A.m(a3,"uSkyHorizon",new A.q(B.m,new Float32Array(A.S(A.c([k.a,k.b,k.c],d)))))
A.m(a3,"uSkyZenith",new A.q(B.m,new Float32Array(A.S(A.c([j,i,h],d)))))
A.m(a3,"uSkyGround",new A.q(B.m,new Float32Array(A.S(A.c([g,f,e],d)))))
A.m(a3,"uSkyEnabled",new A.q(B.e,q?0:1))
j=q?a0:0.08
A.m(a3,"uSkyHorizonGlow",new A.q(B.e,j==null?0:j))
j=q?a0:0.0025
A.m(a3,"uSkyStarDensity",new A.q(B.e,j==null?0:j))
A.m(a3,"uSkyTexture",B.ag)
A.m(a3,"uSkyTextureEnabled",new A.q(B.e,!q&&r?1:0))
r=q?a0:0
A.m(a3,"uSkyRotation",new A.q(B.e,r==null?0:r))
r=q?a0:1
A.m(a3,"uSkyExposure",new A.q(B.e,r==null?1:r))
A.m(a3,"uSkyTextureSrgb",new A.q(B.e,(!q||a0)===!0?1:0))
A.m(a3,"uInverseProjection",new A.q(B.o,new Float32Array(A.S(n.gig().a))))
c=n.y
if(c===$){b=n.a.ie()
n.y!==$&&A.nC()
n.y=b
c=b}A.m(a3,"uInverseView",new A.q(B.o,new Float32Array(A.S(c.a))))
r=n.d
A.m(a3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.c([r.a,r.b,r.c],d)))))
r=q?a0:l.z
A.m(a3,"uCloudCoverage",new A.q(B.e,r==null?0:r))
r=q?a0:l.Q
A.m(a3,"uCloudDensity",new A.q(B.e,r==null?0:r))
r=q?a0:l.as
A.m(a3,"uCloudBaseHeight",new A.q(B.e,r==null?650:r))
r=q?a0:l.at
A.m(a3,"uCloudThickness",new A.q(B.e,r==null?350:r))
r=q?a0:l.ax
A.m(a3,"uCloudScale",new A.q(B.e,r==null?0:r))
r=q?a0:l.ay
if(r==null)r=0
j=q?a0:l.ch
A.m(a3,"uCloudWind",new A.q(B.af,new Float32Array(A.S(A.c([r,j==null?0:j],d)))))
r=q?a0:l.CW
A.m(a3,"uCloudPhase",new A.q(B.e,r==null?0:r))
r=q?a0:l.cx
A.m(a3,"uCloudDetail",new A.q(B.e,r==null?0:r))
r=q?a0:l.cy
A.m(a3,"uCloudSilverLining",new A.q(B.e,r==null?0:r))
r=q?a0:l.db
A.m(a3,"uCloudSampleCount",new A.q(B.e,r==null?4:r))
r=o.go
q=r==null
j=q?a0:r.a.a
if(j==null)j=0
i=q?a0:r.a.b
if(i==null)i=1
h=q?a0:r.a.c
A.m(a3,"uCloudLightDirection",new A.q(B.m,new Float32Array(A.S(A.c([j,i,h==null?0:h],d)))))
j=q?a0:r.b.a
if(j==null)j=1
i=q?a0:r.b.b
if(i==null)i=1
h=q?a0:r.b.c
A.m(a3,"uCloudLightColor",new A.q(B.m,new Float32Array(A.S(A.c([j,i,h==null?1:h],d)))))
r=q?a0:r.c
A.m(a3,"uCloudLightIntensity",new A.q(B.e,r==null?0:r))
a2.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.lI.prototype={
gF(){return"ps1Quantize"},
az(a,b){B.a.k(a.a,new A.aw("ps1Quantize",B.M,A.c([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
av(a){var s=this,r="ps1Quantize",q=s.a.aB(new A.bg(r,s.b,s.c,B.y,B.lq,B.jZ)),p=A.cw(s.d),o=s.e,n=s.f
return A.c([new A.mV(new A.ba(r,A.c([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iap:1}
A.mV.prototype={
am(a){var s=this,r=a.aq(s.d.a),q=a.b,p=a.d.f,o=q.a
A.bG(o,a.aq(s.e.a).b)
A.bd(o,s.a.aj())
A.bP(o,s.b.b)
A.aB(o,0,r.b)
A.m(o,"uScene",B.x)
A.m(o,"uQuantizationBits",new A.q(B.e,p.ay))
A.m(o,"uDitherStrength",new A.q(B.e,p.Q))
A.bj(o,s.c)
q.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.fq.prototype={}
A.lX.prototype={
gF(){return"shadow"},
az(a,b){B.a.k(a.a,new A.aw("shadowCaster",B.j7,A.c([new A.Q(this.z,B.k)],t.C),!1))},
av(a){var s=this,r="shadowCaster",q=s.a.aB(new A.bg(r,s.b,s.c,B.ds,B.dr,B.l2))
return A.c([new A.mY(new A.ba(r,A.c([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iap:1}
A.mY.prototype={
am(a){var s,r,q,p,o=this,n=a.aq("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bG(s,n.b)
A.bd(s,o.a.aj())
A.cU(s,B.b6,1,0,0,0)
return}r=A.BB(l)
o.x.$1(r)
s=m.a
A.bG(s,n.b)
A.bd(s,o.a.aj())
A.cU(s,B.b6,1,0,0,0)
A.bP(s,o.b.b)
A.m(s,"uAlbedo",B.x)
for(s=a.d.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.kw(m,s[p],l,r)},
he(a,b){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b0?r.fy:0))
s=this.a.aj()
A.bd(q,r.go?s.eZ(!1):s)},
kw(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gG().r)return
s=a.a
A.m(s,"uUseInstances",B.c4)
n.hb(a,b.gG().c,d)
n.he(a,b.gG().b)
r=b.gG()
q=n.c.$1(r.a)
A.bj(s,q.a)
s=q.b
r=q.c
if(s)a.ek(r,q.d,0)
else a.aF(r,0)}else if(b instanceof A.dI){p=b.a
if(!p.gG().r)return
if(n.lF(b,c)===B.nZ)return
n.hb(a,p.gG().c,d)
A.yP(a,b,!1)
n.he(a,p.gG().b)
s=p.gG()
q=n.c.$1(s.a)
A.bj(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.el(r,q.d,o,0)
else a.ej(r,0,o)}else throw A.b(A.o("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
lF(a,b){return B.nY},
hb(a,b,c){var s=a.a
A.m(s,"uModel",new A.q(B.o,new Float32Array(A.S(b.ae().a))))
A.m(s,"uLightViewProjection",new A.q(B.o,new Float32Array(A.S(c.a.a))))},
$iad:1,
gG(){return this.a}}
A.y0.prototype={
$1(a){return this.a.a=a},
$S:68}
A.y1.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:69}
A.lY.prototype={
gF(){return"shadowedWorld"},
az(a,b){var s=this,r=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.k(a.a,new A.aw("shadowedWorld",B.d5,r,!1))},
av(a){var s=this,r="shadowedWorld",q=s.a.aB(new A.bg(r,s.b,s.c,B.lu,B.lm,B.jY)),p=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.c([new A.mZ(new A.ba(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iap:1}
A.mZ.prototype={
am(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.aq("sceneColor"),a7=b4.b,a8=b4.d,a9=a8.c,b0=a8.d,b1=a8.f,b2=a4.z.$0(),b3=a7.a
A.bG(b3,a6.b)
A.bd(b3,a4.a.aj())
s=b0.a
A.cU(b3,B.cz,1,s.c,s.b,s.a)
A.bP(b3,a4.b.b)
A.m(b3,"uAlbedo",B.x)
A.m(b3,"uNormalMap",B.oy)
A.m(b3,"uOrmMap",B.oz)
A.m(b3,"uEmissiveMap",B.oA)
A.m(b3,"uLightmap",B.oB)
s=t._
A.aB(b3,1,s.a(a4.y.$0()))
A.m(b3,"uShadowMap",B.ag)
r=a9.d
q=t.n
A.m(b3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.c([r.a,r.b,r.c],q)))))
A.m(b3,"uShadowMapTexelSize",new A.q(B.af,new Float32Array(A.S(A.c([1/a4.ch,1/a4.CW],q)))))
A.m(b3,"uShadowFilterRadius",new A.q(B.e,b0.at))
A.m(b3,"uShadowBias",new A.q(B.e,b0.db))
A.aB(b3,2,s.a(a4.at.$0()))
A.m(b3,"uSsao",B.ei)
A.m(b3,"uVertexSnapGrid",new A.q(B.e,b1.ax))
A.m(b3,"uSceneColorSize",new A.q(B.af,new Float32Array(A.S(A.c([a4.ax,a4.ay],q)))))
A.m(b3,"uViewProjection",new A.q(B.o,new Float32Array(A.S(a9.c.a))))
A.m(b3,"uView",new A.q(B.o,new Float32Array(A.S(a9.a.a))))
A.m(b3,"uLightViewProjection",new A.q(B.o,new Float32Array(A.S(b2.a.a))))
s=b0.b
A.m(b3,"uFogColor",new A.q(B.m,new Float32Array(A.S(A.c([s.a,s.b,s.c],q)))))
A.m(b3,"uFogStart",new A.q(B.e,b0.c))
A.m(b3,"uFogEnd",new A.q(B.e,b0.d))
s=b0.e
A.m(b3,"uFogHeightFalloff",new A.q(B.e,s==null?0:s))
s=b0.f
A.m(b3,"uFogDensity",new A.q(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.c([],t.cv)
r=a4.as.$0()
r=J.O(r==null?B.bv:r)
o=p==null
while(r.m()){n=r.gp()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.J
k=o?a5:p.c
if(k==null)k=B.a0
A.m(b3,"uLightPosition",new A.q(B.m,new Float32Array(A.S(A.c([l.a,l.b,l.c],q)))))
A.m(b3,"uLightDirection",new A.q(B.m,new Float32Array(A.S(A.c([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.N
A.m(b3,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.c([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.m(b3,"uLightIntensity",new A.q(B.e,r==null?0:r))
A.m(b3,"uSpotEnabled",new A.q(B.e,!o?1:0))
i=b0.go
r=i==null
h=r?a5:i.a
if(h==null)h=B.J
g=r?a5:i.b
if(g==null)g=B.N
A.m(b3,"uDirectionalDirection",new A.q(B.m,new Float32Array(A.S(A.c([h.a,h.b,h.c],q)))))
A.m(b3,"uDirectionalColor",new A.q(B.m,new Float32Array(A.S(A.c([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.m(b3,"uDirectionalIntensity",new A.q(B.e,r==null?0:r))
for(r=b0.id,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.v
c=n?a5:e.c
if(c==null)c=B.N
m=""+f
A.m(b3,"uPointPosition"+m,new A.q(B.m,new Float32Array(A.S(A.c([d.a,d.b,d.c],q)))))
A.m(b3,"uPointColor"+m,new A.q(B.m,new Float32Array(A.S(A.c([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.m(b3,"uPointIntensity"+m,new A.q(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.m(b3,"uPointRadius"+m,new A.q(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.v
a=r?a5:e.c
if(a==null)a=B.a0
c=r?a5:e.d
if(c==null)c=B.N
n=""+f
A.m(b3,"uDirectSpotPosition"+n,new A.q(B.m,new Float32Array(A.S(A.c([d.a,d.b,d.c],q)))))
A.m(b3,"uDirectSpotDirection"+n,new A.q(B.m,new Float32Array(A.S(A.c([a.a,a.b,a.c],q)))))
A.m(b3,"uDirectSpotColor"+n,new A.q(B.m,new Float32Array(A.S(A.c([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.m(b3,"uDirectSpotIntensity"+n,new A.q(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.m(b3,"uDirectSpotRange"+n,new A.q(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.m(b3,"uDirectSpotInnerCos"+n,new A.q(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.m(b3,"uDirectSpotOuterCos"+n,new A.q(B.e,Math.cos(m)))
r=r?0:1
A.m(b3,"uDirectSpotEnabled"+n,new A.q(B.e,r))}s=o?a5:p.f
A.m(b3,"uLightRange",new A.q(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.m(b3,"uLightInnerCos",new A.q(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.m(b3,"uLightOuterCos",new A.q(B.e,Math.cos(s)))
a0=b0.fx
A.m(b3,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.c([a0.a,a0.b,a0.c],q)))))
A.m(b3,"uAmbientIntensity",new A.q(B.e,b0.fy))
A.m(b3,"uAmbientLightScale",new A.q(B.e,b0.ax))
A.m(b3,"uDirectLightScale",new A.q(B.e,b0.ay))
s=b0.dx
A.m(b3,"uReflectionColor",new A.q(B.m,new Float32Array(A.S(A.c([s.a,s.b,s.c],q)))))
A.m(b3,"uReflectionIntensity",new A.q(B.e,b0.dy))
A.m(b3,"uReflectionConfidence",new A.q(B.e,b0.fr))
A.m(b3,"uRainWetness",new A.q(B.e,b1.w))
A.m(b3,"uSurfaceSnowCoverage",new A.q(B.e,b1.x))
A.m(b3,"uSurfaceDissolution",new A.q(B.e,b1.y))
s=b0.k3
a1=A.hy(s,0,A.e7(4,"count",t.S),A.B(s).c).bE(0)
A.m(b3,"uThermalSourceCount",new A.q(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.d(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.v
r=""+f
A.m(b3,"uThermalSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.c([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.m(b3,"uThermalSourceRadius"+r,new A.q(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.m(b3,"uThermalSourceDissolution"+r,new A.q(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.u)(b3),++a3)a4.fL(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.u)(a8),++a3)a4.fL(a7,a8[a3],r,b0)},
fL(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.m(s,"uUseInstances",B.c4)
n.hc(a,b.gG().c)
n.hf(a,b.gG().b,b.gG().e,b.gG().f,c,b.gG().w,d)
r=n.c.$1(b.gG().a)
A.bj(s,r.a)
s=r.b
q=r.c
if(s)a.ek(q,r.d,0)
else a.aF(q,0)}else if(b instanceof A.dI){p=b.a
n.hc(a,p.gG().c)
A.yP(a,b,!0)
n.hf(a,p.gG().b,p.gG().e,p.gG().f,c,p.gG().w,d)
r=n.c.$1(p.gG().a)
A.bj(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.el(q,r.d,o,0)
else a.ej(q,0,o)}else throw A.b(A.o("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
hf(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aB(o,0,p.a(s.e.$1(q.b)))
A.aB(o,3,p.a(s.f.$1(q.x)))
A.aB(o,4,p.a(s.r.$1(r)))
A.aB(o,5,p.a(s.w.$1(r)))
A.aB(o,6,p.a(s.x.$1(r)))
A.m(o,"uAlphaCutoff",new A.q(B.e,q.fx===B.b0?q.fy:0))
A.m(o,"uOpaqueCoverage",new A.q(B.e,c===B.ao?0:1))
A.m(o,"uAffineWarpStrength",new A.q(B.e,0))
p=t.n
A.m(o,"uMaterialTint",new A.q(B.m,new Float32Array(A.S(A.c([q.d,q.e,q.f],p)))))
A.m(o,"uEmissiveStrength",new A.q(B.e,q.w))
A.m(o,"uUvScaleOffset",new A.q(B.ox,new Float32Array(A.S(A.c([q.db,q.dx,0,0],p)))))
A.m(o,"uNormalStrength",new A.q(B.e,q.z*g.ch))
A.m(o,"uRoughness",new A.q(B.e,q.at*g.CW))
A.m(o,"uMetallic",new A.q(B.e,q.ax*g.cx))
A.m(o,"uSpecularScale",new A.q(B.e,g.cy))
A.m(o,"uClearcoatStrength",new A.q(B.e,q.ch))
A.m(o,"uClearcoatRoughness",new A.q(B.e,q.CW))
A.m(o,"uOcclusionStrength",new A.q(B.e,1))
A.m(o,"uLightmapIntensity",new A.q(B.e,0))
A.m(o,"uReceivesShadow",new A.q(B.e,q.id&&f?1:0))
A:{p=r
if(B.ao===c){switch(d.a){case 0:p=B.fF
break
case 1:p=B.fE
break}break A}if(B.U===c||B.fD===c){p=s.a.aj()
break A}}A.bd(o,q.go?p.eZ(!1):p)},
hc(a,b){var s=b.ae(),r=a.a
A.m(r,"uModel",new A.q(B.o,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.o,new Float32Array(A.S(s.eE().a))))},
$iad:1,
gG(){return this.a}}
A.m_.prototype={
gF(){return"ssaoOcclusion"},
az(a,b){B.a.k(a.a,new A.aw("ssaoOcclusion",B.be,A.c([new A.Q(this.w,B.k)],t.C),!1))},
av(a){var s=this,r="ssaoOcclusion",q=s.a.aB(new A.bg(r,s.b,s.c,B.y,B.dw,B.jS)),p=A.cw(s.d)
return A.c([new A.n1(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iap:1}
A.n1.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.d.f.c,m=o.a
A.bG(m,a.aq("ssaoRaw").b)
A.bd(m,p.a.aj())
if(n<=0){A.cU(m,B.T,1,1,1,1)
return}A.cU(m,B.T,1,0,0,0)
s=p.e.$0()
A.bP(m,p.b.b)
A.aB(m,0,t._.a(p.d.$0()))
A.m(m,"uSceneDepth",B.x)
A.m(m,"uNear",new A.q(B.e,s.f))
A.m(m,"uFar",new A.q(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.m(m,"uProjScaleX",new A.q(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.m(m,"uProjScaleY",new A.q(B.e,r[5]))
A.m(m,"uRadius",new A.q(B.e,p.f))
A.m(m,"uStrength",new A.q(B.e,n))
A.bj(m,p.c)
o.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.lZ.prototype={
gF(){return"ssaoBlur"},
az(a,b){B.a.k(a.a,new A.aw("ssaoBlur",B.be,A.c([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
av(a){var s=this,r="ssaoBlur",q=s.a.aB(new A.bg(r,s.b,s.c,B.y,B.lf,B.l6)),p=A.cw(s.d)
return A.c([new A.n0(new A.ba(r,A.c([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iap:1}
A.n0.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bG(o,a.aq("ssaoBlurred").b)
A.bd(o,q.a.aj())
if(a.d.f.c<=0){A.cU(o,B.T,1,1,1,1)
return}A.cU(o,B.T,1,0,0,0)
s=q.f.$0()
A.bP(o,q.b.b)
r=t._
A.aB(o,0,r.a(q.d.$0()))
A.m(o,"uSsaoRaw",B.x)
A.aB(o,1,r.a(q.e.$0()))
A.m(o,"uSceneDepth",B.ag)
A.m(o,"uTexelSize",new A.q(B.af,new Float32Array(A.S(A.c([1/q.r,1/q.w],t.n)))))
A.m(o,"uNear",new A.q(B.e,s.f))
A.m(o,"uFar",new A.q(B.e,s.r))
A.bj(o,q.c)
p.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.mc.prototype={
gF(){return"vhs"},
az(a,b){var s=this.w
a.b.k(0,s.a)
B.a.k(a.a,new A.aw("vhs",B.M,A.c([new A.Q(this.r,B.i),new A.Q(s,B.R),new A.Q(s,B.k)],t.C),!1))},
av(a){var s=this,r=s.a.aB(new A.bg("vhs",s.b,s.c,B.y,B.li,B.k0)),q=A.cw(s.d),p=s.r,o=s.w
return A.c([new A.n9(new A.ba("vhs",A.c([new A.Q(p,B.i),new A.Q(o,B.R),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iap:1}
A.n9.prototype={
am(a){var s,r=this,q=a.aq(r.f.a),p=a.aq(r.r.a),o=a.b,n=a.d.f,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bG(m,p.b)
A.bd(m,r.a.aj())
A.bP(m,r.b.b)
A.aB(m,0,q.b)
A.m(m,"uScene",B.x)
A.aB(m,1,t._.a(r.d.$0()))
A.m(m,"uHistory",B.ag)
A.m(m,"uTime",new A.q(B.e,r.e.$0()))
A.m(m,"uChromaWeight",new A.q(B.e,n.ch))
A.m(m,"uTrackingWeight",new A.q(B.e,l))
A.m(m,"uNoiseWeight",new A.q(B.e,n.cx))
A.m(m,"uHeadSwitchWeight",new A.q(B.e,n.cy))
A.m(m,"uDropoutWeight",new A.q(B.e,n.db))
A.m(m,"uGhostWeight",new A.q(B.e,s))
A.bj(m,r.c)
o.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.ml.prototype={
gF(){return"volumetricLight"},
az(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.k(p,new A.aw("volumetricLight",B.be,A.c([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.k(p,new A.aw("volumetricComposite",B.M,A.c([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
av(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aB(new A.bg(l,i,m.c,B.y,B.dw,B.k4)),g=m.e,f=A.cw(g),e=m.Q
B.a.k(e,f)
s=m.w
r=t.C
q=A.c([new A.nb(new A.ba(l,A.c([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aB(new A.bg(k,i,m.d,B.y,B.lw,B.l7))
n=A.cw(g)
B.a.k(e,n)
B.a.k(q,new A.na(new A.ba(k,A.c([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
a_(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p)q.deleteVertexArray(A.a(s[p].a))
B.a.P(s)},
$iap:1}
A.nb.prototype={
am(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=b1.aq(a3.d),a6=b1.b,a7=a3.f.$0(),a8=b1.d.d,a9=a8.go,b0=a6.a
A.bG(b0,a5.b)
A.bd(b0,a3.a.aj())
A.cU(b0,B.T,1,0,0,0)
A.bP(b0,a3.b.b)
A.aB(b0,0,t._.a(a3.e.$0()))
A.m(b0,"uSceneDepth",B.x)
A.m(b0,"uNear",new A.q(B.e,a7.f))
A.m(b0,"uFar",new A.q(B.e,a7.r))
A.m(b0,"uViewProjection",new A.q(B.o,new Float32Array(A.S(a7.c.a))))
s=a7.a.a
A.m(b0,"uView",new A.q(B.o,new Float32Array(A.S(s))))
A.m(b0,"uInverseProjection",new A.q(B.o,new Float32Array(A.S(a7.gig().a))))
r=a9==null
A.m(b0,"uShaftIntensity",new A.q(B.e,r?0:a9.c*0.15))
q=a8.f
A.m(b0,"uFogDensity",new A.q(B.e,q==null?0:q))
A.m(b0,"uAnisotropy",new A.q(B.e,a8.y))
q=a8.r
p=t.n
A.m(b0,"uVolumetricAlbedo",new A.q(B.m,new Float32Array(A.S(A.c([q.a,q.b,q.c],p)))))
A.m(b0,"uVolumetricHeightFalloff",new A.q(B.e,a8.w))
A.m(b0,"uVolumetricDustDensity",new A.q(B.e,a8.x))
A.m(b0,"uVolumetricJitter",new A.q(B.e,a8.z))
A.m(b0,"uVolumetricIntensity",new A.q(B.e,a8.Q))
A.m(b0,"uVolumetricSampleCount",new A.q(B.e,a8.as))
if(r)o=B.J
else{q=a9.a.ga7()
n=q.a
m=s.length
if(0>=m)return A.d(s,0)
l=s[0]
k=q.b
if(4>=m)return A.d(s,4)
j=s[4]
q=q.c
if(8>=m)return A.d(s,8)
i=s[8]
h=s[1]
g=s[5]
if(9>=m)return A.d(s,9)
f=s[9]
e=s[2]
d=s[6]
if(10>=m)return A.d(s,10)
o=new A.C(n*l+k*j+q*i,n*h+k*g+q*f,n*e+k*d+q*s[10]).ga7()}c=r?a4:a9.b
if(c==null)c=B.N
A.m(b0,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.c([o.a,o.b,o.c],p)))))
A.m(b0,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.c([c.a,c.b,c.c],p)))))
b=A.Kj(4,a7.d,a8.k2)
A.m(b0,"uVolumetricSourceCount",new A.q(B.e,b.length))
for(a=0;a<4;++a){s=b.length
if(a<s){if(!(a<s))return A.d(b,a)
a0=b[a]}else a0=a4
s=a0==null
a1=s?a4:a0.b
if(a1==null)a1=B.v
a2=s?a4:a0.c
if(a2==null)a2=B.v
r=""+a
A.m(b0,"uSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.c([a1.a,a1.b,a1.c],p)))))
A.m(b0,"uSourceColor"+r,new A.q(B.m,new Float32Array(A.S(A.c([a2.a,a2.b,a2.c],p)))))
q=s?a4:a0.d
if(q==null)q=0
A.m(b0,"uSourceIntensity"+r,new A.q(B.e,q))
q=s?a4:a0.e
if(q==null)q=1
A.m(b0,"uSourceReferenceDistance"+r,new A.q(B.e,q))
s=s?a4:a0.f
if(s==null)s=1
A.m(b0,"uSourceCutoffDistance"+r,new A.q(B.e,s))}A.bj(b0,a3.c)
a6.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.na.prototype={
am(a){var s=this,r=a.bZ(s.e),q=a.bZ(s.d),p=a.b,o=p.a
A.bG(o,r.b)
A.BY(o,1)
A.bd(o,B.cG)
A.bP(o,s.b.b)
A.aB(o,0,q.b)
A.m(o,"uVolumetric",B.x)
A.m(o,"uVolumetricStrength",B.c5)
A.bj(o,s.c)
p.aF(3,0)},
$iad:1,
gG(){return this.a}}
A.iY.prototype={}
A.mp.prototype={
gF(){return"world"},
az(a,b){B.a.k(a.a,new A.aw("worldOpaqueTransparent",B.d5,A.c([new A.Q(this.e,B.k)],t.C),!1))},
av(a){var s=this,r=s.a.aB(new A.bg("safeWorld",s.b,s.c,B.lx,B.y,B.kp)),q=s.e
return A.c([new A.ne(new A.ba("worldOpaqueTransparent",A.c([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iap:1}
A.ne.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.d,k=l.d,j=m.a
A.bG(j,a.aq(n.d).b)
A.bd(j,n.a.aj())
s=k.a
A.cU(j,B.cz,1,s.c,s.b,s.a)
A.bP(j,n.b.b)
A.m(j,"uViewProjection",new A.q(B.o,new Float32Array(A.S(l.c.c.a))))
r=k.go
q=r==null?null:r.a
if(q==null)q=B.J
s=t.n
A.m(j,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.c([q.a,q.b,q.c],s)))))
p=k.fx
A.m(j,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.c([p.a,p.b,p.c],s)))))
A.m(j,"uAmbientIntensity",new A.q(B.e,k.fy))
A.m(j,"uAmbientLightScale",new A.q(B.e,k.ax))
A.m(j,"uDirectLightScale",new A.q(B.e,k.ay))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.hs(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.hs(m,l[o])},
hs(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dI){s=b.a
n.ht(a,s.gG().c)
A.yP(a,b,!0)
r=n.c.$1(s.gG().a)
A.bj(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.el(p,r.d,o,0)
else a.ej(p,0,o)}else if(t.yz.b(b)){q=a.a
A.m(q,"uUseInstances",B.c4)
n.ht(a,b.gG().c)
r=n.c.$1(b.gG().a)
A.bj(q,r.a)
q=r.b
p=r.c
if(q)a.ek(p,r.d,0)
else a.aF(p,0)}else throw A.b(A.o("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
ht(a,b){var s=b.ae(),r=a.a
A.m(r,"uModel",new A.q(B.o,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.o,new Float32Array(A.S(s.eE().a))))},
$iad:1,
gG(){return this.a}}
A.oN.prototype={
cB(a){var s,r,q
a.A()
s=A.a_(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.Q||a.as){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.G
else q=r===0?B.bK:B.Q
return new A.dO(q,s)},
iU(a){var s,r=this.cB(a).a
A:{if(B.G===r){s=B.mI
break A}if(B.Q===r){s=B.dS
break A}s=B.aw
break A}return s}}
A.l_.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.im.prototype={
B(){return"GpuBufferKind."+this.b}}
A.iq.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.ir.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.kZ.prototype={}
A.l0.prototype={}
A.f7.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.ip.prototype={}
A.io.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.fp.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.j1.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dj.prototype={
B(){return"UniformType."+this.b}}
A.q.prototype={}
A.fY.prototype={
B(){return"ClearMask."+this.b}}
A.kF.prototype={
aF(a,b){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArrays(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bJ(a,1)},
ej(a,b,c){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArraysInstanced(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bJ(a,c)},
ek(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bJ(a,1)},
el(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aU(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bJ(a,c)},
$iES:1}
A.hb.prototype={
B(){return"GpuResourceCandidateState."+this.b}}
A.hm.prototype={
ik(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.i("resource is not in candidate: "+a))
return s}}
A.pT.prototype={
gp(){var s=this.c
if(s==null)throw A.b(A.i("GPU resource adapter is not initialized"))
return s},
du(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.i("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.i("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.i("GPU resource candidate is already open"))
s=A.iK(a)
p=n.b
r=p.du(s)
try{q=new A.hm(r,n.dV(s,a),B.as)
n.d=q
return q}catch(o){p.eP(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.i("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dY(s.b)
r.b.a_()
r.c=null
r.e=!0},
dV(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.pU()),j)
for(h=s,g=J.O(h.a),h=new A.U(g,h.b,h.$ti.i("U<1>")),f=a.a;h.m();){r=g.gp()
q=A.C3(f,a.fJ(r,a5))
J.e9(a3,q)
J.b7(a2,r,q)}e=A.K(new A.I(k,i.a(new A.pV()),j),j.i("r.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.Dy(J.Eo(o,11))
if(i){h=J.b0(a2,"sceneColor")
h.toString
J.b7(a2,o,h)}else{h=n
if(typeof h!=="number")return h.pn()
if(h>=2){h=J.b0(a2,"sceneColor#1")
h.toString
J.b7(a2,o,h)}else{m=A.C3(f,a.fJ(o,a5))
J.e9(a3,m)
J.b7(a2,o,m)}}}a0=A.aW(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.B(a0).i("bM<1>"),a0=new A.bM(a0,k),a0=new A.al(a0,a0.gu(0),k.i("al<a0.E>")),j=a.a,i=t.V,k=k.i("a0.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.zq(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fJ(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.ip(s,s,1,B.bc,!0)}if(a==="sceneDepth")return new A.ip(n,m,1,B.bc,!0)
r=B.c.V(a,"ssao")||B.c.V(a,"bloomBlur")||B.c.V(a,"dofBlur")||B.c.V(a,"volumetricLight")
q=r?B.d.af(n+1,2):n
p=r?B.d.af(m+1,2):m
s=a==="sceneColor"
o=s||B.c.V(a,"sceneColor#")
s=s?b.d:1
return new A.ip(q,p,s,o?B.d3:B.j3,o)},
dY(a){var s,r,q,p,o,n=A.fc(t.mf.a(a).gak(),t._)
for(n=A.fE(n,n.r,A.v(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.zq(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ft(a){if(this.d!==a||a.c!==B.as)throw A.b(A.i("GPU resource candidate is not open"))}}
A.pU.prototype={
$1(a){return!B.c.V(A.w(a),"sceneColor#")},
$S:3}
A.pV.prototype={
$1(a){return B.c.V(A.w(a),"sceneColor#")},
$S:3}
A.hH.prototype={
B(){return"_SlotState."+this.b}}
A.eM.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.de.prototype={
aG(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.eM(B.aZ,n.i("eM<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.pJ
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bO(a){return this.aG(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.et(B.d8,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.et(B.d9,a))
s=q.b
if(s===B.b_||s===B.aZ)throw A.b(A.et(B.aO,a))},
bA(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eV(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb3(b)},
aK(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.et(B.d8,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.et(B.d9,a))
r=q.b
if(r===B.b_||r===B.aZ)throw A.b(A.et(B.jl,a))
q.b=B.b_
q.sb3(null)
B.a.k(p.c,s);++p.e},
bT(){return new A.bI(this.nS(),this.$ti.i("bI<+(1,2)>"))},
nS(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.b_||j===B.aZ){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a5(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kp.prototype={
B(){return"BlendEquation."+this.b}}
A.f1.prototype={
B(){return"BlendFactor."+this.b}}
A.kA.prototype={
B(){return"CullFace."+this.b}}
A.kD.prototype={
B(){return"DepthFunc."+this.b}}
A.h6.prototype={
eZ(a){var s=this
return A.AQ(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bs.prototype={
B(){return"StateField."+this.b}}
A.vo.prototype={
n4(a){var s,r=this.a
if(r==null)return A.hh(B.kR,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.k(0,B.bX)
if(r.b!==a.b)s.k(0,B.bY)
if(r.c!==a.c)s.k(0,B.bZ)
if(r.d!==a.d)s.k(0,B.c_)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.c0)
if(r.r!==a.r)s.k(0,B.c1)
if(r.w!==a.w)s.k(0,B.c2)
if(r.x!==a.x)s.k(0,B.c3)
return s}}
A.e2.prototype={$icH:1}
A.jN.prototype={}
A.jM.prototype={}
A.nd.prototype={}
A.mn.prototype={
jT(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Z(new A.vl(s))
s.d=A.Z(new A.vm(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
iw(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c7(A.h(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c7(A.h(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c7(A.h(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c7(A.h(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c7(A.h(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.h0(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.i1(e.getParameter(A.h(k.WebGL2RenderingContext.RENDERER)))
m=A.i1(e.getParameter(A.h(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.t9("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c7(a){var s=A.i1(this.a.getParameter(a))
return typeof s=="number"?B.b.aC(s):0},
h0(a){var s=A.i1(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iFe:1}
A.vl.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.a1},
$S:1}
A.vm.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.wp.prototype={
m5(){var s,r=this
if(r.b!==B.j)A.f(A.i(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.e2(new A.nd(s))},
hl(a){var s=a.a
if(!(s instanceof A.nd))throw A.b(A.a7(a,"query","is not a GPU timer query"))
return s}}
A.nc.prototype={}
A.vk.prototype={}
A.vn.prototype={
mV(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.vk(A.GE(s))}}
A.kH.prototype={
C(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kl.prototype={
gnX(){var s=this.cx
return new A.ao(s,A.v(s).i("ao<2>")).b6(0,0,new A.of(),t.i)},
jC(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.t()
s=j.a
A.G(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.t()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.t()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.t()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.t()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.t()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.t()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.t()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.t()
A.a(r.gain).value=1
q=j.Q
q===$&&A.t()
A.a(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.t()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k3!==$&&A.b6()
j.k3=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k4!==$&&A.b6()
j.k4=p
A.G(q.connect(p))
A.G(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.G(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.ok!==$&&A.b6()
j.ok=q
i=A.a(s.createChannelMerger(2))
j.p1!==$&&A.b6()
j.p1=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p2!==$&&A.b6()
j.p2=r
A.G(p.connect(q))
A.G(i.connect(A.a(s.destination)))
j.fo()},
fo(){var s,r=this,q=r.ok
q===$&&A.t()
q.disconnect()
s=r.p2
s===$&&A.t()
s.disconnect()
if(r.p3){A.G(q.connect(s,0))
A.G(q.connect(s,1))
q=r.p1
q===$&&A.t()
A.G(s.connect(q,0,0))
A.G(s.connect(q,0,1))}else{s=r.p1
s===$&&A.t()
A.G(q.connect(s,0,0))
A.G(q.connect(s,1,1))}},
cu(){var s=this.a
if(A.w(s.state)==="suspended")A.a(s.resume())},
cS(a){var s,r,q=this
if(B.c.V(a,"vo-")){s=q.y
s===$&&A.t()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.V(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.t()
return s}r=B.lk.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.t()
break A}if("bed"===r){s=q.e
s===$&&A.t()
break A}if("mid"===r){s=q.r
s===$&&A.t()
break A}if("air"===r){s=q.x
s===$&&A.t()
break A}s=q.w
s===$&&A.t()
break A}return s},
kH(){var s,r,q,p,o,n,m,l=this.a,k=A.a1(l.sampleRate),j=B.b.ao(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aA()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dt(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ay.aA()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.cS(a)))
r.onended=A.Z(new A.oi(r,q))
r.start()
return!0},
is(a){return this.dt(a,1)},
ov(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=d
q=A.a(s.createGain())
A.a(q.gain).value=c
p=A.a(s.createStereoPanner())
A.a(p.pan).value=B.b.n(e,-1,1)
A.G(r.connect(q))
A.G(q.connect(p))
A.G(p.connect(this.cS(a)))
r.onended=A.Z(new A.oh(r,q,p))
r.start(A.a1(s.currentTime)+B.b.n(b,0,120))},
m0(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.n(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.u)(a5),++q){p=a5[q]
s.l(0,p.a[3],p)}r=a4.ax
o=A.v(r).i("ae<1>")
o=A.K(new A.ae(r,o),o.i("r.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.u)(o),++q){m=o[q]
if(!s.K(m))a4.ea(m)}for(s=new A.ac(s,s.r,s.e,s.$ti.i("ac<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.K(k[3]))a4.ea(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.ea(k[3])
h=k[3]
g=r.h(0,h)
if(g==null){f=k[0]
e=k[6]
d=k[5]
c=A.a(o.createBufferSource())
c.buffer=j
c.loop=!0
b=A.a(o.createGain())
A.a(b.gain).value=0
a=A.a(o.createBiquadFilter())
a.type="highpass"
A.a(a.frequency).value=20
a0=A.a(o.createBiquadFilter())
a0.type="lowpass"
A.a(a0.frequency).value=2e4
A.G(c.connect(a))
A.G(a.connect(a0))
A.G(a0.connect(b))
a1=A.a(o.createStereoPanner())
A.a(a1.pan).value=e
a2=A.a(o.createGain())
A.a(a2.gain).value=d
A.G(b.connect(a1))
A.G(a1.connect(a4.cS(f)))
A.G(b.connect(a2))
l===$&&A.t()
A.G(a2.connect(l))
c.start()
g=new A.jL(c,b,a,a0,a1,a2,f)
r.l(0,h,g)}a3=A.a1(o.currentTime)
h=g.b
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a1(A.a(h.gain).value),a3))
f=a3+0.12
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.n(k[1],0,1),f))
h=g.d
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a1(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.n(k[4],80,2e4),f))
h=g.c
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a1(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.n(k[2],20,16e3),f))
h=g.e
A.a(A.a(h.pan).cancelScheduledValues(a3))
A.a(A.a(h.pan).setValueAtTime(A.a1(A.a(h.pan).value),a3))
A.a(A.a(h.pan).linearRampToValueAtTime(B.b.n(k[6],-1,1),f))
h=g.f
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a1(A.a(h.gain).value),a3))
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.n(k[5],0,1),f))}},
ea(a){var s,r,q=this.ax.a8(0,a)
if(q==null)return
s=A.a1(this.a.currentTime)
r=q.b
A.a(A.a(r.gain).cancelScheduledValues(s))
A.a(A.a(r.gain).setValueAtTime(A.a1(A.a(r.gain).value),s))
A.a(A.a(r.gain).linearRampToValueAtTime(0,s+0.18))
A.BG(B.fH,q.gn7())},
it(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ay.aA()*0.12)
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
A.a(n.gain).value=Math.pow(10,g/20)}else{s=j.ch!=null
if(s){s=j.ch
s.toString
l=j.fD(j.b.iq(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.l(0,o,new A.hI(r,q,n,o,p,e,B.b.n(m,0,1)))
r.onended=A.Z(new A.og(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.cS(a)))
r.start()},
ou(a,b,c,d){return this.it(a,b,c,1,d,null,null,null)},
fD(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aH(r,q,p)},
fg(a){var s,r,q,p,o=this
if(o.cy)return
s=o.at.h(0,a)
if(s==null)return
o.cy=!0
r=o.a
q=A.a(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.a(r.createGain())
A.a(p.gain).value=0.6
A.G(q.connect(p))
r=o.e
r===$&&A.t()
A.G(p.connect(r))
q.onended=A.Z(new A.oj(o,q,p))
q.start()
o.db=q},
dI(a){if(this.p3===a)return
this.p3=a
this.fo()},
j4(a){var s,r,q=this
q.dI(a.b===B.ck)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b1?1:0.55
r=q.c
r===$&&A.t()
r=A.a(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.t()
A.a(s.gain).value=0.35*q.R8},
bu(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.n(c==null?q.fx:c,0,1)
q.fy=B.b.n(f==null?q.fy:f,0,1)
q.go=B.b.n(b==null?q.go:b,0,1)
q.id=B.b.n(a==null?q.id:a,0,1)
q.k1=B.b.n(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.t()
A.a(s.gain).value=0.25*q.go
s=q.r
s===$&&A.t()
A.a(s.gain).value=0.2*q.go
s=q.w
s===$&&A.t()
A.a(s.gain).value=0.4*q.go
s=q.x
s===$&&A.t()
A.a(s.gain).value=0.1*q.go
s=q.f
s===$&&A.t()
A.a(s.gain).value=0.4*q.id
s=q.e
s===$&&A.t()
A.a(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.t()
A.a(s.gain).value=q.fy
s=q.c
s===$&&A.t()
s=A.a(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
f8(a){var s=null
return this.bu(s,s,s,s,a,s)},
j1(a){var s=null
return this.bu(s,s,a,s,s,s)},
j3(a){var s=null
return this.bu(s,s,s,s,s,a)},
j0(a){var s=null
return this.bu(s,a,s,s,s,s)},
j_(a){var s=null
return this.bu(a,s,s,s,s,s)},
j2(a){var s=null
return this.bu(s,s,s,a,s,s)},
iZ(a){if(this.ch===a)return
this.ch=a
this.bK()},
bK(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cv(p,g)
m=n==null?i.fD(h.iq(p,g)):new A.aH(n.c,n.d,n.e)
l=A.a1(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a1(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a1(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.n(m.c,0,1)}}}
A.of.prototype={
$2(a,b){return Math.max(A.ax(a),t.jS.a(b).r)},
$S:71}
A.oe.prototype={
$1(a){return this.iM(t.q.a(a))},
iM(a){var s=0,r=A.aL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aM(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a6(A.av(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a6(A.av(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a6(A.av(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ah(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$$1,r)},
$S:72}
A.oi.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.oh.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.og.prototype={
$1(a){var s=this.a.cx.a8(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.oj.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hI.prototype={}
A.jL.prototype={
a_(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.km.prototype={
B(){return"AudioCategory."+this.b}}
A.o4.prototype={
jE(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.iG)
if(!B.a.a2(A.c([d.a,d.b,d.c],t.n),new A.o5()))throw A.b(B.hu)},
gF(){return this.a}}
A.o5.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.nI.prototype={
jB(a,b){if(this.a.length===0)throw A.b(B.hd)
if(!B.a.a2(A.c([a.a,a.b,a.c],t.n),new A.nJ()))throw A.b(B.hC)}}
A.nJ.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.i5.prototype={
A(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.nK()))throw A.b(B.i_)
s=B.a.M(A.c([0,0.55,1],s),new A.nL())
if(s)throw A.b(B.ir)},
cv(a,b){this.A()
if(a.ax&&!a.ay&&!a.z)return new A.aH(-1.5,2e4,0)
if(a.ay)return new A.aH(-28,320,1)
return new A.aH(-12,1100,0.55)},
p5(a){return this.cv(a,null)}}
A.nK.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.nL.prototype={
$1(a){A.ax(a)
return a<0||a>1},
$S:4}
A.o0.prototype={
jD(a){var s=A.v(a)
if(new A.ae(a,s.i("ae<1>")).M(0,new A.o2())||new A.ao(a,s.i("ao<2>")).M(0,new A.o3()))throw A.b(B.iB)}}
A.o2.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.o3.prototype={
$1(a){var s
t.a.a(a)
s=J.aQ(a)
return s.gR(a)||s.M(a,new A.o1())},
$S:73}
A.o1.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.z2.prototype={}
A.oc.prototype={}
A.o6.prototype={
jF(a,b,c){var s
for(s=this.b.gak(),s=s.gv(s);s.m();)s.gp().A()},
iF(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.i("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.i("audio listener room missing: "+a0))
r=this.lt(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cs
e=f.cv(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.k(q,g)
B.a.k(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.k(p,"unreachable")
l=-48
k=240
j=1}s=A.c([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.u)(o),++i)s.push(o[i].a)
o=B.b.n(l,-60,0)
m=B.d.n(k,120,2e4)
g=B.b.n(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ab(s,b)
b=A.ab(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.iq)
return new A.oc(s,b,o,m,g,n,c)},
cv(a,b){return this.iF(a,b,B.bD)},
lt(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.pt
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a2],s,t.Es)
p=A.aF([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.e,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.Y(k,new A.o7(r))
j=B.a.ga1(k)
p.a8(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.jf(s,!0)}i=o.aS(j)
h=A.K(i,i.$ti.i("r.E"))
B.a.Y(h,new A.o8())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cs(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cs:d).p5(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.l(0,e,a)
b=q.h(0,j)
b.toString
b=A.K(b,m)
b.push(f)
q.l(0,e,b)
p.k(0,e)}}}return B.ps}}
A.o7.prototype={
$2(a,b){var s,r,q
A.w(a)
A.w(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.I(r,s)
return q===0?B.c.I(a,b):q},
$S:74}
A.o8.prototype={
$2(a,b){var s=t.e
return B.c.I(s.a(a).a,s.a(b).a)},
$S:75}
A.jf.prototype={}
A.fW.prototype={}
A.oK.prototype={
ii(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Eg().bd(q).ga7()
p.d=q
p.c=p.b.bd(q).ga7()
p.a=a}}
A.pu.prototype={}
A.l6.prototype={
dB(a){if(this.at)return
A.qE(a,"requestPointerLock",t.X)},
f5(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bV(r,r.r,r.e,A.v(r).i("bV<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gp()
if(l.length!==0)n.k(0,l)}s.oF(p,n)}this.b0()},
dM(a){var s,r,q,p,o,n,m=this
if(m.ch.dM(a))for(s=m.CW.aR("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.k(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.k(0,n)
break}}},
ow(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.b9(c,A.B(c).i("b9<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gp()
if(r==null||!A.T(r.connected)||A.w(r.mapping)!=="standard")break A
c=A.w(r.id)
q=A.w(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.b9(n,A.B(n).i("b9<1,z>")))
while(n.m())o.push(n.gp())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.b9(d,A.B(d).i("b9<1,aj>")))
while(d.m()){r=d.gp()
p.push(A.T(r.pressed)?1:A.a1(r.value))}s=new A.m0(!0,c,q,o,p)
break}}d=s==null
m=A.GR(d?B.oi:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aR(e),q.gaE(q))
q=f.r
q.kD(A.v(q).i("l(1)").a(new A.qw(l)),!0)
for(p=l.gv(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.n:g,h)){if(i.eC())n.k(0,h)}else n.k(0,h)}}f.e=A.hh(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aR(e),l.gaE(l))){d=r.a(f.c)
d=!B.a.M(c.aR(e),d.gaE(d))}}if(d)i.eD()},
kV(a){var s=this
A.a(a)
if(A.T(a.repeat))return
if(!s.ay)return
if(s.c.k(0,A.w(a.code)))if(B.a.q(s.CW.aR("interact"),A.w(a.code))){if(s.ch.eC())s.d.k(0,A.w(a.code))}else s.d.k(0,A.w(a.code))},
kX(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a8(0,A.w(a.code))
r=this.CW
if(B.a.q(r.aR(q),A.w(a.code))){t.Q.a(s)
s=!B.a.M(r.aR(q),s.gaE(s))}else s=!1
if(s)this.ch.eD()},
l0(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.h(a.button)
if(r.c.k(0,s))if(B.a.q(r.CW.aR("interact"),s)){if(r.ch.eC())r.d.k(0,s)}else r.d.k(0,s)},
l4(a){var s,r="interact",q="Mouse"+A.h(A.a(a).button),p=this.c
p.a8(0,q)
s=this.CW
if(B.a.q(s.aR(r),q)){t.Q.a(p)
p=!B.a.M(s.aR(r),p.gaE(p))}else p=!1
if(p)this.ch.eD()},
l6(a){var s
A.a(a)
if(!this.ay)return
s=A.a1(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.k(0,s)
this.d.k(0,s)},
l2(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fZ(a,"movementX")
s.as=s.as+s.fZ(a,"movementY")},
kZ(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b0()},
l8(a){this.b0()},
fZ(a,b){var s=A.CB(a[b])
if(s==null)s=null
return s==null?0:s},
cM(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fc(n.c,t.N)
for(r=n.e,r=A.fE(r,r.r,A.v(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.k(0,o)}t.Q.a(s)
return B.a.M(n.CW.aR(a),s.gaE(s))},
b0(){var s=this
s.c.P(0)
s.d.P(0)
s.f.P(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eM()}}
A.qw.prototype={
$1(a){return!this.a.q(0,A.w(a))},
$S:3}
A.qv.prototype={
aR(a){var s=this.a.h(0,a)
return s==null?B.n:s},
oF(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.K(a))return
r=t.N
q=A.a_(r)
for(p=A.fE(b,b.r,A.v(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.k(0,n)}s.l(0,a,A.ab(q,r))},
bp(a,b){var s,r,q
t.Q.a(b)
for(s=this.aR(a),r=s.length,q=0;q<r;++q)if(b.a8(0,s[q]))return!0
return!1}}
A.qz.prototype={
eC(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eD(){this.c=this.b=!1
this.d=0},
dM(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.n(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eM(){this.c=this.b=!1
this.d=0}}
A.b8.prototype={
gF(){return this.a}}
A.qU.prototype={}
A.qR.prototype={
oz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.K(b,t.je)
B.a.L(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p].a
if(!s.k(0,o))throw A.b(A.o("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.n(h,t.N)
i.fP(n,i.d,a,b,i.a,j,m)
i.fP(l,i.e,a,c,i.b,j,k)
return new A.qU(n,l,j)},
fP(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.B(d)
s=k.i("H<1,+effectiveScore,light,score(z,b8,z)>")
r=A.K(new A.H(d,k.i("+effectiveScore,light,score(z,b8,z)(1)").a(new A.qS(this,c,b)),s),s.i("a0.E"))
B.a.Y(r,new A.qT())
q=A.a_(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.k(a,m)
q.k(0,l)
s.l(0,l,o.c)}else{B.a.k(g,m)
f.l(0,l,p>=e?k:"Importance score below threshold")}}b.P(0)
b.L(0,q)}}
A.qS.prototype={
$1(a){var s,r
t.je.a(a)
s=a.c.ac(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jy(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:77}
A.qT.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:78}
A.p8.prototype={
ec(a,b){var s,r,q,p,o,n,m,l=this
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
A.r_.prototype={
jn(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.ec(b,c)},
lU(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.j(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.O(s,6.283185307179586)
r=Math.sin(s)
return new A.j(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.ct.prototype={
eI(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.t.dJ(s,0,l,k)
m.a=s}r=b.ac(0,a).bd(d.ac(0,a)).ga7()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.j5(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.j5(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.j5(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.j5(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.j5(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.j5(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aN(a,b,c,d,e){return this.eI(a,b,c,d,e,1,!1,1,1)},
eH(a,b,c,d,e,f,g){return this.eI(a,b,c,d,e,1,!1,f,g)},
iv(a,b,c,d,e,f,g){return this.eI(a,b,c,d,e,f,g,1,1)}}
A.j.prototype={
a4(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
ac(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
a9(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
be(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga7(){var s=this,r=s.gu(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.vb.prototype={
A(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.M(A.c([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.vc()))throw A.b(B.h5)
s=!0
if(!(q<0))if(!(q>1))if(!(p<0))if(!(p>1))if(!(o<0))if(!(o>1))if(!(n<0))if(!(n>1))if(!(m<0))if(!(m>1))if(!(l<0))if(!(k<0))if(!(k>1))if(j>0)if(!(i<0))if(!(i>1))if(!(h<0))if(!(h>1))q=g<0
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
if(q)throw A.b(B.hc)}}
A.vc.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.cv.prototype={
A(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.b(B.i6)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a2(A.c([s,r,q,p,o],t.n),new A.vd()))throw A.b(B.hA)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.b(B.iz)},
gF(){return this.a}}
A.vd.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.eF.prototype={
A(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a2(A.c([o,s,r,q],t.n),new A.v8())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.b(B.hm)},
gF(){return this.a}}
A.v8.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.v9.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=A.a_(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.A()
if(!k.k(0,p.a))throw A.b(B.ic)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.A()
if(!k.k(0,o.a))throw A.b(B.id)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a2(A.c([s,r,n,m],t.n),new A.va())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.b(B.hs)}}
A.va.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.v7.prototype={
ct(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a5.A()
s=a5.f
r=a5.r
q=1/Math.pow(1+a5.w/18,0.72)
p=B.b.n((0.05+0.95*s)*(0.18+0.82*r)*q,0,1)
o=1-s
n=Math.exp(Math.log(320)*o+Math.log(2e4)*s)
m=B.b.n(0.18+0.62*(1-a5.as),0,1)
l=a5.b
k=B.b.n(a5.c/18,0,1)
j=A.c([],t.eQ)
if(l>0.001&&a5.a!==B.w){i=a5.a
h=i.a
g="weather-rain"
switch(h){case 1:break
case 2:g="weather-sleet"
break
case 3:g="weather-snow"
break
case 4:g="weather-hail"
break
case 0:break
default:g=null}switch(h){case 1:h=0.82
break
case 2:h=0.72
break
case 3:h=0.38
break
case 4:h=1
break
case 0:h=0
break
default:h=null}h=B.b.n(l*h*p,0,1)
i=i===B.a9?80:120
B.a.k(j,new A.cv("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.k(j,new A.cv("exterior-wind","weather-wind",B.b.n(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.n(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.k(j,new A.cv("through-wall-thunder","weather-thunder-bed",B.b.n(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.W||i===B.a8
d=B.b.n(a5.ay*l,0,1)
if(e&&d>0.001)B.a.k(j,new A.cv("structure-hail-impact","weather-hail-roof",B.b.n(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.n(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.k(j,new A.cv("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.k(j,new A.cv("interior-window-drip","weather-interior-drip",B.b.n(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a5.ax
b=B.b.n(i*0.75+B.b.n((a5.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.k(j,new A.cv("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.k(j,new A.cv("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.c([],t.wb)
a0=B.d.af(a5.CW,30)
if(a0!==a4.b){a4.b=a0
o=a5.cx
a1=a4.cT(o,a0,17)*2-1
h=a4.cT(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.k(a,new A.eF("hail-impact-"+a0,"weather-hail-tick",0,B.b.n(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.O(a0,3)===0)B.a.k(a,new A.eF("window-rattle-"+a0,"weather-window-tick",0,B.b.n(0.035+c*0.12,0,1),0.94+a4.cT(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.O(a0,15)===0)B.a.k(a,new A.eF("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.cT(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.O((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.k(a,new A.eF("lightning-thunder-"+o,g,a2/343,B.b.n((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.n(0.94+B.d.O(o,11)*0.012,0.88,1.08),B.b.n((h-100)/100,-1,1)))}a3=new A.v9(A.ab(j,t.uz),A.ab(a,t.EI),p,n,m,b)
a3.A()
return a3},
cT(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.m0.prototype={
gF(){return this.b}}
A.mq.prototype={}
A.oD.prototype={
pi(a){var s,r,q,p,o,n=B.f.a0(a.C(),null)
this.a.hK(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oA(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
p=this.fI(r,a)
if(p!=null)return new A.fn(p,null)
o=this.fI(q,a)
if(o!=null)return new A.fn(o,"recovered previous save")
if(r==null)return B.ns
return B.nr}catch(n){return B.nq}},
fI(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hK(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ah(q) instanceof A.A)return null
else throw q}}}
A.kK.prototype={
jI(a,b,c,d,e){if(this.a.length===0)throw A.b(B.ij)
if(this.b<0)throw A.b(B.hv)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ab(q,t.i)
s=t.z
return A.aW(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cm.prototype={
B(){return"EndingKind."+this.b}}
A.ph.prototype={
gaw(){return this.a}}
A.h7.prototype={
C(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.pk.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:79}
A.bH.prototype={}
A.lA.prototype={
C(){var s,r=this,q=t.N,p=A.n(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.E(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
nL(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ac(0,new A.j(0,1.3499999999999999,0))
return!new A.kt(s,s.a4(0,new A.j(0,1.2000000000000002,0))).dm(a,r)}}
A.t0.prototype={
C(){return A.ww(this.a)}}
A.ht.prototype={
C(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.tq.prototype={
hK(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.b(B.iE)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=q.h(0,"version")
if(A.b_(p))o=p!==1&&p!==2
else o=!0
if(o)A.f(A.M("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.f(B.hJ)
k=A.aZ(n,s,r)
return A.Bx(A.aZ(m,s,r),k,2)}}
A.fn.prototype={}
A.dB.prototype={
B(){return"GameSessionEventType."+this.b}}
A.kX.prototype={
gaw(){return this.c},
gaX(){return this.d}}
A.pH.prototype={
gaw(){return this.a},
gaX(){return this.b}}
A.pG.prototype={
gag(){var s=this.d
return new A.pH(s.a,s.b,this.e.b.a)},
giu(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.J)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.B_(m.c).C()
o=m.r
n=o.c
return new A.t0(A.ww(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.C()],k,t.z)))},
lY(a,b){if(!B.a.M(a.f,new A.pI(b)))return!1
this.z.lW(a,b)
return!0},
lX(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.nA(n))return!1
m=m.b
m.l(0,n,"true")
s=a.b
m.l(0,n+".consumer",s)
m.l(0,"last-authored-event",o)
if(s==="aftermath")m.l(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bC(q,"=")
if(p<=0||p===q.length-1)continue
m.l(0,B.c.J(q,0,p),B.c.aQ(q,p+1))}return!0},
nw(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.v(s).i("ao<2>")
q=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(q,new A.pJ())
if(q.length===0)return null
s=A.B(q)
r=s.i("I<1>")
p=A.K(new A.I(q,s.i("l(1)").a(new A.pK()),r),r.i("r.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dx(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.O(n,o.length)]
s=l.c
k=new A.d1(a,l.a,s.length-1,B.a.ga6(s).t(0))
j.l(0,a,k)
return k},
lT(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.a7(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cQ(B.iQ)}if(n<a)this.cQ(B.iR)},
jq(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dL(a)&&s.jp(b)},
oB(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.er){r.c=Math.min(1,r.c+0.1)
q.l(0,"ignored."+o.b+"."+o.c,"true")}}},
jm(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.EP(j,A.ab(i.d,h).length)
if(a===B.e8)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.B(r)
A.EO(j,new A.I(r,q.i("l(1)").a(new A.pL(k)),q.i("I<1>")).gu(0))
r=k.f
q=r.b
if(B.a.q(B.jX,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.ao(j.a/1*3)
B.a.k(r.r,new A.hv(q.a,a,b))
m=r.a
A.F_(m,q.a,n,k.b,A.ab(m.d,h));++q.a
q.fd(7)
r.c=16
r.d=6
r.f=!1
m.j7(B.ky)
s.y.ml(o,c)
l=B.b.ao(j.b/1*6)
if(l>0)r.dL(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ao(i,A.v(i).i("ao<2>")).M(0,new A.pM())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cQ(B.iV)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cQ(B.iU)},
h4(a,b){var s,r=this;++r.y
s=r.d
B.a.k(r.w,new A.kX(s.a,s.b))
B.a.k(r.x,A.EQ(A.I3(a),r.b,r.y-1))},
cQ(a){return this.h4(a,null)}}
A.pI.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:16}
A.pJ.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.pK.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:28}
A.pL.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.uk().jj(this.a.c,a.a)},
$S:83}
A.pM.prototype={
$1(a){return t.g.a(a).e},
$S:28}
A.kn.prototype={
eX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.B(b),a0=a.i("e(1)")
a=a.i("H<1,e>")
A.k7(new A.H(b,a0.a(new A.oq()),a),"level")
s=d.w
r=A.B(s)
q=r.i("e(1)")
r=r.i("H<1,e>")
A.k7(new A.H(s,q.a(new A.or()),r),"room")
p=d.x
o=A.B(p)
A.k7(new A.H(p,o.i("e(1)").a(new A.os()),o.i("H<1,e>")),"portal")
o=d.y
n=A.B(o)
A.k7(new A.H(o,n.i("e(1)").a(new A.ot()),n.i("H<1,e>")),"stair")
m=new A.H(b,a0.a(new A.ou()),a).b9(0)
l=new A.H(s,q.a(new A.ov()),r).b9(0)
r=A.n(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.u)(p),++k){j=p[k]
r.l(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.q(0,b))throw A.b(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.K(b))throw A.b(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.b(B.hh)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.u)(s),++k){h=s[k]
a=h.b
if(!m.q(0,a))throw A.b(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.B(a)
q=h.a
A.k7(new A.H(a,a0.i("e(1)").a(new A.ow()),a0.i("H<1,e>")),"window in "+q)
a0=h.f
A.k7(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.u)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.b(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.b(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.u)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.q(0,a))throw A.b(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.q(0,a0))throw A.b(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.b(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.u)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.b(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.b(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
eW(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.i("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.i("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.b(A.i("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.b(A.i("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.b(A.i("authored/runtime room or portal count mismatch"))
for(r=t.o,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.b(A.i("authored room missing at runtime: "+n))
l=o.c
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.i(n+" origin.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.i(n+" origin.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.i(n+" origin.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.i(n+" size.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.i(n+" size.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.i(n+" size.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.i("window count mismatch for "+n))
for(n=A.B(j),i=n.i("l(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bK(new A.I(j,i.a(new A.op(e)),n),r)
if(d==null)throw A.b(A.i("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.f(A.i(c+" offset mismatch: "+A.y(h)+" != "+A.y(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.f(A.i(c+a+A.y(h)+" != "+A.y(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.f(A.i(c+a0+A.y(h)+" != "+A.y(g)))}}for(a1=b.x,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.b(A.i("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.i("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.f(A.i(q+a+A.y(n)+" != "+A.y(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.f(A.i(q+a0+A.y(n)+" != "+A.y(l)))
if(o.y!=m.at)throw A.b(A.i("door model mismatch for "+q))}a1=b.y
s=a2.d
if(a1.length!==s.length||B.a.gbj(a1).b!==B.a.gbj(s).b)throw A.b(A.i("stair manifest mismatch"))}}
A.ok.prototype={
$1(a){var s=A.hV(a,"level"),r=A.bJ(s,"id")
A.bJ(s,"kind")
A.eS(s,"floorY")
return new A.ee(r)},
$S:84}
A.ol.prototype={
$1(a){return A.Ew(a,this.a)},
$S:85}
A.om.prototype={
$1(a){var s=this.a,r=A.hV(a,"portal"),q=A.bJ(r,"id"),p=A.bJ(r,"a"),o=A.bJ(r,"b"),n=A.zL(r,"facingA"),m=A.zL(r,"facingB"),l=A.eS(r,"offsetA"),k=A.eS(r,"offsetB"),j=A.eS(r,"width"),i=A.eS(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.w(r.h(0,"doorKit")):null
return new A.ef(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:86}
A.on.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.hV(a,"stair")
return new A.eh(A.bJ(p,"id"),A.bJ(p,"portalId"),A.IP(p.h(0,s),s),A.nu(p.h(0,"min"),"min"),A.nu(p.h(0,"max"),"max"),A.nu(p.h(0,r),r),A.nu(p.h(0,q),q))},
$S:87}
A.oo.prototype={
$1(a){return typeof a=="string"?a:A.e4("exterior cell")},
$S:53}
A.oq.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.or.prototype={
$1(a){return t.bJ.a(a).a},
$S:31}
A.os.prototype={
$1(a){return t.lT.a(a).a},
$S:91}
A.ot.prototype={
$1(a){return t.gI.a(a).a},
$S:92}
A.ou.prototype={
$1(a){return t.mD.a(a).a},
$S:30}
A.ov.prototype={
$1(a){return t.bJ.a(a).a},
$S:31}
A.ow.prototype={
$1(a){return t.ya.a(a).a},
$S:93}
A.op.prototype={
$1(a){return t.o.a(a).a===this.a.a},
$S:14}
A.ox.prototype={}
A.y_.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fP
break A}if("first"===a){s=B.fQ
break A}s=B.fR
break A}return s},
$S:95}
A.ee.prototype={
gF(){return this.a}}
A.eg.prototype={
gF(){return this.a}}
A.oy.prototype={
$1(a){var s=this.a,r=A.hV(a,"window")
return new A.ei(A.bJ(r,"id"),A.zL(r,"facing"),A.eS(r,"offset")*s,A.eS(r,"sill")*s,A.eS(r,"width")*s,A.eS(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:96}
A.oz.prototype={
$1(a){return typeof a=="string"?a:A.e4("portal id")},
$S:53}
A.ei.prototype={
gF(){return this.a}}
A.ef.prototype={
gF(){return this.a}}
A.eh.prototype={
gF(){return this.a}}
A.xy.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.xV.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.kt.prototype={
ghv(){var s=this.d
return s==null?null:s.a.a},
iz(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null||!isFinite(d)){n.d=null
return}s=c.d
r=A.B(s)
q=new A.I(s,r.i("l(1)").a(new A.oO(e)),r.i("I<1>"))
p=!q.gv(0).m()?null:q.ga1(0)
if(p==null){n.d=null
return}if(!(n.cO(b,p.f)&&a==="hall"))o=n.cO(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mr(p,B.b.n(d,0,1))},
nZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fY(g,c,d)
s=h.ky(a,b,c,d)
if(s!=null){h.d=s
return h.fY(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hD(Math.sqrt(r*r+q*q)/0.08))
o=d.a9(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.lE(a,n,m,o)
l=l||j.b
m=j.a
i=h.oy(a,n)
n=i==null?n:i}h.bo(m)
return new A.ln(m,n)},
ky(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cO(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cO(c,l)){l=j<0||o
h=l}if(i||h)return new A.mr(m,i?0:1)}return null},
fY(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ac(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.n(a.b+o/p,0,1)
n=A.BO(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bo(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ln(n,k)},
cO(a,b){var s=a.ac(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
lE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cV(c,!1)
s=h.cW(a,b,c,new A.j(g,0,0))
r=s.a
q=d.c
p=h.cW(a,b,r,new A.j(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cV(p.a,!1)
n=c.a4(0,new A.j(0,0.35,0))
h.bo(n)
if(!h.dm(a,b)){m=h.cW(a,b,n,new A.j(g,0,0))
l=h.cW(a,b,m.a,new A.j(0,0,q))
if(!m.b&&!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.j(g,r-j,q)
h.bo(i)
if(h.dm(a,b))break}h.bo(k)
return new A.cV(k,!1)}}if(o)return new A.cV(r,!0)
if(!p.b)return new A.cV(p.a,!0)
h.bo(c)
return new A.cV(c,!0)},
cW(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cV(c,!1)
s=c.a4(0,d)
this.bo(s)
if(this.dm(a,b)){this.bo(c)
return new A.cV(c,!0)}return new A.cV(s,!1)},
bo(a){var s=a.ac(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.a4(0,new A.j(0,1.2000000000000002,0))},
dm(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aH(m)
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
return!this.lB(a,m,s)},
oy(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aH(k)
for(r=k.a,q=a.aS(r),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>"));q.m();){o=p.gp()
n=o.cs(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hr(k,o,s)&&this.kq(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lB(a,b,c){var s,r,q
for(s=a.aS(b.a),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.hr(b,q,c))return!0}return!1},
hr(a,b,c){var s,r,q,p=a.a,o=b.b4(p),n=b.aM(p)
p=o===B.A||o===B.r
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
kq(a,b,c){var s,r=this
switch(b.b4(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sm3(a){this.a=t.a7.a(a)}}
A.oO.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:97}
A.ln.prototype={}
A.cV.prototype={}
A.mr.prototype={}
A.it.prototype={
gaw(){return this.a}}
A.qb.prototype={
ml(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.V,r)
s=B.V[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jk(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.c}return r},
jl(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.d}return r},
C(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a8.prototype={}
A.kN.prototype={
gnP(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.c([r,q,p,o,n,m],t.n),new A.pm())&&o>=r&&n>=q&&m>=p}}
A.pm.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.l3.prototype={
A(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.O(s,3)!==0}else s=!0
if(s)throw A.b(A.o("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.o("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnP())throw A.b(A.o("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.qd()))throw A.b(A.o("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.o("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.o("QHMX index "+o+" exceeds vertex count",m))}}}
A.qd.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.qc.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bI(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bI(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bI(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bI(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bI(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bI(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a8(a,b,c,m,n,o,0,0,p),r=new A.a8(g,h,i,m,n,o,1,1,p)
this.au(s,new A.a8(d,e,f,m,n,o,1,0,p),r)
this.au(s,r,new A.a8(j,k,l,m,n,o,0,1,p))},
au(a,b,c){var s=this,r=s.b
B.a.k(r,s.e2(a))
B.a.k(r,s.e2(b))
B.a.k(r,s.e2(c))},
e2(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.i("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
m8(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.i("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.l3(A.ab(g,t.hl),new Uint16Array(A.S(this.b)),new A.kN(s,r,q,p,o,n))
h.A()
return h}}
A.kO.prototype={}
A.yV.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ax.q(0,s))A.f(A.i("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:98}
A.xN.prototype={
$2(a,b){var s=t.Ez
return B.c.I(s.a(a).a,s.a(b).a)},
$S:99}
A.dm.prototype={
ph(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.l(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.k(i,p[n])}B.a.k(s,m)}return new A.jq(A.Ks(new A.l3(i,new Uint16Array(A.S(s)),A.HL(i))),l.a,l.b,l.c,A.c([],k))}}
A.jq.prototype={}
A.f4.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.kP.prototype={
mf(a){var s
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
mg(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cK
break A}if("kitchen"===a||"cellar"===a){s=B.fM
break A}if("bathroom"===a){s=B.fN
break A}if("spare-room"===a){s=B.fO
break A}s=B.cK
break A}return this.mf(s)},
i_(a,b,c,d){d.i("r<0>").a(b)
t.Q.a(c)
return new A.bI(this.ns(d.i("e(0)").a(a),b,c,d),d.i("bI<0>"))},
ns(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$i_(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.ax.gaE(B.ax)))throw A.b(A.o("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bV(l,l.r,l.e,r.$ti.i("bV<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ax.q(0,j))throw A.b(A.i("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eK.prototype={
hG(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.xl.prototype={
$1(a){var s=this
return t.xT.a(a).hG(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:33}
A.xk.prototype={
$1(a){return t.xT.a(a).hG(0,(this.a+this.b)*0.5,this.c)},
$S:33}
A.dA.prototype={
B(){return"FocusKind."+this.b}}
A.er.prototype={
gF(){return this.b}}
A.tn.prototype={}
A.wr.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:101}
A.xJ.prototype={
$1(a){return B.d.n(B.b.ao(a*this.a),0,255)},
$S:102}
A.eJ.prototype={}
A.q9.prototype={
nE(){var s,r,q,p,o,n,m=this
m.kG()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.i("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.i("authored portal endpoint missing: "+o.a))}},
eN(a){var s=this.w
if(s==null)return null
return new A.j(s.a,a,s.c)},
kG(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.K(n))throw A.b(A.i("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.K(n))throw A.b(A.i("duplicate portal "+n))
q.l(0,n,m)}},
aH(a){var s=a.c,r=this.y,q=a.a
return new A.j(s.a+r.jk(q),s.b+r.jl(q),s.c)},
aS(a){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qs(a)),r.i("I<1>"))},
ox(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.a7(a,"roomId","not a portal endpoint"))
r=this.aH(o)
q=b.aM(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b4(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
iq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a2
s=A.c([new A.a5(a,B.a2)],t.nR)
r=A.aF([a],t.N)
for(q=this.e,p=t.e;s.length!==0;){o=B.a.oE(s,0)
n=o.a
m=o.b
for(l=this.aS(n),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>"));l.m();){j=k.gp()
i=j.cs(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.K(m,p)
h.push(j)
B.a.k(s,new A.a5(i,h))}}}return B.a2}}
A.qs.prototype={
$1(a){var s
t.e.a(a)
s=this.a
return a.b===s||a.c===s},
$S:103}
A.pl.prototype={}
A.uk.prototype={
jj(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.ul())}else s=!1
return s}}
A.ul.prototype={
$1(a){return t.o.a(a).w},
$S:14}
A.qe.prototype={
ir(a){var s=this.e,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qi(a)),r.i("I<1>"))},
got(){var s=this.e,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qh()),r.i("I<1>"))},
gju(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q].f
o=l.h(0,p)
l.l(0,p,(o==null?0:o)+1)}return A.aW(l,n,m)},
os(a){var s,r,q
for(s=this.got(),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gp()
if(q.y===a)return q}return null},
bL(a){return B.a.b5(this.d,new A.qf(a),new A.qg(a))},
eW(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.i("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.i("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.i("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.b(A.i("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.i("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aF(["production","proxy","invisible-anchor"],s).q(0,l))throw A.b(A.i("invalid inventory asset status "+m+": "+l))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){g=q[o]
l=g.a
if(!j.k(0,l))throw A.b(A.i("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.b(A.i(a7+l+" references "+k))
n=a6.bL(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.Ed()
if(!d.b.test(e))throw A.b(A.i("invalid inventory focusId "+l+": "+e))
if(!h.k(0,e))throw A.b(A.i("duplicate inventory focusId "+e))}e=g.z
if(e<0||!isFinite(e))throw A.b(A.i("invalid clearance for "+l))
d=g.Q
c=!0
if(isFinite(d))if(!(d<0))if(isFinite(g.as)){b=g.at
if(isFinite(b))if(isFinite(g.ax))if(!(b<0))d=d>0&&b<=0
else d=c
else d=c
else d=c}else d=c
else d=c
else d=c
if(d)throw A.b(A.i("invalid thermal source for "+l))
d=g.ay
c=d.a
if(!A.aF(["none","static","dynamic","kinematic"],s).q(0,c))A.f(A.i("invalid physics body type for "+l))
b=d.b
a=!0
if(isFinite(b)){a0=d.c
if(isFinite(a0)){a1=d.d
if(isFinite(a1)){a2=d.e
if(isFinite(a2)){a=d.f
a=!isFinite(a)||b<0||a0<0||a1<0||a2<0||a<0||a>1}}}}if(a)A.f(A.i("invalid physics values for "+l))
c=c==="none"
if(c)a=b!==0||d.c!==0||d.r
else a=!1
if(a)A.f(A.i("physics none body cannot carry mass or collision: "+l))
c=!c
if(c)a=b<=0||d.c<=0||d.d<=0
else a=!1
if(a)A.f(A.i("physical body needs positive mass and density: "+l))
if(c&&Math.abs(b-d.c*d.d)>Math.max(0.01,b*0.02))A.f(A.i("mass and density disagree for "+l))
d=g.e
if(d!=null&&!i.k(0,k+":"+d))throw A.b(A.i("duplicate inventory socket "+k+":"+d))
k=g.f.a
d=k.a*a8
c=k.b*a8
k=k.c*a8
a3=g.iB(n,a8)
a4=g.eR(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.b(A.i(a7+l+" escapes "+f.a))}}}
A.qi.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:34}
A.qh.prototype={
$1(a){return t.fl.a(a).x},
$S:34}
A.qf.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:105}
A.qg.prototype={
$0(){return A.f(A.i("inventory asset missing: "+this.a))},
$S:7}
A.d8.prototype={
gF(){return this.a}}
A.cK.prototype={
iB(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.j(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
eR(a,b){var s=this.f.c.b*b,r=a.r
return new A.j(r.a.b*s,r.b.b*s,0)},
gF(){return this.a}}
A.l9.prototype={}
A.qC.prototype={}
A.qA.prototype={}
A.xU.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.qB.prototype={
C(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.v(o).i("ae<1>")
n=A.K(new A.ae(o,n),n.i("r.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.l(0,q,o.h(0,q))}return p},
eO(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.h6)
s=t.X
r=A.aZ(a,s,s)
s=this.a
s.P(0)
for(q=new A.N(r,A.v(r).i("N<1,2>")).gv(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.b_(o)||o<0)throw A.b(B.hx)
s.l(0,n,o)}}}
A.dL.prototype={}
A.qj.prototype={
pf(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fE(a5,a5.r,A.v(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.u)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aH(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.j(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.j(a*a3,a0*a3,a1*a3)}else a4=new A.j(0,-1,0)
B.a.k(s,new A.dL(new A.j(d,c,e),a4,16760952,3.8,2.1*this.lr(k),80,180,0.12))}}B.a.Y(s,new A.qk(a6))
return A.hy(s,0,A.e7(4,"count",t.S),t.A_).bE(0)},
lr(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.qk.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.I(a.a.ac(0,s).gu(0),b.a.ac(0,s).gu(0))},
$S:107}
A.eq.prototype={
B(){return"Floor."+this.b}}
A.ep.prototype={
B(){return"Facing."+this.b}}
A.fx.prototype={
sji(a){this.w=A.T(a)},
gF(){return this.a}}
A.c9.prototype={
cs(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b4(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.a7(a,"roomId","not an endpoint of "+s.a))},
aM(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.a7(a,"roomId","not an endpoint of "+s.a))},
gF(){return this.a}}
A.lh.prototype={
gF(){return this.a}}
A.fr.prototype={
gF(){return this.a}}
A.fm.prototype={
gF(){return this.a}}
A.qm.prototype={
nj(a){return B.a.b5(this.c,new A.qn(a),new A.qo(a))},
pb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.i("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.i("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.n(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.b(A.i("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.i("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.i("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.i("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gR(k)||k.ga3().M(0,new A.qp())||k.gak().M(0,new A.qq()))throw A.b(A.i("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.b(A.i("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.b(A.i("sound emitter "+l+" escapes "+j.a))}}}
A.qn.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:108}
A.qo.prototype={
$0(){return A.f(A.i("sound emitter missing: "+this.a))},
$S:7}
A.qp.prototype={
$1(a){return B.c.aP(A.w(a)).length===0},
$S:3}
A.qq.prototype={
$1(a){return B.c.aP(A.w(a)).length===0},
$S:3}
A.d7.prototype={
gF(){return this.a}}
A.qa.prototype={
cb(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a7(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.kw}q=A.c([],t.Fm)
p=B.b.aV(r)+1
o=B.b.aV(b)
for(n=p;n<=o;++n){m=B.d.O(n,24)
B.a.k(q,new A.f9("tick",m))
if(B.d.O(m,3)===0){B.a.k(q,new A.f9("cuckoo",m))
B.a.k(q,new A.f9("bell",m))}if(B.d.O(m,6)===0)B.a.k(q,new A.f9("chime",m))}l.b=b
return q}}
A.f9.prototype={
gaX(){return this.b}}
A.ql.prototype={
cb(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a7(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.kv}q=A.c([],t.op)
for(p=B.b.aV(r)+1;p<=B.b.aV(b);++p){o=B.d.O(p,24)
n=B.d.O(o,4)
if(n===2)B.a.k(q,B.jo)
if(B.d.O(o,3)===1)B.a.k(q,B.jq)
if(B.d.O(o,8)===5)B.a.k(q,B.jt)
if(B.d.O(o,5)===0)B.a.k(q,B.jp)
if(B.d.O(o,7)===3)B.a.k(q,B.ju)
if(n===1)B.a.k(q,B.jr)
if(B.d.O(o,6)===4)B.a.k(q,B.js)}m.b=b
return q}}
A.d6.prototype={}
A.xT.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.qr.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
m_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.k(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.k(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.A3(new A.ae(o,A.v(o).i("ae<1>")),d)){d=f.b
if(A.A3(new A.ae(d,A.v(d).i("ae<1>")),r)){d=f.c
e=!A.A3(new A.ae(d,A.v(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.i3)
e=f.d
if(e<0||e>2)A.f(B.hi)
a.y.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.u)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.u)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.u)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.u)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.iM.prototype={
C(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iA.prototype={
C(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bA.prototype={
gF(){return this.a}}
A.pg.prototype={
$1(a){return this.a.q(0,A.w(a))},
$S:3}
A.es.prototype={
B(){return"Hand."+this.b}}
A.v4.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
fc(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.lg.prototype={
C(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.D[r]
o.l(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.H(B.D,t.oI.a(new A.qX(this)),t.jT).W(0," \xb7 ")}}
A.qW.prototype={
$2(a,b){return new A.P(A.w(a),A.w(b),t.q)},
$S:109}
A.qX.prototype={
$1(a){return this.a.a.h(0,A.w(a))},
$S:110}
A.c4.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gaw(){return this.b}}
A.qG.prototype={
ce(a){t.G.a(a)
return a.a===5&&B.a.a2(B.D,new A.qN(this,a))},
fn(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.ce(b))return null
s=this.e++
r=new A.c4(s,a,A.c([A.qV(b,c,d)],t.Bv),e,!1,null,null)
this.b.l(0,s,r)
return r},
ei(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.ce(b))return!1
B.a.k(s.c,A.qV(b,c,B.aN))
return!0},
lS(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.ce(b))return!1
s.r=A.qV(b,0,B.d7)
return!0},
j7(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.P(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.K(p)&&!B.a.q(s,p))B.a.k(s,p)}},
pe(a){var s
if(!this.b.K(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.v(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ac(r,r.r,r.e,A.v(r).i("ac<2>"));r.m();)s.push(r.d.C())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qN.prototype={
$1(a){var s
A.w(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.i6.prototype={
C(){var s,r=this,q=A.n(t.N,t.X)
q.l(0,"kind",r.a.b)
q.l(0,"explicit",r.b)
q.l(0,"automatic",!1)
q.l(0,"rejected",r.d)
q.l(0,"aliasUsed",r.f)
s=r.e
if(s!=null)q.l(0,"rejectionReason",s)
s=r.r
if(s!=null)q.l(0,"aliasReason",s)
return q}}
A.oA.prototype={
cB(a){var s,r,q=a==null?null:B.c.aP(a).toLowerCase()
if(q==null||q.length===0)return B.eN
if(q==="pixeldart")return B.eM
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.i6(B.aT,!1,!0,r,s,s?r:null)}}
A.iO.prototype={}
A.rU.prototype={
C(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gak(),s=s.gv(s),r=t.N;s.m();){q=s.gp()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.xI.prototype={
$1(a){A.w(a)
return a.length!==0&&a!==".."},
$S:3}
A.iP.prototype={}
A.lF.prototype={}
A.rW.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.rX.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.rO.prototype={}
A.rN.prototype={
ghL(){var s,r,q="pixeldart",p=this.b,o=p.aI
if(o){s=p.w
s===$&&A.t()
s=s.a.b}else s="safe"
p=A.Bt(q,o?p.gmc():B.l8,!1,s)
r=p
if(r==null)r=A.Bt(q,A.c([],t.s),!1,"safe")
p=A.Bs(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
c2(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bO){if(k.aI){s=k.d
s===$&&A.t()
s=s.a.b===B.a1}else s=!1
s=!s
if(s){m.d=B.X;++k.ew
j=B.X}if(j===B.bO)return}if(j!==B.X)A.f(A.i(l))
B.f.a0(A.E(["backend","pixeldart","interpolation",0,"facts",A.ww(a.a.a)],t.N,t.X),null)
j=k.aI
if(j){s=k.d
s===$&&A.t()
s=s.a.b===B.a1}else s=!1
if(s){if(m.d!==B.X)A.f(A.i(l))
m.d=B.bO
return}if(!j)A.f(A.i("Pixeldart runtime is not initialized"))
j=k.to
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.da(j)
j=$.Av()
s=j.b
q=j.c
p=A.ze(k.b/k.c,q,j.a,s)
j=p.a9(0,r)
j=A.AK(k.b/k.c,B.v,q,B.oD,s,p,r,j)}o=new A.kU(j,k.x1,k.x2,-1,k.np++,k.ew,k.ex,k.dh)
n=new A.us()
$.Aq()
j=$.t3.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.t()
s=k.f
s===$&&A.t()
k.lA(j.m4(s,o),o)
k.df=k.e.nl()
j=$.t3.$0()
n.b=j
k.dg=n.gni()/1000},
i4(a){if(this.d!==B.X)A.f(A.i("pixeldart backend is not ready"))
B.f.a0(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rP.prototype={
md(a,b){var s,r,q,p,o,n,m
a.A()
s=B.ct.cB(a)
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
o=A.K(o,A.v(o).c)
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.u)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.ly.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.rQ.prototype={
C(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rR.prototype={
hF(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.o("surface dimensions must be positive",null))
s=a1.a
A:{if(B.G===s){r=new A.fG(1080,1920)
break A}if(B.Q===s){r=new A.fG(720,1280)
break A}r=new A.fG(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.ao(r.b*q)
q=B.b.ao(r.a*q)
o=B.b.n(a5/p,0,1)
n=B.b.n(a4/q,0,1)
m=o<n?o:n
r=this.fq(B.b.ao(p*m),320,a5)
q=this.fq(B.b.ao(q*m),180,a4)
l=s===B.G
k=s===B.Q
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
break E}g=a0==="linear"?B.fq:B.b7
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fB
break F}if("errors"===b){c=B.cB
break F}c=B.fC
break F}return new A.iX(a1,r,q,h,g,i,p,f,e,d,c)},
fq(a,b,c){if(c<b)return c
return B.d.n(a,b,c)}}
A.rS.prototype={}
A.hn.prototype={}
A.rT.prototype={}
A.rV.prototype={
dq(a,b,c,d){return this.nT(a,t.zL.a(b),c,d)},
nT(a,b,c,d){var s=0,r=A.aL(t.c_),q,p,o,n,m
var $async$dq=A.aM(function(e,f){if(e===1)return A.aI(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a6(B.fd.dn(new A.rq(d,b),B.lB),$async$dq)
case 3:p=new o.iP(n,m,f)
A.Bk(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dq,r)}}
A.rY.prototype={}
A.rZ.prototype={
cr(a,b,c){return this.nU(a,t.xJ.a(b),t.tX.a(c))},
nU(a,b,c){var s=0,r=A.aL(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cr=A.aM(function(d,e){if(d===1)return A.aI(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga3(),o=o.gv(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gp()
l=p.h(0,m)
if(l==null)l=A.f(A.i("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a6(b.$1(l.c),$async$cr)
case 5:k=i.FC(h.a(g.ai(e,null)))
m=l.a
if(k.b!==m)throw A.b(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.b(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a6(B.fg.dq(m,new A.t_(c,l),l.b,k),$async$cr)
case 6:i.k(h,e)
s=3
break
case 4:q=new A.lF(A.Bk(j))
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cr,r)}}
A.t_.prototype={
$1(a){return this.a.$2(this.b.a,A.w(a))},
$S:111}
A.iz.prototype={
gi8(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gn8(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.t8.prototype={
p9(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bk
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bk
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.iz(!0,B.b.n(q*(0.6+b*0.6),0,1),0.82+s.aA()*0.1,0.9+s.aA()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.aA()*0.15
p=(0.6+s.aA()*2.8)*1000
l.x=p
l.e=p/343
o=s.aA()*3.141592653589793*2
n=0.28+s.aA()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.z=new A.iz(!0,B.b.n(0.6+b*0.6,0,1),0.82+s.aA()*0.1,0.9+s.aA()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.aA()*6}}}
A.lM.prototype={
B(){return"RendererBackendKind."+this.b}}
A.hq.prototype={
B(){return"RendererBackendState."+this.b}}
A.tl.prototype={}
A.lN.prototype={
gF(){return this.a}}
A.tk.prototype={
jO(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.o("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.o("renderer provenance values must be non-empty",null))}},
C(){var s,r,q,p=this,o=A.n(t.N,t.z)
o.l(0,"backend",p.a)
o.l(0,"profile",p.b)
o.l(0,"buildId",p.c)
o.l(0,"capabilities",p.d)
s=p.e
r=s!=null
o.l(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.l(0,"fallback",!1)
q=p.Q
if(q!=null)o.l(0,"selection",q)
if(r)o.l(0,"rendererSha",s)
s=p.f
if(s!=null)o.l(0,"gameSha",s)
s=p.r
if(s!=null)o.l(0,"sdkVersion",s)
s=p.w
if(s!=null)o.l(0,"lockfileDigest",s)
s=p.x
if(s!=null)o.l(0,"projectVersion",s)
return o}}
A.tm.prototype={
dC(a,b){if(a<=0||b<=0)throw A.b(A.o("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
ia(a,b){var s,r,q,p,o
for(s=A.ab(this.a.d,t.rO),r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.u9.prototype={
lZ(a){var s,r,q,p,o,n,m,l,k=this.a
k.P(0)
s=a.w
s===$&&A.t()
r=A.B(s)
q=r.i("l(1)").a(new A.ua())
s=B.a.gv(s)
r=new A.U(s,q,r.i("U<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gp()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.l(0,n,A.E(["requested",l,"effective",o],q,p))}}}
A.ua.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.bZ.prototype={
B(){return"ShaderDebugMode."+this.b},
gn6(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.j2.prototype={
B(){return"ShaderTuningAvailability."+this.b}}
A.dh.prototype={
B(){return"ShaderTuningCategory."+this.b}}
A.cs.prototype={
gnu(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.E(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.E(r,2)
else return B.b.E(r,3)}},
gem(){var s,r,q=this
if(q.Q!==B.z)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.E(r,1)
if(s>=0.01)return B.b.E(r,2)
return B.b.E(r,3)},
gF(){return this.a}}
A.ub.prototype={
gbr(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.d(B.au,p)
s=B.au[p]
p=this.w
p===$&&A.t()
r=A.B(p)
q=r.i("I<1>")
p=A.K(new A.I(p,r.i("l(1)").a(new A.ui(s)),q),q.i("r.E"))
return p},
gbN(){var s,r=this.gbr(),q=r.length
if(q===0)return null
s=B.d.n(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
nD(){var s,r
if(this.b===5)return
else{s=this.gbN()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y+s.w,s.f,s.r)}},
n0(){var s,r
if(this.b===5)return
else{s=this.gbN()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y-s.w,s.f,s.r)}},
oI(){var s,r,q,p,o
if(this.b===5)this.e=B.az
else for(s=this.gbr(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
oG(){var s,r,q,p
this.e=B.az
s=this.w
s===$&&A.t()
r=0
for(;r<60;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
oQ(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.t()
r=0
for(;r<60;++r){q=s[r]
p=q.a
o=d.q(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.z:B.e7
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.az},
n2(){var s,r,q,p=this.w
p===$&&A.t()
s=A.B(p)
s=new A.I(p,s.i("l(1)").a(new A.uc()),s.i("I<1>")).gu(0)
r=A.B(p)
r=new A.I(p,r.i("l(1)").a(new A.ud()),r.i("I<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.d(B.au,p)
p=B.au[p]
q=this.gbN()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
eT(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.t()
j=A.K(j,t.r)
B.a.Y(j,new A.uj())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.u)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.z)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
gnY(){var s,r,q,p=A.c([],t.s),o=this.w
o===$&&A.t()
s=0
for(;s<60;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.X(p)
return p},
nC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.ai(a,g),c=t.f
if(!c.b(d))throw A.b(B.iF)
if(!J.aa(d.h(0,"schema"),"pixeldart-shader-lab-v1")||!J.aa(d.h(0,"version"),1))throw A.b(B.ik)
s=d.h(0,"controls")
if(t.j.b(s)){r=J.cD(s)
this.w===$&&A.t()
r=r!==60}else r=!0
if(r)throw A.b(B.hb)
r=t.N
q=A.n(r,t.r)
p=this.w
p===$&&A.t()
o=0
for(;o<60;++o){n=p[o]
q.l(0,n.a,n)}m=A.n(r,t.X)
for(r=J.O(s);r.m();){l=r.gp()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.K(f))throw A.b(B.iA)
k=A.w(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.K(k))throw A.b(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bx(j))throw A.b(A.M("toggle "+k+" requires a boolean request",g,g))
m.l(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.b(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.b(A.M(e+k+" is outside ["+A.y(i)+", "+A.y(n.r)+"]",g,g))
m.l(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.M(B.dp,new A.ug(h)))throw A.b(B.hF)
if(h!=="none")throw A.b(B.ht)
for(o=0;o<60;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.T(c)
else n.y=A.ax(c)}this.e=B.a.an(B.dp,new A.uh(h))},
H(a){var s,r,q=this.w
q===$&&A.t()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.uf(a)),s.i("I<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bF(a){var s,r,q=this.w
q===$&&A.t()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.ue(a)),s.i("I<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.ui.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:8}
A.uc.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.ud.prototype={
$1(a){return t.r.a(a).Q!==B.z},
$S:8}
A.uj.prototype={
$2(a,b){var s=t.r
return B.c.I(s.a(a).a,s.a(b).a)},
$S:113}
A.ug.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:37}
A.uh.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:37}
A.uf.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.ue.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.ur.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:115}
A.c_.prototype={
B(){return"SleepQuality."+this.b}}
A.bD.prototype={
B(){return"SleepLocation."+this.b}}
A.hv.prototype={
gaw(){return this.a}}
A.p9.prototype={
dL(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jp(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.pa.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:116}
A.pb.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:117}
A.l7.prototype={
B(){return"InteractionType."+this.b}}
A.fz.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.vp.prototype={}
A.fy.prototype={}
A.kx.prototype={}
A.qt.prototype={}
A.qx.prototype={
f2(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.Y(p,new A.qy())
return p},
mk(a,b){var s,r,q,p,o,n=b.b
if(n.gR(n))return B.pr
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga3(),s=s.gv(s),p=a.c;s.m();){o=s.gp()
if(B.a.ga6(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.fy(B.aY,r)
s=r.a
o=B.a.ga6(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.ga6(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fy(B.ev,r)
return new A.fy(B.ce,r)},
le(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.kx(e,!1,B.pq,null)
s=q.d===c
r=this.mk(q,d)
this.d.$1(e)
return new A.kx(e,s,r,r.a===B.aY&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga6(q.c).t(0)+'".':null)},
mU(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aY)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.qt(B.a.ga6(s.c).t(0)+" but "+A.y(a.f))}}
A.qy.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.I(s.a(b).a,a.a)},
$S:17}
A.iT.prototype={
gF(){return this.a}}
A.iS.prototype={
gF(){return this.a}}
A.dd.prototype={
gF(){return this.a}}
A.t6.prototype={}
A.t7.prototype={}
A.t5.prototype={
jN(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
n=o.a
m=!0
if(n.length!==0)if(o.r.length!==0){l=o.b
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){k=o.c
if(isFinite(k.a)&&isFinite(k.b)&&isFinite(k.c)){j=o.d
if(isFinite(j))if(!(j<=0)){j=o.e
if(isFinite(j))if(!(j<0))if(!(j>1)){m=o.f
m=!isFinite(m)||m<=0||k.b>=l.b}}}}}if(m)A.f(A.o("invalid rain roof catchment "+n,null))
m=o.r
if(!q.K(m))throw A.b(A.o("roof "+n+" references missing drain "+m,null))}for(s=new A.ac(q,q.r,q.e,A.v(q).i("ac<2>"));s.m();){r=s.d
q=r.a
n=!0
if(q.length!==0){m=r.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){l=r.c
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){r=r.d
r=!isFinite(r)||r<=0||l.b>m.b+0.001}else r=n}else r=n}else r=n
if(r)A.f(A.o("invalid rain drain "+q,null))}},
jv(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=!0
if(isFinite(a9))if(!(a9<0))if(isFinite(a8))if(!(a8<0))a7=!isFinite(1)
if(a7)throw A.b(A.o("invalid rain flow step inputs",null))
s=A.c([],t.F7)
r=A.n(t.N,t.i)
for(a7=this.a,q=a7.length,p=b0.a,o=a8<=0.000001,n=0,m=0,l=0,k=0;k<q;++k){j=a7[k]
i=j.a
h=p.h(0,i)
g=a9*j.d*j.e*a8
f=B.b.n(h==null?0:h,0,1/0)+g
n+=g
e=B.b.n(j.f*a8,0,f)
d=f-e
p.l(0,i,d)
l+=d
m+=e
if(e>0){h=o?1:a8
B.a.k(s,new A.dd(i+":slope",j.b,j.c,e/h,0.018+B.b.n(e,0,0.02)*0.6))}i=j.r
h=r.h(0,i)
r.l(0,i,(h==null?0:h)+e)}for(p=this.b,c=0,b=0,k=0;k<q;++k){i=a7[k].r
a=r.h(0,i)
if(a==null)a=0
if(a<=0)continue
a0=p.h(0,i)
a1=B.b.n(a,0,a0.d*a8)
a2=a-a1
c+=a1
b+=a2
if(a1>0){h=a0.a
a3=a0.b
a4=a0.c
a5=o?1:a8
B.a.k(s,new A.dd(h+":downpipe",a3,a4,a1/a5,0.014+B.b.n(a1,0,0.02)*0.5))}if(a2>0){h=a0.a
a3=a0.b
a4=o?1:a8
B.a.k(s,new A.dd(h+":overflow",a3,new A.j(a3.a+0,a3.b+-0.55,a3.c+0),a2/a4,0.012+B.b.n(a2,0,0.02)*0.4))}r.l(0,i,0)}for(a7=s.length,k=0;k<s.length;s.length===a7||(0,A.u)(s),++k){a6=s[k]
q=a6.a
p=!0
if(q.length!==0){o=a6.b
i=o.a
if(isFinite(i)&&isFinite(o.b)&&isFinite(o.c)){h=a6.c
a3=h.a
if(isFinite(a3)&&isFinite(h.b)&&isFinite(h.c)){a4=a6.d
if(isFinite(a4))if(!(a4<0)){p=a6.e
p=!isFinite(p)||p<=0||new A.j(a3-i,h.b-o.b,h.c-o.c).gu(0)<0.00001}}}}if(p)A.f(A.o("invalid rain flow segment "+q,null))}return new A.t7(A.ab(s,t.z0),n,c,b)}}
A.cr.prototype={
B(){return"RuptureStep."+this.b}}
A.to.prototype={}
A.df.prototype={}
A.tp.prototype={
gfe(){var s=B.bE.h(0,this.a)
return s==null?0:s},
jt(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.H)s=q.e
else s=!0
if(s)return B.dm
r=A.zO(b)
s=q.c
B.a.P(s)
B.a.L(s,r)
B.a.P(q.d)
q.a=B.aU
q.b=0
q.e=!1
return A.c([B.fj],t.xB)},
ec(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.o("rupture advance must be a finite non-negative duration",null))
if(l.a===B.H||a===0)return B.dm
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.H))break
A:{q=l.a
p=B.bE.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.ab)l.lG(s)
p=l.b
o=B.bE.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.df())
if(q===B.ab){l.a=B.H
l.b=0
l.e=!0
B.a.k(s,B.fi)}else{p=q.a+1
if(!(p<7))return A.d(B.dh,p)
l.a=B.dh[p]
l.b=0
B.a.k(s,new A.df())}}}return A.ab(s,t.F3)},
C(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ab(s.c,r),"extinguishedMantles",A.ab(s.d,r),"completed",s.e],r,t.z)},
lG(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.n(B.b.aV(l.b/l.gfe()*A.ab(s,r).length),0,A.ab(s,r).length)
p=l.d
for(;;){o=A.aG(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aG(s,!1,r)
o.$flags=3
n=o
o=A.aG(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.df())}}}
A.kY.prototype={
gfh(){var s=this.b
if(s<7||s>19)return 0
return B.b.n((s-7)/12,0,1)},
gmW(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.n((s-5.5)/15,0,1))},
fd(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
iA(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.ez.prototype={
B(){return"PrecipitationKind."+this.b}}
A.fv.prototype={
C(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gaw(){return this.a}}
A.vh.prototype={
ey(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.b2(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.xm.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.n(B.b.n(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nq(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nq(q,p)&255)/255:1.2+(A.nq(q,p)&255)/255*0.8
p=A.nq(q,k+211)
q=A.nq(q,k+307)
n=A.nw(B.b.E(s,2))
m=A.nw(B.b.E(12-r*0.11000000000000001,2))
l=A.nw(B.b.E(o,2))
p=A.nw(B.b.E((p&65535)/65535*3.141592653589793*2,5))
q=A.nw(B.b.E(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fv(k,j,n,m,l,p,q,j?B.av:B.w)},
$S:118}
A.hC.prototype={}
A.eE.prototype={}
A.v6.prototype={
C(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.vf.prototype={
C(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fw.prototype={}
A.eG.prototype={
A(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.jY(s)){r=q.c
if(A.jY(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.b(A.o("invalid weather collision box "+p,null))},
gF(){return this.a}}
A.eH.prototype={
B(){return"WeatherImpactResponse."+this.b}}
A.mm.prototype={}
A.hD.prototype={
C(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hq(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.b(A.o("weather surface state must be finite and >= 0",null))}}
A.vi.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.b(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:119}
A.vj.prototype={
C(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.f_.prototype={
B(){return"AuthoredEventConsumer."+this.b}}
A.pE.prototype={
pd(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.JF(s[q].b)},
nB(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dx(a.a+":"+a.c),q=t.sU,r=new A.al(r,r.gu(0),q.i("al<a3.E>")),q=q.i("a3.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.ao((l+(k-l)*(s/2147483647))*60)
n=B.b.hD(l*60)
m=B.b.aV(k*60)
return(n<=m?B.d.n(o,n,m):B.d.n(o,0,1439))/60},
hO(a){var s,r,q,p,o=A.c([],t.D)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
mb(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.pF.prototype={
$2(a,b){var s,r=B.d.I(a.gaw(),b.gaw())
if(r!==0)return r
s=B.b.I(a.gaX(),b.gaX())
return s!==0?s:J.Az(a.gF(),b.gF())},
$S:38}
A.kW.prototype={
cb(a,b){var s,r,q,p,o,n,m,l=A.c([],t.D)
for(s=this.a,r=s.hO(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
if(s.nB(m,p)<=b&&o.k(0,m.a))B.a.k(l,m)}return l},
ghN(){return new A.bI(this.no(),t.oe)},
no(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.lP(o.hO(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gn1(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return s},
C(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return A.E(["delivered",s],t.N,t.z)}}
A.pD.prototype={
$1(a){return this.a.mb(A.w(a))!=null},
$S:3}
A.rr.prototype={
aW(a,b){var s=this.b
if(s.K(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
nA(a){return this.aW(a,null)},
lW(a,b){var s,r,q=a.a
this.a.l(0,q,b.a)
s=this.b
s.l(0,"last-reaction",q)
for(q=b.d.gN(),q=q.gv(q);q.m();){r=q.gp()
s.l(0,r.a,r.b)}},
C(){var s,r,q,p,o,n,m,l,k=this.a,j=A.v(k).i("N<1,2>")
k=A.K(new A.N(k,j),j.i("r.E"))
B.a.Y(k,new A.rt())
j=t.N
k=A.zd(k,j,j)
s=this.b
r=A.v(s).i("N<1,2>")
s=A.K(new A.N(s,r),r.i("r.E"))
B.a.Y(s,new A.ru())
s=A.zd(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.v(q).i("N<1,2>")
q=A.K(new A.N(q,p),p.i("r.E"))
B.a.Y(q,new A.rv())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.l(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.rt.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:18}
A.ru.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:18}
A.rv.prototype={
$2(a,b){var s=t.gJ
return B.c.I(s.a(a).a,s.a(b).a)},
$S:122}
A.d1.prototype={
C(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bC.prototype={
C(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gF(){return this.a}}
A.rL.prototype={
f0(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
m="aftermath."+B.c.aQ(n.a,8)
if(p.K(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.k(k,n)}if(q.aW("ashworth.compact","accepted"))B.a.k(k,B.ms)
if(q.aW(l,"taken"))B.a.k(k,B.mw)
else if(q.aW(l,"left"))B.a.k(k,B.mt)
if(q.aW("sylvia.certificate","granted"))B.a.k(k,B.mv)
if(q.aW("residue.coal","cellar"))B.a.k(k,B.mr)
if(q.aW("telegram.08","read"))B.a.k(k,B.mq)
if(q.aW("truth.shawl","home"))B.a.k(k,B.mp)
if(q.aW("sowerby.paraffin","received"))B.a.k(k,B.mu)
if(q.aW("inspector.proclamation","acknowledged"))B.a.k(k,B.mo)
return k},
iP(a){var s=this.f0(),r=A.B(s),q=r.i("I<1>")
s=A.K(new A.I(s,r.i("l(1)").a(new A.rM(a)),q),q.i("r.E"))
return s}}
A.rM.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:40}
A.uv.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hx(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
a.l(0,q,e.lL(q,r.b))}s=A.hx(e.r)
q=A.hx(e.w)
p=A.hx(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.N(n,A.v(n).i("N<1,2>")).gv(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gp()
j.push(A.E(["field",h.a,"value",h.b],c,c))}o.l(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.N(m,A.v(m).i("N<1,2>")).gv(0);m.m();){g=m.d
n.l(0,g.a,g.b.C())}b=A.n(c,b)
for(m=e.ax,m=new A.N(m,A.v(m).i("N<1,2>")).gv(0);m.m();){f=m.d
b.l(0,f.a,f.b.C())}return A.E(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
lL(a,b){var s,r=A.hx(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.hx(q.bt(0,new A.uw(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga5(s))r.l(0,"_ambient",A.hx(s.bt(0,new A.ux(),t.S,t.z)))
return r}}
A.uw.prototype={
$2(a,b){return new A.P(A.h(a),t.BX.a(b).C(),t.pr)},
$S:124}
A.ux.prototype={
$2(a,b){return new A.P(A.h(a),t.vw.a(b).C(),t.pr)},
$S:125}
A.fu.prototype={
C(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)},
gaX(){return this.a}}
A.ft.prototype={
C(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaX(){return this.a}}
A.jd.prototype={
C(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mk.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].C())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gF(){return this.a},
gaw(){return this.c}}
A.fk.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"label",r.b)
q.l(0,"reply",r.c)
s=r.d
if(s.ga5(s))q.l(0,"effects",s)
return q},
gF(){return this.a}}
A.dl.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"target",r.b)
q.l(0,"replacement",r.c)
s=r.d
if(s.ga5(s))q.l(0,"when",s)
return q},
gF(){return this.a}}
A.ut.prototype={
pc(){var s,r,q,p,o,n,m,l,k=A.n(t.S,t.r6)
for(s=this.c,r=s.length,q=t.D,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.c
m=k.h(0,n)
if(m==null){m=A.c([],q)
k.l(0,n,m)
n=m}else n=m
B.a.k(n,o)}for(l=1;l<=21;++l){s=k.h(0,l)
s=s==null?null:s.length===0
if(s!==!1)throw A.b(A.i("campaign schedule has no event for day "+l))}s=A.a_(t.N)
for(r=k.h(0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)s.k(0,r[p].b)
if(!s.q(0,"broadcast")||!s.q(0,"visitor"))throw A.b(A.i("day 1 schedule needs broadcast and visitor events"))
s=k.h(0,21)
s.toString
if(!B.a.M(s,new A.uu()))throw A.b(A.i("day 21 schedule needs an ending event"))}}
A.uu.prototype={
$1(a){return t.Dm.a(a).b==="ending"},
$S:126}
A.dQ.prototype={
gF(){return this.a},
gaw(){return this.c},
gaX(){return this.d}}
A.tv.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.tw.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.f(A.M("screenplay event "+a+" is invalid",null,null))
return s},
$S:26}
A.lU.prototype={
gF(){return this.a},
gaw(){return this.b}}
A.lR.prototype={}
A.lS.prototype={
gF(){return this.a}}
A.lT.prototype={
gF(){return this.a}}
A.uy.prototype={
bh(){var s=0,r=A.aL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bh=A.aM(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.dW().gaZ().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a6(A.av(A.a(A.a(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$bh)
case 12:k=a3
s=A.T(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a6(A.av(A.a(k.text()),f),$async$bh)
case 15:e=a1.ai(a3,null)
d=t.f
if(!d.b(e)||!J.aa(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.f(B.hB)
l=A.aZ(e,f,t.z)
case 14:q=3
s=11
break
case 9:q=8
a=p.pop()
s=11
break
case 8:s=3
break
case 11:case 7:s=l!=null?16:18
break
case 16:m=B.f.a0(l.h(0,"corpus"),null)
n=B.f.a0(l.h(0,"screenplay"),null)
s=17
break
case 18:s=19
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$bh)
case 19:j=a3
s=20
return A.a6(A.av(A.a(j.text()),t.N),$async$bh)
case 20:m=a3
case 17:i=A.JS(m)
f=J.b0(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.b0(i,"visitors")
f.toString
o.b=d.a(f)
f=J.b0(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.b0(i,"documents")
f.toString
d.a(f)
f=J.b0(i,"street")
f.toString
d.a(f)
f=J.b0(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.b0(i,"nights")
f.toString
d.a(f)
f=J.b0(i,"endings")
f.toString
o.w=d.a(f)
f=J.b0(i,"records")
f.toString
o.x=d.a(f)
f=J.b0(i,"cues")
f.toString
d.a(f)
f=J.b0(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.b0(i,"reactions"))){b=J.b0(i,"reactions")
if(b==null)b=f.a(b)
b=A.aZ(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.b0(i,"variants"))){b=J.b0(i,"variants")
if(b==null)b=f.a(b)
b=A.aZ(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.as=d.a(b)
if(f.b(J.b0(i,"residues"))){b=J.b0(i,"residues")
f=b==null?f.a(b):b
f=A.aZ(f,t.N,t.z)}else f=A.n(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/story_script.json")),t.m),$async$bh)
case 24:s=22
break
case 23:a3=null
case 22:h=a3
if(n==null){f=h
f=(f==null?null:A.T(f.ok))===!0}else f=!0
s=f?25:26
break
case 25:f=n
a1=A
s=f==null?27:29
break
case 27:s=30
return A.a6(A.av(A.a(h.text()),t.N),$async$bh)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.Gk(a3)
o.ax=f
f.pc()
f=o.ax
f.toString
o.ay=A.Fb(f)
case 26:q=1
s=5
break
case 3:q=2
a0=p.pop()
g=A.ah(a0)
f=A.y(g)
throw A.b("Failed to load text.json: "+f)
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$bh,r)},
iO(a){var s,r,q,p=this.a
p===$&&A.t()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gN().dF(0,new A.uz())
r=p.$ti
q=t.N
return A.zd(new A.cN(p,r.i("P<e,e>(1)").a(new A.uA()),r.i("cN<1,P<e,e>>")),q,q)}return null},
f1(a,b){var s=this.iO(a)
return s==null?null:s.h(0,b)},
iS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.t()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.O(q),n=t.N;o.m();){m=o.gp()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.n(n,n)
if(f.b(l))for(j=l.gN(),j=j.gv(j);j.m();){i=j.gp()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.l(0,h,A.w(i.b))}B.a.k(p,new A.fk(A.w(m.h(0,"id")),A.w(m.h(0,"label")),A.w(m.h(0,"reply")),A.aW(k,n,n)))}if(p.length<2)return g
return new A.mk(r,a,b,c,d,A.ab(p,t.Y))},
iR(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.t()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aC(p)||o!==B.b.aC(o))return n
return new A.fu(B.b.aC(p),B.b.aC(o))},
iQ(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.t()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.t(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aC(p)||typeof o!="string"||typeof n!="string")return m
return new A.ft(B.b.aC(p),o,n)},
pg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.t()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gv(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gN(),o=o.gv(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.dM(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gN(),m=m.gv(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.w(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a6.l(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("bV<1>"),l=new A.bV(n,n.r,n.e,m);l.m();){i=l.d
g=a1.iR(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a7.l(0,o,h)
f=A.n(a3,s)
for(m=new A.bV(n,n.r,n.e,m);m.m();){l=m.d
e=a1.iQ(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a8.l(0,o,f)}b4=a1.Q
b4===$&&A.t()
b4=new A.ac(b4,b4.r,b4.e,A.v(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.iS(A.w(d.h(0,"visitor")),B.b.aC(A.a1(d.h(0,"day"))),A.w(d.h(0,"tier")),B.b.aC(A.a1(d.h(0,"ordinal"))))
if(c!=null)b1.l(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.t()
b4=new A.ac(b4,b4.r,b4.e,A.v(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gN(),s=s.gv(s);s.m();){r=s.gp()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.l(0,o,A.w(r.b))}s=A.w(d.h(0,"id"))
b2.l(0,s,new A.dl(s,A.w(d.h(0,"target")),A.w(d.h(0,a2)),A.aW(b,a5,a5)))}b4=a1.at
b4===$&&A.t()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gv(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.l(0,p.a,s)}b4=a1.z
b4===$&&A.t()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gv(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.O(d);m.m();){a0=m.gp()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.jd(A.w(a0.h(0,"field")),A.w(a0.h(0,"value"))))}if(o.length!==0)b0.l(0,p.a,o)}return new A.uv(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.uz.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:128}
A.uA.prototype={
$1(a){t.AC.a(a)
return new A.P(A.w(a.a),A.w(a.b),t.q)},
$S:129}
A.kd.prototype={
bS(a,b,c){var s=B.c.aP(a),r=B.c.aP(c)
if(r.length===0)return""
if(b||this.a===B.cg)return s.length===0?r:s+": "+r
if(this.a===B.cf)return r
return s.length===0?r:s+": "+r},
i0(a,b){return this.bS(a,!1,b)}}
A.z1.prototype={}
A.d_.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.eb.prototype={
cf(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.eb(q,p,o,n,m)},
mM(a){var s=null
return this.cf(s,s,s,a,s)},
mS(a){var s=null
return this.cf(s,s,s,s,a)},
mI(a){var s=null
return this.cf(s,s,a,s,s)},
mG(a){var s=null
return this.cf(s,a,s,s,s)},
mn(a){var s=null
return this.cf(a,s,s,s,s)},
C(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nH.prototype={
$1(a){return a==null?null:A.T(a)},
$S:130}
A.nF.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:42}
A.nG.prototype={
$0(){return A.f(B.ix)},
$S:7}
A.nS.prototype={
c0(a,b){var s,r=this,q=r.e.i0(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aL(q)
A.h(A.a(v.G.window).setTimeout(A.CL(new A.nU(r)),7000))},
aL(a){var s,r,q=this
if(!q.c||B.c.aP(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.h(A.a(v.G.window).setTimeout(A.CL(new A.nT(q,s)),4200))}}
A.nU.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:132}
A.nT.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:13}
A.o_.prototype={
oJ(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cG.prototype={
B(){return"AudioOutputMode."+this.b}}
A.d0.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.dv.prototype={
B(){return"AudioReverbMode."+this.b}}
A.du.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.ed.prototype={
cZ(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.ed(r,q,p,a==null?s.e:a)},
mE(a){return this.cZ(null,null,a,null)},
mu(a){return this.cZ(null,a,null,null)},
mK(a){return this.cZ(null,null,null,a)},
mt(a){return this.cZ(a,null,null,null)},
C(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.o9.prototype={
$1$2(a,b,c){return B.a.b5(c.i("r<0>").a(a),new A.oa(b,c),new A.ob(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:133}
A.oa.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.ob.prototype={
$0(){return A.f(A.M("unsupported audio option: "+A.y(this.a),null,null))},
$S:7}
A.oC.prototype={
p8(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.S.i0(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.oF.prototype={
$1(a){return this.a.$0()},
$S:2}
A.oJ.prototype={
$1(a){return this.a.$1(A.T(this.b.checked))},
$S:2}
A.oI.prototype={
$1(a){var s=A.fh(A.w(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.oH.prototype={
$1(a){A.w(a)
return a.length!==0&&!B.c.V(a,"brush-state-")},
$S:3}
A.ek.prototype={
B(){return"BrushComponentKind."+this.b}}
A.el.prototype={
B(){return"BrushComponentState."+this.b}}
A.bo.prototype={
glQ(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
A(){var s=this
if(B.c.aP(s.a).length===0||B.c.aP(s.c).length===0)throw A.b(B.ig)
if(s.e===B.cr&&s.b!==B.cq)throw A.b(B.hy)},
gF(){return this.a}}
A.oL.prototype={
nm(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.n(a>=r+c?q.e=a-c+1:r,0,s)},
dH(a,b){if(b<=0){this.f=0
return}this.f=B.d.n(this.f+a,0,Math.max(0,b-1))},
bQ(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.t()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.dc(o+c,n)
l=new A.dc(s+p,n)
k=s-p
j=new A.dc(k,r-c)
i=new A.dc(k-c,r)
h=new A.dc(q-p,r)
g=new A.dc(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fN(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fN(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aU(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,c,d,e,!0,f,g,h,i)},
n9(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,14,c,d,e,f,g,h,i)},
ne(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.t()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eL()
s.c3(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aA()-0.5)*8
l=s.aA()
k=s.aA()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hM(a,b,c,d,e){var s,r,q=this.b
q===$&&A.t()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fM(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fM(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.y(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
nc(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.t()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a1(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aU("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
nb(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aU(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.t()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a1(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bQ(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.goY()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lN(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.b6(i,0,new A.oM(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?174:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.b.aV((a5+a2-a1)/a2))
d1=d4.f
c7.nm(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.n(c7.e,0,a7)
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
B.a.k(f,new A.fX("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aU(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hM(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.by(b1,g),c1+22,b3)
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
B.a.k(c7.d,new A.fX("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aU("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
nf(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.Kp(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
this.aU("#f5f0e6",1.2,7,"rgba(12, 10, 14, 0.92)",d,-0.055,e,c,b)
s=isFinite(a1)?B.b.n(a1,-30,50):0
r=s>=0?"+":""
q=B.b.E(s,0)
p=e-22
o=c-p*0.5
n=b+10
m=this.b
m===$&&A.t()
m.save()
m.textAlign="center"
m.textBaseline="middle"
m.fillStyle="#c49a45"
m.font='bold 9px "Courier New", monospace'
m.fillText("AIR TEMPERATURE",c,b-21)
l=p/5
for(k=l+0.5,j=0;j<5;++j){m.fillStyle=B.ko[j]
m.fillRect(o+j*l,n,k,10)}m.strokeStyle="#f5f0e6"
m.lineWidth=1
m.strokeRect(o,n,p,10)
i=o+p*g
m.strokeStyle="#0c0a0e"
m.lineWidth=4
m.beginPath()
k=n-4
m.moveTo(i,k)
h=n+10+4
m.lineTo(i,h)
m.stroke()
m.strokeStyle="#f5f0e6"
m.lineWidth=1.5
m.beginPath()
m.moveTo(i,k)
m.lineTo(i,h)
m.stroke()
m.fillStyle="#f5f0e6"
m.font='bold 14px "Cinzel", serif'
m.fillText(r+q+"\xb0C",c,b+31)
m.fillStyle="#8c887e"
m.font='8px "Courier New", monospace'
q=b+24
m.fillText("-30",o+9,q)
m.fillText("50",o+p-8,q)
m.restore()},
na(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(a3===0)return
s=a6<640
r=s?Math.min(2,a3):a3
q=s?8:12
p=s?8:0
o=s?Math.min(140,(a6-32-q)/r):140
for(n=o-18,m=a6*0.5,l=o*0.5,k=o+q,j=a5-32,i=B.d.ba(a3+r-1,r)-1,h=28+p,g=0;g<a3;++g){f=B.d.ba(g,r)
e=f*r
d=Math.min(r,a3-e)
c=m-(d*o+(d-1)*q)*0.5+l+(g-e)*k
b=j-(i-f)*h
if(!(g<a4.length))return A.d(a4,g)
a=a4[g]
a0=a.c
a1=a0?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bQ(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.t()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.by("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
nd(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
if(d2<=0.001)return
s=Math.sin(d2*3.141592653589793*0.5)
r=Math.min(d4*0.92,860)
q=Math.min(d3*0.88,620)
p=d4+r*0.6
o=p+(d4*0.5-p)*s
n=d3*0.5
d2=c3.b
d2===$&&A.t()
d2.save()
d2.fillStyle="rgba(10, 8, 12, "+A.y(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.aU(c5,3,18,c4,q,-0.025,r,o,n)
c3.ne(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.aU(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
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
i=j/6
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.au[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bQ(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
switch(f.a){case 0:c="[1] PBR BRDF"
break
case 1:c="[2] SHADOWS"
break
case 2:c="[3] DETAIL"
break
case 3:c="[4] POST / FOG"
break
case 4:c="[5] WEATHER"
break
case 5:c="[6] PASSES"
break
default:c=null}d2.save()
a=e?d0:c6
d2.fillStyle=a
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c,d,h)
d2.restore()}a0=h+36
if(d5.b===5){a1=r-80
a2=a0+70+20
c3.aU(c7,2.5,10,c8,140,-0.02,a1,o,a2)
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
d2.fillText(d5.e.gn6().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.by(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbr()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aV((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.n(c3.f,0,a7)
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
b1=b0.Q===B.z
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.bQ(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hM(!0,g+1,20,b3-j+20,b2)
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
d2.fillText(c3.by(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
b5=b3+j-20
b=c?110:265
a=b1?d1:c9
d2.fillStyle=a
d2.font='bold 9px "Courier New", monospace'
d2.textAlign="center"
b6=b1?"LIVE":"N/A"
d2.fillText(b6,b5-b,b2)
if(c){if(b0.Q===B.z){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.n9(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.gem(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.b.n((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
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
d2.fillText(B.b.E(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.b.E(b0.r,1),b8+80+4,b2)
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 13px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(b0.gem(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbN()
if(d5.b===5)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.z)m="LIVE \u2022 REQUESTED "+c1.gnu()+" \u2022 EFFECTIVE "+c1.gem()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.by(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
fN(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.t()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fM(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.t()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lN(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a1(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
by(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.t()
s=A.a1(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.t()
p=A.a1(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.J(r,0,s-1)}return q?"...":r+"..."}}
A.oM.prototype={
$2(a,b){var s
A.ax(a)
A.w(b)
s=this.a.b
s===$&&A.t()
return Math.max(a,A.a1(A.a(s.measureText(b)).width))},
$S:134}
A.h1.prototype={
gm7(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gN(),s=s.gv(s);s.m();){r=s.gp()
q=r.a
r=r.b
p=J.aQ(r)
o.l(0,q,p.gR(r)?"":p.ga1(r))}return o},
bM(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.E(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.ax(r)
q=n.h(0,i)
q.toString
A.ax(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
return A.h2(null,a,A.T(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.ax(r)
q=n.h(0,i)
q.toString
A.ax(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
A.T(m)
l=k.gm7()
return A.h2(l,null,m,r,p,o,s,q)},
eh(a){var s=null
return this.bM(a,s,s,s,s,s)},
mA(a){var s=null
return this.bM(s,s,s,a,s,s)},
mB(a){var s=null
return this.bM(s,s,s,s,a,s)},
mx(a){var s=null
return this.bM(s,a,s,s,s,s)},
my(a){var s=null
return this.bM(s,s,a,s,s,s)},
mT(a){var s=null
return this.bM(s,s,s,s,s,a)},
A(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.h9)
p=this.r
if(p.gN().M(0,new A.p0()))throw A.b(B.ip)
if(p.gN().M(0,new A.p1()))throw A.b(B.hV)
p=p.gak()
o=A.v(p)
s=o.i("ik<r.E,e>")
r=s.i("I<r.E>")
q=A.K(new A.I(new A.ik(p,o.i("r<e>(r.E)").a(new A.p2()),s),s.i("l(r.E)").a(new A.p3()),r),r.i("r.E"))
if(A.hh(q,A.B(q).c).a!==q.length)throw A.b(B.he)},
C(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gN(),s=s.gv(s);s.m();){r=s.gp()
o.l(0,r.a,A.aG(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.p0.prototype={
$1(a){t.yx.a(a)
return J.kb(a.b,new A.p_(a))},
$S:43}
A.p_.prototype={
$1(a){var s
A.w(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.AM(a)
else s=!1
return s},
$S:3}
A.p1.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.kb(a.b,B.e1.gaE(B.e1))},
$S:43}
A.p2.prototype={
$1(a){return t.a.a(a)},
$S:136}
A.p3.prototype={
$1(a){return A.w(a).length!==0},
$S:3}
A.oZ.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ej.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.f0.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.dw.prototype={}
A.ky.prototype={
cc(a){var s=this
if(!s.a.r.K(a))return new A.dw(B.cn,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eO},
me(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b3
if(!A.AM(a)){p.c=p.b=null
return new A.dw(B.cp,B.e2.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gN()
r=r.gv(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gp()
s=q.a
if(s===o)break A
if(J.AA(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dw(B.b4,a+" is already bound to "+s)}return p.jX(a)},
ct(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b3
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eP
case 1:s=A.zE(m.a.r)
r=s.h(0,l)
r.toString
s.l(0,l,A.zZ(r,k))
r=s.h(0,j)
r.toString
s.l(0,j,A.Ad(r,k))
m.a=m.a.eh(s)
break
case 0:s=A.zE(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga1(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.hy(p,1,null,A.B(p).c)
o=p.$ti
p=new A.al(p,p.gu(0),o.i("al<a0.E>"))
o=o.i("a0.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.l(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.Ad(r,k)}else{r=s.h(0,j)
r.toString
r=A.zZ(A.Ad(r,k),q)}s.l(0,j,r)
m.a=m.a.eh(s)
break}m.c=m.e=m.d=null
return B.cl},
jX(a){var s,r,q=this,p=q.b
if(p==null)return B.b3
s=A.zE(q.a.r)
r=s.h(0,p)
r.toString
s.l(0,p,A.zZ(r,a))
q.a=q.a.eh(s)
q.b=null
return B.cl}}
A.ie.prototype={
jG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.ky(f.w)
s=f.b
s.className=A.w(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.oG(a,B.eY,1)))
A.a(s.appendChild(A.F(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.F(a,"div",c,e)
f.fm(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fm(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dP(a,r,"invertX","Invert horizontal look")
f.dP(a,r,"invertY","Invert vertical look")
f.dP(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.F(a,"div",c,e)
for(p=B.lh.gN(),p=p.gv(p),o=f.Q;p.m();){n=p.gp()
m=n.a
l=A.h2(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.kc(l)?"unbound":J.AC(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.em(a,new A.bo("settings.controls.bind."+m,B.cq,n,h,B.p),new A.oX(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.l(0,m,g)}A.a(s.appendChild(q))
p=A.F(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.F(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.e8()
A.a(s.appendChild(A.em(a,B.eZ,new A.oY(f),e)))},
il(a){var s=this.x
s===$&&A.t()
if(s.b==null)return
a.preventDefault()
this.fQ(this.x.me(A.w(a.code)))},
fQ(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b4?B.f2:B.p
p=o.Q.h(0,r)
if(p!=null)A.z3(p,q)}n=a.a
if(n===B.b4)o.lw()
else if(n===B.co){n=o.x
n===$&&A.t()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.e8()}else{o.dS()
o.ax=null}},
lw(){var s,r,q,p,o
this.dS()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jW[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.em(p,new A.bo("settings.controls.resolve."+o,B.L,o,"resolve key binding conflict",B.p),new A.oW(this,q),null)))}},
dS(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
e8(){var s,r,q,p
for(s=this.Q,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.t()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.kc(p)?"unbound":J.AC(p," / ")
r.textContent=q
A.z3(r,B.p)}},
fm(a,b,c,d,e,f){var s,r=A.F(a,"label","setting-row",null)
A.a(r.appendChild(A.F(a,"span",null,d)))
s=A.Ez(a,new A.bo("settings.controls."+c,B.f0,d,null,B.p),f,e,new A.oU(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.l(0,c,s)},
dP(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.EA(a,new A.bo("settings.controls."+c,B.f1,d,null,B.p),!1,new A.oV(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.l(0,c,r)},
fO(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seF(a){this.f=t.pf.a(a)},
sbi(a){this.r=t.Z.a(a)}}
A.oX.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.t()
s=n.cc(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cm){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.z3(q,B.cr)}p.dS()
return null},
$S:0}
A.oY.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.oW.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.t()
return s.fQ(r.ct(this.b))},
$S:0}
A.oU.prototype={
$1(a){var s=this.a,r=s.w
s.fO(this.b==="horizontalSensitivity"?r.my(a):r.mT(a))},
$S:137}
A.oV.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mA(a)
break A}if("invertY"===q){s=r.w.mB(a)
break A}s=r.w.mx(a)
break A}r.fO(s)},
$S:10}
A.p4.prototype={
jH(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.F(s,"h1","journal-title","credits")))
r=A.F(s,"p","credits-body",null)
p.f!==$&&A.b6()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.F(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.F(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.p5(p)))
A.a(o.appendChild(q))}}
A.p5.prototype={
$1(a){return this.a.ah()},
$S:2}
A.pc.prototype={
jJ(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.F(a,o,"door-speaker",p)
q.b!==$&&A.b6()
q.b=s
r=A.F(a,o,"door-line",p)
q.c!==$&&A.b6()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.F(a,o,"door-choice-status",p)
q.d!==$&&A.b6()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.F(a,o,"door-cite-list",p)
q.f!==$&&A.b6()
q.f=r
s=A.F(a,o,"door-cite-result",p)
q.r!==$&&A.b6()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.F(a,"button","door-continue","continue")
q.e!==$&&A.b6()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pd(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.pe(q,a)))
A.a(A.G(a.body).appendChild(n))},
f9(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.t()
s.textContent=a
s=r.c
s===$&&A.t()
s.textContent=B.S.bS("",!0,b)
s=r.d
s===$&&A.t()
s.textContent=A.AP(B.bn)
s=r.e
s===$&&A.t()
A.a(s.style).display="none"
s=r.f
s===$&&A.t()
s.textContent=""
s=r.r
s===$&&A.t()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
fa(a,b){var s,r=this,q=r.c
q===$&&A.t()
q.textContent=B.S.bS("",!0,a)
q=r.d
q===$&&A.t()
q.textContent=""
q=r.e
q===$&&A.t()
q=A.a(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.t()
s.textContent=""},
je(a){return this.fa(a,!1)},
jg(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.t()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.t()
s.textContent=A.AP(r)},
fb(a,b){var s=this.c
s===$&&A.t()
s.textContent=B.S.bS("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.t()
s.textContent=""
s=this.e
s===$&&A.t()
A.a(s.style).display=""},
jd(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.t()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.u)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.a(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Z(new A.pf(p,this)))
A.a(s.appendChild(n))}},
i9(){var s,r=this
r.y=!1
s=r.d
s===$&&A.t()
s.textContent=""
s=r.f
s===$&&A.t()
s.textContent=""
s=r.r
s===$&&A.t()
s.textContent=""
s=r.a
s.className="door"
s.setAttribute("hidden","")},
so5(a){this.w=t.Z.a(a)},
so4(a){this.x=t.vR.a(a)}}
A.pd.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:45}
A.pe.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.w(a.code)!=="Tab")return
r=A.c([],t.W)
q=s.e
q===$&&A.t()
if(A.w(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.t()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.h(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.k(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.T(a.shiftKey)){if(m===B.a.ga1(r)||!B.a.q(r,m)){a.preventDefault()
B.a.ga6(r).focus()}}else if(m===B.a.ga6(r)||!B.a.q(r,m)){a.preventDefault()
B.a.ga1(r).focus()}},
$S:210}
A.pf.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:45}
A.pi.prototype={
jK(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.F(s,"h1","journal-title",null)
o.f!==$&&A.b6()
o.f=r
q=A.F(s,"div","ending-copy",null)
o.r!==$&&A.b6()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.F(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.pj(o)))
A.a(n.appendChild(p))},
jf(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.t()
s.textContent=a.a.b
s=m.r
s===$&&A.t()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bU()},
so9(a){this.w=t.Z.a(a)}}
A.pj.prototype={
$1(a){var s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.pN.prototype={
bG(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aG(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
P(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
p7(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
ny(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hw()
return!0}return!1}if(a==="Space"){s=B.a.eA(l,new A.pO())
if(s!==-1){n.cC(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.O(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.O(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cC(q)
return!0}}if(B.c.V(a,"Digit")){p=A.dM(B.c.aQ(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.V(a,"Numpad")){p=A.dM(B.c.aQ(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cC(o)
return!0}return!1},
cC(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
hw(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
nz(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hw()
return!0}this.cC(a.b)
return!0},
so3(a){this.y=t.dt.a(a)},
so8(a){this.z=t.Z.a(a)}}
A.pO.prototype={
$1(a){A.w(a)
return B.c.q(a.toLowerCase(),"silent")||B.c.q(a,"...")},
$S:3}
A.pP.prototype={}
A.dE.prototype={
B(){return"GameplayInteractionMode."+this.b}}
A.d2.prototype={
B(){return"GameplayPromptDensity."+this.b}}
A.d3.prototype={
B(){return"GameplayTextPacing."+this.b}}
A.dF.prototype={
B(){return"GameplayJournalLayout."+this.b}}
A.dD.prototype={
B(){return"GameplayConfirmationLevel."+this.b}}
A.dG.prototype={
B(){return"GameplaySaveFeedback."+this.b}}
A.cn.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.dC.prototype={
B(){return"GameplayClockFormat."+this.b}}
A.h9.prototype={
aT(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.z4(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
mP(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,a,s)},
mO(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,a,s,s)},
mq(a){var s=null
return this.aT(s,s,a,s,s,s,s,s,s,s,s)},
mz(a){var s=null
return this.aT(s,s,s,s,a,s,s,s,s,s,s)},
mH(a){var s=null
return this.aT(s,s,s,s,s,s,a,s,s,s,s)},
mQ(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,s,a)},
mC(a){var s=null
return this.aT(s,s,s,s,s,a,s,s,s,s,s)},
mp(a){var s=null
return this.aT(s,a,s,s,s,s,s,s,s,s,s)},
mL(a){var s=null
return this.aT(s,s,s,s,s,s,s,a,s,s,s)},
mo(a){var s=null
return this.aT(a,s,s,s,s,s,s,s,s,s,s)},
mv(a){var s=null
return this.aT(s,s,s,a,s,s,s,s,s,s,s)},
C(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pQ.prototype={
$1$2(a,b,c){var s
A.Dp(c,t.Ct,"T","call")
c.i("r<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.M("invalid gameplay setting: "+a,null,null))
return B.a.b5(b,new A.pR(s,c),new A.pS(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:141}
A.pR.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pS.prototype={
$0(){return A.f(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cI.prototype={
B(){return"GraphicsPreset."+this.b}}
A.dH.prototype={
b2(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dH(s.a,r,q,p,o,n,m,l,k,j,i)},
eg(a){var s=null
return this.b2(a,s,s,s,s,s,s,s,s,s)},
hH(a){var s=null
return this.b2(s,s,a,s,s,s,s,s,s,s)},
hI(a){var s=null
return this.b2(s,s,s,s,s,s,a,s,s,s)},
mD(a){var s=null
return this.b2(s,s,s,s,a,s,s,s,s,s)},
mJ(a){var s=null
return this.b2(s,s,s,s,s,s,s,a,s,s)},
mw(a){var s=null
return this.b2(s,s,s,a,s,s,s,s,s,s)},
mR(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,s,a)},
mF(a){var s=null
return this.b2(s,s,s,s,s,a,s,s,s,s)},
ms(a){var s=null
return this.b2(s,a,s,s,s,s,s,s,s,s)},
mN(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,a,s)},
A(){var s=this,r=null,q=s.c
if(!B.a.q(B.kP,q))throw A.b(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.k2,q))throw A.b(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.kT,q))throw A.b(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.kL,q))throw A.b(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.l1,q))throw A.b(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.kS,q))throw A.b(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.kU,q))throw A.b(A.M("unsupported graphics shadow quality: "+q,r,r))},
C(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.q3.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:46}
A.q4.prototype={
$0(){return A.f(B.hI)},
$S:7}
A.q5.prototype={
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)}}
A.pW.prototype={}
A.pX.prototype={}
A.is.prototype={
jL(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
h.setAttribute("aria-label","Graphics settings")
A.a(h.appendChild(A.F(a,"h1","journal-title","Graphics")))
A.a(h.appendChild(A.F(a,"p",k,"Choose a visual budget without changing simulation truth.")))
s=A.F(a,"div","settings-grid",l)
r=t.N
m.bl(a,s,"preset","quality preset",A.E(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
m.bl(a,s,"renderScale","render scale",A.E(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
m.bl(a,s,"frameTarget","frame target",A.E(["30","30 fps","60","60 fps","display","Display rate"],r,r))
m.bl(a,s,"antialiasing","anti-aliasing",A.E(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
m.bl(a,s,"textureQuality","texture quality",A.E(["high","High","medium","Medium","low","Low"],r,r))
m.bl(a,s,"outputEncoding","output encoding",A.E(["srgb","sRGB display","linear","Linear light"],r,r))
m.bl(a,s,"diagnosticLevel","renderer diagnostics",A.E(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
m.bl(a,s,"shadowQuality","shadow allocation",A.E(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.F(a,"label",j,l)
r=A.a(a.createElement("input"))
m.y=r
r.type="checkbox"
r=m.y
r.toString
r.addEventListener("change",A.Z(new A.q_(m)))
r=m.y
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.F(a,"span",l,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.F(a,"label",j,l)
r=A.a(a.createElement("input"))
m.z=r
r.type="checkbox"
r=m.z
r.toString
r.addEventListener("change",A.Z(new A.q0(m)))
r=m.z
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.F(a,"span",l,"Model package diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(h.appendChild(s))
r=A.F(a,"p",k,l)
m.Q=r
r.setAttribute("aria-live","polite")
r=m.Q
r.toString
A.a(h.appendChild(r))
o=A.F(a,"button",i,"Load Optimized Defaults")
o.setAttribute("type","button")
o.id="settings.graphics.optimized-defaults"
o.setAttribute("aria-label","load optimized graphics defaults")
o.addEventListener("click",A.Z(new A.q1(m)))
A.a(h.appendChild(o))
n=A.F(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Z(new A.q2(m)))
A.a(h.appendChild(n))},
bl(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.pZ(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.x.l(0,c,r)},
e1(a){var s
a.A()
this.as=a
s=this.f
if(s!=null)s.$1(a)},
cD(a,b,c){var s,r,q=this
t.a.a(c)
q.as=a
s=q.x
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
s=q.y
if(s!=null)s.checked=a.d
s=q.z
if(s!=null)s.checked=a.z
s=q.Q
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.W(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.Q
if(s!=null)s.textContent="effective graphics profile differs"}},
seF(a){this.f=t.CA.a(a)},
sof(a){this.r=t.Z.a(a)},
sbi(a){this.w=t.Z.a(a)}}
A.q_.prototype={
$1(a){var s=this.a
s.e1(s.as.hH(A.T(s.y.checked)))},
$S:1}
A.q0.prototype={
$1(a){var s=this.a
s.e1(s.as.mD(A.T(s.z.checked)))},
$S:1}
A.q1.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.q2.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.ah()},
$S:1}
A.pZ.prototype={
$1(a){var s,r=A.w(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.hI(B.a.an(B.dg,new A.pY(r)))
break A}if("renderScale"===p){s=q.as.mJ(r)
break A}if("frameTarget"===p){s=q.as.mw(r)
break A}if("antialiasing"===p){s=q.as.eg(r)
break A}if("textureQuality"===p){s=q.as.mR(r)
break A}if("outputEncoding"===p){s=q.as.mF(r)
break A}if("diagnosticLevel"===p){s=q.as.ms(r)
break A}if("shadowQuality"===p){s=q.as.mN(r)
break A}s=q.as
break A}q.e1(s)},
$S:1}
A.pY.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:46}
A.ke.prototype={
B(){return"ActiveGuiPanel."+this.b}}
A.ck.prototype={}
A.q6.prototype={
iN(a,b,c){if(c)return B.kj
if(b&&a!=null)return A.c([new A.ck("E","Examine "+a,!0),new A.ck("TAB","Journal",!1),new A.ck("CAPS","Shader Lab",!1)],t.sa)
return B.lc}}
A.q7.prototype={
jM(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.F(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.F(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.F(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.F(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.q8(this)))
A.a(p.appendChild(r))}}
A.q8.prototype={
$1(a){return this.a.ah()},
$S:2}
A.qH.prototype={
bU(){var s,r=this
r.jA()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fv(r.CW,s)
r.lk()
r.h7()},
k6(){var s,r=this,q=r.a,p=A.F(q,"div","page-turn",null),o=A.F(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.qI(r)))
s=A.F(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.qJ(r)))
q=A.F(q,"span","right-day-label",null)
r.Q!==$&&A.b6()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
hn(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fv(s.CW+a,r)
s.h7()},
fv(a,b){if(a<1)return 1
if(a>b)return b
return a},
lk(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.t()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.t()
s.textContent=""
for(s=l.w.f2(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=B.a.ga6(o.c).t(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Z(new A.qK(l,o,m)))
A.a(k.appendChild(m))}},
h7(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.t()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.v(p).i("ac<2>"),n=new A.ac(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.qL())
j.h6(i,r)
i=j.Q
i===$&&A.t()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.t()
s=A.c([],s)
for(r=new A.ac(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.qM())
j.h6(i,s)
k=B.b.n(q.f/4,0,1)
i=j.as
i===$&&A.t()
A.a(i.style).setProperty("width",B.b.E(k*100,1)+"%")},
h6(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.kz(b[r])))},
kz(a){var s,r,q,p,o,n=A.F(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.fV(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fV(p,!1)
o.className=A.w(o.className)+" margin"
A.a(n.appendChild(o))}return n},
fV(a,b){var s=b?"hand-line struck":"hand-line",r=A.F(this.a,"div",s,a.t(0))
A.a(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.qI.prototype={
$1(a){return this.a.hn(-1)},
$S:2}
A.qJ.prototype={
$1(a){return this.a.hn(1)},
$S:2}
A.qK.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qL.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.qM.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.dc.prototype={}
A.fX.prototype={
gF(){return this.a}}
A.rA.prototype={
goY(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.J(s,0,B.b.aC(B.b.n(r*q,0,r)))}}
A.iL.prototype={
b_(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.G(this.a.body).appendChild(s))},
bU(){var s,r,q,p,o=this,n=o.b
if(B.c.q(A.w(n.className),"open"))return
s=$.rB
if(s!=null&&s!==o)s.ah()
$.rB=o
r=o.a
o.d=A.G(r.activeElement)
A.qE(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.gl9())
o.e=q
r.addEventListener("keydown",q)
p=A.CJ(n)
if(p.length!==0)B.a.ga1(p).focus()
else n.focus()},
ah(){var s,r,q=this,p=q.b
if(!B.c.q(A.w(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.rB===q)$.rB=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
il(a){},
la(a){A.a(a)
this.il(a)
if(A.T(a.defaultPrevented))return
if(A.w(a.code)==="Escape"){a.preventDefault()
this.ah()
return}if(A.w(a.code)==="Tab")this.lD(a)},
lD(a){var s,r=A.CJ(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.T(a.shiftKey)){if(s===B.a.ga1(r)||!B.a.q(r,s)){a.preventDefault()
B.a.ga6(r).focus()}}else if(s===B.a.ga6(r)||!B.a.q(r,s)){a.preventDefault()
B.a.ga1(r).focus()}},
sb8(a){this.c=t.Z.a(a)}}
A.bB.prototype={
B(){return"PauseReason."+this.b}}
A.cq.prototype={
B(){return"PausePage."+this.b}}
A.ey.prototype={
B(){return"PauseTransitionKind."+this.b}}
A.dK.prototype={
C(){var s,r=A.n(t.N,t.X)
r.l(0,"page",this.a.b)
r.l(0,"reason",this.b.b)
s=this.c
if(s!=null)r.l(0,"focusId",s)
return r},
aa(a,b){if(b==null)return!1
return b instanceof A.dK&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.ex.prototype={
ghB(){var s=this.a
return s.length===1&&B.a.ga1(s).a===B.bH},
C(){var s=A.n(t.N,t.X),r=this.a,q=A.B(r),p=q.i("H<1,Y<e,L?>>")
r=A.K(new A.H(r,q.i("Y<e,L?>(1)").a(new A.rG()),p),p.i("a0.E"))
r.$flags=1
s.l(0,"pages",r)
r=this.b
q=A.B(r)
p=q.i("H<1,e>")
r=A.K(new A.H(r,q.i("e(1)").a(new A.rH()),p),p.i("a0.E"))
s.l(0,"modalReasons",r)
r=this.c
if(r!=null)s.l(0,"restoreFocusId",r)
return s}}
A.rG.prototype={
$1(a){return t.oP.a(a).C()},
$S:143}
A.rH.prototype={
$1(a){return t.wJ.a(a).b},
$S:144}
A.c8.prototype={}
A.rF.prototype={
im(a){var s,r=this
if(r.a.ghB())return new A.c8(B.a7,r.a,null)
s=r.a
s=new A.ex(B.kN,s.b,a)
r.a=s
return new A.c8(B.dM,s,"pause.resume")},
m2(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga6(p)
q=r.a.a
q=B.a.aD(q,0,q.length-1)
p=r.a
p=new A.ex(q,p.b,p.c)
r.a=p
return new A.c8(B.dN,p,s.c)}if(q.ghB()&&r.a.b.length===0)return r.cu()
return new A.c8(B.a7,r.a,null)},
cu(){var s=this.a
if(s.a.length===0)return new A.c8(B.a7,s,null)
if(s.b.length!==0)return new A.c8(B.a7,s,null)
this.a=B.bG
return new A.c8(B.dO,B.bG,s.c)},
or(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c8(B.a7,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.ex(s.a,r,q.a.c)
q.a=s
return new A.c8(B.dM,s,null)},
n5(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c8(B.a7,o.a,null)
s=o.a
r=s.b
q=A.B(r)
p=q.i("I<1>")
r=A.K(new A.I(r,q.i("l(1)").a(new A.rI(a)),p),p.i("r.E"))
q=o.a.c
r=new A.ex(s.a,r,q)
o.a=r
return new A.c8(B.mn,r,q)},
kr(a){var s
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
A.rI.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:145}
A.cQ.prototype={
B(){return"PauseRootAction."+this.b}}
A.rJ.prototype={
bv(a,b,c,d){var s=B.lv.h(0,c)
s.toString
A.a(b.appendChild(A.em(a,new A.bo(s,B.L,d,null,B.p),new A.rK(this,c),null)))},
som(a){this.f=t.Z.a(a)},
soo(a){this.r=t.Z.a(a)},
so6(a){this.w=t.Z.a(a)},
son(a){this.x=t.Z.a(a)},
soc(a){this.y=t.Z.a(a)},
so7(a){this.z=t.Z.a(a)},
sbi(a){this.Q=t.Z.a(a)}}
A.rK.prototype={
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
A.bY.prototype={
B(){return"PauseSettingsCategory."+this.b}}
A.t4.prototype={
jc(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.S.bS("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.ty.prototype={
jP(a){var s,r,q,p,o,n=this.b
n.className=A.w(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.oG(a,B.eX,1)))
A.a(n.appendChild(A.F(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.F(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.kk[r]
p=B.dv.h(0,q)
p.toString
o=B.du.h(0,q)
o.toString
A.a(s.appendChild(A.em(a,new A.bo(o,B.L,p,p+" settings",B.p),new A.tz(this,q),null)))}A.a(s.appendChild(A.em(a,B.eW,new A.tA(this),null)))
A.a(n.appendChild(s))},
so2(a){this.f=t.hQ.a(a)},
sbi(a){this.r=t.Z.a(a)}}
A.tz.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.tA.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hu.prototype={
jQ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.dv.h(0,d))+" settings",a=h.b
a.className=A.w(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.oG(a0,new A.bo("settings."+(s==null?f:s)+".heading",B.aH,b,g,B.p),2)))
A.a(a.appendChild(A.F(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.F(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.tZ(h)),p=B.a.gv(B.F),o=t.xG,q=new A.U(p,q,o);q.m();){n=p.gp()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.kQ(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.F(a0,"div",e,g)
for(s=s.a(new A.u_(h)),q=B.a.gv(B.F),o=new A.U(q,s,o);o.m();)A.a(j.appendChild(h.lC(a0,q.gp())))
A.a(a.appendChild(j))
if(d===B.O)A.a(a.appendChild(h.k0(a0)))
if(d===B.P)A.a(a.appendChild(h.k_(a0)))
if(d===B.a6)A.a(a.appendChild(h.k5(a0)))
i=A.F(a0,"div",e,g)
for(s=t.pz.a(h.gkI()),q=B.a.gv(B.kQ),s=new A.U(q,s,t.rt);s.m();){p=q.gp()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.em(a0,new A.bo("settings."+o+".reset."+n,B.L,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.u0(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.em(a0,new A.bo("settings."+(s==null?f:s)+".reset.all",B.L,"reset all settings","restore all settings to defaults",B.f3),new A.u1(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.em(a0,new A.bo("settings."+(d==null?f:d)+".back",B.L,"return","return to settings categories",B.p),new A.u2(h),g)))},
k_(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.F(a,"div","settings-grid",j),f=k.dO(a,g,"reducedMotion","reduced motion (system default)"),e=k.dO(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dO(a,g,"captions","non-speech captions"),c=A.F(a,"label",h,j)
A.a(c.appendChild(A.F(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.tR(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.F(a,"label",h,j)
A.a(r.appendChild(A.F(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bz[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.Z(new A.tS(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.F(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.tT(k)))
A.a(g.appendChild(l))
k.ok.L(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.l(0,"screenReaderVerbosity",q)
return g},
dO(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.tB(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
f4(a){var s,r
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
s.value=B.b.t(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.ak:r).b}},
k5(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.F(a,"div","settings-grid",l)
m.bk(a,g,"interactionMode","interaction mode",B.by,t.bK)
m.bk(a,g,"promptDensity","prompt density",B.bB,t.dn)
m.bk(a,g,"textPacing","text pacing",B.bA,t.j_)
m.bk(a,g,"journalLayout","journal layout",B.bs,t.gm)
m.bk(a,g,k,k,B.bm,t.aJ)
m.bk(a,g,"saveFeedback","save feedback",B.bt,t.mx)
m.bk(a,g,"focusLossBehavior","when the window loses focus",B.aP,t.x)
m.bk(a,g,"clockFormat","clock format",B.bp,t.vS)
s=A.F(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.Z(new A.tU(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.F(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Z(new A.tV(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.F(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.F(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Z(new A.tW(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.F(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bk(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Dp(f,t.Ct,"T","_addGameplaySelect")
f.i("J<0>").a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.Z(new A.tP(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.l(0,c,r)},
iW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
k0(a){var s,r,q=this,p=A.F(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.bx[s].b
n.l(0,r,r)}q.cE(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.br[s].b
n.l(0,r,r)}q.cE(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.bq[s].b
n.l(0,r,r)}q.cE(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.bo[s].b
o.l(0,n,n)}q.cE(a,p,"ducking","voice intelligibility",o)
return p},
cE(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.tG(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.l(0,c,r)},
iV(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fT(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a5===r){s=a.c===B.aV
break A}if(B.P===r){s=a.c===B.ad
break A}if(B.O===r){s=a.c===B.I
break A}s=!1
break A}return s},
kJ(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a5===s){r=a===B.aV
break A}if(B.P===s){r=a===B.ad
break A}if(B.O===s){r=a===B.I
break A}r=!1
break A}return r},
lC(a,b){var s=this,r=A.F(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.tY(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.F(a,"span",null,b.b)))
return r},
kQ(a,b,c,d,e){var s,r,q=this,p=A.F(a,"label","setting-row",null),o=A.F(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.F(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.tX(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.l(0,b,n)
q.db.l(0,b,r)
q.dx.l(0,b,new A.a5(e,d))
return p},
f7(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.mJ
r=B.b.n(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.ao(r*100)+"%"},
soe(a){this.r=t.DI.a(a)},
soh(a){this.w=t.xl.a(a)},
sog(a){this.x=t.xl.a(a)},
soa(a){this.y=t.DI.a(a)},
sod(a){this.z=t.xl.a(a)},
soq(a){this.Q=t.xl.a(a)},
sol(a){this.as=t.Ci.a(a)},
soj(a){this.at=t.Z.a(a)},
sbi(a){this.ax=t.Z.a(a)},
so1(a){this.ay=t.kC.a(a)},
sob(a){this.ch=t.hq.a(a)},
so0(a){this.CW=t.Cv.a(a)},
soi(a){this.cx=t.Z.a(a)}}
A.tZ.prototype={
$1(a){t.gl.a(a)
return a.d===B.Y&&this.a.fT(a)},
$S:19}
A.u_.prototype={
$1(a){t.gl.a(a)
return a.d===B.ay&&this.a.fT(a)},
$S:19}
A.u0.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.u1.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.u2.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ah()},
$S:0}
A.tR.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fh(A.w(this.b.value))
r=r.mS(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tS.prototype={
$1(a){var s=this.a,r=s.k4.mM(B.a.an(B.bz,new A.tQ(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tQ.prototype={
$1(a){return t.mq.a(a).b===A.w(this.a.value)},
$S:42}
A.tT.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.tB.prototype={
$1(a){var s,r=A.T(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.mI(r)
break A}if("photosensitivitySafe"===p){s=q.k4.mG(r)
break A}if("captions"===p){s=q.k4.mn(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.tU.prototype={
$1(a){var s=this.a,r=s.k3.mq(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tV.prototype={
$1(a){var s=this.a,r=s.k3.mO(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tW.prototype={
$1(a){var s=this.a,r=s.k3.mP(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tP.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.mz(B.a.an(B.by,new A.tH(r.c)))
break A}if("promptDensity"===p){s=q.k3.mH(B.a.an(B.bB,new A.tI(r.c)))
break A}if("textPacing"===p){s=q.k3.mQ(B.a.an(B.bA,new A.tJ(r.c)))
break A}if("journalLayout"===p){s=q.k3.mC(B.a.an(B.bs,new A.tK(r.c)))
break A}if("confirmations"===p){s=q.k3.mp(B.a.an(B.bm,new A.tL(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mL(B.a.an(B.bt,new A.tM(r.c)))
break A}if("clockFormat"===p){s=q.k3.mo(B.a.an(B.bp,new A.tN(r.c)))
break A}s=q.k3.mv(B.a.an(B.aP,new A.tO(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tH.prototype={
$1(a){return t.bK.a(a).b===A.w(this.a.value)},
$S:148}
A.tI.prototype={
$1(a){return t.dn.a(a).b===A.w(this.a.value)},
$S:149}
A.tJ.prototype={
$1(a){return t.j_.a(a).b===A.w(this.a.value)},
$S:150}
A.tK.prototype={
$1(a){return t.gm.a(a).b===A.w(this.a.value)},
$S:151}
A.tL.prototype={
$1(a){return t.aJ.a(a).b===A.w(this.a.value)},
$S:152}
A.tM.prototype={
$1(a){return t.mx.a(a).b===A.w(this.a.value)},
$S:153}
A.tN.prototype={
$1(a){return t.vS.a(a).b===A.w(this.a.value)},
$S:154}
A.tO.prototype={
$1(a){return t.x.a(a).b===A.w(this.a.value)},
$S:48}
A.tG.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.mE(B.a.an(B.bx,new A.tC(r.c)))
break A}if("dynamicRange"===o){s=p.mu(B.a.an(B.br,new A.tD(r.c)))
break A}if("reverb"===o){s=p.mK(B.a.an(B.bq,new A.tE(r.c)))
break A}s=p.mt(B.a.an(B.bo,new A.tF(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.tC.prototype={
$1(a){return t.xs.a(a).b===A.w(this.a.value)},
$S:156}
A.tD.prototype={
$1(a){return t.EL.a(a).b===A.w(this.a.value)},
$S:157}
A.tE.prototype={
$1(a){return t.gc.a(a).b===A.w(this.a.value)},
$S:158}
A.tF.prototype={
$1(a){return t.ul.a(a).b===A.w(this.a.value)},
$S:159}
A.tY.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.T(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.T(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.T(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.T(r.c.checked))
break}},
$S:1}
A.tX.prototype={
$1(a){var s,r,q=this,p=A.fh(A.w(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.ao(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bN.prototype={
B(){return"SettingCategory."+this.b}}
A.j0.prototype={
B(){return"SettingKind."+this.b}}
A.bh.prototype={
dD(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bx(a))throw A.b(A.M(r.a+" must be boolean",q,q))
break}}}
A.u5.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:19}
A.u6.prototype={
$0(){return A.f(A.i("unknown setting: "+this.a))},
$S:7}
A.u3.prototype={
jR(a,b){var s,r=this.a
if(r!==1)throw A.b(A.o("unsupported settings version "+r,null))
for(r=this.b.gN(),r=r.gv(r);r.m();){s=r.gp()
A.u4(s.a).dD(s.b)}},
cw(a){var s=this.b.h(0,a)
return s==null?A.f(A.i("setting missing from profile: "+a)):s},
C(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.u7.prototype={
oH(a){var s,r,q=A.hg(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.a=A.dS(q,1)
this.ln(a)},
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)},
ln(a){var s,r,q=A.hg(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.b=A.dS(q,1)}}
A.un.prototype={
jS(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.a(j.appendChild(A.F(a,"h2","journal-title","Rest")))
s=A.F(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.b6()
k.w=s
A.a(j.appendChild(s))
r=A.F(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.de[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.dc[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.e9(s.bV(m,new A.uo()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Z(new A.up(k,p,m)))
A.a(r.appendChild(l))}}A.a(j.appendChild(r))},
iX(a){var s,r,q=this.r.h(0,B.bW)
for(s=J.O(q==null?B.kI:q);s.m();){r=s.gp()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.t()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
sop(a){this.f=t.nf.a(a)}}
A.uo.prototype={
$0(){return A.c([],t.W)},
$S:160}
A.up.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:1}
A.cE.prototype={
gF(){return this.a},
gaw(){return this.b},
gaX(){return this.c}}
A.nP.prototype={
oX(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.B(s)
q=new A.H(s,r.i("e(1)").a(new A.nR()),r.i("H<1,e>")).b9(0)
r=this.b
r.P(0)
s=J.AD(a,t.N)
p=s.$ti
r.L(0,new A.I(s,p.i("l(r.E)").a(q.gaE(q)),p.i("I<r.E>")))},
ng(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.nR.prototype={
$1(a){return t.bC.a(a).a},
$S:161}
A.nQ.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.I(r,s):B.d.I(a.c,b.c)},
$S:162}
A.mh.prototype={
gcg(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nO(a){return this.c.q(0,t.T.a(a))},
eO(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.gmm())||!a.a.a2(0,new A.v1(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fW(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aX){m=s.d
if(m<o.length){n=n===B.ai
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.an}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.v2(s))
else k=!1
if(k)return!1
j=new A.mg(r,g,A.ab(o,t.AP),B.ai)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.P(0)
g.L(0,a.a)
g=i.c
g.P(0)
g.L(0,h)
i.r=j
return!0},
hy(a){var s=this.a,r=A.v(s).i("ae<1>"),q=r.i("I<r.E>")
s=A.K(new A.I(new A.ae(s,r),r.i("l(r.E)").a(new A.uX(a)),q),q.i("r.E"))
B.a.Y(s,new A.uY())
return s},
cc(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.pd
s=m.a.h(0,a)
if(s==null)return B.pe
r=B.d.af(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.cb:B.aD
o=p===B.aD&&m.x.q(0,q)&&s.K(B.cc)?B.cc:p
if(s.K(o))n=o
else n=s.K(B.aD)?B.aD:B.cb
r=s.h(0,n)
r.toString
m.r=new A.mg(a,n,A.ab(m.fW(a,n,r),t.AP),B.ai)
m.gcg()
r=m.r
r.toString
return new A.mf(r)},
mh(a){var s,r,q,p,o,n=this.r
if(n==null)return B.et
if(n.d!==B.ai)return B.pb
n.e=a
s=a===B.an
n.d=s?B.aX:B.aB
r=this.f
q=s?B.er:B.oU
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.dX(q,o,p,a,null))
if(a===B.aM)B.a.k(r,new A.dX(B.oX,o,p,a,null))
if(s)this.h8(n)
return new A.md(n)},
lV(){var s,r=this.r
if(r==null)return B.et
s=r.d
if(s!==B.aB&&s!==B.aC)return B.pc
if(this.gcg()!=null&&r.w==null)return new A.bv(new A.bF(B.aj,"The visitor is waiting for an answer."))
r.d=B.aC
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aX
this.h8(r)
return new A.jc(r,!0)}return new A.jc(r,!1)},
mi(a){var s,r,q=this.r,p=this.gcg(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aB&&o!==B.aC}if(o)return B.pa
o=p.f
s=A.B(o)
r=A.bK(new A.I(o,s.i("l(1)").a(new A.v_(a)),s.i("I<1>")),t.Y)
if(r==null)return B.pf
q.w=r.a
return new A.me(q,p,r)},
mj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aB&&s!==B.aC}else s=!0
if(s)return i
r=h.gbq()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dk
p=J.O(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.aW(q,s,s)
m=c.le(!0,!0,o,new A.vp(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aY){B.a.k(this.f,new A.dX(B.oW,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hg(B.a.ga6(j.c).a,s,s)
s.L(0,q)
p.lS(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ev)if(k===B.ce){s=n.b
s=s.ga5(s)}else s=!1
else s=!0
if(s)B.a.k(this.f,new A.dX(B.oV,o,p.b,i,l))}}return m},
h8(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.r=null},
fW(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.kR(a,b,r.gp()))
return s},
kR(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.B(p)
s=A.bK(new A.I(p,r.i("l(1)").a(new A.uV(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.ce(q,s.c,c.c)},
sjs(a){this.x=t.Q.a(a)}}
A.v1.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.v(s).i("ae<1>")).M(0,new A.v0(A.w(a)))},
$S:3}
A.v0.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:21}
A.v2.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:16}
A.uX.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:21}
A.uY.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.I(a.c,b.c)
return s!==0?s:B.d.I(a.d,b.d)},
$S:164}
A.v_.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.uZ.prototype={
$0(){return A.c([],t.jV)},
$S:165}
A.uV.prototype={
$1(a){return t.aS.a(a).d.gN().a2(0,new A.uU(this.a))},
$S:166}
A.uU.prototype={
$1(a){t.q.a(a)
return this.a.y.aW(a.a,a.b)},
$S:167}
A.uW.prototype={
$2(a,b){var s=t.AP
return B.d.I(s.a(a).a,s.a(b).a)},
$S:168}
A.mi.prototype={}
A.mP.prototype={}
A.y7.prototype={
$1(a){return B.c.V(A.w(a),"off.")},
$S:3}
A.bU.prototype={
B(){return"DoorChoice."+this.b}}
A.cc.prototype={
B(){return"VisitPhase."+this.b}}
A.cd.prototype={
B(){return"VisitTier."+this.b}}
A.eD.prototype={
B(){return"VisitorFactKind."+this.b}}
A.dX.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q},
gaw(){return this.c}}
A.dk.prototype={
B(){return"VisitorIssueCode."+this.b}}
A.bF.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.bF&&b.a===this.a&&b.b===this.b},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.ce.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.ce&&b.a===this.a&&b.b===this.b},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c2.prototype={
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.c2&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gU(a){var s=this
return A.cP(s.a,s.b,s.c,s.d,B.h,B.h)},
C(){var s=this
return A.E(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gaw(){return this.b},
gaX(){return this.c}}
A.mj.prototype={
C(){var s,r,q,p=this.a
p=A.K(p,A.v(p).c)
B.a.X(p)
s=this.b
r=A.v(s)
q=r.i("dz<1,Y<e,@>>")
s=A.K(new A.dz(s,r.i("Y<e,@>(1)").a(new A.uT()),q),q.i("r.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.uT.prototype={
$1(a){return t.T.a(a).C()},
$S:169}
A.kf.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"arrival",r.a.C())
q.l(0,"tier",r.b.b)
q.l(0,"phase",r.c.b)
q.l(0,"lineIndex",r.d)
s=r.e
q.l(0,"choice",s==null?null:s.b)
q.l(0,"complianceMarked",r.f)
s=r.r
if(s!=null)q.l(0,"reactionChoiceId",s)
return q}}
A.nM.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:170}
A.nN.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:171}
A.nO.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:172}
A.mg.prototype={
gbq(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.v3.prototype={}
A.bv.prototype={}
A.mf.prototype={}
A.md.prototype={}
A.jc.prototype={}
A.me.prototype={}
A.hG.prototype={}
A.mS.prototype={
gmc(){var s,r
if(!this.aI)return B.n
s=this.r
s===$&&A.t()
r=this.w
r===$&&A.t()
return B.ff.md(s,r)},
gnv(){var s="shadowCaster",r=this.df
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.io(s).a+";shadowTriangles="+r.io(s).b+";frameMs="+B.b.E(this.dg,3)},
gi2(){var s=this.df
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.dg<=100},
nF(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.iw()
l.r=k
k=l.w=B.ct.iU(k)
if(k.a===B.G)k=l.w=B.dT
q=l.b
p=l.c
s=new A.m2(q,p,q,p)
o=A.By(l.d.a)
l.e=o
try{o.ic(l.kl(k,q,p),s)}catch(n){r=A.ah(n)
k=l.w
if(k===B.aw)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.aw
k=A.By(l.d.a)
k.ic(B.n7,s)
l.e=k}k=l.e
k.c5()
m=A.G4(k.w.a.b)
B.a.k(k.d,m)
l.f=m
l.ck=l.b
l.cl=l.c
l.fH()
l.nq=A.FK(!0,!0,!0)
l.hY=new A.rS(A.n(t.N,t.S))
l.aI=!0},
dC(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.o("Pixeldart surface size must be positive",null))
if(!r.aI){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cm!==a||r.cn!==b)r.cn=r.cm=null
s=r.e
s===$&&A.t()
s.c5()
new A.m2(a,b,a,b).A()
if(r.di==null)r.di=r.c4()},
c4(){var s=0,r=A.aL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$c4=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.ck
h=n.b
if(!(i!==h||n.cl!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.t()
h=n.w
h===$&&A.t()
g=A.h(m)
s=8
return A.a6(A.xh(i,B.cw.hF("auto","full","srgb",h,"auto","profile",A.h(l),g)),$async$c4)
case 8:n.ck=m
n.cl=l
n.cn=n.cm=null
A.k4()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ah(e)
i=n.w
i===$&&A.t()
n.x=i.a.b+" surface reconfigure failed: "+A.y(k)
n.cm=n.b
n.cn=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.di=null
i=n.cm
h=n.b
j=i===h&&n.cn===n.c
if(!j)i=n.ck!==h||n.cl!==n.c
else i=!1
if(i)n.di=n.c4()
s=o.pop()
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$c4,r)},
fE(a,b,c,d,e,f,g,h){return B.cw.hF(d,e,f,a,g,h,c,b)},
kl(a,b,c){return this.fE(a,b,c,"auto","full","srgb","auto","profile")},
fH(){var s,r,q,p=this.w
p===$&&A.t()
s=p.a
A:{p=B.G===s
if(p){r=7
break A}if(B.Q===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.Q===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.f(A.o("hysteresisThreshold must be finite and >= 0",null))
this.fy=new A.qR(r,p,A.a_(q),A.a_(q),A.n(q,t.i))},
cX(a){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cX=A.aM(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aI){s=1
break}switch(a.b.a){case 0:i=B.dT
break
case 2:i=B.aw
break
case 1:i=B.dS
break
case 3:i=n.w
i===$&&A.t()
break
default:i=null}m=i
i=n.w
i===$&&A.t()
l=i
k=n.fE(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.t()
s=7
return A.a6(A.xh(i,t.lg.a(k)),$async$cX)
case 7:n.w=t.xK.a(m)
n.fH()
n.ck=n.b
n.cl=n.c
n.x=null
A.k4()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ah(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.k4()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cX,r)},
m1(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="wall-plaster",b8="grime",b9="renderer is not initialized",c0="resource library is disposed"
if(!b5.aI||b5.Q.length!==0)return
b5.dj=c1
s=b5.k2
r=b5.e
r===$&&A.t()
s.l(0,b7,r.gaO().dA(8,"texture:wall-plaster",!0,256,B.at,256))
s.l(0,b8,b5.e.gaO().dA(8,"texture:grime",!0,512,B.at,512))
for(q=0;q<2;++q){p=B.ld[q]
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
s.l(0,p,r.dA(8,"texture:"+p,!0,256,B.at,256))}for(q=0;q<3;++q){p=B.jV[q]
o=p==="glass"
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
n=o?256:4096
m=o?256:4096
s.l(0,p,r.dA(8,"texture:"+p,!0,m,B.at,n))}s.l(0,"skybox-main-atmosphere-v1",b5.e.gaO().iy(8,"texture:skybox-main-atmosphere-v1",!0,2048,B.at,4096,B.j6))
b5.e7()
b5.cP()
b5.ry=b5.c8(A.lj(s.h(0,b7),0.5,B.al,0.2,0,!1,0,"quarantine-house-safe",0,1,b6,!0,1,0.48,0.44,0.46,1,1))
b5.kL()
for(r=c1.b,n=r.length,m=b5.ok,l=b5.k4,k=t.N,j=b5.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){h=r[q]
g=A.n(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cM(f,f.r,f.e,A.v(f).i("cM<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bC.h(0,b)
if(a==null)A.f(A.i("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.lj(s.h(0,a.b),0.5,B.al,0.2,0,!1,0,d+a0+"-"+a1,0,1,b6,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
a1=b5.e.w
if(a1==null)a1=A.f(A.i(b9))
if(a1.x)A.f(A.i(c0))
b.A()
a2=a1.b.a.aG(b,b6)
a1.r.k(0,a2)
j.l(0,b.a,b)
g.l(0,a0,a2)}m.l(0,e,g)
f=g.h(0,"wall")
f.toString
l.l(0,e,f)}for(n=b5.p1,q=0;q<7;++q){a3=B.kr[q]
m=a3==="service"?s.h(0,b8):s.h(0,b7)
k=b5.e3(a3)
i=b5.e3(a3)
k=A.lj(m,0.5,B.al,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,b6,!0,1,b5.e3(a3).c,i.b,k.a,1,1)
i=b5.e.w
m=i==null?A.f(A.i(b9)):i
if(m.x)A.f(A.i(c0))
k.A()
a2=m.b.a.aG(k,b6)
m.r.k(0,a2)
j.l(0,k.a,k)
n.l(0,a3,a2)}b5.cP()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){h=r[q]
if(h.a==="living-room")continue
b5.kM(c1,h)}$.p.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.p.j().setAttribute("data-renderer-canonical-room-shell","living-room")
b5.lh(c1)
$.p.j().setAttribute("data-renderer-house-model-scale",B.b.E(2.25,2))
for(n=r.length,q=0;q<n;++q)for(m=r[q].e.length,a4=0;a4<m;++a4)continue
for(r=c1.c,n=r.length,m=b5.fx,k=b5.y,i=c1.e,q=0;f=r.length,q<f;r.length===n||(0,A.u)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
h=i.h(0,a5.b)
if(h==null)continue
a6=b5.fK(c1,h,a5)
f=b5.e.w
if(f==null)f=A.f(A.i(b9))
e=a5.a
if(f.x)A.f(A.i(c0))
d=f.a
a6.A()
a2=d.b.aG(a6,"door-leaf:"+e)
b=a2.a
d.c.l(0,b,d.bc(a6))
f.f.k(0,a2)
B.a.k(k,a2)
f=h.a
d=l.h(0,f)
if(d==null){d=b5.ry
d.toString}a7=new A.bb(a2,d,B.B,0,B.U,B.K,!0,!0,0,b6)
d=b5.f
d===$&&A.t()
B.B.A()
a0=d.a
a1=a0.$ti
a0.Z(a1.c.a(a2))
a0=a0.b
if(!(b>=0&&b<a0.length))return A.d(a0,b)
a6=a0[b].c
b=(a6==null?a1.y[1].a(a6):a6).d
a0=B.B.ae()
b=b.gal()
a1=A.B(b)
A.b1(new A.H(b,a1.i("C(1)").a(a0.gap()),a1.i("H<1,C>")))
m.l(0,e,new A.jv(e,f,d.b.bO(a7),a2,a7))}for(n=b5.id,m=t.Bs,q=0;q<r.length;r.length===f||(0,A.u)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
h=i.h(0,a5.b)
if(h==null)continue
e=h.a
d=b5.lb(h,a5.b4(e),a5.aM(e),a5.aM(e)+a5.w,0,a5.x,5915445)
b=m.a(new A.w3(a5))
a0=b5.e.w
if(a0==null)a0=A.f(A.i(b9))
if(a0.x)A.f(A.i(c0))
a1=a0.a
d.A()
a2=a1.b.aG(d,"decoration:"+e)
a8=a2.a
a1.c.l(0,a8,a1.bc(d))
a0.f.k(0,a2)
B.a.k(k,a2)
a0=l.h(0,e)
if(a0==null){d=b5.ry
d.toString}else d=a0
a9=new A.bb(a2,d,B.B,0,B.U,B.K,!0,!0,0,b6)
d=b5.f
d===$&&A.t()
B.B.A()
a0=d.a
a1=a0.$ti
a0.Z(a1.c.a(a2))
a0=a0.b
if(!(a8>=0&&a8<a0.length))return A.d(a0,a8)
a6=a0[a8].c
a0=(a6==null?a1.y[1].a(a6):a6).d
a1=B.B.ae()
a0=a0.gal()
a8=A.B(a0)
A.b1(new A.H(a0,a8.i("C(1)").a(a1.gap()),a8.i("H<1,C>")))
B.a.k(n,new A.mR(e,d.b.bO(a9),a9,b))}for(r=A.Kr(A.JJ(c1)),n=r.length,m=b5.dy,l=b5.dx,i=b5.db,f=b5.k3,e=b5.fr,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){b0=r[q]
d=b0.b
b1=d===4?b8:b7
a=e.h(0,d)
if(a==null){b=s.h(0,b1)
a0=b5.e0(d)
a1=b5.e0(d)
a0=A.lj(b,0.5,B.al,0.2,0,!0,0,"quarantine-house-exterior-slot-"+d,0,1,b6,!0,1,b5.e0(d).c,a1.b,a0.a,1,1)
a1=b5.e.w
b=a1==null?A.f(A.i(b9)):a1
if(b.x)A.f(A.i(c0))
a0.A()
a2=b.b.a.aG(a0,b6)
b.r.k(0,a2)
j.l(0,a0.a,a0)
e.l(0,d,a2)
a=a2}b=b5.e.w
if(b==null)b=A.f(A.i(b9))
a0=b0.c
a1=b0.a
d=""+d
if(b.x)A.f(A.i(c0))
a8=b.a
a0.A()
a2=a8.b.aG(a0,"exterior:"+a1+":slot-"+d)
b2=a2.a
a8.c.l(0,b2,a8.bc(a0))
b.f.k(0,a2)
B.a.k(k,a2)
b3=a1+":"+d
f.l(0,b3,b1)
if(!B.ax.q(0,a1))A.f(A.o("unknown exterior cell: "+a1,b6))
b4=new A.bb(a2,a,B.B,-1,B.U,B.K,B.nz.q(0,a1),!0,0,b6)
m.l(0,b3,a1)
l.l(0,b3,b4)
d=b5.f
d===$&&A.t()
B.B.A()
b=d.a
a0=b.$ti
b.Z(a0.c.a(a2))
b=b.b
if(!(b2>=0&&b2<b.length))return A.d(b,b2)
a6=b[b2].c
b=(a6==null?a0.y[1].a(a6):a6).d
a0=B.B.ae()
b=b.gal()
a1=A.B(b)
A.b1(new A.H(b,a1.i("C(1)").a(a0.gap()),a1.i("H<1,C>")))
i.l(0,b3,d.b.bO(b4))}},
f6(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="renderer is not initialized",b9="resource library is disposed",c0="promoted model package is missing: ",c1="incomplete",c2=b6.hQ=c3.c
b6.k1=A.ab(c3.e,t.fl)
if(!b6.aI)return
for(s=b6.p4,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));r.m();)r.d.a_()
s.P(0)
r=b6.R8
if(r!=null)r.b.P(0)
r=b6.RG
b6.R8=r==null?b7:new A.rY(new A.rT(r),A.n(t.N,t.K))
for(r=b6.ch,q=new A.N(r,A.v(r).i("N<1,2>")).gv(0),p=b6.CW;q.m();){o=q.d
o.toString
n=b6.f
n===$&&A.t()
n.b.aK(o.b)
m=p.h(0,o.a)
if(m!=null){o=b6.e
o===$&&A.t()
o=o.w
if(o==null)o=A.f(A.i(b8))
n=m.a
if(o.x)A.f(A.i(b9))
o.a.aK(n)
o.f.a8(0,n)}}r.P(0)
p.P(0)
b6.cy=null
q=b6.cx
B.a.P(q)
for(o=b6.k1,n=o.length,l=b6.p1,k=t.Cx,j=t.d,i=t.s3,h=b6.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.c
c=B.c.q(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b6.dj
b=c==null?b7:c.e.h(0,e.b)
if(b==null)continue
a=c3.bL(d)
if(b6.R8!=null&&b6.RG.a.K(a.a)){c=a.a
a0=b6.RG.a.h(0,c)
a1=(a0==null?A.f(A.i(c0+c)):a0).c
g=g&&b6.lf(a1.a.x,a,e.f.c.a*c2)
c=e.f
a0=c.a
a2=A.iR(B.J,c.b.b*3.141592653589793/180)
a3=b6.e
a3===$&&A.t()
a3=a3.w
if(a3==null)a3=A.f(A.i(b8))
a4=b6.f
a4===$&&A.t()
a5=b.d
a6=A.c([],j)
a7=A.c([],i)
a8=new A.hk(a1,h,a3,a4,new A.w6(b6,a,a1),new A.fs(new A.C(a5.a+a0.a*c2,a5.b+a0.b*c2,a5.c+a0.c*c2),a2,c.c.a*c2),-1,a6,a7)
a9=a8.jZ("LOD0")
a8.x=a9.a
B.a.L(a6,a9.c)
B.a.L(a7,a9.b)
c=b6.R8
c.toString
a0=k.a(new A.w7(a8))
a3=c.b
a4=e.a
if(a3.K(a4))A.f(A.i("presentation placement is already bound: "+a4))
d=c3.bL(d).a
if(c.a.a.a.h(0,d)==null)A.f(A.i(c0+d))
a3.l(0,a4,a0.$1(new A.hn()))
s.l(0,a4,a8)
continue}d=b6.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.i(b8))
c=b6.kP(a,e,c2)
a0=e.a
if(d.x)A.f(A.i(b9))
a3=d.a
c.A()
b0=a3.b.aG(c,"inventory:"+a0)
a4=b0.a
a3.c.l(0,a4,a3.bc(c))
d.f.k(0,b0)
d=e.f
c=d.a
a2=A.iR(B.J,d.b.b*3.141592653589793/180)
d=a.b
a3=l.h(0,d)
if(a3==null){a3=l.h(0,"furniture")
a3.toString}a5=b.d
c=new A.fs(new A.C(a5.a+c.a*c2,a5.b+c.b*c2,a5.c+c.c*c2),a2,1)
m=new A.bb(b0,a3,c,-1,B.U,B.K,d!=="micro",!0,0,b7)
B.a.k(q,b0)
p.l(0,a0,m)
d=b6.f
d===$&&A.t()
c.A()
a3=d.a
a5=a3.$ti
a3.Z(a5.c.a(b0))
a3=a3.b
if(!(a4>=0&&a4<a3.length))return A.d(a3,a4)
b1=a3[a4].c
a3=(b1==null?a5.y[1].a(b1):b1).d
c=c.ae()
a3=a3.gal()
a4=A.B(a3)
A.b1(new A.H(a3,a4.i("C(1)").a(c.gap()),a4.i("H<1,C>")))
r.l(0,a0,d.b.bO(m))}b2=s.a
b3=r.a
$.p.j().setAttribute("data-renderer-inventory-items",""+(b3+b2))
c2=$.p.j()
r=b2===0?"proxy":"mixed"
c2.setAttribute("data-renderer-inventory-resolution",r)
$.p.j().setAttribute("data-renderer-inventory-proxy-count",""+b3)
$.p.j().setAttribute("data-renderer-inventory-promoted-count",""+b2)
$.p.j().setAttribute("data-renderer-promoted-material-policy","semantic-pbr-v1")
r=$.p.j()
c2=g?"pass":"mismatch"
r.setAttribute("data-renderer-promoted-bounds-alignment",c2)
b4=c3.os("living-sofa")!=null
c2=b6.dj
r=c2==null
if((r?b7:c2.r)==="living-room")b5=(r?b7:c2.x)==="placement-living-sofa"&&s.K("placement-living-fbx-room")&&b4
else b5=!1
c2=$.p.j()
s=b5?"canonical-fbx-residence":c1
c2.setAttribute("data-house-playability",s)
s=b6.dj
s=s==null?b7:s.x
if(s==null)s=""
c2.setAttribute("data-house-rest-anchor",s)
s=b5?"sofa-rest-v1":c1
c2.setAttribute("data-house-interaction-contract",s)
c2.setAttribute("data-house-collision-authority","game-house")
c2.setAttribute("data-house-focus-authority","game-focus-resolver")
c2.setAttribute("data-house-save-restore-authority","game-session-save")
b6.li()},
lf(a,b,c){var s,r,q,p,o,n,m,l,k
t.dd.a(a)
s=a.length
if(s!==6||!isFinite(c)||c<=0)return!1
if(3>=s)return A.d(a,3)
r=a[3]
q=a[0]
if(4>=s)return A.d(a,4)
p=a[4]
o=a[1]
if(5>=s)return A.d(a,5)
n=[r-q,p-o,a[5]-a[2]]
o=b.r
p=o.b
o=o.a
m=[p.a-o.a,p.b-o.b,p.c-o.c]
for(l=0;l<3;++l){k=n[l]*c
if(!isFinite(k)||Math.abs(k-m[l])>0.05)return!1}return!0},
lg(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.q(s,"kaca")||B.c.q(s,"gelas")||B.c.q(s,"cermin")
p=B.c.q(s,"aluminium")||B.c.q(s,"kerangka")
o=B.c.q(s,"sofa")||B.c.q(s,"cusion")||B.c.q(s,"carpet")
n=B.c.q(s,"floor")||B.c.q(s,"lemari")||B.c.q(s,"meja")||B.c.q(s,"tiang")
m=B.c.q(s,"wall")||B.c.q(s,"roof")||B.c.q(s,"tegel")
l=B.c.q(s,"emmision")||B.c.q(s,"netflix")||s==="tv"
k=A.yU(a5.toLowerCase()," ","-")
if(r)j=a4.k2.h(0,"porcelain-albedo")
else if(q)j=a4.k2.h(0,"glass")
else if(m)j=a4.k2.h(0,"wall-plaster")
else j=n?a4.k2.h(0,"floor-linoleum"):null
i=r?a4.k2.h(0,"porcelain-normal"):null
h=r?0.72:1
if(q)g=0.78
else if(r)g=0.92
else g=p?0.72:1
if(q)f=0.88
else if(r)f=0.9
else f=p?0.75:1
if(q)e=0.98
else if(r)e=0.88
else e=p?0.78:1
if(r)d=0.22
else if(q)d=0.12
else if(p)d=0.28
else if(o)d=0.92
else d=n?0.48:0.68
c=p?0.82:0
if(r)b=0.74
else b=q?0.18:0
a=r?0.16:0.2
a0=l?0.72:0
a1=q?B.aF:B.al
a2=q?0.02:0.5
a3=a4.c8(A.lj(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.l(0,a5,a3)
return a3},
li(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
for(s=this.p4,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.n(r,q)
o.l(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.L(0,new A.rg(n.a.a.b,"LOD0",!l,k,j,m).C())
i.push(o)}s=$.p.j()
o=i.length!==0
n=o&&B.a.a2(i,new A.vX())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dr(a){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$dr=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=2
return A.a6(B.fh.cr(a,new A.w4(),new A.w5()),$async$dr)
case 2:n=c
q.RG=n
p=$.hQ
if(p!=null)q.f6(p)
$.p.j().setAttribute("data-renderer-model-packages","validated")
$.p.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.p.j()
o=n.a.ga3()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aJ(null,r)}})
return A.aK($async$dr,r)},
j9(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=c4.e,c3=c2.h(0,c5)
if(c3==null)return
s=c3.a
r=t.N
q=A.aF([s],r)
for(p=c4.aS(s),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gp()
m=n.cs(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c2.h(0,m)!=null)q.k(0,m)}c2=A.K(q,q.$ti.c)
B.a.X(c2)
l=B.a.W(c2,"|")
if(c1.cy===l)return
c1.cy=l
for(c2=c1.ax,c2=new A.N(c2,A.v(c2).i("N<1,2>")).gv(0),s=c1.ay,p=t.h1,o=c1.at;c2.m();){k=c2.d
n=k.a
j=q.q(0,n)?-1:0
i=k.b
h=s.h(0,n)
h.toString
g=A.c([],p)
for(f=J.aQ(i),e=0;e<f.gu(i);++e){if(!(e<h.length))return A.d(h,e)
d=c1.ca(h[e],j)
c=c1.f
c===$&&A.t()
b=f.h(i,e)
a=d.c
a.A()
a0=c.a
a1=a0.$ti
a2=a1.c.a(d.a)
a0.Z(a2)
a0=a0.b
a2=a2.a
if(!(a2>=0&&a2<a0.length))return A.d(a0,a2)
a3=a0[a2].c
a0=(a3==null?a1.y[1].a(a3):a3).d
a=a.ae()
a0=a0.gal()
a1=A.B(a0)
A.b1(new A.H(a0,a1.i("C(1)").a(a.gap()),a1.i("H<1,C>")))
c=c.b
a1=c.$ti
a1.c.a(b)
a1.y[1].a(d)
c.Z(b)
c=c.b
b=b.a
if(!(b>=0&&b<c.length))return A.d(c,b)
c[b].sb3(d)
B.a.k(g,d)}s.l(0,n,g)
if(g.length!==0)o.l(0,n,B.a.ga1(g))}for(c2=c1.id,s=c2.length,a4=0;a4<c2.length;c2.length===s||(0,A.u)(c2),++a4){a5=c2[a4]
j=q.q(0,a5.a)&&a5.d.$0()?-1:0
p=c1.f
p===$&&A.t()
o=c1.ca(a5.c,j)
n=o.c
n.A()
h=p.a
f=h.$ti
c=f.c.a(o.a)
h.Z(c)
h=h.b
c=c.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a3=h[c].c
h=(a3==null?f.y[1].a(a3):a3).d
n=n.ae()
h=h.gal()
f=A.B(h)
A.b1(new A.H(h,f.i("C(1)").a(n.gap()),f.i("H<1,C>")))
p=p.b
f=p.$ti
n=f.c.a(a5.b)
f.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb3(o)}c2=c1.fx
s=A.v(c2).i("ae<1>")
s=A.K(new A.ae(c2,s),s.i("r.E"))
p=s.length
a4=0
for(;a4<s.length;s.length===p||(0,A.u)(s),++a4){a6=c2.h(0,s[a4])
o=a6.e
d=c1.ca(o,q.q(0,a6.b)?-1:0)
o=c1.f
o===$&&A.t()
n=a6.c
h=d.c
h.A()
f=o.a
c=f.$ti
b=c.c.a(d.a)
f.Z(b)
f=f.b
b=b.a
if(!(b>=0&&b<f.length))return A.d(f,b)
a3=f[b].c
f=(a3==null?c.y[1].a(a3):a3).d
h=h.ae()
f=f.gal()
c=A.B(f)
A.b1(new A.H(f,c.i("C(1)").a(h.gap()),c.i("H<1,C>")))
o=o.b
c=o.$ti
c.c.a(n)
c.y[1].a(d)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(d)
c2.l(0,a6.a,a6.mr(d))}for(c2=c1.k1,s=c2.length,p=c1.ch,o=c1.CW,n=c1.p4,a4=0;a4<s;++a4){a7=c2[a4]
h=a7.a
a8=p.h(0,h)
a9=o.h(0,h)
b0=n.h(0,h)
b1=q.q(0,a7.b)
if(b0!=null){b0.j8(b1?-1:0)
continue}if(a8==null||a9==null)continue
h=c1.f
h===$&&A.t()
f=c1.ca(a9,b1?-1:0)
c=f.c
c.A()
b=h.a
a=b.$ti
a0=a.c.a(f.a)
b.Z(a0)
b=b.b
a0=a0.a
if(!(a0>=0&&a0<b.length))return A.d(b,a0)
a3=b[a0].c
b=(a3==null?a.y[1].a(a3):a3).d
c=c.ae()
b=b.gal()
a=A.B(b)
A.b1(new A.H(b,a.i("C(1)").a(c.gap()),a.i("H<1,C>")))
h=h.b
a=h.$ti
a.c.a(a8)
a.y[1].a(f)
h.Z(a8)
h=h.b
a=a8.a
if(!(a>=0&&a<h.length))return A.d(h,a)
h[a].sb3(f)}b2=new A.kP().mg(c5)
c2=$.p.j()
s=A.K(b2,A.v(b2).c)
B.a.X(s)
c2.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
c2=c1.dy
r=new A.kP().i_(new A.wa(c1),new A.ae(c2,A.v(c2).i("ae<1>")),b2,r)
b3=A.fc(r,r.$ti.i("r.E"))
c2=c1.dx
s=A.v(c2).i("ae<1>")
s=A.K(new A.ae(c2,s),s.i("r.E"))
r=s.length
p=c1.db
b4=0
b5=0
b6=0
a4=0
for(;a4<s.length;s.length===r||(0,A.u)(s),++a4){b7=s[a4]
b8=p.h(0,b7)
if(b8==null)continue
a9=c2.h(0,b7)
o=a9.r
if(o)++b6
b9=b3.q(0,b7)
if(b9)++b4
if(b9&&o)++b5
d=c1.ca(a9,b9?-1:0)
o=c1.f
o===$&&A.t()
n=d.c
n.A()
h=o.a
f=h.$ti
c=f.c.a(d.a)
h.Z(c)
h=h.b
c=c.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a3=h[c].c
h=(a3==null?f.y[1].a(a3):a3).d
n=n.ae()
h=h.gal()
f=A.B(h)
A.b1(new A.H(h,f.i("C(1)").a(n.gap()),f.i("H<1,C>")))
o=o.b
f=o.$ti
f.c.a(b8)
f.y[1].a(d)
o.Z(b8)
o=o.b
f=b8.a
if(!(f>=0&&f<o.length))return A.d(o,f)
o[f].sb3(d)
c2.l(0,b7,d)}$.p.j().setAttribute("data-renderer-exterior-items",""+b4+"/"+c2.a)
$.p.j().setAttribute("data-renderer-shadow-casters",""+b5+"/"+b6)
c2=A.v(b3)
s=c2.i("dz<1,e>")
c0=A.K(new A.dz(b3,c2.i("e(1)").a(new A.wb(c1)),s),s.i("r.E"))
B.a.X(c0)
$.p.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(c0,","))},
dw(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aI)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.ha(b0,n)
l=J.aQ(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.y,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.i(a8))
c=a7.c6(e.b)
b=g.b
if(d.x)A.f(A.i(a9))
a=d.a
c.A()
a0=a.b.aG(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.l(0,b,a.bc(c))
d.f.k(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bb(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a7.f
c===$&&A.t()
a=l.h(s,f)
d.A()
a3=c.a
a4=a3.$ti
a3.Z(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ae()
b=b.gal()
a3=A.B(b)
A.b1(new A.H(b,a3.i("C(1)").a(d.gap()),a3.i("H<1,C>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.Z(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb3(a2)
B.a.k(k,a0)
B.a.k(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a8(i,a6)
B.a.k(i,a0)
a=a7.e.w
d=a==null?A.f(A.i(a8)):a
if(d.x)A.f(A.i(a9))
d.a.aK(a6)
d.f.a8(0,a6)}p.l(0,b1,k)
r.l(0,b1,j)
if(j.length!==0)a7.at.l(0,b1,B.a.ga1(j))
$.p.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hZ+1));++a7.hZ},
eK(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aI)return
s=k.fx
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.t()
m=p.gaO().dz(k.fK(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bb(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.t()
n=r.c
p.lM(l)
p.b.eV(n,l)
s.l(0,b,r.hJ(l,m))
s=k.y
n=r.d
B.a.a8(s,n)
B.a.k(s,m)
k.e.gaO().oD(n)},
iY(l9,m0,m1,m2,m3,m4,m5,m6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2=this,l3=null,l4="rain_override",l5="wetness_override",l6=A.aF([m0],t.N),l7=l9.e,l8=l7.h(0,m0)
if(l8!=null)for(s=l8.a,r=l9.aS(s),q=J.O(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gp()
o=p.cs(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&l7.h(0,o)!=null)l6.k(0,o)}n=new A.qj(l9).pf(l6,m1)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.u)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eE(l.a,l.x,l.w,q))}for(r=l2.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&l6.q(0,k.b)){j=l7.h(0,k.b)
i=l2.hQ
h=k.f.a
j=j.d
s.push(new A.eE(new A.j(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}l2.ci=A.ab(s,t.cZ)
l7=t.jC
g=A.c([],l7)
f=A.c([],l7)
for(e=0;e<n.length;++e){l=n[e]
l7=e===0
s=l7?"spot":"point"
r=l.c
q=l.e
p=l.d
if(s!=="point"&&s!=="spot")A.f(A.a7(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.f(A.a7(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.f(A.a7(p,"radius","must be finite and > 0"))
l7=l7?f:g
B.a.k(l7,new A.b8(e,s,l.a,new A.j((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}l7=l2.fy
l7===$&&A.t()
d=l7.oz(m1,g,f)
l7=A.n(t.S,t.A_)
for(e=0;e<n.length;++e)l7.l(0,e,n[e])
s=A.c([],t.Fk)
for(r=d.a,q=r.length,m=0;m<r.length;r.length===q||(0,A.u)(r),++m){c=r[m]
p=c.a
j=l7.h(0,p).a
i=c.d
s.push(new A.lB(p,new A.C(j.a,j.b,j.c),new A.aT(i.a,i.b,i.c),c.e,c.f))}r=A.c([],t.cv)
for(q=d.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.u)(q),++m){c=q[m]
j=c.a
i=l7.h(0,j)
h=i.a
i=i.b
b=c.d
r.push(new A.bO(j,new A.C(h.a,h.b,h.c),new A.C(i.a,i.b,i.c),new A.aT(b.a,b.b,b.c),c.e,c.f,1.05,1.4))}l2.k7(d,++l2.go)
l7=$.bS()
a=l7.H("time_override")
if(a>=0)a0=B.b.n(a,0,23.999)
else a0=m6
l2.hV=a0
a1=m4.c
q=m4.d
a2=B.b.O(B.b.O(a0,24)+24,24)
a3=B.b.n(a1,0,1)
a4=B.b.n(q,6,16)/2
a5=13-a4
a6=13+a4
p=a2>=a5
a7=p&&a2<=a6?Math.sin(3.141592653589793*((a2-a5)/(a6-a5)))*65:-18
if(a2<=a5)a8=0
else a8=a2>=a6?1:(a2-a5)/(a6-a5)
a9=a7*3.141592653589793/180
b0=(90+a8*180)*3.141592653589793/180
j=Math.cos(b0)
i=Math.cos(a9)
h=B.b.n(Math.sin(a9),0,1)
b=Math.sin(b0)
b1=Math.cos(a9)
h=B.b.n(1-h,0.1,0.9)
b2=a5-1.5
if(a2>=b2&&a2<a5){b3=(a2-b2)/1.5
A.cl(B.mS,B.dV,b3)
b4=A.cl(B.mU,B.bL,b3)
b5=A.cl(B.mO,B.bM,b3)
b6=0.3+0.5*b3
b7=0.25+0.2*b3}else if(p&&a2<14){b4=B.bL
b5=B.bM
b6=0.85
b7=0.45}else if(a2>=14&&a2<a6){b3=(a2-14)/(a6-14)
A.cl(B.dV,B.dU,b3)
b4=A.cl(B.bL,B.dY,b3)
b5=A.cl(B.bM,B.dX,b3)
b6=0.85*(1-b3*0.35)
b7=0.45*(1-b3*0.25)}else if(a2>=a6&&a2<a6+1.5){b3=(a2-a6)/1.5
A.cl(B.dU,B.bN,b3)
b4=A.cl(B.dY,B.aR,b3)
b5=A.cl(B.dX,B.aS,b3)
b6=0.55*(1-b3*0.8)
b7=0.34*(1-b3*0.65)}else{p=a6+1.5
if(a2>=p&&a2<a6+3){b3=(a2-p)/1.5
A.cl(B.bN,B.bN,b3)
b4=A.cl(B.aR,B.aR,b3)
b5=A.cl(B.aS,B.aS,b3)
b6=0.11*(1-b3*0.25)
b7=0.16*(1-b3*0.15)}else{b4=B.aR
b5=B.aS
b6=0.15
b7=0.18}}if(a3>0){b8=A.cl(b5,B.n1,a3*0.7)
b6*=1-a3*0.35
b7*=1-a3*0.15}else b8=b5
b9=m5?1:0.15
c0=B.b.n(a3*0.75+B.b.n(0.3333333333333333,0,1)*0.25,0,1)
if(l7.H(l4)>=0)a1=l7.H(l4)
l2.xr=B.b.n(a1,0,1)
c1=l7.H("cloud_coverage_override")
c2=B.b.n(c1>=0?c1:a1*0.92,0,1)
c3=l7.bF("cloud_enable")&&c2>0.0001?B.b.n(l7.H("cloud_density")*(0.55+c2*0.45),0,1):0
p=m4.e
c4=p*0.28*B.b.n(l7.H("cloud_speed"),0,2)
c5=B.d.aC(B.d.n(B.b.ao(l7.H("cloud_samples")),4,24))
c6=l7.H(l5)>=0?l7.H(l5):c0
c7=B.b.n(l7.H("weather_reflection_strength"),0,2)
l2.cj=B.b.n(c6*c7,0,1)
q=A.Gi(q)
b2=a1*0.92
p=2+p*0.03
c8=B.b.n(0.68+a1*0.22,0,1)
new A.uq(a0,13,0.8988445647770796,q,b2,a1,p,c8,1,0.0015,0.06).A()
c9=A.BC(a2,13)*3.141592653589793/12
d0=Math.sin(0.8988445647770796)
d1=Math.cos(0.8988445647770796)
d2=d0*Math.sin(q)
d3=d1*Math.cos(q)
d4=d2+d3*Math.cos(c9)
d5=Math.asin(B.b.n(d4,-1,1))
d6=Math.cos(d5)
d7=Math.atan2(Math.sin(c9),Math.cos(c9)*d0-Math.tan(q)*d1)
d8=new A.C(Math.sin(d7)*d6,Math.sin(d5),Math.cos(d7)*d6).ga7()
if(Math.abs(d3)<1e-12)d9=d4>0?-2:2
else d9=(Math.sin(-0.014538592669112763)-d2)/d3
e0=d9>-1&&d9<1
e1=e0?Math.acos(d9)*12/3.141592653589793:0
e2=B.b.O(B.b.O(13-e1,24)+24,24)
e3=B.b.O(B.b.O(13+e1,24)+24,24)
q=!e0
e4=q&&d4>0
e5=A.Gh(d5,a2,e4,q&&!e4,13)
e6=p+b2*3.5+a1*1.5
e7=A.Gf(Math.max(0,1.5707963267948966-d5))
p=B.b.n(Math.exp(-(0.0046416*e7*e6)),0,1)
d2=B.b.n(Math.exp(-(0.010846399999999999*e7*e6)),0,1)
d3=B.b.n(Math.exp(-(0.02648*e7*e6)),0,1)
e8=B.b.n(Math.exp(-(b2*(2.2+a1*2))),0,1)
e9=A.BD(-0.3141592653589793,0.10471975511965977,d5)
f0=A.BD(-0.014538592669112763,0.03490658503988659,d5)
f1=Math.max(0,Math.sin(d5)+f0*0.018)
f2=p*0.2126+d2*0.7152+d3*0.0722
f3=Math.pow(f1,0.35)*f2*e8
f4=B.b.n(f1*f2,0,1)
f5=0.42*f4
f6=1-b2
f7=0.055+f5*(0.55+0.45*f6)+e9*(0.028+0.018*f6)
f8=0.0015*(1+c8*1.6+a1*4+b2*0.8)
c8=0.035+p*0.18+b2*0.1
f6=0.045+d2*0.2+b2*0.12
b2=0.07+d3*0.24+b2*0.16+e9*0.018
f9=new A.aT(p,d2,d3)
if(!isFinite(a2)||!isFinite(e2)||!isFinite(e3)||!isFinite(d5)||!isFinite(e9)||!isFinite(f0)||!isFinite(d7)||!isFinite(f3)||!isFinite(f7)||!isFinite(f8)||!isFinite(0.06)||!d8.gT(0)||!new A.C(p,d2,d3).gT(0)||!f9.gT(0)||!new A.aT(0.14+0.38*f4,0.16+f5,0.22+0.52*f4).gT(0)||!new A.aT(c8,f6,b2).gT(0))A.f(A.i("solar lighting state is not finite"))
if(d8.gbg()<0.999||d8.gbg()>1.001||f3<0||f7<0||f8<0||e8<0||e8>1||e9<0||e9>1||f0<0||f0>1)A.f(A.i("solar lighting state is out of bounds"))
new A.kI(d8,f9,f3).A()
q=$.p.j()
q.setAttribute("data-renderer-solar-phase",e5.b)
q.setAttribute("data-renderer-solar-sunrise-hours",B.b.E(e2,4))
q.setAttribute("data-renderer-solar-sunset-hours",B.b.E(e3,4))
q.setAttribute("data-renderer-solar-elevation-deg",B.b.E(d5*180/3.141592653589793,4))
q.setAttribute("data-renderer-solar-twilight-factor",B.b.E(e9,4))
q.setAttribute("data-renderer-solar-horizon-visibility",B.b.E(f0,4))
q.setAttribute("data-renderer-solar-horizon-blend",B.b.E(A.BE(f0),4))
q.setAttribute("data-renderer-solar-transmittance",B.b.E(e8,4))
q=$.Aw()
q.p9(0.0166,a1)
g0=q.z
g1=B.b.n(Math.sin(Math.max(0,d5))/Math.sin(1.1344640137963142),0,1)
g2=A.BE(f0)
q=1-g2
g3=new A.C(d8.a*g2+-(j*i)*q,d8.b*g2+h*q,d8.c*g2+-(b*b1)*q).ga7()
j=g0.a
g4=j&&g0.gi8()?new A.C(g0.f,g0.r,g0.w):g3
p=0.35+(p-0.35)*g2
d2=0.45+(d2-0.45)*g2
d3=0.65+(d3-0.65)*g2
g5=new A.aT(p,d2,d3)
if(j){i=g0.b
g6=new A.aT(p+g0.c*i*2,d2+g0.d*i*2,d3+g0.e*i*2.5)}else g6=g5
g7=B.b.n(g0.gn8(),0.12,2)
g8=B.b.n(l7.H("weather_lightning_intensity"),0,2)
b6=(f3*g2+b6*q)*b9
if(j)b6=b6*0.12+g0.b*4.5*g7*g8
q=$.p.j()
q.setAttribute("data-renderer-lightning-active",String(j))
p=g0.x
q.setAttribute("data-renderer-lightning-source-distance-m",B.b.E(p,1))
q.setAttribute("data-renderer-lightning-distance-attenuation",B.b.E(g7,4))
i=g0.f
h=g0.r
b=g0.w
q.setAttribute("data-renderer-lightning-source-direction",B.b.E(i,3)+","+B.b.E(h,3)+","+B.b.E(b,3))
g9=l7.bF("fog_enable")
h0=l7.H("fog_density")
h1=l7.H("fog_height_falloff")
h2=B.b.n(l7.H("fog_distance_scale"),0.25,2)
h3=B.b.n(l7.H("weather_fog_scattering"),0,2)
f8=g9?f8*B.b.n(h0/0.012,0,8)*h3:0
h4=g9?0.06*B.b.n(h1/0.6,0,8):0
h5=l7.bF("volumetric_light_enable")?B.b.n(l7.H("volumetric_shaft_intensity")/0.1,0,8):0
h6=B.d.n(B.b.ao(l7.H("volumetric_precision")),4,24)
h7=B.b.n(l7.H("volumetric_dust_density"),0,0.25)
h8=B.b.n(l7.H("volumetric_scattering")+a1*0.1,-0.85,0.85)
h9=B.b.n(l7.H("light_ambient_mult"),0,3)
i0=B.b.n(l7.H("light_direct_mult"),0,3)
i1=B.b.n(l7.H("normal_bump_strength"),0,2)
i2=B.b.n(l7.H("pbr_roughness"),0,2)
i3=B.b.n(l7.H("pbr_metallic"),0,2)
i4=B.b.n(l7.H("pbr_specular"),0,3)
i5=B.b.n(l7.H("shadow_bias"),0.0001,0.01)
i6=B.b.n((1+B.b.n(1-e8,0,1)*1.4+a1*0.25)/B.b.n(l7.H("shadow_csm_hardness"),0.1,3),0,3)
l2.ev=f8
l2.hW=h4
l7=A.c([],t.xL)
for(q=s.length,m=0;m<s.length;s.length===q||(0,A.u)(s),++m){l=s[m]
b1=l.c
d2=l.e
l7.push(new A.cu("point:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.d,Math.max(0.25,d2),Math.max(4,d2*8)))}for(q=r.length,m=0;m<r.length;r.length===q||(0,A.u)(r),++m){l=r[m]
b1=l.d
d2=l.f
l7.push(new A.cu("spot:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.e,Math.max(0.25,d2*0.25),Math.max(8,d2)))}i7=l2.to
if(j&&g0.gi8()&&i7!=null){i8=new A.C(i,h,b).ga7()
B.a.k(l7,new A.cu("lightning:active",i7.d.a4(0,i8.a9(0,p)),new A.C(g0.c,g0.d,g0.e),g0.b*12e4*g8,1000,Math.max(1100,p*1.25)))}i9=g9?f8+h7:0
if(i7==null)q=l3
else{q=i7.d
q=A.Gx(i7.e,Math.min(i7.r,64),q,i9,l7)}l2.hP=q
p=q==null
j0=p?l3:q.a
if(j0==null)j0=B.v
$.p.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.E(i9,6))
j=A.c([],t.E7)
e=0
for(;;){if(!(e<l2.ci.length&&e<4))break
j.push(new A.w8(l2,e,m4).$0());++e}if(!p){p=$.p.j()
p.setAttribute("data-renderer-volumetric-source-count",""+q.c)
i=q.a
p.setAttribute("data-renderer-volumetric-source-radiance",B.b.E(i.a,6)+","+B.b.E(i.b,6)+","+B.b.E(i.c,6))
q=q.b
p.setAttribute("data-renderer-volumetric-source-direction",B.b.E(q.a,4)+","+B.b.E(q.b,4)+","+B.b.E(q.c,4))}q=b4.c
p=b4.b
i=b4.a
h=Math.max(0.045,b7*(g1>0.001?g1:1)*b9+e9*(0.022+0.018*(1-a1)))
b=l2.k2.h(0,"skybox-main-atmosphere-v1")
b1=B.b.n(q*1.18,0,1)
d2=B.b.n(p*1.18,0,1)
d3=B.b.n(i*1.18,0,1)
f5=B.b.n(c8*0.55,0,1)
f9=B.b.n(f6*0.55,0,1)
j1=B.b.n(b2*0.55,0,1)
j2=m4.f
j3=Math.cos(j2)
j2=Math.sin(j2)
j4=l2.dh
j5=$.bS()
j6=j5.H("cloud_detail")
j5=j5.H("cloud_silver_lining")
j7=b8.c
j8=j0.a
j9=B.b.n(j8,0,8)
k0=b8.b
k1=j0.b
k2=B.b.n(k1,0,8)
k3=b8.a
k4=j0.c
k5=B.b.n(k4,0,8)
k6=B.b.n(0.72+j7*0.28,0,1)
k7=B.b.n(0.76+k0*0.24,0,1)
k8=B.b.n(0.82+k3*0.18,0,1)
k9=B.b.n(0.22+a1*0.18,0,0.5)
if(!new A.aT(q,p,i).gT(0))A.f(A.o("skyColor must be finite",l3))
if(!g6.gT(0))A.f(A.o("keyLightColor must be finite",l3))
if(!new A.aT(j8,k1,k4).gT(0))A.f(A.o("sourceRadiance must be finite",l3))
if(!isFinite(b6)||b6<0)A.f(A.o("keyLightIntensity must be finite and >= 0",l3))
if(j8<0||k1<0||k4<0)A.f(A.o("sourceRadiance channels must be >= 0",l3))
l0=B.b.n(b6*0.12,0,0.35)
l1=1-l0
l2.x1=new A.kT(B.jP,new A.aT(j7*0.08+c8*0.035+j9*0.015,k0*0.08+f6*0.035+k2*0.015,k3*0.08+b2*0.035+k5*0.015),1.5*h2/(1+a1*0.45),14*h2/(1+a1*0.16),h4,f8,new A.aT(k6,k7,k8),h4,h7,h8,k9,h5,h6,i6,h9,i0,i1,i2,i3,i4,i5,new A.aT(B.b.n(q*l1+g6.a*l0+j8*0.02,0,1),B.b.n(p*l1+g6.b*l0+k1*0.02,0,1),B.b.n(i*l1+g6.c*l0+k4*0.02,0,1)),B.b.n(c7*0.42,0,1),0,new A.aT(q,p,i),h,new A.kI(g4,g6,b6),s,r,l7,j,new A.um("main-atmosphere-v1",b,new A.aT(q,p,i),new A.aT(b1,d2,d3),new A.aT(f5,f9,j1),c2,c3,650,420,0.0012,j3*c4,j2*c4,j4,j6,j5,c5))
j5=$.p.j()
j5.setAttribute("data-renderer-reflection-intensity",B.b.E(l2.x1.dy,4))
j5.setAttribute("data-renderer-reflection-confidence",B.d.E(l2.x1.fr,4))
j6=l2.x1.k4
l7=j6==null?l3:j6.a
if(l7==null)l7="none"
j5.setAttribute("data-renderer-skybox-asset",l7)
l7=l2.x1.k4
l7=l7==null?l3:l7.z
j5.setAttribute("data-renderer-sky-cloud-coverage",B.b.E(l7==null?0:l7,4))
l7=l2.x1.k4
l7=l7==null?l3:l7.Q
j5.setAttribute("data-renderer-sky-cloud-density",B.b.E(l7==null?0:l7,4))
l7=l2.x1.k4
l7=l7==null?l3:l7.db
j5.setAttribute("data-renderer-sky-cloud-samples",""+(l7==null?0:l7))
l7=l2.x1.k4
l7=l7==null?l3:l7.CW
j5.setAttribute("data-renderer-sky-cloud-phase",B.b.E(l7==null?0:l7,3))
j5.setAttribute("data-renderer-reflection-mode","environment-fallback")},
lo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="wetness_override",a7="fog_height_falloff",a8="fog_distance_scale",a9="post_affine_warp",b0="post_vertex_snap",b1="weather_particles_enable",b2="weather_particle_density",b3="weather_particle_size",b4="weather_snow_accumulation",b5="weather_fog_scattering",b6="weather_lightning_intensity",b7="weather_reflection_strength",b8="cloud_coverage_override",b9="cloud_silver_lining",c0="light_ambient_mult",c1="light_direct_mult",c2=null,c3="shadow_csm_hardness",c4=t.N,c5=A.aF(["time_override","rain_override",a6,"fog_enable","fog_density",a7,a8,"post_exposure","post_vignette","post_film_grain",a9,b0,b1,b2,b3,b4,b5,b6,b7,"cloud_enable",b8,"cloud_density","cloud_detail","cloud_speed",b9,"cloud_samples",c0,c1],c4),c6=A.n(c4,c4),c7=$.bS().w
c7===$&&A.t()
s=0
for(;s<60;++s)c6.l(0,c7[s].a,"No resolved Pixeldart frame mapping is installed")
c7=new A.w1(a5,c5,c6)
c7.$2("ssao",B.kn)
c7.$2("shadows",B.l0)
c7.$2("shadows",B.kV)
c7.$2("volumetric",B.jR)
c7.$2("bloom",B.kW)
c7.$2("dof",B.kY)
c7.$2("grade",B.kX)
c7.$2("ps1",B.lb)
c7.$2("vhs",B.kZ)
c7=$.bS()
r=a5.hV
q=a5.xr
p=a5.cj
o=a5.ev
n=a5.hW
m=c7.H(a8)
l=a5.x2
k=c7.H(c3)
j=a5.x1
i=a5.x2
h=c7.H(b2)
g=c7.H(b3)
f=c7.H(b4)
e=c7.H(b5)
d=c7.H(b6)
c=c7.H(b7)
b=c7.H(b8)
a=a5.x1.k4
a0=a==null
a1=a0?c2:a.Q
if(a1==null)a1=0
a=a0?c2:a.cx
if(a==null)a=0
a0=c7.H("cloud_speed")
a2=a5.x1.k4
a3=a2==null
a4=a3?c2:a2.cy
if(a4==null)a4=0
a2=a3?c2:a2.db
if(a2==null)a2=4
a3=a5.x2
a3=A.E(["time_override",r,"rain_override",q,a6,p,"fog_density",o,a7,n,a8,m,"shadow_ao_intensity",l.c,c3,k,c0,j.ax,c1,j.ay,"pbr_roughness",j.CW,"pbr_metallic",j.cx,"pbr_specular",j.cy,"normal_bump_strength",j.ch,"shadow_bias",j.db,"volumetric_shaft_intensity",j.Q*0.1,"volumetric_precision",j.as,"volumetric_dust_density",j.x,"volumetric_scattering",j.y,"post_exposure",i.a,"post_bloom",i.b,"post_vignette",i.e,"post_film_grain",i.f,"post_dither",i.Q,"post_depth_of_field",i.d,"post_color_grade",i.as,a9,i.at,b0,i.ax,b2,h,b3,g,b4,f,b5,e,b6,d,b7,c,b8,b,"cloud_density",a1,"cloud_detail",a,"cloud_speed",a0,b9,a4,"cloud_samples",a2,"post_quantization_bits",a3.ay,"post_vhs_chroma",a3.ch,"post_vhs_noise",a3.cx],c4,t.i)
a2=a5.ev
a4=a5.x2
a0=a5.x1
a=c7.bF(b1)
a1=a5.x1.k4
r=a1==null?c2:a1.Q
c7.oQ("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a2>0,"shadow_ssdo_enable",a4.c>0,"volumetric_light_enable",a0.Q>0,b1,a,"cloud_enable",r!==0],c4,t.y),a3,c5,c6)
c6=$.Ee()
c6.lZ(c7)
$.p.j().setAttribute("data-renderer-shader-overrides",B.f.a0(c6.a,c2))
$.p.j().setAttribute("data-renderer-shader-lab",B.f.a0(c7.n2(),c2))
$.p.j().setAttribute("data-renderer-shader-lab-document",B.f.a0(c7.eT(),c2))
$.p.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a0(A.BA().eT(),c2))},
j5(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this
t.xw.a(a)
s=J.z6(a.slice(0),A.B(a).c)
r=A.c([],t.A5)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p){o=s[p]
n=o.d
if(n>0){m=o.b
l=o.c
k=o.a
j=B.c.bf(k,":downpipe")?3.2:2.2
r.push(new A.kS(new A.C(m.a,m.b,m.c),new A.C(l.a,l.b,l.c),j,o.e,B.d.n(B.b.ao(2+n*20),2,6),B.c.gU(k)&2147483647))}}i.d3=r
i.ep=B.b.n(b,0,1/0)
i.eq=B.b.n(c,0,1/0)
i.er=B.b.n(d,0,1/0)
i.bR=B.b.n(B.a.b6(s,0,new A.w9(),t.i)*1.8,0,1)},
ja(a){var s,r,q,p=this
if(a==null){p.de=p.dd=0
p.cj=p.bR
$.p.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.n($.bS().H("weather_snow_accumulation"),0,2)
p.dd=B.b.n(a.a/0.08*s,0,1)
p.de=B.b.n(a.x,0,1)
r=a.b
p.cj=Math.max(B.b.n(r/0.0008,0,1),p.bR)
q=$.p.j()
q.setAttribute("data-renderer-weather-surface",B.f.a0(a.C(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.E(p.dd,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.E(p.de,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.E(r,8))
q.setAttribute("data-renderer-weather-rain-flow-wetness",B.b.E(p.bR,4))},
kL(){var s,r,q,p,o=this
if(o.es!=null||o.eu!=null)return
s=new Float32Array(A.S(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=o.e
r===$&&A.t()
o.es=r.gaO().dz(o.c6(s),"weather:rain-particle")
o.eu=o.c8(B.ly)
q=new A.ct(new Float32Array(5376))
q.iv(new A.j(-0.035,0,0),new A.j(0.035,0,0),new A.j(0.035,-0.07,0),new A.j(-0.035,-0.07,0),14478335,0.78,!0)
o.hR=o.e.gaO().dz(o.c6(B.t.aD(q.a,0,q.b)),"weather:snow-particle")
o.hS=o.c8(B.lz)
p=new A.ct(new Float32Array(5376))
p.iv(new A.j(-0.025,0,0),new A.j(0.025,0,0),new A.j(0.025,-0.12,0),new A.j(-0.025,-0.12,0),11519958,0.9,!0)
o.hT=o.e.gaO().dz(o.c6(B.t.aD(p.a,0,p.b)),"weather:hail-particle")
o.hU=o.c8(B.lA)},
lA(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
a4.d6=a4.d5=0
a4.d7=a4.gh3()
a4.da=a4.d9=a4.d8=0
a4.dc=!1
a4.d2=a4.d1=a4.eo=a4.d4=0
s=a4.y2
r=s==null
q=r?a5:s.a
if(q==null)q=B.w
p=$.bS()
if(!p.bF("weather_particles_enable"))return
o=B.b.n(p.H("weather_particle_density"),0,2)
n=B.b.n(p.H("weather_particle_size"),0.25,2)
m=r?a5:A.BU(s.a)
if(m==null)m=A.BU(B.w)
A:{p=B.a9===q
if(p){l=a4.hR
break A}if(B.W===q||B.a8===q){l=a4.hT
break A}l=a4.es
break A}B:{if(p){k=a4.hS
break B}if(B.W===q||B.a8===q){k=a4.hU
break B}k=a4.eu
break B}if(l==null||k==null||q===B.w||a4.xr<=0.01)return
C:{if(p){p=38
break C}if(B.W===q){p=26
break C}if(B.a8===q){p=30
break C}p=32
break C}j=B.d.n(B.b.ao(8+a4.xr*p*o*a4.y1),0,40)
p=a4.gh3()
i=new A.nW(j,p)
i.A()
h=B.d.n(j,0,p)
a4.d5=j
a4.d7=p
a4.dc=B.d.n(j,0,p)!==j
p=Math.sin(a4.dh*0.7)
g=r?a5:s.b.a
if(g==null)g=0
f=g+p*0.18
r=r?a5:s.b.c
e=(r==null?0:r)+0.12
r=m.f
d=new A.nY(l,k,B.eA,B.oE,B.oH,new A.C(f,m.b,e),B.oF,new A.C(f,-m.c,e),m.d,m.e,h,a4.ex,r*n,m.r,2003132788+q.a)
c=d.i3(a7)
a4.d8=c.b
a4.d9=c.c
a4.da=d.n3(a7,i).r
b=new A.kU(a7.a,a7.b,a7.c,a7.d,a7.e,a7.f,a7.r,Math.max(0,a7.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,a=0;a<h;++a){a0=d.c_(a7,a)
g=d.c_(b,a).c
a1=a0.c
a2=a0.d
a3=A.Gz(new A.j(a1.a,a1.b,a1.c),q,a4.d0,p,r,new A.j(g.a,g.b,g.c),new A.j(a2.a,a2.b,a2.c))
if(!a3.a)continue;++a4.eo
a4.d1=a4.d1+a3.r
a4.d2=a4.d2+a3.f}if(a4.y1>0.01)a4.d6=d.jx(a6,a7,new A.w2(a4,m,n))
r=a4.d3
if(r.length!==0)a4.d4=new A.pt(l,k,r,1.4,0.42*n).jw(a6,a7)},
kK(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.d0,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
giJ(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.w:s).b},
gdE(){var s=this.d_
s=s==null?null:s.b
return s==null?0:s},
giI(){var s=this.d_
s=s==null?null:s.d
return s==null?0:s},
gh3(){var s,r=this.w
r===$&&A.t()
s=r.a
A:{if(B.G===s){r=40
break A}if(B.Q===s){r=24
break A}r=8
break A}return r},
ha(a,b){var s=A.JK(a,b),r=A.JI(a,b),q=A.K(s.c,t.i)
B.a.L(q,r)
return A.c([new A.hG("wall",new Float32Array(A.S(q))),new A.hG("floor",s.a),new A.hG("ceiling",s.b)],t.pv)},
c6(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.k(n,new A.C(q,p,a[o]))}if(n.length===0)throw A.b(A.i("house surface mesh cannot be empty"))
return new A.bW(B.ah,a,null,A.b1(n))},
kM(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.ha(a2,a3),a0=a3.a,a1=b.ok.h(0,a0)
if(a1==null)throw A.b(A.i("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.t()
k=k.w
if(k==null)k=A.f(A.i("renderer is not initialized"))
j=b.c6(l.b)
i=l.a
if(k.x)A.f(A.i("resource library is disposed"))
h=k.a
j.A()
g=h.b.aG(j,n+i)
f=g.a
h.c.l(0,f,h.bc(j))
k.f.k(0,g)
i=a1.h(0,i)
i.toString
e=new A.bb(g,i,B.B,-1,B.U,B.K,!0,!0,0,null)
i=b.f
i===$&&A.t()
B.B.A()
k=i.a
j=k.$ti
k.Z(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.B.ae()
k=k.gal()
h=A.B(k)
A.b1(new A.H(k,h.i("C(1)").a(j.gap()),h.i("H<1,C>")))
c=i.b.bO(e)
B.a.k(p,g)
B.a.k(o,c)
B.a.k(s,g)
B.a.k(r,c)
B.a.k(q,e)}b.z.l(0,a0,s)
b.ax.l(0,a0,r)
b.ay.l(0,a0,q)
if(r.length!==0)b.as.l(0,a0,B.a.ga1(r))
if(q.length!==0)b.at.l(0,a0,B.a.ga1(q))},
lh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cM(l,l.r,l.e,A.v(l).i("cM<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bC.h(0,i)
if(h==null)A.f(A.i("Unknown house surface material: "+i))
i=j.a
B.a.k(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.k(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.p.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.p.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
kP(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.ct(new Float32Array(5376))
g=this.kO(a0.b)
r=new A.j(d,b,f)
q=new A.j(e,b,f)
p=new A.j(e,c,f)
o=new A.j(d,c,f)
n=new A.j(d,b,a)
m=new A.j(e,b,a)
l=new A.j(e,c,a)
k=new A.j(d,c,a)
s.aN(q,r,o,p,g)
s.aN(n,m,l,k,g)
s.aN(r,n,k,o,g)
s.aN(m,q,p,l,g)
s.aN(r,q,m,n,g)
s.aN(o,k,l,p,g)
j=B.t.aD(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.C(e,d,j[c]))}return new A.bW(B.ah,j,null,A.b1(g))},
kO(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
e0(a){var s
A:{if(0===a){s=B.mP
break A}if(1===a){s=B.mR
break A}if(2===a){s=B.mX
break A}if(3===a){s=B.n4
break A}if(4===a){s=B.n5
break A}if(5===a){s=B.mV
break A}if(6===a){s=B.n3
break A}if(7===a){s=B.n_
break A}s=B.n2
break A}return s},
e3(a){var s
A:{if("architecture"===a){s=B.mQ
break A}if("furniture"===a){s=B.dW
break A}if("fixture"===a){s=B.mZ
break A}if("service"===a){s=B.n0
break A}if("story"===a){s=B.mY
break A}if("decor"===a){s=B.mT
break A}if("micro"===a){s=B.mW
break A}s=B.dW
break A}return s},
ds(a){return this.nV(t.G.a(a))},
nV(a){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l
var $async$ds=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:if(!p.aI){s=1
break}o=A.c([],t.iJ)
for(n=0;n<8;++n){m=B.jQ[n]
l=a.h(0,m)
if(l!=null)o.push(p.cN(m,l))}s=3
return A.a6(A.pA(o,t.H),$async$ds)
case 3:case 1:return A.aJ(q,r)}})
return A.aK($async$ds,r)},
cN(a,b){return this.kS(a,b)},
kS(a2,a3){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cN=A.aM(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.a(A.a(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a6(A.av(A.a(m.decode()),t.X),$async$cN)
case 7:l=null
k=null
j=null
i=a2
A:{if("grime"===i){j=B.mN
break A}if("porcelain-albedo"===i||"porcelain-normal"===i){j=B.mM
break A}if("skybox-main-atmosphere-v1"===i){j=B.mL
break A}j=B.mK
break A}h=j
l=h.a
k=h.b
b=A.a(A.a(c.document).createElement("canvas"))
b.width=l
b.height=k
g=b
f=A.G(g.getContext("2d"))
if(!t.m.b(f)){j=A.i("2D canvas context unavailable for "+a2)
throw A.b(j)}A.aU(f,"drawImage",[m,0,0,l,k],t.H)
e=t.mV.a(A.a(f.getImageData(0,0,l,k)).data)
j=n.e
j===$&&A.t()
j=j.gaO()
c=new Uint8Array(A.S(e))
if(j.x)A.f(A.i("resource library is disposed"))
j.c.pa(a0,c)
j=n.e.gaO()
if(j.x)A.f(A.i("resource library is disposed"))
j.c.nt(a0)
$.p.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.e7()
n.cP()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.ah(a1)
j=$.p.j()
j.setAttribute("data-renderer-texture-"+a2,"fallback")
n.e7()
n.cP()
A.a(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.y(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cN,r)},
e7(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aI||i.k2.a===0)return
s=i.k2
r=A.v(s).i("N<1,2>")
r=A.li(new A.N(s,r),r.i("c0(r.E)").a(new A.vY()),r.i("r.E"),t.jP)
q=A.K(r,A.v(r).i("r.E"))
s=i.e
s===$&&A.t()
p=s.gaO().ghj().dv(q)
s=p.a
o=A.c(s.slice(0),A.B(s))
B.a.Y(o,new A.vZ())
s=A.B(o)
r=s.i("e(1)")
s=s.i("H<1,e>")
n=new A.H(o,r.a(new A.w_()),s).W(0,",")
m=new A.H(o,r.a(new A.w0()),s).W(0,",")
s=p.cU(B.ed)
r=p.cU(B.ee)
l=p.cU(B.ef)
k=p.cU(B.eg);++i.hX
j=$.p.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hX)
if(!A.T($.p.j().hasAttribute("data-renderer-texture-residency-initial")))$.p.j().setAttribute("data-renderer-texture-residency-initial",n)},
cP(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aI||j.rx.a===0)return
s=A.c([],t.a6)
for(r=j.rx,r=new A.N(r,A.v(r).i("N<1,2>")).gv(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.db(p,o,B.c.q(p,"wall")?2:1))}r=j.e
r===$&&A.t()
r=r.gaO()
n=r.e
if(n===$){p=r.ghj()
r.e!==$&&A.nC()
n=r.e=new A.r3(p)}m=n.dv(s)
s=m.a
l=A.c(s.slice(0),A.B(s))
B.a.Y(l,new A.vV())
s=A.B(l)
k=new A.H(l,s.i("e(1)").a(new A.vW()),s.i("H<1,e>")).W(0,",")
s=$.p.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cK(B.bF)+";pending="+m.cK(B.dz)+";missing="+m.cK(B.dA)+";evicted="+m.cK(B.dB))},
ca(a,b){return new A.bb(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fK(a,b,c){var s,r,q,p,o,n=A.JH(a,b,c),m=n.length
if(m===0)throw A.b(A.i("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.C(q,p,n[o]))}return new A.bW(B.ah,n,null,A.b1(s))},
lb(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.R.j().aH(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.j(k,s,r),new A.j(q,s,r),new A.j(q,p,r),new A.j(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.j(k,s,r),new A.j(q,s,r),new A.j(q,p,r),new A.j(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.j(k,s,r),new A.j(k,s,q),new A.j(k,p,q),new A.j(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.j(k,s,r),new A.j(k,s,q),new A.j(k,p,q),new A.j(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.ct(new Float32Array(5376))
o.aN(k[0],k[1],k[2],k[3],g)
n=B.t.aD(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.C(r,q,n[p]))}return new A.bW(B.ah,n,null,A.b1(k))},
k7(a,b){var s,r,q,p=a.e,o=A.v(p).i("N<1,2>"),n=A.K(new A.N(p,o),o.i("r.E"))
B.a.Y(n,new A.vR())
p=$.p.j()
o=a.a
s=A.B(o)
r=a.c
q=A.B(r)
p.setAttribute("data-renderer-light-selection","points="+new A.H(o,s.i("k(1)").a(new A.vS()),s.i("H<1,k>")).W(0,":")+";spots="+new A.H(r,q.i("k(1)").a(new A.vT()),q.i("H<1,k>")).W(0,":"))
q=A.B(n)
p.setAttribute("data-renderer-light-rejections",new A.H(n,q.i("e(1)").a(new A.vU()),q.i("H<1,e>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
c8(a){var s,r=this.e
r===$&&A.t()
r=r.gaO()
if(r.x)A.f(A.i("resource library is disposed"))
a.A()
s=r.b.a.aG(a,null)
r.r.k(0,s)
this.rx.l(0,a.a,a)
return s},
$iBv:1}
A.w3.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:50}
A.w6.prototype={
$1(a){var s,r
A.h(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.d(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.lg(this.b.a,s)},
$S:174}
A.w7.prototype={
$1(a){return this.a},
$S:175}
A.vX.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:176}
A.w4.prototype={
$1(a){var s=0,r=A.aL(t.N),q,p
var $async$$1=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.T(p.ok))throw A.b(A.i("package manifest HTTP "+A.y(A.ny(p,"status",t.S))+": "+a))
s=4
return A.a6(A.av(A.a(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$1,r)},
$S:177}
A.w5.prototype={
$2(a,b){var s=0,r=A.aL(t.uo),q,p,o
var $async$$2=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.T(p.ok))throw A.b(A.i("package payload HTTP "+A.y(A.ny(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a6(A.av(A.a(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.Bj(d,0,null)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$2,r)},
$S:178}
A.wa.prototype={
$1(a){var s=this.a.dy.h(0,A.w(a))
s.toString
return s},
$S:26}
A.wb.prototype={
$1(a){var s,r,q,p
A.w(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.b(A.i("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:26}
A.w8.prototype={
$0(){var s,r=this.a.ci,q=this.b
if(!(q<r.length))return A.d(r,q)
s=r[q]
r=s.a
return new A.hz("warm:"+q,new A.C(r.a,r.b,r.c),s.b,B.b.n((s.c-this.c.r)/60,0,1))},
$S:179}
A.w1.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.t()
if(r.b.q(0,a)){this.b.L(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.l(0,b[o],p+s.w.a.b+" does not install it")},
$S:180}
A.w9.prototype={
$2(a,b){return Math.max(A.ax(a),t.z0.a(b).d)},
$S:181}
A.w2.prototype={
$1(a){var s=a.c
return!this.a.kK(new A.j(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:182}
A.vY.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c0(s,a.b,r)},
$S:183}
A.vZ.prototype={
$2(a,b){var s=t.h
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:184}
A.w_.prototype={
$1(a){t.h.a(a)
return a.a.a+"="+a.b.b},
$S:51}
A.w0.prototype={
$1(a){var s=t.h.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:51}
A.vV.prototype={
$2(a,b){var s=t.wl
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:186}
A.vW.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:187}
A.vR.prototype={
$2(a,b){var s=t.ou
return B.d.I(s.a(a).a,s.a(b).a)},
$S:188}
A.vS.prototype={
$1(a){return t.je.a(a).a},
$S:52}
A.vT.prototype={
$1(a){return t.je.a(a).a},
$S:52}
A.vU.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:190}
A.mR.prototype={}
A.jv.prototype={
hJ(a,b){var s=this,r=b==null?s.d:b
return new A.jv(s.a,s.b,s.c,r,a)},
mr(a){return this.hJ(a,null)}}
A.vv.prototype={
gaw(){return this.b},
gaX(){return this.c}}
A.wI.prototype={
$2(a,b){var s
A.A6(a,A.y(b))
switch(a){case"master":s=$.bm
if(s!=null)s.j1(b)
break
case"voice":s=$.bm
if(s!=null)s.j3(b)
break
case"effects":s=$.bm
if(s!=null)s.j0(b)
break
case"ambience":s=$.bm
if(s!=null)s.j_(b)
break
case"music":s=$.bm
if(s!=null)s.j2(b)
break}},
$S:35}
A.wJ.prototype={
$1(a){var s
A.A6("muted",""+a)
s=$.bm
if(s!=null)s.f8(a)},
$S:10}
A.wK.prototype={
$1(a){var s
A.A6("mono",""+a)
s=$.bm
if(s!=null)s.dI(a)},
$S:10}
A.wQ.prototype={
$2(a,b){A.A7(a,A.y(b))
A.Cv(a,b)},
$S:35}
A.wR.prototype={
$1(a){var s="high-contrast"
A.A7(s,""+a)
A.ws(s,a)},
$S:10}
A.wS.prototype={
$1(a){var s="strong-highlights"
A.A7(s,""+a)
A.ws(s,a)},
$S:10}
A.wT.prototype={
$1(a){$.dt().oH(a)
A.xA()
A.Cx()},
$S:192}
A.wU.prototype={
$0(){var s=$.dt()
s.a=A.dS(null,1)
s.b=A.dS(null,1)
A.xA()
A.Cx()},
$S:0}
A.wV.prototype={
$0(){A.e6(this.a)},
$S:0}
A.wW.prototype={
$0(){this.a.ah()},
$S:0}
A.wX.prototype={
$0(){A.e6(this.a)},
$S:0}
A.wL.prototype={
$0(){A.hX(this.a)},
$S:0}
A.wM.prototype={
$1(a){$.jX=a
A.D0()
A.zA()},
$S:193}
A.wN.prototype={
$1(a){var s=$.cC()
$.zN=a
if(!s.Q&&a.Q){$.bw.j().a=1
$.bw.j().iA(7)
$.aC.j().i9()
$.cB().P(0)}A.D2()
A.Cw()},
$S:194}
A.wO.prototype={
$1(a){$.dq=a
A.zV()
A.ni()},
$S:195}
A.wP.prototype={
$0(){$.dq=B.aE
$.fH.j().f4($.dq)
A.zV()
A.ni()},
$S:0}
A.wE.prototype={
$1(a){var s,r=A.DC(a,A.CN())
$.jZ=A.hc($.k9().b,a)
s=r.b
$.eO.j().cD(a,$.k9().b,s)
$.p.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.CO=A.nk(a,r,$.CO)},
$S:196}
A.wF.prototype={
$0(){this.a.$1(B.jk)},
$S:0}
A.wG.prototype={
$0(){A.e6($.eO.j())},
$S:0}
A.wH.prototype={
$0(){A.e6($.eO.j())},
$S:0}
A.wA.prototype={
$1(a){},
$S:20}
A.wB.prototype={
$1(a){var s,r
$.zJ=a
$.am.j().f5(a.r)
s=$.am.j()
r=s.ch
r.a=a.f
r.eM()
s.b0()
A.D1()},
$S:197}
A.wC.prototype={
$0(){A.e6($.jQ.j())},
$S:0}
A.wD.prototype={
$0(){A.e6($.jQ.j())},
$S:0}
A.xr.prototype={
$0(){$.xP=A.T(this.a.matches)
$.Ac=A.T(this.b.matches)
A.ni()},
$S:0}
A.xp.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xq.prototype={
$1(a){return this.a.$0()},
$S:2}
A.yg.prototype={
$1(a){var s
try{A.AW(this.b,a,this.a)
return!0}catch(s){if(A.ah(s) instanceof A.A)return!1
else throw s}},
$S:198}
A.yh.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jW.j()
break
case 5:p=$.fH.j()
break
case 1:p=$.eO.j()
break
case 4:p=$.hM.j()
break
case 2:p=$.jS.j()
break
case 3:p=$.jQ.j()
break}s=p
r=null
switch(o){case 0:r=B.mb
break
case 5:r=B.mg
break
case 1:r=B.mc
break
case 4:r=B.mf
break
case 2:r=B.md
break
case 3:r=B.me
break}q=r
p=B.du.h(0,a)
p.toString
A.zU(s,q,p)},
$S:199}
A.yi.prototype={
$0(){A.e6($.hO.j())},
$S:0}
A.yt.prototype={
$0(){return A.e6($.hO.j())},
$S:0}
A.yD.prototype={
$0(){$.cz.j().ah()},
$S:0}
A.yE.prototype={
$0(){$.cz.j().ah()},
$S:0}
A.yF.prototype={
$0(){A.zU($.hO.j(),B.dD,"pause.settings")},
$S:0}
A.yG.prototype={
$0(){$.cz.j().ah()
A.hW($.jT.j())},
$S:0}
A.yH.prototype={
$0(){A.k5("saved")},
$S:0}
A.yI.prototype={
$0(){$.cz.j().ah()
A.hW($.jT.j())},
$S:0}
A.yJ.prototype={
$0(){A.zU($.ng.j(),B.mh,"pause.credits")},
$S:0}
A.yj.prototype={
$0(){return A.hX($.cz.j())},
$S:0}
A.yk.prototype={
$1(a){var s=$.W.j(),r=s.e.pe(a),q=r?B.iS:B.iT
s.h4(q,r?a:null)
return r},
$S:22}
A.yl.prototype={
$0(){return A.hX($.jU.j())},
$S:0}
A.ym.prototype={
$2(a,b){var s,r
if($.aC.j().y){s=$.aP.j().gcg()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.HR(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.dd,a)
A.HQ(B.dd[a])}}},
$S:200}
A.yn.prototype={
$2(a,b){var s,r,q,p,o,n
if($.W.j().gag().a===21){A.D7(!1)
return}s=$.R.j().y.b
$.W.j().jm(a,b,$.af)
if(b===B.bW&&$.af===$.R.j().r){A.IN()
A.fM("woke in the living room")}r=$.R.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cA()
if(typeof n!=="number")return A.yb(n)
if(!(o<n))break
if($.R.b===$.R)A.f(A.a9(""))
p=B.a.h(B.V,q).b
o=$.ay
if(o!=null){n=$.R.b
if(n===$.R)A.f(A.a9(""))
o.dw(n,p)}o=q
if(typeof o!=="number")return o.a4()
q=o+1}A.k5("saved after sleep")},
$S:201}
A.yo.prototype={
$0(){return A.hX($.fJ.j())},
$S:0}
A.yp.prototype={
$0(){return A.hX($.jT.j())},
$S:0}
A.yq.prototype={
$0(){return A.e6($.ng.j())},
$S:0}
A.yr.prototype={
$0(){A.hX($.jR.j())},
$S:0}
A.ys.prototype={
$0(){A.hX($.jR.j())},
$S:0}
A.yu.prototype={
$1(a){return A.D6()},
$S:2}
A.yv.prototype={
$1(a){if(A.w(A.a(v.G.document).visibilityState)==="hidden")A.IQ()},
$S:1}
A.yw.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a(a)
if(A.w(l.code)==="CapsLock"&&!A.T(l.repeat)){l.preventDefault()
p=$.bS()
o=!p.a
p.a=o
if(o)A.qE(A.a(v.G.document),"exitPointerLock",t.X)
else $.am.j().dB($.p.j())
return}p=$.bS()
if(p.a&&!A.T(l.repeat)){if(A.w(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.am.j().dB($.p.j())
return}if(A.w(l.code)==="KeyC"){l.preventDefault()
A.wZ()
return}if(A.w(l.code)==="KeyI"){l.preventDefault()
A.xn()
return}if(A.w(l.code)==="ArrowUp"||A.w(l.code)==="KeyW"){l.preventDefault()
n=p.gbr().length
if(n>0)p.c=B.d.O(p.c-1+n,n)
o=$.eT
if(o!=null){p=p.gbr().length
o.a.dH(-1,p)}return}if(A.w(l.code)==="ArrowDown"||A.w(l.code)==="KeyS"){l.preventDefault()
n=p.gbr().length
if(n>0)p.c=B.d.O(p.c+1,n)
o=$.eT
if(o!=null){p=p.gbr().length
o.a.dH(1,p)}return}if(A.w(l.code)==="ArrowLeft"||A.w(l.code)==="KeyA"){l.preventDefault()
p.n0()
return}if(A.w(l.code)==="ArrowRight"||A.w(l.code)==="KeyD"){l.preventDefault()
p.nD()
return}if(A.w(l.code)==="KeyQ"){l.preventDefault()
m=p.gbN()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y-m.w*0.2,m.f,m.r)
return}if(A.w(l.code)==="KeyE"){l.preventDefault()
m=p.gbN()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y+m.w*0.2,m.f,m.r)
return}if(A.w(l.code)==="KeyR"){l.preventDefault()
if(A.T(l.shiftKey))p.oG()
else p.oI()
return}if(B.c.V(A.w(l.code),"Digit")||B.c.V(A.w(l.code),"Numpad")){o=A.w(l.code)
o=A.yU(o,"Digit","")
s=A.yU(o,"Numpad","")
r=A.dM(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.aC.j().y&&!A.T(l.repeat))if($.cB().ny(A.w(l.code))){l.preventDefault()
return}if(A.w(l.code)==="Escape"&&!A.T(l.repeat)){p=$.bf
if(p==null)A.hW($.cz.j())
else p.ah()
return}q=$.bf==null&&!p.a
if(!A.T(l.repeat)&&q)$.fI.j().i4(new A.lN(A.w(l.code),!0,1))
if(A.w(l.code)==="KeyP"&&!A.T(l.repeat)&&$.E4())$.fL=!$.fL
if((A.w(l.code)==="KeyJ"||A.w(l.code)==="Tab")&&!A.T(l.repeat)&&!$.aC.j().y){l.preventDefault()
A.k6($.jU.j())}if(A.w(l.code)==="KeyL"&&!A.T(l.repeat)&&!$.aC.j().y)A.k6($.fJ.j())
if(A.w(l.code)==="KeyH"&&!A.T(l.repeat)&&!$.aC.j().y)A.k6($.jT.j())
if(A.w(l.code)==="KeyO"&&!A.T(l.repeat)&&!$.aC.j().y)A.k6($.jV.j())
if(A.w(l.code)==="KeyK"&&!A.T(l.repeat)&&q)A.k5("saved")},
$S:1}
A.yx.prototype={
$1(a){var s=A.a(a)
if($.bf==null)$.fI.j().i4(new A.lN(A.w(s.code),!1,0))},
$S:1}
A.yy.prototype={
$1(a){return A.Cz()},
$S:2}
A.yz.prototype={
$1(a){return A.Cz()},
$S:2}
A.yA.prototype={
$1(a){return A.Ii(A.a(a))},
$S:2}
A.yB.prototype={
$1(a){var s=A.a(a)
$.p.j().focus()
if($.aC.j().y){s.preventDefault()
A.Ih(s)
return}$.am.j().dB($.p.j())},
$S:1}
A.yC.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.bS()
if(!o.a||$.eT==null)return
p.preventDefault()
s=o.gbr()
r=A.a1(p.deltaY)>0?1:-1
o=$.eT
o.toString
q=J.cD(s)
o.a.dH(A.h(r),q)},
$S:1}
A.xs.prototype={
$1(a){var s=A.w(A.a(a).message)
A.xE(s,null)},
$S:1}
A.xt.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.xE("unhandled rejection: "+A.y(s==null?A.w(a.type):s),null)},
$S:1}
A.xz.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:48}
A.xK.prototype={
$0(){this.a.className=""},
$S:13}
A.xS.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:40}
A.xw.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:18}
A.xG.prototype={
$1(a){return t.g.a(a).e},
$S:28}
A.xB.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.xD.prototype={
$1(a){return t.o.a(a).w},
$S:14}
A.xX.prototype={
$1(a){return t.o.a(a).w},
$S:14}
A.xR.prototype={
$2(a,b){return A.ax(a)+t.cZ.a(b).d},
$S:202};(function aliases(){var s=J.ev.prototype
s.jz=s.t
s=A.r.prototype
s.jy=s.dF
s=A.iL.prototype
s.jA=s.bU})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"Ip","Fs",38)
r(J.x.prototype,"gaE","q",9)
q(A,"IE","FP",49)
r(A.aX.prototype,"gaE","q",9)
r(A.ha.prototype,"gaE","q",9)
p(A.cp.prototype,"gmm","K",9)
o(A,"JC","GT",23)
o(A,"JD","GU",23)
o(A,"JE","GV",23)
q(A,"Dn","Jf",0)
r(A.cx.prototype,"gaE","q",9)
r(A.hB.prototype,"gaE","q",9)
o(A,"JP","I_",15)
p(A.ll.prototype,"goO","oP",104)
var l
p(l=A.m4.prototype,"goK","oL",11)
p(l,"goT","oU",11)
p(l,"goV","oW",11)
p(l,"goM","oN",11)
p(l,"goR","oS",11)
q(A,"Ds","GZ",204)
q(A,"Lr","zg",50)
p(A.da.prototype,"gap","iE",67)
n(A.jL.prototype,"gn7","a_",0)
p(l=A.l6.prototype,"gkU","kV",2)
p(l,"gkW","kX",2)
p(l,"gl_","l0",2)
p(l,"gl3","l4",2)
p(l,"gl5","l6",2)
p(l,"gl1","l2",2)
p(l,"gkY","kZ",2)
p(l,"gl7","l8",2)
o(A,"Kd","CE",15)
o(A,"Kh","CD",15)
o(A,"K5","Fo",205)
o(A,"K6","Fq",206)
o(A,"Km","Fi",207)
m(A,"Kv",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["BW",function(){return A.BW(0,0,0)}],208,0)
p(A.iL.prototype,"gl9","la",2)
p(A.hu.prototype,"gkI","kJ",146)
p(A.mh.prototype,"gnN","nO",21)
o(A,"DB","IT",209)
q(A,"DA","HX",0)
o(A,"K9","HS",140)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.z7,J.l8,A.j_,J.eZ,A.r,A.ia,A.at,A.a3,A.tx,A.al,A.iB,A.U,A.il,A.ii,A.je,A.aE,A.eB,A.bk,A.hi,A.h_,A.en,A.e_,A.dg,A.uJ,A.rx,A.ij,A.jC,A.ag,A.qY,A.bV,A.ac,A.cM,A.iw,A.mN,A.mt,A.j6,A.n4,A.vw,A.wj,A.cS,A.mG,A.n7,A.wf,A.mu,A.cf,A.bn,A.my,A.dZ,A.as,A.mv,A.n2,A.jO,A.jm,A.mM,A.fD,A.jp,A.jH,A.n8,A.eo,A.kz,A.vP,A.wn,A.wk,A.f3,A.dy,A.mD,A.lw,A.j4,A.vx,A.A,A.P,A.az,A.n5,A.us,A.bE,A.jJ,A.uN,A.n_,A.rw,A.mJ,A.eL,A.ec,A.mb,A.rf,A.lm,A.rq,A.rh,A.rk,A.fe,A.t9,A.dO,A.lD,A.oP,A.oQ,A.oS,A.oR,A.lC,A.i9,A.um,A.kT,A.kU,A.dP,A.l2,A.aT,A.kI,A.lB,A.bO,A.cO,A.bc,A.jb,A.bW,A.kC,A.ry,A.lE,A.lP,A.bb,A.m2,A.iX,A.aY,A.pw,A.db,A.c7,A.r5,A.r3,A.ll,A.m7,A.rb,A.i8,A.re,A.rg,A.hk,A.lJ,A.c0,A.cb,A.uD,A.uB,A.dn,A.m4,A.uq,A.hz,A.cu,A.v5,A.dI,A.kQ,A.kR,A.kV,A.pv,A.hE,A.aw,A.bz,A.aO,A.Q,A.ic,A.lH,A.bg,A.tb,A.ba,A.td,A.tc,A.mI,A.iW,A.lO,A.vy,A.n6,A.we,A.mT,A.mF,A.mX,A.mQ,A.vK,A.bX,A.bT,A.b3,A.p7,A.p6,A.fR,A.fg,A.px,A.da,A.lK,A.fs,A.C,A.nW,A.nZ,A.nX,A.fT,A.nY,A.kS,A.pt,A.i7,A.mw,A.kr,A.mx,A.kE,A.mA,A.ig,A.mB,A.kJ,A.mC,A.l1,A.mH,A.iD,A.mO,A.fV,A.ks,A.zh,A.iN,A.mU,A.lI,A.mV,A.fq,A.lX,A.mY,A.lY,A.mZ,A.m_,A.n1,A.lZ,A.n0,A.mc,A.n9,A.ml,A.nb,A.na,A.iY,A.mp,A.ne,A.oN,A.kZ,A.l0,A.ip,A.j1,A.q,A.kF,A.hm,A.pT,A.eM,A.de,A.h6,A.vo,A.e2,A.jN,A.jM,A.nd,A.nc,A.wp,A.vk,A.vn,A.kH,A.kl,A.hI,A.jL,A.o4,A.nI,A.i5,A.o0,A.z2,A.oc,A.o6,A.jf,A.fW,A.oK,A.pu,A.l6,A.qv,A.qz,A.b8,A.qU,A.qR,A.p8,A.r_,A.ct,A.j,A.vb,A.cv,A.eF,A.v9,A.v7,A.m0,A.mq,A.oD,A.kK,A.ph,A.h7,A.bH,A.lA,A.t0,A.ht,A.tq,A.fn,A.kX,A.pH,A.pG,A.kn,A.ox,A.ee,A.eg,A.ei,A.ef,A.eh,A.kt,A.ln,A.cV,A.mr,A.it,A.qb,A.a8,A.kN,A.l3,A.qc,A.kO,A.dm,A.kP,A.eK,A.er,A.tn,A.eJ,A.q9,A.pl,A.uk,A.qe,A.d8,A.cK,A.l9,A.qC,A.qA,A.qB,A.dL,A.qj,A.fx,A.c9,A.lh,A.fr,A.fm,A.qm,A.d7,A.qa,A.f9,A.ql,A.d6,A.qr,A.iM,A.iA,A.bA,A.v4,A.lg,A.c4,A.qG,A.i6,A.oA,A.iO,A.rU,A.iP,A.lF,A.rO,A.rN,A.rP,A.rQ,A.rR,A.rS,A.hn,A.rT,A.rV,A.rY,A.rZ,A.iz,A.t8,A.tl,A.lN,A.tk,A.tm,A.u9,A.cs,A.ub,A.hv,A.p9,A.vp,A.fy,A.kx,A.qt,A.qx,A.iT,A.iS,A.dd,A.t6,A.t7,A.t5,A.to,A.df,A.tp,A.kY,A.fv,A.vh,A.hC,A.eE,A.v6,A.vf,A.fw,A.eG,A.mm,A.hD,A.vj,A.pE,A.kW,A.rr,A.d1,A.bC,A.rL,A.uv,A.fu,A.ft,A.jd,A.mk,A.fk,A.dl,A.ut,A.dQ,A.lU,A.lR,A.lS,A.lT,A.uy,A.kd,A.z1,A.eb,A.nS,A.o_,A.ed,A.oC,A.bo,A.oL,A.h1,A.dw,A.ky,A.iL,A.pc,A.pN,A.pP,A.h9,A.dH,A.q5,A.pW,A.pX,A.ck,A.q6,A.dc,A.fX,A.rA,A.dK,A.ex,A.c8,A.rF,A.t4,A.bh,A.u3,A.u7,A.cE,A.nP,A.mh,A.v3,A.dX,A.bF,A.ce,A.c2,A.mj,A.kf,A.mg,A.hG,A.mS,A.mR,A.jv,A.vv])
q(J.l8,[J.lb,J.iv,J.ix,J.hd,J.he,J.fa,J.eu])
q(J.ix,[J.ev,J.x,A.ew,A.iH])
q(J.ev,[J.lz,J.eA,J.dJ])
r(J.la,A.j_)
r(J.qF,J.x)
q(J.fa,[J.iu,J.lc])
q(A.r,[A.eI,A.V,A.cN,A.I,A.ik,A.dY,A.fC,A.ms,A.n3,A.bI])
q(A.eI,[A.f2,A.jP])
r(A.jk,A.f2)
r(A.ji,A.jP)
r(A.b9,A.ji)
q(A.at,[A.hf,A.dU,A.ld,A.m6,A.lQ,A.mE,A.iy,A.ki,A.cF,A.j9,A.m5,A.hw,A.kw])
r(A.hA,A.a3)
r(A.dx,A.hA)
q(A.V,[A.a0,A.ae,A.ao,A.N,A.fB,A.jo])
q(A.a0,[A.j7,A.H,A.bM,A.mL])
r(A.dz,A.cN)
q(A.bk,[A.e0,A.e1,A.hF])
q(A.e0,[A.a5,A.fG,A.jw,A.jx])
q(A.e1,[A.aH,A.bl,A.jy,A.jz])
r(A.jA,A.hF)
r(A.hK,A.hi)
r(A.eC,A.hK)
r(A.id,A.eC)
q(A.en,[A.kv,A.ku,A.m3,A.yc,A.ye,A.vs,A.vr,A.wu,A.pB,A.vI,A.vL,A.r0,A.vN,A.yL,A.yM,A.y3,A.u8,A.ri,A.rn,A.ro,A.rm,A.xu,A.xO,A.xx,A.xM,A.ta,A.uS,A.r8,A.r9,A.ra,A.rz,A.r6,A.r7,A.rc,A.y4,A.uE,A.uF,A.uG,A.uI,A.pp,A.pn,A.po,A.rC,A.rD,A.ti,A.th,A.tg,A.tf,A.te,A.tj,A.xf,A.xg,A.ts,A.tt,A.yT,A.yR,A.py,A.r2,A.y0,A.pU,A.pV,A.vl,A.vm,A.oe,A.oi,A.oh,A.og,A.oj,A.o5,A.nJ,A.nK,A.nL,A.o2,A.o3,A.o1,A.qw,A.qS,A.vc,A.vd,A.v8,A.va,A.pk,A.pI,A.pK,A.pL,A.pM,A.ok,A.ol,A.om,A.on,A.oo,A.oq,A.or,A.os,A.ot,A.ou,A.ov,A.ow,A.op,A.y_,A.oy,A.oz,A.xy,A.xV,A.oO,A.pm,A.qd,A.yV,A.xl,A.xk,A.wr,A.xJ,A.qs,A.ul,A.qi,A.qh,A.qf,A.xU,A.qn,A.qp,A.qq,A.xT,A.pg,A.qX,A.qN,A.xI,A.rW,A.rX,A.t_,A.ua,A.ui,A.uc,A.ud,A.ug,A.uh,A.uf,A.ue,A.ur,A.pa,A.pb,A.vi,A.pD,A.rM,A.uu,A.tv,A.tw,A.uz,A.uA,A.nH,A.nF,A.o9,A.oa,A.oF,A.oJ,A.oI,A.oH,A.p0,A.p_,A.p1,A.p2,A.p3,A.oZ,A.oU,A.oV,A.p5,A.pd,A.pe,A.pf,A.pj,A.pO,A.pQ,A.pR,A.q3,A.q_,A.q0,A.q1,A.q2,A.pZ,A.pY,A.q8,A.qI,A.qJ,A.qK,A.rG,A.rH,A.rI,A.tZ,A.u_,A.tR,A.tS,A.tQ,A.tT,A.tB,A.tU,A.tV,A.tW,A.tP,A.tH,A.tI,A.tJ,A.tK,A.tL,A.tM,A.tN,A.tO,A.tG,A.tC,A.tD,A.tE,A.tF,A.tY,A.tX,A.u5,A.up,A.nR,A.v1,A.v0,A.v2,A.uX,A.v_,A.uV,A.uU,A.y7,A.uT,A.nM,A.nN,A.nO,A.w6,A.w7,A.vX,A.w4,A.wa,A.wb,A.w2,A.vY,A.w_,A.w0,A.vW,A.vS,A.vT,A.vU,A.wJ,A.wK,A.wR,A.wS,A.wT,A.wM,A.wN,A.wO,A.wE,A.wA,A.wB,A.xp,A.xq,A.yg,A.yh,A.yk,A.yu,A.yv,A.yw,A.yx,A.yy,A.yz,A.yA,A.yB,A.yC,A.xs,A.xt,A.xz,A.xS,A.xG,A.xB,A.xD,A.xX])
q(A.kv,[A.oT,A.qO,A.yd,A.wv,A.xY,A.pC,A.vJ,A.qZ,A.r1,A.vQ,A.uP,A.uO,A.rj,A.rl,A.rp,A.yW,A.yX,A.yN,A.r4,A.rd,A.uC,A.uH,A.yO,A.pq,A.tu,A.yS,A.yQ,A.of,A.o7,A.o8,A.qT,A.pJ,A.xN,A.qk,A.qW,A.uj,A.qy,A.pF,A.rt,A.ru,A.rv,A.uw,A.ux,A.oM,A.qL,A.qM,A.nQ,A.uY,A.uW,A.w5,A.w1,A.w9,A.vZ,A.vV,A.vR,A.wI,A.wQ,A.ym,A.yn,A.xw,A.xR])
q(A.h_,[A.a4,A.d4])
q(A.dg,[A.h0,A.jB,A.jI])
q(A.h0,[A.aX,A.ha])
q(A.ku,[A.t1,A.vt,A.vu,A.wg,A.pz,A.vz,A.vE,A.vD,A.vB,A.vA,A.vH,A.vG,A.vF,A.wd,A.xH,A.wm,A.wl,A.xe,A.x7,A.x8,A.xd,A.x2,A.x4,A.x3,A.xc,A.x0,A.x1,A.x9,A.xa,A.xb,A.x6,A.x5,A.xi,A.xj,A.y1,A.qg,A.qo,A.xm,A.nG,A.nU,A.nT,A.ob,A.oX,A.oY,A.oW,A.pS,A.q4,A.rK,A.tz,A.tA,A.u0,A.u1,A.u2,A.u6,A.uo,A.uZ,A.w3,A.w8,A.wU,A.wV,A.wW,A.wX,A.wL,A.wP,A.wF,A.wG,A.wH,A.wC,A.wD,A.xr,A.yi,A.yt,A.yD,A.yE,A.yF,A.yG,A.yH,A.yI,A.yJ,A.yj,A.yl,A.yo,A.yp,A.yq,A.yr,A.ys,A.xK])
r(A.iJ,A.dU)
q(A.m3,[A.m1,A.fU])
q(A.ag,[A.cp,A.jl,A.mK])
r(A.fb,A.cp)
r(A.hl,A.ew)
q(A.iH,[A.lo,A.bq])
q(A.bq,[A.jr,A.jt])
r(A.js,A.jr)
r(A.iF,A.js)
r(A.ju,A.jt)
r(A.iG,A.ju)
q(A.iF,[A.iE,A.lp])
q(A.iG,[A.lq,A.lr,A.ls,A.lt,A.lu,A.ff,A.iI])
r(A.hJ,A.mE)
r(A.jg,A.my)
r(A.mW,A.jO)
r(A.jn,A.jl)
r(A.cx,A.jB)
r(A.hB,A.jI)
q(A.eo,[A.kL,A.ko,A.le])
q(A.kL,[A.kg,A.ma])
q(A.kz,[A.wh,A.oB,A.qQ,A.qP,A.uR,A.uQ])
r(A.kh,A.wh)
r(A.lf,A.iy)
r(A.vO,A.vP)
q(A.cF,[A.hp,A.l5])
r(A.mz,A.jJ)
q(A.mD,[A.kG,A.fi,A.h3,A.fZ,A.f8,A.fS,A.iC,A.cT,A.hs,A.h5,A.kq,A.ib,A.h4,A.fl,A.fd,A.cR,A.dT,A.bi,A.f5,A.co,A.iZ,A.d5,A.hr,A.j3,A.h8,A.kk,A.jh,A.jj,A.l_,A.im,A.iq,A.ir,A.f7,A.io,A.fp,A.dj,A.fY,A.hb,A.hH,A.kp,A.f1,A.kA,A.kD,A.bs,A.km,A.cm,A.dB,A.f4,A.dA,A.eq,A.ep,A.es,A.ly,A.lM,A.hq,A.bZ,A.j2,A.dh,A.c_,A.bD,A.l7,A.fz,A.cr,A.ez,A.eH,A.f_,A.d_,A.cG,A.d0,A.dv,A.du,A.ek,A.el,A.ej,A.f0,A.dE,A.d2,A.d3,A.dF,A.dD,A.dG,A.cn,A.dC,A.cI,A.ke,A.bB,A.cq,A.ey,A.cQ,A.bY,A.bN,A.j0,A.bU,A.cc,A.cd,A.eD,A.dk])
q(A.dP,[A.bL,A.bt,A.c6,A.lx,A.cJ])
r(A.tr,A.mX)
r(A.mn,A.nc)
r(A.jq,A.dm)
q(A.iL,[A.ie,A.p4,A.pi,A.is,A.q7,A.qH,A.rJ,A.ty,A.hu,A.un])
q(A.v3,[A.mi,A.mP,A.bv,A.mf,A.md,A.jc,A.me])
s(A.hA,A.eB)
s(A.jP,A.a3)
s(A.jr,A.a3)
s(A.js,A.aE)
s(A.jt,A.a3)
s(A.ju,A.aE)
s(A.hK,A.jH)
s(A.jI,A.n8)
s(A.mX,A.vK)
s(A.nc,A.wp)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",z:"double",by:"num",e:"String",l:"bool",az:"Null",J:"List",L:"Object",Y:"Map",aj:"JSObject"},mangledNames:{},types:["~()","az(L?)","~(L?)","l(e)","l(z)","cH()","l(@)","0&()","l(cs)","l(L?)","~(l)","cH(bt?)","l(aw)","az()","l(fx)","@(@)","l(fk)","k(c4,c4)","k(P<e,e>,P<e,e>)","l(bh)","az(@)","l(c2)","l(k)","~(~())","~(@)","l(Q)","e(e)","e(ec)","l(c4)","l(bc)","e(ee)","e(eg)","l(c1?)","l(eK)","l(cK)","~(e,z)","~(e,e)","l(bZ)","k(@,@)","P<e,e>(@,@)","l(bC)","~(L?,L?)","l(d_)","l(P<e,J<e>>)","@()","~(aj)","l(cI)","@(e)","l(cn)","k()","l()","e(cb)","k(b8)","e(L?)","c6(k,k,e?)","i9()","z()","fV()","cH?()","l(P<e,aY>)","aY(P<e,aY>)","aY(aY,aY)","k(b3<bX>,b3<bX>)","ca(b3<bX>)","k(b3<bT>,b3<bT>)","ca(b3<bT>)","fg(z,z,z,z)","C(C)","~(fq)","fq()","~(L,di)","z(z,hI)","aS<az>(P<e,e>)","l(J<e>)","k(e,e)","k(c9,c9)","Y<e,@>(fe)","+effectiveScore,light,score(z,b8,z)(b8)","k(+effectiveScore,light,score(z,b8,z),+effectiveScore,light,score(z,b8,z))","l(cm)","az(L,di)","~(@,@)","az(~())","l(fm)","ee(L?)","eg(L?)","ef(L?)","eh(L?)","@(@,e)","k(+influence,light(z,bO),+influence,light(z,bO))","Y<e,e>(Y<e,e>,e)","e(ef)","e(eh)","e(ei)","l(c7)","eq(e)","ei(L?)","l(fr)","e(k,a8,a8,a8)","k(dm,dm)","k(db,db)","l(eJ)","k(k)","l(c9)","cO(c6)","l(d8)","0&(e,k?)","k(dL,dL)","l(d7)","P<e,e>(e,@)","e?(e)","aS<c1>(e)","bL(k,k,e?)","k(cs,cs)","k(k,+(bL,bW))","z(z)","l(c_)","l(bD)","fv()","z(e)","l(cb)","k(c0,c0)","k(P<e,d1>,P<e,d1>)","L?(L?)","P<k,@>(k,fu)","P<k,@>(k,ft)","l(dQ)","bt(k,k,e?)","l(P<@,@>)","P<e,e>(P<@,@>)","l?(L?)","e(k)","e()","0^(r<0^>,L?)<L?>","z(z,e)","k(k,+(bt,dn))","J<e>(J<e>)","~(z)","k(+influence,source(z,cu),+influence,source(z,cu))","e(aw)","~(k)","0^(e,r<0^>)<D>","k(ad,ad)","Y<e,L?>(dK)","e(bB)","l(bB)","l(bN)","az(@,di)","l(dE)","l(d2)","l(d3)","l(dF)","l(dD)","l(dG)","l(dC)","k(k,c1)","l(cG)","l(d0)","l(dv)","l(du)","J<aj>()","e(cE)","k(cE,cE)","cJ(k,k,e?)","k(c2,c2)","J<dl>()","l(dl)","l(P<e,e>)","k(ce,ce)","Y<e,@>(c2)","l(cd)","l(cc)","l(bU)","iY(bL)","c6(k)","hk(hn)","l(Y<e,L>)","aS<e>(e)","aS<c1>(e,e)","hz()","~(e,r<e>)","z(z,dd)","l(fT)","c0(P<e,bt>)","k(cb,cb)","cH(e{fallback:e?})","k(c7,c7)","e(c7)","k(P<k,e>,P<k,e>)","~(k,@)","e(P<k,e>)","bO?()","~(bN)","~(ed)","~(h9)","~(eb)","~(dH)","~(h1)","l(ht)","~(bY)","~(k,e)","~(c_,bD)","z(z,eE)","J<bO>()","hE()","d8(L?)","cK(L?)","d7(L?)","hD({materialDissolution01:z,snowDepthM:z,waterFilmDepthM:z})","~(by)","az(aj)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fG&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jw&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jx&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aH&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bl&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jy&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jz&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jA&&A.Kb(a,b.a)}}
A.Hg(v.typeUniverse,JSON.parse('{"dJ":"ev","lz":"ev","eA":"ev","KH":"ew","x":{"J":["1"],"V":["1"],"aj":[],"r":["1"]},"lb":{"l":[],"an":[]},"iv":{"az":[],"an":[]},"ix":{"aj":[]},"ev":{"aj":[]},"la":{"j_":[]},"qF":{"x":["1"],"J":["1"],"V":["1"],"aj":[],"r":["1"]},"eZ":{"ai":["1"]},"fa":{"z":[],"by":[],"bp":["by"]},"iu":{"z":[],"k":[],"by":[],"bp":["by"],"an":[]},"lc":{"z":[],"by":[],"bp":["by"],"an":[]},"eu":{"e":[],"bp":["e"],"rE":[],"an":[]},"eI":{"r":["2"]},"ia":{"ai":["2"]},"f2":{"eI":["1","2"],"r":["2"],"r.E":"2"},"jk":{"f2":["1","2"],"eI":["1","2"],"V":["2"],"r":["2"],"r.E":"2"},"ji":{"a3":["2"],"J":["2"],"eI":["1","2"],"V":["2"],"r":["2"]},"b9":{"ji":["1","2"],"a3":["2"],"J":["2"],"eI":["1","2"],"V":["2"],"r":["2"],"r.E":"2","a3.E":"2"},"hf":{"at":[]},"dx":{"a3":["k"],"eB":["k"],"J":["k"],"V":["k"],"r":["k"],"a3.E":"k","eB.E":"k"},"V":{"r":["1"]},"a0":{"V":["1"],"r":["1"]},"j7":{"a0":["1"],"V":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"al":{"ai":["1"]},"cN":{"r":["2"],"r.E":"2"},"dz":{"cN":["1","2"],"V":["2"],"r":["2"],"r.E":"2"},"iB":{"ai":["2"]},"H":{"a0":["2"],"V":["2"],"r":["2"],"r.E":"2","a0.E":"2"},"I":{"r":["1"],"r.E":"1"},"U":{"ai":["1"]},"ik":{"r":["2"],"r.E":"2"},"il":{"ai":["2"]},"ii":{"ai":["1"]},"dY":{"r":["1"],"r.E":"1"},"je":{"ai":["1"]},"hA":{"a3":["1"],"eB":["1"],"J":["1"],"V":["1"],"r":["1"]},"bM":{"a0":["1"],"V":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"a5":{"e0":[],"bk":[]},"fG":{"e0":[],"bk":[]},"jw":{"e0":[],"bk":[]},"jx":{"e0":[],"bk":[]},"aH":{"e1":[],"bk":[]},"bl":{"e1":[],"bk":[]},"jy":{"e1":[],"bk":[]},"jz":{"e1":[],"bk":[]},"jA":{"hF":[],"bk":[]},"id":{"eC":["1","2"],"hK":["1","2"],"hi":["1","2"],"jH":["1","2"],"Y":["1","2"]},"h_":{"Y":["1","2"]},"a4":{"h_":["1","2"],"Y":["1","2"]},"fC":{"r":["1"],"r.E":"1"},"e_":{"ai":["1"]},"d4":{"h_":["1","2"],"Y":["1","2"]},"h0":{"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"aX":{"h0":["1"],"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"ha":{"h0":["1"],"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"iJ":{"dU":[],"at":[]},"ld":{"at":[]},"m6":{"at":[]},"jC":{"di":[]},"en":{"f6":[]},"ku":{"f6":[]},"kv":{"f6":[]},"m3":{"f6":[]},"m1":{"f6":[]},"fU":{"f6":[]},"lQ":{"at":[]},"cp":{"ag":["1","2"],"z9":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"ae":{"V":["1"],"r":["1"],"r.E":"1"},"bV":{"ai":["1"]},"ao":{"V":["1"],"r":["1"],"r.E":"1"},"ac":{"ai":["1"]},"N":{"V":["P<1,2>"],"r":["P<1,2>"],"r.E":"P<1,2>"},"cM":{"ai":["P<1,2>"]},"fb":{"cp":["1","2"],"ag":["1","2"],"z9":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"e0":{"bk":[]},"e1":{"bk":[]},"hF":{"bk":[]},"iw":{"G_":[],"rE":[]},"mN":{"iU":[],"hj":[]},"ms":{"r":["iU"],"r.E":"iU"},"mt":{"ai":["iU"]},"j6":{"hj":[]},"n3":{"r":["hj"],"r.E":"hj"},"n4":{"ai":["hj"]},"hl":{"ew":[],"aj":[],"an":[]},"ff":{"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"ew":{"aj":[],"an":[]},"iH":{"aj":[]},"lo":{"aj":[],"an":[]},"bq":{"c5":["1"],"aj":[]},"iF":{"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"]},"iG":{"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"]},"iE":{"pr":[],"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"lp":{"ps":[],"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"lq":{"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lr":{"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"ls":{"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lt":{"uL":[],"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lu":{"uM":[],"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"iI":{"c1":[],"a3":["k"],"bq":["k"],"J":["k"],"c5":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"mE":{"at":[]},"hJ":{"dU":[],"at":[]},"cf":{"ai":["1"]},"bI":{"r":["1"],"r.E":"1"},"bn":{"at":[]},"jg":{"my":["1"]},"as":{"aS":["1"]},"jO":{"C4":[]},"mW":{"jO":[],"C4":[]},"jl":{"ag":["1","2"],"Y":["1","2"]},"jn":{"jl":["1","2"],"ag":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"fB":{"V":["1"],"r":["1"],"r.E":"1"},"jm":{"ai":["1"]},"cx":{"dg":["1"],"Bb":["1"],"dR":["1"],"V":["1"],"r":["1"]},"fD":{"ai":["1"]},"a3":{"J":["1"],"V":["1"],"r":["1"]},"ag":{"Y":["1","2"]},"jo":{"V":["2"],"r":["2"],"r.E":"2"},"jp":{"ai":["2"]},"hi":{"Y":["1","2"]},"eC":{"hK":["1","2"],"hi":["1","2"],"jH":["1","2"],"Y":["1","2"]},"dg":{"dR":["1"],"V":["1"],"r":["1"]},"jB":{"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"hB":{"dg":["1"],"n8":["1"],"dR":["1"],"V":["1"],"r":["1"]},"mK":{"ag":["e","@"],"Y":["e","@"],"ag.K":"e","ag.V":"@"},"mL":{"a0":["e"],"V":["e"],"r":["e"],"r.E":"e","a0.E":"e"},"kg":{"eo":["e","J<k>"]},"ko":{"eo":["J<k>","e"]},"kL":{"eo":["e","J<k>"]},"iy":{"at":[]},"lf":{"at":[]},"le":{"eo":["L?","e"]},"ma":{"eo":["e","J<k>"]},"f3":{"bp":["f3"]},"z":{"by":[],"bp":["by"]},"dy":{"bp":["dy"]},"k":{"by":[],"bp":["by"]},"J":{"V":["1"],"r":["1"]},"by":{"bp":["by"]},"iU":{"hj":[]},"dR":{"V":["1"],"r":["1"]},"e":{"bp":["e"],"rE":[]},"mD":{"D":[]},"ki":{"at":[]},"dU":{"at":[]},"cF":{"at":[]},"hp":{"at":[]},"l5":{"at":[]},"j9":{"at":[]},"m5":{"at":[]},"hw":{"at":[]},"kw":{"at":[]},"lw":{"at":[]},"j4":{"at":[]},"n5":{"di":[]},"bE":{"Gl":[]},"jJ":{"m8":[]},"n_":{"m8":[]},"mz":{"m8":[]},"mJ":{"zi":[]},"eL":{"zi":[]},"kG":{"D":[]},"fi":{"D":[]},"h3":{"D":[]},"fZ":{"D":[]},"bL":{"dP":[]},"bt":{"dP":[]},"c6":{"dP":[]},"cJ":{"dP":[]},"lx":{"dP":[]},"f8":{"D":[]},"fS":{"D":[]},"iC":{"D":[]},"cT":{"D":[]},"kC":{"G7":[]},"hs":{"D":[]},"h5":{"D":[]},"kq":{"D":[]},"ib":{"D":[]},"h4":{"D":[]},"fl":{"D":[]},"fd":{"D":[]},"cR":{"D":[]},"dT":{"D":[]},"bi":{"D":[]},"f5":{"D":[]},"kV":{"G0":[]},"co":{"D":[]},"iZ":{"D":[]},"d5":{"D":[]},"hr":{"D":[]},"iW":{"G3":[]},"mI":{"ca":[]},"lO":{"G5":[]},"n6":{"ca":[]},"mT":{"G2":[]},"mF":{"F7":[]},"j3":{"D":[]},"bX":{"bp":["bX"]},"bT":{"bp":["bT"]},"h8":{"D":[]},"kk":{"D":[]},"jh":{"D":[]},"i7":{"ap":[]},"mw":{"ad":[]},"kr":{"ap":[]},"mx":{"ad":[]},"kE":{"ap":[]},"mA":{"ad":[]},"jj":{"D":[]},"ig":{"ap":[]},"mB":{"ad":[]},"kJ":{"ap":[]},"mC":{"ad":[]},"l1":{"ap":[]},"mH":{"ad":[]},"iD":{"ap":[]},"mO":{"ad":[]},"ks":{"G1":[]},"iN":{"ap":[]},"mU":{"ad":[]},"lI":{"ap":[]},"mV":{"ad":[]},"lX":{"ap":[]},"mY":{"ad":[]},"lY":{"ap":[]},"mZ":{"ad":[]},"m_":{"ap":[]},"n1":{"ad":[]},"lZ":{"ap":[]},"n0":{"ad":[]},"mc":{"ap":[]},"n9":{"ad":[]},"ml":{"ap":[]},"nb":{"ad":[]},"na":{"ad":[]},"mp":{"ap":[]},"ne":{"ad":[]},"l_":{"D":[]},"im":{"D":[]},"iq":{"D":[]},"ir":{"D":[]},"f7":{"D":[]},"io":{"D":[]},"fp":{"D":[]},"dj":{"D":[]},"fY":{"D":[]},"kF":{"ES":[]},"hb":{"D":[]},"hH":{"D":[]},"bs":{"D":[]},"kp":{"D":[]},"f1":{"D":[]},"kA":{"D":[]},"kD":{"D":[]},"e2":{"cH":[]},"mn":{"Fe":[]},"km":{"D":[]},"cm":{"D":[]},"dB":{"D":[]},"jq":{"dm":[]},"f4":{"D":[]},"dA":{"D":[]},"eq":{"D":[]},"ep":{"D":[]},"es":{"D":[]},"ly":{"D":[]},"lM":{"D":[]},"hq":{"D":[]},"bZ":{"D":[]},"dh":{"D":[]},"j2":{"D":[]},"c_":{"D":[]},"bD":{"D":[]},"l7":{"D":[]},"fz":{"D":[]},"cr":{"D":[]},"ez":{"D":[]},"eH":{"D":[]},"f_":{"D":[]},"d_":{"D":[]},"cG":{"D":[]},"d0":{"D":[]},"dv":{"D":[]},"du":{"D":[]},"ek":{"D":[]},"el":{"D":[]},"f0":{"D":[]},"ej":{"D":[]},"dE":{"D":[]},"d2":{"D":[]},"d3":{"D":[]},"dF":{"D":[]},"dD":{"D":[]},"dG":{"D":[]},"cn":{"D":[]},"dC":{"D":[]},"cI":{"D":[]},"ke":{"D":[]},"bB":{"D":[]},"cq":{"D":[]},"ey":{"D":[]},"cQ":{"D":[]},"bY":{"D":[]},"bN":{"D":[]},"j0":{"D":[]},"bU":{"D":[]},"cc":{"D":[]},"cd":{"D":[]},"eD":{"D":[]},"dk":{"D":[]},"mS":{"Bv":[]},"Fn":{"J":["k"],"V":["k"],"r":["k"]},"c1":{"J":["k"],"V":["k"],"r":["k"]},"Go":{"J":["k"],"V":["k"],"r":["k"]},"Fl":{"J":["k"],"V":["k"],"r":["k"]},"uL":{"J":["k"],"V":["k"],"r":["k"]},"Fm":{"J":["k"],"V":["k"],"r":["k"]},"uM":{"J":["k"],"V":["k"],"r":["k"]},"pr":{"J":["z"],"V":["z"],"r":["z"]},"ps":{"J":["z"],"V":["z"],"r":["z"]}}'))
A.Hf(v.typeUniverse,JSON.parse('{"hA":1,"jP":2,"bq":1,"jB":1,"jI":1,"kz":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",t:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nuniform vec3 uClearColor;\nuniform vec3 uSkyHorizon;\nuniform vec3 uSkyZenith;\nuniform vec3 uSkyGround;\nuniform float uSkyEnabled;\nuniform float uSkyHorizonGlow;\nuniform float uSkyStarDensity;\nuniform sampler2D uSkyTexture;\nuniform float uSkyTextureEnabled;\nuniform float uSkyRotation;\nuniform float uSkyExposure;\nuniform float uSkyTextureSrgb;\nuniform mat4 uInverseProjection;\nuniform mat4 uInverseView;\nuniform vec3 uCameraPosition;\nuniform float uCloudCoverage;\nuniform float uCloudDensity;\nuniform float uCloudBaseHeight;\nuniform float uCloudThickness;\nuniform float uCloudScale;\nuniform vec2 uCloudWind;\nuniform float uCloudPhase;\nuniform float uCloudDetail;\nuniform float uCloudSilverLining;\nuniform float uCloudSampleCount;\nuniform vec3 uCloudLightDirection;\nuniform vec3 uCloudLightColor;\nuniform float uCloudLightIntensity;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvec3 skyBackground(vec2 uv){\n  // A deliberately cheap, high-quality fallback sky: three atmospheric bands\n  // provide depth at every camera angle, while the tiny deterministic star\n  // field and horizon glow keep the clear background from reading as a flat\n  // color. It is an environment layer, not a game/weather simulation.\n  float lower=smoothstep(0.0,0.48,uv.y);\n  float upper=smoothstep(0.42,1.0,uv.y);\n  vec3 color=mix(uSkyGround,uSkyHorizon,lower);\n  color=mix(color,uSkyZenith,upper);\n  float horizonGlow=exp(-pow((uv.y-0.48)*7.0,2.0));\n  color+=uSkyHorizon*horizonGlow*clamp(uSkyHorizonGlow,0.,1.);\n  float starMask=smoothstep(0.62,0.92,uv.y);\n  float stars=step(1.0-clamp(uSkyStarDensity,0.,.1),hash(floor(uv*vec2(180.0,100.0))))*starMask;\n  color+=vec3(0.16,0.19,0.24)*stars;\n  return max(color,vec3(0.0));\n}\n\nfloat hash3(vec3 p){\n  return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);\n}\n\nfloat valueNoise(vec3 p){\n  vec3 i=floor(p);\n  vec3 f=fract(p);\n  f=f*f*(3.0-2.0*f);\n  float n000=hash3(i+vec3(0,0,0));\n  float n100=hash3(i+vec3(1,0,0));\n  float n010=hash3(i+vec3(0,1,0));\n  float n110=hash3(i+vec3(1,1,0));\n  float n001=hash3(i+vec3(0,0,1));\n  float n101=hash3(i+vec3(1,0,1));\n  float n011=hash3(i+vec3(0,1,1));\n  float n111=hash3(i+vec3(1,1,1));\n  float x00=mix(n000,n100,f.x);\n  float x10=mix(n010,n110,f.x);\n  float x01=mix(n001,n101,f.x);\n  float x11=mix(n011,n111,f.x);\n  return mix(mix(x00,x10,f.y),mix(x01,x11,f.y),f.z);\n}\n\nfloat cloudNoise(vec3 p){\n  float value=0.0;\n  float amplitude=0.5;\n  for(int octave=0;octave<4;octave++){\n    value+=valueNoise(p)*amplitude;\n    p=p*2.03+vec3(17.3,11.7,7.1);\n    amplitude*=0.5;\n  }\n  return value;\n}\n\nfloat cloudDensityAt(vec3 position){\n  float height01=clamp(\n    (position.y-uCloudBaseHeight)/max(uCloudThickness,0.001),\n    0.0,1.0\n  );\n  float vertical=smoothstep(0.0,0.12,height01)*\n    (1.0-smoothstep(0.72,1.0,height01));\n  vec3 q=position*max(uCloudScale,0.00001)+\n    vec3(uCloudWind.x*uCloudPhase,0.0,uCloudWind.y*uCloudPhase);\n  float macro=cloudNoise(q*0.82);\n  float detail=cloudNoise(q*2.7+vec3(23.0,5.0,41.0));\n  float shape=mix(macro,macro*0.68+detail*0.32,clamp(uCloudDetail,0.,1.));\n  float threshold=1.0-clamp(uCloudCoverage,0.,1.);\n  float body=smoothstep(threshold,threshold+0.26,shape);\n  return body*vertical*clamp(uCloudDensity,0.,1.);\n}\n\nvec4 volumetricClouds(vec3 worldDirection){\n  if(uCloudCoverage<=0.0001 || uCloudDensity<=0.0001 || worldDirection.y<=0.001){\n    return vec4(0.0);\n  }\n  float directionY=max(worldDirection.y,0.001);\n  float startT=(uCloudBaseHeight-uCameraPosition.y)/directionY;\n  float endT=(uCloudBaseHeight+uCloudThickness-uCameraPosition.y)/directionY;\n  startT=max(startT,0.0);\n  endT=max(endT,0.0);\n  if(endT<=startT) return vec4(0.0);\n  int sampleCount=int(clamp(uCloudSampleCount,4.,24.));\n  float stepLength=(endT-startT)/float(sampleCount);\n  float jitter=(hash(gl_FragCoord.xy+vec2(uCloudPhase*0.013))-0.5)*stepLength;\n  vec3 sunDirection=normalize(-uCloudLightDirection);\n  float transmittance=1.0;\n  vec3 inScatter=vec3(0.0);\n  for(int i=0;i<24;i++){\n    if(i>=sampleCount) break;\n    float t=startT+(float(i)+0.5)*stepLength+jitter;\n    vec3 position=uCameraPosition+worldDirection*t;\n    float density=cloudDensityAt(position);\n    float opticalDepth=density*stepLength*0.0035;\n    float segmentAlpha=1.0-exp(-opticalDepth);\n    float towardLight=cloudDensityAt(position+sunDirection*90.0);\n    float lightTransmittance=exp(-towardLight*0.025);\n    float phase=0.72+0.28*pow(max(dot(-worldDirection,sunDirection),0.0),2.0);\n    vec3 ambient=uSkyHorizon*0.32;\n    vec3 direct=uCloudLightColor*\n      (0.14+0.86*clamp(uCloudLightIntensity,0.,1.5))*phase;\n    float edge=pow(1.0-clamp(density,0.,1.),3.0)*uCloudSilverLining*0.22;\n    vec3 sampleLight=(ambient+direct)*lightTransmittance+vec3(edge);\n    inScatter+=transmittance*segmentAlpha*sampleLight;\n    transmittance*=1.0-segmentAlpha;\n    if(transmittance<0.01) break;\n  }\n  return vec4(inScatter,1.0-transmittance);\n}\n\nvec3 srgbToLinear(vec3 color){\n  vec3 low=color/12.92;\n  vec3 high=pow((color+0.055)/1.055,vec3(2.4));\n  return mix(low,high,step(vec3(0.04045),color));\n}\n\nvec3 worldDirectionForUv(vec2 uv){\n  vec2 ndc=uv*2.0-1.0;\n  vec4 viewPoint=uInverseProjection*vec4(ndc,1.0,1.0);\n  return normalize(viewPoint.xyz/viewPoint.w);\n}\n\nvec3 equirectangularSky(vec2 uv){\n  vec3 worldDirection=normalize((uInverseView*vec4(worldDirectionForUv(uv),0.0)).xyz);\n  float longitude=atan(worldDirection.z,worldDirection.x)+uSkyRotation;\n  float latitude=asin(clamp(worldDirection.y,-1.0,1.0));\n  vec2 sampleUv=vec2(\n    fract(longitude/(2.0*3.14159265359)+0.5),\n    0.5-latitude/3.14159265359\n  );\n  vec3 encoded=max(texture(uSkyTexture,sampleUv).rgb,vec3(0.0));\n  vec3 linear=mix(encoded,srgbToLinear(encoded),clamp(uSkyTextureSrgb,0.,1.));\n  return linear*max(uSkyExposure,0.0);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // The world pass clears untouched pixels to uClearColor. Replace only that\n  // exact background, so the sky is always active without covering geometry.\n  if(uSkyEnabled>0.5 && distance(source.rgb,uClearColor)<0.004){\n    vec3 viewDirection=worldDirectionForUv(vUv);\n    vec3 worldDirection=normalize((uInverseView*vec4(viewDirection,0.0)).xyz);\n    source.rgb=uSkyTextureEnabled>0.5\n      ? equirectangularSky(vUv)\n      : skyBackground(vUv);\n    vec4 clouds=volumetricClouds(worldDirection);\n    source.rgb=source.rgb* (1.0-clouds.a)+clouds.rgb;\n  }\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a2
return{mq:s("d_"),dx:s("i5"),bC:s("cE"),zU:s("ec"),v:s("bn"),iF:s("kl"),ul:s("du"),EL:s("d0"),xs:s("cG"),gc:s("dv"),t3:s("kn"),mD:s("ee"),lT:s("ef"),bJ:s("eg"),gI:s("eh"),ya:s("ei"),z3:s("bT"),Bu:s("fV"),ml:s("i8"),je:s("b8"),rO:s("fX"),sU:s("dx"),hO:s("bp<@>"),CH:s("ic"),w:s("a4<e,e>"),I:s("a4<e,k>"),M:s("aX<e>"),f7:s("f3"),fP:s("bU"),yb:s("dy"),he:s("V<@>"),yW:s("cm"),g:s("c4"),Ct:s("D"),yt:s("at"),hl:s("a8"),B:s("pr"),cE:s("ps"),pH:s("aY"),Fr:s("d1"),BO:s("f6"),ls:s("aS<az>"),xJ:s("aS<e>(e)"),zL:s("aS<c1>(e)"),tX:s("aS<c1>(e,e)"),vS:s("dC"),aJ:s("dD"),x:s("cn"),bK:s("dE"),gm:s("dF"),dn:s("d2"),mx:s("dG"),j_:s("d3"),EJ:s("d4<bY,e>"),_:s("cH"),Eb:s("cI"),qX:s("es"),mF:s("d7"),iO:s("cJ"),oW:s("d8"),fl:s("cK"),FA:s("r<ic>"),CB:s("r<db>"),xw:s("r<dd>"),Eh:s("r<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),yT:s("r<e>"),x6:s("r<c0>"),A1:s("r<eG>"),oJ:s("r<z>"),tY:s("r<@>"),iC:s("r<k>"),Fg:s("x<cE>"),t9:s("x<ec>"),AO:s("x<i8>"),jC:s("x<b8>"),km:s("x<fX>"),sa:s("x<ck>"),ns:s("x<kK>"),U:s("x<c4>"),uH:s("x<kO>"),Dl:s("x<a8>"),A5:s("x<kS>"),iJ:s("x<aS<~>>"),pC:s("x<kX>"),C1:s("x<cH>"),ka:s("x<bz>"),Fm:s("x<f9>"),op:s("x<d6>"),hr:s("x<dI>"),s3:s("x<cJ>"),W:s("x<aj>"),Bv:s("x<lg>"),yH:s("x<lh>"),Bq:s("x<P<e,e>>"),rq:s("x<Y<e,L>>"),A7:s("x<Y<e,e>>"),cs:s("x<Y<e,@>>"),bk:s("x<Y<e,L?>>"),a6:s("x<db>"),p0:s("x<c7>"),d:s("x<bL>"),w4:s("x<fe>"),pq:s("x<aw>"),bA:s("x<dK>"),xz:s("x<bC>"),s0:s("x<fg>"),hc:s("x<dc>"),ea:s("x<dL>"),Fk:s("x<lB>"),qP:s("x<c9>"),d8:s("x<iO>"),Fa:s("x<iP>"),fH:s("x<iS>"),F7:s("x<dd>"),vN:s("x<iT>"),kv:s("x<fk>"),nR:s("x<+(e,J<c9>)>"),kd:s("x<+(e,e)>"),c2:s("x<+(e,C)>"),rh:s("x<+influence,light(z,bO)>"),z4:s("x<+influence,source(z,cu)>"),wt:s("x<+(k,e)>"),ff:s("x<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),e_:s("x<ap>"),u:s("x<ad>"),Ft:s("x<iW>"),C:s("x<Q>"),h1:s("x<bb>"),s2:s("x<ca>"),eY:s("x<fm>"),xB:s("x<df>"),rn:s("x<lR>"),gg:s("x<lS>"),D:s("x<dQ>"),yv:s("x<lT>"),wM:s("x<lU>"),hT:s("x<cs>"),El:s("x<hv>"),AM:s("x<b3<bT>>"),fs:s("x<b3<bX>>"),cv:s("x<bO>"),DZ:s("x<fr>"),s:s("x<e>"),r8:s("x<c0>"),fa:s("x<cb>"),E7:s("x<hz>"),k:s("x<C>"),fi:s("x<j>"),v5:s("x<bc>"),ld:s("x<jd>"),Dc:s("x<dX>"),Fi:s("x<ce>"),jV:s("x<dl>"),xL:s("x<cu>"),su:s("x<eE>"),wb:s("x<eF>"),eQ:s("x<cv>"),uI:s("x<eG>"),yo:s("x<fv>"),nm:s("x<fx>"),uk:s("x<bH>"),wf:s("x<jq>"),il:s("x<eK>"),l5:s("x<eJ>"),ow:s("x<mQ>"),j5:s("x<mR>"),pv:s("x<hG>"),Fy:s("x<eM<cO>>"),EM:s("x<eM<bW>>"),w_:s("x<eM<bb>>"),f2:s("x<eM<dn>>"),n:s("x<z>"),zz:s("x<@>"),t:s("x<k>"),Cf:s("x<L?>"),AN:s("x<by>"),E:s("iv"),m:s("aj"),ud:s("dJ"),yO:s("c5<@>"),AQ:s("J<b8>"),hk:s("J<c4>"),b:s("J<bz>"),xp:s("J<cJ>"),nx:s("J<aj>"),rW:s("J<Y<e,e>>"),qr:s("J<bL>"),R:s("J<aw>"),fG:s("J<dc>"),Es:s("J<c9>"),DX:s("J<+(e,e)>"),pL:s("J<+(k,e)>"),bE:s("J<bb>"),fx:s("J<df>"),r6:s("J<dQ>"),yu:s("J<cs>"),a:s("J<e>"),uh:s("J<jd>"),D0:s("J<dX>"),cf:s("J<ce>"),p7:s("J<dl>"),dd:s("J<z>"),j:s("J<@>"),L:s("J<k>"),ik:s("J<aj?>"),vX:s("J<L?>"),m2:s("iA"),h6:s("P<e,aY>"),gJ:s("P<e,d1>"),q:s("P<e,e>"),no:s("P<e,bt>"),AC:s("P<@,@>"),ou:s("P<k,e>"),pr:s("P<k,@>"),yx:s("P<e,J<e>>"),mf:s("Y<e,cH>"),vD:s("Y<e,c6>"),of:s("Y<e,L>"),ap:s("Y<e,aw>"),G:s("Y<e,e>"),qH:s("Y<e,dT>"),m0:s("Y<e,l>"),gG:s("Y<e,z>"),P:s("Y<e,@>"),f:s("Y<@,@>"),eU:s("Y<k,e>"),pG:s("Y<k,ft>"),tQ:s("Y<k,fu>"),Bx:s("Y<e,J<e>>"),oZ:s("Y<e,L?>"),q1:s("Y<cd,J<ce>>"),ee:s("Y<k,Y<e,e>>"),dH:s("H<k,e>"),jT:s("H<e,e?>"),w1:s("cO"),pw:s("c6"),jt:s("db"),wl:s("c7"),kc:s("bL"),aw:s("fe"),mL:s("hk"),rV:s("hl"),mV:s("ff"),c:s("az"),K:s("L"),Cx:s("L(hn)"),BB:s("bX"),A:s("aw"),oP:s("dK"),wJ:s("bB"),E4:s("bC"),A_:s("dL"),e:s("c9"),DL:s("iM"),AB:s("lD"),yi:s("hm"),rx:s("iO"),c_:s("iP"),zC:s("lF"),xK:s("dO"),cw:s("iS"),z0:s("dd"),Dp:s("iT"),Y:s("fk"),iM:s("KI"),ep:s("+()"),k0:s("+(bL,bW)"),ut:s("+(bt,dn)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bO)"),bG:s("+influence,source(z,cu)"),tK:s("+effectiveScore,light,score(z,b8,z)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)"),ez:s("iU"),wZ:s("ad"),lg:s("iX"),tc:s("de<cJ,bb>"),ja:s("de<c6,cO>"),wm:s("de<bL,bW>"),qq:s("de<bt,dn>"),j2:s("Q"),m3:s("bb"),yz:s("ca"),z_:s("fm"),F3:s("df"),Dm:s("dQ"),Q:s("dR<e>"),oG:s("dR<k>"),en:s("bN"),gl:s("bh"),gn:s("bZ"),r:s("cs"),u5:s("bD"),is:s("c_"),ho:s("hv"),EH:s("b3<bT>"),E0:s("b3<bX>"),l:s("di"),w8:s("fr"),qL:s("bs"),N:s("e"),dc:s("e(k)"),Aj:s("bt"),jP:s("c0"),h:s("cb"),bp:s("dT"),sg:s("an"),bs:s("dU"),ys:s("uL"),Dd:s("uM"),uo:s("c1"),qF:s("eA"),hL:s("eC<e,e>"),qt:s("m7"),eP:s("m8"),zo:s("mb"),cV:s("C"),a7:s("j"),qY:s("bc"),T:s("c2"),gM:s("cc"),hF:s("cd"),vw:s("ft"),BX:s("fu"),aA:s("dX"),AP:s("ce"),sy:s("mk"),bB:s("bv"),aS:s("dl"),cZ:s("eE"),EI:s("eF"),uz:s("cv"),qR:s("eG"),fu:s("fv"),xe:s("hD"),fw:s("I<bU>"),vL:s("I<cm>"),vK:s("I<cn>"),Fj:s("I<bD>"),rZ:s("I<c_>"),vY:s("I<e>"),g2:s("I<cc>"),ni:s("I<cd>"),rt:s("U<bN>"),xG:s("U<bh>"),o:s("fx"),hR:s("as<@>"),BT:s("jn<L?,L?>"),Ez:s("dm"),rL:s("hE"),xT:s("eK"),wU:s("eJ"),la:s("mP"),qS:s("jv"),jS:s("hI"),EF:s("bI<+(e,bt)>"),Br:s("bI<ca>"),oe:s("bI<dQ>"),a_:s("jL"),V:s("jM"),p:s("jN"),y:s("l"),Bs:s("l()"),C3:s("l(fT)"),kr:s("l(bU)"),e2:s("l(cm)"),rg:s("l(cn)"),bl:s("l(L)"),pz:s("l(bN)"),aV:s("l(bh)"),y2:s("l(bD)"),ty:s("l(c_)"),Ag:s("l(e)"),da:s("l(cc)"),u_:s("l(cd)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,di)"),S:s("k"),eZ:s("aS<az>?"),r9:s("x<L?>?"),gt:s("aj?"),rK:s("J<@>?"),yq:s("Y<@,@>?"),jd:s("Y<e,J<e>>?"),X:s("L?"),dM:s("Bv?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("c1?"),F:s("dZ<@,@>?"),Af:s("mM?"),k7:s("l?"),wK:s("l(ht)?"),u6:s("z?"),lo:s("k?"),s7:s("by?"),Z:s("~()?"),Cv:s("~(eb)?"),kC:s("~(ed)?"),pf:s("~(h1)?"),hq:s("~(h9)?"),CA:s("~(dH)?"),hQ:s("~(bY)?"),Ci:s("~(bN)?"),nf:s("~(c_,bD)?"),DI:s("~(e,z)?"),xl:s("~(l)?"),vR:s("~(k)?"),dt:s("~(k,e)?"),J:s("by"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.jJ=J.l8.prototype
B.a=J.x.prototype
B.d=J.iu.prototype
B.b=J.fa.prototype
B.c=J.eu.prototype
B.jL=J.dJ.prototype
B.jM=J.ix.prototype
B.t=A.iE.prototype
B.a3=A.iI.prototype
B.dP=J.lz.prototype
B.c6=J.eA.prototype
B.ak=new A.d_(1,"standard")
B.S=new A.kd(B.ak)
B.cf=new A.d_(0,"concise")
B.cg=new A.d_(2,"verbose")
B.aE=new A.eb(null,null,null,null,null)
B.pK=new A.ke(0,"none")
B.al=new A.fS(0,"opaque")
B.b0=new A.fS(1,"masked")
B.aF=new A.fS(2,"blended")
B.ey=new A.kh(!1,127)
B.ez=new A.kh(!0,127)
B.eA=new A.kk(1,"camera")
B.eB=new A.km(4,"ambience")
B.ck=new A.cG(3,"mono")
B.b1=new A.dv(0,"full")
B.cj=new A.cG(0,"auto")
B.ci=new A.d0(1,"standard")
B.ch=new A.du(0,"defaultMix")
B.b2=new A.ed(B.cj,B.ci,B.b1,B.ch)
B.eI=new A.f_(0,"broadcast")
B.eJ=new A.f_(1,"visitor")
B.eK=new A.f_(2,"aftermath")
B.eL=new A.f_(3,"ending")
B.aT=new A.lM(0,"pixeldart")
B.eM=new A.i6(B.aT,!0,!1,null,!1,null)
B.eN=new A.i6(B.aT,!1,!1,null,!1,null)
B.cm=new A.ej(1,"capturing")
B.eO=new A.dw(B.cm,null)
B.cn=new A.ej(3,"rejected")
B.b3=new A.dw(B.cn,null)
B.co=new A.ej(4,"applied")
B.cl=new A.dw(B.co,null)
B.cp=new A.ej(5,"cancelled")
B.eP=new A.dw(B.cp,null)
B.b4=new A.ej(2,"conflict")
B.aG=new A.kp(0,"add")
B.eT=new A.f1(0,"zero")
B.am=new A.f1(1,"one")
B.K=new A.kq(0,"alpha")
B.L=new A.ek(1,"button")
B.p=new A.el(0,"normal")
B.eW=new A.bo("settings.back",B.L,"back","back to pause menu",B.p)
B.aH=new A.ek(0,"heading")
B.eX=new A.bo("settings.heading",B.aH,"Settings",null,B.p)
B.eY=new A.bo("settings.controls.heading",B.aH,"Controls",null,B.p)
B.eZ=new A.bo("settings.controls.back",B.L,"back","back to settings categories",B.p)
B.f_=new A.bo("pause.heading",B.aH,"Paused",null,B.p)
B.f0=new A.ek(3,"slider")
B.f1=new A.ek(4,"toggle")
B.cq=new A.ek(5,"keybind")
B.aI=new A.el(5,"disabled")
B.f2=new A.el(6,"error")
B.f3=new A.el(7,"destructive")
B.cr=new A.el(8,"remapping")
B.cs=new A.i5()
B.f4=new A.kg()
B.pL=new A.oB()
B.f5=new A.ko()
B.ct=new A.oN()
B.f6=new A.ii(A.a2("ii<0&>"))
B.cu=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f7=function() {
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
B.fc=function(getTagFallback) {
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
B.f8=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.fb=function(hooks) {
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
B.fa=function(hooks) {
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
B.f9=function(hooks) {
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
B.cv=function(hooks) { return hooks; }

B.f=new A.le()
B.fd=new A.rh()
B.fe=new A.lw()
B.pN=new A.rO()
B.ff=new A.rP()
B.cw=new A.rR()
B.fg=new A.rV()
B.fh=new A.rZ()
B.fi=new A.df()
B.aU=new A.cr(1,"gradeLUT")
B.fj=new A.df()
B.fk=new A.to()
B.fl=new A.tq()
B.h=new A.tx()
B.cx=new A.ma()
B.cy=new A.uR()
B.pM=new A.kC()
B.fm=new A.vn()
B.b5=new A.mJ()
B.C=new A.mW()
B.aJ=new A.n5()
B.fn=new A.fW(1.3089969389957472,0.1,60)
B.fo=new A.fW(1.0471975511965976,0.1,60)
B.fp=new A.fW(0.8726646259971648,0.08,45)
B.T=new A.fY(0,"colorOnly")
B.cz=new A.fY(1,"colorAndDepth")
B.b6=new A.fY(2,"depthOnly")
B.fq=new A.ib(0,"linear")
B.b7=new A.ib(1,"srgb")
B.cA=new A.fZ(0,"open")
B.fr=new A.fZ(1,"committed")
B.fs=new A.fZ(2,"aborted")
B.b8=new A.h3(0,"open")
B.fz=new A.h3(1,"committed")
B.fA=new A.h3(2,"rolledBack")
B.aK=new A.kA(1,"back")
B.aL=new A.kD(0,"less")
B.fB=new A.h4(0,"off")
B.cB=new A.h4(1,"errorsOnly")
B.fC=new A.h4(2,"full")
B.cC=new A.kG(2,"error")
B.aM=new A.bU(0,"open")
B.cD=new A.bU(1,"chain")
B.cE=new A.bU(2,"throughDoor")
B.cF=new A.bU(3,"letterbox")
B.an=new A.bU(4,"ignore")
B.U=new A.h5(0,"opaque")
B.fD=new A.h5(1,"masked")
B.ao=new A.h5(2,"blended")
B.cG=new A.h6(!1,B.aL,!1,!0,B.am,B.am,B.aG,!1,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.fE=new A.h6(!0,B.aL,!1,!0,B.am,B.am,B.aG,!0,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.eU=new A.f1(2,"srcAlpha")
B.eV=new A.f1(3,"oneMinusSrcAlpha")
B.fF=new A.h6(!0,B.aL,!1,!0,B.eU,B.eV,B.aG,!0,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.fG=new A.dy(0)
B.fH=new A.dy(22e4)
B.fI=new A.dy(24e5)
B.cH=new A.cm(0,"compliance")
B.fJ=new A.h7(B.cH)
B.cI=new A.cm(1,"rupture")
B.fK=new A.h7(B.cI)
B.cJ=new A.cm(2,"synchronisation")
B.fL=new A.h7(B.cJ)
B.cK=new A.f4(0,"front")
B.fM=new A.f4(1,"rearService")
B.fN=new A.f4(2,"sideBoundary")
B.fO=new A.f4(3,"roofline")
B.A=new A.ep(0,"north")
B.ap=new A.ep(1,"east")
B.r=new A.ep(2,"south")
B.aq=new A.ep(3,"west")
B.fP=new A.eq(0,"ground")
B.fQ=new A.eq(1,"first")
B.fR=new A.eq(2,"hidden")
B.fS=new A.dA(0,"mantle")
B.fT=new A.dA(1,"portal")
B.fV=new A.dA(3,"inventory")
B.cL=new A.dA(4,"aftermath")
B.fU=new A.dA(2,"window")
B.fX=new A.er(B.fU,"shutter","the shutter")
B.fW=new A.dA(5,"none")
B.fY=new A.er(B.fW,null,null)
B.fZ=new A.A("saved mantle history is malformed",null,null)
B.h_=new A.A("rupture elapsed time is malformed",null,null)
B.h0=new A.A("presentation keys must be strings",null,null)
B.h1=new A.A("model package payload hash mismatch",null,null)
B.h2=new A.A("unsupported accessibility profile",null,null)
B.h3=new A.A("unsupported promoted model index schema",null,null)
B.h4=new A.A("materialSlot is required",null,null)
B.h5=new A.A("weather audio input is not finite",null,null)
B.h6=new A.A("inventory inspections must be an object",null,null)
B.h7=new A.A("screenplay event random range is invalid",null,null)
B.cM=new A.A("saved mantle state is malformed",null,null)
B.h8=new A.A("inactive rupture has elapsed time",null,null)
B.h9=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.ha=new A.A("invalid action bindings",null,null)
B.hb=new A.A("Shader Lab document controls are incomplete",null,null)
B.hc=new A.A("weather audio input is out of bounds",null,null)
B.hd=new A.A("listener room is empty",null,null)
B.he=new A.A("control bindings conflict",null,null)
B.hf=new A.A("saved difficulty state is malformed",null,null)
B.hg=new A.A("weatherSurfaces save data must be an object",null,null)
B.hh=new A.A("residence.restAnchor cannot be empty",null,null)
B.hi=new A.A("saved house drift state is malformed",null,null)
B.hj=new A.A("saved sleep record is malformed",null,null)
B.hk=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.hl=new A.A("manifest string array is malformed",null,null)
B.hm=new A.A("weather audio event is invalid",null,null)
B.hn=new A.A("unsupported settings store",null,null)
B.ho=new A.A("screenplay scene must be an object",null,null)
B.hp=new A.A("settings values must be an object",null,null)
B.hq=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.hr=new A.A("invalid anisotropy limit",null,null)
B.hs=new A.A("weather audio frame is invalid",null,null)
B.ht=new A.A("requested debug mode is not available",null,null)
B.hu=new A.A("audio event position is not finite",null,null)
B.hv=new A.A("event sequence must be non-negative",null,null)
B.hw=new A.A("screenplay branch is invalid",null,null)
B.hx=new A.A("inventory inspection counts are invalid",null,null)
B.hy=new A.A("only keybinds can be remapping",null,null)
B.hz=new A.A("modelScale must be positive and finite",null,null)
B.hA=new A.A("weather audio layer is not finite",null,null)
B.hB=new A.A("Invalid database dialogue package",null,null)
B.hC=new A.A("listener position is not finite",null,null)
B.hD=new A.A("screenplay event has invalid core fields",null,null)
B.hE=new A.A("invalid action ID",null,null)
B.hF=new A.A("invalid Shader Lab debug mode",null,null)
B.hG=new A.A("saved window state is malformed",null,null)
B.hH=new A.A("manifest socket map is malformed",null,null)
B.hI=new A.A("unsupported graphics preset",null,null)
B.hJ=new A.A("save run and meta must be objects",null,null)
B.hK=new A.A("saved house state is malformed",null,null)
B.hL=new A.A("saved sleep record must be an object",null,null)
B.hM=new A.A("model package parts must be non-empty",null,null)
B.hN=new A.A("sound cue must be a non-empty string",null,null)
B.hO=new A.A("saved session run is malformed",null,null)
B.hP=new A.A("save map keys must be strings",null,null)
B.hQ=new A.A("unsupported graphics profile",null,null)
B.hR=new A.A("model package exceeds payload count limit",null,null)
B.hS=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.hT=new A.A("unsupported audio options",null,null)
B.hU=new A.A("transform.scale must be positive",null,null)
B.hV=new A.A("Escape is reserved for pause navigation",null,null)
B.hW=new A.A("saved day-loop state is malformed",null,null)
B.hX=new A.A("rupture extinguished mantle is unknown",null,null)
B.hY=new A.A("model package exceeds part limit",null,null)
B.cN=new A.A("unsupported controls profile",null,null)
B.hZ=new A.A("promoted model index entry is malformed",null,null)
B.cO=new A.A("saved portal state is malformed",null,null)
B.i_=new A.A("acoustic portal profile is not finite",null,null)
B.i0=new A.A("model package exceeds total byte limit",null,null)
B.i1=new A.A("unsupported model package schema",null,null)
B.i2=new A.A("manifest socket names are malformed",null,null)
B.i3=new A.A("saved house state does not match this house",null,null)
B.i4=new A.A("presentation snapshot contains a non-finite number",null,null)
B.i5=new A.A("screenplay array contains invalid text",null,null)
B.i6=new A.A("weather audio layer identity is empty",null,null)
B.i7=new A.A("screenplay event day/hour is out of range",null,null)
B.i8=new A.A("unsupported gameplay settings profile",null,null)
B.i9=new A.A("save contains a non-finite number",null,null)
B.ia=new A.A("unsupported graphics store",null,null)
B.ib=new A.A("screenplay option is invalid",null,null)
B.id=new A.A("duplicate weather audio event",null,null)
B.ic=new A.A("duplicate weather audio layer",null,null)
B.ie=new A.A("screenplay needs sources and scenes arrays",null,null)
B.ig=new A.A("brush component needs an id and label",null,null)
B.ih=new A.A("text.json root must be an object",null,null)
B.ii=new A.A("screenplay root must be an object",null,null)
B.ij=new A.A("event kind is empty",null,null)
B.ik=new A.A("unsupported Shader Lab document schema",null,null)
B.il=new A.A("screenplay event effects are invalid",null,null)
B.im=new A.A("promoted model index entries are required",null,null)
B.io=new A.A("weather surface state must be an object",null,null)
B.ip=new A.A("invalid control binding token",null,null)
B.iq=new A.A("audio transmission muffle is invalid",null,null)
B.ir=new A.A("acoustic portal muffle order is invalid",null,null)
B.is=new A.A("unsupported settings profile",null,null)
B.it=new A.A("saved session clock is malformed",null,null)
B.iu=new A.A("weather surface room ID must be a string",null,null)
B.iv=new A.A("rupture mantle IDs are malformed",null,null)
B.iw=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.ix=new A.A("invalid screen-reader verbosity",null,null)
B.iy=new A.A("saved sleep record has an unknown enum",null,null)
B.iz=new A.A("weather audio layer is out of bounds",null,null)
B.iA=new A.A("malformed Shader Lab control",null,null)
B.iB=new A.A("audio cue variants are empty",null,null)
B.iC=new A.A("manifest numeric array is malformed",null,null)
B.iD=new A.A("screenplay beat has invalid kind or text",null,null)
B.iE=new A.A("save root must be an object",null,null)
B.iF=new A.A("Shader Lab document must be an object",null,null)
B.iG=new A.A("audio event identity is empty",null,null)
B.iH=new A.A("screenplay event random range is out of range",null,null)
B.iI=new A.A("render capabilities contain invalid limits",null,null)
B.iJ=new A.A("saved house overrides are malformed",null,null)
B.N=new A.aT(0,0,0)
B.bl=new A.aT(1,1,1)
B.kA=s([],t.Fk)
B.bv=s([],t.cv)
B.kC=s([],t.xL)
B.kD=s([],t.E7)
B.iK=new A.kT(B.N,B.N,0,1,null,null,B.bl,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.N,0,0,B.bl,0,null,B.kA,B.bv,B.kC,B.kD,null)
B.cP=new A.aY(0,0,0)
B.iL=new A.f5(0,"idle")
B.ar=new A.f5(1,"active")
B.iM=new A.f5(2,"ended")
B.iN=new A.f5(3,"aborted")
B.b9=new A.h8(0,"outside")
B.iO=new A.h8(1,"intersects")
B.iP=new A.h8(2,"inside")
B.iQ=new A.dB(0,"timeAdvanced")
B.iR=new A.dB(1,"dayEndReached")
B.iS=new A.dB(2,"journalWritten")
B.iT=new A.dB(3,"journalRejected")
B.iU=new A.dB(4,"slept")
B.iV=new A.dB(5,"complianceFloorTripped")
B.ba=new A.dC(0,"twentyFourHour")
B.cQ=new A.dC(1,"twelveHour")
B.cR=new A.dD(0,"important")
B.cS=new A.dD(1,"always")
B.bb=new A.cn(0,"pauseAndMute")
B.cT=new A.dE(0,"press")
B.cU=new A.dE(1,"hold")
B.cV=new A.dF(0,"compact")
B.cW=new A.dF(1,"spacious")
B.cX=new A.d2(1,"standard")
B.cY=new A.d2(2,"detailed")
B.cZ=new A.dG(0,"toast")
B.d_=new A.dG(1,"detailed")
B.d0=new A.d3(1,"readable")
B.j0=new A.im(0,"vertex")
B.d1=new A.im(1,"indices")
B.d2=new A.l_(0,"staticDraw")
B.j=new A.io(0,"ready")
B.a1=new A.io(1,"lost")
B.as=new A.hb(0,"prepared")
B.j1=new A.hb(1,"committed")
B.j2=new A.hb(2,"rolledBack")
B.j3=new A.f7(0,"color")
B.d3=new A.f7(1,"colorAndGlow")
B.j4=new A.f7(2,"colorDepthGlow")
B.bc=new A.f7(3,"depthOnly")
B.bd=new A.iq(1,"linear")
B.d4=new A.ir(0,"clampToEdge")
B.j5=new A.l0(1,1,1,!1,B.bd,B.bd,B.d4,1)
B.at=new A.iq(2,"linearMipmapLinear")
B.j6=new A.ir(1,"repeat")
B.j7=new A.d5(0,"beforeShadow")
B.j8=new A.d5(2,"beforeDepth")
B.be=new A.d5(3,"afterDepth")
B.d5=new A.d5(4,"beforeWorld")
B.j9=new A.d5(5,"afterWorld")
B.M=new A.d5(6,"afterResolve")
B.ja=new A.d5(9,"beforePresent")
B.d6=new A.co(0,"readBeforeWrite")
B.jb=new A.co(1,"duplicateWriter")
B.jc=new A.co(2,"sampledMultisampledAttachment")
B.bf=new A.co(3,"invalidResolve")
B.jd=new A.co(4,"formatOrSizeMismatch")
B.je=new A.co(5,"unversionedReadWrite")
B.jf=new A.co(6,"invalidHistoryRead")
B.jg=new A.co(7,"dependencyCycle")
B.jh=new A.co(8,"missingCapability")
B.bg=new A.cI(0,"high")
B.bh=new A.cI(1,"standard")
B.bi=new A.dH(1,B.bh,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jk=new A.dH(1,B.bg,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aN=new A.es(0,"player")
B.bj=new A.es(1,"inserted")
B.d7=new A.es(2,"warden")
B.d8=new A.f8(0,"wrongKind")
B.d9=new A.f8(1,"staleGeneration")
B.jl=new A.f8(2,"doubleRelease")
B.aO=new A.f8(3,"releasedResource")
B.jo=new A.d6("kitchen-range","settle")
B.jp=new A.d6("front-door-knocker","knock")
B.jq=new A.d6("cellar-drain","drip")
B.jr=new A.d6("bedroom-timber","creak")
B.js=new A.d6("kitchen-pipe","tick")
B.jt=new A.d6("bathroom-cistern","settle")
B.ju=new A.d6("landing-window","wind")
B.jI=new A.l7(1,"visitor")
B.jK=new A.l9("none",0,0,0,0,0,!1)
B.jN=new A.qP(null)
B.jO=new A.qQ(null)
B.bk=new A.iz(!1,0,0.85,0.92,1,0,1,0,0)
B.jP=new A.aT(0.008,0.012,0.024)
B.da=s([0,2,2,3],t.t)
B.bm=s([B.cR,B.cS],A.a2("x<dD>"))
B.jQ=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass","skybox-main-atmosphere-v1"],t.s)
B.jR=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.jS=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bn=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.I=new A.bN(0,"audio")
B.Y=new A.j0(0,"level")
B.nK=new A.bh("master","Master",B.I,B.Y,1,0,1,"audio")
B.nP=new A.bh("voice","Visitor voice",B.I,B.Y,1,0,1,"audio")
B.nG=new A.bh("effects","Effects",B.I,B.Y,1,0,1,"audio")
B.nH=new A.bh("ambience","House ambience",B.I,B.Y,1,0,1,"audio")
B.nL=new A.bh("music","Music",B.I,B.Y,1,0,1,"audio")
B.aV=new A.bN(1,"display")
B.nO=new A.bh("brightness","Display brightness",B.aV,B.Y,1,0.6,1.4,"display")
B.ay=new A.j0(1,"toggle")
B.nJ=new A.bh("muted","Mute house audio",B.I,B.ay,!1,null,null,"audio")
B.ad=new A.bN(2,"accessibility")
B.nM=new A.bh("mono","Mono-compatible mix",B.ad,B.ay,!1,null,null,"audio")
B.nI=new A.bh("high-contrast","High-contrast interface",B.ad,B.ay,!1,null,null,"display")
B.nN=new A.bh("strong-highlights","Strong focus highlights",B.ad,B.ay,!1,null,null,"display")
B.F=s([B.nK,B.nP,B.nG,B.nH,B.nL,B.nO,B.nJ,B.nM,B.nI,B.nN],A.a2("x<bh>"))
B.D=s(["who","verb","object","place","time"],t.s)
B.jU=s([81,77,83,72],t.t)
B.jV=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.eC=new A.du(1,"strong")
B.bo=s([B.ch,B.eC],A.a2("x<du>"))
B.eQ=new A.f0(0,"swap")
B.eR=new A.f0(1,"replace")
B.eS=new A.f0(2,"cancel")
B.jW=s([B.eQ,B.eR,B.eS],A.a2("x<f0>"))
B.jX=s([2,5,9,12,16,19],t.t)
B.iW=new A.cn(1,"pauseOnly")
B.iX=new A.cn(2,"continuePlayback")
B.aP=s([B.bb,B.iW,B.iX],A.a2("x<cn>"))
B.jY=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.jZ=s(["uQuantizationBits","uDitherStrength"],t.s)
B.k0=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.k1=s([B.aM,B.cD,B.cE,B.cF,B.an],A.a2("x<bU>"))
B.k2=s(["30","60","display"],t.s)
B.k3=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.aD=new A.cd(0,"full")
B.cb=new A.cd(1,"compressed")
B.cc=new A.cd(2,"off")
B.db=s([B.aD,B.cb,B.cc],A.a2("x<cd>"))
B.bp=s([B.ba,B.cQ],A.a2("x<dC>"))
B.k4=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.k5=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eH=new A.dv(1,"reduced")
B.bq=s([B.b1,B.eH],A.a2("x<dv>"))
B.eD=new A.d0(0,"wide")
B.eE=new A.d0(2,"night")
B.br=s([B.eD,B.ci,B.eE],A.a2("x<d0>"))
B.k6=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.kh=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.o_=new A.bD(0,"bed")
B.o0=new A.bD(1,"chair")
B.bW=new A.bD(2,"sofa")
B.o1=new A.bD(3,"floor")
B.dc=s([B.o_,B.o0,B.bW,B.o1],A.a2("x<bD>"))
B.dd=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bs=s([B.cV,B.cW],A.a2("x<dF>"))
B.o2=new A.c_(0,"long")
B.e8=new A.c_(1,"short")
B.de=s([B.o2,B.e8],A.a2("x<c_>"))
B.fx=new A.ck("1 - 9","Select Response",!0)
B.ft=new A.ck("SPACE","Silence Ring",!1)
B.kj=s([B.fx,B.ft],t.sa)
B.a5=new A.bY(0,"visual")
B.bI=new A.bY(1,"graphics")
B.a6=new A.bY(2,"gameplay")
B.bJ=new A.bY(3,"controls")
B.O=new A.bY(4,"audio")
B.P=new A.bY(5,"accessibility")
B.kk=s([B.a5,B.bI,B.a6,B.bJ,B.O,B.P],A.a2("x<bY>"))
B.kl=s(["master","voice","effects","ambience","music"],t.s)
B.bt=s([B.cZ,B.d_],A.a2("x<dG>"))
B.df=s(["res/house/house.json","assets/house/house.json"],t.s)
B.kn=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.ji=new A.cI(2,"safe")
B.jj=new A.cI(3,"custom")
B.dg=s([B.bg,B.bh,B.ji,B.jj],A.a2("x<cI>"))
B.H=new A.cr(0,"inactive")
B.bT=new A.cr(2,"affineWarp")
B.e0=new A.cr(3,"vertexSnap")
B.bU=new A.cr(4,"tapeGiveup")
B.bV=new A.cr(5,"portalFail")
B.ab=new A.cr(6,"lightsOut")
B.dh=s([B.H,B.aU,B.bT,B.e0,B.bU,B.bV,B.ab],A.a2("x<cr>"))
B.ko=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.kp=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.kq=s([B.aN,B.bj,B.d7],A.a2("x<es>"))
B.kr=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.pF=new A.bH("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.pE=new A.bH("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.pA=new A.bH("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.pI=new A.bH("ronnie.response","named","A route card has Ronnie written on its back.")
B.pH=new A.bH("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ks=s([B.pF,B.pE,B.pA,B.pI,B.pH],t.uk)
B.pG=new A.bH("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.pD=new A.bH("ronnie.response","named","The name Ronnie holds when the room does not.")
B.pB=new A.bH("denise.revision","accepted","One correction remains yours to protect.")
B.py=new A.bH("attercliffe.plate","kept","A second place survives the room changing around it.")
B.kt=s([B.pG,B.pD,B.pB,B.py],t.uk)
B.kB=s([],t.A5)
B.kw=s([],t.Fm)
B.kv=s([],t.op)
B.ku=s([],A.a2("x<cK>"))
B.kI=s([],t.W)
B.kz=s([],t.yH)
B.a2=s([],t.qP)
B.kx=s([],t.u)
B.dm=s([],t.xB)
B.kH=s([],t.D)
B.kG=s([],t.El)
B.n=s([],t.s)
B.dk=s([],t.ld)
B.di=s([],t.su)
B.dj=s([],t.uI)
B.dl=s([],t.nm)
B.bu=s([],t.n)
B.ky=s([],t.t)
B.bw=s([],t.zz)
B.jn=new A.it(15,"kitchen",-0.3,0)
B.jm=new A.it(19,"spare-room",0,0.3)
B.V=s([B.jn,B.jm],A.a2("x<it>"))
B.kK=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kL=s(["high","medium","low"],t.s)
B.eF=new A.cG(1,"headphones")
B.eG=new A.cG(2,"speakers")
B.bx=s([B.cj,B.eF,B.eG,B.ck],A.a2("x<cG>"))
B.kM=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.by=s([B.cT,B.cU],A.a2("x<dE>"))
B.bH=new A.cq(0,"root")
B.dE=new A.bB(0,"pauseMenu")
B.ma=new A.dK(B.bH,B.dE,null)
B.kN=s([B.ma],t.bA)
B.bz=s([B.cf,B.ak,B.cg],A.a2("x<d_>"))
B.kO=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap","uClearColor","uSkyHorizon","uSkyZenith","uSkyGround","uSkyEnabled","uSkyHorizonGlow","uSkyStarDensity","uSkyTexture","uSkyTextureEnabled","uSkyRotation","uSkyExposure","uSkyTextureSrgb","uInverseProjection","uInverseView","uCameraPosition","uCloudCoverage","uCloudDensity","uCloudBaseHeight","uCloudThickness","uCloudScale","uCloudWind","uCloudPhase","uCloudDetail","uCloudSilverLining","uCloudSampleCount","uCloudLightDirection","uCloudLightColor","uCloudLightIntensity"],t.s)
B.iZ=new A.d3(0,"instant")
B.j_=new A.d3(2,"slow")
B.bA=s([B.iZ,B.d0,B.j_],A.a2("x<d3>"))
B.kP=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.kQ=s([B.I,B.aV,B.ad],A.a2("x<bN>"))
B.dn=s([B.A,B.ap,B.r,B.aq],A.a2("x<ep>"))
B.bX=new A.bs(0,"depthTest")
B.bY=new A.bs(1,"depthFunc")
B.bZ=new A.bs(2,"depthWrite")
B.c_=new A.bs(3,"blendEnable")
B.c0=new A.bs(4,"blendFunc")
B.c1=new A.bs(5,"blendEquation")
B.c2=new A.bs(6,"cullEnable")
B.c3=new A.bs(7,"cullFace")
B.ec=new A.bs(8,"frontFace")
B.oj=new A.bs(9,"stencilEnable")
B.ea=new A.bs(10,"colorMask")
B.eb=new A.bs(11,"scissorEnable")
B.kR=s([B.bX,B.bY,B.bZ,B.c_,B.c0,B.c1,B.c2,B.c3,B.ec,B.oj,B.ea,B.eb],A.a2("x<bs>"))
B.az=new A.bZ(0,"none")
B.nR=new A.bZ(1,"albedoOnly")
B.nS=new A.bZ(2,"normalsOnly")
B.nT=new A.bZ(3,"roughnessOnly")
B.nU=new A.bZ(4,"metallicOnly")
B.nV=new A.bZ(5,"aoOnly")
B.nW=new A.bZ(6,"wireframeOnly")
B.dp=s([B.az,B.nR,B.nS,B.nT,B.nU,B.nV,B.nW],A.a2("x<bZ>"))
B.kS=s(["off","errors","full"],t.s)
B.kT=s(["off","fxaa","msaa2","msaa4"],t.s)
B.kU=s(["off","profile","standard","high"],t.s)
B.kV=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.kW=s(["post_bloom"],t.s)
B.kX=s(["post_color_grade"],t.s)
B.kY=s(["post_depth_of_field"],t.s)
B.kZ=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.Z=new A.dh(0,"pbrMaterial")
B.ae=new A.dh(1,"shadowsAndOcclusion")
B.aA=new A.dh(2,"surfaceWeathering")
B.l=new A.dh(3,"atmosphereAndPost")
B.u=new A.dh(4,"weatherEffects")
B.nX=new A.dh(5,"debugView")
B.au=s([B.Z,B.ae,B.aA,B.l,B.u,B.nX],A.a2("x<dh>"))
B.l0=s(["shadow_csm_hardness"],t.s)
B.l1=s(["srgb","linear"],t.s)
B.l2=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.l3=s(["uBloomStrength"],t.s)
B.l4=s(["uLutSize","uStrength"],t.s)
B.l5=s([B.cH,B.cI,B.cJ],A.a2("x<cm>"))
B.l6=s(["uTexelSize","uNear","uFar"],t.s)
B.dq=s(["uTexelStep"],t.s)
B.l7=s(["uVolumetricStrength"],t.s)
B.l8=s(["uninitialized"],t.s)
B.iY=new A.d2(0,"minimal")
B.bB=s([B.iY,B.cX,B.cY],A.a2("x<d2>"))
B.pC=new A.bH("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.px=new A.bH("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.pw=new A.bH("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.pz=new A.bH("ronnie.response","named","The route card gives one name its own line.")
B.l9=s([B.pC,B.px,B.pw,B.pz],t.uk)
B.ai=new A.cc(0,"waiting")
B.aB=new A.cc(1,"atDoor")
B.aC=new A.cc(2,"consulting")
B.aX=new A.cc(3,"resolved")
B.la=s([B.ai,B.aB,B.aC,B.aX],A.a2("x<cc>"))
B.lb=s(["post_dither","post_quantization_bits"],t.s)
B.fy=new A.ck("W A S D","Move",!1)
B.fw=new A.ck("TAB","Journal",!1)
B.fv=new A.ck("CAPS","Shader Lab",!1)
B.fu=new A.ck("ESC","Pause",!1)
B.lc=s([B.fy,B.fw,B.fv,B.fu],t.sa)
B.ld=s(["floor-linoleum","ceiling-stained"],t.s)
B.lM={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.le=new A.a4(B.lM,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a4<e,L?>"))
B.m_={uAlbedo:0}
B.dr=new A.a4(B.m_,[0],t.I)
B.m6={uSsaoRaw:0,uSceneDepth:1}
B.lf=new A.a4(B.m6,[0,1],t.I)
B.dC={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.kg=s(["KeyW","GamepadDpadUp"],t.s)
B.kf=s(["KeyS","GamepadDpadDown"],t.s)
B.k7=s(["KeyA","GamepadDpadLeft"],t.s)
B.k8=s(["KeyD","GamepadDpadRight"],t.s)
B.k9=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.kd=s(["KeyQ","GamepadB"],t.s)
B.ki=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.kJ=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.ke=s(["KeyR","GamepadX"],t.s)
B.ka=s(["KeyF","GamepadRB"],t.s)
B.kb=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.kc=s(["KeyL"],t.s)
B.k_=s(["Escape","GamepadMenu"],t.s)
B.lg=new A.a4(B.dC,[B.kg,B.kf,B.k7,B.k8,B.k9,B.kd,B.ki,B.kJ,B.ke,B.ka,B.kb,B.kc,B.k_],A.a2("a4<e,J<e>>"))
B.lh=new A.a4(B.dC,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.m3={uScene:0,uHistory:1}
B.li=new A.a4(B.m3,[0,1],t.I)
B.lC={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.lj=new A.a4(B.lC,["a5a2929e6a5c4c0e2af0c3f56260706764bee448","c46f2294948470c909669085095067c53250648e","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.3"],t.w)
B.lQ={aPosition:0,aUvMat:1}
B.ds=new A.a4(B.lQ,[0,4],t.I)
B.lD={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.lk=new A.a4(B.lD,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.m4={uScene:0,uLut:1}
B.ll=new A.a4(B.m4,[0,1],t.I)
B.m5={uSource:0}
B.dt=new A.a4(B.m5,[0],t.I)
B.lX={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.lm=new A.a4(B.lX,[0,1,2,3,4,5,6],t.I)
B.du=new A.d4([B.a5,"settings.visual",B.bI,"settings.graphics",B.a6,"settings.gameplay",B.bJ,"settings.controls",B.O,"settings.audio",B.P,"settings.accessibility"],t.EJ)
B.dv=new A.d4([B.a5,"visual",B.bI,"graphics",B.a6,"gameplay",B.bJ,"controls",B.O,"audio",B.P,"accessibility"],t.EJ)
B.lK={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ln=new A.a4(B.lK,[0,1,2],t.I)
B.m7={uTex:0,uSkyTexture:1}
B.lo=new A.a4(B.m7,[0,1],t.I)
B.lS={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.jE=new A.bA("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.jz=new A.bA("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.jD=new A.bA("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.jG=new A.bA("wallpaper-damp","grime",7106925,0.94,0.76)
B.jA=new A.bA("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.jF=new A.bA("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.jH=new A.bA("wallpaper-peeling","grime",9340536,0.91,0.68)
B.jB=new A.bA("floor-wood","wall-plaster",7755327,0.88,0.22)
B.jx=new A.bA("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.jy=new A.bA("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.jv=new A.bA("floor-concrete","grime",7828331,0.96,0.92)
B.jw=new A.bA("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.jC=new A.bA("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bC=new A.a4(B.lS,[B.jE,B.jz,B.jD,B.jG,B.jA,B.jF,B.jH,B.jB,B.jx,B.jy,B.jv,B.jw,B.jC],A.a2("a4<e,bA>"))
B.m0={uBloom:0}
B.lp=new A.a4(B.m0,[0],t.I)
B.m1={uSceneDepth:0}
B.dw=new A.a4(B.m1,[0],t.I)
B.m2={uScene:0}
B.lq=new A.a4(B.m2,[0],t.I)
B.E={}
B.dx=new A.a4(B.E,[],A.a2("a4<e,i5>"))
B.lr=new A.a4(B.E,[],A.a2("a4<e,J<z>>"))
B.aQ=new A.a4(B.E,[],t.w)
B.pO=new A.a4(B.E,[],A.a2("a4<e,l>"))
B.bD=new A.a4(B.E,[],A.a2("a4<e,z>"))
B.y=new A.a4(B.E,[],t.I)
B.dy=new A.a4(B.E,[],A.a2("a4<e,@>"))
B.pP=new A.a4(B.E,[],A.a2("a4<e,e?>"))
B.ls=new A.a4(B.E,[],A.a2("a4<@,@>"))
B.m9={"porcelain-albedo":0,"porcelain-normal":1}
B.lt=new A.a4(B.m9,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.lF={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.lu=new A.a4(B.lF,[0,1,2,3,4,5,6],t.I)
B.dF=new A.cQ(0,"resume")
B.dG=new A.cQ(1,"settings")
B.dH=new A.cQ(2,"controls")
B.dI=new A.cQ(3,"save")
B.dJ=new A.cQ(4,"help")
B.dK=new A.cQ(5,"credits")
B.dL=new A.cQ(6,"back")
B.lv=new A.d4([B.dF,"pause.resume",B.dG,"pause.settings",B.dH,"pause.controls",B.dI,"pause.save",B.dJ,"pause.help",B.dK,"pause.credits",B.dL,"pause.back"],A.a2("d4<cQ,e>"))
B.m8={uVolumetric:0}
B.lw=new A.a4(B.m8,[0],t.I)
B.lU={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.lx=new A.a4(B.lU,[0,1,2,3],t.I)
B.bE=new A.d4([B.aU,1,B.bT,1.5,B.e0,1.5,B.bU,2,B.bV,2,B.ab,4],A.a2("d4<cr,z>"))
B.pQ=new A.iC(0,"srgb")
B.pR=new A.iC(1,"linear")
B.ly=new A.cO("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.aF,0.5,!1,!1)
B.lz=new A.cO("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.aF,0.5,!1,!1)
B.lA=new A.cO("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.aF,0.5,!1,!1)
B.bF=new A.fd(0,"resident")
B.dz=new A.fd(1,"pending")
B.dA=new A.fd(2,"missing")
B.dB=new A.fd(3,"evicted")
B.pS=new A.lm(!1)
B.lB=new A.lm(!0)
B.kE=s([],t.bA)
B.kF=s([],A.a2("x<bB>"))
B.bG=new A.ex(B.kE,B.kF,null)
B.dD=new A.cq(1,"settings")
B.mb=new A.cq(2,"visual")
B.mc=new A.cq(3,"graphics")
B.md=new A.cq(4,"gameplay")
B.me=new A.cq(5,"controls")
B.mf=new A.cq(6,"audio")
B.mg=new A.cq(7,"accessibility")
B.mh=new A.cq(8,"credits")
B.a4=new A.bB(1,"settings")
B.mi=new A.bB(2,"journal")
B.mj=new A.bB(3,"sleep")
B.mk=new A.bB(4,"help")
B.ml=new A.bB(5,"visitor")
B.mm=new A.bB(6,"ending")
B.dM=new A.ey(0,"opened")
B.dN=new A.ey(2,"backed")
B.dO=new A.ey(3,"resumed")
B.mn=new A.ey(4,"dismissed")
B.a7=new A.ey(5,"unchanged")
B.mo=new A.bC("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.mp=new A.bC("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.mq=new A.bC("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.mr=new A.bC("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.ms=new A.bC("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.mt=new A.bC("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.mu=new A.bC("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.mv=new A.bC("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.mw=new A.bC("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.mx=new A.lx(0,1,null)
B.mz=new A.ly(1,"high")
B.my=new A.rQ(!1,!0,!0,!0,!1,B.mz,35,256)
B.mA=new A.lC(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.w=new A.ez(0,"none")
B.av=new A.ez(1,"rain")
B.a8=new A.ez(2,"sleet")
B.a9=new A.ez(3,"snow")
B.W=new A.ez(4,"hail")
B.mB=new A.cR(0,"tooShortForHeader")
B.mC=new A.cR(1,"badMagic")
B.mD=new A.cR(2,"unsupportedVersion")
B.dQ=new A.cR(3,"unsupportedStride")
B.mE=new A.cR(4,"truncatedVertexData")
B.mF=new A.cR(5,"nonFiniteBounds")
B.dR=new A.cR(6,"nonFiniteVertex")
B.mG=new A.cR(7,"vertexCountNotMultipleOfThree")
B.bK=new A.fi(0,"safe")
B.Q=new A.fi(1,"standard")
B.G=new A.fi(2,"high")
B.ac=new A.aX(B.E,0,t.M)
B.aw=new A.dO(B.bK,B.ac)
B.lZ={shadows:0}
B.nF=new A.aX(B.lZ,1,t.M)
B.dS=new A.dO(B.Q,B.nF)
B.lH={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.nv=new A.aX(B.lH,5,t.M)
B.mI=new A.dO(B.G,B.nv)
B.lY={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.nE=new A.aX(B.lY,6,t.M)
B.dT=new A.dO(B.G,B.nE)
B.mH=new A.fi(4,"shipping")
B.lJ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.nx=new A.aX(B.lJ,7,t.M)
B.pT=new A.dO(B.mH,B.nx)
B.aa=new A.lK(0,0,0,1)
B.mJ=new A.a5(0,1)
B.mK=new A.a5(256,256)
B.mL=new A.a5(4096,2048)
B.mM=new A.a5(4096,4096)
B.mN=new A.a5(512,512)
B.mO=new A.bl(0.35,0.52,0.88)
B.mP=new A.aH(0.46,0.25,0.2)
B.dU=new A.bl(0.22,0.45,0.92)
B.mQ=new A.aH(0.48,0.4,0.34)
B.mR=new A.aH(0.31,0.25,0.23)
B.bL=new A.bl(0.75,0.52,0.42)
B.mS=new A.bl(0.4,0.65,0.95)
B.dV=new A.bl(0.88,0.96,1)
B.mT=new A.aH(0.37,0.33,0.31)
B.mU=new A.bl(0.62,0.48,0.45)
B.mV=new A.aH(0.34,0.32,0.29)
B.dW=new A.aH(0.38,0.25,0.19)
B.bM=new A.bl(0.9,0.8,0.72)
B.aR=new A.bl(0.28,0.16,0.12)
B.mW=new A.aH(0.31,0.28,0.24)
B.bN=new A.bl(0.65,0.45,0.35)
B.mX=new A.aH(0.58,0.56,0.5)
B.dX=new A.bl(0.2,0.38,0.9)
B.mY=new A.aH(0.44,0.37,0.28)
B.mZ=new A.aH(0.52,0.5,0.44)
B.n_=new A.aH(0.24,0.25,0.27)
B.n0=new A.aH(0.28,0.27,0.25)
B.n1=new A.bl(0.35,0.28,0.25)
B.dY=new A.bl(0.52,0.32,0.38)
B.n2=new A.aH(0.42,0.4,0.38)
B.n3=new A.aH(0.18,0.2,0.21)
B.n4=new A.aH(0.2,0.12,0.1)
B.aS=new A.bl(0.35,0.2,0.15)
B.n5=new A.aH(0.12,0.15,0.2)
B.n6=new A.hq(0,"constructed")
B.X=new A.hq(1,"ready")
B.bO=new A.hq(2,"lost")
B.n7=new A.iX(B.aw,384,216,1,B.b7,0,512,32,4,1,B.cB)
B.bP=new A.fl(0,"constructed")
B.n8=new A.fl(1,"initializing")
B.bQ=new A.fl(2,"ready")
B.dZ=new A.fl(3,"contextLost")
B.i=new A.hr(0,"read")
B.k=new A.hr(1,"write")
B.R=new A.hr(2,"historyRead")
B.bR=new A.hs(0,"prepared")
B.n9=new A.hs(1,"committed")
B.na=new A.hs(2,"rolledBack")
B.q=new A.iZ(0,"rgba8")
B.nb=new A.aO("dofBlurH",B.q,192,108,1,0)
B.nc=new A.aO("dofBlurV",B.q,192,108,1,0)
B.nd=new A.aO("dofOutput",B.q,384,216,1,0)
B.e_=new A.iZ(2,"depth24")
B.ne=new A.aO("shadowMap",B.e_,512,512,1,0)
B.nf=new A.aO("volumetricLight",B.q,192,108,1,0)
B.ng=new A.aO("sceneColor",B.q,384,216,1,1)
B.nh=new A.aO("ssaoRaw",B.q,192,108,1,0)
B.ni=new A.aO("ssaoBlurred",B.q,192,108,1,0)
B.nj=new A.aO("gradeOutput",B.q,384,216,1,0)
B.nk=new A.aO("vhsOutput",B.q,384,216,1,0)
B.nl=new A.aO("sceneDepth",B.e_,384,216,1,0)
B.nm=new A.aO("bloomBlurH",B.q,192,108,1,0)
B.nn=new A.aO("bloomBlurV",B.q,192,108,1,0)
B.no=new A.aO("present",B.q,384,216,1,0)
B.bS=new A.aO("sceneColor",B.q,384,216,1,0)
B.np=new A.aO("ps1Output",B.q,384,216,1,0)
B.nq=new A.fn(null,"save storage unavailable")
B.nr=new A.fn(null,"save could not be recovered")
B.ns=new A.fn(null,null)
B.lN={WheelUp:0,WheelDown:1}
B.nt=new A.aX(B.lN,2,t.M)
B.lV={open:0,closed:1}
B.nu=new A.aX(B.lV,2,t.M)
B.lP={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.nw=new A.aX(B.lP,10,t.M)
B.lG={Escape:0}
B.e1=new A.aX(B.lG,1,t.M)
B.lE={open:0,closed:1,mixed:2}
B.ny=new A.aX(B.lE,3,t.M)
B.lT={front:0,"rear-service":1}
B.nz=new A.aX(B.lT,2,t.M)
B.nA=new A.ha([18,20],A.a2("ha<k>"))
B.lW={overcast:0,rain:1}
B.nB=new A.aX(B.lW,2,t.M)
B.lR={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.nC=new A.aX(B.lR,16,t.M)
B.lO={Escape:0,Tab:1,F11:2}
B.e2=new A.aX(B.lO,3,t.M)
B.lL={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.nD=new A.aX(B.lL,5,t.M)
B.lI={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ax=new A.aX(B.lI,7,t.M)
B.e5=new A.fp(2,"link")
B.nQ=new A.j1(B.e5,"gl.createProgram() returned null")
B.e3=new A.fp(0,"vertex")
B.e4=new A.fp(1,"fragment")
B.e6=new A.fp(3,"validation")
B.z=new A.j2(0,"live")
B.e7=new A.j2(1,"unavailable")
B.nY=new A.j3(0,"full")
B.nZ=new A.j3(2,"culled")
B.o3=new A.bi(0,"polarNight")
B.o4=new A.bi(1,"astronomicalDawn")
B.o5=new A.bi(10,"civilDusk")
B.o6=new A.bi(11,"nauticalDusk")
B.o7=new A.bi(12,"astronomicalDusk")
B.o8=new A.bi(13,"night")
B.o9=new A.bi(14,"polarDay")
B.oa=new A.bi(2,"nauticalDawn")
B.ob=new A.bi(3,"civilDawn")
B.oc=new A.bi(4,"sunrise")
B.e9=new A.bi(5,"morning")
B.od=new A.bi(6,"solarNoon")
B.oe=new A.bi(7,"afternoon")
B.of=new A.bi(8,"goldenHour")
B.og=new A.bi(9,"sunset")
B.J=new A.C(0,1,0)
B.a0=new A.C(0,-1,0)
B.oh=new A.bO(-1,B.J,B.a0,B.bl,1,1,0.3,0.5)
B.oi=new A.m0(!1,"","",B.bu,B.bu)
B.ed=new A.dT(0,"resident")
B.ee=new A.dT(1,"pending")
B.ef=new A.dT(2,"missing")
B.eg=new A.dT(3,"evicted")
B.v=new A.C(0,0,0)
B.B=new A.fs(B.v,B.aa,1)
B.ok=A.cA("Kx")
B.ol=A.cA("Ky")
B.om=A.cA("pr")
B.on=A.cA("ps")
B.oo=A.cA("Fl")
B.op=A.cA("Fm")
B.oq=A.cA("Fn")
B.or=A.cA("aj")
B.os=A.cA("L")
B.ot=A.cA("uL")
B.ou=A.cA("uM")
B.ov=A.cA("Go")
B.ow=A.cA("c1")
B.e=new A.dj(0,"float1")
B.af=new A.dj(1,"float2")
B.m=new A.dj(2,"float3")
B.ox=new A.dj(3,"float4")
B.o=new A.dj(4,"mat4")
B.eh=new A.dj(5,"mat4Array")
B.c4=new A.q(B.e,0)
B.c5=new A.q(B.e,1)
B.a_=new A.dj(6,"sampler")
B.x=new A.q(B.a_,0)
B.ag=new A.q(B.a_,1)
B.ei=new A.q(B.a_,2)
B.oy=new A.q(B.a_,3)
B.oz=new A.q(B.a_,4)
B.oA=new A.q(B.a_,5)
B.oB=new A.q(B.a_,6)
B.oC=new A.uQ(!1)
B.oD=new A.C(0,0,1)
B.oE=new A.C(0,3,0)
B.aW=new A.C(1,0,0)
B.oF=new A.C(0,-9.81,0)
B.oG=new A.C(1/0,1/0,1/0)
B.oH=new A.C(2.75,3,2.75)
B.oI=new A.C(-1/0,-1/0,-1/0)
B.ej=new A.cT(1,"normal")
B.c7=new A.cT(6,"tangent4")
B.oJ=new A.cT(0,"position")
B.c9=new A.bc(B.oJ,0,3)
B.ca=new A.bc(B.ej,3,3)
B.eq=new A.bc(B.c7,6,4)
B.ek=new A.cT(2,"color")
B.en=new A.bc(B.ek,10,4)
B.el=new A.cT(4,"alpha")
B.eo=new A.bc(B.el,14,1)
B.em=new A.cT(5,"uv0")
B.ep=new A.bc(B.em,15,2)
B.oK=new A.cT(7,"uv1")
B.oO=new A.bc(B.oK,17,2)
B.c8=new A.cT(8,"legacyMaterialEffect")
B.oR=new A.bc(B.c8,19,1)
B.l_=s([B.c9,B.ca,B.eq,B.en,B.eo,B.ep,B.oO,B.oR],t.v5)
B.oS=new A.jb("surfaceV2WithUv1",20,B.l_)
B.oL=new A.bc(B.ek,6,4)
B.oM=new A.bc(B.el,10,1)
B.oN=new A.bc(B.em,11,2)
B.oP=new A.bc(B.c8,13,1)
B.km=s([B.c9,B.ca,B.oL,B.oM,B.oN,B.oP],t.v5)
B.ah=new A.jb("compatibility14",14,B.km)
B.oQ=new A.bc(B.c8,17,1)
B.jT=s([B.c9,B.ca,B.eq,B.en,B.eo,B.ep,B.oQ],t.v5)
B.oT=new A.jb("surfaceV2",18,B.jT)
B.oU=new A.eD(0,"visitorAnswered")
B.er=new A.eD(1,"visitorIgnored")
B.oV=new A.eD(2,"entryVerified")
B.oW=new A.eD(3,"entryContradicted")
B.oX=new A.eD(4,"exposureAccepted")
B.oZ=new A.dk(1,"malformedDay")
B.p_=new A.dk(2,"malformedTier")
B.es=new A.dk(3,"missingTierLines")
B.aj=new A.dk(6,"invalidPhase")
B.p2=new A.bF(B.aj,"No reaction is due.")
B.pa=new A.bv(B.p2)
B.p7=new A.bF(B.aj,"The active visit cannot be chosen.")
B.pb=new A.bv(B.p7)
B.p3=new A.bF(B.aj,"The active visit has no line to advance.")
B.pc=new A.bv(B.p3)
B.p1=new A.dk(5,"noActiveVisit")
B.p4=new A.bF(B.p1,"There is no active visit.")
B.et=new A.bv(B.p4)
B.p6=new A.bF(B.aj,"A visit is already active.")
B.pd=new A.bv(B.p6)
B.p0=new A.dk(4,"noArrival")
B.p9=new A.bF(B.p0,"The authored arrival is missing.")
B.pe=new A.bv(B.p9)
B.p5=new A.bF(B.aj,"That answer is not offered.")
B.pf=new A.bv(B.p5)
B.oY=new A.dk(0,"missingCorpus")
B.p8=new A.bF(B.oY,"The authored visitor corpus is empty.")
B.pg=new A.bv(B.p8)
B.ph=new A.eH(0,"none")
B.pi=new A.eH(1,"splash")
B.cd=new A.eH(2,"settle")
B.pj=new A.eH(3,"melt")
B.eu=new A.eH(4,"rebound")
B.pk=new A.fw(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.pl=new A.fw(-2,8.8,4.5,0.9,1,!0,0.00005)
B.pm=new A.fw(0,0,0,1,1,!1,0)
B.pn=new A.fw(-5,18,5.5,0.65,1.35,!0,0.001)
B.po=new A.fw(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.ev=new A.fz(1,"exact")
B.ce=new A.fz(2,"partial")
B.aY=new A.fz(3,"contradiction")
B.pp=new A.fz(0,"skipped")
B.pq=new A.fy(B.pp,B.ac)
B.pr=new A.fy(B.ce,B.ac)
B.ps=new A.jf(B.a2,!1)
B.pt=new A.jf(B.a2,!0)
B.ew=new A.jh(0,"horizontal")
B.pu=new A.jh(1,"vertical")
B.ex=new A.jj(0,"horizontal")
B.pv=new A.jj(1,"vertical")
B.aZ=new A.hH(0,"empty")
B.pJ=new A.hH(1,"cpuReady")
B.b_=new A.hH(4,"released")})();(function staticFields(){$.vM=null
$.ci=A.c([],A.a2("x<L>"))
$.Bl=null
$.t2=0
$.t3=A.IE()
$.AI=null
$.AH=null
$.Dw=null
$.Dm=null
$.DE=null
$.y6=null
$.yf=null
$.Ah=null
$.wc=A.c([],A.a2("x<J<L>?>"))
$.hU=null
$.k_=null
$.k0=null
$.zR=!1
$.ar=B.C
$.BK=""
$.BL=null
$.BF=null
$.rB=null
$.dp=A.ak()
$.fI=A.ak()
$.ay=null
$.wq=A.ak()
$.CO=null
$.p=A.ak()
$.Cr=A.ak()
$.cW=A.ak()
$.am=A.ak()
$.R=A.ak()
$.bw=A.ak()
$.W=A.ak()
$.zz=A.ak()
$.wt=null
$.zM=null
$.bm=null
$.zD=!1
$.A0=!1
$.jX=B.b2
$.dq=B.aE
$.xP=!1
$.Ac=!1
$.CQ=null
$.hQ=null
$.nv=A.n(t.N,t.xe)
$.nj=null
$.CC=0
$.Dl=0
$.zS=null
$.fL=!1
$.CP=!1
$.zT=0
$.eQ=0
$.zF="booting"
$.ch=0
$.eV=0
$.af="hall"
$.eP=A.ak()
$.hN=A.ak()
$.cg=A.ak()
$.CV=null
$.A1=0
$.A5=1.65
$.eT=null
$.bf=null
$.k3=!1
$.cz=A.ak()
$.hO=A.ak()
$.jU=A.ak()
$.nh=A.ak()
$.Cq=A.ak()
$.Cp=A.ak()
$.aC=A.ak()
$.fJ=A.ak()
$.jT=A.ak()
$.ng=A.ak()
$.jV=A.ak()
$.jW=A.ak()
$.fH=A.ak()
$.eO=A.ak()
$.hM=A.ak()
$.jS=A.ak()
$.jQ=A.ak()
$.jR=A.ak()
$.aP=A.ak()
$.nf=A.ak()
$.be=A.ak()
$.xQ=A.a_(t.S)
$.dr=A.c([],t.s)
$.zK=null
$.Dc=!1
$.Cu=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"KA","DO",()=>A.y8("_$dart_dartClosure"))
s($,"Kz","yY",()=>A.y8("_$dart_dartClosure_dartJSInterop"))
s($,"Lj","Ec",()=>A.c([new J.la()],A.a2("x<j_>")))
s($,"KL","DP",()=>A.dV(A.uK({
toString:function(){return"$receiver$"}})))
s($,"KM","DQ",()=>A.dV(A.uK({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"KN","DR",()=>A.dV(A.uK(null)))
s($,"KO","DS",()=>A.dV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"KR","DV",()=>A.dV(A.uK(void 0)))
s($,"KS","DW",()=>A.dV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"KQ","DU",()=>A.dV(A.BH(null)))
s($,"KP","DT",()=>A.dV(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"KU","DY",()=>A.dV(A.BH(void 0)))
s($,"KT","DX",()=>A.dV(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"KW","Ar",()=>A.GS())
s($,"L_","E2",()=>A.FH(4096))
s($,"KY","E0",()=>new A.wm().$0())
s($,"KZ","E1",()=>new A.wl().$0())
s($,"KX","E_",()=>A.FG(A.S(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"La","i3",()=>A.nB(B.os))
s($,"KJ","Aq",()=>{A.FW()
return $.t2})
s($,"Kw","DN",()=>B.bS.ij())
s($,"KF","Ap",()=>A.lv(A.c([255,255,255,255],t.t)))
s($,"KC","Am",()=>A.lv(A.c([128,128,255,255],t.t)))
s($,"KB","Al",()=>A.lv(A.c([0,0,0,255],t.t)))
s($,"KD","An",()=>A.lv(A.c([255,255,0,255],t.t)))
s($,"KE","Ao",()=>A.lv(A.c([255,255,255,255],t.t)))
s($,"Lp","Eg",()=>A.ja(0,1,0))
s($,"KV","DZ",()=>A.GP(A.a_(t.N),0,0,A.ja(0,0,0)))
s($,"Ll","Ed",()=>A.iV("^[a-z0-9][a-z0-9._-]*$"))
s($,"Ls","fQ",()=>{var q=$.BF
if(q==null){A.y2()
A.y2()
A.y2()
A.y2()
q=$.BF=new A.uy()}return q})
s($,"KG","yZ",()=>A.z4(B.ba,B.cR,!0,B.bb,B.cT,B.cW,B.cX,B.cZ,!0,!1,B.d0))
s($,"L5","E3",()=>new A.oA())
r($,"Df","dt",()=>A.zk(null,null))
r($,"jZ","k9",()=>A.hc(null,null))
r($,"zJ","fP",()=>A.h2(null,null,!1,1,!1,!1,2,1))
r($,"zN","cC",()=>$.yZ())
s($,"Lh","Ea",()=>A.HM())
s($,"Li","Eb",()=>new A.t6(A.n(t.N,t.i)))
s($,"Lb","E6",()=>new A.qa())
s($,"Lc","E7",()=>new A.ql())
s($,"Ld","z0",()=>new A.qB(A.n(t.N,t.S)))
s($,"L7","E4",()=>A.dW().gaZ().h(0,"debugPause")==="1")
s($,"L4","k8",()=>A.dW().gaZ().h(0,"automation")==="1")
s($,"L1","z_",()=>A.IV())
s($,"L0","As",()=>$.z_()!=null)
s($,"L2","At",()=>$.k8()?A.dW().gaZ().h(0,"captureMantleId"):null)
s($,"L3","Au",()=>A.dW().gaZ().h(0,"captureMantleLit")==="1")
r($,"xL","e8",()=>A.ja(0,0,0))
r($,"xC","E9",()=>A.ja(0,0,0))
r($,"xW","nD",()=>A.ja(0,0,0))
s($,"L6","Av",()=>A.IW())
s($,"Lf","ka",()=>new A.pu(A.ja(0,0,0)))
s($,"Le","E8",()=>new A.r_(new A.p8()))
s($,"L8","cB",()=>new A.pN(A.c([],t.s)))
s($,"Lk","bS",()=>A.BA())
s($,"Ln","Ee",()=>new A.u9(A.n(t.N,t.oZ)))
s($,"Lm","Aw",()=>new A.t8(A.FZ(520588),B.bk))
s($,"Lo","Ef",()=>new A.v7())
s($,"L9","E5",()=>new A.q6())
s($,"Lg","i4",()=>new A.rF(B.bG))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ew,ArrayBuffer:A.hl,ArrayBufferView:A.iH,DataView:A.lo,Float32Array:A.iE,Float64Array:A.lp,Int16Array:A.lq,Int32Array:A.lr,Int8Array:A.ls,Uint16Array:A.lt,Uint32Array:A.lu,Uint8ClampedArray:A.ff,CanvasPixelArray:A.ff,Uint8Array:A.iI})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bq.$nativeSuperclassTag="ArrayBufferView"
A.jr.$nativeSuperclassTag="ArrayBufferView"
A.js.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.jt.$nativeSuperclassTag="ArrayBufferView"
A.ju.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.nA
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
