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
if(a[b]!==s){A.K8(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.A1(b)
return new s(c,this)}:function(){if(s===null)s=A.A1(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.A1(a).prototype
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
A6(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xX(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.A4==null){A.JL()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Bw("Return interceptor for "+A.y(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vA
if(o==null)o=$.vA=A.xW(n)
p=q[o]}if(p!=null)return p
p=A.JR(a)
if(p!=null)return p
if(typeof a=="function")return B.jL
s=Object.getPrototypeOf(a)
if(s==null)return B.dO
if(s===Object.prototype)return B.dO
if(typeof q=="function"){o=$.vA
if(o==null)o=$.vA=A.xW(n)
Object.defineProperty(q,o,{value:B.c5,enumerable:false,writable:true,configurable:true})
return B.c5}return B.c5},
AP(a,b){if(a<0||a>4294967295)throw A.b(A.b2(a,0,4294967295,"length",null))
return J.AR(new Array(a),b)},
AQ(a,b){if(a<0)throw A.b(A.p("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
qu(a,b){if(a<0)throw A.b(A.p("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
AR(a,b){var s=A.c(a,b.i("x<0>"))
s.$flags=1
return s},
Fd(a,b){var s=t.hO
return J.Am(s.a(a),s.a(b))},
AT(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Fe(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.AT(r))break;++b}return b},
Ff(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.AT(q))break}return b},
eT(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.is.prototype
return J.l7.prototype}if(typeof a=="string")return J.et.prototype
if(a==null)return J.it.prototype
if(typeof a=="boolean")return J.l6.prototype
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xX(a)},
aQ(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xX(a)},
cY(a){if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xX(a)},
Dh(a){if(typeof a=="number")return J.h9.prototype
if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.fo.prototype
return a},
Di(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.fo.prototype
return a},
Dj(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xX(a)},
Ak(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Dh(a).a4(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eT(a).aa(a,b)},
b0(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.JQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)},
b7(a,b,c){return J.cY(a).l(a,b,c)},
e8(a,b){return J.cY(a).k(a,b)},
E3(a,b){return J.Di(a).hp(a,b)},
k7(a,b){return J.cY(a).M(a,b)},
Al(a,b,c){return J.Dj(a).hr(a,b,c)},
E4(a,b,c){return J.Dj(a).hs(a,b,c)},
E5(a,b){return J.cY(a).cW(a,b)},
Am(a,b){return J.Dh(a).I(a,b)},
An(a,b){return J.aQ(a).p(a,b)},
nz(a,b){return J.cY(a).a9(a,b)},
E6(a,b){return J.cY(a).a2(a,b)},
Ao(a){return J.cY(a).ga1(a)},
aN(a){return J.eT(a).gU(a)},
k8(a){return J.aQ(a).gP(a)},
E7(a){return J.aQ(a).ga5(a)},
O(a){return J.cY(a).gv(a)},
cD(a){return J.aQ(a).gu(a)},
eV(a){return J.eT(a).gad(a)},
Ap(a,b){return J.cY(a).W(a,b)},
e9(a,b,c){return J.cY(a).br(a,b,c)},
E8(a,b){return J.aQ(a).su(a,b)},
E9(a,b){return J.Di(a).aQ(a,b)},
c3(a){return J.eT(a).t(a)},
Aq(a,b){return J.cY(a).eQ(a,b)},
l3:function l3(){},
l6:function l6(){},
it:function it(){},
iv:function iv(){},
eu:function eu(){},
lu:function lu(){},
fo:function fo(){},
dI:function dI(){},
ha:function ha(){},
hb:function hb(){},
x:function x(a){this.$ti=a},
l5:function l5(){},
qw:function qw(a){this.$ti=a},
eW:function eW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h9:function h9(){},
is:function is(){},
l7:function l7(){},
et:function et(){}},A={yU:function yU(){},
xQ(){return $},
Em(a,b,c){if(t.he.b(a))return new A.jg(a,b.i("@<0>").S(c).i("jg<1,2>"))
return new A.f_(a,b.i("@<0>").S(c).i("f_<1,2>"))},
AX(a){return new A.hc("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.hc("Field '"+a+"' has not been initialized.")},
Fh(a){return new A.hc("Field '"+a+"' has already been initialized.")},
xY(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b4(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
j3(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e6(a,b,c){return a},
A5(a){var s,r
for(s=$.ci.length,r=0;r<s;++r)if(a===$.ci[r])return!0
return!1},
hv(a,b,c,d){A.lG(b,"start")
if(c!=null){A.lG(c,"end")
if(b>c)A.f(A.b2(b,0,c,"start",null))}return new A.j2(a,b,c,d.i("j2<0>"))},
ld(a,b,c,d){if(t.he.b(a))return new A.dy(a,b,c.i("@<0>").S(d).i("dy<1,2>"))
return new A.cN(a,b,c.i("@<0>").S(d).i("cN<1,2>"))},
cL(){return new A.ht("No element")},
AO(){return new A.ht("Too many elements")},
eF:function eF(){},
i8:function i8(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b){this.a=a
this.$ti=b},
jg:function jg(a,b){this.a=a
this.$ti=b},
je:function je(){},
b9:function b9(a,b){this.a=a
this.$ti=b},
hc:function hc(a){this.a=a},
dw:function dw(a){this.a=a},
tm:function tm(){},
U:function U(){},
a0:function a0(){},
j2:function j2(a,b,c,d){var _=this
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
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
iz:function iz(a,b,c){var _=this
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
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
ii:function ii(a,b,c){this.a=a
this.b=b
this.$ti=c},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ig:function ig(a){this.$ti=a},
dX:function dX(a,b){this.a=a
this.$ti=b},
ja:function ja(a,b){this.a=a
this.$ti=b},
aE:function aE(){},
ez:function ez(){},
hy:function hy(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
jL:function jL(){},
aW(a,b,c){var s,r,q,p,o,n,m,l=A.aG(a.ga3(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.w)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aG(a.gak(),!0,c)
m=new A.a4(q,n,b.i("@<0>").S(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.ib(A.aZ(a,b,c),b.i("@<0>").S(c).i("ib<1,2>"))},
Es(){throw A.b(A.bu("Cannot modify unmodifiable Map"))},
Et(){throw A.b(A.bu("Cannot modify constant Set"))},
Dz(a){var s=A.Dy(a)
if(s!=null)return s
return"minified:"+a},
JQ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c3(a)
return s},
iO(a){var s,r=$.B9
if(r==null)r=$.B9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dL(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fd(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aP(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
lB(a){var s,r,q,p
if(a instanceof A.L)return A.bR(A.cj(a),null)
s=J.eT(a)
if(s===B.jJ||s===B.jM||t.qF.b(a)){r=B.ct(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bR(A.cj(a),null)},
Bc(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.em)return a.t(0)
if(a instanceof A.bj)return a.hf(!0)
s=$.DZ()
for(r=0;r<1;++r){q=s[r].oM(a)
if(q!=null)return q}return"Instance of '"+A.lB(a)+"'"},
FA(){return Date.now()},
FH(){var s,r
if($.rU!==0)return
$.rU=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rU=1e6
$.rV=new A.rT(r)},
Fz(){if(!!self.location)return self.location.href
return null},
FI(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ay(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.e3(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.b2(a,0,1114111,null,null))},
hl(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
FG(a){var s=A.hl(a).getUTCFullYear()+0
return s},
FE(a){var s=A.hl(a).getUTCMonth()+1
return s},
Ba(a){var s=A.hl(a).getUTCDate()+0
return s},
Bb(a){var s=A.hl(a).getUTCHours()+0
return s},
FD(a){var s=A.hl(a).getUTCMinutes()+0
return s},
FF(a){var s=A.hl(a).getUTCSeconds()+0
return s},
FC(a){var s=A.hl(a).getUTCMilliseconds()+0
return s},
FB(a){var s=a.$thrownJsError
if(s==null)return null
return A.cZ(s)},
Bd(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
xZ(a){throw A.b(A.xM(a))},
d(a,b){if(a==null)J.cD(a)
throw A.b(A.xT(a,b))},
xT(a,b){var s,r="index"
if(!A.b_(b))return new A.cF(!0,b,r,null)
s=A.h(J.cD(a))
if(b<0||b>=s)return A.ql(b,s,a,r)
return A.Bf(b,r)},
JD(a,b,c){if(a>c)return A.b2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b2(b,a,c,"end",null)
return new A.cF(!0,b,"end",null)},
xM(a){return new A.cF(!0,a,null,null)},
b(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dT()
b.dartException=a
s=A.Kb
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Kb(){return J.c3(this.dartException)},
f(a,b){throw A.aR(a,b==null?new Error():b)},
aV(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.HK(a,b,c),s)},
HK(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.j4("'"+s+"': Cannot "+o+" "+l+k+n)},
w(a){throw A.b(A.aD(a))},
dU(a){var s,r,q,p,o,n
a=A.Dt(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uy(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uz(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Bv(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
yV(a,b){var s=b==null,r=s?null:b.method
return new A.l8(a,r,s?null:b.receiver)},
ah(a){var s
if(a==null)return new A.ro(a)
if(a instanceof A.ih){s=a.a
return A.eU(a,s==null?A.fH(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eU(a,a.dartException)
return A.J4(a)},
eU(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
J4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.e3(r,16)&8191)===10)switch(q){case 438:return A.eU(a,A.yV(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.eU(a,new A.iH())}}if(a instanceof TypeError){p=$.DD()
o=$.DE()
n=$.DF()
m=$.DG()
l=$.DJ()
k=$.DK()
j=$.DI()
$.DH()
i=$.DM()
h=$.DL()
g=p.b6(s)
if(g!=null)return A.eU(a,A.yV(A.u(s),g))
else{g=o.b6(s)
if(g!=null){g.method="call"
return A.eU(a,A.yV(A.u(s),g))}else if(n.b6(s)!=null||m.b6(s)!=null||l.b6(s)!=null||k.b6(s)!=null||j.b6(s)!=null||m.b6(s)!=null||i.b6(s)!=null||h.b6(s)!=null){A.u(s)
return A.eU(a,new A.iH())}}return A.eU(a,new A.m1(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.j_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eU(a,new A.cF(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.j_()
return a},
cZ(a){var s
if(a instanceof A.ih)return a.b
if(a==null)return new A.jy(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jy(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nw(a){if(a==null)return J.aN(a)
if(typeof a=="object")return A.iO(a)
return J.aN(a)},
Jv(a){if(typeof a=="number")return B.b.gU(a)
if(a instanceof A.n2)return A.iO(a)
if(a instanceof A.bj)return a.gU(a)
return A.nw(a)},
Df(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
JI(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
I9(a,b,c,d,e,f){t.BO.a(a)
switch(A.h(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.vl("Unsupported number of arguments for wrapped closure"))},
hZ(a,b){var s=a.$identity
if(!!s)return s
s=A.Jx(a,b)
a.$identity=s
return s},
Jx(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.I9)},
Er(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lX().constructor.prototype):Object.create(new A.fQ(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Ay(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.En(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Ay(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
En(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ei)}throw A.b("Error in functionType of tearoff")},
Eo(a,b,c,d){var s=A.Aw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Ay(a,b,c,d){if(c)return A.Eq(a,b,d)
return A.Eo(b.length,d,a,b)},
Ep(a,b,c,d){var s=A.Aw,r=A.Ej
switch(b?-1:a){case 0:throw A.b(new A.lL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Eq(a,b,c){var s,r
if($.Au==null)$.Au=A.At("interceptor")
if($.Av==null)$.Av=A.At("receiver")
s=b.length
r=A.Ep(s,c,a,b)
return r},
A1(a){return A.Er(a)},
Ei(a,b){return A.jC(v.typeUniverse,A.cj(a.a),b)},
Aw(a){return a.a},
Ej(a){return a.b},
At(a){var s,r,q,p=new A.fQ("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.p("Field name "+a+" not found.",null))},
xW(a){return v.getIsolateTag(a)},
Dx(){return v.G},
L6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
JR(a){var s,r,q,p,o,n=A.u($.Dk.$1(a)),m=$.xU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.y2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aq($.Da.$2(a,n))
if(q!=null){m=$.xU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.y2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.yx(s)
$.xU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.y2[n]=s
return s}if(p==="-"){o=A.yx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Dr(a,s)
if(p==="*")throw A.b(A.Bw(n))
if(v.leafTags[n]===true){o=A.yx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Dr(a,s)},
Dr(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.A6(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
yx(a){return J.A6(a,!1,null,!!a.$ic5)},
JT(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.yx(s)
else return J.A6(s,c,null,null)},
JL(){if(!0===$.A4)return
$.A4=!0
A.JM()},
JM(){var s,r,q,p,o,n,m,l
$.xU=Object.create(null)
$.y2=Object.create(null)
A.JK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ds.$1(o)
if(n!=null){m=A.JT(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
JK(){var s,r,q,p,o,n,m=B.f7()
m=A.hY(B.f8,A.hY(B.f9,A.hY(B.cu,A.hY(B.cu,A.hY(B.fa,A.hY(B.fb,A.hY(B.fc(B.ct),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Dk=new A.y_(p)
$.Da=new A.y0(o)
$.Ds=new A.y1(n)},
hY(a,b){return a(b)||b},
GS(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
Jz(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
AU(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
K5(a,b,c){var s=a.indexOf(b,c)
return s>=0},
JG(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Dt(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yH(a,b,c){var s=A.K6(a,b,c)
return s},
K6(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Dt(b),"g"),A.JG(c))},
a5:function a5(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
ib:function ib(a,b){this.a=a
this.$ti=b},
fW:function fW(){},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fz:function fz(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d4:function d4(a,b){this.a=a
this.$ti=b},
fX:function fX(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b){this.a=a
this.$ti=b},
rT:function rT(a){this.a=a},
iV:function iV(){},
uy:function uy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iH:function iH(){},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function m1(a){this.a=a},
ro:function ro(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a
this.b=null},
em:function em(){},
kq:function kq(){},
kr:function kr(){},
lZ:function lZ(){},
lX:function lX(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
lL:function lL(a){this.a=a},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qF:function qF(a){this.a=a},
qP:function qP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ao:function ao(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d){var _=this
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
f7:function f7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
y_:function y_(a){this.a=a},
y0:function y0(a){this.a=a},
y1:function y1(a){this.a=a},
bj:function bj(){},
e_:function e_(){},
e0:function e0(){},
hC:function hC(){},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mI:function mI(a){this.b=a},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
mo:function mo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j1:function j1(a,b){this.a=a
this.c=b},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
K8(a){throw A.aR(A.AX(a),new Error())},
t(){throw A.aR(A.a9(""),new Error())},
b6(){throw A.aR(A.Fh(""),new Error())},
nx(){throw A.aR(A.AX(""),new Error())},
ak(){var s=new A.vk()
return s.b=s},
vk:function vk(){this.b=null},
wk(a,b,c){},
R(a){return a},
Fq(a,b,c){A.wk(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
Fr(a){return new Int8Array(a)},
Fs(a){return new Uint8Array(a)},
lq(a){return new Uint8Array(A.R(a))},
B7(a,b,c){A.wk(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e4(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.xT(b,a))},
zu(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.JD(a,b,c))
return b},
ev:function ev(){},
hi:function hi(){},
iF:function iF(){},
w6:function w6(a){this.a=a},
lj:function lj(){},
bq:function bq(){},
iD:function iD(){},
iE:function iE(){},
iC:function iC(){},
lk:function lk(){},
ll:function ll(){},
lm:function lm(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
fb:function fb(){},
iG:function iG(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
z5(a,b){var s=b.c
return s==null?b.c=A.jA(a,"aS",[b.x]):s},
Bk(a){var s=a.w
if(s===6||s===7)return A.Bk(a.x)
return s===11||s===12},
FR(a){return a.as},
JU(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.w5(v.typeUniverse,a,!1)},
fJ(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fJ(a1,s,a3,a4)
if(r===s)return a2
return A.C1(a1,r,!0)
case 7:s=a2.x
r=A.fJ(a1,s,a3,a4)
if(r===s)return a2
return A.C0(a1,r,!0)
case 8:q=a2.y
p=A.hW(a1,q,a3,a4)
if(p===q)return a2
return A.jA(a1,a2.x,p)
case 9:o=a2.x
n=A.fJ(a1,o,a3,a4)
m=a2.y
l=A.hW(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zh(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hW(a1,j,a3,a4)
if(i===j)return a2
return A.C2(a1,k,i)
case 11:h=a2.x
g=A.fJ(a1,h,a3,a4)
f=a2.y
e=A.J0(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.C_(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hW(a1,d,a3,a4)
o=a2.x
n=A.fJ(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zi(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kf("Attempted to substitute unexpected RTI kind "+a0))}},
hW(a,b,c,d){var s,r,q,p,o=b.length,n=A.wb(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fJ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
J1(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.wb(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fJ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
J0(a,b,c,d){var s,r=b.a,q=A.hW(a,r,c,d),p=b.b,o=A.hW(a,p,c,d),n=b.c,m=A.J1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mB()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
A2(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.JJ(s)
return a.$S()}return null},
JN(a,b){var s
if(A.Bk(b))if(a instanceof A.em){s=A.A2(a)
if(s!=null)return s}return A.cj(a)},
cj(a){if(a instanceof A.L)return A.v(a)
if(Array.isArray(a))return A.B(a)
return A.zC(J.eT(a))},
B(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
v(a){var s=a.$ti
return s!=null?s:A.zC(a)},
zC(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.I6(a,s)},
I6(a,b){var s=a instanceof A.em?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.H1(v.typeUniverse,s.name)
b.$ccache=r
return r},
JJ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.w5(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
A3(a){return A.dr(A.v(a))},
zY(a){var s
if(a instanceof A.bj)return a.fK()
s=a instanceof A.em?A.A2(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eV(a).a
if(Array.isArray(a))return A.B(a)
return A.cj(a)},
dr(a){var s=a.r
return s==null?a.r=new A.n2(a):s},
JH(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jC(v.typeUniverse,A.zY(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.C4(v.typeUniverse,s,A.zY(q[r]))}return A.jC(v.typeUniverse,s,a)},
cA(a){return A.dr(A.w5(v.typeUniverse,a,!1))},
I5(a){var s=this
s.b=A.IW(s)
return s.b(a)},
IW(a){var s,r,q,p,o
if(a===t.K)return A.If
if(A.fK(a))return A.Il
s=a.w
if(s===6)return A.HY
if(s===1)return A.CI
if(s===7)return A.Ia
r=A.IU(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fK)){a.f="$i"+q
if(q==="J")return A.Id
if(a===t.m)return A.Ic
return A.Ik}}else if(s===10){p=A.Jz(a.x,a.y)
o=p==null?A.CI:p
return o==null?A.fH(o):o}return A.HW},
IU(a){if(a.w===8){if(a===t.S)return A.b_
if(a===t.i||a===t.J)return A.Ie
if(a===t.N)return A.Ij
if(a===t.y)return A.bx}return null},
I4(a){var s=this,r=A.HV
if(A.fK(s))r=A.Hq
else if(s===t.K)r=A.fH
else if(A.i0(s)){r=A.HX
if(s===t.lo)r=A.zo
else if(s===t.dR)r=A.aq
else if(s===t.k7)r=A.Co
else if(s===t.s7)r=A.zp
else if(s===t.u6)r=A.Cp
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.h
else if(s===t.N)r=A.u
else if(s===t.y)r=A.T
else if(s===t.J)r=A.a1
else if(s===t.i)r=A.aB
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
HW(a){var s=this
if(a==null)return A.i0(s)
return A.Dn(v.typeUniverse,A.JN(a,s),s)},
HY(a){if(a==null)return!0
return this.x.b(a)},
Ik(a){var s,r=this
if(a==null)return A.i0(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eT(a)[s]},
Id(a){var s,r=this
if(a==null)return A.i0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eT(a)[s]},
Ic(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
CH(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
HV(a){var s=this
if(a==null){if(A.i0(s))return a}else if(s.b(a))return a
throw A.aR(A.Cu(a,s),new Error())},
HX(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.Cu(a,s),new Error())},
Cu(a,b){return new A.hG("TypeError: "+A.BU(a,A.bR(b,null)))},
Dd(a,b,c,d){if(A.Dn(v.typeUniverse,a,b))return a
throw A.aR(A.GU("The type argument '"+A.bR(a,null)+"' is not a subtype of the type variable bound '"+A.bR(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
BU(a,b){return A.kI(a)+": type '"+A.bR(A.zY(a),null)+"' is not a subtype of type '"+b+"'"},
GU(a){return new A.hG("TypeError: "+a)},
cy(a,b){return new A.hG("TypeError: "+A.BU(a,b))},
Ia(a){var s=this
return s.x.b(a)||A.z5(v.typeUniverse,s).b(a)},
If(a){return a!=null},
fH(a){if(a!=null)return a
throw A.aR(A.cy(a,"Object"),new Error())},
Il(a){return!0},
Hq(a){return a},
CI(a){return!1},
bx(a){return!0===a||!1===a},
T(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cy(a,"bool"),new Error())},
Co(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cy(a,"bool?"),new Error())},
aB(a){if(typeof a=="number")return a
throw A.aR(A.cy(a,"double"),new Error())},
Cp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cy(a,"double?"),new Error())},
b_(a){return typeof a=="number"&&Math.floor(a)===a},
h(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cy(a,"int"),new Error())},
zo(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cy(a,"int?"),new Error())},
Ie(a){return typeof a=="number"},
a1(a){if(typeof a=="number")return a
throw A.aR(A.cy(a,"num"),new Error())},
zp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cy(a,"num?"),new Error())},
Ij(a){return typeof a=="string"},
u(a){if(typeof a=="string")return a
throw A.aR(A.cy(a,"String"),new Error())},
aq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cy(a,"String?"),new Error())},
a(a){if(A.CH(a))return a
throw A.aR(A.cy(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.CH(a))return a
throw A.aR(A.cy(a,"JSObject?"),new Error())},
D_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bR(a[q],b)
return s},
IH(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.D_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bR(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Cy(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.J3(a.x)
o=a.y
return o.length>0?p+("<"+A.D_(o,b)+">"):p}if(l===10)return A.IH(a,b)
if(l===11)return A.Cy(a,b,null)
if(l===12)return A.Cy(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
J3(a){var s=A.Dy(a)
if(s!=null)return s
return"minified:"+a},
H2(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
H1(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.w5(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jB(a,5,"#")
q=A.wb(s)
for(p=0;p<s;++p)q[p]=r
o=A.jA(a,b,q)
n[b]=o
return o}else return m},
H0(a,b){return A.Cc(a.tR,b)},
H_(a,b){return A.Cc(a.eT,b)},
w5(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.C3(a,null,b,!1)
r.set(b,s)
return s},
jC(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.C3(a,b,c,!0)
q.set(c,r)
return r},
C4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zh(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
C3(a,b,c,d){return A.GQ(A.GK(a,b,c,d))},
eK(a,b){b.a=A.I4
b.b=A.I5
return b},
jB(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cS(null,null)
s.w=b
s.as=c
r=A.eK(a,s)
a.eC.set(c,r)
return r},
C1(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.GY(a,b,r,c)
a.eC.set(r,s)
return s},
GY(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fK(b))if(!(b===t.c||b===t.E))if(s!==6)r=s===7&&A.i0(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cS(null,null)
q.w=6
q.x=b
q.as=c
return A.eK(a,q)},
C0(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.GW(a,b,r,c)
a.eC.set(r,s)
return s},
GW(a,b,c,d){var s,r
if(d){s=b.w
if(A.fK(b)||b===t.K)return b
else if(s===1)return A.jA(a,"aS",[b])
else if(b===t.c||b===t.E)return t.eZ}r=new A.cS(null,null)
r.w=7
r.x=b
r.as=c
return A.eK(a,r)},
GZ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=13
s.x=b
s.as=q
r=A.eK(a,s)
a.eC.set(q,r)
return r},
jz(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
GV(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jA(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jz(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cS(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eK(a,r)
a.eC.set(p,q)
return q},
zh(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jz(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cS(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eK(a,o)
a.eC.set(q,n)
return n},
C2(a,b,c){var s,r,q="+"+(b+"("+A.jz(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eK(a,s)
a.eC.set(q,r)
return r},
C_(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jz(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jz(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.GV(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cS(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eK(a,p)
a.eC.set(r,o)
return o},
zi(a,b,c,d){var s,r=b.as+("<"+A.jz(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.GX(a,b,c,r,d)
a.eC.set(r,s)
return s},
GX(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.wb(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fJ(a,b,r,0)
m=A.hW(a,c,r,0)
return A.zi(a,n,m,c!==m)}}l=new A.cS(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eK(a,l)},
GK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
GQ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.GM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.BX(a,r,l,k,!1)
else if(q===46)r=A.BX(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fC(a.u,a.e,k.pop()))
break
case 94:k.push(A.GZ(a.u,k.pop()))
break
case 35:k.push(A.jB(a.u,5,"#"))
break
case 64:k.push(A.jB(a.u,2,"@"))
break
case 126:k.push(A.jB(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.GO(a,k)
break
case 38:A.GN(a,k)
break
case 63:p=a.u
k.push(A.C1(p,A.fC(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.C0(p,A.fC(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.GL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.BY(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.GR(a.u,a.e,o)
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
return A.fC(a.u,a.e,m)},
GM(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
BX(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.H2(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.FR(o)+'"')
d.push(A.jC(s,o,n))}else d.push(p)
return m},
GO(a,b){var s,r=a.u,q=A.BW(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jA(r,p,q))
else{s=A.fC(r,a.e,p)
switch(s.w){case 11:b.push(A.zi(r,s,q,a.n))
break
default:b.push(A.zh(r,s,q))
break}}},
GL(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.BW(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fC(p,a.e,o)
q=new A.mB()
q.a=s
q.b=n
q.c=m
b.push(A.C_(p,r,q))
return
case-4:b.push(A.C2(p,b.pop(),s))
return
default:throw A.b(A.kf("Unexpected state under `()`: "+A.y(o)))}},
GN(a,b){var s=b.pop()
if(0===s){b.push(A.jB(a.u,1,"0&"))
return}if(1===s){b.push(A.jB(a.u,4,"1&"))
return}throw A.b(A.kf("Unexpected extended operation "+A.y(s)))},
BW(a,b){var s=b.splice(a.p)
A.BY(a.u,a.e,s)
a.p=b.pop()
return s},
fC(a,b,c){if(typeof c=="string")return A.jA(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.GP(a,b,c)}else return c},
BY(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fC(a,b,c[s])},
GR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fC(a,b,c[s])},
GP(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kf("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kf("Bad index "+c+" for "+b.t(0)))},
Dn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b5(a,b,null,c,null)
r.set(c,s)}return s},
b5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fK(d))return!0
s=b.w
if(s===4)return!0
if(A.fK(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b5(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.E){if(q===7)return A.b5(a,b,c,d.x,e)
return d===p||d===t.E||q===6}if(d===t.K){if(s===7)return A.b5(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b5(a,b.x,c,d,e))return!1
return A.b5(a,A.z5(a,b),c,d,e)}if(s===6)return A.b5(a,p,c,d,e)&&A.b5(a,b.x,c,d,e)
if(q===7){if(A.b5(a,b,c,d.x,e))return!0
return A.b5(a,b,c,A.z5(a,d),e)}if(q===6)return A.b5(a,b,c,p,e)||A.b5(a,b,c,d.x,e)
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
if(!A.b5(a,j,c,i,e)||!A.b5(a,i,e,j,c))return!1}return A.CG(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.CG(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ib(a,b,c,d,e)}if(o&&q===10)return A.Ig(a,b,c,d,e)
return!1},
CG(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Ib(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jC(a,b,r[o])
return A.Cm(a,p,null,c,d.y,e)}return A.Cm(a,b.y,null,c,d.y,e)},
Cm(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b5(a,b[s],d,e[s],f))return!1
return!0},
Ig(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b5(a,r[s],c,q[s],e))return!1
return!0},
i0(a){var s=a.w,r=!0
if(!(a===t.c||a===t.E))if(!A.fK(a))if(s!==6)r=s===7&&A.i0(a.x)
return r},
fK(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Cc(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
wb(a){return a>0?new Array(a):v.typeUniverse.sEA},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mB:function mB(){this.c=this.b=this.a=null},
n2:function n2(a){this.a=a},
mz:function mz(){},
hG:function hG(a){this.a=a},
GC(){var s,r,q
if(self.scheduleImmediate!=null)return A.Jl()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hZ(new A.vg(s),1)).observe(r,{childList:true})
return new A.vf(s,r,q)}else if(self.setImmediate!=null)return A.Jm()
return A.Jn()},
GD(a){self.scheduleImmediate(A.hZ(new A.vh(t.O.a(a)),0))},
GE(a){self.setImmediate(A.hZ(new A.vi(t.O.a(a)),0))},
GF(a){A.z9(B.fG,t.O.a(a))},
z9(a,b){return A.GT(a.a/1000|0,b)},
GT(a,b){var s=new A.w2()
s.jH(a,b)
return s},
aL(a){return new A.mp(new A.as($.ar,a.i("as<0>")),a.i("mp<0>"))},
aK(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.Ht(a,b)},
aJ(a,b){b.e8(a)},
aI(a,b){b.e9(A.ah(a),A.cZ(a))},
Ht(a,b){var s,r,q=new A.wh(b),p=new A.wi(b)
if(a instanceof A.as)a.hd(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.eK(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.hd(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.io(new A.xL(s),t.H,t.S,t.z)},
BZ(a,b,c){return 0},
nQ(a){var s
if(t.yt.b(a)){s=a.gc_()
if(s!=null)return s}return B.aG},
AH(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.dK(null)
return s},
EV(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.Bu(a,new A.pr(b,s,c))
return s},
ps(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<J<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pu(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gq()
q=i.b
r.eK(new A.pt(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cG(A.c([],b.i("x<0>")))
return n}i.a=A.d9(n,null,!1,b.i("0?"))}catch(l){p=A.ah(l)
o=A.cZ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.zD(m,k)
m=new A.bn(m,k==null?A.nQ(m):k)
n.cE(m)
return n}else{i.d=p
i.c=o}}return f},
zD(a,b){if($.ar===B.C)return null
return null},
I7(a,b){if($.ar!==B.C)A.zD(a,b)
if(b==null)if(t.yt.b(a)){b=a.gc_()
if(b==null){A.Bd(a,B.aG)
b=B.aG}}else b=B.aG
else if(t.yt.b(a))A.Bd(a,b)
return new A.bn(a,b)},
GG(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
vq(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.G3()
b.cE(new A.bn(new A.cF(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fV(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c6()
b.cF(o.a)
A.fx(b,p)
return}b.a^=2
A.nn(null,null,b.b,t.O.a(new A.vr(o,b)))},
fx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.zQ(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fx(d.a,c)
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
A.zQ(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.vv(q,d,n).$0()
else if(o){if((c&1)!==0)new A.vu(q,j).$0()}else if((c&2)!==0)new A.vt(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("aS<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cO(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vq(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cO(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
CU(a,b){var s
if(t.nW.b(a))return b.io(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.a7(a,"onError",u.c))},
Iv(){var s,r
for(s=$.hR;s!=null;s=$.hR){$.jX=null
r=s.b
$.hR=r
if(r==null)$.jW=null
s.a.$0()}},
IZ(){$.zE=!0
try{A.Iv()}finally{$.jX=null
$.zE=!1
if($.hR!=null)$.Ae().$1(A.Db())}},
D2(a){var s=new A.mq(a),r=$.jW
if(r==null){$.hR=$.jW=s
if(!$.zE)$.Ae().$1(A.Db())}else $.jW=r.b=s},
IR(a){var s,r,q,p=$.hR
if(p==null){A.D2(a)
$.jX=$.jW
return}s=new A.mq(a)
r=$.jX
if(r==null){s.b=p
$.hR=$.jX=s}else{q=r.b
s.b=q
$.jX=r.b=s
if(q==null)$.jW=s}},
Ks(a,b){A.e6(a,"stream",t.K)
return new A.mY(b.i("mY<0>"))},
Bu(a,b){var s=$.ar
if(s===B.C)return A.z9(a,t.O.a(b))
return A.z9(a,t.O.a(s.hu(b)))},
zQ(a,b){A.IR(new A.xu(a,b))},
CZ(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
IO(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
IN(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
nn(a,b,c,d){t.O.a(d)
if(B.C!==c){d=c.hu(d)
d=d}A.D2(d)},
vg:function vg(a){this.a=a},
vf:function vf(a,b,c){this.a=a
this.b=b
this.c=c},
vh:function vh(a){this.a=a},
vi:function vi(a){this.a=a},
w2:function w2(){},
w3:function w3(a,b){this.a=a
this.b=b},
mp:function mp(a,b){this.a=a
this.b=!1
this.$ti=b},
wh:function wh(a){this.a=a},
wi:function wi(a){this.a=a},
xL:function xL(a){this.a=a},
cf:function cf(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bI:function bI(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.b=b},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pt:function pt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mt:function mt(){},
jc:function jc(a,b){this.a=a
this.$ti=b},
dY:function dY(a,b,c,d,e){var _=this
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
vn:function vn(a,b){this.a=a
this.b=b},
vs:function vs(a,b){this.a=a
this.b=b},
vr:function vr(a,b){this.a=a
this.b=b},
vp:function vp(a,b){this.a=a
this.b=b},
vo:function vo(a,b){this.a=a
this.b=b},
vv:function vv(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(a,b){this.a=a
this.b=b},
vx:function vx(a){this.a=a},
vu:function vu(a,b){this.a=a
this.b=b},
vt:function vt(a,b){this.a=a
this.b=b},
mq:function mq(a){this.a=a
this.b=null},
mY:function mY(a){this.$ti=a},
jK:function jK(){},
mR:function mR(){},
w0:function w0(a,b){this.a=a
this.b=b},
xu:function xu(a,b){this.a=a
this.b=b},
BV(a,b){var s=a[b]
return s===a?null:s},
zf(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ze(){var s=Object.create(null)
A.zf(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
AZ(a,b){return new A.cp(a.i("@<0>").S(b).i("cp<1,2>"))},
E(a,b,c){return b.i("@<0>").S(c).i("yW<1,2>").a(A.Df(a,new A.cp(b.i("@<0>").S(c).i("cp<1,2>"))))},
n(a,b){return new A.cp(a.i("@<0>").S(b).i("cp<1,2>"))},
yX(a){return new A.cx(a.i("cx<0>"))},
a_(a){return new A.cx(a.i("cx<0>"))},
aF(a,b){return b.i("B_<0>").a(A.JI(a,new A.cx(b.i("cx<0>"))))},
zg(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fB(a,b,c){var s=new A.fA(a,b,c.i("fA<0>"))
s.c=a.e
return s},
bK(a,b){var s=J.O(a)
if(s.m())return s.gq()
return null},
aZ(a,b,c){var s=A.AZ(b,c)
a.aJ(0,new A.qQ(s,b,c))
return s},
hd(a,b,c){var s=A.AZ(b,c)
s.L(0,a)
return s},
he(a,b){var s,r=A.yX(b)
for(s=J.O(a);s.m();)r.k(0,b.a(s.gq()))
return r},
f8(a,b){var s=A.yX(b)
s.L(0,a)
return s},
yZ(a){var s,r
if(A.A5(a))return"{...}"
s=new A.bE("")
try{r={}
B.a.k($.ci,a)
s.a+="{"
r.a=!0
a.aJ(0,new A.qT(r,s))
s.a+="}"}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
H3(){throw A.b(A.bu("Cannot change an unmodifiable set"))},
jh:function jh(){},
vz:function vz(a){this.a=a},
jj:function jj(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fy:function fy(a,b){this.a=a
this.$ti=b},
ji:function ji(a,b,c){var _=this
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
mH:function mH(a){this.a=a
this.c=this.b=null},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
af:function af(){},
qS:function qS(a){this.a=a},
qT:function qT(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.$ti=b},
jl:function jl(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jD:function jD(){},
hf:function hf(){},
eA:function eA(a,b){this.a=a
this.$ti=b},
df:function df(){},
jx:function jx(){},
n3:function n3(){},
hz:function hz(a,b){this.a=a
this.$ti=b},
hH:function hH(){},
jE:function jE(){},
IA(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.M(String(s),null,null)
throw A.b(q)}q=A.wL(p)
return q},
wL(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mF(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.wL(a[s])
return a},
Hk(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.DR()
else s=new Uint8Array(o)
for(r=J.aQ(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Hj(a,b,c,d){var s=a?$.DQ():$.DP()
if(s==null)return null
if(0===c&&d===b.length)return A.Cb(s,b)
return A.Cb(s,b.subarray(c,d))},
Cb(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
As(a,b,c,d,e,f){if(B.d.R(f,4)!==0)throw A.b(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
AW(a,b,c){return new A.iw(a,b)},
HJ(a){return a.C()},
GH(a,b){return new A.vC(a,[],A.Jy())},
GI(a,b,c){var s,r=new A.bE(""),q=A.GH(r,b)
q.dA(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Hl(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mF:function mF(a,b){this.a=a
this.b=b
this.c=null},
vB:function vB(a){this.a=a},
mG:function mG(a){this.a=a},
w9:function w9(){},
w8:function w8(){},
kc:function kc(){},
w4:function w4(){},
kd:function kd(a,b){this.a=a
this.b=b},
kk:function kk(){},
ou:function ou(){},
en:function en(){},
kv:function kv(){},
kH:function kH(){},
iw:function iw(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b},
l9:function l9(){},
qH:function qH(a){this.b=a},
qG:function qG(a){this.a=a},
vD:function vD(){},
vE:function vE(a,b){this.a=a
this.b=b},
vC:function vC(a,b,c){this.c=a
this.a=b
this.b=c},
m5:function m5(){},
uG:function uG(){},
wa:function wa(a){this.b=0
this.c=a},
uF:function uF(a){this.a=a},
w7:function w7(a){this.a=a
this.b=16
this.c=0},
Dm(a){var s=A.dL(a,null)
if(s!=null)return s
throw A.b(A.M(a,null,null))},
nr(a){var s=A.fd(a)
if(s!=null)return s
throw A.b(A.M("Invalid double",a,null))},
ER(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fH(a)
a.stack=b.t(0)
throw a},
d9(a,b,c,d){var s,r=c?J.AQ(a,d):J.AP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aG(a,b,c){var s,r=A.c([],c.i("x<0>"))
for(s=J.O(a);s.m();)B.a.k(r,c.a(s.gq()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("x<0>"))
s=A.c([],b.i("x<0>"))
for(r=J.O(a);r.m();)B.a.k(s,r.gq())
return s},
ad(a,b){var s=A.aG(a,!1,b)
s.$flags=3
return s},
z8(a,b,c){var s,r
A.lG(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.b2(c,b,null,"end",null))
if(s===0)return""}r=A.G6(a,b,c)
return r},
G6(a,b,c){var s=a.length
if(b>=s)return""
return A.FI(a,b,c==null||c>s?s:c)},
iQ(a){return new A.iu(a,A.AU(a,!1,!0,!1,!1,""))},
z7(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gq())
while(s.m())}else{a+=A.y(s.gq())
while(s.m())a=a+c+A.y(s.gq())}return a},
dV(){var s,r,q=A.Fz()
if(q==null)throw A.b(A.bu("'Uri.base' is not supported"))
s=$.Bz
if(s!=null&&q===$.By)return s
r=A.Gc(q)
$.Bz=r
$.By=q
return r},
G3(){return A.cZ(new Error())},
Ex(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
AA(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
kx(a){if(a>=10)return""+a
return"0"+a},
EQ(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.a7(b,"name","No enum value with that name"))},
kI(a){if(typeof a=="number"||A.bx(a)||a==null)return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Bc(a)},
ES(a,b){A.e6(a,"error",t.K)
A.e6(b,"stackTrace",t.l)
A.ER(a,b)},
kf(a){return new A.ke(a)},
p(a,b){return new A.cF(!1,null,b,a)},
a7(a,b,c){return new A.cF(!0,a,b,c)},
Be(a){var s=null
return new A.hm(s,s,!1,s,s,a)},
Bf(a,b){return new A.hm(null,null,!0,a,b,"Value not in range")},
b2(a,b,c,d,e){return new A.hm(b,c,!0,a,d,"Invalid value")},
ff(a,b,c){if(0>a||a>c)throw A.b(A.b2(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b2(b,a,c,"end",null))
return b}return c},
lG(a,b){if(a<0)throw A.b(A.b2(a,0,null,b,null))
return a},
ql(a,b,c,d){return new A.l0(b,!0,a,d,"Index out of range")},
bu(a){return new A.j4(a)},
Bw(a){return new A.m0(a)},
i(a){return new A.ht(a)},
aD(a){return new A.ks(a)},
M(a,b,c){return new A.A(a,b,c)},
Fc(a,b,c){var s,r
if(A.A5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.ci,a)
try{A.Im(a,s)}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}r=A.z7(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
yT(a,b,c){var s,r
if(A.A5(a))return b+"..."+c
s=new A.bE(b)
B.a.k($.ci,a)
try{r=s
r.a=A.z7(r.a,a,", ")}finally{if(0>=$.ci.length)return A.d($.ci,-1)
$.ci.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Im(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gq())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.m()){if(j<=4){B.a.k(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.m();p=o,o=n){n=l.gq();++j
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
z_(a,b,c){var s=A.n(b,c)
s.lD(a)
return s},
cP(a,b,c,d,e,f){var s
if(B.h===c){s=J.aN(a)
b=J.aN(b)
return A.j3(A.b4(A.b4($.i1(),s),b))}if(B.h===d){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
return A.j3(A.b4(A.b4(A.b4($.i1(),s),b),c))}if(B.h===e){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
return A.j3(A.b4(A.b4(A.b4(A.b4($.i1(),s),b),c),d))}if(B.h===f){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
return A.j3(A.b4(A.b4(A.b4(A.b4(A.b4($.i1(),s),b),c),d),e))}s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
f=J.aN(f)
f=A.j3(A.b4(A.b4(A.b4(A.b4(A.b4(A.b4($.i1(),s),b),c),d),e),f))
return f},
Ft(a){var s,r,q=$.i1()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r)q=A.b4(q,J.aN(a[r]))
return A.j3(q)},
fk(a,b){return new A.hz(A.f8(a,b),b.i("hz<0>"))},
Gc(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Bx(a4<a4?B.c.J(a5,0,a4):a5,5,a3).gix()
else if(s===32)return A.Bx(B.c.J(a5,5,a4),0,a3).gix()}r=A.d9(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.D1(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.D1(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.aq(a5,"\\",n))if(p>0)h=B.c.aq(a5,"\\",p-1)||B.c.aq(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.aq(a5,"..",n)))h=m>n+2&&B.c.aq(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.aq(a5,"file",0)){if(p<=0){if(!B.c.aq(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.J(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.bW(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.aq(a5,"http",0)){if(i&&o+3===n&&B.c.aq(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.bW(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.aq(a5,"https",0)){if(i&&o+4===n&&B.c.aq(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.bW(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.mV(a4<a5.length?B.c.J(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Hd(a5,0,q)
else{if(q===0)A.hI(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.He(a5,c,p-1):""
a=A.H9(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dL(B.c.J(a5,i,n),a3)
d=A.Hb(a0==null?A.f(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Ha(a5,n,m,a3,j,a!=null)
a2=m<l?A.Hc(a5,m+1,l,a3):a3
return A.H4(j,b,a,d,a1,a2,l<a4?A.H8(a5,l+1,a4):a3)},
BB(a){var s=t.N
return B.a.bc(A.c(a.split("&"),t.s),A.n(s,s),new A.uE(B.cw),t.G)},
m4(a,b,c){throw A.b(A.M("Illegal IPv4 address, "+a,b,c))},
G9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.m4("each part must be in the range 0..255",a,r)}A.m4("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.m4(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aV(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.m4(j,a,q)
p=l}A.m4("IPv4 address should contain exactly 4 parts",a,q)},
Ga(a,b,c){var s
if(b===c)throw A.b(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Gb(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.BA(a,b,c)
return!0},
Gb(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
BA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uD(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.G9(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.e3(l,8)
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
B.a1.iX(s,a0,16,s,a)
B.a1.nb(s,a,a0,0)}}return s},
H4(a,b,c,d,e,f,g){return new A.jF(a,b,c,d,e,f,g)},
C5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hI(a,b,c){throw A.b(A.M(c,a,b))},
Hb(a,b){var s=A.C5(b)
if(a===s)return null
return a},
H9(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hI(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.H6(a,q,r)
if(o<r){n=o+1
p=A.Ca(a,B.c.aq(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Ga(a,q,o)
l=B.c.J(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.de(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Ca(a,B.c.aq(a,"25",n)?o+3:n,c,"%25")}else p=""
A.BA(a,b,o)
return"["+B.c.J(a,b,o)+p+"]"}}return A.Hg(a,b,c)},
H6(a,b,c){var s=B.c.de(a,"%",b)
return s>=b&&s<c?s:c},
Ca(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bE(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.zk(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bE("")
l=h.a+=B.c.J(a,q,r)
if(m)n=B.c.J(a,r,r+3)
else if(n==="%")A.hI(a,r,"ZoneID should not contain % anymore")
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
l=A.zj(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.J(a,b,c)
if(q<c){i=B.c.J(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Hg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.zk(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hI(a,r,"Invalid character")
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
j=A.zj(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.J(a,b,c)
if(q<c){k=B.c.J(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Hd(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.C7(a.charCodeAt(b)))A.hI(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hI(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.J(a,b,c)
return A.H5(q?a.toLowerCase():a)},
H5(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
He(a,b,c){return A.jG(a,b,c,16,!1,!1)},
Ha(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jG(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.V(q,"/"))q="/"+q
return A.Hf(q,e,f)},
Hf(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.V(a,"/")&&!B.c.V(a,"\\"))return A.Hh(a,!s||c)
return A.Hi(a)},
Hc(a,b,c,d){return A.jG(a,b,c,256,!0,!1)},
H8(a,b,c){return A.jG(a,b,c,256,!0,!1)},
zk(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.xY(r)
o=A.xY(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ay(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.J(a,b,b+3).toUpperCase()
return null},
zj(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.lj(a,6*p)&63|q
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
o+=3}}return A.z8(s,0,null)},
jG(a,b,c,d,e,f){var s=A.C9(a,b,c,d,e,f)
return s==null?B.c.J(a,b,c):s},
C9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.zk(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hI(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.zj(n)}if(o==null){o=new A.bE("")
k=o}else k=o
k.a=(k.a+=B.c.J(a,p,q))+l
if(typeof m!=="number")return A.xZ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.J(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
C8(a){if(B.c.V(a,"."))return!0
return B.c.bC(a,"/.")!==-1},
Hi(a){var s,r,q,p,o,n,m
if(!A.C8(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.W(s,"/")},
Hh(a,b){var s,r,q,p,o,n
if(!A.C8(a))return!b?A.C6(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga6(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.C6(s[0]))}return B.a.W(s,"/")},
C6(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.C7(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.J(a,0,s)+"%3A"+B.c.aQ(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
H7(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.p("Invalid URL encoding",null))}}return r},
zl(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cw===d)return B.c.J(a,b,c)
else p=new A.dw(B.c.J(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.p("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.p("Truncated URI",null))
B.a.k(p,A.H7(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.oB.by(p)},
C7(a){var s=a|32
return 97<=s&&s<=122},
Bx(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.M(k,a,r))}}if(q<0&&r>b)throw A.b(A.M(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.ga6(j)
if(p!==44||r!==n+7||!B.c.aq(a,"base64",n+1))throw A.b(A.M("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.f5.nL(a,m,s)
else{l=A.C9(a,m,s,256,!0,!1)
if(l!=null)a=B.c.bW(a,m,s,l)}return new A.uC(a,j,c)},
D1(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.a=a},
my:function my(){},
at:function at(){},
ke:function ke(a){this.a=a},
dT:function dT(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
l0:function l0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j4:function j4(a){this.a=a},
m0:function m0(a){this.a=a},
ht:function ht(a){this.a=a},
ks:function ks(a){this.a=a},
lr:function lr(){},
j_:function j_(){},
vl:function vl(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(){},
L:function L(){},
n0:function n0(){},
uh:function uh(){this.b=this.a=0},
bE:function bE(a){this.a=a},
uE:function uE(a){this.a=a},
uD:function uD(a){this.a=a},
jF:function jF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
uC:function uC(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
mu:function mu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rn:function rn(a){this.a=a},
Cz(a){var s
if(typeof a=="function")throw A.b(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Hw,a)
s[$.yL()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.b(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Hx,a)
s[$.yL()]=a
return s},
Hw(a){return t.BO.a(a).$0()},
Hx(a,b,c){t.BO.a(a)
if(A.h(c)>=1)return a.$1(b)
return a.$0()},
nt(a,b,c){return c.a(a[b])},
CA(a,b){return a[b]},
aU(a,b,c,d){return d.a(a[b].apply(a,c))},
av(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.jc(s,b.i("jc<0>"))
a.then(A.hZ(new A.yy(r,b),1),A.hZ(new A.yz(r),1))
return s},
CL(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
i_(a){if(A.CL(a))return a
return new A.xR(new A.jj(t.BT)).$1(a)},
yy:function yy(a,b){this.a=a
this.b=b},
yz:function yz(a){this.a=a},
xR:function xR(a){this.a=a},
FJ(a){var s
if(a==null)s=B.b4
else{s=new A.eI()
s.c0(a)}return s},
mE:function mE(){},
eI:function eI(){this.b=this.a=0},
kC:function kC(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
FZ(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aG(b3,!0,b1)
B.a.k(b2,128)
while(B.d.R(b2.length,64)!==56)B.a.k(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.k(b2,B.d.j7(s,r)&255)
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
j=j+a0>>>0}return new A.H(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.tY()),t.dH).nC(0)},
tY:function tY(){},
m6:function m6(a,b){this.a=a
this.b=b},
Fm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.b(A.a7(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.w)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.i("part "+r.a+" has no "+b+" payload")
throw A.b(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.i("model package payload is missing: "+k)):j
J.e8(s,a.mK(new Uint8Array(A.R(p))))}return new A.r6(a,s)}catch(i){for(h=s,n=A.B(h).i("bM<1>"),h=new A.bM(h,n),h=new A.al(h,h.gu(0),n.i("al<a0.E>")),n=n.i("a0.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aK(o)}throw i}},
r6:function r6(a,b){this.a=a
this.b=b
this.c=!1},
lh:function lh(a){this.e=a},
rh:function rh(a,b){this.a=a
this.b=b},
r8:function r8(){},
r9:function r9(){},
ra:function ra(){},
Fn(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.b(B.i1)
s=a.h(0,"parts")
if(!t.j.b(s)||J.k8(s))throw A.b(B.hM)
r=A.xs(a,"assetId")
q=A.xs(a,"packageHash")
p=A.xs(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.O(s),m=t.P;n.m();)o.push(A.Fo(m.a(n.gq())))
n=A.zX(a.h(0,"materials"))
m=A.zX(a.h(0,"textures"))
l=A.zX(a.h(0,"lods"))
k=A.CM(a.h(0,"combinedBounds"))
j=A.IV(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bs(0,new A.rc(),h,h)
i=h}return new A.rb(r,q,p,o,n,m,l,k,j,i==null?B.aO:i)},
Fo(a){var s,r,q=A.xs(a,"id"),p=A.zo(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.h4)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bs(0,new A.rg(),r,r)
s=r}return new A.fa(q,p,s==null?B.aO:s)},
xs(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.b(A.M(b+" is required",null,null))
return s},
Ih(a){if(a.length===0||B.c.V(a,"/")||B.c.p(a,"\\"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xh())},
zX(a){var s,r
if(a==null)return B.n
if(!t.j.b(a)||J.k7(a,new A.xB()))throw A.b(B.hl)
s=A.c([],t.s)
for(r=J.O(a);r.m();)s.push(A.u(r.gq()))
return s},
CM(a){var s,r
if(a==null)return B.bt
if(!t.j.b(a)||J.k7(a,new A.xk()))throw A.b(B.iC)
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
IV(a){var s,r,q,p
if(a==null)return B.lq
if(!t.f.b(a))throw A.b(B.hH)
if(a.ga3().M(0,new A.xz()))throw A.b(B.i2)
s=A.n(t.N,t.dd)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p=="string")s.l(0,p,A.CM(q.b))}return s},
rb:function rb(a,b,c,d,e,f,g,h,i,j){var _=this
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
rc:function rc(){},
re:function re(){},
rf:function rf(){},
rd:function rd(){},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(){},
xh:function xh(){},
xB:function xB(){},
xk:function xk(){},
xz:function xz(){},
DA(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.yJ(m)
for(s=a.A(),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){o=s[q]
n=o.a
if(!p.k(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.K("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
Kc(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.yK(n),l=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)l.L(0,s[q].c.gak())
for(s=A.fB(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.K(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bV(b,b.r,b.e,A.v(b).i("bV<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bp(o,".fbx")||B.c.bp(o,".obj")||B.c.bp(o,".mtl")||B.c.bp(o,".gltf")||B.c.bp(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
yJ:function yJ(a){this.a=a},
yK:function yK(a){this.a=a},
rZ:function rZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
t_:function t_(){},
fe:function fe(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
oI:function oI(a,b){this.a=a
this.b=b
this.c=null},
fV:function fV(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oL:function oL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oK:function oK(){var _=this
_.c=_.b=_.a=null
_.d=0},
lx:function lx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
Ax(a,b,c,d,e,f,g,h){return new A.i7(g,f,h,b,d,e,c,a)},
i7:function i7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=$},
ub:function ub(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
kO:function kO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
kP:function kP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
es(a,b){return new A.kY(a,b)},
dO:function dO(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
K0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.w)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.k(f,new A.js(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.yA())
s=A.c([],t.cv)
for(r=A.hv(f,0,A.e6(b,"count",t.S),t.mn),q=r.$ti,r=new A.al(r,r.gu(0),q.i("al<a0.E>")),q=q.i("a0.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function lw(a,b,c,d,e){var _=this
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
yA:function yA(){},
le(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.cO(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lf(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.p("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
fO:function fO(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
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
Fk(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.p("MeshData.indices must be Uint16List or Uint32List, got "+J.eV(a).t(0),null))}return s},
cT:function cT(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
uH:function uH(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(){},
r0:function r0(){},
r1:function r1(){},
ky:function ky(){},
iI(a){var s,r,q="volumetric",p=t.N,o=A.aF(["sceneColor","present"],p),n=a.a.b
if(n.p(0,"shadows"))o.L(0,A.aF(["shadowMap","sceneDepth"],p))
if(n.p(0,q)){o.k(0,"volumetricLight")
o.k(0,"sceneColor#"+(a.d>1?2:1))}if(n.p(0,"ssao"))o.L(0,A.aF(["ssaoRaw","ssaoBlurred"],p))
if(n.p(0,"bloom")){if(a.d>1)s=n.p(0,q)?3:2
else s=n.p(0,q)?2:1
o.L(0,A.aF(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.k(0,"sceneColor#1")
if(n.p(0,"dof"))o.L(0,A.aF(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.p(0,"grade"))o.k(0,"gradeOutput")
if(n.p(0,"ps1"))o.k(0,"ps1Output")
r=n.p(0,"vhs")
if(r)o.k(0,"vhsOutput")
return new A.rp(A.fk(o,p),r)},
rp:function rp(a,b){this.a=a
this.b=b},
rq:function rq(){},
hp:function hp(a,b){this.a=a
this.b=b},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
h1:function h1(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c,d,e,f,g,h,i,j){var _=this
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
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
fh:function fh(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c){this.a=a
this.b=b
this.d=c},
po:function po(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Fi(a){var s,r,q
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=B.bE;s.m();){switch(s.d.a){case 0:q=B.bE
break
case 1:q=B.dy
break
case 2:q=B.dz
break
case 3:q=B.dA
break
default:q=null}if(A.B2(q)>A.B2(r))r=q}return r},
B2(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
D7(a){return new A.bI(A.J2(a),t.EF)},
J2(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$D7(b,c,d){if(c===1){p.push(d)
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
f9:function f9(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qV:function qV(a){this.a=a},
qW:function qW(){},
Fj(){return new A.lg(new A.dd(new A.qZ(),A.c([],t.Fy),A.c([],t.t),t.ja))},
lg:function lg(a){this.a=a},
qZ:function qZ(){},
D4(a){var s=4
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
HD(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.D4(o.a)===b)q+=o.c}return q},
Fl(a){return new A.r2(a,new A.dd(new A.r3(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
B3(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.p("MeshStore indices must be Uint16List or Uint32List",null))}return s},
m2:function m2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(){},
r4:function r4(){},
Jw(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bD(B.d.eM(r,16),8,"0")+B.c.bD(B.d.eM(q,16),8,"0")},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a,b){this.b=a
this.c=b},
r7:function r7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b,c,d,e,f,g,h,i){var _=this
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
dM(a,b){return new A.lE(a,b)},
De(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.b(A.dM(B.mA,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jU[q])throw A.b(A.dM(B.mB,'expected "QMSH", got '+B.f4.mJ(B.a1.aD(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.ff(0,null,B.d.b9(a.byteLength,p))
n=J.Al(B.a1.ge7(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.b(A.dM(B.mC,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.nz.p(0,k)))throw A.b(A.dM(B.dP,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.b(A.dM(B.mD,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.R(j,3)!==0)throw A.b(A.dM(B.mF,"vertexCount "+j+" is not a multiple of 3"))
h=J.qu(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.M(h,new A.xS()))throw A.b(A.dM(B.mE,"bounds contain a non-finite value: "+A.y(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.b(A.dM(B.dQ,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.ad
break A}if(18===k){d=B.oS
break A}if(20===k){d=B.oR
break A}d=A.f(A.dM(B.dP,"no vertex layout for stride "+k))}s=new A.bW(d,g,null,new A.fN(new A.C(h[0],h[1],h[2]),new A.C(h[3],h[4],h[5])))
try{s.A()}catch(e){r=A.ah(e)
d=A.dM(B.dQ,"mesh validation failed: "+A.y(r))
throw A.b(d)}return s},
cR:function cR(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
xS:function xS(){},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
us:function us(a,b){this.a=a
this.b=b},
ut:function ut(a){this.a=a},
uq:function uq(a,b){this.a=a
this.b=b},
ur:function ur(){},
G7(a){var s=new A.m_(a,new A.dd(new A.uu(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.b1($.Ac())
s.e=s.b1($.A9())
s.f=s.b1($.Aa())
s.r=s.b1($.A8())
s.w=s.b1($.Ab())
return s},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
uu:function uu(){},
uv:function uv(){},
ux:function ux(){},
uw:function uw(){},
G1(a,b,c,d,e){var s,r,q
if(c)return B.o8
if(d)return B.o2
s=A.Bq(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.oc
r=s<0
if(a>=0.2617993877991494)return r?B.e8:B.od
if(a>=0.10471975511965977)return r?B.e8:B.oe
if(a>=-0.014538592669112763)return r?B.ob:B.of
q=a*180/3.141592653589793
if(q>=-6)return r?B.oa:B.o4
if(q>=-12)return r?B.o9:B.o5
if(q>=-18)return r?B.o3:B.o6
return B.o7},
Br(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.n((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
Bq(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bh:function bh(a,b){this.a=a
this.b=b},
uf:function uf(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gT(0)
if(!g)throw A.b(A.p("invalid volumetric source selection inputs",null))
s=A.a_(t.N)
r=A.c([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.w)(c),++n){m=c[n]
m.A()
l=m.a
if(!s.k(0,l))throw A.b(A.p("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.BE(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.k(r,new A.jt(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Y(r,new A.yB())
g=A.c([],t.xL)
for(q=A.hv(r,0,A.e6(a,"count",t.S),t.bG),p=q.$ti,q=new A.al(q,q.gu(0),p.i("al<a0.E>")),p=p.i("a0.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
BE(a,b,c){var s,r,q,p
for(s=[new A.a5("distance",b),new A.a5("referenceDistance",c),new A.a5("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.p(q.a+" must be finite: "+A.y(p),null))}if(b<0||c<=0||a<=0)throw A.b(A.p("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.n(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
Gh(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gT(0))A.f(A.p(c1+c5.t(0),c0))
if(!c3.gT(0))A.f(A.p(c2+c3.t(0),c0))
if(!isFinite(c4))A.f(A.p("rayLength must be finite: "+A.y(c4),c0))
if(!isFinite(c6))A.f(A.p("scatteringCoeff must be finite: "+A.y(c6),c0))
if(!isFinite(0.7))A.f(A.p("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.p("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbd()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.b(A.p("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.w,e=B.w,d=0,c=0;c<c7.length;c7.length===s||(0,A.w)(c7),++c){b=c7[c]
b.A()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.BE(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.p(c1+c5.t(0),c0))
if(!(n&&m&&l))A.f(A.p(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.p("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.f(A.p("lightIntensity must be finite: "+A.y(a8),c0))
if(k)A.f(A.p("rayDirection must be nonzero",c0))
if(o)A.f(A.p("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.p("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.gac()
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
e=new A.C(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.uV(f,e.gbd()<1e-8?B.w:e.gac(),d)},
cu:function cu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yB:function yB(){},
uV:function uV(a,b,c){this.a=a
this.b=b
this.c=c},
Jp(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.n(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.w)(a),++q){p=a[q]
o=p.gG().y
if(o==null){B.a.k(j,new A.dH(p,A.c([p],r)))
continue}n=""+p.gG().a.a+":"+p.gG().b.a+":"+A.y(o)
m=i.h(0,n)
if(m==null){i.l(0,n,j.length)
B.a.k(j,new A.dH(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.l(0,n,l)
B.a.k(j,new A.dH(p,A.c([p],r)))}else B.a.k(k,p)}}return j},
dH:function dH(a,b){this.a=a
this.b=b},
kM:function kM(a){this.a=a},
pi:function pi(){},
pj:function pj(a){this.a=a},
pg:function pg(a){this.a=a},
ph:function ph(a){this.a=a},
kN:function kN(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){this.a=a
this.b=b
this.c=0},
GJ(){return new A.hB()},
pn:function pn(a){this.a=a
this.b=null},
hB:function hB(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
z2(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
rt:function rt(){},
ru:function ru(){},
co:function co(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b){this.a=a
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
ho:function ho(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
lC:function lC(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
be:function be(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
t0:function t0(){},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
t2:function t2(a,b){this.a=a
this.b=b},
t7:function t7(){},
t6:function t6(){},
t5:function t5(){},
t4:function t4(a){this.a=a},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(a,b){this.a=a
this.b=b},
FP(a){return new A.iR(a,new A.dd(new A.t8(),A.c([],t.w_),A.c([],t.t),t.tc))},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b){this.a=a
this.b=b},
t8:function t8(){},
x4(a,b){return A.HO(a,b)},
HO(a,b){var s=0,r=A.aL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$x4=A.aM(function(c,a0){if(c===1)return A.aI(a0,r)
for(;;)switch(s){case 0:a.c2()
if(a.at!=null)throw A.b(A.i("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.c9(b)
h=p.a.d
if(!(h.a.gu(0)!==0||h.b.gu(0)!==0||h.c.gu(0)!==0||h.d.gu(0)!==0||h.e||h.f)&&!h.r){i.ca(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.dm(b)
n=new A.lC(a.a,A.n(t.N,t.CH))
l=A.Cv(a,n,b,o.a.b.a)
m=l.a
i.ca(p)
h=a.x
g=o
if(h.e)A.f(A.i("GPU resource adapter is disposed"))
h.fk(g)
f=h.c
h.b.ca(g.a)
h.c=g
h.d=null
if(f!=null)h.dS(f.b)
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
if(h!=null)h.bP()}catch(d){if(p.c===B.b7){h=t.AB.a(p)
i.fv(h)
i.a.hm(h.a)
i.b.eH(h.b)
h.c=B.fA
i.c=null}i=o
if((i==null?null:i.c)===B.an){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.i("GPU resource adapter is disposed"))
i.fk(h)
i.dS(h.b)
i.b.eH(h.a)
h.c=B.j2
i.d=null}i=m
if(i!=null)i.bP()
i=n
if(i!=null)i.bP()
throw d}case 1:return A.aJ(q,r)}})
return A.aK($async$x4,r)},
Cw(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.Cv(a,q,s,a.x.gq().a.b.a)
a.z=r.a
a.Q=r.b},
Cv(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.x2(a),j=new A.x3(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Ju(b,h,d,i,s.got(),new A.wO(j),new A.wP(j),new A.wQ(a),new A.wV(a),new A.wW(a),new A.wX(j),new A.wY(j),s.gov(),new A.wZ(a),s.goA(),r.gox(),k,s.goC(),s.goE(),new A.x_(j,c),new A.x0(j),new A.x1(j),new A.wR(j),new A.wS(j),new A.wT(a),new A.wU(j),e,f,g,c.r)}else{p=new A.aO(l,B.q,g,f,e,0)
o=new A.aO(l,B.q,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iB(h,p,o):null
k=A.c([new A.mk(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.iL(b,u.l,u.t,h,i,d))
q=new A.kM(k)}a.r.toString
m=q.lX(B.a8,new A.t0(),!1,new A.mO())
k=m.a.b
if(k.length!==0)throw A.b(A.i("safe renderer graph is invalid: "+A.y(k)))
return new A.w1(q,m)},
HP(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.i("renderer graph is not initialized"))
s=A.K(b7.gi6(),t.yz)
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
B.a.k(s,new A.n1(new A.cJ((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.H(p,n.i("C(1)").a(o.gao()),n.i("H<1,C>")))))}p=b8.a
m=A.JA(A.AG(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.w)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.es(B.aM,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.af(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.w)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.es(B.aM,n))
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
e=new A.pn(n)
e.lT("cull")
j=l-f
d=e.b
if(d==null)A.f(A.i("cull recorded outside an active frame"))
if(j<0)A.f(A.p("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.w)(s),++k){a2=s[k]
if(a2.gG().e===B.aK)B.a.k(a,new A.b3(new A.bT(a0.iv(a2.gG().c.a).c,a2.gE().a),a2,a1))
else B.a.k(b,new A.b3(new A.bX(B.mw,a2.gG().b,a2.gG().a,a2.gE().a),a2,g))}a3=new A.mA(A.Jp(A.K3(b)),A.K2(a),p,b8.b,b8.c)
a4=new A.kB(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.w)(s),++k){a5=s[k]
g=a5.gG().a
if(g.length===0)A.f(A.a7(g,"passId",null))
e.b=g
n.bU(g,A.Dg())
a6=A.n(o,i)
for(g=a5.gG().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.w)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.i("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.i("resource is not in candidate: "+b1))
b3=new A.fR(b2)
a6.l(0,b0+"#"+a1,b3)
a6.bU(b0,new A.x5(b3))}a5.am(new A.ko(a6,a4,new A.x6(b8,b6).$0(),a3))}return new A.vm(e,m,j)},
Bm(a){return new A.tg(a,new A.oI(new A.oK(),new A.lK()),new A.kQ(A.c([],t.h1),B.iL),A.c([],t.Ft),B.bO,A.c([],t.ow),null)},
lJ:function lJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
vm:function vm(a,b,c){this.a=a
this.b=b
this.c=c},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
x2:function x2(a){this.a=a},
x3:function x3(a,b){this.a=a
this.b=b},
x1:function x1(a){this.a=a},
wV:function wV(a){this.a=a},
wW:function wW(a){this.a=a},
x0:function x0(a){this.a=a},
wQ:function wQ(a){this.a=a},
wS:function wS(a){this.a=a},
wR:function wR(a){this.a=a},
x_:function x_(a,b){this.a=a
this.b=b},
wO:function wO(a){this.a=a},
wP:function wP(a){this.a=a},
wX:function wX(a){this.a=a},
wY:function wY(a){this.a=a},
wZ:function wZ(a){this.a=a},
wU:function wU(a){this.a=a},
wT:function wT(a){this.a=a},
x5:function x5(a){this.a=a},
x6:function x6(a,b){this.a=a
this.b=b},
w1:function w1(a,b){this.a=a
this.b=b},
mO:function mO(){},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tg:function tg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
th:function th(){},
ti:function ti(){},
tj:function tj(){},
mL:function mL(a){this.b=a},
vy:function vy(){},
mS:function mS(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
K3(a){var s,r,q=A.K(a,t.E0)
B.a.Y(q,new A.yF())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.K(new A.H(q,s.i("ca(1)").a(new A.yG()),r),r.i("a0.E"))
s.$flags=1
return s},
K2(a){var s,r,q=A.K(a,t.EH)
B.a.Y(q,new A.yD())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.K(new A.H(q,s.i("ca(1)").a(new A.yE()),r),r.i("a0.E"))
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
yF:function yF(){},
yG:function yG(){},
yD:function yD(){},
yE:function yE(){},
JA(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.w)(b),++p){o=b[p];++r
if((o.gG().d&c)>>>0===0){++q
continue}n=o.geS()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.p("cullItems: non-finite world bounds for instance "+o.gE().t(0),null))
if(a.it(o.geS())===B.b8){++q
continue}B.a.k(l,o)}return new A.p_(l,new A.p0(q))},
p0:function p0(a){this.b=a},
p_:function p_(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.oF,q=B.oH,p=!1;s.m();p=!0){o=s.gq()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.C(m,k,Math.min(r.c,o))
q=new A.C(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.p("Aabb.fromPoints requires at least one point",null))
return new A.fN(r,q)},
fN:function fN(a,b){this.a=a
this.b=b},
AG(a){var s,r,q,p,o,n,m=a.a,l=new A.pq(),k=m.length
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
return new A.pp(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fc:function fc(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
pp:function pp(a){this.a=a},
pq:function pq(){},
B0(a){if(a.length!==16)throw A.b(A.p("Mat4.fromColumnMajor requires 16 values",null))
return new A.da(new Float32Array(A.R(a)))},
z0(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.da(q)},
B1(a,b,c){var s=b.gac(),r=c.bz(s).gac(),q=s.bz(r),p=new Float32Array(16)
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
p[12]=-r.bo(a)
p[13]=-q.bo(a)
p[14]=s.bo(a)
p[15]=1
return new A.da(p)},
da:function da(a){this.a=a},
qU:function qU(){},
rX(a,b){var s=a.gac(),r=b/2,q=Math.sin(r)
return new A.lF(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lF:function lF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b){this.a=a
this.b=b},
nS:function nS(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nR:function nR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
jd:function jd(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mr:function mr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kn:function kn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ms:function ms(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
kA:function kA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mv:function mv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jf:function jf(a,b){this.a=a
this.b=b},
id:function id(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mw:function mw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kF:function kF(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mx:function mx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kX:function kX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
mC:function mC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
mJ:function mJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a){this.b=a},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aO(a.a,a.b,b,c,s,r)},
z3:function z3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mP:function mP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lD:function lD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mQ:function mQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bp(a){var s=a.c,r=Math.abs(s.a)<0.99?B.ei:B.Q,q=A.B1(a.b,s,r)
return new A.fm(A.z0(1,a.f,B.b.n(a.w*2,0.1,3),0.05).a8(0,q))},
fm:function fm(a){this.a=a},
lS:function lS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mT:function mT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Ju(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.p(0,"shadows"))throw A.b(A.a7(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.p(0,"ssao")
r=c0.p(0,"bloom")
q=c0.p(0,"dof")
p=c0.p(0,"grade")
o=c0.p(0,"ps1")
n=c0.p(0,"vhs")
m=c0.p(0,"volumetric")
c0=B.d.af(e9+1,2)
l=B.d.af(e8+1,2)
k=A.br(B.bR,e9,e8,e7,b2)
j=A.br(B.bR.i8(),e9,e8,b2,b2)
i=e7>1
h=A.br(B.nf,e9,e8,b2,i?2:1)
g=A.br(B.ne,c0,l,b2,b2)
A.br(B.nn,e9,e8,b2,b2)
f=A.br(B.nk,e9,e8,b2,b2)
e=A.br(B.nd,f0,f0,b2,b2)
d=A.br(B.ng,c0,l,b2,b2)
c=A.br(B.nh,c0,l,b2,b2)
b=A.br(B.nl,c0,l,b2,b2)
a=A.br(B.nm,c0,l,b2,b2)
a0=$.DB()
a1=i?1:0
a2=A.br(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.br(B.na,c0,l,b2,b2)
a1=A.br(B.nb,c0,l,b2,b2)
a3=A.br(B.nc,e9,e8,b2,b2)
a4=A.br(B.ni,e9,e8,b2,b2)
a5=A.br(B.no,e9,e8,b2,b2)
a6=A.br(B.nj,e9,e8,b2,b2)
a7=i?new A.iB(c2,k,j):b2
b9.a=null
a8=A.Bp(B.og)
if(m){a9=i?j:k
b0=new A.mg(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.c([],t.C1))}else b0=b2
g=t.e_
b1=A.c([],g)
if(!m)h=i?j:k
if(r){B.a.L(b1,A.c([new A.i5(c1,b3,b4,c2,b5,b5,B.ew,!0,h,b,e0,c0,l),new A.i5(c1,b3,b4,c2,b6,b6,B.pt,!1,b,a,c6,c0,l),new A.kn(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.L(b1,A.c([new A.id(c1,b3,b4,c2,b7,b7,B.ex,h,a0,e0,c0,l),new A.id(c1,b3,b4,c2,b8,b8,B.pu,a0,a1,d1,c0,l),new A.kF(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.k(b1,new A.kX(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.k(b1,new A.lD(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.k(b1,new A.m7(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.c([new A.kA(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.lV(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.lU(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.lS(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.xO(b9),e))
j.push(new A.lT(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  float reflectionFresnel=0.04+0.96*pow(1.0-reflectionNdotV,5.0);\n  float reflectionSurface=clamp(wetness+0.18*dissolution,0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*reflectionFresnel*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  lit+=uReflectionColor*reflectionWeight;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.xP(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.L(j,b1)
j.push(new A.iL(c1,b3,u.t,c2,h,c3))
return new A.kM(j)},
xO:function xO(a){this.a=a},
xP:function xP(a,b){this.a=a
this.b=b},
lT:function lT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
mU:function mU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
lV:function lV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mX:function mX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lU:function lU(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mW:function mW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m7:function m7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
n4:function n4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mg:function mg(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
n6:function n6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
n5:function n5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n9:function n9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(){},
lR(a,b){return new A.iX(a,b)},
kV:function kV(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function kW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
f4:function f4(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
il:function il(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
o:function o(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pM:function pM(){},
pN:function pN(){},
hE:function hE(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
AD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.h2(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kl:function kl(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
kw:function kw(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
vc:function vc(){this.a=null},
Go(a){var s=new A.mi(a,B.j,new A.vc(),A.Gy(a))
s.jG(a)
return s},
Gy(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.b9(q,A.B(q).i("b9<1,e>")))
while(r.m())s.k(0,r.gq())
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
BM(a,b){var s
if(a.b!==B.j)A.f(A.i(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.h(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.p("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Gt(a,b,c){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.i("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Gs(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Gr(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
BL(a,b){var s
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
Gp(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bc(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=a.f
r=s.mQ(b)
if(r.a===0)return
if(r.p(0,B.bW)){q=v.G
p=a.a
if(b.a)p.enable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bX))a.a.depthFunc(A.Gs(a,b.b))
if(r.p(0,B.bY))a.a.depthMask(b.c)
if(r.p(0,B.c1)){q=v.G
p=a.a
if(b.w)p.enable(A.h(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.h(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.c2))a.a.cullFace(A.Gr(a,b.x))
if(r.p(0,B.eb)){q=v.G.WebGL2RenderingContext
q=A.h(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bZ)){q=v.G
p=a.a
if(b.d)p.enable(A.h(q.WebGL2RenderingContext.BLEND))
else p.disable(A.h(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.c_))a.a.blendFunc(A.BL(a,b.e),A.BL(a,b.f))
if(r.p(0,B.c0))a.a.blendEquation(A.Gp(a,b.r))
if(r.p(0,B.e9))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.ea)){q=v.G.WebGL2RenderingContext
a.a.disable(A.h(q.SCISSOR_TEST))}s.a=b},
Gq(a,b){var s
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
s.clear(A.Gq(a,b))},
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
switch(c.a.a){case 0:r.uniform1f(q,A.aB(c.b))
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
bi(a,b){if(a.b!==B.j)A.f(A.i(u.k))
a.a.bindVertexArray(A.a(b.a))},
az(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.f(A.i(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jJ){p=s.d>1?A.h(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jI){o=s.b
if(o!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.i("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.i("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Gu(a,b,c){var s,r,q,p,o,n,m,l,k,j
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
m=J.Al(B.a1.ge7(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aV(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.h(q.WebGL2RenderingContext.STATIC_DRAW))}},
Gv(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
BP(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.d0?A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.h(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Gv(a,b.b))
return new A.e1(r)},
BN(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
BO(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
Gw(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
zb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
l=m?A.Gw(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aU(s,"texStorage3D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aU(s,"texStorage2D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.BN(a,b.e))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.BN(a,b.f))
p=b.r
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.BO(a,p))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.BO(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.fT(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a7(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.e1(new A.jJ(r,j,i,q,m))},
zc(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
r=s.d
if(c>=r)throw A.b(A.p("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.p("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.h(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aU(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aU(l,"texSubImage2D",[m,0,0,0,q,p,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
BQ(a,b){var s,r,q
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.h(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mj(a,b){a.a.deleteTexture(t.p.a(b.a).a)},
BS(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.f(A.i(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.p("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.b(A.i("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bb
if(n&&!a1.e)throw A.b(A.p("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.d2||o===B.j4
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
if(o!==h){A.zd(a0,q,l,k,f,e,j,i)
throw A.b(A.i("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.e1(new A.jI(q,l,k,f,e,j,i,s,a1.b,a1.c))},
zd(a,b,c,d,e,f,g,h){var s=a.a
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
return new A.e1(s)},
BR(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.b(A.lR(b===A.nt(A.CA(A.Dx(),r),q,t.S)?B.e2:B.e3,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.i_(p.getShaderParameter(o,A.h(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aq(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.lR(b===A.nt(A.CA(A.Dx(),r),q,t.S)?B.e2:B.e3,s))}return o},
Gx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.i(u.k))
q=v.G
s=A.BR(a,A.h(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.BR(a,A.h(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.nP)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.i_(o.getProgramParameter(n,A.h(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aq(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e4,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.w)(c),++l){k=c[l]
if(A.h(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e5,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e5,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.e1(n)},
e1:function e1(a){this.a=a},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jI:function jI(a,b,c,d,e,f,g,h,i,j){var _=this
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
n8:function n8(a){this.a=a
this.b=!1},
mi:function mi(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
v9:function v9(a){this.a=a},
va:function va(a){this.a=a},
wc:function wc(){},
n7:function n7(){},
v8:function v8(a){this.a=a},
vb:function vb(){},
kD:function kD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o6(a0,a1){var s=0,r=A.aL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$o6=A.aM(function(a2,a3){if(a2===1)return A.aI(a3,r)
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
a=new A.kh(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.n(o,t.a_),B.b4,A.n(n,t.jS))
a.jq(p,a1)
p=A.v(a0).i("N<1,2>")
s=3
return A.a6(A.ps(A.ld(new A.N(a0,p),p.i("aS<ax>(r.E)").a(new A.o7(a)),p.i("r.E"),t.ls),t.c),$async$o6)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.ku():m
b.buffer=p
q=a
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$o6,r)},
kh:function kh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
o8:function o8(){},
o7:function o7(a){this.a=a},
ob:function ob(a,b){this.a=a
this.b=b},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jH:function jH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Ef(a,b,c,d,e,f,g){var s=new A.nY(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.js(a,b,c,d,0,e,f,g)
return s},
Eb(a,b){var s=new A.nD(b)
s.jp(a,b)
return s},
Ee(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aG(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.nU(A.aW(n,r,t.a))
n.jr(a)
return n},
IY(a,b){var s,r,q,p=b>>>0
for(s=new A.dw(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Dl(p,q==null?r.a(q):q)}return p&2147483647},
ki:function ki(a,b){this.a=a
this.b=b},
nY:function nY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nZ:function nZ(){},
nD:function nD(a){this.a=a},
nE:function nE(){},
i3:function i3(){},
nF:function nF(){},
nG:function nG(){},
nU:function nU(a){this.a=a},
nW:function nW(){},
nX:function nX(){},
nV:function nV(){},
yQ:function yQ(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
o5:function o5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o_:function o_(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a){this.a=a},
o1:function o1(){},
jb:function jb(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
oD:function oD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
pm:function pm(a){this.a=a},
l1:function l1(a,b,c,d,e,f,g,h,i,j){var _=this
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
qn:function qn(a){this.a=a},
F5(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return new A.qm(n)},
qm:function qm(a){this.a=a},
qq:function qq(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qL:function qL(a,b,c){this.a=a
this.c=b
this.e=c},
qI:function qI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(){},
p1:function p1(){this.b=this.a=0},
qR:function qR(a){this.a=a
this.b=0
this.e=!1},
j0(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
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
j5(a,b,c){return new A.k(a,b,c)},
BC(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
v1:function v1(){},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
v2:function v2(){},
eD:function eD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uY:function uY(){},
uZ:function uZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v_:function v_(){},
uX:function uX(){this.b=this.a=-1},
Gz(a,b,c,d){return new A.ml(d,b,c,a)},
GB(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.DN()
s=a.d
r=A.ve(s,0)
q=A.ve(s,1)
p=A.ve(s,2)
o=A.ve(s,3)
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
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.k(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.gac():i
return new A.ml(m,p,o,A.fk(n,s))},
ve(a,b){return A.GA(b<a.length?a[b]:0)},
bQ(a,b){return b<a.length&&a[b]>=0.5},
GA(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.n((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gcm(a)?-s:s},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ml:function ml(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ow:function ow(a){this.a=a},
EB(a,b,c){var s=new A.kG(a,c,null,b)
s.jw(a,null,null,b,c)
return s},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
EO(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bK(new A.I(B.l4,t.e2.a(new A.pd(a)),t.vL),t.yW)
return s==null?null:new A.h3(s)},
B5(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.z1(s,a,B.ks)
break
case 1:A.z1(s,a,B.kt)
break
case 2:A.z1(s,a,B.l8)
break}return s},
z1(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.K(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.k(a,p.c)
return}}},
EN(a){if(a.a!==21)return null
if(a.e)return B.fK
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fL
return B.fJ},
cm:function cm(a,b){this.a=a
this.b=b},
pa:function pa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a){this.a=a},
pd:function pd(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
Fw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.u(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.lv(s,new A.k(o,n,m),q,p,l,j)
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
lv:function lv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
J_(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
if(typeof q!="string")throw A.b(B.h0)
p.l(0,q,r.b)}return p},
wj(a){var s,r,q,p,o,n=a.ga3().bE(0)
B.a.X(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.w)(n),++p){o=n[p]
r.l(0,o,A.Cs(a.h(0,o)))}return A.aW(r,t.N,s)},
Cs(a){var s
if(t.f.b(a))return A.wj(A.J_(a))
if(t.j.b(a)){s=t.z
return A.ad(J.e9(a,A.JW(),s),s)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i4)
return a}throw A.b(A.M("presentation snapshot contains unsupported value "+J.eV(a).t(0),null,null))},
rS:function rS(a){this.a=a},
Bl(a,b,c){var s=A.zt(b),r=A.zt(a)
if(c!==2)A.f(A.a7(c,"version","unsupported save version"))
return new A.hq(c,s,r)},
zt(a){var s,r,q,p,o=A.v(a).i("ac<1>"),n=A.K(new A.ac(a,o),o.i("r.E"))
B.a.X(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.w)(n),++q){p=n[q]
s.l(0,p,A.Cr(a.h(0,p)))}return A.aW(s,t.N,o)},
Cr(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p!="string")throw A.b(B.hP)
s.l(0,p,q.b)}return A.zt(s)}if(t.j.b(a)){r=t.z
return A.ad(J.e9(a,A.K_(),r),r)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i9)
return a}throw A.b(A.M("save contains unsupported value "+J.eV(a).t(0),null,null))},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(){},
fj:function fj(a,b){this.a=a
this.b=b},
AI(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.py(a,b,c,d,e,f,g,s,r,h)},
AJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.b_(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.hO)
r=d.h(0,"runSeed")
q=A.b_(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.b_(p)||p<1||typeof o!="number")throw A.b(B.it)
if(!isFinite(5760))throw A.b(A.a7(5760,"daySeconds","must be finite and > 0"))
n=new A.kT(p,7,5760)
n.ir(o)
s=t.N
m=t.z
l=A.Fg(a5,A.aZ(a0,s,m))
k=A.Ey(l,A.aZ(a,s,m),n)
j=A.Dc(a3,c)
A.F4(A.aZ(a1,s,m)).lM(j)
s=A.aZ(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bx(f))A.f(B.hf)
e=A.Fp(d.h(0,"narrative"))
if(e==null)e=A.rj(null,null,null)
return A.AI(c,q,j,n,l,k,new A.kD(i,h,g,f),e)},
HN(a){var s
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
dA:function dA(a,b){this.a=a
this.b=b},
kS:function kS(a,b){this.c=a
this.d=b},
pz:function pz(a,b,c){this.a=a
this.b=b
this.r=c},
py:function py(a,b,c,d,e,f,g,h,i,j){var _=this
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
pA:function pA(a){this.a=a},
pB:function pB(){},
pC:function pC(){},
pD:function pD(a){this.a=a},
pE:function pE(){},
Ar(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.hS(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a1(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.b(B.hz)
s=A.bJ(d,"houseId")
r=A.bJ(d,"sourceRef")
q=A.bJ(d,"presentationScope")
p=A.bJ(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.hS(d.h(0,g),g)
o=A.bJ(n,"roomId")
m=A.zS(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.u(n.h(0,f)):null
o=new A.oq(o,m,l,typeof n.h(0,e)=="string"?A.u(n.h(0,e)):null)}m=J.e9(A.hO(d,"levels"),new A.od(),t.mD)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
l=J.e9(A.hO(d,"rooms"),new A.oe(c),t.bJ)
l=A.K(l,l.$ti.i("a0.E"))
l.$flags=1
k=J.e9(A.hO(d,"portals"),new A.of(c),t.lT)
k=A.K(k,k.$ti.i("a0.E"))
k.$flags=1
j=J.e9(A.hO(d,"stairs"),new A.og(),t.gI)
j=A.K(j,j.$ti.i("a0.E"))
j.$flags=1
i=J.e9(A.hO(d,"exteriorCells"),new A.oh(),t.N)
i=A.K(i,i.$ti.i("a0.E"))
i.$flags=1
s=new A.kj(s,r,q,p,o,m,l,k,j)
s.eP()
return s},
Dc(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
a6.eP()
s=A.AL(a7)
r=new A.xN()
for(q=a6.w,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.w)(q),++l){k=q[l]
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
for(b=k.e,a=b.length,a0=0;a0<b.length;b.length===a||(0,A.w)(b),++a0){a1=b[a0]
e.push(new A.fu(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.aG(k.f,!1,o)
a2.$flags=3
B.a.k(n,new A.fi(j,new A.k(d,c,h),new A.k(g,f,i),e,A.Hs(j),k.r,k.w,k.x))}for(q=a6.x,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.w)(q),++l){a3=q[l]
B.a.k(o,new A.c9(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a6.y,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.w)(q),++l){a4=q[l]
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
B.a.k(o,new A.fn(a4.a,a4.b,new A.k(i,h,m),new A.k(f,e,j[2])))}a5=a6.f
if(a5!=null){s.r=a5.a
s.x=a5.c
q=a5.b
p=q.length
if(0>=p)return A.d(q,0)
o=q[0]
if(1>=p)return A.d(q,1)
n=q[1]
if(2>=p)return A.d(q,2)
s.w=new A.k(o,n,q[2])}s.np()
return s},
Hs(a){var s
A:{if("living-room"===a){s=A.c([A.yY("mantle-living",!0,new A.k(3.7,1.45,0.8),"living-room gas mantle"),A.yY("mantle-living-second",!1,new A.k(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.yY("mantle-hall",!1,new A.k(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.ky
break A}return s},
Eh(a,b){var s,r=A.hS(a,"room"),q=A.bJ(r,"id"),p=A.bJ(r,"floor"),o=A.zS(r.h(0,"origin"),"origin",b),n=A.zS(r.h(0,"size"),"size",b),m=J.e9(A.hO(r,"windows"),new A.or(b),t.ya)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
s=J.e9(A.hO(r,"portalIds"),new A.os(),t.N)
s=A.K(s,s.$ti.i("a0.E"))
s.$flags=1
return new A.ef(q,p,o,n,m,s,A.zZ(r,"wall"),A.zZ(r,"floor"),A.zZ(r,"ceiling"))},
hS(a,b){return t.P.b(a)?a:A.e3(b+" is not an object")},
hO(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.e3(b+" is not a list")},
bJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e3(b+" is not a string")},
zZ(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.e3("surface is not an object")
return A.bJ(s,b)},
zy(a,b){var s,r=A.bJ(a,b)
A:{if("north"===r){s=B.A
break A}if("east"===r){s=B.ak
break A}if("south"===r){s=B.r
break A}if("west"===r){s=B.al
break A}s=A.e3(b+" has unknown facing "+r)}return s},
Iy(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gP(a)||s.M(a,new A.xl())}else s=!0
if(s)return A.e3(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
eP(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e3(b+" is not finite")},
np(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xI())}else s=!0
if(s)return A.e3(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
zS(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.np(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)p.push(s[q]*c)
return p},
k3(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gq()
if(!q.k(0,r))throw A.b(A.M("duplicate "+b+" id "+r,null,null))}},
e3(a){return A.f(A.M(a,null,null))},
kj:function kj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
od:function od(){},
oe:function oe(a){this.a=a},
of:function of(a){this.a=a},
og:function og(){},
oh:function oh(){},
oj:function oj(){},
ok:function ok(){},
ol:function ol(){},
om:function om(){},
on:function on(){},
oo:function oo(){},
op:function op(){},
oi:function oi(a){this.a=a},
oq:function oq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xN:function xN(){},
ed:function ed(a){this.a=a},
ef:function ef(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
or:function or(a){this.a=a},
os:function os(){},
eh:function eh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ee:function ee(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eg:function eg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xl:function xl(){},
xI:function xI(){},
kp:function kp(a,b){this.a=a
this.b=b
this.d=null},
oH:function oH(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
mm:function mm(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q3:function q3(){this.b=0},
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
kJ:function kJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pf:function pf(){},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(){},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
Ka(a){var s,r,q,p,o,n,m,l
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
return new A.bW(B.ad,p,new Uint16Array(A.R(a.b)),new A.fN(new A.C(s.a,s.b,s.c),new A.C(s.d,s.e,s.f)))},
K9(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.IX(a,new A.yI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kK(o,p.c,p.e))}return n},
IX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.b(A.p("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.p(d,":")?B.c.J(d,0,B.c.bC(d,":")):null
l=new A.dl(d,l,h,A.c([],p))
s.l(0,d,l)}B.a.L(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("ao<2>")
q=A.K(new A.ao(s,q),q.i("r.E"))
B.a.Y(q,new A.xA())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.w)(q),++c)r.push(q[c].oX(a))
return r},
Hv(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kJ(r,q,p,o,n,m)},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
yI:function yI(a){this.a=a},
xA:function xA(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
f1:function f1(a,b){this.a=a
this.b=b},
kL:function kL(){},
Js(a){var s,r,q,p=new A.q4(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.HQ(p,a,B.dm[s],15.75,15.75,12.044999999999998,0.63)
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
p.ar(r,new A.a8(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ar(r,q,new A.a8(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a8(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a8(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ar(q,new A.a8(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ar(q,r,new A.a8(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ar(new A.a8(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a8(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a8(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ar(new A.a8(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a8(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a8(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a8(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a8(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ar(r,new A.a8(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ar(r,q,new A.a8(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a8(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a8(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ar(q,new A.a8(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ar(q,r,new A.a8(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.IL(p,15.75,15.75,12.044999999999998,16.32)
A.Hy(p,15.75,15.75,16.32)
A.HM(p,15.75,15.75,12.044999999999998)
A.HU(p,a,15.75)
A.IS(p,15.75,15.75)
A.Hu(p,15.75)
return p.lV()},
HQ(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ak!==b7,p=B.A!==b7,o=B.r===b7,n=B.al===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.w)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.w)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.k(b4,new A.eH(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aS(i),b=J.O(h.a),h=new A.W(b,h.b,h.$ti.i("W<1>"));h.m();){a=b.gq()
if(!a.Q||a.b4(i)!==b7)continue
B:{if(!p||o){a0=g+a.aM(i)
break B}if(!q||n){a0=e+a.aM(i)
break B}a0=null}B.a.k(b4,new A.eH(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.A||b7===B.r?b8:b9
r=t.i
a1=A.aF([0,s],r)
a2=A.aF([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.w)(b4),++l){a3=b4[l]
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
if(B.a.M(b4,new A.x8(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.HT(b5,b4,b7,b8,b9,c1)
A.HR(b5,b4,b7,b8,b9,c1)
A.HS(b5,b4,b7,b8,b9,c0,c1)},
HS(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aF([0,a4===B.A||a4===B.r?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.w)(a3),++r){q=a3[r]
a1.k(0,q.a)
a1.k(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.x7(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
HR(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.w)(a4),++g){f=a4[g]
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
HT(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.w)(a3),++h){g=a3[h]
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
break}if(!f)A.IQ(a2,g,a4,a5,a6,a7,q)}},
IQ(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
IL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.IM(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
IM(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a8(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a8(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ar(n,new A.a8(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ar(n,m,new A.a8(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a8(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a8(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ar(m,new A.a8(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ar(m,n,new A.a8(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Hy(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
HM(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
HU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
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
IS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Hu(a,b){var s,r
a.D(0,6.7,1,-4.05,-2.5,0,-4.4)
a.D(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.D(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.D(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eH:function eH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x8:function x8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x7:function x7(a,b,c){this.a=a
this.b=b
this.c=c},
JY(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.A7(b,d,c)
if(k!=null){s=k.b
return new A.eq(B.fS,k.a,s)}r=A.Dv(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.eq(B.fT,r.a,s)}if(A.Dw(b,d,c)!=null)return B.fX
q=A.JX(a,b,c,d)
if(q!=null)return new A.eq(B.cK,q.a,"inspect the "+q.b)
p=A.Du(b,c,d,e)
if(p!=null){o=e.bL(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eq(B.fV,l,m?"inspect the "+o.b:"inspect "+n)}return B.fY},
Du(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.ns(a5,s,4.5)
for(q=a6.ih(a4),p=J.O(q.a),q=new A.W(p,q.b,q.$ti.i("W<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gq()
if(!i.x)continue
h=a6.bL(i.c)
g=i.f.a
f=i.eJ(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.k(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.gac()
a0=a3.b
a1=Math.acos(B.b.n(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.nu(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
JX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.iG(c)
if(s.length===0)return f
r=d.aH(e)
q=A.ns(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.w)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.gac()
j=b.b
if(Math.acos(B.b.n(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.nu(d,c,b.a,new A.k(n,m,o)))return k}return f},
dz:function dz(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
Jt(a,b){var s,r=new A.ct(new Float32Array(5376)),q=new A.ct(new Float32Array(5376)),p=new A.ct(new Float32Array(5376)),o=new A.ct(new Float32Array(5376)),n=b.d,m=a.aH(b),l=A.l_(b.y),k=A.l_(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.ez(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.ez(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Hn(p,a,b,m,B.dm[s])
for(j=a.aS(b.a),i=J.O(j.a),j=new A.W(i,j.b,j.$ti.i("W<1>"));j.m();){h=i.gq()
if(h.at==null||h.as)continue
A.Cg(o,b,m,h,!0)}j=B.t.aD(r.a,0,r.b)
i=B.t.aD(q.a,0,q.b)
h=B.t.aD(p.a,0,p.b)
B.t.aD(o.a,0,o.b)
return new A.tc(j,i,h)},
Jq(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.ct(new Float32Array(5376))
r=a.aH(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.Ch(s,b,r,c,q)
return B.t.aD(s.a,0,s.b)},
Jr(a,b){var s,r,q,p=new A.ct(new Float32Array(5376)),o=a.aH(b)
for(s=a.aS(b.a),r=J.O(s.a),s=new A.W(r,s.b,s.$ti.i("W<1>"));s.m();){q=r.gq()
if(q.at==null||q.as)continue
A.Cg(p,b,o,q,!1)}return B.t.aD(p.a,0,p.b)},
Hn(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.A||a4===B.r?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aS(s),q=J.O(r.a),r=new A.W(q,r.b,r.$ti.i("W<1>"));r.m();){p=q.gq()
if(!p.as&&p.b4(s)===a4)a.push(new A.eG(p.aM(s),p.aM(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eG(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aF([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.w)(a),++o){m=a[o]
r.L(0,A.c([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.X(l)
s=A.aF([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.w)(a),++o){m=a[o]
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
if(B.a.M(a,new A.we(f,e,d,c)))continue
A.Jf(a0,a2,a3,a4,f,e,d,c)}A.Ho(a0,a2,a3,a4,b,a)},
Ho(a,b,c,d,e,f){return},
hX(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.au(a,new A.k(r+e,q+g,p),new A.k(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.au(a,new A.k(r+e,q+g,s-i),new A.k(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.au(a,new A.k(s-i,q+g,p+e),new A.k(s,q+h,p+f),j)
return
case 3:A.au(a,new A.k(r,q+g,p+e),new A.k(r+i,q+h,p+f),j)
return}},
au(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.k(o,n,m),k=c.a,j=new A.k(k,n,m),i=c.b,h=new A.k(k,i,m),g=new A.k(o,i,m)
m=c.c
s=new A.k(o,n,m)
r=new A.k(k,n,m)
q=new A.k(k,i,m)
p=new A.k(o,i,m)
a.aN(j,l,g,h,d)
a.aN(s,r,q,p,d)
a.aN(l,s,p,g,d)
a.aN(r,j,h,q,d)
a.aN(l,j,r,s,d)
a.aN(g,p,q,h,d)},
Jf(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.l_(n).e
a.ez(s.a4(0,o),r.a4(0,o),q.a4(0,o),p.a4(0,o),A.l_(n).c,(f-e)/m,(a1-a0)/m)
l=A.Jg(b,d)
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
default:j=k}A.au(a,o,j,A.IT(A.l_(n).c,0.68))},
IT(a,b){var s,r=new A.xw(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.j1()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.j1()
r=r.$1(a&255)
if(typeof r!=="number")return A.xZ(r)
return(q<<16|s<<8|r)>>>0},
Jg(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
Cg(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b4(d),b=a3.aM(d),a=b+a3.w
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
A.au(a0,new A.k(r+l,s,d),new A.k(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.k(l,s,d),new A.k(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.k(r+n,s+m,d),new A.k(r+h,j,i),q)
A.au(a0,new A.k(k,s,d),new A.k(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.au(a0,new A.k(r+l,s,k),new A.k(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.k(l,s,k),new A.k(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.k(r+n,s+m,k),new A.k(r+h,i,d),q)
A.au(a0,new A.k(j,s,k),new A.k(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.au(a0,new A.k(n,s,d+k),new A.k(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.k(n,s,k),new A.k(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.au(a0,new A.k(n,s+e,d+m),new A.k(r,j,d+l),q)
A.au(a0,new A.k(n,s,i),new A.k(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.au(a0,new A.k(r,s,d+l),new A.k(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.k(r,s,l),new A.k(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.au(a0,new A.k(r,s+e,d+n),new A.k(k,j,d+m),q)
A.au(a0,new A.k(r,s,i),new A.k(k,s+0.05,l),q)
break}if(a4)A.Ch(a0,a1,a2,a3,q)
A.Hm(a0,a1,a2,a3)},
Hm(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aM(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
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
A.hX(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.r?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hX(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.r?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hX(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.r?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hX(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.r,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hX(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hX(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hX(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
Ch(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b4(o),m=d.aM(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.k(p,s,o-d.w),new A.k(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.k(p-d.w,s,o),new A.k(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.k(p,s,o),new A.k(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.k(p,s,o-0.055),new A.k(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.k(p-0.055,s,o),new A.k(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.k(p,s,o),new A.k(p+0.055,s+r,o+d.w),e)
break}},
tc:function tc(a,b,c){this.a=a
this.b=b
this.c=c},
we:function we(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xw:function xw(a){this.a=a},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AL(a){var s=t.N
return new A.q1(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.n(s,t.z_),A.n(s,t.e),new A.q3())},
q1:function q1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
qj:function qj(a){this.a=a},
ns(a,b,c){var s=a.aH(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
nu(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Ii(a,s,c,d)},
Ii(a,b,c,d){var s,r,q,p,o=a.aH(b),n=d.ab(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.wl(a,b,o,B.A,r,q,p,c,n,m))return!0
if(A.wl(a,b,o,B.r,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.wl(a,b,o,B.al,s,r,q,c,n,m))return!0
if(A.wl(a,b,o,B.ak,s+o.a,r,q,c,n,m))return!0
return!1},
wl(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a4(0,a6.a8(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.A||a1===B.r
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aS(m),k=J.O(l.a),l=new A.W(k,l.b,l.$ti.i("W<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gq()
if(q.b4(m)===a1){g=q.aM(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
A7(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.ns(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.w)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.k(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.gac()
f=a.b
if(Math.acos(B.b.n(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.nu(a0,a1,a.a,new A.k(h,g,i)))continue
m=d
l=j}}return l},
Dv(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.ns(b,j,4.5):4.5
for(s=b.aS(c),r=J.O(s.a),s=new A.W(r,s.b,s.$ti.i("W<1>")),q=i,p=null;s.m();){o=r.gq()
n=b.of(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.CF(l,k,a,i,0.5236)||k>=q)continue
if(!A.nu(b,c,a.a,n))continue
q=k
p=o}return p},
Dw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.ns(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.w)(r),++n){m=r[n]
l=A.Ji(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.CF(j,i,a,s,0.5236)||i>=p)continue
if(!A.nu(b,c,a.a,l))continue
p=i
o=m}return o},
CF(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.n(a.gac().bo(c.b),-1,1))<=e},
Ji(a,b,c){var s=a.aH(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
pe:function pe(){this.a=null
this.b=0},
u9:function u9(){},
ua:function ua(){},
F9(a){var s,r,q=A.jZ(a,"inventory asset"),p=A.cX(q,"id"),o=A.cX(q,"kind")
A.cX(q,"source")
A.cX(q,"proxy")
A.cX(q,"pivot")
s=q.h(0,"status")
r=A.cX(q,"id")
if(s==null)s="proxy"
if(typeof s!="string"||!A.aF(["production","proxy","invisible-anchor"],t.N).p(0,s))A.f(A.M("invalid inventory asset status "+r+": "+A.y(s),null,null))
q=A.jZ(q.h(0,"bounds"),"inventory bounds")
return new A.d8(p,o,s,new A.qr(A.no(q.h(0,"min"),"bounds.min"),A.no(q.h(0,"max"),"bounds.max")))},
Fb(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.jZ(a6,"inventory placement"),g=A.jZ(h.h(0,"visibility"),"placement visibility"),f=A.jZ(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.dx,a=h.h(0,"physics"),a0=c.b(a)?a:B.dx,a1=A.cX(h,"id"),a2=A.cX(h,"roomId"),a3=A.cX(h,"assetId"),a4=A.cX(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.u(h.h(0,"socket")):null
h=A.jZ(h.h(0,"transform"),"inventory transform")
s=A.no(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hU)
r=A.no(h.h(0,"position"),"transform.position")
q=A.no(h.h(0,"rotation"),"transform.rotation")
p=A.cX(g,"layer")
if(typeof g.h(0,i)=="string")A.u(g.h(0,i))
o=J.aa(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.u(f.h(0,"focusId")):null
c=c.b(e)?A.eO(e,"radius"):0
m=b.gP(b)?0:A.eO(b,"heatOutputWatts")
l=b.gP(b)?0:A.eO(b,"surfaceTemperatureCelsius")
k=b.gP(b)?0:A.eO(b,"radiusM")
if(b.gP(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a1(b.h(0,"offsetY")):0
return new A.cK(a1,a2,a3,a4,a5,new A.qt(r,q,s),p,o,n,c,m,l,k,j,A.Fa(a0))},
Fa(a){if(a.gP(a))return B.jK
return new A.l4(A.cX(a,"bodyType"),A.eO(a,"massKg"),A.eO(a,"volumeM3"),A.eO(a,"densityKgM3"),A.eO(a,"friction"),A.eO(a,"restitution"),J.aa(a.h(0,"collision"),!0))},
jZ(a,b){return t.P.b(a)?a:A.e2(b+" is not an object")},
cX(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e2(b+" is not a string")},
eO(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e2(b+" is not finite")},
no(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xH())}else s=!0
if(s)return A.e2(b+" is not a finite vec3")
s=J.aQ(a)
return new A.k(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
e2(a){return A.f(A.M(a,null,null))},
q6:function q6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q9:function q9(a){this.a=a},
q7:function q7(a){this.a=a},
q8:function q8(a){this.a=a},
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
l4:function l4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qr:function qr(a,b){this.a=a
this.b=b},
xH:function xH(){},
qs:function qs(a){this.a=a},
dK:function dK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
yY(a,b,c,d){return new A.lc(a,d,c,b)},
ep:function ep(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
fu:function fu(a,b,c,d,e,f,g){var _=this
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
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
fi:function fi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
F3(a){return A.F2(a)},
F2(a){var s,r,q,p,o,n,m=A.CN(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.CN(m.h(0,"cues"),"sound emitter cues").gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.hN)
k.l(0,r.a,q)}s=A.zW(m,"id")
r=A.zW(m,"roomId")
p=A.zW(m,"placementId")
o=A.Jd(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hM("gain is not a number")
return new A.d7(s,r,p,o,n,A.aW(k,l,l))},
CN(a,b){return t.P.b(a)?a:A.hM(b+" is not an object")},
zW(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hM(b+" is not a string")},
Jd(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xG())}else s=!0
if(s)throw A.b(A.M(b+" must be a numeric vec3",null,null))
s=J.aQ(a)
return new A.k(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
hM(a){return A.f(A.M(a,null,null))},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
qg:function qg(){},
qh:function qh(){},
d7:function d7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q2:function q2(){this.b=this.a=null},
f6:function f6(a,b){this.a=a
this.b=b},
qc:function qc(){this.b=this.a=null},
d6:function d6(a,b){this.a=a
this.b=b},
xG:function xG(){},
AM(a,b,c,d,e,f){var s=t.N
return new A.qi(e,f,c,a,A.aW(A.aZ(d,s,s),s,s),A.ad(b,s))},
AN(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
h.l(0,p.a,new A.iK(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.w)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.w)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.w)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.w)(o),++l){j=o[l]
i.l(0,j.a,new A.iy(j.d,j.r))}return A.AM(a.y.b,B.n,i,B.aO,h,s)},
F4(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.lr
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bv
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.b_(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.hK)
p=t.N
o=A.n(p,t.DL)
for(n=a.gN(),n=n.gv(n),m=t.z;n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cN)
l=A.aZ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bx(j)||!A.bx(i))A.f(B.cN)
o.l(0,k,new A.iK(j,i))}h=A.n(p,t.y)
for(n=a0.gN(),n=n.gv(n);n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!A.bx(l.b))throw A.b(B.hG)
h.l(0,k,A.T(l.b))}g=A.n(p,t.m2)
for(n=a1.gN(),n=n.gv(n);n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cL)
l=A.aZ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bx(f)||!A.bx(e))A.f(B.cL)
g.l(0,k,new A.iy(f,e))}d=A.n(p,p)
for(q=s.gN(),q=q.gv(q);q.m();){p=q.gq()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.iJ)
d.l(0,n,A.u(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gq()
if(typeof b!="string"||b.length===0)throw A.b(B.fZ)
B.a.k(c,b)}return A.AM(a2,c,g,d,o,h)},
zR(a,b){return a.a.a===b.a&&a.a2(0,b.gaE(b))},
qi:function qi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iK:function iK(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
l_(a){var s=B.bB.h(0,a)
if(s==null)throw A.b(A.i("Unknown house surface material: "+a))
return s},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
EL(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.he(e,A.B(e).c)
q=new A.eI()
q.c0((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ie(a,q,2,r,1+s,A.aF(["time"],t.N))
break
case 3:A.ie(a,q,3,r,1+s,A.aF(["place"],t.N))
break
case 4:A.ie(a,q,4,r,2+s,p)
A.EH(a,q,4)
break
case 5:A.ie(a,q,5,r,s,p)
A.EF(a,q,5)
break
case 6:A.ie(a,q,6,r,s,p)
A.EG(a,q)
A.EK(a,q,6)
break
case 7:A.EI(a,q,7)
break
default:if(s>0)A.ie(a,q,b,r,s,p)}},
EE(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.EJ(a,b,c))return!1
return!0},
ie(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(A.EE(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dE(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.AE(a,b,o[p],f)}},
AE(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aZ(B.a.ga6(o).a,n,n)
if(d==null)s=A.c(B.D.slice(0),t.s)
else{n=t.vY
s=A.K(new A.I(B.D,t.Ag.a(new A.p9(d)),n),n.i("r.E"))}n=s.length
if(n===0)return
n=b.aY(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.f4(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.aY(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.ec(c.a,m,B.a.ga6(o).b)},
EH(a,b,c){var s=A.AF(a,b,c)
if(!a.cb(s))return
a.fg(c,t.G.a(s),0,B.bi,null)},
AF(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.D[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.aY(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
EF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dE(i,b)
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
j=s.f4(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aY(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.ec(q.a,o,B.a.ga6(i).b)
a.ec(p.a,n,B.a.ga6(r).b)},
EG(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aY(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a7(0,q[r].a)},
EK(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aY(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.AE(a,b,q[s],null)},
EI(a,b,c){var s=c+1,r=A.AF(a,b,s)
if(!a.cb(r))return
a.fg(s,t.G.a(r),0,B.bi,null)},
EJ(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga6(b.c).c===B.aL}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga6(b.c).c===B.aL}if(c===21)return b.e
return!1},
p9:function p9(a){this.a=a},
Gg(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p=A.aG(q==null?B.n:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.uU(n)},
qM(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.lb(A.aW(p,q,q),b,c)},
AY(a){var s=t.N
return A.qM(t.P.a(a.h(0,"fields")).bs(0,new A.qN(),s,s),A.a1(a.h(0,"shakiness")),A.EQ(B.kq,A.u(a.h(0,"hand")),t.qX))},
EP(a){var s,r,q,p,o=a.h(0,"margin"),n=A.h(a.h(0,"ordinal")),m=A.h(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.AY(r.a(s.gq())))
s=A.aq(a.h(0,"corroborator"))
q=A.T(a.h(0,"locked"))
p=A.zo(a.h(0,"lastReadDay"))
return new A.c4(n,m,l,s,q,p,o==null?null:A.AY(r.a(o)))},
er:function er(a,b){this.a=a
this.b=b},
uU:function uU(a){this.a=a},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(){},
qO:function qO(a){this.a=a},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AV(a){return new A.qx(a,A.n(t.S,t.g),A.a_(t.N),A.c([],t.t))},
Fg(a,b){var s,r,q,p,o=A.AV(a)
o.e=A.h(b.h(0,"nextOrdinal"))
o.f=A.h(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.E5(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.EP(r.a(s.gq()))
q.l(0,p.a,p)}return o},
qx:function qx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qE:function qE(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
ot:function ot(){},
Fx(a){var s,r,q,p,o,n,m,l,k=B.f.ai(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.h3)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.im)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gq()
if(j.b(p)){o=A.aq(p.h(0,"assetId"))
if(o==null)o=""
n=A.aq(p.h(0,"licenseId"))
if(n==null)n=""
m=A.aq(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.aq(p.h(0,"sourceFormat"))
r.push(new A.iM(o,n,m,l==null?"":l))}else r.push(A.f(B.hZ))}return new A.rL(A.Fy(r))},
Fy(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.n(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
p=A.iQ("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.K(o))throw A.b(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aP(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aF(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.b(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.IP(q.c))throw A.b(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.l(0,o,q)}return A.aW(k,m,l)},
IP(a){if(a.length===0||B.c.V(a,"/")||B.c.p(a,"://"))return!1
if(B.c.bp(a.toLowerCase(),".obj")||B.c.bp(a.toLowerCase(),".mtl")||B.c.bp(a.toLowerCase(),".fbx"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xv())},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL:function rL(a){this.a=a},
xv:function xv(){},
B8(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.n(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
p=A.iQ("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.K(o))throw A.b(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.b(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aP(m).length===0||m==="unknown"||m==="unlicensed")throw A.b(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.b(A.M("package is not approved: "+o,j,j))
l=A.DA(n)
if(l.length!==0)throw A.b(A.M("package manifest is invalid for "+o+": "+B.a.br(l,new A.rN(),i).W(0,"; "),j,j))
p=p.b
k=A.Kc(n,p)
if(k.length!==0)throw A.b(A.M("package payloads are invalid for "+o+": "+B.a.br(k,new A.rO(),i).W(0,"; "),j,j))
if(A.B4(n,p)!==n.c)throw A.b(A.M("package hash mismatch: "+o,j,j))
g.l(0,o,q)}return A.aW(g,i,h)},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
lA:function lA(a){this.a=a},
rN:function rN(){},
rO:function rO(){},
rF:function rF(){},
rE:function rE(a,b,c){this.b=a
this.c=b
this.d=c},
rG:function rG(){},
Fv(a,b,c){return B.mx},
lt:function lt(a,b){this.a=a
this.b=b},
rH:function rH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rI:function rI(){},
rJ:function rJ(a){this.d=a},
hk:function hk(){},
rK:function rK(a){this.a=a},
rM:function rM(){},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(){},
rR:function rR(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rY:function rY(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Bi(a){if(!isFinite(0))A.f(A.a7(0,"interpolation",null))
return new A.ta(a)},
lH:function lH(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
ta:function ta(a){this.a=a},
lI:function lI(a,b,c){this.a=a
this.b=b
this.c=c},
Bg(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.he(c,A.B(c).c)
r=A.K(r,A.v(r).c)
B.a.X(r)
s=t.N
r=A.ad(r,s)
r=new A.t9(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aW(l,s,t.X))
r.jB(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Bh(a,b,c,d){var s=A.nh("RENDERER_SHA"),r=A.nh("GAME_SHA"),q=A.nh("DART_SDK_VERSION")
return A.Bg(a,"7c6302a5a3ce-a5a2929e6a5c-dirty",b,!1,null,r,A.nh("LOCKFILE_SHA256"),d,A.nh("PROJECT_VERSION"),s,q,null)},
nh(a){var s=B.li.h(0,a)
return s.length===0?null:s},
t9:function t9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
tb:function tb(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
tZ:function tZ(a){this.a=a},
u_:function u_(){},
X(a,b,c,d,e,f,g,h,i,j){return new A.cs(e,g,a,f,i,h,j,c,c,b,B.e6)},
Bo(){var s=new A.u0(B.av)
s.w=t.yu.a(A.c([A.X(B.Y,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.X(B.Y,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.X(B.Y,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.X(B.Y,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.X(B.Y,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.X(B.aa,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.X(B.aa,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.X(B.aa,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.X(B.aa,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.X(B.aa,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.X(B.aw,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.X(B.aw,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.X(B.aw,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.X(B.aw,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.X(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.X(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.X(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.X(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.X(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.X(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.X(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.X(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.X(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.X(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.X(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.X(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.X(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.X(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.X(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.X(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.X(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.X(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.X(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.X(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.X(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.X(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.X(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.X(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.X(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.X(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.X(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.X(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.X(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.X(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.X(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.X(B.Y,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.X(B.u,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.X(B.u,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.X(B.u,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.X(B.u,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.X(B.u,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.X(B.u,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.X(B.u,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05),A.X(B.u,!0,1,"Ray-marched cloud layer on clear skybox pixels","cloud_enable",!0,"Volumetric Cloud Shell",1,0,0.05),A.X(B.u,!0,-0.1,"Override weather cloud coverage (-0.1 = schedule driven)","cloud_coverage_override",!1,"Cloud Coverage Lock",1,-0.1,0.05),A.X(B.u,!0,0.72,"Extinction through the finite volumetric cloud shell","cloud_density",!1,"Cloud Optical Density",1,0,0.05),A.X(B.u,!0,0.55,"High-frequency erosion mixed into the cloud body noise","cloud_detail",!1,"Cloud Detail",1,0,0.05),A.X(B.u,!0,1,"Scale for authored wind transport through the cloud shell","cloud_speed",!1,"Cloud Advection Speed",2,0,0.05),A.X(B.u,!0,0.25,"Bounded forward-scattered edge response around cloud forms","cloud_silver_lining",!1,"Cloud Silver Lining",1,0,0.05),A.X(B.u,!0,12,"Sky cloud samples per pixel (4=preview, 24=clean)","cloud_samples",!1,"Cloud Raymarch Samples",24,4,1)],t.hT))
return s},
bZ:function bZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
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
u0:function u0(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
u7:function u7(a){this.a=a},
u1:function u1(){},
u2:function u2(){},
u8:function u8(){},
u5:function u5(a){this.a=a},
u6:function u6(a){this.a=a},
u4:function u4(a){this.a=a},
u3:function u3(a){this.a=a},
G2(a){var s,r,q,p,o,n=B.b.n(a,7,17),m=new A.ug()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cv()
if(o<n)s=p
else r=p}return(s+r)*0.5},
Bs(a){var s
if(!isFinite(a))throw A.b(A.a7(a,"horizonVisibility01",null))
s=B.b.n(a,0,1)
return s*s*(3-2*s)},
ug:function ug(){},
AB(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.f(A.M("saved day-loop resources must not be negative",null,null))
return new A.p2(c,g,b,a,e,d===!0,s)},
Ey(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.hq)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gq()
if(!k.b(j))throw A.b(B.hL)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.b_(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.hj)
f=A.bK(new A.I(B.dd,q.a(new A.p3(h)),p),o)
e=A.bK(new A.I(B.db,n.a(new A.p4(g)),m),l)
if(f==null||e==null)throw A.b(B.iy)
B.a.k(s,new A.hs(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.b_(d)||!A.b_(c)||!A.b_(b)||!A.bx(a))throw A.b(B.hW)
return A.AB(c,d,a1,a,b,s,a3)},
c_:function c_(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p3:function p3(a){this.a=a},
p4:function p4(a){this.a=a},
l2:function l2(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
vd:function vd(a,b){this.b=a
this.c=b},
fv:function fv(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
qk:function qk(a){this.c=a},
qo:function qo(a,b,c){this.a=a
this.b=b
this.d=c},
qp:function qp(){},
zB(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.b(B.iv)
B.a.k(p,q)}return p},
cr:function cr(a,b){this.a=a
this.b=b},
td:function td(){},
de:function de(){},
te:function te(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},
HZ(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.x9(s,a).$0())
return r},
nl(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
ey:function ey(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
v5:function v5(a){this.b=a},
x9:function x9(a,b){this.a=a
this.b=b},
jU(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
BI(a){var s
switch(a.a){case 0:s=B.pl
break
case 1:s=B.pk
break
case 2:s=B.pn
break
case 3:s=B.pj
break
case 4:s=B.pm
break
default:s=null}return s},
BH(a,b){return new A.mh(!1,0,0)},
Gj(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.jU(f)||!A.jU(a)||!A.jU(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.b(A.p("weather impact inputs must be finite and valid",j))
if(b===B.y)return A.BH(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.A()
m=A.Gi(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.BH(a,g)
f.a4(0,a.ab(0,f).a8(0,p))
l=g.bo(g)
A:{if(B.aP===b||B.aq===b){s=B.ph
break A}if(B.ar===b){s=q.d>0.5?B.pi:B.cc
break A}if(B.a6===b){s=l>1?B.eu:B.cc
break A}if(B.y===b){s=B.pg
break A}s=j}if(s===B.eu){k=q.e
g.ab(0,r.a8(0,2*g.bo(r))).a8(0,k)}s=s===B.cc?d:0
return new A.mh(!0,0.5*d*l,s)},
Gi(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ab(0,new A.k(a2,a2,a2)),d=a1.c.a4(0,new A.k(a2,a2,a2)),c=a0.ab(0,a),b=new A.k(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.v3(a,o)
m=A.v3(c,o)
l=A.v3(e,o)
k=A.v3(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.BF(o,m>0)
if(j>i){h=A.BF(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.BG(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.BG(c)}if(r>1)return f
return new A.a5(r,b)},
v3(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
BF(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.k(r,0,0)
break A}if(1===a){s=new A.k(0,r,0)
break A}s=new A.k(0,0,r)
break A}return s},
BG(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.k(0,q>0?-1:1,0)
if(r>=n)return new A.k(s>0?-1:1,0,0)
return new A.k(0,0,o>0?-1:1)},
BJ(a,b,c){var s=new A.hA(b,c,a)
s.hi()
return s},
BK(a,b,c){return A.BJ(a,b,c)},
Gn(a){var s,r,q
if(!t.f.b(a))throw A.b(B.io)
s=new A.v6(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.BJ(s.$1("materialDissolution01"),r,q)},
za(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
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
if(h===B.y&&l.b)h=B.aP
g=A.Gk(h,B.b.n(l.c,0,1))*k
f=A.Gl(h)
e=h===B.ar?g/120:0
d=h===B.y?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.n(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.v4(h,new A.k(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
Gm(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.jU(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.b(A.p("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.p("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.p("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.k(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.n((e-b)/Math.max(1,s),0,1)
return new A.uW(m,e,l,d,e>b)},
Gk(a,b){var s
if(a===B.y)return 0
s=0.00005+b*0.00045
return a===B.a6?s*0.75:s},
Gl(a){var s
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
j9:function j9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uW:function uW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v4:function v4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ft:function ft(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fr:function fr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eE:function eE(a,b){this.a=a
this.b=b},
mh:function mh(a,b,c){this.a=a
this.f=b
this.r=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
v6:function v6(a){this.a=a},
v7:function v7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Jo(a){var s
A:{if("broadcast"===a){s=B.eI
break A}if("visitor"===a){s=B.eJ
break A}if("aftermath"===a){s=B.eK
break A}if("ending"===a){s=B.eL
break A}s=A.f(A.M("screenplay event has no consumer: "+a,null,null))}return s},
EX(a){var s=A.K(a.c,t.z)
B.a.Y(s,new A.px())
s=new A.pw(A.ad(s,t.Dm))
s.oT()
return s},
EW(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kR(a,c,A.f8(B.n,t.N))
s=t.N
r=J.Aq(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kR(a,c,A.f8(new A.I(r,q.i("l(r.E)").a(new A.pv(a)),q.i("I<r.E>")),s))},
eX:function eX(a,b){this.a=a
this.b=b},
pw:function pw(a){this.a=a},
px:function px(){},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(a){this.a=a},
rj(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.L(0,a)
s=A.n(r,r)
if(b!=null)s.L(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.ri(q,s,r)},
Fp(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.b_(s)||s!==1)return l
r=A.B6(a.h(0,"choices"))
q=A.B6(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gN(),k=k.gv(k);k.m();){n=k.gq()
m=A.EU(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.l(0,n,m)}return A.rj(r,q,p)},
B6(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gN(),s=s.gv(s);s.m();){q=s.gq()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.l(0,p,A.u(q.b))}return r},
EU(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.b_(r)||r<1||!A.b_(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.d1(s,r,q,p)},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(){},
rl:function rl(){},
rm:function rm(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Fu(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.O(a);s.m();){r=s.gq()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bC("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rC(b,p)},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rC:function rC(a,b){this.a=a
this.b=b},
rD:function rD(a){this.a=a},
hu(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q.l(0,B.d.t(r.a),r.b)}return q},
uk:function uk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ul:function ul(){},
um:function um(){},
fq:function fq(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b){this.a=a
this.b=b},
mf:function mf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ai(a,g)
if(!t.f.b(f))throw A.b(B.ii)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bv
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.ie)
p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.FV(o.gq()))
o=A.c([],t.D)
for(n=J.O(q);n.m();)o.push(A.FU(n.gq()))
n=t.N
m=A.a_(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.w)(p),++k){j=p[k].a
if(!m.k(0,j))throw A.b(A.M("duplicate screenplay scene: "+j,g,g))}i=A.a_(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.w)(o),++k){n=o[k].a
if(!i.k(0,n))throw A.b(A.M("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.O(s);n.m();){h=n.gq()
if(typeof h!="string"||h.length===0)A.f(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.ui(o)},
FU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.u(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.u(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.u(a.h(0,f)).length===0)throw A.b(B.hD)
s=a.h(0,"effects")
if(s==null)s=B.bv
if(!t.j.b(s)||J.k7(s,new A.tk()))throw A.b(B.il)
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
l=new A.tl(a)
m=A.u(a.h(0,"id"))
k=A.u(a.h(0,g))
j=A.u(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.O(s);h.m();)i.push(A.u(h.gq()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.dP(m,k,r,q,j,A.ad(i,t.N),n,h)},
FV(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
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
for(k=J.O(p);k.m();){j=k.gq()
if(typeof j!="string"||j.length===0)A.f(B.i5)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gq()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.iD)
A.u(j.h(0,"kind"))
A.u(j.h(0,"text"))
A.aq(j.h(0,"speaker"))
l.push(new A.lM())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.FT(l.gq()))
return new A.lP(s,m)},
FT(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.hw)
s=A.u(a.h(0,m))
A.u(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gq()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.ib)
o=A.u(p.h(0,m))
n=A.u(p.h(0,"label"))
A.u(p.h(0,"next"))
r.push(new A.lO(o,n))}return new A.lN(s)},
ui:function ui(a){this.c=a},
uj:function uj(){},
dP:function dP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
tk:function tk(){},
tl:function tl(a){this.a=a},
lP:function lP(a,b){this.a=a
this.b=b},
lM:function lM(){},
lN:function lN(a){this.a=a},
lO:function lO(a,b){this.a=a
this.b=b},
un:function un(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
uo:function uo(){},
up:function up(){},
k9:function k9(a){this.a=a},
yP:function yP(a,b,c){this.b=a
this.e=b
this.f=c},
Ea(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.h2)
s=new A.nC()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.zp(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.ea(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b5(B.by,new A.nA(a),new A.nB()))},
d_:function d_(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nC:function nC(){},
nA:function nA(a){this.a=a},
nB:function nB(){},
nN:function nN(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nP:function nP(a){this.a=a},
nO:function nO(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
Eg(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hT)
s=new A.o2()
return new A.ec(s.$1$2(B.bw,a.h(0,"output"),t.xs),s.$1$2(B.bq,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bp,a.h(0,"reverb"),t.gc),s.$1$2(B.bn,a.h(0,"ducking"),t.ul))},
cG:function cG(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
o2:function o2(){},
o3:function o3(a,b){this.a=a
this.b=b},
o4:function o4(a){this.a=a},
ov:function ov(a){this.a=a
this.b=null},
oz(a,b,c){var s
b.A()
if(c<1||c>6)throw A.b(A.a7(c,"level","must be between 1 and 6"))
s=A.F(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.ox(s,b)
return s},
el(a,b,c,d){var s,r,q
b.A()
s=b.e
r=d==null?b.c:d
q=A.F(a,"button","brush-button brush-state-"+s.b,r)
A.ox(q,b)
q.type="button"
q.disabled=s===B.aF
q.addEventListener("click",A.Z(new A.oy(c)))
return q},
El(a,b,c,d){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aF
A.ox(s,b)
s.addEventListener("change",A.Z(new A.oC(d,s)))
return s},
Ek(a,b,c,d,e,f){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aF
A.ox(s,b)
s.addEventListener("input",A.Z(new A.oB(s,e)))
return s},
yR(a,b){var s=B.c.jh(A.u(a.className),A.iQ("\\s+")),r=A.B(s),q=r.i("I<1>"),p=A.K(new A.I(s,r.i("l(1)").a(new A.oA()),q),q.i("r.E"))
s=b.b
B.a.k(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
ox(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.glC())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aF)a.setAttribute("aria-disabled","true")},
oy:function oy(a){this.a=a},
oC:function oC(a,b){this.a=a
this.b=b},
oB:function oB(a,b){this.a=a
this.b=b},
oA:function oA(){},
ej:function ej(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oE:function oE(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
oF:function oF(a){this.a=a},
Az(a){var s=!1
if(a.length!==0)if(!B.e1.p(0,a))s=B.nC.p(0,a)||B.ns.p(0,a)||B.nB.p(0,a)||!B.c.V(a,"Mouse")
return s},
HI(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return n},
Io(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.N(a,A.v(a).i("N<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gq()
q.l(0,r.a,A.c([r.b],s))}return q},
fZ(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hd(B.lf,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.Io(a))
s=new A.fY(g,d,h,e,f,c,A.aW(A.HI(q),s,r))
s.A()
return s},
Ev(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cM)
s=a.h(0,"version")
r=J.eT(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.b(B.cM)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gN(),j=j.gv(j),r=t.s,p=t.j;j.m();){o=j.gq()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.hE)
if(typeof m=="string")q.l(0,n,A.c([m],r))
else if(p.b(m)&&J.E6(m,new A.oS())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.u(l.gq()))
q.l(0,n,o)}else throw A.b(B.ha)}j=A.a1(a.h(0,"horizontalSensitivity"))
r=A.a1(a.h(0,"verticalSensitivity"))
p=A.T(a.h(0,"invertX"))
o=A.T(a.h(0,"invertY"))
return A.fZ(null,q,A.T(a.h(0,"holdToInteract")),j,p,o,2,r)},
zr(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
r=A.K(r.b,p)
o.l(0,q,r)}return o},
zM(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
A0(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oU:function oU(){},
oT:function oT(a){this.a=a},
oV:function oV(){},
oW:function oW(){},
oX:function oX(){},
oS:function oS(){},
ei:function ei(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.c=b},
ku:function ku(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Eu(a){var s=t.N,r=t.m
r=new A.ic(A.fZ(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.ju(a)
return r},
ic:function ic(a,b,c,d,e,f){var _=this
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
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
Ew(a){var s=new A.oY(a,A.a(a.createElement("div")))
s.b_(a)
s.jv(a)
return s},
oY:function oY(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
oZ:function oZ(a){this.a=a},
EC(a){var s=new A.p5(A.F(a,"div","door",null))
s.jx(a)
return s},
AC(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
p5:function p5(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
p6:function p6(a){this.a=a},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
EM(a){var s=new A.pb(a,A.a(a.createElement("div")))
s.b_(a)
s.jy(a)
return s},
pb:function pb(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pc:function pc(a){this.a=a},
pF:function pF(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pG:function pG(){},
EY(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.pH(a.b===B.cT,a.c===B.cX,s,a.e===B.cU,a.f===B.cR,a.r===B.cZ,a.w,a.x)},
pH:function pH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yS(a,b,c,d,e,f,g,h,i,j,k){return new A.h5(e,g,k,f,b,h,d,c,a,i,j)},
EZ(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.i8)
s=new A.pI(a)
r=a.h(0,"contextualReminders")
if(!A.bx(r))throw A.b(B.iw)
q=!A.bx(a.h(0,i))||A.T(a.h(0,i))
p=s.$1$2("interactionMode",B.bx,t.bK)
o=s.$1$2("promptDensity",B.bA,t.dn)
n=s.$1$2("textPacing",B.bz,t.j_)
m=s.$1$2("journalLayout",B.br,t.gm)
l=s.$1$2("confirmations",B.bl,t.aJ)
k=s.$1$2("saveFeedback",B.bs,t.mx)
j=s.$1$2("focusLossBehavior",B.aN,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bo,t.vS):B.b9
return A.yS(s,l,r,j,p,m,o,k,q,A.bx(a.h(0,g))&&A.T(a.h(0,g)),n)},
dD:function dD(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
h5:function h5(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pI:function pI(a){this.a=a},
pJ:function pJ(a,b){this.a=a
this.b=b},
pK:function pK(a){this.a=a},
AK(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hQ)
s=B.a.b5(B.df,new A.pW(a),new A.pX())
r=A.u(a.h(0,"renderScale"))
q=A.T(a.h(0,"dynamicResolution"))
p=A.u(a.h(0,"frameTarget"))
o=A.u(a.h(0,"antialiasing"))
n=A.u(a.h(0,"textureQuality"))
m=A.aq(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.aq(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.aq(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.Co(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dG(1,s,r,q,p,o,n,m,l,k,j===!0)
i.A()
return i},
h8(a,b){var s=b==null?B.bh:b
return new A.pY(s,a==null?B.bh:a)},
Dq(a,b){var s,r,q
a.A()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.ea(b.a>=2?"msaa2":"off")
B.a.k(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.ea("off")
B.a.k(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hz(!1)
B.a.k(s,"dynamic resolution timing is unavailable")}if(q.b===B.bf&&b.a<2){q=q.hA(B.bg)
B.a.k(s,"High preset was reduced to Standard")}return new A.pP(q,A.ad(s,t.N))},
cI:function cI(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pW:function pW(a){this.a=a},
pX:function pX(){},
pY:function pY(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
pP:function pP(a,b){this.a=a
this.b=b},
F0(a){var s=new A.iq(A.n(t.N,t.m),B.bh,a,A.a(a.createElement("div")))
s.b_(a)
s.jz(a)
return s},
iq:function iq(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pV:function pV(a){this.a=a},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(){this.c=0},
F1(a){var s=new A.q_(a,A.a(a.createElement("div")))
s.b_(a)
s.jA(a)
return s},
q_:function q_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
q0:function q0(a){this.a=a},
qy:function qy(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qz:function qz(a){this.a=a},
qA:function qA(a){this.a=a},
qB:function qB(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(){},
qD:function qD(){},
K7(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.b(A.p("temperature gauge range must be finite and ordered",null))
if(!isFinite(a))return 0.5
return B.b.n((a-c)/(b-c),0,1)},
dc:function dc(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rr:function rr(a,b,c,d,e,f,g){var _=this
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
Cx(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.W)
for(s=t.m,r=0;r<A.h(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
iJ:function iJ(){},
bB:function bB(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
rx:function rx(){},
ry:function ry(){},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
rw:function rw(a){this.a=a},
rz:function rz(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
rA:function rA(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rB:function rB(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
rW:function rW(a){this.a=a
this.b=null},
FW(a){var s=new A.tn(a,A.a(a.createElement("div")))
s.b_(a)
s.jC(a)
return s},
tn:function tn(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
to:function to(a,b){this.a=a
this.b=b},
tp:function tp(a){this.a=a},
lQ(a,b){var s=t.N,r=t.m
r=new A.hr(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.yM(),B.aB,A.n(s,r),A.n(s,r),B.b1,A.n(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.jD(a,b)
return r},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tO:function tO(a){this.a=a},
tP:function tP(a){this.a=a},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a){this.a=a},
tS:function tS(a){this.a=a},
tG:function tG(a,b){this.a=a
this.b=b},
tH:function tH(a,b){this.a=a
this.b=b},
tF:function tF(a){this.a=a},
tI:function tI(a){this.a=a},
tq:function tq(a,b,c){this.a=a
this.b=b
this.c=c},
tJ:function tJ(a,b){this.a=a
this.b=b},
tK:function tK(a,b){this.a=a
this.b=b},
tL:function tL(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(a){this.a=a},
tx:function tx(a){this.a=a},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
tA:function tA(a){this.a=a},
tB:function tB(a){this.a=a},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
tr:function tr(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
tu:function tu(a){this.a=a},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
tM:function tM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tU(a){return B.a.b5(B.F,new A.tV(a),new A.tW(a))},
FX(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
q.l(0,r.a,r.e)}return q},
dR(a,b){var s=t.z
s=A.hd(A.FX(),s,s)
if(a!=null)s.L(0,a)
s=new A.tT(b,A.aW(s,t.N,t.K))
s.jE(a,b)
return s},
Bn(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.is)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.hp)
return A.dR(A.aZ(s,t.N,t.K),A.h(a.h(0,"version")))},
bN:function bN(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tV:function tV(a){this.a=a},
tW:function tW(a){this.a=a},
tT:function tT(a,b){this.a=a
this.b=b},
z6(a,b){var s=b==null?A.dR(null,1):b
return new A.tX(s,a==null?A.dR(null,1):a)},
FY(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.F[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fd(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dv(r)
J.b7(l,s.a,r)}catch(n){if(!(A.ah(n) instanceof A.A))throw n}}m=A.dR(l,1)
return A.z6(m,m)},
tX:function tX(a,b){this.a=a
this.b=b},
G0(a){var s=new A.uc(A.n(t.u5,t.nx),a,A.a(a.createElement("div")))
s.b_(a)
s.jF(a)
return s},
uc:function uc(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
ud:function ud(){},
ue:function ue(a,b,c){this.a=a
this.b=b
this.c=c},
Ed(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gN(),n=n.gv(n),p+=":";n.m();){m=n.gq()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.cE(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.nL())
return new A.nK(A.ad(i,t.bC),A.a_(t.N))},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nK:function nK(a,b){this.a=a
this.b=b},
nM:function nM(){},
nL:function nL(){},
Gf(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.pf
s=t.T
r=A.n(s,t.q1)
q=A.v(a).i("ac<1>")
p=A.K(new A.ac(a,q),q.i("r.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.w)(p),++l){k=p[l]
for(j=a.h(0,k).gN(),j=j.gv(j);j.m();){i=j.gq()
h=i.a
if(h<1||h>21)return new A.bv(new A.bF(B.oY,k+" has an out-of-range authored day "+h+"."))
g=A.Ge(k,h,i.b,m)
if(g instanceof A.bv)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.l(0,new A.c2(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ae(o,o.r,o.e,A.v(o).i("ae<2>"));o.m();){n=o.d
J.e8(e.bU(n.b,new A.uO()),n)}o=A.aW(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.N(e,e.$ti.i("N<1,2>")).gv(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aG(d.b,!1,m)
c.$flags=3
q.l(0,j,c)}return new A.md(new A.mc(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a8,A.rj(b,b,b)))},
Ge(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.da[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gN(),k=k.gv(k),j=m.length;k.m();){i=k.gq()
h=i.a
if(!B.c.V(h,m))continue
g=A.dL(B.c.aQ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bv(new A.bF(B.oZ,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dj
B.a.k(l,new A.ce(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.uL())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bv(new A.bF(B.es,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bv(new A.bF(B.es,a+" day "+s+" has no authored tiers."))
return new A.mK(c)},
mc:function mc(a,b,c,d,e,f,g,h){var _=this
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
uR:function uR(a){this.a=a},
uQ:function uQ(a){this.a=a},
uS:function uS(a){this.a=a},
uM:function uM(a){this.a=a},
uN:function uN(){},
uP:function uP(a){this.a=a},
uO:function uO(){},
uK:function uK(a){this.a=a},
uJ:function uJ(a){this.a=a},
uL:function uL(){},
md:function md(a){this.a=a},
mK:function mK(a){this.a=a},
JF(a){var s,r,q,p=A.a_(t.N)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
for(q=r.b.gak(),q=q.gv(q);q.m();)if(q.gq().ga3().M(0,new A.xV())){p.k(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.X(s)
return s},
JE(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aG(b,!0,s)
B.a.X(r)
q=new A.eI()
q.c0((a^913741)>>>0)
p=q.aY(4)
if(!(p>=0&&p<4))return A.d(B.d9,p)
o=B.d9[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aG(r,!0,s)
B.a.dE(m,q)
s=A.hv(m,0,A.e6(n,"count",t.S),A.B(m).c).bE(0)
B.a.X(s)
return s},
xV:function xV(){},
BD(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.b_(r)||!A.b_(q)||!A.b_(p)||r<1||q<0||q>23||p<0)return null
return new A.c2(s,r,q,p)},
Gd(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gq()
if(typeof p!="string")return i
r.k(0,p)}o=A.a_(t.T)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.BD(s.gq())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Ec(m)
if(!s&&l==null)return i
return new A.me(r,o,l)},
Ec(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.BD(a.h(0,"arrival"))
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
k=A.bK(new A.I(B.da,t.u_.a(new A.nH(r)),t.ni),t.hF)
j=A.bK(new A.I(B.l9,t.da.a(new A.nI(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bK(new A.I(B.k1,t.kr.a(new A.nJ(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.kb(s,k,j,p,i,n,A.aq(m))},
bU:function bU(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dj:function dj(a,b){this.a=a
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
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
uI:function uI(){},
kb:function kb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nH:function nH(a){this.a=a},
nI:function nI(a){this.a=a},
nJ:function nJ(a){this.a=a},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
uT:function uT(){},
bv:function bv(a){this.a=a},
ma:function ma(a){this.a=a},
m8:function m8(a){this.a=a},
j7:function j7(a,b){this.a=a
this.b=b},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
wM(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l
var $async$wM=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).writeText(B.f.a0($.bS().eL(),null))),t.X),$async$wM)
case 6:$.q.j().setAttribute("data-renderer-shader-lab-clipboard","copied")
$.q.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
l=p.pop()
o=A.ah(l)
m=$.q.j()
m.setAttribute("data-renderer-shader-lab-clipboard","copy-failed")
$.q.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(o))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$wM,r)},
xa(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j
var $async$xa=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).readText()),t.N),$async$xa)
case 6:o=b
n=o
$.bS().nn(n)
$.q.j().setAttribute("data-renderer-shader-lab-clipboard","imported")
$.q.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
j=p.pop()
m=A.ah(j)
k=$.q.j()
k.setAttribute("data-renderer-shader-lab-clipboard","import-failed")
$.q.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(m))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$xa,r)},
IE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.k4())return f
n=A.dV().gaZ()
m=n.h(0,"captureSeed")
l=A.dL(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dL(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fd(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.ai(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gN(),m=m.gv(m);m.m();){o=m.gq()
if(typeof o.a!="string"||typeof o.b!="string"||!B.nt.p(0,o.b))return f
J.b7(p,A.u(o.a),A.u(o.b))}r=p}else return f}catch(g){if(A.ah(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.nA.p(0,i))return f
if(h!=null&&!B.nx.p(0,h))return f
return new A.vj(l,k,j,h,r)},
IF(){var s,r,q,p=A.dV().gaZ().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fn
break A}if("intimate"===p){s=B.fp
break A}s=B.fo
break A}r=A.dV().gaZ().h(0,"cameraFov")
q=A.fd(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fS(B.b.n(q,35,100)*3.141592653589793/180,s.b,s.c)},
hT(a){var s=$.bl
if(s===a&&B.c.p(A.u(a.b.className),"open"))return
if(s!=null)s.ah()
$.bl=a
if(a===$.fG.j())$.fG.j().iO($.ag===$.S.j().r)
if(a===$.cz.j())$.i2().ib("gameplay.viewport")
else $.i2().ob(A.CO(a))
s=$.am.j()
s.ay=!1
s.b0()
$.eN=0
a.bT()},
zH(a,b,c){var s,r,q
$.k_=!0
s=$.bl
if(s!=null)s.ah()
$.bl=a
s=$.i2()
if(s.a.a.length===0)s.ib(c)
r=A.K(s.a.a,t.oP)
r.push(new A.dJ(b,B.a2,c))
q=s.a
s.a=new A.ew(r,q.b,q.c)
s.ke(b)
s=$.am.j()
s.ay=!1
s.b0()
$.eN=0
a.bT()
$.k_=!1},
e5(a){var s,r,q,p,o,n,m,l=null
if($.k_)return
$.k_=!0
a.ah()
$.bl=null
s=$.i2().lP()
$.k_=!1
r=s.a
if(r===B.dN){$.eN=0
r=$.am.j()
r.b0()
r.ay=!0
q=A.G(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dM)return
r=s.c.a
r=r.length===0?l:B.a.ga6(r)
p=r==null?l:r.a
A:{if(B.bG===p){r=$.cz.j()
break A}if(B.dC===p){r=$.hL.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bl=r
n=$.am.j()
n.ay=!1
n.b0()
$.eN=0
r.bT()
m=o==null?l:A.G(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
k2(a){if($.bl===a&&B.c.p(A.u(a.b.className),"open"))a.ah()
else A.hT(a)},
hU(a){var s
if($.k_)return
if($.bl===a)$.bl=null
if(a===$.cz.j())$.i2().cr()
else $.i2().mR(A.CO(a))
$.eN=0
s=$.am.j()
s.b0()
s.ay=!0},
CO(a){if(a===$.cz.j())return B.dD
if(a===$.hL.j())return B.a2
if(a instanceof A.hr)return B.a2
if(a instanceof A.iq)return B.a2
if(a instanceof A.ic)return B.a2
if(a===$.jQ.j())return B.mh
if(a===$.fG.j())return B.mi
if(a===$.jP.j())return B.mj
if(a===$.nb.j())return B.a2
if(a===$.jN.j())return B.ml
return B.mk},
ng(a,b){var s
a.so_(new A.wv())
a.so2(new A.ww())
a.so1(new A.wx())
a.snW(new A.wD())
a.snZ(new A.wE())
a.soa(new A.wF())
a.so5(new A.wG())
a.so4(new A.wH())
a.sbf(b?new A.wI(a):new A.wJ(a))
a.sb7(b?new A.wK(a):new A.wy(a))
s=a.f
if(s===B.M)a.snN(new A.wz())
if(s===B.a4)a.snX(new A.wA())
if(s===B.N){a.snM(new A.wB())
a.so3(new A.wC())}},
HF(){var s=new A.wr(),r=$.eL.j()
r.sex(s)
r.so0(new A.ws(s))
r.sbf(new A.wt())
r.sb7(new A.wu())},
nf(a,b,c){return A.HC(a,b,c)},
HC(a,b,c){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nf=A.aM(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.wn()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.C)l=A.CU(l,j)
c.cD(new A.dY(i,2,null,l,k.i("dY<1,1>")))
s=4
return A.a6(i,$async$nf)
case 4:case 3:o=$.k5().b
n=$.aC
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a6(n.cV(b.a),$async$nf)
case 11:case 10:k=b.a
$.jV=A.h8(k,a)
$.eL.j().cB(a,k,b.b)
A.zJ()
A.k0()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ah(g)
$.jV=A.h8(o,o)
k=$.eL.j()
k.cB(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.zJ()
s=8
break
case 5:s=1
break
case 8:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$nf,r)},
It(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ai(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.ia)
q=A.AK(r.h(0,"requested"))
$.jV=A.h8(A.AK(r.h(0,"effective")),q)}catch(s){$.jV=A.h8(null,null)}p=$.k5().a
o=A.Dq(p,A.CB())
r=o.a
$.jV=A.h8(r,p)
$.eL.j().cB(p,r,o.b)
A.zJ()
A.k0()},
CB(){var s,r,q,p,o=$.fF.j().ghD().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.V(p,"max-samples-"))continue
r=A.dL(B.c.aQ(p,12),null)
if(r==null)r=1}return new A.pO(r,B.a.p(o,"disjoint-timer-query"))},
zJ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a0($.k5().C(),null))}catch(s){}},
HE(){var s=$.jM.j()
s.sex(new A.wo())
s.sbf(new A.wp())
s.sb7(new A.wq())},
Ir(){var s,r,q,p,o,n=null
try{n=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.zw=A.Ev(B.f.ai(n,null))}catch(s){$.zw=A.fZ(null,null,!1,1,!1,!1,2,1)}r=$.jM.j()
q=r.w=$.fL()
r.x=new A.ku(q)
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
r.e2()
$.am.j().eY($.fL().r)
r=$.am.j()
q=$.fL()
p=r.ch
p.a=q.f
p.eE()
r.b0()
A.CQ()},
CQ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a0($.fL().C(),null))}catch(s){}},
Iq(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jT=A.Eg(B.f.ai(r,null))}catch(s){$.jT=B.b1}$.hJ.j().iM($.jT)
A.CP()
A.zn()},
CP(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a0($.jT.C(),null))}catch(s){}},
zn(){var s=$.bm
if(s==null)return
s.iW($.jT)},
Is(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.zA=A.EZ(B.f.ai(r,null))}catch(s){$.zA=$.yM()}$.jO.j().iN($.cC())
A.CR()
A.Ck()},
CR(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a0($.cC().C(),null))}catch(s){}},
Ck(){var s,r="detailed",q=A.EY($.cC()),p=A.G(A.a(v.G.document).documentElement)
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
Ip(){var s,r=null
try{r=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dp=A.Ea(B.f.ai(r,null))}catch(s){$.dp=B.aB}$.fE.j().eX($.dp)
A.zI()
A.nd()},
zI(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a0($.dp.C(),null))}catch(s){}},
nd(){var s,r,q,p,o,n,m=$.dp,l=$.xC,k=$.A_,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.hk)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ag
$.zO=l
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
q=$.q.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Ci){m=$.bd.j()
l=$.dp.f
m.e=new A.k9(l==null?B.ag:l)
m=$.bd.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
CT(a){var s,r,q
A.eR("renderer-unavailable")
s=$.q.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.n(r,t.X)
q.l(0,"kind","pixeldart")
q.l(0,"explicit",$.dn.j().b)
$.dn.j()
q.l(0,"automatic",!1)
q.l(0,"fallback",!1)
q.l(0,"rejected",$.dn.j().d)
q.l(0,"aliasUsed",$.dn.j().f)
if($.dn.j().e!=null)q.l(0,"rejectionReason",$.dn.j().e)
if($.dn.j().r!=null)q.l(0,"aliasReason",$.dn.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a0(A.E(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.n,"selection",q],r,t.K),null))},
I2(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.xe(r,q)
r.addEventListener("change",A.Z(new A.xc(s)))
q.addEventListener("change",A.Z(new A.xd(s)))},
nv(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$nv=A.aM(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.G(A.a(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.q.b=e8
$.zz=A.G(A.a(e7.document).getElementById("fps"))
$.dn.b=$.DS().cz(A.dV().gaZ().h(0,"renderer"))
A.I3()
c1=$.q.j()
c2=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c1.width=c2
c2=$.q.j()
c1=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c2.height=c1
c3=A.G(A.a(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.Cf.b=c3
c3.width=A.h($.q.j().width)
c3.height=A.h($.q.j().height)
c1=new A.oE(c3,A.c([],t.km))
c4=A.G(c3.getContext("2d"))
if(!t.m.b(c4))A.f(A.i("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.tb(c1)
$.eQ=c1
c1.du(A.h($.q.j().width),A.h($.q.j().height))}n=B.fm.mH(e8)
if(n==null){A.CT("webgl2 unavailable")
s=1
break}try{c1=A.h($.q.j().width)
c2=A.h($.q.j().height)
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
m=new A.mN(n,c1,c2,c6,A.n(c7,t.qr),c8,A.n(c7,c9),A.n(c7,d0),A.n(c7,t.xp),A.n(c7,t.bE),A.n(c7,c9),A.n(c7,d0),c5,A.n(c7,c9),A.n(c7,d0),A.n(c7,c7),A.n(d1,d2),A.n(c7,t.qS),d3,B.ku,A.n(c7,t.Aj),A.n(c7,c7),A.n(c7,d2),A.n(c7,t.vD),A.n(c7,d2),A.n(c7,d2),new A.r5(A.n(c7,t.ml),A.n(c7,d1)),A.n(c7,t.mL),A.n(c7,t.w1),B.iK,B.mz,B.dh,B.di)
$.aC=m
c1=$.dn.j()
c2=t.dM.a(m)
if(c1.a!==B.aT)A.f(A.i("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.rE(c2,c1.C(),B.n5)
c2.nq()
c1.d=B.W
$.fF.b=c1}catch(f0){l=A.ah(f0)
k=A.cZ(f0)
g=$.q.j()
g.setAttribute("data-renderer-initialization-error",A.y(l))
g.setAttribute("data-renderer-error",A.y(l))
if($.k4())$.q.j().setAttribute("data-renderer-error-stack",A.y(k))
A.CT("pixeldart initialization failed")
s=1
break}A.k0()
p=4
A.eR("initializing")
$.cW.b=new A.oD(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.Ai())
$.xC=A.T(A.a(A.a(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.A_=A.T(A.a(A.a(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.zO=$.xC
$.cW.j()
c1=A.a(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.F5(A.E(["moveForward",A.c(["KeyW"],c5),"moveBack",A.c(["KeyS"],c5),"moveLeft",A.c(["KeyA"],c5),"moveRight",A.c(["KeyD"],c5),"interact",A.c(["KeyE"],c5),"secondary",A.c(["KeyQ"],c5),"run",A.c(["ShiftLeft"],c5),"crouch",A.c(["ControlLeft"],c5),"rotate",A.c(["KeyR"],c5),"reach",A.c(["KeyF"],c5),"journal",A.c(["KeyJ"],c5),"sleep",A.c(["KeyL"],c5),"pause",A.c(["Escape"],c5)],c2,c6))
c7=A.a(c1.document)
c5=new A.l1(c1,c7,A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),new A.k(0,0,0),new A.qq(),c5)
c1.addEventListener("keydown",A.Z(c5.gkH()))
c1.addEventListener("keyup",A.Z(c5.gkJ()))
c1.addEventListener("mousemove",A.Z(c5.gkP()))
c1.addEventListener("mousedown",A.Z(c5.gkN()))
c1.addEventListener("mouseup",A.Z(c5.gkR()))
c1.addEventListener("wheel",A.Z(c5.gkT()))
c1.addEventListener("blur",A.Z(c5.gkV()))
c7.addEventListener("pointerlockchange",A.Z(c5.gkL()))
$.am.b=c5
c5=$.q.j()
c1=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c5.width=c1
c1=$.q.j()
c5=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c1.height=c5
A.eR("renderer")
A.eR("text")
c5=$.fM()
s=7
return A.a6(c5.be(),$async$nv)
case 7:j=c5.oW()
i=A.Gf(j)
if(!(i instanceof A.md)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aP.b=i.a
$.na.b=A.Ed(j)
g=A.n(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.D[d5]
c6=A.u(f)
c7=c5.c
c7===$&&A.t()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aG(d6,!0,c2):B.n
J.b7(g,f,c6)}e=A.Gg(g)
s=8
return A.a6(A.nk(),$async$nv)
case 8:d=f2
$.zm.b=new A.ow(B.fl)
c=$.zm.j().oi(new A.y3(e,d))
d7=$.yN()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.b4.aY(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aV(c7.c)
if(c7==null)c7=7
if(c6<1)A.f(A.a7(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.f(A.a7(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a7(5760,"daySeconds","must be finite and > 0"))
d8=new A.kT(c6,7,5760)
d8.f5(c7)
d9=A.AV(e)
e0=g==null?A.AL(42):A.Dc(g,42)
g=A.AI(42,c2,e0,d8,d9,A.AB(6,16,d9,null,6,B.kE,d8),new A.kD(0,0,0,!1),A.rj(null,null,null))}else{g=c.a
g.toString
g=A.AJ(d,g,e)}$.V.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.EW(a,g,$.V.j().b)}$.wg=g
$.aP.j().y=$.V.j().z
g=A.ad(A.HZ($.V.j().b),t.fu)
$.wd.b=new A.v5(g)
g=$.yO()
c2=c.a
g.eG(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fF.j().f9(A.Bi($.V.j().gik()))
if(c.b!=null){g=c.b
g.toString
A.fI(g)}g=$.aP.j()
c2=A.JE($.V.j().b,A.JF(j.b))
g.sji(A.he(c2,A.B(c2).c))
A.eR("house")
$.S.b=$.V.j().c
$.nq.O(0)
c2=c.a
$.nq.L(0,A.IK(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.w)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.w)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.w)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.w)(c5),++e1){a7=c5[e1]
a7.sj8(a5)}}}a8=$.Ag()
if(a8!=null&&a8.length!==0)for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.w)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Ah()}}g=$.aC
if(g!=null)g.lO($.S.j())
$.bw.b=$.V.j().d
g=$.S.j().r
$.ag=g==null?"hall":g
g=$.S.j().eF(1.65)
if(g==null){$.S.j()
g=new A.k(12.9375,1.65,0.825)}$.xy=g
$.ch=$.ag===$.S.j().r?3.141592653589793:0
$.eS=0
g=$.e7()
$.xJ=$.xp=g
b1=g.ab(0,new A.k(0,1.3499999999999999,0))
$.eM.b=new A.kp(b1,J.Ak(b1,new A.k(0,1.2000000000000002,0)))
$.hK.b=new A.pe()
g=A.zB(B.n)
c2=A.zB(B.n)
c5=new A.te(B.H,g,c2)
if(!isFinite(0))A.f(B.h_)
if(!B.a.a2(c2,B.a.gaE(g)))A.f(B.hX)
if(c5.a===B.H&&c5.b!==0&&!c5.e)A.f(B.h8)
$.cg.b=c5
g=c.a
b2=A.Fw(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nw($.S.j())){g=b2.b
$.xJ=$.xp=$.xy=g
$.ch=b2.c
$.eS=b2.d
$.ag=b2.a
b3=g.ab(0,new A.k(0,1.3499999999999999,0))
g=$.eM.j()
g.slQ(b3)
g.b=J.Ak(b3,new A.k(0,1.2000000000000002,0))
g=$.eM.j()
c2=$.S.j()
c5=b2.e
c6=b2.f
g.iq($.ag,$.e7(),c2,c6,c5)
A.fI("restored position")}b4=$.S.j().eF(1.65)
g=$.q.j()
c2=$.S.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.F(b4.a,3)+","+B.b.F(b4.b,3)+","+B.b.F(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.FW(A.a(e7.document))
c2.snO(new A.y4())
c2.sbf(new A.y5())
c2.sb7(new A.yg())
$.hL.b=c2
c2=A.a(e7.document)
g=A.a(c2.createElement("div"))
c5=new A.rA(c2,g)
c5.b_(c2)
g.className=A.u(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.a(g.appendChild(A.oz(c2,B.f_,1)))
A.a(g.appendChild(A.F(c2,"p","settings-copy","The house waits. Choose what to do next.")))
e2=A.F(c2,"nav","pause-actions",null)
e2.setAttribute("aria-label","Pause actions")
c5.bu(c2,e2,B.dE,"resume")
c5.bu(c2,e2,B.dF,"settings")
c5.bu(c2,e2,B.dG,"controls")
c5.bu(c2,e2,B.dH,"save now")
c5.bu(c2,e2,B.dI,"help")
c5.bu(c2,e2,B.dJ,"credits")
c5.bu(c2,e2,B.dK,"back")
A.a(g.appendChild(e2))
c5.so6(new A.yq())
c5.sbf(new A.yr())
c5.so8(new A.ys())
c5.snS(new A.yt())
c5.so7(new A.yu())
c5.snY(new A.yv())
c5.snT(new A.yw())
c5.sb7(new A.y6())
$.cz.b=c5
c5=$.V.j().e
g=$.bw.j()
$.V.j()
$.nc.b=new A.qo(c5,g,new A.y7())
g=A.a(e7.document)
c5=$.V.j().e
c2=$.bw.j()
c6=$.nc.j()
c7=A.a(g.createElement("div"))
c6=new A.qy(c5,c2,c6,g,c7)
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
A.a(c7.appendChild(c6.jQ()))
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
A.a(e6.style).setProperty("--shake-max-px","2px")}$.jQ.b=c6
$.jQ.j().sb7(new A.y8())
g=A.a(e7.document)
c2=A.F(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.a(c2.style).setProperty("transition-duration","0.3s")
A.a(A.G(g.body).appendChild(c2))
$.Ce.b=new A.rW(c2)
c2=A.a(e7.document)
g=A.F(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.G(c2.body).appendChild(g))
$.Cd.b=new A.ov(g)
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
$.bd.b=new A.nN(c2,c5,B.R)
$.Ci=!0
c5=A.EC(A.a(e7.document))
c5.snR(A.Do())
c5.snQ(A.JS())
$.aA.b=c5
c5=$.cB()
c5.snP(new A.y9())
c5.snU(A.Do())
c5=c.a
b5=A.Gd(c5==null?null:c5.c.h(0,"visitors"))
if($.cC().Q&&b5!=null&&$.aP.j().eG(b5))A.IJ()
g=$.na.j()
c2=c.a
g.oG(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.O(b6);g.m();){b7=g.gq()
if(A.b_(b7))$.xD.k(0,b7)}g=A.G0(A.a(e7.document))
g.so9(new A.ya())
g.sb7(new A.yb())
$.fG.b=g
g=A.F1(A.a(e7.document))
g.sb7(new A.yc())
$.jP.b=g
g=A.Ew(A.a(e7.document))
g.sb7(new A.yd())
$.nb.b=g
$.jR.b=A.lQ(A.a(e7.document),null)
$.jS.b=A.lQ(A.a(e7.document),B.a3)
$.fE.b=A.lQ(A.a(e7.document),B.N)
A.ng($.jR.j(),!1)
A.ng($.jS.j(),!0)
A.ng($.fE.j(),!0)
A.Ip()
A.I2()
$.eL.b=A.F0(A.a(e7.document))
A.HF()
A.It()
$.hJ.b=A.lQ(A.a(e7.document),B.M)
A.ng($.hJ.j(),!0)
A.Iq()
$.jO.b=A.lQ(A.a(e7.document),B.a4)
A.ng($.jO.j(),!0)
A.Is()
$.jM.b=A.Eu(A.a(e7.document))
A.HE()
A.Ir()
g=A.EM(A.a(e7.document))
g.sb7(new A.ye())
g.snV(new A.yf())
$.jN.b=g
g=c.a
b8=A.EO(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.CS(b8)
A.eR("world")
A.CV()
A.a(e7.window).addEventListener("resize",A.Z(new A.yh()))
A.a(e7.document).addEventListener("visibilitychange",A.Z(new A.yi()))
A.a(e7.window).addEventListener("keydown",A.Z(new A.yj()))
A.a(e7.window).addEventListener("keyup",A.Z(new A.yk()))
A.a(e7.window).addEventListener("keydown",A.Z(new A.yl()))
A.a(e7.window).addEventListener("click",A.Z(new A.ym()))
$.q.j().addEventListener("mousemove",A.Z(new A.yn()))
$.q.j().addEventListener("click",A.Z(new A.yo()))
$.q.j().addEventListener("wheel",A.Z(new A.yp()))
A.hQ()
A.eR("raf")
A.h(A.a(e7.window).requestAnimationFrame(A.Z(A.Dp())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.ah(e9)
c0=A.cZ(e9)
A.xr(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nv,r)},
I1(a){var s,r,q,p=$.eQ
if(!$.aA.j().y||p==null)return
s=A.Ct(a)
if(s==null)return
r=$.cB()
q=p.i1(s.a,s.b)
r.r=q==null?null:q.b},
I0(a){var s,r=$.eQ
if(!$.aA.j().y||r==null)return!1
s=A.Ct(a)
if(s==null)return!1
return $.cB().nk(r.i1(s.a,s.b))},
Ct(a){var s=A.a($.q.j().getBoundingClientRect()),r=A.a1(s.width),q=A.a1(s.height)
if(r<=0||q<=0)return null
return new A.a5(A.h(a.clientX)-A.a1(s.left),A.h(a.clientY)-A.a1(s.top))},
I3(){var s=v.G
A.a(s.window).addEventListener("error",A.Z(new A.xf()))
A.a(s.window).addEventListener("unhandledrejection",A.Z(new A.xg()))},
eR(a){if($.zs===a)return
$.zs=a
$.q.j().setAttribute("data-boot-phase",a)},
k0(){var s,r,q,p,o,n=null,m=$.fF.j().ghD(),l=$.q.j(),k=A.dV().gaZ().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a0(m.C(),n))
k=$.dn.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.bS().gnJ().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.aC
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
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(B.ld,n))
l=$.aC
o=l==null?n:l.x
if(o!=null)$.q.j().setAttribute("data-renderer-profile-fallback",o)},
IB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.k4())return
s=$.Ag()
if(s!=null&&s.length!==0){r=$.q.j()
q=$.Ah()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.wd.j().ep($.V.j().gag().a)
r=$.q.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.yN()
o=q==null?a1:q.e
if(o!=null)$.q.j().setAttribute("data-automation-capture-shutters",o)
$.q.j().setAttribute("data-automation-rain-window-visibility",B.b.F(A.zN($.ag),3))
r=$.q.j()
q=$.zs
n=$.ag
m=$.S.j().r
l=$.S.j().x
k=$.ag
j=$.S.j().r
i=$.e7()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.eM.j().ghn()
f=$.eM.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a0(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.ch,"pitch",$.eS,"modal",$.bl!=null,"dialogueOverlay",$.aA.j().y,"inputEnabled",$.am.j().ay,"day",$.V.j().gag().a,"hour",$.V.j().gag().b],h,e),a1))
$.q.j().setAttribute("data-story-journal-entry-count",""+$.V.j().gag().r)
d=A.n(h,e)
for(r=$.S.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.w)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.l(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.q.j().setAttribute("data-automation-portals",B.f.a0(d,a1))
a=$.ne
r=!1
if(a!=null)if($.S.j().e.h(0,"cellar")!=null){r=$.S.j()
q=$.ag
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cs("cellar",$.ag)
$.q.j().setAttribute("data-audio-transmission-cellar",B.f.a0(A.E(["sourceRoom","cellar","listenerRoom",$.ag,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.q.j().setAttribute("data-audio-transmission-cellar","unavailable")},
k1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.cg.j().a!==B.H){A.fI("save unavailable during rupture")
return}try{p=$.zm.j()
o=$.V.j()
n=t.N
m=t.z
s=A.n(n,m)
l=$.ag
k=$.e7()
j=$.ch
i=$.eS
h=$.eM.j().ghn()
g=$.eM.j().d
J.b7(s,"player",new A.lv(l,k,j,i,h,g==null?null:g.b).C())
l=$.aP.j()
k=A.fk(l.b,n)
j=A.fk(l.c,t.T)
l=l.r
J.b7(s,"visitors",new A.me(k,j,l==null?null:new A.kb(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).C())
l=$.na.j().b
l=A.K(l,A.v(l).c)
B.a.X(l)
J.b7(s,"ambient",l)
l=$.wg
if(l!=null)J.b7(s,"authoredEvents",A.E(["delivered",l.gmO()],n,m))
l=A.K($.xD,A.v($.xD).c)
B.a.X(l)
J.b7(s,"unverifiables",l)
J.b7(s,"inventoryInspections",$.yO().C())
r=A.n(n,t.gG)
for(l=new A.N($.nq,A.v($.nq).i("N<1,2>")).gv(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.b7(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.b7(s,"weatherSurfaces",r)
r=$.zx
if(r!=null)J.b7(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.AN(o.c).C()
j=o.d
p.oY(A.Bl(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.J),"dayLoop",o.f.C(),"journal",o.e.C(),"difficulty",o.r.C(),"narrative",o.z.C()],n,m),2))
A.fI(a)}catch(f){A.fI("save failed")}},
Iw(){var s,r,q=$.S.j().eF(1.65),p=$.S.j().r
if(q==null||p==null||$.S.j().e.h(0,p)==null)return
$.k6().a=new A.k(0,0,0)
$.ag=p
$.xJ=$.xp=$.xy=q
s=q.ab(0,new A.k(0,1.3499999999999999,0))
r=$.eM.j()
r.a=s
r.b=s.a4(0,new A.k(0,1.2000000000000002,0))
r.iq(p,q,$.S.j(),null,null)},
IK(a){var s,r,q,p
if(a==null)return A.n(t.N,t.xe)
if(!t.f.b(a))throw A.b(B.hg)
s=A.n(t.N,t.xe)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p!="string")throw A.b(B.iu)
s.l(0,p,A.Gn(q.b))}return s},
Iz(){var s=A.G(A.a(v.G.document).documentElement),r=s==null?null:A.aq(s.getAttribute("data-gameplay-focus-loss")),q=A.bK(new A.I(B.aN,t.rg.a(new A.xm(r)),t.vK),t.x)
switch((q==null?B.ba:q).a){case 0:$.hV=!0
s=$.bm
if(s!=null)s.f0(!0)
break
case 1:$.hV=!0
break
case 2:break}},
fI(a){var s=v.G,r=A.G(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.a(s.document).documentElement)
s=s==null?null:A.aq(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.EV(B.fI,new A.xx(r),t.H)},
xr(a,b){var s,r,q,p
A.eR("error")
s=A.y(a)
r=A.yH(s,"\n"," ")
s=$.zz
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.t(0)
$.q.j().setAttribute("data-boot-error",p)
if($.k4()&&!q)$.q.j().setAttribute("data-boot-stack",b.t(0))
A.a(s.console).error(p)},
Cn(){var s,r
if($.zq)return
$.zq=!0
s=$.bm
r=s==null
if(!r)s.cr()
if(!r)s.f8("music")
B.a.k($.dq,"arm")},
hQ(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hQ=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a6(A.hP(),$async$hQ)
case 2:o=null
q=4
s=7
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hQ)
case 7:n=b
i=A
s=8
return A.a6(A.av(A.a(n.json()),t.X),$async$hQ)
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
if(k!=null&&typeof k==="string"){A.u(k)
l=A.G(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.nb.j().f
l===$&&A.t()
l.textContent=k}s=9
return A.a6(A.ps(A.c([A.xi(o),A.xb(o),A.jY()],t.iJ),t.H),$async$hQ)
case 9:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hQ,r)},
jY(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$jY=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$jY)
case 6:o=b
if(!A.T(o.ok)){k=A.i("HTTP "+A.y(A.nt(o,"status",t.S)))
throw A.b(k)}s=7
return A.a6(A.av(A.a(o.text()),t.N),$async$jY)
case 7:n=b
m=A.Fx(n)
$.q.j().setAttribute("data-renderer-model-packages","validated")
$.q.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.aC
k=k==null?null:k.dj(m)
s=8
return A.a6(k instanceof A.as?k:A.GG(k,t.H),$async$jY)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.ah(i)
k=$.q.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.q.j().setAttribute("data-renderer-model-package-error",A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$jY,r)},
hP(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hP=A.aM(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.de[g]
q=6
s=9
return A.a6(A.av(A.a(A.a(j.window).fetch(o)),i),$async$hP)
case 9:n=a0
s=10
return A.a6(A.av(A.a(n.text()),h),$async$hP)
case 10:m=a0
l=A.Ar(B.f.ai(m,null))
f=$.S.b
if(f===$.S)A.f(A.a9(""))
l.eO(f)
f=$.q.b
if(f===$.q)A.f(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.q.b
if(f===$.q)A.f(A.a9(""))
f.setAttribute("data-house-manifest-source",o)
f=$.q.b
if(f===$.q)A.f(A.a9(""))
f.setAttribute("data-house-role",l.c)
f=$.q.b
if(f===$.q)A.f(A.a9(""))
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
case 4:if(!c){$.q.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.y(d))}s=11
return A.a6(A.ni(),$async$hP)
case 11:s=12
return A.a6(A.nj(),$async$hP)
case 12:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hP,r)},
nk(){var s=0,r=A.aL(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$nk=A.aM(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.de[f]
p=7
s=10
return A.a6(A.av(A.a(A.a(i.window).fetch(n)),h),$async$nk)
case 10:m=a0
s=11
return A.a6(A.av(A.a(m.text()),g),$async$nk)
case 11:l=a0
k=A.Ar(B.f.ai(l,null))
k.eP()
e=$.q.b
if(e===$.q)A.f(A.a9(""))
e.setAttribute("data-house-blueprint","validated")
e=$.q.b
if(e===$.q)A.f(A.a9(""))
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
return A.aK($async$nk,r)},
ni(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$ni=A.aM(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.k5[c]
p=7
s=10
return A.a6(A.av(A.a(A.a(g.window).fetch(n)),f),$async$ni)
case 10:m=b1
s=11
return A.a6(A.av(A.a(m.text()),e),$async$ni)
case 11:l=b1
b=B.f.ai(l,null)
b=h.b(b)?b:A.e2("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.e2("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.b_(a)?a:A.e2("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.e2("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aG(a,!0,d):A.e2("assets is not a list")
a4=A.B(a3)
a5=a4.i("H<1,d8>")
a3=A.K(new A.H(a3,a4.i("d8(1)").a(A.JO()),a5),a5.i("a0.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aG(a,!0,d):A.e2("placements is not a list")
a5=A.B(a4)
a6=a5.i("H<1,cK>")
a4=A.K(new A.H(a4,a5.i("cK(1)").a(A.JP()),a6),a6.i("a0.E"))
a4.$flags=1
k=new A.q6(a1,a2,a0,a3,a4)
a1=$.S.b
if(a1===$.S)A.f(A.a9(""))
k.eO(a1)
$.hN=k
a1=$.aC
if(a1!=null)a1.eZ(k)
a1=$.q.b
if(a1===$.q)A.f(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.q.b
if(a1===$.q)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.q.b
if(a1===$.q)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.q.b
if(a1===$.q)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a0(k.gjk(),null))
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
case 5:$.q.j().setAttribute("data-house-inventory","unavailable")
$.q.j().setAttribute("data-house-inventory-error",A.y(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$ni,r)},
nj(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nj=A.aM(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hN
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.kJ[a4]
p=7
s=10
return A.a6(A.av(A.a(A.a(a1.window).fetch(m)),a2),$async$nj)
case 10:l=b5
s=11
return A.a6(A.av(A.a(l.text()),e),$async$nj)
case 11:k=b5
a5=B.f.ai(k,null)
a5=a0.b(a5)?a5:A.hM("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aG(a6,!0,a3):A.hM("emitters is not a list")
a8=A.B(a7)
a9=a8.i("H<1,d7>")
a7=A.K(new A.H(a7,a8.i("d7(1)").a(A.K4()),a9),a9.i("a0.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.b_(a6)?a6:A.hM("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hM("sourceRef is not a string")
j=new A.qd(a8,a9,a7)
a7=$.S.b
if(a7===$.S)A.f(A.a9(""))
j.oR(a7,b2)
$.CE=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.w)(a7),++b0){h=a7[b0]
for(a9=h.f.gN(),a9=a9.gv(a9);a9.m();){g=a9.gq()
J.b7(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.S.b
if(a7===$.S)A.f(A.a9(""))
a8=A.Ee(i)
a9=new A.o_(a7,A.aW(B.dw,e,d),a8)
a9.jt(a8,a7,B.dw)
$.ne=a9
a7=$.bm
if(a7!=null){a7.CW=a9
a7.bK()}a7=$.q.b
if(a7===$.q)A.f(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.q.b
if(a7===$.q)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.q.b
if(a7===$.q)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.q.b
if(a7===$.q)A.f(A.a9(""))
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
case 5:$.ne=null
$.q.j().setAttribute("data-audio-planner","unavailable")
$.q.j().setAttribute("data-house-soundscape","unavailable")
$.q.j().setAttribute("data-house-soundscape-error",A.y(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nj,r)},
wm(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.b9(s,A.B(s).i("b9<1,e>")))
while(s.m()){r=s.gq()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.u(q))}},
xb(a){var s=0,r=A.aL(t.H),q,p,o,n,m,l
var $async$xb=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.wm(A.G(n?null:a.sfx),m,"")
A.wm(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.u(p))
l=$
s=2
return A.a6(A.o6(m,$.S.j()),$async$xb)
case 2:o=l.bm=c
o.CW=$.ne
o.bK()
A.Iu()
A.CX(o)
A.zn()
A.CY()
if($.zq){o.cr()
o.f8("music")}return A.aJ(null,r)}})
return A.aK($async$xb,r)},
zV(a,b){var s
A.D8(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
IG(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Cj(a,b){var s
if(a!=="brightness")return
s=A.G(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.y(B.b.n(b,0.6,1.4))+")")},
wf(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.a(v.G.document).documentElement)
if(r!=null)A.T(A.a(r.classList).toggle(s,b))
A.nd()},
CY(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a1($.ds().a.ct(o)),k=A.T($.ds().a.ct(n)),j=A.T($.ds().a.ct(m))
for(s=[$.jR.j(),$.jS.j(),$.fE.j(),$.hJ.j(),$.jO.j()],r=0;r<5;++r)s[r].f_(o,l)
A.Cj(o,l)
for(s=[$.jR.j(),$.jS.j(),$.fE.j(),$.hJ.j(),$.jO.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.wf(n,k)
A.wf(m,j)},
zU(a,b){var s
A.D8(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
ID(a){var s,r
try{s=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
CX(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.kl[s]
q=$.ds().a.b.h(0,r)
j.l(0,r,A.a1(q==null?A.f(A.i("setting missing from profile: "+r)):q))}p=A.T($.ds().a.ct("muted"))
o=A.T($.ds().a.ct("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bt(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dC(o)
for(q=[$.jR.j(),$.jS.j(),$.fE.j(),$.hJ.j()],n=j.$ti.i("cM<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cM(j,j.r,j.e,n);m.m();){k=m.d
l.f_(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Cl(){var s=$.bm
if(s!=null)A.CX(s)
A.CY()},
Iu(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aq(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ai(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.hn)
q=A.Bn(r.h(0,"requested"))
$.D3=A.z6(A.Bn(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="audio"){l=m.a
o.l(0,l,A.ID(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="display"){p=m.a
r.l(0,p,A.IG(p))}}$.D3=A.FY(o,r)
A.xn()},
xn(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a0($.ds().C(),null))}catch(s){}},
D8(a,b){var s,r,q,p,o,n,m
switch(A.tU(a).d.a){case 0:r=A.fd(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.ds()
q=s
A.tU(a).dv(q)
p=t.N
o=t.K
n=A.hd(r.a.b,p,o)
n.l(0,a,q)
r.a=A.dR(n,1)
n=s
A.tU(a).dv(n)
o=A.hd(r.b.b,p,o)
o.l(0,a,n)
r.b=A.dR(o,1)
A.xn()}catch(m){if(!(A.ah(m) instanceof A.A))throw m}},
xi(a){var s=0,r=A.aL(t.H),q,p,o
var $async$xi=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.n(p,p)
p=a==null
A.wm(A.G(p?null:a.tex),o,"")
A.wm(A.G(p?null:a.skybox),o,"")
o.l(0,"skybox-main-atmosphere-v1","res/skybox/cannon_8k.jpg")
o.L(0,B.ls)
q=$.aC
p=q==null?null:q.dk(o)
s=2
return A.a6(A.ps(A.c([p==null?A.AH(t.H):p],t.iJ),t.H),$async$xi)
case 2:return A.aJ(null,r)}})
return A.aK($async$xi,r)},
CV(){var s,r,q=v.G,p=A.h(A.a(q.window).innerWidth),o=A.h(A.a(q.window).innerHeight),n=$.q.j(),m=p>0?p:800
n.width=m
m=$.q.j()
n=o>0?o:600
m.height=n
s=A.G(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.h($.q.j().width)
s.height=A.h($.q.j().height)}q=$.eQ
if(q!=null)q.du(A.h($.q.j().width),A.h($.q.j().height))
q=$.fF.j()
n=A.h($.q.j().width)
m=A.h($.q.j().height)
if(q.d!==B.W)A.f(A.i("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.p("pixeldart surface size must be positive",null))
q.b.du(n,m)
q=$.aC
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.q.j().setAttribute("data-renderer-surface",r)},
I_(){var s,r,q=$.bl
if(q!=null){s=$.am.j()
if(!s.CW.bm("pause",s.f)){s=$.am.j()
s=s.CW.bm("secondary",s.f)}else s=!0
if(s){A.HH(q)
return}if($.am.j().f.a7(0,"GamepadDpadUp")){A.CK(q,-1)
return}if($.am.j().f.a7(0,"GamepadDpadDown")){A.CK(q,1)
return}s=$.am.j()
if(s.CW.bm("interact",s.f)){r=A.G(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.T(q.b.contains(r)))A.qv(r,"click",t.X)}return}s=$.am.j()
if(s.CW.bm("pause",s.f)){A.hT($.cz.j())
return}if($.aA.j().y)return
s=$.am.j()
if(s.CW.bm("journal",s.f))A.k2($.jQ.j())
else{s=$.am.j()
if(s.CW.bm("sleep",s.f))A.k2($.fG.j())}},
HH(a){if(a===$.cz.j()){a.ah()
return}if(a===$.hL.j()||a instanceof A.hr||a instanceof A.iq||a instanceof A.ic){A.e5(a)
return}a.ah()},
CK(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.W)
for(s=t.m,r=0;r<A.h(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.a(v.G.document).activeElement)
o=B.a.bC(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.R(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
IC(e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6=null,e7="exceeded"
A.a1(e8)
try{s=e8
if(!$.CD){$.zG=s
$.CD=!0}b=s
a=$.zG
if(typeof b!=="number")return b.ab()
r=(b-a)/1000
$.zG=s
b=r
if(typeof b!=="number")return b.cv()
if(b<0)r=0
b=r
if(typeof b!=="number")return b.iK()
if(b>0.25)r=0.25
A.J8(r)
$.am.j().oe()
b=$.q.j()
a=$.am.j().z!=null?"standard":"none"
b.setAttribute("data-controller",a)
q=$.am.j().z
if(q!=null)$.q.j().setAttribute("data-controller-id",q)
else $.q.j().removeAttribute("data-controller-id")
A.I_()
if(!$.hV&&$.bl==null){b=$.eN
a=r
if(typeof a!=="number")return A.xZ(a)
a=$.eN=b+a
p=0
b=t.aA
for(;;){if(a>=0.008333333333333333){a0=p
if(typeof a0!=="number")return a0.cv()
a0=a0<10}else a0=!1
if(!a0)break
$.xp=$.e7()
if(!$.Af()){a=$.V.b
if(a===$.V)A.f(A.a9(""))
a.lF(0.008333333333333333*($.cC().Q?1:20))
a=$.DV()
a0=$.V.b
if(a0===$.V)A.f(A.a9(""))
a0=a0.gag()
a1=$.V.b
if(a1===$.V)A.f(A.a9(""))
a=a.c8(a0.a,a1.gag().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.w)(a),++a2){o=a[a2]
B.a.k($.dq,"clock:"+o.a)}a=$.DW()
a0=$.V.b
if(a0===$.V)A.f(A.a9(""))
a0=a0.gag()
a1=$.V.b
if(a1===$.V)A.f(A.a9(""))
a=a.c8(a0.a,a1.gag().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.w)(a),++a2){n=a[a2]
B.a.k($.dq,"service:"+n.a+":"+n.b)}}A.Jb()
A.J7()
a=$.aP.b
if(a===$.aP)A.f(A.a9(""))
a0=$.V.b
if(a0===$.V)A.f(A.a9(""))
a.w=a0.r.c>=0.5
a=a.f
a3=A.aG(a,!1,b)
a3.$flags=3
a4=a3
B.a.O(a)
if(a4.length!==0){a=$.V.b
if(a===$.V)A.f(A.a9(""))
a.oj(a4)}A.J6()
A.Ja()
A.J9()
A.J5(0.008333333333333333)
a=$.hK.b
if(a===$.hK)A.f(A.a9(""))
if(a.a!=null)if((a.b-=0.008333333333333333)<=0)a.a=null
a=$.cg.b
if(a===$.cg)A.f(A.a9(""))
m=a.a!==B.H
a0=$.S.b
if(a0===$.S)A.f(A.a9(""))
a.e6(0.008333333333333333,a0)
if(m){a=$.cg.b
if(a===$.cg)A.f(A.a9(""))
a=a.e}else a=!1
if(a)A.CW(!0)
a=$.eN-0.008333333333333333
$.eN=a
a0=p
if(typeof a0!=="number")return a0.a4()
p=a0+1}l=B.b.n(a/0.008333333333333333,0,1)
b=$.xJ=A.BC($.DY(),$.e7(),l)
k=$.bm
if(k!=null){a=k
a0=Math.sin($.ch)
a1=Math.cos($.ch)
a5=A.a(a.a.listener)
a5.setPosition(b.a,b.b,b.c)
A.aU(a5,"setOrientation",[a0,0,a1,0,1,0],t.H)
a.iQ($.ag)
for(b=$.dq.length,a2=0;a2<$.dq.length;$.dq.length===b||(0,A.w)($.dq),++a2){j=$.dq[a2]
A.HL(k,j)}B.a.O($.dq)
$.q.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.q.j().setAttribute("data-audio-muffle01",B.b.F(k.gnI(),3))
b=$.q.j()
a=k.cy?"true":"false"
b.setAttribute("data-audio-music-started",a)
a=$.q.j()
b=k.dy
if(b==null)b="ir-fallback"
a.setAttribute("data-audio-room-ir",b)
b=$.q.j()
b.setAttribute("data-audio-context-suspended",""+(A.u(k.a.state)==="suspended"))
b.setAttribute("data-audio-muted",""+k.k2)
b.setAttribute("data-audio-master-mix",B.b.F(k.fx,3))
b.setAttribute("data-audio-voice-mix",B.b.F(k.fy,3))
a=$.dp
b.setAttribute("data-audio-captions",""+(a.e===!0))
b.setAttribute("data-audio-paused",""+$.hV)}}$.cW.j().i7($.ny(),$.ch,$.eS)
b=$.aC
if(b!=null){a=$.cW.j()
a0=a.a
a6=new A.C(a0.a,a0.b,a0.c)
a0=a.b
a7=new A.C(a0.a,a0.b,a0.c)
a0=a.c
a8=b.b/b.c
a9=A.B1(a6,a7,new A.C(a0.a,a0.b,a0.c))
a=a.f
a0=a.b
a1=a.c
b0=A.z0(a8,a1,a.a,a0)
b.to=A.Ax(a8,a6,a1,a7,a0,b0,a9,b0.a8(0,a9))}b=$.aC
if(b!=null)b.j_($.S.j(),$.ag)
i=$.wd.j().ep($.V.j().gag().a)
h=B.b.n(1-A.zN($.ag),0,1)
b=$.aC
if(b!=null)b.iP($.S.j(),$.ag,$.ny(),$.bw.j().gfa(),$.bw.j().gmI(),i,A.JZ($.ag),$.bw.j().b)
b=$.aC
if(b!=null){a=A.Jh($.S.j(),$.ag,i.r,$.hN)
a0=t.fu.a(i)
t.A1.a(a)
a1=A.aB(h)
b.cZ=A.ad(a,t.qR)
a=a0.r
b1=A.za(new A.j9(a0,a,0.8,a1,1,0,1,1,0))
b.y2=b1
b.cY=A.Gm(a,b1.z,$.ny(),b.ce)}b=A.Jj($.ag)
a=r
a0=$.aC
a0=a0==null?e6:a0.ce
if(a0==null)a0=B.dh
A.Jc(i,a,a0,b)
if(!$.hV&&$.bl==null){b=r
a=$.cC().Q?1:20
if(typeof b!=="number")return b.a8()
a=B.b.n(b*a,0,0.5)
b=a}else b=0
g=A.Hp(i,b,h)
b=$.aC
if(b!=null)b.j0(g)
if($.CJ!==$.cg.j().a){$.CJ=$.cg.j().a
$.zP=$.zP+1}b=$.aC
if(b!=null){if($.Af())a=0
else{a=s
if(typeof a!=="number")return a.p5()
a/=1000}a0=$.zP
a1=A.h(Math.max(0,$.V.j().b))
if(!isFinite(a)||a<0)A.f(A.a7(a,"timeSeconds",e6))
if(a1<0)A.f(A.p("frame clock seeds must be non-negative",e6))
b.dc=a
b.em=a0
b.en=a1}b=$.aC
if(b!=null){a=$.cg.j()
a0=$.zO
a1=A.zN($.ag)
b2=a.a
b3=a.gf6()
b4=b3>0?B.b.n(a.b/b3,0,1):0
a=b2.a
b5=a>=3
b6=b2===B.bT
b7=$.bS()
b8=b7.H("post_exposure")
b9=b7.H("post_bloom")
c0=b7.H("post_vignette")
c1=b7.H("post_film_grain")
c2=b7.H("post_dither")
c3=b7.H("post_depth_of_field")
c4=b7.H("post_color_grade")
c5=b7.H("post_affine_warp")
c6=b7.H("post_vertex_snap")
c7=B.b.aB(b7.H("post_quantization_bits"))
c8=b7.H("post_vhs_chroma")
c9=b7.H("post_vhs_noise")
d0=b7.H("shadow_ao_intensity")
d1=b2===B.a7?0.45:b8
b7=b7.bF("shadow_ssdo_enable")?d0:0
d2=b.xr
d2=B.b.n(d2,0,1)
d3=b.cf
d3=B.b.n(d3,0,1)
d4=b.d7
d5=b.d8
if(a>=1)d6=b2===B.aU?b4:1
else d6=0
d6=Math.max(c4,d6)
if(a>=2)a=b2===B.bS?b4:1
else a=0
a=Math.max(c5,a)
d7=b5?320:0
d7=Math.max(c6,d7)
d8=b5?5:c7
d9=b6?1:0
d9=Math.max(c8,d9)
e0=b6?b4:0
e1=b6?b4:0
e1=Math.max(c9,e1)
e2=b6?b4:0
e3=b6?b4:0
b.x2=new A.lx(d1,b9,b7,c3,c0,c1,d2,d3,d4,d5,a1,c2,d6,a,d7,d8,d9,e0,e1,e2,e3,b6?b4:0,a0)
b.y1=B.b.n(a1,0,1)
b.lb()}$.fF.j().f9(A.Bi($.V.j().gik()))
f=$.aC
if(f!=null){b=$.q.j()
a=f
e4=a.d9
a0=e4==null
a1=a0?e6:e4.b
if(a1==null)a1=0
b7=a0?e6:e4.c
if(b7==null)b7=0
d1=a0?e6:e4.e
if(d1==null)d1=0
d2=a.da
d3=a.ghV()?"ok":e7
d4=t.N
d5=t.K
d3=A.E(["drawCalls",a1,"triangles",b7,"instances",d1,"frameMs",d2,"budget",d3],d4,d5)
a0=a0?e6:e4.r
if(a0==null)a0=0
a1=a.hQ
a1===$&&A.t()
a1=A.E(["gpuBytes",a0,"residentTextures",a1.d.a,"textureVramMb",0],d4,t.S)
a0=a.d2
b7=a.d1
d1=a.d3
d2=a.d4
d6=a.d5
d7=a.d6
d8=a.giA()
d9=a.hH
d9=d9==null?e6:d9.c
if(d9==null)d9=0
a=a.x1
e0=a.k4
e1=e0==null
e2=e1?e6:e0.z
if(e2==null)e2=0
e3=e1?e6:e0.Q
if(e3==null)e3=0
e0=e1?e6:e0.db
if(e0==null)e0=0
b.setAttribute("data-renderer-diagnostic-groups",B.f.a0(A.E(["frame",d3,"resources",a1,"atmosphere",A.E(["rainSubmitted",a0,"rainRequested",b7,"rainBudget",d1,"rainFrustumVisible",d2,"rainFrustumCulled",d6,"rainCapped",d7,"weatherPhase",d8,"volumetricSources",d9,"volumetricSampleCount",a.as,"volumetricIntensity",a.Q,"volumetricDustDensity",a.x,"volumetricAnisotropy",a.y,"cloudCoverage",e2,"cloudDensity",e3,"cloudSampleCount",e0,"reflectionIntensity",a.dy,"reflectionConfidence",a.fr],d4,d5)],d4,t.X),e6))
e=f.gng()
if(e!=null){$.q.j().setAttribute("data-renderer-frame-stats",e)
b=$.q.j()
a=f.ghV()?"ok":e7
b.setAttribute("data-renderer-budget",a)}$.q.j().setAttribute("data-renderer-rain-particles",""+f.d2)
$.q.j().setAttribute("data-renderer-rain-particles-requested",""+f.d1)
$.q.j().setAttribute("data-renderer-rain-particles-budget",""+f.d3)
$.q.j().setAttribute("data-renderer-rain-particles-capped",""+f.d6)
$.q.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+f.d4)
$.q.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+f.d5)
$.q.j().setAttribute("data-renderer-volumetric-sample-count",""+f.x1.as)
$.q.j().setAttribute("data-renderer-volumetric-intensity",B.b.F(f.x1.Q,4))
$.q.j().setAttribute("data-renderer-volumetric-dust-density",B.b.F(f.x1.x,4))
$.q.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.F(f.x1.y,4))
b=$.q.j()
a=$.bS()
b.setAttribute("data-renderer-debug-attachments","unavailable")
$.q.j().setAttribute("data-renderer-debug-attachments-reason",a.r)
$.q.j().setAttribute("data-renderer-weather-phase",f.giA())
b=$.q.j()
a=f.y2
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-wind-mps",B.b.F(a==null?0:a,3))
b=$.q.j()
a=f.y2
a=a==null?e6:a.r
b.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.F(a==null?0:a,8))
b=$.q.j()
a=f.y2
a=a==null?e6:a.w
b.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.F(a==null?0:a,6))
b=$.q.j()
a=f.cY
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-warm-clearance-m",B.b.F(a==null?0:a,4))
$.q.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.F(f.gdw(),3))
$.q.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.F(f.giz(),4))
$.q.j().setAttribute("data-renderer-weather-impact-count",""+f.ei)
$.q.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.F(f.d_,8))
$.q.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.F(f.d0,8))
$.q.j().setAttribute("data-renderer-weather-obstacle-count",""+f.cZ.length)}A.eR("running")
A.IB()
b=$.am.j()
b.as=b.Q=0
a=b.c
a.a7(0,"WheelUp")
a.a7(0,"WheelDown")
b.d.O(0)
b.f.O(0)
A.h(A.a(v.G.window).requestAnimationFrame(A.Z(A.Dp())))}catch(e5){d=A.ah(e5)
c=A.cZ(e5)
A.xr(d,c)}},
HL(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.ii("confirm")
$.bd.j().aL("interface confirmation")
break
case"ambient-winnow":a.dl("winnow",0.28)
$.bd.j().aL("wind moving through the house")
break
case"ambient-gate":a.dl("gate",0.22)
$.bd.j().aL("distant gate")
break
case"collapse":a.ii("collapse")
$.bd.j().aL("front door shudders and collapses")
break
case"clock:tick":A.nm(a,p,"tick")
break
case"clock:chime":A.nm(a,p,"chime")
break
case"clock:cuckoo":A.nm(a,p,"cuckoo")
break
case"clock:bell":A.nm(a,p,"bell")
break
default:if(B.c.V(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.nm(a,q,s[2])}}}},
nm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.CE,g=$.hN
if(h==null||g==null)return
s=h.n3(b)
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
break A}if(q!=null)$.bd.j().aL(q)
q=$.S.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.f(A.i("sound room missing: "+o))
m=n.d.a4(0,s.d.a8(0,p))
l=$.ne
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.i("sound emitter "+s.a+" has no cue for "+c))
a.oc(q,m,s.e,o)
return}q=$.Cq
$.Cq=q+1
o=A.Ef(B.eB,r,r+":"+q,m,A.Hr(b,c),q,o)
q=$.ag
q=A.Eb($.ny(),q)
t.gG.a(B.bC)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.i("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.i("audio listener room missing: "+q))
j=l.iw(p,q,B.bC)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.i("audio cue family missing: "+q))
k=J.aQ(i)
k=k.h(i,B.d.R(A.IY(q,o.f),k.gu(i)))
o=o.e
A.ad(j.a,t.N)
a.ij(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Hr(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dw(a+":"+b),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Dl(p,q==null?r.a(q):q)}return p},
J8(a){var s=$.zz
if(s==null)return
s.textContent=""+B.b.aB(a>0?1/a:0)+" fps"},
J5(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.D0||$.bl!=null){$.k6().a=new A.k(0,0,0)
return}$.am.j().dG(b4)
s=$.am.j()
r=s.cJ("moveLeft")?-1:0
if(s.cJ("moveRight"))++r
q=s.cJ("moveForward")?1:0
if(s.cJ("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).a4(0,s)
o=p.gu(0)>1?p.gac():p
n=$.am.j().Q
m=$.am.j().as
s=$.fL()
l=s.d?-1:1
k=s.e?-1:1
j=$.ch
i=$.am.j()
i=i.ay?i.x:0
h=$.fL()
g=h.d?-1:1
$.ch=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
g=$.eS
h=$.am.j()
l=h.ay?h.y:0
j=$.fL()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b4)
$.eS=i
$.eS=B.b.n(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.k(i*Math.cos($.ch)+j*Math.sin($.ch),0,-i*Math.sin($.ch)+j*Math.cos($.ch)).gac().a8(0,2)
j=$.k6()
if(!isFinite(b4)||b4<0)A.f(A.a7(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a7(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.a4(0,f.ab(0,l).a8(0,1-s))
j.a=s
d=$.eM.j().nK($.S.j(),$.ag,$.e7(),s.a8(0,b4))
$.xy=d.a
if($.cg.j().a!==B.bU&&$.cg.j().a!==B.a7)$.ag=d.b
c=B.b.n(j.a.gu(0)/2,0,1)
s=$.DX()
$.zT=s.jd($.zT,$.e7().b,b4)
b=s.lG(b4,c)
s=$.e7()
l=$.zT
$.cW.j().i7(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.ch,$.eS)
s=$.V.j().z
l=$.wg
l=l==null?b2:l.ghF()
a=A.Fu(l==null?B.kF:l,s)
s=$.cW.j()
l=$.S.j()
a0=A.JY(a,s,$.ag,l,$.hN)
l=a0.c
$.Ce.j().j2(l)
a1=A.G(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.A7($.cW.j(),$.S.j(),$.ag)
break
case 1:a3=A.Dv($.cW.j(),$.S.j(),$.ag)
break
case 2:a4=A.Dw($.cW.j(),$.S.j(),$.ag)
break
case 3:l=$.cW.j()
k=$.S.j()
j=$.hN
a5=A.Du(l,$.ag,k,j)
break
case 4:case 5:break}$.Cd.j().oO($.fM().eU($.V.j().gag().a,"status"),$.ag==="living-room")
l=$.am.j()
k=l.CW
if(k.bm(b3,l.d)||k.bm(b3,l.f)){l=$.V.j().gag()
k=a3==null
j=k?b2:a3.a
i=B.a.a2($.aP.j().hq(21),$.aP.j().gny())
if(l.a===21&&j==="front-door"&&i){s=$.cg.j()
$.S.j()
s.jj(B.fk,A.ad(s.c,t.N))
B.a.k($.dq,"collapse")
A.fI("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bd.j().aL("mantle flame extinguished")}else if($.V.j().jg(1,1)){a2.d=!0
s=$.hK.j()
s.a=a2
s.b=2
$.bd.j().aL("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bd.j()
s.aL(a3.ax?"door opens":"door closes")
s=$.aC
if(s!=null)s.dq($.S.j(),a3.b)
s=$.aC
if(s!=null)s.eC($.S.j(),a3.a)
s=$.bm
if(s!=null)s.bK()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.dF(1)){a4.w=!1
$.bd.j().aL("shutter closes")}}else{a4.w=!0
$.bd.j().aL("shutter opens")}else if(s===B.cK){a6=a.eT()
s=A.B(a6)
l=t.E4
a7=A.bK(new A.I(a6,s.i("l(1)").a(new A.xF(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bK(a6,l)
if(a7!=null)$.bd.j().bZ("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.S.j().x){$.bd.j().aL("the living-room sofa is ready for rest")
A.hT($.fG.j())
return}s=$.yO()
if(!a5.x)A.f(A.i("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.l(0,a8,(l==null?0:l)+1)
l=$.q.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aW(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.Ix(a9)
s=$.bd.j()
s.bZ("noticed",b0==null?"you inspect "+a9:b0)}}s=$.hK.j()
if(s.a!=null&&s.b>0){b1=$.hK.j().a
if(b1!=null&&A.A7($.cW.j(),$.S.j(),$.ag)!==b1){s=$.hK.j()
s.a=null
s.b=0}}A.II(b4,a0)},
II(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.eQ
if(c2==null)return
s=A.a($.Cf.j().getBoundingClientRect())
r=A.a1(s.width)
q=A.a1(s.height)
if(r<=0||q<=0)return
p=$.cB()
p.oN(c3)
o=$.DU()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.iE(n,m,$.aA.j().y)
o=$.bS()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.S.j()
j=$.ag
h=k.e.h(0,j)
g=$.wd.j().ep($.V.j().gag().a)
j=$.aC
f=j==null?null:j.gdw()
e=f!=null&&isFinite(f)?f:g.r
k=!$.aA.j().y&&$.bl==null
j=p.a
i=p.b
d=p.c
c=p.e
b=p.f
a=p.r
p=p.w
a0=$.V.j().gag()
a1=$.bw.j().b
a2=$.cC()
a3=a2.y===B.cP
a4=h==null?null:h.a
if(a4==null)a4=$.ag
a2=a2.z?$.fM().eU($.V.j().gag().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.O(a6)
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
a5.mY(n,q,r)}a5.mX(q,r,new A.rr(j,i,d,c,b,a,p))
b3=r-80-24
a5.aU("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.n(B.b.aV(a1*60),0,1439)
b5=B.d.af(b4,60)
b6=B.d.R(b4,60)
b7=a3?B.d.R(b5+11,12)+1:b5
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
b0.fillText(a5.bx(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aU("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bx(a2,b9-28),c0,68)
b0.restore()}a5.n0(q,r,e)
a5.mW(l,q,r)
a5.mZ(q,r,o)
b0.restore();++c2.b
p=$.q.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ad(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.F(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
Ix(a){var s,r,q,p,o=$.V.j().z.b,n=A.v(o).i("N<1,2>"),m=A.K(new A.N(o,n),n.i("r.E"))
B.a.Y(m,new A.xj())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.w)(m),++s){r=m[s]
n=$.fM().at
n===$&&A.t()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Jb(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cC().Q)return
if($.aA.j().y||$.bl!=null||$.aP.j().r!=null)return
s=$.V.j().gag()
for(r=$.aP.j().hq(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.w)(r),++o){n=r[o]
m=$.aP.b
if(m===$.aP)A.f(A.a9(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aP.b
if(r===$.aP)A.f(A.a9(""))
l=r.c9(n)
if(!(l instanceof A.ma))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.AS(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.k6().a=new A.k(0,0,0)
r=$.aA.b
if(r===$.aA)A.f(A.a9(""))
q=n.a
r.f1(q,k)
$.cB().bG(!0,B.bm,q,k)
A.zK()
A.D6(n)
return}},
J7(){var s,r,q,p,o,n,m=$.wg
if(m==null)return
s=$.V.j().gag()
for(r=m.c8(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p){o=r[p]
n=$.V.b
if(n===$.V)A.f(A.a9(""))
if(!n.lJ(o))continue
n=$.q.b
if(n===$.q)A.f(A.a9(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
IJ(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbn()
if(p||o==null)return
p=$.aA.j()
s=q.a
r=s.a
p.f1(r,o)
$.cB().bG(!0,B.bm,r,o)
A.zK()
A.D6(s)
if(q.d!==B.ae)A.zL()
A.fI("restored visitor")},
D6(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().nh("stranger-17-eileen-case")
r=$.fM().x
r===$&&A.t()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.bK(r,t.N)
if(s==null||p==null)return
$.bd.j().bZ("inside the case",p+" \u201c"+s.d+"\u201d")},
J6(){var s,r,q,p,o,n
if(!$.cC().Q)return
s=$.V.j().gag()
r=$.na.j().n1(s.a,s.b)
if(r.length===0)return
q=B.a.ga1(r)
$.na.j().b.k(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bd.j().bZ(o,q.e)
n=A.Jk(p)
if(n!=null)B.a.k($.dq,"ambient-"+n)},
Ja(){var s,r,q,p,o=$.V.j().gag()
if(o.b<20)return
s=o.a
if(!$.xD.k(0,s))return
r=$.fM().f
r===$&&A.t()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.JV(r,$.V.j().b,s)
if(p!=null)$.bd.j().bZ("noticed",p)},
CW(a){var s,r,q,p,o
if($.zx!=null)return
s=$.V.j().gag()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.v(q).i("ao<2>")
o=A.EN(new A.pa(s.a,1-r,new A.I(new A.ao(q,p),p.i("l(r.E)").a(new A.xt()),p.i("I<r.E>")).gu(0),$.V.j().r.d,a))
if(o==null)return
A.CS(o)
A.k1("ending recorded")},
CS(a){var s,r,q,p
$.zx=a
$.D0=!0
s=$.q.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.B5($.V.j().z,r).length)
$.k6().a=new A.k(0,0,0)
A.hT($.jN.j())
s=$.fM().w
s===$&&A.t()
p=s.h(0,q)
s=t.j.b(p)?A.aG(p,!0,t.N):B.n
s=A.K(s,t.N)
B.a.L(s,A.B5($.V.j().z,r))
$.jN.j().j5(a,s)},
Hz(a){var s,r,q,p
A:{if("open"===a){s=B.aJ
break A}if("chain"===a){s=B.cC
break A}if("through-door"===a){s=B.cD
break A}if("letterbox"===a){s=B.cE
break A}s=B.aj
break A}r=$.aP.j().m3(s)
if(s===B.aJ){q=$.S.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aC
if(p!=null)p.dq($.S.j(),q.b)
p=$.aC
if(p!=null)p.eC($.S.j(),q.a)
p=$.bm
if(p!=null)p.bK()}}if(!(r instanceof A.m8)||s===B.aj){A.wN()
return}if(r.a.gbn()==null){A.zv()
A.wN()
return}A.zL()},
HG(){var s=$.aP.j().lH()
if(!(s instanceof A.j7)||s.b){A.zv()
A.wN()
return}if(s.a.gbn()==null){A.zv()
A.wN()
return}A.zL()},
zL(){var s,r,q,p,o,n,m,l,k,j=$.aP.j().r,i=j==null,h=i?null:j.gbn()
if(i||h==null)return
s=$.aP.j().gcd()
if(s==null){$.aA.j().j4(h)
$.cB().bG(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.aA.j().f2(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aA.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a5(k.a,k.b))}m.j6(l,r)
o=$.cB()
m=j.a.a
o.bG(!0,i?q:B.n,m,h)
if(!i){i=A.B(p)
k=A.bK(new A.I(p,i.i("l(1)").a(new A.xo(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.aA.j()
q=k.c
i.f3(h,q)
o.bG(!0,B.n,m,h+"\n\n"+q)}}}A.D5()
A.zK()},
zK(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbn(),n=$.bm
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bD(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.zF===s)return
$.zF=s
r=n.dl(s,1)
p=$.dp
if(new A.nT(s,o).os(p.e===!0,r).length!==0)$.bd.j().aL(o)},
HA(a){var s,r,q,p,o,n=$.aP.j().m4(a)
if(!(n instanceof A.m9))return
s=n.c
if(!$.V.j().lK(n.b,s))return
r=s.c
s=$.aA.j()
q=n.a
p=q.gbn()
s.f3(p==null?"":p,r)
o=q.gbn()
if(o==null)o=""
$.cB().bG(!0,B.n,q.a.a,o+"\n\n"+r)
A.D5()
A.k1("saved after visitor answer")},
wN(){$.aA.j().i0()
$.cB().O(0)
$.zF=null
$.am.j().dt($.q.j())},
D5(){var s,r,q,p,o=$.aA.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.nc.j().eV(),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
m.push(new A.a5(p.a,B.a.ga6(p.c).t(0)))}o.j3(n,m)},
HB(a){var s,r,q,p=$.aP.j().m5(a,!0,$.nc.j())
if(p==null)return
s=$.nc.j().mG(p,B.jI)
r=$.aA.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.t()
r.textContent=B.R.bR("",!0,q)
A.k1("saved after visitor citation")},
zv(){var s,r=$.S.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aC
if(s!=null)s.dq($.S.j(),r.b)
s=$.aC
if(s!=null)s.eC($.S.j(),r.a)
s=$.bm
if(s!=null)s.bK()}},
J9(){var s,r,q,p,o,n,m,l,k
for(s=$.S.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cg.b
if(k===$.cg)A.f(A.a9(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
JZ(a){var s,r,q,p,o,n,m,l=$.S.j().e.h(0,a)
if(l==null||$.bw.j().gfa()===0)return!1
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
if(!n){if(o===B.ak){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.al){o=$.bw.b
if(o===$.bw)A.f(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zN(a){var s,r=$.S.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dk
if(q.length===0)return 0.12
s=A.B(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.xq()),s.i("I<1>")).gu(0)/q.length,0.12,1)},
Jj(a){var s,r=$.S.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dk
if(q.length===0)return 0
s=A.B(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.xK()),s.i("I<1>")).gu(0)/q.length,0,1)},
Jc(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.y&&a1.b)a0=B.aP
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.za(new A.j9(a1,s,B.b.n(q,0.35,0.98),B.b.n(p,0,1),2.5,0,18e3,1,0))
n=$.Aj()
m=n.z
l=B.a.bc(a3,0,new A.xE(),t.i)
k=$.E1()
q=B.b.n(q,0.35,0.98)
j=a0===B.y?0:r
n=n.y
i=B.b.n(l/900,0,1)
h=B.b.n(o.w/1000,0,1)
g=B.b.n(a2,0,0.5)
f=$.D9
$.D9=f+1
e=k.cq(new A.v0(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.V.j().b))
d=$.bm
s=d==null
if(!s){r=A.c([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jw([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.lN(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.od(a.b,a.c,a.d,a.e,a.f)}s=$.q.j()
s.setAttribute("data-audio-weather-transmission",B.b.F(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.F(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.F(a4,3))},
Hp(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.aC
if(a0!=null){s=$.S.j()
r=$.ag
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.za(new A.j9(a1,q,B.b.n(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.nq.bU($.ag,A.Kd())
n=isFinite(a0.gdw())?a0.gdw():q
m=B.b.n(a0.giz(),0,1)
l=B.b.n((n-q)*8,0,400)
s=B.b.n(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.p("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.ar&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
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
o.hi()
r=o.a
return new A.v7(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
Jh(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.di
s=a3.aH(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=A.c([new A.fr("floor:"+r,new A.k(p,o,q),new A.k(p+s.a,o+0.05,q+s.c),a5,0.12)],t.uI)
if(a6==null)return n
for(r=a6.ih(r),m=J.O(r.a),r=new A.W(m,r.b,r.$ti.i("W<1>")),l=a6.c;r.m();){k=m.gq()
j=k.c
i=!0
if(!(k.d==="renderer-reference"&&!k.ay.r)){h=k.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.p(j.toLowerCase(),"stair")}if(i)continue
g=a6.bL(j)
j=k.f.a
f=k.is(g,l)
e=k.eJ(g,l)
i=e.a
h=e.b
d=p+j.a*l
c=o+(j.b*l+(i+h)*0.5)
j=q+j.c*l
b=f.a
i=Math.max(0.005,(h-i)*0.5)
h=f.c
a=k.Q>0?k.as:a5
a0=k.a
k=k.ay.f
if(!(k>0))k=g.b==="textile"?0.08:0.28
if(isFinite(d)&&isFinite(c)&&isFinite(j))a1=!(isFinite(b)&&isFinite(i)&&isFinite(h))||b<0||i<0||h<0
else a1=!0
if(a1)A.f(A.p("collision box centre/extents must be finite",null))
k=new A.fr("inventory:"+a0,new A.k(d-b,c-i,j-h),new A.k(d+b,c+i,j+h),a,k)
k.A()
B.a.k(n,k)}return A.ad(n,t.qR)},
hD:function hD(a,b){this.a=a
this.b=b},
mN:function mN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var _=this
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
_.cY=_.y2=null
_.ce=b2
_.cZ=b3
_.d0=_.d_=_.ei=0
_.hH=null
_.hI=2.25
_.d5=_.d4=_.d3=_.d2=_.d1=0
_.d6=!1
_.hM=_.hL=_.hK=_.hJ=_.ek=_.ej=null
_.hN=7
_.d8=_.d7=_.cf=_.hO=_.el=0
_.d9=null
_.hP=_.n9=_.en=_.em=_.dc=_.da=0
_.aI=!1
_.dd=null
_.ci=_.cg=0
_.ck=_.cj=null
_.hQ=_.na=$
_.eo=null
_.hR=0},
vS:function vS(a){this.a=a},
vV:function vV(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a){this.a=a},
vL:function vL(){},
vT:function vT(){},
vU:function vU(){},
vY:function vY(a){this.a=a},
vZ:function vZ(a){this.a=a},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
vQ:function vQ(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(a,b,c){this.a=a
this.b=b
this.c=c},
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
vP:function vP(){},
vJ:function vJ(){},
vK:function vK(){},
vF:function vF(){},
vG:function vG(){},
vH:function vH(){},
vI:function vI(){},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jr:function jr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vj:function vj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wv:function wv(){},
ww:function ww(){},
wx:function wx(){},
wD:function wD(){},
wE:function wE(){},
wF:function wF(){},
wG:function wG(){},
wH:function wH(){},
wI:function wI(a){this.a=a},
wJ:function wJ(a){this.a=a},
wK:function wK(a){this.a=a},
wy:function wy(a){this.a=a},
wz:function wz(){},
wA:function wA(){},
wB:function wB(){},
wC:function wC(){},
wr:function wr(){},
ws:function ws(a){this.a=a},
wt:function wt(){},
wu:function wu(){},
wn:function wn(){},
wo:function wo(){},
wp:function wp(){},
wq:function wq(){},
xe:function xe(a,b){this.a=a
this.b=b},
xc:function xc(a){this.a=a},
xd:function xd(a){this.a=a},
y3:function y3(a,b){this.a=a
this.b=b},
y4:function y4(){},
y5:function y5(){},
yg:function yg(){},
yq:function yq(){},
yr:function yr(){},
ys:function ys(){},
yt:function yt(){},
yu:function yu(){},
yv:function yv(){},
yw:function yw(){},
y6:function y6(){},
y7:function y7(){},
y8:function y8(){},
y9:function y9(){},
ya:function ya(){},
yb:function yb(){},
yc:function yc(){},
yd:function yd(){},
ye:function ye(){},
yf:function yf(){},
yh:function yh(){},
yi:function yi(){},
yj:function yj(){},
yk:function yk(){},
yl:function yl(){},
ym:function ym(){},
yn:function yn(){},
yo:function yo(){},
yp:function yp(){},
xf:function xf(){},
xg:function xg(){},
xm:function xm(a){this.a=a},
xx:function xx(a){this.a=a},
xF:function xF(a){this.a=a},
xj:function xj(){},
xt:function xt(){},
xo:function xo(a){this.a=a},
xq:function xq(){},
xK:function xK(){},
xE:function xE(){},
Dy(a){return v.mangledGlobalNames[a]},
AS(a,b,c,d,e,f){var s=a[b]()
return s},
qv(a,b,c){var s=null
return c.a(A.AS(a,b,s,s,s,s))},
B4(a,b){var s,r,q,p=A.K(B.cx.by(B.f.a0(a.iu(!1),null)),t.S),o=A.v(b).i("ac<1>"),n=A.K(new A.ac(b,o),o.i("r.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.w)(n),++s){r=n[s]
B.a.L(p,B.cx.by(r))
B.a.k(p,0)
q=b.h(0,r)
q.toString
B.a.L(p,q)}return A.FZ(p)},
JC(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.E4(B.t.ge7(p),p.byteOffset,p.byteLength)
n=t.S
m=A.n(n,t.L)
l=t.t
k=A.c([],l)
j=A.c([],t.n)
i=p.length
h=B.d.b9(i,r)
g=A.d9(h,0,!1,n)
for(n=o.length,f=0;f<h;++f){e=f*r
d=f*q
c=A.Je(o,d,q)
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
else{a9=B.d.b9(j.length,r)
B.a.k(b,a9)
B.a.l(g,f,a9)
B.a.L(k,new Uint8Array(o.subarray(d,A.zu(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.d(p,a0)
B.a.k(j,p[a0])}}}b1=B.d.b9(j.length,r)>65536?new Uint32Array(A.R(g)):new Uint16Array(A.R(g))
return new A.bW(s,new Float32Array(A.R(j)),b1,b2.d)},
Je(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.d(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
G_(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.n(a*57.29577951308232,90,105)-90)/15*62},
yC(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.a7(b.gnr(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gG().c.ae()
o=q*16
n=o+16
B.t.dD(s,o,n,p.a)
if(l)B.t.dD(r,o,n,p.ew().a)}m=a.a
A.m(m,"uInstanceModels",new A.o(B.eg,s))
if(l)A.m(m,"uInstanceNormalMatrices",new A.o(B.eg,r))
A.m(m,"uUseInstances",B.c4)},
EA(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Ez(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Dl(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Jk(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cl(a,b,c){var s=B.b.n(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bk(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
JB(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.b(B.ih)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.kL[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.n(s,r))
else if(k.b(m))p.l(0,n,A.aZ(m,s,r))
else throw A.b(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
JV(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbg(a)
s=new A.eI()
s.c0((b^274953^c)>>>0)
r=s.aY(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.yU.prototype={}
J.l3.prototype={
aa(a,b){return a===b},
gU(a){return A.iO(a)},
t(a){return"Instance of '"+A.lB(a)+"'"},
gad(a){return A.dr(A.zC(this))}}
J.l6.prototype={
t(a){return String(a)},
gU(a){return a?519018:218159},
gad(a){return A.dr(t.y)},
$ian:1,
$il:1}
J.it.prototype={
aa(a,b){return null==b},
t(a){return"null"},
gU(a){return 0},
$ian:1,
$iax:1}
J.iv.prototype={$iaj:1}
J.eu.prototype={
gU(a){return 0},
gad(a){return B.oq},
t(a){return String(a)}}
J.lu.prototype={}
J.fo.prototype={}
J.dI.prototype={
t(a){var s=a[$.DC()]
if(s==null)s=a[$.yL()]
if(s==null)return this.jn(a)
return"JavaScript function for "+J.c3(s)},
$if3:1}
J.ha.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.hb.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.x.prototype={
cW(a,b){return new A.b9(a,A.B(a).i("@<1>").S(b).i("b9<1,2>"))},
k(a,b){A.B(a).c.a(b)
a.$flags&1&&A.aV(a,29)
a.push(b)},
on(a,b){var s
a.$flags&1&&A.aV(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.Bf(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.aV(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.B(a).i("r<1>").a(b)
a.$flags&1&&A.aV(a,"addAll",2)
if(Array.isArray(b)){this.jJ(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gq())},
jJ(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aD(a))
for(r=0;r<s;++r)a.push(b[r])},
O(a){a.$flags&1&&A.aV(a,"clear","clear")
a.length=0},
br(a,b,c){var s=A.B(a)
return new A.H(a,s.S(c).i("1(2)").a(b),s.i("@<1>").S(c).i("H<1,2>"))},
W(a,b){var s,r=A.d9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.y(a[s]))
return r.join(b)},
bc(a,b,c,d){var s,r,q
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
a9(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
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
gbg(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cL())
throw A.b(A.AO())},
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
n.i("j(1,1)?").a(b)
a.$flags&2&&A.aV(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.I8()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.iK()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hZ(b,2))
if(p>0)this.l9(a,p)},
X(a){return this.Y(a,null)},
l9(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dE(a,b){var s,r,q,p
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
p(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gP(a){return a.length===0},
ga5(a){return a.length!==0},
t(a){return A.yT(a,"[","]")},
gv(a){return new J.eW(a,a.length,A.B(a).i("eW<1>"))},
gU(a){return A.iO(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aV(a,"set length","change the length of")
if(b<0)throw A.b(A.b2(b,0,null,"newLength",null))
if(b>a.length)A.B(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.xT(a,b))
return a[b]},
l(a,b,c){A.B(a).c.a(c)
a.$flags&2&&A.aV(a)
if(!(b>=0&&b<a.length))throw A.b(A.xT(a,b))
a[b]=c},
eQ(a,b){return new A.dX(a,b.i("dX<0>"))},
er(a,b){var s
A.B(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gad(a){return A.dr(A.B(a))},
$iU:1,
$ir:1,
$iJ:1}
J.l5.prototype={
oM(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lB(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qw.prototype={}
J.eW.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.w(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iai:1}
J.h9.prototype={
I(a,b){var s
A.a1(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcm(b)
if(this.gcm(a)===s)return 0
if(this.gcm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcm(a){return a===0?1/a<0:a<0},
aC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bu(""+a+".toInt()"))},
hv(a){var s,r
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
aB(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bu(""+a+".round()"))},
n(a,b,c){if(this.I(b,c)>0)throw A.b(A.xM(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.b(A.b2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcm(a))return"-"+s
return s},
eM(a,b){var s,r,q,p,o
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
o-=r.length}return s+B.c.a8("0",o)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU(a){var s,r,q,p,o=a|0
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
b9(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ha(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.ha(a,b)},
ha(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bu("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
e3(a,b){var s
if(a>0)s=this.h9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lj(a,b){if(0>b)throw A.b(A.xM(b))
return this.h9(a,b)},
h9(a,b){return b>31?0:a>>>b},
j7(a,b){if(b<0)throw A.b(A.xM(b))
return this.lk(a,b)},
lk(a,b){if(b>31)return 0
return a>>>b},
gad(a){return A.dr(t.J)},
$ibp:1,
$iz:1,
$iby:1}
J.is.prototype={
gad(a){return A.dr(t.S)},
$ian:1,
$ij:1}
J.l7.prototype={
gad(a){return A.dr(t.i)},
$ian:1}
J.et.prototype={
hp(a,b){return new A.mZ(b,a,0)},
bp(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aQ(a,r-s)},
jh(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.iu){s=b.e
s=!(s==null?b.e=b.k6():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.kf(a,b)}},
bW(a,b,c,d){var s=A.ff(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kf(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.E3(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gq()
o=p.gf7()
n=p.geh()
q=n-o
if(q===0&&r===o)continue
B.a.k(m,this.J(a,r,o))
r=n}if(r<a.length||q>0)B.a.k(m,this.aQ(a,r))
return m},
aq(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.aq(a,b,0)},
J(a,b,c){return a.substring(b,A.ff(b,c,a.length))},
aQ(a,b){return this.J(a,b,null)},
aP(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.Fe(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.Ff(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a8(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.fe)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bD(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a8(c,s)+a},
de(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bC(a,b){return this.de(a,b,0)},
p(a,b){return A.K5(a,b,0)},
I(a,b){var s
A.u(b)
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
gad(a){return A.dr(t.N)},
gu(a){return a.length},
$ian:1,
$ibp:1,
$irv:1,
$ie:1}
A.eF.prototype={
gv(a){return new A.i8(J.O(this.gba()),A.v(this).i("i8<1,2>"))},
gu(a){return J.cD(this.gba())},
gP(a){return J.k8(this.gba())},
ga5(a){return J.E7(this.gba())},
a9(a,b){return A.v(this).y[1].a(J.nz(this.gba(),b))},
ga1(a){return A.v(this).y[1].a(J.Ao(this.gba()))},
p(a,b){return J.An(this.gba(),b)},
t(a){return J.c3(this.gba())}}
A.i8.prototype={
m(){return this.a.m()},
gq(){return this.$ti.y[1].a(this.a.gq())},
$iai:1}
A.f_.prototype={
gba(){return this.a}}
A.jg.prototype={$iU:1}
A.je.prototype={
h(a,b){return this.$ti.y[1].a(J.b0(this.a,b))},
l(a,b,c){var s=this.$ti
J.b7(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.E8(this.a,b)},
k(a,b){var s=this.$ti
J.e8(this.a,s.c.a(s.y[1].a(b)))},
$iU:1,
$iJ:1}
A.b9.prototype={
cW(a,b){return new A.b9(this.a,this.$ti.i("@<1>").S(b).i("b9<1,2>"))},
gba(){return this.a}}
A.hc.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dw.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.tm.prototype={
gE(){return 0}}
A.U.prototype={}
A.a0.prototype={
gv(a){var s=this
return new A.al(s,s.gu(s),A.v(s).i("al<a0.E>"))},
gP(a){return this.gu(this)===0},
ga1(a){if(this.gu(this)===0)throw A.b(A.cL())
return this.a9(0,0)},
p(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.a9(0,s),b))return!0
if(q!==r.gu(r))throw A.b(A.aD(r))}return!1},
a2(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.a9(0,r)))return!1
if(s!==q.gu(q))throw A.b(A.aD(q))}return!0},
M(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.a9(0,r)))return!0
if(s!==q.gu(q))throw A.b(A.aD(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.a9(0,0))
if(o!==p.gu(p))throw A.b(A.aD(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aD(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aD(p))}return r.charCodeAt(0)==0?r:r}},
nC(a){return this.W(0,"")},
dz(a,b){return this.jm(0,A.v(this).i("l(a0.E)").a(b))},
br(a,b,c){var s=A.v(this)
return new A.H(this,s.S(c).i("1(a0.E)").a(b),s.i("@<a0.E>").S(c).i("H<1,2>"))},
bX(a,b){var s=A.v(this).i("a0.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bE(a){return this.bX(0,!0)},
b8(a){var s,r=this,q=A.yX(A.v(r).i("a0.E"))
for(s=0;s<r.gu(r);++s)q.k(0,r.a9(0,s))
return q}}
A.j2.prototype={
gkk(){var s=J.cD(this.a),r=this.c
if(r==null||r>s)return s
return r},
gll(){var s=J.cD(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cD(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gll()+b
if(b<0||r>=s.gkk())throw A.b(A.ql(b,s.gu(0),s,"index"))
return J.nz(s.a,r)},
bX(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aQ(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.AQ(0,n):J.AP(0,n)}r=A.d9(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.a9(n,o+q))
if(m.gu(n)<l)throw A.b(A.aD(p))}return r},
bE(a){return this.bX(0,!0)}}
A.al.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aQ(q),o=p.gu(q)
if(r.b!==o)throw A.b(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0},
$iai:1}
A.cN.prototype={
gv(a){return new A.iz(J.O(this.a),this.b,A.v(this).i("iz<1,2>"))},
gu(a){return J.cD(this.a)},
gP(a){return J.k8(this.a)},
ga1(a){return this.b.$1(J.Ao(this.a))},
a9(a,b){return this.b.$1(J.nz(this.a,b))}}
A.dy.prototype={$iU:1}
A.iz.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.H.prototype={
gu(a){return J.cD(this.a)},
a9(a,b){return this.b.$1(J.nz(this.a,b))}}
A.I.prototype={
gv(a){return new A.W(J.O(this.a),this.b,this.$ti.i("W<1>"))}}
A.W.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iai:1}
A.ii.prototype={
gv(a){return new A.ij(J.O(this.a),this.b,B.f6,this.$ti.i("ij<1,2>"))}}
A.ij.prototype={
gq(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.O(r.$1(s.gq()))
q.c=p}else return!1}q.d=q.c.gq()
return!0},
$iai:1}
A.ig.prototype={
m(){return!1},
gq(){throw A.b(A.cL())},
$iai:1}
A.dX.prototype={
gv(a){return new A.ja(J.O(this.a),this.$ti.i("ja<1>"))}}
A.ja.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iai:1}
A.aE.prototype={
su(a,b){throw A.b(A.bu("Cannot change the length of a fixed-length list"))},
k(a,b){A.cj(a).i("aE.E").a(b)
throw A.b(A.bu("Cannot add to a fixed-length list"))}}
A.ez.prototype={
l(a,b,c){A.v(this).i("ez.E").a(c)
throw A.b(A.bu("Cannot modify an unmodifiable list"))},
su(a,b){throw A.b(A.bu("Cannot change the length of an unmodifiable list"))},
k(a,b){A.v(this).i("ez.E").a(b)
throw A.b(A.bu("Cannot add to an unmodifiable list"))}}
A.hy.prototype={}
A.bM.prototype={
gu(a){return J.cD(this.a)},
a9(a,b){var s=this.a,r=J.aQ(s)
return r.a9(s,r.gu(s)-1-b)}}
A.jL.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.fD.prototype={$r:"+height,width(1,2)",$s:2}
A.js.prototype={$r:"+influence,light(1,2)",$s:3}
A.jt.prototype={$r:"+influence,source(1,2)",$s:4}
A.aH.prototype={$r:"+(1,2,3)",$s:5}
A.bk.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.ju.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jv.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.jw.prototype={
gE(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:10}
A.ib.prototype={}
A.fW.prototype={
gP(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
t(a){return A.yZ(this)},
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
A.Es()},
gN(){return new A.bI(this.n7(),A.v(this).i("bI<P<1,2>>"))},
n7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga3(),o=o.gv(o),n=A.v(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gq()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bs(a,b,c,d){var s=A.n(c,d)
this.aJ(0,new A.oM(this,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.oM.prototype={
$2(a,b){var s=A.v(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.v(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gfM(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
K(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.K(b))return null
return this.b[this.a[b]]},
aJ(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfM()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga3(){return new A.fz(this.gfM(),this.$ti.i("fz<1>"))},
gak(){return new A.fz(this.b,this.$ti.i("fz<2>"))}}
A.fz.prototype={
gu(a){return this.a.length},
gP(a){return 0===this.a.length},
ga5(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.dZ(s,s.length,this.$ti.i("dZ<1>"))}}
A.dZ.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iai:1}
A.d4.prototype={
bj(){var s=this,r=s.$map
if(r==null){r=new A.f7(s.$ti.i("f7<1,2>"))
A.Df(s.a,r)
s.$map=r}return r},
K(a){return this.bj().K(a)},
h(a,b){return this.bj().h(0,b)},
aJ(a,b){this.$ti.i("~(1,2)").a(b)
this.bj().aJ(0,b)},
ga3(){var s=this.bj()
return new A.ac(s,A.v(s).i("ac<1>"))},
gak(){var s=this.bj()
return new A.ao(s,A.v(s).i("ao<2>"))},
gu(a){return this.bj().a}}
A.fX.prototype={
k(a,b){A.v(this).c.a(b)
A.Et()}}
A.aX.prototype={
gu(a){return this.b},
gP(a){return this.b===0},
ga5(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dZ(s,s.length,r.$ti.i("dZ<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b8(a){return A.f8(this,this.$ti.c)}}
A.h6.prototype={
gu(a){return this.a.length},
gP(a){return this.a.length===0},
ga5(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.dZ(s,s.length,this.$ti.i("dZ<1>"))},
bj(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.f7(o.$ti.i("f7<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
p(a,b){return this.bj().K(b)},
b8(a){return A.f8(this,this.$ti.c)}}
A.rT.prototype={
$0(){return B.b.aV(1000*this.a.now())},
$S:33}
A.iV.prototype={}
A.uy.prototype={
b6(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.iH.prototype={
t(a){return"Null check operator used on a null value"}}
A.l8.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.m1.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ro.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ih.prototype={}
A.jy.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idh:1}
A.em.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Dz(r==null?"unknown":r)+"'"},
gad(a){var s=A.A2(this)
return A.dr(s==null?A.cj(this):s)},
$if3:1,
gp0(){return this},
$C:"$1",
$R:1,
$D:null}
A.kq.prototype={$C:"$0",$R:0}
A.kr.prototype={$C:"$2",$R:2}
A.lZ.prototype={}
A.lX.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Dz(s)+"'"}}
A.fQ.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fQ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gU(a){return(A.nw(this.a)^A.iO(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lB(this.a)+"'")}}
A.lL.prototype={
t(a){return"RuntimeError: "+this.a}}
A.cp.prototype={
gu(a){return this.a},
gP(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.ac(this,A.v(this).i("ac<1>"))},
gak(){return new A.ao(this,A.v(this).i("ao<2>"))},
gN(){return new A.N(this,A.v(this).i("N<1,2>"))},
K(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ns(a)},
ns(a){var s=this.d
if(s==null)return!1
return this.cl(this.fJ(s,a),a)>=0},
L(a,b){A.v(this).i("Y<1,2>").a(b).aJ(0,new A.qF(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nt(b)},
nt(a){var s,r,q=this.d
if(q==null)return null
s=this.fJ(q,a)
r=this.cl(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.v(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fe(s==null?q.b=q.e_():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fe(r==null?q.c=q.e_():r,b,c)}else q.nv(b,c)},
nv(a,b){var s,r,q,p,o=this,n=A.v(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.e_()
r=o.df(a)
q=s[r]
if(q==null)s[r]=[o.e0(a,b)]
else{p=o.cl(q,a)
if(p>=0)q[p].b=b
else q.push(o.e0(a,b))}},
bU(a,b){var s,r,q=this,p=A.v(q)
p.c.a(a)
p.i("2()").a(b)
if(q.K(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
a7(a,b){var s=this
if(typeof b=="string")return s.fb(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fb(s.c,b)
else return s.nu(b)},
nu(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.df(a)
r=n[s]
q=o.cl(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fc(p)
if(r.length===0)delete n[s]
return p.b},
O(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dH()}},
aJ(a,b){var s,r,q=this
A.v(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aD(q))
s=s.c}},
fe(a,b,c){var s,r=A.v(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.e0(b,c)
else s.b=c},
fb(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fc(s)
delete a[b]
return s.b},
dH(){this.r=this.r+1&1073741823},
e0(a,b){var s=this,r=A.v(s),q=new A.qP(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dH()
return q},
fc(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dH()},
df(a){return J.aN(a)&1073741823},
fJ(a,b){return a[this.df(b)]},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
t(a){return A.yZ(this)},
e_(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iyW:1}
A.qF.prototype={
$2(a,b){var s=this.a,r=A.v(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.v(this.a).i("~(1,2)")}}
A.qP.prototype={}
A.ac.prototype={
gu(a){return this.a.a},
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bV(s,s.r,s.e,this.$ti.i("bV<1>"))},
p(a,b){return this.a.K(b)}}
A.bV.prototype={
gq(){return this.d},
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
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.ae(s,s.r,s.e,this.$ti.i("ae<1>"))}}
A.ae.prototype={
gq(){return this.d},
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
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.cM(s,s.r,s.e,this.$ti.i("cM<1,2>"))}}
A.cM.prototype={
gq(){var s=this.d
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
A.f7.prototype={
df(a){return A.Jv(a)&1073741823},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.y_.prototype={
$1(a){return this.a(a)},
$S:15}
A.y0.prototype={
$2(a,b){return this.a(a,b)},
$S:82}
A.y1.prototype={
$1(a){return this.a(A.u(a))},
$S:30}
A.bj.prototype={
gad(a){return A.dr(this.fK())},
fK(){return A.JH(this.$r,this.cI())},
t(a){return this.hf(!1)},
hf(a){var s,r,q,p,o,n=this.ko(),m=this.cI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.Bc(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ko(){var s,r=this.$s
while($.w_.length<=r)B.a.k($.w_,null)
s=$.w_[r]
if(s==null){s=this.k5()
B.a.l($.w_,r,s)}return s},
k5(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.qu(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ad(j,k)}}
A.e_.prototype={
cI(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.e_&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gU(a){return A.cP(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.e0.prototype={
cI(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.e0&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gU(a){var s=this
return A.cP(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.hC.prototype={
cI(){return this.a},
aa(a,b){if(b==null)return!1
return b instanceof A.hC&&this.$s===b.$s&&A.GS(this.a,b.a)},
gU(a){return A.cP(this.$s,A.Ft(this.a),B.h,B.h,B.h,B.h)}}
A.iu.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkG(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.AU(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
k6(){var s,r=this.a
if(!B.c.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hp(a,b){return new A.mn(this,b,0)},
kn(a,b){var s,r=this.gkG()
if(r==null)r=A.fH(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mI(s)},
$irv:1,
$iFK:1}
A.mI.prototype={
gf7(){return this.b.index},
geh(){var s=this.b
return s.index+s[0].length},
$ihg:1,
$iiP:1}
A.mn.prototype={
gv(a){return new A.mo(this.a,this.b,this.c)}}
A.mo.prototype={
gq(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kn(l,s)
if(p!=null){m.d=p
o=p.geh()
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
A.j1.prototype={
geh(){return this.a+this.c.length},
$ihg:1,
gf7(){return this.a}}
A.mZ.prototype={
gv(a){return new A.n_(this.a,this.b,this.c)},
ga1(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.j1(r,s)
throw A.b(A.cL())}}
A.n_.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.j1(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(){var s=this.d
s.toString
return s},
$iai:1}
A.vk.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a9(""))
return s}}
A.ev.prototype={
gad(a){return B.oj},
hs(a,b,c){A.wk(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hr(a,b,c){A.wk(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$ian:1,
$iev:1}
A.hi.prototype={$ihi:1}
A.iF.prototype={
ge7(a){if(((a.$flags|0)&2)!==0)return new A.w6(a.buffer)
else return a.buffer},
kA(a,b,c,d){var s=A.b2(b,0,c,d,null)
throw A.b(s)},
fl(a,b,c,d){if(b>>>0!==b||b>c)this.kA(a,b,c,d)}}
A.w6.prototype={
hs(a,b,c){var s=A.B7(this.a,b,c)
s.$flags=3
return s},
hr(a,b,c){var s=A.Fq(this.a,b,c)
s.$flags=3
return s}}
A.lj.prototype={
gad(a){return B.ok},
$ian:1}
A.bq.prototype={
gu(a){return a.length},
h6(a,b,c,d,e){var s,r,q=a.length
this.fl(a,b,q,"start")
this.fl(a,c,q,"end")
if(b>c)throw A.b(A.b2(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.p(e,null))
r=d.length
if(r-e<s)throw A.b(A.i("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic5:1}
A.iD.prototype={
h(a,b){A.e4(b,a,a.length)
return a[b]},
l(a,b,c){A.aB(c)
a.$flags&2&&A.aV(a)
A.e4(b,a,a.length)
a[b]=c},
dD(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aV(a,5)
this.h6(a,b,c,d,0)
return},
$iU:1,
$ir:1,
$iJ:1}
A.iE.prototype={
l(a,b,c){A.h(c)
a.$flags&2&&A.aV(a)
A.e4(b,a,a.length)
a[b]=c},
iX(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aV(a,5)
this.h6(a,b,c,d,e)
return},
$iU:1,
$ir:1,
$iJ:1}
A.iC.prototype={
gad(a){return B.ol},
aD(a,b,c){return new Float32Array(a.subarray(b,A.zu(b,c,a.length)))},
$ian:1,
$ipk:1}
A.lk.prototype={
gad(a){return B.om},
$ian:1,
$ipl:1}
A.ll.prototype={
gad(a){return B.on},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1}
A.lm.prototype={
gad(a){return B.oo},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1}
A.ln.prototype={
gad(a){return B.op},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1}
A.lo.prototype={
gad(a){return B.os},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1,
$iuA:1}
A.lp.prototype={
gad(a){return B.ot},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1,
$iuB:1}
A.fb.prototype={
gad(a){return B.ou},
gu(a){return a.length},
h(a,b){A.e4(b,a,a.length)
return a[b]},
$ian:1,
$ifb:1}
A.iG.prototype={
gad(a){return B.ov},
gu(a){return a.length},
h(a,b){A.e4(b,a,a.length)
return a[b]},
aD(a,b,c){return new Uint8Array(a.subarray(b,A.zu(b,c,a.length)))},
$ian:1,
$ic1:1}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.jq.prototype={}
A.cS.prototype={
i(a){return A.jC(v.typeUniverse,this,a)},
S(a){return A.C4(v.typeUniverse,this,a)}}
A.mB.prototype={}
A.n2.prototype={
t(a){return A.bR(this.a,null)}}
A.mz.prototype={
t(a){return this.a}}
A.hG.prototype={$idT:1}
A.vg.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.vf.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:81}
A.vh.prototype={
$0(){this.a.$0()},
$S:14}
A.vi.prototype={
$0(){this.a.$0()},
$S:14}
A.w2.prototype={
jH(a,b){if(self.setTimeout!=null)self.setTimeout(A.hZ(new A.w3(this,b),0),a)
else throw A.b(A.bu("`setTimeout()` not found."))}}
A.w3.prototype={
$0(){this.b.$0()},
$S:0}
A.mp.prototype={
e8(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dK(a)
else{s=r.a
if(q.i("aS<1>").b(a))s.fj(a)
else s.cG(a)}},
e9(a,b){var s=this.a
if(this.b)s.bv(new A.bn(a,b))
else s.cE(new A.bn(a,b))}}
A.wh.prototype={
$1(a){return this.a.$2(0,a)},
$S:20}
A.wi.prototype={
$2(a,b){this.a.$2(1,new A.ih(a,t.l.a(b)))},
$S:155}
A.xL.prototype={
$2(a,b){this.a(A.h(a),b)},
$S:190}
A.cf.prototype={
gq(){var s=this.b
return s==null?this.$ti.c.a(s):s},
ld(a,b){var s,r,q
a=A.h(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gq()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.ld(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.BZ
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
o.a=A.BZ
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.i("sync*"))}return!1},
lB(a){var s,r,q=this
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
gc_(){return this.b}}
A.pr.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fs(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ah(p)
q=A.cZ(p)
l=r
o=q
n=A.zD(l,o)
l=new A.bn(l,o)
m.b.bv(l)
return}m.b.fs(s)}},
$S:0}
A.pu.prototype={
$2(a,b){var s,r,q=this
A.fH(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bv(new A.bn(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bv(new A.bn(r,s))}},
$S:69}
A.pt.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.b7(r,k.b,a)
if(J.aa(s,0)){q=A.c([],j.i("x<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.w)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.e8(q,l)}k.c.cG(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bv(new A.bn(q,o))}},
$S(){return this.d.i("ax(0)")}}
A.mt.prototype={
e9(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.cE(A.I7(a,b))},
hw(a){return this.e9(a,null)}}
A.jc.prototype={
e8(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.dK(r.i("1/").a(a))}}
A.dY.prototype={
nH(a){if((this.c&15)!==6)return!0
return this.b.b.eI(t.bl.a(this.d),a.a,t.y,t.K)},
ni(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.oJ(q,m,a.b,o,n,t.l)
else p=l.eI(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ah(s))){if((r.c&1)!==0)throw A.b(A.p("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.p("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
eK(a,b,c){var s,r,q=this.$ti
q.S(c).i("1/(2)").a(a)
s=$.ar
if(s===B.C){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.a7(b,"onError",u.c))}else{c.i("@<0/>").S(q.c).i("1(2)").a(a)
b=A.CU(b,s)}r=new A.as(s,c.i("as<0>"))
this.cD(new A.dY(r,3,a,b,q.i("@<1>").S(c).i("dY<1,2>")))
return r},
hd(a,b,c){var s,r=this.$ti
r.S(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.cD(new A.dY(s,19,a,b,r.i("@<1>").S(c).i("dY<1,2>")))
return s},
lg(a){this.a=this.a&1|16
this.c=a},
cF(a){this.a=a.a&30|this.a&1
this.c=a.c},
cD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cD(a)
return}r.cF(s)}A.nn(null,null,r.b,t.O.a(new A.vn(r,a)))}},
fV(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fV(a)
return}m.cF(n)}l.a=m.cO(a)
A.nn(null,null,m.b,t.O.a(new A.vs(l,m)))}},
c6(){var s=t.F.a(this.c)
this.c=null
return this.cO(s)},
cO(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fs(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aS<1>").b(a))A.vq(a,r,!0)
else{s=r.c6()
q.c.a(a)
r.a=8
r.c=a
A.fx(r,s)}},
cG(a){var s,r=this
r.$ti.c.a(a)
s=r.c6()
r.a=8
r.c=a
A.fx(r,s)},
k0(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c6()
q.cF(a)
A.fx(q,r)},
bv(a){var s=this.c6()
this.lg(a)
A.fx(this,s)},
dK(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aS<1>").b(a)){this.fj(a)
return}this.jL(a)},
jL(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nn(null,null,s.b,t.O.a(new A.vp(s,a)))},
fj(a){A.vq(this.$ti.i("aS<1>").a(a),this,!1)
return},
cE(a){this.a^=2
A.nn(null,null,this.b,t.O.a(new A.vo(this,a)))},
$iaS:1}
A.vn.prototype={
$0(){A.fx(this.a,this.b)},
$S:0}
A.vs.prototype={
$0(){A.fx(this.b,this.a.a)},
$S:0}
A.vr.prototype={
$0(){A.vq(this.a.a,this.b,!0)},
$S:0}
A.vp.prototype={
$0(){this.a.cG(this.b)},
$S:0}
A.vo.prototype={
$0(){this.a.bv(this.b)},
$S:0}
A.vv.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oI(t.pF.a(q.d),t.z)}catch(p){s=A.ah(p)
r=A.cZ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nQ(q)
n=k.a
n.c=new A.bn(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.eK(new A.vw(l,m),new A.vx(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vw.prototype={
$1(a){this.a.k0(this.b)},
$S:22}
A.vx.prototype={
$2(a,b){A.fH(a)
t.l.a(b)
this.a.bv(new A.bn(a,b))},
$S:76}
A.vu.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eI(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ah(l)
r=A.cZ(l)
q=s
p=r
if(p==null)p=A.nQ(q)
o=this.a
o.c=new A.bn(q,p)
o.b=!0}},
$S:0}
A.vt.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nH(s)&&p.a.e!=null){p.c=p.a.ni(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.cZ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nQ(p)
m=l.b
m.c=new A.bn(p,n)
p=m}p.b=!0}},
$S:0}
A.mq.prototype={}
A.mY.prototype={}
A.jK.prototype={$iBT:1}
A.mR.prototype={
oK(a){var s,r,q
t.O.a(a)
try{if(B.C===$.ar){a.$0()
return}A.CZ(null,null,this,a,t.H)}catch(q){s=A.ah(q)
r=A.cZ(q)
A.zQ(A.fH(s),t.l.a(r))}},
hu(a){return new A.w0(this,t.O.a(a))},
oI(a,b){b.i("0()").a(a)
if($.ar===B.C)return a.$0()
return A.CZ(null,null,this,a,b)},
eI(a,b,c,d){c.i("@<0>").S(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.C)return a.$1(b)
return A.IO(null,null,this,a,b,c,d)},
oJ(a,b,c,d,e,f){d.i("@<0>").S(e).S(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.C)return a.$2(b,c)
return A.IN(null,null,this,a,b,c,d,e,f)},
io(a,b,c,d){return b.i("@<0>").S(c).S(d).i("1(2,3)").a(a)}}
A.w0.prototype={
$0(){return this.a.oK(this.b)},
$S:0}
A.xu.prototype={
$0(){A.ES(this.a,this.b)},
$S:0}
A.jh.prototype={
gu(a){return this.a},
gP(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.fy(this,this.$ti.i("fy<1>"))},
gak(){var s=this.$ti
return A.ld(new A.fy(this,s.i("fy<1>")),new A.vz(this),s.c,s.y[1])},
K(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ka(a)},
ka(a){var s=this.d
if(s==null)return!1
return this.bw(this.fq(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.BV(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.BV(q,b)
return r}else return this.ks(b)},
ks(a){var s,r,q=this.d
if(q==null)return null
s=this.fq(q,a)
r=this.bw(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fo(s==null?m.b=A.ze():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fo(r==null?m.c=A.ze():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.ze()
p=A.nw(b)&1073741823
o=q[p]
if(o==null){A.zf(q,p,[b,c]);++m.a
m.e=null}else{n=m.bw(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aJ(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fp()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aD(m))}},
fp(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
fo(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.zf(a,b,c)},
fq(a,b){return a[A.nw(b)&1073741823]}}
A.vz.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jj.prototype={
bw(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fy.prototype={
gu(a){return this.a.a},
gP(a){return this.a.a===0},
ga5(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.ji(s,s.fp(),this.$ti.i("ji<1>"))},
p(a,b){return this.a.K(b)}}
A.ji.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aD(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iai:1}
A.cx.prototype={
fS(){return new A.cx(A.v(this).i("cx<1>"))},
gv(a){var s=this,r=new A.fA(s,s.r,A.v(s).i("fA<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gP(a){return this.a===0},
ga5(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.k9(b)},
k9(a){var s=this.d
if(s==null)return!1
return this.bw(s[this.dO(a)],a)>=0},
ga1(a){var s=this.e
if(s==null)throw A.b(A.i("No elements"))
return A.v(this).c.a(s.a)},
k(a,b){var s,r,q=this
A.v(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fn(s==null?q.b=A.zg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fn(r==null?q.c=A.zg():r,b)}else return q.jI(b)},
jI(a){var s,r,q,p=this
A.v(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.zg()
r=p.dO(a)
q=s[r]
if(q==null)s[r]=[p.dN(a)]
else{if(p.bw(q,a)>=0)return!1
q.push(p.dN(a))}return!0},
a7(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fY(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fY(s.c,b)
else return s.l8(b)},
l8(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dO(a)
r=n[s]
q=o.bw(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hh(p)
return!0},
kq(a,b){var s,r,q,p,o,n=this,m=A.v(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aD(n))
if(!0===o)n.a7(0,r)}},
O(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dZ()}},
fn(a,b){A.v(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dN(b)
return!0},
fY(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hh(s)
delete a[b]
return!0},
dZ(){this.r=this.r+1&1073741823},
dN(a){var s,r=this,q=new A.mH(A.v(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dZ()
return q},
hh(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dZ()},
dO(a){return J.aN(a)&1073741823},
bw(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iB_:1}
A.mH.prototype={}
A.fA.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aD(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iai:1}
A.qQ.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:80}
A.a3.prototype={
gv(a){return new A.al(a,this.gu(a),A.cj(a).i("al<a3.E>"))},
a9(a,b){return this.h(a,b)},
gP(a){return this.gu(a)===0},
ga5(a){return!this.gP(a)},
ga1(a){if(this.gu(a)===0)throw A.b(A.cL())
return this.h(a,0)},
p(a,b){var s,r=this.gu(a)
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
s=A.z7("",a,b)
return s.charCodeAt(0)==0?s:s},
eQ(a,b){return new A.dX(a,b.i("dX<0>"))},
br(a,b,c){var s=A.cj(a)
return new A.H(a,s.S(c).i("1(a3.E)").a(b),s.i("@<a3.E>").S(c).i("H<1,2>"))},
k(a,b){var s
A.cj(a).i("a3.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.l(a,s,b)},
cW(a,b){return new A.b9(a,A.cj(a).i("@<a3.E>").S(b).i("b9<1,2>"))},
nb(a,b,c,d){var s
A.cj(a).i("a3.E?").a(d)
A.ff(b,c,this.gu(a))
for(s=b;s<c;++s)this.l(a,s,d)},
t(a){return A.yT(a,"[","]")},
$iU:1,
$ir:1,
$iJ:1}
A.af.prototype={
aJ(a,b){var s,r,q,p=A.v(this)
p.i("~(af.K,af.V)").a(b)
for(s=this.ga3(),s=s.gv(s),p=p.i("af.V");s.m();){r=s.gq()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gN(){return this.ga3().br(0,new A.qS(this),A.v(this).i("P<af.K,af.V>"))},
bs(a,b,c,d){var s,r,q,p,o,n=A.v(this)
n.S(c).S(d).i("P<1,2>(af.K,af.V)").a(b)
s=A.n(c,d)
for(r=this.ga3(),r=r.gv(r),n=n.i("af.V");r.m();){q=r.gq()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
lD(a){var s,r
for(s=J.O(A.v(this).i("r<P<af.K,af.V>>").a(a));s.m();){r=s.gq()
this.l(0,r.a,r.b)}},
K(a){return this.ga3().p(0,a)},
gu(a){var s=this.ga3()
return s.gu(s)},
gP(a){var s=this.ga3()
return s.gP(s)},
ga5(a){var s=this.ga3()
return s.ga5(s)},
gak(){return new A.jk(this,A.v(this).i("jk<af.K,af.V>"))},
t(a){return A.yZ(this)},
$iY:1}
A.qS.prototype={
$1(a){var s=this.a,r=A.v(s)
r.i("af.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("af.V").a(s)
return new A.P(a,s,r.i("P<af.K,af.V>"))},
$S(){return A.v(this.a).i("P<af.K,af.V>(af.K)")}}
A.qT.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:52}
A.jk.prototype={
gu(a){var s=this.a
return s.gu(s)},
gP(a){var s=this.a
return s.gP(s)},
ga5(a){var s=this.a
return s.ga5(s)},
ga1(a){var s=this.a,r=s.ga3()
r=s.h(0,r.ga1(r))
return r==null?this.$ti.y[1].a(r):r},
gv(a){var s=this.a,r=s.ga3()
return new A.jl(r.gv(r),s,this.$ti.i("jl<1,2>"))}}
A.jl.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gq())
return!0}s.c=null
return!1},
gq(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.jD.prototype={
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bu("Cannot modify unmodifiable map"))}}
A.hf.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.v(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
K(a){return this.a.K(a)},
aJ(a,b){this.a.aJ(0,A.v(this).i("~(1,2)").a(b))},
gP(a){var s=this.a
return s.gP(s)},
ga5(a){var s=this.a
return s.ga5(s)},
gu(a){var s=this.a
return s.gu(s)},
ga3(){return this.a.ga3()},
t(a){return this.a.t(0)},
gak(){return this.a.gak()},
gN(){return this.a.gN()},
bs(a,b,c,d){return this.a.bs(0,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.eA.prototype={}
A.df.prototype={
gP(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
L(a,b){var s
for(s=J.O(A.v(this).i("r<1>").a(b));s.m();)this.k(0,s.gq())},
bB(a){var s,r,q=this.b8(0)
for(s=this.gv(this);s.m();){r=s.gq()
if(a.p(0,r))q.a7(0,r)}return q},
t(a){return A.yT(this,"{","}")},
a2(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gq()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gq())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gq())
while(q.m())}else{r=s
do r=r+b+A.y(q.gq())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gq()))return!0
return!1},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cL())
return s.gq()},
a9(a,b){var s,r
A.lG(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.b(A.ql(b,b-r,this,"index"))},
$iU:1,
$ir:1,
$idQ:1}
A.jx.prototype={
bB(a){var s,r,q,p=this,o=p.fS()
for(s=A.fB(p,p.r,A.v(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.k(0,q)}return o},
b8(a){var s=this.fS()
s.L(0,this)
return s}}
A.n3.prototype={
k(a,b){this.$ti.c.a(b)
return A.H3()}}
A.hz.prototype={
p(a,b){return this.a.p(0,b)},
gu(a){return this.a.a},
gv(a){var s=this.a
return A.fB(s,s.r,A.v(s).c)},
b8(a){return this.a.b8(0)}}
A.hH.prototype={}
A.jE.prototype={}
A.mF.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.l0(b):s}},
gu(a){return this.b==null?this.c.a:this.bH().length},
gP(a){return this.gu(0)===0},
ga5(a){return this.gu(0)>0},
ga3(){if(this.b==null){var s=this.c
return new A.ac(s,A.v(s).i("ac<1>"))}return new A.mG(this)},
gak(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.v(s).i("ao<2>"))}return A.ld(r.bH(),new A.vB(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.u(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.K(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lt().l(0,b,c)},
K(a){if(this.b==null)return this.c.K(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aJ(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aJ(0,b)
s=o.bH()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.wL(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aD(o))}},
bH(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
lt(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bH()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.O(r)
n.a=n.b=null
return n.c=s},
l0(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.wL(this.a[a])
return this.b[a]=s}}
A.vB.prototype={
$1(a){return this.a.h(0,A.u(a))},
$S:30}
A.mG.prototype={
gu(a){return this.a.gu(0)},
a9(a,b){var s=this.a
if(s.b==null)s=s.ga3().a9(0,b)
else{s=s.bH()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.ga3()
s=s.gv(s)}else{s=s.bH()
s=new J.eW(s,s.length,A.B(s).i("eW<1>"))}return s},
p(a,b){return this.a.K(b)}}
A.w9.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:40}
A.w8.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:40}
A.kc.prototype={
mJ(a,b){t.L.a(a)
if(b===!0)return B.ez.by(a)
else return B.ey.by(a)}}
A.w4.prototype={
by(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.ff(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.b(A.M("Invalid value in input: "+o,null,null))
return this.kc(a,0,r)}}return A.z8(a,0,r)},
kc(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.ay((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kd.prototype={}
A.kk.prototype={
nL(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.ff(a4,a5,a2)
s=$.DO()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.xY(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.xY(a3.charCodeAt(g))
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
c=A.ay(j)
g.a+=c
p=k
continue}}throw A.b(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.J(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.As(a3,m,a5,n,l,r)
else{b=B.d.R(r-1,4)+1
if(b===1)throw A.b(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.bW(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.As(a3,m,a5,n,l,a)
else{b=B.d.R(a,4)
if(b===1)throw A.b(A.M(a1,a3,a5))
if(b>1)a3=B.c.bW(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ou.prototype={}
A.en.prototype={}
A.kv.prototype={}
A.kH.prototype={}
A.iw.prototype={
t(a){var s=A.kI(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.la.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.l9.prototype={
ai(a,b){var s=A.IA(a,this.gmM().a)
return s},
a0(a,b){var s=A.GI(a,this.gn4().b,null)
return s},
gn4(){return B.jO},
gmM(){return B.jN}}
A.qH.prototype={}
A.qG.prototype={}
A.vD.prototype={
iC(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(117)
s.a+=o
o=A.ay(100)
s.a+=o
o=p>>>8&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
switch(p){case 8:o=A.ay(98)
s.a+=o
break
case 9:o=A.ay(116)
s.a+=o
break
case 10:o=A.ay(110)
s.a+=o
break
case 12:o=A.ay(102)
s.a+=o
break
case 13:o=A.ay(114)
s.a+=o
break
default:o=A.ay(117)
s.a+=o
o=A.ay(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.J(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.J(a,r,m)},
dL(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.la(a,null))}B.a.k(s,a)},
dA(a){var s,r,q,p,o=this
if(o.iB(a))return
o.dL(a)
try{s=o.b.$1(a)
if(!o.iB(s)){q=A.AW(a,null,o.gfU())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ah(p)
q=A.AW(a,r,o.gfU())
throw A.b(q)}},
iB(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.iC(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dL(a)
q.oZ(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dL(a)
r=q.p_(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
oZ(a){var s,r,q=this.c
q.a+="["
s=J.aQ(a)
if(s.ga5(a)){this.dA(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dA(s.h(a,r))}}q.a+="]"},
p_(a){var s,r,q,p,o,n,m=this,l={}
if(a.gP(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.d9(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aJ(0,new A.vE(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iC(A.u(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dA(r[n])}p.a+="}"
return!0}}
A.vE.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:52}
A.vC.prototype={
gfU(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.m5.prototype={}
A.uG.prototype={
by(a){var s,r,q,p=a.length,o=A.ff(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.wa(s)
if(r.kp(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.e5()}return B.a1.aD(s,0,r.b)}}
A.wa.prototype={
e5(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
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
lA(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.e5()
return!1}},
kp(a,b,c){var s,r,q,p,o,n,m,l,k=this
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
if(k.lA(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.e5()}else if(n<=2047){m=k.b
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
A.uF.prototype={
by(a){return new A.w7(this.a).kb(t.L.a(a),0,null,!0)}}
A.w7.prototype={
kb(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.ff(b,c,J.cD(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Hk(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Hj(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dQ(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Hl(o)
l.b=0
throw A.b(A.M(m,a,p+l.c))}return n},
dQ(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.af(b+c,2)
r=q.dQ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dQ(a,s,c,d)}return q.mL(a,b,c,d)},
mL(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bE(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ay(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ay(h)
e.a+=p
break
case 65:p=A.ay(h)
e.a+=p;--d
break
default:p=A.ay(h)
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
p=A.ay(a[l])
e.a+=p}else{p=A.z8(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ay(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.f0.prototype={
gav(){return A.Ba(this)},
gaX(){return A.Bb(this)},
aa(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.f0)if(this.a===b.a)s=this.b===b.b
return s},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)},
I(a,b){var s
t.f7.a(b)
s=B.d.I(this.a,b.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
t(a){var s=this,r=A.Ex(A.FG(s)),q=A.kx(A.FE(s)),p=A.kx(A.Ba(s)),o=A.kx(A.Bb(s)),n=A.kx(A.FD(s)),m=A.kx(A.FF(s)),l=A.AA(A.FC(s)),k=s.b,j=k===0?"":A.AA(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibp:1}
A.dx.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.dx&&this.a===b.a},
gU(a){return B.d.gU(this.a)},
I(a,b){return B.d.I(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.af(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.af(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bD(B.d.t(o%1e6),6,"0")},
$ibp:1}
A.my.prototype={
t(a){return this.B()},
$iD:1}
A.at.prototype={
gc_(){return A.FB(this)}}
A.ke.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kI(s)
return"Assertion failed"}}
A.dT.prototype={}
A.cF.prototype={
gdU(){return"Invalid argument"+(!this.a?"(s)":"")},
gdT(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gdU()+q+o
if(!s.a)return n
return n+s.gdT()+": "+A.kI(s.ges())},
ges(){return this.b}}
A.hm.prototype={
ges(){return A.zp(this.b)},
gdU(){return"RangeError"},
gdT(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.l0.prototype={
ges(){return A.h(this.b)},
gdU(){return"RangeError"},
gdT(){if(A.h(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.j4.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.m0.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.ht.prototype={
t(a){return"Bad state: "+this.a}}
A.ks.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kI(s)+"."}}
A.lr.prototype={
t(a){return"Out of Memory"},
gc_(){return null},
$iat:1}
A.j_.prototype={
t(a){return"Stack Overflow"},
gc_(){return null},
$iat:1}
A.vl.prototype={
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
k=""}return g+l+B.c.J(e,i,j)+k+"\n"+B.c.a8(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.r.prototype={
cW(a,b){return A.Em(this,A.v(this).i("r.E"),b)},
br(a,b,c){var s=A.v(this)
return A.ld(this,s.S(c).i("1(r.E)").a(b),s.i("r.E"),c)},
dz(a,b){var s=A.v(this)
return new A.I(this,s.i("l(r.E)").a(b),s.i("I<r.E>"))},
eQ(a,b){return new A.dX(this,b.i("dX<0>"))},
p(a,b){var s
for(s=this.gv(this);s.m();)if(J.aa(s.gq(),b))return!0
return!1},
bc(a,b,c,d){var s,r
d.a(b)
A.v(this).S(d).i("1(1,r.E)").a(c)
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gq())
return r},
a2(a,b){var s
A.v(this).i("l(r.E)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gq()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gq())
if(!q.m())return s
r=b.gP(b)
if(r){r=s
do r+=J.c3(q.gq())
while(q.m())}else{r=s
do r=r+A.y(b)+J.c3(q.gq())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.v(this).i("l(r.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gq()))return!0
return!1},
bX(a,b){var s=A.K(this,A.v(this).i("r.E"))
return s},
bE(a){return this.bX(0,!0)},
gu(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gP(a){return!this.gv(this).m()},
ga5(a){return!this.gP(this)},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cL())
return s.gq()},
gbg(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.cL())
s=r.gq()
if(r.m())throw A.b(A.AO())
return s},
b5(a,b,c){var s,r=A.v(this)
r.i("l(r.E)").a(b)
r.i("r.E()?").a(c)
for(r=this.gv(this);r.m();){s=r.gq()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cL())},
an(a,b){return this.b5(0,b,null)},
a9(a,b){var s,r
A.lG(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.b(A.ql(b,b-r,this,"index"))},
t(a){return A.Fc(this,"(",")")}}
A.P.prototype={
t(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.ax.prototype={
gU(a){return A.L.prototype.gU.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
aa(a,b){return this===b},
gU(a){return A.iO(this)},
t(a){return"Instance of '"+A.lB(this)+"'"},
gad(a){return A.A3(this)},
toString(){return this.t(this)}}
A.n0.prototype={
t(a){return""},
$idh:1}
A.uh.prototype={
gn2(){var s,r=this.b
if(r==null)r=$.rV.$0()
s=r-this.a
if($.Ad()===1e6)return s
return s*1000}}
A.bE.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iG5:1}
A.uE.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.u(b)
s=B.c.bC(b,"=")
if(s===-1){if(b!=="")a.l(0,A.zl(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.J(b,0,s)
q=B.c.aQ(b,s+1)
p=this.a
a.l(0,A.zl(r,0,r.length,p,!0),A.zl(q,0,q.length,p,!0))}return a},
$S:89}
A.uD.prototype={
$2(a,b){throw A.b(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:106}
A.jF.prototype={
ghb(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.c.gU(r.ghb())
r.y!==$&&A.nx()
r.y=s
q=s}return q},
gaZ(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.BB(s==null?"":s)
r.z!==$&&A.nx()
q=r.z=new A.eA(s,t.hL)}return q},
giy(){return this.b},
geq(){var s=this.c
if(s==null)return""
if(B.c.V(s,"[")&&!B.c.aq(s,"v",1))return B.c.J(s,1,s.length-1)
return s},
gey(){var s=this.d
return s==null?A.C5(this.a):s},
geB(){var s=this.f
return s==null?"":s},
ghU(){var s=this.r
return s==null?"":s},
ghX(){return this.c!=null},
ghZ(){return this.f!=null},
ghY(){return this.r!=null},
t(a){return this.ghb()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geW())if(p.c!=null===b.ghX())if(p.b===b.giy())if(p.geq()===b.geq())if(p.gey()===b.gey())if(p.e===b.gie()){r=p.f
q=r==null
if(!q===b.ghZ()){if(q)r=""
if(r===b.geB()){r=p.r
q=r==null
if(!q===b.ghY()){s=q?"":r
s=s===b.ghU()}}}}return s},
$im3:1,
geW(){return this.a},
gie(){return this.e}}
A.uC.prototype={
gix(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.de(s,"?",m)
q=s.length
if(r>=0){p=A.jG(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mu("data","",n,n,A.jG(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.mV.prototype={
ghX(){return this.c>0},
ghZ(){return this.f<this.r},
ghY(){return this.r<this.a.length},
geW(){var s=this.w
return s==null?this.w=this.k7():s},
k7(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.V(r.a,"http"))return"http"
if(q===5&&B.c.V(r.a,"https"))return"https"
if(s&&B.c.V(r.a,"file"))return"file"
if(q===7&&B.c.V(r.a,"package"))return"package"
return B.c.J(r.a,0,q)},
giy(){var s=this.c,r=this.b+3
return s>r?B.c.J(this.a,r,s-1):""},
geq(){var s=this.c
return s>0?B.c.J(this.a,s,this.d):""},
gey(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Dm(B.c.J(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.V(r.a,"http"))return 80
if(s===5&&B.c.V(r.a,"https"))return 443
return 0},
gie(){return B.c.J(this.a,this.e,this.f)},
geB(){var s=this.f,r=this.r
return s<r?B.c.J(this.a,s+1,r):""},
ghU(){var s=this.r,r=this.a
return s<r.length?B.c.aQ(r,s+1):""},
gaZ(){if(this.f>=this.r)return B.aO
return new A.eA(A.BB(this.geB()),t.hL)},
gU(a){var s=this.x
return s==null?this.x=B.c.gU(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$im3:1}
A.mu.prototype={}
A.rn.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.yy.prototype={
$1(a){return this.a.e8(this.b.i("0/?").a(a))},
$S:20}
A.yz.prototype={
$1(a){if(a==null)return this.a.hw(new A.rn(a===undefined))
return this.a.hw(a)},
$S:20}
A.xR.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.CL(a))return a
s=this.a
a.toString
if(s.K(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b2(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e6(!0,"isUtc",t.y)
return new A.f0(r,0,!0)}if(a instanceof RegExp)throw A.b(A.p("structured clone of RegExp",null))
if(a instanceof Promise)return A.av(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cY(n),p=s.gv(n);p.m();)m.push(A.i_(p.gq()))
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
A.mE.prototype={
aY(a){if(a<=0||a>4294967296)throw A.b(A.Be(u.w+a))
return Math.random()*a>>>0},
az(){return Math.random()},
$iz4:1}
A.eI.prototype={
c0(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.bk()
l.bk()
l.bk()
l.bk()},
bk(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.af(o-n+(q-p)+(m-r),4294967296)>>>0},
aY(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.Be(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bk()
return(p.a&s)>>>0}do{p.bk()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
az(){var s,r=this
r.bk()
s=r.a
r.bk()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iz4:1}
A.kC.prototype={
B(){return"DiagnosticSeverity."+this.b}}
A.eb.prototype={
C(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.tY.prototype={
$1(a){return B.c.bD(B.d.eM(A.h(a),16),8,"0")},
$S:131}
A.m6.prototype={}
A.r6.prototype={
ol(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),q=o.a,r=r.i("a0.E");s.m();){p=s.d
q.aK(p==null?r.a(p):p)}}}
A.lh.prototype={}
A.rh.prototype={}
A.r8.prototype={
dh(a0,a1){var s=0,r=A.aL(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dh=A.aM(function(a3,a4){if(a3===1)return A.aI(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.DA(b)
if(a.length!==0)throw A.b(A.M(B.a.br(a,new A.r9(),t.N).W(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.b(B.hY)
k=t.N
j=A.a_(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.w)(m),++i)j.L(0,m[i].c.gak())
if(j.a>16384)throw A.b(B.hR)
p=A.n(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gak(),g=g.gv(g)
case 6:if(!g.m()){s=7
break}o=g.gq()
if(p.K(o)){s=6
break}s=8
return A.a6(j.$1(o),$async$dh)
case 8:f=a4
e=f.length
if(e>67108864)throw A.b(A.M("model package payload exceeds limit: "+A.y(o),null,null))
d=p
if(new A.ao(d,A.v(d).i("ao<2>")).bc(0,0,new A.ra(),k)+e>268435456)throw A.b(B.i0)
J.b7(p,o,new Uint8Array(A.R(f)))
if(l)try{e=J.b0(p,o)
e.toString
A.De(e)}catch(a2){b=A.ah(a2)
if(b instanceof A.lE){n=b
throw A.b(A.M("model package payload is not valid QMSH: "+A.y(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.w)(m),++i
s=3
break
case 5:if(A.B4(b,p)!==b.c)throw A.b(B.h1)
q=new A.m6(b,p)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dh,r)}}
A.r9.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.ra.prototype={
$2(a,b){return A.h(a)+t.uo.a(b).length},
$S:163}
A.rb.prototype={
A(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iQ("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.k(l,"assetId must be kebab-case")
k=A.iQ("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.k(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.k(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.k(l,"parts must be non-empty")
s=m.w
if(A.he(s,A.B(s).c).a!==s.length)B.a.k(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.k(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.M(s,new A.re())
else s=!1
if(s)B.a.k(l,"combinedBounds must contain six finite values")
for(s=m.y.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
if(q.length!==0){r=r.b
p=J.aQ(r)
r=p.gu(r)!==16||p.M(r,new A.rf())}else r=!0
if(r)B.a.k(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.w)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.k(l,"part material slot is outside materials")
q=n.c
if(q.gP(q))B.a.k(l,"part "+n.a+" must declare payload files")
for(q=q.gak(),q=q.gv(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.Ih(q.gq()))B.a.k(l,p)}return l},
iu(a){var s,r,q,p=this,o=A.n(t.N,t.z)
o.l(0,"schema","pixeldart-model-package-v1")
o.l(0,"assetId",p.b)
if(a)o.l(0,"packageHash",p.c)
o.l(0,"sourceFormat",p.d)
s=p.e
r=A.B(s)
q=r.i("H<1,Y<e,@>>")
s=A.K(new A.H(s,r.i("Y<e,@>(1)").a(new A.rd()),q),q.i("a0.E"))
o.l(0,"parts",s)
o.l(0,"materials",p.f)
o.l(0,"textures",p.r)
o.l(0,"lods",p.w)
o.l(0,"combinedBounds",p.x)
o.l(0,"sockets",p.y)
o.l(0,"provenance",p.z)
return o},
C(){return this.iu(!0)}}
A.rc.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:34}
A.re.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.rf.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.rd.prototype={
$1(a){return t.aw.a(a).C()},
$S:70}
A.fa.prototype={
C(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.rg.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:34}
A.xh.prototype={
$1(a){A.u(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.xB.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xk.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.xz.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yJ.prototype={
$2(a,b){B.a.k(this.a,new A.eb(a,B.cB,"model-package",b,"rebuild the deterministic model package"))},
$S:32}
A.yK.prototype={
$2(a,b){B.a.k(this.a,new A.eb(a,B.cB,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:32}
A.rZ.prototype={
A(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.t_()))throw A.b(B.iI)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.hr)}}
A.t_.prototype={
$1(a){return A.h(a)<=0},
$S:21}
A.fe.prototype={
B(){return"QualityProfileKind."+this.b}}
A.dN.prototype={
A(){var s="installedFeatures",r=this.b,q=r.bB(B.nv)
if(q.a!==0)throw A.b(A.a7(q,s,"contains unknown pipeline features"))
if(this.a===B.bJ&&r.ga5(r))throw A.b(A.a7(r,s,"safe profiles cannot install optional features"))}}
A.h_.prototype={
B(){return"CoordinatedTransitionState."+this.b}}
A.ly.prototype={}
A.oI.prototype={
c9(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.i("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.i("configuration state is not initialized"))
if(p.c!=null)A.f(A.i("a configuration transition is already open"))
a2.A()
n=A.iI(a2)
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
a=new A.oL(m,a2,n,new A.oJ(A.fk(g,k),A.fk(f,k),A.fk(e,k),A.fk(d,k),c,b,o.z!==a2.z),B.cz)
p.c=a
s=a
try{r=a1.b.dm(s.c)
q=new A.ly(s,r,B.b7)
a1.c=q
return q}catch(a0){p.hm(s)
throw a0}},
ca(a){var s,r,q,p=this
p.fv(a)
s=p.a
r=a.a
s.fw(r)
q=s.d
if(r.a!==q)A.f(A.i("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fr
s.c=null
p.b.ca(a.b)
a.c=B.fz
p.c=null},
fv(a){if(this.c!==a||a.c!==B.b7)throw A.b(A.i("coordinated transition is not open"))}}
A.fV.prototype={
B(){return"ConfigurationTransactionState."+this.b}}
A.oJ.prototype={}
A.oL.prototype={}
A.oK.prototype={
hm(a){this.fw(a)
a.e=B.fs
this.c=null},
fw(a){if(this.c!==a||a.e!==B.cz)throw A.b(A.i("configuration transition is not open"))}}
A.lx.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.N(n,A.v(n).i("N<1,2>")).gv(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.b(A.p("PostProcessState."+l+" must be >= 0: "+A.y(k),i))}n=j.ay
if(n<1||n>8)throw A.b(A.p("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.b(A.p("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),i))
if(r>1)throw A.b(A.p("PostProcessState.surfaceWetness must be in [0, 1]: "+A.y(r),i))
if(q>1)throw A.b(A.p("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.y(q),i))
if(p>1)throw A.b(A.p("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.y(p),i))
if(o>1)throw A.b(A.p("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(o),i))}}
A.i7.prototype={
gi5(){var s,r=this,q=r.x
if(q===$){s=r.b.i4()
r.x!==$&&A.nx()
r.x=s
q=s}return q}}
A.ub.prototype={}
A.kO.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gT(0)||!h.b.gT(0)||!h.fx.gT(0)||!h.r.gT(0)||!h.dx.gT(0))throw A.b(A.p("FrameEnvironment colors must be finite",g))
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
if(s)A.f(A.p("SkyboxDeclaration contains invalid values",g))}s=h.c
if(isFinite(s)){r=h.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.p("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.b(A.p("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),g))
s=h.go
if(s!=null)s.A()
for(s=h.id,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.f(A.p("PointLight.position must be finite: "+q.t(0),g))
q=n.d
if(!isFinite(q)||q<0)A.f(A.p("PointLight.intensity must be >= 0: "+A.y(q),g))
q=n.e
if(!isFinite(q)||q<=0)A.f(A.p("PointLight.radius must be > 0: "+A.y(q),g))}for(s=h.k1,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.f(A.p("SpotLight.position must be finite: "+q.t(0),g))
q=n.c
p=q.a
if(isFinite(p)&&isFinite(q.b)&&isFinite(q.c)){m=q.b
l=q.c
l=p*p+m*m+l*l<1e-12
p=l}else p=!0
if(p)A.f(A.p("SpotLight.direction must be finite and nonzero: "+q.t(0),g))
if(n.w<=n.r)A.f(A.p("SpotLight.outerConeRadians must exceed innerConeRadians",g))}s=t.N
k=A.a_(s)
for(r=h.k2,q=r.length,o=0;o<r.length;r.length===q||(0,A.w)(r),++o){j=r[o]
j.A()
p=j.a
if(!k.k(0,p))throw A.b(A.p("FrameEnvironment.volumetricSources contains duplicate id: "+p,g))}r=h.w
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
if(r)throw A.b(A.p("invalid volumetric medium controls",g))
i=A.a_(s)
for(s=h.k3,r=s.length,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){j=s[o]
q=j.a
p=!0
if(B.c.aP(q).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){p=j.d
p=!isFinite(p)||m<=0||p<0||p>1}}}if(p)A.f(A.p("thermal source is invalid",g))
if(!i.k(0,q))throw A.b(A.p("FrameEnvironment.thermalSources contains duplicate id: "+q,g))}}}
A.kP.prototype={}
A.dO.prototype={
aa(a,b){if(b==null)return!1
return J.eV(b)===A.A3(this)&&b instanceof A.dO&&this.a===b.a&&this.b===b.b},
gU(a){return A.cP(A.A3(this),this.a,this.b,B.h,B.h,B.h)}}
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
A.ls.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cJ.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.f5.prototype={
B(){return"HandleRejection."+this.b}}
A.kY.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.aT.prototype={
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.aT&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kE.prototype={
A(){var s=this.a
if(!s.gT(0)||s.gbd()<1e-12)throw A.b(A.p("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.b(A.p("DirectionalLight.intensity must be >= 0: "+A.y(s),null))}}
A.lw.prototype={
gE(){return this.a}}
A.bO.prototype={
gE(){return this.a}}
A.yA.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:88}
A.fO.prototype={
B(){return"AlphaMode."+this.b}}
A.iA.prototype={
B(){return"MaterialMapColorSpace."+this.b}}
A.cO.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.p("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.p("MaterialDefinition.emissiveStrength must be >= 0: "+A.y(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.b(A.p("MaterialDefinition.normalStrength must be >= 0: "+A.y(s),k))
A.lf("roughness",l.at)
A.lf("metallic",l.ax)
A.lf("occlusionStrength",1)
A.lf("clearcoatStrength",l.ch)
A.lf("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.b(A.p("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a5("uvScaleU",s),new A.a5("uvScaleV",r),new A.a5("uvOffsetU",0),new A.a5("uvOffsetV",0),new A.a5("tintR",l.d),new A.a5("tintG",l.e),new A.a5("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.p("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.b(A.p("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.b(A.p("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.y(s),k))}}
A.cT.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.bb.prototype={}
A.j6.prototype={
A(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.b(A.p("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.b(A.p(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.b(A.p(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.B(s)
r=j.i("l(1)").a(new A.uH())
for(s=B.a.gv(s),j=new A.W(s,r,j.i("W<1>"));j.m();)if(s.gq().c!==4)throw A.b(A.p(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.uH.prototype={
$1(a){return t.qY.a(a).a===B.c6},
$S:18}
A.bW.prototype={
A(){var s,r,q,p,o,n=this,m=n.a
m.A()
s=n.b.length
m=m.b
if(B.d.R(s,m)!==0)throw A.b(A.p("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.lv()
r=n.c
if(r!=null){q=B.d.b9(s,m)
for(m=A.Fk(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.b(A.p("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gT(0)&&m.b.gT(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.b(A.p("MeshData.localBounds must be a valid AABB",null))},
lv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.B(a4),a6=a5.i("l(1)")
a5=a5.i("I<1>")
s=new A.I(a4,a6.a(new A.r_()),a5)
if(!s.gv(0).m())return
r=new A.I(a4,a6.a(new A.r0()),a5)
if(r.gu(0)!==1)throw A.b(A.p("surface-v2 tangent data requires one normal slot",a2))
q=s.gbg(0)
p=r.gbg(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.b9(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
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
if(!B.a.a2(A.c([i,g,f,e,d,c,b],o),new A.r1()))throw A.b(A.p("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.b(A.p("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.b(A.p("surface-v2 tangent must be orthogonal to its normal: "+A.y(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.b(A.p("surface-v2 tangent handedness must be -1 or +1: "+A.y(b),a2))}}}
A.r_.prototype={
$1(a){return t.qY.a(a).a===B.c6},
$S:18}
A.r0.prototype={
$1(a){return t.qY.a(a).a===B.ej},
$S:18}
A.r1.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.ky.prototype={$iFS:1}
A.rp.prototype={
A(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.b(A.p("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.rq()))throw A.b(A.p("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.b(A.p("resource history does not match vhsOutput ownership",null))}}
A.rq.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.hp.prototype={
B(){return"ResourceAssemblyState."+this.b}}
A.lz.prototype={}
A.lK.prototype={
i2(a){var s=this
if(s.d)A.f(A.i("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.i("resource assembler is initialized"))
a.A()
s.a=a
s.c=1},
dm(a){var s=this
if(s.d)A.f(A.i("resource assembler is disposed"))
if(s.a==null)throw A.b(A.i("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.i("resource assembly is already open"))
a.A()
return s.b=new A.lz(s.c,a,B.bQ)},
ca(a){var s,r=this
if(r.d)A.f(A.i("resource assembler is disposed"))
r.h1(a)
s=r.c
if(a.a!==s)throw A.b(A.i("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.n8
r.b=null},
eH(a){if(this.d)A.f(A.i("resource assembler is disposed"))
this.h1(a)
a.c=B.n9
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.i("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
h1(a){if(this.b!==a||a.c!==B.bQ)throw A.b(A.i("resource assembly is not prepared"))}}
A.h1.prototype={
B(){return"DrawMode."+this.b}}
A.km.prototype={
B(){return"BlendMode."+this.b}}
A.bf.prototype={}
A.lY.prototype={
A(){var s=this
if(s.a<0||s.b<0)throw A.b(A.p("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.p("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.p("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.i9.prototype={
B(){return"ColorEncoding."+this.b}}
A.h0.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.iS.prototype={
A(){var s,r=this,q=null
r.a.A()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.p("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.p("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.p("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.p("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fh.prototype={
B(){return"RendererState."+this.b}}
A.aY.prototype={}
A.po.prototype={
ic(a){var s=this.z.h(0,a)
return s==null?B.cO:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.f9.prototype={
B(){return"MaterialResidencyStatus."+this.b}}
A.db.prototype={}
A.c7.prototype={}
A.qX.prototype={
cH(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qY(a)),r.i("I<1>")).gu(0)}}
A.qY.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:90}
A.qV.prototype={
dn(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.n(s,t.jt)
q=A.c([],t.r8)
p=A.n(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.w)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.f(A.p("material residency key is empty",null))
k=m.b
k.A()
if(r.K(l))throw A.b(A.p("material residency keys must be unique: "+l,null))
r.l(0,l,m)
j=A.n(s,s)
for(k=A.D7(k),i=k.$ti,k=new A.cf(k.a(),i.i("cf<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.l(0,e,c)
B.a.k(q,new A.c0(c,d,g))}p.l(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.dn(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.l(0,b.a.a,b.b)}o=r.$ti.i("ao<2>")
a=A.K(new A.ao(r,o),o.i("r.E"))
B.a.Y(a,new A.qW())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.w)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.lc(m,k,s))}return new A.qX(A.ad(o,t.wl))},
lc(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.N(b,A.v(b).i("N<1,2>")).gv(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.l(0,n,m)}p=A.Fi(new A.ao(q,q.$ti.i("ao<2>")))
A.aW(q,s,r)
return new A.c7(a,p)}}
A.qW.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:94}
A.lg.prototype={
oy(a){return this.a.bA(a)}}
A.qZ.prototype={
$3(a,b,c){return new A.c6(A.h(a),A.h(b),A.aq(c))},
$S:209}
A.m2.prototype={}
A.r2.prototype={
bb(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.BP(b,new A.kU(a.byteLength,B.d1,B.j0))
if(b.b!==B.j)A.f(A.i(c))
s=A.a(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cw(b)
A.bi(b,p)
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a_(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.D4(h.a)
if(!l.k(0,g))continue
f=A.HD(o,g,h)
if(b.b!==B.j)A.f(A.i(c))
r.vertexAttribPointer.apply(r,[g,f,A.h(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.f(A.i(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.BP(b,new A.kU(A.B3(e),B.d1,B.d0))
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(d.a))
A.Gu(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.m2(a0,d,p,b,B.d.b9(a.length,n),t.Dd.b(e))},
cq(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.es(B.aM,a))
this.b.bA(a)
return s},
aK(a){var s,r,q=this.c.a7(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.aK(a)},
eD(){var s,r,q,p
for(s=this.b.bS(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bb(p.b))}},
gcn(){return this.b.bS().bc(0,0,new A.r4(),t.S)}}
A.r3.prototype={
$3(a,b,c){return new A.bL(A.h(a),A.h(b),A.aq(c))},
$S:112}
A.r4.prototype={
$2(a,b){var s,r
A.h(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.B3(s)
return a+r+s},
$S:114}
A.i6.prototype={}
A.r5.prototype={
mK(a){var s,r,q,p,o=A.Jw(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.i("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.l(0,s,q+1)
r.toString
return r}p=new A.i6(o,1,A.JC(A.De(a)))
m.l(0,n,p)
this.c.l(0,n,1)
return p},
aK(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.b(A.i("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a7(0,p)
q.a7(0,p)}else s.l(0,p,r-1)}}
A.r7.prototype={
C(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hh.prototype={
iZ(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.i("model package binding is disposed"))
if(a8.x==null)throw A.b(A.i("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.w)(s),++i){h=k.a(s[i])
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
A.b1(new A.H(a,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
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
A.b1(new A.H(c,a7.i("C(1)").a(a6.gao()),a7.i("H<1,C>")))
a5=l.a(new A.bf(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.Z(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb3(a5)}},
a_(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fP(s,r,q.x)
B.a.O(s)
B.a.O(r)
q.x=null},
jM(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.Fm(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
if(typeof e!=="number")return e.cv()
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
c.c.l(0,b.a,c.bb(e))
g.f.k(0,b)
p=b
J.e8(a5,p)
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
A.b1(new A.H(d,a0.i("C(1)").a(c.gao()),a0.i("H<1,C>")))
J.e8(a6,n.b.bO(new A.bf(e,q,m,l,B.U,B.S,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a4()
s=e+1}return new A.jv(a4,a6,a5)}catch(a1){a2.fP(a6,a5,a4)
throw a1}},
fP(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.B(a).i("bM<1>"),r=new A.bM(a,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.d.b,s=s.i("a0.E");r.m();){p=r.d
q.aK(p==null?s.a(p):p)}for(s=A.B(b).i("bM<1>"),r=new A.bM(b,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.c,s=s.i("a0.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.i("resource library is disposed"))
q.a.aK(p)
q.f.a7(0,p)}if(c!=null)c.ol()}}
A.cR.prototype={
B(){return"QmeshRejection."+this.b}}
A.lE.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.xS.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.c0.prototype={}
A.dS.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.cb.prototype={}
A.us.prototype={
cR(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.ut(a)),r.i("I<1>")).gu(0)}}
A.ut.prototype={
$1(a){return t.h.a(a).b===this.a},
$S:120}
A.uq.prototype={
dn(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.w)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.p("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a7(n,"handle","must be valid"))
if(s.K(o))throw A.b(A.p("TextureResidencyRequest keys must be unique: "+o,null))
s.l(0,o,p)}r=s.$ti.i("ao<2>")
m=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(m,new A.ur())
r=t.Aj
l=A.a_(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.w)(m),++q){p=m[q]
o=p.b
if(l.k(0,o)){i=this.l_(o)
k.l(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.k(j,new A.cb(p,i))}r=l.a
return new A.us(A.ad(j,t.h),r)},
l_(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.t()
if(s.cS(a,r)===s.d)return B.ed
this.b.l(0,a,!0)
return B.ec}catch(q){if(A.ah(q) instanceof A.kY){s=this.b.h(0,a)===!0?B.ef:B.ee
return s}else throw q}}}
A.ur.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:121}
A.dm.prototype={}
A.m_.prototype={
b1(a){var s=this.a,r=A.zb(s,B.j5)
A.zc(s,r,0,a)
return r},
oQ(a,b){var s,r,q,p=this,o=p.b,n=o.bA(a),m=A.K(n.b,t.Fx)
B.a.l(m,0,b)
s=n.a
o.eN(a,new A.dm(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.zb(p.a,s)
o.l(0,r,q)}A.zc(p.a,q,0,b)},
nd(a){var s,r=this.b,q=r.bA(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.i("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.BQ(this.a,s)
r.eN(a,new A.dm(p,q.b,!0))},
nx(a){return B.a.a2(this.b.bA(a).b,new A.uv())},
cS(a,b){var s
this.b.bA(a)
s=this.c.h(0,a.a)
return s==null?b:s},
ou(a){var s
if(a==null){s=this.d
s===$&&A.t()
return s}s=this.d
s===$&&A.t()
return this.cS(a,s)},
oD(a){var s
if(a==null){s=this.e
s===$&&A.t()
return s}s=this.e
s===$&&A.t()
return this.cS(a,s)},
oF(a){var s=this.f
s===$&&A.t()
return s},
ow(a){var s=this.r
s===$&&A.t()
return s},
oB(a){var s=this.w
s===$&&A.t()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>")),q=n.a,p=q.a,o=t.p;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.O(0)
s=n.d
s===$&&A.t()
A.mj(q,s)
s=n.e
s===$&&A.t()
A.mj(q,s)
s=n.f
s===$&&A.t()
A.mj(q,s)
s=n.r
s===$&&A.t()
A.mj(q,s)
s=n.w
s===$&&A.t()
A.mj(q,s)},
eD(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b1($.Ac())
i.e=i.b1($.A9())
i.f=i.b1($.Aa())
i.r=i.b1($.A8())
i.w=i.b1($.Ab())
for(s=i.b.bS(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.ux()))continue
l=A.zb(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.zc(p,l,k,j)}if(m.c)A.BQ(p,l)
q.l(0,n.a,l)}},
gcn(){return this.b.bS().bc(0,0,new A.uw(),t.S)}}
A.uu.prototype={
$3(a,b,c){return new A.bt(A.h(a),A.h(b),A.aq(c))},
$S:127}
A.uv.prototype={
$1(a){return t.Fx.a(a)!=null},
$S:31}
A.ux.prototype={
$1(a){return t.Fx.a(a)==null},
$S:31}
A.uw.prototype={
$2(a,b){var s
A.h(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:135}
A.bh.prototype={
B(){return"SolarPhase."+this.b}}
A.uf.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a5("timeHours",e.a),new A.a5("solarNoonHours",s),new A.a5("latitudeRadians",r),new A.a5("solarDeclinationRadians",q),new A.a5(d,p),new A.a5(c,o),new A.a5("aerosolTurbidity",n),new A.a5(b,m),new A.a5("solarIntensity",e.x),new A.a5("baseFogDensity",l),new A.a5("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.b(A.p(g+" must be finite",a))}if(s>=24)throw A.b(A.p("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.b(A.p("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.b(A.p("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a5(d,p),new A.a5(c,o),new A.a5(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.b(A.p(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.b(A.p("solar attenuation inputs are out of bounds",a))}}
A.hw.prototype={
gE(){return this.a}}
A.cu.prototype={
A(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gT(0)){s=p.c
if(s.gT(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.b(A.p("invalid volumetric source "+o,null))},
gE(){return this.a}}
A.yB.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.c.I(a.b.a,b.b.a):s},
$S:138}
A.uV.prototype={}
A.dH.prototype={
gnr(){return this.b.length}}
A.kM.prototype={
lX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.t2(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p)r[p].aw(s,b)
o=s.lW(a,!1)
if(o.b.length!==0)return new A.kN(o,B.kw)
q=o.a
n=A.B(q)
m=new A.H(q,n.i("e(1)").a(new A.pi()),n.i("H<1,e>")).b8(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p){k=r[p]
for(n=k.au(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.w)(n),++i){h=n[i]
if(!m.p(0,h.gG().a))throw A.b(A.i('RenderFeature "'+k.gE()+'" created a pass "'+h.gG().a+'" that it never declared into the graph'))
B.a.k(l,h)}}B.a.Y(l,new A.pj(o))
return new A.kN(o,l)},
bP(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)s[q].a_()}}
A.pi.prototype={
$1(a){return t.A.a(a).a},
$S:142}
A.pj.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.I(B.a.er(s,new A.pg(a)),B.a.er(s,new A.ph(b)))},
$S:147}
A.pg.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.ph.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.kN.prototype={}
A.f2.prototype={
B(){return"FrameQueueState."+this.b}}
A.kQ.prototype={$iFL:1}
A.pn.prototype={
lT(a){if(a.length===0)throw A.b(A.a7(a,"passId",null))
this.b=a
this.a.bU(a,A.Dg())},
je(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=r.b
o.l(0,q,new A.aY(p.a,p.b,p.d))}return A.aW(o,t.N,t.pH)},
bJ(a,b){var s,r=this.b
if(r==null)throw A.b(A.i("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.p("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.af(a,3)*b}}
A.hB.prototype={}
A.aw.prototype={
gbV(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rt()),r.i("I<1>"))},
gcu(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.ru()),r.i("I<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"},
gE(){return this.a}}
A.rt.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.P},
$S:19}
A.ru.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:19}
A.co.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.bz.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iU.prototype={
B(){return"ResourceFormat."+this.b}}
A.d5.prototype={
B(){return"GraphStage."+this.b}}
A.aO.prototype={
i8(){var s=this
return new A.aO(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aO&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gU(a){var s=this
return A.cP(s.a,s.b,s.c,s.d,s.e,s.f)},
t(a){var s=this,r=s.b.t(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.ho.prototype={
B(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.ia.prototype={
gE(){return this.a}}
A.lC.prototype={
aA(a){var s,r,q,p,o,n,m=this
a.A()
s=null
try{r=t.a
s=A.Gx(m.a,a.c,r.a(a.d.ga3().bE(0)),r.a(a.f),a.b)}catch(q){if(A.ah(q) instanceof A.iX){++m.e
throw q}else throw q}r=a.a
p=new A.ia(r,s)
o=m.b
n=o.h(0,r)
o.l(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bP(){var s=this.b
this.kg(new A.ao(s,A.v(s).i("ao<2>")))
s.O(0)},
kg(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.be.prototype={
A(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.p("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gN(),q=q.gv(q);q.m();){p=q.gq()
o=p.b
if(o<0)throw A.b(A.p('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.b(A.p('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gN(),s=s.gv(s);s.m();){q=s.gq()
p=q.b
if(p<0)throw A.b(A.p('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.b(A.p('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.t0.prototype={}
A.ba.prototype={
aj(){var s=this
return A.AD(B.eT,s.f,B.aD,B.ai,!0,!0,!0,!0,s.r,B.aH,B.aI,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.t2.prototype={
lW(a,b){var s=this.lu(t.Q.a(a),!1),r=this.a,q=A.B(r)
return new A.t1(A.ad(new A.I(r,q.i("l(1)").a(new A.t7()),q.i("I<1>")),t.A),s)},
lu(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.B(r)
p=q.i("I<1>")
o=A.K(new A.I(r,q.i("l(1)").a(new A.t6()),p),p.i("r.E"))
m.jS(o,a,s)
m.jW(o,s)
m.jY(o,s)
m.jV(o,!1,s)
n=m.k_(o,s)
m.jX(o,n,s)
m.jZ(o,s)
m.jU(o,n,s)
m.jT(o,s)
return s},
jS(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
p=B.a8.bB(b)
if(p.a!==0)B.a.k(c,new A.bz(B.jh,q.a,"missing capabilities: "+p.W(0,", ")))}},
jW(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbV(),o=J.O(p.a),p=new A.W(o,p.b,p.$ti.i("W<1>")),n=q.a;p.m();){m=o.gq().a
if(m.e>1)B.a.k(b,new A.bz(B.jc,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
jY(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.B(a),r=s.i("l(1)").a(new A.t5()),q=B.a.gv(a),s=new A.W(q,r,s.i("W<1>"));s.m();){r=q.gq()
p=r.gbV()
o=A.K(p,p.$ti.i("r.E"))
p=r.gcu()
n=A.K(p,p.$ti.i("r.E"))
if(o.length!==1||n.length!==1){B.a.k(b,new A.bz(B.be,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbg(o).a
l=B.a.gbg(n).a
if(m.e<=1||l.e>1)B.a.k(b,new A.bz(B.be,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.k(b,new A.bz(B.be,r.a,"resolve source and destination must match format and extent"))}},
jV(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.w)(p),++m){l=p[m]
if(l.b===B.P)B.a.k(c,new A.bz(B.jf,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
k_(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.w)(a),++q){p=a[q]
for(o=p.gcu(),n=J.O(o.a),o=new A.W(n,o.b,o.$ti.i("W<1>")),m=p.a;o.m();){l=n.gq().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bz(B.jb,m,l.t(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
jX(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbV(),p=J.O(q.a),q=new A.W(p,q.b,q.$ti.i("W<1>")),o=r.a;q.m();){n=p.gq()
if(n.b===B.P)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bz(B.d5,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bC(a,m)>s)B.a.k(c,new A.bz(B.d5,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
jZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
for(p=q.gbV(),o=J.O(p.a),p=new A.W(o,p.b,p.$ti.i("W<1>")),n=q.a;p.m();){m=o.gq()
if(m.b===B.P)continue
for(l=q.gcu(),k=J.O(l.a),l=new A.W(k,l.b,l.$ti.i("W<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gq().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bz(B.je,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
jU(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
for(p=q.gbV(),o=J.O(p.a),p=new A.W(o,p.b,p.$ti.i("W<1>")),n=q.a;p.m();){m=o.gq()
if(m.b===B.P)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcu().an(0,new A.t4(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bz(B.jd,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
jT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcu(),o=J.O(p.a),p=new A.W(o,p.b,p.$ti.i("W<1>"));p.m();){n=o.gq().a
r.l(0,n.a+"#"+n.f,q)}m=J.qu(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbV(),p=J.O(s.a),s=new A.W(p,s.b,s.$ti.i("W<1>"));s.m();){o=p.gq()
if(o.b===B.P)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.d9(s,!1,!1,p)
s=a.length
i=A.d9(s,!1,!1,p)
h=new A.t3(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bz(B.jg,a[q].a,"participates in a resource dependency cycle"))}}}}
A.t7.prototype={
$1(a){t.A.a(a)
return A.z2()},
$S:12}
A.t6.prototype={
$1(a){t.A.a(a)
return A.z2()},
$S:12}
A.t5.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.t4.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:19}
A.t3.prototype={
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
r=A.fB(r,r.r,A.v(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:21}
A.t1.prototype={}
A.mD.prototype={$ica:1,
gE(){return this.a},
gG(){return this.b},
geS(){return this.c}}
A.iR.prototype={
ly(a){var s,r,q,p=a.c
p.A()
s=this.a.bA(a.a)
p=p.ae()
r=s.d.gal()
q=A.B(r)
return A.b1(new A.H(r,q.i("C(1)").a(p.gao()),q.i("H<1,C>")))},
gi6(){return new A.bI(this.nB(),t.Br)},
nB(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gi6(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bS(),n=o.$ti,o=new A.cf(o.a(),n.i("cf<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
return a.b=new A.mD(h,g,A.b1(new A.H(f,d.i("C(1)").a(i.gao()),d.i("H<1,C>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iFO:1}
A.t8.prototype={
$3(a,b,c){return new A.cJ(A.h(a),A.h(b),A.aq(c))},
$S:173}
A.lJ.prototype={
ghc(){var s=this.d
return s===$?this.d=new A.uq(this.c,A.n(t.Aj,t.y)):s},
dr(a,b){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
s=this.a
a.A()
r=s.b.aG(a,b)
s.c.l(0,r.a,s.bb(a))
this.f.k(0,r)
return r},
om(a){if(this.x)A.f(A.i("resource library is disposed"))
this.a.aK(a)
this.f.a7(0,a)},
ip(a,b,c,d,e,f,g){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.p("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.p("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aG(new A.dm(new A.kW(f,d,1,!0,e,B.bc,g,a),A.d9(1,null,!1,t.Fx),!1),b)
this.w.k(0,r)
return r},
ds(a,b,c,d,e,f){return this.ip(a,b,c,d,e,f,B.d3)},
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
for(;l<r.length;r.length===q||(0,A.w)(r),++l){k=r[l]
j=o.a7(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aK(k)}r=i.r
q=A.K(r,A.v(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.w)(q),++l)n.aK(q[l])
q=i.f
o=A.K(q,A.v(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.w)(o),++l)m.aK(o[l])
s.O(0)
r.O(0)
q.O(0)
p.a_()
i.x=!0},
$iFQ:1}
A.vm.prototype={}
A.n1.prototype={$ica:1,
gE(){return this.a},
gG(){return this.b},
geS(){return this.c}}
A.x2.prototype={
$1(a){var s=this.a.w.a.cq(a),r=s.b!=null,q=r?s.d:s.e
return new A.iT(s.c,r,q,s.f)},
$S:184}
A.x3.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gq().i9(a)
if(b!=null&&s.p(0,b))return this.b.x.gq().i9(b)
throw A.b(A.i("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:188}
A.x1.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.wV.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga1(r)},
$S:202}
A.wW.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bu
s=q.b.k1
r=s.length===0?null:B.a.ga1(s)
return A.K0(s,3,q.a.d,r)},
$S:54}
A.x0.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.wQ.prototype={
$0(){return this.a.at.a},
$S:55}
A.wS.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.wR.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.x_.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.wO.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.wP.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.wX.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.wY.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.wZ.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.t()
return s},
$S:5}
A.wU.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.wT.prototype={
$0(){return this.a.at.w},
$S:56}
A.x5.prototype={
$0(){return this.a},
$S:57}
A.x6.prototype={
$0(){var s,r,q=this.a.b.k4,p=q==null?null:q.b
if(p==null||!this.b.w.c.nx(p))return null
s=this.b.w.c
r=s.d
r===$&&A.t()
return s.cS(p,r)},
$S:58}
A.w1.prototype={}
A.mO.prototype={$iFN:1}
A.mA.prototype={$iET:1}
A.tg.prototype={
gaO(){var s=this.w
return s==null?A.f(A.i("renderer is not initialized")):s},
i3(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bO)throw A.b(A.i("renderer can only be initialized once"))
a.A()
b.A()
s=m.a
if(s.b===B.a_)throw A.b(A.i("renderer device is context lost"))
m.e=B.n7
try{m.r=s.im()
r=m.b
q=A.iI(a)
p=r.a
if(p.a!=null)A.f(A.i("configuration state is already initialized"))
a.A()
p.a=a
p.b=A.iI(a)
p.d=1
r.b.i2(q)
r=A.Fj()
m.w=new A.lJ(A.Fl(s),r,A.G7(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.lK()
p=new A.pL(s,r)
q=A.iI(a)
o=p.dP(q,a)
r.i2(q)
p.c=new A.hj(new A.lz(0,q,B.bQ),o,B.an)
m.x=p
m.y=new A.lC(s,A.n(t.N,t.CH))
m.as=a
A.Cw(m)
m.e=B.bP}catch(n){s=m.y
if(s!=null)s.bP()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bO
throw n}return A.AH(t.H)},
lR(a,b){var s,r,q,p,o,n,m=this,l=null
m.l6()
m.c2()
r=B.a.p(m.d,a)
if(!r)throw A.b(A.p("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.i("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gT(0))A.f(A.p("CameraView.eye must be finite: "+q.t(0),l))
q=r.e
if(!q.gT(0)||q.gbd()<1e-12)A.f(A.p("CameraView.forward must be finite and nonzero: "+q.t(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.f(A.p("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.f(A.p("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gT(0)||!r.b.gT(0)||!r.c.gT(0))A.f(A.p("CameraView matrices must be finite",l))
b.b.A()
b.c.A()
r=b.w
if(!isFinite(r))A.f(A.p("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.am)A.f(A.i("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.am
o.c=0
B.a.O(o.a)
s=o
try{r=m.r
if((r==null?A.f(A.i("renderer is not initialized")):r).z)m.b$=m.a.lS()
return s}catch(n){if(o.b!==B.am)A.f(A.i("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.iN
m.fd()
m.ax=m.at=null
throw n}},
n5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c2()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.i("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.am)A.f(A.i("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hv(l,0,A.e6(m.c,"count",t.S),A.B(l).c).bX(0,!1)
m.b=B.iM
q=k
try{p=A.HP(a1,r,s,q)
o=p.a.je()
m=o.gN().dz(0,new A.th())
l=m.$ti
n=new A.cN(m,l.i("aY(1)").a(new A.ti()),l.i("cN<1,aY>")).bc(0,B.cO,new A.tj(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcn()
g=g.c.gcn()
e=a1.w
e.a.gcn()
e.c.gcn()
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
return new A.po(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kr(s.e)
a1.ax=a1.at=null}},
l6(){var s,r,q,p=this
if(p.e!==B.dY)return
if(p.a.b===B.a_)throw A.b(A.i("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.i("resource library is disposed"))
s.a.eD()
s.c.eD()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.i("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.i("GPU resource adapter is not initialized"))
s.c=new A.hj(q.a,s.dP(A.iI(r),r),B.an)
s=p.y
s.c=null
s.b.O(0)
A.Cw(p)
p.e=B.bP},
c2(){var s=this,r=s.e
if(r!==B.bP)throw A.b(A.i("renderer is not ready: "+r.b))
if(s.a.b===B.a_){s.kh()
s.e=B.dY
throw A.b(A.i("renderer context lost"))}}}
A.th.prototype={
$1(a){return B.c.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:59}
A.ti.prototype={
$1(a){return t.h6.a(a).b},
$S:60}
A.tj.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aY(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:61}
A.mL.prototype={}
A.vy.prototype={
kr(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.f(A.i(u.k))
r=s.he(o)
if(r.b)A.f(A.i("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.k(p.a$,new A.mL(o))}catch(q){p.dR(o)}},
fd(){var s=this.b$
this.b$=null
if(s!=null)this.dR(s)},
kh(){var s,r,q
this.fd()
s=this.a$
r=J.AR(s.slice(0),A.B(s).c)
B.a.O(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.w)(r),++q)this.dR(r[q].b)},
dR(a){var s,r
try{s=this.a
s.a.deleteQuery(s.he(a).a)}catch(r){}}}
A.mS.prototype={}
A.iZ.prototype={
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
A.yF.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.I(0,s.a(b).a)},
$S:62}
A.yG.prototype={
$1(a){return t.E0.a(a).b},
$S:63}
A.yD.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.I(0,s.a(b).a)},
$S:64}
A.yE.prototype={
$1(a){return t.EH.a(a).b},
$S:65}
A.p0.prototype={}
A.p_.prototype={}
A.fN.prototype={
gal(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.C(o,n,p),new A.C(r,n,p),new A.C(o,q,p),new A.C(r,q,p),new A.C(o,n,s),new A.C(r,n,s),new A.C(o,q,s),new A.C(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fc.prototype={}
A.h4.prototype={
B(){return"FrustumTest."+this.b}}
A.pp.prototype={
it(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b8
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.iO:B.iP}}
A.pq.prototype={
$4(a,b,c,d){var s=new A.C(a,b,c),r=new A.fc(s,d),q=Math.sqrt(s.gbd())
return q<1e-9?r:new A.fc(s.a8(0,1/q),d/q)},
$S:66}
A.da.prototype={
a8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.da(h)},
iv(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
ew(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
i4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.qu(4,t.cE)
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
a1[p]=new Float64Array(A.R(A.c([o,n,m,l,k,j,i,p===3?1:0],s)))}for(h=0;h<4;h=p){s=a1[h]
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
gT(a){return B.t.a2(this.a,new A.qU())},
t(a){return"Mat4("+A.y(this.a)+")"}}
A.qU.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.lF.prototype={
t(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.hx.prototype={
A(){var s=this.a
if(!s.gT(0))throw A.b(A.p("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.p("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.p("Transform.scale must be finite and positive: "+A.y(s),null))},
ae(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.B0(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.B0(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.y(this.c)+")"}}
A.C.prototype={
a4(a,b){return new A.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.C(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.C(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.C(s*r-q*p,q*o-n*r,n*p-s*o)},
gbd(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbd())},
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gbd())
return r<1e-9?B.w:new A.C(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.C&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kg.prototype={
B(){return"AtmosphericParticleAnchor."+this.b}}
A.nS.prototype={}
A.fP.prototype={}
A.nR.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.b(A.p("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.a5("origin",l.d),new A.a5("halfExtents",s),new A.a5("initialVelocity",l.f),new A.a5("acceleration",l.r)],t.c2)
r.push(new A.a5("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.b(A.p("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.b(A.p("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.b(A.p("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.b(A.p("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.b(A.p("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.b(A.p("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.b(A.p("AtmosphericParticleField.particleScale must be finite and > 0",k))},
cw(a,b){var s,r,q,p,o,n=this,m=null
n.A()
s=n.z
if(b>=s)throw A.b(A.b2(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.R(a.w+n.cU(b,0)*r,r)
switch(n.c.a){case 0:s=B.w
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a4(0,n.d).a4(0,new A.C((n.cU(b,1)*2-1)*p.a,(n.cU(b,2)*2-1)*p.b,(n.cU(b,3)*2-1)*p.c))
p=o.a4(0,n.ki(q))
s=n.lw(q)
if(!isFinite(q)||q<0)A.f(A.p("atmospheric particle age must be finite and >= 0",m))
if(!o.gT(0)||!p.gT(0)||!s.gT(0))A.f(A.p("atmospheric particle kinematics must be finite",m))
return new A.fP(q,o,p,s)},
jl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.C3.a(c)
f.A()
for(s=f.z,r=a.a,q=f.as,p=f.cy,o=f.at,n=f.a,m=f.b,l=0,k=0;k<s;++k){j=f.cw(b,k)
if(!c.$1(j))continue
i=o?f.h3(j.d):B.aQ
h=new A.hx(j.c,i,q)
g=new A.bf(n,m,h,-1,B.aK,B.S,!1,!1,k,p)
if(a.b!==B.am)A.f(A.i("FrameQueue.submit called outside an active frame"))
h.A()
h=a.c
if(h<r.length)B.a.l(r,h,g)
else B.a.k(r,g);++a.c;++l}return l},
nf(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.A()
s=A.AG(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.cw(a,n)
if(p)h.h3(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.it(new A.fN(new A.C(k-q,j-q,i-q),new A.C(k+q,j+q,i+q)))!==B.b8)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.p("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.i("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.nS(r,o,q)},
lw(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a4(0,this.f.ab(0,s).a8(0,r))},
ki(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a8(0,a).a4(0,this.f.ab(0,s).a8(0,(1-q)/r))},
h3(a){var s,r=a.gac()
if(r.aa(0,B.w))return B.aQ
s=B.b.n(B.ax.bo(r),-1,1)
if(s>0.999999)return B.aQ
if(s<-0.999999)return A.rX(B.ei,3.141592653589793)
return A.rX(B.ax.bz(r),Math.acos(s))},
cU(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.jd.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.i5.prototype={
gE(){return this.f},
aw(a,b){B.a.k(a.a,new A.aw(this.f,B.K,A.c([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be(s.e,s.b,s.c,B.x,B.ds,B.dp)),q=A.cw(s.d),p=t.n,o=s.r===B.ew?new Float32Array(A.R(A.c([1/s.Q,0],p))):new Float32Array(A.R(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mr(new A.ba(s.f,A.c([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mr.prototype={
am(a){var s,r,q,p,o=this
if(a.d.e.b<=0)return
s=a.b
r=s.a
A.bG(r,a.ap(o.r).b)
A.bc(r,o.a.aj())
A.cU(r,B.T,1,0,0,0)
A.bP(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Gt(r,0,q.a(p.$0()))
else A.az(r,0,q.a(p.$0()))
A.m(r,"uSource",B.v)
A.m(r,"uTexelStep",new A.o(B.ab,o.f))
A.bi(r,o.c)
s.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.kn.prototype={
gE(){return"bloomComposite"},
aw(a,b){B.a.k(a.a,new A.aw("bloomComposite",B.K,A.c([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="bloomComposite",q=s.a.aA(new A.be(r,s.b,s.c,B.x,B.lo,B.l2)),p=A.cw(s.d),o=s.w,n=A.c([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.c([new A.ms(new A.ba(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iap:1}
A.ms.prototype={
am(a){var s,r,q=this,p=a.d.e.b
if(p<=0)return
s=a.b
r=s.a
A.bG(r,a.bY(q.f).b)
A.BM(r,1)
A.bc(r,B.cF)
A.bP(r,q.b.b)
A.az(r,0,t._.a(q.d.$0()))
A.m(r,"uBloom",B.v)
A.m(r,"uBloomStrength",new A.o(B.e,p))
A.bi(r,q.c)
s.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.kA.prototype={
gE(){return"depthPrepass"},
aw(a,b){B.a.k(a.a,new A.aw("depthPrepass",B.j8,A.c([new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="depthPrepass",q=s.a.aA(new A.be(r,s.b,s.c,B.dr,B.dq,B.kh))
return A.c([new A.mv(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iap:1}
A.mv.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.d,a0=a.e,a1=b.a
A.bG(a1,a2.ap("sceneDepth").b)
A.bc(a1,d.a.aj())
A.cU(a1,B.b5,1,0,0,0)
A.bP(a1,d.b.b)
A.m(a1,"uVertexSnapGrid",new A.o(B.e,a0.ax))
A.m(a1,"uAlbedo",B.v)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.w)(s),++l){k=s[l]
j=k.a
i=j.gG()
A.m(a1,"uViewProjection",new A.o(B.o,new Float32Array(A.R(a))))
A.m(a1,"uModel",new A.o(B.o,new Float32Array(A.R(i.c.ae().a))))
A.yC(b,k,!1)
d.lh(b,j.gG().b,p)
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
lh(a,b,c){var s,r=this.d.$1(b),q=a.a
A.az(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.o(B.e,r.fx===B.b_?r.fy:0))
A.m(q,"uAffineWarpStrength",new A.o(B.e,0))
s=this.a.aj()
A.bc(q,r.go?s.eR(!1):s)},
$iab:1,
gG(){return this.a}}
A.jf.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.id.prototype={
gE(){return this.f},
aw(a,b){B.a.k(a.a,new A.aw(this.f,B.K,A.c([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be(s.e,s.b,s.c,B.x,B.ds,B.dp)),q=A.cw(s.d),p=t.n,o=s.r===B.ex?new Float32Array(A.R(A.c([1/s.z,0],p))):new Float32Array(A.R(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mw(new A.ba(s.f,A.c([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mw.prototype={
am(a){var s,r,q=this
if(a.d.e.d<=0)return
s=a.b
r=s.a
A.bG(r,a.ap(q.f).b)
A.bc(r,q.a.aj())
A.cU(r,B.T,1,0,0,0)
A.bP(r,q.b.b)
A.az(r,0,t._.a(q.d.$0()))
A.m(r,"uSource",B.v)
A.m(r,"uTexelStep",new A.o(B.ab,q.e))
A.bi(r,q.c)
s.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.kF.prototype={
gE(){return"dofComposite"},
aw(a,b){var s=this
B.a.k(a.a,new A.aw("dofComposite",B.K,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
au(a){var s=this,r="dofComposite",q=s.a.aA(new A.be(r,s.b,s.c,B.x,B.lm,B.k6)),p=A.cw(s.d)
return A.c([new A.mx(new A.ba(r,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iap:1}
A.mx.prototype={
am(a){var s,r=this,q=a.ap("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bG(n,q.b)
A.bc(n,r.a.aj())
A.bP(n,r.b.b)
s=t._
A.az(n,0,s.a(r.d.$0()))
A.m(n,"uSharp",B.v)
A.az(n,1,s.a(r.e.$0()))
A.m(n,"uBlurred",B.ac)
A.az(n,2,s.a(r.f.$0()))
A.m(n,"uSceneDepth",B.eh)
A.m(n,"uNear",new A.o(B.e,o.f))
A.m(n,"uFar",new A.o(B.e,o.r))
A.m(n,"uFocusDistance",new A.o(B.e,r.w))
A.m(n,"uFocusRange",new A.o(B.e,r.x))
A.m(n,"uStrength",new A.o(B.e,a.d.e.d))
A.bi(n,r.c)
p.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.kX.prototype={
gE(){return"grade"},
aw(a,b){B.a.k(a.a,new A.aw("grade",B.K,A.c([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("grade",s.b,s.c,B.x,B.lk,B.l3)),q=A.cw(s.d),p=s.r,o=s.w
return A.c([new A.mC(new A.ba("grade",A.c([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iap:1}
A.mC.prototype={
am(a){var s=this,r=a.ap(s.f.a),q=a.b,p=q.a
A.bG(p,a.ap(s.r.a).b)
A.bc(p,s.a.aj())
A.bP(p,s.b.b)
A.az(p,0,r.b)
A.m(p,"uScene",B.v)
A.az(p,1,t._.a(s.d.$0()))
A.m(p,"uLut",B.ac)
A.m(p,"uLutSize",new A.o(B.e,s.e))
A.m(p,"uStrength",new A.o(B.e,a.d.e.as))
A.bi(p,s.c)
q.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.iB.prototype={
gE(){return"msaaResolve"},
aw(a,b){B.a.k(a.a,new A.aw("msaaResolve",B.j9,A.c([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
au(a){var s=this.b,r=this.c
return A.c([new A.mJ(new A.ba("msaaResolve",A.c([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iap:1}
A.mJ.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.bY(this.c),j=a.bY(this.d),i=this.b
if(i.b!==B.j)A.f(A.i(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.f(A.p("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.f(A.p("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.f(A.p("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
$iab:1,
gG(){return this.a}}
A.fR.prototype={}
A.ko.prototype={
ap(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.i('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
bY(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ap(s)},
$iFM:1}
A.z3.prototype={}
A.iL.prototype={
gE(){return"present"},
aw(a,b){B.a.k(a.a,new A.aw("present",B.ja,A.c([new A.Q(this.f,B.i)],t.C),!1))},
au(a){var s,r=this,q=r.a.aA(new A.be("present",r.b,r.c,B.x,B.ln,B.kN)),p=A.cw(r.d)
r.w=p
s=r.f
return A.c([new A.mP(new A.ba("present",A.c([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iap:1}
A.mP.prototype={
am(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a4.bY(a.d),a2=a4.b,a3=a2.a
A.bG(a3,a0)
A.bc(a3,a.a.aj())
A.bP(a3,a.b.b)
A.bi(a3,a.c)
A.az(a3,0,a1.b)
s=a4.c
r=s!=null
if(r)A.az(a3,1,s)
q=a4.d
p=q.e
o=q.d
n=q.c
A.m(a3,"uExposure",new A.o(B.e,p.a))
A.m(a3,"uVignette",new A.o(B.e,p.e))
A.m(a3,"uGrain",new A.o(B.e,p.f))
A.m(a3,"uOutputEncoding",new A.o(B.e,a.e===B.b6?1:0))
A.m(a3,"uToneMap",B.c4)
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
A.m(a3,"uClearColor",new A.o(B.m,new Float32Array(A.R(A.c([m.a,m.b,m.c],d)))))
A.m(a3,"uSkyHorizon",new A.o(B.m,new Float32Array(A.R(A.c([k.a,k.b,k.c],d)))))
A.m(a3,"uSkyZenith",new A.o(B.m,new Float32Array(A.R(A.c([j,i,h],d)))))
A.m(a3,"uSkyGround",new A.o(B.m,new Float32Array(A.R(A.c([g,f,e],d)))))
A.m(a3,"uSkyEnabled",new A.o(B.e,q?0:1))
j=q?a0:0.08
A.m(a3,"uSkyHorizonGlow",new A.o(B.e,j==null?0:j))
j=q?a0:0.0025
A.m(a3,"uSkyStarDensity",new A.o(B.e,j==null?0:j))
A.m(a3,"uSkyTexture",B.ac)
A.m(a3,"uSkyTextureEnabled",new A.o(B.e,!q&&r?1:0))
r=q?a0:0
A.m(a3,"uSkyRotation",new A.o(B.e,r==null?0:r))
r=q?a0:1
A.m(a3,"uSkyExposure",new A.o(B.e,r==null?1:r))
A.m(a3,"uSkyTextureSrgb",new A.o(B.e,(!q||a0)===!0?1:0))
A.m(a3,"uInverseProjection",new A.o(B.o,new Float32Array(A.R(n.gi5().a))))
c=n.y
if(c===$){b=n.a.i4()
n.y!==$&&A.nx()
n.y=b
c=b}A.m(a3,"uInverseView",new A.o(B.o,new Float32Array(A.R(c.a))))
r=n.d
A.m(a3,"uCameraPosition",new A.o(B.m,new Float32Array(A.R(A.c([r.a,r.b,r.c],d)))))
r=q?a0:l.z
A.m(a3,"uCloudCoverage",new A.o(B.e,r==null?0:r))
r=q?a0:l.Q
A.m(a3,"uCloudDensity",new A.o(B.e,r==null?0:r))
r=q?a0:l.as
A.m(a3,"uCloudBaseHeight",new A.o(B.e,r==null?650:r))
r=q?a0:l.at
A.m(a3,"uCloudThickness",new A.o(B.e,r==null?350:r))
r=q?a0:l.ax
A.m(a3,"uCloudScale",new A.o(B.e,r==null?0:r))
r=q?a0:l.ay
if(r==null)r=0
j=q?a0:l.ch
A.m(a3,"uCloudWind",new A.o(B.ab,new Float32Array(A.R(A.c([r,j==null?0:j],d)))))
r=q?a0:l.CW
A.m(a3,"uCloudPhase",new A.o(B.e,r==null?0:r))
r=q?a0:l.cx
A.m(a3,"uCloudDetail",new A.o(B.e,r==null?0:r))
r=q?a0:l.cy
A.m(a3,"uCloudSilverLining",new A.o(B.e,r==null?0:r))
r=q?a0:l.db
A.m(a3,"uCloudSampleCount",new A.o(B.e,r==null?4:r))
r=o.go
q=r==null
j=q?a0:r.a.a
if(j==null)j=0
i=q?a0:r.a.b
if(i==null)i=1
h=q?a0:r.a.c
A.m(a3,"uCloudLightDirection",new A.o(B.m,new Float32Array(A.R(A.c([j,i,h==null?0:h],d)))))
j=q?a0:r.b.a
if(j==null)j=1
i=q?a0:r.b.b
if(i==null)i=1
h=q?a0:r.b.c
A.m(a3,"uCloudLightColor",new A.o(B.m,new Float32Array(A.R(A.c([j,i,h==null?1:h],d)))))
r=q?a0:r.c
A.m(a3,"uCloudLightIntensity",new A.o(B.e,r==null?0:r))
a2.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.lD.prototype={
gE(){return"ps1Quantize"},
aw(a,b){B.a.k(a.a,new A.aw("ps1Quantize",B.K,A.c([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
au(a){var s=this,r="ps1Quantize",q=s.a.aA(new A.be(r,s.b,s.c,B.x,B.lp,B.jZ)),p=A.cw(s.d),o=s.e,n=s.f
return A.c([new A.mQ(new A.ba(r,A.c([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iap:1}
A.mQ.prototype={
am(a){var s=this,r=a.ap(s.d.a),q=a.b,p=a.d.e,o=q.a
A.bG(o,a.ap(s.e.a).b)
A.bc(o,s.a.aj())
A.bP(o,s.b.b)
A.az(o,0,r.b)
A.m(o,"uScene",B.v)
A.m(o,"uQuantizationBits",new A.o(B.e,p.ay))
A.m(o,"uDitherStrength",new A.o(B.e,p.Q))
A.bi(o,s.c)
q.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.fm.prototype={}
A.lS.prototype={
gE(){return"shadow"},
aw(a,b){B.a.k(a.a,new A.aw("shadowCaster",B.j7,A.c([new A.Q(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="shadowCaster",q=s.a.aA(new A.be(r,s.b,s.c,B.dr,B.dq,B.l1))
return A.c([new A.mT(new A.ba(r,A.c([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iap:1}
A.mT.prototype={
am(a){var s,r,q,p,o=this,n=a.ap("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bG(s,n.b)
A.bc(s,o.a.aj())
A.cU(s,B.b5,1,0,0,0)
return}r=A.Bp(l)
o.x.$1(r)
s=m.a
A.bG(s,n.b)
A.bc(s,o.a.aj())
A.cU(s,B.b5,1,0,0,0)
A.bP(s,o.b.b)
A.m(s,"uAlbedo",B.v)
for(s=a.d.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.w)(s),++p)o.kj(m,s[p],l,r)},
h7(a,b){var s,r=this.d.$1(b),q=a.a
A.az(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.o(B.e,r.fx===B.b_?r.fy:0))
s=this.a.aj()
A.bc(q,r.go?s.eR(!1):s)},
kj(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gG().r)return
s=a.a
A.m(s,"uUseInstances",B.c3)
n.h4(a,b.gG().c,d)
n.h7(a,b.gG().b)
r=b.gG()
q=n.c.$1(r.a)
A.bi(s,q.a)
s=q.b
r=q.c
if(s)a.ee(r,q.d,0)
else a.aF(r,0)}else if(b instanceof A.dH){p=b.a
if(!p.gG().r)return
if(n.lr(b,c)===B.nY)return
n.h4(a,p.gG().c,d)
A.yC(a,b,!1)
n.h7(a,p.gG().b)
s=p.gG()
q=n.c.$1(s.a)
A.bi(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.ef(r,q.d,o,0)
else a.ed(r,0,o)}else throw A.b(A.p("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eV(b).t(0),null))},
lr(a,b){return B.nX},
h4(a,b,c){var s=a.a
A.m(s,"uModel",new A.o(B.o,new Float32Array(A.R(b.ae().a))))
A.m(s,"uLightViewProjection",new A.o(B.o,new Float32Array(A.R(c.a.a))))},
$iab:1,
gG(){return this.a}}
A.xO.prototype={
$1(a){return this.a.a=a},
$S:68}
A.xP.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:53}
A.lT.prototype={
gE(){return"shadowedWorld"},
aw(a,b){var s=this,r=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.k(a.a,new A.aw("shadowedWorld",B.d4,r,!1))},
au(a){var s=this,r="shadowedWorld",q=s.a.aA(new A.be(r,s.b,s.c,B.lt,B.ll,B.jY)),p=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.c([new A.mU(new A.ba(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iap:1}
A.mU.prototype={
am(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.ap("sceneColor"),a7=b4.b,a8=b4.d,a9=a8.c,b0=a8.d,b1=a8.e,b2=a4.z.$0(),b3=a7.a
A.bG(b3,a6.b)
A.bc(b3,a4.a.aj())
s=b0.a
A.cU(b3,B.cy,1,s.c,s.b,s.a)
A.bP(b3,a4.b.b)
A.m(b3,"uAlbedo",B.v)
A.m(b3,"uNormalMap",B.ox)
A.m(b3,"uOrmMap",B.oy)
A.m(b3,"uEmissiveMap",B.oz)
A.m(b3,"uLightmap",B.oA)
s=t._
A.az(b3,1,s.a(a4.y.$0()))
A.m(b3,"uShadowMap",B.ac)
r=a9.d
q=t.n
A.m(b3,"uCameraPosition",new A.o(B.m,new Float32Array(A.R(A.c([r.a,r.b,r.c],q)))))
A.m(b3,"uShadowMapTexelSize",new A.o(B.ab,new Float32Array(A.R(A.c([1/a4.ch,1/a4.CW],q)))))
A.m(b3,"uShadowFilterRadius",new A.o(B.e,b0.at))
A.m(b3,"uShadowBias",new A.o(B.e,b0.db))
A.az(b3,2,s.a(a4.at.$0()))
A.m(b3,"uSsao",B.eh)
A.m(b3,"uVertexSnapGrid",new A.o(B.e,b1.ax))
A.m(b3,"uSceneColorSize",new A.o(B.ab,new Float32Array(A.R(A.c([a4.ax,a4.ay],q)))))
A.m(b3,"uViewProjection",new A.o(B.o,new Float32Array(A.R(a9.c.a))))
A.m(b3,"uView",new A.o(B.o,new Float32Array(A.R(a9.a.a))))
A.m(b3,"uLightViewProjection",new A.o(B.o,new Float32Array(A.R(b2.a.a))))
s=b0.b
A.m(b3,"uFogColor",new A.o(B.m,new Float32Array(A.R(A.c([s.a,s.b,s.c],q)))))
A.m(b3,"uFogStart",new A.o(B.e,b0.c))
A.m(b3,"uFogEnd",new A.o(B.e,b0.d))
s=b0.e
A.m(b3,"uFogHeightFalloff",new A.o(B.e,s==null?0:s))
s=b0.f
A.m(b3,"uFogDensity",new A.o(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.c([],t.cv)
r=a4.as.$0()
r=J.O(r==null?B.bu:r)
o=p==null
while(r.m()){n=r.gq()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.Q
k=o?a5:p.c
if(k==null)k=B.ax
A.m(b3,"uLightPosition",new A.o(B.m,new Float32Array(A.R(A.c([l.a,l.b,l.c],q)))))
A.m(b3,"uLightDirection",new A.o(B.m,new Float32Array(A.R(A.c([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.L
A.m(b3,"uLightColor",new A.o(B.m,new Float32Array(A.R(A.c([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.m(b3,"uLightIntensity",new A.o(B.e,r==null?0:r))
A.m(b3,"uSpotEnabled",new A.o(B.e,!o?1:0))
i=b0.go
r=i==null
h=r?a5:i.a
if(h==null)h=B.Q
g=r?a5:i.b
if(g==null)g=B.L
A.m(b3,"uDirectionalDirection",new A.o(B.m,new Float32Array(A.R(A.c([h.a,h.b,h.c],q)))))
A.m(b3,"uDirectionalColor",new A.o(B.m,new Float32Array(A.R(A.c([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.m(b3,"uDirectionalIntensity",new A.o(B.e,r==null?0:r))
for(r=b0.id,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.w
c=n?a5:e.c
if(c==null)c=B.L
m=""+f
A.m(b3,"uPointPosition"+m,new A.o(B.m,new Float32Array(A.R(A.c([d.a,d.b,d.c],q)))))
A.m(b3,"uPointColor"+m,new A.o(B.m,new Float32Array(A.R(A.c([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.m(b3,"uPointIntensity"+m,new A.o(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.m(b3,"uPointRadius"+m,new A.o(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.w
a=r?a5:e.c
if(a==null)a=B.ax
c=r?a5:e.d
if(c==null)c=B.L
n=""+f
A.m(b3,"uDirectSpotPosition"+n,new A.o(B.m,new Float32Array(A.R(A.c([d.a,d.b,d.c],q)))))
A.m(b3,"uDirectSpotDirection"+n,new A.o(B.m,new Float32Array(A.R(A.c([a.a,a.b,a.c],q)))))
A.m(b3,"uDirectSpotColor"+n,new A.o(B.m,new Float32Array(A.R(A.c([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.m(b3,"uDirectSpotIntensity"+n,new A.o(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.m(b3,"uDirectSpotRange"+n,new A.o(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.m(b3,"uDirectSpotInnerCos"+n,new A.o(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.m(b3,"uDirectSpotOuterCos"+n,new A.o(B.e,Math.cos(m)))
r=r?0:1
A.m(b3,"uDirectSpotEnabled"+n,new A.o(B.e,r))}s=o?a5:p.f
A.m(b3,"uLightRange",new A.o(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.m(b3,"uLightInnerCos",new A.o(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.m(b3,"uLightOuterCos",new A.o(B.e,Math.cos(s)))
a0=b0.fx
A.m(b3,"uAmbientColor",new A.o(B.m,new Float32Array(A.R(A.c([a0.a,a0.b,a0.c],q)))))
A.m(b3,"uAmbientIntensity",new A.o(B.e,b0.fy))
A.m(b3,"uAmbientLightScale",new A.o(B.e,b0.ax))
A.m(b3,"uDirectLightScale",new A.o(B.e,b0.ay))
s=b0.dx
A.m(b3,"uReflectionColor",new A.o(B.m,new Float32Array(A.R(A.c([s.a,s.b,s.c],q)))))
A.m(b3,"uReflectionIntensity",new A.o(B.e,b0.dy))
A.m(b3,"uReflectionConfidence",new A.o(B.e,b0.fr))
A.m(b3,"uRainWetness",new A.o(B.e,b1.w))
A.m(b3,"uSurfaceSnowCoverage",new A.o(B.e,b1.x))
A.m(b3,"uSurfaceDissolution",new A.o(B.e,b1.y))
s=b0.k3
a1=A.hv(s,0,A.e6(4,"count",t.S),A.B(s).c).bE(0)
A.m(b3,"uThermalSourceCount",new A.o(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.d(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.w
r=""+f
A.m(b3,"uThermalSourcePosition"+r,new A.o(B.m,new Float32Array(A.R(A.c([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.m(b3,"uThermalSourceRadius"+r,new A.o(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.m(b3,"uThermalSourceDissolution"+r,new A.o(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.w)(b3),++a3)a4.fD(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.w)(a8),++a3)a4.fD(a7,a8[a3],r,b0)},
fD(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.m(s,"uUseInstances",B.c3)
n.h5(a,b.gG().c)
n.h8(a,b.gG().b,b.gG().e,b.gG().f,c,b.gG().w,d)
r=n.c.$1(b.gG().a)
A.bi(s,r.a)
s=r.b
q=r.c
if(s)a.ee(q,r.d,0)
else a.aF(q,0)}else if(b instanceof A.dH){p=b.a
n.h5(a,p.gG().c)
A.yC(a,b,!0)
n.h8(a,p.gG().b,p.gG().e,p.gG().f,c,p.gG().w,d)
r=n.c.$1(p.gG().a)
A.bi(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.ef(q,r.d,o,0)
else a.ed(q,0,o)}else throw A.b(A.p("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eV(b).t(0),null))},
h8(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.az(o,0,p.a(s.e.$1(q.b)))
A.az(o,3,p.a(s.f.$1(q.x)))
A.az(o,4,p.a(s.r.$1(r)))
A.az(o,5,p.a(s.w.$1(r)))
A.az(o,6,p.a(s.x.$1(r)))
A.m(o,"uAlphaCutoff",new A.o(B.e,q.fx===B.b_?q.fy:0))
A.m(o,"uOpaqueCoverage",new A.o(B.e,c===B.aK?0:1))
A.m(o,"uAffineWarpStrength",new A.o(B.e,0))
p=t.n
A.m(o,"uMaterialTint",new A.o(B.m,new Float32Array(A.R(A.c([q.d,q.e,q.f],p)))))
A.m(o,"uEmissiveStrength",new A.o(B.e,q.w))
A.m(o,"uUvScaleOffset",new A.o(B.ow,new Float32Array(A.R(A.c([q.db,q.dx,0,0],p)))))
A.m(o,"uNormalStrength",new A.o(B.e,q.z*g.ch))
A.m(o,"uRoughness",new A.o(B.e,q.at*g.CW))
A.m(o,"uMetallic",new A.o(B.e,q.ax*g.cx))
A.m(o,"uSpecularScale",new A.o(B.e,g.cy))
A.m(o,"uClearcoatStrength",new A.o(B.e,q.ch))
A.m(o,"uClearcoatRoughness",new A.o(B.e,q.CW))
A.m(o,"uOcclusionStrength",new A.o(B.e,1))
A.m(o,"uLightmapIntensity",new A.o(B.e,0))
A.m(o,"uReceivesShadow",new A.o(B.e,q.id&&f?1:0))
A:{p=r
if(B.aK===c){switch(d.a){case 0:p=B.fF
break
case 1:p=B.fE
break}break A}if(B.U===c||B.fD===c){p=s.a.aj()
break A}}A.bc(o,q.go?p.eR(!1):p)},
h5(a,b){var s=b.ae(),r=a.a
A.m(r,"uModel",new A.o(B.o,new Float32Array(A.R(s.a))))
A.m(r,"uNormalMatrix",new A.o(B.o,new Float32Array(A.R(s.ew().a))))},
$iab:1,
gG(){return this.a}}
A.lV.prototype={
gE(){return"ssaoOcclusion"},
aw(a,b){B.a.k(a.a,new A.aw("ssaoOcclusion",B.bd,A.c([new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoOcclusion",q=s.a.aA(new A.be(r,s.b,s.c,B.x,B.dv,B.jS)),p=A.cw(s.d)
return A.c([new A.mX(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iap:1}
A.mX.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.d.e.c,m=o.a
A.bG(m,a.ap("ssaoRaw").b)
A.bc(m,p.a.aj())
if(n<=0){A.cU(m,B.T,1,1,1,1)
return}A.cU(m,B.T,1,0,0,0)
s=p.e.$0()
A.bP(m,p.b.b)
A.az(m,0,t._.a(p.d.$0()))
A.m(m,"uSceneDepth",B.v)
A.m(m,"uNear",new A.o(B.e,s.f))
A.m(m,"uFar",new A.o(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.m(m,"uProjScaleX",new A.o(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.m(m,"uProjScaleY",new A.o(B.e,r[5]))
A.m(m,"uRadius",new A.o(B.e,p.f))
A.m(m,"uStrength",new A.o(B.e,n))
A.bi(m,p.c)
o.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.lU.prototype={
gE(){return"ssaoBlur"},
aw(a,b){B.a.k(a.a,new A.aw("ssaoBlur",B.bd,A.c([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoBlur",q=s.a.aA(new A.be(r,s.b,s.c,B.x,B.le,B.l5)),p=A.cw(s.d)
return A.c([new A.mW(new A.ba(r,A.c([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iap:1}
A.mW.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bG(o,a.ap("ssaoBlurred").b)
A.bc(o,q.a.aj())
if(a.d.e.c<=0){A.cU(o,B.T,1,1,1,1)
return}A.cU(o,B.T,1,0,0,0)
s=q.f.$0()
A.bP(o,q.b.b)
r=t._
A.az(o,0,r.a(q.d.$0()))
A.m(o,"uSsaoRaw",B.v)
A.az(o,1,r.a(q.e.$0()))
A.m(o,"uSceneDepth",B.ac)
A.m(o,"uTexelSize",new A.o(B.ab,new Float32Array(A.R(A.c([1/q.r,1/q.w],t.n)))))
A.m(o,"uNear",new A.o(B.e,s.f))
A.m(o,"uFar",new A.o(B.e,s.r))
A.bi(o,q.c)
p.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.m7.prototype={
gE(){return"vhs"},
aw(a,b){var s=this.w
a.b.k(0,s.a)
B.a.k(a.a,new A.aw("vhs",B.K,A.c([new A.Q(this.r,B.i),new A.Q(s,B.P),new A.Q(s,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("vhs",s.b,s.c,B.x,B.lh,B.k0)),q=A.cw(s.d),p=s.r,o=s.w
return A.c([new A.n4(new A.ba("vhs",A.c([new A.Q(p,B.i),new A.Q(o,B.P),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iap:1}
A.n4.prototype={
am(a){var s,r=this,q=a.ap(r.f.a),p=a.ap(r.r.a),o=a.b,n=a.d.e,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bG(m,p.b)
A.bc(m,r.a.aj())
A.bP(m,r.b.b)
A.az(m,0,q.b)
A.m(m,"uScene",B.v)
A.az(m,1,t._.a(r.d.$0()))
A.m(m,"uHistory",B.ac)
A.m(m,"uTime",new A.o(B.e,r.e.$0()))
A.m(m,"uChromaWeight",new A.o(B.e,n.ch))
A.m(m,"uTrackingWeight",new A.o(B.e,l))
A.m(m,"uNoiseWeight",new A.o(B.e,n.cx))
A.m(m,"uHeadSwitchWeight",new A.o(B.e,n.cy))
A.m(m,"uDropoutWeight",new A.o(B.e,n.db))
A.m(m,"uGhostWeight",new A.o(B.e,s))
A.bi(m,r.c)
o.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.mg.prototype={
gE(){return"volumetricLight"},
aw(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.k(p,new A.aw("volumetricLight",B.bd,A.c([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.k(p,new A.aw("volumetricComposite",B.K,A.c([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
au(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aA(new A.be(l,i,m.c,B.x,B.dv,B.k4)),g=m.e,f=A.cw(g),e=m.Q
B.a.k(e,f)
s=m.w
r=t.C
q=A.c([new A.n6(new A.ba(l,A.c([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aA(new A.be(k,i,m.d,B.x,B.lv,B.l6))
n=A.cw(g)
B.a.k(e,n)
B.a.k(q,new A.n5(new A.ba(k,A.c([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
a_(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.w)(s),++p)q.deleteVertexArray(A.a(s[p].a))
B.a.O(s)},
$iap:1}
A.n6.prototype={
am(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=b1.ap(a3.d),a6=b1.b,a7=a3.f.$0(),a8=b1.d.d,a9=a8.go,b0=a6.a
A.bG(b0,a5.b)
A.bc(b0,a3.a.aj())
A.cU(b0,B.T,1,0,0,0)
A.bP(b0,a3.b.b)
A.az(b0,0,t._.a(a3.e.$0()))
A.m(b0,"uSceneDepth",B.v)
A.m(b0,"uNear",new A.o(B.e,a7.f))
A.m(b0,"uFar",new A.o(B.e,a7.r))
A.m(b0,"uViewProjection",new A.o(B.o,new Float32Array(A.R(a7.c.a))))
s=a7.a.a
A.m(b0,"uView",new A.o(B.o,new Float32Array(A.R(s))))
A.m(b0,"uInverseProjection",new A.o(B.o,new Float32Array(A.R(a7.gi5().a))))
r=a9==null
A.m(b0,"uShaftIntensity",new A.o(B.e,r?0:a9.c*0.15))
q=a8.f
A.m(b0,"uFogDensity",new A.o(B.e,q==null?0:q))
A.m(b0,"uAnisotropy",new A.o(B.e,a8.y))
q=a8.r
p=t.n
A.m(b0,"uVolumetricAlbedo",new A.o(B.m,new Float32Array(A.R(A.c([q.a,q.b,q.c],p)))))
A.m(b0,"uVolumetricHeightFalloff",new A.o(B.e,a8.w))
A.m(b0,"uVolumetricDustDensity",new A.o(B.e,a8.x))
A.m(b0,"uVolumetricJitter",new A.o(B.e,a8.z))
A.m(b0,"uVolumetricIntensity",new A.o(B.e,a8.Q))
A.m(b0,"uVolumetricSampleCount",new A.o(B.e,a8.as))
if(r)o=B.Q
else{q=a9.a.gac()
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
o=new A.C(n*l+k*j+q*i,n*h+k*g+q*f,n*e+k*d+q*s[10]).gac()}c=r?a4:a9.b
if(c==null)c=B.L
A.m(b0,"uLightDir",new A.o(B.m,new Float32Array(A.R(A.c([o.a,o.b,o.c],p)))))
A.m(b0,"uLightColor",new A.o(B.m,new Float32Array(A.R(A.c([c.a,c.b,c.c],p)))))
b=A.K1(4,a7.d,a8.k2)
A.m(b0,"uVolumetricSourceCount",new A.o(B.e,b.length))
for(a=0;a<4;++a){s=b.length
if(a<s){if(!(a<s))return A.d(b,a)
a0=b[a]}else a0=a4
s=a0==null
a1=s?a4:a0.b
if(a1==null)a1=B.w
a2=s?a4:a0.c
if(a2==null)a2=B.w
r=""+a
A.m(b0,"uSourcePosition"+r,new A.o(B.m,new Float32Array(A.R(A.c([a1.a,a1.b,a1.c],p)))))
A.m(b0,"uSourceColor"+r,new A.o(B.m,new Float32Array(A.R(A.c([a2.a,a2.b,a2.c],p)))))
q=s?a4:a0.d
if(q==null)q=0
A.m(b0,"uSourceIntensity"+r,new A.o(B.e,q))
q=s?a4:a0.e
if(q==null)q=1
A.m(b0,"uSourceReferenceDistance"+r,new A.o(B.e,q))
s=s?a4:a0.f
if(s==null)s=1
A.m(b0,"uSourceCutoffDistance"+r,new A.o(B.e,s))}A.bi(b0,a3.c)
a6.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.n5.prototype={
am(a){var s=this,r=a.bY(s.e),q=a.bY(s.d),p=a.b,o=p.a
A.bG(o,r.b)
A.BM(o,1)
A.bc(o,B.cF)
A.bP(o,s.b.b)
A.az(o,0,q.b)
A.m(o,"uVolumetric",B.v)
A.m(o,"uVolumetricStrength",B.c4)
A.bi(o,s.c)
p.aF(3,0)},
$iab:1,
gG(){return this.a}}
A.iT.prototype={}
A.mk.prototype={
gE(){return"world"},
aw(a,b){B.a.k(a.a,new A.aw("worldOpaqueTransparent",B.d4,A.c([new A.Q(this.e,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("safeWorld",s.b,s.c,B.lw,B.x,B.kp)),q=s.e
return A.c([new A.n9(new A.ba("worldOpaqueTransparent",A.c([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iap:1}
A.n9.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.d,k=l.d,j=m.a
A.bG(j,a.ap(n.d).b)
A.bc(j,n.a.aj())
s=k.a
A.cU(j,B.cy,1,s.c,s.b,s.a)
A.bP(j,n.b.b)
A.m(j,"uViewProjection",new A.o(B.o,new Float32Array(A.R(l.c.c.a))))
r=k.go
q=r==null?null:r.a
if(q==null)q=B.Q
s=t.n
A.m(j,"uLightDir",new A.o(B.m,new Float32Array(A.R(A.c([q.a,q.b,q.c],s)))))
p=k.fx
A.m(j,"uAmbientColor",new A.o(B.m,new Float32Array(A.R(A.c([p.a,p.b,p.c],s)))))
A.m(j,"uAmbientIntensity",new A.o(B.e,k.fy))
A.m(j,"uAmbientLightScale",new A.o(B.e,k.ax))
A.m(j,"uDirectLightScale",new A.o(B.e,k.ay))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.w)(j),++o)n.hk(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.w)(l),++o)n.hk(m,l[o])},
hk(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dH){s=b.a
n.hl(a,s.gG().c)
A.yC(a,b,!0)
r=n.c.$1(s.gG().a)
A.bi(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.ef(p,r.d,o,0)
else a.ed(p,0,o)}else if(t.yz.b(b)){q=a.a
A.m(q,"uUseInstances",B.c3)
n.hl(a,b.gG().c)
r=n.c.$1(b.gG().a)
A.bi(q,r.a)
q=r.b
p=r.c
if(q)a.ee(p,r.d,0)
else a.aF(p,0)}else throw A.b(A.p("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eV(b).t(0),null))},
hl(a,b){var s=b.ae(),r=a.a
A.m(r,"uModel",new A.o(B.o,new Float32Array(A.R(s.a))))
A.m(r,"uNormalMatrix",new A.o(B.o,new Float32Array(A.R(s.ew().a))))},
$iab:1,
gG(){return this.a}}
A.oG.prototype={
cz(a){var s,r,q
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
else q=r===0?B.bJ:B.O
return new A.dN(q,s)},
iL(a){var s,r=this.cz(a).a
A:{if(B.G===r){s=B.mH
break A}if(B.O===r){s=B.dR
break A}s=B.as
break A}return s}}
A.kV.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.ik.prototype={
B(){return"GpuBufferKind."+this.b}}
A.io.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.ip.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.kU.prototype={}
A.kW.prototype={}
A.f4.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.im.prototype={}
A.il.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.fl.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.iX.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.di.prototype={
B(){return"UniformType."+this.b}}
A.o.prototype={}
A.fU.prototype={
B(){return"ClearMask."+this.b}}
A.kB.prototype={
aF(a,b){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArrays(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bJ(a,1)},
ed(a,b,c){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArraysInstanced(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bJ(a,c)},
ee(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bJ(a,1)},
ef(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aU(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bJ(a,c)},
$iED:1}
A.h7.prototype={
B(){return"GpuResourceCandidateState."+this.b}}
A.hj.prototype={
i9(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.i("resource is not in candidate: "+a))
return s}}
A.pL.prototype={
gq(){var s=this.c
if(s==null)throw A.b(A.i("GPU resource adapter is not initialized"))
return s},
dm(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.i("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.i("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.i("GPU resource candidate is already open"))
s=A.iI(a)
p=n.b
r=p.dm(s)
try{q=new A.hj(r,n.dP(s,a),B.an)
n.d=q
return q}catch(o){p.eH(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.i("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dS(s.b)
r.b.a_()
r.c=null
r.e=!0},
dP(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.pM()),j)
for(h=s,g=J.O(h.a),h=new A.W(g,h.b,h.$ti.i("W<1>")),f=a.a;h.m();){r=g.gq()
q=A.BS(f,a.fB(r,a5))
J.e8(a3,q)
J.b7(a2,r,q)}e=A.K(new A.I(k,i.a(new A.pN()),j),j.i("r.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.w)(k),++d){o=k[d]
n=A.Dm(J.E9(o,11))
if(i){h=J.b0(a2,"sceneColor")
h.toString
J.b7(a2,o,h)}else{h=n
if(typeof h!=="number")return h.p6()
if(h>=2){h=J.b0(a2,"sceneColor#1")
h.toString
J.b7(a2,o,h)}else{m=A.BS(f,a.fB(o,a5))
J.e8(a3,m)
J.b7(a2,o,m)}}}a0=A.aW(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.B(a0).i("bM<1>"),a0=new A.bM(a0,k),a0=new A.al(a0,a0.gu(0),k.i("al<a0.E>")),j=a.a,i=t.V,k=k.i("a0.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.zd(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fB(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.im(s,s,1,B.bb,!0)}if(a==="sceneDepth")return new A.im(n,m,1,B.bb,!0)
r=B.c.V(a,"ssao")||B.c.V(a,"bloomBlur")||B.c.V(a,"dofBlur")||B.c.V(a,"volumetricLight")
q=r?B.d.af(n+1,2):n
p=r?B.d.af(m+1,2):m
s=a==="sceneColor"
o=s||B.c.V(a,"sceneColor#")
s=s?b.d:1
return new A.im(q,p,s,o?B.d2:B.j3,o)},
dS(a){var s,r,q,p,o,n=A.f8(t.mf.a(a).gak(),t._)
for(n=A.fB(n,n.r,A.v(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.zd(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fk(a){if(this.d!==a||a.c!==B.an)throw A.b(A.i("GPU resource candidate is not open"))}}
A.pM.prototype={
$1(a){return!B.c.V(A.u(a),"sceneColor#")},
$S:3}
A.pN.prototype={
$1(a){return B.c.V(A.u(a),"sceneColor#")},
$S:3}
A.hE.prototype={
B(){return"_SlotState."+this.b}}
A.eJ.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.dd.prototype={
aG(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.eJ(B.aY,n.i("eJ<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.pI
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bO(a){return this.aG(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.es(B.d7,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.es(B.d8,a))
s=q.b
if(s===B.aZ||s===B.aY)throw A.b(A.es(B.aM,a))},
bA(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eN(a,b){var s,r=this.$ti
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
if(s<0||s>=p.b.length)throw A.b(A.es(B.d7,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.es(B.d8,a))
r=q.b
if(r===B.aZ||r===B.aY)throw A.b(A.es(B.jl,a))
q.b=B.aZ
q.sb3(null)
B.a.k(p.c,s);++p.e},
bS(){return new A.bI(this.nD(),this.$ti.i("bI<+(1,2)>"))},
nD(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bS(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aZ||j===B.aY){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a5(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kl.prototype={
B(){return"BlendEquation."+this.b}}
A.eZ.prototype={
B(){return"BlendFactor."+this.b}}
A.kw.prototype={
B(){return"CullFace."+this.b}}
A.kz.prototype={
B(){return"DepthFunc."+this.b}}
A.h2.prototype={
eR(a){var s=this
return A.AD(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bs.prototype={
B(){return"StateField."+this.b}}
A.vc.prototype={
mQ(a){var s,r=this.a
if(r==null)return A.he(B.kQ,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.k(0,B.bW)
if(r.b!==a.b)s.k(0,B.bX)
if(r.c!==a.c)s.k(0,B.bY)
if(r.d!==a.d)s.k(0,B.bZ)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.c_)
if(r.r!==a.r)s.k(0,B.c0)
if(r.w!==a.w)s.k(0,B.c1)
if(r.x!==a.x)s.k(0,B.c2)
return s}}
A.e1.prototype={$icH:1}
A.jJ.prototype={}
A.jI.prototype={}
A.n8.prototype={}
A.mi.prototype={
jG(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Z(new A.v9(s))
s.d=A.Z(new A.va(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
im(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c4(A.h(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c4(A.h(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c4(A.h(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c4(A.h(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c4(A.h(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fT(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.i_(e.getParameter(A.h(k.WebGL2RenderingContext.RENDERER)))
m=A.i_(e.getParameter(A.h(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.rZ("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c4(a){var s=A.i_(this.a.getParameter(a))
return typeof s=="number"?B.b.aC(s):0},
fT(a){var s=A.i_(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iF_:1}
A.v9.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.a_},
$S:1}
A.va.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.wc.prototype={
lS(){var s,r=this
if(r.b!==B.j)A.f(A.i(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.e1(new A.n8(s))},
he(a){var s=a.a
if(!(s instanceof A.n8))throw A.b(A.a7(a,"query","is not a GPU timer query"))
return s}}
A.n7.prototype={}
A.v8.prototype={}
A.vb.prototype={
mH(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.v8(A.Go(s))}}
A.kD.prototype={
C(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kh.prototype={
gnI(){var s=this.cx
return new A.ao(s,A.v(s).i("ao<2>")).bc(0,0,new A.o8(),t.i)},
jq(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.fh()},
fh(){var s,r=this,q=r.ok
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
cr(){var s=this.a
if(A.u(s.state)==="suspended")A.a(s.resume())},
cP(a){var s,r,q=this
if(B.c.V(a,"vo-")){s=q.y
s===$&&A.t()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.V(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.t()
return s}r=B.lj.h(0,a)
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
ku(){var s,r,q,p,o,n,m,l=this.a,k=A.a1(l.sampleRate),j=B.b.aB(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.az()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dl(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ay.az()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.cP(a)))
r.onended=A.Z(new A.ob(r,q))
r.start()
return!0},
ii(a){return this.dl(a,1)},
od(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
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
A.G(p.connect(this.cP(a)))
r.onended=A.Z(new A.oa(r,q,p))
r.start(A.a1(s.currentTime)+B.b.n(b,0,120))},
lN(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.n(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.w)(a5),++q){p=a5[q]
s.l(0,p.a[3],p)}r=a4.ax
o=A.v(r).i("ac<1>")
o=A.K(new A.ac(r,o),o.i("r.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.w)(o),++q){m=o[q]
if(!s.K(m))a4.e4(m)}for(s=new A.ae(s,s.r,s.e,s.$ti.i("ae<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.K(k[3]))a4.e4(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.e4(k[3])
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
A.G(a1.connect(a4.cP(f)))
A.G(b.connect(a2))
l===$&&A.t()
A.G(a2.connect(l))
c.start()
g=new A.jH(c,b,a,a0,a1,a2,f)
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
e4(a){var s,r,q=this.ax.a7(0,a)
if(q==null)return
s=A.a1(this.a.currentTime)
r=q.b
A.a(A.a(r.gain).cancelScheduledValues(s))
A.a(A.a(r.gain).setValueAtTime(A.a1(A.a(r.gain).value),s))
A.a(A.a(r.gain).linearRampToValueAtTime(0,s+0.18))
A.Bu(B.fH,q.gmT())},
ij(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ay.az()*0.12)
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
l=j.ft(j.b.ig(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.l(0,o,new A.hF(r,q,n,o,p,e,B.b.n(m,0,1)))
r.onended=A.Z(new A.o9(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.cP(a)))
r.start()},
oc(a,b,c,d){return this.ij(a,b,c,1,d,null,null,null)},
ft(a){var s,r,q,p,o,n,m,l
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
f8(a){var s,r,q,p,o=this
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
q.onended=A.Z(new A.oc(o,q,p))
q.start()
o.db=q},
dC(a){if(this.p3===a)return
this.p3=a
this.fh()},
iW(a){var s,r,q=this
q.dC(a.b===B.cj)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b0?1:0.55
r=q.c
r===$&&A.t()
r=A.a(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.t()
A.a(s.gain).value=0.35*q.R8},
bt(a,b,c,d,e,f){var s,r,q=this
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
f0(a){var s=null
return this.bt(s,s,s,s,a,s)},
iT(a){var s=null
return this.bt(s,s,a,s,s,s)},
iV(a){var s=null
return this.bt(s,s,s,s,s,a)},
iS(a){var s=null
return this.bt(s,a,s,s,s,s)},
iR(a){var s=null
return this.bt(a,s,s,s,s,s)},
iU(a){var s=null
return this.bt(s,s,s,a,s,s)},
iQ(a){if(this.ch===a)return
this.ch=a
this.bK()},
bK(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cs(p,g)
m=n==null?i.ft(h.ig(p,g)):new A.aH(n.c,n.d,n.e)
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
A.o8.prototype={
$2(a,b){return Math.max(A.aB(a),t.jS.a(b).r)},
$S:71}
A.o7.prototype={
$1(a){return this.iD(t.q.a(a))},
iD(a){var s=0,r=A.aL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
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
A.ob.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.oa.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.o9.prototype={
$1(a){var s=this.a.cx.a7(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.oc.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hF.prototype={}
A.jH.prototype={
a_(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.ki.prototype={
B(){return"AudioCategory."+this.b}}
A.nY.prototype={
js(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.iG)
if(!B.a.a2(A.c([d.a,d.b,d.c],t.n),new A.nZ()))throw A.b(B.hu)},
gE(){return this.a}}
A.nZ.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.nD.prototype={
jp(a,b){if(this.a.length===0)throw A.b(B.hd)
if(!B.a.a2(A.c([a.a,a.b,a.c],t.n),new A.nE()))throw A.b(B.hC)}}
A.nE.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.i3.prototype={
A(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.nF()))throw A.b(B.i_)
s=B.a.M(A.c([0,0.55,1],s),new A.nG())
if(s)throw A.b(B.ir)},
cs(a,b){this.A()
if(a.ax&&!a.ay&&!a.z)return new A.aH(-1.5,2e4,0)
if(a.ay)return new A.aH(-28,320,1)
return new A.aH(-12,1100,0.55)},
oL(a){return this.cs(a,null)}}
A.nF.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.nG.prototype={
$1(a){A.aB(a)
return a<0||a>1},
$S:4}
A.nU.prototype={
jr(a){var s=A.v(a)
if(new A.ac(a,s.i("ac<1>")).M(0,new A.nW())||new A.ao(a,s.i("ao<2>")).M(0,new A.nX()))throw A.b(B.iB)}}
A.nW.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.nX.prototype={
$1(a){var s
t.a.a(a)
s=J.aQ(a)
return s.gP(a)||s.M(a,new A.nV())},
$S:73}
A.nV.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.yQ.prototype={}
A.o5.prototype={}
A.o_.prototype={
jt(a,b,c){var s
for(s=this.b.gak(),s=s.gv(s);s.m();)s.gq().A()},
iw(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.i("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.i("audio listener room missing: "+a0))
r=this.lf(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.w)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cr
e=f.cs(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.p(q,g))B.a.k(q,g)
B.a.k(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.k(p,"unreachable")
l=-48
k=240
j=1}s=A.c([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.w)(o),++i)s.push(o[i].a)
o=B.b.n(l,-60,0)
m=B.d.n(k,120,2e4)
g=B.b.n(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ad(s,b)
b=A.ad(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.iq)
return new A.o5(s,b,o,m,g,n,c)},
cs(a,b){return this.iw(a,b,B.bC)},
lf(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.ps
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a0],s,t.Es)
p=A.aF([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.e,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.Y(k,new A.o0(r))
j=B.a.ga1(k)
p.a7(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.jb(s,!0)}i=o.aS(j)
h=A.K(i,i.$ti.i("r.E"))
B.a.Y(h,new A.o1())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.w)(h),++g){f=h[g]
e=f.cp(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cr:d).oL(f)
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
p.k(0,e)}}}return B.pr}}
A.o0.prototype={
$2(a,b){var s,r,q
A.u(a)
A.u(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.I(r,s)
return q===0?B.c.I(a,b):q},
$S:74}
A.o1.prototype={
$2(a,b){var s=t.e
return B.c.I(s.a(a).a,s.a(b).a)},
$S:75}
A.jb.prototype={}
A.fS.prototype={}
A.oD.prototype={
i7(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.E2().bz(q).gac()
p.d=q
p.c=p.b.bz(q).gac()
p.a=a}}
A.pm.prototype={}
A.l1.prototype={
dt(a){if(this.at)return
A.qv(a,"requestPointerLock",t.X)},
eY(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bV(r,r.r,r.e,A.v(r).i("bV<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gq()
if(l.length!==0)n.k(0,l)}s.oo(p,n)}this.b0()},
dG(a){var s,r,q,p,o,n,m=this
if(m.ch.dG(a))for(s=m.CW.aR("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.k(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.k(0,n)
break}}},
oe(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.b9(c,A.B(c).i("b9<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gq()
if(r==null||!A.T(r.connected)||A.u(r.mapping)!=="standard")break A
c=A.u(r.id)
q=A.u(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.b9(n,A.B(n).i("b9<1,z>")))
while(n.m())o.push(n.gq())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.b9(d,A.B(d).i("b9<1,aj>")))
while(d.m()){r=d.gq()
p.push(A.T(r.pressed)?1:A.a1(r.value))}s=new A.lW(!0,c,q,o,p)
break}}d=s==null
m=A.GB(d?B.oh:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aR(e),q.gaE(q))
q=f.r
q.kq(A.v(q).i("l(1)").a(new A.qn(l)),!0)
for(p=l.gv(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.n:g,h)){if(i.eu())n.k(0,h)}else n.k(0,h)}}f.e=A.he(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aR(e),l.gaE(l))){d=r.a(f.c)
d=!B.a.M(c.aR(e),d.gaE(d))}}if(d)i.ev()},
kI(a){var s=this
A.a(a)
if(A.T(a.repeat))return
if(!s.ay)return
if(s.c.k(0,A.u(a.code)))if(B.a.p(s.CW.aR("interact"),A.u(a.code))){if(s.ch.eu())s.d.k(0,A.u(a.code))}else s.d.k(0,A.u(a.code))},
kK(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a7(0,A.u(a.code))
r=this.CW
if(B.a.p(r.aR(q),A.u(a.code))){t.Q.a(s)
s=!B.a.M(r.aR(q),s.gaE(s))}else s=!1
if(s)this.ch.ev()},
kO(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.h(a.button)
if(r.c.k(0,s))if(B.a.p(r.CW.aR("interact"),s)){if(r.ch.eu())r.d.k(0,s)}else r.d.k(0,s)},
kS(a){var s,r="interact",q="Mouse"+A.h(A.a(a).button),p=this.c
p.a7(0,q)
s=this.CW
if(B.a.p(s.aR(r),q)){t.Q.a(p)
p=!B.a.M(s.aR(r),p.gaE(p))}else p=!1
if(p)this.ch.ev()},
kU(a){var s
A.a(a)
if(!this.ay)return
s=A.a1(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.k(0,s)
this.d.k(0,s)},
kQ(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fR(a,"movementX")
s.as=s.as+s.fR(a,"movementY")},
kM(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b0()},
kW(a){this.b0()},
fR(a,b){var s=A.Cp(a[b])
if(s==null)s=null
return s==null?0:s},
cJ(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.f8(n.c,t.N)
for(r=n.e,r=A.fB(r,r.r,A.v(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.k(0,o)}t.Q.a(s)
return B.a.M(n.CW.aR(a),s.gaE(s))},
b0(){var s=this
s.c.O(0)
s.d.O(0)
s.f.O(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eE()}}
A.qn.prototype={
$1(a){return!this.a.p(0,A.u(a))},
$S:3}
A.qm.prototype={
aR(a){var s=this.a.h(0,a)
return s==null?B.n:s},
oo(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.K(a))return
r=t.N
q=A.a_(r)
for(p=A.fB(b,b.r,A.v(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.k(0,n)}s.l(0,a,A.ad(q,r))},
bm(a,b){var s,r,q
t.Q.a(b)
for(s=this.aR(a),r=s.length,q=0;q<r;++q)if(b.a7(0,s[q]))return!0
return!1}}
A.qq.prototype={
eu(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
ev(){this.c=this.b=!1
this.d=0},
dG(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.n(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eE(){this.c=this.b=!1
this.d=0}}
A.b8.prototype={
gE(){return this.a}}
A.qL.prototype={}
A.qI.prototype={
oh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.K(b,t.je)
B.a.L(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.w)(r),++p){o=r[p].a
if(!s.k(0,o))throw A.b(A.p("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.n(h,t.N)
i.fH(n,i.d,a,b,i.a,j,m)
i.fH(l,i.e,a,c,i.b,j,k)
return new A.qL(n,l,j)},
fH(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.B(d)
s=k.i("H<1,+effectiveScore,light,score(z,b8,z)>")
r=A.K(new A.H(d,k.i("+effectiveScore,light,score(z,b8,z)(1)").a(new A.qJ(this,c,b)),s),s.i("a0.E"))
B.a.Y(r,new A.qK())
q=A.a_(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.k(a,m)
q.k(0,l)
s.l(0,l,o.c)}else{B.a.k(g,m)
f.l(0,l,p>=e?k:"Importance score below threshold")}}b.O(0)
b.L(0,q)}}
A.qJ.prototype={
$1(a){var s,r
t.je.a(a)
s=a.c.ab(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.ju(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:77}
A.qK.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:78}
A.p1.prototype={
e6(a,b){var s,r,q,p,o,n,m,l=this
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
A.qR.prototype={
jd(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.e6(b,c)},
lG(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.R(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.ct.prototype={
eA(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.t.dD(s,0,l,k)
m.a=s}r=b.ab(0,a).bz(d.ab(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.j0(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.j0(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.j0(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.j0(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.j0(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.j0(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aN(a,b,c,d,e){return this.eA(a,b,c,d,e,1,!1,1,1)},
ez(a,b,c,d,e,f,g){return this.eA(a,b,c,d,e,1,!1,f,g)},
il(a,b,c,d,e,f,g){return this.eA(a,b,c,d,e,f,g,1,1)}}
A.k.prototype={
a4(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gu(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.v0.prototype={
A(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.M(A.c([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.v1()))throw A.b(B.h5)
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
A.v1.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.cv.prototype={
A(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.b(B.i6)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a2(A.c([s,r,q,p,o],t.n),new A.v2()))throw A.b(B.hA)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.b(B.iz)},
gE(){return this.a}}
A.v2.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.eD.prototype={
A(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a2(A.c([o,s,r,q],t.n),new A.uY())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.b(B.hm)},
gE(){return this.a}}
A.uY.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.uZ.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=A.a_(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.A()
if(!k.k(0,p.a))throw A.b(B.ic)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.A()
if(!k.k(0,o.a))throw A.b(B.id)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a2(A.c([s,r,n,m],t.n),new A.v_())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.b(B.hs)}}
A.v_.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.uX.prototype={
cq(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
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
if(l>0.001&&a5.a!==B.y){i=a5.a
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
i=i===B.ar?80:120
B.a.k(j,new A.cv("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.k(j,new A.cv("exterior-wind","weather-wind",B.b.n(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.n(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.k(j,new A.cv("through-wall-thunder","weather-thunder-bed",B.b.n(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.a6||i===B.aq
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
a1=a4.cQ(o,a0,17)*2-1
h=a4.cQ(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.k(a,new A.eD("hail-impact-"+a0,"weather-hail-tick",0,B.b.n(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.R(a0,3)===0)B.a.k(a,new A.eD("window-rattle-"+a0,"weather-window-tick",0,B.b.n(0.035+c*0.12,0,1),0.94+a4.cQ(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.R(a0,15)===0)B.a.k(a,new A.eD("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.cQ(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.R((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.k(a,new A.eD("lightning-thunder-"+o,g,a2/343,B.b.n((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.n(0.94+B.d.R(o,11)*0.012,0.88,1.08),B.b.n((h-100)/100,-1,1)))}a3=new A.uZ(A.ad(j,t.uz),A.ad(a,t.EI),p,n,m,b)
a3.A()
return a3},
cQ(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.lW.prototype={
gE(){return this.b}}
A.ml.prototype={}
A.ow.prototype={
oY(a){var s,r,q,p,o,n=B.f.a0(a.C(),null)
this.a.hC(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oi(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
p=this.fA(r,a)
if(p!=null)return new A.fj(p,null)
o=this.fA(q,a)
if(o!=null)return new A.fj(o,"recovered previous save")
if(r==null)return B.nr
return B.nq}catch(n){return B.np}},
fA(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hC(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ah(q) instanceof A.A)return null
else throw q}}}
A.kG.prototype={
jw(a,b,c,d,e){if(this.a.length===0)throw A.b(B.ij)
if(this.b<0)throw A.b(B.hv)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ad(q,t.i)
s=t.z
return A.aW(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cm.prototype={
B(){return"EndingKind."+this.b}}
A.pa.prototype={
gav(){return this.a}}
A.h3.prototype={
C(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.pd.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:79}
A.bH.prototype={}
A.lv.prototype={
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
nw(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ab(0,new A.k(0,1.3499999999999999,0))
return!new A.kp(s,s.a4(0,new A.k(0,1.2000000000000002,0))).dg(a,r)}}
A.rS.prototype={
C(){return A.wj(this.a)}}
A.hq.prototype={
C(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.tf.prototype={
hC(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
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
return A.Bl(A.aZ(m,s,r),k,2)}}
A.fj.prototype={}
A.dA.prototype={
B(){return"GameSessionEventType."+this.b}}
A.kS.prototype={
gav(){return this.c},
gaX(){return this.d}}
A.pz.prototype={
gav(){return this.a},
gaX(){return this.b}}
A.py.prototype={
gag(){var s=this.d
return new A.pz(s.a,s.b,this.e.b.a)},
gik(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.J)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.AN(m.c).C()
o=m.r
n=o.c
return new A.rS(A.wj(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.C()],k,t.z)))},
lK(a,b){if(!B.a.M(a.f,new A.pA(b)))return!1
this.z.lI(a,b)
return!0},
lJ(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.nl(n))return!1
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
nh(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.v(s).i("ao<2>")
q=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(q,new A.pB())
if(q.length===0)return null
s=A.B(q)
r=s.i("I<1>")
p=A.K(new A.I(q,s.i("l(1)").a(new A.pC()),r),r.i("r.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dw(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.R(n,o.length)]
s=l.c
k=new A.d1(a,l.a,s.length-1,B.a.ga6(s).t(0))
j.l(0,a,k)
return k},
lF(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.a7(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cN(B.iQ)}if(n<a)this.cN(B.iR)},
jg(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dF(a)&&s.jf(b)},
oj(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.er){r.c=Math.min(1,r.c+0.1)
q.l(0,"ignored."+o.b+"."+o.c,"true")}}},
jc(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.EA(j,A.ad(i.d,h).length)
if(a===B.e7)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.B(r)
A.Ez(j,new A.I(r,q.i("l(1)").a(new A.pD(k)),q.i("I<1>")).gu(0))
r=k.f
q=r.b
if(B.a.p(B.jX,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.aB(j.a/1*3)
B.a.k(r.r,new A.hs(q.a,a,b))
m=r.a
A.EL(m,q.a,n,k.b,A.ad(m.d,h));++q.a
q.f5(7)
r.c=16
r.d=6
r.f=!1
m.iY(B.kx)
s.y.m7(o,c)
l=B.b.aB(j.b/1*6)
if(l>0)r.dF(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ao(i,A.v(i).i("ao<2>")).M(0,new A.pE())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cN(B.iV)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cN(B.iU)},
fX(a,b){var s,r=this;++r.y
s=r.d
B.a.k(r.w,new A.kS(s.a,s.b))
B.a.k(r.x,A.EB(A.HN(a),r.b,r.y-1))},
cN(a){return this.fX(a,null)}}
A.pA.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:16}
A.pB.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.pC.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.pD.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.u9().j9(this.a.c,a.a)},
$S:83}
A.pE.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.kj.prototype={
eP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.B(b),a0=a.i("e(1)")
a=a.i("H<1,e>")
A.k3(new A.H(b,a0.a(new A.oj()),a),"level")
s=d.w
r=A.B(s)
q=r.i("e(1)")
r=r.i("H<1,e>")
A.k3(new A.H(s,q.a(new A.ok()),r),"room")
p=d.x
o=A.B(p)
A.k3(new A.H(p,o.i("e(1)").a(new A.ol()),o.i("H<1,e>")),"portal")
o=d.y
n=A.B(o)
A.k3(new A.H(o,n.i("e(1)").a(new A.om()),n.i("H<1,e>")),"stair")
m=new A.H(b,a0.a(new A.on()),a).b8(0)
l=new A.H(s,q.a(new A.oo()),r).b8(0)
r=A.n(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.w)(p),++k){j=p[k]
r.l(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.p(0,b))throw A.b(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.K(b))throw A.b(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.b(B.hh)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.w)(s),++k){h=s[k]
a=h.b
if(!m.p(0,a))throw A.b(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.B(a)
q=h.a
A.k3(new A.H(a,a0.i("e(1)").a(new A.op()),a0.i("H<1,e>")),"window in "+q)
a0=h.f
A.k3(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.w)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.b(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.b(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.w)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.p(0,a))throw A.b(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.p(0,a0))throw A.b(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.b(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.w)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.b(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.b(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
eO(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.i("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.i("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.b(A.i("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.b(A.i("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.b(A.i("authored/runtime room or portal count mismatch"))
for(r=t.o,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.w)(a1),++p){o=a1[p]
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
for(n=A.B(j),i=n.i("l(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.w)(l),++f){e=l[f]
d=A.bK(new A.I(j,i.a(new A.oi(e)),n),r)
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
if(Math.abs(h-g)>0.0001)A.f(A.i(c+a0+A.y(h)+" != "+A.y(g)))}}for(a1=b.x,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.w)(a1),++p){o=a1[p]
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
if(a1.length!==s.length||B.a.gbg(a1).b!==B.a.gbg(s).b)throw A.b(A.i("stair manifest mismatch"))}}
A.od.prototype={
$1(a){var s=A.hS(a,"level"),r=A.bJ(s,"id")
A.bJ(s,"kind")
A.eP(s,"floorY")
return new A.ed(r)},
$S:84}
A.oe.prototype={
$1(a){return A.Eh(a,this.a)},
$S:85}
A.of.prototype={
$1(a){var s=this.a,r=A.hS(a,"portal"),q=A.bJ(r,"id"),p=A.bJ(r,"a"),o=A.bJ(r,"b"),n=A.zy(r,"facingA"),m=A.zy(r,"facingB"),l=A.eP(r,"offsetA"),k=A.eP(r,"offsetB"),j=A.eP(r,"width"),i=A.eP(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.u(r.h(0,"doorKit")):null
return new A.ee(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:86}
A.og.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.hS(a,"stair")
return new A.eg(A.bJ(p,"id"),A.bJ(p,"portalId"),A.Iy(p.h(0,s),s),A.np(p.h(0,"min"),"min"),A.np(p.h(0,"max"),"max"),A.np(p.h(0,r),r),A.np(p.h(0,q),q))},
$S:87}
A.oh.prototype={
$1(a){return typeof a=="string"?a:A.e3("exterior cell")},
$S:36}
A.oj.prototype={
$1(a){return t.mD.a(a).a},
$S:37}
A.ok.prototype={
$1(a){return t.bJ.a(a).a},
$S:38}
A.ol.prototype={
$1(a){return t.lT.a(a).a},
$S:91}
A.om.prototype={
$1(a){return t.gI.a(a).a},
$S:92}
A.on.prototype={
$1(a){return t.mD.a(a).a},
$S:37}
A.oo.prototype={
$1(a){return t.bJ.a(a).a},
$S:38}
A.op.prototype={
$1(a){return t.ya.a(a).a},
$S:93}
A.oi.prototype={
$1(a){return t.o.a(a).a===this.a.a},
$S:13}
A.oq.prototype={}
A.xN.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fP
break A}if("first"===a){s=B.fQ
break A}s=B.fR
break A}return s},
$S:95}
A.ed.prototype={
gE(){return this.a}}
A.ef.prototype={
gE(){return this.a}}
A.or.prototype={
$1(a){var s=this.a,r=A.hS(a,"window")
return new A.eh(A.bJ(r,"id"),A.zy(r,"facing"),A.eP(r,"offset")*s,A.eP(r,"sill")*s,A.eP(r,"width")*s,A.eP(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:96}
A.os.prototype={
$1(a){return typeof a=="string"?a:A.e3("portal id")},
$S:36}
A.eh.prototype={
gE(){return this.a}}
A.ee.prototype={
gE(){return this.a}}
A.eg.prototype={
gE(){return this.a}}
A.xl.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.xI.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.kp.prototype={
ghn(){var s=this.d
return s==null?null:s.a.a},
iq(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null||!isFinite(d)){n.d=null
return}s=c.d
r=A.B(s)
q=new A.I(s,r.i("l(1)").a(new A.oH(e)),r.i("I<1>"))
p=!q.gv(0).m()?null:q.ga1(0)
if(p==null){n.d=null
return}if(!(n.cL(b,p.f)&&a==="hall"))o=n.cL(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mm(p,B.b.n(d,0,1))},
nK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fQ(g,c,d)
s=h.kl(a,b,c,d)
if(s!=null){h.d=s
return h.fQ(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hv(Math.sqrt(r*r+q*q)/0.08))
o=d.a8(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.lq(a,n,m,o)
l=l||j.b
m=j.a
i=h.og(a,n)
n=i==null?n:i}h.bl(m)
return new A.li(m,n)},
kl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cL(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cL(c,l)){l=j<0||o
h=l}if(i||h)return new A.mm(m,i?0:1)}return null},
fQ(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ab(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.n(a.b+o/p,0,1)
n=A.BC(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bl(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.li(n,k)},
cL(a,b){var s=a.ab(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
lq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cV(c,!1)
s=h.cT(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cT(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cV(p.a,!1)
n=c.a4(0,new A.k(0,0.35,0))
h.bl(n)
if(!h.dg(a,b)){m=h.cT(a,b,n,new A.k(g,0,0))
l=h.cT(a,b,m.a,new A.k(0,0,q))
if(!m.b&&!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bl(i)
if(h.dg(a,b))break}h.bl(k)
return new A.cV(k,!1)}}if(o)return new A.cV(r,!0)
if(!p.b)return new A.cV(p.a,!0)
h.bl(c)
return new A.cV(c,!0)},
cT(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cV(c,!1)
s=c.a4(0,d)
this.bl(s)
if(this.dg(a,b)){this.bl(c)
return new A.cV(c,!0)}return new A.cV(s,!1)},
bl(a){var s=a.ab(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a4(0,new A.k(0,1.2000000000000002,0))},
dg(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.ln(a,m,s)},
og(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aH(k)
for(r=k.a,q=a.aS(r),p=J.O(q.a),q=new A.W(p,q.b,q.$ti.i("W<1>"));q.m();){o=p.gq()
n=o.cp(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hj(k,o,s)&&this.kd(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
ln(a,b,c){var s,r,q
for(s=a.aS(b.a),r=J.O(s.a),s=new A.W(r,s.b,s.$ti.i("W<1>"));s.m();){q=r.gq()
if(q.ax&&!q.ay&&!q.z&&this.hj(b,q,c))return!0}return!1},
hj(a,b,c){var s,r,q,p=a.a,o=b.b4(p),n=b.aM(p)
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
kd(a,b,c){var s,r=this
switch(b.b4(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slQ(a){this.a=t.a7.a(a)}}
A.oH.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:97}
A.li.prototype={}
A.cV.prototype={}
A.mm.prototype={}
A.ir.prototype={
gav(){return this.a}}
A.q3.prototype={
m7(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.V,r)
s=B.V[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
ja(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.c}return r},
jb(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.d}return r},
C(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a8.prototype={}
A.kJ.prototype={
gnA(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.c([r,q,p,o,n,m],t.n),new A.pf())&&o>=r&&n>=q&&m>=p}}
A.pf.prototype={
$1(a){return isFinite(A.aB(a))},
$S:4}
A.kZ.prototype={
A(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.R(s,3)!==0}else s=!0
if(s)throw A.b(A.p("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.p("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnA())throw A.b(A.p("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.w)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.q5()))throw A.b(A.p("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.p("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.p("QHMX index "+o+" exceeds vertex count",m))}}}
A.q5.prototype={
$1(a){return!isFinite(A.aB(a))},
$S:4}
A.q4.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bI(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bI(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bI(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bI(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bI(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bI(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a8(a,b,c,m,n,o,0,0,p),r=new A.a8(g,h,i,m,n,o,1,1,p)
this.ar(s,new A.a8(d,e,f,m,n,o,1,0,p),r)
this.ar(s,r,new A.a8(j,k,l,m,n,o,0,1,p))},
ar(a,b,c){var s=this,r=s.b
B.a.k(r,s.dX(a))
B.a.k(r,s.dX(b))
B.a.k(r,s.dX(c))},
dX(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.i("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
lV(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.kZ(A.ad(g,t.hl),new Uint16Array(A.R(this.b)),new A.kJ(s,r,q,p,o,n))
h.A()
return h}}
A.kK.prototype={}
A.yI.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.at.p(0,s))A.f(A.i("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:98}
A.xA.prototype={
$2(a,b){var s=t.Ez
return B.c.I(s.a(a).a,s.a(b).a)},
$S:99}
A.dl.prototype={
oX(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.w)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.l(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.k(i,p[n])}B.a.k(s,m)}return new A.jm(A.Ka(new A.kZ(i,new Uint16Array(A.R(s)),A.Hv(i))),l.a,l.b,l.c,A.c([],k))}}
A.jm.prototype={}
A.f1.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.kL.prototype={
m1(a){var s
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
m2(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cJ
break A}if("kitchen"===a||"cellar"===a){s=B.fM
break A}if("bathroom"===a){s=B.fN
break A}if("spare-room"===a){s=B.fO
break A}s=B.cJ
break A}return this.m1(s)},
hS(a,b,c,d){d.i("r<0>").a(b)
t.Q.a(c)
return new A.bI(this.nc(d.i("e(0)").a(a),b,c,d),d.i("bI<0>"))},
nc(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$hS(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.at.gaE(B.at)))throw A.b(A.p("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bV(l,l.r,l.e,r.$ti.i("bV<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.at.p(0,j))throw A.b(A.i("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eH.prototype={
hy(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.x8.prototype={
$1(a){var s=this
return t.xT.a(a).hy(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:46}
A.x7.prototype={
$1(a){return t.xT.a(a).hy(0,(this.a+this.b)*0.5,this.c)},
$S:46}
A.dz.prototype={
B(){return"FocusKind."+this.b}}
A.eq.prototype={
gE(){return this.b}}
A.tc.prototype={}
A.we.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:101}
A.xw.prototype={
$1(a){return B.d.n(B.b.aB(a*this.a),0,255)},
$S:102}
A.eG.prototype={}
A.q1.prototype={
np(){var s,r,q,p,o,n,m=this
m.kt()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.i("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.i("authored portal endpoint missing: "+o.a))}},
eF(a){var s=this.w
if(s==null)return null
return new A.k(s.a,a,s.c)},
kt(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=o.a
if(q.K(n))throw A.b(A.i("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){m=s[p]
n=m.a
if(q.K(n))throw A.b(A.i("duplicate portal "+n))
q.l(0,n,m)}},
aH(a){var s=a.c,r=this.y,q=a.a
return new A.k(s.a+r.ja(q),s.b+r.jb(q),s.c)},
aS(a){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qj(a)),r.i("I<1>"))},
of(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.a7(a,"roomId","not a portal endpoint"))
r=this.aH(o)
q=b.aM(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b4(a).a){case 0:s=new A.k(s.a+q,p,s.c)
break
case 2:s=new A.k(s.a+q,p,s.c+r.c)
break
case 1:s=new A.k(s.a+r.a,p,s.c+q)
break
case 3:s=new A.k(s.a,p,s.c+q)
break
default:s=null}return s},
ig(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a0
s=A.c([new A.a5(a,B.a0)],t.nR)
r=A.aF([a],t.N)
for(q=this.e,p=t.e;s.length!==0;){o=B.a.on(s,0)
n=o.a
m=o.b
for(l=this.aS(n),k=J.O(l.a),l=new A.W(k,l.b,l.$ti.i("W<1>"));l.m();){j=k.gq()
i=j.cp(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.K(m,p)
h.push(j)
B.a.k(s,new A.a5(i,h))}}}return B.a0}}
A.qj.prototype={
$1(a){var s
t.e.a(a)
s=this.a
return a.b===s||a.c===s},
$S:103}
A.pe.prototype={}
A.u9.prototype={
j9(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.ua())}else s=!1
return s}}
A.ua.prototype={
$1(a){return t.o.a(a).w},
$S:13}
A.q6.prototype={
ih(a){var s=this.e,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.q9(a)),r.i("I<1>"))},
gjk(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q].f
o=l.h(0,p)
l.l(0,p,(o==null?0:o)+1)}return A.aW(l,n,m)},
bL(a){return B.a.b5(this.d,new A.q7(a),new A.q8(a))},
eO(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.i("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.i("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.i("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.w)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.b(A.i("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.i("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aF(["production","proxy","invisible-anchor"],s).p(0,l))throw A.b(A.i("invalid inventory asset status "+m+": "+l))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.w)(q),++o){g=q[o]
l=g.a
if(!j.k(0,l))throw A.b(A.i("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.b(A.i(a7+l+" references "+k))
n=a6.bL(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.E_()
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
if(!A.aF(["none","static","dynamic","kinematic"],s).p(0,c))A.f(A.i("invalid physics body type for "+l))
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
a3=g.is(n,a8)
a4=g.eJ(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.b(A.i(a7+l+" escapes "+f.a))}}}
A.q9.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:104}
A.q7.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:105}
A.q8.prototype={
$0(){return A.f(A.i("inventory asset missing: "+this.a))},
$S:7}
A.d8.prototype={
gE(){return this.a}}
A.cK.prototype={
is(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.k(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
eJ(a,b){var s=this.f.c.b*b,r=a.r
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.l4.prototype={}
A.qt.prototype={}
A.qr.prototype={}
A.xH.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.qs.prototype={
C(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.v(o).i("ac<1>")
n=A.K(new A.ac(o,n),n.i("r.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.w)(n),++r){q=n[r]
p.l(0,q,o.h(0,q))}return p},
eG(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.h6)
s=t.X
r=A.aZ(a,s,s)
s=this.a
s.O(0)
for(q=new A.N(r,A.v(r).i("N<1,2>")).gv(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.b_(o)||o<0)throw A.b(B.hx)
s.l(0,n,o)}}}
A.dK.prototype={}
A.qa.prototype={
oV(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fB(a5,a5.r,A.v(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.w)(n),++g){f=n[g]
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
a2=new A.k(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.k(a*a3,a0*a3,a1*a3)}else a4=new A.k(0,-1,0)
B.a.k(s,new A.dK(new A.k(d,c,e),a4,16760952,3.8,2.1*this.le(k),80,180,0.12))}}B.a.Y(s,new A.qb(a6))
return A.hv(s,0,A.e6(4,"count",t.S),t.A_).bE(0)},
le(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.qb.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.I(a.a.ab(0,s).gu(0),b.a.ab(0,s).gu(0))},
$S:107}
A.ep.prototype={
B(){return"Floor."+this.b}}
A.eo.prototype={
B(){return"Facing."+this.b}}
A.fu.prototype={
sj8(a){this.w=A.T(a)},
gE(){return this.a}}
A.c9.prototype={
cp(a){var s=this.b
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
gE(){return this.a}}
A.lc.prototype={
gE(){return this.a}}
A.fn.prototype={
gE(){return this.a}}
A.fi.prototype={
gE(){return this.a}}
A.qd.prototype={
n3(a){return B.a.b5(this.c,new A.qe(a),new A.qf(a))},
oR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.i("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.i("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.n(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.w)(r),++p){m=r[p]
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
if(k.gP(k)||k.ga3().M(0,new A.qg())||k.gak().M(0,new A.qh()))throw A.b(A.i("sound emitter "+l+" has no usable cues"))
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
A.qe.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:108}
A.qf.prototype={
$0(){return A.f(A.i("sound emitter missing: "+this.a))},
$S:7}
A.qg.prototype={
$1(a){return B.c.aP(A.u(a)).length===0},
$S:3}
A.qh.prototype={
$1(a){return B.c.aP(A.u(a)).length===0},
$S:3}
A.d7.prototype={
gE(){return this.a}}
A.q2.prototype={
c8(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a7(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.kv}q=A.c([],t.Fm)
p=B.b.aV(r)+1
o=B.b.aV(b)
for(n=p;n<=o;++n){m=B.d.R(n,24)
B.a.k(q,new A.f6("tick",m))
if(B.d.R(m,3)===0){B.a.k(q,new A.f6("cuckoo",m))
B.a.k(q,new A.f6("bell",m))}if(B.d.R(m,6)===0)B.a.k(q,new A.f6("chime",m))}l.b=b
return q}}
A.f6.prototype={
gaX(){return this.b}}
A.qc.prototype={
c8(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a7(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.kH}q=A.c([],t.op)
for(p=B.b.aV(r)+1;p<=B.b.aV(b);++p){o=B.d.R(p,24)
n=B.d.R(o,4)
if(n===2)B.a.k(q,B.jo)
if(B.d.R(o,3)===1)B.a.k(q,B.jq)
if(B.d.R(o,8)===5)B.a.k(q,B.jt)
if(B.d.R(o,5)===0)B.a.k(q,B.jp)
if(B.d.R(o,7)===3)B.a.k(q,B.ju)
if(n===1)B.a.k(q,B.jr)
if(B.d.R(o,6)===4)B.a.k(q,B.js)}m.b=b
return q}}
A.d6.prototype={}
A.xG.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.qi.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)d.k(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.w)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.w)(n),++l)r.k(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.w)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.w)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.zR(new A.ac(o,A.v(o).i("ac<1>")),d)){d=f.b
if(A.zR(new A.ac(d,A.v(d).i("ac<1>")),r)){d=f.c
e=!A.zR(new A.ac(d,A.v(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.i3)
e=f.d
if(e<0||e>2)A.f(B.hi)
a.y.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.w)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.w)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.w)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.w)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.iK.prototype={
C(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iy.prototype={
C(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bA.prototype={
gE(){return this.a}}
A.p9.prototype={
$1(a){return this.a.p(0,A.u(a))},
$S:3}
A.er.prototype={
B(){return"Hand."+this.b}}
A.uU.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
f4(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.lb.prototype={
C(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.D[r]
o.l(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.H(B.D,t.oI.a(new A.qO(this)),t.jT).W(0," \xb7 ")}}
A.qN.prototype={
$2(a,b){return new A.P(A.u(a),A.u(b),t.q)},
$S:109}
A.qO.prototype={
$1(a){return this.a.a.h(0,A.u(a))},
$S:110}
A.c4.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gav(){return this.b}}
A.qx.prototype={
cb(a){t.G.a(a)
return a.a===5&&B.a.a2(B.D,new A.qE(this,a))},
fg(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.cb(b))return null
s=this.e++
r=new A.c4(s,a,A.c([A.qM(b,c,d)],t.Bv),e,!1,null,null)
this.b.l(0,s,r)
return r},
ec(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.cb(b))return!1
B.a.k(s.c,A.qM(b,c,B.aL))
return!0},
lE(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.cb(b))return!1
s.r=A.qM(b,0,B.d6)
return!0},
iY(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.O(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.K(p)&&!B.a.p(s,p))B.a.k(s,p)}},
oU(a){var s
if(!this.b.K(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.v(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ae(r,r.r,r.e,A.v(r).i("ae<2>"));r.m();)s.push(r.d.C())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qE.prototype={
$1(a){var s
A.u(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.i4.prototype={
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
A.ot.prototype={
cz(a){var s,r,q=a==null?null:B.c.aP(a).toLowerCase()
if(q==null||q.length===0)return B.eN
if(q==="pixeldart")return B.eM
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.i4(B.aT,!1,!0,r,s,s?r:null)}}
A.iM.prototype={}
A.rL.prototype={
C(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gak(),s=s.gv(s),r=t.N;s.m();){q=s.gq()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.xv.prototype={
$1(a){A.u(a)
return a.length!==0&&a!==".."},
$S:3}
A.iN.prototype={}
A.lA.prototype={}
A.rN.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.rO.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.rF.prototype={}
A.rE.prototype={
ghD(){var s,r,q="pixeldart",p=this.b,o=p.aI
if(o){s=p.w
s===$&&A.t()
s=s.a.b}else s="safe"
p=A.Bh(q,o?p.glZ():B.l7,!1,s)
r=p
if(r==null)r=A.Bh(q,A.c([],t.s),!1,"safe")
p=A.Bg(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
f9(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bN){if(k.aI){s=k.d
s===$&&A.t()
s=s.a.b===B.a_}else s=!1
s=!s
if(s){m.d=B.W;++k.em
j=B.W}if(j===B.bN)return}if(j!==B.W)A.f(A.i(l))
B.f.a0(A.E(["backend","pixeldart","interpolation",0,"facts",A.wj(a.a.a)],t.N,t.X),null)
j=k.aI
if(j){s=k.d
s===$&&A.t()
s=s.a.b===B.a_}else s=!1
if(s){if(m.d!==B.W)A.f(A.i(l))
m.d=B.bN
return}if(!j)A.f(A.i("Pixeldart runtime is not initialized"))
j=k.to
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.da(j)
j=$.Ai()
s=j.b
q=j.c
p=A.z0(k.b/k.c,q,j.a,s)
j=p.a8(0,r)
j=A.Ax(k.b/k.c,B.w,q,B.oC,s,p,r,j)}o=new A.kP(j,k.x1,k.x2,-1,k.n9++,k.em,k.en,k.dc)
n=new A.uh()
$.Ad()
j=$.rV.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.t()
s=k.f
s===$&&A.t()
k.lm(j.lR(s,o),o)
k.d9=k.e.n5()
j=$.rV.$0()
n.b=j
k.da=n.gn2()/1000},
hW(a){if(this.d!==B.W)A.f(A.i("pixeldart backend is not ready"))
B.f.a0(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rG.prototype={
m_(a,b){var s,r,q,p,o,n,m
a.A()
s=B.cs.cz(a)
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
for(;m<o.length;o.length===n||(0,A.w)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.lt.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.rH.prototype={
C(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rI.prototype={
hx(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.p("surface dimensions must be positive",null))
s=a1.a
A:{if(B.G===s){r=new A.fD(1080,1920)
break A}if(B.O===s){r=new A.fD(720,1280)
break A}r=new A.fD(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.aB(r.b*q)
q=B.b.aB(r.a*q)
o=B.b.n(a5/p,0,1)
n=B.b.n(a4/q,0,1)
m=o<n?o:n
r=this.fi(B.b.aB(p*m),320,a5)
q=this.fi(B.b.aB(q*m),180,a4)
l=s===B.G
k=s===B.O
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
break E}g=a0==="linear"?B.fq:B.b6
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fB
break F}if("errors"===b){c=B.cA
break F}c=B.fC
break F}return new A.iS(a1,r,q,h,g,i,p,f,e,d,c)},
fi(a,b,c){if(c<b)return c
return B.d.n(a,b,c)}}
A.rJ.prototype={}
A.hk.prototype={}
A.rK.prototype={}
A.rM.prototype={
di(a,b,c,d){return this.nE(a,t.zL.a(b),c,d)},
nE(a,b,c,d){var s=0,r=A.aL(t.c_),q,p,o,n,m
var $async$di=A.aM(function(e,f){if(e===1)return A.aI(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a6(B.fd.dh(new A.rh(d,b),B.lA),$async$di)
case 3:p=new o.iN(n,m,f)
A.B8(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$di,r)}}
A.rP.prototype={}
A.rQ.prototype={
co(a,b,c){return this.nF(a,t.xJ.a(b),t.tX.a(c))},
nF(a,b,c){var s=0,r=A.aL(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$co=A.aM(function(d,e){if(d===1)return A.aI(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga3(),o=o.gv(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gq()
l=p.h(0,m)
if(l==null)l=A.f(A.i("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a6(b.$1(l.c),$async$co)
case 5:k=i.Fn(h.a(g.ai(e,null)))
m=l.a
if(k.b!==m)throw A.b(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.b(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a6(B.fg.di(m,new A.rR(c,l),l.b,k),$async$co)
case 6:i.k(h,e)
s=3
break
case 4:q=new A.lA(A.B8(j))
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$co,r)}}
A.rR.prototype={
$1(a){return this.a.$2(this.b.a,A.u(a))},
$S:111}
A.ix.prototype={
gi_(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gmU(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.rY.prototype={
oP(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bj
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bj
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.ix(!0,B.b.n(q*(0.6+b*0.6),0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.az()*0.15
p=(0.6+s.az()*2.8)*1000
l.x=p
l.e=p/343
o=s.az()*3.141592653589793*2
n=0.28+s.az()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.z=new A.ix(!0,B.b.n(0.6+b*0.6,0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.az()*6}}}
A.lH.prototype={
B(){return"RendererBackendKind."+this.b}}
A.hn.prototype={
B(){return"RendererBackendState."+this.b}}
A.ta.prototype={}
A.lI.prototype={
gE(){return this.a}}
A.t9.prototype={
jB(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.p("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.p("renderer provenance values must be non-empty",null))}},
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
A.tb.prototype={
du(a,b){if(a<=0||b<=0)throw A.b(A.p("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
i1(a,b){var s,r,q,p,o
for(s=A.ad(this.a.d,t.rO),r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.tZ.prototype={
lL(a){var s,r,q,p,o,n,m,l,k=this.a
k.O(0)
s=a.w
s===$&&A.t()
r=A.B(s)
q=r.i("l(1)").a(new A.u_())
s=B.a.gv(s)
r=new A.W(s,q,r.i("W<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gq()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.l(0,n,A.E(["requested",l,"effective",o],q,p))}}}
A.u_.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.bZ.prototype={
B(){return"ShaderDebugMode."+this.b},
gmS(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.iY.prototype={
B(){return"ShaderTuningAvailability."+this.b}}
A.dg.prototype={
B(){return"ShaderTuningCategory."+this.b}}
A.cs.prototype={
gne(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.F(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.F(r,2)
else return B.b.F(r,3)}},
geg(){var s,r,q=this
if(q.Q!==B.z)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.F(r,1)
if(s>=0.01)return B.b.F(r,2)
return B.b.F(r,3)},
gE(){return this.a}}
A.u0.prototype={
gbq(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.d(B.ap,p)
s=B.ap[p]
p=this.w
p===$&&A.t()
r=A.B(p)
q=r.i("I<1>")
p=A.K(new A.I(p,r.i("l(1)").a(new A.u7(s)),q),q.i("r.E"))
return p},
gbN(){var s,r=this.gbq(),q=r.length
if(q===0)return null
s=B.d.n(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
no(){var s,r
if(this.b===5)return
else{s=this.gbN()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y+s.w,s.f,s.r)}},
mN(){var s,r
if(this.b===5)return
else{s=this.gbN()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y-s.w,s.f,s.r)}},
or(){var s,r,q,p,o
if(this.b===5)this.e=B.av
else for(s=this.gbq(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
op(){var s,r,q,p
this.e=B.av
s=this.w
s===$&&A.t()
r=0
for(;r<60;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
oz(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.t()
r=0
for(;r<60;++r){q=s[r]
p=q.a
o=d.p(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.z:B.e6
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.av},
mP(){var s,r,q,p=this.w
p===$&&A.t()
s=A.B(p)
s=new A.I(p,s.i("l(1)").a(new A.u1()),s.i("I<1>")).gu(0)
r=A.B(p)
r=new A.I(p,r.i("l(1)").a(new A.u2()),r.i("I<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.d(B.ap,p)
p=B.ap[p]
q=this.gbN()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
eL(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.t()
j=A.K(j,t.r)
B.a.Y(j,new A.u8())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.w)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.z)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
gnJ(){var s,r,q,p=A.c([],t.s),o=this.w
o===$&&A.t()
s=0
for(;s<60;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.X(p)
return p},
nn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.ai(a,g),c=t.f
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
for(r=J.O(s);r.m();){l=r.gq()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.K(f))throw A.b(B.iA)
k=A.u(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.K(k))throw A.b(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bx(j))throw A.b(A.M("toggle "+k+" requires a boolean request",g,g))
m.l(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.b(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.b(A.M(e+k+" is outside ["+A.y(i)+", "+A.y(n.r)+"]",g,g))
m.l(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.M(B.dn,new A.u5(h)))throw A.b(B.hF)
if(h!=="none")throw A.b(B.ht)
for(o=0;o<60;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.T(c)
else n.y=A.aB(c)}this.e=B.a.an(B.dn,new A.u6(h))},
H(a){var s,r,q=this.w
q===$&&A.t()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.u4(a)),s.i("I<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bF(a){var s,r,q=this.w
q===$&&A.t()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.u3(a)),s.i("I<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.u7.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:8}
A.u1.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.u2.prototype={
$1(a){return t.r.a(a).Q!==B.z},
$S:8}
A.u8.prototype={
$2(a,b){var s=t.r
return B.c.I(s.a(a).a,s.a(b).a)},
$S:113}
A.u5.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:51}
A.u6.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:51}
A.u4.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.u3.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.ug.prototype={
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
A.hs.prototype={
gav(){return this.a}}
A.p2.prototype={
dF(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jf(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.p3.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:116}
A.p4.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:117}
A.l2.prototype={
B(){return"InteractionType."+this.b}}
A.fw.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.vd.prototype={}
A.fv.prototype={}
A.kt.prototype={}
A.qk.prototype={}
A.qo.prototype={
eV(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.Y(p,new A.qp())
return p},
m6(a,b){var s,r,q,p,o,n=b.b
if(n.gP(n))return B.pq
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga3(),s=s.gv(s),p=a.c;s.m();){o=s.gq()
if(B.a.ga6(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.fv(B.aX,r)
s=r.a
o=B.a.ga6(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.ga6(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fv(B.ev,r)
return new A.fv(B.cd,r)},
l1(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.kt(e,!1,B.pp,null)
s=q.d===c
r=this.m6(q,d)
this.d.$1(e)
return new A.kt(e,s,r,r.a===B.aX&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga6(q.c).t(0)+'".':null)},
mG(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aX)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.qk(B.a.ga6(s.c).t(0)+" but "+A.y(a.f))}}
A.qp.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.I(s.a(b).a,a.a)},
$S:17}
A.cr.prototype={
B(){return"RuptureStep."+this.b}}
A.td.prototype={}
A.de.prototype={}
A.te.prototype={
gf6(){var s=B.bD.h(0,this.a)
return s==null?0:s},
jj(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.H)s=q.e
else s=!0
if(s)return B.dl
r=A.zB(b)
s=q.c
B.a.O(s)
B.a.L(s,r)
B.a.O(q.d)
q.a=B.aU
q.b=0
q.e=!1
return A.c([B.fj],t.xB)},
e6(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.p("rupture advance must be a finite non-negative duration",null))
if(l.a===B.H||a===0)return B.dl
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.H))break
A:{q=l.a
p=B.bD.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a7)l.ls(s)
p=l.b
o=B.bD.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.de())
if(q===B.a7){l.a=B.H
l.b=0
l.e=!0
B.a.k(s,B.fi)}else{p=q.a+1
if(!(p<7))return A.d(B.dg,p)
l.a=B.dg[p]
l.b=0
B.a.k(s,new A.de())}}}return A.ad(s,t.F3)},
C(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ad(s.c,r),"extinguishedMantles",A.ad(s.d,r),"completed",s.e],r,t.z)},
ls(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.n(B.b.aV(l.b/l.gf6()*A.ad(s,r).length),0,A.ad(s,r).length)
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
B.a.k(a,new A.de())}}}
A.kT.prototype={
gfa(){var s=this.b
if(s<7||s>19)return 0
return B.b.n((s-7)/12,0,1)},
gmI(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.n((s-5.5)/15,0,1))},
f5(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
ir(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.ey.prototype={
B(){return"PrecipitationKind."+this.b}}
A.fs.prototype={
C(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gav(){return this.a}}
A.v5.prototype={
ep(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.b2(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.x9.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.n(B.b.n(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nl(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nl(q,p)&255)/255:1.2+(A.nl(q,p)&255)/255*0.8
p=A.nl(q,k+211)
q=A.nl(q,k+307)
n=A.nr(B.b.F(s,2))
m=A.nr(B.b.F(12-r*0.11000000000000001,2))
l=A.nr(B.b.F(o,2))
p=A.nr(B.b.F((p&65535)/65535*3.141592653589793*2,5))
q=A.nr(B.b.F(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fs(k,j,n,m,l,p,q,j?B.aP:B.y)},
$S:118}
A.j9.prototype={}
A.eC.prototype={}
A.uW.prototype={
C(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.v4.prototype={
C(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.ft.prototype={}
A.fr.prototype={
A(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.jU(s)){r=q.c
if(A.jU(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.b(A.p("invalid weather collision box "+p,null))},
gE(){return this.a}}
A.eE.prototype={
B(){return"WeatherImpactResponse."+this.b}}
A.mh.prototype={}
A.hA.prototype={
C(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hi(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.b(A.p("weather surface state must be finite and >= 0",null))}}
A.v6.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.b(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:119}
A.v7.prototype={
C(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.eX.prototype={
B(){return"AuthoredEventConsumer."+this.b}}
A.pw.prototype={
oT(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.Jo(s[q].b)},
nm(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dw(a.a+":"+a.c),q=t.sU,r=new A.al(r,r.gu(0),q.i("al<a3.E>")),q=q.i("a3.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.aB((l+(k-l)*(s/2147483647))*60)
n=B.b.hv(l*60)
m=B.b.aV(k*60)
return(n<=m?B.d.n(o,n,m):B.d.n(o,0,1439))/60},
hG(a){var s,r,q,p,o=A.c([],t.D)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
lY(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.px.prototype={
$2(a,b){var s,r=B.d.I(a.gav(),b.gav())
if(r!==0)return r
s=B.b.I(a.gaX(),b.gaX())
return s!==0?s:J.Am(a.gE(),b.gE())},
$S:42}
A.kR.prototype={
c8(a,b){var s,r,q,p,o,n,m,l=A.c([],t.D)
for(s=this.a,r=s.hG(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.w)(r),++n){m=r[n]
if(s.nm(m,p)<=b&&o.k(0,m.a))B.a.k(l,m)}return l},
ghF(){return new A.bI(this.n8(),t.oe)},
n8(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.lB(o.hG(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gmO(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return s},
C(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return A.E(["delivered",s],t.N,t.z)}}
A.pv.prototype={
$1(a){return this.a.lY(A.u(a))!=null},
$S:3}
A.ri.prototype={
aW(a,b){var s=this.b
if(s.K(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
nl(a){return this.aW(a,null)},
lI(a,b){var s,r,q=a.a
this.a.l(0,q,b.a)
s=this.b
s.l(0,"last-reaction",q)
for(q=b.d.gN(),q=q.gv(q);q.m();){r=q.gq()
s.l(0,r.a,r.b)}},
C(){var s,r,q,p,o,n,m,l,k=this.a,j=A.v(k).i("N<1,2>")
k=A.K(new A.N(k,j),j.i("r.E"))
B.a.Y(k,new A.rk())
j=t.N
k=A.z_(k,j,j)
s=this.b
r=A.v(s).i("N<1,2>")
s=A.K(new A.N(s,r),r.i("r.E"))
B.a.Y(s,new A.rl())
s=A.z_(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.v(q).i("N<1,2>")
q=A.K(new A.N(q,p),p.i("r.E"))
B.a.Y(q,new A.rm())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.w)(q),++n){m=q[n]
l=m.b
r.l(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.rk.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.rl.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.rm.prototype={
$2(a,b){var s=t.gJ
return B.c.I(s.a(a).a,s.a(b).a)},
$S:122}
A.d1.prototype={
C(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bC.prototype={
C(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.rC.prototype={
eT(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
m="aftermath."+B.c.aQ(n.a,8)
if(p.K(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.k(k,n)}if(q.aW("ashworth.compact","accepted"))B.a.k(k,B.mr)
if(q.aW(l,"taken"))B.a.k(k,B.mv)
else if(q.aW(l,"left"))B.a.k(k,B.ms)
if(q.aW("sylvia.certificate","granted"))B.a.k(k,B.mu)
if(q.aW("residue.coal","cellar"))B.a.k(k,B.mq)
if(q.aW("telegram.08","read"))B.a.k(k,B.mp)
if(q.aW("truth.shawl","home"))B.a.k(k,B.mo)
if(q.aW("sowerby.paraffin","received"))B.a.k(k,B.mt)
if(q.aW("inspector.proclamation","acknowledged"))B.a.k(k,B.mn)
return k},
iG(a){var s=this.eT(),r=A.B(s),q=r.i("I<1>")
s=A.K(new A.I(s,r.i("l(1)").a(new A.rD(a)),q),q.i("r.E"))
return s}}
A.rD.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:43}
A.uk.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hu(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
a.l(0,q,e.lx(q,r.b))}s=A.hu(e.r)
q=A.hu(e.w)
p=A.hu(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.N(n,A.v(n).i("N<1,2>")).gv(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gq()
j.push(A.E(["field",h.a,"value",h.b],c,c))}o.l(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.N(m,A.v(m).i("N<1,2>")).gv(0);m.m();){g=m.d
n.l(0,g.a,g.b.C())}b=A.n(c,b)
for(m=e.ax,m=new A.N(m,A.v(m).i("N<1,2>")).gv(0);m.m();){f=m.d
b.l(0,f.a,f.b.C())}return A.E(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
lx(a,b){var s,r=A.hu(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.hu(q.bs(0,new A.ul(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga5(s))r.l(0,"_ambient",A.hu(s.bs(0,new A.um(),t.S,t.z)))
return r}}
A.ul.prototype={
$2(a,b){return new A.P(A.h(a),t.BX.a(b).C(),t.pr)},
$S:124}
A.um.prototype={
$2(a,b){return new A.P(A.h(a),t.vw.a(b).C(),t.pr)},
$S:125}
A.fq.prototype={
C(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)},
gaX(){return this.a}}
A.fp.prototype={
C(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaX(){return this.a}}
A.j8.prototype={
C(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mf.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].C())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gav(){return this.c}}
A.fg.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"label",r.b)
q.l(0,"reply",r.c)
s=r.d
if(s.ga5(s))q.l(0,"effects",s)
return q},
gE(){return this.a}}
A.dk.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"target",r.b)
q.l(0,"replacement",r.c)
s=r.d
if(s.ga5(s))q.l(0,"when",s)
return q},
gE(){return this.a}}
A.ui.prototype={
oS(){var s,r,q,p,o,n,m,l,k=A.n(t.S,t.r6)
for(s=this.c,r=s.length,q=t.D,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=o.c
m=k.h(0,n)
if(m==null){m=A.c([],q)
k.l(0,n,m)
n=m}else n=m
B.a.k(n,o)}for(l=1;l<=21;++l){s=k.h(0,l)
s=s==null?null:s.length===0
if(s!==!1)throw A.b(A.i("campaign schedule has no event for day "+l))}s=A.a_(t.N)
for(r=k.h(0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p)s.k(0,r[p].b)
if(!s.p(0,"broadcast")||!s.p(0,"visitor"))throw A.b(A.i("day 1 schedule needs broadcast and visitor events"))
s=k.h(0,21)
s.toString
if(!B.a.M(s,new A.uj()))throw A.b(A.i("day 21 schedule needs an ending event"))}}
A.uj.prototype={
$1(a){return t.Dm.a(a).b==="ending"},
$S:126}
A.dP.prototype={
gE(){return this.a},
gav(){return this.c},
gaX(){return this.d}}
A.tk.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.tl.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.f(A.M("screenplay event "+a+" is invalid",null,null))
return s},
$S:27}
A.lP.prototype={
gE(){return this.a},
gav(){return this.b}}
A.lM.prototype={}
A.lN.prototype={
gE(){return this.a}}
A.lO.prototype={
gE(){return this.a}}
A.un.prototype={
be(){var s=0,r=A.aL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$be=A.aM(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.dV().gaZ().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a6(A.av(A.a(A.a(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$be)
case 12:k=a3
s=A.T(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a6(A.av(A.a(k.text()),f),$async$be)
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
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$be)
case 19:j=a3
s=20
return A.a6(A.av(A.a(j.text()),t.N),$async$be)
case 20:m=a3
case 17:i=A.JB(m)
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
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/story_script.json")),t.m),$async$be)
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
return A.a6(A.av(A.a(h.text()),t.N),$async$be)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.G4(a3)
o.ax=f
f.oS()
f=o.ax
f.toString
o.ay=A.EX(f)
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
return A.aK($async$be,r)},
iF(a){var s,r,q,p=this.a
p===$&&A.t()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gN().dz(0,new A.uo())
r=p.$ti
q=t.N
return A.z_(new A.cN(p,r.i("P<e,e>(1)").a(new A.up()),r.i("cN<1,P<e,e>>")),q,q)}return null},
eU(a,b){var s=this.iF(a)
return s==null?null:s.h(0,b)},
iJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.t()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.O(q),n=t.N;o.m();){m=o.gq()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.n(n,n)
if(f.b(l))for(j=l.gN(),j=j.gv(j);j.m();){i=j.gq()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.l(0,h,A.u(i.b))}B.a.k(p,new A.fg(A.u(m.h(0,"id")),A.u(m.h(0,"label")),A.u(m.h(0,"reply")),A.aW(k,n,n)))}if(p.length<2)return g
return new A.mf(r,a,b,c,d,A.ad(p,t.Y))},
iI(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.t()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aC(p)||o!==B.b.aC(o))return n
return new A.fq(B.b.aC(p),B.b.aC(o))},
iH(a,b){var s,r,q,p,o,n,m=null,l=this.b
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
return new A.fp(B.b.aC(p),o,n)},
oW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.t()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gv(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gN(),o=o.gv(o);o.m();){m=o.gq()
l=m.a
k=typeof l=="string"?A.dL(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gN(),m=m.gv(m);m.m();){l=m.gq()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.u(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a6.l(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("bV<1>"),l=new A.bV(n,n.r,n.e,m);l.m();){i=l.d
g=a1.iI(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a7.l(0,o,h)
f=A.n(a3,s)
for(m=new A.bV(n,n.r,n.e,m);m.m();){l=m.d
e=a1.iH(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a8.l(0,o,f)}b4=a1.Q
b4===$&&A.t()
b4=new A.ae(b4,b4.r,b4.e,A.v(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.iJ(A.u(d.h(0,"visitor")),B.b.aC(A.a1(d.h(0,"day"))),A.u(d.h(0,"tier")),B.b.aC(A.a1(d.h(0,"ordinal"))))
if(c!=null)b1.l(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.t()
b4=new A.ae(b4,b4.r,b4.e,A.v(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.l(0,o,A.u(r.b))}s=A.u(d.h(0,"id"))
b2.l(0,s,new A.dk(s,A.u(d.h(0,"target")),A.u(d.h(0,a2)),A.aW(b,a5,a5)))}b4=a1.at
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
for(m=J.O(d);m.m();){a0=m.gq()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.j8(A.u(a0.h(0,"field")),A.u(a0.h(0,"value"))))}if(o.length!==0)b0.l(0,p.a,o)}return new A.uk(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.uo.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:128}
A.up.prototype={
$1(a){t.AC.a(a)
return new A.P(A.u(a.a),A.u(a.b),t.q)},
$S:129}
A.k9.prototype={
bR(a,b,c){var s=B.c.aP(a),r=B.c.aP(c)
if(r.length===0)return""
if(b||this.a===B.cf)return s.length===0?r:s+": "+r
if(this.a===B.ce)return r
return s.length===0?r:s+": "+r},
hT(a,b){return this.bR(a,!1,b)}}
A.yP.prototype={}
A.d_.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.ea.prototype={
cc(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.ea(q,p,o,n,m)},
my(a){var s=null
return this.cc(s,s,s,a,s)},
mE(a){var s=null
return this.cc(s,s,s,s,a)},
mu(a){var s=null
return this.cc(s,s,a,s,s)},
ms(a){var s=null
return this.cc(s,a,s,s,s)},
m9(a){var s=null
return this.cc(a,s,s,s,s)},
C(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nC.prototype={
$1(a){return a==null?null:A.T(a)},
$S:130}
A.nA.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:44}
A.nB.prototype={
$0(){return A.f(B.ix)},
$S:7}
A.nN.prototype={
bZ(a,b){var s,r=this,q=r.e.hT(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aL(q)
A.h(A.a(v.G.window).setTimeout(A.Cz(new A.nP(r)),7000))},
aL(a){var s,r,q=this
if(!q.c||B.c.aP(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.h(A.a(v.G.window).setTimeout(A.Cz(new A.nO(q,s)),4200))}}
A.nP.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:132}
A.nO.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.nT.prototype={
os(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cG.prototype={
B(){return"AudioOutputMode."+this.b}}
A.d0.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.du.prototype={
B(){return"AudioReverbMode."+this.b}}
A.dt.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.ec.prototype={
cX(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.ec(r,q,p,a==null?s.e:a)},
mq(a){return this.cX(null,null,a,null)},
mg(a){return this.cX(null,a,null,null)},
mw(a){return this.cX(null,null,null,a)},
mf(a){return this.cX(a,null,null,null)},
C(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.o2.prototype={
$1$2(a,b,c){return B.a.b5(c.i("r<0>").a(a),new A.o3(b,c),new A.o4(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:133}
A.o3.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.o4.prototype={
$0(){return A.f(A.M("unsupported audio option: "+A.y(this.a),null,null))},
$S:7}
A.ov.prototype={
oO(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.R.hT(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.oy.prototype={
$1(a){return this.a.$0()},
$S:2}
A.oC.prototype={
$1(a){return this.a.$1(A.T(this.b.checked))},
$S:2}
A.oB.prototype={
$1(a){var s=A.fd(A.u(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.oA.prototype={
$1(a){A.u(a)
return a.length!==0&&!B.c.V(a,"brush-state-")},
$S:3}
A.ej.prototype={
B(){return"BrushComponentKind."+this.b}}
A.ek.prototype={
B(){return"BrushComponentState."+this.b}}
A.bo.prototype={
glC(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
A(){var s=this
if(B.c.aP(s.a).length===0||B.c.aP(s.c).length===0)throw A.b(B.ig)
if(s.e===B.cq&&s.b!==B.cp)throw A.b(B.hy)},
gE(){return this.a}}
A.oE.prototype={
n6(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.n(a>=r+c?q.e=a-c+1:r,0,s)},
dB(a,b){if(b<=0){this.f=0
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
this.fF(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fF(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aU(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,c,d,e,!0,f,g,h,i)},
mV(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,14,c,d,e,f,g,h,i)},
n_(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.t()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eI()
s.c0(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.az()-0.5)*8
l=s.az()
k=s.az()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hE(a,b,c,d,e){var s,r,q=this.b
q===$&&A.t()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fE(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fE(0,0,c)
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
mY(a,b,c){var s,r,q,p
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
mX(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
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
d=d4.goH()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lz(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bc(i,0,new A.oF(c7),t.i)
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
c7.n6(d1==null?0:d1,c,a6)
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
B.a.k(f,new A.fT("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aU(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hE(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bx(b1,g),c1+22,b3)
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
B.a.k(c7.d,new A.fT("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aU("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
n0(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.K7(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
this.aU("#f5f0e6",1.2,7,"rgba(12, 10, 14, 0.92)",d,-0.055,e,c,b)
s=isFinite(a1)?B.b.n(a1,-30,50):0
r=s>=0?"+":""
q=B.b.F(s,0)
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
mW(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(a3===0)return
s=a6<640
r=s?Math.min(2,a3):a3
q=s?8:12
p=s?8:0
o=s?Math.min(140,(a6-32-q)/r):140
for(n=o-18,m=a6*0.5,l=o*0.5,k=o+q,j=a5-32,i=B.d.b9(a3+r-1,r)-1,h=28+p,g=0;g<a3;++g){f=B.d.b9(g,r)
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
a1.fillText(this.bx("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
mZ(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
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
c3.n_(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.ap[g]
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
d2.fillText(d5.e.gmS().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bx(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbq()
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
if(e)c3.hE(!0,g+1,20,b3-j+20,b2)
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
d2.fillText(c3.bx(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
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
c3.mV(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.geg(),c,b2)}else{b8=b5-80-80
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
d2.fillText(B.b.F(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.b.F(b0.r,1),b8+80+4,b2)
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 13px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(b0.geg(),b5,b2)}d2.restore()}d2.restore()
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
else{if(c1.Q===B.z)m="LIVE \u2022 REQUESTED "+c1.gne()+" \u2022 EFFECTIVE "+c1.geg()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bx(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
fF(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.t()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fE(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.t()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lz(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a1(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bx(a,b){var s,r,q,p
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
A.oF.prototype={
$2(a,b){var s
A.aB(a)
A.u(b)
s=this.a.b
s===$&&A.t()
return Math.max(a,A.a1(A.a(s.measureText(b)).width))},
$S:134}
A.fY.prototype={
glU(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
r=r.b
p=J.aQ(r)
o.l(0,q,p.gP(r)?"":p.ga1(r))}return o},
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
A.aB(r)
q=n.h(0,i)
q.toString
A.aB(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
return A.fZ(null,a,A.T(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.aB(r)
q=n.h(0,i)
q.toString
A.aB(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
A.T(m)
l=k.glU()
return A.fZ(l,null,m,r,p,o,s,q)},
eb(a){var s=null
return this.bM(a,s,s,s,s,s)},
mm(a){var s=null
return this.bM(s,s,s,a,s,s)},
mn(a){var s=null
return this.bM(s,s,s,s,a,s)},
mj(a){var s=null
return this.bM(s,a,s,s,s,s)},
mk(a){var s=null
return this.bM(s,s,a,s,s,s)},
mF(a){var s=null
return this.bM(s,s,s,s,s,a)},
A(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.h9)
p=this.r
if(p.gN().M(0,new A.oU()))throw A.b(B.ip)
if(p.gN().M(0,new A.oV()))throw A.b(B.hV)
p=p.gak()
o=A.v(p)
s=o.i("ii<r.E,e>")
r=s.i("I<r.E>")
q=A.K(new A.I(new A.ii(p,o.i("r<e>(r.E)").a(new A.oW()),s),s.i("l(r.E)").a(new A.oX()),r),r.i("r.E"))
if(A.he(q,A.B(q).c).a!==q.length)throw A.b(B.he)},
C(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gN(),s=s.gv(s);s.m();){r=s.gq()
o.l(0,r.a,A.aG(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.oU.prototype={
$1(a){t.yx.a(a)
return J.k7(a.b,new A.oT(a))},
$S:45}
A.oT.prototype={
$1(a){var s
A.u(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.Az(a)
else s=!1
return s},
$S:3}
A.oV.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.k7(a.b,B.e0.gaE(B.e0))},
$S:45}
A.oW.prototype={
$1(a){return t.a.a(a)},
$S:136}
A.oX.prototype={
$1(a){return A.u(a).length!==0},
$S:3}
A.oS.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ei.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.eY.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.dv.prototype={}
A.ku.prototype={
c9(a){var s=this
if(!s.a.r.K(a))return new A.dv(B.cm,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eO},
m0(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b2
if(!A.Az(a)){p.c=p.b=null
return new A.dv(B.co,B.e1.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gN()
r=r.gv(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gq()
s=q.a
if(s===o)break A
if(J.An(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dv(B.b3,a+" is already bound to "+s)}return p.jK(a)},
cq(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b2
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eP
case 1:s=A.zr(m.a.r)
r=s.h(0,l)
r.toString
s.l(0,l,A.zM(r,k))
r=s.h(0,j)
r.toString
s.l(0,j,A.A0(r,k))
m.a=m.a.eb(s)
break
case 0:s=A.zr(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga1(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.hv(p,1,null,A.B(p).c)
o=p.$ti
p=new A.al(p,p.gu(0),o.i("al<a0.E>"))
o=o.i("a0.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.l(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.A0(r,k)}else{r=s.h(0,j)
r.toString
r=A.zM(A.A0(r,k),q)}s.l(0,j,r)
m.a=m.a.eb(s)
break}m.c=m.e=m.d=null
return B.ck},
jK(a){var s,r,q=this,p=q.b
if(p==null)return B.b2
s=A.zr(q.a.r)
r=s.h(0,p)
r.toString
s.l(0,p,A.zM(r,a))
q.a=q.a.eb(s)
q.b=null
return B.ck}}
A.ic.prototype={
ju(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.ku(f.w)
s=f.b
s.className=A.u(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.oz(a,B.eY,1)))
A.a(s.appendChild(A.F(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.F(a,"div",c,e)
f.ff(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.ff(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dJ(a,r,"invertX","Invert horizontal look")
f.dJ(a,r,"invertY","Invert vertical look")
f.dJ(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.F(a,"div",c,e)
for(p=B.lg.gN(),p=p.gv(p),o=f.Q;p.m();){n=p.gq()
m=n.a
l=A.fZ(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.k8(l)?"unbound":J.Ap(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.el(a,new A.bo("settings.controls.bind."+m,B.cp,n,h,B.p),new A.oQ(f,m),k)
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
f.e2()
A.a(s.appendChild(A.el(a,B.eZ,new A.oR(f),e)))},
ia(a){var s=this.x
s===$&&A.t()
if(s.b==null)return
a.preventDefault()
this.fI(this.x.m0(A.u(a.code)))},
fI(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b3?B.f2:B.p
p=o.Q.h(0,r)
if(p!=null)A.yR(p,q)}n=a.a
if(n===B.b3)o.li()
else if(n===B.cn){n=o.x
n===$&&A.t()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.e2()}else{o.dM()
o.ax=null}},
li(){var s,r,q,p,o
this.dM()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jW[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.el(p,new A.bo("settings.controls.resolve."+o,B.J,o,"resolve key binding conflict",B.p),new A.oP(this,q),null)))}},
dM(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
e2(){var s,r,q,p
for(s=this.Q,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.t()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.k8(p)?"unbound":J.Ap(p," / ")
r.textContent=q
A.yR(r,B.p)}},
ff(a,b,c,d,e,f){var s,r=A.F(a,"label","setting-row",null)
A.a(r.appendChild(A.F(a,"span",null,d)))
s=A.Ek(a,new A.bo("settings.controls."+c,B.f0,d,null,B.p),f,e,new A.oN(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.l(0,c,s)},
dJ(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.El(a,new A.bo("settings.controls."+c,B.f1,d,null,B.p),!1,new A.oO(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.l(0,c,r)},
fG(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sex(a){this.f=t.pf.a(a)},
sbf(a){this.r=t.Z.a(a)}}
A.oQ.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.t()
s=n.c9(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cl){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.yR(q,B.cq)}p.dM()
return null},
$S:0}
A.oR.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.oP.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.t()
return s.fI(r.cq(this.b))},
$S:0}
A.oN.prototype={
$1(a){var s=this.a,r=s.w
s.fG(this.b==="horizontalSensitivity"?r.mk(a):r.mF(a))},
$S:137}
A.oO.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mm(a)
break A}if("invertY"===q){s=r.w.mn(a)
break A}s=r.w.mj(a)
break A}r.fG(s)},
$S:10}
A.oY.prototype={
jv(a){var s,r,q,p=this,o=p.b
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
q.addEventListener("click",A.Z(new A.oZ(p)))
A.a(o.appendChild(q))}}
A.oZ.prototype={
$1(a){return this.a.ah()},
$S:2}
A.p5.prototype={
jx(a){var s,r,q=this,p=null,o="div",n=q.a
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
s.addEventListener("click",A.Z(new A.p6(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.p7(q,a)))
A.a(A.G(a.body).appendChild(n))},
f1(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.t()
s.textContent=a
s=r.c
s===$&&A.t()
s.textContent=B.R.bR("",!0,b)
s=r.d
s===$&&A.t()
s.textContent=A.AC(B.bm)
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
f2(a,b){var s,r=this,q=r.c
q===$&&A.t()
q.textContent=B.R.bR("",!0,a)
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
j4(a){return this.f2(a,!1)},
j6(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.t()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.w)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.t()
s.textContent=A.AC(r)},
f3(a,b){var s=this.c
s===$&&A.t()
s.textContent=B.R.bR("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.t()
s.textContent=""
s=this.e
s===$&&A.t()
A.a(s.style).display=""},
j3(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.t()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.w)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.a(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Z(new A.p8(p,this)))
A.a(s.appendChild(n))}},
i0(){var s,r=this
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
snR(a){this.w=t.Z.a(a)},
snQ(a){this.x=t.vR.a(a)}}
A.p6.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:35}
A.p7.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.u(a.code)!=="Tab")return
r=A.c([],t.W)
q=s.e
q===$&&A.t()
if(A.u(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.t()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.h(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.k(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.T(a.shiftKey)){if(m===B.a.ga1(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga6(r).focus()}}else if(m===B.a.ga6(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga1(r).focus()}},
$S:140}
A.p8.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:35}
A.pb.prototype={
jy(a){var s,r,q,p,o=this,n=o.b
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
p.addEventListener("click",A.Z(new A.pc(o)))
A.a(n.appendChild(p))},
j5(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.t()
s.textContent=a.a.b
s=m.r
s===$&&A.t()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.w)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bT()},
snV(a){this.w=t.Z.a(a)}}
A.pc.prototype={
$1(a){var s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.pF.prototype={
bG(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aG(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
O(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
oN(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
nj(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.ho()
return!0}return!1}if(a==="Space"){s=B.a.er(l,new A.pG())
if(s!==-1){n.cA(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.R(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.R(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cA(q)
return!0}}if(B.c.V(a,"Digit")){p=A.dL(B.c.aQ(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.V(a,"Numpad")){p=A.dL(B.c.aQ(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cA(o)
return!0}return!1},
cA(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
ho(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
nk(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.ho()
return!0}this.cA(a.b)
return!0},
snP(a){this.y=t.dt.a(a)},
snU(a){this.z=t.Z.a(a)}}
A.pG.prototype={
$1(a){A.u(a)
return B.c.p(a.toLowerCase(),"silent")||B.c.p(a,"...")},
$S:3}
A.pH.prototype={}
A.dD.prototype={
B(){return"GameplayInteractionMode."+this.b}}
A.d2.prototype={
B(){return"GameplayPromptDensity."+this.b}}
A.d3.prototype={
B(){return"GameplayTextPacing."+this.b}}
A.dE.prototype={
B(){return"GameplayJournalLayout."+this.b}}
A.dC.prototype={
B(){return"GameplayConfirmationLevel."+this.b}}
A.dF.prototype={
B(){return"GameplaySaveFeedback."+this.b}}
A.cn.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.dB.prototype={
B(){return"GameplayClockFormat."+this.b}}
A.h5.prototype={
aT(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.yS(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
mB(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,a,s)},
mA(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,a,s,s)},
mc(a){var s=null
return this.aT(s,s,a,s,s,s,s,s,s,s,s)},
ml(a){var s=null
return this.aT(s,s,s,s,a,s,s,s,s,s,s)},
mt(a){var s=null
return this.aT(s,s,s,s,s,s,a,s,s,s,s)},
mC(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,s,a)},
mo(a){var s=null
return this.aT(s,s,s,s,s,a,s,s,s,s,s)},
mb(a){var s=null
return this.aT(s,a,s,s,s,s,s,s,s,s,s)},
mx(a){var s=null
return this.aT(s,s,s,s,s,s,s,a,s,s,s)},
ma(a){var s=null
return this.aT(a,s,s,s,s,s,s,s,s,s,s)},
mh(a){var s=null
return this.aT(s,s,s,a,s,s,s,s,s,s,s)},
C(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pI.prototype={
$1$2(a,b,c){var s
A.Dd(c,t.Ct,"T","call")
c.i("r<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.M("invalid gameplay setting: "+a,null,null))
return B.a.b5(b,new A.pJ(s,c),new A.pK(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:141}
A.pJ.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pK.prototype={
$0(){return A.f(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cI.prototype={
B(){return"GraphicsPreset."+this.b}}
A.dG.prototype={
b2(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dG(s.a,r,q,p,o,n,m,l,k,j,i)},
ea(a){var s=null
return this.b2(a,s,s,s,s,s,s,s,s,s)},
hz(a){var s=null
return this.b2(s,s,a,s,s,s,s,s,s,s)},
hA(a){var s=null
return this.b2(s,s,s,s,s,s,a,s,s,s)},
mp(a){var s=null
return this.b2(s,s,s,s,a,s,s,s,s,s)},
mv(a){var s=null
return this.b2(s,s,s,s,s,s,s,a,s,s)},
mi(a){var s=null
return this.b2(s,s,s,a,s,s,s,s,s,s)},
mD(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,s,a)},
mr(a){var s=null
return this.b2(s,s,s,s,s,a,s,s,s,s)},
me(a){var s=null
return this.b2(s,a,s,s,s,s,s,s,s,s)},
mz(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,a,s)},
A(){var s=this,r=null,q=s.c
if(!B.a.p(B.kO,q))throw A.b(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.k2,q))throw A.b(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.kS,q))throw A.b(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.kK,q))throw A.b(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.l0,q))throw A.b(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.kR,q))throw A.b(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.kT,q))throw A.b(A.M("unsupported graphics shadow quality: "+q,r,r))},
C(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.pW.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:47}
A.pX.prototype={
$0(){return A.f(B.hI)},
$S:7}
A.pY.prototype={
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)}}
A.pO.prototype={}
A.pP.prototype={}
A.iq.prototype={
jz(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
h.setAttribute("aria-label","Graphics settings")
A.a(h.appendChild(A.F(a,"h1","journal-title","Graphics")))
A.a(h.appendChild(A.F(a,"p",k,"Choose a visual budget without changing simulation truth.")))
s=A.F(a,"div","settings-grid",l)
r=t.N
m.bi(a,s,"preset","quality preset",A.E(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
m.bi(a,s,"renderScale","render scale",A.E(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
m.bi(a,s,"frameTarget","frame target",A.E(["30","30 fps","60","60 fps","display","Display rate"],r,r))
m.bi(a,s,"antialiasing","anti-aliasing",A.E(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
m.bi(a,s,"textureQuality","texture quality",A.E(["high","High","medium","Medium","low","Low"],r,r))
m.bi(a,s,"outputEncoding","output encoding",A.E(["srgb","sRGB display","linear","Linear light"],r,r))
m.bi(a,s,"diagnosticLevel","renderer diagnostics",A.E(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
m.bi(a,s,"shadowQuality","shadow allocation",A.E(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.F(a,"label",j,l)
r=A.a(a.createElement("input"))
m.y=r
r.type="checkbox"
r=m.y
r.toString
r.addEventListener("change",A.Z(new A.pS(m)))
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
r.addEventListener("change",A.Z(new A.pT(m)))
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
o.addEventListener("click",A.Z(new A.pU(m)))
A.a(h.appendChild(o))
n=A.F(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Z(new A.pV(m)))
A.a(h.appendChild(n))},
bi(a,b,c,d,e){var s,r,q,p,o
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
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.pR(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.x.l(0,c,r)},
dW(a){var s
a.A()
this.as=a
s=this.f
if(s!=null)s.$1(a)},
cB(a,b,c){var s,r,q=this
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
sex(a){this.f=t.CA.a(a)},
so0(a){this.r=t.Z.a(a)},
sbf(a){this.w=t.Z.a(a)}}
A.pS.prototype={
$1(a){var s=this.a
s.dW(s.as.hz(A.T(s.y.checked)))},
$S:1}
A.pT.prototype={
$1(a){var s=this.a
s.dW(s.as.mp(A.T(s.z.checked)))},
$S:1}
A.pU.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.pV.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.ah()},
$S:1}
A.pR.prototype={
$1(a){var s,r=A.u(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.hA(B.a.an(B.df,new A.pQ(r)))
break A}if("renderScale"===p){s=q.as.mv(r)
break A}if("frameTarget"===p){s=q.as.mi(r)
break A}if("antialiasing"===p){s=q.as.ea(r)
break A}if("textureQuality"===p){s=q.as.mD(r)
break A}if("outputEncoding"===p){s=q.as.mr(r)
break A}if("diagnosticLevel"===p){s=q.as.me(r)
break A}if("shadowQuality"===p){s=q.as.mz(r)
break A}s=q.as
break A}q.dW(s)},
$S:1}
A.pQ.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:47}
A.ka.prototype={
B(){return"ActiveGuiPanel."+this.b}}
A.ck.prototype={}
A.pZ.prototype={
iE(a,b,c){if(c)return B.kj
if(b&&a!=null)return A.c([new A.ck("E","Examine "+a,!0),new A.ck("TAB","Journal",!1),new A.ck("CAPS","Shader Lab",!1)],t.sa)
return B.lb}}
A.q_.prototype={
jA(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.F(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.F(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.F(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.F(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.q0(this)))
A.a(p.appendChild(r))}}
A.q0.prototype={
$1(a){return this.a.ah()},
$S:2}
A.qy.prototype={
bT(){var s,r=this
r.jo()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fm(r.CW,s)
r.l7()
r.h_()},
jQ(){var s,r=this,q=r.a,p=A.F(q,"div","page-turn",null),o=A.F(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.qz(r)))
s=A.F(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.qA(r)))
q=A.F(q,"span","right-day-label",null)
r.Q!==$&&A.b6()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
hg(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fm(s.CW+a,r)
s.h_()},
fm(a,b){if(a<1)return 1
if(a>b)return b
return a},
l7(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.t()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.t()
s.textContent=""
for(s=l.w.eV(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=B.a.ga6(o.c).t(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Z(new A.qB(l,o,m)))
A.a(k.appendChild(m))}},
h_(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.t()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.v(p).i("ae<2>"),n=new A.ae(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.qC())
j.fZ(i,r)
i=j.Q
i===$&&A.t()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.t()
s=A.c([],s)
for(r=new A.ae(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.qD())
j.fZ(i,s)
k=B.b.n(q.f/4,0,1)
i=j.as
i===$&&A.t()
A.a(i.style).setProperty("width",B.b.F(k*100,1)+"%")},
fZ(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.w)(b),++r)A.a(a.appendChild(this.km(b[r])))},
km(a){var s,r,q,p,o,n=A.F(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.fN(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fN(p,!1)
o.className=A.u(o.className)+" margin"
A.a(n.appendChild(o))}return n},
fN(a,b){var s=b?"hand-line struck":"hand-line",r=A.F(this.a,"div",s,a.t(0))
A.a(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.qz.prototype={
$1(a){return this.a.hg(-1)},
$S:2}
A.qA.prototype={
$1(a){return this.a.hg(1)},
$S:2}
A.qB.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qC.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.qD.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:17}
A.dc.prototype={}
A.fT.prototype={
gE(){return this.a}}
A.rr.prototype={
goH(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.J(s,0,B.b.aC(B.b.n(r*q,0,r)))}}
A.iJ.prototype={
b_(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.G(this.a.body).appendChild(s))},
bT(){var s,r,q,p,o=this,n=o.b
if(B.c.p(A.u(n.className),"open"))return
s=$.rs
if(s!=null&&s!==o)s.ah()
$.rs=o
r=o.a
o.d=A.G(r.activeElement)
A.qv(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.gkX())
o.e=q
r.addEventListener("keydown",q)
p=A.Cx(n)
if(p.length!==0)B.a.ga1(p).focus()
else n.focus()},
ah(){var s,r,q=this,p=q.b
if(!B.c.p(A.u(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.rs===q)$.rs=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
ia(a){},
kY(a){A.a(a)
this.ia(a)
if(A.T(a.defaultPrevented))return
if(A.u(a.code)==="Escape"){a.preventDefault()
this.ah()
return}if(A.u(a.code)==="Tab")this.lp(a)},
lp(a){var s,r=A.Cx(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.T(a.shiftKey)){if(s===B.a.ga1(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga6(r).focus()}}else if(s===B.a.ga6(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga1(r).focus()}},
sb7(a){this.c=t.Z.a(a)}}
A.bB.prototype={
B(){return"PauseReason."+this.b}}
A.cq.prototype={
B(){return"PausePage."+this.b}}
A.ex.prototype={
B(){return"PauseTransitionKind."+this.b}}
A.dJ.prototype={
C(){var s,r=A.n(t.N,t.X)
r.l(0,"page",this.a.b)
r.l(0,"reason",this.b.b)
s=this.c
if(s!=null)r.l(0,"focusId",s)
return r},
aa(a,b){if(b==null)return!1
return b instanceof A.dJ&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.ew.prototype={
ght(){var s=this.a
return s.length===1&&B.a.ga1(s).a===B.bG},
C(){var s=A.n(t.N,t.X),r=this.a,q=A.B(r),p=q.i("H<1,Y<e,L?>>")
r=A.K(new A.H(r,q.i("Y<e,L?>(1)").a(new A.rx()),p),p.i("a0.E"))
r.$flags=1
s.l(0,"pages",r)
r=this.b
q=A.B(r)
p=q.i("H<1,e>")
r=A.K(new A.H(r,q.i("e(1)").a(new A.ry()),p),p.i("a0.E"))
s.l(0,"modalReasons",r)
r=this.c
if(r!=null)s.l(0,"restoreFocusId",r)
return s}}
A.rx.prototype={
$1(a){return t.oP.a(a).C()},
$S:143}
A.ry.prototype={
$1(a){return t.wJ.a(a).b},
$S:144}
A.c8.prototype={}
A.rw.prototype={
ib(a){var s,r=this
if(r.a.ght())return new A.c8(B.a5,r.a,null)
s=r.a
s=new A.ew(B.kM,s.b,a)
r.a=s
return new A.c8(B.dL,s,"pause.resume")},
lP(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga6(p)
q=r.a.a
q=B.a.aD(q,0,q.length-1)
p=r.a
p=new A.ew(q,p.b,p.c)
r.a=p
return new A.c8(B.dM,p,s.c)}if(q.ght()&&r.a.b.length===0)return r.cr()
return new A.c8(B.a5,r.a,null)},
cr(){var s=this.a
if(s.a.length===0)return new A.c8(B.a5,s,null)
if(s.b.length!==0)return new A.c8(B.a5,s,null)
this.a=B.bF
return new A.c8(B.dN,B.bF,s.c)},
ob(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.c8(B.a5,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.ew(s.a,r,q.a.c)
q.a=s
return new A.c8(B.dL,s,null)},
mR(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.c8(B.a5,o.a,null)
s=o.a
r=s.b
q=A.B(r)
p=q.i("I<1>")
r=A.K(new A.I(r,q.i("l(1)").a(new A.rz(a)),p),p.i("r.E"))
q=o.a.c
r=new A.ew(s.a,r,q)
o.a=r
return new A.c8(B.mm,r,q)},
ke(a){var s
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
A.rz.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:145}
A.cQ.prototype={
B(){return"PauseRootAction."+this.b}}
A.rA.prototype={
bu(a,b,c,d){var s=B.lu.h(0,c)
s.toString
A.a(b.appendChild(A.el(a,new A.bo(s,B.J,d,null,B.p),new A.rB(this,c),null)))},
so6(a){this.f=t.Z.a(a)},
so8(a){this.r=t.Z.a(a)},
snS(a){this.w=t.Z.a(a)},
so7(a){this.x=t.Z.a(a)},
snY(a){this.y=t.Z.a(a)},
snT(a){this.z=t.Z.a(a)},
sbf(a){this.Q=t.Z.a(a)}}
A.rB.prototype={
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
A.rW.prototype={
j2(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.R.bR("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.tn.prototype={
jC(a){var s,r,q,p,o,n=this.b
n.className=A.u(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.oz(a,B.eX,1)))
A.a(n.appendChild(A.F(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.F(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.kk[r]
p=B.du.h(0,q)
p.toString
o=B.dt.h(0,q)
o.toString
A.a(s.appendChild(A.el(a,new A.bo(o,B.J,p,p+" settings",B.p),new A.to(this,q),null)))}A.a(s.appendChild(A.el(a,B.eW,new A.tp(this),null)))
A.a(n.appendChild(s))},
snO(a){this.f=t.hQ.a(a)},
sbf(a){this.r=t.Z.a(a)}}
A.to.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.tp.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hr.prototype={
jD(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.du.h(0,d))+" settings",a=h.b
a.className=A.u(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.oz(a0,new A.bo("settings."+(s==null?f:s)+".heading",B.aE,b,g,B.p),2)))
A.a(a.appendChild(A.F(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.F(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.tO(h)),p=B.a.gv(B.F),o=t.xG,q=new A.W(p,q,o);q.m();){n=p.gq()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.kD(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.F(a0,"div",e,g)
for(s=s.a(new A.tP(h)),q=B.a.gv(B.F),o=new A.W(q,s,o);o.m();)A.a(j.appendChild(h.lo(a0,q.gq())))
A.a(a.appendChild(j))
if(d===B.M)A.a(a.appendChild(h.jO(a0)))
if(d===B.N)A.a(a.appendChild(h.jN(a0)))
if(d===B.a4)A.a(a.appendChild(h.jP(a0)))
i=A.F(a0,"div",e,g)
for(s=t.pz.a(h.gkv()),q=B.a.gv(B.kP),s=new A.W(q,s,t.rt);s.m();){p=q.gq()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.el(a0,new A.bo("settings."+o+".reset."+n,B.J,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.tQ(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.el(a0,new A.bo("settings."+(s==null?f:s)+".reset.all",B.J,"reset all settings","restore all settings to defaults",B.f3),new A.tR(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.el(a0,new A.bo("settings."+(d==null?f:d)+".back",B.J,"return","return to settings categories",B.p),new A.tS(h),g)))},
jN(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.F(a,"div","settings-grid",j),f=k.dI(a,g,"reducedMotion","reduced motion (system default)"),e=k.dI(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dI(a,g,"captions","non-speech captions"),c=A.F(a,"label",h,j)
A.a(c.appendChild(A.F(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.tG(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.F(a,"label",h,j)
A.a(r.appendChild(A.F(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.by[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.Z(new A.tH(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.F(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.tI(k)))
A.a(g.appendChild(l))
k.ok.L(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.l(0,"screenReaderVerbosity",q)
return g},
dI(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.tq(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eX(a){var s,r
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
s.value=(r==null?B.ag:r).b}},
jP(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.F(a,"div","settings-grid",l)
m.bh(a,g,"interactionMode","interaction mode",B.bx,t.bK)
m.bh(a,g,"promptDensity","prompt density",B.bA,t.dn)
m.bh(a,g,"textPacing","text pacing",B.bz,t.j_)
m.bh(a,g,"journalLayout","journal layout",B.br,t.gm)
m.bh(a,g,k,k,B.bl,t.aJ)
m.bh(a,g,"saveFeedback","save feedback",B.bs,t.mx)
m.bh(a,g,"focusLossBehavior","when the window loses focus",B.aN,t.x)
m.bh(a,g,"clockFormat","clock format",B.bo,t.vS)
s=A.F(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.Z(new A.tJ(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.F(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Z(new A.tK(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.F(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.F(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Z(new A.tL(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.F(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bh(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Dd(f,t.Ct,"T","_addGameplaySelect")
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
A.a(r.appendChild(n))}r.addEventListener("change",A.Z(new A.tE(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.l(0,c,r)},
iN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
jO(a){var s,r,q=this,p=A.F(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.bw[s].b
n.l(0,r,r)}q.cC(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.bq[s].b
n.l(0,r,r)}q.cC(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.bp[s].b
n.l(0,r,r)}q.cC(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.bn[s].b
o.l(0,n,n)}q.cC(a,p,"ducking","voice intelligibility",o)
return p},
cC(a,b,c,d,e){var s,r,q,p,o
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
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.tv(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.l(0,c,r)},
iM(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fL(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a3===r){s=a.c===B.aV
break A}if(B.N===r){s=a.c===B.a9
break A}if(B.M===r){s=a.c===B.I
break A}s=!1
break A}return s},
kw(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a3===s){r=a===B.aV
break A}if(B.N===s){r=a===B.a9
break A}if(B.M===s){r=a===B.I
break A}r=!1
break A}return r},
lo(a,b){var s=this,r=A.F(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.tN(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.F(a,"span",null,b.b)))
return r},
kD(a,b,c,d,e){var s,r,q=this,p=A.F(a,"label","setting-row",null),o=A.F(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.F(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.tM(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.l(0,b,n)
q.db.l(0,b,r)
q.dx.l(0,b,new A.a5(e,d))
return p},
f_(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.mI
r=B.b.n(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.aB(r*100)+"%"},
so_(a){this.r=t.DI.a(a)},
so2(a){this.w=t.xl.a(a)},
so1(a){this.x=t.xl.a(a)},
snW(a){this.y=t.DI.a(a)},
snZ(a){this.z=t.xl.a(a)},
soa(a){this.Q=t.xl.a(a)},
so5(a){this.as=t.Ci.a(a)},
so4(a){this.at=t.Z.a(a)},
sbf(a){this.ax=t.Z.a(a)},
snN(a){this.ay=t.kC.a(a)},
snX(a){this.ch=t.hq.a(a)},
snM(a){this.CW=t.Cv.a(a)},
so3(a){this.cx=t.Z.a(a)}}
A.tO.prototype={
$1(a){t.gl.a(a)
return a.d===B.X&&this.a.fL(a)},
$S:28}
A.tP.prototype={
$1(a){t.gl.a(a)
return a.d===B.au&&this.a.fL(a)},
$S:28}
A.tQ.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.tR.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.tS.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ah()},
$S:0}
A.tG.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fd(A.u(this.b.value))
r=r.mE(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tH.prototype={
$1(a){var s=this.a,r=s.k4.my(B.a.an(B.by,new A.tF(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tF.prototype={
$1(a){return t.mq.a(a).b===A.u(this.a.value)},
$S:44}
A.tI.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.tq.prototype={
$1(a){var s,r=A.T(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.mu(r)
break A}if("photosensitivitySafe"===p){s=q.k4.ms(r)
break A}if("captions"===p){s=q.k4.m9(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.tJ.prototype={
$1(a){var s=this.a,r=s.k3.mc(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tK.prototype={
$1(a){var s=this.a,r=s.k3.mA(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tL.prototype={
$1(a){var s=this.a,r=s.k3.mB(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tE.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.ml(B.a.an(B.bx,new A.tw(r.c)))
break A}if("promptDensity"===p){s=q.k3.mt(B.a.an(B.bA,new A.tx(r.c)))
break A}if("textPacing"===p){s=q.k3.mC(B.a.an(B.bz,new A.ty(r.c)))
break A}if("journalLayout"===p){s=q.k3.mo(B.a.an(B.br,new A.tz(r.c)))
break A}if("confirmations"===p){s=q.k3.mb(B.a.an(B.bl,new A.tA(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mx(B.a.an(B.bs,new A.tB(r.c)))
break A}if("clockFormat"===p){s=q.k3.ma(B.a.an(B.bo,new A.tC(r.c)))
break A}s=q.k3.mh(B.a.an(B.aN,new A.tD(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tw.prototype={
$1(a){return t.bK.a(a).b===A.u(this.a.value)},
$S:148}
A.tx.prototype={
$1(a){return t.dn.a(a).b===A.u(this.a.value)},
$S:149}
A.ty.prototype={
$1(a){return t.j_.a(a).b===A.u(this.a.value)},
$S:150}
A.tz.prototype={
$1(a){return t.gm.a(a).b===A.u(this.a.value)},
$S:151}
A.tA.prototype={
$1(a){return t.aJ.a(a).b===A.u(this.a.value)},
$S:152}
A.tB.prototype={
$1(a){return t.mx.a(a).b===A.u(this.a.value)},
$S:153}
A.tC.prototype={
$1(a){return t.vS.a(a).b===A.u(this.a.value)},
$S:154}
A.tD.prototype={
$1(a){return t.x.a(a).b===A.u(this.a.value)},
$S:48}
A.tv.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.mq(B.a.an(B.bw,new A.tr(r.c)))
break A}if("dynamicRange"===o){s=p.mg(B.a.an(B.bq,new A.ts(r.c)))
break A}if("reverb"===o){s=p.mw(B.a.an(B.bp,new A.tt(r.c)))
break A}s=p.mf(B.a.an(B.bn,new A.tu(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.tr.prototype={
$1(a){return t.xs.a(a).b===A.u(this.a.value)},
$S:156}
A.ts.prototype={
$1(a){return t.EL.a(a).b===A.u(this.a.value)},
$S:157}
A.tt.prototype={
$1(a){return t.gc.a(a).b===A.u(this.a.value)},
$S:158}
A.tu.prototype={
$1(a){return t.ul.a(a).b===A.u(this.a.value)},
$S:159}
A.tN.prototype={
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
A.tM.prototype={
$1(a){var s,r,q=this,p=A.fd(A.u(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.aB(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bN.prototype={
B(){return"SettingCategory."+this.b}}
A.iW.prototype={
B(){return"SettingKind."+this.b}}
A.bg.prototype={
dv(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bx(a))throw A.b(A.M(r.a+" must be boolean",q,q))
break}}}
A.tV.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:28}
A.tW.prototype={
$0(){return A.f(A.i("unknown setting: "+this.a))},
$S:7}
A.tT.prototype={
jE(a,b){var s,r=this.a
if(r!==1)throw A.b(A.p("unsupported settings version "+r,null))
for(r=this.b.gN(),r=r.gv(r);r.m();){s=r.gq()
A.tU(s.a).dv(s.b)}},
ct(a){var s=this.b.h(0,a)
return s==null?A.f(A.i("setting missing from profile: "+a)):s},
C(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.tX.prototype={
oq(a){var s,r,q=A.hd(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.a=A.dR(q,1)
this.la(a)},
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)},
la(a){var s,r,q=A.hd(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.b=A.dR(q,1)}}
A.uc.prototype={
jF(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.a(j.appendChild(A.F(a,"h2","journal-title","Rest")))
s=A.F(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.b6()
k.w=s
A.a(j.appendChild(s))
r=A.F(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.dd[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.db[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.e8(s.bU(m,new A.ud()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Z(new A.ue(k,p,m)))
A.a(r.appendChild(l))}}A.a(j.appendChild(r))},
iO(a){var s,r,q=this.r.h(0,B.bV)
for(s=J.O(q==null?B.kG:q);s.m();){r=s.gq()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.t()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
so9(a){this.f=t.nf.a(a)}}
A.ud.prototype={
$0(){return A.c([],t.W)},
$S:160}
A.ue.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:1}
A.cE.prototype={
gE(){return this.a},
gav(){return this.b},
gaX(){return this.c}}
A.nK.prototype={
oG(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.B(s)
q=new A.H(s,r.i("e(1)").a(new A.nM()),r.i("H<1,e>")).b8(0)
r=this.b
r.O(0)
s=J.Aq(a,t.N)
p=s.$ti
r.L(0,new A.I(s,p.i("l(r.E)").a(q.gaE(q)),p.i("I<r.E>")))},
n1(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.nM.prototype={
$1(a){return t.bC.a(a).a},
$S:161}
A.nL.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.I(r,s):B.d.I(a.c,b.c)},
$S:162}
A.mc.prototype={
gcd(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nz(a){return this.c.p(0,t.T.a(a))},
eG(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.gm8())||!a.a.a2(0,new A.uR(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fO(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aW){m=s.d
if(m<o.length){n=n===B.ae
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.aj}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.uS(s))
else k=!1
if(k)return!1
j=new A.mb(r,g,A.ad(o,t.AP),B.ae)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.O(0)
g.L(0,a.a)
g=i.c
g.O(0)
g.L(0,h)
i.r=j
return!0},
hq(a){var s=this.a,r=A.v(s).i("ac<1>"),q=r.i("I<r.E>")
s=A.K(new A.I(new A.ac(s,r),r.i("l(r.E)").a(new A.uM(a)),q),q.i("r.E"))
B.a.Y(s,new A.uN())
return s},
c9(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.pc
s=m.a.h(0,a)
if(s==null)return B.pd
r=B.d.af(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.ca:B.aA
o=p===B.aA&&m.x.p(0,q)&&s.K(B.cb)?B.cb:p
if(s.K(o))n=o
else n=s.K(B.aA)?B.aA:B.ca
r=s.h(0,n)
r.toString
m.r=new A.mb(a,n,A.ad(m.fO(a,n,r),t.AP),B.ae)
m.gcd()
r=m.r
r.toString
return new A.ma(r)},
m3(a){var s,r,q,p,o,n=this.r
if(n==null)return B.et
if(n.d!==B.ae)return B.pa
n.e=a
s=a===B.aj
n.d=s?B.aW:B.ay
r=this.f
q=s?B.er:B.oT
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.dW(q,o,p,a,null))
if(a===B.aJ)B.a.k(r,new A.dW(B.oW,o,p,a,null))
if(s)this.h0(n)
return new A.m8(n)},
lH(){var s,r=this.r
if(r==null)return B.et
s=r.d
if(s!==B.ay&&s!==B.az)return B.pb
if(this.gcd()!=null&&r.w==null)return new A.bv(new A.bF(B.af,"The visitor is waiting for an answer."))
r.d=B.az
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aW
this.h0(r)
return new A.j7(r,!0)}return new A.j7(r,!1)},
m4(a){var s,r,q=this.r,p=this.gcd(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ay&&o!==B.az}if(o)return B.p9
o=p.f
s=A.B(o)
r=A.bK(new A.I(o,s.i("l(1)").a(new A.uP(a)),s.i("I<1>")),t.Y)
if(r==null)return B.pe
q.w=r.a
return new A.m9(q,p,r)},
m5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ay&&s!==B.az}else s=!0
if(s)return i
r=h.gbn()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dj
p=J.O(p)
while(p.m()){o=p.gq()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.aW(q,s,s)
m=c.l1(!0,!0,o,new A.vd(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aX){B.a.k(this.f,new A.dW(B.oV,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hd(B.a.ga6(j.c).a,s,s)
s.L(0,q)
p.lE(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ev)if(k===B.cd){s=n.b
s=s.ga5(s)}else s=!1
else s=!0
if(s)B.a.k(this.f,new A.dW(B.oU,o,p.b,i,l))}}return m},
h0(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.r=null},
fO(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.kE(a,b,r.gq()))
return s},
kE(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.B(p)
s=A.bK(new A.I(p,r.i("l(1)").a(new A.uK(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.ce(q,s.c,c.c)},
sji(a){this.x=t.Q.a(a)}}
A.uR.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.v(s).i("ac<1>")).M(0,new A.uQ(A.u(a)))},
$S:3}
A.uQ.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:29}
A.uS.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:16}
A.uM.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:29}
A.uN.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.I(a.c,b.c)
return s!==0?s:B.d.I(a.d,b.d)},
$S:164}
A.uP.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.uO.prototype={
$0(){return A.c([],t.jV)},
$S:165}
A.uK.prototype={
$1(a){return t.aS.a(a).d.gN().a2(0,new A.uJ(this.a))},
$S:166}
A.uJ.prototype={
$1(a){t.q.a(a)
return this.a.y.aW(a.a,a.b)},
$S:167}
A.uL.prototype={
$2(a,b){var s=t.AP
return B.d.I(s.a(a).a,s.a(b).a)},
$S:168}
A.md.prototype={}
A.mK.prototype={}
A.xV.prototype={
$1(a){return B.c.V(A.u(a),"off.")},
$S:3}
A.bU.prototype={
B(){return"DoorChoice."+this.b}}
A.cc.prototype={
B(){return"VisitPhase."+this.b}}
A.cd.prototype={
B(){return"VisitTier."+this.b}}
A.eB.prototype={
B(){return"VisitorFactKind."+this.b}}
A.dW.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q},
gav(){return this.c}}
A.dj.prototype={
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
gav(){return this.b},
gaX(){return this.c}}
A.me.prototype={
C(){var s,r,q,p=this.a
p=A.K(p,A.v(p).c)
B.a.X(p)
s=this.b
r=A.v(s)
q=r.i("dy<1,Y<e,@>>")
s=A.K(new A.dy(s,r.i("Y<e,@>(1)").a(new A.uI()),q),q.i("r.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.uI.prototype={
$1(a){return t.T.a(a).C()},
$S:169}
A.kb.prototype={
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
A.nH.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:170}
A.nI.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:171}
A.nJ.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:172}
A.mb.prototype={
gbn(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.uT.prototype={}
A.bv.prototype={}
A.ma.prototype={}
A.m8.prototype={}
A.j7.prototype={}
A.m9.prototype={}
A.hD.prototype={}
A.mN.prototype={
glZ(){var s,r
if(!this.aI)return B.n
s=this.r
s===$&&A.t()
r=this.w
r===$&&A.t()
return B.ff.m_(s,r)},
gng(){var s="shadowCaster",r=this.d9
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.ic(s).a+";shadowTriangles="+r.ic(s).b+";frameMs="+B.b.F(this.da,3)},
ghV(){var s=this.d9
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.da<=100},
nq(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.im()
l.r=k
k=l.w=B.cs.iL(k)
if(k.a===B.G)k=l.w=B.dS
q=l.b
p=l.c
s=new A.lY(q,p,q,p)
o=A.Bm(l.d.a)
l.e=o
try{o.i3(l.k8(k,q,p),s)}catch(n){r=A.ah(n)
k=l.w
if(k===B.as)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.as
k=A.Bm(l.d.a)
k.i3(B.n6,s)
l.e=k}k=l.e
k.c2()
m=A.FP(k.w.a.b)
B.a.k(k.d,m)
l.f=m
l.cg=l.b
l.ci=l.c
l.fz()
l.na=A.Fv(!0,!0,!0)
l.hQ=new A.rJ(A.n(t.N,t.S))
l.aI=!0},
du(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.p("Pixeldart surface size must be positive",null))
if(!r.aI){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cj!==a||r.ck!==b)r.ck=r.cj=null
s=r.e
s===$&&A.t()
s.c2()
new A.lY(a,b,a,b).A()
if(r.dd==null)r.dd=r.c1()},
c1(){var s=0,r=A.aL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$c1=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cg
h=n.b
if(!(i!==h||n.ci!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.t()
h=n.w
h===$&&A.t()
g=A.h(m)
s=8
return A.a6(A.x4(i,B.cv.hx("auto","full","srgb",h,"auto","profile",A.h(l),g)),$async$c1)
case 8:n.cg=m
n.ci=l
n.ck=n.cj=null
A.k0()
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
n.cj=n.b
n.ck=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.dd=null
i=n.cj
h=n.b
j=i===h&&n.ck===n.c
if(!j)i=n.cg!==h||n.ci!==n.c
else i=!1
if(i)n.dd=n.c1()
s=o.pop()
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$c1,r)},
fu(a,b,c,d,e,f,g,h){return B.cv.hx(d,e,f,a,g,h,c,b)},
k8(a,b,c){return this.fu(a,b,c,"auto","full","srgb","auto","profile")},
fz(){var s,r,q,p=this.w
p===$&&A.t()
s=p.a
A:{p=B.G===s
if(p){r=7
break A}if(B.O===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.O===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.f(A.p("hysteresisThreshold must be finite and >= 0",null))
this.fy=new A.qI(r,p,A.a_(q),A.a_(q),A.n(q,t.i))},
cV(a){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cV=A.aM(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aI){s=1
break}switch(a.b.a){case 0:i=B.dS
break
case 2:i=B.as
break
case 1:i=B.dR
break
case 3:i=n.w
i===$&&A.t()
break
default:i=null}m=i
i=n.w
i===$&&A.t()
l=i
k=n.fu(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.t()
s=7
return A.a6(A.x4(i,t.lg.a(k)),$async$cV)
case 7:n.w=t.xK.a(m)
n.fz()
n.cg=n.b
n.ci=n.c
n.x=null
A.k0()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ah(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.k0()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cV,r)},
lO(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="wall-plaster",b8="grime",b9="renderer is not initialized",c0="resource library is disposed"
if(!b5.aI||b5.Q.length!==0)return
b5.eo=c1
s=b5.k2
r=b5.e
r===$&&A.t()
s.l(0,b7,r.gaO().ds(8,"texture:wall-plaster",!0,256,B.ao,256))
s.l(0,b8,b5.e.gaO().ds(8,"texture:grime",!0,512,B.ao,512))
for(q=0;q<2;++q){p=B.lc[q]
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
s.l(0,p,r.ds(8,"texture:"+p,!0,256,B.ao,256))}for(q=0;q<3;++q){p=B.jV[q]
o=p==="glass"
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
n=o?256:4096
m=o?256:4096
s.l(0,p,r.ds(8,"texture:"+p,!0,m,B.ao,n))}s.l(0,"skybox-main-atmosphere-v1",b5.e.gaO().ip(8,"texture:skybox-main-atmosphere-v1",!0,2048,B.ao,4096,B.j6))
b5.e1()
b5.cM()
b5.ry=b5.c5(A.le(s.h(0,b7),0.5,B.ah,0.2,0,!1,0,"quarantine-house-safe",0,1,b6,!0,1,0.48,0.44,0.46,1,1))
b5.ky()
for(r=c1.b,n=r.length,m=b5.ok,l=b5.k4,k=t.N,j=b5.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.w)(r),++q){h=r[q]
g=A.n(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cM(f,f.r,f.e,A.v(f).i("cM<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bB.h(0,b)
if(a==null)A.f(A.i("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.le(s.h(0,a.b),0.5,B.ah,0.2,0,!1,0,d+a0+"-"+a1,0,1,b6,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
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
k=b5.dY(a3)
i=b5.dY(a3)
k=A.le(m,0.5,B.ah,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,b6,!0,1,b5.dY(a3).c,i.b,k.a,1,1)
i=b5.e.w
m=i==null?A.f(A.i(b9)):i
if(m.x)A.f(A.i(c0))
k.A()
a2=m.b.a.aG(k,b6)
m.r.k(0,a2)
j.l(0,k.a,k)
n.l(0,a3,a2)}b5.cM()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.w)(r),++q){h=r[q]
if(h.a==="living-room")continue
b5.kz(c1,h)}$.q.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.q.j().setAttribute("data-renderer-canonical-room-shell","living-room")
b5.l4(c1)
$.q.j().setAttribute("data-renderer-house-model-scale",B.b.F(2.25,2))
for(n=r.length,q=0;q<n;++q)for(m=r[q].e.length,a4=0;a4<m;++a4)continue
for(r=c1.c,n=r.length,m=b5.fx,k=b5.y,i=c1.e,q=0;f=r.length,q<f;r.length===n||(0,A.w)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
h=i.h(0,a5.b)
if(h==null)continue
a6=b5.fC(c1,h,a5)
f=b5.e.w
if(f==null)f=A.f(A.i(b9))
e=a5.a
if(f.x)A.f(A.i(c0))
d=f.a
a6.A()
a2=d.b.aG(a6,"door-leaf:"+e)
b=a2.a
d.c.l(0,b,d.bb(a6))
f.f.k(0,a2)
B.a.k(k,a2)
f=h.a
d=l.h(0,f)
if(d==null){d=b5.ry
d.toString}a7=new A.bf(a2,d,B.B,0,B.U,B.S,!0,!0,0,b6)
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
A.b1(new A.H(b,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
m.l(0,e,new A.jr(e,f,d.b.bO(a7),a2,a7))}for(n=b5.id,m=t.Bs,q=0;q<r.length;r.length===f||(0,A.w)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
h=i.h(0,a5.b)
if(h==null)continue
e=h.a
d=b5.kZ(h,a5.b4(e),a5.aM(e),a5.aM(e)+a5.w,0,a5.x,5915445)
b=m.a(new A.vS(a5))
a0=b5.e.w
if(a0==null)a0=A.f(A.i(b9))
if(a0.x)A.f(A.i(c0))
a1=a0.a
d.A()
a2=a1.b.aG(d,"decoration:"+e)
a8=a2.a
a1.c.l(0,a8,a1.bb(d))
a0.f.k(0,a2)
B.a.k(k,a2)
a0=l.h(0,e)
if(a0==null){d=b5.ry
d.toString}else d=a0
a9=new A.bf(a2,d,B.B,0,B.U,B.S,!0,!0,0,b6)
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
A.b1(new A.H(a0,a8.i("C(1)").a(a1.gao()),a8.i("H<1,C>")))
B.a.k(n,new A.mM(e,d.b.bO(a9),a9,b))}for(r=A.K9(A.Js(c1)),n=r.length,m=b5.dy,l=b5.dx,i=b5.db,f=b5.k3,e=b5.fr,q=0;q<r.length;r.length===n||(0,A.w)(r),++q){b0=r[q]
d=b0.b
b1=d===4?b8:b7
a=e.h(0,d)
if(a==null){b=s.h(0,b1)
a0=b5.dV(d)
a1=b5.dV(d)
a0=A.le(b,0.5,B.ah,0.2,0,!0,0,"quarantine-house-exterior-slot-"+d,0,1,b6,!0,1,b5.dV(d).c,a1.b,a0.a,1,1)
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
a8.c.l(0,b2,a8.bb(a0))
b.f.k(0,a2)
B.a.k(k,a2)
b3=a1+":"+d
f.l(0,b3,b1)
if(!B.at.p(0,a1))A.f(A.p("unknown exterior cell: "+a1,b6))
b4=new A.bf(a2,a,B.B,-1,B.U,B.S,B.ny.p(0,a1),!0,0,b6)
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
A.b1(new A.H(b,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
i.l(0,b3,d.b.bO(b4))}},
eZ(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="renderer is not initialized",b8="resource library is disposed",b9="promoted model package is missing: ",c0=b5.hI=c1.c
b5.k1=A.ad(c1.e,t.fl)
if(!b5.aI)return
for(s=b5.p4,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));r.m();)r.d.a_()
s.O(0)
r=b5.R8
if(r!=null)r.b.O(0)
r=b5.RG
b5.R8=r==null?b6:new A.rP(new A.rK(r),A.n(t.N,t.K))
for(r=b5.ch,q=new A.N(r,A.v(r).i("N<1,2>")).gv(0),p=b5.CW;q.m();){o=q.d
o.toString
n=b5.f
n===$&&A.t()
n.b.aK(o.b)
m=p.h(0,o.a)
if(m!=null){o=b5.e
o===$&&A.t()
o=o.w
if(o==null)o=A.f(A.i(b7))
n=m.a
if(o.x)A.f(A.i(b8))
o.a.aK(n)
o.f.a7(0,n)}}r.O(0)
p.O(0)
b5.cy=null
q=b5.cx
B.a.O(q)
for(o=b5.k1,n=o.length,l=b5.p1,k=t.fH,j=t.d,i=t.s3,h=b5.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.c
c=B.c.p(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b5.eo
b=c==null?b6:c.e.h(0,e.b)
if(b==null)continue
a=c1.bL(d)
if(b5.R8!=null&&b5.RG.a.K(a.a)){c=a.a
a0=b5.RG.a.h(0,c)
a1=(a0==null?A.f(A.i(b9+c)):a0).c
g=g&&b5.l2(a1.a.x,a,e.f.c.a*c0)
c=e.f
a0=c.a
a2=A.rX(B.Q,c.b.b*3.141592653589793/180)
a3=b5.e
a3===$&&A.t()
a3=a3.w
if(a3==null)a3=A.f(A.i(b7))
a4=b5.f
a4===$&&A.t()
a5=b.d
a6=A.c([],j)
a7=A.c([],i)
a8=new A.hh(a1,h,a3,a4,new A.vV(b5,a,a1),new A.hx(new A.C(a5.a+a0.a*c0,a5.b+a0.b*c0,a5.c+a0.c*c0),a2,c.c.a*c0),-1,a6,a7)
a9=a8.jM("LOD0")
a8.x=a9.a
B.a.L(a6,a9.c)
B.a.L(a7,a9.b)
c=b5.R8
c.toString
a0=k.a(new A.vW(a8))
a3=c.b
a4=e.a
if(a3.K(a4))A.f(A.i("presentation placement is already bound: "+a4))
d=c1.bL(d).a
if(c.a.a.a.h(0,d)==null)A.f(A.i(b9+d))
a3.l(0,a4,a0.$1(new A.hk()))
s.l(0,a4,a8)
continue}d=b5.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.i(b7))
c=b5.kC(a,e,c0)
a0=e.a
if(d.x)A.f(A.i(b8))
a3=d.a
c.A()
b0=a3.b.aG(c,"inventory:"+a0)
a4=b0.a
a3.c.l(0,a4,a3.bb(c))
d.f.k(0,b0)
d=e.f
c=d.a
a2=A.rX(B.Q,d.b.b*3.141592653589793/180)
d=a.b
a3=l.h(0,d)
if(a3==null){a3=l.h(0,"furniture")
a3.toString}a5=b.d
c=new A.hx(new A.C(a5.a+c.a*c0,a5.b+c.b*c0,a5.c+c.c*c0),a2,1)
m=new A.bf(b0,a3,c,-1,B.U,B.S,d!=="micro",!0,0,b6)
B.a.k(q,b0)
p.l(0,a0,m)
d=b5.f
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
A.b1(new A.H(a3,a4.i("C(1)").a(c.gao()),a4.i("H<1,C>")))
r.l(0,a0,d.b.bO(m))}b2=s.a
b3=r.a
$.q.j().setAttribute("data-renderer-inventory-items",""+(b3+b2))
c0=$.q.j()
r=b2===0?"proxy":"mixed"
c0.setAttribute("data-renderer-inventory-resolution",r)
$.q.j().setAttribute("data-renderer-inventory-proxy-count",""+b3)
$.q.j().setAttribute("data-renderer-inventory-promoted-count",""+b2)
$.q.j().setAttribute("data-renderer-promoted-material-policy","semantic-pbr-v1")
r=$.q.j()
c0=g?"pass":"mismatch"
r.setAttribute("data-renderer-promoted-bounds-alignment",c0)
c0=b5.eo
r=c0==null
if((r?b6:c0.r)==="living-room")b4=(r?b6:c0.x)==="placement-living-sofa"&&s.K("placement-living-fbx-room")
else b4=!1
c0=$.q.j()
s=b4?"canonical-fbx-residence":"incomplete"
c0.setAttribute("data-house-playability",s)
c0.setAttribute("data-house-collision-authority","game-house")
c0.setAttribute("data-house-focus-authority","game-focus-resolver")
c0.setAttribute("data-house-save-restore-authority","game-session-save")
b5.l5()},
l2(a,b,c){var s,r,q,p,o,n,m,l,k
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
l3(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.p(s,"kaca")||B.c.p(s,"gelas")||B.c.p(s,"cermin")
p=B.c.p(s,"aluminium")||B.c.p(s,"kerangka")
o=B.c.p(s,"sofa")||B.c.p(s,"cusion")||B.c.p(s,"carpet")
n=B.c.p(s,"floor")||B.c.p(s,"lemari")||B.c.p(s,"meja")||B.c.p(s,"tiang")
m=B.c.p(s,"wall")||B.c.p(s,"roof")||B.c.p(s,"tegel")
l=B.c.p(s,"emmision")||B.c.p(s,"netflix")||s==="tv"
k=A.yH(a5.toLowerCase()," ","-")
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
a1=q?B.aC:B.ah
a2=q?0.02:0.5
a3=a4.c5(A.le(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.l(0,a5,a3)
return a3},
l5(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
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
o.L(0,new A.r7(n.a.a.b,"LOD0",!l,k,j,m).C())
i.push(o)}s=$.q.j()
o=i.length!==0
n=o&&B.a.a2(i,new A.vL())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dj(a){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$dj=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=2
return A.a6(B.fh.co(a,new A.vT(),new A.vU()),$async$dj)
case 2:n=c
q.RG=n
p=$.hN
if(p!=null)q.eZ(p)
$.q.j().setAttribute("data-renderer-model-packages","validated")
$.q.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.q.j()
o=n.a.ga3()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aJ(null,r)}})
return A.aK($async$dj,r)},
j_(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=c4.e,c3=c2.h(0,c5)
if(c3==null)return
s=c3.a
r=t.N
q=A.aF([s],r)
for(p=c4.aS(s),o=J.O(p.a),p=new A.W(o,p.b,p.$ti.i("W<1>"));p.m();){n=o.gq()
m=n.cp(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c2.h(0,m)!=null)q.k(0,m)}c2=A.K(q,q.$ti.c)
B.a.X(c2)
l=B.a.W(c2,"|")
if(c1.cy===l)return
c1.cy=l
for(c2=c1.ax,c2=new A.N(c2,A.v(c2).i("N<1,2>")).gv(0),s=c1.ay,p=t.h1,o=c1.at;c2.m();){k=c2.d
n=k.a
j=q.p(0,n)?-1:0
i=k.b
h=s.h(0,n)
h.toString
g=A.c([],p)
for(f=J.aQ(i),e=0;e<f.gu(i);++e){if(!(e<h.length))return A.d(h,e)
d=c1.c7(h[e],j)
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
A.b1(new A.H(a0,a1.i("C(1)").a(a.gao()),a1.i("H<1,C>")))
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
if(g.length!==0)o.l(0,n,B.a.ga1(g))}for(c2=c1.id,s=c2.length,a4=0;a4<c2.length;c2.length===s||(0,A.w)(c2),++a4){a5=c2[a4]
j=q.p(0,a5.a)&&a5.d.$0()?-1:0
p=c1.f
p===$&&A.t()
o=c1.c7(a5.c,j)
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
A.b1(new A.H(h,f.i("C(1)").a(n.gao()),f.i("H<1,C>")))
p=p.b
f=p.$ti
n=f.c.a(a5.b)
f.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb3(o)}c2=c1.fx
s=A.v(c2).i("ac<1>")
s=A.K(new A.ac(c2,s),s.i("r.E"))
p=s.length
a4=0
for(;a4<s.length;s.length===p||(0,A.w)(s),++a4){a6=c2.h(0,s[a4])
o=a6.e
d=c1.c7(o,q.p(0,a6.b)?-1:0)
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
A.b1(new A.H(f,c.i("C(1)").a(h.gao()),c.i("H<1,C>")))
o=o.b
c=o.$ti
c.c.a(n)
c.y[1].a(d)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(d)
c2.l(0,a6.a,a6.md(d))}for(c2=c1.k1,s=c2.length,p=c1.ch,o=c1.CW,n=c1.p4,a4=0;a4<s;++a4){a7=c2[a4]
h=a7.a
a8=p.h(0,h)
a9=o.h(0,h)
b0=n.h(0,h)
b1=q.p(0,a7.b)
if(b0!=null){b0.iZ(b1?-1:0)
continue}if(a8==null||a9==null)continue
h=c1.f
h===$&&A.t()
f=c1.c7(a9,b1?-1:0)
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
A.b1(new A.H(b,a.i("C(1)").a(c.gao()),a.i("H<1,C>")))
h=h.b
a=h.$ti
a.c.a(a8)
a.y[1].a(f)
h.Z(a8)
h=h.b
a=a8.a
if(!(a>=0&&a<h.length))return A.d(h,a)
h[a].sb3(f)}b2=new A.kL().m2(c5)
c2=$.q.j()
s=A.K(b2,A.v(b2).c)
B.a.X(s)
c2.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
c2=c1.dy
r=new A.kL().hS(new A.vY(c1),new A.ac(c2,A.v(c2).i("ac<1>")),b2,r)
b3=A.f8(r,r.$ti.i("r.E"))
c2=c1.dx
s=A.v(c2).i("ac<1>")
s=A.K(new A.ac(c2,s),s.i("r.E"))
r=s.length
p=c1.db
b4=0
b5=0
b6=0
a4=0
for(;a4<s.length;s.length===r||(0,A.w)(s),++a4){b7=s[a4]
b8=p.h(0,b7)
if(b8==null)continue
a9=c2.h(0,b7)
o=a9.r
if(o)++b6
b9=b3.p(0,b7)
if(b9)++b4
if(b9&&o)++b5
d=c1.c7(a9,b9?-1:0)
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
A.b1(new A.H(h,f.i("C(1)").a(n.gao()),f.i("H<1,C>")))
o=o.b
f=o.$ti
f.c.a(b8)
f.y[1].a(d)
o.Z(b8)
o=o.b
f=b8.a
if(!(f>=0&&f<o.length))return A.d(o,f)
o[f].sb3(d)
c2.l(0,b7,d)}$.q.j().setAttribute("data-renderer-exterior-items",""+b4+"/"+c2.a)
$.q.j().setAttribute("data-renderer-shadow-casters",""+b5+"/"+b6)
c2=A.v(b3)
s=c2.i("dy<1,e>")
c0=A.K(new A.dy(b3,c2.i("e(1)").a(new A.vZ(c1)),s),s.i("r.E"))
B.a.X(c0)
$.q.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(c0,","))},
dq(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aI)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.h2(b0,n)
l=J.aQ(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.y,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.i(a8))
c=a7.c3(e.b)
b=g.b
if(d.x)A.f(A.i(a9))
a=d.a
c.A()
a0=a.b.aG(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.l(0,b,a.bb(c))
d.f.k(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bf(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
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
A.b1(new A.H(b,a3.i("C(1)").a(d.gao()),a3.i("H<1,C>")))
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
B.a.a7(i,a6)
B.a.k(i,a0)
a=a7.e.w
d=a==null?A.f(A.i(a8)):a
if(d.x)A.f(A.i(a9))
d.a.aK(a6)
d.f.a7(0,a6)}p.l(0,b1,k)
r.l(0,b1,j)
if(j.length!==0)a7.at.l(0,b1,B.a.ga1(j))
$.q.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hR+1));++a7.hR},
eC(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gaO().dr(k.fC(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bf(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.t()
n=r.c
p.ly(l)
p.b.eN(n,l)
s.l(0,b,r.hB(l,m))
s=k.y
n=r.d
B.a.a7(s,n)
B.a.k(s,m)
k.e.gaO().om(n)},
iP(l9,m0,m1,m2,m3,m4,m5,m6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2=this,l3=null,l4="rain_override",l5="wetness_override",l6=A.aF([m0],t.N),l7=l9.e,l8=l7.h(0,m0)
if(l8!=null)for(s=l8.a,r=l9.aS(s),q=J.O(r.a),r=new A.W(q,r.b,r.$ti.i("W<1>"));r.m();){p=q.gq()
o=p.cp(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&l7.h(0,o)!=null)l6.k(0,o)}n=new A.qa(l9).oV(l6,m1)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.w)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eC(l.a,l.x,l.w,q))}for(r=l2.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&l6.p(0,k.b)){j=l7.h(0,k.b)
i=l2.hI
h=k.f.a
j=j.d
s.push(new A.eC(new A.k(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}l2.ce=A.ad(s,t.cZ)
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
B.a.k(l7,new A.b8(e,s,l.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}l7=l2.fy
l7===$&&A.t()
d=l7.oh(m1,g,f)
l7=A.n(t.S,t.A_)
for(e=0;e<n.length;++e)l7.l(0,e,n[e])
s=A.c([],t.Fk)
for(r=d.a,q=r.length,m=0;m<r.length;r.length===q||(0,A.w)(r),++m){c=r[m]
p=c.a
j=l7.h(0,p).a
i=c.d
s.push(new A.lw(p,new A.C(j.a,j.b,j.c),new A.aT(i.a,i.b,i.c),c.e,c.f))}r=A.c([],t.cv)
for(q=d.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.w)(q),++m){c=q[m]
j=c.a
i=l7.h(0,j)
h=i.a
i=i.b
b=c.d
r.push(new A.bO(j,new A.C(h.a,h.b,h.c),new A.C(i.a,i.b,i.c),new A.aT(b.a,b.b,b.c),c.e,c.f,1.05,1.4))}l2.jR(d,++l2.go)
l7=$.bS()
a=l7.H("time_override")
if(a>=0)a0=B.b.n(a,0,23.999)
else a0=m6
l2.hN=a0
a1=m4.c
q=m4.d
a2=B.b.R(B.b.R(a0,24)+24,24)
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
A.cl(B.mR,B.dU,b3)
b4=A.cl(B.mT,B.bK,b3)
b5=A.cl(B.mN,B.bL,b3)
b6=0.3+0.5*b3
b7=0.25+0.2*b3}else if(p&&a2<14){b4=B.bK
b5=B.bL
b6=0.85
b7=0.45}else if(a2>=14&&a2<a6){b3=(a2-14)/(a6-14)
A.cl(B.dU,B.dT,b3)
b4=A.cl(B.bK,B.dX,b3)
b5=A.cl(B.bL,B.dW,b3)
b6=0.85*(1-b3*0.35)
b7=0.45*(1-b3*0.25)}else if(a2>=a6&&a2<a6+1.5){b3=(a2-a6)/1.5
A.cl(B.dT,B.bM,b3)
b4=A.cl(B.dX,B.aR,b3)
b5=A.cl(B.dW,B.aS,b3)
b6=0.55*(1-b3*0.8)
b7=0.34*(1-b3*0.65)}else{p=a6+1.5
if(a2>=p&&a2<a6+3){b3=(a2-p)/1.5
A.cl(B.bM,B.bM,b3)
b4=A.cl(B.aR,B.aR,b3)
b5=A.cl(B.aS,B.aS,b3)
b6=0.11*(1-b3*0.25)
b7=0.16*(1-b3*0.15)}else{b4=B.aR
b5=B.aS
b6=0.15
b7=0.18}}if(a3>0){b8=A.cl(b5,B.n0,a3*0.7)
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
c5=B.d.aC(B.d.n(B.b.aB(l7.H("cloud_samples")),4,24))
c6=l7.H(l5)>=0?l7.H(l5):c0
c7=B.b.n(l7.H("weather_reflection_strength"),0,2)
l2.cf=B.b.n(c6*c7,0,1)
q=A.G2(q)
b2=a1*0.92
p=2+p*0.03
c8=B.b.n(0.68+a1*0.22,0,1)
new A.uf(a0,13,0.8988445647770796,q,b2,a1,p,c8,1,0.0015,0.06).A()
c9=A.Bq(a2,13)*3.141592653589793/12
d0=Math.sin(0.8988445647770796)
d1=Math.cos(0.8988445647770796)
d2=d0*Math.sin(q)
d3=d1*Math.cos(q)
d4=d2+d3*Math.cos(c9)
d5=Math.asin(B.b.n(d4,-1,1))
d6=Math.cos(d5)
d7=Math.atan2(Math.sin(c9),Math.cos(c9)*d0-Math.tan(q)*d1)
d8=new A.C(Math.sin(d7)*d6,Math.sin(d5),Math.cos(d7)*d6).gac()
if(Math.abs(d3)<1e-12)d9=d4>0?-2:2
else d9=(Math.sin(-0.014538592669112763)-d2)/d3
e0=d9>-1&&d9<1
e1=e0?Math.acos(d9)*12/3.141592653589793:0
e2=B.b.R(B.b.R(13-e1,24)+24,24)
e3=B.b.R(B.b.R(13+e1,24)+24,24)
q=!e0
e4=q&&d4>0
e5=A.G1(d5,a2,e4,q&&!e4,13)
e6=p+b2*3.5+a1*1.5
e7=A.G_(Math.max(0,1.5707963267948966-d5))
p=B.b.n(Math.exp(-(0.0046416*e7*e6)),0,1)
d2=B.b.n(Math.exp(-(0.010846399999999999*e7*e6)),0,1)
d3=B.b.n(Math.exp(-(0.02648*e7*e6)),0,1)
e8=B.b.n(Math.exp(-(b2*(2.2+a1*2))),0,1)
e9=A.Br(-0.3141592653589793,0.10471975511965977,d5)
f0=A.Br(-0.014538592669112763,0.03490658503988659,d5)
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
if(d8.gbd()<0.999||d8.gbd()>1.001||f3<0||f7<0||f8<0||e8<0||e8>1||e9<0||e9>1||f0<0||f0>1)A.f(A.i("solar lighting state is out of bounds"))
new A.kE(d8,f9,f3).A()
q=$.q.j()
q.setAttribute("data-renderer-solar-phase",e5.b)
q.setAttribute("data-renderer-solar-sunrise-hours",B.b.F(e2,4))
q.setAttribute("data-renderer-solar-sunset-hours",B.b.F(e3,4))
q.setAttribute("data-renderer-solar-elevation-deg",B.b.F(d5*180/3.141592653589793,4))
q.setAttribute("data-renderer-solar-twilight-factor",B.b.F(e9,4))
q.setAttribute("data-renderer-solar-horizon-visibility",B.b.F(f0,4))
q.setAttribute("data-renderer-solar-horizon-blend",B.b.F(A.Bs(f0),4))
q.setAttribute("data-renderer-solar-transmittance",B.b.F(e8,4))
q=$.Aj()
q.oP(0.0166,a1)
g0=q.z
g1=B.b.n(Math.sin(Math.max(0,d5))/Math.sin(1.1344640137963142),0,1)
g2=A.Bs(f0)
q=1-g2
g3=new A.C(d8.a*g2+-(j*i)*q,d8.b*g2+h*q,d8.c*g2+-(b*b1)*q).gac()
j=g0.a
g4=j&&g0.gi_()?new A.C(g0.f,g0.r,g0.w):g3
p=0.35+(p-0.35)*g2
d2=0.45+(d2-0.45)*g2
d3=0.65+(d3-0.65)*g2
g5=new A.aT(p,d2,d3)
if(j){i=g0.b
g6=new A.aT(p+g0.c*i*2,d2+g0.d*i*2,d3+g0.e*i*2.5)}else g6=g5
g7=B.b.n(g0.gmU(),0.12,2)
g8=B.b.n(l7.H("weather_lightning_intensity"),0,2)
b6=(f3*g2+b6*q)*b9
if(j)b6=b6*0.12+g0.b*4.5*g7*g8
q=$.q.j()
q.setAttribute("data-renderer-lightning-active",String(j))
p=g0.x
q.setAttribute("data-renderer-lightning-source-distance-m",B.b.F(p,1))
q.setAttribute("data-renderer-lightning-distance-attenuation",B.b.F(g7,4))
i=g0.f
h=g0.r
b=g0.w
q.setAttribute("data-renderer-lightning-source-direction",B.b.F(i,3)+","+B.b.F(h,3)+","+B.b.F(b,3))
g9=l7.bF("fog_enable")
h0=l7.H("fog_density")
h1=l7.H("fog_height_falloff")
h2=B.b.n(l7.H("fog_distance_scale"),0.25,2)
h3=B.b.n(l7.H("weather_fog_scattering"),0,2)
f8=g9?f8*B.b.n(h0/0.012,0,8)*h3:0
h4=g9?0.06*B.b.n(h1/0.6,0,8):0
h5=l7.bF("volumetric_light_enable")?B.b.n(l7.H("volumetric_shaft_intensity")/0.1,0,8):0
h6=B.d.n(B.b.aB(l7.H("volumetric_precision")),4,24)
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
l2.el=f8
l2.hO=h4
l7=A.c([],t.xL)
for(q=s.length,m=0;m<s.length;s.length===q||(0,A.w)(s),++m){l=s[m]
b1=l.c
d2=l.e
l7.push(new A.cu("point:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.d,Math.max(0.25,d2),Math.max(4,d2*8)))}for(q=r.length,m=0;m<r.length;r.length===q||(0,A.w)(r),++m){l=r[m]
b1=l.d
d2=l.f
l7.push(new A.cu("spot:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.e,Math.max(0.25,d2*0.25),Math.max(8,d2)))}i7=l2.to
if(j&&g0.gi_()&&i7!=null){i8=new A.C(i,h,b).gac()
B.a.k(l7,new A.cu("lightning:active",i7.d.a4(0,i8.a8(0,p)),new A.C(g0.c,g0.d,g0.e),g0.b*12e4*g8,1000,Math.max(1100,p*1.25)))}i9=g9?f8+h7:0
if(i7==null)q=l3
else{q=i7.d
q=A.Gh(i7.e,Math.min(i7.r,64),q,i9,l7)}l2.hH=q
p=q==null
j0=p?l3:q.a
if(j0==null)j0=B.w
$.q.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.F(i9,6))
j=A.c([],t.E7)
e=0
for(;;){if(!(e<l2.ce.length&&e<4))break
j.push(new A.vX(l2,e,m4).$0());++e}if(!p){p=$.q.j()
p.setAttribute("data-renderer-volumetric-source-count",""+q.c)
i=q.a
p.setAttribute("data-renderer-volumetric-source-radiance",B.b.F(i.a,6)+","+B.b.F(i.b,6)+","+B.b.F(i.c,6))
q=q.b
p.setAttribute("data-renderer-volumetric-source-direction",B.b.F(q.a,4)+","+B.b.F(q.b,4)+","+B.b.F(q.c,4))}q=b4.c
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
j4=l2.dc
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
if(!new A.aT(q,p,i).gT(0))A.f(A.p("skyColor must be finite",l3))
if(!g6.gT(0))A.f(A.p("keyLightColor must be finite",l3))
if(!new A.aT(j8,k1,k4).gT(0))A.f(A.p("sourceRadiance must be finite",l3))
if(!isFinite(b6)||b6<0)A.f(A.p("keyLightIntensity must be finite and >= 0",l3))
if(j8<0||k1<0||k4<0)A.f(A.p("sourceRadiance channels must be >= 0",l3))
l0=B.b.n(b6*0.12,0,0.35)
l1=1-l0
l2.x1=new A.kO(B.jP,new A.aT(j7*0.08+c8*0.035+j9*0.015,k0*0.08+f6*0.035+k2*0.015,k3*0.08+b2*0.035+k5*0.015),1.5*h2/(1+a1*0.45),14*h2/(1+a1*0.16),h4,f8,new A.aT(k6,k7,k8),h4,h7,h8,k9,h5,h6,i6,h9,i0,i1,i2,i3,i4,i5,new A.aT(B.b.n(q*l1+g6.a*l0+j8*0.02,0,1),B.b.n(p*l1+g6.b*l0+k1*0.02,0,1),B.b.n(i*l1+g6.c*l0+k4*0.02,0,1)),B.b.n(c7*0.42,0,1),0,new A.aT(q,p,i),h,new A.kE(g4,g6,b6),s,r,l7,j,new A.ub("main-atmosphere-v1",b,new A.aT(q,p,i),new A.aT(b1,d2,d3),new A.aT(f5,f9,j1),c2,c3,650,420,0.0012,j3*c4,j2*c4,j4,j6,j5,c5))
j5=$.q.j()
j5.setAttribute("data-renderer-reflection-intensity",B.b.F(l2.x1.dy,4))
j5.setAttribute("data-renderer-reflection-confidence",B.d.F(l2.x1.fr,4))
j6=l2.x1.k4
l7=j6==null?l3:j6.a
if(l7==null)l7="none"
j5.setAttribute("data-renderer-skybox-asset",l7)
l7=l2.x1.k4
l7=l7==null?l3:l7.z
j5.setAttribute("data-renderer-sky-cloud-coverage",B.b.F(l7==null?0:l7,4))
l7=l2.x1.k4
l7=l7==null?l3:l7.Q
j5.setAttribute("data-renderer-sky-cloud-density",B.b.F(l7==null?0:l7,4))
l7=l2.x1.k4
l7=l7==null?l3:l7.db
j5.setAttribute("data-renderer-sky-cloud-samples",""+(l7==null?0:l7))
l7=l2.x1.k4
l7=l7==null?l3:l7.CW
j5.setAttribute("data-renderer-sky-cloud-phase",B.b.F(l7==null?0:l7,3))
j5.setAttribute("data-renderer-reflection-mode","environment-fallback")},
lb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="wetness_override",a7="fog_height_falloff",a8="fog_distance_scale",a9="post_affine_warp",b0="post_vertex_snap",b1="weather_particles_enable",b2="weather_particle_density",b3="weather_particle_size",b4="weather_snow_accumulation",b5="weather_fog_scattering",b6="weather_lightning_intensity",b7="weather_reflection_strength",b8="cloud_coverage_override",b9="cloud_silver_lining",c0="light_ambient_mult",c1="light_direct_mult",c2=null,c3="shadow_csm_hardness",c4=t.N,c5=A.aF(["time_override","rain_override",a6,"fog_enable","fog_density",a7,a8,"post_exposure","post_vignette","post_film_grain",a9,b0,b1,b2,b3,b4,b5,b6,b7,"cloud_enable",b8,"cloud_density","cloud_detail","cloud_speed",b9,"cloud_samples",c0,c1],c4),c6=A.n(c4,c4),c7=$.bS().w
c7===$&&A.t()
s=0
for(;s<60;++s)c6.l(0,c7[s].a,"No resolved Pixeldart frame mapping is installed")
c7=new A.vQ(a5,c5,c6)
c7.$2("ssao",B.kn)
c7.$2("shadows",B.l_)
c7.$2("shadows",B.kU)
c7.$2("volumetric",B.jR)
c7.$2("bloom",B.kV)
c7.$2("dof",B.kX)
c7.$2("grade",B.kW)
c7.$2("ps1",B.la)
c7.$2("vhs",B.kY)
c7=$.bS()
r=a5.hN
q=a5.xr
p=a5.cf
o=a5.el
n=a5.hO
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
a2=a5.el
a4=a5.x2
a0=a5.x1
a=c7.bF(b1)
a1=a5.x1.k4
r=a1==null?c2:a1.Q
c7.oz("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a2>0,"shadow_ssdo_enable",a4.c>0,"volumetric_light_enable",a0.Q>0,b1,a,"cloud_enable",r!==0],c4,t.y),a3,c5,c6)
c6=$.E0()
c6.lL(c7)
$.q.j().setAttribute("data-renderer-shader-overrides",B.f.a0(c6.a,c2))
$.q.j().setAttribute("data-renderer-shader-lab",B.f.a0(c7.mP(),c2))
$.q.j().setAttribute("data-renderer-shader-lab-document",B.f.a0(c7.eL(),c2))
$.q.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a0(A.Bo().eL(),c2))},
j0(a){var s,r,q,p=this
if(a==null){p.cf=p.d8=p.d7=0
$.q.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.n($.bS().H("weather_snow_accumulation"),0,2)
p.d7=B.b.n(a.a/0.08*s,0,1)
p.d8=B.b.n(a.x,0,1)
r=a.b
p.cf=B.b.n(r/0.0008,0,1)
q=$.q.j()
q.setAttribute("data-renderer-weather-surface",B.f.a0(a.C(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.F(p.d7,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.F(p.d8,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.F(r,8))},
ky(){var s,r,q,p,o=this
if(o.ej!=null||o.ek!=null)return
s=new Float32Array(A.R(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=o.e
r===$&&A.t()
o.ej=r.gaO().dr(o.c3(s),"weather:rain-particle")
o.ek=o.c5(B.lx)
q=new A.ct(new Float32Array(5376))
q.il(new A.k(-0.035,0,0),new A.k(0.035,0,0),new A.k(0.035,-0.07,0),new A.k(-0.035,-0.07,0),14478335,0.78,!0)
o.hJ=o.e.gaO().dr(o.c3(B.t.aD(q.a,0,q.b)),"weather:snow-particle")
o.hK=o.c5(B.ly)
p=new A.ct(new Float32Array(5376))
p.il(new A.k(-0.025,0,0),new A.k(0.025,0,0),new A.k(0.025,-0.12,0),new A.k(-0.025,-0.12,0),11519958,0.9,!0)
o.hL=o.e.gaO().dr(o.c3(B.t.aD(p.a,0,p.b)),"weather:hail-particle")
o.hM=o.c5(B.lz)},
lm(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null
a1.d2=a1.d1=0
a1.d3=a1.gfW()
a1.d5=a1.d4=0
a1.d6=!1
a1.d0=a1.d_=a1.ei=0
s=a1.y2
r=s==null
q=r?a2:s.a
if(q==null)q=B.y
p=$.bS()
if(!p.bF("weather_particles_enable"))return
o=B.b.n(p.H("weather_particle_density"),0,2)
n=B.b.n(p.H("weather_particle_size"),0.25,2)
m=r?a2:A.BI(s.a)
if(m==null)m=A.BI(B.y)
A:{p=B.ar===q
if(p){l=a1.hJ
break A}if(B.a6===q||B.aq===q){l=a1.hL
break A}l=a1.ej
break A}B:{if(p){k=a1.hK
break B}if(B.a6===q||B.aq===q){k=a1.hM
break B}k=a1.ek
break B}if(l==null||k==null||q===B.y||a1.xr<=0.01||a1.y1<=0.01)return
C:{if(p){p=38
break C}if(B.a6===q){p=26
break C}if(B.aq===q){p=30
break C}p=32
break C}j=B.d.n(B.b.aB(8+a1.xr*p*o*a1.y1),0,40)
p=a1.gfW()
if(j<0)A.f(A.p("atmospheric particle counts must be >= 0",a2))
i=B.d.n(j,0,p)
a1.d1=j
a1.d3=p
a1.d6=B.d.n(j,0,p)!==j
p=Math.sin(a1.dc*0.7)
h=r?a2:s.b.a
if(h==null)h=0
g=h+p*0.18
r=r?a2:s.b.c
f=(r==null?0:r)+0.12
r=m.f
e=new A.nR(l,k,B.eA,B.oD,B.oG,new A.C(g,m.b,f),B.oE,new A.C(g,-m.c,f),m.d,m.e,i,a1.en,r*n,m.r,2003132788+q.a)
d=e.nf(a4)
a1.d4=d.b
a1.d5=d.c
c=new A.kP(a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r,Math.max(0,a4.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,b=0;b<i;++b){a=e.cw(a4,b)
l=e.cw(c,b).c
k=a.c
h=a.d
a0=A.Gj(new A.k(k.a,k.b,k.c),q,a1.cZ,p,r,new A.k(l.a,l.b,l.c),new A.k(h.a,h.b,h.c))
if(!a0.a)continue;++a1.ei
a1.d_=a1.d_+a0.r
a1.d0=a1.d0+a0.f}a1.d2=e.jl(a3,a4,new A.vR(a1,m,n))},
kx(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.cZ,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
giA(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.y:s).b},
gdw(){var s=this.cY
s=s==null?null:s.b
return s==null?0:s},
giz(){var s=this.cY
s=s==null?null:s.d
return s==null?0:s},
gfW(){var s,r=this.w
r===$&&A.t()
s=r.a
A:{if(B.G===s){r=40
break A}if(B.O===s){r=24
break A}r=8
break A}return r},
h2(a,b){var s=A.Jt(a,b),r=A.Jr(a,b),q=A.K(s.c,t.i)
B.a.L(q,r)
return A.c([new A.hD("wall",new Float32Array(A.R(q))),new A.hD("floor",s.a),new A.hD("ceiling",s.b)],t.pv)},
c3(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.k(n,new A.C(q,p,a[o]))}if(n.length===0)throw A.b(A.i("house surface mesh cannot be empty"))
return new A.bW(B.ad,a,null,A.b1(n))},
kz(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.h2(a2,a3),a0=a3.a,a1=b.ok.h(0,a0)
if(a1==null)throw A.b(A.i("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.t()
k=k.w
if(k==null)k=A.f(A.i("renderer is not initialized"))
j=b.c3(l.b)
i=l.a
if(k.x)A.f(A.i("resource library is disposed"))
h=k.a
j.A()
g=h.b.aG(j,n+i)
f=g.a
h.c.l(0,f,h.bb(j))
k.f.k(0,g)
i=a1.h(0,i)
i.toString
e=new A.bf(g,i,B.B,-1,B.U,B.S,!0,!0,0,null)
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
A.b1(new A.H(k,h.i("C(1)").a(j.gao()),h.i("H<1,C>")))
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
l4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.w)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cM(l,l.r,l.e,A.v(l).i("cM<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bB.h(0,i)
if(h==null)A.f(A.i("Unknown house surface material: "+i))
i=j.a
B.a.k(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.k(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.q.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.q.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
kC(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.ct(new Float32Array(5376))
g=this.kB(a0.b)
r=new A.k(d,b,f)
q=new A.k(e,b,f)
p=new A.k(e,c,f)
o=new A.k(d,c,f)
n=new A.k(d,b,a)
m=new A.k(e,b,a)
l=new A.k(e,c,a)
k=new A.k(d,c,a)
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
g.push(new A.C(e,d,j[c]))}return new A.bW(B.ad,j,null,A.b1(g))},
kB(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dV(a){var s
A:{if(0===a){s=B.mO
break A}if(1===a){s=B.mQ
break A}if(2===a){s=B.mW
break A}if(3===a){s=B.n3
break A}if(4===a){s=B.n4
break A}if(5===a){s=B.mU
break A}if(6===a){s=B.n2
break A}if(7===a){s=B.mZ
break A}s=B.n1
break A}return s},
dY(a){var s
A:{if("architecture"===a){s=B.mP
break A}if("furniture"===a){s=B.dV
break A}if("fixture"===a){s=B.mY
break A}if("service"===a){s=B.n_
break A}if("story"===a){s=B.mX
break A}if("decor"===a){s=B.mS
break A}if("micro"===a){s=B.mV
break A}s=B.dV
break A}return s},
dk(a){return this.nG(t.G.a(a))},
nG(a){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l
var $async$dk=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:if(!p.aI){s=1
break}o=A.c([],t.iJ)
for(n=0;n<8;++n){m=B.jQ[n]
l=a.h(0,m)
if(l!=null)o.push(p.cK(m,l))}s=3
return A.a6(A.ps(o,t.H),$async$dk)
case 3:case 1:return A.aJ(q,r)}})
return A.aK($async$dk,r)},
cK(a,b){return this.kF(a,b)},
kF(a2,a3){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cK=A.aM(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.a(A.a(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a6(A.av(A.a(m.decode()),t.X),$async$cK)
case 7:l=null
k=null
j=null
i=a2
A:{if("grime"===i){j=B.mM
break A}if("porcelain-albedo"===i||"porcelain-normal"===i){j=B.mL
break A}if("skybox-main-atmosphere-v1"===i){j=B.mK
break A}j=B.mJ
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
c=new Uint8Array(A.R(e))
if(j.x)A.f(A.i("resource library is disposed"))
j.c.oQ(a0,c)
j=n.e.gaO()
if(j.x)A.f(A.i("resource library is disposed"))
j.c.nd(a0)
$.q.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.e1()
n.cM()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.ah(a1)
j=$.q.j()
j.setAttribute("data-renderer-texture-"+a2,"fallback")
n.e1()
n.cM()
A.a(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.y(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cK,r)},
e1(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aI||i.k2.a===0)return
s=i.k2
r=A.v(s).i("N<1,2>")
r=A.ld(new A.N(s,r),r.i("c0(r.E)").a(new A.vM()),r.i("r.E"),t.jP)
q=A.K(r,A.v(r).i("r.E"))
s=i.e
s===$&&A.t()
p=s.gaO().ghc().dn(q)
s=p.a
o=A.c(s.slice(0),A.B(s))
B.a.Y(o,new A.vN())
s=A.B(o)
r=s.i("e(1)")
s=s.i("H<1,e>")
n=new A.H(o,r.a(new A.vO()),s).W(0,",")
m=new A.H(o,r.a(new A.vP()),s).W(0,",")
s=p.cR(B.ec)
r=p.cR(B.ed)
l=p.cR(B.ee)
k=p.cR(B.ef);++i.hP
j=$.q.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hP)
if(!A.T($.q.j().hasAttribute("data-renderer-texture-residency-initial")))$.q.j().setAttribute("data-renderer-texture-residency-initial",n)},
cM(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aI||j.rx.a===0)return
s=A.c([],t.a6)
for(r=j.rx,r=new A.N(r,A.v(r).i("N<1,2>")).gv(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.db(p,o,B.c.p(p,"wall")?2:1))}r=j.e
r===$&&A.t()
r=r.gaO()
n=r.e
if(n===$){p=r.ghc()
r.e!==$&&A.nx()
n=r.e=new A.qV(p)}m=n.dn(s)
s=m.a
l=A.c(s.slice(0),A.B(s))
B.a.Y(l,new A.vJ())
s=A.B(l)
k=new A.H(l,s.i("e(1)").a(new A.vK()),s.i("H<1,e>")).W(0,",")
s=$.q.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cH(B.bE)+";pending="+m.cH(B.dy)+";missing="+m.cH(B.dz)+";evicted="+m.cH(B.dA))},
c7(a,b){return new A.bf(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fC(a,b,c){var s,r,q,p,o,n=A.Jq(a,b,c),m=n.length
if(m===0)throw A.b(A.i("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.C(q,p,n[o]))}return new A.bW(B.ad,n,null,A.b1(s))},
kZ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.S.j().aH(a),k=a.d,j=k.a,i=k.b,h=k.c
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
k.push(new A.C(r,q,n[p]))}return new A.bW(B.ad,n,null,A.b1(k))},
jR(a,b){var s,r,q,p=a.e,o=A.v(p).i("N<1,2>"),n=A.K(new A.N(p,o),o.i("r.E"))
B.a.Y(n,new A.vF())
p=$.q.j()
o=a.a
s=A.B(o)
r=a.c
q=A.B(r)
p.setAttribute("data-renderer-light-selection","points="+new A.H(o,s.i("j(1)").a(new A.vG()),s.i("H<1,j>")).W(0,":")+";spots="+new A.H(r,q.i("j(1)").a(new A.vH()),q.i("H<1,j>")).W(0,":"))
q=A.B(n)
p.setAttribute("data-renderer-light-rejections",new A.H(n,q.i("e(1)").a(new A.vI()),q.i("H<1,e>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
c5(a){var s,r=this.e
r===$&&A.t()
r=r.gaO()
if(r.x)A.f(A.i("resource library is disposed"))
a.A()
s=r.b.a.aG(a,null)
r.r.k(0,s)
this.rx.l(0,a.a,a)
return s},
$iBj:1}
A.vS.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:49}
A.vV.prototype={
$1(a){var s,r
A.h(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.d(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.l3(this.b.a,s)},
$S:174}
A.vW.prototype={
$1(a){return this.a},
$S:175}
A.vL.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:176}
A.vT.prototype={
$1(a){var s=0,r=A.aL(t.N),q,p
var $async$$1=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.T(p.ok))throw A.b(A.i("package manifest HTTP "+A.y(A.nt(p,"status",t.S))+": "+a))
s=4
return A.a6(A.av(A.a(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$1,r)},
$S:177}
A.vU.prototype={
$2(a,b){var s=0,r=A.aL(t.uo),q,p,o
var $async$$2=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.T(p.ok))throw A.b(A.i("package payload HTTP "+A.y(A.nt(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a6(A.av(A.a(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.B7(d,0,null)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$2,r)},
$S:178}
A.vY.prototype={
$1(a){var s=this.a.dy.h(0,A.u(a))
s.toString
return s},
$S:27}
A.vZ.prototype={
$1(a){var s,r,q,p
A.u(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.b(A.i("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:27}
A.vX.prototype={
$0(){var s,r=this.a.ce,q=this.b
if(!(q<r.length))return A.d(r,q)
s=r[q]
r=s.a
return new A.hw("warm:"+q,new A.C(r.a,r.b,r.c),s.b,B.b.n((s.c-this.c.r)/60,0,1))},
$S:179}
A.vQ.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.t()
if(r.b.p(0,a)){this.b.L(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.l(0,b[o],p+s.w.a.b+" does not install it")},
$S:180}
A.vR.prototype={
$1(a){var s=a.c
return!this.a.kx(new A.k(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:181}
A.vM.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c0(s,a.b,r)},
$S:182}
A.vN.prototype={
$2(a,b){var s=t.h
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:183}
A.vO.prototype={
$1(a){t.h.a(a)
return a.a.a+"="+a.b.b},
$S:50}
A.vP.prototype={
$1(a){var s=t.h.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:50}
A.vJ.prototype={
$2(a,b){var s=t.wl
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:185}
A.vK.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:186}
A.vF.prototype={
$2(a,b){var s=t.ou
return B.d.I(s.a(a).a,s.a(b).a)},
$S:187}
A.vG.prototype={
$1(a){return t.je.a(a).a},
$S:41}
A.vH.prototype={
$1(a){return t.je.a(a).a},
$S:41}
A.vI.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:189}
A.mM.prototype={}
A.jr.prototype={
hB(a,b){var s=this,r=b==null?s.d:b
return new A.jr(s.a,s.b,s.c,r,a)},
md(a){return this.hB(a,null)}}
A.vj.prototype={
gav(){return this.b},
gaX(){return this.c}}
A.wv.prototype={
$2(a,b){var s
A.zU(a,A.y(b))
switch(a){case"master":s=$.bm
if(s!=null)s.iT(b)
break
case"voice":s=$.bm
if(s!=null)s.iV(b)
break
case"effects":s=$.bm
if(s!=null)s.iS(b)
break
case"ambience":s=$.bm
if(s!=null)s.iR(b)
break
case"music":s=$.bm
if(s!=null)s.iU(b)
break}},
$S:39}
A.ww.prototype={
$1(a){var s
A.zU("muted",""+a)
s=$.bm
if(s!=null)s.f0(a)},
$S:10}
A.wx.prototype={
$1(a){var s
A.zU("mono",""+a)
s=$.bm
if(s!=null)s.dC(a)},
$S:10}
A.wD.prototype={
$2(a,b){A.zV(a,A.y(b))
A.Cj(a,b)},
$S:39}
A.wE.prototype={
$1(a){var s="high-contrast"
A.zV(s,""+a)
A.wf(s,a)},
$S:10}
A.wF.prototype={
$1(a){var s="strong-highlights"
A.zV(s,""+a)
A.wf(s,a)},
$S:10}
A.wG.prototype={
$1(a){$.ds().oq(a)
A.xn()
A.Cl()},
$S:191}
A.wH.prototype={
$0(){var s=$.ds()
s.a=A.dR(null,1)
s.b=A.dR(null,1)
A.xn()
A.Cl()},
$S:0}
A.wI.prototype={
$0(){A.e5(this.a)},
$S:0}
A.wJ.prototype={
$0(){this.a.ah()},
$S:0}
A.wK.prototype={
$0(){A.e5(this.a)},
$S:0}
A.wy.prototype={
$0(){A.hU(this.a)},
$S:0}
A.wz.prototype={
$1(a){$.jT=a
A.CP()
A.zn()},
$S:192}
A.wA.prototype={
$1(a){var s=$.cC()
$.zA=a
if(!s.Q&&a.Q){$.bw.j().a=1
$.bw.j().ir(7)
$.aA.j().i0()
$.cB().O(0)}A.CR()
A.Ck()},
$S:193}
A.wB.prototype={
$1(a){$.dp=a
A.zI()
A.nd()},
$S:194}
A.wC.prototype={
$0(){$.dp=B.aB
$.fE.j().eX($.dp)
A.zI()
A.nd()},
$S:0}
A.wr.prototype={
$1(a){var s,r=A.Dq(a,A.CB())
$.jV=A.h8($.k5().b,a)
s=r.b
$.eL.j().cB(a,$.k5().b,s)
$.q.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.CC=A.nf(a,r,$.CC)},
$S:195}
A.ws.prototype={
$0(){this.a.$1(B.jk)},
$S:0}
A.wt.prototype={
$0(){A.e5($.eL.j())},
$S:0}
A.wu.prototype={
$0(){A.e5($.eL.j())},
$S:0}
A.wn.prototype={
$1(a){},
$S:22}
A.wo.prototype={
$1(a){var s,r
$.zw=a
$.am.j().eY(a.r)
s=$.am.j()
r=s.ch
r.a=a.f
r.eE()
s.b0()
A.CQ()},
$S:196}
A.wp.prototype={
$0(){A.e5($.jM.j())},
$S:0}
A.wq.prototype={
$0(){A.e5($.jM.j())},
$S:0}
A.xe.prototype={
$0(){$.xC=A.T(this.a.matches)
$.A_=A.T(this.b.matches)
A.nd()},
$S:0}
A.xc.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xd.prototype={
$1(a){return this.a.$0()},
$S:2}
A.y3.prototype={
$1(a){var s
try{A.AJ(this.b,a,this.a)
return!0}catch(s){if(A.ah(s) instanceof A.A)return!1
else throw s}},
$S:197}
A.y4.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jS.j()
break
case 5:p=$.fE.j()
break
case 1:p=$.eL.j()
break
case 4:p=$.hJ.j()
break
case 2:p=$.jO.j()
break
case 3:p=$.jM.j()
break}s=p
r=null
switch(o){case 0:r=B.ma
break
case 5:r=B.mf
break
case 1:r=B.mb
break
case 4:r=B.me
break
case 2:r=B.mc
break
case 3:r=B.md
break}q=r
p=B.dt.h(0,a)
p.toString
A.zH(s,q,p)},
$S:198}
A.y5.prototype={
$0(){A.e5($.hL.j())},
$S:0}
A.yg.prototype={
$0(){return A.e5($.hL.j())},
$S:0}
A.yq.prototype={
$0(){$.cz.j().ah()},
$S:0}
A.yr.prototype={
$0(){$.cz.j().ah()},
$S:0}
A.ys.prototype={
$0(){A.zH($.hL.j(),B.dC,"pause.settings")},
$S:0}
A.yt.prototype={
$0(){$.cz.j().ah()
A.hT($.jP.j())},
$S:0}
A.yu.prototype={
$0(){A.k1("saved")},
$S:0}
A.yv.prototype={
$0(){$.cz.j().ah()
A.hT($.jP.j())},
$S:0}
A.yw.prototype={
$0(){A.zH($.nb.j(),B.mg,"pause.credits")},
$S:0}
A.y6.prototype={
$0(){return A.hU($.cz.j())},
$S:0}
A.y7.prototype={
$1(a){var s=$.V.j(),r=s.e.oU(a),q=r?B.iS:B.iT
s.fX(q,r?a:null)
return r},
$S:21}
A.y8.prototype={
$0(){return A.hU($.jQ.j())},
$S:0}
A.y9.prototype={
$2(a,b){var s,r
if($.aA.j().y){s=$.aP.j().gcd()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.HA(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.dc,a)
A.Hz(B.dc[a])}}},
$S:199}
A.ya.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gag().a===21){A.CW(!1)
return}s=$.S.j().y.b
$.V.j().jc(a,b,$.ag)
if(b===B.bV&&$.ag===$.S.j().r){A.Iw()
A.fI("woke in the living room")}r=$.S.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cv()
if(typeof n!=="number")return A.xZ(n)
if(!(o<n))break
if($.S.b===$.S)A.f(A.a9(""))
p=B.a.h(B.V,q).b
o=$.aC
if(o!=null){n=$.S.b
if(n===$.S)A.f(A.a9(""))
o.dq(n,p)}o=q
if(typeof o!=="number")return o.a4()
q=o+1}A.k1("saved after sleep")},
$S:200}
A.yb.prototype={
$0(){return A.hU($.fG.j())},
$S:0}
A.yc.prototype={
$0(){return A.hU($.jP.j())},
$S:0}
A.yd.prototype={
$0(){return A.e5($.nb.j())},
$S:0}
A.ye.prototype={
$0(){A.hU($.jN.j())},
$S:0}
A.yf.prototype={
$0(){A.hU($.jN.j())},
$S:0}
A.yh.prototype={
$1(a){return A.CV()},
$S:2}
A.yi.prototype={
$1(a){if(A.u(A.a(v.G.document).visibilityState)==="hidden")A.Iz()},
$S:1}
A.yj.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a(a)
if(A.u(l.code)==="CapsLock"&&!A.T(l.repeat)){l.preventDefault()
p=$.bS()
o=!p.a
p.a=o
if(o)A.qv(A.a(v.G.document),"exitPointerLock",t.X)
else $.am.j().dt($.q.j())
return}p=$.bS()
if(p.a&&!A.T(l.repeat)){if(A.u(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.am.j().dt($.q.j())
return}if(A.u(l.code)==="KeyC"){l.preventDefault()
A.wM()
return}if(A.u(l.code)==="KeyI"){l.preventDefault()
A.xa()
return}if(A.u(l.code)==="ArrowUp"||A.u(l.code)==="KeyW"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c-1+n,n)
o=$.eQ
if(o!=null){p=p.gbq().length
o.a.dB(-1,p)}return}if(A.u(l.code)==="ArrowDown"||A.u(l.code)==="KeyS"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c+1,n)
o=$.eQ
if(o!=null){p=p.gbq().length
o.a.dB(1,p)}return}if(A.u(l.code)==="ArrowLeft"||A.u(l.code)==="KeyA"){l.preventDefault()
p.mN()
return}if(A.u(l.code)==="ArrowRight"||A.u(l.code)==="KeyD"){l.preventDefault()
p.no()
return}if(A.u(l.code)==="KeyQ"){l.preventDefault()
m=p.gbN()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y-m.w*0.2,m.f,m.r)
return}if(A.u(l.code)==="KeyE"){l.preventDefault()
m=p.gbN()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y+m.w*0.2,m.f,m.r)
return}if(A.u(l.code)==="KeyR"){l.preventDefault()
if(A.T(l.shiftKey))p.op()
else p.or()
return}if(B.c.V(A.u(l.code),"Digit")||B.c.V(A.u(l.code),"Numpad")){o=A.u(l.code)
o=A.yH(o,"Digit","")
s=A.yH(o,"Numpad","")
r=A.dL(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.aA.j().y&&!A.T(l.repeat))if($.cB().nj(A.u(l.code))){l.preventDefault()
return}if(A.u(l.code)==="Escape"&&!A.T(l.repeat)){p=$.bl
if(p==null)A.hT($.cz.j())
else p.ah()
return}q=$.bl==null&&!p.a
if(!A.T(l.repeat)&&q)$.fF.j().hW(new A.lI(A.u(l.code),!0,1))
if(A.u(l.code)==="KeyP"&&!A.T(l.repeat)&&$.DT())$.hV=!$.hV
if((A.u(l.code)==="KeyJ"||A.u(l.code)==="Tab")&&!A.T(l.repeat)&&!$.aA.j().y){l.preventDefault()
A.k2($.jQ.j())}if(A.u(l.code)==="KeyL"&&!A.T(l.repeat)&&!$.aA.j().y)A.k2($.fG.j())
if(A.u(l.code)==="KeyH"&&!A.T(l.repeat)&&!$.aA.j().y)A.k2($.jP.j())
if(A.u(l.code)==="KeyO"&&!A.T(l.repeat)&&!$.aA.j().y)A.k2($.jR.j())
if(A.u(l.code)==="KeyK"&&!A.T(l.repeat)&&q)A.k1("saved")},
$S:1}
A.yk.prototype={
$1(a){var s=A.a(a)
if($.bl==null)$.fF.j().hW(new A.lI(A.u(s.code),!1,0))},
$S:1}
A.yl.prototype={
$1(a){return A.Cn()},
$S:2}
A.ym.prototype={
$1(a){return A.Cn()},
$S:2}
A.yn.prototype={
$1(a){return A.I1(A.a(a))},
$S:2}
A.yo.prototype={
$1(a){var s=A.a(a)
$.q.j().focus()
if($.aA.j().y){s.preventDefault()
A.I0(s)
return}$.am.j().dt($.q.j())},
$S:1}
A.yp.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.bS()
if(!o.a||$.eQ==null)return
p.preventDefault()
s=o.gbq()
r=A.a1(p.deltaY)>0?1:-1
o=$.eQ
o.toString
q=J.cD(s)
o.a.dB(A.h(r),q)},
$S:1}
A.xf.prototype={
$1(a){var s=A.u(A.a(a).message)
A.xr(s,null)},
$S:1}
A.xg.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.xr("unhandled rejection: "+A.y(s==null?A.u(a.type):s),null)},
$S:1}
A.xm.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:48}
A.xx.prototype={
$0(){this.a.className=""},
$S:14}
A.xF.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:43}
A.xj.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.xt.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.xo.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.xq.prototype={
$1(a){return t.o.a(a).w},
$S:13}
A.xK.prototype={
$1(a){return t.o.a(a).w},
$S:13}
A.xE.prototype={
$2(a,b){return A.aB(a)+t.cZ.a(b).d},
$S:201};(function aliases(){var s=J.eu.prototype
s.jn=s.t
s=A.r.prototype
s.jm=s.dz
s=A.iJ.prototype
s.jo=s.bT})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"I8","Fd",42)
r(J.x.prototype,"gaE","p",9)
q(A,"In","FA",33)
r(A.aX.prototype,"gaE","p",9)
r(A.h6.prototype,"gaE","p",9)
p(A.cp.prototype,"gm8","K",9)
o(A,"Jl","GD",24)
o(A,"Jm","GE",24)
o(A,"Jn","GF",24)
q(A,"Db","IZ",0)
r(A.cx.prototype,"gaE","p",9)
r(A.hz.prototype,"gaE","p",9)
o(A,"Jy","HJ",15)
p(A.lg.prototype,"gox","oy",100)
var l
p(l=A.m_.prototype,"got","ou",11)
p(l,"goC","oD",11)
p(l,"goE","oF",11)
p(l,"gov","ow",11)
p(l,"goA","oB",11)
q(A,"Dg","GJ",203)
q(A,"L7","z2",49)
p(A.da.prototype,"gao","iv",67)
n(A.jH.prototype,"gmT","a_",0)
p(l=A.l1.prototype,"gkH","kI",2)
p(l,"gkJ","kK",2)
p(l,"gkN","kO",2)
p(l,"gkR","kS",2)
p(l,"gkT","kU",2)
p(l,"gkP","kQ",2)
p(l,"gkL","kM",2)
p(l,"gkV","kW",2)
o(A,"JW","Cs",15)
o(A,"K_","Cr",15)
o(A,"JO","F9",204)
o(A,"JP","Fb",205)
o(A,"K4","F3",206)
m(A,"Kd",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["BK",function(){return A.BK(0,0,0)}],207,0)
p(A.iJ.prototype,"gkX","kY",2)
p(A.hr.prototype,"gkv","kw",146)
p(A.mc.prototype,"gny","nz",29)
o(A,"Dp","IC",208)
q(A,"Do","HG",0)
o(A,"JS","HB",139)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.yU,J.l3,A.iV,J.eW,A.r,A.i8,A.at,A.a3,A.tm,A.al,A.iz,A.W,A.ij,A.ig,A.ja,A.aE,A.ez,A.bj,A.hf,A.fW,A.em,A.dZ,A.df,A.uy,A.ro,A.ih,A.jy,A.af,A.qP,A.bV,A.ae,A.cM,A.iu,A.mI,A.mo,A.j1,A.n_,A.vk,A.w6,A.cS,A.mB,A.n2,A.w2,A.mp,A.cf,A.bn,A.mt,A.dY,A.as,A.mq,A.mY,A.jK,A.ji,A.mH,A.fA,A.jl,A.jD,A.n3,A.en,A.kv,A.vD,A.wa,A.w7,A.f0,A.dx,A.my,A.lr,A.j_,A.vl,A.A,A.P,A.ax,A.n0,A.uh,A.bE,A.jF,A.uC,A.mV,A.rn,A.mE,A.eI,A.eb,A.m6,A.r6,A.lh,A.rh,A.r8,A.rb,A.fa,A.rZ,A.dN,A.ly,A.oI,A.oJ,A.oL,A.oK,A.lx,A.i7,A.ub,A.kO,A.kP,A.dO,A.kY,A.aT,A.kE,A.lw,A.bO,A.cO,A.bb,A.j6,A.bW,A.ky,A.rp,A.lz,A.lK,A.bf,A.lY,A.iS,A.aY,A.po,A.db,A.c7,A.qX,A.qV,A.lg,A.m2,A.r2,A.i6,A.r5,A.r7,A.hh,A.lE,A.c0,A.cb,A.us,A.uq,A.dm,A.m_,A.uf,A.hw,A.cu,A.uV,A.dH,A.kM,A.kN,A.kQ,A.pn,A.hB,A.aw,A.bz,A.aO,A.Q,A.ia,A.lC,A.be,A.t0,A.ba,A.t2,A.t1,A.mD,A.iR,A.lJ,A.vm,A.n1,A.w1,A.mO,A.mA,A.mS,A.mL,A.vy,A.bX,A.bT,A.b3,A.p0,A.p_,A.fN,A.fc,A.pp,A.da,A.lF,A.hx,A.C,A.nS,A.fP,A.nR,A.i5,A.mr,A.kn,A.ms,A.kA,A.mv,A.id,A.mw,A.kF,A.mx,A.kX,A.mC,A.iB,A.mJ,A.fR,A.ko,A.z3,A.iL,A.mP,A.lD,A.mQ,A.fm,A.lS,A.mT,A.lT,A.mU,A.lV,A.mX,A.lU,A.mW,A.m7,A.n4,A.mg,A.n6,A.n5,A.iT,A.mk,A.n9,A.oG,A.kU,A.kW,A.im,A.iX,A.o,A.kB,A.hj,A.pL,A.eJ,A.dd,A.h2,A.vc,A.e1,A.jJ,A.jI,A.n8,A.n7,A.wc,A.v8,A.vb,A.kD,A.kh,A.hF,A.jH,A.nY,A.nD,A.i3,A.nU,A.yQ,A.o5,A.o_,A.jb,A.fS,A.oD,A.pm,A.l1,A.qm,A.qq,A.b8,A.qL,A.qI,A.p1,A.qR,A.ct,A.k,A.v0,A.cv,A.eD,A.uZ,A.uX,A.lW,A.ml,A.ow,A.kG,A.pa,A.h3,A.bH,A.lv,A.rS,A.hq,A.tf,A.fj,A.kS,A.pz,A.py,A.kj,A.oq,A.ed,A.ef,A.eh,A.ee,A.eg,A.kp,A.li,A.cV,A.mm,A.ir,A.q3,A.a8,A.kJ,A.kZ,A.q4,A.kK,A.dl,A.kL,A.eH,A.eq,A.tc,A.eG,A.q1,A.pe,A.u9,A.q6,A.d8,A.cK,A.l4,A.qt,A.qr,A.qs,A.dK,A.qa,A.fu,A.c9,A.lc,A.fn,A.fi,A.qd,A.d7,A.q2,A.f6,A.qc,A.d6,A.qi,A.iK,A.iy,A.bA,A.uU,A.lb,A.c4,A.qx,A.i4,A.ot,A.iM,A.rL,A.iN,A.lA,A.rF,A.rE,A.rG,A.rH,A.rI,A.rJ,A.hk,A.rK,A.rM,A.rP,A.rQ,A.ix,A.rY,A.ta,A.lI,A.t9,A.tb,A.tZ,A.cs,A.u0,A.hs,A.p2,A.vd,A.fv,A.kt,A.qk,A.qo,A.td,A.de,A.te,A.kT,A.fs,A.v5,A.j9,A.eC,A.uW,A.v4,A.ft,A.fr,A.mh,A.hA,A.v7,A.pw,A.kR,A.ri,A.d1,A.bC,A.rC,A.uk,A.fq,A.fp,A.j8,A.mf,A.fg,A.dk,A.ui,A.dP,A.lP,A.lM,A.lN,A.lO,A.un,A.k9,A.yP,A.ea,A.nN,A.nT,A.ec,A.ov,A.bo,A.oE,A.fY,A.dv,A.ku,A.iJ,A.p5,A.pF,A.pH,A.h5,A.dG,A.pY,A.pO,A.pP,A.ck,A.pZ,A.dc,A.fT,A.rr,A.dJ,A.ew,A.c8,A.rw,A.rW,A.bg,A.tT,A.tX,A.cE,A.nK,A.mc,A.uT,A.dW,A.bF,A.ce,A.c2,A.me,A.kb,A.mb,A.hD,A.mN,A.mM,A.jr,A.vj])
q(J.l3,[J.l6,J.it,J.iv,J.ha,J.hb,J.h9,J.et])
q(J.iv,[J.eu,J.x,A.ev,A.iF])
q(J.eu,[J.lu,J.fo,J.dI])
r(J.l5,A.iV)
r(J.qw,J.x)
q(J.h9,[J.is,J.l7])
q(A.r,[A.eF,A.U,A.cN,A.I,A.ii,A.dX,A.fz,A.mn,A.mZ,A.bI])
q(A.eF,[A.f_,A.jL])
r(A.jg,A.f_)
r(A.je,A.jL)
r(A.b9,A.je)
q(A.at,[A.hc,A.dT,A.l8,A.m1,A.lL,A.mz,A.iw,A.ke,A.cF,A.j4,A.m0,A.ht,A.ks])
r(A.hy,A.a3)
r(A.dw,A.hy)
q(A.U,[A.a0,A.ac,A.ao,A.N,A.fy,A.jk])
q(A.a0,[A.j2,A.H,A.bM,A.mG])
r(A.dy,A.cN)
q(A.bj,[A.e_,A.e0,A.hC])
q(A.e_,[A.a5,A.fD,A.js,A.jt])
q(A.e0,[A.aH,A.bk,A.ju,A.jv])
r(A.jw,A.hC)
r(A.hH,A.hf)
r(A.eA,A.hH)
r(A.ib,A.eA)
q(A.em,[A.kr,A.kq,A.lZ,A.y_,A.y1,A.vg,A.vf,A.wh,A.pt,A.vw,A.vz,A.qS,A.vB,A.yy,A.yz,A.xR,A.tY,A.r9,A.re,A.rf,A.rd,A.xh,A.xB,A.xk,A.xz,A.t_,A.uH,A.r_,A.r0,A.r1,A.rq,A.qY,A.qZ,A.r3,A.xS,A.ut,A.uu,A.uv,A.ux,A.pi,A.pg,A.ph,A.rt,A.ru,A.t7,A.t6,A.t5,A.t4,A.t3,A.t8,A.x2,A.x3,A.th,A.ti,A.yG,A.yE,A.pq,A.qU,A.xO,A.pM,A.pN,A.v9,A.va,A.o7,A.ob,A.oa,A.o9,A.oc,A.nZ,A.nE,A.nF,A.nG,A.nW,A.nX,A.nV,A.qn,A.qJ,A.v1,A.v2,A.uY,A.v_,A.pd,A.pA,A.pC,A.pD,A.pE,A.od,A.oe,A.of,A.og,A.oh,A.oj,A.ok,A.ol,A.om,A.on,A.oo,A.op,A.oi,A.xN,A.or,A.os,A.xl,A.xI,A.oH,A.pf,A.q5,A.yI,A.x8,A.x7,A.we,A.xw,A.qj,A.ua,A.q9,A.q7,A.xH,A.qe,A.qg,A.qh,A.xG,A.p9,A.qO,A.qE,A.xv,A.rN,A.rO,A.rR,A.u_,A.u7,A.u1,A.u2,A.u5,A.u6,A.u4,A.u3,A.ug,A.p3,A.p4,A.v6,A.pv,A.rD,A.uj,A.tk,A.tl,A.uo,A.up,A.nC,A.nA,A.o2,A.o3,A.oy,A.oC,A.oB,A.oA,A.oU,A.oT,A.oV,A.oW,A.oX,A.oS,A.oN,A.oO,A.oZ,A.p6,A.p7,A.p8,A.pc,A.pG,A.pI,A.pJ,A.pW,A.pS,A.pT,A.pU,A.pV,A.pR,A.pQ,A.q0,A.qz,A.qA,A.qB,A.rx,A.ry,A.rz,A.tO,A.tP,A.tG,A.tH,A.tF,A.tI,A.tq,A.tJ,A.tK,A.tL,A.tE,A.tw,A.tx,A.ty,A.tz,A.tA,A.tB,A.tC,A.tD,A.tv,A.tr,A.ts,A.tt,A.tu,A.tN,A.tM,A.tV,A.ue,A.nM,A.uR,A.uQ,A.uS,A.uM,A.uP,A.uK,A.uJ,A.xV,A.uI,A.nH,A.nI,A.nJ,A.vV,A.vW,A.vL,A.vT,A.vY,A.vZ,A.vR,A.vM,A.vO,A.vP,A.vK,A.vG,A.vH,A.vI,A.ww,A.wx,A.wE,A.wF,A.wG,A.wz,A.wA,A.wB,A.wr,A.wn,A.wo,A.xc,A.xd,A.y3,A.y4,A.y7,A.yh,A.yi,A.yj,A.yk,A.yl,A.ym,A.yn,A.yo,A.yp,A.xf,A.xg,A.xm,A.xF,A.xt,A.xo,A.xq,A.xK])
q(A.kr,[A.oM,A.qF,A.y0,A.wi,A.xL,A.pu,A.vx,A.qQ,A.qT,A.vE,A.uE,A.uD,A.ra,A.rc,A.rg,A.yJ,A.yK,A.yA,A.qW,A.r4,A.ur,A.uw,A.yB,A.pj,A.tj,A.yF,A.yD,A.o8,A.o0,A.o1,A.qK,A.pB,A.xA,A.qb,A.qN,A.u8,A.qp,A.px,A.rk,A.rl,A.rm,A.ul,A.um,A.oF,A.qC,A.qD,A.nL,A.uN,A.uL,A.vU,A.vQ,A.vN,A.vJ,A.vF,A.wv,A.wD,A.y9,A.ya,A.xj,A.xE])
q(A.fW,[A.a4,A.d4])
q(A.df,[A.fX,A.jx,A.jE])
q(A.fX,[A.aX,A.h6])
q(A.kq,[A.rT,A.vh,A.vi,A.w3,A.pr,A.vn,A.vs,A.vr,A.vp,A.vo,A.vv,A.vu,A.vt,A.w0,A.xu,A.w9,A.w8,A.x1,A.wV,A.wW,A.x0,A.wQ,A.wS,A.wR,A.x_,A.wO,A.wP,A.wX,A.wY,A.wZ,A.wU,A.wT,A.x5,A.x6,A.xP,A.q8,A.qf,A.x9,A.nB,A.nP,A.nO,A.o4,A.oQ,A.oR,A.oP,A.pK,A.pX,A.rB,A.to,A.tp,A.tQ,A.tR,A.tS,A.tW,A.ud,A.uO,A.vS,A.vX,A.wH,A.wI,A.wJ,A.wK,A.wy,A.wC,A.ws,A.wt,A.wu,A.wp,A.wq,A.xe,A.y5,A.yg,A.yq,A.yr,A.ys,A.yt,A.yu,A.yv,A.yw,A.y6,A.y8,A.yb,A.yc,A.yd,A.ye,A.yf,A.xx])
r(A.iH,A.dT)
q(A.lZ,[A.lX,A.fQ])
q(A.af,[A.cp,A.jh,A.mF])
r(A.f7,A.cp)
r(A.hi,A.ev)
q(A.iF,[A.lj,A.bq])
q(A.bq,[A.jn,A.jp])
r(A.jo,A.jn)
r(A.iD,A.jo)
r(A.jq,A.jp)
r(A.iE,A.jq)
q(A.iD,[A.iC,A.lk])
q(A.iE,[A.ll,A.lm,A.ln,A.lo,A.lp,A.fb,A.iG])
r(A.hG,A.mz)
r(A.jc,A.mt)
r(A.mR,A.jK)
r(A.jj,A.jh)
r(A.cx,A.jx)
r(A.hz,A.jE)
q(A.en,[A.kH,A.kk,A.l9])
q(A.kH,[A.kc,A.m5])
q(A.kv,[A.w4,A.ou,A.qH,A.qG,A.uG,A.uF])
r(A.kd,A.w4)
r(A.la,A.iw)
r(A.vC,A.vD)
q(A.cF,[A.hm,A.l0])
r(A.mu,A.jF)
q(A.my,[A.kC,A.fe,A.h_,A.fV,A.f5,A.fO,A.iA,A.cT,A.hp,A.h1,A.km,A.i9,A.h0,A.fh,A.f9,A.cR,A.dS,A.bh,A.f2,A.co,A.iU,A.d5,A.ho,A.iZ,A.h4,A.kg,A.jd,A.jf,A.kV,A.ik,A.io,A.ip,A.f4,A.il,A.fl,A.di,A.fU,A.h7,A.hE,A.kl,A.eZ,A.kw,A.kz,A.bs,A.ki,A.cm,A.dA,A.f1,A.dz,A.ep,A.eo,A.er,A.lt,A.lH,A.hn,A.bZ,A.iY,A.dg,A.c_,A.bD,A.l2,A.fw,A.cr,A.ey,A.eE,A.eX,A.d_,A.cG,A.d0,A.du,A.dt,A.ej,A.ek,A.ei,A.eY,A.dD,A.d2,A.d3,A.dE,A.dC,A.dF,A.cn,A.dB,A.cI,A.ka,A.bB,A.cq,A.ex,A.cQ,A.bY,A.bN,A.iW,A.bU,A.cc,A.cd,A.eB,A.dj])
q(A.dO,[A.bL,A.bt,A.c6,A.ls,A.cJ])
r(A.tg,A.mS)
r(A.mi,A.n7)
r(A.jm,A.dl)
q(A.iJ,[A.ic,A.oY,A.pb,A.iq,A.q_,A.qy,A.rA,A.tn,A.hr,A.uc])
q(A.uT,[A.md,A.mK,A.bv,A.ma,A.m8,A.j7,A.m9])
s(A.hy,A.ez)
s(A.jL,A.a3)
s(A.jn,A.a3)
s(A.jo,A.aE)
s(A.jp,A.a3)
s(A.jq,A.aE)
s(A.hH,A.jD)
s(A.jE,A.n3)
s(A.mS,A.vy)
s(A.n7,A.wc)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",z:"double",by:"num",e:"String",l:"bool",ax:"Null",J:"List",L:"Object",Y:"Map",aj:"JSObject"},mangledNames:{},types:["~()","ax(L?)","~(L?)","l(e)","l(z)","cH()","l(@)","0&()","l(cs)","l(L?)","~(l)","cH(bt?)","l(aw)","l(fu)","ax()","@(@)","l(fg)","j(c4,c4)","l(bb)","l(Q)","~(@)","l(j)","ax(@)","l(c4)","~(~())","e(eb)","j(P<e,e>,P<e,e>)","e(e)","l(bg)","l(c2)","@(e)","l(c1?)","~(e,e)","j()","P<e,e>(@,@)","~(aj)","e(L?)","e(ed)","e(ef)","~(e,z)","@()","j(b8)","j(@,@)","l(bC)","l(d_)","l(P<e,J<e>>)","l(eH)","l(cI)","l(cn)","l()","e(cb)","l(bZ)","~(L?,L?)","fm()","J<bO>()","i7()","z()","fR()","cH?()","l(P<e,aY>)","aY(P<e,aY>)","aY(aY,aY)","j(b3<bX>,b3<bX>)","ca(b3<bX>)","j(b3<bT>,b3<bT>)","ca(b3<bT>)","fc(z,z,z,z)","C(C)","~(fm)","~(L,dh)","Y<e,@>(fa)","z(z,hF)","aS<ax>(P<e,e>)","l(J<e>)","j(e,e)","j(c9,c9)","ax(L,dh)","+effectiveScore,light,score(z,b8,z)(b8)","j(+effectiveScore,light,score(z,b8,z),+effectiveScore,light,score(z,b8,z))","l(cm)","~(@,@)","ax(~())","@(@,e)","l(fi)","ed(L?)","ef(L?)","ee(L?)","eg(L?)","j(+influence,light(z,bO),+influence,light(z,bO))","Y<e,e>(Y<e,e>,e)","l(c7)","e(ee)","e(eg)","e(eh)","j(db,db)","ep(e)","eh(L?)","l(fn)","e(j,a8,a8,a8)","j(dl,dl)","cO(c6)","l(eG)","j(j)","l(c9)","l(cK)","l(d8)","0&(e,j?)","j(dK,dK)","l(d7)","P<e,e>(e,@)","e?(e)","aS<c1>(e)","bL(j,j,e?)","j(cs,cs)","j(j,+(bL,bW))","z(z)","l(c_)","l(bD)","fs()","z(e)","l(cb)","j(c0,c0)","j(P<e,d1>,P<e,d1>)","L?(L?)","P<j,@>(j,fq)","P<j,@>(j,fp)","l(dP)","bt(j,j,e?)","l(P<@,@>)","P<e,e>(P<@,@>)","l?(L?)","e(j)","e()","0^(r<0^>,L?)<L?>","z(z,e)","j(j,+(bt,dm))","J<e>(J<e>)","~(z)","j(+influence,source(z,cu),+influence,source(z,cu))","~(j)","ax(aj)","0^(e,r<0^>)<D>","e(aw)","Y<e,L?>(dJ)","e(bB)","l(bB)","l(bN)","j(ab,ab)","l(dD)","l(d2)","l(d3)","l(dE)","l(dC)","l(dF)","l(dB)","ax(@,dh)","l(cG)","l(d0)","l(du)","l(dt)","J<aj>()","e(cE)","j(cE,cE)","j(j,c1)","j(c2,c2)","J<dk>()","l(dk)","l(P<e,e>)","j(ce,ce)","Y<e,@>(c2)","l(cd)","l(cc)","l(bU)","cJ(j,j,e?)","c6(j)","hh(hk)","l(Y<e,L>)","aS<e>(e)","aS<c1>(e,e)","hw()","~(e,r<e>)","l(fP)","c0(P<e,bt>)","j(cb,cb)","iT(bL)","j(c7,c7)","e(c7)","j(P<j,e>,P<j,e>)","cH(e{fallback:e?})","e(P<j,e>)","~(j,@)","~(bN)","~(ec)","~(h5)","~(ea)","~(dG)","~(fY)","l(hq)","~(bY)","~(j,e)","~(c_,bD)","z(z,eC)","bO?()","hB()","d8(L?)","cK(L?)","d7(L?)","hA({materialDissolution01:z,snowDepthM:z,waterFilmDepthM:z})","~(by)","c6(j,j,e?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fD&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.js&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jt&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aH&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bk&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.ju&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jv&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jw&&A.JU(a,b.a)}}
A.H0(v.typeUniverse,JSON.parse('{"dI":"eu","lu":"eu","fo":"eu","Kp":"ev","x":{"J":["1"],"U":["1"],"aj":[],"r":["1"]},"l6":{"l":[],"an":[]},"it":{"ax":[],"an":[]},"iv":{"aj":[]},"eu":{"aj":[]},"l5":{"iV":[]},"qw":{"x":["1"],"J":["1"],"U":["1"],"aj":[],"r":["1"]},"eW":{"ai":["1"]},"h9":{"z":[],"by":[],"bp":["by"]},"is":{"z":[],"j":[],"by":[],"bp":["by"],"an":[]},"l7":{"z":[],"by":[],"bp":["by"],"an":[]},"et":{"e":[],"bp":["e"],"rv":[],"an":[]},"eF":{"r":["2"]},"i8":{"ai":["2"]},"f_":{"eF":["1","2"],"r":["2"],"r.E":"2"},"jg":{"f_":["1","2"],"eF":["1","2"],"U":["2"],"r":["2"],"r.E":"2"},"je":{"a3":["2"],"J":["2"],"eF":["1","2"],"U":["2"],"r":["2"]},"b9":{"je":["1","2"],"a3":["2"],"J":["2"],"eF":["1","2"],"U":["2"],"r":["2"],"r.E":"2","a3.E":"2"},"hc":{"at":[]},"dw":{"a3":["j"],"ez":["j"],"J":["j"],"U":["j"],"r":["j"],"a3.E":"j","ez.E":"j"},"U":{"r":["1"]},"a0":{"U":["1"],"r":["1"]},"j2":{"a0":["1"],"U":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"al":{"ai":["1"]},"cN":{"r":["2"],"r.E":"2"},"dy":{"cN":["1","2"],"U":["2"],"r":["2"],"r.E":"2"},"iz":{"ai":["2"]},"H":{"a0":["2"],"U":["2"],"r":["2"],"r.E":"2","a0.E":"2"},"I":{"r":["1"],"r.E":"1"},"W":{"ai":["1"]},"ii":{"r":["2"],"r.E":"2"},"ij":{"ai":["2"]},"ig":{"ai":["1"]},"dX":{"r":["1"],"r.E":"1"},"ja":{"ai":["1"]},"hy":{"a3":["1"],"ez":["1"],"J":["1"],"U":["1"],"r":["1"]},"bM":{"a0":["1"],"U":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"a5":{"e_":[],"bj":[]},"fD":{"e_":[],"bj":[]},"js":{"e_":[],"bj":[]},"jt":{"e_":[],"bj":[]},"aH":{"e0":[],"bj":[]},"bk":{"e0":[],"bj":[]},"ju":{"e0":[],"bj":[]},"jv":{"e0":[],"bj":[]},"jw":{"hC":[],"bj":[]},"ib":{"eA":["1","2"],"hH":["1","2"],"hf":["1","2"],"jD":["1","2"],"Y":["1","2"]},"fW":{"Y":["1","2"]},"a4":{"fW":["1","2"],"Y":["1","2"]},"fz":{"r":["1"],"r.E":"1"},"dZ":{"ai":["1"]},"d4":{"fW":["1","2"],"Y":["1","2"]},"fX":{"df":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"aX":{"fX":["1"],"df":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"h6":{"fX":["1"],"df":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"iH":{"dT":[],"at":[]},"l8":{"at":[]},"m1":{"at":[]},"jy":{"dh":[]},"em":{"f3":[]},"kq":{"f3":[]},"kr":{"f3":[]},"lZ":{"f3":[]},"lX":{"f3":[]},"fQ":{"f3":[]},"lL":{"at":[]},"cp":{"af":["1","2"],"yW":["1","2"],"Y":["1","2"],"af.K":"1","af.V":"2"},"ac":{"U":["1"],"r":["1"],"r.E":"1"},"bV":{"ai":["1"]},"ao":{"U":["1"],"r":["1"],"r.E":"1"},"ae":{"ai":["1"]},"N":{"U":["P<1,2>"],"r":["P<1,2>"],"r.E":"P<1,2>"},"cM":{"ai":["P<1,2>"]},"f7":{"cp":["1","2"],"af":["1","2"],"yW":["1","2"],"Y":["1","2"],"af.K":"1","af.V":"2"},"e_":{"bj":[]},"e0":{"bj":[]},"hC":{"bj":[]},"iu":{"FK":[],"rv":[]},"mI":{"iP":[],"hg":[]},"mn":{"r":["iP"],"r.E":"iP"},"mo":{"ai":["iP"]},"j1":{"hg":[]},"mZ":{"r":["hg"],"r.E":"hg"},"n_":{"ai":["hg"]},"hi":{"ev":[],"aj":[],"an":[]},"fb":{"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"ev":{"aj":[],"an":[]},"iF":{"aj":[]},"lj":{"aj":[],"an":[]},"bq":{"c5":["1"],"aj":[]},"iD":{"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"U":["z"],"aj":[],"r":["z"],"aE":["z"]},"iE":{"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"]},"iC":{"pk":[],"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"U":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"lk":{"pl":[],"a3":["z"],"bq":["z"],"J":["z"],"c5":["z"],"U":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"ll":{"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"lm":{"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"ln":{"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"lo":{"uA":[],"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"lp":{"uB":[],"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"iG":{"c1":[],"a3":["j"],"bq":["j"],"J":["j"],"c5":["j"],"U":["j"],"aj":[],"r":["j"],"aE":["j"],"an":[],"a3.E":"j","aE.E":"j"},"mz":{"at":[]},"hG":{"dT":[],"at":[]},"cf":{"ai":["1"]},"bI":{"r":["1"],"r.E":"1"},"bn":{"at":[]},"jc":{"mt":["1"]},"as":{"aS":["1"]},"jK":{"BT":[]},"mR":{"jK":[],"BT":[]},"jh":{"af":["1","2"],"Y":["1","2"]},"jj":{"jh":["1","2"],"af":["1","2"],"Y":["1","2"],"af.K":"1","af.V":"2"},"fy":{"U":["1"],"r":["1"],"r.E":"1"},"ji":{"ai":["1"]},"cx":{"df":["1"],"B_":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"fA":{"ai":["1"]},"a3":{"J":["1"],"U":["1"],"r":["1"]},"af":{"Y":["1","2"]},"jk":{"U":["2"],"r":["2"],"r.E":"2"},"jl":{"ai":["2"]},"hf":{"Y":["1","2"]},"eA":{"hH":["1","2"],"hf":["1","2"],"jD":["1","2"],"Y":["1","2"]},"df":{"dQ":["1"],"U":["1"],"r":["1"]},"jx":{"df":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"hz":{"df":["1"],"n3":["1"],"dQ":["1"],"U":["1"],"r":["1"]},"mF":{"af":["e","@"],"Y":["e","@"],"af.K":"e","af.V":"@"},"mG":{"a0":["e"],"U":["e"],"r":["e"],"r.E":"e","a0.E":"e"},"kc":{"en":["e","J<j>"]},"kk":{"en":["J<j>","e"]},"kH":{"en":["e","J<j>"]},"iw":{"at":[]},"la":{"at":[]},"l9":{"en":["L?","e"]},"m5":{"en":["e","J<j>"]},"f0":{"bp":["f0"]},"z":{"by":[],"bp":["by"]},"dx":{"bp":["dx"]},"j":{"by":[],"bp":["by"]},"J":{"U":["1"],"r":["1"]},"by":{"bp":["by"]},"iP":{"hg":[]},"dQ":{"U":["1"],"r":["1"]},"e":{"bp":["e"],"rv":[]},"my":{"D":[]},"ke":{"at":[]},"dT":{"at":[]},"cF":{"at":[]},"hm":{"at":[]},"l0":{"at":[]},"j4":{"at":[]},"m0":{"at":[]},"ht":{"at":[]},"ks":{"at":[]},"lr":{"at":[]},"j_":{"at":[]},"n0":{"dh":[]},"bE":{"G5":[]},"jF":{"m3":[]},"mV":{"m3":[]},"mu":{"m3":[]},"mE":{"z4":[]},"eI":{"z4":[]},"kC":{"D":[]},"fe":{"D":[]},"h_":{"D":[]},"fV":{"D":[]},"bL":{"dO":[]},"bt":{"dO":[]},"c6":{"dO":[]},"cJ":{"dO":[]},"ls":{"dO":[]},"f5":{"D":[]},"fO":{"D":[]},"iA":{"D":[]},"cT":{"D":[]},"ky":{"FS":[]},"hp":{"D":[]},"h1":{"D":[]},"km":{"D":[]},"i9":{"D":[]},"h0":{"D":[]},"fh":{"D":[]},"f9":{"D":[]},"cR":{"D":[]},"dS":{"D":[]},"bh":{"D":[]},"f2":{"D":[]},"kQ":{"FL":[]},"co":{"D":[]},"iU":{"D":[]},"d5":{"D":[]},"ho":{"D":[]},"iR":{"FO":[]},"mD":{"ca":[]},"lJ":{"FQ":[]},"n1":{"ca":[]},"mO":{"FN":[]},"mA":{"ET":[]},"iZ":{"D":[]},"bX":{"bp":["bX"]},"bT":{"bp":["bT"]},"h4":{"D":[]},"kg":{"D":[]},"jd":{"D":[]},"i5":{"ap":[]},"mr":{"ab":[]},"kn":{"ap":[]},"ms":{"ab":[]},"kA":{"ap":[]},"mv":{"ab":[]},"jf":{"D":[]},"id":{"ap":[]},"mw":{"ab":[]},"kF":{"ap":[]},"mx":{"ab":[]},"kX":{"ap":[]},"mC":{"ab":[]},"iB":{"ap":[]},"mJ":{"ab":[]},"ko":{"FM":[]},"iL":{"ap":[]},"mP":{"ab":[]},"lD":{"ap":[]},"mQ":{"ab":[]},"lS":{"ap":[]},"mT":{"ab":[]},"lT":{"ap":[]},"mU":{"ab":[]},"lV":{"ap":[]},"mX":{"ab":[]},"lU":{"ap":[]},"mW":{"ab":[]},"m7":{"ap":[]},"n4":{"ab":[]},"mg":{"ap":[]},"n6":{"ab":[]},"n5":{"ab":[]},"mk":{"ap":[]},"n9":{"ab":[]},"kV":{"D":[]},"ik":{"D":[]},"io":{"D":[]},"ip":{"D":[]},"f4":{"D":[]},"il":{"D":[]},"fl":{"D":[]},"di":{"D":[]},"fU":{"D":[]},"kB":{"ED":[]},"h7":{"D":[]},"hE":{"D":[]},"bs":{"D":[]},"kl":{"D":[]},"eZ":{"D":[]},"kw":{"D":[]},"kz":{"D":[]},"e1":{"cH":[]},"mi":{"F_":[]},"ki":{"D":[]},"cm":{"D":[]},"dA":{"D":[]},"jm":{"dl":[]},"f1":{"D":[]},"dz":{"D":[]},"ep":{"D":[]},"eo":{"D":[]},"er":{"D":[]},"lt":{"D":[]},"lH":{"D":[]},"hn":{"D":[]},"bZ":{"D":[]},"dg":{"D":[]},"iY":{"D":[]},"c_":{"D":[]},"bD":{"D":[]},"l2":{"D":[]},"fw":{"D":[]},"cr":{"D":[]},"ey":{"D":[]},"eE":{"D":[]},"eX":{"D":[]},"d_":{"D":[]},"cG":{"D":[]},"d0":{"D":[]},"du":{"D":[]},"dt":{"D":[]},"ej":{"D":[]},"ek":{"D":[]},"eY":{"D":[]},"ei":{"D":[]},"dD":{"D":[]},"d2":{"D":[]},"d3":{"D":[]},"dE":{"D":[]},"dC":{"D":[]},"dF":{"D":[]},"cn":{"D":[]},"dB":{"D":[]},"cI":{"D":[]},"ka":{"D":[]},"bB":{"D":[]},"cq":{"D":[]},"ex":{"D":[]},"cQ":{"D":[]},"bY":{"D":[]},"bN":{"D":[]},"iW":{"D":[]},"bU":{"D":[]},"cc":{"D":[]},"cd":{"D":[]},"eB":{"D":[]},"dj":{"D":[]},"mN":{"Bj":[]},"F8":{"J":["j"],"U":["j"],"r":["j"]},"c1":{"J":["j"],"U":["j"],"r":["j"]},"G8":{"J":["j"],"U":["j"],"r":["j"]},"F6":{"J":["j"],"U":["j"],"r":["j"]},"uA":{"J":["j"],"U":["j"],"r":["j"]},"F7":{"J":["j"],"U":["j"],"r":["j"]},"uB":{"J":["j"],"U":["j"],"r":["j"]},"pk":{"J":["z"],"U":["z"],"r":["z"]},"pl":{"J":["z"],"U":["z"],"r":["z"]}}'))
A.H_(v.typeUniverse,JSON.parse('{"hy":1,"jL":2,"bq":1,"jx":1,"jE":1,"kv":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",t:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nuniform vec3 uClearColor;\nuniform vec3 uSkyHorizon;\nuniform vec3 uSkyZenith;\nuniform vec3 uSkyGround;\nuniform float uSkyEnabled;\nuniform float uSkyHorizonGlow;\nuniform float uSkyStarDensity;\nuniform sampler2D uSkyTexture;\nuniform float uSkyTextureEnabled;\nuniform float uSkyRotation;\nuniform float uSkyExposure;\nuniform float uSkyTextureSrgb;\nuniform mat4 uInverseProjection;\nuniform mat4 uInverseView;\nuniform vec3 uCameraPosition;\nuniform float uCloudCoverage;\nuniform float uCloudDensity;\nuniform float uCloudBaseHeight;\nuniform float uCloudThickness;\nuniform float uCloudScale;\nuniform vec2 uCloudWind;\nuniform float uCloudPhase;\nuniform float uCloudDetail;\nuniform float uCloudSilverLining;\nuniform float uCloudSampleCount;\nuniform vec3 uCloudLightDirection;\nuniform vec3 uCloudLightColor;\nuniform float uCloudLightIntensity;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvec3 skyBackground(vec2 uv){\n  // A deliberately cheap, high-quality fallback sky: three atmospheric bands\n  // provide depth at every camera angle, while the tiny deterministic star\n  // field and horizon glow keep the clear background from reading as a flat\n  // color. It is an environment layer, not a game/weather simulation.\n  float lower=smoothstep(0.0,0.48,uv.y);\n  float upper=smoothstep(0.42,1.0,uv.y);\n  vec3 color=mix(uSkyGround,uSkyHorizon,lower);\n  color=mix(color,uSkyZenith,upper);\n  float horizonGlow=exp(-pow((uv.y-0.48)*7.0,2.0));\n  color+=uSkyHorizon*horizonGlow*clamp(uSkyHorizonGlow,0.,1.);\n  float starMask=smoothstep(0.62,0.92,uv.y);\n  float stars=step(1.0-clamp(uSkyStarDensity,0.,.1),hash(floor(uv*vec2(180.0,100.0))))*starMask;\n  color+=vec3(0.16,0.19,0.24)*stars;\n  return max(color,vec3(0.0));\n}\n\nfloat hash3(vec3 p){\n  return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);\n}\n\nfloat valueNoise(vec3 p){\n  vec3 i=floor(p);\n  vec3 f=fract(p);\n  f=f*f*(3.0-2.0*f);\n  float n000=hash3(i+vec3(0,0,0));\n  float n100=hash3(i+vec3(1,0,0));\n  float n010=hash3(i+vec3(0,1,0));\n  float n110=hash3(i+vec3(1,1,0));\n  float n001=hash3(i+vec3(0,0,1));\n  float n101=hash3(i+vec3(1,0,1));\n  float n011=hash3(i+vec3(0,1,1));\n  float n111=hash3(i+vec3(1,1,1));\n  float x00=mix(n000,n100,f.x);\n  float x10=mix(n010,n110,f.x);\n  float x01=mix(n001,n101,f.x);\n  float x11=mix(n011,n111,f.x);\n  return mix(mix(x00,x10,f.y),mix(x01,x11,f.y),f.z);\n}\n\nfloat cloudNoise(vec3 p){\n  float value=0.0;\n  float amplitude=0.5;\n  for(int octave=0;octave<4;octave++){\n    value+=valueNoise(p)*amplitude;\n    p=p*2.03+vec3(17.3,11.7,7.1);\n    amplitude*=0.5;\n  }\n  return value;\n}\n\nfloat cloudDensityAt(vec3 position){\n  float height01=clamp(\n    (position.y-uCloudBaseHeight)/max(uCloudThickness,0.001),\n    0.0,1.0\n  );\n  float vertical=smoothstep(0.0,0.12,height01)*\n    (1.0-smoothstep(0.72,1.0,height01));\n  vec3 q=position*max(uCloudScale,0.00001)+\n    vec3(uCloudWind.x*uCloudPhase,0.0,uCloudWind.y*uCloudPhase);\n  float macro=cloudNoise(q*0.82);\n  float detail=cloudNoise(q*2.7+vec3(23.0,5.0,41.0));\n  float shape=mix(macro,macro*0.68+detail*0.32,clamp(uCloudDetail,0.,1.));\n  float threshold=1.0-clamp(uCloudCoverage,0.,1.);\n  float body=smoothstep(threshold,threshold+0.26,shape);\n  return body*vertical*clamp(uCloudDensity,0.,1.);\n}\n\nvec4 volumetricClouds(vec3 worldDirection){\n  if(uCloudCoverage<=0.0001 || uCloudDensity<=0.0001 || worldDirection.y<=0.001){\n    return vec4(0.0);\n  }\n  float directionY=max(worldDirection.y,0.001);\n  float startT=(uCloudBaseHeight-uCameraPosition.y)/directionY;\n  float endT=(uCloudBaseHeight+uCloudThickness-uCameraPosition.y)/directionY;\n  startT=max(startT,0.0);\n  endT=max(endT,0.0);\n  if(endT<=startT) return vec4(0.0);\n  int sampleCount=int(clamp(uCloudSampleCount,4.,24.));\n  float stepLength=(endT-startT)/float(sampleCount);\n  float jitter=(hash(gl_FragCoord.xy+vec2(uCloudPhase*0.013))-0.5)*stepLength;\n  vec3 sunDirection=normalize(-uCloudLightDirection);\n  float transmittance=1.0;\n  vec3 inScatter=vec3(0.0);\n  for(int i=0;i<24;i++){\n    if(i>=sampleCount) break;\n    float t=startT+(float(i)+0.5)*stepLength+jitter;\n    vec3 position=uCameraPosition+worldDirection*t;\n    float density=cloudDensityAt(position);\n    float opticalDepth=density*stepLength*0.0035;\n    float segmentAlpha=1.0-exp(-opticalDepth);\n    float towardLight=cloudDensityAt(position+sunDirection*90.0);\n    float lightTransmittance=exp(-towardLight*0.025);\n    float phase=0.72+0.28*pow(max(dot(-worldDirection,sunDirection),0.0),2.0);\n    vec3 ambient=uSkyHorizon*0.32;\n    vec3 direct=uCloudLightColor*\n      (0.14+0.86*clamp(uCloudLightIntensity,0.,1.5))*phase;\n    float edge=pow(1.0-clamp(density,0.,1.),3.0)*uCloudSilverLining*0.22;\n    vec3 sampleLight=(ambient+direct)*lightTransmittance+vec3(edge);\n    inScatter+=transmittance*segmentAlpha*sampleLight;\n    transmittance*=1.0-segmentAlpha;\n    if(transmittance<0.01) break;\n  }\n  return vec4(inScatter,1.0-transmittance);\n}\n\nvec3 srgbToLinear(vec3 color){\n  vec3 low=color/12.92;\n  vec3 high=pow((color+0.055)/1.055,vec3(2.4));\n  return mix(low,high,step(vec3(0.04045),color));\n}\n\nvec3 worldDirectionForUv(vec2 uv){\n  vec2 ndc=uv*2.0-1.0;\n  vec4 viewPoint=uInverseProjection*vec4(ndc,1.0,1.0);\n  return normalize(viewPoint.xyz/viewPoint.w);\n}\n\nvec3 equirectangularSky(vec2 uv){\n  vec3 worldDirection=normalize((uInverseView*vec4(worldDirectionForUv(uv),0.0)).xyz);\n  float longitude=atan(worldDirection.z,worldDirection.x)+uSkyRotation;\n  float latitude=asin(clamp(worldDirection.y,-1.0,1.0));\n  vec2 sampleUv=vec2(\n    fract(longitude/(2.0*3.14159265359)+0.5),\n    0.5-latitude/3.14159265359\n  );\n  vec3 encoded=max(texture(uSkyTexture,sampleUv).rgb,vec3(0.0));\n  vec3 linear=mix(encoded,srgbToLinear(encoded),clamp(uSkyTextureSrgb,0.,1.));\n  return linear*max(uSkyExposure,0.0);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // The world pass clears untouched pixels to uClearColor. Replace only that\n  // exact background, so the sky is always active without covering geometry.\n  if(uSkyEnabled>0.5 && distance(source.rgb,uClearColor)<0.004){\n    vec3 viewDirection=worldDirectionForUv(vUv);\n    vec3 worldDirection=normalize((uInverseView*vec4(viewDirection,0.0)).xyz);\n    source.rgb=uSkyTextureEnabled>0.5\n      ? equirectangularSky(vUv)\n      : skyBackground(vUv);\n    vec4 clouds=volumetricClouds(worldDirection);\n    source.rgb=source.rgb* (1.0-clouds.a)+clouds.rgb;\n  }\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a2
return{mq:s("d_"),dx:s("i3"),bC:s("cE"),zU:s("eb"),v:s("bn"),iF:s("kh"),ul:s("dt"),EL:s("d0"),xs:s("cG"),gc:s("du"),t3:s("kj"),mD:s("ed"),lT:s("ee"),bJ:s("ef"),gI:s("eg"),ya:s("eh"),z3:s("bT"),Bu:s("fR"),ml:s("i6"),je:s("b8"),rO:s("fT"),sU:s("dw"),hO:s("bp<@>"),CH:s("ia"),w:s("a4<e,e>"),I:s("a4<e,j>"),M:s("aX<e>"),f7:s("f0"),fP:s("bU"),yb:s("dx"),he:s("U<@>"),yW:s("cm"),g:s("c4"),Ct:s("D"),yt:s("at"),hl:s("a8"),B:s("pk"),cE:s("pl"),pH:s("aY"),Fr:s("d1"),BO:s("f3"),ls:s("aS<ax>"),xJ:s("aS<e>(e)"),zL:s("aS<c1>(e)"),tX:s("aS<c1>(e,e)"),vS:s("dB"),aJ:s("dC"),x:s("cn"),bK:s("dD"),gm:s("dE"),dn:s("d2"),mx:s("dF"),j_:s("d3"),EJ:s("d4<bY,e>"),_:s("cH"),Eb:s("cI"),qX:s("er"),mF:s("d7"),iO:s("cJ"),oW:s("d8"),fl:s("cK"),FA:s("r<ia>"),CB:s("r<db>"),Eh:s("r<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),yT:s("r<e>"),x6:s("r<c0>"),A1:s("r<fr>"),oJ:s("r<z>"),tY:s("r<@>"),iC:s("r<j>"),Fg:s("x<cE>"),t9:s("x<eb>"),AO:s("x<i6>"),jC:s("x<b8>"),km:s("x<fT>"),sa:s("x<ck>"),ns:s("x<kG>"),U:s("x<c4>"),uH:s("x<kK>"),Dl:s("x<a8>"),iJ:s("x<aS<~>>"),pC:s("x<kS>"),C1:s("x<cH>"),ka:s("x<bz>"),Fm:s("x<f6>"),op:s("x<d6>"),hr:s("x<dH>"),s3:s("x<cJ>"),W:s("x<aj>"),Bv:s("x<lb>"),yH:s("x<lc>"),Bq:s("x<P<e,e>>"),rq:s("x<Y<e,L>>"),A7:s("x<Y<e,e>>"),cs:s("x<Y<e,@>>"),bk:s("x<Y<e,L?>>"),a6:s("x<db>"),p0:s("x<c7>"),d:s("x<bL>"),w4:s("x<fa>"),pq:s("x<aw>"),bA:s("x<dJ>"),xz:s("x<bC>"),s0:s("x<fc>"),hc:s("x<dc>"),ea:s("x<dK>"),Fk:s("x<lw>"),qP:s("x<c9>"),d8:s("x<iM>"),Fa:s("x<iN>"),kv:s("x<fg>"),nR:s("x<+(e,J<c9>)>"),kd:s("x<+(e,e)>"),c2:s("x<+(e,C)>"),rh:s("x<+influence,light(z,bO)>"),z4:s("x<+influence,source(z,cu)>"),wt:s("x<+(j,e)>"),ff:s("x<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),e_:s("x<ap>"),u:s("x<ab>"),Ft:s("x<iR>"),C:s("x<Q>"),h1:s("x<bf>"),s2:s("x<ca>"),eY:s("x<fi>"),xB:s("x<de>"),rn:s("x<lM>"),gg:s("x<lN>"),D:s("x<dP>"),yv:s("x<lO>"),wM:s("x<lP>"),hT:s("x<cs>"),El:s("x<hs>"),AM:s("x<b3<bT>>"),fs:s("x<b3<bX>>"),cv:s("x<bO>"),DZ:s("x<fn>"),s:s("x<e>"),r8:s("x<c0>"),fa:s("x<cb>"),E7:s("x<hw>"),k:s("x<C>"),fi:s("x<k>"),v5:s("x<bb>"),ld:s("x<j8>"),Dc:s("x<dW>"),Fi:s("x<ce>"),jV:s("x<dk>"),xL:s("x<cu>"),su:s("x<eC>"),wb:s("x<eD>"),eQ:s("x<cv>"),uI:s("x<fr>"),yo:s("x<fs>"),nm:s("x<fu>"),uk:s("x<bH>"),wf:s("x<jm>"),il:s("x<eH>"),l5:s("x<eG>"),ow:s("x<mL>"),j5:s("x<mM>"),pv:s("x<hD>"),Fy:s("x<eJ<cO>>"),EM:s("x<eJ<bW>>"),w_:s("x<eJ<bf>>"),f2:s("x<eJ<dm>>"),n:s("x<z>"),zz:s("x<@>"),t:s("x<j>"),Cf:s("x<L?>"),AN:s("x<by>"),E:s("it"),m:s("aj"),ud:s("dI"),yO:s("c5<@>"),AQ:s("J<b8>"),hk:s("J<c4>"),b:s("J<bz>"),xp:s("J<cJ>"),nx:s("J<aj>"),rW:s("J<Y<e,e>>"),qr:s("J<bL>"),R:s("J<aw>"),fG:s("J<dc>"),Es:s("J<c9>"),DX:s("J<+(e,e)>"),pL:s("J<+(j,e)>"),bE:s("J<bf>"),fx:s("J<de>"),r6:s("J<dP>"),yu:s("J<cs>"),a:s("J<e>"),uh:s("J<j8>"),D0:s("J<dW>"),cf:s("J<ce>"),p7:s("J<dk>"),dd:s("J<z>"),j:s("J<@>"),L:s("J<j>"),ik:s("J<aj?>"),vX:s("J<L?>"),m2:s("iy"),h6:s("P<e,aY>"),gJ:s("P<e,d1>"),q:s("P<e,e>"),no:s("P<e,bt>"),AC:s("P<@,@>"),ou:s("P<j,e>"),pr:s("P<j,@>"),yx:s("P<e,J<e>>"),mf:s("Y<e,cH>"),vD:s("Y<e,c6>"),of:s("Y<e,L>"),ap:s("Y<e,aw>"),G:s("Y<e,e>"),qH:s("Y<e,dS>"),m0:s("Y<e,l>"),gG:s("Y<e,z>"),P:s("Y<e,@>"),f:s("Y<@,@>"),eU:s("Y<j,e>"),pG:s("Y<j,fp>"),tQ:s("Y<j,fq>"),Bx:s("Y<e,J<e>>"),oZ:s("Y<e,L?>"),q1:s("Y<cd,J<ce>>"),ee:s("Y<j,Y<e,e>>"),dH:s("H<j,e>"),jT:s("H<e,e?>"),w1:s("cO"),pw:s("c6"),jt:s("db"),wl:s("c7"),kc:s("bL"),aw:s("fa"),mL:s("hh"),rV:s("hi"),mV:s("fb"),c:s("ax"),K:s("L"),fH:s("L(hk)"),BB:s("bX"),A:s("aw"),oP:s("dJ"),wJ:s("bB"),E4:s("bC"),A_:s("dK"),e:s("c9"),DL:s("iK"),AB:s("ly"),yi:s("hj"),rx:s("iM"),c_:s("iN"),zC:s("lA"),xK:s("dN"),Y:s("fg"),iM:s("Kq"),ep:s("+()"),k0:s("+(bL,bW)"),ut:s("+(bt,dm)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bO)"),bG:s("+influence,source(z,cu)"),tK:s("+effectiveScore,light,score(z,b8,z)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)"),ez:s("iP"),wZ:s("ab"),lg:s("iS"),tc:s("dd<cJ,bf>"),ja:s("dd<c6,cO>"),wm:s("dd<bL,bW>"),qq:s("dd<bt,dm>"),j2:s("Q"),m3:s("bf"),yz:s("ca"),z_:s("fi"),F3:s("de"),Dm:s("dP"),Q:s("dQ<e>"),oG:s("dQ<j>"),en:s("bN"),gl:s("bg"),gn:s("bZ"),r:s("cs"),u5:s("bD"),is:s("c_"),ho:s("hs"),EH:s("b3<bT>"),E0:s("b3<bX>"),l:s("dh"),w8:s("fn"),qL:s("bs"),N:s("e"),dc:s("e(j)"),Aj:s("bt"),jP:s("c0"),h:s("cb"),bp:s("dS"),sg:s("an"),bs:s("dT"),ys:s("uA"),Dd:s("uB"),uo:s("c1"),qF:s("fo"),hL:s("eA<e,e>"),qt:s("m2"),eP:s("m3"),zo:s("m6"),cV:s("C"),a7:s("k"),qY:s("bb"),T:s("c2"),gM:s("cc"),hF:s("cd"),vw:s("fp"),BX:s("fq"),aA:s("dW"),AP:s("ce"),sy:s("mf"),bB:s("bv"),aS:s("dk"),cZ:s("eC"),EI:s("eD"),uz:s("cv"),qR:s("fr"),fu:s("fs"),xe:s("hA"),fw:s("I<bU>"),vL:s("I<cm>"),vK:s("I<cn>"),Fj:s("I<bD>"),rZ:s("I<c_>"),vY:s("I<e>"),g2:s("I<cc>"),ni:s("I<cd>"),rt:s("W<bN>"),xG:s("W<bg>"),o:s("fu"),hR:s("as<@>"),BT:s("jj<L?,L?>"),Ez:s("dl"),rL:s("hB"),xT:s("eH"),wU:s("eG"),la:s("mK"),qS:s("jr"),jS:s("hF"),EF:s("bI<+(e,bt)>"),Br:s("bI<ca>"),oe:s("bI<dP>"),a_:s("jH"),V:s("jI"),p:s("jJ"),y:s("l"),Bs:s("l()"),C3:s("l(fP)"),kr:s("l(bU)"),e2:s("l(cm)"),rg:s("l(cn)"),bl:s("l(L)"),pz:s("l(bN)"),aV:s("l(bg)"),y2:s("l(bD)"),ty:s("l(c_)"),Ag:s("l(e)"),da:s("l(cc)"),u_:s("l(cd)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,dh)"),S:s("j"),eZ:s("aS<ax>?"),r9:s("x<L?>?"),gt:s("aj?"),rK:s("J<@>?"),yq:s("Y<@,@>?"),jd:s("Y<e,J<e>>?"),X:s("L?"),dM:s("Bj?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("c1?"),F:s("dY<@,@>?"),Af:s("mH?"),k7:s("l?"),wK:s("l(hq)?"),u6:s("z?"),lo:s("j?"),s7:s("by?"),Z:s("~()?"),Cv:s("~(ea)?"),kC:s("~(ec)?"),pf:s("~(fY)?"),hq:s("~(h5)?"),CA:s("~(dG)?"),hQ:s("~(bY)?"),Ci:s("~(bN)?"),nf:s("~(c_,bD)?"),DI:s("~(e,z)?"),xl:s("~(l)?"),vR:s("~(j)?"),dt:s("~(j,e)?"),J:s("by"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.jJ=J.l3.prototype
B.a=J.x.prototype
B.d=J.is.prototype
B.b=J.h9.prototype
B.c=J.et.prototype
B.jL=J.dI.prototype
B.jM=J.iv.prototype
B.t=A.iC.prototype
B.a1=A.iG.prototype
B.dO=J.lu.prototype
B.c5=J.fo.prototype
B.ag=new A.d_(1,"standard")
B.R=new A.k9(B.ag)
B.ce=new A.d_(0,"concise")
B.cf=new A.d_(2,"verbose")
B.aB=new A.ea(null,null,null,null,null)
B.pJ=new A.ka(0,"none")
B.ah=new A.fO(0,"opaque")
B.b_=new A.fO(1,"masked")
B.aC=new A.fO(2,"blended")
B.ey=new A.kd(!1,127)
B.ez=new A.kd(!0,127)
B.eA=new A.kg(1,"camera")
B.eB=new A.ki(4,"ambience")
B.cj=new A.cG(3,"mono")
B.b0=new A.du(0,"full")
B.ci=new A.cG(0,"auto")
B.ch=new A.d0(1,"standard")
B.cg=new A.dt(0,"defaultMix")
B.b1=new A.ec(B.ci,B.ch,B.b0,B.cg)
B.eI=new A.eX(0,"broadcast")
B.eJ=new A.eX(1,"visitor")
B.eK=new A.eX(2,"aftermath")
B.eL=new A.eX(3,"ending")
B.aT=new A.lH(0,"pixeldart")
B.eM=new A.i4(B.aT,!0,!1,null,!1,null)
B.eN=new A.i4(B.aT,!1,!1,null,!1,null)
B.cl=new A.ei(1,"capturing")
B.eO=new A.dv(B.cl,null)
B.cm=new A.ei(3,"rejected")
B.b2=new A.dv(B.cm,null)
B.cn=new A.ei(4,"applied")
B.ck=new A.dv(B.cn,null)
B.co=new A.ei(5,"cancelled")
B.eP=new A.dv(B.co,null)
B.b3=new A.ei(2,"conflict")
B.aD=new A.kl(0,"add")
B.eT=new A.eZ(0,"zero")
B.ai=new A.eZ(1,"one")
B.S=new A.km(0,"alpha")
B.J=new A.ej(1,"button")
B.p=new A.ek(0,"normal")
B.eW=new A.bo("settings.back",B.J,"back","back to pause menu",B.p)
B.aE=new A.ej(0,"heading")
B.eX=new A.bo("settings.heading",B.aE,"Settings",null,B.p)
B.eY=new A.bo("settings.controls.heading",B.aE,"Controls",null,B.p)
B.eZ=new A.bo("settings.controls.back",B.J,"back","back to settings categories",B.p)
B.f_=new A.bo("pause.heading",B.aE,"Paused",null,B.p)
B.f0=new A.ej(3,"slider")
B.f1=new A.ej(4,"toggle")
B.cp=new A.ej(5,"keybind")
B.aF=new A.ek(5,"disabled")
B.f2=new A.ek(6,"error")
B.f3=new A.ek(7,"destructive")
B.cq=new A.ek(8,"remapping")
B.cr=new A.i3()
B.f4=new A.kc()
B.pK=new A.ou()
B.f5=new A.kk()
B.cs=new A.oG()
B.f6=new A.ig(A.a2("ig<0&>"))
B.ct=function getTagFallback(o) {
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
B.cu=function(hooks) { return hooks; }

B.f=new A.l9()
B.fd=new A.r8()
B.fe=new A.lr()
B.pM=new A.rF()
B.ff=new A.rG()
B.cv=new A.rI()
B.fg=new A.rM()
B.fh=new A.rQ()
B.fi=new A.de()
B.aU=new A.cr(1,"gradeLUT")
B.fj=new A.de()
B.fk=new A.td()
B.fl=new A.tf()
B.h=new A.tm()
B.cw=new A.m5()
B.cx=new A.uG()
B.pL=new A.ky()
B.fm=new A.vb()
B.b4=new A.mE()
B.C=new A.mR()
B.aG=new A.n0()
B.fn=new A.fS(1.3089969389957472,0.1,60)
B.fo=new A.fS(1.0471975511965976,0.1,60)
B.fp=new A.fS(0.8726646259971648,0.08,45)
B.T=new A.fU(0,"colorOnly")
B.cy=new A.fU(1,"colorAndDepth")
B.b5=new A.fU(2,"depthOnly")
B.fq=new A.i9(0,"linear")
B.b6=new A.i9(1,"srgb")
B.cz=new A.fV(0,"open")
B.fr=new A.fV(1,"committed")
B.fs=new A.fV(2,"aborted")
B.b7=new A.h_(0,"open")
B.fz=new A.h_(1,"committed")
B.fA=new A.h_(2,"rolledBack")
B.aH=new A.kw(1,"back")
B.aI=new A.kz(0,"less")
B.fB=new A.h0(0,"off")
B.cA=new A.h0(1,"errorsOnly")
B.fC=new A.h0(2,"full")
B.cB=new A.kC(2,"error")
B.aJ=new A.bU(0,"open")
B.cC=new A.bU(1,"chain")
B.cD=new A.bU(2,"throughDoor")
B.cE=new A.bU(3,"letterbox")
B.aj=new A.bU(4,"ignore")
B.U=new A.h1(0,"opaque")
B.fD=new A.h1(1,"masked")
B.aK=new A.h1(2,"blended")
B.cF=new A.h2(!1,B.aI,!1,!0,B.ai,B.ai,B.aD,!1,B.aH,!0,!1,!0,!0,!0,!0,!1)
B.fE=new A.h2(!0,B.aI,!1,!0,B.ai,B.ai,B.aD,!0,B.aH,!0,!1,!0,!0,!0,!0,!1)
B.eU=new A.eZ(2,"srcAlpha")
B.eV=new A.eZ(3,"oneMinusSrcAlpha")
B.fF=new A.h2(!0,B.aI,!1,!0,B.eU,B.eV,B.aD,!0,B.aH,!0,!1,!0,!0,!0,!0,!1)
B.fG=new A.dx(0)
B.fH=new A.dx(22e4)
B.fI=new A.dx(24e5)
B.cG=new A.cm(0,"compliance")
B.fJ=new A.h3(B.cG)
B.cH=new A.cm(1,"rupture")
B.fK=new A.h3(B.cH)
B.cI=new A.cm(2,"synchronisation")
B.fL=new A.h3(B.cI)
B.cJ=new A.f1(0,"front")
B.fM=new A.f1(1,"rearService")
B.fN=new A.f1(2,"sideBoundary")
B.fO=new A.f1(3,"roofline")
B.A=new A.eo(0,"north")
B.ak=new A.eo(1,"east")
B.r=new A.eo(2,"south")
B.al=new A.eo(3,"west")
B.fP=new A.ep(0,"ground")
B.fQ=new A.ep(1,"first")
B.fR=new A.ep(2,"hidden")
B.fS=new A.dz(0,"mantle")
B.fT=new A.dz(1,"portal")
B.fV=new A.dz(3,"inventory")
B.cK=new A.dz(4,"aftermath")
B.fU=new A.dz(2,"window")
B.fX=new A.eq(B.fU,"shutter","the shutter")
B.fW=new A.dz(5,"none")
B.fY=new A.eq(B.fW,null,null)
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
B.cL=new A.A("saved mantle state is malformed",null,null)
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
B.cM=new A.A("unsupported controls profile",null,null)
B.hZ=new A.A("promoted model index entry is malformed",null,null)
B.cN=new A.A("saved portal state is malformed",null,null)
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
B.L=new A.aT(0,0,0)
B.bk=new A.aT(1,1,1)
B.kz=s([],t.Fk)
B.bu=s([],t.cv)
B.kA=s([],t.xL)
B.kB=s([],t.E7)
B.iK=new A.kO(B.L,B.L,0,1,null,null,B.bk,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.L,0,0,B.bk,0,null,B.kz,B.bu,B.kA,B.kB,null)
B.cO=new A.aY(0,0,0)
B.iL=new A.f2(0,"idle")
B.am=new A.f2(1,"active")
B.iM=new A.f2(2,"ended")
B.iN=new A.f2(3,"aborted")
B.b8=new A.h4(0,"outside")
B.iO=new A.h4(1,"intersects")
B.iP=new A.h4(2,"inside")
B.iQ=new A.dA(0,"timeAdvanced")
B.iR=new A.dA(1,"dayEndReached")
B.iS=new A.dA(2,"journalWritten")
B.iT=new A.dA(3,"journalRejected")
B.iU=new A.dA(4,"slept")
B.iV=new A.dA(5,"complianceFloorTripped")
B.b9=new A.dB(0,"twentyFourHour")
B.cP=new A.dB(1,"twelveHour")
B.cQ=new A.dC(0,"important")
B.cR=new A.dC(1,"always")
B.ba=new A.cn(0,"pauseAndMute")
B.cS=new A.dD(0,"press")
B.cT=new A.dD(1,"hold")
B.cU=new A.dE(0,"compact")
B.cV=new A.dE(1,"spacious")
B.cW=new A.d2(1,"standard")
B.cX=new A.d2(2,"detailed")
B.cY=new A.dF(0,"toast")
B.cZ=new A.dF(1,"detailed")
B.d_=new A.d3(1,"readable")
B.j0=new A.ik(0,"vertex")
B.d0=new A.ik(1,"indices")
B.d1=new A.kV(0,"staticDraw")
B.j=new A.il(0,"ready")
B.a_=new A.il(1,"lost")
B.an=new A.h7(0,"prepared")
B.j1=new A.h7(1,"committed")
B.j2=new A.h7(2,"rolledBack")
B.j3=new A.f4(0,"color")
B.d2=new A.f4(1,"colorAndGlow")
B.j4=new A.f4(2,"colorDepthGlow")
B.bb=new A.f4(3,"depthOnly")
B.bc=new A.io(1,"linear")
B.d3=new A.ip(0,"clampToEdge")
B.j5=new A.kW(1,1,1,!1,B.bc,B.bc,B.d3,1)
B.ao=new A.io(2,"linearMipmapLinear")
B.j6=new A.ip(1,"repeat")
B.j7=new A.d5(0,"beforeShadow")
B.j8=new A.d5(2,"beforeDepth")
B.bd=new A.d5(3,"afterDepth")
B.d4=new A.d5(4,"beforeWorld")
B.j9=new A.d5(5,"afterWorld")
B.K=new A.d5(6,"afterResolve")
B.ja=new A.d5(9,"beforePresent")
B.d5=new A.co(0,"readBeforeWrite")
B.jb=new A.co(1,"duplicateWriter")
B.jc=new A.co(2,"sampledMultisampledAttachment")
B.be=new A.co(3,"invalidResolve")
B.jd=new A.co(4,"formatOrSizeMismatch")
B.je=new A.co(5,"unversionedReadWrite")
B.jf=new A.co(6,"invalidHistoryRead")
B.jg=new A.co(7,"dependencyCycle")
B.jh=new A.co(8,"missingCapability")
B.bf=new A.cI(0,"high")
B.bg=new A.cI(1,"standard")
B.bh=new A.dG(1,B.bg,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jk=new A.dG(1,B.bf,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aL=new A.er(0,"player")
B.bi=new A.er(1,"inserted")
B.d6=new A.er(2,"warden")
B.d7=new A.f5(0,"wrongKind")
B.d8=new A.f5(1,"staleGeneration")
B.jl=new A.f5(2,"doubleRelease")
B.aM=new A.f5(3,"releasedResource")
B.jo=new A.d6("kitchen-range","settle")
B.jp=new A.d6("front-door-knocker","knock")
B.jq=new A.d6("cellar-drain","drip")
B.jr=new A.d6("bedroom-timber","creak")
B.js=new A.d6("kitchen-pipe","tick")
B.jt=new A.d6("bathroom-cistern","settle")
B.ju=new A.d6("landing-window","wind")
B.jI=new A.l2(1,"visitor")
B.jK=new A.l4("none",0,0,0,0,0,!1)
B.jN=new A.qG(null)
B.jO=new A.qH(null)
B.bj=new A.ix(!1,0,0.85,0.92,1,0,1,0,0)
B.jP=new A.aT(0.008,0.012,0.024)
B.d9=s([0,2,2,3],t.t)
B.bl=s([B.cQ,B.cR],A.a2("x<dC>"))
B.jQ=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass","skybox-main-atmosphere-v1"],t.s)
B.jR=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.jS=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bm=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.I=new A.bN(0,"audio")
B.X=new A.iW(0,"level")
B.nJ=new A.bg("master","Master",B.I,B.X,1,0,1,"audio")
B.nO=new A.bg("voice","Visitor voice",B.I,B.X,1,0,1,"audio")
B.nF=new A.bg("effects","Effects",B.I,B.X,1,0,1,"audio")
B.nG=new A.bg("ambience","House ambience",B.I,B.X,1,0,1,"audio")
B.nK=new A.bg("music","Music",B.I,B.X,1,0,1,"audio")
B.aV=new A.bN(1,"display")
B.nN=new A.bg("brightness","Display brightness",B.aV,B.X,1,0.6,1.4,"display")
B.au=new A.iW(1,"toggle")
B.nI=new A.bg("muted","Mute house audio",B.I,B.au,!1,null,null,"audio")
B.a9=new A.bN(2,"accessibility")
B.nL=new A.bg("mono","Mono-compatible mix",B.a9,B.au,!1,null,null,"audio")
B.nH=new A.bg("high-contrast","High-contrast interface",B.a9,B.au,!1,null,null,"display")
B.nM=new A.bg("strong-highlights","Strong focus highlights",B.a9,B.au,!1,null,null,"display")
B.F=s([B.nJ,B.nO,B.nF,B.nG,B.nK,B.nN,B.nI,B.nL,B.nH,B.nM],A.a2("x<bg>"))
B.D=s(["who","verb","object","place","time"],t.s)
B.jU=s([81,77,83,72],t.t)
B.jV=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.eC=new A.dt(1,"strong")
B.bn=s([B.cg,B.eC],A.a2("x<dt>"))
B.eQ=new A.eY(0,"swap")
B.eR=new A.eY(1,"replace")
B.eS=new A.eY(2,"cancel")
B.jW=s([B.eQ,B.eR,B.eS],A.a2("x<eY>"))
B.jX=s([2,5,9,12,16,19],t.t)
B.iW=new A.cn(1,"pauseOnly")
B.iX=new A.cn(2,"continuePlayback")
B.aN=s([B.ba,B.iW,B.iX],A.a2("x<cn>"))
B.jY=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.jZ=s(["uQuantizationBits","uDitherStrength"],t.s)
B.k0=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.k1=s([B.aJ,B.cC,B.cD,B.cE,B.aj],A.a2("x<bU>"))
B.k2=s(["30","60","display"],t.s)
B.k3=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.aA=new A.cd(0,"full")
B.ca=new A.cd(1,"compressed")
B.cb=new A.cd(2,"off")
B.da=s([B.aA,B.ca,B.cb],A.a2("x<cd>"))
B.bo=s([B.b9,B.cP],A.a2("x<dB>"))
B.k4=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.k5=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eH=new A.du(1,"reduced")
B.bp=s([B.b0,B.eH],A.a2("x<du>"))
B.eD=new A.d0(0,"wide")
B.eE=new A.d0(2,"night")
B.bq=s([B.eD,B.ch,B.eE],A.a2("x<d0>"))
B.k6=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.kh=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.nZ=new A.bD(0,"bed")
B.o_=new A.bD(1,"chair")
B.bV=new A.bD(2,"sofa")
B.o0=new A.bD(3,"floor")
B.db=s([B.nZ,B.o_,B.bV,B.o0],A.a2("x<bD>"))
B.dc=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.br=s([B.cU,B.cV],A.a2("x<dE>"))
B.o1=new A.c_(0,"long")
B.e7=new A.c_(1,"short")
B.dd=s([B.o1,B.e7],A.a2("x<c_>"))
B.fx=new A.ck("1 - 9","Select Response",!0)
B.ft=new A.ck("SPACE","Silence Ring",!1)
B.kj=s([B.fx,B.ft],t.sa)
B.a3=new A.bY(0,"visual")
B.bH=new A.bY(1,"graphics")
B.a4=new A.bY(2,"gameplay")
B.bI=new A.bY(3,"controls")
B.M=new A.bY(4,"audio")
B.N=new A.bY(5,"accessibility")
B.kk=s([B.a3,B.bH,B.a4,B.bI,B.M,B.N],A.a2("x<bY>"))
B.kl=s(["master","voice","effects","ambience","music"],t.s)
B.bs=s([B.cY,B.cZ],A.a2("x<dF>"))
B.de=s(["res/house/house.json","assets/house/house.json"],t.s)
B.kn=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.ji=new A.cI(2,"safe")
B.jj=new A.cI(3,"custom")
B.df=s([B.bf,B.bg,B.ji,B.jj],A.a2("x<cI>"))
B.H=new A.cr(0,"inactive")
B.bS=new A.cr(2,"affineWarp")
B.e_=new A.cr(3,"vertexSnap")
B.bT=new A.cr(4,"tapeGiveup")
B.bU=new A.cr(5,"portalFail")
B.a7=new A.cr(6,"lightsOut")
B.dg=s([B.H,B.aU,B.bS,B.e_,B.bT,B.bU,B.a7],A.a2("x<cr>"))
B.ko=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.kp=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.kq=s([B.aL,B.bi,B.d6],A.a2("x<er>"))
B.kr=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.pE=new A.bH("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.pD=new A.bH("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.pz=new A.bH("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.pH=new A.bH("ronnie.response","named","A route card has Ronnie written on its back.")
B.pG=new A.bH("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ks=s([B.pE,B.pD,B.pz,B.pH,B.pG],t.uk)
B.pF=new A.bH("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.pC=new A.bH("ronnie.response","named","The name Ronnie holds when the room does not.")
B.pA=new A.bH("denise.revision","accepted","One correction remains yours to protect.")
B.px=new A.bH("attercliffe.plate","kept","A second place survives the room changing around it.")
B.kt=s([B.pF,B.pC,B.pA,B.px],t.uk)
B.kv=s([],t.Fm)
B.kH=s([],t.op)
B.ku=s([],A.a2("x<cK>"))
B.kG=s([],t.W)
B.ky=s([],t.yH)
B.a0=s([],t.qP)
B.kw=s([],t.u)
B.dl=s([],t.xB)
B.kF=s([],t.D)
B.kE=s([],t.El)
B.n=s([],t.s)
B.dj=s([],t.ld)
B.dh=s([],t.su)
B.di=s([],t.uI)
B.dk=s([],t.nm)
B.bt=s([],t.n)
B.kx=s([],t.t)
B.bv=s([],t.zz)
B.jn=new A.ir(15,"kitchen",-0.3,0)
B.jm=new A.ir(19,"spare-room",0,0.3)
B.V=s([B.jn,B.jm],A.a2("x<ir>"))
B.kJ=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kK=s(["high","medium","low"],t.s)
B.eF=new A.cG(1,"headphones")
B.eG=new A.cG(2,"speakers")
B.bw=s([B.ci,B.eF,B.eG,B.cj],A.a2("x<cG>"))
B.kL=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bx=s([B.cS,B.cT],A.a2("x<dD>"))
B.bG=new A.cq(0,"root")
B.dD=new A.bB(0,"pauseMenu")
B.m9=new A.dJ(B.bG,B.dD,null)
B.kM=s([B.m9],t.bA)
B.by=s([B.ce,B.ag,B.cf],A.a2("x<d_>"))
B.kN=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap","uClearColor","uSkyHorizon","uSkyZenith","uSkyGround","uSkyEnabled","uSkyHorizonGlow","uSkyStarDensity","uSkyTexture","uSkyTextureEnabled","uSkyRotation","uSkyExposure","uSkyTextureSrgb","uInverseProjection","uInverseView","uCameraPosition","uCloudCoverage","uCloudDensity","uCloudBaseHeight","uCloudThickness","uCloudScale","uCloudWind","uCloudPhase","uCloudDetail","uCloudSilverLining","uCloudSampleCount","uCloudLightDirection","uCloudLightColor","uCloudLightIntensity"],t.s)
B.iZ=new A.d3(0,"instant")
B.j_=new A.d3(2,"slow")
B.bz=s([B.iZ,B.d_,B.j_],A.a2("x<d3>"))
B.kO=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.kP=s([B.I,B.aV,B.a9],A.a2("x<bN>"))
B.dm=s([B.A,B.ak,B.r,B.al],A.a2("x<eo>"))
B.bW=new A.bs(0,"depthTest")
B.bX=new A.bs(1,"depthFunc")
B.bY=new A.bs(2,"depthWrite")
B.bZ=new A.bs(3,"blendEnable")
B.c_=new A.bs(4,"blendFunc")
B.c0=new A.bs(5,"blendEquation")
B.c1=new A.bs(6,"cullEnable")
B.c2=new A.bs(7,"cullFace")
B.eb=new A.bs(8,"frontFace")
B.oi=new A.bs(9,"stencilEnable")
B.e9=new A.bs(10,"colorMask")
B.ea=new A.bs(11,"scissorEnable")
B.kQ=s([B.bW,B.bX,B.bY,B.bZ,B.c_,B.c0,B.c1,B.c2,B.eb,B.oi,B.e9,B.ea],A.a2("x<bs>"))
B.av=new A.bZ(0,"none")
B.nQ=new A.bZ(1,"albedoOnly")
B.nR=new A.bZ(2,"normalsOnly")
B.nS=new A.bZ(3,"roughnessOnly")
B.nT=new A.bZ(4,"metallicOnly")
B.nU=new A.bZ(5,"aoOnly")
B.nV=new A.bZ(6,"wireframeOnly")
B.dn=s([B.av,B.nQ,B.nR,B.nS,B.nT,B.nU,B.nV],A.a2("x<bZ>"))
B.kR=s(["off","errors","full"],t.s)
B.kS=s(["off","fxaa","msaa2","msaa4"],t.s)
B.kT=s(["off","profile","standard","high"],t.s)
B.kU=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.kV=s(["post_bloom"],t.s)
B.kW=s(["post_color_grade"],t.s)
B.kX=s(["post_depth_of_field"],t.s)
B.kY=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.Y=new A.dg(0,"pbrMaterial")
B.aa=new A.dg(1,"shadowsAndOcclusion")
B.aw=new A.dg(2,"surfaceWeathering")
B.l=new A.dg(3,"atmosphereAndPost")
B.u=new A.dg(4,"weatherEffects")
B.nW=new A.dg(5,"debugView")
B.ap=s([B.Y,B.aa,B.aw,B.l,B.u,B.nW],A.a2("x<dg>"))
B.l_=s(["shadow_csm_hardness"],t.s)
B.l0=s(["srgb","linear"],t.s)
B.l1=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.l2=s(["uBloomStrength"],t.s)
B.l3=s(["uLutSize","uStrength"],t.s)
B.l4=s([B.cG,B.cH,B.cI],A.a2("x<cm>"))
B.l5=s(["uTexelSize","uNear","uFar"],t.s)
B.dp=s(["uTexelStep"],t.s)
B.l6=s(["uVolumetricStrength"],t.s)
B.l7=s(["uninitialized"],t.s)
B.iY=new A.d2(0,"minimal")
B.bA=s([B.iY,B.cW,B.cX],A.a2("x<d2>"))
B.pB=new A.bH("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.pw=new A.bH("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.pv=new A.bH("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.py=new A.bH("ronnie.response","named","The route card gives one name its own line.")
B.l8=s([B.pB,B.pw,B.pv,B.py],t.uk)
B.ae=new A.cc(0,"waiting")
B.ay=new A.cc(1,"atDoor")
B.az=new A.cc(2,"consulting")
B.aW=new A.cc(3,"resolved")
B.l9=s([B.ae,B.ay,B.az,B.aW],A.a2("x<cc>"))
B.la=s(["post_dither","post_quantization_bits"],t.s)
B.fy=new A.ck("W A S D","Move",!1)
B.fw=new A.ck("TAB","Journal",!1)
B.fv=new A.ck("CAPS","Shader Lab",!1)
B.fu=new A.ck("ESC","Pause",!1)
B.lb=s([B.fy,B.fw,B.fv,B.fu],t.sa)
B.lc=s(["floor-linoleum","ceiling-stained"],t.s)
B.lL={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.ld=new A.a4(B.lL,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a4<e,L?>"))
B.lZ={uAlbedo:0}
B.dq=new A.a4(B.lZ,[0],t.I)
B.m5={uSsaoRaw:0,uSceneDepth:1}
B.le=new A.a4(B.m5,[0,1],t.I)
B.dB={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.kg=s(["KeyW","GamepadDpadUp"],t.s)
B.kf=s(["KeyS","GamepadDpadDown"],t.s)
B.k7=s(["KeyA","GamepadDpadLeft"],t.s)
B.k8=s(["KeyD","GamepadDpadRight"],t.s)
B.k9=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.kd=s(["KeyQ","GamepadB"],t.s)
B.ki=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.kI=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.ke=s(["KeyR","GamepadX"],t.s)
B.ka=s(["KeyF","GamepadRB"],t.s)
B.kb=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.kc=s(["KeyL"],t.s)
B.k_=s(["Escape","GamepadMenu"],t.s)
B.lf=new A.a4(B.dB,[B.kg,B.kf,B.k7,B.k8,B.k9,B.kd,B.ki,B.kI,B.ke,B.ka,B.kb,B.kc,B.k_],A.a2("a4<e,J<e>>"))
B.lg=new A.a4(B.dB,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.m2={uScene:0,uHistory:1}
B.lh=new A.a4(B.m2,[0,1],t.I)
B.lB={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.li=new A.a4(B.lB,["a5a2929e6a5c4c0e2af0c3f56260706764bee448","7c6302a5a3cea3fc5911e6433da7f18fc443f244","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.3"],t.w)
B.lP={aPosition:0,aUvMat:1}
B.dr=new A.a4(B.lP,[0,4],t.I)
B.lC={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.lj=new A.a4(B.lC,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.m3={uScene:0,uLut:1}
B.lk=new A.a4(B.m3,[0,1],t.I)
B.m4={uSource:0}
B.ds=new A.a4(B.m4,[0],t.I)
B.lW={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.ll=new A.a4(B.lW,[0,1,2,3,4,5,6],t.I)
B.dt=new A.d4([B.a3,"settings.visual",B.bH,"settings.graphics",B.a4,"settings.gameplay",B.bI,"settings.controls",B.M,"settings.audio",B.N,"settings.accessibility"],t.EJ)
B.du=new A.d4([B.a3,"visual",B.bH,"graphics",B.a4,"gameplay",B.bI,"controls",B.M,"audio",B.N,"accessibility"],t.EJ)
B.lJ={uSharp:0,uBlurred:1,uSceneDepth:2}
B.lm=new A.a4(B.lJ,[0,1,2],t.I)
B.m6={uTex:0,uSkyTexture:1}
B.ln=new A.a4(B.m6,[0,1],t.I)
B.lR={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
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
B.bB=new A.a4(B.lR,[B.jE,B.jz,B.jD,B.jG,B.jA,B.jF,B.jH,B.jB,B.jx,B.jy,B.jv,B.jw,B.jC],A.a2("a4<e,bA>"))
B.m_={uBloom:0}
B.lo=new A.a4(B.m_,[0],t.I)
B.m0={uSceneDepth:0}
B.dv=new A.a4(B.m0,[0],t.I)
B.m1={uScene:0}
B.lp=new A.a4(B.m1,[0],t.I)
B.E={}
B.dw=new A.a4(B.E,[],A.a2("a4<e,i3>"))
B.lq=new A.a4(B.E,[],A.a2("a4<e,J<z>>"))
B.aO=new A.a4(B.E,[],t.w)
B.pN=new A.a4(B.E,[],A.a2("a4<e,l>"))
B.bC=new A.a4(B.E,[],A.a2("a4<e,z>"))
B.x=new A.a4(B.E,[],t.I)
B.dx=new A.a4(B.E,[],A.a2("a4<e,@>"))
B.pO=new A.a4(B.E,[],A.a2("a4<e,e?>"))
B.lr=new A.a4(B.E,[],A.a2("a4<@,@>"))
B.m8={"porcelain-albedo":0,"porcelain-normal":1}
B.ls=new A.a4(B.m8,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.lE={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.lt=new A.a4(B.lE,[0,1,2,3,4,5,6],t.I)
B.dE=new A.cQ(0,"resume")
B.dF=new A.cQ(1,"settings")
B.dG=new A.cQ(2,"controls")
B.dH=new A.cQ(3,"save")
B.dI=new A.cQ(4,"help")
B.dJ=new A.cQ(5,"credits")
B.dK=new A.cQ(6,"back")
B.lu=new A.d4([B.dE,"pause.resume",B.dF,"pause.settings",B.dG,"pause.controls",B.dH,"pause.save",B.dI,"pause.help",B.dJ,"pause.credits",B.dK,"pause.back"],A.a2("d4<cQ,e>"))
B.m7={uVolumetric:0}
B.lv=new A.a4(B.m7,[0],t.I)
B.lT={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.lw=new A.a4(B.lT,[0,1,2,3],t.I)
B.bD=new A.d4([B.aU,1,B.bS,1.5,B.e_,1.5,B.bT,2,B.bU,2,B.a7,4],A.a2("d4<cr,z>"))
B.pP=new A.iA(0,"srgb")
B.pQ=new A.iA(1,"linear")
B.lx=new A.cO("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.aC,0.5,!1,!1)
B.ly=new A.cO("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.aC,0.5,!1,!1)
B.lz=new A.cO("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.aC,0.5,!1,!1)
B.bE=new A.f9(0,"resident")
B.dy=new A.f9(1,"pending")
B.dz=new A.f9(2,"missing")
B.dA=new A.f9(3,"evicted")
B.pR=new A.lh(!1)
B.lA=new A.lh(!0)
B.kC=s([],t.bA)
B.kD=s([],A.a2("x<bB>"))
B.bF=new A.ew(B.kC,B.kD,null)
B.dC=new A.cq(1,"settings")
B.ma=new A.cq(2,"visual")
B.mb=new A.cq(3,"graphics")
B.mc=new A.cq(4,"gameplay")
B.md=new A.cq(5,"controls")
B.me=new A.cq(6,"audio")
B.mf=new A.cq(7,"accessibility")
B.mg=new A.cq(8,"credits")
B.a2=new A.bB(1,"settings")
B.mh=new A.bB(2,"journal")
B.mi=new A.bB(3,"sleep")
B.mj=new A.bB(4,"help")
B.mk=new A.bB(5,"visitor")
B.ml=new A.bB(6,"ending")
B.dL=new A.ex(0,"opened")
B.dM=new A.ex(2,"backed")
B.dN=new A.ex(3,"resumed")
B.mm=new A.ex(4,"dismissed")
B.a5=new A.ex(5,"unchanged")
B.mn=new A.bC("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.mo=new A.bC("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.mp=new A.bC("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.mq=new A.bC("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.mr=new A.bC("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.ms=new A.bC("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.mt=new A.bC("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.mu=new A.bC("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.mv=new A.bC("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.mw=new A.ls(0,1,null)
B.my=new A.lt(1,"high")
B.mx=new A.rH(!1,!0,!0,!0,!1,B.my,35,256)
B.mz=new A.lx(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.y=new A.ey(0,"none")
B.aP=new A.ey(1,"rain")
B.aq=new A.ey(2,"sleet")
B.ar=new A.ey(3,"snow")
B.a6=new A.ey(4,"hail")
B.mA=new A.cR(0,"tooShortForHeader")
B.mB=new A.cR(1,"badMagic")
B.mC=new A.cR(2,"unsupportedVersion")
B.dP=new A.cR(3,"unsupportedStride")
B.mD=new A.cR(4,"truncatedVertexData")
B.mE=new A.cR(5,"nonFiniteBounds")
B.dQ=new A.cR(6,"nonFiniteVertex")
B.mF=new A.cR(7,"vertexCountNotMultipleOfThree")
B.bJ=new A.fe(0,"safe")
B.O=new A.fe(1,"standard")
B.G=new A.fe(2,"high")
B.a8=new A.aX(B.E,0,t.M)
B.as=new A.dN(B.bJ,B.a8)
B.lY={shadows:0}
B.nE=new A.aX(B.lY,1,t.M)
B.dR=new A.dN(B.O,B.nE)
B.lG={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.nu=new A.aX(B.lG,5,t.M)
B.mH=new A.dN(B.G,B.nu)
B.lX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.nD=new A.aX(B.lX,6,t.M)
B.dS=new A.dN(B.G,B.nD)
B.mG=new A.fe(4,"shipping")
B.lI={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.nw=new A.aX(B.lI,7,t.M)
B.pS=new A.dN(B.mG,B.nw)
B.aQ=new A.lF(0,0,0,1)
B.mI=new A.a5(0,1)
B.mJ=new A.a5(256,256)
B.mK=new A.a5(4096,2048)
B.mL=new A.a5(4096,4096)
B.mM=new A.a5(512,512)
B.mN=new A.bk(0.35,0.52,0.88)
B.mO=new A.aH(0.46,0.25,0.2)
B.dT=new A.bk(0.22,0.45,0.92)
B.mP=new A.aH(0.48,0.4,0.34)
B.mQ=new A.aH(0.31,0.25,0.23)
B.bK=new A.bk(0.75,0.52,0.42)
B.mR=new A.bk(0.4,0.65,0.95)
B.dU=new A.bk(0.88,0.96,1)
B.mS=new A.aH(0.37,0.33,0.31)
B.mT=new A.bk(0.62,0.48,0.45)
B.mU=new A.aH(0.34,0.32,0.29)
B.dV=new A.aH(0.38,0.25,0.19)
B.bL=new A.bk(0.9,0.8,0.72)
B.aR=new A.bk(0.28,0.16,0.12)
B.mV=new A.aH(0.31,0.28,0.24)
B.bM=new A.bk(0.65,0.45,0.35)
B.mW=new A.aH(0.58,0.56,0.5)
B.dW=new A.bk(0.2,0.38,0.9)
B.mX=new A.aH(0.44,0.37,0.28)
B.mY=new A.aH(0.52,0.5,0.44)
B.mZ=new A.aH(0.24,0.25,0.27)
B.n_=new A.aH(0.28,0.27,0.25)
B.n0=new A.bk(0.35,0.28,0.25)
B.dX=new A.bk(0.52,0.32,0.38)
B.n1=new A.aH(0.42,0.4,0.38)
B.n2=new A.aH(0.18,0.2,0.21)
B.n3=new A.aH(0.2,0.12,0.1)
B.aS=new A.bk(0.35,0.2,0.15)
B.n4=new A.aH(0.12,0.15,0.2)
B.n5=new A.hn(0,"constructed")
B.W=new A.hn(1,"ready")
B.bN=new A.hn(2,"lost")
B.n6=new A.iS(B.as,384,216,1,B.b6,0,512,32,4,1,B.cA)
B.bO=new A.fh(0,"constructed")
B.n7=new A.fh(1,"initializing")
B.bP=new A.fh(2,"ready")
B.dY=new A.fh(3,"contextLost")
B.i=new A.ho(0,"read")
B.k=new A.ho(1,"write")
B.P=new A.ho(2,"historyRead")
B.bQ=new A.hp(0,"prepared")
B.n8=new A.hp(1,"committed")
B.n9=new A.hp(2,"rolledBack")
B.q=new A.iU(0,"rgba8")
B.na=new A.aO("dofBlurH",B.q,192,108,1,0)
B.nb=new A.aO("dofBlurV",B.q,192,108,1,0)
B.nc=new A.aO("dofOutput",B.q,384,216,1,0)
B.dZ=new A.iU(2,"depth24")
B.nd=new A.aO("shadowMap",B.dZ,512,512,1,0)
B.ne=new A.aO("volumetricLight",B.q,192,108,1,0)
B.nf=new A.aO("sceneColor",B.q,384,216,1,1)
B.ng=new A.aO("ssaoRaw",B.q,192,108,1,0)
B.nh=new A.aO("ssaoBlurred",B.q,192,108,1,0)
B.ni=new A.aO("gradeOutput",B.q,384,216,1,0)
B.nj=new A.aO("vhsOutput",B.q,384,216,1,0)
B.nk=new A.aO("sceneDepth",B.dZ,384,216,1,0)
B.nl=new A.aO("bloomBlurH",B.q,192,108,1,0)
B.nm=new A.aO("bloomBlurV",B.q,192,108,1,0)
B.nn=new A.aO("present",B.q,384,216,1,0)
B.bR=new A.aO("sceneColor",B.q,384,216,1,0)
B.no=new A.aO("ps1Output",B.q,384,216,1,0)
B.np=new A.fj(null,"save storage unavailable")
B.nq=new A.fj(null,"save could not be recovered")
B.nr=new A.fj(null,null)
B.lM={WheelUp:0,WheelDown:1}
B.ns=new A.aX(B.lM,2,t.M)
B.lU={open:0,closed:1}
B.nt=new A.aX(B.lU,2,t.M)
B.lO={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.nv=new A.aX(B.lO,10,t.M)
B.lF={Escape:0}
B.e0=new A.aX(B.lF,1,t.M)
B.lD={open:0,closed:1,mixed:2}
B.nx=new A.aX(B.lD,3,t.M)
B.lS={front:0,"rear-service":1}
B.ny=new A.aX(B.lS,2,t.M)
B.nz=new A.h6([18,20],A.a2("h6<j>"))
B.lV={overcast:0,rain:1}
B.nA=new A.aX(B.lV,2,t.M)
B.lQ={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.nB=new A.aX(B.lQ,16,t.M)
B.lN={Escape:0,Tab:1,F11:2}
B.e1=new A.aX(B.lN,3,t.M)
B.lK={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.nC=new A.aX(B.lK,5,t.M)
B.lH={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.at=new A.aX(B.lH,7,t.M)
B.e4=new A.fl(2,"link")
B.nP=new A.iX(B.e4,"gl.createProgram() returned null")
B.e2=new A.fl(0,"vertex")
B.e3=new A.fl(1,"fragment")
B.e5=new A.fl(3,"validation")
B.z=new A.iY(0,"live")
B.e6=new A.iY(1,"unavailable")
B.nX=new A.iZ(0,"full")
B.nY=new A.iZ(2,"culled")
B.o2=new A.bh(0,"polarNight")
B.o3=new A.bh(1,"astronomicalDawn")
B.o4=new A.bh(10,"civilDusk")
B.o5=new A.bh(11,"nauticalDusk")
B.o6=new A.bh(12,"astronomicalDusk")
B.o7=new A.bh(13,"night")
B.o8=new A.bh(14,"polarDay")
B.o9=new A.bh(2,"nauticalDawn")
B.oa=new A.bh(3,"civilDawn")
B.ob=new A.bh(4,"sunrise")
B.e8=new A.bh(5,"morning")
B.oc=new A.bh(6,"solarNoon")
B.od=new A.bh(7,"afternoon")
B.oe=new A.bh(8,"goldenHour")
B.of=new A.bh(9,"sunset")
B.Q=new A.C(0,1,0)
B.ax=new A.C(0,-1,0)
B.og=new A.bO(-1,B.Q,B.ax,B.bk,1,1,0.3,0.5)
B.oh=new A.lW(!1,"","",B.bt,B.bt)
B.ec=new A.dS(0,"resident")
B.ed=new A.dS(1,"pending")
B.ee=new A.dS(2,"missing")
B.ef=new A.dS(3,"evicted")
B.w=new A.C(0,0,0)
B.B=new A.hx(B.w,B.aQ,1)
B.oj=A.cA("Kf")
B.ok=A.cA("Kg")
B.ol=A.cA("pk")
B.om=A.cA("pl")
B.on=A.cA("F6")
B.oo=A.cA("F7")
B.op=A.cA("F8")
B.oq=A.cA("aj")
B.or=A.cA("L")
B.os=A.cA("uA")
B.ot=A.cA("uB")
B.ou=A.cA("G8")
B.ov=A.cA("c1")
B.e=new A.di(0,"float1")
B.ab=new A.di(1,"float2")
B.m=new A.di(2,"float3")
B.ow=new A.di(3,"float4")
B.o=new A.di(4,"mat4")
B.eg=new A.di(5,"mat4Array")
B.c3=new A.o(B.e,0)
B.c4=new A.o(B.e,1)
B.Z=new A.di(6,"sampler")
B.v=new A.o(B.Z,0)
B.ac=new A.o(B.Z,1)
B.eh=new A.o(B.Z,2)
B.ox=new A.o(B.Z,3)
B.oy=new A.o(B.Z,4)
B.oz=new A.o(B.Z,5)
B.oA=new A.o(B.Z,6)
B.oB=new A.uF(!1)
B.oC=new A.C(0,0,1)
B.oD=new A.C(0,3,0)
B.ei=new A.C(1,0,0)
B.oE=new A.C(0,-9.81,0)
B.oF=new A.C(1/0,1/0,1/0)
B.oG=new A.C(2.75,3,2.75)
B.oH=new A.C(-1/0,-1/0,-1/0)
B.ej=new A.cT(1,"normal")
B.c6=new A.cT(6,"tangent4")
B.oI=new A.cT(0,"position")
B.c8=new A.bb(B.oI,0,3)
B.c9=new A.bb(B.ej,3,3)
B.eq=new A.bb(B.c6,6,4)
B.ek=new A.cT(2,"color")
B.en=new A.bb(B.ek,10,4)
B.el=new A.cT(4,"alpha")
B.eo=new A.bb(B.el,14,1)
B.em=new A.cT(5,"uv0")
B.ep=new A.bb(B.em,15,2)
B.oJ=new A.cT(7,"uv1")
B.oN=new A.bb(B.oJ,17,2)
B.c7=new A.cT(8,"legacyMaterialEffect")
B.oQ=new A.bb(B.c7,19,1)
B.kZ=s([B.c8,B.c9,B.eq,B.en,B.eo,B.ep,B.oN,B.oQ],t.v5)
B.oR=new A.j6("surfaceV2WithUv1",20,B.kZ)
B.oK=new A.bb(B.ek,6,4)
B.oL=new A.bb(B.el,10,1)
B.oM=new A.bb(B.em,11,2)
B.oO=new A.bb(B.c7,13,1)
B.km=s([B.c8,B.c9,B.oK,B.oL,B.oM,B.oO],t.v5)
B.ad=new A.j6("compatibility14",14,B.km)
B.oP=new A.bb(B.c7,17,1)
B.jT=s([B.c8,B.c9,B.eq,B.en,B.eo,B.ep,B.oP],t.v5)
B.oS=new A.j6("surfaceV2",18,B.jT)
B.oT=new A.eB(0,"visitorAnswered")
B.er=new A.eB(1,"visitorIgnored")
B.oU=new A.eB(2,"entryVerified")
B.oV=new A.eB(3,"entryContradicted")
B.oW=new A.eB(4,"exposureAccepted")
B.oY=new A.dj(1,"malformedDay")
B.oZ=new A.dj(2,"malformedTier")
B.es=new A.dj(3,"missingTierLines")
B.af=new A.dj(6,"invalidPhase")
B.p1=new A.bF(B.af,"No reaction is due.")
B.p9=new A.bv(B.p1)
B.p6=new A.bF(B.af,"The active visit cannot be chosen.")
B.pa=new A.bv(B.p6)
B.p2=new A.bF(B.af,"The active visit has no line to advance.")
B.pb=new A.bv(B.p2)
B.p0=new A.dj(5,"noActiveVisit")
B.p3=new A.bF(B.p0,"There is no active visit.")
B.et=new A.bv(B.p3)
B.p5=new A.bF(B.af,"A visit is already active.")
B.pc=new A.bv(B.p5)
B.p_=new A.dj(4,"noArrival")
B.p8=new A.bF(B.p_,"The authored arrival is missing.")
B.pd=new A.bv(B.p8)
B.p4=new A.bF(B.af,"That answer is not offered.")
B.pe=new A.bv(B.p4)
B.oX=new A.dj(0,"missingCorpus")
B.p7=new A.bF(B.oX,"The authored visitor corpus is empty.")
B.pf=new A.bv(B.p7)
B.pg=new A.eE(0,"none")
B.ph=new A.eE(1,"splash")
B.cc=new A.eE(2,"settle")
B.pi=new A.eE(3,"melt")
B.eu=new A.eE(4,"rebound")
B.pj=new A.ft(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.pk=new A.ft(-2,8.8,4.5,0.9,1,!0,0.00005)
B.pl=new A.ft(0,0,0,1,1,!1,0)
B.pm=new A.ft(-5,18,5.5,0.65,1.35,!0,0.001)
B.pn=new A.ft(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.ev=new A.fw(1,"exact")
B.cd=new A.fw(2,"partial")
B.aX=new A.fw(3,"contradiction")
B.po=new A.fw(0,"skipped")
B.pp=new A.fv(B.po,B.a8)
B.pq=new A.fv(B.cd,B.a8)
B.pr=new A.jb(B.a0,!1)
B.ps=new A.jb(B.a0,!0)
B.ew=new A.jd(0,"horizontal")
B.pt=new A.jd(1,"vertical")
B.ex=new A.jf(0,"horizontal")
B.pu=new A.jf(1,"vertical")
B.aY=new A.hE(0,"empty")
B.pI=new A.hE(1,"cpuReady")
B.aZ=new A.hE(4,"released")})();(function staticFields(){$.vA=null
$.ci=A.c([],A.a2("x<L>"))
$.B9=null
$.rU=0
$.rV=A.In()
$.Av=null
$.Au=null
$.Dk=null
$.Da=null
$.Ds=null
$.xU=null
$.y2=null
$.A4=null
$.w_=A.c([],A.a2("x<J<L>?>"))
$.hR=null
$.jW=null
$.jX=null
$.zE=!1
$.ar=B.C
$.By=""
$.Bz=null
$.Bt=null
$.rs=null
$.dn=A.ak()
$.fF=A.ak()
$.aC=null
$.wd=A.ak()
$.CC=null
$.q=A.ak()
$.Cf=A.ak()
$.cW=A.ak()
$.am=A.ak()
$.S=A.ak()
$.bw=A.ak()
$.V=A.ak()
$.zm=A.ak()
$.wg=null
$.zz=null
$.bm=null
$.zq=!1
$.zO=!1
$.jT=B.b1
$.dp=B.aB
$.xC=!1
$.A_=!1
$.CE=null
$.hN=null
$.nq=A.n(t.N,t.xe)
$.ne=null
$.Cq=0
$.D9=0
$.zF=null
$.hV=!1
$.CD=!1
$.zG=0
$.eN=0
$.zs="booting"
$.ch=0
$.eS=0
$.ag="hall"
$.eM=A.ak()
$.hK=A.ak()
$.cg=A.ak()
$.CJ=null
$.zP=0
$.zT=1.65
$.eQ=null
$.bl=null
$.k_=!1
$.cz=A.ak()
$.hL=A.ak()
$.jQ=A.ak()
$.nc=A.ak()
$.Ce=A.ak()
$.Cd=A.ak()
$.aA=A.ak()
$.fG=A.ak()
$.jP=A.ak()
$.nb=A.ak()
$.jR=A.ak()
$.jS=A.ak()
$.fE=A.ak()
$.eL=A.ak()
$.hJ=A.ak()
$.jO=A.ak()
$.jM=A.ak()
$.jN=A.ak()
$.aP=A.ak()
$.na=A.ak()
$.bd=A.ak()
$.xD=A.a_(t.S)
$.dq=A.c([],t.s)
$.zx=null
$.D0=!1
$.Ci=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Ki","DC",()=>A.xW("_$dart_dartClosure"))
s($,"Kh","yL",()=>A.xW("_$dart_dartClosure_dartJSInterop"))
s($,"L_","DZ",()=>A.c([new J.l5()],A.a2("x<iV>")))
s($,"Kt","DD",()=>A.dU(A.uz({
toString:function(){return"$receiver$"}})))
s($,"Ku","DE",()=>A.dU(A.uz({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Kv","DF",()=>A.dU(A.uz(null)))
s($,"Kw","DG",()=>A.dU(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Kz","DJ",()=>A.dU(A.uz(void 0)))
s($,"KA","DK",()=>A.dU(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ky","DI",()=>A.dU(A.Bv(null)))
s($,"Kx","DH",()=>A.dU(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"KC","DM",()=>A.dU(A.Bv(void 0)))
s($,"KB","DL",()=>A.dU(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"KE","Ae",()=>A.GC())
s($,"KI","DR",()=>A.Fs(4096))
s($,"KG","DP",()=>new A.w9().$0())
s($,"KH","DQ",()=>new A.w8().$0())
s($,"KF","DO",()=>A.Fr(A.R(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"KT","i1",()=>A.nw(B.or))
s($,"Kr","Ad",()=>{A.FH()
return $.rU})
s($,"Ke","DB",()=>B.bR.i8())
s($,"Kn","Ac",()=>A.lq(A.c([255,255,255,255],t.t)))
s($,"Kk","A9",()=>A.lq(A.c([128,128,255,255],t.t)))
s($,"Kj","A8",()=>A.lq(A.c([0,0,0,255],t.t)))
s($,"Kl","Aa",()=>A.lq(A.c([255,255,0,255],t.t)))
s($,"Km","Ab",()=>A.lq(A.c([255,255,255,255],t.t)))
s($,"L5","E2",()=>A.j5(0,1,0))
s($,"KD","DN",()=>A.Gz(A.a_(t.N),0,0,A.j5(0,0,0)))
s($,"L1","E_",()=>A.iQ("^[a-z0-9][a-z0-9._-]*$"))
s($,"L8","fM",()=>{var q=$.Bt
if(q==null){A.xQ()
A.xQ()
A.xQ()
A.xQ()
q=$.Bt=new A.un()}return q})
s($,"Ko","yM",()=>A.yS(B.b9,B.cQ,!0,B.ba,B.cS,B.cV,B.cW,B.cY,!0,!1,B.d_))
s($,"KO","DS",()=>new A.ot())
r($,"D3","ds",()=>A.z6(null,null))
r($,"jV","k5",()=>A.h8(null,null))
r($,"zw","fL",()=>A.fZ(null,null,!1,1,!1,!1,2,1))
r($,"zA","cC",()=>$.yM())
s($,"KU","DV",()=>new A.q2())
s($,"KV","DW",()=>new A.qc())
s($,"KW","yO",()=>new A.qs(A.n(t.N,t.S)))
s($,"KQ","DT",()=>A.dV().gaZ().h(0,"debugPause")==="1")
s($,"KN","k4",()=>A.dV().gaZ().h(0,"automation")==="1")
s($,"KK","yN",()=>A.IE())
s($,"KJ","Af",()=>$.yN()!=null)
s($,"KL","Ag",()=>$.k4()?A.dV().gaZ().h(0,"captureMantleId"):null)
s($,"KM","Ah",()=>A.dV().gaZ().h(0,"captureMantleLit")==="1")
r($,"xy","e7",()=>A.j5(0,0,0))
r($,"xp","DY",()=>A.j5(0,0,0))
r($,"xJ","ny",()=>A.j5(0,0,0))
s($,"KP","Ai",()=>A.IF())
s($,"KY","k6",()=>new A.pm(A.j5(0,0,0)))
s($,"KX","DX",()=>new A.qR(new A.p1()))
s($,"KR","cB",()=>new A.pF(A.c([],t.s)))
s($,"L0","bS",()=>A.Bo())
s($,"L3","E0",()=>new A.tZ(A.n(t.N,t.oZ)))
s($,"L2","Aj",()=>new A.rY(A.FJ(520588),B.bj))
s($,"L4","E1",()=>new A.uX())
s($,"KS","DU",()=>new A.pZ())
s($,"KZ","i2",()=>new A.rw(B.bF))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ev,ArrayBuffer:A.hi,ArrayBufferView:A.iF,DataView:A.lj,Float32Array:A.iC,Float64Array:A.lk,Int16Array:A.ll,Int32Array:A.lm,Int8Array:A.ln,Uint16Array:A.lo,Uint32Array:A.lp,Uint8ClampedArray:A.fb,CanvasPixelArray:A.fb,Uint8Array:A.iG})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bq.$nativeSuperclassTag="ArrayBufferView"
A.jn.$nativeSuperclassTag="ArrayBufferView"
A.jo.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.jp.$nativeSuperclassTag="ArrayBufferView"
A.jq.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.nv
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
