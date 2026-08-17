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
if(a[b]!==s){A.J9(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.zh(b)
return new s(c,this)}:function(){if(s===null)s=A.zh(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.zh(a).prototype
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
zm(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xb(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.zk==null){A.IP()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.a(A.AH("Return interceptor for "+A.w(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.v_
if(o==null)o=$.v_=A.xa(n)
p=q[o]}if(p!=null)return p
p=A.IV(a)
if(p!=null)return p
if(typeof a=="function")return B.jf
s=Object.getPrototypeOf(a)
if(s==null)return B.dF
if(s===Object.prototype)return B.dF
if(typeof q=="function"){o=$.v_
if(o==null)o=$.v_=A.xa(n)
Object.defineProperty(q,o,{value:B.c_,enumerable:false,writable:true,configurable:true})
return B.c_}return B.c_},
A4(a,b){if(a<0||a>4294967295)throw A.a(A.b_(a,0,4294967295,"length",null))
return J.A6(new Array(a),b)},
A5(a,b){if(a<0)throw A.a(A.r("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
y6(a,b){if(a<0)throw A.a(A.r("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
A6(a,b){var s=A.c(a,b.i("u<0>"))
s.$flags=1
return s},
En(a,b){var s=t.hO
return J.zD(s.a(a),s.a(b))},
A8(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Eo(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.A8(r))break;++b}return b},
Ep(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.A8(q))break}return b},
eF(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ic.prototype
return J.kR.prototype}if(typeof a=="string")return J.eh.prototype
if(a==null)return J.id.prototype
if(typeof a=="boolean")return J.kQ.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dy.prototype
if(typeof a=="symbol")return J.h1.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.J)return a
return J.xb(a)},
aO(a){if(typeof a=="string")return J.eh.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dy.prototype
if(typeof a=="symbol")return J.h1.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.J)return a
return J.xb(a)},
cN(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dy.prototype
if(typeof a=="symbol")return J.h1.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.J)return a
return J.xb(a)},
Cr(a){if(typeof a=="number")return J.h_.prototype
if(typeof a=="string")return J.eh.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.fd.prototype
return a},
Cs(a){if(typeof a=="string")return J.eh.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.fd.prototype
return a},
Ct(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dy.prototype
if(typeof a=="symbol")return J.h1.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.J)return a
return J.xb(a)},
zB(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Cr(a).a0(a,b)},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eF(a).aa(a,b)},
aV(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.IU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aO(a).h(a,b)},
be(a,b,c){return J.cN(a).k(a,b,c)},
eJ(a,b){return J.cN(a).l(a,b)},
Dd(a,b){return J.Cs(a).hg(a,b)},
jS(a,b){return J.cN(a).O(a,b)},
zC(a,b,c){return J.Ct(a).hi(a,b,c)},
De(a,b,c){return J.Ct(a).hj(a,b,c)},
Df(a,b){return J.cN(a).cN(a,b)},
zD(a,b){return J.Cr(a).G(a,b)},
zE(a,b){return J.aO(a).p(a,b)},
ni(a,b){return J.cN(a).a5(a,b)},
Dg(a,b){return J.cN(a).a7(a,b)},
zF(a){return J.cN(a).gX(a)},
aF(a){return J.eF(a).gR(a)},
jT(a){return J.aO(a).gM(a)},
Dh(a){return J.aO(a).gZ(a)},
P(a){return J.cN(a).gu(a)},
cP(a){return J.aO(a).gt(a)},
eK(a){return J.eF(a).ga8(a)},
zG(a,b){return J.cN(a).U(a,b)},
dW(a,b,c){return J.cN(a).bp(a,b,c)},
Di(a,b){return J.aO(a).st(a,b)},
Dj(a,b){return J.Cs(a).aO(a,b)},
bY(a){return J.eF(a).q(a)},
zH(a,b){return J.cN(a).eF(a,b)},
kO:function kO(){},
kQ:function kQ(){},
id:function id(){},
ig:function ig(){},
ei:function ei(){},
lc:function lc(){},
fd:function fd(){},
dy:function dy(){},
h0:function h0(){},
h1:function h1(){},
u:function u(a){this.$ti=a},
kP:function kP(){},
qa:function qa(a){this.$ti=a},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(){},
ic:function ic(){},
kR:function kR(){},
eh:function eh(){}},A={y7:function y7(){},
x4(){return $},
Dw(a,b,c){if(t.he.b(a))return new A.j0(a,b.i("@<0>").N(c).i("j0<1,2>"))
return new A.eP(a,b.i("@<0>").N(c).i("eP<1,2>"))},
Ac(a){return new A.h2("Field '"+a+"' has been assigned during initialization.")},
a8(a){return new A.h2("Field '"+a+"' has not been initialized.")},
Er(a){return new A.h2("Field '"+a+"' has already been initialized.")},
xc(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b6(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lJ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fy(a,b,c){return a},
zl(a){var s,r
for(s=$.ce.length,r=0;r<s;++r)if(a===$.ce[r])return!0
return!1},
lH(a,b,c,d){A.lo(b,"start")
if(c!=null){A.lo(c,"end")
if(b>c)A.f(A.b_(b,0,c,"start",null))}return new A.iP(a,b,c,d.i("iP<0>"))},
kX(a,b,c,d){if(t.he.b(a))return new A.dn(a,b,c.i("@<0>").N(d).i("dn<1,2>"))
return new A.cF(a,b,c.i("@<0>").N(d).i("cF<1,2>"))},
cD(){return new A.hk("No element")},
A3(){return new A.hk("Too many elements")},
et:function et(){},
hW:function hW(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b){this.a=a
this.$ti=b},
j0:function j0(a,b){this.a=a
this.$ti=b},
iZ:function iZ(){},
b5:function b5(a,b){this.a=a
this.$ti=b},
h2:function h2(a){this.a=a},
dm:function dm(a){this.a=a},
t1:function t1(){},
S:function S(){},
Y:function Y(){},
iP:function iP(a,b,c,d){var _=this
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
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
ik:function ik(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
i4:function i4(a,b,c){this.a=a
this.b=b
this.$ti=c},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
i2:function i2(a){this.$ti=a},
dM:function dM(a,b){this.a=a
this.$ti=b},
iV:function iV(a,b){this.a=a
this.$ti=b},
az:function az(){},
eo:function eo(){},
hn:function hn(){},
bG:function bG(a,b){this.a=a
this.$ti=b},
js:function js(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.aA(a.ga_(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aA(a.gai(),!0,c)
m=new A.a2(q,n,b.i("@<0>").N(c).i("a2<1,2>"))
m.$keys=l
return m}return new A.hZ(A.aZ(a,b,c),b.i("@<0>").N(c).i("hZ<1,2>"))},
DC(){throw A.a(A.bm("Cannot modify unmodifiable Map"))},
DD(){throw A.a(A.bm("Cannot modify constant Set"))},
CJ(a){var s=A.CI(a)
if(s!=null)return s
return"minified:"+a},
IU(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bY(a)
return s},
iA(a){var s,r=$.Ao
if(r==null)r=$.Ao=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dC(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
f2(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.b7(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
lj(a){var s,r,q,p
if(a instanceof A.J)return A.bM(A.cf(a),null)
s=J.eF(a)
if(s===B.je||s===B.jg||t.qF.b(a)){r=B.cn(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bM(A.cf(a),null)},
Ar(a){var s,r,q
if(a==null||typeof a=="number"||A.bC(a))return J.bY(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.e8)return a.q(0)
if(a instanceof A.bL)return a.h7(!0)
s=$.D8()
for(r=0;r<1;++r){q=s[r].oq(a)
if(q!=null)return q}return"Instance of '"+A.lj(a)+"'"},
EK(){return Date.now()},
ER(){var s,r
if($.rz!==0)return
$.rz=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rz=1e6
$.rA=new A.ry(r)},
EJ(){if(!!self.location)return self.location.href
return null},
ES(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aw(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dR(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.b_(a,0,1114111,null,null))},
hb(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
EQ(a){var s=A.hb(a).getUTCFullYear()+0
return s},
EO(a){var s=A.hb(a).getUTCMonth()+1
return s},
Ap(a){var s=A.hb(a).getUTCDate()+0
return s},
Aq(a){var s=A.hb(a).getUTCHours()+0
return s},
EN(a){var s=A.hb(a).getUTCMinutes()+0
return s},
EP(a){var s=A.hb(a).getUTCSeconds()+0
return s},
EM(a){var s=A.hb(a).getUTCMilliseconds()+0
return s},
EL(a){var s=a.$thrownJsError
if(s==null)return null
return A.cO(s)},
As(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aP(a,s)
a.$thrownJsError=s
s.stack=b.q(0)}},
xd(a){throw A.a(A.x0(a))},
d(a,b){if(a==null)J.cP(a)
throw A.a(A.x7(a,b))},
x7(a,b){var s,r="index"
if(!A.aT(b))return new A.cy(!0,b,r,null)
s=A.h(J.cP(a))
if(b<0||b>=s)return A.q0(b,s,a,r)
return A.Au(b,r)},
IH(a,b,c){if(a>c)return A.b_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b_(b,a,c,"end",null)
return new A.cy(!0,b,"end",null)},
x0(a){return new A.cy(!0,a,null,null)},
a(a){return A.aP(a,new Error())},
aP(a,b){var s
if(a==null)a=new A.dJ()
b.dartException=a
s=A.Jc
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Jc(){return J.bY(this.dartException)},
f(a,b){throw A.aP(a,b==null?new Error():b)},
b3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.GS(a,b,c),s)},
GS(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.iQ("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.a(A.ay(a))},
dK(a){var s,r,q,p,o,n
a=A.CD(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.u5(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
u6(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
AG(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
y8(a,b){var s=b==null,r=s?null:b.method
return new A.kS(a,r,s?null:b.receiver)},
ai(a){var s
if(a==null)return new A.r3(a)
if(a instanceof A.i3){s=a.a
return A.eG(a,s==null?A.fv(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eG(a,a.dartException)
return A.Ia(a)},
eG(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Ia(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dR(r,16)&8191)===10)switch(q){case 438:return A.eG(a,A.y8(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.eG(a,new A.it())}}if(a instanceof TypeError){p=$.CN()
o=$.CO()
n=$.CP()
m=$.CQ()
l=$.CT()
k=$.CU()
j=$.CS()
$.CR()
i=$.CW()
h=$.CV()
g=p.b3(s)
if(g!=null)return A.eG(a,A.y8(A.q(s),g))
else{g=o.b3(s)
if(g!=null){g.method="call"
return A.eG(a,A.y8(A.q(s),g))}else if(n.b3(s)!=null||m.b3(s)!=null||l.b3(s)!=null||k.b3(s)!=null||j.b3(s)!=null||m.b3(s)!=null||i.b3(s)!=null||h.b3(s)!=null){A.q(s)
return A.eG(a,new A.it())}}return A.eG(a,new A.lN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iM()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eG(a,new A.cy(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iM()
return a},
cO(a){var s
if(a instanceof A.i3)return a.b
if(a==null)return new A.jg(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jg(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nf(a){if(a==null)return J.aF(a)
if(typeof a=="object")return A.iA(a)
return J.aF(a)},
Iz(a){if(typeof a=="number")return B.b.gR(a)
if(a instanceof A.mO)return A.iA(a)
if(a instanceof A.bL)return a.gR(a)
return A.nf(a)},
Cp(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
IM(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Hh(a,b,c,d,e,f){t.BO.a(a)
switch(A.h(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.uL("Unsupported number of arguments for wrapped closure"))},
hO(a,b){var s=a.$identity
if(!!s)return s
s=A.IB(a,b)
a.$identity=s
return s},
IB(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Hh)},
DB(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lG().constructor.prototype):Object.create(new A.fF(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.zO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Dx(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.zO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Dx(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ds)}throw A.a("Error in functionType of tearoff")},
Dy(a,b,c,d){var s=A.zN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
zO(a,b,c,d){if(c)return A.DA(a,b,d)
return A.Dy(b.length,d,a,b)},
Dz(a,b,c,d){var s=A.zN,r=A.Dt
switch(b?-1:a){case 0:throw A.a(new A.lt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
DA(a,b,c){var s,r
if($.zL==null)$.zL=A.zK("interceptor")
if($.zM==null)$.zM=A.zK("receiver")
s=b.length
r=A.Dz(s,c,a,b)
return r},
zh(a){return A.DB(a)},
Ds(a,b){return A.jk(v.typeUniverse,A.cf(a.a),b)},
zN(a){return a.a},
Dt(a){return a.b},
zK(a){var s,r,q,p=new A.fF("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.r("Field name "+a+" not found.",null))},
xa(a){return v.getIsolateTag(a)},
CH(){return v.G},
K6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IV(a){var s,r,q,p,o,n=A.q($.Cu.$1(a)),m=$.x8[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.al($.Ck.$2(a,n))
if(q!=null){m=$.x8[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.xM(s)
$.x8[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xh[n]=s
return s}if(p==="-"){o=A.xM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.CB(a,s)
if(p==="*")throw A.a(A.AH(n))
if(v.leafTags[n]===true){o=A.xM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.CB(a,s)},
CB(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.zm(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
xM(a){return J.zm(a,!1,null,!!a.$ic_)},
IX(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.xM(s)
else return J.zm(s,c,null,null)},
IP(){if(!0===$.zk)return
$.zk=!0
A.IQ()},
IQ(){var s,r,q,p,o,n,m,l
$.x8=Object.create(null)
$.xh=Object.create(null)
A.IO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.CC.$1(o)
if(n!=null){m=A.IX(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
IO(){var s,r,q,p,o,n,m=B.eZ()
m=A.hN(B.f_,A.hN(B.f0,A.hN(B.co,A.hN(B.co,A.hN(B.f1,A.hN(B.f2,A.hN(B.f3(B.cn),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Cu=new A.xe(p)
$.Ck=new A.xf(o)
$.CC=new A.xg(n)},
hN(a,b){return a(b)||b},
ID(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
A9(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.N("Illegal RegExp pattern ("+String(o)+")",a,null))},
J7(a,b,c){var s=a.indexOf(b,c)
return s>=0},
IK(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
CD(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zo(a,b,c){var s=A.J8(a,b,c)
return s},
J8(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.CD(b),"g"),A.IK(c))},
as:function as(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b){this.a=a
this.$ti=b},
fM:function fM(){},
ot:function ot(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b){this.a=a
this.$ti=b},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cV:function cV(a,b){this.a=a
this.$ti=b},
fN:function fN(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=a
this.$ti=b},
ry:function ry(a){this.a=a},
iH:function iH(){},
u5:function u5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
it:function it(){},
kS:function kS(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a){this.a=a},
r3:function r3(a){this.a=a},
i3:function i3(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a
this.b=null},
e8:function e8(){},
ka:function ka(){},
kb:function kb(){},
lK:function lK(){},
lG:function lG(){},
fF:function fF(a,b){this.a=a
this.b=b},
lt:function lt(a){this.a=a},
cl:function cl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qj:function qj(a){this.a=a},
qt:function qt(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ab:function ab(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
M:function M(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eX:function eX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xe:function xe(a){this.a=a},
xf:function xf(a){this.a=a},
xg:function xg(a){this.a=a},
bL:function bL(){},
ex:function ex(){},
dP:function dP(){},
ie:function ie(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mt:function mt(a){this.b=a},
m8:function m8(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iO:function iO(a,b){this.a=a
this.c=b},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function mL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
J9(a){throw A.aP(A.Ac(a),new Error())},
p(){throw A.aP(A.a8(""),new Error())},
b8(){throw A.aP(A.Er(""),new Error())},
zp(){throw A.aP(A.Ac(""),new Error())},
ag(){var s=new A.uK()
return s.b=s},
uK:function uK(){this.b=null},
vI(a,b,c){},
a1(a){return a},
EB(a,b,c){A.vI(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
EC(a){return new Int8Array(a)},
ED(a){return new Uint8Array(a)},
l8(a){return new Uint8Array(A.a1(a))},
Am(a,b,c){A.vI(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dT(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.x7(b,a))},
BD(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.IH(a,b,c))
return b},
ej:function ej(){},
h8:function h8(){},
ir:function ir(){},
vv:function vv(a){this.a=a},
l1:function l1(){},
bi:function bi(){},
ip:function ip(){},
iq:function iq(){},
io:function io(){},
l2:function l2(){},
l3:function l3(){},
l4:function l4(){},
l5:function l5(){},
l6:function l6(){},
l7:function l7(){},
f0:function f0(){},
is:function is(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
yj(a,b){var s=b.c
return s==null?b.c=A.ji(a,"aQ",[b.x]):s},
Az(a){var s=a.w
if(s===6||s===7)return A.Az(a.x)
return s===11||s===12},
F0(a){return a.as},
a_(a){return A.vu(v.typeUniverse,a,!1)},
fx(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fx(a1,s,a3,a4)
if(r===s)return a2
return A.Ba(a1,r,!0)
case 7:s=a2.x
r=A.fx(a1,s,a3,a4)
if(r===s)return a2
return A.B9(a1,r,!0)
case 8:q=a2.y
p=A.hL(a1,q,a3,a4)
if(p===q)return a2
return A.ji(a1,a2.x,p)
case 9:o=a2.x
n=A.fx(a1,o,a3,a4)
m=a2.y
l=A.hL(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.yu(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hL(a1,j,a3,a4)
if(i===j)return a2
return A.Bb(a1,k,i)
case 11:h=a2.x
g=A.fx(a1,h,a3,a4)
f=a2.y
e=A.I6(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.B8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hL(a1,d,a3,a4)
o=a2.x
n=A.fx(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.yv(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.k_("Attempted to substitute unexpected RTI kind "+a0))}},
hL(a,b,c,d){var s,r,q,p,o=b.length,n=A.vA(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fx(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
I7(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.vA(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fx(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
I6(a,b,c,d){var s,r=b.a,q=A.hL(a,r,c,d),p=b.b,o=A.hL(a,p,c,d),n=b.c,m=A.I7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mm()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
zi(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.IN(s)
return a.$S()}return null},
IR(a,b){var s
if(A.Az(b))if(a instanceof A.e8){s=A.zi(a)
if(s!=null)return s}return A.cf(a)},
cf(a){if(a instanceof A.J)return A.o(a)
if(Array.isArray(a))return A.z(a)
return A.yQ(J.eF(a))},
z(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.yQ(a)},
yQ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.He(a,s)},
He(a,b){var s=a instanceof A.e8?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.G9(v.typeUniverse,s.name)
b.$ccache=r
return r},
IN(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.vu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
zj(a){return A.dh(A.o(a))},
zc(a){var s
if(a instanceof A.bL)return a.fA()
s=a instanceof A.e8?A.zi(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eK(a).a
if(Array.isArray(a))return A.z(a)
return A.cf(a)},
dh(a){var s=a.r
return s==null?a.r=new A.mO(a):s},
IL(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jk(v.typeUniverse,A.zc(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.Bd(v.typeUniverse,s,A.zc(q[r]))}return A.jk(v.typeUniverse,s,a)},
cu(a){return A.dh(A.vu(v.typeUniverse,a,!1))},
Hd(a){var s=this
s.b=A.I1(s)
return s.b(a)},
I1(a){var s,r,q,p,o
if(a===t.K)return A.Hn
if(A.fz(a))return A.Ht
s=a.w
if(s===6)return A.H5
if(s===1)return A.BS
if(s===7)return A.Hi
r=A.I_(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fz)){a.f="$i"+q
if(q==="K")return A.Hl
if(a===t.m)return A.Hk
return A.Hs}}else if(s===10){p=A.ID(a.x,a.y)
o=p==null?A.BS:p
return o==null?A.fv(o):o}return A.H3},
I_(a){if(a.w===8){if(a===t.S)return A.aT
if(a===t.i||a===t.o)return A.Hm
if(a===t.N)return A.Hr
if(a===t.y)return A.bC}return null},
Hc(a){var s=this,r=A.H2
if(A.fz(s))r=A.Gy
else if(s===t.K)r=A.fv
else if(A.hQ(s)){r=A.H4
if(s===t.lo)r=A.yC
else if(s===t.dR)r=A.al
else if(s===t.k7)r=A.Bx
else if(s===t.s7)r=A.yD
else if(s===t.u6)r=A.By
else if(s===t.gt)r=A.L}else if(s===t.S)r=A.h
else if(s===t.N)r=A.q
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a7
else if(s===t.i)r=A.b1
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
H3(a){var s=this
if(a==null)return A.hQ(s)
return A.Cx(v.typeUniverse,A.IR(a,s),s)},
H5(a){if(a==null)return!0
return this.x.b(a)},
Hs(a){var s,r=this
if(a==null)return A.hQ(r)
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.eF(a)[s]},
Hl(a){var s,r=this
if(a==null)return A.hQ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.eF(a)[s]},
Hk(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.J)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
BR(a){if(typeof a=="object"){if(a instanceof A.J)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
H2(a){var s=this
if(a==null){if(A.hQ(s))return a}else if(s.b(a))return a
throw A.aP(A.BE(a,s),new Error())},
H4(a){var s=this
if(a==null||s.b(a))return a
throw A.aP(A.BE(a,s),new Error())},
BE(a,b){return new A.hw("TypeError: "+A.B2(a,A.bM(b,null)))},
Cn(a,b,c,d){if(A.Cx(v.typeUniverse,a,b))return a
throw A.aP(A.G1("The type argument '"+A.bM(a,null)+"' is not a subtype of the type variable bound '"+A.bM(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
B2(a,b){return A.kr(a)+": type '"+A.bM(A.zc(a),null)+"' is not a subtype of type '"+b+"'"},
G1(a){return new A.hw("TypeError: "+a)},
cr(a,b){return new A.hw("TypeError: "+A.B2(a,b))},
Hi(a){var s=this
return s.x.b(a)||A.yj(v.typeUniverse,s).b(a)},
Hn(a){return a!=null},
fv(a){if(a!=null)return a
throw A.aP(A.cr(a,"Object"),new Error())},
Ht(a){return!0},
Gy(a){return a},
BS(a){return!1},
bC(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aP(A.cr(a,"bool"),new Error())},
Bx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aP(A.cr(a,"bool?"),new Error())},
b1(a){if(typeof a=="number")return a
throw A.aP(A.cr(a,"double"),new Error())},
By(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.cr(a,"double?"),new Error())},
aT(a){return typeof a=="number"&&Math.floor(a)===a},
h(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aP(A.cr(a,"int"),new Error())},
yC(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aP(A.cr(a,"int?"),new Error())},
Hm(a){return typeof a=="number"},
a7(a){if(typeof a=="number")return a
throw A.aP(A.cr(a,"num"),new Error())},
yD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.cr(a,"num?"),new Error())},
Hr(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.aP(A.cr(a,"String"),new Error())},
al(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aP(A.cr(a,"String?"),new Error())},
b(a){if(A.BR(a))return a
throw A.aP(A.cr(a,"JSObject"),new Error())},
L(a){if(a==null)return a
if(A.BR(a))return a
throw A.aP(A.cr(a,"JSObject?"),new Error())},
C9(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bM(a[q],b)
return s},
HO(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.C9(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bM(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
BI(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bM(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bM(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bM(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bM(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bM(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bM(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bM(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bM(a.x,b)+">"
if(l===8){p=A.I9(a.x)
o=a.y
return o.length>0?p+("<"+A.C9(o,b)+">"):p}if(l===10)return A.HO(a,b)
if(l===11)return A.BI(a,b,null)
if(l===12)return A.BI(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
I9(a){var s=A.CI(a)
if(s!=null)return s
return"minified:"+a},
Ga(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
G9(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.vu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jj(a,5,"#")
q=A.vA(s)
for(p=0;p<s;++p)q[p]=r
o=A.ji(a,b,q)
n[b]=o
return o}else return m},
G8(a,b){return A.Bl(a.tR,b)},
G7(a,b){return A.Bl(a.eT,b)},
vu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Bc(a,null,b,!1)
r.set(b,s)
return s},
jk(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Bc(a,b,c,!0)
q.set(c,r)
return r},
Bd(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.yu(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Bc(a,b,c,d){return A.FZ(A.FT(a,b,c,d))},
ez(a,b){b.a=A.Hc
b.b=A.Hd
return b},
jj(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cJ(null,null)
s.w=b
s.as=c
r=A.ez(a,s)
a.eC.set(c,r)
return r},
Ba(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.G5(a,b,r,c)
a.eC.set(r,s)
return s},
G5(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fz(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hQ(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cJ(null,null)
q.w=6
q.x=b
q.as=c
return A.ez(a,q)},
B9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.G3(a,b,r,c)
a.eC.set(r,s)
return s},
G3(a,b,c,d){var s,r
if(d){s=b.w
if(A.fz(b)||b===t.K)return b
else if(s===1)return A.ji(a,"aQ",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cJ(null,null)
r.w=7
r.x=b
r.as=c
return A.ez(a,r)},
G6(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cJ(null,null)
s.w=13
s.x=b
s.as=q
r=A.ez(a,s)
a.eC.set(q,r)
return r},
jh(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
G2(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ji(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jh(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cJ(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ez(a,r)
a.eC.set(p,q)
return q},
yu(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jh(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cJ(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ez(a,o)
a.eC.set(q,n)
return n},
Bb(a,b,c){var s,r,q="+"+(b+"("+A.jh(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cJ(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ez(a,s)
a.eC.set(q,r)
return r},
B8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jh(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jh(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.G2(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cJ(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ez(a,p)
a.eC.set(r,o)
return o},
yv(a,b,c,d){var s,r=b.as+("<"+A.jh(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.G4(a,b,c,r,d)
a.eC.set(r,s)
return s},
G4(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.vA(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fx(a,b,r,0)
m=A.hL(a,c,r,0)
return A.yv(a,n,m,c!==m)}}l=new A.cJ(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ez(a,l)},
FT(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
FZ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.FV(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.B5(a,r,l,k,!1)
else if(q===46)r=A.B5(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fr(a.u,a.e,k.pop()))
break
case 94:k.push(A.G6(a.u,k.pop()))
break
case 35:k.push(A.jj(a.u,5,"#"))
break
case 64:k.push(A.jj(a.u,2,"@"))
break
case 126:k.push(A.jj(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.FX(a,k)
break
case 38:A.FW(a,k)
break
case 63:p=a.u
k.push(A.Ba(p,A.fr(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.B9(p,A.fr(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.FU(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.B6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.G_(a.u,a.e,o)
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
return A.fr(a.u,a.e,m)},
FV(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
B5(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ga(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.F0(o)+'"')
d.push(A.jk(s,o,n))}else d.push(p)
return m},
FX(a,b){var s,r=a.u,q=A.B4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ji(r,p,q))
else{s=A.fr(r,a.e,p)
switch(s.w){case 11:b.push(A.yv(r,s,q,a.n))
break
default:b.push(A.yu(r,s,q))
break}}},
FU(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.B4(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fr(p,a.e,o)
q=new A.mm()
q.a=s
q.b=n
q.c=m
b.push(A.B8(p,r,q))
return
case-4:b.push(A.Bb(p,b.pop(),s))
return
default:throw A.a(A.k_("Unexpected state under `()`: "+A.w(o)))}},
FW(a,b){var s=b.pop()
if(0===s){b.push(A.jj(a.u,1,"0&"))
return}if(1===s){b.push(A.jj(a.u,4,"1&"))
return}throw A.a(A.k_("Unexpected extended operation "+A.w(s)))},
B4(a,b){var s=b.splice(a.p)
A.B6(a.u,a.e,s)
a.p=b.pop()
return s},
fr(a,b,c){if(typeof c=="string")return A.ji(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.FY(a,b,c)}else return c},
B6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fr(a,b,c[s])},
G_(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fr(a,b,c[s])},
FY(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.k_("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.k_("Bad index "+c+" for "+b.q(0)))},
Cx(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b2(a,b,null,c,null)
r.set(c,s)}return s},
b2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fz(d))return!0
s=b.w
if(s===4)return!0
if(A.fz(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b2(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.b2(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.b2(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b2(a,b.x,c,d,e))return!1
return A.b2(a,A.yj(a,b),c,d,e)}if(s===6)return A.b2(a,p,c,d,e)&&A.b2(a,b.x,c,d,e)
if(q===7){if(A.b2(a,b,c,d.x,e))return!0
return A.b2(a,b,c,A.yj(a,d),e)}if(q===6)return A.b2(a,b,c,p,e)||A.b2(a,b,c,d.x,e)
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
if(!A.b2(a,j,c,i,e)||!A.b2(a,i,e,j,c))return!1}return A.BQ(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.BQ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Hj(a,b,c,d,e)}if(o&&q===10)return A.Ho(a,b,c,d,e)
return!1},
BQ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b2(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b2(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b2(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b2(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b2(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Hj(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jk(a,b,r[o])
return A.Bv(a,p,null,c,d.y,e)}return A.Bv(a,b.y,null,c,d.y,e)},
Bv(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b2(a,b[s],d,e[s],f))return!1
return!0},
Ho(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b2(a,r[s],c,q[s],e))return!1
return!0},
hQ(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fz(a))if(s!==6)r=s===7&&A.hQ(a.x)
return r},
fz(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Bl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
vA(a){return a>0?new Array(a):v.typeUniverse.sEA},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mm:function mm(){this.c=this.b=this.a=null},
mO:function mO(a){this.a=a},
mk:function mk(){},
hw:function hw(a){this.a=a},
FL(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ip()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hO(new A.uG(s),1)).observe(r,{childList:true})
return new A.uF(s,r,q)}else if(self.setImmediate!=null)return A.Iq()
return A.Ir()},
FM(a){self.scheduleImmediate(A.hO(new A.uH(t.O.a(a)),0))},
FN(a){self.setImmediate(A.hO(new A.uI(t.O.a(a)),0))},
FO(a){A.yn(B.fy,t.O.a(a))},
yn(a,b){return A.G0(a.a/1000|0,b)},
G0(a,b){var s=new A.vr()
s.jv(a,b)
return s},
aM(a){return new A.ma(new A.ar($.aq,a.i("ar<0>")),a.i("ma<0>"))},
aL(a,b){a.$2(0,null)
b.b=!0
return b.a},
a5(a,b){A.GB(a,b)},
aK(a,b){b.dV(a)},
aJ(a,b){b.dW(A.ai(a),A.cO(a))},
GB(a,b){var s,r,q=new A.vF(b),p=new A.vG(b)
if(a instanceof A.ar)a.h5(q,p,t.z)
else{s=t.z
if(a instanceof A.ar)a.ez(q,p,s)
else{r=new A.ar($.aq,t.hR)
r.a=8
r.c=a
r.h5(q,p,s)}}},
aN(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aq.ic(new A.x_(s),t.H,t.S,t.z)},
B7(a,b,c){return 0},
nz(a){var s
if(t.yt.b(a)){s=a.gbX()
if(s!=null)return s}return B.az},
zX(a){var s
a.a(null)
s=new A.ar($.aq,a.i("ar<0>"))
s.du(null)
return s},
E5(a,b,c){var s=new A.ar($.aq,c.i("ar<0>"))
A.Ff(a,new A.p8(b,s,c))
return s},
p9(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ar($.aq,b.i("ar<K<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pb(i,h,g,f)
try{for(n=J.P(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.ez(new A.pa(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cA(A.c([],b.i("u<0>")))
return n}i.a=A.d_(n,null,!1,b.i("0?"))}catch(l){p=A.ai(l)
o=A.cO(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.yR(m,k)
m=new A.bf(m,k==null?A.nz(m):k)
n.cw(m)
return n}else{i.d=p
i.c=o}}return f},
yR(a,b){if($.aq===B.y)return null
return null},
Hf(a,b){if($.aq!==B.y)A.yR(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbX()
if(b==null){A.As(a,B.az)
b=B.az}}else b=B.az
else if(t.yt.b(a))A.As(a,b)
return new A.bf(a,b)},
FP(a,b){var s=new A.ar($.aq,b.i("ar<0>"))
b.a(a)
s.a=8
s.c=a
return s},
uQ(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Fa()
b.cw(new A.bf(new A.cy(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fL(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c2()
b.cz(o.a)
A.fm(b,p)
return}b.a^=2
A.n7(null,null,b.b,t.O.a(new A.uR(o,b)))},
fm(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.z4(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fm(d.a,c)
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
A.z4(j.a,j.b)
return}g=$.aq
if(g!==h)$.aq=h
else g=null
c=c.c
if((c&15)===8)new A.uV(q,d,n).$0()
else if(o){if((c&1)!==0)new A.uU(q,j).$0()}else if((c&2)!==0)new A.uT(d,q).$0()
if(g!=null)$.aq=g
c=q.c
if(c instanceof A.ar){p=q.a.$ti
p=p.i("aQ<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cI(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.uQ(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cI(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
C3(a,b){var s
if(t.nW.b(a))return b.ic(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.a(A.a3(a,"onError",u.c))},
HD(){var s,r
for(s=$.hH;s!=null;s=$.hH){$.jF=null
r=s.b
$.hH=r
if(r==null)$.jE=null
s.a.$0()}},
I4(){$.yS=!0
try{A.HD()}finally{$.jF=null
$.yS=!1
if($.hH!=null)$.zw().$1(A.Cl())}},
Cd(a){var s=new A.mb(a),r=$.jE
if(r==null){$.hH=$.jE=s
if(!$.yS)$.zw().$1(A.Cl())}else $.jE=r.b=s},
HX(a){var s,r,q,p=$.hH
if(p==null){A.Cd(a)
$.jF=$.jE
return}s=new A.mb(a)
r=$.jF
if(r==null){s.b=p
$.hH=$.jF=s}else{q=r.b
s.b=q
$.jF=r.b=s
if(q==null)$.jE=s}},
Jt(a,b){A.fy(a,"stream",t.K)
return new A.mJ(b.i("mJ<0>"))},
Ff(a,b){var s=$.aq
if(s===B.y)return A.yn(a,t.O.a(b))
return A.yn(a,t.O.a(s.hl(b)))},
z4(a,b){A.HX(new A.wN(a,b))},
C8(a,b,c,d,e){var s,r=$.aq
if(r===c)return d.$0()
$.aq=c
s=r
try{r=d.$0()
return r}finally{$.aq=s}},
HU(a,b,c,d,e,f,g){var s,r=$.aq
if(r===c)return d.$1(e)
$.aq=c
s=r
try{r=d.$1(e)
return r}finally{$.aq=s}},
HT(a,b,c,d,e,f,g,h,i){var s,r=$.aq
if(r===c)return d.$2(e,f)
$.aq=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aq=s}},
n7(a,b,c,d){t.O.a(d)
if(B.y!==c){d=c.hl(d)
d=d}A.Cd(d)},
uG:function uG(a){this.a=a},
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
vr:function vr(){},
vs:function vs(a,b){this.a=a
this.b=b},
ma:function ma(a,b){this.a=a
this.b=!1
this.$ti=b},
vF:function vF(a){this.a=a},
vG:function vG(a){this.a=a},
x_:function x_(a){this.a=a},
cb:function cb(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bB:function bB(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b){this.a=a
this.b=b},
p8:function p8(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pa:function pa(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
me:function me(){},
iX:function iX(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ar:function ar(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
uN:function uN(a,b){this.a=a
this.b=b},
uS:function uS(a,b){this.a=a
this.b=b},
uR:function uR(a,b){this.a=a
this.b=b},
uP:function uP(a,b){this.a=a
this.b=b},
uO:function uO(a,b){this.a=a
this.b=b},
uV:function uV(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(a,b){this.a=a
this.b=b},
uX:function uX(a){this.a=a},
uU:function uU(a,b){this.a=a
this.b=b},
uT:function uT(a,b){this.a=a
this.b=b},
mb:function mb(a){this.a=a
this.b=null},
mJ:function mJ(a){this.$ti=a},
jr:function jr(){},
mC:function mC(){},
vp:function vp(a,b){this.a=a
this.b=b},
wN:function wN(a,b){this.a=a
this.b=b},
B3(a,b){var s=a[b]
return s===a?null:s},
ys(a,b,c){if(c==null)a[b]=a
else a[b]=c},
yr(){var s=Object.create(null)
A.ys(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ae(a,b){return new A.cl(a.i("@<0>").N(b).i("cl<1,2>"))},
F(a,b,c){return b.i("@<0>").N(c).i("y9<1,2>").a(A.Cp(a,new A.cl(b.i("@<0>").N(c).i("cl<1,2>"))))},
m(a,b){return new A.cl(a.i("@<0>").N(b).i("cl<1,2>"))},
ya(a){return new A.cq(a.i("cq<0>"))},
Z(a){return new A.cq(a.i("cq<0>"))},
aG(a,b){return b.i("Af<0>").a(A.IM(a,new A.cq(b.i("cq<0>"))))},
yt(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fq(a,b,c){var s=new A.fp(a,b,c.i("fp<0>"))
s.c=a.e
return s},
bD(a,b){var s=J.P(a)
if(s.m())return s.gn()
return null},
aZ(a,b,c){var s=A.Ae(b,c)
a.aG(0,new A.qu(s,b,c))
return s},
h3(a,b,c){var s=A.Ae(b,c)
s.J(0,a)
return s},
h4(a,b){var s,r=A.ya(b)
for(s=J.P(a);s.m();)r.l(0,b.a(s.gn()))
return r},
eY(a,b){var s=A.ya(b)
s.J(0,a)
return s},
yc(a){var s,r
if(A.zl(a))return"{...}"
s=new A.bx("")
try{r={}
B.a.l($.ce,a)
s.a+="{"
r.a=!0
a.aG(0,new A.qx(r,s))
s.a+="}"}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Gb(){throw A.a(A.bm("Cannot change an unmodifiable set"))},
j1:function j1(){},
uZ:function uZ(a){this.a=a},
j3:function j3(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fn:function fn(a,b){this.a=a
this.$ti=b},
j2:function j2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cq:function cq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ms:function ms(a){this.a=a
this.c=this.b=null},
fp:function fp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(){},
aa:function aa(){},
qw:function qw(a){this.a=a},
qx:function qx(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.$ti=b},
j5:function j5(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jl:function jl(){},
h5:function h5(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
d5:function d5(){},
jf:function jf(){},
mP:function mP(){},
ho:function ho(a,b){this.a=a
this.$ti=b},
hx:function hx(){},
jm:function jm(){},
HH(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ai(r)
q=A.N(String(s),null,null)
throw A.a(q)}q=A.w6(p)
return q},
w6(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mq(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.w6(a[s])
return a},
Gs(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.D0()
else s=new Uint8Array(o)
for(r=J.aO(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Gr(a,b,c,d){var s=a?$.D_():$.CZ()
if(s==null)return null
if(0===c&&d===b.length)return A.Bk(s,b)
return A.Bk(s,b.subarray(c,d))},
Bk(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
zJ(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.a(A.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.N("Invalid base64 padding, more than two '=' characters",a,b))},
Ab(a,b,c){return new A.ih(a,b)},
GR(a){return a.B()},
FQ(a,b){return new A.v1(a,[],A.IC())},
FR(a,b,c){var s,r=new A.bx(""),q=A.FQ(r,b)
q.dh(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Gt(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mq:function mq(a,b){this.a=a
this.b=b
this.c=null},
v0:function v0(a){this.a=a},
mr:function mr(a){this.a=a},
vy:function vy(){},
vx:function vx(){},
jX:function jX(){},
vt:function vt(){},
jY:function jY(a,b){this.a=a
this.b=b},
k4:function k4(){},
ob:function ob(){},
e9:function e9(){},
kf:function kf(){},
kq:function kq(){},
ih:function ih(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b},
kT:function kT(){},
ql:function ql(a){this.b=a},
qk:function qk(a){this.a=a},
v2:function v2(){},
v3:function v3(a,b){this.a=a
this.b=b},
v1:function v1(a,b,c){this.c=a
this.a=b
this.b=c},
lR:function lR(){},
ud:function ud(){},
vz:function vz(a){this.b=0
this.c=a},
uc:function uc(a){this.a=a},
vw:function vw(a){this.a=a
this.b=16
this.c=0},
Cw(a){var s=A.dC(a,null)
if(s!=null)return s
throw A.a(A.N(a,null,null))},
na(a){var s=A.f2(a)
if(s!=null)return s
throw A.a(A.N("Invalid double",a,null))},
E0(a,b){a=A.aP(a,new Error())
if(a==null)a=A.fv(a)
a.stack=b.q(0)
throw a},
d_(a,b,c,d){var s,r=c?J.A5(a,d):J.A4(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aA(a,b,c){var s,r=A.c([],c.i("u<0>"))
for(s=J.P(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
I(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("u<0>"))
s=A.c([],b.i("u<0>"))
for(r=J.P(a);r.m();)B.a.l(s,r.gn())
return s},
ac(a,b){var s=A.aA(a,!1,b)
s.$flags=3
return s},
ym(a,b,c){var s,r
A.lo(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.a(A.b_(c,b,null,"end",null))
if(s===0)return""}r=A.Fd(a,b,c)
return r},
Fd(a,b,c){var s=a.length
if(b>=s)return""
return A.ES(a,b,c==null||c>s?s:c)},
iC(a){return new A.ie(a,A.A9(a,!1,!0,!1,!1,""))},
yl(a,b,c){var s=J.P(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
eq(){var s,r,q=A.EJ()
if(q==null)throw A.a(A.bm("'Uri.base' is not supported"))
s=$.AK
if(s!=null&&q===$.AJ)return s
r=A.Fk(q)
$.AK=r
$.AJ=q
return r},
Fa(){return A.cO(new Error())},
DH(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
zQ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
kh(a){if(a>=10)return""+a
return"0"+a},
E_(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.a(A.a3(b,"name","No enum value with that name"))},
kr(a){if(typeof a=="number"||A.bC(a)||a==null)return J.bY(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ar(a)},
E1(a,b){A.fy(a,"error",t.K)
A.fy(b,"stackTrace",t.l)
A.E0(a,b)},
k_(a){return new A.jZ(a)},
r(a,b){return new A.cy(!1,null,b,a)},
a3(a,b,c){return new A.cy(!0,a,b,c)},
At(a){var s=null
return new A.hc(s,s,!1,s,s,a)},
Au(a,b){return new A.hc(null,null,!0,a,b,"Value not in range")},
b_(a,b,c,d,e){return new A.hc(b,c,!0,a,d,"Invalid value")},
f4(a,b,c){if(0>a||a>c)throw A.a(A.b_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b_(b,a,c,"end",null))
return b}return c},
lo(a,b){if(a<0)throw A.a(A.b_(a,0,null,b,null))
return a},
q0(a,b,c,d){return new A.kL(b,!0,a,d,"Index out of range")},
bm(a){return new A.iQ(a)},
AH(a){return new A.lM(a)},
k(a){return new A.hk(a)},
ay(a){return new A.kc(a)},
N(a,b,c){return new A.A(a,b,c)},
Em(a,b,c){var s,r
if(A.zl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.ce,a)
try{A.Hu(a,s)}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}r=A.yl(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
y5(a,b,c){var s,r
if(A.zl(a))return b+"..."+c
s=new A.bx(b)
B.a.l($.ce,a)
try{r=s
r.a=A.yl(r.a,a,", ")}finally{if(0>=$.ce.length)return A.d($.ce,-1)
$.ce.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Hu(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.w(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
yd(a,b,c){var s=A.m(b,c)
s.lo(a)
return s},
d1(a,b,c,d,e,f){var s
if(B.h===c){s=J.aF(a)
b=J.aF(b)
return A.lJ(A.b6(A.b6($.jR(),s),b))}if(B.h===d){s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
return A.lJ(A.b6(A.b6(A.b6($.jR(),s),b),c))}if(B.h===e){s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
d=J.aF(d)
return A.lJ(A.b6(A.b6(A.b6(A.b6($.jR(),s),b),c),d))}if(B.h===f){s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
d=J.aF(d)
e=J.aF(e)
return A.lJ(A.b6(A.b6(A.b6(A.b6(A.b6($.jR(),s),b),c),d),e))}s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
d=J.aF(d)
e=J.aF(e)
f=J.aF(f)
f=A.lJ(A.b6(A.b6(A.b6(A.b6(A.b6(A.b6($.jR(),s),b),c),d),e),f))
return f},
f9(a,b){return new A.ho(A.eY(a,b),b.i("ho<0>"))},
Fk(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.AI(a4<a4?B.c.H(a5,0,a4):a5,5,a3).gim()
else if(s===32)return A.AI(B.c.H(a5,5,a4),0,a3).gim()}r=A.d_(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.Cc(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.Cc(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.am(a5,"\\",n))if(p>0)h=B.c.am(a5,"\\",p-1)||B.c.am(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.am(a5,"..",n)))h=m>n+2&&B.c.am(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.am(a5,"file",0)){if(p<=0){if(!B.c.am(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.H(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.bT(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.am(a5,"http",0)){if(i&&o+3===n&&B.c.am(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.bT(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.am(a5,"https",0)){if(i&&o+4===n&&B.c.am(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.bT(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.mG(a4<a5.length?B.c.H(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Gl(a5,0,q)
else{if(q===0)A.hy(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Gm(a5,c,p-1):""
a=A.Gh(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dC(B.c.H(a5,i,n),a3)
d=A.Gj(a0==null?A.f(A.N("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Gi(a5,n,m,a3,j,a!=null)
a2=m<l?A.Gk(a5,m+1,l,a3):a3
return A.Gc(j,b,a,d,a1,a2,l<a4?A.Gg(a5,l+1,a4):a3)},
AM(a){var s=t.N
return B.a.bn(A.c(a.split("&"),t.s),A.m(s,s),new A.ub(B.cq),t.G)},
lQ(a,b,c){throw A.a(A.N("Illegal IPv4 address, "+a,b,c))},
Fh(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lQ("each part must be in the range 0..255",a,r)}A.lQ("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lQ(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b3(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lQ(j,a,q)
p=l}A.lQ("IPv4 address should contain exactly 4 parts",a,q)},
Fi(a,b,c){var s
if(b===c)throw A.a(A.N("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Fj(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.AL(a,b,c)
return!0},
Fj(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
AL(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.ua(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Fh(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dR(l,8)
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
B.R.iM(s,a0,16,s,a)
B.R.mU(s,a,a0,0)}}return s},
Gc(a,b,c,d,e,f,g){return new A.jn(a,b,c,d,e,f,g)},
Be(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hy(a,b,c){throw A.a(A.N(c,a,b))},
Gj(a,b){var s=A.Be(b)
if(a===s)return null
return a},
Gh(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hy(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Ge(a,q,r)
if(o<r){n=o+1
p=A.Bj(a,B.c.am(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Fi(a,q,o)
l=B.c.H(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.d_(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Bj(a,B.c.am(a,"25",n)?o+3:n,c,"%25")}else p=""
A.AL(a,b,o)
return"["+B.c.H(a,b,o)+p+"]"}}return A.Go(a,b,c)},
Ge(a,b,c){var s=B.c.d_(a,"%",b)
return s>=b&&s<c?s:c},
Bj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bx(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.yx(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bx("")
l=h.a+=B.c.H(a,q,r)
if(m)n=B.c.H(a,r,r+3)
else if(n==="%")A.hy(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bx("")
if(q<r){h.a+=B.c.H(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.H(a,q,r)
if(h==null){h=new A.bx("")
m=h}else m=h
m.a+=i
l=A.yw(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.H(a,b,c)
if(q<c){i=B.c.H(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Go(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.yx(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bx("")
k=B.c.H(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.H(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bx("")
if(q<r){p.a+=B.c.H(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hy(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.H(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bx("")
l=p}else l=p
l.a+=k
j=A.yw(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.H(a,b,c)
if(q<c){k=B.c.H(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Gl(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.Bg(a.charCodeAt(b)))A.hy(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hy(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.H(a,b,c)
return A.Gd(q?a.toLowerCase():a)},
Gd(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gm(a,b,c){return A.jo(a,b,c,16,!1,!1)},
Gi(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jo(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.T(q,"/"))q="/"+q
return A.Gn(q,e,f)},
Gn(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.T(a,"/")&&!B.c.T(a,"\\"))return A.Gp(a,!s||c)
return A.Gq(a)},
Gk(a,b,c,d){return A.jo(a,b,c,256,!0,!1)},
Gg(a,b,c){return A.jo(a,b,c,256,!0,!1)},
yx(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.xc(r)
o=A.xc(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aw(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.H(a,b,b+3).toUpperCase()
return null},
yw(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.l4(a,6*p)&63|q
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
o+=3}}return A.ym(s,0,null)},
jo(a,b,c,d,e,f){var s=A.Bi(a,b,c,d,e,f)
return s==null?B.c.H(a,b,c):s},
Bi(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.yx(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hy(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.yw(n)}if(o==null){o=new A.bx("")
k=o}else k=o
k.a=(k.a+=B.c.H(a,p,q))+l
if(typeof m!=="number")return A.xd(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.H(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Bh(a){if(B.c.T(a,"."))return!0
return B.c.bz(a,"/.")!==-1},
Gq(a){var s,r,q,p,o,n,m
if(!A.Bh(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.U(s,"/")},
Gp(a,b){var s,r,q,p,o,n
if(!A.Bh(a))return!b?A.Bf(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga2(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.Bf(s[0]))}return B.a.U(s,"/")},
Bf(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.Bg(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.H(a,0,s)+"%3A"+B.c.aO(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Gf(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.r("Invalid URL encoding",null))}}return r},
yy(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cq===d)return B.c.H(a,b,c)
else p=new A.dm(B.c.H(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.r("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.a(A.r("Truncated URI",null))
B.a.l(p,A.Gf(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.nt.bw(p)},
Bg(a){var s=a|32
return 97<=s&&s<=122},
AI(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.N(k,a,r))}}if(q<0&&r>b)throw A.a(A.N(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.ga2(j)
if(p!==44||r!==n+7||!B.c.am(a,"base64",n+1))throw A.a(A.N("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eX.nq(a,m,s)
else{l=A.Bi(a,m,s,256,!0,!1)
if(l!=null)a=B.c.bT(a,m,s,l)}return new A.u9(a,j,c)},
Cc(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a},
mj:function mj(){},
at:function at(){},
jZ:function jZ(a){this.a=a},
dJ:function dJ(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kL:function kL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(a){this.a=a},
lM:function lM(a){this.a=a},
hk:function hk(a){this.a=a},
kc:function kc(a){this.a=a},
l9:function l9(){},
iM:function iM(){},
uL:function uL(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
av:function av(){},
J:function J(){},
mM:function mM(){},
tR:function tR(){this.b=this.a=0},
bx:function bx(a){this.a=a},
ub:function ub(a){this.a=a},
ua:function ua(a){this.a=a},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
u9:function u9(a,b,c){this.a=a
this.b=b
this.c=c},
mG:function mG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
mf:function mf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
r2:function r2(a){this.a=a},
BJ(a){var s
if(typeof a=="function")throw A.a(A.r("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.GE,a)
s[$.xY()]=a
return s},
W(a){var s
if(typeof a=="function")throw A.a(A.r("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.GF,a)
s[$.xY()]=a
return s},
GE(a){return t.BO.a(a).$0()},
GF(a,b,c){t.BO.a(a)
if(A.h(c)>=1)return a.$1(b)
return a.$0()},
nc(a,b,c){return c.a(a[b])},
BK(a,b){return a[b]},
aU(a,b,c,d){return d.a(a[b].apply(a,c))},
aE(a,b){var s=new A.ar($.aq,b.i("ar<0>")),r=new A.iX(s,b.i("iX<0>"))
a.then(A.hO(new A.xN(r,b),1),A.hO(new A.xO(r),1))
return s},
BV(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hP(a){if(A.BV(a))return a
return new A.x5(new A.j3(t.BT)).$1(a)},
xN:function xN(a,b){this.a=a
this.b=b},
xO:function xO(a){this.a=a},
x5:function x5(a){this.a=a},
ET(a){var s
if(a==null)s=B.b1
else{s=new A.ew()
s.bY(a)}return s},
mp:function mp(){},
ew:function ew(){this.b=this.a=0},
km:function km(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
F8(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aA(b3,!0,b1)
B.a.l(b2,128)
while(B.d.S(b2.length,64)!==56)B.a.l(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.l(b2,B.d.iX(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.d_(64,0,!1,b1)
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
B.a.k(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.jx[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.G(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.tD()),t.dH).ni(0)},
tD:function tD(){},
lS:function lS(a,b){this.a=a
this.b=b},
Ew(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.a(A.a3(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.t)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.k("part "+r.a+" has no "+b+" payload")
throw A.a(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.k("model package payload is missing: "+k)):j
J.eJ(s,a.mu(new Uint8Array(A.a1(p))))}return new A.qM(a,s)}catch(i){for(h=s,n=A.z(h).i("bG<1>"),h=new A.bG(h,n),h=new A.an(h,h.gt(0),n.i("an<Y.E>")),n=n.i("Y.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aI(o)}throw i}},
qM:function qM(a,b){this.a=a
this.b=b
this.c=!1},
l_:function l_(a){this.e=a},
qX:function qX(a,b){this.a=a
this.b=b},
qO:function qO(){},
qP:function qP(){},
qQ:function qQ(){},
Ex(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.a9(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.a(B.hI)
s=a.h(0,"parts")
if(!t.j.b(s)||J.jT(s))throw A.a(B.hs)
r=A.wL(a,"assetId")
q=A.wL(a,"packageHash")
p=A.wL(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.P(s),m=t.P;n.m();)o.push(A.Ey(m.a(n.gn())))
n=A.zb(a.h(0,"materials"))
m=A.zb(a.h(0,"textures"))
l=A.zb(a.h(0,"lods"))
k=A.BW(a.h(0,"combinedBounds"))
j=A.I0(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bq(0,new A.qS(),h,h)
i=h}return new A.qR(r,q,p,o,n,m,l,k,j,i==null?B.aH:i)},
Ey(a){var s,r,q=A.wL(a,"id"),p=A.yC(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.fW)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bq(0,new A.qW(),r,r)
s=r}return new A.f_(q,p,s==null?B.aH:s)},
wL(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.a(A.N(b+" is required",null,null))
return s},
Hp(a){if(a.length===0||B.c.T(a,"/")||B.c.p(a,"\\"))return!1
return B.a.a7(A.c(a.split("/"),t.s),new A.wA())},
zb(a){var s,r
if(a==null)return B.m
if(!t.j.b(a)||J.jS(a,new A.wT()))throw A.a(B.h7)
s=A.c([],t.s)
for(r=J.P(a);r.m();)s.push(A.q(r.gn()))
return s},
BW(a){var s,r
if(a==null)return B.bo
if(!t.j.b(a)||J.jS(a,new A.wE()))throw A.a(B.i8)
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a7(r.gn()))
return s},
I0(a){var s,r,q,p
if(a==null)return B.kN
if(!t.f.b(a))throw A.a(B.hn)
if(a.ga_().O(0,new A.wR()))throw A.a(B.hJ)
s=A.m(t.N,t.dd)
for(r=a.gK(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p=="string")s.k(0,p,A.BW(q.b))}return s},
qR:function qR(a,b,c,d,e,f,g,h,i,j){var _=this
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
qS:function qS(){},
qU:function qU(){},
qV:function qV(){},
qT:function qT(){},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(){},
wA:function wA(){},
wT:function wT(){},
wE:function wE(){},
wR:function wR(){},
CK(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.xW(m)
for(s=a.C(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.Z(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){o=s[q]
n=o.a
if(!p.l(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.L("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
Jd(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.xX(n),l=A.Z(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)l.J(0,s[q].c.gai())
for(s=A.fq(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.L(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bP(b,b.r,b.e,A.o(b).i("bP<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bm(o,".fbx")||B.c.bm(o,".obj")||B.c.bm(o,".mtl")||B.c.bm(o,".gltf")||B.c.bm(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
xW:function xW(a){this.a=a},
xX:function xX(a){this.a=a},
rE:function rE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
rF:function rF(){},
f3:function f3(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
op:function op(a,b){this.a=a
this.b=b
this.c=null},
fL:function fL(a,b){this.a=a
this.b=b},
oq:function oq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
os:function os(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
or:function or(){var _=this
_.c=_.b=_.a=null
_.d=0},
lf:function lf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
fI:function fI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kx:function kx(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ky:function ky(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eg(a,b){return new A.kI(a,b)},
dE:function dE(){},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=b},
J3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.jc(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.V(f,new A.xP())
s=A.c([],t.cv)
for(r=A.lH(f,0,A.fy(b,"count",t.S),t.mn),q=r.$ti,r=new A.an(r,r.gt(0),q.i("an<Y.E>")),q=q.i("Y.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bJ:function bJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
xP:function xP(){},
qz(a,b,c,d,e,f,g,h,i,j){return new A.cG(c,a,h,g,f,0,e,i,j,B.eo,b,!0)},
kY(a,b){if(!isFinite(b)||b<0||b>1)throw A.a(A.r("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
fD:function fD(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
Eu(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.r("MeshData.indices must be Uint16List or Uint32List, got "+J.eK(a).q(0),null))}return s},
cK:function cK(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
ue:function ue(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qF:function qF(){},
qG:function qG(){},
qH:function qH(){},
ki:function ki(){},
iu(a){var s,r=t.N,q=A.aG(["sceneColor","present"],r),p=a.a.b
if(p.p(0,"shadows"))q.J(0,A.aG(["shadowMap","sceneDepth"],r))
if(p.p(0,"ssao"))q.J(0,A.aG(["ssaoRaw","ssaoBlurred"],r))
if(p.p(0,"bloom"))q.J(0,A.aG(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.p(0,"dof"))q.J(0,A.aG(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.p(0,"grade"))q.l(0,"gradeOutput")
if(p.p(0,"ps1"))q.l(0,"ps1Output")
s=p.p(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.r4(A.f9(q,r),s)},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(){},
hf:function hf(a,b){this.a=a
this.b=b},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fS:function fS(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
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
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
f6:function f6(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c){this.a=a
this.b=b
this.d=c},
p5:function p5(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Es(a){var s,r,q
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=B.bz;s.m();){switch(s.d.a){case 0:q=B.bz
break
case 1:q=B.dp
break
case 2:q=B.dq
break
case 3:q=B.dr
break
default:q=null}if(A.Ai(q)>A.Ai(r))r=q}return r},
Ai(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Ci(a){return new A.bB(A.I8(a),t.EF)},
I8(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Ci(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.as("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eZ:function eZ(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b){this.a=a
this.b=b},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
qA:function qA(a){this.a=a},
qB:function qB(){},
Et(){return new A.kZ(new A.d3(new A.qE(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kZ:function kZ(a){this.a=a},
qE:function qE(){},
Cf(a){var s=4
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
case 3:s=A.f(A.bm("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
GL(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.Cf(o.a)===b)q+=o.c}return q},
Ev(a){return new A.qI(a,new A.d3(new A.qJ(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
Aj(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.r("MeshStore indices must be Uint16List or Uint32List",null))}return s},
lO:function lO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(){},
qK:function qK(){},
IA(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bC(B.d.eA(r,16),8,"0")+B.c.bC(B.d.eA(q,16),8,"0")},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a,b){this.b=a
this.c=b},
qN:function qN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h7:function h7(a,b,c,d,e,f,g,h,i){var _=this
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
dD(a,b){return new A.lm(a,b)},
Co(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.a(A.dD(B.lU,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jn[q])throw A.a(A.dD(B.lV,'expected "QMSH", got '+B.eW.mt(B.R.av(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.f4(0,null,B.d.bc(a.byteLength,p))
n=J.zC(B.R.gdU(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.a(A.dD(B.lW,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.mL.p(0,k)))throw A.a(A.dD(B.dG,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.a(A.dD(B.lX,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.S(j,3)!==0)throw A.a(A.dD(B.lZ,"vertexCount "+j+" is not a multiple of 3"))
h=J.y6(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.O(h,new A.x6()))throw A.a(A.dD(B.lY,"bounds contain a non-finite value: "+A.w(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.a(A.dD(B.dH,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.a9
break A}if(18===k){d=B.nK
break A}if(20===k){d=B.nJ
break A}d=A.f(A.dD(B.dG,"no vertex layout for stride "+k))}s=new A.bQ(d,g,null,new A.fC(new A.B(h[0],h[1],h[2]),new A.B(h[3],h[4],h[5])))
try{s.C()}catch(e){r=A.ai(e)
d=A.dD(B.dH,"mesh validation failed: "+A.w(r))
throw A.a(d)}return s},
cI:function cI(a,b){this.a=a
this.b=b},
lm:function lm(a,b){this.a=a
this.b=b},
x6:function x6(){},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
u0:function u0(a,b){this.a=a
this.b=b},
u1:function u1(a){this.a=a},
tZ:function tZ(a,b){this.a=a
this.b=b},
u_:function u_(){},
Fe(a){var s=new A.lL(a,new A.d3(new A.u2(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aY($.zu())
s.e=s.aY($.zr())
s.f=s.aY($.zs())
s.r=s.aY($.zq())
s.w=s.aY($.zt())
return s},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
lL:function lL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
u2:function u2(){},
u4:function u4(){},
u3:function u3(){},
Fp(a,b,c){var s,r,q,p
for(s=[new A.as("distance",b),new A.as("referenceDistance",c),new A.as("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.r(q.a+" must be finite: "+A.w(p),null))}if(b<0||c<=0||a<=0)throw A.a(A.r("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.A(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
Fq(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gag(0))A.f(A.r(c1+c5.q(0),c0))
if(!c3.gag(0))A.f(A.r(c2+c3.q(0),c0))
if(!isFinite(c4))A.f(A.r("rayLength must be finite: "+A.w(c4),c0))
if(!isFinite(c6))A.f(A.r("scatteringCoeff must be finite: "+A.w(c6),c0))
if(!isFinite(0.7))A.f(A.r("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.r("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbA()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.a(A.r("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.A,e=B.A,d=0,c=0;c<c7.length;c7.length===s||(0,A.t)(c7),++c){b=c7[c]
a=b.a
a0=!0
if(a.length!==0){a1=b.b
if(isFinite(a1.a)&&isFinite(a1.b)&&isFinite(a1.c)){a1=b.c
if(isFinite(a1.a)&&isFinite(a1.b)&&isFinite(a1.c)){a1=b.d
if(isFinite(a1)){a2=b.e
if(isFinite(a2)){a0=b.f
a0=!isFinite(a0)||a1<0||a2<=0||a0<=0}}}}}if(a0)A.f(A.r("invalid volumetric source "+a,c0))
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.Fp(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.r(c1+c5.q(0),c0))
if(!(n&&m&&l))A.f(A.r(c2+c3.q(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.r("lightPos must be finite: "+a.q(0),c0))
if(!isFinite(a8))A.f(A.r("lightIntensity must be finite: "+A.w(a8),c0))
if(k)A.f(A.r("rayDirection must be nonzero",c0))
if(o)A.f(A.r("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.r("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.gah()
a=a9.a
b0=a9.b
b1=a9.c
b2=a1*a+a3*b0+a5*b1
b3=B.b.A(b2,0,c4)
b4=a0-(r+a*b3)
b5=a2-(q+b0*b3)
b6=a4-(p+b1*b3)
b7=Math.sqrt(Math.max(0.0001,b4*b4+b5*b5+b6*b6))
b8=Math.atan(-b3/b7)
b9=Math.max(0,a8*c6/(12.566370614359172*b7)*(Math.atan((c4-b3)/b7)-b8)*(0.51/(12.566370614359172*Math.pow(1.49-1.4*(b2/Math.max(0.0001,Math.sqrt(a6))),1.5))))*a7
if(b9<=0)continue
a=b.c
f=new A.B(f.a+a.a*b9,f.b+a.b*b9,f.c+a.c*b9)
a6=b9/Math.max(1e-8,Math.sqrt(a6))
e=new A.B(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.us(f,e.gbA()<1e-8?B.A:e.gah(),d)},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
us:function us(a,b,c){this.a=a
this.b=b
this.c=c},
It(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.gF().y
if(o==null){B.a.l(j,new A.dx(p,A.c([p],r)))
continue}n=""+p.gF().a.a+":"+p.gF().b.a+":"+A.w(o)
m=i.h(0,n)
if(m==null){i.k(0,n,j.length)
B.a.l(j,new A.dx(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.k(0,n,l)
B.a.l(j,new A.dx(p,A.c([p],r)))}else B.a.l(k,p)}}return j},
dx:function dx(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
p0:function p0(){},
p1:function p1(a){this.a=a},
oZ:function oZ(a){this.a=a},
p_:function p_(a){this.a=a},
kw:function kw(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b
this.c=0},
FS(){return new A.hs()},
p4:function p4(a){this.a=a
this.b=null},
hs:function hs(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
yg(){return!0},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
r8:function r8(){},
r9:function r9(){},
ck:function ck(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
he:function he(a,b){this.a=a
this.b=b},
R:function R(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
lk:function lk(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bw:function bw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rG:function rG(){},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
rI:function rI(a,b){this.a=a
this.b=b},
rN:function rN(){},
rM:function rM(){},
rL:function rL(){},
rK:function rK(a){this.a=a},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(a,b){this.a=a
this.b=b},
EZ(a){return new A.iD(a,new A.d3(new A.rO(),A.c([],t.w_),A.c([],t.t),t.tc))},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b){this.a=a
this.b=b},
rO:function rO(){},
wp(a,b){return A.GW(a,b)},
GW(a,b){var s=0,r=A.aM(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wp=A.aN(function(c,a0){if(c===1)return A.aJ(a0,r)
for(;;)switch(s){case 0:a.c_()
if(a.at!=null)throw A.a(A.k("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.c5(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.c6(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.d7(b)
n=new A.lk(a.a,A.m(t.N,t.CH))
l=A.BF(a,n,b,o.a.b.a)
m=l.a
i.c6(p)
h=a.x
g=o
if(h.e)A.f(A.k("GPU resource adapter is disposed"))
h.fa(g)
f=h.c
h.b.c6(g.a)
h.c=g
h.d=null
if(f!=null)h.dE(f.b)
g.c=B.iz
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bN()
h=j
if(h!=null)h.bN()}catch(d){if(p.c===B.b4){h=t.AB.a(p)
i.fk(h)
i.a.he(h.a)
i.b.ew(h.b)
h.c=B.fr
i.c=null}i=o
if((i==null?null:i.c)===B.ai){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.k("GPU resource adapter is disposed"))
i.fa(h)
i.dE(h.b)
i.b.ew(h.a)
h.c=B.iA
i.d=null}i=m
if(i!=null)i.bN()
i=n
if(i!=null)i.bN()
throw d}case 1:return A.aK(q,r)}})
return A.aL($async$wp,r)},
BG(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.BF(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
BF(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.wn(a),j=new A.wo(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Iy(b,h,d,i,s.go5(),new A.w8(j),new A.w9(j),new A.wa(a),new A.wf(a),new A.wg(a),new A.wh(j),new A.wi(j),s.go7(),new A.wj(a),s.goc(),r.go9(),k,s.goe(),s.gog(),new A.wk(j,c),new A.wl(j),new A.wm(j),new A.wb(j),new A.wc(j),new A.wd(a),new A.we(j),e,f,g,c.r)}else{p=new A.aS(l,B.r,g,f,e,0)
o=new A.aS(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.im(h,p,o):null
k=A.c([new A.m5(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.ix(b,u.l,u.p,h,i,d))
q=new A.kv(k)}a.r.toString
m=q.lH(B.a6,new A.rG(),!1,new A.mz())
k=m.a.b
if(k.length!==0)throw A.a(A.k("safe renderer graph is invalid: "+A.w(k)))
return new A.vq(q,m)},
GX(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.a(A.k("renderer graph is not initialized"))
s=A.I(b7.ghY(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.W(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a9()
p=p.gaj()
n=A.z(p)
B.a.l(s,new A.mN(new A.cB((r|1073741824)>>>0,0,"transient"),q,A.aW(new A.G(p,n.i("B(1)").a(o.gal()),n.i("G<1,B>")))))}p=b8.a
m=A.IE(A.zW(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eg(B.aF,n))
j=j.b
g=j.$ti
j.W(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.ad(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eg(B.aF,n))
j=j.b
g=j.$ti
j.W(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.ad(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.p4(n)
e.lD("cull")
j=l-f
d=e.b
if(d==null)A.f(A.k("cull recorded outside an active frame"))
if(j<0)A.f(A.r("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gF().e===B.aD)B.a.l(a,new A.b0(new A.bN(a0.ik(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.l(b,new A.b0(new A.bR(B.lQ,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.ml(A.It(A.J5(b)),A.J4(a),p,b8.b,b8.c)
a4=new A.kl(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.f(A.a3(g,"passId",null))
e.b=g
n.cl(g,A.Cq())
a6=A.m(o,i)
for(g=a5.gF().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.k("resource is not in candidate: "+b1))
b3=new A.fG(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cl(b0,new A.wq(b3))}a5.aB(new A.k8(a6,a4,a3))}return new A.uM(e,m,j)},
AB(a){return new A.rW(a,new A.op(new A.or(),new A.ls()),new A.kz(A.c([],t.h1),B.ih),A.c([],t.Ft),B.bK,A.c([],t.ow),null)},
lr:function lr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
uM:function uM(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function mN(a,b,c){this.a=a
this.b=b
this.c=c},
wn:function wn(a){this.a=a},
wo:function wo(a,b){this.a=a
this.b=b},
wm:function wm(a){this.a=a},
wf:function wf(a){this.a=a},
wg:function wg(a){this.a=a},
wl:function wl(a){this.a=a},
wa:function wa(a){this.a=a},
wc:function wc(a){this.a=a},
wb:function wb(a){this.a=a},
wk:function wk(a,b){this.a=a
this.b=b},
w8:function w8(a){this.a=a},
w9:function w9(a){this.a=a},
wh:function wh(a){this.a=a},
wi:function wi(a){this.a=a},
wj:function wj(a){this.a=a},
we:function we(a){this.a=a},
wd:function wd(a){this.a=a},
wq:function wq(a){this.a=a},
vq:function vq(a,b){this.a=a
this.b=b},
mz:function mz(){},
ml:function ml(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rW:function rW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
rX:function rX(){},
rY:function rY(){},
rZ:function rZ(){},
mw:function mw(a){this.b=a},
uY:function uY(){},
mD:function mD(){},
iL:function iL(a,b){this.a=a
this.b=b},
J5(a){var s,r,q=A.I(a,t.E0)
B.a.V(q,new A.xT())
s=A.z(q)
r=s.i("G<1,c5>")
s=A.I(new A.G(q,s.i("c5(1)").a(new A.xU()),r),r.i("Y.E"))
s.$flags=1
return s},
J4(a){var s,r,q=A.I(a,t.EH)
B.a.V(q,new A.xR())
s=A.z(q)
r=s.i("G<1,c5>")
s=A.I(new A.G(q,s.i("c5(1)").a(new A.xS()),r),r.i("Y.E"))
s.$flags=1
return s},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
xT:function xT(){},
xU:function xU(){},
xR:function xR(){},
xS:function xS(){},
IE(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.geH()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.a(A.r("cullItems: non-finite world bounds for instance "+o.gE().q(0),null))
if(a.ih(o.geH())===B.b5){++q
continue}B.a.l(l,o)}return new A.oH(l,new A.oI(q))},
oI:function oI(a){this.b=a},
oH:function oH(a,b){this.a=a
this.b=b},
aW(a){var s,r,q,p,o,n,m,l,k
for(s=J.P(a),r=B.nx,q=B.nz,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.B(m,k,Math.min(r.c,o))
q=new A.B(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.a(A.r("Aabb.fromPoints requires at least one point",null))
return new A.fC(r,q)},
fC:function fC(a,b){this.a=a
this.b=b},
zW(a){var s,r,q,p,o,n,m=a.a,l=new A.p7(),k=m.length
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
return new A.p6(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
f1:function f1(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
p6:function p6(a){this.a=a},
p7:function p7(){},
Ag(a){if(a.length!==16)throw A.a(A.r("Mat4.fromColumnMajor requires 16 values",null))
return new A.dz(new Float32Array(A.a1(a)))},
ye(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dz(q)},
Ah(a,b,c){var s=b.gah(),r=c.bx(s).gah(),q=s.bx(r),p=new Float32Array(16)
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
p[12]=-r.bl(a)
p[13]=-q.bl(a)
p[14]=s.bl(a)
p[15]=1
return new A.dz(p)},
dz:function dz(a){this.a=a},
qy:function qy(){},
rC(a,b){var s=a.gah(),r=b/2,q=Math.sin(r)
return new A.ln(s.a*q,s.b*q,s.c*q,Math.cos(r))},
ln:function ln(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
nB:function nB(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nA:function nA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
iY:function iY(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mc:function mc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k7:function k7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
md:function md(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
kk:function kk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mg:function mg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j_:function j_(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mh:function mh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ko:function ko(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mi:function mi(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kH:function kH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
mn:function mn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a){this.b=a},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
bF(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aS(a.a,a.b,b,c,s,r)},
yh:function yh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ll:function ll(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mB:function mB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AE(a){var s=a.c,r=Math.abs(s.a)<0.99?B.e8:B.X,q=A.Ah(a.b,s,r)
return new A.fb(A.ye(1,a.f,B.b.A(a.w*2,0.1,3),0.05).a3(0,q))},
fb:function fb(a){this.a=a},
lB:function lB(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mE:function mE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Iy(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.p(0,"shadows"))throw A.a(A.a3(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.p(0,"ssao")
r=b6.p(0,"bloom")
q=b6.p(0,"dof")
p=b6.p(0,"grade")
o=b6.p(0,"ps1")
n=b6.p(0,"vhs")
b6=B.d.ad(e5+1,2)
m=B.d.ad(e4+1,2)
l=A.bF(B.bN,e5,e4,e3,a8)
k=A.bF(B.bN.i_(),e5,e4,a8,a8)
A.bF(B.mA,e5,e4,a8,a8)
j=A.bF(B.mx,e5,e4,a8,a8)
i=A.bF(B.ms,e6,e6,a8,a8)
h=A.bF(B.mt,b6,m,a8,a8)
g=A.bF(B.mu,b6,m,a8,a8)
f=A.bF(B.my,b6,m,a8,a8)
e=A.bF(B.mz,b6,m,a8,a8)
d=$.CL()
c=e3>1
b=A.bF(d,e5,e4,a8,c?2:1)
d=A.bF(B.mp,b6,m,a8,a8)
a=A.bF(B.mq,b6,m,a8,a8)
a0=A.bF(B.mr,e5,e4,a8,a8)
a1=A.bF(B.mv,e5,e4,a8,a8)
a2=A.bF(B.mB,e5,e4,a8,a8)
a3=A.bF(B.mw,e5,e4,a8,a8)
a4=c?new A.im(b8,l,k):a8
b5.a=null
a5=A.AE(B.n8)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.J(a7,A.c([new A.hU(b7,a9,b0,b8,b1,b1,B.em,!0,k,f,d6,b6,m),new A.hU(b7,a9,b0,b8,b2,b2,B.ol,!1,f,e,c2,b6,m),new A.k7(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.J(a7,A.c([new A.i0(b7,a9,b0,b8,b3,b3,B.en,k,d,d6,b6,m),new A.i0(b7,a9,b0,b8,b4,b4,B.om,d,a,c7,b6,m),new A.ko(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.kH(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.ll(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.lT(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.kk(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.lE(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.lD(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.lB(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.x2(b5),i))
j.push(new A.lC(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Snow is a host-resolved surface state, not a post-process decal. It\n  // favours upward-facing material, recedes under melt/dissolution, and is\n  // evaluated before lighting so its response remains depth-correct.\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-clamp(uSurfaceDissolution,0.0,1.0)*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  // Warmth changes the material gradually: a dissolved surface is darker,\n  // less rough and more moisture-responsive, but never becomes transparent\n  // or disappears in one frame.\n  float dissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.x3(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.J(j,a7)
j.push(new A.ix(b7,a9,u.p,b8,k,b9))
return new A.kv(j)},
x2:function x2(a){this.a=a},
x3:function x3(a,b){this.a=a
this.b=b},
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
mF:function mF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
lE:function lE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mI:function mI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lD:function lD(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mH:function mH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lT:function lT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mQ:function mQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m5:function m5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mT:function mT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
on:function on(){},
lz(a,b){return new A.iJ(a,b)},
kE:function kE(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
kG:function kG(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eU:function eU(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i7:function i7(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pt:function pt(){},
pu:function pu(){},
hu:function hu(a,b){this.a=a
this.b=b},
ey:function ey(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
zT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fT(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
k5:function k5(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bk:function bk(a,b){this.a=a
this.b=b},
uC:function uC(){this.a=null},
Fw(a){var s=new A.m3(a,B.i,new A.uC(),A.FH(a))
s.ju(a)
return s},
FH(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.Z(t.N)
s=A.Z(t.N)
r=J.P(t.a.b(q)?q:new A.b5(q,A.z(q).i("b5<1,e>")))
while(r.m())s.l(0,r.gn())
return s},
bX(a,b){var s,r
if(a.b!==B.i)A.f(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.h(s.drawingBufferWidth),A.h(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
FC(a,b){var s
if(a.b!==B.i)A.f(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.h(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.a(A.r("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
FB(a,b,c){var s,r,q,p
if(a.b!==B.i)A.f(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.a(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
FA(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Fz(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
AV(a,b){var s
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
Fx(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.i)A.f(A.k(u.k))
s=a.f
r=s.mA(b)
if(r.a===0)return
if(r.p(0,B.bR)){q=v.G
p=a.a
if(b.a)p.enable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bS))a.a.depthFunc(A.FA(a,b.b))
if(r.p(0,B.bT))a.a.depthMask(b.c)
if(r.p(0,B.bX)){q=v.G
p=a.a
if(b.w)p.enable(A.h(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.h(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.bY))a.a.cullFace(A.Fz(a,b.x))
if(r.p(0,B.e0)){q=v.G.WebGL2RenderingContext
q=A.h(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bU)){q=v.G
p=a.a
if(b.d)p.enable(A.h(q.WebGL2RenderingContext.BLEND))
else p.disable(A.h(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.bV))a.a.blendFunc(A.AV(a,b.e),A.AV(a,b.f))
if(r.p(0,B.bW))a.a.blendEquation(A.Fx(a,b.r))
if(r.p(0,B.dZ))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.e_)){q=v.G.WebGL2RenderingContext
a.a.disable(A.h(q.SCISSOR_TEST))}s.a=b},
Fy(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.h(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.h(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.h(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
da(a,b,c,d,e,f){var s
if(a.b!==B.i)A.f(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Fy(a,b))},
ca(a,b){var s
if(a.b!==B.i)A.f(A.k(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
x(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.i)A.f(A.k(u.k))
s=a.e
if(s==null)throw A.a(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.L(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.b1(c.b))
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
bz(a,b){if(a.b!==B.i)A.f(A.k(u.k))
a.a.bindVertexArray(A.b(b.a))},
aH(a,b,c){var s,r,q,p,o,n
if(a.b!==B.i)A.f(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jq){p=s.d>1?A.h(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jp){o=s.b
if(o!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.a(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.a(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
FD(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.i)A.f(A.k(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.h(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.zC(B.R.gdU(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.b3(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.h(q.WebGL2RenderingContext.STATIC_DRAW))}},
FE(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
AY(a,b){var s,r,q,p
if(a.b!==B.i)A.f(A.k(u.k))
s=a.a
r=A.L(s.createBuffer())
if(r==null)throw A.a(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cU?A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.h(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.FE(a,b.b))
return new A.dQ(r)},
AW(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
AX(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
FF(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
yo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.i)A.f(A.k(u.k))
s=a.a
r=A.L(s.createTexture())
if(r==null)throw A.a(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.h(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.FF(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aU(s,"texStorage3D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aU(s,"texStorage2D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.AW(a,b.e))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.AW(a,b.f))
p=b.r
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.AX(a,p))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.AX(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.fJ(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a3(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dQ(new A.jq(r,j,i,q,m))},
yp(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.i)A.f(A.k(u.k))
s=t.h.a(b.a)
r=s.d
if(c>=r)throw A.a(A.r("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.a(A.r("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.h(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aU(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aU(l,"texSubImage2D",[m,0,0,0,q,p,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
AZ(a,b){var s,r,q
if(a.b!==B.i)A.f(A.k(u.k))
s=t.h.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.h(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
m4(a,b){a.a.deleteTexture(t.h.a(b.a).a)},
B0(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.i)A.f(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.a(A.r("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.L(r.createFramebuffer())
if(q==null)throw A.a(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b8
if(n&&!a1.e)throw A.a(A.r("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cW||o===B.iC
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.h(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.L(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aU(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aU(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.L(r.createTexture())
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
if(o>1){f=A.L(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aU(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.L(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aU(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
A.aU(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.h(r.checkFramebufferStatus(A.h(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.h(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.yq(a0,q,l,k,f,e,j,i)
throw A.a(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dQ(new A.jp(q,l,k,f,e,j,i,s,a1.b,a1.c))},
yq(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
db(a){var s
if(a.b!==B.i)A.f(A.k(u.k))
s=A.L(a.a.createVertexArray())
if(s==null)throw A.a(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dQ(s)},
B_(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.L(p.createShader(b))
if(o==null)throw A.a(A.lz(b===A.nc(A.BK(A.CH(),r),q,t.S)?B.dT:B.dU,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a9(A.hP(p.getShaderParameter(o,A.h(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.al(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.a(A.lz(b===A.nc(A.BK(A.CH(),r),q,t.S)?B.dT:B.dU,s))}return o},
FG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.i)A.f(A.k(u.k))
q=v.G
s=A.B_(a,A.h(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.B_(a,A.h(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.L(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.a(B.n0)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a9(A.hP(o.getProgramParameter(n,A.h(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.al(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lz(B.dV,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.h(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lz(B.dW,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.L(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lz(B.dW,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dQ(n)},
dQ:function dQ(a){this.a=a},
jq:function jq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jp:function jp(a,b,c,d,e,f,g,h,i,j){var _=this
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
mS:function mS(a){this.a=a
this.b=!1},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
uz:function uz(a){this.a=a},
uA:function uA(a){this.a=a},
vB:function vB(){},
mR:function mR(){},
uy:function uy(a){this.a=a},
uB:function uB(){},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nQ(a,a0){var s=0,r=A.aM(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$nQ=A.aN(function(a1,a2){if(a1===1)return A.aJ(a2,r)
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
b=new A.k1(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.b1,A.m(o,t.jS))
b.je(p,a0)
p=A.o(a).i("M<1,2>")
s=3
return A.a5(A.p9(A.kX(new A.M(a,p),p.i("aQ<av>(n.E)").a(new A.nR(b)),p.i("n.E"),t.ls),t.c),$async$nQ)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.ki():n
c.buffer=p
q=b
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$nQ,r)},
k1:function k1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
nS:function nS(){},
nR:function nR(a){this.a=a},
nU:function nU(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
nV:function nV(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Dp(a,b,c,d,e,f,g){var s=new A.nH(c,f,b,g,new A.j(d.a,d.b,d.c),e,a)
s.jg(a,b,c,d,0,e,f,g)
return s},
Dl(a,b){var s=new A.nm(b)
s.jd(a,b)
return s},
Do(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aA(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.nD(A.aX(n,r,t.a))
n.jf(a)
return n},
I3(a,b){var s,r,q,p=b>>>0
for(s=new A.dm(a),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
p=A.Cv(p,q==null?r.a(q):q)}return p&2147483647},
k2:function k2(a,b){this.a=a
this.b=b},
nH:function nH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nI:function nI(){},
nm:function nm(a){this.a=a},
nn:function nn(){},
hS:function hS(){},
no:function no(){},
np:function np(){},
nD:function nD(a){this.a=a},
nF:function nF(){},
nG:function nG(){},
nE:function nE(){},
y2:function y2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
nP:function nP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nJ:function nJ(a,b,c){this.a=a
this.b=b
this.c=c},
nK:function nK(a){this.a=a},
nL:function nL(){},
iW:function iW(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function ok(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
p3:function p3(a){this.a=a},
kM:function kM(a,b,c,d,e,f,g,h,i,j){var _=this
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
q2:function q2(a){this.a=a},
Eg(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.q1(n)},
q1:function q1(a){this.a=a},
q5:function q5(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qp:function qp(a,b,c){this.a=a
this.c=b
this.e=c},
qm:function qm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(){},
oJ:function oJ(){this.b=this.a=0},
qv:function qv(a){this.a=a
this.b=0
this.e=!1},
iN(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b3(a)
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
cp:function cp(a){this.a=a
this.b=0},
iR(a,b,c){return new A.j(a,b,c)},
AN(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
FI(a,b,c,d){return new A.m6(d,b,c,a)},
FK(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.CX()
s=a.d
r=A.uE(s,0)
q=A.uE(s,1)
p=A.uE(s,2)
o=A.uE(s,3)
s=t.N
n=A.Z(s)
m=a.e
if(A.bK(m,0))n.l(0,"GamepadA")
if(A.bK(m,1))n.l(0,"GamepadB")
if(A.bK(m,2))n.l(0,"GamepadX")
if(A.bK(m,3))n.l(0,"GamepadY")
if(A.bK(m,4))n.l(0,"GamepadLB")
if(A.bK(m,5))n.l(0,"GamepadRB")
if(A.bK(m,6))n.l(0,"GamepadLT")
if(A.bK(m,7))n.l(0,"GamepadRT")
if(A.bK(m,8))n.l(0,"GamepadView")
if(A.bK(m,9))n.l(0,"GamepadMenu")
if(A.bK(m,10))n.l(0,"GamepadLStick")
if(A.bK(m,11))n.l(0,"GamepadRStick")
if(A.bK(m,12))n.l(0,h)
if(A.bK(m,13))n.l(0,g)
if(A.bK(m,14))n.l(0,f)
if(A.bK(m,15))n.l(0,e)
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.j(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gah():i
return new A.m6(m,p,o,A.f9(n,s))},
uE(a,b){return A.FJ(b<a.length?a[b]:0)},
bK(a,b){return b<a.length&&a[b]>=0.5},
FJ(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.A((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gcg(a)?-s:s},
lF:function lF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m6:function m6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
od:function od(a){this.a=a},
DL(a,b,c){var s=new A.kp(a,c,null,b)
s.jk(a,null,null,b,c)
return s},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
DY(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bD(new A.H(B.ks,t.e2.a(new A.oW(a)),t.vL),t.yW)
return s==null?null:new A.fU(s)},
Ez(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.yf(s,a,B.jU)
break
case 1:A.yf(s,a,B.jV)
break
case 2:A.yf(s,a,B.kv)
break}return s},
yf(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.L(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
DX(a){if(a.a!==21)return null
if(a.e)return B.fB
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fC
return B.fA},
ci:function ci(a,b){this.a=a
this.b=b},
oT:function oT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fU:function fU(a){this.a=a},
oW:function oW(a){this.a=a},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
EG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.ld(s,new A.j(o,n,m),q,p,l,j)
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
ld:function ld(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
I5(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.a(B.fS)
p.k(0,q,r.b)}return p},
vH(a){var s,r,q,p,o,n=a.ga_().bU(0)
B.a.Y(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.BB(a.h(0,o)))}return A.aX(r,t.N,s)},
BB(a){var s
if(t.f.b(a))return A.vH(A.I5(a))
if(t.j.b(a)){s=t.z
return A.ac(J.dW(a,A.IZ(),s),s)}if(a==null||A.bC(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.hL)
return a}throw A.a(A.N("presentation snapshot contains unsupported value "+J.eK(a).q(0),null,null))},
rx:function rx(a){this.a=a},
AA(a,b,c){var s=A.yH(b),r=A.yH(a)
if(c!==2)A.f(A.a3(c,"version","unsupported save version"))
return new A.hg(c,s,r)},
yH(a){var s,r,q,p,o=A.o(a).i("ab<1>"),n=A.I(new A.ab(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.BA(a.h(0,p)))}return A.aX(s,t.N,o)},
BA(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gK(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.a(B.hv)
s.k(0,p,q.b)}return A.yH(s)}if(t.j.b(a)){r=t.z
return A.ac(J.dW(a,A.J2(),r),r)}if(a==null||A.bC(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.hP)
return a}throw A.a(A.N("save contains unsupported value "+J.eK(a).q(0),null,null))},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(){},
f8:function f8(a,b){this.a=a
this.b=b},
zY(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.pf(a,b,c,d,e,f,g,s,r,h)},
zZ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aT(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.a(B.hu)
r=d.h(0,"runSeed")
q=A.aT(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aT(p)||p<1||typeof o!="number")throw A.a(B.i2)
if(!isFinite(5760))throw A.a(A.a3(5760,"daySeconds","must be finite and > 0"))
n=new A.kC(p,7,5760)
n.ie(o)
s=t.N
m=t.z
l=A.Eq(a5,A.aZ(a0,s,m))
k=A.DI(l,A.aZ(a,s,m),n)
j=A.Cm(a3,c)
A.Ef(A.aZ(a1,s,m)).lx(j)
s=A.aZ(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bC(f))A.f(B.h3)
e=A.EA(d.h(0,"narrative"))
if(e==null)e=A.qZ(null,null,null)
return A.zY(c,q,j,n,l,k,new A.kn(i,h,g,f),e)},
GV(a){var s
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
dq:function dq(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.c=a
this.d=b},
pg:function pg(a,b,c){this.a=a
this.b=b
this.r=c},
pf:function pf(a,b,c,d,e,f,g,h,i,j){var _=this
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
ph:function ph(a){this.a=a},
pi:function pi(){},
pj:function pj(){},
pk:function pk(a){this.a=a},
pl:function pl(){},
zI(a){var s,r,q,p,o,n,m,l="modelScale",k=A.jI(a,"house manifest"),j=typeof k.h(0,l)=="number"?A.a7(k.h(0,l)):1
if(!isFinite(j)||j<=0)throw A.a(B.hi)
s=A.cd(k,"houseId")
r=A.cd(k,"sourceRef")
q=J.dW(A.hE(k,"levels"),new A.nW(),t.mD)
q=A.I(q,q.$ti.i("Y.E"))
q.$flags=1
p=J.dW(A.hE(k,"rooms"),new A.nX(j),t.bJ)
p=A.I(p,p.$ti.i("Y.E"))
p.$flags=1
o=J.dW(A.hE(k,"portals"),new A.nY(j),t.lT)
o=A.I(o,o.$ti.i("Y.E"))
o.$flags=1
n=J.dW(A.hE(k,"stairs"),new A.nZ(),t.gI)
n=A.I(n,n.$ti.i("Y.E"))
n.$flags=1
m=J.dW(A.hE(k,"exteriorCells"),new A.o_(),t.N)
m=A.I(m,m.$ti.i("Y.E"))
m.$flags=1
s=new A.k3(s,r,q,p,o,n)
s.eD()
return s},
Cm(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
a5.eD()
s=A.A0(a6)
r=new A.x1()
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
e.push(new A.fj(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.aA(k.f,!1,o)
a2.$flags=3
B.a.l(n,new A.f7(j,new A.j(d,c,h),new A.j(g,f,i),e,A.GA(j),k.r,k.w,k.x))}for(q=a5.f,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.t)(q),++l){a3=q[l]
B.a.l(o,new A.c4(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a5.r,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.t)(q),++l){a4=q[l]
a2=A.aA(a4.c,!1,n)
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
B.a.l(o,new A.fc(a4.a,a4.b,new A.j(i,h,m),new A.j(f,e,j[2])))}s.n6()
return s},
GA(a){var s
A:{if("living-room"===a){s=A.c([A.yb("mantle-living",!0,new A.j(3.7,1.45,0.8),"living-room gas mantle"),A.yb("mantle-living-second",!1,new A.j(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.yb("mantle-hall",!1,new A.j(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.k_
break A}return s},
Dr(a,b){var s,r=A.jI(a,"room"),q=A.cd(r,"id"),p=A.cd(r,"floor"),o=A.Cb(r.h(0,"origin"),"origin",b),n=A.Cb(r.h(0,"size"),"size",b),m=J.dW(A.hE(r,"windows"),new A.o8(b),t.ya)
m=A.I(m,m.$ti.i("Y.E"))
m.$flags=1
s=J.dW(A.hE(r,"portalIds"),new A.o9(),t.N)
s=A.I(s,s.$ti.i("Y.E"))
s.$flags=1
return new A.e1(q,p,o,n,m,s,A.zd(r,"wall"),A.zd(r,"floor"),A.zd(r,"ceiling"))},
jI(a,b){return t.P.b(a)?a:A.dS(b+" is not an object")},
hE(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.dS(b+" is not a list")},
cd(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dS(b+" is not a string")},
zd(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.dS("surface is not an object")
return A.cd(s,b)},
yM(a,b){var s,r=A.cd(a,b)
A:{if("north"===r){s=B.u
break A}if("east"===r){s=B.af
break A}if("south"===r){s=B.p
break A}if("west"===r){s=B.ag
break A}s=A.dS(b+" has unknown facing "+r)}return s},
HF(a,b){var s,r
if(t.j.b(a)){s=J.aO(a)
s=s.gM(a)||s.O(a,new A.wF())}else s=!0
if(s)return A.dS(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a7(r.gn()))
return s},
eC(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dS(b+" is not finite")},
n9(a,b){var s,r
if(t.j.b(a)){s=J.aO(a)
s=s.gt(a)!==3||s.O(a,new A.wZ())}else s=!0
if(s)return A.dS(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.P(a);r.m();)s.push(A.a7(r.gn()))
return s},
Cb(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.n9(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
jO(a,b){var s,r,q=A.Z(t.N)
for(s=J.P(a);s.m();){r=s.gn()
if(!q.l(0,r))throw A.a(A.N("duplicate "+b+" id "+r,null,null))}},
dS(a){return A.f(A.N(a,null,null))},
k3:function k3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
nW:function nW(){},
nX:function nX(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(){},
o_:function o_(){},
o1:function o1(){},
o2:function o2(){},
o3:function o3(){},
o4:function o4(){},
o5:function o5(){},
o6:function o6(){},
o7:function o7(){},
o0:function o0(a){this.a=a},
x1:function x1(){},
e_:function e_(a){this.a=a},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
o8:function o8(a){this.a=a},
o9:function o9(){},
e3:function e3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e0:function e0(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
e2:function e2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wF:function wF(){},
wZ:function wZ(){},
k9:function k9(a,b){this.a=a
this.b=b
this.d=null},
oo:function oo(a){this.a=a},
l0:function l0(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
m7:function m7(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pK:function pK(){this.b=0},
a4:function a4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oY:function oY(){},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(){},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
Jb(a){var s,r,q,p,o,n,m,l
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
return new A.bQ(B.a9,p,new Uint16Array(A.a1(a.b)),new A.fC(new A.B(s.a,s.b,s.c),new A.B(s.d,s.e,s.f)))},
Ja(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.I2(a,new A.xV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kt(o,p.c,p.e))}return n},
I2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.a(A.r("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.p(d,":")?B.c.H(d,0,B.c.bz(d,":")):null
l=new A.dc(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.J(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("am<2>")
q=A.I(new A.am(s,q),q.i("n.E"))
B.a.V(q,new A.wS())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].oA(a))
return r},
GD(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.ks(r,q,p,o,n,m)},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
xV:function xV(a){this.a=a},
wS:function wS(){},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eR:function eR(a,b){this.a=a
this.b=b},
ku:function ku(){},
Iw(a){var s,r,q,p=new A.pL(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.GY(p,a,B.dg[s],15.75,15.75,12.044999999999998,0.63)
p.D(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.D(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.D(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.D(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.D(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.D(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.D(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.D(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a4(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a4(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.an(r,new A.a4(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.an(r,q,new A.a4(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a4(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a4(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.an(q,new A.a4(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.an(q,r,new A.a4(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.an(new A.a4(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a4(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a4(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.an(new A.a4(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a4(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a4(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a4(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a4(7.875,16.32,16.383,-1,0,0,1,1,0)
p.an(r,new A.a4(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.an(r,q,new A.a4(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a4(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a4(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.an(q,new A.a4(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.an(q,r,new A.a4(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.HR(p,15.75,15.75,12.044999999999998,16.32)
A.GG(p,15.75,15.75,16.32)
A.GU(p,15.75,15.75,12.044999999999998)
A.H1(p,a,15.75)
A.HY(p,15.75,15.75)
A.GC(p,15.75)
return p.lF()},
GY(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.af!==b7,p=B.u!==b7,o=B.p===b7,n=B.ag===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.t)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.ev(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aQ(i),b=J.P(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.b1(i)!==b7)continue
B:{if(!p||o){a0=g+a.aL(i)
break B}if(!q||n){a0=e+a.aL(i)
break B}a0=null}B.a.l(b4,new A.ev(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.u||b7===B.p?b8:b9
r=t.i
a1=A.aG([0,s],r)
a2=A.aG([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.I(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.I(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.O(b4,new A.ws(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.H0(b5,b4,b7,b8,b9,c1)
A.GZ(b5,b4,b7,b8,b9,c1)
A.H_(b5,b4,b7,b8,b9,c0,c1)},
H_(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aG([0,a4===B.u||a4===B.p?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.I(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.O(a3,new A.wr(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
GZ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.t)(a4),++g){f=a4[g]
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
break}}if(a5!==B.u)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.D(2,a+0.18,n,r,a,a1,p)}}},
H0(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.t)(a3),++h){g=a3[h]
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
break}if(!f)A.HW(a2,g,a4,a5,a6,a7,q)}},
HW(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
HR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.HS(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
HS(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a4(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a4(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.an(n,new A.a4(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.an(n,m,new A.a4(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a4(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a4(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.an(m,new A.a4(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.an(m,n,new A.a4(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
GG(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
GU(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
H1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aL("hall")
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
HY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
GC(a,b){var s,r
a.D(0,6.7,1,-4.05,-2.5,0,-4.4)
a.D(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.D(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.D(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ws:function ws(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wr:function wr(a,b,c){this.a=a
this.b=b
this.c=c},
J0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.zn(b,d,c)
if(k!=null){s=k.b
return new A.ed(B.fJ,k.a,s)}r=A.CF(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.ed(B.fK,r.a,s)}if(A.CG(b,d,c)!=null)return B.fO
q=A.J_(a,b,c,d)
if(q!=null)return new A.ed(B.cD,q.a,"inspect the "+q.b)
p=A.CE(b,c,d,e)
if(p!=null){o=e.bI(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.ed(B.fM,l,m?"inspect the "+o.b:"inspect "+n)}return B.fP},
CE(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.nb(a5,s,4.5)
for(q=a6.i6(a4),p=J.P(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.bI(i.c)
g=i.f.a
f=i.ey(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.j(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gah()
a0=a3.b
a1=Math.acos(B.b.A(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.nd(a5,a4,a3.a,new A.j(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
J_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.iw(c)
if(s.length===0)return f
r=d.aE(e)
q=A.nb(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.j(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gah()
j=b.b
if(Math.acos(B.b.A(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.nd(d,c,b.a,new A.j(n,m,o)))return k}return f},
dp:function dp(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
Ix(a,b){var s,r=new A.cp(new Float32Array(5376)),q=new A.cp(new Float32Array(5376)),p=new A.cp(new Float32Array(5376)),o=new A.cp(new Float32Array(5376)),n=b.d,m=a.aE(b),l=A.kK(b.y),k=A.kK(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.em(new A.j(j,i,h),new A.j(j,i,f),new A.j(d,i,f),new A.j(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.em(new A.j(j,i,h),new A.j(d,i,h),new A.j(d,i,f),new A.j(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Gv(p,a,b,m,B.dg[s])
for(j=a.aQ(b.a),i=J.P(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.Bp(o,b,m,h,!0)}j=B.q.av(r.a,0,r.b)
i=B.q.av(q.a,0,q.b)
h=B.q.av(p.a,0,p.b)
B.q.av(o.a,0,o.b)
return new A.rS(j,i,h)},
Iu(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cp(new Float32Array(5376))
r=a.aE(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.Bq(s,b,r,c,q)
return B.q.av(s.a,0,s.b)},
Iv(a,b){var s,r,q,p=new A.cp(new Float32Array(5376)),o=a.aE(b)
for(s=a.aQ(b.a),r=J.P(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.Bp(p,b,o,q,!1)}return B.q.av(p.a,0,p.b)},
Gv(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.u||a4===B.p?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aQ(s),q=J.P(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.b1(s)===a4)a.push(new A.eu(p.aL(s),p.aL(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eu(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aG([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.J(0,A.c([m.a,m.b],p))}l=A.I(r,r.$ti.c)
B.a.Y(l)
s=A.aG([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.J(0,A.c([m.c,m.d],p))}k=A.I(s,s.$ti.c)
B.a.Y(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.O(a,new A.vC(f,e,d,c)))continue
A.Ij(a0,a2,a3,a4,f,e,d,c)}A.Gw(a0,a2,a3,a4,b,a)},
Gw(a,b,c,d,e,f){return},
hM(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.aM(j,l,g,h,d)
a.aM(s,r,q,p,d)
a.aM(l,s,p,g,d)
a.aM(r,j,h,q,d)
a.aM(l,j,r,s,d)
a.aM(g,p,q,h,d)},
Ij(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.kK(n).e
a.em(s.a0(0,o),r.a0(0,o),q.a0(0,o),p.a0(0,o),A.kK(n).c,(f-e)/m,(a1-a0)/m)
l=A.Ik(b,d)
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
default:j=k}A.au(a,o,j,A.HZ(A.kK(n).c,0.68))},
HZ(a,b){var s,r=new A.wP(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.iR()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.iR()
r=r.$1(a&255)
if(typeof r!=="number")return A.xd(r)
return(q<<16|s<<8|r)>>>0},
Ik(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
Bp(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b1(d),b=a3.aL(d),a=b+a3.w
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
break}if(a4)A.Bq(a0,a1,a2,a3,q)
A.Gu(a0,a1,a2,a3)},
Gu(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aL(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b1(d)
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
A.hM(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hM(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.p?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hM(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.p?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hM(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.p,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hM(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hM(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hM(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
Bq(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b1(o),m=d.aL(o)
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
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
vC:function vC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wP:function wP(a){this.a=a},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A0(a){var s=t.N
return new A.pI(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.W),new A.pK())},
pI:function pI(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pZ:function pZ(a){this.a=a},
nb(a,b,c){var s=a.aE(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
nd(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Hq(a,s,c,d)},
Hq(a,b,c,d){var s,r,q,p,o=a.aE(b),n=d.ab(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.vJ(a,b,o,B.u,r,q,p,c,n,m))return!0
if(A.vJ(a,b,o,B.p,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.vJ(a,b,o,B.ag,s,r,q,c,n,m))return!0
if(A.vJ(a,b,o,B.af,s+o.a,r,q,c,n,m))return!0
return!1},
vJ(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a0(0,a6.a3(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.u||a1===B.p
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aQ(m),k=J.P(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.b1(m)===a1){g=q.aL(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
zn(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.nb(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.j(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gah()
f=a.b
if(Math.acos(B.b.A(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.nd(a0,a1,a.a,new A.j(h,g,i)))continue
m=d
l=j}}return l},
CF(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.nb(b,j,4.5):4.5
for(s=b.aQ(c),r=J.P(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.nT(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.BP(l,k,a,i,0.5236)||k>=q)continue
if(!A.nd(b,c,a.a,n))continue
q=k
p=o}return p},
CG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.nb(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.In(b,h,m)
k=a.a
j=new A.j(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.BP(j,i,a,s,0.5236)||i>=p)continue
if(!A.nd(b,c,a.a,l))continue
p=i
o=m}return o},
BP(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.A(a.gah().bl(c.b),-1,1))<=e},
In(a,b,c){var s=a.aE(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
oX:function oX(){this.a=null
this.b=0},
tN:function tN(){},
tO:function tO(){},
Ek(a){var s,r=A.jH(a,"inventory asset"),q=A.dV(r,"id"),p=A.dV(r,"kind")
A.dV(r,"source")
A.dV(r,"proxy")
A.dV(r,"pivot")
s=A.al(r.h(0,"status"))
if(s==null)s="proxy"
r=A.jH(r.h(0,"bounds"),"inventory bounds")
return new A.cZ(q,p,s,new A.q6(A.n8(r.h(0,"min"),"bounds.min"),A.n8(r.h(0,"max"),"bounds.max")))},
El(a4){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.jH(a4,"inventory placement"),g=A.jH(h.h(0,"visibility"),"placement visibility"),f=A.jH(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.kO,a=A.dV(h,"id"),a0=A.dV(h,"roomId"),a1=A.dV(h,"assetId"),a2=A.dV(h,"role"),a3=typeof h.h(0,"socket")=="string"?A.q(h.h(0,"socket")):null
h=A.jH(h.h(0,"transform"),"inventory transform")
s=A.n8(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hA)
r=A.n8(h.h(0,"position"),"transform.position")
q=A.n8(h.h(0,"rotation"),"transform.rotation")
p=A.dV(g,"layer")
if(typeof g.h(0,i)=="string")A.q(g.h(0,i))
o=J.a9(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.q(f.h(0,"focusId")):null
c=c.b(e)?A.wD(e,"radius"):0
m=b.gM(b)?0:A.wD(b,"heatOutputWatts")
l=b.gM(b)?0:A.wD(b,"surfaceTemperatureCelsius")
k=b.gM(b)?0:A.wD(b,"radiusM")
if(b.gM(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a7(b.h(0,"offsetY")):0
return new A.cC(a,a0,a1,a2,a3,new A.q8(r,q,s),p,o,n,c,m,l,k,j)},
jH(a,b){return t.P.b(a)?a:A.dR(b+" is not an object")},
dV(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dR(b+" is not a string")},
wD(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dR(b+" is not finite")},
n8(a,b){var s
if(t.j.b(a)){s=J.aO(a)
s=s.gt(a)!==3||s.O(a,new A.wY())}else s=!0
if(s)return A.dR(b+" is not a finite vec3")
s=J.aO(a)
return new A.j(A.a7(s.h(a,0)),A.a7(s.h(a,1)),A.a7(s.h(a,2)))},
dR(a){return A.f(A.N(a,null,null))},
pN:function pN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pQ:function pQ(a){this.a=a},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cC:function cC(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ax=n},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a,b){this.a=a
this.b=b},
wY:function wY(){},
q7:function q7(a){this.a=a},
dB:function dB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
pR:function pR(a){this.a=a},
pS:function pS(a){this.a=a},
yb(a,b,c,d){return new A.kW(a,d,c,b)},
ec:function ec(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c,d,e,f,g){var _=this
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
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
f7:function f7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
Ee(a){return A.Ed(a)},
Ed(a){var s,r,q,p,o,n,m=A.BX(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.BX(m.h(0,"cues"),"sound emitter cues").gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.a(B.ht)
k.k(0,r.a,q)}s=A.za(m,"id")
r=A.za(m,"roomId")
p=A.za(m,"placementId")
o=A.Ii(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hC("gain is not a number")
return new A.cY(s,r,p,o,n,A.aX(k,l,l))},
BX(a,b){return t.P.b(a)?a:A.hC(b+" is not an object")},
za(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hC(b+" is not a string")},
Ii(a,b){var s
if(t.j.b(a)){s=J.aO(a)
s=s.gt(a)!==3||s.O(a,new A.wX())}else s=!0
if(s)throw A.a(A.N(b+" must be a numeric vec3",null,null))
s=J.aO(a)
return new A.j(A.a7(s.h(a,0)),A.a7(s.h(a,1)),A.a7(s.h(a,2)))},
hC(a){return A.f(A.N(a,null,null))},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a){this.a=a},
pW:function pW(a){this.a=a},
pX:function pX(){},
cY:function cY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pJ:function pJ(){this.b=this.a=null},
eW:function eW(a,b){this.a=a
this.b=b},
pT:function pT(){this.b=this.a=null},
cX:function cX(a,b){this.a=a
this.b=b},
wX:function wX(){},
A1(a,b,c,d,e,f){var s=t.N
return new A.pY(e,f,c,a,A.aX(A.aZ(d,s,s),s,s),A.ac(b,s))},
A2(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.iw(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.ij(j.d,j.r))}return A.A1(a.r.b,B.m,i,B.aH,h,s)},
Ef(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.kP
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bq
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aT(a2)||!q.b(s)||!t.j.b(r))throw A.a(B.hq)
p=t.N
o=A.m(p,t.DL)
for(n=a.gK(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cG)
l=A.aZ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bC(j)||!A.bC(i))A.f(B.cG)
o.k(0,k,new A.iw(j,i))}h=A.m(p,t.y)
for(n=a0.gK(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bC(l.b))throw A.a(B.hm)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gK(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cE)
l=A.aZ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bC(f)||!A.bC(e))A.f(B.cE)
g.k(0,k,new A.ij(f,e))}d=A.m(p,p)
for(q=s.gK(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.a(B.ie)
d.k(0,n,A.q(p.b))}c=A.c([],t.s)
for(q=J.P(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.a(B.fQ)
B.a.l(c,b)}return A.A1(a2,c,g,d,o,h)},
z5(a,b){return a.a.a===b.a&&a.a7(0,b.gaw(b))},
pY:function pY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iw:function iw(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
kK(a){var s=B.bw.h(0,a)
if(s==null)throw A.a(A.k("Unknown house surface material: "+a))
return s},
bt:function bt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DV(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.h4(e,A.z(e).c)
q=new A.ew()
q.bY((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.i1(a,q,2,r,1+s,A.aG(["time"],t.N))
break
case 3:A.i1(a,q,3,r,1+s,A.aG(["place"],t.N))
break
case 4:A.i1(a,q,4,r,2+s,p)
A.DR(a,q,4)
break
case 5:A.i1(a,q,5,r,s,p)
A.DP(a,q,5)
break
case 6:A.i1(a,q,6,r,s,p)
A.DQ(a,q)
A.DU(a,q,6)
break
case 7:A.DS(a,q,7)
break
default:if(s>0)A.i1(a,q,b,r,s,p)}},
DO(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.DT(a,b,c))return!1
return!0},
i1(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>"));s.m();){r=s.d
if(A.DO(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dm(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.zU(a,b,o[p],f)}},
zU(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aZ(B.a.ga2(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.I(new A.H(B.B,t.Ag.a(new A.oS(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aW(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eV(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aW(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dZ(c.a,m,B.a.ga2(o).b)},
DR(a,b,c){var s=A.zV(a,b,c)
if(!a.c7(s))return
a.f6(c,t.G.a(s),0,B.be,null)},
zV(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aW(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
DP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dm(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aZ(B.a.ga2(i).a,s,s)
r=p.c
n=A.aZ(B.a.ga2(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.eV(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aW(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dZ(q.a,o,B.a.ga2(i).b)
a.dZ(p.a,n,B.a.ga2(r).b)},
DQ(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aW(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a4(0,q[r].a)},
DU(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aW(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.zU(a,b,q[s],null)},
DS(a,b,c){var s=c+1,r=A.zV(a,b,s)
if(!a.c7(r))return
a.f6(s,t.G.a(r),0,B.be,null)},
DT(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga2(b.c).c===B.aE}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga2(b.c).c===B.aE}if(c===21)return b.e
return!1},
oS:function oS(a){this.a=a},
Fo(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.aA(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.ur(n)},
qq(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kV(A.aX(p,q,q),b,c)},
Ad(a){var s=t.N
return A.qq(t.P.a(a.h(0,"fields")).bq(0,new A.qr(),s,s),A.a7(a.h(0,"shakiness")),A.E_(B.jS,A.q(a.h(0,"hand")),t.qX))},
DZ(a){var s,r,q,p,o=a.h(0,"margin"),n=A.h(a.h(0,"ordinal")),m=A.h(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.P(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.Ad(r.a(s.gn())))
s=A.al(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.yC(a.h(0,"lastReadDay"))
return new A.bZ(n,m,l,s,q,p,o==null?null:A.Ad(r.a(o)))},
ef:function ef(a,b){this.a=a
this.b=b},
ur:function ur(a){this.a=a},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
qr:function qr(){},
qs:function qs(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Aa(a){return new A.qb(a,A.m(t.S,t.g),A.Z(t.N),A.c([],t.t))},
Eq(a,b){var s,r,q,p,o=A.Aa(a)
o.e=A.h(b.h(0,"nextOrdinal"))
o.f=A.h(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.Df(s.a(b.h(0,"tags")),t.N))
for(s=J.P(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.DZ(r.a(s.gn()))
q.k(0,p.a,p)}return o},
qb:function qb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qi:function qi(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
oa:function oa(){},
EH(a){var s,r,q,p,o,n,m,l,k=B.f.ap(a,null),j=t.f
if(!j.b(k)||!J.a9(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.a(B.fV)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.a(B.hY)
r=A.c([],t.d8)
for(q=J.P(s);q.m();){p=q.gn()
if(j.b(p)){o=A.al(p.h(0,"assetId"))
if(o==null)o=""
n=A.al(p.h(0,"licenseId"))
if(n==null)n=""
m=A.al(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.al(p.h(0,"sourceFormat"))
r.push(new A.iy(o,n,m,l==null?"":l))}else r.push(A.f(B.hF))}return new A.rq(A.EI(r))},
EI(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=A.iC("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.N("promoted model index ID is invalid: "+o,n,n))
if(k.L(o))throw A.a(A.N("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.b7(p).length===0||p==="unknown"||p==="unlicensed")throw A.a(A.N("promoted model index rights are unknown: "+o,n,n))
if(!A.aG(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.a(A.N("promoted model index source format is invalid: "+o,n,n))
if(!A.HV(q.c))throw A.a(A.N("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aX(k,m,l)},
HV(a){if(a.length===0||B.c.T(a,"/")||B.c.p(a,"://"))return!1
if(B.c.bm(a.toLowerCase(),".obj")||B.c.bm(a.toLowerCase(),".mtl")||B.c.bm(a.toLowerCase(),".fbx"))return!1
return B.a.a7(A.c(a.split("/"),t.s),new A.wO())},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rq:function rq(a){this.a=a},
wO:function wO(){},
An(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.m(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=A.iC("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.N("asset ID is not stable kebab-case: "+o,j,j))
if(g.L(o))throw A.a(A.N("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.a(A.N("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.b7(m).length===0||m==="unknown"||m==="unlicensed")throw A.a(A.N("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.a(A.N("package is not approved: "+o,j,j))
l=A.CK(n)
if(l.length!==0)throw A.a(A.N("package manifest is invalid for "+o+": "+B.a.bp(l,new A.rs(),i).U(0,"; "),j,j))
p=p.b
k=A.Jd(n,p)
if(k.length!==0)throw A.a(A.N("package payloads are invalid for "+o+": "+B.a.bp(k,new A.rt(),i).U(0,"; "),j,j))
if(A.Ak(n,p)!==n.c)throw A.a(A.N("package hash mismatch: "+o,j,j))
g.k(0,o,q)}return A.aX(g,i,h)},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a){this.a=a},
rs:function rs(){},
rt:function rt(){},
rk:function rk(){},
rj:function rj(a,b,c){this.b=a
this.c=b
this.d=c},
rl:function rl(){},
EF(a,b,c){return B.lR},
lb:function lb(a,b){this.a=a
this.b=b},
rm:function rm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rn:function rn(){},
ro:function ro(a){this.d=a},
ha:function ha(){},
rp:function rp(a){this.a=a},
rr:function rr(){},
ru:function ru(a,b){this.a=a
this.b=b},
rv:function rv(){},
rw:function rw(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rD:function rD(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.x=_.w=0
_.y=b},
Ax(a){if(!isFinite(0))A.f(A.a3(0,"interpolation",null))
return new A.rQ(a)},
lp:function lp(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
rQ:function rQ(a){this.a=a},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
Av(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.h4(c,A.z(c).c)
r=A.I(r,A.o(r).c)
B.a.Y(r)
s=t.N
r=A.ac(r,s)
r=new A.rP(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.jp(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Aw(a,b,c,d){var s=A.n1("RENDERER_SHA"),r=A.n1("GAME_SHA"),q=A.n1("DART_SDK_VERSION")
return A.Av(a,"8711dabdf081-815d1d06d761-dirty",b,!1,null,r,A.n1("LOCKFILE_SHA256"),d,A.n1("PROJECT_VERSION"),s,q,null)},
n1(a){var s=B.kF.h(0,a)
return s.length===0?null:s},
rP:function rP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
rR:function rR(a){var _=this
_.a=a
_.d=_.c=_.b=0},
tE:function tE(a){this.a=a},
tF:function tF(){},
a6(a,b,c,d,e,f,g,h,i,j){return new A.co(e,g,a,f,i,h,j,c,c,b,B.dX)},
AD(){var s=new A.tG(B.aR)
s.w=t.yu.a(A.c([A.a6(B.V,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a6(B.V,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a6(B.V,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a6(B.V,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a6(B.V,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a6(B.a8,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a6(B.a8,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a6(B.a8,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a6(B.a8,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a6(B.a8,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a6(B.ao,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a6(B.ao,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a6(B.ao,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a6(B.ao,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a6(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a6(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a6(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a6(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a6(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a6(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a6(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a6(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a6(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a6(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a6(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a6(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a6(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a6(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a6(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a6(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a6(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a6(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a6(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a6(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a6(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a6(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a6(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a6(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a6(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a6(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a6(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a6(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a6(B.V,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],t.hT))
return s},
lA:function lA(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
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
tG:function tG(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
tL:function tL(a){this.a=a},
tH:function tH(){},
tI:function tI(){},
tM:function tM(){},
tK:function tK(a){this.a=a},
tJ:function tJ(a){this.a=a},
zR(a,b,c,d,e,f,g){var s=A.I(f,t.ho)
if(b<0||a<0||e<0)A.f(A.N("saved day-loop resources must not be negative",null,null))
return new A.oK(c,g,b,a,e,d===!0,s)},
DI(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.a(B.hb)
s=A.c([],t.El)
for(r=J.P(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.a(B.hr)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aT(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.a(B.h5)
f=A.bD(new A.H(B.d8,q.a(new A.oL(h)),p),o)
e=A.bD(new A.H(B.df,n.a(new A.oM(g)),m),l)
if(f==null||e==null)throw A.a(B.i6)
B.a.l(s,new A.hj(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aT(d)||!A.aT(c)||!A.aT(b)||!A.bC(a))throw A.a(B.hC)
return A.zR(c,d,a1,a,b,s,a3)},
bT:function bT(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
oK:function oK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
kN:function kN(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
uD:function uD(a,b){this.b=a
this.c=b},
fk:function fk(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
q_:function q_(a){this.c=a},
q3:function q3(a,b,c){this.a=a
this.b=b
this.d=c},
q4:function q4(){},
yP(a){var s,r,q,p=A.c([],t.s),o=A.Z(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.a(B.i3)
B.a.l(p,q)}return p},
cn:function cn(a,b){this.a=a
this.b=b},
rT:function rT(){},
d4:function d4(){},
rU:function rU(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
H6(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.wt(s,a).$0())
return r},
n5(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
em:function em(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uw:function uw(a){this.b=a},
wt:function wt(a,b){this.a=a
this.b=b},
jC(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
AS(a){var s
switch(a.a){case 0:s=B.od
break
case 1:s=B.oc
break
case 2:s=B.of
break
case 3:s=B.ob
break
case 4:s=B.oe
break
default:s=null}return s},
AR(a,b){return new A.m1(!1,0,0)},
Fs(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.jC(f)||!A.jC(a)||!A.jC(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.a(A.r("weather impact inputs must be finite and valid",j))
if(b===B.D)return A.AR(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.C()
m=A.Fr(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.AR(a,g)
f.a0(0,a.ab(0,f).a3(0,p))
l=g.bl(g)
A:{if(B.bE===b||B.aI===b){s=B.o9
break A}if(B.aJ===b){s=q.d>0.5?B.oa:B.c6
break A}if(B.ak===b){s=l>1?B.ek:B.c6
break A}if(B.D===b){s=B.o8
break A}s=j}if(s===B.ek){k=q.e
g.ab(0,r.a3(0,2*g.bl(r))).a3(0,k)}s=s===B.c6?d:0
return new A.m1(!0,0.5*d*l,s)},
Fr(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ab(0,new A.j(a2,a2,a2)),d=a1.c.a0(0,new A.j(a2,a2,a2)),c=a0.ab(0,a),b=new A.j(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.uu(a,o)
m=A.uu(c,o)
l=A.uu(e,o)
k=A.uu(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.AP(o,m>0)
if(j>i){h=A.AP(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gt(0)<1e-12)return f
b=A.AQ(c)
r=0}if(b.gt(0)<1e-12){if(c.gt(0)<1e-12)return f
b=A.AQ(c)}if(r>1)return f
return new A.as(r,b)},
uu(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
AP(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.j(r,0,0)
break A}if(1===a){s=new A.j(0,r,0)
break A}s=new A.j(0,0,r)
break A}return s},
AQ(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.j(0,q>0?-1:1,0)
if(r>=n)return new A.j(s>0?-1:1,0,0)
return new A.j(0,0,o>0?-1:1)},
AU(a,b,c){var s=new A.hr(b,c,a)
s.ha()
return s},
AT(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
if(!isFinite(b0))A.f(A.a3(b0,"roomTemperatureCelsius",a2))
s=b1.c
if(!isFinite(s))A.f(A.a3(s,a3,a2))
r=b1.d
if(!isFinite(r))A.f(A.a3(r,a4,a2))
q=b1.e
if(!isFinite(q))A.f(A.a3(q,a5,a2))
p=b1.f
if(!isFinite(p))A.f(A.a3(p,"internalHeatWatts",a2))
o=b1.r
if(!isFinite(o))A.f(A.a3(o,a6,a2))
n=b1.w
if(!isFinite(n))A.f(A.a3(n,a7,a2))
m=b1.x
if(!isFinite(m))A.f(A.a3(m,"dtSeconds",a2))
if(s<0||s>1)A.f(A.a3(s,a3,a8))
if(r<0||r>1)A.f(A.a3(r,a4,a8))
if(q<=0)A.f(A.a3(q,a5,a9))
if(o<=0)A.f(A.a3(o,a6,a9))
if(n<=0)A.f(A.a3(n,a7,a9))
l=b1.a
k=1-r*0.85
j=l.e*(1-r*0.9)
r=l.f
i=Math.cos(r)
r=Math.sin(r)
h=l.w
if(h===B.D&&l.b)h=B.bE
g=A.Ft(h,B.b.A(l.c,0,1))*k
f=A.Fu(h)
e=h===B.aJ?g/120:0
d=h===B.D?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.A(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.uv(h,new A.j(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
Fv(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.jC(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.a(A.r("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.r("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.r("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.j(q-h,p-i.b,o-i.c).gt(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.A((e-b)/Math.max(1,s),0,1)
return new A.ut(m,e,l,d,e>b)},
Ft(a,b){var s
if(a===B.D)return 0
s=0.00005+b*0.00045
return a===B.ak?s*0.75:s},
Fu(a){var s
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
m2:function m2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ut:function ut(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uv:function uv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fi:function fi(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fg:function fg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
es:function es(a,b){this.a=a
this.b=b},
m1:function m1(a,b,c){this.a=a
this.f=b
this.r=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Is(a){var s
A:{if("broadcast"===a){s=B.ez
break A}if("visitor"===a){s=B.eA
break A}if("aftermath"===a){s=B.eB
break A}if("ending"===a){s=B.eC
break A}s=A.f(A.N("screenplay event has no consumer: "+a,null,null))}return s},
E7(a){var s=A.I(a.c,t.z)
B.a.V(s,new A.pe())
s=new A.pd(A.ac(s,t.Dm))
s.ow()
return s},
E6(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kA(a,c,A.eY(B.m,t.N))
s=t.N
r=J.zH(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kA(a,c,A.eY(new A.H(r,q.i("l(n.E)").a(new A.pc(a)),q.i("H<n.E>")),s))},
eM:function eM(a,b){this.a=a
this.b=b},
pd:function pd(a){this.a=a},
pe:function pe(){},
kA:function kA(a,b,c){this.a=a
this.b=b
this.c=c},
pc:function pc(a){this.a=a},
qZ(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.J(0,a)
s=A.m(r,r)
if(b!=null)s.J(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.J(0,c)
return new A.qY(q,s,r)},
EA(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aT(s)||s!==1)return l
r=A.Al(a.h(0,"choices"))
q=A.Al(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gK(),k=k.gu(k);k.m();){n=k.gn()
m=A.E4(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.qZ(r,q,p)},
Al(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gK(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.q(q.b))}return r},
E4(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aT(r)||r<1||!A.aT(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cS(s,r,q,p)},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(){},
r0:function r0(){},
r1:function r1(){},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
EE(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.P(a);s.m();){r=s.gn()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bv("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rh(b,p)},
bv:function bv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rh:function rh(a,b){this.a=a
this.b=b},
ri:function ri(a){this.a=a},
hl(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.q(r.a),r.b)}return q},
tT:function tT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
tU:function tU(){},
tV:function tV(){},
ff:function ff(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b){this.a=a
this.b=b},
m0:function m0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Fb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ap(a,g)
if(!t.f.b(f))throw A.a(B.hV)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bq
if(J.a9(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.a(B.hS)
p=A.c([],t.wM)
for(o=J.P(r);o.m();)p.push(A.F4(o.gn()))
o=A.c([],t.tS)
for(n=J.P(q);n.m();)o.push(A.F3(n.gn()))
n=t.N
m=A.Z(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.t)(p),++k){j=p[k].a
if(!m.l(0,j))throw A.a(A.N("duplicate screenplay scene: "+j,g,g))}i=A.Z(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.t)(o),++k){n=o[k].a
if(!i.l(0,n))throw A.a(A.N("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.P(s);n.m();){h=n.gn()
if(typeof h!="string"||h.length===0)A.f(A.N("source must be a non-empty string",g,g))
p.push(h)}return new A.tS(o)},
F3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.q(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.q(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.q(a.h(0,f)).length===0)throw A.a(B.hk)
s=a.h(0,"effects")
if(s==null)s=B.bq
if(!t.j.b(s)||J.jS(s,new A.t_()))throw A.a(B.hX)
r=B.b.aC(A.a7(a.h(0,"day")))
q=A.a7(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.a(B.hN)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.a(B.fY)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.a(B.ic)
l=new A.t0(a)
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
return new A.hh(m,k,r,q,j,A.ac(i,t.N),n,h)},
F4(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.a(B.h9)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aC(r)!==r)throw A.a(B.hy)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.a(A.N("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aC(r)
l=A.c([],t.s)
for(k=J.P(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.f(B.hM)
l.push(j)}l=A.c([],t.rn)
for(k=J.P(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.i9)
A.q(j.h(0,"kind"))
A.q(j.h(0,"text"))
A.al(j.h(0,"speaker"))
l.push(new A.lu())}i=A.c([],t.gg)
for(l=J.P(n);l.m();)i.push(A.F2(l.gn()))
return new A.lx(s,m)},
F2(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.a(B.hf)
s=A.q(a.h(0,m))
A.q(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.P(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.hR)
o=A.q(p.h(0,m))
n=A.q(p.h(0,"label"))
A.q(p.h(0,"next"))
r.push(new A.lw(o,n))}return new A.lv(s)},
tS:function tS(a){this.c=a},
hh:function hh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
t_:function t_(){},
t0:function t0(a){this.a=a},
lx:function lx(a,b){this.a=a
this.b=b},
lu:function lu(){},
lv:function lv(a){this.a=a},
lw:function lw(a,b){this.a=a
this.b=b},
tW:function tW(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
tX:function tX(){},
tY:function tY(){},
jU:function jU(a){this.a=a},
y1:function y1(a,b,c){this.b=a
this.e=b
this.f=c},
Dk(a){var s,r,q,p
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.a(B.fU)
s=new A.nl()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.yD(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dX(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b2(B.bt,new A.nj(a),new A.nk()))},
cQ:function cQ(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nl:function nl(){},
nj:function nj(a){this.a=a},
nk:function nk(){},
nw:function nw(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
ny:function ny(a){this.a=a},
nx:function nx(a,b){this.a=a
this.b=b},
nC:function nC(a,b){this.a=a
this.b=b},
Dq(a){var s
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.a(B.hz)
s=new A.nM()
return new A.dZ(s.$1$2(B.br,a.h(0,"output"),t.xs),s.$1$2(B.bl,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bk,a.h(0,"reverb"),t.gc),s.$1$2(B.bi,a.h(0,"ducking"),t.ul))},
cz:function cz(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
nM:function nM(){},
nN:function nN(a,b){this.a=a
this.b=b},
nO:function nO(a){this.a=a},
oc:function oc(a){this.a=a
this.b=null},
og(a,b,c){var s
b.C()
if(c<1||c>6)throw A.a(A.a3(c,"level","must be between 1 and 6"))
s=A.E(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.oe(s,b)
return s},
e7(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.E(a,"button","brush-button brush-state-"+s.b,r)
A.oe(q,b)
q.type="button"
q.disabled=s===B.ay
q.addEventListener("click",A.W(new A.of(c)))
return q},
Dv(a,b,c,d){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.ay
A.oe(s,b)
s.addEventListener("change",A.W(new A.oj(d,s)))
return s},
Du(a,b,c,d,e,f){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.ay
A.oe(s,b)
s.addEventListener("input",A.W(new A.oi(s,e)))
return s},
y3(a,b){var s=B.c.j6(A.q(a.className),A.iC("\\s+")),r=A.z(s),q=r.i("H<1>"),p=A.I(new A.H(s,r.i("l(1)").a(new A.oh()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.U(p," ")
a.setAttribute("data-brush-state",s)},
oe(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gln())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.ay)a.setAttribute("aria-disabled","true")},
of:function of(a){this.a=a},
oj:function oj(a,b){this.a=a
this.b=b},
oi:function oi(a,b){this.a=a
this.b=b},
oh:function oh(){},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ol:function ol(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
om:function om(a){this.a=a},
zP(a){var s=!1
if(a.length!==0)if(!B.dS.p(0,a))s=B.mO.p(0,a)||B.mF.p(0,a)||B.mN.p(0,a)||!B.c.T(a,"Mouse")
return s},
GQ(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aA(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Hw(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.M(a,A.o(a).i("M<1,2>"))
p=J.P(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fP(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.h3(B.kC,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.Hw(a))
s=new A.fO(g,d,h,e,f,c,A.aX(A.GQ(q),s,r))
s.C()
return s},
DF(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.a(B.cF)
s=a.h(0,"version")
r=J.eF(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.a(B.cF)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gK(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.a(B.hl)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.Dg(m,new A.oz())){o=A.c([],r)
for(l=J.P(m);l.m();)o.push(A.q(l.gn()))
q.k(0,n,o)}else throw A.a(B.h0)}j=A.a7(a.h(0,"horizontalSensitivity"))
r=A.a7(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fP(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
yF(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.I(r.b,p)
o.k(0,q,r)}return o},
z0(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
zg(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fO:function fO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oB:function oB(){},
oA:function oA(a){this.a=a},
oC:function oC(){},
oD:function oD(){},
oE:function oE(){},
oz:function oz(){},
e4:function e4(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.c=b},
ke:function ke(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
DE(a){var s=t.N,r=t.m
r=new A.i_(A.fP(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.b(a.createElement("div")))
r.aX(a)
r.ji(a)
return r},
i_:function i_(a,b,c,d,e,f){var _=this
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
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a){this.a=a},
ow:function ow(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
DG(a){var s=new A.oF(a,A.b(a.createElement("div")))
s.aX(a)
s.jj(a)
return s},
oF:function oF(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
oG:function oG(a){this.a=a},
DM(a){var s=new A.oO(A.E(a,"div","door",null))
s.jl(a)
return s},
zS(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.U(s,"; ")+"."},
oO:function oO(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
oP:function oP(a){this.a=a},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
DW(a){var s=new A.oU(a,A.b(a.createElement("div")))
s.aX(a)
s.jm(a)
return s},
oU:function oU(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oV:function oV(a){this.a=a},
pm:function pm(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pn:function pn(){},
E8(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.po(a.b===B.cM,a.c===B.cQ,s,a.e===B.cN,a.f===B.cK,a.r===B.cS,a.w,a.x)},
po:function po(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
y4(a,b,c,d,e,f,g,h,i,j,k){return new A.fW(e,g,k,f,b,h,d,c,a,i,j)},
E9(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.a(B.hO)
s=new A.pp(a)
r=a.h(0,"contextualReminders")
if(!A.bC(r))throw A.a(B.i4)
q=!A.bC(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bs,t.bK)
o=s.$1$2("promptDensity",B.bv,t.dn)
n=s.$1$2("textPacing",B.bu,t.j_)
m=s.$1$2("journalLayout",B.bm,t.gm)
l=s.$1$2("confirmations",B.bg,t.aJ)
k=s.$1$2("saveFeedback",B.bn,t.mx)
j=s.$1$2("focusLossBehavior",B.aG,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bj,t.vS):B.b6
return A.y4(s,l,r,j,p,m,o,k,q,A.bC(a.h(0,g))&&A.Q(a.h(0,g)),n)},
dt:function dt(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pp:function pp(a){this.a=a},
pq:function pq(a,b){this.a=a
this.b=b},
pr:function pr(a){this.a=a},
A_(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.a(B.hw)
s=B.a.b2(B.da,new A.pC(a),new A.pD())
r=A.q(a.h(0,"renderScale"))
q=A.Q(a.h(0,"dynamicResolution"))
p=A.q(a.h(0,"frameTarget"))
o=A.q(a.h(0,"antialiasing"))
n=A.q(a.h(0,"textureQuality"))
m=A.al(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.al(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.al(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.Bx(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.ee(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fZ(a,b){var s=b==null?B.bd:b
return new A.pE(s,a==null?B.bd:a)},
CA(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dX(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dX("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hq(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.d0&&b.a<2){q=q.hr(B.bc)
B.a.l(s,"High preset was reduced to Standard")}return new A.pw(q,A.ac(s,t.N))},
cA:function cA(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pC:function pC(a){this.a=a},
pD:function pD(){},
pE:function pE(a,b){this.a=a
this.b=b},
pv:function pv(a,b){this.a=a
this.b=b},
pw:function pw(a,b){this.a=a
this.b=b},
Eb(a){var s=new A.ia(A.m(t.N,t.m),B.bd,a,A.b(a.createElement("div")))
s.aX(a)
s.jn(a)
return s},
ia:function ia(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
pz:function pz(a){this.a=a},
pA:function pA(a){this.a=a},
pB:function pB(a){this.a=a},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(a){this.a=a},
jV:function jV(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(){this.c=0},
Ec(a){var s=new A.pG(a,A.b(a.createElement("div")))
s.aX(a)
s.jo(a)
return s},
pG:function pG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
pH:function pH(a){this.a=a},
qc:function qc(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qd:function qd(a){this.a=a},
qe:function qe(a){this.a=a},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(){},
qh:function qh(){},
d2:function d2(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r6:function r6(a,b,c,d,e,f,g){var _=this
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
BH(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.h(p.length);++r){q=A.L(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
iv:function iv(){},
bu:function bu(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(){},
rd:function rd(){},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
rb:function rb(a){this.a=a},
re:function re(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=b},
rf:function rf(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rg:function rg(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a
this.b=null},
F5(a){var s=new A.t2(a,A.b(a.createElement("div")))
s.aX(a)
s.jq(a)
return s},
t2:function t2(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
t3:function t3(a,b){this.a=a
this.b=b},
t4:function t4(a){this.a=a},
ly(a,b){var s=t.N,r=t.m
r=new A.hi(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.xZ(),B.av,A.m(s,r),A.m(s,r),B.aZ,A.m(s,r),a,A.b(a.createElement("div")))
r.aX(a)
r.jr(a,b)
return r},
hi:function hi(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tt:function tt(a){this.a=a},
tu:function tu(a){this.a=a},
tv:function tv(a,b){this.a=a
this.b=b},
tw:function tw(a){this.a=a},
tx:function tx(a){this.a=a},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tk:function tk(a){this.a=a},
tn:function tn(a){this.a=a},
t5:function t5(a,b,c){this.a=a
this.b=b
this.c=c},
to:function to(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
tj:function tj(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a){this.a=a},
tc:function tc(a){this.a=a},
td:function td(a){this.a=a},
te:function te(a){this.a=a},
tf:function tf(a){this.a=a},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
ti:function ti(a){this.a=a},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(a){this.a=a},
t7:function t7(a){this.a=a},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
ts:function ts(a,b,c){this.a=a
this.b=b
this.c=c},
tr:function tr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tz(a){return B.a.b2(B.E,new A.tA(a),new A.tB(a))},
F6(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
q.k(0,r.a,r.e)}return q},
dG(a,b){var s=t.z
s=A.h3(A.F6(),s,s)
if(a!=null)s.J(0,a)
s=new A.ty(b,A.aX(s,t.N,t.K))
s.js(a,b)
return s},
AC(a){var s,r=t.f
if(!r.b(a)||!J.a9(a.h(0,"version"),1))throw A.a(B.i1)
s=a.h(0,"values")
if(!r.b(s))throw A.a(B.ha)
return A.dG(A.aZ(s,t.N,t.K),A.h(a.h(0,"version")))},
bH:function bH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
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
tA:function tA(a){this.a=a},
tB:function tB(a){this.a=a},
ty:function ty(a,b){this.a=a
this.b=b},
yk(a,b){var s=b==null?A.dG(null,1):b
return new A.tC(s,a==null?A.dG(null,1):a)},
F7(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.E[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.f2(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.de(r)
J.be(l,s.a,r)}catch(n){if(!(A.ai(n) instanceof A.A))throw n}}m=A.dG(l,1)
return A.yk(m,m)},
tC:function tC(a,b){this.a=a
this.b=b},
F9(a){var s=new A.tP(a,A.b(a.createElement("div")))
s.aX(a)
s.jt(a)
return s},
tP:function tP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tQ:function tQ(a,b,c){this.a=a
this.b=b
this.c=c},
Dn(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gK(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cx(p+m+":"+k,m,l.a,l.b,j))}}B.a.V(i,new A.nu())
return new A.nt(A.ac(i,t.bC),A.Z(t.N))},
cx:function cx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nt:function nt(a,b){this.a=a
this.b=b},
nv:function nv(){},
nu:function nu(){},
Fn(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.o7
s=t.T
r=A.m(s,t.q1)
q=A.o(a).i("ab<1>")
p=A.I(new A.ab(a,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gK(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bn(new A.by(B.nQ,k+" has an out-of-range authored day "+h+"."))
g=A.Fm(k,h,i.b,m)
if(g instanceof A.bn)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bW(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ae(o,o.r,o.e,A.o(o).i("ae<2>"));o.m();){n=o.d
J.eJ(e.cl(n.b,new A.ul()),n)}o=A.aX(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.M(e,e.$ti.i("M<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aA(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lZ(new A.lY(r,A.Z(a),A.Z(s),o,q,A.c([],t.Dc),B.a6,A.qZ(b,b,b)))},
Fm(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.d6[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gK(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.c.T(h,m))continue
g=A.dC(B.c.aO(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bn(new A.by(B.nR,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dd
B.a.l(l,new A.c9(g,i.b,f))}if(l.length===0)continue
B.a.V(l,new A.ui())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bn(new A.by(B.ei,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bn(new A.by(B.ei,a+" day "+s+" has no authored tiers."))
return new A.mv(c)},
lY:function lY(a,b,c,d,e,f,g,h){var _=this
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
uo:function uo(a){this.a=a},
un:function un(a){this.a=a},
up:function up(a){this.a=a},
uj:function uj(a){this.a=a},
uk:function uk(){},
um:function um(a){this.a=a},
ul:function ul(){},
uh:function uh(a){this.a=a},
ug:function ug(a){this.a=a},
ui:function ui(){},
lZ:function lZ(a){this.a=a},
mv:function mv(a){this.a=a},
IJ(a){var s,r,q,p=A.Z(t.N)
for(s=new A.M(a,A.o(a).i("M<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gai(),q=q.gu(q);q.m();)if(q.gn().ga_().O(0,new A.x9())){p.l(0,r.a)
break}}s=A.I(p,p.$ti.c)
B.a.Y(s)
return s},
II(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aA(b,!0,s)
B.a.Y(r)
q=new A.ew()
q.bY((a^913741)>>>0)
p=q.aW(4)
if(!(p>=0&&p<4))return A.d(B.d5,p)
o=B.d5[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aA(r,!0,s)
B.a.dm(m,q)
s=A.lH(m,0,A.fy(n,"count",t.S),A.z(m).c).bU(0)
B.a.Y(s)
return s},
x9:function x9(){},
AO(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aT(r)||!A.aT(q)||!A.aT(p)||r<1||q<0||q>23||p<0)return null
return new A.bW(s,r,q,p)},
Fl(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.Z(t.N)
for(s=t.j,q=J.P(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.Z(t.T)
for(s=J.P(s.a(a.h(0,j)));s.m();){n=A.AO(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Dm(m)
if(!s&&l==null)return i
return new A.m_(r,o,l)},
Dm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.AO(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aT(p))if(!(p<0))if(A.bC(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bD(new A.H(B.d6,t.u_.a(new A.nq(r)),t.cE),t.hF)
j=A.bD(new A.H(B.kw,t.da.a(new A.nr(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bD(new A.H(B.jt,t.kr.a(new A.ns(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jW(s,k,j,p,i,n,A.al(m))},
bO:function bO(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d8:function d8(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m_:function m_(a,b,c){this.a=a
this.b=b
this.c=c},
uf:function uf(){},
jW:function jW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nq:function nq(a){this.a=a},
nr:function nr(a){this.a=a},
ns:function ns(a){this.a=a},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
uq:function uq(){},
bn:function bn(a){this.a=a},
lW:function lW(a){this.a=a},
lU:function lU(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
HL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jP())return f
n=A.eq().gb5()
m=n.h(0,"captureSeed")
l=A.dC(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dC(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.f2(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.ap(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gK(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.mG.p(0,o.b))return f
J.be(p,A.q(o.a),A.q(o.b))}r=p}else return f}catch(g){if(A.ai(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.mM.p(0,i))return f
if(h!=null&&!B.mJ.p(0,h))return f
return new A.uJ(l,k,j,h,r)},
HM(){var s,r,q,p=A.eq().gb5().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fe
break A}if("intimate"===p){s=B.fg
break A}s=B.ff
break A}r=A.eq().gb5().h(0,"cameraFov")
q=A.f2(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fH(B.b.A(q,35,100)*3.141592653589793/180,s.b,s.c)},
jJ(a){var s=$.bd
if(s===a&&B.c.p(A.q(a.b.className),"open"))return
if(s!=null)s.ae()
$.bd=a
if(a===$.cs.j())$.hR().i2("gameplay.viewport")
else $.hR().nQ(A.BY(a))
s=$.ah.j()
s.ay=!1
s.bf()
$.eB=0
a.bR()},
yV(a,b,c){var s,r,q
$.jK=!0
s=$.bd
if(s!=null)s.ae()
$.bd=a
s=$.hR()
if(s.a.a.length===0)s.i2(c)
r=A.I(s.a.a,t.oP)
r.push(new A.dA(b,B.a1,c))
q=s.a
s.a=new A.ek(r,q.b,q.c)
s.jZ(b)
s=$.ah.j()
s.ay=!1
s.bf()
$.eB=0
a.bR()
$.jK=!1},
dU(a){var s,r,q,p,o,n,m,l=null
if($.jK)return
$.jK=!0
a.ae()
$.bd=null
s=$.hR().lz()
$.jK=!1
r=s.a
if(r===B.dE){$.eB=0
r=$.ah.j()
r.bf()
r.ay=!0
q=A.L(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dD)return
r=s.c.a
r=r.length===0?l:B.a.ga2(r)
p=r==null?l:r.a
A:{if(B.bB===p){r=$.cs.j()
break A}if(B.dt===p){r=$.hB.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bd=r
n=$.ah.j()
n.ay=!1
n.bf()
$.eB=0
r.bR()
m=o==null?l:A.L(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jN(a){if($.bd===a&&B.c.p(A.q(a.b.className),"open"))a.ae()
else A.jJ(a)},
hI(a){var s
if($.jK)return
if($.bd===a)$.bd=null
if(a===$.cs.j())$.hR().cm()
else $.hR().mB(A.BY(a))
$.eB=0
s=$.ah.j()
s.bf()
s.ay=!0},
BY(a){if(a===$.cs.j())return B.du
if(a===$.hB.j())return B.a1
if(a instanceof A.hi)return B.a1
if(a instanceof A.ia)return B.a1
if(a instanceof A.i_)return B.a1
if(a===$.jx.j())return B.lB
if(a===$.mX.j())return B.lC
if(a===$.jw.j())return B.lD
if(a===$.mV.j())return B.a1
if(a===$.ju.j())return B.lF
return B.lE},
n0(a,b){var s
a.snF(new A.vR())
a.snH(new A.vS())
a.snG(new A.vT())
a.snB(new A.vZ())
a.snE(new A.w_())
a.snP(new A.w0())
a.snK(new A.w1())
a.snJ(new A.w2())
a.sba(b?new A.w3(a):new A.w4(a))
a.sb4(b?new A.w5(a):new A.vU(a))
s=a.f
if(s===B.I)a.sns(new A.vV())
if(s===B.a3)a.snC(new A.vW())
if(s===B.J){a.snr(new A.vX())
a.snI(new A.vY())}},
GN(){var s=$.eA.j()
s.sek(new A.vO())
s.sba(new A.vP())
s.sb4(new A.vQ())},
n_(a,b,c){return A.GK(a,b,c)},
GK(a,b,c){var s=0,r=A.aM(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$n_=A.aN(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.vK()
k=c.$ti
j=$.aq
i=new A.ar(j,k)
if(j!==B.y)l=A.C3(l,j)
c.cv(new A.dN(i,2,null,l,k.i("dN<1,1>")))
s=4
return A.a5(i,$async$n_)
case 4:case 3:o=$.jQ().b
n=$.aD
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a5(n.cM(b.a),$async$n_)
case 11:case 10:k=b.a
$.jD=A.fZ(k,a)
$.eA.j().ct(a,k,b.b)
A.yX()
A.jL()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ai(g)
$.jD=A.fZ(o,o)
k=$.eA.j()
k.ct(o,o,A.c(["renderer transaction rejected: "+A.w(m)],t.s))
A.yX()
s=8
break
case 5:s=1
break
case 8:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$n_,r)},
HB(){var s,r,q,p,o,n=null
try{n=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ap(n,null)
if(!t.f.b(r)||!J.a9(r.h(0,"version"),1))A.f(B.hQ)
q=A.A_(r.h(0,"requested"))
$.jD=A.fZ(A.A_(r.h(0,"effective")),q)}catch(s){$.jD=A.fZ(null,null)}p=$.jQ().a
o=A.CA(p,A.BL())
r=o.a
$.jD=A.fZ(r,p)
$.eA.j().ct(p,r,o.b)
A.yX()
A.jL()},
BL(){var s,r,q,p,o=$.fu.j().ghu().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.T(p,"max-samples-"))continue
r=A.dC(B.c.aO(p,12),null)
if(r==null)r=1}return new A.pv(r,B.a.p(o,"disjoint-timer-query"))},
yX(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a6($.jQ().B(),null))}catch(s){}},
GM(){var s=$.jt.j()
s.sek(new A.vL())
s.sba(new A.vM())
s.sb4(new A.vN())},
Hz(){var s,r,q,p,o,n=null
try{n=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.yK=A.DF(B.f.ap(n,null))}catch(s){$.yK=A.fP(null,null,!1,1,!1,!1,2,1)}r=$.jt.j()
q=r.w=$.fA()
r.x=new A.ke(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.b.q(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.b.q(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.dQ()
$.ah.j().eO($.fA().r)
r=$.ah.j()
q=$.fA()
p=r.ch
p.a=q.f
p.es()
r.bf()
A.C_()},
C_(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a6($.fA().B(),null))}catch(s){}},
Hy(){var s,r=null
try{r=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jB=A.Dq(B.f.ap(r,null))}catch(s){$.jB=B.aZ}$.hz.j().iC($.jB)
A.BZ()
A.yB()},
BZ(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a6($.jB.B(),null))}catch(s){}},
yB(){var s=$.bq
if(s==null)return
s.iL($.jB)},
HA(){var s,r=null
try{r=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.yO=A.E9(B.f.ap(r,null))}catch(s){$.yO=$.xZ()}$.jv.j().iD($.cw())
A.C0()
A.Bt()},
C0(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a6($.cw().B(),null))}catch(s){}},
Bt(){var s,r="detailed",q=A.E8($.cw()),p=A.L(A.b(v.G.document).documentElement)
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
s=$.cw().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cw().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
Hx(){var s,r=null
try{r=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.df=A.Dk(B.f.ap(r,null))}catch(s){$.df=B.av}$.ft.j().eN($.df)
A.yW()
A.mY()},
yW(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a6($.df.B(),null))}catch(s){}},
mY(){var s,r,q,p,o,n,m=$.df,l=$.wU,k=$.ze,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.h6)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ac
$.z2=l
$.cM.j()
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
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.w(j*100)+"%")
q=$.v.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.w(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Br){m=$.bc.j()
l=$.df.f
m.e=new A.jU(l==null?B.ac:l)
m=$.bc.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
C2(a){var s,r,q
A.eE("renderer-unavailable")
s=$.v.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.de.j().b)
$.de.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.de.j().d)
q.k(0,"aliasUsed",$.de.j().f)
if($.de.j().e!=null)q.k(0,"rejectionReason",$.de.j().e)
if($.de.j().r!=null)q.k(0,"aliasReason",$.de.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a6(A.F(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
Ha(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.wx(r,q)
r.addEventListener("change",A.W(new A.wv(s)))
q.addEventListener("change",A.W(new A.ww(s)))},
ne(){var s=0,r=A.aM(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8
var $async$ne=A.aN(function(f0,f1){if(f0===1){o.push(f1)
s=p}for(;;)switch(s){case 0:e6=v.G
e7=A.L(A.b(e6.document).getElementById("game"))
if(e7==null){s=1
break}$.v.b=e7
$.yN=A.L(A.b(e6.document).getElementById("fps"))
$.de.b=$.D1().cr(A.eq().gb5().h(0,"renderer"))
A.Hb()
c0=$.v.j()
c1=A.h(A.b(e6.window).innerWidth)>0?A.h(A.b(e6.window).innerWidth):800
c0.width=c1
c1=$.v.j()
c0=A.h(A.b(e6.window).innerHeight)>0?A.h(A.b(e6.window).innerHeight):600
c1.height=c0
c2=A.L(A.b(e6.document).getElementById("ui-canvas"))
if(c2!=null){$.Bo.b=c2
c2.width=A.h($.v.j().width)
c2.height=A.h($.v.j().height)
c0=new A.ol(c2,A.c([],t.km))
c3=A.L(c2.getContext("2d"))
if(!t.m.b(c3))A.f(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.rR(c0)
$.eD=c0
c0.dd(A.h($.v.j().width),A.h($.v.j().height))}n=B.fd.mr(e7)
if(n==null){A.C2("webgl2 unavailable")
s=1
break}try{c0=A.h($.v.j().width)
c1=A.h($.v.j().height)
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
m=new A.my(n,c0,c1,c5,A.m(c6,t.qr),c7,A.m(c6,c8),A.m(c6,c9),A.m(c6,t.xp),A.m(c6,t.bE),A.m(c6,c8),A.m(c6,c9),c4,A.m(c6,c8),A.m(c6,c9),A.m(c6,c6),A.m(d0,d1),A.m(c6,t.qS),d2,B.jW,A.m(c6,t.Aj),A.m(c6,c6),A.m(c6,d1),A.m(c6,t.vD),A.m(c6,d1),new A.qL(A.m(c6,t.ml),A.m(c6,d0)),A.m(c6,t.mL),A.m(c6,t.w1),B.ig,B.lT,B.jX,B.dc)
$.aD=m
c0=$.de.j()
c1=t.dM.a(m)
if(c0.a!==B.aO)A.f(A.k("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.rj(c1,c0.B(),B.mk)
c1.n7()
c0.d=B.T
$.fu.b=c0}catch(e9){l=A.ai(e9)
k=A.cO(e9)
g=$.v.j()
g.setAttribute("data-renderer-error",A.w(l))
if($.jP())$.v.j().setAttribute("data-renderer-error-stack",A.w(k))
A.C2("pixeldart initialization failed")
s=1
break}A.jL()
p=4
A.eE("initializing")
$.cM.b=new A.ok(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),$.zA())
$.wU=A.Q(A.b(A.b(e6.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.ze=A.Q(A.b(A.b(e6.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.z2=$.wU
$.cM.j()
c0=A.b(e6.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.Eg(A.F(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.b(c0.document)
c4=new A.kM(c0,c6,A.Z(c1),A.Z(c1),A.Z(c1),A.Z(c1),A.Z(c1),new A.j(0,0,0),new A.q5(),c4)
c0.addEventListener("keydown",A.W(c4.gkw()))
c0.addEventListener("keyup",A.W(c4.gky()))
c0.addEventListener("mousemove",A.W(c4.gkE()))
c0.addEventListener("mousedown",A.W(c4.gkC()))
c0.addEventListener("mouseup",A.W(c4.gkG()))
c0.addEventListener("wheel",A.W(c4.gkI()))
c6.addEventListener("pointerlockchange",A.W(c4.gkA()))
$.ah.b=c4
c4=$.v.j()
c0=A.h(A.b(e6.window).innerWidth)>0?A.h(A.b(e6.window).innerWidth):800
c4.width=c0
c0=$.v.j()
c4=A.h(A.b(e6.window).innerHeight)>0?A.h(A.b(e6.window).innerHeight):600
c0.height=c4
A.eE("renderer")
A.eE("text")
c4=$.fB()
s=7
return A.a5(c4.bB(),$async$ne)
case 7:j=c4.oz()
i=A.Fn(j)
if(!(i instanceof A.lZ)){h=t.bB.a(i).a
g=h.b
throw A.a("Failed to build visitors: "+g)}$.aI.b=i.a
$.mU.b=A.Dn(j)
g=A.m(c1,c5)
for(c0=t.j,d4=0;d4<5;++d4){f=B.B[d4]
c5=A.q(f)
c6=c4.c
c6===$&&A.p()
d5=c6.h(0,c5)
c5=c0.b(d5)?A.aA(d5,!0,c1):B.m
J.be(g,f,c5)}e=A.Fo(g)
s=8
return A.a5(A.n4(),$async$ne)
case 8:d=f1
$.yz.b=new A.od(B.fc)
c=$.yz.j().nW(new A.xi(e,d))
d6=$.y_()
b=d6
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.b1.aW(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.b.aT(c6.c)
if(c6==null)c6=7
if(c5<1)A.f(A.a3(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.f(A.a3(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a3(5760,"daySeconds","must be finite and > 0"))
d7=new A.kC(c5,7,5760)
d7.eW(c6)
d8=A.Aa(e)
d9=g==null?A.A0(42):A.Cm(g,42)
g=A.zY(42,c1,d9,d7,d8,A.zR(6,16,d8,null,6,B.k3,d7),new A.kn(0,0,0,!1),A.qZ(null,null,null))}else{g=c.a
g.toString
g=A.zZ(d,g,e)}$.V.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.E6(a,g,$.V.j().b)}$.vE=g
$.aI.j().y=$.V.j().z
g=A.ac(A.H6($.V.j().b),t.fu)
$.yA.b=new A.uw(g)
g=$.y0()
c1=c.a
g.ev(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fu.j().f_(A.Ax($.V.j().gi9()))
if(c.b!=null){g=c.b
g.toString
A.hK(g)}g=$.aI.j()
c1=A.II($.V.j().b,A.IJ(j.b))
g.sj7(A.h4(c1,A.z(c1).c))
A.eE("house")
$.X.b=$.V.j().c
g=d6==null
a0=g?null:d6.e
a1=g?null:d6.f
if(a1!=null)for(g=$.X.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a2=g[d4]
for(c4=a2.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.t)(c4),++e0){a3=c4[e0]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.a9(a0,"open")||J.a9(a0,"closed")){a5=J.a9(a0,"open")
for(g=$.X.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a6=g[d4]
for(c4=a6.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.t)(c4),++e0){a7=c4[e0]
a7.siY(a5)}}}a8=$.zy()
if(a8!=null&&a8.length!==0)for(g=$.X.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.t)(g),++d4){a9=g[d4]
for(c4=a9.r,c5=c4.length,e0=0;e0<c5;++e0){b0=c4[e0]
if(b0.a===a8)b0.d=$.zz()}}g=$.aD
if(g!=null)g.ly($.X.j())
$.bp.b=$.V.j().d
$.X.j()
g=new A.j(12.9375,1.65,0.825)
$.zf=$.z_=$.z6=g
b1=g.ab(0,new A.j(0,1.3499999999999999,0))
$.jy.b=new A.k9(b1,J.zB(b1,new A.j(0,1.2000000000000002,0)))
$.hA.b=new A.oX()
g=A.yP(B.m)
c1=A.yP(B.m)
c4=new A.rU(B.F,g,c1)
if(!isFinite(0))A.f(B.fR)
if(!B.a.a7(c1,B.a.gaw(g)))A.f(B.hD)
if(c4.a===B.F&&c4.b!==0&&!c4.e)A.f(B.fZ)
$.cc.b=c4
$.ao="hall"
g=c.a
b2=A.EG(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nd($.X.j())){g=b2.b
$.zf=$.z_=$.z6=g
$.ct=b2.c
$.fw=b2.d
$.ao=b2.a
b3=g.ab(0,new A.j(0,1.3499999999999999,0))
g=$.jy.j()
g.slA(b3)
g.b=J.zB(b3,new A.j(0,1.2000000000000002,0))
g=$.jy.j()
c1=$.X.j()
c4=b2.e
c5=b2.f
g.oi($.ao,$.eI(),c1,c5,c4)
A.hK("restored position")}g=A.F5(A.b(e6.document))
g.snt(new A.xj())
g.sba(new A.xk())
g.sb4(new A.xv())
$.hB.b=g
g=A.b(e6.document)
c1=A.b(g.createElement("div"))
c4=new A.rf(g,c1)
c4.aX(g)
c1.className=A.q(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.b(c1.appendChild(A.og(g,B.eR,1)))
A.b(c1.appendChild(A.E(g,"p","settings-copy","The house waits. Choose what to do next.")))
e1=A.E(g,"nav","pause-actions",null)
e1.setAttribute("aria-label","Pause actions")
c4.bs(g,e1,B.dv,"resume")
c4.bs(g,e1,B.dw,"settings")
c4.bs(g,e1,B.dx,"controls")
c4.bs(g,e1,B.dy,"save now")
c4.bs(g,e1,B.dz,"help")
c4.bs(g,e1,B.dA,"credits")
c4.bs(g,e1,B.dB,"back")
A.b(c1.appendChild(e1))
c4.snL(new A.xF())
c4.sba(new A.xG())
c4.snN(new A.xH())
c4.snx(new A.xI())
c4.snM(new A.xJ())
c4.snD(new A.xK())
c4.sny(new A.xL())
c4.sb4(new A.xl())
$.cs.b=c4
c4=$.V.j().e
c1=$.bp.j()
$.V.j()
$.mW.b=new A.q3(c4,c1,new A.xm())
c1=A.b(e6.document)
c4=$.V.j().e
g=$.bp.j()
c5=$.mW.j()
c6=A.b(c1.createElement("div"))
c5=new A.qc(c4,g,c5,c1,c6)
c5.aX(c1)
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
A.b(c6.appendChild(c5.jE()))
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
A.b(e5.style).setProperty("--shake-max-px","2px")}$.jx.b=c5
$.jx.j().sb4(new A.xn())
g=A.b(e6.document)
c1=A.E(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.b(c1.style).setProperty("transition-duration","0.3s")
A.b(A.L(g.body).appendChild(c1))
$.Bn.b=new A.rB(c1)
c1=A.b(e6.document)
g=A.E(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.L(c1.body).appendChild(g))
$.Bm.b=new A.oc(g)
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
$.bc.b=new A.nw(c1,c4,B.M)
$.Br=!0
c4=A.DM(A.b(e6.document))
c4.snw(A.Cy())
c4.snv(A.IW())
$.ax.b=c4
c4=$.cv()
c4.snu(new A.xo())
c4.snz(A.Cy())
c4=c.a
b4=A.Fl(c4==null?null:c4.c.h(0,"visitors"))
if($.cw().Q&&b4!=null&&$.aI.j().ev(b4))A.HQ()
g=$.mU.j()
c1=c.a
g.oj(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.P(b5);g.m();){b6=g.gn()
if(A.aT(b6))$.wV.l(0,b6)}g=A.F9(A.b(e6.document))
g.snO(new A.xp())
g.sb4(new A.xq())
$.mX.b=g
g=A.Ec(A.b(e6.document))
g.sb4(new A.xr())
$.jw.b=g
g=A.DG(A.b(e6.document))
g.sb4(new A.xs())
$.mV.b=g
$.jz.b=A.ly(A.b(e6.document),null)
$.jA.b=A.ly(A.b(e6.document),B.a2)
$.ft.b=A.ly(A.b(e6.document),B.J)
A.n0($.jz.j(),!1)
A.n0($.jA.j(),!0)
A.n0($.ft.j(),!0)
A.Hx()
A.Ha()
$.eA.b=A.Eb(A.b(e6.document))
A.GN()
A.HB()
$.hz.b=A.ly(A.b(e6.document),B.I)
A.n0($.hz.j(),!0)
A.Hy()
$.jv.b=A.ly(A.b(e6.document),B.a3)
A.n0($.jv.j(),!0)
A.HA()
$.jt.b=A.DE(A.b(e6.document))
A.GM()
A.Hz()
g=A.DW(A.b(e6.document))
g.sb4(new A.xt())
g.snA(new A.xu())
$.ju.b=g
g=c.a
b7=A.DY(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.C1(b7)
A.eE("world")
A.C4()
A.b(e6.window).addEventListener("resize",A.W(new A.xw()))
A.b(e6.document).addEventListener("visibilitychange",A.W(new A.xx()))
A.b(e6.window).addEventListener("keydown",A.W(new A.xy()))
A.b(e6.window).addEventListener("keyup",A.W(new A.xz()))
A.b(e6.window).addEventListener("keydown",A.W(new A.xA()))
A.b(e6.window).addEventListener("click",A.W(new A.xB()))
$.v.j().addEventListener("mousemove",A.W(new A.xC()))
$.v.j().addEventListener("click",A.W(new A.xD()))
$.v.j().addEventListener("wheel",A.W(new A.xE()))
A.hG()
A.eE("raf")
A.h(A.b(e6.window).requestAnimationFrame(A.W(A.Cz())))
p=2
s=6
break
case 4:p=3
e8=o.pop()
b8=A.ai(e8)
b9=A.cO(e8)
A.wK(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$ne,r)},
H9(a){var s,r,q,p=$.eD
if(!$.ax.j().y||p==null)return
s=A.BC(a)
if(s==null)return
r=$.cv()
q=p.hV(s.a,s.b)
r.r=q==null?null:q.b},
H8(a){var s,r=$.eD
if(!$.ax.j().y||r==null)return!1
s=A.BC(a)
if(s==null)return!1
return $.cv().n2(r.hV(s.a,s.b))},
BC(a){var s=A.b($.v.j().getBoundingClientRect()),r=A.a7(s.width),q=A.a7(s.height)
if(r<=0||q<=0)return null
return new A.as(A.h(a.clientX)-A.a7(s.left),A.h(a.clientY)-A.a7(s.top))},
Hb(){var s=v.G
A.b(s.window).addEventListener("error",A.W(new A.wy()))
A.b(s.window).addEventListener("unhandledrejection",A.W(new A.wz()))},
eE(a){if($.yG===a)return
$.yG=a
$.v.j().setAttribute("data-boot-phase",a)},
jL(){var s,r,q,p,o,n=null,m=$.fu.j().ghu(),l=$.v.j(),k=A.eq().gb5().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a6(m.B(),n))
k=$.de.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.aD
if(k==null)k="{}"
else{k=k.e
k===$&&A.p()
k=k.as
if(k==null)k=A.f(A.k("renderer is not initialized"))
s=k.a
s.C()
r=s.b
q=A.I(r,A.o(r).c)
B.a.Y(q)
r=t.N
p=t.K
p=B.f.a6(A.F(["profile",A.F(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a6(B.kA,n))
l=$.aD
o=l==null?n:l.x
if(o!=null)$.v.j().setAttribute("data-renderer-profile-fallback",o)},
HI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jP())return
s=$.zy()
if(s!=null&&s.length!==0){r=$.v.j()
q=$.zz()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.yA.j().hL($.V.j().gaf().a)
r=$.v.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.y_()
o=q==null?c:q.e
if(o!=null)$.v.j().setAttribute("data-automation-capture-shutters",o)
$.v.j().setAttribute("data-automation-rain-window-visibility",B.b.I(A.z1($.ao),3))
r=$.v.j()
q=$.yG
n=$.ao
m=$.eI()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.f.a6(A.F(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.F(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.ct,"pitch",$.fw,"modal",$.bd!=null,"dialogueOverlay",$.ax.j().y,"inputEnabled",$.ah.j().ay,"day",$.V.j().gaf().a,"hour",$.V.j().gaf().b],l,k),c))
$.v.j().setAttribute("data-story-journal-entry-count",""+$.V.j().gaf().r)
j=A.m(l,t.X)
for(r=$.X.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.F(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.v.j().setAttribute("data-automation-portals",B.f.a6(j,c))
e=$.mZ
r=!1
if(e!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.ao
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cn("cellar",$.ao)
$.v.j().setAttribute("data-audio-transmission-cellar",B.f.a6(A.F(["sourceRoom","cellar","listenerRoom",$.ao,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.v.j().setAttribute("data-audio-transmission-cellar","unavailable")},
jM(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.cc.j().a!==B.F){A.hK("save unavailable during rupture")
return}try{r=$.yz.j()
q=$.V.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.ao
m=$.eI()
l=$.ct
k=$.fw
j=$.jy.j().d
j=j==null?null:j.a.a
i=$.jy.j().d
J.be(s,"player",new A.ld(n,m,l,k,j,i==null?null:i.b).B())
n=$.aI.j()
m=A.f9(n.b,p)
l=A.f9(n.c,t.T)
n=n.r
J.be(s,"visitors",new A.m_(m,l,n==null?null:new A.jW(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.mU.j().b
n=A.I(n,A.o(n).c)
B.a.Y(n)
J.be(s,"ambient",n)
n=$.vE
if(n!=null)J.be(s,"authoredEvents",A.F(["delivered",n.gmy()],p,o))
n=A.I($.wV,A.o($.wV).c)
B.a.Y(n)
J.be(s,"unverifiables",n)
J.be(s,"inventoryInspections",$.y0().B())
n=$.yL
if(n!=null)J.be(s,"ending",A.F(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.A2(q.c).B()
k=q.d
r.oB(A.AA(s,A.F(["houseSeed",n,"runSeed",m,"house",l,"time",A.F(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hK(a)}catch(h){A.hK("save failed")}},
HG(){var s=A.L(A.b(v.G.document).documentElement),r=s==null?null:A.al(s.getAttribute("data-gameplay-focus-loss")),q=A.bD(new A.H(B.aG,t.rg.a(new A.wG(r)),t.vK),t.x)
switch((q==null?B.b7:q).a){case 0:$.hJ=!0
s=$.bq
if(s!=null)s.eR(!0)
break
case 1:$.hJ=!0
break
case 2:break}},
hK(a){var s=v.G,r=A.L(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.L(A.b(s.document).documentElement)
s=s==null?null:A.al(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.E5(B.fz,new A.wQ(r),t.H)},
wK(a,b){var s,r,q,p
A.eE("error")
s=A.w(a)
r=A.zo(s,"\n"," ")
s=$.yN
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.L(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.q(0)
$.v.j().setAttribute("data-boot-error",p)
if($.jP()&&!q)$.v.j().setAttribute("data-boot-stack",b.q(0))
A.b(s.console).error(p)},
Bw(){var s,r
if($.yE)return
$.yE=!0
s=$.bq
r=s==null
if(!r)s.cm()
if(!r)s.eZ("music")
B.a.l($.dg,"arm")},
hG(){var s=0,r=A.aM(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hG=A.aN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a5(A.hF(),$async$hG)
case 2:o=null
q=4
s=7
return A.a5(A.aE(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$hG)
case 7:n=b
i=A
s=8
return A.a5(A.aE(A.b(n.json()),t.X),$async$hG)
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
l=$.mV.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.a5(A.p9(A.c([A.wB(o),A.wu(o),A.jG()],t.iJ),t.H),$async$hG)
case 9:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$hG,r)},
jG(){var s=0,r=A.aM(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$jG=A.aN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a5(A.aE(A.b(A.b(v.G.window).fetch("res/models/index.json")),t.m),$async$jG)
case 6:o=b
if(!A.Q(o.ok)){k=A.k("HTTP "+A.w(A.nc(o,"status",t.S)))
throw A.a(k)}s=7
return A.a5(A.aE(A.b(o.text()),t.N),$async$jG)
case 7:n=b
m=A.EH(n)
$.v.j().setAttribute("data-renderer-model-packages","validated")
$.v.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.aD
k=k==null?null:k.d4(m)
s=8
return A.a5(k instanceof A.ar?k:A.FP(k,t.H),$async$jG)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.ai(i)
k=$.v.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.v.j().setAttribute("data-renderer-model-package-error",A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$jG,r)},
hF(){var s=0,r=A.aM(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hF=A.aN(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.d9[g]
q=6
s=9
return A.a5(A.aE(A.b(A.b(j.window).fetch(o)),i),$async$hF)
case 9:n=a0
s=10
return A.a5(A.aE(A.b(n.text()),h),$async$hF)
case 10:m=a0
l=A.zI(B.f.ap(m,null))
f=$.X.b
if(f===$.X)A.f(A.a8(""))
l.eC(f)
f=$.v.b
if(f===$.v)A.f(A.a8(""))
f.setAttribute("data-house-manifest","validated")
f=$.v.b
if(f===$.v)A.f(A.a8(""))
f.setAttribute("data-house-manifest-source",o)
f=$.v.b
if(f===$.v)A.f(A.a8(""))
f.setAttribute("data-house-role","provisional-visible-place")
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ai(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.v.j().setAttribute("data-house-manifest","unavailable")
A.b(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.a5(A.n2(),$async$hF)
case 11:s=12
return A.a5(A.n3(),$async$hF)
case 12:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$hF,r)},
n4(){var s=0,r=A.aM(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n4=A.aN(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.d9[f]
p=7
s=10
return A.a5(A.aE(A.b(A.b(i.window).fetch(n)),h),$async$n4)
case 10:m=a0
s=11
return A.a5(A.aE(A.b(m.text()),g),$async$n4)
case 11:l=a0
k=A.zI(B.f.ap(l,null))
k.eD()
e=$.v.b
if(e===$.v)A.f(A.a8(""))
e.setAttribute("data-house-blueprint","validated")
e=$.v.b
if(e===$.v)A.f(A.a8(""))
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
j=A.ai(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:throw A.a(A.k("authored house blueprint unavailable: "+A.w(c)))
case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$n4,r)},
n2(){var s=0,r=A.aM(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$n2=A.aN(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.jy[c]
p=7
s=10
return A.a5(A.aE(A.b(A.b(g.window).fetch(n)),f),$async$n2)
case 10:m=b1
s=11
return A.a5(A.aE(A.b(m.text()),e),$async$n2)
case 11:l=b1
b=B.f.ap(l,null)
b=h.b(b)?b:A.dR("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dR("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aT(a)?a:A.dR("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dR("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aA(a,!0,d):A.dR("assets is not a list")
a4=A.z(a3)
a5=a4.i("G<1,cZ>")
a3=A.I(new A.G(a3,a4.i("cZ(1)").a(A.IS()),a5),a5.i("Y.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aA(a,!0,d):A.dR("placements is not a list")
a5=A.z(a4)
a6=a5.i("G<1,cC>")
a4=A.I(new A.G(a4,a5.i("cC(1)").a(A.IT()),a6),a6.i("Y.E"))
a4.$flags=1
k=new A.pN(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.f(A.a8(""))
k.eC(a1)
$.hD=k
a1=$.aD
if(a1!=null)a1.eP(k)
a1=$.v.b
if(a1===$.v)A.f(A.a8(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.v.b
if(a1===$.v)A.f(A.a8(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.v.b
if(a1===$.v)A.f(A.a8(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ai(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.v.j().setAttribute("data-house-inventory","unavailable")
$.v.j().setAttribute("data-house-inventory-error",A.w(a8))
A.b(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$n2,r)},
n3(){var s=0,r=A.aM(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$n3=A.aN(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hD
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.k9[a4]
p=7
s=10
return A.a5(A.aE(A.b(A.b(a1.window).fetch(m)),a2),$async$n3)
case 10:l=b5
s=11
return A.a5(A.aE(A.b(l.text()),e),$async$n3)
case 11:k=b5
a5=B.f.ap(k,null)
a5=a0.b(a5)?a5:A.hC("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aA(a6,!0,a3):A.hC("emitters is not a list")
a8=A.z(a7)
a9=a8.i("G<1,cY>")
a7=A.I(new A.G(a7,a8.i("cY(1)").a(A.J6()),a9),a9.i("Y.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aT(a6)?a6:A.hC("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hC("sourceRef is not a string")
j=new A.pU(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.f(A.a8(""))
j.ov(a7,b2)
$.BO=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gK(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.be(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.X.b
if(a7===$.X)A.f(A.a8(""))
a8=A.Do(i)
a9=new A.nJ(a7,A.aX(B.dn,e,d),a8)
a9.jh(a8,a7,B.dn)
$.mZ=a9
a7=$.bq
if(a7!=null){a7.ch=a9
a7.bH()}a7=$.v.b
if(a7===$.v)A.f(A.a8(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.v.b
if(a7===$.v)A.f(A.a8(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.v.b
if(a7===$.v)A.f(A.a8(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.v.b
if(a7===$.v)A.f(A.a8(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ai(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.mZ=null
$.v.j().setAttribute("data-audio-planner","unavailable")
$.v.j().setAttribute("data-house-soundscape","unavailable")
$.v.j().setAttribute("data-house-soundscape-error",A.w(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$n3,r)},
yJ(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.P(t.a.b(s)?s:new A.b5(s,A.z(s).i("b5<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.q(q))}},
wu(a){var s=0,r=A.aM(t.H),q,p,o,n,m,l
var $async$wu=A.aN(function(b,c){if(b===1)return A.aJ(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.yJ(A.L(n?null:a.sfx),m,"")
A.yJ(A.L(n?null:a.ir),m,"ir-")
q=A.L(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.q(p))
l=$
s=2
return A.a5(A.nQ(m,$.X.j()),$async$wu)
case 2:o=l.bq=c
o.ch=$.mZ
o.bH()
A.HC()
A.C6(o)
A.yB()
A.C7()
if($.yE){o.cm()
o.eZ("music")}return A.aK(null,r)}})
return A.aL($async$wu,r)},
z9(a,b){var s
A.Cj(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
HN(a){var s,r
try{s=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Bs(a,b){var s
if(a!=="brightness")return
s=A.L(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.w(B.b.A(b,0.6,1.4))+")")},
vD(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.L(A.b(v.G.document).documentElement)
if(r!=null)A.Q(A.b(r.classList).toggle(s,b))
A.mY()},
C7(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a7($.di().a.co(o)),k=A.Q($.di().a.co(n)),j=A.Q($.di().a.co(m))
for(s=[$.jz.j(),$.jA.j(),$.ft.j(),$.hz.j(),$.jv.j()],r=0;r<5;++r)s[r].eQ(o,l)
A.Bs(o,l)
for(s=[$.jz.j(),$.jA.j(),$.ft.j(),$.hz.j(),$.jv.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.vD(n,k)
A.vD(m,j)},
z8(a,b){var s
A.Cj(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
HK(a){var s,r
try{s=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
C6(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.jO[s]
q=$.di().a.b.h(0,r)
j.k(0,r,A.a7(q==null?A.f(A.k("setting missing from profile: "+r)):q))}p=A.Q($.di().a.co("muted"))
o=A.Q($.di().a.co("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.br(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dk(o)
for(q=[$.jz.j(),$.jA.j(),$.ft.j(),$.hz.j()],n=j.$ti.i("cE<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cE(j,j.r,j.e,n);m.m();){k=m.d
l.eQ(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Bu(){var s=$.bq
if(s!=null)A.C6(s)
A.C7()},
HC(){var s,r,q,p,o,n,m,l,k=null
try{k=A.al(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ap(k,null)
if(!t.f.b(r)||!J.a9(r.h(0,"version"),1))A.f(B.h8)
q=A.AC(r.h(0,"requested"))
$.Ce=A.yk(A.AC(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.HK(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.HN(p))}}$.Ce=A.F7(o,r)
A.wH()},
wH(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a6($.di().B(),null))}catch(s){}},
Cj(a,b){var s,r,q,p,o,n,m
switch(A.tz(a).d.a){case 0:r=A.f2(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.di()
q=s
A.tz(a).de(q)
p=t.N
o=t.K
n=A.h3(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dG(n,1)
n=s
A.tz(a).de(n)
o=A.h3(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dG(o,1)
A.wH()}catch(m){if(!(A.ai(m) instanceof A.A))throw m}},
wB(a){var s=0,r=A.aM(t.H),q,p
var $async$wB=A.aN(function(b,c){if(b===1)return A.aJ(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.yJ(A.L(a==null?null:a.tex),p,"")
q=$.aD
q=q==null?null:q.d5(p)
s=2
return A.a5(A.p9(A.c([q==null?A.zX(t.H):q],t.iJ),t.H),$async$wB)
case 2:return A.aK(null,r)}})
return A.aL($async$wB,r)},
C4(){var s,r,q=v.G,p=A.h(A.b(q.window).innerWidth),o=A.h(A.b(q.window).innerHeight),n=$.v.j(),m=p>0?p:800
n.width=m
m=$.v.j()
n=o>0?o:600
m.height=n
s=A.L(A.b(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.h($.v.j().width)
s.height=A.h($.v.j().height)}q=$.eD
if(q!=null)q.dd(A.h($.v.j().width),A.h($.v.j().height))
q=$.fu.j()
n=A.h($.v.j().width)
m=A.h($.v.j().height)
if(q.d!==B.T)A.f(A.k("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.r("pixeldart surface size must be positive",null))
q.b.dd(n,m)
q=$.aD
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.v.j().setAttribute("data-renderer-surface",r)},
H7(){var s,r,q=$.bd
if(q!=null){s=$.ah.j()
if(!s.CW.bj("pause",s.f)){s=$.ah.j()
s=s.CW.bj("secondary",s.f)}else s=!0
if(s){A.GP(q)
return}if($.ah.j().f.a4(0,"GamepadDpadUp")){A.BU(q,-1)
return}if($.ah.j().f.a4(0,"GamepadDpadDown")){A.BU(q,1)
return}s=$.ah.j()
if(s.CW.bj("interact",s.f)){r=A.L(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.q9(r,"click",t.X)}return}s=$.ah.j()
if(s.CW.bj("pause",s.f)){A.jJ($.cs.j())
return}if($.ax.j().y)return
s=$.ah.j()
if(s.CW.bj("journal",s.f))A.jN($.jx.j())
else{s=$.ah.j()
if(s.CW.bj("sleep",s.f))A.jN($.mX.j())}},
GP(a){if(a===$.cs.j()){a.ae()
return}if(a===$.hB.j()||a instanceof A.hi||a instanceof A.ia||a instanceof A.i_){A.dU(a)
return}a.ae()},
BU(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.h(l.length);++r){q=A.L(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.L(A.b(v.G.document).activeElement)
o=B.a.bz(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
HJ(e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6=null,e7="exceeded"
A.a7(e8)
try{s=e8
if(!$.BN){$.yU=s
$.BN=!0}b=s
a=$.yU
if(typeof b!=="number")return b.ab()
r=(b-a)/1000
$.yU=s
b=r
if(typeof b!=="number")return b.di()
if(b<0)r=0
b=r
if(typeof b!=="number")return b.iA()
if(b>0.25)r=0.25
A.Ie(r)
$.ah.j().nS()
b=$.v.j()
a=$.ah.j().z!=null?"standard":"none"
b.setAttribute("data-controller",a)
q=$.ah.j().z
if(q!=null)$.v.j().setAttribute("data-controller-id",q)
else $.v.j().removeAttribute("data-controller-id")
A.H7()
if(!$.hJ&&$.bd==null){b=$.eB
a=r
if(typeof a!=="number")return A.xd(a)
a=$.eB=b+a
p=0
b=t.aA
for(;;){if(a>=0.008333333333333333){a0=p
if(typeof a0!=="number")return a0.di()
a0=a0<10}else a0=!1
if(!a0)break
$.z_=$.eI()
if(!$.zx()){a=$.V.b
if(a===$.V)A.f(A.a8(""))
a.lq(0.008333333333333333*($.cw().Q?1:20))
a=$.D4()
a0=$.V.b
if(a0===$.V)A.f(A.a8(""))
a0=a0.gaf()
a1=$.V.b
if(a1===$.V)A.f(A.a8(""))
a=a.c4(a0.a,a1.gaf().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.t)(a),++a2){o=a[a2]
B.a.l($.dg,"clock:"+o.a)}a=$.D5()
a0=$.V.b
if(a0===$.V)A.f(A.a8(""))
a0=a0.gaf()
a1=$.V.b
if(a1===$.V)A.f(A.a8(""))
a=a.c4(a0.a,a1.gaf().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.t)(a),++a2){n=a[a2]
B.a.l($.dg,"service:"+n.a+":"+n.b)}}A.Ih()
A.Id()
a=$.aI.b
if(a===$.aI)A.f(A.a8(""))
a0=$.V.b
if(a0===$.V)A.f(A.a8(""))
a.w=a0.r.c>=0.5
a=a.f
a3=A.aA(a,!1,b)
a3.$flags=3
a4=a3
B.a.P(a)
if(a4.length!==0){a=$.V.b
if(a===$.V)A.f(A.a8(""))
a.nX(a4)}A.Ic()
A.Ig()
A.If()
A.Ib(0.008333333333333333)
a=$.hA.b
if(a===$.hA)A.f(A.a8(""))
if(a.a!=null)if((a.b-=0.008333333333333333)<=0)a.a=null
a=$.cc.b
if(a===$.cc)A.f(A.a8(""))
m=a.a!==B.F
a0=$.X.b
if(a0===$.X)A.f(A.a8(""))
a.dT(0.008333333333333333,a0)
if(m){a=$.cc.b
if(a===$.cc)A.f(A.a8(""))
a=a.e}else a=!1
if(a)A.C5(!0)
a=$.eB-0.008333333333333333
$.eB=a
a0=p
if(typeof a0!=="number")return a0.a0()
p=a0+1}l=B.b.A(a/0.008333333333333333,0,1)
b=$.zf=A.AN($.D7(),$.eI(),l)
k=$.bq
if(k!=null){a=k
a0=Math.sin($.ct)
a1=Math.cos($.ct)
a5=A.b(a.a.listener)
a5.setPosition(b.a,b.b,b.c)
A.aU(a5,"setOrientation",[a0,0,a1,0,1,0],t.H)
a.iF($.ao)
for(b=$.dg.length,a2=0;a2<$.dg.length;$.dg.length===b||(0,A.t)($.dg),++a2){j=$.dg[a2]
A.GT(k,j)}B.a.P($.dg)
$.v.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.v.j().setAttribute("data-audio-muffle01",B.b.I(k.gno(),3))
b=$.v.j()
a=k.cx?"true":"false"
b.setAttribute("data-audio-music-started",a)
a=$.v.j()
b=k.dx
if(b==null)b="ir-fallback"
a.setAttribute("data-audio-room-ir",b)
b=$.v.j()
b.setAttribute("data-audio-context-suspended",""+(A.q(k.a.state)==="suspended"))
b.setAttribute("data-audio-muted",""+k.k1)
b.setAttribute("data-audio-master-mix",B.b.I(k.fr,3))
b.setAttribute("data-audio-voice-mix",B.b.I(k.fx,3))
a=$.df
b.setAttribute("data-audio-captions",""+(a.e===!0))
b.setAttribute("data-audio-paused",""+$.hJ)}}$.cM.j().hZ($.nh(),$.ct,$.fw)
b=$.aD
if(b!=null){a=$.cM.j()
a0=a.a
a6=new A.B(a0.a,a0.b,a0.c)
a0=a.b
a7=new A.B(a0.a,a0.b,a0.c)
a0=a.c
a8=b.b/b.c
a9=A.Ah(a6,a7,new A.B(a0.a,a0.b,a0.c))
a=a.f
a0=a.b
a1=a.c
b0=A.ye(a8,a1,a.a,a0)
b.rx=new A.fI(a9,b0,b0.a3(0,a9),a6,a7,a0,a1,a8)}b=$.aD
if(b!=null)b.iP($.X.j(),$.ao)
i=$.yA.j().hL($.V.j().gaf().a)
h=B.b.A(1-A.z1($.ao),0,1)
b=$.aD
if(b!=null)b.iE($.X.j(),$.ao,$.nh(),$.bp.j().gf0(),$.bp.j().gms(),i,A.J1($.ao),$.bp.j().b)
b=$.aD
if(b!=null){a=A.Il($.X.j(),$.ao,i.r,$.hD)
a0=t.fu.a(i)
t.A1.a(a)
a1=A.b1(h)
b.cP=A.ac(a,t.qR)
a=a0.r
b1=A.AT(new A.m2(a0,a,0.8,a1,1,0,1,1,0))
b.xr=b1
b.y1=A.Fv(a,b1.z,$.nh(),b.y2)}if(!$.hJ&&$.bd==null){b=r
a=$.cw().Q?1:20
if(typeof b!=="number")return b.a3()
a=B.b.A(b*a,0,0.5)
b=a}else b=0
g=A.Gx(i,b,h)
b=$.aD
if(b!=null)b.iQ(g)
if($.BT!==$.cc.j().a){$.BT=$.cc.j().a
$.z3=$.z3+1}b=$.aD
if(b!=null){if($.zx())a=0
else{a=s
if(typeof a!=="number")return a.oF()
a/=1000}a0=$.z3
a1=A.h(Math.max(0,$.V.j().b))
if(!isFinite(a)||a<0)A.f(A.a3(a,"timeSeconds",e6))
if(a1<0)A.f(A.r("frame clock seeds must be non-negative",e6))
b.eb=a
b.ec=a0
b.ed=a1}b=$.aD
if(b!=null){a=$.cc.j()
a0=$.z2
a1=A.z1($.ao)
b2=a.a
b3=a.geX()
b4=b3>0?B.b.A(a.b/b3,0,1):0
a=b2.a
b5=a>=3
b6=b2===B.bP
b7=$.eH()
b8=b7.ac("post_exposure")
b9=b7.ac("post_bloom")
c0=b7.ac("post_vignette")
c1=b7.ac("post_film_grain")
c2=b7.ac("post_dither")
c3=b7.ac("post_depth_of_field")
c4=b7.ac("post_color_grade")
c5=b7.ac("post_affine_warp")
c6=b7.ac("post_vertex_snap")
c7=B.b.aJ(b7.ac("post_quantization_bits"))
c8=b7.ac("post_vhs_chroma")
c9=b7.ac("post_vhs_noise")
d0=b7.ac("shadow_ao_intensity")
d1=b2===B.a5?0.45:b8
b7=b7.eJ("shadow_ssdo_enable")?d0:0
d2=b.x1
d2=B.b.A(d2,0,1)
d3=b.ca
d3=B.b.A(d3,0,1)
d4=b.cV
d5=b.cW
if(a>=1)d6=b2===B.aP?b4:1
else d6=0
d6=Math.max(c4,d6)
if(a>=2)a=b2===B.bO?b4:1
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
b.to=new A.lf(d1,b9,b7,c3,c0,c1,d2,d3,d4,d5,a1,c2,d6,a,d7,d8,d9,e0,e1,e2,e3,b6?b4:0,a0)
b.x2=B.b.A(a1,0,1)
b.kX()}$.fu.j().f_(A.Ax($.V.j().gi9()))
f=$.aD
if(f!=null){b=$.v.j()
a=f
e4=a.cX
a0=e4==null
a1=a0?e6:e4.b
if(a1==null)a1=0
b7=a0?e6:e4.c
if(b7==null)b7=0
d1=a0?e6:e4.e
if(d1==null)d1=0
d2=a.cY
d3=a.ghO()?"ok":e7
d4=t.N
d5=t.K
d3=A.F(["drawCalls",a1,"triangles",b7,"instances",d1,"frameMs",d2,"budget",d3],d4,d5)
a0=a0?e6:e4.r
if(a0==null)a0=0
a1=a.hH
a1===$&&A.p()
a1=A.F(["gpuBytes",a0,"residentTextures",a1.d.a,"textureVramMb",0],d4,t.S)
a0=a.cS
b7=a.cT
d1=a.cU
d2=a.giq()
a=a.hy
a=a==null?e6:a.c
b.setAttribute("data-renderer-diagnostic-groups",B.f.a6(A.F(["frame",d3,"resources",a1,"atmosphere",A.F(["rainSubmitted",a0,"rainFrustumVisible",b7,"rainFrustumCulled",d1,"weatherPhase",d2,"volumetricSources",a==null?0:a],d4,d5)],d4,t.X),e6))
e=f.gmZ()
if(e!=null){$.v.j().setAttribute("data-renderer-frame-stats",e)
b=$.v.j()
a=f.ghO()?"ok":e7
b.setAttribute("data-renderer-budget",a)}$.v.j().setAttribute("data-renderer-rain-particles",""+f.cS)
$.v.j().setAttribute("data-renderer-rain-particles-requested",""+f.e5)
$.v.j().setAttribute("data-renderer-rain-particles-budget",""+f.e6)
$.v.j().setAttribute("data-renderer-rain-particles-capped",""+f.e7)
$.v.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+f.cT)
$.v.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+f.cU)
$.v.j().setAttribute("data-renderer-weather-phase",f.giq())
b=$.v.j()
a=f.xr
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-wind-mps",B.b.I(a==null?0:a,3))
b=$.v.j()
a=f.xr
a=a==null?e6:a.r
b.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.I(a==null?0:a,8))
b=$.v.j()
a=f.xr
a=a==null?e6:a.w
b.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.I(a==null?0:a,6))
b=$.v.j()
a=f.y1
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-warm-clearance-m",B.b.I(a==null?0:a,4))
$.v.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.I(f.geE(),3))
$.v.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.I(f.gip(),4))
$.v.j().setAttribute("data-renderer-weather-impact-count",""+f.e4)
$.v.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.I(f.cQ,8))
$.v.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.I(f.cR,8))
$.v.j().setAttribute("data-renderer-weather-obstacle-count",""+f.cP.length)}A.eE("running")
A.HI()
b=$.ah.j()
b.as=b.Q=0
a=b.c
a.a4(0,"WheelUp")
a.a4(0,"WheelDown")
b.d.P(0)
b.f.P(0)
A.h(A.b(v.G.window).requestAnimationFrame(A.W(A.Cz())))}catch(e5){d=A.ai(e5)
c=A.cO(e5)
A.wK(d,c)}},
GT(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.i7("confirm")
$.bc.j().aN("interface confirmation")
break
case"ambient-winnow":a.d6("winnow",0.28)
$.bc.j().aN("wind moving through the house")
break
case"ambient-gate":a.d6("gate",0.22)
$.bc.j().aN("distant gate")
break
case"collapse":a.i7("collapse")
$.bc.j().aN("front door shudders and collapses")
break
case"clock:tick":A.n6(a,p,"tick")
break
case"clock:chime":A.n6(a,p,"chime")
break
case"clock:cuckoo":A.n6(a,p,"cuckoo")
break
case"clock:bell":A.n6(a,p,"bell")
break
default:if(B.c.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.n6(a,q,s[2])}}}},
n6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.BO,g=$.hD
if(h==null||g==null)return
s=h.mM(b)
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
break A}if(q!=null)$.bc.j().aN(q)
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.f(A.k("sound room missing: "+o))
m=n.d.a0(0,s.d.a3(0,p))
l=$.mZ
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.k("sound emitter "+s.a+" has no cue for "+c))
a.nR(q,m,s.e,o)
return}q=$.Bz
$.Bz=q+1
o=A.Dp(B.es,r,r+":"+q,m,A.Gz(b,c),q,o)
q=$.ao
q=A.Dl($.nh(),q)
t.gG.a(B.bx)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.k("audio listener room missing: "+q))
j=l.il(p,q,B.bx)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.k("audio cue family missing: "+q))
k=J.aO(i)
k=k.h(i,B.d.S(A.I3(q,o.f),k.gt(i)))
o=o.e
A.ac(j.a,t.N)
a.i8(k,new A.j(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Gz(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dm(a+":"+b),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
p=A.Cv(p,q==null?r.a(q):q)}return p},
Ie(a){var s=$.yN
if(s==null)return
s.textContent=""+B.b.aJ(a>0?1/a:0)+" fps"},
Ib(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.Ca||$.bd!=null){$.ng().a=new A.j(0,0,0)
return}s=$.ah.j()
r=s.cC("moveLeft")?-1:0
if(s.cC("moveRight"))++r
q=s.cC("moveForward")?1:0
if(s.cC("moveBack"))--q
s=s.ay?s.w:new A.j(0,0,0)
p=new A.j(r,0,q).a0(0,s)
o=p.gt(0)>1?p.gah():p
$.ah.j().dq(b3)
n=$.ah.j().Q
m=$.ah.j().as
s=$.fA()
l=s.d?-1:1
k=s.e?-1:1
j=$.ct
i=$.ah.j()
i=i.ay?i.x:0
h=$.fA()
g=h.d?-1:1
$.ct=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.fw
h=$.ah.j()
l=h.ay?h.y:0
j=$.fA()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.fw=i
$.fw=B.b.A(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.j(i*Math.cos($.ct)+j*Math.sin($.ct),0,-i*Math.sin($.ct)+j*Math.cos($.ct)).gah().a3(0,2)
j=$.ng()
if(!isFinite(b3)||b3<0)A.f(A.a3(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a3(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a0(0,f.ab(0,l).a3(0,1-s))
j.a=s
d=$.jy.j().np($.X.j(),$.ao,$.eI(),s.a3(0,b3))
$.z6=d.a
if($.cc.j().a!==B.bQ&&$.cc.j().a!==B.a5)$.ao=d.b
c=B.b.A(j.a.gt(0)/2,0,1)
s=$.D6()
$.z7=s.j2($.z7,$.eI().b,b3)
b=s.lr(b3,c)
s=$.eI()
l=$.z7
$.cM.j().hZ(new A.j(s.a+b.a,l+b.b,s.c+b.c),$.ct,$.fw)
s=$.V.j().z
l=$.vE
l=l==null?b1:l.ghw()
a=A.EE(l==null?B.k5:l,s)
s=$.cM.j()
l=$.X.j()
a0=A.J0(a,s,$.ao,l,$.hD)
l=a0.c
$.Bn.j().iS(l)
a1=A.L(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.zn($.cM.j(),$.X.j(),$.ao)
break
case 1:a3=A.CF($.cM.j(),$.X.j(),$.ao)
break
case 2:a4=A.CG($.cM.j(),$.X.j(),$.ao)
break
case 3:l=$.cM.j()
k=$.X.j()
j=$.hD
a5=A.CE(l,$.ao,k,j)
break
case 4:case 5:break}$.Bm.j().os($.fB().eK($.V.j().gaf().a,"status"),$.ao==="living-room")
l=$.ah.j()
k=l.CW
if(k.bj(b2,l.d)||k.bj(b2,l.f)){l=$.V.j().gaf()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aI.j().hh(21),$.aI.j().gne())
if(l.a===21&&j==="front-door"&&i){s=$.cc.j()
$.X.j()
s.j8(B.fb,A.ac(s.c,t.N))
B.a.l($.dg,"collapse")
A.hK("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bc.j().aN("mantle flame extinguished")}else if($.V.j().j5(1,1)){a2.d=!0
s=$.hA.j()
s.a=a2
s.b=2
$.bc.j().aN("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bc.j()
s.aN(a3.ax?"door opens":"door closes")
s=$.aD
if(s!=null)s.d9($.X.j(),a3.b)
s=$.aD
if(s!=null)s.ep($.X.j(),a3.a)
s=$.bq
if(s!=null)s.bH()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.dn(1)){a4.w=!1
$.bc.j().aN("shutter closes")}}else{a4.w=!0
$.bc.j().aN("shutter opens")}else if(s===B.cD){a6=a.eI()
s=A.z(a6)
l=t.E4
a7=A.bD(new A.H(a6,s.i("l(1)").a(new A.wW(a0)),s.i("H<1>")),l)
if(a7==null)a7=A.bD(a6,l)
if(a7!=null)$.bc.j().bW("noticed",a7.d)}else if(a5!=null){s=$.y0()
if(!a5.x)A.f(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.v.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.HE(a8)
s=$.bc.j()
s.bW("noticed",a9==null?"you inspect "+a8:a9)}}s=$.hA.j()
if(s.a!=null&&s.b>0){b0=$.hA.j().a
if(b0!=null&&A.zn($.cM.j(),$.X.j(),$.ao)!==b0){s=$.hA.j()
s.a=null
s.b=0}}A.HP(b3,a0)},
HP(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.eD
if(b9==null)return
s=A.b($.Bo.j().getBoundingClientRect())
r=A.a7(s.width)
q=A.a7(s.height)
if(r<=0||q<=0)return
p=$.cv()
p.or(c0)
o=$.D3()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.iu(n,m,$.ax.j().y)
o=$.eH()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.X.j()
j=$.ao
h=k.e.h(0,j)
k=!$.ax.j().y&&$.bd==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.V.j().gaf()
b=$.bp.j().b
a=$.cw()
a0=a.y===B.cI
a1=h==null?null:h.a
if(a1==null)a1=$.ao
a=a.z?$.fB().eK($.V.j().gaf().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.P(a3)
a4=A.a7(A.b(v.G.window).devicePixelRatio)
a5=B.b.aC(r*a4)
a6=B.b.aC(q*a4)
a7=a2.a
if(A.h(a7.width)!==a5||A.h(a7.height)!==a6){a7.width=a5
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
a2.mH(n,q,r)}a2.mG(q,r,new A.r6(j,i,g,f,e,d,p))
b0=r-80-24
a2.b0("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.A(B.b.aT(b*60),0,1439)
b2=B.d.ad(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.c.bC(B.d.q(b4),2,"0")+":"+B.c.bC(B.d.q(b3),2,"0")+b5,b0,42)
a7.restore()
a2.b0("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bv(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.b0("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bv(a,b6-28),b7,68)
a7.restore()}a2.mF(l,q,r)
a2.mI(q,r,o)
a7.restore();++b9.b
p=$.v.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ac(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
HE(a){var s,r,q,p,o=$.V.j().z.b,n=A.o(o).i("M<1,2>"),m=A.I(new A.M(o,n),n.i("n.E"))
B.a.V(m,new A.wC())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.fB().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Ih(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cw().Q)return
if($.ax.j().y||$.bd!=null||$.aI.j().r!=null)return
s=$.V.j().gaf()
for(r=$.aI.j().hh(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aI.b
if(m===$.aI)A.f(A.a8(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aI.b
if(r===$.aI)A.f(A.a8(""))
l=r.c5(n)
if(!(l instanceof A.lW))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.A7(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.ng().a=new A.j(0,0,0)
r=$.ax.b
if(r===$.ax)A.f(A.a8(""))
q=n.a
r.eS(q,k)
$.cv().bD(!0,B.bh,q,k)
A.yY()
A.Ch(n)
return}},
Id(){var s,r,q,p,o,n,m=$.vE
if(m==null)return
s=$.V.j().gaf()
for(r=m.c4(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
n=$.V.b
if(n===$.V)A.f(A.a8(""))
if(!n.lu(o))continue
n=$.v.b
if(n===$.v)A.f(A.a8(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
HQ(){var s,r,q=$.aI.j().r,p=q==null,o=p?null:q.gbk()
if(p||o==null)return
p=$.ax.j()
s=q.a
r=s.a
p.eS(r,o)
$.cv().bD(!0,B.bh,r,o)
A.yY()
A.Ch(s)
if(q.d!==B.aa)A.yZ()
A.hK("restored visitor")},
Ch(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().n_("stranger-17-eileen-case")
r=$.fB().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.bD(r,t.N)
if(s==null||p==null)return
$.bc.j().bW("inside the case",p+" \u201c"+s.d+"\u201d")},
Ic(){var s,r,q,p,o,n
if(!$.cw().Q)return
s=$.V.j().gaf()
r=$.mU.j().mK(s.a,s.b)
if(r.length===0)return
q=B.a.gX(r)
$.mU.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bc.j().bW(o,q.e)
n=A.Io(p)
if(n!=null)B.a.l($.dg,"ambient-"+n)},
Ig(){var s,r,q,p,o=$.V.j().gaf()
if(o.b<20)return
s=o.a
if(!$.wV.l(0,s))return
r=$.fB().f
r===$&&A.p()
q=r.h(0,B.d.q(s))
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
p=A.IY(r,$.V.j().b,s)
if(p!=null)$.bc.j().bW("noticed",p)},
C5(a){var s,r,q,p,o
if($.yL!=null)return
s=$.V.j().gaf()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.o(q).i("am<2>")
o=A.DX(new A.oT(s.a,1-r,new A.H(new A.am(q,p),p.i("l(n.E)").a(new A.wM()),p.i("H<n.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.C1(o)
A.jM("ending recorded")},
C1(a){var s,r,q
$.yL=a
$.Ca=!0
$.ng().a=new A.j(0,0,0)
A.jJ($.ju.j())
s=a.a
r=$.fB().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.aA(q,!0,t.N):B.m
r=A.I(r,t.N)
B.a.J(r,A.Ez($.V.j().z,s))
$.ju.j().iV(a,r)},
GH(a){var s,r,q,p
A:{if("open"===a){s=B.aC
break A}if("chain"===a){s=B.cw
break A}if("through-door"===a){s=B.cx
break A}if("letterbox"===a){s=B.cy
break A}s=B.ae
break A}r=$.aI.j().lO(s)
if(s===B.aC){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aD
if(p!=null)p.d9($.X.j(),q.b)
p=$.aD
if(p!=null)p.ep($.X.j(),q.a)
p=$.bq
if(p!=null)p.bH()}}if(!(r instanceof A.lU)||s===B.ae){A.w7()
return}if(r.a.gbk()==null){A.yI()
A.w7()
return}A.yZ()},
GO(){var s=$.aI.j().ls()
if(!(s instanceof A.iT)||s.b){A.yI()
A.w7()
return}if(s.a.gbk()==null){A.yI()
A.w7()
return}A.yZ()},
yZ(){var s,r,q,p,o,n,m,l,k,j=$.aI.j().r,i=j==null,h=i?null:j.gbk()
if(i||h==null)return
s=$.aI.j().gc9()
if(s==null){$.ax.j().iU(h)
$.cv().bD(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.ax.j().eT(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.ax.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.as(k.a,k.b))}m.iW(l,r)
o=$.cv()
m=j.a.a
o.bD(!0,i?q:B.m,m,h)
if(!i){i=A.z(p)
k=A.bD(new A.H(p,i.i("l(1)").a(new A.wI(r)),i.i("H<1>")),t.Y)
if(k!=null){i=$.ax.j()
q=k.c
i.eU(h,q)
o.bD(!0,B.m,m,h+"\n\n"+q)}}}A.Cg()
A.yY()},
yY(){var s,r,q=$.aI.j().r,p=q==null,o=p?null:q.gbk(),n=$.bq
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bC(B.d.q(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.yT===s)return
$.yT=s
r=n.d6(s,1)
p=$.df
if(new A.nC(s,o).o4(p.e===!0,r).length!==0)$.bc.j().aN(o)},
GI(a){var s,r,q,p,o,n=$.aI.j().lP(a)
if(!(n instanceof A.lV))return
s=n.c
if(!$.V.j().lv(n.b,s))return
r=s.c
s=$.ax.j()
q=n.a
p=q.gbk()
s.eU(p==null?"":p,r)
o=q.gbk()
if(o==null)o=""
$.cv().bD(!0,B.m,q.a.a,o+"\n\n"+r)
A.Cg()
A.jM("saved after visitor answer")},
w7(){$.ax.j().hU()
$.cv().P(0)
$.yT=null
$.ah.j().dc($.v.j())},
Cg(){var s,r,q,p,o=$.ax.j(),n=A.b(v.G.document),m=A.c([],t.wt)
for(s=$.mW.j().eL(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.as(p.a,B.a.ga2(p.c).q(0)))}o.iT(n,m)},
GJ(a){var s,r,q,p=$.aI.j().lQ(a,!0,$.mW.j())
if(p==null)return
s=$.mW.j().mq(p,B.jd)
r=$.ax.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.M.bP("",!0,q)
A.jM("saved after visitor citation")},
yI(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aD
if(s!=null)s.d9($.X.j(),r.b)
s=$.aD
if(s!=null)s.ep($.X.j(),r.a)
s=$.bq
if(s!=null)s.bH()}},
If(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cc.b
if(k===$.cc)A.f(A.a8(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
J1(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.bp.j().gf0()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.u){n=$.bp.b
if(n===$.bp)A.f(A.a8(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.p){n=$.bp.b
if(n===$.bp)A.f(A.a8(""))
n=n.b>12}else n=!1
if(!n){if(o===B.af){n=$.bp.b
if(n===$.bp)A.f(A.a8(""))
n=n.b<9}else n=!1
if(!n)if(o===B.ag){o=$.bp.b
if(o===$.bp)A.f(A.a8(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
z1(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.k4
if(q.length===0)return 0.12
s=A.z(q)
return B.b.A(new A.H(q,s.i("l(1)").a(new A.wJ()),s.i("H<1>")).gt(0)/q.length,0.12,1)},
Gx(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.aD
if(a0!=null){s=$.X.j()
r=$.ao
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.AT(new A.m2(a1,q,B.b.A(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.Im.cl($.ao,A.Je())
n=isFinite(a0.geE())?a0.geE():q
m=B.b.A(a0.gip(),0,1)
l=B.b.A((n-q)*8,0,400)
s=B.b.A(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.r("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.aJ&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
g=Math.min(Math.max(0,0.5-j),h)
r=o.a=j+Math.max(0,g)
k=Math.max(0,l)
f=n>0.5
e=f?Math.min(r,k*a2/4008e4):0
o.a=r-e
o.b=i+e
d=f?B.b.A((n-0.5)*(1-s)*2e-8,0,0.000002):0
s=o.b
c=Math.min(s,d*a2)
o.b=s-c
s=f?B.b.A((n-0.5)/12,0,1):0
b=Math.max(m*0.8,Math.max(s,B.b.A(l/250,0,1)))
s=Math.exp(-a2/900)
r=o.c
s=r+(b-r)*(1-s)
o.c=s
a=Math.max(0,h-g)
o.ha()
r=o.a
return new A.ux(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
Il(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.dc
s=a3.aE(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=A.c([new A.fg("floor:"+r,new A.j(p,o,q),new A.j(p+s.a,o+0.05,q+s.c),a5,0.12)],t.uI)
if(a6==null)return n
for(r=a6.i6(r),m=J.P(r.a),r=new A.T(m,r.b,r.$ti.i("T<1>")),l=a6.c;r.m();){k=m.gn()
j=k.c
i=!0
if(k.d!=="renderer-reference"){h=k.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.p(j.toLowerCase(),"stair")}if(i)continue
g=a6.bI(j)
j=k.f.a
f=k.ig(g,l)
e=k.ey(g,l)
i=e.a
h=e.b
d=p+j.a*l
c=o+(j.b*l+(i+h)*0.5)
j=q+j.c*l
b=f.a
i=Math.max(0.005,(h-i)*0.5)
h=f.c
a=k.Q>0?k.as:a5
k=k.a
a0=g.b==="textile"?0.08:0.28
if(isFinite(d)&&isFinite(c)&&isFinite(j))a1=!(isFinite(b)&&isFinite(i)&&isFinite(h))||b<0||i<0||h<0
else a1=!0
if(a1)A.f(A.r("collision box centre/extents must be finite",null))
k=new A.fg("inventory:"+k,new A.j(d-b,c-i,j-h),new A.j(d+b,c+i,j+h),a,a0)
k.C()
B.a.l(n,k)}return A.ac(n,t.qR)},
ht:function ht(a,b){this.a=a
this.b=b},
my:function my(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
_.y1=_.xr=null
_.y2=b1
_.cP=b2
_.cR=_.cQ=_.e4=0
_.hy=null
_.hz=2.25
_.cU=_.cT=_.e6=_.cS=_.e5=0
_.e7=!1
_.hD=_.hC=_.hB=_.hA=_.e9=_.e8=null
_.hE=7
_.cW=_.cV=_.ca=_.hF=_.ea=0
_.cX=null
_.hG=_.mS=_.ed=_.ec=_.eb=_.cY=0
_.aF=!1
_.cZ=null
_.cc=_.cb=0
_.ce=_.cd=null
_.hH=_.mT=$
_.hI=null
_.hJ=0},
vh:function vh(a){this.a=a},
vk:function vk(a,b){this.a=a
this.b=b},
vl:function vl(a){this.a=a},
va:function va(){},
vi:function vi(){},
vj:function vj(){},
vm:function vm(a){this.a=a},
vn:function vn(a){this.a=a},
vf:function vf(a,b,c){this.a=a
this.b=b
this.c=c},
vg:function vg(a,b){this.a=a
this.b=b},
vb:function vb(){},
vc:function vc(){},
vd:function vd(){},
ve:function ve(){},
v8:function v8(){},
v9:function v9(){},
v4:function v4(){},
v5:function v5(){},
v6:function v6(){},
v7:function v7(){},
mx:function mx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uJ:function uJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vZ:function vZ(){},
w_:function w_(){},
w0:function w0(){},
w1:function w1(){},
w2:function w2(){},
w3:function w3(a){this.a=a},
w4:function w4(a){this.a=a},
w5:function w5(a){this.a=a},
vU:function vU(a){this.a=a},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vY:function vY(){},
vO:function vO(){},
vP:function vP(){},
vQ:function vQ(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
wx:function wx(a,b){this.a=a
this.b=b},
wv:function wv(a){this.a=a},
ww:function ww(a){this.a=a},
xi:function xi(a,b){this.a=a
this.b=b},
xj:function xj(){},
xk:function xk(){},
xv:function xv(){},
xF:function xF(){},
xG:function xG(){},
xH:function xH(){},
xI:function xI(){},
xJ:function xJ(){},
xK:function xK(){},
xL:function xL(){},
xl:function xl(){},
xm:function xm(){},
xn:function xn(){},
xo:function xo(){},
xp:function xp(){},
xq:function xq(){},
xr:function xr(){},
xs:function xs(){},
xt:function xt(){},
xu:function xu(){},
xw:function xw(){},
xx:function xx(){},
xy:function xy(){},
xz:function xz(){},
xA:function xA(){},
xB:function xB(){},
xC:function xC(){},
xD:function xD(){},
xE:function xE(){},
wy:function wy(){},
wz:function wz(){},
wG:function wG(a){this.a=a},
wQ:function wQ(a){this.a=a},
wW:function wW(a){this.a=a},
wC:function wC(){},
wM:function wM(){},
wI:function wI(a){this.a=a},
wJ:function wJ(){},
CI(a){return v.mangledGlobalNames[a]},
A7(a,b,c,d,e,f){var s=a[b]()
return s},
q9(a,b,c){var s=null
return c.a(A.A7(a,b,s,s,s,s))},
Ak(a,b){var s,r,q,p=A.I(B.cr.bw(B.f.a6(a.ii(!1),null)),t.S),o=A.o(b).i("ab<1>"),n=A.I(new A.ab(b,o),o.i("n.E"))
B.a.Y(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.t)(n),++s){r=n[s]
B.a.J(p,B.cr.bw(r))
B.a.l(p,0)
q=b.h(0,r)
q.toString
B.a.J(p,q)}return A.F8(p)},
IG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a.c!=null)return a
s=a.a
r=s.b
q=t.S
p=A.m(t.N,q)
o=A.c([],t.n)
n=a.b
m=n.length
l=B.d.bc(m,r)
k=A.d_(l,0,!1,q)
for(q=r*4,j=0;j<l;++j){i=j*r
h=B.R.U(J.De(B.q.gdU(n),n.byteOffset+i*4,q),",")
g=p.h(0,h)
if(g!=null){B.a.k(k,j,g)
continue}f=p.a
p.k(0,h,f)
B.a.k(k,j,f)
for(e=0;e<r;++e){d=i+e
if(!(d<m))return A.d(n,d)
B.a.l(o,n[d])}}c=B.d.bc(o.length,r)>65536?new Uint32Array(A.a1(k)):new Uint16Array(A.a1(k))
return new A.bQ(s,new Float32Array(A.a1(o)),c,a.d)},
xQ(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.a(A.a3(b.gn8(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.a9()
o=q*16
n=o+16
B.q.dl(s,o,n,p.a)
if(l)B.q.dl(r,o,n,p.ej().a)}m=a.a
A.x(m,"uInstanceModels",new A.y(B.e5,s))
if(l)A.x(m,"uInstanceNormalMatrices",new A.y(B.e5,r))
A.x(m,"uUseInstances",B.e6)},
DK(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
DJ(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Cv(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Io(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
ch(a,b,c){var s=B.b.A(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bb(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
IF(a){var s,r,q,p,o,n,m,l=B.f.ap(a,null),k=t.f
if(!k.b(l))throw A.a(B.hU)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.kb[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aZ(m,s,r))
else throw A.a(A.N('text.json section "'+n+'" must be an object',null,null))}return p},
IY(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbb(a)
s=new A.ew()
s.bY((b^274953^c)>>>0)
r=s.aW(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.y7.prototype={}
J.kO.prototype={
aa(a,b){return a===b},
gR(a){return A.iA(a)},
q(a){return"Instance of '"+A.lj(a)+"'"},
ga8(a){return A.dh(A.yQ(this))}}
J.kQ.prototype={
q(a){return String(a)},
gR(a){return a?519018:218159},
ga8(a){return A.dh(t.y)},
$iak:1,
$il:1}
J.id.prototype={
aa(a,b){return null==b},
q(a){return"null"},
gR(a){return 0},
$iak:1,
$iav:1}
J.ig.prototype={$iaj:1}
J.ei.prototype={
gR(a){return 0},
ga8(a){return B.ni},
q(a){return String(a)}}
J.lc.prototype={}
J.fd.prototype={}
J.dy.prototype={
q(a){var s=a[$.CM()]
if(s==null)s=a[$.xY()]
if(s==null)return this.jb(a)
return"JavaScript function for "+J.bY(s)},
$ieT:1}
J.h0.prototype={
gR(a){return 0},
q(a){return String(a)}}
J.h1.prototype={
gR(a){return 0},
q(a){return String(a)}}
J.u.prototype={
cN(a,b){return new A.b5(a,A.z(a).i("@<1>").N(b).i("b5<1,2>"))},
l(a,b){A.z(a).c.a(b)
a.$flags&1&&A.b3(a,29)
a.push(b)},
o_(a,b){var s
a.$flags&1&&A.b3(a,"removeAt",1)
s=a.length
if(b>=s)throw A.a(A.Au(b,null))
return a.splice(b,1)[0]},
a4(a,b){var s
a.$flags&1&&A.b3(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.z(a).i("n<1>").a(b)
a.$flags&1&&A.b3(a,"addAll",2)
if(Array.isArray(b)){this.jx(a,b)
return}for(s=J.P(b);s.m();)a.push(s.gn())},
jx(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.ay(a))
for(r=0;r<s;++r)a.push(b[r])},
P(a){a.$flags&1&&A.b3(a,"clear","clear")
a.length=0},
bp(a,b,c){var s=A.z(a)
return new A.G(a,s.N(c).i("1(2)").a(b),s.i("@<1>").N(c).i("G<1,2>"))},
U(a,b){var s,r=A.d_(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bn(a,b,c,d){var s,r,q
d.a(b)
A.z(a).N(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.ay(a))}return r},
b2(a,b,c){var s,r,q,p=A.z(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.a(A.ay(a))}if(c!=null)return c.$0()
throw A.a(A.cD())},
aq(a,b){return this.b2(a,b,null)},
a5(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
av(a,b,c){var s=a.length
if(b>s)throw A.a(A.b_(b,0,s,"start",null))
if(c<b||c>s)throw A.a(A.b_(c,b,s,"end",null))
if(b===c)return A.c([],A.z(a))
return A.c(a.slice(b,c),A.z(a))},
gX(a){if(a.length>0)return a[0]
throw A.a(A.cD())},
ga2(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.cD())},
gbb(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.a(A.cD())
throw A.a(A.A3())},
O(a,b){var s,r
A.z(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.ay(a))}return!1},
a7(a,b){var s,r
A.z(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.ay(a))}return!0},
V(a,b){var s,r,q,p,o,n=A.z(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.b3(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Hg()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.iA()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hO(b,2))
if(p>0)this.kV(a,p)},
Y(a){return this.V(a,null)},
kV(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dm(a,b){var s,r,q,p
a.$flags&2&&A.b3(a,"shuffle")
s=a.length
while(s>1){r=b.aW(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bz(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a9(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gM(a){return a.length===0},
gZ(a){return a.length!==0},
q(a){return A.y5(a,"[","]")},
gu(a){return new J.eL(a,a.length,A.z(a).i("eL<1>"))},
gR(a){return A.iA(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.b3(a,"set length","change the length of")
if(b<0)throw A.a(A.b_(b,0,null,"newLength",null))
if(b>a.length)A.z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.x7(a,b))
return a[b]},
k(a,b,c){A.z(a).c.a(c)
a.$flags&2&&A.b3(a)
if(!(b>=0&&b<a.length))throw A.a(A.x7(a,b))
a[b]=c},
eF(a,b){return new A.dM(a,b.i("dM<0>"))},
ef(a,b){var s
A.z(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga8(a){return A.dh(A.z(a))},
$iS:1,
$in:1,
$iK:1}
J.kP.prototype={
oq(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lj(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qa.prototype={}
J.eL.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iad:1}
J.h_.prototype={
G(a,b){var s
A.a7(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcg(b)
if(this.gcg(a)===s)return 0
if(this.gcg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcg(a){return a===0?1/a<0:a<0},
aC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.bm(""+a+".toInt()"))},
hm(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.bm(""+a+".ceil()"))},
aT(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.a(A.bm(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.bm(""+a+".round()"))},
A(a,b,c){if(this.G(b,c)>0)throw A.a(A.x0(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
I(a,b){var s
if(b>20)throw A.a(A.b_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcg(a))return"-"+s
return s},
eA(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.b_(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.f(A.bm("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a3("0",o)},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR(a){var s,r,q,p,o=a|0
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
bc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h1(a,b)},
ad(a,b){return(a|0)===a?a/b|0:this.h1(a,b)},
h1(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.bm("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dR(a,b){var s
if(a>0)s=this.h_(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
l4(a,b){if(0>b)throw A.a(A.x0(b))
return this.h_(a,b)},
h_(a,b){return b>31?0:a>>>b},
iX(a,b){if(b<0)throw A.a(A.x0(b))
return this.l5(a,b)},
l5(a,b){if(b>31)return 0
return a>>>b},
ga8(a){return A.dh(t.o)},
$ibh:1,
$iC:1,
$ibr:1}
J.ic.prototype={
ga8(a){return A.dh(t.S)},
$iak:1,
$ii:1}
J.kR.prototype={
ga8(a){return A.dh(t.i)},
$iak:1}
J.eh.prototype={
hg(a,b){return new A.mK(b,a,0)},
bm(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aO(a,r-s)},
j6(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.ie){s=b.e
s=!(s==null?b.e=b.jR():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.k_(a,b)}},
bT(a,b,c,d){var s=A.f4(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
k_(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Dd(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.geY()
n=p.ge3()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.H(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aO(a,r))
return m},
am(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.am(a,b,0)},
H(a,b,c){return a.substring(b,A.f4(b,c,a.length))},
aO(a,b){return this.H(a,b,null)},
b7(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.Eo(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.Ep(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.f5)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
d_(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bz(a,b){return this.d_(a,b,0)},
p(a,b){return A.J7(a,b,0)},
G(a,b){var s
A.q(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
q(a){return a},
gR(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga8(a){return A.dh(t.N)},
gt(a){return a.length},
$iak:1,
$ibh:1,
$ira:1,
$ie:1}
A.et.prototype={
gu(a){return new A.hW(J.P(this.gb8()),A.o(this).i("hW<1,2>"))},
gt(a){return J.cP(this.gb8())},
gM(a){return J.jT(this.gb8())},
gZ(a){return J.Dh(this.gb8())},
a5(a,b){return A.o(this).y[1].a(J.ni(this.gb8(),b))},
gX(a){return A.o(this).y[1].a(J.zF(this.gb8()))},
p(a,b){return J.zE(this.gb8(),b)},
q(a){return J.bY(this.gb8())}}
A.hW.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iad:1}
A.eP.prototype={
gb8(){return this.a}}
A.j0.prototype={$iS:1}
A.iZ.prototype={
h(a,b){return this.$ti.y[1].a(J.aV(this.a,b))},
k(a,b,c){var s=this.$ti
J.be(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.Di(this.a,b)},
l(a,b){var s=this.$ti
J.eJ(this.a,s.c.a(s.y[1].a(b)))},
$iS:1,
$iK:1}
A.b5.prototype={
cN(a,b){return new A.b5(this.a,this.$ti.i("@<1>").N(b).i("b5<1,2>"))},
gb8(){return this.a}}
A.h2.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.dm.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.t1.prototype={
gE(){return 0}}
A.S.prototype={}
A.Y.prototype={
gu(a){var s=this
return new A.an(s,s.gt(s),A.o(s).i("an<Y.E>"))},
gM(a){return this.gt(this)===0},
gX(a){if(this.gt(this)===0)throw A.a(A.cD())
return this.a5(0,0)},
p(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a9(r.a5(0,s),b))return!0
if(q!==r.gt(r))throw A.a(A.ay(r))}return!1},
a7(a,b){var s,r,q=this
A.o(q).i("l(Y.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a5(0,r)))return!1
if(s!==q.gt(q))throw A.a(A.ay(q))}return!0},
O(a,b){var s,r,q=this
A.o(q).i("l(Y.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a5(0,r)))return!0
if(s!==q.gt(q))throw A.a(A.ay(q))}return!1},
U(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.a5(0,0))
if(o!==p.gt(p))throw A.a(A.ay(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.a5(0,q))
if(o!==p.gt(p))throw A.a(A.ay(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.a5(0,q))
if(o!==p.gt(p))throw A.a(A.ay(p))}return r.charCodeAt(0)==0?r:r}},
ni(a){return this.U(0,"")},
dg(a,b){return this.ja(0,A.o(this).i("l(Y.E)").a(b))},
bp(a,b,c){var s=A.o(this)
return new A.G(this,s.N(c).i("1(Y.E)").a(b),s.i("@<Y.E>").N(c).i("G<1,2>"))},
bV(a,b){var s=A.o(this).i("Y.E")
if(b)s=A.I(this,s)
else{s=A.I(this,s)
s.$flags=1
s=s}return s},
bU(a){return this.bV(0,!0)},
b6(a){var s,r=this,q=A.ya(A.o(r).i("Y.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a5(0,s))
return q}}
A.iP.prototype={
gk8(){var s=J.cP(this.a),r=this.c
if(r==null||r>s)return s
return r},
gl6(){var s=J.cP(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cP(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a5(a,b){var s=this,r=s.gl6()+b
if(b<0||r>=s.gk8())throw A.a(A.q0(b,s.gt(0),s,"index"))
return J.ni(s.a,r)},
bV(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aO(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.A5(0,n):J.A4(0,n)}r=A.d_(s,m.a5(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a5(n,o+q))
if(m.gt(n)<l)throw A.a(A.ay(p))}return r},
bU(a){return this.bV(0,!0)}}
A.an.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aO(q),o=p.gt(q)
if(r.b!==o)throw A.a(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a5(q,s);++r.c
return!0},
$iad:1}
A.cF.prototype={
gu(a){return new A.ik(J.P(this.a),this.b,A.o(this).i("ik<1,2>"))},
gt(a){return J.cP(this.a)},
gM(a){return J.jT(this.a)},
gX(a){return this.b.$1(J.zF(this.a))},
a5(a,b){return this.b.$1(J.ni(this.a,b))}}
A.dn.prototype={$iS:1}
A.ik.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.G.prototype={
gt(a){return J.cP(this.a)},
a5(a,b){return this.b.$1(J.ni(this.a,b))}}
A.H.prototype={
gu(a){return new A.T(J.P(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iad:1}
A.i4.prototype={
gu(a){return new A.i5(J.P(this.a),this.b,B.eY,this.$ti.i("i5<1,2>"))}}
A.i5.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.P(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iad:1}
A.i2.prototype={
m(){return!1},
gn(){throw A.a(A.cD())},
$iad:1}
A.dM.prototype={
gu(a){return new A.iV(J.P(this.a),this.$ti.i("iV<1>"))}}
A.iV.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iad:1}
A.az.prototype={
st(a,b){throw A.a(A.bm("Cannot change the length of a fixed-length list"))},
l(a,b){A.cf(a).i("az.E").a(b)
throw A.a(A.bm("Cannot add to a fixed-length list"))}}
A.eo.prototype={
k(a,b,c){A.o(this).i("eo.E").a(c)
throw A.a(A.bm("Cannot modify an unmodifiable list"))},
st(a,b){throw A.a(A.bm("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("eo.E").a(b)
throw A.a(A.bm("Cannot add to an unmodifiable list"))}}
A.hn.prototype={}
A.bG.prototype={
gt(a){return J.cP(this.a)},
a5(a,b){var s=this.a,r=J.aO(s)
return r.a5(s,r.gt(s)-1-b)}}
A.js.prototype={}
A.as.prototype={$r:"+(1,2)",$s:1}
A.fs.prototype={$r:"+height,width(1,2)",$s:2}
A.jc.prototype={$r:"+influence,light(1,2)",$s:3}
A.aC.prototype={$r:"+(1,2,3)",$s:4}
A.bb.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.jd.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.je.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:7}
A.hZ.prototype={}
A.fM.prototype={
gM(a){return this.gt(this)===0},
gZ(a){return this.gt(this)!==0},
q(a){return A.yc(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.DC()},
gK(){return new A.bB(this.mQ(),A.o(this).i("bB<O<1,2>>"))},
mQ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gK(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga_(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("O<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.O(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bq(a,b,c,d){var s=A.m(c,d)
this.aG(0,new A.ot(this,A.o(this).N(c).N(d).i("O<1,2>(3,4)").a(b),s))
return s},
$iU:1}
A.ot.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a2.prototype={
gt(a){return this.b.length},
gfC(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
L(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.L(b))return null
return this.b[this.a[b]]},
aG(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfC()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga_(){return new A.fo(this.gfC(),this.$ti.i("fo<1>"))},
gai(){return new A.fo(this.b,this.$ti.i("fo<2>"))}}
A.fo.prototype={
gt(a){return this.a.length},
gM(a){return 0===this.a.length},
gZ(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dO(s,s.length,this.$ti.i("dO<1>"))}}
A.dO.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iad:1}
A.cV.prototype={
bg(){var s=this,r=s.$map
if(r==null){r=new A.eX(s.$ti.i("eX<1,2>"))
A.Cp(s.a,r)
s.$map=r}return r},
L(a){return this.bg().L(a)},
h(a,b){return this.bg().h(0,b)},
aG(a,b){this.$ti.i("~(1,2)").a(b)
this.bg().aG(0,b)},
ga_(){var s=this.bg()
return new A.ab(s,A.o(s).i("ab<1>"))},
gai(){var s=this.bg()
return new A.am(s,A.o(s).i("am<2>"))},
gt(a){return this.bg().a}}
A.fN.prototype={
l(a,b){A.o(this).c.a(b)
A.DD()}}
A.aY.prototype={
gt(a){return this.b},
gM(a){return this.b===0},
gZ(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dO(s,s.length,r.$ti.i("dO<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b6(a){return A.eY(this,this.$ti.c)}}
A.fX.prototype={
gt(a){return this.a.length},
gM(a){return this.a.length===0},
gZ(a){return this.a.length!==0},
gu(a){var s=this.a
return new A.dO(s,s.length,this.$ti.i("dO<1>"))},
bg(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.eX(o.$ti.i("eX<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
n.k(0,p,p)}o.$map=n}return n},
p(a,b){return this.bg().L(b)},
b6(a){return A.eY(this,this.$ti.c)}}
A.ry.prototype={
$0(){return B.b.aT(1000*this.a.now())},
$S:33}
A.iH.prototype={}
A.u5.prototype={
b3(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.it.prototype={
q(a){return"Null check operator used on a null value"}}
A.kS.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lN.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.r3.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.i3.prototype={}
A.jg.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id6:1}
A.e8.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.CJ(r==null?"unknown":r)+"'"},
ga8(a){var s=A.zi(this)
return A.dh(s==null?A.cf(this):s)},
$ieT:1,
goE(){return this},
$C:"$1",
$R:1,
$D:null}
A.ka.prototype={$C:"$0",$R:0}
A.kb.prototype={$C:"$2",$R:2}
A.lK.prototype={}
A.lG.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.CJ(s)+"'"}}
A.fF.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fF))return!1
return this.$_target===b.$_target&&this.a===b.a},
gR(a){return(A.nf(this.a)^A.iA(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lj(this.a)+"'")}}
A.lt.prototype={
q(a){return"RuntimeError: "+this.a}}
A.cl.prototype={
gt(a){return this.a},
gM(a){return this.a===0},
gZ(a){return this.a!==0},
ga_(){return new A.ab(this,A.o(this).i("ab<1>"))},
gai(){return new A.am(this,A.o(this).i("am<2>"))},
gK(){return new A.M(this,A.o(this).i("M<1,2>"))},
L(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.n9(a)},
n9(a){var s=this.d
if(s==null)return!1
return this.cf(this.fz(s,a),a)>=0},
J(a,b){A.o(this).i("U<1,2>").a(b).aG(0,new A.qj(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.na(b)},
na(a){var s,r,q=this.d
if(q==null)return null
s=this.fz(q,a)
r=this.cf(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.f4(s==null?q.b=q.dN():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.f4(r==null?q.c=q.dN():r,b,c)}else q.nc(b,c)},
nc(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dN()
r=o.d0(a)
q=s[r]
if(q==null)s[r]=[o.dO(a,b)]
else{p=o.cf(q,a)
if(p>=0)q[p].b=b
else q.push(o.dO(a,b))}},
cl(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.L(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a4(a,b){var s=this
if(typeof b=="string")return s.f1(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.f1(s.c,b)
else return s.nb(b)},
nb(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.d0(a)
r=n[s]
q=o.cf(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f2(p)
if(r.length===0)delete n[s]
return p.b},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dr()}},
aG(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.ay(q))
s=s.c}},
f4(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dO(b,c)
else s.b=c},
f1(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f2(s)
delete a[b]
return s.b},
dr(){this.r=this.r+1&1073741823},
dO(a,b){var s=this,r=A.o(s),q=new A.qt(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dr()
return q},
f2(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dr()},
d0(a){return J.aF(a)&1073741823},
fz(a,b){return a[this.d0(b)]},
cf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
q(a){return A.yc(this)},
dN(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iy9:1}
A.qj.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.qt.prototype={}
A.ab.prototype={
gt(a){return this.a.a},
gM(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bP(s,s.r,s.e,this.$ti.i("bP<1>"))},
p(a,b){return this.a.L(b)}}
A.bP.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iad:1}
A.am.prototype={
gt(a){return this.a.a},
gM(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ae(s,s.r,s.e,this.$ti.i("ae<1>"))}}
A.ae.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iad:1}
A.M.prototype={
gt(a){return this.a.a},
gM(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cE(s,s.r,s.e,this.$ti.i("cE<1,2>"))}}
A.cE.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.O(s.a,s.b,r.$ti.i("O<1,2>"))
r.c=s.c
return!0}},
$iad:1}
A.eX.prototype={
d0(a){return A.Iz(a)&1073741823},
cf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.xe.prototype={
$1(a){return this.a(a)},
$S:15}
A.xf.prototype={
$2(a,b){return this.a(a,b)},
$S:86}
A.xg.prototype={
$1(a){return this.a(A.q(a))},
$S:31}
A.bL.prototype={
ga8(a){return A.dh(this.fA())},
fA(){return A.IL(this.$r,this.dI())},
q(a){return this.h7(!1)},
h7(a){var s,r,q,p,o,n=this.kc(),m=this.dI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.Ar(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kc(){var s,r=this.$s
while($.vo.length<=r)B.a.l($.vo,null)
s=$.vo[r]
if(s==null){s=this.jQ()
B.a.k($.vo,r,s)}return s},
jQ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.y6(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ac(j,k)}}
A.ex.prototype={
dI(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.ex&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gR(a){return A.d1(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.dP.prototype={
dI(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.dP&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
gR(a){var s=this
return A.d1(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.ie.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkv(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.A9(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
jR(){var s,r=this.a
if(!B.c.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hg(a,b){return new A.m8(this,b,0)},
kb(a,b){var s,r=this.gkv()
if(r==null)r=A.fv(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mt(s)},
$ira:1,
$iEU:1}
A.mt.prototype={
geY(){return this.b.index},
ge3(){var s=this.b
return s.index+s[0].length},
$ih6:1,
$iiB:1}
A.m8.prototype={
gu(a){return new A.m9(this.a,this.b,this.c)}}
A.m9.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kb(l,s)
if(p!=null){m.d=p
o=p.ge3()
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
$iad:1}
A.iO.prototype={
ge3(){return this.a+this.c.length},
$ih6:1,
geY(){return this.a}}
A.mK.prototype={
gu(a){return new A.mL(this.a,this.b,this.c)},
gX(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.iO(r,s)
throw A.a(A.cD())}}
A.mL.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.iO(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iad:1}
A.uK.prototype={
j(){var s=this.b
if(s===this)throw A.a(A.a8(""))
return s}}
A.ej.prototype={
ga8(a){return B.nb},
hj(a,b,c){A.vI(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hi(a,b,c){A.vI(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iak:1,
$iej:1}
A.h8.prototype={$ih8:1}
A.ir.prototype={
gdU(a){if(((a.$flags|0)&2)!==0)return new A.vv(a.buffer)
else return a.buffer},
ko(a,b,c,d){var s=A.b_(b,0,c,d,null)
throw A.a(s)},
fb(a,b,c,d){if(b>>>0!==b||b>c)this.ko(a,b,c,d)}}
A.vv.prototype={
hj(a,b,c){var s=A.Am(this.a,b,c)
s.$flags=3
return s},
hi(a,b,c){var s=A.EB(this.a,b,c)
s.$flags=3
return s}}
A.l1.prototype={
ga8(a){return B.nc},
$iak:1}
A.bi.prototype={
gt(a){return a.length},
fX(a,b,c,d,e){var s,r,q=a.length
this.fb(a,b,q,"start")
this.fb(a,c,q,"end")
if(b>c)throw A.a(A.b_(b,0,c,null,null))
s=c-b
if(e<0)throw A.a(A.r(e,null))
r=d.length
if(r-e<s)throw A.a(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic_:1}
A.ip.prototype={
h(a,b){A.dT(b,a,a.length)
return a[b]},
k(a,b,c){A.b1(c)
a.$flags&2&&A.b3(a)
A.dT(b,a,a.length)
a[b]=c},
dl(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.b3(a,5)
this.fX(a,b,c,d,0)
return},
$iS:1,
$in:1,
$iK:1}
A.iq.prototype={
k(a,b,c){A.h(c)
a.$flags&2&&A.b3(a)
A.dT(b,a,a.length)
a[b]=c},
iM(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.b3(a,5)
this.fX(a,b,c,d,e)
return},
$iS:1,
$in:1,
$iK:1}
A.io.prototype={
ga8(a){return B.nd},
av(a,b,c){return new Float32Array(a.subarray(b,A.BD(b,c,a.length)))},
$iak:1,
$ip2:1}
A.l2.prototype={
ga8(a){return B.ne},
$iak:1}
A.l3.prototype={
ga8(a){return B.nf},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1}
A.l4.prototype={
ga8(a){return B.ng},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1}
A.l5.prototype={
ga8(a){return B.nh},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1}
A.l6.prototype={
ga8(a){return B.nk},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1,
$iu7:1}
A.l7.prototype={
ga8(a){return B.nl},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1,
$iu8:1}
A.f0.prototype={
ga8(a){return B.nm},
gt(a){return a.length},
h(a,b){A.dT(b,a,a.length)
return a[b]},
$iak:1,
$if0:1}
A.is.prototype={
ga8(a){return B.nn},
gt(a){return a.length},
h(a,b){A.dT(b,a,a.length)
return a[b]},
av(a,b,c){return new Uint8Array(a.subarray(b,A.BD(b,c,a.length)))},
$iak:1,
$ibV:1}
A.j7.prototype={}
A.j8.prototype={}
A.j9.prototype={}
A.ja.prototype={}
A.cJ.prototype={
i(a){return A.jk(v.typeUniverse,this,a)},
N(a){return A.Bd(v.typeUniverse,this,a)}}
A.mm.prototype={}
A.mO.prototype={
q(a){return A.bM(this.a,null)}}
A.mk.prototype={
q(a){return this.a}}
A.hw.prototype={$idJ:1}
A.uG.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.uF.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:80}
A.uH.prototype={
$0(){this.a.$0()},
$S:14}
A.uI.prototype={
$0(){this.a.$0()},
$S:14}
A.vr.prototype={
jv(a,b){if(self.setTimeout!=null)self.setTimeout(A.hO(new A.vs(this,b),0),a)
else throw A.a(A.bm("`setTimeout()` not found."))}}
A.vs.prototype={
$0(){this.b.$0()},
$S:0}
A.ma.prototype={
dV(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.du(a)
else{s=r.a
if(q.i("aQ<1>").b(a))s.f9(a)
else s.cA(a)}},
dW(a,b){var s=this.a
if(this.b)s.bt(new A.bf(a,b))
else s.cw(new A.bf(a,b))}}
A.vF.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.vG.prototype={
$2(a,b){this.a.$2(1,new A.i3(a,t.l.a(b)))},
$S:166}
A.x_.prototype={
$2(a,b){this.a(A.h(a),b)},
$S:67}
A.cb.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
kZ(a,b){var s,r,q
a=A.h(a)
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
o.d=null}q=o.kZ(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.B7
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
o.a=A.B7
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.k("sync*"))}return!1},
lm(a){var s,r,q=this
if(a instanceof A.bB){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.P(a)
return 2}},
$iad:1}
A.bB.prototype={
gu(a){return new A.cb(this.a(),this.$ti.i("cb<1>"))}}
A.bf.prototype={
q(a){return A.w(this.a)},
$iat:1,
gbX(){return this.b}}
A.p8.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fh(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ai(p)
q=A.cO(p)
l=r
o=q
n=A.yR(l,o)
l=new A.bf(l,o)
m.b.bt(l)
return}m.b.fh(s)}},
$S:0}
A.pb.prototype={
$2(a,b){var s,r,q=this
A.fv(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bt(new A.bf(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bt(new A.bf(r,s))}},
$S:68}
A.pa.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.be(r,k.b,a)
if(J.a9(s,0)){q=A.c([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.eJ(q,l)}k.c.cA(q)}}else if(J.a9(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bt(new A.bf(q,o))}},
$S(){return this.d.i("av(0)")}}
A.me.prototype={
dW(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.k("Future already completed"))
s.cw(A.Hf(a,b))},
hn(a){return this.dW(a,null)}}
A.iX.prototype={
dV(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.a(A.k("Future already completed"))
s.du(r.i("1/").a(a))}}
A.dN.prototype={
nn(a){if((this.c&15)!==6)return!0
return this.b.b.ex(t.bl.a(this.d),a.a,t.y,t.K)},
n0(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.on(q,m,a.b,o,n,t.l)
else p=l.ex(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ai(s))){if((r.c&1)!==0)throw A.a(A.r("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.r("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ar.prototype={
ez(a,b,c){var s,r,q=this.$ti
q.N(c).i("1/(2)").a(a)
s=$.aq
if(s===B.y){if(!t.nW.b(b)&&!t.h_.b(b))throw A.a(A.a3(b,"onError",u.c))}else{c.i("@<0/>").N(q.c).i("1(2)").a(a)
b=A.C3(b,s)}r=new A.ar(s,c.i("ar<0>"))
this.cv(new A.dN(r,3,a,b,q.i("@<1>").N(c).i("dN<1,2>")))
return r},
h5(a,b,c){var s,r=this.$ti
r.N(c).i("1/(2)").a(a)
s=new A.ar($.aq,c.i("ar<0>"))
this.cv(new A.dN(s,19,a,b,r.i("@<1>").N(c).i("dN<1,2>")))
return s},
l1(a){this.a=this.a&1|16
this.c=a},
cz(a){this.a=a.a&30|this.a&1
this.c=a.c},
cv(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cv(a)
return}r.cz(s)}A.n7(null,null,r.b,t.O.a(new A.uN(r,a)))}},
fL(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fL(a)
return}m.cz(n)}l.a=m.cI(a)
A.n7(null,null,m.b,t.O.a(new A.uS(l,m)))}},
c2(){var s=t.F.a(this.c)
this.c=null
return this.cI(s)},
cI(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fh(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aQ<1>").b(a))A.uQ(a,r,!0)
else{s=r.c2()
q.c.a(a)
r.a=8
r.c=a
A.fm(r,s)}},
cA(a){var s,r=this
r.$ti.c.a(a)
s=r.c2()
r.a=8
r.c=a
A.fm(r,s)},
jP(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c2()
q.cz(a)
A.fm(q,r)},
bt(a){var s=this.c2()
this.l1(a)
A.fm(this,s)},
du(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aQ<1>").b(a)){this.f9(a)
return}this.jz(a)},
jz(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.n7(null,null,s.b,t.O.a(new A.uP(s,a)))},
f9(a){A.uQ(this.$ti.i("aQ<1>").a(a),this,!1)
return},
cw(a){this.a^=2
A.n7(null,null,this.b,t.O.a(new A.uO(this,a)))},
$iaQ:1}
A.uN.prototype={
$0(){A.fm(this.a,this.b)},
$S:0}
A.uS.prototype={
$0(){A.fm(this.b,this.a.a)},
$S:0}
A.uR.prototype={
$0(){A.uQ(this.a.a,this.b,!0)},
$S:0}
A.uP.prototype={
$0(){this.a.cA(this.b)},
$S:0}
A.uO.prototype={
$0(){this.a.bt(this.b)},
$S:0}
A.uV.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.om(t.pF.a(q.d),t.z)}catch(p){s=A.ai(p)
r=A.cO(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nz(q)
n=k.a
n.c=new A.bf(q,o)
q=n}q.b=!0
return}if(j instanceof A.ar&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ar){m=k.b.a
l=new A.ar(m.b,m.$ti)
j.ez(new A.uW(l,m),new A.uX(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uW.prototype={
$1(a){this.a.jP(this.b)},
$S:22}
A.uX.prototype={
$2(a,b){A.fv(a)
t.l.a(b)
this.a.bt(new A.bf(a,b))},
$S:78}
A.uU.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ex(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ai(l)
r=A.cO(l)
q=s
p=r
if(p==null)p=A.nz(q)
o=this.a
o.c=new A.bf(q,p)
o.b=!0}},
$S:0}
A.uT.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nn(s)&&p.a.e!=null){p.c=p.a.n0(s)
p.b=!1}}catch(o){r=A.ai(o)
q=A.cO(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nz(p)
m=l.b
m.c=new A.bf(p,n)
p=m}p.b=!0}},
$S:0}
A.mb.prototype={}
A.mJ.prototype={}
A.jr.prototype={$iB1:1}
A.mC.prototype={
oo(a){var s,r,q
t.O.a(a)
try{if(B.y===$.aq){a.$0()
return}A.C8(null,null,this,a,t.H)}catch(q){s=A.ai(q)
r=A.cO(q)
A.z4(A.fv(s),t.l.a(r))}},
hl(a){return new A.vp(this,t.O.a(a))},
om(a,b){b.i("0()").a(a)
if($.aq===B.y)return a.$0()
return A.C8(null,null,this,a,b)},
ex(a,b,c,d){c.i("@<0>").N(d).i("1(2)").a(a)
d.a(b)
if($.aq===B.y)return a.$1(b)
return A.HU(null,null,this,a,b,c,d)},
on(a,b,c,d,e,f){d.i("@<0>").N(e).N(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aq===B.y)return a.$2(b,c)
return A.HT(null,null,this,a,b,c,d,e,f)},
ic(a,b,c,d){return b.i("@<0>").N(c).N(d).i("1(2,3)").a(a)}}
A.vp.prototype={
$0(){return this.a.oo(this.b)},
$S:0}
A.wN.prototype={
$0(){A.E1(this.a,this.b)},
$S:0}
A.j1.prototype={
gt(a){return this.a},
gM(a){return this.a===0},
gZ(a){return this.a!==0},
ga_(){return new A.fn(this,this.$ti.i("fn<1>"))},
gai(){var s=this.$ti
return A.kX(new A.fn(this,s.i("fn<1>")),new A.uZ(this),s.c,s.y[1])},
L(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.jV(a)},
jV(a){var s=this.d
if(s==null)return!1
return this.bu(this.fg(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.B3(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.B3(q,b)
return r}else return this.kg(b)},
kg(a){var s,r,q=this.d
if(q==null)return null
s=this.fg(q,a)
r=this.bu(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fe(s==null?m.b=A.yr():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fe(r==null?m.c=A.yr():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.yr()
p=A.nf(b)&1073741823
o=q[p]
if(o==null){A.ys(q,p,[b,c]);++m.a
m.e=null}else{n=m.bu(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aG(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ff()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.a(A.ay(m))}},
ff(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.d_(i.a,null,!1,t.z)
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
fe(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.ys(a,b,c)},
fg(a,b){return a[A.nf(b)&1073741823]}}
A.uZ.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.j3.prototype={
bu(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fn.prototype={
gt(a){return this.a.a},
gM(a){return this.a.a===0},
gZ(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.j2(s,s.ff(),this.$ti.i("j2<1>"))},
p(a,b){return this.a.L(b)}}
A.j2.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.ay(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iad:1}
A.cq.prototype={
fI(){return new A.cq(A.o(this).i("cq<1>"))},
gu(a){var s=this,r=new A.fp(s,s.r,A.o(s).i("fp<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gM(a){return this.a===0},
gZ(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.jU(b)},
jU(a){var s=this.d
if(s==null)return!1
return this.bu(s[this.dA(a)],a)>=0},
gX(a){var s=this.e
if(s==null)throw A.a(A.k("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fd(s==null?q.b=A.yt():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fd(r==null?q.c=A.yt():r,b)}else return q.jw(b)},
jw(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.yt()
r=p.dA(a)
q=s[r]
if(q==null)s[r]=[p.dz(a)]
else{if(p.bu(q,a)>=0)return!1
q.push(p.dz(a))}return!0},
a4(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fO(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fO(s.c,b)
else return s.kU(b)},
kU(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dA(a)
r=n[s]
q=o.bu(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.h9(p)
return!0},
ke(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.a(A.ay(n))
if(!0===o)n.a4(0,r)}},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dM()}},
fd(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dz(b)
return!0},
fO(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.h9(s)
delete a[b]
return!0},
dM(){this.r=this.r+1&1073741823},
dz(a){var s,r=this,q=new A.ms(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dM()
return q},
h9(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dM()},
dA(a){return J.aF(a)&1073741823},
bu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
$iAf:1}
A.ms.prototype={}
A.fp.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iad:1}
A.qu.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:79}
A.a0.prototype={
gu(a){return new A.an(a,this.gt(a),A.cf(a).i("an<a0.E>"))},
a5(a,b){return this.h(a,b)},
gM(a){return this.gt(a)===0},
gZ(a){return!this.gM(a)},
gX(a){if(this.gt(a)===0)throw A.a(A.cD())
return this.h(a,0)},
p(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a9(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.a(A.ay(a))}return!1},
a7(a,b){var s,r
A.cf(a).i("l(a0.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.a(A.ay(a))}return!0},
O(a,b){var s,r
A.cf(a).i("l(a0.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.a(A.ay(a))}return!1},
U(a,b){var s
if(this.gt(a)===0)return""
s=A.yl("",a,b)
return s.charCodeAt(0)==0?s:s},
eF(a,b){return new A.dM(a,b.i("dM<0>"))},
bp(a,b,c){var s=A.cf(a)
return new A.G(a,s.N(c).i("1(a0.E)").a(b),s.i("@<a0.E>").N(c).i("G<1,2>"))},
l(a,b){var s
A.cf(a).i("a0.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cN(a,b){return new A.b5(a,A.cf(a).i("@<a0.E>").N(b).i("b5<1,2>"))},
mU(a,b,c,d){var s
A.cf(a).i("a0.E?").a(d)
A.f4(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
q(a){return A.y5(a,"[","]")},
$iS:1,
$in:1,
$iK:1}
A.aa.prototype={
aG(a,b){var s,r,q,p=A.o(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.ga_(),s=s.gu(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gK(){return this.ga_().bp(0,new A.qw(this),A.o(this).i("O<aa.K,aa.V>"))},
bq(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.N(c).N(d).i("O<1,2>(aa.K,aa.V)").a(b)
s=A.m(c,d)
for(r=this.ga_(),r=r.gu(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
lo(a){var s,r
for(s=J.P(A.o(this).i("n<O<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
L(a){return this.ga_().p(0,a)},
gt(a){var s=this.ga_()
return s.gt(s)},
gM(a){var s=this.ga_()
return s.gM(s)},
gZ(a){var s=this.ga_()
return s.gZ(s)},
gai(){return new A.j4(this,A.o(this).i("j4<aa.K,aa.V>"))},
q(a){return A.yc(this)},
$iU:1}
A.qw.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.O(a,s,r.i("O<aa.K,aa.V>"))},
$S(){return A.o(this.a).i("O<aa.K,aa.V>(aa.K)")}}
A.qx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:50}
A.j4.prototype={
gt(a){var s=this.a
return s.gt(s)},
gM(a){var s=this.a
return s.gM(s)},
gZ(a){var s=this.a
return s.gZ(s)},
gX(a){var s=this.a,r=s.ga_()
r=s.h(0,r.gX(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga_()
return new A.j5(r.gu(r),s,this.$ti.i("j5<1,2>"))}}
A.j5.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.jl.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.a(A.bm("Cannot modify unmodifiable map"))}}
A.h5.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
L(a){return this.a.L(a)},
aG(a,b){this.a.aG(0,A.o(this).i("~(1,2)").a(b))},
gM(a){var s=this.a
return s.gM(s)},
gZ(a){var s=this.a
return s.gZ(s)},
gt(a){var s=this.a
return s.gt(s)},
ga_(){return this.a.ga_()},
q(a){return this.a.q(0)},
gai(){return this.a.gai()},
gK(){return this.a.gK()},
bq(a,b,c,d){return this.a.bq(0,A.o(this).N(c).N(d).i("O<1,2>(3,4)").a(b),c,d)},
$iU:1}
A.ep.prototype={}
A.d5.prototype={
gM(a){return this.gt(this)===0},
gZ(a){return this.gt(this)!==0},
J(a,b){var s
for(s=J.P(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
by(a){var s,r,q=this.b6(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.p(0,r))q.a4(0,r)}return q},
q(a){return A.y5(this,"{","}")},
a7(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
U(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.bY(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
O(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gX(a){var s=this.gu(this)
if(!s.m())throw A.a(A.cD())
return s.gn()},
a5(a,b){var s,r
A.lo(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.q0(b,b-r,this,"index"))},
$iS:1,
$in:1,
$idF:1}
A.jf.prototype={
by(a){var s,r,q,p=this,o=p.fI()
for(s=A.fq(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.l(0,q)}return o},
b6(a){var s=this.fI()
s.J(0,this)
return s}}
A.mP.prototype={
l(a,b){this.$ti.c.a(b)
return A.Gb()}}
A.ho.prototype={
p(a,b){return this.a.p(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fq(s,s.r,A.o(s).c)},
b6(a){return this.a.b6(0)}}
A.hx.prototype={}
A.jm.prototype={}
A.mq.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kO(b):s}},
gt(a){return this.b==null?this.c.a:this.bE().length},
gM(a){return this.gt(0)===0},
gZ(a){return this.gt(0)>0},
ga_(){if(this.b==null){var s=this.c
return new A.ab(s,A.o(s).i("ab<1>"))}return new A.mr(this)},
gai(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.o(s).i("am<2>"))}return A.kX(r.bE(),new A.v0(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.q(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.L(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.le().k(0,b,c)},
L(a){if(this.b==null)return this.c.L(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aG(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aG(0,b)
s=o.bE()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.w6(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.ay(o))}},
bE(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
le(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bE()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.P(r)
n.a=n.b=null
return n.c=s},
kO(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.w6(this.a[a])
return this.b[a]=s}}
A.v0.prototype={
$1(a){return this.a.h(0,A.q(a))},
$S:31}
A.mr.prototype={
gt(a){return this.a.gt(0)},
a5(a,b){var s=this.a
if(s.b==null)s=s.ga_().a5(0,b)
else{s=s.bE()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga_()
s=s.gu(s)}else{s=s.bE()
s=new J.eL(s,s.length,A.z(s).i("eL<1>"))}return s},
p(a,b){return this.a.L(b)}}
A.vy.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:39}
A.vx.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:39}
A.jX.prototype={
mt(a,b){t.L.a(a)
if(b===!0)return B.eq.bw(a)
else return B.ep.bw(a)}}
A.vt.prototype={
bw(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.f4(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.a(A.N("Invalid value in input: "+o,null,null))
return this.jX(a,0,r)}}return A.ym(a,0,r)},
jX(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.aw((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.jY.prototype={}
A.k4.prototype={
nq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.f4(a4,a5,a2)
s=$.CY()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.xc(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.xc(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bx("")
g=o}else g=o
g.a+=B.c.H(a3,p,q)
c=A.aw(j)
g.a+=c
p=k
continue}}throw A.a(A.N("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.H(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.zJ(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.a(A.N(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.bT(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.zJ(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.a(A.N(a1,a3,a5))
if(b>1)a3=B.c.bT(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ob.prototype={}
A.e9.prototype={}
A.kf.prototype={}
A.kq.prototype={}
A.ih.prototype={
q(a){var s=A.kr(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kU.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.kT.prototype={
ap(a,b){var s=A.HH(a,this.gmw().a)
return s},
a6(a,b){var s=A.FR(a,this.gmN().b,null)
return s},
gmN(){return B.ji},
gmw(){return B.jh}}
A.ql.prototype={}
A.qk.prototype={}
A.v2.prototype={
is(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.H(a,r,q)
r=q+1
o=A.aw(92)
s.a+=o
o=A.aw(117)
s.a+=o
o=A.aw(100)
s.a+=o
o=p>>>8&15
o=A.aw(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aw(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aw(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.H(a,r,q)
r=q+1
o=A.aw(92)
s.a+=o
switch(p){case 8:o=A.aw(98)
s.a+=o
break
case 9:o=A.aw(116)
s.a+=o
break
case 10:o=A.aw(110)
s.a+=o
break
case 12:o=A.aw(102)
s.a+=o
break
case 13:o=A.aw(114)
s.a+=o
break
default:o=A.aw(117)
s.a+=o
o=A.aw(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aw(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aw(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.H(a,r,q)
r=q+1
o=A.aw(92)
s.a+=o
o=A.aw(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.H(a,r,m)},
dv(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.kU(a,null))}B.a.l(s,a)},
dh(a){var s,r,q,p,o=this
if(o.ir(a))return
o.dv(a)
try{s=o.b.$1(a)
if(!o.ir(s)){q=A.Ab(a,null,o.gfK())
throw A.a(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ai(p)
q=A.Ab(a,r,o.gfK())
throw A.a(q)}},
ir(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.is(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dv(a)
q.oC(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dv(a)
r=q.oD(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
oC(a){var s,r,q=this.c
q.a+="["
s=J.aO(a)
if(s.gZ(a)){this.dh(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.dh(s.h(a,r))}}q.a+="]"},
oD(a){var s,r,q,p,o,n,m=this,l={}
if(a.gM(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.d_(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aG(0,new A.v3(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.is(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dh(r[n])}p.a+="}"
return!0}}
A.v3.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:50}
A.v1.prototype={
gfK(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lR.prototype={}
A.ud.prototype={
bw(a){var s,r,q,p=a.length,o=A.f4(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.vz(s)
if(r.kd(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.dS()}return B.R.av(s,0,r.b)}}
A.vz.prototype={
dS(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.b3(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
ll(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.b3(r)
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
return!0}else{n.dS()
return!1}},
kd(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.b3(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.ll(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.dS()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.b3(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.b3(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.uc.prototype={
bw(a){return new A.vw(this.a).jW(t.L.a(a),0,null,!0)}}
A.vw.prototype={
jW(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.f4(b,c,J.cP(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Gs(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Gr(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dC(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Gt(o)
l.b=0
throw A.a(A.N(m,a,p+l.c))}return n},
dC(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.ad(b+c,2)
r=q.dC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dC(a,s,c,d)}return q.mv(a,b,c,d)},
mv(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bx(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aw(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aw(h)
e.a+=p
break
case 65:p=A.aw(h)
e.a+=p;--d
break
default:p=A.aw(h)
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
p=A.aw(a[l])
e.a+=p}else{p=A.ym(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aw(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eQ.prototype={
gao(){return A.Ap(this)},
gaV(){return A.Aq(this)},
aa(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eQ)if(this.a===b.a)s=this.b===b.b
return s},
gR(a){return A.d1(this.a,this.b,B.h,B.h,B.h,B.h)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
q(a){var s=this,r=A.DH(A.EQ(s)),q=A.kh(A.EO(s)),p=A.kh(A.Ap(s)),o=A.kh(A.Aq(s)),n=A.kh(A.EN(s)),m=A.kh(A.EP(s)),l=A.zQ(A.EM(s)),k=s.b,j=k===0?"":A.zQ(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibh:1}
A.ea.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.ea&&this.a===b.a},
gR(a){return B.d.gR(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
q(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.ad(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.ad(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bC(B.d.q(o%1e6),6,"0")},
$ibh:1}
A.mj.prototype={
q(a){return this.v()},
$iD:1}
A.at.prototype={
gbX(){return A.EL(this)}}
A.jZ.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kr(s)
return"Assertion failed"}}
A.dJ.prototype={}
A.cy.prototype={
gdG(){return"Invalid argument"+(!this.a?"(s)":"")},
gdF(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdG()+q+o
if(!s.a)return n
return n+s.gdF()+": "+A.kr(s.geg())},
geg(){return this.b}}
A.hc.prototype={
geg(){return A.yD(this.b)},
gdG(){return"RangeError"},
gdF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.kL.prototype={
geg(){return A.h(this.b)},
gdG(){return"RangeError"},
gdF(){if(A.h(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.iQ.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.lM.prototype={
q(a){return"UnimplementedError: "+this.a}}
A.hk.prototype={
q(a){return"Bad state: "+this.a}}
A.kc.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kr(s)+"."}}
A.l9.prototype={
q(a){return"Out of Memory"},
gbX(){return null},
$iat:1}
A.iM.prototype={
q(a){return"Stack Overflow"},
gbX(){return null},
$iat:1}
A.uL.prototype={
q(a){return"Exception: "+this.a}}
A.A.prototype={
q(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.H(e,0,75)+"..."
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
k=""}return g+l+B.c.H(e,i,j)+k+"\n"+B.c.a3(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.n.prototype={
cN(a,b){return A.Dw(this,A.o(this).i("n.E"),b)},
bp(a,b,c){var s=A.o(this)
return A.kX(this,s.N(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dg(a,b){var s=A.o(this)
return new A.H(this,s.i("l(n.E)").a(b),s.i("H<n.E>"))},
eF(a,b){return new A.dM(this,b.i("dM<0>"))},
p(a,b){var s
for(s=this.gu(this);s.m();)if(J.a9(s.gn(),b))return!0
return!1},
bn(a,b,c,d){var s,r
d.a(b)
A.o(this).N(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
U(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.bY(q.gn())
if(!q.m())return s
r=b.gM(b)
if(r){r=s
do r+=J.bY(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.bY(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
O(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bV(a,b){var s=A.I(this,A.o(this).i("n.E"))
return s},
bU(a){return this.bV(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gM(a){return!this.gu(this).m()},
gZ(a){return!this.gM(this)},
gX(a){var s=this.gu(this)
if(!s.m())throw A.a(A.cD())
return s.gn()},
gbb(a){var s,r=this.gu(this)
if(!r.m())throw A.a(A.cD())
s=r.gn()
if(r.m())throw A.a(A.A3())
return s},
b2(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.a(A.cD())},
aq(a,b){return this.b2(0,b,null)},
a5(a,b){var s,r
A.lo(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.q0(b,b-r,this,"index"))},
q(a){return A.Em(this,"(",")")}}
A.O.prototype={
q(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.av.prototype={
gR(a){return A.J.prototype.gR.call(this,0)},
q(a){return"null"}}
A.J.prototype={$iJ:1,
aa(a,b){return this===b},
gR(a){return A.iA(this)},
q(a){return"Instance of '"+A.lj(this)+"'"},
ga8(a){return A.zj(this)},
toString(){return this.q(this)}}
A.mM.prototype={
q(a){return""},
$id6:1}
A.tR.prototype={
gmL(){var s,r=this.b
if(r==null)r=$.rA.$0()
s=r-this.a
if($.zv()===1e6)return s
return s*1000}}
A.bx.prototype={
gt(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iFc:1}
A.ub.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.q(b)
s=B.c.bz(b,"=")
if(s===-1){if(b!=="")a.k(0,A.yy(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.H(b,0,s)
q=B.c.aO(b,s+1)
p=this.a
a.k(0,A.yy(r,0,r.length,p,!0),A.yy(q,0,q.length,p,!0))}return a},
$S:88}
A.ua.prototype={
$2(a,b){throw A.a(A.N("Illegal IPv6 address, "+a,this.a,b))},
$S:98}
A.jn.prototype={
gh2(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.w(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gR(a){var s,r=this,q=r.y
if(q===$){s=B.c.gR(r.gh2())
r.y!==$&&A.zp()
r.y=s
q=s}return q},
gb5(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.AM(s==null?"":s)
r.z!==$&&A.zp()
q=r.z=new A.ep(s,t.hL)}return q},
gio(){return this.b},
gee(){var s=this.c
if(s==null)return""
if(B.c.T(s,"[")&&!B.c.am(s,"v",1))return B.c.H(s,1,s.length-1)
return s},
gel(){var s=this.d
return s==null?A.Be(this.a):s},
geo(){var s=this.f
return s==null?"":s},
ghN(){var s=this.r
return s==null?"":s},
ghQ(){return this.c!=null},
ghS(){return this.f!=null},
ghR(){return this.r!=null},
q(a){return this.gh2()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geM())if(p.c!=null===b.ghQ())if(p.b===b.gio())if(p.gee()===b.gee())if(p.gel()===b.gel())if(p.e===b.gi4()){r=p.f
q=r==null
if(!q===b.ghS()){if(q)r=""
if(r===b.geo()){r=p.r
q=r==null
if(!q===b.ghR()){s=q?"":r
s=s===b.ghN()}}}}return s},
$ilP:1,
geM(){return this.a},
gi4(){return this.e}}
A.u9.prototype={
gim(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.d_(s,"?",m)
q=s.length
if(r>=0){p=A.jo(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mf("data","",n,n,A.jo(s,m,q,128,!1,!1),p,n)}return m},
q(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.mG.prototype={
ghQ(){return this.c>0},
ghS(){return this.f<this.r},
ghR(){return this.r<this.a.length},
geM(){var s=this.w
return s==null?this.w=this.jS():s},
jS(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.T(r.a,"http"))return"http"
if(q===5&&B.c.T(r.a,"https"))return"https"
if(s&&B.c.T(r.a,"file"))return"file"
if(q===7&&B.c.T(r.a,"package"))return"package"
return B.c.H(r.a,0,q)},
gio(){var s=this.c,r=this.b+3
return s>r?B.c.H(this.a,r,s-1):""},
gee(){var s=this.c
return s>0?B.c.H(this.a,s,this.d):""},
gel(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Cw(B.c.H(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.T(r.a,"http"))return 80
if(s===5&&B.c.T(r.a,"https"))return 443
return 0},
gi4(){return B.c.H(this.a,this.e,this.f)},
geo(){var s=this.f,r=this.r
return s<r?B.c.H(this.a,s+1,r):""},
ghN(){var s=this.r,r=this.a
return s<r.length?B.c.aO(r,s+1):""},
gb5(){if(this.f>=this.r)return B.aH
return new A.ep(A.AM(this.geo()),t.hL)},
gR(a){var s=this.x
return s==null?this.x=B.c.gR(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.q(0)},
q(a){return this.a},
$ilP:1}
A.mf.prototype={}
A.r2.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.xN.prototype={
$1(a){return this.a.dV(this.b.i("0/?").a(a))},
$S:19}
A.xO.prototype={
$1(a){if(a==null)return this.a.hn(new A.r2(a===undefined))
return this.a.hn(a)},
$S:19}
A.x5.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.BV(a))return a
s=this.a
a.toString
if(s.L(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b_(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fy(!0,"isUtc",t.y)
return new A.eQ(r,0,!0)}if(a instanceof RegExp)throw A.a(A.r("structured clone of RegExp",null))
if(a instanceof Promise)return A.aE(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cN(n),p=s.gu(n);p.m();)m.push(A.hP(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.h(a.length)
for(s=J.aO(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:125}
A.mp.prototype={
aW(a){if(a<=0||a>4294967296)throw A.a(A.At(u.w+a))
return Math.random()*a>>>0},
ar(){return Math.random()},
$iyi:1}
A.ew.prototype={
bY(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.ad(a-s,k)
r=a>>>0
a=B.d.ad(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.ad(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.ad(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.ad(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.ad(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.ad(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bh()
l.bh()
l.bh()
l.bh()},
bh(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.ad(o-n+(q-p)+(m-r),4294967296)>>>0},
aW(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.a(A.At(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bh()
return(p.a&s)>>>0}do{p.bh()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
ar(){var s,r=this
r.bh()
s=r.a
r.bh()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iyi:1}
A.km.prototype={
v(){return"DiagnosticSeverity."+this.b}}
A.dY.prototype={
B(){var s=this
return A.F(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.tD.prototype={
$1(a){return B.c.bC(B.d.eA(A.h(a),16),8,"0")},
$S:156}
A.lS.prototype={}
A.qM.prototype={
nY(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.z(s).i("bG<1>"),s=new A.bG(s,r),s=new A.an(s,s.gt(0),r.i("an<Y.E>")),q=o.a,r=r.i("Y.E");s.m();){p=s.d
q.aI(p==null?r.a(p):p)}}}
A.l_.prototype={}
A.qX.prototype={}
A.qO.prototype={
d2(a0,a1){var s=0,r=A.aM(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$d2=A.aN(function(a3,a4){if(a3===1)return A.aJ(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.CK(b)
if(a.length!==0)throw A.a(A.N(B.a.bp(a,new A.qP(),t.N).U(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.a(B.hE)
k=t.N
j=A.Z(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.t)(m),++i)j.J(0,m[i].c.gai())
if(j.a>16384)throw A.a(B.hx)
p=A.m(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gai(),g=g.gu(g)
case 6:if(!g.m()){s=7
break}o=g.gn()
if(p.L(o)){s=6
break}s=8
return A.a5(j.$1(o),$async$d2)
case 8:f=a4
e=f.length
if(e>67108864)throw A.a(A.N("model package payload exceeds limit: "+A.w(o),null,null))
d=p
if(new A.am(d,A.o(d).i("am<2>")).bn(0,0,new A.qQ(),k)+e>268435456)throw A.a(B.hH)
J.be(p,o,new Uint8Array(A.a1(f)))
if(l)try{e=J.aV(p,o)
e.toString
A.Co(e)}catch(a2){b=A.ai(a2)
if(b instanceof A.lm){n=b
throw A.a(A.N("model package payload is not valid QMSH: "+A.w(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.t)(m),++i
s=3
break
case 5:if(A.Ak(b,p)!==b.c)throw A.a(B.fT)
q=new A.lS(b,p)
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$d2,r)}}
A.qP.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.qQ.prototype={
$2(a,b){return A.h(a)+t.uo.a(b).length},
$S:193}
A.qR.prototype={
C(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iC("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.l(l,"assetId must be kebab-case")
k=A.iC("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.l(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.l(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.l(l,"parts must be non-empty")
s=m.w
if(A.h4(s,A.z(s).c).a!==s.length)B.a.l(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.l(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.O(s,new A.qU())
else s=!1
if(s)B.a.l(l,"combinedBounds must contain six finite values")
for(s=m.y.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(q.length!==0){r=r.b
p=J.aO(r)
r=p.gt(r)!==16||p.O(r,new A.qV())}else r=!0
if(r)B.a.l(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.t)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.l(l,"part material slot is outside materials")
q=n.c
if(q.gM(q))B.a.l(l,"part "+n.a+" must declare payload files")
for(q=q.gai(),q=q.gu(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.Hp(q.gn()))B.a.l(l,p)}return l},
ii(a){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"schema","pixeldart-model-package-v1")
o.k(0,"assetId",p.b)
if(a)o.k(0,"packageHash",p.c)
o.k(0,"sourceFormat",p.d)
s=p.e
r=A.z(s)
q=r.i("G<1,U<e,@>>")
s=A.I(new A.G(s,r.i("U<e,@>(1)").a(new A.qT()),q),q.i("Y.E"))
o.k(0,"parts",s)
o.k(0,"materials",p.f)
o.k(0,"textures",p.r)
o.k(0,"lods",p.w)
o.k(0,"combinedBounds",p.x)
o.k(0,"sockets",p.y)
o.k(0,"provenance",p.z)
return o},
B(){return this.ii(!0)}}
A.qS.prototype={
$2(a,b){return new A.O(J.bY(a),J.bY(b),t.q)},
$S:34}
A.qU.prototype={
$1(a){return!isFinite(A.b1(a))},
$S:4}
A.qV.prototype={
$1(a){return!isFinite(A.b1(a))},
$S:4}
A.qT.prototype={
$1(a){return t.aw.a(a).B()},
$S:74}
A.f_.prototype={
B(){return A.F(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.qW.prototype={
$2(a,b){return new A.O(J.bY(a),J.bY(b),t.q)},
$S:34}
A.wA.prototype={
$1(a){A.q(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.wT.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.wE.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.wR.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xW.prototype={
$2(a,b){B.a.l(this.a,new A.dY(a,B.cv,"model-package",b,"rebuild the deterministic model package"))},
$S:32}
A.xX.prototype={
$2(a,b){B.a.l(this.a,new A.dY(a,B.cv,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:32}
A.rE.prototype={
C(){var s,r=this
if(B.a.O(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.rF()))throw A.a(B.id)
s=r.y
if(!isFinite(s)||s<1)throw A.a(B.hc)}}
A.rF.prototype={
$1(a){return A.h(a)<=0},
$S:21}
A.f3.prototype={
v(){return"QualityProfileKind."+this.b}}
A.en.prototype={
C(){var s="installedFeatures",r=this.b,q=r.by(B.mP)
if(q.a!==0)throw A.a(A.a3(q,s,"contains unknown pipeline features"))
if(this.a===B.bF&&r.gZ(r))throw A.a(A.a3(r,s,"safe profiles cannot install optional features"))}}
A.fQ.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.lg.prototype={}
A.op.prototype={
c5(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.a(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.k("configuration state is not initialized"))
if(p.c!=null)A.f(A.k("a configuration transition is already open"))
a2.C()
n=A.iu(a2)
m=p.d
l=p.b
if(l==null)A.f(A.k("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.by(h)
f=h.by(j)
j=n.a
h=l.a
e=j.by(h)
d=h.by(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.os(m,a2,n,new A.oq(A.f9(g,k),A.f9(f,k),A.f9(e,k),A.f9(d,k),c,b,o.z!==a2.z),B.ct)
p.c=a
s=a
try{r=a1.b.d7(s.c)
q=new A.lg(s,r,B.b4)
a1.c=q
return q}catch(a0){p.he(s)
throw a0}},
c6(a){var s,r,q,p=this
p.fk(a)
s=p.a
r=a.a
s.fl(r)
q=s.d
if(r.a!==q)A.f(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fi
s.c=null
p.b.c6(a.b)
a.c=B.fq
p.c=null},
fk(a){if(this.c!==a||a.c!==B.b4)throw A.a(A.k("coordinated transition is not open"))}}
A.fL.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.oq.prototype={}
A.os.prototype={}
A.or.prototype={
he(a){this.fl(a)
a.e=B.fj
this.c=null},
fl(a){if(this.c!==a||a.e!==B.ct)throw A.a(A.k("configuration transition is not open"))}}
A.lf.prototype={
C(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.F(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.M(n,A.o(n).i("M<1,2>")).gu(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.a(A.r("PostProcessState."+l+" must be >= 0: "+A.w(k),i))}n=j.ay
if(n<1||n>8)throw A.a(A.r("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.a(A.r("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),i))
if(r>1)throw A.a(A.r("PostProcessState.surfaceWetness must be in [0, 1]: "+A.w(r),i))
if(q>1)throw A.a(A.r("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.w(q),i))
if(p>1)throw A.a(A.r("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.w(p),i))
if(o>1)throw A.a(A.r("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(o),i))}}
A.fI.prototype={}
A.kx.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gag(0)||!k.b.gag(0)||!k.r.gag(0))throw A.a(A.r("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.a(A.r("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.a(A.r("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gag(0)||r.gbA()<1e-12)A.f(A.r("DirectionalLight.direction must be finite and nonzero: "+r.q(0),j))
s=s.c
if(!isFinite(s)||s<0)A.f(A.r("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.r("PointLight.position must be finite: "+o.q(0),j))
o=p.d
if(!isFinite(o)||o<0)A.f(A.r("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.f(A.r("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.r("SpotLight.position must be finite: "+o.q(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.f(A.r("SpotLight.direction must be finite and nonzero: "+o.q(0),j))
if(p.w<=p.r)A.f(A.r("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.ky.prototype={}
A.dE.prototype={
aa(a,b){if(b==null)return!1
return J.eK(b)===A.zj(this)&&b instanceof A.dE&&this.a===b.a&&this.b===b.b},
gR(a){return A.d1(A.zj(this),this.a,this.b,B.h,B.h,B.h)}}
A.bE.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bl.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c1.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.la.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cB.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eV.prototype={
v(){return"HandleRejection."+this.b}}
A.kI.prototype={
q(a){return"HandleException("+this.a.b+", "+this.b.q(0)+")"}}
A.c0.prototype={
gag(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.c0&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gR(a){return A.d1(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.oN.prototype={}
A.le.prototype={
gE(){return this.a}}
A.bJ.prototype={
gE(){return this.a}}
A.xP.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:87}
A.fD.prototype={
v(){return"AlphaMode."+this.b}}
A.il.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.cG.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.a(A.r("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.a(A.r("MaterialDefinition.emissiveStrength must be >= 0: "+A.w(s),k))
if(!isFinite(1))throw A.a(A.r("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.kY("roughness",l.at)
A.kY("metallic",0)
A.kY("occlusionStrength",1)
A.kY("clearcoatStrength",0)
A.kY("clearcoatRoughness",0.2)
if(!isFinite(0))throw A.a(A.r("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.as("uvScaleU",s),new A.as("uvScaleV",r),new A.as("uvOffsetU",0),new A.as("uvOffsetV",0),new A.as("tintR",l.d),new A.as("tintG",l.e),new A.as("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.a(A.r("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.a(A.r("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.a(A.r("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cK.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.b7.prototype={}
A.iS.prototype={
C(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.a(A.r("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.a(A.r(k+m.a+'": attribute '+p.a.q(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.a(A.r(k+m.a+'": attribute '+p.a.q(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.z(s)
r=j.i("l(1)").a(new A.ue())
for(s=B.a.gu(s),j=new A.T(s,r,j.i("T<1>"));j.m();)if(s.gn().c!==4)throw A.a(A.r(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.ue.prototype={
$1(a){return t.qY.a(a).a===B.c0},
$S:20}
A.bQ.prototype={
C(){var s,r,q,p,o,n=this,m=n.a
m.C()
s=n.b.length
m=m.b
if(B.d.S(s,m)!==0)throw A.a(A.r("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.lg()
r=n.c
if(r!=null){q=B.d.bc(s,m)
for(m=A.Eu(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.a(A.r("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gag(0)&&m.b.gag(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.a(A.r("MeshData.localBounds must be a valid AABB",null))},
lg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.z(a4),a6=a5.i("l(1)")
a5=a5.i("H<1>")
s=new A.H(a4,a6.a(new A.qF()),a5)
if(!s.gu(0).m())return
r=new A.H(a4,a6.a(new A.qG()),a5)
if(r.gt(0)!==1)throw A.a(A.r("surface-v2 tangent data requires one normal slot",a2))
q=s.gbb(0)
p=r.gbb(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.bc(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
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
if(!B.a.a7(A.c([i,g,f,e,d,c,b],o),new A.qH()))throw A.a(A.r("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.a(A.r("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.a(A.r("surface-v2 tangent must be orthogonal to its normal: "+A.w(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.a(A.r("surface-v2 tangent handedness must be -1 or +1: "+A.w(b),a2))}}}
A.qF.prototype={
$1(a){return t.qY.a(a).a===B.c0},
$S:20}
A.qG.prototype={
$1(a){return t.qY.a(a).a===B.e9},
$S:20}
A.qH.prototype={
$1(a){return isFinite(A.b1(a))},
$S:4}
A.ki.prototype={$iF1:1}
A.r4.prototype={
C(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.a(A.r("resource plan must contain sceneColor and present",null))
if(s.O(0,new A.r5()))throw A.a(A.r("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.a(A.r("resource history does not match vhsOutput ownership",null))}}
A.r5.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.hf.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.lh.prototype={}
A.ls.prototype={
hW(a){var s=this
if(s.d)A.f(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.a(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
d7(a){var s=this
if(s.d)A.f(A.k("resource assembler is disposed"))
if(s.a==null)throw A.a(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.a(A.k("resource assembly is already open"))
a.C()
return s.b=new A.lh(s.c,a,B.bM)},
c6(a){var s,r=this
if(r.d)A.f(A.k("resource assembler is disposed"))
r.fS(a)
s=r.c
if(a.a!==s)throw A.a(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.mn
r.b=null},
ew(a){if(this.d)A.f(A.k("resource assembler is disposed"))
this.fS(a)
a.c=B.mo
this.b=null},
a1(){var s=this
if(s.d)return
if(s.b!=null)throw A.a(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
fS(a){if(this.b!==a||a.c!==B.bM)throw A.a(A.k("resource assembly is not prepared"))}}
A.fS.prototype={
v(){return"DrawMode."+this.b}}
A.k6.prototype={
v(){return"BlendMode."+this.b}}
A.b9.prototype={}
A.lI.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.a(A.r("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.a(A.r("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.a(A.r("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hX.prototype={
v(){return"ColorEncoding."+this.b}}
A.fR.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.iE.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.a(A.r("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.a(A.r("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.a(A.r("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.a(A.r("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.f6.prototype={
v(){return"RendererState."+this.b}}
A.aR.prototype={}
A.p5.prototype={
i3(a){var s=this.z.h(0,a)
return s==null?B.cH:s},
q(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eZ.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.d0.prototype={}
A.c2.prototype={}
A.qC.prototype={
cB(a){var s=this.a,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.qD(a)),r.i("H<1>")).gt(0)}}
A.qD.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:92}
A.qA.prototype={
d8(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.t)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.f(A.r("material residency key is empty",null))
k=m.b
k.C()
if(r.L(l))throw A.a(A.r("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.Ci(k),i=k.$ti,k=new A.cb(k.a(),i.i("cb<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bU(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.d8(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.I(new A.am(r,o),o.i("n.E"))
B.a.V(a,new A.qB())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.t)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.kY(m,k,s))}return new A.qC(A.ac(o,t.wl))},
kY(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.M(b,A.o(b).i("M<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.Es(new A.am(q,q.$ti.i("am<2>")))
A.aX(q,s,r)
return new A.c2(a,p)}}
A.qB.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.c.G(a.a,b.a):s},
$S:200}
A.kZ.prototype={
oa(a){return this.a.bM(a)}}
A.qE.prototype={
$3(a,b,c){return new A.c1(A.h(a),A.h(b),A.al(c))},
$S:110}
A.lO.prototype={}
A.qI.prototype={
b9(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.AY(b,new A.kD(a.byteLength,B.cV,B.iy))
if(b.b!==B.i)A.f(A.k(c))
s=A.b(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.db(b)
A.bz(b,p)
if(b.b!==B.i)A.f(A.k(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.Z(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.Cf(h.a)
if(!l.l(0,g))continue
f=A.GL(o,g,h)
if(b.b!==B.i)A.f(A.k(c))
r.vertexAttribPointer.apply(r,[g,f,A.h(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.i)A.f(A.k(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.AY(b,new A.kD(A.Aj(e),B.cV,B.cU))
if(b.b!==B.i)A.f(A.k(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(d.a))
A.FD(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.lO(a0,d,p,b,B.d.bc(a.length,n),t.Dd.b(e))},
eu(a){var s=this.c.h(0,a.a)
if(s==null)throw A.a(A.eg(B.aF,a))
this.b.bM(a)
return s},
aI(a){var s,r,q=this.c.a4(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.aI(a)},
er(){var s,r,q,p
for(s=this.b.bQ(),r=s.$ti,s=new A.cb(s.a(),r.i("cb<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.b9(p.b))}},
gci(){return this.b.bQ().bn(0,0,new A.qK(),t.S)}}
A.qJ.prototype={
$3(a,b,c){return new A.bE(A.h(a),A.h(b),A.al(c))},
$S:115}
A.qK.prototype={
$2(a,b){var s,r
A.h(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.Aj(s)
return a+r+s},
$S:116}
A.hV.prototype={}
A.qL.prototype={
mu(a){var s,r,q,p,o=A.IA(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.k("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.k(0,s,q+1)
r.toString
return r}p=new A.hV(o,1,A.IG(A.Co(a)))
m.k(0,n,p)
this.c.k(0,n,1)
return p},
aI(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.a(A.k("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a4(0,p)
q.a4(0,p)}else s.k(0,p,r-1)}}
A.qN.prototype={
B(){var s=this
return A.F(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.h7.prototype={
iO(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.k("model package binding is disposed"))
if(a8.x==null)throw A.a(A.k("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.t)(s),++i){h=k.a(s[i])
q.W(h)
g=h.a
if(!(g>=0&&g<j.length))return A.d(j,g)
f=j[g].c
if(f==null)f=l.a(f)
e=f.c
e.C()
d=n.a(f.a)
p.W(d)
c=d.a
if(!(c>=0&&c<m.length))return A.d(m,c)
b=m[c].c
a=(b==null?o.a(b):b).d
a0=e.a9()
a=a.gaj()
a1=A.z(a)
A.aW(new A.G(a,a1.i("B(1)").a(a0.gal()),a1.i("G<1,B>")))
a1=f.b
a0=f.e
a=f.f
a2=f.r
a3=f.w
a4=f.x
a5=f.y
e.C()
p.W(d)
if(!(c<m.length))return A.d(m,c)
b=m[c].c
c=(b==null?o.a(b):b).d
a6=e.a9()
c=c.gaj()
a7=A.z(c)
A.aW(new A.G(c,a7.i("B(1)").a(a6.gal()),a7.i("G<1,B>")))
a5=l.a(new A.b9(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.W(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb_(a5)}},
a1(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fF(s,r,q.x)
B.a.P(s)
B.a.P(r)
q.x=null},
jA(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.Ew(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
if(typeof e!=="number")return e.di()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a3=A.k("invalid material for package slot "+r.b)
throw A.a(a3)}e=B.a.h(a4.b,s).c
d=r.a
if(g.x)A.f(A.k("resource library is disposed"))
c=g.a
e.C()
b=c.b.aD(e,a3+d+":"+a7)
c.c.k(0,b.a,c.b9(e))
g.f.l(0,b)
p=b
J.eJ(a5,p)
e=p
m.C()
i.a(e)
k.W(e)
c=e.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a=h[c].c
d=(a==null?j.a(a):a).d
c=m.a9()
d=d.gaj()
a0=A.z(d)
A.aW(new A.G(d,a0.i("B(1)").a(c.gal()),a0.i("G<1,B>")))
J.eJ(a6,n.b.bL(new A.b9(e,q,m,l,B.O,B.N,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a0()
s=e+1}return new A.je(a4,a6,a5)}catch(a1){a2.fF(a6,a5,a4)
throw a1}},
fF(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.z(a).i("bG<1>"),r=new A.bG(a,s),r=new A.an(r,r.gt(0),s.i("an<Y.E>")),q=this.d.b,s=s.i("Y.E");r.m();){p=r.d
q.aI(p==null?s.a(p):p)}for(s=A.z(b).i("bG<1>"),r=new A.bG(b,s),r=new A.an(r,r.gt(0),s.i("an<Y.E>")),q=this.c,s=s.i("Y.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.k("resource library is disposed"))
q.a.aI(p)
q.f.a4(0,p)}if(c!=null)c.nY()}}
A.cI.prototype={
v(){return"QmeshRejection."+this.b}}
A.lm.prototype={
q(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.x6.prototype={
$1(a){return!isFinite(A.b1(a))},
$S:4}
A.bU.prototype={}
A.dI.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c6.prototype={}
A.u0.prototype={
cJ(a){var s=this.a,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.u1(a)),r.i("H<1>")).gt(0)}}
A.u1.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:118}
A.tZ.prototype={
d8(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.r("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a3(n,"handle","must be valid"))
if(s.L(o))throw A.a(A.r("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("am<2>")
m=A.I(new A.am(s,r),r.i("n.E"))
B.a.V(m,new A.u_())
r=t.Aj
l=A.Z(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.kN(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c6(p,i))}r=l.a
return new A.u0(A.ac(j,t.e),r)},
kN(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.h4(a,r)===s.d)return B.e2
this.b.k(0,a,!0)
return B.e1}catch(q){if(A.ai(q) instanceof A.kI){s=this.b.h(0,a)===!0?B.e4:B.e3
return s}else throw q}}}
A.u_.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.c.G(a.a,b.a):s},
$S:121}
A.dd.prototype={}
A.lL.prototype={
aY(a){var s=this.a,r=A.yo(s,B.iD)
A.yp(s,r,0,a)
return r},
ou(a,b){var s,r,q,p=this,o=p.b,n=o.bM(a),m=A.I(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.eB(a,new A.dd(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.yo(p.a,s)
o.k(0,r,q)}A.yp(p.a,q,0,b)},
mW(a){var s,r=this.b,q=r.bM(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.a(A.k("TextureStore.finalizeMips: no pixels uploaded yet for "+a.q(0)))
A.AZ(this.a,s)
r.eB(a,new A.dd(p,q.b,!0))},
h4(a,b){var s
this.b.bM(a)
s=this.c.h(0,a.a)
return s==null?b:s},
o6(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.h4(a,s)},
of(a){var s=this.e
s===$&&A.p()
return s},
oh(a){var s=this.f
s===$&&A.p()
return s},
o8(a){var s=this.r
s===$&&A.p()
return s},
od(a){var s=this.w
s===$&&A.p()
return s},
a1(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>")),q=n.a,p=q.a,o=t.h;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.P(0)
s=n.d
s===$&&A.p()
A.m4(q,s)
s=n.e
s===$&&A.p()
A.m4(q,s)
s=n.f
s===$&&A.p()
A.m4(q,s)
s=n.r
s===$&&A.p()
A.m4(q,s)
s=n.w
s===$&&A.p()
A.m4(q,s)},
er(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aY($.zu())
i.e=i.aY($.zr())
i.f=i.aY($.zs())
i.r=i.aY($.zq())
i.w=i.aY($.zt())
for(s=i.b.bQ(),r=s.$ti,s=new A.cb(s.a(),r.i("cb<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.u4()))continue
l=A.yo(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.yp(p,l,k,j)}if(m.c)A.AZ(p,l)
q.k(0,n.a,l)}},
gci(){return this.b.bQ().bn(0,0,new A.u3(),t.S)}}
A.u2.prototype={
$3(a,b,c){return new A.bl(A.h(a),A.h(b),A.al(c))},
$S:129}
A.u4.prototype={
$1(a){return t.Fx.a(a)==null},
$S:132}
A.u3.prototype={
$2(a,b){var s
A.h(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:136}
A.hp.prototype={
gE(){return this.a}}
A.us.prototype={}
A.dx.prototype={
gn8(){return this.b.length}}
A.kv.prototype={
lH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.rI(A.c([],t.pq),A.Z(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].aA(s,b)
o=s.lG(a,!1)
if(o.b.length!==0)return new A.kw(o,B.jY)
q=o.a
n=A.z(q)
m=new A.G(q,n.i("e(1)").a(new A.p0()),n.i("G<1,e>")).b6(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.az(d),j=0;j<1;++j){i=n[j]
if(!m.p(0,i.gF().a))throw A.a(A.k('RenderFeature "'+k.gE()+'" created a pass "'+i.gF().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.V(l,new A.p1(o))
return new A.kw(o,l)},
bN(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a1()}}
A.p0.prototype={
$1(a){return t.A.a(a).a},
$S:141}
A.p1.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.ef(s,new A.oZ(a)),B.a.ef(s,new A.p_(b)))},
$S:149}
A.oZ.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.p_.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.kw.prototype={}
A.eS.prototype={
v(){return"FrameQueueState."+this.b}}
A.kz.prototype={$iEV:1}
A.p4.prototype={
lD(a){if(a.length===0)throw A.a(A.a3(a,"passId",null))
this.b=a
this.a.cl(a,A.Cq())},
j3(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aR(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bG(a,b){var s,r=this.b
if(r==null)throw A.a(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.a(A.r("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.ad(a,3)*b}}
A.hs.prototype={}
A.aB.prototype={
gbS(){var s=this.c,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.r8()),r.i("H<1>"))},
gcp(){var s=this.c,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.r9()),r.i("H<1>"))},
q(a){return"PassDeclaration("+this.a+" @ "+this.b.q(0)+")"},
gE(){return this.a}}
A.r8.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.j||s===B.L},
$S:18}
A.r9.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:18}
A.ck.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bs.prototype={
q(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iG.prototype={
v(){return"ResourceFormat."+this.b}}
A.cW.prototype={
v(){return"GraphStage."+this.b}}
A.aS.prototype={
i_(){var s=this
return new A.aS(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aS&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gR(a){var s=this
return A.d1(s.a,s.b,s.c,s.d,s.e,s.f)},
q(a){var s=this,r=s.b.q(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.he.prototype={
v(){return"ResourceAccess."+this.b}}
A.R.prototype={}
A.hY.prototype={
gE(){return this.a}}
A.lk.prototype={
aH(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.FG(m.a,a.c,r.a(a.d.ga_().bU(0)),r.a(a.f),a.b)}catch(q){if(A.ai(q) instanceof A.iJ){++m.e
throw q}else throw q}r=a.a
p=new A.hY(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
bN(){var s=this.b
this.k0(new A.am(s,A.o(s).i("am<2>")))
s.P(0)},
k0(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bw.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.a(A.r("ProgramSource.id must not be empty",m))
s=t.S
r=A.Z(s)
for(q=this.d.gK(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.a(A.r('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.a(A.r('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.Z(s)
for(s=this.e.gK(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.a(A.r('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.a(A.r('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.rG.prototype={}
A.bj.prototype={
ak(){var s=this
return A.zT(B.eK,s.f,B.aw,B.ad,!0,!0,!0,!0,s.r,B.aA,B.aB,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.rI.prototype={
lG(a,b){var s=this.lf(t.Q.a(a),!1),r=this.a,q=A.z(r)
return new A.rH(A.ac(new A.H(r,q.i("l(1)").a(new A.rN()),q.i("H<1>")),t.A),s)},
lf(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.z(r)
p=q.i("H<1>")
o=A.I(new A.H(r,q.i("l(1)").a(new A.rM()),p),p.i("n.E"))
m.jG(o,a,s)
m.jK(o,s)
m.jM(o,s)
m.jJ(o,!1,s)
n=m.jO(o,s)
m.jL(o,n,s)
m.jN(o,s)
m.jI(o,n,s)
m.jH(o,s)
return s},
jG(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.a6.by(b)
if(p.a!==0)B.a.l(c,new A.bs(B.iO,q.a,"missing capabilities: "+p.U(0,", ")))}},
jK(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbS(),o=J.P(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bs(B.iJ,n,"reads multisampled resource "+m.q(0)+" directly; resolve before sampling"))}}},
jM(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.z(a),r=s.i("l(1)").a(new A.rL()),q=B.a.gu(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbS()
o=A.I(p,p.$ti.i("n.E"))
p=r.gcp()
n=A.I(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bs(B.bb,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbb(o).a
l=B.a.gbb(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bs(B.bb,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bs(B.bb,r.a,"resolve source and destination must match format and extent"))}},
jJ(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.L)B.a.l(c,new A.bs(B.iM,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
jO(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gcp(),n=J.P(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bs(B.iI,m,l.q(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
jL(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbS(),p=J.P(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.L)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bs(B.d_,o,"reads "+n.q(0)+" but no pass writes that version"))
continue}if(B.a.bz(a,m)>s)B.a.l(c,new A.bs(B.d_,o,"reads "+n.q(0)+" before writer "+m.a+" runs"))}}},
jN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbS(),o=J.P(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.L)continue
for(l=q.gcp(),k=J.P(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bs(B.iL,n,"reads and writes "+m.q(0)+" at the same version; declare a ping-pong version bump"))}}}},
jI(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbS(),o=J.P(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.L)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcp().aq(0,new A.rK(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bs(B.iK,n,"reads "+l.q(0)+" but writer "+k.a+" produced "+j.q(0)))}}},
jH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcp(),o=J.P(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.y6(p,t.oG)
for(l=0;l<p;++l)m[l]=A.Z(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbS(),p=J.P(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.L)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.d_(s,!1,!1,p)
s=a.length
i=A.d_(s,!1,!1,p)
h=new A.rJ(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bs(B.iN,a[q].a,"participates in a resource dependency cycle"))}}}}
A.rN.prototype={
$1(a){t.A.a(a)
return A.yg()},
$S:12}
A.rM.prototype={
$1(a){t.A.a(a)
return A.yg()},
$S:12}
A.rL.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.rK.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.rJ.prototype={
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
r=A.fq(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:21}
A.rH.prototype={}
A.mo.prototype={$ic5:1,
gE(){return this.a},
gF(){return this.b},
geH(){return this.c}}
A.iD.prototype={
lj(a){var s,r,q,p=a.c
p.C()
s=this.a.bM(a.a)
p=p.a9()
r=s.d.gaj()
q=A.z(r)
return A.aW(new A.G(r,q.i("B(1)").a(p.gal()),q.i("G<1,B>")))},
ghY(){return new A.bB(this.nh(),t.Br)},
nh(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$ghY(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bQ(),n=o.$ti,o=new A.cb(o.a(),n.i("cb<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.W(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a9()
f=f.gaj()
d=A.z(f)
r=5
return a.b=new A.mo(h,g,A.aW(new A.G(f,d.i("B(1)").a(i.gal()),d.i("G<1,B>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iEY:1}
A.rO.prototype={
$3(a,b,c){return new A.cB(A.h(a),A.h(b),A.al(c))},
$S:176}
A.lr.prototype={
gh3(){var s=this.d
return s===$?this.d=new A.tZ(this.c,A.m(t.Aj,t.y)):s},
da(a,b){var s,r
if(this.x)A.f(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.aD(a,b)
s.c.k(0,r.a,s.b9(a))
this.f.l(0,r)
return r},
nZ(a){if(this.x)A.f(A.k("resource library is disposed"))
this.a.aI(a)
this.f.a4(0,a)},
eq(a,b,c,d,e,f){var s,r
if(this.x)A.f(A.k("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.r("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.r("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aD(new A.dd(new A.kF(f,d,1,!0,e,B.b9,B.cX,a),A.d_(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a1(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.I(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.h
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a4(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aI(k)}r=i.r
q=A.I(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.aI(q[l])
q=i.f
o=A.I(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.aI(o[l])
s.P(0)
r.P(0)
q.P(0)
p.a1()
i.x=!0},
$iF_:1}
A.uM.prototype={}
A.mN.prototype={$ic5:1,
gE(){return this.a},
gF(){return this.b},
geH(){return this.c}}
A.wn.prototype={
$1(a){var s=this.a.w.a.eu(a),r=s.b!=null,q=r?s.d:s.e
return new A.iF(s.c,r,q,s.f)},
$S:180}
A.wo.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().i0(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().i0(b)
throw A.a(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:182}
A.wm.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.wf.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gX(r)},
$S:52}
A.wg.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bp
s=q.b.z
r=s.length===0?null:B.a.gX(s)
return A.J3(s,3,q.a.d,r)},
$S:53}
A.wl.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.wa.prototype={
$0(){return this.a.at.a},
$S:54}
A.wc.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.wb.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.wk.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.w8.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.w9.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.wh.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.wi.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.wj.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:5}
A.we.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.wd.prototype={
$0(){return this.a.at.w},
$S:55}
A.wq.prototype={
$0(){return this.a},
$S:56}
A.vq.prototype={}
A.mz.prototype={$iEX:1}
A.ml.prototype={$iE3:1}
A.rW.prototype={
gaR(){var s=this.w
return s==null?A.f(A.k("renderer is not initialized")):s},
hX(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bK)throw A.a(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.Z)throw A.a(A.k("renderer device is context lost"))
m.e=B.mm
try{m.r=s.ib()
r=m.b
q=A.iu(a)
p=r.a
if(p.a!=null)A.f(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.iu(a)
p.d=1
r.b.hW(q)
r=A.Et()
m.w=new A.lr(A.Ev(s),r,A.Fe(s),A.Z(t.kc),A.Z(t.pw),A.Z(t.Aj))
r=new A.ls()
p=new A.ps(s,r)
q=A.iu(a)
o=p.dB(q,a)
r.hW(q)
p.c=new A.h9(new A.lh(0,q,B.bM),o,B.ai)
m.x=p
m.y=new A.lk(s,A.m(t.N,t.CH))
m.as=a
A.BG(m)
m.e=B.bL}catch(n){s=m.y
if(s!=null)s.bN()
s=m.x
if(s!=null)s.a1()
s=m.w
if(s!=null)s.a1()
m.w=null
m.e=B.bK
throw n}return A.zX(t.H)},
lB(a,b){var s,r,q,p,o,n,m=this,l=null
m.kS()
m.c_()
r=B.a.p(m.d,a)
if(!r)throw A.a(A.r("world was not created by this renderer",l))
if(m.at!=null)throw A.a(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gag(0))A.f(A.r("CameraView.eye must be finite: "+q.q(0),l))
q=r.e
if(!q.gag(0)||q.gbA()<1e-12)A.f(A.r("CameraView.forward must be finite and nonzero: "+q.q(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.f(A.r("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.f(A.r("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gag(0)||!r.b.gag(0)||!r.c.gag(0))A.f(A.r("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.f(A.r("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ah)A.f(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ah
o.c=0
B.a.P(o.a)
s=o
try{r=m.r
if((r==null?A.f(A.k("renderer is not initialized")):r).z)m.b$=m.a.lC()
return s}catch(n){if(o.b!==B.ah)A.f(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.ij
m.f3()
m.ax=m.at=null
throw n}},
mO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c_()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.a(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ah)A.f(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.lH(l,0,A.fy(m.c,"count",t.S),A.z(l).c).bV(0,!1)
m.b=B.ii
q=k
try{p=A.GX(a1,r,s,q)
o=p.a.j3()
m=o.gK().dg(0,new A.rX())
l=m.$ti
n=new A.cF(m,l.i("aR(1)").a(new A.rY()),l.i("cF<1,aR>")).bn(0,B.cH,new A.rZ(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gci()
g=g.c.gci()
e=a1.w
e.a.gci()
e.c.gci()
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
return new A.p5(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kf(s.e)
a1.ax=a1.at=null}},
kS(){var s,r,q,p=this
if(p.e!==B.dO)return
if(p.a.b===B.Z)throw A.a(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.k("resource library is disposed"))
s.a.er()
s.c.er()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.k("GPU resource adapter is not initialized"))
s.c=new A.h9(q.a,s.dB(A.iu(r),r),B.ai)
s=p.y
s.c=null
s.b.P(0)
A.BG(p)
p.e=B.bL},
c_(){var s=this,r=s.e
if(r!==B.bL)throw A.a(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.Z){s.k5()
s.e=B.dO
throw A.a(A.k("renderer context lost"))}}}
A.rX.prototype={
$1(a){return B.c.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:57}
A.rY.prototype={
$1(a){return t.h6.a(a).b},
$S:58}
A.rZ.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aR(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:59}
A.mw.prototype={}
A.uY.prototype={
kf(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.i)A.f(A.k(u.k))
r=s.h6(o)
if(r.b)A.f(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.mw(o))}catch(q){p.dD(o)}},
f3(){var s=this.b$
this.b$=null
if(s!=null)this.dD(s)},
k5(){var s,r,q
this.f3()
s=this.a$
r=J.A6(s.slice(0),A.z(s).c)
B.a.P(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.dD(r[q].b)},
dD(a){var s,r
try{s=this.a
s.a.deleteQuery(s.h6(a).a)}catch(r){}}}
A.mD.prototype={}
A.iL.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bR.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ibh:1}
A.bN.prototype={
G(a,b){var s
t.z3.a(b)
s=B.b.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ibh:1}
A.b0.prototype={}
A.xT.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:60}
A.xU.prototype={
$1(a){return t.E0.a(a).b},
$S:61}
A.xR.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:62}
A.xS.prototype={
$1(a){return t.EH.a(a).b},
$S:63}
A.oI.prototype={}
A.oH.prototype={}
A.fC.prototype={
gaj(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.B(o,n,p),new A.B(r,n,p),new A.B(o,q,p),new A.B(r,q,p),new A.B(o,n,s),new A.B(r,n,s),new A.B(o,q,s),new A.B(r,q,s)],t.k)},
q(a){return"Aabb("+this.a.q(0)+", "+this.b.q(0)+")"}}
A.f1.prototype={}
A.fV.prototype={
v(){return"FrustumTest."+this.b}}
A.p6.prototype={
ih(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b5
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ik:B.il}}
A.p7.prototype={
$4(a,b,c,d){var s=new A.B(a,b,c),r=new A.f1(s,d),q=Math.sqrt(s.gbA())
return q<1e-9?r:new A.f1(s.a3(0,1/q),d/q)},
$S:64}
A.dz.prototype={
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dz(h)},
ik(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.B(k,j,i):new A.B(k/h,j/h,i/h)},
ej(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.f(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
return new A.dz(h)},
gag(a){return B.q.a7(this.a,new A.qy())},
q(a){return"Mat4("+A.w(this.a)+")"}}
A.qy.prototype={
$1(a){return isFinite(A.b1(a))},
$S:4}
A.ln.prototype={
q(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.hm.prototype={
C(){var s=this.a
if(!s.gag(0))throw A.a(A.r("Transform.translation must be finite: "+s.q(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.a(A.r("Transform.rotation must be finite: "+s.q(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.a(A.r("Transform.scale must be finite and positive: "+A.w(s),null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.Ag(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.Ag(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
q(a){return"Transform("+this.a.q(0)+", "+this.b.q(0)+", scale="+A.w(this.c)+")"}}
A.B.prototype={
a0(a,b){return new A.B(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.B(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.B(this.a*b,this.b*b,this.c*b)},
bl(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.B(s*r-q*p,q*o-n*r,n*p-s*o)},
gbA(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gbA())},
gag(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gah(){var s=this,r=Math.sqrt(s.gbA())
return r<1e-9?B.A:new A.B(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.B&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gR(a){return A.d1(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.k0.prototype={
v(){return"AtmosphericParticleAnchor."+this.b}}
A.nB.prototype={}
A.fE.prototype={}
A.nA.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.a(A.r("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.as("origin",l.d),new A.as("halfExtents",s),new A.as("initialVelocity",l.f),new A.as("acceleration",l.r)],t.c2)
r.push(new A.as("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.a(A.r("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.a(A.r("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.a(A.r("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.a(A.r("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.a(A.r("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.a(A.r("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.a(A.r("AtmosphericParticleField.particleScale must be finite and > 0",k))},
cq(a,b){var s,r,q,p,o,n=this,m=null
n.C()
s=n.z
if(b>=s)throw A.a(A.b_(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.S(a.w+n.cL(b,0)*r,r)
switch(n.c.a){case 0:s=B.A
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a0(0,n.d).a0(0,new A.B((n.cL(b,1)*2-1)*p.a,(n.cL(b,2)*2-1)*p.b,(n.cL(b,3)*2-1)*p.c))
p=o.a0(0,n.k6(q))
s=n.lh(q)
if(!isFinite(q)||q<0)A.f(A.r("atmospheric particle age must be finite and >= 0",m))
if(!o.gag(0)||!p.gag(0)||!s.gag(0))A.f(A.r("atmospheric particle kinematics must be finite",m))
return new A.fE(q,o,p,s)},
j9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.C3.a(c)
f.C()
for(s=f.z,r=a.a,q=f.as,p=f.cy,o=f.at,n=f.a,m=f.b,l=0,k=0;k<s;++k){j=f.cq(b,k)
if(!c.$1(j))continue
i=o?f.fU(j.d):B.aK
h=new A.hm(j.c,i,q)
g=new A.b9(n,m,h,-1,B.aD,B.N,!1,!1,k,p)
if(a.b!==B.ah)A.f(A.k("FrameQueue.submit called outside an active frame"))
h.C()
h=a.c
if(h<r.length)B.a.k(r,h,g)
else B.a.l(r,g);++a.c;++l}return l},
mY(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.C()
s=A.zW(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.cq(a,n)
if(p)h.fU(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.ih(new A.fC(new A.B(k-q,j-q,i-q),new A.B(k+q,j+q,i+q)))!==B.b5)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.r("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.k("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.nB(r,o,q)},
lh(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a0(0,this.f.ab(0,s).a3(0,r))},
k6(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a3(0,a).a0(0,this.f.ab(0,s).a3(0,(1-q)/r))},
fU(a){var s,r=a.gah()
if(r.aa(0,B.A))return B.aK
s=B.b.A(B.ar.bl(r),-1,1)
if(s>0.999999)return B.aK
if(s<-0.999999)return A.rC(B.e8,3.141592653589793)
return A.rC(B.ar.bx(r),Math.acos(s))},
cL(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.iY.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hU.prototype={
gE(){return this.f},
aA(a,b){B.a.l(a.a,new A.aB(this.f,B.P,A.c([new A.R(this.x,B.j),new A.R(this.y,B.k)],t.C),!1))},
az(a){var s=this,r=s.a.aH(new A.bw(s.e,s.b,s.c,B.z,B.dk,B.dh)),q=A.db(s.d),p=t.n,o=s.r===B.em?new Float32Array(A.a1(A.c([1/s.Q,0],p))):new Float32Array(A.a1(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mc(new A.bj(s.f,A.c([new A.R(s.x,B.j),new A.R(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a1(){},
$iap:1}
A.mc.prototype={
aB(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bX(r,a.au(o.r).b)
A.bo(r,o.a.ak())
A.da(r,B.Y,1,0,0,0)
A.ca(r,o.b.b)
q=t._
p=o.d
if(o.e)A.FB(r,0,q.a(p.$0()))
else A.aH(r,0,q.a(p.$0()))
A.x(r,"uSource",B.x)
A.x(r,"uTexelStep",new A.y(B.ap,o.f))
A.bz(r,o.c)
s.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.k7.prototype={
gE(){return"bloomComposite"},
aA(a,b){B.a.l(a.a,new A.aB("bloomComposite",B.P,A.c([new A.R(this.f,B.j),new A.R(this.r,B.j),new A.R(this.w,B.k)],t.C),!1))},
az(a){var s=this,r="bloomComposite",q=s.a.aH(new A.bw(r,s.b,s.c,B.z,B.kK,B.kq)),p=A.db(s.d),o=s.w,n=A.c([new A.R(s.f,B.j),new A.R(s.r,B.j),new A.R(o,B.k)],t.C)
return A.c([new A.md(new A.bj(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a1(){},
$iap:1}
A.md.prototype={
aB(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bX(r,a.df(q.f).b)
A.FC(r,1)
A.bo(r,B.fv)
A.ca(r,q.b.b)
A.aH(r,0,t._.a(q.d.$0()))
A.x(r,"uBloom",B.x)
A.x(r,"uBloomStrength",new A.y(B.e,p))
A.bz(r,q.c)
s.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.kk.prototype={
gE(){return"depthPrepass"},
aA(a,b){B.a.l(a.a,new A.aB("depthPrepass",B.iF,A.c([new A.R(this.w,B.k)],t.C),!1))},
az(a){var s=this,r="depthPrepass",q=s.a.aH(new A.bw(r,s.b,s.c,B.dj,B.di,B.jK))
return A.c([new A.mg(new A.bj(r,A.c([new A.R(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a1(){},
$iap:1}
A.mg.prototype={
aB(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bX(a1,a2.au("sceneDepth").b)
A.bo(a1,d.a.ak())
A.da(a1,B.b2,1,0,0,0)
A.ca(a1,d.b.b)
A.x(a1,"uVertexSnapGrid",new A.y(B.e,a0.ax))
A.x(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gF()
A.x(a1,"uViewProjection",new A.y(B.w,new Float32Array(A.a1(a))))
A.x(a1,"uModel",new A.y(B.w,new Float32Array(A.a1(i.c.a9().a))))
A.xQ(b,k,!1)
d.l2(b,j.gF().b,p)
h=q.$1(j.gF().a)
i=h.a
if(a1.b!==B.i)A.f(A.k(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.i)A.f(A.k(c))
e=A.h(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.h(o.WebGL2RenderingContext.UNSIGNED_INT):A.h(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bG(g,f)}else{if(a1.b!==B.i)A.f(A.k(c))
m.drawArraysInstanced(A.h(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bG(g,f)}}},
l2(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aH(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aW?0.5:0))
A.x(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.ak()
A.bo(q,r.go?s.eG(!1):s)},
$iaf:1,
gF(){return this.a}}
A.j_.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.i0.prototype={
gE(){return this.f},
aA(a,b){B.a.l(a.a,new A.aB(this.f,B.P,A.c([new A.R(this.w,B.j),new A.R(this.x,B.k)],t.C),!1))},
az(a){var s=this,r=s.a.aH(new A.bw(s.e,s.b,s.c,B.z,B.dk,B.dh)),q=A.db(s.d),p=t.n,o=s.r===B.en?new Float32Array(A.a1(A.c([1/s.z,0],p))):new Float32Array(A.a1(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mh(new A.bj(s.f,A.c([new A.R(s.w,B.j),new A.R(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a1(){},
$iap:1}
A.mh.prototype={
aB(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bX(r,a.au(q.f).b)
A.bo(r,q.a.ak())
A.da(r,B.Y,1,0,0,0)
A.ca(r,q.b.b)
A.aH(r,0,t._.a(q.d.$0()))
A.x(r,"uSource",B.x)
A.x(r,"uTexelStep",new A.y(B.ap,q.e))
A.bz(r,q.c)
s.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.ko.prototype={
gE(){return"dofComposite"},
aA(a,b){var s=this
B.a.l(a.a,new A.aB("dofComposite",B.P,A.c([new A.R(s.z,B.j),new A.R(s.Q,B.j),new A.R(s.as,B.j),new A.R(s.at,B.k)],t.C),!1))},
az(a){var s=this,r="dofComposite",q=s.a.aH(new A.bw(r,s.b,s.c,B.z,B.kI,B.jz)),p=A.db(s.d)
return A.c([new A.mi(new A.bj(r,A.c([new A.R(s.z,B.j),new A.R(s.Q,B.j),new A.R(s.as,B.j),new A.R(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a1(){},
$iap:1}
A.mi.prototype={
aB(a){var s,r=this,q=a.au("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bX(n,q.b)
A.bo(n,r.a.ak())
A.ca(n,r.b.b)
s=t._
A.aH(n,0,s.a(r.d.$0()))
A.x(n,"uSharp",B.x)
A.aH(n,1,s.a(r.e.$0()))
A.x(n,"uBlurred",B.aq)
A.aH(n,2,s.a(r.f.$0()))
A.x(n,"uSceneDepth",B.e7)
A.x(n,"uNear",new A.y(B.e,o.f))
A.x(n,"uFar",new A.y(B.e,o.r))
A.x(n,"uFocusDistance",new A.y(B.e,r.w))
A.x(n,"uFocusRange",new A.y(B.e,r.x))
A.x(n,"uStrength",new A.y(B.e,a.c.e.d))
A.bz(n,r.c)
p.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.kH.prototype={
gE(){return"grade"},
aA(a,b){B.a.l(a.a,new A.aB("grade",B.P,A.c([new A.R(this.r,B.j),new A.R(this.w,B.k)],t.C),!1))},
az(a){var s=this,r=s.a.aH(new A.bw("grade",s.b,s.c,B.z,B.kG,B.kr)),q=A.db(s.d),p=s.r,o=s.w
return A.c([new A.mn(new A.bj("grade",A.c([new A.R(p,B.j),new A.R(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a1(){},
$iap:1}
A.mn.prototype={
aB(a){var s=this,r=a.au(s.f.a),q=a.b,p=q.a
A.bX(p,a.au(s.r.a).b)
A.bo(p,s.a.ak())
A.ca(p,s.b.b)
A.aH(p,0,r.b)
A.x(p,"uScene",B.x)
A.aH(p,1,t._.a(s.d.$0()))
A.x(p,"uLut",B.aq)
A.x(p,"uLutSize",new A.y(B.e,s.e))
A.x(p,"uStrength",new A.y(B.e,a.c.e.as))
A.bz(p,s.c)
q.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.im.prototype={
gE(){return"msaaResolve"},
aA(a,b){B.a.l(a.a,new A.aB("msaaResolve",B.iG,A.c([new A.R(this.b,B.j),new A.R(this.c,B.k)],t.C),!0))},
az(a){var s=this.b,r=this.c
return A.c([new A.mu(new A.bj("msaaResolve",A.c([new A.R(s,B.j),new A.R(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a1(){},
$iap:1}
A.mu.prototype={
aB(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.df(this.c),j=a.df(this.d),i=this.b
if(i.b!==B.i)A.f(A.k(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.f(A.r("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.f(A.r("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.f(A.r("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
$iaf:1,
gF(){return this.a}}
A.fG.prototype={}
A.k8.prototype={
au(a){var s=this.a.h(0,a)
if(s==null)throw A.a(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
df(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.au(s)},
$iEW:1}
A.yh.prototype={}
A.ix.prototype={
gE(){return"present"},
aA(a,b){B.a.l(a.a,new A.aB("present",B.iH,A.c([new A.R(this.f,B.j)],t.C),!1))},
az(a){var s,r=this,q=r.a.aH(new A.bw("present",r.b,r.c,B.z,B.kT,B.jw)),p=A.db(r.d)
r.w=p
s=r.f
return A.c([new A.mA(new A.bj("present",A.c([new A.R(s,B.j)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a1(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.b(s.a))
this.w=null}},
$iap:1}
A.mA.prototype={
aB(a){var s,r=this,q=a.df(r.d),p=a.b,o=p.a
A.bX(o,null)
A.bo(o,r.a.ak())
A.ca(o,r.b.b)
A.bz(o,r.c)
A.aH(o,0,q.b)
s=a.c.e
A.x(o,"uExposure",new A.y(B.e,s.a))
A.x(o,"uVignette",new A.y(B.e,s.e))
A.x(o,"uGrain",new A.y(B.e,s.f))
A.x(o,"uOutputEncoding",new A.y(B.e,r.e===B.b3?1:0))
A.x(o,"uToneMap",B.e6)
p.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.ll.prototype={
gE(){return"ps1Quantize"},
aA(a,b){B.a.l(a.a,new A.aB("ps1Quantize",B.P,A.c([new A.R(this.e,B.j),new A.R(this.f,B.k)],t.C),!1))},
az(a){var s=this,r="ps1Quantize",q=s.a.aH(new A.bw(r,s.b,s.c,B.z,B.kM,B.jq)),p=A.db(s.d),o=s.e,n=s.f
return A.c([new A.mB(new A.bj(r,A.c([new A.R(o,B.j),new A.R(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a1(){},
$iap:1}
A.mB.prototype={
aB(a){var s=this,r=a.au(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bX(o,a.au(s.e.a).b)
A.bo(o,s.a.ak())
A.ca(o,s.b.b)
A.aH(o,0,r.b)
A.x(o,"uScene",B.x)
A.x(o,"uQuantizationBits",new A.y(B.e,p.ay))
A.x(o,"uDitherStrength",new A.y(B.e,p.Q))
A.bz(o,s.c)
q.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.fb.prototype={}
A.lB.prototype={
gE(){return"shadow"},
aA(a,b){B.a.l(a.a,new A.aB("shadowCaster",B.iE,A.c([new A.R(this.z,B.k)],t.C),!1))},
az(a){var s=this,r="shadowCaster",q=s.a.aH(new A.bw(r,s.b,s.c,B.dj,B.di,B.kp))
return A.c([new A.mE(new A.bj(r,A.c([new A.R(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a1(){},
$iap:1}
A.mE.prototype={
aB(a){var s,r,q,p,o=this,n=a.au("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bX(s,n.b)
A.bo(s,o.a.ak())
A.da(s,B.b2,1,0,0,0)
return}r=A.AE(l)
o.x.$1(r)
s=m.a
A.bX(s,n.b)
A.bo(s,o.a.ak())
A.da(s,B.b2,1,0,0,0)
A.ca(s,o.b.b)
A.x(s,"uAlbedo",B.x)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.k7(m,s[p],l,r)},
fY(a,b){var s,r=this.d.$1(b),q=a.a
A.aH(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aW?0.5:0))
s=this.a.ak()
A.bo(q,r.go?s.eG(!1):s)},
k7(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.x(s,"uUseInstances",B.bZ)
n.fV(a,b.gF().c,d)
n.fY(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.bz(s,q.a)
s=q.b
r=q.c
if(s)a.e0(r,q.d,0)
else a.aK(r,0)}else if(b instanceof A.dx){p=b.a
if(!p.gF().r)return
if(n.lc(b,c)===B.n3)return
n.fV(a,p.gF().c,d)
A.xQ(a,b,!1)
n.fY(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.bz(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.e1(r,q.d,o,0)
else a.e_(r,0,o)}else throw A.a(A.r("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eK(b).q(0),null))},
lc(a,b){return B.n2},
fV(a,b,c){var s=a.a
A.x(s,"uModel",new A.y(B.w,new Float32Array(A.a1(b.a9().a))))
A.x(s,"uLightViewProjection",new A.y(B.w,new Float32Array(A.a1(c.a.a))))},
$iaf:1,
gF(){return this.a}}
A.x2.prototype={
$1(a){return this.a.a=a},
$S:66}
A.x3.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:51}
A.lC.prototype={
gE(){return"shadowedWorld"},
aA(a,b){var s=this,r=A.c([new A.R(s.db,B.j)],t.C)
if(s.ay)r.push(new A.R(s.dx,B.j))
r.push(new A.R(s.dy,B.k))
B.a.l(a.a,new A.aB("shadowedWorld",B.cZ,r,!1))},
az(a){var s=this,r="shadowedWorld",q=s.a.aH(new A.bw(r,s.b,s.c,B.kQ,B.kH,B.jP)),p=A.c([new A.R(s.db,B.j)],t.C)
if(s.ay)p.push(new A.R(s.dx,B.j))
p.push(new A.R(s.dy,B.k))
return A.c([new A.mF(new A.bj(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a1(){},
$iap:1}
A.mF.prototype={
aB(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.au("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bX(b1,a4.b)
A.bo(b1,a2.a.ak())
s=a8.a
A.da(b1,B.cs,1,s.c,s.b,s.a)
A.ca(b1,a2.b.b)
A.x(b1,"uAlbedo",B.x)
A.x(b1,"uNormalMap",B.np)
A.x(b1,"uOrmMap",B.nq)
A.x(b1,"uEmissiveMap",B.nr)
A.x(b1,"uLightmap",B.ns)
s=t._
A.aH(b1,1,s.a(a2.y.$0()))
A.x(b1,"uShadowMap",B.aq)
r=a7.d
q=t.n
A.x(b1,"uCameraPosition",new A.y(B.o,new Float32Array(A.a1(A.c([r.a,r.b,r.c],q)))))
A.x(b1,"uShadowMapTexelSize",new A.y(B.ap,new Float32Array(A.a1(A.c([1/a2.ch,1/a2.CW],q)))))
A.aH(b1,2,s.a(a2.at.$0()))
A.x(b1,"uSsao",B.e7)
A.x(b1,"uVertexSnapGrid",new A.y(B.e,a9.ax))
A.x(b1,"uSceneColorSize",new A.y(B.ap,new Float32Array(A.a1(A.c([a2.ax,a2.ay],q)))))
A.x(b1,"uViewProjection",new A.y(B.w,new Float32Array(A.a1(a7.c.a))))
A.x(b1,"uView",new A.y(B.w,new Float32Array(A.a1(a7.a.a))))
A.x(b1,"uLightViewProjection",new A.y(B.w,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.x(b1,"uFogColor",new A.y(B.o,new Float32Array(A.a1(A.c([s.a,s.b,s.c],q)))))
A.x(b1,"uFogStart",new A.y(B.e,a8.c))
A.x(b1,"uFogEnd",new A.y(B.e,a8.d))
s=a8.e
A.x(b1,"uFogHeightFalloff",new A.y(B.e,s==null?0:s))
s=a8.f
A.x(b1,"uFogDensity",new A.y(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.P(r==null?B.bp:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.X
k=o?a3:p.c
if(k==null)k=B.ar
A.x(b1,"uLightPosition",new A.y(B.o,new Float32Array(A.a1(A.c([l.a,l.b,l.c],q)))))
A.x(b1,"uLightDirection",new A.y(B.o,new Float32Array(A.a1(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.a_
A.x(b1,"uLightColor",new A.y(B.o,new Float32Array(A.a1(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.x(b1,"uLightIntensity",new A.y(B.e,r==null?0:r))
A.x(b1,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.X
g=r?a3:i.b
if(g==null)g=B.a_
A.x(b1,"uDirectionalDirection",new A.y(B.o,new Float32Array(A.a1(A.c([h.a,h.b,h.c],q)))))
A.x(b1,"uDirectionalColor",new A.y(B.o,new Float32Array(A.a1(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.x(b1,"uDirectionalIntensity",new A.y(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.A
c=n?a3:e.c
if(c==null)c=B.a_
m=""+f
A.x(b1,"uPointPosition"+m,new A.y(B.o,new Float32Array(A.a1(A.c([d.a,d.b,d.c],q)))))
A.x(b1,"uPointColor"+m,new A.y(B.o,new Float32Array(A.a1(A.c([c.a,c.b,c.c],q)))))
b=n?a3:e.d
if(b==null)b=0
A.x(b1,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.x(b1,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a3
r=e==null
d=r?a3:e.b
if(d==null)d=B.A
a=r?a3:e.c
if(a==null)a=B.ar
c=r?a3:e.d
if(c==null)c=B.a_
n=""+f
A.x(b1,"uDirectSpotPosition"+n,new A.y(B.o,new Float32Array(A.a1(A.c([d.a,d.b,d.c],q)))))
A.x(b1,"uDirectSpotDirection"+n,new A.y(B.o,new Float32Array(A.a1(A.c([a.a,a.b,a.c],q)))))
A.x(b1,"uDirectSpotColor"+n,new A.y(B.o,new Float32Array(A.a1(A.c([c.a,c.b,c.c],q)))))
m=r?a3:e.e
if(m==null)m=0
A.x(b1,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=r?a3:e.f
if(m==null)m=1
A.x(b1,"uDirectSpotRange"+n,new A.y(B.e,m))
m=r?a3:e.r
if(m==null)m=0.3
A.x(b1,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=r?a3:e.w
if(m==null)m=0.5
A.x(b1,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
r=r?0:1
A.x(b1,"uDirectSpotEnabled"+n,new A.y(B.e,r))}s=o?a3:p.f
A.x(b1,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a3:p.r
if(s==null)s=0.3
A.x(b1,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a3:p.w
if(s==null)s=0.5
A.x(b1,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=a8.r
A.x(b1,"uAmbientColor",new A.y(B.o,new Float32Array(A.a1(A.c([a0.a,a0.b,a0.c],q)))))
A.x(b1,"uAmbientIntensity",new A.y(B.e,a8.w))
A.x(b1,"uRainWetness",new A.y(B.e,a9.w))
A.x(b1,"uSurfaceSnowCoverage",new A.y(B.e,a9.x))
A.x(b1,"uSurfaceDissolution",new A.y(B.e,a9.y))
for(b1=a6.a,s=b1.length,r=a9.at,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.fq(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.fq(a5,a6[a1],r)},
fq(a,b,c){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.x(s,"uUseInstances",B.bZ)
n.fW(a,b.gF().c)
n.fZ(a,b.gF().b,b.gF().e,b.gF().f,c,b.gF().w)
r=n.c.$1(b.gF().a)
A.bz(s,r.a)
s=r.b
q=r.c
if(s)a.e0(q,r.d,0)
else a.aK(q,0)}else if(b instanceof A.dx){p=b.a
n.fW(a,p.gF().c)
A.xQ(a,b,!0)
n.fZ(a,p.gF().b,p.gF().e,p.gF().f,c,p.gF().w)
r=n.c.$1(p.gF().a)
A.bz(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.e1(q,r.d,o,0)
else a.e_(q,0,o)}else throw A.a(A.r("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eK(b).q(0),null))},
fZ(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aH(o,0,p.a(s.e.$1(q.b)))
A.aH(o,3,p.a(s.f.$1(r)))
A.aH(o,4,p.a(s.r.$1(r)))
A.aH(o,5,p.a(s.w.$1(r)))
A.aH(o,6,p.a(s.x.$1(r)))
A.x(o,"uAlphaCutoff",new A.y(B.e,q.fx===B.aW?0.5:0))
A.x(o,"uOpaqueCoverage",new A.y(B.e,c===B.aD?0:1))
A.x(o,"uAffineWarpStrength",new A.y(B.e,0))
p=t.n
A.x(o,"uMaterialTint",new A.y(B.o,new Float32Array(A.a1(A.c([q.d,q.e,q.f],p)))))
A.x(o,"uEmissiveStrength",new A.y(B.e,q.w))
A.x(o,"uUvScaleOffset",new A.y(B.no,new Float32Array(A.a1(A.c([q.db,q.dx,0,0],p)))))
A.x(o,"uNormalStrength",new A.y(B.e,1))
A.x(o,"uRoughness",new A.y(B.e,q.at))
A.x(o,"uMetallic",new A.y(B.e,0))
A.x(o,"uClearcoatStrength",new A.y(B.e,0))
A.x(o,"uClearcoatRoughness",new A.y(B.e,0.2))
A.x(o,"uOcclusionStrength",new A.y(B.e,1))
A.x(o,"uLightmapIntensity",new A.y(B.e,0))
A.x(o,"uReceivesShadow",new A.y(B.e,q.id&&f?1:0))
A:{p=r
if(B.aD===c){switch(d.a){case 0:p=B.fx
break
case 1:p=B.fw
break}break A}if(B.O===c||B.fu===c){p=s.a.ak()
break A}}A.bo(o,q.go?p.eG(!1):p)},
fW(a,b){var s=b.a9(),r=a.a
A.x(r,"uModel",new A.y(B.w,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.y(B.w,new Float32Array(A.a1(s.ej().a))))},
$iaf:1,
gF(){return this.a}}
A.lE.prototype={
gE(){return"ssaoOcclusion"},
aA(a,b){B.a.l(a.a,new A.aB("ssaoOcclusion",B.cY,A.c([new A.R(this.w,B.k)],t.C),!1))},
az(a){var s=this,r="ssaoOcclusion",q=s.a.aH(new A.bw(r,s.b,s.c,B.z,B.kL,B.jl)),p=A.db(s.d)
return A.c([new A.mI(new A.bj(r,A.c([new A.R(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a1(){},
$iap:1}
A.mI.prototype={
aB(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bX(m,a.au("ssaoRaw").b)
A.bo(m,p.a.ak())
if(n<=0){A.da(m,B.Y,1,1,1,1)
return}A.da(m,B.Y,1,0,0,0)
s=p.e.$0()
A.ca(m,p.b.b)
A.aH(m,0,t._.a(p.d.$0()))
A.x(m,"uSceneDepth",B.x)
A.x(m,"uNear",new A.y(B.e,s.f))
A.x(m,"uFar",new A.y(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.x(m,"uProjScaleX",new A.y(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.x(m,"uProjScaleY",new A.y(B.e,r[5]))
A.x(m,"uRadius",new A.y(B.e,p.f))
A.x(m,"uStrength",new A.y(B.e,n))
A.bz(m,p.c)
o.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.lD.prototype={
gE(){return"ssaoBlur"},
aA(a,b){B.a.l(a.a,new A.aB("ssaoBlur",B.cY,A.c([new A.R(this.y,B.j),new A.R(this.z,B.k)],t.C),!1))},
az(a){var s=this,r="ssaoBlur",q=s.a.aH(new A.bw(r,s.b,s.c,B.z,B.kB,B.kt)),p=A.db(s.d)
return A.c([new A.mH(new A.bj(r,A.c([new A.R(s.y,B.j),new A.R(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a1(){},
$iap:1}
A.mH.prototype={
aB(a){var s,r,q=this,p=a.b,o=p.a
A.bX(o,a.au("ssaoBlurred").b)
A.bo(o,q.a.ak())
if(a.c.e.c<=0){A.da(o,B.Y,1,1,1,1)
return}A.da(o,B.Y,1,0,0,0)
s=q.f.$0()
A.ca(o,q.b.b)
r=t._
A.aH(o,0,r.a(q.d.$0()))
A.x(o,"uSsaoRaw",B.x)
A.aH(o,1,r.a(q.e.$0()))
A.x(o,"uSceneDepth",B.aq)
A.x(o,"uTexelSize",new A.y(B.ap,new Float32Array(A.a1(A.c([1/q.r,1/q.w],t.n)))))
A.x(o,"uNear",new A.y(B.e,s.f))
A.x(o,"uFar",new A.y(B.e,s.r))
A.bz(o,q.c)
p.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.lT.prototype={
gE(){return"vhs"},
aA(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aB("vhs",B.P,A.c([new A.R(this.r,B.j),new A.R(s,B.L),new A.R(s,B.k)],t.C),!1))},
az(a){var s=this,r=s.a.aH(new A.bw("vhs",s.b,s.c,B.z,B.kE,B.js)),q=A.db(s.d),p=s.r,o=s.w
return A.c([new A.mQ(new A.bj("vhs",A.c([new A.R(p,B.j),new A.R(o,B.L),new A.R(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a1(){},
$iap:1}
A.mQ.prototype={
aB(a){var s,r=this,q=a.au(r.f.a),p=a.au(r.r.a),o=a.b,n=a.c.e,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bX(m,p.b)
A.bo(m,r.a.ak())
A.ca(m,r.b.b)
A.aH(m,0,q.b)
A.x(m,"uScene",B.x)
A.aH(m,1,t._.a(r.d.$0()))
A.x(m,"uHistory",B.aq)
A.x(m,"uTime",new A.y(B.e,r.e.$0()))
A.x(m,"uChromaWeight",new A.y(B.e,n.ch))
A.x(m,"uTrackingWeight",new A.y(B.e,l))
A.x(m,"uNoiseWeight",new A.y(B.e,n.cx))
A.x(m,"uHeadSwitchWeight",new A.y(B.e,n.cy))
A.x(m,"uDropoutWeight",new A.y(B.e,n.db))
A.x(m,"uGhostWeight",new A.y(B.e,s))
A.bz(m,r.c)
o.aK(3,0)},
$iaf:1,
gF(){return this.a}}
A.iF.prototype={}
A.m5.prototype={
gE(){return"world"},
aA(a,b){B.a.l(a.a,new A.aB("worldOpaqueTransparent",B.cZ,A.c([new A.R(this.e,B.k)],t.C),!1))},
az(a){var s=this,r=s.a.aH(new A.bw("safeWorld",s.b,s.c,B.kS,B.z,B.jk)),q=s.e
return A.c([new A.mT(new A.bj("worldOpaqueTransparent",A.c([new A.R(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a1(){},
$iap:1}
A.mT.prototype={
aB(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bX(j,a.au(n.d).b)
A.bo(j,n.a.ak())
s=k.a
A.da(j,B.cs,1,s.c,s.b,s.a)
A.ca(j,n.b.b)
A.x(j,"uViewProjection",new A.y(B.w,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.X
s=t.n
A.x(j,"uLightDir",new A.y(B.o,new Float32Array(A.a1(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.x(j,"uAmbientColor",new A.y(B.o,new Float32Array(A.a1(A.c([p.a,p.b,p.c],s)))))
A.x(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.hc(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.hc(m,l[o])},
hc(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dx){s=b.a
n.hd(a,s.gF().c)
A.xQ(a,b,!0)
r=n.c.$1(s.gF().a)
A.bz(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.e1(p,r.d,o,0)
else a.e_(p,0,o)}else if(t.yz.b(b)){q=a.a
A.x(q,"uUseInstances",B.bZ)
n.hd(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.bz(q,r.a)
q=r.b
p=r.c
if(q)a.e0(p,r.d,0)
else a.aK(p,0)}else throw A.a(A.r("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eK(b).q(0),null))},
hd(a,b){var s=b.a9(),r=a.a
A.x(r,"uModel",new A.y(B.w,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.y(B.w,new Float32Array(A.a1(s.ej().a))))},
$iaf:1,
gF(){return this.a}}
A.on.prototype={
cr(a){var s,r,q
a.C()
s=A.Z(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.S
else q=r===0?B.bF:B.K
return new A.en(q,s)},
iB(a){var s,r=this.cr(a).a
A:{if(B.S===r){s=B.dJ
break A}if(B.K===r){s=B.dI
break A}s=B.al
break A}return s}}
A.kE.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.i6.prototype={
v(){return"GpuBufferKind."+this.b}}
A.i9.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.kG.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.kD.prototype={}
A.kF.prototype={}
A.eU.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.i8.prototype={}
A.i7.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.fa.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.iJ.prototype={
q(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d7.prototype={
v(){return"UniformType."+this.b}}
A.y.prototype={}
A.fK.prototype={
v(){return"ClearMask."+this.b}}
A.kl.prototype={
aK(a,b){var s=this.a
if(s.b!==B.i)A.f(A.k(u.k))
s.a.drawArrays(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bG(a,1)},
e_(a,b,c){var s=this.a
if(s.b!==B.i)A.f(A.k(u.k))
s.a.drawArraysInstanced(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bG(a,c)},
e0(a,b,c){var s,r,q=this.a
if(q.b!==B.i)A.f(A.k(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bG(a,1)},
e1(a,b,c,d){var s,r,q=this.a
if(q.b!==B.i)A.f(A.k(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aU(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bG(a,c)},
$iDN:1}
A.fY.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.h9.prototype={
i0(a){var s=this.b.h(0,a)
if(s==null)throw A.a(A.k("resource is not in candidate: "+a))
return s}}
A.ps.prototype={
gn(){var s=this.c
if(s==null)throw A.a(A.k("GPU resource adapter is not initialized"))
return s},
d7(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.a(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.a(A.k("GPU resource candidate is already open"))
s=A.iu(a)
p=n.b
r=p.d7(s)
try{q=new A.h9(r,n.dB(s,a),B.ai)
n.d=q
return q}catch(o){p.ew(r)
throw o}},
a1(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.a(A.k("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dE(s.b)
r.b.a1()
r.c=null
r.e=!0},
dB(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("H<1>")
s=new A.H(k,i.a(new A.pt()),j)
for(h=s,g=J.P(h.a),h=new A.T(g,h.b,h.$ti.i("T<1>")),f=a.a;h.m();){r=g.gn()
q=A.B0(f,a.fo(r,a5))
J.eJ(a3,q)
J.be(a2,r,q)}e=A.I(new A.H(k,i.a(new A.pu()),j),j.i("n.E"))
B.a.Y(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.Cw(J.Dj(o,11))
if(i){h=J.aV(a2,"sceneColor")
h.toString
J.be(a2,o,h)}else{h=n
if(typeof h!=="number")return h.oG()
if(h>=2){h=J.aV(a2,"sceneColor#1")
h.toString
J.be(a2,o,h)}else{m=A.B0(f,a.fo(o,a5))
J.eJ(a3,m)
J.be(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.z(a0).i("bG<1>"),a0=new A.bG(a0,k),a0=new A.an(a0,a0.gt(0),k.i("an<Y.E>")),j=a.a,i=t.V,k=k.i("Y.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.yq(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fo(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.i8(s,s,1,B.b8,!0)}if(a==="sceneDepth")return new A.i8(n,m,1,B.b8,!0)
r=B.c.T(a,"ssao")||B.c.T(a,"bloomBlur")||B.c.T(a,"dofBlur")
q=r?B.d.ad(n+1,2):n
p=r?B.d.ad(m+1,2):m
s=a==="sceneColor"
o=s||B.c.T(a,"sceneColor#")
s=s?b.d:1
return new A.i8(q,p,s,o?B.cW:B.iB,o)},
dE(a){var s,r,q,p,o,n=A.eY(t.mf.a(a).gai(),t._)
for(n=A.fq(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.yq(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fa(a){if(this.d!==a||a.c!==B.ai)throw A.a(A.k("GPU resource candidate is not open"))}}
A.pt.prototype={
$1(a){return!B.c.T(A.q(a),"sceneColor#")},
$S:3}
A.pu.prototype={
$1(a){return B.c.T(A.q(a),"sceneColor#")},
$S:3}
A.hu.prototype={
v(){return"_SlotState."+this.b}}
A.ey.prototype={
sb_(a){this.c=this.$ti.i("1?").a(a)}}
A.d3.prototype={
aD(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ey(B.aU,n.i("ey<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.oA
p.sb_(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bL(a){return this.aD(a,null)},
W(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.a(A.eg(B.d2,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.eg(B.d3,a))
s=q.b
if(s===B.aV||s===B.aU)throw A.a(A.eg(B.aF,a))},
bM(a){var s,r,q=this.$ti
q.c.a(a)
this.W(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eB(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.W(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb_(b)},
aI(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.a(A.eg(B.d2,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.eg(B.d3,a))
r=q.b
if(r===B.aV||r===B.aU)throw A.a(A.eg(B.iR,a))
q.b=B.aV
q.sb_(null)
B.a.l(p.c,s);++p.e},
bQ(){return new A.bB(this.nj(),this.$ti.i("bB<+(1,2)>"))},
nj(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bQ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aV||j===B.aU){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.as(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.k5.prototype={
v(){return"BlendEquation."+this.b}}
A.eO.prototype={
v(){return"BlendFactor."+this.b}}
A.kg.prototype={
v(){return"CullFace."+this.b}}
A.kj.prototype={
v(){return"DepthFunc."+this.b}}
A.fT.prototype={
eG(a){var s=this
return A.zT(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bk.prototype={
v(){return"StateField."+this.b}}
A.uC.prototype={
mA(a){var s,r=this.a
if(r==null)return A.h4(B.kf,t.qL)
s=A.Z(t.qL)
if(r.a!==a.a)s.l(0,B.bR)
if(r.b!==a.b)s.l(0,B.bS)
if(r.c!==a.c)s.l(0,B.bT)
if(r.d!==a.d)s.l(0,B.bU)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bV)
if(r.r!==a.r)s.l(0,B.bW)
if(r.w!==a.w)s.l(0,B.bX)
if(r.x!==a.x)s.l(0,B.bY)
return s}}
A.dQ.prototype={$idw:1}
A.jq.prototype={}
A.jp.prototype={}
A.mS.prototype={}
A.m3.prototype={
ju(a){var s=this,r=A.b(s.a.canvas)
s.c=A.W(new A.uz(s))
s.d=A.W(new A.uA(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
ib(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c1(A.h(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c1(A.h(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c1(A.h(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c1(A.h(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c1(A.h(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fJ(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.hP(e.getParameter(A.h(k.WebGL2RenderingContext.RENDERER)))
m=A.hP(e.getParameter(A.h(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.rE("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c1(a){var s=A.hP(this.a.getParameter(a))
return typeof s=="number"?B.b.aC(s):0},
fJ(a){var s=A.hP(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iEa:1}
A.uz.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.Z},
$S:1}
A.uA.prototype={
$1(a){this.a.b=B.i},
$S:1}
A.vB.prototype={
lC(){var s,r=this
if(r.b!==B.i)A.f(A.k(u.k))
s=r.w?A.L(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dQ(new A.mS(s))},
h6(a){var s=a.a
if(!(s instanceof A.mS))throw A.a(A.a3(a,"query","is not a GPU timer query"))
return s}}
A.mR.prototype={}
A.uy.prototype={}
A.uB.prototype={
mr(a){var s=A.L(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.uy(A.Fw(s))}}
A.kn.prototype={
B(){var s=this
return A.F(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.k1.prototype={
gno(){var s=this.CW
return new A.am(s,A.o(s).i("am<2>")).bn(0,0,new A.nS(),t.i)},
je(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.f7()},
f7(){var s,r=this,q=r.k4
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
cm(){var s=this.a
if(A.q(s.state)==="suspended")A.b(s.resume())},
h0(a){var s,r,q=this
if(B.c.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.kJ.h(0,a)
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
ki(){var s,r,q,p,o,n,m,l=this.a,k=A.a7(l.sampleRate),j=B.b.aJ(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.ar()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
d6(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.ar()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.L(r.connect(q))
A.L(q.connect(p.h0(a)))
r.onended=A.W(new A.nU(r,q))
r.start()
return!0},
i7(a){return this.d6(a,1)},
i8(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ax.ar()*0.12)
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
l=j.fi(j.b.i5(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.hv(r,q,n,o,p,e,B.b.A(m,0,1)))
r.onended=A.W(new A.nT(j,o))
A.L(r.connect(q))
A.L(q.connect(n))
A.L(n.connect(o))
A.L(o.connect(p))
A.L(p.connect(j.h0(a)))
r.start()},
nR(a,b,c,d){return this.i8(a,b,c,1,d,null,null,null)},
fi(a){var s,r,q,p,o,n,m,l
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
eZ(a){var s,r,q,p,o=this
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
q.onended=A.W(new A.nV(o,q,p))
q.start()
o.cy=q},
dk(a){if(this.p2===a)return
this.p2=a
this.f7()},
iL(a){var s,r,q=this
q.dk(a.b===B.cd)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aY?1:0.55
r=q.c
r===$&&A.p()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.b(s.gain).value=0.35*q.p4},
br(a,b,c,d,e,f){var s,r,q=this
q.fr=B.b.A(c==null?q.fr:c,0,1)
q.fx=B.b.A(f==null?q.fx:f,0,1)
q.fy=B.b.A(b==null?q.fy:b,0,1)
q.go=B.b.A(a==null?q.go:a,0,1)
q.id=B.b.A(d==null?q.id:d,0,1)
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
eR(a){var s=null
return this.br(s,s,s,s,a,s)},
iI(a){var s=null
return this.br(s,s,a,s,s,s)},
iK(a){var s=null
return this.br(s,s,s,s,s,a)},
iH(a){var s=null
return this.br(s,a,s,s,s,s)},
iG(a){var s=null
return this.br(a,s,s,s,s,s)},
iJ(a){var s=null
return this.br(s,s,s,a,s,s)},
iF(a){if(this.ay===a)return
this.ay=a
this.bH()},
bH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cn(p,g)
m=n==null?i.fi(h.i5(p,g)):new A.aC(n.c,n.d,n.e)
l=A.a7(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.a7(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.a7(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.A(m.c,0,1)}}}
A.nS.prototype={
$2(a,b){return Math.max(A.b1(a),t.jS.a(b).r)},
$S:69}
A.nR.prototype={
$1(a){return this.it(t.q.a(a))},
it(a){var s=0,r=A.aM(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aN(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a5(A.aE(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a5(A.aE(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a5(A.aE(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ai(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$$1,r)},
$S:70}
A.nU.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.nT.prototype={
$1(a){var s=this.a.CW.a4(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.nV.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.hv.prototype={}
A.k2.prototype={
v(){return"AudioCategory."+this.b}}
A.nH.prototype={
jg(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.a(B.ib)
if(!B.a.a7(A.c([d.a,d.b,d.c],t.n),new A.nI()))throw A.a(B.hd)},
gE(){return this.a}}
A.nI.prototype={
$1(a){return isFinite(A.b1(a))},
$S:4}
A.nm.prototype={
jd(a,b){if(this.a.length===0)throw A.a(B.h1)
if(!B.a.a7(A.c([a.a,a.b,a.c],t.n),new A.nn()))throw A.a(B.hj)}}
A.nn.prototype={
$1(a){return isFinite(A.b1(a))},
$S:4}
A.hS.prototype={
C(){var s=t.n
if(B.a.O(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.no()))throw A.a(B.hG)
s=B.a.O(A.c([0,0.55,1],s),new A.np())
if(s)throw A.a(B.i0)},
cn(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.aC(-1.5,2e4,0)
if(a.ay)return new A.aC(-28,320,1)
return new A.aC(-12,1100,0.55)},
op(a){return this.cn(a,null)}}
A.no.prototype={
$1(a){return!isFinite(A.b1(a))},
$S:4}
A.np.prototype={
$1(a){A.b1(a)
return a<0||a>1},
$S:4}
A.nD.prototype={
jf(a){var s=A.o(a)
if(new A.ab(a,s.i("ab<1>")).O(0,new A.nF())||new A.am(a,s.i("am<2>")).O(0,new A.nG()))throw A.a(B.i7)}}
A.nF.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.nG.prototype={
$1(a){var s
t.a.a(a)
s=J.aO(a)
return s.gM(a)||s.O(a,new A.nE())},
$S:71}
A.nE.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.y2.prototype={}
A.nP.prototype={}
A.nJ.prototype={
jh(a,b,c){var s
for(s=this.b.gai(),s=s.gu(s);s.m();)s.gn().C()},
il(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.a(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.a(A.k("audio listener room missing: "+a0))
r=this.l0(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cl
e=f.cn(h,a1.h(0,g))
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
o=B.b.A(l,-60,0)
m=B.d.A(k,120,2e4)
g=B.b.A(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.U(p,"; ")
b=t.N
s=A.ac(s,b)
b=A.ac(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.i_)
return new A.nP(s,b,o,m,g,n,c)},
cn(a,b){return this.il(a,b,B.bx)},
l0(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.ok
s=t.N
r=A.F([a0,0],s,t.i)
q=A.F([a0,B.a0],s,t.Es)
p=A.aG([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.W,l=p.$ti.c;p.a!==0;){k=A.I(p,l)
B.a.V(k,new A.nK(r))
j=B.a.gX(k)
p.a4(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.iW(s,!0)}i=o.aQ(j)
h=A.I(i,i.$ti.i("n.E"))
B.a.V(h,new A.nL())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.ck(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cl:d).op(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.I(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.oj}}
A.nK.prototype={
$2(a,b){var s,r,q
A.q(a)
A.q(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.G(r,s)
return q===0?B.c.G(a,b):q},
$S:72}
A.nL.prototype={
$2(a,b){var s=t.W
return B.c.G(s.a(a).a,s.a(b).a)},
$S:73}
A.iW.prototype={}
A.fH.prototype={}
A.ok.prototype={
hZ(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Dc().bx(q).gah()
p.d=q
p.c=p.b.bx(q).gah()
p.a=a}}
A.p3.prototype={}
A.kM.prototype={
dc(a){if(this.at)return
A.q9(a,"requestPointerLock",t.X)},
eO(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bP(r,r.r,r.e,A.o(r).i("bP<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.Z(q)
for(m=J.P(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.o0(p,n)}this.bf()},
dq(a){var s,r,q,p,o,n,m=this
if(m.ch.dq(a))for(s=m.CW.aP("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.l(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.l(0,n)
break}}},
nS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.P(t.ik.b(c)?c:new A.b5(c,A.z(c).i("b5<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.q(r.mapping)!=="standard")break A
c=A.q(r.id)
q=A.q(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.P(t.dd.b(n)?n:new A.b5(n,A.z(n).i("b5<1,C>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.P(t.nx.b(d)?d:new A.b5(d,A.z(d).i("b5<1,aj>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a7(r.value))}s=new A.lF(!0,c,q,o,p)
break}}d=s==null
m=A.FK(d?B.n9:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.O(c.aP(e),q.gaw(q))
q=f.r
q.ke(A.o(q).i("l(1)").a(new A.q2(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.m:g,h)){if(i.eh())n.l(0,h)}else n.l(0,h)}}f.e=A.h4(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.O(c.aP(e),l.gaw(l))){d=r.a(f.c)
d=!B.a.O(c.aP(e),d.gaw(d))}}if(d)i.ei()},
kx(a){var s=this
A.b(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.q(a.code)))if(B.a.p(s.CW.aP("interact"),A.q(a.code))){if(s.ch.eh())s.d.l(0,A.q(a.code))}else s.d.l(0,A.q(a.code))},
kz(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a4(0,A.q(a.code))
r=this.CW
if(B.a.p(r.aP(q),A.q(a.code))){t.Q.a(s)
s=!B.a.O(r.aP(q),s.gaw(s))}else s=!1
if(s)this.ch.ei()},
kD(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.h(a.button)
if(r.c.l(0,s))if(B.a.p(r.CW.aP("interact"),s)){if(r.ch.eh())r.d.l(0,s)}else r.d.l(0,s)},
kH(a){var s,r="interact",q="Mouse"+A.h(A.b(a).button),p=this.c
p.a4(0,q)
s=this.CW
if(B.a.p(s.aP(r),q)){t.Q.a(p)
p=!B.a.O(s.aP(r),p.gaw(p))}else p=!1
if(p)this.ch.ei()},
kJ(a){var s
A.b(a)
if(!this.ay)return
s=A.a7(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
kF(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fH(a,"movementX")
s.as=s.as+s.fH(a,"movementY")},
kB(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fH(a,b){var s=A.By(a[b])
if(s==null)s=null
return s==null?0:s},
cC(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.eY(n.c,t.N)
for(r=n.e,r=A.fq(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.l(0,o)}t.Q.a(s)
return B.a.O(n.CW.aP(a),s.gaw(s))},
bf(){var s=this
s.c.P(0)
s.d.P(0)
s.f.P(0)
s.r.J(0,s.e)
s.as=s.Q=0
s.ch.es()}}
A.q2.prototype={
$1(a){return!this.a.p(0,A.q(a))},
$S:3}
A.q1.prototype={
aP(a){var s=this.a.h(0,a)
return s==null?B.m:s},
o0(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.L(a))return
r=t.N
q=A.Z(r)
for(p=A.fq(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ac(q,r))},
bj(a,b){var s,r,q
t.Q.a(b)
for(s=this.aP(a),r=s.length,q=0;q<r;++q)if(b.a4(0,s[q]))return!0
return!1}}
A.q5.prototype={
eh(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
ei(){this.c=this.b=!1
this.d=0},
dq(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.A(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
es(){this.c=this.b=!1
this.d=0}}
A.b4.prototype={
gE(){return this.a}}
A.qp.prototype={}
A.qm.prototype={
nV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.Z(h)
r=A.I(b,t.J)
B.a.J(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.a(A.r("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.fv(n,i.d,a,b,i.a,j,m)
i.fv(l,i.e,a,c,i.b,j,k)
return new A.qp(n,l,j)},
fv(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.z(d)
s=k.i("G<1,+effectiveScore,light,score(C,b4,C)>")
r=A.I(new A.G(d,k.i("+effectiveScore,light,score(C,b4,C)(1)").a(new A.qn(this,c,b)),s),s.i("Y.E"))
B.a.V(r,new A.qo())
q=A.Z(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.P(0)
b.J(0,q)}}
A.qn.prototype={
$1(a){var s,r
t.J.a(a)
s=a.c.ab(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jd(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:75}
A.qo.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:76}
A.oJ.prototype={
dT(a,b){var s,r,q,p,o,n,m,l=this
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
A.qv.prototype={
j2(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dT(b,c)},
lr(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.j(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.S(s,6.283185307179586)
r=Math.sin(s)
return new A.j(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cp.prototype={
en(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.q.dl(s,0,l,k)
m.a=s}r=b.ab(0,a).bx(d.ab(0,a)).gah()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.iN(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.iN(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.iN(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.iN(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.iN(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.iN(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aM(a,b,c,d,e){return this.en(a,b,c,d,e,1,!1,1,1)},
em(a,b,c,d,e,f,g){return this.en(a,b,c,d,e,1,!1,f,g)},
ia(a,b,c,d,e,f,g){return this.en(a,b,c,d,e,f,g,1,1)}}
A.j.prototype={
a0(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
bl(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gah(){var s=this,r=s.gt(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.lF.prototype={
gE(){return this.b}}
A.m6.prototype={}
A.od.prototype={
oB(a){var s,r,q,p,o,n=B.f.a6(a.B(),null)
this.a.ht(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.al(s.getItem("quarantine.save.active"))
q=A.al(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
nW(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.al(s.getItem("quarantine.save.active"))
q=A.al(s.getItem("quarantine.save.previous"))
p=this.fn(r,a)
if(p!=null)return new A.f8(p,null)
o=this.fn(q,a)
if(o!=null)return new A.f8(o,"recovered previous save")
if(r==null)return B.mE
return B.mD}catch(n){return B.mC}},
fn(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.ht(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ai(q) instanceof A.A)return null
else throw q}}}
A.kp.prototype={
jk(a,b,c,d,e){if(this.a.length===0)throw A.a(B.hW)
if(this.b<0)throw A.a(B.he)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ac(q,t.i)
s=t.z
return A.aX(A.F(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.ci.prototype={
v(){return"EndingKind."+this.b}}
A.oT.prototype={
gao(){return this.a}}
A.fU.prototype={
B(){var s=t.N
return A.F(["kind",this.a.b],s,s)}}
A.oW.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:77}
A.bA.prototype={}
A.ld.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.F(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
nd(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ab(0,new A.j(0,1.3499999999999999,0))
return!new A.k9(s,s.a0(0,new A.j(0,1.2000000000000002,0))).d1(a,r)}}
A.rx.prototype={
B(){return A.vH(this.a)}}
A.hg.prototype={
B(){return A.F(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.rV.prototype={
ht(a){var s,r,q,p,o,n,m,l=B.f.ap(a,null),k=t.f
if(!k.b(l))throw A.a(B.ia)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=q.h(0,"version")
if(A.aT(p))o=p!==1&&p!==2
else o=!0
if(o)A.f(A.N("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.f(B.hp)
k=A.aZ(n,s,r)
return A.AA(A.aZ(m,s,r),k,2)}}
A.f8.prototype={}
A.dq.prototype={
v(){return"GameSessionEventType."+this.b}}
A.kB.prototype={
gao(){return this.c},
gaV(){return this.d}}
A.pg.prototype={
gao(){return this.a},
gaV(){return this.b}}
A.pf.prototype={
gaf(){var s=this.d
return new A.pg(s.a,s.b,this.e.b.a)},
gi9(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.F(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.F(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.F(["entryCount",m.e.b.a],k,t.S)
p=A.A2(m.c).B()
o=m.r
n=o.c
return new A.rx(A.vH(A.F(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.F(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
lv(a,b){if(!B.a.O(a.f,new A.ph(b)))return!1
this.z.lt(a,b)
return!0},
lu(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.n3(n))return!1
m=m.b
m.k(0,n,"true")
s=a.b
m.k(0,n+".consumer",s)
m.k(0,"last-authored-event",o)
if(s==="aftermath")m.k(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bz(q,"=")
if(p<=0||p===q.length-1)continue
m.k(0,B.c.H(q,0,p),B.c.aO(q,p+1))}return!0},
n_(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("am<2>")
q=A.I(new A.am(s,r),r.i("n.E"))
B.a.V(q,new A.pi())
if(q.length===0)return null
s=A.z(q)
r=s.i("H<1>")
p=A.I(new A.H(q,s.i("l(1)").a(new A.pj()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dm(a),r=t.E,s=new A.an(s,s.gt(0),r.i("an<a0.E>")),r=r.i("a0.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cS(a,l.a,s.length-1,B.a.ga2(s).q(0))
j.k(0,a,k)
return k},
lq(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.a(A.a3(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cG(B.im)}if(n<a)this.cG(B.io)},
j5(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dn(a)&&s.j4(b)},
nX(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.eh){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
j1(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.DK(j,A.ac(i.d,h).length)
if(a===B.dY)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.z(r)
A.DJ(j,new A.H(r,q.i("l(1)").a(new A.pk(k)),q.i("H<1>")).gt(0))
r=k.f
q=r.b
if(B.a.p(B.jp,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.aJ(j.a/1*3)
B.a.l(r.r,new A.hj(q.a,a,b))
m=r.a
A.DV(m,q.a,n,k.b,A.ac(m.d,h));++q.a
q.eW(7)
r.c=16
r.d=6
r.f=!1
m.iN(B.jZ)
s.r.lS(o,c)
l=B.b.aJ(j.b/1*6)
if(l>0)r.dn(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.o(i).i("am<2>")).O(0,new A.pl())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cG(B.is)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cG(B.ir)},
fN(a,b){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.kB(s.a,s.b))
B.a.l(r.x,A.DL(A.GV(a),r.b,r.y-1))},
cG(a){return this.fN(a,null)}}
A.ph.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:16}
A.pi.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:13}
A.pj.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.pk.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.tN().iZ(this.a.c,a.a)},
$S:81}
A.pl.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.k3.prototype={
eD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.z(c),a=b.i("e(1)")
b=b.i("G<1,e>")
A.jO(new A.G(c,a.a(new A.o1()),b),"level")
s=e.e
r=A.z(s)
q=r.i("e(1)")
r=r.i("G<1,e>")
A.jO(new A.G(s,q.a(new A.o2()),r),"room")
p=e.f
o=A.z(p)
A.jO(new A.G(p,o.i("e(1)").a(new A.o3()),o.i("G<1,e>")),"portal")
o=e.r
n=A.z(o)
A.jO(new A.G(o,n.i("e(1)").a(new A.o4()),n.i("G<1,e>")),"stair")
m=new A.G(c,a.a(new A.o5()),b).b6(0)
l=new A.G(s,q.a(new A.o6()),r).b6(0)
r=A.m(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.t)(p),++k){j=p[k]
r.k(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.t)(s),++k){i=s[k]
b=i.b
if(!m.p(0,b))throw A.a(A.N("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.z(b)
q=i.a
A.jO(new A.G(b,a.i("e(1)").a(new A.o7()),a.i("G<1,e>")),"window in "+q)
a=i.f
A.jO(a,"portal reference in "+q)
for(b=a.length,h=0;h<a.length;a.length===b||(0,A.t)(a),++h){g=a[h]
j=r.h(0,g)
if(j==null)throw A.a(A.N("rooms."+q+".portalIds references unknown portal "+g,d,d))
if(!(j.b===q||j.c===q))throw A.a(A.N("rooms."+q+".portalIds references "+g+", which does not touch the room",d,d))}}for(c=p.length,k=0;k<p.length;p.length===c||(0,A.t)(p),++k){j=p[k]
b=j.b
if(b!=="outside"&&!l.p(0,b))throw A.a(A.N("portals."+j.a+".a references "+b,d,d))
a=j.c
if(a!=="outside"&&!l.p(0,a))throw A.a(A.N("portals."+j.a+".b references "+a,d,d))
if(b===a)throw A.a(A.N("portals."+j.a+" has identical endpoints",d,d))}for(c=o.length,k=0;k<o.length;o.length===c||(0,A.t)(o),++k){f=o[k]
b=f.b
j=r.h(0,b)
if(j==null)throw A.a(A.N("stairs."+f.a+".portalId references unknown portal "+b,d,d))
if(!j.z)throw A.a(A.N("stairs."+f.a+".portalId "+b+" is not marked stair",d,d))}},
eC(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.a(A.k("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.a(A.k("authored house source changed: "+a1))
a1=b.e
s=a1.length
if(s!==a2.b.length||b.f.length!==a2.c.length)throw A.a(A.k("authored/runtime room or portal count mismatch"))
for(r=t.fW,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.a(A.k("authored room missing at runtime: "+n))
l=o.c
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.k(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.k(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.k(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.k(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.k(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.k(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.a(A.k("window count mismatch for "+n))
for(n=A.z(j),i=n.i("l(1)"),n=n.i("H<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bD(new A.H(j,i.a(new A.o0(e)),n),r)
if(d==null)throw A.a(A.k("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.f(A.k(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.f(A.k(c+a+A.w(h)+" != "+A.w(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.f(A.k(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.f,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.a(A.k("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.a(A.k("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.f(A.k(q+a+A.w(n)+" != "+A.w(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.f(A.k(q+a0+A.w(n)+" != "+A.w(l)))
if(o.y!=m.at)throw A.a(A.k("door model mismatch for "+q))}a1=b.r
s=a2.d
if(a1.length!==s.length||B.a.gbb(a1).b!==B.a.gbb(s).b)throw A.a(A.k("stair manifest mismatch"))}}
A.nW.prototype={
$1(a){var s=A.jI(a,"level"),r=A.cd(s,"id")
A.cd(s,"kind")
A.eC(s,"floorY")
return new A.e_(r)},
$S:82}
A.nX.prototype={
$1(a){return A.Dr(a,this.a)},
$S:83}
A.nY.prototype={
$1(a){var s=this.a,r=A.jI(a,"portal"),q=A.cd(r,"id"),p=A.cd(r,"a"),o=A.cd(r,"b"),n=A.yM(r,"facingA"),m=A.yM(r,"facingB"),l=A.eC(r,"offsetA"),k=A.eC(r,"offsetB"),j=A.eC(r,"width"),i=A.eC(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.q(r.h(0,"doorKit")):null
return new A.e0(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.a9(r.h(0,"stair"),!0),J.a9(r.h(0,"exterior"),!0),!J.a9(r.h(0,"open"),!1),J.a9(r.h(0,"sticks"),!0))},
$S:84}
A.nZ.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.jI(a,"stair")
return new A.e2(A.cd(p,"id"),A.cd(p,"portalId"),A.HF(p.h(0,s),s),A.n9(p.h(0,"min"),"min"),A.n9(p.h(0,"max"),"max"),A.n9(p.h(0,r),r),A.n9(p.h(0,q),q))},
$S:85}
A.o_.prototype={
$1(a){return typeof a=="string"?a:A.dS("exterior cell")},
$S:35}
A.o1.prototype={
$1(a){return t.mD.a(a).a},
$S:36}
A.o2.prototype={
$1(a){return t.bJ.a(a).a},
$S:37}
A.o3.prototype={
$1(a){return t.lT.a(a).a},
$S:89}
A.o4.prototype={
$1(a){return t.gI.a(a).a},
$S:90}
A.o5.prototype={
$1(a){return t.mD.a(a).a},
$S:36}
A.o6.prototype={
$1(a){return t.bJ.a(a).a},
$S:37}
A.o7.prototype={
$1(a){return t.ya.a(a).a},
$S:91}
A.o0.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:24}
A.x1.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fG
break A}if("first"===a){s=B.fH
break A}s=B.fI
break A}return s},
$S:93}
A.e_.prototype={
gE(){return this.a}}
A.e1.prototype={
gE(){return this.a}}
A.o8.prototype={
$1(a){var s=this.a,r=A.jI(a,"window")
return new A.e3(A.cd(r,"id"),A.yM(r,"facing"),A.eC(r,"offset")*s,A.eC(r,"sill")*s,A.eC(r,"width")*s,A.eC(r,"height")*s,J.a9(r.h(0,"frosted"),!0))},
$S:94}
A.o9.prototype={
$1(a){return typeof a=="string"?a:A.dS("portal id")},
$S:35}
A.e3.prototype={
gE(){return this.a}}
A.e0.prototype={
gE(){return this.a}}
A.e2.prototype={
gE(){return this.a}}
A.wF.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.wZ.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.k9.prototype={
oi(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.z(s)
q=new A.H(s,r.i("l(1)").a(new A.oo(e)),r.i("H<1>"))
p=!q.gu(0).m()?null:q.gX(0)
if(p==null){n.d=null
return}if(!(n.cE(b,p.f)&&a==="hall"))o=n.cE(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.m7(p,B.b.A(d,0,1))},
np(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fG(g,c,d)
s=h.k9(a,b,c,d)
if(s!=null){h.d=s
return h.fG(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hm(Math.sqrt(r*r+q*q)/0.08))
o=d.a3(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.lb(a,n,m,o)
l=l||j.b
m=j.a
i=h.nU(a,n)
n=i==null?n:i}h.bi(m)
return new A.l0(m,n)},
k9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cE(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cE(c,l)){l=j<0||o
h=l}if(i||h)return new A.m7(m,i?0:1)}return null},
fG(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ab(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.A(a.b+o/p,0,1)
n=A.AN(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bi(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.l0(n,k)},
cE(a,b){var s=a.ab(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
lb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cL(c,!1)
s=h.cK(a,b,c,new A.j(g,0,0))
r=s.a
q=d.c
p=h.cK(a,b,r,new A.j(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cL(p.a,!1)
n=c.a0(0,new A.j(0,0.35,0))
h.bi(n)
if(!h.d1(a,b)){m=h.cK(a,b,n,new A.j(g,0,0))
l=h.cK(a,b,m.a,new A.j(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.j(g,r-j,q)
h.bi(i)
if(h.d1(a,b))break}h.bi(k)
return new A.cL(k,!1)}}if(o)return new A.cL(r,!0)
if(!p.b)return new A.cL(p.a,!0)
h.bi(c)
return new A.cL(c,!0)},
cK(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cL(c,!1)
s=c.a0(0,d)
this.bi(s)
if(this.d1(a,b)){this.bi(c)
return new A.cL(c,!0)}return new A.cL(s,!1)},
bi(a){var s=a.ab(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.a0(0,new A.j(0,1.2000000000000002,0))},
d1(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.l8(a,m,s)},
nU(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aE(k)
for(r=k.a,q=a.aQ(r),p=J.P(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.ck(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hb(k,o,s)&&this.jY(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
l8(a,b,c){var s,r,q
for(s=a.aQ(b.a),r=J.P(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hb(b,q,c))return!0}return!1},
hb(a,b,c){var s,r,q,p=a.a,o=b.b1(p),n=b.aL(p)
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
jY(a,b,c){var s,r=this
switch(b.b1(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slA(a){this.a=t.a7.a(a)}}
A.oo.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:95}
A.l0.prototype={}
A.cL.prototype={}
A.m7.prototype={}
A.ib.prototype={
gao(){return this.a}}
A.pK.prototype={
lS(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.Q,r)
s=B.Q[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
j_(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.Q,q)
p=B.Q[q]
if(p.b===a)r+=p.c}return r},
j0(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.Q,q)
p=B.Q[q]
if(p.b===a)r+=p.d}return r},
B(){return A.F(["landedCount",this.b],t.N,t.z)}}
A.a4.prototype={}
A.ks.prototype={
gng(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.c([r,q,p,o,n,m],t.n),new A.oY())&&o>=r&&n>=q&&m>=p}}
A.oY.prototype={
$1(a){return isFinite(A.b1(a))},
$S:4}
A.kJ.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.a(A.r("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.a(A.r("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gng())throw A.a(A.r("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.O(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.pM()))throw A.a(A.r("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.a(A.r("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.a(A.r("QHMX index "+o+" exceeds vertex count",m))}}}
A.pM.prototype={
$1(a){return!isFinite(A.b1(a))},
$S:4}
A.pL.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bF(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bF(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bF(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bF(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bF(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bF(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a4(a,b,c,m,n,o,0,0,p),r=new A.a4(g,h,i,m,n,o,1,1,p)
this.an(s,new A.a4(d,e,f,m,n,o,1,0,p),r)
this.an(s,r,new A.a4(j,k,l,m,n,o,0,1,p))},
an(a,b,c){var s=this,r=s.b
B.a.l(r,s.dK(a))
B.a.l(r,s.dK(b))
B.a.l(r,s.dK(c))},
dK(a){var s,r,q=B.a.U(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.a(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
lF(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.a(A.k("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.kJ(A.ac(g,t.hl),new Uint16Array(A.a1(this.b)),new A.ks(s,r,q,p,o,n))
h.C()
return h}}
A.kt.prototype={}
A.xV.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.am.p(0,s))A.f(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:96}
A.wS.prototype={
$2(a,b){var s=t.Ez
return B.c.G(s.a(a).a,s.a(b).a)},
$S:97}
A.dc.prototype={
oA(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.j6(A.Jb(new A.kJ(i,new Uint16Array(A.a1(s)),A.GD(i))),l.a,l.b,l.c,A.c([],k))}}
A.j6.prototype={}
A.eR.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.ku.prototype={
lM(a){var s
switch(a.a){case 0:s=A.aG(["front","street","opposite-house"],t.N)
break
case 1:s=A.aG(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aG(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aG(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aG(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
lN(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cC
break A}if("kitchen"===a||"cellar"===a){s=B.fD
break A}if("bathroom"===a){s=B.fE
break A}if("spare-room"===a){s=B.fF
break A}s=B.cC
break A}return this.lM(s)},
hK(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bB(this.mV(d.i("e(0)").a(a),b,c,d),d.i("bB<0>"))},
mV(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$hK(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.am.gaw(B.am)))throw A.a(A.r("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bP(l,l.r,l.e,r.$ti.i("bP<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.am.p(0,j))throw A.a(A.k("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ev.prototype={
hp(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.ws.prototype={
$1(a){var s=this
return t.xT.a(a).hp(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:44}
A.wr.prototype={
$1(a){return t.xT.a(a).hp(0,(this.a+this.b)*0.5,this.c)},
$S:44}
A.dp.prototype={
v(){return"FocusKind."+this.b}}
A.ed.prototype={
gE(){return this.b}}
A.rS.prototype={}
A.vC.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:99}
A.wP.prototype={
$1(a){return B.d.A(B.b.aJ(a*this.a),0,255)},
$S:100}
A.eu.prototype={}
A.pI.prototype={
n6(){var s,r,q,p,o,n,m=this
m.kh()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.a(A.k("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.a(A.k("authored portal endpoint missing: "+o.a))}},
kh(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.L(n))throw A.a(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.L(n))throw A.a(A.k("duplicate portal "+n))
q.k(0,n,m)}},
aE(a){var s=a.c,r=this.r,q=a.a
return new A.j(s.a+r.j_(q),s.b+r.j0(q),s.c)},
aQ(a){var s=this.c,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.pZ(a)),r.i("H<1>"))},
nT(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.a(A.a3(a,"roomId","not a portal endpoint"))
r=this.aE(o)
q=b.aL(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b1(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
i5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a0
s=A.c([new A.as(a,B.a0)],t.nR)
r=A.aG([a],t.N)
for(q=this.e,p=t.W;s.length!==0;){o=B.a.o_(s,0)
n=o.a
m=o.b
for(l=this.aQ(n),k=J.P(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.ck(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.I(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.I(m,p)
h.push(j)
B.a.l(s,new A.as(i,h))}}}return B.a0}}
A.pZ.prototype={
$1(a){var s
t.W.a(a)
s=this.a
return a.b===s||a.c===s},
$S:101}
A.oX.prototype={}
A.tN.prototype={
iZ(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.tO())}else s=!1
return s}}
A.tO.prototype={
$1(a){return t.fW.a(a).w},
$S:24}
A.pN.prototype={
i6(a){var s=this.e,r=A.z(s)
return new A.H(s,r.i("l(1)").a(new A.pQ(a)),r.i("H<1>"))},
bI(a){return B.a.b2(this.d,new A.pO(a),new A.pP(a))},
eC(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="inventory placement ",a5=a3.a
if(a5!==1)throw A.a(A.k("unsupported house inventory schema "+a5))
a5=a3.b
if(a5!=="assets/house/house.json")throw A.a(A.k("inventory source changed: "+a5))
a5=a3.c
if(Math.abs(a5-2.25)>0.0001)throw A.a(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.Z(s)
for(q=a3.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.a(A.k("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.a(A.k("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aG(["production","proxy","invisible-anchor"],s).p(0,l))throw A.a(A.k("invalid inventory asset status "+m+": "+l))}j=A.Z(s)
i=A.Z(s)
h=A.Z(s)
for(s=a3.e,q=s.length,p=a6.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.a(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.a(A.k(a4+m+" references "+l))
n=a3.bI(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.D9()
if(!e.b.test(k))throw A.a(A.k("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.a(A.k("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.a(A.k("invalid clearance for "+m))
e=g.Q
d=!0
if(isFinite(e))if(!(e<0))if(isFinite(g.as)){c=g.at
if(isFinite(c))if(isFinite(g.ax))if(!(c<0))e=e>0&&c<=0
else e=d
else e=d
else e=d}else e=d
else e=d
else e=d
if(e)throw A.a(A.k("invalid thermal source for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.a(A.k("duplicate inventory socket "+l+":"+e))
l=g.f.a
e=l.a*a5
d=l.b*a5
l=l.c*a5
b=g.ig(n,a5)
a=g.ey(n,a5)
a0=0.43+k
k=b.a
c=-a0
a1=!0
if(!(e-k<c)){a2=f.c
if(!(e+k>a2.a+a0)){k=b.c
l=l-k<c||l+k>a2.c+a0||d+a.b>a2.b+a0||d+a.a<c}else l=a1}else l=a1
if(l)throw A.a(A.k(a4+m+" escapes "+f.a))}}}
A.pQ.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:102}
A.pO.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:103}
A.pP.prototype={
$0(){return A.f(A.k("inventory asset missing: "+this.a))},
$S:7}
A.cZ.prototype={
gE(){return this.a}}
A.cC.prototype={
ig(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.j(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
ey(a,b){var s=this.f.c.b*b,r=a.r
return new A.j(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.q8.prototype={}
A.q6.prototype={}
A.wY.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.q7.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("ab<1>")
n=A.I(new A.ab(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
ev(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.a(B.fX)
s=t.X
r=A.aZ(a,s,s)
s=this.a
s.P(0)
for(q=new A.M(r,A.o(r).i("M<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aT(o)||o<0)throw A.a(B.hg)
s.k(0,n,o)}}}
A.dB.prototype={}
A.pR.prototype={
oy(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fq(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.t)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aE(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.j(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.j(a*a3,a0*a3,a1*a3)}else a4=new A.j(0,-1,0)
B.a.l(s,new A.dB(new A.j(d,c,e),a4,16760952,3.8,2.1*this.l_(k),80,180,0.12))}}B.a.V(s,new A.pS(a6))
return A.lH(s,0,A.fy(4,"count",t.S),t.A_).bU(0)},
l_(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.pS.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.G(a.a.ab(0,s).gt(0),b.a.ab(0,s).gt(0))},
$S:105}
A.ec.prototype={
v(){return"Floor."+this.b}}
A.eb.prototype={
v(){return"Facing."+this.b}}
A.fj.prototype={
siY(a){this.w=A.Q(a)},
gE(){return this.a}}
A.c4.prototype={
ck(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b1(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.a(A.a3(a,"roomId","not an endpoint of "+s.a))},
aL(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.a(A.a3(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.kW.prototype={
gE(){return this.a}}
A.fc.prototype={
gE(){return this.a}}
A.f7.prototype={
gE(){return this.a}}
A.pU.prototype={
mM(a){return B.a.b2(this.c,new A.pV(a),new A.pW(a))},
ov(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.a(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.a(A.k("soundscape source changed: "+f))
f=t.N
s=A.Z(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.a(A.k("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.a(A.k("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.a(A.k("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.a(A.k("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gM(k)||k.gai().O(0,new A.pX()))throw A.a(A.k("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.a(A.k("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.a(A.k("sound emitter "+l+" escapes "+j.a))}}}
A.pV.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:106}
A.pW.prototype={
$0(){return A.f(A.k("sound emitter missing: "+this.a))},
$S:7}
A.pX.prototype={
$1(a){return B.c.b7(A.q(a)).length===0},
$S:3}
A.cY.prototype={
gE(){return this.a}}
A.pJ.prototype={
c4(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a3(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.k7}q=A.c([],t.Fm)
p=B.b.aT(r)+1
o=B.b.aT(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eW("tick",m))
if(B.d.S(m,3)===0){B.a.l(q,new A.eW("cuckoo",m))
B.a.l(q,new A.eW("bell",m))}if(B.d.S(m,6)===0)B.a.l(q,new A.eW("chime",m))}l.b=b
return q}}
A.eW.prototype={
gaV(){return this.b}}
A.pT.prototype={
c4(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a3(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.k6}q=A.c([],t.op)
for(p=B.b.aT(r)+1;p<=B.b.aT(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.iU)
if(B.d.S(o,3)===1)B.a.l(q,B.iW)
if(B.d.S(o,8)===5)B.a.l(q,B.iZ)
if(B.d.S(o,5)===0)B.a.l(q,B.iV)
if(B.d.S(o,7)===3)B.a.l(q,B.j_)
if(n===1)B.a.l(q,B.iX)
if(B.d.S(o,6)===4)B.a.l(q,B.iY)}m.b=b
return q}}
A.cX.prototype={}
A.wX.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.pY.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.F(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.F(["lit",o.a,"examined",o.b],m,r))}return A.F(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.Z(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.Z(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.Z(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.z5(new A.ab(o,A.o(o).i("ab<1>")),d)){d=f.b
if(A.z5(new A.ab(d,A.o(d).i("ab<1>")),r)){d=f.c
e=!A.z5(new A.ab(d,A.o(d).i("ab<1>")),e)}else e=n}else e=n
if(e)throw A.a(B.hK)
e=f.d
if(e<0||e>2)A.f(B.h4)
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
A.iw.prototype={
B(){return A.F(["open",this.a,"locked",this.b],t.N,t.y)}}
A.ij.prototype={
B(){return A.F(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bt.prototype={
gE(){return this.a}}
A.oS.prototype={
$1(a){return this.a.p(0,A.q(a))},
$S:3}
A.ef.prototype={
v(){return"Hand."+this.b}}
A.ur.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
eV(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kV.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.F(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
q(a){return new A.G(B.B,t.oI.a(new A.qs(this)),t.jT).U(0," \xb7 ")}}
A.qr.prototype={
$2(a,b){return new A.O(A.q(a),A.q(b),t.q)},
$S:107}
A.qs.prototype={
$1(a){return this.a.a.h(0,A.q(a))},
$S:108}
A.bZ.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.F(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gao(){return this.b}}
A.qb.prototype={
c7(a){t.G.a(a)
return a.a===5&&B.a.a7(B.B,new A.qi(this,a))},
f6(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c7(b))return null
s=this.e++
r=new A.bZ(s,a,A.c([A.qq(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dZ(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c7(b))return!1
B.a.l(s.c,A.qq(b,c,B.aE))
return!0},
lp(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c7(b))return!1
s.r=A.qq(b,0,B.d1)
return!0},
iN(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.P(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.L(p)&&!B.a.p(s,p))B.a.l(s,p)}},
ox(a){var s
if(!this.b.L(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.I(n,A.o(n).c)
B.a.Y(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ae(r,r.r,r.e,A.o(r).i("ae<2>"));r.m();)s.push(r.d.B())
return A.F(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qi.prototype={
$1(a){var s
A.q(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.hT.prototype={
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
A.oa.prototype={
cr(a){var s,r,q=a==null?null:B.c.b7(a).toLowerCase()
if(q==null||q.length===0)return B.eE
if(q==="pixeldart")return B.eD
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hT(B.aO,!1,!0,r,s,s?r:null)}}
A.iy.prototype={}
A.rq.prototype={
B(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gai(),s=s.gu(s),r=t.N;s.m();){q=s.gn()
p.push(A.F(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.F(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.wO.prototype={
$1(a){A.q(a)
return a.length!==0&&a!==".."},
$S:3}
A.iz.prototype={}
A.li.prototype={}
A.rs.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.rt.prototype={
$1(a){return t.zU.a(a).f},
$S:25}
A.rk.prototype={}
A.rj.prototype={
ghu(){var s,r,q="pixeldart",p=this.b,o=p.aF
if(o){s=p.w
s===$&&A.p()
s=s.a.b}else s="safe"
p=A.Aw(q,o?p.glJ():B.ku,!1,s)
r=p
if(r==null)r=A.Aw(q,A.c([],t.s),!1,"safe")
p=A.Av(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
f_(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bJ){if(k.aF){s=k.d
s===$&&A.p()
s=s.a.b===B.Z}else s=!1
s=!s
if(s){m.d=B.T;++k.ec
j=B.T}if(j===B.bJ)return}if(j!==B.T)A.f(A.k(l))
B.f.a6(A.F(["backend","pixeldart","interpolation",0,"facts",A.vH(a.a.a)],t.N,t.X),null)
j=k.aF
if(j){s=k.d
s===$&&A.p()
s=s.a.b===B.Z}else s=!1
if(s){if(m.d!==B.T)A.f(A.k(l))
m.d=B.bJ
return}if(!j)A.f(A.k("Pixeldart runtime is not initialized"))
j=k.rx
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dz(j)
j=$.zA()
s=j.b
q=j.c
p=A.ye(k.b/k.c,q,j.a,s)
q=new A.fI(r,p,p.a3(0,r),B.A,B.nu,s,q,k.b/k.c)
j=q}o=new A.ky(j,k.ry,k.to,-1,k.mS++,k.ec,k.ed,k.eb)
n=new A.tR()
$.zv()
j=$.rA.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.p()
s=k.f
s===$&&A.p()
k.l7(j.lB(s,o),o)
k.cX=k.e.mO()
j=$.rA.$0()
n.b=j
k.cY=n.gmL()/1000},
hP(a){if(this.d!==B.T)A.f(A.k("pixeldart backend is not ready"))
B.f.a6(A.F(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rl.prototype={
lK(a,b){var s,r,q,p,o,n,m
a.C()
s=B.cm.cr(a)
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
o=A.I(o,A.o(o).c)
B.a.Y(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.lb.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.rm.prototype={
B(){var s=this
return A.F(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rn.prototype={
ho(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.a(A.r("surface dimensions must be positive",null))
s=a1.a
A:{if(B.S===s){r=new A.fs(1080,1920)
break A}if(B.K===s){r=new A.fs(720,1280)
break A}r=new A.fs(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.aJ(r.b*q)
q=B.b.aJ(r.a*q)
o=B.b.A(a5/p,0,1)
n=B.b.A(a4/q,0,1)
m=o<n?o:n
r=this.f8(B.b.aJ(p*m),320,a5)
q=this.f8(B.b.aJ(q*m),180,a4)
l=s===B.S
k=s===B.K
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
break E}g=a0==="linear"?B.fh:B.b3
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fs
break F}if("errors"===b){c=B.cu
break F}c=B.ft
break F}return new A.iE(a1,r,q,h,g,i,p,f,e,d,c)},
f8(a,b,c){if(c<b)return c
return B.d.A(a,b,c)}}
A.ro.prototype={}
A.ha.prototype={}
A.rp.prototype={}
A.rr.prototype={
d3(a,b,c,d){return this.nk(a,t.zL.a(b),c,d)},
nk(a,b,c,d){var s=0,r=A.aM(t.c_),q,p,o,n,m
var $async$d3=A.aN(function(e,f){if(e===1)return A.aJ(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a5(B.f4.d2(new A.qX(d,b),B.kX),$async$d3)
case 3:p=new o.iz(n,m,f)
A.An(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$d3,r)}}
A.ru.prototype={}
A.rv.prototype={
cj(a,b,c){return this.nl(a,t.xJ.a(b),t.tX.a(c))},
nl(a,b,c){var s=0,r=A.aM(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cj=A.aN(function(d,e){if(d===1)return A.aJ(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga_(),o=o.gu(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gn()
l=p.h(0,m)
if(l==null)l=A.f(A.k("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a5(b.$1(l.c),$async$cj)
case 5:k=i.Ex(h.a(g.ap(e,null)))
m=l.a
if(k.b!==m)throw A.a(A.N("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.a(A.N("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a5(B.f7.d3(m,new A.rw(c,l),l.b,k),$async$cj)
case 6:i.l(h,e)
s=3
break
case 4:q=new A.li(A.An(j))
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$cj,r)}}
A.rw.prototype={
$1(a){return this.a.$2(this.b.a,A.q(a))},
$S:109}
A.ii.prototype={
ghT(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gmD(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.rD.prototype={
ot(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.y=B.bf
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.y=B.bf
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.y=new A.ii(!0,B.b.A(q*(0.6+b*0.6),0,1),0.82+s.ar()*0.1,0.9+s.ar()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.ar()*0.15
p=(0.6+s.ar()*2.8)*1000
l.x=p
l.e=p/343
o=s.ar()*3.141592653589793*2
n=0.28+s.ar()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.y=new A.ii(!0,B.b.A(0.6+b*0.6,0,1),0.82+s.ar()*0.1,0.9+s.ar()*0.08,1,l.f,l.r,l.w,l.x)
l.b=16-b*11+s.ar()*6}}}
A.lp.prototype={
v(){return"RendererBackendKind."+this.b}}
A.hd.prototype={
v(){return"RendererBackendState."+this.b}}
A.rQ.prototype={}
A.lq.prototype={
gE(){return this.a}}
A.rP.prototype={
jp(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.a(A.r("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.a(A.r("renderer provenance values must be non-empty",null))}},
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
A.rR.prototype={
dd(a,b){if(a<=0||b<=0)throw A.a(A.r("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
hV(a,b){var s,r,q,p,o
for(s=A.ac(this.a.d,t.rO),r=A.z(s).i("bG<1>"),s=new A.bG(s,r),s=new A.an(s,s.gt(0),r.i("an<Y.E>")),r=r.i("Y.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.tE.prototype={
lw(a){var s,r,q,p,o,n,m,l,k=this.a
k.P(0)
s=a.w
s===$&&A.p()
r=A.z(s)
q=r.i("l(1)").a(new A.tF())
s=B.a.gu(s)
r=new A.T(s,q,r.i("T<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gn()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.k(0,n,A.F(["requested",l,"effective",o],q,p))}}}
A.tF.prototype={
$1(a){return t.r.a(a).Q===B.t},
$S:8}
A.lA.prototype={
v(){return"ShaderDebugMode."+this.b},
gmC(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.iK.prototype={
v(){return"ShaderTuningAvailability."+this.b}}
A.dH.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.co.prototype={
gmX(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.I(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.I(r,2)
else return B.b.I(r,3)}},
ge2(){var s,r,q=this
if(q.Q!==B.t)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.I(r,1)
if(s>=0.01)return B.b.I(r,2)
return B.b.I(r,3)},
gE(){return this.a}}
A.tG.prototype={
gbo(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.aj,p)
s=B.aj[p]
p=this.w
p===$&&A.p()
r=A.z(p)
q=r.i("H<1>")
p=A.I(new A.H(p,r.i("l(1)").a(new A.tL(s)),q),q.i("n.E"))
return p},
gbK(){var s,r=this.gbo(),q=r.length
if(q===0)return null
s=B.d.A(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
n5(){var s,r
if(this.b===4)return
else{s=this.gbK()
r=s==null?null:s.Q===B.t
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.A(s.y+s.w,s.f,s.r)}},
mx(){var s,r
if(this.b===4)return
else{s=this.gbK()
r=s==null?null:s.Q===B.t
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.A(s.y-s.w,s.f,s.r)}},
o3(){var s,r,q,p,o
if(this.b===4)this.e=B.aR
else for(s=this.gbo(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
o1(){var s,r,q,p
this.e=B.aR
s=this.w
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
ob(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
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
q.Q=o?B.t:B.dX
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aR},
mz(){var s,r,q,p=this.w
p===$&&A.p()
s=A.z(p)
s=new A.H(p,s.i("l(1)").a(new A.tH()),s.i("H<1>")).gt(0)
r=A.z(p)
r=new A.H(p,r.i("l(1)").a(new A.tI()),r.i("H<1>")).gt(0)
p=this.b
if(!(p>=0&&p<5))return A.d(B.aj,p)
p=B.aj[p]
q=this.gbK()
q=q==null?null:q.a
return A.F(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
ij(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.p()
j=A.I(j,t.r)
B.a.V(j,new A.tM())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.t)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.t)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.F(["id",m.a,"requested",k,"effective",l],p,o))}return A.F(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
ac(a){var s,r,q=this.w
q===$&&A.p()
s=A.z(q)
r=A.bD(new A.H(q,s.i("l(1)").a(new A.tK(a)),s.i("H<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
eJ(a){var s,r,q=this.w
q===$&&A.p()
s=A.z(q)
r=A.bD(new A.H(q,s.i("l(1)").a(new A.tJ(a)),s.i("H<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.tL.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:8}
A.tH.prototype={
$1(a){return t.r.a(a).Q===B.t},
$S:8}
A.tI.prototype={
$1(a){return t.r.a(a).Q!==B.t},
$S:8}
A.tM.prototype={
$2(a,b){var s=t.r
return B.c.G(s.a(a).a,s.a(b).a)},
$S:111}
A.tK.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.tJ.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.bT.prototype={
v(){return"SleepQuality."+this.b}}
A.bI.prototype={
v(){return"SleepLocation."+this.b}}
A.hj.prototype={
gao(){return this.a}}
A.oK.prototype={
dn(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
j4(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.F(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.F(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.oL.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:112}
A.oM.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:113}
A.kN.prototype={
v(){return"InteractionType."+this.b}}
A.fl.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.uD.prototype={}
A.fk.prototype={}
A.kd.prototype={}
A.q_.prototype={}
A.q3.prototype={
eL(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.V(p,new A.q4())
return p},
lR(a,b){var s,r,q,p,o,n=b.b
if(n.gM(n))return B.oi
s=t.N
r=A.Z(s)
q=A.Z(s)
for(s=n.ga_(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.ga2(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.fk(B.aT,r)
s=r.a
o=B.a.ga2(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.ga2(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.fk(B.el,r)
return new A.fk(B.c7,r)},
kP(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.kd(e,!1,B.oh,null)
s=q.d===c
r=this.lR(q,d)
this.d.$1(e)
return new A.kd(e,s,r,r.a===B.aT&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga2(q.c).q(0)+'".':null)},
mq(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aT)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.q_(B.a.ga2(s.c).q(0)+" but "+A.w(a.f))}}
A.q4.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:13}
A.cn.prototype={
v(){return"RuptureStep."+this.b}}
A.rT.prototype={}
A.d4.prototype={}
A.rU.prototype={
geX(){var s=B.by.h(0,this.a)
return s==null?0:s},
j8(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.F)s=q.e
else s=!0
if(s)return B.de
r=A.yP(b)
s=q.c
B.a.P(s)
B.a.J(s,r)
B.a.P(q.d)
q.a=B.aP
q.b=0
q.e=!1
return A.c([B.fa],t.xB)},
dT(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.a(A.r("rupture advance must be a finite non-negative duration",null))
if(l.a===B.F||a===0)return B.de
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.F))break
A:{q=l.a
p=B.by.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a5)l.ld(s)
p=l.b
o=B.by.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d4())
if(q===B.a5){l.a=B.F
l.b=0
l.e=!0
B.a.l(s,B.f9)}else{p=q.a+1
if(!(p<7))return A.d(B.db,p)
l.a=B.db[p]
l.b=0
B.a.l(s,new A.d4())}}}return A.ac(s,t.F3)},
B(){var s=this,r=t.N
return A.F(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ac(s.c,r),"extinguishedMantles",A.ac(s.d,r),"completed",s.e],r,t.z)},
ld(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.A(B.b.aT(l.b/l.geX()*A.ac(s,r).length),0,A.ac(s,r).length)
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
B.a.l(a,new A.d4())}}}
A.kC.prototype={
gf0(){var s=this.b
if(s<7||s>19)return 0
return B.b.A((s-7)/12,0,1)},
gms(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.A((s-5.5)/15,0,1))},
eW(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.N("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
ie(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.N("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.em.prototype={
v(){return"PrecipitationKind."+this.b}}
A.fh.prototype={
B(){var s=this
return A.F(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gao(){return this.a}}
A.uw.prototype={
hL(a){var s,r
if(a<1||a>this.b.length)throw A.a(A.b_(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.wt.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.A(B.b.A(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.n5(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.n5(q,p)&255)/255:1.2+(A.n5(q,p)&255)/255*0.8
p=A.n5(q,k+211)
q=A.n5(q,k+307)
n=A.na(B.b.I(s,2))
m=A.na(B.b.I(12-r*0.11000000000000001,2))
l=A.na(B.b.I(o,2))
p=A.na(B.b.I((p&65535)/65535*3.141592653589793*2,5))
q=A.na(B.b.I(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fh(k,j,n,m,l,p,q,j?B.bE:B.D)},
$S:114}
A.m2.prototype={}
A.hq.prototype={}
A.ut.prototype={
B(){var s=this
return A.F(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.uv.prototype={
B(){var s=this,r=s.b,q=t.N
return A.F(["precipitationKind",s.a.b,"windVelocityMps",A.F(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fi.prototype={}
A.fg.prototype={
C(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.jC(s)){r=q.c
if(A.jC(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.a(A.r("invalid weather collision box "+p,null))},
gE(){return this.a}}
A.es.prototype={
v(){return"WeatherImpactResponse."+this.b}}
A.m1.prototype={}
A.hr.prototype={
ha(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.a(A.r("weather surface state must be finite and >= 0",null))}}
A.ux.prototype={
B(){var s=this
return A.F(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.eM.prototype={
v(){return"AuthoredEventConsumer."+this.b}}
A.pd.prototype={
ow(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.Is(s[q].b)},
n4(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dm(a.a+":"+a.c),q=t.E,r=new A.an(r,r.gt(0),q.i("an<a0.E>")),q=q.i("a0.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.aJ((l+(k-l)*(s/2147483647))*60)
n=B.b.hm(l*60)
m=B.b.aT(k*60)
return(n<=m?B.d.A(o,n,m):B.d.A(o,0,1439))/60},
hx(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
lI(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.pe.prototype={
$2(a,b){var s,r=B.d.G(a.gao(),b.gao())
if(r!==0)return r
s=B.b.G(a.gaV(),b.gaV())
return s!==0?s:J.zD(a.gE(),b.gE())},
$S:49}
A.kA.prototype={
c4(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.hx(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
if(s.n4(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
ghw(){return new A.bB(this.mR(),t.oe)},
mR(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghw(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.lm(o.hx(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gmy(){var s=this.c
s=A.I(s,A.o(s).c)
B.a.Y(s)
return s},
B(){var s=this.c
s=A.I(s,A.o(s).c)
B.a.Y(s)
return A.F(["delivered",s],t.N,t.z)}}
A.pc.prototype={
$1(a){return this.a.lI(A.q(a))!=null},
$S:3}
A.qY.prototype={
aU(a,b){var s=this.b
if(s.L(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
n3(a){return this.aU(a,null)},
lt(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gK(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("M<1,2>")
k=A.I(new A.M(k,j),j.i("n.E"))
B.a.V(k,new A.r_())
j=t.N
k=A.yd(k,j,j)
s=this.b
r=A.o(s).i("M<1,2>")
s=A.I(new A.M(s,r),r.i("n.E"))
B.a.V(s,new A.r0())
s=A.yd(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("M<1,2>")
q=A.I(new A.M(q,p),p.i("n.E"))
B.a.V(q,new A.r1())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.F(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.F(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.r_.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:26}
A.r0.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:26}
A.r1.prototype={
$2(a,b){var s=t.gJ
return B.c.G(s.a(a).a,s.a(b).a)},
$S:117}
A.cS.prototype={
B(){var s=this
return A.F(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bv.prototype={
B(){var s=this
return A.F(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.rh.prototype={
eI(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m="aftermath."+B.c.aO(n.a,8)
if(p.L(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.l(k,n)}if(q.aU("ashworth.compact","accepted"))B.a.l(k,B.lL)
if(q.aU(l,"taken"))B.a.l(k,B.lP)
else if(q.aU(l,"left"))B.a.l(k,B.lM)
if(q.aU("sylvia.certificate","granted"))B.a.l(k,B.lO)
if(q.aU("residue.coal","cellar"))B.a.l(k,B.lK)
if(q.aU("telegram.08","read"))B.a.l(k,B.lJ)
if(q.aU("truth.shawl","home"))B.a.l(k,B.lI)
if(q.aU("sowerby.paraffin","received"))B.a.l(k,B.lN)
if(q.aU("inspector.proclamation","acknowledged"))B.a.l(k,B.lH)
return k},
iw(a){var s=this.eI(),r=A.z(s),q=r.i("H<1>")
s=A.I(new A.H(s,r.i("l(1)").a(new A.ri(a)),q),q.i("n.E"))
return s}}
A.ri.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:41}
A.tT.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hl(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.li(q,r.b))}s=A.hl(e.r)
q=A.hl(e.w)
p=A.hl(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.M(n,A.o(n).i("M<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.P(l.b);i.m();){h=i.gn()
j.push(A.F(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.M(m,A.o(m).i("M<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.M(m,A.o(m).i("M<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.F(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
li(a,b){var s,r=A.hl(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.hl(q.bq(0,new A.tU(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gZ(s))r.k(0,"_ambient",A.hl(s.bq(0,new A.tV(),t.S,t.z)))
return r}}
A.tU.prototype={
$2(a,b){return new A.O(A.h(a),t.BX.a(b).B(),t.pr)},
$S:119}
A.tV.prototype={
$2(a,b){return new A.O(A.h(a),t.vw.a(b).B(),t.pr)},
$S:120}
A.ff.prototype={
B(){return A.F(["hour",this.a,"order",this.b],t.N,t.S)},
gaV(){return this.a}}
A.fe.prototype={
B(){return A.F(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaV(){return this.a}}
A.iU.prototype={
B(){var s=t.N
return A.F(["field",this.a,"value",this.b],s,s)}}
A.m0.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.F(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gao(){return this.c}}
A.f5.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gZ(s))q.k(0,"effects",s)
return q},
gE(){return this.a}}
A.d9.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gZ(s))q.k(0,"when",s)
return q},
gE(){return this.a}}
A.tS.prototype={}
A.hh.prototype={
gE(){return this.a},
gao(){return this.c},
gaV(){return this.d}}
A.t_.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.t0.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.f(A.N("screenplay event "+a+" is invalid",null,null))
return s},
$S:27}
A.lx.prototype={
gE(){return this.a},
gao(){return this.b}}
A.lu.prototype={}
A.lv.prototype={
gE(){return this.a}}
A.lw.prototype={
gE(){return this.a}}
A.tW.prototype={
bB(){var s=0,r=A.aM(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bB=A.aN(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.a5(A.aE(A.b(A.b(i.window).fetch("res/text.json")),h),$async$bB)
case 6:n=a1
g=t.N
s=7
return A.a5(A.aE(A.b(n.text()),g),$async$bB)
case 7:m=a1
l=A.IF(m)
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
return A.a5(A.aE(A.b(A.b(i.window).fetch("res/story_script.json")),h),$async$bB)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.a5(A.aE(A.b(k.text()),g),$async$bB)
case 11:i=a.Fb(a1)
o.ax=i
o.ay=A.E7(i)
case 10:q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ai(b)
i=A.w(j)
throw A.a("Failed to load text.json: "+i)
s=5
break
case 2:s=1
break
case 5:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$bB,r)},
iv(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.q(a))
if(t.f.b(s)){p=s.gK().dg(0,new A.tX())
r=p.$ti
q=t.N
return A.yd(new A.cF(p,r.i("O<e,e>(1)").a(new A.tY()),r.i("cF<1,O<e,e>>")),q,q)}return null},
eK(a,b){var s=this.iv(a)
return s==null?null:s.h(0,b)},
iz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
if(f.b(l))for(j=l.gK(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.q(i.b))}B.a.l(p,new A.f5(A.q(m.h(0,"id")),A.q(m.h(0,"label")),A.q(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.m0(r,a,b,c,d,A.ac(p,t.Y))},
iy(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.q(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aC(p)||o!==B.b.aC(o))return n
return new A.ff(B.b.aC(p),B.b.aC(o))},
ix(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.q(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aC(p)||typeof o!="string"||typeof n!="string")return m
return new A.fe(B.b.aC(p),o,n)},
oz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.M(b4,A.o(b4).i("M<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gK(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dC(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gK(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.q(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("bP<1>"),l=new A.bP(n,n.r,n.e,m);l.m();){i=l.d
g=a1.iy(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.bP(n,n.r,n.e,m);m.m();){l=m.d
e=a1.ix(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.ae(b4,b4.r,b4.e,A.o(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.iz(A.q(d.h(0,"visitor")),B.b.aC(A.a7(d.h(0,"day"))),A.q(d.h(0,"tier")),B.b.aC(A.a7(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.ae(b4,b4.r,b4.e,A.o(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.q(r.b))}s=A.q(d.h(0,"id"))
b2.k(0,s,new A.d9(s,A.q(d.h(0,"target")),A.q(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
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
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.iU(A.q(a0.h(0,"field")),A.q(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.tT(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.tX.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:122}
A.tY.prototype={
$1(a){t.AC.a(a)
return new A.O(A.q(a.a),A.q(a.b),t.q)},
$S:123}
A.jU.prototype={
bP(a,b,c){var s=B.c.b7(a),r=B.c.b7(c)
if(r.length===0)return""
if(b||this.a===B.c9)return s.length===0?r:s+": "+r
if(this.a===B.c8)return r
return s.length===0?r:s+": "+r},
hM(a,b){return this.bP(a,!1,b)}}
A.y1.prototype={}
A.cQ.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dX.prototype={
c8(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dX(q,p,o,n,m)},
mi(a){var s=null
return this.c8(s,s,s,a,s)},
mo(a){var s=null
return this.c8(s,s,s,s,a)},
me(a){var s=null
return this.c8(s,s,a,s,s)},
mc(a){var s=null
return this.c8(s,a,s,s,s)},
lU(a){var s=null
return this.c8(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.F(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nl.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:124}
A.nj.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:42}
A.nk.prototype={
$0(){return A.f(B.i5)},
$S:7}
A.nw.prototype={
bW(a,b){var s,r=this,q=r.e.hM(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aN(q)
A.h(A.b(v.G.window).setTimeout(A.BJ(new A.ny(r)),7000))},
aN(a){var s,r,q=this
if(!q.c||B.c.b7(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.h(A.b(v.G.window).setTimeout(A.BJ(new A.nx(q,s)),4200))}}
A.ny.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:126}
A.nx.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.nC.prototype={
o4(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cz.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cR.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dk.prototype={
v(){return"AudioReverbMode."+this.b}}
A.dj.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dZ.prototype={
cO(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dZ(r,q,p,a==null?s.e:a)},
ma(a){return this.cO(null,null,a,null)},
m0(a){return this.cO(null,a,null,null)},
mg(a){return this.cO(null,null,null,a)},
m_(a){return this.cO(a,null,null,null)},
B(){var s=this
return A.F(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.nM.prototype={
$1$2(a,b,c){return B.a.b2(c.i("n<0>").a(a),new A.nN(b,c),new A.nO(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:127}
A.nN.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.nO.prototype={
$0(){return A.f(A.N("unsupported audio option: "+A.w(this.a),null,null))},
$S:7}
A.oc.prototype={
os(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.M.hM(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.of.prototype={
$1(a){return this.a.$0()},
$S:2}
A.oj.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.oi.prototype={
$1(a){var s=A.f2(A.q(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.oh.prototype={
$1(a){A.q(a)
return a.length!==0&&!B.c.T(a,"brush-state-")},
$S:3}
A.e5.prototype={
v(){return"BrushComponentKind."+this.b}}
A.e6.prototype={
v(){return"BrushComponentState."+this.b}}
A.bg.prototype={
gln(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.c.b7(s.a).length===0||B.c.b7(s.c).length===0)throw A.a(B.hT)
if(s.e===B.ck&&s.b!==B.cj)throw A.a(B.hh)},
gE(){return this.a}}
A.ol.prototype={
mP(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.A(a>=r+c?q.e=a-c+1:r,0,s)},
dj(a,b){if(b<=0){this.f=0
return}this.f=B.d.A(this.f+a,0,Math.max(0,b-1))},
bO(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.d2(o+c,n)
l=new A.d2(s+p,n)
k=s-p
j=new A.d2(k,r-c)
i=new A.d2(k-c,r)
h=new A.d2(q-p,r)
g=new A.d2(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.ft(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.ft(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
b0(a,b,c,d,e,f,g,h,i){return this.bO(a,b,c,d,e,!0,f,g,h,i)},
mE(a,b,c,d,e,f,g,h,i){return this.bO(a,b,14,c,d,e,f,g,h,i)},
mJ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ew()
s.bY(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.ar()-0.5)*8
l=s.ar()
k=s.ar()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hv(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fs(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fs(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.w(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
mH(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a7(A.b(q.measureText(a.toUpperCase())).width)+70)
this.b0("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
mG(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.b0(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a7(A.b(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bO(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gol()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lk(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bn(i,0,new A.om(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.b.aT((a5+a2-a1)/a2))
d1=d4.f
c7.mP(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.A(c7.e,0,a7)
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
B.a.l(f,new A.fJ("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.b0(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hv(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bv(b1,g),c1+22,b3)
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
B.a.l(c7.d,new A.fJ("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.b0("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
mF(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(a3===0)return
s=a6<640
r=s?Math.min(2,a3):a3
q=s?8:12
p=s?8:0
o=s?Math.min(140,(a6-32-q)/r):140
for(n=o-18,m=a6*0.5,l=o*0.5,k=o+q,j=a5-32,i=B.d.bc(a3+r-1,r)-1,h=28+p,g=0;g<a3;++g){f=B.d.bc(g,r)
e=f*r
d=Math.min(r,a3-e)
c=m-(d*o+(d-1)*q)*0.5+l+(g-e)*k
b=j-(i-f)*h
if(!(g<a4.length))return A.d(a4,g)
a=a4[g]
a0=a.c
a1=a0?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bO(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.p()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.bv("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
mI(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
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
d2.fillStyle="rgba(10, 8, 12, "+A.w(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.b0(c5,3,18,c4,q,-0.025,r,o,n)
c3.mJ(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.b0(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.aj[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bO(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c3.b0(c7,2.5,10,c8,140,-0.02,a1,o,a2)
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
d2.fillText(d5.e.gmC().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bv(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbo()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aT((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.A(c3.f,0,a7)
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
c3.bO(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hv(!0,g+1,20,b3-j+20,b2)
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
d2.fillText(c3.bv(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
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
c3.mE(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.ge2(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.b.A((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
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
d2.fillText(B.b.I(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.b.I(b0.r,1),b8+80+4,b2)
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 13px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(b0.ge2(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbK()
if(d5.b===4)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.t)m="LIVE \u2022 REQUESTED "+c1.gmX()+" \u2022 EFFECTIVE "+c1.ge2()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bv(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
ft(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fs(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lk(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a7(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bv(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a7(A.b(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a7(A.b(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.H(r,0,s-1)}return q?"...":r+"..."}}
A.om.prototype={
$2(a,b){var s
A.b1(a)
A.q(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a7(A.b(s.measureText(b)).width))},
$S:128}
A.fO.prototype={
glE(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aO(r)
o.k(0,q,p.gM(r)?"":p.gX(r))}return o},
bJ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.F(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.b1(r)
q=n.h(0,i)
q.toString
A.b1(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fP(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.b1(r)
q=n.h(0,i)
q.toString
A.b1(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.glE()
return A.fP(l,null,m,r,p,o,s,q)},
dY(a){var s=null
return this.bJ(a,s,s,s,s,s)},
m6(a){var s=null
return this.bJ(s,s,s,a,s,s)},
m7(a){var s=null
return this.bJ(s,s,s,s,a,s)},
m3(a){var s=null
return this.bJ(s,a,s,s,s,s)},
m4(a){var s=null
return this.bJ(s,s,a,s,s,s)},
mp(a){var s=null
return this.bJ(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.a(B.h_)
p=this.r
if(p.gK().O(0,new A.oB()))throw A.a(B.hZ)
if(p.gK().O(0,new A.oC()))throw A.a(B.hB)
p=p.gai()
o=A.o(p)
s=o.i("i4<n.E,e>")
r=s.i("H<n.E>")
q=A.I(new A.H(new A.i4(p,o.i("n<e>(n.E)").a(new A.oD()),s),s.i("l(n.E)").a(new A.oE()),r),r.i("n.E"))
if(A.h4(q,A.z(q).c).a!==q.length)throw A.a(B.h2)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gK(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aA(r.b,!0,p))}return A.F(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.oB.prototype={
$1(a){t.yx.a(a)
return J.jS(a.b,new A.oA(a))},
$S:43}
A.oA.prototype={
$1(a){var s
A.q(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.zP(a)
else s=!1
return s},
$S:3}
A.oC.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.jS(a.b,B.dR.gaw(B.dR))},
$S:43}
A.oD.prototype={
$1(a){return t.a.a(a)},
$S:130}
A.oE.prototype={
$1(a){return A.q(a).length!==0},
$S:3}
A.oz.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.e4.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.eN.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dl.prototype={}
A.ke.prototype={
c5(a){var s=this
if(!s.a.r.L(a))return new A.dl(B.cg,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eF},
lL(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b_
if(!A.zP(a)){p.c=p.b=null
return new A.dl(B.ci,B.dS.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gK()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.zE(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dl(B.b0,a+" is already bound to "+s)}return p.jy(a)},
eu(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b_
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eG
case 1:s=A.yF(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.z0(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.zg(r,k))
m.a=m.a.dY(s)
break
case 0:s=A.yF(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gX(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.lH(p,1,null,A.z(p).c)
o=p.$ti
p=new A.an(p,p.gt(0),o.i("an<Y.E>"))
o=o.i("Y.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.zg(r,k)}else{r=s.h(0,j)
r.toString
r=A.z0(A.zg(r,k),q)}s.k(0,j,r)
m.a=m.a.dY(s)
break}m.c=m.e=m.d=null
return B.ce},
jy(a){var s,r,q=this,p=q.b
if(p==null)return B.b_
s=A.yF(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.z0(r,a))
q.a=q.a.dY(s)
q.b=null
return B.ce}}
A.i_.prototype={
ji(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.ke(f.w)
s=f.b
s.className=A.q(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.og(a,B.eP,1)))
A.b(s.appendChild(A.E(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.E(a,"div",c,e)
f.f5(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.f5(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dt(a,r,"invertX","Invert horizontal look")
f.dt(a,r,"invertY","Invert vertical look")
f.dt(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.E(a,"div",c,e)
for(p=B.kD.gK(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fP(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.jT(l)?"unbound":J.zG(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.e7(a,new A.bg("settings.controls.bind."+m,B.cj,n,h,B.n),new A.ox(f,m),k)
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
f.dQ()
A.b(s.appendChild(A.e7(a,B.eQ,new A.oy(f),e)))},
i1(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.fw(this.x.lL(A.q(a.code)))},
fw(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b0?B.eU:B.n
p=o.Q.h(0,r)
if(p!=null)A.y3(p,q)}n=a.a
if(n===B.b0)o.l3()
else if(n===B.ch){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dQ()}else{o.dw()
o.ax=null}},
l3(){var s,r,q,p,o
this.dw()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jo[r]
p=A.L(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.e7(p,new A.bg("settings.controls.resolve."+o,B.H,o,"resolve key binding conflict",B.n),new A.ow(this,q),null)))}},
dw(){var s,r=this.at
if(r==null)return
while(A.L(r.firstChild)!=null){s=A.L(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dQ(){var s,r,q,p
for(s=this.Q,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.jT(p)?"unbound":J.zG(p," / ")
r.textContent=q
A.y3(r,B.n)}},
f5(a,b,c,d,e,f){var s,r=A.E(a,"label","setting-row",null)
A.b(r.appendChild(A.E(a,"span",null,d)))
s=A.Du(a,new A.bg("settings.controls."+c,B.eS,d,null,B.n),f,e,new A.ou(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
dt(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.Dv(a,new A.bg("settings.controls."+c,B.eT,d,null,B.n),!1,new A.ov(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
fu(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sek(a){this.f=t.pf.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.ox.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.c5(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cf){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.y3(q,B.ck)}p.dw()
return null},
$S:0}
A.oy.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.ow.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.fw(r.eu(this.b))},
$S:0}
A.ou.prototype={
$1(a){var s=this.a,r=s.w
s.fu(this.b==="horizontalSensitivity"?r.m4(a):r.mp(a))},
$S:131}
A.ov.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.m6(a)
break A}if("invertY"===q){s=r.w.m7(a)
break A}s=r.w.m3(a)
break A}r.fu(s)},
$S:10}
A.oF.prototype={
jj(a){var s,r,q,p=this,o=p.b
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
q.addEventListener("click",A.W(new A.oG(p)))
A.b(o.appendChild(q))}}
A.oG.prototype={
$1(a){return this.a.ae()},
$S:2}
A.oO.prototype={
jl(a){var s,r,q=this,p=null,o="div",n=q.a
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
s.addEventListener("click",A.W(new A.oP(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.W(new A.oQ(q,a)))
A.b(A.L(a.body).appendChild(n))},
eS(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.M.bP("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.zS(B.bh)
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
eT(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.M.bP("",!0,a)
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
iU(a){return this.eT(a,!1)},
iW(a,b){var s,r,q,p,o
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
s.textContent=A.zS(r)},
eU(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.M.bP("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.b(s.style).display=""},
iT(a,b){var s,r,q,p,o,n
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
n.addEventListener("click",A.W(new A.oR(p,this)))
A.b(s.appendChild(n))}},
hU(){var s,r=this
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
snw(a){this.w=t.Z.a(a)},
snv(a){this.x=t.vR.a(a)}}
A.oP.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:30}
A.oQ.prototype={
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
for(s=t.m,o=0;o<A.h(p.length);++o){n=A.L(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.L(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gX(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga2(r).focus()}}else if(m===B.a.ga2(r)||!B.a.p(r,m)){a.preventDefault()
B.a.gX(r).focus()}},
$S:134}
A.oR.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:30}
A.oU.prototype={
jm(a){var s,r,q,p,o=this,n=o.b
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
p.addEventListener("click",A.W(new A.oV(o)))
A.b(n.appendChild(p))},
iV(a,b){var s,r,q,p,o,n,m=this
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
A.b(s.appendChild(n))}m.bR()},
snA(a){this.w=t.Z.a(a)}}
A.oV.prototype={
$1(a){var s=this.a
s.ae()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.pm.prototype={
bD(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aA(b,!0,t.N)
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
or(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
n1(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hf()
return!0}return!1}if(a==="Space"){s=B.a.ef(l,new A.pn())
if(s!==-1){n.cs(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.S(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.S(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cs(q)
return!0}}if(B.c.T(a,"Digit")){p=A.dC(B.c.aO(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.T(a,"Numpad")){p=A.dC(B.c.aO(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cs(o)
return!0}return!1},
cs(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
hf(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
n2(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hf()
return!0}this.cs(a.b)
return!0},
snu(a){this.y=t.dt.a(a)},
snz(a){this.z=t.Z.a(a)}}
A.pn.prototype={
$1(a){A.q(a)
return B.c.p(a.toLowerCase(),"silent")||B.c.p(a,"...")},
$S:3}
A.po.prototype={}
A.dt.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cT.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cU.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.du.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.ds.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dv.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cj.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dr.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fW.prototype={
aS(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.y4(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
ml(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,a,s)},
mk(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,a,s,s)},
lX(a){var s=null
return this.aS(s,s,a,s,s,s,s,s,s,s,s)},
m5(a){var s=null
return this.aS(s,s,s,s,a,s,s,s,s,s,s)},
md(a){var s=null
return this.aS(s,s,s,s,s,s,a,s,s,s,s)},
mm(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,s,a)},
m8(a){var s=null
return this.aS(s,s,s,s,s,a,s,s,s,s,s)},
lW(a){var s=null
return this.aS(s,a,s,s,s,s,s,s,s,s,s)},
mh(a){var s=null
return this.aS(s,s,s,s,s,s,s,a,s,s,s)},
lV(a){var s=null
return this.aS(a,s,s,s,s,s,s,s,s,s,s)},
m1(a){var s=null
return this.aS(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.F(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pp.prototype={
$1$2(a,b,c){var s
A.Cn(c,t.D,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.a(A.N("invalid gameplay setting: "+a,null,null))
return B.a.b2(b,new A.pq(s,c),new A.pr(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:135}
A.pq.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pr.prototype={
$0(){return A.f(A.N("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cA.prototype={
v(){return"GraphicsPreset."+this.b}}
A.ee.prototype={
aZ(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.ee(s.a,r,q,p,o,n,m,l,k,j,i)},
dX(a){var s=null
return this.aZ(a,s,s,s,s,s,s,s,s,s)},
hq(a){var s=null
return this.aZ(s,s,a,s,s,s,s,s,s,s)},
hr(a){var s=null
return this.aZ(s,s,s,s,s,s,a,s,s,s)},
m9(a){var s=null
return this.aZ(s,s,s,s,a,s,s,s,s,s)},
mf(a){var s=null
return this.aZ(s,s,s,s,s,s,s,a,s,s)},
m2(a){var s=null
return this.aZ(s,s,s,a,s,s,s,s,s,s)},
mn(a){var s=null
return this.aZ(s,s,s,s,s,s,s,s,s,a)},
mb(a){var s=null
return this.aZ(s,s,s,s,s,a,s,s,s,s)},
lZ(a){var s=null
return this.aZ(s,a,s,s,s,s,s,s,s,s)},
mj(a){var s=null
return this.aZ(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.p(B.kd,q))throw A.a(A.N("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.jv,q))throw A.a(A.N("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.kh,q))throw A.a(A.N("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.ka,q))throw A.a(A.N("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.ko,q))throw A.a(A.N("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.kg,q))throw A.a(A.N("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.ki,q))throw A.a(A.N("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.F(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.pC.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:45}
A.pD.prototype={
$0(){return A.f(B.ho)},
$S:7}
A.pE.prototype={
B(){return A.F(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.pv.prototype={}
A.pw.prototype={}
A.ia.prototype={
jn(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.b(j.appendChild(A.E(a,"h1","journal-title","Graphics")))
A.b(j.appendChild(A.E(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.E(a,"div","settings-grid",m)
r=t.N
n.be(a,s,"preset","quality preset",A.F(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.be(a,s,"renderScale","render scale",A.F(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.be(a,s,"frameTarget","frame target",A.F(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.be(a,s,"antialiasing","anti-aliasing",A.F(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.be(a,s,"textureQuality","texture quality",A.F(["high","High","medium","Medium","low","Low"],r,r))
n.be(a,s,"outputEncoding","output encoding",A.F(["srgb","sRGB display","linear","Linear light"],r,r))
n.be(a,s,"diagnosticLevel","renderer diagnostics",A.F(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.be(a,s,"shadowQuality","shadow allocation",A.F(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.E(a,"label",k,m)
r=A.b(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.W(new A.pz(n)))
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
r.addEventListener("change",A.W(new A.pA(n)))
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
o.addEventListener("click",A.W(new A.pB(n)))
A.b(j.appendChild(o))},
be(a,b,c,d,e){var s,r,q,p,o
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
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.py(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
dJ(a){var s
a.C()
this.Q=a
s=this.f
if(s!=null)s.$1(a)},
ct(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.U(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
sek(a){this.f=t.CA.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.pz.prototype={
$1(a){var s=this.a
s.dJ(s.Q.hq(A.Q(s.x.checked)))},
$S:1}
A.pA.prototype={
$1(a){var s=this.a
s.dJ(s.Q.m9(A.Q(s.y.checked)))},
$S:1}
A.pB.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.ae()},
$S:1}
A.py.prototype={
$1(a){var s,r=A.q(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.hr(B.a.aq(B.da,new A.px(r)))
break A}if("renderScale"===p){s=q.Q.mf(r)
break A}if("frameTarget"===p){s=q.Q.m2(r)
break A}if("antialiasing"===p){s=q.Q.dX(r)
break A}if("textureQuality"===p){s=q.Q.mn(r)
break A}if("outputEncoding"===p){s=q.Q.mb(r)
break A}if("diagnosticLevel"===p){s=q.Q.lZ(r)
break A}if("shadowQuality"===p){s=q.Q.mj(r)
break A}s=q.Q
break A}q.dJ(s)},
$S:1}
A.px.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:45}
A.jV.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.cg.prototype={}
A.pF.prototype={
iu(a,b,c){if(c)return B.jM
if(b&&a!=null)return A.c([new A.cg("E","Examine "+a,!0),new A.cg("TAB","Journal",!1),new A.cg("CAPS","Shader Lab",!1)],t.sa)
return B.ky}}
A.pG.prototype={
jo(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.E(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.E(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.E(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.E(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.W(new A.pH(this)))
A.b(p.appendChild(r))}}
A.pH.prototype={
$1(a){return this.a.ae()},
$S:2}
A.qc.prototype={
bR(){var s,r=this
r.jc()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fc(r.CW,s)
r.kT()
r.fQ()},
jE(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.W(new A.qd(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.qe(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.b8()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
h8(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fc(s.CW+a,r)
s.fQ()},
fc(a,b){if(a<1)return 1
if(a>b)return b
return a},
kT(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.p()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.p()
s.textContent=""
for(s=l.w.eL(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=B.a.ga2(o.c).q(0)
m=A.b(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.qf(l,o,m)))
A.b(k.appendChild(m))}},
fQ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ae<2>"),n=new A.ae(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.V(r,new A.qg())
j.fP(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.ae(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.V(s,new A.qh())
j.fP(i,s)
k=B.b.A(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.b(i.style).setProperty("width",B.b.I(k*100,1)+"%")},
fP(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.b(a.appendChild(this.ka(b[r])))},
ka(a){var s,r,q,p,o,n=A.E(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.b(n.appendChild(this.fD(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fD(p,!1)
o.className=A.q(o.className)+" margin"
A.b(n.appendChild(o))}return n},
fD(a,b){var s=b?"hand-line struck":"hand-line",r=A.E(this.a,"div",s,a.q(0))
A.b(r.style).setProperty("--shake",B.b.q(a.b))
return r}}
A.qd.prototype={
$1(a){return this.a.h8(-1)},
$S:2}
A.qe.prototype={
$1(a){return this.a.h8(1)},
$S:2}
A.qf.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qg.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:13}
A.qh.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:13}
A.d2.prototype={}
A.fJ.prototype={
gE(){return this.a}}
A.r6.prototype={
gol(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.H(s,0,B.b.aC(B.b.A(r*q,0,r)))}}
A.iv.prototype={
aX(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.L(this.a.body).appendChild(s))},
bR(){var s,r,q,p,o=this,n=o.b
if(B.c.p(A.q(n.className),"open"))return
s=$.r7
if(s!=null&&s!==o)s.ae()
$.r7=o
r=o.a
o.d=A.L(r.activeElement)
A.q9(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.W(o.gkK())
o.e=q
r.addEventListener("keydown",q)
p=A.BH(n)
if(p.length!==0)B.a.gX(p).focus()
else n.focus()},
ae(){var s,r,q=this,p=q.b
if(!B.c.p(A.q(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.r7===q)$.r7=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
i1(a){},
kL(a){A.b(a)
this.i1(a)
if(A.Q(a.defaultPrevented))return
if(A.q(a.code)==="Escape"){a.preventDefault()
this.ae()
return}if(A.q(a.code)==="Tab")this.la(a)},
la(a){var s,r=A.BH(this.b)
if(r.length===0)return
s=A.L(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gX(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga2(r).focus()}}else if(s===B.a.ga2(r)||!B.a.p(r,s)){a.preventDefault()
B.a.gX(r).focus()}},
sb4(a){this.c=t.Z.a(a)}}
A.bu.prototype={
v(){return"PauseReason."+this.b}}
A.cm.prototype={
v(){return"PausePage."+this.b}}
A.el.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dA.prototype={
B(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
aa(a,b){if(b==null)return!1
return b instanceof A.dA&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gR(a){return A.d1(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.ek.prototype={
ghk(){var s=this.a
return s.length===1&&B.a.gX(s).a===B.bB},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.z(r),p=q.i("G<1,U<e,J?>>")
r=A.I(new A.G(r,q.i("U<e,J?>(1)").a(new A.rc()),p),p.i("Y.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.z(r)
p=q.i("G<1,e>")
r=A.I(new A.G(r,q.i("e(1)").a(new A.rd()),p),p.i("Y.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.rc.prototype={
$1(a){return t.oP.a(a).B()},
$S:137}
A.rd.prototype={
$1(a){return t.wJ.a(a).b},
$S:138}
A.c3.prototype={}
A.rb.prototype={
i2(a){var s,r=this
if(r.a.ghk())return new A.c3(B.a4,r.a,null)
s=r.a
s=new A.ek(B.kc,s.b,a)
r.a=s
return new A.c3(B.dC,s,"pause.resume")},
lz(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga2(p)
q=r.a.a
q=B.a.av(q,0,q.length-1)
p=r.a
p=new A.ek(q,p.b,p.c)
r.a=p
return new A.c3(B.dD,p,s.c)}if(q.ghk()&&r.a.b.length===0)return r.cm()
return new A.c3(B.a4,r.a,null)},
cm(){var s=this.a
if(s.a.length===0)return new A.c3(B.a4,s,null)
if(s.b.length!==0)return new A.c3(B.a4,s,null)
this.a=B.bA
return new A.c3(B.dE,B.bA,s.c)},
nQ(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.c3(B.a4,q.a,null)
s=q.a
r=A.I(s.b,t.wJ)
r.push(a)
s=new A.ek(s.a,r,q.a.c)
q.a=s
return new A.c3(B.dC,s,null)},
mB(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.c3(B.a4,o.a,null)
s=o.a
r=s.b
q=A.z(r)
p=q.i("H<1>")
r=A.I(new A.H(r,q.i("l(1)").a(new A.re(a)),p),p.i("n.E"))
q=o.a.c
r=new A.ek(s.a,r,q)
o.a=r
return new A.c3(B.lG,r,q)},
jZ(a){var s
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
A.re.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:139}
A.cH.prototype={
v(){return"PauseRootAction."+this.b}}
A.rf.prototype={
bs(a,b,c,d){var s=B.kR.h(0,c)
s.toString
A.b(b.appendChild(A.e7(a,new A.bg(s,B.H,d,null,B.n),new A.rg(this,c),null)))},
snL(a){this.f=t.Z.a(a)},
snN(a){this.r=t.Z.a(a)},
snx(a){this.w=t.Z.a(a)},
snM(a){this.x=t.Z.a(a)},
snD(a){this.y=t.Z.a(a)},
sny(a){this.z=t.Z.a(a)},
sba(a){this.Q=t.Z.a(a)}}
A.rg.prototype={
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
A.bS.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.rB.prototype={
iS(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.M.bP("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.t2.prototype={
jq(a){var s,r,q,p,o,n=this.b
n.className=A.q(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.og(a,B.eO,1)))
A.b(n.appendChild(A.E(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.E(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.jN[r]
p=B.dm.h(0,q)
p.toString
o=B.dl.h(0,q)
o.toString
A.b(s.appendChild(A.e7(a,new A.bg(o,B.H,p,p+" settings",B.n),new A.t3(this,q),null)))}A.b(s.appendChild(A.e7(a,B.eN,new A.t4(this),null)))
A.b(n.appendChild(s))},
snt(a){this.f=t.hQ.a(a)},
sba(a){this.r=t.Z.a(a)}}
A.t3.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.t4.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hi.prototype={
jr(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.dm.h(0,d))+" settings",a=h.b
a.className=A.q(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.og(a0,new A.bg("settings."+(s==null?f:s)+".heading",B.ax,b,g,B.n),2)))
A.b(a.appendChild(A.E(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.E(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.tt(h)),p=B.a.gu(B.E),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.ks(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.E(a0,"div",e,g)
for(s=s.a(new A.tu(h)),q=B.a.gu(B.E),o=new A.T(q,s,o);o.m();)A.b(j.appendChild(h.l9(a0,q.gn())))
A.b(a.appendChild(j))
if(d===B.I)A.b(a.appendChild(h.jC(a0)))
if(d===B.J)A.b(a.appendChild(h.jB(a0)))
if(d===B.a3)A.b(a.appendChild(h.jD(a0)))
i=A.E(a0,"div",e,g)
for(s=t.pz.a(h.gkj()),q=B.a.gu(B.ke),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.e7(a0,new A.bg("settings."+o+".reset."+n,B.H,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.tv(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.e7(a0,new A.bg("settings."+(s==null?f:s)+".reset.all",B.H,"reset all settings","restore all settings to defaults",B.eV),new A.tw(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.e7(a0,new A.bg("settings."+(d==null?f:d)+".back",B.H,"return","return to settings categories",B.n),new A.tx(h),g)))},
jB(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.E(a,"div","settings-grid",j),f=k.ds(a,g,"reducedMotion","reduced motion (system default)"),e=k.ds(a,g,i,"photosensitivity-safe effects (system default)"),d=k.ds(a,g,"captions","non-speech captions"),c=A.E(a,"label",h,j)
A.b(c.appendChild(A.E(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.W(new A.tl(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.E(a,"label",h,j)
A.b(r.appendChild(A.E(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bt[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.W(new A.tm(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.E(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.W(new A.tn(k)))
A.b(g.appendChild(l))
k.ok.J(0,A.F(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
ds(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.t5(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
eN(a){var s,r
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
s.value=B.b.q(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.ac:r).b}},
jD(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.E(a,"div","settings-grid",l)
m.bd(a,g,"interactionMode","interaction mode",B.bs,t.bK)
m.bd(a,g,"promptDensity","prompt density",B.bv,t.dn)
m.bd(a,g,"textPacing","text pacing",B.bu,t.j_)
m.bd(a,g,"journalLayout","journal layout",B.bm,t.gm)
m.bd(a,g,k,k,B.bg,t.aJ)
m.bd(a,g,"saveFeedback","save feedback",B.bn,t.mx)
m.bd(a,g,"focusLossBehavior","when the window loses focus",B.aG,t.x)
m.bd(a,g,"clockFormat","clock format",B.bj,t.vS)
s=A.E(a,j,i,l)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.W(new A.to(m,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.E(a,h,l,"contextual reminders")))
A.b(g.appendChild(s))
m.id=r
q=A.E(a,j,i,l)
p=A.b(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.W(new A.tp(m,p)))
A.b(q.appendChild(p))
A.b(q.appendChild(A.E(a,h,l,"show daily objective")))
A.b(g.appendChild(q))
m.k1=p
o=A.E(a,j,i,l)
n=A.b(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.W(new A.tq(m,n)))
A.b(o.appendChild(n))
A.b(o.appendChild(A.E(a,h,l,"story mode (visitors and narrative time)")))
A.b(g.appendChild(o))
m.k2=n
return g},
bd(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Cn(f,t.D,"T","_addGameplaySelect")
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
A.b(r.appendChild(n))}r.addEventListener("change",A.W(new A.tj(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
iD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
jC(a){var s,r,q=this,p=A.E(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.br[s].b
n.k(0,r,r)}q.cu(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bl[s].b
n.k(0,r,r)}q.cu(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.bk[s].b
n.k(0,r,r)}q.cu(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.bi[s].b
o.k(0,n,n)}q.cu(a,p,"ducking","voice intelligibility",o)
return p},
cu(a,b,c,d,e){var s,r,q,p,o
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
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.ta(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p3.k(0,c,r)},
iC(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.M(s,A.o(s).i("M<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fB(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a2===r){s=a.c===B.aQ
break A}if(B.J===r){s=a.c===B.a7
break A}if(B.I===r){s=a.c===B.G
break A}s=!1
break A}return s},
kk(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a2===s){r=a===B.aQ
break A}if(B.J===s){r=a===B.a7
break A}if(B.I===s){r=a===B.G
break A}r=!1
break A}return r},
l9(a,b){var s=this,r=A.E(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.W(new A.ts(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.E(a,"span",null,b.b)))
return r},
ks(a,b,c,d,e){var s,r,q=this,p=A.E(a,"label","setting-row",null),o=A.E(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.E(a,"output",null,"100%")
n.addEventListener("input",A.W(new A.tr(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.as(e,d))
return p},
eQ(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.m0
r=B.b.A(b,s.a,s.b)
q.value=B.b.q(r)
p.textContent=""+B.b.aJ(r*100)+"%"},
snF(a){this.r=t.DI.a(a)},
snH(a){this.w=t.xl.a(a)},
snG(a){this.x=t.xl.a(a)},
snB(a){this.y=t.DI.a(a)},
snE(a){this.z=t.xl.a(a)},
snP(a){this.Q=t.xl.a(a)},
snK(a){this.as=t.Ci.a(a)},
snJ(a){this.at=t.Z.a(a)},
sba(a){this.ax=t.Z.a(a)},
sns(a){this.ay=t.kC.a(a)},
snC(a){this.ch=t.hq.a(a)},
snr(a){this.CW=t.Cv.a(a)},
snI(a){this.cx=t.Z.a(a)}}
A.tt.prototype={
$1(a){t.gl.a(a)
return a.d===B.U&&this.a.fB(a)},
$S:28}
A.tu.prototype={
$1(a){t.gl.a(a)
return a.d===B.an&&this.a.fB(a)},
$S:28}
A.tv.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.tw.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.tx.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ae()},
$S:0}
A.tl.prototype={
$1(a){var s=this.a,r=s.k4,q=A.f2(A.q(this.b.value))
r=r.mo(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tm.prototype={
$1(a){var s=this.a,r=s.k4.mi(B.a.aq(B.bt,new A.tk(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tk.prototype={
$1(a){return t.mq.a(a).b===A.q(this.a.value)},
$S:42}
A.tn.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.t5.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.me(r)
break A}if("photosensitivitySafe"===p){s=q.k4.mc(r)
break A}if("captions"===p){s=q.k4.lU(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.to.prototype={
$1(a){var s=this.a,r=s.k3.lX(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tp.prototype={
$1(a){var s=this.a,r=s.k3.mk(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tq.prototype={
$1(a){var s=this.a,r=s.k3.ml(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tj.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.m5(B.a.aq(B.bs,new A.tb(r.c)))
break A}if("promptDensity"===p){s=q.k3.md(B.a.aq(B.bv,new A.tc(r.c)))
break A}if("textPacing"===p){s=q.k3.mm(B.a.aq(B.bu,new A.td(r.c)))
break A}if("journalLayout"===p){s=q.k3.m8(B.a.aq(B.bm,new A.te(r.c)))
break A}if("confirmations"===p){s=q.k3.lW(B.a.aq(B.bg,new A.tf(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mh(B.a.aq(B.bn,new A.tg(r.c)))
break A}if("clockFormat"===p){s=q.k3.lV(B.a.aq(B.bj,new A.th(r.c)))
break A}s=q.k3.m1(B.a.aq(B.aG,new A.ti(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tb.prototype={
$1(a){return t.bK.a(a).b===A.q(this.a.value)},
$S:142}
A.tc.prototype={
$1(a){return t.dn.a(a).b===A.q(this.a.value)},
$S:143}
A.td.prototype={
$1(a){return t.j_.a(a).b===A.q(this.a.value)},
$S:144}
A.te.prototype={
$1(a){return t.gm.a(a).b===A.q(this.a.value)},
$S:145}
A.tf.prototype={
$1(a){return t.aJ.a(a).b===A.q(this.a.value)},
$S:146}
A.tg.prototype={
$1(a){return t.mx.a(a).b===A.q(this.a.value)},
$S:147}
A.th.prototype={
$1(a){return t.vS.a(a).b===A.q(this.a.value)},
$S:148}
A.ti.prototype={
$1(a){return t.x.a(a).b===A.q(this.a.value)},
$S:46}
A.ta.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.ma(B.a.aq(B.br,new A.t6(r.c)))
break A}if("dynamicRange"===o){s=p.m0(B.a.aq(B.bl,new A.t7(r.c)))
break A}if("reverb"===o){s=p.mg(B.a.aq(B.bk,new A.t8(r.c)))
break A}s=p.m_(B.a.aq(B.bi,new A.t9(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.t6.prototype={
$1(a){return t.xs.a(a).b===A.q(this.a.value)},
$S:150}
A.t7.prototype={
$1(a){return t.EL.a(a).b===A.q(this.a.value)},
$S:151}
A.t8.prototype={
$1(a){return t.gc.a(a).b===A.q(this.a.value)},
$S:152}
A.t9.prototype={
$1(a){return t.ul.a(a).b===A.q(this.a.value)},
$S:153}
A.ts.prototype={
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
A.tr.prototype={
$1(a){var s,r,q=this,p=A.f2(A.q(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.aJ(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bH.prototype={
v(){return"SettingCategory."+this.b}}
A.iI.prototype={
v(){return"SettingKind."+this.b}}
A.ba.prototype={
de(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.a(A.N(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.a(A.N(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bC(a))throw A.a(A.N(r.a+" must be boolean",q,q))
break}}}
A.tA.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:28}
A.tB.prototype={
$0(){return A.f(A.k("unknown setting: "+this.a))},
$S:7}
A.ty.prototype={
js(a,b){var s,r=this.a
if(r!==1)throw A.a(A.r("unsupported settings version "+r,null))
for(r=this.b.gK(),r=r.gu(r);r.m();){s=r.gn()
A.tz(s.a).de(s.b)}},
co(a){var s=this.b.h(0,a)
return s==null?A.f(A.k("setting missing from profile: "+a)):s},
B(){return A.F(["version",this.a,"values",this.b],t.N,t.K)}}
A.tC.prototype={
o2(a){var s,r,q=A.h3(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dG(q,1)
this.kW(a)},
B(){return A.F(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
kW(a){var s,r,q=A.h3(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dG(q,1)}}
A.tP.prototype={
jt(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.b(l.appendChild(A.E(a,"h2","journal-title","Rest")))
A.b(l.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.d8[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.df[o]
m=A.b(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.tQ(this,q,n)))
A.b(s.appendChild(m))}}A.b(l.appendChild(s))},
snO(a){this.f=t.nf.a(a)}}
A.tQ.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ae()},
$S:1}
A.cx.prototype={
gE(){return this.a},
gao(){return this.b},
gaV(){return this.c}}
A.nt.prototype={
oj(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.z(s)
q=new A.G(s,r.i("e(1)").a(new A.nv()),r.i("G<1,e>")).b6(0)
r=this.b
r.P(0)
s=J.zH(a,t.N)
p=s.$ti
r.J(0,new A.H(s,p.i("l(n.E)").a(q.gaw(q)),p.i("H<n.E>")))},
mK(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.nv.prototype={
$1(a){return t.bC.a(a).a},
$S:154}
A.nu.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:155}
A.lY.prototype={
gc9(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nf(a){return this.c.p(0,t.T.a(a))},
ev(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.glT())||!a.a.a7(0,new A.uo(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fE(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aS){m=s.d
if(m<o.length){n=n===B.aa
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ae}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.O(l.f,new A.up(s))
else k=!1
if(k)return!1
j=new A.lX(r,g,A.ac(o,t.AP),B.aa)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.P(0)
g.J(0,a.a)
g=i.c
g.P(0)
g.J(0,h)
i.r=j
return!0},
hh(a){var s=this.a,r=A.o(s).i("ab<1>"),q=r.i("H<n.E>")
s=A.I(new A.H(new A.ab(s,r),r.i("l(n.E)").a(new A.uj(a)),q),q.i("n.E"))
B.a.V(s,new A.uk())
return s},
c5(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.o4
s=m.a.h(0,a)
if(s==null)return B.o5
r=B.d.ad(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.c4:B.au
o=p===B.au&&m.x.p(0,q)&&s.L(B.c5)?B.c5:p
if(s.L(o))n=o
else n=s.L(B.au)?B.au:B.c4
r=s.h(0,n)
r.toString
m.r=new A.lX(a,n,A.ac(m.fE(a,n,r),t.AP),B.aa)
m.gc9()
r=m.r
r.toString
return new A.lW(r)},
lO(a){var s,r,q,p,o,n=this.r
if(n==null)return B.ej
if(n.d!==B.aa)return B.o2
n.e=a
s=a===B.ae
n.d=s?B.aS:B.as
r=this.f
q=s?B.eh:B.nL
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dL(q,o,p,a,null))
if(a===B.aC)B.a.l(r,new A.dL(B.nO,o,p,a,null))
if(s)this.fR(n)
return new A.lU(n)},
ls(){var s,r=this.r
if(r==null)return B.ej
s=r.d
if(s!==B.as&&s!==B.at)return B.o3
if(this.gc9()!=null&&r.w==null)return new A.bn(new A.by(B.ab,"The visitor is waiting for an answer."))
r.d=B.at
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aS
this.fR(r)
return new A.iT(r,!0)}return new A.iT(r,!1)},
lP(a){var s,r,q=this.r,p=this.gc9(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.as&&o!==B.at}if(o)return B.o1
o=p.f
s=A.z(o)
r=A.bD(new A.H(o,s.i("l(1)").a(new A.um(a)),s.i("H<1>")),t.Y)
if(r==null)return B.o6
q.w=r.a
return new A.lV(q,p,r)},
lQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.as&&s!==B.at}else s=!0
if(s)return i
r=h.gbk()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dd
p=J.P(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.kP(!0,!0,o,new A.uD(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aT){B.a.l(this.f,new A.dL(B.nN,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.h3(B.a.ga2(j.c).a,s,s)
s.J(0,q)
p.lp(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.el)if(k===B.c7){s=n.b
s=s.gZ(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dL(B.nM,o,p.b,i,l))}}return m},
fR(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fE(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.P(c);r.m();)s.push(this.kt(a,b,r.gn()))
return s},
kt(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.z(p)
s=A.bD(new A.H(p,r.i("l(1)").a(new A.uh(this)),r.i("H<1>")),t.aS)}return s==null?c:new A.c9(q,s.c,c.c)},
sj7(a){this.x=t.Q.a(a)}}
A.uo.prototype={
$1(a){var s=this.a.a
return new A.ab(s,A.o(s).i("ab<1>")).O(0,new A.un(A.q(a)))},
$S:3}
A.un.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:29}
A.up.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:16}
A.uj.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:29}
A.uk.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:157}
A.um.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.ul.prototype={
$0(){return A.c([],t.jV)},
$S:158}
A.uh.prototype={
$1(a){return t.aS.a(a).d.gK().a7(0,new A.ug(this.a))},
$S:159}
A.ug.prototype={
$1(a){t.q.a(a)
return this.a.y.aU(a.a,a.b)},
$S:160}
A.ui.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:161}
A.lZ.prototype={}
A.mv.prototype={}
A.x9.prototype={
$1(a){return B.c.T(A.q(a),"off.")},
$S:3}
A.bO.prototype={
v(){return"DoorChoice."+this.b}}
A.c7.prototype={
v(){return"VisitPhase."+this.b}}
A.c8.prototype={
v(){return"VisitTier."+this.b}}
A.er.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dL.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gao(){return this.c}}
A.d8.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.by.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.by&&b.a===this.a&&b.b===this.b},
gR(a){return A.d1(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c9.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.c9&&b.a===this.a&&b.b===this.b},
gR(a){return A.d1(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.bW.prototype={
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.bW&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gR(a){var s=this
return A.d1(s.a,s.b,s.c,s.d,B.h,B.h)},
B(){var s=this
return A.F(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gao(){return this.b},
gaV(){return this.c}}
A.m_.prototype={
B(){var s,r,q,p=this.a
p=A.I(p,A.o(p).c)
B.a.Y(p)
s=this.b
r=A.o(s)
q=r.i("dn<1,U<e,@>>")
s=A.I(new A.dn(s,r.i("U<e,@>(1)").a(new A.uf()),q),q.i("n.E"))
r=this.c
return A.F(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.uf.prototype={
$1(a){return t.T.a(a).B()},
$S:162}
A.jW.prototype={
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
A.nq.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:163}
A.nr.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:164}
A.ns.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:165}
A.lX.prototype={
gbk(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.uq.prototype={}
A.bn.prototype={}
A.lW.prototype={}
A.lU.prototype={}
A.iT.prototype={}
A.lV.prototype={}
A.ht.prototype={}
A.my.prototype={
glJ(){var s,r
if(!this.aF)return B.m
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.f6.lK(s,r)},
gmZ(){var s="shadowCaster",r=this.cX
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.i3(s).a+";shadowTriangles="+r.i3(s).b+";frameMs="+B.b.I(this.cY,3)},
ghO(){var s=this.cX
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.cY<=100},
n7(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.ib()
l.r=k
k=B.cm.iB(k)
l.w=k
q=l.b
p=l.c
s=new A.lI(q,p,q,p)
o=A.AB(l.d.a)
l.e=o
try{o.hX(l.jT(k,q,p),s)}catch(n){r=A.ai(n)
k=l.w
if(k===B.al)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.w(r)
l.w=B.al
k=A.AB(l.d.a)
k.hX(B.ml,s)
l.e=k}k=l.e
k.c_()
m=A.EZ(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.cb=l.b
l.cc=l.c
l.fm()
l.mT=A.EF(!0,!0,!0)
l.hH=new A.ro(A.m(t.N,t.S))
l.aF=!0},
dd(a,b){var s,r=this
if(a<=0||b<=0)throw A.a(A.r("Pixeldart surface size must be positive",null))
if(!r.aF){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cd!==a||r.ce!==b)r.ce=r.cd=null
s=r.e
s===$&&A.p()
s.c_()
new A.lI(a,b,a,b).C()
if(r.cZ==null)r.cZ=r.bZ()},
bZ(){var s=0,r=A.aM(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bZ=A.aN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cb
h=n.b
if(!(i!==h||n.cc!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.h(m)
s=8
return A.a5(A.wp(i,B.cp.ho("auto","full","srgb",h,"auto","profile",A.h(l),g)),$async$bZ)
case 8:n.cb=m
n.cc=l
n.ce=n.cd=null
A.jL()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ai(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.w(k)
n.cd=n.b
n.ce=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.cZ=null
i=n.cd
h=n.b
j=i===h&&n.ce===n.c
if(!j)i=n.cb!==h||n.cc!==n.c
else i=!1
if(i)n.cZ=n.bZ()
s=o.pop()
break
case 5:return A.aK(null,r)
case 1:return A.aJ(p.at(-1),r)}})
return A.aL($async$bZ,r)},
fj(a,b,c,d,e,f,g,h){return B.cp.ho(d,e,f,a,g,h,c,b)},
jT(a,b,c){return this.fj(a,b,c,"auto","full","srgb","auto","profile")},
fm(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.S===s
if(p){r=7
break A}if(B.K===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.K===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.f(A.r("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.qm(r,p,A.Z(q),A.Z(q),A.m(q,t.i))},
cM(a){var s=0,r=A.aM(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cM=A.aN(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aF){s=1
break}switch(a.b.a){case 0:i=B.dJ
break
case 2:i=B.al
break
case 1:i=B.dI
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.fj(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.a5(A.wp(i,t.lg.a(k)),$async$cM)
case 7:n.w=t.xK.a(m)
n.fm()
n.cb=n.b
n.cc=n.c
n.x=null
A.jL()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ai(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.w(j)
A.jL()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$cM,r)},
ly(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.aF||b4.Q.length!==0)return
b4.hI=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gaR().eq(8,"texture:wall-plaster",!0,256,B.ba,256))
s.k(0,b7,b4.e.gaR().eq(8,"texture:grime",!0,512,B.ba,512))
for(q=0;q<2;++q){p=B.kz[q]
r=b4.e.w
if(r==null)r=A.f(A.k(b8))
s.k(0,p,r.eq(8,"texture:"+p,!0,256,B.ba,256))}b4.dP()
b4.cF()
b4.RG=b4.cH(A.qz(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
b4.km()
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.R8,j=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.F(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cE(g,g.r,g.e,A.o(g).i("cE<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bw.h(0,c)
if(b==null)A.f(A.k("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.qz(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.f(A.k(b8))
if(a0.x)A.f(A.k(b9))
c.C()
a1=a0.b.a.aD(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.jT[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dL(a2)
j=b4.dL(a2)
l=A.qz(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dL(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.f(A.k(b8)):j
if(n.x)A.f(A.k(b9))
l.C()
a1=n.b.a.aD(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cF()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b4.kn(c0,r[q])
b4.kQ(c0)
$.v.j().setAttribute("data-renderer-house-model-scale",B.b.I(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.t)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.fp(c0,i,a4)
g=b4.e.w
if(g==null)g=A.f(A.k(b8))
f=a4.a
if(g.x)A.f(A.k(b9))
e=g.a
a5.C()
a1=e.b.aD(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.b9(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.RG
e.toString}a6=new A.b9(a1,e,B.v,0,B.O,B.N,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.v.C()
a=e.a
a0=a.$ti
a.W(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.v.a9()
c=c.gaj()
a0=A.z(c)
A.aW(new A.G(c,a0.i("B(1)").a(a.gal()),a0.i("G<1,B>")))
n.k(0,f,new A.jb(f,g,e.b.bL(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.t)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.kM(i,a4.b1(f),a4.aL(f),a4.aL(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.vh(a4))
a=b4.e.w
if(a==null)a=A.f(A.k(b8))
if(a.x)A.f(A.k(b9))
a0=a.a
e.C()
a1=a0.b.aD(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.b9(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.RG
e.toString}else e=a
a8=new A.b9(a1,e,B.v,0,B.O,B.N,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.v.C()
a=e.a
a0=a.$ti
a.W(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.v.a9()
a=a.gaj()
a7=A.z(a)
A.aW(new A.G(a,a7.i("B(1)").a(a0.gal()),a7.i("G<1,B>")))
B.a.l(o,new A.mx(f,e.b.bL(a8),a8,c))}for(r=A.Ja(A.Iw(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.dH(e)
a0=b4.dH(e)
a=A.qz(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.dH(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.f(A.k(b8)):a0
if(c.x)A.f(A.k(b9))
a.C()
a1=c.b.a.aD(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.f(A.k(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.f(A.k(b9))
a7=c.a
a.C()
a1=a7.b.aD(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.b9(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.am.p(0,a0))A.f(A.r("unknown exterior cell: "+a0,b5))
b3=new A.b9(a1,b,B.v,-1,B.O,B.N,B.mK.p(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.p()
B.v.C()
c=e.a
a=c.$ti
c.W(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.v.a9()
c=c.gaj()
a0=A.z(c)
A.aW(new A.G(c,a0.i("B(1)").a(a.gal()),a0.i("G<1,B>")))
j.k(0,b2,e.b.bL(b3))}},
eP(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="renderer is not initialized",b5="resource library is disposed",b6="promoted model package is missing: ",b7=b3.hz=b8.c
b3.id=A.ac(b8.e,t.fl)
if(!b3.aF)return
for(s=b3.p2,r=new A.ae(s,s.r,s.e,A.o(s).i("ae<2>"));r.m();)r.d.a1()
s.P(0)
r=b3.p3
if(r!=null)r.b.P(0)
r=b3.p4
b3.p3=r==null?null:new A.ru(new A.rp(r),A.m(t.N,t.K))
for(r=b3.ch,q=new A.M(r,A.o(r).i("M<1,2>")).gu(0),p=b3.CW;q.m();){o=q.d
o.toString
n=b3.f
n===$&&A.p()
n.b.aI(o.b)
m=p.h(0,o.a)
if(m!=null){o=b3.e
o===$&&A.p()
o=o.w
if(o==null)o=A.f(A.k(b4))
n=m.a
if(o.x)A.f(A.k(b5))
o.a.aI(n)
o.f.a4(0,n)}}r.P(0)
p.P(0)
q=b3.cx
B.a.P(q)
for(o=b3.id,n=o.length,l=b3.ok,k=t.fH,j=t.d,i=t.s3,h=b3.p1,g=0;g<n;++g){f=o[g]
e=f.c
d=B.c.p(e.toLowerCase(),"stair")
if(d)continue
d=f.r
d=d!=="story"&&d!=="architecture"
if(d)continue
d=b3.hI
c=d==null?null:d.e.h(0,f.b)
if(c==null)continue
b=b8.bI(e)
if(b3.p3!=null&&b3.p4.a.L(b.a)){d=f.f
a=d.a
a0=A.rC(B.X,d.b.b*3.141592653589793/180)
a1=b.a
a2=b3.p4.a.h(0,a1)
a1=a2==null?A.f(A.k(b6+a1)):a2
a2=b3.e
a2===$&&A.p()
a2=a2.w
if(a2==null)a2=A.f(A.k(b4))
a3=b3.f
a3===$&&A.p()
a4=c.d
a5=A.c([],j)
a6=A.c([],i)
a7=new A.h7(a1.c,h,a2,a3,new A.vk(b3,b),new A.hm(new A.B(a4.a+a.a*b7,a4.b+a.b*b7,a4.c+a.c*b7),a0,d.c.a*b7),-1,a5,a6)
a8=a7.jA("LOD0")
a7.x=a8.a
B.a.J(a5,a8.c)
B.a.J(a6,a8.b)
d=b3.p3
d.toString
a=k.a(new A.vl(a7))
a1=d.b
a2=f.a
if(a1.L(a2))A.f(A.k("presentation placement is already bound: "+a2))
e=b8.bI(e).a
if(d.a.a.a.h(0,e)==null)A.f(A.k(b6+e))
a1.k(0,a2,a.$1(new A.ha()))
s.k(0,a2,a7)
continue}e=b3.e
e===$&&A.p()
e=e.w
if(e==null)e=A.f(A.k(b4))
d=b3.kr(b,f,b7)
a=f.a
if(e.x)A.f(A.k(b5))
a1=e.a
d.C()
a9=a1.b.aD(d,"inventory:"+a)
a2=a9.a
a1.c.k(0,a2,a1.b9(d))
e.f.l(0,a9)
e=f.f
d=e.a
a0=A.rC(B.X,e.b.b*3.141592653589793/180)
e=b.b
a1=l.h(0,e)
if(a1==null){a1=l.h(0,"furniture")
a1.toString}a3=c.d
d=new A.hm(new A.B(a3.a+d.a*b7,a3.b+d.b*b7,a3.c+d.c*b7),a0,1)
m=new A.b9(a9,a1,d,-1,B.O,B.N,e!=="micro",!0,0,null)
B.a.l(q,a9)
p.k(0,a,m)
e=b3.f
e===$&&A.p()
d.C()
a1=e.a
a3=a1.$ti
a1.W(a3.c.a(a9))
a1=a1.b
if(!(a2>=0&&a2<a1.length))return A.d(a1,a2)
b0=a1[a2].c
a1=(b0==null?a3.y[1].a(b0):b0).d
d=d.a9()
a1=a1.gaj()
a2=A.z(a1)
A.aW(new A.G(a1,a2.i("B(1)").a(d.gal()),a2.i("G<1,B>")))
r.k(0,a,e.b.bL(m))}b1=s.a
b2=r.a
$.v.j().setAttribute("data-renderer-inventory-items",""+(b2+b1))
b7=$.v.j()
s=b1===0?"proxy":"mixed"
b7.setAttribute("data-renderer-inventory-resolution",s)
$.v.j().setAttribute("data-renderer-inventory-proxy-count",""+b2)
$.v.j().setAttribute("data-renderer-inventory-promoted-count",""+b1)
b3.kR()},
kR(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
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
o.J(0,new A.qN(n.a.a.b,"LOD0",!l,k,j,m).B())
i.push(o)}s=$.v.j()
o=i.length!==0
n=o&&B.a.a7(i,new A.va())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a6(A.F(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
d4(a){var s=0,r=A.aM(t.H),q=this,p,o,n
var $async$d4=A.aN(function(b,c){if(b===1)return A.aJ(c,r)
for(;;)switch(s){case 0:s=2
return A.a5(B.f8.cj(a,new A.vi(),new A.vj()),$async$d4)
case 2:n=c
q.p4=n
p=$.hD
if(p!=null)q.eP(p)
$.v.j().setAttribute("data-renderer-model-packages","validated")
$.v.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.v.j()
o=n.a.ga_()
p.setAttribute("data-renderer-model-package-count",""+o.gt(o))
return A.aK(null,r)}})
return A.aL($async$d4,r)},
iP(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=c3.e,c2=c1.h(0,c4)
if(c2==null)return
s=c2.a
r=t.N
q=A.aG([s],r)
for(p=c3.aQ(s),o=J.P(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.ck(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c1.h(0,m)!=null)q.l(0,m)}for(c1=c0.ax,c1=new A.M(c1,A.o(c1).i("M<1,2>")).gu(0),s=c0.ay,p=t.h1,o=c0.at;c1.m();){l=c1.d
n=l.a
k=q.p(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aO(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=c0.c3(i[f],k)
d=c0.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.W(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gaj()
a0=A.z(a)
A.aW(new A.G(a,a0.i("B(1)").a(b.gal()),a0.i("G<1,B>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.W(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb_(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gX(h))}for(c1=c0.go,s=c1.length,a3=0;a3<c1.length;c1.length===s||(0,A.t)(c1),++a3){a4=c1[a3]
k=q.p(0,a4.a)&&a4.d.$0()?-1:0
p=c0.f
p===$&&A.p()
o=c0.c3(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.W(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaj()
g=A.z(i)
A.aW(new A.G(i,g.i("B(1)").a(n.gal()),g.i("G<1,B>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.W(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb_(o)}c1=c0.fr
s=A.o(c1).i("ab<1>")
s=A.I(new A.ab(c1,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=c1.h(0,s[a3])
o=a5.e
e=c0.c3(o,q.p(0,a5.b)?-1:0)
o=c0.f
o===$&&A.p()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.W(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a9()
g=g.gaj()
d=A.z(g)
A.aW(new A.G(g,d.i("B(1)").a(i.gal()),d.i("G<1,B>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.W(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb_(e)
c1.k(0,a5.a,a5.lY(e))}for(c1=c0.id,s=c1.length,p=c0.ch,o=c0.CW,n=c0.p2,a3=0;a3<s;++a3){a6=c1[a3]
i=a6.a
a7=p.h(0,i)
a8=o.h(0,i)
a9=n.h(0,i)
b0=q.p(0,a6.b)
if(a9!=null){a9.iO(b0?-1:0)
continue}if(a7==null||a8==null)continue
i=c0.f
i===$&&A.p()
g=c0.c3(a8,b0?-1:0)
d=g.c
d.C()
c=i.a
b=c.$ti
a=b.c.a(g.a)
c.W(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
a2=c[a].c
c=(a2==null?b.y[1].a(a2):a2).d
d=d.a9()
c=c.gaj()
b=A.z(c)
A.aW(new A.G(c,b.i("B(1)").a(d.gal()),b.i("G<1,B>")))
i=i.b
b=i.$ti
b.c.a(a7)
b.y[1].a(g)
i.W(a7)
i=i.b
b=a7.a
if(!(b>=0&&b<i.length))return A.d(i,b)
i[b].sb_(g)}b1=new A.ku().lN(c4)
c1=$.v.j()
s=A.I(b1,A.o(b1).c)
B.a.Y(s)
c1.setAttribute("data-renderer-exterior-cells",B.a.U(s,","))
c1=c0.dx
r=new A.ku().hK(new A.vm(c0),new A.ab(c1,A.o(c1).i("ab<1>")),b1,r)
b2=A.eY(r,r.$ti.i("n.E"))
c1=c0.db
s=A.o(c1).i("ab<1>")
s=A.I(new A.ab(c1,s),s.i("n.E"))
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
e=c0.c3(a8,b8?-1:0)
o=c0.f
o===$&&A.p()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.W(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaj()
g=A.z(i)
A.aW(new A.G(i,g.i("B(1)").a(n.gal()),g.i("G<1,B>")))
o=o.b
g=o.$ti
g.c.a(b7)
g.y[1].a(e)
o.W(b7)
o=o.b
g=b7.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb_(e)
c1.k(0,b6,e)}$.v.j().setAttribute("data-renderer-exterior-items",""+b3+"/"+c1.a)
$.v.j().setAttribute("data-renderer-shadow-casters",""+b4+"/"+b5)
c1=A.o(b2)
s=c1.i("dn<1,e>")
b9=A.I(new A.dn(b2,c1.i("e(1)").a(new A.vn(c0)),s),s.i("n.E"))
B.a.Y(b9)
$.v.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.U(b9,","))},
d9(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aF)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fT(b0,n)
l=J.aO(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.f(A.k(a8))
c=a7.c0(e.b)
b=g.b
if(d.x)A.f(A.k(a9))
a=d.a
c.C()
a0=a.b.aD(c,h+e.a+"-drift-"+b)
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
a3.W(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gaj()
a3=A.z(b)
A.aW(new A.G(b,a3.i("B(1)").a(d.gal()),a3.i("G<1,B>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.W(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb_(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a4(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.f(A.k(a8)):a
if(d.x)A.f(A.k(a9))
d.a.aI(a6)
d.f.a4(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gX(j))
$.v.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hJ+1));++a7.hJ},
ep(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aF)return
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
m=p.gaR().da(k.fp(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.b9(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.lj(l)
p.b.eB(n,l)
s.k(0,b,r.hs(l,m))
s=k.y
n=r.d
B.a.a4(s,n)
B.a.l(s,m)
k.e.gaR().nZ(n)},
iE(e5,e6,e7,e8,e9,f0,f1,f2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=this,e0="rain_override",e1="wetness_override",e2=A.aG([e6],t.N),e3=e5.e,e4=e3.h(0,e6)
if(e4!=null)for(s=e4.a,r=e5.aQ(s),q=J.P(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.ck(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&e3.h(0,o)!=null)e2.l(0,o)}n=new A.pR(e5).oy(e2,e7)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.t)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.hq(l.a,l.x,l.w,q))}for(r=d9.id,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&e2.p(0,k.b)){j=e3.h(0,k.b)
i=d9.hz
h=k.f.a
j=j.d
s.push(new A.hq(new A.j(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}d9.y2=A.ac(s,t.cZ)
e3=t.jC
g=A.c([],e3)
f=A.c([],e3)
for(e=0;e<n.length;++e){l=n[e]
e3=e===0
s=e3?"spot":"point"
r=l.c
q=l.e
p=l.d
if(s!=="point"&&s!=="spot")A.f(A.a3(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.f(A.a3(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.f(A.a3(p,"radius","must be finite and > 0"))
e3=e3?f:g
B.a.l(e3,new A.b4(e,s,l.a,new A.j((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}e3=d9.fx
e3===$&&A.p()
d=e3.nV(e7,g,f)
e3=A.m(t.S,t.A_)
for(e=0;e<n.length;++e)e3.k(0,e,n[e])
s=A.c([],t.Fk)
for(r=d.a,q=r.length,m=0;m<r.length;r.length===q||(0,A.t)(r),++m){c=r[m]
p=c.a
j=e3.h(0,p).a
i=c.d
s.push(new A.le(p,new A.B(j.a,j.b,j.c),new A.c0(i.a,i.b,i.c),c.e,c.f))}r=A.c([],t.cv)
for(q=d.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.t)(q),++m){c=q[m]
j=c.a
i=e3.h(0,j)
h=i.a
i=i.b
b=c.d
r.push(new A.bJ(j,new A.B(h.a,h.b,h.c),new A.B(i.a,i.b,i.c),new A.c0(b.a,b.b,b.c),c.e,c.f,1.05,1.4))}d9.jF(d,++d9.fy)
e3=$.eH()
a=e3.ac("time_override")
if(a>=0)a0=B.b.A(a,0,23.999)
else a0=f2
d9.hE=a0
a1=f0.c
a2=B.b.S(B.b.S(a0,24)+24,24)
a3=B.b.A(a1,0,1)
a4=B.b.A(f0.d,6,16)/2
a5=13-a4
a6=13+a4
q=a2>=a5
a7=q&&a2<=a6?Math.sin(3.141592653589793*((a2-a5)/(a6-a5)))*65:-18
if(a2<=a5)a8=0
else a8=a2>=a6?1:(a2-a5)/(a6-a5)
a9=a7*3.141592653589793/180
b0=(90+a8*180)*3.141592653589793/180
p=Math.cos(b0)*Math.cos(a9)
j=B.b.A(Math.sin(a9),0,1)
i=Math.sin(b0)*Math.cos(a9)
h=B.b.A(1-j,0.1,0.9)
b=a5-1.5
if(a2>=b&&a2<a5){b1=(a2-b)/1.5
b2=A.ch(B.m5,B.bH,b1)
b3=A.ch(B.m7,B.bG,b1)
b4=A.ch(B.m1,B.bI,b1)
b5=0.3+0.5*b1
b6=0.25+0.2*b1}else if(q&&a2<14){b2=B.bH
b3=B.bG
b4=B.bI
b5=0.85
b6=0.45}else if(a2>=14&&a2<a6){b1=(a2-14)/(a6-14)
b2=A.ch(B.bH,B.dK,b1)
b3=A.ch(B.bG,B.dN,b1)
b4=A.ch(B.bI,B.dM,b1)
b5=0.85*(1-b1*0.35)
b6=0.45*(1-b1*0.25)}else if(a2>=a6&&a2<a6+1.5){b1=(a2-a6)/1.5
b2=A.ch(B.dK,B.aM,b1)
b3=A.ch(B.dN,B.aL,b1)
b4=A.ch(B.dM,B.aN,b1)
b5=0.55*(1-b1*0.8)
b6=0.34*(1-b1*0.65)}else{q=a6+1.5
if(a2>=q&&a2<a6+3){b1=(a2-q)/1.5
b2=A.ch(B.aM,B.aM,b1)
b3=A.ch(B.aL,B.aL,b1)
b4=A.ch(B.aN,B.aN,b1)
b5=0.11*(1-b1*0.25)
b6=0.16*(1-b1*0.15)}else{b2=B.aM
b3=B.aL
b4=B.aN
b5=0.15
b6=0.18}}if(a3>0){b7=A.ch(b4,B.mf,a3*0.7)
b5*=1-a3*0.35
b6*=1-a3*0.15}else b7=b4
b8=f1?1:0.15
b9=B.b.A(0.3333333333333333,0,1)
c0=B.b.A(a3*0.75+b9*0.25,0,1)
if(e3.ac(e0)>=0)a1=e3.ac(e0)
d9.x1=B.b.A(a1,0,1)
d9.ca=B.b.A(e3.ac(e1)>=0?e3.ac(e1):c0,0,1)
q=$.Da()
q.ot(0.0166,a1)
c1=q.y
c2=B.b.A(Math.sin(Math.max(0,a7)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
c3=c2>0.001
c4=c3?new A.B(p,j,i):new A.B(-p,h,-i)
q=c1.a
c5=q&&c1.ghT()?new A.B(c1.f,c1.r,c1.w):c4
c6=c3?new A.c0(b2.c,b2.b,b2.a):new A.c0(0.35,0.45,0.65)
if(q){p=c1.b
c7=new A.c0(c6.a+c1.c*p*2,c6.b+c1.d*p*2,c6.c+c1.e*p*2.5)}else c7=c6
c8=B.b.A(c1.gmD(),0.12,2)
b5*=b8
if(q)b5=b5*0.12+c1.b*4.5*c8
p=$.v.j()
p.setAttribute("data-renderer-lightning-active",String(q))
j=c1.x
p.setAttribute("data-renderer-lightning-source-distance-m",B.b.I(j,1))
p.setAttribute("data-renderer-lightning-distance-attenuation",B.b.I(c8,4))
i=c1.f
h=c1.r
b=c1.w
p.setAttribute("data-renderer-lightning-source-direction",B.b.I(i,3)+","+B.b.I(h,3)+","+B.b.I(b,3))
c9=e3.eJ("fog_enable")
d0=e3.ac("fog_density")
d1=e3.ac("fog_height_falloff")
d2=c9?(0.0015+a3*0.014+b9*0.003)*B.b.A(d0/0.012,0,8):0
d3=c9?(0.04+a3*0.08+b9*0.02)*B.b.A(d1/0.6,0,8):0
d9.ea=d2
d9.hF=d3
e3=A.c([],t.xL)
for(p=s.length,m=0;m<s.length;s.length===p||(0,A.t)(s),++m){l=s[m]
d4=l.c
d5=l.e
e3.push(new A.hp("point:"+l.a,l.b,new A.B(d4.a,d4.b,d4.c),l.d,Math.max(0.25,d5),Math.max(4,d5*8)))}for(p=r.length,m=0;m<r.length;r.length===p||(0,A.t)(r),++m){l=r[m]
d4=l.d
d5=l.f
e3.push(new A.hp("spot:"+l.a,l.b,new A.B(d4.a,d4.b,d4.c),l.e,Math.max(0.25,d5*0.25),Math.max(8,d5)))}d6=d9.rx
if(q&&c1.ghT()&&d6!=null){d7=new A.B(i,h,b).gah()
B.a.l(e3,new A.hp("lightning:active",d6.d.a0(0,d7.a3(0,j)),new A.B(c1.c,c1.d,c1.e),c1.b*12e4,1000,Math.max(1100,j*1.25)))}if(d6==null)e3=null
else{q=d6.d
e3=A.Fq(d6.e,Math.min(d6.r,64),q,d2,e3)}d9.hy=e3
q=e3==null
d8=q?null:e3.a
if(d8==null)d8=B.A
if(!q){q=$.v.j()
q.setAttribute("data-renderer-volumetric-source-count",""+e3.c)
p=e3.a
q.setAttribute("data-renderer-volumetric-source-radiance",B.b.I(p.a,6)+","+B.b.I(p.b,6)+","+B.b.I(p.c,6))
e3=e3.b
q.setAttribute("data-renderer-volumetric-source-direction",B.b.I(e3.a,4)+","+B.b.I(e3.b,4)+","+B.b.I(e3.c,4))}e3=Math.max(0.045,b6*(c3?c2:1)*b8)
d9.ry=new A.kx(B.jj,new A.c0(b7.c*0.08+B.b.A(d8.a,0,8)*0.015,b7.b*0.08+B.b.A(d8.b,0,8)*0.015,b7.a*0.08+B.b.A(d8.c,0,8)*0.015),1.5/(1+a1*0.45),14/(1+a1*0.16),d3,d2,new A.c0(b3.c,b3.b,b3.a),e3,new A.oN(c5,c7,b5),s,r)},
kX(){var s,r,q,p,o,n,m,l=this,k="wetness_override",j="fog_height_falloff",i="post_affine_warp",h="post_vertex_snap",g=null,f=t.N,e=A.aG(["time_override","rain_override",k,"fog_enable","fog_density",j,"post_exposure","post_vignette","post_film_grain",i,h],f),d=A.m(f,f),c=$.eH().w
c===$&&A.p()
s=0
for(;s<43;++s)d.k(0,c[s].a,"No resolved Pixeldart frame mapping is installed")
c=new A.vf(l,e,d)
c.$2("ssao",B.jR)
c.$2("bloom",B.kj)
c.$2("dof",B.kl)
c.$2("grade",B.kk)
c.$2("ps1",B.kx)
c.$2("vhs",B.km)
c=$.eH()
r=l.hE
q=l.x1
p=l.ca
o=l.ea
n=l.hF
m=l.to
m=A.F(["time_override",r,"rain_override",q,k,p,"fog_density",o,j,n,"post_exposure",m.a,"post_bloom",m.b,"post_vignette",m.e,"post_film_grain",m.f,"post_dither",m.Q,"post_depth_of_field",m.d,"post_color_grade",m.as,i,m.at,h,m.ax,"post_quantization_bits",m.ay,"post_vhs_chroma",m.ch,"post_vhs_noise",m.cx],f,t.i)
c.ob("No resolved debug attachments are exposed by the active Pixeldart profile",A.F(["fog_enable",l.ea>0,"shadow_ssdo_enable",l.to.c>0],f,t.y),m,e,d)
d=$.Db()
d.lw(c)
$.v.j().setAttribute("data-renderer-shader-overrides",B.f.a6(d.a,g))
$.v.j().setAttribute("data-renderer-shader-lab",B.f.a6(c.mz(),g))
$.v.j().setAttribute("data-renderer-shader-lab-document",B.f.a6(c.ij(),g))
$.v.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a6(A.AD().ij(),g))},
iQ(a){var s,r,q,p=this
if(a==null){p.cW=p.cV=0
return}p.cV=B.b.A(a.a/0.08,0,1)
p.cW=B.b.A(a.x,0,1)
s=a.b
r=B.b.A(s/0.0008,0,1)
p.ca=Math.max(p.ca,r)
q=$.v.j()
q.setAttribute("data-renderer-weather-snow-coverage",B.b.I(p.cV,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.I(p.cW,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.I(s,8))},
km(){var s,r,q,p,o=this
if(o.e8!=null||o.e9!=null)return
s=new Float32Array(A.a1(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=o.e
r===$&&A.p()
o.e8=r.gaR().da(o.c0(s),"weather:rain-particle")
o.e9=o.cH(B.kW)
q=new A.cp(new Float32Array(5376))
q.ia(new A.j(-0.035,0,0),new A.j(0.035,0,0),new A.j(0.035,-0.07,0),new A.j(-0.035,-0.07,0),14478335,0.78,!0)
o.hA=o.e.gaR().da(o.c0(B.q.av(q.a,0,q.b)),"weather:snow-particle")
o.hB=o.cH(B.kU)
p=new A.cp(new Float32Array(5376))
p.ia(new A.j(-0.025,0,0),new A.j(0.025,0,0),new A.j(0.025,-0.12,0),new A.j(-0.025,-0.12,0),11519958,0.9,!0)
o.hC=o.e.gaR().da(o.c0(B.q.av(p.a,0,p.b)),"weather:hail-particle")
o.hD=o.cH(B.kV)},
l7(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.cS=a.e5=0
a.e6=a.gfM()
a.cU=a.cT=0
a.e7=!1
a.cR=a.cQ=a.e4=0
s=a.xr
r=s==null
q=r?a0:s.a
if(q==null)q=B.D
p=r?a0:A.AS(s.a)
if(p==null)p=A.AS(B.D)
A:{o=B.aJ===q
if(o){n=a.hA
break A}if(B.ak===q||B.aI===q){n=a.hC
break A}n=a.e8
break A}B:{if(o){m=a.hB
break B}if(B.ak===q||B.aI===q){m=a.hD
break B}m=a.e9
break B}if(n==null||m==null||q===B.D||a.x1<=0.01||a.x2<=0.01)return
C:{if(o){o=38
break C}if(B.ak===q){o=26
break C}if(B.aI===q){o=30
break C}o=32
break C}l=B.d.A(B.b.aJ(8+a.x1*o*a.x2),0,40)
o=a.gfM()
if(l<0)A.f(A.r("atmospheric particle counts must be >= 0",a0))
k=B.d.A(l,0,o)
a.e5=l
a.e6=o
a.e7=B.d.A(l,0,o)!==l
o=Math.sin(a.eb*0.7)
j=r?a0:s.b.a
if(j==null)j=0
i=j+o*0.18
r=r?a0:s.b.c
h=(r==null?0:r)+0.12
r=p.f
g=new A.nA(n,m,B.er,B.nv,B.ny,new A.B(i,p.b,h),B.nw,new A.B(i,-p.c,h),p.d,p.e,k,a.ed,r,p.r,2003132788+q.a)
f=g.mY(a2)
a.cT=f.b
a.cU=f.c
e=new A.ky(a2.a,a2.b,a2.c,a2.d,a2.e,a2.f,a2.r,Math.max(0,a2.w-0.016666666666666666))
for(r=0.02*r,o=p.w,d=0;d<k;++d){c=g.cq(a2,d)
n=g.cq(e,d).c
m=c.c
j=c.d
b=A.Fs(new A.j(m.a,m.b,m.c),q,a.cP,o,r,new A.j(n.a,n.b,n.c),new A.j(j.a,j.b,j.c))
if(!b.a)continue;++a.e4
a.cQ=a.cQ+b.r
a.cR=a.cR+b.f}a.cS=g.j9(a1,a2,new A.vg(a,p))},
kl(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.cP,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
giq(){var s=this.xr
s=s==null?null:s.a
return(s==null?B.D:s).b},
geE(){var s=this.y1
s=s==null?null:s.b
return s==null?0:s},
gip(){var s=this.y1
s=s==null?null:s.d
return s==null?0:s},
gfM(){var s,r=this.w
r===$&&A.p()
s=r.a
A:{if(B.S===s){r=40
break A}if(B.K===s){r=24
break A}r=8
break A}return r},
fT(a,b){var s=A.Ix(a,b),r=A.Iv(a,b),q=A.I(s.c,t.i)
B.a.J(q,r)
return A.c([new A.ht("wall",new Float32Array(A.a1(q))),new A.ht("floor",s.a),new A.ht("ceiling",s.b)],t.pv)},
c0(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.B(q,p,a[o]))}if(n.length===0)throw A.a(A.k("house surface mesh cannot be empty"))
return new A.bQ(B.a9,a,null,A.aW(n))},
kn(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fT(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.a(A.k("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.f(A.k("renderer is not initialized"))
j=b.c0(l.b)
i=l.a
if(k.x)A.f(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.aD(j,n+i)
f=g.a
h.c.k(0,f,h.b9(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.b9(g,i,B.v,-1,B.O,B.N,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.v.C()
k=i.a
j=k.$ti
k.W(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.v.a9()
k=k.gaj()
h=A.z(k)
A.aW(new A.G(k,h.i("B(1)").a(j.gal()),h.i("G<1,B>")))
c=i.b.bL(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gX(r))
if(q.length!==0)b.at.k(0,a0,B.a.gX(q))},
kQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.F(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cE(l,l.r,l.e,A.o(l).i("cE<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bw.h(0,i)
if(h==null)A.f(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.v.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.U(e,","))
$.v.j().setAttribute("data-renderer-house-surface-bindings",B.a.U(d,","))},
kr(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cp(new Float32Array(5376))
g=this.kp(a0.b)
r=new A.j(d,b,f)
q=new A.j(e,b,f)
p=new A.j(e,c,f)
o=new A.j(d,c,f)
n=new A.j(d,b,a)
m=new A.j(e,b,a)
l=new A.j(e,c,a)
k=new A.j(d,c,a)
s.aM(q,r,o,p,g)
s.aM(n,m,l,k,g)
s.aM(r,n,k,o,g)
s.aM(m,q,p,l,g)
s.aM(r,q,m,n,g)
s.aM(o,k,l,p,g)
j=B.q.av(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.B(e,d,j[c]))}return new A.bQ(B.a9,j,null,A.aW(g))},
kp(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
kq(a){var s=this.ok,r=s.h(0,a)
if(r==null){s=s.h(0,"furniture")
s.toString}else s=r
return s},
dH(a){var s
A:{if(0===a){s=B.m2
break A}if(1===a){s=B.m4
break A}if(2===a){s=B.ma
break A}if(3===a){s=B.mi
break A}if(4===a){s=B.mj
break A}if(5===a){s=B.m8
break A}if(6===a){s=B.mh
break A}if(7===a){s=B.md
break A}s=B.mg
break A}return s},
dL(a){var s
A:{if("architecture"===a){s=B.m3
break A}if("furniture"===a){s=B.dL
break A}if("fixture"===a){s=B.mc
break A}if("service"===a){s=B.me
break A}if("story"===a){s=B.mb
break A}if("decor"===a){s=B.m6
break A}if("micro"===a){s=B.m9
break A}s=B.dL
break A}return s},
d5(a){return this.nm(t.G.a(a))},
nm(a){var s=0,r=A.aM(t.H),q,p=this,o,n,m,l
var $async$d5=A.aN(function(b,c){if(b===1)return A.aJ(c,r)
for(;;)switch(s){case 0:if(!p.aF){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.ju[n]
l=a.h(0,m)
if(l!=null)o.push(p.cD(m,l))}s=3
return A.a5(A.p9(o,t.H),$async$d5)
case 3:case 1:return A.aK(q,r)}})
return A.aL($async$d5,r)},
cD(a,b){return this.ku(a,b)},
ku(a,b){var s=0,r=A.aM(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cD=A.aN(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a5(A.aE(A.b(m.decode()),t.X),$async$cD)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.h(m.naturalWidth)
g.height=A.h(m.naturalHeight)
l=g
k=A.L(l.getContext("2d"))
if(!t.m.b(k)){h=A.k("2D canvas context unavailable for "+a)
throw A.a(h)}k.drawImage(m,0,0)
j=t.mV.a(A.b(k.getImageData(0,0,A.h(m.naturalWidth),A.h(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gaR()
f=new Uint8Array(A.a1(j))
if(h.x)A.f(A.k("resource library is disposed"))
h.c.ou(d,f)
h=n.e.gaR()
if(h.x)A.f(A.k("resource library is disposed"))
h.c.mW(d)
$.v.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dP()
n.cF()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ai(c)
h=$.v.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dP()
n.cF()
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aK(q,r)
case 2:return A.aJ(o.at(-1),r)}})
return A.aL($async$cD,r)},
dP(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aF||i.k1.a===0)return
s=i.k1
r=A.o(s).i("M<1,2>")
r=A.kX(new A.M(s,r),r.i("bU(n.E)").a(new A.vb()),r.i("n.E"),t.jP)
q=A.I(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gaR().gh3().d8(q)
s=p.a
o=A.c(s.slice(0),A.z(s))
B.a.V(o,new A.vc())
s=A.z(o)
r=s.i("e(1)")
s=s.i("G<1,e>")
n=new A.G(o,r.a(new A.vd()),s).U(0,",")
m=new A.G(o,r.a(new A.ve()),s).U(0,",")
s=p.cJ(B.e1)
r=p.cJ(B.e2)
l=p.cJ(B.e3)
k=p.cJ(B.e4);++i.hG
j=$.v.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hG)
if(!A.Q($.v.j().hasAttribute("data-renderer-texture-residency-initial")))$.v.j().setAttribute("data-renderer-texture-residency-initial",n)},
cF(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aF||j.R8.a===0)return
s=A.c([],t.a6)
for(r=j.R8,r=new A.M(r,A.o(r).i("M<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.d0(p,o,B.c.p(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gaR()
n=r.e
if(n===$){p=r.gh3()
r.e!==$&&A.zp()
n=r.e=new A.qA(p)}m=n.d8(s)
s=m.a
l=A.c(s.slice(0),A.z(s))
B.a.V(l,new A.v8())
s=A.z(l)
k=new A.G(l,s.i("e(1)").a(new A.v9()),s.i("G<1,e>")).U(0,",")
s=$.v.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cB(B.bz)+";pending="+m.cB(B.dp)+";missing="+m.cB(B.dq)+";evicted="+m.cB(B.dr))},
c3(a,b){return new A.b9(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fp(a,b,c){var s,r,q,p,o,n=A.Iu(a,b,c),m=n.length
if(m===0)throw A.a(A.k("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.B(q,p,n[o]))}return new A.bQ(B.a9,n,null,A.aW(s))},
kM(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aE(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cp(new Float32Array(5376))
o.aM(k[0],k[1],k[2],k[3],g)
n=B.q.av(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.B(r,q,n[p]))}return new A.bQ(B.a9,n,null,A.aW(k))},
jF(a,b){var s,r,q,p=a.e,o=A.o(p).i("M<1,2>"),n=A.I(new A.M(p,o),o.i("n.E"))
B.a.V(n,new A.v4())
p=$.v.j()
o=a.a
s=A.z(o)
r=a.c
q=A.z(r)
p.setAttribute("data-renderer-light-selection","points="+new A.G(o,s.i("i(1)").a(new A.v5()),s.i("G<1,i>")).U(0,":")+";spots="+new A.G(r,q.i("i(1)").a(new A.v6()),q.i("G<1,i>")).U(0,":"))
q=A.z(n)
p.setAttribute("data-renderer-light-rejections",new A.G(n,q.i("e(1)").a(new A.v7()),q.i("G<1,e>")).U(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
cH(a){var s,r=this.e
r===$&&A.p()
r=r.gaR()
if(r.x)A.f(A.k("resource library is disposed"))
a.C()
s=r.b.a.aD(a,null)
r.r.l(0,s)
this.R8.k(0,a.a,a)
return s},
$iAy:1}
A.vh.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:47}
A.vk.prototype={
$1(a){A.h(a)
return this.a.kq(this.b.b)},
$S:167}
A.vl.prototype={
$1(a){return this.a},
$S:168}
A.va.prototype={
$1(a){return J.a9(t.of.a(a).h(0,"attached"),!0)},
$S:169}
A.vi.prototype={
$1(a){var s=0,r=A.aM(t.N),q,p
var $async$$1=A.aN(function(b,c){if(b===1)return A.aJ(c,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.aE(A.b(A.b(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.Q(p.ok))throw A.a(A.k("package manifest HTTP "+A.w(A.nc(p,"status",t.S))+": "+a))
s=4
return A.a5(A.aE(A.b(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$$1,r)},
$S:170}
A.vj.prototype={
$2(a,b){var s=0,r=A.aM(t.uo),q,p,o
var $async$$2=A.aN(function(c,d){if(c===1)return A.aJ(d,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.aE(A.b(A.b(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.Q(p.ok))throw A.a(A.k("package payload HTTP "+A.w(A.nc(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a5(A.aE(A.b(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.Am(d,0,null)
s=1
break
case 1:return A.aK(q,r)}})
return A.aL($async$$2,r)},
$S:171}
A.vm.prototype={
$1(a){var s=this.a.dx.h(0,A.q(a))
s.toString
return s},
$S:27}
A.vn.prototype={
$1(a){var s,r,q,p
A.q(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.a(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:27}
A.vf.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.p()
if(r.b.p(0,a)){this.b.J(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.k(0,b[o],p+s.w.a.b+" does not install it")},
$S:172}
A.vg.prototype={
$1(a){var s=a.c
return!this.a.kl(new A.j(s.a,s.b,s.c),0.02*this.b.f)},
$S:173}
A.vb.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bU(s,a.b,r)},
$S:174}
A.vc.prototype={
$2(a,b){var s=t.e
return B.c.G(s.a(a).a.a,s.a(b).a.a)},
$S:175}
A.vd.prototype={
$1(a){t.e.a(a)
return a.a.a+"="+a.b.b},
$S:48}
A.ve.prototype={
$1(a){var s=t.e.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:48}
A.v8.prototype={
$2(a,b){var s=t.wl
return B.c.G(s.a(a).a.a,s.a(b).a.a)},
$S:177}
A.v9.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:178}
A.v4.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:179}
A.v5.prototype={
$1(a){return t.J.a(a).a},
$S:40}
A.v6.prototype={
$1(a){return t.J.a(a).a},
$S:40}
A.v7.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:181}
A.mx.prototype={}
A.jb.prototype={
hs(a,b){var s=this,r=b==null?s.d:b
return new A.jb(s.a,s.b,s.c,r,a)},
lY(a){return this.hs(a,null)}}
A.uJ.prototype={
gao(){return this.b},
gaV(){return this.c}}
A.vR.prototype={
$2(a,b){var s
A.z8(a,A.w(b))
switch(a){case"master":s=$.bq
if(s!=null)s.iI(b)
break
case"voice":s=$.bq
if(s!=null)s.iK(b)
break
case"effects":s=$.bq
if(s!=null)s.iH(b)
break
case"ambience":s=$.bq
if(s!=null)s.iG(b)
break
case"music":s=$.bq
if(s!=null)s.iJ(b)
break}},
$S:38}
A.vS.prototype={
$1(a){var s
A.z8("muted",""+a)
s=$.bq
if(s!=null)s.eR(a)},
$S:10}
A.vT.prototype={
$1(a){var s
A.z8("mono",""+a)
s=$.bq
if(s!=null)s.dk(a)},
$S:10}
A.vZ.prototype={
$2(a,b){A.z9(a,A.w(b))
A.Bs(a,b)},
$S:38}
A.w_.prototype={
$1(a){var s="high-contrast"
A.z9(s,""+a)
A.vD(s,a)},
$S:10}
A.w0.prototype={
$1(a){var s="strong-highlights"
A.z9(s,""+a)
A.vD(s,a)},
$S:10}
A.w1.prototype={
$1(a){$.di().o2(a)
A.wH()
A.Bu()},
$S:183}
A.w2.prototype={
$0(){var s=$.di()
s.a=A.dG(null,1)
s.b=A.dG(null,1)
A.wH()
A.Bu()},
$S:0}
A.w3.prototype={
$0(){A.dU(this.a)},
$S:0}
A.w4.prototype={
$0(){this.a.ae()},
$S:0}
A.w5.prototype={
$0(){A.dU(this.a)},
$S:0}
A.vU.prototype={
$0(){A.hI(this.a)},
$S:0}
A.vV.prototype={
$1(a){$.jB=a
A.BZ()
A.yB()},
$S:184}
A.vW.prototype={
$1(a){var s=$.cw()
$.yO=a
if(!s.Q&&a.Q){$.bp.j().a=1
$.bp.j().ie(7)
$.ax.j().hU()
$.cv().P(0)}A.C0()
A.Bt()},
$S:185}
A.vX.prototype={
$1(a){$.df=a
A.yW()
A.mY()},
$S:186}
A.vY.prototype={
$0(){$.df=B.av
$.ft.j().eN($.df)
A.yW()
A.mY()},
$S:0}
A.vO.prototype={
$1(a){var s,r=A.CA(a,A.BL())
$.jD=A.fZ($.jQ().b,a)
s=r.b
$.eA.j().ct(a,$.jQ().b,s)
$.v.j().setAttribute("data-graphics-fallback",B.a.U(s,"|"))
$.BM=A.n_(a,r,$.BM)},
$S:187}
A.vP.prototype={
$0(){A.dU($.eA.j())},
$S:0}
A.vQ.prototype={
$0(){A.dU($.eA.j())},
$S:0}
A.vK.prototype={
$1(a){},
$S:22}
A.vL.prototype={
$1(a){var s,r
$.yK=a
$.ah.j().eO(a.r)
s=$.ah.j()
r=s.ch
r.a=a.f
r.es()
s.bf()
A.C_()},
$S:188}
A.vM.prototype={
$0(){A.dU($.jt.j())},
$S:0}
A.vN.prototype={
$0(){A.dU($.jt.j())},
$S:0}
A.wx.prototype={
$0(){$.wU=A.Q(this.a.matches)
$.ze=A.Q(this.b.matches)
A.mY()},
$S:0}
A.wv.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ww.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xi.prototype={
$1(a){var s
try{A.zZ(this.b,a,this.a)
return!0}catch(s){if(A.ai(s) instanceof A.A)return!1
else throw s}},
$S:189}
A.xj.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jA.j()
break
case 5:p=$.ft.j()
break
case 1:p=$.eA.j()
break
case 4:p=$.hz.j()
break
case 2:p=$.jv.j()
break
case 3:p=$.jt.j()
break}s=p
r=null
switch(o){case 0:r=B.lu
break
case 5:r=B.lz
break
case 1:r=B.lv
break
case 4:r=B.ly
break
case 2:r=B.lw
break
case 3:r=B.lx
break}q=r
p=B.dl.h(0,a)
p.toString
A.yV(s,q,p)},
$S:190}
A.xk.prototype={
$0(){A.dU($.hB.j())},
$S:0}
A.xv.prototype={
$0(){return A.dU($.hB.j())},
$S:0}
A.xF.prototype={
$0(){$.cs.j().ae()},
$S:0}
A.xG.prototype={
$0(){$.cs.j().ae()},
$S:0}
A.xH.prototype={
$0(){A.yV($.hB.j(),B.dt,"pause.settings")},
$S:0}
A.xI.prototype={
$0(){$.cs.j().ae()
A.jJ($.jw.j())},
$S:0}
A.xJ.prototype={
$0(){A.jM("saved")},
$S:0}
A.xK.prototype={
$0(){$.cs.j().ae()
A.jJ($.jw.j())},
$S:0}
A.xL.prototype={
$0(){A.yV($.mV.j(),B.lA,"pause.credits")},
$S:0}
A.xl.prototype={
$0(){return A.hI($.cs.j())},
$S:0}
A.xm.prototype={
$1(a){var s=$.V.j(),r=s.e.ox(a),q=r?B.ip:B.iq
s.fN(q,r?a:null)
return r},
$S:21}
A.xn.prototype={
$0(){return A.hI($.jx.j())},
$S:0}
A.xo.prototype={
$2(a,b){var s,r
if($.ax.j().y){s=$.aI.j().gc9()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.GI(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.d7,a)
A.GH(B.d7[a])}}},
$S:191}
A.xp.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gaf().a===21){A.C5(!1)
return}s=$.X.j().r.b
$.V.j().j1(a,b,$.ao)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.di()
if(typeof n!=="number")return A.xd(n)
if(!(o<n))break
if($.X.b===$.X)A.f(A.a8(""))
p=B.a.h(B.Q,q).b
o=$.aD
if(o!=null){n=$.X.b
if(n===$.X)A.f(A.a8(""))
o.d9(n,p)}o=q
if(typeof o!=="number")return o.a0()
q=o+1}A.jM("saved after sleep")},
$S:192}
A.xq.prototype={
$0(){return A.hI($.mX.j())},
$S:0}
A.xr.prototype={
$0(){return A.hI($.jw.j())},
$S:0}
A.xs.prototype={
$0(){return A.dU($.mV.j())},
$S:0}
A.xt.prototype={
$0(){A.hI($.ju.j())},
$S:0}
A.xu.prototype={
$0(){A.hI($.ju.j())},
$S:0}
A.xw.prototype={
$1(a){return A.C4()},
$S:2}
A.xx.prototype={
$1(a){if(A.q(A.b(v.G.document).visibilityState)==="hidden")A.HG()},
$S:1}
A.xy.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b(a)
if(A.q(l.code)==="CapsLock"&&!A.Q(l.repeat)){l.preventDefault()
p=$.eH()
o=!p.a
p.a=o
if(o)A.q9(A.b(v.G.document),"exitPointerLock",t.X)
else $.ah.j().dc($.v.j())
return}p=$.eH()
if(p.a&&!A.Q(l.repeat)){if(A.q(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.ah.j().dc($.v.j())
return}if(A.q(l.code)==="ArrowUp"||A.q(l.code)==="KeyW"){l.preventDefault()
n=p.gbo().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.eD
if(o!=null){p=p.gbo().length
o.a.dj(-1,p)}return}if(A.q(l.code)==="ArrowDown"||A.q(l.code)==="KeyS"){l.preventDefault()
n=p.gbo().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.eD
if(o!=null){p=p.gbo().length
o.a.dj(1,p)}return}if(A.q(l.code)==="ArrowLeft"||A.q(l.code)==="KeyA"){l.preventDefault()
p.mx()
return}if(A.q(l.code)==="ArrowRight"||A.q(l.code)==="KeyD"){l.preventDefault()
p.n5()
return}if(A.q(l.code)==="KeyQ"){l.preventDefault()
m=p.gbK()
p=m==null?null:m.Q===B.t
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.A(m.y-m.w*0.2,m.f,m.r)
return}if(A.q(l.code)==="KeyE"){l.preventDefault()
m=p.gbK()
p=m==null?null:m.Q===B.t
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.A(m.y+m.w*0.2,m.f,m.r)
return}if(A.q(l.code)==="KeyR"){l.preventDefault()
if(A.Q(l.shiftKey))p.o1()
else p.o3()
return}if(B.c.T(A.q(l.code),"Digit")||B.c.T(A.q(l.code),"Numpad")){o=A.q(l.code)
o=A.zo(o,"Digit","")
s=A.zo(o,"Numpad","")
r=A.dC(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.ax.j().y&&!A.Q(l.repeat))if($.cv().n1(A.q(l.code))){l.preventDefault()
return}if(A.q(l.code)==="Escape"&&!A.Q(l.repeat)){p=$.bd
if(p==null)A.jJ($.cs.j())
else p.ae()
return}q=$.bd==null&&!p.a
if(!A.Q(l.repeat)&&q)$.fu.j().hP(new A.lq(A.q(l.code),!0,1))
if(A.q(l.code)==="KeyP"&&!A.Q(l.repeat)&&$.D2())$.hJ=!$.hJ
if((A.q(l.code)==="KeyJ"||A.q(l.code)==="Tab")&&!A.Q(l.repeat)&&!$.ax.j().y){l.preventDefault()
A.jN($.jx.j())}if(A.q(l.code)==="KeyL"&&!A.Q(l.repeat)&&!$.ax.j().y)A.jN($.mX.j())
if(A.q(l.code)==="KeyH"&&!A.Q(l.repeat)&&!$.ax.j().y)A.jN($.jw.j())
if(A.q(l.code)==="KeyO"&&!A.Q(l.repeat)&&!$.ax.j().y)A.jN($.jz.j())
if(A.q(l.code)==="KeyK"&&!A.Q(l.repeat)&&q)A.jM("saved")},
$S:1}
A.xz.prototype={
$1(a){var s=A.b(a)
if($.bd==null)$.fu.j().hP(new A.lq(A.q(s.code),!1,0))},
$S:1}
A.xA.prototype={
$1(a){return A.Bw()},
$S:2}
A.xB.prototype={
$1(a){return A.Bw()},
$S:2}
A.xC.prototype={
$1(a){return A.H9(A.b(a))},
$S:2}
A.xD.prototype={
$1(a){var s=A.b(a)
if($.ax.j().y){s.preventDefault()
A.H8(s)
return}$.ah.j().dc($.v.j())},
$S:1}
A.xE.prototype={
$1(a){var s,r,q,p=A.b(a),o=$.eH()
if(!o.a||$.eD==null)return
p.preventDefault()
s=o.gbo()
r=A.a7(p.deltaY)>0?1:-1
o=$.eD
o.toString
q=J.cP(s)
o.a.dj(A.h(r),q)},
$S:1}
A.wy.prototype={
$1(a){var s=A.q(A.b(a).message)
A.wK(s,null)},
$S:1}
A.wz.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.wK("unhandled rejection: "+A.w(s==null?A.q(a.type):s),null)},
$S:1}
A.wG.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:46}
A.wQ.prototype={
$0(){this.a.className=""},
$S:14}
A.wW.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:41}
A.wC.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:26}
A.wM.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.wI.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:16}
A.wJ.prototype={
$1(a){return t.fW.a(a).w},
$S:24};(function aliases(){var s=J.ei.prototype
s.jb=s.q
s=A.n.prototype
s.ja=s.dg
s=A.iv.prototype
s.jc=s.bR})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff
s(J,"Hg","En",49)
r(J.u.prototype,"gaw","p",9)
q(A,"Hv","EK",33)
r(A.aY.prototype,"gaw","p",9)
r(A.fX.prototype,"gaw","p",9)
p(A.cl.prototype,"glT","L",9)
o(A,"Ip","FM",17)
o(A,"Iq","FN",17)
o(A,"Ir","FO",17)
q(A,"Cl","I4",0)
r(A.cq.prototype,"gaw","p",9)
r(A.ho.prototype,"gaw","p",9)
o(A,"IC","GR",15)
p(A.kZ.prototype,"go9","oa",104)
var m
p(m=A.lL.prototype,"go5","o6",11)
p(m,"goe","of",11)
p(m,"gog","oh",11)
p(m,"go7","o8",11)
p(m,"goc","od",11)
q(A,"Cq","FS",194)
q(A,"K7","yg",47)
p(A.dz.prototype,"gal","ik",65)
p(m=A.kM.prototype,"gkw","kx",2)
p(m,"gky","kz",2)
p(m,"gkC","kD",2)
p(m,"gkG","kH",2)
p(m,"gkI","kJ",2)
p(m,"gkE","kF",2)
p(m,"gkA","kB",2)
o(A,"IZ","BB",15)
o(A,"J2","BA",15)
o(A,"IS","Ek",195)
o(A,"IT","El",196)
o(A,"J6","Ee",197)
n(A,"Je",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["AU",function(){return A.AU(0,0,0)}],198,0)
p(A.iv.prototype,"gkK","kL",2)
p(A.hi.prototype,"gkj","kk",140)
p(A.lY.prototype,"gne","nf",29)
o(A,"Cz","HJ",199)
q(A,"Cy","GO",0)
o(A,"IW","GJ",133)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.J,null)
q(A.J,[A.y7,J.kO,A.iH,J.eL,A.n,A.hW,A.at,A.a0,A.t1,A.an,A.ik,A.T,A.i5,A.i2,A.iV,A.az,A.eo,A.bL,A.h5,A.fM,A.e8,A.dO,A.d5,A.u5,A.r3,A.i3,A.jg,A.aa,A.qt,A.bP,A.ae,A.cE,A.ie,A.mt,A.m9,A.iO,A.mL,A.uK,A.vv,A.cJ,A.mm,A.mO,A.vr,A.ma,A.cb,A.bf,A.me,A.dN,A.ar,A.mb,A.mJ,A.jr,A.j2,A.ms,A.fp,A.j5,A.jl,A.mP,A.e9,A.kf,A.v2,A.vz,A.vw,A.eQ,A.ea,A.mj,A.l9,A.iM,A.uL,A.A,A.O,A.av,A.mM,A.tR,A.bx,A.jn,A.u9,A.mG,A.r2,A.mp,A.ew,A.dY,A.lS,A.qM,A.l_,A.qX,A.qO,A.qR,A.f_,A.rE,A.en,A.lg,A.op,A.oq,A.os,A.or,A.lf,A.fI,A.kx,A.ky,A.dE,A.kI,A.c0,A.oN,A.le,A.bJ,A.cG,A.b7,A.iS,A.bQ,A.ki,A.r4,A.lh,A.ls,A.b9,A.lI,A.iE,A.aR,A.p5,A.d0,A.c2,A.qC,A.qA,A.kZ,A.lO,A.qI,A.hV,A.qL,A.qN,A.h7,A.lm,A.bU,A.c6,A.u0,A.tZ,A.dd,A.lL,A.hp,A.us,A.dx,A.kv,A.kw,A.kz,A.p4,A.hs,A.aB,A.bs,A.aS,A.R,A.hY,A.lk,A.bw,A.rG,A.bj,A.rI,A.rH,A.mo,A.iD,A.lr,A.uM,A.mN,A.vq,A.mz,A.ml,A.mD,A.mw,A.uY,A.bR,A.bN,A.b0,A.oI,A.oH,A.fC,A.f1,A.p6,A.dz,A.ln,A.hm,A.B,A.nB,A.fE,A.nA,A.hU,A.mc,A.k7,A.md,A.kk,A.mg,A.i0,A.mh,A.ko,A.mi,A.kH,A.mn,A.im,A.mu,A.fG,A.k8,A.yh,A.ix,A.mA,A.ll,A.mB,A.fb,A.lB,A.mE,A.lC,A.mF,A.lE,A.mI,A.lD,A.mH,A.lT,A.mQ,A.iF,A.m5,A.mT,A.on,A.kD,A.kF,A.i8,A.iJ,A.y,A.kl,A.h9,A.ps,A.ey,A.d3,A.fT,A.uC,A.dQ,A.jq,A.jp,A.mS,A.mR,A.vB,A.uy,A.uB,A.kn,A.k1,A.hv,A.nH,A.nm,A.hS,A.nD,A.y2,A.nP,A.nJ,A.iW,A.fH,A.ok,A.p3,A.kM,A.q1,A.q5,A.b4,A.qp,A.qm,A.oJ,A.qv,A.cp,A.j,A.lF,A.m6,A.od,A.kp,A.oT,A.fU,A.bA,A.ld,A.rx,A.hg,A.rV,A.f8,A.kB,A.pg,A.pf,A.k3,A.e_,A.e1,A.e3,A.e0,A.e2,A.k9,A.l0,A.cL,A.m7,A.ib,A.pK,A.a4,A.ks,A.kJ,A.pL,A.kt,A.dc,A.ku,A.ev,A.ed,A.rS,A.eu,A.pI,A.oX,A.tN,A.pN,A.cZ,A.cC,A.q8,A.q6,A.q7,A.dB,A.pR,A.fj,A.c4,A.kW,A.fc,A.f7,A.pU,A.cY,A.pJ,A.eW,A.pT,A.cX,A.pY,A.iw,A.ij,A.bt,A.ur,A.kV,A.bZ,A.qb,A.hT,A.oa,A.iy,A.rq,A.iz,A.li,A.rk,A.rj,A.rl,A.rm,A.rn,A.ro,A.ha,A.rp,A.rr,A.ru,A.rv,A.ii,A.rD,A.rQ,A.lq,A.rP,A.rR,A.tE,A.co,A.tG,A.hj,A.oK,A.uD,A.fk,A.kd,A.q_,A.q3,A.rT,A.d4,A.rU,A.kC,A.fh,A.uw,A.m2,A.hq,A.ut,A.uv,A.fi,A.fg,A.m1,A.hr,A.ux,A.pd,A.kA,A.qY,A.cS,A.bv,A.rh,A.tT,A.ff,A.fe,A.iU,A.m0,A.f5,A.d9,A.tS,A.hh,A.lx,A.lu,A.lv,A.lw,A.tW,A.jU,A.y1,A.dX,A.nw,A.nC,A.dZ,A.oc,A.bg,A.ol,A.fO,A.dl,A.ke,A.iv,A.oO,A.pm,A.po,A.fW,A.ee,A.pE,A.pv,A.pw,A.cg,A.pF,A.d2,A.fJ,A.r6,A.dA,A.ek,A.c3,A.rb,A.rB,A.ba,A.ty,A.tC,A.cx,A.nt,A.lY,A.uq,A.dL,A.by,A.c9,A.bW,A.m_,A.jW,A.lX,A.ht,A.my,A.mx,A.jb,A.uJ])
q(J.kO,[J.kQ,J.id,J.ig,J.h0,J.h1,J.h_,J.eh])
q(J.ig,[J.ei,J.u,A.ej,A.ir])
q(J.ei,[J.lc,J.fd,J.dy])
r(J.kP,A.iH)
r(J.qa,J.u)
q(J.h_,[J.ic,J.kR])
q(A.n,[A.et,A.S,A.cF,A.H,A.i4,A.dM,A.fo,A.m8,A.mK,A.bB])
q(A.et,[A.eP,A.js])
r(A.j0,A.eP)
r(A.iZ,A.js)
r(A.b5,A.iZ)
q(A.at,[A.h2,A.dJ,A.kS,A.lN,A.lt,A.mk,A.ih,A.jZ,A.cy,A.iQ,A.lM,A.hk,A.kc])
r(A.hn,A.a0)
r(A.dm,A.hn)
q(A.S,[A.Y,A.ab,A.am,A.M,A.fn,A.j4])
q(A.Y,[A.iP,A.G,A.bG,A.mr])
r(A.dn,A.cF)
q(A.bL,[A.ex,A.dP])
q(A.ex,[A.as,A.fs,A.jc])
q(A.dP,[A.aC,A.bb,A.jd,A.je])
r(A.hx,A.h5)
r(A.ep,A.hx)
r(A.hZ,A.ep)
q(A.e8,[A.kb,A.ka,A.lK,A.xe,A.xg,A.uG,A.uF,A.vF,A.pa,A.uW,A.uZ,A.qw,A.v0,A.xN,A.xO,A.x5,A.tD,A.qP,A.qU,A.qV,A.qT,A.wA,A.wT,A.wE,A.wR,A.rF,A.ue,A.qF,A.qG,A.qH,A.r5,A.qD,A.qE,A.qJ,A.x6,A.u1,A.u2,A.u4,A.p0,A.oZ,A.p_,A.r8,A.r9,A.rN,A.rM,A.rL,A.rK,A.rJ,A.rO,A.wn,A.wo,A.rX,A.rY,A.xU,A.xS,A.p7,A.qy,A.x2,A.pt,A.pu,A.uz,A.uA,A.nR,A.nU,A.nT,A.nV,A.nI,A.nn,A.no,A.np,A.nF,A.nG,A.nE,A.q2,A.qn,A.oW,A.ph,A.pj,A.pk,A.pl,A.nW,A.nX,A.nY,A.nZ,A.o_,A.o1,A.o2,A.o3,A.o4,A.o5,A.o6,A.o7,A.o0,A.x1,A.o8,A.o9,A.wF,A.wZ,A.oo,A.oY,A.pM,A.xV,A.ws,A.wr,A.vC,A.wP,A.pZ,A.tO,A.pQ,A.pO,A.wY,A.pV,A.pX,A.wX,A.oS,A.qs,A.qi,A.wO,A.rs,A.rt,A.rw,A.tF,A.tL,A.tH,A.tI,A.tK,A.tJ,A.oL,A.oM,A.pc,A.ri,A.t_,A.t0,A.tX,A.tY,A.nl,A.nj,A.nM,A.nN,A.of,A.oj,A.oi,A.oh,A.oB,A.oA,A.oC,A.oD,A.oE,A.oz,A.ou,A.ov,A.oG,A.oP,A.oQ,A.oR,A.oV,A.pn,A.pp,A.pq,A.pC,A.pz,A.pA,A.pB,A.py,A.px,A.pH,A.qd,A.qe,A.qf,A.rc,A.rd,A.re,A.tt,A.tu,A.tl,A.tm,A.tk,A.tn,A.t5,A.to,A.tp,A.tq,A.tj,A.tb,A.tc,A.td,A.te,A.tf,A.tg,A.th,A.ti,A.ta,A.t6,A.t7,A.t8,A.t9,A.ts,A.tr,A.tA,A.tQ,A.nv,A.uo,A.un,A.up,A.uj,A.um,A.uh,A.ug,A.x9,A.uf,A.nq,A.nr,A.ns,A.vk,A.vl,A.va,A.vi,A.vm,A.vn,A.vg,A.vb,A.vd,A.ve,A.v9,A.v5,A.v6,A.v7,A.vS,A.vT,A.w_,A.w0,A.w1,A.vV,A.vW,A.vX,A.vO,A.vK,A.vL,A.wv,A.ww,A.xi,A.xj,A.xm,A.xw,A.xx,A.xy,A.xz,A.xA,A.xB,A.xC,A.xD,A.xE,A.wy,A.wz,A.wG,A.wW,A.wM,A.wI,A.wJ])
q(A.kb,[A.ot,A.qj,A.xf,A.vG,A.x_,A.pb,A.uX,A.qu,A.qx,A.v3,A.ub,A.ua,A.qQ,A.qS,A.qW,A.xW,A.xX,A.xP,A.qB,A.qK,A.u_,A.u3,A.p1,A.rZ,A.xT,A.xR,A.nS,A.nK,A.nL,A.qo,A.pi,A.wS,A.pS,A.qr,A.tM,A.q4,A.pe,A.r_,A.r0,A.r1,A.tU,A.tV,A.om,A.qg,A.qh,A.nu,A.uk,A.ui,A.vj,A.vf,A.vc,A.v8,A.v4,A.vR,A.vZ,A.xo,A.xp,A.wC])
q(A.fM,[A.a2,A.cV])
q(A.d5,[A.fN,A.jf,A.jm])
q(A.fN,[A.aY,A.fX])
q(A.ka,[A.ry,A.uH,A.uI,A.vs,A.p8,A.uN,A.uS,A.uR,A.uP,A.uO,A.uV,A.uU,A.uT,A.vp,A.wN,A.vy,A.vx,A.wm,A.wf,A.wg,A.wl,A.wa,A.wc,A.wb,A.wk,A.w8,A.w9,A.wh,A.wi,A.wj,A.we,A.wd,A.wq,A.x3,A.pP,A.pW,A.wt,A.nk,A.ny,A.nx,A.nO,A.ox,A.oy,A.ow,A.pr,A.pD,A.rg,A.t3,A.t4,A.tv,A.tw,A.tx,A.tB,A.ul,A.vh,A.w2,A.w3,A.w4,A.w5,A.vU,A.vY,A.vP,A.vQ,A.vM,A.vN,A.wx,A.xk,A.xv,A.xF,A.xG,A.xH,A.xI,A.xJ,A.xK,A.xL,A.xl,A.xn,A.xq,A.xr,A.xs,A.xt,A.xu,A.wQ])
r(A.it,A.dJ)
q(A.lK,[A.lG,A.fF])
q(A.aa,[A.cl,A.j1,A.mq])
r(A.eX,A.cl)
r(A.h8,A.ej)
q(A.ir,[A.l1,A.bi])
q(A.bi,[A.j7,A.j9])
r(A.j8,A.j7)
r(A.ip,A.j8)
r(A.ja,A.j9)
r(A.iq,A.ja)
q(A.ip,[A.io,A.l2])
q(A.iq,[A.l3,A.l4,A.l5,A.l6,A.l7,A.f0,A.is])
r(A.hw,A.mk)
r(A.iX,A.me)
r(A.mC,A.jr)
r(A.j3,A.j1)
r(A.cq,A.jf)
r(A.ho,A.jm)
q(A.e9,[A.kq,A.k4,A.kT])
q(A.kq,[A.jX,A.lR])
q(A.kf,[A.vt,A.ob,A.ql,A.qk,A.ud,A.uc])
r(A.jY,A.vt)
r(A.kU,A.ih)
r(A.v1,A.v2)
q(A.cy,[A.hc,A.kL])
r(A.mf,A.jn)
q(A.mj,[A.km,A.f3,A.fQ,A.fL,A.eV,A.fD,A.il,A.cK,A.hf,A.fS,A.k6,A.hX,A.fR,A.f6,A.eZ,A.cI,A.dI,A.eS,A.ck,A.iG,A.cW,A.he,A.iL,A.fV,A.k0,A.iY,A.j_,A.kE,A.i6,A.i9,A.kG,A.eU,A.i7,A.fa,A.d7,A.fK,A.fY,A.hu,A.k5,A.eO,A.kg,A.kj,A.bk,A.k2,A.ci,A.dq,A.eR,A.dp,A.ec,A.eb,A.ef,A.lb,A.lp,A.hd,A.lA,A.iK,A.dH,A.bT,A.bI,A.kN,A.fl,A.cn,A.em,A.es,A.eM,A.cQ,A.cz,A.cR,A.dk,A.dj,A.e5,A.e6,A.e4,A.eN,A.dt,A.cT,A.cU,A.du,A.ds,A.dv,A.cj,A.dr,A.cA,A.jV,A.bu,A.cm,A.el,A.cH,A.bS,A.bH,A.iI,A.bO,A.c7,A.c8,A.er,A.d8])
q(A.dE,[A.bE,A.bl,A.c1,A.la,A.cB])
r(A.rW,A.mD)
r(A.m3,A.mR)
r(A.j6,A.dc)
q(A.iv,[A.i_,A.oF,A.oU,A.ia,A.pG,A.qc,A.rf,A.t2,A.hi,A.tP])
q(A.uq,[A.lZ,A.mv,A.bn,A.lW,A.lU,A.iT,A.lV])
s(A.hn,A.eo)
s(A.js,A.a0)
s(A.j7,A.a0)
s(A.j8,A.az)
s(A.j9,A.a0)
s(A.ja,A.az)
s(A.hx,A.jl)
s(A.jm,A.mP)
s(A.mD,A.uY)
s(A.mR,A.vB)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",C:"double",br:"num",e:"String",l:"bool",av:"Null",K:"List",J:"Object",U:"Map",aj:"JSObject"},mangledNames:{},types:["~()","av(J?)","~(J?)","l(e)","l(C)","dw()","l(@)","0&()","l(co)","l(J?)","~(l)","dw(bl?)","l(aB)","i(bZ,bZ)","av()","@(@)","l(f5)","~(~())","l(R)","~(@)","l(b7)","l(i)","av(@)","l(bZ)","l(fj)","e(dY)","i(O<e,e>,O<e,e>)","e(e)","l(ba)","l(bW)","~(aj)","@(e)","~(e,e)","i()","O<e,e>(@,@)","e(J?)","e(e_)","e(e1)","~(e,C)","@()","i(b4)","l(bv)","l(cQ)","l(O<e,K<e>>)","l(ev)","l(cA)","l(cj)","l()","e(c6)","i(@,@)","~(J?,J?)","fb()","bJ?()","K<bJ>()","fI()","C()","fG()","l(O<e,aR>)","aR(O<e,aR>)","aR(aR,aR)","i(b0<bR>,b0<bR>)","c5(b0<bR>)","i(b0<bN>,b0<bN>)","c5(b0<bN>)","f1(C,C,C,C)","B(B)","~(fb)","~(i,@)","~(J,d6)","C(C,hv)","aQ<av>(O<e,e>)","l(K<e>)","i(e,e)","i(c4,c4)","U<e,@>(f_)","+effectiveScore,light,score(C,b4,C)(b4)","i(+effectiveScore,light,score(C,b4,C),+effectiveScore,light,score(C,b4,C))","l(ci)","av(J,d6)","~(@,@)","av(~())","l(f7)","e_(J?)","e1(J?)","e0(J?)","e2(J?)","@(@,e)","i(+influence,light(C,bJ),+influence,light(C,bJ))","U<e,e>(U<e,e>,e)","e(e0)","e(e2)","e(e3)","l(c2)","ec(e)","e3(J?)","l(fc)","e(i,a4,a4,a4)","i(dc,dc)","0&(e,i?)","l(eu)","i(i)","l(c4)","l(cC)","l(cZ)","cG(c1)","i(dB,dB)","l(cY)","O<e,e>(e,@)","e?(e)","aQ<bV>(e)","c1(i,i,e?)","i(co,co)","l(bT)","l(bI)","fh()","bE(i,i,e?)","i(i,+(bE,bQ))","i(O<e,cS>,O<e,cS>)","l(c6)","O<i,@>(i,ff)","O<i,@>(i,fe)","i(bU,bU)","l(O<@,@>)","O<e,e>(O<@,@>)","l?(J?)","J?(J?)","e()","0^(n<0^>,J?)<J?>","C(C,e)","bl(i,i,e?)","K<e>(K<e>)","~(C)","l(bV?)","~(i)","av(aj)","0^(e,n<0^>)<D>","i(i,+(bl,dd))","U<e,J?>(dA)","e(bu)","l(bu)","l(bH)","e(aB)","l(dt)","l(cT)","l(cU)","l(du)","l(ds)","l(dv)","l(dr)","i(af,af)","l(cz)","l(cR)","l(dk)","l(dj)","e(cx)","i(cx,cx)","e(i)","i(bW,bW)","K<d9>()","l(d9)","l(O<e,e>)","i(c9,c9)","U<e,@>(bW)","l(c8)","l(c7)","l(bO)","av(@,d6)","c1(i)","h7(ha)","l(U<e,J>)","aQ<e>(e)","aQ<bV>(e,e)","~(e,n<e>)","l(fE)","bU(O<e,bl>)","i(c6,c6)","cB(i,i,e?)","i(c2,c2)","e(c2)","i(O<i,e>,O<i,e>)","iF(bE)","e(O<i,e>)","dw(e{fallback:e?})","~(bH)","~(dZ)","~(fW)","~(dX)","~(ee)","~(fO)","l(hg)","~(bS)","~(i,e)","~(bT,bI)","i(i,bV)","hs()","cZ(J?)","cC(J?)","cY(J?)","hr({materialDissolution01:C,snowDepthM:C,waterFilmDepthM:C})","~(br)","i(d0,d0)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.as&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fs&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jc&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aC&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bb&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jd&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.je&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.G8(v.typeUniverse,JSON.parse('{"dy":"ei","lc":"ei","fd":"ei","Jq":"ej","u":{"K":["1"],"S":["1"],"aj":[],"n":["1"]},"kQ":{"l":[],"ak":[]},"id":{"av":[],"ak":[]},"ig":{"aj":[]},"ei":{"aj":[]},"kP":{"iH":[]},"qa":{"u":["1"],"K":["1"],"S":["1"],"aj":[],"n":["1"]},"eL":{"ad":["1"]},"h_":{"C":[],"br":[],"bh":["br"]},"ic":{"C":[],"i":[],"br":[],"bh":["br"],"ak":[]},"kR":{"C":[],"br":[],"bh":["br"],"ak":[]},"eh":{"e":[],"bh":["e"],"ra":[],"ak":[]},"et":{"n":["2"]},"hW":{"ad":["2"]},"eP":{"et":["1","2"],"n":["2"],"n.E":"2"},"j0":{"eP":["1","2"],"et":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"iZ":{"a0":["2"],"K":["2"],"et":["1","2"],"S":["2"],"n":["2"]},"b5":{"iZ":["1","2"],"a0":["2"],"K":["2"],"et":["1","2"],"S":["2"],"n":["2"],"n.E":"2","a0.E":"2"},"h2":{"at":[]},"dm":{"a0":["i"],"eo":["i"],"K":["i"],"S":["i"],"n":["i"],"a0.E":"i","eo.E":"i"},"S":{"n":["1"]},"Y":{"S":["1"],"n":["1"]},"iP":{"Y":["1"],"S":["1"],"n":["1"],"n.E":"1","Y.E":"1"},"an":{"ad":["1"]},"cF":{"n":["2"],"n.E":"2"},"dn":{"cF":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"ik":{"ad":["2"]},"G":{"Y":["2"],"S":["2"],"n":["2"],"n.E":"2","Y.E":"2"},"H":{"n":["1"],"n.E":"1"},"T":{"ad":["1"]},"i4":{"n":["2"],"n.E":"2"},"i5":{"ad":["2"]},"i2":{"ad":["1"]},"dM":{"n":["1"],"n.E":"1"},"iV":{"ad":["1"]},"hn":{"a0":["1"],"eo":["1"],"K":["1"],"S":["1"],"n":["1"]},"bG":{"Y":["1"],"S":["1"],"n":["1"],"n.E":"1","Y.E":"1"},"as":{"ex":[],"bL":[]},"fs":{"ex":[],"bL":[]},"jc":{"ex":[],"bL":[]},"aC":{"dP":[],"bL":[]},"bb":{"dP":[],"bL":[]},"jd":{"dP":[],"bL":[]},"je":{"dP":[],"bL":[]},"hZ":{"ep":["1","2"],"hx":["1","2"],"h5":["1","2"],"jl":["1","2"],"U":["1","2"]},"fM":{"U":["1","2"]},"a2":{"fM":["1","2"],"U":["1","2"]},"fo":{"n":["1"],"n.E":"1"},"dO":{"ad":["1"]},"cV":{"fM":["1","2"],"U":["1","2"]},"fN":{"d5":["1"],"dF":["1"],"S":["1"],"n":["1"]},"aY":{"fN":["1"],"d5":["1"],"dF":["1"],"S":["1"],"n":["1"]},"fX":{"fN":["1"],"d5":["1"],"dF":["1"],"S":["1"],"n":["1"]},"it":{"dJ":[],"at":[]},"kS":{"at":[]},"lN":{"at":[]},"jg":{"d6":[]},"e8":{"eT":[]},"ka":{"eT":[]},"kb":{"eT":[]},"lK":{"eT":[]},"lG":{"eT":[]},"fF":{"eT":[]},"lt":{"at":[]},"cl":{"aa":["1","2"],"y9":["1","2"],"U":["1","2"],"aa.K":"1","aa.V":"2"},"ab":{"S":["1"],"n":["1"],"n.E":"1"},"bP":{"ad":["1"]},"am":{"S":["1"],"n":["1"],"n.E":"1"},"ae":{"ad":["1"]},"M":{"S":["O<1,2>"],"n":["O<1,2>"],"n.E":"O<1,2>"},"cE":{"ad":["O<1,2>"]},"eX":{"cl":["1","2"],"aa":["1","2"],"y9":["1","2"],"U":["1","2"],"aa.K":"1","aa.V":"2"},"ex":{"bL":[]},"dP":{"bL":[]},"ie":{"EU":[],"ra":[]},"mt":{"iB":[],"h6":[]},"m8":{"n":["iB"],"n.E":"iB"},"m9":{"ad":["iB"]},"iO":{"h6":[]},"mK":{"n":["h6"],"n.E":"h6"},"mL":{"ad":["h6"]},"h8":{"ej":[],"aj":[],"ak":[]},"f0":{"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"ej":{"aj":[],"ak":[]},"ir":{"aj":[]},"l1":{"aj":[],"ak":[]},"bi":{"c_":["1"],"aj":[]},"ip":{"a0":["C"],"bi":["C"],"K":["C"],"c_":["C"],"S":["C"],"aj":[],"n":["C"],"az":["C"]},"iq":{"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"]},"io":{"p2":[],"a0":["C"],"bi":["C"],"K":["C"],"c_":["C"],"S":["C"],"aj":[],"n":["C"],"az":["C"],"ak":[],"a0.E":"C","az.E":"C"},"l2":{"a0":["C"],"bi":["C"],"K":["C"],"c_":["C"],"S":["C"],"aj":[],"n":["C"],"az":["C"],"ak":[],"a0.E":"C","az.E":"C"},"l3":{"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"l4":{"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"l5":{"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"l6":{"u7":[],"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"l7":{"u8":[],"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"is":{"bV":[],"a0":["i"],"bi":["i"],"K":["i"],"c_":["i"],"S":["i"],"aj":[],"n":["i"],"az":["i"],"ak":[],"a0.E":"i","az.E":"i"},"mk":{"at":[]},"hw":{"dJ":[],"at":[]},"cb":{"ad":["1"]},"bB":{"n":["1"],"n.E":"1"},"bf":{"at":[]},"iX":{"me":["1"]},"ar":{"aQ":["1"]},"jr":{"B1":[]},"mC":{"jr":[],"B1":[]},"j1":{"aa":["1","2"],"U":["1","2"]},"j3":{"j1":["1","2"],"aa":["1","2"],"U":["1","2"],"aa.K":"1","aa.V":"2"},"fn":{"S":["1"],"n":["1"],"n.E":"1"},"j2":{"ad":["1"]},"cq":{"d5":["1"],"Af":["1"],"dF":["1"],"S":["1"],"n":["1"]},"fp":{"ad":["1"]},"a0":{"K":["1"],"S":["1"],"n":["1"]},"aa":{"U":["1","2"]},"j4":{"S":["2"],"n":["2"],"n.E":"2"},"j5":{"ad":["2"]},"h5":{"U":["1","2"]},"ep":{"hx":["1","2"],"h5":["1","2"],"jl":["1","2"],"U":["1","2"]},"d5":{"dF":["1"],"S":["1"],"n":["1"]},"jf":{"d5":["1"],"dF":["1"],"S":["1"],"n":["1"]},"ho":{"d5":["1"],"mP":["1"],"dF":["1"],"S":["1"],"n":["1"]},"mq":{"aa":["e","@"],"U":["e","@"],"aa.K":"e","aa.V":"@"},"mr":{"Y":["e"],"S":["e"],"n":["e"],"n.E":"e","Y.E":"e"},"jX":{"e9":["e","K<i>"]},"k4":{"e9":["K<i>","e"]},"kq":{"e9":["e","K<i>"]},"ih":{"at":[]},"kU":{"at":[]},"kT":{"e9":["J?","e"]},"lR":{"e9":["e","K<i>"]},"eQ":{"bh":["eQ"]},"C":{"br":[],"bh":["br"]},"ea":{"bh":["ea"]},"i":{"br":[],"bh":["br"]},"K":{"S":["1"],"n":["1"]},"br":{"bh":["br"]},"iB":{"h6":[]},"dF":{"S":["1"],"n":["1"]},"e":{"bh":["e"],"ra":[]},"mj":{"D":[]},"jZ":{"at":[]},"dJ":{"at":[]},"cy":{"at":[]},"hc":{"at":[]},"kL":{"at":[]},"iQ":{"at":[]},"lM":{"at":[]},"hk":{"at":[]},"kc":{"at":[]},"l9":{"at":[]},"iM":{"at":[]},"mM":{"d6":[]},"bx":{"Fc":[]},"jn":{"lP":[]},"mG":{"lP":[]},"mf":{"lP":[]},"mp":{"yi":[]},"ew":{"yi":[]},"km":{"D":[]},"f3":{"D":[]},"fQ":{"D":[]},"fL":{"D":[]},"bE":{"dE":[]},"bl":{"dE":[]},"c1":{"dE":[]},"cB":{"dE":[]},"la":{"dE":[]},"eV":{"D":[]},"fD":{"D":[]},"il":{"D":[]},"cK":{"D":[]},"ki":{"F1":[]},"hf":{"D":[]},"fS":{"D":[]},"k6":{"D":[]},"hX":{"D":[]},"fR":{"D":[]},"f6":{"D":[]},"eZ":{"D":[]},"cI":{"D":[]},"dI":{"D":[]},"eS":{"D":[]},"kz":{"EV":[]},"ck":{"D":[]},"iG":{"D":[]},"cW":{"D":[]},"he":{"D":[]},"iD":{"EY":[]},"mo":{"c5":[]},"lr":{"F_":[]},"mN":{"c5":[]},"mz":{"EX":[]},"ml":{"E3":[]},"iL":{"D":[]},"bR":{"bh":["bR"]},"bN":{"bh":["bN"]},"fV":{"D":[]},"k0":{"D":[]},"iY":{"D":[]},"hU":{"ap":[]},"mc":{"af":[]},"k7":{"ap":[]},"md":{"af":[]},"kk":{"ap":[]},"mg":{"af":[]},"j_":{"D":[]},"i0":{"ap":[]},"mh":{"af":[]},"ko":{"ap":[]},"mi":{"af":[]},"kH":{"ap":[]},"mn":{"af":[]},"im":{"ap":[]},"mu":{"af":[]},"k8":{"EW":[]},"ix":{"ap":[]},"mA":{"af":[]},"ll":{"ap":[]},"mB":{"af":[]},"lB":{"ap":[]},"mE":{"af":[]},"lC":{"ap":[]},"mF":{"af":[]},"lE":{"ap":[]},"mI":{"af":[]},"lD":{"ap":[]},"mH":{"af":[]},"lT":{"ap":[]},"mQ":{"af":[]},"m5":{"ap":[]},"mT":{"af":[]},"kE":{"D":[]},"i6":{"D":[]},"i9":{"D":[]},"kG":{"D":[]},"eU":{"D":[]},"i7":{"D":[]},"fa":{"D":[]},"d7":{"D":[]},"fK":{"D":[]},"kl":{"DN":[]},"fY":{"D":[]},"hu":{"D":[]},"bk":{"D":[]},"k5":{"D":[]},"eO":{"D":[]},"kg":{"D":[]},"kj":{"D":[]},"dQ":{"dw":[]},"m3":{"Ea":[]},"k2":{"D":[]},"ci":{"D":[]},"dq":{"D":[]},"j6":{"dc":[]},"eR":{"D":[]},"dp":{"D":[]},"ec":{"D":[]},"eb":{"D":[]},"ef":{"D":[]},"lb":{"D":[]},"lp":{"D":[]},"hd":{"D":[]},"dH":{"D":[]},"lA":{"D":[]},"iK":{"D":[]},"bT":{"D":[]},"bI":{"D":[]},"kN":{"D":[]},"fl":{"D":[]},"cn":{"D":[]},"em":{"D":[]},"es":{"D":[]},"eM":{"D":[]},"cQ":{"D":[]},"cz":{"D":[]},"cR":{"D":[]},"dk":{"D":[]},"dj":{"D":[]},"e5":{"D":[]},"e6":{"D":[]},"eN":{"D":[]},"e4":{"D":[]},"dt":{"D":[]},"cT":{"D":[]},"cU":{"D":[]},"du":{"D":[]},"ds":{"D":[]},"dv":{"D":[]},"cj":{"D":[]},"dr":{"D":[]},"cA":{"D":[]},"jV":{"D":[]},"bu":{"D":[]},"cm":{"D":[]},"el":{"D":[]},"cH":{"D":[]},"bS":{"D":[]},"bH":{"D":[]},"iI":{"D":[]},"bO":{"D":[]},"c7":{"D":[]},"c8":{"D":[]},"er":{"D":[]},"d8":{"D":[]},"my":{"Ay":[]},"Ej":{"K":["i"],"S":["i"],"n":["i"]},"bV":{"K":["i"],"S":["i"],"n":["i"]},"Fg":{"K":["i"],"S":["i"],"n":["i"]},"Eh":{"K":["i"],"S":["i"],"n":["i"]},"u7":{"K":["i"],"S":["i"],"n":["i"]},"Ei":{"K":["i"],"S":["i"],"n":["i"]},"u8":{"K":["i"],"S":["i"],"n":["i"]},"p2":{"K":["C"],"S":["C"],"n":["C"]},"E2":{"K":["C"],"S":["C"],"n":["C"]}}'))
A.G7(v.typeUniverse,JSON.parse('{"hn":1,"js":2,"bi":1,"jf":1,"jm":1,"kf":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",p:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a_
return{mq:s("cQ"),dx:s("hS"),bC:s("cx"),zU:s("dY"),v:s("bf"),iF:s("k1"),ul:s("dj"),EL:s("cR"),xs:s("cz"),gc:s("dk"),t3:s("k3"),mD:s("e_"),lT:s("e0"),bJ:s("e1"),gI:s("e2"),ya:s("e3"),z3:s("bN"),Bu:s("fG"),ml:s("hV"),J:s("b4"),rO:s("fJ"),E:s("dm"),hO:s("bh<@>"),CH:s("hY"),p:s("a2<e,e>"),I:s("a2<e,i>"),M:s("aY<e>"),f7:s("eQ"),fP:s("bO"),yb:s("ea"),he:s("S<@>"),yW:s("ci"),g:s("bZ"),D:s("D"),yt:s("at"),hl:s("a4"),B:s("p2"),pH:s("aR"),Fr:s("cS"),BO:s("eT"),ls:s("aQ<av>"),xJ:s("aQ<e>(e)"),zL:s("aQ<bV>(e)"),tX:s("aQ<bV>(e,e)"),vS:s("dr"),aJ:s("ds"),x:s("cj"),bK:s("dt"),gm:s("du"),dn:s("cT"),mx:s("dv"),j_:s("cU"),EJ:s("cV<bS,e>"),_:s("dw"),Eb:s("cA"),qX:s("ef"),mF:s("cY"),iO:s("cB"),oW:s("cZ"),fl:s("cC"),FA:s("n<hY>"),CB:s("n<d0>"),yT:s("n<e>"),x6:s("n<bU>"),A1:s("n<fg>"),oJ:s("n<C>"),tY:s("n<@>"),iC:s("n<i>"),Fg:s("u<cx>"),t9:s("u<dY>"),AO:s("u<hV>"),jC:s("u<b4>"),km:s("u<fJ>"),sa:s("u<cg>"),ns:s("u<kp>"),U:s("u<bZ>"),uH:s("u<kt>"),Dl:s("u<a4>"),iJ:s("u<aQ<~>>"),pC:s("u<kB>"),C1:s("u<dw>"),ka:s("u<bs>"),Fm:s("u<eW>"),op:s("u<cX>"),hr:s("u<dx>"),s3:s("u<cB>"),sL:s("u<aj>"),Bv:s("u<kV>"),yH:s("u<kW>"),Bq:s("u<O<e,e>>"),rq:s("u<U<e,J>>"),A7:s("u<U<e,e>>"),cs:s("u<U<e,@>>"),bk:s("u<U<e,J?>>"),a6:s("u<d0>"),p0:s("u<c2>"),d:s("u<bE>"),w4:s("u<f_>"),pq:s("u<aB>"),bA:s("u<dA>"),xz:s("u<bv>"),s0:s("u<f1>"),hc:s("u<d2>"),ea:s("u<dB>"),Fk:s("u<le>"),qP:s("u<c4>"),d8:s("u<iy>"),Fa:s("u<iz>"),kv:s("u<f5>"),nR:s("u<+(e,K<c4>)>"),kd:s("u<+(e,e)>"),c2:s("u<+(e,B)>"),rh:s("u<+influence,light(C,bJ)>"),wt:s("u<+(i,e)>"),e_:s("u<ap>"),u:s("u<af>"),Ft:s("u<iD>"),C:s("u<R>"),h1:s("u<b9>"),s2:s("u<c5>"),eY:s("u<f7>"),xB:s("u<d4>"),rn:s("u<lu>"),gg:s("u<lv>"),tS:s("u<hh>"),yv:s("u<lw>"),wM:s("u<lx>"),hT:s("u<co>"),El:s("u<hj>"),AM:s("u<b0<bN>>"),fs:s("u<b0<bR>>"),cv:s("u<bJ>"),DZ:s("u<fc>"),s:s("u<e>"),r8:s("u<bU>"),fa:s("u<c6>"),k:s("u<B>"),fi:s("u<j>"),v5:s("u<b7>"),ld:s("u<iU>"),Dc:s("u<dL>"),Fi:s("u<c9>"),jV:s("u<d9>"),xL:s("u<hp>"),su:s("u<hq>"),uI:s("u<fg>"),yo:s("u<fh>"),nm:s("u<fj>"),uk:s("u<bA>"),wf:s("u<j6>"),il:s("u<ev>"),l5:s("u<eu>"),ow:s("u<mw>"),j5:s("u<mx>"),pv:s("u<ht>"),Fy:s("u<ey<cG>>"),EM:s("u<ey<bQ>>"),w_:s("u<ey<b9>>"),f2:s("u<ey<dd>>"),n:s("u<C>"),zz:s("u<@>"),t:s("u<i>"),Cf:s("u<J?>"),AN:s("u<br>"),w:s("id"),m:s("aj"),ud:s("dy"),Eh:s("c_<@>"),AQ:s("K<b4>"),hk:s("K<bZ>"),b:s("K<bs>"),xp:s("K<cB>"),nx:s("K<aj>"),rW:s("K<U<e,e>>"),qr:s("K<bE>"),R:s("K<aB>"),fG:s("K<d2>"),Es:s("K<c4>"),DX:s("K<+(e,e)>"),pL:s("K<+(i,e)>"),bE:s("K<b9>"),fx:s("K<d4>"),yu:s("K<co>"),a:s("K<e>"),uh:s("K<iU>"),D0:s("K<dL>"),cf:s("K<c9>"),p7:s("K<d9>"),dd:s("K<C>"),j:s("K<@>"),L:s("K<i>"),ik:s("K<aj?>"),vX:s("K<J?>"),m2:s("ij"),h6:s("O<e,aR>"),gJ:s("O<e,cS>"),q:s("O<e,e>"),no:s("O<e,bl>"),AC:s("O<@,@>"),ou:s("O<i,e>"),pr:s("O<i,@>"),yx:s("O<e,K<e>>"),mf:s("U<e,dw>"),vD:s("U<e,c1>"),of:s("U<e,J>"),ap:s("U<e,aB>"),G:s("U<e,e>"),qH:s("U<e,dI>"),m0:s("U<e,l>"),gG:s("U<e,C>"),P:s("U<e,@>"),f:s("U<@,@>"),eU:s("U<i,e>"),pG:s("U<i,fe>"),tQ:s("U<i,ff>"),Bx:s("U<e,K<e>>"),oZ:s("U<e,J?>"),q1:s("U<c8,K<c9>>"),ee:s("U<i,U<e,e>>"),dH:s("G<i,e>"),jT:s("G<e,e?>"),w1:s("cG"),pw:s("c1"),jt:s("d0"),wl:s("c2"),kc:s("bE"),aw:s("f_"),mL:s("h7"),rV:s("h8"),mV:s("f0"),c:s("av"),K:s("J"),fH:s("J(ha)"),BB:s("bR"),A:s("aB"),oP:s("dA"),wJ:s("bu"),E4:s("bv"),A_:s("dB"),W:s("c4"),DL:s("iw"),AB:s("lg"),yi:s("h9"),rx:s("iy"),c_:s("iz"),zC:s("li"),xK:s("en"),Y:s("f5"),iM:s("Jr"),ep:s("+()"),k0:s("+(bE,bQ)"),ut:s("+(bl,dd)"),rf:s("+(C,C)"),mn:s("+influence,light(C,bJ)"),tK:s("+effectiveScore,light,score(C,b4,C)"),ez:s("iB"),wZ:s("af"),lg:s("iE"),tc:s("d3<cB,b9>"),ja:s("d3<c1,cG>"),wm:s("d3<bE,bQ>"),qq:s("d3<bl,dd>"),j2:s("R"),m3:s("b9"),yz:s("c5"),z_:s("f7"),F3:s("d4"),Dm:s("hh"),Q:s("dF<e>"),oG:s("dF<i>"),en:s("bH"),gl:s("ba"),r:s("co"),u5:s("bI"),bG:s("bT"),ho:s("hj"),EH:s("b0<bN>"),E0:s("b0<bR>"),l:s("d6"),w8:s("fc"),qL:s("bk"),N:s("e"),dc:s("e(i)"),Aj:s("bl"),jP:s("bU"),e:s("c6"),bp:s("dI"),sg:s("ak"),bs:s("dJ"),ys:s("u7"),Dd:s("u8"),uo:s("bV"),qF:s("fd"),hL:s("ep<e,e>"),qt:s("lO"),eP:s("lP"),zo:s("lS"),cV:s("B"),a7:s("j"),qY:s("b7"),T:s("bW"),gM:s("c7"),hF:s("c8"),vw:s("fe"),BX:s("ff"),aA:s("dL"),AP:s("c9"),sy:s("m0"),bB:s("bn"),aS:s("d9"),cZ:s("hq"),qR:s("fg"),fu:s("fh"),fw:s("H<bO>"),vL:s("H<ci>"),vK:s("H<cj>"),Fj:s("H<bI>"),rZ:s("H<bT>"),vY:s("H<e>"),g2:s("H<c7>"),cE:s("H<c8>"),rt:s("T<bH>"),xG:s("T<ba>"),fW:s("fj"),hR:s("ar<@>"),BT:s("j3<J?,J?>"),Ez:s("dc"),rL:s("hs"),xT:s("ev"),wU:s("eu"),la:s("mv"),qS:s("jb"),jS:s("hv"),EF:s("bB<+(e,bl)>"),Br:s("bB<c5>"),oe:s("bB<hh>"),V:s("jp"),h:s("jq"),y:s("l"),Bs:s("l()"),C3:s("l(fE)"),kr:s("l(bO)"),e2:s("l(ci)"),rg:s("l(cj)"),bl:s("l(J)"),pz:s("l(bH)"),aV:s("l(ba)"),y2:s("l(bI)"),ty:s("l(bT)"),Ag:s("l(e)"),da:s("l(c7)"),u_:s("l(c8)"),i:s("C"),z:s("@"),pF:s("@()"),h_:s("@(J)"),nW:s("@(J,d6)"),S:s("i"),eZ:s("aQ<av>?"),r9:s("u<J?>?"),gt:s("aj?"),rK:s("K<@>?"),yq:s("U<@,@>?"),jd:s("U<e,K<e>>?"),X:s("J?"),dM:s("Ay?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("bV?"),F:s("dN<@,@>?"),Af:s("ms?"),k7:s("l?"),wK:s("l(hg)?"),u6:s("C?"),lo:s("i?"),s7:s("br?"),Z:s("~()?"),Cv:s("~(dX)?"),kC:s("~(dZ)?"),pf:s("~(fO)?"),hq:s("~(fW)?"),CA:s("~(ee)?"),hQ:s("~(bS)?"),Ci:s("~(bH)?"),nf:s("~(bT,bI)?"),DI:s("~(e,C)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),o:s("br"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.je=J.kO.prototype
B.a=J.u.prototype
B.d=J.ic.prototype
B.b=J.h_.prototype
B.c=J.eh.prototype
B.jf=J.dy.prototype
B.jg=J.ig.prototype
B.q=A.io.prototype
B.R=A.is.prototype
B.dF=J.lc.prototype
B.c_=J.fd.prototype
B.ac=new A.cQ(1,"standard")
B.M=new A.jU(B.ac)
B.c8=new A.cQ(0,"concise")
B.c9=new A.cQ(2,"verbose")
B.av=new A.dX(null,null,null,null,null)
B.oB=new A.jV(0,"none")
B.eo=new A.fD(0,"opaque")
B.aW=new A.fD(1,"masked")
B.ep=new A.jY(!1,127)
B.eq=new A.jY(!0,127)
B.er=new A.k0(1,"camera")
B.es=new A.k2(4,"ambience")
B.cd=new A.cz(3,"mono")
B.aY=new A.dk(0,"full")
B.cc=new A.cz(0,"auto")
B.cb=new A.cR(1,"standard")
B.ca=new A.dj(0,"defaultMix")
B.aZ=new A.dZ(B.cc,B.cb,B.aY,B.ca)
B.ez=new A.eM(0,"broadcast")
B.eA=new A.eM(1,"visitor")
B.eB=new A.eM(2,"aftermath")
B.eC=new A.eM(3,"ending")
B.aO=new A.lp(0,"pixeldart")
B.eD=new A.hT(B.aO,!0,!1,null,!1,null)
B.eE=new A.hT(B.aO,!1,!1,null,!1,null)
B.cf=new A.e4(1,"capturing")
B.eF=new A.dl(B.cf,null)
B.cg=new A.e4(3,"rejected")
B.b_=new A.dl(B.cg,null)
B.ch=new A.e4(4,"applied")
B.ce=new A.dl(B.ch,null)
B.ci=new A.e4(5,"cancelled")
B.eG=new A.dl(B.ci,null)
B.b0=new A.e4(2,"conflict")
B.aw=new A.k5(0,"add")
B.eK=new A.eO(0,"zero")
B.ad=new A.eO(1,"one")
B.N=new A.k6(0,"alpha")
B.H=new A.e5(1,"button")
B.n=new A.e6(0,"normal")
B.eN=new A.bg("settings.back",B.H,"back","back to pause menu",B.n)
B.ax=new A.e5(0,"heading")
B.eO=new A.bg("settings.heading",B.ax,"Settings",null,B.n)
B.eP=new A.bg("settings.controls.heading",B.ax,"Controls",null,B.n)
B.eQ=new A.bg("settings.controls.back",B.H,"back","back to settings categories",B.n)
B.eR=new A.bg("pause.heading",B.ax,"Paused",null,B.n)
B.eS=new A.e5(3,"slider")
B.eT=new A.e5(4,"toggle")
B.cj=new A.e5(5,"keybind")
B.ay=new A.e6(5,"disabled")
B.eU=new A.e6(6,"error")
B.eV=new A.e6(7,"destructive")
B.ck=new A.e6(8,"remapping")
B.cl=new A.hS()
B.eW=new A.jX()
B.oC=new A.ob()
B.eX=new A.k4()
B.cm=new A.on()
B.eY=new A.i2(A.a_("i2<0&>"))
B.cn=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eZ=function() {
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
B.f3=function(getTagFallback) {
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
B.f_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.f2=function(hooks) {
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
B.f1=function(hooks) {
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
B.f0=function(hooks) {
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
B.co=function(hooks) { return hooks; }

B.f=new A.kT()
B.f4=new A.qO()
B.f5=new A.l9()
B.oE=new A.rk()
B.f6=new A.rl()
B.cp=new A.rn()
B.f7=new A.rr()
B.f8=new A.rv()
B.f9=new A.d4()
B.aP=new A.cn(1,"gradeLUT")
B.fa=new A.d4()
B.fb=new A.rT()
B.fc=new A.rV()
B.h=new A.t1()
B.cq=new A.lR()
B.cr=new A.ud()
B.oD=new A.ki()
B.fd=new A.uB()
B.b1=new A.mp()
B.y=new A.mC()
B.az=new A.mM()
B.fe=new A.fH(1.3089969389957472,0.1,60)
B.ff=new A.fH(1.0471975511965976,0.1,60)
B.fg=new A.fH(0.8726646259971648,0.08,45)
B.Y=new A.fK(0,"colorOnly")
B.cs=new A.fK(1,"colorAndDepth")
B.b2=new A.fK(2,"depthOnly")
B.fh=new A.hX(0,"linear")
B.b3=new A.hX(1,"srgb")
B.ct=new A.fL(0,"open")
B.fi=new A.fL(1,"committed")
B.fj=new A.fL(2,"aborted")
B.b4=new A.fQ(0,"open")
B.fq=new A.fQ(1,"committed")
B.fr=new A.fQ(2,"rolledBack")
B.aA=new A.kg(1,"back")
B.aB=new A.kj(0,"less")
B.fs=new A.fR(0,"off")
B.cu=new A.fR(1,"errorsOnly")
B.ft=new A.fR(2,"full")
B.cv=new A.km(2,"error")
B.aC=new A.bO(0,"open")
B.cw=new A.bO(1,"chain")
B.cx=new A.bO(2,"throughDoor")
B.cy=new A.bO(3,"letterbox")
B.ae=new A.bO(4,"ignore")
B.O=new A.fS(0,"opaque")
B.fu=new A.fS(1,"masked")
B.aD=new A.fS(2,"blended")
B.fv=new A.fT(!1,B.aB,!1,!0,B.ad,B.ad,B.aw,!1,B.aA,!0,!1,!0,!0,!0,!0,!1)
B.fw=new A.fT(!0,B.aB,!1,!0,B.ad,B.ad,B.aw,!0,B.aA,!0,!1,!0,!0,!0,!0,!1)
B.eL=new A.eO(2,"srcAlpha")
B.eM=new A.eO(3,"oneMinusSrcAlpha")
B.fx=new A.fT(!0,B.aB,!1,!0,B.eL,B.eM,B.aw,!0,B.aA,!0,!1,!0,!0,!0,!0,!1)
B.fy=new A.ea(0)
B.fz=new A.ea(24e5)
B.cz=new A.ci(0,"compliance")
B.fA=new A.fU(B.cz)
B.cA=new A.ci(1,"rupture")
B.fB=new A.fU(B.cA)
B.cB=new A.ci(2,"synchronisation")
B.fC=new A.fU(B.cB)
B.cC=new A.eR(0,"front")
B.fD=new A.eR(1,"rearService")
B.fE=new A.eR(2,"sideBoundary")
B.fF=new A.eR(3,"roofline")
B.u=new A.eb(0,"north")
B.af=new A.eb(1,"east")
B.p=new A.eb(2,"south")
B.ag=new A.eb(3,"west")
B.fG=new A.ec(0,"ground")
B.fH=new A.ec(1,"first")
B.fI=new A.ec(2,"hidden")
B.fJ=new A.dp(0,"mantle")
B.fK=new A.dp(1,"portal")
B.fM=new A.dp(3,"inventory")
B.cD=new A.dp(4,"aftermath")
B.fL=new A.dp(2,"window")
B.fO=new A.ed(B.fL,"shutter","the shutter")
B.fN=new A.dp(5,"none")
B.fP=new A.ed(B.fN,null,null)
B.fQ=new A.A("saved mantle history is malformed",null,null)
B.fR=new A.A("rupture elapsed time is malformed",null,null)
B.fS=new A.A("presentation keys must be strings",null,null)
B.fT=new A.A("model package payload hash mismatch",null,null)
B.fU=new A.A("unsupported accessibility profile",null,null)
B.fV=new A.A("unsupported promoted model index schema",null,null)
B.fW=new A.A("materialSlot is required",null,null)
B.fX=new A.A("inventory inspections must be an object",null,null)
B.fY=new A.A("screenplay event random range is invalid",null,null)
B.cE=new A.A("saved mantle state is malformed",null,null)
B.fZ=new A.A("inactive rupture has elapsed time",null,null)
B.h_=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.h0=new A.A("invalid action bindings",null,null)
B.h1=new A.A("listener room is empty",null,null)
B.h2=new A.A("control bindings conflict",null,null)
B.h3=new A.A("saved difficulty state is malformed",null,null)
B.h4=new A.A("saved house drift state is malformed",null,null)
B.h5=new A.A("saved sleep record is malformed",null,null)
B.h6=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.h7=new A.A("manifest string array is malformed",null,null)
B.h8=new A.A("unsupported settings store",null,null)
B.h9=new A.A("screenplay scene must be an object",null,null)
B.ha=new A.A("settings values must be an object",null,null)
B.hb=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.hc=new A.A("invalid anisotropy limit",null,null)
B.hd=new A.A("audio event position is not finite",null,null)
B.he=new A.A("event sequence must be non-negative",null,null)
B.hf=new A.A("screenplay branch is invalid",null,null)
B.hg=new A.A("inventory inspection counts are invalid",null,null)
B.hh=new A.A("only keybinds can be remapping",null,null)
B.hi=new A.A("modelScale must be positive and finite",null,null)
B.hj=new A.A("listener position is not finite",null,null)
B.hk=new A.A("screenplay event has invalid core fields",null,null)
B.hl=new A.A("invalid action ID",null,null)
B.hm=new A.A("saved window state is malformed",null,null)
B.hn=new A.A("manifest socket map is malformed",null,null)
B.ho=new A.A("unsupported graphics preset",null,null)
B.hp=new A.A("save run and meta must be objects",null,null)
B.hq=new A.A("saved house state is malformed",null,null)
B.hr=new A.A("saved sleep record must be an object",null,null)
B.hs=new A.A("model package parts must be non-empty",null,null)
B.ht=new A.A("sound cue must be a non-empty string",null,null)
B.hu=new A.A("saved session run is malformed",null,null)
B.hv=new A.A("save map keys must be strings",null,null)
B.hw=new A.A("unsupported graphics profile",null,null)
B.hx=new A.A("model package exceeds payload count limit",null,null)
B.hy=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.hz=new A.A("unsupported audio options",null,null)
B.hA=new A.A("transform.scale must be positive",null,null)
B.hB=new A.A("Escape is reserved for pause navigation",null,null)
B.hC=new A.A("saved day-loop state is malformed",null,null)
B.hD=new A.A("rupture extinguished mantle is unknown",null,null)
B.hE=new A.A("model package exceeds part limit",null,null)
B.cF=new A.A("unsupported controls profile",null,null)
B.hF=new A.A("promoted model index entry is malformed",null,null)
B.cG=new A.A("saved portal state is malformed",null,null)
B.hG=new A.A("acoustic portal profile is not finite",null,null)
B.hH=new A.A("model package exceeds total byte limit",null,null)
B.hI=new A.A("unsupported model package schema",null,null)
B.hJ=new A.A("manifest socket names are malformed",null,null)
B.hK=new A.A("saved house state does not match this house",null,null)
B.hL=new A.A("presentation snapshot contains a non-finite number",null,null)
B.hM=new A.A("screenplay array contains invalid text",null,null)
B.hN=new A.A("screenplay event day/hour is out of range",null,null)
B.hO=new A.A("unsupported gameplay settings profile",null,null)
B.hP=new A.A("save contains a non-finite number",null,null)
B.hQ=new A.A("unsupported graphics store",null,null)
B.hR=new A.A("screenplay option is invalid",null,null)
B.hS=new A.A("screenplay needs sources and scenes arrays",null,null)
B.hT=new A.A("brush component needs an id and label",null,null)
B.hU=new A.A("text.json root must be an object",null,null)
B.hV=new A.A("screenplay root must be an object",null,null)
B.hW=new A.A("event kind is empty",null,null)
B.hX=new A.A("screenplay event effects are invalid",null,null)
B.hY=new A.A("promoted model index entries are required",null,null)
B.hZ=new A.A("invalid control binding token",null,null)
B.i_=new A.A("audio transmission muffle is invalid",null,null)
B.i0=new A.A("acoustic portal muffle order is invalid",null,null)
B.i1=new A.A("unsupported settings profile",null,null)
B.i2=new A.A("saved session clock is malformed",null,null)
B.i3=new A.A("rupture mantle IDs are malformed",null,null)
B.i4=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.i5=new A.A("invalid screen-reader verbosity",null,null)
B.i6=new A.A("saved sleep record has an unknown enum",null,null)
B.i7=new A.A("audio cue variants are empty",null,null)
B.i8=new A.A("manifest numeric array is malformed",null,null)
B.i9=new A.A("screenplay beat has invalid kind or text",null,null)
B.ia=new A.A("save root must be an object",null,null)
B.ib=new A.A("audio event identity is empty",null,null)
B.ic=new A.A("screenplay event random range is out of range",null,null)
B.id=new A.A("render capabilities contain invalid limits",null,null)
B.ie=new A.A("saved house overrides are malformed",null,null)
B.a_=new A.c0(0,0,0)
B.d4=new A.c0(1,1,1)
B.k0=s([],t.Fk)
B.bp=s([],t.cv)
B.ig=new A.kx(B.a_,B.a_,0,1,null,null,B.d4,0,null,B.k0,B.bp)
B.cH=new A.aR(0,0,0)
B.ih=new A.eS(0,"idle")
B.ah=new A.eS(1,"active")
B.ii=new A.eS(2,"ended")
B.ij=new A.eS(3,"aborted")
B.b5=new A.fV(0,"outside")
B.ik=new A.fV(1,"intersects")
B.il=new A.fV(2,"inside")
B.im=new A.dq(0,"timeAdvanced")
B.io=new A.dq(1,"dayEndReached")
B.ip=new A.dq(2,"journalWritten")
B.iq=new A.dq(3,"journalRejected")
B.ir=new A.dq(4,"slept")
B.is=new A.dq(5,"complianceFloorTripped")
B.b6=new A.dr(0,"twentyFourHour")
B.cI=new A.dr(1,"twelveHour")
B.cJ=new A.ds(0,"important")
B.cK=new A.ds(1,"always")
B.b7=new A.cj(0,"pauseAndMute")
B.cL=new A.dt(0,"press")
B.cM=new A.dt(1,"hold")
B.cN=new A.du(0,"compact")
B.cO=new A.du(1,"spacious")
B.cP=new A.cT(1,"standard")
B.cQ=new A.cT(2,"detailed")
B.cR=new A.dv(0,"toast")
B.cS=new A.dv(1,"detailed")
B.cT=new A.cU(1,"readable")
B.iy=new A.i6(0,"vertex")
B.cU=new A.i6(1,"indices")
B.cV=new A.kE(0,"staticDraw")
B.i=new A.i7(0,"ready")
B.Z=new A.i7(1,"lost")
B.ai=new A.fY(0,"prepared")
B.iz=new A.fY(1,"committed")
B.iA=new A.fY(2,"rolledBack")
B.iB=new A.eU(0,"color")
B.cW=new A.eU(1,"colorAndGlow")
B.iC=new A.eU(2,"colorDepthGlow")
B.b8=new A.eU(3,"depthOnly")
B.b9=new A.i9(1,"linear")
B.cX=new A.kG(0,"clampToEdge")
B.iD=new A.kF(1,1,1,!1,B.b9,B.b9,B.cX,1)
B.ba=new A.i9(2,"linearMipmapLinear")
B.iE=new A.cW(0,"beforeShadow")
B.iF=new A.cW(2,"beforeDepth")
B.cY=new A.cW(3,"afterDepth")
B.cZ=new A.cW(4,"beforeWorld")
B.iG=new A.cW(5,"afterWorld")
B.P=new A.cW(6,"afterResolve")
B.iH=new A.cW(9,"beforePresent")
B.d_=new A.ck(0,"readBeforeWrite")
B.iI=new A.ck(1,"duplicateWriter")
B.iJ=new A.ck(2,"sampledMultisampledAttachment")
B.bb=new A.ck(3,"invalidResolve")
B.iK=new A.ck(4,"formatOrSizeMismatch")
B.iL=new A.ck(5,"unversionedReadWrite")
B.iM=new A.ck(6,"invalidHistoryRead")
B.iN=new A.ck(7,"dependencyCycle")
B.iO=new A.ck(8,"missingCapability")
B.d0=new A.cA(0,"high")
B.bc=new A.cA(1,"standard")
B.bd=new A.ee(1,B.bc,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.aE=new A.ef(0,"player")
B.be=new A.ef(1,"inserted")
B.d1=new A.ef(2,"warden")
B.d2=new A.eV(0,"wrongKind")
B.d3=new A.eV(1,"staleGeneration")
B.iR=new A.eV(2,"doubleRelease")
B.aF=new A.eV(3,"releasedResource")
B.iU=new A.cX("kitchen-range","settle")
B.iV=new A.cX("front-door-knocker","knock")
B.iW=new A.cX("cellar-drain","drip")
B.iX=new A.cX("bedroom-timber","creak")
B.iY=new A.cX("kitchen-pipe","tick")
B.iZ=new A.cX("bathroom-cistern","settle")
B.j_=new A.cX("landing-window","wind")
B.jd=new A.kN(1,"visitor")
B.jh=new A.qk(null)
B.ji=new A.ql(null)
B.bf=new A.ii(!1,0,0.85,0.92,1,0,1,0,0)
B.jj=new A.c0(0.008,0.012,0.024)
B.d5=s([0,2,2,3],t.t)
B.jk=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.bg=s([B.cJ,B.cK],A.a_("u<ds>"))
B.jl=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bh=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.G=new A.bH(0,"audio")
B.U=new A.iI(0,"level")
B.mV=new A.ba("master","Master",B.G,B.U,1,0,1,"audio")
B.n_=new A.ba("voice","Visitor voice",B.G,B.U,1,0,1,"audio")
B.mR=new A.ba("effects","Effects",B.G,B.U,1,0,1,"audio")
B.mS=new A.ba("ambience","House ambience",B.G,B.U,1,0,1,"audio")
B.mW=new A.ba("music","Music",B.G,B.U,1,0,1,"audio")
B.aQ=new A.bH(1,"display")
B.mZ=new A.ba("brightness","Display brightness",B.aQ,B.U,1,0.6,1.4,"display")
B.an=new A.iI(1,"toggle")
B.mU=new A.ba("muted","Mute house audio",B.G,B.an,!1,null,null,"audio")
B.a7=new A.bH(2,"accessibility")
B.mX=new A.ba("mono","Mono-compatible mix",B.a7,B.an,!1,null,null,"audio")
B.mT=new A.ba("high-contrast","High-contrast interface",B.a7,B.an,!1,null,null,"display")
B.mY=new A.ba("strong-highlights","Strong focus highlights",B.a7,B.an,!1,null,null,"display")
B.E=s([B.mV,B.n_,B.mR,B.mS,B.mW,B.mZ,B.mU,B.mX,B.mT,B.mY],A.a_("u<ba>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.jn=s([81,77,83,72],t.t)
B.et=new A.dj(1,"strong")
B.bi=s([B.ca,B.et],A.a_("u<dj>"))
B.eH=new A.eN(0,"swap")
B.eI=new A.eN(1,"replace")
B.eJ=new A.eN(2,"cancel")
B.jo=s([B.eH,B.eI,B.eJ],A.a_("u<eN>"))
B.jp=s([2,5,9,12,16,19],t.t)
B.it=new A.cj(1,"pauseOnly")
B.iu=new A.cj(2,"continuePlayback")
B.aG=s([B.b7,B.it,B.iu],A.a_("u<cj>"))
B.jq=s(["uQuantizationBits","uDitherStrength"],t.s)
B.js=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.jt=s([B.aC,B.cw,B.cx,B.cy,B.ae],A.a_("u<bO>"))
B.ju=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.jv=s(["30","60","display"],t.s)
B.jw=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.jx=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.au=new A.c8(0,"full")
B.c4=new A.c8(1,"compressed")
B.c5=new A.c8(2,"off")
B.d6=s([B.au,B.c4,B.c5],A.a_("u<c8>"))
B.bj=s([B.b6,B.cI],A.a_("u<dr>"))
B.jy=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.ey=new A.dk(1,"reduced")
B.bk=s([B.aY,B.ey],A.a_("u<dk>"))
B.eu=new A.cR(0,"wide")
B.ev=new A.cR(2,"night")
B.bl=s([B.eu,B.cb,B.ev],A.a_("u<cR>"))
B.jz=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.jK=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.d7=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bm=s([B.cN,B.cO],A.a_("u<du>"))
B.n7=new A.bT(0,"long")
B.dY=new A.bT(1,"short")
B.d8=s([B.n7,B.dY],A.a_("u<bT>"))
B.fo=new A.cg("1 - 9","Select Response",!0)
B.fk=new A.cg("SPACE","Silence Ring",!1)
B.jM=s([B.fo,B.fk],t.sa)
B.a2=new A.bS(0,"visual")
B.bC=new A.bS(1,"graphics")
B.a3=new A.bS(2,"gameplay")
B.bD=new A.bS(3,"controls")
B.I=new A.bS(4,"audio")
B.J=new A.bS(5,"accessibility")
B.jN=s([B.a2,B.bC,B.a3,B.bD,B.I,B.J],A.a_("u<bS>"))
B.jO=s(["master","voice","effects","ambience","music"],t.s)
B.jP=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution"],t.s)
B.bn=s([B.cR,B.cS],A.a_("u<dv>"))
B.d9=s(["res/house/house.json","assets/house/house.json"],t.s)
B.jR=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.iP=new A.cA(2,"safe")
B.iQ=new A.cA(3,"custom")
B.da=s([B.d0,B.bc,B.iP,B.iQ],A.a_("u<cA>"))
B.F=new A.cn(0,"inactive")
B.bO=new A.cn(2,"affineWarp")
B.dQ=new A.cn(3,"vertexSnap")
B.bP=new A.cn(4,"tapeGiveup")
B.bQ=new A.cn(5,"portalFail")
B.a5=new A.cn(6,"lightsOut")
B.db=s([B.F,B.aP,B.bO,B.dQ,B.bP,B.bQ,B.a5],A.a_("u<cn>"))
B.jS=s([B.aE,B.be,B.d1],A.a_("u<ef>"))
B.jT=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.ow=new A.bA("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.ov=new A.bA("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.or=new A.bA("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.oz=new A.bA("ronnie.response","named","A route card has Ronnie written on its back.")
B.oy=new A.bA("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.jU=s([B.ow,B.ov,B.or,B.oz,B.oy],t.uk)
B.ox=new A.bA("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.ou=new A.bA("ronnie.response","named","The name Ronnie holds when the room does not.")
B.os=new A.bA("denise.revision","accepted","One correction remains yours to protect.")
B.op=new A.bA("attercliffe.plate","kept","A second place survives the room changing around it.")
B.jV=s([B.ox,B.ou,B.os,B.op],t.uk)
B.k7=s([],t.Fm)
B.k6=s([],t.op)
B.jW=s([],A.a_("u<cC>"))
B.k_=s([],t.yH)
B.a0=s([],t.qP)
B.jY=s([],t.u)
B.de=s([],t.xB)
B.k5=s([],t.tS)
B.k3=s([],t.El)
B.m=s([],t.s)
B.dd=s([],t.ld)
B.jX=s([],t.su)
B.dc=s([],t.uI)
B.k4=s([],t.nm)
B.bo=s([],t.n)
B.jZ=s([],t.t)
B.bq=s([],t.zz)
B.iT=new A.ib(15,"kitchen",-0.3,0)
B.iS=new A.ib(19,"spare-room",0,0.3)
B.Q=s([B.iT,B.iS],A.a_("u<ib>"))
B.k9=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.n4=new A.bI(0,"bed")
B.n5=new A.bI(1,"chair")
B.n6=new A.bI(2,"floor")
B.df=s([B.n4,B.n5,B.n6],A.a_("u<bI>"))
B.ka=s(["high","medium","low"],t.s)
B.ew=new A.cz(1,"headphones")
B.ex=new A.cz(2,"speakers")
B.br=s([B.cc,B.ew,B.ex,B.cd],A.a_("u<cz>"))
B.kb=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bs=s([B.cL,B.cM],A.a_("u<dt>"))
B.bB=new A.cm(0,"root")
B.du=new A.bu(0,"pauseMenu")
B.lt=new A.dA(B.bB,B.du,null)
B.kc=s([B.lt],t.bA)
B.bt=s([B.c8,B.ac,B.c9],A.a_("u<cQ>"))
B.iw=new A.cU(0,"instant")
B.ix=new A.cU(2,"slow")
B.bu=s([B.iw,B.cT,B.ix],A.a_("u<cU>"))
B.kd=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.ke=s([B.G,B.aQ,B.a7],A.a_("u<bH>"))
B.dg=s([B.u,B.af,B.p,B.ag],A.a_("u<eb>"))
B.V=new A.dH(0,"pbrMaterial")
B.a8=new A.dH(1,"shadowsAndOcclusion")
B.ao=new A.dH(2,"surfaceWeathering")
B.l=new A.dH(3,"atmosphereAndPost")
B.n1=new A.dH(4,"debugView")
B.aj=s([B.V,B.a8,B.ao,B.l,B.n1],A.a_("u<dH>"))
B.bR=new A.bk(0,"depthTest")
B.bS=new A.bk(1,"depthFunc")
B.bT=new A.bk(2,"depthWrite")
B.bU=new A.bk(3,"blendEnable")
B.bV=new A.bk(4,"blendFunc")
B.bW=new A.bk(5,"blendEquation")
B.bX=new A.bk(6,"cullEnable")
B.bY=new A.bk(7,"cullFace")
B.e0=new A.bk(8,"frontFace")
B.na=new A.bk(9,"stencilEnable")
B.dZ=new A.bk(10,"colorMask")
B.e_=new A.bk(11,"scissorEnable")
B.kf=s([B.bR,B.bS,B.bT,B.bU,B.bV,B.bW,B.bX,B.bY,B.e0,B.na,B.dZ,B.e_],A.a_("u<bk>"))
B.kg=s(["off","errors","full"],t.s)
B.kh=s(["off","fxaa","msaa2","msaa4"],t.s)
B.ki=s(["off","profile","standard","high"],t.s)
B.kj=s(["post_bloom"],t.s)
B.kk=s(["post_color_grade"],t.s)
B.kl=s(["post_depth_of_field"],t.s)
B.km=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.ko=s(["srgb","linear"],t.s)
B.kp=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.kq=s(["uBloomStrength"],t.s)
B.kr=s(["uLutSize","uStrength"],t.s)
B.ks=s([B.cz,B.cA,B.cB],A.a_("u<ci>"))
B.kt=s(["uTexelSize","uNear","uFar"],t.s)
B.dh=s(["uTexelStep"],t.s)
B.ku=s(["uninitialized"],t.s)
B.iv=new A.cT(0,"minimal")
B.bv=s([B.iv,B.cP,B.cQ],A.a_("u<cT>"))
B.ot=new A.bA("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.oo=new A.bA("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.on=new A.bA("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.oq=new A.bA("ronnie.response","named","The route card gives one name its own line.")
B.kv=s([B.ot,B.oo,B.on,B.oq],t.uk)
B.aa=new A.c7(0,"waiting")
B.as=new A.c7(1,"atDoor")
B.at=new A.c7(2,"consulting")
B.aS=new A.c7(3,"resolved")
B.kw=s([B.aa,B.as,B.at,B.aS],A.a_("u<c7>"))
B.kx=s(["post_dither","post_quantization_bits"],t.s)
B.fp=new A.cg("W A S D","Move",!1)
B.fn=new A.cg("TAB","Journal",!1)
B.fm=new A.cg("CAPS","Shader Lab",!1)
B.fl=new A.cg("ESC","Pause",!1)
B.ky=s([B.fp,B.fn,B.fm,B.fl],t.sa)
B.kz=s(["floor-linoleum","ceiling-stained"],t.s)
B.l7={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.kA=new A.a2(B.l7,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a_("a2<e,J?>"))
B.lj={uAlbedo:0}
B.di=new A.a2(B.lj,[0],t.I)
B.lq={uSsaoRaw:0,uSceneDepth:1}
B.kB=new A.a2(B.lq,[0,1],t.I)
B.ds={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.jJ=s(["KeyW","GamepadDpadUp"],t.s)
B.jI=s(["KeyS","GamepadDpadDown"],t.s)
B.jA=s(["KeyA","GamepadDpadLeft"],t.s)
B.jB=s(["KeyD","GamepadDpadRight"],t.s)
B.jC=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.jG=s(["KeyQ","GamepadB"],t.s)
B.jL=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.k8=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.jH=s(["KeyR","GamepadX"],t.s)
B.jD=s(["KeyF","GamepadRB"],t.s)
B.jE=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.jF=s(["KeyL"],t.s)
B.jr=s(["Escape","GamepadMenu"],t.s)
B.kC=new A.a2(B.ds,[B.jJ,B.jI,B.jA,B.jB,B.jC,B.jG,B.jL,B.k8,B.jH,B.jD,B.jE,B.jF,B.jr],A.a_("a2<e,K<e>>"))
B.kD=new A.a2(B.ds,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.ln={uScene:0,uHistory:1}
B.kE=new A.a2(B.ln,[0,1],t.I)
B.kY={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.kF=new A.a2(B.kY,["815d1d06d761c6cc04f6c149eae5aeb469f3a643","8711dabdf081ea81931c5a8bef4d1a64b3ce4aba","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.2"],t.p)
B.la={aPosition:0,aUvMat:1}
B.dj=new A.a2(B.la,[0,4],t.I)
B.lo={uScene:0,uLut:1}
B.kG=new A.a2(B.lo,[0,1],t.I)
B.lp={uSource:0}
B.dk=new A.a2(B.lp,[0],t.I)
B.lh={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.kH=new A.a2(B.lh,[0,1,2,3,4,5,6],t.I)
B.dl=new A.cV([B.a2,"settings.visual",B.bC,"settings.graphics",B.a3,"settings.gameplay",B.bD,"settings.controls",B.I,"settings.audio",B.J,"settings.accessibility"],t.EJ)
B.dm=new A.cV([B.a2,"visual",B.bC,"graphics",B.a3,"gameplay",B.bD,"controls",B.I,"audio",B.J,"accessibility"],t.EJ)
B.l5={uSharp:0,uBlurred:1,uSceneDepth:2}
B.kI=new A.a2(B.l5,[0,1,2],t.I)
B.ls={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.kJ=new A.a2(B.ls,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.lc={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.j9=new A.bt("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.j4=new A.bt("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.j8=new A.bt("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.jb=new A.bt("wallpaper-damp","grime",7106925,0.94,0.76)
B.j5=new A.bt("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.ja=new A.bt("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.jc=new A.bt("wallpaper-peeling","grime",9340536,0.91,0.68)
B.j6=new A.bt("floor-wood","wall-plaster",7755327,0.88,0.22)
B.j2=new A.bt("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.j3=new A.bt("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.j0=new A.bt("floor-concrete","grime",7828331,0.96,0.92)
B.j1=new A.bt("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.j7=new A.bt("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bw=new A.a2(B.lc,[B.j9,B.j4,B.j8,B.jb,B.j5,B.ja,B.jc,B.j6,B.j2,B.j3,B.j0,B.j1,B.j7],A.a_("a2<e,bt>"))
B.lk={uBloom:0}
B.kK=new A.a2(B.lk,[0],t.I)
B.ll={uSceneDepth:0}
B.kL=new A.a2(B.ll,[0],t.I)
B.lm={uScene:0}
B.kM=new A.a2(B.lm,[0],t.I)
B.C={}
B.dn=new A.a2(B.C,[],A.a_("a2<e,hS>"))
B.kN=new A.a2(B.C,[],A.a_("a2<e,K<C>>"))
B.aH=new A.a2(B.C,[],t.p)
B.oF=new A.a2(B.C,[],A.a_("a2<e,l>"))
B.bx=new A.a2(B.C,[],A.a_("a2<e,C>"))
B.z=new A.a2(B.C,[],t.I)
B.kO=new A.a2(B.C,[],A.a_("a2<e,@>"))
B.oG=new A.a2(B.C,[],A.a_("a2<e,e?>"))
B.kP=new A.a2(B.C,[],A.a_("a2<@,@>"))
B.l0={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.kQ=new A.a2(B.l0,[0,1,2,3,4,5,6],t.I)
B.dv=new A.cH(0,"resume")
B.dw=new A.cH(1,"settings")
B.dx=new A.cH(2,"controls")
B.dy=new A.cH(3,"save")
B.dz=new A.cH(4,"help")
B.dA=new A.cH(5,"credits")
B.dB=new A.cH(6,"back")
B.kR=new A.cV([B.dv,"pause.resume",B.dw,"pause.settings",B.dx,"pause.controls",B.dy,"pause.save",B.dz,"pause.help",B.dA,"pause.credits",B.dB,"pause.back"],A.a_("cV<cH,e>"))
B.le={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.kS=new A.a2(B.le,[0,1,2,3],t.I)
B.lr={uTex:0}
B.kT=new A.a2(B.lr,[0],t.I)
B.by=new A.cV([B.aP,1,B.bO,1.5,B.dQ,1.5,B.bP,2,B.bQ,2,B.a5,4],A.a_("cV<cn,C>"))
B.oH=new A.il(0,"srgb")
B.oI=new A.il(1,"linear")
B.aX=new A.fD(2,"blended")
B.kU=new A.cG("weather:snow-particle",null,0.82,0.9,1,0.04,0.72,1,1,B.aX,!1,!1)
B.kV=new A.cG("weather:hail-particle",null,0.62,0.74,0.82,0.06,0.35,1,1,B.aX,!1,!1)
B.kW=new A.cG("weather:rain-particle",null,0.55,0.68,0.82,0.08,0.18,1,1,B.aX,!1,!1)
B.bz=new A.eZ(0,"resident")
B.dp=new A.eZ(1,"pending")
B.dq=new A.eZ(2,"missing")
B.dr=new A.eZ(3,"evicted")
B.oJ=new A.l_(!1)
B.kX=new A.l_(!0)
B.k1=s([],t.bA)
B.k2=s([],A.a_("u<bu>"))
B.bA=new A.ek(B.k1,B.k2,null)
B.dt=new A.cm(1,"settings")
B.lu=new A.cm(2,"visual")
B.lv=new A.cm(3,"graphics")
B.lw=new A.cm(4,"gameplay")
B.lx=new A.cm(5,"controls")
B.ly=new A.cm(6,"audio")
B.lz=new A.cm(7,"accessibility")
B.lA=new A.cm(8,"credits")
B.a1=new A.bu(1,"settings")
B.lB=new A.bu(2,"journal")
B.lC=new A.bu(3,"sleep")
B.lD=new A.bu(4,"help")
B.lE=new A.bu(5,"visitor")
B.lF=new A.bu(6,"ending")
B.dC=new A.el(0,"opened")
B.dD=new A.el(2,"backed")
B.dE=new A.el(3,"resumed")
B.lG=new A.el(4,"dismissed")
B.a4=new A.el(5,"unchanged")
B.lH=new A.bv("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.lI=new A.bv("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.lJ=new A.bv("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.lK=new A.bv("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.lL=new A.bv("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.lM=new A.bv("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.lN=new A.bv("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.lO=new A.bv("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.lP=new A.bv("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.lQ=new A.la(0,1,null)
B.lS=new A.lb(1,"high")
B.lR=new A.rm(!1,!0,!0,!0,!1,B.lS,35,256)
B.lT=new A.lf(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.D=new A.em(0,"none")
B.bE=new A.em(1,"rain")
B.aI=new A.em(2,"sleet")
B.aJ=new A.em(3,"snow")
B.ak=new A.em(4,"hail")
B.lU=new A.cI(0,"tooShortForHeader")
B.lV=new A.cI(1,"badMagic")
B.lW=new A.cI(2,"unsupportedVersion")
B.dG=new A.cI(3,"unsupportedStride")
B.lX=new A.cI(4,"truncatedVertexData")
B.lY=new A.cI(5,"nonFiniteBounds")
B.dH=new A.cI(6,"nonFiniteVertex")
B.lZ=new A.cI(7,"vertexCountNotMultipleOfThree")
B.bF=new A.f3(0,"safe")
B.K=new A.f3(1,"standard")
B.S=new A.f3(2,"high")
B.a6=new A.aY(B.C,0,t.M)
B.al=new A.en(B.bF,B.a6)
B.li={shadows:0}
B.mQ=new A.aY(B.li,1,t.M)
B.dI=new A.en(B.K,B.mQ)
B.l2={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.mH=new A.aY(B.l2,5,t.M)
B.dJ=new A.en(B.S,B.mH)
B.m_=new A.f3(4,"shipping")
B.l4={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.mI=new A.aY(B.l4,7,t.M)
B.oK=new A.en(B.m_,B.mI)
B.aK=new A.ln(0,0,0,1)
B.m0=new A.as(0,1)
B.m1=new A.bb(0.35,0.52,0.88)
B.m2=new A.aC(0.46,0.25,0.2)
B.dK=new A.bb(0.22,0.45,0.92)
B.m3=new A.aC(0.48,0.4,0.34)
B.m4=new A.aC(0.31,0.25,0.23)
B.bG=new A.bb(0.75,0.52,0.42)
B.m5=new A.bb(0.4,0.65,0.95)
B.bH=new A.bb(0.88,0.96,1)
B.m6=new A.aC(0.37,0.33,0.31)
B.m7=new A.bb(0.62,0.48,0.45)
B.m8=new A.aC(0.34,0.32,0.29)
B.dL=new A.aC(0.38,0.25,0.19)
B.bI=new A.bb(0.9,0.8,0.72)
B.aL=new A.bb(0.28,0.16,0.12)
B.m9=new A.aC(0.31,0.28,0.24)
B.aM=new A.bb(0.65,0.45,0.35)
B.ma=new A.aC(0.58,0.56,0.5)
B.dM=new A.bb(0.2,0.38,0.9)
B.mb=new A.aC(0.44,0.37,0.28)
B.mc=new A.aC(0.52,0.5,0.44)
B.md=new A.aC(0.24,0.25,0.27)
B.me=new A.aC(0.28,0.27,0.25)
B.mf=new A.bb(0.35,0.28,0.25)
B.dN=new A.bb(0.52,0.32,0.38)
B.mg=new A.aC(0.42,0.4,0.38)
B.mh=new A.aC(0.18,0.2,0.21)
B.mi=new A.aC(0.2,0.12,0.1)
B.aN=new A.bb(0.35,0.2,0.15)
B.mj=new A.aC(0.12,0.15,0.2)
B.mk=new A.hd(0,"constructed")
B.T=new A.hd(1,"ready")
B.bJ=new A.hd(2,"lost")
B.ml=new A.iE(B.al,384,216,1,B.b3,0,512,32,4,1,B.cu)
B.bK=new A.f6(0,"constructed")
B.mm=new A.f6(1,"initializing")
B.bL=new A.f6(2,"ready")
B.dO=new A.f6(3,"contextLost")
B.j=new A.he(0,"read")
B.k=new A.he(1,"write")
B.L=new A.he(2,"historyRead")
B.bM=new A.hf(0,"prepared")
B.mn=new A.hf(1,"committed")
B.mo=new A.hf(2,"rolledBack")
B.r=new A.iG(0,"rgba8")
B.mp=new A.aS("dofBlurH",B.r,192,108,1,0)
B.mq=new A.aS("dofBlurV",B.r,192,108,1,0)
B.mr=new A.aS("dofOutput",B.r,384,216,1,0)
B.dP=new A.iG(2,"depth24")
B.ms=new A.aS("shadowMap",B.dP,512,512,1,0)
B.mt=new A.aS("ssaoRaw",B.r,192,108,1,0)
B.mu=new A.aS("ssaoBlurred",B.r,192,108,1,0)
B.mv=new A.aS("gradeOutput",B.r,384,216,1,0)
B.mw=new A.aS("vhsOutput",B.r,384,216,1,0)
B.mx=new A.aS("sceneDepth",B.dP,384,216,1,0)
B.my=new A.aS("bloomBlurH",B.r,192,108,1,0)
B.mz=new A.aS("bloomBlurV",B.r,192,108,1,0)
B.mA=new A.aS("present",B.r,384,216,1,0)
B.bN=new A.aS("sceneColor",B.r,384,216,1,0)
B.mB=new A.aS("ps1Output",B.r,384,216,1,0)
B.mC=new A.f8(null,"save storage unavailable")
B.mD=new A.f8(null,"save could not be recovered")
B.mE=new A.f8(null,null)
B.l8={WheelUp:0,WheelDown:1}
B.mF=new A.aY(B.l8,2,t.M)
B.lf={open:0,closed:1}
B.mG=new A.aY(B.lf,2,t.M)
B.l1={Escape:0}
B.dR=new A.aY(B.l1,1,t.M)
B.l_={open:0,closed:1,mixed:2}
B.mJ=new A.aY(B.l_,3,t.M)
B.ld={front:0,"rear-service":1}
B.mK=new A.aY(B.ld,2,t.M)
B.mL=new A.fX([18,20],A.a_("fX<i>"))
B.lg={overcast:0,rain:1}
B.mM=new A.aY(B.lg,2,t.M)
B.lb={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.mN=new A.aY(B.lb,16,t.M)
B.l9={Escape:0,Tab:1,F11:2}
B.dS=new A.aY(B.l9,3,t.M)
B.l6={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.mO=new A.aY(B.l6,5,t.M)
B.l3={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.am=new A.aY(B.l3,7,t.M)
B.kZ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.mP=new A.aY(B.kZ,9,t.M)
B.dV=new A.fa(2,"link")
B.n0=new A.iJ(B.dV,"gl.createProgram() returned null")
B.dT=new A.fa(0,"vertex")
B.dU=new A.fa(1,"fragment")
B.dW=new A.fa(3,"validation")
B.aR=new A.lA(0,"none")
B.t=new A.iK(0,"live")
B.dX=new A.iK(1,"unavailable")
B.n2=new A.iL(0,"full")
B.n3=new A.iL(2,"culled")
B.X=new A.B(0,1,0)
B.ar=new A.B(0,-1,0)
B.n8=new A.bJ(-1,B.X,B.ar,B.d4,1,1,0.3,0.5)
B.n9=new A.lF(!1,"","",B.bo,B.bo)
B.e1=new A.dI(0,"resident")
B.e2=new A.dI(1,"pending")
B.e3=new A.dI(2,"missing")
B.e4=new A.dI(3,"evicted")
B.A=new A.B(0,0,0)
B.v=new A.hm(B.A,B.aK,1)
B.nb=A.cu("Jg")
B.nc=A.cu("Jh")
B.nd=A.cu("p2")
B.ne=A.cu("E2")
B.nf=A.cu("Eh")
B.ng=A.cu("Ei")
B.nh=A.cu("Ej")
B.ni=A.cu("aj")
B.nj=A.cu("J")
B.nk=A.cu("u7")
B.nl=A.cu("u8")
B.nm=A.cu("Fg")
B.nn=A.cu("bV")
B.e=new A.d7(0,"float1")
B.ap=new A.d7(1,"float2")
B.o=new A.d7(2,"float3")
B.no=new A.d7(3,"float4")
B.w=new A.d7(4,"mat4")
B.e5=new A.d7(5,"mat4Array")
B.bZ=new A.y(B.e,0)
B.e6=new A.y(B.e,1)
B.W=new A.d7(6,"sampler")
B.x=new A.y(B.W,0)
B.aq=new A.y(B.W,1)
B.e7=new A.y(B.W,2)
B.np=new A.y(B.W,3)
B.nq=new A.y(B.W,4)
B.nr=new A.y(B.W,5)
B.ns=new A.y(B.W,6)
B.nt=new A.uc(!1)
B.nu=new A.B(0,0,1)
B.nv=new A.B(0,3,0)
B.e8=new A.B(1,0,0)
B.nw=new A.B(0,-9.81,0)
B.nx=new A.B(1/0,1/0,1/0)
B.ny=new A.B(2.75,3,2.75)
B.nz=new A.B(-1/0,-1/0,-1/0)
B.e9=new A.cK(1,"normal")
B.c0=new A.cK(6,"tangent4")
B.nA=new A.cK(0,"position")
B.c2=new A.b7(B.nA,0,3)
B.c3=new A.b7(B.e9,3,3)
B.eg=new A.b7(B.c0,6,4)
B.ea=new A.cK(2,"color")
B.ed=new A.b7(B.ea,10,4)
B.eb=new A.cK(4,"alpha")
B.ee=new A.b7(B.eb,14,1)
B.ec=new A.cK(5,"uv0")
B.ef=new A.b7(B.ec,15,2)
B.nB=new A.cK(7,"uv1")
B.nF=new A.b7(B.nB,17,2)
B.c1=new A.cK(8,"legacyMaterialEffect")
B.nI=new A.b7(B.c1,19,1)
B.kn=s([B.c2,B.c3,B.eg,B.ed,B.ee,B.ef,B.nF,B.nI],t.v5)
B.nJ=new A.iS("surfaceV2WithUv1",20,B.kn)
B.nC=new A.b7(B.ea,6,4)
B.nD=new A.b7(B.eb,10,1)
B.nE=new A.b7(B.ec,11,2)
B.nG=new A.b7(B.c1,13,1)
B.jQ=s([B.c2,B.c3,B.nC,B.nD,B.nE,B.nG],t.v5)
B.a9=new A.iS("compatibility14",14,B.jQ)
B.nH=new A.b7(B.c1,17,1)
B.jm=s([B.c2,B.c3,B.eg,B.ed,B.ee,B.ef,B.nH],t.v5)
B.nK=new A.iS("surfaceV2",18,B.jm)
B.nL=new A.er(0,"visitorAnswered")
B.eh=new A.er(1,"visitorIgnored")
B.nM=new A.er(2,"entryVerified")
B.nN=new A.er(3,"entryContradicted")
B.nO=new A.er(4,"exposureAccepted")
B.nQ=new A.d8(1,"malformedDay")
B.nR=new A.d8(2,"malformedTier")
B.ei=new A.d8(3,"missingTierLines")
B.ab=new A.d8(6,"invalidPhase")
B.nU=new A.by(B.ab,"No reaction is due.")
B.o1=new A.bn(B.nU)
B.nZ=new A.by(B.ab,"The active visit cannot be chosen.")
B.o2=new A.bn(B.nZ)
B.nV=new A.by(B.ab,"The active visit has no line to advance.")
B.o3=new A.bn(B.nV)
B.nT=new A.d8(5,"noActiveVisit")
B.nW=new A.by(B.nT,"There is no active visit.")
B.ej=new A.bn(B.nW)
B.nY=new A.by(B.ab,"A visit is already active.")
B.o4=new A.bn(B.nY)
B.nS=new A.d8(4,"noArrival")
B.o0=new A.by(B.nS,"The authored arrival is missing.")
B.o5=new A.bn(B.o0)
B.nX=new A.by(B.ab,"That answer is not offered.")
B.o6=new A.bn(B.nX)
B.nP=new A.d8(0,"missingCorpus")
B.o_=new A.by(B.nP,"The authored visitor corpus is empty.")
B.o7=new A.bn(B.o_)
B.o8=new A.es(0,"none")
B.o9=new A.es(1,"splash")
B.c6=new A.es(2,"settle")
B.oa=new A.es(3,"melt")
B.ek=new A.es(4,"rebound")
B.ob=new A.fi(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.oc=new A.fi(-2,8.8,4.5,0.9,1,!0,0.00005)
B.od=new A.fi(0,0,0,1,1,!1,0)
B.oe=new A.fi(-5,18,5.5,0.65,1.35,!0,0.001)
B.of=new A.fi(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.el=new A.fl(1,"exact")
B.c7=new A.fl(2,"partial")
B.aT=new A.fl(3,"contradiction")
B.og=new A.fl(0,"skipped")
B.oh=new A.fk(B.og,B.a6)
B.oi=new A.fk(B.c7,B.a6)
B.oj=new A.iW(B.a0,!1)
B.ok=new A.iW(B.a0,!0)
B.em=new A.iY(0,"horizontal")
B.ol=new A.iY(1,"vertical")
B.en=new A.j_(0,"horizontal")
B.om=new A.j_(1,"vertical")
B.aU=new A.hu(0,"empty")
B.oA=new A.hu(1,"cpuReady")
B.aV=new A.hu(4,"released")})();(function staticFields(){$.v_=null
$.ce=A.c([],A.a_("u<J>"))
$.Ao=null
$.rz=0
$.rA=A.Hv()
$.zM=null
$.zL=null
$.Cu=null
$.Ck=null
$.CC=null
$.x8=null
$.xh=null
$.zk=null
$.vo=A.c([],A.a_("u<K<J>?>"))
$.hH=null
$.jE=null
$.jF=null
$.yS=!1
$.aq=B.y
$.AJ=""
$.AK=null
$.AF=null
$.r7=null
$.de=A.ag()
$.fu=A.ag()
$.aD=null
$.yA=A.ag()
$.BM=null
$.v=A.ag()
$.Bo=A.ag()
$.cM=A.ag()
$.ah=A.ag()
$.X=A.ag()
$.bp=A.ag()
$.V=A.ag()
$.yz=A.ag()
$.vE=null
$.yN=null
$.bq=null
$.yE=!1
$.z2=!1
$.jB=B.aZ
$.df=B.av
$.wU=!1
$.ze=!1
$.BO=null
$.hD=null
$.Im=A.m(t.N,A.a_("hr"))
$.mZ=null
$.Bz=0
$.yT=null
$.hJ=!1
$.BN=!1
$.yU=0
$.eB=0
$.yG="booting"
$.ct=0
$.fw=0
$.ao="hall"
$.jy=A.ag()
$.hA=A.ag()
$.cc=A.ag()
$.BT=null
$.z3=0
$.z7=1.65
$.eD=null
$.bd=null
$.jK=!1
$.cs=A.ag()
$.hB=A.ag()
$.jx=A.ag()
$.mW=A.ag()
$.Bn=A.ag()
$.Bm=A.ag()
$.ax=A.ag()
$.mX=A.ag()
$.jw=A.ag()
$.mV=A.ag()
$.jz=A.ag()
$.jA=A.ag()
$.ft=A.ag()
$.eA=A.ag()
$.hz=A.ag()
$.jv=A.ag()
$.jt=A.ag()
$.ju=A.ag()
$.aI=A.ag()
$.mU=A.ag()
$.bc=A.ag()
$.wV=A.Z(t.S)
$.dg=A.c([],t.s)
$.yL=null
$.Ca=!1
$.Br=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Jj","CM",()=>A.xa("_$dart_dartClosure"))
s($,"Ji","xY",()=>A.xa("_$dart_dartClosure_dartJSInterop"))
s($,"K0","D8",()=>A.c([new J.kP()],A.a_("u<iH>")))
s($,"Ju","CN",()=>A.dK(A.u6({
toString:function(){return"$receiver$"}})))
s($,"Jv","CO",()=>A.dK(A.u6({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Jw","CP",()=>A.dK(A.u6(null)))
s($,"Jx","CQ",()=>A.dK(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"JA","CT",()=>A.dK(A.u6(void 0)))
s($,"JB","CU",()=>A.dK(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Jz","CS",()=>A.dK(A.AG(null)))
s($,"Jy","CR",()=>A.dK(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"JD","CW",()=>A.dK(A.AG(void 0)))
s($,"JC","CV",()=>A.dK(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"JF","zw",()=>A.FL())
s($,"JJ","D0",()=>A.ED(4096))
s($,"JH","CZ",()=>new A.vy().$0())
s($,"JI","D_",()=>new A.vx().$0())
s($,"JG","CY",()=>A.EC(A.a1(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"JU","jR",()=>A.nf(B.nj))
s($,"Js","zv",()=>{A.ER()
return $.rz})
s($,"Jf","CL",()=>B.bN.i_())
s($,"Jo","zu",()=>A.l8(A.c([255,255,255,255],t.t)))
s($,"Jl","zr",()=>A.l8(A.c([128,128,255,255],t.t)))
s($,"Jk","zq",()=>A.l8(A.c([0,0,0,255],t.t)))
s($,"Jm","zs",()=>A.l8(A.c([255,255,0,255],t.t)))
s($,"Jn","zt",()=>A.l8(A.c([255,255,255,255],t.t)))
s($,"K5","Dc",()=>A.iR(0,1,0))
s($,"JE","CX",()=>A.FI(A.Z(t.N),0,0,A.iR(0,0,0)))
s($,"K2","D9",()=>A.iC("^[a-z0-9][a-z0-9._-]*$"))
s($,"K8","fB",()=>{var q=$.AF
if(q==null){A.x4()
A.x4()
A.x4()
A.x4()
q=$.AF=new A.tW()}return q})
s($,"Jp","xZ",()=>A.y4(B.b6,B.cJ,!0,B.b7,B.cL,B.cO,B.cP,B.cR,!0,!1,B.cT))
s($,"JP","D1",()=>new A.oa())
r($,"Ce","di",()=>A.yk(null,null))
r($,"jD","jQ",()=>A.fZ(null,null))
r($,"yK","fA",()=>A.fP(null,null,!1,1,!1,!1,2,1))
r($,"yO","cw",()=>$.xZ())
s($,"JV","D4",()=>new A.pJ())
s($,"JW","D5",()=>new A.pT())
s($,"JX","y0",()=>new A.q7(A.m(t.N,t.S)))
s($,"JR","D2",()=>A.eq().gb5().h(0,"debugPause")==="1")
s($,"JO","jP",()=>A.eq().gb5().h(0,"automation")==="1")
s($,"JL","y_",()=>A.HL())
s($,"JK","zx",()=>$.y_()!=null)
s($,"JM","zy",()=>$.jP()?A.eq().gb5().h(0,"captureMantleId"):null)
s($,"JN","zz",()=>A.eq().gb5().h(0,"captureMantleLit")==="1")
r($,"z6","eI",()=>A.iR(0,0,0))
r($,"z_","D7",()=>A.iR(0,0,0))
r($,"zf","nh",()=>A.iR(0,0,0))
s($,"JQ","zA",()=>A.HM())
s($,"JZ","ng",()=>new A.p3(A.iR(0,0,0)))
s($,"JY","D6",()=>new A.qv(new A.oJ()))
s($,"JS","cv",()=>new A.pm(A.c([],t.s)))
s($,"K1","eH",()=>A.AD())
s($,"K4","Db",()=>new A.tE(A.m(t.N,t.oZ)))
s($,"K3","Da",()=>new A.rD(A.ET(520588),B.bf))
s($,"JT","D3",()=>new A.pF())
s($,"K_","hR",()=>new A.rb(B.bA))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ej,ArrayBuffer:A.h8,ArrayBufferView:A.ir,DataView:A.l1,Float32Array:A.io,Float64Array:A.l2,Int16Array:A.l3,Int32Array:A.l4,Int8Array:A.l5,Uint16Array:A.l6,Uint32Array:A.l7,Uint8ClampedArray:A.f0,CanvasPixelArray:A.f0,Uint8Array:A.is})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.j7.$nativeSuperclassTag="ArrayBufferView"
A.j8.$nativeSuperclassTag="ArrayBufferView"
A.ip.$nativeSuperclassTag="ArrayBufferView"
A.j9.$nativeSuperclassTag="ArrayBufferView"
A.ja.$nativeSuperclassTag="ArrayBufferView"
A.iq.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.ne
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
